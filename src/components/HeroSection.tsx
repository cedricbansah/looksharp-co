import { heroContent } from '@/content/site';

import { CtaGroup } from '@/components/CtaGroup';

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-badge">{heroContent.badge}</p>
          <h1>{heroContent.title}</h1>
          <p className="hero-description">{heroContent.description}</p>

          <ul className="hero-value-list">
            {heroContent.heroValuePoints.map((point) => (
              <li key={point} className="hero-value-item">
                <span aria-hidden="true">+</span>
                {point}
              </li>
            ))}
          </ul>

          <CtaGroup section="hero" className="hero-cta-group" />
          <p className="hero-microcopy">{heroContent.trustMicroCopy}</p>
        </div>

        <aside className="hero-panel" aria-label="LookSharp member value highlights">
          <div className="hero-stat-grid">
            {heroContent.valueHighlights.map((highlight) => (
              <article key={highlight.label} className="hero-stat-card">
                <p className="hero-stat-value">{highlight.value}</p>
                <p className="hero-stat-label">{highlight.label}</p>
              </article>
            ))}
          </div>

          <div className="hero-visual-stack" aria-hidden="true">
            <div className="hero-visual-primary">
              <img
                src="/brand/background-01.svg"
                alt=""
                width={360}
                height={382}
                loading="eager"
              />
            </div>
            <img
              className="hero-shape hero-shape-loopy"
              src="/brand/loopy-pulse.svg"
              alt=""
              width={110}
              height={110}
            />
            <img
              className="hero-shape hero-shape-pop"
              src="/brand/pulsepop-yellow.svg"
              alt=""
              width={124}
              height={124}
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
