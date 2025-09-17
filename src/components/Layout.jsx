import React from "react";

export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-indigo-900 to-blue-600 overflow-hidden font-sans flex flex-col justify-start">
      {/* Wave Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute top-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.06)"
            d="M0,160 C360,320 1080,0 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            d="M0,160 C360,0 1080,320 1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Konten */}
      <div className="relative z-10 w-full">{children}</div>
    </main>
  );
}
