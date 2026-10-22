"use client";

import { P3Card, SectionTitle } from "./ui/p3-label";

export default function About() {
  return (
    <section id="about" className="w-full py-24">
      <div className="mb-12 flex flex-col items-start">
        <SectionTitle
          title="ABOUT ME"
          subtitle="Get to know more about my background, academic focus, and passion for software engineering."
        />
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
        <div className="flex h-full min-h-0 flex-col">
          <P3Card title="Background & Focus" className="min-h-62.5 flex-1">
            <p className="text-sm leading-relaxed text-slate-300">
                Academic student with a strong focus on software development,
                scalable architectures, and intelligent systems. Passionate
                about transforming theoretical computer science concepts into
                robust real-world applications.
              </p>
          </P3Card>
        </div>

        <div className="flex h-full min-h-0 flex-col">
          <P3Card title="Research & AI" className="min-h-62.5 flex-1">
            <p className="text-sm leading-relaxed text-slate-300">
                Deeply interested in Natural Language Processing (NLP),
                structured representations, ontologies, and formal logic.
                Constantly exploring transformer mechanics, knowledge graph
                embeddings, and advanced AI architectures.
              </p>
          </P3Card>
        </div>

        <div className="flex h-full min-h-0 flex-col">
          <P3Card title="Beyond Code" className="min-h-62.5 flex-1">
            <p className="text-sm leading-relaxed text-slate-300">
                Committed to continuous learning and professional
                certifications. Actively studying Japanese language
                systems—focusing on kanji etymology, radical structures, and
                grammar rules—while expanding my engineering skill set.
              </p>
          </P3Card>
        </div>
      </div>
    </section>
  );
}