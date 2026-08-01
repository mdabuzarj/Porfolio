import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;