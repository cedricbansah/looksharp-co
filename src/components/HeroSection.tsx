import { heroContent } from '@/content/site';

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

        <div className="hero-cta-row">
          <a href="#cta" className="cta-primary">
            Start Earning
          </a>
          <a href="#cta" className="cta-ghost">
            <img
              src="/icons/stores/app-store.svg"
              alt=""
              aria-hidden="true"
              className="cta-store-logo"
              width={16}
              height={16}
            />
            iOS App
          </a>
          <a href="#cta" className="cta-ghost">
            <img
              src="/icons/stores/play-store.svg"
              alt=""
              aria-hidden="true"
              className="cta-store-logo"
              width={16}
              height={16}
            />
            Android App
          </a>
        </div>

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
