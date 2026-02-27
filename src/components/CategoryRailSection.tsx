import { dealCategories } from '@/content/site';

export function CategoryRailSection() {
  return (
    <section id="categories" className="content-section category-section">
      <div className="section-heading-wrap">
        <p className="section-kicker">Discover categories</p>
        <h2>Browse offers the way people actually shop</h2>
      </div>

      <div className="category-rail" role="list" aria-label="Offer categories">
        {dealCategories.map((category) => (
          <article key={category.id} className="category-card" role="listitem">
            <p className="category-tag">{category.tag}</p>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
