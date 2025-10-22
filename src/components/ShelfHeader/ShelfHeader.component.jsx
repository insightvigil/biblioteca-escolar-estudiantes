import CategoriesExplorer from '../CategoriesExplorerShelf/CategoriesExplorer.component';
import './ShelfHeader.styles.scss'
import { Link } from 'react-router';

const ShelfHeader = ({id,category,description, ...restProops}) => {
    
    return (
        <>
        <section className="shelfheader-container">
            <div className="shelfheader-description">
                <h2>{category}</h2>
                <p>{description}</p>
            </div>
            {id && (
                <div className='shelfheader-link'>
                    <Link to={`/category/${id}`}>Ver todo</Link>
                </div>
            )}
            
        </section>
            
        </>
    )
}

export default ShelfHeader;