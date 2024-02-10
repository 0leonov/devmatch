import "@/shared/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import React from "react";

import { cn } from "@/shared/lib/utils";

import { ThemeProvider } from "./providers";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
