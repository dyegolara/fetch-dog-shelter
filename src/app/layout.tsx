import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import Providers from "@/app/providers";
import { ModeToggle } from "@/components/ui/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fetch Dog Shelter",
  description: "Find the perfect dog for adoption",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Topbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

function Topbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <div className="flex items-center text-3xl font-bold tracking-widest">
          FDS
        </div>
      </Link>
      <ModeToggle />
    </div>
  );
}
