import { cn } from "@/lib/utils";

const wedge = "polygon(2% 82%, 97% 6%, 88% 62%)";
const pinkWedge = "polygon(0% 80%, 100% 0%, 92% 68%)";
const pad = "pl-[0.4em] pr-[1.4em] py-[0.4em]";

export function P3Label({
  text,
  highlighted,
  color,
  className,
}: {
  text: string;
  highlighted?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <span className={cn("relative block font-p3 leading-none tracking-[-0.05em]", pad, className)}>
      {highlighted && (
        <>
          <span aria-hidden className="p3-pulse absolute inset-0 bg-[#ff4fa3]" style={{ clipPath: pinkWedge }} />
          <span aria-hidden className="absolute inset-0 bg-white" style={{ clipPath: wedge }} />
        </>
      )}
      <span className="relative block -skew-x-12" style={{ color: highlighted ? "#000" : color }}>
        {text}
      </span>
      {highlighted && (
        <span aria-hidden className={cn("absolute inset-0 text-[#ff1a1a]", pad)} style={{ clipPath: wedge }}>
          <span className="block -skew-x-12">{text}</span>
        </span>
      )}
    </span>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <h2 className="-ml-[0.4em] -rotate-3 text-[clamp(2.75rem,7vw,5.5rem)]">
        <P3Label text={title} highlighted />
      </h2>
      <p className="mt-3 max-w-xl -skew-x-12 border-l-4 border-cyan-400 bg-[#0a1450] px-4 py-2 text-left text-sm font-bold italic text-cyan-100 md:text-base">
        {subtitle}
      </p>
    </>
  );
}

const cut =
  "polygon(0 0, calc(100% - 1.25rem) 0, 100% 1.25rem, 100% 100%, 1.25rem 100%, 0 calc(100% - 1.25rem))";

export function P3Card({
  title,
  interactive = true,
  className,
  bodyClassName = "p-6",
  children,
}: {
  title?: string;
  interactive?: boolean;
  className?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-p3-card={interactive || undefined}
      tabIndex={interactive ? 0 : undefined}
      className={cn(
        "group relative outline-none transition-transform duration-200",
        interactive &&
          "hover:z-10 hover:-rotate-1 hover:scale-[1.03] focus-within:z-10 focus-within:-rotate-1 focus-within:scale-[1.03]",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 translate-x-2 translate-y-2 bg-[#ff4fa3] opacity-0 transition-opacity",
          interactive && "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
        style={{ clipPath: cut }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-cyan-400/40 transition-colors",
          interactive && "group-hover:bg-white group-focus-within:bg-white"
        )}
        style={{ clipPath: cut }}
      />
      <div className="relative m-[2px] flex h-[calc(100%-4px)] flex-col bg-[#0a1450]" style={{ clipPath: cut }}>
        {title && (
          <h3
            className={cn(
              "-ml-2 mt-5 self-start -skew-x-12 bg-cyan-400 py-1 pl-6 pr-6 font-p3 text-xl text-black transition-colors",
              interactive && "group-hover:bg-white group-focus-within:bg-white"
            )}
          >
            {title}
          </h3>
        )}
        <div className={cn("flex flex-1 flex-col", bodyClassName)}>{children}</div>
      </div>
    </div>
  );
}
