import type { LandingConfig } from '@/lib/types';

const read = (value: string | undefined, fallback = ''): string =>
  value?.trim() || fallback;

export const landingConfig: LandingConfig = {
  webAppUrl: read(process.env.NEXT_PUBLIC_WEB_APP_URL, 'https://app.looksharp.co'),
  iosAppUrl: read(process.env.NEXT_PUBLIC_IOS_APP_URL, 'https://apps.apple.com/'),
  androidAppUrl: read(
    process.env.NEXT_PUBLIC_ANDROID_APP_URL,
    'https://play.google.com/store'
  ),
  supportEmail: read(process.env.NEXT_PUBLIC_SUPPORT_EMAIL, 'support@looksharp.co'),
  gaMeasurementId: read(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID),
  siteUrl: read(process.env.NEXT_PUBLIC_SITE_URL, 'https://looksharp.co')
};

export const requiredProductionKeys: Array<keyof LandingConfig> = [
  'iosAppUrl',
  'androidAppUrl',
  'supportEmail',
  'gaMeasurementId'
];
