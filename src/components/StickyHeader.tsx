import { navItems } from '@/content/site';

import { StartEarningLink } from '@/components/StartEarningLink';

export function StickyHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="brand-link" aria-label="LookSharp home">
        <img
          src="/brand/logo-dark-teal.svg"
          alt="LookSharp"
          width={132}
          height={44}
        />
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <StartEarningLink section="header" className="header-cta" />

        <details className="mobile-nav">
          <summary aria-label="Toggle navigation menu">Menu</summary>
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link">
                {item.label}
              </a>
            ))}
            <StartEarningLink section="mobile-menu" className="mobile-cta" />
          </div>
        </details>
      </div>
    </header>
  );
}
