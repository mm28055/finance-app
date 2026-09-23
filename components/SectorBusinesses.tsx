"use client";
/**
 * Tab 2 of a ranked sector note: one business-model profile per company —
 * what it sells, where the revenue comes from, who buys, how hard the product
 * is to make, and why customers stay. Grouped by segment in ranking order.
 */
import React from 'react';
import { BusinessProfile, CompanyVerdict, MixPart, STANCE_CONFIG } from '@/lib/sector-overviews';
import { RichText, StancePill, byRank } from './SectorOverviewBlocks';

// Categorical slices for a stacked bar, dark to light so adjacent parts separate.
const SLICE = ['#184f95', '#3987e5', '#6da7ec', '#9ec5f4', '#cde2fb', '#94a3b8', '#cbd5e1', '#e2e8f0'];
const DARK_TEXT_FROM = 3;

const LEVEL_STYLE: Record<BusinessProfile['difficulty']['level'], string> = {
    'Very high': 'bg-[#184f95] text-white',
    High: 'bg-[#3987e5] text-white',
    Medium: 'bg-[#cde2fb] text-[#184f95]',
    Low: 'bg-gray-100 text-gray-600',
};

const anchorId = (company: string) => `biz-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

function MixBar({ caption, parts, note }: { caption: string; parts: MixPart[]; note?: string }) {
    const total = parts.reduce((a, p) => a + p.share, 0) || 1;
    return (
        <div className="mt-2">
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-1">{caption}</div>
            <div className="flex h-3.5 rounded overflow-hidden border border-gray-200" role="img" aria-label={`${caption}: ${parts.map(p => `${p.label} ${p.share}%`).join(', ')}`}>
                {parts.map((p, i) => (
                    <div
                        key={p.label}
                        title={`${p.label}: ${p.share}%`}
                        style={{ width: `${(p.share / total) * 100}%`, background: SLICE[i % SLICE.length] }}
                        className={i > 0 ? 'border-l border-white' : ''}
                    />
                ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1">
                {parts.map((p, i) => (
                    <span key={p.label} className="flex items-center gap-1 text-[10.5px] text-gray-600">
                        <span
                            className="w-2.5 h-2.5 rounded-[2px] flex-shrink-0"
                            style={{ background: SLICE[i % SLICE.length], border: i >= DARK_TEXT_FROM ? '1px solid #CBD5E1' : undefined }}
                        />
                        {p.label} <span className="tabular-nums text-gray-800 font-medium">{p.share}%</span>
                    </span>
                ))}
            </div>
            {note && <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">{note}</p>}
        </div>
    );
}

function Label({ children }: { children: React.ReactNode }) {
    return <div className="text-[10px] font-semibold uppercase tracking-wide text-[#4A7AAF] mb-1">{children}</div>;
}

function ProfileCard({ p, verdict }: { p: BusinessProfile; verdict?: CompanyVerdict }) {
    return (
        <article
            id={anchorId(p.company)}
            className="border border-gray-200 rounded-lg bg-white px-4 py-3 scroll-mt-4"
            style={verdict ? { borderLeftWidth: 3, borderLeftColor: STANCE_CONFIG[verdict.stance].hex } : undefined}
        >
            <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                    <h4 className="text-[14px] font-semibold text-gray-800 leading-tight">{p.company}</h4>
                    <p className="text-[12px] text-gray-500 mt-0.5 leading-relaxed">{p.tagline}</p>
                </div>
                <div className="text-right flex-shrink-0">
                    {verdict && <StancePill stance={verdict.stance} />}
                    <div className="text-[10.5px] text-gray-400 mt-1">Revenue <span className="text-gray-700 font-medium">{p.revenue}</span></div>
                </div>
            </div>

            <div className="grid gap-x-6 gap-y-3 md:grid-cols-2 mt-3">
                <div className="space-y-3">
                    <section>
                        <Label>What it sells</Label>
                        <ul className="space-y-1.5">
                            {p.products.map(pr => (
                                <li key={pr.name} className="text-[12px] text-gray-600 leading-relaxed">
                                    <span className="font-semibold text-gray-800">{pr.name}.</span> <RichText text={pr.text} />
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section>
                        <Label>Who buys, and how</Label>
                        <ul className="space-y-1">
                            {p.customers.map((c, i) => (
                                <li key={i} className="flex gap-2 text-[12px] text-gray-600 leading-relaxed">
                                    <span className="mt-[7px] w-1 h-1 rounded-full bg-[#A5C4E2] flex-shrink-0" />
                                    <span><RichText text={c} /></span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
                <div className="space-y-3">
                    <section>
                        <Label>Where the money comes from</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.revenueText} /></p>
                        {p.mixes?.map(m => <MixBar key={m.caption} {...m} />)}
                    </section>
                    <section>
                        <Label>How hard it is to make</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed">
                            <span className={`inline-block mr-1.5 px-1.5 py-0.5 rounded text-[9.5px] font-semibold uppercase tracking-wide align-[1px] ${LEVEL_STYLE[p.difficulty.level]}`}>
                                {p.difficulty.level}
                            </span>
                            <RichText text={p.difficulty.text} />
                        </p>
                    </section>
                    <section>
                        <Label>Why customers stay</Label>
                        <p className="text-[12px] text-gray-600 leading-relaxed"><RichText text={p.moat} /></p>
                    </section>
                </div>
            </div>
        </article>
    );
}

export function BusinessProfiles({ profiles, verdicts }: {
    profiles: BusinessProfile[];
    verdicts: CompanyVerdict[];
}) {
    const byCompany = new Map(profiles.map(p => [p.company, p]));
    const verdictOf = new Map(verdicts.map(v => [v.company, v]));

    // Same grouping as the charts in Tab 1: segment by segment, best-ranked first.
    const groups: { segment: string; rows: BusinessProfile[] }[] = [];
    byRank(verdicts).forEach(v => {
        const p = byCompany.get(v.company);
        if (!p) return;
        const seg = v.segment ?? 'Other';
        let g = groups.find(x => x.segment === seg);
        if (!g) { g = { segment: seg, rows: [] }; groups.push(g); }
        g.rows.push(p);
    });
    profiles.filter(p => !verdictOf.has(p.company)).forEach(p => {
        let g = groups.find(x => x.segment === 'Other');
        if (!g) { g = { segment: 'Other', rows: [] }; groups.push(g); }
        g.rows.push(p);
    });

    return (
        <div className="space-y-5">
            {/* Jump list */}
            <nav className="flex flex-wrap gap-1.5" aria-label="Jump to a company">
                {groups.flatMap(g => g.rows).map(p => (
                    <a
                        key={p.company}
                        href={`#${anchorId(p.company)}`}
                        className="text-[10.5px] px-2 py-0.5 rounded-md border border-gray-200 text-gray-600 hover:border-[#A5C4E2] hover:text-[#4A7AAF] bg-white"
                    >
                        {p.company}
                    </a>
                ))}
            </nav>
            {groups.map(g => (
                <div key={g.segment}>
                    <div className="text-[10.5px] font-semibold uppercase tracking-wide text-[#6B9FCC] mb-2">{g.segment}</div>
                    <div className="space-y-3">
                        {g.rows.map(p => <ProfileCard key={p.company} p={p} verdict={verdictOf.get(p.company)} />)}
                    </div>
                </div>
            ))}
        </div>
    );
}
