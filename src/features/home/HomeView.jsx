// src/features/home/HomeView.jsx
import { useEffect, useRef, useState } from "react";

import CategoryShelf from "../../components/CategoryShelf/CategoryShelf.component";
import CategoriesExplorer from "../../components/CategoriesExplorerShelf/CategoriesExplorer.component";

import CategoryShelfSkeleton from "../../components/CategoryShelfSkeleton/CategoryShelfSkeleton.component";

import LazyCategoryShelf from "../../components/LazyCategoryShelf/LazyCategoryShelf.component";

import { useHomeData } from "./hooks/useHomeData";
import "./HomeView.styles.scss";

const CATEGORY_CHUNK = 3; // cuántas categorías mostrar de golpe

export default function HomeView() {
  const {
    latestBooks,
    categories,
    loadingLatest,
    loadingCategories,
    error
  } = useHomeData();

  // límite de categorías actualmente montadas en el DOM
  const [visibleLimit, setVisibleLimit] = useState(CATEGORY_CHUNK);
  const loadMoreRef = useRef(null);

  // cuando cambie la lista de categorías (nueva carga), reseteamos el límite
  useEffect(() => {
    setVisibleLimit(CATEGORY_CHUNK);
  }, [categories]);

  // IntersectionObserver para ir agregando más categorías al llegar al final
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node) return;
    if (!categories || categories.length <= visibleLimit) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleLimit((prev) =>
              Math.min(prev + CATEGORY_CHUNK, categories.length)
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "160px",
        threshold: 0.1,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [categories, visibleLimit]);

  const visibleCategories = categories.slice(0, visibleLimit);

  return (
    <section className="home-container">
      {error && (
        <p className="home-error">
          {error}
        </p>
      )}

      {/* Explorer de categorías */}
      {loadingCategories && categories.length === 0 ? (
        <div className="categories-explorer-skeleton">
          <div className="skeleton-bar" />
          <div className="skeleton-tags">
            <span className="tag-skeleton" />
            <span className="tag-skeleton" />
            <span className="tag-skeleton" />
          </div>
        </div>
      ) : (
        <CategoriesExplorer categories={categories} />
      )}

      {/* Recién agregados */}
      {loadingLatest ? (
        <CategoryShelfSkeleton />
      ) : (
        <CategoryShelf
          id={null}
          category="Recién agregados"
          description="Libros agregados recientemente al catálogo"
          books={latestBooks}
        />
      )}

      {visibleCategories.map((category, index) => (
        <LazyCategoryShelf
          key={category.id}
          id={category.id}
          category={category.name}
          description={category.description}
          books={category.books}
          delayMs={0.5 + index * 10}
        />
      ))}

      
      {visibleLimit < categories.length && (
        <div ref={loadMoreRef} style={{ height: "40px" }} />
      )}
    </section>
  );
}
