'use client';

import { featuredOffers } from '@/content/site';

function formatEndDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function OfferWallSection() {
  return (
    <section id="offers" className="offers-section">
      <div className="section-inner">
        <div className="offers-header">
          <div>
            <span className="section-kicker">Trending Now</span>
            <h2>Featured Offers</h2>
          </div>
          <button type="button" className="offers-view-all" aria-label="View all offers">
            View All {'->'}
          </button>
        </div>

        <div className="offers-grid">
          {featuredOffers.map((offer) => (
            <article key={offer.id} className="offer-card">
              {/* Poster + avatar overlap container */}
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
                {/* Brand avatar overlapping the image/body seam — outside overflow:hidden poster */}
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
              </div>

              {/* Card body */}
              <div className="offer-body">
                <p className="offer-brand-name">{offer.brand}</p>
                <h3 className="offer-title">{offer.title}</h3>
                {offer.description ? (
                  <p className="offer-description">{offer.description}</p>
                ) : null}
                {offer.endDate ? (
                  <p className="offer-end-date">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Ends {formatEndDate(offer.endDate)}
                  </p>
                ) : null}
                <a href="#cta" className="offer-action">
                  Get Offer {'->'}
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
