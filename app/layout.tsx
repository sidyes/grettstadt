import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grettstadt Einfamilienhaus - Exposé",
  description: "Grettstadt Einfamilienhaus - Exposé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} font-sans`}>{children}</body>
    </html>
  );
}
