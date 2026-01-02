import React, { useMemo, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

function cx(...c) {
  return c.filter(Boolean).join(" ");
}

export default function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const profile = useMemo(
    () => ({
      name: "Matthew Lentz",
      initials: "ML",
      title: "Undergraduate Meteorology Student",
    }),
    []
  );

  const nav = useMemo(
    () => [
      { to: "/", label: "Home", icon: AcademicCapIcon, end: true },
      { to: "/research", label: "Research", icon: DocumentTextIcon },
      { to: "/experience", label: "Experience", icon: SparklesIcon },
      { to: "/survey", label: "Survey", icon: DocumentTextIcon },
      { to: "/contact", label: "Contact", icon: EnvelopeIcon },
    ],
    []
  );

  const linkClass = ({ isActive }) =>
    cx(
      "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition",
      "text-slate-700 hover:text-slate-900 hover:bg-slate-50",
      "dark:text-slate-200 dark:hover:text-slate-50 dark:hover:bg-slate-900/60",
      isActive &&
        "bg-sky-50 text-sky-800 ring-1 ring-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:ring-sky-900/60"
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950">
      {/* Topbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 ring-1 ring-black/5 dark:bg-slate-950/60 dark:ring-white/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Brand */}
            <NavLink to="/" className="flex items-center gap-4 group">
              <div
                className={cx(
                  "w-12 h-12 rounded-full",
                  "bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500",
                  "flex items-center justify-center text-white font-extrabold",
                  "shadow-sm ring-1 ring-black/10",
                  "group-hover:scale-105 transition"
                )}
              >
                {profile.initials}
              </div>
              <div className="leading-tight">
                <p className="text-base font-bold text-slate-900 dark:text-slate-50">
                  {profile.name}
                </p>
                <p className="text-xs text-slate-600 italic dark:text-slate-300">
                  {profile.title}
                </p>
              </div>
            </NavLink>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {nav.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.end} className={linkClass}>
                  <n.icon className="h-4 w-4" />
                  {n.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-black/10 bg-white/70 hover:bg-white transition dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:ring-white/10"
                aria-label="Open menu"
              >
                <Bars3Icon className="h-6 w-6 text-slate-800 dark:text-slate-100" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white dark:bg-slate-950 shadow-2xl ring-1 ring-black/10 dark:ring-white/10 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Menu
              </p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-md p-2 ring-1 ring-black/10 bg-white/70 hover:bg-white transition dark:bg-slate-900/60 dark:hover:bg-slate-900 dark:ring-white/10"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6 text-slate-800 dark:text-slate-100" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-2">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={linkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  <n.icon className="h-5 w-5" />
                  {n.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Page content */}
      <main className="mx-auto max-w-6xl px-6 lg:px-12 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-10">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
