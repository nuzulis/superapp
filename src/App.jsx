import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kepegawaian from "./pages/Kepegawaian";
import Keuangan from "./pages/Keuangan";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kepegawaian" element={<Kepegawaian />} />
        <Route path="/keuangan" element={<Keuangan />} />
      </Routes>
    </Layout>
  );
}

export default App;
