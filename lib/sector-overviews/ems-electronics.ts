import { SectorOverview } from './types';
import { emsElectronicsBusinesses } from './ems-electronics-businesses';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The ranking, the metric grid and the moat table are grouped by these.
const HIGHMIX = 'High-reliability EMS: industrial, aerospace, defence';
const SCALE = 'Scale EMS building components (PCBs, chips)';
const DURABLES = 'Consumer-durable and lighting contract makers';

export const emsElectronics: SectorOverview = {
    sector: 'EMS & Electronics',
    title: 'EMS & Electronics',
    format: 'ranked',
    businesses: emsElectronicsBusinesses,
    moatCompact: true,
    standfirst:
        "Twelve Indian contract manufacturers: companies that build electronics and appliances designed or branded by someone else. Demand is strong and growth is fast, but this is a thin-margin business that needs a lot of working capital and factory spending. Over five years, eleven of the twelve spent more cash than they generated. The difference between them is who they build for: aircraft, defence and industrial customers pay for reliability and stay for years, while air-conditioner brands shop on price every season. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    takeaways: [
        "**Separate three businesses first.** High-reliability makers (Avalon, Cyient DLM, Centum, Vinyas, Aimtron) build complex, low-volume products for aircraft, trains, defence and factories, where approvals take years and customers rarely switch. Scale makers (Syrma, Kaynes, Sahasra) build high volumes across sectors and are now investing in circuit boards and chip packaging. Consumer-durable makers (Amber, PG Electroplast, Virtuoso, IKIO) build air conditioners, washing machines and lights for brands that change suppliers on price.",
        "**Almost nobody produces free cash.** Over FY22–FY26, only Centum generated more cash than it spent on its factories (₹86cr). Kaynes spent ₹3,288cr more than it made, PG Electroplast ₹1,653cr, Amber ₹826cr and Syrma ₹619cr. Kaynes turned negative ₹600cr of operating cash in FY26 alone, because ₹1,311cr is owed to it by state electricity boards for smart meters.",
        "**The component crisis is real.** Bare circuit-board prices have tripled in places and some chips have one-year lead times (Kaynes, IKIO). Every company is holding extra stock to keep customers' lines running. That protects revenue but ties up more cash, and passing on the higher cost lowers percentage margins even when rupee profit per unit holds (Syrma).",
        "**Growth is genuine.** Syrma grew 67% in Q1, Avalon 50%, Kaynes 40% and Cyient DLM 34%. Exports are rising as global customers look beyond China: Avalon, Cyient DLM, Vinyas and Centum earn half or more of revenue abroad.",
        "**Nearly everything is priced for perfection.** Eleven of the twelve trade above 65 times earnings, which needs 27–36% earnings growth a year for ten years. Only IKIO (35x, needs ~20%) is priced for ordinary success. Syrma is the one where my estimate comes closest to what the price needs.",
    ],

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results, operating profit ÷ sales. Consolidated, except Centum and Vinyas (standalone).',
            note: 'Aimtron, Vinyas and Sahasra (SME platforms) report half-yearly: H1 and H2 FY26 sit in the Q2 and Q4 columns.',
            values: {
                'Avalon Tech': [9, 10, 11, 12, 12],
                'Cyient DLM': [9, 10, 9, 12, 10],
                'Centum Electronics': [14, 12, 11, 13, 11],
                'Vinyas Innovativ': [null, 10, null, 13, null],
                'Aimtron': [null, 24, null, 20, null],
                'Syrma SGS Tech.': [9, 10, 13, 12, 10],
                'Kaynes Technology': [17, 16, 15, 16, 16],
                'Sahasra Electronic': [null, 18, null, 10, null],
                'Amber Enterprises': [7, 5, 8, 7, 8],
                'PG Electroplast': [8, 5, 8, 7, 7],
                'Virtuoso Optoelectro': [10, 10, 12, 9, 9],
                'IKIO Technologies': [9, 11, 15, 16, 13],
            },
            cellNotes: {
                'Syrma SGS Tech.': 'Q1 FY27: more consumer work in the mix, and passing on higher component costs lowers the percentage margin even when rupee profit holds.',
                'Centum Electronics': 'Standalone (continuing business). Its French subsidiary was exited in June 2026.',
                'PG Electroplast': 'Paid a fixed fee per unit, so rising copper and aluminium prices shrink the percentage margin even when profit per unit is stable.',
                'Aimtron': 'Half-yearly, consolidated. FY26 includes two months of the US business it bought (AIC), which earns about 11%.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Blank where a comparable period is not filed. Virtuoso began filing consolidated results in FY25.',
            values: {
                'Avalon Tech': [62, 39, 49, 40, 50],
                'Cyient DLM': [8, -20, -32, -14, 35],
                'Centum Electronics': [39, 23, 27, 26, 11],
                'Vinyas Innovativ': [null, 41, null, 22, null],
                'Aimtron': [null, 112, null, 75, null],
                'Syrma SGS Tech.': [-19, 38, 45, 59, 68],
                'Kaynes Technology': [34, 58, 22, 26, 41],
                'Sahasra Electronic': [null, 33, null, 56, null],
                'Amber Enterprises': [44, -2, 38, 10, 13],
                'PG Electroplast': [14, -2, 46, -10, 35],
                'Virtuoso Optoelectro': [null, null, null, 32, 85],
                'IKIO Technologies': [-6, 31, 20, 47, 41],
            },
            cellNotes: {
                'Kaynes Technology': 'Q1 FY27: core EMS grew about 48%; smart-meter sales fell 12% because the company slowed supplies until state utilities pay.',
                'Cyient DLM': 'FY26 revenue fell as large programmes ended; growth returned in Q4 FY26.',
                'PG Electroplast': 'Air-conditioner sales swing with the summer: a weak season in 2025, a strong one in 2026.',
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios: return on capital employed. Consolidated, except Centum, Aimtron, Vinyas, Virtuoso and Sahasra (standalone, for five comparable years).',
            note: 'Returns fell at IKIO, Kaynes and PG Electroplast after they raised equity and built plants that are not yet full.',
            values: {
                'Avalon Tech': [24, 17, 6, 13, 19],
                'Cyient DLM': [null, null, 14, 11, 10],
                'Centum Electronics': [8, 11, 16, 17, 19],
                'Vinyas Innovativ': [11, 18, 19, 16, 19],
                'Aimtron': [-6, 45, 34, 29, 29],
                'Syrma SGS Tech.': [16, 15, 10, 12, 17],
                'Kaynes Technology': [25, 22, 15, 14, 13],
                'Sahasra Electronic': [null, null, 64, 8, 10],
                'Amber Enterprises': [8, 11, 10, 14, 10],
                'PG Electroplast': [13, 17, 19, 19, 10],
                'Virtuoso Optoelectro': [19, 18, 13, 12, 10],
                'IKIO Technologies': [41, 31, 22, 8, 9],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios: debtor days + inventory days − payable days.',
            note: 'Consumer-durable makers run short cycles because brands pay quickly; defence and aerospace makers carry long ones because programmes take years.',
            values: {
                'Avalon Tech': [152, 187, 223, 182, 160],
                'Cyient DLM': [null, 150, 131, 189, 270],
                'Centum Electronics': [320, 244, 252, 272, 227],
                'Vinyas Innovativ': [217, 173, 193, 216, 232],
                'Aimtron': [194, 296, 257, 161, 241],
                'Syrma SGS Tech.': [99, 95, 76, 52, 48],
                'Kaynes Technology': [148, 162, 123, 102, 193],
                'Sahasra Electronic': [null, 365, 121, 166, 199],
                'Amber Enterprises': [25, 17, -3, 27, 53],
                'PG Electroplast': [78, 67, 57, 68, 69],
                'Virtuoso Optoelectro': [86, 96, 70, 65, 70],
                'IKIO Technologies': [226, 227, 241, 225, 253],
            },
            cellNotes: {
                'Kaynes Technology': 'Understates the problem: most of the ₹1,311cr owed for smart meters sits in long-term receivables outside this ratio.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss: cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Negative means the business consumed cash while reporting a profit. Blank where operating profit was negative or not filed.',
            values: {
                'Avalon Tech': [16, -12, 27, 22, 33, 18],
                'Cyient DLM': [null, 61, -64, -45, 43, -5],
                'Centum Electronics': [158, 39, 106, -20, 23, 45],
                'Vinyas Innovativ': [100, 57, -88, 22, -52, -17],
                'Aimtron': [null, -36, 29, -56, -4, -10],
                'Syrma SGS Tech.': [-10, -36, -54, 54, 53, 20],
                'Kaynes Technology': [22, -25, 34, -20, -104, -41],
                'Sahasra Electronic': [null, null, 14, 0, -74, -11],
                'Amber Enterprises': [87, 76, 197, 97, 28, 89],
                'PG Electroplast': [-105, 26, 72, -16, 18, 11],
                'Virtuoso Optoelectro': [110, -29, 27, 165, 4, 50],
                'IKIO Technologies': [-19, 73, -5, 58, 21, 23],
            },
            cellNotes: {
                'Amber Enterprises': 'High because brands pay quickly and suppliers give credit; the cash then goes into factories and acquisitions (free cash −₹826cr over five years).',
                'Kaynes Technology': 'FY26: −₹600cr of operating cash on ₹578cr of operating profit, mostly unpaid smart-meter bills.',
                'Cyient DLM': 'Four years (FY23–FY26).',
                'Sahasra Electronic': 'Three years (FY24–FY26).',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Approvals and certifications', description: 'Aerospace, defence, medical, rail and automotive approvals that take years to earn.' },
            { key: 'design', label: 'Own design', description: 'Designs products for customers (ODM or build-to-spec) rather than only building to their drawings.' },
            { key: 'scale', label: 'Scale and capacity', description: 'Size, capacity and purchasing power.' },
            { key: 'cust', label: 'Customer spread and stickiness', description: 'Many customers on long programmes, rather than a few brands that re-tender every season.' },
            { key: 'price', label: 'Cost pass-through', description: 'A = passes on component and metal costs quickly; D = fixed prices or long lags.' },
        ],
        rows: [
            { company: 'Avalon Tech', trend: 'widening', trendNote: 'Box-build now 60% of sales; new semiconductor-equipment, HVDC and Kavach programmes starting.',
                grades: { qual: { grade: 'A', note: 'Rail, aerospace and semiconductor-equipment approvals' }, design: { grade: 'C', note: 'Builds to customer designs' }, scale: { grade: 'B', note: '₹1,600cr; plants in India and the US' }, cust: { grade: 'A', note: 'Long programmes across five sectors' }, price: { grade: 'B', note: 'Gross margin held at 33–35%' } } },
            { company: 'Cyient DLM', trend: 'stable', trendNote: 'Record order book and growth back, but still recovering from a lost large customer.',
                grades: { qual: { grade: 'A', note: 'Aerospace (Nadcap) and US defence approvals' }, design: { grade: 'B', note: 'Build-to-spec designs with the Cyient group' }, scale: { grade: 'C', note: '₹1,300cr' }, cust: { grade: 'B', note: 'Honeywell, Thales; aerospace 42% of sales' }, price: { grade: 'B', note: 'Engineered work, cost-plus' } } },
            { company: 'Centum Electronics', trend: 'widening', trendNote: 'Defence and space order book up 40%; loss-making France business exited.',
                grades: { qual: { grade: 'A', note: 'Defence, space and radar programmes' }, design: { grade: 'A', note: 'Designs its own defence and space systems' }, scale: { grade: 'C', note: '₹973cr standalone' }, cust: { grade: 'B', note: 'DRDO, ISRO, HAL and global OEMs' }, price: { grade: 'B', note: 'Negotiated, not all tendered' } } },
            { company: 'Vinyas Innovativ', trend: 'widening', trendNote: 'Nadcap accreditation; Israeli defence joint venture; US subsidiary.',
                grades: { qual: { grade: 'A', note: 'Nadcap, defence and aerospace approvals' }, design: { grade: 'C', note: 'Mainly builds to print' }, scale: { grade: 'C', note: '₹518cr' }, cust: { grade: 'C', note: 'Defence is 85–90% of the order book' }, price: { grade: 'B', note: 'Defence contracts protect input costs' } } },
            { company: 'Aimtron', trend: 'widening', trendNote: 'Moving into design-led box-build; bought a US maker of rugged electronics.',
                grades: { qual: { grade: 'B', note: 'Aerospace, auto and medical certifications' }, design: { grade: 'B', note: 'In-house design team; 80 ready platforms' }, scale: { grade: 'D', note: '₹301cr' }, cust: { grade: 'C', note: 'One US data-centre customer is large' }, price: { grade: 'B', note: 'Passes costs on with a lag' } } },
            { company: 'Syrma SGS Tech.', trend: 'widening', trendNote: 'Exports +61% and own-design sales doubled in Q1; circuit-board plant from April 2027.',
                grades: { qual: { grade: 'B', note: 'Medical, auto and rail approvals' }, design: { grade: 'B', note: 'Own-design sales 17% of revenue' }, scale: { grade: 'A', note: '₹4,800cr; 18 new clients in Q1' }, cust: { grade: 'B', note: 'Top 10 customers 51% of sales' }, price: { grade: 'B', note: 'Passes component costs through' } } },
            { company: 'Kaynes Technology', trend: 'narrowing', trendNote: 'Core EMS strong, but smart-meter bills unpaid and new chip and board plants not yet earning.',
                grades: { qual: { grade: 'A', note: 'Auto, aerospace, rail and defence approvals' }, design: { grade: 'B', note: 'Own smart meters and product designs' }, scale: { grade: 'A', note: '₹3,600cr; eight plants' }, cust: { grade: 'B', note: 'Siemens, Mahindra and new EV and aerospace customers' }, price: { grade: 'C', note: 'Smart meters are fixed-price tenders' } } },
            { company: 'Sahasra Electronic', trend: 'stable', trendNote: 'Memory-chip packaging growing; merger with promoter-owned companies pending.',
                grades: { qual: { grade: 'C', note: 'Industrial and export approvals' }, design: { grade: 'C', note: 'Builds to customer designs' }, scale: { grade: 'D', note: '₹138cr' }, cust: { grade: 'C', note: '110 customers; 92% repeat business' }, price: { grade: 'C', note: 'Memory prices volatile' } } },
            { company: 'Amber Enterprises', trend: 'stable', trendNote: 'Electronics growing 29–40%; entering phones with Oppo; circuit-board plants coming.',
                grades: { qual: { grade: 'B', note: 'Railway and metro approvals (Sidwal)' }, design: { grade: 'B', note: 'Designs air conditioners for brands' }, scale: { grade: 'A', note: "India's largest AC contract maker" }, cust: { grade: 'C', note: 'A handful of AC brands' }, price: { grade: 'B', note: 'Passes costs on a quarter later' } } },
            { company: 'PG Electroplast', trend: 'stable', trendNote: 'Adding compressors and refrigerators; brands are under price pressure.',
                grades: { qual: { grade: 'C', note: 'Standard appliance approvals' }, design: { grade: 'B', note: 'Designs ACs and washing machines for brands' }, scale: { grade: 'A', note: 'Large AC and washing-machine capacity' }, cust: { grade: 'C', note: 'A few appliance brands' }, price: { grade: 'C', note: 'Fixed fee per unit; costs lag' } } },
            { company: 'Virtuoso Optoelectro', trend: 'stable', trendNote: 'Diversifying beyond Voltas; compressor plant ahead of schedule.',
                grades: { qual: { grade: 'C', note: 'Standard appliance approvals' }, design: { grade: 'C', note: 'Recently started designing ACs' }, scale: { grade: 'C', note: '₹835cr' }, cust: { grade: 'D', note: 'Voltas was over 60% of AC sales last year' }, price: { grade: 'C', note: 'Passes costs on with a lag' } } },
            { company: 'IKIO Technologies', trend: 'stable', trendNote: 'Less reliance on one home-lighting customer; new wearables and car-lighting lines.',
                grades: { qual: { grade: 'C', note: 'Lighting and electronics approvals' }, design: { grade: 'B', note: 'Designs its products; 3,000+ SKUs' }, scale: { grade: 'C', note: '₹595cr' }, cust: { grade: 'B', note: 'Home-lighting work down from ~60% to ~27% of sales' }, price: { grade: 'C', note: 'Spot buying in shortages hurts margin' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation and key takeaways',
            body: [
                "Ranked by attractiveness at today's price: durability of the advantage, whether profit turns into cash, governance, and what the price assumes. What each company does is explained in Tab 2.",
            ],
            embed: 'ranking',
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "Five views of the twelve companies, grouped by business. All figures are filed (Screener). Most are consolidated; Centum is standalone because its French business has been exited, and the SME-listed companies use standalone annual figures to get five comparable years. Aimtron, Vinyas and Sahasra report half-yearly. Hover over a starred name for its caveat. **Start with cash conversion**: this sector grows fast, but most of it does not yet pay for itself.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "An EMS (electronics manufacturing services) company builds electronics for another company's brand: circuit boards, control units, complete boxes, and in some cases whole appliances. It earns a thin fee on top of expensive components, so revenue is large, margins are small, and a lot of money is tied up in parts and unpaid bills.",
            ],
            points: [
                {
                    label: 'Where the demand is coming from',
                    text: "**Global customers moving work out of China** (Avalon, Cyient DLM, Syrma exports +61% in Q1). **Defence and space indigenisation** (Centum, Vinyas). **Rising electronic content** in cars, EVs, factories, medical devices and data-centre power and cooling. **Appliances**: India's air-conditioner market grows 10–15% a year and brands increasingly outsource. India's electronics consumption is about $185bn and could reach $300bn by FY30 (Amber).",
                },
                {
                    label: 'Two very different kinds of customer',
                    text: "**Aircraft, defence, rail, medical and industrial makers** order small volumes of complex products, take one to three years to approve a supplier, and then keep it for the life of the programme. **Consumer brands** (air conditioners, phones, lights) order huge volumes, pay a fixed fee per unit, and re-tender often. The first group earns 10–25% margins with long cash cycles; the second earns 5–9% with short ones.",
                },
                {
                    label: 'The component crisis',
                    text: "Circuit-board laminate, memory chips and some semiconductors are scarce, partly because AI data centres are absorbing supply. Kaynes says bare-board prices tripled and board suppliers now demand advance payment; IKIO waited seven months for one chip. Most contracts pass costs through, but with a lag of one to two quarters.",
                },
                {
                    label: 'Policy',
                    text: "Production incentives (PLI) for appliances are ending; a new scheme for electronic components (ECMS) and semiconductor mission 2.0 (ISM 2.0) are driving circuit-board and chip-packaging plants at Syrma, Kaynes, Amber and Sahasra. Import restrictions on compressors from April 2027 are pulling PG Electroplast and Virtuoso into making them.",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures (FY22–FY26)',
                    columns: ['Business', 'Who', 'Operating margin', 'Return on capital', 'Five-year cash conversion'],
                    rows: [
                        ['High-reliability EMS', 'Avalon, Cyient DLM, Centum, Vinyas, Aimtron', '9–24% (quarterly)', '6–45%', '**−17% to 45%**'],
                        ['Scale EMS building components', 'Syrma, Kaynes, Sahasra', '9–18%', '8–64%', '**−41% to 20%**'],
                        ['Consumer durables and lighting', 'Amber, PG Electroplast, Virtuoso, IKIO', '5–16%', '8–41%', '**11–89%**'],
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
                    label: 'Strongest: long programmes with hard approvals',
                    text: "**Centum** designs its own defence and space systems. **Avalon** and **Cyient DLM** are qualified with aircraft, rail and semiconductor-equipment makers; as Cyient DLM put it, aerospace is 'very difficult to get into, but once you are in, you are in'.",
                },
                {
                    label: 'Middle: scale plus a design edge',
                    text: "**Syrma** and **Kaynes** combine scale with their own designs and many customers. **Amber** is the largest air-conditioner contract maker and is moving into electronics and circuit boards.",
                },
                {
                    label: 'Weakest: few customers and fixed fees',
                    text: "**Virtuoso** relied on Voltas for over 60% of its air-conditioner sales last year. **PG Electroplast** is paid a fixed fee per unit by a few brands. **Sahasra** is small and in a volatile memory market.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Dixon Technologies (the largest Indian EMS company), L&T (which has entered EMS), Foxconn, Flex, Jabil, Tata Electronics, Epack Durable, and Southeast Asian EMS firms in Malaysia and Vietnam.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "An EMS margin lasts if the product is complex and the customer values reliability over price. It is fragile if the product is standard and the fee is fixed per unit. In either case, passing on higher component costs lowers the percentage margin, so look at rupee profit per unit too.",
            ],
            points: [
                {
                    label: 'High and holding: design-led and defence',
                    text: "**Aimtron** earns about 20–22% by designing products; **Kaynes** 15–16%; **Centum** 11–14%, with its defence systems business targeting 20%+. **Avalon** has held gross margin at 33–35% while growing 50%.",
                },
                {
                    label: 'Low by nature: appliances',
                    text: "**Amber** 5–8%, **PG Electroplast** 7–8% (it aims for 8% this year), **Virtuoso** 9–10% with a 2.5–3% net margin. **PG Electroplast** explains that its fee per unit is fixed, so higher copper prices shrink the percentage.",
                },
                {
                    label: 'Squeezed this quarter',
                    text: "**IKIO's** gross margin fell from 44–45% to 41% as it bought chips at spot prices. **Syrma's** margin fell to 10% on a heavier consumer mix. **Kaynes** warns the next quarter will be harder.",
                },
                {
                    label: 'Cash tells a different story from margins',
                    text: "Five-year conversion of operating profit into cash: **Amber 89%, Virtuoso 50%, Centum 45%, IKIO 23%, Syrma 20%, Avalon 18%, PG Electroplast 11%.** Kaynes, Vinyas, Aimtron, Sahasra and Cyient DLM consumed cash. **The high-margin companies are the worst converters**, because their products take longest to build and get paid for.",
                },
            ],
            tables: [
                {
                    caption: 'Operating profit (EBITDA) versus operating cash, FY22–FY26 (₹cr)',
                    columns: ['Company', 'Operating profit, 5 yrs', 'Operating cash, 5 yrs', 'Cash ÷ profit', 'Free cash after capex, 5 yrs', 'Net profit, 5 yrs', 'FY26: profit → cash'],
                    rows: [
                        ['Amber Enterprises', '2,792', '2,478', '**89%**', '−826', '891', '865 → 240'],
                        ['Kaynes Technology', '1,516', '−615', '**negative**', '−3,288', '977', '578 → −600'],
                        ['Syrma SGS Tech.', '1,393', '274', '**20%**', '−619', '856', '546 → 290'],
                        ['PG Electroplast', '1,385', '148', '**11%**', '−1,653', '734', '387 → 70'],
                        ['Avalon Tech', '562', '102', '**18%**', '−78', '323', '173 → 57'],
                        ['Cyient DLM (FY23–26)', '463', '−25', '**negative**', '−161', '234', '127 → 54'],
                        ['Centum Electronics (s)', '399', '181', '**45%**', '86', '3', '121 → 28'],
                        ['IKIO Technologies', '386', '88', '**23%**', '−198', '236', '78 → 16'],
                        ['Virtuoso Optoelectro (s)', '241', '120', '**50%**', '−247', '51', '81 → 3'],
                        ['Vinyas Innovativ (s)', '168', '−28', '**negative**', '−98', '73', '61 → −32'],
                        ['Aimtron (s)', '132', '−13', '**negative**', '−58', '89', '55 → −2'],
                        ['Sahasra Electronic (s, FY24–26)', '65', '−7', '**negative**', '−31', '61', '19 → −14'],
                    ],
                    note: 'Filed annual accounts (Screener); (s) = standalone. Free cash = operating cash minus capex. Centum’s five-year net profit includes a ₹117cr FY26 write-off of its French subsidiary. Amber’s and Kaynes’s acquisitions are not included in capex.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "What each company guides and is spending, then my own estimate of earnings growth over three to five years.",
            ],
            points: [
                {
                    label: 'High-reliability makers',
                    text: "**Avalon** raised FY27 guidance to 26–30% and targets ₹3,200cr by FY29 (double FY26). **Centum** guides about 25% with margins above 13%. **Vinyas** guides 25–30% with an order book 2.5 times revenue. **Aimtron** targets 40–50% a year toward ₹1,000cr. **Cyient DLM** gives no number but expects a 1.5x book-to-bill.",
                },
                {
                    label: 'Scale makers and their component bets',
                    text: "**Syrma** guides 35%+ for FY27 and 30–35% for two to three years after, and is building a ₹400cr circuit-board plant for April 2027. **Kaynes** targets twice market growth and ₹450–500cr from its new chip-packaging and board plants in FY27, having spent about ₹1,200cr on them. **Sahasra** targets ₹275–300cr after merging promoter companies.",
                },
                {
                    label: 'Consumer-durable makers',
                    text: "**Amber** guides electronics +40% and air conditioners +13–15%, is entering phones with Oppo, and plans ₹4,200cr of circuit-board plants. **PG Electroplast** expects 25–30% growth in FY27–28 from washing machines, refrigerators and compressors. **Virtuoso** guides 35–40%. **IKIO** guides 18–20%.",
                },
                {
                    label: 'My outlook',
                    text: "India's EMS industry should grow 20–30% a year for several years. But growth needs working capital and plants, and several companies are raising equity (Syrma's enabling resolution, Amber's Iljin raise of up to ₹5,000cr, Vinyas's ₹150cr). **I expect the high-reliability makers to keep their margins, and the consumer-durable makers to grow revenue faster than value.**",
                },
            ],
            tables: [
                {
                    caption: 'Guidance, order books and track record',
                    columns: ['Company', 'Guidance', 'Order book', 'Track record'],
                    rows: [
                        ['Avalon Tech', '+26–30% FY27; ₹3,200cr by FY29', '₹2,208cr (14 months)', '**Beat**: doubled revenue a year early'],
                        ['Cyient DLM', 'No number; 1.5x book-to-bill', '₹2,599cr (record)', '**Recovering** after FY26 fall'],
                        ['Centum Electronics', '~25%; margin above 13%', '₹1,800cr (+31%)', '**Q1 below plan**'],
                        ['Vinyas Innovativ', '+25–30%; EBITDA 11–12%', '₹1,309cr', '**Delivered** FY26'],
                        ['Aimtron', '40–50% a year; ₹450–550cr FY27', '~₹600cr', '**Delivered** FY26 (+89%)'],
                        ['Syrma SGS Tech.', '35%+ FY27; EBITDA 10.5–11%', '₹6,770cr', '**Beat**: Q1 +67%'],
                        ['Kaynes Technology', '2x market growth; new plants ₹450–500cr', '~₹8,900cr', '**Missed**: cash and metering'],
                        ['Sahasra Electronic', '₹275–300cr after merger', '₹69cr', '**Slower** than planned'],
                        ['Amber Enterprises', 'Electronics +40%; ACs +13–15%', 'Not published', '**Mixed**: ₹123cr one-off loss in Q1'],
                        ['PG Electroplast', 'No guidance; 8% margin aspiration', 'Not published', '**Stopped** giving guidance'],
                        ['Virtuoso Optoelectro', '+35–40%; EBITDA 9–10%', 'Not published', '**Delivered** Q1 (+89%)'],
                        ['IKIO Technologies', '+18–20%; EBITDA 13–14%', 'Not published', '**Recovering**'],
                    ],
                },
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high', 'Price needs'],
                    rows: [
                        ['Syrma SGS Tech.', 'Exports, own designs, circuit boards', '20% / **28%** / 35%', '~31.5%'],
                        ['Avalon Tech', 'Box-build, semiconductor equipment, exports', '20% / **27%** / 34%', '~36%'],
                        ['Centum Electronics', 'Defence and space systems; semiconductor equipment', '15% / **24%** / 32%', '~31%'],
                        ['Vinyas Innovativ', 'Defence order book; exports', '15% / **24%** / 32%', '~27.5%'],
                        ['IKIO Technologies', 'New lighting and electronics lines; margin recovery', '8% / **18%** / 28%', '~20%'],
                        ['Aimtron', 'Design-led box-build; US acquisition', '15% / **28%** / 40%', '~31%'],
                        ['Cyient DLM', 'Aerospace ramp-ups from a low base', '12% / **25%** / 35%', '~31.5%'],
                        ['Kaynes Technology', 'EMS growth; chip and board plants', '5% / **20%** / 35%', '~28%'],
                        ['PG Electroplast', 'Washing machines, refrigerators, compressors', '12% / **22%** / 30%', '~29%'],
                        ['Amber Enterprises', 'Electronics and circuit boards; phones', '12% / **22%** / 30%', '~35.5%'],
                        ['Virtuoso Optoelectro', 'ACs and compressors', '10% / **25%** / 35%', '~33%'],
                        ['Sahasra Electronic', 'Memory packaging; merger', '5% / **20%** / 35%', '~28%'],
                    ],
                    note: 'My own judgement, not guidance. Earnings, not revenue: several companies will grow revenue faster than profit as they pass on component costs.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "Sector-wide risks first, then each company.",
            ],
            points: [
                {
                    label: 'Components and working capital',
                    text: "Longer lead times force more stock; higher prices inflate receivables. Syrma borrowed ₹340cr in one quarter for inventory; Kaynes added ₹177cr of stock; Cyient DLM's cycle rose to 161 days.",
                },
                {
                    label: 'Customer concentration',
                    text: "Virtuoso (Voltas), Vinyas (defence), Aimtron (one US data-centre customer), Cyient DLM (a few aerospace primes), and the appliance makers generally depend on a handful of buyers.",
                },
                {
                    label: 'Capital intensity and dilution',
                    text: "Circuit-board and chip plants cost hundreds or thousands of crores and take years to fill. Several companies are raising equity or debt: Amber (net debt ₹1,225cr), Virtuoso (debt at mid-teens interest), Vinyas, Syrma (enabling resolution).",
                },
                {
                    label: 'Governance',
                    text: "Sahasra is merging promoter-owned companies into the listed one. Kaynes's metering receivables and disclosure were criticised by investors. Vinyas's promoter owns only 30%.",
                },
            ],
            tables: [
                {
                    caption: 'Company-specific risks and how management handled them',
                    columns: ['Company', 'Key risk', 'Addressed on the call', 'Avoided or unresolved'],
                    rows: [
                        ['Avalon Tech', 'Valuation; US plant losses', 'US loss narrowed to ₹4cr a quarter', 'Clean-energy exposure to US subsidies'],
                        ['Cyient DLM', 'Working capital; lumpy programmes', 'Inventory as a leading indicator', '**No numbers on AI and robotics plans**'],
                        ['Centum Electronics', 'Lumpy defence revenue', 'France exit; no further liabilities', 'Q1 BTS revenue below plan'],
                        ['Vinyas Innovativ', 'Defence concentration; Israeli supply', 'Israel is 10–15% of supplies', '**Promoter owns 30%**'],
                        ['Aimtron', 'Negative cash flow; SME reporting', 'Main-board move planned', '**Cash flow positive only near ₹1,000cr**'],
                        ['Syrma SGS Tech.', 'Inventory build; consumer mix', 'War-room on components; net cash ₹122cr', 'Semiconductor partner not yet found'],
                        ['Kaynes Technology', 'Metering receivables; new plants', 'Stopped supplies until paid; ₹200cr collected in July', '**Divestment of metering undecided**'],
                        ['Sahasra Electronic', 'Related-party merger; cash burn', 'Merger ratios disclosed', '**Operating cash negative until FY28**'],
                        ['Amber Enterprises', 'Debt; Iljin fire; low returns', 'Fire insured', '**Adjusted minority interest not quantified**'],
                        ['PG Electroplast', 'AC seasonality; brand price war', 'Diversifying into washing machines and fridges', '**No guidance or order book**'],
                        ['Virtuoso Optoelectro', 'Voltas dependence; thin net margin', 'Largest customer falling toward 35%', 'Funding for phase 2 of compressors'],
                        ['IKIO Technologies', 'Chip shortages; idle capacity', 'Redesigning around scarce parts', 'Asset turns back to pre-IPO only in 3–3.5 years'],
                    ],
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **20% at 35x, 27.5% at 66x, 29% at 73x, 31% at 85–90x, 33% at 99x and 36% at 121–124x.** The chart shows return on capital against the P/E.",
            ],
            embed: 'scatter',
            embedFirst: true,
            points: [
                {
                    label: 'Closest to fair',
                    text: "**Syrma** (89.5x; needs ~31.5%, I expect ~28%; net cash and improving cash flow). **IKIO** (35x; needs ~20%, I expect ~18%; but returns have fallen to 9%).",
                },
                {
                    label: 'Full',
                    text: "**Vinyas** (66x; needs ~27.5%, I expect ~24%), **Centum** (88x; needs ~31%, I expect ~24%), **Aimtron** (85x; needs ~31%, I expect ~28%), **Cyient DLM** (90x; needs ~31.5%, I expect ~25%).",
                },
                {
                    label: 'Stretched',
                    text: "**Avalon** (124x; needs ~36%, I expect ~27%): the best business here at the fullest price. **Kaynes** (67x; needs ~28%) with unresolved cash problems. **PG Electroplast** (73x; needs ~29%) on 10% returns.",
                },
                {
                    label: 'Hard to justify',
                    text: "**Amber** (121x; needs ~35.5%) on 10% returns and ₹1,225cr of net debt. **Virtuoso** (99x) on a 2.5–3% net margin. **Sahasra** (68.5x) on 6–10% returns and a related-party merger.",
                },
            ],
            tables: [
                {
                    caption: 'What the price assumes',
                    columns: ['Company', 'P/E', 'Return on capital (5-yr range)', 'Growth the price needs', 'My estimate', 'Verdict'],
                    rows: [
                        ['Syrma SGS Tech.', '89.5', '10–17%', '~31.5%', '~28%', '**Full, closest to fair**'],
                        ['Avalon Tech', '124', '6–24%', '~36%', '~27%', '**Stretched**'],
                        ['Centum Electronics', '88.0', '8–19%', '~31%', '~24%', '**Full**'],
                        ['Vinyas Innovativ', '65.9', '11–19%', '~27.5%', '~24%', '**Full**'],
                        ['IKIO Technologies', '34.7', '8–41%', '~20%', '~18%', '**Fair**'],
                        ['Aimtron', '85.4', '29–45%', '~31%', '~28%', '**Full**'],
                        ['Cyient DLM', '89.9', '10–14%', '~31.5%', '~25%', '**Full**'],
                        ['Kaynes Technology', '66.8', '13–25%', '~28%', '~20%', '**Stretched on cash**'],
                        ['PG Electroplast', '73.3', '10–19%', '~29%', '~22%', '**Stretched**'],
                        ['Amber Enterprises', '121', '8–14%', '~35.5%', '~22%', '**Hard to justify**'],
                        ['Virtuoso Optoelectro', '99.0', '10–19%', '~33%', '~25%', '**Hard to justify**'],
                        ['Sahasra Electronic', '68.5', '6–64%', '~28%', '~20%', '**Hard to justify**'],
                    ],
                    note: 'P/E from Screener on 23 September 2026 (Centum standalone, as its French business has been exited).',
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'Syrma SGS Tech.', rank: 1, stance: 'SCALEUP', segment: SCALE,
            what: "Diversified EMS company building electronics for consumer, automotive, industrial, medical and IT customers, with a growing own-design business and a circuit-board plant under construction.",
            view: "**The best balance of growth, cash and price here.** Revenue grew 67% in Q1, exports 61% and own-design sales doubled. Operating cash has been positive for two years after three negative ones, and it holds net cash of ₹122cr. At 89.5x it needs ~31.5% against my ~28%, closer than any peer.",
            watch: 'Inventory unwinding by year-end; the circuit-board plant from April 2027; consumer mix staying near 30%.',
        },
        {
            company: 'Avalon Tech', rank: 2, stance: 'PRICED', segment: HIGHMIX,
            what: "Chennai-based maker of complex boxes and circuit boards for rail, aerospace, industrial, clean-energy storage and semiconductor-equipment customers, with plants in India and the US.",
            view: "**The best-run business in the sector, at the fullest price.** Eight quarters of improvement, return on capital up to 23%, working capital down to 117 days and positive operating cash. It raised guidance to 26–30%. But only 18% of five-year profit became cash, and at 124x it needs ~36% a year.",
            watch: 'Semiconductor-equipment and HVDC ramp-ups; US plant breakeven; cash conversion.',
        },
        {
            company: 'Centum Electronics', rank: 3, stance: 'PRICED', segment: HIGHMIX,
            what: "Bengaluru maker of defence, space and radar electronics to its own designs (28% of sales), plus contract manufacturing for global industrial and semiconductor-equipment customers (72%).",
            view: "**Cleaner after exiting France, with real design skill.** It has left the loss-making French business, its order book is ₹1,800cr (+31%) and its defence and space business is growing. It is the only company here with positive five-year free cash. But Q1 was slow and at 88x it needs ~31% against my ~24%.",
            watch: 'Defence systems revenue ramping in H2; semiconductor-equipment sales doubling; margin above 13%.',
        },
        {
            company: 'Vinyas Innovativ', rank: 4, stance: 'SCALEUP', segment: HIGHMIX,
            what: "Bengaluru contract manufacturer of circuit boards and systems for defence, aerospace, medical and industrial customers, half of it exported; listed on the NSE SME platform.",
            view: "**A defence order book at a lower price, with governance to watch.** The ₹1,309cr order book is 2.5 times revenue, exports are about half of sales, and it has an Israeli defence joint venture. But operating cash has been negative over five years, the promoter owns only 30%, and it raised ₹150cr of equity. At 66x it needs ~27.5%.",
            watch: 'Cash flow as defence orders are delivered; main-board migration; the Israeli joint venture.',
        },
        {
            company: 'IKIO Technologies', rank: 5, stance: 'TURNAROUND', segment: DURABLES,
            what: "Noida maker of LED lighting (home, retail, refrigeration and car lights), hearables and wearables, and other electronics, designed in-house for brands in India and abroad.",
            view: "**The only reasonable price in the sector, on a business still recovering.** It has cut its home-lighting work for one big customer from about 60% of sales to about a quarter, and grew 41% in Q1. But return on capital fell from 41% to 9% after its IPO-funded plants, the cash cycle is 253 days, and chip shortages hit margins. At 35x it needs ~20%.",
            watch: 'EBITDA margin back to 13–14%; plant utilisation; the Honeywell and car-lighting programmes.',
        },
        {
            company: 'Aimtron', rank: 6, stance: 'SCALEUP', segment: HIGHMIX,
            what: "Vadodara design-led electronics maker (industrial, telecom, power, data-centre UPS, rail, defence) that bought a US rugged-electronics maker; listed on the NSE SME platform.",
            view: "**High margins and fast growth, but no cash yet.** FY26 revenue rose 89% at a 22.6% margin, and it targets 40–50% a year. But operating cash was negative in three of four years, one US data-centre customer is large, and at 85x it needs ~31%.",
            watch: 'Cash flow turning positive; the US acquisition reaching 18–20% margins; main-board move.',
        },
        {
            company: 'Cyient DLM', rank: 7, stance: 'TURNAROUND', segment: HIGHMIX,
            what: "Hyderabad and Mysuru contract manufacturer for aerospace, defence, medical and industrial customers, 94% exported; part of the Cyient group.",
            view: "**A good franchise recovering from a bad year.** Revenue fell 17% in FY26, then grew 34% in Q1 with a record ₹2,599cr order book and aerospace customers such as Honeywell and Thales ramping up. But working capital is 161 days, operating cash has been negative over four years, and at 90x it needs ~31.5%.",
            watch: 'Working capital falling; Honeywell ramp-up; first AI and robotics orders.',
        },
        {
            company: 'Kaynes Technology', rank: 8, stance: 'TURNAROUND', segment: SCALE,
            what: "Mysuru-based EMS company for auto, rail, aerospace, defence and industrial customers, plus a smart-meter business and new chip-packaging (OSAT) and circuit-board plants.",
            view: "**A strong core business buried under a cash problem.** Core EMS grew about 48% in Q1 at a 15–16% margin. But state utilities owe ₹1,311cr for smart meters, operating cash was −₹600cr in FY26 and −₹259cr in Q1, and ₹1,200cr is sunk in plants not yet earning. The stock is 55% off its high; at 67x it needs ~28%.",
            watch: 'Metering receivables falling or the business sold; chip and board plants earning from Q3; operating cash by year-end.',
        },
        {
            company: 'PG Electroplast', rank: 9, stance: 'CYCLICAL', segment: DURABLES,
            what: "Contract maker of air conditioners, washing machines, coolers and plastic parts for Indian appliance brands, adding refrigerators and compressors.",
            view: "**A big seasonal business with thin, fixed-fee margins.** Revenue crossed ₹2,000cr in Q1 and washing machines grew 67%. But return on capital fell to 10%, free cash has been −₹1,653cr over five years, and it no longer gives guidance. At 73x it needs ~29%.",
            watch: 'Compressor plant from December; next summer season; per-unit margins recovering.',
        },
        {
            company: 'Amber Enterprises', rank: 10, stance: 'AVOID', segment: DURABLES,
            what: "India's largest contract maker of room air conditioners and their parts, plus an electronics division (circuit boards, assemblies) and railway subsystems; entering phones with Oppo.",
            view: "**A market leader priced far beyond its returns.** Electronics grew 29% in Q1 at a 10.8% margin and it is building ₹4,200cr of circuit-board plants. But return on capital has been 8–14%, net debt rose to ₹1,225cr, Q1 carried a ₹123cr one-off loss, and at 121x it needs ~35.5% a year.",
            watch: 'Electronics margin; the Oppo phone launch; debt after the Iljin fund-raise.',
        },
        {
            company: 'Virtuoso Optoelectro', rank: 11, stance: 'AVOID', segment: DURABLES,
            what: "Nashik contract maker of air conditioners, deep freezers, refrigeration compressors, lighting and circuit boards for appliance brands.",
            view: "**Fast growth on a very thin margin.** Revenue grew 89% in Q1, but the net margin is 2.5–3%, return on capital has fallen to 10%, Voltas was over 60% of air-conditioner sales last year, and it borrows at mid-teens rates. At 99x it needs ~33%.",
            watch: 'Customer concentration falling; compressor margins; funding for the next phase.',
        },
        {
            company: 'Sahasra Electronic', rank: 12, stance: 'AVOID', segment: SCALE,
            what: "Small Noida-area maker of circuit boards, memory cards and USB drives, with a memory-chip packaging unit; listed on the NSE SME platform.",
            view: "**Small, cash-negative, and merging in promoter companies.** Revenue grew 45% to ₹138cr, but return on capital is 6–10%, operating cash has been negative for two years, and it plans to merge unlisted promoter-owned companies into the listed one. At 68.5x it needs ~28%.",
            watch: 'Merger terms and approval; semiconductor unit breakeven; operating cash.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Syrma SGS Tech. is the one I would own.** It combines scale, rising exports, a growing own-design business and improving cash flow, and its price is the closest to what it can deliver.",
            "**Among the high-reliability makers, the businesses are better than the prices.** Avalon Tech is the best-run company here but needs 36% a year. Centum Electronics is cleaner after exiting France and is the only company with positive free cash. Vinyas Innovativ and Aimtron are smaller, cash-negative and SME-listed. Cyient DLM is recovering but still ties up a lot of cash.",
            "**Kaynes Technology is a good EMS business with a cash problem.** Until the smart-meter receivables are collected or the business is sold, the core strength is hidden.",
            "**The consumer-durable makers grow revenue faster than value.** IKIO Technologies is the one priced sensibly. PG Electroplast is a cyclical at a full price. Amber Enterprises and Virtuoso Optoelectro earn too little on their capital for their prices. Sahasra Electronic has a governance question to answer first.",
            "**What would change my view.** Component shortages easing would release cash across the sector. A slowdown in global outsourcing to India would hit the exporters. Kaynes collecting its metering bills would make it one of the more attractive names here.",
            "**What to watch next quarter.** Syrma's inventory; Avalon's new programmes; Centum's defence revenue; Kaynes's receivables and new plants; Amber's debt; PG Electroplast's compressor start.",
        ],
        bottomLine:
            "Growth is everywhere in Indian EMS; free cash is almost nowhere. Syrma SGS Tech. is the best balance of growth, cash and price. Avalon Tech and Centum Electronics are high-quality but priced for years of perfection. Avoid paying up for thin-margin appliance assembly: Amber Enterprises, Virtuoso Optoelectro and PG Electroplast earn too little on their capital for their prices.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/SYRMA/consolidated/' },
        { label: 'Syrma SGS Technology Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ea4a3bc4-ee61-49fe-be89-3f1ec2e0ebf9.pdf' },
        { label: 'Avalon Technologies Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=62a62f53-33c5-4982-98fb-65bbc897553f.pdf' },
        { label: 'Centum Electronics Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0c39e01b-edb2-4bf3-9ff0-b4bfd845d48f.pdf' },
        { label: 'Kaynes Technology Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=516028d8-7580-4f5b-aed8-4a611fec0430.pdf' },
        { label: 'Amber Enterprises Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3b95eaa2-37d9-46f3-8bc6-1d6600807e5a.pdf' },
        { label: 'PG Electroplast Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f6b2f18c-a6fb-4243-8383-84f4838e7448.pdf' },
        { label: 'Cyient DLM Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1936de27-4b88-4367-a5f6-689d6782e703.pdf' },
        { label: 'Aimtron Electronics FY26 investor presentation', url: 'https://nsearchives.nseindia.com/corporate/AIMTRON_29042026180627_Intimation_Investor_Presentation_for_Concall_29-04-2026.pdf' },
        { label: 'Vinyas Innovative Technologies FY26 investor presentation', url: 'https://nsearchives.nseindia.com/corporate/VINYAS_29052026113314_Reg_30_Investor_Presentation_Fy_2526.pdf' },
        { label: 'Virtuoso Optoelectronics Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3c2500b4-7001-40a2-b408-869b163cd758.pdf' },
        { label: 'IKIO Technologies Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2341cd44-64ff-4ab6-8f26-1b54891fec19.pdf' },
        { label: 'Sahasra Electronic Solutions FY26 investor presentation', url: 'https://nsearchives.nseindia.com/corporate/SAHASRA_28052026151742_investor_presentation_final_signed.pdf' },
        { label: 'Why PCB lead times and prices are rising in 2026 — NextPCB', url: 'https://www.nextpcb.com/blog/pcb-shortage-2026-price-lead-time' },
        { label: 'Electronics manufacturing services market size and share — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/electronics-manufacturing-services-market' },
    ],
};
