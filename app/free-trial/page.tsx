import type { Metadata } from "next";
import TrialForm from "../components/TrialForm";

export const metadata: Metadata = { title: "Start your 7-day free trial", description: "Start a Delvor 7-day local visibility trial with a free business visibility audit." };

export default function FreeTrial() {
  return <main><section className="inner-hero section-shell"><p className="eyebrow">Free audit included</p><h1>Start Your 7-Day Free Trial.</h1><p>See your local visibility, understand the opportunity and receive personalised recommendations.</p></section><section className="trial-offer section-shell"><div><p className="eyebrow">What’s included</p><h2>A focused first look at your local presence.</h2></div><div className="trial-offer-list"><p>Google Maps visibility baseline</p><p>Business profile opportunity review</p><p>Competitor context where data allows</p><p>Practical recommendations for your next steps</p></div></section><section className="trial-process section-shell"><div><span>01</span><strong>Share the details</strong><p>Business, location and contact information.</p></div><div><span>02</span><strong>We review your request</strong><p>We confirm scope and the onboarding step.</p></div><div><span>03</span><strong>Trial and audit begin</strong><p>Activation stays request-based until the secure connection is ready.</p></div></section><section className="inner-content section-shell trial-layout"><TrialForm /></section></main>;
}
