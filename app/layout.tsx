import type { Metadata, Viewport } from "next";
import { Inria_Serif, Figtree } from "next/font/google";
import "./globals.css";

const heading = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tim Brown — Modern Digital Solutions for Small Businesses",
  description:
    "Tim Brown builds modern digital solutions for small businesses that both humans and search engines love. Website builds, optimisation, hosting and AI automation.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
