import Link from 'next/link';

import { legalPlaceholderNotes } from '@/content/site';

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
      <p className="placeholder-note">{legalPlaceholderNotes.terms}</p>

      <section>
        <h2>Using LookSharp</h2>
        <p>
          Users are responsible for accurate account information and compliant use
          of discounts, surveys, and payout features.
        </p>
      </section>

      <section>
        <h2>Rewards and Payouts</h2>
        <p>
          Reward points are earned through eligible actions and may be converted to
          cash according to current in-app rules.
        </p>
      </section>

      <section>
        <h2>Account Actions</h2>
        <p>
          LookSharp may suspend accounts in cases of abuse, fraud, or violations of
          campaign rules.
        </p>
      </section>
    </main>
  );
}
