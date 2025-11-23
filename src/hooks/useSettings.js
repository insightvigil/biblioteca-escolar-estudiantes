import { useEffect, useState } from "react";

export function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch("/settings.json")   // ← camino correcto en Vite
      .then(res => res.json())
      .then(setSettings)
      .catch(() => setSettings(null));
  }, []);

  return settings;
}
