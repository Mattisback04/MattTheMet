import React, { useMemo } from "react";
import { ArrowDownTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Home() {
  const BASE = import.meta.env.BASE_URL;

  const profile = useMemo(
    () => ({
      name: "Matthew Lentz",
      resume: `${BASE}Lentz_Matthew_Resume_2025.pdf`,
      portrait: `${BASE}matthew.jpg`,
    }),
    [BASE]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
      <div className="md:col-span-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
            Hello, I’m {profile.name}.
          </span>
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
          Senior meteorology student at Mississippi State University focusing on wildfire climatology,
          climate modeling, synoptic meteorology and weather communication.
        </p>

        <div className="mt-7 flex flex-wrap gap-4">
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold text-white shadow-lg bg-gradient-to-r from-sky-600 to-emerald-500 hover:brightness-110 transition"
          >
            <ArrowDownTrayIcon className="h-5 w-5" />
            Download Résumé
          </a>

          <Link
            to="/research"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-semibold border-2 border-sky-600 text-sky-700 hover:bg-sky-600 hover:text-white transition"
          >
            <DocumentTextIcon className="h-5 w-5" />
            View Research
          </Link>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-transparent bg-gradient-to-tr from-sky-500 to-emerald-500 p-[2px]">
          <img
            alt={`Portrait of ${profile.name}`}
            src={profile.portrait}
            className="w-full h-full object-cover rounded-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
