import './BooksFilter.styles.scss';

export default function BooksFilter({ sort, order, available, onChange }) {
  // Opciones de “Order por” según tus campos reales
  const sortOptions = [
    { value: 'created_at', label: 'Recientes' },
    { value: 'title',      label: 'Título' },
    { value: 'author',     label: 'Autor' }
    // { value: 'year',    label: 'Año' }, // opcional si lo necesitas
  ];

  return (
    <div className="booksfilter-container">
      {/* Order por */}
      <label className="booksfilter__control">
        <span className="booksfilter__label">Ordenar por: </span>
        <select
          className="booksfilter__select"
          value={sort}
          onChange={(e) => onChange({ sort: e.target.value })}
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>

      {/* Orden */}
      <label className="booksfilter__control">
        <span className="booksfilter__label">Orden: </span>
        <select
          className="booksfilter__select"
          value={order}
          onChange={(e) => onChange({ order: e.target.value })}
        >
          <option value="asc">Ascendente (A→Z)</option>
          <option value="desc">Descendente (Z→A)</option>
        </select>
      </label>

      {/* Disponibilidad */}
      <label className="booksfilter__control">
        <span className="booksfilter__label">Disponibilidad: </span>
        <select
          className="booksfilter__select"
          value={available}
          onChange={(e) => onChange({ available: e.target.value })}
        >
          <option value="">Todos</option>
          <option value="1">Solo disponibles</option>
        </select>
      </label>
    </div>
  );
}
