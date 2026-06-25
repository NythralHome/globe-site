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
  metadataBase: new URL("https://globe.nythral.com"),
  title: "Nythral Globe Pro — macOS Input Source Switcher",
  description:
    "Open-source macOS utility for predictable input source switching with Globe/Fn Pro support and App Store-safe shortcuts.",
  openGraph: {
    title: "Nythral Globe Pro",
    description:
      "A predictable open-source macOS input source switcher with Globe/Fn Pro support and configurable shortcuts under GPLv3.",
    url: "https://globe.nythral.com",
    siteName: "Nythral Globe",
  },
  icons: {
    icon: "/brand/globe-icon.png",
    apple: "/brand/globe-icon.png",
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
