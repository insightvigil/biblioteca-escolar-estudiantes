import "./BookLocationInfo.styles.scss";

export default function BookLocationInfo({ book }) {
  const { estante, nivel, stock } = book;

  return (
    <div className="location">
      <h3>Disponibilidad y ubicación</h3>

      <table className="bookdetail-table">
        <tbody>
          <tr><td className="title">Estante:</td><td className="data">{estante}</td></tr>
          <tr><td className="title">Nivel:</td><td className="data">{nivel}</td></tr>
          <tr><td className="title">Stock:</td><td className="data">{stock}</td></tr>
        </tbody>
      </table>
    </div>
  );
}
