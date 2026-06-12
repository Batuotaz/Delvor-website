import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Support — Delvor",
  description: "Support and contact information for Delvor partners and suppliers.",
};

export default function Support() {
  return (
    <LegalPage title="Support" lastUpdated="June 2026">
      <section>
        <h2>Partner & Supplier Support</h2>
        <p>
          Delvor is currently in the partner acquisition and development phase. Support at this stage
          is focused on business communication — partnership inquiries, catalogue integration discussions,
          NDA and contract processing, and general supplier onboarding.
        </p>
        <p>
          There is no end-user platform or customer support channel at this time.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>For all business and partnership correspondence, reach us at:</p>
        <p>
          <a href="mailto:partnerships@delvor.lt">partnerships@delvor.lt</a>
        </p>
        <p>We aim to respond to all inquiries within 2 business days.</p>
      </section>

      <section>
        <h2>What We Can Help With</h2>
        <ul>
          <li>Partnership and integration inquiries</li>
          <li>NDA and mutual confidentiality agreements</li>
          <li>Supplier and catalogue provider onboarding</li>
          <li>Invoice and company document requests</li>
          <li>Media and press inquiries</li>
          <li>Questions about the Delvor platform concept and roadmap</li>
        </ul>
      </section>

      <section>
        <h2>Company Information</h2>
        <p>
          MB Galios Taškas<br />
          Company code: 307152056<br />
          Lithuania
        </p>
      </section>
    </LegalPage>
  );
}
