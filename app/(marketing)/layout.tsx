import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import NavBar from "./_components/navbar";

export const metadata: Metadata = {
  title: "Jotion",
  description: "note taking app",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-[#1f1f1f] h-full ">
      <NavBar />
      <main className="h-full pt-40">{children}</main>
    </div>
  );
}
