import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fabian Lampert | Stand Up Comedy",
  description: "Fabian Lampert - Stand Up Comedian aus Köln. Einer dieser Abende - Die Comedy Show. Auftritte bei Nightwash, Quatsch Comedy Club und mehr.",
  keywords: ["Fabian Lampert", "Stand Up Comedy", "Comedian", "Köln", "Nightwash", "Quatsch Comedy Club", "Einer dieser Abende"],
  authors: [{ name: "Fabian Lampert" }],
  openGraph: {
    title: "Fabian Lampert | Stand Up Comedy",
    description: "Fabian Lampert - Stand Up Comedian. Einer dieser Abende - Die Comedy Show.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
