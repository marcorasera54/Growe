import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - Ordina Ora",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
