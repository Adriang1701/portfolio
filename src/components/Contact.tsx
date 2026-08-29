"use client";

import { MagicCard } from "./ui/magic-card";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 w-full">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
          Contact
        </h2>
        <p className="text-neutral-400 text-sm md:text-base text-center max-w-xl">
          Have a project in mind, a question, or want to collaborate? Feel free to reach out.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <MagicCard
          gradientFrom="#f59e0b"
          gradientTo="#78350f"
          className="flex flex-col rounded-2xl bg-[#0d0d0d] border border-neutral-800/80 p-8 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-3 text-center">Let's Connect</h3>
          <p className="text-neutral-300 text-sm leading-relaxed mb-8 text-center">
            I am always open to discussing new opportunities, software engineering challenges, or interesting ideas in artificial intelligence and web development.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:tu-correo@example.com"
              className="inline-flex items-center gap-3 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-4 rounded-xl border border-neutral-800 transition-colors"
            >
              <div className="p-2 bg-amber-950/60 text-amber-400 rounded-lg border border-amber-800/40">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-base">adrian.g170103@gmail.com</span>
            </a>

            <a
              href="https://github.com/Adriang1701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-4 rounded-xl border border-neutral-800 transition-colors"
            >
              <div className="p-2 bg-amber-950/60 text-amber-400 rounded-lg border border-amber-800/40 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <span className="text-base">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/adrian-garcia-lopez-918792382/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-4 rounded-xl border border-neutral-800 transition-colors"
            >
              <div className="p-2 bg-amber-950/60 text-amber-400 rounded-lg border border-amber-800/40 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <span className="text-base">LinkedIn</span>
            </a>
          </div>
        </MagicCard>
      </div>
    </section>
  );
}