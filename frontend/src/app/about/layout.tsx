import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - About",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
