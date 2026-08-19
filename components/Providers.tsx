"use client";

import { SessionProvider } from "next-auth/react";
import { SectorChatProvider } from "@/context/SectorChatContext";
import { AdminProvider } from "@/context/AdminContext";
import { NotesProvider } from "@/context/NotesContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AdminProvider>
                <SectorChatProvider>
                    <NotesProvider>
                        {children}
                    </NotesProvider>
                </SectorChatProvider>
            </AdminProvider>
        </SessionProvider>
    );
}
