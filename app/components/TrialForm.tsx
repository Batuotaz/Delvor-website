"use client";

import { FormEvent, useState } from "react";

export default function TrialForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");
    try {
      const response = await fetch("/api/trial-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string };
      if (response.status !== 202) throw new Error(result.message ?? "The request could not be sent.");
      setStatus("sent");
      setMessage(result.message ?? "Your request was received for review.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The request could not be sent. Please try again.");
    }
  }
  if (status === "sent") return <div className="form-state form-state-success" role="status"><span className="state-icon">✓</span><h3>Request received</h3><p>{message}</p><p className="small-note">We will contact you before any trial activation.</p></div>;
  return (
    <form className="trial-form" onSubmit={submit} aria-labelledby="trial-form-title">
      <div className="form-heading">
        <h2 id="trial-form-title">Start Your 7-Day Free Trial</h2>
        <p>We review every request personally and reach out within 24 hours. Zero obligation.</p>
      </div>
      <div className="form-grid">
        <label>Business name<input name="businessName" required minLength={2} maxLength={160} autoComplete="organization" /></label>
        <label>City<input name="city" required minLength={2} maxLength={80} autoComplete="address-level2" /></label>
        <label>Full name<input name="contactName" required minLength={2} maxLength={120} autoComplete="name" /></label>
        <label>Business email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
        <label className="full-field">
          Phone number (Optional)
          <input name="phone" type="tel" placeholder="+371 20 000 000" maxLength={24} autoComplete="tel" />
        </label>
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" value="yes" required />
        <span>I agree that Delvor may use these details to review and respond to this request. See the <a href="/privacy-policy">Privacy Policy</a>.</span>
      </label>
      <div className="form-honeypot" aria-hidden="true">
        <label>Leave this field empty<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status === "error" && <p className="form-error" role="alert">{message} <a href="mailto:paulius@delvor.lt">Email DELVOR</a></p>}
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending request…" : "Start My 7-Day Free Trial"}
      </button>
    </form>
  );
}
