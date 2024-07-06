import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "../../public/logo.svg";
import { caveat } from "../utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Habitat Hub",
    default: "Habitat Hub",
  },
  description: "Explore the projects and our activities.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${caveat.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
