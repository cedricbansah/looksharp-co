import { assuranceItems } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export function TrustSection() {
  return (
    <section id="trust" className="trust-section">
      <div className="section-inner">
        <Reveal className="trust-intro">
          <div><span className="section-kicker">Trust, without the fine-print fog</span><h2>Clear at every step.</h2></div>
          <p>Know what an offer requires, how rewards work, and where to get help before you commit.</p>
        </Reveal>

        <div className="assurance-grid">
          {assuranceItems.map((item) => (
            <Reveal key={item.id} className="assurance-item">
              <span className="assurance-mark" aria-hidden="true">✓</span>
              <div><h3>{item.title}</h3><p>{item.description}</p>{item.href ? <a href={item.href}>{item.linkLabel} <span aria-hidden="true">→</span></a> : null}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
