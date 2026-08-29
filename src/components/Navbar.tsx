"import client"; // Si usas componentes interactivos de estado, aunque para esto puro CSS funciona perfecto
import Link from "next/link";

// 1. Declaramos el arreglo con los elementos de navegación
export interface NavItem {
  name: string;
  href: string;
}

export const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "TechStack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  // { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between w-full max-w-4xl px-4 py-3 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full shadow-2xl">
        
        {/* Logo / Marca */}
        <Link href="/" className="flex items-center gap-2 px-2 py-1 group">
          <div className="flex items-center justify-center w-8 h-8 text-black bg-white rounded-lg font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-300">
            A
          </div>
          <span className="font-semibold text-white tracking-wide text-sm md:text-base">
            Adrián García López
          </span>
        </Link>

        {/* 2. Mapeamos el arreglo para evitar repetir código */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-neutral-400">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:text-white hover:bg-neutral-800/80 hover:shadow-sm"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}