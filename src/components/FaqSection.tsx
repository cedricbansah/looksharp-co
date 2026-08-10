import { faqs } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export function FaqSection() {
  return (
    <section id="faq" className="faq-section">
      <div className="section-inner faq-inner">
        <Reveal className="section-heading faq-heading">
          <span className="section-kicker">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.id} className="faq-item">
              <summary><span>{item.question}</span><i aria-hidden="true" /></summary>
              <div className="faq-answer"><p>{item.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
