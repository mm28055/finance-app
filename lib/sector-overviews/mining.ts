import { SectorOverview } from './types';
import { miningBusinesses } from './mining-businesses';
import { miningValuationInputs } from './card-data/mining';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const RECYCLE = 'Metal recyclers — lead, aluminium and copper from scrap';
const MINING = 'Miners and mining services — iron ore, bauxite, coal and industrial minerals';

export const miningMetalsRecycle: SectorOverview = {
    sector: 'Mining & Metals Recycle',
    title: 'Mining & Metals Recycle',
    format: 'ranked',
    businesses: miningBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: miningValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Gravita India': 17,
            '20 Microns': 8,
            'Godavari Power': 10,
            'Pondy Oxides & Chem.': 20,
            'Ardee Industries': 12,
            'Ashapura Minechem': 7,
            'Caliber Mining & Log': 15,
            'CMR Green Tech': 15,
        },
    },
    standfirst:
        "Eight companies that dig up or recycle metals and minerals. Four recycle scrap: Gravita (lead, aluminium, plastic and copper, in India and abroad), Pondy Oxides (lead and copper), Ardee (lead) and CMR Green (aluminium for car-part makers). Four mine or serve mines: Godavari Power mines iron ore and makes pellets and steel; Ashapura mines bauxite in Guinea and bentonite in India; 20 Microns grinds minerals into fillers for paint and plastics; and Caliber removes earth and digs coal for Coal India. This edition was rebuilt from the last two earnings calls of every company (checked against the official transcripts), the FY26 annual reports or IPO prospectus, rating reports from CRISIL and ICRA, and industry data from CRISIL Intelligence, ICRA, SIAM, Fastmarkets, BigMint and Alcircle. The headline: demand is fine, supply is not. A Gulf ban on scrap exports and slow shipping cut the recyclers' volumes in Q1 even as their profit per tonne hit records; a price slump and a planned export cap in Guinea squeezed Ashapura; and Godavari had to buy ore in the market and shut a pellet plant. The annual reports added related-party loans, guarantees and disputed claims that the calls barely mentioned. Every chart uses filed results; three of the companies listed only in 2026.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): all consolidated except Ardee (standalone). Operating profit ÷ sales. Blank where a newly listed company did not file the quarter.',
            note: 'Recyclers earn a thin margin on a high metal price (4–12%); the miners and mining-services firms earn 11–28%.',
            values: {
                'Gravita India': [10, 10, 12, 10, 7],
                '20 Microns': [13, 14, 13, 12, 13],
                'Godavari Power': [24, 20, 19, 27, 19],
                'Pondy Oxides & Chem.': [7, 8, 7, 6, 6],
                'Ardee Industries': [14, null, null, 11, 10],
                'Ashapura Minechem': [13, 14, 12, 7, 11],
                'Caliber Mining & Log': [24, null, null, 28, 17],
                'CMR Green Tech': [6, null, 4, 5, 4],
            },
            cellNotes: {
                'Gravita India': 'Q1 FY27 is the filed 7%. The company’s own 9.8% adds back ₹35cr of hedging and currency gains that the accounts book as other income.',
                'Ashapura Minechem': 'Q4 FY26 is the filed 6–7% (₹128cr). The company’s ₹211cr ‘EBITDA’ includes ₹88cr of other income.',
                'CMR Green Tech': 'Filed figures. The company’s adjusted EBITDA adds forex and hedge items booked as other income (₹139.5cr against ₹134cr filed in Q1 FY27).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Blank where the quarter a year earlier was not filed.',
            note: 'Recyclers’ revenue moves with metal prices as well as volumes. Ashapura’s jumps come from bauxite shipments from Guinea.',
            values: {
                'Gravita India': [15, 12, 2, 13, 42],
                '20 Microns': [7, -4, 0, 15, -1],
                'Godavari Power': [-1, 3, -12, 10, 32],
                'Pondy Oxides & Chem.': [36, 11, 53, 78, 55],
                'Ardee Industries': [null, null, null, null, 35],
                'Ashapura Minechem': [90, 58, 11, 255, 19],
                'Caliber Mining & Log': [null, null, null, null, 67],
                'CMR Green Tech': [null, null, null, 45, 65],
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
            note: 'Gravita’s return has fallen from 31% to 16% as it spends on new plants and holds more stock; Ardee’s and Pondy’s have risen.',
            values: {
                'Gravita India': [31, 32, 28, 22, 16],
                '20 Microns': [19, 19, 22, 19, 17],
                'Godavari Power': [54, 27, 29, 23, 21],
                'Pondy Oxides & Chem.': [null, null, 14, 16, 23],
                'Ardee Industries': [null, null, 16, 29, 49],
                'Ashapura Minechem': [12, 16, 17, 19, 21],
                'Caliber Mining & Log': [26, 30, 21, null, null],
                'CMR Green Tech': [20, 7, 8, 12, 14],
            },
            cellNotes: {
                'Godavari Power': 'FY22 was a peak year for iron ore and steel prices.',
                'Ardee Industries': 'FY26 is inflated by a tiny equity base before the August 2026 IPO; management expects ‘20-plus’ once the new equity is counted.',
                'Caliber Mining & Log': 'Screener has no FY25–FY26 ratio. The company reports 20.8% for FY25 and 16.6% for FY26.',
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
            note: 'Recyclers carry scrap and metal stock and pay suppliers almost immediately, so cash is tied up for 50–140 days.',
            values: {
                'Gravita India': [119, 99, 117, 92, 139],
                '20 Microns': [94, 87, 104, 126, 126],
                'Godavari Power': [76, 50, 60, 67, 73],
                'Pondy Oxides & Chem.': [null, 68, 57, 66, 69],
                'Ardee Industries': [null, 41, 64, 43, 49],
                'Ashapura Minechem': [154, 158, 12, 103, -22],
                'Caliber Mining & Log': [-98, -53, 45, null, 30],
                'CMR Green Tech': [91, 56, 69, 80, 87],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Godavari converts best; the fast-growing recyclers (CMR, Pondy, Ardee) have put almost all their profit back into stock and receivables.',
            values: {
                'Gravita India': [5, 97, 15, 86, 38, 48],
                '20 Microns': [44, 73, 51, 27, 85, 56],
                'Godavari Power': [71, 85, 79, 75, 92, 79],
                'Pondy Oxides & Chem.': [null, 99, 92, -76, -21, 4],
                'Ardee Industries': [null, -61, -89, 12, 20, 0],
                'Ashapura Minechem': [112, 54, 59, 50, 83, 69],
                'Caliber Mining & Log': [62, 49, 19, null, 94, 63],
                'CMR Green Tech': [-40, 294, 34, -30, -91, -1],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'Only Godavari and 20 Microns have produced free cash over five years. Caliber spends about a third of its revenue on mining equipment.',
            values: {
                'Gravita India': [-2.8, 3.3, -1.8, 4.5, -1.1, 0.6],
                '20 Microns': [1.2, 7.2, 4.4, -4.9, 8.1, 3.2],
                'Godavari Power': [13.3, 8.8, 11.4, 6.7, 1.3, 8.3],
                'Pondy Oxides & Chem.': [1.8, -2.2, 1.8, -8.3, -3.2, -3.1],
                'Ardee Industries': [null, -8.7, -9.8, -2.3, 1.5, -2.9],
                'Ashapura Minechem': [-2.7, -2.0, -6.9, -7.8, 3.5, -2.1],
                'Caliber Mining & Log': [-25.6, -12.5, -33.5, null, -13.3, -19.5],
                'CMR Green Tech': [-6.1, 8.4, -1.2, -5.0, -6.3, -2.4],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Godavari only.',
            note: 'Below zero means more cash than debt. Godavari holds net cash; CMR Green and Caliber carry the most debt.',
            values: {
                'Gravita India': [1.7, 1.5, 1.6, -0.4, 1.2],
                '20 Microns': [1.3, 0.9, 0.6, 1.1, 0.6],
                'Godavari Power': [-0.2, -0.6, -0.8, -0.7, -0.9],
                'Pondy Oxides & Chem.': [4.9, 2.0, 1.0, 0.7, 0.7],
                'Ardee Industries': [null, 3.5, 5.0, 2.5, 1.1],
                'Ashapura Minechem': [5.9, 3.8, 3.3, 2.8, 2.0],
                'Caliber Mining & Log': [2.7, 2.2, 3.3, null, 2.3],
                'CMR Green Tech': [1.5, 1.6, 2.4, 3.0, 3.1],
            },
            cellNotes: {
                'Caliber Mining & Log': 'FY25 figures were not filed on Screener.',
                'Godavari Power': 'Counts treasury investments as cash. The company states net cash of ₹837cr at March 2026 and CRISIL about ₹700cr; borrowings were ₹443cr, so it is net cash, not debt-free.',
                'Gravita India': 'Screener counts ₹736cr of borrowings against cash only. Counting its investments, the company put net debt at about ₹118cr in March and ₹150cr in June 2026.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Recyclers need little plant for their sales; Caliber buys fleets of mining machines and Godavari spent a fifth of sales on new plants in FY26.',
            values: {
                'Gravita India': [3.3, 3.9, 3.1, 2.8, 5.1, 3.7],
                '20 Microns': [4.5, 1.8, 2.6, 8.4, 2.8, 4.1],
                'Godavari Power': [11.4, 7.9, 7.8, 10.0, 20.3, 11.4],
                'Pondy Oxides & Chem.': [0.2, 7.5, 2.4, 4.3, 1.7, 3.4],
                'Ardee Industries': [null, 5.3, 4.4, 3.4, 1.1, 2.9],
                'Ashapura Minechem': [11.6, 7.3, 12.5, 14.6, 5.3, 9.4],
                'Caliber Mining & Log': [36.5, 22.9, 38.5, null, 37.8, 34.6],
                'CMR Green Tech': [2.0, 2.1, 2.4, 3.6, 1.6, 2.3],
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
            note: 'Recyclers’ recent sales are 4–16 times their plant because metal is expensive and plants are cheap; the miners’ are 1–5 times.',
            values: {
                'Gravita India': [11.6, 10.3, 9.1, 8.9, 4.5],
                '20 Microns': [3.0, 3.3, 3.7, 3.2, 3.2],
                'Godavari Power': [3.5, 2.8, 2.3, 2.0, 1.6],
                'Pondy Oxides & Chem.': [20.8, 10.0, 9.5, 11.8, 11.7],
                'Ardee Industries': [null, 10.6, 10.3, 11.1, 16.2],
                'Ashapura Minechem': [2.4, 3.1, 4.6, 2.0, 3.5],
                'Caliber Mining & Log': [2.3, 2.5, 1.1, null, 1.2],
                'CMR Green Tech': [3.1, 3.4, 9.7, 10.0, 11.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'cost', label: 'Low cost', description: 'Owning the ore, cheap scrap sourcing or scale that keeps cost per tonne below rivals.' },
            { key: 'licence', label: 'Licences and approvals', description: 'Mining leases, pollution licences for handling scrap, and customer approvals.' },
            { key: 'cust', label: 'Customer spread', description: 'Many customers and markets rather than one buyer or one country.' },
            { key: 'value', label: 'Value added', description: 'Selling alloys, pellets, steel or specialty grades rather than a plain commodity.' },
            { key: 'cash', label: 'Cash and balance sheet', description: 'Whether profit turns into cash, and how much debt is carried.' },
        ],
        rows: [
            { company: 'Gravita India', trend: 'widening', trendNote: 'Copper and aluminium lines scaling; capacity from 4.97 to over 8 lakh tonnes by FY29.',
                grades: { cost: { grade: 'B', note: 'Scrap sourced in many countries' }, licence: { grade: 'A', note: 'Recycling plants in India and abroad' }, cust: { grade: 'A', note: 'Many battery, cable and plastic buyers' }, value: { grade: 'B', note: 'Alloys; copper earns ₹55,151 a tonne' }, cash: { grade: 'C', note: 'Five-year cash conversion 48%' } } },
            { company: '20 Microns', trend: 'stable', trendNote: 'Steady margins near 13%; plans ₹100cr of capex including Malaysia.',
                grades: { cost: { grade: 'B', note: 'Own mines supply about 30% of raw material' }, licence: { grade: 'B', note: 'Mining leases' }, cust: { grade: 'B', note: 'Paint makers 46% of revenue' }, value: { grade: 'B', note: 'Ground and specialty minerals' }, cash: { grade: 'B', note: 'Modest debt; free cash most years' } } },
            { company: 'Godavari Power', trend: 'stable', trendNote: 'One pellet plant shut; cold-rolling mill cost raised to ₹1,100cr.',
                grades: { cost: { grade: 'A', note: 'Own iron ore at ₹3,000–3,500 a tonne' }, licence: { grade: 'A', note: 'Captive iron ore mines' }, cust: { grade: 'B', note: 'Steel and pellet buyers' }, value: { grade: 'B', note: 'Pellets, sponge iron, wire' }, cash: { grade: 'A', note: 'Net cash; 79% cash conversion' } } },
            { company: 'Pondy Oxides & Chem.', trend: 'widening', trendNote: 'Lead earning ₹21,595 a tonne; a copper cathode plant starts in December 2026.',
                grades: { cost: { grade: 'B', note: 'Imported scrap' }, licence: { grade: 'B', note: 'Approved battery-maker supplier' }, cust: { grade: 'B', note: 'Battery makers in India and abroad' }, value: { grade: 'B', note: 'Alloys to order' }, cash: { grade: 'C', note: 'Operating cash negative two years' } } },
            { company: 'Ardee Industries', trend: 'widening', trendNote: 'Capacity raised to 156,950 tonnes; guides about 85,000 tonnes this year.',
                grades: { cost: { grade: 'B', note: 'Capacity added for about ₹15cr' }, licence: { grade: 'B', note: 'Battery recycling licences' }, cust: { grade: 'C', note: 'Top customer about 40% of sales' }, value: { grade: 'C', note: 'Refined lead and alloys' }, cash: { grade: 'D', note: 'No cash conversion over four years' } } },
            { company: 'Ashapura Minechem', trend: 'stable', trendNote: 'Guinea volumes growing but profit per tonne fell from about $10 to $6.3.',
                grades: { cost: { grade: 'B', note: 'Own ports in Guinea' }, licence: { grade: 'B', note: 'Mining and port rights in Guinea and India' }, cust: { grade: 'C', note: 'Guinea is 84% of revenue' }, value: { grade: 'C', note: 'Raw bauxite' }, cash: { grade: 'C', note: 'Net debt 2x operating profit' } } },
            { company: 'Caliber Mining & Log', trend: 'widening', trendNote: 'Order book ₹9,124cr incl. GST (over 5 times FY26 revenue; contracts average 46 months left); guides revenue up 45–50%.',
                grades: { cost: { grade: 'B', note: 'Own fleet of mining machines' }, licence: { grade: 'B', note: 'Qualified for Coal India contracts' }, cust: { grade: 'D', note: 'Over 80% of revenue from Coal India' }, value: { grade: 'C', note: 'Contract mining' }, cash: { grade: 'D', note: 'Capex a third of revenue; net debt' } } },
            { company: 'CMR Green Tech', trend: 'stable', trendNote: 'Capacity heading beyond 7 lakh tonnes; now guides ₹12 a kg of profit (‘₹11 plus’ in July) after ₹12.4 in Q1.',
                grades: { cost: { grade: 'A', note: 'Largest aluminium recycler in India' }, licence: { grade: 'B', note: 'Approved by car-part makers' }, cust: { grade: 'C', note: 'Mostly auto industry' }, value: { grade: 'B', note: 'Liquid aluminium delivered to factories' }, cash: { grade: 'D', note: 'Five-year cash conversion negative' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Gravita India and 20 Microns: proven businesses whose prices ask for about what I expect, not the two with the best news this quarter.** **Gravita** is the largest listed recycler here, with 4.97 lakh tonnes of capacity heading to over 8 lakh by FY29 and a new copper arm (Rashtriya Metal Industries, bought for ₹562cr) that earned ₹55,151 a tonne in Q1 against the ₹45,000 promised in May. Q1 profit rose 14% and management kept its target of 25–30% profit growth a year. But total volume rose only 4% against a promise of 20–25%, and lead volume fell. The filed margin was 7%; the company's 9.8% counts ₹35cr of hedging income. FY26 operating cash was only ₹169cr against ₹378cr of profit, borrowings rose from ₹286cr to ₹736cr in FY26 after the copper purchase, and promoters have sold down from about 66% to 56%. The price needs about {need:Gravita India|18}% a year against my ~17%, within the margin I allow; I cut my estimate from ~20% this quarter. **20 Microns** has held a 12–14% margin for five years, turned ₹104cr of profit into operating cash in FY26 and carries little debt. But FY26 revenue grew 4.5% against a 13% target, Q1 revenue fell 1%, and its Malaysian plant has slipped to FY28. The price needs about {need:20 Microns|7}% a year against my ~8%.",
                "**Follow Godavari Power, Ardee and Ashapura.** **Godavari** mines its own iron ore at about ₹3,300 a tonne against about ₹5,500 in the market, and holds net cash (₹837cr by its own count). But Q1's margin was 19% against the 24–25% promised in May. One 2-million-tonne pellet plant was shut in July when gas costs jumped 40–45%, the 1-million-tonne steel plant is on hold, and the cold-rolling mill has slipped to December 2027 at ₹1,100cr. CRISIL cut its outlook to stable, and two-thirds of the ₹413cr of loans it made in FY26 went to related parties. I cut my estimate to ~10% a year; the price needs about {need:Godavari Power|13}%, so it is now {Label:Godavari Power|Full}. **Ardee** raised capacity 51% for about ₹15cr and grew Q1 revenue 35%. But one customer took 41% of FY26 sales, operating cash was −₹1cr against ₹136cr of profit over FY23–FY26 (though FY26 converted 35%, ₹30cr of ₹85cr), management guides the margin down to about 10%, and its prospectus lists two criminal cases against promoters; the price needs about {need:Ardee Industries|13}% against my ~12%. **Ashapura** more than doubled its Guinea bauxite volume to about 8 million tonnes in FY26. But it now earns about $6 a tonne against about $10 before, it has in effect cut this year's volume target to 9–11 million tonnes, and its annual report shows ₹465cr of contingent liabilities (claims that may or may not become payable) and loss-making Guinea subsidiaries; the price needs about {need:Ashapura Minechem|8}% against my ~7%.",
                "**Wait on Pondy Oxides, Caliber and CMR Green.** **Pondy**'s profit is not arriving as cash: operating cash was ₹18cr against ₹297cr of profit over FY23–FY26 (6%), and −₹44cr against ₹132cr of profit in FY26. It earned a record ₹21,595 a tonne on lead and raised its per-tonne guides, but lead volume fell about 29% on shipping delays and its FY27 lead target looks out of reach. Its price needs about {need:Pondy Oxides & Chem.|16}% a year against my ~20%, the widest margin here, but price is not the test until the cash arrives. **It returns to follow when operating cash turns positive and covers most of its profit, with the cathode plant running.** **Caliber** won ₹4,045cr of new orders in one quarter, taking its order book to ₹9,124cr including GST (over 5 times FY26 revenue, with an average of 46 months left on its contracts), and guides revenue up 45–50%. But Q1 profit fell 22% as diesel, depreciation and interest rose; over 80% of revenue comes from Coal India; and it had only ₹7cr of cash not pledged to lenders at March. It also did ₹190cr of FY26 business with a joint venture partly owned by promoter relatives, and guaranteed ₹17.7cr of a related firm's loan. **CMR Green** is India's largest aluminium recycler, and the business is improving fast: profit per kg rose from ₹6.9 in FY24 to ₹12.4 in Q1. But operating cash was −₹410cr in FY26, borrowings nearly tripled in two years, it has guaranteed ₹594cr of its subsidiaries' loans, and promoters own 84%, so share sales must follow. Caliber's and CMR Green's prices ask for about what I expect, and Pondy's for less. **The reason to wait is cash and governance, not price.**",
                "**Three things to hold onto before reading the rest.** First, **for recyclers, judge profit per tonne, not margin %**: the metal price is passed on, so margins shrink when metal prices rise even if the business is doing better. Several companies' own ‘adjusted’ margins also add back hedging gains that the filed accounts put below operating profit. Second, **the bottleneck this year is scrap supply, not demand**: a Gulf ban on exporting scrap (10 June to 8 October 2026) and longer voyages cut lead volumes at Gravita and Pondy while their profit per tonne hit records. Third, **cash is the weak spot, and the annual reports matter**: only Godavari and 20 Microns have produced free cash over five years, and the reports turned up related-party loans at Godavari, related-party business at Caliber, subsidiary guarantees at CMR Green and disputed claims at Ashapura and Gravita that the calls barely touched.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (all consolidated except Ardee). Caliber, Ardee and CMR Green listed recently, so some quarters are blank. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's stored quarterly records for this group have gaps and mixed bases. Godavari's Q2–Q4 FY26 rows are zero (filed sales were ₹1,308cr, ₹1,139cr and ₹1,610cr), and its profile calls it debt-free when it has ₹443cr of borrowings and more cash than that. Gravita's Q1 FY27 operating profit of ₹145cr is the company's adjusted figure including hedging income (filed: ₹110cr). Ashapura's Q3 and Q4 FY26 profits are stored as zero (filed: ₹76cr and ₹121cr), and its stored operating profit includes other income. CMR Green's Q4 FY26 and Q1 FY27 rows are swapped. Pondy's stored figures are standalone. Caliber's Q1 FY27 profit is stored as zero (filed: ₹30cr), and 20 Microns' Q4 FY26 revenue as zero (filed: ₹261cr). The charts below use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "This is not one industry but four profit engines under one label: iron ore from its own mines turned into pellets and steel (**Godavari**); recycling lead, copper and aluminium from scrap (**Gravita**, **Pondy**, **Ardee**, **CMR Green**); mining industrial minerals at home and bauxite abroad (**Ashapura**, **20 Microns**); and contract coal mining (**Caliber**). Each runs on a different price. Long-run demand is healthy: CRISIL Intelligence forecasts lead demand growing 5.4–6.4% a year and recycled aluminium 12.5–13% a year to FY30, and ICRA expects steel demand growth to rise to 9–10% in FY27 from 7.6% in FY26 on government road and rail spending (details in the table below). **My view: demand is not the problem this year; supply is.** Recyclers cannot get enough imported scrap, Guinea's bauxite price has halved since January 2025, and gas and diesel costs jumped after the West Asia conflict.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Ore in the ground or scrap in the market → **miners and recyclers** (these eight) → steel, alumina, battery, cable, paint and car-part makers. **Profit sits with whoever has the cheapest ore or the steadiest scrap supply**; the metal price itself is set on world markets. Godavari makes pellets for about ₹5,500–5,800 a tonne with its own ore and sells them for about ₹10,000, a spread no buyer of merchant ore can match. Recyclers earn a spread per tonne between scrap and metal, hedged on the London Metal Exchange (LME), so their rupee profit depends on volume and on how much goes into higher-value alloys. Ashapura sells bauxite priced at the buyer's port in China, so freight comes out of its pocket; Caliber is paid per cubic metre moved and never owns the coal. **My view: the best seat in this chain is owning the resource cheaply, the next best is a customer who cannot easily leave, and the worst is a commodity sold at someone else's port.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Over 80% of lead goes into batteries: replacement and new car batteries, inverters, telecom and data-centre backup, and solar storage (CRISIL Intelligence). Castings are 45–50% of recycled aluminium, mostly engine and gearbox parts, and CMR Green says electric cars use about three times as much aluminium as petrol cars. Copper demand is forecast to rise from 1,660 thousand tonnes (FY24) to 2,460–2,560 thousand by FY30, with recycled copper about 55% of supply. Pellets follow steel. Bauxite follows Chinese alumina refineries, which imported a record 201 million tonnes in 2025, about 149 million from Guinea (Fastmarkets). Paint makers take about 46% of 20 Microns' sales, and Coal India is handing more overburden removal (clearing the rock above coal) to contractors. **None of the recyclers reported weak demand in Q1; every one of them reported a scrap shortage.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Scrap supply is the swing factor this year.** India imports about 80–85% of the aluminium scrap its recyclers need (2.02 million tonnes worth ₹40,203cr in FY26, per Alcircle), and the Gulf supplies about a fifth. A Gulf ban on exporting selected aluminium, copper and iron scrap runs to 8 October 2026, the EU plans export curbs, and aluminium scrap still pays a 2.5% import duty while lead, copper and zinc scrap come in free. **Battery-recycling rules (EPR, which make battery makers buy recycling certificates) are real but not yet paying**: the central portal only restarted registrations in June 2026, Pondy holds credits it has not sold, and Pondy and Ardee both say Indian battery scrap still costs more than imported scrap. In mining, Guinea's bauxite fell to $59–62 a tonne delivered to China in March 2026, about half January 2025's level, and the government has told miners to stay within licensed output while it weighs an export cap. Iron ore is firm, while pellets are squeezed by gas costs. **My view: EPR and the GST changes on scrap will slowly push informal smelters out, but in FY27 the binding limit is shipping and export bans, which no Indian recycler controls.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Gravita** on Gulf scrap returning, copper reaching ₹60,000 a tonne and working capital coming down; **20 Microns** on paint demand and its Malaysian plant; **Godavari** on a tree-cutting approval for its mine-waste land, gas prices and its battery-storage factory winning orders; **Pondy** on shipping and its copper cathode plant starting in December; **Ardee** on filling its new capacity and keeping its biggest customer; **Ashapura** on Guinea's quota, freight and its subsidiaries' losses; **Caliber** on Coal India tenders and diesel; **CMR Green** on car output, scrap export curbs and turning profit into cash. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Engine', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'What swings it'],
                    rows: [
                        ['Own ore → pellets → steel', 'Godavari', '19–27%', '21%', '**79%**', 'Pellet price, gas, mining approvals'],
                        ['Contract coal mining', 'Caliber', '17–28%', 'Not filed (company: 16.6%)', '**63%**', 'Diesel, tender wins, debt'],
                        ['Guinea bauxite and Indian clays', 'Ashapura', '7–14%', '21%', '**69%**', 'Guinea policy, freight, China demand'],
                        ['Industrial minerals', '20 Microns', '12–14%', '17%', '**56%**', 'Paint demand, energy costs'],
                        ['Lead and copper recycling', 'Gravita, Pondy, Ardee', '6–14%', '16–49%', '**0–48%**', 'Imported scrap, alloy mix, copper'],
                        ['Aluminium recycling', 'CMR Green', '4–6%', '14%', '**−1%**', 'Scrap supply and duty, car output, aluminium price'],
                    ],
                    note: 'Ardee’s 49% is flattered by its tiny equity before the IPO. Cash conversion is operating cash ÷ operating profit over FY22–FY26 (Pondy, Ardee and Caliber over the years filed).',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Lead demand', '1.37m tonnes (FY24); recycled ~85% of supply', '**5.4–6.4% a year** to 1.9–2.0m tonnes by FY30', 'CRISIL Intelligence, Mar 2025'],
                        ['Recycled aluminium', '1.9m tonnes (FY24); ~2.2m in FY26, 35–40% of supply', '**12.5–13% a year** to 3.8–4.0m tonnes by FY30', 'CRISIL Intelligence; Alcircle, 2026'],
                        ['Recycled aluminium (second view)', '2,164 thousand tonnes (FY25)', '3,715 thousand tonnes by FY30 (11.2% a year)', 'IMARC/ICRA Analytics, via CMR Green'],
                        ['Aluminium scrap imports', '2.02m tonnes, ₹40,203cr (FY26); Gulf ~20%', 'Gulf ban to 8 Oct 2026; EU duty and non-OECD ban coming', 'Alcircle, Jul–Aug 2026'],
                        ['Copper demand', '1,660 thousand tonnes (FY24)', '2,460–2,560 thousand tonnes by FY30; recycled ~55%', 'CRISIL Intelligence, Mar 2025'],
                        ['Steel demand', '+7.6% in FY26', '**+9–10% in FY27**; industry margin down only ~0.25 points', 'ICRA, May 2026'],
                        ['Vehicles', 'GST cut and income-tax relief helping', 'FY27: cars 5–7%, two-wheelers 6–8%, trucks 4–6%', 'SIAM conclave compilation, Jan 2026'],
                        ['Guinea bauxite', '178–183m tonnes exported in 2025 (+25%); price about half Jan 2025', 'Export cap of ~150m tonnes floated; decree pending', 'Fastmarkets, Mar 2026; Veson, May 2026'],
                        ['Iron ore and pellets', 'NMDC lump ₹5,400/t (Sep 2026); pellets ₹11,250/t', 'Ore firm; pellets squeezed by gas', 'NMDC via IndianPSU; BigMint, Sep 2026'],
                        ['Metal prices', 'LME lead $1,927/t (−3.9% in a year); aluminium $3,251/t (+22%)', '12 months: lead $1,851, aluminium $3,532', 'Trading Economics, Sep 2026'],
                        ['Critical-mineral recycling', '₹1,500cr incentive scheme; 58 firms approved (Apr 2026)', 'Aimed at lithium-ion and e-waste, not lead', 'Mines ministry via Akashvani; Tribune'],
                    ],
                    note: 'CRISIL Intelligence’s report is older than the other sources and is used only for the long-run direction. No fresh official data on bentonite was found.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: owning the resource',
                    text: "**Godavari**'s own ore cost about ₹3,300 a tonne delivered to its plants in Q1, against about ₹5,500 in the market, and its mines hold 165 million tonnes of proven reserves, over 35 years of output. Royalty rules make it a natural pellet maker: selling ore outside would carry 150–250% extra royalty, about ₹1,000 a tonne. But Q1 showed how fast the edge goes when the mine stalls. Output fell 16% while it waited for permission to cut trees on land for mine waste, it bought ore in the market, and the margin fell from 27% to 19% in one quarter. **20 Microns** gets about 30% of its minerals from its own mines and has added limestone mines in Malaysia. **Ashapura** owns or controls two ports in Guinea (Boffa, now 8 million tonnes a year; GSM, going to 10), and says its concessions carry no duty to build a refinery. **My view: owned ore is the deepest moat here, but it is only as good as the permits that let you dig it.**",
                },
                {
                    label: 'Lasting but narrower: customers who cannot easily switch',
                    text: "**CMR Green** delivers molten aluminium by road to customers' casting shops within about 45–60 minutes, 24 hours a day. Over half its aluminium goes this way, it holds two patents with four pending, and its chairman says a liquid-metal customer is ‘tied with us at the hip’. It is about four times the size of its nearest Indian rival and supplies about 45% of the car industry's cast alloy (CRISIL). **Pondy** is the single source for many customers' custom lead alloys; an analyst put its premium at about $700 a tonne against about $300 for peers. In Q1, customers bought pure lead elsewhere but kept buying Pondy's alloys, which rose to 85% of its lead sales. **Ardee** sells 84–93% of its revenue to repeat customers, but alloys are only 30–35% of its output, so most of what it sells is plain refined lead that any rival can supply.",
                },
                {
                    label: 'Pricing power: shown in the scrap shortage',
                    text: "When scrap ran short in Q1, the recyclers with brands and alloys raised prices. **Gravita** earned ₹24,181 a tonne on lead against its own ‘sustainable’ ₹19,000–20,000, even as lead volume fell; management said lost volume was made up by better prices. **Pondy**'s lead profit rose from ₹16,898 a tonne a year earlier to ₹21,595. **CMR Green**'s profit per kg rose to ₹12.4 while aluminium prices jumped about 40%, because car-part makers pay a monthly price linked to metal and currency. The miners show the opposite. **Ashapura** calls itself ‘price takers and not price makers’ and its profit per tonne fell from about $10 to $6.3, while **Caliber** wins work by lowest bid. **My view: part of the recyclers' Q1 pricing is a scarcity windfall; the test is whether profit per tonne holds once scrap flows again.**",
                },
                {
                    label: 'Licences and approvals',
                    text: "LME brand listings make it easier to sell to overseas battery makers: Gravita's Mundra lead (GRAVITA M, listed in Q1), Pondy (India's first LME-registered lead brand) and Ardee (ARDEE LEAD 9997). Pollution consents and customer approvals slow new entrants; Gravita's Phagi expansion waited on one. **Caliber**'s record on Coal India contracts qualifies it for larger tenders, and CRISIL upgraded it to A- in August. Approvals cut both ways, though. Godavari's steel plant is stalled by a state water allocation and its cold-rolling mill had to move to Maharashtra; management said ‘it's really not in our hands’.",
                },
                {
                    label: 'Wearing: one customer or one country',
                    text: "**Caliber** earns over 80% of revenue from Coal India subsidiaries and 98.4% from its top ten customers. **Ashapura** took 84% of Q1 revenue from Guinea. **Ardee**'s largest customer took 40.6% of FY26 sales, down from 72.4% in FY24. **20 Microns**' top five customers are about half its turnover and paint makers 46%. **CMR Green**'s top three are only 21–24%, but two-thirds of its volume goes to the car industry. **My view: concentration is the main reason the moat grid grades several of these a C or D on customer spread, whatever their cost position.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Hindalco** in aluminium (also a CMR Green customer); **NMDC**, which sets the merchant iron-ore price, and **Sarda Energy** in pellets; the large Guinea miners that ship close to 200 million tonnes a year against Ashapura's 8 million; **Omya** and **Imerys** in mineral fillers; unlisted contractors and big mine developer-operators such as **Adani Enterprises** in coal; and thousands of informal lead smelters with an 18% GST edge the government is trying to remove.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the recyclers, the spread per tonne is; the margin % is not. For the miners, the margin is set by world prices, freight and fuel. Three patterns show up: spreads protected by alloys and contracts, margins borrowed from a price cycle, and margins that look better in the companies' own ‘adjusted’ figures than in the filed accounts.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: spreads per tonne and specialty minerals',
                    text: "**Gravita** earned ₹24,181 a tonne on lead, ₹25,175 on aluminium, ₹10,197 on plastic and ₹55,151 on copper in Q1; its FY26 lead figure was ₹23,043. **Pondy**'s lead profit went from ₹16,898 to ₹19,739 to ₹21,595 a tonne over the last year, and copper from ₹29,278 to ₹48,488. **CMR Green**'s adjusted profit per kg climbed every year: ₹6.9 (FY24), ₹9.8, ₹11.3 and ₹12.4 in Q1, and it now guides ₹12. **Ardee** is the exception: about ₹19,150 a tonne in Q1 against ₹20,000–21,000 before, and gross profit per tonne slipped from ₹38,000 in Q4 to ₹34,500. **20 Microns** has held 12–14% for five years despite pressure from paint makers, by being selective about which paint customers it serves. **My view: the spreads are real, but Gravita's and Pondy's Q1 records include a scarcity premium; their own ‘sustainable’ guides are ₹19,000–20,000 for lead.**",
                },
                {
                    label: 'Cyclical: priced off world markets, fuel and freight',
                    text: "**Godavari**'s margin fell from 27% in Q4 to 19% in Q1. About 75% of the cost rise came from buying ore in the market and 25% from imported coal (up from ₹10,500 to about ₹13,000 a tonne). Management says each ₹100 a tonne on pellet prices is worth about ₹40cr a year, and pellets touched a record low of about ₹8,700 in early July. **Ashapura** earned $6.3 a tonne on bauxite against $5.9 in Q4 and about $10 historically; the China price rose from about $61 to $72, but almost all of that went on freight. **Caliber**'s margin fell from 24% to 17% as bulk diesel went from about ₹90 a litre to a ₹154 peak in May. Without ₹105.7cr of diesel costs billed to customers at no margin, it was 20% against 24.3% a year earlier, and management says recovery is ‘maximum pass-through rather than 100%’.",
                },
                {
                    label: 'Not structural: flattered by adjusted figures',
                    text: "Three companies present a better margin than their filed accounts. **Gravita**'s adjusted Q1 EBITDA of ₹145cr (9.8%) adds ₹35cr of hedging and currency gains booked as other income; Screener's operating profit was ₹110cr (7%). **CMR Green** changed its definition in Q1, adding forex and hedge items, which lifted FY26 EBITDA from ₹449cr to ₹461cr; it also holds a ₹166cr hedge loss in reserves and took a ₹36cr hedge charge in Q1. **Ashapura**'s reported ‘EBITDA’ includes other income: ₹211cr in Q4 against ₹128cr (6%) of filed operating profit. **My view: hedging gains are real money for a recycler, but use the filed figure to compare companies and years.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**CMR Green**'s operating cash was −₹92cr in FY25 and −₹410cr in FY26, and free cash −₹542cr, as rising aluminium prices and 25% volume growth swelled its stock and receivables; Q1 was negative again. **Gravita** turned only ₹169cr of FY26's ₹439cr operating profit into cash; its cash cycle stretched from 92 to 139 days, and it held about ₹1,040cr of inventory in June, much of it scrap in transit. **Pondy**'s operating cash was −₹81cr in FY25 and −₹44cr in FY26, as receivables doubled when a vessel's payment slipped past March.",
                },
                {
                    label: 'Working capital: growth before cash',
                    text: "**Ardee** earned about ₹127cr of profit over FY24–FY26 and about ₹13cr of operating cash; ₹220cr of its IPO money will go into working capital, partly to give longer credit to new export buyers, and management guides 90–100 days. **Caliber**'s problem is machines, not stock: it generated ₹411cr of operating cash in FY26 but spent ₹635cr on equipment, borrowing the rest, and ended the year with ₹7cr of cash not pledged to lenders (CRISIL).",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Godavari** collects in about nine days and turned 92% of FY26 operating profit into cash (₹1,157cr), though its inventory days rose from 111 to 124 in two years. **Ashapura**'s cash cycle is −22 days because shipping and supplier credit fund it; operating cash rose to ₹463cr and free cash turned positive (₹184cr) in FY26 after years of deficits. **20 Microns** converted ₹104cr in FY26 against ₹32cr the year before, though its cash cycle is a heavy 126 days.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Recyclers pay for imported scrap when it lands and hold hedged metal, which Gravita calls ‘as good as liquid cash’; longer voyages in Q1 added stock in transit. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Godavari Power', '‘Sufficient free cash flows to fund the entire projects’; about ₹2,000cr of capex left over FY27–FY28; ₹550cr of debt for the mill', 'Net cash ₹837cr (company, March); borrowings ₹443cr'],
                        ['Gravita India', 'Net debt about ₹150cr in June; inventory about ₹1,040cr; working capital about 95 days', 'Net debt ₹534cr (Screener, March, cash only)'],
                        ['Ashapura Minechem', 'Debt reduction ‘over a medium term’; India capex raised to about ₹200cr', 'Borrowings ₹1,444cr; net debt ₹1,115cr'],
                        ['CMR Green Tech', 'Debt-to-equity 0.86, target about 0.5; Q1 operating cash negative; ₹53cr capex in Q1', 'Net debt ₹1,417cr; ₹594cr of subsidiary guarantees'],
                        ['Pondy Oxides & Chem.', 'Working capital 46 days (53 in March); ₹25cr spent on the cathode plant (presentation: ₹5cr)', 'Net debt ₹141cr; all short-term'],
                        ['Caliber Mining & Log', 'Debt about ₹1,024cr falling to about ₹750cr by March 2027 if no new tenders; ₹450cr capex', 'Net debt ₹1,022cr; bank guarantees ₹440cr'],
                        ['Ardee Industries', '₹20cr term loan repaid in August; working-capital lines near zero; about ₹150cr in deposits', 'Net debt ₹161cr (March, before the IPO)'],
                        ['20 Microns', 'No Q1 call; free cash ₹42cr in FY26; ₹100cr of capex over about two years', 'Net debt ₹74cr; borrowings ₹156cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Net debt is Screener’s at March 2026 unless stated.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its May–June call (or, for the three newcomers, against its first guidance), and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: more recycling capacity, and copper',
                    text: "**Gravita** plans ₹1,680cr of capex through FY29 to take capacity from 4.97 to over 8 lakh tonnes, with a rule of payback within three years and returns above 25%; copper capacity should double to about 60,000 tonnes in three years, starting with a 29,400-tonne plant at Mandvi (₹160cr). **Pondy**'s 36,000-tonne copper cathode plant (₹200cr, from its own cash) starts trial runs in December 2026. If it runs at 30,000 tonnes and earns the guided ₹60,000 a tonne, that is about ₹180cr of operating profit, close to Pondy's whole FY26 figure of ₹212cr. **CMR Green** goes from 6.15 to over 7 lakh tonnes and 15 plants in FY27 for about ₹200cr. **Ardee** already has 1,56,950 tonnes and uses about 65%. **My view: capacity is not the constraint; scrap is, and copper is where the step-up in profit sits.**",
                },
                {
                    label: 'Growth driver: mining volumes and order books',
                    text: "**Ashapura** targets 9–11 million tonnes of bauxite this year and 15 million with about $1 billion of sales in FY28, and expects four new Chinese refineries to add 20–30 million tonnes of demand. **Caliber**'s order book of ₹9,124cr (over 5 times FY26 revenue) has an average of 46 months left on its contracts; it is bidding for 8–10 more tenders, wants mine developer-operator contracts and holds a critical-mineral block in Maharashtra. **Godavari** keeps its 3.4-million-tonne ore target, has a 5.4-million-tonne ore-upgrading plant (₹325cr) due in Q3, and expects to mine all its own ore from FY28. Its second mine, Boria Tibu, is to go from 0.7 to 4 million tonnes by about FY31.",
                },
                {
                    label: 'Growth driver: Godavari’s new businesses',
                    text: "A 20 GWh battery-storage (BESS) assembly plant in Maharashtra (₹1,425cr, half debt) is due in Q1 FY28; management plans 5–6 GWh in FY28 and 12–14 GWh in FY29 at a 7–8% margin, and ₹700–800cr of operating profit at 16 GWh. The 0.7-million-tonne cold-rolling mill (₹1,100cr) is due in December 2027 at a 10–11% margin with state incentives. Management's Vision 2030 is about ₹24,000cr of revenue and ₹2,500cr of profit (₹802cr in FY26), cut from ₹30,000cr and ₹3,000cr by 2031 when the steel plant was shelved. **My view: these are thin-margin assembly and processing businesses in crowded markets that depend on Chinese battery cells, with no customer orders yet; I give them little credit until they sell.**",
                },
                {
                    label: 'Growth driver: specialty and value-added products',
                    text: "**20 Microns** is spending ₹100cr, 40% of it in Malaysia, and plans about 18% revenue growth a year over three years with a 2–2.5-point margin gain; products launched in the last two to three years are only 4–5% of revenue. **Ashapura** is spending about ₹200cr in India on value-added bentonite and kaolin and wants over half its operating profit from such products within three years. **Pondy**'s alloys reached 85% of lead sales and **Gravita**'s value-added products 63% of revenue.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**CMR Green** grew volume 25.2% as promised and earned ₹12.4 a kg against ‘₹11 plus’. **Gravita** commissioned its 40,500-tonne Phagi lead line for about ₹30cr and beat its copper target (₹55,151 against ₹45,000 a tonne), then raised it to about ₹60,000 by year-end. **Pondy** beat and raised its per-tonne guides for lead (now ₹18,000–20,000) and copper recycling (above ₹40,000), and cut working capital to 46 days. **Caliber** grew revenue 67% against a 45–50% full-year guide.",
                },
                {
                    label: 'Cautious',
                    text: "**20 Microns** gave no FY27 numbers (‘not withdrawn’, but ‘not suitable’) and hopes only to cross ₹1,000cr of revenue. **Ardee** guides 10–20% growth and a margin of about 10% after 57% revenue growth in FY26, although management agreed that Q1 run at a full-year pace implies 37–46%. **CMR Green**'s chairman kept the 25% volume target but said ‘I don't want to build expectations’. **Gravita** stopped giving volume guidance by metal.",
                },
                {
                    label: 'Missed',
                    text: "**Godavari** promised a 24–25% margin for FY27 and delivered 19%; it mined 0.54 million tonnes, 16% of the year's target; it will lower its pellet target, has shelved its steel plant, and slipped the cold-rolling mill by nine months. **20 Microns** grew FY26 revenue 4.5% against about 13% and its margin was 12.9% against 13–13.5%; its Malaysian plant moved to FY28. **Ashapura** in effect cut its volume target from 10–12 to 9–11 million tonnes, dropped its $700m Guinea revenue figure, reached 8 million tonnes at Boffa port against 10, and saw the Guinea quota slip from June to year-end. Its iron-ore plan has been ‘a couple of quarters’ away for three calls.",
                },
                {
                    label: 'Mixed',
                    text: "**Gravita** grew total volume 4% against 20–25% and dropped its rubber plans, while beating on profit per tonne. **Pondy**'s lead volume fell about 29% against a 15%-plus growth plan; hitting 1.25–1.3 lakh tonnes now needs about 37,000 tonnes a quarter against a record of about 23,000, and management deferred volume guidance (‘we'll revert’). **Caliber** grew operating profit 15% and profit fell 22% against a 35% guide for both, so the rest of the year must earn about ₹182cr against about ₹120cr a year earlier.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Pondy to compound earnings at about 20%, Gravita at about 17%, Caliber and CMR Green at about 15%, Ardee at about 12%, Godavari at about 10%, 20 Microns at about 8% and Ashapura at about 7%.** These are lower than a quarter ago for five companies: Gravita (volume up 4% against 20–25%, cash about 45% of profit, return on capital down to 16%), Godavari (profit down from ₹936cr to ₹802cr in two years, Q1 below plan, the steel plant shelved and a thin-margin battery business ahead), Ashapura (volume target cut, about $6 a tonne against $10), 20 Microns (FY26 revenue up 4.5% against 13%, Q1 down 1%) and Ardee (margin guided down to about 10%, Q1 profit up 6%). The upside risks are Pondy's cathode plant and CMR Green's profit per kg.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Pondy Oxides & Chem.', 'Copper cathode plant from December 2026; lead volumes recovering', '10% / **20%** / 28%'],
                        ['Gravita India', 'Copper to ₹60,000–75,000 a tonne; capacity to 8 lakh tonnes; scrap supply', '10% / **17%** / 22%'],
                        ['Caliber Mining & Log', '₹9,124cr order book; diesel; interest and depreciation', '8% / **15%** / 22%'],
                        ['CMR Green Tech', '25% volume growth at ₹12 a kg; new plants; cash', '8% / **15%** / 20%'],
                        ['Ardee Industries', 'Filling 1,56,950 tonnes; exports; margin back above 10%', '6% / **12%** / 18%'],
                        ['Godavari Power', 'Own ore from FY28; pellet prices; battery plant and mill', '4% / **10%** / 15%'],
                        ['20 Microns', 'Paint demand; Malaysia from FY28; specialty grades', '3% / **8%** / 12%'],
                        ['Ashapura Minechem', 'Guinea volumes and quota; profit per tonne back toward $10', '2% / **7%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (May–June call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Gravita India', 'Profit +25–30% a year; copper ~₹60,000/t by year-end, ₹70,000–75,000 in 2–3 years; no volume guide', '₹1,680cr to FY29 (trimmed from ₹1,700cr)', '**Mixed**: volume +4% against 20–25%; Phagi done; copper beat; rubber dropped'],
                        ['20 Microns', 'No FY27 numbers; 18% a year over three years; margin +2–2.5 points', '₹100cr over ~two years', '**Missed**: FY26 revenue +4.5% against ~13%; Q1 −1%; Malaysia to FY28'],
                        ['Godavari Power', 'Revenue ‘6,000 plus’ kept; margin recovery only from Q4; pellets ‘slightly lower’', 'About ₹2,000cr to FY28; mill up to ₹1,100cr', '**Missed**: margin 19% against 24–25%; steel plant on hold; mill slipped to Dec 2027'],
                        ['Pondy Oxides & Chem.', 'Lead ₹18,000–20,000/t (raised); cathode ₹60,000–65,000/t (narrowed); volumes ‘we’ll revert’', 'About ₹175cr in FY27 (₹180–200cr in May); ₹50–60cr in FY28', '**Mixed**: per-tonne beat; lead volume −29% against +15%'],
                        ['Ardee Industries', 'Growth 10–20% (~85,000 tonnes); margin ~10%', 'None announced', '**Cautious**: first call; Q1 revenue +35% but margin down to 10%'],
                        ['Ashapura Minechem', 'Bauxite 9–11m tonnes (was 10–12); 15m in FY28; $5.5–6/t near term', 'India ~₹200cr (raised from ₹150cr)', '**Walked back**: volume cut; $700m dropped; quota slipped'],
                        ['Caliber Mining & Log', 'Revenue +45–50%; operating profit and profit +35%', '~₹450cr in FY27', '**Slipping**: first call; revenue +67% but profit −22%'],
                        ['CMR Green Tech', 'Volume +25%; ₹12 a kg ‘sustainable’; over 7 lakh tonnes', '~₹200cr in FY27', '**Delivered**: volume +25.2%; ₹12.4 a kg; cash negative'],
                    ],
                    note: '20 Microns holds calls half-yearly, so its row compares the November 2025 promise with FY26 and Q1 FY27. Ardee and Caliber listed in August 2026 and have had one call.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports, the prospectus and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Scrap supply and trade rules',
                    text: "Pondy imports 97–98% of its lead and copper scrap, CMR Green 74% of its aluminium scrap, and Gravita gets 15–20% of its scrap from or through the Gulf. The Gulf export ban (to 8 October 2026) and longer routes around Hormuz and the Red Sea cut Q1 volumes, and the EU's planned duty and non-OECD ban would hit CMR Green from this month and from 2027. Management's answers are new sources: Gravita is opening US scrap yards, Pondy is buying from South-East Asia and South America, and CMR Green says complex scrap will still flow. **If the Gulf ban is extended past October, FY27 recycling volumes will miss again.**",
                },
                {
                    label: 'Prices, freight and energy',
                    text: "Godavari is exposed to pellet prices and gas (up 40–45% under new pricing rules, with GAIL declaring force majeure); CRISIL's trigger for a downgrade is an operating margin of 20–22%, and Q1 was 19%. Ashapura is exposed to freight and Guinea's taxes, which rose with aluminium prices in Q4. Caliber's diesel is passed on late and not in full. Pondy's other expenses rose 44% in a quarter on fuel and additives, and 20 Microns' furnace oil and gas costs spiked. For recyclers, a price rise also means more cash tied up: CMR Green's aluminium rose about 40% in Q1.",
                },
                {
                    label: 'One customer, one country, one government',
                    text: "**Caliber** depends on Coal India for over 80% of revenue and wins work by lowest bid. **Ashapura** depends on Guinea for 84%, where the government has revoked a large miner's licence for not building a refinery and is weighing an export cap; the size of Ashapura's allocation is unknown. **Ardee**'s largest customer (not named in the prospectus) took 40.6% of FY26 sales. **Godavari**'s growth rests on state approvals for tree cutting, water and land that it says are ‘not in our hands’.",
                },
                {
                    label: 'Cash and debt',
                    text: "**CMR Green**'s borrowings rose from ₹535cr to ₹1,426cr in two years with negative operating cash, and its IPO raised nothing for the company. **Caliber** carried ₹1,120cr of borrowings at March, debt of 1.63 times net worth, ₹7cr of unpledged cash and ₹458.5cr of guarantees and contingent items (71% of net worth), mostly bank guarantees for tenders. **Ashapura**'s borrowings rose to ₹1,444cr, and ₹170cr of old shipping claims are secured by a pledge of its shares in two subsidiaries and a joint venture. **Gravita**'s borrowings went from ₹286cr to ₹736cr in FY26 after buying Rashtriya Metal at about 1.7 times book value, so goodwill is at risk if copper stalls.",
                },
                {
                    label: 'Related parties and governance',
                    text: "**Godavari** lent ₹413cr in FY26, ₹272cr (66%) of it to related parties such as its battery subsidiary and Ardent Steel, plus ₹11cr to a group education trust, with approval for up to ₹150cr more for a school. **Caliber** did ₹190cr of FY26 business with a joint venture 49% owned by a firm of promoter relatives and ₹77cr with a promoter-influenced transporter, has sought approval for up to ₹1,200cr more with three related firms in FY27, and guaranteed ₹17.7cr of a related firm's loan; a rating agency classed it ‘not cooperating’ in 2024. **CMR Green** has guaranteed ₹594cr of subsidiaries' loans, pledged 75 lakh shares of one subsidiary to SBI, and had three CFOs in about two years; at 84% promoter ownership, share sales are needed to meet listing rules. **Ardee**'s prospectus lists two criminal cases against its promoters. **Gravita**'s promoter sold from about 66% to 56% ‘for personal purposes’ in part, and its founder, who had left management in 2024, died this year. **20 Microns** paid its two promoter directors about ₹7.1cr, about 11% of profit.",
                },
                {
                    label: 'Disputed claims, auditors and reported figures',
                    text: "**Ashapura**'s contingent liabilities are ₹465cr, about 28% of net worth, with ‘other claims’ up from ₹55cr to ₹137cr; the auditor made them a key audit matter, and two Guinea subsidiaries lost ₹90cr between them in FY26 while two others have negative net worth. **Gravita** faces a ₹70.1cr customs demand within ₹158cr of contingent items, and its FY26 standalone audit report is headed ‘Qualified Opinion’ although the text gives a clean opinion, which looks like a printing error but should be clarified. **Godavari** disputes a ₹116.6cr state energy cess that is before the Supreme Court. **CMR Green** wrote off ₹1,240cr of goodwill in FY24, and the documents read do not say where it came from. **20 Microns** carries a ₹4.19cr penalty for mining beyond its lease, still unresolved. Add the adjusted-EBITDA habits in section 5, and **the filed accounts, not the presentations, are the only safe comparison.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **7% at 11x, 8% at 12x, 13–14% at 19–21x, 16% at 26x and 17–18% at 29x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Godavari**'s net cash makes it cheaper than its P/E suggests, though Screener's ₹1,093cr (March) counts treasury investments and the company's own figure is ₹837cr. **CMR Green**, **Caliber** and **Ashapura** carry debt of 2–3 times operating profit, so they look cheaper on P/E than on EV/EBITDA. For **Ardee**, the March figures predate its IPO; after repaying loans and banking the IPO money it appears to hold net cash, so its EV/EBITDA overstates the debt.",
                },
                {
                    label: 'Fits, with room to spare',
                    text: "**Pondy** needs about {need:Pondy Oxides & Chem.|16}% a year against my ~20%, the widest gap in the sector, because the cathode plant could nearly double operating profit; the risk is that the plant is late or lead scrap stays short. It is still a wait: the price does not matter while its profit is not arriving as cash.",
                },
                {
                    label: 'Fits, but only just',
                    text: "**Gravita** needs about {need:Gravita India|18}% a year against my ~17%, **Ardee** about {need:Ardee Industries|13}% against my ~12% and **Ashapura** about {need:Ashapura Minechem|8}% against my ~7%: each asks for about a point more than I expect, inside the two points I allow. **20 Microns** needs about {need:20 Microns|7}% against my ~8%, which is why it is an own despite stalled growth: the price assumes very little. Gravita is an own because its copper step-up and scale make my estimate more likely to be beaten than missed; Ardee and Ashapura are follows because their cash and concentration risks point the other way.",
                },
                {
                    label: 'Fits on paper, discounted for a reason',
                    text: "**CMR Green** needs about {need:CMR Green Tech|14}% and **Caliber** about {need:Caliber Mining & Log|14}%, both against my ~15%. The prices look fair, but CMR Green converts no profit into cash and faces an 84% promoter overhang, and Caliber's profit fell 22% in Q1 while it deals heavily with related firms. **I would not buy either on the P/E alone.**",
                },
                {
                    label: 'Full',
                    text: "**Godavari** needs about {need:Godavari Power|13}% a year against my ~10%. Its profit has fallen from ₹936cr in FY24 to ₹802cr, Q1 started below plan, and the new battery and cold-rolling businesses earn thin margins, so I no longer expect enough growth to justify the price, however strong the balance sheet. It is a follow for its low-cost ore and net cash, not a buy at this price.",
                },
                {
                    label: 'Cheapest',
                    text: "**20 Microns** and **Ashapura** ask for the least growth. Ashapura's price is low for good reasons: one country, ₹465cr of disputed claims, loss-making subsidiaries and a profit per tonne that has fallen by over a third. 20 Microns' low price reflects slow growth, not a flaw in the business.",
                },
                {
                    label: 'What would move the labels',
                    text: "{Count:fits|Seven} of the {count:live|eight} prices fit my estimates, so for most the reasons to hold back are cash, debt, concentration and governance, not price. A rise of about a tenth in Gravita's, Ardee's or Ashapura's price would tip it to Full; a fall of about 7% would bring Godavari back to Fits; CMR Green and Caliber have about a third of headroom. A second quarter of falling lead volumes would bring Gravita's and Pondy's estimates into question.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Gravita India', rank: 1, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles lead, aluminium, plastic and now copper from scrap at plants in India and eight other countries, selling metals, alloys and granules to battery, cable and plastic makers.",
            view: "**A growing multi-metal recycler whose cash lags its profit.** Q1 profit rose 14%, copper earned ₹55,151 a tonne and management keeps a 25–30% a year profit target as capacity heads to over 8 lakh tonnes. But volume rose 4% against 20–25%, the filed margin was 7% (9.8% adjusted), FY26 operating cash was ₹169cr on ₹378cr of profit, and promoters sold down to 56%. The price needs about {need:Gravita India|18}% a year against my ~17%.",
            watch: 'Lead volume recovering once Gulf scrap returns; copper at ₹60,000 a tonne by March; operating cash catching up with profit.',
        },
        {
            company: '20 Microns', rank: 2, stance: 'HARVEST', segment: MINING,
            what: "Mines and grinds industrial minerals (calcium carbonate, kaolin, talc) into fillers and additives for paint, plastics and rubber makers; paint makers take about 46% of sales.",
            view: "**Steady, cash-generative and cheap, with growth stalled.** The margin has held at 12–14% for five years and FY26 operating cash was ₹104cr. But FY26 revenue rose 4.5% against a 13% target, Q1 fell 1%, and the Malaysian plant slipped to FY28. The price needs about {need:20 Microns|7}% a year against my ~8%.",
            watch: 'Quarterly revenue above ₹250cr in H2 FY27; Malaysian plant on time; paint makers’ pressure on prices.',
        },
        {
            company: 'Godavari Power', rank: 3, stance: 'CYCLICAL', segment: MINING,
            what: "Mines its own iron ore in Chhattisgarh and turns it into pellets, sponge iron, billets and wire, and is building a battery-storage factory and a cold-rolling mill in Maharashtra.",
            view: "**Low-cost ore and net cash, but a year that started badly.** Its ore costs about ₹3,300 a tonne against about ₹5,500 in the market and it holds ₹837cr of net cash. But Q1's margin was 19% against 24–25% promised, a pellet plant is shut, the steel plant is shelved, CRISIL cut its outlook, and 66% of its FY26 loans went to related parties. The price needs about {need:Godavari Power|13}% a year against my ~10%, which is {Label:Godavari Power|Full}. On 9 Oct 2026 the price moved into the fits band; I keep it at follow, not own, until the mine ramps up and the margin recovers, and while two-thirds of its lending goes to related parties. The only filing in six weeks is the battery factory's environmental clearance.",
            watch: 'Tree-cutting approval and the mine ramp-up; Q4 FY27 margin back above 23%; first battery-storage orders.',
        },
        {
            company: 'Ardee Industries', rank: 4, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles used lead-acid batteries at one plant in Andhra Pradesh into refined lead and alloys for battery makers in India and eight other countries; listed in August 2026.",
            view: "**Cheap capacity, weak cash, one big customer.** It added 51% capacity for about ₹15cr and grew Q1 revenue 35%. But its margin fell to 10% and is guided there, one customer took 41% of FY26 sales, operating cash was −₹1cr against ₹136cr of profit over FY23–FY26 (FY26 converted 35%, ₹30cr of ₹85cr), and promoters face two criminal cases. The price needs about {need:Ardee Industries|13}% a year against my ~12%.",
            watch: 'Volume toward 85,000 tonnes; the largest customer’s share; operating cash after the IPO money goes into stock.',
        },
        {
            company: 'Ashapura Minechem', rank: 5, stance: 'CYCLICAL', segment: MINING,
            what: "Mines and exports bauxite from Guinea through its own ports (84% of revenue), and mines and processes bentonite, kaolin and other clays in India.",
            view: "**Cheap, but one country and a thinner spread.** FY26 profit rose 44% on volume, but bauxite now earns about $6 a tonne against $10, this year's volume target was in effect cut to 9–11 million tonnes, borrowings reached ₹1,444cr, and contingent claims are ₹465cr with loss-making Guinea subsidiaries. The price needs about {need:Ashapura Minechem|8}% a year against my ~7%.",
            watch: 'Guinea’s export quota and Ashapura’s share; Q3 volume above 3 million tonnes; the contingent claims in the FY27 accounts.',
        },
        {
            company: 'Pondy Oxides & Chem.', rank: 6, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles imported lead and copper scrap into pure lead, custom lead alloys and copper for battery and wire makers, and is building a 36,000-tonne copper cathode plant in Tamil Nadu.",
            view: "**Profit not arriving as cash.** Operating cash was ₹18cr against ₹297cr of profit over FY23–FY26 (6%), and −₹44cr against ₹132cr of profit in FY26. Lead earned a record ₹21,595 a tonne and copper ₹48,488, and both guides were raised, but lead volume fell about 29% and the FY27 lead target looks out of reach. The price needs about {need:Pondy Oxides & Chem.|16}% a year against my ~20%; it returns to follow when operating cash turns positive and covers most of profit, with the cathode plant running.",
            watch: 'Cathode trial production in December 2026; lead volume back above 20,000 tonnes a quarter; positive operating cash in FY27.',
        },
        {
            company: 'Caliber Mining & Log', rank: 7, stance: 'SCALEUP', segment: MINING,
            what: "Removes overburden, digs coal and moves it by road and rail for Coal India subsidiaries in Maharashtra and Madhya Pradesh under multi-year contracts; listed in August 2026.",
            view: "**A big order book bought with debt, and a web of related parties.** Orders reached ₹9,124cr and revenue rose 67%, but Q1 profit fell 22%, over 80% of revenue is Coal India, unpledged cash was ₹7cr at March, and it did ₹190cr of FY26 business with a joint venture partly owned by promoter relatives. The price needs about {need:Caliber Mining & Log|14}% a year against my ~15%; I want debt to fall first. 22 Oct 2026: Coal India's subsidiaries will now repay diesel at actual bulk prices, backdated to 20 March, which should restore much of the margin lost to the fuel spike; the call stays wait until debt falls.",
            watch: 'Debt toward ₹750cr by March 2027; margin back to 23%; related-party business against the approved limits.',
        },
        {
            company: 'CMR Green Tech', rank: 8, stance: 'SCALEUP', segment: RECYCLE,
            what: "India's largest aluminium recycler, delivering liquid and solid aluminium alloys to car-part makers from 13 plants, plus billets and other scrap metals; listed in June 2026.",
            view: "**A strong franchise that burns cash.** Volume rose 25% and profit per kg reached ₹12.4, up from ₹6.9 in FY24. But operating cash was −₹410cr in FY26, borrowings reached ₹1,426cr, it has guaranteed ₹594cr of subsidiaries' loans, its CFO resigned on 3 October, the second CFO exit since August 2025, and promoters' 84% must come down. The price needs about {need:CMR Green Tech|14}% a year against my ~15%; I want to see cash.",
            watch: 'Two quarters of positive operating cash; debt-to-equity back toward 0.5; profit per kg holding at the ₹12 now guided.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Metal recyclers.** **Gravita India: own**, a proven recycler moving into copper, but its cash, filed margin and promoter selling need watching. **Ardee Industries: follow**, for its cheap capacity, until operating cash and customer spread improve. **Pondy Oxides & Chem.: wait**: ₹18cr of operating cash against ₹297cr of profit over FY23–FY26, so it returns to follow only when operating cash turns positive and covers most of profit, with the cathode plant running. **CMR Green Tech: wait** for cash and lower debt.",
            "**Miners and mining services.** **20 Microns: own**, a steady business at a price that assumes almost no growth. **Godavari Power: follow**, low-cost and cash-rich but now fully priced for the growth I expect; watch the mine approvals, the pellet-plant shutdown and its related-party lending. **Ashapura Minechem: follow** as Guinea's quota and freight settle. **Caliber Mining & Log: wait** for debt to fall and profit to catch up with revenue.",
            "**What would change my view.** For the better: Gulf scrap flowing again after October; Pondy's cathode plant running on time; Godavari mining all its own ore; the recyclers turning profit into cash. For the worse: the Gulf scrap ban extended; Guinea's quota squeezing Ashapura; pellet prices falling while gas stays high; more related-party dealings at Godavari or Caliber.",
            "**What to watch next quarter.** Gravita's lead volume and copper profit per tonne; 20 Microns' revenue; Godavari's mining approval and pellet output; Pondy's cathode trial; Ardee's biggest customer; Ashapura's bauxite volume and quota; Caliber's debt and margin; CMR Green's operating cash.",
        ],
        bottomLine:
            "Own the proven recycler and the steady mineral maker whose prices ask for about what I expect (Gravita India, 20 Microns); follow the cash-rich or cheap names still proving their cash, volumes or growth (Godavari Power, Ardee Industries, Ashapura Minechem); and wait on the recycler whose profit is not arriving as cash (Pondy Oxides & Chem.) and the debt-heavy newcomers (Caliber Mining & Log, CMR Green Tech) until cash and governance catch up.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/GRAVITA/consolidated/' },
        { label: 'Wholesale price index, iron ore, lead, bauxite, aluminium, diesel and limestone — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Metal recycling industry report (lead, aluminium, copper demand to FY30) — CRISIL Intelligence, Mar 2025', url: 'https://jainmetalgroup.com/Pdf/material/crisil-report.pdf' },
        { label: 'Steel industry trends and outlook — ICRA, May 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6940' },
        { label: 'SIAM Looking Ahead Conclave: FY27 vehicle growth estimates — Autocar Pro', url: 'https://www.autocarpro.in/news/siam-looking-ahead-conclave-estimates-indias-fy27-pv-growth-at-5-7-2w-at-6-8-130618' },
        { label: 'Middle East export ban disrupts aluminium scrap trade — Alcircle, Jul 2026', url: 'https://www.alcircle.com/news/middle-east-export-ban-disrupts-aluminium-scrap-trade-pushing-india-toward-new-markets-120555' },
        { label: 'Indian aluminium recyclers seek import-duty relief — Alcircle, Apr 2026', url: 'https://www.alcircle.com/news/indian-aluminium-recyclers-seek-import-duty-relief-amid-tightening-global-scrap-supply-118162' },
        { label: 'Top bauxite producer considers export curbs after price slump — Fastmarkets, Mar 2026', url: 'https://www.fastmarkets.com/insights/top-bauxite-producer-considers-export-curbs-after-price-slump/' },
        { label: 'Guinea bauxite export cap and dry bulk — Veson, May 2026', url: 'https://veson.com/blog/guinea-bauxite-export-cap-dry-bulk/' },
        { label: 'NMDC raises lump iron ore to ₹5,400 a tonne — IndianPSU, Sep 2026', url: 'https://indianpsu.com/nmdc-raises-lump-iron-ore-price-rs-5400-per-tonne/' },
        { label: 'India PELLEX holds firm amid elevated raw-material costs — BigMint, Sep 2026', url: 'https://www.bigmint.co/insights/detail/india-pellex-hold-firm-amid-elevated-raw-material-costs-791839' },
        { label: 'Ministry of Mines approves 58 companies under critical-mineral recycling scheme — Akashvani', url: 'https://newsonair.gov.in/ministry-of-mines-approves-58-companies-under-incentive-scheme-for-promotion-of-critical-mineral-recycling/' },
        { label: 'Godawari Power & Ispat rating rationale (outlook to stable) — CRISIL, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GodawariPowerandIspatLimited_May%2026_%202026_RR_393349.html' },
        { label: 'Godawari Power & Ispat Annual Report FY26 (loans, contingent liabilities) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=88301618-7f15-4135-ad56-6a6c52fe5388.pdf' },
        { label: 'Gravita India rating rationale — ICRA, Jun 2026', url: 'https://www.icra.in/Rationale/ShowRationaleReport/?Id=143567' },
        { label: 'Gravita India Annual Report FY26 (contingent liabilities, audit report) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=45bb97fd-ed72-4260-bdea-c89e7ccd876b.pdf' },
        { label: 'Ashapura Minechem Annual Report FY26 (contingent liabilities, subsidiaries) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=49c5ab95-f4f5-4614-a853-a9fdd74b3e03.pdf' },
        { label: 'CMR Green Technologies rating rationale — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/CMRGreenTechnologiesLimited_September 18_ 2026_RR_405650.html' },
        { label: 'CMR Green Technologies Annual Report FY26 (guarantees, pledge) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8f2f7b3e-708b-40f1-9af3-394e0635ea65.pdf' },
        { label: 'Pondy Oxides & Chemicals rating rationale — CRISIL, Jul 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/PondyOxidesandChemicalsLimited_July%2015_%202026_RR_399062.html' },
        { label: 'Caliber Mining & Logistics rating rationale — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/CaliberMiningAndLogisticsLimited_August%2004_%202026_RR_401531.html' },
        { label: 'Caliber Mining & Logistics Annual Report FY26 (related parties) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4321b2e9-414a-4188-af2b-a235fcc51004.pdf' },
        { label: 'Ardee Industries abridged prospectus (customers, litigation) — SEBI, Jul 2026', url: 'https://www.sebi.gov.in/sebi_data/commondocs/jul-2026/Ardee%20Industries%20Ltd%20-%20AP_p.pdf' },
        { label: '20 Microns Annual Report FY26 (contingent liabilities, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4be8a863-82ec-4642-82c2-b0bd10618a7a.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
