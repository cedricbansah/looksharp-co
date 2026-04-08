import { assuranceItems, proofStats, testimonials } from '@/content/site';

export function TrustSection() {
  return (
    <section id="trust" className="trust-section">
      <div className="section-inner">
        <div className="section-heading centered">
          <span className="section-kicker">Trusted Platform</span>
          <h2>Why Users Trust LookSharp</h2>
        </div>

        <div className="proof-grid">
          {proofStats.map((stat) => (
            <article key={stat.id} className="proof-card">
              <p className="proof-value">{stat.value}</p>
              <p className="proof-label">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="assurance-row">
          {assuranceItems.map((item) => (
            <div key={item.id} className="assurance-chip">
              <span aria-hidden="true">✓</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">{testimonial.quote}</p>
              <p className="testimonial-stars">★★★★★</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
