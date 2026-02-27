import { faqs } from '@/content/site';

export function FaqSection() {
  return (
    <section id="faq" className="content-section faq-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">FAQ</p>
        <h2>Answers to membership, offers, and payout questions</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item) => (
          <details key={item.id} className="faq-item">
            <summary>
              <span>{item.question}</span>
              {item.group ? <small>{item.group}</small> : null}
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
