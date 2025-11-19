import "./BookInfoDetails.styles.scss";

export default function BookInfoDetails({ book }) {
  const { editorial, paginas, idioma, year, isbn10, isbn13 } = book;

  return (
    <div className="details">
      <h3>Detalles de la edición</h3>

      <table className="bookdetail-table">
        <tbody>
          <tr><td className="title">Editorial:</td><td className="data">{editorial}</td></tr>
          <tr><td className="title">Páginas:</td><td className="data">{paginas}</td></tr>
          <tr><td className="title">Idioma:</td><td className="data">{idioma}</td></tr>
          <tr><td className="title">Año:</td><td className="data">{year}</td></tr>
          <tr><td className="title">ISBN-10:</td><td className="data">{isbn10}</td></tr>
          <tr><td className="title">ISBN-13:</td><td className="data">{isbn13}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
