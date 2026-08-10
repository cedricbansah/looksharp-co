'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { appendAttributionToUrl, extractAttribution } from '@/lib/attribution';
import { landingConfig } from '@/lib/config';
import { trackCtaClick } from '@/lib/analytics';

interface StartSavingLinkProps {
  section: string;
  className?: string;
  label?: string;
}

export function StartSavingLink({
  section,
  className,
  label = 'Start Saving'
}: StartSavingLinkProps) {
  const [href, setHref] = useState(landingConfig.webAppUrl);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const attribution = extractAttribution(params);
    setHref(appendAttributionToUrl(landingConfig.webAppUrl, attribution));
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    const params = new URLSearchParams(window.location.search);
    const attribution = extractAttribution(params);
    const resolvedHref = appendAttributionToUrl(landingConfig.webAppUrl, attribution);
    event.currentTarget.href = resolvedHref;
    trackCtaClick('web', section, label);
  };

  return (
    <a
      className={className}
      href={href}
      onClick={handleClick}
    >
      {label}
    </a>
  );
}
