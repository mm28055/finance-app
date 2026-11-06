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
            'KEC International': 8,
            'Techno Electric &Eng': 14,
            'Transrail Lighting': 11,
            'Skipper': 16,
        },
    },
    standfirst:
        "Five companies that build India's power grid and, increasingly, grids abroad. Kalpataru, KEC and Techno Electric are contractors that design and build transmission lines, substations and other infrastructure; Transrail and Skipper also make the steel towers, poles and conductors themselves. Demand is not the question: the Central Electricity Authority plans about ₹7.93 lakh crore of transmission between FY27 and FY36, ICRA expects ₹5–6 lakh crore of spending by FY32, and all five have record or near-record order books. The questions are whether they turn those orders into profit and cash, and, this year, conduct: a bribery case at KEC, an income-tax search at Transrail and a promoter pledge at Kalpataru all sit in the annual reports. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-30',
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
            note: 'Q1 FY27 was slow almost everywhere: labour shortages around state elections, Middle East shipping delays and diesel shortages at factories. All five kept their full-year revenue guidance, though Techno Electric dropped its ₹60 earnings-per-share target for ‘at least 25%’ growth.',
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
            note: 'Transrail stands out at 34–35% for three years on Screener’s figures (25.8% for FY26 on the company’s own). Kalpataru and Skipper have risen steadily.',
            values: {
                'Kalpataru Proj.': [13, 14, 16, 16, 18],
                'KEC International': [14, 12, 16, 18, 17],
                'Techno Electric &Eng': [18, 8, 17, 17, 15],
                'Transrail Lighting': [22, 27, 35, 35, 34],
                'Skipper': [10, 12, 21, 24, 24],
            },
            cellNotes: {
                'Techno Electric &Eng': 'Held down by large cash and investments (about ₹2,300cr net on Screener’s figures) and by data centres still being built.',
                'Transrail Lighting': 'FY26 is flattered: Screener’s annual operating profit (₹941cr) does not match its own four quarters (₹817cr) or the company’s ₹820cr. The company puts FY26 return on capital at 25.8%.',
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
                'Transrail Lighting': 'FY26 is understated: it divides by Screener’s ₹941cr operating profit. On the company’s ₹820cr it is about 78%, and the company puts its own operating cash at about ₹816cr.',
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
            cellNotes: {
                'Kalpataru Proj.': 'Screener’s net debt is ₹1,701cr at March 2026; the company’s own figure is ₹915cr at March and ₹917cr in June, down from ₹2,765cr a year earlier.',
                'KEC International': 'Leaves out supplier credit (acceptances). Including it, the company reports net debt of ₹6,722cr at March 2026 and ₹6,568cr in June, about 3.5 years of operating profit.',
                'Transrail Lighting': 'Screener shows net cash, probably counting unspent IPO money and investments as cash. The company reports net debt of ₹267cr at March 2026 and ₹548cr in June (0.67 times a year’s operating profit).',
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
                'Techno Electric &Eng': '₹9,600cr at 30 June; about ₹11,000cr by mid-August after new wins. The annual report puts March 2026 at ₹9,567cr (transmission ₹6,855cr, smart meters ₹1,565cr, flue-gas desulphurisation ₹778cr), not the ₹12,600cr in some call transcripts.',
                'Transrail Lighting': '₹16,035cr including ₹400cr as lowest bidder; down slightly from ₹16,361cr at March.',
                'Skipper': '₹9,217cr (company presentation), of which about ₹1,800cr is construction work.',
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
                grades: { qual: { grade: 'A', note: 'Up to 765 kV and HVDC bids' }, integ: { grade: 'A', note: 'Makes its own towers, conductors and poles' }, book: { grade: 'A', note: 'About 2.3 years of sales' }, reach: { grade: 'A', note: 'Africa, South Asia, Middle East, now Australia' }, cash: { grade: 'B', note: 'Net debt ₹548cr in June, double March (company)' } } },
            { company: 'Skipper', trend: 'widening', trendNote: 'Raised ₹433.5cr of equity; credit rating upgraded; setting up in the US, Brazil and UAE.',
                grades: { qual: { grade: 'B', note: 'Supplier audits passed in the US, Finland, Australia' }, integ: { grade: 'A', note: 'One of the largest tower makers outside China' }, book: { grade: 'B', note: 'About 1.6 years of sales' }, reach: { grade: 'C', note: 'Exports about 13% of FY26 sales; halved in Q1' }, cash: { grade: 'B', note: 'Debt falling after the raise' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Nothing here is an own today. Follow Transrail Lighting, with three questions attached.** It builds transmission lines in India and abroad and makes its own towers, conductors and poles. In FY26 it grew revenue 30% (it had promised 25%) at an 11.9% operating margin on its own count, against about 9% at Kalpataru and 8% at KEC. The price asks for only about {need:Transrail Lighting|10}% earnings growth a year, below the 11% I expect (cut from 15% on 24 Oct: its own targets of ₹10,000cr-plus of orders a year and a margin of about 11%, down from 11.9%, support only about that). **The first question is orders, and it is the biggest:** it won only about ₹1,000cr in Q1 and is lowest bidder (L1) on just ₹400cr more, against a ₹10,000cr-plus target for FY27; Kalpataru has already won over ₹17,000cr and KEC has about ₹9,300cr won or L1. Its ₹16,035cr order book covers FY27, but even the 11% I now expect needs roughly ₹10,000cr of wins a year, and it has announced none since June. Its own numbers fall short too: it has about ₹20,000cr of bids awaiting results and expects to win 10–15% of them, which is only ₹2,000–3,000cr (7 August call). Slow client payments also doubled its net debt to ₹548cr, and it has sought approval for a ₹600cr share sale. The other two come from its annual report, not its calls: an income-tax search in March 2026, whose impact the auditor calls ‘presently not ascertainable’, and a ₹79cr loan to a related company, Burberry Infra, that has not come down in two years and on which ₹25cr of interest is owed; management promised repayment by 30 September 2026, and no filing confirming it had been seen by that date. **It becomes an own only if the Q2 results show wins of at least ₹4,000cr for the half (my bar, not a company figure), the Q2 accounts confirm the loan and interest were repaid, and no tax demand follows; until then, follow.**",
                "**Follow Kalpataru and Skipper too.** **Kalpataru** has the largest and broadest order book (₹66,607cr, about 2.4 years of sales) and on 28 September won its first large Gulf order, a UAE gas pipeline worth over ₹4,000cr. It cut its net debt from ₹2,765cr to ₹917cr in a year on its own count and met every FY26 promise. But its operating margin has sat near 9% for four years, promoters have pledged 24.55% of their shares, and about ₹1,500cr is still owed by state water schemes. **The Gulf order was one thing I was waiting for; the margin and the water money are the rest.** **Skipper**, India's largest tower maker, lifted its margin to 10.7% and profit by 26% in Q1 and raised ₹433.5cr of equity. But Power Grid bought about 57% of its FY26 output, free cash has been negative for two years and its new capacity has slipped twice. Kalpataru's price asks for about the growth I expect; Skipper's for a little more.",
                "**Wait on KEC and Techno Electric.** **KEC**'s group margin fell to 5.8% in Q1, net debt including supplier credit is ₹6,568cr, and CRISIL's own estimates put it past its downgrade triggers; its price needs more than the 8% a year I now expect. Power Grid barred it from tenders from November 2025 to June 2026 after a CBI bribery arrest, and that case is now before a court. **Techno Electric** has the best margins (13–17%) and a real lead in high-voltage substations, but it burned ₹590cr of operating cash in FY26, its data-centre subsidiaries lost about ₹46cr, and its auditor flagged ₹90cr of overdue receivables.",
                "**Two things to hold onto before reading the rest.** First, **order books are not the question, except at Transrail; cash and conduct are.** None of these companies turned even 55% of five years' operating profit into cash, and three carry an annual-report finding (a court case, a tax search, a promoter pledge) that the headline numbers do not show. Second, **Q1 FY27 was slow for everyone except Techno Electric** (revenue +0–5% at the other four), and every management is counting on the second half. ICRA found that only about 12% of privately built transmission projects finished by March 2026 were on time, so **second-half promises here deserve a discount.**",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed consolidated results; order books are from the companies. **Skip the cash-cycle chart for this sector**: Screener's formula leaves out unbilled work, so it understates the cash tied up. Hover over a starred name for its caveat.",
                "**Where Screener and the companies disagree.** Screener's net debt differs from the companies' own for KEC, Transrail and Kalpataru, and its FY26 operating profit for Transrail (₹941cr) does not match its own quarters (₹817cr), which flatters Transrail's return on capital. The starred cells give the company figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "A power line is built in three steps: steel towers are made, a contractor puts them up and strings the wires, and substations connect it to the grid. **The plan is large; the bottleneck is execution, not money.** The Central Electricity Authority's March 2026 plan needs about ₹7.93 lakh crore of transmission between FY27 and FY36, roughly ₹80,000cr a year, to connect 900 GW of non-fossil power. ICRA expects ₹5–6 lakh crore of transmission spending from FY27 to FY32. Yet only about 12% of the privately built projects commissioned by March 2026 met their scheduled date, with a median delay of more than ten months. **My view: demand for this work is secure for years; what varies is how fast sites move and how fast clients pay.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel, zinc and aluminium → **towers, poles and conductors** (Skipper, Transrail, KEC, Kalpataru) → **EPC contractor** (engineering, procurement and construction: designs the line, buys the materials and builds it) → transmission owner (Power Grid, state utilities or private developers) → the grid. Private developers now win most new lines through tariff-based competitive bidding (TBCB: the bidder asking the lowest yearly charge wins the right to build and own the line). **Margins are thin for line contractors (6–12%) and better for complex substations (Techno Electric guides 13–14%) and tower making (Skipper's factory arm earned 12.1% in Q1).** **My view: profit sits with whoever owns a scarce skill (765 kV and HVDC substations) or a factory, and leaks away wherever a contractor takes state-government civil work.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Renewable power needs wires.** ICRA counts 107 GW of renewable plants seeking inter-state connection between FY27 and FY31, and solar output in Rajasthan and Gujarat is being cut by 50–60% in daylight hours because lines are missing. HVDC links (direct-current lines that carry bulk power over long distances) are the big-ticket items, such as the ₹24,974cr Barmer–South Kalamb scheme Power Grid won in August. Only about 28% of the smart meters sanctioned under the government's RDSS scheme had been installed under it by June, with the deadline moved to March 2028. Abroad, the Gulf and the US, where data-centre load is driving tower demand, add work. **My view: the Indian pipeline is deep enough for all five; the Gulf and the US are this year's swing factors.**",
                },
                {
                    label: 'Cycles, costs and policy',
                    text: "**Demand is long-cycle; execution and costs are not.** Private-line tendering fell to about ₹50,000–60,000cr in FY26, held up by equipment shortages and land disputes; Skipper expects ₹90,000cr–1 lakh crore in FY27, with revenue following 12–24 months later. Large transformers take about 20 months to arrive (Mercom). Zinc, used for galvanising (rust-proofing), rose 27% between January and September 2026, and steel spiked in February–March. Contracts protect only part of this: about half of Kalpataru's and KEC's books are fixed-price, and only 30–35% of Transrail's contracts carry price-variation clauses. **My view: FY27 is a year of good orders and squeezed execution; FY28 revenue depends on how much of this year's tendering is actually awarded.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Kalpataru** depends on executing a very large, diverse book, collecting its water dues and winning Gulf oil and gas jobs; **KEC** on handing over loss-making metro projects, collecting stuck cash and staying off Power Grid's banned list; **Techno Electric** on substation orders, collecting its contract assets and filling its data centres; **Transrail** on converting bids into orders and clearing its related-party loan and tax search; **Skipper** on Power Grid's ordering, its delayed capacity and exports. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Transmission contractors', 'Kalpataru, KEC, Techno Electric', '6–17%', '15–18%', '**1–51%**', 'Substation skill earns most; civil and water work drags; clients hold back retention money'],
                        ['Tower makers with a contracting arm', 'Transrail, Skipper', '10–13%', '24–34% (Transrail 25.8% on its own count)', '**40–54%**', 'Own factories keep the manufacturing margin; new plant and stock absorb cash'],
                    ],
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Transmission plan, long term', '1.37 lakh circuit km and 8.28 lakh MVA, FY27–FY36', '**₹7.93 lakh crore**, about ₹80,000cr a year', 'CEA, Mar 2026 (via Power Line)'],
                        ['Transmission spending, medium term', 'About 20,000 circuit km of lines needed a year', '**₹5–6 lakh crore, FY27–FY32** (₹0.85–1 lakh crore a year)', 'ICRA, 2026'],
                        ['Power Grid, the largest buyer', 'FY26 capex ₹39,967cr against ₹35,000cr guided', 'About ₹37,000cr in FY27; about ₹90,000cr a year of sector bidding to FY32', 'PL Capital, May 2026'],
                        ['Private-line (TBCB) tenders', '₹50,000–60,000cr in FY26', '**₹90,000cr–1 lakh crore in FY27**', 'Skipper, Q1 FY27 call'],
                        ['HVDC', 'Barmer–South Kalamb (±800 kV, 6 GW) to Power Grid; ₹24,974cr', '₹30,000–35,000cr of HVDC awards within a year', 'T&D India, Aug 2026; Kalpataru'],
                        ['Smart meters (RDSS)', '5.73 crore of 20.33 crore installed (about 28%)', 'Deadline extended to **March 2028**', 'Parliament reply, Aug 2026'],
                        ['Data centres', '1,789 MW operating (H1 2026)', '3,351 MW more planned by 2030', 'Cushman & Wakefield, Sep 2026'],
                        ['Inputs', 'Zinc +27%, aluminium +8.5% (Jan–Sep 2026)', 'Transformer lead times about 20 months; prices doubled in seven years', 'LME via Westmetall; Mercom, Aug 2025'],
                    ],
                    note: 'The forecasters measure different things, so compare each only with itself. My synthesis: sector revenue can grow about 15% a year from FY27 to FY29 if equipment and land access allow.',
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
                    label: 'Lasting: qualifications for the hardest jobs',
                    text: "To bid for 765 kV lines, HVDC links or foreign utilities, a contractor needs years of completed projects and the balance sheet for large bank guarantees. **Techno Electric** says it has built about 350 of India's roughly 500 substations of 400 kV and above (unofficial transcript; the company's own copy could not be opened). **Transrail** finished seven 765 kV lines in FY26; **KEC** is building five HVDC projects; nearly half of **Kalpataru**'s FY26 orders came in jobs above ₹1,000cr. But KEC's management was blunt: ‘There are not too many entry barriers, except for very large projects.’ **My view: the moat is real only at the top end of voltage and size, which is exactly where Techno Electric and the two large groups compete.**",
                },
                {
                    label: 'Lasting: making your own towers and conductors',
                    text: "**Skipper** can make 375,000 tonnes of towers a year; **KEC** 483,800 tonnes including its plants in Brazil and Mexico; **Kalpataru** 2,40,000 tonnes, with a rolling mill announced in August; **Transrail** 1,72,400 tonnes, and it is doubling conductor capacity. The proof that manufacturing earns more than site work is Skipper's own split: its factory arm earned 12.1% in Q1, its construction arm 7.9% and its pipes 5.2%. Transrail says the road builders now entering transmission lack conductor plants. **My view: integration is the main reason the two tower makers earn the best returns, but it also ties up the most capital.**",
                },
                {
                    label: 'Pricing power: limited, and shown by who carries cost risk',
                    text: "Most work is won in open tenders, so nobody here sets prices. **Kalpataru**'s margin has sat at 8–9% for four years; it protects it by hedging over 90% of its metals, not by charging more. **Transrail** cut its FY27 margin guide to about 11% because so few of its contracts pass on cost rises, and says it ‘will not compromise on margins for new competitors’: a bidding rule, not pricing power. **Techno Electric** is the exception: its margin held at 13–17% while India's copper price index rose by about a third in a year, which says its substation skill is paid for. **My view: in this sector, margin discipline at the bid is the only pricing power available.**",
                },
                {
                    label: 'Wearing: civil, water and diversified work',
                    text: "**KEC**'s civil and railway arms have become a drag: finished metro projects that clients have not taken over cost it ‘almost ₹10cr per month on each project’, and railway revenue fell 45% in Q1. **Kalpataru**'s water business collected about ₹1,800cr in FY26 but spent about ₹2,500cr, and it will not bid for new Indian water work for 6–9 months; it also wrote off about ₹515cr invested in Brazil. **My view: diversification bought these two groups bigger order books and weaker returns; their transmission cores are better than the group numbers suggest.**",
                },
                {
                    label: 'Switching costs: low, and the buyers are concentrated',
                    text: "Clients re-tender every job, so there is no lock-in once a line is built. The buyers are few and large: Power Grid bought about 57% of **Skipper**'s FY26 revenue (CARE) and was about 15% of **KEC**'s order book when it banned KEC; **Kalpataru**'s top ten clients account for more than half of its order book. No contractor controls when a state utility or water board pays, which is why five-year cash conversion is poor across the board. **My view: the balance sheet matters more than the order book, because the buyer decides when the cash arrives.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Larsen & Toubro** and **Tata Projects** in large transmission, HVDC and Gulf jobs; **Hitachi Energy**, **Siemens** and **GE Vernova** in substations and HVDC terminals; road builders entering line work; Chinese contractors in Africa. In data centres, **Techno Electric** is the newest of six or seven Chennai operators, against Equinix, NTT, STT, Sify, AdaniConnex and Nxtra.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For contractors, the margin is set by the mix of old and new orders, by who carries metal-price risk, and by how smoothly projects run.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: integrated tower makers and complex substations',
                    text: "**Transrail** has held 11–13% every quarter and beat its cut guide with 11.7% in Q1. **Skipper** moved from about 10% to 10.7% as low-margin legacy contracts ran off, and aims for 12%. **Techno Electric** earned 13.9% on its standalone business in Q1, inside its 13–14% guide. One caution on Techno: treasury income was about ₹175cr in FY26, roughly 30% of pre-tax profit, and it is falling as that cash goes into data centres. **My view: these three margins are earned by skill or integration and should survive a slower year.**",
                },
                {
                    label: 'Cyclical: order mix and metal prices',
                    text: "**Kalpataru** held 8–9%; management says transmission, buildings and oil and gas earn about 10–12%, and water, railways and metros single digits, so the margin moves with the mix. Its pre-tax margin jumped 1.9 points in Q1, but mostly because interest fell from ₹122cr to ₹82cr and other income rose from ₹16cr to ₹77cr; the operating margin rose only 0.3 points, to 8.8%. **My view: Kalpataru's profit growth has come from the balance sheet; the next step has to come from the margin, and that has not moved in four years.**",
                },
                {
                    label: 'Not structural: problem projects',
                    text: "**KEC**'s margin fell to 5.8% in Q1 from 7.0% a year earlier, worse than the ‘not beyond 100 basis points’ (one percentage point) worst case it gave in May; its standalone margin was 4.0%. On the August call management said double-digit margins in FY27 are ‘not possible’ and high single digits ‘should be possible’ in FY28; the ‘maybe FY29’ for double digits dates from May and was not repeated. **My view: until the finished metro and railway jobs are handed over, KEC's reported margin understates its transmission business and overstates the rest of the group.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**KEC** used ₹414cr of operating cash in FY26, and its net debt including supplier credit rose from ₹5,348cr to ₹6,722cr in the nine months to March; CRISIL puts its gross current assets at 320–330 days of sales. **Techno Electric** used ₹590cr of operating cash in FY26 as working-capital days doubled from 91 to 183; it says about ₹1,500cr sits in ‘contract assets’, mainly two lines built with Power Grid (Ishanagar and Dhule), to be turned into cash in Q2 and Q3. **My view: both need large collections in the second half.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Transrail**'s net debt doubled from ₹267cr to ₹548cr in Q1 on late collections, working-capital days rose from 81 to 85, and inventory days rose from 62 to 91 over two years. Its FY26 interest bill of ₹339cr (4.9% of sales) includes charges on about ₹1,200cr of supplier credit. **Kalpataru** promised in May to clear most of about ₹1,600cr of water-scheme dues in 4–5 months; by August it had collected about ₹650cr, and about ₹1,500cr billed and unbilled was still outstanding.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Kalpataru** turned 63% of FY26 operating profit into cash (₹1,534cr, its best in five years), cut net working capital from 91 days to 80 in a year and had its rating raised to AA+ by India Ratings in July. **Skipper** cut net working capital from 231 days in FY22 to 98 in FY26 and finance costs from 4.2% of sales to 3.6%; CARE says its interest cover improved from 2.12 to 2.64 times.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Contractors are paid on milestones, and clients hold back retention money until the job is proven: KEC cites 10% in the UAE, 20% in Saudi Arabia and 30–35% in Kuwait. Supplier credit (acceptances) then carries part of the gap, which is why the companies' own net-debt figures are often higher than Screener's. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Kalpataru Proj.', 'Capex above ₹250cr in Q1, ₹800cr+ for FY27 from internal cash; about ₹650cr of water dues collected by July', 'Net debt ₹917cr (company, June); ₹1,701cr (Screener, March)'],
                        ['KEC International', 'Net debt to about ₹6,000cr by September (figure due with Q2 results) and ₹5,500cr by March, from Afghanistan, water dues, Saudi retention and stock', 'Net debt ₹6,568cr incl. ₹2,075cr of acceptances (June); ₹4,866cr (Screener)'],
                        ['Techno Electric &Eng', 'About ₹1,500cr of contract assets to be collected in Q2–Q3; about ₹1,000cr of data-centre capex', 'Cash and treasury about ₹1,250cr, debt about ₹72cr (June)'],
                        ['Transrail Lighting', 'Net debt rose on late collections, back to a third of a year’s operating profit by March; ₹600cr share sale ‘predominantly an enabling resolution’', 'Net debt ₹548cr (company, June); Screener: ₹85cr net cash (March)'],
                        ['Skipper', '₹433.5cr share issue received July–August, about ₹327.5cr to repay working-capital loans', 'Net debt ₹899cr (Screener, March)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Techno Electric’s and Skipper’s official transcripts could not be opened; their lines come from unofficial transcripts checked against filings and a call summary.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company did in Q1 against what it promised on its Q4 FY26 call (April–May 2026), and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: India’s grid build-out',
                    text: "This year's awards have started to flow. **Techno Electric** has won ₹2,200cr and is lowest bidder on ₹2,100cr more, already above its ₹4,000cr FY27 target. **Kalpataru** has ₹7,668cr won plus ₹7,300cr as lowest bidder against ₹30,000cr, and hinted it may raise the target. **KEC** has ₹6,300cr plus ₹3,000cr. **Transrail** is the laggard at about ₹1,000cr against ₹10,000cr-plus, though it has about ₹20,000cr of bids outstanding. **My view: order inflow is not the constraint this year for four of the five; converting it on time is. Transrail is the exception, and its thin pipeline is now the main question on it.**",
                },
                {
                    label: 'Growth driver: grids and pipelines abroad',
                    text: "**KEC** has about ₹10,000cr of Middle East orders and lowest bids, and its American tower arm, SAE, booked ₹1,650cr of orders in Q1, about four times a year earlier. **Kalpataru** was bidding for Gulf oil and gas jobs of $100–500m each and on 28 September 2026 won its first large one, a UAE gas pipeline worth more than ₹4,000cr (its biggest single order this year, about 15% of a year's sales). That alone roughly doubles its oil and gas order book, which was about ₹4,000cr in June, and pipelines earn 10–12%, above its 9% average. **Transrail**'s overseas revenue fell to about ₹600cr in Q1 from about ₹1,000cr; **Skipper**'s exports halved to ₹162cr as Gulf freight costs made buyers delay deliveries. **My view: the Gulf is the biggest upside and the biggest source of delay.**",
                },
                {
                    label: 'Growth driver: new capacity',
                    text: "**Skipper**'s 75,000-tonne expansion, worth ₹1,000–1,200cr of yearly revenue at full use, is now due in the second half after missing March and June. **Transrail** started its Butibori tower plant in April and finished the first phase of its conductor expansion in September. **Kalpataru** plans ₹800cr-plus of capex, including a rolling mill. **My view: capacity is not scarce for anyone here except Skipper.**",
                },
                {
                    label: 'Growth driver: data centres',
                    text: "Cushman & Wakefield expects 3,351 MW of new Indian data-centre capacity by 2030. **Techno Electric** is building its own: 5.6 MW is live in Chennai, and it targets 250 MW and ₹400–500cr of revenue by 2030, having spent ₹628cr by March. But ten new customers in Q1 took only about 130 kW, and a 2 MW agreement with a global cloud firm is not yet a contract. **KEC** won its first line to feed a data centre. **My view: for contractors, the power lines into data centres are the better business; owning the buildings is a different, capital-hungry game.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Kalpataru** met every FY26 promise (revenue +22% against 20–25%, pre-tax margin up 1.2 points, working capital 75 days) and kept every FY27 target. **Techno Electric** has already won its FY27 order target and grew standalone revenue 25%. **Transrail**'s Q1 margin of 11.7% beat its 11% guide, and **Skipper**'s profit rose 26% against a full-year guide of about 30%.",
                },
                {
                    label: 'Cautious',
                    text: "**KEC** kept its revenue and order guidance (‘maybe half or 1% difference’) but for a second quarter gave no margin guidance. **Techno Electric** replaced its ₹60 FY27 earnings-per-share target with ‘at least 25%’ growth in revenue and profit. **Transrail** cut its margin guide to about 11% in May, then beat it.",
                },
                {
                    label: 'Missed',
                    text: "**KEC**: Q1 revenue was flat against 12–15% guided, civil revenue grew 6% against 30%, and net debt fell only ₹154cr against a ₹1,000cr full-year cut; an investor noted in May that its debt had risen and margins had not improved for three years despite start-of-year promises. **Transrail**: FY26 orders were ₹8,520cr against ₹10,000cr promised, and Q1 revenue grew 5% against 20% for the year. **Skipper**: capacity promised for March, then June, is now due in the second half. **Kalpataru**'s water collections are behind its promise.",
                },
                {
                    label: 'Mixed',
                    text: "**Techno Electric**: FY26 standalone earnings per share were ₹46.6 against about ₹50 hoped for, blamed on the Gulf war; data-centre revenue talk of about ₹100cr was cut to ₹40–50cr and pushed into the second half. **Kalpataru**'s Gulf oil and gas awards were pending at the call; the first, a UAE gas pipeline worth over ₹4,000cr, came on 28 September.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Kalpataru to compound earnings at about 15%, Skipper at about 16%, Techno Electric at about 14%, Transrail at about 11% and KEC at about 8%.** The order books support the revenue; the risk is execution and cash. I have cut **Transrail** from 15% to 11% (24 Oct): its own plan is ₹10,000cr-plus of orders a year at a margin of about 11% (11.9% in FY26), and orders at that pace lift revenue to roughly ₹10,500cr by FY30, about 11% a year; faster growth needs orders it has not yet won. I have cut **Skipper** from 18% to 16%: its FY27 profit guide is about 30%, but revenue is guided at only 15%, free cash has been negative for two years and Power Grid buys 57% of its output. I have cut **KEC** from 10% to 8%: it has missed its start-of-year promises for three years, Q1 profit fell 42%, and CRISIL's downgrade triggers are already crossed. Techno Electric's substation business could beat 14%, but data-centre depreciation and falling treasury income will hold back reported profit.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Transrail Lighting', 'Order book; own towers and conductors; new geographies; governance questions to clear; its ₹10,000cr-plus yearly order target at an ~11% margin supports about 11%', '7% / **11%** / 18%'],
                        ['Skipper', 'New capacity; exports; margin to 12%; Power Grid ordering', '9% / **16%** / 21%'],
                        ['Kalpataru Proj.', 'Large, broad order book; Gulf oil and gas; margin gains', '10% / **15%** / 20%'],
                        ['Techno Electric &Eng', 'Substations; data centres; falling treasury income', '8% / **14%** / 20%'],
                        ['KEC International', 'Transmission and SAE; civil jobs closed; debt falling', '3% / **8%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Kalpataru Proj.', 'Orders above ₹30,000cr; revenue ~15%+; pre-tax margin +0.75–1 point', '₹800cr+ (₹250cr+ in Q1)', '**Delivered**: FY26 all met; ₹17,000cr+ of orders won by 28 Sep; Q1 pre-tax margin +1.9 points; water collections behind'],
                        ['KEC International', 'Revenue +12–15%; net debt ~₹5,500cr by March; no margin guide', '~₹400cr', '**Missed**: Q1 revenue flat; margin −1.2 points; net debt down ₹154cr'],
                        ['Techno Electric &Eng', 'Revenue ₹4,000cr+; margin 13–14%; EPS ₹60 dropped for ‘25%+ growth’', '₹1,250cr (₹1,000cr data centres)', '**Mixed**: orders beat; FY26 EPS ₹46.6 against ~₹50; data-centre revenue cut'],
                        ['Transrail Lighting', 'Revenue +20%; margin ~11%; orders ₹10,000cr+', 'IPO-funded plants; ₹203cr of equipment', '**Behind**: Q1 revenue +5%, orders ~₹1,000cr; margin beat'],
                        ['Skipper', 'Revenue +15%; profit ~+30%; ‘higher revenue growth next year’ (May: 20–25% from FY28)', '~₹250cr in FY27', '**Slipping**: profit on track; capacity late twice; Q1 revenue +4.5%'],
                    ],
                    note: 'Techno Electric’s and Skipper’s guidance comes from unofficial transcripts; the headline numbers were checked against filings, but the exact wording could not be.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; the three most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'A bribery case and a tender ban (KEC)',
                    text: "In March 2025 the CBI arrested a Power Grid official and a KEC employee over an alleged ₹2.5 lakh bribe. Power Grid then barred **KEC** from new tenders from 18 November 2025, when it was about 15% of KEC's order book, until 26 June 2026. The chargesheet has been filed and the court has taken cognizance, and the auditor added an emphasis of matter saying the impact ‘is currently not determinable’. **My view: the ban is over, but a conviction could bring a longer one from India's largest transmission buyer.**",
                },
                {
                    label: 'A tax search and a related-party loan (Transrail)',
                    text: "The Income Tax Department searched **Transrail**'s offices, plants and the homes of its directors and key managers between 24 and 28 March 2026. The auditor added an emphasis of matter; no demand has been raised, and neither the Q4 nor the Q1 call mentioned it. Separately, a ₹79cr unsecured loan to a related company, Burberry Infra, was unchanged between March 2025 and March 2026, while unpaid interest on it grew from ₹16.5cr to ₹25.1cr. Management said in August that it would be repaid by 30 September 2026; no filing confirming repayment had been seen by 30 September, so the Q2 accounts are the check. Disputed indirect tax also rose from ₹88.2cr to ₹133.8cr. **My view: none of this is large against a ₹6,880cr business, but its disclosure is the weakest here.**",
                },
                {
                    label: 'Pledges, guarantees and write-offs',
                    text: "**Kalpataru**'s promoters had pledged 24.55% of their shares (8.24% of the company) per the FY26 annual report; management says the loans are about a quarter of the pledged value, and ‘we have never said that it would be zero’. Its guarantees for subsidiaries rose from ₹579.5cr to ₹850.8cr, and **Skipper** has guaranteed ₹185.8cr for its joint venture. Promoter holdings have fallen since 2023 at Kalpataru (41.1% to 33.6%), Skipper (71.9% to 61.5%, through share issues) and Techno Electric (61.5% to 56.9%). **My view: none of these is alarming alone; the Kalpataru pledge is the one to track each quarter.**",
                },
                {
                    label: 'Collections and credit metrics',
                    text: "**KEC**'s adjusted interest cover of 2.2–2.3 times and outside liabilities of 3.2–3.3 times net worth, on CRISIL's May 2026 estimates, are both past the 2.5 and 3.0 times that CRISIL names as downgrade triggers; its debt cut depends on Afghanistan cash that slipped from Q1 to Q2. **Techno Electric**'s auditor flagged ₹89.6cr of receivables as substantially overdue, ₹59cr of it from a terminated Afghanistan project; management says no provision is needed. **My view: a KEC downgrade would raise its borrowing cost just when it most needs cheap working capital.**",
                },
                {
                    label: 'Concentration and execution on the ground',
                    text: "Power Grid bought about 57% of **Skipper**'s FY26 revenue, so a slowdown there hits it hardest. Across the sector, land disputes, forest clearances, labour shortages (KEC had 12,000 of 30,000 workers on site at one point) and transformer delays set the pace, and the Gulf war cost KEC about ₹300cr of Q1 revenue. Every company is relying on the second half, in a sector where about 12% of private projects finish on time.",
                },
                {
                    label: 'Capital going into new areas',
                    text: "**Techno Electric** plans about ₹1,000cr a year of data-centre capex, while its two data-centre subsidiaries lost ₹29.9cr and ₹16.2cr in FY26; it does not report data-centre revenue. **Transrail** has added drones, defence, battery storage and data centres to its permitted businesses and sought approval for a ₹600cr share sale. **Skipper** has spent faster than it generates cash for two years. **My view: each is asking shareholders to fund expansion before its core business has shown it can turn profit into cash.**",
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
                    label: 'What EV/EBITDA changes, and where the table’s debt differs',
                    text: "The live table uses Screener's net debt. For **KEC** that leaves out about ₹2,075cr of supplier credit, so KEC is dearer than the table shows. For **Techno Electric** it counts ₹2,316cr of net cash including long-term investments, against the company's ₹1,250cr of cash and treasury, so it is less cheap than it looks. For **Transrail** it assumes net cash against the company's ₹548cr of net debt, a small difference against its market value. For **Kalpataru** it runs the other way: the company's ₹917cr is well below Screener's ₹1,701cr.",
                },
                {
                    label: 'Fits, with some room: Transrail',
                    text: "**Transrail**'s price needs about {need:Transrail Lighting|10}% earnings growth a year against my 11% (cut from 15% on 24 Oct, because orders at its own ₹10,000cr-plus target support only about that), still a margin of safety, for the company with the best margins and returns among the five. **My view: the discount is not a mistake by the market; it prices the tax search, the related-party loan and a weak first quarter of orders. It is a follow, not an own, until those clear; then it is the cheapest good business in the note.**",
                },
                {
                    label: 'Fits: Kalpataru and Skipper',
                    text: "**Kalpataru** needs about {need:Kalpataru Proj.|14}% a year against my 15%, and **Skipper** about {need:Skipper|17}% against my 16%, just inside fits. Both are priced for roughly what I expect, with little room for disappointment. Kalpataru's case rests on the margin finally moving; Skipper's on its new capacity and a revival in Power Grid's ordering.",
                },
                {
                    label: 'Full: KEC',
                    text: "**KEC** needs about {need:KEC International|12}% a year against my 8%. The debt and the problem projects are why the price is low, but it is not low enough for a group whose margin is still falling, and the court case is a risk the price cannot easily measure. **My view: worth a look only if the ₹1,000cr debt cut arrives by March and the margin turns.**",
                },
                {
                    label: 'On the edge: Techno Electric',
                    text: "**Techno Electric** needs about {need:Techno Electric &Eng|15–17}% a year depending on the day's price, against my 14%, so it sits on the line between a fair and a full price. The substation business may well grow faster than that, but reported profit carries falling treasury income and data-centre depreciation, and the data centres are still mostly empty. **My view: a fine contractor at a price that already assumes the data-centre bet works.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Transrail Lighting', rank: 1, stance: 'SCALEUP', segment: MAKER,
            what: "Builds high-voltage transmission lines and substations in India and abroad (41% of its order book is overseas), and makes its own towers, conductors and poles; it has just bought a cooling-tower builder.",
            view: "**The best-run contractor here, at the lowest price, but short of orders and with two annual-report questions.** FY26 revenue rose 30% at an 11.9% margin, operating cash reached ₹643cr, and the order book is ₹16,035cr, about 2.3 years of sales. But Q1 revenue grew 5%, orders were only about ₹1,000cr, net debt doubled to ₹548cr, and the auditor flagged a March 2026 income-tax search that neither call mentioned. The price needs about {need:Transrail Lighting|10}% growth a year against my ~11%; the thin orders and the governance questions are what the discount is for, and why it is a follow until Q2 wins catch up and both questions clear. **24 Oct 2026:** growth estimate cut from 15% to 11%, because its own targets (₹10,000cr-plus of orders a year at a margin of about 11%) support only about that pace.",
            watch: 'Repayment of the ₹79cr Burberry Infra loan and ₹25cr of interest, due by 30 September 2026 (no filing seen by 30 September; check the Q2 accounts); any demand from the tax search; order wins from ₹20,000cr of bids and net debt falling back.',
        },
        {
            company: 'Kalpataru Proj.', rank: 2, stance: 'SCALEUP', segment: EPC,
            what: "A large EPC contractor for power transmission, buildings and factories, water, oil and gas pipelines and metros in India and abroad, with its own tower plants and a Swedish line builder, LMG.",
            view: "**The broadest order book and a repaired balance sheet, but a flat margin.** A record ₹66,607cr book, net debt down from ₹2,765cr to ₹917cr in a year on its own count, an AA+ rating and every FY26 promise met. But the operating margin has sat near 9% for four years, about ₹1,500cr of water money is still owed, and promoters have pledged 24.55% of their shares. The price needs about {need:Kalpataru Proj.|14}% a year against my ~15%. 5 Nov 2026 (Q2 filing): the order book reached a record ₹71,846cr, net debt fell to ₹72cr from ₹3,169cr a year earlier, CRISIL and India Ratings rate it AA+/Stable, and Amit Uplenchwar becomes Joint MD and CEO from January 2027.",
            watch: 'Orders towards ₹30,000cr (over ₹17,000cr won by 28 September) and more Gulf awards; water collections; use of the ~₹700cr from the LMG listing; the pledge falling; and the appeal by its 49.57% venture Kurukshetra Expressway after the Delhi High Court on 29 September upheld setting aside its termination-payment award against NHAI.',
        },
        {
            company: 'Skipper', rank: 3, stance: 'SCALEUP', segment: MAKER,
            what: "India's largest maker of transmission towers and poles, with a domestic transmission-construction arm and a plastic-pipes business; Power Grid bought about 57% of its FY26 output.",
            view: "**Scale and a stronger balance sheet, tied to one buyer.** Return on capital rose to 24%, the Q1 margin reached 10.7%, profit rose 26%, and ₹433.5cr of new equity is repaying loans. But Q1 revenue grew 4.5%, exports halved, free cash has been negative for two years and the 75,000-tonne expansion has slipped twice. The price needs about {need:Skipper|17}% a year against my ~16%. 1 Nov 2026: its Q2 update put the order book at a record ₹10,065cr with ₹1,054cr of export orders, and the board approved buying Sansha Fastener; it stays follow until the expansion runs.",
            watch: 'The expansion running in the second half; the ₹1,054cr of export orders (Q2 update) turning into revenue; margin moving towards 12% and less reliance on Power Grid.',
        },
        {
            company: 'KEC International', rank: 4, stance: 'TURNAROUND', segment: EPC,
            what: "An RPG group EPC contractor for power transmission (with tower plants in India, Dubai, Brazil and Mexico), civil works, railways, cables and renewables.",
            view: "**A good transmission franchise carrying a weak group.** The Q1 margin fell to 5.8% and the standalone business earned ₹1cr; net debt including supplier credit is ₹6,568cr, and CRISIL's own estimates put its interest cover and leverage past its downgrade triggers. Power Grid's tender ban has been lifted, and on 24 Oct 2026 Power Grid gave it ₹2,872cr of 765 kV line orders, its largest-ever single domestic transmission order (about 12% of a year's sales); but the bribery case is before a court and the auditor says its impact cannot yet be measured. The price needs about {need:KEC International|12}% a year against my ~8%. 23 Oct 2026: stays wait though the price now fits; leverage sits past CRISIL's triggers and the bribery case is unresolved.",
            watch: 'Net debt at ~₹6,000cr for September (target; the figure comes with the Q2 results, and was ₹6,568cr in June) and ~₹5,500cr by March; handover of the stuck metro projects; the court case and any rating action.',
        },
        {
            company: 'Techno Electric &Eng', rank: 5, stance: 'PRICED', segment: EPC,
            what: "A builder of high-voltage substations and transmission systems that also installs and runs smart meters and is building its own data centres.",
            view: "**The best margins and the most skill, but no cash from operations.** Margins of 13–17%, a leading share of India's 400 kV-plus substations and an order book of about ₹11,000cr by August. But operating cash was −₹590cr in FY26, profit after tax has fallen year on year for four quarters, the data-centre subsidiaries lost about ₹46cr and the auditor flagged ₹90cr of overdue receivables. The price needs about {need:Techno Electric &Eng|17}% a year against my ~14%. By 28 September the price was only about 1% lower, but the daily feed's P/E had dropped to {pe:Techno Electric &Eng|22.6} on a higher trailing-profit figure, so the price check reads {label:Techno Electric &Eng|fits}; the call stays wait until operating cash turns and a data-centre tenant signs. 23 Oct 2026: stays wait though the price fits; operating cash is still deeply negative.",
            watch: 'Sale of the Ishanagar and Dhule lines and operating cash turning positive; a signed contract with a large cloud tenant; data-centre capex staying within ₹1,000cr.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Tower makers with a contracting arm.** **Transrail Lighting: follow.** The best margins and returns at the lowest price, but only about ₹1,000cr of orders won plus ₹400cr as lowest bidder against a ₹10,000cr-plus FY27 target; Q2 wins must catch up, the related-party loan, due to be repaid by 30 September (no filing seen by then), must show as repaid in the Q2 accounts, and the tax search must end without a demand. **Skipper: follow.** Better margins and a cleaner balance sheet, but one buyer takes over half its output and its capacity is late.",
            "**Transmission contractors.** **Kalpataru: follow.** The broadest book and a repaired balance sheet; the flat margin and the pledge hold it back. **KEC International: wait** for debt to fall and the stuck projects to be handed over; the court case is an open risk. **Techno Electric: wait** for operating cash to turn and for a signed data-centre tenant.",
            "**What would change my view.** For the better: Transrail winning at least ₹4,000cr of orders in the half and clearing both annual-report questions; KEC's September net debt, due with its Q2 results, coming in near its ₹6,000cr target (₹6,568cr in June); Techno Electric collecting its contract assets. For the worse: a tax demand at Transrail, a rating downgrade or fresh ban at KEC, another capacity delay at Skipper, or zinc and steel staying high while fixed-price contracts run.",
            "**What to watch next quarter.** Transrail: whether the Q2 accounts show the Burberry loan repaid, order wins and net debt. Kalpataru: the margin, water collections and more Gulf awards. KEC: debt and margin. Techno Electric: operating cash and leasing. Skipper: the new capacity and exports.",
        ],
        bottomLine:
            "The grid build-out fills every order book here; the differences are cash and conduct. Nothing here is an own yet: follow Transrail Lighting (an own only once Q2 order wins catch up, its related-party loan is repaid and the tax search ends quietly), Kalpataru Proj. and Skipper, and wait on KEC International and Techno Electric until their cash and problem businesses improve.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KPIL/consolidated/' },
        { label: 'Wholesale price index, hot-rolled steel and copper — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'CEA transmission plan for 900 GW of non-fossil capacity by 2035-36 — Power Line, May 2026', url: 'https://powerline.net.in/2026/05/25/integrating-renewables-ceas-transmission-plan-for-900-gw-of-non-fossil-fuel-capacity-by-2035-36/' },
        { label: 'National Electricity Plan: transmission to 2027 — Mercom', url: 'https://www.mercomindia.com/transmission-infrastructure-2027-cea' },
        { label: 'Only 12% of TBCB transmission projects met their scheduled date — ICRA, via Saur Energy', url: 'https://www.saurenergy.com/solar-energy-news/only-12-of-tbcb-transmission-projects-met-scod-raising-re-curtailment-risks-icra-12145004' },
        { label: 'Power Grid wins the Barmer HVDC scheme — T&D India, Aug 2026', url: 'https://www.tndindia.com/pgcil-clinches-barmer-hvdc-scheme-with-winning-tariff-quote-of-over-rs-3200-crore/' },
        { label: 'Smart-meter installations at 7.24 crore (Parliament reply) — T&D India, Aug 2026', url: 'https://www.tndindia.com/indias-smart-meter-population-at-7-24-crore-parliament/' },
        { label: 'India’s data-centre capacity reaches 1,789 MW in H1 2026 (Cushman & Wakefield) — Construction World', url: 'https://www.constructionworld.in/latest-construction-technology/india---s-data-centre-capacity-reaches-1-789-mw-in-h1-2026/97528' },
        { label: 'Power Grid Q4 FY26 result update — PL Capital, May 2026', url: 'https://www.plindia.com/pl-research/power-grid-corporation-of-india-pwgr-in-q4fy26-result-update-strong-transmission-pipeline-capex-cycle-accelerating-buy/' },
        { label: 'Supply-chain shortages and inflation delay transmission projects — Mercom', url: 'https://www.mercomindia.com/supply-chain-shortages-and-inflation-delay-power-transmission-projects' },
        { label: 'LME zinc cash prices — Westmetall', url: 'https://www.westmetall.com/en/markdaten.php?action=table&field=LME_Zn_cash' },
        { label: 'KEC International rating rationale — CRISIL, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/KECInternationalLimited_May%2007_%202026_RR_394204.html' },
        { label: 'Skipper rating rationale — CARE Ratings, Jun 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202606140658_Skipper_Limited.pdf' },
        { label: 'Kalpataru Projects Q1 FY27 earnings call transcript — company', url: 'https://kalpataruprojects.com/api/view-file/KPIL_Q1%20FY27_Earnings%20Call%20Transcript.pdf' },
        { label: 'Kalpataru Projects FY26 annual report — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/ad107720-1b1a-4f01-8fee-05acba286eb0.pdf' },
        { label: 'Kalpataru Projects: LMG listing on Nasdaq Stockholm — BSE filing, 9 Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=051dd3cf-a4a6-42c4-9244-8a1dd4f4497a.pdf' },
        { label: 'Kalpataru Projects: UAE gas pipeline order (Major, over ₹4,000cr) — NSE filing, 28 Sep 2026', url: 'https://nsearchives.nseindia.com/corporate/KALPATPOWR_28092026084735_SEIntimationPR28092026.pdf' },
        { label: 'Kalpataru Projects: ₹2,025cr of orders, ₹13,219cr YTD — NSE filing, 24 Sep 2026', url: 'https://nsearchives.nseindia.com/corporate/KALPATPOWR_24092026084832_SEIntimationPR24092026.pdf' },
        { label: 'KEC International Q1 FY27 earnings call transcript — company', url: 'https://www.kecrpg.com/public/media/earningsCallRecordingFilesMedia/KEC%20Q1%20FY27%20Earnings%20Call%20Transcript.pdf' },
        { label: 'KEC International FY26 annual report — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/dd9830e5-29a5-4316-95c0-8dd5ee893d7b.pdf' },
        { label: 'Power Grid removes KEC International from its exclusion list — Upstox, Jun 2026', url: 'https://upstox.com/news/market-news/stocks/power-grid-removes-kec-international-from-its-exclusion-list-here-s-how-shares-are-faring-on-monday/article-196052/' },
        { label: 'Techno Electric & Engineering FY26 annual report — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=084a8c32-282f-4b14-b2da-14e51fb871cc.pdf' },
        { label: 'Transrail Lighting Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fa74a2ff-5a41-470f-943b-d0def2c1a4bd.pdf' },
        { label: 'Transrail Lighting FY26 annual report — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=09f9c09a-cbf4-43ac-9e56-da1105fbecad.pdf' },
        { label: 'Skipper Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=551d4dce-3db0-4ead-8d99-a22d2ae66e40.pdf' },
        { label: 'Skipper FY26 annual report — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/20deec22-ccc2-4b86-ab32-98840cb2b2a5.pdf' },
    ],
};
