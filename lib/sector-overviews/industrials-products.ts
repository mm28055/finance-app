import { SectorOverview } from './types';
import { industrialsProductsBusinesses } from './industrials-products-businesses';
import { industrialsProductsValuationInputs } from './card-data/industrials-products';

// Industrials · Consumables and industrial products. One of the group tabs on the Industrials page
// (the former Industrial Manufacturing and Industrial Products sectors, merged on 29 Sep 2026).
// Company verdicts, profiles, chart data and valuation inputs moved unchanged from those two notes;
// the group analysis below is written for these eight companies.

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CONSUME = 'Consumables and wear parts — used up and re-ordered';
const SCARCE = 'Scarce approvals and protected markets';
const BRAND = 'Branded electrical and electronic products';

export const industrialsProducts: SectorOverview = {
    sector: 'Industrials',
    title: 'Consumables and industrial products',
    format: 'ranked',
    businesses: industrialsProductsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialsProductsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Ador Welding': 14,
            'Diffusion Engineers': 16,
            'Carborundum Univer.': 20,
            'Tega Industries': null,
            'HBL Engineering': 12,
            'Borosil Renewables': 10,
            'Aditya Infotech': 25,
            'HPL Electric': 12,
        },
    },
    standfirst:
        "Eight companies that sell something customers buy again and again: welding consumables (**Ador Welding**), hard-facing wear protection and the heavy equipment that uses it (**Diffusion Engineers**), abrasives and engineered ceramics (**Carborundum Universal**), mill liners and grinding balls for copper and gold mines (**Tega Industries**), Kavach train-safety systems and batteries (**HBL Engineering**), solar glass (**Borosil Renewables**), CP PLUS CCTV cameras (**Aditya Infotech**) and smart meters and electrical goods (**HPL Electric**). This is one of three groups on the Industrials page, which brings together the former Industrial Manufacturing and Industrial Products sectors. What these eight share is repeat demand; what separates them is who sets the price. The research behind it is the last two earnings calls (HBL holds none), the Q1 FY27 presentations, the FY26 annual reports and rating reports, all carried over from those two notes. This year's oil, copper and wage spike was the test: Ador raised its prices, Tega's contracts and Aditya Infotech's price rises passed costs on, while Carborundum's abrasives and HPL's meters paid much of the rise themselves. **Two of the eight, HBL and Borosil, earn margins set by one programme or one import duty, so this note judges each company on what its profit actually rests on, not on the latest quarter.**",
    lastUpdated: '2026-09-29',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Consolidated.',
            note: 'Operating margin excludes other income. Three levels: HBL and Borosil earned 12–44%, swinging with one programme or one duty; the consumables makers mostly 9–15%; the branded makers 8–18%. Tega’s Q1 FY27 figure is the Molycop deal quarter.',
            values: {
                'Ador Welding': [-2, 12, 15, 15, 12],
                'Diffusion Engineers': [14, 14, 14, 15, 13],
                'Carborundum Univer.': [10, 12, 12, 10, 9],
                'Tega Industries': [16, 17, 11, 11, 3],
                'HBL Engineering': [32, 44, 35, 12, 23],
                'Borosil Renewables': [18, 31, 32, 31, 31],
                'Aditya Infotech': [8, 12, 12, 18, 15],
                'HPL Electric': [15, 15, 15, 17, 12],
            },
            cellNotes: {
                'Ador Welding': 'Q1 FY26 included the last losses of its exited projects business.',
                'Tega Industries': 'Q1 FY27 includes the first quarter of the Molycop acquisition and its deal costs.',
                'HBL Engineering': 'Q2 FY26 was the peak of a large locomotive Kavach order; it closed at 76% delivered, so Q4 FY26 fell to 12%.',
                'Borosil Renewables': 'Protected by import duties on solar glass; a fuel surcharge is being rolled back.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Tega’s Q1 FY27 jump is the Molycop acquisition.',
            values: {
                'Ador Welding': [-6, 4, 5, 3, 23],
                'Diffusion Engineers': [14, 2, 28, 38, 36],
                'Carborundum Univer.': [2, 6, 3, 15, 17],
                'Tega Industries': [5, 15, -1, -2, 384],
                'HBL Engineering': [16, 135, 94, 27, 6],
                'Borosil Renewables': [-6, 2, 8, 18, 17],
                'Aditya Infotech': [16, 38, 37, 46, 89],
                'HPL Electric': [-3, 3, 21, 5, 34],
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
            note: 'Borosil’s negative years reflect write-offs of its German subsidiary. Carborundum’s fall reflects losses and write-offs at units being shut. Tega’s FY26 figure is before the Molycop acquisition.',
            values: {
                'Ador Welding': [20, null, null, 20, 23],
                'Diffusion Engineers': [16, 18, 20, 15, 16],
                'Carborundum Univer.': [20, 20, 20, 16, 11],
                'Tega Industries': [19, 21, 19, 18, 8],
                'HBL Engineering': [13, 14, 36, 27, 59],
                'Borosil Renewables': [null, null, -4, -4, 25],
                'Aditya Infotech': [35, 28, 28, 19, 29],
                'HPL Electric': [6, 9, 11, 14, 13],
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
            note: 'Compare each company with its own history. Ceramics and heavy equipment take months to make; HPL carries 236 days of stock. The warning sign is a cycle rising while growth slows.',
            values: {
                'Ador Welding': [61, null, 93, 64, 53],
                'Diffusion Engineers': [132, 167, 143, 175, 159],
                'Carborundum Univer.': [154, 169, 163, 201, 187],
                'Tega Industries': [247, 244, 215, 212, 153],
                'HBL Engineering': [193, 188, 154, 202, 171],
                'Borosil Renewables': [null, 447, 196, 174, 96],
                'Aditya Infotech': [19, 22, 82, 51, 61],
                'HPL Electric': [337, 285, 276, 241, 221],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Negative means the business consumed cash while reporting a profit.',
            values: {
                'Ador Welding': [43, null, 49, 132, 94, 83],
                'Diffusion Engineers': [50, -17, 92, 20, 40, 39],
                'Carborundum Univer.': [45, 66, 81, 42, 63, 60],
                'Tega Industries': [8, 66, 79, 57, 150, 74],
                'HBL Engineering': [45, 81, 64, 63, 66, 65],
                'Borosil Renewables': [null, -4, 119, 172, 96, 84],
                'Aditya Infotech': [33, 35, -81, 11, 2, -3],
                'HPL Electric': [81, 66, 52, 54, 80, 66],
            },
            cellNotes: {
                'Aditya Infotech': 'FY26: operating cash of ₹13cr on ₹566cr of operating profit, because it pays chip suppliers in advance.',
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
            note: 'Acquisitions are not included. Tega’s capex is not reported separately on Screener after FY22, so its later years are blank.',
            values: {
                'Ador Welding': [15.6, 1.3, 1.4, 8.5, 8.2, 6.4],
                'Diffusion Engineers': [-0.2, -4.9, 1.4, -0.9, 0.5, -0.7],
                'Carborundum Univer.': [-9.5, 2.8, 7.8, 0.5, 1.1, 1.2],
                'Tega Industries': [-2.8, null, null, null, null, null],
                'HBL Engineering': [-0.5, 4.2, 8.8, 4.8, 17.8, 9.2],
                'Borosil Renewables': [-28.5, -39.7, -10.8, -0.6, 14.4, -8.3],
                'Aditya Infotech': [2.2, 2.1, -7.2, 0.0, -2.9, -1.7],
                'HPL Electric': [6.4, 4.8, 4.0, 3.5, 2.4, 3.9],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Ador, Diffusion, Carborundum, Borosil and HBL.',
            note: 'Below zero means more cash than debt. Six of the eight held net cash at March 2026; Tega’s net cash has since become about ₹11,200cr of group debt.',
            values: {
                'Ador Welding': [0.0, -0.4, -0.3, -0.9, -1.1],
                'Diffusion Engineers': [0.1, 0.8, -0.1, -3.1, -2.0],
                'Carborundum Univer.': [-0.5, -0.4, -0.8, -0.5, -0.8],
                'Tega Industries': [1.1, 1.2, 0.7, 0.6, -7.4],
                'HBL Engineering': [-0.4, -0.5, -0.7, -0.9, -0.8],
                'Borosil Renewables': [-1.2, 1.9, 6.9, 2.3, -1.2],
                'Aditya Infotech': [-0.1, 0.3, 1.6, 1.3, 0.1],
                'HPL Electric': [4.1, 3.4, 2.9, 2.3, 2.4],
            },
            cellNotes: {
                'Tega Industries': 'FY26 is before the Molycop acquisition, which added about ₹11,200cr of group debt.',
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
            note: 'Borosil builds furnaces ahead of sales; HPL’s capex jumped in FY26.',
            values: {
                'Ador Welding': [2.0, 2.6, 4.0, 3.7, 1.9, 3.0],
                'Diffusion Engineers': [5.5, 2.9, 11.6, 3.6, 5.2, 5.7],
                'Carborundum Univer.': [16.9, 6.5, 5.0, 5.7, 6.0, 7.4],
                'Tega Industries': [4.3, null, null, null, null, null],
                'HBL Engineering': [5.5, 4.7, 3.3, 7.8, 4.5, 5.0],
                'Borosil Renewables': [25.2, 39.1, 15.8, 7.4, 12.8, 17.6],
                'Aditya Infotech': [0.4, 0.3, 0.7, 0.8, 3.2, 1.4],
                'HPL Electric': [3.6, 3.5, 2.9, 4.6, 10.1, 5.3],
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
            note: 'Higher means more sales from each rupee of plant. Aditya Infotech outsourced much of its production until it built its Kadapa plant.',
            values: {
                'Ador Welding': [3.8, 5.6, 6.8, 5.7, 5.6],
                'Diffusion Engineers': [3.4, 4.0, 3.1, 3.4, 3.7],
                'Carborundum Univer.': [3.3, 3.0, 3.0, 2.9, 2.7],
                'Tega Industries': [3.2, 2.2, 2.5, 2.6, 2.6],
                'HBL Engineering': [4.7, 4.3, 6.3, 5.0, 7.5],
                'Borosil Renewables': [2.0, 0.9, 1.5, 1.9, 2.5],
                'Aditya Infotech': [29.9, 35.2, 39.7, 4.2, 5.2],
                'HPL Electric': [2.3, 2.8, 3.2, 3.4, 2.9],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'repeat', label: 'Repeat purchase', description: 'Consumed and re-ordered, worn out and replaced, or specified in for years.' },
            { key: 'tech', label: 'Technical barrier', description: 'Certification, approval, materials science or engineering a rival cannot easily copy.' },
            { key: 'power', label: 'Pricing power', description: 'A = many small buyers, or price rises that stuck; D = one buyer sets the price, or prices falling.' },
            { key: 'pass', label: 'Cost pass-through', description: 'A = passes cost rises on quickly; D = absorbs them.' },
            { key: 'own', label: 'Owns the technology', description: 'A = own design or recipe; D = licensed or bought in.' },
        ],
        rows: [
            { company: 'Ador Welding', trend: 'widening', trendNote: 'Raised prices in a cost spike and kept customers; loss-making projects exited.',
                grades: { repeat: { grade: 'A', note: 'Welding consumables bought every week' }, tech: { grade: 'B', note: 'Nuclear and shipyard approvals' }, power: { grade: 'A', note: '80–85% sold through distributors' }, pass: { grade: 'A', note: 'Gross margin up 2.5 points to 38%' }, own: { grade: 'B', note: 'Mature chemistry, own formulations' } } },
            { company: 'Diffusion Engineers', trend: 'widening', trendNote: 'Order book doubled to ₹210cr; margin held at 13–15% through a tungsten spike.',
                grades: { repeat: { grade: 'A', note: 'Hard-facing consumables and wear plates' }, tech: { grade: 'B', note: 'Own metallurgy and laboratory' }, power: { grade: 'B', note: 'Top 10 customers are 60–70% of sales' }, pass: { grade: 'B', note: 'Under 10% of orders carry price clauses' }, own: { grade: 'A', note: 'Uses its own consumables in its equipment' } } },
            { company: 'Carborundum Univer.', trend: 'stable', trendNote: 'Ceramics guided up to 23–25% growth; abrasives margin squeezed.',
                grades: { repeat: { grade: 'A', note: 'Abrasives are used up' }, tech: { grade: 'A', note: 'Own grain; 6N silicon carbide; armour ceramics' }, power: { grade: 'A', note: 'Over 30% of bonded abrasives (Crisil)' }, pass: { grade: 'C', note: 'Could not recover a ₹16cr resin shock quickly' }, own: { grade: 'A', note: 'Own materials science' } } },
            { company: 'Tega Industries', trend: 'stable', trendNote: 'Molycop acquisition doubles size and adds about ₹11,200cr of debt.',
                grades: { repeat: { grade: 'A', note: 'Liners wear out and are re-ordered' }, tech: { grade: 'B', note: 'Mine surveys and liner designs' }, power: { grade: 'A', note: '62% gross margin on consumables' }, pass: { grade: 'A', note: 'One-quarter lag; Molycop 85% indexed' }, own: { grade: 'A', note: 'Own rubber and composite compounds' } } },
            { company: 'HBL Engineering', trend: 'stable', trendNote: 'Kavach strong to FY28; management expects competition to cut it from FY29.',
                grades: { repeat: { grade: 'B', note: 'Kavach rollout over years' }, tech: { grade: 'A', note: 'Among the first two cleared for Kavach 4.0' }, power: { grade: 'C', note: 'Indian Railways and defence' }, pass: { grade: 'B', note: 'Contract terms' }, own: { grade: 'A', note: 'Own Kavach and battery technology' } } },
            { company: 'Borosil Renewables', trend: 'stable', trendNote: 'Capacity up 60%, but the margin depends on import duties.',
                grades: { repeat: { grade: 'C', note: 'Solar glass bought per project' }, tech: { grade: 'C', note: 'Commodity product' }, power: { grade: 'B', note: 'Module makers' }, pass: { grade: 'C', note: 'Fuel surcharge being rolled back' }, own: { grade: 'B', note: 'Own furnaces' } } },
            { company: 'Aditya Infotech', trend: 'widening', trendNote: 'Share doubled to 43% after testing rules removed Chinese chipsets.',
                grades: { repeat: { grade: 'B', note: 'Replacement and upgrades' }, tech: { grade: 'B', note: 'STQC-certified products' }, power: { grade: 'A', note: 'CP PLUS brand and wide distribution' }, pass: { grade: 'A', note: 'Raised prices 10–20%' }, own: { grade: 'C', note: 'Designs, but outsources manufacture' } } },
            { company: 'HPL Electric', trend: 'narrowing', trendNote: 'Meter prices falling; order book flat for five quarters.',
                grades: { repeat: { grade: 'C', note: 'Consumer products growing' }, tech: { grade: 'B', note: 'BIS-qualified meters' }, power: { grade: 'D', note: 'Gross margin 38% to 30%' }, pass: { grade: 'C', note: 'Tender prices' }, own: { grade: 'C', note: 'Standard products' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Ador Welding is the one I would own.** **Ador** is India's second-largest welding-consumables maker and the only large one not owned by a multinational. In FY26 it chose price over volume: standalone revenue grew only 2%, but gross margin rose 2.5 points to 38% and the welding segment earned 15.2% against 13.6% a year earlier. It turned 83% of five years' operating profit into cash, holds about ₹140cr of cash and investments with almost no debt, and has folded its loss-making flare-projects arm into a small product line. Q1 FY27 was softer than its 23% revenue jump suggests: the base carried a ₹27.9cr project charge, gross margin fell 240 basis points and the operating margin (11.6%) is still below the 12% base management promised to lift by 1–2 points. It has also not provided for a ₹36.4cr BIS penalty still in court, plus about ₹36cr of other disputed claims, against about ₹137cr of net cash. The price needs about {need:Ador Welding|15}% a year of earnings growth against my ~14%, which fits, though with little room for error.",
                "**Diffusion Engineers** makes the hard-facing wire, the wear plate and the heavy equipment that uses them, and acts as the Indian workshop for European and Japanese equipment designers. Revenue grew 21% in FY26 and 36.5% in Q1, and the order book doubled in fifteen months to ₹210cr; management talks of about 20% growth a year for three to four years. My estimate is about 16%, because about ₹8.6cr of Q1's ₹20.1cr pre-tax profit came from other income (mostly interest on unspent IPO money) and a one-off share of an associate's profit, debtor days have climbed to 115 against a promised 80–85, free cash has been negative for three years, and the Q1 margin slipped when a rise was promised. The price needs about {need:Diffusion Engineers|18}% a year, which still sits inside {Label:Diffusion Engineers|Fits}, but the price is not the test while the profit is not arriving as cash: operating cash was ₹74cr against ₹156cr of profit over FY22–FY26 (47%), and FY26 converted 46%. **It moves from own to follow, and returns to own when receivables come down and operating cash covers most of its profit.**",
                "**Follow three more, each for a different reason.** **HBL Engineering** moved from own to follow: FY26 sales rose 68% to ₹3,303cr, return on capital reached 59% and net cash is ₹887cr, but Kavach, the train anti-collision system, was almost half of FY26 sales from one customer, and the chairman's own annual report says Kavach sales and profit could decline from FY29; the price needs about {need:HBL Engineering|17}% a year against my ~12%, which is {Label:HBL Engineering|Full}. **Carborundum**'s ceramics are qualified into chip-making equipment, fuel cells and armour, but abrasives could not pass on a resin shock (Q1's abrasives profit leaned on a ₹25cr land gain) and a fifth of group assets, with ₹297cr of cash that cannot leave, sit in a sanctioned Russian subsidiary; the price needs about {need:Carborundum Univer.|32}% against my ~20%. **Borosil Renewables** earns 31% because imported glass is taxed, at prices management calls near peak while mostly captive Indian capacity nearly triples; hold it small, if at all.",
                "**Wait on Aditya Infotech and Tega; pass on HPL Electric.** **Aditya Infotech** (CP PLUS) doubled its share of Indian CCTV to 43% on a testing rule, but its profit is not arriving as cash: operating cash was −₹40cr against ₹1,039cr of profit over FY22–FY26, and FY26 converted only 4% (₹13cr on ₹368cr of profit). It also placed ₹1,500cr of new shares a year after its IPO, and the price needs about {need:Aditya Infotech|32}% a year against my ~25%. **It moves from follow to wait, and returns to follow when operating cash turns clearly positive and converts most of its profit.** **Tega** has the finest wear-parts model here, but it now owns Molycop and about ₹11,200cr of group debt, and lost ₹108cr in Q1 on deal costs and interest, while its own consumables missed their 15% growth target three years running; it is loss-making over the last year, so I give no estimate and it is not in the live table. **HPL** needs only about {need:HPL Electric|13}% a year against my ~12%, but it is cheap for a reason: meter prices fall with each repeat order from large installers, its gross margin dropped from 38% to 30% in one quarter, interest and depreciation eat over half its operating profit, and a ₹129.6cr Havells settlement went to the promoter group, not the company.",
                "**Three things to hold onto before reading the rest.** First, **this year's cost spike is the cleanest test of pricing power**: Ador simply raised prices, Tega passes costs on with about a quarter's lag and Aditya Infotech's 10–20% price rises stuck, while Carborundum's abrasives and HPL's meters paid much of the rise themselves. Second, **check the cash**: three of the seven with five years of filed cash flows (Diffusion, Borosil and Aditya Infotech) had negative free cash over the period. Third, **check what is inside the profit**: Borosil's includes a ₹75cr tax write-back, Ador's FY26 a ₹14cr receivable write-back, Diffusion's treasury income and HBL's the peak quarter of one big order, while Carborundum's is depressed by ₹135cr of write-offs and Tega's Q1 by about ₹190cr of one-off deal costs.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped by how they earn repeat business: consumables and wear parts, scarce approvals and protected markets, and branded products. All figures are filed (Screener) and consolidated. Tega's figures are before the Molycop acquisition except its Q1 FY27 quarter, and Screener shows no separate capex for it after FY22. Order books are stated on different bases, so there is no order-cover tab. **Start with cash conversion**: the fastest grower here, Aditya Infotech, has not yet turned profit into cash. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These eight companies share a demand backdrop, not an industry. India's investment cycle is alive: gross fixed capital formation (spending on machinery, buildings and infrastructure) grew 11.9% in Q1 FY27 to 34.3% of GDP, and factory output of capital goods rose 16.1% in July 2026 (MoSPI). Crisil Ratings expects capital-goods revenue to grow 12–14% in FY27 with operating margins “range-bound at 12–13%”, and ICRA expects steel use to grow 9–10% in FY27 after an 8.3% rise in Q1. But government capital spending is now growing about 10–12% a year rather than the 25–35% of recent years, and ICRA counted new project announcements nearly halving in Q4 FY26 before a rebound in Q1 FY27. **My view: demand for the steel-linked consumables (welding, abrasives) should grow about 7–10% a year to FY29, with defence electronics at 20% or more and Carborundum's ceramics guided to 23–25%; for HBL, Borosil and Aditya Infotech, one programme, one duty or one rule matters more than the cycle.**",
            ],
            points: [
                {
                    label: 'Where the profit sits',
                    text: "Position with the customer decides margin more than technology does. Inside **Carborundum**, ceramics earned about 25% at segment level in FY26 on ₹1,268cr of sales while abrasives earned about 9% on ₹2,271cr; ceramics were a quarter of sales and more than half of segment pre-tax profit. **Ador**'s welding segment earned 15.2%, and **Tega**'s original business earned 22% before one-offs in Q1, its consumables 24.1%, while Molycop runs at about 13%. **HBL** earned 34% in FY26 on the Kavach peak, and **Borosil**'s 31% comes from a duty, not a cost edge. **Aditya Infotech**'s gross margin rose 8.1 points in a year on price rises, and management calls 14–15% the new normal. At the other end, **HPL**'s metering margin dropped from 17.7% to 14.2% in a year as installers pushed prices down. **My view: the profit sits where a customer re-orders on a schedule or must re-qualify to switch; programmes, duties and rules hold margins only while they last.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Steel use and factory building drive **Ador, Diffusion and Carborundum**: welding is a ₹10,000–12,000cr market, 70% of it consumables (CARE). Mines drive **Tega**: copper is above $14,000 a tonne and gold near $4,400 an ounce, and the mill-liner market is put at about US$2.97bn in 2026, rising to US$4.59bn by 2034 (Fortune Business Insights). Government budgets drive **HBL**: railway capex is budgeted at ₹2,93,030cr in FY27, up 10.5%, but Kavach has been commissioned on only 2,633 route kilometres, trackside work has started on 21,794, and FY27's allocation is just ₹2,066cr; defence production hit a record ₹1.78 lakh cr in FY26 (+15.6%), which feeds its fuzes. Solar building drives **Borosil**: a record 44.6 GW was installed in FY26, with 53–55 GW of solar and wind expected in FY27 but 35–37 GW at risk of curtailment. The national smart-meter programme drives **HPL**, with about 7 crore of a planned 25 crore meters installed, and security spending plus a testing rule drive **Aditya Infotech**. **My view: the consumables follow steady industrial demand; the rest follow a budget, a mandate or a rule.**",
                },
                {
                    label: 'Policy, trade and costs',
                    text: "Four rules matter. Anti-dumping duties on Chinese and Vietnamese solar glass (from December 2024, for five years) and a 9.71% duty on Malaysian glass (extended in June 2026) created **Borosil**'s margin. The government's cyber-security testing rule for CCTV (STQC) shut out Chinese chips and took CP PLUS from 20% to 43% of the market (**Aditya Infotech**). Kavach exists because the railways mandated it (**HBL**), and smart-meter demand comes from the national roll-out programme (**HPL**). Costs are the other half: Brent was about US$104 in late September (+51% in a year), copper +42% and aluminium +24%, and Haryana and Uttar Pradesh raised minimum wages by 26–32% (HPL puts Haryana's rise at about 40%). **My view: Q2 and Q3 FY27 margins will lag revenue at every company that passes costs on with a quarter's delay; in this group that means Carborundum's abrasives, Diffusion and HPL.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Ador** depends on steel use, shipbuilding and holding its prices; **Diffusion** on cement, steel and power maintenance and on collecting its bills; **Carborundum** on ceramics scaling and on Russia and its German and South African exits; **Tega** on copper and gold mine output and on paying down Molycop's debt; **HBL** on Kavach tenders to FY28 and on new products after; **Borosil** on solar-glass duties and a captive-capacity wave; **Aditya Infotech** on the CCTV rule and chip supply; **HPL** on smart-meter prices. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Consumables and wear parts', 'Ador, Diffusion, Carborundum, Tega', '−2% to 17%', '8–23%', '**39–83%**', 'Re-ordered through distributors or on a mine’s schedule; margin set by channel, mix and one-offs'],
                        ['Scarce approvals and protected markets', 'HBL, Borosil', '12–44%', '25–59%', '**65–84%**', 'One programme or one duty; margins swing with big orders or the rule'],
                        ['Branded electrical and electronic products', 'Aditya Infotech, HPL', '8–18%', '13–29%', '**−3% to 66%**', 'A brand and an approval; Aditya’s cash goes into stock and chip advances, HPL’s meter prices keep falling'],
                    ],
                    note: 'Ador’s −2% is Q1 FY26, the quarter that carried its last flare-project loss. Tega’s 3% is the Molycop deal quarter, and its FY26 return on capital is before the deal.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Capital goods', 'Large companies’ order books ₹5.2 lakh cr (Dec 2025); 3.7 times a year’s sales', 'FY27 revenue **+12–14%**, margins 12–13%', 'Crisil Ratings, May 2026'],
                        ['Investment in the economy', 'Fixed investment +11.9% in Q1 FY27, 34.3% of GDP; capital-goods output +16.1% (July)', 'New project announcements volatile; private capex “subdued” in FY27', 'MoSPI; ICRA, Apr 2026'],
                        ['Steel use', '+8.3% in Q1 FY27 to 41.6 million tonnes', '**+9–10% in FY27**', 'JPC; ICRA, May 2026'],
                        ['Welding', '₹10,000–12,000cr; consumables 70%; organised players 50–55%', 'Grows with steel use', 'CARE Ratings, Jan 2026'],
                        ['Mill liners (Tega)', 'About US$2.97bn in 2026', 'US$4.59bn by 2034', 'Fortune Business Insights, cited in Tega’s annual report'],
                        ['Railways', 'FY27 capex ₹2,93,030cr (+10.5%); 39% spent by July', 'Coaches 10,392 (+9%), wagons 32,000, electric locos 1,800', 'PRS; Railway Ministry'],
                        ['Kavach', '2,633 route km commissioned; 21,794 taken up; 6,290 locos fitted', 'FY27 allocation only ₹2,066cr', 'Railway Ministry, Aug 2026'],
                        ['Defence', 'Production ₹1.78 lakh cr in FY26 (+15.6%); private share 24%', 'FY27 capital outlay +17.6%; ₹6.73 lakh cr of approvals in FY26', 'Ministry of Defence; PRS'],
                        ['Solar', 'Record 44.6 GW installed in FY26', '53–55 GW of solar and wind in FY27; 35–37 GW at risk of curtailment', 'JMK Research; Crisil Ratings'],
                        ['Solar glass duties', 'Anti-dumping duty on China and Vietnam from Dec 2024; 9.71% on Malaysia', 'Five years each; Malaysia extended June 2026', 'Borosil calls; Ministry notifications'],
                        ['CCTV testing rule (STQC)', 'In force; old stock barred from 1 April 2026; CP PLUS share 20.2% (FY25) to 43.3% (FY26)', 'Indian companies held over 80% of the market by February 2026', 'Counterpoint via Quest Review Center; Frost & Sullivan'],
                    ],
                    note: 'The MoSPI growth figures were read through press summaries of the release, not the release itself.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2. The **Pricing power** column joins two earlier gradings: for Tega, Aditya Infotech and HPL it grades pricing power directly, and for the other five how little power their customers hold (A = many small buyers). The test this year was simple: **when oil, copper, resins and wages rose, who got paid for it?**",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: consumables with brand, channel and approvals',
                    text: "**Ador** has about 17–18% of a fragmented welding market (management), 400-plus distributors who handle 80–85% of sales, and approvals covering 75–80% of shipyard needs plus nuclear work; it proved pricing power by holding prices in FY26. **Diffusion** makes its own strip, wire, electrodes, plates and equipment, and more than 80% of revenue is repeat. **Carborundum** has over 30% of Indian bonded abrasives (Crisil), makes its own grain, has cleared a four-to-six-year qualification for chip-equipment ceramics and supplies a leading fuel-cell maker with visibility to about 2028. **My view: a strong number two with its own channel earns good returns without winning share; that is Ador's model.**",
                },
                {
                    label: 'Lasting: wear parts designed for each mill',
                    text: "**Tega**'s liners are designed for each mill and 75% of orders are repeats; its gross margin held at 59–62% through the cost spike. A failed liner stops the mill, so mines rarely switch once a design is proven. Molycop, its new grinding-ball business, has over 50% share in its core regions and indexes about 85% of contracts to steel. **My view: this is one of the most durable barriers in the group, but with the acquisition Tega has become a lower-margin, steel-heavy business.**",
                },
                {
                    label: 'Created by a programme or a rule',
                    text: "**HBL** developed Kavach with the railways' design body since 2005, is certified to the highest safety level (SIL-4), was among the first two of about five vendors cleared for version 4.0, and calls itself the world's number two in industrial nickel-cadmium batteries. **Borosil**'s operating margin went from 4% in FY25 to 31% after the duties, with no change in its cost position; management says prices are “almost peak” and about 33 GW of new, mostly captive, glass capacity lands by March 2027. **Aditya Infotech**'s share doubled because a rule barred Chinese chips; 40-plus brands are now certified and its MD says “there is competition”, though it passed on 10–20% price rises with no visible loss of volume. **My view: a safety standard is more durable than a trade duty, but both can be rewritten; a moat someone else can take back is a lease, not an asset.**",
                },
                {
                    label: 'Barely a moat: the buyer sets the price',
                    text: "**HPL**'s meter prices fall with each repeat order from large installers, its metering margin dropped from 17.7% to 14.2% in a year, and in consumer products it is a value brand against much bigger names. Inside **Carborundum**, the abrasives business could not recover a ₹16cr resin shock quickly, while its ceramics could. **A company that cannot raise prices when every cost is rising does not have pricing power, whatever its growth rate.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "ESAB India, D&H Sécheron and Lincoln in welding; Grindwell Norton, 3M and Wendt in abrasives; Metso and ME Elecmetal in mill liners and grinding media; Medha Servo, Kernex and other approved vendors in Kavach; Exide and Amara Raja in industrial batteries; Xinyi, Flat Glass and Indian module makers' captive plants in solar glass; Hikvision and Dahua (shut out), Axis, Bosch and Hanwha in CCTV; Genus in meters; Havells, Polycab and KEI in cables.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Oil, copper, aluminium, steel, tungsten and resins all spiked after February 2026, and big manufacturing states raised minimum wages sharply. Crisil expects capital-goods margins to stay at 12–13%, so a company that held its margin through Q1 FY27 has told us more than one that jumped. Price lists and contracts, not the products, decided who kept their margin.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: consumables, ceramics and wear parts',
                    text: "**Ador**'s welding segment earned 15.2% in FY26 on a 38% gross margin, though Q1's gross margin slipped 240 basis points. **Carborundum**'s ceramics earned about 25% at segment level, and management guides 20.5–21%, while its Q1 ceramics profit was flat on 16.5% more sales because new chip and defence lines are not yet absorbing their costs. **Diffusion** has held 13–15% for years (Crisil: 11.8–15.4% over five years) because it consumes its own consumables. **Tega**'s original business earned 22% before one-offs in Q1 and consumables 24.1%. **My view: these should hold through the cycle, give or take two points; but Tega's group margin is now Molycop's, not Tega's.**",
                },
                {
                    label: 'Not structural: set by a programme, a duty or a buyer',
                    text: "**HBL**'s margin swung from 44% in the September 2025 quarter to 12% in March 2026 and 23% in June as one locomotive order came and went. **Borosil**'s 31% rests on duties and a ₹9.50 a square metre fuel surcharge now being trimmed. **Carborundum**'s standalone abrasives margin fell from a 15.3% FY26 average to 10.4% in Q1 on a ₹15–16cr resin and fuel hit. **HPL**'s gross margin fell from 38% to 30% in one quarter on metals, plastics and a 40% wage rise in Haryana. **Aditya Infotech**'s 18% in Q4 FY26 was a one-off from cheap old stock; management calls 14–15% normal, while memory-chip costs keep rising. **Treat these as the cycle, not the business.**",
                },
                {
                    label: 'Windfalls: profits lifted or cut by one-offs',
                    text: "**Borosil**'s profit includes a ₹75cr tax write-back and **Ador**'s FY26 a ₹14cr receivable write-back. About ₹8.6cr of **Diffusion**'s ₹20.1cr Q1 pre-tax profit came from other income and a one-off associate gain. **Carborundum**'s Q1 abrasives profit included a ₹25cr land gain, and analysts put the underlying margin near 2.5% against a 9.5–10% guide. In the other direction, **Tega**'s Q1 carried about ₹190cr of one-off deal costs. **Treat all of these as one-offs, not run-rate.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Aditya Infotech** tied up about ₹1,150cr in customer bills and stock (Screener), and its operating cash was ₹13cr in FY26 because it pays chip suppliers in advance. **HPL** ties up cash for about 221 days, with stock alone at 236 days. **Diffusion**'s debtor days rose from 87 to 115 (Crisil counts 132) against a promised 80–85, and **Carborundum**'s cycle went from 163 to 187 days.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Borosil** cut its cycle from 174 to 96 days and turned ₹423cr of operating cash in FY26. **HBL** came down from 202 to 171 days after building Kavach stock ahead of approval in FY25, and generated ₹738cr of operating cash. **Tega**'s original business cut its cycle from 247 to 153 days. **Ador** runs about 53 days. **HPL** converted 80% of FY26 operating profit, though capex left little free cash. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Ador Welding', 'No Q1 call (calls are half-yearly); ₹80cr of modernisation over about two years from internal cash', 'About ₹140cr of cash and investments; borrowings under ₹1cr (March)'],
                        ['Diffusion Engineers', '₹67cr of IPO money still unspent in August; debtor days put at 98, flattered by March roller sales', 'Borrowings ₹29cr against ₹108cr of cash and bank (March)'],
                        ['Carborundum Univer.', 'Capex ₹53cr in Q1 against ₹400cr planned for FY27; “capable of funding itself”', 'Borrowings ₹413cr (March); ₹297cr of Russian cash cannot leave Russia'],
                        ['Tega Industries', 'Tega capex about US$40m in FY27 including Chile; Molycop about US$28m for ten months; land sales possible', 'Group debt about ₹11,200cr incl. ₹2,600cr of preference shares; Crisil cut to A+'],
                        ['HBL Engineering', 'No calls; annual report says all expansion (batteries, fuzes, lithium cells) comes from internal accruals', 'Borrowings ₹67cr against ₹402cr of investments; net cash ₹887cr'],
                        ['Borosil Renewables', '₹286cr of issue money unspent (June); expansion now ₹1,100cr from own funds, no new borrowing', 'Borrowings ₹162cr against ₹606cr of investments (March)'],
                        ['Aditya Infotech', 'Capex ₹200–300cr in FY27; paying suppliers in advance to secure chips', 'Borrowings ₹256cr (March), before a ₹1,500cr share placement in September'],
                        ['HPL Electric', 'Capex beyond maintenance not ruled out; debt to stay “at this level”', 'Borrowings ₹755cr (March); Crisil A+'],
                    ],
                    note: 'Ador presented Q1 FY27 without a call; HBL holds no calls at all. Most companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 FY26 call, and my own estimate of earnings growth. Every estimate below weighs the capex under way and whether it is funded by cash, debt or new shares.",
            ],
            points: [
                {
                    label: 'Growth driver: steel, mines and plant maintenance',
                    text: "**Ador** grows with steel use and shipbuilding (welding material is about 2% of a ship's steel weight), reports its best-ever automation order book, and is adding two or three consumable lines over two years. **Diffusion** doubled heavy-engineering capacity from 9,000 to 18,000 tonnes, has an order book of ₹210cr and talks of about 20% growth a year for three to four years. **Carborundum** raised its like-for-like growth view to about 15%. **Tega** expects Molycop's volume to grow about 5% over ten months, US$20m of cost savings in 2–2.5 years and a Chile liner plant in March 2027. **My view: steady, steel-linked growth; the upside is in mix and share, not in the cycle.**",
                },
                {
                    label: 'Growth driver: ceramics, electrification and data centres',
                    text: "**Carborundum**'s ceramics are guided to grow 23–25%: its metallised cylinders ride switchgear moving away from SF6 gas and are being expanded in three phases over 18–24 months, power-electronics substrates start in FY28, and chip-equipment ceramics give “material revenue” from 2029, peaking in FY30. **HBL** doubled data-centre battery sales and is doubling that capacity. **Borosil** adds 60% more glass by end-March 2027 for about ₹330cr a year of extra operating profit at today's prices. **My view: ceramics and data-centre batteries are the deepest runways here; solar glass is the most exposed to prices.**",
                },
                {
                    label: 'Growth driver: railways, defence and policy',
                    text: "**HBL**'s order book was ₹2,999cr at 31 December 2025 (CARE; ₹4,479cr in July 2025, as Kavach deliveries shipped), and a ₹1,714cr Kavach locomotive order followed on 28 May 2026; the company has not published a total since; management calls FY27 and FY28 good years and expects decline from FY29. Its electronic fuzes are selling to the Home Ministry, with Army and 155 mm artillery approvals expected in 2027. **Aditya Infotech** guides FY27 revenue of ₹6,000–6,500cr on the CCTV rule and price rises, and is doubling capacity by FY28. **HPL**'s meters ride the national smart-meter roll-out, though installers now order only three to four months at a time. **My view: policy growth is real but arrives in lumps; I pay for it only when the money or the mandate has arrived.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Diffusion** grew 36.5% against “more than 20%”. **HBL** beat its FY26 budget of ₹3,000cr with ₹3,303cr and raised its FY30 scenario from ₹4,500cr to more than ₹5,000cr. **Carborundum** raised its like-for-like growth view to about 15% and ceramics to 23–25%. **Aditya Infotech** delivered 22–23% of its annual range in Q1 at a margin inside its guide. **HPL**'s consumer side is running above its ₹1,000cr target.",
                },
                {
                    label: 'Cautious',
                    text: "**Ador**'s message moved from 1–2 points of margin gain to margins “expected to remain at similar levels”. **Borosil** says prices are near their peak, cut its rooftop target from ₹75cr to ₹36cr, and faces a roughly 90-day rebuild of its older furnaces in the first half of FY28.",
                },
                {
                    label: 'Mixed',
                    text: "**Carborundum**'s Q1 abrasives profit included a ₹25cr one-off land gain, and only 13% of the year's capex was spent. **Diffusion**'s margin fell 27 basis points against a promised rise of 80–100 basis points, and its railway orders still wait for approval. **Tega**'s consumables grew 36%, helped by delayed Q4 shipments, but equipment fell 44% and consumables have missed their 15% target in each of FY24–FY26. **HPL** beat on revenue but its margin fell to 12%. **HBL**'s electric trucks slipped nine months.",
                },
                {
                    label: 'My outlook',
                    text: "Demand for the consumables should grow with steel use and industrial output, with ceramics, defence electronics and data-centre batteries faster. **I expect Aditya Infotech to compound earnings at about 25%, Carborundum at about 20% (from a base depressed by write-offs), Diffusion at about 16% (as treasury income fades), Ador at about 14%, HBL and HPL at about 12% (HBL because FY26 was a Kavach peak), and Borosil at about 10%.** I give no estimate for Tega, whose latest results are a loss. The shared risks are the pace of government spending, the mining cycle, a change to any of the three rules, and metal and energy prices staying high.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Aditya Infotech', 'CCTV growth; price rises; capacity doubling by FY28', '15% / **25%** / 32%'],
                        ['Carborundum Univer.', 'Ceramics +23–25%; exits of Awuko and Foskor; Russia', '10% / **20%** / 28%'],
                        ['Diffusion Engineers', 'Nimji plant; ~20% revenue growth; treasury income fading', '10% / **16%** / 22%'],
                        ['Ador Welding', 'Steel-linked volumes; margin toward 13–14%; exports', '8% / **14%** / 18%'],
                        ['HBL Engineering', 'Kavach strong to FY28, down from FY29; fuzes, batteries, e-drives', '4% / **12%** / 18%'],
                        ['HPL Electric', 'Consumer products; meter prices; interest', '5% / **12%** / 18%'],
                        ['Borosil Renewables', '+60% capacity from FY28; furnace rebuild; peak prices', '−5% / **10%** / 20%'],
                        ['Tega Industries', 'Molycop deleveraging; mining cycle', 'Loss-making after the deal; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8 (Tega is not in it).',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Ador Welding', 'Growth at least 6–8%; margin base ~12%, 1–2 points more “not immediate”; ₹2,000cr by FY29 a “principle”', '₹80cr over about two years, own cash', '**Mixed**: revenue +23% on a weak base; margin 11.6% against a 12% base'],
                        ['Diffusion Engineers', '~20% a year for 3–4 years; margin +1–2 points over 12–18 months', '~₹100cr IPO capex; ₹67cr unspent', '**Mixed**: revenue +36.5% beat; margin down 27 bp; plant phased; railways slipped'],
                        ['Carborundum Univer.', 'Like-for-like sales ~15%; ceramics +23–25%; abrasives margin 9.5–10%', '₹400cr in FY27; ₹53cr spent in Q1', '**Mixed**: growth raised; underlying abrasives margin far below guide'],
                        ['Tega Industries', 'Group margin about 15%; consumables 15% a year; debt to 3x in 3–4 years', 'About US$40m (Tega) and US$28m (Molycop)', '**Mixed**: consumables +36%; equipment −44%; deal costs below the flag'],
                        ['HBL Engineering', 'No formal guidance; Kavach good in FY27–FY28, decline from FY29; FY30 sales over ₹5,000cr', 'Small, internal: batteries, fuzes, lithium cells', '**Mixed**: FY26 beat its ₹3,000cr budget; e-trucks nine months late'],
                        ['Borosil Renewables', 'Margin 30–33%; ₹400–410cr a quarter; ₹4,000cr revenue in 3–4 years', '₹1,100cr (up ₹150cr), start end-March 2027', '**Mixed**: margin beat; rooftop cut; expansion later and costlier'],
                        ['Aditya Infotech', 'Revenue ₹6,000–6,500cr; margin 14–15%', '₹200–300cr; capacity doubled by FY28', '**On track**: Q1 22–23% of the range; cable venture slipped'],
                        ['HPL Electric', 'Consumer side about ₹1,000cr; margin back “as we reach Q3”', 'Maintenance plus undisclosed projects', '**Mixed**: revenue +35%; margin 12% after “no headwind”'],
                    ],
                    note: 'HBL compares its 2025 AGM with its FY26 annual report, because it holds no calls.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Peaks, rules and policy',
                    text: "**HBL**'s FY26 profit tripled on one programme with one customer, and management itself expects Kavach sales and profit to decline from FY29; the FY27 Kavach budget of ₹2,066cr is small against order books. **Borosil**'s margin exists because of duties that run to about 2029, and management calls prices “almost peak” while domestic capacity, mostly captive, nearly triples. **Aditya Infotech**'s share rests on a rule the government could relax, as it did for Chinese transformer makers. **HPL** faces Adani, which bought the installer IntelliSmart and may buy a meter maker. **These are not timing risks; they decide what normal profit is.**",
                },
                {
                    label: 'Debt, acquisitions and dilution',
                    text: "**Tega** paid about ₹13,325cr of enterprise value for Molycop; Crisil cut it two notches to A+ and expects net debt to peak at 4.0–4.5 times operating profit in FY27, about ₹5,000cr of goodwill sits on the books, and in September shareholders approved ₹95cr of new shares for an Apollo fund (a 0.6% dilution). **Borosil** issued ₹889cr of shares and warrants, cutting the promoter stake from about 62% to 56%. **Aditya Infotech** placed about ₹1,500cr of new shares in September, after its IPO. **HPL** has ₹755cr of borrowings, and interest and depreciation eat over half of its operating profit. **Growth funded by shareholders or lenders has to earn more than growth funded by customers.**",
                },
                {
                    label: 'Auditor remarks and accounting choices',
                    text: "**Carborundum**'s auditor drew attention to Awuko and Foskor being accounted for on a break-up basis (₹134.6cr of charges), and made its Russian unit a key audit matter: VAW is ₹1,190.8cr of assets, 22.5% of the group, with ₹297cr of cash that cannot be sent home. **HBL**'s auditor flagged the judgement in booking long contracts by percentage of completion, and HBL holds a ₹92.75cr Kavach warranty provision. **Tega**'s pre-deal and post-deal figures cannot be compared, and Screener shows no separate capex for it after FY22.",
                },
                {
                    label: 'Contingent liabilities, disputes and related parties',
                    text: "**Ador** has not provided for a ₹36.4cr BIS penalty still in court, plus about ₹36cr of other disputed tax and legal claims, and bought ₹31cr from its holding company. **HBL** has ₹303cr of bank guarantees outstanding (₹207cr a year earlier) and sought approval for up to ₹700cr a year of dealings with subsidiaries, a Cochin Shipyard joint venture and associates. **Aditya Infotech** carries ₹39cr of customs and ₹35cr of GST demands. **HPL**'s promoter entity has pledged about 2.42% of the shares, and a ₹129.6cr settlement from Havells went to the promoter group, not the listed company.",
                },
                {
                    label: 'Input costs, people and disclosure',
                    text: "Oil, copper, resins and wages are rising faster than lagged pass-through, so **Carborundum**'s abrasives, **Diffusion** and **HPL** will feel it in Q2–Q3 FY27, and **Aditya Infotech** faces rising memory-chip costs. **HBL** rests on its founder-chairman and holds no calls; **Carborundum** has a new CFO from September; **Diffusion** took about 10% of a pre-revenue anti-drone start-up for ₹2.15cr, outside its core business.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 10x, 13% at 19x, 15–16% at 24–25x, 18% at 30x, 21% at 38x, 24% at 50–51x, 28% at 67–70x, 30% at 77–80x and 32% at 93–95x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|Four} of the {count:live|seven} companies in the live table are priced for about what I expect**; Tega is not in it, because its acquisition makes the pre-deal figures misleading and it lost money over the last year.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Most of this group holds net cash, so it looks a little cheaper on EV/EBITDA: **HBL** (₹887cr), **Borosil** (₹522cr), **Carborundum** (₹486cr, though ₹297cr of it is stuck in Russia), **Ador** (₹137cr) and **Diffusion** (₹112cr). **HPL** (₹674cr) carries debt the P/E ignores, so it is dearer than it looks, and **Aditya Infotech**'s ₹56cr of net debt predates its ₹1,500cr placement.",
                },
                {
                    label: 'Fits: prices that ask for about what I expect',
                    text: "**Ador** needs about {need:Ador Welding|15}% a year against my ~14%, and **Diffusion** about {need:Diffusion Engineers|18}% against my ~16%. Both are inside the band, and both have thinner margins of safety than the label suggests: Ador's FY26 profit included a ₹14cr write-back, and Diffusion's recent profit leans on interest from IPO money it is about to spend. **HPL** needs about {need:HPL Electric|13}% against my ~12%, so it fits on price, but it is cheap because its products have lost pricing power; I pass on it.",
                },
                {
                    label: 'Full: a few points ahead of my estimates',
                    text: "**HBL** needs about {need:HBL Engineering|17}% against my ~12%; the price looks modest only because trailing profit includes the peak Kavach quarter. **Borosil** needs about {need:Borosil Renewables|11–13}% against ~10% (the live table puts it just inside {label:Borosil Renewables|fits}), on profit that includes a ₹75cr tax write-back, so the true margin of safety is thinner than it looks.",
                },
                {
                    label: 'Stretched',
                    text: "**Carborundum** needs about {need:Carborundum Univer.|32}% a year against my ~20%, an excellent materials business priced for years of flawless delivery. **Aditya Infotech** needs about {need:Aditya Infotech|32}% against my ~25%, a real brand priced for more than its cash shows.",
                },
                {
                    label: 'Earnings quality: which P/Es flatter, and which do not',
                    text: "The live P/E uses reported trailing profit. It **flatters** HBL (the ₹387cr September 2025 quarter drops out after Q2), Borosil (a ₹75cr tax write-back), Ador (a ₹14cr write-back in FY26) and Diffusion (treasury income and a ₹4.5cr associate gain). It **understates** Carborundum, whose trailing profit is after ₹135cr of write-offs and losses at units being shut. **On core profit, HBL and Borosil are a little more expensive than the table shows, and Carborundum a little less.**",
                },
                {
                    label: 'What would move a label',
                    text: "HBL would return to Fits after a fall of about 20%, or if quarterly profit stays above ₹200cr once the peak quarter drops out; Carborundum would need a fall of about 40%. Diffusion sits on the line (a rise of a couple of per cent tips it into Full) and Ador about 6% from it. I would buy Ador on weak days rather than chase it; for Diffusion the cash has to arrive before the price matters.",
                },
                {
                    label: 'Not in the live table: Tega',
                    text: "**Tega** has no P/E because it lost money over the last year, and its pre-deal balance sheet (net cash) bears no relation to today's group debt of about ₹11,200cr. I give no growth estimate and no price check until two full quarters of Molycop results show where profit and debt settle.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Ador Welding', rank: 1, stance: 'HARVEST', segment: CONSUME,
            what: "Welding consumables (electrodes, wires, fluxes) and welding and cutting equipment, sold mainly through 400-plus distributors, with shipyard and nuclear approvals; the flare-projects arm is now a small product line.",
            view: "**The clearest pricing power here, at a price that fits.** In FY26 it held prices and lifted gross margin 2.5 points to 38%, the welding segment earned 15.2%, and it turned 83% of five years' operating profit into cash with about ₹140cr of cash and investments. Q1 gross margin fell 240 basis points and the 1–2 point margin rise is not yet showing, and a ₹36.4cr BIS penalty is unprovided. The price needs about {need:Ador Welding|15}% a year against my ~14%. 30 Oct 2026: stays own. Q2 revenue rose 23% to ₹345cr, but the margin slipped again to 11% against the 12%-plus I watched; I keep the call while the rise in sales holds, and a third quarter below 12% after the promised price rises would move it to follow.",
            watch: 'Operating margin back above 12% with volume growth above 8%; gross margin recovering from Q1’s 36.5%; the BIS penalty case.',
        },
        {
            company: 'Diffusion Engineers', rank: 2, stance: 'SCALEUP', segment: CONSUME,
            what: "Hard-facing welding consumables, wear plates and heavy equipment (grinding rolls, separators, fans) for cement, steel and power plants, and the Indian manufacturing arm for European and Japanese equipment designers.",
            view: "**A small, integrated compounder whose profit is not yet arriving as cash.** Operating cash was ₹74cr against ₹156cr of profit over FY22–FY26 (47%), and FY26 converted 46%; debtor days rose to 115 and free cash has been negative for three years. Revenue grew 36.5% in Q1 and the order book doubled to ₹210cr, with a new plant doubling heavy-engineering capacity, but about 40% of Q1 pre-tax profit came from IPO interest and a one-off associate gain. I trim my estimate to ~16%; the price needs about {need:Diffusion Engineers|18}%. It moves from own to follow, and returns to own when operating cash covers most of its profit.",
            watch: 'Debtor days falling toward 90; operating profit growing faster than revenue by H2 FY27; the ₹67cr of IPO money spent on plant, not new ventures.',
        },
        {
            company: 'HBL Engineering', rank: 3, stance: 'PRICED', segment: SCARCE,
            what: "Kavach train anti-collision systems and train management, industrial nickel-cadmium, lead and lithium batteries, defence batteries and electronic fuzes, and electric drive trains for trucks and boats.",
            view: "**An excellent niche engineer at peak profit.** FY26 sales rose 68% to ₹3,303cr with a 34% margin, ₹594cr of free cash and ₹887cr of net cash, but Kavach was half of sales and management expects it to decline from FY29, while its FY30 scenario implies about 11% a year. It holds no calls and its new businesses are mostly FY28 onward. I cut my estimate from ~20% to ~12%; the price needs about {need:HBL Engineering|17}%, so it moves from own to follow.",
            watch: 'Quarterly profit back above ₹200cr as the ₹1,714cr locomotive order ships; Army fuze approval in 2027; any disclosed order book or new Kavach tenders.',
        },
        {
            company: 'Carborundum Univer.', rank: 4, stance: 'PRICED', segment: CONSUME,
            what: "Abrasives, electrominerals (fused grain) and engineered ceramics and refractories, with plants in India, Russia, Germany and South Africa; a Murugappa group company.",
            view: "**An abrasives leader becoming a ceramics business, carrying Russia.** Ceramics earn about 25% at segment level and are qualified for chip equipment, fuel cells and armour, with growth guidance raised to 23–25%. But margins fell from 16% to 9–11%, return on capital from 20% to 11%, abrasives could not pass on a ₹16cr resin shock, and 22.5% of group assets sit in sanctioned VAW. I raise my estimate to ~20% on the depressed base; the price needs about {need:Carborundum Univer.|32}%.",
            watch: 'Foskor and Awuko exits closed by Q2–Q3; abrasives margin above 9% without one-offs; the ₹400cr of capex actually spent.',
        },
        {
            company: 'Borosil Renewables', rank: 5, stance: 'CYCLICAL', segment: SCARCE,
            what: "India's first and largest merchant maker of solar glass for panels, running 1,000 tonnes a day at full capacity and adding 600 more.",
            view: "**Excellent economics inside a tariff wall.** Margin went from 4% to 31% on duties, debt is nearly gone and the plant sells all it makes. But management calls prices near peak, domestic capacity (mostly captive to panel makers) nearly triples by March 2027, the expansion is ₹150cr over budget and later, and old furnaces need a 90-day rebuild in FY28. The price needs about {need:Borosil Renewables|13}% a year against my ~10%, on profit that includes a ₹75cr tax write-back. On 9 Oct 2026 the price moved into the fits band; I keep it at follow, not own, because these are near-peak margins resting on import duties, and the only filing since was the 22 Sep delay of the new capacity, which the note already counts.",
            watch: 'The first new furnace firing by end-March 2027; realisations holding once the fuel surcharge goes; any change to the duties.',
        },
        {
            company: 'Aditya Infotech', rank: 6, stance: 'PRICED', segment: BRAND,
            what: "CP PLUS brand CCTV cameras, recorders and security products, made mainly at its own Kadapa plant and sold through 800-plus distributors.",
            view: "**A rare consumer-style brand whose profit is not arriving as cash.** Operating cash was −₹40cr against ₹1,039cr of profit over FY22–FY26, and FY26 converted only 4% (₹13cr on ₹368cr). Revenue +89% in Q1, 43% of the Indian market and price rises of 10–20% that stuck, with ₹6,000–6,500cr guided for FY27, but the share came from a rule that shut out Chinese chips and a ₹1,500cr share placement followed the IPO. The price needs about {need:Aditya Infotech|32}% a year against my ~25%. It moves from follow to wait, and returns to follow when operating cash turns clearly positive and converts most of its profit.",
            watch: 'H1 operating cash turning clearly positive; share holding as 40-plus certified rivals scale; any change to the CCTV testing rule; how the ₹1,500cr QIP money is spent, including any acquisition.',
        },
        {
            company: 'Tega Industries', rank: 7, stance: 'CYCLICAL', segment: CONSUME,
            what: "Mill liners and wear parts for mining, now combined with Molycop, the world's leading maker of steel grinding balls, through an 84%-owned holding company.",
            view: "**The finest wear-parts model here, now a leveraged mining bet.** The original business earns about 22% and its consumables grew 36% in Q1; Molycop indexes about 85% of contracts to steel. But group debt is about ₹11,200cr, Crisil expects 4.0–4.5 times operating profit at the peak, Q1 was a ₹108cr loss, and consumables missed their 15% target three years running. It is loss-making over the last year, so I give no estimate and it is not in the live table.",
            watch: 'Two full quarters of Molycop results; net debt falling toward 3.0–3.5 times by FY28; consumables growing 15% without spill-over help.',
        },
        {
            company: 'HPL Electric', rank: 8, stance: 'CYCLICAL', segment: BRAND,
            what: "Electricity meters (mainly smart meters for installers serving state utilities), plus wires and cables, switchgear and lighting sold through dealers.",
            view: "**Two businesses pulling apart, cheap for a reason.** Consumer products grew 55% in Q1 and cables 79%, but meter prices fall with each repeat order, the gross margin dropped from 38% to 30%, interest and depreciation eat over half of operating profit, and the ₹3,200cr book has been flat for a year. The price needs about {need:HPL Electric|13}% a year against my ~12%, which fits, but I would not pay for weak pricing power.",
            watch: 'Margin back to 15% by Q3; new meter orders at higher prices; debt starting to fall.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Consumables and wear parts.** **Ador Welding: own.** Proven pricing power and cash, at a price that fits my estimate. **Diffusion Engineers: follow**, moved down from own. A small, integrated compounder that turned only 47% of five years' profit into operating cash; it returns to own when receivables come down and the cash arrives. **Carborundum: follow.** Ceramics are the future, at a price that already knows it, with Russia still unresolved. **Tega: wait.** The best wear-parts model, now a leveraged bet on mining with a loss to digest.",
            "**Scarce approvals and protected markets.** **HBL Engineering: follow**, moved down from own. A superb Kavach franchise priced on peak profit that management expects to fall from FY29. **Borosil Renewables: follow, small.** A duty-protected producer at near-peak prices.",
            "**Branded electrical and electronic products.** **Aditya Infotech: wait**, moved down from follow. A real brand, partly built on a rule, whose operating cash over five years was −₹40cr against ₹1,039cr of profit. **HPL Electric: pass.** Meter prices keep falling.",
            "**What would change my view.** For the better: HBL's profit holding above ₹200cr a quarter or its price falling 20%; Carborundum closing its exits; Aditya Infotech's operating cash turning clearly positive; Tega's debt falling toward 3 times operating profit. For the worse: solar-glass duties diluted; a change to the CCTV testing rule; Ador's or Diffusion's margins slipping again; Tega's deleveraging slipping.",
            "**What to watch next quarter.** Ador: margin and volumes. Diffusion: receivables. Carborundum: abrasives margin and exits. Tega: its first full Molycop quarter. HBL: profit as the locomotive order ships. Borosil: furnace dates and prices. Aditya Infotech: operating cash. HPL: margin and new meter prices.",
        ],
        bottomLine:
            "In this group the durable money is in products that are used up and re-ordered through a channel or on a customer's schedule. Own the consumables with proven pricing power (Ador Welding); follow Diffusion Engineers until its profit arrives as cash, and Carborundum, HBL and Borosil for a better price; wait for Aditya Infotech's operating cash to turn clearly positive and for Tega's debt to fall; and treat any margin that rests on a duty, a single programme, a rule or a buyer who sets the price as a trade, not a holding.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/HBLENGINE/consolidated/' },
        { label: 'Capital goods revenue to grow 12–14% in FY27 (Crisil Ratings) — Upstox, May 2026', url: 'https://upstox.com/news/market-news/latest-updates/capital-goods-industry-likely-to-witness-revenue-growth-of-12-14-this-fiscal-crisil-ratings/article-194267/' },
        { label: 'Investment tracker: project announcements and completions — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6904' },
        { label: 'Steel industry trends and outlook — ICRA, May 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6940' },
        { label: 'Capital formation reaches 34% of GDP in Q1 FY27 — Free Press Journal, Sep 2026', url: 'https://www.freepressjournal.in/business/government-capex-ignites-a-wider-investment-cycle-capital-formation-reaches-34-per-cent-of-gdp-in-q1' },
        { label: 'Railways demand for grants 2026-27 — PRS Legislative Research', url: 'https://prsindia.org/files/budget/budget_parliament/2026/DfG_Analysis_2026-27-Railways.pdf' },
        { label: 'Railway capex to July and Kavach progress — NewKerala/ANI, Aug 2026', url: 'https://www.newkerala.com/news/a/indian-railways-utilises-rs-114-lakh-crore-39-737.htm' },
        { label: 'India’s defence production hits a record ₹1.78 lakh crore in FY26 — DD India, Jun 2026', url: 'https://ddindia.co.in/2026/06/indias-defence-production-hits-record-rs-1-78-lakh-crore-in-fy26-rajnath-singh-hails-milestone/' },
        { label: 'Defence ministry cleared ₹6.73 lakh crore of proposals in FY26 — Bharat Shakti, Sep 2026', url: 'https://bharatshakti.in/defence-ministry-clears-rs-6-73-lakh-crore-worth-of-acquisition-proposals-in-fy26/' },
        { label: 'India installs a record 44 GW of solar in FY2026 — JMK Research', url: 'https://jmkresearch.com/india-installs-record-44-gw-solar-and-6-gw-wind-capacity-in-fy2026/' },
        { label: 'India’s CCTV market shifts as regulation displaces Chinese brands (Counterpoint) — Quest Review Center, Sep 2026', url: 'https://questreviewcenter.com/tech-news/indias-cctv-market-shifts-as-regulation-accelerates-localisation-and-displaces-chinese-brands/' },
        { label: 'Grindwell Norton Q1 FY27 segment results — ScanX, Jul 2026', url: 'https://scanx.trade/stock-market-news/companies/grindwell-norton-profit-rises-22-in-q1fy27-on-ceramics-strength/46427856' },
        { label: 'Ador Welding annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/84fa8fa1-8466-4235-b10e-9ee53523bc61.pdf' },
        { label: 'Ador Welding rating rationale — CARE, Jan 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202601130105_Ador_Welding_Limited.pdf' },
        { label: 'Diffusion Engineers annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f0620bfd-4c5f-477e-96f9-026c2ec2d428.pdf' },
        { label: 'Carborundum Universal annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/70341ec7-9cd2-4eae-b257-d6abe6fbe7f5.pdf' },
        { label: 'Carborundum Universal rating rationale — Crisil, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/CarborundumUniversalLimited_March%2025_%202026_RR_391744.html' },
        { label: 'Tega Industries rating rationale — Crisil, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/TegaIndustriesLimited_May 14_ 2026_RR_394717.html' },
        { label: 'HBL Engineering annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c8bf6097-b18c-4ef5-8e4b-48c7ba0aa719.pdf' },
        { label: 'HBL Engineering rating rationale — CARE, Feb 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202602120202_HBL_Engineering_Limited.pdf' },
        { label: 'HBL Engineering AGM transcript 2025 — company', url: 'https://hbl.in/reports/agm/hbl_engi_ltd_agm_transcript_2025.pdf' },
        { label: 'Borosil Renewables board outcome on the ₹1,100cr expansion — BSE, Sep 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=17ac80b2-f6b9-4579-be48-78ceb9d43222.pdf' },
        { label: 'Borosil Renewables rating rationale — India Ratings, Dec 2025', url: 'https://www.indiaratings.co.in/pressrelease/80693' },
        { label: 'Aditya Infotech annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/145d752e-658e-4c6f-b8e5-b03fc587004a.pdf' },
        { label: 'HPL Electric & Power rating rationale — Crisil, Apr 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/HPLElectricandPowerLimited_April%2009_%202026_RR_393099.html' },
    ],
};
