'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { appendAttributionToUrl, extractAttribution } from '@/lib/attribution';
import { landingConfig } from '@/lib/config';
import { trackCtaClick } from '@/lib/analytics';
import type { CtaTarget } from '@/lib/types';

interface CtaGroupProps {
  section: string;
  className?: string;
  compact?: boolean;
}

interface CtaItem {
  target: CtaTarget;
  label: string;
  href: string;
  newTab: boolean;
  icon?: string;
  className: string;
}

const ctaItems: CtaItem[] = [
  {
    target: 'web',
    label: 'Start Saving',
    href: landingConfig.webAppUrl,
    newTab: false,
    className: 'cta-primary'
  },
  {
    target: 'ios',
    label: 'iOS App',
    href: landingConfig.iosAppUrl,
    newTab: true,
    icon: '/icons/stores/app-store.svg',
    className: 'cta-ghost'
  },
  {
    target: 'android',
    label: 'Android App',
    href: landingConfig.androidAppUrl,
    newTab: true,
    icon: '/icons/stores/play-store.svg',
    className: 'cta-ghost'
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

export function CtaGroup({ section, className, compact = false }: CtaGroupProps) {
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
      {ctaItems.filter((item) => !compact || item.target === 'web').map((item) => {
        const href = item.target === 'web' ? webHref : item.href;

        return (
          <a
            key={item.target}
            className={item.className}
            href={href}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noreferrer noopener' : undefined}
            onClick={(event) => handleClick(event, item)}
          >
            {item.icon ? (
              <img
                src={item.icon}
                alt=""
                aria-hidden="true"
                className="cta-store-logo"
                width={16}
                height={16}
              />
            ) : null}
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
