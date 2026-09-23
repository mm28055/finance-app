import { SectorOverview } from './types';
import { forgingBusinesses } from './forging-businesses';
import { forgingValuationInputs } from './card-data/forging';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const SPECIAL = 'Specialists — wear parts and steel castings for mines, machines and railways';
const AUTO = 'Truck and tractor parts — forgings and iron castings';
const WIND = 'Wind turbine castings';

export const forging: SectorOverview = {
    sector: 'Forging',
    title: 'Forging',
    format: 'ranked',
    businesses: forgingBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: forgingValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Steelcast': 20,
            'AIA Engineering': 10,
            'Happy Forgings': 20,
            'Neetu Yoshi': 30,
            'MM Forgings': 15,
            'Nelcast': 12,
            'Synergy Green': null,
        },
    },
    standfirst:
        "Seven companies that shape metal into parts that must not break. Happy Forgings and MM Forgings forge crankshafts and axle parts for trucks, tractors and machines. Five cast metal instead: AIA Engineering makes high-chrome grinding balls and mill liners for mines and cement plants worldwide; Steelcast makes steel castings for mining and earthmoving machines; Neetu Yoshi makes railway safety castings; Nelcast makes iron castings for trucks and tractors; and Synergy Green makes heavy iron castings for wind turbines. Neetu Yoshi is SME-listed and reports half-yearly. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): AIA Engineering, Happy Forgings and MM Forgings consolidated, the others standalone. Neetu Yoshi reports half-yearly, so its figures sit in the Q2 and Q4 columns. Operating profit ÷ sales.',
            note: 'Three groups: 26–31% for the specialists (AIA, Happy Forgings, Steelcast, Neetu Yoshi), 17–19% for MM Forgings, and 5–13% for the iron foundries (Nelcast, Synergy Green).',
            values: {
                'Steelcast': [25, 28, 29, 26, 26],
                'AIA Engineering': [29, 28, 27, 29, 26],
                'Happy Forgings': [29, 31, 31, 31, 31],
                'Neetu Yoshi': [null, 32, null, 31, null],
                'MM Forgings': [17, 17, 17, 19, 18],
                'Nelcast': [9, 6, 10, 9, 5],
                'Synergy Green': [13, 12, 9, 8, 7],
            },
            cellNotes: {
                'Steelcast': 'The company reports 28.2% for Q1 FY27 on its own definition; Screener’s figure excludes other income.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Happy Forgings and MM Forgings grew 16–27% in the last two quarters. AIA’s sales have barely grown for years.',
            values: {
                'Steelcast': [39, 43, -5, -7, 17],
                'AIA Engineering': [2, 0, 0, 9, 12],
                'Happy Forgings': [4, 4, 10, 20, 27],
                'Neetu Yoshi': [null, 26, null, 54, null],
                'MM Forgings': [-5, -3, 11, 16, 16],
                'Nelcast': [11, -10, 13, 12, 3],
                'Synergy Green': [6, -19, -5, 23, -11],
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
            note: 'Steelcast has earned 32–42% for four years. MM Forgings’ return has fallen to 9% as it borrowed to build.',
            values: {
                'Steelcast': [25, 42, 40, 33, 32],
                'AIA Engineering': [17, 25, 23, 19, 21],
                'Happy Forgings': [22, 26, 23, 19, 18],
                'Neetu Yoshi': [null, null, 64, 46, 32],
                'MM Forgings': [14, 15, 15, 12, 9],
                'Nelcast': [7, 10, 10, 10, 11],
                'Synergy Green': [13, 12, 24, 21, 9],
            },
            cellNotes: {
                'AIA Engineering': 'Held down by about ₹4,500cr of cash and investments.',
                'Neetu Yoshi': 'Earlier years not filed.',
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
            note: 'AIA ships to mines all over the world and keeps large stocks near them, so its cycle is 230–340 days. The iron foundries are paid faster by truck makers.',
            values: {
                'Steelcast': [230, 78, 111, 153, 158],
                'AIA Engineering': [337, 233, 247, 243, 320],
                'Happy Forgings': [226, 175, 199, 226, 193],
                'Neetu Yoshi': [null, 76, 119, 142, 152],
                'MM Forgings': [118, 123, 158, 178, 165],
                'Nelcast': [77, 60, 69, 54, 51],
                'Synergy Green': [29, 61, 45, 41, 43],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Most of the group converts 60–70%; Neetu Yoshi only 31%, as money owed by customers rose to 118 days of sales in FY26.',
            values: {
                'Steelcast': [0, 94, 70, 73, 75, 68],
                'AIA Engineering': [-6, 70, 67, 101, 47, 61],
                'Happy Forgings': [35, 61, 49, 72, 94, 66],
                'Neetu Yoshi': [null, -200, 47, 52, 13, 31],
                'MM Forgings': [72, 59, 51, 61, 81, 64],
                'Nelcast': [-22, 100, 22, 118, 83, 66],
                'Synergy Green': [117, 100, 97, -31, 49, 53],
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
            note: 'AIA and Steelcast produce steady free cash. Happy Forgings spends all its cash on new presses; Synergy Green and Neetu Yoshi have spent far more than they earned.',
            values: {
                'Steelcast': [-10.9, 12.6, 15.6, 15.0, 12.5, 10.1],
                'AIA Engineering': [-4.6, 13.7, 14.3, 23.9, 11.0, 12.3],
                'Happy Forgings': [-12.9, 2.8, -0.4, 0.8, -1.0, -1.4],
                'Neetu Yoshi': [null, -56.2, -14.9, -4.3, -50.0, -29.4],
                'MM Forgings': [3.2, -2.8, -6.7, -14.5, 2.4, -4.0],
                'Nelcast': [-5.9, 4.8, -0.1, 1.9, 5.6, 1.7],
                'Synergy Green': [0.7, 5.5, 5.8, -28.5, -32.8, -11.4],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for AIA, Happy Forgings, Steelcast and Neetu Yoshi.',
            note: 'Below zero means more cash than debt. MM Forgings and Synergy Green have borrowed heavily to expand.',
            values: {
                'Steelcast': [1.0, 0.1, -0.3, -0.4, -0.8],
                'AIA Engineering': [-2.1, -2.1, -2.3, -3.4, -3.6],
                'Happy Forgings': [1.0, 0.6, 0.1, 0.0, 0.1],
                'Neetu Yoshi': [null, 7.0, 0.9, 0.5, -0.3],
                'MM Forgings': [2.2, 2.0, 2.5, 3.3, 3.6],
                'Nelcast': [3.7, 2.5, 2.7, 2.4, 1.5],
                'Synergy Green': [3.3, 3.0, 1.8, 1.9, 6.1],
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
            note: 'Happy Forgings spends about a fifth of sales a year on new presses and machining; Neetu Yoshi and Synergy Green have spent 40–50% in single years on new plants.',
            values: {
                'Steelcast': [10.9, 9.9, 4.4, 5.1, 7.8, 7.6],
                'AIA Engineering': [3.5, 4.0, 4.3, 3.2, 2.4, 3.5],
                'Happy Forgings': [22.2, 14.6, 14.3, 19.9, 29.8, 20.4],
                'Neetu Yoshi': [null, 43.8, 31.9, 21.4, 54.1, 39.0],
                'MM Forgings': [9.9, 13.7, 16.3, 26.4, 11.9, 15.9],
                'Nelcast': [4.5, 1.5, 1.6, 6.5, 1.3, 3.0],
                'Synergy Green': [9.2, 3.4, 5.8, 24.0, 38.0, 17.3],
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
            note: 'Forging presses are expensive, so Happy Forgings and MM Forgings earn about ₹1.4 of sales per ₹1 of plant. Synergy Green’s ratio fell to 1.5 as its new plant came in.',
            values: {
                'Steelcast': [2.8, 3.4, 3.0, 2.6, 2.7],
                'AIA Engineering': [4.5, 4.9, 4.4, 3.6, 3.6],
                'Happy Forgings': [1.9, 1.8, 1.8, 1.6, 1.4],
                'Neetu Yoshi': [null, 4.0, 2.1, 2.2, 2.3],
                'MM Forgings': [1.6, 1.8, 1.7, 1.6, 1.4],
                'Nelcast': [2.1, 2.9, 3.0, 2.6, 2.9],
                'Synergy Green': [3.7, 4.2, 4.1, 3.6, 1.5],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Approvals and qualification', description: 'Customer and railway approvals that take a year or more to win for each part.' },
            { key: 'tech', label: 'Metallurgy and machining', description: 'How hard the part is to make: alloys, heavy presses, precision machining.' },
            { key: 'cust', label: 'Customer spread', description: 'Many customers, industries and countries rather than a few buyers.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether metal and energy costs were passed on this year.' },
            { key: 'cash', label: 'Cash and balance sheet', description: 'Whether profit turns into cash, and how much debt is carried.' },
        ],
        rows: [
            { company: 'Steelcast', trend: 'widening', trendNote: 'Volume guidance raised to 25–30% for FY27; plant use up from 48% to 66%; a new foundry planned.',
                grades: { qual: { grade: 'A', note: 'Approved by global mining and earthmoving OEMs' }, tech: { grade: 'B', note: 'Alloy steel castings' }, cust: { grade: 'C', note: 'A few large machine makers' }, pass: { grade: 'A', note: 'Formula for all main materials; price rise from 1 July' }, cash: { grade: 'A', note: 'Debt-free; steady free cash' } } },
            { company: 'AIA Engineering', trend: 'stable', trendNote: 'Volumes stuck at 60,000–65,000 tonnes a quarter; a new Chile order helps; capex raised for a corporate house.',
                grades: { qual: { grade: 'A', note: 'Trials at mines take years' }, tech: { grade: 'A', note: 'One of very few high-chrome specialists' }, cust: { grade: 'A', note: 'Mines and cement plants worldwide' }, pass: { grade: 'A', note: 'Alloy and freight costs passed on' }, cash: { grade: 'A', note: '₹4,516cr net cash' } } },
            { company: 'Happy Forgings', trend: 'widening', trendNote: '₹950cr pipeline of new parts, 60% export; an 18,000-tonne upsetter from Q4 FY27.',
                grades: { qual: { grade: 'A', note: 'Approved for crankshafts and safety parts' }, tech: { grade: 'A', note: 'Heavy forging plus in-house machining' }, cust: { grade: 'B', note: 'Trucks, tractors, industry; exports growing' }, pass: { grade: 'B', note: 'Steel passed on; other costs negotiated' }, cash: { grade: 'C', note: 'Capex takes all its cash' } } },
            { company: 'Neetu Yoshi', trend: 'widening', trendNote: 'Revenue guided to double to ₹210–220cr in FY27 as its new bogie plant starts; 15–20 parts awaiting approval.',
                grades: { qual: { grade: 'A', note: 'Railway (RDSO) approvals for safety parts' }, tech: { grade: 'B', note: 'Manganese steel castings and fabrication' }, cust: { grade: 'C', note: 'Indian Railways and its wagon makers' }, pass: { grade: 'B', note: 'Price-variation clauses in tenders' }, cash: { grade: 'D', note: 'Five-year cash conversion 31%' } } },
            { company: 'MM Forgings', trend: 'stable', trendNote: 'Guides about 18% growth in FY27 and a 16,500-tonne press; debt still high.',
                grades: { qual: { grade: 'B', note: 'Approved truck supplier in India and abroad' }, tech: { grade: 'B', note: 'Two-thirds of sales machined' }, cust: { grade: 'C', note: 'Mostly trucks' }, pass: { grade: 'C', note: 'Q1 fuel and pay costs not recovered' }, cash: { grade: 'C', note: 'Net debt 3.6x operating profit' } } },
            { company: 'Nelcast', trend: 'stable', trendNote: 'New Pedapariya plant ran at 21%; operating profit ₹9.48 a kilogram against a ₹15 target.',
                grades: { qual: { grade: 'B', note: 'Approved by truck and tractor makers' }, tech: { grade: 'C', note: 'Iron castings, many rivals' }, cust: { grade: 'B', note: 'About a third exported' }, pass: { grade: 'B', note: 'Metal passed on with a quarter’s lag' }, cash: { grade: 'B', note: 'Modest debt; cash conversion 66%' } } },
            { company: 'Synergy Green', trend: 'stable', trendNote: 'Plant use rising to about 85% in July; targets ₹500cr of sales in FY27 but margin has halved.',
                grades: { qual: { grade: 'B', note: 'Approved by six turbine makers' }, tech: { grade: 'B', note: 'Castings of 3–30 tonnes' }, cust: { grade: 'C', note: 'Wind turbine makers only' }, pass: { grade: 'C', note: 'Metal indexed a quarter late' }, cash: { grade: 'D', note: 'Net debt 6x operating profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Steelcast is the one to own.** It makes steel castings for global mining and earthmoving machine makers, has earned 32–42% on capital for four years, has no debt, and has raised its FY27 volume guidance to 25–30% as its plant fills from 48% to 66%. The price asks for about the growth I expect.",
                "**Wait on AIA Engineering and Happy Forgings: excellent businesses, full prices.** AIA makes grinding balls and mill liners for mines and cement plants worldwide and holds ₹4,516cr of net cash, but its volumes have barely grown for years. Happy Forgings earns 30%-plus margins on crankshafts and has a ₹950cr pipeline of new parts, but the price asks for far more growth than even that supports.",
                "**Follow Neetu Yoshi and MM Forgings; wait on Nelcast; pass on Synergy Green.** Neetu Yoshi, a small railway-castings maker, guides revenue to double this year, but converts little profit into cash. MM Forgings is growing again but carries heavy debt. Nelcast's new plant is barely used; Synergy Green's margin has halved while its debt rose.",
                "**Two things to hold onto before reading the rest.** First, **the metal is passed on; the rest is not**: most of these companies pass steel, scrap and pig-iron prices to customers within a quarter, so margins are made or lost on energy, labour and how full the plant is. Second, **these are capital-hungry businesses**: presses and foundries cost a lot, so return on capital and free cash separate the good from the ordinary.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (AIA, Happy Forgings and MM Forgings consolidated, the others standalone). Neetu Yoshi reports half-yearly, so some quarters are blank. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Forging and casting turn steel and iron into parts for machines that run hard: truck engines, mining mills, railway wagons, wind turbines.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel bars, scrap, pig iron and alloys → **forgers and foundries** (these seven) → machine, truck, tractor, turbine and wagon makers, and mines → end users. **The profit sits with the makers of hard, approved parts**: a crankshaft or a grinding ball that has passed a customer's trials is rarely switched, while a plain iron casting is bought on price.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Truck and tractor sales in India and abroad; Western customers moving orders away from China and from shrinking European and US foundries; mining output, where lower ore grades mean more grinding; Indian Railways' wagon and coach programmes; and wind-turbine installations.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Trucks and mining are cyclical.** Truck demand swings with freight and interest rates; mining with metal prices. US tariffs affect exporters (Happy Forgings, MM Forgings, Steelcast, Nelcast). Energy costs matter: Steelcast said its gas cost rose 50–55% this year.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Steelcast** on filling its plant; **AIA** on mines switching to high-chrome media; **Happy Forgings** on its new-parts pipeline; **Neetu Yoshi** on railway orders and new approvals; **MM Forgings** on trucks and paying down debt; **Nelcast** on filling Pedapariya; **Synergy Green** on wind orders and margins. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Specialists', 'AIA, Steelcast, Neetu Yoshi', '25–32%', '21–32%', '**31–68%**'],
                        ['Truck and tractor parts', 'Happy Forgings, MM Forgings, Nelcast', '5–31%', '9–18%', '**64–66%**'],
                        ['Wind turbine castings', 'Synergy Green', '7–13%', '9%', '**53%**'],
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
                    label: 'Lasting: long trials and hard metallurgy',
                    text: "**AIA** is one of very few high-chrome specialists, and a mine switches only after long trials. **Happy Forgings** forges and machines heavy crankshafts few Indian rivals can make. **Steelcast** is an approved supplier to global mining-machine makers.",
                },
                {
                    label: 'Lasting but narrower: one customer group',
                    text: "**Neetu Yoshi** holds railway approvals for safety parts, but sells almost entirely to Indian Railways and its wagon makers. **Synergy Green** is approved by six turbine makers, but only in wind.",
                },
                {
                    label: 'Wearing: parts bought on price',
                    text: "**Nelcast** and **MM Forgings** make parts many foundries and forgers can make; they compete on cost and reliability, and MM could not recover all of this year's fuel and pay increases.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Bharat Forge**, **Ramkrishna Forgings** and **Kalyani** in forgings; **Magotteaux** and **ME Elecmetal** in grinding media; Chinese foundries in wind and mining castings; unlisted railway foundries.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the specialists, yes; for the iron foundries, it depends on filling new plants.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: hard parts, metal passed on',
                    text: "**Happy Forgings** (29–31%, guiding above 30%), **AIA** (26–29%, against its own guide of 20–22%) and **Steelcast** (25–29%) have held their margins for years. **Neetu Yoshi** earns about 31% and targets 25% net profit.",
                },
                {
                    label: 'Middling: volume parts',
                    text: "**MM Forgings** earns 17–19%; about two-thirds of its sales are machined parts, which helps.",
                },
                {
                    label: 'Not structural: underused new plants',
                    text: "**Nelcast** (5–10%) made ₹9.48 of operating profit per kilogram in Q1 against a ₹15 target, with its new plant 21% used. **Synergy Green**'s margin fell from 13% to 7% while it built new capacity; it expects about 3 points back this year.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**AIA** keeps stock near mines abroad; its cycle rose to 320 days in FY26. **Neetu Yoshi**'s rose from 76 to 152 days as it grew.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Nelcast** (51 days) and **Synergy Green** (43 days) are paid quickly and pay suppliers late.",
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
                    label: 'Growth driver: filling plants',
                    text: "**Steelcast** guides 25–30% volume growth in FY27 and about 20% a year after, as its 29,000-tonne plant goes from 66% toward 90% by FY29; a new 8,500-tonne foundry is due by March 2028. **Synergy Green** targets about ₹500cr of sales this year (+33%) with its plant about 85% used in July.",
                },
                {
                    label: 'Growth driver: new parts and exports',
                    text: "**Happy Forgings** guides high-teen volume growth, with a ₹950cr pipeline of new parts and ₹350–400cr of capex a year. **MM Forgings** guides ₹1,800–1,900cr of revenue (about 18%), with a 16,500-tonne press due in Q4 FY27.",
                },
                {
                    label: 'Growth driver: railways and mining',
                    text: "**Neetu Yoshi** guides ₹210–220cr in FY27, up from ₹98cr of sales, and about ₹350cr in FY28, with 15–20 parts awaiting railway approval. **AIA** gives no volume guidance; a new Chile order adds 3,000–4,000 tonnes a quarter.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Steelcast** raised its volume guidance; **Happy Forgings** kept margins above 30%.",
                },
                {
                    label: 'Missed or behind',
                    text: "**Nelcast**'s new plant is well behind; **AIA**'s volumes have stayed flat while it raised FY27 capex to ₹350–400cr, including more than ₹170cr for a corporate house.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Neetu Yoshi to compound earnings at about 30% from its small base, Steelcast and Happy Forgings at about 20%, MM Forgings at about 15%, Nelcast at about 12% and AIA at about 10%.** Synergy Green's profit is too small to estimate from.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Neetu Yoshi', 'New bogie plant; railway approvals', '15% / **30%** / 45%'],
                        ['Steelcast', 'Plant filling; new foundry', '12% / **20%** / 26%'],
                        ['Happy Forgings', 'New parts pipeline; exports', '14% / **20%** / 25%'],
                        ['MM Forgings', 'Trucks; new press; lower interest', '8% / **15%** / 20%'],
                        ['Nelcast', 'Pedapariya filling; ₹/kg recovery', '5% / **12%** / 20%'],
                        ['AIA Engineering', 'Mine conversions; Chile order', '5% / **10%** / 15%'],
                        ['Synergy Green', 'Wind orders; margin recovery', 'Profit too small to estimate from'],
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
                    label: 'Customer concentration',
                    text: "**Steelcast** sells to a few global machine makers and will not name them; **Neetu Yoshi** depends on Indian Railways; **Synergy Green** on wind-turbine makers.",
                },
                {
                    label: 'Debt and capex',
                    text: "**MM Forgings** carries net debt of about 3.6x operating profit (management puts gross debt at ₹750–800cr, less than Screener's ₹1,235cr of borrowings, without explaining the gap). **Synergy Green**'s is about 6x. **AIA**'s ₹170cr-plus corporate house is spending that does not grow the business.",
                },
                {
                    label: 'Cycles and trade',
                    text: "Truck, mining and wind demand all turn. US tariffs and anti-dumping cases (AIA faces them in Brazil and Canada) can shut markets quickly.",
                },
                {
                    label: 'Cash and reporting',
                    text: "**Neetu Yoshi** is SME-listed, reports half-yearly, and converted only 31% of its operating profit into cash over its filed years while spending heavily on plant.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **15% at 23x, 16% at 26x, 17% at 28x, 19% at 34x, 21% at 40x and 26% at 60x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**AIA**'s ₹4,516cr of net cash makes its business cheaper than its P/E suggests. **MM Forgings**, **Nelcast** and **Synergy Green** carry debt, so their EV/EBITDA is higher relative to their P/E.",
                },
                {
                    label: 'Reasonable',
                    text: "**Steelcast**, **Neetu Yoshi** and **MM Forgings**: prices that ask for about the growth I expect or less. For MM, the debt is the reason to wait for proof.",
                },
                {
                    label: 'Stretched',
                    text: "**Happy Forgings** and **AIA**: each needs more growth than I expect. **Nelcast** is a little short.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Synergy Green**: its profit is so small that its P/E means little; judge it on EV/EBITDA and its margin recovery.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Steelcast', rank: 1, stance: 'COMPOUNDER', segment: SPECIAL,
            what: "Makes steel and alloy castings for global mining, earthmoving and construction-machine makers, from Gujarat.",
            view: "**High returns, plant filling.** Returns of 32–42% for four years, no debt, and volume guidance raised to 25–30% as plant use rises from 48% to 66%. It depends on a few large customers. The price asks for about my ~20% estimate.",
            watch: 'Plant use toward 90%; the new foundry; recovery of gas costs.',
        },
        {
            company: 'AIA Engineering', rank: 2, stance: 'PRICED', segment: SPECIAL,
            what: "Makes high-chrome grinding balls and mill liners that wear away in the mills of mines and cement plants, sold worldwide.",
            view: "**A superb niche, stalled.** Margins of 26–29% and ₹4,516cr of net cash, but volumes have stayed at 60,000–65,000 tonnes a quarter and it gives no volume guidance. The price needs more than my ~10% estimate.",
            watch: 'Quarterly volumes above 65,000 tonnes; mine conversions; use of its cash.',
        },
        {
            company: 'Happy Forgings', rank: 3, stance: 'PRICED', segment: AUTO,
            what: "Forges and machines crankshafts and other heavy parts for trucks, tractors, off-road and industrial machines, in India and for export.",
            view: "**Best-in-class, fully priced.** Margins above 30%, high-teen volume growth guided and a ₹950cr pipeline of new parts, but capex takes all its cash. The price needs much more than my ~20% estimate.",
            watch: 'The new 18,000-tonne upsetter; export pipeline turning into sales; free cash.',
        },
        {
            company: 'Neetu Yoshi', rank: 4, stance: 'SCALEUP', segment: SPECIAL,
            what: "Makes approved safety castings for Indian Railways' wagons, coaches and track (bogie parts, couplers); SME-listed and reports half-yearly.",
            view: "**Fast growth, little cash.** Margins about 31% and revenue guided to double to ₹210–220cr in FY27 as a new bogie plant starts, but it converted only 31% of profit into cash. The price asks for less than my ~30% estimate; I want to see the plant deliver.",
            watch: 'FY27 revenue against ₹210–220cr; new railway approvals; operating cash.',
        },
        {
            company: 'MM Forgings', rank: 5, stance: 'TURNAROUND', segment: AUTO,
            what: "Forges and machines crankshafts, axle and steering parts mainly for trucks, in India and for export, and is building an electric-vehicle parts arm.",
            view: "**Growing again, weighed by debt.** About 18% growth guided for FY27 and a big new press coming, but its return has fallen to 9% and net debt is 3.6x operating profit. The price asks for about my ~15% estimate.",
            watch: 'Debt falling; the 16,500-tonne press; margins recovering fuel and pay costs.',
        },
        {
            company: 'Nelcast', rank: 6, stance: 'TURNAROUND', segment: AUTO,
            what: "Makes iron castings for trucks, tractors and off-road machines, about a third exported, from three plants in southern India.",
            view: "**A new plant not yet earning.** Margins of 5–10% and ₹9.48 of operating profit per kilogram against a ₹15 target, with its newest plant 21% used. The price needs a little more than my ~12% estimate.",
            watch: 'Pedapariya utilisation; profit per kilogram toward ₹15; new programmes.',
        },
        {
            company: 'Synergy Green', rank: 7, stance: 'TURNAROUND', segment: WIND,
            what: "Makes heavy iron castings (3–30 tonnes) for wind-turbine makers such as Vestas, Nordex and Siemens Gamesa, with its own machining.",
            view: "**Busy plant, thin margin, heavy debt.** Sales targeted at ₹500cr this year, but its margin fell from 13% to 7% and net debt is about 6x operating profit. Its profit is too small to value it on.",
            watch: 'Margin back above 10%; debt; the planned 100,000-tonne plant.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Specialists.** **Steelcast: own.** **AIA Engineering: wait** for volumes to move. **Neetu Yoshi: follow** until its new plant delivers and cash follows.",
            "**Truck and tractor parts.** **Happy Forgings: wait** for a better price. **MM Forgings: follow** as debt comes down. **Nelcast: wait** for its new plant to fill.",
            "**Wind turbine castings.** **Synergy Green: pass** until margins and debt improve.",
            "**What would change my view.** For the better: AIA's volumes breaking out; MM Forgings cutting debt; Nelcast reaching ₹15 a kilogram. For the worse: a truck or mining downturn, which would hit plants that are still filling hardest.",
            "**What to watch next quarter.** Steelcast's plant use; Happy Forgings' export pipeline; Neetu Yoshi's half-year results; Nelcast's and Synergy Green's margins.",
        ],
        bottomLine:
            "Own the high-return caster (Steelcast), wait on the priced quality (AIA Engineering, Happy Forgings) and on Nelcast, follow the growers with something to prove (Neetu Yoshi, MM Forgings), and pass on Synergy Green.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/STEELCAS/' },
        { label: 'Wholesale price index, ferrochrome, alloy steel billets, steel scrap and pig iron — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
