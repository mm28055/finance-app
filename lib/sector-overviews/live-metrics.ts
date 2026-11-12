// The sector page's chart figures, rebuilt from each company's filed accounts instead of the
// figures typed into the note. scripts/sync-sector-charts.ts reads every note company's Screener
// page (nightly, and again the morning after its results) into live-metrics.json; this file turns
// those raw figures into the chart grid's series and the valuation table's net debt and trailing
// operating profit. Server code only (the JSON is read by lib/sector-overviews/index.ts).
import type { MetricSeries, SectorOverview, ValuationBlock, CompanyVerdict } from './types';

type N = number | null;

/** One company's filed figures, as Screener shows them. Labels are Screener's ("Sep 2026"). */
export interface LiveFigures {
    /** Screener page read, so later runs skip the search. */
    url: string;
    view: 'consolidated' | 'standalone';
    /** Day the page was read (India date). */
    at: string;
    /** Results date (from the calendar) whose quarter the page already shows. */
    got?: string;
    /** Half-yearly reporter (SME): the quarter columns are half-years. */
    half?: boolean;
    q: string[]; qSales: N[]; qOp: N[]; qGnpa?: N[]; qNnpa?: N[];
    y: string[]; sales: N[]; op: N[]; np: N[]; interest: N[]; ocf: N[];
    /** Screener's free cash flow; `capex` (fixed assets purchased) is preferred where read. */
    fcf: N[]; capex?: N[]; roce: N[]; roe: N[]; ccc: N[];
    b: string[]; borrow: N[]; cash: N[]; inv: N[]; block: N[]; equity: N[]; assets: N[];
}

export interface LiveStore { updated: string; companies: Record<string, LiveFigures> }

/**
 * Companies whose treasury investments (liquid funds, bonds) count as cash in net debt, as the
 * notes counted them. Everyone else's investments are treated as stakes, not cash.
 */
export const INVESTMENTS_AS_CASH = new Set([
    'Elecon Engg.Co', 'Triveni Turbine', 'Shilchar Tech.', 'Voltamp Transformers', 'Kirloskar Pneumatic', 'RHI Magnesita', 'IFGL Refractories',
    'Data Patterns (India)', 'Zen Technologies', 'Unimech Aerospace', 'ideaForge Technology', 'Timken India', 'SKF India (Industrial)', 'SKF India',
    'Harsha Engineers Int', 'RR Kabel Ltd.', 'Finolex Cables', 'Frontier Springs', 'LMW', 'Praj Industries', 'Ador Welding', 'Diffusion Engineers',
    'Carborundum Univer.', 'Subros', 'Inox India', 'Borosil Renewables', 'HBL Engineering', 'Huhtamaki India', 'Alivus Life Sciences', 'Concord Biotech',
    'Supriya Lifescience', 'Acutaas Chemicals', 'Blue Jet Healthcare', 'IOL Chem & Pharma', 'Anthem Biosciences', 'Cohance Lifesciences', 'Windlas Biotech',
    'Apcotex Inds', 'Delhivery', 'Shadowfax Tech.', 'BLS International', 'Le Travenues Techno', 'Thomas Cook India', 'Yatra Online', 'Control Print',
    'Techno Electric &Eng', 'Man Industries (I)', 'Va Tech Wabag', 'Enviro Infra Engine.', 'Garware Hi-Tech', 'Finolex Inds', 'Prince Pipes', 'Poly Medicure',
    'Laxmi Denta', 'Vasa Denticity', 'OSEL Devices', 'Prevest Denpro', 'AIA Engineering', 'Happy Forgings', 'Steelcast', 'Neetu Yoshi', 'Swiggy',
    'Urban Company', 'Pine Labs', 'TBO Tek', 'Cartrade Tech', 'BlackBuck', 'Matrimony.com', 'Godavari Power', 'Narayana Hrudayalaya', 'Global Health (Medanta)',
    'Krishna Inst.Medi', 'Yatharth Hospital', 'Jupiter Life Line Hospitals', 'Artemis Medicare', 'Shalby', 'HealthCare Global (HCG)', 'Gulf Oil Lubricant',
    'Asian Energy Services', 'Jindal Drilling and Industries', 'Ganesh Benzoplast', 'Ather Energy', 'Ola Electric', 'Ajax Engineering', 'VST Tillers Tractors',
    'Zelio E-Mobility', 'Action Const.Eq.', 'Waaree Renewables', 'Emmvee Photovoltaic Power Ltd', 'Vikram Solar', 'Saatvik Green', 'Websol Energy System Ltd',
    'Sudeep Pharma', 'Jeena Sikho Lifecare', 'Zota Health Care', 'Advanced Enzyme', 'Accent Microcell', 'Hexagon Nutrition', 'Chalet Hotels', 'EIH',
    'Leela Palaces Hotels', 'Ventive Hospitality', 'Lemon Tree Hotels', 'Juniper Hotels', 'Mahindra Holi.&Resor', 'Samhi Hotels', 'Brigade Hotel Ven.',
    'Viceroy Hotels', 'Royal Orchid Hotels', 'Sumitomo Chemical India', 'Chambal Fert & Chem', 'Sharda Cropchem', 'GSFC', 'Dhanuka Agritech', 'Rallis India',
    'Insecticides (India)', 'India Pesticides', 'WeWork India', 'Smartworks Coworking', 'Nirlon', 'Quess Corp', 'MSTC', 'Indiqube Spaces', 'CMS Info Systems',
    'Awfis Space Solutions', 'TeamLease Services', 'Updater Services', 'Krystal Integrated Services', 'Syngene International', 'Indegene', 'Nephrocare Health',
    '3B Blackbio Diagnostics', 'Dr Lal PathLabs', 'Thyrocare Technologies', 'Vedant Fashions (Manyavar)', 'Indiamart Intermesh', 'Brainbees Solutions',
    'Medplus', 'Aditya Birla Fashion & Retail', 'Crizac', 'Go Fashion (India) (GoColors)', 'Sastasundar Ventures', 'Zydus Wellness', 'CCL Products',
    'Manorama Industries', 'Avanti Feeds', 'KRBL', 'Kaveri Seed Company', 'ADF Foods', 'NBCC', 'Engineers India', 'Welspun Enterp', 'Ircon Intl.', 'Rites',
    'Inventurus Knowledge Solutions', 'Tata Technologies', 'Netweb Technologies', 'Affle 3i', 'Sagility', 'KPIT Technologies', 'Black Box', 'E2E Networks',
    'Fractal Analytics', 'Amagi Media Labs', 'Cyient', 'RateGain Travel Tech', 'Zensar Technologies', 'Intellect Design Arena', 'Birlasoft', 'Sonata Software',
    'Newgen Software', 'Tanla Platforms', 'eMudhra', 'Latent View Analytic', 'CE Info Systems', 'Mastek', 'Happiest Minds', 'Datamatic Global Ser',
    'Capillary Technologies', 'Aurionpro Solutions', 'Network People Services', 'Route Mobile', 'R Systems International', 'Protean eGov', 'Zaggle Prepaid',
    'Mobavenue Ai Tech', 'Saksoft', 'Nucleus Software', 'Xtranet Technologies', 'Aurum Proptech', 'Ceinsys Tech', 'InfoBeans Technologies', 'Expleo Solutions',
    'IZMO', 'Digitide Solutions', 'TAC Security (Tac Infosec)', 'Unicomm. eSolutions', 'Onward Technologies', 'Fidel Softech', 'Gujarat Fluorochemic',
    'Navin Fluorine Intl', 'Himadri Speciality', 'Deepak Nitrite', 'Aarti Industries', 'Deepak Fert & Petro', 'Tata Chemicals', 'Supreme Petrochem', 'BASF India',
    'Privi Speciality Che', 'Anupam Rasayan', 'PCBL Chemical', 'Alkyl Amines', 'GNFC', 'Clean Science', 'Galaxy Surfactants', 'Tanfac Industries',
    'Balaji Amines', 'Neogen Chemicals', 'Fineotex Chemical', 'Archean Chemical Industries', 'Ellen. Indl. Gas', 'Laxmi Organic', 'Yasho Industries',
    'Vishnu Chemicals', 'Epigral', 'Tatva Chintan', 'Refex Industries', 'GHCL', 'Styrenix Performance', 'Premier Explosives', 'Kiri Industries', 'Nocil',
    'Chemplast Sanmar', 'DDev Plastiks', 'Stallion India Fluor', 'Rossari Biotech', 'JG Chemicals', 'SH Kelkar & Co', 'Camlin Fine', 'IG Petrochem.',
    'Oriental Aromatics', 'Sh. Pushkar Chem.', 'DCW', 'Excel Industries', 'Sudarshan Chemicals', 'Fairchem Organics', 'Chembond Chemicals', 'Voltas',
    'Blue Star', 'Metro Brands', 'Kajaria Ceramics', 'Century Plyboards(I)', 'Honasa Consumer (Mamaearth)', 'Kansai Nerolac', 'Akzo Nobel',
    'Crompt.Greaves Cons.', 'V-Guard Industri', 'Whirlpool India', 'Bata India', 'Cello World', 'Relaxo Footwears', 'Eureka Forbes', 'TTK Prestige',
    'Jyothy Labs', 'Cera Sanitaryware', 'Sheela Foam', 'Borosil', 'Campus Activewear', 'Stylam Industrie', 'Greenlam Industries', 'Indigo Paints',
    'IFB Industries', 'Wakefit Innovations', 'Symphony', 'Bajaj Electricals', 'Greenply Industries', 'Orient Electric', 'Mayur Uniquoters', 'Carysil',
    'Stove Kraft', 'Somany Ceramics', 'Epack Durable', 'Eveready Industries India', 'Sirca Paints', 'Greenpanel Inds.', 'Hindware Home Innov.',
    'All Time Plastic', 'Orient Bell', 'Rushil Decor', 'Shriram Pistons', 'Sona BLW Precision', 'Exide Industries', 'Dhoot Transmission',
    'Craftsman Automation', 'ZF Comm Vehic Contr', 'Sundram Fasteners', 'Gabriel India', 'Belrise Industries', 'Motherson Sumi Wirin', 'Tenneco Clean Air',
    'Minda Corp', 'Sedemac Mechatronics', 'CIE Automotive', 'Amara Raja Energy', 'Lumax Auto Tech', 'Ramkrishna Forgings', 'Varroc Engineering',
    'ASK Automotive', 'Pricol', 'SJS Enterprises', 'Suprajit Engineering', 'Steel Strips Wheels', 'Wheels India', 'Sharda Motor', 'Lumax Industries',
    'Fiem Industries', 'Rolex Rings', 'Uniparts India', 'Rane (Madras)', 'Divgi Torqtransfer', 'Sandhar Technologies', 'JTEKT India', 'Carraro India',
    'Talbros Auto Compont', 'Auto.Axle', 'OBSC Perfection', 'Rajratan Global', 'RACL Geartech', 'Rico Auto Industries', 'NDR Auto Components', 'Kross',
    'Menon Bearings', 'Poojaa Precision Engg', 'Studds Accessories', 'Alicon Castalloy', 'Precision Camshafts', 'Sterling Tools', 'Remsons Industries',
    'RPG Life Sciences', 'Ajanta Pharma', 'Caplin Point Labs', 'Natco Pharma',
].map(s => s.toLowerCase()));

const keyOf = (company: string) => company.trim().toLowerCase();

// ── Period labels ────────────────────────────────────────────────────────────

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
function monthYear(label: string): { m: number; y: number } | null {
    const hit = label.trim().toLowerCase().match(/^([a-z]{3})\w*\s+(\d{4})$/);
    if (!hit) return null;
    const m = MONTHS.indexOf(hit[1]) + 1;
    return m ? { m, y: Number(hit[2]) } : null;
}
const fy = (m: number, y: number) => (m >= 4 ? y + 1 : y) % 100;
const two = (n: number) => String(n).padStart(2, '0');

/** "Mar 2026" → "FY26"; a December year end (Dec 2025) → "FY26", the year it mostly falls in. */
export function yearLabel(label: string): string | null {
    const d = monthYear(label);
    return d ? `FY${two(fy(d.m, d.y))}` : null;
}

/** "Sep 2026" → "Q2 FY27". */
export function quarterLabel(label: string): string | null {
    const d = monthYear(label);
    if (!d) return null;
    const q = d.m >= 4 && d.m <= 6 ? 1 : d.m <= 9 && d.m >= 7 ? 2 : d.m >= 10 ? 3 : 4;
    return `Q${q} FY${two(fy(d.m, d.y))}`;
}

/** Sort key for "Q2 FY27" / "FY27". */
const qOrder = (label: string) => {
    const m = label.match(/^Q([1-4]) FY(\d{2})$/);
    return m ? Number(m[2]) * 4 + Number(m[1]) : -1;
};
const yOrder = (label: string) => Number(label.match(/^FY(\d{2})$/)?.[1] ?? -1);
const prevQuarter = (label: string, back: number) => {
    const n = qOrder(label) - back;
    const q = ((n - 1) % 4 + 4) % 4 + 1;
    return `Q${q} FY${two((n - q) / 4)}`;
};

// ── One company's figures by period ──────────────────────────────────────────

const pick = (labels: string[], values: N[] | undefined, fmt: (l: string) => string | null) => {
    const out = new Map<string, number>();
    labels.forEach((l, i) => {
        const k = fmt(l), v = values?.[i];
        if (k && v !== null && v !== undefined) out.set(k, v);
    });
    return out;
};

const round = (v: number, dp = 0) => Math.round(v * 10 ** dp) / 10 ** dp;
const ratio = (a: number | undefined, b: number | undefined, scale = 100, dp = 0): N =>
    a === undefined || b === undefined || b <= 0 ? null : round((a / b) * scale, dp);

interface Built { quarters: Map<string, Map<string, number>>; years: Map<string, Map<string, number>>; latestQ: string | null; latestY: string | null }

function build(f: LiveFigures, company: string): Built {
    const qs = (vals?: N[]) => pick(f.q, vals, quarterLabel);
    const ys = (vals?: N[]) => pick(f.y, vals, yearLabel);
    // Balance-sheet columns: year ends only (a half-year column "Sep 2026" is left out of the year series).
    const yearEnd = new Set(f.y.map(yearLabel));
    const bs = (vals?: N[]) => {
        const m = new Map<string, number>();
        f.b.forEach((l, i) => {
            const k = yearLabel(l), v = vals?.[i];
            if (k && yearEnd.has(k) && f.y.includes(l) && v !== null && v !== undefined) m.set(k, v);
        });
        return m;
    };
    const quarters = new Map([
        ['sales', qs(f.qSales)], ['op', qs(f.qOp)], ['gnpa', qs(f.qGnpa)], ['nnpa', qs(f.qNnpa)],
    ]);
    const cashLike = INVESTMENTS_AS_CASH.has(keyOf(company));
    const borrow = bs(f.borrow), cash = bs(f.cash), inv = bs(f.inv);
    // Spending on fixed assets and free cash flow: from "Fixed assets purchased" where read, else Screener's own free cash flow.
    const ocf = ys(f.ocf), bought = ys(f.capex), screenerFcf = ys(f.fcf);
    const capex = new Map<string, number>(), fcf = new Map<string, number>();
    ocf.forEach((o, k) => {
        const c = bought.get(k) ?? (screenerFcf.has(k) ? o - screenerFcf.get(k)! : undefined);
        if (c === undefined) return;
        capex.set(k, c);
        fcf.set(k, o - c);
    });
    const netDebt = new Map<string, number>();
    borrow.forEach((b, k) => netDebt.set(k, b - (cash.get(k) ?? 0) - (cashLike ? inv.get(k) ?? 0 : 0)));
    const years = new Map([
        ['sales', ys(f.sales)], ['op', ys(f.op)], ['np', ys(f.np)], ['interest', ys(f.interest)], ['ocf', ocf], ['fcf', fcf], ['capex', capex],
        ['roce', ys(f.roce)], ['roe', ys(f.roe)], ['ccc', ys(f.ccc)],
        ['netDebt', netDebt], ['block', bs(f.block)], ['equity', bs(f.equity)], ['assets', bs(f.assets)],
    ]);
    const qLabels = [...quarters.get('sales')!.keys()].sort((a, b) => qOrder(a) - qOrder(b));
    const yLabels = [...years.get('sales')!.keys()].sort((a, b) => yOrder(a) - yOrder(b));
    return { quarters, years, latestQ: qLabels.at(-1) ?? null, latestY: yLabels.at(-1) ?? null };
}

/** Net debt at the latest balance sheet (half-year included) and operating profit over the last four quarters (two halves). */
export function valuationFigures(f: LiveFigures, company: string): { netDebt: N; ttmEbitda: N } {
    const cashLike = INVESTMENTS_AS_CASH.has(keyOf(company));
    let netDebt: N = null;
    for (let i = f.b.length - 1; i >= 0; i--) {
        const b = f.borrow[i];
        if (b === null || b === undefined) continue;
        netDebt = round(b - (f.cash[i] ?? 0) - (cashLike ? f.inv[i] ?? 0 : 0));
        break;
    }
    const n = f.half ? 2 : 4;
    const last = f.qOp.slice(-n);
    const ttmEbitda = last.length === n && last.every(v => v !== null && v !== undefined)
        ? round(last.reduce((s, v) => s + (v as number), 0))
        : null;
    return { netDebt, ttmEbitda };
}

// ── Series ───────────────────────────────────────────────────────────────────

/** Which periods a grid shows: the five quarters (or years) ending at the latest any company has filed. */
const lastFive = (latest: string | null, step: (l: string, back: number) => string) =>
    latest ? [4, 3, 2, 1, 0].map(b => step(latest, b)) : [];
const prevYear = (label: string, back: number) => `FY${two(yOrder(label) - back)}`;

type Calc = (b: Built, period: string, lender: boolean) => N;
const qv = (b: Built, row: string, p: string) => b.quarters.get(row)?.get(p);
const yv = (b: Built, row: string, p: string) => b.years.get(row)?.get(p);
const prevY = (p: string) => prevYear(p, 1);
const avg = (b: Built, row: string, p: string) => {
    const now = yv(b, row, p), then = yv(b, row, prevY(p));
    return now === undefined ? undefined : then === undefined ? now : (now + then) / 2;
};

const QUARTERLY: Record<string, Calc> = {
    opm: (b, p) => { const s = qv(b, 'sales', p), o = qv(b, 'op', p); return s === undefined || o === undefined || s <= 0 ? null : round((o / s) * 100); },
    growth: (b, p) => { const now = qv(b, 'sales', p), then = qv(b, 'sales', prevQuarter(p, 4)); return now === undefined || then === undefined || then <= 0 ? null : round((now / then - 1) * 100); },
    gnpa: (b, p) => { const v = qv(b, 'gnpa', p); return v === undefined ? null : round(v, 2); },
    nnpa: (b, p) => { const v = qv(b, 'nnpa', p); return v === undefined ? null : round(v, 2); },
};

const YEARLY: Record<string, Calc> = {
    roce: (b, p) => yv(b, 'roce', p) ?? null,
    ccc: (b, p) => { const v = yv(b, 'ccc', p); return v === undefined || Math.abs(v) > 1000 ? null : round(v); },
    cash: (b, p) => { const op = yv(b, 'op', p); return op === undefined || op <= 0 ? null : ratio(yv(b, 'ocf', p), op); },
    fcf: (b, p) => ratio(yv(b, 'fcf', p), yv(b, 'sales', p), 100, 1),
    capex: (b, p) => ratio(yv(b, 'capex', p), yv(b, 'sales', p), 100, 1),
    turnover: (b, p) => ratio(yv(b, 'sales', p), yv(b, 'block', p), 1, 1),
    leverage: (b, p, lender) => {
        if (lender) return ratio(yv(b, 'assets', p), yv(b, 'equity', p), 1, 1);
        const op = yv(b, 'op', p), nd = yv(b, 'netDebt', p);
        return op === undefined || nd === undefined || op <= 0 ? null : round(nd / op, 1);
    },
    roe: (b, p) => ratio(yv(b, 'np', p), avg(b, 'equity', p)) ?? yv(b, 'roe', p) ?? null,
    roa: (b, p) => ratio(yv(b, 'np', p), avg(b, 'assets', p), 100, 2),
    margin: (b, p) => { const s = yv(b, 'sales', p), i = yv(b, 'interest', p); return s === undefined || i === undefined ? null : ratio(s - i, avg(b, 'assets', p), 100, 1); },
};
YEARLY.turn = YEARLY.turnover;

/** "5 yrs": all five years' totals divided, for the cash measures. */
const TOTALS: Record<string, (b: Built, years: string[]) => N> = {
    cash: (b, ys) => {
        let o = 0, e = 0, n = 0;
        for (const y of ys) { const a = yv(b, 'ocf', y), c = yv(b, 'op', y); if (a !== undefined && c !== undefined) { o += a; e += c; n++; } }
        return n >= 3 && e > 0 ? round((o / e) * 100) : null;
    },
    fcf: (b, ys) => {
        let f = 0, s = 0, n = 0;
        for (const y of ys) { const a = yv(b, 'fcf', y), c = yv(b, 'sales', y); if (a !== undefined && c !== undefined) { f += a; s += c; n++; } }
        return n >= 3 && s > 0 ? round((f / s) * 100, 1) : null;
    },
    capex: (b, ys) => {
        let x = 0, s = 0, n = 0;
        for (const y of ys) { const a = yv(b, 'capex', y), c = yv(b, 'sales', y); if (a !== undefined && c !== undefined) { x += a; s += c; n++; } }
        return n >= 3 && s > 0 ? round((x / s) * 100, 1) : null;
    },
};

const fmtDay = (iso: string) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

/**
 * The note's chart series rebuilt from the filed figures. A series this file cannot compute
 * (order book cover, from the calls) is left as the note has it. Lenders get the lender versions.
 */
export function liveSeries(note: SectorOverview, store: LiveStore): { metrics: MetricSeries[]; latestQuarter: string | null } | null {
    const series = note.metrics;
    if (!series?.length) return null;
    const lender = !!note.valuation?.lender;
    const built = new Map<string, Built>();
    const views = { consolidated: 0, standalone: 0 };
    const dates: string[] = [];
    for (const v of note.verdicts) {
        const f = store.companies[keyOf(v.company)];
        if (!f) continue;
        built.set(v.company, build(f, v.company));
        views[f.view]++;
        dates.push(f.at);
    }
    if (!built.size) return null;
    const latest = (pickLatest: (b: Built) => string | null, order: (l: string) => number) => {
        // The newest period that at least a fifth of the companies have filed, so one early filer
        // does not open a column the rest have not reached.
        const counts = new Map<string, number>();
        built.forEach(b => { const l = pickLatest(b); if (l) counts.set(l, (counts.get(l) ?? 0) + 1); });
        const sorted = [...counts.keys()].sort((a, b) => order(b) - order(a));
        let seen = 0;
        for (const l of sorted) { seen += counts.get(l)!; if (seen >= Math.max(1, built.size / 5)) return l; }
        return sorted[0] ?? null;
    };
    const latestQ = latest(b => b.latestQ, qOrder);
    const latestY = latest(b => b.latestY, yOrder);
    const quarters = lastFive(latestQ, prevQuarter);
    const years = lastFive(latestY, prevYear);
    dates.sort();
    const basis = views.standalone === 0 ? 'consolidated' : views.consolidated === 0 ? 'standalone' : 'consolidated where the company files group accounts, otherwise standalone';
    const refreshed = `Updated automatically after each company's results (last read ${fmtDay(dates[0])}${dates.at(-1) !== dates[0] ? ` to ${fmtDay(dates.at(-1)!)}` : ''}).`;

    const metrics = series.map((s): MetricSeries => {
        const qCalc = QUARTERLY[s.key], yCalc = YEARLY[s.key];
        // Lenders: "growth" is income growth, "leverage" assets ÷ net worth; the rest by the same rules.
        if ((!qCalc && !yCalc) || (lender && !['growth', 'gnpa', 'nnpa', 'roe', 'roa', 'leverage', 'margin'].includes(s.key))) return s;
        const quarterly = !!qCalc && (s.periods.some(p => /^Q[1-4] /.test(p)) || !yCalc);
        const periods = quarterly ? quarters : years;
        if (!periods.length) return s;
        const withTotal = !quarterly && TOTALS[s.key] && s.periods.includes('5 yrs');
        const values: MetricSeries['values'] = {};
        for (const v of note.verdicts) {
            const b = built.get(v.company);
            if (!b) { values[v.company] = [...periods, ...(withTotal ? ['5 yrs'] : [])].map(() => null); continue; }
            const row = periods.map(p => (quarterly ? qCalc : yCalc)(b, p, lender));
            if (withTotal) row.push(TOTALS[s.key](b, periods));
            values[v.company] = row;
        }
        // A measure Screener does not show for most of these companies (bad loans on a group page)
        // stays as the note has it rather than going blank.
        const filled = (vals: MetricSeries['values']) => [...built.keys()].filter(c => vals[c]?.some(x => x !== null && x !== undefined)).length;
        if (filled(values) < filled(s.values) / 2) return s;
        // Hover notes stay only for companies whose note was about these same periods.
        const samePeriods = s.periods.filter(p => p !== '5 yrs').join('|') === periods.join('|');
        const what = quarterly ? 'Filed quarterly results' : s.key === 'roce' || s.key === 'ccc' ? 'Filed annual ratios' : 'Filed annual accounts';
        return {
            ...s,
            periods: withTotal ? [...periods, '5 yrs'] : periods,
            values,
            cellNotes: samePeriods ? s.cellNotes : undefined,
            source: `${what} (Screener), ${basis}. ${refreshed}${withTotal ? ' The last column divides the five years’ totals.' : ''}`,
        };
    });
    return { metrics, latestQuarter: latestQ };
}

/** The valuation block with net debt and trailing operating profit from the filed figures, where read. */
export function liveValuationBlock(block: ValuationBlock | undefined, store: LiveStore): ValuationBlock | undefined {
    if (!block || block.lender) return block;
    const inputs: ValuationBlock['inputs'] = {};
    for (const [company, input] of Object.entries(block.inputs)) {
        const f = store.companies[keyOf(company)];
        if (!f) { inputs[company] = input; continue; }
        const live = valuationFigures(f, company);
        inputs[company] = {
            ...input,
            netDebt: live.netDebt ?? input.netDebt,
            ttmEbitda: live.ttmEbitda ?? input.ttmEbitda,
        };
    }
    return { ...block, inputs };
}

/** Ranked companies plus those with only a company card, as rows for the sector page's charts. */
export function chartRows(note: SectorOverview): CompanyVerdict[] {
    const ranked = new Set(note.verdicts.map(v => keyOf(v.company)));
    const added = (note.businesses?.profiles || [])
        .filter(p => !ranked.has(keyOf(p.company)))
        .map((p): CompanyVerdict => ({ company: p.company, stance: 'ADDED', what: p.tagline, view: '', watch: '', segment: p.segment || 'Not yet placed in a group' }));
    return [...note.verdicts, ...added];
}

/** Every company on a note's charts, bucket notes included. */
export function noteCompanies(note: SectorOverview): CompanyVerdict[] {
    return [...chartRows(note), ...(note.buckets || []).flatMap(b => noteCompanies(b.note))];
}
