export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "AI & Data" | "Mobile";
  images: { image: { src: string; alt: string }; focusY?: number }[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "StockIQ Platform",
    description: "Cross-platform inventory and predictive analytics system featuring secure user authentication, a Python Flask RESTful API, and interactive data visualizations.",
    category: "Full Stack",
    images: [
      { 
        image: { src: "/images/stockiq-1.png", alt: "StockIQ Dashboard" }, 
        focusY: 50 
      },
    ],
    technologies: ["Flutter", "Dart", "Python", "Flask", "PostgreSQL", "Firebase"],
    githubUrl: "https://github.com/stockiq-project",
    liveUrl: "https://www.stockiq.com.mx/",
  },
  {
    id: "2",
    title: "Etiquetas e Impresos",
    description: "Website and online store for a family business selling custom labels and prints, with authentication, PayPal checkout, cart management and a PostgreSQL product catalog.",
    category: "Full Stack",
    images: [
      {
        image: { src: "/images/etiquetas-1.png", alt: "Etiquetas e Impresos store" },
        focusY: 50
      },
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "PayPal"],
    githubUrl: "https://github.com/Adriang1701/etiquetas-e-impresos",
    liveUrl: "https://etiquetas-e-impresos.vercel.app/",
  },
  {
    id: "3",
    title: "Origami Kanji",
    description: "Cross-platform mobile application focused on the structured learning of kanji, grammar, and Japanese vocabulary.",
    category: "Mobile",
    images: [
      { 
        image: { src: "/images/origamikanji-1.png", alt: "StockIQ Dashboard" }, 
        focusY: 50 
      },
    ],
    technologies: ["Flutter", "Dart", "Tailwind CSS"],
    githubUrl: "https://github.com/Adriang1701/origami_kanji",
    liveUrl: "https://origami-kanji.vercel.app/",
  },
];