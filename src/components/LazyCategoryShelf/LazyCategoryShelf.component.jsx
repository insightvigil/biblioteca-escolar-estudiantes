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
        rootMargin: "600px", 
        threshold: 0.01,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (!hasIntersected) return;

    const urls = (books || [])
      .map((b) => b.cover_url)
      .filter(Boolean);

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;  
    });
  }, [hasIntersected, books]);

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