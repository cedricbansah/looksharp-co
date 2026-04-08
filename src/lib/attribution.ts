import type { AttributionFields } from '@/lib/types';

export const ATTRIBUTION_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'ref',
  'partner',
  'campaign',
  'adgroup',
  'creative'
] as const;

export const extractAttribution = (
  params: URLSearchParams
): AttributionFields => {
  const result: AttributionFields = {};

  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) {
      result[key] = value;
    }
  }

  return result;
};

export const appendAttributionToUrl = (
  baseUrl: string,
  attribution: AttributionFields
): string => {
  let url: URL;

  try {
    url = new URL(baseUrl);
  } catch {
    return baseUrl;
  }

  for (const [key, value] of Object.entries(attribution)) {
    if (value) {
      url.searchParams.set(key, value);
    }
  }

  return url.toString();
};
