// play-ground/src/features/categories/services/categoriesBooks.service.js (ejemplo)
import { API } from "../../../config/api"; // ajusta ruta

export async function getBooksByCategory(id) {
  const res = await fetch(`${API}/books/category/${id}`);
  if (!res.ok) throw new Error("Error cargando categoría");
  return res.json();
}
