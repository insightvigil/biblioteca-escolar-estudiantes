import ShelfHeader from "../ShelfHeader/ShelfHeader.component";
import BookGrid from "../BookGrid/BookGrid.component";

import { useState, useEffect } from "react";

import './CategoryShelf.styles.scss'


const CategoryShelf = ({category, description, books,id}) => {

    return (
        <>
        <section className="categoryshelf-container">
        <ShelfHeader category={category} description = {description} id={id}></ShelfHeader>
        <BookGrid books={books}></BookGrid>
        </section>
        </>
    )
}

export default CategoryShelf;