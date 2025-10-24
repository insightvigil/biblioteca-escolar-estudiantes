import { useEffect, useState } from 'react'
import BookInfoDetails from '../../components/BookInfoDetails/BookInfoDetails.styles'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs.component'
import './BookDetail.styles.scss'
import { useParams } from 'react-router'

const API = import.meta.env.VITE_API_URL || 'http://192.168.137.74:4000/api/v1';

export default function BookDetail() {
    const {id} =useParams();
    const [book, setBook] = useState([]);

    useEffect(()=> {
    fetch(`${API}/books/${id}`)
    .then((response) => response.json())
    .then((data) => setBook(data))   
    },[id])

    return(
        <>
            <BreadCrumbs book = {book}></BreadCrumbs>
            <section className="bookdetail-container">
            <div className="left-container">      
                <figure>
                    <img src={book.cover_url} alt="" />
                </figure>
            </div>

            <div className='right-container'>
                <div className="title-block">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    {console.log(book)}
                </div>
                <BookInfoDetails book={book}></BookInfoDetails>

                
            </div>
            </section>
        </>
    )
}