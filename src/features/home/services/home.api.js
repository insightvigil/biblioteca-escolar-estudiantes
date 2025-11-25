// play-ground/src/features/home/services/home.service.js (ejemplo)
import { API } from "../../../config/api"; // ajusta ruta

export async function getLatestBooks() {
  const res = await fetch(`${API}/books/latest`);
  if (!res.ok) throw new Error("Error al cargar libros recientes");
  return res.json();
}

export async function getCategoriesWithBooks() {
  const res = await fetch(`${API}/books/categories/books-grid`);
  if (!res.ok) throw new Error("Error al cargar categorías");
  const data = await res.json();
  return data.categories;
}
