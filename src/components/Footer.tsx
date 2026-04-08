'use client';

export function Footer() {
  const year = new Date().getFullYear();

  const openCookieSettings = (): void => {
    document.dispatchEvent(new CustomEvent('open-cookie-settings'));
    document.dispatchEvent(new Event('looksharp:open-consent'));
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    window.dispatchEvent(new Event('looksharp:open-consent'));
  };

  return (
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo-row">
              <img
                src="/brand/logo-mark-brand.svg"
                alt=""
                aria-hidden="true"
                className="brand-mark-image"
                width={28}
                height={24}
              />
              <span className="footer-logo-text">
                Look<span>Sharp</span>
              </span>
            </div>
            <p className="footer-copy-main">
              A product by Insightis Africa. Discover discounts, earn rewards, and
              convert points to real cash.
            </p>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#offers">Offers</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#cta">Get the App</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <button type="button" onClick={openCookieSettings}>
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a
                  href="https://insightisafrica.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Insightis Africa
                </a>
              </li>
              <li>
                <a href="mailto:hello@looksharp.co">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} LookSharp by Insightis Africa. All rights reserved.</p>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
