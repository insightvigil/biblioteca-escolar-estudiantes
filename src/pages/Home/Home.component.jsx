import { useState, useEffect} from 'react'


import CategoryShelf from '../../components/CategoryShelf/CategoryShelf.component'
import CategoriesExplorer from '../../components/CategoriesExplorerShelf/CategoriesExplorer.component'

import api from '../../services/api';


export default function Home() {

  const [latestBooks, setLatestBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/api/v1/books/latest"),
      fetch("http://localhost:4000/api/v1/books/categories/books-grid")
    ])
      .then(async ([res1, res2]) => {
        const data1 = await res1.json();
        const data2 = await res2.json();
        setLatestBooks(data1);
        setCategories(data2.categories);
        
      });
  }, []);

  return(
    <>
      <CategoriesExplorer  categories={categories}></CategoriesExplorer>
      <CategoryShelf id={null} category="Recién agregados" description = "Explora esta sección para descubrir las últimas adiciones a nuestro catálogo" books={latestBooks}></CategoryShelf>
      {
        categories.map((category) => ( <CategoryShelf key={category.id}  category={category.name} description={category.description} id={category.id} books={category.books}/>) )
      }
    </>
  )

}
