import { steps } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="section-inner">
        <Reveal className="journey-heading">
          <span className="section-kicker">One app, more value</span>
          <h2>From discovery<br />to mobile money.</h2>
          <p>Save with offers today, share what you know, and turn eligible rewards into cash.</p>
        </Reveal>

        <Reveal className="steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="step-card">
              {index < steps.length - 1 ? <span className="step-connector" aria-hidden="true" /> : null}
              <div className="step-icon-wrap"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
