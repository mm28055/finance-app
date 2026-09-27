import { SectorOverview } from './types';
import { constructionPsuBusinesses } from './construction-psu-businesses';
import { constructionValuationInputs } from './card-data/construction';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const PSU_PMC = 'Project managers and consultants — paid a fee on other people’s projects';
const PSU_EPC = 'Railway and road contractor — builds and owns projects';

export const constructionPsu: SectorOverview = {
    sector: 'Construction',
    title: 'Construction · Government project managers and PSU contractors',
    format: 'ranked',
    businesses: constructionPsuBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: constructionValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Engineers India': 11,
            'NBCC': 15,
            'Rites': 8,
            'Ircon Intl.': 6,
        },
    },
    standfirst:
        "The Construction sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This is the group of four government-owned companies. Three of them do not build much themselves: **NBCC** manages building projects for ministries and redevelops old government colonies in Delhi, **Engineers India** designs and supervises refineries and pipelines, and **RITES** designs, inspects and supervises railway and transport projects and exports trains. They are paid fees on other people's money, hold large client balances and need almost no machinery. The fourth, **Ircon**, is a railway and highway contractor that also owns toll and annuity roads. This edition was built from the last two earnings calls or investor meetings for each (NBCC held no Q4 call and Ircon no Q1 call), the FY26 annual reports, the rating reports of CRISIL, CARE and Infomerics, the Q1 FY27 presentations, and sector work from ICRA, CareEdge, India Ratings and PRS. The headline: these are the best-returning businesses in construction, with returns on capital of 23–30% for the three fee earners, but their order books are not turning into revenue at the pace promised, much of their cash belongs to clients, and none of the four is priced to fit my growth estimate today. Every chart uses filed results.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted as standalone.',
            note: "Margins here are set by the mix of work, not by prices. RITES earns 22–24% because most of its profit comes from consultancy, inspection and leasing. NBCC and Ircon earn single digits because the whole cost of the buildings, railway lines and roads they manage or build passes through their revenue. Engineers India sits between the two: consultancy earns about 24% and turnkey work 5–8%. Large other income, mostly interest on cash, sits below this line: about a third of pre-tax profit at NBCC and Engineers India, and about 60% of Ircon's standalone pre-tax profit.",
            values: {
                'NBCC': [5, 4, 4, 6, 7],
                'Engineers India': [8, 13, 29, 16, 15],
                'Ircon Intl.': [11, 7, 7, 8, 10],
                'Rites': [23, 24, 23, 22, 22],
            },
            cellNotes: {
                'Engineers India': "Q3 FY26 includes a ₹221cr change order on a turnkey job, booked in one quarter; without it the margin would have been in the mid-teens. The auditor has separately flagged ₹86cr of FY25 revenue booked on an HRRL change order that is still unapproved.",
                'NBCC': "Fees on government-funded projects fell to 5–8% from 7–10%. Q1 FY27 was lifted by marketing fees on the sale of Bharat Business Park; the company's own standalone margin was 8.77%.",
                'Ircon Intl.': "Consolidated, including toll and annuity road companies that earn high margins. The company's own standalone margin before other income was 4.2% in FY26 and 5.3% in Q1 FY27 (company measure).",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: "None of the four is growing steadily. NBCC and Engineers India fell in the last two quarters although both hold record or near-record order books; Ircon has shrunk for two years as nomination work dried up; RITES grew only 9% in Q1 after promising 'disruptive growth'. Order books are not turning into revenue at the pace promised.",
            values: {
                'NBCC': [12, 19, 8, -2, -5],
                'Engineers India': [39, 34, 58, -8, -6],
                'Ircon Intl.': [-22, -19, -19, -7, 10],
                'Rites': [1, 1, 6, 28, 9],
            },
            cellNotes: {
                'NBCC': "Consolidated Q1 FY27 fell 5.5%, but standalone revenue rose 10% to ₹1,823cr; the subsidiaries HSCC and HSCL are dropping loss-making mandates.",
                'Engineers India': "Q3 FY26 includes the ₹221cr change order. Q1 FY27: consultancy +22%, turnkey −33% as older projects tapered.",
                'Rites': "Q4 FY26 is the seasonal year-end peak. Q1 FY27 export revenue was only ₹1cr because the first Bangladesh train shipped in Q2.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated unless noted as standalone.',
            note: "NBCC, Engineers India and RITES earn 23–30% because they need almost no machinery or plants; clients' money funds the work. Ircon has fallen from 18% to 9% as it put about ₹3,000cr into toll and annuity road companies and railway joint ventures that earn little so far.",
            values: {
                'NBCC': [21, 27, 32, 33, 29],
                'Engineers India': [25, 24, 22, 29, 30],
                'Ircon Intl.': [14, 16, 18, 12, 9],
                'Rites': [29, 30, 25, 22, 23],
            },
            cellNotes: {
                'Ircon Intl.': "Falls as borrowings in its road companies rose from ₹1,399cr (FY22) to ₹5,726cr (FY26).",
            },
        },
        {
            key: 'ccc',
            more: true,
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated unless noted as standalone.',
            note: "Read these with care. Much of the work is funded by client advances that this measure ignores, and for Ircon and RITES the payable days are calculated against a small materials bill, which throws the figure far below zero in some years. Debtor days are the better guide: NBCC's rose from 93 to 144 in FY26, and RITES's are about 125–141.",
            values: {
                'NBCC': [96, 82, 102, 93, 144],
                'Engineers India': [48, 40, 37, 53, 45],
                'Ircon Intl.': [34, 30, 23, -592, -468],
                'Rites': [77, -367, 134, 123, -317],
            },
            cellNotes: {
                'Ircon Intl.': "The FY25–FY26 figures are distorted by how payable days are computed; debtor days actually rose from 23 (FY24) to 56 (FY26).",
                'Rites': "FY23 and FY26 are distorted by the payable-days calculation. CARE puts the collection period at 125 days in FY26 (135 in FY25); Screener shows 141 debtor days.",
                'NBCC': "Receivables of ₹5,092cr at March 2026 were a key audit matter. Client advances fund most of the work, so NBCC's working capital is negative on the company's own measure.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated unless noted as standalone.',
            note: "Only RITES turns most of its operating profit into cash (69% over five years). NBCC and Engineers India convert about a third or less because client advances and receivables swing from year to year. Ircon's operating cash has been negative for four years as its road companies spend on construction.",
            values: {
                'NBCC': [39, -108, -1, 104, 71, 34],
                'Engineers India': [14, -36, 74, 23, 46, 27],
                'Ircon Intl.': [242, -39, -7, -131, -80, -17],
                'Rites': [43, 74, 65, 117, 56, 69],
            },
            cellNotes: {
                'Ircon Intl.': "Operating cash was −₹1,110cr in FY25 and −₹618cr in FY26. FY22 was lifted by a large inflow of client advances.",
                'Engineers India': "Operating cash was ₹319cr in FY26 against ₹699cr of operating profit. Client advances have shrunk relative to revenue: Screener's working-capital days moved from −179 (FY22) to −60 (FY26).",
                'NBCC': "FY23 operating cash was −₹374cr. FY26 was ₹439cr against ₹619cr of operating profit as debtor days rose to 144.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated unless noted as standalone.',
            note: "RITES turns 13% of revenue into free cash over five years, which pays its 85–95% dividends. NBCC and Engineers India turn only 1–2% because most of their revenue is pass-through contract value. Ircon has burned cash in four of five years as it builds its own road assets.",
            values: {
                'NBCC': [1.0, -4.3, -0.5, 2.8, 3.1, 0.7],
                'Engineers India': [0.8, -4.4, 5.7, 2.4, 6.4, 2.3],
                'Ircon Intl.': [18.6, -3.6, -7.4, -20.1, -12.7, -6.5],
                'Rites': [6.3, 16.1, 12.0, 23.0, 11.0, 13.4],
            },
            cellNotes: {
                'Ircon Intl.': "FY26 free cash was −₹1,148cr on Screener's figures.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated unless noted as standalone.',
            note: "Below zero means more cash than debt. All four look cash-rich, but much of the cash is clients' money held for their projects. NBCC's net cash of about ₹6,535cr on Screener compares with only about ₹220cr unencumbered at September 2025 (CRISIL). Ircon says 'our own cash is about ₹950 crores' of about ₹4,200cr reported, against ₹5,726cr of borrowings in its road companies.",
            values: {
                'NBCC': [-27.4, -14.3, -10.1, -9.4, -10.6],
                'Engineers India': [-7.1, -7.3, -8.6, -5.3, -4.2],
                'Ircon Intl.': [-8.7, -6.6, -3.6, -2.0, -0.7],
                'Rites': [-4.8, -4.7, -4.9, -6.4, -5.2],
            },
            cellNotes: {
                'NBCC': "Mostly client money. The finance director gave 'cash' of ₹666cr at 30 June 2026.",
                'Ircon Intl.': "Standalone debt is minimal; the borrowings are project loans in its toll and annuity road companies.",
                'Engineers India': "CARE counts ₹1,359cr of its own liquid investments and cash at March 2026; it has no term debt.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated unless noted as standalone.',
            note: "These are people businesses: NBCC and Engineers India spend about 1% of revenue. RITES spends more because it buys locomotives to lease to Indian Railways. Ircon's jump from FY24 is its road companies building toll and annuity highways, not its own equipment (₹50–60cr a year).",
            values: {
                'NBCC': [0.1, 0.1, 0.4, 2.7, 0.3, 0.8],
                'Engineers India': [0.9, 1.1, 1.0, 1.4, 1.8, 1.2],
                'Ircon Intl.': [0.6, 1.0, 6.8, 9.8, 5.9, 5.1],
                'Rites': [5.3, 5.2, 5.6, 6.1, 2.6, 4.9],
            },
            cellNotes: {
                'NBCC': "Fixed assets rose from ₹185cr (March 2024) to ₹614cr (March 2026) after NBCC bought a tower in its own Bharat Business Park project at Sarojini Nagar, paid for in instalments.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'mandate', label: 'Government mandate', description: 'Work handed over on nomination or as the designated agency, rather than won in open bidding.' },
            { key: 'book', label: 'Order-book visibility', description: 'How many years of revenue the order book covers, and how much of it is actually moving.' },
            { key: 'price', label: 'Pricing and mix', description: 'Fee rates, and the share of work that earns consultancy margins rather than contractor margins.' },
            { key: 'capital', label: 'Capital needed', description: 'How little of its own capital each rupee of profit needs.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what the auditors, rating agencies and disclosures show.' },
        ],
        rows: [
            { company: 'Engineers India', trend: 'widening', trendNote: 'Consultancy now 73% of the order book at a 24% margin; four Dangote contracts since January, the latest over $450 million; but Middle East mega-projects are on hold.',
                grades: { mandate: { grade: 'B', note: 'Nominated for critical refinery jobs' }, book: { grade: 'B', note: '₹14,424cr, about 3.7 years' }, price: { grade: 'A', note: 'Consultancy margin about 24%' }, capital: { grade: 'A', note: 'Capex about 1% of revenue' }, cash: { grade: 'C', note: 'Auditor flags unapproved ₹86cr change order' } } },
            { company: 'NBCC', trend: 'stable', trendNote: 'Land sales ran ahead of plan, but the FY27 revenue guide was cut and 74% of the order book has not started.',
                grades: { mandate: { grade: 'A', note: 'Designated agency; Supreme Court’s choice' }, book: { grade: 'B', note: '₹1.27 lakh crore; 74% not started' }, price: { grade: 'C', note: 'Fees cut to 5–8% from 7–10%' }, capital: { grade: 'A', note: 'Clients fund the work' }, cash: { grade: 'C', note: 'Cash mostly clients’; debtor days 144' } } },
            { company: 'Rites', trend: 'narrowing', trendNote: 'Record ₹9,445cr book, but half is turnkey at a 1.4% margin and 62% of it was won in open bidding.',
                grades: { mandate: { grade: 'B', note: 'Railways’ inspection arm' }, book: { grade: 'B', note: '₹9,445cr, about 3.9 years' }, price: { grade: 'C', note: 'Margin 29% → 22%' }, capital: { grade: 'B', note: 'Locomotives bought for leasing' }, cash: { grade: 'A', note: '69% cash conversion; 85–95% payout' } } },
            { company: 'Ircon Intl.', trend: 'narrowing', trendNote: 'Revenue down 28% from FY24; no new nomination work; own margin 4–5%; CMD retired and no Q1 call.',
                grades: { mandate: { grade: 'D', note: 'No new nomination orders' }, book: { grade: 'B', note: '₹23,366cr, shrinking' }, price: { grade: 'D', note: 'Bids ‘much below the estimate’' }, capital: { grade: 'D', note: 'About ₹3,000cr in road and rail companies' }, cash: { grade: 'D', note: 'Operating cash negative four years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**None of the four is a buy at today's price; Engineers India is the closest.** **Engineers India** designs and supervises refineries, petrochemical plants and pipelines, and now 73% of its ₹14,424cr order book is consultancy work that earned a 24% segment margin in Q1 FY27, against 5–8% on the turnkey jobs where it also buys and builds. It has won four contracts from Nigeria's Dangote group since January, the latest a contract worth over $450 million for a refinery in Kenya signed on 22 September. It has no term debt, CARE rates it AAA, and it kept every target it set on the Q4 call. But Q1 revenue fell 6%, FY26 profit of ₹692cr was lifted by a ₹221cr change order booked in one quarter, and its auditor drew attention to ₹86cr of FY25 revenue booked on an HRRL change order that is still unapproved. I expect about 11% a year of earnings growth from that flattered base; the price needs about 15%. **Follow it, and buy on a weak quarter.**",
                "**Follow NBCC.** **NBCC** manages building projects for ministries and states and redevelops old government colonies in Delhi, selling part of the new space to pay for the rest. Its order book is ₹1,26,964cr, about ten years of revenue, it earns a return on capital of 29% because clients fund the work, and it has sold redevelopment space faster than planned: Bharat Business Park raised about ₹10,000cr in three auctions. But 74% of the book (₹93,723cr) has not started, it missed its FY26 revenue and order targets, and in August it cut FY27 revenue guidance from about ₹18,000cr to ₹15,000–17,000cr while keeping a profit target of ₹1,100–1,200cr that needs about ₹950cr in three quarters after ₹158cr in Q1. I expect about 15% a year; the price needs about 19%.",
                "**Wait on RITES.** **RITES** is the railways' consultancy, inspection and export arm. It turns 69% of operating profit into cash, has no debt, pays out 85–95% of profit and holds a record ₹9,445cr order book. But half of that book is turnkey work at a 1.4% margin, 62% was won in open bidding, and the chairman says profit will not beat FY23's ₹571cr record ‘for at least two to three years’. Q1 revenue grew 8.6% against a promise of ‘disruptive growth’. I expect about 8% a year; the price needs about 15%. It is a dividend holding, not a growth one.",
                "**Pass on Ircon.** **Ircon** builds railway lines and highways and has put about ₹3,000cr into toll and annuity roads and coal-railway joint ventures. Revenue has fallen from ₹12,514cr in FY24 to ₹9,071cr in FY26, the Railway Ministry no longer hands it new work on nomination, and its own margin before other income is 4–5%, so about 60% of its standalone pre-tax profit is interest income. Consolidated profit fell 44% in Q1 as interest on road loans rose, operating cash has been negative for four years, its chairman retired in June, and it held no Q1 call. I expect about 6% a year; the price needs about 13%.",
                "**Three things to hold onto before reading the rest.** First, **judge these companies on profit, not revenue**: NBCC's and part of Ircon's and RITES's revenue is the full cost of projects they manage, passed straight to subcontractors, so a large order book can mean little profit. Second, **much of the cash is not theirs**: NBCC shows about ₹6,535cr of net cash on Screener, but CRISIL found only about ₹220cr unencumbered in September 2025, and Ircon says its own cash is about ₹950cr of about ₹4,200cr reported. Third, **the government is owner and customer**: it sets their work, their dividends and their leadership, and it has moved them from nomination towards open bidding, which is why fee rates and margins are falling.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener. Hover over a starred name for its caveat. Two cautions: operating margins here leave out large interest income, which is about a third of pre-tax profit at NBCC and Engineers India; and the cash-cycle figures for Ircon and RITES are distorted by how Screener computes payable days, so use debtor days instead.",
                "**About the dashboard's stored data.** The stored records for these four hold names and tickers but no reliable figures to check against, so nothing here comes from them. All numbers are from Screener's filed accounts, the companies' own filings and calls (marked as company figures where they differ from filed ones), and the rating reports.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Construction as a whole is in the second year of a slowdown.** ICRA estimates that revenue for its sample of 19 listed builders, about ₹1.28 lakh crore a year, grew only 2–4% in FY26 after a flat FY25, and forecasts 6–8% in FY27, with operating margins slipping to 10.1–10.6% against 13–14% in FY21. Roads have been hit hardest: highway awards fell from 12,731 km in FY22 to about 7,000 km in FY26, and CareEdge expects building pace of only about 21 km a day in FY27, against 36.8 km at the peak. Money is not the problem: the FY27 Budget raised central capital spending 11.5% to about ₹12.2 lakh crore. The bottleneck is projects that are ready to start. This note covers one of five groups in the sector; the others are road developers, diversified heavy-civil contractors, building contractors, and energy and steel-building firms. **Within construction, this group is where profit sits best**: the sector research behind this page found profit concentrated in a few places, and asset-light government project managers, with net cash and high returns, are one of them. **My view: the sector's slowdown hits these four less than the road builders, but it shows up in the same way, as order books that grow faster than revenue.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Ministries, state governments, the Railways and oil companies own the projects and pay for them. **Project management consultants** (NBCC for buildings, RITES for transport, Engineers India for hydrocarbons) design, tender and supervise the work for a fee, typically 5–8% of project cost at NBCC on government-funded jobs, and hand the actual building to private contractors under back-to-back contracts, so cost and delay risk sits largely with the contractor. **EPC contractors** such as Ircon take the full construction risk themselves, win work in open bids and earn a contractor's margin. Where a consultant takes a turnkey job, as RITES and Engineers India both do, it books the whole project cost as revenue and earns 1.5–8% on it. **Profit sits with the fee earners**: RITES earned 22–24% at the operating level in the last five quarters and Engineers India's consultancy 24%, while Ircon's own construction margin before other income was 4.2% in FY26 (company measure). NBCC's 4–7% margin looks low only because the full project cost passes through its revenue; its return on capital is 29%.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Budgets, not the business cycle.** The FY27 Budget gives Railways ₹2,81,377cr (up 10.1%), Housing and Urban Affairs ₹85,522cr (up 49.5%) and Road Transport ₹3,09,875cr (up 7.9%), according to PRS. Seven high-speed rail corridors were announced. For NBCC, the demand is redevelopment of Delhi's old government housing colonies, stalled private housing that the Supreme Court has handed over (Amrapali, then Supertech), and state projects such as MAHAPREIT in Maharashtra (about ₹25,000cr) and a satellite city in Jammu and Kashmir (about ₹15,000cr). For Engineers India, it is refinery and petrochemical spending at home and abroad: oil and gas has been 70–80% of its order book, and its Middle East business grew from ₹30cr to about ₹1,000cr in three to four years. For RITES, it is railway consultancy, inspection and quality assurance, and train exports to Bangladesh, Mozambique and South Africa. **My view: the budgets are there; what varies is how fast approvals, land and seed money arrive.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The policy shift that matters most is from nomination to competition.** Ircon says the Railway Ministry is no longer handing out new work on nomination, and 55% of its order book was now won in open bids. At RITES 62% of the book is competitive and more than 70% of new orders. At NBCC, a government cost drive cut project-management fees on government-funded work from 7–10% to 5–8% (CRISIL). The second shift is towards **awarding only projects that are ready**, which CRISIL calls ‘largely structural’: it slows awards but protects contractors from stuck sites. The third is the **West Asia war**, which froze new mega-projects in the Gulf (Engineers India: ‘new mega projects are under hold’) and pushed up fuel and bitumen costs for Ircon's road jobs. India Ratings expects EPC revenue to grow about 10% in FY27 but the sector to stay under credit stress through the year. **My view: nomination was the moat for these companies, and it is being withdrawn a piece at a time; the ones that can win on skill abroad (Engineers India, RITES exports) are best placed.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Engineers India** on refinery and petrochemical awards (IOCL's Paradip phase two and BPCL's Andhra refinery, both slipping), the Dangote projects in Africa and the Gulf reopening. **NBCC** on Cabinet approval of five more Delhi colonies (about ₹30,000cr), on states finding seed money for MAHAPREIT and Jammu and Kashmir, on the Supertech packages being awarded, and on land auctions at Sarojini Nagar and Nauroji Nagar selling at good prices. **RITES** on its turnkey jobs being executed without losses, export deliveries to Bangladesh and Mozambique, and holding its 20% margin ‘red line’ through a pay revision. **Ircon** on winning some of the 107 bids worth about ₹48,000cr it had under evaluation at the Q4 call, and on its coal-railway joint ventures breaking even. **Buy each for its own driver; the ‘PSU’ label tells you little about the earnings.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Building project management and redevelopment', 'NBCC', '4–7%', '29%', '**34%**', 'Full project cost passes through revenue; clients fund the work; large interest income on client money'],
                        ['Hydrocarbon engineering consultancy and turnkey', 'Engineers India', '8–29%', '30%', '**27%**', 'Consultancy earns about 24%, turnkey 5–8%; the 29% quarter was a one-off change order'],
                        ['Transport consultancy, inspection, leasing and exports', 'RITES', '22–24%', '23%', '**69%**', 'Consultancy 31% and leasing 38% margins; turnkey half the book at 1.4%'],
                        ['Railway and road construction plus owned roads', 'Ircon', '7–11%', '9%', '**−17%**', 'Own construction margin 4–5%; road companies add margin but also debt and interest'],
                        ['For comparison: the construction sector', 'ICRA sample of 19 listed builders', '10.1–10.6% (FY27 forecast)', '—', '—', 'Road EPC margins guided at 8–12% for FY27 after bids 20% or more below base price'],
                    ],
                    note: 'Engineers India’s range includes the Q3 FY26 change-order quarter; without it the range is 8–16%. Ircon’s own-margin figure is the company’s standalone measure before other income.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Construction industry revenue (19 listed builders)', 'About ₹1.28 lakh crore; +2–4% in FY26 (estimate)', '**+6–8% in FY27**; diversified builders +8–10%; margin 10.1–10.6%', 'ICRA, Mar 2026'],
                        ['Construction order inflow', 'Flat to weak in FY25–FY26', '**About +10% in FY27**, led by roads and water', 'ICRA, Mar 2026'],
                        ['EPC revenue and credit', 'Growth averaged 20% in FY22–FY24', '**About +10% in FY27**; credit stress through FY27', 'India Ratings, 2026'],
                        ['Central government capital spending', 'About ₹12.2 lakh crore in FY27 (+11.5%)', 'Fiscal deficit target 4.3% of GDP', 'PRS, Feb 2026'],
                        ['Railways allocation', '₹2,81,377cr (+10.1%)', 'Seven high-speed rail corridors announced', 'PRS; Business Standard, Feb 2026'],
                        ['Housing and Urban Affairs allocation', '₹85,522cr (+49.5%)', 'Funds NBCC’s government clients', 'PRS, Feb 2026'],
                        ['Highway awards', 'About 7,000 km in FY26 against 12,731 km in FY22', '**About 21 km a day** of construction in FY27', 'CareEdge, Sep 2026'],
                        ['Interest cover of construction firms', '3.2–3.5x in FY26', '3.1–3.4x in FY27 as payments slow', 'ICRA, Mar 2026'],
                    ],
                    note: 'There is no outside forecast for refinery or overseas engineering spending in the sources read; Engineers India’s outlook rests on company statements. ICRA’s sample is of listed construction companies; it does not say whether these four are in it.',
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
                    label: 'Lasting: being the government’s chosen agency',
                    text: "**NBCC** is the designated agency for redeveloping Delhi's old government housing (GPRA) colonies and was the Supreme Court's choice to finish more than 32,550 stalled Amrapali homes, earning an 8% management fee plus 1% for marketing on the ₹12,500cr second phase; the Supreme Court has now cleared it to complete 16 Supertech projects. The government's own scorecard rated it ‘Excellent’ (97.5). **RITES** is the Railways' technical arm for inspection and quality assurance and still gets safety-critical work on nomination (38% of its book). **Engineers India** is chosen on nomination for critical refinery jobs such as fuel upgrades, though most public-sector work is now bid. **My view: this is a real advantage, but a political one; it lasts only as long as ministries choose to use it.**",
                },
                {
                    label: 'Evidence of pricing power: mostly the opposite',
                    text: "Fee rates are falling across the group. **NBCC**'s fees on government-funded projects fell from 7–10% to 5–8% after a cost-efficiency drive, and its subsidiaries HSCC and HSCL were quoting about 2% fees against 3–4% overheads, so they are dropping loss-making mandates (about ₹300cr of revenue lost). **RITES**'s operating margin has fallen from 29% in FY23 to 22% as open bidding spread. **Ircon**'s finance director says ‘some of the bids are going much below the estimate’, and it cut its own margin guide to 4.0–4.5%. The exception is **Engineers India**, whose consultancy margin rose to 24% in Q1 from 17% a year earlier as it shifted its mix. **My view: only Engineers India shows pricing power, and it comes from what it chooses to bid for, not from what it charges.**",
                },
                {
                    label: 'Skill that travels abroad',
                    text: "**Engineers India** won the Dangote refinery expansion in Nigeria ($360 million, about four years), four Dangote fertiliser lines ($70 million), an Ethiopian fertiliser job (₹286cr) and, on 22 September, a contract worth over $450 million for Dangote's planned 700,000-barrel-a-day refinery in Kenya. It wins 20–25% of the bids it makes and has a long-term agreement with Saudi Aramco. **RITES** is the sole export channel for Indian Railways' rolling stock (except to Thailand, Malaysia and Indonesia) and has won about one export order a quarter for seven to eight quarters, including 200 coaches for Bangladesh (about ₹900cr) and nine locomotives for South Africa (about $35 million). **My view: these are the most defensible revenues in the group, because no ministry decides them; but Dangote alone is now a large share of Engineers India's overseas book.**",
                },
                {
                    label: 'A rare skill: turning government land into cash',
                    text: "**NBCC** has shown it can sell redevelopment space at scale: the World Trade Centre at Nauroji Nagar (₹13,884cr, fully sold), Bharat Business Park (about ₹10,000cr in three auctions, at ₹50,000–66,000 per sq ft in later rounds against a ₹39,100 base) and 4,625 Amrapali units worth about ₹9,366cr in FY26. Those sales fund construction and earn NBCC a marketing fee on top of its management fee, which is why its standalone margin reached 8.77% in Q1 (company figure). **My view: this is the part of NBCC most worth paying for, and the part most exposed to Delhi's property market.**",
                },
                {
                    label: 'Thin: contracting against the private sector',
                    text: "**Ircon** has built 5,858 track-km and 167 km of tunnels, but in open bids it competes with every road and rail contractor in the country, and its standalone margin before other income was 4.2% in FY26. Its hit rate by value rose to 10% in FY26 from about 6%, but only by bidding low. Turnkey work at **RITES** (1.4% margin) and **Engineers India** (5–8%) is the same kind of business wrapped inside a consultancy. **Judge the turnkey revenue in all three as volume, not as moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**RVNL**, the other railway construction PSU, whose chairman now also runs Ircon on additional charge (Ircon says it has no official information on reported merger talk); private EPC contractors such as **Afcons**, **L&T** and **Tata Projects**, which bid for the same rail, metro and building work; private building contractors, who compete for the construction NBCC hands out rather than for its mandates; and for Engineers India, global engineering firms bidding for Gulf and African mandates (not named on the calls). Within this Construction page, the diversified heavy-civil group is the most direct competitor for Ircon's work.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For fee earners the margin depends on the mix of work more than on costs. Three patterns show up: margins protected by consultancy and leasing, margins moved by one-off change orders and land sales, and margins that look better than the business because of interest income.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: consultancy, inspection and leasing',
                    text: "**RITES** earned 22–24% at the operating level in each of the last five quarters, with consultancy at 31.4% and leasing at 38.1% in Q1 FY27; its chairman calls 20% operating margin and 15% net margin its ‘red lines’. **Engineers India**'s consultancy segment earned 24% in Q1 and 24% for FY26 (30% in FY25), and management wants consultancy to stay above half of revenue. These margins rest on engineering skill and records that take decades to build. **My view: RITES's margin will drift down as turnkey work grows, but should hold above 20%; Engineers India's depends on keeping turnkey small.**",
                },
                {
                    label: 'Moved by one-offs: change orders and land sales',
                    text: "**Engineers India**'s margin jumped to 29% in Q3 FY26 because a ₹221cr change order on a turnkey job was booked in one quarter; turnkey's FY26 segment margin of 17% against 8% in FY25 is mostly that. **NBCC**'s Q1 FY27 margin of 7% (8.77% standalone, company figure) was lifted by marketing fees on selling Bharat Business Park, and management has raised its margin guide to at least 6.5–7% from 5–6% on the strength of more such sales. **My view: neither is repeatable every quarter; treat Engineers India's underlying margin as about 15–16% and NBCC's as about 5–6% until land sales prove regular.**",
                },
                {
                    label: 'Not structural: interest income doing the work',
                    text: "Other income, mostly interest on cash, is about a third of pre-tax profit at **NBCC** (₹376cr over the last four quarters) and **Engineers India** (₹320cr), and about 60% of **Ircon**'s standalone pre-tax profit (₹500cr in FY26). At NBCC and Ircon much of that cash is clients' money held for projects. Ircon's consolidated profit fell 44% in Q1 as interest on its road companies' loans rose to ₹107cr from ₹75cr, and its consolidated net margin of 4.5% is below its own 6.1–6.3% guide. **My view: strip out the interest and Ircon earns very little from building; NBCC and Engineers India still earn well, but less than the headline suggests.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Ircon**'s operating cash was negative in each of FY23–FY26 (−₹1,110cr in FY25, −₹618cr in FY26), and free cash was −₹1,148cr in FY26, as its road companies build and receivables rose from 23 to 56 debtor days. It took a ₹103cr working-capital loan because clients paid late. **NBCC**'s debtor days rose from 93 to 144 in FY26 and its group receivables of ₹5,092cr were a key audit matter.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Engineers India**'s client advances have shrunk relative to revenue: Screener's working-capital days moved from −179 in FY22 to −60 in FY26, and FY26 operating cash was ₹319cr against ₹699cr of operating profit. **RITES** collects slowly for a consultancy: CARE puts its collection period at 125 days in FY26 (135 in FY25), and Screener shows 141 debtor days.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**RITES** turned 69% of operating profit into cash over five years and 13% of revenue into free cash, enough to pay 85–95% of profit as dividends every year without borrowing. **NBCC**'s client advances fund most of its work, so its working capital is negative on its own measure even with high receivables, and FY26 free cash was ₹402cr.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Government clients pay in stages and bunch spending at the year end: NBCC, Ircon and RITES all booked their largest quarter of FY26 in Q4. Much of the cash they report is held for specific projects and must be paid out to contractors. **Judge each against its own history, and never count client money as shareholders' cash.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Engineers India', 'Debt-free; ‘certain other investment plans’ for surplus cash under consideration; RFCL joint venture expected to pay a dividend in FY27', 'Net cash ₹2,953cr (Screener); CARE counts ₹1,359cr of own liquid funds'],
                        ['NBCC', '‘Cash’ of ₹666cr at 30 June; HUDCO memorandum for seed money on state projects; HSCC being merged in', 'Net cash ₹6,535cr on Screener, mostly client money; no borrowings'],
                        ['Rites', 'Q1 interim dividend ₹1.40 a share (93.7% payout); 90%+ payout to continue; no major capex', 'Net cash ₹3,043cr (Screener); borrowings ₹7cr (leases)'],
                        ['Ircon Intl.', 'No Q1 call. At Q4: own cash about ₹950cr; ₹400–600cr to go into road and rail companies in FY27', 'Net cash ₹515cr on Screener after ₹5,726cr of road-company debt'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Ircon’s line comes from the Q4 call and the Q1 presentation.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its last call before Q1 (the Q4 call, or NBCC's February call and June investor meet), and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: redevelopment and stalled housing',
                    text: "**NBCC** targets ₹50,000–60,000cr of orders in FY27, including about ₹30,000cr from five more Delhi colonies that have passed the investment board and await Cabinet approval, and plans to award ₹20,000–25,000cr of work to contractors, including about ₹10,000cr of Supertech packages. It has set out FY28 revenue of about ₹21,000cr with ₹1,300–1,400cr of profit, and FY29 revenue of ₹24,000–25,000cr with about ₹2,000cr of profit, relying partly on its own real-estate projects at Gurugram 37-D and Ghitorni, whose revenue is booked only on handover about two years out. **My view: the order book makes these numbers possible, but NBCC has missed its own targets before, so I count on about half the promised growth.**",
                },
                {
                    label: 'Growth driver: refineries at home and abroad',
                    text: "**Engineers India** guides FY27 revenue up at least 10% (to about ₹4,200cr), order inflow of about ₹8,000cr and FY28 revenue of ₹5,000cr, and its answers imply consultancy revenue of ₹2,300–2,400cr in FY27, about 30% growth. It had won about ₹2,750cr by mid-August, and the Kenya contract should fill much of the gap. It is also bidding for coal gasification (after a ₹34,000cr government support scheme), nuclear plant studies and data-centre and campus work, which was about a quarter of FY26 orders. **My view: consultancy growth is the one to watch; turnkey revenue will fall as old jobs end, so total revenue may lag the consultancy story.**",
                },
                {
                    label: 'Growth driver: railway exports and consultancy',
                    text: "**RITES** says it wins ‘one order a day’ (120-plus orders worth ₹674cr in Q1) and targets a ₹10,000cr order book. Exports should be at least ₹300cr in FY27, with the Bangladesh coaches spilling into FY28, a South African locomotive order won in July and a standard-gauge Vande Bharat train being explored for export. It added about 450 staff in a year to execute the larger book. **My view: revenue can grow in double digits, but management itself says profit will lag, because the fastest-growing part is low-margin turnkey work.**",
                },
                {
                    label: 'Growth driver: new railway corridors',
                    text: "**Ircon** had 107 bids worth about ₹48,000cr under evaluation at the Q4 call and a 10% hit rate by value in FY26. The Budget's seven high-speed corridors and continuing railway capital spending give it a pipeline, and its coal-railway joint ventures should break even in about two years. But it guides FY27 revenue flat at about ₹9,000cr, and its order book fell ₹1,600cr in Q1 to ₹23,366cr. **My view: Ircon needs its order book back above about ₹30,000cr before growth returns.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Engineers India** kept every Q4 target at Q1: revenue growth of at least 10%, inflow of about ₹8,000cr, FY28 revenue of ₹5,000cr, and consultancy and turnkey margins inside their ranges (24% and 7.5% against 20–25% and 5–7%). **RITES** met its FY26 promise of double-digit revenue growth and about ₹300cr of exports, and held its margin above its red lines in Q1 (22% operating, about 17% net).",
                },
                {
                    label: 'Cautious',
                    text: "**RITES** openly guides profit below its FY23 record for two to three years and expects employee costs to rise 8–10% in FY28 with the pay revision. **Engineers India** softened ‘minimum 10% to 15%’ revenue growth to ‘at least 10%’ and describes the Gulf as ‘still very grim’.",
                },
                {
                    label: 'Missed',
                    text: "**NBCC** guided about ₹14,000cr of FY26 revenue in February and delivered ₹12,889cr; it guided at least ₹20,000cr of orders and won ₹18,780cr; and it has cut FY27 revenue guidance from about ₹18,000cr to ₹15,000–17,000cr and contractor awards from ₹30,000–32,000cr to ₹20,000–25,000cr. MAHAPREIT, due to ‘start next year’ in February, is now pushed to Q3. **Ircon** guided ₹10,000–11,000cr of FY26 revenue and delivered ₹9,071cr, and its Q1 net margin of 4.5% is below its 6.1–6.3% guide.",
                },
                {
                    label: 'Mixed',
                    text: "**NBCC** kept its FY27 profit target of ₹1,100–1,200cr and raised its margin guide to at least 6.5–7%, and land sales ran ahead of plan; but profit of ₹158cr in Q1 annualises to about ₹630cr. **RITES** softened its export guide from ‘much higher than ₹300 crore’ to ‘at least ₹300 crores plus’, and its chairman conceded after Q1's 8.6% growth that it must ‘step on the gas’. **Engineers India**'s domestic awards (IOCL Paradip, BPCL Andhra) are slipping, but the Kenya win arrived.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect NBCC to grow earnings at about 15% a year, Engineers India at about 11%, RITES at about 8% and Ircon at about 6%.** NBCC's figure assumes about half of its promised FY27–FY29 profit path, with land sales adding lumpy gains. Engineers India's starts from a TTM profit lifted by the one-off change order and a swing at its fertiliser joint venture, so FY27 may show little growth before consultancy lifts FY28. RITES's follows management's own warning that profit will not beat ₹571cr for two to three years. Ircon's assumes flat revenue, a small margin recovery and continued interest drag from its road companies.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['NBCC', 'Delhi colonies; Supertech; state projects; land sales', '8% / **15%** / 22%'],
                        ['Engineers India', 'Consultancy mix; Dangote; domestic refinery awards', '6% / **11%** / 16%'],
                        ['Rites', 'Consultancy and exports; turnkey dilution; pay revision', '4% / **8%** / 12%'],
                        ['Ircon Intl.', 'New rail bids; road-company interest; joint ventures', '0% / **6%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (last pre-Q1 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Engineers India', 'Revenue at least +10% in FY27; inflow about ₹8,000cr; FY28 revenue ₹5,000cr; margin about 16%', 'Minimal; ‘other investment plans’ under consideration', '**On track**: all targets kept; Q1 revenue −6% but consultancy +22%'],
                        ['NBCC', 'FY27 revenue ₹15,000–17,000cr (was about ₹18,000cr); profit ₹1,100–1,200cr; margin at least 6.5–7%', 'Small; own real-estate projects at 37-D and Ghitorni', '**Walked back**: FY26 revenue and orders missed; FY27 revenue guide cut'],
                        ['Rites', 'Double-digit revenue growth; profit below FY23 record for two to three years; margins above 20% and 15%', 'Low; locomotives for leasing', '**Mixed**: margins held, growth 8.6% against ‘disruptive growth’; export guide softened'],
                        ['Ircon Intl.', 'FY27 revenue about ₹9,000cr; own margin 4.0–4.5%; net margin 6.1–6.3%', '₹400–600cr into road and rail companies; ₹50–60cr own', '**Missed**: FY26 revenue below guide; Q1 net margin 4.5%; no Q1 call'],
                    ],
                    note: 'NBCC held no Q4 call; its promises come from the February 2026 call and the June investor meet. Ircon held no Q1 call; its delivery comes from the Q1 presentation.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Order books that do not turn into revenue',
                    text: "**NBCC**'s ₹1.27 lakh crore book is 74% unstarted, held up by state approvals and a shortage of ‘seed money’, in its chairman's words; its three biggest delayed projects (MAHAPREIT, Jammu and Kashmir, Supertech) total about ₹50,000cr. Delhi's winter pollution rules (GRAP) halt construction around November to January, just when its back-ended FY27 guidance needs the work. **Engineers India**'s large domestic awards are slipping on land and approvals. **Ircon**'s book is shrinking. Analysts on NBCC's Q1 call pressed repeatedly on delays; the tone has turned sceptical.",
                },
                {
                    label: 'Accounting and audit remarks',
                    text: "**Engineers India**'s auditor drew attention to ₹86cr of FY25 revenue booked on an HRRL change order that ‘remains unapproved and unsettled’, with disclosure it called inadequate, to a ₹410cr contractor claim pending in the Supreme Court, and to an Angola receivable of ₹59cr now fully provided after earlier criticism by the CAG; the CAG has also changed its auditor for FY27. **NBCC**'s auditor highlighted cumulative provisions of ₹469cr on the Gurugram 37-D project, where buildings developed structural cracks, a ₹750cr recovery suit and 16 other cases, Faridabad land of ₹132cr without a conveyance deed, and unreconciled balances and a subcontractor's irregularities at its subsidiary HSCC. **Ircon**'s and **RITES**'s audits are unmodified, with emphasis only on joint ventures being wound up.",
                },
                {
                    label: 'Contingent claims and disputes',
                    text: "**NBCC** carries ₹1,670cr of claims not acknowledged as debt (up from ₹1,522cr), ₹219cr of GST demands and a remanded ₹405cr Delhi VAT demand that it says the client would pay. **Engineers India** lists about ₹742cr of contingent liabilities against net worth of about ₹3,146cr, most of it tax that it says clients would reimburse. **Ircon** lists about ₹643cr of legal cases and lost an arbitration to Afcons in June: the tribunal awarded ₹147.1cr against a ₹359.7cr claim, which Ircon will challenge. **RITES**'s are small, but it faces ₹99cr of reconstruction costs on a building declared unsafe on one of its management jobs, of which it expects about ₹60cr back.",
                },
                {
                    label: 'The government as owner',
                    text: "The government holds 51–72% of each company and has sold down **Ircon** by about eight points in three years through offers for sale, which can weigh on the price. **Ircon**'s chairman retired on 30 June and RVNL's chairman holds additional charge for up to a year. **NBCC** has been fined by the exchanges because the government has not appointed enough independent directors. **RITES** pays out 85–95% of profit as dividends, which suits its government owner and income investors but leaves little to reinvest.",
                },
                {
                    label: 'Concentration in one client or region',
                    text: "Oil and gas has been 70–80% of **Engineers India**'s book, and the Dangote group now accounts for three large overseas contracts; if Dangote's Kenyan or Nigerian projects stall, so does a large part of its growth. The Gulf, 10–15% of its book, is frozen for new mega-projects. **NBCC**'s growth depends heavily on Delhi land and on states that lack seed money. **RITES**'s exports depend on a few buyers in Bangladesh, Mozambique and South Africa, and Q1 export revenue was ₹1cr because one train was late.",
                },
                {
                    label: 'Disclosure and credibility',
                    text: "**NBCC** held no Q4 call, giving guidance verbally at an investor meet, and its cash figures mix restricted client money with its own. **Ircon** held no Q1 call at all. **Engineers India**'s Q4 transcript was misdated and an analyst complained that its filed results were illegible. None of this is fraud, but for companies whose earnings depend on promises about unstarted projects, thin disclosure makes those promises hard to check.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree sharply, because these companies hold large cash balances, much of it clients' money, and earn large interest income on it.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12.6% at 19x, 14.6–14.8% at 22.6–23x and 18.9% at 32.7x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **None of the four fits my estimates today**: Engineers India and NBCC are a few points short, RITES and Ircon well short.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes, and why to distrust it here',
                    text: "On EV/EBITDA, **RITES** and **Ircon** look far cheaper than on P/E, and **NBCC** somewhat cheaper, because Screener subtracts cash of ₹3,043cr, ₹515cr and ₹6,535cr respectively. For NBCC that flatters badly: CRISIL found only about ₹220cr of its ₹4,866cr of cash unencumbered in September 2025, and the finance director gave ‘cash’ of ₹666cr in June. For Ircon, own cash is about ₹950cr against ₹5,726cr of road-company debt. **Engineers India**'s cash is more genuinely its own (CARE counts ₹1,359cr of liquid funds). **My view: use P/E for NBCC and Ircon, and give only Engineers India and RITES partial credit for cash.**",
                },
                {
                    label: 'Full: good businesses a few points too dear',
                    text: "**Engineers India** needs about 15% a year against my ~11%, from a profit base flattered by the ₹221cr change order and a fertiliser joint-venture swing; on underlying profit the gap is wider. The price has risen to near its 52-week high. **NBCC** needs about 19% against my ~15%; if it delivered its own FY27 profit guide of ₹1,100–1,200cr, the price would look fair, but it has missed its revenue guides before. **Both are the names to buy after a disappointing quarter, not after a good one.**",
                },
                {
                    label: 'Stretched: an income stock priced for growth',
                    text: "**RITES** needs about 15% a year against my ~8%. Its dividend yield of about 4% and its cash cushion make the shares less risky than that gap suggests, and much of the return an owner gets is the dividend rather than growth. But management's own guidance, profit below the FY23 record for two to three years, cannot support that growth rate. **Wait for a price where the dividend alone is a fair return.**",
                },
                {
                    label: 'Stretched: a shrinking business',
                    text: "**Ircon** needs about 13% a year against my ~6%. Its shares have fallen 39% in a year to near their 52-week low, so the price has already fallen a long way. But revenue has shrunk two years running, most of its standalone profit is interest, and its road companies add debt and interest faster than profit. **A low price is not the same as a cheap business.**",
                },
                {
                    label: 'A check against the rest of Construction',
                    text: "These four earn returns on capital of 9–30% with net cash, against ICRA's expectation of 10.1–10.6% operating margins and falling interest cover for the sector as a whole. On quality, three of them are among the best in the Construction sector; on price, the market already knows. The best entry points have come when government sell-downs or missed guidance hit the shares, as with NBCC's 52-week low of ₹77 against ₹126 at the high.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Engineers India', rank: 1, stance: 'PRICED', segment: PSU_PMC,
            what: "India's leading engineering consultant for refineries, petrochemicals, pipelines and fertilisers, owned 51.32% by the government; 73% of its ₹14,424cr order book is consultancy, and it has won four contracts from the Dangote group in Africa since January.",
            view: "**A better mix at a full price.** Consultancy earned 24% in Q1, it kept every Q4 target, has no term debt and won a Kenyan refinery contract worth over $450 million in September. But Q1 revenue fell 6%, FY26 profit was lifted by a ₹221cr one-off change order, and the auditor flagged ₹86cr of revenue on an unapproved change order and a ₹410cr claim. The price needs about 15% a year against my ~11%.",
            watch: 'Consultancy revenue growing 25%-plus in FY27; IOCL Paradip and BPCL Andhra awards; settlement of the HRRL change order.',
        },
        {
            company: 'NBCC', rank: 2, stance: 'SCALEUP', segment: PSU_PMC,
            what: "A government project manager that builds for ministries and states on a fee, redevelops old Delhi government colonies by selling part of the new space, and finishes stalled housing for the Supreme Court; order book ₹1,26,964cr.",
            view: "**A huge order book that moves slowly.** Return on capital is 29%, land sales beat plan (Bharat Business Park about ₹10,000cr), and the margin guide was raised to 6.5–7%. But 74% of the book has not started, it missed its FY26 revenue and order targets and cut FY27 revenue guidance to ₹15,000–17,000cr, and its profit goal needs about ₹950cr in three quarters after ₹158cr in Q1. The price needs about 19% a year against my ~15%.",
            watch: 'Cabinet approval of the five Delhi colonies; quarterly revenue above ₹4,000cr in Q2–Q3; the Supertech and Jammu and Kashmir awards.',
        },
        {
            company: 'Rites', rank: 3, stance: 'HARVEST', segment: PSU_PMC,
            what: "The Railways' transport consultant, inspection agency, locomotive lessor and rolling-stock exporter, owned 72.2% by the government; half of its record ₹9,445cr order book is low-margin turnkey work.",
            view: "**A cash machine that will not grow profit soon.** It has no debt, turns 69% of operating profit into cash, pays out 85–95% and holds margins above its 20% red line. But turnkey work at 1.4% is half the book, 62% of it was won in open bidding, Q1 growth was 8.6%, and management says profit will not beat FY23's ₹571cr for two to three years. The price needs about 15% a year against my ~8%.",
            watch: 'Bangladesh and Mozambique deliveries in H2; the operating margin staying above 20% through the pay revision; debtor days falling from about 125–141.',
        },
        {
            company: 'Ircon Intl.', rank: 4, stance: 'CYCLICAL', segment: PSU_EPC,
            what: "A railway and highway construction company owned 65.17% by the government, which also owns toll and annuity roads and stakes in coal-railway joint ventures; 77% of its ₹23,366cr order book is railways.",
            view: "**Shrinking, with its profit mostly interest.** Revenue fell from ₹12,514cr (FY24) to ₹9,071cr (FY26), new nomination work has stopped, and its own margin is 4–5% with about 60% of standalone pre-tax profit from other income. Consolidated Q1 profit fell 44% on road-company interest, operating cash has been negative four years, its chairman retired and it held no Q1 call. The price needs about 13% a year against my ~6%.",
            watch: 'A permanent chairman and any merger decision with RVNL; the order book back above ₹30,000cr; the coal-railway joint ventures breaking even.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Project managers and consultants.** **Engineers India: follow**, the closest to a buy in this group; buy on a weak quarter if consultancy keeps growing and the change-order dispute settles. **NBCC: follow** for the conversion of its order book; buy when quarterly revenue shows the unstarted projects are finally moving. **RITES (listed as Rites): wait** for a price where the dividend alone is a fair return; profit will not grow much for two to three years.",
            "**Railway and road contractor.** **Ircon: pass** until revenue stops shrinking, a permanent chairman is in place and the road companies stop absorbing cash.",
            "**What would change my view.** For the better: Cabinet approval of NBCC's five Delhi colonies and its state projects starting; large domestic refinery awards for Engineers India; RITES's exports arriving on time. For the worse: more guidance cuts at NBCC; Dangote projects stalling; RITES's margin approaching its 20% red line; Ircon's road companies calling for more equity while revenue stays flat.",
            "**What to watch next quarter.** Engineers India's consultancy growth and the HRRL change order; NBCC's Q2 revenue and the Cabinet decision; RITES's export deliveries and margins; Ircon's order wins and leadership.",
        ],
        bottomLine:
            "No company in this group is a buy at today's price. Follow the two good businesses priced a little high (Engineers India, the closest to a buy, and NBCC); wait on RITES for a price that the dividend alone justifies; and pass on Ircon until its revenue stops shrinking.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/NBCC/consolidated/' },
        { label: 'Revenue growth of construction players to improve by 6–8% in 2026–27 — ICRA, Mar 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=9dd3c3d4-668d-47a7-844a-ccc99949a6ca' },
        { label: 'State road capex to outpace central capex in FY27 (CareEdge) — The Tribune, Sep 2026', url: 'https://www.tribuneindia.com/news/business/state-road-capex-to-outpace-central-capex-in-fy27-construction-pace-slows-to-21-km-day-from-36-8-in-fy21-careedge' },
        { label: 'Union Budget 2026–27 analysis — PRS Legislative Research, Feb 2026', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
        { label: 'Indian Railways record capex in FY27 — Business Standard, Feb 2026', url: 'https://www.business-standard.com/budget/news/indian-railways-record-capex-fy27-high-speed-rail-freight-corridor-126020100735_1.html' },
        { label: 'Diversified infra players a better bet amid weak road order inflows — Business Standard, Jan 2026', url: 'https://www.business-standard.com/amp/markets/news/diversified-infra-players-better-bet-amid-weak-road-order-inflows-126010900840_1.html' },
        { label: 'NBCC rating rationale (AA/Positive) — CRISIL, Dec 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/NBCCIndiaLimited_December%2016_%202025_RR_385361.html' },
        { label: 'NBCC Annual Report FY26 (emphasis of matter, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/2624da86-168f-45cc-93cd-dbb7bcf7b4bf.pdf' },
        { label: 'NBCC investor meet presentation, June 2026', url: 'https://www.nbccindia.in/pdfData/investorPresentation/investorMeet0102June2026.pdf' },
        { label: 'NBCC Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a7e42542-acac-4d25-8d22-d97f92bb2143.pdf' },
        { label: 'Engineers India rating rationale (AAA/Stable) — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609120926_Engineers_India_Limited.pdf' },
        { label: 'Engineers India Annual Report FY26 (auditor’s emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/b03c3406-252c-440a-b0ac-67be5f9ffb85.pdf' },
        { label: 'Engineers India Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=499dd5e5-fde2-4956-8e7e-54cd952419be.pdf' },
        { label: 'RITES rating rationale (AAA/Stable) — CARE, Jul 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202607120720_RITES_Limited.pdf' },
        { label: 'RITES Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d620780b-e1df-4153-b41b-39e57fa18e27.pdf' },
        { label: 'RITES Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=45a51ae2-6c7f-4ebc-b8e4-74d8a1324a4a.pdf' },
        { label: 'Ircon International rating rationale (IVR AAA/Stable) — Infomerics, Mar 2026', url: 'https://www.infomerics.com/admin/uploads/pr-IRCON-24mar26.pdf' },
        { label: 'Ircon International Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=848068a7-f8fe-4788-9aaa-01fbccfb2fa6.pdf' },
        { label: 'Ircon International Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=deed380f-0c03-4972-9bbb-921f17c3c3b8.pdf' },
        { label: 'Ircon arbitration update on package T-74R-A (Afcons) — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0514ad39-b7ea-4e63-80c6-3647f42ddac3.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
