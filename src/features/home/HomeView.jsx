import CategoryShelf from "../../components/CategoryShelf/CategoryShelf.component";
import CategoriesExplorer from "../../components/CategoriesExplorerShelf/CategoriesExplorer.component";

import { useHomeData } from "./hooks/useHomeData";
import "./HomeView.styles.scss";

export default function HomeView() {
  const { latestBooks, categories } = useHomeData();

  return (
    <section className="home-container">
      
      <CategoriesExplorer categories={categories} />

      <CategoryShelf
        id={null}
        category="Recién agregados"
        description="Explora esta sección para descubrir las últimas adiciones a nuestro catálogo"
        books={latestBooks}
      />

      {categories.map(category => (
        <CategoryShelf
          key={category.id}
          id={category.id}
          category={category.name}
          description={category.description}
          books={category.books}
        />
      ))}
      
    </section>
  );
}
