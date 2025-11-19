import { useParams } from "react-router";
import { useBookDetail } from "./hooks/useBookDetail";
import BookDetailView from "./BookDetailView";

export default function BookDetailPage() {
  const { id } = useParams();
  const { book, loading, error } = useBookDetail(id);

  if (loading) return <p>Cargando libro...</p>;
  if (error) return <p>{error}</p>;

  return <BookDetailView book={book} />;
}
