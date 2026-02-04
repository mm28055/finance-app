"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, Bot, Sparkles, Trash2 } from 'lucide-react';
import { useSectorChat } from '@/context/SectorChatContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
}

const STORAGE_KEY_PREFIX = 'sector_chat_';

function getStorageKey(sector: string): string {
    return `${STORAGE_KEY_PREFIX}${sector.replace(/\s+/g, '_').toLowerCase()}`;
}

function loadChatHistory(sector: string): Message[] {
    if (typeof window === 'undefined') return [];
    try {
        const stored = localStorage.getItem(getStorageKey(sector));
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
}

function saveChatHistory(sector: string, messages: Message[]): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(getStorageKey(sector), JSON.stringify(messages));
    } catch (e) {
        console.error('Failed to save chat history:', e);
    }
}

function clearChatHistory(sector: string): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(getStorageKey(sector));
}

export function SectorChat() {
    const { isOpen, activeSector, closeChat } = useSectorChat();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [isLoadingHistory, setIsLoadingHistory] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Load history when sector changes
    useEffect(() => {
        if (isOpen && activeSector) {
            setMessages([]); // Clear previous state first
            setIsLoadingHistory(true);
            fetch(`/api/chat/history?sector=${encodeURIComponent(activeSector)}`)
                .then(res => res.json())
                .then(data => {
                    if (Array.isArray(data)) setMessages(data);
                })
                .catch(err => console.error("Failed to load history:", err))
                .finally(() => setIsLoadingHistory(false));
        }
    }, [isOpen, activeSector]);

    // Note: We no longer auto-save to localStorage. 
    // Messages are saved to DB individually as they are sent/received.

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleClearHistory = useCallback(async () => {
        if (activeSector) {
            try {
                await fetch(`/api/chat/history?sector=${encodeURIComponent(activeSector)}`, {
                    method: 'DELETE'
                });
                setMessages([]);
            } catch (e) {
                console.error("Failed to clear history:", e);
            }
        }
    }, [activeSector]);

    const handleSend = async () => {
        if (!input.trim() || !activeSector) return;

        const timestamp = Date.now();
        const userMsg: Message = {
            id: timestamp.toString(),
            role: 'user',
            content: input,
            timestamp
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            // 1. Save User Message to DB
            await fetch('/api/chat/history', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...userMsg, sector: activeSector })
            });

            // 2. Get AI Response
            const res = await fetch('/api/chat/sector', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sector: activeSector,
                    message: input
                })
            });

            if (!res.ok) throw new Error("API Failed");

            const data = await res.json();
            const aiTimestamp = Date.now();

            const botMsg: Message = {
                id: aiTimestamp.toString(),
                role: 'assistant',
                content: data.content,
                timestamp: aiTimestamp
            };
            setMessages(prev => [...prev, botMsg]);

            // 3. Save AI Message to DB
            await fetch('/api/chat/history', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...botMsg, sector: activeSector })
            });

        } catch (err) {
            console.error("Chat Error:", err);
            const errorMsg: Message = {
                id: 'err',
                role: 'assistant',
                content: "Sorry, I had trouble connecting. Please try again.",
                timestamp: Date.now()
            };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 md:inset-auto md:bottom-6 md:right-6 md:w-[600px] md:h-[800px] bg-white md:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col animate-in slide-in-from-bottom-5 duration-300 overflow-hidden">

            {/* Header */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white/80 backdrop-blur-md z-10 sticky top-0">
                <div className="flex items-center gap-2">
                    <div className="bg-[#6B9FCC] p-2 rounded-lg text-white">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-800">Sector Intelligence</h3>
                        <p className="text-[10px] text-gray-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="font-medium text-[#6B9FCC]">{activeSector}</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {messages.length > 0 && (
                        <button
                            onClick={handleClearHistory}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            title="Clear chat history"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    )}
                    <button onClick={closeChat} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Chat Area - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#FAFBFC]">
                {isLoadingHistory && (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6B9FCC]"></div>
                    </div>
                )}
                {!isLoadingHistory && messages.length === 0 && (
                    <div className="text-center text-gray-400 text-xs mt-24">
                        <Bot className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                        <p className="text-sm text-gray-500">Ask about <strong className="text-[#6B9FCC]">{activeSector}</strong></p>
                        <div className="mt-3 space-y-1 text-[11px] text-gray-400">
                            <p>"Compare revenue growth across top players"</p>
                            <p>"Who has the strongest margin guidance?"</p>
                            <p>"What are the key risks mentioned?"</p>
                        </div>
                    </div>
                )}
                {messages.map(msg => (
                    <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`
                            max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed shadow-sm
                            ${msg.role === 'user'
                                ? 'bg-[#2D3748] text-white rounded-br-none'
                                : 'bg-white border border-gray-100 text-gray-700 rounded-bl-none'}
                        `}>
                            {msg.role === 'user' ? (
                                msg.content
                            ) : (
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                                        h1: ({ node, ...props }) => <h1 className="text-base font-bold text-gray-800 mb-2 mt-3 first:mt-0" {...props} />,
                                        h2: ({ node, ...props }) => <h2 className="text-sm font-bold text-gray-800 mb-2 mt-3 first:mt-0" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xs font-semibold text-[#6B9FCC] mb-1 mt-2" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1 marker:text-[#A5C4E2]" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                                        li: ({ node, ...props }) => <li className="text-sm" {...props} />,
                                        strong: ({ node, ...props }) => <strong className="text-gray-900 font-semibold" {...props} />,
                                        code: ({ node, ...props }) => <code className="bg-gray-100 text-[#6B9FCC] px-1 py-0.5 rounded text-xs" {...props} />,
                                        blockquote: ({ node, ...props }) => <blockquote className="border-l-2 border-[#A5C4E2] pl-3 italic text-gray-600" {...props} />,
                                        table: ({ node, ...props }) => <table className="w-full text-xs border-collapse my-2" {...props} />,
                                        th: ({ node, ...props }) => <th className="border border-gray-200 bg-gray-50 px-2 py-1 text-left font-semibold" {...props} />,
                                        td: ({ node, ...props }) => <td className="border border-gray-200 px-2 py-1" {...props} />,
                                    }}
                                >
                                    {msg.content}
                                </ReactMarkdown>
                            )}
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
                            <span className="w-2 h-2 bg-[#A5C4E2] rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-[#A5C4E2] rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-[#A5C4E2] rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 bg-white md:rounded-b-2xl">
                <div className="relative">
                    <input
                        type="text"
                        placeholder={`Ask about ${activeSector}...`}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-800 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:border-[#A5C4E2] focus:ring-2 focus:ring-[#D4E5F7] focus:bg-white placeholder:text-gray-400 transition-all"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#6B9FCC] text-white rounded-lg hover:bg-[#4A7AAF] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
