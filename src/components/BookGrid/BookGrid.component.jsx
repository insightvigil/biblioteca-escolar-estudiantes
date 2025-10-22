import './BookGrid.styles.scss';
import BookCard from '../BookCard/BookCard';
import { useEffect, useState } from 'react';

const BookGrid = ({books}) => {
   
    return(
        <>
        <section className="bookgrid-container">
            {books.slice(0, 5).map((book) => ( 
                <BookCard key={book.id} book={book}></BookCard>
            ))}
            
        </section>
        </>
    )
}
export default BookGrid;