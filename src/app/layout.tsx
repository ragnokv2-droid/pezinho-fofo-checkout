import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Checkout | Pezinho Fofo",
  description: "Presenteie quem você ama neste Natal. Finalize sua compra com segurança.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="christmas-body min-h-screen antialiased">
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}