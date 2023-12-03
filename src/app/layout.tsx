import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3d Portfolio",
  description: "See ya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" id="rootlayout">
      <body
        className={`${inter.className} h-full w-full bg-gradient-to-tl from-blue-400 to-blue-700`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
