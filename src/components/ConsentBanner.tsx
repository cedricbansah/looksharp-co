'use client';

import { useEffect, useState } from 'react';

import {
  getConsentState,
  initializeAnalyticsConsentMode,
  setConsentState,
  trackConsentUpdated
} from '@/lib/analytics';

const LEGACY_CONSENT_KEY = 'looksharp_analytics_consent';
const LOVABLE_CONSENT_KEY = 'cookie-consent';

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    initializeAnalyticsConsentMode();

    const existingLovable = window.localStorage.getItem(LOVABLE_CONSENT_KEY);
    const existingLegacy = getConsentState();

    if (existingLovable || existingLegacy) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setVisible(true);
    }, 1500);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const openHandler = (): void => {
      window.localStorage.removeItem(LOVABLE_CONSENT_KEY);
      window.localStorage.removeItem(LEGACY_CONSENT_KEY);
      setVisible(true);
    };

    document.addEventListener('open-cookie-settings', openHandler);
    document.addEventListener('looksharp:open-consent', openHandler);
    window.addEventListener('open-cookie-settings', openHandler);
    window.addEventListener('looksharp:open-consent', openHandler);

    return () => {
      document.removeEventListener('open-cookie-settings', openHandler);
      document.removeEventListener('looksharp:open-consent', openHandler);
      window.removeEventListener('open-cookie-settings', openHandler);
      window.removeEventListener('looksharp:open-consent', openHandler);
    };
  }, []);

  const accept = (): void => {
    window.localStorage.setItem(LOVABLE_CONSENT_KEY, 'accepted');
    setConsentState('granted');
    trackConsentUpdated('granted');
    setVisible(false);
  };

  const decline = (): void => {
    window.localStorage.setItem(LOVABLE_CONSENT_KEY, 'declined');
    setConsentState('denied');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="consent-banner" aria-label="Cookie consent">
      <div className="consent-copy">
        <p className="consent-title">We use cookies</p>
        <p>
          We use cookies to enhance your experience and analyze usage. Read our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="consent-decline" onClick={decline}>
          Decline
        </button>
        <button type="button" className="consent-accept" onClick={accept}>
          Accept All
        </button>
      </div>
    </aside>
  );
}
