import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

import CategoryShelfHeader from '../../components/CategoryShelfHeader/CategoryShelfHeader.component';
import CategoryBookGrid from '../../components/CategoryBookGrid /CategoryBookGrid.component';
import BreadCrumbs from '../../components/navigation/BreadCrumbs/BreadCrumbs.component';
import './CategoriesBooksPage.styles.scss';

const API = import.meta.env.VITE_API_URL || 'http://192.168.137.74:4000/api/v1';

// Normaliza "YYYY-MM-DD hh:mm:ss.ffffff" a milisegundos (epoch)
function parsePgTimestampToMs(val) {
  if (!val) return 0;
  if (val instanceof Date) return val.getTime();
  let s = String(val).trim();

  // "2025-10-20 17:40:08.879901" -> "2025-10-20T17:40:08.879"
  s = s.replace(' ', 'T').replace(/(\.\d{3})\d+$/, '$1');

  const t = Date.parse(s); // intenta ISO-like
  if (!Number.isNaN(t)) return t;

  // Fallback simple (YYYY-MM-DDTHH:MM:SS(.ms)?)
  const m = s.match(
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,3}))?$/
  );
  if (m) {
    const [, Y, Mo, D, H, Mi, Se, Ms = '0'] = m;
    return new Date(+Y, +Mo - 1, +D, +H, +Mi, +Se, +Ms).getTime();
  }
  return 0;
}

export default function Category() {
  const { id } = useParams();

  const [categoryBooks, setCategoryBooks] = useState({});
  const { name = '', description = '', books = [] } = categoryBooks;

  // Filtros (Order por, Orden, Disponibilidad)
  const [filters, setFilters] = useState({
    sort: 'created_at',  // 'created_at' | 'title' | 'author' | 'year'
    order: 'desc',       // 'asc' | 'desc'  -> Recientes = desc por defecto
    available: ''        // '' (todos) | '1' (solo disponibles)
  });

  // Cargar libros de la categoría
  useEffect(() => {
    fetch(`${API}/books/category/${id}`)
      .then((response) => response.json())
      .then((data) => setCategoryBooks(data))
      .catch((err) => console.log(err));
  }, [id]);

  // Derivar libros según filtros (cliente)
  const visibleBooks = useMemo(() => {
    let list = Array.isArray(books) ? [...books] : [];

    // Disponibilidad (booleano 'available' o numérico 'stock')
    if (filters.available === '1') {
      list = list.filter((b) => {
        if (typeof b.available === 'boolean') return b.available;
        if (typeof b.stock === 'number') return b.stock > 0;
        return true; // sin dato, no filtra
      });
    }

    const { sort: sortKey, order } = filters;
    const dir = order === 'asc' ? 1 : -1;

    list.sort((a, b) => {
      // Recientes: usar timestamp completo (con microsegundos) como fecha real
      if (sortKey === 'created_at') {
        const ta = parsePgTimestampToMs(a?.created_at);
        const tb = parsePgTimestampToMs(b?.created_at);
        if (ta !== tb) return (ta - tb) * dir;
        // Empate estable por título
        return ((a?.title ?? '')).localeCompare((b?.title ?? ''), 'es', { sensitivity: 'base' }) * dir;
      }

      // Ordenar por año como número (si lo usas)
      if (sortKey === 'year') {
        const ya = Number(a?.year), yb = Number(b?.year);
        const aa = Number.isFinite(ya) ? ya : -Infinity;
        const bb = Number.isFinite(yb) ? yb : -Infinity;
        if (aa !== bb) return (aa - bb) * dir;
        return ((a?.title ?? '')).localeCompare((b?.title ?? ''), 'es', { sensitivity: 'base' }) * dir;
      }

      // Genérico: string compare (title, author, etc.)
      const va = (a?.[sortKey] ?? '').toString();
      const vb = (b?.[sortKey] ?? '').toString();
      const primary = va.localeCompare(vb, 'es', { sensitivity: 'base' });
      if (primary !== 0) return primary * dir;
      return ((a?.title ?? '')).localeCompare((b?.title ?? ''), 'es', { sensitivity: 'base' }) * dir;
    });

    return list;
  }, [books, filters]);

  // Handler único para cambios de filtro
  const handleFiltersChange = (partial) => {
    setFilters((prev) => {
      const next = { ...prev, ...partial };
      // Si el usuario elige "Recientes" explícitamente, garantizamos descendente
      if (partial?.sort === 'created_at') {
        next.order = 'desc';
      }
      return next;
    });
  };

  return (
    <>
      <BreadCrumbs book={{}} />
      <section className="categorysection-container">
        <CategoryShelfHeader
          category={name}
          description={description}
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />
        <CategoryBookGrid books={visibleBooks} />
      </section>
    </>
  );
}
