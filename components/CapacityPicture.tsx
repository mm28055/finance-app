"use client";
import React from 'react';
import { type Checkpoint } from '@/lib/checkpoints/types';
import { type CapacityPictureData, PROJECT_STATUS_LABEL } from '@/lib/projects/types';
import { STATUS_STYLE } from './checkpoint-status';

// The capacity and projects block drawn as muted bars and a timeline, from the company's entry in
// lib/projects/pictures.json. Milestones stay live from the checkpoints so their ticks still settle.

const C = {
    track: '#F1F3F6',
    used: '#A9BCD3',      // muted steel blue
    tight: '#D8B0A9',     // muted rose: the bottleneck or full
    tightText: '#94564D',
    base: '#D3D8DF',      // today's capacity, grey
    added: '#B7CDBF',     // muted sage: what a project adds
    addedText: '#466553',
    line: '#334155',
};

const STATUS_TAG: Record<string, { bg: string; color: string; label: string }> = {
    planned: { bg: '#F3F4F6', color: '#6B7280', label: PROJECT_STATUS_LABEL.planned },
    building: { bg: '#EAF2FB', color: '#4A7AAF', label: PROJECT_STATUS_LABEL.building },
    started: { bg: '#ECF5EF', color: '#3F7A55', label: PROJECT_STATUS_LABEL.started },
    ramping: { bg: '#ECF5EF', color: '#3F7A55', label: PROJECT_STATUS_LABEL.ramping },
    'on hold': { bg: '#F5F0FA', color: '#6B3FA0', label: PROJECT_STATUS_LABEL['on hold'] },
    dropped: { bg: '#F3F4F6', color: '#9CA3AF', label: PROJECT_STATUS_LABEL.dropped },
    study: { bg: '#F3F4F6', color: '#6B7280', label: 'Under study' },
};

const fmt = (n: number) => n.toLocaleString('en-IN', { maximumFractionDigits: 2 });

// Labels longer than this go in a line under the bar instead of the narrow right-hand column.
const SHORT = 26;
const isLong = (s: React.ReactNode) => typeof s === 'string' && s.length > SHORT;

function Bar({ label, sub, right, rightSub, caption, children }: { label: string; sub?: string; right: React.ReactNode; rightSub?: React.ReactNode; caption?: React.ReactNode; children: React.ReactNode }) {
    const longRight = isLong(right);
    // A long description under the name also moves below the bar, so rows stay short.
    const longSub = !!sub && sub.length > 40;
    if (longSub) caption = <>{sub}{caption && <div className="mt-0.5">{caption}</div>}</>;
    if (longSub) sub = undefined;
    return (
        <div className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[8.5rem_minmax(0,1fr)_7.5rem] gap-x-3 gap-y-1 items-center">
            <div>
                <p className="text-[12px] text-gray-800 leading-tight">{label}</p>
                {sub && <p className="text-[10px] text-gray-400 leading-tight mt-0.5">{sub}</p>}
            </div>
            <div className="relative h-5 rounded order-last col-span-2 sm:order-none sm:col-span-1">{children}</div>
            <div className="text-right sm:text-left">
                {!longRight && <p className="text-[12px] text-gray-800 leading-tight">{right}</p>}
                {rightSub && <div className="text-[10px] text-gray-400 leading-tight mt-0.5">{rightSub}</div>}
            </div>
            {(longRight || caption) && (
                <div className="order-last col-span-2 sm:order-none sm:col-span-1 sm:col-start-2 text-[11px] leading-snug">
                    {longRight && <p className="text-gray-700">{right}</p>}
                    {caption && <div className="text-gray-400 text-[10px] mt-0.5">{caption}</div>}
                </div>
            )}
        </div>
    );
}

const Track = ({ width = 100, children, dashed }: { width?: number; children?: React.ReactNode; dashed?: boolean }) => (
    <div className={`absolute inset-y-0 left-0 rounded ${dashed ? 'border border-dashed border-gray-300 bg-white' : ''}`} style={{ width: `${width}%`, background: dashed ? undefined : C.track }}>{children}</div>
);

const Fill = ({ pct, color }: { pct: number; color: string }) => {
    const w = Math.max(0, Math.min(100, pct));
    return <div className="absolute inset-y-0 left-0" style={{ width: `${w}%`, background: color, borderRadius: w >= 100 ? 4 : '4px 0 0 4px' }} />;
};

function Split({ base, add, baseLabel, addLabel }: { base: number; add: number; baseLabel: string; addLabel: string }) {
    const total = base + add;
    return (
        <div className="absolute inset-0 flex gap-[2px]">
            {base > 0 && <div className="rounded-l flex items-center pl-1.5 text-[10px] text-gray-600 whitespace-nowrap overflow-hidden" style={{ width: `${(base / total) * 100}%`, background: C.base }}>{baseLabel}</div>}
            <div className={`${base > 0 ? 'rounded-r' : 'rounded'} flex items-center pl-1.5 text-[10px] whitespace-nowrap overflow-hidden`} style={{ width: `${(add / total) * 100}%`, background: C.added, color: C.addedText }}>{addLabel}</div>
        </div>
    );
}

const Tag = ({ status }: { status?: string }) => {
    const t = status ? STATUS_TAG[status] : undefined;
    return t ? <span className="inline-block px-1.5 py-px rounded text-[10px] font-semibold" style={{ background: t.bg, color: t.color }}>{t.label}</span> : null;
};

const Heading = ({ children }: { children: React.ReactNode }) => <p className="text-[10px] font-semibold text-gray-500 mb-2.5">{children}</p>;
const Note = ({ children, faint }: { children: React.ReactNode; faint?: boolean }) => (
    <p className={`${faint ? 'text-[10px] text-gray-400 mt-1' : 'text-[11px] text-gray-500 mt-2'} sm:ml-[9.25rem] leading-snug`}>{children}</p>
);

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

const DOT: Record<string, React.CSSProperties> = {
    done: { background: C.used, border: `2px solid ${C.used}` },
    next: { border: `2px solid ${C.used}` },
    later: { border: `2px solid ${C.added}` },
    maybe: { border: '2px dashed #9CA3AF' },
};

export function CapacityPicture({ data, checkpoints }: { data: CapacityPictureData; checkpoints: Checkpoint[] }) {
    const byId = new Map(checkpoints.map(c => [c.id, c]));
    const maxMoney = Math.max(0, ...(data.money?.items || []).map(m => m.total || 0));
    const stops = data.timeline || [];
    const cols = Math.min(4, Math.max(1, stops.length));
    return (
        <div className="flex flex-col gap-5">
            {data.lines && data.lines.items.length > 0 && (
                <div>
                    <Heading>{data.lines.heading}</Heading>
                    <div className="flex flex-col gap-3">
                        {data.lines.items.map(l => (
                            <div key={l.name}>
                                <Bar label={l.name} sub={l.size} right={l.usedLabel || `${l.usedPct}% used`}
                                    rightSub={<>
                                        {l.marker && !isLong(l.marker.label) && <div>{l.marker.label}</div>}
                                        {l.tight && <span className="inline-block px-1.5 py-px rounded text-[10px] font-semibold mt-0.5" style={{ background: '#F6ECEA', color: C.tightText }}>{l.tightLabel || 'full'}</span>}
                                    </>}
                                    caption={l.marker && isLong(l.marker.label) ? l.marker.label : undefined}>
                                    <Track>
                                        <Fill pct={l.usedPct} color={l.tight ? C.tight : C.used} />
                                        {l.marker && <div className="absolute -top-1 -bottom-1" style={{ left: `${Math.min(100, l.marker.pct)}%`, borderLeft: `2px dashed ${C.line}` }} />}
                                    </Track>
                                </Bar>
                                {l.note && <Note faint>{l.note}</Note>}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {(data.adds || []).map(a => (
                <div key={a.heading}>
                    <Heading>{a.heading}</Heading>
                    <div className="flex flex-col gap-3">
                        {a.bars.map(b => (
                            <Bar key={b.name} label={b.name} sub={b.sub} right={b.right}>
                                <Split base={b.base} add={b.add} baseLabel={b.baseLabel} addLabel={b.addLabel} />
                            </Bar>
                        ))}
                    </div>
                    {(a.notes || []).map(n => <Note key={n}>{n}</Note>)}
                    {a.caveat && <Note faint>{a.caveat}</Note>}
                </div>
            ))}

            {data.money && data.money.items.length > 0 && (
                <div>
                    <Heading>{data.money.heading || 'Money: spent against planned'}</Heading>
                    <div className="flex flex-col gap-3">
                        {data.money.items.map(m => {
                            const width = m.total && maxMoney ? (m.total / maxMoney) * 100 : 100;
                            const known = m.total !== undefined && m.spent !== undefined;
                            return (
                                <Bar key={m.name} label={m.name} sub={m.sub} right={m.right} rightSub={<Tag status={m.status} />}>
                                    {known ? (
                                        <Track width={width}>
                                            <Fill pct={(m.spent! / m.total!) * 100} color={C.used} />
                                        </Track>
                                    ) : (
                                        <Track width={width} dashed>
                                            {m.total !== undefined && <span className="absolute left-1.5 inset-y-0 flex items-center text-[10px] text-gray-400 whitespace-nowrap">spend so far not given</span>}
                                        </Track>
                                    )}
                                </Bar>
                            );
                        })}
                    </div>
                    {maxMoney > 0 && <Note faint>Bar lengths compare project sizes; the filled part is money spent so far.</Note>}
                </div>
            )}

            {stops.length > 0 && (
                <div>
                    <Heading>Timeline</Heading>
                    <div className="relative">
                        <div className="hidden sm:block absolute left-1 right-1 top-[5px] h-px bg-gray-300" />
                        <style>{`@media (min-width:640px){.cap-tl{grid-template-columns:repeat(var(--cols),minmax(0,1fr))}}`}</style>
                        <div className="cap-tl grid grid-cols-2 gap-3 relative" style={{ ['--cols' as string]: cols }}>
                            {stops.map(s => {
                                const ms = (s.milestones || []).map(id => byId.get(id)).filter((c): c is Checkpoint => !!c);
                                return (
                                    <div key={s.when + (s.text || '')} className="min-w-0">
                                        <div className="w-3 h-3 rounded-full mb-2 relative bg-white" style={DOT[s.tone]} />
                                        <p className="text-[12px] font-semibold text-gray-800 mb-1">{s.when}</p>
                                        {s.text && <p className="text-[11px] text-gray-600 leading-snug">{s.text}</p>}
                                        {ms.length > 0 && <ul className={`flex flex-col gap-1.5 ${s.text ? 'mt-1.5' : ''}`}>{ms.map(c => <Milestone key={c.id} c={c} />)}</ul>}
                                        {s.sub && <p className="text-[10px] text-gray-400 mt-1">{s.sub}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {(data.notes || []).length > 0 && (
                <ul className="flex flex-col gap-1">
                    {data.notes!.map(n => <li key={n} className="text-[11px] text-gray-500 leading-snug">{n}</li>)}
                </ul>
            )}

            <p className="text-[10px] text-gray-400 pt-2 border-t border-gray-100">Source: {data.source}</p>
        </div>
    );
}
