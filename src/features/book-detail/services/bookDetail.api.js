// play-ground/src/features/book-detail/services/bookDetail.service.js (ejemplo)
import { API } from "../../../config/api"; 

export async function getBookDetail(id) {
  const res = await fetch(`${API}/books/${id}`);
  if (!res.ok) throw new Error("Error al obtener el libro");
  return res.json();
}
