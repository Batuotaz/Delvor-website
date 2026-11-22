import { createHmac, randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const requestSchema = z.object({
  email: z.string().trim().email().max(254),
  businessName: z.string().trim().min(2).max(160),
  profileUrl: z.string().trim().url().max(2048),
  city: z.string().trim().min(2).max(80),
  country: z.string().trim().min(2).max(80),
  contactName: z.string().trim().min(2).max(120),
  phone: z.string().trim().transform((value) => value.replace(/[\s().-]/g, "")).refine((value) => /^\+[1-9][0-9]{7,14}$/.test(value), "A valid international phone number is required."),
  consent: z.literal("yes"),
  companyWebsite: z.string().max(0).optional(),
});

const attempts = new Map<string, { count: number; resetAt: number }>();

function allowed(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (current.count >= 5) return false;
  current.count += 1;
  return true;
}

function signature(payload: string, timestamp: string, secret: string) {
  return createHmac("sha256", secret).update(timestamp + "." + payload).digest("hex");
}

export async function POST(request: Request) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowed(ip)) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return NextResponse.json({ message: "A JSON request is required." }, { status: 415 });
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ message: "The request body could not be read." }, { status: 400 }); }
  const parsed = requestSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ message: "Please check the required fields and try again." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ message: "The request could not be accepted." }, { status: 400 });

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) return NextResponse.json({ message: "Trial requests are currently in request-only mode and the secure intake connection is not enabled. Please email Paulius@delvor.lt so the team can review your request." }, { status: 503 });
  let parsedWebhook: URL;
  try { parsedWebhook = new URL(webhookUrl); } catch { return NextResponse.json({ message: "The trial request service is temporarily unavailable." }, { status: 503 }); }
  if (parsedWebhook.protocol !== "https:") return NextResponse.json({ message: "The trial request service is temporarily unavailable." }, { status: 503 });

  const requestId = randomUUID();
  const payload = JSON.stringify({ event: "trial_request.created", requestId, receivedAt: new Date().toISOString(), request: parsed.data });
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signed = signature(payload, timestamp, webhookSecret);
  try {
    const response = await fetch(parsedWebhook, { method: "POST", headers: { "content-type": "application/json", "x-delvor-timestamp": timestamp, "x-delvor-signature": "sha256=" + signed, "x-delvor-request-id": requestId }, body: payload, signal: AbortSignal.timeout(8000), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ message: "The request could not be sent for review. Please email Paulius@delvor.lt." }, { status: 502 });
    return NextResponse.json({ message: "Your request was received for review. Delvor will contact you before any trial activation." }, { status: 202 });
  } catch { return NextResponse.json({ message: "The request could not be sent for review. Please email Paulius@delvor.lt." }, { status: 502 }); }
}

export function GET() {
  return NextResponse.json({ status: "request-only", activation: "manual" }, { status: 200 });
}
