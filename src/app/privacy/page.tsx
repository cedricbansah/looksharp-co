import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | LookSharp',
  description: 'Privacy policy information for LookSharp.'
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="back-link">
        ← Back to home
      </Link>
      <h1>Privacy Policy</h1>

      <section>
        <p>Last updated: February 2026</p>
        <p>
          LookSharp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a product of Insightis Africa,
          is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          use our mobile application and website.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We may collect information about you in various ways, including:</p>
        <ul>
          <li>
            Personal data (name, email address, phone number) provided during
            registration
          </li>
          <li>Survey responses and feedback you voluntarily submit</li>
          <li>
            Usage data, including browsing patterns, offer interactions, and
            reward history
          </li>
          <li>
            Device information such as device type, operating system, and unique
            identifiers
          </li>
          <li>Location data (with your explicit consent)</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, operate, and maintain our platform</li>
          <li>Personalize your experience and deliver relevant offers</li>
          <li>Process reward redemptions and payouts</li>
          <li>Communicate with you about your account, offers, and updates</li>
          <li>Conduct research and analytics to improve our services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We implement bank-level encryption and industry-standard security
          measures to protect your personal information. However, no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data at
          any time. You can also opt out of marketing communications and withdraw
          consent for data processing where applicable.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@looksharp.co">privacy@looksharp.co</a>.
        </p>
      </section>
    </main>
  );
}
