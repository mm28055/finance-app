import { SectorOverview } from './types';
import { constructionDiversifiedBusinesses } from './construction-diversified-businesses';
import { constructionValuationInputs } from './card-data/construction';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const DIV_URBAN = 'Metro, tunnel, marine and hydro specialists — hard civil work';
const DIV_SERVICE = 'Power-plant and railway services — erection, upkeep, bridges and signalling';
const DIV_STATE = 'Multi-segment contractors for state governments — water, buildings, power lines';

export const constructionDiversified: SectorOverview = {
    sector: 'Construction',
    title: 'Construction · Diversified contractors',
    format: 'ranked',
    businesses: constructionDiversifiedBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: constructionValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'J Kumar Infra': 10,
            'Power Mech Proj.': 16,
            'NCC': 9,
            'GPT Infraprojects': 13,
            'Cemindia Projects': 15,
            'Patel Engineering': 10,
            'Afcons Infra': 20,
            'SPML Infra': 8,
        },
    },
    standfirst:
        "The Construction sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This is the group of eight diversified contractors: companies that build the hard, technical parts of India's infrastructure rather than plain highways. **Afcons**, **Cemindia** (the old ITD Cementation, now controlled by the Adani group) and **J Kumar** build metros, tunnels, ports and elevated roads; **Patel Engineering** builds dams and tunnels for hydropower; **NCC** is a large all-rounder working mostly for state governments; **Power Mech** erects and maintains power plants; **GPT** builds railway bridges and, since January, railway signalling; and **SPML** builds water schemes and is starting to make battery-storage systems. This edition was built from the last two earnings calls for each, the FY26 annual reports, rating reports from CRISIL, CARE, ICRA and Infomerics, the companies' presentations, and sector work from ICRA, CareEdge, India Ratings and PRS. The headline: order books are at or near records almost everywhere, but revenue has not kept up; cash is tight where state governments are the client; and several companies carry a governance flag, from pledged promoter shares to going-concern doubts at subsidiaries. **J Kumar** and **Power Mech** are the two I would own at today's prices. Every chart uses filed results.",
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
            note: "Most of this group earns 9–16% at the operating level, above the 8–12% that road builders now guide. The specialists earn most: J Kumar 14–15% every quarter, Patel 12–15%, GPT 12–16%. NCC earns a steady 9% on very large volumes. Cemindia has moved from about 8% in FY22 to 10% as old low-margin jobs finished. Afcons's 2% in Q4 FY26 was one-off provisions, and SPML is still climbing out of a debt restructuring.",
            values: {
                'Cemindia Projects': [9, 9, 10, 12, 10],
                'Afcons Infra': [13, 11, 14, 2, 9],
                'NCC': [9, 9, 9, 9, 9],
                'Power Mech Proj.': [13, 12, 11, 11, 10],
                'J Kumar Infra': [15, 15, 14, 14, 14],
                'Patel Engineering': [13, 13, 12, 15, 14],
                'GPT Infraprojects': [12, 14, 13, 14, 16],
                'SPML Infra': [4, 6, 11, 7, 10],
            },
            cellNotes: {
                'Afcons Infra': "Q4 FY26 carried about ₹260–265cr of one-off charges (a new bad-debt provisioning method, a provision after an adverse arbitration development and extra cost on a marine job) and produced Afcons's first quarterly loss since 2010. The company's own measure, which includes other income, was 9.6% in Q1 FY27.",
                'Cemindia Projects': "Q4 FY26 was lifted by provisions released on completed metro jobs; on the Q4 call management called it 'not a regular phenomenon' and guided about 10–10.5%; on the July call it guided '10% plus', double digit.",
                'Power Mech Proj.': "Q1 FY27 was hit by war-related material costs, a smaller share of penalties on a Karnataka mining-royalty contract and high costs at a new coal mine. The company guides 12.5% for FY27 on its own measure, which includes other income; Q1 was 10.8% on that measure.",
                'GPT Infraprojects': "Includes Alcon, the railway-signalling company bought on 1 January 2026, and the Ghana sleeper plant. GPT's standalone margin was 13.8% in Q1 FY27 (company figure).",
                'SPML Infra': "Q4 FY26 was cut by one-off legal and arbitration costs and bad-debt provisions. Management says new orders are taken only at margins above 10%.",
                'J Kumar Infra': "Standalone figures; J Kumar's consolidated accounts are nearly identical.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: "Two kinds of company here. Power Mech and SPML are growing fast (26% and 82% in Q1), and NCC is growing again (+12%) as water-scheme money arrives. The rest are stuck: J Kumar, Patel and Cemindia grew 2–6% in Q1 despite record or near-record order books, GPT shrank 4%, and Afcons has shrunk for three quarters running. Almost every company guides to a much stronger second half.",
            values: {
                'Cemindia Projects': [8, 10, 2, 17, 6],
                'Afcons Infra': [7, 1, -7, -19, -21],
                'NCC': [-6, -13, -9, 2, 12],
                'Power Mech Proj.': [28, 20, 6, 14, 26],
                'J Kumar Infra': [16, 4, -12, -3, 2],
                'Patel Engineering': [12, 3, 3, -12, 4],
                'GPT Infraprojects': [29, -3, 2, 9, -4],
                'SPML Infra': [-25, 1, 22, 54, 82],
            },
            cellNotes: {
                'Afcons Infra': "Management said it chose 'between growth or to preserve the liquidity' when clients paid late, and the war slowed its overseas sites. It gives no FY27 revenue guidance.",
                'SPML Infra': "From a low base: FY25 revenue fell to ₹777cr from ₹1,319cr. The company reports Q1 FY27 growth of 74% on its own figure of ₹286cr.",
                'GPT Infraprojects': "Q1 FY27 includes Alcon; GPT's standalone revenue fell 9% as elections in West Bengal took labour off its sites.",
                'J Kumar Infra': "Standalone. FY26 revenue was flat at ₹5,694cr against guidance of 15% growth.",
                'NCC': "Q1 FY27 was NCC's best June quarter ever. FY26 revenue fell 6% because Uttar Pradesh stopped paying for Jal Jeevan Mission water schemes.",
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
            note: "Cemindia's return has more than doubled since FY22, to 33%, as revenue grew 2.6 times. Power Mech, GPT and J Kumar hold about 18–22%. Afcons has fallen from 23% to 14% as profit halved and debt rose, and NCC from 22% to 17% as it put money into smart-meter projects and tunnel-boring machines. SPML is still at 6%, the legacy of years of losses.",
            values: {
                'Cemindia Projects': [14, 19, 27, 28, 33],
                'Afcons Infra': [20, 23, 23, 20, 14],
                'NCC': [12, 19, 22, 22, 17],
                'Power Mech Proj.': [18, 22, 24, 23, 22],
                'J Kumar Infra': [null, null, 18, 20, 18],
                'Patel Engineering': [12, 13, 14, 15, 13],
                'GPT Infraprojects': [14, 14, 22, 22, 21],
                'SPML Infra': [1, 3, 4, 6, 6],
            },
            cellNotes: {
                'J Kumar Infra': "Standalone; Screener has no FY22–FY23 figure on this basis.",
                'Cemindia Projects': "FY26 includes about ₹150cr of old claims recovered, mostly booked as interest in other income.",
                'Patel Engineering': "Held down by repeated write-downs of hydro subsidiaries and investments: about ₹270–280cr in FY25 and ₹153cr in FY26 (figures cited on the Q4 call).",
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
            note: "Mostly not meaningful for this group. Screener computes payable days against a small materials bill, so the figures for Afcons, NCC, Power Mech, GPT and SPML swing hundreds of days below zero. The companies' own working-capital measures are the better guide: Afcons about 139–143 days and rising, Patel about 137, Cemindia about 120, J Kumar about 103 and NCC about 95 on its standalone books.",
            values: {
                'Cemindia Projects': [-99, -78, -36, -120, -110],
                'Afcons Infra': [-88, -119, -160, -200, -283],
                'NCC': [-246, -217, -184, -244, -283],
                'Power Mech Proj.': [90, 91, 90, -231, -289],
                'J Kumar Infra': [null, 68, 77, 63, 44],
                'Patel Engineering': [61, 47, 44, 54, 43],
                'GPT Infraprojects': [-10, -311, -225, -222, 36],
                'SPML Infra': [-94, -1842, -1070, -2262, -1454],
            },
            cellNotes: {
                'SPML Infra': "Distorted by legacy liabilities from the restructuring. Debtor days were 216 in FY26 and working-capital days 159 (Screener).",
                'Power Mech Proj.': "The swing from +90 to −231 days in FY25 is how payables are computed, not a change in the business; debtor days are about 93.",
                'GPT Infraprojects': "FY26 inventory and payable days are blank on Screener and earlier years show extreme values; working-capital days were 81 and debtor days 36 in FY26.",
                'Afcons Infra': "Afcons's own net working capital rose from under 90 days (FY24) to 139 (FY26, CRISIL) and was 'marginally' higher again at June 2026.",
                'NCC': "Standalone working capital was 95 days at June 2026 (company figure), but unbilled work had reached ₹7,414cr, 38% of revenue.",
                'J Kumar Infra': "Standalone. The company puts working capital at 99 days (FY26) and 103 (Q1 FY27), and guides 100–110.",
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
            note: "Patel, J Kumar, Cemindia and GPT turned about two-thirds or more of operating profit into cash over five years. Afcons, Power Mech and NCC are the weak ones: Afcons had negative operating cash in both FY25 and FY26 and NCC in FY26, as state and overseas clients paid late, and Power Mech turned only ₹1cr of cash in FY25. SPML's five-year figure is inflated by one unusual year.",
            values: {
                'Cemindia Projects': [116, 118, 94, 21, 49, 66],
                'Afcons Infra': [65, 91, 51, -10, -10, 36],
                'NCC': [138, 75, 77, 39, -25, 52],
                'Power Mech Proj.': [61, 46, 42, 0, 55, 38],
                'J Kumar Infra': [null, 37, 48, 46, 137, 70],
                'Patel Engineering': [97, 125, 100, 37, 82, 85],
                'GPT Infraprojects': [86, 137, 94, 21, 37, 66],
                'SPML Infra': [-380, 69, 3300, -173, -174, 239],
            },
            cellNotes: {
                'SPML Infra': "FY24 shows ₹594cr of operating cash on ₹18cr of operating profit, a one-off the sources read do not explain. Without it, operating cash was negative in FY22, FY25 (−₹85cr) and FY26 (−₹113cr).",
                'NCC': "FY26 operating cash was −₹459cr as unpaid water-scheme bills in Uttar Pradesh piled up. Collections improved to ₹610cr in Q1 FY27 and ₹413cr in July (company figures).",
                'J Kumar Infra': "FY26 operating cash jumped to ₹1,128cr as working capital fell from 112 to 99 days (company figure); the surplus was parked in debt securities.",
                'Afcons Infra': "Operating cash was −₹132cr in FY25 and −₹127cr in FY26 as clients delayed payments and the certification of work. CRISIL moved its outlook to Negative in August 2026 for this reason.",
                'Power Mech Proj.': "FY25 operating cash was ₹1cr as water-scheme bills went uncertified. The company gives ₹430cr for FY26 on its own measure.",
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
            note: "Patel is the surprise: 9% of revenue as free cash over five years, which went into paying down debt. J Kumar produced 11.5% in FY26 alone. Afcons has burned cash for three years as it bought tunnel-boring machines and waited to be paid, and NCC's FY26 free cash was about −₹1,400cr.",
            values: {
                'Cemindia Projects': [6.0, 1.0, 4.5, -0.5, 2.3, 2.3],
                'Afcons Infra': [2.3, 2.3, -0.1, -3.8, -4.2, -0.7],
                'NCC': [10.7, 4.8, 5.2, 1.9, -6.8, 2.2],
                'Power Mech Proj.': [4.8, 3.6, 2.7, -3.1, 0.9, 1.2],
                'J Kumar Infra': [8.3, -0.6, 2.5, 2.5, 11.5, 4.6],
                'Patel Engineering': [10.5, 13.7, 11.6, 3.7, 8.8, 9.3],
                'GPT Infraprojects': [8.7, 7.4, 9.4, -2.7, 0.7, 3.9],
                'SPML Infra': [-2.1, 2.3, 40.0, -11.1, -20.6, 5.5],
            },
            cellNotes: {
                'SPML Infra': "FY24's 40% is the same unexplained one-off inflow; FY25 and FY26 were negative.",
                'NCC': "FY26 combined negative operating cash with about ₹912cr of capex (company figure), including tunnel-boring machines.",
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
            note: "Below zero means more cash than debt. Patel has cut its ratio from 3.8 to 1.0 with a rights issue and asset sales, and J Kumar is net cash. Afcons and NCC went the other way in FY26: Afcons's net debt reached ₹2,653cr at March 2026, and NCC's consolidated net debt was ₹3,513cr at June (company figure), about ₹1,461cr of it loans in its smart-meter companies. SPML's early figures are huge only because its operating profit was close to zero.",
            values: {
                'Cemindia Projects': [0.2, 0.3, -0.0, 0.2, 0.1],
                'Afcons Infra': [1.6, 1.3, 1.3, 1.2, 2.2],
                'NCC': [0.7, 0.2, -0.1, 0.0, 1.2],
                'Power Mech Proj.': [1.3, 0.8, -0.2, 0.2, 0.2],
                'J Kumar Infra': [-0.3, 0.3, 0.1, -0.2, -0.1],
                'Patel Engineering': [3.8, 2.8, 2.3, 1.6, 1.0],
                'GPT Infraprojects': [2.9, 2.6, 1.6, 0.9, 1.5],
                'SPML Infra': [360.6, 60.3, 17.5, 3.3, 2.9],
            },
            cellNotes: {
                'SPML Infra': "FY22–FY23 reflect operating profit of only ₹5cr and ₹29cr. Borrowings fell from ₹1,771cr (FY23) to ₹358cr (FY26) after a restructuring and about ₹400cr of promoter money.",
                'Cemindia Projects': "Screener nets investments against debt. The company gives gross debt of about ₹1,000cr and net debt of about ₹700cr at June 2026, and holds about ₹1,400cr of client advances, about 90% interest-free.",
                'NCC': "Screener's March figure is ₹2,168cr of net debt; the company's June figure is ₹3,513cr including the smart-meter project loans.",
                'GPT Infraprojects': "Rose in FY26 as borrowings went from ₹129cr to ₹294cr, largely to pay for Alcon.",
                'Afcons Infra': "Management targets net debt of ₹2,700–2,800cr at March 2027 while spending ₹700–800cr on equipment.",
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
            note: "These are equipment businesses: tunnel-boring machines, marine barges, piling rigs and cranes. Most spend 2–6% of revenue a year. The spikes are single projects: J Kumar's tunnel-boring machines for a Mumbai road tunnel, NCC's machines for tunnel work, Power Mech's spending on coal mines it will run, and SPML's battery-pack factory.",
            values: {
                'Cemindia Projects': [2.9, 8.2, 4.6, 2.5, 2.6, 3.8],
                'Afcons Infra': [3.2, 7.3, 5.4, 2.7, 3.1, 4.4],
                'NCC': [2.0, 2.2, 1.4, 1.4, 4.6, 2.3],
                'Power Mech Proj.': [1.6, 1.5, 2.2, 3.1, 5.5, 3.2],
                'J Kumar Infra': [8.8, 5.8, 4.5, 4.1, 8.2, 5.9],
                'Patel Engineering': [4.7, 4.3, 3.5, 1.8, 2.2, 3.1],
                'GPT Infraprojects': [1.9, 7.3, 1.7, 5.1, 4.3, 4.1],
                'SPML Infra': [0.1, 0.0, 5.1, 0.1, 7.6, 2.8],
            },
            cellNotes: {
                'J Kumar Infra': "FY26 includes about ₹300cr of tunnel-boring machines for the Goregaon–Mulund road tunnel; capex is now guided at about ₹150cr a year.",
                'Power Mech Proj.': "FY26 includes spending on its coal-mining contracts. FY27 needs about ₹400cr for the Tasra coal-washing plant plus about ₹400cr inside the project company.",
                'SPML Infra': "FY26 is its battery-pack plant at Supa, near Pune; the expansion to 5 GWh costs about ₹236–238cr in total.",
                'Afcons Infra': "The company gives FY26 capex of ₹1,069cr, mostly tunnel-boring machines for the Mumbai–Ahmedabad high-speed rail tunnel; the cash paid in the year, shown here, was lower.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'skill', label: 'Technical niche', description: 'Work that few contractors can do: tunnels, marine structures, dams, power-plant erection, railway signalling.' },
            { key: 'book', label: 'Order-book visibility', description: 'How many years of revenue the order book covers, and how much of it is actually moving.' },
            { key: 'price', label: 'Margin and pricing', description: 'The margin earned, whether costs can be passed on through escalation clauses, and discipline in bidding.' },
            { key: 'client', label: 'Client quality', description: 'Who pays and how fast: central agencies and large private groups against cash-short state schemes, and how concentrated the book is.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what pledges, auditors and rating agencies show.' },
        ],
        rows: [
            { company: 'J Kumar Infra', trend: 'stable', trendNote: 'Record ₹22,246cr order book and 14–15% margins held, but revenue flat for two years as sites waited for approvals.',
                grades: { skill: { grade: 'A', note: 'Road tunnels; elevated roads over roads' }, book: { grade: 'B', note: '₹22,246cr, about 3.9 years; slow to start' }, price: { grade: 'A', note: '14–15% every quarter; all contracts indexed' }, client: { grade: 'B', note: 'Prompt Mumbai agencies; Mumbai-heavy' }, cash: { grade: 'A', note: 'Net cash; 70% cash conversion' } } },
            { company: 'Power Mech Proj.', trend: 'widening', trendNote: 'Moving from erection into plant upkeep, whole plant sections and coal-mine operation, all at higher margins.',
                grades: { skill: { grade: 'A', note: 'Largest independent plant erector' }, book: { grade: 'B', note: '₹16,229cr executable, about 2.7 years' }, price: { grade: 'B', note: '10–13%; Q1 below its guide' }, client: { grade: 'B', note: 'BHEL, Adani, Vedanta; pay within a month' }, cash: { grade: 'C', note: '38% cash conversion over five years' } } },
            { company: 'NCC', trend: 'stable', trendNote: 'Record book and a steady 9% margin, but cash went backwards as state clients paid late.',
                grades: { skill: { grade: 'C', note: 'Breadth, not a niche' }, book: { grade: 'A', note: '₹81,214cr, about 3.9 years; all moving' }, price: { grade: 'B', note: '9% every quarter; 81% escalation-linked' }, client: { grade: 'D', note: '79% state-linked; water-scheme arrears' }, cash: { grade: 'C', note: 'FY26 operating cash −₹459cr' } } },
            { company: 'GPT Infraprojects', trend: 'widening', trendNote: 'Added railway signalling (Alcon) and an African sleeper plant; margin up to 16%.',
                grades: { skill: { grade: 'B', note: 'Rail bridges; now signalling' }, book: { grade: 'C', note: '₹4,303cr; Q1 orders only ₹130cr' }, price: { grade: 'A', note: '12–16%, rising' }, client: { grade: 'B', note: 'RVNL, Indian Railways, NHAI' }, cash: { grade: 'C', note: '50.8% of promoter shares pledged' } } },
            { company: 'Cemindia Projects', trend: 'widening', trendNote: 'Adani control doubled order inflow and lifted ratings to AA−; but half the book comes from the parent.',
                grades: { skill: { grade: 'A', note: 'Marine, metro tunnels, foundations' }, book: { grade: 'B', note: '₹31,307cr; 70% at an early stage' }, price: { grade: 'C', note: 'About 10%; war costs not covered' }, client: { grade: 'C', note: 'Adani group 53% of the book' }, cash: { grade: 'B', note: '66% cash conversion; ₹5,000cr raise approved' } } },
            { company: 'Patel Engineering', trend: 'stable', trendNote: 'Balance sheet repaired and upgraded to A, but it lost the biggest hydro package on price and the pledge remains.',
                grades: { skill: { grade: 'A', note: '15,000 MW of hydro; 300 km of tunnels' }, book: { grade: 'C', note: '₹14,636cr, about 2.9 years; fell in Q1' }, price: { grade: 'B', note: '12–15%; lost Dibang to a lower bid' }, client: { grade: 'B', note: 'Central hydro companies 62%' }, cash: { grade: 'D', note: '86.6% of promoter shares pledged' } } },
            { company: 'Afcons Infra', trend: 'narrowing', trendNote: 'Record wins in Croatia and at Vadhvan, but revenue down three quarters running, cash negative two years and a Negative rating outlook.',
                grades: { skill: { grade: 'A', note: 'Ranked 8th in the world in marine work' }, book: { grade: 'A', note: '₹43,290cr, about 3.6 years' }, price: { grade: 'C', note: 'First quarterly loss; no margin guide' }, client: { grade: 'C', note: 'Late payers in UP, Bangladesh, Gabon' }, cash: { grade: 'D', note: 'All promoter shares pledged; cash negative' } } },
            { company: 'SPML Infra', trend: 'stable', trendNote: 'Out of restructuring, with new orders at 10%-plus margins; the battery-storage bet is unproven.',
                grades: { skill: { grade: 'C', note: 'Water schemes; battery packs unproven' }, book: { grade: 'B', note: 'About ₹5,100cr; ₹1,251cr is thin legacy work' }, price: { grade: 'C', note: '4–11% over five quarters' }, client: { grade: 'D', note: 'State water utilities; 216 debtor days' }, cash: { grade: 'D', note: 'Cash negative; unaudited joint operations' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own J Kumar; it is the cheapest good business in this group.** **J Kumar Infraprojects** builds Mumbai's elevated roads, flyovers, metro stations and a twin road tunnel. It has earned a 14–15% operating margin in each of the last five quarters, holds more cash than debt and produced ₹1,128cr of operating cash in FY26. Its order book is a record ₹22,246cr, about four years of revenue, after about ₹5,500cr of wins so far this year against ₹1,039cr in all of FY26. The problem is conversion: FY26 revenue was flat at ₹5,694cr against a promise of 15% growth, as approvals and land held up its biggest sites, and the ₹7,500cr revenue target has moved from FY27 to FY28. I expect about 10% a year of earnings growth; the price needs only about 5%. **Own it, and judge it on whether second-half revenue runs above about ₹1,800cr a quarter.**",
                "**Own Power Mech.** **Power Mech Projects** is the largest independent company that erects and maintains thermal power plants in India, and is moving into building whole plant sections and running coal mines. Revenue has grown from ₹2,710cr in FY22 to ₹6,062cr in FY26 and net profit from ₹138cr to ₹412cr, return on capital is 22%, and Q1 FY27 revenue rose 26%. India plans about 63 GW of new coal capacity by 2032, and Power Mech wins 60–65% of its power bids. But it missed its FY26 revenue and order targets, its Q1 margin of 10.8% (company measure) was well below the 12.5% it guides for the year, and it has turned only 38% of operating profit into cash over five years. I expect about 16% a year; the price needs about 13%. **Own it, sized for a company whose cash has lagged its profit.**",
                "**Follow NCC.** **NCC** is one of India's largest general contractors, working mostly for state governments on buildings, roads, water schemes, power lines and smart meters. Its ₹81,214cr order book is about four years of revenue, its operating margin has been 9% in every quarter shown, and Q1 FY27 revenue rose 12%, its best June quarter ever. It gave guidance again at Q1 (revenue up 8–10%, margin 8.5–9%) and is running ahead of it. But FY26 operating cash was −₹459cr as Uttar Pradesh stopped paying for water schemes, unbilled work has reached ₹7,414cr, 38% of revenue, and consolidated net debt more than doubled in a year to ₹3,513cr (company figure). I expect about 9% a year; the price needs about 7%. **Buy when the cash turns, not before.**",
                "**Follow GPT Infraprojects.** **GPT** builds railway and road bridges, makes concrete sleepers in India and Africa, and in January bought Alcon, a railway-signalling contractor, for ₹151.83cr. Net profit has risen from ₹23cr in FY22 to ₹97cr in FY26, return on capital is 21%, the margin reached 16% in Q1, and it pays out 36–47% of profit as dividends. But half of the promoters' shares are pledged (50.8%), Q1 revenue fell 3.5% and new orders were only about ₹130cr, and management's target of about ₹1,700cr of FY27 revenue needs about ₹1,400cr in the last nine months. I expect about 13% a year; the price needs about 10%. **Buy after a second half that delivers.**",
                "**Follow Cemindia.** **Cemindia Projects**, formerly ITD Cementation and now 67.46% owned by the Adani group, builds breakwaters, metro tunnels, airports and, since FY26, data centres. Revenue has grown 2.6 times since FY22 to ₹10,061cr, net profit from ₹69cr to ₹598cr, return on capital is 33%, and CARE and ICRA both upgraded it in September. It guides 25% revenue growth in FY27 and FY28. But Adani companies are about 53% of the ₹31,307cr order book, CARE says 70% of the book is at an early stage, Q1 revenue rose only 6%, and three months after telling analysts there was ‘no plan’ to raise money, the board approved raising up to ₹5,000cr, nearly a quarter of the company's market value. I expect about 15% a year; the price needs about 20%. **A good business priced for more than it has yet shown.**",
                "**Wait on Patel Engineering.** **Patel Engineering** builds dams, tunnels and powerhouses for Himalayan hydropower projects. The business has improved: a ₹400cr rights issue and asset sales cut gross debt from ₹1,645cr to ₹1,187cr, Infomerics upgraded it to A in June, and it turned 9% of revenue into free cash over five years. The price asks for about 2% a year of growth against my ~10%. But the promoters own only 31.49% and have pledged 86.6% of it, the auditor flagged doubts about whether four subsidiaries can keep going, and write-downs have recurred (₹153cr in FY26, per the Q4 call). **Wait for the pledge to fall; the low price is the market's charge for that risk.**",
                "**Wait on Afcons.** **Afcons Infrastructure**, the Shapoorji Pallonji group's engineering contractor, built the Chenab rail bridge and the Atal Tunnel. It won ₹13,219cr of orders in Q1 alone, including its largest ever contract, a railway in Croatia, taking its order book to a record ₹43,290cr. But Q1 revenue fell 21%, FY26 revenue of ₹11,948cr was below FY24's ₹13,268cr, it made its first quarterly loss since 2010 in Q4 FY26, operating cash has been negative for two years, and CRISIL moved its outlook to Negative in August. All of the promoters' shares are pledged against Shapoorji Pallonji group debt. From a depressed profit I expect about 20% a year of recovery; the price needs about 23%. **Wait for the working capital to come down.**",
                "**Pass on SPML.** **SPML Infra** builds drinking-water, irrigation and sewerage schemes and power substations, and has just built a factory near Pune to assemble battery-storage packs, anchored by a ₹1,128cr NTPC order. It is a genuine turnaround: promoters put in about ₹400cr, borrowings fell from ₹1,771cr (FY23) to ₹358cr (FY26), ratings are back to BBB, and Q1 revenue rose 82%. But return on capital is still 6%, operating cash was negative in FY25 and FY26, debtor days are 216, it pays almost no tax yet, part of its old debt is to be repaid from arbitration awards, and three joint operations with ₹89.4cr of revenue were not audited. I expect about 8% a year; the price needs about 11%.",
                "**Three things to hold onto before reading the rest.** First, **order books are not revenue**: J Kumar, Patel, Cemindia, GPT and Afcons grew 6% or less in Q1 or shrank, despite large books, and nearly all promise a much stronger second half. Second, **who pays matters as much as who builds**: central agencies such as NHAI, Delhi Metro and Mumbai's metropolitan authority pay promptly, but state water schemes did not, and NCC, Afcons, Power Mech and SPML were all hurt. Third, **read the governance notes**: promoters have pledged all of their Afcons shares, 86.6% of their Patel shares and 50.8% of their GPT shares, and Cemindia's owner is also its biggest customer.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results on Screener, consolidated except for J Kumar, which Screener shows standalone (its consolidated accounts are nearly identical). Hover over a starred name for its caveat. Two cautions: the cash-cycle figures are distorted for most of this group by how Screener computes payable days, so use the working-capital days in the notes; and SPML's early debt ratios and FY24 cash figures are extreme because its profit was near zero during its restructuring.",
                "**About the dashboard's stored data.** The stored records for these eight hold names and tickers but no figures to check against, so nothing here comes from them. Where a company's own figure differs from the filed one, this note uses the filed figure: Patel cited FY26 profit of ₹319cr on its call against ₹269cr filed on a consolidated basis, and company ‘EBITDA’ figures at Afcons, Cemindia and Power Mech include other income, so they run a little above the filed margins shown.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Construction as a whole is in the second year of a slowdown, and this group is the part ICRA expects to hold up best.** ICRA estimates that revenue for its sample of 19 listed builders, about ₹1.28 lakh crore a year, grew only 2–4% in FY26 after a flat FY25, and forecasts 6–8% in FY27, with diversified contractors growing faster at 8–10%. Operating margins for the sector are expected to slip to 10.1–10.6%, against 13–14% in FY21. Roads have been hit hardest: highway awards fell from 12,731 km in FY22 to about 7,000 km in FY26. This group is different because its work is metros, tunnels, ports, dams, power plants, railway bridges and water schemes, where the money is still flowing: the FY27 Budget raised central capital spending 11.5% to about ₹12.2 lakh crore. This note is one of five groups in the Construction sector; the others are government project managers, road developers, building contractors, and energy and steel-building firms. **My view: the demand is there for this group; the constraints are approvals, land and state governments' ability to pay.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Governments, government companies and a few large private groups own the projects. They hire an **EPC contractor** (engineering, procurement and construction: the firm designs, buys for and builds the project at a fixed or indexed price) through open bids. The contractor carries the cost and delay risk, is paid in stages as work is certified, and posts bank guarantees. Profit depends on bidding sensibly, on escalation clauses that pass on cost rises, and above all on getting paid. **Specialist contractors earn more**: J Kumar, Patel and GPT earned 12–16% at the operating level in the last five quarters, against 9% at NCC, which does a bit of everything, and 8–12% guided by road builders. **Service contracts earn more still**: Power Mech says its plant-upkeep work earns about 18% and its coal-mining contracts should reach 21–23% at peak, against 10–11% on construction. **My view: in this group the margin follows the difficulty of the work, but the cash follows the client.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**City transport**: metros, road tunnels and elevated roads, above all in Mumbai, and the Mumbai–Ahmedabad high-speed rail line. **Power**: about 63 GW of new coal capacity planned by 2032 (Power Mech); the approved Kalai-II and Kamla hydro projects and a roadmap for 100 GW of pumped storage by 2035 (Patel); and battery storage ordered by NTPC (SPML). **Ports and private capital spending**: the Vadhvan port, Adani group ports and data centres, where JLL expects India's capacity to grow from about 1.6 GW to 6 GW by 2029. **Water**: the Jal Jeevan Mission (the scheme to pipe water to every rural home) runs to December 2028, and the FY27 Budget gives the water ministry ₹94,808cr against revised FY26 spending of only ₹41,437cr. **Railways**: ₹2,81,377cr for signalling, bridges and new lines, and seven high-speed corridors announced. **My view: this group is spread across the strongest parts of Indian infrastructure spending; the weakest part is the one paid by states.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Three things are shaping the cycle.** First, **governments now award work only when land and approvals are largely in place**, which CRISIL calls ‘largely structural’: it slows new awards but should mean fewer stuck sites. Second, **state payments broke down in FY26**: about ₹50,000cr of Jal Jeevan Mission money went unspent, contractors reported delays of 6–20 months, and the first central payment of the new phase in April 2026 was only ₹1,561cr across five states. Third, **the West Asia war** raised the cost of fuel, bitumen, steel and freight from March 2026 and slowed overseas sites (Afcons, Cemindia's Abu Dhabi job). India Ratings expects EPC revenue to grow about 10% in FY27 but the sector to stay under credit stress, and names power transmission, energy storage, urban infrastructure and mining as the best opportunities. **My view: FY27 is a trough-to-recovery year, and the second-half targets across this group look aggressive; expect some guidance cuts with Q2 results.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**J Kumar** on Mumbai's agencies handing over sites. **Power Mech** on thermal plants staying on schedule and its coal mines ramping up. **NCC** on Uttar Pradesh paying for water schemes and on BharatNet (rural fibre) billing. **GPT** on railway bridge and signalling awards. **Cemindia** on its parent group's spending and the Vadhvan port starting. **Patel** on hydro and pumped-storage awards and a smaller pledge. **Afcons** on collecting stuck payments. **SPML** on NTPC approving its battery designs by December. **Buy each for its own driver; the word ‘diversified’ hides eight different businesses.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Urban road tunnels, elevated roads and metros', 'J Kumar', '14–15%', '18%', '**70%**', 'Specialist work for prompt-paying Mumbai agencies; every contract indexed to costs'],
                        ['Hydro dams and tunnels', 'Patel Engineering', '12–15%', '13%', '**85%**', 'Rare Himalayan skills; returns held down by write-downs and old debt'],
                        ['Rail bridges, sleepers and signalling', 'GPT Infraprojects', '12–16%', '21%', '**66%**', 'Railway niches; signalling and Africa lifting the mix'],
                        ['Power-plant erection, upkeep and coal mining', 'Power Mech', '10–13%', '22%', '**38%**', 'Upkeep about 18% and mining 15% rising; cash slowed by water-scheme bills'],
                        ['Marine, metro, data centres (Adani-owned)', 'Cemindia', '9–12%', '33%', '**66%**', 'Asset turns up 2.6 times on the same equipment; parent is half the book'],
                        ['Marine, tunnels and overseas (Shapoorji Pallonji)', 'Afcons', '2–14%', '14%', '**36%**', 'Complex work, but late payments, provisions and interest of ₹674cr'],
                        ['General contracting for states', 'NCC', '9%', '17%', '**52%**', 'Huge volume at a steady margin; cash set by state payments'],
                        ['Water schemes and battery storage', 'SPML', '4–11%', '6%', '**239%**', 'Turnaround; five-year cash figure inflated by one unexplained year'],
                        ['For comparison: the construction sector', 'ICRA sample of 19 listed builders', '10.1–10.6% (FY27 forecast)', '—', '—', 'Road EPC margins guided at 8–12% after bids 20% or more below the base price'],
                    ],
                    note: 'Afcons’s low of 2% is Q4 FY26, which carried about ₹260–265cr of one-off charges. SPML’s cash figure without FY24 is negative. J Kumar’s figures are standalone.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Construction industry revenue (19 listed builders)', 'About ₹1.28 lakh crore; +2–4% in FY26 (estimate)', '**+6–8% in FY27**; diversified contractors **+8–10%**; margin 10.1–10.6%', 'ICRA, Mar 2026'],
                        ['Construction order inflow', 'Flat to weak in FY25–FY26', '**About +10% in FY27**, led by roads and water schemes', 'ICRA, Mar 2026'],
                        ['EPC revenue and credit', 'Growth averaged 20% in FY22–FY24', '**About +10% in FY27**; credit stress through FY27', 'India Ratings, 2026'],
                        ['Central government capital spending', 'About ₹12.2 lakh crore in FY27 (+11.5%)', 'Special capex loans to states ₹1.85 lakh crore', 'PRS, Feb 2026'],
                        ['Railways allocation', '₹2,81,377cr (+10.1%)', 'Seven high-speed rail corridors announced', 'PRS; Business Standard, Feb 2026'],
                        ['Jal Shakti (water) allocation', '₹94,808cr against ₹41,437cr spent in FY26 (revised)', 'Jal Jeevan Mission extended to Dec 2028', 'PRS, Feb 2026; ICRA'],
                        ['Data-centre capacity', 'About 1.6 GW installed, mid-2026', '**About 6 GW by 2029**', 'JLL, 2026'],
                        ['Interest cover of construction firms', '3.2–3.5x in FY26', '3.1–3.4x in FY27 as payments slow', 'ICRA, Mar 2026'],
                    ],
                    note: 'There is no outside forecast for coal-plant, hydro or pumped-storage construction spending in the sources read; those figures are government plans cited by the companies. ICRA does not say which companies are in its sample.',
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
                    label: 'Lasting: skills that few contractors have',
                    text: "**Afcons** ranks eighth in the world in marine work and twelfth in international bridges (ENR), and won the Croatian railway and the Vadhvan breakwater, ‘the world's second largest breakwater’, in open competition. **Patel** has built 87 dams, about 15,000 MW of hydro capacity and 300 km of tunnels, and is finishing the 2,000 MW Subansiri Lower project. **Cemindia** is one of perhaps three to five serious marine contractors in India and owns eight tunnel-boring machines and four jack-up barges. **J Kumar** runs twin tunnel-boring machines under Mumbai and is building an elevated road above an existing road in Chennai. **Power Mech** is the largest independent erector and maintainer of thermal power plants in India. **My view: clients will not risk a tunnel or a breakwater on an untested bidder, so these skills protect the order book more than the margin.**",
                },
                {
                    label: 'Evidence of pricing power: margins that hold through a bad year',
                    text: "**J Kumar** held 14–15% in every quarter of a flat FY26, and says all its contracts, ‘without exception’, carry price-variation clauses, with the gap to actual costs ‘0.5% here and there’. **NCC** held 9% in every quarter, with 81% of contracts carrying escalation clauses. **GPT**'s margin has risen from 12% to 16% over the last five quarters as signalling and Africa were added. The counter-evidence: **Patel** lost the ₹16,000–17,000cr Dibang hydro package because ‘somebody took it at a very low value’, and **Cemindia**'s escalation cover does not extend to ‘abnormal inflation cost because of war’. **My view: the pricing power here is discipline in what to bid for, not the ability to raise prices; J Kumar shows the most of it.**",
                },
                {
                    label: 'Switching costs and repeat clients',
                    text: "**Power Mech** is the contractor of choice for BHEL (about ₹5,300cr across five projects), Adani (about ₹2,400cr across 14) and Vedanta (about ₹1,551cr across six), and in September won a ₹970cr contract to run Vedanta's 2×600 MW Sakti plant. Upkeep contracts renew, and an owner rarely changes the team that knows its boilers. **GPT** has four decades of railway work, and Alcon brings a signalling record that new entrants cannot buy quickly. **Patel**'s clients are central hydro companies (NEEPCO, NTPC, NHPC and SJVN make up about 62% of the book), which value its record in Himalayan geology. **My view: Power Mech's upkeep and mining contracts are the closest thing in this group to recurring revenue.**",
                },
                {
                    label: 'A parent as customer: visibility, not a moat',
                    text: "**Cemindia** won about ₹16,000cr of Adani group orders over FY26 and Q1 FY27, including ₹6,000cr in Q1 alone, and the group is about 53% of its order book and about half its ₹90,000cr bid pipeline. Management says group jobs are won by ‘competitive bidding’ with ‘no special preference’, and its margin of about 10% is not unusually high. CARE lists ‘weakening linkages with Adani group’ as a trigger for a downgrade, and the annual report lists revenue from about 25 Adani group companies as related-party transactions. **My view: the parent fills the order book, but a business half-dependent on one group's spending plans deserves a lower price than an independent one, not a higher one.**",
                },
                {
                    label: 'Thin: general contracting for state governments',
                    text: "**NCC**'s strength is breadth: seven divisions, many states and a record of about 48 years. But breadth is not a barrier: ICRA notes that competition in metro and water has increased ‘with new entrants trying to diversify their order book’. **SPML**'s water business competes on the same terms, and its battery business imports cells from China like everyone else and has no manufacturing record yet. **Judge NCC and SPML on execution and collections, not on moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**L&T**, India's largest contractor, bids for most of the same metro, tunnel, hydro and marine work; **Tata Projects** for metros and water; the government companies **RVNL** and **Ircon** for railway work (Afcons won a ₹147.1cr arbitration award against Ircon in June, against a ₹359.7cr claim). Road builders such as PNC, HG Infra, Ashoka and KNR are moving into power lines, water and railways as highway awards shrink. In battery storage, SPML competes with larger energy contractors, including Sterling and Wilson in the energy group of this sector.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In contracting, the margin is set when the bid is won and then protected or eroded by escalation clauses, site delays and provisions. Three patterns show up here: margins protected by specialist work, margins moving up with a better mix, and margins moved by one-offs.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specialist work',
                    text: "**J Kumar** earned 14–15% at the operating level in each of the last five quarters and 14.4% for FY26 (company measure), and management says it will not chase revenue at the cost of margin, which is why it won only ₹1,039cr of orders in FY26. **Patel** earned 12–15% and guides 13–14%; its FY26 margin slipped to about 13% from 14.4% on project mix and new labour laws (Infomerics). **GPT** earned 12–16%, and guides 14–15% for FY27 and 13–14% over the long term. **My view: these margins rest on work that few can bid for, and should hold; the risk to them is not price but site delays that stretch overheads over less revenue.**",
                },
                {
                    label: 'Moving up: a better mix',
                    text: "**Power Mech** guides its margin up by about 0.5 points a year to about 14% by FY30, as plant upkeep (about 18%) and coal mining (15% now, 21–23% at peak, per management) outgrow erection and civil work. **Cemindia**'s margin rose from about 8% in FY22 to about 10% as, in management's words, there is ‘no legacy job left’. **SPML** says it takes no new order below a 10% margin, against about ₹1,251cr of thin legacy work still in its book. **My view: Power Mech's path is the most credible because the higher-margin contracts are already signed; Q1's 10.8% shows it will not be a straight line.**",
                },
                {
                    label: 'Not structural: one-offs, provisions and tax',
                    text: "**Afcons**'s Q4 FY26 margin of 2% carried about ₹260–265cr of one-off charges, and FY26 provisions totalled about ₹325cr. **Cemindia**'s Q4 FY26 was lifted by released provisions and about ₹100cr of old claims, mostly booked as interest. **Power Mech**'s Karnataka mining-royalty contract was cut from 14% to 10–11% after the state began keeping half of the penalties it collects. **SPML** paid almost no tax in recent quarters, so its profit will fall when normal tax applies. **My view: take Afcons's underlying margin as about 10–11% and Cemindia's as about 10%, and discount SPML's profit for tax.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Afcons**'s net working capital rose from under 90 days in FY24 to 139 in FY26 (CRISIL), operating cash was −₹132cr and −₹127cr in FY25 and FY26, and the stuck receivables management promised to collect ‘before June’ had not come in by August. **NCC**'s FY26 operating cash was −₹459cr; its unbilled work reached ₹7,414cr and its Jal Jeevan Mission unbilled work ₹2,771cr. **SPML**'s operating cash was negative in FY25 and FY26 and its trade receivables rose from ₹299.6cr to ₹417.5cr in FY26.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Patel**'s net working capital rose from about 120 days at March to about 137 at June, and gross debt climbed back to about ₹1,293cr to fund new projects. **Power Mech** has ₹900cr of a water order on hold pending central funds, with ₹128cr of work uncertified. **Afcons** now pays interest on 38% of its client advances, up from about 20% in September 2024, and **J Kumar**'s ₹470cr of advances all carry 8.5–10% interest.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**J Kumar** cut working capital from 112 to 99 days in FY26 and produced free cash of 11.5% of revenue. **Patel** turned 85% of operating profit into cash over five years and 9% of revenue into free cash, which went into repaying debt. **GPT** collects in about 36 days. **Cemindia** carries about ₹1,400cr of client advances, about 90% of them interest-free, which fund much of its work.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Contractors are paid in stages after work is measured and certified, retention money is held until completion, and every advance and performance promise needs a bank guarantee. ICRA says the industry's cash cycle lengthened in FY25 when pandemic-era relief (lower retention, faster payments) ended, and worsened in FY26 as water-scheme payments stalled; it expects interest cover to fall to 3.1–3.4x in FY27. **Judge each company against its own history, and treat a rising order book as a demand on cash before it is a source of profit.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['J Kumar Infra', 'Net cash fell to ₹45cr as the last tunnel-machine instalment was paid; gross debt below ₹800cr by March 2027; buybacks ‘on our cards’ but not imminent', 'Net cash ₹72cr (Screener); fund-based lines 39% used, guarantee lines 65%'],
                        ['Power Mech Proj.', 'Working-capital lines support up to ₹10,000cr of revenue; about ₹400cr of capex for the Tasra washery', 'Net debt ₹171cr (Screener); CARE A+'],
                        ['NCC', 'Standalone debt ‘more or less’ flat at about ₹2,250cr by March 2027, depending on water-scheme collections; ₹271cr group loan to be recovered by December', 'Net debt ₹3,513cr consolidated at June (company), of which ₹1,461cr smart-meter project loans'],
                        ['GPT Infraprojects', '‘We don’t anticipate any addition to the debt position’; about ₹200cr of contract assets billed and collected since June', 'Net debt ₹254cr (Screener); CRISIL A'],
                        ['Cemindia Projects', 'Up to ₹5,000cr raise is an enabling approval for machines, acquisitions and working capital; not needed for the current book', 'Gross debt about ₹1,000cr, net about ₹700cr (company); Screener net debt ₹52cr'],
                        ['Patel Engineering', 'Pledge to fall ‘at least 15%-20%’; ₹150–200cr of land and award money to come in; buybacks only after debt is repaid, in two to three years', 'Gross debt about ₹1,293cr at June (company); Infomerics A'],
                        ['Afcons Infra', 'Would not give Q1 debt or working-capital days; net debt ₹2,700–2,800cr targeted for March 2027; ₹1,200cr of undrawn lines', 'Net debt ₹2,741cr (Screener); CRISIL AA−, outlook Negative'],
                        ['SPML Infra', 'Bank limits being raised from ₹505cr to ₹860cr; battery plant fully funded; about ₹375cr of old debt backed by a ₹678cr award', 'Net debt ₹191cr (Screener); ICRA and CRISIL BBB'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Screener figures are at March 2026; company figures at June 2026 unless stated.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call (April–June 2026), and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: city transport',
                    text: "Mumbai is the largest single market: J Kumar's management sees ₹50,000cr–₹1 lakh crore of bids in the region in the next nine to twelve months, including the Uttan–Virar sea link and four metro lines, and it is lowest bidder on ₹1,500cr of Delhi Metro work. **Afcons** has started both tunnel-boring machines on its high-speed rail tunnel, with main drives from about November. **Cemindia** has bought new tunnel-boring machines for the Pune and Delhi metros and is bidding for road tunnels. **My view: this is the most certain demand in the group, because the agencies are well funded and pay on time; the constraint is site handover.**",
                },
                {
                    label: 'Growth driver: power in every form',
                    text: "**Power Mech** maps about ₹60,000cr of opportunity for itself in new coal plants and about ₹800–1,000cr a year of new upkeep contracts, and guides mining revenue of ₹500cr in FY27 and ₹1,100–1,200cr in FY28. **Patel** is bidding for Kalai-II and Kamla (together about ₹40,000cr) and targets about ₹8,000cr of new orders in FY27. **SPML** has a 2.5 GWh battery-pack line ready and management claims ₹2,000–2,500cr of potential revenue from it; its first NTPC billing is expected in Q4 FY27. **NCC** has about 45% of its 7–8 million smart meters installed, which will turn into an upkeep annuity. **My view: Power Mech's growth is contracted; Patel's depends on winning bids at sensible prices; SPML's is still a claim.**",
                },
                {
                    label: 'Growth driver: ports, data centres and private groups',
                    text: "**Cemindia**'s order book includes ₹7,258cr of marine work and ₹4,154cr of data centres (about 320–400 MW of halls for the Adani group in Navi Mumbai and Visakhapatnam), and management targets about ₹25,000cr of new orders in FY27, with ₹8,519cr won in Q1. **Afcons** won the Vadhvan breakwater and has a ₹1.5 lakh crore bid pipeline for the rest of FY27. **Power Mech** is doing civil work for JSW (₹850cr). **My view: private and port demand is the fastest-growing part of the group's market, and Cemindia is best placed for it, but through one group.**",
                },
                {
                    label: 'Growth driver: railways and water',
                    text: "**GPT** says Alcon gives it access to a ‘USD1.5 billion’ signalling opportunity as the Railways spends on the Kavach safety system and electronic interlocking, and it won a ₹483.72cr RVNL bridge in September. The Railways' ₹2,81,377cr allocation and seven high-speed corridors give a long pipeline. In water, the Jal Jeevan Mission runs to December 2028, and SPML tracks 134 water and irrigation projects worth about ₹98,725cr, including river-linking. **My view: railway money is reliable; water money is plentiful on paper and slow in practice.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**NCC** gave guidance at Q1 for the first time in several quarters (revenue up 8–10%, margin 8.5–9%, orders ₹22,000–25,000cr) and Q1 already ran at +12% and 9%. **Power Mech**'s Q1 revenue rose 26% against a 21% full-year guide. **Patel** said FY26 would not grow and it did not, and Q1 grew 4% at a 14% margin. **Cemindia**'s Q1 margin of 10.5% (company measure) met its guide, and its ₹8,519cr of Q1 orders is on course for about ₹25,000cr.",
                },
                {
                    label: 'Cautious',
                    text: "**Afcons** gives no FY27 revenue or margin guidance because of ‘uncertainty around… war’, pointing instead to a ‘strong FY28 and FY29’. **NCC** withheld guidance on the May call, saying there were ‘too many variables in the equation’, before giving FY27 numbers in August. **Patel**'s finance head would not commit to a 15% margin.",
                },
                {
                    label: 'Missed',
                    text: "**J Kumar** guided 15% growth for FY26 and delivered about 1%, moved its ₹7,500cr revenue target to FY28 and trimmed its FY27 order goal to ₹8,000–10,000cr; in May it said the war had ‘zero impact’, and in August it blamed the war for a slow quarter. **Afcons** expected about 5% growth in FY26 and delivered −5%, and the receivables it promised to collect before June were not collected. **Power Mech** guided about ₹6,500cr of FY26 revenue and delivered ₹6,062cr, and won ₹7,210cr of orders against ₹10,000cr. **SPML** missed its FY26 revenue target and moved its 5 GWh battery expansion from the end of 2026 to the first half of FY28.",
                },
                {
                    label: 'Mixed',
                    text: "**Power Mech** kept its 12.5% FY27 margin guide at Q1 but delivered 10.8%. **Cemindia** kept its 25% growth guide but grew 6% in Q1, blaming no work at the Vadhvan port, a ₹10,000–12,000cr block of new orders still in design and the war; and it reversed its ‘no plan’ on raising money within three months. **GPT** raised its FY27 margin guide to 14–15% and beat its FY26 order target, but its 30% revenue target needs about 55% growth over the rest of the year.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Afcons to grow earnings at about 20% a year, Power Mech at about 16%, Cemindia at about 15%, GPT at about 13%, J Kumar and Patel at about 10%, NCC at about 9% and SPML at about 8%.** Afcons's figure is a recovery from a depressed base: profit returning towards FY24–FY25 levels by FY29, with interest staying high. Power Mech's assumes revenue growth near 20% and a slowly rising margin; Cemindia's, revenue growth of about 20% less some dilution from the planned raise; J Kumar's, low double-digit revenue growth from FY28, held back by tunnel-machine depreciation. Patel's and NCC's assume modest growth and falling interest; SPML's, strong revenue growth offset by normal tax.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['J Kumar Infra', 'Mumbai tunnels and elevated roads; site handovers; tunnel-machine depreciation', '4% / **10%** / 15%'],
                        ['Power Mech Proj.', 'Coal plants; upkeep; coal-mine operation; margin recovery', '9% / **16%** / 22%'],
                        ['NCC', 'State payments; smart meters; BharatNet; interest cost', '4% / **9%** / 13%'],
                        ['GPT Infraprojects', 'Rail bridges; signalling; African sleepers', '6% / **13%** / 20%'],
                        ['Cemindia Projects', 'Adani ports, airports and data centres; metros; dilution', '9% / **15%** / 22%'],
                        ['Patel Engineering', 'Hydro and pumped-storage awards; lower interest; write-downs ending', '3% / **10%** / 16%'],
                        ['Afcons Infra', 'Recovery from a depressed profit; collections; Croatia and high-speed rail', '8% / **20%** / 30%'],
                        ['SPML Infra', 'Water schemes; NTPC battery order; tax normalising', '0% / **8%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. Afcons’s range is high because it starts from a profit cut by provisions and one loss-making quarter. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['J Kumar Infra', 'FY27 revenue +15%, mostly in the second half; margin 14–15%; orders ₹8,000–10,000cr (was ₹9,000–10,000cr)', 'About ₹150cr a year (was ₹200–250cr)', '**Walked back**: FY26 growth about 1% against 15%; ₹7,500cr target moved to FY28; order goal trimmed'],
                        ['Power Mech Proj.', 'FY27 revenue about ₹7,300cr (+21%); margin 12.5%; orders ₹12,000cr', 'About ₹400cr for the Tasra washery plus about ₹400cr in the project company', '**Mixed**: Q1 revenue +26%; margin 10.8% against 12.5%; FY26 revenue and orders missed'],
                        ['NCC', 'FY27 revenue +8–10%; margin 8.5–9%; orders ₹22,000–25,000cr (first guidance in several quarters)', '₹500cr in FY27 (₹912cr in FY26)', '**Beating**: Q1 revenue +12% at a 9% margin; no Q4 guidance to compare'],
                        ['GPT Infraprojects', 'FY27 revenue about ₹1,700cr (+30%); margin 14–15%; orders ₹3,000cr-plus', 'Small; no new debt', '**At risk**: Q1 revenue −3.5% and orders about ₹130cr; needs about ₹1,400cr in nine months'],
                        ['Cemindia Projects', 'Revenue +25% in FY27 and FY28; margin ‘10% plus’ (10–10.5% in April); orders about ₹25,000cr', '₹350–400cr; up to ₹5,000cr raise approved', '**Mixed**: margin and orders on track; Q1 revenue +6% against 25%; fund-raising reversal'],
                        ['Patel Engineering', 'FY27 revenue +10%, FY28 +15%; margin 13–14%; orders about ₹8,000cr', 'Low; tunnel machines as projects need', '**On track**: FY26 flat as guided; Q1 +4% at 14%; order book fell to ₹14,636cr'],
                        ['Afcons Infra', 'No revenue or margin guidance; orders at least ₹30,000cr; net debt ₹2,700–2,800cr by March 2027', '₹700–800cr in FY27; ₹600–650cr in FY28', '**Missed**: FY26 revenue −5% against +5%; receivables promised by June not collected'],
                        ['SPML Infra', 'FY27 revenue, operating profit and profit +25%-plus; orders ₹5,000cr-plus; battery revenue ₹200–300cr in Q4', 'Battery plant to 5 GWh, ₹236–238cr, now H1 FY28', '**Slipped**: FY26 revenue short of target; battery expansion delayed by about six months'],
                    ],
                    note: 'Q4 calls were held between 30 April (Cemindia) and 1 June 2026 (SPML); Q1 calls between 29 July and 17 August 2026. NCC and Afcons gave no FY27 revenue guidance at Q4.',
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
                    text: "**J Kumar**'s order book roughly doubled while revenue stayed flat for two years; its road tunnel waited for Supreme Court permission to cut trees (August 2025), its Chennai corridor for river-bank approvals, and one project (Orange Gate) was cancelled. **Cemindia**'s Vadhvan port job has produced nothing for more than a year, ‘beyond our purview’. **Afcons** says about 11% of its book is slow-moving, and two Croatian road contracts it was lowest bidder on were cancelled for budget reasons. **NCC**'s Ken–Betwa river-linking job has executed only ₹116cr of ₹3,390cr. **Expect some of this group to cut guidance with Q2 results.**",
                },
                {
                    label: 'Pledged shares and parent groups',
                    text: "Promoters have pledged all of their 50.17% stake in **Afcons** against Shapoorji Pallonji group debt; CRISIL says the group's debt does not have recourse to Afcons, but any stress at the group could weigh on the shares. **Patel**'s promoters own only 31.49% and have pledged 86.6% of it; a sharp fall in the price could force sales. **GPT**'s promoters have pledged 50.8% of their 69.37%. **Cemindia**'s owner is its largest customer. **My view: a pledge is not a fraud signal, but it turns a bad quarter into a possible forced sale.**",
                },
                {
                    label: 'Accounting and audit remarks',
                    text: "**Afcons**'s auditor drew attention to uncertainty over arbitration and court outcomes on variation claims booked as receivables and contract assets, and to disputes at two joint ventures. **Patel**'s auditor flagged material uncertainty over whether four subsidiaries (Shreeanant Construction, West Kameng Energy, Digin Hydropower and Meyong Hydropower) can continue as going concerns, and write-downs have recurred for two years. **SPML**'s accounts include three joint operations with ₹89.4cr of revenue that were not audited, and Screener flags that it may be capitalising interest cost. **NCC**'s auditor made receivables and contract assets, 56% of standalone assets, a key audit matter. **Cemindia**, **J Kumar**, **Power Mech** and **GPT** had unmodified opinions; J Kumar changed auditors after two full terms.",
                },
                {
                    label: 'Contingent claims, guarantees and disputes',
                    text: "**Cemindia**'s contingent liabilities total about ₹880cr, about 37% of its net worth, with claims not acknowledged as debt up from ₹470cr to ₹686cr. **NCC** carries about ₹350cr of tax disputes and ₹512cr of NHAI disputes, and has ₹290cr of loans to group companies. **J Kumar**'s bank guarantees and surety bonds rose 48% to ₹4,364cr, and its guarantee lines are 65% used, which will limit new wins unless lines grow. **Afcons** had a bank guarantee invoked and paid in Gabon. **SPML** has about ₹4,526cr of arbitration claims outstanding and expects about 40% to become awards; its old debt is being repaid partly from such awards.",
                },
                {
                    label: 'State payments, costs and the war',
                    text: "State-linked clients are 79% of **NCC**'s book; its Uttar Pradesh water-scheme receivables and unbilled work were ₹1,043cr at June and Telangana dues of about ₹180cr are in court. **Afcons** has about ₹400cr stuck with Uttar Pradesh's water scheme, which withholds payment until every connection is complete. **SPML**'s clients are state water utilities, and its debtor days are 216. Costs rose after the war began: steel rose 12–20%, and bitumen more than doubled. **NCC**'s BharatNet fibre contract is fixed-price, which ‘will result into a lesser profit’. **Afcons**'s overseas contracts are often fixed-price.",
                },
                {
                    label: 'Dilution and credibility',
                    text: "**Cemindia**'s up to ₹5,000cr raise is about twice its net worth of ₹2,400cr and nearly a quarter of its market value, approved three months after management said there was no plan; the MD's defence was ‘if you have to grow, you require money, as simple as that’. Guidance has been missed in the last year at J Kumar, Afcons, Power Mech and SPML, and **Afcons** declined to give Q1 debt or working-capital figures. **My view: in this group, trust the companies whose promises have held (Patel, and NCC since it resumed guidance) a little more than the ones that talk loudest about FY28.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it charges for debt and ignores interest, tax and depreciation. In this group the two tell different stories where debt, provisions or tax distort profit.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **2% at 7x, 5% at 9.2x, 7% at 11.6x, 10–11% at 14.7–16.5x, 13% at 19.4x, 20% at 35.9x and 23% at 45.3x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Five of the eight fit my estimates today**: J Kumar, Power Mech, NCC, GPT and Patel. Cemindia, Afcons and SPML are priced a few points above what I expect them to grow.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Afcons** looks much less expensive on EV/EBITDA than on P/E, even after adding ₹2,741cr of net debt, because provisions and ₹674cr of interest have eaten its net profit while operating profit held up better. **SPML** is the reverse: it pays almost no tax, so its net profit is flattered against its operating profit. **NCC**, **J Kumar** and **Patel** look cheap on both. **Cemindia** is expensive on both. **My view: use EV/EBITDA for Afcons, whose profit is depressed, and P/E after normal tax for SPML.**",
                },
                {
                    label: 'Fits, and cheap for a reason',
                    text: "**J Kumar** needs about 5% a year against my ~10%; it is 30% below its 52-week high. **NCC** needs about 7% against my ~9%, and trades near its 52-week low after falling 36% in a year on its cash problems. **Patel** needs about 2% against my ~10%, the widest gap in the group: the market's discount for a heavy pledge, going-concern doubts and repeated write-downs. **Of the three, J Kumar is the one where the discount looks unjustified, because its balance sheet and audit are clean.**",
                },
                {
                    label: 'Fits, with growth',
                    text: "**Power Mech** needs about 13% a year against my ~16%, a margin of safety of about three points, for a company that has compounded profit at about 30% a year since FY22. **GPT** needs about 10% against my ~13%, and pays a dividend yield of about 2.4% while it waits. Both have missed targets or depend on a second-half ramp, and both have weak or thin cash in the last two years. **These are the two where a bad Q2 would be a buying opportunity rather than a reason to leave.**",
                },
                {
                    label: 'Full: a good business priced for more than it has shown',
                    text: "**Cemindia** needs about 20% a year against my ~15%. It has the highest return on capital in this group and the strongest order inflow, but the price already assumes management's 25% growth guide is met for years, from a profit base that includes about ₹150cr of old claims, and before any dilution from the planned raise. It is about 24% below its 52-week high after a run from ₹481 to ₹1,650. **Follow it, and buy after the raise is priced and the Vadhvan and metro jobs start.**",
                },
                {
                    label: 'Full: priced on a recovery',
                    text: "**Afcons** needs about 23% a year against my ~20%, measured from a profit cut by provisions; its shares have fallen 43% in a year, and the business may be worth more than the recent profit suggests if collections come in. **SPML** needs about 11% against my ~8%, because its profit will be taxed normally before long and its operating cash is negative. **Both need proof in cash, not in orders, before the price makes sense.**",
                },
                {
                    label: 'A check against the rest of Construction',
                    text: "This group earns returns on capital of 13–33% for all but SPML, and it is the part of Construction that ICRA expects to grow fastest. The market has split it sharply: it pays a high price for Cemindia's parent-backed growth and Afcons's recovery, and a low one for NCC's state exposure and Patel's governance. **The best value sits with the unfashionable, well-run specialists, J Kumar above all.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'J Kumar Infra', rank: 1, stance: 'SCALEUP', segment: DIV_URBAN,
            what: "A Mumbai-based urban contractor that builds elevated roads, flyovers, metro stations and road tunnels, mainly for Mumbai's agencies, NHAI and Delhi Metro; order book a record ₹22,246cr, 48% elevated corridors and flyovers.",
            view: "**Cheap, clean and slow.** It has held a 14–15% margin, net cash and an ICRA A+/Positive rating through two flat years, and produced ₹1,128cr of operating cash in FY26. But FY26 growth was about 1% against a 15% promise, the ₹7,500cr revenue target has moved to FY28, and bank-guarantee lines are 65% used. The price needs about 5% a year against my ~10%.",
            watch: 'Second-half revenue above about ₹1,800cr a quarter; the Goregaon–Mulund tunnel machines boring; a Mumbai sea-link or metro win.',
        },
        {
            company: 'Power Mech Proj.', rank: 2, stance: 'SCALEUP', segment: DIV_SERVICE,
            what: "India's largest independent erector and maintainer of power plants, moving into whole plant sections, coal-mine operation and civil work; executable order book ₹16,229cr, with BHEL, Adani and Vedanta its biggest clients.",
            view: "**The group's best growth, with cash lagging.** Revenue rose from ₹2,710cr (FY22) to ₹6,062cr (FY26), return on capital is 22%, Q1 grew 26%, and upkeep and mining contracts lift the margin over time. But FY26 revenue and order targets were missed, Q1's 10.8% margin was well under the 12.5% guide, and five-year cash conversion is only 38%. The price needs about 13% a year against my ~16%.",
            watch: 'The margin recovering towards 12% in the second half; the Tasra coal-washing plant commissioned by about December; payment of the held-up water-scheme bills.',
        },
        {
            company: 'NCC', rank: 3, stance: 'CYCLICAL', segment: DIV_STATE,
            what: "A Hyderabad-based general contractor building offices, hospitals, roads, water schemes, power lines and smart-meter networks and running a coal mine, 79% for state-linked clients; order book ₹81,214cr.",
            view: "**Steady margins, stretched cash.** It has earned 9% every quarter, grew 12% in Q1 and gave FY27 guidance it is beating. But FY26 operating cash was −₹459cr, unbilled work is ₹7,414cr (38% of revenue), consolidated net debt rose to ₹3,513cr, and the auditor made receivables and contract assets a key audit matter. The price needs about 7% a year against my ~9%.",
            watch: 'Uttar Pradesh water-scheme dues falling below ₹1,000cr; unbilled work falling as BharatNet billing starts; consolidated debt stabilising.',
        },
        {
            company: 'GPT Infraprojects', rank: 4, stance: 'SCALEUP', segment: DIV_SERVICE,
            what: "A Kolkata-based builder of railway and road bridges and maker of concrete sleepers in India and Africa, which bought the railway-signalling contractor Alcon in January 2026; order book about ₹4,303cr.",
            view: "**A small compounder with a pledge.** Profit rose from ₹23cr (FY22) to ₹97cr (FY26), return on capital is 21%, the margin reached 16% and it pays out 36–47% as dividends. But 50.8% of promoter shares are pledged, Q1 revenue fell 3.5% with only about ₹130cr of new orders, and the FY27 target needs about ₹1,400cr in nine months. The price needs about 10% a year against my ~13%.",
            watch: 'Q2 and Q3 revenue on the path to about ₹1,700cr; the Alcon merger approved by the tribunal; the pledge falling.',
        },
        {
            company: 'Cemindia Projects', rank: 5, stance: 'PRICED', segment: DIV_URBAN,
            what: "The former ITD Cementation, a marine, metro-tunnel, foundation and building contractor now 67.46% owned by the Adani group, which supplies about 53% of its ₹31,307cr order book.",
            view: "**Transformed, and priced for it.** Revenue grew 2.6 times since FY22, return on capital is 33%, and ratings were upgraded to AA− in September. But Q1 revenue rose 6% against a 25% guide, 70% of the book is at an early stage, FY26 profit included about ₹150cr of old claims, and a raise of up to ₹5,000cr was approved three months after ‘no plan’. The price needs about 20% a year against my ~15%.",
            watch: 'Quarterly revenue of ₹3,000–3,500cr in Q3–Q4; the price and use of the ₹5,000cr raise; the share of orders from outside the Adani group.',
        },
        {
            company: 'Patel Engineering', rank: 6, stance: 'TURNAROUND', segment: DIV_URBAN,
            what: "A Mumbai-based builder of hydro dams, tunnels and powerhouses, with irrigation tunnels and some roads; 62% of its ₹14,636cr order book is hydropower, mostly for central government companies.",
            view: "**Cheap because of its owners, not its work.** Debt fell after a ₹400cr rights issue, Infomerics upgraded it to A, interest cost is falling and five-year free cash is 9% of revenue. But promoters own 31.49% and have pledged 86.6% of it, the auditor flagged going-concern doubts at four subsidiaries, it lost the Dibang package on price, and it pays no dividend. The price needs about 2% a year against my ~10%.",
            watch: 'The promoter pledge falling by the promised 15–20% or more; a Kalai-II or Kamla award at a sensible price; no further write-downs.',
        },
        {
            company: 'Afcons Infra', rank: 7, stance: 'TURNAROUND', segment: DIV_URBAN,
            what: "The Shapoorji Pallonji group's marine, tunnel, bridge and metro contractor, working in India and ten other countries; order book a record ₹43,290cr after the Croatian railway and Vadhvan breakwater wins.",
            view: "**Great projects, poor cash.** It ranks eighth in the world in marine work and won ₹13,219cr of orders in Q1. But Q1 revenue fell 21%, Q4 FY26 was its first loss since 2010, operating cash has been negative two years, CRISIL's outlook is Negative, the auditor flagged uncertain claims, and every promoter share is pledged. The price needs about 23% a year against my ~20%.",
            watch: 'Net working capital falling towards 120 days; the high-speed rail force-majeure settlement; CRISIL keeping its AA− rating.',
        },
        {
            company: 'SPML Infra', rank: 8, stance: 'TURNAROUND', segment: DIV_STATE,
            what: "A Kolkata-based builder of water schemes and power substations, out of a long debt restructuring, now assembling battery-storage packs near Pune for a ₹1,128cr NTPC order; order book about ₹5,100cr.",
            view: "**A turnaround with weak cash.** Debt fell from ₹1,771cr to ₹358cr, ratings are back to BBB and Q1 revenue rose 82%. But return on capital is 6%, operating cash was negative in FY25 and FY26, debtor days are 216, it pays almost no tax, and three joint operations went unaudited. The price needs about 11% a year against my ~8%.",
            watch: 'NTPC approving the battery designs by December; operating cash turning positive in FY27; the unaudited joint operations brought into the audit.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Metro, tunnel, marine and hydro specialists.** **J Kumar: own**, the best value in the group, while it proves that its record order book can turn into revenue. **Cemindia: follow**; a much better business since the Adani takeover, but priced ahead of its delivery, with a large share sale approved. **Patel Engineering: wait** for the promoters' pledge to fall; the business and balance sheet have improved more than the price admits. **Afcons: wait** until working capital and cash flow turn; the projects are world-class, the cash is not.",
            "**Power-plant and railway services.** **Power Mech: own** for India's coal-power build-out, sized with its weak cash conversion in mind. **GPT: follow**, and buy if the second half delivers and the pledge falls.",
            "**State-government contractors.** **NCC: follow**, and buy when state water-scheme money turns into operating cash. **SPML: pass** until its operating cash is positive and its battery business has a paying customer.",
            "**What would change my view.** For the better: J Kumar's Mumbai sites moving and a large Mumbai win; Power Mech's margin back above 12%; NCC's cash turning; Patel's pledge falling; Afcons collecting stuck payments. For the worse: more guidance cuts at Q2; a rating downgrade at Afcons; Cemindia raising money at a high price for group-linked projects; further write-downs at Patel; state payments stalling again.",
            "**What to watch next quarter.** J Kumar's and GPT's second-half revenue run-rate; Power Mech's margin; NCC's water-scheme collections; Cemindia's fund-raising; Patel's pledge; Afcons's working capital and rating; SPML's NTPC approvals.",
        ],
        bottomLine:
            "Own J Kumar, the cheapest well-run specialist, and Power Mech, the fastest grower; follow NCC, GPT and Cemindia for better evidence or a better price; wait on Patel and Afcons until their governance and cash problems ease; and pass on SPML until its turnaround shows up in cash.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/JKIL/' },
        { label: 'Revenue growth of construction players to improve by 6–8% in 2026–27 — ICRA, Mar 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=9dd3c3d4-668d-47a7-844a-ccc99949a6ca' },
        { label: 'State road capex to outpace central capex in FY27 (CareEdge) — The Tribune, Sep 2026', url: 'https://www.tribuneindia.com/news/business/state-road-capex-to-outpace-central-capex-in-fy27-construction-pace-slows-to-21-km-day-from-36-8-in-fy21-careedge' },
        { label: 'Union Budget 2026–27 analysis — PRS Legislative Research, Feb 2026', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
        { label: 'Indian Railways record capex in FY27 — Business Standard, Feb 2026', url: 'https://www.business-standard.com/budget/news/indian-railways-record-capex-fy27-high-speed-rail-freight-corridor-126020100735_1.html' },
        { label: 'Diversified infra players a better bet amid weak road order inflows — Business Standard, Jan 2026', url: 'https://www.business-standard.com/amp/markets/news/diversified-infra-players-better-bet-amid-weak-road-order-inflows-126010900840_1.html' },
        { label: 'Bitumen price shock stalls road work — Autocar Professional, Jul 2026', url: 'https://www.autocarpro.in/news/bitumen-price-shock-stalls-road-work-forces-equipment-industry-to-temper-fy27-growth-hopes-133839' },
        { label: 'Jal Jeevan Mission 2.0 and contractor payment delays — The Core, 2026', url: 'https://www.thecore.in/opinion/the-plinth/businessinfrastructurejal-jeevan-mission-2-payment-delays-contractors-state-funding-869745' },
        { label: 'India data centres, mid-2026 — JLL', url: 'https://www.jll.com/en-in/insights/market-dynamics/india-data-centers' },
        { label: 'J Kumar Infraprojects Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5dfddb1b-e1f2-4ab8-9b87-21f34221ba0a.pdf' },
        { label: 'J Kumar Infraprojects Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=50ee0f3f-64b1-48ee-b6c5-2ee95ad3e22b.pdf' },
        { label: 'Power Mech Projects rating rationale (A+/Stable) — CARE, Aug 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608120846_Power_Mech_Projects_Limited.pdf' },
        { label: 'Power Mech Projects Annual Report FY26 (revised) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=98e544a4-beb6-430d-aa28-ea8bc1b9a1ab.pdf' },
        { label: 'NCC rating rationale (AA−/Stable) — CARE, Aug 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608140828_NCC_Limited.pdf' },
        { label: 'NCC Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d84bc0c4-d625-4fe9-a1d6-7179c6711d63.pdf' },
        { label: 'GPT Infraprojects rating rationale (A/Stable) — CRISIL, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GPTInfraprojectsLimited_March%2025_%202026_RR_390462.html' },
        { label: 'GPT Infraprojects Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/85aea061-109a-4e69-9d61-3191d37a9ef2.pdf' },
        { label: 'Cemindia Projects rating rationale (AA−/Stable) — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609120909_Cemindia_Projects_Limited.pdf' },
        { label: 'Cemindia Projects investor presentation, Aug 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8fdb1f33-2442-44ae-8b91-2167978d1332.pdf' },
        { label: 'Cemindia Projects Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/0d102096-46fd-4366-9306-9d225a9482b8.pdf' },
        { label: 'Patel Engineering rating rationale (IVR A/Stable) — Infomerics, Jun 2026', url: 'https://www.infomerics.com/admin/uploads/Pr-Patel-Engineering05Jun26.pdf' },
        { label: 'Patel Engineering Annual Report FY26 (going-concern emphasis on subsidiaries) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3dd8e6c7-925e-4715-97d8-ab9d02a193d3.pdf' },
        { label: 'Afcons Infrastructure rating rationale (AA−/Negative) — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/AfconsInfrastructureLimited_August%2019_%202026_RR_399354.html' },
        { label: 'Afcons Infrastructure Annual Report FY26 (auditor’s emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/6cc2985d-8fda-4fe2-86af-3aa92c7579cd.pdf' },
        { label: 'Afcons Infrastructure Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5b73d686-171f-485a-b789-2a09c7ce6ac8.pdf' },
        { label: 'SPML Infra Annual Report FY26 (unaudited joint operations) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e9389f56-1c8a-40cc-a683-8c4cd82efa4c.pdf' },
        { label: 'SPML Infra credit bulletin — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SPMLInfraLimited_September%2011_%202026_RR_405299.html' },
        { label: 'SPML Infra Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4c22902e-e97c-4a96-9a3e-b8a957dd3304.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
