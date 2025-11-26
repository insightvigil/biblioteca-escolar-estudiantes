// src/features/home/components/LazyCategoryShelf.jsx
import { useEffect, useRef, useState } from "react";
import CategoryShelf from "../CategoryShelf/CategoryShelf.component";
import CategoryShelfSkeleton from "../CategoryShelfSkeleton/CategoryShelfSkeleton.component";
import "./LazyCategoryShelf.styles.scss";

export default function LazyCategoryShelf({
  id,
  category,
  description,
  books = [],
  delayMs = 300
}) {
  const [hasIntersected, setHasIntersected] = useState(false);
  const [showReal, setShowReal] = useState(false);
  const containerRef = useRef(null);

  // 1) Observa cuándo el shelf se acerca al viewport
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasIntersected(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "600px", // 👈 se activa MUCHO antes de que sea visible
        threshold: 0.01,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // 2) En cuanto se activa, pre-cargamos las portadas
  useEffect(() => {
    if (!hasIntersected) return;

    const urls = (books || [])
      .map((b) => b.cover_url)
      .filter(Boolean);

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;  // 👈 dispara la descarga ANTES de mostrar el BookCard
    });
  }, [hasIntersected, books]);

  // 3) Pequeño delay para simular carga antes de quitar el skeleton
  useEffect(() => {
    if (!hasIntersected) return;
    const t = setTimeout(() => setShowReal(true), delayMs);
    return () => clearTimeout(t);
  }, [hasIntersected, delayMs]);

  if (!hasIntersected || !showReal) {
    return (
      <div ref={containerRef}>
        <CategoryShelfSkeleton />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="lazy-shelf-anim">
      <CategoryShelf
        id={id}
        category={category}
        description={description}
        books={books}
      />
    </div>
  );
}