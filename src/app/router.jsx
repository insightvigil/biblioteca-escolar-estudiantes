import { createBrowserRouter } from "react-router";
import StudentsLayout from "./layout/StudentsLayout.jsx";
import ErrorPage from "../components/navigation/ErrorPage/ErrorPage.jsx";
import Home from "../features/home/index.jsx";
import BookDetailPage from "../features/book-detail/index.jsx";
import CategoryBooksPage from "../features/categories/pages/CategoryBookPage/CategoryBooksPage.component.jsx";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <StudentsLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <Home /> },

        // Libros
        { path: "books/:id", element: <BookDetailPage /> },

        // Categorías
        { path: "category/:id", element: <CategoryBooksPage /> },

        // (Probablemente esta ruta estaba mal formada, la dejo igual si tú lo deseas)
        { path: "books/:bookId/category/:id", element: <CategoryBooksPage /> }
      ],
    },
  ],
  {
    // Basename raíz, funciona en '/'
    basename: "/"
  }
);
