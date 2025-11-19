import { useEffect, useState } from "react";
import { getBookDetail } from "../services/bookDetail.api";

export function useBookDetail(id) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getBookDetail(id)
      .then(data => {
        setBook(data);
        setError(null);
      })
      .catch(() => setError("No se pudo cargar el libro"))
      .finally(() => setLoading(false));
  }, [id]);

  return { book, loading, error };
}
