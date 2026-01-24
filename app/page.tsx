import { SectorList } from "@/components/SectorList";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-4">
      {/* Header */}
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tijori Terminal</h1>
          <p className="text-neutral-400 text-sm">Financial Intelligence Dashboard</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-neutral-800 px-3 py-1 rounded text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Online
          </div>
        </div>
      </header>

      {/* Metric Cards (Placeholder for now) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Transcripts Today", val: "12" },
          { label: "High Growth Detected", val: "3", highlight: true },
          { label: "Sectors Updated", val: "5" },
          { label: "Pending Processing", val: "0" }
        ].map((card, idx) => (
          <div key={idx} className="bg-neutral-800 p-4 rounded-lg border border-neutral-700">
            <div className="text-neutral-400 text-xs uppercase font-semibold">{card.label}</div>
            <div className={`text-2xl font-mono mt-1 ${card.highlight ? 'text-green-400' : 'text-neutral-100'}`}>
              {card.val}
            </div>
          </div>
        ))}
      </div>

      {/* Main Sector Feed */}
      <div className="max-w-7xl mx-auto">
        <SectorList />
      </div>
    </main>
  );
}
