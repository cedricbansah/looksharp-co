import { steps } from '@/content/site';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-inner">
        <div className="section-heading centered">
          <span className="section-kicker">Simple Process</span>
          <h2>How It Works</h2>
          <p>Three easy steps to start saving money and earning rewards</p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
              {index < steps.length - 1 ? <span className="step-connector" aria-hidden="true" /> : null}
              <div className="step-icon-wrap">{String(index + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
