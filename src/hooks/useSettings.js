// src/admin/hooks/useSettings.js
import { useEffect, useState } from "react";

export function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch("settings.json") // se resuelve a /admin/settings.json en producción
      .then(res => res.json())
      .then(setSettings)
      .catch(() => setSettings(null));
  }, []);

  return settings;
}
