import Link from "next/link";
import GeoGridComparison from "./components/GeoGridComparison";
import InquiryForm from "./components/InquiryForm";

const processSteps = [
  ["Start Your 7-Day Free Trial", "Share your basic business details. We review your request personally and reach out within 24 hours."],
  ["Receive Your Trial Report", "At the end of your 7-day trial, you receive a custom visibility report showing where you stand and where the opportunities are."],
  ["Agree on Your Scope", "If you see value, we agree on a tailored monthly plan based on your market and goals."],
  ["Track Growth Every Two Weeks", "We manage the ongoing work 1-on-1 and send clear progress reports every two weeks."],
];

const valueItems = [
  ["Top 3 puts you in reach", "A prominent Maps listing makes it easier for nearby customers to find and call you. Lower visibility leaves more room for competitors."],
  ["Build visibility beyond ads", "Paid placements stop when you pause your budget. Local SEO helps build visibility that does not depend on paying for each click."],
  ["A strategy for your market", "Every city and niche is different. We work with you 1-on-1 and shape the strategy around your business."],
];

const industries = [
  "Clinics & Medical",
  "Auto Workshops",
  "Law & Accounting",
  "Beauty & Salons",
  "Home Services",
  "Hospitality",
];

const serviceCommitments = [
  ["24h", "Personal response to every request"],
  ["7 Days", "Free trial with custom visibility report"],
  ["Every 2 Weeks", "Clear GeoGrid progress reports"],
  ["100% 1-on-1", "Direct specialist communication"],
];

const services = [
  ["Tailored Local Strategy", "Built around your location, services and local competition."],
  ["Google Business Profile Optimisation", "Complete setup, structure and ongoing profile management."],
  ["Local Visibility Signals", "Targeted actions to strengthen your visibility across your service area."],
  ["Progress Reports Every Two Weeks", "Clear GeoGrid reports so you can see how your visibility changes."],
  ["Direct 1-on-1 Communication", "Work directly with a dedicated specialist."],
];

const planFeatures = [
  "Tailored 1-on-1 local SEO strategy",
  "Google Business Profile optimisation",
  "GeoGrid visibility tracking",
  "Progress reports every two weeks",
  "Direct 1-on-1 communication",
];

const faqs = [
  ["What happens during the 7-day free trial?", "We personally review your business, analyse your local visibility and deliver a custom GeoGrid report at the end of the trial with recommendations and zero obligation."],
  ["How long does it take to see ranking improvements?", "Your trial report establishes the baseline. Allow 2 to 6 months to assess meaningful ranking changes, depending on local competition."],
  ["How is the exact monthly price determined?", "Monthly plans start at €520 + VAT. We agree on the scope and exact price after reviewing your trial report and the competition in your market."],
  ["How often will I receive reports?", "You receive your first custom report at the end of the trial. If you continue on a monthly plan, we send visibility reports every two weeks."],
  ["Do I need to manage any software myself?", "No. DELVOR handles the analysis, optimisation and reporting for you, with direct 1-on-1 communication."],
];

export default function Home() {
  return (
    <main>
      <section className="simple-hero section-shell">
        <div className="simple-hero-grid">
          <div className="simple-hero-copy">
            <p className="eyebrow">1-on-1 Google Maps Growth</p>
            <h1>Turn Google Maps into your #1 source of local clients.</h1>
            <p>We help local businesses climb into the Google Maps Top 3 through tailored local SEO and profile optimisation, handled 1-on-1 for your business.</p>
            <div className="button-row">
              <Link className="button button-primary" href="/free-trial">Start Your 7-Day Free Trial</Link>
              <Link className="button button-quiet" href="/#pricing">See Pricing</Link>
            </div>
            <p className="hero-assurance">No credit card · Custom report after 7&nbsp;days · Zero obligation</p>
          </div>
          <figure className="simple-hero-visual">
            <GeoGridComparison />
            <figcaption className="hero-map-caption">Example progression from #21+ to Top 1–2 across the city.</figcaption>
          </figure>
        </div>
      </section>

      <section className="industry-strip section-shell" aria-labelledby="industry-label">
        <h2 id="industry-label">Built for local service businesses</h2>
        <ul>
          {industries.map((industry) => <li key={industry}>{industry}</li>)}
        </ul>
      </section>

      <section className="value-strip section-shell" aria-label="Why Google Maps visibility matters">
        {valueItems.map(([title, description], index) => (
          <article key={title}>
            <span className="step-index" aria-hidden="true">0{index + 1}</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className="service-overview section-shell">
        <div>
          <p className="eyebrow">What we do</p>
          <h2>Done-for-you local visibility, handled 1-on-1.</h2>
        </div>
        <ul className="marketing-checklist">
          {services.map(([title, description]) => (
            <li key={title}>
              <span className="marketing-check" aria-hidden="true">✓</span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section id="how-it-works" className="home-how-it-works section-shell">
        <p className="eyebrow">How it works</p>
        <h2>A simple path from trial to steady growth.</h2>
        <ol className="growth-steps">
          {processSteps.map(([title, description], index) => (
            <li key={title}>
              <span className="step-index" aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="pricing" className="home-pricing section-shell">
        <div className="centered-heading">
          <p className="eyebrow">Transparent pricing</p>
          <h2>Tailored to your market.</h2>
          <p>Start with a 7-day free trial and receive your custom visibility report before committing.</p>
        </div>
        <div className="home-price-card">
          <p className="price-kicker">Starting from</p>
          <p className="monthly-price"><strong>€520</strong> <span>/ month + VAT</span></p>
          <p className="price-description">Exact scope and pricing are agreed individually after your 7&#8209;day trial report.</p>
          <ul className="marketing-checklist">
            {planFeatures.map((feature) => (
              <li key={feature}><span className="marketing-check" aria-hidden="true">✓</span>{feature}</li>
            ))}
          </ul>
          <Link className="button button-primary" href="/free-trial">Start 7-Day Free Trial</Link>
          <p className="price-reassurance">Zero obligation after your 7-day trial report.</p>
        </div>
      </section>

      <section className="trust-strip section-shell" aria-label="What you can expect from DELVOR">
        <ul>
          {serviceCommitments.map(([title, description]) => (
            <li key={title}><strong>{title}</strong><span>{description}</span></li>
          ))}
        </ul>
      </section>

      <section id="faq" className="home-faq section-shell">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2>Common questions.</h2>
        </div>
        <div className="home-accordion">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<span className="accordion-indicator" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="simple-inquiry section-shell">
        <div>
          <p className="eyebrow">Have a question?</p>
          <h2>Talk to DELVOR.</h2>
          <p>Send a short message and we will reply by email.</p>
          <p className="contact-reply-time">Typical reply time: within 1 business day.</p>
          <p className="inquiry-direct">Or email <a href="mailto:paulius@delvor.lt">paulius@delvor.lt</a>.</p>
        </div>
        <InquiryForm />
      </section>
    </main>
  );
}
