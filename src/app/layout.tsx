import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const xmasFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-xmas",
});

export const metadata: Metadata = {
  title: "Checkout | Pezinho Fofo",
  description: "Finalize sua compra com segurança via PIX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={xmasFont.variable}>
      <body className="bg-gray-50 min-h-screen antialiased">
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}