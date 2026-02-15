"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hanaso!",
    description: "Anonymous chat app built with HTML, CSS, JS & Socket.io.",
    role: "Solo Developer",
    github: "https://github.com/Sudharsan-28705/chat-room",
  },
  {
    title: "Fraemi Vision",
    description: "Premium landing page for a multimedia company.",
    role: "Design & Frontend",
    github: "https://github.com/Sudharsan-28705/Fraemi-Vision/tree/testing",
  },
  {
    title: "EV Recharge Bunk",
    description: "EV charging locator platform (WIP).",
    role: "Team Lead",
    github: "https://github.com/Sudharsan-28705/EV-Recharge-Bunk",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // ⛔ disable GSAP on mobile

    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const totalWidth = container.scrollWidth;

    gsap.to(container, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative z-10 min-h-screen">

      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          My Projects
        </h2>
        <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
      </div>

      {/* Horizontal Scroll */}
      <div className="h-screen flex items-start">

        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-10 md:gap-16 px-6 md:px-20 pt-16 md:pt-24"

        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-[600px] h-[350px] backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between hover:-translate-y-4 transition"
            >
              <div>
                <h3 className="text-3xl font-semibold text-white mb-6">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-6">{p.description}</p>
                <p className="text-sm text-gray-400">{p.role}</p>
              </div>
              <a
                href={p.github}
                target="_blank"
                className="text-white underline opacity-70 hover:opacity-100"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;