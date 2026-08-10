'use client';

import { useEffect, useRef, useState } from 'react';
import type { OfferTile } from '@/lib/types';

type HeroOfferSlideshowProps = {
  offers: OfferTile[];
};

export function HeroOfferSlideshow({ offers }: HeroOfferSlideshowProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [pageIsActive, setPageIsActive] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setReduceMotion(media.matches);
    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);

    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    const updatePageState = () => {
      setPageIsActive(document.visibilityState === 'visible' && document.hasFocus());
    };

    updatePageState();
    document.addEventListener('visibilitychange', updatePageState);
    window.addEventListener('focus', updatePageState);
    window.addEventListener('blur', updatePageState);

    return () => {
      document.removeEventListener('visibilitychange', updatePageState);
      window.removeEventListener('focus', updatePageState);
      window.removeEventListener('blur', updatePageState);
    };
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (offers.length < 2 || !isVisible || !pageIsActive || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % offers.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isVisible, offers.length, pageIsActive, reduceMotion]);

  return (
    <div
      ref={frameRef}
      className="phone-offer-carousel"
      aria-label="Featured offers available on LookSharp"
    >
      {offers.map((offer, index) => {
        const previousIndex = (activeIndex - 1 + offers.length) % offers.length;
        const position =
          index === activeIndex
            ? 'is-current'
            : index === previousIndex
              ? 'is-previous'
              : 'is-next';

        return (
          <article
            key={offer.id}
            className={`phone-offer-slide ${position}`}
            aria-hidden={index !== activeIndex}
          >
            {offer.posterImage ? <img src={offer.posterImage} alt="" /> : null}
            <div className="phone-offer-slide-shade" />
            <div className="phone-offer-slide-copy">
              <small>{offer.brand}</small>
              <strong>{offer.title}</strong>
            </div>
            {offer.logoImage ? (
              <img className="phone-vendor" src={offer.logoImage} alt="" />
            ) : null}
          </article>
        );
      })}
      <div className="phone-offer-dots" aria-hidden="true">
        {offers.map((offer, index) => (
          <i key={offer.id} className={index === activeIndex ? 'is-active' : ''} />
        ))}
      </div>
    </div>
  );
}
