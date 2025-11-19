import BreadCrumbs from "../../components/navigation/BreadCrumbs/BreadCrumbs.component";
import BookInfoDetails from "./components/BookInfoDetails/BookInfoDetails";
import BookLocationInfo from "./components/BookLocationInfo/BookLocationInfo";

import './BookDetail.styles.scss'

export default function BookDetailView({ book }) {
  return (
    <div className="bookdetail-page">
      <BreadCrumbs book={book} />

      <section className="bookdetail-container">
        
        <div className="left-container">
          <figure>
            <img src={book.cover_url} alt={book.title} />
          </figure>
        </div>

        <div className="right-container">
          <div className="title-block">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
          
          <BookInfoDetails book={book} />
          <BookLocationInfo book={book} />
        </div>

      </section>
    </div>
  );
}
