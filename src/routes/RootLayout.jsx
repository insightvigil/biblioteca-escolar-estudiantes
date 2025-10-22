// src/routes/RootLayout.jsx
import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout() {
  return (
    <section className="app-shell">
      <Navbar/>
      <main className="app-main">
        <Outlet />
      </main>
    </section>
  );
}
