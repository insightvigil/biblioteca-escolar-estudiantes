import BooksFilter from '../BooksFilter/BooksFilter.component';
import './CategoryShelfHeader.styles.scss';

const CategoryShelfHeader = ({ category, description, filters, onFiltersChange, ...restProps }) => {
  return (
    <section className="categoryshelfheader-container" {...restProps}>
      <div className="shelfheader-description">
        <h2>{category}</h2>
        <p>{description}</p>

        <BooksFilter
          sort={filters.sort}
          order={filters.order}
          available={filters.available}
          onChange={onFiltersChange}
        />
      </div>
    </section>
  );
};

export default CategoryShelfHeader;
