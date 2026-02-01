"use client";

import React, { useState } from 'react';
import { RefreshCw, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function SyncButton() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [msg, setMsg] = useState('');
    const router = useRouter();

    const handleSync = async () => {
        if (status === 'loading') return;

        setStatus('loading');
        try {
            const res = await fetch('/api/sync/smart', { method: 'POST' });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed');

            setStatus('success');
            setMsg(`${data.stats.downloaded} new`);

            setTimeout(() => {
                setStatus('idle');
                setMsg('');
                router.refresh();
            }, 3000);

        } catch (e: any) {
            console.error(e);
            setStatus('error');
            setMsg('Failed');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <button
            onClick={handleSync}
            disabled={status === 'loading'}
            className={`
                flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all
                ${status === 'idle' ? 'bg-white border border-gray-200 text-gray-600 hover:bg-[#D4E5F7] hover:text-[#4A7AAF] hover:border-[#A5C4E2]' : ''}
                ${status === 'loading' ? 'bg-[#D4E5F7] text-[#6B9FCC] cursor-wait border border-[#A5C4E2]' : ''}
                ${status === 'success' ? 'bg-emerald-50 text-emerald-500 border border-emerald-200' : ''}
                ${status === 'error' ? 'bg-red-50 text-red-400 border border-red-200' : ''}
            `}
        >
            {status === 'idle' && <RefreshCw className="w-3 h-3" />}
            {status === 'loading' && <RefreshCw className="w-3 h-3 animate-spin" />}
            {status === 'success' && <Check className="w-3 h-3" />}
            {status === 'error' && <X className="w-3 h-3" />}

            <span>
                {status === 'idle' && "Sync Latest"}
                {status === 'loading' && "Syncing..."}
                {status === 'success' && msg}
                {status === 'error' && "Error"}
            </span>
        </button>
    );
}
