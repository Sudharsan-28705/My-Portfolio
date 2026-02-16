// "use client";

// import React from "react";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="relative z-10 min-h-screen flex items-center px-6"
//     >
//       <div className="max-w-6xl mx-auto w-full">

//         {/* Header (Centered) */}
//         <div className="mb-16 text-center">
//           <h2 className="text-4xl md:text-6xl font-bold text-white">
//             Skills
//           </h2>
//           <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-y-14 gap-x-24">

//           {/* Frontend */}
//           <div className="flex items-center">
//             <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
//               <h3 className="text-xl font-medium text-white flex justify-center">Frontend</h3>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <div className="text-gray-300 text-lg leading-relaxed">
//               HTML, CSS, JavaScript, React (Basics), Tailwind CSS, TypeScript
//               <div className="mt-3 text-[15px] text-gray-200">
//                 Currently strengthening React, Tailwind & TypeScript
//               </div>
//             </div>
//           </div>

//           {/* Soft Skills */}
//           <div className="flex items-center">
//             <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
//               <h3 className="text-xl font-medium text-white flex justify-center">Soft Skills</h3>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <div className="text-gray-300 text-lg leading-relaxed">
//               Effective communication, Adaptability, Problem-solving,
//               Collaboration, Quick learner
//             </div>
//           </div>

//           {/* Languages */}
//           <div className="flex items-center">
//             <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
//               <h3 className="text-xl font-medium text-white flex justify-center">Languages</h3>
//             </div>
//           </div>

//           <div className="flex items-center">
//             <div className="text-gray-300 text-lg leading-relaxed">
//               Tamil, English, Japanese
//               <div className="mt-3 text-[15px] text-gray-200">
//                 Japanese — JLPT N5 level
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 40%",
          scrub: 1.2,
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
      id="skills"
      className="relative z-10 flex items-center px-6 pt-[6rem]"
    >
      <div className="max-w-6xl mx-auto w-full ">

        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Skills
          </h2>
          <div className="mt-4 mx-auto w-20 md:w-24 h-[2px] bg-white/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-y-10 gap-x-24">

          <div className="flex items-center">
            <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
              <h3 className="text-xl font-medium text-white flex justify-center">
                Frontend
              </h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-gray-300 text-lg leading-relaxed">
              HTML, CSS, JavaScript, React (Basics), Tailwind CSS, TypeScript
              <div className="mt-3 text-[15px] text-gray-200">
                Currently strengthening React, Tailwind & TypeScript
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
              <h3 className="text-xl font-medium text-white flex justify-center">
                Soft Skills
              </h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-gray-300 text-lg leading-relaxed">
              Effective communication, Adaptability, Problem-solving,
              Collaboration, Quick learner
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-7 transition-colors hover:bg-white/10">
              <h3 className="text-xl font-medium text-white flex justify-center">
                Languages
              </h3>
            </div>
          </div>

          <div className="flex items-center">
            <div className="text-gray-300 text-lg leading-relaxed">
              Tamil, English, Japanese
              <div className="mt-3 text-[15px] text-gray-200">
                Japanese — JLPT N5 level
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
