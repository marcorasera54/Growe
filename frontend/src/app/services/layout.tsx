import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - Servizi",
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
