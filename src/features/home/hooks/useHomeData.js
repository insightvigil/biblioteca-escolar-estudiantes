import { useState, useEffect } from "react";
import { getLatestBooks, getCategoriesWithBooks } from "../services/home.api";

export function useHomeData() {
  const [latestBooks, setLatestBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      getLatestBooks(),
      getCategoriesWithBooks()
    ])
    .then(([latest, cats]) => {
      setLatestBooks(latest);
      setCategories(cats);
    });
  }, []);

  return { latestBooks, categories };
}
