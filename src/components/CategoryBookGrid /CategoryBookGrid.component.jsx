import './CategoryBookGrid.styles.scss';
import BookCard from '../BookCard/BookCard';
import { useEffect, useState } from 'react';

const CategoryBookGrid = ({books}) => {
   
    return(
        <>
        <section className="categorybookgrid-container">
            {books.map((book) => ( 
                <BookCard key={book.id} book={book}></BookCard>
            ))}
            
        </section>
        </>
    )
}
export default CategoryBookGrid;