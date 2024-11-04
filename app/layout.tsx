import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: { icon: "/images/site-logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      suppressHydrationWarning
    >
      <SessionProvider>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
