import { ExternalLink } from "lucide-react";
import { P3Card, SectionTitle } from "./ui/p3-label";
import { certificatesData } from "@/data/certificatesData";

const formatDate = (ym: string) =>
  new Date(`${ym}-01T12:00:00`).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export default function Certificates() {
  return (
    <section id="certificates" className="w-full py-24">
      <div className="mb-12 flex flex-col items-start">
        <SectionTitle
          title="CERTIFICATES"
          subtitle="Courses, workshops and programs completed in development, data science, cloud and security."
        />
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {certificatesData.map((cert) => (
          <P3Card key={cert.file} className="h-full">
            <span className="mb-4 self-start -skew-x-12 bg-cyan-400 px-3 py-1 font-p3 text-[10px] uppercase text-black shadow-[3px_3px_0_#ff4fa3]">
              {formatDate(cert.date)}
            </span>
            <h3 className="mb-2 -skew-x-12 font-p3 text-xl tracking-tight text-white">{cert.title}</h3>
            <p className="mb-6 text-sm font-medium text-cyan-200/90">{cert.issuer}</p>
            <a
              href={`/Certificados/${encodeURIComponent(cert.file)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex -skew-x-12 items-center gap-1.5 self-end bg-cyan-400 px-3.5 py-2 font-p3 text-xs text-black outline-none transition-all hover:bg-white hover:shadow-[4px_4px_0_#ff4fa3] focus-visible:bg-white focus-visible:shadow-[4px_4px_0_#ff4fa3]"
            >
              <ExternalLink className="h-4 w-4" />
              View
            </a>
          </P3Card>
        ))}
      </div>
    </section>
  );
}
