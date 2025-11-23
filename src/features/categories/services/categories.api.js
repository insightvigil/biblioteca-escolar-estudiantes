const API = import.meta.env.VITE_API_URL;

export async function getBooksByCategory(id) {
  const res = await fetch(`${API}/books/category/${id}`);
  if (!res.ok) throw new Error("Error cargando categoría");
  return res.json();
}
