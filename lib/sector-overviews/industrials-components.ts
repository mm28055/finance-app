import { SectorOverview } from './types';
import { industrialsComponentsBusinesses } from './industrials-components-businesses';
import { industrialsComponentsValuationInputs } from './card-data/industrials-components';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const QUAL = 'Qualified suppliers to equipment makers';
const TAKER = 'Parts whose price someone else sets';
const PROJ = 'Lines and fit-outs, bought once';

// Industrials · Components and engineered parts. Company material (verdicts, profiles, charts, valuation
// inputs, table rows and metric rows) is carried unchanged from the Industrial Manufacturing and Industrial
// Products notes of 28 Sep 2026; the group-level analysis is written for these ten companies.
export const industrialsComponents: SectorOverview = {
    sector: 'Industrials',
    title: 'Components and engineered parts',
    format: 'ranked',
    businesses: industrialsComponentsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialsComponentsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Pitti Engineering': 20,
            'Gala Precision Engi.': 22,
            'KRN Heat Exchan': 25,
            'Omnitech Engineering': 22,
            'Tempsens Instruments': 18,
            'Patil Automation': 18,
            'Subros': 10,
            'Vilas Transcore': 12,
            'Everest Kanto Cylind': 5,
            'Airfloa Rail Techno.': 15,
        },
    },
    standfirst:
        "Ten companies that make parts, assemblies and systems to their customers' designs, so their revenue follows the customers' volumes and new programmes rather than a price list. This is one of three groups on the Industrials page. Five are qualified suppliers to equipment makers, several of them global: **Pitti Engineering** (the laminated steel core of motors and generators), **Gala Precision** (springs and fasteners for wind turbines and machinery), **KRN Heat Exchanger** (cooling coils, now for North American data centres), **Omnitech Engineering** (precision-machined parts for US oilfield and automation makers) and **Tempsens Instruments** (temperature sensors, cables and heaters for process plants). Three sell parts whose price someone else largely sets: **Subros** (car and truck air-conditioning, 82% of it to related parties, chiefly Maruti Suzuki), **Vilas Transcore** (transformer cores cut from imported steel) and **Everest Kanto** (gas cylinders for CNG vehicles, city gas and industry). Two sell one-off projects: **Patil Automation** (robotic production lines) and **Airfloa Rail** (train coach interiors). The research behind it is the Q1 FY27 calls and presentations, the FY26 annual reports and the rating reports read for the former Industrial Manufacturing and Industrial Products notes. The headline: **the best businesses here are designed into a customer's machine and pass metal costs on; the weakest have their price set by one buyer, a tender or the price of imported steel. Seven of the ten had negative free cash flow over their filed history, so cash, not growth, is the test.**",
    lastUpdated: '2026-09-29',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Consolidated, except Vilas, Patil and Airfloa (standalone, SME, half-yearly: H1 and H2 FY26 sit in the Q2 and Q4 columns).',
            note: 'Operating margin excludes other income. Tempsens listed in August 2026 and has gaps.',
            values: {
                'Pitti Engineering': [16, 16, 17, 16, 16],
                'Gala Precision Engi.': [15, 16, 17, 18, 16],
                'KRN Heat Exchan': [16, 20, 20, 19, 19],
                'Omnitech Engineering': [26, 35, 38, 34, 31],
                'Tempsens Instruments': [24, null, null, 22, 20],
                'Patil Automation': [null, 14, null, 11, null],
                'Subros': [9, 8, 9, 9, 8],
                'Vilas Transcore': [null, 14, null, 9, null],
                'Everest Kanto Cylind': [16, 12, 16, 11, 14],
                'Airfloa Rail Techno.': [null, 24, null, 18, null],
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            values: {
                'Pitti Engineering': [17, 11, 15, 7, 16],
                'Gala Precision Engi.': [19, 39, 47, 26, 19],
                'KRN Heat Exchan': [20, 67, 38, 36, 119],
                'Omnitech Engineering': [null, null, 81, 39, 62],
                'Tempsens Instruments': [null, null, null, null, 34],
                'Patil Automation': [null, 22, null, 32, null],
                'Subros': [8, 6, 15, 16, 18],
                'Vilas Transcore': [null, 41, null, 21, null],
                'Everest Kanto Cylind': [13, -2, -1, -15, -11],
                'Airfloa Rail Techno.': [null, 7, null, 114, null],
            },
            cellNotes: {
                'KRN Heat Exchan': 'Q1 FY27: data-centre revenue went from ₹20cr to ₹65cr in a quarter.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'KRN, Omnitech and Tempsens raised equity recently, which lowers returns until the money is used; Pitti built capacity ahead of demand.',
            values: {
                'Pitti Engineering': [18, 18, 19, 17, 15],
                'Gala Precision Engi.': [15, 18, 23, 17, 16],
                'KRN Heat Exchan': [null, null, null, 21, 16],
                'Omnitech Engineering': [null, null, 18, 19, 18],
                'Tempsens Instruments': [36, 29, 26, 23, 18],
                'Patil Automation': [29, 17, 25, 24, 20],
                'Subros': [7, 9, 16, 20, 19],
                'Vilas Transcore': [23, 22, 21, 22, 16],
                'Everest Kanto Cylind': [41, 12, 12, 12, 12],
                'Airfloa Rail Techno.': [null, 13, 29, 32, 26],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days.',
            note: 'Screener counts stock days against material cost, so Omnitech’s cycle (materials about a quarter of sales) looks much longer than it is. Compare each company with its own history, and watch for a cycle rising while growth slows.',
            values: {
                'Pitti Engineering': [106, 55, 86, 55, 87],
                'Gala Precision Engi.': [285, 327, 279, 308, 294],
                'KRN Heat Exchan': [null, null, 141, 125, 208],
                'Omnitech Engineering': [null, 388, 627, 786, 761],
                'Tempsens Instruments': [153, 158, 151, 193, 210],
                'Patil Automation': [12, 33, 135, 155, 204],
                'Subros': [-1, 2, 13, 21, 34],
                'Vilas Transcore': [57, 84, 40, 103, 104],
                'Everest Kanto Cylind': [184, 311, 298, 256, 288],
                'Airfloa Rail Techno.': [172, 173, 232, 237, 264],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Negative means the business consumed cash while reporting a profit.',
            values: {
                'Pitti Engineering': [66, 147, 44, 107, 65, 84],
                'Gala Precision Engi.': [60, 57, 41, 7, 19, 32],
                'KRN Heat Exchan': [null, null, 29, 30, -102, -32],
                'Omnitech Engineering': [null, 62, 32, -58, -1, -3],
                'Tempsens Instruments': [33, 50, 67, 59, 42, 51],
                'Patil Automation': [-12, 0, 54, 7, -20, 5],
                'Subros': [101, 84, 65, 54, 32, 60],
                'Vilas Transcore': [48, 45, 163, -93, -4, 17],
                'Everest Kanto Cylind': [41, 66, 139, 32, 70, 63],
                'Airfloa Rail Techno.': [null, 59, 9, -8, -89, -30],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all filed years.',
            note: 'Shows who funds growth from its own cash. KRN and Omnitech have funded theirs with share sales; Pitti with debt.',
            values: {
                'Pitti Engineering': [0.9, 10.5, -10.5, -3.8, 0.0, -1.0],
                'Gala Precision Engi.': [3.5, 3.7, 2.6, -10.2, -6.3, -2.6],
                'KRN Heat Exchan': [null, null, -14.3, 3.0, -19.0, -10.8],
                'Omnitech Engineering': [null, -4.0, -68.5, -42.0, -25.2, -33.3],
                'Tempsens Instruments': [0.1, 0.0, 3.7, 6.1, 6.3, 4.0],
                'Patil Automation': [-2.5, -2.4, 1.4, 0.5, -32.8, -9.2],
                'Subros': [2.0, 1.1, 1.5, 1.7, -1.2, 0.9],
                'Vilas Transcore': [4.7, 4.3, 15.4, -22.8, -8.9, -3.1],
                'Everest Kanto Cylind': [4.9, 1.7, 13.1, -4.2, -2.1, 2.4],
                'Airfloa Rail Techno.': [null, 8.4, 1.8, -5.4, -23.2, -10.3],
            },
        },
        {
            key: 'leverage',
            label: 'Net debt ÷ operating profit',
            unit: 'x',
            periods: FY,
            scale: 'diverging',
            invert: true,
            legend: ['More debt', 'Net cash'],
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Subros.',
            note: 'Below zero means more cash than debt.',
            values: {
                'Pitti Engineering': [2.7, 1.9, 2.9, 2.0, 2.1],
                'Gala Precision Engi.': [2.7, 1.7, 1.4, -0.9, -0.2],
                'KRN Heat Exchan': [null, null, 1.2, -1.7, 1.3],
                'Omnitech Engineering': [null, 1.6, 4.0, 3.0, 1.6],
                'Tempsens Instruments': [0.5, 0.5, 0.3, 0.0, 0.4],
                'Patil Automation': [1.1, 1.7, 0.4, 0.2, 0.3],
                'Subros': [-0.6, -0.6, -0.4, -0.5, -0.3],
                'Vilas Transcore': [-1.3, -1.2, -2.4, -2.2, -1.1],
                'Everest Kanto Cylind': [0.1, 0.3, -0.3, 0.4, 0.9],
                'Airfloa Rail Techno.': [3.5, 3.3, 1.9, 1.2, 0.9],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all filed years.',
            note: 'Pitti and Omnitech built capacity ahead of demand; returns rise as those plants fill.',
            values: {
                'Pitti Engineering': [8.3, 9.6, 16.9, 20.8, 10.7, 13.8],
                'Gala Precision Engi.': [4.7, 6.0, 5.3, 11.5, 9.5, 7.9],
                'KRN Heat Exchan': [null, null, 19.9, 1.9, 0.0, 5.2],
                'Omnitech Engineering': [null, 26.0, 80.3, 21.9, 24.9, 32.3],
                'Tempsens Instruments': [7.1, 9.1, 9.7, 8.1, 3.1, 7.0],
                'Patil Automation': [1.4, 2.4, 4.7, 0.3, 30.1, 9.7],
                'Subros': [4.7, 3.9, 3.9, 3.5, 4.0, 4.0],
                'Vilas Transcore': [0.9, 0.3, 0.4, 10.9, 8.5, 5.0],
                'Everest Kanto Cylind': [4.8, 6.6, 5.4, 8.1, 11.8, 7.3],
                'Airfloa Rail Techno.': [null, 2.2, 0.8, 3.3, 5.4, 3.7],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Sales per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): sales ÷ net fixed assets at year end.',
            note: 'Higher means more sales from each rupee of plant.',
            values: {
                'Pitti Engineering': [2.9, 3.0, 2.7, 1.7, 1.7],
                'Gala Precision Engi.': [2.6, 2.7, 3.2, 2.8, 3.0],
                'KRN Heat Exchan': [null, null, 3.7, 5.1, 1.9],
                'Omnitech Engineering': [null, 2.6, 0.8, 1.4, 1.5],
                'Tempsens Instruments': [3.0, 3.0, 2.8, 1.3, 1.5],
                'Patil Automation': [6.7, 5.6, 7.2, 9.1, 2.7],
                'Subros': [3.1, 3.9, 4.1, 4.7, 5.1],
                'Vilas Transcore': [6.3, 8.3, 9.4, 11.0, 5.7],
                'Everest Kanto Cylind': [5.1, 3.2, 3.0, 3.6, 2.5],
                'Airfloa Rail Techno.': [3.7, 2.6, 3.5, 5.2, 6.5],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Qualification', description: 'Approvals, vendor codes, certifications or engineering a rival cannot easily copy.' },
            { key: 'own', label: 'Owns the technology', description: 'A = own design or process; D = licensed, or built to the customer’s drawing.' },
            { key: 'repeat', label: 'Repeat business', description: 'Volumes that recur with the customer’s production, replacements or spares.' },
            { key: 'pass', label: 'Cost pass-through', description: 'A = contract moves with the metal; D = absorbs cost rises.' },
            { key: 'power', label: 'Pricing power', description: 'A = raised prices or sells to many small buyers; D = one buyer or a commodity price sets it.' },
        ],
        rows: [
            { company: 'Pitti Engineering', trend: 'widening', trendNote: 'Machined assemblies up 37% against 16% for loose laminations.',
                grades: { qual: { grade: 'A', note: 'Designed into Wabtec, Siemens, Cummins, ABB, Nidec' }, own: { grade: 'B', note: 'Own tooling and process' }, repeat: { grade: 'A', note: 'Volumes recur with customers’ production' }, pass: { grade: 'A', note: 'Steel passed straight through' }, power: { grade: 'A', note: 'Raised prices this year' } } },
            { company: 'Gala Precision Engi.', trend: 'widening', trendNote: 'Broke a German monopoly in seat-belt springs; in-house galvanising unlocked new orders.',
                grades: { qual: { grade: 'A', note: 'Vendor codes at Vestas, Siemens, ABB, Schaeffler' }, own: { grade: 'B', note: 'Own designs' }, repeat: { grade: 'A', note: 'Share grows to 50–75% once in' }, pass: { grade: 'B', note: 'Price rises with a lag' }, power: { grade: 'A', note: '10–18% cheaper than European rivals' } } },
            { company: 'KRN Heat Exchan', trend: 'widening', trendNote: 'Q1 revenue +119%; Vertiv audit passed, but only a sample order so far.',
                grades: { repeat: { grade: 'B', note: 'Coils specified into customers’ units' }, qual: { grade: 'C', note: 'Fin-and-tube coils; harder products a year away' }, power: { grade: 'C', note: 'Daikin is cost-plus' }, pass: { grade: 'A', note: 'Prices reset quarterly to copper and aluminium' }, own: { grade: 'B', note: 'Own designs' } } },
            { company: 'Omnitech Engineering', trend: 'stable', trendNote: 'Aerospace approvals in progress; heavy capex.',
                grades: { repeat: { grade: 'B', note: 'Repeat parts for energy customers' }, qual: { grade: 'B', note: 'Machines to five microns' }, power: { grade: 'B', note: 'Oilfield and energy customers' }, pass: { grade: 'C', note: 'Two-to-three-month lag; no energy clause' }, own: { grade: 'C', note: 'Customer owns the drawing' } } },
            { company: 'Tempsens Instruments', trend: 'stable', trendNote: 'Cross-selling now 60% of revenue; margin dipped to 20% in its first listed quarter.',
                grades: { repeat: { grade: 'B', note: 'Replacement is a third of sales' }, qual: { grade: 'B', note: 'First approval takes 3–5 years' }, power: { grade: 'A', note: 'Top 10 customers are 18.6% of sales' }, pass: { grade: 'B', note: 'Metal bought against each order' }, own: { grade: 'B', note: 'Own designs' } } },
            { company: 'Patil Automation', trend: 'stable', trendNote: 'A ₹800cr bid pipeline must turn into orders.',
                grades: { repeat: { grade: 'C', note: 'About 60% of auto customers return' }, qual: { grade: 'C', note: 'Integration skill' }, power: { grade: 'C', note: 'Car makers' }, pass: { grade: 'C', note: 'Project by project' }, own: { grade: 'C', note: 'Bought defence and powertrain skills' } } },
            { company: 'Subros', trend: 'stable', trendNote: 'Margin ambition deferred again; electric compressor starts mostly imported.',
                grades: { repeat: { grade: 'B', note: 'Designed into car models' }, qual: { grade: 'C', note: 'Denso designs under licence' }, power: { grade: 'D', note: '82% of sales to related parties, chiefly Maruti' }, pass: { grade: 'C', note: 'Wage rises not covered' }, own: { grade: 'D', note: 'Licensed from Denso' } } },
            { company: 'Vilas Transcore', trend: 'stable', trendNote: 'Tripled core capacity, but FY27 revenue guidance cut from ₹750–800cr to ~₹680cr.',
                grades: { repeat: { grade: 'B', note: 'Cores for transformer makers' }, qual: { grade: 'C', note: 'Slitting and stacking steel' }, power: { grade: 'C', note: 'Transformer makers' }, pass: { grade: 'B', note: 'Mix-dependent' }, own: { grade: 'C', note: 'Standard process' } } },
            { company: 'Everest Kanto Cylind', trend: 'narrowing', trendNote: 'Margin fell back when specialised orders did not repeat.',
                grades: { qual: { grade: 'B', note: 'PESO and global certifications' }, own: { grade: 'C', note: 'Standard cylinders' }, repeat: { grade: 'C', note: 'Replacement demand' }, pass: { grade: 'C', note: 'Partial' }, power: { grade: 'D', note: 'A commodity once the mix reverts' } } },
            { company: 'Airfloa Rail Techno.', trend: 'narrowing', trendNote: 'Operating cash −₹57cr in FY26; research spending to be capitalised.',
                grades: { repeat: { grade: 'C', note: 'Coach refurbishment projects' }, qual: { grade: 'C', note: 'Defence technology sits in a joint venture' }, power: { grade: 'D', note: 'Indian Railways' }, pass: { grade: 'C', note: 'Covered half an 80% aluminium rise' }, own: { grade: 'C', note: 'Mostly bought in' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Pitti Engineering is the one to own first, and Gala Precision the second.** **Pitti** makes the magnetic core of motors and generators (electrical-steel laminations and, more and more, finished stator and rotor assemblies) for Wabtec, Siemens, Cummins, Caterpillar and Nidec. It passes steel through every quarter, and it is climbing the value chain: higher-value assemblies grew 37% in Q1 FY27 against 16% for loose laminations. In August management raised its FY27 volume targets and gave an operating-profit figure for the first time, about ₹370cr against ₹316cr in FY26. The catch is capital: return on capital has slid from 19% to 15% as new plants run ahead of revenue, profit before tax was flat in Q1, and a ₹290cr foundry and a possible ₹400cr Bengaluru plant come next. Net leverage was 2.4 times at December, above the 2.0 times Ind-Ra says could trigger a downgrade, and the foundry is mostly debt-funded, so **I own it only while net debt keeps falling**; about ₹40cr of FY26 profit was state-incentive income that largely drops out this year. The price needs about {need:Pitti Engineering|20}% a year against my ~20%. **Gala** has spent 25 years earning vendor codes at Vestas, Siemens Energy, ABB and Schaeffler, grew 19.5% in Q1 with a firm order book up 30–40%, and needs about {need:Gala Precision Engi.|21}% a year against my ~22%. But its cash cycle is close to 300 days on Screener's count, free cash was negative in FY25 and FY26, three dated milestones slipped in one quarter, Nord-Lock is suing it over a patent, and the income-tax department searched its office and the promoter's home in August; the company says there was no material impact. **It stays an own only if FY27 operating cash improves.**",
                "**Wait on KRN and Omnitech: real growth, but the profit is not arriving as cash.** **KRN** resets its prices every quarter to copper, aluminium and the rupee, more than doubled Q1 revenue to a record ₹252cr as data-centre sales went from ₹20cr to ₹65cr, and targets ₹2,000cr of revenue in FY28. But its operating cash was −₹76cr against ₹168cr of profit over FY24–FY26, the three years on record (−₹114cr in FY26 alone), it burnt ₹312cr of free cash in FY26, raised equity twice in 19 months, its auditor flagged how it books revenue (a new trading line and sales to its own subsidiary), and its Vertiv approval has so far produced only a sample order. It needs about {need:KRN Heat Exchan|32}% a year against my ~25%, which is **{Label:KRN Heat Exchan|Stretched}**. **Omnitech** machines oilfield and automation parts to five microns, has a ₹3,055cr order book and grew 61.5% in Q1, but its operating cash was −₹11cr against ₹174cr of profit over FY23–FY26, the four years on record (−₹2cr in FY26), its margin slid from 38% to 30% in three quarters, Q1 profit was helped by a depreciation change, its auditor could not confirm the edit log of its stock software, and its two biggest orders are master agreements that ramp slowly. It needs about {need:Omnitech Engineering|28}% a year against my ~22%, which is **{Label:Omnitech Engineering|Full}**. **Both move from follow to wait; each returns to follow when operating cash turns positive and converts most of its profit** (for KRN, with Vertiv ordering in volume; for Omnitech, at a 30% margin).",
                "**Wait on Tempsens and Patil too.** **Tempsens** held its first call in September and looks like a well-qualified sensor, cable and heater maker with 3,800 customers, the top ten only 18.6% of sales, but its margin slipped to 20% while it hires for four new plants, its cash cycle has stretched to 210 days, and 85% of its listing was sold by existing holders; the price needs about {need:Tempsens Instruments|28}% a year against my ~18%. **Patil**'s order book fell from ₹170cr in January to ₹118cr in May while its FY27 target rose to ₹260–270cr, operating cash was negative, rent paid to its MD and a director is about 29% of standalone profit, and in September it asked shareholders to change how its IPO money is used; its price needs about {need:Patil Automation|24}% against my ~18%.",
                "**Pass on Subros, Vilas Transcore and Everest Kanto; avoid Airfloa.** **Subros** withdrew its revenue guidance and pushed its 12% margin goal out again, because Maruti and the wage laws set its margin; Q1 operating profit fell while revenue rose 17.5%, and FY26 operating cash fell 40%. **Vilas** cut its FY27 revenue guide from ₹750–800cr to about ₹680cr within four months buys ₹35cr a year from its managing director's own transformer company, depends on one customer for 40–50% of sales, and has had negative operating cash for two years. **Everest Kanto** is cheap on price (it needs about {need:Everest Kanto Cylind|5}% a year against my ~5%), but its revenue fell 10% in Q1, it dropped its guidance, borrowings rose to ₹267cr from ₹41cr two years ago, and a ₹351cr GST demand hangs over a market value of about {mcap:Everest Kanto Cylind|₹1,240cr}. **Airfloa Rail** had −₹57cr of operating cash in FY26, reached a ₹469cr order book against the ₹1,000cr it promised, and plans to capitalise research while borrowing for a plant, a defence joint venture and a ₹48cr acquisition.",
                "**Three things to hold onto before reading the rest.** First, **being designed in is only worth what the contract lets through**: Pitti and KRN reset prices to steel, copper and aluminium, while Subros, Airfloa and Vilas paid much of this year's cost rise themselves. Second, **check the cash**: seven of these ten had negative free cash flow over their filed history, and the fastest growers (KRN, Omnitech, Airfloa, Patil) are the worst. Third, **check what is inside the profit**: Pitti's FY26 included about ₹40cr of mostly state-incentive income, Everest Kanto's about ₹42cr of tax credit and refund, Omnitech's Q1 a gentler depreciation method, KRN's a 12–13% tax rate for two quarters and Gala's an unusually low tax rate.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped by who sets their price. All figures are filed (Screener) and consolidated, except Vilas, Patil and Airfloa, which are SME-listed, report half-yearly and are shown standalone. KRN, Omnitech and Tempsens listed recently, so their histories are short. Only a few of the ten publish an order book, each on its own definition, so there is no order-cover tab. **Start with cash conversion**: several of the fast growers here have not yet turned profit into cash. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The group',
            body: [
                "These ten companies make parts to someone else's design, so their demand is their customers' output and new programmes rather than one industry's capital spending. The backdrop is supportive. Crisil Ratings expects capital-goods revenue to grow 12–14% in FY27 at a 12–13% margin, on order books of about ₹5.2 lakh cr, 3.7 times a year's sales; the RBI puts bank-funded private project spending at ₹3.2 lakh cr in FY27, up from ₹2.6 lakh cr; the grid plans to add 40% more transformer capacity this year than last (CEA); and CareEdge expects Indian data-centre capacity to rise from 1.2 GW to about 4 GW by FY30. But the customers that matter most here are specific: global motor, generator and wind-turbine makers for Pitti and Gala, North American data-centre and oilfield companies for KRN and Omnitech, Maruti Suzuki for Subros, transformer makers for Vilas, and the railways for Airfloa. **My view: the global suppliers are winning share from Chinese and European rivals, which is a stronger and longer driver than any Indian budget; the domestic ones grow with a single customer or programme and should be judged on that customer, not on the capex cycle.**",
            ],
            points: [
                {
                    label: 'Three kinds of business, and where the profit sits',
                    text: "**Qualified suppliers to equipment makers** (Pitti, Gala, KRN, Omnitech, Tempsens) are approved into a customer's product after a long test: 12–24 months at Gala, three to five years for a first Tempsens approval in a critical plant. Once in, the volume recurs and cost rises can be passed on; their operating margins run from about 15% (Gala, Pitti) to 30% and more (Omnitech). **Parts whose price someone else sets** (Subros, Vilas, Everest Kanto) are also designed in, but one buyer or one input price decides the margin: Subros earns about 8% because 82% of its sales go to related parties, chiefly Maruti; Vilas 9–14% because it resells imported electrical steel whose price it cannot set; Everest Kanto 11–16% depending on whether specialist orders come. **Lines and fit-outs** (Patil, Airfloa) are bought once, so every order is a fresh bid and margins swing with the mix delivered in a half-year. **My view: the profit sits where a customer must re-qualify to switch and the contract moves with the metal; a vendor code without a price clause protects the volume, not the margin.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Motors and generators**: Pitti's Q1 revenue came 28% from railway traction, 15% from power generation, 10% from mining, oil and gas and 5% from data-centre generators. **Wind turbines**, where Gala's fasteners are 3–4% of the cost and buyers are under pressure to cut it. **Data-centre cooling**: KRN's data-centre sales tripled in a year as North American coil makers ran short of capacity. **US oilfield and automation equipment**: 49% of Omnitech's Q1 revenue was energy and 52% North America. **Process plants**: petrochemicals, metals and power were together 53.5% of Tempsens' FY26 revenue. **Cars and trucks**: Subros follows Maruti's factory output, plus a rule that made truck-cabin air-conditioning compulsory from June 2025. **The grid**: the FY27 target for new transformer capacity is 158,339 MVA, 40% above FY26 (CEA), which is Vilas's market. **CNG and city gas**: CNG was about 22% of Indian passenger-car sales in FY26, Everest Kanto's core market. **Railways and defence**: railway capex is budgeted at ₹2,93,030cr in FY27, up 10.5% (PRS), and defence production reached a record ₹1.78 lakh cr in FY26, which feeds Airfloa's coach interiors and Patil's ammunition lines. **My view: the export-led demand (data centres, oilfield, wind, global motors) is the fastest; the Indian programmes are steady but pay slowly.**",
                },
                {
                    label: 'Costs, trade and policy',
                    text: "Costs rose everywhere after February 2026: Brent was about US$104 in late September (+51% in a year), copper rose 42% and aluminium 24%, and Haryana and Uttar Pradesh raised minimum wages by 26–32%. Pitti recovered its extra foundry LPG costs from customers during the war and KRN's prices reset to metal each quarter; Subros's wage rises are not covered at all, and Airfloa's price clauses cover only about half of a metal rise. Four rules matter. US tariffs changed repeatedly this year: KRN pays or shares a 25% duty on US coils, and Omnitech sells 52% of its output to North America. The trade regulator DGTR opened an anti-dumping probe into electrical steel from China, Japan, Korea and Russia in June 2026; India imports about 90% of its needs, so a duty would lift Vilas's input cost. The truck-cabin air-conditioning rule doubled Subros's truck revenue. And a ₹351cr GST demand over how Everest Kanto's cylinders are classified is before the tax tribunal. **My view: Q2 and Q3 FY27 margins will lag revenue at every company that passes costs on with a quarter's delay, and at those that do not pass them on at all.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Pitti** depends on motor and generator demand and on filling its new plants without more debt; **Gala** on wind and on customers switching from European suppliers; **KRN** on North American data-centre demand and on filling a plant six times the size of its old one; **Omnitech** on US oilfield customers calling off orders under two master agreements; **Tempsens** on Indian plant building and on four new plants starting on time; **Patil** on car makers' and battery makers' capex; **Subros** on Maruti and on recovering wage rises; **Vilas** on electrical-steel prices, trade rules and its largest customer (40–50% of sales); **Everest Kanto** on CNG vehicles and a GST ruling; **Airfloa** on railway coach tenders and on collecting its bills. **Buy each for what it actually depends on, not for the group label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Qualified suppliers to equipment makers', 'Pitti, Gala, KRN, Omnitech, Tempsens', '15–38%', '15–18%', '**−32% to 84%**', 'Designed in and costs mostly passed on; the fast growers have not yet turned profit into cash'],
                        ['Parts whose price someone else sets', 'Subros, Vilas, Everest Kanto', '8–16%', '12–19%', '**17–63%**', 'One buyer, an imported-steel price or a near-commodity product sets the margin'],
                        ['Lines and fit-outs', 'Patil, Airfloa', '11–24%', '20–26%', '**−30% to 5%**', 'Every order is a fresh bid; unfinished work and government bills tie up cash'],
                    ],
                    note: 'Vilas, Patil and Airfloa report half-yearly, so their margins are for H1 and H2 FY26. KRN, Omnitech and Tempsens have short filed histories.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Capital goods', 'Order books about ₹5.2 lakh cr (Dec 2025), 3.7 times sales; power 50%', '**FY27 revenue +12–14%**, margin 12–13%', 'Crisil, May 2026'],
                        ['Private project capex (bank-funded)', '₹2.6 lakh cr in FY26; about 89% greenfield; infrastructure over half', '**₹3.2 lakh cr in FY27**', 'RBI Bulletin, Sep 2026'],
                        ['Power grid', '113,013 MVA of transformer capacity added in FY26 (90% of target)', 'FY27 target 158,339 MVA (**+40%**)', 'CEA, Sep 2026'],
                        ['Data centres', '1.2 GW of colocation capacity (FY25)', 'About 4 GW by FY30; revenue ~24% a year', 'CareEdge, Mar 2026'],
                        ['Railways', 'FY27 capex ₹2,93,030cr (+10.5%); 39% spent by July', 'Coaches 10,392 (+9%), wagons 32,000, electric locos 1,800', 'PRS; Railway Ministry'],
                        ['Defence', 'Production ₹1.78 lakh cr in FY26 (+15.6%); private share 24%', 'FY27 capital outlay +17.6%; ₹6.73 lakh cr of approvals in FY26', 'Ministry of Defence; PRS'],
                        ['Electrical steel (CRGO)', '4–4.5 lakh tonnes a year, about 90% imported', 'Anti-dumping probe opened June 2026', 'GTRI; DGTR'],
                        ['Temperature sensors', '₹1,880cr (FY26)', '₹2,880cr by FY31, **8.9% a year**', 'Frost & Sullivan, in Tempsens’ prospectus'],
                    ],
                    note: 'No agency publishes forecasts for laminations, springs, coils, machined parts or gas cylinders. The CareEdge data-centre figures were read through press summaries of the release, not the release itself.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2. The grades come from the two earlier notes, which used slightly different scales: for Pitti, Gala and Everest Kanto, **Qualification** and **Pricing power** are the earlier qualification and pricing-power grades; for the other seven they are the earlier technical-barrier and customer-power grades. The test this year was simple: **when copper, aluminium, steel and wages rose, who got paid for it?**",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: designed into the customer’s product',
                    text: "**Pitti** has quarterly price-variation clauses with most customers, so steel and currency moves pass through with about a month's lag, and it recovered its extra LPG costs from customers during the war. Its top ten customers fell from 68% of revenue (FY23) to 51% (FY25), and it signed a multi-year Wabtec deal worth ₹500cr. **Gala** takes 12–24 months to qualify with a customer, after which its share grows from 5–10% to 50–75%; it offers 10–20% savings against European makers and has just replaced a German supplier of seat-belt springs. **Tempsens** says a first approval in a critical plant takes three to five years; customers buying from more than one of its product lines were 60% of FY26 revenue, its top ten customers only 18.6%, and Frost & Sullivan puts it at 10.5% of contact and 21.3% of non-contact sensors. ICRA's counterpoint is fair: in ordinary uses, entry barriers are low. **My view: this is the most durable barrier in the group, enforced by the customer's own risk department.**",
                },
                {
                    label: 'Wearing away: contract terms rather than scarcity',
                    text: "**KRN** resets prices each quarter to average copper and aluminium prices and the rupee, and is India's largest independent coil maker; but its oldest customer, Daikin, pays a fixed rupee margin, its Vertiv approval has so far produced only a sample order, and the harder products (micro-channel and plate exchangers for liquid cooling) are about a year away. **Omnitech** has more than 90% repeat business in motion control and industrial work and is approved at ABB, Siemens and Oshkosh, but the customer owns the drawing, materials pass through with a two-to-three-month lag and there is no energy clause; Crisil notes “limited bargaining power”. **My view: these margins last as long as the shortage and the contract, not longer.**",
                },
                {
                    label: 'Designed in, but the buyer holds the price',
                    text: "**Subros** has 41% of car and truck air-conditioning and is part-owned by Denso (20%) and Suzuki (12%), so Maruti rarely changes it; but it builds Denso designs under licence, paid ₹54.6cr of royalty in FY26, and passes costs on only at cost with a lag. **Vilas** has 5–7% of a fragmented core market and gets a better steel price by ordering 5,000–6,000 tonnes at a time, but lost an export order “at the Chinese price” and depends on one customer for 40–50% of sales. **Everest Kanto** holds PESO and overseas safety approvals, but once specialist defence and semiconductor orders stop it sells a standard seamless cylinder that Chinese and Indian rivals also make, and its margin swung between 11% and 16%. **My view: an approval that the buyer can play against a licensor, an import price or a rival is not pricing power.**",
                },
                {
                    label: 'Barely a moat: a fresh bid each time',
                    text: "**Airfloa** sells to the railways by tender and lost 500 basis points of margin when aluminium rose 80%. **Patil** bids every line afresh and competes by being 20–25% cheaper than Chinese builders, though about 60% of its automotive customers come back for new models. **The tender or the buyer sets the price.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Chinese and European lamination and foundry suppliers against Pitti; Schnorr, Mubea and Nord-Lock in springs and washers; Modine, Direct Coil and Can Coil in data-centre coils; Azad Engineering and Chinese machine shops in precision machining; fragmented Indian makers and importers in temperature sensors; Wipro PARI, Comau and Jendamark in automation lines; Mahle, Sanden, Hanon and Valeo in vehicle air-conditioning; Chinese cylinder makers, Maruti Koatsu, Rama Cylinders, Hexagon and Luxfer in gas cylinders; Kineco and Hindustan Fiberglass Works in coach interiors.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Oil, copper, aluminium, steel and freight all spiked after February 2026, and two big manufacturing states raised minimum wages by 26–32%. Crisil expects capital-goods margins to stay at 12–13%, so a company that held its margin through Q1 FY27 has told us more than one that jumped. The contracts, not the products, decided who kept their margin.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: designed in, costs passed through',
                    text: "**Pitti**'s margin has sat at 16–17% for five quarters; loose laminations earn ₹15,000–18,000 of operating profit a tonne and assemblies ₹30,000–60,000, so the mix, not the percentage, is the thing to track, because steel pass-through lowers the percentage when steel rises. **Gala** has held 15–18% while growing 20%-plus. **Tempsens** keeps a 46–47% gross margin because a sensor costs under 1% of the plant it protects, though its operating margin fell from 23.6% to 20.2% in Q1 as staff costs rose 45% ahead of new plants. **My view: these should hold through the cycle, give or take two points.**",
                },
                {
                    label: 'Structural while the contract holds: pass-through clauses',
                    text: "**KRN** held about 19% consolidated while revenue more than doubled, but its standalone margin fell from 17.3% to 13.6% in Q1, so the new subsidiary is carrying the group, and its target of “20-plus” assumes two incentives (5% of heat-exchanger production under the white-goods scheme and 1.56% of new-plant sales from Rajasthan) that have not yet been booked. **Omnitech**'s margin slid from 38% to 30% in three quarters as materials rose from about 20% to 28% of sales. **My view: the formulas work; the risk is empty capacity once the shortages end.**",
                },
                {
                    label: 'Not structural: set by a buyer, a steel price or a tender',
                    text: "**Subros**'s company-defined margin fell to 8.5% from 10.0% a year earlier, and its absolute operating profit dipped 0.8% while revenue rose 17.5%. **Vilas** earned 9% in H2 FY26 against 14% a year earlier, as steel prices fell: a Chinese order committed at a higher price cost about half a point, and the new plant's staff and overheads did the rest. **Everest Kanto**'s margin swung between 11% and 16% as specialist orders came and went. **Airfloa**'s fell from 25% to 20% in FY26 because its price clauses cover only 50–60% of metal rises. **Patil**'s swings between about 11% and 14% from half to half with the mix of projects delivered. **Treat these as the cycle, not the business.**",
                },
                {
                    label: 'Windfalls: profits lifted by one-offs',
                    text: "**Pitti** earned ₹40cr of mostly state-incentive other income in FY26 that largely drops out in FY27, and its Q1 tax rate was 19%. **Gala** paid unusually low tax (15–18%). **Everest Kanto**'s FY26 profit of ₹147cr included about ₹30cr of deferred-tax credit and a ₹12.6cr US refund; the underlying figure is nearer ₹105cr. **Omnitech**'s Q1 depreciation fell from ₹13.5cr to ₹6.3cr after a method change, and **KRN** paid a 12–13% tax rate in two quarters. **Treat all of these as windfalls, not run-rate.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**KRN**'s inventory days went from 110 to 242 in FY26 and its operating cash was −₹114cr; Crisil puts its gross current assets at 340–350 days. **Airfloa** ended FY26 with ₹214cr of receivables against ₹320cr of revenue and a 264-day cash cycle. **Omnitech**'s cycle is long by design (Crisil: 362 days of gross current assets) and it still had ₹435cr of borrowings in March 2026. **Gala**'s Screener cycle is 294 days (about 180 by its own count), and it has hired KPMG to cut it.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Tempsens**' cash cycle rose from 151 to 210 days in two years as inventory went from 125 to 170 days. **Patil**'s consolidated cycle is 189 days, with ₹57cr of unfinished work, a third of a year's sales. **Subros** stopped using its customer's early-payment facility, so receivables rose ₹124cr and free cash turned to −₹42cr. **Vilas**'s operating cash was −₹42cr in FY25 and −₹2cr in FY26 as stock and receivables grew. **Everest Kanto**'s borrowings rose to ₹267cr from ₹41cr two years ago, with ₹162cr of unfinished projects on the balance sheet.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Omnitech** cut its own working-capital days from 294 to 233 in Q1, as promised, the one fast grower here showing progress. **Pitti** turned 84% of five years' operating profit into operating cash, released working capital in Q1 and cut net debt to ₹491cr at June from ₹555cr in March on its own figures, though it expects only ₹20–30cr more release.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Railway and project work is billed on milestones and machined or engineered parts take months to make, so 150–250 days is normal for Airfloa, Patil and Omnitech. **Subros** runs almost none because Maruti pays quickly and suppliers give credit; **Vilas** keeps two months of imported steel by policy. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Pitti Engineering', '₹150cr expansion commissioned early; ₹290cr foundry and machining under way (₹60cr spent); only ₹20–30cr more working-capital release', 'Net debt ₹491cr at June (₹555cr in March); Ind-Ra net leverage 2.4x at December against a 2.0x trigger'],
                        ['Gala Precision Engi.', 'Wada capex of ₹40–45cr pushed mostly to FY28; KPMG working-capital study; a ₹3cr dispatch held back for non-payment', 'Borrowings ₹38cr against about ₹28cr of unspent IPO money; Crisil BBB+/Positive'],
                        ['KRN Heat Exchan', '₹350cr placement received end-June, “for next two year” of working capital; about ₹100cr of new plant capex', 'Borrowings ₹187cr (March); only ₹17–18cr of ₹46cr cash unencumbered (Crisil)'],
                        ['Omnitech Engineering', 'Working capital 294 → 233 days; ₹250cr Chhapara capex, part slipping into FY28; ₹24.3cr GST refund due', 'Debt about ₹390cr, cash ₹134cr (June); net debt to equity 0.34 → 0.41'],
                        ['Tempsens Instruments', '₹55cr of the ₹95cr fresh issue repaid debt; ₹25cr of land from own cash; plant costs not disclosed', 'Borrowings ₹78cr (March), before the repayment'],
                        ['Patil Automation', 'H2 FY26 call: ₹18.5cr of IPO money to be spent in 3–4 months; in September, a vote to change its use', 'Borrowings ₹21cr, an overdraft against deposits'],
                        ['Subros', 'Kharkhoda (₹150cr) and Karsanpura (~₹175cr) on approved long-term loans; operating cash to recover toward 70–75% of EBITDA', 'Borrowings ₹75cr against ₹143cr of investments (March)'],
                        ['Vilas Transcore', 'H2 FY26 call and a September conference: “at present, no” new capex; FY26’s ~₹60cr fully paid', 'Debt ₹38.9cr incl. ₹17.4cr buyers’ credit; net debt-free'],
                        ['Everest Kanto Cylind', 'No Q1 call; no cash figure given', 'Borrowings ₹267cr (from ₹41cr two years ago); ₹162cr of unfinished projects'],
                        ['Airfloa Rail Techno.', 'H2 FY26 call: ~₹120cr of new loans at 8.25%; equity “will be done” in FY28; ₹48cr acquisition agreed in September', 'Borrowings ₹68cr (March); receivables ₹214cr'],
                    ],
                    note: 'Most companies file cash flows only half-yearly, so Q1 figures are management’s. Vilas, Patil and Airfloa are SME-listed and report half-yearly, so their figures are from the H2 FY26 call and later filings; Everest Kanto held no Q1 FY27 call, so its figures come from filings.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 FY26 call, and my own estimate of earnings growth. Every estimate below weighs the capex under way and whether it is funded by cash, debt or new shares.",
            ],
            points: [
                {
                    label: 'Growth driver: electrification and the grid',
                    text: "Every generator set, traction motor and pump motor needs a laminated core. **Pitti** targets about ₹2,500cr of revenue in FY28 at a 17–17.2% margin, and says machining capacity, not orders, is the limit; mining, oil and gas doubled to 10% of its revenue in a year. **Vilas** tripled its core capacity to 36,000 tonnes and added radiators, nanocrystalline cores and copper conductors into a grid that plans 40% more transformer capacity this year. **Tempsens** is building a plant for medium-voltage heaters (green hydrogen, carbon capture) with ₹200cr of peak revenue potential. **My view: the grid and electrification pool is the most durable here, but Vilas sells into it as a price-taker.**",
                },
                {
                    label: 'Growth driver: data centres and cooling',
                    text: "**KRN** says its new plant will run at 50% in FY27 and 80% in FY28, giving about ₹2,000cr of revenue, 2.7 times the last twelve months; exports should double to ₹200cr, mostly North American data-centre coils. Data-centre generators are already 5% of **Pitti**'s revenue. CareEdge's 1.2 GW to 4 GW forecast is the Indian pool. **My view: strong for two to three years, then dependent on KRN having products for liquid cooling, which it does not yet make.**",
                },
                {
                    label: 'Growth driver: global supply chains',
                    text: "**Gala** sells about a third abroad, offers customers 10–18% savings against European suppliers and guides 20–25% growth a year; its Chennai fastener plant's second phase is due in Q3–Q4 FY27. **Omnitech**'s ₹3,055cr book is 77% energy, but its two largest pieces are master agreements under which it expects only ₹50cr or more of orders this year; a ₹250cr expansion at Chhapara lifts machine-hours by about a third from FY28. **Tempsens** widened its European reach by consolidating German and Polish units (exports +78% in Q1). **Everest Kanto** has a US$75m order book at its US plant and new plants in Mundra and Egypt still ramping up. **My view: this is the deepest runway in the group, but also the one most exposed to freight, tariffs and a few large customers.**",
                },
                {
                    label: 'Growth driver: vehicles, railways and defence',
                    text: "**Subros** expects about ₹300cr of truck air-conditioning in FY27 and ₹400–450cr in two to three years, and electric compressors (up to 3.5 times the content) for three Maruti models from November 2027. **Airfloa** is aimed at Vande Bharat sleeper, Amrit Bharat and metro interiors and a ₹180cr order book it is buying with KIN Railway Equipment. **Patil** builds ammunition and battery-pack lines alongside car lines, with ₹800cr of bids submitted. **My view: the budgets are there, but railway spending grows about 10% a year now and pays slowly, and car-line orders come in lumps.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Pitti** raised its volume targets, commissioned its ₹150cr expansion a quarter early and cut net debt faster than promised. **KRN** grew 119% to a record ₹252cr as it promised “our highest figures ever” each quarter. **Omnitech** grew 61.5%, cut working-capital days from 294 to 233 as promised and nudged growth guidance to 35–40%.",
                },
                {
                    label: 'Cautious',
                    text: "**Tempsens** promises margin recovery only in the second half, and says its ₹500cr peak-revenue figure for the four new plants is not a forecast. **Everest Kanto** gives no guidance at all since its Q3 FY26 call.",
                },
                {
                    label: 'Missed',
                    text: "**Subros** promised a “moderate improvement” in operating profit and delivered a 0.8% fall, cut its truck target from ₹325–350cr to about ₹300cr, delayed Kharkhoda a quarter and withdrew revenue guidance. **Vilas** cut FY27 revenue from ₹750–800cr to about ₹680cr and copper from ₹100–120cr to about ₹80cr. **Airfloa** promised a ₹1,000cr order book by March and reached ₹469cr, and cut FY27 revenue from ₹550cr to ₹500cr. **Everest Kanto** dropped its 15–20% growth guide and then shrank 10%.",
                },
                {
                    label: 'Mixed',
                    text: "**Gala** kept its growth and margin guides but let three dated milestones slip. **KRN**'s Vertiv business is still a sample order, its incentives are unbooked and its capex plan rose by about ₹100cr. **Patil** met its FY26 revenue promise, but its order book shrank while its target rose. **Tempsens** grew revenue 33% ahead of its guide while its margin fell behind.",
                },
                {
                    label: 'My outlook',
                    text: "Demand is strongest where these companies supply global makers (motors, data-centre cooling, oilfield and wind) and steadier but slower-paying where they follow an Indian customer or programme. **I expect KRN to compound earnings at about 25%, Gala and Omnitech at about 22%, Pitti at about 20%, Tempsens and Patil at about 18%, Airfloa at about 15%, Vilas at about 12%, Subros at about 10% and Everest Kanto at about 5% (down from 8%, because FY26 profit was lifted by tax credits).** The shared risks are a US data-centre or oilfield slowdown, metal and energy prices staying high, and growth continuing to be funded by new shares and debt rather than cash.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['KRN Heat Exchan', 'New plant to 80% by FY28; data-centre exports; after a second share issue', '15% / **25%** / 35%'],
                        ['Gala Precision Engi.', 'Wind and industrial springs; fasteners; share from Europe', '15% / **22%** / 28%'],
                        ['Omnitech Engineering', 'Chhapara plants from FY28; energy master agreements; depreciation change', '12% / **22%** / 30%'],
                        ['Pitti Engineering', 'Assemblies and machining; data-centre and mining motors', '14% / **20%** / 26%'],
                        ['Tempsens Instruments', 'Four plants with ₹500cr peak revenue from FY28; OEM business', '10% / **18%** / 25%'],
                        ['Patil Automation', 'FY27 ₹260–270cr target against a ₹118cr book; defence and battery lines', '8% / **18%** / 26%'],
                        ['Airfloa Rail Techno.', 'Coach programmes; KIN acquisition; debt and capitalised research', '0% / **15%** / 25%'],
                        ['Vilas Transcore', 'Filling 36,000 tonnes; copper conductors; steel prices', '5% / **12%** / 20%'],
                        ['Subros', 'Maruti volumes; truck AC; electric compressors from FY28', '4% / **10%** / 15%'],
                        ['Everest Kanto Cylind', 'CNG vehicles; new plants; GST case', '0% / **5%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Pitti Engineering', 'Laminations 82,000t and castings 17,000t in FY27 (raised); operating profit about ₹370cr; FY28 revenue about ₹2,500cr', '₹290cr foundry and machining; possible ₹400cr Bengaluru plant', '**Beat**: targets raised; expansion a quarter early; net debt ahead of path'],
                        ['Gala Precision Engi.', 'Revenue +20–25%; margin 17–19% by FY27 end', 'Chennai phase 2 in Q3–Q4; Wada ₹40–45cr mostly FY28', '**Slipping**: growth kept at 19.5%, margin 16.3%; three milestones late'],
                        ['KRN Heat Exchan', 'Above ₹1,000cr in FY27; ₹2,000cr in FY28; margin “20-plus”', '₹30–40cr plus ~₹100cr for Bangalore and Rajasthan', '**Delivering**: revenue +119%; Vertiv only samples; incentives unbooked'],
                        ['Omnitech Engineering', 'Growth 35–40%; margin “30% and above”', '₹250cr at Chhapara, partly into FY28', '**Delivering**: +61.5% and working capital down; margin at the band’s floor'],
                        ['Tempsens Instruments', 'FY27 growth ~25%; margin “broadly similar” to FY26, recovering in H2', 'Four plants; rupee cost not disclosed', '**Too early**: one call; revenue +33% ahead, margin behind'],
                        ['Patil Automation', 'FY27 ₹260–270cr; FY28 ₹380–385cr; PAT 10–11%', 'New plant for FY28 undecided; IPO use being changed', '**Mixed**: FY26 target met; order book fell to ₹118cr'],
                        ['Subros', 'Revenue guidance withdrawn; “moderate single digits”; 12% margin pushed out', 'Kharkhoda ₹150cr (Q3 FY27); Karsanpura ~₹175cr', '**Missed**: operating profit −0.8%; truck target cut; plant a quarter late'],
                        ['Vilas Transcore', 'FY27 revenue ~₹680cr (from ₹750–800cr); PAT at least 7%', 'None new “at present”', '**Walked back**: revenue and copper targets cut within four months'],
                        ['Everest Kanto Cylind', 'None since the Q3 call (was +15–20% growth and a 15–17% margin)', 'Mundra and Egypt ramping', '**Missed**: Q1 revenue −10%; margin 13.6%'],
                        ['Airfloa Rail Techno.', 'FY27 ~₹500cr (from ₹550cr) at 12–13% PAT', '₹30–35cr plant; ₹25cr JV; ₹48cr acquisition', '**Missed**: order book ₹469cr against ₹1,000cr promised'],
                    ],
                    note: 'Vilas, Patil and Airfloa compare the H1 FY26 call with the H2 FY26 call and later conferences; Tempsens has held only one call; Everest Kanto held no Q1 FY27 call.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Customers, rules and tariffs',
                    text: "**Subros** sold 82% of FY26 output to related parties, chiefly Maruti, whose factory output, not its sales, sets Subros's volume. **Vilas** depends on one customer for 40–50% of sales, and a DGTR duty on electrical steel would raise its costs. **KRN**'s oldest customer pays a fixed rupee margin and its US coils carry a 25% duty; **Omnitech** (52% of Q1 revenue from North America) is exposed to US tariffs and to oilfield spending. **Gala** depends on wind-turbine makers, whose buyers switch suppliers slowly. **Airfloa** sells mostly to the government by tender (about 89% of its order book). **These are not timing risks; they decide what normal profit is.**",
                },
                {
                    label: 'Cash, dilution and debt',
                    text: "**KRN** had free cash of −₹312cr in FY26, raised ₹350cr at IPO and ₹350cr more 19 months later, and carries ₹29.4cr of export obligations under duty-free import schemes (₹8.1cr a year earlier) that become payable if exports fall short. **Omnitech** has had negative free cash in both filed years and borrowings backed by directors' personal guarantees. **Airfloa** is adding about ₹120cr of loans while operating cash is negative and says equity may follow in FY28. **Pitti**'s net leverage was 2.4x at December, above the 2.0x that Ind-Ra says could trigger a downgrade if sustained, while it plans to debt-fund most of a ₹290cr plant. **Growth funded by shareholders and lenders has to earn more than growth funded by customers.**",
                },
                {
                    label: 'Auditor remarks and accounting choices',
                    text: "**KRN**'s auditor flagged revenue recognition because of fast growth, a new trading activity (trading purchases up from ₹3.4cr to ₹34.2cr) and sales to its own subsidiary. **Omnitech**'s Q1 depreciation fell from ₹13.5cr to ₹6.3cr after a method change, and its auditor could not confirm the edit log of its stock software. **Airfloa** will capitalise research of 8–9% of sales, uses a small local auditor and Indian GAAP. **Subros** capitalised ₹31.1cr of development cost, a key audit matter. **Everest Kanto**'s auditor flagged ₹19cr of plant and projects idle because demand for some products fell.",
                },
                {
                    label: 'Contingent liabilities and disputes',
                    text: "**Everest Kanto** faces a ₹351cr GST, interest and penalty demand over product classification, against a market value of about {mcap:Everest Kanto Cylind|₹1,240cr}; management expects clarity in 6–12 months. **Gala** faces a patent suit from Nord-Lock over its Gallock washers and an August income-tax search. **Subros**'s contingent liabilities rose from ₹47.8cr to ₹79.5cr, led by customs (₹37.6cr from ₹7.8cr). **Tempsens**' prospectus disclosed an ₹11cr civil claim against a subsidiary, about 15% of FY26 profit. **Airfloa** was fined for late related-party disclosure and faces about ₹0.9cr of company-law penalties for CSR lapses.",
                },
                {
                    label: 'Related parties and promoter economics',
                    text: "**Vilas** bought ₹34.8cr in FY26 from Atlas Transformers, 98.7% owned by its managing director, sought approval for up to ₹100cr a year, and put 75% of a new bushing venture with the promoter so as not to risk the listed company's money, in his words. **Patil** pays ₹4.64cr of factory rent to its MD and a director, about 29% of standalone profit, plus ₹3.5cr of their salaries, and is changing the use of its IPO money. At **Tempsens**' August listing, ₹555cr of the ₹650cr issue was sold by five individual shareholders, not the managing family.",
                },
                {
                    label: 'Input costs, people and disclosure',
                    text: "Oil, copper and wages are rising faster than lagged pass-through, so **Subros, KRN, Airfloa and Vilas** will feel it in Q2–Q3 FY27. **Vilas** changed its CFO twice in FY26 and lost its company secretary in July; **Everest Kanto** held no Q1 call and has appointed a new CEO without giving his background. Disclosure is thin at **KRN** (no order book), **Tempsens** (plant costs not disclosed) and **Patil** (management often lacked figures on calls).",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 10x, 13% at 19x, 16% at 25x, 18% at 30x, 19% at 34x, 21% at 38x, 24% at 50x, 28% at 67–70x and 32% at 95x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|Three} of the {count:live|ten} are priced for about what I expect, {count:full|four} are full and {count:stretched|three} are stretched**; for most, the question is price and cash, not quality.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Pitti** (₹664cr of net debt on Screener at March), **Omnitech** (₹271cr), **Everest Kanto** (₹178cr), **Airfloa** (₹55cr, rising with ₹120cr of new loans), **Tempsens** (₹44cr before its IPO repayment) and **Patil** (₹6cr) carry debt the P/E ignores, so they are dearer than they look. **KRN** (₹209cr after its placement), **Subros** (₹106cr), **Vilas** (₹55cr) and **Gala** (₹12cr) hold net cash.",
                },
                {
                    label: 'Fits: prices that ask for about what I expect',
                    text: "**Pitti** needs about {need:Pitti Engineering|20}% a year against my ~20%, and **Gala** about {need:Gala Precision Engi.|21}% against my ~22%. These are the two I would own. **Everest Kanto** needs about {need:Everest Kanto Cylind|5}% against my ~5%, so it fits on price, but it is cheap because a standard cylinder has little pricing power and because of a ₹351cr GST demand; I pass.",
                },
                {
                    label: 'Full: a few points ahead of my estimates',
                    text: "**Omnitech** needs about {need:Omnitech Engineering|28}% against my ~22% and **Patil** about {need:Patil Automation|24}% against ~18%. **Vilas** needs about {need:Vilas Transcore|16}% against ~12%, and **Airfloa** about {need:Airfloa Rail Techno.|19}% against ~15%. For Omnitech the gap is the price of cash that has not yet arrived; for Patil, orders that have not yet been won; for Vilas and Airfloa, a margin set by someone else.",
                },
                {
                    label: 'Stretched',
                    text: "**KRN** needs about {need:KRN Heat Exchan|32}% a year against my ~25% and **Tempsens** about {need:Tempsens Instruments|28}% against ~18%: promising businesses priced for years of flawless delivery. **Subros** needs about {need:Subros|17}% against ~10%, more than a supplier whose customer sets its margin has delivered.",
                },
                {
                    label: 'Earnings quality: which P/Es flatter',
                    text: "The live P/E uses reported trailing profit. It **flatters** Everest Kanto (tax credits and a US refund), Omnitech (about ₹7cr a quarter of lower depreciation), KRN (a 12–13% tax rate in two quarters), Pitti (state-incentive income that drops out in FY27) and Gala (a low tax rate). **On core profit, Everest Kanto, Omnitech and KRN are a little more expensive than the table shows.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Pitti Engineering', rank: 1, stance: 'COMPOUNDER', segment: QUAL,
            what: "Electrical-steel laminations, stator and rotor assemblies, castings and machined parts for motors and generators, sold to Wabtec, Siemens, Cummins, Caterpillar, ABB and Nidec.",
            view: "**The strongest recurring position in the sector, at a price that fits.** Designed into customers' motors with steel passed through, assemblies +37% in Q1, targets raised and about ₹370cr of FY27 operating profit guided. But return on capital fell from 19% to 15%, profit before tax was flat in Q1, and net leverage sits above Ind-Ra's downgrade trigger while two more plants are built: the ₹290cr Hyderabad casting plant and a ₹450cr Bengaluru lamination plant approved on 22 October, partly with debt. The price needs about {need:Pitti Engineering|20}% a year against my ~20%.",
            watch: 'Margin moving from 16.8% in Q1 FY27 (company’s adjusted figure) towards the 18%-plus management expects as new capacity fills (about 17% in FY28; it gives no quarterly path); net debt below ₹491cr while the ₹290cr plant is built; direct exports growing again.',
        },
        {
            company: 'Gala Precision Engi.', rank: 2, stance: 'SCALEUP', segment: QUAL,
            what: "Disc springs, coil springs and high-strength fasteners for wind turbines, industrial machinery and cars, with vendor codes at Vestas, Siemens Energy, ABB, Schaeffler and John Deere.",
            view: "**The vendor code is the moat, and the price fits.** It takes 12–24 months to enter a customer and then wins 50–75% of its spend; Q1 grew 19.5% with a firm book of ₹110cr, up 30–40%. But free cash was negative in FY25 and FY26, three milestones slipped in one quarter, and an income-tax search in August has an unknown outcome. The price needs about {need:Gala Precision Engi.|21}% a year against my ~22%.",
            watch: 'KPMG’s working-capital plan and FY27 operating cash; any demand from the income-tax search; margin reaching 17–19%.',
        },
        {
            company: 'KRN Heat Exchan', rank: 3, stance: 'PRICED', segment: QUAL,
            what: "Fin-and-tube heat-exchanger coils for commercial air-conditioning, refrigeration and data-centre cooling, plus bus air-conditioning and railway products, sold in India and North America.",
            view: "**The best contract terms here, selling into a shortage, but the profit is not arriving as cash.** Operating cash was −₹76cr against ₹168cr of profit over FY24–FY26, the three years on record, and −₹114cr in FY26; free cash was −₹312cr and equity was raised twice in 19 months. Prices reset quarterly to metal and the rupee, Q1 revenue rose 119% and management targets ₹2,000cr in FY28, but inventory days more than doubled and standalone margin fell to 13.6%. The price needs about {need:KRN Heat Exchan|32}% a year against my ~25%. It moves from follow to wait, and returns to follow when operating cash turns positive and converts most of its profit, with Vertiv ordering in volume.",
            watch: 'Positive operating cash in FY27; Vertiv volume orders; the unbooked incentives appearing in profit; any further promoter selling after the 1.5% sold on 9 June.',
        },
        {
            company: 'Omnitech Engineering', rank: 4, stance: 'SCALEUP', segment: QUAL,
            what: "Build-to-print precision machining and sub-assemblies for oilfield-services, automation and industrial equipment makers, 78% exported, moving into aerospace and defence.",
            view: "**Real momentum, but the profit is not arriving as cash.** Operating cash was −₹11cr against ₹174cr of profit over FY23–FY26, the four years on record, and −₹2cr in FY26; free cash has been negative. Revenue rose 61.5% in Q1, the order book is ₹3,055cr and working capital fell as promised, but the margin slid from 38% to 30% in three quarters, Q1 profit leaned on a depreciation change, and the two biggest orders are master agreements that ramp slowly. The price needs about {need:Omnitech Engineering|28}% a year against my ~22%. It moves from follow to wait, and returns to follow when operating cash turns positive and converts most of its profit at a 30% margin.",
            watch: 'Positive operating cash in FY27; margin holding at 30%; firm call-offs under the energy agreements.',
        },
        {
            company: 'Tempsens Instruments', rank: 5, stance: 'PRICED', segment: QUAL,
            what: "Temperature sensors, specialised cables and electrical heaters for petrochemical, metal, power and defence plants, from Udaipur and five plants abroad; listed in August 2026.",
            view: "**The right kind of business, bought at a listing price.** Sensors are safety-critical and cheap next to the plant, 60% of revenue comes from customers buying several products, and Q1 revenue grew 33%. But the margin slipped to 20% as staff costs rose 45%, the cash cycle is 210 days, and 85% of the issue was sold by existing holders. The price needs about {need:Tempsens Instruments|28}% a year against my ~18%.",
            watch: 'Margin recovery in H2 FY27 as promised; inventory days falling from 170; the four plants starting on time.',
        },
        {
            company: 'Patil Automation', rank: 6, stance: 'SCALEUP', segment: PROJ,
            what: "Robotic welding, assembly and test lines for car, electric-vehicle, battery-storage and ammunition makers, with two 60%-owned subsidiaries; SME-listed.",
            view: "**A capable integrator whose targets outrun its order book.** FY26 revenue of ₹167cr met its promise and non-automotive work has grown fast. But the order book fell from ₹170cr to ₹118cr while the FY27 target rose to ₹260–270cr, operating cash was negative, rent and pay to the promoter family are large against profit, and it is changing the use of its IPO money. The price needs about {need:Patil Automation|24}% a year against my ~18%.",
            watch: 'Order book rebuilt above ₹200cr in H1 FY27; positive operating cash; the details of the IPO-money change.',
        },
        {
            company: 'Subros', rank: 7, stance: 'CYCLICAL', segment: TAKER,
            what: "Car, truck, bus and railway air-conditioning systems and compressors on Denso technology; 82% of FY26 sales went to related parties, chiefly Maruti Suzuki.",
            view: "**A supplier whose customer holds the power.** It has about 41% of car and truck air-conditioning, and the truck rule and electric compressors add content. But Q1 operating profit fell while revenue rose 17.5%, guidance was withdrawn, the 12% margin goal is pushed out, operating cash fell 40% in FY26 and contingent liabilities rose to ₹79.5cr. On 27 October 2026 Maruti awarded it HVAC assemblies worth about ₹1,225cr over a seven-year model life, about 31% of a year's sales, which shows the customer link but is spread thin. The price needs about {need:Subros|17}% a year against my ~10%.",
            watch: 'Customers compensating the wage rises (margin back above 9.5%); Kharkhoda starting in Q3 FY27; operating cash back above ₹200cr.',
        },
        {
            company: 'Vilas Transcore', rank: 8, stance: 'CYCLICAL', segment: TAKER,
            what: "Transformer cores and laminations from imported electrical steel, plus radiators, nanocrystalline cores and copper conductors; SME-listed.",
            view: "**Growing into a transformer boom as a price-taker.** Volume rose 65% in FY26 and capacity tripled, but revenue grew only about 30% as steel prices fell, guidance was cut within four months, and operating cash has been negative for two years. It buys ₹35cr a year from its MD's own company and keeps 75% of a new venture with the promoter. The price needs about {need:Vilas Transcore|16}% a year against my ~12%.",
            watch: 'Positive operating cash in H1 FY27; related-party purchases from Atlas; PAT margin holding at 7% or more.',
        },
        {
            company: 'Everest Kanto Cylind', rank: 9, stance: 'CYCLICAL', segment: TAKER,
            what: "Seamless steel and composite gas cylinders for CNG vehicles, city-gas stations and industrial gases, with plants in India, the US, Dubai and Egypt.",
            view: "**Certified, cheap and shrinking.** The Indian business earned 16% in FY26, but group revenue fell 10% in Q1, guidance was dropped, no call was held, FY26 profit was lifted by about ₹42cr of tax credit and refund, and a ₹351cr GST demand is pending. I trim my estimate from 8% to 5%; the price needs about {need:Everest Kanto Cylind|5}% a year, so it fits, but for good reason.",
            watch: 'The GST ruling; Mundra and Egypt lifting group revenue; the US and Dubai units.',
        },
        {
            company: 'Airfloa Rail Techno.', rank: 10, stance: 'AVOID', segment: PROJ,
            what: "Railway coach interiors, seating and structural assemblies for Indian Railways and metros, with small defence and simulator work; SME-listed.",
            view: "**Profit not yet cash, promises ahead of orders.** Revenue grew 66% in FY26, but operating cash was −₹57cr, receivables equal two-thirds of a year's sales, and it plans to capitalise research of 8–9% of sales while borrowing for a plant, a defence venture and a ₹48cr acquisition. It promised a ₹1,000cr order book and reached ₹469cr.",
            watch: 'Positive operating cash and receivables falling toward the promised 60–70 days; how much research goes on the balance sheet; the KIN deal’s terms.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Qualified suppliers to equipment makers.** **Pitti Engineering: own.** The core holding: designed into motors and generators, steel passed through, markets tied to electricity, at a price that fits; watch its debt. **Gala Precision: own.** The same model at a smaller scale, with 25 years of vendor codes; watch its cash and the tax search. **KRN (KRN Heat Exchan): wait**, moved down from follow. The best contract terms and a real shortage, but operating cash was −₹76cr against ₹168cr of profit over FY24–FY26. **Omnitech: wait**, moved down from follow. Remarkable margins for machining, but operating cash was −₹11cr against ₹174cr of profit over FY23–FY26. **Tempsens: wait.** A good business that must show its margin and cash as a listed company.",
            "**Parts whose price someone else sets.** **Subros: pass.** Maruti and wage law set its margin. **Vilas Transcore: pass.** A price-taker with related-party dealings to watch. **Everest Kanto: pass.** Cheap, shrinking and facing a large GST demand.",
            "**Lines and fit-outs.** **Patil Automation: wait**, until the order book matches the target. **Airfloa Rail (Airfloa Rail Techno.): avoid**, until profit becomes cash.",
            "**What would change my view.** For the better: KRN turning cash-positive and Vertiv ordering in volume; Omnitech's operating cash turning positive at a 30% margin; Tempsens' margin recovering in the second half; Patil's order book rebuilt above ₹200cr; Subros's customers paying for the wage rises; a favourable GST ruling for Everest Kanto. For the worse: Pitti adding a debt-funded plant before the last two earn; a US data-centre or oilfield slowdown; an anti-dumping duty on electrical steel; Gala's cash cycle staying near 300 days.",
            "**What to watch next quarter.** Pitti: margin and debt. Gala: cash and the tax search. KRN: operating cash and Vertiv. Omnitech: margin and cash. Tempsens: second-half margin. Patil: order book. Subros: wage compensation and Kharkhoda. Vilas: cash and Atlas. Everest Kanto: the GST ruling and its new plants. Airfloa: collections.",
        ],
        bottomLine:
            "In this group the moat is a vendor code inside a customer's machine, and it pays only where the contract moves with the metal. Own the suppliers customers have designed in and cannot easily re-qualify, at prices that fit (Pitti Engineering and Gala Precision); wait on KRN and Omnitech until their profit arrives as cash; and pass on anyone whose margin is set by one buyer, an imported-steel price or a tender.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/PITTIENG/consolidated/' },
        { label: 'Capital goods sector may post 14% growth in FY27 (Crisil) — BizzBuzz, May 2026', url: 'https://www.bizzbuzz.news/national/indias-capital-goods-sector-may-post-14-growth-in-fy27-crisil-1391772' },
        { label: 'Capital goods revenue to grow 12–14% in FY27 (Crisil Ratings) — Upstox, May 2026', url: 'https://upstox.com/news/market-news/latest-updates/capital-goods-industry-likely-to-witness-revenue-growth-of-12-14-this-fiscal-crisil-ratings/article-194267/' },
        { label: 'Private sector capex projected at ₹3.2 lakh cr in FY27 (RBI Bulletin) — Whalesbook, Sep 2026', url: 'https://www.whalesbook.com/news/English/economy/Indian-Private-Sector-Capex-Projected-to-Hit-indian-rupee32-Lakh-Crore-by-FY27/6ab6b2415aacb956d080c074' },
        { label: 'Grid transformation capacity added in FY26 and the FY27 target (CEA) — Outlook Business, Sep 2026', url: 'https://www.outlookbusiness.com/spotlight/news-wire/india-adds-113013-mva-grid-transformation-capacity-in-fy26-meets-90-of-cea-target' },
        { label: 'Railways demand for grants 2026-27 — PRS Legislative Research', url: 'https://prsindia.org/files/budget/budget_parliament/2026/DfG_Analysis_2026-27-Railways.pdf' },
        { label: 'Railway capex to July and Kavach progress — NewKerala/ANI, Aug 2026', url: 'https://www.newkerala.com/news/a/indian-railways-utilises-rs-114-lakh-crore-39-737.htm' },
        { label: 'India’s defence production hits a record ₹1.78 lakh crore in FY26 — DD India, Jun 2026', url: 'https://ddindia.co.in/2026/06/indias-defence-production-hits-record-rs-1-78-lakh-crore-in-fy26-rajnath-singh-hails-milestone/' },
        { label: 'Defence ministry cleared ₹6.73 lakh crore of proposals in FY26 — Bharat Shakti, Sep 2026', url: 'https://bharatshakti.in/defence-ministry-clears-rs-6-73-lakh-crore-worth-of-acquisition-proposals-in-fy26/' },
        { label: 'Anti-dumping probe on electrical steel and import dependence (GTRI) — The Hitavada, Jun 2026', url: 'https://www.thehitavada.com/Encyc/2026/6/27/anti-dumping-duty-on-electrical-steel-may-push-transformer-costs-impact-grid-expansion-gtri.html' },
        { label: 'Pitti Engineering rating rationale — India Ratings, Apr 2026', url: 'https://www.indiaratings.co.in/pressrelease/82800' },
        { label: 'KRN Heat Exchanger Q1 FY27 earnings call — company', url: 'https://krnheatexchanger.com/wp-content/uploads/2026/08/transcript-for-Q1fy27.pdf' },
        { label: 'KRN Heat Exchanger rating rationale — Crisil, Jun 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/KRNHeatExchangerAndRefrigerationLimited_June%2004_%202026_RR_397803.html' },
        { label: 'Omnitech Engineering annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=130aff06-b7ec-4157-91fd-4dc383121970.pdf' },
        { label: 'Omnitech Engineering rating rationale — Crisil, Apr 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/OmnitechEngineeringLimited_April%2015_%202026_RR_393843.html' },
        { label: 'Tempsens Instruments Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=045effe6-59ff-4ec6-bbbd-50896b72d868.pdf' },
        { label: 'Tempsens Instruments rating rationale — ICRA, Nov 2025', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=139288' },
        { label: 'Subros Q1 FY27 earnings call — company', url: 'https://www.subros.com/zip/20260814155359-415887976275.pdf' },
        { label: 'Subros annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d5a95f9a-0dde-4304-a6d1-c0c50456925e.pdf' },
        { label: 'Vilas Transcore rating rationale — ICRA, Sep 2026', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=145665' },
        { label: 'Vilas Transcore annual report FY26 — NSE', url: 'https://archives.nseindia.com/annual_reports/SME_AR_31397_VILAS_2025_2026_A_9168561_04092026171014.pdf' },
        { label: 'Everest Kanto Cylinder annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=96447a6d-e139-4ea5-888b-18bc77535e54.pdf' },
        { label: 'Patil Automation annual report FY26 — NSE', url: 'https://archives.nseindia.com/annual_reports/SME_AR_30995_PATILAUTOM_2025_2026_A_7303941_01092026163426.pdf' },
        { label: 'Airfloa Rail Technology annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f7f6353c-1893-4931-941b-d19efe9b4a73.pdf' },
    ],
};
