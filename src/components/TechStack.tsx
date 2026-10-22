"use client";

import { SectionTitle } from "./ui/p3-label";
import React from "react";
import { P3Card } from "./ui/p3-label";

import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFramer,
  SiTailwindcss,
  SiSass,
  SiJest,
  SiPostman,
  SiPython,
  SiPytorch,
} from "react-icons/si";

const techCategories = [
  {
    title: "Languages & Core",
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend & UI",
    technologies: [
      { name: "React JS", icon: SiReact },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Sass", icon: SiSass },
    ],
  },
  {
    title: "Backend & Databases",
    technologies: [
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
  {
    title: "DevOps, Tools & Testing",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
      { name: "Jest", icon: SiJest },
      { name: "Postman", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full py-24">
      <div className="mb-16 flex flex-col items-start">
        <SectionTitle
          title="TECH STACK"
          subtitle="A comprehensive collection of languages, frameworks, databases, and engineering tools I use to build robust software."
        />
      </div>

      <div className="space-y-12">
        {techCategories.map((category) => (
          <div key={category.title} className="flex flex-col">
            <h3 className="mb-6 -skew-x-12 font-p3 text-xl uppercase text-cyan-300">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {category.technologies.map((tech) => {
                const IconComponent = tech.icon;

                return (
                  <div key={tech.name} className="flex h-full min-h-0 flex-col">
                    <P3Card className="h-28" bodyClassName="items-center justify-center p-4">
                        <IconComponent className="mb-3 h-8 w-8 text-slate-400 transition-colors duration-300 group-hover:text-cyan-300 group-focus-within:text-cyan-300" />

                        <span className="text-center text-xs font-medium tracking-wide text-slate-300 transition-colors duration-300 group-hover:text-white group-focus-within:text-white">
                          {tech.name}
                        </span>
                      </P3Card>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}