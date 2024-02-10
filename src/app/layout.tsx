import "@/shared/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import { cn } from "@/shared/lib/utils";

import { SessionProvider, ThemeProvider } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMatch",
  description: "Networking platform for uniting IT specialists",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <ThemeProvider>
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
