"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const rightCol = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftCol.current;
    const right = rightCol.current;

    if (!section || !left || !right) return;

    const paragraphs = section.querySelectorAll(".reveal");

    // Initial state
    gsap.set(paragraphs, { opacity: 0, y: 60 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2500",
        scrub: true,
        pin: true,
      },
    });

    paragraphs.forEach((p) => {
      tl.to(p, { opacity: 1, y: 0, duration: 1 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 flex items-center justify-center px-6"
      id="about"
    >
      <div className="max-w-6xl w-full">

        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white pt-[5rem]">
            About Me
          </h2>
          <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div
            ref={leftCol}
            className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <p className="reveal">
              I’m a frontend developer driven by{" "}
              <span className="text-white font-medium">curiosity</span> and{" "}
              <span className="text-white font-medium">creativity</span>.
              My journey began after being inspired by beautifully animated websites.
            </p>

            <p className="reveal">
              I enjoy crafting{" "}
              <span className="text-white font-medium">
                interactive UI experiences
              </span>{" "}
              that make users pause and feel something.
            </p>

            <p className="reveal">
              While building real-world projects and deepening my expertise in{" "}
              <span className="text-white font-medium">React & TypeScript</span>,
              my foundation in HTML, CSS, and JavaScript remains strong.
            </p>
          </div>

          <div
            ref={rightCol}
            className="space-y-5 text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            <p className="reveal">
              My goal is to become a{" "}
              <span className="text-white font-medium">
                creative developer
              </span>{" "}
              who builds impactful digital experiences.
            </p>

            <p className="reveal">
              I aspire to work in{" "}
              <span className="text-white font-medium">Japan</span>, a culture I deeply admire.
            </p>

            <p className="reveal">
              I’m currently preparing for the{" "}
              <span className="text-white font-medium">JLPT N5</span>.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
