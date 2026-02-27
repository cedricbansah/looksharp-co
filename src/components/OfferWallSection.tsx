import { featuredOffers } from '@/content/site';

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
              <div className="offer-main">
                <div className="offer-top">
                  <span className={`offer-badge offer-badge-${offer.badgeVariant ?? 'default'}`}>
                    {offer.badge}
                  </span>
                  <span className="offer-image" aria-hidden="true">
                    {offer.image ? (
                      <img src={offer.image} alt="" width={32} height={32} loading="lazy" />
                    ) : null}
                  </span>
                </div>
                <p className="offer-brand">{offer.brand}</p>
                <h3>{offer.title}</h3>
                <p className="offer-savings">{offer.savings}</p>
              </div>

              <div className="offer-bottom">
                <div className="offer-meta">
                  <span className="offer-category-pill">{offer.category}</span>
                  <span className="offer-time">Limited time</span>
                </div>
                <p className="offer-disclaimer">{offer.disclaimer}</p>
                <a href="#cta" className="offer-action">
                  Get Offer {'->'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="placeholder-note">* Placeholder offers shown for demonstration purposes</p>
      </div>
    </section>
  );
}
