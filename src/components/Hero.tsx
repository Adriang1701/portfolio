"use client";

import { HyperText } from "@/components/ui/hyper-text";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
        <h1 className="text-xl md:text-2xl font-medium text-amber-500 mb-2 tracking-wide">
          Hi, I'm <span className="font-bold text-white">Adrián García López</span>
        </h1>

        <HyperText 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4"
          duration={1000}
          startOnView={true}
        >
          Software Engineer
        </HyperText>

        <p className="text-base md:text-lg lg:text-xl text-neutral-300 font-light max-w-2xl mb-8">
          Building robust systems, clean architecture, and scalable web experiences with a focus on modern engineering.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-semibold text-neutral-950 bg-amber-500 rounded-full hover:bg-amber-400 transition-all duration-300 shadow-lg hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900/80 border border-neutral-700 rounded-full hover:bg-neutral-800 transition-all duration-300 backdrop-blur-md hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}