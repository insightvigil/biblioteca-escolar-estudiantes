import { useState,useEffect } from 'react';
import { useParams } from 'react-router'

import CategoryShelfHeader from '../../components/CategoryShelfHeader/CategoryShelfHeader.component';
import CategoryBookGrid from '../../components/CategoryBookGrid /CategoryBookGrid.component';

import './Categories.styles.scss'

export default function Category() {
    const {id} =useParams();
    const [categoryBooks,setCategoryBooks] = useState({})
    useEffect(()=> {
        fetch(`http://localhost:4000/api/v1/books/category/${id}`)
        .then((response)=> response.json())
        .then((data)=>setCategoryBooks(data))
        .catch((err) => console.log(err));
    },[id])

   const { name, description, books = [] } = categoryBooks;

    return (
        <>
            <section className='categorysection-container'>
            <CategoryShelfHeader category={name} description = {description}></CategoryShelfHeader>
            <CategoryBookGrid books= {books}></CategoryBookGrid>
            </section>
        </>
    )
}