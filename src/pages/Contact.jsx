import React from "react";

export default function Contact() {
  return (
    <div className="rounded-2xl bg-white/70 dark:bg-slate-950/60 backdrop-blur p-8 ring-1 ring-black/5 dark:ring-white/10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Contact</h2>

      <p className="mt-4 text-slate-700 dark:text-slate-200">
        Email is best — also happy to connect on LinkedIn.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:mwl140@msstate.edu"
          className="px-6 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-md text-center hover:bg-sky-600 hover:text-white transition"
        >
          mwl140@msstate.edu
        </a>

        <a
          href="https://www.linkedin.com/in/matthew-lentz-30b2922b0"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-sky-600 text-sky-700 font-semibold rounded-md text-center hover:bg-sky-600 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
