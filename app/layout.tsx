import type { Metadata } from "next";
import { Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rendite & Realität",
    default: "Rendite & Realität — Immobilien aus der Ich-Perspektive",
  },
  description:
    "Calvin Linke dokumentiert seinen Weg als Immobilieninvestor aus Dresden — ehrlich, direkt, ohne Hochglanz.",
  keywords: [
    "Immobilien",
    "Kapitalanlage",
    "Dresden",
    "Immobilieninvestor",
    "Rendite",
    "Erfahrungen",
  ],
  openGraph: {
    locale: "de_DE",
    type: "website",
    siteName: "Rendite & Realität",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${manrope.variable} ${caveat.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-[#f7f9fb] text-[#191c1e] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
