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
                "Rubber reaches a tyre or glove in two ways: made new from petrochemicals, or recovered from old tyres. The three companies here sit on opposite sides of that line, so the same news (dear oil, a war, a new rule) can help one and hurt another.",
                "All three had their best quarter ever in Q1 FY27, and the prices of what they sell rose sharply in the same quarter (table below). **The main job of this section is to separate what is lasting from what came with that quarter.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**New rubber**: butadiene, acrylonitrile and styrene (all from oil) → synthetic rubber and latex (Apcotex) → tyre makers, glove makers, paper mills and construction-chemical firms. Apcotex's customers include MRF, Apollo, JK Paper, ITC, Pidilite and Sika, and glove makers in Malaysia, Thailand and Vietnam. **Recycled rubber**: scrap tyres → shredded into crumb, then made into fine rubber powder, reclaimed rubber, fuel oil and carbon black (Tinna, GRP) → road contractors, tyre makers and industry. Both recyclers also turn waste plastic into plastic compounds for carmakers and appliance makers. **The profit sits where a product is hard to replace**: Apcotex as the main local NBR maker, and the recyclers where their product is approved by a big tyre maker.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Apcotex** sells about 70% latex and 30% synthetic rubber, and about two-thirds of sales are in India, where its volumes grew 10% in Q1 across paper, construction, rubber goods and textiles. Nitrile latex for gloves, which did not exist in its sales five years ago, is now about 10%. **Tinna** sells to four groups: roads (rubber mixed into bitumen), industry (fine powder and reclaimed rubber for tyre makers, up 58% in Q1), consumer (sports tracks and turf, about 8–10% of sales) and steel abrasives. **GRP** sells mostly reclaimed rubber, over half of it abroad, plus recycled plastics. **Regulation is a driver for recyclers**: tyre makers must pay for the collection and recycling of old tyres, and the recyclers sell them credits for doing it.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Apcotex's cycle is the petrochemical spread** and the global glove-latex cycle. After COVID, Apcotex and its rivals all added capacity at once, and glove latex has been in oversupply since; management says it is only now normalising. **The recyclers' cycle runs the other way**: dear oil and dear bitumen make their products more attractive, because buyers switch to recycled rubber when new rubber and bitumen cost more. Freight and war matter for all three this year: Apcotex's exports to the Middle East were cut off, Tinna's imported turf materials tripled in price, and GRP lost some sales to countries that make goods for the US after the US raised tariffs.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Apcotex** depends on its NBR expansion filling and on latex demand from gloves and tyre cord; **Tinna** on road-building, tyre makers' recycled content and its credits; **GRP** on US and European reclaim buyers and on its carbon-black plant being approved by tyre makers. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Free cash flow (FY26)'],
                    rows: [
                        ['Synthetic rubber and latex', 'Apcotex', '10–22%', '20%', '**70%**', '₹159cr'],
                        ['Tyre recyclers', 'Tinna, GRP', '6–22%', '7–22%', '**61–66%**', 'Tinna −₹52cr; GRP −₹16cr'],
                    ],
                    note: 'Free cash flow is operating cash minus spending on fixed assets (Screener).',
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
                    label: 'Lasting: the main local maker',
                    text: "**Apcotex** is the main Indian NBR maker, with about 30% of a market otherwise supplied by imports, so Indian buyers get shorter lead times and less stock to carry than if they imported. Its plants can run on coal or gas and it buys raw materials from several countries, which kept it running when rivals stopped this year. Customers in tyre cord and gloves take 6–12 months to approve a new latex supplier. It has added six or seven glove-latex grades and about 25 new products, and now sells to eight industries.",
                },
                {
                    label: 'Lasting but policy-dependent: recycling credits',
                    text: "**Tinna** and **GRP** earn credits for recycling tyres collected in India, and rules requiring recycled content in cars from FY28 add demand. Tinna's scale (185,000 tonnes of crushing a year, rising to 235,000) gives it the best access to scrap, and it is adding sourcing bases in South Africa and Chile. GRP was the first reclaimed-rubber maker in the world to earn ISCC Plus certification (a sustainability standard some customers value). These are real advantages, but they rest on rules.",
                },
                {
                    label: 'Wearing: basic shredding',
                    text: "Anyone can shred a tyre. The recyclers' margins last only if they keep moving to harder products: fine rubber powder, polymer masterbatches and recovered carbon black. Tinna's joint managing director said nothing in the business is \"that difficult\" for a determined rival; its edge is years of process learning and patient customer approvals. If they stand still, small local shredders undercut them.",
                },
                {
                    label: 'Thin: GRP’s balance sheet',
                    text: "**GRP** has good products and certifications, but its net debt is about five times FY26 operating profit, which leaves little room if the carbon-black plant is slow to win approvals. Management says any faster expansion of its Gujarat plants would first need the company to reduce debt.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In synthetic rubber, **Synthos**, **Zeon**, **Kumho** and Chinese makers supply India through imports; Malaysian and Chinese latex makers compete in gloves, and Apcotex notes new latex capacity in Malaysia and China. In recycling, dozens of small local shredders and reclaim makers compete on basic products.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? All three had a record quarter, so the question is what a normal year looks like. The cost structures differ: materials were 66% of Apcotex's FY26 sales but 51–52% of the recyclers', while power and factory costs were 20% of GRP's sales. So Apcotex lives on the gap between its selling price and petrochemical prices, and the recyclers on scrap prices and running costs.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: what management calls normal',
                    text: "**Apcotex** says 15–16% on average, well below Q1's 22%, and its glove latex has still not returned to the 15–16% it earned before COVID. **Tinna** raised its FY27 guidance to 18–20% and declined to promise the 22% of Q1; it says most of the gain came from cheaper raw materials and more high-value products, not stock gains. **GRP** targets 10–14% in reclaimed rubber (it averaged 9–10% in the last two years), 10–15% in plastics and 18–20% in pyrolysis once carbon black is running, which it expects around FY28.",
                },
                {
                    label: 'Cyclical: this year’s supply shock',
                    text: "Apcotex's 22% came partly from rivals being shut by gas shortages and about 2 points from stock bought before prices rose; management said so plainly. Tinna's road business benefits from dear bitumen, which will ease when oil does. **GRP**'s gross margin actually fell to 48.3% as scrap costs rose; its operating margin rose because sales grew 26% and fixed costs were spread over more of them. Its prices are reset quarterly, half-yearly or yearly, so its margin lags cost changes.",
                },
                {
                    label: 'Not structural: credits and one-offs',
                    text: "**Tinna** earns about ₹25–30cr of credits a year, counted in profit before tax. An analyst on the call worked out that FY26 profit before tax of ₹72cr was about ₹51cr without credits, and management agreed the numbers. The ₹25cr of credits it sold in Q1 (about 1 lakh credits at the ₹2,500 floor price) had already been booked as profit in earlier years, so they brought cash, not Q1 profit. **GRP** earned ₹4.9cr of credits in Q1, more than half of its ₹8.4cr profit before tax. **Strip credits out when comparing years.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**GRP** has the longest cycle, about 105 days on filed figures at March, mostly scrap stock and export receivables. The company says it cut this by 8 days in Q1, to 86 days on its own measure.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Tinna**'s cycle lengthened from 49 to 64 days over two years on filed figures as it grew abroad; management puts its blended figure at about 50 days and says it has barely moved. **Apcotex** holds the same number of days of stock, but at higher raw-material prices, so its net cash fell from about ₹70cr in March to about ₹40cr in June.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Apcotex**'s cycle has fallen to 40 days and it turned more than all of FY26's operating profit into cash (115%), leaving ₹159cr of free cash.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Recyclers must stock scrap tyres when they are available; synthetic-rubber makers hold petrochemicals bought at market prices. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Apcotex Inds', 'Net cash about ₹40cr, down from ₹70cr in March as stock values rose; 15–20% of the ₹220cr capex spent, self-funded so far, but it expects to borrow in the next couple of quarters', 'Net cash ₹67cr at March'],
                        ['Tinna Rubber', '₹27cr of capex in Q1, out of about ₹100cr planned for FY27–28 (about ₹60cr to be completed in FY27); ₹25cr of past credits turned into cash', 'Net debt ₹125cr at March'],
                        ['GRP', 'FY27 capex ₹90–100cr; ₹91cr invested in pyrolysis so far; reducing debt is “not entirely in our hands”, with no firm plan', 'Net debt ₹207cr at March'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. None of the three announced a buyback.',
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
                    text: "**Apcotex** is spending about ₹220cr on new capacity due in April–June 2027, which it expects to add about ₹600cr of revenue, roughly 40% more volume. Its NBR plant runs full, and India still imports much of what it uses. A cheaper design cut the NBR part of the cost to ₹130–140cr, which made the expansion pay without import duties. A further glove-latex expansion is designed but waits on three or four more months of stable margins.",
                },
                {
                    label: 'Growth driver: recycling rules and roads',
                    text: "**Tinna** targets ₹670–700cr of revenue in FY27 and ₹1,000cr by FY29, with margins above 18% and return on capital above 30%. Its crushing capacity rises 27% to 235,000 tonnes this year, and it has a 15,000-tonne rubberised-bitumen order for FY27. **GRP** guides about 20% revenue growth in FY27, with reclaimed-rubber volumes up about 20% and plastics up over 20%, then mid-teen growth after that.",
                },
                {
                    label: 'Growth driver: new products',
                    text: "**GRP**'s recovered-carbon-black plant is due in October 2026, with tyre-maker approvals expected to take several quarters; its pyrolysis business goes to 45,000 tonnes this year and 75,000 in FY28, targeting ₹250–300cr of revenue at peak. **Tinna** starts selling pyrolysis oil in Q2 FY27 and making recovered carbon black in Q3; together they are expected to be 7–10% of FY27 revenue (₹50–60cr). Its polymer masterbatch sales tripled to ₹12cr in Q1 and should reach 10% of revenue, and its construction-chemicals arm aims to pass ₹100cr of revenue.",
                },
                {
                    label: 'Growth driver: going abroad',
                    text: "**Tinna** has plants or projects in Oman, South Africa, Chile and Saudi Arabia, aiming for 10 locations. Oman earns an 8.5% margin; South Africa has started exporting and should break even in Q2; Saudi Arabia keeps being delayed by the regional conflict. **GRP** has set up a base in Europe and says exports will again become most of its reclaimed-rubber sales.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Apcotex** delivered its best quarter ever and remained in net cash. **Tinna** raised its margin guidance and completed its Haryana masterbatch expansion on schedule. **GRP** recovered its US volumes, passed on Q4's cost increases and ran its pyrolysis reactor continuously for 25 days in July, the industry test for a working plant.",
                },
                {
                    label: 'Cautious',
                    text: "**Apcotex** would not promise another quarter like Q1 and warned that Middle East exports depend on the conflict ending; it will confirm the start date of its NBR expansion only on the Q3 call.",
                },
                {
                    label: 'Missed',
                    text: "**Tinna**'s Saudi plant has been delayed again, and its consumer business fell as turf materials tripled in price. **GRP** lost money in Q4 FY26 when US tariffs hit its exports, and closed its polymer composite business for good.",
                },
                {
                    label: 'Mixed',
                    text: "**GRP**'s growth rests on a plant that is not yet commissioned and products not yet approved by customers. Its pyrolysis unit is still below break-even, and some sales to non-US countries lost in the tariff episode have not come back.",
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
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Apcotex Inds', 'Margin 15–16% on average; about ₹600cr of added revenue from 2027', '₹220cr, due April–June 2027; self-funded so far', '**Beat**: record Q1, net cash kept'],
                        ['Tinna Rubber', 'FY27 revenue ₹670–700cr, margin 18–20% (raised); ₹1,000cr by FY29', 'About ₹100cr over FY27–28; ₹27cr spent in Q1', '**On track**: Saudi delayed'],
                        ['GRP', 'About 20% revenue growth in FY27; margin targets by business', '₹90–100cr in FY27 within a ₹250cr plan', '**Mixed**: Q1 recovery after a Q4 loss'],
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
                    label: 'The peak quarter',
                    text: "All three printed record margins in Q1 FY27 on conditions that will not last. **Apcotex** said so and quantified its stock gain; **Tinna** declined to promise the rate and said new plants abroad will add costs before they add sales; **GRP** says Q1 is \"not a one-time occurrence\", but its targets are above anything it has earned for a full year.",
                },
                {
                    label: 'Oil prices',
                    text: "A fall in oil would help **Apcotex**'s costs but make recycled rubber less attractive against new rubber and bitumen, which hurts **Tinna** and **GRP**. A rise does the opposite. Apcotex's raw materials are priced in dollars, so a weaker rupee raises its costs about as much as its export prices and gives it little net benefit.",
                },
                {
                    label: 'Credits, rules and disclosure',
                    text: "Recycling credits and recycled-content rules support both recyclers. A change to the credit price or to scrap-tyre import rules would hit profits directly. **Tinna**'s credits were explained unclearly on the call (several analysts asked how they are booked), and its promoters' holding fell from 73.8% to 67.2% between September 2023 and June 2026. **GRP**'s promoters hold about 40%; **Apcotex**'s holding has been unchanged at 58.2%.",
                },
                {
                    label: 'New plants and debt',
                    text: "**GRP**'s carbon-black plant must win tyre-maker approvals, and its debt is high for its size; management says the timing of reducing debt is not in its hands. **Tinna** has spent more cash than it earned for three years (free cash −₹52cr in FY26), and its projects abroad add freight and political risk. **Apcotex**'s expansion is self-funded so far, though it plans to borrow a little.",
                },
                {
                    label: 'War, freight and tariffs',
                    text: "**Apcotex**'s volumes fell 10–12% in Q1 because Middle East customers could not be reached; exports are about a third of its sales. **Tinna**'s Saudi project and Oman volumes depend on the same conflict. **GRP** exports over half its output; the US tariff episode already cost it one business line and some sales to third countries.",
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
                    text: "**Apcotex** holds net cash, so its EV/EBITDA of about 12x is a little cheaper than its P/E of about 20x suggests. **Tinna** (net debt ₹125cr) trades at about 18x EV/EBITDA against a P/E of about 30x. **GRP**'s debt makes it dearer than even its P/E does: about 27x EV/EBITDA, with net debt over four times its operating profit of the last year.",
                },
                {
                    label: 'Reasonable',
                    text: "**Apcotex** and **Tinna**: prices that ask for about the growth I expect (about 13% a year for Apcotex against my 15%, about 18% for Tinna against my 18%). Remember that both are on record margins today.",
                },
                {
                    label: 'Full',
                    text: "None of the three today. **Tinna** is closest: if I strip out its credits or cut my estimate by more than two points, its price moves from reasonable to full.",
                },
                {
                    label: 'Stretched',
                    text: "**GRP**: its FY26 profit was so small that the price rests on the carbon-black plant working. At a P/E of about 156x it needs earnings to compound at roughly 39% a year, about double my 20%.",
                },
                {
                    label: 'Watch the peak quarter',
                    text: "The P/Es use the last four quarters, which include each company's record Q1. **Apcotex**'s ₹117cr of operating profit in Q1 is almost half of its ₹256cr for the year; if margins return to 15–16%, the P/E on a normal year is higher than it looks today.",
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
        { label: 'CPCB directs producers to procure EPR certificates for tyre disposal — Business Standard (Feb 2024)', url: 'https://www.business-standard.com/india-news/cpcb-directs-producers-to-procure-epr-certificates-for-tire-disposal-124022000980_1.html' },
        { label: 'EPR portal for waste tyre management — Central Pollution Control Board', url: 'https://eprtyres.cpcb.gov.in/' },
        { label: 'NITI Aayog proposes standards for tyre pyrolysis oil and recovered carbon black — Down To Earth (May 2026)', url: 'https://www.downtoearth.org.in/waste/waste-tyre-management-overhaul-niti-aayog-proposes-new-standards-for-tyre-pyrolysis-oil-and-recovered-carbon-black' },
        { label: 'Use of crumb rubber in road construction — Press Information Bureau, Government of India', url: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1777240' },
        { label: 'Glove makers face prolonged recovery amid intense Chinese competition — The Edge Malaysia (2026)', url: 'https://theedgemalaysia.com/node/815243' },
    ],
};
