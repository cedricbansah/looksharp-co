import { heroContent } from '@/content/site';
import { CtaGroup } from '@/components/CtaGroup';
import { featuredOffers } from '@/content/site';
import { HeroOfferSlideshow } from '@/components/HeroOfferSlideshow';

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg-media" aria-hidden="true" />

      <img src="/brand/loopy-pulse.svg" alt="" className="hero-brand-loop" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">{heroContent.badge}</span>
          <h1>{heroContent.title}</h1>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-actions">
            <CtaGroup section="hero" className="hero-cta-row" compact />
            <a href="#offers" className="hero-explore-link">
              Explore live offers <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-microcopy">{heroContent.trustMicroCopy}</p>
        </div>

        <div className="phone-stage" aria-label="LookSharp app preview">
          <div className="phone-shell">
            <div className="phone-top"><span>9:41</span><i /><span>● ●</span></div>
            <div className="phone-appbar">
              <div className="phone-brand">
                <img src="/brand/logo-mark-brand.svg" alt="" width="24" height="22" />
                <strong>LookSharp</strong>
              </div>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
              </svg>
            </div>
            <div className="phone-scroll">
              <div className="phone-balance">
                <small>AVAILABLE BALANCE</small>
                <div className="phone-points"><strong>3,570</strong><span>Points Earned</span></div>
                <div className="phone-withdraw">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16v12H4zM16 10h5v5h-5a2.5 2.5 0 0 1 0-5Z" />
                  </svg>
                  Withdraw Cash
                </div>
              </div>

              <div className="phone-label"><strong>Featured Offers</strong><span>See all</span></div>
              <HeroOfferSlideshow offers={featuredOffers} />

              <div className="phone-label phone-survey-label"><strong>Available Surveys</strong><span>See all</span></div>
              <div className="phone-surveys">
                <div className="phone-survey">
                  <span><strong>60</strong>pts</span>
                  <div><strong>Health &amp; Lifestyle Survey</strong><small>6 questions</small></div>
                  <b>›</b>
                </div>
                <div className="phone-survey">
                  <span><strong>50</strong>pts</span>
                  <div><strong>Mobile Network Experience</strong><small>6 questions</small></div>
                  <b>›</b>
                </div>
                <div className="phone-survey">
                  <span><strong>45</strong>pts</span>
                  <div><strong>Everyday Shopping Habits</strong><small>5 questions</small></div>
                  <b>›</b>
                </div>
              </div>
            </div>

            <div className="phone-nav">
              <span className="is-active">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z" /></svg>
                <small>Home</small>
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 12 9-9h8v8l-9 9-8-8Z" /><circle cx="16.5" cy="6.5" r="1" /></svg>
                <small>Offers</small>
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v17H7zM9 2h6v4H9zM10 10h4M10 14h4" /></svg>
                <small>Surveys</small>
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>
                <small>Profile</small>
              </span>
            </div>
          </div>
          <div className="phone-float phone-float-save"><strong>3,570 pts</strong><span>Available balance</span></div>
          <div className="phone-float phone-float-cash"><span>Rewards</span><strong>Withdraw to mobile money</strong></div>
        </div>
      </div>
    </section>
  );
}
