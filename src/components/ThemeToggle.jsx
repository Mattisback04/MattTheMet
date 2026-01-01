import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={[
        "inline-flex items-center justify-center rounded-md p-2",
        "ring-1 ring-black/10 bg-white/70 hover:bg-white transition",
        "dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:ring-white/10",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
      ].join(" ")}
    >
      {isDark ? (
        <SunIcon className="h-5 w-5 text-slate-800 dark:text-slate-100" />
      ) : (
        <MoonIcon className="h-5 w-5 text-slate-800 dark:text-slate-100" />
      )}
    </button>
  );
}
