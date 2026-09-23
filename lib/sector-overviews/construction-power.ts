import { SectorOverview } from './types';
import { constructionPowerBusinesses } from './construction-power-businesses';
import { constructionPowerValuationInputs } from './card-data/construction-power';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const EPC = 'Transmission contractors — build lines and substations';
const MAKER = 'Tower makers with a contracting arm — make the steel, then build';

export const constructionPower: SectorOverview = {
    sector: 'Construction - Power',
    title: 'Construction - Power',
    format: 'ranked',
    businesses: constructionPowerBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: constructionPowerValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Kalpataru Proj.': 15,
            'KEC International': 10,
            'Techno Electric &Eng': 14,
            'Transrail Lighting': 15,
            'Skipper': 18,
        },
    },
    standfirst:
        "Five companies that build India's power grid and, increasingly, grids abroad. Kalpataru, KEC and Techno Electric are contractors that design and build transmission lines, substations and other infrastructure; Transrail and Skipper also make the steel towers, poles and conductors themselves. Demand is not the question: about ₹9 lakh crore of Indian transmission projects are planned, only about 40% of them yet put out to bid, and all five have record order books. The questions are whether they turn those orders into profit and cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener, consolidated), operating profit ÷ sales.',
            note: 'Techno Electric earns the most because high-voltage substations are harder to build. KEC’s 6–7% is held down by loss-making civil and railway projects.',
            values: {
                'Kalpataru Proj.': [9, 9, 8, 8, 9],
                'KEC International': [7, 7, 7, 7, 6],
                'Techno Electric &Eng': [17, 13, 14, 13, 16],
                'Transrail Lighting': [12, 12, 13, 11, 12],
                'Skipper': [10, 10, 10, 10, 11],
            },
            cellNotes: {
                'KEC International': 'Q1 FY27: its standalone business earned about 4%, hit by costs on finished metro and civil projects that clients have not yet taken over (company).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Q1 FY27 was slow almost everywhere: labour shortages around state elections, Middle East shipping delays and diesel shortages at factories. All five kept their full-year guidance.',
            values: {
                'Kalpataru Proj.': [35, 32, 16, 10, 4],
                'KEC International': [11, 19, 12, -7, 0],
                'Techno Electric &Eng': [40, 91, 37, 24, 20],
                'Transrail Lighting': [81, 43, 32, -4, 5],
                'Skipper': [15, 14, 21, 29, 4],
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
            note: 'Transrail stands out at 34–35% for three years. Kalpataru and Skipper have risen steadily.',
            values: {
                'Kalpataru Proj.': [13, 14, 16, 16, 18],
                'KEC International': [14, 12, 16, 18, 17],
                'Techno Electric &Eng': [18, 8, 17, 17, 15],
                'Transrail Lighting': [22, 27, 35, 35, 34],
                'Skipper': [10, 12, 21, 24, 24],
            },
            cellNotes: {
                'Techno Electric &Eng': 'Held down by large cash and investments (about ₹2,300cr net on Screener’s figures) and by data centres still being built.',
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
            note: 'Read with care: this formula leaves out unbilled work and retention money, the largest items on a contractor’s balance sheet, so the negative figures understate how much cash is tied up. KEC, for example, targets about 110 days of working capital by March 2027. Use the cash-conversion chart instead.',
            values: {
                'Kalpataru Proj.': [-66, -75, -92, -92, -94],
                'KEC International': [-219, -284, -272, -255, -201],
                'Techno Electric &Eng': [22, 38, 15, 108, 137],
                'Transrail Lighting': [-144, -126, -120, -165, -147],
                'Skipper': [144, 160, 81, 52, 30],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'The real weakness of this sector. Operating cash is after tax, so 70–80% is healthy; none of the five reaches that over five years, and KEC and Techno Electric have kept almost none of their profit as cash.',
            values: {
                'Kalpataru Proj.': [55, 44, 46, 45, 63, 51],
                'KEC International': [-28, 67, 23, 25, -22, 9],
                'Techno Electric &Eng': [163, 107, -94, 134, -128, 1],
                'Transrail Lighting': [19, 39, 6, 37, 68, 40],
                'Skipper': [10, 147, 62, 34, 48, 54],
            },
            cellNotes: {
                'Techno Electric &Eng': 'FY26: operating cash of −₹590cr against ₹462cr of operating profit (Screener).',
                'KEC International': 'Delays in state water-scheme payments and stock held at its Dubai plant during the Middle East conflict.',
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
            note: 'Thin everywhere: these contractors keep 0–3% of their sales as free cash across five years.',
            values: {
                'Kalpataru Proj.': [2.7, -0.7, 2.5, 1.5, 2.7, 1.8],
                'KEC International': [-3.1, 2.5, 0.4, 1.1, -3.2, -0.4],
                'Techno Electric &Eng': [22.5, 3.3, -25.2, 12.6, -20.2, -5.6],
                'Transrail Lighting': [-1.5, 2.8, 0.1, 2.7, 5.7, 2.8],
                'Skipper': [-1.5, 10.1, 3.0, -1.8, -1.6, 0.6],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Techno Electric.',
            note: 'Below zero means more cash than debt. Techno Electric holds large net cash; KEC carries about three years of operating profit in net debt.',
            values: {
                'Kalpataru Proj.': [2.0, 1.8, 1.6, 1.3, 0.7],
                'KEC International': [2.8, 3.3, 2.7, 2.0, 2.6],
                'Techno Electric &Eng': [-6.9, -16.7, -6.1, -8.6, -5.0],
                'Transrail Lighting': [1.5, 1.2, 0.8, 0.1, -0.1],
                'Skipper': [3.2, 2.4, 1.4, 1.3, 1.6],
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
            note: 'Contractors need little plant. Skipper and Transrail spend more because they make towers and conductors; Techno Electric is building data centres.',
            values: {
                'Kalpataru Proj.': [2.1, 4.7, 1.8, 2.6, 3.0, 2.8],
                'KEC International': [1.0, 1.0, 1.2, 0.8, 1.4, 1.1],
                'Techno Electric &Eng': [3.4, 8.0, 12.0, 7.4, 2.1, 5.8],
                'Transrail Lighting': [3.4, 1.7, 0.7, 2.7, 3.6, 2.5],
                'Skipper': [2.5, 4.3, 3.1, 5.1, 6.6, 4.9],
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
            note: 'High for contractors, whose capital is mostly working capital, not plant.',
            values: {
                'Kalpataru Proj.': [4.2, 5.2, 6.4, 6.9, 8.6],
                'KEC International': [8.9, 10.9, 12.2, 13.3, 13.3],
                'Techno Electric &Eng': [2.2, 10.2, 19.8, 32.4, 6.4],
                'Transrail Lighting': [7.0, 8.3, 10.9, 12.5, 11.5],
                'Skipper': [2.6, 2.8, 4.4, 5.1, 4.8],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Order book at the end of Q1 FY27 (company) ÷ sales over the last four quarters (Screener).',
            note: 'Years of work already booked. All five are at or near record order books.',
            values: {
                'Kalpataru Proj.': [2.4],
                'KEC International': [1.6],
                'Techno Electric &Eng': [2.8],
                'Transrail Lighting': [2.3],
                'Skipper': [1.6],
            },
            cellNotes: {
                'Kalpataru Proj.': '₹66,607cr, across transmission, buildings, water, oil and gas and urban infrastructure.',
                'KEC International': '₹37,697cr.',
                'Techno Electric &Eng': '₹9,600cr at 30 June; about ₹11,000cr by mid-August after new wins.',
                'Transrail Lighting': '₹16,035cr.',
                'Skipper': 'About ₹9,200cr.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Qualifications and track record', description: 'Past projects needed to bid for high-voltage and overseas work.' },
            { key: 'integ', label: 'Own manufacturing', description: 'Making towers, conductors or poles in-house.' },
            { key: 'book', label: 'Order book', description: 'Years of work already won.' },
            { key: 'reach', label: 'Reach abroad', description: 'Ability to win and run projects outside India.' },
            { key: 'cash', label: 'Balance sheet and collections', description: 'Debt, and how quickly clients pay.' },
        ],
        rows: [
            { company: 'Kalpataru Proj.', trend: 'widening', trendNote: 'Record ₹66,607cr order book; sold road and real-estate assets; building a rolling mill for its own steel.',
                grades: { qual: { grade: 'A', note: 'Transmission, buildings, oil and gas, metros' }, integ: { grade: 'B', note: 'Own tower plants; rolling mill coming' }, book: { grade: 'A', note: 'About 2.4 years of sales' }, reach: { grade: 'A', note: 'Middle East, Europe, Latin America' }, cash: { grade: 'B', note: 'Net debt about ₹900cr (company); water-scheme dues slow' } } },
            { company: 'KEC International', trend: 'narrowing', trendNote: 'Transmission strong; civil and railway projects losing money; no margin guidance.',
                grades: { qual: { grade: 'A', note: 'Up to 1,200 kV; global transmission record' }, integ: { grade: 'A', note: 'Tower plants in India, Brazil and Mexico (SAE Towers)' }, book: { grade: 'B', note: 'About 1.6 years of sales' }, reach: { grade: 'A', note: 'Middle East, Americas, Africa' }, cash: { grade: 'D', note: 'Net debt ₹6,568cr (company)' } } },
            { company: 'Techno Electric &Eng', trend: 'stable', trendNote: 'Won ₹2,200cr of orders already this year; data-centre leasing slow to start.',
                grades: { qual: { grade: 'A', note: '765 kV substations' }, integ: { grade: 'C', note: 'Buys equipment' }, book: { grade: 'A', note: 'About 2.8 years of sales' }, reach: { grade: 'C', note: 'Mostly India' }, cash: { grade: 'B', note: 'Large net cash; slow collections' } } },
            { company: 'Transrail Lighting', trend: 'widening', trendNote: 'New tower plant running; bought a cooling-tower builder; ₹600cr share sale proposed.',
                grades: { qual: { grade: 'A', note: 'Up to 765 kV and HVDC bids' }, integ: { grade: 'A', note: 'Makes its own towers, conductors and poles' }, book: { grade: 'A', note: 'About 2.3 years of sales' }, reach: { grade: 'A', note: 'Africa, South Asia, Middle East, now Australia' }, cash: { grade: 'B', note: 'Net cash at March; debt rose in Q1' } } },
            { company: 'Skipper', trend: 'widening', trendNote: 'Raised ₹433.5cr of equity; credit rating upgraded; setting up in the US, Brazil and UAE.',
                grades: { qual: { grade: 'B', note: 'Supplier audits passed in the US, Finland, Australia' }, integ: { grade: 'A', note: 'One of the largest tower makers outside China' }, book: { grade: 'B', note: 'About 1.6 years of sales' }, reach: { grade: 'C', note: 'Exports about 10% of sales' }, cash: { grade: 'B', note: 'Debt falling after the raise' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Transrail Lighting is the one to own.** It builds transmission lines in India and abroad and makes its own towers, conductors and poles, and it has earned 34–35% on capital for three years, the best here. It has an order book of ₹16,035cr (about 2.3 years of sales) and guides 20% revenue growth at an 11% margin. The price asks for less growth than it is delivering. Watch its working capital, which jumped in Q1, and a proposed ₹600cr share sale.",
                "**Follow Kalpataru and Skipper.** Kalpataru has the largest and broadest order book (₹66,607cr), has sold its road and real-estate assets, and targets 15%-plus revenue growth with rising margins; its price is fair. Skipper, one of the largest tower makers outside China, is widening margins and has raised equity to cut debt.",
                "**Wait on KEC and Techno Electric.** KEC's transmission business is strong, but its civil and railway projects are losing money, it carries about ₹6,600cr of net debt and gives no margin guidance. Techno Electric earns the best margins and holds large net cash, but has kept almost none of its operating profit as cash over five years and is betting on data centres.",
                "**Two things to hold onto before reading the rest.** First, **order books are not the question; cash is**: over five years none of these companies turned even 60% of its operating profit into cash, because clients hold back payments until milestones and retention periods pass. Second, **Q1 FY27 was slow for everyone** (elections, labour, shipping), and every management is counting on a strong second half.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed consolidated results; order books are from the companies. **Skip the cash-cycle chart for this sector**: Screener's formula leaves out unbilled work, so it understates the cash tied up. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "A power line is built in three steps: steel towers are made, a contractor puts them up and strings the wires, and substations connect it to the grid.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel, zinc and aluminium → **towers, poles and conductors** (Skipper, Transrail, KEC, Kalpataru) → **EPC contractor** (engineering, procurement and construction: designs the line, buys the materials and builds it) → transmission company (Power Grid, state utilities or private developers) → the grid. **Margins are thin for contractors (6–12%) and a little better for complex substations (Techno Electric, 13–16%)**; the profit is made or lost on execution speed and collections.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India's renewable plants need new lines to carry their power; about ₹9 lakh crore of transmission projects are planned, only about 40% of them bid out so far (Skipper's figure), and private developers now win many lines through competitive bidding. Abroad, the Middle East, Africa, Latin America and, lately, the US (for AI data centres) are building grids. Kalpataru and KEC also build water, metro, oil and gas and buildings projects.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Demand is long-cycle; execution is not.** Right-of-way disputes, forest clearances, labour shortages and client payment delays decide the year. Price-variation clauses pass on part of steel, zinc and copper costs; fixed-price contracts do not (part of Kalpataru's book is fixed-price). State water schemes (Jal Jeevan Mission) have paid late, hurting Kalpataru and KEC.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Kalpataru** depends on executing a very large, diverse book and collecting from state water schemes; **KEC** on fixing its civil and railway projects and cutting debt; **Techno Electric** on substation orders and on its data centres filling; **Transrail** on converting its order book while keeping working capital in check; **Skipper** on its new capacity and on exports. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Transmission contractors', 'Kalpataru, KEC, Techno Electric', '6–17%', '15–18%', '**1–51%**'],
                        ['Tower makers with a contracting arm', 'Transrail, Skipper', '10–13%', '24–34%', '**40–54%**'],
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
                    label: 'Lasting: qualifications for hard jobs',
                    text: "To bid for 765 kV lines, HVDC links or foreign utilities, a contractor needs years of completed projects. **Kalpataru**, **KEC**, **Transrail** and **Techno Electric** all have them, which keeps small contractors out of the most valuable work.",
                },
                {
                    label: 'Lasting: making your own towers',
                    text: "**Transrail** and **Skipper** make their own towers, conductors and poles, and **KEC** has tower plants in India, Brazil and Mexico. That gives control over delivery and captures the manufacturing margin; it is a big part of why Transrail and Skipper earn the best returns.",
                },
                {
                    label: 'Wearing: civil and diversified work',
                    text: "**KEC**'s civil and railway projects have become a drag: finished metro and civil projects waiting for handover cost it about ₹10cr a month each, and management has given no margin guidance for two quarters. Diversification has not helped its returns.",
                },
                {
                    label: 'Barely a moat: collections',
                    text: "No contractor controls when a state utility or water board pays. That is why five-year cash conversion is poor across the board and why balance sheets matter more than order books.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Larsen & Toubro**, **Tata Projects** and **Sterling and Wilson** in transmission and infrastructure; **Hitachi Energy**, **Siemens** and **GE Vernova** in substations and equipment; Chinese contractors in overseas bids.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For contractors, the margin is set by the mix of old and new orders and by how smoothly projects run.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: integrated tower makers and complex substations',
                    text: "**Transrail** has held 11–13% and guides 11%; **Skipper** has widened from about 10% to 10.7% as old low-margin contracts ran off and targets 12%; **Techno Electric** guides 13–14% on its substation work. These margins come from in-house manufacturing or technical difficulty.",
                },
                {
                    label: 'Cyclical: order mix',
                    text: "**Kalpataru** held 8–9% and targets more than 0.75 points of pre-tax margin gain this year. Part of its book is fixed-price, so steel and zinc prices move its margin. Middle East shipping delays hurt several companies in Q1.",
                },
                {
                    label: 'Not structural: problem projects',
                    text: "**KEC**'s standalone margin fell to about 4% on civil and metro projects awaiting handover; management now says high-single-digit margins will not return until FY28.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**KEC** has about ₹300cr stuck in Afghanistan and ₹300–400cr overdue from water schemes, and net debt of ₹6,568cr. **Techno Electric** had negative operating cash in FY24 and FY26, despite rising profit.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Transrail**'s net debt roughly doubled relative to profit in Q1 on slower collections, and it proposes a ₹600cr share sale. **Kalpataru** still has about ₹1,500cr due from water schemes.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Skipper** cut finance costs from 4.2% to 3.6% of sales and raised ₹433.5cr of equity to repay debt. **Kalpataru** cleared its Indore real-estate receivables and kept net debt about flat despite ₹250cr of Q1 capex.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Contractors are paid on milestones and clients hold back retention money until the job is proven, so some cash is always tied up. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: India’s grid build-out',
                    text: "Renewable power needs new lines; the bidding pipeline for private transmission projects alone runs to ₹90,000–1,00,000cr a year by Skipper's account. **Techno Electric** has already won ₹2,200cr of its ₹4,000cr FY27 order target and is lowest bidder on ₹2,100cr more.",
                },
                {
                    label: 'Growth driver: grids abroad',
                    text: "**Kalpataru** is targeting large Middle East oil and gas orders; **KEC**'s SAE Towers serves the Americas; **Transrail** has entered Australia; **Skipper** targets ₹1,100cr of export orders this year and a long-run 50% export share.",
                },
                {
                    label: 'Growth driver: new capacity',
                    text: "**Skipper** is adding 75,000 tonnes of tower capacity (now due by September 2026); **Transrail** started a new tower plant at Butibori and is doubling conductor capacity; **Kalpataru** is spending about ₹800cr this year, including a rolling mill.",
                },
                {
                    label: 'Growth driver: data centres',
                    text: "**Techno Electric** owns data centres in Chennai (being upgraded to 35–40 MW for AI servers) with more under construction, targeting ₹40–50cr of data-centre revenue in FY27. **KEC** and **Transrail** are bidding for lines and buildings for data centres.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Kalpataru** kept all FY27 targets (₹30,000cr of orders, 15%-plus revenue growth) and closed its legacy problems. **Techno Electric** grew standalone revenue 25%. **Skipper** widened margins and cut finance costs.",
                },
                {
                    label: 'Cautious',
                    text: "**KEC** kept its 12–15% revenue guidance but has given no margin guidance for two quarters.",
                },
                {
                    label: 'Missed',
                    text: "**Skipper**'s capacity expansion slipped again, to September. **Transrail**'s Q1 revenue grew only 5%, so its 20% target needs a strong second half. **KEC**'s margin recovery moved to FY28.",
                },
                {
                    label: 'Mixed',
                    text: "**Techno Electric**'s data-centre leasing added only 130 kW from ten new customers in Q1, though it signed a 2 MW agreement in Andhra Pradesh.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect the integrated tower makers (Transrail, Skipper) to compound earnings at 15–18% and Kalpataru at about 15%, with KEC and Techno Electric slower until their specific problems are fixed.** The order books support the revenue; the risk is in execution and cash.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Transrail Lighting', 'Order book; own towers and conductors; new geographies', '10% / **15%** / 22%'],
                        ['Skipper', 'New capacity; exports; margin to 12%', '12% / **18%** / 24%'],
                        ['Kalpataru Proj.', 'Large, broad order book; margin gains', '10% / **15%** / 20%'],
                        ['Techno Electric &Eng', 'Substations; data centres', '8% / **14%** / 20%'],
                        ['KEC International', 'Transmission; civil fixed; debt falling', '3% / **10%** / 18%'],
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
                    label: 'Collections and debt',
                    text: "Slow payments from state utilities and water boards are the sector's chronic problem. **KEC** needs about ₹1,000cr of stuck receivables to reach its ₹5,500cr net-debt target; **Transrail**'s collections slowed in Q1.",
                },
                {
                    label: 'Execution on the ground',
                    text: "Right-of-way disputes, labour shortages and supply problems (diesel at Transrail's factories, Middle East shipping) delayed Q1 for most. Every company is relying on the second half.",
                },
                {
                    label: 'Moving into new areas',
                    text: "**Transrail** is adding cooling towers, data centres, battery storage and drones to its charter; **Techno Electric** is betting on data centres. New areas can dilute focus and returns.",
                },
                {
                    label: 'Share sales',
                    text: "**Transrail** has proposed a ₹600cr share sale and **Skipper** raised ₹433.5cr; promoter holdings at Skipper and Kalpataru have fallen over three years. Equity raised at good prices helps; raised to cover working capital, it dilutes.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **11% at 16x, 12% at 18x, 14% at 22x and 17% at 28x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**KEC** carries debt the P/E ignores, so it is dearer than it looks; **Techno Electric** holds large cash, so it is cheaper.",
                },
                {
                    label: 'Reasonable',
                    text: "**Transrail**, **Kalpataru**, **Skipper** and **KEC**: prices that ask for about the growth I expect. For KEC, the debt and the civil projects are why the price is low.",
                },
                {
                    label: 'Full',
                    text: "**Techno Electric**: a little more than my estimate, with the data-centre bet still unproven.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Transrail Lighting', rank: 1, stance: 'COMPOUNDER', segment: MAKER,
            what: "Builds high-voltage transmission lines and substations in India and abroad, and makes its own towers, conductors and poles; recently added cooling-tower construction.",
            view: "**The best returns at a modest price.** 34–35% return on capital for three years, a ₹16,035cr order book and 20% growth guided at an 11% margin. But Q1 growth was 5%, working capital jumped and a ₹600cr share sale is proposed. The price asks for about my ~15% estimate.",
            watch: 'Second-half execution; collections and debt; use of any share-sale money.',
        },
        {
            company: 'Kalpataru Proj.', rank: 2, stance: 'COMPOUNDER', segment: EPC,
            what: "A large EPC contractor for power transmission, buildings and factories, water, oil and gas pipelines and metros, in India and abroad.",
            view: "**The broadest order book, cleaned up.** A record ₹66,607cr book, legacy road and real-estate assets sold, and returns rising to 18%. But part of the book is fixed-price, water-scheme payments are slow and cash conversion is about 50%. The price asks for about my ~15% estimate.",
            watch: 'Order inflow toward ₹30,000cr; water-scheme collections; Middle East oil and gas awards.',
        },
        {
            company: 'Skipper', rank: 3, stance: 'SCALEUP', segment: MAKER,
            what: "One of the largest makers of transmission towers and poles outside China, with a transmission EPC arm and a plastic-pipes business.",
            view: "**Scale, better margins and a stronger balance sheet.** Returns rose to 24%, margins are widening as old contracts run off, and ₹433.5cr of new equity is cutting debt. But Q1 grew 4%, its new capacity is late, and exports are only about 10% of sales. The price asks for about my ~18% estimate.",
            watch: 'The 75,000-tonne expansion by September; export orders; margin toward 12%.',
        },
        {
            company: 'KEC International', rank: 4, stance: 'TURNAROUND', segment: EPC,
            what: "An RPG group EPC contractor for power transmission (with tower plants in India, Brazil and Mexico), civil works, railways and cables.",
            view: "**A strong transmission business carrying weak ones.** Margins of 6–7% with the standalone business at about 4%, net debt of ₹6,568cr and no margin guidance; management says recovery waits for FY28. The price asks for about my ~10% estimate because of those problems.",
            watch: 'Net debt toward ₹5,500cr; handover of finished civil projects; margin guidance returning.',
        },
        {
            company: 'Techno Electric &Eng', rank: 5, stance: 'PRICED', segment: EPC,
            what: "A builder of high-voltage substations and transmission systems that is also rolling out smart meters and building data centres.",
            view: "**The best margins and a big cash pile, but little cash from operations.** 13–16% margins, an order book of about 2.8 years of sales and large net cash (about ₹2,300cr on Screener's figures, which count its investments). But five-year cash conversion is near zero and the data centres are slow to fill. The price needs a little more than my ~14% estimate.",
            watch: 'Data-centre leasing; order inflow; operating cash.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Tower makers with a contracting arm.** **Transrail Lighting: own.** The best returns at a modest price. **Skipper: follow.** Scale and improving margins, with capacity arriving late.",
            "**Transmission contractors.** **Kalpataru: follow.** The broadest order book and a cleaner balance sheet. **KEC International: wait** for its civil projects and debt to be fixed. **Techno Electric: wait** for its data centres and cash flow to prove themselves.",
            "**What would change my view.** For the better: collections improving across the sector, or KEC's civil projects being handed over. For the worse: order inflow slowing, or working capital rising further as growth resumes.",
            "**What to watch next quarter.** Second-half execution everywhere; Transrail's working capital; KEC's debt; Techno Electric's data-centre leasing; Skipper's new capacity.",
        ],
        bottomLine:
            "The grid build-out gives every company here a full order book; the difference is cash. Own Transrail Lighting, follow Kalpataru Proj. and Skipper, and wait on KEC International and Techno Electric until their cash and problem businesses improve.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KPIL/consolidated/' },
        { label: 'Wholesale price index, hot-rolled steel and copper — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
