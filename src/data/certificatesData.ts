export interface Certificate {
  title: string;
  issuer: string;
  date: string; // YYYY-MM, used for sorting and display
  file: string; // name inside public/Certificados
}

// Newest first.
export const certificatesData: Certificate[] = [
  { title: "Next.js: El framework de React para producción", issuer: "Udemy · DevTalles", date: "2026-08", file: "UC-b8541586-76ce-4c99-a36f-3b66c2d25ec3 (1).pdf" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy", date: "2026-02", file: "Linux_Essentials_certificate_agarcia446-alumnos-uaq-mx_99c593c6-87f5-4884-8e49-e784dd041109.pdf" },
  { title: "AWS Academy Graduate - Cloud Foundations", issuer: "AWS Academy", date: "2026-02", file: "AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260213-31-p6448n.pdf" },
  { title: "Fundamentos de Ciberseguridad y Hacking Ético", issuer: "UAQ · Facultad de Ingeniería", date: "2025-12", file: "325732_157_2794.pdf" },
  { title: "Process Mining: Data Science in Action", issuer: "Coursera · TU Eindhoven", date: "2025-11", file: "Coursera - Process Mining_ Data science in Action.pdf" },
  { title: "Data Science Ethics", issuer: "Coursera · University of Michigan", date: "2025-10", file: "Coursera - Data Science Ethics.pdf" },
  { title: "Data Science Math Skills", issuer: "Coursera · Duke University", date: "2025-10", file: "Coursera - Data Science Math Skills.pdf" },
  { title: "NASA Space Apps Challenge 2025", issuer: "NASA", date: "2025-10", file: "NASA Space Apps Challenge.pdf" },
  { title: "Estadística y probabilidad", issuer: "Coursera · UNAM", date: "2025-10", file: "Coursera - Estadística y probabilidad.pdf" },
  { title: "Data Privacy Fundamentals", issuer: "Coursera · Northeastern University", date: "2025-10", file: "Coursera - Data Privacy Fundamentals.pdf" },
  { title: "Introducción a la Minería de Datos", issuer: "Coursera · PUC Chile", date: "2025-09", file: "Coursera - Introducción a la Minería de Datos.pdf" },
  { title: "Pensamiento crítico y resolución de problemas", issuer: "Santander Open Academy", date: "2025-04", file: "Santander - Pensamiento cr__tico y resoluci__n de problemas.pdf" },
  { title: "Verano de Introducción a la Ciencia: Clustering", issuer: "UAQ · Facultad de Informática", date: "2024-08", file: "ADRIAN GARCIA LOPEZ.jpg" },
  { title: "Fotografía Creativa para Redes Sociales", issuer: "UAQ · Facultad de Ingeniería", date: "2024-05", file: "325732_57_1204.pdf" },
  { title: "Introducción a las Tecnologías Emergentes", issuer: "Emtech · Santander Open Academy", date: "2024-05", file: "Adrián García - 2024-05-05.pdf" },
  { title: "Desarrollo Web con CSS (Sass, Bootstrap)", issuer: "UAQ · Facultad de Ingeniería", date: "2024-01", file: "325732_41_1131.pdf" },
  { title: "Análisis de Datos y Transformación Digital", issuer: "UAQ · Facultad de Ingeniería", date: "2024-01", file: "325732_36_736.pdf" },
  { title: "Introducción al desarrollo web: HTML y CSS", issuer: "Google Actívate", date: "2023-09", file: "Curso de introducci__n al desarrollo web_ HTML y CSS (1_2) _ Google.pdf" },
];
