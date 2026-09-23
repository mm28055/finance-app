import { SectorOverview } from './types';
import { oilBusinesses } from './oil-businesses';
import { oilValuationInputs } from './card-data/oil';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const SERVICES = 'Oilfield and exploration services — rigs, compressors and crews';
const PRODUCTS = 'Refining and oil products — fuels, lubricants and white oils';
const TERMINALS = 'Port tank terminals — LPG, fuels and chemicals';

export const oil: SectorOverview = {
    sector: 'Oil',
    title: 'Oil',
    format: 'ranked',
    businesses: oilBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: oilValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Deep Industries': 25,
            'Gulf Oil Lubricant': 12,
            'Jindal Drilling and Industries': 8,
            'South West Pinnacle': 18,
            'Ganesh Benzoplast': 10,
            'Asian Energy Services': 20,
            'Gandhar Oil Refinery (India)': 0,
            'Chennai Petroleum Corporation': 0,
            'Aegis Vopak Terminals': 20,
        },
    },
    standfirst:
        "Nine companies that earn from oil and gas in three different ways. Four rent out rigs, compressors and crews or drill exploration holes: Deep Industries, Jindal Drilling, Asian Energy and South West Pinnacle. Three turn oil into products: Chennai Petroleum refines crude for Indian Oil, Gulf Oil sells branded lubricants, and Gandhar makes white oils for creams and medicines. Two run tank terminals at ports: Aegis Vopak (LPG and liquids) and Ganesh Benzoplast. The oil price itself matters most to the refiners; for the others, what matters is contracts, spreads and tank fees. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), all consolidated. Operating profit ÷ revenue.',
            note: 'Three very different businesses: terminals earn about 75% (Aegis Vopak), rig and compression services 30–45% (Deep, Jindal), and refiners and blenders 1–16% on a high oil price (Chennai Petroleum, Gulf Oil, Gandhar).',
            values: {
                'Deep Industries': [41, 42, 45, 33, 39],
                'Gulf Oil Lubricant': [12, 12, 13, 13, 13],
                'Jindal Drilling and Industries': [42, 39, 30, 30, 36],
                'South West Pinnacle': [14, 23, 27, 26, 24],
                'Ganesh Benzoplast': [30, 22, 21, 19, 23],
                'Asian Energy Services': [10, 8, 12, 14, 8],
                'Gandhar Oil Refinery (India)': [5, 6, 5, 6, 16],
                'Chennai Petroleum Corporation': [1, 7, 9, 12, 6],
                'Aegis Vopak Terminals': [75, 73, 75, 74, 76],
            },
            cellNotes: {
                'Gandhar Oil Refinery (India)': 'Q1 FY27 spread jumped to ₹28,145 a kilolitre from a normal ₹8,274 as oil markets were disrupted.',
                'Chennai Petroleum Corporation': 'Swings with refining margins and gains or losses on crude stocks.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Refiners’ and blenders’ revenue follows the oil price as much as volumes: the Q1 FY27 jumps at Chennai Petroleum and Gandhar are mostly price.',
            values: {
                'Deep Industries': [63, 69, 43, 49, 40],
                'Gulf Oil Lubricant': [14, 12, 11, 11, 31],
                'Jindal Drilling and Industries': [49, 38, 1, 7, 8],
                'South West Pinnacle': [37, 128, 29, 5, 53],
                'Ganesh Benzoplast': [9, 1, 18, 11, 23],
                'Asian Energy Services': [92, 4, 155, 57, 136],
                'Gandhar Oil Refinery (India)': [-9, 13, 16, 14, 92],
                'Chennai Petroleum Corporation': [-13, 35, 21, -3, 85],
                'Aegis Vopak Terminals': [35, 26, 48, 22, 12],
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
            note: 'Chennai Petroleum’s return swings from 4% to 45% with refining margins. Aegis Vopak earns only 8–9% because its terminals cost so much to build.',
            values: {
                'Deep Industries': [8, 8, 10, 12, 16],
                'Gulf Oil Lubricant': [null, 23, 26, 27, 26],
                'Jindal Drilling and Industries': [7, 10, 7, 16, 14],
                'South West Pinnacle': [13, 11, 10, 13, 20],
                'Ganesh Benzoplast': [16, 21, 18, 18, 15],
                'Asian Energy Services': [18, -15, 13, 16, 16],
                'Gandhar Oil Refinery (India)': [39, 37, 22, 11, 13],
                'Chennai Petroleum Corporation': [20, 45, 35, 4, 35],
                'Aegis Vopak Terminals': [null, 8, 8, 9, 8],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. For service companies without stock, this is debtor days only.',
            note: 'Service companies wait months to be paid by ONGC and other state oil companies (Deep, Asian Energy, Jindal). South West Pinnacle also carries 380–580 days of stock.',
            values: {
                'Deep Industries': [154, 104, 237, 373, 197],
                'Gulf Oil Lubricant': [115, 68, 55, 40, 37],
                'Jindal Drilling and Industries': [134, 110, 112, 90, 82],
                'South West Pinnacle': [207, 610, 488, 379, 452],
                'Ganesh Benzoplast': [-72, 20, -10, 8, 36],
                'Asian Energy Services': [156, 354, 163, 176, 160],
                'Gandhar Oil Refinery (India)': [22, 38, 63, 79, 83],
                'Chennai Petroleum Corporation': [43, 17, 24, 23, 29],
                'Aegis Vopak Terminals': [null, 72, 85, 55, 74],
            },
            cellNotes: {
                'Aegis Vopak Terminals': 'Debtor days only; FY22 not filed.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Aegis Vopak, Deep and Jindal convert well; Asian Energy (8%) and Gandhar (26%) have converted little over five years.',
            values: {
                'Deep Industries': [47, 67, 153, 87, 75, 87],
                'Gulf Oil Lubricant': [-8, 80, 81, 84, 68, 66],
                'Jindal Drilling and Industries': [178, 39, -32, 359, 51, 125],
                'South West Pinnacle': [40, 20, 76, 79, 21, 44],
                'Ganesh Benzoplast': [141, 47, 86, 56, 67, 74],
                'Asian Energy Services': [73, null, -105, -50, 56, 8],
                'Gandhar Oil Refinery (India)': [68, 28, -25, 9, 54, 26],
                'Chennai Petroleum Corporation': [38, 101, 60, 130, 62, 74],
                'Aegis Vopak Terminals': [null, 75, 85, 100, 102, 95],
            },
            cellNotes: {
                'Jindal Drilling and Industries': 'FY25 operating cash (₹864cr) was far above operating profit (₹241cr); the call does not explain it.',
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
            note: 'Gulf Oil has produced free cash of 7–10% of sales for four years. Aegis Vopak and Deep spend most of their cash on new terminals and rigs.',
            values: {
                'Deep Industries': [7.5, -7.3, 9.1, 0.0, 3.8, 2.8],
                'Gulf Oil Lubricant': [-2.2, 8.3, 9.5, 9.4, 7.4, 7.1],
                'Jindal Drilling and Industries': [0.7, 9.6, -9.4, 3.5, 13.4, 4.7],
                'South West Pinnacle': [1.2, -8.4, -14.1, 11.8, -14.6, -5.3],
                'Ganesh Benzoplast': [18.5, -0.7, 0.2, 5.6, -0.2, 4.1],
                'Asian Energy Services': [2.3, -3.6, -23.9, -11.2, -1.0, -6.8],
                'Gandhar Oil Refinery (India)': [1.4, 0.8, -3.0, 0.4, 3.0, 0.5],
                'Chennai Petroleum Corporation': [0.8, 7.0, 3.2, 1.1, 3.2, 3.4],
                'Aegis Vopak Terminals': [null, -2.0, -58.0, 55.8, 0.1, null],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Gulf Oil, Asian Energy, Jindal Drilling and Ganesh Benzoplast.',
            note: 'Below zero means more cash than debt. Aegis Vopak carries the most debt (5x); Jindal Drilling and Gulf Oil hold net cash.',
            values: {
                'Deep Industries': [0.0, 0.2, 0.6, 0.6, 0.4],
                'Gulf Oil Lubricant': [-0.8, -1.1, -1.1, -1.4, -1.2],
                'Jindal Drilling and Industries': [-2.9, -2.4, -1.9, -2.2, -2.2],
                'South West Pinnacle': [1.7, 2.9, 3.4, 0.7, 1.2],
                'Ganesh Benzoplast': [-0.6, 0.1, -0.6, -0.5, -0.3],
                'Asian Energy Services': [-0.7, null, -0.7, -1.3, 0.0],
                'Gandhar Oil Refinery (India)': [0.0, 0.4, -0.0, 0.9, 0.8],
                'Chennai Petroleum Corporation': [3.4, 0.7, 0.6, 2.6, 0.1],
                'Aegis Vopak Terminals': [null, 10.3, 8.0, 5.7, 5.0],
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
            note: 'Terminals and rigs are expensive: Aegis Vopak has spent more than its sales in some years; Jindal Drilling bought rigs worth about a year’s sales in FY25. Refiners and blenders spend little relative to their large sales.',
            values: {
                'Deep Industries': [9.6, 33.1, 50.6, 36.5, 26.5, 31.5],
                'Gulf Oil Lubricant': [1.1, 0.8, 0.8, 1.5, 1.3, 1.1],
                'Jindal Drilling and Industries': [46.0, 2.9, 2.3, 100.8, 4.4, 32.6],
                'South West Pinnacle': [7.3, 11.6, 28.4, 3.2, 19.6, 14.3],
                'Ganesh Benzoplast': [5.6, 10.5, 17.2, 10.4, 15.6, 12.2],
                'Asian Energy Services': [16.2, 0.9, 9.5, 4.1, 7.7, 7.9],
                'Gandhar Oil Refinery (India)': [3.3, 1.4, 1.3, 0.0, 0.0, 1.1],
                'Chennai Petroleum Corporation': [1.6, 0.5, 0.9, 1.2, 1.4, 1.1],
                'Aegis Vopak Terminals': [null, 50.7, 118.0, 17.2, 75.9, null],
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
            note: 'Terminals earn about ₹0.1–0.2 of sales a year per ₹1 of tanks and jetties, rigs about ₹0.4–1.1; refiners and blenders ₹8–10, because oil is expensive and the plant is not.',
            values: {
                'Deep Industries': [0.4, 0.3, 0.4, 0.5, 0.6],
                'Gulf Oil Lubricant': [8.0, 10.8, 9.0, 9.3, 9.7],
                'Jindal Drilling and Industries': [0.6, 0.9, 1.1, 0.6, 0.8],
                'South West Pinnacle': [2.1, 2.1, 1.7, 2.7, 2.1],
                'Ganesh Benzoplast': [1.5, 1.5, 1.4, 1.0, 1.0],
                'Asian Energy Services': [2.3, 1.1, 2.7, 4.0, 6.9],
                'Gandhar Oil Refinery (India)': [18.6, 17.1, 11.4, 8.7, 8.5],
                'Chennai Petroleum Corporation': [6.2, 10.0, 8.8, 8.1, 8.8],
                'Aegis Vopak Terminals': [null, 0.1, 0.2, 0.2, 0.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'contract', label: 'Contracts and order book', description: 'Revenue locked in for years by contracts, with rates that are hard to cut.' },
            { key: 'asset', label: 'Scarce assets', description: 'Rigs, port land, jetties or plants that take years and approvals to replicate.' },
            { key: 'brand', label: 'Brand and approvals', description: 'A name mechanics and buyers ask for, or approvals that pharma and cosmetic makers need.' },
            { key: 'cycle', label: 'Protection from oil prices', description: 'How little a swing in crude prices moves profit.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, debt levels, and how the promoters treat minority shareholders.' },
        ],
        rows: [
            { company: 'Deep Industries', trend: 'widening', trendNote: 'Order book ₹3,047cr; guides ₹350cr profit in FY27 and ₹500cr in FY28.',
                grades: { contract: { grade: 'A', note: 'Multi-year ONGC and Oil India contracts' }, asset: { grade: 'B', note: '80+ compressors; about 85% of outsourced compression' }, brand: { grade: 'B', note: 'Long record with state producers' }, cycle: { grade: 'A', note: 'Day rates, not oil prices' }, cash: { grade: 'C', note: 'Lent to a promoter-group company; being repaid' } } },
            { company: 'Gulf Oil Lubricant', trend: 'widening', trendNote: 'Volumes up 17% in Q1 against an industry growing 3–4%; margin held at 12.9%.',
                grades: { contract: { grade: 'B', note: 'Supplies about 50 vehicle makers' }, asset: { grade: 'C', note: 'Blending plants are easy to build' }, brand: { grade: 'A', note: 'Top private lubricant brand' }, cycle: { grade: 'B', note: 'Passes base-oil costs on with a lag' }, cash: { grade: 'A', note: 'Net cash; high dividends' } } },
            { company: 'Jindal Drilling and Industries', trend: 'stable', trendNote: 'New ONGC contract at about ₹45 lakh a day; three rigs off hire for refurbishment.',
                grades: { contract: { grade: 'A', note: 'Order book ₹1,310cr' }, asset: { grade: 'B', note: 'Offshore jack-up rigs' }, brand: { grade: 'B', note: 'Long ONGC record' }, cycle: { grade: 'A', note: 'Rates fixed in rupees' }, cash: { grade: 'B', note: '₹785cr net cash; ₹160cr ONGC dispute' } } },
            { company: 'South West Pinnacle', trend: 'widening', trendNote: 'Order book up from ₹581cr to ₹761cr; 77% from private companies.',
                grades: { contract: { grade: 'B', note: 'Order book about three years of revenue' }, asset: { grade: 'C', note: '43 drilling rigs' }, brand: { grade: 'B', note: 'Hindustan Zinc and Reliance contracts' }, cycle: { grade: 'B', note: 'Paid per metre drilled' }, cash: { grade: 'D', note: 'Cash conversion 44%; chairman linked to an investee' } } },
            { company: 'Ganesh Benzoplast', trend: 'narrowing', trendNote: 'JNPT land rent rose from ₹2cr to ₹25cr a year; expansion six to nine months late.',
                grades: { contract: { grade: 'B', note: 'Tank rentals renew regularly' }, asset: { grade: 'A', note: 'Scarce tank space at JNPT, about 100% full' }, brand: { grade: 'C', note: 'Chemicals business undifferentiated' }, cycle: { grade: 'A', note: 'Tank fees, not oil prices' }, cash: { grade: 'C', note: 'Promoters hold 39%; segment data missing' } } },
            { company: 'Asian Energy Services', trend: 'widening', trendNote: 'Revenue up 70% in FY26; order book about ₹1,750cr; merging the promoter’s Oilmax.',
                grades: { contract: { grade: 'B', note: 'Order book about ₹1,750cr' }, asset: { grade: 'C', note: 'Services, few owned assets' }, brand: { grade: 'C', note: 'Building an international name' }, cycle: { grade: 'B', note: 'Depends on producers’ spending' }, cash: { grade: 'D', note: 'Five-year cash conversion 8%; unpaid bills written off' } } },
            { company: 'Gandhar Oil Refinery (India)', trend: 'stable', trendNote: 'Spread jumped to ₹28,145 a kilolitre from a normal ₹8,274; volumes up 8%.',
                grades: { contract: { grade: 'C', note: 'Order by order' }, asset: { grade: 'B', note: 'Plants 97% used' }, brand: { grade: 'A', note: 'Pharma and cosmetic approvals' }, cycle: { grade: 'C', note: 'Spreads swing with oil markets' }, cash: { grade: 'D', note: 'Five-year cash conversion 26%' } } },
            { company: 'Chennai Petroleum Corporation', trend: 'stable', trendNote: 'Refining margin $9.2 a barrel in FY26 against Singapore’s $5.83; running at 112% of capacity.',
                grades: { contract: { grade: 'B', note: 'About 90% of output sold to Indian Oil' }, asset: { grade: 'A', note: 'Coastal refinery near Chennai' }, brand: { grade: 'C', note: 'Sells a commodity' }, cycle: { grade: 'D', note: 'Profit swings with refining margins' }, cash: { grade: 'B', note: 'Low debt; parent sets the terms' } } },
            { company: 'Aegis Vopak Terminals', trend: 'stable', trendNote: 'Liquids up 31% but gas volumes down 3.5% in Q1; building toward ₹10,000cr of assets.',
                grades: { contract: { grade: 'A', note: 'Long terminal contracts' }, asset: { grade: 'A', note: 'Terminals at seven ports' }, brand: { grade: 'B', note: 'Vopak is a global terminal operator' }, cycle: { grade: 'A', note: 'Fee per tonne stored' }, cash: { grade: 'C', note: 'Net debt 5x, above its own 3.5x cap' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Deep Industries, Gulf Oil and Jindal Drilling.** Deep rents gas compressors, rigs and crews to ONGC and Oil India, has a ₹3,047cr order book and guides profit from about ₹350cr this year to ₹500cr next; the price asks for far less growth than that. Its governance needs watching: it lent money to a promoter-group company, part of which has come back. Gulf Oil is a leading private lubricant brand growing volumes 17% against an industry growing 3–4%, with net cash, steady free cash and high dividends. Jindal Drilling hires offshore rigs to ONGC under rupee contracts, holds ₹785cr of net cash, and trades at a single-digit P/E.",
                "**Follow South West Pinnacle, Ganesh Benzoplast and Asian Energy.** South West Pinnacle's order book rose to ₹761cr and its debt fell, but it converts less than half its profit into cash. Ganesh Benzoplast has scarce tank space at JNPT but its land rent jumped from ₹2cr to ₹25cr a year. Asian Energy is growing fast and merging in its promoter's oil-production company, but has converted almost none of its profit into cash over five years.",
                "**Wait on Gandhar, Chennai Petroleum and Aegis Vopak.** Gandhar's and Chennai Petroleum's low P/Es rest on unusually high spreads that will not last: Gandhar made more profit in Q1 than in the whole of FY26. Aegis Vopak owns excellent port terminals, but the price asks for far more growth than it is delivering and its debt is above its own limit.",
                "**Two things to hold onto before reading the rest.** First, **a low P/E at the top of a cycle is a trap**: refiners and blenders look cheapest when their spreads are highest, and 2026's disrupted oil markets have pushed spreads to records. Second, **the service companies depend on state producers**: ONGC's spending and payment speed decide their growth and cash, which is why their order books matter more than the oil price.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. The three businesses look very different on every measure, so compare each company with others of its kind. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Oil in India means importing most of the crude, refining it at home, and producing a little at home through ONGC and Oil India. 2026 has been an unusual year: disruption in West Asia pushed refining spreads to record levels, and India's state refiners reported margins of $10–13 a barrel against $3–6 a year earlier.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Crude produced by ONGC and Oil India (with rigs and compressors from **Deep** and **Jindal**) or imported through ports (stored at terminals like **Aegis Vopak** and **Ganesh Benzoplast**) → refineries (**Chennai Petroleum**) → fuels, LPG and base oils → blenders and specialists (**Gulf Oil**, **Gandhar**) → vehicles, factories and consumer products. **The steadiest profit sits with toll-like assets (terminals, rigs on contract) and brands; the most volatile with refiners.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India's fuel and LPG use keeps rising; about 60% of its LPG is imported, and the 2026 supply scare showed how little storage the country has. ONGC plans to raise exploration spending by at least 20% to up to ₹12,000cr in FY27 and has tendered for deepwater rigs worth up to $18–20bn. Mining companies need more exploration drilling (South West Pinnacle).",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Spreads swing; contracts do not.** Refining and white-oil spreads jumped in 2026 and will fall back when supply normalises. The government takes part of windfall export margins through a levy it resets every fortnight. Service contracts with ONGC are fixed for years but renegotiated hard at renewal: Jindal bid $62,000 a day for a rig and was pushed down to about $47,600.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Deep** and **Jindal** on ONGC's contracts and payments; **South West Pinnacle** on mining companies' exploration budgets; **Asian Energy** on its merger and overseas staffing; **Gulf Oil** on its brand and new products; **Gandhar** on spreads and pharma and cosmetic demand; **Chennai Petroleum** on refining margins and Indian Oil; **Aegis Vopak** and **Ganesh Benzoplast** on imports through their ports. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Kind', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Oilfield and exploration services', 'Deep, Jindal, South West Pinnacle, Asian Energy', '8–45%', '14–20%', '**8–125%**'],
                        ['Refining and oil products', 'Chennai Petroleum, Gulf Oil, Gandhar', '1–16%', '13–35%', '**26–74%**'],
                        ['Port tank terminals', 'Aegis Vopak, Ganesh Benzoplast', '19–76%', '8–15%', '**74–95%**'],
                    ],
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
                    label: 'Lasting: scarce port land',
                    text: "**Aegis Vopak** has terminals at seven ports and **Ganesh Benzoplast** is about 100% full at JNPT. Port land and jetties are scarce and take years of approvals. The weakness is that the port owner sets the rent, as Ganesh found when its JNPT rent rose twelvefold.",
                },
                {
                    label: 'Lasting but narrow: contracts with one buyer',
                    text: "**Deep** (about 85% of outsourced gas compression) and **Jindal Drilling** earn fixed day rates from ONGC and Oil India. The contracts are long, but the buyer is one state company that negotiates hard and pays slowly.",
                },
                {
                    label: 'Brand and approvals',
                    text: "**Gulf Oil**'s brand with mechanics and vehicle makers lets it grow several times faster than the market. **Gandhar**'s white oils carry the approvals pharma and cosmetic makers need.",
                },
                {
                    label: 'No moat against the cycle',
                    text: "**Chennai Petroleum** sells a commodity to its parent at formula prices; its profit is whatever the refining margin allows. **Asian Energy** and **South West Pinnacle** win work contract by contract.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Castrol**, **Savita Oil** and the state oil companies in lubricants; **Reliance** and **Nayara** in refining; international rig owners and **Mineral Exploration and Consultancy (MECL)** in drilling; state and private terminal operators at every port.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For terminals and contracted services, mostly yes; for refiners and white oils, this year's are not.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: fees and day rates',
                    text: "**Aegis Vopak** earns about 75% (76.7% in Q1), charging about ₹1,175–1,200 a tonne of LPG. **Deep** guides 43–45% (43.6% in Q1). **Jindal** targets 35%. Ganesh's storage business earns 45–47% and new tanks about 80%, but the group margin is 19–23% because of chemicals and the higher JNPT rent.",
                },
                {
                    label: 'Structural but thin: a brand on a commodity',
                    text: "**Gulf Oil** has held 12–13% for five quarters and guides 12–14%, rising to 14–16% later, passing base-oil costs on through price changes (it holds 30–45 days of base oil).",
                },
                {
                    label: 'Cyclical: this year’s windfall',
                    text: "**Gandhar**'s margin jumped from 5–6% to 16% as its spread went from a normal ₹8,274 a kilolitre to ₹28,145; management hopes it lasts the year. **Chennai Petroleum** earned $9.2 a barrel in FY26 against Singapore's $5.83 and $13.75 in Q4; margins like these do not last.",
                },
                {
                    label: 'Not structural: thin service margins',
                    text: "**Asian Energy** (8–14%) and **South West Pinnacle** (14–27%) win work contract by contract; Asian Energy's margin swings with the mix of projects.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Asian Energy** (8%) and **Gandhar** (26%) have converted little profit into cash over five years. **South West Pinnacle** carries 380–580 days of stock and has converted 44%. **Deep**'s customers took 197–373 days to pay in the last three years.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Gulf Oil**'s cash cycle fell from 115 to 37 days over five years, and **Jindal**'s from 134 to 82.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Refiners hold weeks of crude and products; service companies wait for state producers to pay. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and debt, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Deep Industries', '₹86cr of a loan to a promoter-group company repaid; rest due by end of Q2', 'Net debt ₹150cr at March'],
                        ['Jindal Drilling and Industries', 'Three rigs to be refurbished at ₹90–110cr each; ₹160–163cr at stake in an ONGC dispute', 'Net cash ₹785cr at March'],
                        ['South West Pinnacle', 'Debt cut to about ₹15cr', 'Screener showed ₹80cr of borrowings at March'],
                        ['Chennai Petroleum Corporation', 'Net debt ₹973cr; ₹1,600cr base-oil project and ₹500cr a year of maintenance', 'Dividend ₹62 a share'],
                        ['Aegis Vopak Terminals', '₹10,000cr of assets by March 2027; JNPA expansion ₹1,675cr', 'Net debt 5x operating profit against a 3.5x cap'],
                        ['Ganesh Benzoplast', 'About ₹100cr for two tank expansions', 'Net cash ₹27cr at March'],
                        ['Gulf Oil, Gandhar, Asian Energy', 'No Q1 cash figure given', '—'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
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
                    label: 'Growth driver: ONGC and Oil India spending',
                    text: "**Deep** has a ₹3,047cr order book, about ₹800cr of it to be billed this year, a 15-year ₹1,402cr contract to run an ONGC field, and ₹250–300cr of capex planned. **Jindal** has a ₹1,310cr order book and a new rupee contract with ONGC.",
                },
                {
                    label: 'Growth driver: mining and exploration',
                    text: "**South West Pinnacle**'s order book of ₹761cr is 77% from private companies, including ₹307cr from Hindustan Zinc; it guides 20% growth and is developing its own coal block (about ₹200cr, coal from FY29). **Asian Energy** guides 30–40% growth in India and targets ₹450–500cr of profit by FY29 after merging in its promoter's Oilmax.",
                },
                {
                    label: 'Growth driver: more imports through ports',
                    text: "**Aegis Vopak** plans to grow liquid storage from 1.7 to about 3 million cubic metres and guides gas volumes up at least 25% a year. **Ganesh Benzoplast** is adding about 50,000 kL by end-2026 and 60,000 kL after.",
                },
                {
                    label: 'Growth driver: brands and new products',
                    text: "**Gulf Oil** aims to grow volumes 2–3 times faster than the market and to reach ₹300–400cr of EV-charger revenue in 3–4 years. **Gandhar** guides 8–10% volume growth with plants 97% used.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Deep** raised its targets to absolute profit numbers; **Gulf Oil** grew volumes 17%; **South West Pinnacle** grew its order book 31% in a quarter and cut debt.",
                },
                {
                    label: 'Cautious',
                    text: "**Aegis Vopak**'s gas volumes fell 3.5% in Q1 and its JNPA capacity is due in Q3 FY27. **Chennai Petroleum** has a maintenance shutdown around September–October.",
                },
                {
                    label: 'Missed',
                    text: "**Ganesh Benzoplast**'s first expansion is six to nine months late and its margin recovery now stretches over three years.",
                },
                {
                    label: 'Mixed',
                    text: "**Jindal** won a new contract but at a lower day rate than it bid, and three rigs are off hire. **Asian Energy** is growing fast but converting little to cash.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Deep to compound earnings at about 25%, Asian Energy and Aegis Vopak at about 20%, South West Pinnacle at about 18%, Gulf Oil at about 12%, Ganesh Benzoplast at about 10% and Jindal at about 8%.** For **Gandhar** and **Chennai Petroleum**, today's earnings are at a peak, so I expect little or no growth from here over three to five years.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Deep Industries', 'Order book; ONGC field; new wells', '15% / **25%** / 32%'],
                        ['Asian Energy Services', 'Indian growth; Kuiper; Oilmax merger', '8% / **20%** / 30%'],
                        ['Aegis Vopak Terminals', 'New tanks; LPG imports', '12% / **20%** / 26%'],
                        ['South West Pinnacle', 'Order book; coal block from FY29', '10% / **18%** / 25%'],
                        ['Gulf Oil Lubricant', 'Volume share gains; EV chargers', '8% / **12%** / 16%'],
                        ['Ganesh Benzoplast', 'New tanks at 80% margins; rent absorbed', '4% / **10%** / 16%'],
                        ['Jindal Drilling and Industries', 'Rigs back on hire; own rigs', '0% / **8%** / 15%'],
                        ['Gandhar Oil Refinery (India)', 'Volume +8–10%; spreads normalise', '−15% / **0%** / 10%'],
                        ['Chennai Petroleum Corporation', 'Refining margins normalise', '−20% / **0%** / 10%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Deep Industries', 'Revenue +25%; profit ₹350cr FY27, ₹500cr FY28; margin 43–45%', '₹250–300cr in FY27', '**On track**'],
                        ['Gulf Oil Lubricant', 'Volumes 2–3x the industry; margin 12–14%', 'Plant capacity up 70%', '**Delivered**: Q1 volume +17%'],
                        ['Jindal Drilling and Industries', 'Margin about 35%', '₹90–110cr per rig refurbishment', '**Mixed**: lower day rate'],
                        ['South West Pinnacle', 'Revenue +20%', 'Coal block about ₹200cr', '**Delivered**: order book +31%'],
                        ['Ganesh Benzoplast', 'Margin recovery over three years', 'About ₹100cr for two expansions', '**Missed**: expansion late'],
                        ['Asian Energy Services', 'India +30–40%; profit ₹450–500cr by FY29', 'About ₹50cr for new wells', '**On track** on growth; weak cash'],
                        ['Gandhar Oil Refinery (India)', 'Volume +8–10%; hopes Q1 margins last', 'Little', '**Beat**, on windfall spreads'],
                        ['Chennai Petroleum Corporation', 'None on margins', '₹1,600cr base oils; ₹500cr a year maintenance', '**Cyclical**'],
                        ['Aegis Vopak Terminals', 'Gas volumes +25% a year; ₹10,000cr of assets by March 2027', 'JNPA ₹1,675cr; $5bn by 2030–31', '**Behind**: gas volumes down in Q1'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'Spreads falling back',
                    text: "**Gandhar** and **Chennai Petroleum** are earning on spreads two to three times normal. When West Asian supply settles, both profits fall sharply. Gandhar's management said only that it hopes margins last the year.",
                },
                {
                    label: 'One buyer: the state',
                    text: "**Deep** and **Jindal** depend on ONGC and Oil India, which negotiate rates down at renewal and pay slowly; Jindal has ₹160–163cr at stake in a dispute with ONGC. **Chennai Petroleum** sells about 90% of its output to its parent at formula prices.",
                },
                {
                    label: 'Promoter dealings',
                    text: "**Deep** lent money to a promoter-group company (₹86cr repaid, the rest due by the end of Q2). **Asian Energy** is merging in its promoter's Oilmax, which granted staff share options just before the merger was announced. **South West Pinnacle**'s chairman is a director of, and owns shares in, a company it is investing in. **Aegis Vopak**'s promoters' trading arm is also one of its customers.",
                },
                {
                    label: 'Debt and big projects',
                    text: "**Aegis Vopak**'s net debt of about 5x operating profit is above its own 3.5x cap while it builds toward ₹10,000cr of assets. **Chennai Petroleum** is spending ₹1,600cr on a base-oil project. **South West Pinnacle**'s coal block is a new business with a 24.25% revenue share to the government.",
                },
                {
                    label: 'Reporting',
                    text: "**Ganesh Benzoplast** dropped segment figures from its latest presentation and its promoters hold only 39%. **Asian Energy** wrote off unpaid bills in a one-off charge. **South West Pinnacle**'s stated debt of ₹15cr does not match Screener's ₹80cr at March.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **−2% at 5x, 4–5% at 9x, 7–8% at 12x, 9% at 14x, 11% at 16x, 20% at 37x and 36% at 124x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **For cyclical companies, a low P/E at peak earnings is not cheap**: the check below compares today's price with my growth estimate, and for Gandhar and Chennai Petroleum that estimate is zero because earnings are at a high.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Jindal Drilling** (₹785cr) and **Gulf Oil** (₹641cr) hold large net cash, so they are cheaper than their P/Es suggest. **Aegis Vopak**'s ₹3,424cr of net debt makes it more expensive than even its P/E of over 100 suggests.",
                },
                {
                    label: 'Reasonable',
                    text: "**Deep**, **Gulf Oil**, **Jindal Drilling**, **South West Pinnacle**, **Ganesh Benzoplast** and **Asian Energy**: prices that ask for about the growth I expect or less. For the last three, cash and governance are the reasons to hold back.",
                },
                {
                    label: 'Fits only on paper',
                    text: "**Chennai Petroleum**: a P/E of about 5 fits even no growth, but the earnings behind it are a cyclical peak. Treat the green check with care.",
                },
                {
                    label: 'Full',
                    text: "**Gandhar**: its P/E of about 9 needs some growth, and I expect none once spreads normalise.",
                },
                {
                    label: 'Stretched',
                    text: "**Aegis Vopak**: the price needs about 36% growth a year against my 20%.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Deep Industries', rank: 1, stance: 'SCALEUP', segment: SERVICES,
            what: "Rents out gas-compression and gas-processing units and onshore drilling and workover rigs, with crews, mainly to ONGC and Oil India, and runs an old ONGC gas field under a 15-year contract.",
            view: "**Contracted growth at a low price.** Margins of 33–45%, a ₹3,047cr order book and profit guided to ₹500cr by FY28. It lent money to a promoter-group company, which is being repaid. The price asks for far less than my ~25% estimate.",
            watch: 'Repayment of the promoter-group loan; ONGC payments; new-well output.',
        },
        {
            company: 'Gulf Oil Lubricant', rank: 2, stance: 'COMPOUNDER', segment: PRODUCTS,
            what: "One of India's top private lubricant brands (engine, gear and industrial oils), part of the Hinduja group, with AdBlue exhaust fluid and a growing EV-charger business.",
            view: "**A brand gaining share, paid in cash.** Volumes up 17% against an industry growing 3–4%, margins steady at 12–13%, net cash and high dividends. The price asks for less than my ~12% estimate.",
            watch: 'Volume growth; margin toward 14–16%; EV-charger revenue.',
        },
        {
            company: 'Jindal Drilling and Industries', rank: 3, stance: 'HARVEST', segment: SERVICES,
            what: "Hires out offshore jack-up drilling rigs, with crews, to ONGC for shallow-water wells, and is moving from renting rigs to owning them.",
            view: "**Cheap, cash-rich, one customer.** ₹785cr of net cash, a ₹1,310cr order book and a single-digit P/E, but a lower day rate on its new contract and three rigs off hire. The price asks for less than my ~8% estimate.",
            watch: 'Rigs back on hire; the ONGC dispute; day rates at renewal.',
        },
        {
            company: 'South West Pinnacle', rank: 4, stance: 'SCALEUP', segment: SERVICES,
            what: "Drills exploration holes for mining and energy companies (coal, minerals, coal-bed methane, groundwater) with 43 rigs, and is developing its own coal block.",
            view: "**A growing order book, weak cash.** Order book ₹761cr and debt cut, but it converts only 44% of profit into cash and its chairman has a personal stake in a company it invests in. The price asks for less than my ~18% estimate.",
            watch: 'Operating cash; the coal block; related-party dealings.',
        },
        {
            company: 'Ganesh Benzoplast', rank: 5, stance: 'TURNAROUND', segment: TERMINALS,
            what: "Rents out liquid storage tanks at JNPT (Mumbai), Kochi and Goa ports, and runs a speciality chemicals business.",
            view: "**Scarce tanks, a rent shock.** JNPT is about 100% full and new tanks earn about 80%, but its land rent rose from ₹2cr to ₹25cr a year and its expansion is late. The price asks for about my ~10% estimate.",
            watch: 'The 50,000 kL expansion; margin recovery; segment disclosure.',
        },
        {
            company: 'Asian Energy Services', rank: 6, stance: 'SCALEUP', segment: SERVICES,
            what: "Runs oilfields and coal-handling plants for their owners, supplies technical crews abroad through the Kuiper group it bought, and is merging in its promoter's Oilmax Energy.",
            view: "**Fast growth, little cash.** Revenue up 70% in FY26 and a ₹1,750cr order book, but five-year cash conversion of 8% and a merger with the promoter's company. The price asks for about my ~20% estimate.",
            watch: 'Cash collection; merger terms; Kuiper revenue.',
        },
        {
            company: 'Gandhar Oil Refinery (India)', rank: 7, stance: 'CYCLICAL', segment: PRODUCTS,
            what: "One of India's largest makers of white oils (for creams, petroleum jelly, baby oil and medicines), plus transformer and process oils and lubricants; about half its revenue is exported.",
            view: "**A windfall year, priced as if it lasts.** Q1 profit of ₹206cr beat all of FY26 as its spread tripled; volumes grow only 8–10% and five-year cash conversion is 26%. The price needs some growth; I expect none from today's peak.",
            watch: 'Spread per kilolitre; volume growth; cash conversion.',
        },
        {
            company: 'Chennai Petroleum Corporation', rank: 8, stance: 'CYCLICAL', segment: PRODUCTS,
            what: "Indian Oil's refinery subsidiary in Chennai, turning about 11.7 million tonnes of crude a year into diesel, petrol and LPG and selling about 90% of it to Indian Oil.",
            view: "**Peak margins in a cheap wrapper.** Refining margin $9.2 a barrel in FY26 and the refinery running at 112%, but margins like these do not last and its parent sets the terms. The P/E of about 5 fits even my zero-growth estimate only because earnings are at a high.",
            watch: 'Refining margins; the base-oil project; the export levy.',
        },
        {
            company: 'Aegis Vopak Terminals', rank: 9, stance: 'PRICED', segment: TERMINALS,
            what: "Owns and runs port terminals storing LPG, liquid chemicals and fuels at seven Indian ports; a joint venture of Aegis Logistics and Vopak.",
            view: "**Excellent assets, very full price.** Margins of about 75% and long contracts, but gas volumes fell in Q1, net debt is 5x operating profit and the price needs about 36% growth a year. The price needs far more than my ~20% estimate.",
            watch: 'Gas volumes; JNPA expansion; debt against its 3.5x cap.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Oilfield and exploration services.** **Deep Industries: own**, watching the promoter-group loan. **Jindal Drilling and Industries: own** for the cash and the price. **South West Pinnacle: follow** until cash follows the order book. **Asian Energy Services: follow** through its merger.",
            "**Refining and oil products.** **Gulf Oil Lubricant: own.** **Gandhar Oil Refinery (India): wait** for spreads to normalise. **Chennai Petroleum Corporation: wait**: cheap at a cyclical peak.",
            "**Port tank terminals.** **Ganesh Benzoplast: follow** as the rent shock is absorbed. **Aegis Vopak Terminals: wait** for a price that fits.",
            "**What would change my view.** For the better: ONGC raising drilling spending further; Aegis Vopak's price falling to fit its growth. For the worse: ONGC delaying payments or cutting rates; spreads staying high long enough to tempt me into the refiners.",
            "**What to watch next quarter.** Deep's loan repayment; Gulf Oil's volumes; Jindal's rigs back on hire; Gandhar's spread; Aegis Vopak's gas volumes.",
        ],
        bottomLine:
            "Own the contracted services and the brand (Deep Industries, Jindal Drilling and Industries, Gulf Oil Lubricant), follow the growers still proving their cash (South West Pinnacle, Ganesh Benzoplast, Asian Energy Services), and wait on the peak-spread refiners and the expensive terminal (Gandhar Oil Refinery (India), Chennai Petroleum Corporation, Aegis Vopak Terminals).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/DEEPINDS/consolidated/' },
        { label: 'Oil refiners to report strong Q3 performance aided by high refining margins — Business Standard', url: 'https://www.business-standard.com/amp/industry/news/oil-refiners-to-report-strong-q3-performance-aided-by-high-refining-margins-126011401329_1.html' },
        { label: 'Refining stocks soar as crack spread hits record high in 2026 — Forbes', url: 'https://www.forbes.com/sites/garthfriesen/2026/07/23/refining-stocks-soar-as-crack-spread-hits-record-high-in-2026/' },
        { label: 'ONGC targeting up to ₹12,000cr exploration capex for FY27 — Business Today', url: 'https://www.businesstoday.in/latest/corporate/story/ongc-targeting-up-to-rs-12000-crore-exploration-capex-for-fy26-27-scouts-global-partners-for-deepwater-push-513350-2026-01-29' },
        { label: 'ONGC $20 billion deepwater rig tender 2026 — PSU Connect', url: 'https://www.psuconnect.in/psu-news/ongc-20-billion-deepwater-rig-tender-2026-india-largest-offshore-exploration-programme' },
        { label: 'Policy responses to India’s LPG supply crisis — Takshashila Institution', url: 'https://takshashila.org.in/content/publications/20260318-Policy-Responses-to-India-LPG-Supply-Crisis.html' },
        { label: 'Wholesale price index, crude petroleum — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
