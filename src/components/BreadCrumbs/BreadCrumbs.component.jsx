import { Link } from "react-router";
import { useParams } from "react-router";


import './BreadCrumbs.styles.scss'
const BreadCrumbs = ({book}) => {
    const {category_id,categoria,title} = book;
    
    const {id} = useParams();
    const categoryIdToUse = category_id || id
    return (
        <div className='breadcrumbs-container'>
            
            <Link className='linkatras' to='/'>  
            <span className="caracter">&lt;</span> 
            <span className='textosubrayado'>Atrás</span>
            </Link>

            <div className='breadcrumbs-links'>
                <Link className="detailname" to='/'>Inicio</Link>
                <span className="caracter">&gt;</span>
                
                {book?.title ? (
                <Link className="detailname" to="/">Libros</Link>) : 
                (categoryIdToUse && (<Link className="detailname" >{categoria || "Categoría"}</Link>))}
                
                {title&&<span className="caracter">&gt;</span>}
                <Link className="detailname" to={`category/${category_id}`}>{categoria}</Link>
                {title && <span className="caracter">&gt;</span>}
                {title && <span className='detailname'>{title}</span>}
                
            </div>
        </div>
    )
}

export default BreadCrumbs;