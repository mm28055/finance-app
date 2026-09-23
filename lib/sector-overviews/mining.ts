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
            'Gravita India': 20,
            '20 Microns': 10,
            'Godavari Power': 12,
            'Pondy Oxides & Chem.': 20,
            'Ardee Industries': 15,
            'Ashapura Minechem': 10,
            'Caliber Mining & Log': 15,
            'CMR Green Tech': 15,
        },
    },
    standfirst:
        "Eight companies that dig up or recycle metals and minerals. Four recycle scrap: Gravita (lead, aluminium, plastic and copper, in India and abroad), Pondy Oxides (lead and copper), Ardee (lead) and CMR Green (aluminium for car-part makers). Four mine or serve mines: Godavari Power mines iron ore and makes pellets and steel; Ashapura mines bauxite in Guinea and bentonite in India; 20 Microns grinds minerals into fillers for paint and plastics; and Caliber removes earth and digs coal for Coal India. Every chart uses filed results and five years of history; three of the companies listed recently.",
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
            { company: 'Caliber Mining & Log', trend: 'widening', trendNote: 'Order book ₹9,124cr (about 46 months); guides revenue up 45–50%.',
                grades: { cost: { grade: 'B', note: 'Own fleet of mining machines' }, licence: { grade: 'B', note: 'Qualified for Coal India contracts' }, cust: { grade: 'D', note: 'Over 80% of revenue from Coal India' }, value: { grade: 'C', note: 'Contract mining' }, cash: { grade: 'D', note: 'Capex a third of revenue; net debt' } } },
            { company: 'CMR Green Tech', trend: 'stable', trendNote: 'Capacity heading to about 7 lakh tonnes; about ₹11,000 a tonne of profit.',
                grades: { cost: { grade: 'A', note: 'Largest aluminium recycler in India' }, licence: { grade: 'B', note: 'Approved by car-part makers' }, cust: { grade: 'C', note: 'Mostly auto industry' }, value: { grade: 'B', note: 'Liquid aluminium delivered to factories' }, cash: { grade: 'D', note: 'Five-year cash conversion negative' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Gravita India and 20 Microns.** Gravita recycles lead, aluminium, plastic and copper in India and abroad, earns ₹24,000–55,000 a tonne across its metals, and guides 25–30% profit growth a year as capacity rises from 4.97 to over 8 lakh tonnes by FY29; its weak point is cash conversion. 20 Microns is a steady supplier of mineral fillers to paint and plastics makers, earning about 13% margins at a low price. Both prices ask for less growth than I expect.",
                "**Follow Godavari Power, Pondy Oxides, Ardee and Ashapura.** Godavari has its own iron ore and net cash, but a pellet plant is shut and its cold-rolling project has become more expensive. Pondy and Ardee are growing lead recyclers that have not yet turned profit into cash. Ashapura is cheap, but its profit per tonne of Guinea bauxite has fallen and it carries debt.",
                "**Wait on Caliber and CMR Green.** Both are recent listings. Caliber has a big Coal India order book but spends a third of its revenue on machines; CMR Green is India's largest aluminium recycler, but earns 4–6% margins, carries debt and has not converted profit into cash.",
                "**Two things to hold onto before reading the rest.** First, **for recyclers, judge profit per tonne, not margin %**: the metal price is passed on, so margins shrink when metal prices rise even if the business is doing well. Second, **cash is the weak spot**: only Godavari and 20 Microns have produced free cash over five years; the recyclers keep putting profit back into scrap stock.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (all consolidated except Ardee). Caliber, Ardee and CMR Green listed recently, so some quarters are blank. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Two businesses under one label: digging metals and minerals out of the ground, and recovering them from scrap.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Ore in the ground or scrap in the market → **miners and recyclers** (these eight) → steel, aluminium, battery, cable, paint and car-part makers. **The profit sits with whoever has the cheapest ore or the steadiest scrap supply**; the metal price itself is set on world markets.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Replacement car and inverter batteries (lead), lighter car parts (aluminium), cables and power equipment (copper), steel for construction, alumina refineries abroad (bauxite), and paint and plastics (mineral fillers). Rules requiring battery and plastic makers to use recycled material help the recyclers.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Metal prices swing; spreads are steadier.** Godavari's profit rises and falls with pellet and steel prices (₹100 a tonne on pellets is worth about ₹40cr a year); Ashapura's with bauxite freight and prices. Recyclers' profit per tonne is steadier but their working capital swells when metal prices rise. Coal India's output plans set Caliber's volumes.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Gravita** on filling new copper and aluminium lines; **20 Microns** on paint demand; **Godavari** on pellet prices and its new projects; **Pondy** on its copper plant; **Ardee** on filling its expanded capacity; **Ashapura** on Guinea; **Caliber** on Coal India; **CMR Green** on car-part makers. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Recyclers', 'Gravita, Pondy, Ardee, CMR Green', '4–14%', '14–49%', '**−1% to 48%**'],
                        ['Miners and mining services', 'Godavari, Ashapura, 20 Microns, Caliber', '7–28%', '17–21%', '**56–79%**'],
                    ],
                    note: 'Caliber’s FY26 return on capital is not filed; the miners’ range excludes it.',
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
                    text: "**Godavari** mines its own iron ore at ₹3,000–3,500 a tonne and aims below ₹2,700; **20 Microns**' own mines supply about 30% of its raw material.",
                },
                {
                    label: 'Lasting but narrower: scale in recycling',
                    text: "**CMR Green** is India's largest aluminium recycler and supplies about 45% of recycled aluminium bought by the car industry; **Gravita** has plants and scrap sourcing in many countries.",
                },
                {
                    label: 'Wearing: one customer or one country',
                    text: "**Caliber** earns over 80% of revenue from Coal India; **Ashapura** 84% from Guinea; **Ardee**'s top customer takes about 40% of sales.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Hindalco** in aluminium; **NMDC** and **Sarda Energy** in iron ore and pellets; **Omya** and **Imerys** in mineral fillers; many unorganised scrap smelters in lead.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the recyclers, the spread per tonne is; the margin % is not.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Spread per tonne: the recyclers',
                    text: "**Gravita** earned ₹24,181 a tonne on lead, ₹25,175 on aluminium and ₹55,151 on copper in Q1. **Pondy** earned ₹21,595 on lead (it calls ₹18,000–20,000 sustainable) and ₹48,488 on copper. **CMR Green** about ₹11,000 a tonne; **Ardee** about ₹19,000–21,000 by my reckoning from its figures.",
                },
                {
                    label: 'Cyclical: priced off world markets',
                    text: "**Godavari**'s margin moved between 19% and 27% with pellet prices. **Ashapura** earned $6.3 a tonne on Guinea bauxite in Q1, down from about $10.",
                },
                {
                    label: 'Steady: specialty minerals and contracts',
                    text: "**20 Microns** has held 12–14% for five quarters. **Caliber**'s contracts pass diesel costs on; its adjusted margin was about 20% in Q1.",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Gravita**'s cycle rose to 139 days in FY26; **CMR Green**, **Pondy** and **Ardee** have put almost all their operating profit back into stock and receivables.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Godavari** is paid in about nine days and converts about 80% of its profit into cash.",
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: more recycling capacity',
                    text: "**Gravita** plans ₹1,680cr of capex through FY29 and guides 25–30% profit growth a year. **Pondy**'s 36,000-tonne copper cathode plant (₹200cr) starts its first half in December 2026. **CMR Green** is going from about 6.15 to 7 lakh tonnes and expects about 25% volume growth. **Ardee** guides about 85,000 tonnes this year at about a 10% margin.",
                },
                {
                    label: 'Growth driver: mining volumes',
                    text: "**Ashapura** targets 10–12 million tonnes of bauxite this year (±10%) and 15 million in FY28. **Caliber** guides revenue up 45–50% and operating profit up 35%, from an order book of ₹9,124cr. **Godavari** guides 3.4 million tonnes of its own ore and is building a cold-rolling mill for December 2027.",
                },
                {
                    label: 'Growth driver: specialty minerals',
                    text: "**20 Microns** is spending ₹100cr, 40% of it in Malaysia, and plans for about 18% growth a year.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Gravita** and **Pondy** are earning above their own per-tonne targets on copper and lead.",
                },
                {
                    label: 'Missed or behind',
                    text: "**Godavari** shut a 2-million-tonne pellet plant and raised its cold-rolling budget to ₹1,100cr. **Ashapura**'s profit per tonne of bauxite fell by about a third.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Gravita and Pondy to compound earnings at about 20%, Ardee, Caliber and CMR Green at about 15%, Godavari at about 12%, and 20 Microns and Ashapura at about 10%.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Gravita India', 'Copper and aluminium lines; capacity to 8 lakh tonnes', '12% / **20%** / 27%'],
                        ['Pondy Oxides & Chem.', 'Copper cathode plant; lead volumes', '10% / **20%** / 28%'],
                        ['Ardee Industries', 'Filling expanded capacity; exports', '5% / **15%** / 22%'],
                        ['Caliber Mining & Log', 'Coal India order book', '8% / **15%** / 22%'],
                        ['CMR Green Tech', 'More capacity; car-part demand', '8% / **15%** / 20%'],
                        ['Godavari Power', 'Own ore; pellets; cold-rolling mill', '0% / **12%** / 18%'],
                        ['20 Microns', 'Paint demand; Malaysia; specialty grades', '6% / **10%** / 15%'],
                        ['Ashapura Minechem', 'Guinea bauxite volumes; profit per tonne', '0% / **10%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into four groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'Prices and spreads',
                    text: "A fall in pellet or bauxite prices hits **Godavari** and **Ashapura** directly. Recyclers are hurt when scrap becomes scarce and its price rises faster than metal.",
                },
                {
                    label: 'Concentration',
                    text: "**Caliber** depends on Coal India; **Ashapura** on Guinea, where mining and export rules can change; **Ardee** on its largest customer.",
                },
                {
                    label: 'Cash and debt',
                    text: "**CMR Green** (net debt about 3x operating profit) and **Caliber** (plans to cut debt from ₹1,024cr to about ₹750cr by March 2027) carry the most debt; **Pondy** and **Ardee** have not yet produced operating cash to match their profits. CMR Green's ₹630cr listing was entirely existing shareholders selling, so no new money came in.",
                },
                {
                    label: 'Reporting',
                    text: "Screener shows CMR Green with an unexplained large net loss in FY24; three companies have only one call as listed companies to judge them on.",
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
                    text: "**Godavari**'s net cash makes it cheaper than its P/E suggests; **CMR Green**, **Caliber** and **Ashapura** carry debt, so their EV/EBITDA is higher relative to their P/E.",
                },
                {
                    label: 'Reasonable',
                    text: "All eight prices ask for no more growth than I expect. The reasons to hold back are cash, debt and concentration, not price.",
                },
                {
                    label: 'Cheapest',
                    text: "**20 Microns** and **Ashapura** ask for the least growth.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Gravita India', rank: 1, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles lead, aluminium, plastic and copper from scrap at plants in India and abroad, selling metals, alloys and granules to battery, cable and plastic makers.",
            view: "**A growing recycler with good spreads.** Earns ₹24,000–55,000 a tonne on its metals, guides 25–30% profit growth and is expanding to over 8 lakh tonnes by FY29. Cash conversion is its weak spot. The price asks for less than my ~20% estimate.",
            watch: 'Copper profit per tonne toward ₹60,000; working capital; capacity use.',
        },
        {
            company: '20 Microns', rank: 2, stance: 'HARVEST', segment: MINING,
            what: "Mines and grinds industrial minerals (calcium carbonate, kaolin, talc) into fillers and specialty chemicals for paint, plastics and rubber makers.",
            view: "**Steady and cheap.** Margins of 12–14%, returns near 20%, paint makers as main customers and a low price. Growth has been slow. The price asks for less than my ~10% estimate.",
            watch: 'Revenue growth toward its 18% plan; the Malaysia project; margins.',
        },
        {
            company: 'Godavari Power', rank: 3, stance: 'CYCLICAL', segment: MINING,
            what: "Mines its own iron ore and turns it into pellets, sponge iron, steel billets and wire, and is building a cold-rolling mill and a battery-storage business.",
            view: "**Low-cost ore, cyclical prices.** Net cash, 79% cash conversion and ore at ₹3,000–3,500 a tonne, but one pellet plant is shut and new projects are costing more. The price asks for about my ~12% estimate.",
            watch: 'Pellet prices; the shut pellet plant; the cold-rolling mill cost and timing.',
        },
        {
            company: 'Pondy Oxides & Chem.', rank: 4, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles lead and copper scrap into metals and alloys for battery and other makers, and is building a copper cathode plant.",
            view: "**Fast growth, cash not yet.** Revenue up 55–78% in recent quarters and lead earning ₹21,595 a tonne, but operating cash has been negative for two years. The price asks for less than my ~20% estimate.",
            watch: 'Copper cathode start-up in December; operating cash; lead spread.',
        },
        {
            company: 'Ardee Industries', rank: 5, stance: 'SCALEUP', segment: RECYCLE,
            what: "Recycles used lead-acid batteries into refined lead and lead alloys, mostly for battery makers, with growing exports; recently listed.",
            view: "**High returns, no cash yet.** Return on capital of 49% and capacity raised cheaply to 156,950 tonnes, but it has converted almost no profit into cash and one customer takes about 40% of sales. The price asks for less than my ~15% estimate.",
            watch: 'Volume against 85,000 tonnes; operating cash; customer spread.',
        },
        {
            company: 'Ashapura Minechem', rank: 6, stance: 'CYCLICAL', segment: MINING,
            what: "Mines and exports bauxite from Guinea through its own ports, and mines bentonite and other minerals in India.",
            view: "**Cheap, but one country and falling spreads.** Guinea is 84% of revenue and profit per tonne fell from about $10 to $6.3; net debt is 2x operating profit. The price asks for less than my ~10% estimate.",
            watch: 'Profit per tonne of bauxite; volumes against 10–12 million tonnes; Guinea policy.',
        },
        {
            company: 'Caliber Mining & Log', rank: 7, stance: 'SCALEUP', segment: MINING,
            what: "Removes overburden, digs coal and transports it for Coal India and other mine owners under long contracts; recently listed.",
            view: "**A big order book, bought with debt.** ₹9,124cr of orders and revenue guided up 45–50%, but over 80% of revenue comes from Coal India and machines take a third of revenue. The price asks for about my ~15% estimate; I want to see debt fall.",
            watch: 'Debt toward ₹750cr by March 2027; new contracts; free cash.',
        },
        {
            company: 'CMR Green Tech', rank: 8, stance: 'SCALEUP', segment: RECYCLE,
            what: "India's largest aluminium recycler, delivering liquid and solid aluminium alloys to car-part makers from 13 plants; recently listed.",
            view: "**Scale leader, thin and cash-hungry.** About 45% of recycled aluminium bought by the car industry, but margins of 4–6%, net debt about 3x operating profit and no cash conversion over five years. The price asks for about my ~15% estimate; I want to see cash.",
            watch: 'Operating cash; debt; volume growth of about 25%.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Metal recyclers.** **Gravita India: own.** **Pondy Oxides & Chem.: follow** until cash follows growth. **Ardee Industries: follow**, for the same reason. **CMR Green Tech: wait** for cash and lower debt.",
            "**Miners and mining services.** **20 Microns: own.** **Godavari Power: follow** through the pellet-plant problem. **Ashapura Minechem: follow** as Guinea spreads settle. **Caliber Mining & Log: wait** for debt to fall.",
            "**What would change my view.** For the better: the recyclers turning profit into cash; Godavari's pellet plant restarting. For the worse: a fall in pellet or bauxite prices; scrap shortages squeezing recyclers' spreads.",
            "**What to watch next quarter.** Gravita's copper spreads; Pondy's copper plant; Godavari's pellet output; Ashapura's bauxite profit per tonne; Caliber's debt.",
        ],
        bottomLine:
            "Own the growing recycler and the steady mineral maker (Gravita India, 20 Microns), follow the cheap or fast-growing names still proving their cash (Godavari Power, Pondy Oxides & Chem., Ardee Industries, Ashapura Minechem), and wait on the debt-heavy newcomers (Caliber Mining & Log, CMR Green Tech).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/GRAVITA/consolidated/' },
        { label: 'Wholesale price index, iron ore, lead, bauxite, aluminium, diesel and limestone — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
