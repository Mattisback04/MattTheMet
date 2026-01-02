import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-slate-950/60 backdrop-blur p-8 ring-1 ring-black/5 dark:ring-white/10">
      <h2 className="text-3xl font-bold">Page not found</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-200">
        That route doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex px-5 py-3 rounded-md font-semibold border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white transition"
      >
        Go Home
      </Link>
    </div>
  );
}
