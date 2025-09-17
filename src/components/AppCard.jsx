import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ title, to, tooltip, children, onClick }) {
  const isExternal =
    to && (to.startsWith("http://") || to.startsWith("https://"));

  const cardContent = (
    <div className="group flex flex-col items-center justify-center w-56 h-56 sm:w-64 sm:h-64 bg-white/20 backdrop-blur-md rounded-3xl shadow-xl transition-transform duration-300 hover:scale-110 hover:bg-white/30">
      <div className="flex items-center justify-center mb-5">
        <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-125">
          {children}
        </div>
      </div>
      <span className="text-lg sm:text-xl font-semibold text-white text-center">
        {title}
      </span>
    </div>
  );

  if (isExternal) {
    // jika eksternal, pakai <a> dengan onClick atau href
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        title={tooltip}
        onClick={onClick}
      >
        {cardContent}
      </a>
    );
  }

  if (to) {
    // internal route
    return (
      <Link to={to} title={tooltip}>
        {cardContent}
      </Link>
    );
  }

  // jika tidak ada to, gunakan div biasa (misal untuk tombol modal)
  return (
    <div onClick={onClick} title={tooltip}>
      {cardContent}
    </div>
  );
}
