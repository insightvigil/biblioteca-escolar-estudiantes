// play-ground/src/config/api.js

// Origin actual del navegador (http://IP:PUERTO)
const ORIGIN =
  typeof window !== "undefined"
    ? window.location.origin.replace(/\/$/, "")
    : "";

// En dev: usa VITE_API_URL si existe
// En deploy: usa origin + /api/v1
export const API = (
  import.meta.env.VITE_API_URL ||
  (ORIGIN ? `${ORIGIN}/api/v1` : "/api/v1")
).replace(/\/$/, "");
