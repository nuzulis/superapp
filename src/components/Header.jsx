import React from "react";
import { Link } from "react-router-dom";
import superappIcon from "../assets/icons/superapp.svg";

export default function Header() {
  return (
    <header className="fixed top-4 left-4 z-20 flex items-center gap-2">
      <Link
        to="/"
        className="flex items-center gap-2 hover:scale-105 transition"
        tooltip="Home"
      >
        <div className="w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center">
          <img src={superappIcon} alt="Logo" className="w-6 h-6" />
        </div>
        <span className="text-white font-bold text-lg sm:text-xl">
          SuperApp
        </span>
      </Link>
    </header>
  );
}
