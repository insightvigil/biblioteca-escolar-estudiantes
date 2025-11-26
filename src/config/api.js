// play-ground/src/config/api.js


const ORIGIN =
  typeof window !== "undefined"
    ? window.location.origin.replace(/\/$/, "")
    : "";


export const API = (
  import.meta.env.VITE_API_URL ||
  (ORIGIN ? `${ORIGIN}/api/v1` : "/api/v1")
).replace(/\/$/, "");
