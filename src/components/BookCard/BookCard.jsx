import { Link } from 'react-router';
import './BookCard.styles.scss';

const BookCard = ({ book = {} }) => {
  const {
    id,
    title = 'Sin título',
    author = 'Autor desconocido',
    cover_url = '',
    stock,
    available
  } = book;

  // Disponibilidad: usa 'available' si es booleano; si no, evalúa stock > 0; si no hay dato, asume disponible.
  const isAvailable = typeof available === 'boolean'
    ? available
    : (typeof stock === 'number' ? stock > 0 : true);

  const isTitleLong = (title || '').length > 20;

  const authorText = typeof author === 'string' && author.length > 0
    ? (author.includes(',') ? author.split(',')[0] : author)
    : 'Autor desconocido';

  const Availability = () => (
    <p className={isAvailable ? 'available' : 'unavailable'}>
      {isAvailable ? 'Disponible' : 'No disponible'}
    </p>
  );

  // Si por alguna razón no hay id, evitamos link roto
  const content = (
    <section className="bookcard-container">
      <figure>
        <img
          src={cover_url}
          alt={title}
          className="book-cover"
          loading="lazy"
        />
        <figcaption className="book-description">
          <h3>{isTitleLong ? `${title.slice(0, 20)}…` : title}</h3>
          <p>{authorText}</p>
          <Availability />
        </figcaption>
      </figure>
    </section>
  );

  return id ? (
    <Link className="link" to={`/books/${id}`}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default BookCard;
