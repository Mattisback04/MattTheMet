import React from "react";

export default function Survey() {
  return (
    <div className="rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/25 backdrop-blur p-8 ring-1 ring-black/5 dark:ring-emerald-900/50">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Survey</h2>

      <p className="mt-4 text-slate-700 dark:text-slate-200 leading-relaxed">
        Anonymous survey for international students on severe weather perception (5–7 minutes).
      </p>

      <a
        href="https://survey.survicate.com/a3a2ec75e7662dee/?p=intercom&first_name={{first_name}}&last_name={{last_name}}&email={{email}}&uid={{user_id}}"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md shadow hover:brightness-110 transition"
      >
        Take the Survey
      </a>
    </div>
  );
}
