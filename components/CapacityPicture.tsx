"use client";
import React from 'react';
import { type Checkpoint } from '@/lib/checkpoints/types';
import { STATUS_STYLE } from './checkpoint-status';

// Pilot (23 Oct 2026): the capacity and projects block drawn as bars and a timeline, for Pitti
// Engineering only. Figures are copied from lib/projects for this company; milestones stay live
// from the checkpoints so their ticks still settle. If the pilot is kept, this becomes data-driven.
export const PICTURE_COMPANIES = new Set(['Pitti Engineering']);

const C = {
    track: '#F1F3F6',
    used: '#A9BCD3',      // muted steel blue
    tight: '#D8B0A9',     // muted rose: the bottleneck
    tightText: '#94564D',
    base: '#D3D8DF',      // today's capacity, grey
    added: '#B7CDBF',     // muted sage: what a project adds
    addedText: '#466553',
    line: '#334155',
};

function Bar({ label, sub, right, rightSub, children }: { label: string; sub: string; right: React.ReactNode; rightSub?: React.ReactNode; children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[8.5rem_minmax(0,1fr)_7.5rem] gap-x-3 gap-y-1.5 items-center">
            <div>
                <p className="text-[12px] text-gray-800 leading-tight">{label}</p>
                <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{sub}</p>
            </div>
            <div className="relative h-5 rounded order-last col-span-2 sm:order-none sm:col-span-1" style={{ background: C.track }}>{children}</div>
            <div className="text-right sm:text-left">
                <p className="text-[12px] text-gray-800 leading-tight">{right}</p>
                {rightSub && <div className="text-[10px] text-gray-400 leading-tight mt-0.5">{rightSub}</div>}
            </div>
        </div>
    );
}

const Fill = ({ pct, color }: { pct: number; color: string }) => (
    <div className="absolute inset-y-0 left-0 rounded-l" style={{ width: `${pct}%`, background: color, borderRadius: pct >= 100 ? 4 : undefined }} />
);

function Split({ base, add, baseLabel, addLabel }: { base: number; add: number; baseLabel: string; addLabel: string }) {
    const total = base + add;
    return (
        <div className="absolute inset-0 flex gap-[2px]">
            <div className="rounded-l flex items-center pl-1.5 text-[10px] text-gray-600 whitespace-nowrap overflow-hidden" style={{ width: `${(base / total) * 100}%`, background: C.base }}>{baseLabel}</div>
            <div className="rounded-r flex items-center pl-1.5 text-[10px] whitespace-nowrap overflow-hidden" style={{ width: `${(add / total) * 100}%`, background: C.added, color: C.addedText }}>{addLabel}</div>
        </div>
    );
}

const Tag = ({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) => (
    <span className="inline-block px-1.5 py-px rounded text-[10px] font-semibold" style={{ background: bg, color }}>{children}</span>
);

const Heading = ({ children }: { children: React.ReactNode }) => <p className="text-[10px] font-semibold text-gray-500 mb-2.5">{children}</p>;

function Milestone({ c }: { c: Checkpoint }) {
    const s = STATUS_STYLE[c.status];
    const Icon = s.icon;
    return (
        <li className="flex items-start gap-1.5">
            <Icon className={`w-3.5 h-3.5 mt-px shrink-0 ${s.cls}`} />
            <span className="text-[11px] text-gray-600 leading-snug">{c.text}{c.status !== 'pending' && <span className={`ml-1 font-semibold ${s.cls}`}>{s.label}</span>}</span>
        </li>
    );
}

function Stop({ when, dot, children }: { when: string; dot: React.CSSProperties; children: React.ReactNode }) {
    return (
        <div className="min-w-0">
            <div className="w-3 h-3 rounded-full mb-2 relative bg-white" style={dot} />
            <p className="text-[12px] font-semibold text-gray-800 mb-1">{when}</p>
            {children}
        </div>
    );
}

export function CapacityPicture({ milestones }: { milestones: (projectId: string) => Checkpoint[] }) {
    const expansion = milestones('pitti-engineering-150cr-expansion');
    const hyderabad = milestones('pitti-engineering-hyderabad-foundry');
    return (
        <div className="flex flex-col gap-5">
            <div>
                <Heading>How full each line is today (Q1 FY27)</Heading>
                <div className="flex flex-col gap-3">
                    <Bar label="Laminations and sheet metal" sub="108,000 t a year" right="73% used" rightSub="FY27 target 82,000 t = 76% (dashed)">
                        <Fill pct={73} color={C.used} />
                        <div className="absolute -top-1 -bottom-1" style={{ left: '76%', borderLeft: `2px dashed ${C.line}` }} />
                    </Bar>
                    <Bar label="Castings and fabrication" sub="about 24,000 t a year" right="72% used">
                        <Fill pct={72} color={C.used} />
                    </Bar>
                    <Bar label="Machining" sub="7.2 lakh machine hours" right="86% used" rightSub={<Tag bg="#F6ECEA" color={C.tightText}>the bottleneck</Tag>}>
                        <Fill pct={86} color={C.tight} />
                    </Bar>
                </div>
            </div>

            <div>
                <Heading>What the Hyderabad plant adds (from Q1 FY30)</Heading>
                <div className="flex flex-col gap-3">
                    <Bar label="Castings" sub="to 36,000 t a year" right="about +46%">
                        <Split base={24600} add={11400} baseLabel="today ~24,000 t" addLabel="+11,400 t" />
                    </Bar>
                    <Bar label="Machine hours" sub="to 10.8 lakh" right="+50%">
                        <Split base={7.2} add={3.6} baseLabel="today 7.2 lakh" addLabel="+3.6 lakh" />
                    </Bar>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 sm:ml-[9.25rem]">About ₹350cr of extra sales a year at the guided 1.2x asset turn</p>
            </div>

            <div>
                <Heading>What the Bengaluru plant adds (by FY31)</Heading>
                <div className="flex flex-col gap-3">
                    <Bar label="Laminations" sub="to 160,000 t a year" right="about +48%">
                        <Split base={108000} add={52000} baseLabel="today 108,000 t" addLabel="+52,000 t" />
                    </Bar>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 sm:ml-[9.25rem]">Machining to 13.14 lakh hours. One new plant that brings its Karnataka units together</p>
            </div>

            <div>
                <Heading>Money: spent against planned</Heading>
                <div className="flex flex-col gap-3">
                    <Bar label="₹150cr expansion" sub="lamination, casting and machining" right="₹150cr" rightSub={<Tag bg="#ECF5EF" color="#3F7A55">Ramping up</Tag>}>
                        <Fill pct={100} color={C.used} />
                    </Bar>
                    <Bar label="Hyderabad plant" sub="30% land and buildings, 70% machines" right="₹60cr of ₹290cr" rightSub={<Tag bg="#EAF2FB" color="#4A7AAF">Being built</Tag>}>
                        <Fill pct={20.7} color={C.used} />
                        <span className="absolute left-1.5 inset-y-0 flex items-center text-[10px] text-gray-700">₹60cr spent</span>
                    </Bar>
                    <Bar label="Bengaluru plant" sub="from own cash and debt" right="₹450cr, none spent" rightSub={<Tag bg="#F3F4F6" color="#6B7280">Planned</Tag>}>
                        <div className="absolute inset-0 rounded border border-dashed border-gray-300 bg-white" />
                    </Bar>
                </div>
            </div>

            <div>
                <Heading>Timeline</Heading>
                <div className="relative">
                    <div className="hidden sm:block absolute left-1 right-1 top-[5px] h-px bg-gray-300" />
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                        <Stop when="Q1 FY27" dot={{ background: C.used, border: `2px solid ${C.used}` }}>
                            <p className="text-[11px] text-gray-600 leading-snug">₹150cr expansion running, a quarter early; staff already hired. Sheet metal to 108,000 t, room for the FY27 targets of 82,000 t laminations and 17,000 t castings</p>
                            <p className="text-[10px] text-gray-400 mt-1">Q4 FY26 call had said end of H1 FY27</p>
                        </Stop>
                        <Stop when="Q4 FY27 checks" dot={{ border: `2px solid ${C.used}` }}>
                            <ul className="flex flex-col gap-1.5">{expansion.map(c => <Milestone key={c.id} c={c} />)}</ul>
                        </Stop>
                        <Stop when="Q1 FY30" dot={{ border: `2px solid ${C.added}` }}>
                            <ul className="flex flex-col gap-1.5">{hyderabad.map(c => <Milestone key={c.id} c={c} />)}</ul>
                            <p className="text-[10px] text-gray-400 mt-1">Land acquisition started; date unchanged since May</p>
                        </Stop>
                        <Stop when="By FY31" dot={{ border: '2px dashed #9CA3AF' }}>
                            <p className="text-[11px] text-gray-600 leading-snug">Bengaluru plant ready: laminations to 160,000 t</p>
                            <p className="text-[10px] text-gray-400 mt-1">Board approved 22 Oct 2026</p>
                        </Stop>
                    </div>
                </div>
            </div>

            <p className="text-[10px] text-gray-400 pt-2 border-t border-gray-100">Source: Q1 FY27 call (Aug 2026), Q4 FY26 call (May 2026), board approval and press release 22 Oct 2026 (NSE), and sector note</p>
        </div>
    );
}
