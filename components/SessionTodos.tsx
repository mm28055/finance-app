import { MessageSquare } from 'lucide-react';
import type { SessionTodo } from '@/lib/session-todos';

// Header chip: what needs a session with Claude. Hidden when there is nothing.
export function SessionTodos({ todos }: { todos: SessionTodo[] }) {
    if (!todos.length) return null;
    return (
        <details className="relative">
            <summary className="list-none cursor-pointer select-none flex items-center gap-1.5 bg-[#F5F3FF] border border-[#DDD6FE] text-[#6D28D9] px-2.5 py-1 rounded-lg text-[11px] font-medium">
                <MessageSquare className="w-3.5 h-3.5" /> Needs a session · {todos.length}
            </summary>
            <div className="absolute right-0 mt-2 w-80 max-w-[90vw] z-30 bg-white border border-gray-200 rounded-xl shadow-lg p-3">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Open a session with Claude for</p>
                <ul className="flex flex-col gap-2">
                    {todos.map(t => (
                        <li key={t.id} className="text-xs text-gray-700 leading-snug">• {t.text}</li>
                    ))}
                </ul>
            </div>
        </details>
    );
}
