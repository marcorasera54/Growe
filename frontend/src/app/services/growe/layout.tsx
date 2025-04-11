// src/app/layout.tsx
import { Inter } from "next/font/google";
import type { Metadata } from "next";

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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
