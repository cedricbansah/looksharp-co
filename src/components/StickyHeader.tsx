'use client';

import { useEffect, useState } from 'react';

import { navItems } from '@/content/site';

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
            <a href="#cta" className="header-outline-cta">
              Start Saving
            </a>
            <a href="#cta" className="header-solid-cta">
              Get the App
            </a>
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
            <a href="#cta" className="mobile-cta" onClick={closeMobileMenu}>
              Start Saving
            </a>
            <a href="#cta" className="mobile-cta mobile-cta-solid" onClick={closeMobileMenu}>
              Get the App
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
