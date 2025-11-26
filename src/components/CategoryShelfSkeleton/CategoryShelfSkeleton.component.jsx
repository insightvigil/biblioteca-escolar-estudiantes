// src/components/CategoryShelf/CategoryShelfSkeleton.component.jsx
import "./CategoryShelfSkeleton.styles.scss";

export default function CategoryShelfSkeleton({ title = "Cargando…" }) {
  const placeholders = Array.from({ length: 5 });

  return (
    <section className="categoryshelf-container categoryshelf-container--skeleton">
      <header className="categoryshelf-header categoryshelf-header--skeleton">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
      </header>

      <div className="categoryshelf-skeleton-row">
        <div className="skeleton-arrow skeleton-arrow--left">&lt;</div>

        <div className="categoryshelf-skeleton-cards">
          {placeholders.map((_, idx) => (
            <div key={idx} className="skeleton-card">
              <div className="skeleton skeleton-cover" />
              <div className="skeleton skeleton-line" />
              <div className="skeleton skeleton-line skeleton-line--short" />
            </div>
          ))}
        </div>

        <div className="skeleton-arrow skeleton-arrow--right">&gt;</div>
      </div>
    </section>
  );
}
