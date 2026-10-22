"use client";

import { P3Card, SectionTitle } from "./ui/p3-label";
import React, { useState } from "react";
import { projectsData, Project } from "@/data/projectsData";
import { ExternalLink } from "lucide-react";
import ImageFlip from "./originkit/ui/flip-gallery";


const categories = ["All", "Full Stack", "Mobile"] as const;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="w-full py-24">
      <div className="mb-12 flex flex-col items-start">
        <SectionTitle
          title="PROJECTS"
          subtitle="Explore some of the most representative work in web development, mobile, and artificial intelligence."
        />

        {/* Barra de Categorías */}
        <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
          {categories.map((category) => (
            <button
              data-p3-card
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`-skew-x-12 px-5 py-2 font-p3 text-xs transition-all duration-300 md:text-sm ${
                selectedCategory === category
                  ? "scale-105 bg-white text-black shadow-[4px_4px_0_#ff4fa3]"
                  : "border border-blue-900 bg-blue-950 text-slate-400 hover:bg-blue-900 hover:text-white"
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
            <P3Card className="min-h-140 flex-1" bodyClassName="p-0">
                {/* Imagen */}
                <a
                  href={project.liveUrl || project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-52 w-full shrink-0 cursor-pointer"
                >
                  <div className="relative z-20 h-full w-full overflow-hidden border-b border-blue-900 bg-[#0d1a5c] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-950/60">
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
                  <span className="absolute left-3 top-3 z-30 -skew-x-12 bg-cyan-400 px-3 py-1 font-p3 text-[10px] uppercase text-black shadow-[3px_3px_0_#ff4fa3]">
                    {project.category}
                  </span>

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 z-30 bg-black/20 opacity-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105 group-hover:opacity-100" />
                </a>

                {/* Contenido completo */}
                <div className="flex min-h-0 flex-1 flex-col p-6">
                  {/* Parte superior */}
                  <div className="flex flex-col">
                    <h3 className="mb-2 -skew-x-12 font-p3 text-2xl tracking-tight text-white">
                      {project.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-blue-900 bg-blue-950 px-2.5 py-1 text-xs font-medium text-cyan-200/90"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Parte inferior */}
                  <div className="mt-auto flex items-center gap-3 border-t border-blue-900/80 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-p3-card
                        className="inline-flex -skew-x-12 items-center gap-1.5 border-l-4 border-cyan-400 bg-blue-950 px-3.5 py-2 font-p3 text-xs text-slate-200 outline-none transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0_#ff4fa3] focus-visible:bg-white focus-visible:text-black focus-visible:shadow-[4px_4px_0_#ff4fa3]"
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
                        data-p3-card
                        className="ml-auto inline-flex -skew-x-12 items-center gap-1.5 bg-cyan-400 px-3.5 py-2 font-p3 text-xs text-black outline-none transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0_#ff4fa3] focus-visible:bg-white focus-visible:text-black focus-visible:shadow-[4px_4px_0_#ff4fa3]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
            </P3Card>
          </div>
        ))}
      </div>
    </section>
  );
}