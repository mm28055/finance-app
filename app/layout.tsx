import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { SectorChat } from "@/components/SectorChat";
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Tijori Terminal",
  description: "Financial Intelligence Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} bg-[#FAFBFC] text-gray-800 min-h-screen antialiased`}>
        <Providers>
          <Sidebar />
          <SectorChat />
          <div className="pl-60 transition-all duration-300">
            {children}
          </div>
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
