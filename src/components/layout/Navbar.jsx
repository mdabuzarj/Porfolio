import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
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
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">

        {/* Logo */}
        <a href="#hero">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-2xl font-bold tracking-wider text-transparent">
            AJ
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-300 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-xl text-zinc-300 transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 hover:text-blue-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          className="text-3xl text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-[#0B1120]/95 p-6 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">

          <ul className="flex flex-col gap-4">

            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-zinc-300 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

          </ul>

          <div className="mt-6 flex gap-4">

            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 text-2xl text-zinc-300 transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400"
              >
                {link.icon}
              </a>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;