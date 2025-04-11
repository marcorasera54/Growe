import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - News",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
