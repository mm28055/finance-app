import { SectorOverview } from './types';
import { healthcareDiagnosticBusinesses } from './healthcare-diagnostic-businesses';
import { healthcareDiagnosticValuationInputs } from './card-data/healthcare-diagnostic';

// The six listed diagnostic chains, moved out of the Healthcare note on 1 Oct 2026 with their
// analysis (verdicts, calls, growth estimates, chart data and valuation inputs unchanged).

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const PATH = 'Pathology chains';
const INTG = 'Pathology and radiology chains';
const PPP = 'Government-contract diagnostics';

export const healthcareDiagnostic: SectorOverview = {
    sector: 'Healthcare Diagnostic',
    title: 'Healthcare Diagnostic',
    format: 'ranked',
    businesses: healthcareDiagnosticBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '24 Sep 2026',
        inputs: healthcareDiagnosticValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Dr Lal PathLabs': 16,
            'Vijaya Diagnostic Centre': 20,
            'Metropolis Health.': 17,
            'Thyrocare Technologies': 17,
            'Suraksha Diagnostic': 18,
            'Krsnaa Diagnostics': 10,
        },
    },
    standfirst:
        "Six listed diagnostic chains, moved here from the Healthcare note with their calls and analysis unchanged. Three are pathology chains that test blood and other samples: Dr Lal PathLabs and Metropolis serve patients who walk in or book a home visit, and Thyrocare is a low-cost bulk lab fed by franchisees and health apps. Two run pathology and radiology under one roof in one region each: Vijaya in Hyderabad and Suraksha in Kolkata. One, Krsnaa, runs labs and scan centres inside government hospitals at tender prices. The note rests on both earnings calls for every company, the FY26 annual reports, rating reports, and industry work from CareEdge and CRISIL. The headline: diagnostics had its best quarter in years, with volumes up about 10% and no price rises, but five of the six shares already price in years more of it. The annual reports turned up a fully pledged promoter stake, four finance chiefs in 16 months at one chain, goodwill worth half of another's assets, and tax demands after a search at a third. Every chart uses filed results.",
    lastUpdated: '2026-10-01',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated.',
            note: "Pathology chains earn 23–33% and Krsnaa 25–29% at tender prices. Vijaya's and Suraksha's higher figures are lifted by lease accounting (most rent is booked below operating profit).",
            values: {
                'Dr Lal PathLabs': [29, 31, 27, 27, 31],
                'Vijaya Diagnostic Centre': [39, 41, 42, 44, 43],
                'Metropolis Health.': [23, 25, 23, 25, 25],
                'Thyrocare Technologies': [30, 33, 30, 33, 32],
                'Suraksha Diagnostic': [33, 30, 29, 30, 34],
                'Krsnaa Diagnostics': [26, 29, 25, 28, 25],
            },
            cellNotes: {
                'Vijaya Diagnostic Centre': "Before most rent (Ind AS 116). With rent counted as a cost, the company puts its FY26 margin at about 35% against 41% reported.",
                'Suraksha Diagnostic': "Before most rent (Ind AS 116). On the old basis the company's Q1 FY27 margin was 28.3% against 36% it reported (34% on Screener).",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated.',
            note: "The chains grew 17–24% in Q1 FY27, helped at Dr Lal by 2–3 points from the October 2025 government (CGHS) rate revision, which fades by late FY27. Metropolis's FY26 quarters include acquisitions, and Krsnaa's Q1 FY27 includes its new Rajasthan contract.",
            values: {
                'Dr Lal PathLabs': [11, 11, 11, 17, 19],
                'Vijaya Diagnostic Centre': [21, 10, 21, 27, 23],
                'Metropolis Health.': [23, 23, 26, 23, 17],
                'Thyrocare Technologies': [23, 23, 18, 20, 24],
                'Suraksha Diagnostic': [20, 18, 30, 25, 21],
                'Krsnaa Diagnostics': [14, 11, 3, 4, 22],
            },
            cellNotes: {
                'Metropolis Health.': "FY26 quarters include four acquisitions, among them Core Diagnostics; organic FY26 growth was 13.7%.",
                'Krsnaa Diagnostics': "Q3 and Q4 FY26 were held back by contracts that ended; Q1 FY27 includes about ₹26cr from the new Rajasthan pathology contract.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated.',
            note: "Thyrocare and Dr Lal earn 28–35% on capital. Radiology-heavy Vijaya and Suraksha earn 17–21% because scanners cost far more than lab machines, and Krsnaa 13%. Dr Lal's large cash pile pulls its return down.",
            values: {
                'Dr Lal PathLabs': [29, 18, 25, 29, 28],
                'Vijaya Diagnostic Centre': [28, 18, 20, 21, 21],
                'Metropolis Health.': [29, 17, 16, 15, 18],
                'Thyrocare Technologies': [42, 17, 18, 25, 35],
                'Suraksha Diagnostic': [24, 9, 17, 18, 17],
                'Krsnaa Diagnostics': [null, 12, 10, 12, 13],
            },
            cellNotes: {
                'Dr Lal PathLabs': "Includes over ₹1,500cr of cash. Excluding cash, the company puts FY26 return on capital at 44%.",
                'Thyrocare Technologies': "FY22 includes Covid testing.",
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated.',
            note: "Patient-facing chains are paid on the spot and pay suppliers later, so their cycles are negative. Krsnaa waits about 140 days for state governments to pay.",
            values: {
                'Dr Lal PathLabs': [-54, -87, -108, -86, -79],
                'Vijaya Diagnostic Centre': [-81, -152, -144, -114, -117],
                'Metropolis Health.': [-29, -33, -53, -65, -57],
                'Thyrocare Technologies': [75, 67, 44, -18, 4],
                'Suraksha Diagnostic': [-34, -96, -89, -49, -101],
                'Krsnaa Diagnostics': [46, 55, 104, 141, 140],
            },
            cellNotes: {
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated.',
            note: "Operating cash is after tax, so 80–90% is healthy, and five of the six sit there. Krsnaa has converted only 57% over five years because state governments pay late.",
            values: {
                'Dr Lal PathLabs': [80, 93, 88, 82, 81, 84],
                'Vijaya Diagnostic Centre': [77, 91, 83, 82, 80, 82],
                'Metropolis Health.': [73, 84, 92, 85, 86, 84],
                'Thyrocare Technologies': [48, 105, 120, 101, 81, 86],
                'Suraksha Diagnostic': [86, 94, 82, 77, 85, 84],
                'Krsnaa Diagnostics': [97, 62, 17, 46, 67, 57],
            },
            cellNotes: {
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated.',
            note: "Thyrocare, Dr Lal and Metropolis turn 15–23% of revenue into free cash. Vijaya and Suraksha spend more of theirs on new hubs. Krsnaa has burned cash every year as it buys equipment for new government contracts.",
            values: {
                'Dr Lal PathLabs': [-1.4, 20.4, 21.5, 20.9, 16.8, 15.9],
                'Vijaya Diagnostic Centre': [7.8, 8.7, 17.3, 18.8, 10.8, 13.1],
                'Metropolis Health.': [18.1, 16.9, 16.6, 14.6, 18.2, 16.9],
                'Thyrocare Technologies': [12.8, 16.2, 18.6, 21.3, 23.2, 18.9],
                'Suraksha Diagnostic': [10.3, 16.3, 6.8, 8.3, 4.8, 8.8],
                'Krsnaa Diagnostics': [-0.9, -13.3, -27.4, -5.6, -9.8, -11.6],
            },
            cellNotes: {
                'Krsnaa Diagnostics': "Free cash negative every year from FY22 to FY26 (−₹72cr in FY26).",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings (including lease liabilities) minus cash and treasury investments, ÷ operating profit. Consolidated.',
            note: "Below zero means more cash than debt. Screener's borrowings include lease liabilities, so Vijaya, Suraksha and Metropolis show net debt although Vijaya reports about ₹330cr of surplus cash and CRISIL counts ₹209cr of liquid surplus at Metropolis. Krsnaa's debt rose with a ₹430cr bond in FY26.",
            values: {
                'Dr Lal PathLabs': [-0.3, -0.8, -1.1, -1.4, -1.4],
                'Vijaya Diagnostic Centre': [-0.0, 0.7, 0.8, 1.0, 1.1],
                'Metropolis Health.': [0.6, 0.6, 0.4, 0.5, 0.4],
                'Thyrocare Technologies': [-0.6, -1.2, -1.1, -1.0, -0.7],
                'Suraksha Diagnostic': [0.4, 0.9, 0.5, 0.8, 1.1],
                'Krsnaa Diagnostics': [-1.5, -0.6, -0.1, 0.7, 0.8],
            },
            cellNotes: {
                'Krsnaa Diagnostics': "ICRA counts ₹636.7cr of gross debt including equipment-maker credit, 3.0 times operating profit against its 2.3 times downgrade trigger.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated.',
            note: "Pathology chains need little capital (Dr Lal, Metropolis and Thyrocare spent 4–7% of revenue over five years) because suppliers place machines in return for reagent purchases. Radiology-heavy chains (Vijaya, Suraksha) and Krsnaa's government contracts spent 15–27%.",
            values: {
                'Dr Lal PathLabs': [22.8, 2.2, 2.6, 2.2, 6.3, 7.0],
                'Vijaya Diagnostic Centre': [26.4, 27.2, 16.1, 14.1, 22.5, 20.7],
                'Metropolis Health.': [2.5, 4.6, 5.3, 5.2, 3.1, 4.1],
                'Thyrocare Technologies': [6.4, 8.3, 10.8, 6.5, 2.5, 6.5],
                'Suraksha Diagnostic': [8.5, 6.8, 20.5, 16.7, 21.6, 15.6],
                'Krsnaa Diagnostics': [29.0, 29.0, 31.3, 17.7, 28.3, 26.6],
            },
            cellNotes: {
            },
        },
    ],

    moat: {
        sources: [
            { key: 'scale', label: 'Scale and density', description: 'Being the biggest in its niche or its city, so patients, doctors and buyers come to it first and costs are spread.' },
            { key: 'sticky', label: 'Customer lock-in', description: 'Closed systems, long contracts, validation work or habit that make customers slow to switch.' },
            { key: 'price', label: 'Pricing power', description: 'Whether it can lift revenue per patient, test or contract, rather than compete on price.' },
            { key: 'capital', label: 'Capital needed', description: 'How little capital and working capital each rupee of profit needs.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and how owners and managers behave.' },
        ],
        rows: [
            { company: 'Dr Lal PathLabs', trend: 'widening', trendNote: 'Q1 revenue +19% at a 31% margin, patients +8.2%; CARE upgrade to AA+; 2–3 points of growth from the CGHS revision.',
                grades: { scale: { grade: 'A', note: 'Largest listed pathology chain' }, sticky: { grade: 'B', note: '75% walk-in and home patients' }, price: { grade: 'B', note: 'Revenue per patient +10%, no list rise' }, capital: { grade: 'A', note: 'Suppliers place most machines' }, cash: { grade: 'A', note: 'Net cash about ₹1,700cr (company, June)' } } },
            { company: 'Metropolis Health.', trend: 'widening', trendNote: 'Beat revenue, margin and volume guides in Q1 without a price rise; CRISIL outlook positive; Core Diagnostics still weak.',
                grades: { scale: { grade: 'A', note: '209 labs, 5,003 centres' }, sticky: { grade: 'B', note: '2,200+ specialty tests for specialists' }, price: { grade: 'B', note: 'Revenue per test +5%, no hike' }, capital: { grade: 'A', note: 'Capex about ₹65cr a year' }, cash: { grade: 'B', note: 'Goodwill and brands 51% of assets' } } },
            { company: 'Thyrocare Technologies', trend: 'widening', trendNote: 'Revenue +24%, about 900 franchisees added in Q1; radiology arm sold partly for unlisted shares.',
                grades: { scale: { grade: 'A', note: 'About 210 million tests a year' }, sticky: { grade: 'B', note: '11,730 franchisees' }, price: { grade: 'C', note: 'Revenue per test −2%; wins on cost' }, capital: { grade: 'A', note: 'About ₹40cr capex a year' }, cash: { grade: 'D', note: 'Promoter stake 100% pledged' } } },
            { company: 'Vijaya Diagnostic Centre', trend: 'widening', trendNote: 'Hub plan doubled to nine; Bengaluru flagship open; Guwahati bought; margin 43%.',
                grades: { scale: { grade: 'A', note: 'About 95 centres in Hyderabad' }, sticky: { grade: 'B', note: '92% walk-in; one-stop radiology' }, price: { grade: 'B', note: '₹1,860 per visit; price rise dropped' }, capital: { grade: 'C', note: 'Hubs cost ₹15–16cr each' }, cash: { grade: 'C', note: 'Four CFOs in 16 months; CRISIL B' } } },
            { company: 'Suraksha Diagnostic', trend: 'widening', trendNote: 'Young centres turned profitable (+6.5% margin); mature centres 40.9%; test growth halved to 10–11%.',
                grades: { scale: { grade: 'B', note: 'Largest organised chain in West Bengal' }, sticky: { grade: 'B', note: '40% repeat patients' }, price: { grade: 'B', note: 'Realisation +10% from mix' }, capital: { grade: 'C', note: 'Debt-funded hubs' }, cash: { grade: 'C', note: 'Directors guarantee loans; one state' } } },
            { company: 'Krsnaa Diagnostics', trend: 'narrowing', trendNote: 'Profit margin 7% in Q1; partner fees 17% of revenue; year-old receivables up to ₹38.3cr.',
                grades: { scale: { grade: 'B', note: 'Largest listed PPP diagnostics operator' }, sticky: { grade: 'B', note: '3–12 year state contracts' }, price: { grade: 'D', note: 'Tender prices 70–95% below private' }, capital: { grade: 'D', note: 'Free cash negative every year' }, cash: { grade: 'D', note: '₹62.7cr tax-search demand; CFO vacant' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No company here is a clear buy at today's prices. The two best businesses, Dr Lal PathLabs and Metropolis, are the ones to follow.** The sector has just had its best quarter in years: the chains grew 17–24% in Q1 FY27 with no rise in list prices, and margins widened at five of the six. But five of the six prices assume that pace lasts a decade, and the one cheap share, Krsnaa, is cheap for reasons. **I would buy the good chains after a disappointing quarter, not after a record one.**",
                "**Follow Dr Lal PathLabs and Metropolis.** **Dr Lal** is the best business in the sector: Q1 revenue grew 19%, its fastest in four years, at a record 31% margin with no list-price rise for three years; it holds about ₹1,700cr of net cash by its own June count (₹1,134cr on Screener at March) and CARE upgraded it to AA+. But 2–3 points of that growth come from the October 2025 revision of CGHS rates (the central government employees' health scheme), which management expects to help for ‘at least another two to three quarters’, and it will reinvest anything above a 27–28% margin. I expect about 16% a year against about {need:Dr Lal PathLabs|26}% priced in. **Metropolis** beat all three of its guides in Q1 (revenue +17%, margin +210 basis points, patients +10%) without a price rise for 18 months, and CRISIL moved its outlook to positive; but goodwill and brands from acquisitions are 51% of its assets and Core Diagnostics, its biggest purchase, still lost money in FY26. I expect about 17% a year against about {need:Metropolis Health.|26}% priced in.",
                "**Wait on Thyrocare, Vijaya, Suraksha and Krsnaa.** **Thyrocare** grew 24% at a 32% margin with no bank debt, but its promoter, PharmEasy's Docon, has pledged all of its 60.9% stake against about ₹1,050cr of parent debt, sold 10% of the company in October 2025 and takes dividends above 100% of profit. **Vijaya** earns the highest margin here (43%) and doubled its hub plan to nine, but has had four CFOs in about 16 months, lost a company secretary in August, let CRISIL downgrade it to B for not sharing information, and pays ₹6.8cr of rent to its promoter family; with rent counted its margin is about 35%. **Suraksha**'s young centres turned profitable and its margin reached 36% by its own count (34% on Screener), but 95.5% of revenue comes from West Bengal, test growth halved to 10–11%, on the old accounting basis its margin is 28%, and borrowings rose about 46% in FY26 with directors' personal guarantees. **Krsnaa**'s price asks for only about {need:Krsnaa Diagnostics|12}% a year, but it has missed its growth guidance year after year, carries debt above ICRA's downgrade trigger, and its auditor drew attention to a ₹62.7cr tax demand after an income-tax search.",
                "**Three things to hold onto before reading the rest.** First, **diagnostics grows on volume, not price**: across seven large chains, tests rose 17% a year from FY21 to FY25 while revenue per test fell 20% (CareEdge), and no listed chain has raised list prices this year. A renewed discount war from Tata 1mg, PharmEasy or the hospital chains is the main threat. Second, **part of this year's growth is borrowed**: the CGHS rate revision adds 2–3 points to Dr Lal's growth and fades by late FY27, so the second half will look slower. Third, **read the annual reports**: the pledge, the finance-team exits, the goodwill and the tax search that matter most here were barely mentioned on the calls.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results. Vijaya's and Suraksha's margins include lease effects, as explained in section 5. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's stored quarterly records for this group mix bases and have gaps. Metropolis's Q3 FY26 revenue and Thyrocare's Q4 FY26 operating profit are stored as zero, Krsnaa's Q3 FY26 revenue is stored as ₹781cr (filed: ₹181cr), and Suraksha's stored revenue is total income including other income. The stored analysis says ‘No guidance’ for almost every company, although all six gave some. The charts below use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Diagnostics is the testing step of healthcare: blood and tissue tests (pathology) and scans such as MRI, CT and ultrasound (radiology). CareEdge expects the Indian market to grow about 12% a year to $15–16 billion by FY30, and CRISIL 10–12% a year to ₹1.28–1.38 lakh crore by FY28. It is very fragmented: organised chains hold only 20–25% of it against more than 1.3 lakh labs, and hospital labs (36–40% of the market) are a bigger rival than the chains are to each other. **My view: diagnostics is in a good phase, with online rivals chasing profit rather than share and volumes growing about 10%, but share prices already reflect it.**",
            ],
            points: [
                {
                    label: 'How a lab makes money',
                    text: "**A lab is a fixed-cost business.** The building, the machines and the staff cost much the same whether 500 or 1,000 samples arrive, so every extra test through an existing lab is very profitable; Vijaya's management says 60–70% of its costs are fixed and extra tests at a mature hub ‘directly flow to the EBITDA level’. Reagents (the chemicals each test uses up) are the main variable cost, at 12–26% of sales at the five chains that disclose them. **Pathology needs little capital**: samples travel, so a few big labs can serve thousands of collection points, and suppliers place most machines in return for reagent orders; Dr Lal, Metropolis and Thyrocare spent only 4–7% of revenue on capex over five years. **Radiology needs a lot**: the patient must come to the scanner, a hub with MRI and CT costs ₹10–16cr, and Vijaya and Suraksha spent 15–21% of revenue. In return a scan-and-test chain earns far more per visit (₹1,860 at Vijaya against about ₹900–950 at a pathology-only chain) and is harder to copy. **My view: pathology is the better business on capital; radiology is the better local moat.**",
                },
                {
                    label: 'Who sends the patient',
                    text: "**Three kinds of customer, with very different prices.** Patients who walk in or book a home visit, usually on a local doctor's advice, pay list price on the spot: they are 92% of Vijaya's revenue, 91% of Suraksha's, about 75% of Dr Lal's and 57% of Metropolis's. Hospitals, smaller labs, companies and health apps that send samples in bulk shop on price: this is 43% of Metropolis's revenue and nearly all of Thyrocare's, which earns about ₹40 a test against Metropolis's ₹575. Governments are the third: state hospitals outsource their labs and scanners by tender at prices 70–95% below private rates, which is about 85% of Krsnaa's revenue. **Profit sits with dense, patient-facing chains and bulk pathology**: in Q1 Vijaya earned 43%, Suraksha 34%, Thyrocare 32%, Dr Lal 31% and Metropolis 25% on Screener's figures. Krsnaa earns a similar 25% at tender prices but waits months to be paid, and fast-growing online labs such as Orange Health lose money (₹97cr before tax on ₹139cr of revenue in FY26).",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Volume and test intensity, not price.** CareEdge's seven large chains saw patients grow 12% a year from FY21 to FY25 and tests 17%, while revenue per test fell from ₹233 to ₹187; tests per patient rose from about 3.3 to 4.1. Their wellness packages grew more than 25% a year and are now 12–25% of revenue, and the new occupational-safety code has required employers since 21 November 2025 to pay for a yearly health check for every worker over 40. Chains are pushing into smaller towns because more than 60% of Indians live in rural areas while cities earn over 70% of diagnostic revenue; Dr Lal's towns in tier 3 and below are now 39% of its revenue. **My view: the diagnostic volume story is real and long; the question is how much of it each price already assumes.**",
                },
                {
                    label: 'Pricing, the CGHS revision and the cycle',
                    text: "**Diagnostics is mid-upcycle.** Kotak counts Dr Lal's and Metropolis's Q1 sales up 18% and margins up 240 basis points, and Emkay says the industry ‘may be moving past’ its price war. But part of it is borrowed: the CGHS rate revision of 13 October 2025, the first full one since 2014, adds 2–3 points to Dr Lal's growth for a few quarters and fades by late FY27, while Metropolis gets almost none (CGHS is about 1% of its revenue) and Krsnaa's tender prices do not move with it at all. GST on diagnostic kits and reagents fell from 12% to 5% in September 2025, and the chains passed the saving on rather than raise prices. No listed chain has raised list prices this year: Dr Lal has not for three years, Metropolis not since January 2025, and Vijaya dropped a planned 1–1.5% rise. CareEdge expects prices to be stable to up 1–2% a year for four to five years. **My view: diagnostic numbers will look slower in H2 FY27 as the CGHS boost fades; that may be the better time to buy the chains.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Dr Lal**, **Metropolis**, **Vijaya** and **Suraksha** on volumes growing 8–10% without a price war, and on eventually raising prices; **Thyrocare** on adding franchisees and on its parent's debt; **Krsnaa** on state governments paying and Rajasthan ramping up. **Buy each for what it actually depends on, not for the diagnostics label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Pathology chains', 'Dr Lal, Metropolis, Thyrocare', '23–33%', '18–35%', '**84–86%**', 'A few big labs fed by thousands of collection points; little capital; patients and franchisees pay at once'],
                        ['Pathology and radiology chains', 'Vijaya, Suraksha', '29–44%', '17–21%', '**82–84%**', 'Highest margins, flattered by lease accounting; scanners make returns on capital lower'],
                        ['Government-contract diagnostics', 'Krsnaa', '25–29%', '13%', '**57%**', 'Similar margins at tender prices, but states pay in about 140 days and each new contract needs new equipment'],
                    ],
                    note: 'Vijaya’s and Suraksha’s margins are before most rent.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian diagnostics market', 'Under 10% of healthcare spending; 1.3 lakh+ labs', '**About 12% a year to $15–16bn by FY30**', 'CareEdge Ratings, Nov 2025'],
                        ['Indian diagnostics market (second view)', 'Grew 9–10% a year over FY17–FY24', '**10–12% a year to ₹1.28–1.38 lakh crore by FY28**; radiology 11–13%, pathology 9–11%, wellness 16–18%', 'CRISIL, Apr 2025'],
                        ['Organised share', 'Chains 20–25%; hospital labs 36–40%', 'Share gain is the chains’ main growth lever', 'CareEdge; CRISIL'],
                        ['Price per test (seven large chains)', '₹233 (FY21) → ₹187 (FY25); tests +17% a year', '**Stable to +1–2% a year** for four to five years', 'CareEdge Ratings, Nov 2025'],
                        ['Patients and tests (seven large chains)', 'Patients +12% a year, FY21–FY25; tests per patient 3.3 → 4.1', 'Wellness packages 12–25% of revenue, growing 25%+ a year', 'CareEdge Ratings, Nov 2025'],
                        ['Listed chains, Q1 FY27', 'Dr Lal and Metropolis: sales +18%, margins +240bp', 'Industry ‘may be moving past’ its price war', 'Kotak; Emkay'],
                    ],
                    note: 'CareEdge’s and CRISIL’s market sizes do not agree (about ₹75,000–80,000cr against about ₹95,000cr for FY25), so compare growth rates within a source, not sizes across sources.',
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
                    label: 'Lasting: density and a brand patients choose',
                    text: "**Vijaya** has about 95 centres in Hyderabad, and management says the second- and third-largest chains there now put their money elsewhere because Vijaya already holds the share. Combining radiology with pathology earns it ₹1,860 per visit against about ₹900–950 at a pathology-only chain, and five-year-old centres still grow in high double digits. **Dr Lal** lifted revenue per patient from ₹880 to ₹968 in a year with no list-price rise, through bundles, test mix and the CGHS revision, and 75% of its revenue comes from patients who choose it rather than from hospitals or labs. **Metropolis** earns ₹575 a test (Thyrocare earns about ₹40) because 40% of its revenue is specialty tests ordered by about 30,000 specialists. **Suraksha** says 40% of its patients come back. But Dr Lal's own CEO says ‘entry barriers remain low’, and hospital labs and online players keep arriving. **My view: local density is the real moat in diagnostics; national brands matter less than being the chain every doctor in a city trusts.**",
                },
                {
                    label: 'Cost leadership at scale',
                    text: "**Thyrocare** processed about 210 million tests in FY26, which management says is more than some of its biggest competitors combined; volume discounts from suppliers kept its gross margin at 74% despite requests to raise reagent prices, and it launched a prenatal genetic test at ‘less than half’ the market price. But its revenue per test fell 2% in Q1, so this is a cost moat, not pricing power. **Krsnaa** bids 70–95% below private prices (a brain CT at ₹880 against ₹3,500–4,500) and still earns 25–29%, and ICRA cites a healthy bid-win ratio; but tender prices are fixed until the contract is re-bid.",
                },
                {
                    label: 'Franchise and collection networks: wide, not locked in',
                    text: "Collection points are how a lab fills itself. **Dr Lal** feeds 312 labs from 7,727 patient centres and 13,935 pick-up points. **Metropolis** has 5,003 centres for 209 labs, about 24 per lab, and wants 30; it closed 318 weak centres in Q1 and is lifting its owned centres from 700–800 to about 1,000. **Thyrocare**'s 11,730 franchisees prepay for tests and bring 64% of its pathology revenue, but management itself warned that ‘not all 900’ added in Q1 may stay. Most of these outlets are franchised, so they cost the chain little, and for the same reason they can switch labs or close. **My view: a wide network is a growth tool, not a moat; what holds is the patient's and the doctor's habit, which only the chain's own brand and service can earn.**",
                },
                {
                    label: 'Capital and skill: radiology hubs',
                    text: "A radiology hub is slow and costly to copy. **Vijaya**'s cost ₹15–16cr each and need radiologists (it has more than 400 on its panel) and local doctors' referrals, which took it 2.5 years to build in Pune; in its home markets a new hub breaks even in two to four quarters, in a new city in about a year. **Suraksha**'s hubs cost ₹10–10.5cr and its spokes ₹1.5–2cr, and it adds doctors' clinics that feed tests. The price of this moat is capital: both earn 17–21% on capital against 28–35% at Dr Lal and Thyrocare, and both depend on one region (Hyderabad is 67% of Vijaya's revenue, West Bengal 95.5% of Suraksha's).",
                },
                {
                    label: 'Thin: government contracts and bulk customers',
                    text: "**Krsnaa**'s state contracts run 3–12 years and renew (Himachal's CT contract grew from 12 to 34 centres), but any well-funded bidder can compete when one is re-tendered, and Tamil Nadu's MRI contract simply ended. Hospitals, labs and apps that send samples in bulk shop on price, which is why **Metropolis**'s 43% from such customers is its more competitive half, and why PharmEasy, which is both **Thyrocare**'s owner and one of its customers, matters so much to it.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Tata 1mg**, whose diagnostics business passed a ₹600cr annual run-rate; **PharmEasy** (Thyrocare's parent, which routes about ₹180cr of tests a year to it); **Orange Health**, still losing heavily; **Apollo**, whose diagnostics arm made ₹200cr of revenue in Q1 plus ₹80cr at Spectra; **Agilus** (Fortis) and **Neuberg** among private chains; and hospital labs, which hold 36–40% of the market.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three patterns show up: margins protected by density and scale, margins moved by new centres and contract costs, and margins that look higher than they are because of lease accounting.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: dense chains and bulk pathology',
                    text: "**Vijaya** earned 39–44% over the last five quarters; management says 60–70% of its costs are fixed, so extra tests at a mature hub ‘directly flow to the EBITDA level’. **Dr Lal** earns 27–31% with a gross margin of about 81%, and guides 27–28% because it reinvests the rest. **Thyrocare** earns 30–33% on a 74% gross margin. **Metropolis** has lifted its margin from 23% to 25% through supplier consolidation and fuller labs, and targets 27–28% in three years. **My view: these margins are real because they come from network density and scale, but none of the chains has tested its pricing power this year; the first price rise will show how much is protected.**",
                },
                {
                    label: 'Moved by new centres and contract costs',
                    text: "**Suraksha**'s margin slipped from 33% to 31% in FY26 as new centres lost money, then recovered as centres under two years old moved from −19.6% to +6.5% in five quarters; its mature centres earn 40.9%. **Vijaya** allows a 1–1.5 point drag this year from opening nine hubs at once. **Krsnaa**'s margin fell to 25% in Q1 as fees paid to local partners in Rajasthan and Manipur rose to 17% of revenue from 8%, and management conceded the label ‘might not be appropriate’; with interest and depreciation rising too, its profit margin fell to 7% against about 13% promised. **Thyrocare** shows how far a lab's margin can swing with volume: 40% in FY22 with Covid testing, 23% the year after, and back to 32% in FY26 as its labs filled.",
                },
                {
                    label: 'Not structural: lease accounting',
                    text: "Indian accounting moves most rent below operating profit, which flatters chains that lease their centres. **Vijaya**'s FY26 margin was 41% as reported and about 35% with rent counted, on management's figures; **Suraksha**'s Q1 margin was 36% as the company reports it (34% on Screener) and 28.3% on the old basis. The same accounting puts lease liabilities into Screener's borrowings, which is why chains with no bank loans show net debt. **My view: compare these companies on filed profit after tax and on margins with rent counted, not on the slides.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Krsnaa**'s debtor days went from 46 in FY22 to 140, receivables one to two years old rose from ₹0.3cr to ₹38.3cr, and free cash has been negative every year for five years. Its Himachal and Karnataka clients have paid slowly for more than two years, and its target of getting below 120 days disappeared from the Q1 call. Over five years it has turned only 57% of operating profit into cash, against 82–86% at the other five.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Suraksha**'s debtor days rose from 15 to 27 in two years as business from companies and government grew, while borrowings rose about 46%. **Vijaya** turns strong operating cash (₹271cr in FY26) into only ₹91cr of free cash because it is building hubs fast, and capex rises to ₹190–195cr this year plus ₹46.2cr for Guwahati.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Dr Lal** runs a cash cycle of −79 days, **Vijaya** −117 and **Metropolis** −57: patients pay at once and suppliers are paid later. **Metropolis**'s operating cash was ₹351cr in FY26, about 1.8 times profit after tax. **Thyrocare**'s franchisees prepay.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Governments take three to four months or more to pay diagnostic bills, so any chain that takes more government or company work will carry more receivables. Thyrocare's franchisees prepay, but it deliberately holds two to three months of reagents, and Dr Lal three to four, because most reagents are imported. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Dr Lal PathLabs', 'Net cash ₹1,693cr at June; capex raised to about ₹140–150cr; cash mainly for acquisitions', 'Net cash ₹1,134cr (Screener, March)'],
                        ['Vijaya Diagnostic Centre', 'Surplus cash about ₹330cr; capex ₹190–195cr for nine hubs; ₹46.2cr for Guwahati', 'Screener net debt ₹370cr (mostly leases)'],
                        ['Metropolis Health.', 'Capex on ‘similar lines’ to FY26’s ₹65cr; ₹215cr of reagent purchase commitments', 'Screener net debt ₹170cr (mostly leases)'],
                        ['Thyrocare Technologies', 'No bank debt; net cash above ₹230cr at March; capex about ₹40cr', 'Net cash ₹194cr; payout above 100%'],
                        ['Suraksha Diagnostic', 'Capex widened to ₹70–80cr; 100 centres by FY28', 'Net debt ₹104cr; loans guaranteed by directors'],
                        ['Krsnaa Diagnostics', 'About ₹500cr capitalised in FY27, ₹300cr of it Rajasthan; ₹430cr ADB bond', 'Net debt ₹173cr; ICRA debt 3.0x operating profit'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
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
                    label: 'Growth driver: new centres and smaller towns',
                    text: "CRISIL expects wellness testing to grow 16–18% a year, and the chains are building for it. **Dr Lal** plans 12–15 labs and three to four radiology centres this year. **Metropolis** guides 14–15% revenue growth a year for three years without acquisitions or price rises, with owned centres rising from 700–800 to about 1,000. **Vijaya** raised its hub plan from four or five to nine and bought a Guwahati centre for ₹46.2cr; its hubs break even in two to four quarters in home markets. **Suraksha** targets 100 centres by FY28 from 68 at March 2026 and has entered Jharkhand. **Thyrocare** plans about 1,700 net new franchisees this year and wants specialty tests to reach 15–20% of revenue in three to five years. **My view: the chains have more than enough room to grow; what they lack is the price headroom to grow profit faster than revenue.**",
                },
                {
                    label: 'Growth driver: wellness packages and more tests per patient',
                    text: "Bundled health checks lift revenue per patient without a list-price rise. **Dr Lal**'s SwasthFit packages are 27% of revenue and grew about 20% in Q1; tests per patient rose from 3.07 to 3.14 and revenue per patient 10%. **Metropolis**'s TruHealth is 18% of revenue, grew 22% and is meant to reach 25%. **Vijaya**'s packages are 14.8% of revenue and grew 27.7%, and **Thyrocare**'s Aarogyam bundles are about a third of its test mix, with 10.2 tests per patient. Employers' compulsory yearly checks for workers over 40 add to this.",
                },
                {
                    label: 'Growth driver: specialty tests, genomics and radiology',
                    text: "Specialty tests earn more and face fewer discounters. **Metropolis** gets 40% of revenue from more than 2,200 specialty tests, and its genomics doubled after it bought Core Diagnostics. **Thyrocare** launched allergy, prenatal and genomic tests in Q1 with a new field team of about 70, though they are under 1% of volume today. **Suraksha**'s genomics arm grew 136% from a tiny base at only a 15–20% margin. **Dr Lal** is adding three to four radiology centres, while Thyrocare is selling its own radiology arm, which shrank 4% in Q1. **My view: specialty mix is the chains' substitute for a price rise, and Metropolis is furthest along.**",
                },
                {
                    label: 'Growth driver: acquisitions and government contracts',
                    text: "**Dr Lal** says most of its roughly ₹1,700cr of cash is for buying chains, including ‘slightly larger’ ones in the West and South. **Metropolis** made four acquisitions in FY26; without them its growth was 13.7%. **Vijaya** entered the North-East by buying Arya Wellness in Guwahati. **Krsnaa**'s new Rajasthan contract, India's largest diagnostics PPP, should earn ₹100–150cr in FY27, and it has promised ‘a couple’ more; but contracts also end, which is why its growth was 8% in FY26 against 15–16% guided.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Dr Lal** promised 13–15% growth and a 27–28% margin and delivered 19% and 31%. **Metropolis** promised 14–15% and a margin gain of 125–150 basis points and delivered 17% and 210. **Vijaya** delivered 23% and 42.7% against 15% and 40%. **Thyrocare** delivered 24% against ‘mid- to high-teens’. **Suraksha** delivered 21% and 36% (its own margin figure; 34% on Screener) against 15% and about 33%, and its young centres turned profitable ahead of the six months promised.",
                },
                {
                    label: 'Cautious',
                    text: "**Metropolis**, **Thyrocare** and **Suraksha** all beat and all kept their guidance unchanged; Suraksha's CEO says ‘our commitment is 15%’. **Dr Lal** leaned towards ‘mid-teens rather than early teens’ but will not formally raise guidance until after Q2.",
                },
                {
                    label: 'Missed',
                    text: "**Krsnaa** aimed to hold its profit margin at about 13% and delivered 7%, its sub-120-day receivables target disappeared from the Q1 call, and it has a long record of missing growth guidance (about 25% promised for FY25, about 16% delivered; 15–16% for FY26, 8% delivered).",
                },
                {
                    label: 'Mixed',
                    text: "**Vijaya** beat on growth and margin but dropped its planned 1–1.5% price rise, and **Thyrocare**'s consumables launch slipped from ‘June or July’ to September. **Metropolis** beat its guides, but Core Diagnostics' margin target keeps being reworded.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Vijaya to grow earnings at about 20% a year, Suraksha at about 18%, Metropolis and Thyrocare at about 17%, Dr Lal at about 16%, and Krsnaa at about 10%.** Vijaya's and Suraksha's figures lean on young centres maturing, which lifts profit faster than revenue for two or three years, not for ten. Dr Lal's assumes the CGHS boost fades and a modest price rise follows. Krsnaa's is held back by interest, depreciation and slow collections.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Vijaya Diagnostic Centre', 'Nine hubs a year; Bengaluru, Pune, Guwahati', '14% / **20%** / 25%'],
                        ['Suraksha Diagnostic', 'Young centres maturing; new states', '10% / **18%** / 25%'],
                        ['Metropolis Health.', 'Volume without price; Core Diagnostics margin', '12% / **17%** / 22%'],
                        ['Thyrocare Technologies', 'Franchisees; specialty tests', '12% / **17%** / 22%'],
                        ['Dr Lal PathLabs', 'Volumes; CGHS fading; eventual price rise', '12% / **16%** / 20%'],
                        ['Krsnaa Diagnostics', 'Rajasthan; interest and depreciation; collections', '3% / **10%** / 16%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Dr Lal PathLabs', 'Revenue +13–15% (leaning mid-teens); margin 27–28%', '₹140–150cr (from ₹100–120cr)', '**Beat**: +19% and 31%; price rise deferred'],
                        ['Vijaya Diagnostic Centre', 'Revenue ‘high double digit’; margin above 40%', '₹190–195cr (from ₹140–150cr)', '**Beat**: +23% and 42.7%; 1–1.5% price rise dropped'],
                        ['Metropolis Health.', 'Revenue +14–15%; margin +100–150bp', 'About ₹65cr', '**Beat**: +17% and +210bp; guide held'],
                        ['Thyrocare Technologies', 'Revenue mid- to high-teens; margin flat', 'About ₹40cr', '**Beat**: +24%; consumables launch late'],
                        ['Suraksha Diagnostic', 'Revenue +15%; margin at least 34% (raised)', '₹70–80cr (from ₹70cr)', '**Beat**: +21% and 36%'],
                        ['Krsnaa Diagnostics', 'Rajasthan ₹100–150cr; profit margin back to ‘double digits’', 'About ₹500cr capitalised', '**Walked back**: profit margin 7% against about 13%'],
                    ],
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
                    label: 'A new price war in diagnostics',
                    text: "The chains' best quarter in years came as online rivals switched from discounts to profit: PharmEasy's parent cut its debt and ‘reduced discounts’, and Tata 1mg's established businesses turned EBITDA-positive. Brokers' main risk is that online majors ‘resort to pricing cuts’ again, and Emkay flags Apollo and Max moving into retail diagnostics. Tata 1mg's diagnostics run-rate of ₹600cr is already about a fifth of Dr Lal's FY26 sales. Add the CGHS boost fading by late FY27 and a rally of 30–50% in six months that brokers say ‘caps the upside’, and **the chains are priced for this quarter to last**.",
                },
                {
                    label: 'No price rises, and a boost that fades',
                    text: "No chain has tested its pricing power: Dr Lal has held list prices for three years and will look again only after H1 FY27, Metropolis has not raised since January 2025, Vijaya dropped its planned rise, and Thyrocare cut biochemistry prices in Q4 FY26 to win volume. Costs are not standing still; Dr Lal warned that a weaker rupee and the West Asia conflict ‘may impact our material cost’, and suppliers asked Thyrocare for dollar-linked price rises. Meanwhile the CGHS revision that adds 2–3 points to Dr Lal's growth, and some to Suraksha's revenue per patient, drops out of the comparison from Q3 FY27. **My view: growth will slow in H2 FY27 without anything going wrong, and the prices leave no room for that.**",
                },
                {
                    label: 'The government as payer',
                    text: "**Krsnaa** earns about 85% of its revenue from state contracts, and one state alone is at least 10%. Its Himachal and Karnataka clients have paid slowly for more than two years, receivables over a year old jumped to ₹38.3cr, and its PPP prices do not rise with CGHS rates until a contract is re-bid. **Suraksha**'s debtor days nearly doubled as its public-sector and company business reached about 15% of revenue. The patient-facing chains avoid this only as long as they stay patient-facing.",
                },
                {
                    label: 'Governance: a pledge, a revolving finance team and guarantees',
                    text: "**Thyrocare**'s promoter has pledged 100% of its shares against about ₹1,050cr of parent debt, sold 10% in October 2025, and has agreed to sell Thyrocare's radiology arm for ₹141.4cr, of which only ₹81.9cr is cash. **Vijaya** has had four CFOs in about 16 months, lost a company secretary in August, is rated B by CRISIL for not sharing information, and pays ₹6.8cr of rent to its promoter family. **Suraksha**'s equipment loans carry directors' personal guarantees. **Krsnaa** has no permanent CFO, its promoters hold only 27.1%, and its board approved selling up to ₹120cr of equipment on 28 September without naming buyers or terms.",
                },
                {
                    label: 'Acquisitions and goodwill',
                    text: "Buying smaller chains is the quickest way into a new region, and the accounts carry the price. Goodwill and brands are 51% of **Metropolis**'s assets, and Core Diagnostics, the largest piece, lost ₹3.1cr in FY26 with negative reserves. **Dr Lal** carries ₹470cr from Suburban, whose western business still earns lower margins, and plans to spend most of its cash on more; both are key audit matters. **Vijaya** has started buying too. If a purchase disappoints, the goodwill is written off against profit. **My view: with about ₹1,700cr to spend, the price and quality of Dr Lal's next purchase matters more than its next quarter.**",
                },
                {
                    label: 'Tax claims and concentration',
                    text: "**Krsnaa**'s income-tax search produced ₹62.7cr of demands and an emphasis of matter from its auditor; on 8 September its first appeals were dismissed or only partly allowed, and it is appealing again. **Metropolis**'s search-related demand has been cut to ₹38.8cr. On concentration: West Bengal is 95.5% of **Suraksha**'s revenue, Hyderabad 67% of **Vijaya**'s, Delhi NCR 31% of **Dr Lal**'s, and PharmEasy, its owner's business, about 10% of **Thyrocare**'s.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree here, it is usually because of large cash piles or lease liabilities.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 18–19x, 14% at 22x, 17% at 28x, 19–20% at 34–35x, 24–25% at 50–53x, 26% at 57–61x and 31% at 86–88x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is an expensive sector**: {count:stretched|five} of the {count:live|six} prices are stretched against my estimates, {count:full|one} is full and {count:fits|none} fits today.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Dr Lal** and **Thyrocare** hold net cash, so they are a little cheaper than their P/Es suggest; Dr Lal's is about ₹1,700cr by its own June count. **Vijaya**, **Metropolis** and **Suraksha** show net debt on Screener that is mostly lease liabilities; Vijaya reports about ₹330cr of surplus cash of its own, and CRISIL counts ₹209cr of spare cash at Metropolis. But the same lease accounting lifts their operating profit, so EV/EBITDA flatters the chains that rent the most. **Krsnaa**'s debt is real, a ₹430cr bond repaid in instalments from this year, and ICRA puts it above its own downgrade trigger.",
                },
                {
                    label: 'Stretched: the quality chains',
                    text: "**Dr Lal** needs about {need:Dr Lal PathLabs|26}% a year against my ~16%, **Metropolis** about {need:Metropolis Health.|26}% against my ~17%, **Thyrocare** about {need:Thyrocare Technologies|24}% against my ~17%, and **Vijaya** about {need:Vijaya Diagnostic Centre|31}% against my ~20%. These are the best businesses here, and their prices assume Q1's pace continues for a decade, with no price war and no fading of the CGHS boost. **Suraksha** needs about {need:Suraksha Diagnostic|24–25}% against my ~18%; its young centres will lift profit faster than revenue for two or three years, but not for ten. **The chains are the names to buy after a disappointing quarter, not after a record one.**",
                },
                {
                    label: 'The one low price: Krsnaa',
                    text: "**Krsnaa** needs about {need:Krsnaa Diagnostics|12}% a year against my ~10%: it was only just outside a fair price when this was written, and after a small fall its price check reads {label:Krsnaa Diagnostics|fits}. Its low price reflects debt, slow payers and a record of missed guidance, which is why it is a wait despite the label. The call waits for collections and a met guide, not for a lower price.",
                },
                {
                    label: 'A check from private deals',
                    text: "Listed chains trade far above what private buyers pay. **Vijaya** agreed to buy Guwahati's Arya Wellness for ₹46.2cr, about 8–9 times its operating profit; **Metropolis** says its effective price for Core Diagnostics was about 10 times FY27 operating profit. That gap is why cash-rich Dr Lal (about ₹1,700cr by its own count) is a keen buyer, and why the quality of each acquisition matters as much as the core business.",
                },
                {
                    label: 'What would move the labels',
                    text: "For Dr Lal and Metropolis, a quarter of slower growth as the CGHS boost fades, if the share prices fall with it, or a list-price rise that holds volumes and lifts my estimate. For Thyrocare, the pledge shrinking matters more than the price. For Vijaya, a year with one CFO and a price nearer its growth. For Suraksha, test volumes growing 20% again and a first hub working outside West Bengal. For Krsnaa, debtor days below 120 and one year of meeting its own guide.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Dr Lal PathLabs', rank: 1, stance: 'PRICED', segment: PATH,
            what: "India's largest listed pathology chain, with 312 labs and 7,727 patient centres; about 75% of revenue comes from walk-in and home-collection patients, mostly in North India.",
            view: "**The best business here, at a price that knows it.** Q1 revenue rose 19% at a 31% margin with no list-price rise for three years, net cash is about ₹1,700cr by its own June count (₹1,134cr on Screener at March) and CARE upgraded it to AA+. But 2–3 points of growth come from the one-off CGHS rate revision, management will reinvest margin above 27–28%, and cash is going into small overseas ventures (Ghana, Uzbekistan, Dubai). The price needs about {need:Dr Lal PathLabs|26}% a year against my ~16%.",
            watch: 'Growth after the CGHS boost fades in Q3–Q4 FY27; the deferred price rise after H1; the size and price of any acquisition.',
        },
        {
            company: 'Metropolis Health.', rank: 2, stance: 'PRICED', segment: PATH,
            what: "A specialty-led pathology chain with 209 labs and 5,003 centres, strongest in the West and South, plus labs in Kenya and four other African markets; 43% of revenue comes from labs, hospitals and other businesses.",
            view: "**Improving fast, but paid for.** Q1 revenue rose 17%, patients 10% and margin 210 basis points without a price rise, and CRISIL moved its outlook to positive. But goodwill and brands are 51% of assets, Core Diagnostics lost ₹3.1cr in FY26 and its margin target keeps being reworded, and management held guidance at 14–15% despite the beat. The price needs about {need:Metropolis Health.|26}% a year against my ~17%.",
            watch: "Core Diagnostics' margin; whether a price rise holds volumes; the ratio of centres to labs rising from 24 towards 30.",
        },
        {
            company: 'Thyrocare Technologies', rank: 3, stance: 'PRICED', segment: PATH,
            what: "A low-cost pathology factory that tests samples sent by about 11,730 franchisees and health-tech partners; 60.9% owned by Docon, part of PharmEasy's parent API Holdings.",
            view: "**Excellent operations, a stretched owner.** Revenue grew 24% in Q1 at a 32% margin, return on capital is about 35% and it has no bank debt. But Docon has pledged all its shares against about ₹1,050cr of parent debt, sold 10% of Thyrocare in October 2025, takes dividends above 100% of profit, and PharmEasy is also a customer; the radiology sale takes ₹59.5cr in unlisted shares. The price needs about {need:Thyrocare Technologies|24}% a year against my ~17%.",
            watch: 'The pledge falling as API Holdings repays debt; franchisee additions sticking; the shareholder vote on the Nueclear sale and what is done with its ₹81.9cr of cash.',
        },
        {
            company: 'Vijaya Diagnostic Centre', rank: 4, stance: 'PRICED', segment: INTG,
            what: "An integrated pathology and radiology chain of 166 company-run centres, with 67% of revenue from Hyderabad and 92% from walk-in patients; expanding in Bengaluru, Pune and now Guwahati.",
            view: "**The highest margin here, and the highest price.** Revenue rose 23% at a 43% margin, new hubs break even in two to four quarters, and it funds ₹190–195cr of capex from its own cash. But it has had four CFOs in about 16 months, CRISIL rates it B because it stopped sharing information, it pays ₹6.8cr of rent to the promoter family, and its margin is about 35% with rent counted. The price needs about {need:Vijaya Diagnostic Centre|31}% a year against my ~20%.",
            watch: 'A CFO who stays a year; margin above 40% as nine hubs open; Bengaluru and Pune ramping up.',
        },
        {
            company: 'Suraksha Diagnostic', rank: 5, stance: 'SCALEUP', segment: INTG,
            what: "An integrated diagnostic and polyclinic chain of 72 centres in eastern India, with 95.5% of revenue from West Bengal; entering Jharkhand, Tripura and Bihar.",
            view: "**Young centres turning profitable, in one state.** Q1 revenue rose 21% and margin reached 36%, as centres under two years old moved from −19.6% to +6.5% in five quarters and mature ones earn 40.9%. But test growth halved to 10–11%, the margin on the old basis is 28%, borrowings rose about 46% in FY26 with directors' personal guarantees, and revenue guidance stays at 15%. The price needs about {need:Suraksha Diagnostic|24–25}% a year against my ~18%.",
            watch: 'Test-volume growth back towards 20%; the first hubs in new states; margin holding at 34% or more.',
        },
        {
            company: 'Krsnaa Diagnostics', rank: 6, stance: 'TURNAROUND', segment: PPP,
            what: "Runs radiology and pathology centres in government hospitals under long state contracts, at prices 70–95% below private labs, plus a young retail arm; about 85% of revenue comes from these contracts.",
            view: "**Cheap for reasons.** Like-for-like growth is 12–13% at a 25–29% margin. But it has missed its growth guidance for years, Q1 profit fell 19% as interest and depreciation rose, debt is 3.0 times operating profit against ICRA's 2.3 trigger, receivables over a year old jumped to ₹38.3cr, and its auditor drew attention to ₹62.7cr of tax demands after a search. The price needs about {need:Krsnaa Diagnostics|12}% a year against my ~10%. By 28 September the price had fallen about 4% and the price check reads {label:Krsnaa Diagnostics|fits}; the call stays wait until it collects its dues and meets a guide, and on 8 September its first appeals against the tax demands were dismissed or only partly allowed (it is appealing again).",
            watch: 'Rajasthan revenue roughly doubling in Q2; debtor days below 120; a permanent CFO; the terms of the ₹120cr equipment sale and whether the money cuts debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Pathology chains.** **Dr Lal PathLabs: follow**, the best business in the sector; buy after a quarter that disappoints, not after a record one. **Metropolis: follow** for the same reason, once Core Diagnostics proves itself. **Thyrocare Technologies: wait** until its owner's pledge shrinks.",
            "**Pathology and radiology chains.** **Vijaya Diagnostic Centre: wait** for a steady finance team and a price that fits. **Suraksha Diagnostic: wait** for growth outside West Bengal.",
            "**Government-contract diagnostics.** **Krsnaa Diagnostics: wait**; cheap, but it must collect its dues and meet a guide.",
            "**What would change my view.** For the better: a market fall or a slow quarter that brings Dr Lal or Metropolis to prices that fit their growth; Thyrocare's parent repaying its debt and releasing the pledge; a price rise that holds volumes. For the worse: an online or hospital-led price war in diagnostics; more pressure on government payments; more senior departures at Vijaya; an expensive acquisition.",
            "**What to watch next quarter.** Dr Lal's and Metropolis's growth as the CGHS boost fades; Thyrocare's pledge; Vijaya's CFO; Suraksha's test volumes; Krsnaa's collections.",
        ],
        bottomLine:
            "No company here is a clear buy at today's prices. Follow the two best businesses, both priced high (Dr Lal PathLabs and Metropolis), and wait on the four with an owner, finance-team, single-state or collection question to answer (Thyrocare Technologies, Vijaya Diagnostic Centre, Suraksha Diagnostic, Krsnaa Diagnostics).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/LALPATHLAB/consolidated/' },
        { label: 'Indian diagnostic market to grow by about 12% a year — CareEdge Ratings, Nov 2025', url: 'https://www.careratings.com/uploads/newsfiles/1763463740_Indian%20Diagnostics%20Industry_%20Opinion%20Piece.pdf' },
        { label: 'Assessment of the Indian diagnostics industry (CRISIL) — Medical Buyer, Apr 2025', url: 'https://medicalbuyer.co.in/assessment-of-the-indian-diagnostics-industry/' },
        { label: 'Robust demand and stable pricing to keep diagnostics volumes strong — Business Standard, Sep 2026', url: 'https://www.business-standard.com/health/robust-demand-stable-pricing-to-keep-diagnostics-volumes-strong-in-fy27-126092101023_1.html' },
        { label: 'PharmEasy’s parent: profit first, growth second — Business Standard, May 2026', url: 'https://www.business-standard.com/industry/news/pharmeasy-s-parent-has-a-new-playbook-profit-first-growth-second-126051900979_1.html' },
        { label: 'Dr Lal PathLabs rating rationale (upgrade to AA+) — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130400_Dr._Lal_Pathlabs_Limited.pdf' },
        { label: 'Metropolis Healthcare rating rationale (outlook positive) — CRISIL, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/MetropolisHealthcareLimited_September%2022_%202026_RR_405530.html' },
        { label: 'Vijaya Diagnostic Centre rating rationale (issuer not cooperating) — CRISIL, Jun 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/VijayaDiagnosticCentreLimited_June%2025_%202026_RR_398580.html' },
        { label: 'Thyrocare Technologies Annual Report FY26 (pledge, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/0968c504-a217-40ac-ad14-7387b8e5e6a0.pdf' },
        { label: 'Krsnaa Diagnostics rating rationale — ICRA, Jun 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdfViewer/143916' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
