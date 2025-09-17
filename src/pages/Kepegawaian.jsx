import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import {
  UsersIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ArrowsRightLeftIcon,
  AcademicCapIcon,
  ArrowPathIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";

export default function SDM() {
  const menus = [
    { name: "Database Pegawai", path: "/sdm/pegawai", icon: UsersIcon },
    {
      name: "Kenaikan Pangkat",
      path: "/sdm/pangkat",
      icon: ArrowTrendingUpIcon,
    },
    { name: "Kenaikan Gaji Berkala", path: "/sdm/gaji", icon: BanknotesIcon },
    {
      name: "Mutasi & Pensiun",
      path: "/sdm/mutasi",
      icon: ArrowsRightLeftIcon,
    },
    { name: "Diklat & Pelatihan", path: "/sdm/diklat", icon: AcademicCapIcon },
    {
      name: "Alih Jenjang / Perpindahan",
      path: "/sdm/alihjenjang",
      icon: ArrowPathIcon,
    },
    {
      name: "Jabatan Fungsional",
      path: "/sdm/fungsional",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <div className="px-8 pt-2 pb-8">
      <Header />
      <div className="pt-20">
        <h2 className="text-4xl font-bold mb-6 text-white">KEPEGAWAIAN</h2>
        <p className="mb-8 text-white/80">
          Kelola data pegawai dan informasi SDM:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {menus.map((menu, idx) => (
            <Link
              key={idx}
              to={menu.path}
              className="flex flex-col items-center justify-center p-6 rounded-xl 
                         bg-white/95 shadow-md hover:bg-yellow-50 hover:scale-105 
                         transition duration-200"
            >
              <menu.icon className="w-12 h-12 text-blue-600 mb-3" />
              <span className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
                {menu.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
