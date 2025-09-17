import React, { useState } from "react";
import AppCard from "../components/AppCard";
import Modal from "../components/Modal";

import epresensiIcon from "../assets/icons/epresensi.svg";
import kepegawaianIcon from "../assets/icons/kepegawaian1.svg";
import keuanganIcon from "../assets/icons/keuangan.svg";
import perencanaanIcon from "../assets/icons/perencanaan.svg";
import Header from "../components/Header";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-indigo-900 to-blue-600 overflow-hidden font-sans flex flex-col items-center justify-start pt-20">
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

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 w-full mt-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 text-white drop-shadow-lg">
            Super Application
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide text-white/90 drop-shadow-md mb-22">
            Badan Karantina Indonesia
          </p>

          {/* App Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-10 mt-16 justify-items-center w-full">
            <AppCard
              title="e-Presensi"
              tooltip="Absensi online pegawai"
              onClick={() =>
                window.open(
                  "https://presensi.karantinaindonesia.go.id",
                  "_blank"
                )
              }
            >
              <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-5 rounded-2xl bg-gradient-to-tr from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <img
                  src={epresensiIcon}
                  alt="e-Presensi"
                  className="w-3/4 h-3/4 sm:w-full sm:h-full object-contain"
                />
              </div>
            </AppCard>

            <AppCard
              title="Kepegawaian"
              to="/kepegawaian"
              tooltip="Data & layanan kepegawaian"
            >
              <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-5 rounded-2xl bg-gradient-to-tr from-purple-400 to-cyan-400 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <img
                  src={kepegawaianIcon}
                  alt="Kepegawaian"
                  className="w-3/4 h-3/4 sm:w-full sm:h-full object-contain"
                />
              </div>
            </AppCard>

            <AppCard
              title="Keuangan"
              to="/keuangan"
              tooltip="Pengelolaan keuangan & anggaran"
            >
              <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-5 rounded-2xl bg-gradient-to-tr from-yellow-400 to-orange-400 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <img
                  src={keuanganIcon}
                  alt="Keuangan"
                  className="w-3/4 h-3/4 sm:w-full sm:h-full object-contain"
                />
              </div>
            </AppCard>

            <AppCard
              title="Perencanaan"
              tooltip="Perencanaan"
              onClick={() =>
                window.open(
                  "https://ekinerja.karantinaindonesia.go.id",
                  "_blank"
                )
              }
            >
              <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-5 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110">
                <img
                  src={perencanaanIcon}
                  alt="Perencanaan"
                  className="w-3/4 h-3/4 sm:w-full sm:h-full object-contain"
                />
              </div>
            </AppCard>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Preview Perencanaan"
      >
        <p>Fitur perencanaan masih dalam pengembangan 🚧</p>
      </Modal>
    </main>
  );
}
