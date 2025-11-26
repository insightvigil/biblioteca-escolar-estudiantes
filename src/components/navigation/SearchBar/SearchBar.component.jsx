import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import lupaIcon from "../../../assets/lupa-white.png";

import "./SearchBar.styles.scss";
import { API } from "../../../config/api";

export default function SearchBar({
  placeholder = "Buscar…",
  minChars = 2,
  limit = 8
}) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => {
      const q = term.trim();
      if (q.length >= minChars) {
        fetch(
          `${API}/books/search?q=${encodeURIComponent(q)}&limit=${limit}`
        )
          .then((r) => r.json())
          .then((data) => {
            setResults(data || []);
            setOpen(true);
          })
          .catch(() => {
            setResults([]);
            setOpen(false);
          });
      } else {
        setResults([]);
        setOpen(false);
      }
    }, 300); 

    return () => clearTimeout(t);
  }, [term, minChars, limit]);

  const goToBook = (id) => {
    setOpen(false);
    setTerm("");
    setResults([]);
    navigate(`/books/${id}`);
  };

  return (
    <div
      className="searchbarcontainer"
      onBlur={() => setTimeout(() => setOpen(false), 150)}
    >
      <img className="lupa" src={lupaIcon} alt="" />
      <input
        className={`search ${open ? "open" : ""}`}
        type="search"
        name="search"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        autoComplete="off"
      />

      {open && results.length > 0 && (
        <div className="search-results">
          {results.map((b) => (
            <div
              key={b.id}
              className="search-item"
              onMouseDown={() => goToBook(b.id)}
            >
              <img src={b.cover_url} alt={b.title} className="thumb" />
              <div className="meta">
                <p className="title">{b.title}</p>
                <p className="author">{b.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {open &&
        results.length === 0 &&
        term.trim().length >= minChars && (
          <div className="search-results">
            <div className="search-empty">Sin coincidencias</div>
          </div>
        )}
    </div>
  );
}
