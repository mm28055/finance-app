import { SectorOverview } from './types';
import { rubberBusinesses } from './rubber-businesses';
import { rubberValuationInputs } from './card-data/rubber';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const SYNTH = 'Synthetic rubber and latex — a petrochemical spread';
const RECYCLE = 'Tyre recyclers — scrap tyres in, materials and credits out';

export const rubber: SectorOverview = {
    sector: 'Rubber',
    title: 'Rubber',
    format: 'ranked',
    businesses: rubberBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: rubberValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Apcotex Inds': 15,
            'Tinna Rubber': 18,
            'GRP': 20,
        },
    },
    standfirst:
        "Three small companies that sell rubber to the people who make tyres, gloves, hoses and roads. Apcotex makes new synthetic rubber and latex from petrochemicals. Tinna and GRP recycle scrap tyres into crumb rubber, reclaimed rubber and fuel oil, and earn extra income from government recycling credits. The two models respond to oil prices in opposite ways, which is the first thing to understand about this group. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): Apcotex standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'All three had a record Q1 FY27. Apcotex says about 2 points of its 22% came from stock bought before prices rose, and it expects 15–16% on average.',
            values: {
                'Apcotex Inds': [10, 12, 13, 14, 22],
                'Tinna Rubber': [16, 18, 16, 18, 22],
                'GRP': [8, 8, 8, 6, 11],
            },
            cellNotes: {
                'Apcotex Inds': 'Q1 FY27: rivals with gas-only plants were disrupted while Apcotex could switch to coal; about 2 points were inventory gains (company).',
                'GRP': 'Q4 FY26 hit by US tariffs on its reclaim exports and costs it could not yet pass on; both reversed in Q1.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Apcotex grew 40% in Q1 on price, while its volumes fell 10–12% because exports to the Middle East were cut off.',
            values: {
                'Apcotex Inds': [12, -4, -7, 14, 40],
                'Tinna Rubber': [-4, 2, 13, 22, 20],
                'GRP': [-2, 1, 2, -10, 27],
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
            note: 'Tinna has earned 22–33% for five years; Apcotex swings with the latex cycle; GRP fell back in FY26 as its new pyrolysis plant started up.',
            values: {
                'Apcotex Inds': [35, 28, 13, 13, 20],
                'Tinna Rubber': [23, 24, 33, 28, 22],
                'GRP': [6, 9, 15, 18, 7],
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
            note: 'GRP holds the longest cycle, about 100–140 days, because it stocks scrap and sells abroad.',
            values: {
                'Apcotex Inds': [54, 48, 61, 48, 40],
                'Tinna Rubber': [74, 77, 49, 51, 64],
                'GRP': [138, 111, 127, 103, 105],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. All three sit a little below that over five years.',
            values: {
                'Apcotex Inds': [34, 76, 35, 68, 115, 70],
                'Tinna Rubber': [51, 86, 94, 47, 61, 66],
                'GRP': [8, 100, 53, 65, 73, 61],
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
            note: 'Only Apcotex has produced free cash over five years. Tinna and GRP have spent everything they earned, and more, on new plants.',
            values: {
                'Apcotex Inds': [-2.1, -6.1, 1.1, 2.5, 11.0, 2.0],
                'Tinna Rubber': [3.9, 8.5, -3.9, -6.5, -9.6, -3.4],
                'GRP': [-5.7, -1.2, -6.6, -3.8, -3.0, -4.0],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Apcotex.',
            note: 'Below zero means more cash than debt. Apcotex holds net cash; GRP carries about five years of FY26 operating profit in net debt.',
            values: {
                'Apcotex Inds': [-0.4, 0.3, 0.5, 0.4, -0.4],
                'Tinna Rubber': [1.8, 1.5, 1.3, 1.7, 1.3],
                'GRP': [4.2, 3.5, 2.2, 2.1, 5.0],
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
            note: 'Tinna and GRP are building new product lines (pyrolysis oil, recovered carbon black, polymer masterbatches). Apcotex paused after FY23 and is now building again.',
            values: {
                'Apcotex Inds': [7.1, 17.3, 2.5, 3.6, 3.1, 6.3],
                'Tinna Rubber': [4.4, 2.4, 20.1, 13.7, 20.1, 13.9],
                'GRP': [6.2, 6.7, 12.4, 12.0, 8.6, 9.4],
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
            note: 'Falling at Tinna and GRP as new plants are built ahead of their sales.',
            values: {
                'Apcotex Inds': [6.1, 2.8, 2.9, 3.6, 4.0],
                'Tinna Rubber': [3.0, 4.0, 2.8, 2.7, 2.2],
                'GRP': [3.2, 4.4, 2.9, 3.0, 2.4],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'position', label: 'Market position', description: 'Share of its market, and whether it is the only local maker.' },
            { key: 'approval', label: 'Customer approvals', description: 'How long it takes a customer to qualify a new supplier.' },
            { key: 'cost', label: 'Cost and flexibility', description: 'Access to cheap feedstock, fuel flexibility and scale.' },
            { key: 'policy', label: 'Regulatory support', description: 'Recycling credits, blending rules and import duties that favour it.' },
            { key: 'cash', label: 'Balance sheet', description: 'Whether it can fund its plans without strain.' },
        ],
        rows: [
            { company: 'Apcotex Inds', trend: 'widening', trendNote: 'Found a way to lift synthetic-rubber capacity for ₹130–140cr instead of ₹250cr, without asking for import duties.',
                grades: { position: { grade: 'A', note: 'Leading Indian NBR maker; ~30% of the market' }, approval: { grade: 'B', note: 'Tyre-cord and glove latex take 6–12 months to qualify' }, cost: { grade: 'A', note: 'Dual-fuel plants kept running when rivals stopped' }, policy: { grade: 'C', note: 'No duty protection' }, cash: { grade: 'A', note: 'Net cash; capex self-funded' } } },
            { company: 'Tinna Rubber', trend: 'widening', trendNote: 'Raised FY27 margin guidance to 18–20%; polymer masterbatch sales tripled.',
                grades: { position: { grade: 'A', note: 'One of Asia’s largest tyre recyclers; 185,000 tonnes a year' }, approval: { grade: 'B', note: 'Road contractors and tyre makers' }, cost: { grade: 'B', note: 'Own solar power; scrap sourced abroad too' }, policy: { grade: 'A', note: 'Recycling credits and road-blending rules' }, cash: { grade: 'C', note: 'Free cash negative while building' } } },
            { company: 'GRP', trend: 'stable', trendNote: 'US orders back after tariffs; recovered-carbon-black plant due October 2026.',
                grades: { position: { grade: 'B', note: 'Leader in organised reclaimed rubber' }, approval: { grade: 'B', note: 'Global tyre makers; ISCC Plus certified' }, cost: { grade: 'C', note: 'New pyrolysis plant still ramping' }, policy: { grade: 'A', note: 'Recycling credits; auto recycled-content rules' }, cash: { grade: 'D', note: 'Net debt about 5x FY26 operating profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Apcotex is the one to own.** It is the leading Indian maker of nitrile rubber (NBR), the oil-resistant rubber used in hoses, seals and gloves, with about 30% of the Indian market (imports supply most of the rest), and a large maker of synthetic latex for tyre cord, paper and construction chemicals. Its plants can run on coal or gas, so when rivals were shut by gas shortages this year it kept running and earned a record 22% margin. It holds net cash, is funding a ₹220cr expansion it expects to add about ₹600cr of revenue from 2027, and says 15–16% is the margin to expect on average. The price asks for about what I expect.",
                "**Tinna Rubber is the better growth story: follow.** One of Asia's largest tyre recyclers, it has earned 22–33% on capital for five years and targets ₹1,000cr of revenue by 2029. But part of its profit is recycling credits, and it has spent more cash than it earned for three years.",
                "**GRP: pass.** A leading reclaimed-rubber maker with a promising new pyrolysis and carbon-black business, but it carries heavy debt for its size, returned 7% on capital in FY26, and its price already assumes the new business works.",
                "**Two things to hold onto before reading the rest.** First, **the two models move opposite ways with oil**: dear oil raises Apcotex's input costs but makes recycled rubber more attractive to buyers. Second, **read recyclers' profits net of credits**: government recycling credits (EPR) are real income, but they depend on rules that can change.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Apcotex standalone, because its consolidated page on Screener stops in 2016). None of these companies publishes an order book. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Rubber reaches a tyre or glove in two ways: made new from petrochemicals, or recovered from old tyres.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**New rubber**: butadiene, acrylonitrile and styrene (all from oil) → synthetic rubber and latex (Apcotex) → tyre makers, glove makers, paper mills and construction-chemical firms. **Recycled rubber**: scrap tyres → shredded into crumb, reclaimed rubber, fuel oil and carbon black (Tinna, GRP) → road contractors, tyre makers and industry. **The profit sits where a product is hard to replace**: Apcotex as the main local NBR maker, and the recyclers where their product is approved by a big tyre maker.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Tyres, cars and gloves for Apcotex; roads (rubber mixed into bitumen), tyre makers blending recycled rubber, and industry for the recyclers. Regulation is a driver for recyclers: tyre makers must pay for the collection and recycling of old tyres, and the recyclers sell them credits for doing it.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Apcotex's cycle is the petrochemical spread** and the global glove-latex cycle, which is only now coming out of oversupply. **The recyclers' cycle runs the other way**: dear oil and dear bitumen make their products more attractive. Freight and war matter for all three this year: Apcotex's exports to the Middle East were cut off, and Tinna's imported turf materials tripled in price.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Apcotex** depends on its NBR expansion filling and on latex demand from gloves and tyre cord; **Tinna** on road-building, tyre makers' recycled content and its credits; **GRP** on US and European reclaim buyers and on its carbon-black plant being approved by tyre makers. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Synthetic rubber and latex', 'Apcotex', '10–22%', '20%', '**70%**'],
                        ['Tyre recyclers', 'Tinna, GRP', '6–22%', '7–22%', '**61–66%**'],
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
                    label: 'Lasting: the main local maker',
                    text: "**Apcotex** is the main Indian NBR maker, with about 30% of a market otherwise supplied by imports, so Indian buyers get shorter lead times and less stock to carry than if they imported. Its dual-fuel plants proved their worth this year. Customers in tyre cord and gloves take 6–12 months to approve a new latex supplier.",
                },
                {
                    label: 'Lasting but policy-dependent: recycling credits',
                    text: "**Tinna** and **GRP** earn credits for recycling tyres collected in India, and rules requiring recycled content in cars from FY28 add demand. Tinna's scale (185,000 tonnes of crushing a year) gives it the best access to scrap. These are real advantages, but they rest on rules.",
                },
                {
                    label: 'Wearing: basic shredding',
                    text: "Anyone can shred a tyre. The recyclers' margins last only if they keep moving to harder products: fine rubber powder, polymer masterbatches and recovered carbon black. If they stand still, small local shredders undercut them.",
                },
                {
                    label: 'Barely a moat: GRP’s balance sheet',
                    text: "**GRP** has good products and certifications, but its net debt is about five times FY26 operating profit, which leaves little room if the carbon-black plant is slow to win approvals.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In synthetic rubber, **Synthos**, **Zeon**, **Kumho** and Chinese makers supply India through imports; Malaysian and Chinese latex makers compete in gloves. In recycling, dozens of small local shredders and reclaim makers compete on basic products.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? All three had a record quarter, so the question is what a normal year looks like.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: what management calls normal',
                    text: "**Apcotex** says 15–16% on average, well below Q1's 22%. **Tinna** raised its FY27 guidance to 18–20% and declined to promise the 22% of Q1. **GRP** targets 10–14% in reclaimed rubber, 10–15% in plastics and 18–20% in pyrolysis once carbon black is running.",
                },
                {
                    label: 'Cyclical: this year’s supply shock',
                    text: "Apcotex's 22% came partly from rivals being shut by gas shortages and about 2 points from stock bought before prices rose; management said so plainly. Tinna's road business benefits from dear bitumen, which will ease when oil does.",
                },
                {
                    label: 'Not structural: credits and one-offs',
                    text: "Tinna sold ₹25cr of credits it had built up in earlier years; GRP earned ₹4.9cr of credits in Q1. Credits count at the profit line, so strip them out when comparing years.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**GRP** holds about 100 days of working capital, mostly scrap stock and export receivables, though it cut this by 8 days in Q1.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Tinna**'s cycle lengthened from 49 to 64 days over two years as it grew abroad. **Apcotex** built stock this year at higher raw-material prices.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Apcotex**'s cycle has fallen to 40 days and it turned more than all of FY26's operating profit into cash (115%).",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Recyclers must stock scrap tyres when they are available; synthetic-rubber makers hold petrochemicals bought at market prices. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: import substitution',
                    text: "**Apcotex** is spending about ₹220cr on new capacity due in April–June 2027, which it expects to add about ₹600cr of revenue. Its NBR plant runs full, and India still imports much of what it uses.",
                },
                {
                    label: 'Growth driver: recycling rules and roads',
                    text: "**Tinna** targets ₹670–700cr of revenue in FY27 and ₹1,000cr by 2029, with margins above 18%. Its crushing capacity rises 27% to 235,000 tonnes this year. **GRP** guides about 20% revenue growth in FY27.",
                },
                {
                    label: 'Growth driver: new products',
                    text: "**GRP**'s recovered-carbon-black plant is due in October 2026, with tyre-maker approvals expected by Q4 FY27; its pyrolysis business targets ₹250–300cr of revenue at peak. **Tinna** starts selling pyrolysis oil in Q2 FY27 and recovered carbon black in Q3.",
                },
                {
                    label: 'Growth driver: going abroad',
                    text: "**Tinna** has plants or projects in Oman, South Africa, Chile and Saudi Arabia. Oman earns an 8.5% margin; Saudi Arabia keeps being delayed by the regional conflict.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Apcotex** delivered its best quarter ever and remained in net cash. **Tinna** raised its margin guidance and completed its Haryana expansion on schedule. **GRP** recovered its US volumes and passed on Q4's cost increases.",
                },
                {
                    label: 'Cautious',
                    text: "**Apcotex** would not promise another quarter like Q1 and warned that Middle East exports depend on the conflict ending.",
                },
                {
                    label: 'Missed',
                    text: "**Tinna**'s Saudi plant has been delayed again. **GRP** lost money in Q4 FY26 when US tariffs hit its exports.",
                },
                {
                    label: 'Mixed',
                    text: "**GRP**'s growth rests on a plant that is not yet commissioned and products not yet approved by customers.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Apcotex to compound at about 15% as its new capacity fills, Tinna at 15–20% if it keeps moving up the product ladder, and GRP to swing widely with its carbon-black plant.** Q1 FY27 was a peak quarter for all three; FY27 as a whole will be lower.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Apcotex Inds', 'New NBR and latex capacity from 2027; margin back to 15–16%', '8% / **15%** / 20%'],
                        ['Tinna Rubber', 'Capacity, higher-value products, recycling credits', '10% / **18%** / 25%'],
                        ['GRP', 'Reclaim volumes; carbon black approved or not', '0% / **20%** / 35%'],
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
                    label: 'The peak quarter',
                    text: "All three printed record margins in Q1 FY27 on conditions that will not last. Apcotex said so; Tinna declined to promise the rate; GRP's new guidance is above anything it has earned for a full year.",
                },
                {
                    label: 'Oil prices',
                    text: "A fall in oil would help Apcotex's costs but make recycled rubber less attractive against new rubber and bitumen, which hurts Tinna and GRP. A rise does the opposite.",
                },
                {
                    label: 'Rules can change',
                    text: "Recycling credits and recycled-content rules support both recyclers. A change to the credit price or to scrap-tyre import rules would hit profits directly.",
                },
                {
                    label: 'New plants and debt',
                    text: "**GRP**'s carbon-black plant must win tyre-maker approvals, and its debt is high for its size. **Tinna**'s projects abroad add freight and political risk. **Apcotex**'s expansion is self-funded.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **13% at 20x, 18% at 30x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Apcotex** holds net cash, so it is a little cheaper than its P/E suggests. **GRP**'s debt makes it dearer than even its P/E does.",
                },
                {
                    label: 'Reasonable',
                    text: "**Apcotex** and **Tinna**: prices that ask for about the growth I expect. Remember that both are on record margins today.",
                },
                {
                    label: 'Stretched',
                    text: "**GRP**: its FY26 profit was so small that the price rests on the carbon-black plant working.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Apcotex Inds', rank: 1, stance: 'COMPOUNDER', segment: SYNTH,
            what: "The leading Indian maker of nitrile rubber (NBR) and a leading maker of synthetic latex for tyre cord, paper coating, construction chemicals and medical gloves.",
            view: "**The main local NBR maker, with a strong balance sheet.** A record 22% margin in Q1 (about 2 points from stock gains), net cash, and a ₹220cr expansion expected to add ₹600cr of revenue from 2027. Management expects 15–16% margins on average. The price asks for about my ~15% estimate.",
            watch: 'Margins settling toward 15–16%; the new capacity starting in 2027; Middle East exports resuming.',
        },
        {
            company: 'Tinna Rubber', rank: 2, stance: 'SCALEUP', segment: RECYCLE,
            what: "One of Asia's largest tyre recyclers, turning scrap tyres into crumb rubber for roads, fine rubber powder and reclaimed rubber for tyre makers, polymer masterbatches and steel abrasives, with plants abroad.",
            view: "**The best returns in the group and a clear plan.** 22–33% return on capital for five years, margin guidance raised to 18–20%, and ₹1,000cr of revenue targeted by 2029. But free cash has been negative for three years and credits flatter profit. The price asks for about my ~18% estimate.",
            watch: 'Pyrolysis oil and carbon-black sales starting; free cash turning positive; the Saudi project.',
        },
        {
            company: 'GRP', rank: 3, stance: 'TURNAROUND', segment: RECYCLE,
            what: "A leading maker of reclaimed rubber from scrap tyres, mostly exported, with recycled plastics and a new pyrolysis business making fuel oil and, from late 2026, recovered carbon black.",
            view: "**A recovery priced as a success.** Q1 margin rose to 11% as US orders returned, but it earned 7% on capital in FY26 and net debt is about five times FY26 operating profit. The price needs far more than my ~20% estimate.",
            watch: 'The carbon-black plant in October 2026 and tyre-maker approvals; net debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Synthetic rubber and latex.** **Apcotex: own.** The main Indian NBR maker, with net cash and capacity coming.",
            "**Tyre recyclers.** **Tinna Rubber: follow.** The best returns and a clear plan, but the cash has not yet followed. **GRP: pass.** Good products, too much debt, and a price that assumes its new plant works.",
            "**What would change my view.** For the better: GRP's carbon black winning tyre-maker approvals, or Tinna turning free cash positive. For the worse: a change to recycling-credit rules, or a glut in synthetic latex.",
            "**What to watch next quarter.** Whether Apcotex's margin holds above 15%; Tinna's new products; GRP's plant start-up and debt.",
        ],
        bottomLine:
            "Own the main local maker (Apcotex Inds), follow the recycler with the best returns (Tinna Rubber), and pass on GRP until its new plant and balance sheet prove themselves.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/APCOTEXIND/' },
        { label: 'Wholesale price index: synthetic rubber, rubber crumb, reclaimed rubber — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
