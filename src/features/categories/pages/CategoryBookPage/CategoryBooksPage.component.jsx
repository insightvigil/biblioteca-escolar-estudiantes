import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router';

import CategoryShelfHeader from '../../../../components/CategoryShelfHeader/CategoryShelfHeader.component';
import CategoryBookGrid from '../../../../components/CategoryBookGrid /CategoryBookGrid.component';
import BreadCrumbs from '../../../../components/navigation/BreadCrumbs/BreadCrumbs.component';
import './CategoryBooksPage.styles.scss';

import { useCategoryBooks } from "../../hooks/useCategoryBooks";

export default function CategoryBooksPage() {
  const { id } = useParams();

  const {
    name,
    description,
    visibleBooks,
    filters,
    handleFiltersChange
  } = useCategoryBooks(id);

  return (
    <>
      <BreadCrumbs book={{}} />

      <section className="categorysection-container">
        <CategoryShelfHeader
          category={name}
          description={description}
          filters={filters}
          onFiltersChange={handleFiltersChange}
        />

        <CategoryBookGrid books={visibleBooks} />
      </section>
    </>
  );
}
