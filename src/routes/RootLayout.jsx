// src/routes/RootLayout.jsx
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footeer.component";
import ScrollToTop from "../components/ScrollTop/ScrollToTop";
import './RootLayout.scss'
export default function RootLayout() {
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
