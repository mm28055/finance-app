"use client";

import { SessionProvider } from "next-auth/react";
import { SectorChatProvider } from "@/context/SectorChatContext";
import { AdminProvider } from "@/context/AdminContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AdminProvider>
                <SectorChatProvider>
                    {children}
                </SectorChatProvider>
            </AdminProvider>
        </SessionProvider>
    );
}
