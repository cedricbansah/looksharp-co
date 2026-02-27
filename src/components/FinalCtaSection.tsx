import { CtaGroup } from '@/components/CtaGroup';

export function FinalCtaSection() {
  return (
    <section id="get-started" className="final-cta-section">
      <p className="section-kicker">Get started</p>
      <h2>Choose your platform and start earning with LookSharp today</h2>
      <p>
        Explore category-based offers, complete quick surveys, and redeem your
        points with confidence through one unified rewards flow.
      </p>
      <CtaGroup section="final-cta" />
    </section>
  );
}
