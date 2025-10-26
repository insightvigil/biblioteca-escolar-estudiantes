import './CategoryBookGrid.styles.scss';
import BookCard from '../BookCard/BookCard';

const CategoryBookGrid = ({ books = [] }) => {
  return (
    <section className="categorybookgrid-container">
      {Array.isArray(books) && books.length > 0 ? (
        books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))
      ) : (
        <div className="categorybookgrid-empty">No hay libros para mostrar.</div>
      )}
    </section>
  );
};

export default CategoryBookGrid;
