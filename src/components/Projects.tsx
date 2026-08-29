"use client";

import React, { useState } from "react";
import { projectsData, Project } from "@/data/projectsData";
import { ExternalLink } from "lucide-react";
import ImageFlip from "./originkit/ui/flip-gallery";
import { MagicCard } from "./ui/magic-card";

const categories = ["All", "Full Stack", "Mobile"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="w-full py-24">
      <div className="mb-12 flex flex-col items-center">
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Featured Projects
        </h2>

        <p className="max-w-xl text-center text-sm text-neutral-400 md:text-base">
          Explore some of the most representative work in web development, mobile, and artificial intelligence.
        </p>

        {/* Barra de Categorías */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 md:text-sm ${
                selectedCategory === category
                  ? "scale-105 bg-amber-600 text-white shadow-lg shadow-amber-900/30"
                  : "border border-neutral-800 bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 items-stretch gap-10 pt-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project: Project) => (
          <div key={project.id} className="flex h-full min-h-0 flex-col pt-4">
            <MagicCard
              gradientFrom="#f59e0b"
              gradientTo="#78350f"
              className="relative flex h-full min-h-140 flex-1 flex-col rounded-2xl bg-transparent shadow-2xl"
            >
              {/* Contenedor real de la tarjeta */}
              <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] bg-[#0d0d0d]">
                {/* Imagen */}
                <a
                  href={project.liveUrl || project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-52 w-full shrink-0 cursor-pointer"
                >
                  <div className="relative z-20 h-full w-full overflow-hidden border-b border-neutral-800 bg-[#141414] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-amber-950/60">
                    <ImageFlip
                      images={project.images}
                      fit="cover"
                      rounded={0}
                      tilt={true}
                      tiltOptions={{
                        effect: "repel",
                        tiltLimit: 8,
                        scale: 102,
                      }}
                    />
                  </div>

                  {/* Categoría */}
                  <span className="absolute left-3 top-3 z-30 rounded-full border border-amber-800/50 bg-amber-950/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300 shadow-md backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-30 bg-black/20 opacity-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-100" />
                </a>

                {/* Contenido completo */}
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  {/* Parte superior */}
                  <div className="flex flex-col">
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-neutral-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-medium text-amber-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Parte inferior */}
                  <div className="mt-auto flex items-center gap-3 border-t border-neutral-800/80 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:bg-neutral-800 hover:text-white"
                      >
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Github
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-semibold text-neutral-950 shadow-md transition-colors hover:bg-amber-400"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        ))}
      </div>
    </section>
  );
}