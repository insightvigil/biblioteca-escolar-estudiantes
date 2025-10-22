import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "./RootLayout.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Home from "../pages/Home/Home.component.jsx";
import BookDetail from "../pages/BookDetail/BookDetail.component.jsx"
import Category from "../pages/Category/Categories.component.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,     // layout padre
    errorElement: <ErrorPage />,  // error por-ruta (404/500, etc.)

    
    children: [
      { index: true, element: <Home/>},
      { path: "books/:id", element: <BookDetail/>},
      {path:"category/:id", element: <Category/>},
      /*{ path: "libros", element: <BookGrid /> },
      { path: "libros/:id", element: <BookDetail />, loader: bookLoader },
      { path: "categorias/:catId/libros", element: <CategoryBooks />, loader: categoryLoader },
      { path: "*", element: <NotFound /> },*/
    ],
  },
]);
