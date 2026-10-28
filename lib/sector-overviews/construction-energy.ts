import { SectorOverview } from './types';
import { constructionEnergyBusinesses } from './construction-energy-businesses';
import { constructionValuationInputs } from './card-data/construction';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const STEEL = 'Steel-building makers — pre-engineered buildings and structures';
const SOLAR = 'Solar, battery-storage and farm-pump contractors';

export const constructionEnergy: SectorOverview = {
    sector: 'Construction',
    title: 'Construction · Energy EPC and steel buildings',
    format: 'ranked',
    businesses: constructionEnergyBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: constructionValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'M & B Engineer.': 15,
            'EPack Prefab Techno.': 15,
            'Interarch Building': 14,
            'GK Energy': 8,
            'Pennar Industries': 10,
            'Sterling and Wilson': 4,
            'Solarworld Energy So': 3,
        },
    },
    standfirst:
        "Seven companies that build for India's factories and its energy transition rather than for its road budget. This is one of five groups on the Construction page; the others cover government project managers, road builders and developers, diversified heavy-civil contractors, and building contractors. Four here make **pre-engineered steel buildings**, the factory sheds, warehouses and heavy steel frames that are designed and cut in a plant and bolted together on site: **Interarch**, **EPack Prefab**, **M&B Engineering** and **Pennar Industries**, which also makes tubes, boilers and car-body parts. Three build power projects for others: **Sterling and Wilson** (32% owned by Reliance; by its own count it built about 15% of India's utility solar in FY26), **Solarworld** (solar and battery plants for government power companies) and **GK Energy** (solar water pumps for farmers under government schemes). Five of the seven listed only in the last two years, and three of those trade below their IPO price. This edition was built from both earnings calls for every company (Solarworld held no Q1 call, so its presentation stands in), the FY26 annual reports, rating reports from CRISIL, CARE, ICRA and Infomerics, and sector work from ICRA, India Ratings, PRS and JLL. The headline: demand is real and order books grew in Q1 at four of the seven, but these are thin-margin businesses. The steel-building makers earn 8–12% on revenue and mostly sell at fixed prices, so the jump in steel after the West Asia war began cut their margins by one to two points; the solar contractors 5–13%, with only GK’s farm pumps higher. The annual reports and filings turned up a ₹611cr arbitration loss that the former owners do not cover and ₹3,655cr of exposure to one subsidiary under an auditor's emphasis at Sterling and Wilson, an income-tax search under an auditor's emphasis at Interarch, a plan to move IPO money into a joint venture at Solarworld, and a revenue plan at GK Energy that needs nearly five times its order book. Every chart uses filed results; the steel-building makers' company cards also plot margin against the official hot-rolled steel price index.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted as standalone; Interarch and GK Energy file standalone only.',
            note: 'These are thin-margin businesses. The steel-building makers sit at 8–12%: the official hot-rolled steel price index fell about 16% from Q1 FY24 to Q3 FY26 and then rose about 12% in two quarters after the West Asia war began, and because most of their contracts are fixed-price, Q1 FY27 margins dipped at Interarch and EPack. Solar contractors earn less; only GK’s farm-pump business, sold under state subsidy schemes, earns more, and its margin is falling. Company figures differ slightly because they include other income: GK 17.05% in Q1, EPack 9.4%, Interarch 8.6%, M&B 11.4%.',
            values: {
                'Sterling and Wilson': [5, 0, 3, 8, 5],
                'Interarch Building': [8, 9, 10, 11, 8],
                'GK Energy': [18, 18, 19, 18, 16],
                'EPack Prefab Techno.': [11, 12, 10, 10, 9],
                'Pennar Industries': [10, 9, 9, 11, 11],
                'M & B Engineer.': [12, 11, 11, 10, 11],
                'Solarworld Energy So': [13, 11, 11, 10, 7],
            },
            cellNotes: {
                'Sterling and Wilson': 'Q2 FY26 near zero; that half also booked most of the ₹611cr US arbitration loss below operating profit. The company’s own ‘operational EBITDA’, which strips out forex gains, was 5.9% for FY26 and 4.9% in Q1 FY27.',
                'GK Energy': 'Standalone. Q1 FY27 fell as price per pump dropped; CARE’s downgrade trigger is a margin below 12%.',
                'Pennar Industries': 'Group margin held as lower-margin steel and rail lines shrink; the steel-building unit’s own profit margin fell by more than two points in Q1 FY27 while steel price rises were passed on late.',
                'Solarworld Energy So': 'Q1 FY27 revenue was only ₹168cr, so fixed costs weigh heavily; the company blames war-related cost increases.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: 'The steel-building makers grew 20–25% in Q1 FY27, except Pennar, whose steel and rail lines are being deliberately run down. The solar contractors are lumpy because a few large projects start or stop in a quarter: Solarworld’s +147% came on a tiny base (₹168cr against ₹68cr) and was 72% below Q4, and Sterling and Wilson’s revenue fell because six large projects had not started.',
            values: {
                'Sterling and Wilson': [93, 70, 14, -23, -10],
                'Interarch Building': [26, 52, 44, 9, 21],
                'GK Energy': [null, null, 59, 35, 55],
                'EPack Prefab Techno.': [10, 62, 22, 42, 24],
                'Pennar Industries': [15, 21, 12, 2, 3],
                'M & B Engineer.': [70, 48, 7, 16, 22],
                'Solarworld Energy So': [202, -3, 184, 235, 147],
            },
            cellNotes: {
                'GK Energy': 'Listed in September 2025; earlier quarters were not filed. The company reported Q1 FY27 revenue of ₹505cr, up 71% on its own figures; the filed series used here shows a lower rate.',
                'Sterling and Wilson': 'About ₹9,000cr of the ₹13,000cr order book sits in six projects that had not started by the Q1 call; the company expects Q2 to be flat with Q1.',
                'Pennar Industries': 'Steel-building revenue rose from ₹411cr to ₹507cr in Q1 FY27; the other engineering units fell from ₹450cr to ₹385cr.',
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
            note: 'The steel-building makers earn a steady 22–24%, Pennar about 15%. Four companies listed between August and October 2025 and their IPO cash sits in the FY26 capital base, which is why GK and Solarworld fall sharply in FY26. Sterling and Wilson’s recent returns are high only because years of losses shrank its capital.',
            values: {
                'Sterling and Wilson': [-66, -65, 4, 17, 27],
                'Interarch Building': [10, 31, 29, 25, 24],
                'GK Energy': [null, null, null, 74, 41],
                'EPack Prefab Techno.': [21, 22, 27, 24, 22],
                'Pennar Industries': [10, 13, 16, 16, 15],
                'M & B Engineer.': [17, 23, 22, 26, 23],
                'Solarworld Energy So': [null, 35, 68, 40, 24],
            },
            cellNotes: {
                'Sterling and Wilson': 'Losses in FY22–FY23 came from old overseas projects. Infomerics puts adjusted net worth at only ₹416cr in September 2025, so returns on capital look high on a small base.',
                'GK Energy': 'Filed ratios start in FY25. The FY26 fall reflects ₹400cr of IPO money in the capital base.',
                'Pennar Industries': 'The company’s own figure for FY26 is 20.2% and its FY27 target is 25%; Screener’s filed ratio is lower.',
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
            note: 'Steel-building makers hold steel stock and wait for customers to pay; M&B and Pennar hold about six months of inventory. Pennar’s 93 days sits just under CARE’s 95-day trigger for a negative rating action. Solarworld’s figure is flattered by paying its own suppliers slowly (150 payable days).',
            values: {
                'Sterling and Wilson': [55, 143, 100, 73, 87],
                'Interarch Building': [72, 68, 54, 71, 73],
                'GK Energy': [null, null, 80, 91, 102],
                'EPack Prefab Techno.': [22, 32, 24, 36, 26],
                'Pennar Industries': [94, 86, 64, 77, 93],
                'M & B Engineer.': [65, 72, 129, 131, 137],
                'Solarworld Energy So': [105, 60, 12, 32, -22],
            },
            cellNotes: {
                'Sterling and Wilson': 'Screener gives debtor days only. The company reports negative net working capital (−₹260cr at June 2026), shrinking from −₹407cr two quarters earlier.',
                'M & B Engineer.': 'Inventory 175 days. The company gives net working capital as 39 days; CRISIL puts gross current assets at 189 days, down from 221.',
                'GK Energy': 'Debtors are state subsidy schemes. CARE’s downgrade trigger is an operating cycle above 150 days.',
                'Solarworld Energy So': 'Negative because payables (150 days) exceed debtors (92 days).',
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
            note: 'Only Pennar and EPack turn most of their profit into cash over five years. In FY26, three of the seven had negative operating cash: Interarch (−₹19cr) and Solarworld (−₹50cr), both in a year of record profit, and Sterling and Wilson (−₹257cr). M&B’s filed −₹31cr counted ₹121cr of IPO deposits as operating spending; corrected, it was about +₹90cr. A company’s cash conversion of 70–80% is healthy.',
            values: {
                'Sterling and Wilson': [null, null, null, 14, -82, null],
                'Interarch Building': [70, 28, 68, 37, -10, 29],
                'GK Energy': [null, null, -9, -50, 16, -10],
                'EPack Prefab Techno.': [81, 4, 83, 53, 85, 67],
                'Pennar Industries': [114, 110, 82, 82, 57, 84],
                'M & B Engineer.': [91, 43, 6, 26, 63, 43],
                'Solarworld Energy So': [-200, -33, 10, 50, -34, 0],
            },
            cellNotes: {
                'Sterling and Wilson': 'Operating profit was negative in FY22–FY24, so the ratio has no meaning for those years or for five years together.',
                'Interarch Building': 'FY26: big projects billed but not collected, extra steel bought ahead of price rises and advances to steel mills; management says cash was ‘back to positive’ in Q1 FY27.',
                'GK Energy': 'FY26 operating cash (₹50cr) is before ₹400cr of IPO money, much of which went into working capital.',
                'M & B Engineer.': 'FY26 and five years corrected: the filed statement (−22% in FY26, 17% over five years) counted ₹120.81cr of IPO money placed in fixed deposits as operating spending; the company moved it to investing in June 2026.',
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
            note: 'Only Pennar has produced free cash over five years, and even it burned cash in FY26 on a US acquisition, new plants and extra stock. The rest have funded growth with IPO money: the steel-building makers are building new plants, Solarworld built module and battery lines, and Sterling and Wilson paid for old overseas losses.',
            values: {
                'Sterling and Wilson': [-32.8, -91.2, 17.7, 0.5, -3.6, -13.4],
                'Interarch Building': [2.6, 1.5, 4.4, -1.6, -7.3, -1.0],
                'GK Energy': [null, null, -2.4, -9.5, -2.9, -5.1],
                'EPack Prefab Techno.': [-10.7, -4.1, -2.7, -2.2, 0.2, -2.6],
                'Pennar Industries': [6.1, 6.0, -0.7, 4.0, -3.5, 1.9],
                'M & B Engineer.': [4.5, 1.2, -9.2, -0.7, 4.5, 0.4],
                'Solarworld Energy So': [-14.3, -3.4, 1.4, -18.0, -8.0, -7.9],
            },
            cellNotes: {
                'Sterling and Wilson': 'FY22–FY23 losses came from old overseas projects, before Reliance bought in.',
                'Solarworld Energy So': 'FY25–FY26 include the 1.55 GW solar-module line and the battery-pack line.',
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
            note: 'Five of the seven hold net cash after their IPOs. The two with real debt are Pennar (borrowings up 43% to ₹1,162cr in FY26) and Sterling and Wilson (₹1,191cr of borrowings), where Infomerics puts adjusted debt at 2.87 times net worth against a downgrade trigger of 3 times.',
            values: {
                'Sterling and Wilson': [null, null, null, 0.9, 2.1],
                'Interarch Building': [-2.3, -0.9, -1.1, -1.2, -0.3],
                'GK Energy': [null, null, 1.0, 0.8, -0.8],
                'EPack Prefab Techno.': [1.9, 1.8, 1.5, 0.5, -1.1],
                'Pennar Industries': [3.3, 2.3, 2.4, 2.0, 2.5],
                'M & B Engineer.': [0.2, 0.3, 1.3, 0.8, -1.4],
                'Solarworld Energy So': [20.0, 2.2, 0.3, -0.1, -2.2],
            },
            cellNotes: {
                'Sterling and Wilson': 'No figure for FY22–FY24 because operating profit was negative. Term-loan repayments are ₹615cr due in FY27.',
                'Solarworld Energy So': 'FY22 operating profit was only ₹2cr, which inflates the ratio.',
                'Interarch Building': 'Net cash is shrinking as reserves go into new plants; a QIP of about ₹250cr is planned.',
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
            note: 'The solar contractors are asset-light: Sterling and Wilson spends almost nothing on fixed assets and GK owns no factory. The steel-building makers spend 4–9% of revenue a year on plants, and all four are adding capacity at the same time in FY27.',
            values: {
                'Sterling and Wilson': [0.3, 0.4, 0.0, 0.1, 0.1, 0.2],
                'Interarch Building': [0.5, 1.2, 1.9, 5.2, 6.3, 3.6],
                'GK Energy': [null, null, 1.2, 0.5, 5.8, 3.4],
                'EPack Prefab Techno.': [17.1, 4.4, 10.6, 7.7, 8.7, 9.0],
                'Pennar Industries': [2.5, 2.5, 7.9, 3.9, 9.1, 5.5],
                'M & B Engineer.': [1.5, 2.1, 9.8, 4.0, 2.7, 3.9],
                'Solarworld Energy So': [0.0, 0.4, 0.0, 27.9, 4.4, 7.9],
            },
            cellNotes: {
                'Pennar Industries': 'FY26 includes buying a structural-steel plant in Alabama (about US$14m), a robotic welding line in the US and a new plant at Raebareli.',
                'Solarworld Energy So': 'FY25 is the Roorkee module line; a 1.2 GW cell plant planned from IPO money is now proposed as a 50:50 joint venture instead.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'delivery', label: 'Delivery record', description: 'Finishing jobs on time and doing what was promised on the calls.' },
            { key: 'scale', label: 'Scale and reach', description: 'Plants, installed base or gigawatts built that a rival cannot match quickly.' },
            { key: 'clients', label: 'Repeat clients', description: 'Customers who come back, and a book not tied to one scheme or one buyer.' },
            { key: 'pricing', label: 'Cost pass-through', description: 'Passing on steel, module and freight costs instead of absorbing them.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and a clean record with auditors, rating agencies and shareholders.' },
        ],
        rows: [
            { company: 'M & B Engineer.', trend: 'narrowing', trendNote: 'Margin 13.6% → 12.5% → 11.4% (company); margin guidance withheld; Sanand plant full until the October expansion.',
                grades: { delivery: { grade: 'B', note: 'FY26 revenue +27%; inflow below plan' }, scale: { grade: 'C', note: 'Heading to ~154,000t by FY28' }, clients: { grade: 'B', note: '60–70% repeat; US exports' }, pricing: { grade: 'C', note: 'Steel and freight squeezed margin' }, cash: { grade: 'B', note: 'FY26 cash about +₹90cr once IPO deposits are reclassified; CRISIL A' } } },
            { company: 'EPack Prefab Techno.', trend: 'stable', trendNote: 'Order book up about 23% in a quarter to ~₹1,380cr; steel spike cost about one point of margin, not two.',
                grades: { delivery: { grade: 'A', note: 'IPO promises met; FY26 +34%' }, scale: { grade: 'B', note: '147,122t; three plants coming' }, clients: { grade: 'B', note: 'Solar, data-centre and auto plants' }, pricing: { grade: 'C', note: 'Mostly fixed-price contracts' }, cash: { grade: 'B', note: 'Cash 85% of profit FY26; ICRA A+' } } },
            { company: 'Interarch Building', trend: 'stable', trendNote: 'Revenue +21% in Q1 at an 8.6% margin; capacity up 23% to 245,000t; FY28 target raised to ₹2,700cr.',
                grades: { delivery: { grade: 'A', note: 'Guidance met; FY26 +31%' }, scale: { grade: 'A', note: 'Second-largest integrated capacity (CRISIL)' }, clients: { grade: 'A', note: 'Reliance, Tata, Aditya Birla, Micron' }, pricing: { grade: 'C', note: 'Margin stuck at 6–11%' }, cash: { grade: 'C', note: 'Tax-search emphasis; cash −₹19cr' } } },
            { company: 'GK Energy', trend: 'narrowing', trendNote: 'Pumps installed more than doubled in Q1, but price per pump fell, margin slipped and the order book shrank from ₹710cr to ₹541cr.',
                grades: { delivery: { grade: 'C', note: 'FY26 pumps 60,000+ against 70,000' }, scale: { grade: 'B', note: '164,500+ systems; 15,000 a month' }, clients: { grade: 'D', note: 'State schemes only; Maharashtra-heavy' }, pricing: { grade: 'B', note: 'Supplier prices fixed up front' }, cash: { grade: 'C', note: 'Slow scheme payments; clean audit' } } },
            { company: 'Pennar Industries', trend: 'widening', trendNote: 'Steel-building books at records in India (₹1,008cr) and the US (over US$100m); gross margin up; legacy steel shrinking.',
                grades: { delivery: { grade: 'D', note: 'Profit-margin goals missed and moved' }, scale: { grade: 'B', note: '14 plants, three in the US' }, clients: { grade: 'B', note: 'Custom designs keep clients' }, pricing: { grade: 'C', note: 'Passed on steel later than peers' }, cash: { grade: 'B', note: 'Cash 84% of profit over 5 years' } } },
            { company: 'Sterling and Wilson', trend: 'stable', trendNote: 'Record ₹13,000cr order book, but Q1 revenue −10%, growth guidance trimmed and the Reliance order still awaited.',
                grades: { delivery: { grade: 'C', note: 'Q1 ₹1,590cr against ₹2,000cr+ planned' }, scale: { grade: 'A', note: '~15% of FY26 utility solar (own estimate)' }, clients: { grade: 'B', note: 'NTPC, Coal India, Adani Green' }, pricing: { grade: 'C', note: 'Gross margin 8–10%' }, cash: { grade: 'D', note: 'Legacy claims; Negative outlook; pledge' } } },
            { company: 'Solarworld Energy So', trend: 'narrowing', trendNote: 'Q1 revenue ₹168cr against ₹592cr in Q4; margin 7%; no Q1 call; IPO money being moved into a cell joint venture.',
                grades: { delivery: { grade: 'D', note: 'Missed first-year guidance' }, scale: { grade: 'C', note: '1.4 GW under way; new module line' }, clients: { grade: 'C', note: 'Almost all state power companies' }, pricing: { grade: 'C', note: 'Margin 13% → 7% in a year' }, cash: { grade: 'D', note: 'Cash −₹50cr; IPO objects changed' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Nothing in this group earns an ‘own’ today. Follow EPack Prefab and M&B Engineering; wait on Interarch until its profit turns into cash; and use the Q2 results in October and November to decide.** **EPack Prefab** has the best momentum and cash record of the steel-building makers: Q1 revenue rose 24%, record bookings of ₹580cr lifted the order book to about ₹1,380cr, FY26 operating cash was 85% of operating profit, and the steel spike cost it one point of margin rather than the two it feared. But three new plants arrive in FY27 (its first panel line ran at only 25% in its first year), most contracts are fixed-price, and the price needs about {need:EPack Prefab Techno.|16}% a year against my ~15%.",
                "**Follow M&B Engineering (moved up from wait on 16 October 2026); wait on Interarch until most of its profit arrives as cash.** **M&B Engineering** is the cheapest of the three steel-building makers, and its cash record is better than the filed figures showed. It holds ₹195cr of net cash, CRISIL rates it A, its FY26 audit was clean, it has earned 22–26% on capital for four years, and its Sanand plant, ‘chock-a-block full’, grows from October. Revenue rose 22.5% in Q1 and management guides ‘over 25%’ for FY27. The price needs only about {need:M & B Engineer.|10}% a year of earnings growth against my ~15%. What holds me back: its margin has slid from 13.6% in FY25 to 11.4% in Q1 (company figures) on dearer steel and freight, management declined to guide margins this quarter, and the order book slipped to ₹1,053cr as Q1 orders lagged. I had also held it back for cash, and that rested on a misfiled figure: Screener shows −₹31cr of operating cash in FY26 against ₹93cr of profit, but that figure counted ₹120.81cr of IPO money placed in fixed deposits as operating spending; the company reclassified it in June 2026, which makes FY26 operating cash about +₹90cr, and management said Q1 FY27 operating cash was ‘positive and very good’. Corrected, FY22–FY26 operating cash was about ₹198cr against ₹265cr of profit (75%), though FY24 brought in only ₹5cr. It still carries about 175 days of steel stock, and its ₹195cr of net cash came from the IPO, not from the business. **Follow M&B; it becomes an own once the H1 FY27 cash flow confirms the corrected picture, with the margin holding near 11% and orders back near its ₹100cr-a-month aim.** **Interarch**, the second-largest integrated steel-building maker in India on CRISIL's count, has met its guidance, raised its FY28 revenue target to ₹2,700cr and lifted capacity 23% to 245,000 tonnes. But less than half its profit has arrived as cash: operating cash was ₹173cr against ₹427cr of profit over FY22–FY26 (41%), and −₹19cr against ₹135cr in FY26, though management says it was ‘back to positive’ in Q1. Its filed margin has stayed between about 6% and 11% for three years, its auditor draws attention to an August 2025 income-tax search that became a six-year block assessment on 15 September, and it plans a share sale (QIP) of about ₹250cr. The price needs about {need:Interarch Building|14}% a year against my ~14%. **Interarch goes back to follow once operating cash turns positive for the year and converts most of its profit, with the tax assessment settled.**",
                "**Wait also on GK Energy and Pennar.** **GK Energy** installs solar water pumps for farmers under government schemes, earns a filed margin of 16–19% and 41% on capital, and holds net cash. But its plan to double revenue to about ₹3,000cr in FY27 needs about ₹2,500cr in three quarters against a ₹541cr order book, price per pump is falling, its margin fell from 20.4% in FY26 to 17.05% in Q1, and the next leg depends on PM-KUSUM 2.0, which the chairman says will come ‘in Q3. Not before.’ The price needs about {need:GK Energy|7}% a year against my ~8%, cheap if the scheme arrives; I would wait until it does. **Pennar** has record steel-building order books in India and the US and the best five-year cash record here, but it missed its FY26 profit-margin target (3.83% against 5%), reworded the next one and borrowed 43% more. The price needs about {need:Pennar Industries|12}% a year against my ~10%.",
                "**Pass on Sterling and Wilson and Solarworld.** **Sterling and Wilson** has a record ₹13,000cr order book and built about 15% of India's utility-scale solar in FY26 by its own estimate. But it lost ₹296cr in FY26 after a ₹611cr US arbitration loss its former owners do not cover, its auditor flags ₹3,654.75cr of exposure to one subsidiary, about ₹1,800cr of legacy claims are open, Infomerics has it on Negative outlook with liquidity ‘stretched’, 27.6% of promoter shares are pledged, and the Reliance order first expected by March 2026 has not come. Revenue fell 10% in Q1; the price needs about {need:Sterling and Wilson|9}% a year against my ~4%. **Solarworld** listed at ₹351 a share in September 2025 and traded near ₹135 a year later. It missed its first-year promises, Q1 revenue was ₹168cr against ₹592cr in Q4, it held no Q1 call, and on 7 September its board proposed moving IPO money from its own cell plant into a 50:50 joint venture with Rays Power Infra. The price needs about {need:Solarworld Energy So|6}% a year against my ~3%.",
                "**Three things to hold onto before reading the rest.** First, **these are thin-margin businesses with little pricing power**: solar contractors earn 8–10% gross margins because modules pass through at cost, and the 2026 steel spike showed that fixed-price contracts leave the steel-building maker to absorb a cost jump until new orders reprice. Second, **demand is strong but back-ended**: Sterling and Wilson, GK Energy and Solarworld all need a far bigger second half than first, and the sector research expects guidance cuts in the Q2 results. Third, **the recent listings have not yet shown cash**: of the five companies here that listed since August 2024, only EPack turned most of its FY26 operating profit into cash.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results, consolidated where the company files them; Interarch is shown standalone because its consolidated page is empty; GK Energy's consolidated revenue (₹1,715cr in FY26) is higher than the ₹1,533cr it reports for the parent company alone. Hover over a starred name for its caveat. Each steel-building maker's company card in Tab 2 also plots its quarterly margin against the official wholesale price index for hot-rolled steel, their main raw material. The index fell about 16% between Q1 FY24 and Q3 FY26 and then rose about 12% in the two quarters after the West Asia war began; margins at Interarch and EPack dipped in Q1 FY27 as it rose.",
                "**Where the numbers disagree.** GK Energy reported Q1 FY27 revenue of ₹505cr, up 71% on its own figures, while the filed quarterly series in the growth chart shows 55%; its own EBITDA margins (20.4% for FY26, 17.05% in Q1) run above the filed operating margin because they include other income. Pennar gives its FY26 return on capital as 20.2%; the filed ratio is 15%. Sterling and Wilson's quarterly profit swings from a ₹478cr loss in Q2 FY26 to profits since, so any measure of trailing profit depends heavily on which quarters are counted. The charts use Screener's filed figures throughout.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Construction as a whole is in its second slow year: ICRA puts industry revenue growth at only 2–4% in FY26 and forecasts 6–8% in FY27, with operating margins slipping to 10.1–10.6%. This group sits on the part of the economy that is still spending: factories, warehouses, data centres, solar parks and battery storage. The FY27 Union Budget raised central capital spending 11.5% to about ₹12.2 lakh crore (PRS), and India Ratings names power transmission, energy storage, urban infrastructure and mining as the best opportunities in construction, while expecting the sector's credit stress to last through FY27. These seven share thin margins set by steel and module prices, and all are adding capacity or new technology at once. **My view: this is the healthiest demand on the Construction page, but the profit in it is thin and competition grows as everyone adds capacity; the winners will be the makers who hold margins and turn profit into cash, not the ones who grow fastest.**",
            ],
            points: [
                {
                    label: 'Steel buildings for factories, warehouses and data centres',
                    text: "A pre-engineered building (PEB) is a steel frame designed and cut in a factory and bolted together on site; it replaces concrete for factory sheds, warehouses and, increasingly, heavy multi-storey frames. The four makers here carry order books of ₹1,864cr (Interarch), about ₹1,380cr (EPack), ₹1,053cr (M&B) and ₹1,008cr (Pennar's India unit), from customers building electric-vehicle, battery, semiconductor and solar-module plants, such as Micron at Sanand for Interarch. Interarch says building in steel off-site saves ‘about 50%-60% time’. Data centres are the next leg: JLL counts about 1.6 GW installed in India by mid-2026 and expects about 6 GW by 2029, needing about US$110bn, and M&B's management puts structural steel at about 8–10% of data-centre spending. **My view: demand for steel buildings is broad and growing at 20–25% at the better makers, and it is private money, which is why this part of Construction did not slow with the road budget.**",
                },
                {
                    label: 'Utility solar and battery storage',
                    text: "India installed 28.3 GW of utility-scale solar (AC) in FY26, according to government data quoted by Sterling and Wilson, which built about 4.5 GW of it. Sterling and Wilson expects ₹45,000–50,000cr of orders in the second half of FY27, about 25 GW of solar and 35 GWh of battery storage, but only about ₹6,400cr was finalised across the industry in Q1 against more than ₹20,000cr expected, as developers waited out volatile copper, aluminium and module prices. Government-backed projects must use modules made in India with Indian cells, which an analyst put at a 130–160% premium to imports. Batteries are the new growth: Solarworld wants 60% of its revenue from them in time, and GK Energy won its first battery project in September. **My view: the volume is there, but solar contracting passes most of the project cost through at cost, so the contractor keeps 8–10% gross; the policy protects module makers, not contractors.**",
                },
                {
                    label: 'Farm solar pumps and state schemes',
                    text: "PM-KUSUM Component B subsidises standalone solar water pumps for farmers, and states run their own versions, such as Maharashtra's Magel Tyala. GK Energy has installed more than 164,500 systems and is empanelled in five states that hold about 82% of the pumps sanctioned under PM-KUSUM (CARE); its management says Maharashtra alone accounts for about 70% of India's solar-pump business. The next round, PM-KUSUM 2.0, has not been announced; GK's chairman expects it in Q3 FY27. Price per pump is falling: GK installed more than twice as many systems in Q1 as a year earlier, but revenue rose only 71%. **My view: this is a scheme business, and the scheme sets both volume and price; a strong installer can win share, but cannot make the scheme arrive on time.**",
                },
                {
                    label: 'Steel prices, freight and US trade',
                    text: "The official hot-rolled steel price index fell about 16% from Q1 FY24 to Q3 FY26, which helped the steel-building makers, and then rose about 12% in two quarters after the West Asia war began. The effect depended on contract terms: EPack, mostly on fixed prices, lost about one point of margin; Pennar's building unit lost more than two points while its price-escalation clauses caught up, and its management admits peers passed on the rise faster. Exports carry a second set of costs: container freight to the US is about double normal at US$10,000–12,000, while the US cut its Section 232 duty on steel products from 50% to 25%. **My view: steel cost the makers a point or two in Q1, and they recover it as new orders are priced at today's steel, as long as steel stops rising; exports add margin, but also freight and tariff risk.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Steel-building makers', 'Interarch, EPack, M&B', '8–12%', '22–24%', '**17–67%**', 'Design, fabrication in own plants and erection; plants turn over quickly, but fixed-price contracts and steel stock tie up cash'],
                        ['Diversified engineered steel', 'Pennar', '9–11%', '15%', '**84%**', 'Steel buildings in India and the US plus tubes, boilers and car-body parts; the best cash record, held back by a shrinking steel and rail business'],
                        ['Farm solar pumps', 'GK Energy', '16–19%', '41%', '**−10%**', 'Subsidised state schemes pay a better margin than private contracting, but pay slowly and set the volume'],
                        ['Utility solar and battery contracting', 'Sterling and Wilson, Solarworld', '0–13%', '24–27%', '**Not meaningful to 0%**', 'Modules and batteries pass through at cost, leaving 8–10% gross margins; Sterling and Wilson’s return is high only on capital shrunk by losses'],
                    ],
                    note: 'Filed figures from Screener; Interarch and GK Energy are standalone. The companies’ own EBITDA figures include other income and run up to one point higher.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Listed construction revenue (19 companies)', 'About ₹1.28 trillion; +2–4% in FY26 (estimate)', '**+6–8% in FY27; margin 10.1–10.6%**', 'ICRA, Mar 2026'],
                        ['Where construction growth is', 'Diversified contractors ahead of road builders', '**Power lines, energy storage, urban and mining best placed; credit stress through FY27**', 'India Ratings (press coverage)'],
                        ['Central capital spending, FY27', 'About ₹12.2 lakh cr (+11.5%)', 'Railways ₹2,81,377cr (+10.1%); defence capital ₹2,19,306cr (+17.6%)', 'PRS, Feb 2026'],
                        ['Data-centre capacity, India', 'About 1.6 GW installed (mid-2026)', '**About 6 GW by 2029; about US$110bn of investment**', 'JLL, mid-2026'],
                        ['Steel structure in data-centre cost', 'About 8–10% of capital spending', 'Management estimate', 'M&B Engineering, Q1 call'],
                        ['Utility-scale solar installed', '28.3 GW (AC) in FY26; Sterling and Wilson built about 4.5 GW', '**About 25 GW of solar and 35 GWh of storage to be ordered in H2 FY27 (₹45,000–50,000cr)**', 'Government data and management, Sterling and Wilson calls'],
                        ['Solar orders actually placed', 'About ₹6,400cr in Q1 FY27 against more than ₹20,000cr expected', 'Developers waiting on metal and module prices', 'Sterling and Wilson, Q1 call'],
                        ['Made-in-India module premium', '130–160% over imports on domestic-content projects', 'Protects local makers; raises project cost', 'Analyst on Sterling and Wilson Q1 call'],
                        ['Farm solar pumps (PM-KUSUM B)', 'Five states hold ~82% of sanctioned pumps; GK has installed 164,500+', '**PM-KUSUM 2.0 expected by Q3 FY27 (management)**', 'CARE, Feb 2026; GK Energy calls'],
                        ['Hot-rolled steel price (official index)', 'Down about 16% from Q1 FY24 to Q3 FY26', '**Up about 12% in the two quarters to Q1 FY27**', 'Office of Economic Adviser, wholesale price index'],
                        ['Steel-building capacity added in FY27', 'Interarch to 245,000t; EPack three plants; M&B +20,000t at Sanand', 'M&B to about 154,000t by Q3 FY28', 'Company calls and filings'],
                        ['US trade', 'Section 232 steel duty cut from 50% to 25%', 'Container freight to the US about double normal', 'M&B Engineering calls'],
                    ],
                    note: 'India Ratings’ views were read in press coverage because its pages did not load. Market figures quoted by companies are management estimates, not official releases.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits in this group. The grid grades each company on each one; how each company's business works is explained in Tab 2. The short version: none of these companies sets its own prices. What separates them is scale, delivery, a foothold abroad and whether profit becomes cash.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Real but modest: scale and a full design-to-erection service',
                    text: "**Interarch** sells ‘one building, one date, one price’, from design to erection. CRISIL calls it the second-largest integrated steel-building capacity in India, and Reliance, the Tata group and the Aditya Birla group come back to it for fast, complex jobs; it takes only orders it can deliver on time. **M&B** says 60–70% of its customers are repeat, and its Proflex roofing, built on site by mobile units, is a niche product. **Pennar**'s rating agency notes that clients share their designs with it, so ‘the likelihood of switching to some other supplier is less’. **My view: these are genuine advantages in winning work, but they show up as steady volumes rather than higher prices; full-year margins at all four sit between about 9% and 14%.**",
                },
                {
                    label: 'Weak: pricing power',
                    text: "**EPack**'s management says margins are ‘more or less similar’ across the sectors it serves because it faces competition in all of them, and most of its contracts are fixed-price; when steel rose 12–15%, management said, ‘the impact on our balance sheet was just 1%’. **Pennar** admitted that its peers passed on the steel rise faster than it did, and its building unit lost more than two points of margin in Q1. **M&B** turns down work rather than cut prices: its hit rate is 12–15% against about 20% at peers, and its management says ‘I will not run after orders just to make my hit rate 20% by letting go of my margins.’ **My view: this is a tonnage business; the best makers protect margins by walking away from bad orders, not by charging more.**",
                },
                {
                    label: 'Growing: approvals to sell abroad',
                    text: "**M&B**'s two plants are certified by the American Institute of Steel Construction, which US buyers require; exports rose 156% to ₹166cr in FY26, ₹278cr of its order book is for export, and it says export orders normally earn an operating margin of 16–17% (about 15% at today's freight) against about 11% at home. **Pennar** owns a US steel-building business with three plants, where a robotic welding line cut the welding crew on a product from 20–30 people to two; its US order book passed US$100m. **Interarch** has agreed with Canada's ER Steel to build an export-only joist plant from about July 2027, aiming at a 20% margin. **My view: the best margins in steel buildings are abroad, and M&B and Pennar are ahead; the risk is US trade policy.**",
                },
                {
                    label: 'Solar contracting: scale without margin',
                    text: "**Sterling and Wilson** says it built about 15% of India's utility-scale solar in FY26 and wins 25–28% of what it bids for; NTPC and Adani Green (under a five-year framework) come back, and it prices supplies back-to-back with its vendors. But its gross margin is 8–10%, and management concedes that ‘some of the new entrants have gone aggressive’. The sticky part is maintenance: 2–3-year contracts at 20–25% gross margin on 18.3 GWp of plants, with revenue guided to rise from ₹268cr to ₹400–450cr. **Solarworld** claims profit margins of about 10.5% on its contracting work, ‘amongst the best in the industry’, but its module and battery plants are new and not yet profitable. **My view: scale wins the orders, but only maintenance and specialist overseas work earn a margin worth owning.**",
                },
                {
                    label: 'Farm pumps: distribution and a subsidy scheme',
                    text: "**GK Energy** has 18 years of rural networks, its own warehouses and vehicles, and says it can install more than 15,000 systems a month. It fixes supplier prices on day one for 3–6 months of supply: ‘We are happy to have 1% less profit, but we want to [be] clear what we are going to earn.’ That discipline is why its margin is the highest here. But CARE flags ‘intense competition’ and the tender-driven nature of the work, and price per pump is falling. **My view: the moat is execution in Maharashtra's villages; the scheme, not GK, owns the customer and sets the price.**",
                },
                {
                    label: 'Who else competes',
                    text: "The four steel-building makers compete with each other and are all adding capacity at once. In solar and batteries, road builders elsewhere on this page, such as H.G. Infra, Ceigall, Dilip Buildcon and GR Infraprojects, have entered to fill their order books. Building contractors bid for data-centre work too, and EPack lost its first two turnkey data-centre bids in Q1. **The market for plain sheds and plain solar parks is crowded; the markets for heavy steel frames, export buildings and plant maintenance are not.**",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three patterns: steel-building margins that sit around 10% and move with steel, solar-contracting margins that are thin by design, and a part of reported profit that comes from forex, tax and other income rather than from the business.",
                "Whether profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: steel buildings earn about 10%',
                    text: "**Interarch**'s filed quarterly margin has moved between about 6% and 11% for 13 quarters, and it guides 9.5–10% for FY28; CRISIL expects 9–10%. **EPack** has run at 9–12% for nine quarters and targets 10.5–11.5% in the long run. **M&B** earned 13.6% in FY25 (company figure) but 11.4% in Q1 FY27, and CRISIL expects 10.5–11.5%. **Pennar**'s group margin is 9–11%, held down by about ₹1,300cr a year of legacy steel and rail revenue that is being run down. **My view: these are 10% businesses, and new plants add cost before revenue. Price them for volume growth, not margin expansion.**",
                },
                {
                    label: 'Structural: solar contractors keep a thin slice',
                    text: "**Sterling and Wilson** earned a 10.5% gross margin in FY26 and 9.9% in Q1, with international work at 13.2%; it guides 8–10% gross and 4–5% EBITDA, and its overheads were flat at ₹349cr. **Solarworld** guides 8–11% and filed 6.6% in Q1 on a small quarter. **GK Energy** is the exception: 16–19% filed, because subsidy schemes pay installers better and it owns no plant. Its own margin fell from 20.4% in FY26 to 17.05% in Q1 (company figures), and CARE would consider a downgrade below 12%. **My view: in solar contracting the margin is set by the job, not the company; only maintenance and farm pumps earn well, and the farm-pump margin is falling.**",
                },
                {
                    label: 'Cyclical: steel and freight',
                    text: "The hot-rolled steel index rose about 12% in the two quarters to Q1 FY27. **EPack** lost about one point, from 10.5% to 9.4%, and says new orders are booked at current prices so the impact is ‘now behind us’. **Pennar**'s building unit lost more than two points for ‘a month or 2’ before price clauses caught up; management asks investors to ‘see this as a momentary blip’. **Interarch**'s margin fell from 10.5% in Q4 to 8.5% in Q1, partly because Q1 is a weak season. **My view: H2 should be better if steel stays where it is; another rise would cut margins again, because fixed-price order books take months to work through.**",
                },
                {
                    label: 'Not structural: forex, tax and other income',
                    text: "**Sterling and Wilson**'s Q1 EBITDA of ₹96cr included forex gains; its own ‘operational EBITDA’ was ₹78cr (4.9%), and Q1 profit rose 36% partly on a lower tax rate. **Pennar**'s reported EBITDA includes other income such as forex gains, write-backs and investment gains, which management calls recurring. **Interarch**'s Q1 profit was flat on 21% more revenue because its treasury income fell as the cash went into plants. **Solarworld**'s dispute adjudication board awarded about ₹40cr on two SJVN projects against ₹219.3cr claimed; the company carries ₹51.5cr of it as fully recoverable. **My view: compare these companies on filed operating margin and cash, not on the headline EBITDA each one quotes.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**M&B** holds 175 days of inventory and its filed cash cycle is 137 days. **Pennar** holds 176 days of inventory, is ‘deliberately stocking a little more raw material’, says some debtors ‘are stuck’, and its 93-day cash cycle sits just inside CARE's 95-day trigger. **GK Energy**'s debtors are state subsidy schemes that take four months or more to pay. **Sterling and Wilson** has about ₹392cr of receivables more than a year old, ₹145cr of them more than three years old, and carries ₹548cr of bank guarantees it says were wrongly invoked as recoverable, with no provision.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Interarch**'s working capital rose from 21 days in FY24 to 56 in FY26, as big projects were billed but not collected and it paid steel mills in advance. **Solarworld**'s borrowings rose from ₹115cr to ₹255cr in FY26 and its operating cash was −₹50cr despite ₹120cr of profit. **M&B**'s filed FY26 operating cash of −₹31cr counted ₹121cr of IPO deposits as operating spending; corrected, it was about +₹90cr. **Sterling and Wilson**'s negative working capital, which means suppliers and customer advances fund it, shrank from −₹407cr to −₹260cr in two quarters, so it is using more of its own cash.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**EPack** runs a 26-day cash cycle because it pays suppliers in about 143 days, turned 85% of FY26 operating profit into cash and cut borrowings to ₹115cr. **Interarch** says it was ‘back to positive’ in Q1. **GK Energy**'s interest cost halved to ₹5cr a quarter as IPO money replaced bank loans. **Judge each against its own history: the steel-building makers need steel stock and wait for customers; the solar contractors live on supplier credit and advances.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['M & B Engineer.', 'Capex about ₹27cr in Q1 (Sanand expansion, two roofing units, 2.5 MW of solar); ₹146.69cr of ₹259.32cr IPO money used; ₹30cr heavy-steel line approved', 'Borrowings ₹84cr (FY26); Screener net cash ₹195cr; CRISIL A/Stable (Aug 2026)'],
                        ['EPack Prefab Techno.', 'FY27 capex about ₹150cr for three plants, plus ₹75cr earmarked for a data-centre products unit; ‘heading towards becoming a debt-free company’', 'Borrowings ₹115cr (FY26); Screener net cash ₹171cr; guarantees ₹212.4cr (bank) and ₹140.3cr (corporate); ICRA A+'],
                        ['Interarch Building', 'Capex ₹230–240cr since April 2024; QIP of about ₹250cr planned for heavy-steel phases 2–3, a second Gujarat plant and the Canada unit; cash ‘back to positive’', 'Borrowings ₹18cr; Screener net cash ₹63cr; CRISIL A/Stable (Apr 2026)'],
                        ['GK Energy', 'IPO money funds working capital; Q1 interest ₹5cr against ₹10–11cr; spending on the battery project not yet disclosed', 'Net cash ₹240.6cr (company, FY26); borrowings ₹203cr; CARE BBB+/Stable'],
                        ['Pennar Industries', 'Debt to equity to stay at or below 0.7 (‘anything higher than 0.7 is something that we will not accept’); working capital 82 → 75 days (May call); ₹20cr of ₹50.4cr promoter warrant money received', 'Borrowings ₹1,162cr (from ₹812cr); cash about ₹206cr; Screener net debt ₹892cr; CARE A/Stable'],
                        ['Sterling and Wilson', 'Gross debt down about ₹130cr in Q1 on term-loan repayments; net debt ‘largely stable’; more than ₹3,200cr of new bank lines; ₹120–130cr of indemnity money expected in FY27', 'Borrowings ₹1,191cr (FY26); Screener net debt ₹657cr; Infomerics BBB+/Negative, liquidity ‘stretched’'],
                        ['Solarworld Energy So', 'No Q1 call; board proposes moving IPO money into a 50:50 cell joint venture (shareholder vote at the 30 September 2026 AGM; result not yet filed)', 'Borrowings ₹255cr (FY26, from ₹115cr); Screener net cash ₹317cr; net worth ₹844.8cr; CRISIL A-/Stable'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Solarworld’s row uses its Q1 presentation and stock-exchange filings.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth could come from, how each company did against what it promised on its Q4 FY26 call, and my own estimate of earnings growth. In this group, growth in revenue is the easy part; the question is whether it comes with margin and cash.",
            ],
            points: [
                {
                    label: 'Growth driver: new plants arriving in FY27',
                    text: "**Interarch** reached 245,000 tonnes when its Andhra Pradesh heavy-steel plant began commercial production on 24 September, and two more phases follow by December 2027. **EPack** adds a sandwich-panel line at Ghiloth in October–November and a 50,000-tonne plant in Gujarat by about Q3 FY27, and sees peak revenue of ₹2,700–2,900cr once all are full, against ₹1,525cr in FY26. **M&B** adds 20,000 tonnes at Sanand in October and more at Cheyyar by Q3 FY28, and targets 85,000–90,000 tonnes of output in FY27 against 72,000. **Pennar** is starting a car-body plant for Hyundai that should double that unit's revenue. **My view: capacity will not hold these companies back for long; filling it at a 10% margin while rivals add capacity too is the test.**",
                },
                {
                    label: 'Growth driver: utility solar and battery orders',
                    text: "**Sterling and Wilson**'s order book is a record of about ₹13,000cr, up from ₹11,813cr in March, after FY26 orders of ₹10,062cr (+43%). It includes a 1 GW solar and battery project in Egypt worth about US$560m, shared 50:50 with Hassan Allam, and its bid pipeline is 27.7 GW. **Solarworld**'s ₹2,727.5cr book is ₹1,588.6cr of solar and ₹1,138.9cr of battery work. **GK Energy** won a 150 MW / 300 MWh battery project from the Maharashtra power distributor on 21 September that pays monthly for 15 years, about ₹42.8cr a year. **My view: orders are plentiful, but a record book has not meant record revenue at Sterling and Wilson or Solarworld, because big projects start late.**",
                },
                {
                    label: 'Growth driver: PM-KUSUM 2.0 and farm schemes',
                    text: "**GK Energy** grew revenue 40% to ₹1,533cr in FY26 and installed 24,118 systems in Q1 against 10,827 a year earlier. Management says Q1 is normally 15–20% of the year's volume and Q4 35–40%, so the year is back-ended by design. But the plan to double revenue rests on PM-KUSUM 2.0 and new phases of Maharashtra's Magel Tyala, and the order book was only ₹541cr at the Q1 call. **My view: I assume the scheme arrives, but later and at lower prices than management hopes; if it slips into FY28, FY27 profit could fall.**",
                },
                {
                    label: 'Growth driver: exports and the US',
                    text: "**M&B** grew exports 156% to ₹166cr in FY26, has ₹278cr of export orders, and has dispatched about 28% of a large US order. **Pennar**'s US order book passed US$100m from US$63m in one quarter, though its hydraulics exports are on ‘wait-and-watch’ because of US tariffs. **Sterling and Wilson**'s international work earned a 13.2% gross margin in FY26 against 10.5% overall. **My view: exports are the best route to higher margins in this group, but they add freight, currency and US tariff risk that domestic work does not carry.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Interarch** said its FY26 projections were ‘crossed’ (revenue +30.6%), grew 21% in Q1, kept its FY27 guide of ₹2,150–2,200cr and raised FY28 from ₹2,500cr to ₹2,700cr. **EPack** feared a two-point margin hit from steel and took one, booked a record ₹580cr of orders, and made its FY27 guide explicit at ₹1,900–1,950cr; its management says ‘every commitment that we made while going for the IPO has been met’.",
                },
                {
                    label: 'Cautious',
                    text: "**M&B** withheld margin guidance for another quarter because of freight and cost uncertainty. **Interarch**'s managing director would not promise better margins this year because new plants carry costs ahead of revenue. **Pennar** gave no revenue figure, only ‘double-digit’ growth from Q2, and promised segment profit disclosure by next quarter.",
                },
                {
                    label: 'Missed',
                    text: "**Solarworld** promised about ₹1,500cr of FY26 revenue at an 11% profit margin after its IPO and delivered ₹1,376cr at 8.5%; Q1 revenue of ₹168cr was less than a tenth of the ₹1,900–2,000cr implied for FY27. **Sterling and Wilson** was ‘geared up to achieve over INR2,000 crores of revenue’ in Q1 and delivered ₹1,590cr, trimmed FY27 growth from about 15% to 10–15%, and now needs about ₹2,600–3,000cr a quarter in H2: ‘we have no option’, management said. **Pennar** missed its 5% profit-margin target for FY26 at 3.83% and now speaks of a 7% pre-tax margin in three years instead of a 7% after-tax margin by FY28–29. **GK Energy** guided about 70,000 pumps for FY26 and installed 60,000+.",
                },
                {
                    label: 'Mixed',
                    text: "**M&B** grew revenue 22.5% and nudged its FY27 guide to ‘over 25%’, but its margin fell to 11.4% and its order book dipped. **GK Energy** more than doubled installations and grew revenue 71% (company figure), but its margin fell three points and its order book shrank by a quarter. **Pennar** grew its order books to records and pre-tax profit 16%, but revenue rose only 2.9%.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect earnings growth of about 15% a year at M&B and EPack, 14% at Interarch, 10% at Pennar, 8% at GK Energy, 4% at Sterling and Wilson and 3% at Solarworld.** For the steel-building makers, volumes grow about 20% a year as new plants fill, margins stay near 10%, and profit grows more slowly than revenue as new plants add cost first, treasury income falls and Interarch issues shares. Pennar gets partway to its 7% pre-tax target. GK's range is the widest because one scheme decides its year. **My view: the steel-building makers offer steady mid-teens growth at prices that roughly match it; the solar contractors offer bigger order books, but not yet earnings you can count on.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['M & B Engineer.', 'Capacity to ~154,000t by FY28; revenue 20%+; margin near 11%; exports', '6% / **15%** / 22%'],
                        ['EPack Prefab Techno.', 'Three new plants; revenue towards ₹2,700–2,900cr; margin 10–10.5%; lower interest', '8% / **15%** / 22%'],
                        ['Interarch Building', 'Revenue ₹2,700cr in FY28; margin 9.5–10%; new shares; less treasury income', '7% / **14%** / 20%'],
                        ['Pennar Industries', 'Steel buildings and US grow, legacy steel shrinks; pre-tax margin partway to 7%; high interest', '3% / **10%** / 18%'],
                        ['GK Energy', 'PM-KUSUM 2.0 timing; price per pump; rooftop and battery income', '−10% / **8%** / 25%'],
                        ['Sterling and Wilson', 'Record book at 4–5% EBITDA; maintenance growth; legacy claims and forex', '−15% / **4%** / 15%'],
                        ['Solarworld Energy So', '₹2,727cr book; module and battery lines; cell joint venture; SJVN dispute', '−15% / **3%** / 15%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['M & B Engineer.', 'Revenue over +25% (was about 25%); 20%+ a year for 3–4 years; margin guidance withheld', 'Sanand +20,000t (Oct 2026); ₹30cr heavy line; Cheyyar +20,000t', '**Mixed**: revenue +22.5%; margin 11.4%; book dipped'],
                        ['EPack Prefab Techno.', 'Revenue ₹1,900–1,950cr; margin 10.5%; orders ₹2,000cr', 'About ₹150cr; ₹75cr data-centre unit', '**Beat**: steel cost one point, not two; record orders'],
                        ['Interarch Building', 'Revenue ₹2,150–2,200cr (kept); FY28 ₹2,700cr (was ₹2,500cr); margin 9.5–10% in FY28', 'QIP of about ₹250cr for new plants', '**Delivered**: +21%; target raised; margin 8.6%'],
                        ['GK Energy', 'Double revenue to about ₹3,000cr; profit margin about 12%; PM-KUSUM 2.0 by Q3', 'Battery project; not yet disclosed', '**Slipping**: margin 17%; book ₹710cr → ₹541cr'],
                        ['Pennar Industries', 'Double-digit growth from Q2; return on capital 25%; debt to equity ≤0.7; pre-tax margin 7% in three years', 'Hyundai car-body plant; US lines', '**Mixed**: record books; revenue +3%; target reworded'],
                        ['Sterling and Wilson', 'Revenue +10–15% (was about 15%), cut to ‘up to 10%’ in Q2; EBITDA 4–5% (about 4.5%); maintenance revenue ₹400–450cr', 'Negligible', '**Cut again**: H1 revenue −11%; order book ₹12,481cr; Reliance order still awaited'],
                        ['Solarworld Energy So', 'No update since Q4: 70–75% of the book in FY27 (about ₹1,900–2,000cr); margin 8–11%', 'Cell plant moved into a 50:50 joint venture', '**Missed**: Q1 revenue ₹168cr; no call held'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports, stock-exchange filings and rating reports rather than from the calls. Four of the seven FY26 audits (GK Energy, EPack, M&B and Pennar) carried no emphasis of matter; the other three did.",
            ],
            points: [
                {
                    label: 'Legacy claims at Sterling and Wilson',
                    text: "In FY26 a US arbitration with a sub-contractor went against the company: ₹485.64cr it had counted as recoverable was dismissed and it was ordered to pay damages, interest and costs, a ₹610.94cr charge its former owners do not cover. The standalone company lost ₹2,510cr after writing down a wholly owned subsidiary, and its auditor warns that ₹3,654.75cr of exposure to that subsidiary ‘may have an adverse effect on the functioning of the Company’. About ₹1,800cr of claims are open, and management calls another ₹3,800cr of counter-claims ‘frivolous’ without saying how much the indemnity covers. The former owners (the Shapoorji Pallonji group and the Daruvala family) cover net claims above ₹300cr, but only ₹120–130cr is expected back in FY27, and their own company is rated BBB with a Negative outlook. **My view: one bad ruling can wipe out a year's profit here, and the balance sheet has little room left.**",
                },
                {
                    label: 'Ratings, debt and pledges',
                    text: "Infomerics reaffirmed **Sterling and Wilson** at BBB+ with a Negative outlook in April, called its liquidity ‘stretched’, and put adjusted gearing at 2.87 times net worth (from 0.93) against a downgrade trigger of 3; ₹615cr of term loans fall due in FY27. Screener shows 27.6% of promoter shares pledged. **Pennar** borrowed 43% more in FY26, pays finance costs of about 4% of revenue; CARE would upgrade it only if its margin passes 10% with debt below 2.5 times operating profit. **GK Energy**'s CARE rating would come under pressure if its margin fell below 12% or its operating cycle passed 150 days.",
                },
                {
                    label: 'Tax searches and disputes',
                    text: "**Interarch**'s auditor draws attention to an income-tax search of its offices, plants and some managers' homes on 18–22 August 2025. On 15 September 2026 it received a notice opening a block assessment for 1 April 2019 to 17 October 2025, asking for explanations issue by issue for six assessment years; no demand has been raised and the company says the impact ‘cannot be ascertained at this stage’. **Solarworld**'s auditor flags its dispute with SJVN, which suspended two Gujarat projects over land problems and tried to cash ₹13.8cr of bank guarantees; the dispute board awarded about ₹40cr against ₹219.3cr claimed. **My view: none of these is yet a cash loss, but the Interarch assessment is the one to watch, because it covers six years of a company that trades on its clean growth record.**",
                },
                {
                    label: 'IPO promises and shareholders',
                    text: "Five of the seven listed between August 2024 and October 2025, and three trade well below their IPO prices: **Solarworld** about 62% below, **M&B** about 33% below and **GK Energy** about 19% below. **Solarworld**'s board voted on 7 September to move IPO money from its own 1.2 GW cell plant at Pandhurana into a 50:50 joint venture with Rays Power Infra for a 2.4 GW plant; shareholders vote on it at the AGM on 30 September 2026 (result not yet filed), and the venture's full terms were not disclosed. **M&B**'s IPO was mostly promoters selling (₹375cr of ₹650cr), and GK's promoters sold ₹64.26cr. **My view: the Solarworld change is a governance red flag; money raised for one plan is going into another company's venture within a year.**",
                },
                {
                    label: 'Scheme, client and timing concentration',
                    text: "**GK Energy** depends on state subsidy schemes, mostly in Maharashtra, and on PM-KUSUM 2.0, which has no firm date. **Solarworld**'s clients are almost all state power companies, and one of them, SJVN, is in dispute with it. **Sterling and Wilson**'s parent, Reliance, has promised an order since early 2026; it will be a related-party deal on terms not yet disclosed, and management now defers to ‘their rollout schedule’. About ₹9,000cr of its book sits in six projects that had not started by July. **My view: GK, Sterling and Wilson and Solarworld all need a second half much bigger than the first; I would not buy any of them ahead of the Q2 results.**",
                },
                {
                    label: 'Steel, modules, freight and capacity arriving together',
                    text: "Most steel-building contracts are fixed-price, so another steel rise would cut margins directly; EPack calls this out as its main risk, and M&B's domestic steel costs rose more than 20% in Q4 FY26. Solar contractors face rising module prices and imported battery cells. And all four steel-building makers are adding capacity in FY27: Interarch to 245,000 tonnes, EPack three plants, M&B heading to 154,000 tonnes, and Pennar new lines in India and the US. EPack's first panel line ran at only 25% in its first year. **My view: if private factory spending slows while this capacity arrives, price competition will be the first sign, and a one-point margin fall is a tenth of these companies' operating profit.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it charges for debt. In this group the two mostly agree, because five of the seven hold net cash after their IPOs; they part company only at Pennar and Sterling and Wilson, which carry debt.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **6% at 10–11x, 9% at 13x, 10% at 15x, 12% at 18x, 14% at 21x and 16% at 26x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|Five} of the {count:live|seven} fit my estimates and {count:full|two} are full; {count:stretched|none} is stretched. The steel-building makers are priced for roughly the mid-teens growth I expect; the solar contractors look cheap on trailing profit, but that profit is not yet dependable.**",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**GK Energy** (₹237cr net cash on Screener; ₹240.6cr on its own FY26 count), **Solarworld** (₹317cr), **M&B** (₹195cr), **EPack** (₹171cr) and **Interarch** (₹63cr) all hold net cash, so they look slightly cheaper on EV/EBITDA than on P/E. **Pennar** (₹892cr of net debt) and **Sterling and Wilson** (₹657cr, before any cost from legacy claims) look dearer. **My view: for the cash-rich IPO companies, remember the cash is spoken for: it is paying for plants and working capital.**",
                },
                {
                    label: 'Fits: the price asks for no more than I expect',
                    text: "**M&B** needs about {need:M & B Engineer.|10}% a year against my ~15%, the widest margin of safety here, with net cash and a CRISIL A rating; it was ‘wait’ for cash, but once ₹121cr of IPO deposits misfiled as operating spending are moved out, about ₹198cr of its ₹265cr of FY22–FY26 profit arrived as operating cash (75%), so it is now ‘follow’; the slipping margin and lagging orders keep it short of own. **Interarch** needs about {need:Interarch Building|14}% against my ~14%, and **EPack** about {need:EPack Prefab Techno.|16}% against ~15%: both fit, with no room for error, and Interarch stays at wait until more than half its profit arrives as cash (₹173cr of ₹427cr over FY22–FY26). **GK Energy** needs about {need:GK Energy|7}% against my ~8%, but my estimate hangs on one scheme. **Pennar** needs about {need:Pennar Industries|12}% against my ~10%; it fits only just, and management has missed its own targets before.",
                },
                {
                    label: 'Full: prices that ask a little more than I expect',
                    text: "**Sterling and Wilson** needs about {need:Sterling and Wilson|9}% a year against my ~4%. Its trailing profit comes from two good quarters after a large loss, helped by forex gains and a low tax rate, and the legacy claims could cost more. **Solarworld** needs about {need:Solarworld Energy So|6}% against my ~3%: its price has fallen about 62% since listing, but Q1 profit fell 26%, cash went out, and the IPO plan is changing. **My view: both look cheap only if you take trailing profit at face value.**",
                },
                {
                    label: 'Why the recent listings trade below their IPO prices',
                    text: "**Solarworld** (listed at ₹351), **M&B** (₹385) and **GK Energy** (₹153) all trade well below their issue prices; **EPack** (₹204) trades above. The market has marked down the companies that missed early promises (Solarworld), saw margins slip (M&B, GK) or depend on one scheme (GK). **My view: an IPO discount is not a bargain by itself; M&B is the one of the three where the business is still doing broadly what was promised, but its profit is not yet arriving as cash.**",
                },
                {
                    label: 'A check from order books',
                    text: "Order books cover about a year of revenue at the steel-building makers: Interarch's ₹1,864cr against ₹1,898cr of FY26 revenue, EPack's ~₹1,380cr against ₹1,525cr, and M&B's ₹1,053cr against ₹1,260cr. **Sterling and Wilson**'s ₹13,000cr is about 1.7 years of FY26 revenue and **Solarworld**'s ₹2,727.5cr about two years, yet Sterling and Wilson's Q1 revenue fell 10% and Solarworld's was 72% below Q4. **GK Energy**'s ₹541cr is about four months of FY26 revenue against a plan to double. **My view: the steel-building makers' books support their guidance; GK's does not, and the solar contractors' books are only as good as their start dates.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'EPack Prefab Techno.', rank: 1, stance: 'SCALEUP', segment: STEEL,
            what: "A Noida-based maker of pre-engineered steel buildings and insulated sandwich panels, with a smaller packaging-foam business, serving solar, data-centre, auto and warehouse projects; listed in October 2025.",
            view: "**The best momentum and cash in the group, at a full price.** Q1 revenue rose 24%, record bookings of ₹580cr lifted the order book to about ₹1,380cr, the steel spike cost one point of margin rather than two, FY26 operating cash was 85% of operating profit, and borrowings fell to ₹115cr. But three new plants arrive in FY27, its first panel line ran at only 25% in year one, its data-centre venture has lost its first two bids, and contracts are mostly fixed-price. The price needs about {need:EPack Prefab Techno.|16}% a year against my ~15%.",
            watch: 'Margin back to 10.5% from Q2; the Ghiloth and Gujarat plants starting on time; orders on track for ₹2,000cr in FY27.',
        },
        {
            company: 'M & B Engineer.', rank: 2, stance: 'SCALEUP', segment: STEEL,
            what: "An Ahmedabad-based maker of pre-engineered steel buildings and heavy structures (Phenix) and self-supported steel roofing built on site (Proflex), with plants at Sanand and Cheyyar and a growing US export business; listed in August 2025.",
            view: "**Clean, cheap and growing; its cash is better than the filed figures showed.** Screener shows −₹31cr of operating cash in FY26 against ₹93cr of profit, but that figure counted ₹120.81cr of IPO money placed in fixed deposits as operating spending; the company reclassified it in June 2026, which makes FY26 operating cash about +₹90cr, and management said Q1 FY27 operating cash was ‘positive and very good’. Corrected, FY22–FY26 operating cash was about ₹198cr against ₹265cr of profit (75%), though FY24 brought in only ₹5cr, and inventory is 175 days. It holds ₹195cr of net cash (from the IPO), CRISIL rates it A, its FY26 audit was clean, revenue rose 22.5% in Q1, and capacity rises to about 154,000 tonnes by Q3 FY28. But its margin has slid from 13.6% to 11.4% (company figures), management withheld margin guidance, and the order book dipped to ₹1,053cr. The price needs about {need:M & B Engineer.|10}% a year against my ~15%. **Moved from wait to follow (16 October 2026)** on the corrected cash; own needs H1 FY27 cash confirming it, the margin near 11% and orders back near ₹100cr a month.",
            watch: 'H1 FY27 operating cash positive (the first filed statement since the reclassification); margin holding near 11% in Q2; orders back at ₹100cr a month; the Sanand expansion running from October.',
        },
        {
            company: 'Interarch Building', rank: 3, stance: 'SCALEUP', segment: STEEL,
            what: "A Noida-based designer, maker and erector of pre-engineered steel buildings and heavy steel structures, the second-largest integrated capacity in India on CRISIL's count, working for Reliance, Tata, Aditya Birla and semiconductor plants.",
            view: "**A reliable grower, but less than half its profit has arrived as cash.** Operating cash was ₹173cr against ₹427cr of profit over FY22–FY26 (41%), and −₹19cr against ₹135cr in FY26. It met its guidance, grew 21% in Q1, raised its FY28 target to ₹2,700cr and lifted capacity to 245,000 tonnes. But the filed margin has stayed between about 6% and 11% for 13 quarters, a share sale of about ₹250cr is planned, and its auditor flags an income-tax search that has become a six-year block assessment. The price needs about {need:Interarch Building|14}% a year against my ~14%. Back to follow once operating cash turns positive and converts most of its profit, with the tax question settled.",
            watch: 'Operating cash positive in H1 FY27, as management says Q1 was; the block assessment closing without a large demand; revenue running at about ₹570cr a quarter to meet the FY27 guide; the QIP priced without heavy dilution.',
        },
        {
            company: 'GK Energy', rank: 4, stance: 'CYCLICAL', segment: SOLAR,
            what: "A Pune-based installer of solar water pumps for farmers under PM-KUSUM and state schemes, mainly in Maharashtra, now adding rooftop solar and battery storage; listed in September 2025.",
            view: "**High returns tied to one scheme.** It earns a filed margin of 16–19% and about 41% on capital, holds net cash, and more than doubled installations in Q1. But the plan to double revenue to about ₹3,000cr needs about ₹2,500cr in three quarters against a ₹541cr order book, price per pump is falling, its margin fell from 20.4% to 17.05% (company figures), and PM-KUSUM 2.0 has no firm date. The price needs about {need:GK Energy|7}% a year against my ~8%.",
            watch: 'A formal PM-KUSUM 2.0 launch and new Magel Tyala phases; the order book rebuilding above ₹1,000cr; margin staying above CARE’s 12% trigger.',
        },
        {
            company: 'Pennar Industries', rank: 5, stance: 'CYCLICAL', segment: STEEL,
            what: "A Hyderabad-based engineered-steel group with 14 plants: steel buildings in India and the US, precision tubes, boilers, hydraulics, car-body parts and a shrinking steel and rail business; it also owns about 45% of a solar-module venture with Zetwerk.",
            view: "**A better mix, a weaker record on promises.** Its steel-building order books are at records in India (₹1,008cr) and the US (over US$100m), gross margin and pre-tax profit rose in Q1, and it has the best five-year cash record here. But it missed its 5% profit-margin target for FY26, has reworded the next one, borrowed 43% more, its building margin lagged steel prices by more than two points, and working capital sits just inside CARE's trigger. The price needs about {need:Pennar Industries|12}% a year against my ~10%.",
            watch: 'Segment profit figures, promised for Q2; revenue growth back to double digits; debt to equity staying at or below 0.7.',
        },
        {
            company: 'Sterling and Wilson', rank: 6, stance: 'TURNAROUND', segment: SOLAR,
            what: "A solar and battery-storage contractor and plant maintainer that has built in 20 countries; Reliance New Energy owns 32.49%, and its former owners, the Shapoorji Pallonji group and the Daruvala family, still cover old claims above ₹300cr.",
            view: "**A record order book on a fragile balance sheet.** Its order book is about ₹13,000cr and maintenance is growing fast. But FY26 ended in a ₹296cr loss after a ₹611cr arbitration charge the former owners do not cover, its auditor flags ₹3,654.75cr of exposure to one subsidiary, about ₹1,800cr of claims are open, Infomerics has it on Negative outlook, 27.6% of promoter shares are pledged (Screener), Q1 revenue fell 10%, and the Reliance order keeps slipping. **28 Oct 2026:** Q2 revenue fell 13% to ₹1,527cr (operating EBITDA 3.7%, profit ₹17cr) as old overseas projects ended and eight new ones had not started; the order book slipped to ₹12,481cr, the FY27 guide became 'up to 10%' growth (from 10–15%), and management now says H2 will not reach ₹2,600cr a quarter. The Reliance order is still only 'soon'. On the plus side, a Chile claim was settled and about ₹156cr of indemnity money is expected from the former owners this year. The price needs about {need:Sterling and Wilson|9}% a year against my ~4%.",
            watch: 'H2 revenue (Q3 better than Q2, Q4 the strongest, management says); the Reliance order and its terms; indemnity cash of about ₹156cr arriving in FY27; the rating renewal.',
        },
        {
            company: 'Solarworld Energy So', rank: 7, stance: 'TURNAROUND', segment: SOLAR,
            what: "A Delhi-area contractor building solar and battery plants for state power companies, which has added a solar-module line, a battery-pack line and a junction-box venture with its IPO money; listed in September 2025.",
            view: "**A rough first year, and a change of plan.** It has a ₹3,155cr order book (30 Sep 2026 AGM presentation), net cash of ₹317cr and a CRISIL A- rating. But it missed its post-IPO revenue and margin promises, Q1 revenue fell to ₹168cr from ₹592cr in Q4, it held no Q1 call, operating cash was −₹50cr in FY26, an SJVN dispute recovered about ₹40cr of ₹219.3cr claimed, and its board wants to move IPO money into a 50:50 cell venture with another company. The price needs about {need:Solarworld Energy So|6}% a year against my ~3%. By 25 Oct 2026 the price fitted; it stays pass, because the board is pressing on with a ₹420cr cell venture (30 Sep 2026) instead of the plan shareholders funded, and there is still no quarter of positive operating cash.",
            watch: 'The result of the 30 September 2026 AGM vote on the change of IPO use (due within two working days); Q2 revenue above ₹400cr; operating cash turning positive in H1 FY27.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Steel-building makers.** **EPack Prefab: follow**; the best momentum and cash in the group, but the price already asks for about what I expect. **M&B Engineering (M & B Engineer.): follow** (moved up from wait on 16 October 2026); the cheapest and a clean audit, and its cash is better than the filed figures showed: once ₹121cr of IPO deposits counted as operating spending are moved out, about ₹198cr of operating cash against ₹265cr of profit over FY22–FY26 (75%). Own needs H1 FY27 cash confirming it, the margin near 11% and orders recovering. **Interarch: wait**; a reliable grower, but only ₹173cr of operating cash against ₹427cr of profit over FY22–FY26 (41%), with a 10% margin ceiling and an open tax assessment; back to follow once cash converts most of its profit. **Pennar Industries: wait** until segment figures show the steel-building mix is really lifting profit and management hits a target it set.",
            "**Solar, battery-storage and farm-pump contractors.** **GK Energy: wait** for PM-KUSUM 2.0 to be announced and the order book to rebuild. **Sterling and Wilson: pass** while legacy claims, a Negative rating outlook and a slipping Reliance order hang over a thin-margin business. **Solarworld: pass** after a missed first year and a plan to move IPO money into another company's venture.",
            "**What would change my view.** For the better: steel prices steadying so the makers recover their margins; M&B and EPack showing positive cash with their new plants running; PM-KUSUM 2.0 announced with funding; Sterling and Wilson winning the Reliance order on fair terms and settling legacy claims; Solarworld shareholders rejecting the change of IPO use or getting full terms. For the worse: another steel spike on fixed-price books; private factory and data-centre spending slowing while four makers add capacity; H2 guidance cuts at the solar contractors in the Q2 results; a large tax demand at Interarch; a further non-indemnified loss at Sterling and Wilson.",
            "**What to watch next quarter.** M&B's margin and orders; EPack's margin recovery and new plants; Interarch's tax assessment and run-rate; Pennar's segment figures; GK's scheme news and order book; Sterling and Wilson's H2 revenue, Reliance order and indemnity cash; Solarworld's 30 September AGM vote result and revenue.",
        ],
        bottomLine:
            "No name here is an own today. Follow EPack Prefab and M&B Engineering; wait on Interarch until its operating cash turns positive and converts most of its profit, on GK Energy for its scheme and on Pennar for proof it can hit its own targets; pass on Sterling and Wilson and Solarworld.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/SWSOLAR/consolidated/' },
        { label: 'Revenue growth of construction players to improve by 6–8% in 2026-27 — ICRA, Mar 2026', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=9dd3c3d4-668d-47a7-844a-ccc99949a6ca' },
        { label: 'Union Budget 2026-27 analysis — PRS Legislative Research, Feb 2026', url: 'https://prsindia.org/files/budget/budget_parliament/2026/Union_Budget_Analysis-2026-27.pdf' },
        { label: 'India data centres, mid-2026 — JLL', url: 'https://www.jll.com/en-in/insights/market-dynamics/india-data-centers' },
        { label: 'EPC sector faces prolonged credit stress despite FY27 recovery hopes (India Ratings) — BW Businessworld, 2026', url: 'https://www.businessworld.in/article/epc-sector-faces-prolonged-credit-stress-despite-fy27-recovery-hopes-610128' },
        { label: 'Sterling and Wilson Renewable Energy Annual Report FY26 (emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4b87ec43-9e51-4e8a-aa6e-c66a7de0154e.pdf' },
        { label: 'Sterling and Wilson Renewable Energy rating rationale (Negative outlook) — Infomerics, Apr 2026', url: 'https://www.infomerics.com/admin/uploads/PR-SterlingandWilson-Renewable-Energy27April26.pdf' },
        { label: 'Sterling and Wilson Renewable Energy Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=45ae7554-69ba-41ed-9c2d-d894cef554e2.pdf' },
        { label: 'Interarch Building Solutions Annual Report FY26 (income-tax search emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3bb38d5b-c0ce-4f2d-a4b9-bdec7a592cdd.pdf' },
        { label: 'Interarch Building Solutions rating rationale — CRISIL, Apr 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/InterarchBuildingSolutionsLimited_April%2028_%202026_RR_394476.html' },
        { label: 'Interarch Building Solutions: income-tax block assessment notice — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a8fa3097-9884-4aa3-a430-5113e8ee82ef.pdf' },
        { label: 'GK Energy rating rationale — CARE, Feb 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202602130200_GK_Energy_Limited.pdf' },
        { label: 'GK Energy Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/61b9ca0e-fb1e-40e7-8c64-ee9b71239101.pdf' },
        { label: 'GK Energy: MSEDCL battery-storage letter of award — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=faaa28af-5247-450a-a675-da9dbdd81186.pdf' },
        { label: 'EPack Prefab Technologies Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5fe87b3b-b623-42b4-9b44-6dc301b82421.pdf' },
        { label: 'EPack Prefab Technologies Q1 FY27 earnings call — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c015591d-f84e-4983-abb5-ca829e03ab27.pdf' },
        { label: 'M&B Engineering rating rationale — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/MandBEngineeringLimited_August%2031_%202026_RR_404877.html' },
        { label: 'M&B Engineering Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/ed917f88-dc14-409e-9b0e-80d0a244c006.pdf' },
        { label: 'Pennar Industries rating rationale — CARE, Mar 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202603130311_Pennar_Industries_Limited.pdf' },
        { label: 'Pennar Industries Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=08d837b0-21cd-4ff6-9508-b0ae66b76aa9.pdf' },
        { label: 'Solarworld Energy Solutions Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fceea2e3-2900-4425-9077-a4630fe96cb6.pdf' },
        { label: 'Solarworld Energy Solutions Annual Report FY26 (SJVN emphasis of matter) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3a3ca8ec-e966-4a00-8f3f-4dd9ac55e83d.pdf' },
        { label: 'Solarworld Energy Solutions: board outcome on cell joint venture and change in IPO objects — Sep 2026', url: 'https://worldsolar.in/wp-content/uploads/2026/09/Outcome-of-BM_7.09.2026.pdf' },
        { label: 'Solarworld Energy Solutions rating rationale — CRISIL, Feb 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SolarworldEnergySolutionsLimited_February%2026_%202026_RR_390338.html' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
