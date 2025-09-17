import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ title, to, tooltip, children, onClick }) {
  const isExternal =
    to && (to.startsWith("http://") || to.startsWith("https://"));

  const cardContent = (
    <div
      className="group flex flex-col items-center justify-center 
                w-36 h-36 sm:w-64 sm:h-64 
                bg-white/20 backdrop-blur-md rounded-3xl 
                shadow-xl transition-transform duration-300 
                hover:scale-110 hover:bg-white/30 gap-2 sm:gap-3"
    >
      <div className="flex items-center justify-center w-full">
        <div className="w-3/4 h-3/4 sm:w-36 sm:h-36 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-125">
          {children}
        </div>
      </div>
      <span className="text-sm sm:text-xl sm:font-semibold text-white text-center">
        {title}
      </span>
    </div>
  );

  if (isExternal) {
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
    return (
      <Link to={to} title={tooltip}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div onClick={onClick} title={tooltip}>
      {cardContent}
    </div>
  );
}
