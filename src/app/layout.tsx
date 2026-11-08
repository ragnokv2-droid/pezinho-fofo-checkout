import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Nunito_Sans, Kaushan_Script } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const xmasFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-xmas",
});

const scriptFont = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-script",
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
    <html lang="pt-BR" className={`${xmasFont.variable} ${scriptFont.variable}`}>
      <body className="bg-gray-50 min-h-screen antialiased">
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}