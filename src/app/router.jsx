import {
  createBrowserRouter,
} from "react-router";
import StudentsLayout from "./layout/StudentsLayout.jsx";
import ErrorPage from "../components/navigation/ErrorPage/ErrorPage.jsx";
import Home from "../features/home/index.jsx";
import BookDetailPage from "../features/book-detail/index.jsx"
import Category from "../pages/Category/Categories.component.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <StudentsLayout />,     // layout padre
    errorElement: <ErrorPage />,  // error por-ruta (404/500, etc.)

    
    children: [
      { index: true, path:'/', element: <Home/>},
      { path: "books/:id", element: <BookDetailPage/>},
      {path:"category/:id", element: <Category/>},
      {path:"books/:id/category/:id", element: <Category/> }
      /*{ path: "libros", element: <BookGrid /> },
      { path: "libros/:id", element: <BookDetail />, loader: bookLoader },
      { path: "categorias/:catId/libros", element: <CategoryBooks />, loader: categoryLoader },
      { path: "*", element: <NotFound /> },*/
    ],
  },
]);

