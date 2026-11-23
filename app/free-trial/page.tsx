import type { Metadata } from "next";
import TrialForm from "../components/TrialForm";

export const metadata: Metadata = {
  title: "Start your 7-day free trial",
  description: "Request a 7-day Delvor trial and get a custom Google Maps visibility report.",
};

const steps = [
  "Share your business details",
  "We contact you within 24 hours",
  "Receive your custom report after 7 days",
];

export default function FreeTrial() {
  return (
    <main className="trial-intake section-shell">
      <section className="trial-intro" aria-labelledby="trial-title">
        <p className="eyebrow">7-day free trial</p>
        <h1 id="trial-title">See where you stand on Google Maps.</h1>
        <p>We personally review every request, analyse your local visibility and deliver a custom GeoGrid report at the end of your 7-day trial.</p>
        <ol className="trial-intro-steps">
          {steps.map((step, index) => (
            <li key={step}><span className="step-index" aria-hidden="true">0{index + 1}</span>{step}</li>
          ))}
        </ol>
      </section>
      <TrialForm />
    </main>
  );
}
