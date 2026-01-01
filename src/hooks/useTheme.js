import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  // const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  // return prefersDark ? "dark" : "light";
  return "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme to <html class="dark">
  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }, [theme]);

  // Optional: if user has NOT explicitly chosen a theme, follow system changes.
  // useEffect(() => {
  //   const stored = window.localStorage.getItem(STORAGE_KEY);
  //   if (stored === "light" || stored === "dark") return;

  //   const mql = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handler = () => setTheme(mql.matches ? "dark" : "light");

  //   mql.addEventListener?.("change", handler);
  //   return () => mql.removeEventListener?.("change", handler);
  // }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  const setLight = useCallback(() => setTheme("light"), []);
  const setDark = useCallback(() => setTheme("dark"), []);

  return { theme, toggleTheme, setLight, setDark };
}
