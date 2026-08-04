import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumeet Kumar | Full Stack Developer Portfolio",
  description:
    "Full Stack Developer with 6+ years of experience in ReactJS, Next.js, Node.js, PHP, WordPress, and MERN Stack development.",
  keywords: [
    "Full Stack Developer",
    "ReactJS",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "WordPress",
    "PHP",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
