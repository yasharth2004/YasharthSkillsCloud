"use client";

import { useState } from "react";
import DynamicIconCloud from '@/components/DynamicIconCloud';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <main className={`${isLightMode ? "bg-white" : "bg-black"} min-h-screen w-full flex flex-col items-center justify-center gap-12 p-4 transition-colors duration-300`}>
      <button
        type="button"
        aria-label={isLightMode ? "Switch to dark mode" : "Switch to light mode"}
        aria-pressed={isLightMode}
        onClick={() => setIsLightMode((value) => !value)}
        className={`${isLightMode ? "border-slate-200 bg-white text-black shadow-black/10" : "border-white/10 bg-zinc-900 text-white shadow-white/10"} fixed right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-colors duration-300`}
      >
        {isLightMode ? (
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M20.99 13.1A8 8 0 1 1 10.9 3.01a6.5 6.5 0 1 0 10.09 10.09Z" />
          </svg>
        )}
      </button>
      <div className="text-center">
        <h1 className={`${isLightMode ? "text-black" : "text-white"} text-4xl font-bold mb-4`}>Skills & Technologies</h1>
        <p className={`${isLightMode ? "text-gray-700" : "text-gray-300"} text-lg`}>Interactive 3D cloud of my technical skills</p>
      </div>
      <DynamicIconCloud />
    </main>
  );
}
