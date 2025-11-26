import { useState, useEffect } from "react";
import { getLatestBooks, getCategoriesWithBooks } from "../services/home.api";

export function useHomeData() {
  const [latestBooks, setLatestBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loadingLatest, setLoadingLatest] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setError(null);
        setLoadingLatest(true);
        setLoadingCategories(true);

        const [latest, cats] = await Promise.all([
          getLatestBooks(),
          getCategoriesWithBooks()
        ]);

        if (cancelled) return;

        setLatestBooks(latest || []);
        setCategories(cats || []);
      } catch (err) {
        if (cancelled) return;
        console.error("[useHomeData] Error cargando home:", err);
        setError("Ocurrió un problema al cargar los libros. Intenta de nuevo más tarde.");
      } finally {
        if (cancelled) return;
        setLoadingLatest(false);
        setLoadingCategories(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    latestBooks,
    categories,
    loadingLatest,
    loadingCategories,
    error
  };
}
