
"use client";
import React, { useEffect, useState, useRef } from 'react';
import { X, Loader2, CheckCircle, AlertCircle, FileText, BrainCircuit } from 'lucide-react';

interface SyncLog {
    id: string;
    timestamp: string;
    status: 'INFO' | 'DOWNLOADED' | 'ANALYZING' | 'COMPLETED' | 'ERROR';
    message: string;
    companyName?: string;
    quarter?: string;
}

interface SyncStatus {
    jobId: string;
    status: 'RUNNING' | 'COMPLETED' | 'FAILED';
    stats: {
        downloaded: number;
        completed: number;
        errors: number;
    };
    logs: SyncLog[];
}

export function SyncStatusPanel({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [data, setData] = useState<SyncStatus | null>(null);
    const [loading, setLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const fetchStatus = async () => {
            try {
                const res = await fetch('/api/admin/sync-status');
                if (res.ok) {
                    const json = await res.json();
                    setData(json);
                }
            } catch (e) {
                console.error("Poll failed", e);
            }
        };

        fetchStatus();
        const interval = setInterval(fetchStatus, 2000); // Poll every 2s

        return () => clearInterval(interval);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-4 right-4 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-[100] flex flex-col overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
            {/* Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {data?.status === 'RUNNING' ? (
                        <Loader2 className="w-4 h-4 text-blue-500 animate-spin" />
                    ) : (
                        <div className={`w-2 h-2 rounded-full ${data?.status === 'COMPLETED' ? 'bg-green-500' : 'bg-gray-400'}`} />
                    )}
                    <h3 className="text-sm font-semibold text-gray-700">
                        {data?.status === 'RUNNING' ? 'Sync in Progress...' : 'Sync Status'}
                    </h3>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Stats Bar */}
            <div className="flex divide-x divide-gray-100 border-b border-gray-100 bg-white">
                <div className="flex-1 py-2 text-center">
                    <div className="text-[10px] text-gray-500 uppercase font-medium">Downloaded</div>
                    <div className="text-sm font-bold text-gray-800">{data?.stats?.downloaded || 0}</div>
                </div>
                <div className="flex-1 py-2 text-center">
                    <div className="text-[10px] text-gray-500 uppercase font-medium">Analyzed</div>
                    <div className="text-sm font-bold text-green-600">{data?.stats?.completed || 0}</div>
                </div>
                <div className="flex-1 py-2 text-center">
                    <div className="text-[10px] text-gray-500 uppercase font-medium">Errors</div>
                    <div className="text-sm font-bold text-red-500">{data?.stats?.errors || 0}</div>
                </div>
            </div>

            {/* Logs List */}
            <div className="bg-[#F8FAFC] h-64 overflow-y-auto p-3 space-y-2 flex flex-col-reverse" ref={scrollRef}>
                {/* flex-col-reverse to show newest at bottom? No, natural order is newest first in API? 
                    API sorts timestamp desc. So index 0 is newest. 
                    We want standard log view: Oldest at top?
                    API returns logs orderBy timestamp desc (Newest first).
                    So we should likely reverse them for display or just map them.
                */}
                {(data?.logs || []).map((log) => (
                    <div key={log.id} className="flex gap-3 text-xs p-2 bg-white rounded border border-gray-100 shadow-sm">
                        <div className="mt-0.5 flex-shrink-0">
                            {log.status === 'DOWNLOADED' && <FileText className="w-3.5 h-3.5 text-blue-500" />}
                            {log.status === 'ANALYZING' && <BrainCircuit className="w-3.5 h-3.5 text-purple-500 animate-pulse" />}
                            {log.status === 'COMPLETED' && <CheckCircle className="w-3.5 h-3.5 text-green-500" />}
                            {log.status === 'ERROR' && <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
                            {log.status === 'INFO' && <div className="w-3.5 h-3.5 rounded-full bg-gray-200" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <span className="font-semibold text-gray-700 truncate block max-w-[180px]">
                                    {log.companyName || 'System'}
                                </span>
                                <span className="text-[9px] text-gray-400">
                                    {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                </span>
                            </div>
                            <p className="text-gray-500 mt-0.5 break-words leading-tight">
                                {log.quarter && <span className="px-1 py-0.5 bg-gray-100 rounded mr-1 text-[9px] font-medium">{log.quarter}</span>}
                                {log.message}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
