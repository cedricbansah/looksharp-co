import { heroContent } from '@/content/site';
import { CtaGroup } from '@/components/CtaGroup';

export function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-bg-media" aria-hidden="true">
        <img src="/hero-bg.jpg" alt="" width={1920} height={1080} />
      </div>

      <div className="hero-inner">
        <span className="hero-badge">{heroContent.badge}</span>

        <h1>
          Shop Smarter, <span>Earn Rewards</span> Every Day
        </h1>

        <p className="hero-description">{heroContent.description}</p>

        <CtaGroup section="hero" className="hero-cta-row" />

        <div className="hero-proof-row">
          {heroContent.heroValuePoints.map((point) => (
            <div key={point} className="hero-proof-pill">
              <span aria-hidden="true">●</span>
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
