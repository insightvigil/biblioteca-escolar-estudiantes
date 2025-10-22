import ShelfHeader from "../ShelfHeader/ShelfHeader.component"
import CategoriesGrid from "../CategoriesGrid/CategoriesGrid";
import './CategoriesExplorer.styles.scss'

const CategoriesExplorer = ({categories}) => {
    return(
        <>  
            <section className="categories-explorer-container">
                <ShelfHeader category="Explorar por categoría" description={null} ></ShelfHeader>
                <CategoriesGrid categories={categories}></CategoriesGrid>
                
            </section>
        </>
    )
}

export default CategoriesExplorer;