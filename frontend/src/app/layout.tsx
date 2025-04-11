// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Growe - Sustainable Agriculture Solutions",
  description:
    "Empowering sustainable agriculture through innovative technology and practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
