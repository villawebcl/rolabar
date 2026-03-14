import type { Metadata } from "next";
import { Bebas_Neue, Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROLABAR — Donde la noche cobra vida",
  description:
    "Bar discoteca inspirado en la cultura urbana y el street art. Música, arte y energía en cada noche.",
  keywords: ["ROLABAR", "bar", "discoteca", "nightclub", "street art", "graffiti", "música", "DJ"],
  openGraph: {
    title: "ROLABAR",
    description: "Donde la noche cobra vida",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${barlowCondensed.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)", background: "#0a0a0a" }}
      >
        {children}
      </body>
    </html>
  );
}
