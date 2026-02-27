import { featuredOffers } from '@/content/site';

export function OfferWallSection() {
  return (
    <section id="offers" className="content-section offer-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">Featured offers</p>
        <h2>A conversion-oriented wall of current savings opportunities</h2>
      </div>

      <div className="offers-grid">
        {featuredOffers.map((offer) => (
          <article key={offer.id} className="offer-card">
            <div className="offer-topline">
              <p className="offer-badge">{offer.badge}</p>
              <p className="offer-category">{offer.category}</p>
            </div>
            <p className="offer-brand">{offer.brand}</p>
            <h3>{offer.title}</h3>
            <p className="offer-savings">{offer.savings}</p>
            <p className="offer-disclaimer">{offer.disclaimer}</p>
            <a className="offer-link" href="#get-started">
              Redeem with LookSharp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
