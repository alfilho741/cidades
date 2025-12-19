import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cidades - Descubra sua cidade",
  description: "Encontre restaurantes, hotéis, bares, serviços e eventos na sua cidade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
