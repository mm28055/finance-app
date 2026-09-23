import { SectorOverview } from './types';
import { electricalTransformersBusinesses } from './electrical-transformers-businesses';
import { electricalTransformersValuationInputs } from './card-data/electrical-transformers';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const MAKERS = 'Transformer makers';
const PARTS = 'Components: bushings, reactors, instruments';
const MV = 'Medium-voltage equipment (multinational)';

export const electricalTransformers: SectorOverview = {
    sector: 'Electrical Transformers',
    title: 'Electrical Transformers',
    format: 'ranked',
    businesses: electricalTransformersBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: electricalTransformersValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Atlanta Electricals': 26,
            'Shilchar Tech.': 17,
            'Voltamp Transformers': 12,
            'Supreme Power': 22,
            'Transformers & Rect': 18,
            'Yash Highvoltage': 28,
            'Quality Power El': 24,
            'Rishabh Instruments': 16,
            'Schneider Ele. Infra': 15,
        },
    },
    standfirst:
        "Nine companies riding India's largest ever grid build-out and a global shortage of transformers. Five make transformers, three make the parts that go inside or alongside them, and one (Schneider) makes medium-voltage equipment for a multinational parent. Every one of them has a full order book, so the order book does not separate them. What does: which voltage classes each factory is approved for, how much of each contract passes on copper and steel price rises, and whether profit is turning into cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

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
            more: true,
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
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses five-year totals.',
            note: 'Shows who funds growth from its own cash and who needs borrowing or new shares. Acquisitions are not included, which flatters Atlanta (Atlanta Trafo) and Quality Power (Endoks, Mehru).',
            values: {
                'Atlanta Electricals': [-0.5, 5.1, 6.5, -2.3, 3.7, 2.5],
                'Shilchar Tech.': [-3.3, 11.8, 16.6, 3.5, 25.9, 13.3],
                'Voltamp Transformers': [4.2, 11.6, 12.2, 8.2, 0.7, 7.0],
                'Supreme Power': [-2.1, 6.6, -23.4, -2.1, -15.3, -9.4],
                'Transformers & Rect': [-0.6, 1.3, 1.0, -3.9, -8.5, -3.2],
                'Yash Highvoltage': [0.0, 5.6, 0.9, -18.7, -21.3, -11.1],
                'Quality Power El': [2.7, 10.7, 1.3, 10.7, -5.2, 1.1],
                'Rishabh Instruments': [-0.6, -0.4, 1.0, -1.5, -0.3, -0.3],
                'Schneider Ele. Infra': [6.1, 2.8, 5.9, 9.3, 4.2, 5.8],
            },
            cellNotes: {
                'Supreme Power': 'FY24–FY26: building the new Kannur plant.',
                'Yash Highvoltage': 'FY25–FY26: building the new bushing plant.',
                'Transformers & Rect': 'FY26: operating cash was negative as stock and customer bills swelled.',
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Investment portfolios are counted as cash for Voltamp and Shilchar only.',
            note: 'How many years of operating profit it would take to repay net debt. Below zero means more cash than debt.',
            values: {
                'Atlanta Electricals': [1.6, 0.3, 0.2, 0.4, -0.1],
                'Shilchar Tech.': [0.8, -0.3, -0.7, -0.5, -1.3],
                'Voltamp Transformers': [-4.1, -3.2, -2.9, -3.0, -3.0],
                'Supreme Power': [3.2, 0.6, 0.4, 0.4, 1.3],
                'Transformers & Rect': [3.8, 2.5, 1.7, 0.3, 0.8],
                'Yash Highvoltage': [0.1, 0.1, 0.2, -1.5, 0.3],
                'Quality Power El': [-2.4, -1.3, -0.3, -3.1, -1.2],
                'Rishabh Instruments': [0.0, 0.0, -1.3, -2.0, -1.0],
                'Schneider Ele. Infra': [6.4, 3.6, 1.8, 0.9, 0.7],
            },
            cellNotes: {
                'Voltamp Transformers': 'Includes a ₹995cr investment portfolio as cash.',
                'Transformers & Rect': 'FY26: borrowing rose with working capital (company figure: ₹424cr standalone debt).',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses five-year totals.',
            note: 'How capital-hungry growth is. Above 10% means the company is building plants much faster than sales.',
            values: {
                'Atlanta Electricals': [0.5, 0.8, 3.7, 9.1, 6.3, 5.0],
                'Shilchar Tech.': [0.0, 2.1, 2.5, 2.9, 3.5, 2.7],
                'Voltamp Transformers': [1.7, 0.6, 1.2, 3.1, 5.8, 2.8],
                'Supreme Power': [0.0, 0.0, 17.8, 27.6, 30.0, 20.5],
                'Transformers & Rect': [0.8, 0.7, 1.2, 11.7, 4.3, 4.5],
                'Yash Highvoltage': [10.8, 4.4, 12.0, 25.3, 25.1, 18.7],
                'Quality Power El': [2.2, 6.7, 15.9, 7.7, 13.6, 11.1],
                'Rishabh Instruments': [3.4, 5.3, 10.0, 10.6, 14.2, 9.3],
                'Schneider Ele. Infra': [1.7, 2.1, 2.6, 2.4, 3.6, 2.6],
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
            note: 'Higher means more sales from each rupee of plant and machinery. A sharp drop usually means a new plant or an acquisition that has not yet filled up.',
            values: {
                'Atlanta Electricals': [12.7, 18.6, 13.4, 16.4, 3.7],
                'Shilchar Tech.': [5.0, 7.2, 9.7, 10.6, 9.4],
                'Voltamp Transformers': [18.2, 20.7, 21.0, 16.4, 18.3],
                'Supreme Power': [15.7, 25.3, 26.8, 13.2, 2.2],
                'Transformers & Rect': [6.9, 9.1, 9.0, 8.0, 10.0],
                'Yash Highvoltage': [4.6, 5.3, 6.0, 3.6, 4.5],
                'Quality Power El': [5.4, 6.3, 4.6, 1.4, 3.5],
                'Rishabh Instruments': [2.1, 2.6, 2.6, 2.3, 2.1],
                'Schneider Ele. Infra': [5.0, 5.6, 5.5, 6.3, 6.3],
            },
            cellNotes: {
                'Atlanta Electricals': 'FY26: new plants and the Atlanta Trafo purchase added fixed assets.',
                'Supreme Power': 'FY26: the new Kannur plant, running at 20–25%.',
                'Quality Power El': 'FY25: the Endoks and Mehru acquisitions added fixed assets.',
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the Q1 FY27 call, presentation or annual report ÷ sales over the last four quarters (Screener).',
            note: 'Years of work already booked. Rishabh does not publish an order book. Voltamp and Schneider sell to industry on shorter cycles, so a lower figure is normal for them.',
            values: {
                'Atlanta Electricals': [1.6],
                'Shilchar Tech.': [0.8],
                'Voltamp Transformers': [0.7],
                'Supreme Power': [3.1],
                'Transformers & Rect': [2.6],
                'Yash Highvoltage': [1.7],
                'Quality Power El': [1.9],
                'Rishabh Instruments': [null],
                'Schneider Ele. Infra': [0.7],
            },
            cellNotes: {
                'Supreme Power': 'Management guides lower revenue than the order book implies, because 10–20% of customers may not be ready to take delivery.',
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
            heading: '1. Recommendation, up front',
            body: [
                "**Atlanta Electricals is the one I would own.** It is climbing the voltage ladder faster than any other maker here: Power Grid has approved its Vadod plant for 400 kV, and it bought a plant built for 765 kV, the classes where only a handful of companies can bid. Revenue grew 48% in Q1 on volume, and price-variation clauses on most utility orders kept its margin steady through the copper spike. The price roughly matches the ~26% a year I expect it to grow. The weak spot is cash: only about half its operating profit has become cash over five years, and its 765 kV design is licensed for a royalty rather than owned.",
                "**Shilchar is the high-return maker to buy while the news is bad; TARIL is the one to watch for cash.** Shilchar is debt-free, has earned 51–75% on capital for four years and is doubling capacity from its own cash, but its exports stalled on freight costs and its margin halved in Q1. The price asks for slightly more growth than I expect from today's lower base, so I would buy in steps. TARIL has the widest range in India (up to 1,200 kV), a ₹6,630cr order book and a price that fits my estimate, but it turned only 11% of five years' operating profit into cash. Two quarters of positive operating cash would make it a buy.",
                "**The component makers have the best moats and full prices.** Yash (bushings, 96% repeat orders) and Quality Power (reactors and HVDC parts approved by Hitachi, Siemens and GE Vernova) sell to every transformer maker, so they win whoever wins the tender. Both are priced for close to 30% growth a year for a decade. Yash is near that; Quality Power is further away, especially once you remember that partners own 49% of its two largest businesses. Supreme is the opposite case: cheap, with the best-protected contracts in the sector, but small, SME-listed and still filling a new plant.",
                "**Two things to hold onto before reading the rest.** First, **the order book does not separate these companies; the contract and the voltage class do.** Everyone has a full order book. What differs is whether the contract passes on copper and steel prices (Supreme, Atlanta and TARIL mostly do; Schneider mostly does not) and whether the factory is approved for 400 kV and above, where rivals are few. Second, **everyone is adding capacity at once**, so the 66–220 kV band, where most of this sector sits, will feel price pressure first. I would **wait on Voltamp** (safe and cash-rich, but priced above the growth it is likely to deliver), **pass on Rishabh** (a good instruments business tied to a loss-making die-caster) and **avoid Schneider**, whose price needs close to 40% growth a year from a business earning a 5% margin.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**. Companies are grouped by business. All figures are filed (Screener): Schneider, Voltamp, Shilchar, Supreme and Yash standalone (their main or only business), the rest consolidated. Yash reports half-yearly, so its quarterly figures sit in two columns. Hover over a starred name for its caveat. **Start with cash conversion and free cash flow**: they separate this sector more than margins do. The cash conversion cycle shows how many days cash is tied up in bills and stock; net debt ÷ operating profit shows who is borrowing to grow; capex ÷ sales and sales per rupee of fixed assets show who is building new plants; order book ÷ yearly sales shows how many years of work each has booked.",
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
                {
                    label: 'What these companies actually depend on',
                    text: "The label says transformers, but each share moves on something different. **Atlanta** and **TARIL** depend on Power Grid and state transmission tenders, and on winning approvals at 400 kV and above. **Shilchar** depends on exports and freight: over half its sales go abroad and customers collect from its factory. **Voltamp** and **Schneider** depend on Indian industry and data centres rather than the grid. **Supreme** depends on filling one new plant with southern utility orders. **Yash** and **Quality Power** depend on transformer and HVDC makers everywhere outsourcing parts to them, and **Rishabh** on its instruments outgrowing its die-casting losses. **Buy each for what it actually depends on, not for the sector label.**",
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
                    label: 'Lasting: small, critical parts approved by the world’s equipment makers',
                    text: "**Yash**'s bushings are about 5% of a transformer's cost, but a failed bushing can destroy the transformer, so buyers do not switch supplier to save a little money; 96% of its orders are repeat. **Quality Power**'s HVDC reactors and power-quality systems go through years of audits by Hitachi, Siemens and GE Vernova, and once designed into a transmission link they are hard to replace. These edges should outlast the current shortage. The risk is Chinese parts being allowed back into India.",
                },
                {
                    label: 'Lasting but shrinking: voltage approvals',
                    text: "**TARIL** (up to 1,200 kV) and **Atlanta** (Power Grid 400 kV approval, a plant built for 765 kV) hold approvals that take years to earn. At 400 kV and above this edge will hold, because each factory must pass a destructive short-circuit test and Power Grid's approval. At 220 kV it is thinning: Shilchar, Voltamp and Supreme are all adding 220 kV plants now, and Chinese makers with Indian plants can bid in public tenders.",
                },
                {
                    label: 'Wearing away: the shortage premium in standard transformers',
                    text: "**Shilchar**, **Voltamp** and **Supreme** earn good margins partly because the world is short of transformers. Their real edges are narrower: Shilchar's is speed and an export network, Voltamp's is a long record with industrial buyers, Supreme's is its contract terms. As the capacity now being built arrives over the next two to three years, expect their margins to drift back toward the low-to-mid teens.",
                },
                {
                    label: 'Barely a moat: tenders and commodity work',
                    text: "**Schneider** has world-class technology, but state distribution tenders fix prices and only 20–25% of its contracts reprice, so the technology does not protect its margin. **Rishabh**'s die-casting arm is a commodity business with no edge; its instruments business does have one (own designs, 60–70% gross margins). Distribution transformers below 33 kV, which several companies here also make, are sold on price.",
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
                "Are the margins structural? A transformer margin lasts if the contract passes on metal prices and the product sits in a scarce voltage class. It is fragile if the contract is fixed-price or the product is standard. Q1 FY27, with copper, oil and freight all rising, was the test.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: components and instruments',
                    text: "**Yash** raised its margin to about 26% in FY26 and says it prices orders to cover supplier and currency increases; a critical part with few makers keeps pricing with the seller. **Quality Power**'s HVDC and power-quality businesses earn well above its Mehru instrument-transformer arm (about 18%). **Rishabh**'s instruments earn about 25% on 60–70% gross margins. **I expect these margins to hold through the cycle**; Quality Power's Q3 will dip as the new Sangli plant's costs arrive before its revenue.",
                },
                {
                    label: 'Cyclical: transformer makers at a high point',
                    text: "**Atlanta** (16–20%), **TARIL** (15–17%, up from under 3% in FY22), **Voltamp** (13–19%) and **Supreme** (15–16%) all earn more than they did before the shortage. Price-variation clauses protect Atlanta, TARIL and Supreme against metal prices, which is why they held through Q1. But clauses do not protect against competition, and the capacity being built across the industry should bring margins in the 66–220 kV band down by a few points over two to three years. Atlanta and TARIL, with more 400 kV work, should lose less. Voltamp's own annual report says its margins will normalise.",
                },
                {
                    label: 'Not structural: fixed prices and freight',
                    text: "**Schneider**'s margin fell from 17% to 5% in two quarters because only 20–25% of its contracts reprice and it raised prices later than rivals; margins recover only as the old fixed-price orders run off. **Shilchar**'s 30%+ margins came from high export prices; when freight costs jumped three to five times, exports stalled, it recovered only 50–60% of cost rises on old orders, and its margin fell to 16%. Its domestic orders earn roughly 10% less than exports, management says.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**TARIL** tied up ₹848cr in working capital over FY22–FY26: ₹699cr in customer bills and ₹358cr in stock, partly offset by suppliers. Its suppliers are now paid in 62 days, down from 129, and it holds 133 days of stock, up from 104, after stocking up on steel and copper. That is why only 11% of its operating profit became cash. **Atlanta** tied up ₹312cr: its customers pay faster (84 days, from 145) but it now pays suppliers in 112 days instead of 192, so it lost much of the supplier funding it used to have.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Yash** holds 201 days of stock, up from 130, as it builds the new plant and adds the Sukrut business; this is the main reason only a third of its profit has become cash. **Shilchar** pays suppliers in 64 days, down from 93. **TARIL**'s cash cycle reached 200 days in FY26, the longest here. If these reverse as plants settle, cash conversion will improve; if not, more equity or debt will be needed.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Shilchar**'s customers now pay in 86 days (from 140) and **Supreme**'s in 87 (from 140), which is why both turned most of their FY26 profit into cash. **Quality Power** cut its stock from 139 to 74 days. **Atlanta**'s faster collections are real, even though paying suppliers sooner has absorbed the gain.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**Rishabh** holds about 213 days of stock across thousands of instrument variants, and its cycle has been 165–190 days for five years. **Voltamp** holds about 126 days of stock and, on Screener's figures, owes its suppliers almost nothing at year end; over five years its stock absorbed ₹261cr, more than its whole ₹235cr working-capital build. **Schneider**'s 61-day cycle is the shortest here, because suppliers fund most of its stock. **Judge these against their own history, not against each other.**",
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
                    label: "Growth driver: India's transmission build-out",
                    text: "Renewable plants are far from cities, so India has to build long 400 kV and 765 kV lines and the substations at each end. This is the largest and longest-lasting driver, running well into the 2030s. **Atlanta** (400 kV from FY28, 765 kV bids from Q4 FY27) and **TARIL** (range to 1,200 kV, one Power Grid order above ₹1,000cr) benefit most, and **Yash** and **Quality Power** supply parts into every such transformer and HVDC link. The catch is that government buyers pay slowly and hold back money until commissioning.",
                },
                {
                    label: 'Growth driver: the global transformer shortage',
                    text: "Large makers abroad quote lead times of two years or more, so buyers in the US, Middle East and Europe are turning to Indian factories. **Shilchar** (half its sales abroad), **TARIL** (a ₹150cr US order), **Yash** (exports targeted from 7% to 20%+) and **Quality Power** (100+ countries) benefit. I expect this to last two to three more years, until new capacity worldwide catches up. Freight costs and tariffs decide how much of it reaches the profit line, as Shilchar's Q1 showed.",
                },
                {
                    label: 'Growth driver: renewables, storage and data centres',
                    text: "Every solar or battery plant needs inverter-duty transformers, and every data centre needs distribution transformers and switchgear. **Atlanta** (19% of Q1 revenue from renewables, a new 5,000 MVA inverter-duty plant), **Shilchar** (solar and wind units), **Quality Power** (a 4 GW storage-converter plant) and **Schneider** (data centres and chip plants over a fifth of its backlog) benefit. Data-centre capacity in India is expected to rise about fivefold by 2030, but these orders are smaller and more contested than transmission.",
                },
                {
                    label: 'Growth driver: making parts in-house',
                    text: "India imports most of its CRGO steel, bushing cores and many specialist parts. **Yash** is starting to make its own bushing cores, and **TARIL** is spending ₹900–1,000cr to make 80–85% of its inputs itself, which it says adds 2–3 points of margin from FY28. This is a margin driver more than a sales driver, and it takes cash before it pays back.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Atlanta** grew 49% in FY26 and 48% in Q1 against a 40% a year plan, on volume from new plants. **Yash** grew 57% in FY26 and raised its margin. **Quality Power** delivered, helped by acquisitions. **Rishabh** met its FY26 guidance, with instrumentation up 34% in Q1.",
                },
                {
                    label: 'Cautious',
                    text: "**Voltamp** gives no guidance and holds no calls, but its annual report warns that margins will normalise and competition is rising. **Shilchar** kept its ₹800cr FY27 target but only on a full export recovery, and says its new plant drives growth from FY28.",
                },
                {
                    label: 'Missed',
                    text: "**Supreme** cut its FY26 guide from ₹225cr to ₹200cr and still delivered ₹190cr; it now guides ₹250–300cr for FY27. **Schneider** missed on margins for three quarters and gives no margin timeline. **TARIL** has walked back earlier targets and now guides +25% for FY27 and ₹8,000cr by FY29.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Shilchar**'s Q1 fell short on exports, though the annual report was optimistic. **Quality Power** warned of a weaker Q3 as the Sangli plant's costs arrive ahead of revenue. How many years of work each company has booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
                {
                    label: 'My outlook',
                    text: "Grid spending should stay strong for at least three to four years, and the global shortage supports exports for two to three. But capacity is rising faster than demand in the 66–220 kV band. **I expect the component makers and the companies climbing into 400 kV and above to hold their margins, and the standard-range makers to grow volume at lower margins.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Atlanta Electricals', 'Volume, then 400 kV and 765 kV', '18% / **26%** / 34%'],
                        ['Shilchar Tech.', 'Capacity doubling; exports returning', '8% / **17%** / 25%'],
                        ['Voltamp Transformers', 'New 220 kV plant; margins normalising', '6% / **12%** / 18%'],
                        ['Supreme Power', 'New plant filling; larger transformers', '10% / **22%** / 32%'],
                        ['Transformers & Rect', 'Order book; backward integration', '8% / **18%** / 28%'],
                        ['Yash Highvoltage', 'New bushing plant; exports; own cores', '20% / **28%** / 38%'],
                        ['Quality Power El', 'HVDC, storage converters, acquisitions', '15% / **24%** / 32%'],
                        ['Rishabh Instruments', 'Instrumentation growth; die-casting breakeven', '8% / **16%** / 24%'],
                        ['Schneider Ele. Infra', 'Margin recovery from a low base', '5% / **15%** / 25%'],
                    ],
                    note: 'My own judgement, not guidance. Shilchar’s and Schneider’s starting profit is depressed, which flatters their near-term growth. The growth each price needs is in the live valuation table in section 8.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'CRGO steel and metal prices',
                    text: "CRGO steel is a quarter to two-fifths of a transformer's material cost, about 90% imported, and under an anti-dumping investigation since June 2026, with a verdict expected around March. A duty would be a lasting cost increase. **Supreme, Atlanta and TARIL** have price-variation clauses on most orders; **Schneider** (20–25% covered) and **Shilchar** (50–60% recovered on old orders) would absorb more. **Voltamp does not disclose** its coverage at all.",
                },
                {
                    label: 'Overcapacity and Chinese competition',
                    text: "Every company here is adding capacity into the same cycle, and Chinese makers with Indian plants can now bid in public tenders. **Atlanta** says it has seen no effect on pricing yet and plans exports as a hedge. **Voltamp**'s report warns of 'aggressive pricing trends'. The 66–220 kV band would feel it first, which exposes **Shilchar, Voltamp and Supreme** more than Atlanta or TARIL.",
                },
                {
                    label: 'Customers not ready, and freight',
                    text: "**Supreme** guides ₹250–300cr against ₹377cr scheduled because 10–20% of customers may not be ready. **Schneider**'s revenue fell 41% quarter on quarter in early 2026 when contractors deferred dispatches. **Shilchar**'s ₹30–35cr of finished exports sat uncollected when freight costs jumped. The order book is not the revenue.",
                },
                {
                    label: 'Working capital and funding',
                    text: "**TARIL** consumed cash in FY26 with a 200-day cycle and funds its ₹900–1,000cr backward integration from QIP money, leases and debt. **Yash** is raising ₹100–110cr of equity. **Supreme** says it needs no equity this year but is rated BBB by CRISIL and may need more capital by FY28. **Quality Power**'s cash is falling as it funds the Sangli plant and an acquisition itself.",
                },
                {
                    label: 'Disclosure and governance',
                    text: "**Voltamp** holds no calls and gives no guidance or product split. **Quality Power**'s partners own 49% of Endoks and Mehru, so a large share of group operating profit is not shareholders'. **Rishabh no longer discusses a demerger** of its die-casting arm. **Yash** had a cyber-incident loss now under police investigation. **Supreme** and **Yash** are SME-listed, with thinner disclosure and trading.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **16% at 25x, 19% at 33x, 20% at 35x, 26% at 60x, 31% at 88x, 32% at 90x and 39% at 152x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Voltamp and Shilchar are cheaper than their P/E suggests**: both hold large cash and investment portfolios. **TARIL and Schneider are slightly dearer**, because they carry net debt. **Quality Power's EV/EBITDA flatters it**: its operating profit includes all of Endoks and Mehru, but partners own 49% of both, so shareholders own less of that profit than the figure implies. Its P/E, which counts only shareholders' profit, is the better guide.",
                },
                {
                    label: 'Reasonable',
                    text: "**Atlanta** (price matches the growth I expect, but cash conversion is only about half), **Supreme** (the cheapest here against its growth, but small and unproven at scale) and **TARIL** (fair if its cash turns positive).",
                },
                {
                    label: 'Full',
                    text: "**Shilchar** (a little above my estimate from a depressed base; the best balance sheet among the makers), **Yash** (the best moat, priced close to the growth I expect) and **Rishabh** (a price that assumes the die-casting problem is solved).",
                },
                {
                    label: 'Stretched',
                    text: "**Voltamp** (the price needs far more than the ~12% growth I expect, even after its cash), **Quality Power** (needs clearly more than I expect, and the partners' share makes it dearer still) and above all **Schneider**, priced for close to 40% growth a year on a 5% operating margin.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Atlanta Electricals', rank: 1, stance: 'SCALEUP', segment: MAKERS,
            what: "Power transformer maker (5 MVA to 500 MVA) moving from 220 kV up to 400 kV and 765 kV, with a new plant for solar and storage transformers.",
            view: "**The best execution among the transformer makers.** Revenue grew 48% in Q1 on volume, the margin held at 16.5% thanks to price-variation clauses, and return on capital has been 45–66% for four years. It holds Power Grid's 400 kV approval and bought a plant built for 765 kV. The price roughly matches my ~26% growth estimate.",
            watch: '400 kV short-circuit test; the 765 kV technology tie-up and its royalty; cash conversion (48% over five years).',
        },
        {
            company: 'Shilchar Tech.', rank: 2, stance: 'CYCLICAL', segment: MAKERS,
            what: "Debt-free Gujarat maker of power, distribution, solar and wind transformers up to 132 kV, half of it exported to the US, Middle East and Africa.",
            view: "**The best-value transformer maker, in a bad patch.** Return on capital has been 51–75% for four years, it is debt-free with ₹202cr of investments, and it is doubling capacity to 14,000 MVA from its own cash. But Q1 revenue fell 15% and the margin fell to 16% as exports stalled on freight costs. The price asks slightly more than my ~17% estimate.",
            watch: 'Freight costs and export collection; Q2 margin; the 220 kV plant from April 2027.',
        },
        {
            company: 'Transformers & Rect', rank: 3, stance: 'TURNAROUND', segment: MAKERS,
            what: "One of India's largest transformer makers: power, distribution, furnace, rectifier and specialty transformers and reactors up to 1,200 kV.",
            view: "**Real assets, poor cash.** A ₹6,630cr order book, 75,000+ MVA of capacity and approvals up to 1,200 kV. But it turned only 11% of operating profit into cash over five years, consumed ₹105cr in FY26 with a 200-day cash cycle, and has walked back guidance. The price fits my ~18% estimate if execution and cash improve.",
            watch: 'Changodar utilisation (27%); working-capital days; operating cash turning positive.',
        },
        {
            company: 'Supreme Power', rank: 4, stance: 'SCALEUP', segment: MAKERS,
            what: "Chennai-based maker of power, distribution and solar transformers up to 200 MVA and 220 kV, selling to southern utilities, EPC firms and industry; listed on the NSE SME platform.",
            view: "**Cheap, well-protected contracts, small and untested at scale.** The order book (₹590cr) is three times revenue, 77% power transformers, and 80–85% carries price-variation clauses. But its new plant runs at 20–25%, it cut its FY26 guidance and still missed it, and free cash has been negative. The price needs less growth than I expect.",
            watch: 'Utilisation at the new plant; the 165 MVA type test; move to the main board; funding needs in FY28.',
        },
        {
            company: 'Voltamp Transformers', rank: 5, stance: 'PRICED', segment: MAKERS,
            what: "Vadodara maker of oil-filled power and distribution transformers up to 120 MVA and dry-type transformers, sold mainly to industry rather than utilities.",
            view: "**A conservative, cash-rich company you cannot see into.** It is debt-free, holds ₹995cr of investments, proposes a ₹101cr dividend, and ran above 100% utilisation for two years. But it holds no calls and gives no guidance, profit before tax fell 7% in FY26, and it expects margins to normalise. The price needs far more than my ~12% estimate.",
            watch: 'The new 220 kV plant ramping up; margin trend; order book (₹1,510cr).',
        },
        {
            company: 'Yash Highvoltage', rank: 6, stance: 'PRICED', segment: PARTS,
            what: "Makes high-voltage transformer bushings (the insulated part that carries power through a transformer's wall), with a new plant designed for up to 550 kV, sold to transformer makers and utilities in 60+ countries; listed on the BSE SME platform.",
            view: "**The best moat in the sector, at a full price.** 96% of orders are repeat, it is one of fewer than 12 independent bushing makers worldwide, revenue grew 57% in FY26 and margin rose to 25.7%. It is localising the cores it now imports. But only 34% of profit became cash over five years and it is raising equity. The price needs a little more than my ~28% estimate.",
            watch: 'The new plant producing its own cores on time; exports rising from 7%; cash conversion.',
        },
        {
            company: 'Quality Power El', rank: 7, stance: 'PRICED', segment: PARTS,
            what: "A group of specialist grid-equipment makers in India and Turkey: reactors and HVDC coils, instrument transformers, STATCOMs and storage converters, sold to global equipment makers and utilities.",
            view: "**Deep technology and a good record, priced for more.** It supplies Hitachi, Siemens and GE Vernova, has a ₹1,945cr order book and books orders above its margin guide. But partners own 49% of its two largest businesses, the Sangli plant needs about 60 customer audits, and the price needs clearly more than my ~24% estimate.",
            watch: 'Sangli approvals; the insulator acquisition; hyperinflation accounting in Turkey.',
        },
        {
            company: 'Rishabh Instruments', rank: 8, stance: 'TURNAROUND', segment: PARTS,
            what: "Electrical measuring instruments, current transformers, meters and solar inverters (India, Poland, US, China), plus a loss-making aluminium die-casting business in Poland.",
            view: "**A good business inside a weak one.** Instrumentation grew 34% in Q1 at a 24.8% margin, but die-casting (31% of FY26 revenue) still loses money, so group return on capital has been 5–15%. Free cash over five years was about zero. The price needs more than my ~16% estimate.",
            watch: 'Die-casting breakeven by end FY27; any sale or demerger; US growth.',
        },
        {
            company: 'Schneider Ele. Infra', rank: 9, stance: 'AVOID', segment: MV,
            what: "Schneider Electric's Indian listed unit: distribution transformers, medium-voltage switchgear and ring main units up to 33 kV, protection relays and grid software.",
            view: "**A good franchise at a price that ignores its margins.** Orders hit a record ₹915cr and the backlog rose 33%, with data centres and chip plants over a fifth of it. But only 20–25% of contracts reprice, the Q1 operating margin was 5%, it cannot bid above 33 kV, and it carries ₹633cr of borrowings. The price needs close to 40% growth a year.",
            watch: 'Margin recovery as old fixed-price orders run off; share of contracts with price variation.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Transformer makers.** **Atlanta: own.** The approvals, the growth and contracts that pass on costs, at a price that matches its plan; watch its cash. **Shilchar: own, buying in steps.** The highest returns and a debt-free balance sheet, bought while its exports are stalled. **TARIL (Transformers & Rectifiers): wait.** Real assets and a price that fits, but it must show two quarters of positive operating cash first. **Supreme: follow.** Cheap, with the best contract protection, but small, SME-listed and behind its own guidance; a small position at most. **Voltamp: wait.** Safe and cash-rich, but no disclosure, margins normalising and a price well above the growth I expect.",
            "**Component makers.** **Yash: follow.** The best moat in the sector at a full price, with weak cash conversion while it builds; buy on a fall. **Quality Power: follow.** Excellent technology, but the price needs more than I expect and partners own 49% of its two biggest businesses. **Rishabh: pass.** Good instruments held back by a loss-making die-caster.",
            "**Medium-voltage equipment.** **Schneider: avoid.** Good technology and record orders, but little price protection, no access to high-voltage transmission and a price that needs close to 40% growth a year.",
            "**What would change my view.** A CRGO anti-dumping duty would hit fixed-price contracts (Schneider, Shilchar's old orders) hardest. Falling freight costs would help Shilchar first. Signs of price cutting in 132–220 kV tenders would hurt the standard-range makers. Two quarters of positive cash at TARIL would move it to own.",
            "**What to watch next quarter.** Atlanta's 400 kV test; Shilchar's export recovery; Voltamp's new plant; Supreme's utilisation; TARIL's cash flow; Yash's new plant; Quality Power's Sangli audits; the CRGO probe.",
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
