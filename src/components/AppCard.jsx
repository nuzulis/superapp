// src/components/AppCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ title, to, tooltip, children }) {
  return (
    <Link
      to={to}
      title={tooltip}
      className="group flex flex-col items-center justify-center 
                 w-56 h-56 sm:w-64 sm:h-64   /* 🔥 card default lebih besar */
                 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl 
                 transition-transform duration-300
                 hover:scale-110 hover:bg-white/30"
    >
      <div className="flex items-center justify-center mb-5">
        {/* 🔥 ikon lebih besar */}
        <div
          className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center 
                        transform transition-transform duration-300 group-hover:scale-125"
        >
          {children}
        </div>
      </div>

      <span className="text-lg sm:text-xl font-semibold text-white text-center">
        {title}
      </span>
    </Link>
  );
}
