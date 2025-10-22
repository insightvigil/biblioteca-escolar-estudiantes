import './CategoryShelfHeader.styles.scss'

const CategoryShelfHeader = ({id,category,description, ...restProops}) => {
    
    return (
        <>
        <section className="categoryshelfheader-container">
            <div className="shelfheader-description">
                <h2>{category}</h2>
                <p>{description}</p>
            </div>
            
            
        </section>
            
        </>
    )
}

export default CategoryShelfHeader;