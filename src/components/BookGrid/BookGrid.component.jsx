import './BookGrid.styles.scss'
import BookCard from '../BookCard/BookCard'
import { useState, useMemo } from 'react'

const BookGrid = ({ books = [], step = 5 }) => {
  const [startIndex, setStartIndex] = useState(0)
  const total = books.length

  const handlePrev = () => setStartIndex(prev => Math.max(0, prev - step))
  const handleNext = () =>
    setStartIndex(prev => (prev + step < total ? prev + step : prev))

  const visibleBooks = useMemo(
    () => books.slice(startIndex, startIndex + step),
    [books, startIndex, step]
  )

  return (
    <section className="bookgrid-container">
      {/* Botón anterior */}
      <span
        className="nav-btn left"
        onClick={handlePrev}
        aria-disabled={startIndex === 0}
      >
        &lt;
      </span>

      {/* Lista de libros visibles */}
      <div className="books-wrapper">
        {visibleBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {/* Botón siguiente */}
      <span
        className="nav-btn right"
        onClick={handleNext}
        aria-disabled={startIndex + step >= total}
      >
        &gt;
      </span>
    </section>
  )
}

export default BookGrid
