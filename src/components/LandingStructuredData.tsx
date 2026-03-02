import { landingConfig } from '@/lib/config';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LookSharp',
  url: landingConfig.siteUrl,
  logo: `${landingConfig.siteUrl}/brand/logo-mark-dark-teal.svg`,
  sameAs: []
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LookSharp',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  url: landingConfig.siteUrl,
  description:
    'LookSharp is a digital discounts platform and rewards hub with survey-based points and mobile money cashout.'
};

export function LandingStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
    </>
  );
}
