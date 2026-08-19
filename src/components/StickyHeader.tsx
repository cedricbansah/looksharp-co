'use client';

import { useEffect, useState } from 'react';

import { navItems } from '@/content/site';
import { StartSavingLink } from '@/components/StartEarningLink';

export function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header${isScrolled ? ' site-header-scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#top" className="brand-wordmark" aria-label="LookSharp home">
            <img
              src="/brand/logo-mark-brand.svg"
              alt=""
              aria-hidden="true"
              className="brand-mark-image"
              width={28}
              height={24}
            />
            <span>
              Look<span>Sharp</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <StartSavingLink section="header" className="header-solid-cta" label="Get the app" />
            <button
              type="button"
              className="mobile-menu-button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="looksharp-mobile-menu"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <span className="menu-label">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
              <span className={`menu-icon${isMobileMenuOpen ? ' is-open' : ''}`} aria-hidden="true"><i /><i /></span>
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen ? (
        <div
          id="looksharp-mobile-menu"
          className="mobile-menu-overlay"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="mobile-menu-links" aria-label="Mobile navigation links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            ))}
            <StartSavingLink section="mobile-menu" className="mobile-cta mobile-cta-solid" label="Get the app" />
          </nav>
        </div>
      ) : null}
    </>
  );
}
