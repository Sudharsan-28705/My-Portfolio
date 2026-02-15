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
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[70%] transition-all duration-500 ${visible ? "opacity-100" : "opacity-0 -translate-y-4"}`}>
      <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="#hero" className="text-white font-semibold">Portfolio</Link>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white">
            ☰
          </button>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>

        {open && (
          <div className="mt-6 flex flex-col items-center gap-6 text-gray-300 md:hidden">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#contact">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
