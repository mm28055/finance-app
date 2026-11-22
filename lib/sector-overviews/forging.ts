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
            'Neetu Yoshi': 22,
            'MM Forgings': 12,
            'Nelcast': 12,
            'Synergy Green': null,
        },
    },
    standfirst:
        "Seven Indian companies that shape steel and iron into parts that must not break. Happy Forgings and MM Forgings forge crankshafts and axle parts for trucks, tractors and machines. Five cast metal instead: AIA Engineering makes high-chrome grinding balls and mill liners for mines and cement plants worldwide; Steelcast makes steel castings for mining and earthmoving machines; Neetu Yoshi makes railway safety castings; Nelcast makes iron castings for trucks and tractors; and Synergy Green makes heavy iron castings for wind turbines. This version was rebuilt from the official call transcripts, annual reports, rating reports and industry sources, and it corrects several figures and quotes that earlier versions took from machine-rewritten transcripts. Neetu Yoshi is SME-listed and reports half-yearly. Every chart uses filed results and five years of history.",
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
                'AIA Engineering': 'The company’s own “EBITDA” margin of 36–40% includes treasury and currency income (₹110cr in Q1 FY27); the filed operating margin shown here is 26–29%.',
                'Nelcast': 'The company’s 5.8% for Q1 FY27 (₹9.5 a kilogram) includes other income; the filed operating margin is 4.6%.',
                'Synergy Green': 'The company’s 7.0% for Q1 FY27 and 13.1% for FY26 include other income; Screener shows 6% and 11%.',
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
            cellNotes: {
                'MM Forgings': 'Revenue only. Q1 FY27 profit after tax of ₹90cr also included a ₹56cr after-tax gain on selling land; without it, about ₹35cr.',
                'Neetu Yoshi': 'Half-year growth. The dashboard stores trailing sales of ₹168cr; the filed figure is ₹98cr (FY26).',
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
            { company: 'Steelcast', trend: 'widening', trendNote: 'Q2 FY27 revenue +29% but profit flat; FY27 margin aim cut to 26–27%; capacity plan raised to 40,750 tonnes by about April 2028.',
                grades: { qual: { grade: 'A', note: 'Approved by global mining and earthmoving OEMs' }, tech: { grade: 'B', note: 'Alloy steel castings' }, cust: { grade: 'C', note: 'A few large machine makers' }, pass: { grade: 'A', note: 'Formula for all main materials; price rise from 1 July' }, cash: { grade: 'A', note: 'Debt-free; steady free cash' } } },
            { company: 'AIA Engineering', trend: 'stable', trendNote: 'Volumes stuck at 60,000–65,000 tonnes a quarter; a new Chile order helps; capex raised for a corporate house.',
                grades: { qual: { grade: 'A', note: 'Trials at mines take years' }, tech: { grade: 'A', note: 'One of very few high-chrome specialists' }, cust: { grade: 'A', note: 'Mines and cement plants worldwide' }, pass: { grade: 'A', note: 'Alloy and freight costs passed on' }, cash: { grade: 'A', note: '₹4,516cr net cash' } } },
            { company: 'Happy Forgings', trend: 'widening', trendNote: '₹950cr pipeline of new parts, 60% export; a heavy-parts line (up to 3 tonnes) with first output due in Q4 FY27.',
                grades: { qual: { grade: 'A', note: 'Approved for crankshafts and safety parts' }, tech: { grade: 'A', note: 'Heavy forging plus in-house machining' }, cust: { grade: 'B', note: 'Trucks, tractors, industry; exports growing' }, pass: { grade: 'B', note: 'Steel passed on; other costs negotiated' }, cash: { grade: 'C', note: 'Capex takes all its cash' } } },
            { company: 'Neetu Yoshi', trend: 'widening', trendNote: 'New bogie plant started on 13 September, five months late; the ₹210–220cr FY27 revenue guide is at risk; 15–20 parts awaiting approval.',
                grades: { qual: { grade: 'A', note: 'Railway (RDSO) approvals for safety parts' }, tech: { grade: 'B', note: 'Manganese steel castings and fabrication' }, cust: { grade: 'C', note: 'Indian Railways and its wagon makers' }, pass: { grade: 'B', note: 'Price-variation clauses in tenders' }, cash: { grade: 'D', note: 'Five-year cash conversion 31%' } } },
            { company: 'MM Forgings', trend: 'stable', trendNote: 'Guides about 18% growth in FY27 and a 16,500-tonne press; debt still high.',
                grades: { qual: { grade: 'B', note: 'Approved truck supplier in India and abroad' }, tech: { grade: 'B', note: 'Two-thirds of sales machined' }, cust: { grade: 'C', note: 'Mostly trucks' }, pass: { grade: 'C', note: 'Q1 fuel and pay costs not recovered' }, cash: { grade: 'C', note: 'Net debt 3.6x operating profit' } } },
            { company: 'Nelcast', trend: 'stable', trendNote: 'New Pedapariya plant ran at 21%; operating profit ₹9.5 a kilogram in Q1 against a ₹15 full-year target.',
                grades: { qual: { grade: 'B', note: 'Approved by truck and tractor makers' }, tech: { grade: 'C', note: 'Iron castings, many rivals' }, cust: { grade: 'B', note: 'About a third exported' }, pass: { grade: 'B', note: 'Metal passed on with a quarter’s lag' }, cash: { grade: 'B', note: 'Modest debt; cash conversion 66%' } } },
            { company: 'Synergy Green', trend: 'stable', trendNote: 'Plant use rising to about 85% in July; targets ₹500cr of sales in FY27 but margin has halved.',
                grades: { qual: { grade: 'B', note: 'Approved by six turbine makers' }, tech: { grade: 'B', note: 'Castings of 3–30 tonnes' }, cust: { grade: 'C', note: 'Wind turbine makers only' }, pass: { grade: 'C', note: 'Metal indexed a quarter late' }, cash: { grade: 'D', note: 'Net debt 6x operating profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Steelcast is still the one to own, but the second quarter has to show the volume.** It makes steel castings for global mining and earthmoving machine makers, has earned 32–42% on its capital for four years, holds about ₹96cr of net cash and will pay for a ₹120cr, 8,500-tonne new foundry from its own cash. In July management raised its FY27 volume guide from ‘20% plus’ to 25–30%, yet Q1 tonnes rose only 11.6% and the operating margin, without other income, stayed at 25.6%, the same as a year earlier. Three customer groups take 75–88% of sales, its cash cycle has lengthened from 111 to 158 days in two years, and a small promoter pledge was disclosed inconsistently (section 7). The price needs about {need:Steelcast|21}% a year against my ~20%. Q2 (call of 13 Nov 2026) was mixed: revenue rose 29% to ₹138cr on 4,370 tonnes (+28%), short of the 4,500 I wanted, and H1 tonnes grew about 20%. The margin without other income fell to 24.5% on new-part trials, staff hired ahead of the new foundry and a lag in passing on September's cost rise, so profit was flat, and management now talks of a 26–27% margin for FY27 instead of 28.5–29%, with Q3 also under pressure. It kept its ~30% revenue guide and added 3,250 tonnes (₹31cr) to the new foundry, taking capacity to 40,750 tonnes from about April 2028. **I keep own for the returns and the balance sheet, but the fit is now thin: Q3–Q4 must show the revenue guide and the margin recovering.**",
                "**Follow Neetu Yoshi and MM Forgings: growth to come, with something to prove.** **Neetu Yoshi**, a small maker of railway safety castings, earns a 31% margin, but its new plant started on 13 September, five months after the April date given in November, so its ₹210–220cr FY27 revenue guide now rests almost entirely on the second half. FY26 sales of ₹98cr missed its ₹110cr ‘bare minimum’, its margin has slid from 36% to 31% as bogie prices fell, and its auditor flagged late tax and provident-fund payments and no internal auditor. Operating cash was ₹23cr against ₹54cr of profit over FY22–FY26 (43%), and only ₹4cr against ₹25cr of profit in FY26, so I now expect about 22% a year, against about {need:Neetu Yoshi|19–20}% priced in. **MM Forgings** grew revenue 16% in Q1, but its profit has fallen two years running as interest nearly doubled, its big 16,500-tonne press has slipped about nine months to Q4 FY27, and its Q1 profit included a ₹56cr one-off land gain. Net debt is about ₹1,010cr, two subsidiaries lose money and the board has approved a possible share sale. I now expect about 12% a year and the price needs about {need:MM Forgings|16}%, so I would follow it rather than buy.",
                "**Wait on AIA Engineering, Happy Forgings and Nelcast; pass on Synergy Green.** AIA and Happy Forgings are the best businesses here, at full prices. **AIA** is the world's second-largest maker of grinding media, with about 20% of a 3-million-tonne market (CRISIL), and holds ₹4,516cr of net cash. But it sold 258,002 tonnes in FY26, about the same as the two years before, and FY26 sales of ₹4,420cr were still below FY23's ₹4,909cr. On the August call it delayed its second big mine trial, again gave no volume guidance and nearly tripled FY27 capex to ₹350–400cr, much of it for a corporate office and land. About 30% of its pre-tax profit is other income, and FY26 operating cash fell to 47% of operating profit as stock and customer credit swelled. **Happy Forgings** is delivering: Q1 volume rose 23% against a high-teen guide, the margin held at 31% and its first price rise in three years stuck. But it will spend ₹800–900cr over FY27–28 (CRISIL) on a heavy-parts line that earns meaningfully only from FY29, its CFO breached the insider-trading code in March, and trucks and tractors, about 65% of its revenue, face a weak second half. AIA's price needs about {need:AIA Engineering|18}% a year against my ~10%; Happy's about {need:Happy Forgings|26}% against my ~20%. **Nelcast** made ₹9.5 of operating profit a kilogram in Q1 against a ₹15 full-year target, with its newest plant 21% used and profit after tax down 59%; it has missed its own volume promise once already. **Synergy Green** lost ₹10cr in Q1, carried about ₹234cr of net debt on ₹101cr of equity at June (company; ₹238cr at March on Screener), and its ₹500cr FY27 target needs nearly double Q1's sales each quarter.",
                "**Three things to hold onto before reading the rest.** First, **the metal is passed on; the rest is not**: all seven pass steel, scrap and pig-iron prices to customers by formula, usually a quarter late, so margins are made or lost on energy, resin, labour and how full the plant is. The West Asia conflict lifted all of those from February, which is why the three iron foundries' margins fell in Q1. Second, **these are capital-hungry businesses**: presses and foundries cost a lot and take years to fill, so return on capital and free cash separate the good from the ordinary. Third, **read the companies' own figures carefully**: most of the seven quote an ‘EBITDA’ that includes other income, and the transcripts this dashboard stored for Happy Forgings, MM Forgings and Synergy Green were machine rewrites with wrong numbers and, in two cases, the wrong war.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (AIA, Happy Forgings and MM Forgings consolidated, the others standalone). Neetu Yoshi reports half-yearly, so some quarters are blank. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's stored quarterly records for this group mix bases and have gaps. AIA's stored ‘EBITDA’ (₹424cr in Q1, a 37% margin) includes ₹110cr of treasury and currency income, and its order book is stored as zero when it was ₹977cr at 1 July. Steelcast's, Synergy Green's and Nelcast's stored margins also include other income. MM Forgings' Q3 FY26 row is all zeros and its Q1 profit of ₹90cr includes the land gain; Nelcast's Q4 FY26 and Neetu Yoshi's H2 FY26 rows are zeros, Synergy Green's Q3 revenue is zero, and Neetu Yoshi's trailing sales are stored as ₹168cr against ₹98cr filed. The charts below use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Forging and casting turn steel and iron into parts for machines that run hard: truck engines, mining mills, railway wagons, wind turbines. India is the world's second-largest producer of both, after China. It made 15.86 million tonnes of castings in 2024–25 in about 5,000 foundries, 90% of them small firms, and the Institute of Indian Foundrymen (IIF) targets industry value rising from about US$22bn to US$31.8bn by 2029, roughly 8% a year in dollars. Forgers use only about 60% of their capacity (Association of Indian Forging Industry), and the biggest customer group, auto components, expects 8–10% growth in FY27 (ACMA). **My view: FY27 is a year of two halves. Indian trucks and tractors are at a peak and ICRA expects almost no growth for the full year, and the US truck pre-buy ended in August; wind and railway parts are earlier in their upcycles.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel bars, scrap, pig iron, ferrochrome and resin → **forgers and foundries** (these seven, plus thousands of small ones) → truck, tractor, machine, turbine and wagon makers, and mines → end users. **The profit sits with makers of hard, approved or consumable parts.** In FY26 AIA, Happy Forgings, Steelcast and Neetu Yoshi earned 27–31% margins and together made about 81% of this group's ₹2,307cr of operating profit, while Nelcast (8%) and Synergy Green (11%) poured many more tonnes for thin margins; MM Forgings sits in between at 18%. A grinding ball that wears out inside a mine's mill, or a crankshaft that has passed a truck maker's tests, is rarely switched; a plain iron casting is bought on price. **My view: margin follows difficulty and approval, not tonnage.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Trucks and tractors** drive Happy Forgings, MM Forgings and Nelcast. ICRA expects Indian medium and heavy truck sales to grow only 1–3% in FY27 after a GST-cut boom, and tractors 1–4% after a record FY26 (+23.5%) and a below-normal monsoon forecast. In the US, fleets ordered 111% more heavy trucks in January–August 2026 to beat emission rules that start in 2027; August marked the end of that pre-buy, and ACT Research expects about 315,300 units in 2027, held up by replacement demand. **Wind** is the brightest: India added a record 6.34 GW in FY26, MNRE expects 7.5–8 GW in FY27 on the way to 100 GW-plus by 2030, and turbines are moving to 3–5 MW, which need heavier castings. **Mines** use up grinding media for every tonne of ore they mill; GlobalData expects the 20 largest miners to raise capex 3.8% in 2026, led by copper. **Railways** are preparing a tender for about 1 lakh freight wagons. **My view: the truck-linked names face the hardest comparison in H2 FY27; Synergy Green and Neetu Yoshi have the best demand but the weakest delivery.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**US tariffs have eased but not gone.** The 50% rate imposed on most Indian goods in August 2025 was cut by an interim deal, the US Supreme Court struck those tariffs down in February 2026, and since 24 July India faces a 10% ‘Section 301’ rate. But Section 232 still charges 25% on covered auto parts and 50% on steel products, and India is one of 16 countries in a new US ‘overcapacity’ investigation (Holland & Knight; ACMA). MM Forgings says its US customers pay the duty and kept ordering. **Europe's carbon border tax (CBAM)** has covered iron and steel since January 2026, and the European Commission proposes adding about 180 downstream products, including gearboxes and machinery parts, from 1 January 2028 (European Parliament research service). Most castings and forged parts are outside today's scope, but a foundry on coal-heavy grid power would face a new cost; Nelcast's 65–70% renewable power becomes an edge. **Costs** jumped from February: scrap and pig iron rose, furan resin (the binder in sand moulds) by 60% and gas by 50–70%, and April–May labour shortages cut output across foundries. **My view: tariffs are now a nuisance rather than a wall; CBAM is the slower, bigger threat to exporters to Europe from 2028.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Steelcast** on filling its plant from 66% toward 90% while US and German mining and earthmoving demand holds; **AIA** on mines switching from forged to high-chrome media, one long trial at a time; **Happy Forgings** on turning its ₹950cr pipeline of new parts into sales and filling the heavy-parts line; **Neetu Yoshi** on its late new plant, railway approvals and wagon orders; **MM Forgings** on truck volumes, cutting interest and starting its big press; **Nelcast** on three new large-casting programmes and on filling Pedapariya; **Synergy Green** on shipping castings it has already made, recovering its costs and keeping its lenders comfortable. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Share of the group’s FY26 operating profit'],
                    rows: [
                        ['Specialists', 'AIA, Steelcast, Neetu Yoshi', '25–32%', '21–32%', '**31–68%**', 'About 61% (AIA alone about 55%)'],
                        ['Truck and tractor parts', 'Happy Forgings, MM Forgings, Nelcast', '5–31%', '9–18%', '**64–66%**', 'About 37%'],
                        ['Wind turbine castings', 'Synergy Green', '7–13%', '9%', '**53%**', 'About 2%'],
                    ],
                    note: 'The group made ₹2,307cr of operating profit on ₹9,771cr of sales in FY26 (Screener).',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Castings, India', '15.86m tonnes in 2024–25, second to China; ~5,000 foundries, 90% small firms', 'Industry value ~US$22bn → **~US$31.8bn by 2029**', 'IIF, Feb 2026'],
                        ['Forgings, India', '~2.9m tonnes made against 4.8m of capacity; ~30% exported', 'Second-largest producer after China', 'AIFI, Oct 2025'],
                        ['Auto components', '₹7.59 lakh crore in FY26 (+12.7%); exports US$24bn, 26% to the US', '**+8–10% in FY27**', 'ACMA, Jul 2026'],
                        ['Indian trucks', 'FY26 a high base; April–May FY27 wholesales +15%', 'Medium and heavy trucks **+1–3% in FY27**; all commercial vehicles +4–6%', 'ICRA, Jun 2026'],
                        ['Tractors', 'Record FY26: +23.5%, ~11.6 lakh units', '**+1–4% in FY27**; below-normal monsoon forecast', 'ICRA, Jun 2026'],
                        ['US heavy trucks', 'Orders +111% in Jan–Aug 2026 ahead of 2027 emission rules; pre-buy ended in August', '~315,300 units in 2027', 'ACT Research; FleetOwner, Aug–Sep 2026'],
                        ['Wind, India', 'Record 6.34 GW added in FY26; 58.5 GW installed', '**7.5–8 GW in FY27**; 100 GW-plus by 2030', 'MNRE, Sep 2026'],
                        ['Mining', 'Top-20 miners’ capex US$82.4bn in 2026', '+3.8% in 2026, led by copper', 'GlobalData, Mar 2026'],
                        ['Railway wagons', 'Wagon makers slowed in FY26; bogie prices fell ~15%', 'Tender for ~1 lakh wagons (~₹40,000cr) being prepared', 'Trak.in, Jun 2026; Neetu Yoshi call'],
                        ['US tariffs', '25% on covered auto parts (Section 232); 10% Section 301 rate from 24 Jul 2026, not added on top', 'New US ‘overcapacity’ probe includes India', 'Holland & Knight, Jul 2026; ACMA'],
                        ['EU carbon tax (CBAM)', 'Iron and steel covered since Jan 2026', '~180 downstream products proposed **from Jan 2028**', 'European Parliament research service, Sep 2026'],
                        ['Steel', 'Safeguard duty since Jan 2026, worth ~US$50–55 a tonne in July', 'Indian steel demand +9–10% in FY27', 'ICRA, 2026'],
                    ],
                    note: 'Industry bodies’ targets (IIF) are aspirations, not forecasts; ICRA, ACT Research, MNRE and GlobalData are forecasts.',
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
                    label: 'Lasting: a consumable, and long trials',
                    text: "**AIA** has about 20% of the world's grinding-media market and is second only to Magotteaux (CRISIL). Management says there is no Chinese high-chrome maker yet, while about 20 Chinese forgers sell cheaper forged balls, including to Chile's two biggest mines. A mine switches only after trials that take three months to two years, and once it does it keeps buying: a large South American mine confirmed the gains in April and ordered a second mill conversion, and a 15,000-tonne Chile order (about ₹300cr) is now shipping 3,000–3,500 tonnes a quarter. AIA passes on all freight and alloy costs; its price rose to ₹178 a kilogram in Q1 from ₹171 a year earlier. **My view: a real moat that protects what it has, but the same long trials slow every new win, and duties in the US (about 10% after a complaint by Magotteaux) and Brazil keep some markets hard.**",
                },
                {
                    label: 'Lasting: heavy presses and customer approval',
                    text: "**Happy Forgings** is India's second-largest maker of truck and heavy industrial crankshafts, with a 32% share of the heavy-truck crankshafts it makes (target 42%) and 41% in tractors. It negotiated its first price rise in three years on top of steel pass-through (it sought 3.5–4% in May; about 30% of the benefit came in Q1), and it recovers about 75% of higher container freight. Its new heavy-parts line needed 80-foot foundations; management says such lines take 1.5–3 years to build anywhere, and some of its new wins are parts customers used to make themselves. **Steelcast** has supplied global mining and earthmoving makers for six decades; each of the 17 companies in its three largest customer groups approves parts separately, and prices move by formula with a quarter's lag. **My view: both earn their margins from approvals and hard engineering, not from cheap metal.**",
                },
                {
                    label: 'Lasting but narrow: one customer group',
                    text: "**Neetu Yoshi** holds railway (RDSO) approval for more than 25 safety parts; each approval takes 3–7 months of document checks, prototypes and field trials, and each part has only 4–7 approved makers. It won a prototype approval for friction wedges on 19 September and has 15–20 more in the pipeline. But bogie prices fell about 15% in the FY26 wagon slowdown and management admits margins fall as new suppliers are approved: its margin slid from 36% in FY24 to 31% in FY26. **Synergy Green** works with 6 of the 15 largest turbine makers; a new part takes 6–8 months to approve and a new customer about two years, and it says a weaker rupee makes it 5–10% cheaper than China on landed cost. But it cannot pour castings above 30 tonnes, wind is about 85% of sales and Vestas 40–45%. **My view: approvals keep newcomers out, but one buyer sets the price.**",
                },
                {
                    label: 'Wearing: parts bought on price',
                    text: "**MM Forgings**' chairman told analysts in February that in India ‘no prices have increased’ and ‘competition is brutal’; its margin has stayed at 17–19% for a decade even as machined parts rose from about 20% to 58% of sales, and it lost share with a domestic truck customer over late deliveries until Q1 FY26. **Nelcast** is single-source on about 80% of its export parts and 50–60% of domestic ones, and says its new Pedapariya line can pour castings about 1.8 metres long, against about 1.1 metres elsewhere in India. Yet it earns 7–8% margins and about 11% on capital, and management concedes that rivals making smaller batches of complex parts earn more. **My view: being the sole approved supplier is not the same as having pricing power; the margin record is the test, and both fail it.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Bharat Forge** and **Ramkrishna Forgings** in truck and industrial forgings (named by MM Forgings' chairman); **Magotteaux**, owned by Japan's Sinto, in high-chrome grinding media, plus about 20 Chinese forged-ball makers; Chinese foundries, which serve the 50–60% of world wind installations built in China and compete hard in Europe; unlisted railway foundries such as Frontier, Roys Steel and Atul Engineering; and about 5,000 small Indian foundries in standard iron castings.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the specialists, yes; for MM Forgings they are steady but low; for the iron foundries they depend on filling new plants and on the lag in passing on costs. All figures here are filed operating margins, which leave out other income.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: hard parts, metal passed on',
                    text: "**Happy Forgings** has earned 29–31% for five quarters and 31.3% in Q1, its gross margin rose to 60.7% and operating profit per kilogram rose 13% to ₹79, because 90% of its sales are now machined and more come from industrial and car parts. **AIA** earned 26–29%, well above its own 20–22% guide; Q1's dip to 26% from 29% in Q4 came from fewer large castings, freight and the cost of mine trials. **Steelcast** earned 25–28%, but its core margin slipped to 27.0% in FY26 from 27.7%, while its reported ‘EBITDA margin’ rose to 30.6% on other income of ₹15.5cr, including an ₹8cr currency gain. In May the chairman called 25–26% ‘realistic and sustainable’; in July he agreed to strive for 28.5–29%. **My view: Happy's margin is the most earned; Steelcast's target needs volume, not words.**",
                },
                {
                    label: 'Holding but under pressure',
                    text: "**Neetu Yoshi**'s margin fell from 36% in FY24 to 33% and then 31% in FY26 (30% in H2) as metal costs rose and bogie prices fell; a lifetime tax rate of about 17.5% for new factories lifts its profit margin to 25%. **MM Forgings** earned 17–19%; in Q1 a fuel spike, April pay rises and about ₹4cr of extra freight on ships rerouted around the Strait of Hormuz held it at 18%. Management targets more than 20% with ‘clear visibility for 1% to 2%’. **My view: both are good margins for what they make, but neither is rising.**",
                },
                {
                    label: 'Not structural: underused plants and lagging prices',
                    text: "**Nelcast**'s margin fell to 4.6% in Q1 (₹9.5 a kilogram on the company's measure, against ₹14.7 a year earlier) because metal prices rose before its price revisions, labour was short in April–May, its Pedapariya plant was stopped for upgrades and freight rose. It still targets ₹15 for the year, which needs about ₹16.5 in each of the last three quarters; about ₹4 a kilogram of price recovery is due in Q2. **Synergy Green**'s margin fell from 14% in FY25 to 11% in FY26 and 6% in Q1: management puts the Q1 damage at about 2 points from metal prices, 3 from resin and other consumables and 1 from a Maharashtra power rule that ended solar banking retroactively. It guides a 3-point rise for FY27. **My view: some of this comes back as prices catch up, but both plants must be fuller before margins can be called normal.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**AIA**'s cash conversion cycle (days of stock and customer credit minus supplier credit) jumped from 243 to 320 days in FY26: debtor days rose from 70 to 97 and stock from 214 to 270 days, as it built stock for the Chile order and one customer moved to paying on consumption. FY26 operating cash was ₹592cr, 47% of operating profit, against ₹1,162cr the year before. **Happy Forgings**' cycle improved from 226 to 193 days, but at ₹445cr its FY26 operating cash only matched its ₹460cr of capex.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Neetu Yoshi**'s debtor days rose from 54 to 118 in FY26 and operating cash was ₹4cr; management says railway budgets run out in February–March and receivables fell from ₹31.9cr to about ₹20cr by June. It is raising ₹27.48cr of warrants for track working capital rather than borrowing. **MM Forgings**' debtor days rose from 64 to 96 in two years and its bank limits are about 80% used (CARE); the chairman has set up a ‘rapid action force’ to clear stuck work in progress. **Steelcast**'s cycle rose from 111 to 158 days in two years, and stock built up again in Q1 as production ramped.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Nelcast** (51 days) generated ₹92cr of operating cash and ₹76cr of free cash in FY26 and used it to cut debt, though its export customers take about 150 days. **Steelcast** turned about 99% of FY26 profit after tax into operating cash (₹86.4cr). **Synergy Green**'s cycle is short on paper at 43 days, but its stock rose to ₹82.5cr in June from ₹62.7cr as finished castings could not ship, and its bank limits averaged 87% use (CRISIL).",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Exporters own their goods for weeks at sea, and Happy Forgings' European contracts are ‘delivered duty paid’, so a shipping delay hits both revenue and stock. Railway buyers pay late at the end of the government's year. And because metal is re-priced a quarter late, a rise in scrap prices first swells stock and receivables before it lifts selling prices. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['AIA Engineering', 'Cash ‘₹4,500 to maybe ₹5,000 crores’, held for ‘a few more quarters’; no buyback; FY27 capex ₹350–400cr', 'Net cash ₹4,516cr (Screener, March)'],
                        ['Happy Forgings', 'Capex ₹350–400cr a year from own cash, with a short bridge loan; CRISIL expects debt to rise about ₹300cr', 'Net debt ₹40cr; borrowings ₹330cr (March)'],
                        ['Steelcast', 'Debt-free; ₹151cr foundry (raised from ₹120cr on 13 Nov 2026) paid over FY27–FY28 from own cash; no rights issue; 20% payout', 'Net cash ₹96cr; CARE counts ₹98cr of liquid funds; free reserves about ₹120cr'],
                        ['MM Forgings', 'Term debt held at ₹750–800cr ‘plus 50’; capex about ₹150cr; land money to working capital, capex or debt; a share sale (QIP) ‘at an appropriate time’', 'Borrowings ₹1,235cr; net debt ₹1,010cr (March)'],
                        ['Synergy Green', 'Long-term debt to peak at ₹175–180cr; ₹25cr of land from own cash; equity raise for the next plant in 2028', 'Total debt ₹243cr, net debt ~₹234cr, net worth ₹101cr (June)'],
                        ['Nelcast', 'Term loans falling; capex ₹30–35cr a year, plus a ₹75cr machining division at Gudur approved on 5 October 2026 (cash and borrowing, no date given); may sell surplus Tamil Nadu land (call not verifiable)', 'Net debt ₹172cr; debt 0.4 times equity (March)'],
                        ['Neetu Yoshi', 'Debt-free; ₹27.48cr of warrants for track working capital; receivables about ₹20cr in June (H2 FY26 call)', 'Net cash ₹9cr (March)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Neetu Yoshi reports half-yearly; MM Forgings held no Q4 FY26 call.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: filling plants already built',
                    text: "Several of these companies can grow for two or three years with little new money. **Steelcast** used 48% of its 29,000 tonnes in FY26, 66% in Q1 and 57% in Q2 (it expects about 60% for FY27), and aims for 90% by FY29; a new foundry, now 11,750 tonnes for ₹151cr and due about 1 April 2028, could add well over ₹300cr of sales at peak (₹300cr was the estimate for the first 8,500 tonnes). **Nelcast** has 160,000 tonnes of capacity and sold about 91,300 in FY26, so reaching its 130,000-tonne goal needs only ₹30–35cr a year of capex. **AIA** has 436,000 tonnes and used about 59% in FY26. **Synergy Green** raised capacity by half to 45,000 tonnes; use was 66% in Q1 and about 85% in July. **My view: operating leverage is the biggest single source of profit growth here, but only if the orders come.**",
                },
                {
                    label: 'Growth driver: new parts, heavier parts and exports',
                    text: "**Happy Forgings** has a ₹950cr pipeline of new business (peak yearly revenue over two to three years), 60% export, priced at about ₹340–350 a kilogram against ₹253 today; industrial parts should double in three to four years and car parts reach 12–15% of sales. Its heavy-parts line starts trials in Q3 FY27, with first output in Q4 and a meaningful contribution from FY29. **MM Forgings** started a 4,000-tonne press in August and promises its 16,500-tonne press in Q4 FY27, with about ₹300cr of revenue potential by FY29, and reaffirmed ₹3,000cr of revenue by FY30 at a 20% margin. **Nelcast** expects three new large-casting programmes to reach ₹200–250cr a year by Q4 FY27 (from the unverified call; the presentation confirms new products from Q2).",
                },
                {
                    label: 'Growth driver: mines switching to high-chrome',
                    text: "**AIA** sees 1–1.5 million tonnes of opportunity in gold, copper and iron-ore mines, where high-chrome media have ‘not more than 25–30%’ of the market, and 300,000–400,000 tonnes for itself in Latin America in time. Falling ore grades mean mines must grind more rock for the same metal. But it gave no volume guidance in May or August, and management warned that updates ‘may continue to be bland’ for three or four quarters. **My view: the prize is large and real; the timing is not in AIA's hands.**",
                },
                {
                    label: 'Growth driver: railways and wind',
                    text: "**Neetu Yoshi** expects its new plant to add about ₹100cr in FY27 and about ₹200cr at peak, taking revenue to ₹340–350cr in FY28; its ₹140–150cr order book covers about 0.7 times the FY27 guide, and the planned 1-lakh-wagon tender should bring bogie orders. **Synergy Green** signed a Vestas 4 MW contract in May (serial production from Q1 FY28), has Nordex 5 MW parts approved for US projects, and plans land for up to 100,000 tonnes of capacity, a project management once put at ₹500–600cr, to be funded partly by new shares in 2028.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Happy Forgings** promised high-teen volume growth and a margin above 30%; Q1 volume rose 23.1%, revenue 27% and the margin was 31.3%. Its 4,000-tonne press arrived on time, and its price rise landed a quarter late (about 30% of it in Q1, the rest from Q2). The one miss: in May it said truck revenue could grow 35–40% this year, and Q1 truck growth was single-digit as exports fell 12% on shipping delays. **AIA**'s Chile order is shipping as promised and its margin stays above its own guide.",
                },
                {
                    label: 'Cautious',
                    text: "**AIA** gave no volume guidance on either call, pushed its second big mine trial from ‘the next couple of months’ to ‘a little longer’, and moved cash returns from ‘6 to 12 months’ to ‘a few more quarters’. **Steelcast** raised its guide, but Q1 tonnes rose 11.6% and H1 about 20% against 25–30% for the year; on 13 Nov 2026 it restated the guide as about 30% revenue growth and cut its FY27 margin talk from 28.5–29% to 26–27%. H1 profit of ₹47.4cr is a run-rate of about ₹95cr, short of its ₹100cr-plus aspiration, and its hybrid power plant slipped from June to December.",
                },
                {
                    label: 'Missed',
                    text: "**Nelcast** promised more than 23,000 tonnes in Q1 and produced 21,184; Pedapariya fell from 35% use in Q4 to 21%, and profit per kilogram fell instead of rising. **Synergy Green** guided ₹500cr-plus for FY27 with 45% in the first half; Q1 brought ₹75cr, about 15% of the year, and a ₹10cr loss. It kept both the ₹500cr and the 3-point margin rise, which now need about ₹141cr a quarter for the rest of the year, nearly double Q1; the guide had already been trimmed from the ₹530–550cr mentioned on the Q3 call. **Neetu Yoshi** promised in November that its new plant would start in April; it started on 13 September. FY26 sales of ₹98cr (₹101.6cr with other income) fell short of the ₹110cr ‘bare minimum’, though management presented it as met, and the FY27 guide was cut from ₹220–230cr to ₹210–220cr.",
                },
                {
                    label: 'Mixed',
                    text: "**MM Forgings** held no Q4 call, so its promises come from February and March. Q1 revenue rose 16%, inside its ₹1,800–1,900cr guide, but volume of 20,200 tonnes was hit by a labour shortage and it now needs about 23,300 tonnes a quarter to pass 90,000. Its 16,500-tonne press, targeted for June to August when it spoke in March, is now due in Q4 FY27, and in February it had no products identified for it. Interest fell to ₹16cr in Q1 (about ₹64cr a year) against a promise of ‘₹55 crores max’.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Neetu Yoshi to compound earnings at about 22% from its small base, Steelcast and Happy Forgings at about 20%, MM Forgings and Nelcast at about 12% and AIA at about 10%.** Synergy Green's profit is too small to estimate from. I have cut Neetu Yoshi from about 30%, because its FY27 now looks more like ₹150–175cr of revenue than ₹210–220cr and its cash lags its profit, and MM Forgings from about 15%, because the delayed press, two loss-making subsidiaries and a possible share sale hold back the return on its heavy spending. Steelcast's ~20% needs the new volume guide to be broadly met.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Neetu Yoshi', 'New bogie plant (late); railway approvals; wagon tender', '12% / **22%** / 30%'],
                        ['Steelcast', 'Plant filling; new parts; new foundry from FY28', '12% / **20%** / 26%'],
                        ['Happy Forgings', 'New-parts pipeline; exports; heavy line from FY29', '14% / **20%** / 25%'],
                        ['MM Forgings', 'Trucks; new presses; lower interest', '5% / **12%** / 18%'],
                        ['Nelcast', 'Pedapariya filling; profit per kilogram recovering', '5% / **12%** / 20%'],
                        ['AIA Engineering', 'Mine conversions; Chile order; cash use', '5% / **10%** / 15%'],
                        ['Synergy Green', 'Wind orders; margin recovery; debt', 'Profit too small to estimate from'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Steelcast', 'Revenue about +30% in FY27 (volume +25–30% in July); margin 26–27% (was 28.5–29%), Q3 under pressure', '₹151cr for 11,750 tonnes over FY27–FY28, commissioning about 1 April 2028', '**Behind**: H1 tonnes about +20%; Q2 margin 24.5%; margin aim cut'],
                        ['AIA Engineering', 'No volume guide; margin 20–22%; ₹165 a kilogram', '₹350–400cr (from ₹100–150cr)', '**Slipping**: second mine trial delayed; tonnes +7.5%'],
                        ['Happy Forgings', 'High-teen volume; margin above 30%', '₹350–400cr a year (₹450–500cr said in May)', '**Beat**: volume +23.1%, margin 31.3%; trucks behind'],
                        ['Neetu Yoshi', 'FY27 revenue ₹210–220cr (cut from ₹220–230cr); FY28 ₹340–350cr', 'New plant from IPO money; spring and rubber lines next', '**Missed**: plant from 13 Sep, not April or June'],
                        ['MM Forgings', 'Revenue ₹1,800–1,900cr; over 90,000 tonnes; margin above 20% in time', 'About ₹150cr', '**Mixed**: revenue +16%; big press slipped ~9 months'],
                        ['Nelcast', 'About 1 lakh tonnes; ₹15 a kilogram for the year (call, unverified)', '₹30–35cr a year', '**Missed**: 21,184 tonnes; ₹9.5 a kilogram; Pedapariya 21%'],
                        ['Synergy Green', '₹500cr (+33%) and margin +3 points, kept', 'Land ~₹25cr; next plant from FY28', '**Missed**: Q1 ₹75cr and a ₹10cr loss'],
                    ],
                    note: 'MM Forgings’ promises are from its Q3 FY26 call and a March 2026 investor conference; Neetu Yoshi’s from its November 2025 and June 2026 half-year calls.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'A truck and tractor slowdown after a record year',
                    text: "ICRA expects Indian medium and heavy trucks to grow 1–3% and tractors 1–4% in FY27, which implies a weak second half after strong early months, and the US truck pre-buy ended in August. Trucks and tractors are about 65% of **Happy Forgings**' revenue, 71–82% of **MM Forgings**' is trucks, and **Nelcast** sends about 80% of its exports to North America, where part of the recent demand was buying ahead of emission rules from January 2027. **None of the three managements addressed a second-half slowdown directly.**",
                },
                {
                    label: 'Trade and carbon rules',
                    text: "Section 232 still charges 25% on covered auto parts in the US, and the new US overcapacity investigation could add duties on Indian goods. **AIA** already pays US duties of about 10% (after a complaint by its rival Magotteaux) and 4.69% in Brazil, where its volumes are only 6,000–8,000 tonnes and have ‘not gone through the scale-up we had hoped for’. **Steelcast** sends about 70% of its exports to the US and Germany. The EU's CBAM extension from 2028 would put a carbon price on many machinery and vehicle parts; none of the managements discussed it.",
                },
                {
                    label: 'Debt and capex that have not yet earned',
                    text: "**MM Forgings** spent about ₹850cr in three years, about ₹610cr of it borrowed (CARE); borrowings are ₹1,235cr, return on capital fell to 9.2% and interest rose from ₹42cr to ₹78cr in two years. Management's ‘₹750cr gross debt’ counts only term loans. Two subsidiaries lose money: DVS Industries lost about ₹10cr in FY26 with negative net worth (merger awaiting a court order), and the electric-motor arm Abhinava Rizel burns about ₹1cr a month after about ₹70cr of investment. The board has approved a possible share sale. **Synergy Green**'s interest and depreciation of about ₹64cr a year exceed FY26's ₹39cr of operating profit; CRISIL puts its adjusted debt at 2.31 times equity and rates it BBB. One domestic customer had not opened a letter of credit (a bank's payment guarantee), so Synergy held the goods. **Happy Forgings**' ₹800–900cr programme will push return on capital down to 16–17% until it fills (CRISIL).",
                },
                {
                    label: 'Governance and disclosure',
                    text: "**Happy Forgings**' CFO made ₹1.05cr of opposite-direction trades in its shares on 17 March 2026 in breach of the insider-trading code; the audit committee only issued a warning. The chairman's pay rose 78% to 186 times the median employee's. **Steelcast**'s annual report shows 1.48% of its shares pledged by the chairman while his April filing reported none, a 2010 land purchase is before the Gujarat High Court, and family pay is about 8% of profit. **Neetu Yoshi**'s auditor noted that TDS, advance tax, PF and ESI were paid late; it has no internal auditor, its accounting software's audit trail can be switched off, IPO costs were 10.4% of the money raised and ₹11.32cr of IPO money was unspent at March. **Nelcast** does not file its call transcripts with the exchanges (figures here are from the transcripts of its May and July calls), and one call figure (‘term loans about ₹90cr’) conflicts with its March accounts.",
                },
                {
                    label: 'AIA: earnings quality and related parties',
                    text: "Other income of ₹485cr was about 30% of AIA's FY26 pre-tax profit, and the record Q4 included a ₹64.5cr currency gain and a one-off tax benefit. The parent sold ₹1,064.7cr of goods to its UAE subsidiary in FY26, and the auditor's key audit matter is revenue recognition, including related-party sales. Contingent liabilities rose from ₹520cr to about ₹689cr, including ₹369cr of income-tax disputes and corporate guarantees up from ₹24cr to ₹113cr. Its subsidiary Welcast closed its only factory in December, and the chairman and an executive director left in March–April 2026. **None of this is alarming alone, but it is more than the calls let on.**",
                },
                {
                    label: 'Concentration and input costs',
                    text: "**Steelcast**'s three largest customer groups take 75–88% of sales; **Synergy Green** depends on wind for about 85% and on Vestas for 40–45%; **Neetu Yoshi** sells only to Indian Railways and its wagon makers; **Nelcast**'s largest customer takes 17% and **Happy Forgings**' about 13%. A second cost spike before the first is recovered would hit the thin-margin foundries hardest.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **15% at 23x, 16% at 26x, 18% at 29x, 19–20% at 34x, 21% at 40x and 26% at 60x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**AIA**'s ₹4,516cr of net cash sits inside its {mcap:AIA Engineering|₹35,800cr} market value, so the business is cheaper than its P/E suggests; but that cash earns the treasury income already inside its profit, and management will not return it for now. **MM Forgings**, **Nelcast** and **Synergy Green** carry debt, so their EV/EBITDA is higher relative to their P/E. **Happy Forgings** and **Steelcast** have almost none either way.",
                },
                {
                    label: 'Fits: prices that ask for about what I expect',
                    text: "**Steelcast** needs about {need:Steelcast|21}% a year against my ~20%, which the new volume guide supports if it is met. **Neetu Yoshi** needs about {need:Neetu Yoshi|19–20}% against my ~22%, a small margin of safety that rests on a plant that started five months late, an FY27 guide I expect it to miss, and a share price that rose from ₹121 in early June to ₹223 in late September.",
                },
                {
                    label: 'Full',
                    text: "**MM Forgings** needs about {need:MM Forgings|16}% a year against my ~12%. Its Q1 profit included a ₹56cr land gain that will not recur, so judge it on underlying quarterly profit of about ₹18–35cr; with ₹1,010cr of net debt, I want falling interest and the big press running before paying this price. **Nelcast** needs about {need:Nelcast|15}% a year against my ~12%. It has room: idle capacity means each extra tonne adds profit, and a return to ₹15 a kilogram would lift operating profit sharply. But it promised that before and went backwards in Q1.",
                },
                {
                    label: 'Stretched',
                    text: "**Happy Forgings** needs about {need:Happy Forgings|26}% a year against my ~20%. It is delivering, but its free cash will stay near zero while it spends ₹800–900cr, and the heavy line pays off only from FY29. **AIA** needs about {need:AIA Engineering|18}% against my ~10%; with volumes flat for three years and about 30% of pre-tax profit coming from other income, the price assumes the mine conversions arrive soon.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Synergy Green** lost ₹9cr over the last four quarters, so it has no P/E, and its EV/EBITDA is high because operating profit has shrunk while debt rose. Judge it on whether Q2 brings sales above ₹120cr with a margin back above 13%, and on how it funds the next plant.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Steelcast', rank: 1, stance: 'COMPOUNDER', segment: SPECIAL,
            what: "Makes steel and alloy-steel castings, mostly machined, for global mining, earthmoving and construction-machine makers from one site in Bhavnagar, Gujarat; about 60% of FY26 sales were exported.",
            view: "**High returns, guide behind, fit now thin.** Returns of 32–42% for four years, ₹96cr of net cash and a new foundry, now 11,750 tonnes for ₹151cr, paid from its own cash. Q2 FY27 (call of 13 Nov 2026) grew revenue 29% but profit was flat: tonnes were 4,370 (below the 4,500 I wanted; H1 about +20% against 25–30%), the margin without other income fell to 24.5%, and management now talks of 26–27% for FY27 instead of 28.5–29%. Three customer groups take 75–88% of sales, and the chairman's pledge was disclosed inconsistently. The price needs about {need:Steelcast|21}% a year against my ~20%.",
            watch: 'H2 revenue growth that delivers about 30% for FY27; the margin excluding other income back above 26% in Q4 as September costs are passed on; the new foundry on track for about April 2028; an explanation of the 1.48% pledge.',
        },
        {
            company: 'Neetu Yoshi', rank: 2, stance: 'SCALEUP', segment: SPECIAL,
            what: "Makes approved safety castings for Indian Railways' wagons, coaches and track (bogie parts, couplers, crossings) in Uttarakhand; SME-listed and reports half-yearly.",
            view: "**Fast growth, late plant, little cash.** A 31% margin and a 17.5% lifetime tax rate, with 15–20 new approvals in the pipeline. But its new plant started on 13 September instead of April, FY26 sales missed the ₹110cr promise, operating cash was ₹23cr against ₹54cr of profit over FY22–FY26 (43%) and only ₹4cr against ₹25cr in FY26, and the auditor flagged late statutory dues; ₹210–220cr of FY27 revenue now looks out of reach. The price needs about {need:Neetu Yoshi|19–20}% a year against my ~22%.",
            watch: 'H1 FY27 results and the new plant’s first sales; receivables and operating cash; RDSO bogie approval.',
        },
        {
            company: 'MM Forgings', rank: 3, stance: 'TURNAROUND', segment: AUTO,
            what: "Forges and machines axle, steering and engine parts, mainly for trucks in India, the US and Europe, from Tamil Nadu, with a small electric-motor subsidiary.",
            view: "**Growing again, weighed by debt.** Revenue rose 16% in Q1 inside its ₹1,800–1,900cr guide, machined parts reached 67% and interest is falling. But net debt is ₹1,010cr, return on capital 9%, profit fell two years running, the 16,500-tonne press slipped to Q4 FY27, two subsidiaries lose money and Q1 profit included a ₹56cr land gain. The price needs about {need:MM Forgings|16}% a year against my ~12%, so follow rather than buy. 23 Oct 2026: stays follow though the price now fits; net debt of about ₹1,010cr and a 9% return on capital come first.",
            watch: 'Quarterly tonnes of 23,000–25,000 from Q2; interest toward ₹14cr a quarter; the big press starting with named customers.',
        },
        {
            company: 'AIA Engineering', rank: 4, stance: 'PRICED', segment: SPECIAL,
            what: "The world's second-largest maker of grinding media, making high-chrome balls and mill liners that wear away inside the mills of mines and cement plants; about 64% of FY26 sales were exported.",
            view: "**A superb niche, stalled.** Filed margins of 26–29%, about 20% of the world market and ₹4,516cr of net cash. But FY26 volume of 258,002 tonnes was flat for a third year, a second big mine trial slipped, FY27 capex jumped to ₹350–400cr for an office and land, and about 30% of pre-tax profit is other income. The price needs about {need:AIA Engineering|18}% a year against my ~10%.",
            watch: 'A volume guide on the Q2 call; the second mine trial result; what it does with ₹4,500cr of cash.',
        },
        {
            company: 'Happy Forgings', rank: 5, stance: 'PRICED', segment: AUTO,
            what: "Forges and machines crankshafts and other heavy parts for trucks, tractors, construction machines, cars and industrial equipment in Ludhiana, for India and export.",
            view: "**Best-in-class and delivering, fully priced.** Q1 volume rose 23% against a high-teen guide, the margin held at 31% and its first price rise in three years stuck. But ₹800–900cr of capex keeps free cash near zero, return on capital will dip to 16–17%, truck exports fell, and its CFO breached the insider-trading code in March. The price needs about {need:Happy Forgings|26}% a year against my ~20%.",
            watch: 'Trials and first sales from the heavy-parts line in Q3–Q4 FY27; truck exports recovering; margin above 30% with the full price rise.',
        },
        {
            company: 'Nelcast', rank: 6, stance: 'TURNAROUND', segment: AUTO,
            what: "Makes grey and ductile iron castings for trucks, tractors and off-road machines from three plants in Andhra Pradesh and Tamil Nadu, about a third exported, mostly to North America.",
            view: "**Spare capacity, but the profit keeps slipping.** It has 160,000 tonnes of capacity, low debt and ₹76cr of FY26 free cash. But Q1 profit per kilogram fell to ₹9.5 against a ₹15 full-year target, its newest plant ran at 21%, profit after tax fell 59%, and it fell short of its own Q1 volume promise (21,184 tonnes made against 'over 23,000'). The price needs about {need:Nelcast|15}% a year against my ~12%.",
            watch: 'Profit per kilogram above ₹14 in Q2; Pedapariya above 35%; the three new programmes ramping up.',
        },
        {
            company: 'Synergy Green', rank: 7, stance: 'TURNAROUND', segment: WIND,
            what: "Makes heavy iron castings (3–30 tonnes) for wind-turbine makers such as Vestas, Nordex and Siemens Gamesa, and gearbox makers, from Kolhapur, with its own machining.",
            view: "**Busy plant, loss-making quarter, heavy debt.** Capacity rose by half and July output ran at about 85%, with new Vestas and Nordex parts coming. But Q1 sales fell 11% to ₹75cr with a ₹10cr loss, net debt was about ₹234cr on ₹101cr of equity at June (company), and the ₹500cr FY27 target now needs nearly double Q1's sales each quarter. Its profit is too small to value it on.",
            watch: 'Q2 sales above ₹120cr with the margin back above 13%; stock falling as castings ship; how the next plant is funded.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Specialists.** **Steelcast: own**, for its returns and clean balance sheet, but Q2 tonnes and margin fell short, so the second half has to deliver. **AIA Engineering: wait** for volumes to move and for a sensible use of its cash. **Neetu Yoshi: follow** until its late new plant delivers and cash follows.",
            "**Truck and tractor parts.** **Happy Forgings: wait** for a better price; it is doing everything it promised except generating free cash. **MM Forgings: follow** as debt and interest come down and the big press starts; the price already asks for more than the ~12% I now expect. **Nelcast: wait** until profit per kilogram recovers and its promises can be checked.",
            "**Wind turbine castings.** **Synergy Green: pass** until margins recover and the debt stops rising.",
            "**What would change my view.** For the better: AIA giving a volume guide and converting a second large mine; MM Forgings cutting net debt below ₹900cr; Nelcast reaching ₹15 a kilogram; Neetu Yoshi turning profit into cash. For the worse: a sharper truck and tractor slowdown in H2 FY27, which would hit plants still filling hardest; new US duties from the overcapacity probe; or more governance slips at Happy Forgings or Steelcast.",
            "**What to watch next quarter.** Steelcast's tonnes and margin; AIA's volume guide and capex; Happy Forgings' heavy-line trials; Neetu Yoshi's half-year results; MM Forgings' tonnes and interest; Nelcast's profit per kilogram; Synergy Green's sales and debt.",
        ],
        bottomLine:
            "Own the high-return caster (Steelcast) while it proves its new guide, follow the growers with something to prove (Neetu Yoshi, MM Forgings), wait on the priced quality (AIA Engineering, Happy Forgings) and on Nelcast, and pass on Synergy Green.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/STEELCAS/' },
        { label: 'Wholesale price index, ferrochrome, alloy steel billets, steel scrap and pig iron — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Foundry industry to drive India’s manufacturing growth (IIF, IFC 2026) — The Manufacturing Frontier', url: 'https://www.themanufacturingfrontier.com/foundry-industry-to-drive-indias-manufacturing-growth-ifc-ifex-2026/' },
        { label: 'India the world’s second-largest producer of forgings (AIFI, IFC 2025) — The Manufacturing Frontier', url: 'https://www.themanufacturingfrontier.com/aifi-highlights-indias-emergence-as-the-worlds-second-largest-producer-of-forgings-at-ifc-2025/' },
        { label: 'US accounts for 26% of India’s auto-component exports in FY26 (ACMA) — KNN India', url: 'https://knnindia.co.in/news/newsdetails/sectors/us-accounts-for-26-of-indias-auto-component-exports-in-fy26-acma' },
        { label: 'Domestic CV industry to see moderate growth of 4–6% in FY27 (ICRA) — Outlook Business', url: 'https://www.outlookbusiness.com/industry/domestic-cv-industry-to-see-moderate-growth-of-4-6-in-fy27-icra' },
        { label: 'Tractor volume growth likely to moderate to 1–4% in FY27 (ICRA) — Outlook Business', url: 'https://www.outlookbusiness.com/news/tractor-industrys-volume-growth-likely-to-moderate-to-1-4-pc-in-fy27-icra' },
        { label: 'Steel demand growth expected at 9–10% in FY2027 — ICRA', url: 'https://www.icra.in/Research/ViewResearchReport/steel-demand-growth-is-expected-at-9-10-in-fy2027-supported-by-infrastructure-push/6790' },
        { label: 'India targets up to 8 GW of wind additions in FY27 (MNRE) — PSU Watch', url: 'https://psuwatch.com/newsupdates/india-targets-up-to-8-gw-wind-capacity-addition-by-fy27-on-track-official' },
        { label: 'Class 8 truck sales forecast 2027 — ACT Research', url: 'https://www.actresearch.net/resources/blog/class-8-truck-sales-forecast-2027' },
        { label: 'August 2026 Class 8 orders dip as 2027 pre-buy reaches its limit — FleetOwner', url: 'https://www.fleetowner.com/equipment/news/55402914/august-2026-class-8-truck-orders-dip-as-2027-prebuy-reaches-limit' },
        { label: 'Top-20 miners’ capex (GlobalData) — Mining Technology', url: 'https://www.mining-technology.com/analyst-comment/top-20-miners-capex/' },
        { label: 'Indian Railways plans a ₹40,000cr tender for 1 lakh wagons — Trak.in', url: 'https://trak.in/stories/indian-railways-plans-rs-40000-crore-mega-tender-for-1-lakh-freight-wagons/' },
        { label: 'And the tariff beat goes on (US Section 232 and 301 tariffs) — Holland & Knight, Jul 2026', url: 'https://www.hklaw.com/en/insights/publications/2026/07/and-the-tariff-beat-goes-on' },
        { label: 'CBAM extension to downstream products — European Parliament Research Service, Sep 2026', url: 'https://eprs.europarl.europa.eu/contents/publications/EPRS/2026/09/EPRS_ATA(2026)791461.html' },
        { label: 'AIA Engineering Annual Report FY26 (related parties, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/afbe7eeb-5b37-42ba-bcd9-81ff2a827922.pdf' },
        { label: 'AIA Engineering Q1 FY27 investor presentation (volumes, order book) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=166d6888-490b-4ba2-97fc-1548ccc81ca8.pdf' },
        { label: 'AIA Engineering rating rationale — CRISIL, Jul 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/AIAEngineeringLimited_July%2029_%202025_RR_368698.html' },
        { label: 'Happy Forgings rating rationale — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/HappyForgingsLimited_August%2007_%202026_RR_401153.html' },
        { label: 'Happy Forgings Annual Report FY26 (governance, pay) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/9cdc96ee-0da3-4847-99db-bf467f0f18c8.pdf' },
        { label: 'Steelcast rating press release — CARE, Aug 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608120857_Steel_Cast_Limited.pdf' },
        { label: 'Steelcast Annual Report FY26 (promoter pledge, land case) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/774bc25e-080d-4bde-bcfd-9e51f810438d.pdf' },
        { label: 'MM Forgings rating press release — CARE, Jun 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202606120650_M_M_Forgings_Limited.pdf' },
        { label: 'MM Forgings Annual Report FY26 (subsidiaries) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e31f840f-5376-4b4b-8979-94b887090644.pdf' },
        { label: 'Synergy Green Industries rating rationale — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SynergyGreenIndustriesLimited_August%2012_%202026_RR_399347.html' },
        { label: 'Synergy Green Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=cbec732a-7a9e-4b08-86c8-1ecc75be917a.pdf' },
        { label: 'Nelcast rating rationale — ICRA, Mar 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdf/141407' },
        { label: 'Nelcast Q1 FY27 investor presentation — NSE', url: 'https://nsearchives.nseindia.com/corporate/NELCAST1_27072026154209_IntInvPresent27072026Upload.pdf' },
        { label: 'Neetu Yoshi Annual Report FY26 (auditor’s CARO remarks, IPO use) — company website', url: 'https://www.neetuyoshi.com/pdf/Neetu-Yoshi-Limited-AR26.pdf' },
        { label: 'Neetu Yoshi H2 FY26 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3045b4f8-2c9c-4555-ad71-0873fd0cb60a.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
