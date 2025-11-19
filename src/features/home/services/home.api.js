const API = import.meta.env.VITE_API_URL;

export async function getLatestBooks() {
  const res = await fetch(`${API}/books/latest`);
  return res.json();
}

export async function getCategoriesWithBooks() {
  const res = await fetch(`${API}/books/categories/books-grid`);
  const data = await res.json();
  return data.categories;
}
