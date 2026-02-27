'use client';

import { landingConfig } from '@/lib/config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          src="/brand/logo-mark-dark-teal.svg"
          alt=""
          aria-hidden="true"
          width={34}
          height={26}
        />
        <div>
          <p className="footer-title">LookSharp</p>
          <p>Digital discounts and rewards hub by Insightis Africa.</p>
        </div>
      </div>

      <nav aria-label="Legal and support links" className="footer-links">
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href={`mailto:${landingConfig.supportEmail}`}>Contact</a>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new Event('looksharp:open-consent'))}
        >
          Cookie settings
        </button>
      </nav>

      <p className="footer-copy">© {year} LookSharp. All rights reserved.</p>
    </footer>
  );
}
