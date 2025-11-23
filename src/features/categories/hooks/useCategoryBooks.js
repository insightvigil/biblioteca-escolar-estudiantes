import { useEffect, useState, useMemo } from "react";
import { getBooksByCategory } from "../services/categories.api";
import { parsePgTimestampToMs } from "../utils/parsePgTimestamp";

export function useCategoryBooks(categoryId) {
  const [categoryBooks, setCategoryBooks] = useState({});
  const { name = "", description = "", books = [] } = categoryBooks;

  const [filters, setFilters] = useState({
    sort: "created_at",
    order: "desc",
    available: ""
  });

  // Fetch
  useEffect(() => {
    getBooksByCategory(categoryId)
      .then((data) => setCategoryBooks(data))
      .catch((err) => console.error(err));
  }, [categoryId]);

  // Filtros
  const visibleBooks = useMemo(() => {
    let list = Array.isArray(books) ? [...books] : [];

    if (filters.available === "1") {
      list = list.filter((b) => {
        if (typeof b.available === "boolean") return b.available;
        if (typeof b.stock === "number") return b.stock > 0;
        return true;
      });
    }

    const { sort: sortKey, order } = filters;
    const dir = order === "asc" ? 1 : -1;

    list.sort((a, b) => {
      // Recientes
      if (sortKey === "created_at") {
        const ta = parsePgTimestampToMs(a?.created_at);
        const tb = parsePgTimestampToMs(b?.created_at);
        if (ta !== tb) return (ta - tb) * dir;
        return (a?.title ?? "").localeCompare(b?.title ?? "", "es") * dir;
      }

      // Año
      if (sortKey === "year") {
        const aa = Number(a?.year) || -Infinity;
        const bb = Number(b?.year) || -Infinity;
        if (aa !== bb) return (aa - bb) * dir;
        return (a?.title ?? "").localeCompare(b?.title ?? "", "es") * dir;
      }

      // Campos genéricos
      const va = (a?.[sortKey] ?? "").toString();
      const vb = (b?.[sortKey] ?? "").toString();

      const cmp = va.localeCompare(vb, "es");
      return cmp !== 0 ? cmp * dir : (a?.title ?? "").localeCompare(b?.title ?? "", "es") * dir;
    });

    return list;
  }, [books, filters]);

  // Handler
  const handleFiltersChange = (partial) => {
    setFilters((prev) => {
      const next = { ...prev, ...partial };
      if (partial.sort === "created_at") next.order = "desc";
      return next;
    });
  };

  return {
    name,
    description,
    visibleBooks,
    filters,
    handleFiltersChange
  };
}
