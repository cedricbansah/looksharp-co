import type { Metadata } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';

import { ConsentBanner } from '@/components/ConsentBanner';
import { landingConfig } from '@/lib/config';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(landingConfig.siteUrl),
  title: 'LookSharp | Digital Discounts and Rewards Hub',
  description:
    'Save money with app-exclusive discount codes, complete surveys for points, and cash out rewards to mobile money with LookSharp.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'LookSharp | Save More and Earn Rewards Fast',
    description:
      'Shop with exclusive discount codes, take surveys, earn points, and cash out to mobile money.',
    url: landingConfig.siteUrl,
    siteName: 'LookSharp',
    type: 'website',
    images: [
      {
        url: '/brand/background-01.svg',
        width: 707,
        height: 750,
        alt: 'LookSharp brand visual'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LookSharp | Save More and Earn Rewards Fast',
    description:
      'Exclusive discount codes + survey rewards with mobile money cashout.',
    images: ['/brand/background-01.svg']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const gaMeasurementId = landingConfig.gaMeasurementId;

  return (
    <html lang="en">
      <body>
        {gaMeasurementId ? (
          <>
            <Script
              id="google-analytics-consent-default"
              strategy="beforeInteractive"
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
gtag('js', new Date());
gtag('config', ${JSON.stringify(gaMeasurementId)});
window.__looksharpAnalyticsLoaded = true;
`
              }}
            />
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
          </>
        ) : null}
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
