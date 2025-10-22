import { Link } from 'react-router';

import './BookCard.styles.scss'



const BookCard = ({book}) => {
    const {id, title, author, cover_url } = book
    const isTitleGreater = title.length > 30
    
    const hasComma = author.includes(',')
    
    const authorFormatted = hasComma
    ? author.split(',')[0] 
    : author

    return (
        <>
        <Link className="link" to={`/books/${id}`}>
        {/*<Link className="link" to={`/libro/${id}`}>*/}
            <section key = {id} className="bookcard-container">
                <figure>
                    <img src={cover_url} className="book-cover"/>
                    <figcaption className="book-description">
                        <h3>{isTitleGreater ? title.slice(0,25) + "..." : title}</h3>
                        <p>{authorFormatted}</p>
                    </figcaption>
                </figure>
            </section>
        </Link>
        </>
    )
}

export default BookCard;