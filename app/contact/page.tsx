import type { Metadata } from "next";
import InquiryForm from "../components/InquiryForm";

export const metadata: Metadata = { title: "Contact", description: "Contact DELVOR about local visibility services and your business goals." };

export default function Contact() {
  return <main><section className="inner-hero section-shell"><p className="eyebrow">Contact DELVOR</p><h1>Let’s talk about your local visibility.</h1><p>Send a question or tell us what you want customers to find.</p></section><section className="contact-layout section-shell"><div><p className="eyebrow">Business enquiries</p><a className="contact-email" href="mailto:paulius@delvor.lt">paulius@delvor.lt</a><p>DELVOR support for local visibility services and trial requests.</p></div><InquiryForm /></section></main>;
}
