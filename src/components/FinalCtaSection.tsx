import { CtaGroup } from '@/components/CtaGroup';

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

        <CtaGroup section="final-cta" className="hero-cta-row final-cta-row" />
      </div>
    </section>
  );
}
