'use client';

import { featuredOffers } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export function OfferWallSection() {
  return (
    <section id="offers" className="offers-section">
      <div className="section-inner">
        <Reveal className="offers-header">
          <div>
            <span className="section-kicker">Live on LookSharp</span>
            <h2>Good finds.<br />Better prices.</h2>
            <p>Fresh offers from brands worth knowing—picked for everyday life in Ghana.</p>
          </div>
          <a href="#categories" className="offers-view-all">Browse categories <span aria-hidden="true">→</span></a>
        </Reveal>

        <div className="offers-grid">
          {featuredOffers.map((offer, index) => (
            <Reveal key={offer.id} className={`offer-card${index === 0 ? ' offer-card-featured' : ''}`}>
              {/* Poster */}
              <div className="offer-poster-outer">
                <div className="offer-poster-wrap">
                  {offer.posterImage ? (
                    <img
                      src={offer.posterImage}
                      alt={`${offer.brand} offer`}
                      className="offer-poster"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  {/* Category badge overlaid on image */}
                  <span className="offer-badge">{offer.badge}</span>
                </div>
              </div>

              {/* Brand avatar in document flow, overlapping poster/body seam via margin-top: -24px */}
              <div className="offer-avatar-wrap">
                {offer.logoImage ? (
                  <img
                    src={offer.logoImage}
                    alt={offer.brand}
                    className="offer-avatar-img"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement;
                      el.style.display = 'none';
                      const parent = el.parentElement;
                      if (parent) {
                        parent.setAttribute('data-initial', offer.brand.charAt(0).toUpperCase());
                        parent.classList.add('offer-avatar-fallback');
                      }
                    }}
                  />
                ) : (
                  <span className="offer-avatar-fallback" data-initial={offer.brand.charAt(0).toUpperCase()} aria-hidden="true" />
                )}
              </div>

              {/* Card body */}
              <div className="offer-body">
                <p className="offer-brand-name">{offer.brand}</p>
                <h3 className="offer-title">{offer.title}</h3>
                {offer.description ? (
                  <p className="offer-description">{offer.description}</p>
                ) : null}
                <a href={offer.href ?? '#cta'} className="offer-action" aria-label={`View ${offer.title} from ${offer.brand}`}>
                  <span>Get offer</span><span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
