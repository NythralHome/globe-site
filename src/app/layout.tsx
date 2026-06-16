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
  metadataBase: new URL("https://globo.nythral.com"),
  title: "Globe — macOS Globe/Fn Input Source Switcher",
  description:
    "Open-source macOS utility for predictable Globe/Fn key input source switching.",
  openGraph: {
    title: "Globe",
    description:
      "A predictable macOS Globe/Fn key input source switcher. Open source under the MIT License.",
    url: "https://globo.nythral.com",
    siteName: "Globe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
