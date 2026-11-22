"use client";

import { FormEvent, useState } from "react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/contact-inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form).entries())) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "The inquiry could not be sent.");
      setStatus("sent");
      setMessage(result.message ?? "Your inquiry was received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The inquiry could not be sent. Email Paulius@delvor.lt directly.");
    }
  }

  if (status === "sent") return <div className="form-state" role="status"><span className="state-icon">✓</span><h3>Inquiry received</h3><p>{message}</p></div>;
  return <form className="inquiry-form" onSubmit={submit} noValidate><label>Email address<input name="email" type="email" required maxLength={254} autoComplete="email" /></label><label>Message<textarea name="message" rows={4} required maxLength={1200} /></label><div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>{status === "error" && <p className="form-error" role="alert">{message}</p>}<button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send Inquiry"}</button><p className="small-note">We reply by email. Your message is handled securely.</p></form>;
}
