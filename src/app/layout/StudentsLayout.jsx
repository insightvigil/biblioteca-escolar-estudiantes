// src/routes/RootLayout.jsx
import { NavLink, Outlet } from "react-router";
import Navbar from "../../components/navigation/Navbar/Navbar";
import Footer from "../../components/navigation/Footer/Footeer.component";
import ScrollToTop from "../../components/navigation/ScrollTop/ScrollToTop";
import './StudentsLayout.scss'
export default function StudentsLayout() {
  return (
    <section className="app-shell">
      <Navbar/>
      <main className="app-main">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer></Footer>
    </section>
  );
}
