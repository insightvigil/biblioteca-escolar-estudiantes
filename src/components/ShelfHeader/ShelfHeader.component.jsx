import CategoriesExplorer from '../CategoriesExplorerShelf/CategoriesExplorer.component';
import './ShelfHeader.styles.scss'
import { Link } from 'react-router';

const ShelfHeader = ({category,description}) => {
    
    return (
        <>
        <section className="shelfheader-container">
            <div className="shelfheader-description">
                <h2>{category}</h2>
                <p>{description}</p>
            </div>
            <div className='shelfheader-link'>
                <Link>Ver todo </Link>
            </div>
            
        </section>
            
        </>
    )
}

export default ShelfHeader;