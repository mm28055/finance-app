import { SectorOverview } from './types';
import { constructionBuildingsBusinesses } from './construction-buildings-businesses';
import { constructionValuationInputs } from './card-data/construction';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const BLD_CON = 'Building contractors — paid to build for developers and governments';
const BLD_DEV = 'Mumbai developer with its own construction arm';

export const constructionBuildings: SectorOverview = {
    sector: 'Construction',
    title: 'Construction · Building contractors',
    format: 'ranked',
    businesses: constructionBuildingsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: constructionValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Ahluwalia Contr.': 12,
            'Capacite Infraproj.': 12,
            'Man Infra': 13,
            'PSP Projects': 18,
        },
    },
    standfirst:
        "The Construction sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This group holds the four companies that put up buildings. Three are contractors paid to build for others: **Ahluwalia Contracts** builds towers, hospitals, airports and government offices, about half of it in Delhi and its suburbs; **Capacit'e Infraprojects** builds high-rise and mass housing, mostly around Mumbai; and **PSP Projects** builds factories, offices and housing in Gujarat and Mumbai, and is now part-owned by the Adani group, which supplies about 70% of its orders. The fourth, **Man Infraconstruction**, has become mainly a Mumbai housing developer that builds its own projects. This edition was built from the last two earnings calls for each company, the FY26 annual reports, the rating reports of CARE and Infomerics, and sector work from ICRA, ANAROCK, JLL, India Ratings and PRS. The headline: the three contractors' order books are four to five times a year's revenue, but labour shortages, a 35–40% rise in minimum wages around Delhi, late site handovers and cost spikes held Ahluwalia's and Capacit'e's growth well below plan and cut margins, while PSP grew fast on work from its co-owner. The annual reports turned up a qualified audit opinion, a chief executive leaving a week after a call, and a co-owner that is also the main customer. {Count:fits|Two} of the {count:live|four} are priced to fit my estimates. Every chart uses filed results.",
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
            note: "The three contractors earn 4–17%: Capacit'e about 16% on specialist high-rise work, Ahluwalia about 9% until a wage shock cut Q1 FY27 to 4%, and PSP 5–7% on work for its new co-owner, the Adani group. Man Infra's 13–33% is a property developer's margin, which swings with the projects it completes and sells in each quarter.",
            values: {
                'Man Infra': [22, 25, 22, 13, 33],
                'Ahluwalia Contr.': [9, 11, 9, 9, 4],
                'PSP Projects': [5, 7, 7, 5, 6],
                'Capacite Infraproj.': [17, 17, 16, 15, 16],
            },
            cellNotes: {
                'Ahluwalia Contr.': "Q1 FY27 was hit by a 35–40% rise in minimum wages in Haryana and UP (about 1.5 points, company estimate) and a ₹29cr cut to the AIIMS Jammu final bill (about 2.6 points). The company puts the margin at 4.29% against 8.59% a year earlier.",
                'PSP Projects': "Q4 FY26 absorbed a provision of about ₹30cr; management says the margin would otherwise have been about 8%.",
                'Capacite Infraproj.': "Q4 FY26 and Q1 FY27 each include a ₹10cr provision because aluminium and electrical costs rose faster than the price indices that set its escalation payments.",
                'Man Infra': "A developer: revenue is booked as projects are completed, so the margin moves with the mix of projects handed over, not with construction efficiency.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: "PSP is growing fastest (65% in Q1) as work for the Adani group ramps up. Ahluwalia and Capacit'e grow at 7–12% although their order books are four to five times a year's revenue, because sites are handed over late and labour has been short. Man Infra's reported revenue fell for four quarters while its home sales held up, because a developer books revenue only when flats are completed.",
            values: {
                'Man Infra': [-46, -35, -37, -50, 19],
                'Ahluwalia Contr.': [9, 16, 11, 9, 12],
                'PSP Projects': [-17, 20, 29, 66, 65],
                'Capacite Infraproj.': [3, 25, 14, 6, 7],
            },
            cellNotes: {
                'Man Infra': "Screener shows Q1 FY27 revenue up 19%; the company says 8%, on its own basis.",
                'PSP Projects': "Q1 FY26 revenue of ₹518cr was a low base. The order book has since doubled to ₹13,245cr, about 70% of it Adani group work.",
                'Capacite Infraproj.': "Management says only ₹8,000–9,000cr of its ₹13,535cr order book could actually be worked on, because sites at IIT Bombay, CIDCO and others were handed over late.",
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
            note: "Ahluwalia has held about 20% as margins recovered. PSP has collapsed from 35% to 8% as its margin more than halved. Capacit'e has improved from 10% to 15–18% as it cut debt. Man Infra's fell to 13% in FY26 as revenue recognition lagged sales and warrant money swelled its capital.",
            values: {
                'Man Infra': [33, 32, 28, 24, 13],
                'Ahluwalia Contr.': [25, 25, 24, 18, 20],
                'PSP Projects': [35, 25, 19, 9, 8],
                'Capacite Infraproj.': [10, 17, 16, 18, 15],
            },
            cellNotes: {
                'Ahluwalia Contr.': "FY24 profit included about ₹232cr of other income.",
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
            note: "This measure misses the items that tie up a contractor's cash: unbilled work, money retained by clients until a job is finished, and mobilisation advances. The companies' own working-capital measures are longer: Ahluwalia's rose from 104 days in March to 119 in June. PSP's cycle has lengthened from −64 to 71 days in four years.",
            values: {
                'Man Infra': [690, 153, 604, 838, 41],
                'Ahluwalia Contr.': [-52, -37, -6, -33, -32],
                'PSP Projects': [-64, -53, 3, 35, 71],
                'Capacite Infraproj.': [-167, -222, -264, -163, -173],
            },
            cellNotes: {
                'Man Infra': "A developer's land and unsold flats sit in inventory, so the cycle swings with project timing. Screener's working-capital days were about 740 in FY26.",
                'Capacite Infraproj.': "Negative only because Screener's payable days are very large. Debtor days are 151 and working-capital days 128 on Screener.",
                'Ahluwalia Contr.': "CARE counts collection days rising from 77 (FY22) to 136 (FY25), with about 60% of receivables more than six months old.",
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
            note: "Operating cash is after tax, so 70–80% is healthy for a contractor. Ahluwalia has converted 73% over five years. Capacit'e has converted only 22% and PSP 31%, although both improved in FY26 as client advances came in. Man Infra's cash follows land purchases and project sales, not the profit and loss account.",
            values: {
                'Man Infra': [75, 108, 176, 44, -39, 91],
                'Ahluwalia Contr.': [26, 99, 66, 105, 65, 73],
                'PSP Projects': [57, 20, -86, 29, 170, 31],
                'Capacite Infraproj.': [16, 28, -12, 14, 52, 22],
            },
            cellNotes: {
                'PSP Projects': "FY26 operating cash of ₹323cr was helped by ₹836cr of interest-free mobilisation advances from the Adani group (June 2026 balance).",
                'Man Infra': "FY26 operating cash was −₹50cr as it bought into new redevelopment projects.",
                'Capacite Infraproj.': "FY26 operating cash was ₹224cr against ₹52cr in FY25 as working-capital days fell by 43 (company figure).",
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
            note: "Building contractors keep little free cash: Ahluwalia 3% of revenue over five years, PSP and Capacit'e slightly negative, because cranes, formwork and working capital absorb what the sites earn. Man Infra's high ratio reflects a developer collecting on flats sold, on a small revenue base.",
            values: {
                'Man Infra': [19.5, 23.3, 45.4, 11.7, -8.7, 21.8],
                'Ahluwalia Contr.': [1.4, 6.9, 3.7, 4.1, 0.3, 3.1],
                'PSP Projects': [4.0, -1.8, -14.6, -0.6, 4.1, -1.8],
                'Capacite Infraproj.': [-5.1, 0.5, -6.4, -2.2, 1.8, -1.9],
            },
            cellNotes: {
                'Ahluwalia Contr.': "FY26 free cash was only ₹16cr as ₹265cr of capex on cranes, hoists and batching plants took most of the ₹281cr of operating cash.",
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
            note: "Below zero means more cash than debt. Ahluwalia and Man Infra hold net cash; PSP shows slight net cash on Screener, but counting only lien-free deposits, management expects to become net debt-free within two to three quarters; Capacit'e carries modest net debt that it aims to clear within eight quarters. Part of each contractor's cash is pledged as margin for bank guarantees, and part is funded by client advances.",
            values: {
                'Man Infra': [0.8, -0.2, -1.3, -1.3, -2.9],
                'Ahluwalia Contr.': [-1.5, -1.7, -1.7, -2.6, -1.7],
                'PSP Projects': [-0.4, -0.4, 0.9, 0.3, -0.5],
                'Capacite Infraproj.': [0.7, 0.6, 0.4, 0.9, 0.7],
            },
            cellNotes: {
                'Ahluwalia Contr.': "About ₹221cr of deposits are pledged as margin for guarantees, and ₹924cr of client mobilisation advances (June 2026) help fund the cash pile.",
                'PSP Projects': "Of ₹324cr of fixed deposits at June 2026, only ₹139cr was free of liens.",
                'Capacite Infraproj.': "Gross debt rose to ₹522cr in June 2026 from about ₹483cr in March as about ₹150cr of collections slipped.",
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
            note: "Contractors are spending more on machinery to replace scarce labour: Ahluwalia 5.8% of revenue in FY26, Capacit'e 6.7% on aluminium and tunnel formwork and tower cranes, PSP 6.1% including its precast plant. Man Infra puts its capital into land and project companies, not fixed assets.",
            values: {
                'Man Infra': [-0.0, 0.4, -0.0, 0.3, 0.8, 0.3],
                'Ahluwalia Contr.': [1.0, 3.7, 3.0, 4.6, 5.8, 3.9],
                'PSP Projects': [4.4, 4.1, 5.7, 2.7, 6.1, 4.7],
                'Capacite Infraproj.': [7.6, 5.1, 4.4, 4.4, 6.7, 5.5],
            },
            cellNotes: {
                'Man Infra': "Close to zero: it holds only about ₹61cr of fixed assets.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'clients', label: 'Client roster', description: 'Repeat, creditworthy clients who come back without an open price war, or buyers who keep coming to a developer.' },
            { key: 'skill', label: 'Specialist skill', description: 'Work few rivals can do: super-high-rise towers, precast, fast delivery, complex public buildings.' },
            { key: 'terms', label: 'Contract terms', description: 'Escalation clauses, advances and pass-through costs that protect the margin when costs jump.' },
            { key: 'balance', label: 'Balance sheet', description: 'Net cash and a strong rating, which let a builder give guarantees and survive slow payers.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what the auditors, rating agencies and disclosures show.' },
        ],
        rows: [
            { company: 'Ahluwalia Contr.', trend: 'stable', trendNote: 'Balance sheet intact (net cash, CARE AA−), but the margin fell to 4.3% in Q1 and double-digit guidance was withdrawn within 11 weeks.',
                grades: { clients: { grade: 'A', note: 'DLF, Godrej, Central Vista, AAI, Railways' }, skill: { grade: 'B', note: 'Wide range; mechanising' }, terms: { grade: 'B', note: '89% escalation-linked, but no labour clause' }, balance: { grade: 'A', note: 'About ₹920cr cash, almost no debt' }, cash: { grade: 'B', note: '73% cash conversion; clean audit' } } },
            { company: 'Capacite Infraproj.', trend: 'stable', trendNote: 'Margin steady at about 16%; rating upgraded to BBB+; but growth 7% against 20% and the CEO resigned in August.',
                grades: { clients: { grade: 'B', note: 'CIDCO, MHADA via Tata JV, Mahindra Lifespace' }, skill: { grade: 'A', note: 'Super-high-rise formwork' }, terms: { grade: 'C', note: 'Index escalation lags; ₹20cr provided' }, balance: { grade: 'C', note: 'BBB+; gross debt ₹522cr' }, cash: { grade: 'D', note: 'Qualified audit; 22% cash conversion' } } },
            { company: 'Man Infra', trend: 'widening', trendNote: 'FY27 launch pipeline raised from about ₹5,600cr to ₹6,600cr of sale value; but Q1 pre-sales only ₹290cr; Marine Lines handed to Godrej for a revenue share.',
                grades: { clients: { grade: 'B', note: 'Projects 60–90% sold' }, skill: { grade: 'B', note: 'Fast in-house building' }, terms: { grade: 'B', note: 'Plans at zero price increase' }, balance: { grade: 'A', note: '₹768cr cash; CARE A+' }, cash: { grade: 'C', note: 'Thin disclosure; US projects' } } },
            { company: 'PSP Projects', trend: 'narrowing', trendNote: 'Order book doubled to ₹13,245cr, but 70% is Adani group work and the margin has more than halved since FY22.',
                grades: { clients: { grade: 'C', note: 'Adani about 70% of the book' }, skill: { grade: 'B', note: 'Precast; Kashi corridor' }, terms: { grade: 'B', note: 'Adani work pass-through' }, balance: { grade: 'B', note: 'CARE A+; short-term cut to A1' }, cash: { grade: 'C', note: 'Related-party work; old dues' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Ahluwalia Contracts is the one to follow most closely; its price fits my estimate, but I want proof that its margin is recovering before buying.** **Ahluwalia** builds towers, hospitals, airports and government offices, about half of it around Delhi. It has about ₹920cr of cash and almost no debt, CARE rates it AA−, its audit is clean, and it has converted 73% of operating profit into cash over five years. Its ₹20,664cr order book is about 4.5 years of revenue. But in Q1 FY27 its margin fell to 4.29% (company figure) as minimum wages in Haryana and UP rose 35–40% and a client cut a final bill by ₹29cr, and management went from promising ‘double-digit margins in this year’ on 1 June to ‘ruling out’ them on 17 August, cutting its revenue, order and capex targets in the same 11 weeks. Collections are also slowing: working-capital days rose from 104 to 119 in a quarter, and CARE says about 60% of what clients owe is more than six months old. The shares have fallen 41% in a year. I expect about 12% a year of earnings growth; the price needs about {need:Ahluwalia Contr.|12}%. **Follow, and buy if Q2 and Q3 margins return above 8% and collections stop slipping.**",
                "**Wait on Capacit'e and Man Infra.** **Capacit'e** builds high-rise towers and mass housing around Mumbai, earns a steady 15–17% margin, has a ₹13,535cr order book, won a ₹741cr order from Mahindra Lifespace in August and was upgraded by Infomerics to BBB+. Its price asks for only about {need:Capacite Infraproj.|4}% a year against my ~12%, the widest margin of safety on this page. But its auditor has qualified the accounts over ₹11.56cr of receivables written back into income, it has turned only 22% of operating profit into cash over five years, Q1 revenue grew 7% against the 20% it guides, its promoters own 31.7% with part still pledged, and its chief executive resigned a week after the Q1 call. **Man Infra** is now mainly a Mumbai housing developer with ₹768cr of cash, a CARE A+ rating and main projects that are 60–90% sold; it is on track for its promise of more than 25% profit growth in FY27. But Q1 pre-sales were ₹290cr against a target of about ₹2,500cr a year, its key launch slipped again, operating cash was −₹50cr in FY26, it has lent about ₹1,461cr to its own project companies, and management deferred most data questions on its calls. Its price needs about {need:Man Infra|15}% a year against my ~13%.",
                "**Pass on PSP Projects.** **PSP** builds factories, offices, housing and temples in Gujarat and Mumbai. Since the Adani group bought 34.41% and became a co-promoter, its order book has doubled to ₹13,245cr and Q1 revenue rose 65%. But about 70% of the book is Adani work, its margin has fallen from 15% in FY22 to 6%, its return on equity is about 5%, CARE cut its short-term rating in December, and about ₹190cr of older government and private dues are still uncollected. I expect about 18% a year from a low base; the price needs about {need:PSP Projects|22}%.",
                "**Three things to hold onto before reading the rest.** First, **order books are not revenue**: all three contractors hold four to five years of work, yet grew only 7–12% (Ahluwalia, Capacit'e) because sites were handed over late and labour was short; PSP is the exception because its main client controls its own sites. Second, **the contract terms decide the margin**: escalation clauses tied to price indices protected steel and cement costs but not wages or aluminium, which is why Ahluwalia and Capacit'e both took hits. Third, **these are small companies with concentrated owners and clients**: read the audit reports, the pledges and the related-party notes, not just the order book.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener. Hover over a starred name for its caveat. Man Infra is a property developer, so its margin, revenue and cash cycle move with project completions and land deals, not with construction work; compare it with the other three only on returns and cash.",
                "**About the dashboard's stored data.** The research checked the companies' own filings against Screener: revenue and profit agree for Ahluwalia, PSP and Capacit'e, apart from small standalone-versus-consolidated gaps (Ahluwalia's Q1 profit is ₹10cr on Screener and ₹11.42cr in the company's release). Nothing here comes from the dashboard's stored records.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Construction as a whole is in the second year of a slowdown.** ICRA estimates that revenue for its sample of 19 listed builders grew only 2–4% in FY26 after a flat FY25, and forecasts 6–8% in FY27 with operating margins slipping to 10.1–10.6%, against 13–14% in FY21. Roads have been hit hardest, and ICRA expects diversified builders to grow faster than road specialists. Money is not the problem: the FY27 Budget raised central capital spending 11.5% to about ₹12.2 lakh crore. The bottleneck is ready projects, and in 2026 a cost shock from the West Asia war. This note covers one of five groups in the sector; the others are government project managers, road developers, diversified heavy-civil contractors, and energy and steel-building firms. **Buildings sit in the middle**: less exposed to highway awards than the road builders, but more exposed to labour, city regulation and the housing cycle. **My view: building demand is healthy in institutions, factories and data centres, softer in housing, and the binding constraint in 2026 has been labour, not orders.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Developers (DLF, Godrej, Mahindra Lifespace, Signature Global), government agencies (the Central Public Works Department for Central Vista, CIDCO and MHADA in Maharashtra, the Airports Authority, the Railways) and industrial groups (Adani) own the projects. **Building contractors** win the civil and structural work, sometimes with mechanical and electrical fit-out, and are paid in monthly bills, less a retention held until the job is finished. They buy steel, cement and other materials (34–42% of sales at the three contractors in FY26, on Screener's split), hire subcontractors and thousands of site workers (Ahluwalia 10,000–12,000, PSP about 16,000), and give bank guarantees for advances and performance. **Profit sits with specialists and with developers**: Capacit'e earns about 16% on super-high-rise work, while general contractors earn 6–10%; Man Infra, as a developer, earned 13–33% in the last five quarters. Contractors that build for their own promoter group, like PSP for Adani, get volume and advances but not a higher margin.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Three sources.** Government and institutional buildings: the Budget raised Housing and Urban Affairs spending 49.5% to ₹85,522cr (PRS), and the contractors here are building Central Vista, CSMT station, IIT Bombay, AIIMS-type hospitals, airports and Mumbai's BDD chawl redevelopment. Housing: ANAROCK counted sales in the top seven cities down 6% to about 90,715 units in Q2 2026, the lowest since January 2023, while launches rose 7% to 1.06 lakh units, and Ahluwalia says developers have ‘slowed down the launches’. Factories, offices and data centres: JLL expects India's data-centre capacity to grow from about 1.6 GW to 6 GW by 2029, needing about $110 billion, and PSP's order book is now 39% industrial. Redevelopment is a fourth, Mumbai-specific source: PSP has a right of first refusal on phases of Dharavi (about 2 lakh homes over five to six years), and Man Infra's business is redeveloping old Mumbai housing societies. **My view: the mix is shifting from housing towards institutions and industry, which suits Ahluwalia and PSP more than Capacit'e.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Labour is the new cost.** Minimum wages in Haryana and UP rose 35–40% in 2026, Delhi-area sites ran at 40–50% labour strength for about two months, and LPG shortages during the West Asia war drove workers away (Ahluwalia, Capacit'e). Delhi's air-quality rules (GRAP and National Green Tribunal orders) stop construction for weeks each winter, and Haryana shut about 90% of its ready-mix concrete plants this year. Materials are mixed: India Ratings expects cement demand to grow mid-single digits with plants only 68–69% used, so cement prices should stay contained, but aluminium rose 35–40% and electrical items 18–20% against an 8% move in the wholesale price index that sets escalation (Capacit'e). Payments are the other cycle: about ₹40,000cr of the housing scheme (PMAY) budget went unspent in FY26 (PRS), and contractors report state and central clients paying months late. **My view: FY27 margins will be the low point for general contractors; new bids priced at 2026 wage levels should help from FY28.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Ahluwalia** on Central Vista and CSMT billing ramping up, on Delhi-area clients compensating for the wage rise, and on NCR housing launches. **Capacit'e** on Mumbai sites being handed over on time (CIDCO, IIT Bombay, MHADA), on escalation indices catching up with aluminium costs, and on clearing its audit qualification. **PSP** on the Adani group's building programme (airports, ports, Dharavi) and on collecting old dues from Surat Diamond Bourse and UP. **Man Infra** on Mumbai luxury housing sales, on launching Tardeo and Mount Mary on schedule, on its revenue share from Godrej's Marine Lines project, and on its Florida projects. **Buy each for its own driver; the ‘construction’ label hides a developer and a captive contractor.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Specialist high-rise contractor', 'Capacit’e', '15–17%', '15%', '**22%**', 'Formwork skill earns a margin, but receivables and slow site handovers eat the cash'],
                        ['General building contractor', 'Ahluwalia', '4–11%', '20%', '**73%**', 'Net cash and advances keep returns up; labour and bill disputes set the margin'],
                        ['Captive building contractor', 'PSP Projects', '5–7%', '8%', '**31%**', 'Adani work is pass-through cost with interest-free advances: volume, not margin'],
                        ['Mumbai housing developer', 'Man Infra', '13–33%', '13%', '**91%**', 'Developer margins on land it controls; revenue booked only on completion'],
                        ['For comparison: the construction sector', 'ICRA sample of 19 listed builders', '10.1–10.6% (FY27 forecast)', '—', '—', 'Margins down from 13–14% in FY21 as bids got cheaper and costs rose'],
                    ],
                    note: 'Ahluwalia’s 4% is Q1 FY27, after the wage rise and a ₹29cr bill cut; its FY26 margin was 9.5% (company figure).',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Construction industry revenue (19 listed builders)', '+2–4% in FY26 (estimate)', '**+6–8% in FY27**; margin 10.1–10.6%', 'ICRA, Mar 2026'],
                        ['EPC revenue and credit', 'Growth averaged 20% in FY22–FY24', '**About +10% in FY27**; credit stress through FY27', 'India Ratings, 2026'],
                        ['Central government capital spending', 'About ₹12.2 lakh crore in FY27 (+11.5%)', 'Housing and Urban Affairs ₹85,522cr (+49.5%)', 'PRS, Feb 2026'],
                        ['Housing sales, top seven cities', 'About 90,715 units in Q2 2026 (−6%); launches 1.06 lakh (+7%)', 'Lowest sales since January 2023; builders pivoting to premium', 'ANAROCK via Business Standard, Jun 2026'],
                        ['Data-centre capacity', 'About 1.6 GW by mid-2026', '**6 GW by 2029**, needing about $110 billion', 'JLL, 2026'],
                        ['Cement demand and supply', 'Plants 68–69% used', 'Mid-single-digit demand growth; about 50 million tonnes of new capacity', 'India Ratings, Jun 2026'],
                        ['Housing scheme (PMAY) spending', 'About ₹40,000cr unspent in FY26', 'Payment delays feed contractor receivables', 'PRS, Feb 2026'],
                        ['Interest cover of construction firms', '3.2–3.5x in FY26', '3.1–3.4x in FY27 as payments slow', 'ICRA, Mar 2026'],
                    ],
                    note: 'The wage and materials figures in the text come from company calls (Ahluwalia, Capacit’e), not from an outside forecaster.',
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
                    label: 'Lasting: a balance sheet that outlives slow payers',
                    text: "**Ahluwalia** has been net cash for years and uses only about 7% of its fund-based bank limits, which CARE credits for its survival through the downturn that sank several peers when developers such as Jaypee and HDIL collapsed. That lets it take on large government jobs that need big guarantees: its bank guarantees total about ₹2,413cr and its surety bonds rose to ₹573.7cr from ₹224.5cr in a year. **Man Infra** holds ₹768cr of cash with only about ₹78cr of borrowings, which lets it buy into redevelopment deals quickly. **My view: in building construction, where clients pay late and failures are common, the strongest balance sheet is the most durable advantage.**",
                },
                {
                    label: 'Evidence of pricing power: contract terms, not prices',
                    text: "No contractor here sets prices; the protection is in the terms. Only 10.34% of **Ahluwalia**'s book is fixed-price and about 89% carries material escalation, with steel and cement passed through on private jobs within about 30 days. But many large private Delhi-area contracts have no labour escalation, and management conceded clients ‘may not’ compensate it for the wage rise. **Capacit'e**'s escalation follows published indices that rose 8% while its aluminium costs rose 35–40%, so it provided ₹20cr over two quarters. **PSP**'s Adani work is ‘passthrough cost’, which protects it from commodities but also caps the margin at about 6%. **Ahluwalia** walked away from an Odisha university job rather than extend a fixed-price bid, which is a small sign of discipline. **My view: these are price-takers with better or worse contracts.**",
                },
                {
                    label: 'Specialist skill: towers and speed',
                    text: "**Capacit'e** specialises in high-rise and super-high-rise towers using aluminium and tunnel formwork, which is why it earns 15–17% against 6–10% for general contractors, and it is Tata Projects' partner on the ₹17,000cr BDD Worli redevelopment, taking 35% of the work. **PSP** built the Kashi Vishwanath corridor and the Surat Diamond Bourse, runs its own precast plant, and erected a 3-basement, 18-storey building in 148 days. **Man Infra** builds its own projects, completing a 38-storey tower in under two and a half years. **My view: Capacit'e's niche is real, but narrow, and concentrated in one city.**",
                },
                {
                    label: 'Captive clients: visibility with strings',
                    text: "**PSP** has the most secure pipeline here: the Adani group supplied 85% of its record ₹10,925cr of FY26 orders and 93% of Q1's ₹630cr, pays interest-free advances (₹836cr at June) without bank guarantees, and gave it first refusal on Dharavi phases. Management wants to keep Adani at 70–75% of the book. **Ahluwalia**'s clients are spread across DLF, Godrej, Signature Global, Brigade, Central Vista, the Airports Authority and the Railways. **My view: PSP's pipeline is secure only for as long as its co-owner wants it to be, and related-party pricing means the minority shareholder cannot see whether the terms are fair.**",
                },
                {
                    label: 'Developer economics at Man Infra',
                    text: "**Man Infra** underwrites every project assuming ‘0 price increase’ and a 10–15% discount to market prices, targets a net margin above 20%, and says its development-management deals, where the landowner carries the cost, return 2.5–3 times the money it puts in. Its projects have sold quickly: Parkwood 90%, Mulund Tower G 75%, the Tardeo tower above 60%, Pali Hill 30% within two months. **My view: that is a developer's moat, built on Mumbai redevelopment relationships, and it should be judged against Mumbai developers, not against contractors.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**L&T**'s buildings and factories arm, **Shapoorji Pallonji**, **Tata Projects** (also Capacit'e's partner), **NCC**, **Kalpataru** and many unlisted regional builders, named by Ahluwalia as its competitors. For government buildings, the government project managers in another group on this page (NBCC and its subsidiaries) hand out much of the work. For Man Infra, the other Mumbai redevelopment developers. Within this Construction page, the steel-building makers compete for factory and warehouse work with pre-engineered steel structures that need less site labour.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For contractors the margin depends on skill, contract terms and how fast sites move; for a developer it depends on land cost and selling prices. Three patterns show up: a steady specialist margin, margins knocked about by one-off costs and bill disputes, and a captive margin set by the client.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specialist high-rise work',
                    text: "**Capacit'e** has earned 15–17% in each of the last five quarters and 16.3% for FY26 (company figure), and guides 15.5–16.5% for FY27, rising to 16.5–17.5% if global uncertainty eases. The margin comes from formwork systems that let it build tall towers quickly with fewer workers. But Q4 FY26 and Q1 FY27 each carried a ₹10cr provision because aluminium and electrical costs outran the indices; management hopes to reverse both in Q3–Q4. **My view: the margin is real; the question is whether it becomes cash.**",
                },
                {
                    label: 'Moved by one-offs: wages, bill cuts and provisions',
                    text: "**Ahluwalia**'s margin fell from 8.59% to 4.29% in Q1 (company figures): about 1.5 points from the Haryana and UP wage rise, which management calls a ‘new base’, about 2.6 points from a ₹29cr cut to its AIIMS Jammu final bill, which it is taking to arbitration, while project-staff costs have risen above 5% of revenue (from 3.5–4.5%) and safety spending to about 3% (from about 1%). It now hopes to regain about 8.6% ‘over the next three quarters’. **PSP**'s Q4 FY26 absorbed a provision of about ₹30cr, which management links to the Kashi project; it says the margin would otherwise have been about 8%. **My view: some of Ahluwalia's hit reverses, but the wage rise and higher staff and safety costs are permanent until new bids price them in.**",
                },
                {
                    label: 'Not structural: margins set by the client or by accounting',
                    text: "**PSP**'s margin has fallen from 15% in FY22 to 6% in FY26 as Adani work grew; the founder says ‘all Adani projects are passthrough cost’, which protects against commodity swings but means the group, not PSP, keeps any upside. Management targets 7–8% but only from H2 (Q1 was 6.42%). **Man Infra**'s 13–33% moves with which projects it completes each quarter, and much of its profit sits in associates and development-management fees that barely show in revenue. **My view: PSP is a volume business; Man Infra's margin needs to be read over years, not quarters.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Capacit'e** has 151 debtor days on Screener and has converted only 22% of operating profit into cash over five years; in Q1 about ₹150cr of collections slipped by ten days and gross debt rose to ₹522cr. **Ahluwalia** carries ₹946cr of unbilled work (up from ₹688cr in March), ₹401cr of retention money and ₹632cr of receivables, and CARE says about 60% of receivables are more than six months old. **PSP** is still arguing over about ₹90cr from Surat Diamond Bourse and about ₹100cr on UP medical projects.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Ahluwalia**'s working-capital days (company measure) rose from 104 in March to 119 in June as payments from Assam stalled before elections, and a central university has not paid for five months because its project is over budget. **PSP**'s cash cycle on Screener has lengthened from −64 days in FY22 to 71 in FY26, and CARE cut its short-term rating after gross current-asset days rose from 237 to 278. **Man Infra**'s operating cash was −₹50cr in FY26 as it bought into new projects.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**PSP** turned operating cash from −₹224cr in FY24 to +₹323cr in FY26 on Adani's interest-free advances, cut short-term borrowing from ₹274cr to ₹217cr in a quarter, and expects to be net debt-free within two to three quarters. **Capacit'e** cut its working-capital days by 43 in FY26 (company figure), lifting operating cash to ₹224cr from ₹52cr. **Ahluwalia** funds its sites with ₹924cr of client advances and its own cash, not bank loans.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Every building contractor waits for retention money until a job is complete, gives bank guarantees for advances and performance, and bills after the work is done. More advances now carry interest: about 31% of Ahluwalia's mobilisation advances cost about 8%, which added ₹16cr of interest in Q1. **Judge each against its own history; a rising order book always ties up more cash before it releases any.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Ahluwalia Contr.', 'Cash ₹920cr and gross debt about ₹2.3cr at June; FY27 capex cut to ₹220–250cr from about ₹300cr; buyback requests refused', 'Net cash ₹744cr (Screener, March); surety bonds ₹573.7cr'],
                        ['Capacite Infraproj.', 'Gross debt ₹522cr at June; net debt-free within eight quarters; FY27 capex ₹193cr; ₹50cr of non-core asset sales', 'Net debt ₹319cr (Screener); promoter pledge cut to 50 lakh shares'],
                        ['Man Infra', 'Cash ₹768cr at June; borrowings about ₹78cr; share buyback under way; about ₹1,461cr lent to project companies', 'Net cash ₹371cr (Screener); guarantees about ₹341cr'],
                        ['PSP Projects', 'Interest-free advances ₹836cr; short-term debt ₹217cr; lien-free deposits ₹139cr of ₹324cr; capex 3–4% of revenue', 'Net cash ₹86cr (Screener); bank guarantees ₹735.4cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Man Infra’s Q1 meeting was a virtual analyst meet.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: government and institutional buildings',
                    text: "**Ahluwalia**'s biggest jobs are Central Vista (about ₹3,070cr including tax), where it now expects about ₹700cr of FY27 billing, and CSMT station redevelopment in Mumbai (₹2,076cr), now about ₹500cr; it is also building airports at Varanasi, Darbhanga and Kota, and is lowest bidder on a ₹500cr RML hospital job. **Capacit'e**'s public-sector work is 55% of its book: CIDCO mass housing (about ₹2,000cr still to be handed over, completion extended to March 2028), its 35% share of MHADA's BDD Worli redevelopment through the Tata Projects joint venture, IIT Bombay (₹550cr, started only in Q2 after tree-cutting permissions) and NBCC buildings. **My view: this is the most reliable demand, but the slowest to convert.**",
                },
                {
                    label: 'Growth driver: developers, factories and data centres',
                    text: "**Capacit'e** won a ₹741cr order from Mahindra Lifespace in August and builds for Raymond and Signature Global. **Ahluwalia**'s private book (61%) is led by DLF's Dahlias (₹2,000cr-plus) and Downtown projects. **PSP**'s book is 39% industrial and 37% residential, and management says it will stay in buildings, including factories, data centres, hotels and hospitals. JLL's forecast of data-centre capacity quadrupling by 2029 is a tailwind for all three. **My view: private demand is healthy for offices, factories and data centres, but Delhi-area housing launches have slowed.**",
                },
                {
                    label: 'Growth driver: Mumbai redevelopment and Dharavi',
                    text: "**PSP** has about ₹3,000cr of Dharavi rehabilitation work already and first refusal on later phases of a programme of about 2 lakh homes over five to six years; it targets ₹4,400–4,500cr of FY27 revenue, about 40% growth, and ₹4,000–5,000cr of new orders. **Man Infra** has more than ₹17,500cr of projects by sale value (about ₹13,300cr unsold), plans launches of about ₹6,600cr in FY27, targets ₹5,000cr of pre-sales over FY27–FY28 and wants to double its project pipeline to over ₹35,000cr by 2031; a Goregaon slum-redevelopment project could add about ₹10,000cr within two years. **My view: redevelopment is Mumbai's growth engine, but approvals make every launch date soft.**",
                },
                {
                    label: 'Growth driver: machines instead of workers',
                    text: "All three contractors are buying equipment to cope with labour shortages. **Ahluwalia** spent ₹264.6cr in FY26 on tower cranes, hoists and batching plants and claims a four-to-five-year payback, though it has cut FY27 capex to ₹220–250cr. **Capacit'e** plans ₹193cr for formwork and cranes. **PSP** spends 3–4% of revenue and wants to handle 1.5–2 times last year's work, adding 3,000–4,000 workers. **My view: mechanisation raises depreciation now (Ahluwalia's rose from ₹67cr to ₹98cr in FY26) and pays back only if revenue grows.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Man Infra** promised more than 25% profit growth for FY27 and delivered 29% in Q1 on attributable profit (company figure). **PSP** grew revenue 65% in Q1 and is on course for its ₹4,400–4,500cr target. **Capacit'e** won ₹4,446cr of orders in FY26 against ₹3,500cr guided.",
                },
                {
                    label: 'Cautious',
                    text: "**Man Infra** plans every project at zero price growth. **PSP** eased its order-inflow expectation from ₹5,000–6,000cr to about ₹4,000–5,000cr ‘plus-minus INR400-500 crores’ after only ₹630cr in Q1. **Ahluwalia** is now ‘not very aggressive’ on new orders given cost volatility, and its deputy managing director says ‘something or the other happens every other month’.",
                },
                {
                    label: 'Missed',
                    text: "**Ahluwalia** cut, within 11 weeks, revenue growth from 15–20% to 12–15%, margin from ‘double-digit’ to about 8.6% at best, order inflow from about ₹8,000cr to ₹4,000–5,000cr, capex from about ₹300cr to ₹220–250cr, and Central Vista billing from ₹1,000cr to about ₹700cr. An analyst told management its guidance had ‘no relevance’. **Capacit'e** guided 20% growth and delivered 7% in Q1, after 12% in FY26. **PSP**'s 7–8% margin target has slipped from the full year to H2.",
                },
                {
                    label: 'Mixed',
                    text: "**Capacit'e** reaffirmed 20% growth (‘It will, 101%’), which needs Q3 and Q4 revenue of ₹850cr-plus each against ₹629cr in Q1; its promoters' pledge fell from 85.5 lakh to 50 lakh shares. **Man Infra** raised its FY27 launch plan, but Q1 pre-sales were ₹290cr and its Marine Lines launch slipped from Diwali 2026 to ‘by this March’, while its Tardeo second phase came forward.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect PSP to grow earnings at about 18% a year, Man Infra at about 13%, and Ahluwalia and Capacit'e at about 12%.** PSP's figure starts from a trailing profit of about ₹73cr, well below its FY22 peak of ₹167cr, so part of it is recovery as revenue grows about 40% in FY27; related-party pricing caps the margin. Ahluwalia's starts from a Q1-depressed base and assumes FY27 profit below FY26 before margins recover to about 9% by FY29. Capacit'e's assumes revenue growth of about 12–15%, not 20%, at a steady margin. Man Infra's assumes lumpy completions and about half the pre-sales target in FY27.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['PSP Projects', 'Adani volumes; Dharavi; margin back to 7–8%', '10% / **18%** / 28%'],
                        ['Man Infra', 'Mumbai launches; completions; Florida', '5% / **13%** / 20%'],
                        ['Ahluwalia Contr.', 'Central Vista and CSMT; margin back to 8–9%', '6% / **12%** / 17%'],
                        ['Capacite Infraproj.', 'Mumbai site handovers; escalation catching up', '5% / **12%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Ahluwalia Contr.', 'Revenue +12–15% (was 15–20%); margin back to about 8.6% (was double-digit); orders ₹4,000–5,000cr (was ₹8,000cr)', '₹220–250cr (was about ₹300cr)', '**Walked back**: Q1 margin 4.29%; every target cut in 11 weeks'],
                        ['Capacite Infraproj.', 'Revenue +20% a year for two years; margin 15.5–16.5%; orders ₹4,500–5,000cr', '₹193cr', '**Behind**: Q1 revenue +7%; ₹20cr of provisions; CEO resigned'],
                        ['Man Infra', 'Profit +25%-plus in FY27; pre-sales ₹5,000cr over FY27–FY28; launches about ₹6,600cr', 'Minimal; capital goes into land and projects', '**On track**: attributable profit +29%; pre-sales slow'],
                        ['PSP Projects', 'Revenue ₹4,400–4,500cr; margin 7–8% from H2; orders ₹4,000–5,000cr', '3–4% of revenue', '**Mixed**: revenue +65%; margin 6.42%; order target eased'],
                    ],
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
                    label: 'Labour, regulation and one city',
                    text: "About half of **Ahluwalia**'s book is in the Delhi region, where wages rose 35–40%, winter pollution rules halt work (Capacit'e budgets 20 days of bans in FY27), and Haryana closed most ready-mix plants. **Capacit'e** is concentrated in the Mumbai region, which Infomerics lists as a geographical, sectoral and customer concentration risk; two customers each gave it more than 10% of FY26 revenue (₹525cr and ₹332cr). **PSP** operates mainly in Gujarat and Mumbai. A single state decision can stop a quarter's work.",
                },
                {
                    label: 'Related-party dependence',
                    text: "About 70% of **PSP**'s order book and about 45% of Q1 revenue come from the Adani group, which owns 34.41% and jointly controls the company with founder Prahaladbhai Patel, who sold 23.09% to it. Institutional investors cut their holdings from about 15.8% to about 5.0%. The terms of related-party work are what the controlling shareholders agree, and PSP's margin has halved while that work grew. **Man Infra**'s promoters and directors took part in its ₹543cr warrant issue, and it lends about ₹1,461cr to its own project companies.",
                },
                {
                    label: 'Audit, pledges and management changes',
                    text: "**Capacit'e**'s auditor has qualified its opinion since the September 2023 quarter: ₹11.56cr of receivables from one party, earlier written off, were written back through other income on ‘future recoverability projections’, and the auditor is ‘unable to comment on the recoverability’; the previous auditor had also qualified FY25. Its director of operations and chief executive resigned on 18 August, a week after the Q1 call, and four business-unit heads were appointed. Its promoters own 31.69%, down about four points since September 2023, with 50 lakh shares still pledged. **Ahluwalia**'s chairman is 87 and no succession plan is disclosed, though its audit is clean. **PSP**'s and **Man Infra**'s audits carry no qualification.",
                },
                {
                    label: 'Slow payers and disputed bills',
                    text: "**Ahluwalia** is going to arbitration over the ₹29cr AIIMS Jammu bill cut, has gone five months unpaid by a central university, and waited on Assam before its elections. **PSP** has about ₹90cr stuck at Surat Diamond Bourse, where the chairman was ‘called for some discussion’ with no result, and about ₹100cr on UP medical projects awaiting time-extension approvals. **Capacit'e**'s qualified receivable is small but shows how old dues are handled. ICRA expects the sector's interest cover to fall to 3.1–3.4x in FY27 as payments slow.",
                },
                {
                    label: 'The housing cycle',
                    text: "Housing is about 40% of **Ahluwalia**'s book (mostly large Gurgaon towers), 37% of **PSP**'s, and most of **Capacit'e**'s private work, and all of **Man Infra**'s business. ANAROCK's Q2 2026 count showed sales in the top seven cities at their lowest since January 2023, and Ahluwalia says developer sentiment is ‘muted’. Man Infra is also putting money into Florida luxury projects (about $35 million so far, of about $1.4 billion of sale value), where currency and tax questions were deferred on its call.",
                },
                {
                    label: 'Guarantees and disclosure',
                    text: "Bigger order books need bigger guarantees: **Ahluwalia**'s surety bonds more than doubled to ₹573.7cr and about ₹221cr of its deposits are pledged as margin; **PSP** has used ₹678cr of its non-fund bank lines; **Man Infra**'s guarantees doubled to about ₹341cr. **Man Infra** repeatedly deferred questions on revenue reconciliation and segment data to ‘after the call’, and **Ahluwalia**'s management was combative when challenged on guidance. When guidance changes as often as it has here, disclosure matters more.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. For contractors, P/E is usually the better guide; for Man Infra, whose profit partly comes from associates and interest, EV/EBITDA is misleading.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **4.1% at 8.7x, 11.6% at 17.4x, 15.4% at 24.2x and 22.4% at 43.6x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|Two} of the {count:live|four} fit my estimates (Ahluwalia and Capacit'e); {count:full|two} are full (Man Infra and PSP).** {Count:stretched|None} is stretched; in the past year Ahluwalia's shares have fallen 41%, Capacit'e's 36%, and PSP's are well below their high.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Ahluwalia**'s ₹744cr of net cash on Screener (about ₹920cr of cash at June on the company's figures) is about a fifth of its market value, so it looks cheaper still on EV/EBITDA, though some of that cash is advances from clients and ₹221cr is pledged for guarantees. **Capacit'e** carries about ₹319cr of net debt, which EV/EBITDA charges it for, but it looks cheap on either measure. **Man Infra** looks far dearer on EV/EBITDA than on P/E because much of its profit comes from associates, development fees and interest on loans to its projects, which sit below operating profit. **PSP**'s small net cash changes little.",
                },
                {
                    label: 'Fits: a clean contractor at a fair price',
                    text: "**Ahluwalia** needs about {need:Ahluwalia Contr.|12}% a year against my ~12%, after a 41% fall in a year. It is the cleanest balance sheet in building construction, with no audit remarks. The price assumes margins recover to about 8.6% and no worse; the risk is that the Q1 hit proves to be the new level. **The reason to wait for Q2 is not the price but the credibility of the guidance.**",
                },
                {
                    label: 'Fits, with reasons: cheap because of governance',
                    text: "**Capacit'e** needs only about {need:Capacite Infraproj.|4}% a year against my ~12%, and the shares trade below the book value of its net assets. That is the market pricing a qualified audit, a departing chief executive, a pledged promoter stake and five years of weak cash conversion. If H2 revenue reaches ₹850cr a quarter, the audit qualification clears and the pledge is released, the discount should narrow. **Cheapness is the case; governance is the risk.**",
                },
                {
                    label: 'Fits, just: a developer priced for its pipeline',
                    text: "**Man Infra** needs about {need:Man Infra|15}% a year against my ~13%. Its management guides more than 25% profit growth this year and a doubling of its project pipeline by 2031, and the price leans towards that. Its net cash and buyback (87 lakh shares bought by 12 October) give some support, and handing Marine Lines to Godrej brought back more than ₹300cr, but its reported profit swings with completions and its Florida projects add a currency and execution risk not in the price. **Better to buy after a weak pre-sales quarter than after a launch.**",
                },
                {
                    label: 'Full: a captive contractor priced for a margin recovery',
                    text: "**PSP** needs about {need:PSP Projects|22}% a year against my ~18%. That is a lot of growth to demand from a contractor earning 6% margins and a return on equity of about 5%, and it assumes Adani volumes arrive and margins return to 7–8%. Profit is recovering from a low base, which is why the gap is only four points, but the minority shareholder takes the related-party risk without a margin premium. **I would not pay for growth whose terms are set by the co-owner.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Ahluwalia Contr.', rank: 1, stance: 'SCALEUP', segment: BLD_CON,
            what: "A pure building contractor for towers, hospitals, airports, stations and government offices; about half its ₹20,664cr order book is in the Delhi region, and 61% of it is private.",
            view: "**The cleanest balance sheet, a broken margin guide.** It holds about ₹920cr of cash with almost no debt, CARE rates it AA−, the audit is clean and cash conversion is 73% over five years. But Q1 margin fell to 4.29% on a wage rise and a ₹29cr bill cut, and within 11 weeks it withdrew double-digit margin guidance and cut revenue, order and capex targets. The price needs about {need:Ahluwalia Contr.|12}% a year against my ~12%.",
            watch: 'Q2 and Q3 margins back above 8%; working-capital days falling back from 119; Central Vista billing reaching about ₹700cr in FY27; compensation from Delhi-area clients for the wage rise.',
        },
        {
            company: 'Capacite Infraproj.', rank: 2, stance: 'SCALEUP', segment: BLD_CON,
            what: "A Mumbai-based builder of high-rise and super-high-rise towers and mass housing; 55% of its ₹13,535cr book is public-sector work, including CIDCO housing and its share of MHADA's BDD Worli redevelopment with Tata Projects.",
            view: "**A good margin with governance questions.** It earns 15–17% steadily, was upgraded to BBB+ and won a ₹741cr Mahindra Lifespace order. But the auditor has qualified its accounts since 2023 over ₹11.56cr of receivables written back, cash conversion is 22% over five years, the promoter stake is 31.7% with a pledge, growth was 7% against 20% guided, and the CEO resigned in August. The price needs about {need:Capacite Infraproj.|4}% a year against my ~12%.",
            watch: 'Q3 and Q4 revenue above ₹850cr each; the audit qualification cleared; the remaining pledge released by end-FY27.',
        },
        {
            company: 'Man Infra', rank: 3, stance: 'CYCLICAL', segment: BLD_DEV,
            what: "Now mainly a Mumbai housing developer (redevelopment, joint ventures and development-management deals) with its own construction arm, a ₹392cr outside construction order book and luxury projects in Florida.",
            view: "**A net-cash developer with thin disclosure.** It holds ₹768cr of cash, CARE rates it A+, its main projects are 60–90% sold, and attributable profit rose 29% in Q1 against a 25%-plus guide. But reported revenue fell 43% in FY26 as completions lagged, Q1 pre-sales were ₹290cr against a ₹2,500cr-a-year target and management deferred most data questions. On 28 September 2026 it handed the development rights of Marine Lines, its slipping flagship launch (more than ₹6,000cr of sale value), to Godrej Properties: it recoups more than ₹300cr it had put in and keeps a revenue share, but no longer sells those flats itself, and the filing gives no share percentage. It has also bought back 87 lakh shares by 12 October. The price needs about {need:Man Infra|15}% a year against my ~13%, which now {label:Man Infra|fits}; I keep it on wait until the Q2 pre-sales and the Godrej terms show what the pipeline now earns (14 October 2026).",
            watch: 'Pre-sales towards ₹2,500cr in FY27 as Tardeo and Mount Mary launch, now without Marine Lines; the size of its revenue share from Godrej; Ghatkopar completion by March 2027; money sent to Florida.',
        },
        {
            company: 'PSP Projects', rank: 4, stance: 'SCALEUP', segment: BLD_CON,
            what: "An Ahmedabad building contractor for factories, offices, housing, temples and government buildings, 34.41% owned by the Adani group, which supplies about 70% of its ₹13,245cr order book.",
            view: "**Volume without margin.** Revenue rose 65% in Q1, the book doubled, and interest-free Adani advances repaired its cash flow. But its margin fell from 15% in FY22 to 6%, return on equity is about 5%, CARE cut its short-term rating in December, about ₹190cr of old dues are still uncollected, and the 7–8% margin target has moved to H2. The price needs about {need:PSP Projects|22}% a year against my ~18%.",
            watch: 'H2 margin at 7–8%; the non-Adani share of new orders; collection of the Surat Diamond Bourse and UP dues.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Building contractors.** **Ahluwalia Contracts: follow**, the best-placed company here; its price fits, and I would buy once two quarters show its margin back above 8% and its collections stop slipping. **Capacit'e Infraprojects (listed as Capacite Infraproj.): wait**; the cheapest share on this page, but it needs a clean audit, a new chief executive who settles in and a released pledge first. **PSP Projects: pass**; its growth is real, but its terms are set by its co-owner and its margin has halved.",
            "**Mumbai developer.** **Man Infraconstruction: wait** for pre-sales to reach its target and for clearer disclosure; its price now fits, but it handed its biggest launch, Marine Lines, to Godrej for an undisclosed revenue share, so Q2 pre-sales must show what is left. It is better compared with Mumbai developers than with contractors.",
            "**What would change my view.** For the better: Delhi-area clients compensating for the wage rise; Capacit'e clearing its audit qualification; PSP winning more work outside the Adani group at better margins; Man Infra's big launches selling on schedule. For the worse: another guidance cut at Ahluwalia; more management exits at Capacit'e; a sharper fall in Mumbai or Delhi housing sales; state payment delays spreading.",
            "**What to watch next quarter.** Ahluwalia's Q2 margin and Central Vista billing; Capacit'e's H2 run-rate, auditor and pledge; PSP's margin and non-Adani orders; Man Infra's pre-sales and the terms of its Godrej revenue share.",
        ],
        bottomLine:
            "No company in this group is a buy today. Follow Ahluwalia Contracts, whose price fits, until its margin proves it has recovered; wait on Capacit'e Infraprojects, cheap but with governance questions, and on Man Infraconstruction, a developer with thin disclosure; and pass on PSP Projects, whose growth depends on terms set by its co-owner.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/AHLUCONT/consolidated/' },
        { label: 'Revenue growth of construction players to improve by 6–8% in 2026–27 — ICRA, Mar 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=9dd3c3d4-668d-47a7-844a-ccc99949a6ca' },
        { label: 'Union Budget 2026–27 analysis — PRS Legislative Research, Feb 2026', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
        { label: 'Housing sales fall 6%, launches rise (ANAROCK Q2 2026) — Business Standard, Jun 2026', url: 'https://www.business-standard.com/amp/finance/personal-finance/housing-sales-fall-6-launches-rise-as-builders-pivot-to-premium-projects-126062900384_1.html' },
        { label: 'India data centres, 2026 mid-year — JLL', url: 'https://www.jll.com/en-in/insights/market-dynamics/india-data-centers' },
        { label: 'Ind-Ra sees moderate cement demand growth in FY27 — EPC World, Jun 2026', url: 'https://www.epcworld.in/ind-ra-sees-moderate-demand-growth-but-profitability-headwinds-for-cement-sector-in-fy27/' },
        { label: 'Ahluwalia Contracts rating rationale (AA−/Stable) — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130433_Ahluwalia_Contracts_(India)_Limited.pdf' },
        { label: 'Ahluwalia Contracts Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=dc8aaa5e-7a96-4a73-b302-a05ae819dd22.pdf' },
        { label: 'Ahluwalia Contracts Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2d435d22-de34-4710-b03a-74d8e80be5ca.pdf' },
        { label: 'PSP Projects rating rationale (short-term cut to A1) — CARE, Dec 2025', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202512121217_PSP_Projects_Limited.pdf' },
        { label: 'PSP Projects Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/45268a76-bc15-4b41-8c0f-6f2fd0d50370.pdf' },
        { label: 'Capacit’e Infraprojects rating rationale (upgrade to BBB+) — Infomerics, May 2026', url: 'https://www.infomerics.com/admin/uploads/pr-capacite-infraprojects-19may26.pdf' },
        { label: 'Capacit’e Infraprojects Annual Report FY26 (qualified opinion) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/fb5e4406-9079-40be-bcd9-1b4070873b71.pdf' },
        { label: 'Capacit’e Infraprojects: resignation of the CEO — BSE, Aug 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=28d5d280-2b72-4ad9-976f-5077e59feca4.pdf' },
        { label: 'Man Infraconstruction rating rationale (A+/Stable) — CARE, Nov 2025', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202511121152_Man_Infraconstruction_Limited.pdf' },
        { label: 'Man Infraconstruction Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/40645941-db95-49de-b44c-77fdef8819e3.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
