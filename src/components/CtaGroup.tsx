'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { appendAttributionToUrl, extractAttribution } from '@/lib/attribution';
import { landingConfig } from '@/lib/config';
import { trackCtaClick } from '@/lib/analytics';
import type { CtaTarget } from '@/lib/types';

interface CtaGroupProps {
  section: string;
  className?: string;
}

interface CtaItem {
  target: CtaTarget;
  label: string;
  href: string;
  newTab: boolean;
}

const ctaItems: CtaItem[] = [
  {
    target: 'web',
    label: 'Start Earning',
    href: landingConfig.webAppUrl,
    newTab: false
  },
  {
    target: 'ios',
    label: 'iOS App',
    href: landingConfig.iosAppUrl,
    newTab: true
  },
  {
    target: 'android',
    label: 'Android App',
    href: landingConfig.androidAppUrl,
    newTab: true
  }
];

const buildWebHref = (): string => {
  if (typeof window === 'undefined') {
    return landingConfig.webAppUrl;
  }

  const params = new URLSearchParams(window.location.search);
  const attribution = extractAttribution(params);
  return appendAttributionToUrl(landingConfig.webAppUrl, attribution);
};

export function CtaGroup({ section, className }: CtaGroupProps) {
  const [webHref, setWebHref] = useState(landingConfig.webAppUrl);

  useEffect(() => {
    setWebHref(buildWebHref());
  }, []);

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
    item: CtaItem
  ): void => {
    if (item.target === 'web') {
      const resolvedHref = buildWebHref();
      event.currentTarget.href = resolvedHref;
    }

    trackCtaClick(item.target, section, item.label);
  };

  return (
    <div className={`cta-group ${className ?? ''}`.trim()}>
      {ctaItems.map((item) => {
        const href = item.target === 'web' ? webHref : item.href;

        return (
          <a
            key={item.target}
            className={`cta-button cta-${item.target}`}
            href={href}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noreferrer noopener' : undefined}
            onClick={(event) => handleClick(event, item)}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
