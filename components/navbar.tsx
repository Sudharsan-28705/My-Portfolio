"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(!(current > lastScrollY && current > 80));
      setLastScrollY(current);
      setOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[70%] transition-all duration-500 ${
          visible ? "opacity-100" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#hero" className="text-white font-semibold">
              Portfolio
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white text-xl"
            >
              ☰
            </button>

            <div className="hidden md:flex gap-8 text-sm text-gray-300">
              <Link href="#about">About</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed top-[96px] left-1/2 -translate-x-1/2 z-40 w-[70%]">
          <div className="backdrop-blur-2xl bg-white/5 border border-white/15 rounded-2xl px-8 py-10 flex flex-col gap-6 text-gray-300 text-lg shadow-[0_20px_60px_rgba(0,0,0,0.35)]">

            <Link href="#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
