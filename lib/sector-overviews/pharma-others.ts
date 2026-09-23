import { SectorOverview } from './types';
import { pharmaOthersBusinesses } from './pharma-others-businesses';
import { pharmaOthersValuationInputs } from './card-data/pharma-others';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const INGREDIENTS = 'Ingredients for drug and food makers — excipients, enzymes, nutrients';
const ANIMAL = 'Animal health and diagnostics';
const CARE = 'Care for patients — Ayurvedic hospitals and generic pharmacies';

export const pharmaOthers: SectorOverview = {
    sector: 'Pharma Others',
    title: 'Pharma Others',
    format: 'ranked',
    businesses: pharmaOthersBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: pharmaOthersValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Jeena Sikho Lifecare': 25,
            'Advanced Enzyme': 12,
            'Hexagon Nutrition': 12,
            'Accent Microcell': 18,
            'Sequent Scientific': 20,
            'Sudeep Pharma': 22,
            'Q-Line Biotech': 15,
            'Hester Biosciences': 12,
            'Zota Health Care': null,
            'Sigachi Industries': 10,
        },
    },
    standfirst:
        "Ten health businesses that are not mainstream drug makers. Five supply ingredients to drug and food makers: Sudeep (mineral excipients), Accent Microcell and Sigachi (cellulose binders for tablets), Advanced Enzyme (enzymes and probiotics) and Hexagon (nutrient premixes). Three work in animal health and diagnostics: Sequent (animal medicines and drug ingredients, now Viyash Scientific), Hester (poultry vaccines) and Q-Line (blood-test machines). Two serve patients directly: Jeena Sikho runs Ayurvedic hospitals and Zota runs the Davaindia generic pharmacy chain. Every chart uses filed results; several of these companies listed recently.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed quarterly results (Screener): consolidated except Accent Microcell (standalone). Accent Microcell and Q-Line report half-yearly, so their figures sit in the Q2 and Q4 columns. Operating profit ÷ sales.',
            note: 'A very mixed group: Jeena Sikho earns about 40% from its Ayurvedic hospitals and Sudeep about 35% from specialist minerals, while Zota’s pharmacy chain barely breaks even and Sigachi’s margin collapsed after its plant explosion.',
            values: {
                'Jeena Sikho Lifecare': [45, 48, 45, 36, 41],
                'Advanced Enzyme': [30, 32, 28, 31, 27],
                'Hexagon Nutrition': [14, null, 15, 13, 11],
                'Accent Microcell': [null, 17, null, 16, null],
                'Sequent Scientific': [15, 20, 21, 20, 19],
                'Sudeep Pharma': [35, 34, 35, 35, 35],
                'Q-Line Biotech': [null, null, null, 31, null],
                'Hester Biosciences': [27, 17, 23, 34, 30],
                'Zota Health Care': [4, 5, 0, 6, -7],
                'Sigachi Industries': [19, 7, 5, 13, 14],
            },
            cellNotes: {
                'Hexagon Nutrition': 'Q2 FY26 not filed.',
                'Q-Line Biotech': 'Listed recently; only the latest half-year is filed.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Blank where the quarter a year earlier was not filed.',
            note: 'Zota and Jeena Sikho grow 30–100% as they open stores and hospitals; Sequent’s jumps reflect its merger with Viyash; Sigachi has shrunk for four quarters.',
            values: {
                'Jeena Sikho Lifecare': [null, 67, 91, 55, 29],
                'Advanced Enzyme': [20, 27, 2, 22, 2],
                'Hexagon Nutrition': [null, null, null, 8, 43],
                'Accent Microcell': [null, 10, null, 51, null],
                'Sequent Scientific': [103, 130, 11, 129, 19],
                'Sudeep Pharma': [null, 9, 48, 15, 26],
                'Q-Line Biotech': [null, null, null, -9, null],
                'Hester Biosciences': [2, -15, 22, 22, -8],
                'Zota Health Care': [86, 93, 99, 68, 67],
                'Sigachi Industries': [34, -12, -16, -5, -5],
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Blank where not filed.',
            note: 'Jeena Sikho (64%) and Sudeep (28–49%) earn exceptional returns; Advanced Enzyme’s 14% is held down by its large cash pile; Sigachi’s fell to 6%.',
            values: {
                'Jeena Sikho Lifecare': [null, 52, null, null, 64],
                'Advanced Enzyme': [16, 12, 15, 13, 14],
                'Hexagon Nutrition': [19, null, null, 17, 22],
                'Accent Microcell': [19, 27, 31, 24, 25],
                'Sequent Scientific': [6, -3, 0, 8, 13],
                'Sudeep Pharma': [36, 33, 49, 36, 28],
                'Q-Line Biotech': [null, null, 16, 25, 22],
                'Hester Biosciences': [14, 9, 9, 10, 15],
                'Zota Health Care': [15, -2, -7, -17, -8],
                'Sigachi Industries': [28, 20, 17, 16, 6],
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
            note: 'Enzymes and vaccines take months to make, so Advanced Enzyme and Hester run 250–400 days. Sudeep’s cycle has more than doubled in two years as stock built up.',
            values: {
                'Jeena Sikho Lifecare': [62, -1, null, 38, 20],
                'Advanced Enzyme': [404, 344, 393, 397, 331],
                'Hexagon Nutrition': [143, null, 181, 153, 179],
                'Accent Microcell': [68, 79, 114, 124, 117],
                'Sequent Scientific': [126, 132, 135, 146, 160],
                'Sudeep Pharma': [142, 145, 150, 298, 372],
                'Q-Line Biotech': [null, 82, 228, 183, 251],
                'Hester Biosciences': [409, 367, 284, 255, 318],
                'Zota Health Care': [145, 140, 131, 217, 198],
                'Sigachi Industries': [149, 165, 180, 234, 193],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years. Blank where not filed or operating profit was negative.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Advanced Enzyme (71%), Hester and Jeena Sikho convert well; Sudeep (30%), Sigachi (9%) and Q-Line (7%) have converted little.',
            values: {
                'Jeena Sikho Lifecare': [89, 33, null, 60, 72, 66],
                'Advanced Enzyme': [60, 89, 68, 72, 68, 71],
                'Hexagon Nutrition': [31, null, 92, 93, 11, 50],
                'Accent Microcell': [115, 42, 28, 60, 33, 46],
                'Sequent Scientific': [28, 142, 51, 89, 49, 61],
                'Sudeep Pharma': [-4, 53, 36, 26, 31, 30],
                'Q-Line Biotech': [null, 74, -63, -1, 16, 7],
                'Hester Biosciences': [15, 47, 89, 105, 74, 67],
                'Zota Health Care': [87, -29, -75, null, null, null],
                'Sigachi Industries': [11, 49, 17, 27, -80, 9],
            },
            cellNotes: {
                'Zota Health Care': 'Operating cash has been negative for four years as it opened stores; FY25 operating profit was negative and FY26’s tiny.',
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
            note: 'Advanced Enzyme has produced free cash of 14–19% of sales every year; Jeena Sikho’s turned strongly positive in FY26. Zota burnt cash equal to over a third of sales as it expanded.',
            values: {
                'Jeena Sikho Lifecare': [-4.1, -10.7, null, 9.0, 27.5, 14.4],
                'Advanced Enzyme': [17.8, 18.9, 15.1, 16.8, 14.1, 16.3],
                'Hexagon Nutrition': [10.3, -2.1, 2.7, 8.9, -0.4, 3.5],
                'Accent Microcell': [6.6, 2.0, -0.8, -4.5, -19.8, -5.6],
                'Sequent Scientific': [-0.1, -4.9, 0.0, 7.9, 5.5, 3.3],
                'Sudeep Pharma': [-22.4, 0.2, 3.1, -3.0, -7.5, -5.3],
                'Q-Line Biotech': [null, -2.5, -35.9, -18.2, -5.8, -14.8],
                'Hester Biosciences': [-36.9, -20.2, 7.7, 14.3, 13.9, -1.8],
                'Zota Health Care': [7.6, -10.1, -12.8, -32.9, -38.7, -25.9],
                'Sigachi Industries': [-7.2, -23.8, -18.0, -3.3, -18.4, -13.9],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Sudeep, Jeena Sikho, Zota, Advanced Enzyme, Accent Microcell and Hexagon.',
            note: 'Below zero means more cash than debt. Advanced Enzyme holds ₹668cr of net cash; Sigachi’s debt rose to 2.5x as profit fell.',
            values: {
                'Jeena Sikho Lifecare': [0.2, -0.8, null, 0.6, -0.3],
                'Advanced Enzyme': [-1.7, -2.8, -2.3, -2.8, -2.9],
                'Hexagon Nutrition': [-0.6, -0.3, 0.2, -0.6, -0.4],
                'Accent Microcell': [1.6, 1.1, -1.5, -1.2, -0.3],
                'Sequent Scientific': [2.8, 33.5, 6.9, 1.3, 0.3],
                'Sudeep Pharma': [0.9, 0.8, 0.3, 0.5, 0.2],
                'Q-Line Biotech': [null, -0.5, 1.8, 1.6, 1.5],
                'Hester Biosciences': [3.4, 5.1, 4.2, 3.3, 2.2],
                'Zota Health Care': [-1.3, 5.1, 11.1, null, -4.7],
                'Sigachi Industries': [-0.6, 0.6, 1.2, 0.7, 2.5],
            },
            cellNotes: {
                'Sequent Scientific': 'FY23 operating profit was almost nil, so the ratio spiked.',
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
            note: 'Accent Microcell spent a quarter of its sales on new plant in FY26; Zota nearly as much on new stores; Sudeep 18% in FY26.',
            values: {
                'Jeena Sikho Lifecare': [15.0, 18.0, null, 9.0, 4.2, 8.3],
                'Advanced Enzyme': [5.3, 7.0, 7.5, 5.5, 7.0, 6.5],
                'Hexagon Nutrition': [3.5, 6.1, 5.0, 2.8, 1.9, 3.7],
                'Accent Microcell': [2.4, 2.0, 5.3, 14.0, 25.2, 11.9],
                'Sequent Scientific': [2.3, 6.1, 2.3, 3.6, 3.9, 3.7],
                'Sudeep Pharma': [21.6, 11.0, 11.3, 12.7, 18.4, 14.9],
                'Q-Line Biotech': [null, 16.2, 24.1, 17.9, 10.5, 16.4],
                'Hester Biosciences': [40.7, 29.2, 8.0, 6.6, 5.4, 16.3],
                'Zota Health Care': [2.3, 8.6, 9.4, 15.8, 23.4, 15.9],
                'Sigachi Industries': [9.6, 33.4, 21.3, 8.8, 9.4, 15.5],
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
            note: 'Hexagon and Accent earn ₹6–7 of sales per ₹1 of plant; Advanced Enzyme and Hester about ₹1, because fermentation and vaccine plants are expensive.',
            values: {
                'Jeena Sikho Lifecare': [5.1, 3.4, null, 1.9, 2.7],
                'Advanced Enzyme': [0.9, 0.8, 1.0, 0.9, 1.1],
                'Hexagon Nutrition': [4.1, 4.9, 4.6, 5.1, 5.9],
                'Accent Microcell': [5.5, 6.4, 8.5, 5.5, 6.6],
                'Sequent Scientific': [2.5, 2.3, 2.3, 1.4, 1.6],
                'Sudeep Pharma': [2.5, 2.7, 2.5, 2.7, 1.9],
                'Q-Line Biotech': [null, 8.0, 3.4, 3.4, 2.4],
                'Hester Biosciences': [1.0, 1.0, 1.3, 1.3, 0.8],
                'Zota Health Care': [4.5, 2.2, 1.7, 1.6, 1.5],
                'Sigachi Industries': [4.7, 2.5, 1.6, 1.3, 1.5],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'approval', label: 'Approvals and switching cost', description: 'Once an ingredient is approved in a customer’s product, changing supplier means new filings.' },
            { key: 'tech', label: 'Know-how', description: 'Fermentation, vaccines, specialty chemistry or a care model that is hard to copy.' },
            { key: 'reach', label: 'Brand and reach', description: 'A name patients or buyers know; clinics, stores or export customers.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether input-cost increases were passed on this year.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, debt, safety and reporting.' },
        ],
        rows: [
            { company: 'Jeena Sikho Lifecare', trend: 'widening', trendNote: '2,400 beds at 59% use, heading to 3,000–3,500 by end-FY27; margin above 40%.',
                grades: { approval: { grade: 'C', note: 'Patients choose freely' }, tech: { grade: 'B', note: 'An organised Ayurvedic care model' }, reach: { grade: 'A', note: 'Largest organised Ayurvedic chain' }, pass: { grade: 'A', note: 'Margins about 40%' }, cash: { grade: 'B', note: 'Net cash; 66% cash conversion' } } },
            { company: 'Advanced Enzyme', trend: 'stable', trendNote: 'Margin dipped to 27% in Q1; guides back to about 30% and double-digit growth.',
                grades: { approval: { grade: 'A', note: 'Enzymes built into customers’ products' }, tech: { grade: 'A', note: 'Fermentation know-how' }, reach: { grade: 'B', note: 'India, US and Europe' }, pass: { grade: 'B', note: 'Margins 27–32%' }, cash: { grade: 'A', note: '₹668cr net cash; buyback' } } },
            { company: 'Hexagon Nutrition', trend: 'stable', trendNote: 'Revenue up 43% in Q1; plants about 30% used; 57% exported.',
                grades: { approval: { grade: 'B', note: 'Approved supplier to food and pharma makers' }, tech: { grade: 'B', note: 'Premix formulation' }, reach: { grade: 'B', note: 'Exports 57%' }, pass: { grade: 'B', note: 'Margins 11–15%' }, cash: { grade: 'B', note: 'Net cash; 50% cash conversion' } } },
            { company: 'Accent Microcell', trend: 'widening', trendNote: 'Sells 15,000 tonnes against 9,200 of its own capacity; a new plant is starting.',
                grades: { approval: { grade: 'A', note: 'Excipients filed in customers’ drugs' }, tech: { grade: 'B', note: 'Cellulose binders' }, reach: { grade: 'B', note: 'Export customers' }, pass: { grade: 'B', note: 'Margins 16–17%' }, cash: { grade: 'C', note: 'Plant delay disclosed late' } } },
            { company: 'Sequent Scientific', trend: 'widening', trendNote: 'Merger with Viyash complete; guides about ₹4,000cr revenue in FY27 and $1bn by FY32.',
                grades: { approval: { grade: 'A', note: 'Regulated animal-health and human APIs' }, tech: { grade: 'B', note: 'Chemistry across many molecules' }, reach: { grade: 'B', note: 'Global animal-health customers' }, pass: { grade: 'B', note: 'Margin 19–21%' }, cash: { grade: 'B', note: 'Net debt ₹86cr; share options cost ₹40cr' } } },
            { company: 'Sudeep Pharma', trend: 'widening', trendNote: 'Passed on a 50% rise in phosphoric acid; battery-material plant due April 2027.',
                grades: { approval: { grade: 'A', note: 'Mineral excipients built into formulations' }, tech: { grade: 'B', note: 'Specialist mineral chemistry' }, reach: { grade: 'B', note: 'Global pharma and food buyers' }, pass: { grade: 'A', note: 'Margins steady near 35%' }, cash: { grade: 'C', note: 'Cash conversion 30%; stock doubled' } } },
            { company: 'Q-Line Biotech', trend: 'stable', trendNote: 'Guides 30–35% growth; only 400–500 of 1,550 machines order its reagents.',
                grades: { approval: { grade: 'B', note: 'Diagnostics approvals' }, tech: { grade: 'C', note: 'Moving from importing to making' }, reach: { grade: 'C', note: '65% government sales' }, pass: { grade: 'B', note: 'Margin about 30%' }, cash: { grade: 'D', note: 'Cash conversion 7%; related-party distributor' } } },
            { company: 'Hester Biosciences', trend: 'stable', trendNote: 'Poultry vaccines up 48%; no guidance; Q1 profit lifted by a forgiven loan.',
                grades: { approval: { grade: 'A', note: 'Vaccine licences' }, tech: { grade: 'A', note: 'Vaccine manufacturing' }, reach: { grade: 'B', note: 'India and Africa' }, pass: { grade: 'B', note: 'Standalone gross margin 78%' }, cash: { grade: 'B', note: 'Borrowings falling' } } },
            { company: 'Zota Health Care', trend: 'stable', trendNote: '2,825 Davaindia stores and 600–650 more this year; still losing money.',
                grades: { approval: { grade: 'D', note: 'Customers can buy anywhere' }, tech: { grade: 'C', note: 'Own-label generics' }, reach: { grade: 'A', note: 'Largest private generic pharmacy chain' }, pass: { grade: 'B', note: 'Gross margin about 62%' }, cash: { grade: 'D', note: 'Net loss about ₹104cr in a year' } } },
            { company: 'Sigachi Industries', trend: 'narrowing', trendNote: 'Capacity lost in the plant disaster; new plant slipped to Q2 FY28.',
                grades: { approval: { grade: 'A', note: 'Excipients filed in customers’ drugs' }, tech: { grade: 'B', note: 'Cellulose binders' }, reach: { grade: 'B', note: 'Largely exported' }, pass: { grade: 'C', note: 'Margins 5–19%' }, cash: { grade: 'D', note: 'Fatal accident; promoter stake down to 37%' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Jeena Sikho and Advanced Enzyme.** Jeena Sikho is India's largest organised Ayurvedic hospital chain, earning about 40% margins and 64% on its capital, with 2,400 beds at 59% use and a plan for 3,000–3,500 by the end of FY27; its free cash turned strongly positive in FY26. Advanced Enzyme makes enzymes and probiotics that are built into customers' products, holds ₹668cr of net cash and has produced free cash of 14–19% of sales every year. Both prices ask for about the growth I expect or less.",
                "**Follow Hexagon, Accent Microcell and Sequent.** Hexagon (nutrient premixes, 57% exported) and Accent (tablet binders, selling more than it can make) are good small businesses at slightly full prices. Sequent has finished merging with Viyash and guides about ₹4,000cr of revenue this year and $1bn by FY32, but the price already assumes much of that.",
                "**Wait on Sudeep, Q-Line, Hester and Zota; pass on Sigachi.** Sudeep earns 35% margins but has turned only 30% of its profit into cash, and its price needs far more growth than I expect. Q-Line converts almost none of its profit into cash. Hester has no guidance. Zota's Davaindia chain is growing fast but lost about ₹104cr in a year. Sigachi is still recovering from a fatal plant disaster, its margin has collapsed and its guidance looks out of reach.",
                "**Two things to hold onto before reading the rest.** First, **approved ingredients are sticky**: once an excipient or enzyme is in a customer's approved product, switching supplier means new filings, which protects Sudeep, Accent, Advanced Enzyme and Sigachi. Second, **cash is the weak spot**: half this group has turned less than half of its profit into cash over five years.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Accent Microcell standalone, the others consolidated). Accent and Q-Line report half-yearly, and several companies listed recently, so some cells are blank. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "A catch-all group with three distinct businesses: supplying ingredients to drug and food makers, animal health and diagnostics, and care delivered straight to patients.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Minerals, wood pulp, sugars and chemicals → **ingredient makers** (Sudeep, Accent, Sigachi, Advanced Enzyme, Hexagon) → drug, food and supplement makers → patients. Separately, **animal-health and diagnostics makers** (Sequent, Hester, Q-Line) sell to farmers, vets and labs, and **care providers** (Jeena Sikho, Zota) sell to patients directly. **The profit sits with ingredients that are written into customers' approved products** and with care providers that patients trust.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India's generic drug makers and exports (excipients grow with tablet volumes); nutrition and supplement demand; more poultry and livestock needing vaccines; hospitals and labs buying Indian-made diagnostics; patients looking for cheaper generic medicines (the government's Jan Aushadhi scheme alone has over 19,000 stores) and for Ayurvedic treatment of chronic disease.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Mostly steady demand, with company-specific shocks.** Input prices matter for the ingredient makers (Sudeep passed on a 50% rise in phosphoric acid); government tenders matter for Q-Line and Hester; drug-price and retail rules matter for Zota. Sigachi's plant disaster shows how a single event can change a small company's path.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Jeena Sikho** on filling new beds; **Advanced Enzyme** on growing outside India; **Hexagon** on exports and filling its plants; **Accent** on its new plant; **Sequent** on the merged business growing as planned; **Sudeep** on its battery-materials project; **Q-Line** on machines ordering reagents; **Hester** on poultry demand and Africa; **Zota** on stores breaking even; **Sigachi** on rebuilding capacity. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Ingredients for drug and food makers', 'Sudeep, Accent, Sigachi, Advanced Enzyme, Hexagon', '5–35%', '6–28%', '**9–71%**'],
                        ['Animal health and diagnostics', 'Sequent, Hester, Q-Line', '15–34%', '13–22%', '**7–67%**'],
                        ['Care for patients', 'Jeena Sikho, Zota', '−7% to 48%', '−8% to 64%', '**66%** (Jeena Sikho; Zota not meaningful)'],
                    ],
                },
                {
                    caption: 'Capacity and how full it is (company calls, Q1 FY27)',
                    columns: ['Company', 'Capacity today', 'How full', 'What is being added'],
                    rows: [
                        ['Jeena Sikho Lifecare', '2,400 beds', '59%', '3,000–3,500 beds by end-FY27; 7,000–10,000 in 3–5 years'],
                        ['Zota Health Care', '2,825 Davaindia stores (1,855 company-run)', 'Stores still maturing', '600–650 stores in FY27'],
                        ['Accent Microcell', '9,200 tonnes of cellulose', 'Sells about 15,000 tonnes (the rest traded)', 'New plant in two phases through March 2027'],
                        ['Sigachi Industries', 'Lost 6,000 tonnes in the plant disaster', '—', '12,000 tonnes at Dahej, now Q2 FY28'],
                        ['Sudeep Pharma', 'Excipient and nutrition plants', 'Stock rising', 'Battery-materials plant, 25,000 tonnes from April 2027'],
                        ['Advanced Enzyme', 'Fermenters', '70–75%', '₹123cr of capex in FY27'],
                        ['Hexagon Nutrition', 'Premix plants', 'About 30%', 'Little needed'],
                        ['Hester Biosciences', 'Vaccine plants', '60–65%', 'Little needed'],
                        ['Q-Line Biotech', '1,550+ analysers installed', '400–500 ordering reagents', 'Own manufacturing'],
                    ],
                    note: 'Spare capacity (Hexagon, Hester) means growth without much new spending; full plants (Accent, Jeena Sikho) mean growth depends on new capacity arriving on time.',
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
                    label: 'Lasting: written into customers’ approvals',
                    text: "**Sudeep**, **Accent**, **Sigachi** and **Advanced Enzyme** supply ingredients listed in customers' drug and food filings; changing supplier takes months of testing and new paperwork. That is why Sudeep could pass on a 50% rise in phosphoric acid.",
                },
                {
                    label: 'Lasting but hard-won: biology',
                    text: "**Advanced Enzyme**'s fermentation and **Hester**'s vaccine plants take years to build and license; few Indian companies do either at scale.",
                },
                {
                    label: 'A brand with patients',
                    text: "**Jeena Sikho** is the best-known organised Ayurvedic chain; **Zota**'s Davaindia is the largest private generic pharmacy chain. Both depend on patient trust, which competitors and regulators can challenge.",
                },
                {
                    label: 'Weaker: tenders and imports',
                    text: "**Q-Line** sells 65% to government buyers and is still moving from importing to making; its machines earn only when labs order its reagents.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**DFE Pharma**, **JRS** and **DuPont** in excipients; **Novonesis** and **DSM-Firmenich** in enzymes and nutrients; **Zoetis** and **Indian Immunologicals** in animal health; **Jan Aushadhi**, **MedPlus** and **Apollo** in pharmacies; **Patanjali** in Ayurveda.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the approved-ingredient makers and Jeena Sikho, yes; for Zota and Sigachi, not yet or not any more.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specialist ingredients',
                    text: "**Sudeep** has held 34–35% for five quarters and targets 37–38%. **Advanced Enzyme** earns 27–32% and guides back to about 30% after a weak Q1.",
                },
                {
                    label: 'Structural: a care model patients pay for',
                    text: "**Jeena Sikho** earns about 40% and guides above 40%, having cut low-margin government business from ₹15cr to ₹5cr a quarter.",
                },
                {
                    label: 'Middling: animal health and nutrition',
                    text: "**Sequent** earns 19–21% and guides 20–22%; **Hester**'s swings between 17% and 34% with vaccine mix (its standalone gross margin rose from 69% to 78%); **Hexagon** 11–15%; **Accent** 16–17%, held down by ₹95cr of low-margin trading while its plant is full.",
                },
                {
                    label: 'Not structural: losses and disaster',
                    text: "**Zota**'s gross margin is about 62%, but store costs and ₹40–45cr of marketing leave it at an operating loss in Q1 and a net loss of about ₹104cr in a year; it promises cash breakeven by Q4 FY27 or Q1 FY28. **Sigachi**'s margin fell to 5–14% after its plant disaster; it guides 18% for the year.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Sudeep**'s cycle more than doubled to 372 days as stock built up; **Q-Line**'s reached 251 days; **Advanced Enzyme** and **Hester** carry 250–400 days of long-cycle stock.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Jeena Sikho** collects quickly (20 days in FY26) and turned 72% of its profit into cash last year.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Fermentation, vaccines and multi-step chemistry take months, so long cycles are normal for those makers. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Advanced Enzyme', 'Capex ₹123cr in FY27; buyback of up to ₹69.7cr', 'Net cash ₹668cr'],
                        ['Sequent Scientific', 'Capex ₹250–300cr a year; buying Bioforlife in Italy', 'Net debt ₹86cr (company figure)'],
                        ['Sudeep Pharma', 'First battery-materials plant (25,000 tonnes) due April 2027; working capital target about 170 days', 'Net debt ₹35cr'],
                        ['Zota Health Care', '₹30cr cash loss in Q1; cash breakeven by Q4 FY27 or Q1 FY28', 'Net cash ₹90cr at March'],
                        ['Sigachi Industries', 'Capex over ₹100cr in FY27 and ₹150–200cr in FY28, possibly through new shares; insurance payout expected by September', 'Net debt ₹136cr'],
                        ['Accent Microcell', 'Receivables about ₹90cr; new plant phase 1 in FY27', 'Net cash ₹19cr'],
                        ['Hester Biosciences', 'Debt ₹103cr after a donor cut its African unit’s loan', 'Net debt ₹188cr at March (Screener)'],
                        ['Jeena Sikho, Hexagon, Q-Line', 'No Q1 cash figure given', '—'],
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
                    label: 'Growth driver: new beds and stores',
                    text: "**Jeena Sikho** aims for 7,000–10,000 beds and ₹3,000cr of revenue in three to five years. **Zota** plans 600–650 new Davaindia stores this year on top of 2,825.",
                },
                {
                    label: 'Growth driver: more ingredient capacity',
                    text: "**Accent** sells about 15,000 tonnes against 9,200 of its own capacity and is opening a new plant in phases. **Sigachi** plans 12,000 more tonnes at Dahej, now due in Q2 FY28. **Hexagon**'s plants are only about 30% used, so it can grow without much capex.",
                },
                {
                    label: 'Growth driver: new markets',
                    text: "**Sudeep**'s battery-materials plant (25,000 tonnes, scaling to 100,000 or more) has eight customers qualified. **Sequent** targets $1bn of revenue by FY32 and is buying Bioforlife in Italy. **Q-Line** guides 30–35% growth.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Jeena Sikho** delivered 41% margins in line with guidance; **Sequent** completed its merger and raised its long-term target; **Sudeep** passed on a big input-cost rise.",
                },
                {
                    label: 'Cautious',
                    text: "**Hester** gives no guidance and works quarter to quarter; **Advanced Enzyme**'s US business grows only 8–10%.",
                },
                {
                    label: 'Missed or behind',
                    text: "**Sigachi** needs ₹175–185cr of revenue a quarter to meet its guidance against ₹121cr in Q1, and its new plant slipped. **Accent**'s plant delay was reported months after investors say it was known.",
                },
                {
                    label: 'Mixed',
                    text: "**Zota** is opening stores on plan but its losses widened. **Q-Line** has installed over 1,550 analysers, but only 400–500 order its reagents.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Jeena Sikho to compound earnings at about 25%, Sudeep at about 22%, Sequent at about 20%, Accent at about 18%, Q-Line at about 15%, Advanced Enzyme, Hexagon and Hester at about 12%, and Sigachi at about 10% as it rebuilds.** Zota's losses make an estimate meaningless for now.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Jeena Sikho Lifecare', 'New beds; margins held', '15% / **25%** / 32%'],
                        ['Sudeep Pharma', 'Battery materials; excipients', '10% / **22%** / 30%'],
                        ['Sequent Scientific', 'Merged business; $1bn target', '12% / **20%** / 25%'],
                        ['Accent Microcell', 'New plant; less trading', '10% / **18%** / 25%'],
                        ['Q-Line Biotech', 'Reagent sales on installed machines', '5% / **15%** / 25%'],
                        ['Advanced Enzyme', 'Exports; capacity; buyback', '8% / **12%** / 16%'],
                        ['Hexagon Nutrition', 'Exports; spare capacity', '6% / **12%** / 18%'],
                        ['Hester Biosciences', 'Poultry vaccines; Africa', '5% / **12%** / 18%'],
                        ['Sigachi Industries', 'Rebuilding capacity', '0% / **10%** / 20%'],
                        ['Zota Health Care', 'Stores reaching breakeven', 'Loss-making; too early to estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Jeena Sikho Lifecare', '₹3,000cr revenue in 3–5 years; margin above 40%', 'New hospitals', '**Delivered**: Q1 margin 41%'],
                        ['Advanced Enzyme', 'Double-digit growth; margin about 30%', '₹123cr in FY27', '**Mixed**: Q1 margin 27%'],
                        ['Hexagon Nutrition', 'Keep the recent pace; revenue to roughly double in 4–5 years', 'Small', '**On track**: Q1 +43%'],
                        ['Accent Microcell', 'New plant phase 1 in FY27, phase 2 around March 2027', 'New plant', '**Delayed**, disclosed late'],
                        ['Sequent Scientific', 'About ₹4,000cr in FY27; margin 20–22%; $1bn by FY32', '₹250–300cr a year', '**On track**'],
                        ['Sudeep Pharma', 'Margin 37–38%; battery plant April 2027', 'Battery-materials plant', '**On track**'],
                        ['Q-Line Biotech', 'Growth 30–35%', 'Manufacturing', '**Mixed**: weak cash'],
                        ['Hester Biosciences', 'None', 'Small', '**No guidance**'],
                        ['Zota Health Care', '600–650 stores; cash breakeven by Q4 FY27 or Q1 FY28', 'New stores', '**Behind** on profit'],
                        ['Sigachi Industries', '₹650–675cr revenue; 18% margin', 'Over ₹100cr in FY27', '**Behind**: Q1 ₹121cr'],
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
                    label: 'Safety and plant risk',
                    text: "**Sigachi**'s Hyderabad plant disaster killed workers, destroyed 6,000 tonnes of capacity and is in court over compensation; its insurance payout is expected at a discount. Every chemical and fermentation plant here carries some of this risk.",
                },
                {
                    label: 'Cash that does not arrive',
                    text: "**Q-Line** (7%), **Sigachi** (9%) and **Sudeep** (30%) have converted little of five years' profit into cash; **Zota** burns cash opening stores.",
                },
                {
                    label: 'New businesses',
                    text: "**Sudeep**'s battery-materials project, **Sequent**'s integration and Italian acquisition, and **Zota**'s store roll-out all need to work for today's prices to make sense.",
                },
                {
                    label: 'Regulation and trust',
                    text: "Ayurvedic treatment claims (**Jeena Sikho**) and generic-medicine retail (**Zota**) are closely watched by regulators; a change in rules on advertising or pharmacy ownership would hit them directly.",
                },
                {
                    label: 'Governance',
                    text: "**Sigachi**'s promoters let a warrant issue lapse and their stake fell from 48% to 37%; results came out minutes before its call. **Q-Line** uses a related-party distributor and is closing old guarantees to related parties. **Accent** disclosed a plant delay months late. **Jeena Sikho** has a new auditor.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **14% at 21x, 17% at 28–29x, 20% at 36–37x, 24% at 51x, 25% at 53x and 29% at 74x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Advanced Enzyme**'s ₹668cr of net cash is a fifth of its market value, so it is cheaper than its P/E suggests. **Sequent**'s EV/EBITDA is far below its P/E because depreciation, interest and minority shareholders take a large slice of its operating profit.",
                },
                {
                    label: 'Reasonable',
                    text: "**Jeena Sikho**, **Advanced Enzyme** and **Hexagon**: prices that ask for about the growth I expect or less.",
                },
                {
                    label: 'Full',
                    text: "**Accent**, **Sequent** and **Q-Line**: each needs a few points more than my estimate.",
                },
                {
                    label: 'Stretched',
                    text: "**Sudeep**, **Hester** and **Sigachi**: each needs growth well above my estimate. Sudeep is a good business priced for its battery project succeeding.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Zota** loses money after tax (the dashboard's P/E for it is wrong), so it is shown as loss-making.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Jeena Sikho Lifecare', rank: 1, stance: 'SCALEUP', segment: CARE,
            what: "Runs India's largest organised chain of Ayurvedic hospitals and clinics, treating liver, kidney and lifestyle diseases.",
            view: "**High returns, fast growth, cash arriving.** Margins about 40%, return on capital 64%, beds heading from 2,400 to 3,000–3,500, and free cash of 27% of sales in FY26. The price asks for less than my ~25% estimate.",
            watch: 'Bed occupancy as new hospitals open; margin above 40%; regulation of treatment claims.',
        },
        {
            company: 'Advanced Enzyme', rank: 2, stance: 'HARVEST', segment: INGREDIENTS,
            what: "Makes enzymes and probiotics for pharma, food, animal feed and industrial customers in India, the US and Europe.",
            view: "**Cash-rich and steady.** ₹668cr of net cash, a buyback, free cash of 14–19% of sales every year and margins of 27–32%, but growth is uneven and US growth slow. The price asks for about my ~12% estimate.",
            watch: 'Margin back near 30%; US growth; use of cash.',
        },
        {
            company: 'Hexagon Nutrition', rank: 3, stance: 'SCALEUP', segment: INGREDIENTS,
            what: "Makes vitamin and mineral premixes, therapeutic foods and nutrition products for food, pharma and institutional buyers; 57% exported; listed in FY26.",
            view: "**Spare capacity and net cash.** Revenue up 43% in Q1 with plants about 30% used, so growth needs little capex; margins are modest at 11–15%. The price asks for about my ~12% estimate.",
            watch: 'Export growth; receivables; branded products.',
        },
        {
            company: 'Accent Microcell', rank: 4, stance: 'SCALEUP', segment: INGREDIENTS,
            what: "Makes microcrystalline cellulose and other excipients that bind and fill tablets, for drug and supplement makers; SME-listed.",
            view: "**More demand than capacity.** Sells about 15,000 tonnes against 9,200 of its own and is opening a new plant, with returns near 25%; the plant delay was disclosed late. The price needs a little more than my ~18% estimate.",
            watch: 'New plant output; less low-margin trading; disclosure.',
        },
        {
            company: 'Sequent Scientific', rank: 5, stance: 'SCALEUP', segment: ANIMAL,
            what: "Sequent Scientific (now Viyash Scientific): animal-health medicines and ingredients plus human drug ingredients, after merging with Viyash Life Sciences.",
            view: "**A merger done, ambitions high.** Guides about ₹4,000cr of revenue this year, 20–22% margins and $1bn by FY32, with low debt. The price needs a few points more than my ~20% estimate.",
            watch: 'Margin 20–22%; the Italian acquisition; share-option costs.',
        },
        {
            company: 'Sudeep Pharma', rank: 6, stance: 'PRICED', segment: INGREDIENTS,
            what: "Makes mineral-based excipients and nutrition ingredients for drug and food makers, and is building a battery-materials business.",
            view: "**A strong niche, priced for a new one.** Margins near 35% and costs passed on, but only 30% of profit turned into cash and stock has doubled. The price needs far more than my ~22% estimate.",
            watch: 'Battery plant in April 2027; working capital toward 170 days; customer contracts.',
        },
        {
            company: 'Q-Line Biotech', rank: 7, stance: 'SCALEUP', segment: ANIMAL,
            what: "Makes blood-test analysers and the reagents they use, moving from importing to making; 65% of sales to government; SME-listed.",
            view: "**Growth without cash.** Guides 30–35% growth, but only 400–500 of its 1,550 machines order reagents, cash conversion is 7% and it uses a related-party distributor. The price needs a little more than my ~15% estimate.",
            watch: 'Reagent orders; cash collection; related-party dealings.',
        },
        {
            company: 'Hester Biosciences', rank: 8, stance: 'CYCLICAL', segment: ANIMAL,
            what: "One of India's leading poultry vaccine makers, with animal-health products and operations in Africa.",
            view: "**Good vaccines, no guidance.** Poultry up 48% and gross margin up, but Q1 profit was lifted by a forgiven loan and management gives no direction. The price needs far more than my ~12% estimate.",
            watch: 'Poultry demand; Africa; underlying profit.',
        },
        {
            company: 'Zota Health Care', rank: 9, stance: 'TURNAROUND', segment: CARE,
            what: "Runs Davaindia, India's largest private chain of generic pharmacies selling its own low-priced medicines (2,825 stores).",
            view: "**Fast expansion, deep losses.** About 62% gross margin, but a net loss of about ₹104cr in a year and ₹40–45cr of marketing planned; it promises cash breakeven by Q4 FY27 or Q1 FY28. No earnings to value.",
            watch: 'Store-level breakeven; cash burn; the breakeven promise.',
        },
        {
            company: 'Sigachi Industries', rank: 10, stance: 'TURNAROUND', segment: INGREDIENTS,
            what: "Makes microcrystalline cellulose excipients, mostly for export, plus some drug ingredients; recovering from a fatal disaster at its Hyderabad plant.",
            view: "**A damaged business.** Margins of 5–14%, return on capital 6%, new capacity delayed to Q2 FY28, guidance that needs a 50% jump in quarterly sales, and weak governance. The price needs far more than my ~10% estimate.",
            watch: 'Quarterly revenue against guidance; insurance payout; new plant.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Ingredients for drug and food makers.** **Advanced Enzyme: own.** **Hexagon Nutrition: follow.** **Accent Microcell: follow** its new plant. **Sudeep Pharma: wait** for a better price and better cash. **Sigachi Industries: pass.**",
            "**Animal health and diagnostics.** **Sequent Scientific: follow** the merged business. **Q-Line Biotech: wait** for cash. **Hester Biosciences: wait** for guidance.",
            "**Care for patients.** **Jeena Sikho Lifecare: own.** **Zota Health Care: wait** for its stores to break even.",
            "**What would change my view.** For the better: Sudeep converting profit to cash; Zota reaching cash breakeven on time. For the worse: regulatory action on Ayurvedic claims or generic retail; another plant accident.",
            "**What to watch next quarter.** Jeena Sikho's occupancy; Advanced Enzyme's margin; Accent's plant; Sequent's margin; Zota's cash burn; Sigachi's revenue.",
        ],
        bottomLine:
            "Own the cash-generating leaders (Jeena Sikho Lifecare, Advanced Enzyme), follow the growers at full prices (Hexagon Nutrition, Accent Microcell, Sequent Scientific), wait on those that need cash, guidance or a better price (Sudeep Pharma, Q-Line Biotech, Hester Biosciences, Zota Health Care), and pass on Sigachi Industries.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/JSLL/consolidated/' },
        { label: 'India microcrystalline cellulose market size and share — IMARC', url: 'https://www.imarcgroup.com/india-microcrystalline-cellulose-market' },
        { label: 'Jan Aushadhi: disruptor and industry catalyst in domestic pharma — The Financial World', url: 'https://www.thefinancialworld.com/jan-aushadhi-disruptor-and-industry-catalyst-in-domestic-pharma/' },
        { label: 'Zota Health Care opens 264 new Davaindia stores in Q1 FY27 — Sahi', url: 'https://www.sahi.com/news/zota-health-care-opens-264-new-davaindia-stores-in-q1fy27-reaching-2-825-total-outlets-4554-PE1_COR' },
        { label: 'Wholesale price index, acetic acid — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
