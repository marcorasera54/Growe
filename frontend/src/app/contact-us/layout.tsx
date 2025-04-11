import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growe - Contattaci",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
