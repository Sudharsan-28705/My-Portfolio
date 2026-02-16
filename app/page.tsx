'use client';

import Grainient from "@/components/Grainient";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contacts";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Navbar />
      <div className="absolute inset-0 -z-20">
        <Grainient
          color1="#656165"
          color2="#adadad"
          color3="#595959"
          timeSpeed={1}
          colorBalance={0.7}
          warpStrength={0.85}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.11}
          rotationAmount={500}
          noiseScale={1.85}
          grainAmount={0.07}
          grainScale={2.1}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <Hero />
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

