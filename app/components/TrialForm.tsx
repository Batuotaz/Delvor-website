"use client";

import { FormEvent, useState } from "react";

export default function TrialForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/trial-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "The request could not be sent.");
      setStatus("sent");
      setMessage(result.message ?? "Your request was received for review.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The request could not be sent. Please email Paulius@delvor.lt.");
    }
  }
  if (status === "sent") return <div className="form-state form-state-success" role="status"><span className="state-icon">✓</span><h3>Request received</h3><p>{message}</p><p className="small-note">We will contact you before any trial activation.</p></div>;
  return <form className="trial-form" onSubmit={submit} noValidate><div className="form-heading"><p className="eyebrow">Start My Free Trial</p><h2>Tell us where to begin.</h2><p>We review each request before activation and onboarding.</p></div><fieldset className="form-group"><legend>Business information</legend><div className="form-grid"><label>Business name<input name="businessName" required maxLength={160} autoComplete="organization" /></label><label>City<input name="city" required maxLength={80} placeholder="Riga" autoComplete="address-level2" /></label><label>Country<input name="country" required maxLength={80} placeholder="Latvia" autoComplete="country-name" /></label><label className="full-field">Google Maps business profile URL<input name="profileUrl" type="url" required placeholder="https://maps.google.com/…" maxLength={2048} /></label></div></fieldset><fieldset className="form-group"><legend>Contact information</legend><div className="form-grid"><label>Full name<input name="contactName" required maxLength={120} autoComplete="name" /></label><label>Business email<input name="email" type="email" required autoComplete="email" maxLength={254} /></label><label>Phone number<input name="phone" type="tel" required inputMode="tel" pattern="^\+[1-9][0-9\s().-]{7,20}$" placeholder="+371 20 000 000" maxLength={24} autoComplete="tel" /></label></div></fieldset><label className="consent"><input type="checkbox" name="consent" value="yes" required /><span>I agree that Delvor may use these details to review and respond to this request. See the <a href="/privacy-policy">Privacy Policy</a>.</span></label><div className="form-honeypot" aria-hidden="true"><label>Leave this field empty<input name="companyWebsite" tabIndex={-1} autoComplete="off" /></label></div>{status === "error" && <p className="form-error" role="alert">{message}</p>}<button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending request…" : "Start My Free Trial"}</button><p className="small-note">Requests remain pending until the secure trial connection is enabled.</p></form>;
}
