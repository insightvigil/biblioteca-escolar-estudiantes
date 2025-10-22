import { Link } from "react-router";


import './BreadCrumbs.styles.scss'
const BreadCrumbs = ({book,id}) => {
    const {categoria,title} = book;
    
    return (
        <div className='breadcrumbs-container'>
            
            <Link className='linkatras' to='/'>  
            <span className="caracter">&lt;</span> 
            <span className='textosubrayado'>Atrás</span>
            </Link>

            <div className='breadcrumbs-links'>
                <Link className="detailname" to='/'>Inicio</Link>
                <span className="caracter">&gt;</span>
                <Link className="detailname" to='/'>Libros</Link>
                <span className="caracter">&gt;</span>
                <Link className="detailname" to={`category/${id}`}>{categoria}</Link>
                <span className="caracter">&gt;</span>
                <span className='detailname'>{title}</span>
                
            </div>
        </div>
    )
}

export default BreadCrumbs;