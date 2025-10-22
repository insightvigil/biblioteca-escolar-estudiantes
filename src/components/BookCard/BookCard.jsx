import { Link } from 'react-router';

import './BookCard.styles.scss'



const BookCard = ({book}) => {
    const {id, title, author, cover_url,stock } = book
    const isTitleGreater = title.length > 20
    
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
                        <h3>{isTitleGreater ? title.slice(0,20) + "..." : title}</h3>
                        <p>{authorFormatted}</p>
                        <p className='available'>Disponible</p>

                    </figcaption>
                </figure>
            </section>
        </Link>
        </>
    )
}

export default BookCard;