import { useState,useEffect } from 'react';
import { useParams } from 'react-router'

import CategoryShelfHeader from '../../components/CategoryShelfHeader/CategoryShelfHeader.component';
import CategoryBookGrid from '../../components/CategoryBookGrid /CategoryBookGrid.component';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.component';
import './Categories.styles.scss'

const API = import.meta.env.VITE_API_URL || 'http://192.168.137.74:4000/api/v1';

export default function Category() {
    const {id} =useParams();
    const [categoryBooks,setCategoryBooks] = useState({})
    useEffect(()=> {
        fetch(`${API}/books/category/${id}`)
        .then((response)=> response.json())
        .then((data)=>setCategoryBooks(data))
        .catch((err) => console.log(err));
    },[id])

   const { name, description, books = [] } = categoryBooks;

    return (
        <>
            <BreadCrumbs book={ {}}></BreadCrumbs>
            <section className='categorysection-container'>
            <CategoryShelfHeader category={name} description = {description}></CategoryShelfHeader>
            <CategoryBookGrid books= {books}></CategoryBookGrid>
            </section>
        </>
    )
}