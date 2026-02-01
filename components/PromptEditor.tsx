
"use client";
import React, { useEffect, useState } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';

interface PromptConfig {
    basePrompt: string;
    deltaInstructions: string;
}

export const PromptEditor = ({ onClose }: { onClose: () => void }) => {
    const [config, setConfig] = useState<PromptConfig>({ basePrompt: '', deltaInstructions: '' });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetch('/api/admin/prompt')
            .then(res => res.json())
            .then(data => {
                if (data.error) throw new Error(data.error);
                setConfig(data);
                setLoading(false);
            })
            .catch(err => {
                toast.error("Failed to load prompt: " + err.message);
                onClose();
            });
    }, [onClose]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch('/api/admin/prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            if (res.ok) {
                toast.success("Prompt Configurations Saved!");
                onClose();
            } else {
                throw new Error("Save failed");
            }
        } catch (e) {
            toast.error("Failed to save changes");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-4 text-xs text-gray-500">Loading Configuration...</div>;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">AI Analyst Configuration</h2>
                        <p className="text-xs text-gray-500">Modify the system prompt for Gemini Pro</p>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Editor Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/30">

                    {/* Base Prompt */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Core Analysis Prompt
                        </label>
                        <p className="text-[11px] text-gray-400 mb-3">
                            Defines the Persona, JSON Structure, and Markdown format for standard analysis.
                        </p>
                        <textarea
                            value={config.basePrompt}
                            onChange={(e) => setConfig({ ...config, basePrompt: e.target.value })}
                            className="w-full h-96 font-mono text-xs p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-y leading-relaxed"
                            spellCheck={false}
                        />
                    </div>

                    {/* Delta Prompt */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Delta / Comparison Instructions
                        </label>
                        <p className="text-[11px] text-gray-400 mb-3">
                            Appended ONLY when previous quarter context is available. Defines diff logic.
                        </p>
                        <textarea
                            value={config.deltaInstructions}
                            onChange={(e) => setConfig({ ...config, deltaInstructions: e.target.value })}
                            className="w-full h-48 font-mono text-xs p-4 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-y leading-relaxed"
                            spellCheck={false}
                        />
                    </div>

                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2 text-xs font-semibold text-white bg-[#6B9FCC] hover:bg-[#4A7AAF] rounded-lg shadow-sm active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {saving ? (
                            <>Saving...</>
                        ) : (
                            <>
                                <Save className="w-3.5 h-3.5" />
                                Save Configuration
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
