import { faqs } from '@/content/site';

export function FaqSection() {
  return (
    <section id="faq" className="faq-section">
      <div className="section-inner faq-inner">
        <div className="section-heading centered">
          <span className="section-kicker">Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.id} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
