import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | LookSharp',
  description: 'Terms of service for LookSharp platform users.'
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Terms of Service</h1>

      <section>
        <p>Last updated: February 2026</p>
        <p>
          Welcome to LookSharp. By accessing or using our platform, you agree to
          be bound by these Terms of Service. LookSharp is operated by Insightis
          Africa.
        </p>
      </section>

      <section>
        <h2>Use of Platform</h2>
        <p>
          You must be at least 18 years old to use LookSharp. By creating an
          account, you represent that you meet this requirement and that the
          information you provide is accurate and complete.
        </p>
      </section>

      <section>
        <h2>Rewards &amp; Points</h2>
        <ul>
          <li>
            Points are earned through qualifying activities such as completing
            surveys and redeeming offers
          </li>
          <li>Points have no cash value until redeemed through our platform</li>
          <li>
            We reserve the right to modify point values and redemption thresholds
          </li>
          <li>
            Fraudulent activity will result in forfeiture of points and account
            termination
          </li>
        </ul>
      </section>

      <section>
        <h2>Offers &amp; Discounts</h2>
        <p>
          All offers are subject to availability and the terms set by the
          participating brands. LookSharp acts as an intermediary and is not
          responsible for the quality of goods or services provided by third-party
          merchants.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content, trademarks, and intellectual property on the LookSharp
          platform are owned by Insightis Africa or its licensors. You may not
          reproduce, distribute, or create derivative works without our express
          permission.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          LookSharp is provided &quot;as is&quot; without warranties of any kind. We
          shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of the platform.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For questions about these terms, contact us at{' '}
          <a href="mailto:legal@looksharp.co">legal@looksharp.co</a>.
        </p>
      </section>
    </main>
  );
}
