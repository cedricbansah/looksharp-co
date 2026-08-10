import { CtaGroup } from '@/components/CtaGroup';
import { Reveal } from '@/components/Reveal';

export function FinalCtaSection() {
  return (
    <section id="cta" className="final-cta-section">
      <img src="/brand/pulsepop-yellow.svg" alt="" className="cta-brand-shape" aria-hidden="true" />

      <Reveal className="section-inner cta-content">
        <span className="section-kicker">Your next win is waiting</span>
        <h2>Look sharp.<br />Spend smarter.</h2>
        <p>Discover offers, earn eligible rewards, and keep more of your money.</p>
        <CtaGroup section="final-cta" className="final-cta-row" />
      </Reveal>
    </section>
  );
}
