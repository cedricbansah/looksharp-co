import { dealCategories } from '@/content/site';

export function CategoryRailSection() {
  return (
    <section className="category-section" aria-label="Categories">
      <div className="section-inner">
        <div className="section-heading centered">
          <h2>Explore Categories</h2>
          <p>Find deals across every category you love</p>
        </div>

        <div className="category-rail" role="list">
          {dealCategories.map((category) => (
            <article key={category.id} className="category-token" role="listitem">
              <div className="category-icon" aria-hidden="true">
                {category.icon ? (
                  <img src={category.icon} alt="" width={26} height={26} loading="lazy" />
                ) : null}
              </div>
              <span>{category.title}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
