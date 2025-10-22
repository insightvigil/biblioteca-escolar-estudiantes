import './CategoriesGrid.styles.scss'
import { Link } from 'react-router';
const CategoriesGrid = ({categories}) => {

    
    return(
        <>  
            <section className="categoriesexplorer-container">
                {categories.slice(0,7).map((category) => (
                    <Link className='category-btn' key = {category.id} to={`category/${category.id}`} > <p>{category.name}</p></Link>
                ))}
            </section>
        </>
    )
}

export default CategoriesGrid;