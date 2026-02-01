"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
    isAdminMode: boolean;
    setAdminMode: (value: boolean) => void;
    allSectors: string[];
    setAllSectors: (sectors: string[]) => void;
    refreshData: () => void;
    registerRefresh: (fn: () => void) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
    const [isAdminMode, setAdminMode] = useState(false);
    const [allSectors, setAllSectors] = useState<string[]>([]);
    const [refreshFn, setRefreshFn] = useState<(() => void) | null>(null);

    const refreshData = () => {
        if (refreshFn) refreshFn();
    };

    const registerRefresh = (fn: () => void) => {
        setRefreshFn(() => fn);
    };

    return (
        <AdminContext.Provider value={{ isAdminMode, setAdminMode, allSectors, setAllSectors, refreshData, registerRefresh }}>
            {children}
        </AdminContext.Provider>
    );
}

export function useAdmin() {
    const context = useContext(AdminContext);
    if (!context) throw new Error('useAdmin must be used within AdminProvider');
    return context;
}
