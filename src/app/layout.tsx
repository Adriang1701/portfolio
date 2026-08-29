import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrián García López | Portafolio",
  description: "Portafolio de desarrollo de software y tecnología",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${inter.className} bg-[#0a0a0a] text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}