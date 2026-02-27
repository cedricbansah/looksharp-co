'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { appendAttributionToUrl, extractAttribution } from '@/lib/attribution';
import { landingConfig } from '@/lib/config';
import { trackCtaClick } from '@/lib/analytics';

interface StartEarningLinkProps {
  section: string;
  className?: string;
}

export function StartEarningLink({
  section,
  className
}: StartEarningLinkProps) {
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
    trackCtaClick('web', section, 'Start Earning');
  };

  return (
    <a
      className={className}
      href={href}
      onClick={handleClick}
    >
      Start Earning
    </a>
  );
}
