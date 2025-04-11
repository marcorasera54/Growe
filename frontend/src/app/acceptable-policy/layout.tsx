import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - Acceptable Policy",
};

export default function AcceptablePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
