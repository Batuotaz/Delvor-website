import { createHmac, randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const inquirySchema = z.object({
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(3).max(1200),
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

export async function POST(request: Request) {
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowed(ip)) return NextResponse.json({ message: "Too many inquiries. Please try again later." }, { status: 429 });
  if (!(request.headers.get("content-type") ?? "").includes("application/json")) return NextResponse.json({ message: "A JSON request is required." }, { status: 415 });
  let input: unknown;
  try { input = await request.json(); } catch { return NextResponse.json({ message: "The inquiry could not be read." }, { status: 400 }); }
  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ message: "Please check your email and message." }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ message: "The inquiry could not be accepted." }, { status: 400 });

  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL ?? process.env.N8N_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) return NextResponse.json({ message: "Inquiry delivery is being connected. Please email Paulius@delvor.lt directly." }, { status: 503 });
  let target: URL;
  try { target = new URL(webhookUrl); } catch { return NextResponse.json({ message: "Inquiry delivery is temporarily unavailable. Please email Paulius@delvor.lt." }, { status: 503 }); }
  if (target.protocol !== "https:") return NextResponse.json({ message: "Inquiry delivery is temporarily unavailable. Please email Paulius@delvor.lt." }, { status: 503 });

  const requestId = randomUUID();
  const payload = JSON.stringify({ event: "contact_inquiry.created", requestId, receivedAt: new Date().toISOString(), inquiry: parsed.data });
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = createHmac("sha256", webhookSecret).update(timestamp + "." + payload).digest("hex");
  try {
    const response = await fetch(target, { method: "POST", headers: { "content-type": "application/json", "x-delvor-timestamp": timestamp, "x-delvor-signature": "sha256=" + signature, "x-delvor-request-id": requestId }, body: payload, signal: AbortSignal.timeout(8000), cache: "no-store" });
    if (!response.ok) return NextResponse.json({ message: "Inquiry delivery failed. Please email Paulius@delvor.lt." }, { status: 502 });
    return NextResponse.json({ message: "Your inquiry was received. Delvor will reply by email." }, { status: 202 });
  } catch { return NextResponse.json({ message: "Inquiry delivery failed. Please email Paulius@delvor.lt." }, { status: 502 }); }
}
