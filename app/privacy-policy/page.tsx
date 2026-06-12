import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Delvor",
  description: "How Delvor collects, uses, and protects information on this website.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="June 2026">
      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how MB Galios Taškas (&ldquo;Delvor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) handles
          information collected through this website (<strong>delvor.lt</strong>). This is a concept and
          partnership presentation website. We do not operate an e-commerce platform or user account system at this time.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We may collect limited information when you interact with this website:</p>
        <ul>
          <li>Contact form submissions (name, company, email, message)</li>
          <li>Email communications initiated by you</li>
          <li>Standard server and analytics logs (page visits, browser type, country)</li>
        </ul>
        <p>We do not collect payment information, credentials, or sensitive personal data.</p>
      </section>

      <section>
        <h2>3. How We Use Information</h2>
        <p>Information you submit is used solely to:</p>
        <ul>
          <li>Respond to partnership and business inquiries</li>
          <li>Evaluate potential supplier or catalogue provider relationships</li>
          <li>Improve the content and structure of this website</li>
        </ul>
        <p>We do not sell, rent, or share your information with third parties for marketing purposes.</p>
      </section>

      <section>
        <h2>4. Data Retention</h2>
        <p>
          Business inquiry correspondence is retained for up to 3 years for the purpose of managing business
          relationships. Website analytics data is retained for up to 12 months. You may request deletion of
          your data at any time by contacting us.
        </p>
      </section>

      <section>
        <h2>5. Cookies and Analytics</h2>
        <p>
          This website may use basic analytics tools to understand traffic patterns. No advertising
          cookies or cross-site tracking are used. If analytics are in place, data is processed in
          aggregate and not linked to identifiable individuals.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          Under applicable EU and Lithuanian data protection law (GDPR), you have the right to access,
          correct, or request deletion of any personal data we hold about you. To exercise these rights,
          contact us at <a href="mailto:partnerships@delvor.lt">partnerships@delvor.lt</a>.
        </p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>
          Data controller: MB Galios Taškas, company code 307152056, Lithuania.<br />
          Email: <a href="mailto:partnerships@delvor.lt">partnerships@delvor.lt</a>
        </p>
      </section>
    </LegalPage>
  );
}
