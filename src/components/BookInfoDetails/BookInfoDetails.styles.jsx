import './BookInfoDetails.styles.scss'

const BookInfoDetails =  ({book}) => {
    const {editorial, paginas, idioma, year, isbn13, isbn10, estante, nivel,stock} = book

    return(
        <>
            <div class="details">
                    <h3>Detalles de la edición</h3>
                    <table>
                            <tr>
                                <td className="title">Editorial: </td>
                                <td className="data">{editorial}</td>
                            </tr>
                            <tr>
                                <td className="title">Páginas: </td>
                                <td className="data">{paginas}</td>
                            </tr>
                            <tr>
                                <td className="title">Idioma: </td>
                                <td className="data">{idioma}</td>
                            </tr>
                            <tr>
                                <td className="title">Año </td>
                                <td className="data">{year}</td>
                            </tr>
                            
                            <tr>
                                <td class='title'>ISBN-10: </td>
                                <td className="data">{isbn10}</td>
                            </tr>

                            <tr>
                                <td class='title'>ISBN-13: </td>
                                <td className="data">{isbn13}</td>
                            </tr>
                        
                    </table>

            </div>

            <div class="location">
                    <h3>Disponibilidad y ubicación</h3>
                    <tr>
                        <td className="title">Ubicación: </td>
                    </tr>

                    <tr>
                        <td className="title">Estante </td>
                        <td className="data">{estante}</td>
                        
                    </tr>

                    <tr>
                        <td className="title">Nivel </td>
                        <td className="data">{nivel}</td>
                    </tr>
                    <tr>
                        <td className="title">Stock: </td>
                        <td className="data">{stock}</td>
                    </tr>
            </div>
            
        </>
    )
}

export default BookInfoDetails

