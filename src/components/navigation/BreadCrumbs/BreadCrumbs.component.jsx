import { Link, useParams, useNavigate } from "react-router";
import "./BreadCrumbs.styles.scss";

export default function BreadCrumbs({ book = {} }) {
  const navigate = useNavigate();
  const { id: routeCatId } = useParams(); 

  const {
    category_id: bookCatId,
    categoria: bookCategoryName,
    title,
  } = book || {};

  const isBookDetail = Boolean(title);

  const allowCategoryClick = !isBookDetail || Boolean(routeCatId);

  const categoryId = bookCatId ?? routeCatId ?? null;
  const categoryName = bookCategoryName || "Categoría";

  const steps = [
    { label: "Inicio", to: "/" },

    ...(isBookDetail ? [{ label: "Libros", to: "/" }] : []),

    ...(categoryId
      ? [
          {
            label: categoryName,
            to: allowCategoryClick ? `/category/${categoryId}` : null,
          },
        ]
      : []),

    ...(isBookDetail ? [{ label: title, to: null }] : []),
  ];

  const current = steps.length - 1;

  return (
    <div className="breadcrumbs-container">
      <nav className="breadcrumb" aria-label="breadcrumb">
        {steps.map((s, i) =>
          s.to ? (
            <Link
              key={`${s.label}-${i}`}
              to={s.to}
              className={
                "breadcrumb__step" +
                (i <= current ? " breadcrumb__step--active" : "")
              }
            >
              {s.label}
            </Link>
          ) : (
            <span
              key={`${s.label}-${i}`}
              className={
                "breadcrumb__step" +
                (i <= current ? " breadcrumb__step--active" : "")
              }
              aria-current={i === current ? "page" : undefined}
            >
              {s.label}
            </span>
          )
        )}
      </nav>
    </div>
  );
}
