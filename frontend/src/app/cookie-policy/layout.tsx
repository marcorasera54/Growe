import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - Cookie Policy",
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
