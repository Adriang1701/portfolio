"use client";

import { MagicCard } from "./ui/magic-card";

export default function About() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mb-12 flex flex-col items-center">
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          About Me
        </h2>

        <p className="max-w-xl text-center text-sm text-neutral-400 md:text-base">
          Get to know more about my background, academic focus, and passion for
          software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
        {/* Card 1: Academic & Professional Profile */}
        <div className="flex h-full min-h-0 flex-col">
          <MagicCard
            gradientFrom="#f59e0b"
            gradientTo="#78350f"
            className="relative flex h-full min-h-62.5 flex-1 flex-col rounded-2xl bg-transparent shadow-2xl"
          >
            <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] bg-[#0d0d0d] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                Background & Focus
              </h3>

              <p className="text-sm leading-relaxed text-neutral-300">
                Academic student with a strong focus on software development,
                scalable architectures, and intelligent systems. Passionate
                about transforming theoretical computer science concepts into
                robust real-world applications.
              </p>
            </div>
          </MagicCard>
        </div>

        {/* Card 2: Research & NLP Interest */}
        <div className="flex h-full min-h-0 flex-col">
          <MagicCard
            gradientFrom="#f59e0b"
            gradientTo="#78350f"
            className="relative flex h-full min-h-62.5 flex-1 flex-col rounded-2xl bg-transparent shadow-2xl"
          >
            <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] bg-[#0d0d0d] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                Research & AI
              </h3>

              <p className="text-sm leading-relaxed text-neutral-300">
                Deeply interested in Natural Language Processing (NLP),
                structured representations, ontologies, and formal logic.
                Constantly exploring transformer mechanics, knowledge graph
                embeddings, and advanced AI architectures.
              </p>
            </div>
          </MagicCard>
        </div>

        {/* Card 3: Languages & Continuous Learning */}
        <div className="flex h-full min-h-0 flex-col">
          <MagicCard
            gradientFrom="#f59e0b"
            gradientTo="#78350f"
            className="relative flex h-full min-h-62.5 flex-1 flex-col rounded-2xl bg-transparent shadow-2xl"
          >
            <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden rounded-[15px] bg-[#0d0d0d] p-6">
              <h3 className="mb-3 text-xl font-bold text-white">
                Beyond Code
              </h3>

              <p className="text-sm leading-relaxed text-neutral-300">
                Committed to continuous learning and professional
                certifications. Actively studying Japanese language
                systems—focusing on kanji etymology, radical structures, and
                grammar rules—while expanding my engineering skill set.
              </p>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
}