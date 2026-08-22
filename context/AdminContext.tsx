"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

interface AdminContextType {
    isAdminMode: boolean;
    setAdminMode: (value: boolean) => void;
    refreshData: () => void;
    registerRefresh: (fn: () => void) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
    const { status } = useSession();
    const isAdminMode = status === "authenticated";
    const [refreshFn, setRefreshFn] = useState<(() => void) | null>(null);

    // Toggling admin mode = signing in / out via next-auth. The session cookie
    // is the source of truth; localStorage is no longer used.
    const setAdminMode = (val: boolean) => {
        if (val) {
            signIn();
        } else {
            signOut();
        }
    };

    const refreshData = () => {
        if (refreshFn) refreshFn();
    };

    const registerRefresh = (fn: () => void) => {
        setRefreshFn(() => fn);
    };

    return (
        <AdminContext.Provider value={{ isAdminMode, setAdminMode, refreshData, registerRefresh }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAdmin must be used within AdminProvider');
    return context;
}
