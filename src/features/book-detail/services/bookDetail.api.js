const API = import.meta.env.VITE_API_URL;

export async function getBookDetail(id) {
  const res = await fetch(`${API}/books/${id}`);
  if (!res.ok) throw new Error("Error al obtener el libro");
  return res.json();
}
