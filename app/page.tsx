import { SectorList, SectorData } from "@/components/SectorList";
import { getDashboardDataLight, getTranscriptStats } from "@/lib/data-service";
import { TranscriptStats } from "@/components/TranscriptStats";
import { SessionTodos } from "@/components/SessionTodos";
import { sessionTodos } from "@/lib/session-todos";
import { ScrollText, Target } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [sectorList, stats, todos] = await Promise.all([
    getDashboardDataLight(),
    getTranscriptStats(),
    sessionTodos()
  ]);

  return (
    <main className="min-h-screen bg-[#FAFBFC] p-6">
      {/* Header */}
      <header className="max-w-6xl flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Manish Dashboard</h1>
          <p className="text-gray-400 text-xs">Real-Time Earning Intelligence</p>
          <p className="text-gray-400 text-[11px] mt-0.5">I am hobbyist investor. This is for my personal use. Reach out at manishmaheswari@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <SessionTodos todos={todos} />
          {[
            { href: '/filings', label: 'Filings', Icon: ScrollText },
            { href: '/scorecard', label: 'Scorecard', Icon: Target },
          ].map(({ href, label, Icon }) => (
            <a key={href} href={href} className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm text-xs font-semibold text-gray-700 hover:border-[#6B9FCC] hover:text-[#4A7AAF] transition-colors">
              <span className="w-6 h-6 rounded-md bg-[#F0F7FF] flex items-center justify-center text-[#6B9FCC]">
                <Icon className="w-3.5 h-3.5" />
              </span>
              {label}
            </a>
          ))}
          <TranscriptStats stats={stats} />
        </div>
      </header>

      {/* Sector List */}
      <div className="max-w-6xl">
        <SectorList sectors={sectorList} />
      </div>
    </main>
  );
}
