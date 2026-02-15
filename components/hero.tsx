"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative z-10 flex items-center justify-center min-h-screen
             text-center px-6 gap-8 md:gap-12
             flex-col md:flex-row"
    >

      {/* Profile Image */}
      <div>
        <img
          src="/Profile.png"
          alt="Sudharsan"
          className="rounded-full w-32 h-32 md:w-56 md:h-56 object-cover shadow-2xl border-4 border-white/20"
        />

      </div>

      {/* Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white/50 via-gray-400 to-gray-500 bg-clip-text text-transparent">
          Hi, I'm Sudharsan
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          A Frontend Developer building modern, responsive and interactive web experiences.
        </p>

        <button className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:scale-105 hover:bg-gray-200 transition-all duration-300 shadow-lg">
          DOWNLOAD CV
        </button>
      </div>

    </section>
  );
};

export default HeroSection;