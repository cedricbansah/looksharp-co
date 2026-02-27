export type CtaTarget = 'web' | 'ios' | 'android';

export type ConsentState = 'granted' | 'denied';

export type AttributionFields = Partial<
  Record<
    | 'utm_source'
    | 'utm_medium'
    | 'utm_campaign'
    | 'utm_term'
    | 'utm_content'
    | 'ref'
    | 'partner'
    | 'campaign'
    | 'adgroup'
    | 'creative',
    string
  >
>;

export interface CtaEventPayload extends AttributionFields {
  path: string;
  section: string;
  cta_label: string;
  timestamp: string;
}

export interface LandingConfig {
  webAppUrl: string;
  iosAppUrl: string;
  androidAppUrl: string;
  supportEmail: string;
  gaMeasurementId: string;
  siteUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  group?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  isPlaceholder: boolean;
}

export interface DealCategory {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export interface OfferTile {
  id: string;
  badge: string;
  brand: string;
  title: string;
  savings: string;
  category: string;
  disclaimer: string;
  isPlaceholder: boolean;
}

export interface ProofStat {
  id: string;
  label: string;
  value: string;
  isPlaceholder: boolean;
}

export interface AssuranceItem {
  id: string;
  title: string;
  description: string;
}
