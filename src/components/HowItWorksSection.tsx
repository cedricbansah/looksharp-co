import { steps } from '@/content/site';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="content-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">How it works</p>
        <h2>A clear three-step journey from deal discovery to cashout</h2>
      </div>

      <div className="steps-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="step-card">
            <p className="step-index">0{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
