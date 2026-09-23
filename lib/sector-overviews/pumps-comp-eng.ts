import { SectorOverview } from './types';
import { pumpsCompEngBusinesses } from './pumps-comp-eng-businesses';
import { pumpsCompEngValuationInputs } from './card-data/pumps-comp-eng';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const COMP = 'Compressors — sold on lifetime running cost';
const PUMP = 'Engineered pumps — sold on reliability and qualification';
const ENG = 'Engines and generator sets — sold on channel and service';
const SOLAR = 'Solar pumps — sold into government schemes';

export const pumpsCompEng: SectorOverview = {
    sector: 'Pumps Comp & Eng',
    title: 'Pumps, Compressors & Engines',
    format: 'ranked',
    businesses: pumpsCompEngBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '21 Sep 2026',
        inputs: pumpsCompEngValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Elgi Equipments': 17,
            'Kirloskar Pneumatic': 18,
            'Kirloskar Brothers': 14,
            'KSB': 13,
            'Kirloskar Oil': 15,
            'Powerica': 18,
            'Greaves Cotton': 15,
            'Shakti Pumps': 8,
            'Oswal Pumps': 5,
        },
    },
    standfirst:
        "Nine makers of pumps, compressors, engines and generator sets, sorted into four businesses before anything is compared. " +
        "Compressor makers win on the customer's electricity bill and earn the steadiest returns. Engineered-pump makers win on qualification for nuclear, thermal and data-centre work. Engine and genset makers win on channel and service. Solar-pump makers sell into government schemes that set the price and pay late. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results, operating profit ÷ sales. Consolidated, except Kirloskar Oil and Kirloskar Pneumatic, which are standalone (see notes). KSB’s quarters are calendar quarters (April–June 2026 shown as Q1 FY27).',
            note: 'Operating margin excludes other income, so it can sit below the EBITDA some managements quote. Kirloskar Pneumatic states 17.6% for Q1 FY27 on total income; filed 15%.',
            values: {
                'Elgi Equipments': [14, 15, 14, 16, 15],
                'Kirloskar Pneumatic': [13, 15, 20, 26, 15],
                'Kirloskar Brothers': [11, 11, 13, 13, 11],
                'KSB': [14, 13, 17, 9, 12],
                'Kirloskar Oil': [14, 13, 12, 13, 11],
                'Powerica': [14, 16, 10, 11, 14],
                'Greaves Cotton': [8, 6, 7, 7, 6],
                'Shakti Pumps': [23, 20, 11, 10, 10],
                'Oswal Pumps': [27, 24, 25, 23, 16],
            },
            cellNotes: {
                'Kirloskar Oil': 'Standalone engine business. The consolidated figure includes Arka Fincap, a lender with a ₹7,651cr loan book.',
                'Kirloskar Pneumatic': 'Standalone; consolidated figures are filed only from FY25. Q4 is always the largest quarter.',
                'Greaves Cotton': 'Consolidated, including electric-scooter losses at Greaves Electric Mobility. The core business alone earned 11–14%.',
                'Powerica': 'Blend of a genset business (5.6% margin in Q1 FY27) and wind power (48.6%).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Blank where the year-earlier quarter was not filed (Powerica listed recently).',
            values: {
                'Elgi Equipments': [8, 11, 18, 12, 23],
                'Kirloskar Pneumatic': [-1, -12, 19, 21, 10],
                'Kirloskar Brothers': [-5, -1, -2, 11, 13],
                'KSB': [3, 6, 8, 1, 4],
                'Kirloskar Oil': [-5, 34, 19, 9, 16],
                'Powerica': [null, null, 8, 11, 27],
                'Greaves Cotton': [17, 16, 17, 22, 31],
                'Shakti Pumps': [10, 5, -15, 29, 38],
                'Oswal Pumps': [37, 74, 32, 40, -8],
            },
            cellNotes: {
                'Elgi Equipments': 'Q1 FY27: currency added 6–7 points (company).',
                'Shakti Pumps': 'Q1 FY27: pumps installed +58% (27,678), but price per pump flat.',
                'Oswal Pumps': 'Q1 FY27: pumps supplied fell to about 43,000 from 56,000 a year earlier.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios: return on capital employed. KSB is calendar years 2021–2025.',
            note: 'Solar-pump returns in FY24–FY25 were earned at peak scheme pricing and are not a guide to the future.',
            values: {
                'Elgi Equipments': [19, 24, 22, 22, 22],
                'Kirloskar Pneumatic': [18, 20, 22, 28, 30],
                'Kirloskar Brothers': [11, 22, 27, 28, 20],
                'KSB': [21, 23, 23, 24, 25],
                'Kirloskar Oil': [10, 15, 18, 16, 19],
                'Powerica': [10, 24, 27, 22, 16],
                'Greaves Cotton': [-1, 9, 4, 5, 10],
                'Shakti Pumps': [21, 10, 31, 55, 24],
                'Oswal Pumps': [null, 38, 74, 78, 38],
            },
            cellNotes: {
                'Kirloskar Oil': 'Standalone. Consolidated is lower (14–15%) because the lender’s capital sits inside it.',
                'Greaves Cotton': 'Consolidated. The standalone engine business earned 15–20% in FY23–FY26.',
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
            note: 'Engineered pumps and project compressors run long cycles by nature; the warning is a cycle rising while growth slows.',
            values: {
                'Elgi Equipments': [112, 135, 132, 121, 114],
                'Kirloskar Pneumatic': [128, 107, 103, 103, 90],
                'Kirloskar Brothers': [73, 69, 83, 82, 68],
                'KSB': [134, 172, 165, 163, 204],
                'Kirloskar Oil': [11, 20, 20, 33, 34],
                'Powerica': [21, 33, 44, 44, 29],
                'Greaves Cotton': [-14, -19, 10, 8, -6],
                'Shakti Pumps': [91, 131, 102, 124, 134],
                'Oswal Pumps': [69, 80, 157, 221, 218],
            },
            cellNotes: {
                'KSB': 'CY2025: receivables from state solar-pump agencies and export stock waiting to ship (company).',
                'Oswal Pumps': 'June 2026 (company): 224 days, with receivables up from 155 to 229 days on delayed state payments.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss: cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit. KSB is calendar years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Below 50% means profit is being tied up in receivables or stock. Blank where operating profit was too small for a meaningful ratio.',
            values: {
                'Elgi Equipments': [23, 38, 58, 74, 78, 58],
                'Kirloskar Pneumatic': [77, 24, 89, 73, 63, 66],
                'Kirloskar Brothers': [55, 82, 71, 63, 61, 67],
                'KSB': [30, 15, 48, 55, 25, 36],
                'Kirloskar Oil': [72, 61, 77, 83, 70, 73],
                'Powerica': [115, 74, 78, 74, 120, 91],
                'Greaves Cotton': [null, -106, -168, -17, 14, null],
                'Shakti Pumps': [15, 58, 22, 3, 29, 18],
                'Oswal Pumps': [167, 86, 11, -36, -15, -8],
            },
            cellNotes: {
                'Greaves Cotton': 'Consolidated, including electric-scooter losses and the lending arm. The standalone engine business turned 80% of profit into cash over five years.',
                'Kirloskar Oil': 'Standalone. Consolidated operating cash is negative because loans made by Arka count as operating outflows.',
                'Oswal Pumps': 'FY25 and FY26 negative: receivables from state agencies grew faster than profit.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses five-year totals. Kirloskar Oil and Kirloskar Pneumatic standalone; KSB calendar years (CY21–CY25).',
            note: 'Shows who funds growth from its own cash and who needs borrowing. Acquisitions and investments in subsidiaries are not included.',
            values: {
                'Elgi Equipments': [1.1, 3.2, 7.3, 8.4, 7.6, 5.9],
                'Kirloskar Pneumatic': [1.7, -0.2, 8.4, 8.4, 9.2, 6.1],
                'Kirloskar Brothers': [1.0, 5.3, 6.4, 6.6, 4.4, 4.9],
                'KSB': [1.6, -3.8, 2.2, 3.4, -0.0, 0.8],
                'Kirloskar Oil': [3.4, 3.4, 3.3, 5.4, 3.4, 3.8],
                'Powerica': [8.9, 8.2, 1.4, -3.2, -4.1, 1.3],
                'Greaves Cotton': [-7.1, -7.9, -11.8, -3.6, -1.8, -6.1],
                'Shakti Pumps': [-0.4, 1.5, -0.7, -3.5, -2.1, -1.6],
                'Oswal Pumps': [8.3, 6.5, -1.1, -14.0, -10.4, -7.3],
            },
            cellNotes: {
                'Powerica': 'FY25–FY26: spending on new wind farms, funded from its own cash.',
                'Greaves Cotton': 'Consolidated, including electric-scooter losses. The standalone engine business produced about ₹790cr of free cash over five years.',
                'Oswal Pumps': 'FY25–FY26: unpaid bills from state scheme agencies.',
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Mutual-fund investments are counted as cash for Kirloskar Pneumatic only.',
            note: 'How many years of operating profit it would take to repay net debt. Below zero means more cash than debt. Nobody here is heavily borrowed.',
            values: {
                'Elgi Equipments': [0.5, 0.0, -0.3, -0.6, -0.3],
                'Kirloskar Pneumatic': [-1.7, -1.7, -2.0, -1.8, -1.6],
                'Kirloskar Brothers': [1.1, 0.1, -0.2, -0.3, -0.3],
                'KSB': [-1.7, -1.0, -0.9, -0.9, -0.7],
                'Kirloskar Oil': [0.2, 0.1, 0.2, -0.2, -0.6],
                'Powerica': [1.8, 0.7, 0.4, 0.8, -1.0],
                'Greaves Cotton': [6.3, -4.0, -2.6, -2.5, -0.7],
                'Shakti Pumps': [0.6, 0.9, -0.5, 0.0, -0.4],
                'Oswal Pumps': [1.9, 0.9, 0.5, 0.8, -0.3],
            },
            cellNotes: {
                'Kirloskar Oil': 'Standalone engine business; excludes the lending subsidiary, Arka Fincap.',
                'Oswal Pumps': 'FY26 includes money from its 2025 share sale; the company reported net debt of ₹266cr by June 2026.',
                'Powerica': 'FY26: cash rose from ₹43cr to ₹961cr during the year.',
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
            note: 'How capital-hungry growth is. Most of these companies spend about their depreciation; Powerica is building wind farms, and Shakti’s solar-cell plant is only starting.',
            values: {
                'Elgi Equipments': [1.6, 2.3, 1.5, 2.7, 3.9, 2.5],
                'Kirloskar Pneumatic': [9.0, 3.4, 5.4, 4.8, 3.8, 5.0],
                'Kirloskar Brothers': [2.7, 3.6, 2.8, 2.0, 3.0, 2.8],
                'KSB': [2.5, 5.9, 4.1, 4.0, 3.5, 4.0],
                'Kirloskar Oil': [2.5, 2.9, 5.7, 5.4, 5.6, 4.6],
                'Powerica': [5.4, 2.6, 11.4, 12.6, 19.1, 11.1],
                'Greaves Cotton': [3.9, 2.9, 6.0, 2.8, 2.8, 3.6],
                'Shakti Pumps': [1.9, 2.5, 4.4, 4.3, 6.7, 4.5],
                'Oswal Pumps': [9.7, 6.5, 3.3, 3.4, 6.6, 5.4],
            },
            cellNotes: {
                'Shakti Pumps': 'It plans ₹1,500–1,700cr more by September 2027 on solar cells and modules, about three-fifths of a year’s sales.',
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
            note: 'Higher means more sales from each rupee of plant. Powerica is low because it owns wind farms; the solar-pump makers are high because they assemble.',
            values: {
                'Elgi Equipments': [4.6, 5.2, 5.5, 5.9, 5.7],
                'Kirloskar Pneumatic': [4.5, 5.6, 5.7, 5.6, 5.2],
                'Kirloskar Brothers': [5.7, 7.0, 6.3, 6.9, 6.5],
                'KSB': [4.8, 5.2, 5.4, 5.8, 5.8],
                'Kirloskar Oil': [7.3, 9.7, 9.9, 5.6, 6.0],
                'Powerica': [1.7, 2.2, 2.3, 3.1, 2.5],
                'Greaves Cotton': [4.7, 7.3, 3.2, 3.4, 3.9],
                'Shakti Pumps': [8.1, 6.6, 9.2, 11.1, 8.6],
                'Oswal Pumps': [5.1, 4.8, 7.8, 10.7, 12.7],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the Q1 FY27 call or presentation ÷ sales over the last four quarters (Screener).',
            note: 'Years of work already booked. Blank where the company does not publish an order book: Elgi, Kirloskar Oil and Greaves sell mostly through dealers. Kirloskar Brothers’ book excludes small pumps.',
            values: {
                'Elgi Equipments': [null],
                'Kirloskar Pneumatic': [1.0],
                'Kirloskar Brothers': [0.9],
                'KSB': [1.0],
                'Kirloskar Oil': [null],
                'Powerica': [0.5],
                'Greaves Cotton': [null],
                'Shakti Pumps': [0.3],
                'Oswal Pumps': [null],
            },
            cellNotes: {
                'KSB': 'Nuclear is 45% of the ₹2,744cr book and is delivered over several years.',
                'Powerica': 'Genset book only (₹1,700cr); the wind farms sell power on 25-year contracts.',
                'Shakti Pumps': '₹1,000cr, about four months of work; scheme orders arrive in batches.',
                'Oswal Pumps': 'Published in pumps (22,025) and megawatts, not rupees.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'tech', label: 'Product and engineering', description: 'Own designs that are measurably better: efficiency, reliability, own engines or motors.' },
            { key: 'qual', label: 'Qualification', description: 'Approvals that take years: nuclear, defence, railways, refinery standards, data-centre track record.' },
            { key: 'service', label: 'Installed base and aftermarket', description: 'Spares and service sold without a tender to customers who cannot afford downtime.' },
            { key: 'channel', label: 'Channel reach', description: 'Dealer and service network a new entrant cannot copy quickly.' },
            { key: 'buyer', label: 'Pricing power', description: 'Who sets the price. A means the customer buys on lifetime cost; D means a government tender sets it.' },
        ],
        rows: [
            { company: 'Elgi Equipments', trend: 'widening', trendNote: 'India +28% mostly on volume; its new Demand Match technology is winning customers that never bought Elgi before.',
                grades: { tech: { grade: 'A', note: 'Best efficiency on ~70% of industrial models' }, qual: { grade: 'C', note: 'Industrial, not regulated' }, service: { grade: 'B', note: 'Parts 28–30% of India sales; 15–16% abroad vs peers ~38%' }, channel: { grade: 'B', note: 'Distributor-led; still recruiting abroad' }, buyer: { grade: 'A', note: '~80% of buyers choose on running cost' } } },
            { company: 'Kirloskar Pneumatic', trend: 'widening', trendNote: 'Record air-compressor orders; KHOLOS centrifugals at mid-teens share; material cost down 3.3 points.',
                grades: { tech: { grade: 'A', note: 'Own centrifugal and refrigeration designs; own forgings and castings' }, qual: { grade: 'B', note: 'Gas packages for oil and gas buyers' }, service: { grade: 'B', note: 'Maintains 1,000-plus CNG stations' }, channel: { grade: 'C', note: 'Direct and project sales' }, buyer: { grade: 'B', note: 'Critical but low-value parts of big projects' } } },
            { company: 'Kirloskar Brothers', trend: 'widening', trendNote: 'Nuclear pump orders arriving (~₹110cr in Q1); framework deal with a large US data-centre operator nearly signed.',
                grades: { tech: { grade: 'A', note: 'World’s largest maker of concrete volute pumps' }, qual: { grade: 'A', note: 'Nuclear primary and secondary circuits' }, service: { grade: 'C', note: 'Service small; IoT monitoring in hundreds of pumps' }, channel: { grade: 'B', note: 'Small pumps 45–50% of standalone' }, buyer: { grade: 'C', note: 'Utilities and PSUs' } } },
            { company: 'KSB', trend: 'stable', trendNote: 'Nuclear franchise intact but held up by NPCIL’s test bed; H1 sales grew only 2–3%.',
                grades: { tech: { grade: 'A', note: 'Parent KSB SE designs' }, qual: { grade: 'A', note: 'Primary coolant pumps in every PHWR since 1978' }, service: { grade: 'B', note: 'SupremeServ growing ~15% a year' }, channel: { grade: 'B', note: '800 dealers, 350 service centres' }, buyer: { grade: 'C', note: 'Fixed-price projects; price rises lag costs' } } },
            { company: 'Kirloskar Oil', trend: 'widening', trendNote: 'Gained domestic genset share; first hyperscale data-centre order; aftermarket +20% for 12 quarters.',
                grades: { tech: { grade: 'B', note: 'Own engines to high horsepower; gas gensets' }, qual: { grade: 'B', note: 'NPCIL, railways, marine, defence' }, service: { grade: 'A', note: 'Distribution and aftermarket ₹268cr a quarter' }, channel: { grade: 'A', note: 'Wide genset dealer and service network' }, buyer: { grade: 'B', note: 'Dealer products reprice fastest' } } },
            { company: 'Powerica', trend: 'stable', trendNote: 'Data-centre book doubled to ₹1,100cr, but Cummins has taken some data-centre projects directly.',
                grades: { tech: { grade: 'D', note: 'Engine is Cummins’' }, qual: { grade: 'B', note: 'Data-centre execution record' }, service: { grade: 'B', note: 'Genset service; wind O&M' }, channel: { grade: 'B', note: 'Long-standing Cummins channel' }, buyer: { grade: 'C', note: 'Dependent on Cummins’ channel choices' } } },
            { company: 'Greaves Cotton', trend: 'stable', trendNote: 'Core engines growing 16–19%; capital keeps flowing to the loss-making electric-scooter business.',
                grades: { tech: { grade: 'C', note: 'Small diesel engines; own gensets to 650 kVA' }, qual: { grade: 'C', note: 'A defence contract; fire-pump engines' }, service: { grade: 'B', note: 'Retail aftermarket, now pruned' }, channel: { grade: 'B', note: 'Three-wheeler and genset dealers' }, buyer: { grade: 'C', note: 'Three-wheeler OEMs, with index-linked prices' } } },
            { company: 'Shakti Pumps', trend: 'narrowing', trendNote: 'Margin halved on scheme pricing and raw materials; volume up 58% at the same price per pump.',
                grades: { tech: { grade: 'B', note: 'Own motors, controllers, inverters' }, qual: { grade: 'C', note: 'Scheme empanelment' }, service: { grade: 'C', note: 'Five-year service obligations' }, channel: { grade: 'C', note: 'Farmer choice within rate contracts' }, buyer: { grade: 'D', note: 'State agencies set price and pay late' } } },
            { company: 'Oswal Pumps', trend: 'narrowing', trendNote: 'Tender prices −9%; pumps supplied down about a quarter; moving into rooftop solar at lower margins.',
                grades: { tech: { grade: 'C', note: 'Pumps, motors, modules in-house' }, qual: { grade: 'C', note: 'Scheme empanelment' }, service: { grade: 'C', note: 'Scheme service obligations' }, channel: { grade: 'C', note: 'Building rooftop channel' }, buyer: { grade: 'D', note: '40–45 bidders on state tenders' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Kirloskar Pneumatic is the one I would own first.** It makes air, refrigeration and gas compressors, including its own forgings and castings, and its return on capital has risen every year from 18% to 30% with no debt. Material costs fell as a share of sales in a quarter when they rose everywhere else. It guides 19% growth for FY27 at 18–20% margins, and its price asks for about what I expect it to deliver.",
                "**Powerica is the second buy, and the cheapest good business here.** It assembles generator sets around Cummins engines for data centres and industry, and owns wind farms that earn most of its profit. Its data-centre order book has doubled, it turned 91% of five years' operating profit into cash, and its owned wind capacity is set to nearly double. The weak point is Cummins, which can sell large projects directly. **Elgi and Kirloskar Brothers are good businesses to follow**: Elgi has the best product (the most efficient compressors in most categories) and Kirloskar Brothers is qualifying for nuclear and US data-centre work, but both prices already assume their best case.",
                "**Wait on Kirloskar Oil and KSB.** Kirloskar Oil has the strongest genset channel and service network and won its first hyperscale data-centre order, but its margin has fallen three quarters running and its price needs far more growth than I expect. KSB owns India's longest nuclear-pump record, but grew only 2–3% in the first half, NPCIL's test bed has delayed its deliveries, and it has turned only about a third of five years' profit into cash.",
                "**Two things to hold onto before reading the rest.** First, **who sets the price decides the margin.** Compressor buyers choose on their electricity bill, so Elgi and Kirloskar Pneumatic hold margins; state agencies set solar-pump prices and 40-plus suppliers bid, so Shakti's and Oswal's margins have halved. Second, **reported profit is not cash for the solar pair**: most of it is money owed by state agencies. I would **pass on Greaves** (a decent engine business funding a loss-making scooter company) and **Shakti** (margins halved while it spends heavily on solar cells), and **wait on Oswal**, which is cheap only if its receivables are collected.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**. Companies are grouped by business. Every figure comes from filed results or filed ratios (Screener); where a figure is missing it is left blank, not estimated. Hover over a cell for any caveat.",
                "**Two companies are shown standalone.** Kirloskar Oil's consolidated accounts include Arka Fincap, a lender, which distorts margins, returns and cash flow. Kirloskar Pneumatic's consolidated history is only two years long. Greaves is shown consolidated, because the electric-scooter losses are what its shareholders own. KSB reports calendar years. **Start with cash conversion and free cash flow**: they separate the solar pair from everyone else more clearly than margins do.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These companies make the machines that move fluids and make power: pumps, air and gas compressors, diesel and gas engines, and the generator sets built around them. What they earn depends on who decides the purchase and how much a failure would cost that buyer.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Castings and forgings → motors and engines → the machine (pump, compressor, genset) → a package or plant (a data-centre cooling skid, a gas compression station, a solar-pump installation) → service and spares for 10–30 years. **The profit sits at the two ends:** owning the design that makes the machine efficient or qualified, and owning the service relationship afterwards. Assemblers in the middle, and anyone selling into a government tender, earn the least.",
                },
                {
                    label: 'Demand drivers',
                    text: "Industrial capex (steel, cement, chemicals), power (thermal build-out, nuclear to 100 GW by 2047), city gas distribution (CNG stations from about 7,000 to 15,000 by 2031), data centres, water supply, and government solar-pump schemes. India's pump market is about $2.9bn and grows at mid-single digits a year. **Much of the 13–38% growth these companies report is share and mix, not market growth.**",
                },
                {
                    label: 'Cyclicality',
                    text: "Moderate for compressors and industrial pumps, which follow manufacturing capex. High for project pumps and gas packages, which arrive in lumps. Extreme for solar pumps, which follow government scheme cycles: PM-KUSUM installations went from about 1.5 lakh in FY24 to 3.5 lakh in FY25 and 5 lakh in FY26, then stalled while the next phase waits for approval.",
                },
                {
                    label: 'Policy dependence',
                    text: "**Solar pumps are almost entirely policy:** PM-KUSUM 2.0 is said to be with the Prime Minister's Office, and every solar-pump company expects it “next month”. Nuclear depends on NPCIL's ordering and the SHANTI Act that opens the sector. Emissions rules (CPCB IV+) reset the genset market in 2024. US tariffs (25% on Elgi's compressors) and the West Asia war hit exports this quarter.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "The labels say pumps, compressors and engines, but each share rests on something different. **Kirloskar Pneumatic** depends on gas: city gas stations, biogas and oil and gas packages. **Elgi** depends on factories replacing old compressors with efficient ones, in India and the US. **Kirloskar Brothers** and **KSB** depend on water, power and, later, NPCIL's nuclear calendar. **Kirloskar Oil** and **Powerica** depend on data centres and industry buying backup power, and Powerica also on Cummins's choices and the wind. **Greaves** depends on how fast its scooter business stops losing money. **Shakti** and **Oswal** depend on PM-KUSUM 2.0 and on state agencies paying. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who is in it', 'Operating margin (last five quarters)', 'Return on capital (five years)', 'Why'],
                    rows: [
                        ['Compressors', 'Elgi, Kirloskar Pneumatic', '13–26%', '18–30%', 'Sold on running cost; service tail'],
                        ['Engineered pumps', 'KSB, Kirloskar Brothers', '9–17%', '11–28%; mostly 20%+', 'Qualification for nuclear, power, refineries'],
                        ['Own engines and gensets', 'Kirloskar Oil, Greaves (core)', '11–14%', '10–20%', 'Channel and aftermarket'],
                        ['Genset assembly plus wind power', 'Powerica', '10–16%', '10–27%', 'Cummins engines; wind earns the margin'],
                        ['Solar pumps for government schemes', 'Shakti, Oswal', '10–27%', '10–78%', 'Scheme pricing; late payment'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits in this sector. Each company is graded on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: compressors sold on the electricity bill',
                    text: "A compressor's electricity over its life costs many times its price, so about 80% of buyers choose on running cost. **Elgi** is the most efficient maker in about 70% of industrial categories and makes its own motors; **Kirloskar Pneumatic** makes its own forgings and castings and maintains more than 1,000 CNG stations. Both edges should last, because efficiency comes from design and in-house parts that take years to build. The threat is at the low end, where Chinese machines are cheap; Elgi has launched a low-cost range to meet them.",
                },
                {
                    label: 'Lasting but shrinking: nuclear and large-pump qualification',
                    text: "**KSB** has supplied the primary coolant pumps in every Indian heavy-water reactor since 1978, and **Kirloskar Brothers** holds all of India's nuclear metallic volute pump work. These approvals take years and last. But KSB's near-monopoly is shrinking: Kirloskar Brothers has proved performance for primary pumps and Flowserve is also bidding, so the next eight-reactor tender may have three bidders instead of one. And in both cases NPCIL, not the company, decides the timing.",
                },
                {
                    label: 'Wearing away: gensets and diesel engines',
                    text: "**Kirloskar Oil** has one of the widest service networks in India and its aftermarket has grown double digits for 12 quarters, but batteries paired with smaller gensets are cutting how many hours backup sets run, which erodes fuel, spares and service over time. **Powerica** depends on Cummins, which has started selling some data-centre projects directly. **Greaves**'s diesel three-wheeler engines are slowly giving way to electric and CNG vehicles.",
                },
                {
                    label: 'Barely a moat: solar pumps for state schemes',
                    text: "**Shakti** makes its own motors, controllers and inverters, and **Oswal** its own pumps, motors and modules, which lowers cost. But the state sets the price, 40-plus approved suppliers bid, and the buyer pays when it pays. When the scheme paused, Maharashtra tender prices fell 8–9%. Cost advantages do not become pricing power in this market.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Atlas Copco and Ingersoll Rand** in compressors. **Cummins India, Caterpillar and Kohler** in high-horsepower gensets; Cummins India is the incumbent Kirloskar Oil is attacking in data centres. **Grundfos, Xylem, Flowserve and CRI** in pumps; Flowserve competes with KSB and Kirloskar Brothers for nuclear primary pumps. **Dozens of unlisted solar-pump makers** bid on state tenders. Kirloskar Brothers, Kirloskar Oil and Kirloskar Pneumatic share a brand whose use is in litigation between the family groups.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The West Asia war raised metal, freight and energy costs for everyone in Q1; what matters is who could pass them on, and how fast.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: compressors, and pumps at a lower level',
                    text: "**Elgi** (14–16%) held its margin even though raw materials rose 5–6% against the 3–4% it planned for, and it absorbs a 25% US tariff; it targets 18% by FY31. **Kirloskar Pneumatic**'s annual margin rose from 14% to 21% in five years; quarters swing because Q4 is always the biggest, and it guides 18–20%. **Kirloskar Brothers** (11–13%) and **KSB** (about 13% over a cycle) earn less but steadily, because qualified large pumps are not bought on price alone. **I expect all four margins to hold**, with KSB squeezed until its price rises catch up with its foundries' 12–15% increases.",
                },
                {
                    label: 'Cyclical: engines and gensets',
                    text: "**Kirloskar Oil**'s standalone margin fell from 13.5% to 11.2% over three quarters as costs rose before prices and employee costs jumped 40%; dealer products reprice within three to six months, so I expect most of it back. **Powerica** is two businesses: gensets on Cummins engines earned 5.6% in Q1, while wind earned 49% and new wind projects 82–83%. Its group margin rises as wind grows. **Greaves**'s core engines earn 11–14%, but the group earns 6–8% after scooter losses.",
                },
                {
                    label: 'Not structural: solar pumps',
                    text: "**Shakti** fell from 23% to 10%: about 6 points from raw materials and 4 from lower selling prices. **Oswal** fell from 27% to 16%: about 8–9 points from tender prices, 3–3.5 from raw materials and 1–1.5 from lost scale. Both call it temporary, but Oswal's own chairman said current bid prices are not sustainable for the industry. With 40-plus suppliers holding capacity, **I do not expect FY25's margins to return.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Oswal** tied up ₹1,054cr in working capital, almost all in unpaid bills (₹1,203cr): its customers now take 199 days to pay, up from 38. **Shakti** tied up ₹867cr, again mostly bills (₹1,065cr, 173 days), and says about ₹1,770cr is owed to it including ₹450cr of retention money. **Greaves** tied up ₹717cr, mostly outside bills and stock (items Screener groups as other, which include its finance arm's lending). **This is why the solar pair's profits have not become cash.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**KSB** tied up ₹615cr: its customers now take 118 days to pay, up from 68–81, because state solar-pump agencies pay late, and it holds 197 days of stock, partly exports waiting to ship. That is the main reason it turned only 36% of profit into cash, surprising for a company of its quality. Management says both improve in the second half. **Oswal** also now pays its own suppliers faster (46 days, from 78), which adds to the squeeze.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Kirloskar Pneumatic** cut its stock from 132 to 88 days and its cash cycle from 128 to 90. **Elgi**'s cash conversion rose every year from 23% to 78% as it ran down the stock it built in the supply-chain crunch. **Kirloskar Brothers**' customers pay in 53 days, down from 62.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**Kirloskar Oil** runs a 25–34-day cycle because dealers pay quickly and suppliers give about 80 days' credit; only ₹281cr went into working capital in five years. **Powerica** absorbed only ₹30cr. **Kirloskar Brothers** and **Elgi** hold 130–145 days of stock because large engineered pumps and a global compressor range need it. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: data centres',
                    text: "New data centres need backup gensets, cooling pumps and fire systems. **Kirloskar Oil** won its first hyperscale order (about 192 MW) with a five-to-six-year service contract; **Powerica**'s data-centre book went from ₹400–500cr to ₹1,100cr in a year; **Kirloskar Brothers** sells $7.5–10m cooling and fire packages per US hyperscale site, where data centres are 23% of its US revenue; **KSB** supplies liquid-cooling pumps through global makers. I expect this to run for three to five years, but competition is rising (Powerica said so directly) and Cummins can take projects from its own dealer.",
                },
                {
                    label: 'Growth driver: gas',
                    text: "City gas stations are projected to go from about 7,000 to 15,000 by 2031, and biogas plants are being built under government schemes. **Kirloskar Pneumatic** makes the CNG and biogas compressors and maintains the stations, with record biogas bookings. This is a steady, decade-long driver, but package orders arrive in lumps and some Middle East orders were delayed in Q1.",
                },
                {
                    label: 'Growth driver: nuclear',
                    text: "The SHANTI Act opens nuclear power to more investment, and India targets 100 GW by 2047. **KSB** (₹1,235cr of nuclear orders), **Kirloskar Brothers** (about ₹110cr of nuclear orders in Q1) and **Kirloskar Oil** (an NPCIL genset order) benefit. It is real but slow: equipment revenue arrives about four years after an order, and KSB can ship at most one primary pump a quarter until NPCIL's test bed is fixed.",
                },
                {
                    label: 'Growth driver: efficiency and factory spending',
                    text: "Factories replacing old compressors and pumps with efficient ones grow demand faster than the economy. **Elgi** grew 16–17% in constant currency in Q1, taking share in India and the US (+37%); **Kirloskar Pneumatic** gains share with its KHOLOS centrifugal machines and adds air-conditioning compressors under a production scheme from FY28. This driver is steady and long, following India's manufacturing investment.",
                },
                {
                    label: 'Growth driver: solar-pump schemes',
                    text: "PM-KUSUM installations went from about 1.5 lakh in FY24 to 5 lakh in FY26, then stalled while phase two waits for approval. **Shakti** and **Oswal** depend on it; both are also moving into solar modules and rooftop solar, where the industry is heading into overcapacity. Even if KUSUM 2.0 is approved soon, I expect prices to stay near today's lower level.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Powerica** grew 27% in Q1 with a doubled data-centre book. **Elgi** grew 23% in Q1 (16–17% in constant currency) and keeps a conservative margin target. **Kirloskar Pneumatic** kept its ₹2,100cr FY27 guide after a soft Q1, which it usually meets.",
                },
                {
                    label: 'Cautious',
                    text: "**Kirloskar Brothers** guides only double-digit growth, a figure it usually meets, and spends about its depreciation. **Greaves** delivered growth in its core engines but not margin, and promises scooter break-even in four to six quarters.",
                },
                {
                    label: 'Missed',
                    text: "**KSB** aimed for double-digit growth and grew 2–3% in the first half. **Oswal**'s Q1 revenue fell 8% and its FY27 plan (+20–25%) leans on ₹800–1,000cr from a rooftop business it has just started. **Shakti**'s margin halved and it gives no margin guidance.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Kirloskar Oil** targets $2bn of revenue by FY30, about 2.3 times FY26, while its margin has fallen three quarters running, and would not split price from volume. How many years of work each company has booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
                {
                    label: 'My outlook',
                    text: "If India's nominal GDP grows about 10–11% a year, industrial equipment makers usually grow roughly in line or a little faster. Data centres, gas and nuclear are genuinely above trend; solar pumps are below it and uncertain. **I expect the compressor makers and Powerica to compound at 17–18%, the pump and engine makers at 13–15%, and the solar pair in single digits.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Kirloskar Pneumatic', 'Industrial capex, gas stations, biogas, AC compressors from FY28', '13% / **18%** / 22%'],
                        ['Powerica', 'Data-centre gensets; wind capacity nearly doubling', '12% / **18%** / 22%'],
                        ['Elgi Equipments', 'Share gains in India and the US; Europe past breakeven', '12% / **17%** / 20%'],
                        ['Kirloskar Brothers', 'Water, power, nuclear, US data centres', '10% / **14%** / 18%'],
                        ['Kirloskar Oil', 'Data centres, share gains, aftermarket, exports', '10% / **15%** / 20%'],
                        ['KSB', 'Nuclear deliveries from CY27; aftermarket', '8% / **13%** / 17%'],
                        ['Greaves Cotton', 'Core engines; scooter losses shrinking', '5% / **15%** / 25%+'],
                        ['Shakti Pumps', 'PM-KUSUM 2.0; cells and modules; exports', '−5% / **8%** / 20%'],
                        ['Oswal Pumps', 'State tenders; rooftop solar', '−10% / **5%** / 15%'],
                    ],
                    note: 'My own judgement, not guidance. Base case assumes India’s nominal GDP grows about 10–11% a year and no recession. The growth each price needs is in the live valuation table in section 8.',
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
                    label: 'Government schemes and late payment',
                    text: "**Shakti and Oswal** live on PM-KUSUM and state programmes; a delay cuts volume and, by crowding bidders into fewer tenders, cuts price too. Shakti disclosed exactly what it is owed (₹760cr not yet due, ₹560cr of debtors, ₹450cr of retention) and says KUSUM 2.0 comes 'next month', but **gave no margin guidance and would not split its ₹5,000cr target**. Oswal quantified its margin loss by cause, but its FY27 target leans on a new business. **KSB** is now exposed to the same agencies' late payments.",
                },
                {
                    label: 'Input costs and fixed prices',
                    text: "Metals, castings, freight and gas all rose with the West Asia war. Dealer businesses (**Kirloskar Oil, Elgi**) reprice within a quarter or two; project and tender businesses (**KSB**, **Powerica**'s older orders, the solar pair) cannot. Powerica said its contracts have no escalation clause. **Kirloskar Oil would not give the price-versus-volume split** or its share-option costs.",
                },
                {
                    label: 'Batteries and gensets',
                    text: "Battery storage paired with smaller gensets that run fewer hours is becoming the design for backup power. It does not end the genset sale but erodes fuel, spares and service, the most profitable part for **Kirloskar Oil** and **Powerica**. Neither addressed it directly on the call.",
                },
                {
                    label: 'Depending on someone else’s decision',
                    text: "**Powerica** depends on Cummins's channel choices and **declined to comment on Cummins taking data-centre projects directly**. **KSB** depends on its German parent for technology, pays royalties, and will be charged group software costs next year that it has not quantified. **KSB and Kirloskar Brothers** depend on NPCIL's test bed and ordering calendar. **Elgi** absorbs a 25% US tariff and would not split screw from piston sales.",
                },
                {
                    label: 'Capital allocation and family disputes',
                    text: "**Greaves** keeps sending cash to its scooter business (₹331cr more this year) and did not discuss what that business is worth. **Shakti** is spending ₹1,500–1,700cr on solar cells and modules while its margin has halved and debt has risen. The three **Kirloskar** companies share a brand whose use is in litigation between the family groups.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet, heavy depreciation or losses in a side business are the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 9x, 16% at 26x, 17% at 27x, 19% at 34x, 22% at 42x, 23% at 46x and 25% at 53–55x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Kirloskar Pneumatic** holds about ₹595cr of cash and treasury investments, so it is cheaper than its P/E suggests. **Greaves** looks far cheaper on EV/EBITDA than on P/E because scooter losses and depreciation sit between operating profit and earnings. **Kirloskar Oil**'s P/E is on group earnings including its lender; the EV/EBITDA here uses the engine business alone, which is the cleaner view. **Shakti and Oswal** look cheap on both, but their operating profit has not turned into cash.",
                },
                {
                    label: 'Reasonable',
                    text: "**Kirloskar Pneumatic** (price close to my estimate, rising returns, no debt) and **Powerica** (the price needs less growth than I expect, with strong cash conversion).",
                },
                {
                    label: 'Full',
                    text: "**Elgi** and **Kirloskar Brothers**: good businesses whose prices already assume their upside case.",
                },
                {
                    label: 'Stretched',
                    text: "**KSB** and **Kirloskar Oil** (prices that need roughly 25% a year against my 13–15%), **Greaves** (the price includes a loss-making scooter business) and **Shakti** (margins halved and 18% cash conversion).",
                },
                {
                    label: 'Cheap for a reason',
                    text: "**Oswal**: the price asks for almost no growth, about what I expect, but operating cash has been negative for two years and the price has fallen about 65% from its high.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Kirloskar Pneumatic', rank: 1, stance: 'COMPOUNDER', segment: COMP,
            what: "Makes air compressors, refrigeration compressors (for cold storage, dairies, fisheries) and gas compression packages (CNG, oil and gas, biogas), and maintains more than 1,000 CNG stations. It makes its own forgings and castings.",
            view: "**The best combination of quality and price in the sector.** Return on capital has risen every year from 18% to 30%, it has no debt, and material cost fell from 47.6% to 43.9% of sales in a quarter when costs rose everywhere. It turned 66% of operating profit into cash over five years. It guides ₹2,100cr (+19%) at 18–20% margins, and the price roughly matches my ~18% estimate.",
            watch: 'Q2 catch-up after a soft Q1; Middle East package orders; Ziffra air-conditioning compressors ramping in FY28.',
        },
        {
            company: 'Powerica', rank: 2, stance: 'SCALEUP', segment: ENG,
            what: "Assembles generator sets around Cummins engines for data centres and industry (83% of revenue), and owns 330 MW of wind farms selling power on 25-year contracts, plus wind construction work for others.",
            view: "**Cheap, cash-generative and two businesses in one.** The genset book grew with ₹1,100cr of data-centre orders, but it earns only 5.6% on Cummins's engine. Wind earns 49%, rising to 82–83% on new projects, and owned capacity is set to nearly double to 634 MW. It turned 91% of operating profit into cash over five years, though wind capex made free cash negative in FY25–FY26. The price needs less than my ~18% estimate.",
            watch: 'Genset margin recovering from Q3; Cummins’ channel choices on data-centre projects; wind projects on schedule.',
        },
        {
            company: 'Elgi Equipments', rank: 3, stance: 'COMPOUNDER', segment: COMP,
            what: "Industrial air compressors sold worldwide under its own brand, about half outside India, plus a small automotive-equipment business. It makes its own motors and competes with Atlas Copco and Ingersoll Rand.",
            view: "**The strongest product moat on the page, at a full price.** Its compressors are the most efficient in about 70% of categories, warranty costs are under 1% of sales, and its Demand Match technology is winning new customers. Returns have held at 19–24% for five years, and cash conversion has risen to 78%. The price needs more than my ~17% estimate.",
            watch: 'Price increases catching up by Q3; the new low-cost range against Chinese imports; US tariffs.',
        },
        {
            company: 'Kirloskar Brothers', rank: 4, stance: 'COMPOUNDER', segment: PUMP,
            what: "India's largest pump maker: small pumps for homes and farms, large engineered pumps for power, water, oil and gas, and nuclear plants, and packaged cooling and fire systems for data centres. Subsidiaries include SPP (UK and US).",
            view: "**A qualification moat, at a full price.** It is the world's largest maker of concrete volute pumps, holds all of India's nuclear metallic volute pump work, and is qualifying for primary circuits. Returns rose from 11% to 20–28%, and it turned 67% of operating profit into cash over five years. The price needs more than my ~14% estimate, so it already assumes nuclear and US data centres deliver.",
            watch: 'Nuclear primary-pump orders; the US data-centre framework contract; UK service work returning.',
        },
        {
            company: 'Kirloskar Oil', rank: 5, stance: 'PRICED', segment: ENG,
            what: "Makes diesel and gas engines and generator sets up to high horsepower, runs a wide genset distribution and service network, owns a pumps business (La-Gajjar), and holds a lending subsidiary (Arka Fincap) it plans to separate.",
            view: "**The strongest channel and service business, with margins going the wrong way.** It won its first hyperscale data-centre order and gained domestic share. Aftermarket has grown double digits for 12 quarters, and it turned 73% of standalone operating profit into cash over five years. But the standalone margin fell from 13.5% to 11.2% as employee costs rose 40%. The price needs far more than my ~15% estimate.",
            watch: 'Margin back above 13% as price rises land; the Arka separation; NPCIL milestones.',
        },
        {
            company: 'KSB', rank: 6, stance: 'PRICED', segment: PUMP,
            what: "Indian arm of Germany's KSB: engineered pumps for power, nuclear, oil and gas; standard pumps for buildings, water and farms (including solar pumps); valves; and a spares and service business. Its financial year is the calendar year.",
            view: "**A nuclear franchise priced as if it were already earning.** It holds ₹1,235cr of nuclear orders and returns of 21–25%. But H1 sales grew only 2–3%, NPCIL's test bed delayed its pumps, and valves margins fell to single digits. Over five years it turned only 36% of operating profit into cash. The price needs far more than my ~13% estimate.",
            watch: 'Gorakhpur pump testing from September; the eight-reactor tender; receivables from solar agencies.',
        },
        {
            company: 'Greaves Cotton', rank: 7, stance: 'TURNAROUND', segment: ENG,
            what: "Makes small diesel engines (three-wheelers, microcars), gensets, fire-pump and defence engines and automotive components, and owns most of Greaves Electric Mobility (Ampere scooters) and a vehicle-finance arm.",
            view: "**A decent core carrying a costly bet.** The core business grew 16–19% at 11–14% margins and converts about 80% of profit to cash. But ₹331cr more went into the scooter business this year, and consolidated returns have been −1% to 10% for five years. The price needs more than my ~15% estimate, which has a very wide range depending on the scooter business.",
            watch: 'Scooter business reaching break-even in 4–6 quarters as promised; core margin recovering in H2.',
        },
        {
            company: 'Shakti Pumps', rank: 8, stance: 'CYCLICAL', segment: SOLAR,
            what: "India's largest solar-pump maker for government schemes (PM-KUSUM and state programmes), with its own motors, controllers and inverters, exports, and new businesses in rooftop solar, electric-vehicle motors and solar cells and modules.",
            view: "**Volume is booming; profit and cash are not.** Pumps installed rose 58%, but the margin halved to about 10%. Five-year cash conversion is 18%, and about ₹1,770cr is owed to it. It is spending ₹1,500–1,700cr on solar cells and modules, and targets only about 15% margin once they are running. The price needs about twice my ~8% estimate.",
            watch: 'PM-KUSUM 2.0 approval; collections from state agencies; the solar-module line starting in September.',
        },
        {
            company: 'Oswal Pumps', rank: 9, stance: 'CYCLICAL', segment: SOLAR,
            what: "Solar pumps and motors for government schemes, plus solar modules, and now rooftop solar (PM Surya Ghar) and wires and cables. It listed in 2025.",
            view: "**Priced for decline, and the cash says why.** Revenue fell 8% and margin fell 11 points in a year as tender prices dropped 9% and volumes fell. Customers now take about 200 days to pay, and operating cash has been negative for two years. FY27 guidance of +20–25% leans on ₹800–1,000cr from a rooftop business it has just started. The price asks for only about my ~5% estimate, but it is only cheap if the receivables are collected.",
            watch: 'Receivables coming down in Q3 as promised; the Maharashtra tender; whether rooftop revenue carries any profit.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Compressors.** **Kirloskar Pneumatic: own.** Rising returns, no debt and a price that matches its guidance. **Elgi: follow.** The best product and global reach, at a price that already assumes its upside; buy on a fall.",
            "**Engineered pumps.** **Kirloskar Brothers: follow.** Nuclear qualification and US data-centre packages have lifted returns, but the price already assumes both deliver. **KSB: wait.** The longest nuclear record in India, but first-half growth stalled, cash conversion is poor and the price assumes nuclear is already paying.",
            "**Engines and gensets.** **Powerica: own.** Wind farms carry a thin genset business, data-centre demand is strong, and it converts most of its profit into cash, at a price below my estimate. **Kirloskar Oil: wait.** The best channel and a real data-centre win, but margins must recover first. **Greaves: pass.** A sound core engine business, but the price includes a scooter business that still loses money.",
            "**Solar pumps.** **Shakti: pass.** Volume is growing, but margins halved and it is spending heavily on solar cells. **Oswal: wait.** Cheap because volume, price and collections all fell at once; wait for the receivables to come down.",
            "**What would change my view.** PM-KUSUM 2.0 approved with prices above Maharashtra's would lift both solar names quickly. Kirloskar Oil's margin back above 13% would make it the top engine pick. NPCIL clearing its test bed and ordering eight reactors would re-rate KSB and Kirloskar Brothers. A sign that batteries are cutting genset running hours faster than expected would hurt Kirloskar Oil and Powerica.",
            "**What to watch next quarter.** Kirloskar Pneumatic's Q2 catch-up; Elgi's price increases; Kirloskar Brothers' nuclear orders and US framework deal; KSB's pump testing and second-half growth; Kirloskar Oil's and Powerica's margin recovery; Greaves's scooter losses; the scheme decision and state collections for Shakti and Oswal.",
        ],
        bottomLine:
            "Sort by business, then check the cash. Own Kirloskar Pneumatic and Powerica, the two where my growth estimate matches or beats what the price needs; follow Elgi Equipments and Kirloskar Brothers, good businesses priced for their upside case; wait on Kirloskar Oil and KSB until margins and nuclear deliveries catch up with the price; and treat the solar-pump makers as a scheme cycle whose profits are still sitting in receivables.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KIRLPNU/' },
        { label: 'Elgi Equipments Q1 FY27 analyst presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7f9a307e-052e-44ab-b2ad-d832fac54572.pdf' },
        { label: 'Kirloskar Pneumatic Q1 FY27 earnings presentation', url: 'https://www.kirloskarpneumatic.com/documents/3010307/7918279/Investor+Presentation+Q1+FY27.pdf/1f9950ac-cac1-a7c0-3f65-1f392226b675?t=1784638441869' },
        { label: 'Kirloskar Brothers Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9fd479cb-c122-45c4-89e5-0d7a30ae00d1.pdf' },
        { label: 'KSB institutional investors’ meet, 19 August 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fcbb9518-aacd-4d7e-8656-681e1504839b.pdf' },
        { label: 'Kirloskar Oil Engines Q1 FY27 earnings presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=cf9b65f3-589a-4498-99d2-7cfa4ecdf82d.pdf' },
        { label: 'Powerica Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=49250ba5-d18b-4854-b661-0cfb7f7e0b05.pdf' },
        { label: 'Greaves Cotton Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=50abfc8f-8df0-4b0b-9434-419e016a3632.pdf' },
        { label: 'Shakti Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f9d76706-2e38-4d54-a998-c556b1a602bc.pdf' },
        { label: 'Oswal Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=59ac28fb-f1b3-418d-8753-61f736b91d76.pdf' },
        { label: 'India pump market: size, structure and shares — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-industrial-pump' },
        { label: 'India air compressor market: leading players and growth — Next Move Strategy Consulting', url: 'https://www.nextmsc.com/report/india-air-compressor-market' },
        { label: 'PM KUSUM 2.0: expected size and timing — Reslink Energy', url: 'https://www.reslink.org/blogs/pm-kusum-2-0-is-coming-india-s-rs-50-000-crore-agricultural-solar-push/' },
        { label: 'India\'s SHANTI Bill completes legislative process — World Nuclear News', url: 'https://www.world-nuclear-news.org/articles/indias-shanti-bill-completes-legislative-process' },
        { label: 'Solar module overcapacity to squeeze margins, drive consolidation: ICRA — Energetica India', url: 'https://www.energetica-india.net/news/solar-module-overcapacity-to-squeeze-oem-margins-drive-industry-consolidation-icra' },
        { label: 'SC makes interim stay absolute in Kirloskar trademark dispute — ANI', url: 'https://www.aninews.in/news/national/general-news/sc-makes-interim-stay-absolute-in-kirloskar-trademark-dispute-seeks-speedy-high-court-decision20260113154703/' },
        { label: 'India diesel generator market size and growth — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-diesel-generator-market' },
    ],
};
