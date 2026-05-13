'use client';

import { extractAttribution } from '@/lib/attribution';
import { landingConfig } from '@/lib/config';
import type { ConsentState, CtaEventPayload, CtaTarget } from '@/lib/types';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
    __looksharpAnalyticsLoaded?: boolean;
    __looksharpLandingTracked?: boolean;
  }
}

export const CONSENT_STORAGE_KEY = 'looksharp_analytics_consent';

export const getConsentState = (): ConsentState | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === 'granted' || stored === 'denied') {
    return stored;
  }

  return null;
};

export const setConsentState = (value: ConsentState): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
};

const canTrack = (): boolean =>
  typeof window !== 'undefined' && getConsentState() === 'granted';

const consentSettings = (state: ConsentState) => ({
  ad_storage: state,
  ad_user_data: state,
  ad_personalization: state,
  analytics_storage: state
});

const ensureAnalyticsLoaded = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!landingConfig.gaMeasurementId || window.__looksharpAnalyticsLoaded) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]): void => {
    window.dataLayer.push(args);
  };
  window.gtag = gtag;

  gtag('consent', 'default', {
    ...consentSettings('denied'),
    wait_for_update: 500
  });
  gtag('js', new Date());
  gtag('config', landingConfig.gaMeasurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${landingConfig.gaMeasurementId}`;
  document.head.appendChild(script);

  window.__looksharpAnalyticsLoaded = true;
};

const updateGoogleConsent = (state: ConsentState): void => {
  if (typeof window === 'undefined') {
    return;
  }

  ensureAnalyticsLoaded();
  window.gtag?.('consent', 'update', consentSettings(state));
};

export const trackEvent = (
  eventName: string,
  payload: Record<string, string>
): void => {
  if (!canTrack() || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, payload);
};

export const initializeAnalyticsConsentMode = (): void => {
  ensureAnalyticsLoaded();

  const consent = getConsentState();
  if (consent) {
    updateGoogleConsent(consent);
  }
};

export const trackLandingView = (path: string): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.__looksharpLandingTracked) {
    trackEvent('landing_view', {
      path,
      timestamp: new Date().toISOString()
    });
    window.__looksharpLandingTracked = true;
  }
};

export const trackConsentUpdated = (state: ConsentState): void => {
  updateGoogleConsent(state);

  if (state === 'granted') {
    trackEvent('consent_updated', {
      state,
      timestamp: new Date().toISOString(),
      path: typeof window === 'undefined' ? '/' : window.location.pathname
    });
  }
};

const ctaEventMap: Record<CtaTarget, string> = {
  web: 'cta_click_web',
  ios: 'cta_click_ios',
  android: 'cta_click_android'
};

export const getAttributionFromLocation = (): CtaEventPayload | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = extractAttribution(params);

  return {
    ...attribution,
    path: window.location.pathname,
    section: 'unknown',
    cta_label: 'unknown',
    timestamp: new Date().toISOString()
  };
};

export const trackCtaClick = (
  target: CtaTarget,
  section: string,
  ctaLabel: string
): void => {
  if (typeof window === 'undefined') {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = extractAttribution(params);
  const payload: CtaEventPayload = {
    ...attribution,
    path: window.location.pathname,
    section,
    cta_label: ctaLabel,
    timestamp: new Date().toISOString()
  };

  const stringPayload = Object.fromEntries(
    Object.entries(payload).filter(
      (entry): entry is [string, string] => typeof entry[1] === 'string'
    )
  );

  trackEvent(ctaEventMap[target], stringPayload);
};
