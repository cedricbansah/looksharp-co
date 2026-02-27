export function FinalCtaSection() {
  return (
    <section id="cta" className="final-cta-section">
      <div className="cta-bg-shape cta-bg-shape-right" aria-hidden="true" />
      <div className="cta-bg-shape cta-bg-shape-left" aria-hidden="true" />

      <div className="section-inner centered cta-content">
        <h2>Ready to Start Saving?</h2>
        <p>
          Join hundreds of thousands of users already earning rewards and unlocking
          exclusive deals every day.
        </p>

        <div className="hero-cta-row final-cta-row">
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
      </div>
    </section>
  );
}
