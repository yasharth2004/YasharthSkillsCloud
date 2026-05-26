"use client";

import { useState } from "react";
import DynamicIconCloud from '@/components/DynamicIconCloud';

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <main className={`${isLightMode ? "bg-white" : "bg-black"} min-h-screen w-full flex flex-col items-center justify-center gap-12 p-4 transition-colors duration-300`}>
      <button
        type="button"
        aria-pressed={isLightMode}
        onClick={() => setIsLightMode((value) => !value)}
        className={`${isLightMode ? "border-slate-300 bg-black text-white" : "border-white/20 bg-white text-black"} fixed right-4 top-4 rounded-full border px-4 py-2 text-sm font-medium shadow-lg transition-colors duration-300`}
      >
        {isLightMode ? "Dark" : "Light"}
      </button>
      <div className="text-center">
        <h1 className={`${isLightMode ? "text-black" : "text-white"} text-4xl font-bold mb-4`}>Skills & Technologies</h1>
        <p className={`${isLightMode ? "text-gray-700" : "text-gray-300"} text-lg`}>Interactive 3D cloud of my technical skills</p>
      </div>
      <DynamicIconCloud />
    </main>
  );
}
