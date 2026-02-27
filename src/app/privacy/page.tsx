import Link from 'next/link';

import { legalPlaceholderNotes } from '@/content/site';

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
      <p className="placeholder-note">{legalPlaceholderNotes.privacy}</p>

      <section>
        <h2>Information We Collect</h2>
        <p>
          We may collect account details, survey responses, reward activity, and
          technical data needed to run the LookSharp platform.
        </p>
      </section>

      <section>
        <h2>How We Use Data</h2>
        <p>
          Data is used to deliver app functionality, process points and payouts,
          improve product experience, and measure landing-page performance after
          analytics consent is granted.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You can control analytics consent from the cookie settings link in the
          footer. Contact support for account-specific privacy requests.
        </p>
      </section>
    </main>
  );
}
