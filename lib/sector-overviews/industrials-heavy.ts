import { SectorOverview } from './types';
import { industrialsHeavyBusinesses } from './industrials-heavy-businesses';
import { industrialsHeavyValuationInputs } from './card-data/industrials-heavy';

// Industrials · Heavy engineering and infrastructure equipment. Built on 29 Sep 2026 from the Industrial
// Manufacturing note (Q1 FY27, written Sep 2026), when the former process-plant group was split in two: each
// company's verdict, profile, charts, valuation inputs and table rows are carried over unchanged; the group
// analysis and the ranking are new.

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CODE = 'Power, refinery and steel-plant equipment built to code';
const INFRA = 'Water, naval and cold-chain equipment';

export const industrialsHeavy: SectorOverview = {
    sector: 'Industrials',
    title: 'Heavy engineering and infrastructure equipment',
    format: 'ranked',
    businesses: industrialsHeavyBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialsHeavyValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Jash Engineering': 18,
            'DEE Development': 22,
            'Isgec Heavy Engg.': 15,
            'Shree Refrigrations': 20,
            'JNK': 15,
            'WPIL': 12,
            'John Cockerill': null,
            'ICE Make Refrig.': 10,
            'United Heat Transfer': 12,
        },
    },
    standfirst:
        "Nine companies that build heavy equipment to order for steel, power, refinery, water, defence and cold-chain projects: process piping for power plants and gas turbines (DEE), boilers, presses and process equipment (Isgec), fired heaters for refineries (JNK), steel processing lines (John Cockerill), heat exchangers (United Heat Transfer), water-control gates (Jash), engineered pumps and water projects (WPIL), naval air-conditioning (Shree Refrigerations) and cold rooms (ICE Make). **Their revenue follows project awards and execution, so a quarter tells you which orders were shipped, not how the business is doing.** This is one of the groups on the Industrials page. Power is the strongest source of demand, refinery awards are slipping because of the West Asia war, Indian water-scheme money has not been paid, the navy's fleet keeps growing, and fixed-price contracts absorbed this year's steel and freight spike. **None of the nine is a clear buy at today's prices; Jash Engineering, DEE Development and Isgec are worth following.**",
    lastUpdated: '2026-09-29',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Consolidated, except John Cockerill (standalone). Shree Refrigerations (SME) reports half-yearly: H1 and H2 FY26 sit in the Q2 and Q4 columns.',
            note: 'Operating margin excludes other income. Project businesses (JNK, Jash, John Cockerill) swing with which orders are delivered in a quarter.',
            values: {
                'Jash Engineering': [-3, 13, 11, 24, 5],
                'DEE Development': [16, 16, 17, 18, 17],
                'Shree Refrigrations': [null, 12, null, 26, null],
                'JNK': [3, 9, 13, 14, 9],
                'WPIL': [13, 19, 21, 15, 15],
                'John Cockerill': [2, 12, 10, 6, -2],
                'ICE Make Refrig.': [4, 7, 6, 8, 2],
            },
            cellNotes: {
                'ICE Make Refrig.': 'Q1 FY27: it absorbed 6–6.5 points of cost inflation to protect new dealers.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            values: {
                'Jash Engineering': [11, 13, -11, -3, 17],
                'DEE Development': [21, 39, 77, 27, 31],
                'Shree Refrigrations': [null, -2, null, 115, null],
                'JNK': [13, 72, 116, 77, 82],
                'WPIL': [4, -13, 41, -11, 32],
                'John Cockerill': [-12, 28, 41, 162, 82],
                'ICE Make Refrig.': [31, 43, 39, 42, 60],
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed. John Cockerill’s year-end moved from March to December in 2023, so its columns are approximate.',
            values: {
                'Jash Engineering': [17, 23, 25, 25, 18],
                'DEE Development': [6, 7, 10, 9, 11],
                'Shree Refrigrations': [17, 13, 25, 18, 14],
                'JNK': [76, 53, 46, 15, 17],
                'WPIL': [19, 24, 20, 16, 15],
                'John Cockerill': [9, 10, 14, -2, 11],
                'ICE Make Refrig.': [17, 37, 34, 21, 12],
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
            note: 'Project and defence suppliers carry long cycles by nature; the warning is a cycle rising while growth slows (WPIL, DEE).',
            values: {
                'Jash Engineering': [170, 255, 270, 229, 251],
                'DEE Development': [416, 407, 323, 637, 486],
                'Shree Refrigrations': [414, 534, 474, 583, 377],
                'JNK': [203, 212, 113, 162, 57],
                'WPIL': [14, -12, 67, 127, 246],
                'John Cockerill': [29, -179, -106, -1, -66],
                'ICE Make Refrig.': [100, 64, 71, 69, 89],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Blank where operating profit was negative, tiny or not comparable.',
            values: {
                'Jash Engineering': [30, 53, 59, 43, 55, 49],
                'DEE Development': [99, 19, 94, -91, 10, 15],
                'Shree Refrigrations': [null, -33, -20, -93, 42, -21],
                'JNK': [63, 29, -10, -138, -2, -6],
                'WPIL': [55, 70, -30, -51, -29, -2],
                'John Cockerill': [null, null, null, null, null, null],
                'ICE Make Refrig.': [57, 75, 24, 70, -24, 35],
            },
            cellNotes: {
                'WPIL': 'FY24–FY26: state treasuries have not paid ₹300–350cr owed under the rural water scheme.',
                'John Cockerill': 'Operating profit was tiny or negative in most years, so the ratio is not meaningful.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all filed years.',
            note: 'Acquisitions are not included.',
            values: {
                'Jash Engineering': [0.3, 4.5, 6.6, 1.4, 2.6, 3.0],
                'DEE Development': [8.9, -7.6, -3.9, -34.1, -14.9, -12.8],
                'Shree Refrigrations': [null, -9.1, -8.0, -33.2, -6.7, -14.1],
                'JNK': [4.7, 3.2, -3.8, -15.3, -1.3, -3.0],
                'WPIL': [7.6, 9.2, -8.0, -10.5, -8.0, -2.9],
                'John Cockerill': [13.8, null, null, -19.8, 42.7, 11.6],
                'ICE Make Refrig.': [1.9, 6.5, -6.1, -10.9, -7.6, -5.0],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit.',
            note: 'Below zero means more cash than debt.',
            values: {
                'Jash Engineering': [1.2, 0.8, -0.2, -0.0, 0.1],
                'DEE Development': [3.9, 4.5, 3.9, 3.6, 3.5],
                'Shree Refrigrations': [4.3, 4.2, 1.5, 1.4, -0.6],
                'JNK': [-0.2, -0.0, 0.4, -3.6, -1.2],
                'WPIL': [0.5, -0.0, -1.4, 0.1, -0.1],
                'John Cockerill': [-13.2, null, null, null, -9.6],
                'ICE Make Refrig.': [0.6, -0.2, 0.4, 1.9, 3.4],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all filed years.',
            note: 'DEE built capacity ahead of demand; returns rise as its Anjar plant fills.',
            values: {
                'Jash Engineering': [3.5, 4.0, 4.7, 6.1, 5.0, 4.9],
                'DEE Development': [5.6, 9.9, 17.0, 19.8, 16.6, 15.0],
                'Shree Refrigrations': [null, 1.2, 1.8, 7.9, 15.8, 8.9],
                'JNK': [6.8, 1.7, 1.7, 1.7, 1.1, 2.1],
                'WPIL': [2.1, 2.5, 2.6, 2.2, 3.0, 2.5],
                'John Cockerill': [0.8, null, null, 2.8, 1.7, 1.7],
                'ICE Make Refrig.': [2.0, 1.2, 8.7, 17.2, 6.0, 8.0],
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
            note: 'Higher means more sales from each rupee of plant. JNK outsources much of its production.',
            values: {
                'Jash Engineering': [3.3, 3.5, 4.1, 4.3, 3.5],
                'DEE Development': [1.3, 1.6, 1.9, 2.0, 1.7],
                'Shree Refrigrations': [7.5, 4.2, 6.7, 5.5, 7.0],
                'JNK': [14.8, 19.4, 20.9, 16.4, 17.1],
                'WPIL': [2.8, 3.4, 3.8, 3.6, 2.8],
                'John Cockerill': [9.7, null, null, 6.8, 6.3],
                'ICE Make Refrig.': [6.4, 9.8, 7.6, 3.6, 4.8],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Qualification', description: 'Codes, stamps, vendor codes, licensor, nuclear or naval approvals that take years.' },
            { key: 'tech', label: 'Owns the technology', description: 'Owns the design, recipe or process rather than licensing it or building to print.' },
            { key: 'after', label: 'Aftermarket and repeat', description: 'Wear parts, spares, service or recurring volumes from customers’ own production.' },
            { key: 'pass', label: 'Cost pass-through', description: 'A = passes cost rises on quickly; D = fixed-price contracts that absorb them.' },
            { key: 'price', label: 'Pricing power', description: 'A = raised prices this year without losing customers; D = prices falling.' },
        ],
        rows: [
            { company: 'Jash Engineering', trend: 'widening', trendNote: '69% of the order book now export; plants in Houston and Saudi Arabia.',
                grades: { qual: { grade: 'B', note: 'Municipal water approvals' }, tech: { grade: 'A', note: 'Designs its own gates and screens' }, after: { grade: 'C', note: 'Project-based' }, pass: { grade: 'B', note: 'Negotiated contracts' }, price: { grade: 'A', note: 'About two-thirds of India’s niche' } } },
            { company: 'DEE Development', trend: 'widening', trendNote: 'Thailand plant booked three years out; new seamless pipe plant.',
                grades: { qual: { grade: 'A', note: 'Approved by GE, Siemens, Nooter/Eriksen' }, tech: { grade: 'C', note: 'Builds to customer design' }, after: { grade: 'B', note: 'Repeat gas-turbine work' }, pass: { grade: 'C', note: 'Fixed price' }, price: { grade: 'B', note: '16–18% margins' } } },
            { company: 'Isgec Heavy Engg.', trend: 'stable', trendNote: 'Manufacturing holds a 12–13% margin and exports doubled; the Philippine ethanol plant still loses money.',
                grades: { qual: { grade: 'B', note: 'Boiler, process and sugar-plant approvals; customers in 99 countries' }, tech: { grade: 'B', note: 'Licensed technologies (Hitachi Zosen and others)' }, after: { grade: 'C', note: 'New services division; small O&M base' }, pass: { grade: 'B', note: 'Back-to-back supplier orders plus contingency' }, price: { grade: 'C', note: 'Projects earn about 5%' } } },
            { company: 'Shree Refrigrations', trend: 'widening', trendNote: 'Fleet growing from 150 toward 230 ships; near-100% retrofit wins.',
                grades: { qual: { grade: 'A', note: 'Registered with all three naval directorates' }, tech: { grade: 'B', note: 'Indigenised submarine air-conditioning' }, after: { grade: 'B', note: 'Spares fell from 30% to 7% of sales' }, pass: { grade: 'B', note: 'Defence contracts' }, price: { grade: 'B', note: 'About 64% share' } } },
            { company: 'JNK', trend: 'narrowing', trendNote: 'Korean parent’s cooperation agreement lapsed; a licensor cancelled an export order.',
                grades: { qual: { grade: 'B', note: 'Refinery licensor pre-qualification' }, tech: { grade: 'C', note: 'Parent holds the qualification' }, after: { grade: 'C', note: 'Project-based' }, pass: { grade: 'C', note: 'Fixed price' }, price: { grade: 'C', note: 'Tendered' } } },
            { company: 'WPIL', trend: 'stable', trendNote: 'International arm strong; Indian scheme payments stuck.',
                grades: { qual: { grade: 'B', note: 'Engineered-pump approvals' }, tech: { grade: 'B', note: 'Own pump designs' }, after: { grade: 'C', note: 'Project-based' }, pass: { grade: 'C', note: 'Government projects' }, price: { grade: 'C', note: 'Tendered' } } },
            { company: 'John Cockerill', trend: 'narrowing', trendNote: 'Technology held by the Belgian parent, which has been selling shares.',
                grades: { qual: { grade: 'B', note: 'Steel-plant equipment' }, tech: { grade: 'D', note: 'Parent owns the technology' }, after: { grade: 'C', note: 'Three steel customers' }, pass: { grade: 'C', note: 'Project pricing' }, price: { grade: 'D', note: 'Loss-making at the operating level' } } },
            { company: 'ICE Make Refrig.', trend: 'narrowing', trendNote: 'Absorbed cost inflation to hold dealers; margin guide cut.',
                grades: { qual: { grade: 'C', note: 'Standard cold-chain approvals' }, tech: { grade: 'C', note: 'Japanese partner will own the JV technology' }, after: { grade: 'C', note: 'Dealer service' }, pass: { grade: 'D', note: 'Raised 11% against 15–18% cost inflation' }, price: { grade: 'D', note: 'Buying share' } } },
            { company: 'United Heat Transfer', trend: 'stable', trendNote: 'A Vertiv data-centre trial order, but revenue has been flat for three years.',
                grades: { qual: { grade: 'B', note: 'ASME U and R stamps, CE-PED' }, tech: { grade: 'C', note: 'Builds to customer designs' }, after: { grade: 'C', note: 'OEM supply and projects' }, pass: { grade: 'C', note: 'Escalation only on scheduled supply' }, price: { grade: 'C', note: 'Tiny next to its rivals' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Nothing in this group is a clear buy at today's prices; Jash Engineering is the one I would follow most closely, with DEE Development and Isgec behind it.** **Jash** holds about two-thirds of India's water-gate niche and has 69% of a ₹932cr order book abroad, and it kept its FY27 guidance of ₹875cr of revenue and ₹100–105cr of profit after a weak Q1. The catch is that Q1 profit was essentially a ₹5.6cr US tariff refund, its US arm Rodney Hunt lost money, its Indian process unit lost ₹150–200cr of orders, FY26 revenue was flat on US tariffs, and a 100% US tariff is now threatened. The price needs about {need:Jash Engineering|21}% a year against my ~18% (cut from 20% on 24 Oct: management's own target of ₹1,500cr of revenue by FY31 at a 12–13% profit margin works out to about 18% a year from today's profit, before the cost of the new US and Saudi plants), so it no longer fits; I keep follow until Q2 shows the second half arriving. **DEE Development** has its capacity built, a ₹2,428cr book and global heat-recovery boiler makers reserving its capacity, but a second qualified audit opinion, ₹718cr of net debt at June and ₹447cr of free cash burned over FY25–FY26, which a ₹300cr issue of new shares is now paying down; the price needs about {need:DEE Development|27}% a year against my ~22%. **Isgec** has an engineering core that is earning well and a Philippine ethanol plant that lost ₹295cr in FY26, whose holding company carries a going-concern doubt; the group's return on equity is only 4%. It is not in the live table.",
                "**Wait on three and avoid three.** **Shree Refrigerations** (naval air-conditioning) must show a steadier first half, with three shipyards giving about 69% of revenue, cash tied up for about 370 days on its own count (377 on Screener's) and a price that already asks more than I expect; **JNK** must refill a shrinking order book after an export order was cancelled because the licensor had not approved it, after trimming guidance and three years of negative operating cash; and **WPIL** must collect ₹300–350cr from state treasuries, while about 40% of its Q1 profit belonged to minority partners. **Avoid John Cockerill, ICE Make and United Heat Transfer**: John Cockerill's group lost money in the June quarter while the newest technology stays with its Belgian parent; ICE Make cut its margin guide for the third time, changed its depreciation method in the same quarter and issued ₹190cr of new shares (about 15% dilution); United Heat Transfer's revenue has been flat for three years while its price has run on one trial order.",
                "**Three things to hold onto before reading the rest.** First, **the moat here is a code stamp, an approval or a registration, and it protects the place in the queue, not the price**: almost every contract is fixed-price, so this year's steel and freight spike landed on the makers. Second, **check the cash**: five of the seven companies in the charts burned cash over the five years shown (all but Jash and John Cockerill), because project, government and defence buyers pay long after the profit is booked. Third, **judge FY27 by the second half**: Q1 was weak for most, DEE, JNK and Jash all need their best-ever second halves to meet guidance, and Shree and United Heat Transfer report only half-yearly, so their first test comes in November.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped into two kinds of business: power, refinery and steel-plant equipment built to code, and water, naval and cold-chain equipment. All figures are filed (Screener), consolidated except John Cockerill, whose year-end moved in 2023. Shree Refrigerations reports half-yearly. None of these companies' order books are shown as a tab because they are stated on different bases. **Start with cash conversion**: project and defence suppliers report profits long before they are paid. Hover over a starred name for its caveat.",
                "Isgec Heavy Engineering and United Heat Transfer joined the sector after the charts were built, so they are not in the grid; their figures are quoted in the text from Screener. United Heat Transfer, like Shree, reports only half-yearly.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These nine companies build heavy equipment for other people's plants and projects: power stations and gas turbines, refineries and fertiliser plants, steel mills, water and sewage works, warships and cold stores. Their demand is someone else's capital spending, much of it public or project-financed, and their revenue arrives only as orders are engineered, built and shipped. That spending is still rising, but narrowly. The RBI's September 2026 bulletin puts bank-funded private project spending at ₹3.2 lakh cr in FY27, up from ₹2.6 lakh cr, with power and other infrastructure more than half of it; ICRA counted new project announcements halving to ₹13.5 trillion in Q4 FY26, while data centres and transport hit a twelve-quarter high, and the government has budgeted ₹12.2 trillion of capex for FY27 (+11.5%). For capital goods, Crisil expects revenue to grow 12–14% in FY27 at a 12–13% margin, on order books of about ₹5.2 lakh cr, 3.7 times a year's sales, half of it now power. **My view: this is mid-cycle for power and refinery equipment (full books, delayed awards), steady for defence, strong for steel-plant lines and stuck for Indian water schemes, while exports carry Jash, WPIL and Isgec. For the group I expect about 12–15% revenue growth a year to FY29, with margins recovering 2–4 points from FY27's lows if steel and freight settle; no agency forecasts this far out.**",
            ],
            points: [
                {
                    label: 'Two kinds of business, and where the profit sits',
                    text: "**Equipment built to code** (DEE, Isgec, JNK, John Cockerill, United Heat Transfer) is made to a customer's or licensor's design and stamped to safety codes, so it is priced fixed and the maker carries the steel risk. The approval keeps rivals out: DEE says it has only one or two small domestic rivals in piping, and steel lines are sold by a handful of global suppliers. But the profit depends on who owns the design and controls material buying: DEE earns 16–18% as its new plant fills and Isgec's manufacturing holds 12–13%, while Isgec's projects earn about 5% and John Cockerill's group lost money at the operating level in the June quarter. **Water, naval and cold-chain equipment** (Jash, WPIL, Shree, ICE Make) lives on a design, a naval registration, a pump approval or a dealer network. Jash designs its own gates and Shree is the only Indian firm registered with all three naval directorates; ICE Make, which is buying share from larger rivals, printed under 2% in Q1. **My view: profit leaks wherever a company takes fixed-price construction risk, runs a new plant below capacity or waits on a government to pay.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Power is the strongest source: Crisil sees 58–62 GW of capacity added in FY27, DEE says global heat-recovery boiler makers are reserving its capacity for the US gas-turbine boom, and Isgec builds boilers and boiler parts. Refineries and fertiliser plants in India, the Gulf and Africa are ordering, but awards are slipping by quarters because of the West Asia war (“six months to a year”, says JNK). Steelmakers in India and Asia are adding coated and electrical-steel capacity, which fills John Cockerill's book, though a handful of steel groups give about 80% of its business. Water is split: abroad it is strong (Jash's book is 69% export, and WPIL's international revenue doubled in Q1 to 77% of the total), while in India the rural water scheme (Jal Jeevan Mission) built WPIL's project arm and then stopped paying it. Defence is steady: production hit a record ₹1.78 lakh cr in FY26 (+15.6%), and the navy's fleet is growing from about 150 ships toward 230, which is Shree's market. ICE Make's revenue grew 60% in Q1, but it bought that growth with margin. **My view: power, defence and export water work are real multi-year demand; data centres are still mostly a slide here (Jash's cooling vessels, Shree's chillers, United Heat Transfer's Vertiv trial).**",
                },
                {
                    label: 'The cycle, costs and policy',
                    text: "Most contracts here are fixed-price with no escalation, so the steel and freight spike after the West Asia war in March–May 2026 landed on the makers: Shree's 2–3 year naval contracts carry no escalation clause, ICE Make chose not to pass costs on, and John Cockerill's lines are priced at the order and built over two to three years. Isgec is the partial exception: it locks steel and forgings with back-to-back supplier orders plus a contingency, which is why its manufacturing margin has held. Three policies decide whole businesses. The rural water scheme left WPIL owed ₹300–350cr by state treasuries. US tariffs of 25–50% wrecked Jash's FY26, and it now faces a threatened 100% US tariff. Defence budgets set Shree's pace, and FY27's capital outlay is up 17.6%. **My view: in this group a policy decision or a contract clause can matter more than a year of execution, so each company's exposure should be judged on its own.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Jash** depends on US tariffs and Gulf shipping; **DEE** on the gas-turbine and thermal-power cycles and on clearing its auditor; **Isgec** on fixing or selling its Philippine plant; **JNK** on refinery and fertiliser awards arriving on time and on its Korean parent; **John Cockerill** on its parent's choices and a few steel groups; **WPIL** on state treasuries paying; **Shree** on naval shipbuilding; **ICE Make** on passing on costs; **United Heat Transfer** on Vertiv. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Business', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Power, refinery and steel-plant equipment built to code', 'DEE, JNK, John Cockerill', '−2% to 18%', '11–17%', '**−6% to 15%**', 'Approvals keep rivals out; fixed prices and milestone billing'],
                        ['Water, naval and cold-chain equipment', 'Jash, WPIL, Shree, ICE Make', '−3% to 26%', '12–18%', '**−21% to 49%**', 'A design, a registration or a dealer network; government buyers pay slowly'],
                    ],
                    note: 'Ranges are from the charts in section 2. Isgec (operating margin 6–11% over the last five quarters, return on capital 11%) and United Heat Transfer (12–15% by half-year, 12%) are built-to-code makers not in the charts (Screener). John Cockerill’s cash conversion is not meaningful because its operating profit was tiny or negative in most years.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Private project capex (bank-funded)', '₹2.6 lakh cr in FY26; about 89% greenfield; infrastructure over half', '**₹3.2 lakh cr in FY27**', 'RBI Bulletin, Sep 2026'],
                        ['Private corporate capex (survey)', '₹11.44 lakh cr in FY26 (provisional); 65% funded from own cash', 'Stated FY27 intentions ₹9.55 lakh cr (firms under-report; FY25 realisation 96%)', 'NSO / MoSPI, Mar 2026'],
                        ['Investment in the economy', 'Fixed investment +11.9% in Q1 FY27, 34.3% of GDP; capital-goods output +16.1% (July)', 'New project announcements volatile; private capex “subdued” in FY27', 'MoSPI; ICRA, Apr 2026'],
                        ['New project announcements', '₹13.5 trillion in Q4 FY26, half a year earlier; manufacturing ₹1.5 trillion, a seven-quarter low', 'Government capex budgeted at ₹12.2 trillion in FY27 (+11.5%)', 'ICRA Investment Tracker, Apr 2026'],
                        ['Capital goods', 'Order books about ₹5.2 lakh cr (Dec 2025), 3.7 times sales; power 50%', '**FY27 revenue +12–14%**, margin 12–13%', 'Crisil, May 2026'],
                        ['Defence', 'Production ₹1.78 lakh cr in FY26 (+15.6%); private share 24%', 'FY27 capital outlay +17.6%; ₹6.73 lakh cr of approvals in FY26', 'Ministry of Defence; PRS'],
                    ],
                    note: 'No agency publishes FY28–FY29 figures for these niches; the outlook beyond FY27 in the text is my own reading of the order books. The MoSPI growth figures were read through press summaries of the releases.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2. The test this year was simple: **when steel, freight and wages rose, who got paid for it?**",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting but fixed-price: scarce approvals',
                    text: "**DEE** is India's largest piping maker with, it says, only one or two small domestic rivals; Nooter/Eriksen has reserved 60% of its Thailand plant and Siemens has agreed a schedule of gas-turbine piping. **Shree** is the only Indian firm registered with all three naval directorates and wins about 64% of naval air-conditioning tenders. **Isgec** runs 10–11 licensed boiler technologies and has held a 12–13% manufacturing margin for three years. **United Heat Transfer** has ASME and European stamps but is tiny. **My view: approvals protect the place in the queue, not the price: almost all of these contracts are fixed.**",
                },
                {
                    label: 'Owned designs, weak buyers',
                    text: "**Jash** holds about two-thirds of India's ₹150cr gate market and is a global top-five gate maker, and now builds a 25% tariff into US quotes. **WPIL**'s engineered pumps are its own designs and carry real approvals, but its Indian project arm, paid by state governments, has no moat at all. **My view: a design earns its premium only where the buyer pays on time.**",
                },
                {
                    label: 'Borrowed: from a parent',
                    text: "**JNK**'s export heater work comes through its Korean parent, JNK Global, which is linked to about ₹1,600cr of its ₹1,961cr March book; the three-year cooperation agreement has not been formally renewed, and an ADNOC-linked order was cancelled in July because the licensor had not approved JNK. **John Cockerill** pays its Belgian parent a brand fee of 0.6% of sales plus royalties, and the parent keeps its newest technology (Volteron, electrolytic iron for green steel). **My view: a moat someone else can take back is a lease, not an asset.**",
                },
                {
                    label: 'Barely a moat: bought share',
                    text: "**ICE Make** recovered only 10–11% of a 15–18% cost rise, taking two price rises while rivals took three, to protect new dealers, and its Japanese partner will own the technology of their new venture. **A company that cannot raise prices when every cost is rising does not have pricing power, whatever its growth rate.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Thermax, L&T Heavy Engineering, Godrej and BHEL in process equipment, boilers and fabrication; SMS group, Danieli and Primetals in steel lines; Kirloskar Brothers, KSB and Flowserve in pumps; Blue Star and Voltas in refrigeration; Heurtey and European firms in fired heaters.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In a build-to-order business the margin depends on who carries the cost of steel between the quote and the delivery. This year's steel, freight and wage spike tested that, and it also exposed several profits in this group that were lifted by one-offs.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Holding: plants filling and steel bought back-to-back',
                    text: "**DEE** runs at 16–18% and guides above 19% as its Anjar plant fills from about 50%. **Isgec**'s manufacturing has held 12–13% for three years because steel and forgings are bought against back-to-back supplier orders, while its projects earn about 5%. **WPIL** guides 15–20% and sits at the bottom of that band. **My view: DEE's margin should rise with volume; Isgec's group margin depends on the Philippine plant, not on steel.**",
                },
                {
                    label: 'Cyclical: mix and seasonality',
                    text: "**Shree** fell from 31% to 21% in two years as spares dropped from 30% of revenue to 7%. **JNK** rebuilt from 3% to 14% through FY26, then fell to 9% in a seasonally small quarter. **Jash**'s margin swings with the Q4 dispatch season; its full-year margin fell from 19% in FY24 to 14% in FY26 on US tariffs and delayed shipments. **My view: Shree needs its spares back; JNK's margin depends on refilling its book.**",
                },
                {
                    label: 'Not structural: prices already lost',
                    text: "**ICE Make** printed 1.7% and a loss. **John Cockerill**'s group lost 9.1% of revenue at the operating level in the June quarter. **Treat these as today's normal, not a dip, until two quarters prove otherwise.**",
                },
                {
                    label: 'Windfalls: profits lifted by one-offs',
                    text: "**Jash**'s Q1 profit of ₹5.1cr included a ₹5.6cr US tariff refund. **ICE Make** switched to straight-line depreciation in Q1, halving the quarter's charge. **Shree** paid an unusually low 14% tax, and **WPIL**'s Q1 profit of ₹59cr included about ₹25cr belonging to minority partners. **Treat all of these as windfalls, not run-rate.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **WPIL** tied up about ₹1,150cr in customer bills and stock (Screener); its Indian receivables of ₹781cr exceed a full year of Indian sales, and bills over a year overdue tripled to about ₹289cr against a ₹10.6cr provision. **DEE** runs a 486-day cycle on Screener's count (263 days on its own) and burned ₹447cr of free cash in FY25–FY26. **Shree** runs about 370 days on its own count (377 on Screener's) because shipyards pay only after installation. **JNK** carries about ₹200cr of unbilled revenue and Crisil puts its gross current assets at about 470 days. **United Heat Transfer** runs a 284-day cycle on Screener's count.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Isgec** generated ₹765cr of operating cash in FY26 as ₹200cr-plus of retention money on pollution-control jobs came in, and cut consolidated net borrowings from ₹836cr to ₹304cr in fifteen months. **Shree** turned operating cash positive in FY26 after four negative years.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Engineered equipment, defence and project suppliers carry 200–300 days of cycle because products are built to order and paid on milestones, and government buyers pay slowly. **Judge each against its own history, not against the others**, and watch for a cycle rising while growth slows.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Jash Engineering', 'Houston (US$12m) and Saudi (US$4m) plants for March 2028; about ₹7.5cr more tariff refunds claimed', 'Borrowings ₹103cr against ₹94cr of cash (March); Ind-Ra A-'],
                        ['DEE Development', '₹300cr preferential issue in July; about ₹225cr repaid debt; “no plan for any new debt”', 'Net debt ₹718cr at June; target ₹400–425cr by March 2027'],
                        ['Isgec Heavy Engg.', '₹502cr of manufacturing capex from own cash; ₹47cr spent in Q1', 'Consolidated net borrowings ₹304cr at June (₹836cr a year before)'],
                        ['Shree Refrigrations', 'Half-yearly reporter; working capital to 325–330 days in FY27', 'Borrowings ₹37cr against ₹62cr of cash and liquid investments; CARE BBB-'],
                        ['JNK', 'Capex ₹10–15cr; no debt raising for 4–6 quarters, but bank-guarantee lines need raising', 'Cash over ₹200cr (Crisil); borrowings ₹91cr; Crisil outlook raised to stable'],
                        ['WPIL', 'No state water-scheme money received in Q1; could not give a cash balance on the call', 'Borrowings ₹502cr against about ₹525cr of cash (March); CARE A+'],
                        ['John Cockerill', 'Parent to take convertible preference shares instead of cash for the acquired businesses', 'Standalone cash fell from about ₹227cr to ₹64cr; group equity negative (−₹96cr)'],
                        ['ICE Make Refrig.', '₹190cr of new shares allotted in September; ₹40cr to repay debt, ₹58cr for capacity', 'Borrowings ₹158cr (March), to fall in H2 FY27'],
                        ['United Heat Transfer', 'Half-yearly reporter; ₹31.3cr preferential issue approved in September, ₹23cr of it for capex', 'Borrowings ₹18.9cr (March); Crisil B, issuer not cooperating'],
                    ],
                    note: 'Most companies file cash flows only half-yearly, so Q1 figures are management’s. Shree and United Heat Transfer held no Q1 FY27 results call; their figures come from filings and rating reports. John Cockerill’s quarter is April–June 2026 (it reports on a calendar year).',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 FY26 call, and my own estimate of earnings growth. In this group the order book is the best guide to the next two years, and delivery against it is the test.",
            ],
            points: [
                {
                    label: 'Growth driver: power and refinery equipment',
                    text: "**DEE** rides the US gas-turbine boom (Siemens plans about 10 units of piping next year, 15 the year after and 25–30 in the third, at €1–1.5m each) and India's thermal restart, and has pulled its ₹2,500cr revenue target forward to FY29. **Isgec** is spending ₹502cr to add about ₹1,200cr of annual revenue from FY29. **JNK**'s BPCL Bina and two cracker orders should carry FY27 revenue up 20–25%, but Gulf and African refinery awards keep slipping. **My view: the power cycle is the most bankable growth in the group; refinery awards arrive, but late.**",
                },
                {
                    label: 'Growth driver: exports and steel lines',
                    text: "**Jash** has 69% of its book abroad and is building in Houston and Saudi Arabia. **WPIL**'s international revenue doubled in Q1 to 77% of the total; South African customers pay advances and settle within about seven days. **Isgec**'s exports doubled to ₹1,169cr in FY26. **John Cockerill**'s group book is about ₹4,500cr, including about ₹1,200cr won in Q2 CY26, to be executed over about three years, and management's ₹8,000cr revenue goal for CY30 relies on new technologies and acquisitions. **My view: the fastest growers here are the ones qualified inside global supply chains, not those waiting on Indian project awards.**",
                },
                {
                    label: 'Growth driver: policy — navy and water',
                    text: "**Shree** rides a navy fleet growing from about 150 ships toward 230, guiding 40% annual growth and ₹1,000cr of revenue by FY31. **WPIL**'s Indian growth waits for the water scheme to pay. **My view: policy growth is real but arrives in lumps; I pay for it only when the money has arrived.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Isgec**'s standalone business grew 51% and cut consolidated net debt by ₹170cr in a quarter. **DEE** grew 31.6% and lifted its book to ₹2,428cr. **WPIL**'s international business nearly doubled.",
                },
                {
                    label: 'Cautious',
                    text: "**Jash** kept ₹875cr of revenue and ₹100–105cr of profit after a Q1 it called below its own expectations. **Shree** and **United Heat Transfer** report half-yearly, so there is no delivery test until November.",
                },
                {
                    label: 'Missed',
                    text: "**ICE Make** cut its margin guide for the third time. **John Cockerill** promised better margins from the next quarter and lost money. **JNK** lowered growth and margin guidance while saying nothing had changed. **WPIL** received no state money after promising it “from this quarter”.",
                },
                {
                    label: 'Mixed',
                    text: "**Isgec**'s Philippine plant ran at 65–70% with an operating loss against a promise of 85–90% and self-sufficiency, while its engineering business beat.",
                },
                {
                    label: 'My outlook',
                    text: "Demand is broad but uneven: power, naval and export supply chains are strong; Indian water schemes are stuck and refinery awards late; and fixed-price makers carry this year's cost spike into FY27 profit. **I expect DEE to compound earnings at about 22% if its plan holds, Shree at about 20%, Jash at about 18% (cut from 20% on 24 Oct: its ₹1,500cr revenue target for FY31 at a 12–13% profit margin is about 18% a year), Isgec and JNK at about 15%, WPIL and United Heat Transfer at about 12%, and ICE Make at about 10%.** I give no estimate for John Cockerill, whose group is loss-making.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['DEE Development', 'Anjar filling; gas-turbine and thermal piping; debt falling', '14% / **22%** / 30%'],
                        ['Jash Engineering', 'Water projects abroad; US and Saudi plants; tariffs; plan of ₹1,500cr revenue by FY31 at 12–13% profit margin', '12% / **18%** / 25%'],
                        ['Shree Refrigrations', 'Naval shipbuilding; spares mix', '10% / **20%** / 30%'],
                        ['Isgec Heavy Engg.', 'Exports; new capacity from FY29; Philippine losses shrinking', '8% / **15%** / 22%'],
                        ['JNK', 'BPCL Bina execution; refilling the book', '5% / **15%** / 22%'],
                        ['WPIL', 'International projects; Indian collections; minority buy-outs', '5% / **12%** / 20%'],
                        ['United Heat Transfer', 'Vertiv and exports, from a flat base', '0% / **12%** / 25%'],
                        ['ICE Make Refrig.', 'Cold chain; price rises; Galilei venture from 2028', '0% / **10%** / 20%'],
                        ['John Cockerill', 'Steel-plant orders; parent’s choices', 'Loss-making as a group; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8 (Isgec and United Heat Transfer are not in it; see there).',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Jash Engineering', 'Revenue ₹875cr; profit ₹100–105cr; FY28 about ₹1,025cr', 'Houston US$12m and Saudi US$4m by March 2028', '**Cautious**: guide kept; Q1 profit was a tariff refund; a unit lost ₹150–200cr of orders'],
                        ['DEE Development', 'Revenue at least ₹1,500cr; margin above 19%; ₹2,500cr by FY29', '₹20–30cr; possible nuclear-piping plant', '**On track**: +31.6% and a record book; margin 16.9%; GE order delayed'],
                        ['Isgec Heavy Engg.', 'Standalone +10–12% (kept); manufacturing 12–13%; projects 5–6%', '₹502cr from own cash, full benefit from FY29', '**Mixed**: standalone +51%; Philippine plant short of its promise'],
                        ['Shree Refrigrations', '40% a year for 3–5 years; margin 20–24%', 'Plant opened June 2026 as promised', '**Too early**: first half due in November'],
                        ['JNK', 'Revenue +20–25% (was 25–30%); margin 12–14% (was 14–15%)', '₹10–15cr', '**Walked back**: guides lower; book ₹1,961cr to ₹1,801cr; export order cancelled'],
                        ['WPIL', 'Margin 15–20%; no revenue figure', '“Nothing substantial”; minority buy-outs instead', '**Missed**: no state money received; margin at the bottom of the band'],
                        ['John Cockerill', 'Group margin above 10% in three years; ₹8,000cr revenue by CY30', 'Limited; acquisitions paid in shares', '**Missed**: group margin −9.1% after “improve from next quarter”'],
                        ['ICE Make Refrig.', 'Revenue ₹830–850cr; margin 6–6.5% (was 8–8.5%)', '₹58cr from the Galilei money', '**Missed**: third margin cut; Q1 margin 1.7%'],
                        ['United Heat Transfer', 'Revenue +30–35% in FY27', '₹23cr from the new share issue', '**Too early**: first half due in November'],
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
                    label: 'Fixed prices in a cost spike',
                    text: "**Shree**'s 2–3 year naval contracts carry no escalation clause, **ICE Make** chose not to pass costs on, and **Jash**, **DEE**, **JNK** and **John Cockerill** price their projects when the order is won. **Isgec** locks its steel with back-to-back supplier orders, but its long projects are exposed: management says orders it took for four years ended up lasting six. **United Heat Transfer**'s escalation clauses cover only scheduled supply. **The next spike will hit the same names.**",
                },
                {
                    label: 'Audit opinions, going concerns and related parties',
                    text: "**DEE**'s auditor qualified its opinion for a second year because it could not assess ₹47.6cr of assets at the Malwa biomass power plant, and flagged a retrospective tariff cut by Punjab's utility that is in court with no provision. **Isgec**'s Philippine holding company carries a “material uncertainty” on going concern, with a capital deficit of ₹443cr, and depends on Isgec's support. At **JNK**, 32% of votes went against related-party deals with its new Chemdist venture, whose own audit report is adverse on four points. **United Heat Transfer**'s rating is Crisil B with the company not cooperating.",
                },
                {
                    label: 'Receivables and earnings quality',
                    text: "**WPIL**'s Indian receivables exceed a year of Indian sales, bills overdue by more than a year tripled to about ₹289cr against a ₹10.6cr provision, and the company changed how it matches customer payments to bills during FY26; its group auditor also relied on other auditors for subsidiaries with about 62% of revenue. **JNK** books revenue as costs are incurred, with large unbilled balances. **Isgec**'s group tax rate is about 50%, and its reported return on equity is only 4% because of the Philippine losses.",
                },
                {
                    label: 'Debt and dilution',
                    text: "**DEE** has about ₹718cr of net debt at June and a plan to bring it to ₹400–425cr by March. New shares keep coming: **DEE** ₹300cr, **ICE Make** ₹190cr (about 13% dilution, two months after “no comment”), and **United Heat Transfer** ₹31cr at about half the market price.",
                },
                {
                    label: 'Contingent liabilities and disputes',
                    text: "**John Cockerill** faces ₹236cr of service-tax demands against a standalone net worth of ₹209cr, plus a customer's arbitration claim over a cold-rolling mill.",
                },
                {
                    label: 'Parents, partners and policy',
                    text: "**JNK** needs its Korean parent for export heaters and has no signed renewal; **John Cockerill**'s parent sold 4.6% of the shares before selling the listed company its other metals businesses; **WPIL** is barred from new bids in Madhya Pradesh; **Jash** faces a threatened 100% US tariff, and US tariffs have changed repeatedly this year.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 10x, 13% at 19x, 16% at 25x, 18–20% at 31–35x, 21% at 38x, 22% at 43x, 24% at 51x, 27% at 65x, 30% at 80x, 32% at 93–95x and 35% at 117x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Two companies are not in the live table**: Isgec and United Heat Transfer, because they joined the sector after the table's inputs were set.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**DEE** and **ICE Make** carry debt the P/E ignores, so they are dearer than they look. **JNK**, **Shree** and **John Cockerill** hold net cash. **Jash** has almost no net debt. **WPIL**'s balance sheet is roughly neutral, but its receivables are the real claim on cash.",
                },
                {
                    label: 'Full: close to the line',
                    text: "**Jash** needs about {need:Jash Engineering|22}% a year against my ~18%, **DEE** about {need:DEE Development|27}% against ~22%, **JNK** about {need:JNK|18}% against ~15% and **WPIL** about {need:WPIL|16}% against ~12%. For Jash the franchise is good and the gap had closed, but at my lower estimate it has reopened, so I follow it until Q2 confirms the guide; for DEE it is the price of a plan that must still clear its auditor; for JNK and WPIL it is orders or cash that have not yet arrived.",
                },
                {
                    label: 'Stretched',
                    text: "**Shree** needs about {need:Shree Refrigrations|28}% a year against my ~20%, a real naval niche whose price runs ahead of a first half still to be tested. **ICE Make** needs about {need:ICE Make Refrig.|32}% against ~10%: a price far ahead of what the business is delivering.",
                },
                {
                    label: 'Earnings quality: which P/Es flatter',
                    text: "The live P/E uses reported profit. **WPIL**'s includes profit that belongs to minority partners (about 40% of Q1), so the true multiple for WPIL shareholders is higher. **Jash**'s Q1 includes a tariff refund, **ICE Make**'s a gentler depreciation method and **Shree**'s a 14% tax rate.",
                },
                {
                    label: 'Not in the live table, or no check: judge these on the exchange price',
                    text: "**Isgec**: on Screener's price when this note was written (23 September) it needed about 16% a year against my ~15%, which would fit, but its reported return on equity is only 4% because of the Philippine losses. **United Heat Transfer** needed about 29% against my ~12% on the same basis, for a business whose revenue has been flat for three years. **John Cockerill** has a live P/E, but it rests on standalone profit while the group lost money, so I give no estimate and no check.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Jash Engineering', rank: 1, stance: 'SCALEUP', segment: INFRA,
            what: "Water-control gates, screens, valves and screw pumps for municipal water, sewage and flood defence, with Rodney Hunt in the US, units in the UK and Austria, and Jash Process in India.",
            view: "**A niche leader using a protected home market to build abroad, slightly dear.** About two-thirds of India's gate market and a ₹944cr book at September (69% export at August), with guidance of ₹875cr and ₹100–105cr of profit kept. But FY26 revenue was flat on US tariffs, Q1 profit was a tariff refund, Rodney Hunt lost money and Jash Process lost ₹150–200cr of orders. The price needs about {need:Jash Engineering|21}% a year against my ~18%. **The price moved into the fits band by 16 October 2026, but I keep follow until the Q2 results show the second half the ₹875cr guide needs, because Q1's profit was a refund and a 100% US tariff is still threatened.** **24 Oct 2026:** growth estimate cut from 20% to 18%, because management's own target of ₹1,500cr of revenue by FY31 at a 12–13% profit margin works out to about 18% a year, and the new US and Saudi plants add costs first; the price no longer fits.",
            watch: 'Rodney Hunt back in profit by Q2–Q3; the Q4 dispatch season delivering ₹875cr; any US tariff change.',
        },
        {
            company: 'DEE Development', rank: 2, stance: 'SCALEUP', segment: CODE,
            what: "High-pressure process piping, bends and fittings for power plants, gas turbines and refineries, from plants in India and Thailand, plus a new seamless-pipe plant and a biomass power arm.",
            view: "**Approvals, capacity built and a record book, with an audit problem attached.** Revenue +31.6% in Q1, a ₹2,531cr book at September (₹225cr of orders that month) and ₹2,500cr of revenue targeted for FY29; the ₹300cr share issue should take net debt to about ₹400–425cr by March. But free cash was −₹447cr over two years, the auditor qualified its opinion again over the Malwa power plant, and GE's order is delayed. The price needs about {need:DEE Development|27}% a year against my ~22%. **21 Oct 2026:** the price now just fits, but it stays follow: only 26% of FY26 profit arrived as cash and the audit qualification is not yet cleared.",
            watch: 'A clean audit opinion by Q3 as promised; margin moving toward 19%; net debt at ₹400–425cr by March 2027.',
        },
        {
            company: 'Isgec Heavy Engg.', rank: 3, stance: 'CYCLICAL', segment: CODE,
            what: "Process equipment, boiler parts, presses and castings, plus boiler, sugar and distillery projects, with a sugar mill in India and an ethanol plant in the Philippines.",
            view: "**A good engineering core carrying a loss-making plant.** Standalone revenue grew 51% in Q1, exports doubled to ₹1,169cr in FY26, manufacturing holds a 12–13% margin and ₹502cr of own-funded capacity adds about ₹1,200cr of revenue from FY29. But the Philippine plant lost ₹295cr in FY26 and ₹83cr in Q1, its holding company carries a going-concern doubt, and the group's tax rate is 50%. It is not in the live table; on Screener it needs about 16% a year against my ~15%.",
            watch: 'Philippine plant at 90% use with positive operating profit, or sold; standalone guidance raised at the half-year; project margins toward 5–6%.',
        },
        {
            company: 'Shree Refrigrations', rank: 4, stance: 'SCALEUP', segment: INFRA,
            what: "Air-conditioning, ventilation and refrigeration systems for naval warships and submarines, plus spares and service; listed on the SME platform and reporting half-yearly.",
            view: "**The registration is the moat; the first half is the test.** The only Indian firm cleared by all three naval directorates, about 64% of naval cooling tenders, a ₹270cr order book (company, March, repeated in September) and 40% growth guided. But three shipyards give about 69% of revenue, the cash cycle is about 370 days on its own count (377 on Screener's), spares fell to 7% of sales, and FY26 profit carried a 14% tax rate. At a P/E of about {pe:Shree Refrigrations|67} it needs about {need:Shree Refrigrations|28}% a year against my ~20%, which is {Label:Shree Refrigrations|Stretched}.",
            watch: 'H1 FY27 results in November; spares back toward 15% of sales; working capital toward 325–330 days.',
        },
        {
            company: 'JNK', rank: 5, stance: 'CYCLICAL', segment: CODE,
            what: "Fired heaters, reformers and cracking furnaces for refineries, petrochemical and fertiliser plants, plus flares and a new process-technology venture; a subsidiary of JNK Global of Korea.",
            view: "**FY27 is visible; FY28 is not.** BPCL Bina and two cracker orders should carry revenue up 20–25%. But the book fell from ₹1,961cr to ₹1,801cr, an ADNOC-linked order was cancelled because the licensor had not approved JNK, guidance was trimmed, operating cash has been negative for three years, and a third of votes went against its Chemdist related-party deals. The price needs about {need:JNK|18}% a year against my ~15%.",
            watch: 'A Dangote or fertiliser reformer award in Q2–Q3; formal renewal of the parent agreement; margin inside 12–14%; the order book at the half-year, after up to ₹100cr of flare orders in September.',
        },
        {
            company: 'WPIL', rank: 6, stance: 'CYCLICAL', segment: INFRA,
            what: "Engineered pumps and water projects in India, with larger subsidiaries in South Africa, Italy, Australia and Thailand that now earn about 77% of revenue.",
            view: "**A good international business attached to a stuck Indian one.** International revenue nearly doubled in Q1 with a ₹2,891cr international order book (₹5,270cr in all) on better terms. But India's water-scheme money (₹300–350cr) did not come, Indian receivables exceed a year of Indian sales with thin provisions, operating cash has been negative for three years, and about 40% of Q1 profit belonged to minority partners. The price needs about {need:WPIL|16}% a year against my ~12%.",
            watch: 'State water-scheme collections in Q2–Q3; receivables and provisions at the half-year; the Madhya Pradesh debarment.',
        },
        {
            company: 'John Cockerill', rank: 7, stance: 'AVOID', segment: CODE,
            what: "Steel-plant process lines (cold rolling, pickling, galvanising, colour coating) and services; the Indian arm of Belgium's John Cockerill, now holding its Chinese, German and Belgian metals businesses.",
            view: "**The valuable technology belongs to the parent.** The group book is about ₹4,600cr, but the group lost 9.1% of revenue at the operating level in the June quarter, one quarter after promising better margins; group equity is negative, service-tax demands of ₹236cr exceed standalone net worth, and the parent keeps Volteron and takes fees. The group is loss-making, so there is no growth estimate.",
            watch: 'Group operating profit turning positive in H2 CY26; a first commercial JVD order; the CESTAT tax appeal.',
        },
        {
            company: 'ICE Make Refrig.', rank: 8, stance: 'AVOID', segment: INFRA,
            what: "Cold rooms, commercial freezers, insulated panels, transport refrigeration and ammonia plants for India's cold chain.",
            view: "**Buying share, not earning it.** Revenue grew 60% in Q1, but the margin was 1.7% with a loss, margin guidance was cut for the third time, depreciation was changed in the same quarter, and ₹190cr of new shares diluted holders by about 13% two months after management would not comment on a raise. The price needs about {need:ICE Make Refrig.|32}% a year against my ~10%.",
            watch: 'H2 margin after the third price rise; operating cash turning positive; debt falling as ₹40cr of the Galilei money repays loans.',
        },
        {
            company: 'United Heat Transfer', rank: 9, stance: 'AVOID', segment: CODE,
            what: "Small Nashik maker of shell-and-tube and air-cooled heat exchangers, charge-air coolers and skids for engine and compressor makers and projects; listed on the SME platform.",
            view: "**A certified workshop priced as a data-centre story.** Revenue has grown 1% a year for three years and profit has fallen two years running, while the share price is up about 2.7 times in a year on a ₹10–20 lakh Vertiv trial order. New shares are going to financial investors at about half the market price, and Crisil rates it B with the company not cooperating. On Screener it needs about 29% a year against my ~12%.",
            watch: 'H1 FY27 growth of 30–35% as guided; repeat Vertiv orders; the rating agency receiving information again.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Power, refinery and steel-plant equipment built to code.** **DEE Development: follow.** Capacity built and a record book; the audit qualification must go. **Isgec: follow.** A strong engineering core behind a loss-making Philippine plant. **JNK: wait.** Its book and its parent relationship need refilling and renewing. **John Cockerill: avoid.** The technology belongs to the parent. **United Heat Transfer: avoid.** A flat business priced for one trial order.",
            "**Water, naval and cold-chain equipment.** **Jash: follow.** A niche leader building abroad; slightly dear and exposed to tariffs. **Shree Refrigerations (Shree Refrigrations): wait** for the first-half result; the price already asks for more than I expect. **WPIL: wait.** Needs the states to pay. **ICE Make: avoid.** Growth bought with margin and new shares.",
            "**What would change my view.** For the better: Jash's Rodney Hunt back in profit and tariffs settled; DEE's clean audit opinion and falling debt; Isgec selling or fixing the Philippine plant; JNK's parent agreement renewed and a new reformer award; state payments for WPIL; a steadier first half at Shree. For the worse: another cost spike on fixed-price contracts; refinery and fertiliser awards slipping further; a US tariff escalation hitting Jash; more new shares issued at a discount.",
            "**What to watch next quarter.** Jash's Rodney Hunt and Q4 dispatches; DEE's audit opinion; Isgec's Philippine plant; JNK's order intake; the November half-years at Shree and United Heat Transfer; WPIL's collections; John Cockerill's group operating profit; ICE Make's second-half margin.",
        ],
        bottomLine:
            "In heavy engineering and infrastructure equipment the moat is a code stamp, an approval or a registration, and it protects the place in the queue far more often than the price. Follow the genuine franchises whose prices or problems are a few points too heavy (Jash Engineering, DEE Development and Isgec); wait for orders or cash at Shree, JNK and WPIL; and avoid anyone whose technology, pricing power or cash belongs to someone else.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/PITTIENG/consolidated/' },
        { label: 'Private sector capex projected at ₹3.2 lakh cr in FY27 (RBI Bulletin) — Whalesbook, Sep 2026', url: 'https://www.whalesbook.com/news/English/economy/Indian-Private-Sector-Capex-Projected-to-Hit-indian-rupee32-Lakh-Crore-by-FY27/6ab6b2415aacb956d080c074' },
        { label: 'Forward-looking survey on private corporate capex — NSO / MoSPI, Mar 2026', url: 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1774330174046_78142a54-f875-4b7a-af1f-ce36c33bcc16_Press_Note_CAPEX_Eng.pdf' },
        { label: 'Capital formation reaches 34% of GDP in Q1 FY27 — Free Press Journal, Sep 2026', url: 'https://www.freepressjournal.in/business/government-capex-ignites-a-wider-investment-cycle-capital-formation-reaches-34-per-cent-of-gdp-in-q1' },
        { label: 'Investment Tracker — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6904' },
        { label: 'Capital goods sector may post 14% growth in FY27 (Crisil) — BizzBuzz, May 2026', url: 'https://www.bizzbuzz.news/national/indias-capital-goods-sector-may-post-14-growth-in-fy27-crisil-1391772' },
        { label: 'India’s defence production hits a record ₹1.78 lakh crore in FY26 — DD India, Jun 2026', url: 'https://ddindia.co.in/2026/06/indias-defence-production-hits-record-rs-1-78-lakh-crore-in-fy26-rajnath-singh-hails-milestone/' },
        { label: 'Defence ministry cleared ₹6.73 lakh crore of proposals in FY26 — Bharat Shakti, Sep 2026', url: 'https://bharatshakti.in/defence-ministry-clears-rs-6-73-lakh-crore-worth-of-acquisition-proposals-in-fy26/' },
        { label: 'Jal Jeevan Mission extension and funding — Business Standard', url: 'https://www.business-standard.com/india-news/jal-jeevan-mission-extension-2028-rural-tap-water-funding-cabinet-approval-126031100333_1.html' },
        { label: 'DEE Development Engineers annual report FY26 (qualified opinion) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/85a88d1b-9155-4961-86dd-7824cdd1556a.pdf' },
        { label: 'Isgec Heavy Engineering annual report FY26 (emphasis of matter) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=270f53e5-e258-4a78-b60a-f566cca4a9ee.pdf' },
        { label: 'JNK India rating rationale — Crisil, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/JNKIndiaLimited_September 23_ 2026_RR_404829.html' },
        { label: 'JNK India annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=aa93bc7a-3d09-4d88-bd2e-5094f1e8d9de.pdf' },
        { label: 'WPIL annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/c7754ccd-e930-4034-a07e-5ad14e97adee.pdf' },
        { label: 'WPIL rating rationale — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604120424_WPIL_Limited.pdf' },
        { label: 'John Cockerill India rating rationale — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604150430_John_Cockerill_India_Limited.pdf' },
        { label: 'Shree Refrigerations rating rationale — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609120909_Shree_Refrigerations_Limited.pdf' },
        { label: 'United Heat Transfer rating rationale — Crisil, Feb 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/UnitedHeatTransferLimited_February%2027_%202026_RR_388803.html' },
        { label: 'ICE Make Refrigeration Q1 FY27 earnings call — NSE', url: 'https://nsearchives.nseindia.com/corporate/ICEMAKE_24082026173929_NSEConcallTranscript240826.pdf' },
    ],
};
