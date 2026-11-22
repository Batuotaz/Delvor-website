import Link from "next/link";
import GeoGridComparison from "./components/GeoGridComparison";
import InquiryForm from "./components/InquiryForm";

const processSteps = [
  ["01", "Share the focus", "Tell us your business, locations and priority searches."],
  ["02", "See the baseline", "Understand the local visibility picture around your business."],
  ["03", "Choose the priorities", "Get practical recommendations tied to what the map shows."],
  ["04", "Review the movement", "Keep progress visible with clear, repeatable reporting."],
];

export default function Home() {
  return <main>
    <section className="simple-hero section-shell"><div className="simple-hero-grid"><div className="simple-hero-copy"><p className="eyebrow">Google Maps Visibility</p><h1>Get found on Google Maps.</h1><p>Increase your local visibility and help more customers discover your business.</p><div className="button-row"><Link className="button button-primary" href="/free-trial">Start Your 7-Day Free Trial</Link><Link className="button button-quiet" href="/contact">Ask a question</Link></div><div className="hero-assurance"><span><i />No credit card required</span><span><i />No payment required</span><span><i />No commitment</span></div></div><div className="simple-hero-visual"><div className="simple-section-label"><span>Example visualization</span><span>Riga Dental Atelier · dentist near me</span></div><GeoGridComparison /></div></div></section>

    <section className="about-section section-shell"><div><p className="eyebrow">About Delvor</p><h2>Your business deserves to be seen.</h2></div><div><p>At DELVOR, we help local businesses strengthen their presence on Google Maps and reach more customers actively searching for their services.</p><p>Our work combines Local SEO, Google Business Profile optimisation and visibility analysis. We work toward the valuable Top 3 local results as an objective, never a promise, by understanding your market, identifying weaknesses and building practical strategies around your business.</p><strong>Focused on visibility. Built around your business.</strong></div></section>

    <section id="how-it-works" className="home-how-it-works section-shell"><div className="home-process-heading"><p className="eyebrow">How it works</p><h2>A simple path from visibility to action.</h2><p>Clear steps for businesses that want a sharper local search presence.</p></div><div className="simple-steps">{processSteps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="simple-inquiry section-shell"><div><p className="eyebrow">Have a question?</p><h2>Talk to DELVOR.</h2><p>Send a short message and we will reply by email.</p><p className="inquiry-direct">Or email <a href="mailto:Paulius@delvor.lt">Paulius@delvor.lt</a>.</p></div><InquiryForm /></section>
  </main>;
}
