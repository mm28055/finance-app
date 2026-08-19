"use client";

import React, { useState } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Trigger Vercel Rebuild - Database Migration Update
import { Sidebar } from "@/components/Sidebar";
import { SectorChat } from "@/components/SectorChat";
import { NotesPanel } from "@/components/NotesPanel";
import { Toaster } from 'sonner';
import { Menu } from 'lucide-react';

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter"
});

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} bg-[#FAFBFC] text-gray-800 min-h-screen antialiased`}>
        <Providers>
          {/* Mobile Header */}
          <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-40 flex items-center px-4 justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm tracking-tight text-gray-800">Analyzer</span>
            </div>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <SectorChat />
          <NotesPanel />
          <div className="pt-14 md:pt-0 md:pl-60 transition-all duration-300">
            {children}
          </div>
          <Toaster position="bottom-right" richColors />
        </Providers>
      </body>
    </html>
  );
}
