"use client";

import { SessionProvider } from "next-auth/react";
import { SectorChatProvider } from "@/context/SectorChatContext";
import { AdminProvider } from "@/context/AdminContext";
import { NotesProvider } from "@/context/NotesContext";
import { TagsProvider } from "@/context/TagsContext";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AdminProvider>
                <SectorChatProvider>
                    <NotesProvider>
                        <TagsProvider>
                            {children}
                        </TagsProvider>
                    </NotesProvider>
                </SectorChatProvider>
            </AdminProvider>
        </SessionProvider>
    );
}
