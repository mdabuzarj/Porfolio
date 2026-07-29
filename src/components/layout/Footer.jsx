import React from "react";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-[#020617] py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-zinc-400 text-center">
          © {new Date().getFullYear()} Mohammed Abuzar J.
          All rights reserved.
        </p>

        <a
          href="#home"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Back to Top
          <BsArrowUp />
        </a>

      </div>

    </footer>
  );
};

export default Footer;