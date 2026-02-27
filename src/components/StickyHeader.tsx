'use client';

import { useEffect, useState } from 'react';

import { navItems } from '@/content/site';

import { StartEarningLink } from '@/components/StartEarningLink';

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

    const onResize = (): void => {
      if (window.innerWidth > 920) {
        setIsMobileMenuOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`site-header${isScrolled ? ' site-header-scrolled' : ''}${
        isMobileMenuOpen ? ' site-header-menu-open' : ''
      }`}
    >
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

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="looksharp-mobile-menu"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMobileMenuOpen ? (
        <div
          id="looksharp-mobile-menu"
          className="mobile-menu-overlay"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <div className="mobile-menu-sheet">
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
              <StartEarningLink section="mobile-menu" className="mobile-cta" />
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
