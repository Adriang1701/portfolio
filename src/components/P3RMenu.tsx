"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { P3Card, P3Label } from "./ui/p3-label";
import { isArrowKey, nearestInDirection } from "@/lib/spatial-nav";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";

const menuItems = [
  { label: "ABOUT", Section: About },
  { label: "SKILLS", Section: TechStack },
  { label: "PROJECTS", Section: Projects },
  { label: "CONTACT", Section: Contact },
];

const tilts = [
  { rotate: -7, x: "0em" },
  { rotate: 4, x: "1.1em" },
  { rotate: -3, x: "-0.3em" },
  { rotate: 6, x: "0.7em" },
];
const cyans = ["#16cffb", "#7de6fd", "#77fefc"];
const ease = [0.7, 0, 0.2, 1] as const;

function moveCardFocus(key: string) {
  const cards = [...document.querySelectorAll<HTMLElement>("[data-p3-card]")];
  const current = document.activeElement?.closest<HTMLElement>("[data-p3-card]");
  const center = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };
  const next =
    current ? cards[nearestInDirection(center(current), cards.map(center), key)] : cards[0];
  next?.focus({ preventScroll: true });
  next?.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

export default function P3RMenu() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const helpButton = useRef<HTMLButtonElement>(null);
  const [help, setHelp] = useState(false);
  const isOpen = open !== null;
  const sceneTransition = { duration: 0.5, ease, delay: isOpen ? 0 : 0.3 };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "?") {
        setHelp((h) => !h);
        return;
      }
      if (help) {
        if (e.key === "Escape") setHelp(false);
        return;
      }
      if (open !== null) {
        if (e.key === "Escape") setOpen(null);
        else if (isArrowKey(e.key)) {
          e.preventDefault();
          moveCardFocus(e.key);
        } else if (e.key === "Enter" && document.activeElement?.matches("div[data-p3-card]")) {
          document.activeElement.querySelector("a")?.click();
        }
        return;
      }
      const step = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      const stops = [...buttons.current, helpButton.current];
      const current = stops.indexOf(document.activeElement as HTMLButtonElement);
      stops[((current === -1 ? selected : current) + step + stops.length) % stops.length]?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, selected, help]);

  const Active = isOpen ? menuItems[open].Section : null;

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative h-dvh w-full overflow-hidden bg-white font-p3 text-black">
        <div inert={isOpen} className="absolute inset-0">
          <motion.p
            aria-hidden
            animate={isOpen ? { x: "-50vw", y: "40vh", opacity: 0 } : { x: 0, y: 0, opacity: 1 }}
            transition={sceneTransition}
            className="pointer-events-none absolute -left-[4vw] bottom-[-6vh] -rotate-[18deg] select-none text-[26vw] leading-none"
          >
            ADRIÁN
          </motion.p>

          <motion.div
            aria-hidden
            animate={isOpen ? { scale: 2.4, filter: "brightness(0.55)" } : { scale: 1, filter: "brightness(1)" }}
            transition={sceneTransition}
            className="p3-water absolute -right-[40vmax] -top-[35vmax] h-[110vmax] w-[110vmax] overflow-hidden rounded-full opacity-[0.94]"
          />

          <motion.div
            animate={isOpen ? { y: "-180%", opacity: 0 } : { y: 0, opacity: 1 }}
            transition={sceneTransition}
            className="absolute left-4 top-4 border-2 border-black bg-white px-4 py-2 md:left-[8vw] md:top-[5vh]"
          >
            <p className="-skew-x-12 text-xl md:text-3xl">Software Engineer</p>
            <p className="-skew-x-12 font-sans text-xs font-bold italic">Adrián García López</p>
          </motion.div>

          <motion.nav
            aria-label="Main menu"
            animate={
              isOpen
                ? { x: "-50vw", y: "-36vh", scale: 0.4, rotate: -16, opacity: 0.3 }
                : { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }
            }
            transition={sceneTransition}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[clamp(2.25rem,8vw,6.5rem)] md:left-auto md:right-[10vw]"
          >
            <ul>
              {menuItems.map(({ label }, i) => {
                const isSel = i === selected;
                return (
                  <li key={label} style={{ marginTop: i ? "-0.75em" : 0 }}>
                    <motion.button
                      ref={(el) => {
                        buttons.current[i] = el;
                      }}
                      onMouseEnter={() => setSelected(i)}
                      onFocus={() => setSelected(i)}
                      onClick={() => setOpen(i)}
                      initial={{ opacity: 0, x: 120 }}
                      animate={{
                        opacity: 1,
                        x: isOpen ? (i - menuItems.length) * 40 : 0,
                        rotate: tilts[i].rotate + (isOpen ? -10 : 0),
                        scale: isSel ? 1.12 : 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 20,
                        opacity: { delay: i * 0.07 },
                        x: { type: "spring", stiffness: 300, damping: 24, delay: i * 0.07 },
                      }}
                      style={{ marginLeft: tilts[i].x, zIndex: isSel ? 1 : 0 }}
                      className="relative block cursor-pointer outline-none"
                    >
                      <P3Label text={label} highlighted={isSel} color={cyans[i % cyans.length]} />
                    </motion.button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        </div>

        <AnimatePresence onExitComplete={() => buttons.current[selected]?.focus()}>
          {isOpen && Active && (
            <motion.div
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={menuItems[open].label}
              className="fixed inset-0 z-20 overflow-y-auto font-sans text-slate-100"
              exit={{ opacity: 0, transition: { delay: 0.35, duration: 0.05 } }}
            >
              <motion.p
                aria-hidden
                initial={{ x: "-80vw", opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.5, ease, delay: 0.15 } }}
                exit={{ x: "-80vw", opacity: 0, transition: { duration: 0.35, ease } }}
                className="pointer-events-none fixed -left-[3vw] bottom-[-5vh] -rotate-[14deg] select-none font-p3 text-[22vw] leading-none text-black/75"
              >
                {menuItems[open].label}
              </motion.p>

              <motion.button
                autoFocus
                data-p3-card
                onClick={() => setOpen(null)}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                exit={{ x: 120, opacity: 0, transition: { duration: 0.2 } }}
                className="group fixed right-6 top-6 z-10 cursor-pointer font-p3 text-2xl text-white outline-none"
              >
                <span className="p3-outline block -skew-x-12 px-3 py-1 transition-all group-hover:bg-white group-hover:text-black group-hover:shadow-[4px_4px_0_#ff4fa3] group-hover:[text-shadow:none] group-focus-visible:bg-white group-focus-visible:text-black group-focus-visible:shadow-[4px_4px_0_#ff4fa3] group-focus-visible:[text-shadow:none]">
                  <kbd className="rounded-full border-2 border-current px-1.5 text-base">Esc</kbd> Back
                </span>
              </motion.button>

              <motion.div
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.45, ease, delay: 0.3 } }}
                exit={{ x: 120, opacity: 0, transition: { duration: 0.3, ease } }}
                className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-24"
              >
                <Active />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          ref={helpButton}
          data-p3-card
          onFocus={() => !isOpen && setSelected(-1)}
          onMouseEnter={() => !isOpen && setSelected(-1)}
          onClick={() => setHelp((h) => !h)}
          aria-expanded={help}
          aria-controls="p3-help"
          className="group fixed bottom-6 right-6 z-30 cursor-pointer font-p3 text-2xl text-white outline-none"
        >
          <span
            className={`block -skew-x-12 px-3 py-1 transition-all ${
              help
                ? "bg-white text-black shadow-[4px_4px_0_#ff4fa3]"
                : "p3-outline group-hover:bg-white group-hover:text-black group-hover:shadow-[4px_4px_0_#ff4fa3] group-hover:[text-shadow:none] group-focus-visible:bg-white group-focus-visible:text-black group-focus-visible:shadow-[4px_4px_0_#ff4fa3] group-focus-visible:[text-shadow:none]"
            }`}
          >
            <kbd className="rounded-full border-2 border-current px-2 text-base">?</kbd> Help
          </span>
        </button>

        <AnimatePresence>
          {help && (
            <motion.div
              id="p3-help"
              role="dialog"
              aria-label="Commands"
              initial={{ opacity: 0, x: 40, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              exit={{ opacity: 0, x: 40, rotate: -4 }}
              transition={{ duration: 0.25, ease }}
              className="fixed bottom-24 right-6 z-30 w-[min(26rem,calc(100vw-3rem))] font-sans text-slate-100"
            >
              <P3Card title="COMMANDS" interactive={false} bodyClassName="gap-5 px-8 pb-8 pt-4">
                {[
                  {
                    group: "Menu",
                    keys: [
                      ["↑ ↓", "Choose option / Help"],
                      ["Enter", "Confirm"],
                    ],
                  },
                  {
                    group: "Sections",
                    keys: [
                      ["↑ ↓ ← →", "Move between cards"],
                      ["Enter", "Open link / select"],
                      ["Esc", "Back to menu"],
                    ],
                  },
                  { group: "Any time", keys: [["?", "Show / hide commands"]] },
                ].map(({ group, keys }) => (
                  <div key={group}>
                    <p className="mb-1 -skew-x-12 font-p3 text-sm text-cyan-300">{group.toUpperCase()}</p>
                    <dl className="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 text-sm">
                      {keys.map(([key, action]) => (
                        <div key={key + action} className="contents">
                          <dt>
                            <kbd className="inline-block -skew-x-12 bg-white px-2 font-p3 text-xs text-black">{key}</kbd>
                          </dt>
                          <dd className="text-slate-300">{action}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </P3Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
