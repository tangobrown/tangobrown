import type { Metadata, Viewport } from "next";
import { Boldonse, Public_Sans } from "next/font/google";
import "./globals.css";

const heading = Boldonse({
  subsets: ["latin"],
  weight: ["400"], // Boldonse ships in a single 400 weight only
  variable: "--font-heading",
  display: "swap",
});

const body = Public_Sans({
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
