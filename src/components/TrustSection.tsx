import { assuranceItems, proofStats, testimonials } from '@/content/site';

export function TrustSection() {
  return (
    <section id="trust" className="content-section trust-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">Trust and proof</p>
        <h2>Built for credibility before conversion</h2>
      </div>

      <div className="proof-strip">
        {proofStats.map((metric) => (
          <article key={metric.id} className="proof-card">
            <p className="proof-value">{metric.value}</p>
            <p className="proof-label">{metric.label}</p>
          </article>
        ))}
      </div>

      <div className="assurance-grid">
        {assuranceItems.map((item) => (
          <article key={item.id} className="assurance-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="testimonial-card">
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <p className="testimonial-meta">
              {testimonial.author}
              {testimonial.role ? ` • ${testimonial.role}` : ''}
            </p>
          </article>
        ))}
      </div>

      <p className="placeholder-note">
        Trust metrics, testimonials, and offers shown in staging are representative
        placeholders pending final production approval.
      </p>
    </section>
  );
}
