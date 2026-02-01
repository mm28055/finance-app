"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useAdmin } from '@/context/AdminContext';

interface AddCompanyModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultSector?: string;
}

export function AddCompanyModal({ isOpen, onClose, defaultSector = '' }: AddCompanyModalProps) {
    const { allSectors, refreshData } = useAdmin();
    const [formData, setFormData] = useState({
        name: '',
        ticker: '',
        isin: '',
        sector: defaultSector,
        newSector: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const sector = formData.newSector.trim() || formData.sector;

        if (!formData.name || !formData.ticker || !formData.isin || !sector) {
            setError('All fields are required');
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/companies', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    ticker: formData.ticker.toUpperCase(),
                    isin: formData.isin.toUpperCase(),
                    sector: sector
                })
            });

            const data = await res.json();
            if (!res.ok) {
                setError(data.error || 'Failed to add');
                setIsLoading(false);
                return;
            }

            refreshData();
            onClose();
            window.location.reload();
        } catch (err) {
            setError('Network error');
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-white border border-gray-200 rounded-2xl w-full max-w-md shadow-xl animate-in fade-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-800">Add New Company</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-xs px-3 py-2 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Company Name</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Tata Motors"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7]"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Ticker</label>
                            <input
                                type="text"
                                value={formData.ticker}
                                onChange={e => setFormData({ ...formData, ticker: e.target.value })}
                                placeholder="TATAMOTORS"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 uppercase focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7]"
                            />
                        </div>
                        <div>
                            <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">ISIN</label>
                            <input
                                type="text"
                                value={formData.isin}
                                onChange={e => setFormData({ ...formData, isin: e.target.value })}
                                placeholder="INE155A01022"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 uppercase focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Sector</label>
                        <select
                            value={formData.sector}
                            onChange={e => setFormData({ ...formData, sector: e.target.value })}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7]"
                        >
                            <option value="">Select...</option>
                            {allSectors.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Or New Sector</label>
                        <input
                            type="text"
                            value={formData.newSector}
                            onChange={e => setFormData({ ...formData, newSector: e.target.value })}
                            placeholder="Electric Vehicles"
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7]"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#6B9FCC] hover:bg-[#4A7AAF] disabled:bg-gray-300 text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
                    >
                        {isLoading ? 'Adding...' : 'Add Company'}
                    </button>
                </form>
            </div>
        </div>
    );
}
