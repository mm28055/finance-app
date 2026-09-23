import { SectorOverview } from './types';
import { electricalTransformersBusinesses } from './electrical-transformers-businesses';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The ranking, the metric grid and the moat table are grouped by these.
const MAKERS = 'Transformer makers';
const PARTS = 'Components: bushings, reactors, instruments';
const MV = 'Medium-voltage equipment (multinational)';

export const electricalTransformers: SectorOverview = {
    sector: 'Electrical Transformers',
    title: 'Electrical Transformers',
    format: 'ranked',
    businesses: electricalTransformersBusinesses,
    moatCompact: true,
    standfirst:
        "Nine companies riding India's largest ever grid build-out and a global shortage of transformers. Five make transformers, three make the parts that go inside or alongside them, and one (Schneider) makes medium-voltage equipment for a multinational parent. Every one of them has a full order book, so the order book does not separate them. What does: which voltage classes each factory is approved for, how much of each contract passes on copper and steel price rises, and whether profit is turning into cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    takeaways: [
        "**Separate three businesses first.** Transformer makers (Atlanta, Shilchar, Voltamp, Supreme, TARIL) sell a custom-built product into a capacity race. Component makers (Yash's bushings, Quality Power's reactors and HVDC parts, Rishabh's instruments) sell into every transformer maker and have longer-lasting advantages. Schneider makes medium-voltage gear up to 33 kV and cannot bid for the high-voltage transmission work driving this cycle.",
        "**The order book is not the difference; the contract is.** Supreme has price-variation clauses on 80–85% of orders and Atlanta on 60–75% of utility orders, and both held margins through Q1's copper and oil spike. Schneider has them on only 20–25% of contracts and its operating margin fell to 5%. Shilchar sells exports ex-works, so when freight costs rose three to five times, customers simply stopped collecting.",
        "**Profit and cash diverge sharply.** Over FY22–FY26 Schneider turned 71% of operating profit into cash, Shilchar 61% and Voltamp 57%. TARIL turned only 11% (₹111cr of cash on ₹1,039cr of operating profit) and **consumed ₹105cr in FY26**, with a 200-day cash cycle. Yash converted 34% and has negative free cash as it builds a new plant.",
        "**Everyone is adding capacity at once.** Atlanta has 63,060 MVA, TARIL 75,000+, Shilchar is doubling to 14,000, Voltamp is adding a 6,000 MVA 220 kV plant, Supreme just added 9,000. Voltamp's own annual report says margins will 'normalise' as competition rises. The 66–220 kV band, where most of these companies sit, will feel it first.",
        "**One imported material sits under all nine.** CRGO electrical steel is a quarter to two-fifths of a transformer's material cost and India imports about 90% of it. An anti-dumping probe opened in June 2026. A duty would hit the companies without price-variation clauses hardest.",
        "**Only a few are priced below what they can deliver.** Shilchar (33x, needs ~19%) and Supreme (24.5x, needs ~16%) look reasonable against my estimates. Atlanta (60x) is priced about right for its 40% growth plan. Yash (88x), Quality Power (90x) and especially Schneider (152x) need years of near-perfect execution.",
    ],

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results, operating profit ÷ sales (excludes other income). Schneider, Voltamp, Shilchar and Supreme are standalone; the rest consolidated.',
            note: 'Yash (BSE SME) reports half-yearly: its H1 and H2 FY26 figures sit in the Q2 and Q4 columns. Supreme’s March 2026 quarter is not filed separately on Screener.',
            values: {
                'Atlanta Electricals': [16, 17, 19, 20, 17],
                'Shilchar Tech.': [33, 32, 31, 21, 16],
                'Voltamp Transformers': [17, 19, 17, 13, 15],
                'Supreme Power': [14, 16, 10, null, 15],
                'Transformers & Rect': [17, 11, 17, 15, 16],
                'Yash Highvoltage': [null, 21, null, 26, null],
                'Quality Power El': [18, 17, 28, 11, 18],
                'Rishabh Instruments': [15, 17, 17, 16, 17],
                'Schneider Ele. Infra': [11, 13, 17, 8, 5],
            },
            cellNotes: {
                'Shilchar Tech.': 'Q1 FY27: company EBITDA including other income was 21.7%. Margins fell as exports stalled on freight costs and only 50–60% of raw-material inflation was passed on.',
                'Quality Power El': 'Q1 FY27: company EBITDA margin 25.2%, or 28.3% excluding a ₹7.8cr hyperinflation-accounting loss in Turkey; company figures include other income.',
                'Schneider Ele. Infra': 'Q1 FY27: fixed-price orders booked before December could not be repriced for copper, oil and the weaker rupee.',
                'Yash Highvoltage': 'Half-yearly: H1 FY26 in the Q2 column, H2 FY26 in the Q4 column. FY26 company EBITDA margin 25.7%.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Blank where a comparable period is not filed. Quality Power’s FY26 growth includes acquisitions (Endoks, Mehru).',
            values: {
                'Atlanta Electricals': [5, 17, 79, 82, 48],
                'Shilchar Tech.': [49, 31, 10, -34, -15],
                'Voltamp Transformers': [-1, 21, 30, -1, 28],
                'Supreme Power': [50, 44, 37, null, 34],
                'Transformers & Rect': [64, 0, 32, 16, 8],
                'Yash Highvoltage': [null, 75, null, 46, null],
                'Quality Power El': [190, 119, 289, 160, 32],
                'Rishabh Instruments': [12, 8, 2, 10, 4],
                'Schneider Ele. Infra': [5, 8, 20, 1, 5],
            },
            cellNotes: {
                'Shilchar Tech.': 'Q1 FY27: about ₹30–35cr of export shipments did not move because customers deferred collection when container costs rose three to five times.',
                'Rishabh Instruments': 'Q1 FY27: instrumentation grew 34%; the die-casting arm shrank 41% as it exited unprofitable contracts on purpose.',
                'Atlanta Electricals': 'Q1 FY27: management says the growth was volume-led.',
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios: return on capital employed.',
            note: 'Voltamp and Shilchar carry large investment portfolios (₹995cr and ₹202cr), which lower their reported returns.',
            values: {
                'Atlanta Electricals': [28, 66, 45, 50, 45],
                'Shilchar Tech.': [24, 54, 75, 71, 51],
                'Voltamp Transformers': [19, 25, 32, 29, 24],
                'Supreme Power': [15, 71, 37, 28, 22],
                'Transformers & Rect': [10, 15, 15, 28, 23],
                'Yash Highvoltage': [52, 48, 45, 28, 29],
                'Quality Power El': [null, 28, 31, 27, 32],
                'Rishabh Instruments': [15, 14, 10, 5, 14],
                'Schneider Ele. Infra': [14, 26, 38, 41, 30],
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
            note: 'TARIL built up steel and copper stock through FY26 to protect against price rises. Yash’s jump in FY26 reflects the new plant and the Sukrut acquisition.',
            values: {
                'Atlanta Electricals': [42, 56, 76, 65, 74],
                'Shilchar Tech.': [129, 96, 93, 120, 105],
                'Voltamp Transformers': [184, 142, 158, 139, 169],
                'Supreme Power': [140, 108, 146, 71, 53],
                'Transformers & Rect': [139, 141, 188, 94, 200],
                'Yash Highvoltage': [102, 82, 82, 112, 187],
                'Quality Power El': [154, 82, 23, 167, 63],
                'Rishabh Instruments': [174, 178, 189, 165, 184],
                'Schneider Ele. Infra': [30, 56, 65, 56, 61],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss: cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Negative means the business consumed cash while reporting a profit.',
            values: {
                'Atlanta Electricals': [0, 37, 74, 43, 53, 48],
                'Shilchar Tech.': [-32, 74, 67, 22, 101, 61],
                'Voltamp Transformers': [47, 73, 67, 60, 39, 57],
                'Supreme Power': [-33, 38, -35, 161, 97, 74],
                'Transformers & Rect': [3, 23, 22, 48, -27, 11],
                'Yash Highvoltage': [47, 47, 64, 30, 16, 34],
                'Quality Power El': [39, 138, 133, 95, 45, 74],
                'Rishabh Instruments': [18, 36, 106, 133, 85, 73],
                'Schneider Ele. Infra': [140, 52, 64, 80, 60, 71],
            },
            cellNotes: {
                'Transformers & Rect': 'FY26: −₹105cr of operating cash on ₹383cr of operating profit, as inventory and receivables swelled. Five years: ₹111cr of cash on ₹1,039cr.',
                'Quality Power El': 'FY22–FY24 look high because profit then came mostly from other income. It spent heavily on acquisitions, which do not show as capex.',
                'Supreme Power': 'Small numbers swing widely: five-year operating profit was only ₹85cr.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Approvals and voltage class', description: 'Utility and OEM approvals, granted per factory and per voltage class, that take years.' },
            { key: 'tech', label: 'Own technology', description: 'Designs and know-how the company owns rather than licenses.' },
            { key: 'scale', label: 'Scale and capacity', description: 'Capacity, range and cost position.' },
            { key: 'price', label: 'Contract protection', description: 'A = most orders pass on metal and steel price rises; D = mostly fixed-price.' },
            { key: 'reach', label: 'Customer spread and exports', description: 'How many customers and countries it sells to.' },
        ],
        rows: [
            { company: 'Atlanta Electricals', trend: 'widening', trendNote: 'Power Grid approval for 400 kV at Vadod; bought a 765 kV-capable plant; 765 kV technology tie-up aimed at Q4 FY27.',
                grades: { qual: { grade: 'A', note: 'Power Grid 400 kV approval; plant built for 765 kV' }, tech: { grade: 'C', note: '765 kV design licensed for a fee and royalty' }, scale: { grade: 'B', note: '63,060 MVA across five plants' }, price: { grade: 'B', note: 'Price variation on 60–75% of utility orders' }, reach: { grade: 'C', note: '273 customers; no exports yet' } } },
            { company: 'Shilchar Tech.', trend: 'stable', trendNote: 'Moving from 132 kV to 220 kV with the new plant; export business intact but frozen by freight.',
                grades: { qual: { grade: 'B', note: 'Export approvals in 25+ countries, up to 132 kV' }, tech: { grade: 'C', note: 'Own designs, standard range' }, scale: { grade: 'C', note: '7,500 MVA, doubling to 14,000' }, price: { grade: 'C', note: 'Ex-works exports; passed on only 50–60% in Q1' }, reach: { grade: 'A', note: 'Exports 52% of FY26 sales' } } },
            { company: 'Voltamp Transformers', trend: 'stable', trendNote: 'Its own report expects margins to normalise; new 220 kV plant starting.',
                grades: { qual: { grade: 'B', note: 'Long record with industrial buyers' }, tech: { grade: 'C', note: 'Standard range up to 120 MVA' }, scale: { grade: 'B', note: '16,514 MVA sold in FY26, above 100% utilisation' }, price: { grade: 'B', note: 'Selective, industrial-led order booking' }, reach: { grade: 'B', note: 'Broad industrial base; exports 3%' } } },
            { company: 'Supreme Power', trend: 'widening', trendNote: 'New 220 kV plant; 165 MVA order from KPTCL; entering Maharashtra and Telangana.',
                grades: { qual: { grade: 'C', note: 'South Indian utility approvals; big-unit type test pending' }, tech: { grade: 'D', note: 'Standard designs' }, scale: { grade: 'C', note: '9,000 MVA; new plant at 20–25%' }, price: { grade: 'A', note: 'Price variation on 80–85% of orders' }, reach: { grade: 'D', note: 'Southern India; no exports' } } },
            { company: 'Transformers & Rect', trend: 'stable', trendNote: 'Power Grid HVDC repair qualification; ₹1,000cr of backward integration; but a new plant at 27% utilisation.',
                grades: { qual: { grade: 'A', note: 'Range up to 1,200 kV; Power Grid approvals' }, tech: { grade: 'B', note: 'Own designs; furnace and rectifier niche' }, scale: { grade: 'A', note: '75,000+ MVA capacity' }, price: { grade: 'C', note: 'Tender pricing; 15–16% standalone margin' }, reach: { grade: 'B', note: 'Half government, half private; US export order' } } },
            { company: 'Yash Highvoltage', trend: 'widening', trendNote: 'Localising the bushing cores it now imports; design range raised to 550 kV; US subsidiary live.',
                grades: { qual: { grade: 'A', note: '96% repeat orders; approvals in 60+ countries' }, tech: { grade: 'B', note: 'Core technology from a Swiss partner, now being localised' }, scale: { grade: 'B', note: 'One of fewer than 12 independent bushing makers worldwide' }, price: { grade: 'B', note: 'Passes cost rises on; margins rose in FY26' }, reach: { grade: 'B', note: '1,000+ customers; exports 7%' } } },
            { company: 'Quality Power El', trend: 'widening', trendNote: 'Buying an insulator maker; adding gas-insulated switchgear parts and a 4 GW storage-converter plant.',
                grades: { qual: { grade: 'A', note: 'Approved by Hitachi, Siemens, GE Vernova' }, tech: { grade: 'A', note: 'HVDC reactors and magnet wire; STATCOMs' }, scale: { grade: 'C', note: 'Seven plants, each niche' }, price: { grade: 'B', note: 'Orders booked above its margin guide' }, reach: { grade: 'A', note: '200+ customers in 100+ countries' } } },
            { company: 'Rishabh Instruments', trend: 'stable', trendNote: 'Instrumentation strong; die-casting arm still losing money.',
                grades: { qual: { grade: 'B', note: 'Utility, rail and industrial approvals' }, tech: { grade: 'B', note: 'Own instruments; 50 launches in two years' }, scale: { grade: 'C', note: '₹775cr across two unrelated businesses' }, price: { grade: 'B', note: '60–70% gross margins on core products' }, reach: { grade: 'A', note: 'India, Poland, US, UK, China' } } },
            { company: 'Schneider Ele. Infra', trend: 'narrowing', trendNote: 'Record orders, but only 20–25% of contracts reprice and margins collapsed.',
                grades: { qual: { grade: 'B', note: 'Utility, data-centre and railway approvals' }, tech: { grade: 'A', note: 'Schneider group designs and EcoStruxure software' }, scale: { grade: 'B', note: 'Three plants; ₹2,900cr revenue' }, price: { grade: 'D', note: 'Price variation on only 20–25% of contracts' }, reach: { grade: 'B', note: 'Exports 10–12% of revenue' } } },
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
                "Five views of the nine companies, grouped by business. All figures are filed (Screener): Schneider, Voltamp, Shilchar and Supreme standalone (their main or only business), the rest consolidated. Yash reports half-yearly, so its quarterly figures sit in two columns. Hover over a starred name for its caveat. **Start with cash conversion**: it separates this sector more than margins do.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "A transformer changes the voltage of electricity. Power leaves a plant, is stepped up to very high voltage to travel long distances with little loss, and is stepped down in stages at substations until it reaches homes and factories. Each step needs a transformer, and the higher the voltage, the fewer companies are allowed to make it.",
            ],
            points: [
                {
                    label: 'Where the demand is coming from',
                    text: "**India's grid.** Renewable plants are far from cities, so every gigawatt added needs new transmission lines and step-up transformers. About ₹3 lakh crore is going into distribution under RDSS (Schneider). **Data centres**: India's capacity is expected to rise from about 1.6 GW to roughly 8 GW by 2030. **Storage**: from about 9 GWh to 200+ GWh. **Abroad**: a global transformer shortage, with lead times of two years or more at the large makers for big units (cited on Supreme's call). Every company here reports a full order book.",
                },
                {
                    label: 'Voltage class is the barrier',
                    text: "Transformers are graded by voltage (kV) and size (MVA). Below 66 kV is a crowded, price-driven market. 132–220 kV is where most of these companies sit today. 400 kV and 765 kV need a separate approval from Power Grid for each factory, plus a short-circuit test; Atlanta has just cleared 400 kV and is licensing 765 kV. **Approval attaches to a factory, not a company**, which is why a new plant can sit half-empty while the order book is full.",
                },
                {
                    label: 'Contracts and commodities',
                    text: "Copper, CRGO steel, transformer oil and aluminium are most of the cost. **Contracts with price-variation clauses pass these on; fixed-price contracts do not.** Coverage ranges from 80–85% (Supreme) to 20–25% (Schneider), and Q1 FY27's spike showed the difference.",
                },
                {
                    label: 'The capacity race',
                    text: "Industry capacity is rising fast: about 60,000 MVA from two large rivals alone (cited on Atlanta's call), and every company on this page is expanding. Chinese makers with Indian plants have been allowed into public tenders. **Today there is no pricing pressure; in two to three years there may be**, starting in the 66–220 kV band.",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures (FY22–FY26)',
                    columns: ['Business', 'Who', 'Operating margin', 'Return on capital', 'Five-year cash conversion'],
                    rows: [
                        ['Transformer makers', 'Atlanta, Shilchar, Voltamp, Supreme, TARIL', '10–33% (quarterly)', '10–75%', '**11–74%**'],
                        ['Components', 'Yash, Quality Power, Rishabh', '11–28%', '5–52%', '**34–74%**'],
                        ['Medium-voltage equipment', 'Schneider', '5–17%', '14–41%', '**71%**'],
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
                    label: 'Strongest: the component makers',
                    text: "**Yash** (bushings, 96% repeat orders, approvals in 60+ countries) and **Quality Power** (reactors and HVDC parts approved by Hitachi, Siemens and GE Vernova) sell to every transformer maker rather than competing with them. A bushing is about 5% of a transformer's cost and its failure destroys the transformer, so nobody switches supplier to save money.",
                },
                {
                    label: 'Strong among the makers: voltage approvals',
                    text: "**TARIL** (range up to 1,200 kV) and **Atlanta** (Power Grid 400 kV approval, 765 kV plant) hold the approvals that take years to earn. **Atlanta's** top-end design is licensed, not owned.",
                },
                {
                    label: 'Weakest: standard products and fixed prices',
                    text: "**Supreme** makes standard designs for southern utilities, though its contracts are the best protected. **Schneider** has world-class technology but little price protection. **Shilchar's** edge is its export network and speed, not technology.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Hitachi Energy, Siemens Energy, GE Vernova, CG Power, Toshiba and Bharat Bijlee in power transformers; TBEA (China) now allowed into public tenders; ABB and Siemens in medium-voltage switchgear; Hitachi, CG Power and MIM in bushings; Secure Meters and Landis+Gyr in metering.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "A transformer margin lasts if the contract passes on metal prices and the product sits in a scarce voltage class. It is fragile if the contract is fixed-price or the product is standard. Q1 FY27, with copper, oil and freight all rising, was the test.",
            ],
            points: [
                {
                    label: 'Held: price-variation clauses',
                    text: "**Atlanta** kept a 16.5% EBITDA margin and says per-MVA prices moved with input costs. **Supreme's** gross margin rose to 28.8% because 80–85% of its orders carry the clause (EBITDA fell only because of 250 new hires). **Yash** raised its FY26 margin to 25.7% by passing on price rises.",
                },
                {
                    label: 'Squeezed: fixed prices and stalled exports',
                    text: "**Schneider's** margin fell to 5% on legacy fixed-price orders. **Shilchar's** fell from 33% a year ago to 16% (filed) as exports stalled and it recovered only 50–60% of cost rises on old orders; management says domestic orders earn roughly 10% less than exports. **Voltamp** says margins are 'normalising' after an unusually strong FY25.",
                },
                {
                    label: 'Temporary: new plants before revenue',
                    text: "**TARIL's** Changodar plant runs at 27%, **Supreme's** new plant at 20–25%, and **Quality Power's** Sangli plant needs about 60 customer audits before it can run fully. Costs arrive before revenue.",
                },
                {
                    label: 'Cash tells a different story from margins',
                    text: "Five-year conversion of operating profit into cash: **Supreme 74%, Quality Power 74%, Rishabh 73%, Schneider 71%, Shilchar 61%, Voltamp 57%, Atlanta 48%, Yash 34%, TARIL 11%.** **TARIL is the outlier**: it earned ₹1,039cr of operating profit in five years and kept ₹111cr as cash.",
                },
            ],
            tables: [
                {
                    caption: 'Operating profit (EBITDA) versus operating cash, FY22–FY26 (₹cr)',
                    columns: ['Company', 'Operating profit, 5 yrs', 'Operating cash, 5 yrs', 'Cash ÷ profit', 'Free cash after capex, 5 yrs', 'Net profit, 5 yrs', 'FY26: profit → cash'],
                    rows: [
                        ['Voltamp Transformers', '1,413', '809', '**57%**', '581', '1,270', '355 → 140'],
                        ['Schneider Ele. Infra', '1,304', '929', '**71%**', '642', '805', '371 → 224'],
                        ['Transformers & Rect', '1,039', '111', '**11%**', '−266', '591', '383 → −105'],
                        ['Atlanta Electricals', '845', '408', '**48%**', '136', '489', '345 → 184'],
                        ['Shilchar Tech.', '560', '341', '**61%**', '281', '454', '190 → 192'],
                        ['Rishabh Instruments', '398', '290', '**73%**', '−9', '243', '127 → 108'],
                        ['Quality Power El', '335', '247', '**74%**', '49', '423', '176 → 80'],
                        ['Yash Highvoltage', '146', '49', '**34%**', '−72', '90', '57 → 9'],
                        ['Supreme Power', '85', '63', '**74%**', '−54', '65', '29 → 28'],
                    ],
                    note: 'Filed annual accounts (Screener); Schneider, Voltamp, Shilchar, Yash and Supreme standalone. Free cash = operating cash minus capex. Voltamp’s and Quality Power’s net profit is close to or above operating profit because of large other income (Voltamp’s ₹995cr investment portfolio; Quality Power’s income before its acquisitions). Quality Power’s acquisitions are not in its capex.',
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
                    label: 'The high-voltage climbers',
                    text: "**Atlanta** guides 40% revenue growth a year for three years at 17–18% EBITDA, with 400 kV revenue from FY28 and 765 kV bids from Q4 FY27. **TARIL** guides +25% for FY27 and ₹8,000cr by FY29, with ₹900–1,000cr of backward integration it says adds 2–3 points of margin from FY28.",
                },
                {
                    label: 'The capacity doublers',
                    text: "**Shilchar** targets ₹800cr in FY27 (+23%) and doubles capacity to 14,000 MVA in April 2027, funded from its own cash. **Supreme** guides ₹250–300cr for FY27 and +30% a year after, peaking at ₹550–650cr around FY29. **Voltamp's** new 6,000 MVA plant starts from July 2026; its order book is ₹1,510cr.",
                },
                {
                    label: 'The component makers',
                    text: "**Yash** targets ₹350–400cr of sales in FY27 (+49–70%) and 40–42% a year for four to five years, and is raising ₹100–110cr of equity. **Quality Power** guides +20% for FY27 and +50% for FY28, and is buying an insulator maker. **Rishabh** guides 20–25% for instrumentation and breakeven at its die-casting arm by the end of FY27.",
                },
                {
                    label: 'My outlook',
                    text: "Grid spending should stay strong for at least three to four years, and the global shortage supports exports. But capacity is rising faster than demand in the 66–220 kV band. **I expect the component makers and the companies climbing into 400 kV and above to hold margins; the standard-range makers to grow volume at lower margins.**",
                },
            ],
            tables: [
                {
                    caption: 'Guidance, order books and track record',
                    columns: ['Company', 'Guidance', 'Order book', 'Track record'],
                    rows: [
                        ['Atlanta Electricals', '40% revenue CAGR for 3 years; EBITDA 17–18%', '₹3,117cr; ~₹2,400cr executable in FY27', '**Delivered**: FY26 +49%'],
                        ['Shilchar Tech.', '₹800cr FY27; 14,000 MVA by April 2027', '₹500cr (70% domestic)', '**Missed Q1**: exports stalled'],
                        ['Voltamp Transformers', 'None (no calls); margins to "normalise"', '₹1,510cr (12,377 MVA)', '**Steady**: record sales, profit −7%'],
                        ['Supreme Power', '₹250–300cr FY27; +30% FY28; EBITDA 18–20%', '₹590cr', '**Missed**: FY26 guide cut from ₹225cr to ₹200cr, delivered ₹190cr'],
                        ['Transformers & Rect', '+25% FY27; ₹8,000cr by FY29', '₹6,630cr', '**Walked back** earlier targets'],
                        ['Yash Highvoltage', '₹350–400cr FY27; EBITDA 24–25%', '₹400cr+', '**Delivered**: FY26 +57%'],
                        ['Quality Power El', '+20% FY27, +50% FY28; EBITDA ~20%', '₹1,945cr', '**Delivered**, with acquisitions'],
                        ['Rishabh Instruments', 'Instrumentation +20–25%; die-casting breakeven by FY27 end', 'Not published', '**Delivered** FY26 guide'],
                        ['Schneider Ele. Infra', 'None numeric; ₹500cr capex over 3 years', '₹2,100cr+ (+33%)', '**Missed** on margins'],
                    ],
                },
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high', 'Price needs'],
                    rows: [
                        ['Atlanta Electricals', 'Volume, then 400 kV and 765 kV', '18% / **26%** / 34%', '~26%'],
                        ['Shilchar Tech.', 'Capacity doubling; exports returning', '8% / **17%** / 25%', '~19%'],
                        ['Voltamp Transformers', 'New 220 kV plant; margins normalising', '6% / **12%** / 18%', '~19%'],
                        ['Supreme Power', 'New plant filling; larger transformers', '10% / **22%** / 32%', '~16%'],
                        ['Transformers & Rect', 'Order book; backward integration', '8% / **18%** / 28%', '~19%'],
                        ['Yash Highvoltage', 'New bushing plant; exports; own cores', '20% / **28%** / 38%', '~31%'],
                        ['Quality Power El', 'HVDC, storage converters, acquisitions', '15% / **24%** / 32%', '~32%'],
                        ['Rishabh Instruments', 'Instrumentation growth; die-casting breakeven', '8% / **16%** / 24%', '~20%'],
                        ['Schneider Ele. Infra', 'Margin recovery from a low base', '5% / **15%** / 25%', '~39%'],
                    ],
                    note: 'My own judgement, not guidance. Shilchar’s and Schneider’s starting profit is depressed, which flatters their near-term growth.',
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
                    label: 'CRGO steel',
                    text: "A quarter to two-fifths of a transformer's material cost, about 90% imported, and under an anti-dumping investigation since June 2026 with a verdict expected around March. A duty would be a permanent cost increase; fixed-price contracts would absorb it.",
                },
                {
                    label: 'Overcapacity',
                    text: "Every company here is adding capacity into the same cycle. Voltamp's own report warns of 'aggressive pricing trends'. The 66–220 kV band would feel it first.",
                },
                {
                    label: 'Customers not ready to take delivery',
                    text: "Supreme guides ₹250–300cr against ₹377cr scheduled because 10–20% of customers may not be ready. Schneider's revenue fell 41% quarter on quarter in early 2026 when contractors deferred dispatches. The order book is not the revenue.",
                },
                {
                    label: 'Working capital and funding',
                    text: "TARIL at 200 days and cash-negative; Yash raising equity; Supreme likely to need more capital in FY28 and rated BBB by CRISIL. Schneider carries ₹633cr of borrowings despite its price.",
                },
            ],
            tables: [
                {
                    caption: 'Company-specific risks and how management handled them',
                    columns: ['Company', 'Key risk', 'Addressed on the call', 'Avoided or unresolved'],
                    rows: [
                        ['Atlanta Electricals', '765 kV licensed; capacity race', 'Export plan explicitly to hedge overcapacity', 'Royalty cost on the 765 kV range'],
                        ['Shilchar Tech.', 'Ex-works exports; margin fall', 'Pivot to domestic orders; order book 70% domestic', '**Annual report optimism contradicted by the quarter**'],
                        ['Voltamp Transformers', 'Margins normalising; no disclosure', 'n/a (no calls)', '**Price-variation coverage, voltage mix and CRGO exposure not disclosed**'],
                        ['Supreme Power', 'Plant ramp-up; SME; funding', 'Training 250 new hires; price variation on 80–85%', 'Cut FY26 guidance and still missed it'],
                        ['Transformers & Rect', 'Cash burn; utilisation; credibility', 'Hired EY for investor relations', '**Guidance and targets walked back**'],
                        ['Yash Highvoltage', 'Localising cores; valuation', 'FY27 growth does not depend on new cores', 'A cyber-incident loss under police investigation'],
                        ['Quality Power El', 'Sangli audits; minority partners; price', 'Audit timeline explained', 'Partners own 49% of Endoks and Mehru'],
                        ['Rishabh Instruments', 'Die-casting losses', 'Breakeven timeline', '**Demerger no longer discussed**'],
                        ['Schneider Ele. Infra', 'Fixed-price contracts; no high-voltage play', 'Pricing discipline on new orders', 'Margin recovery timeline not given'],
                    ],
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **16% at 25x, 19% at 33x, 20% at 35x, 26% at 60x, 31% at 88x, 32% at 90x and 39% at 152x.** The chart shows return on capital against the P/E.",
            ],
            embed: 'scatter',
            embedFirst: true,
            points: [
                {
                    label: 'Reasonable',
                    text: "**Shilchar** (33x; needs ~19%, I expect ~17% from a depressed base; debt-free, 61% cash conversion). **Supreme** (24.5x; needs ~16%, I expect ~22%; but small, SME-listed and with a record of missed guidance). **Atlanta** (60x; needs ~26%, I expect ~26%).",
                },
                {
                    label: 'Fair to full',
                    text: "**Voltamp** (34.5x; needs ~19.5%, I expect ~12%; about 9% of its market value is an investment portfolio). **TARIL** (33x; needs ~19%, I expect ~18%, but cash-negative). **Rishabh** (35x; needs ~20%, I expect ~16%).",
                },
                {
                    label: 'Full',
                    text: "**Yash** (88x; needs ~31%, I expect ~28%) and **Quality Power** (90x; needs ~32%, I expect ~24%).",
                },
                {
                    label: 'Stretched',
                    text: "**Schneider** (152x; needs ~39%, I expect ~15%) on a 5% operating margin.",
                },
            ],
            tables: [
                {
                    caption: 'What the price assumes',
                    columns: ['Company', 'P/E', 'Return on capital (5-yr range)', 'Growth the price needs', 'My estimate', 'Verdict'],
                    rows: [
                        ['Atlanta Electricals', '59.9', '28–66%', '~26%', '~26%', '**Fair**'],
                        ['Shilchar Tech.', '33.2', '24–75%', '~19%', '~17%', '**Reasonable**'],
                        ['Voltamp Transformers', '34.5', '19–32%', '~19.5%', '~12%', '**Full**'],
                        ['Supreme Power', '24.5', '15–71%', '~16%', '~22%', '**Cheap, small**'],
                        ['Yash Highvoltage', '88.5', '28–52%', '~31%', '~28%', '**Full**'],
                        ['Quality Power El', '90.0', '27–32%', '~32%', '~24%', '**Full**'],
                        ['Transformers & Rect', '33.2', '10–28%', '~19%', '~18%', '**Fair, cash-negative**'],
                        ['Rishabh Instruments', '35.2', '5–15%', '~20%', '~16%', '**Full for a low-return business**'],
                        ['Schneider Ele. Infra', '152', '14–41%', '~39%', '~15%', '**Stretched**'],
                    ],
                    note: 'P/E from Screener on 23 September 2026. Quality Power’s P/E is on profit attributable to shareholders, after its partners’ share.',
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'Atlanta Electricals', rank: 1, stance: 'SCALEUP', segment: MAKERS,
            what: "Power transformer maker (5 MVA to 500 MVA) moving from 220 kV up to 400 kV and 765 kV, with a new plant for solar and storage transformers.",
            view: "**The best execution among the transformer makers.** Revenue grew 48% in Q1 on volume, margin held at 16.5% thanks to price-variation clauses, and return on capital has been 45–66% for four years. It holds Power Grid's 400 kV approval and bought a plant built for 765 kV. At 60x it needs ~26% growth, in line with its 40% revenue plan.",
            watch: '400 kV short-circuit test; the 765 kV technology tie-up and its royalty; cash conversion (48% over five years).',
        },
        {
            company: 'Shilchar Tech.', rank: 2, stance: 'CYCLICAL', segment: MAKERS,
            what: "Debt-free Gujarat maker of power, distribution, solar and wind transformers up to 132 kV, half of it exported to the US, Middle East and Africa.",
            view: "**The best-value transformer maker, in a bad patch.** Return on capital has been 51–75% for four years, it is debt-free with ₹202cr of investments, and it is doubling capacity to 14,000 MVA from its own cash. But Q1 revenue fell 15% and the margin fell to 16% as exports stalled on freight costs. At 33x it needs ~19%.",
            watch: 'Freight costs and export collection; Q2 margin; the 220 kV plant from April 2027.',
        },
        {
            company: 'Voltamp Transformers', rank: 3, stance: 'PRICED', segment: MAKERS,
            what: "Vadodara maker of oil-filled power and distribution transformers up to 120 MVA and dry-type transformers, sold mainly to industry rather than utilities.",
            view: "**A conservative, cash-rich company you cannot see into.** It is debt-free, holds ₹995cr of investments (about 9% of its market value), proposes a ₹101cr dividend, and ran above 100% utilisation for two years. But it holds no calls and gives no guidance, profit before tax fell 7% in FY26, and it expects margins to normalise. At 34.5x it needs ~19.5% against my ~12%.",
            watch: 'The new 220 kV plant ramping up; margin trend; order book (₹1,510cr).',
        },
        {
            company: 'Supreme Power', rank: 4, stance: 'SCALEUP', segment: MAKERS,
            what: "Chennai-based maker of power, distribution and solar transformers up to 200 MVA and 220 kV, selling to southern utilities, EPC firms and industry; listed on the NSE SME platform.",
            view: "**Cheap, well-protected contracts, small and untested at scale.** The order book (₹590cr) is three times revenue, 77% power transformers, and 80–85% carries price-variation clauses. But its new plant runs at 20–25%, it cut its FY26 guidance and still missed it, and free cash has been negative. At 24.5x it needs ~16% against guidance of 30%+.",
            watch: 'Utilisation at the new plant; the 165 MVA type test; move to the main board; funding needs in FY28.',
        },
        {
            company: 'Yash Highvoltage', rank: 5, stance: 'PRICED', segment: PARTS,
            what: "Makes high-voltage transformer bushings (the insulated part that carries power through a transformer's wall), with a new plant designed for up to 550 kV, sold to transformer makers and utilities in 60+ countries; listed on the BSE SME platform.",
            view: "**The best moat in the sector, at a full price.** 96% of orders are repeat, it is one of fewer than 12 independent bushing makers worldwide, revenue grew 57% in FY26 and margin rose to 25.7%. It is localising the cores it now imports. But only 34% of profit became cash over five years, it is raising equity, and at 88x it needs ~31%.",
            watch: 'The new plant producing its own cores on time; exports rising from 7%; cash conversion.',
        },
        {
            company: 'Quality Power El', rank: 6, stance: 'PRICED', segment: PARTS,
            what: "A group of specialist grid-equipment makers in India and Turkey: reactors and HVDC coils, instrument transformers, STATCOMs and storage converters, sold to global equipment makers and utilities.",
            view: "**Deep technology and a good record, priced for it.** It supplies Hitachi, Siemens and GE Vernova, has a ₹1,945cr order book and books orders above its margin guide. But partners own 49% of its two largest businesses, the Sangli plant needs about 60 customer audits, and at 90x it needs ~32% against my ~24%.",
            watch: 'Sangli approvals; the insulator acquisition; hyperinflation accounting in Turkey.',
        },
        {
            company: 'Transformers & Rect', rank: 7, stance: 'TURNAROUND', segment: MAKERS,
            what: "One of India's largest transformer makers: power, distribution, furnace, rectifier and specialty transformers and reactors up to 1,200 kV.",
            view: "**Real assets, poor cash.** A ₹6,630cr order book, 75,000+ MVA of capacity and approvals up to 1,200 kV. But it turned only 11% of operating profit into cash over five years, consumed ₹105cr in FY26 with a 200-day cash cycle, and has walked back guidance. At 33x it needs ~19%, which is achievable if execution improves.",
            watch: 'Changodar utilisation (27%); working-capital days; operating cash turning positive.',
        },
        {
            company: 'Rishabh Instruments', rank: 8, stance: 'TURNAROUND', segment: PARTS,
            what: "Electrical measuring instruments, current transformers, meters and solar inverters (India, Poland, US, China), plus a loss-making aluminium die-casting business in Poland.",
            view: "**A good business inside a weak one.** Instrumentation grew 34% in Q1 at a 24.8% margin, but die-casting (31% of FY26 revenue) still loses money, so group return on capital has been 5–15%. Free cash over five years was about zero. At 35x it needs ~20% against my ~16%.",
            watch: 'Die-casting breakeven by end FY27; any sale or demerger; US growth.',
        },
        {
            company: 'Schneider Ele. Infra', rank: 9, stance: 'AVOID', segment: MV,
            what: "Schneider Electric's Indian listed unit: distribution transformers, medium-voltage switchgear and ring main units up to 33 kV, protection relays and grid software.",
            view: "**A good franchise at a price that ignores its margins.** Orders hit a record ₹915cr and the backlog rose 33%, with data centres and chip plants over a fifth of it. But only 20–25% of contracts reprice, the Q1 operating margin was 5%, it cannot bid above 33 kV, and it carries ₹633cr of borrowings. At 152x it needs ~39% a year.",
            watch: 'Margin recovery as old fixed-price orders run off; share of contracts with price variation.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Among the transformer makers, Atlanta and Shilchar are the ones to own.** Atlanta has the approvals, the growth and contracts that pass on costs, at a price that matches its plan. Shilchar is cheaper and higher-return but exposed to exports and freight; it is the one to buy when the news is bad, as it is now. Voltamp is a safe, cash-rich business priced above what it is likely to grow. Supreme is cheap and well protected but small and still proving itself.",
            "**The component makers have the best moats and the fullest prices.** Yash's bushings and Quality Power's HVDC parts are genuine chokepoints; both need about 31–32% growth a year to justify today's price. Rishabh's instrumentation business is good but hidden inside a loss-making die-caster.",
            "**Transformers & Rect (TARIL) is a cash problem attached to real assets.** Two quarters of positive operating cash and rising utilisation would change the view.",
            "**Schneider is a pass at 152x**: good technology and orders, but little price protection and no access to high-voltage transmission.",
            "**What would change my view.** A CRGO anti-dumping duty would hit fixed-price contracts hardest. Falling freight costs would help Shilchar first. Signs of price cutting in 132–220 kV tenders would hurt the standard-range makers.",
            "**What to watch next quarter.** Atlanta's 400 kV test; Shilchar's export recovery; Voltamp's new plant; Supreme's utilisation; TARIL's cash flow; Yash's new plant; the CRGO probe.",
        ],
        bottomLine:
            "Buy the approval and the clause, not the order book. Atlanta Electricals has both at a fair price; Shilchar Tech. is the high-return maker to buy while its exports are stalled. Yash Highvoltage and Quality Power El own the best technology but are priced for it. TARIL has to show cash before it earns a place, and Schneider Ele. Infra's price has lost touch with its margins.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/ATLANTAELE/consolidated/' },
        { label: 'Atlanta Electricals Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f61230f1-0371-4ae0-a5cb-8d186f998cf1.pdf' },
        { label: 'Shilchar Technologies Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1898a3e0-dddd-4c77-8f54-08d9cab92a13.pdf' },
        { label: 'Voltamp Transformers annual report 2025–26', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4d6b1053-a606-46d0-b6f2-ec0051687d00.pdf' },
        { label: 'Supreme Power Equipment Q1 FY27 investor presentation', url: 'https://nsearchives.nseindia.com/corporate/SPEL_17082026131115_InvestorPresentationQ1FY27.pdf' },
        { label: 'Transformers & Rectifiers Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1650f0ea-1a86-4a60-9b8a-600e4fc8f637.pdf' },
        { label: 'Yash Highvoltage FY26 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=de76e960-a75d-481a-9c67-342f1bf045ff.pdf' },
        { label: 'Quality Power Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1b7003bd-b2bd-4606-a182-167d6ba50f69.pdf' },
        { label: 'Rishabh Instruments Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=74f37808-1a06-4e89-b2f5-e90a9ce81ad6.pdf' },
        { label: 'Schneider Electric Infrastructure Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=01c88ed7-c450-4a2a-8875-27a1a2e478ee.pdf' },
        { label: 'Anti-dumping duty on electrical steel may push transformer costs — Business Standard', url: 'https://www.business-standard.com/economy/news/anti-dumping-duty-on-electrical-steel-may-push-transformer-costs-gtri-126062600655_1.html' },
        { label: 'CRGO steel shortage could impact India\'s power sector expansion plans — Business Standard', url: 'https://www.business-standard.com/industry/news/crgo-steel-shortage-could-impact-india-s-power-sector-expansion-plans-gtri-124102800575_1.html' },
    ],
};
