import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Massagem & Liberação Miofascial | Bem-estar e Relaxamento",
  description: "Especialista em massoterapia e liberação miofascial. Agende sua sessão e descubra o poder da cura através do toque terapêutico.",
  keywords: "massagem, liberação miofascial, massoterapia, relaxamento, bem-estar, terapia manual",
  authors: [{ name: "Especialista em Massagem" }],
  openGraph: {
    title: "Massagem & Liberação Miofascial",
    description: "Especialista em massoterapia e liberação miofascial para seu bem-estar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
