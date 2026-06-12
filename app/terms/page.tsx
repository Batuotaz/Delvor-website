import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Website Terms — Delvor",
  description: "Terms of use for the Delvor website.",
};

export default function Terms() {
  return (
    <LegalPage title="Website Terms" lastUpdated="June 2026">
      <section>
        <h2>1. About This Website</h2>
        <p>
          This website is operated by MB Galios Taškas (company code 307152056, Lithuania), trading as
          Delvor. It presents the Delvor product concept and vision for informational and business development
          purposes. The platform described herein is in active development and is not yet operational.
        </p>
      </section>

      <section>
        <h2>2. Permitted Use</h2>
        <p>
          You may access and view this website for personal and business evaluation purposes. You may not:
        </p>
        <ul>
          <li>Reproduce or redistribute website content without prior written consent</li>
          <li>Misrepresent any affiliation with Delvor or MB Galios Taškas</li>
          <li>Use automated tools to scrape, crawl, or extract content from this website</li>
          <li>Attempt to interfere with the operation or security of this website</li>
        </ul>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including the Delvor brand, logo, UI concept illustrations,
          copy, and design — is the property of MB Galios Taškas. All rights reserved.
          Nothing on this website grants any licence to use our intellectual property.
        </p>
      </section>

      <section>
        <h2>4. No Representations or Warranties</h2>
        <p>
          This website describes a product under development. All features, capabilities, timelines,
          and availability described are forward-looking and subject to change. We make no representations
          that the platform will be available by any specific date or with any specific feature set.
          Information is provided &ldquo;as is&rdquo; without warranty of any kind.
        </p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, MB Galios Taškas shall not be liable for any direct,
          indirect, or consequential loss arising from use of or reliance on this website or its content.
        </p>
      </section>

      <section>
        <h2>6. External Links</h2>
        <p>
          This website may link to external resources. We are not responsible for the content or
          availability of third-party websites and do not endorse them.
        </p>
      </section>

      <section>
        <h2>7. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Republic of Lithuania. Any disputes arising from
          use of this website shall be subject to the jurisdiction of Lithuanian courts.
        </p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>
          We may update these terms at any time. Continued use of this website after changes are posted
          constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          MB Galios Taškas, company code 307152056, Lithuania.<br />
          Email: <a href="mailto:partnerships@delvor.lt">partnerships@delvor.lt</a>
        </p>
      </section>
    </LegalPage>
  );
}
