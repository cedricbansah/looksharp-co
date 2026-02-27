'use client';

import { useEffect, useState } from 'react';

import {
  getConsentState,
  openAnalyticsIfConsented,
  setConsentState,
  trackConsentUpdated,
  trackLandingView
} from '@/lib/analytics';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentState();
    if (!consent) {
      setVisible(true);
      return;
    }

    openAnalyticsIfConsented();
    if (consent === 'granted' && window.location.pathname === '/') {
      trackLandingView(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handler = (): void => {
      setVisible(true);
    };

    window.addEventListener('looksharp:open-consent', handler);
    window.addEventListener('open-cookie-settings', handler);
    document.addEventListener('looksharp:open-consent', handler);
    document.addEventListener('open-cookie-settings', handler);
    return () => {
      window.removeEventListener('looksharp:open-consent', handler);
      window.removeEventListener('open-cookie-settings', handler);
      document.removeEventListener('looksharp:open-consent', handler);
      document.removeEventListener('open-cookie-settings', handler);
    };
  }, []);

  const handleConsent = (value: 'granted' | 'denied'): void => {
    setConsentState(value);
    setVisible(false);
    trackConsentUpdated(value);
    if (value === 'granted' && window.location.pathname === '/') {
      trackLandingView(window.location.pathname);
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="consent-banner" aria-label="Cookie consent">
      <p>
        We use analytics cookies to understand CTA performance and improve this
        page. Accept to enable analytics tracking.
      </p>
      <div className="consent-actions">
        <button type="button" onClick={() => handleConsent('denied')}>
          Decline
        </button>
        <button type="button" onClick={() => handleConsent('granted')}>
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
