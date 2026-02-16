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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          end: "top 30%",
          scrub: 0.7,
          pin: true
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 md:px-20 "
    >
      <div ref={contentRef} className="w-full">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white pt-[3rem]">
            My Projects
          </h2>
          <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center">
          {projects.map((p, i) => (
            <div
              key={i}
              className="w-full max-w-[420px] md:w-[420px] h-[350px] backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:-translate-y-3 transition"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-gray-300 mb-4">{p.description}</p>
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

