import React, { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <BsGithub />,
    href: "https://github.com/mdabuzarj",
  },
  {
    icon: <BsLinkedin />,
    href: "https://www.linkedin.com/in/md-abuzar-1892882a6/",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between rounded-2xl border border-zinc-800/70 bg-[#0B1120]/80 backdrop-blur-xl px-6 py-4 shadow-lg">

          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-bold tracking-wider text-white transition duration-300 hover:text-blue-500"
          >
            AJ.
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition duration-300 hover:text-blue-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social */}
          <div className="hidden md:flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-zinc-300 transition duration-300 hover:text-blue-500 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-3xl text-white"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-zinc-800 bg-[#0B1120]/95 backdrop-blur-xl p-6">

            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-zinc-300 transition duration-300 hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-5 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-zinc-300 transition duration-300 hover:text-blue-500"
                >
                  {link.icon}
                </a>
              ))}
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;