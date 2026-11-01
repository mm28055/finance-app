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
            'Apcotex Inds': 12,
            'Tinna Rubber': 15,
            'GRP': 20,
        },
    },
    standfirst:
        "Three small companies that sell rubber to the people who make tyres, gloves, hoses and roads. Apcotex makes new synthetic rubber and latex from petrochemicals. Tinna and GRP recycle scrap tyres into crumb rubber, reclaimed rubber and fuel oil, and both earn a large slice of their profit from government recycling credits whose value is set by regulation. The two models respond to oil prices in opposite ways, and all three printed a record quarter in Q1 FY27 that should not be annualised. This note draws on both of the last two earnings calls, the FY26 annual reports, the latest presentations and rating reports for each company, and industry work by ICRA, CRISIL and the environment ministry. Every chart uses filed results and five years of history.",
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
                grades: { position: { grade: 'A', note: 'Leading Indian NBR maker; ~30% of the market' }, approval: { grade: 'B', note: 'Tyre-cord and glove latex take 6–12 months to qualify' }, cost: { grade: 'A', note: 'Dual-fuel plants kept running when rivals stopped' }, policy: { grade: 'C', note: 'No duty protection' }, cash: { grade: 'A', note: 'Net cash; about ₹150cr of debt planned for capex; rated AA-' } } },
            { company: 'Tinna Rubber', trend: 'widening', trendNote: 'Masterbatch capacity to 18,000 tonnes on time and sales tripled; margin guidance kept at “18% plus”; pyrolysis a quarter or more late.',
                grades: { position: { grade: 'A', note: 'One of Asia’s largest tyre recyclers; 185,000 tonnes a year' }, approval: { grade: 'B', note: 'Road contractors and tyre makers' }, cost: { grade: 'B', note: 'Own solar power; scrap sourced abroad too' }, policy: { grade: 'A', note: 'Recycling credits and road-blending rules' }, cash: { grade: 'C', note: 'Free cash negative while building' } } },
            { company: 'GRP', trend: 'stable', trendNote: 'US orders back after tariffs; recovered-carbon-black plant due October 2026.',
                grades: { position: { grade: 'B', note: 'Leader in organised reclaimed rubber' }, approval: { grade: 'B', note: 'Global tyre makers; ISCC Plus certified' }, cost: { grade: 'C', note: 'New pyrolysis plant still ramping' }, policy: { grade: 'A', note: 'Recycling credits; auto recycled-content rules' }, cash: { grade: 'D', note: 'Net debt about 5x FY26 operating profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Apcotex is the one to own.** It is India's only maker of nitrile rubber (NBR, the oil-resistant rubber in hoses and seals), nitrile latex for gloves and high-styrene rubber, and a large maker of synthetic latex for paper, carpets, construction and tyre cord. Its NBR plant has run full for several quarters yet meets only about 30% of Indian demand; imports supply the rest. It is spending about ₹220cr, mostly on a cheap debottlenecking that nearly doubles NBR capacity from about April 2027, and expects about ₹600cr of extra revenue. Q1 FY27's 22% margin was a windfall (rivals shut by gas shortages, about 2 points of stock gains), and management itself says 15–16% is the average to expect. **The weak spots are volume and timing:** Q1 volumes fell 10–12% as Middle East exports stalled, management says FY27 volume may not grow at all, the NBR start has slipped a quarter, and the government did not notify the import duty on NBR its trade regulator recommended. It holds net cash, ICRA rates it AA-, and its annual report is the cleanest in the group. **The price needs about {need:Apcotex Inds|13}% a year earnings growth; I expect about 12%, close enough to own.**",
                "**Tinna Rubber: follow.** India's largest recycler of old tyres, it grew revenue from ₹363cr in FY24 to ₹542cr in FY26 and has earned 22–33% on capital for five years. But about ₹29cr a year of its profit, roughly 40% of FY26's ₹72cr pre-tax profit, is recycling-credit income that sells at a floor price set by the regulator and could change with the rules; without credits, Q1's 22% margin was nearer 18%. Free cash flow has been negative for three years, so it raised ₹78.7cr of new shares in FY26; CARE rates it BBB (raised from BBB- on 1 October 2026); Q1 revenue grew 20%, short of the 24–29% its guide needs; and its pyrolysis, South Africa and Saudi projects are each a quarter or more late. The books also need watching: sales to promoter-linked firms, an annual report reissued to correct errors and a new CFO in March. **A lower price alone would not make it an own; that needs profit that grows without credits and free cash turning positive.** **The price needs about {need:Tinna Rubber|18}% a year; I now expect about 15%, which makes it {label:Tinna Rubber|full}.** 1 Nov 2026: stays follow after the Q2 call. Revenue rose 31% and profit 45%, the ₹700cr FY27 guide held, pyrolysis oil began selling, and credits fell to about ₹4.6cr in Q2 from ₹6.7cr in Q1, so more of the profit now comes from products. But South Africa's crumb line slipped another three to four months and free cash has not yet turned.",
                "**GRP: pass.** India's largest reclaimed-rubber maker, selling to 8 of the world's top 10 tyre makers, it is halfway through a debt-funded move into tyre pyrolysis and recovered carbon black. In FY26 its ₹20cr of credit income was more than its whole pre-tax profit, borrowings rose to ₹208cr, CRISIL cut its rating to BBB+ and a planned share sale lapsed. Its disclosure is careless too: the directors' report called a 76% fall in standalone profit a 5% hit. Q1 FY27's recovery to an 11% margin is real, but the carbon-black plant is four to eight months late and needs several quarters of tyre-maker approval after it starts. **The price needs about {need:GRP|39}% a year for a decade; I expect about 20%.**",
                "**Three things to hold onto before reading the rest.** First, **the two models move opposite ways with oil**: dear oil raises Apcotex's input costs (which it passes on with a lag) but makes recycled rubber and rubberised bitumen cheaper than the new materials they replace. Second, **read the recyclers' profits net of credits**: recycling credits (EPR, extended producer responsibility) are real cash income, but their price sits at a regulatory floor and the rules can change. Third, **Q1 FY27 was a windfall quarter for all three**, so the trailing profits behind today's prices are flattered.",
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
                "Rubber reaches a tyre or glove in two ways: made new from petrochemicals, or recovered from old tyres. The three companies here sit on opposite sides of that line, so the same news (dear oil, a war, a new rule) can help one and hurt another.",
                "All three had their best quarter ever in Q1 FY27, and the prices of what they sell rose sharply in the same quarter (second table below). **The main job of this section is to separate what is lasting from what came with that quarter, and what the companies earn from selling products from what they earn from regulation.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**New rubber**: butadiene, acrylonitrile and styrene (all made from oil) → synthetic rubber and latex (**Apcotex**) → makers of hoses and seals, tyre cord, gloves, coated paper, carpets and construction chemicals. Apcotex names ITC, Asian Paints, UltraTech, Pidilite, JK Paper, MRF and Parker Hannifin among its customers. **Recycled rubber**: scrap tyres → shredded crumb → fine rubber powder, reclaimed rubber, rubberised bitumen, fuel oil and recovered carbon black (**Tinna**, **GRP**) → road builders, tyre makers and industry. Tyres take about half of all the rubber used in India (Infomerics, citing government data), so tyre makers are the swing buyer for all three companies. **The profit sits where a product is hard to replace**: Apcotex as the only Indian maker of nitrile rubber, and the recyclers where a big tyre maker has approved their product. For now, a large part of the recyclers' profit also sits in recycling credits, which come from regulation rather than from customers.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India is the world's third-largest natural-rubber producer, but it still imports 35–40% of the roughly 14 lakh tonnes it uses and about a third of its synthetic rubber (Infomerics, 2025). In nitrile rubber (NBR) alone, Apcotex's 21,000 tonnes meet only about 30% of Indian demand, so the market is roughly 70,000 tonnes. Tyres, the biggest buyer, are forecast by **ICRA** to grow 5–7% in volume in FY27 and by **CRISIL Ratings** 4–5%. CRISIL also expects tyre makers' margins to fall from 14.2% to 11.5–12% in FY27 because natural rubber rose from about ₹220 to ₹275 a kilo, and squeezed tyre makers look harder for cheaper inputs: new rubber costs ₹240–260 a kilo against about ₹50 for recycled rubber (Tinna). Roads are the second engine: the highways authority's use of crumb-rubber-modified bitumen rose from 1.14 lakh tonnes in FY23 to 2.77 lakh tonnes in FY25. For Apcotex, gloves matter too: US tariffs on Chinese gloves reached 100% in January 2026, which moves orders to its customers in Malaysia, Thailand and Vietnam.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Apcotex's cycle is the petrochemical spread** and the global glove-latex cycle. After COVID everyone added latex capacity, Apcotex's margin sat at 8–10% in FY24–FY25, and it jumped to 22% in Q1 FY27 when the West Asia war shut rivals. **The recyclers' cycle runs the other way**: bitumen prices \"almost doubled\" after the war (Tinna), which made rubberised bitumen the cheaper road material in Q1. **Policy is the bigger lever for the recyclers.** Since FY2025-26, tyre makers and importers must buy recycling (EPR, extended producer responsibility) certificates equal to 100% of the weight of the tyres they sold two years earlier; the certificates trade at the regulator's floor, about ₹2,500 each (about ₹2.5 a kilo). The environment ministry's technical committee has also recommended that refiners use crumb rubber in 3% of bitumen output in FY27, 4% in FY28 and 5% from FY29, which I estimate at 1.7–2.8 lakh tonnes of crumb a year; **it is a recommendation, not yet law.** For Apcotex the policy news was bad: the finance ministry did not notify the anti-dumping duty on imported NBR that the trade regulator (DGTR) recommended in September 2025.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Apcotex** depends on its NBR expansion filling from about April 2027 without any duty protection, on glove-latex demand holding as new Malaysian capacity starts, and on margins settling at the 15–16% management calls normal rather than falling back to 10%. **Tinna** depends on road building and the proposed crumb-rubber mandate, on tyre makers buying more fine powder and reclaim, on its pyrolysis and carbon-black lines working, and on recycling-credit rules staying as they are. **GRP** depends on reclaim buyers in the US and Europe (about 60% of its export revenue), on tyre makers approving its recovered carbon black, and on credit income while its pyrolysis business still loses money. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Free cash flow (FY26)', 'Credit income (FY26)'],
                    rows: [
                        ['Synthetic rubber and latex', 'Apcotex', '10–22%', '20%', '**70%**', '₹159cr', 'None'],
                        ['Tyre recyclers', 'Tinna, GRP', '6–22%', '7–22%', '**61–66%**', 'Tinna −₹52cr; GRP −₹16cr', 'Tinna about ₹29cr; GRP ₹20cr'],
                    ],
                    note: 'Free cash flow is operating cash minus spending on fixed assets (Screener). Credit income is from the companies’ calls. Apcotex earns about two-thirds of the operating profit of the three, with no regulatory income.',
                },
                {
                    caption: 'The sector in numbers, from industry sources',
                    columns: ['Measure', 'Figure', 'Who says so'],
                    rows: [
                        ['Natural rubber made in India, FY26', 'About 9.05 lakh tonnes, up 3.4%', 'Rubber Board, via Helixtap (Jun 2026)'],
                        ['Natural rubber used, and imported', 'About 14.2 lakh tonnes a year; 35–40% imported', 'Infomerics (2025)'],
                        ['Synthetic rubber imported', 'About a third of what India uses', 'Infomerics (2025)'],
                        ['Indian NBR market', 'About 70,000 tonnes; Apcotex about 30%, the rest imported', 'Apcotex Q1 FY27 call; my calculation'],
                        ['Tyre industry revenue, FY26', 'About ₹1.36 lakh crore', 'CRISIL Ratings (Aug 2026)'],
                        ['Tyre volume growth, FY27', '5–7% (ICRA); 4–5% (CRISIL)', 'ICRA (Mar 2026); CRISIL Ratings (Aug 2026)'],
                        ['Tyre makers’ margin', '14.2% in FY26 → 11.5–12% in FY27 → 13–13.5% in FY28', 'CRISIL Ratings (Aug 2026)'],
                        ['Reclaimed rubber used in India, CY2025', 'Up 7% (up 15% in tyres) against 4% for all rubber; GRP about 21% of the market', 'GRP annual report and presentation'],
                        ['Crumb-rubber bitumen on national highways', '1.14 lakh tonnes (FY23) → 2.77 lakh tonnes (FY25)', 'Environment ministry committee (Jul 2025)'],
                        ['Proposed crumb-rubber rule for refiners', '3% of bitumen (FY27), 4% (FY28), 5% (FY29); not yet notified', 'Environment ministry committee (Jul 2025)'],
                        ['Tyre recycling credits', '100% of tyres sold two years earlier; over 500 registered recyclers; credits at the floor price', 'Central Pollution Control Board, via Tinna annual report'],
                        ['Duty on imported NBR', 'Recommended in Sep 2025; not notified', 'DGTR; ICRA on Apcotex (Aug 2026)'],
                    ],
                    note: 'Industry figures are the forecasters’ own. The NBR market size is my estimate from Apcotex’s capacity and share.',
                },
                {
                    caption: 'Prices of what they sell: India wholesale price index (Q1 FY24 = 100)',
                    numericColumns: [2, 3, 4, 5],
                    columns: ['Product', 'Main seller here', 'Q1 FY26', 'Q4 FY26', 'Q1 FY27', 'Operating margin, Q1 FY27'],
                    rows: [
                        ['Synthetic rubber', 'Apcotex', '118', '120', '128', '22%'],
                        ['Rubber crumb', 'Tinna', '114', '116', '127', '22%'],
                        ['Reclaimed rubber', 'GRP', '107', '118', '125', '11%'],
                    ],
                    note: 'Office of the Economic Adviser, quarterly averages. All three prices jumped in Q1 FY27, and recycled rubber rose about as fast as new rubber.',
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
                    label: 'Lasting: the only local maker',
                    text: "**Apcotex** is the only Indian maker of nitrile rubber, nitrile latex and high-styrene rubber (ICRA). Its NBR plant has run full for several quarters, so its 30% share is set by capacity, not by demand; Indian buyers who switch from imports get shorter lead times and carry less stock. Some grades are made for two or three customers \"that nobody else in the world makes\", about 25 new products have been added since COVID, and no customer is 10% of revenue. Its plants can run on gas or coal, and it did not lose a day in March–April 2026 while many Gujarat plants cut output by half. **This is a real but modest moat**: it protects volume and customer loyalty, not price.",
                },
                {
                    label: 'Pricing power: pass-through, not premium',
                    text: "The evidence is in two years of numbers. In FY26 **Apcotex** sold 14% more volume for only 3.5% more revenue because prices fell with raw materials; in Q1 FY27 volume fell 10–12% but revenue rose 40% because prices rose. ICRA describes the pricing as a formula that follows raw-material costs with a lag. **GRP** resets prices quarterly, half-yearly or yearly, so a 43% jump in one raw material in FY26 hurt its margin until the April 2026 resets. **Tinna** revises prices quarterly with a one-quarter lag (CARE). **None of the three can hold a price above its costs for long; the best they can do is pass costs on quickly.**",
                },
                {
                    label: 'Lasting but policy-dependent: scale and recycling credits',
                    text: "**Tinna** has 1.85 lakh tonnes of crushing capacity across five Indian sites plus Oman, rising to 2.35 lakh tonnes, and can recycle car tyres as well as truck tyres, which widens its feedstock. **GRP** holds about 21% of Indian reclaimed rubber and about 35% of India's reclaim exports, sells to 8 of the world's top 10 tyre makers, and gained about a point of domestic share in FY26. Both earn recycling credits, but the credits trade at the regulator's floor price and supply is ample: over 500 recyclers are registered, and 11.69 lakh tonnes of certificates had been generated by March 2026. **Scale is a real edge; the credits are income, not a moat.**",
                },
                {
                    label: 'Switching costs: slow approvals',
                    text: "Tyre makers take \"2 to 5 years\" and several audits to approve a recycled material (Tinna), and GRP says its recovered carbon black will need \"several quarters\" after production starts. That slowness protects the incumbents once they are in. **GRP**'s approvals with most of the big global tyre makers and its ISCC Plus certification (an international standard that traces recycled content) are the strongest example. **Tinna**'s customer base is widening in a less comfortable way: its top ten customers were about 36% of FY25 sales, but in FY26 one customer bought ₹54.4cr, more than 10% of standalone revenue, where none had before.",
                },
                {
                    label: 'Wearing: basic shredding and cheap imports',
                    text: "Tinna's management concedes that the technology and capex for basic crumb are \"within reach of many people\", and Down To Earth reports illegal pyrolysis units still operating and one customs code covering all tyre forms. GRP learnt during the US tariff episode that customers can move volumes to other suppliers, and closed its polymer-composites business. Even **Apcotex** saw export customers in Turkey and Egypt buy Chinese latex for the first time when its costs rose. **The recyclers' margins last only if they keep moving to harder products**: fine powder, polymer masterbatches and approved carbon black.",
                },
                {
                    label: 'Thin: GRP’s balance sheet',
                    text: "**GRP** has good products and approvals, but borrowings rose from ₹113cr in FY24 to ₹208cr in FY26, net debt is over four times its operating profit of the last year, and CRISIL cut its rating to BBB+ in December 2025. A planned share sale lapsed, and management says faster expansion in Gujarat needs debt to come down first. **A weak balance sheet turns a slow approval into a funding problem.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In synthetic rubber, **LG Chem**, **Kumho**, **Zeon**, **Arlanxeo** and Chinese and Russian makers supply India through imports; Malaysian and Chinese latex makers compete in gloves, and a new Malaysian nitrile-latex plant was starting in July–August 2026. In recycling, dozens of small shredders and reclaim makers compete on basic products, and Indian Oil makes most of India's crumb-rubber bitumen.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? All three had a record quarter, so the question is what a normal year looks like. The cost structures differ: materials were 66% of Apcotex's FY26 sales but 51–52% of the recyclers', while power and factory costs were 20% of GRP's sales. So Apcotex lives on the gap between its selling price and petrochemical prices, and the recyclers on scrap prices, running costs and credits.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: what management calls normal',
                    text: "**Apcotex** says it is \"quite confident of 15%, 16% average margins\", against 8–10% in FY24–FY25 and 12% in FY26. FY26 was held down by about ₹16cr of one-off charges in the annual report (an ₹8cr provision for a lawsuit, ₹4.8cr for the new labour codes and ₹3.2cr for gratuity changes); without them the margin was about 13%. **Tinna** says 18–20% \"can be delivered in a business like ours\" but kept its formal FY27 guidance at \"18% plus\"; it earned 15–17% in FY24–FY26. **GRP** targets 10–14% in reclaimed rubber (9–10% lately), 10–15% in plastics and 18–20% in pyrolysis once carbon black is approved, around FY28. **I treat 15% (Apcotex), 17–18% including credits (Tinna) and 9–11% (GRP) as normal.**",
                },
                {
                    label: 'Cyclical: this year’s supply shock',
                    text: "Apcotex's 22% came from rivals shut by gas shortages and the closure of the Strait of Hormuz, plus about 2 points of gains on stock bought before prices rose; management said \"we wouldn't annualize this level of benefit\". Tinna's road business benefits from dear bitumen, which will ease when oil does. **GRP**'s gross margin actually fell from 50.1% to 48.3% as raw-material costs rose 31%; its operating margin rose because volumes grew 24% and fixed costs were spread over more sales. **The Q1 margins of Apcotex and Tinna should not be annualised; GRP's recovery looks more durable because it came from volume, not price.**",
                },
                {
                    label: 'Not structural: credits and one-offs',
                    text: "**Tinna** earned about ₹29cr of credits in both FY25 and FY26, roughly 40% of FY26's ₹72cr pre-tax profit. It books them on accrual once it is reasonably certain of selling them, and ₹19.1cr of unsold credits sat on the balance sheet in March 2026. In Q1 it sold about 1 lakh past credits at about ₹2,500 each, about ₹25cr by management's count, which was cash for profit already booked, while ₹6.75cr of new credits inside Industrial revenue lifted the Q1 margin from about 18% to 22%. An analyst argued that FY26 pre-tax profit fell without credits and management replied \"Your numbers are correct\". **GRP** earned ₹43.4cr of credits in FY25 (₹21.4cr of it for earlier years) and ₹20.2cr in FY26, more than its whole FY26 pre-tax profit of about ₹8cr; its ₹4.9cr in Q1 exceeded the quarter's ₹4.2cr net profit. **Strip credits out when comparing years.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**GRP** has the longest cycle, 105 days at March on filed figures (75 days of receivables and 69 of stock against 38 of payables), because it stocks scrap and sells abroad. It says it cut this to 86 days by June on its own measure, but CRISIL found its bank working-capital limits about 90% used over a year. **With little headroom, any delay in collections has to be funded with more debt.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Tinna**'s cycle lengthened from 51 to 64 days in FY26 as receivables went from 30 to 45 days and stock from 83 to 99 days; management blames the longer credit terms in polymer masterbatches and says its blended figure of about 50 days will not improve. **Apcotex** holds the same days of stock at much higher raw-material prices, so its net cash fell from about ₹70cr in March to about ₹40cr in June (the official transcript also records \"about 30 crores\" in the same answer). **Neither is alarming, but both use cash as they grow.**",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Apcotex**'s cycle fell to 40 days in FY26, its best in a decade (62 days of receivables, 49 of stock, 70 of payables), and it turned 115% of FY26's operating profit into cash. But about ₹50cr of that came from releasing working capital while raw materials were cheap, and management expects part of it to reverse this year. **FY26's cash flow flatters the normal year.**",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Recyclers must stock scrap tyres when they are available and wait for export payments; synthetic-rubber makers hold petrochemicals bought at market prices. Tinna imported about 55% of its raw material in FY25, which adds shipping time to its stock. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Apcotex Inds', 'Net cash about ₹40cr in June, down from about ₹70cr in March as dearer raw materials tied up stock; 15–20% of the ₹220cr capex spent, self-funded so far, with borrowing to start in the next couple of quarters (ICRA expects about ₹150cr of term debt)', 'Net cash ₹67cr at March; ICRA AA- (Stable), reaffirmed Aug 2026'],
                        ['Tinna Rubber', '₹45cr of capex in H1 out of about ₹100cr for FY27–FY28, mostly from own cash; up to ₹250cr more over three years for the Andhra complex; about 1 lakh past credits sold for about ₹25cr of cash in Q1', 'Debt ₹111cr at September (₹121cr at March); CARE BBB (Stable) since 1 Oct 2026'],
                        ['GRP', 'FY27 capex ₹90–100cr; ₹91cr invested in pyrolysis by June; reducing debt is “not entirely in our hands”; no word on the lapsed share sale', 'Net debt ₹207cr at March; debt 1.15 times equity; CRISIL BBB+, cut in Dec 2025'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. None of the three announced a buyback.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company did against what it promised on the Q4 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: import substitution',
                    text: "**Apcotex** is spending about ₹220cr (ICRA says ₹210cr, about ₹150cr of it borrowed): ₹130–140cr on a debottlenecking that nearly doubles its 21,000-tonne NBR capacity from about April 2027, and the rest on synthetic latex by about June 2027. In February the target was the end of FY27, so it has slipped a quarter, and the final date comes on the Q3 call. Management expects \"probably about ₹600cr\" of extra revenue, roughly 40% more throughput; on my maths that is ₹70–90cr of extra operating profit a year from FY29 at a 12–15% margin, a payback of about three years. Only 15–20% was spent by July and firm orders were just ₹1.57cr in March, so most equipment arrives in Q3–Q4 FY27. **The design is cheap and sensible; the risk is timing, and there is little growth before FY28** (management sees 5–10% more output from current plants at best).",
                },
                {
                    label: 'Growth driver: roads and recycling rules',
                    text: "**Tinna** guides FY27 revenue of about ₹700cr, operating profit of about ₹126cr and net profit of about ₹70cr (Q2 call, 26 October 2026), and holds a \"Vision 2029\" of ₹1,000cr of revenue, 25%-plus revenue growth, 33%-plus profit growth and 30%-plus return on capital; the same targets were \"Vision 2028\" a year ago. Crushing capacity was to rise from 1.85 to 2.35 lakh tonnes this year, but the Q2 call put India still at 1.85 lakh tonnes (85–90% used), with further India capacity to come from the new Andhra complex and the 24,000-tonne Saudi plant held up by the West Asia conflict; fine-powder capacity reaches 20,000 tonnes in Q3 FY27, and it has a 15,000-tonne rubberised-bitumen order for FY27. If the crumb-rubber rule for refiners is notified, it would be the biggest single lift to demand. **₹1,000cr by FY29 needs about 23% a year from FY26, which its record makes plausible; the profit target is harder, because credit income has been flat at about ₹29cr.**",
                },
                {
                    label: 'Growth driver: pyrolysis and carbon black',
                    text: "**GRP**'s pyrolysis arm, Pyrova, started a 15,000-tonne reactor in October 2025 and goes to 45,000 tonnes this year, with another 30,000 tonnes and a 12,000-tonne carbon-black plant planned in Gujarat for FY28. Its carbon-black unit starts in October 2026, meaningful sales come in Q4 FY27, and approval by tyre makers takes \"several quarters\" after that; the target is ₹250–300cr of revenue at an 18–20% margin (also stated as 15–20%). Pyrova lost ₹8.5cr after tax from September 2025 to March 2026. **Tinna**'s ₹40cr pyrolysis plant now sells oil from Q2 and carbon black from Q4 FY27, guided at ₹50–60cr of FY27 revenue and 15–19% margins. **On my maths GRP's Pyrova pays back in about four years only after approval; until then its oil sells as a cheap furnace fuel.**",
                },
                {
                    label: 'Growth driver: reclaim volumes and going abroad',
                    text: "**GRP** expects reclaim volumes to grow in the mid-teens for three years with the margin rising to 10–14%, taking reclaim capacity from about 88,000 to 110,000 tonnes; 38% of capacity already runs on a new process that saves about 5% on cost. CRISIL is more cautious, at 9–11% revenue growth a year. **Tinna** has Oman (₹30cr of revenue in FY26, ₹9cr in Q1 at an 8.5% margin), a South African joint venture whose second phase starts in Q2 or Q3, a 24,000-tonne Saudi plant due toward the end of 2026, and a new Chile subsidiary for sourcing tyres. **Abroad adds volume but at lower margins and with regional risk.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Apcotex** hoped on the Q4 call for FY27 margins \"better than the average of last year\" (12%) and delivered 22.3% in Q1, with net cash intact and its AA- rating reaffirmed. **Tinna** commissioned its 18,000-tonne masterbatch capacity on schedule and tripled masterbatch sales to ₹12cr. **GRP** said in May that margins would recover as US volumes returned and delivered 11% against a 6–8% run-rate, with its pyrolysis reactor running continuously.",
                },
                {
                    label: 'Cautious',
                    text: "**Apcotex** said FY27 volumes may not grow at all, refused to annualise Q1, and deferred its second nitrile-latex expansion by another \"three, four months\" because of new capacity in China and Malaysia. **GRP** said deleveraging is \"not entirely in our hands\" and pushed tyre-maker approval of carbon black into FY28 language.",
                },
                {
                    label: 'Missed',
                    text: "**Apcotex**'s Q1 volume fell 10–12% against a Q4 hope of low-double-digit growth for the year, because Middle East exports stalled. **Tinna**'s Q1 revenue grew 20%, below the 24–29% its full-year guide needs, and its pyrolysis, South Africa and Saudi projects each slipped by one to three quarters. **GRP**'s pyrolysis expansion was expected by CRISIL in May–June 2026 and is now October, and two Q4 promises — pyrolysis credits \"definitely by H1\" and a second new-process reclaim line by June — were not mentioned on the Q1 call.",
                },
                {
                    label: 'Mixed',
                    text: "**Tinna**'s messages were loose: margin guidance was \"18% plus\" and \"18–20%\" on the same call, the COO said EBITDA was \"exceeding INR50 crores\" when the quarter's was about ₹34cr, and steel-abrasive volume growth was 50% on the call but about 30% in the same day's presentation. **GRP** gave its first multi-year targets, but reclaim volume growth was \"close to 20%\" and later \"double-digit\" in the same call.",
                },
                {
                    label: 'My outlook',
                    text: "**Apcotex: about 12%.** FY27 is a flat-volume year with margins easing from 22%, then FY28–FY29 adds about 40% capacity at 15% margins; from a trailing year that already includes the windfall quarter, that works out at 10–12%, with the second latex phase as upside. **Tinna: about 15%, cut from 18%.** Revenue should grow 20%-plus, but credits are flat, so profit grows slower: from FY24 to FY26 revenue grew about 22% a year and profit about 15%. **GRP: about 20%**, from a very small base that swings with credits and the carbon-black approvals.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Apcotex Inds', 'New NBR and latex capacity from April–June 2027; margin back to 15–16% from 22%', '7% / **12%** / 17%'],
                        ['Tinna Rubber', 'Capacity, higher-value products and pyrolysis; credits flat at about ₹29cr', '8% / **15%** / 22%'],
                        ['GRP', 'Reclaim volumes; carbon black approved or not; credits', '0% / **20%** / 35%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance (Q4 call → Q1 call)', 'Capex', 'Track record'],
                    rows: [
                        ['Apcotex Inds', 'Q4: FY27 margin above FY26’s average, volume up low double digits. Q1: 15–16% average margin, FY27 volume may not grow, about ₹600cr of added revenue', '₹220cr (about ₹150cr borrowed); NBR about April 2027, latex about June 2027, a quarter later than February’s plan', '**Beat** on margin (22% against 12%); volume fell 10–12%'],
                        ['Tinna Rubber', 'Q4: FY27 revenue up 20–25%, margin about 18%. Q1: ₹670–700cr, “18% plus” (also “18–20%”); ₹1,000cr by FY29', 'About ₹100cr over FY27–FY28, ₹27cr spent in Q1; up to ₹20cr of debt', '**Mixed**: margin 22% (about 18% without credits); revenue +20% trails the guide; three projects late'],
                        ['GRP', 'Q4: no numbers; margins to recover; carbon black in H2; pyrolysis credits by H1. Q1: FY27 revenue +20%-plus; reclaim margin 10–14%; Pyrova ₹250–300cr at maturity', '₹90–100cr in FY27 within a ₹250cr plan; about ₹100cr still uncommitted', '**Mixed**: margin back to 11%; carbon black 4–8 months late; credit and reclaim-line promises not updated'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups, including what the annual reports and rating agencies found. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'The windfall quarter',
                    text: "All three printed record margins in Q1 FY27 on conditions that will not last. **Apcotex** said so and quantified its stock gain at about 2 points; it also warned that a sharp fall in crude would hurt, because it holds stock bought at high prices. **Tinna**'s 22% included about 4 points of credit income and management said \"I will neither confirm that we will achieve 18% nor will I confirm we will achieve 22%\". **GRP** says Q1 is \"not a one-time occurrence\", but its targets (10–14% in reclaim, 18–20% in pyrolysis) sit well above its 8% FY26 margin, and FY25's 13% was itself flattered by past-year credits. **The trailing profits behind today's prices are the high point, not the base.**",
                },
                {
                    label: 'Credits and rules',
                    text: "Credits made up roughly 40% of **Tinna**'s FY26 pre-tax profit and more than all of **GRP**'s, and both sell them at the regulator's floor. Any change to the two-year obligation formula, the floor price, or the enforcement against fake certificates would move their profits directly; GRP's own annual report flags non-compliant recyclers and an imbalance between certificate supply and demand. Credits cannot be earned on products from imported tyres, and Tinna imports about 55% of its raw material. The proposed crumb-rubber rule for refiners would help, but the committee itself noted India lacks enough domestic scrap. **Value the recyclers on their products first and treat credits as a bonus that policy can take away.**",
                },
                {
                    label: 'Governance: Apcotex and Tinna',
                    text: "**Apcotex**'s annual report is clean: an unqualified audit with one routine key audit matter, about ₹14cr of disputed taxes (about 2% of net worth), tiny related-party dealings, no pledges and promoters steady at 58.2% for three years. The one gap is an ₹8cr provision for a lawsuit it will not describe because the case is before a court. **Tinna**'s audit is also unqualified, but related parties are larger: about ₹18cr of sales to promoter-linked Fratelli Vineyards (₹27cr the year before), ₹5.4cr of shipping from a promoter-linked firm, loans from the chairman, and a stake in promoter-linked BGK Infratech revalued to ₹19.4cr. Its bank loans carry the promoters' personal guarantees and a mortgage on a promoter company's farm-house; the annual report was reissued in September to correct errors; its CFO changed in March 2026; and promoters' holding fell from 73.8% to 67.2%, mostly through a share sale. **None is a red flag on its own, but Tinna needs watching.**",
                },
                {
                    label: 'Governance: GRP',
                    text: "**GRP**'s auditor gave a clean opinion but made uncertain tax positions a key audit matter; disputed items include ₹6.65cr of GST and ₹3.14cr of income tax, plus ₹6.53cr of guarantees for subsidiary loans. Key managers were paid ₹5.2cr against a standalone profit of ₹8.9cr. The directors' report says FY26 profit \"took hit of 5%\" when standalone profit fell 76%, from ₹37.9cr to ₹8.9cr, and the executive chairman ceased to be a key manager in July 2025 while the company secretary left in April 2026. Promoters hold only about 40% and institutions almost nothing. **Careless disclosure in a year of falling profit is a reason for caution.**",
                },
                {
                    label: 'New plants and debt',
                    text: "**GRP** is most exposed: borrowings of ₹208cr include a euro loan of up to €12m from the French lender Proparco, whose hedge cost ₹13.3cr before tax in FY26 and helped shrink equity from ₹191.6cr to ₹178.4cr despite a profit. **Tinna** has had negative free cash flow for three years and raised ₹78.7cr of equity in FY26 to fund the gap; CARE, which raised it from BBB- to BBB on 1 October 2026, names debt-funded capex abroad as a downgrade trigger. **Apcotex** will borrow about ₹150cr for its expansion, but its debt is only about half a year of operating profit and interest is covered 16 times. **Only GRP could be forced into a share sale at a bad price.**",
                },
                {
                    label: 'Oil, war, tariffs and customers',
                    text: "A fall in oil would help **Apcotex**'s costs after a stock loss, but make recycled rubber and rubberised bitumen less attractive, which hurts **Tinna** and **GRP**. Apcotex's volumes fell 10–12% in Q1 because Middle East and North Africa customers, about 12% of revenue, could not be reached, and new Malaysian and Chinese glove-latex capacity threatens its prices. **GRP** sells about 60% of its exports to the US and Europe, and the tariff episode already cost it a business line. Tyre makers, the main customer for all three, face lower margins in FY27 (CRISIL) and will resist price rises. **Tinna**'s Saudi plant and Oman volumes depend on the same conflict.",
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
                    text: "**Apcotex** holds about ₹67cr of net cash, so on EV/EBITDA it looks a little cheaper than its P/E suggests. **Tinna**'s net debt of ₹125cr is small against a market value of {mcap:Tinna Rubber|₹1,721cr}, so the two yardsticks roughly agree. **GRP**'s net debt of ₹207cr compares with a market value of {mcap:GRP|₹1,013cr} and is over four times its operating profit of the last year, so it is dearer than even its P/E shows. The live table carries the multiples.",
                },
                {
                    label: 'Fits: Apcotex',
                    text: "**Apcotex**'s price needs earnings to grow about {need:Apcotex Inds|13}% a year; I expect about 12%, within the two-point band. That is a fair price, not a bargain, for the cleanest balance sheet and governance in the group and a capacity step already funded. If my estimate fell below 11%, or the price rose about 15% with no change in outlook, it would move to Full.",
                },
                {
                    label: 'Full: Tinna',
                    text: "**Tinna**'s price needs about {need:Tinna Rubber|18}% a year; I now expect about 15%, so it is {Label:Tinna Rubber|Full}. Strip out credits and the price leans harder still: about ₹29cr of its ₹72cr FY26 pre-tax profit came from them. A fall of about 6% in the price, or proof that pyrolysis and carbon black are adding profit, would bring it back to Fits.",
                },
                {
                    label: 'Stretched: GRP',
                    text: "**GRP**'s FY26 profit was so small, and so dependent on credits, that the price needs about {need:GRP|39}% a year for a decade, about double my 20%. It is pricing the FY28–FY29 targets (reclaim at 10–14%, Pyrova at 18–20%) as if they were already delivered. Trailing profit would have to rise nearly fourfold at today's price to bring it into range.",
                },
                {
                    label: 'Watch the windfall quarter',
                    text: "The P/Es use the last four quarters, which include each company's record Q1. **Apcotex**'s ₹117cr of operating profit in Q1 is almost half of its ₹256cr for the trailing year; had Q1 run at 16%, the trailing figure would be about ₹223cr, some 13% lower. **Tinna**'s trailing figure includes ₹6.75cr of Q1 credits. **On a normal year, each price asks for more growth than the table shows.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Apcotex Inds', rank: 1, stance: 'COMPOUNDER', segment: SYNTH,
            what: "India's only maker of nitrile rubber (NBR), nitrile latex and high-styrene rubber, and a large maker of synthetic latex for paper, carpets, construction, tyre cord and gloves.",
            view: "**The only local NBR maker, with the cleanest books in the group.** Q1 FY27's 22% margin was a windfall (rivals shut, about 2 points of stock gains); management expects 15–16% on average, and FY27 volume may not grow after Q1's 10–12% fall. A ₹220cr expansion, about ₹150cr of it borrowed, nearly doubles NBR from about April 2027 and should add about ₹600cr of revenue, while net cash (₹67cr at March) and an AA- rating leave room. The price needs about {need:Apcotex Inds|13}% a year against my ~12%.",
            watch: 'The NBR start date confirmed on the Q3 call; margins settling at 15–16% as crude and stock gains unwind; the second nitrile-latex expansion decision.',
        },
        {
            company: 'Tinna Rubber', rank: 2, stance: 'SCALEUP', segment: RECYCLE,
            what: "India's largest recycler of old tyres, turning them into crumb rubber and rubberised bitumen for roads, fine rubber powder and reclaim for tyre makers, polymer masterbatches and steel abrasives, with plants in Oman and South Africa.",
            view: "**Good returns and a clear plan, but about 40% of profit is recycling credits.** It has earned 22–33% on capital for five years and targets ₹1,000cr of revenue by FY29, yet credits of about ₹29cr a year carried roughly 40% of FY26 pre-tax profit, free cash has been negative for three years, and South Africa and Saudi are each two quarters or more late. In Q2 FY27 revenue rose 31%, pyrolysis oil began selling and credits fell to about ₹4.6cr of the quarter's ₹29cr operating profit. Related-party sales and a low CARE rating (BBB, up from BBB- on 1 Oct 2026) add to the caution. The price needs about {need:Tinna Rubber|18}% a year against my ~15%. On 9 Oct 2026 the price moved into the fits band; I keep it at follow, not own, because free cash is still negative and the credits still carry about 40% of profit; the rating upgrade is the only filing in six weeks.",
            watch: 'Carbon-black sales by Q4 FY27; free cash flow turning positive in FY27; South Africa’s crumb line running after its 3–4 month slip; any change to the credit floor price or obligation formula.',
        },
        {
            company: 'GRP', rank: 3, stance: 'TURNAROUND', segment: RECYCLE,
            what: "India's largest maker of reclaimed rubber, selling to 8 of the world's top 10 tyre makers, about half abroad, with recycled plastics and a new pyrolysis business making fuel oil and, from October 2026, recovered carbon black.",
            view: "**A real recovery priced as a finished one.** Q1 margin rose to 11% as US orders returned, but FY26's ₹20cr of credits exceeded its whole pre-tax profit, borrowings reached ₹208cr, CRISIL cut its rating and a share sale lapsed. The carbon-black plant is 4–8 months late and needs several quarters of tyre-maker approval. The price needs about {need:GRP|39}% a year against my ~20%.",
            watch: 'Carbon black starting in October 2026 and the first tyre-maker approval; free cash flow and debt; reclaim margin moving toward 10–14% without credits.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Synthetic rubber and latex.** **Apcotex: own.** The only Indian NBR maker, with net cash, clean accounts and a cheap capacity step from April 2027; the price asks for about what I expect, once Q1's windfall is set aside.",
            "**Tyre recyclers.** **Tinna Rubber: follow.** The best operator and returns among the recyclers, but about 40% of profit is policy-dependent credit income and the cash has not yet followed. **GRP: pass.** Good products and approvals, too much debt, and a price that assumes its carbon-black plant already works.",
            "**What would change my view.** For the better: GRP's carbon black winning a big tyre maker's approval with free cash turning positive, Tinna's new lines adding profit beyond credits, or the crumb-rubber rule for refiners becoming law. For the worse: any cut to the credit floor price or obligation, Apcotex's margin dropping below 12% as crude falls, or its expansion slipping past mid-2027.",
            "**What to watch next quarter.** Apcotex's margin and its confirmed NBR date; Tinna's credit income and its pyrolysis sales; GRP's plant start-up, debt and whether its pyrolysis credits finally arrive.",
        ],
        bottomLine:
            "Own the only local maker (Apcotex Inds), follow the best recycler (Tinna Rubber) until its profit stands without credits, and pass on GRP until its new plant and balance sheet prove themselves.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/APCOTEXIND/' },
        { label: 'Wholesale price index: synthetic rubber, rubber crumb, reclaimed rubber — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Indian tyre industry outlook — ICRA (Mar 2026)', url: 'https://www.icra.in/Rating/DownloadResearchSummaryReport?id=6873' },
        { label: 'Tyre makers’ operating margins to moderate in FY27: CRISIL Ratings — Autocar Professional (Aug 2026)', url: 'https://www.autocarpro.in/news/tyre-makers-operating-margins-to-moderate-in-fy27-crisil-134248' },
        { label: 'Rubber industry report — Infomerics Ratings (2025)', url: 'https://infomericstorage.blob.core.windows.net/uploads/rubber_industry2025_70c8623c3b.pdf' },
        { label: 'Technical Review Committee decision on crumb-rubber modifier in bitumen — Ministry of Environment, Forest and Climate Change (Jul 2025)', url: 'https://moef.gov.in/uploads/pdf-uploads/pdf_6888965905f964.89493665.pdf' },
        { label: 'Regulatory punctures stalling waste-tyre management in India — Down To Earth (Nov 2025)', url: 'https://www.downtoearth.org.in/environment/regulatory-punctures-stalling-waste-tyre-management-in-india' },
        { label: 'Anti-dumping investigation on acrylonitrile butadiene rubber — DGTR', url: 'https://dgtr.gov.in/en/anti-dumping-cases/anti-dumping-investigation-concerning-imports-acrylonitrile-butadiene-rubber-0' },
        { label: 'India’s rubber production close to 1 million tonnes — Helixtap (Jun 2026)', url: 'https://www.helixtap.com/2026/06/02/indias-rubber-production-close-to-1-million-tonnes/' },
        { label: 'Apcotex Industries annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/269d3620-05b7-4455-9618-0e725f7c7e08.pdf' },
        { label: 'Apcotex Industries Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0b91b6b7-698b-4841-bb29-c05a459d53dc.pdf' },
        { label: 'Apcotex Industries rating rationale — ICRA (Aug 2026)', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdfViewer/145249' },
        { label: 'Tinna Rubber annual report FY26 (corrigendum edition) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d7b17f73-ed0a-48c4-9626-597597b479d8.pdf' },
        { label: 'Tinna Rubber Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=809af637-e8ba-4650-8a10-c41a85876300.pdf' },
        { label: 'Tinna Rubber rating rationale — CARE Ratings (Oct 2025)', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202510121018_Tinna_Rubber_&_Infrastructure_Limited.pdf' },
        { label: 'GRP annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/97749860-0180-417f-8486-b6d6657a2285.pdf' },
        { label: 'GRP Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9da06d85-51c4-4e68-8498-a9c59c1cb3fc.pdf' },
        { label: 'GRP rating rationale — CRISIL Ratings (Dec 2025)', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GRPLimited_December%2010_%202025_RR_384433.html' },
        { label: 'EPR portal for waste tyre management — Central Pollution Control Board', url: 'https://eprtyres.cpcb.gov.in/' },
        { label: 'US glove tariffs on China — The Edge Malaysia (Feb 2025)', url: 'https://theedgemalaysia.com/node/743900' },
        { label: 'Use of crumb rubber in road construction — Press Information Bureau, Government of India', url: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1777240' },
    ],
};
