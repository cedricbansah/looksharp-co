import { dealCategories } from '@/content/site';
import { Reveal } from '@/components/Reveal';

export function CategoryRailSection() {
  return (
    <section id="categories" className="category-section" aria-label="Categories">
      <div className="section-inner">
        <Reveal className="category-heading">
          <div><span className="section-kicker">Pick your lane</span><h2>Whatever you’re into,<br />start somewhere good.</h2></div>
          <p>Explore what&apos;s waiting <span aria-hidden="true">→</span></p>
        </Reveal>

        <Reveal className="category-rail-wrap"><div className="category-rail" role="list">
          {dealCategories.map((category, index) => (
            <article
              key={category.id}
              className={`category-token${index === 0 ? ' category-token-featured' : ''}`}
              role="listitem"
            >
              {category.image ? (
                <img
                  src={category.image}
                  alt=""
                  className="category-image"
                  loading="lazy"
                  aria-hidden="true"
                />
              ) : null}
              <div className="category-shade" aria-hidden="true" />
              <div className="category-icon" aria-hidden="true">
                {category.icon ? (
                  <img src={category.icon} alt="" width={26} height={26} loading="lazy" />
                ) : null}
              </div>
              <div className="category-copy">
                <span>{category.title}</span>
                <small>{category.description}</small>
              </div>
              <span className="category-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div></Reveal>
      </div>
    </section>
  );
}
