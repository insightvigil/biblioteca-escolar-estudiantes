import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorPage() {
  const err = useRouteError();

  if (isRouteErrorResponse(err)) {
    return (
      <main style={{ padding: 24 }}>
        <h1>{err.status} — {err.statusText || "Error"}</h1>
        {typeof err.data === "string" && <pre>{err.data}</pre>}
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Ocurrió un problema</h1>
      <pre>{err?.message || String(err)}</pre>
    </main>
  );
}
