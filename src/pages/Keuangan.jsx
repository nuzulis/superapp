import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  BanknotesIcon,
  TrophyIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export default function SDM() {
  const menus = [
    {
      name: "Rekap Absensi",
      path: "https://epresensi.karantinaindonesia.go.id",
      icon: UserGroupIcon,
    },
    {
      name: "Perhitungan Tukin, UM, Lembur",
      path: "/sdm/presensi",
      icon: CalendarDaysIcon,
    },
    {
      name: "Realisasi Keuangan",
      path: "/sdm/diklat",
      icon: BanknotesIcon,
    },
    {
      name: "Peng-SPJ-an",
      path: "https://lemon-water-0499f3e00.2.azurestaticapps.net/",
      icon: TrophyIcon,
    },
    {
      name: "Realisasi PNBP",
      path: "/sdm/pnbp",
      icon: CurrencyDollarIcon,
    },
    {
      name: "POK",
      path: "/sdm/pok",
      icon: DocumentTextIcon,
    },
  ];
  return (
    <div className="px-8 pt-2 pb-8 min-h-screen bg-gradient-to-tr from-cyan-600 via-sky-700 to-indigo-800">
      <Header />
      <div className="pt-20">
        <h2 className="text-4xl font-bold mb-6 text-white">KEUANGAN</h2>
        <p className="mb-8 text-white/80">Pilih menu keuangan:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {menus.map((menu, idx) => {
            const MenuIcon = menu.icon;
            const isExternal = menu.path.startsWith("http");

            return (
              <div
                key={idx}
                onClick={() => {
                  if (isExternal) window.open(menu.path, "_blank");
                }}
                className="flex flex-col items-center justify-center p-6 rounded-xl 
                 bg-white/95 shadow-md hover:bg-yellow-50 hover:scale-105 
                 transition duration-200 cursor-pointer"
              >
                <MenuIcon className="w-12 h-12 text-blue-600 mb-3" />
                <span className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                  {menu.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
