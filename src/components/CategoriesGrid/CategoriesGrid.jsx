import './CategoriesGrid.styles.scss'
import { Link } from 'react-router';
import { useState } from 'react';
const CategoriesGrid = ({categories = []}) => {

  const [startIndex, setStartIndex] = useState(0);
  const step = 7; 

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - step));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      prev + step < categories.length ? prev + step : prev
    );
  };

  const visibleCategories = categories.slice(startIndex, startIndex + step);
    
    return(
        <>  
        <section className="categoriesexplorer-container">
            {/* Botón anterior */}
            <span className="nav-btn left" onClick={handlePrev} disabled={startIndex === 0}>
                &lt;
            </span>

            {/* Lista de categorías visibles */}
            <div className="categories-wrapper">
                {visibleCategories.map((category) => (
                <Link className="category-btn" key={category.id} to={`category/${category.id}`}>
                    <p>{category.name}</p>
                </Link>
                ))}
            </div>
            

             {/* Botón siguiente */}
            <span className="nav-btn right" onClick={handleNext} disabled={startIndex + step >= categories.length} >
                &gt;
            </span>

            </section>
        </>
    )
}

export default CategoriesGrid;