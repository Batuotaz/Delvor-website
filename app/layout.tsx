import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delvor — AI-Powered Automotive Parts Platform",
  description:
    "Delvor is building the intelligence and logistics layer for automotive parts commerce — AI-driven part matching, VIN identification, and supplier catalogue integration for the Baltic market.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#060606] text-white">{children}</body>
    </html>
  );
}
