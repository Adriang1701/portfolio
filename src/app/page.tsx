import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
// import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] text-slate-100 overflow-x-hidden">
      {/* WavyBackground fijo de fondo para toda la página */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <WavyBackground 
          className="w-full h-full"
          containerClassName="w-full h-full absolute inset-0"
          colors={[
            "#78350f",
            "#92400e",
            "#b45309",
            "#d97706",
            "#451a03",
          ]}
          backgroundFill="#0a0a0a"
          speed="fast"
          waveOpacity={0.3} // Reducimos un poco la opacidad para que no sature la lectura del texto
        />
      </div>

      {/* Contenido de la página por encima del fondo */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Contenedor con fondo semitransparente para las secciones de abajo */}
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ">
          <About />
          <TechStack />
          <Projects />
          {/* <Experience /> */}
          <Contact />
        </div>
      </div>
    </main>
  );
}
