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
            'Elgi Equipments': 16,
            'Kirloskar Pneumatic': 15,
            'Kirloskar Brothers': 14,
            'KSB': 13,
            'Kirloskar Oil': 15,
            'Powerica': 13,
            'Greaves Cotton': 15,
            'Shakti Pumps': 8,
            'Oswal Pumps': 0,
        },
    },
    standfirst:
        "Nine makers of pumps, compressors, engines and generator sets, sorted into four businesses before anything is compared. " +
        "Compressor makers win on the customer's electricity bill and earn the steadiest returns. Engineered-pump makers win on qualification for nuclear, thermal and data-centre work. Engine and genset makers win on channel and service, in a year of strong volumes and squeezed margins. Solar-pump makers sell into government schemes that set the price and pay late, and the next scheme is not yet approved. After reading every company's calls, presentation and annual report, none is priced for the growth I expect today; four are good businesses to follow. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-28',
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
                'Elgi Equipments': 'Q1 FY27: currency added about 7 points (company).',
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
                'Oswal Pumps': 'June 2026 (company): 244 days, with receivables up from 155 to 229 days on delayed state payments.',
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
                grades: { tech: { grade: 'A', note: 'Best efficiency on ~70% of industrial models' }, qual: { grade: 'C', note: 'Industrial, not regulated' }, service: { grade: 'B', note: 'Parts 28–30% of India sales; 15–16% abroad vs peers 35–40%' }, channel: { grade: 'B', note: 'Distributor-led; still recruiting abroad' }, buyer: { grade: 'A', note: '~80% of buyers choose on running cost' } } },
            { company: 'Kirloskar Pneumatic', trend: 'widening', trendNote: 'Record air-compressor orders; Tezcatlipoca centrifugals at mid-teens share; material cost down 3.3–3.7 points.',
                grades: { tech: { grade: 'A', note: 'Own centrifugal and refrigeration designs; own forgings and castings' }, qual: { grade: 'B', note: 'Gas packages for oil and gas buyers' }, service: { grade: 'B', note: 'Maintains 1,000-plus CNG stations' }, channel: { grade: 'C', note: 'Direct and project sales' }, buyer: { grade: 'B', note: 'Critical but low-value parts of big projects' } } },
            { company: 'Kirloskar Brothers', trend: 'widening', trendNote: 'Nuclear pump orders arriving (~₹110cr in Q1); framework deal with a large US data-centre operator nearly signed.',
                grades: { tech: { grade: 'A', note: 'World’s largest maker of concrete volute pumps' }, qual: { grade: 'A', note: 'Nuclear primary and secondary circuits' }, service: { grade: 'C', note: 'Service small; IoT monitoring in hundreds of pumps' }, channel: { grade: 'B', note: 'Small pumps 45–50% of standalone' }, buyer: { grade: 'C', note: 'Utilities and PSUs' } } },
            { company: 'KSB', trend: 'stable', trendNote: 'Nuclear franchise intact but held up by NPCIL’s test bed; H1 sales grew only 2–3%.',
                grades: { tech: { grade: 'A', note: 'Parent KSB SE designs' }, qual: { grade: 'A', note: 'Primary coolant pumps in every PHWR since 1978' }, service: { grade: 'B', note: 'SupremeServ growing ~15% a year' }, channel: { grade: 'B', note: '800 dealers, 350 service centres' }, buyer: { grade: 'C', note: 'Fixed-price projects; price rises lag costs' } } },
            { company: 'Kirloskar Oil', trend: 'widening', trendNote: 'Gained domestic genset share; first hyperscale data-centre order; aftermarket up double digits for 12 straight quarters.',
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
                "**Nothing here is a buy at today's price; four are good businesses to follow.** After reading both calls, the latest presentation and the annual report for each of the nine, I have lowered my growth estimates for **Kirloskar Pneumatic** and **Powerica**, the two names this note used to own. **Kirloskar Pneumatic** is still the best-run business on the page: return on capital rose every year from 18% to 30%, it has no debt, and material cost fell to 43.9% of sales in Q1 because it now makes its own forgings and castings. But FY26 sales grew only about 8%, Q1 grew 10% against a promise of 20% or more, and management itself called FY26's 21% margin ‘a bit of an exception’. I now expect about 15% a year against about {need:Kirloskar Pneumatic|19}% priced in. **Powerica** grew 27% in Q1 and doubled its data-centre order book to ₹1,100cr, but its genset margin fell to 5.6% and management withdrew its margin guidance, its FY26 profit included a one-off ₹51cr deferred-tax credit, and the wind farms that will drive its profit need about ₹1,130cr for the next 153 MW, 70–75% of it borrowed, with a payback of about eight years on my arithmetic. I now expect about 13% a year against about {need:Powerica|16}% priced in.",
                "**Follow Kirloskar Pneumatic, Powerica, Elgi and Kirloskar Brothers.** **Elgi** has the best product here (the most efficient machine in about 70% of its industrial range) and beat its own guide in Q1 with 23% growth. Its plan to FY31 (₹6,615cr of revenue at an 18% margin) implies about 15% a year of operating-profit growth; I expect about 16% against about {need:Elgi Equipments|22}% priced in. Its annual report adds three things the calls did not stress: the main European subsidiary has ₹386cr of accumulated losses, the authorities have summoned data under the foreign-exchange law (FEMA), and some whistle-blower complaints were still open at March. **Kirloskar Brothers** lost FY26 (revenue +1%, return on capital down from 28% to 20%), but grew 12.9% in Q1, holds ₹4,062cr of orders and is close to signing a framework deal with a large US data-centre operator. I expect about 14% a year against about {need:Kirloskar Brothers|20}% priced in.",
                "**Wait on Kirloskar Oil and KSB.** **Kirloskar Oil** is taking share (genset volumes +41% in FY26 against a market up 18%) and won its first hyperscale data-centre order, 192 MW. But it promised ‘no margin deterioration’ in May and then reported a standalone margin of 11.2% against 13.5% a year earlier, and it is committing ₹2,100cr to new engine capacity. Its price needs about {need:Kirloskar Oil|28}% a year against my ~15%. **KSB** holds India's longest nuclear-pump record and ₹2,745cr of orders, but every dated promise from its March meeting slipped: NPCIL's test bed broke down, first-half solar sales were ₹50–60cr against more than ₹300cr planned for the year, and first-half sales grew 2–3%. Its price needs about {need:KSB|25}% against my ~13%.",
                "**Pass on Greaves, Shakti and Oswal.** **Greaves** has a sound core engine business, but sent ₹331cr to its electric-scooter company in Q1; that company's loss widened to ₹273cr in FY26, and its planned share sale has dropped out of management's talk. **Shakti** is spending ₹1,500–1,700cr on solar cells and modules while its margin has fallen from 23% to 10% and ₹1,799cr is owed to it. **Oswal** looks cheap, but I no longer expect its profit to grow from here: it cut its margin guide from 22–23% to 15–17% within twelve weeks, customers take 229 days to pay, ICRA moved its rating outlook to negative on 22 September, its CFO resigned nine days after the May call, and it bought ₹132cr of goods from a promoter-linked associate in FY26.",
                "**Three things to hold onto before reading the rest.** First, **who sets the price decides the margin**: compressor buyers choose on their electricity bill, so Elgi and Kirloskar Pneumatic held margins through record copper prices, while state agencies set solar-pump prices and 40–45 suppliers bid, so Shakti's and Oswal's margins roughly halved. Second, **this is a volume up-cycle with a margin down-cycle**: genset and compressor demand is strong, but copper reached a record US$6.85 a pound in September and fixed-price orders mean costs arrive before price rises. Third, **read the annual reports**: they turned up a FEMA enquiry and whistle-blower complaints at Elgi, a Supreme Court-ordered family arbitration at Kirloskar Brothers, audit-trail gaps at Shakti, Greaves and Oswal, related-party purchases at Shakti and Oswal, and a gap between Kirloskar Oil's disputed tax demands and its contingent-liability note.",
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
                "This group spans four industries that share engineering skills but not customers. **Gensets are booming**: India's diesel-genset market grew about 18% in FY26 to roughly 1.79 lakh sets (Kirloskar Oil's count), worth about US$1.83bn, and Mordor Intelligence (cited in Greaves' annual report) expects about 7% a year in value over five years. **Data centres are the fastest part**: CareEdge Ratings expects India's data-centre capacity to rise from about 1.2 GW to about 4 GW by FY30, and Cummins India, the market leader, now gets 40% of its power-generation revenue from them. **Solar pumps are stuck between schemes**: CRISIL forecast in December 2024 that the market would grow from about ₹3,900cr in FY24 to ₹28,000–30,000cr by FY29, but the first phase of PM-KUSUM is 86% installed and the second has still not been approved. **Compressors and industrial pumps follow private factory spending, which ICRA says is pausing**: new private project announcements fell to ₹7.0 trillion in Q4 FY26 from ₹17.3 trillion a year earlier, and manufacturing announcements hit a seven-quarter low. **My view: FY27 is a year of strong genset volumes, softer industrial orders and a solar-pump air-pocket, with margins everywhere squeezed by record copper.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Castings and forgings → motors and engines → the machine (pump, compressor, genset) → a package or plant (a data-centre cooling skid, a CNG station, a solar-pump installation) → spares and service for 10–30 years. **The profit sits at the two ends.** At the design end, efficiency and qualification earn a premium: Kirloskar Pneumatic's compression segment earned 24.9% in FY26 and KSB's pumps 12.9%. At the service end, KSB says its aftermarket earns gross margins ‘2 times, 3 times’ those on new pumps, and Elgi's parts are 28–30% of its Indian revenue. Assemblers in the middle and anyone selling into a government tender earn least: Powerica's gensets made 5.6% in Q1, and solar-pump margins fell from 24–29% to 10–16% within a year. The one annuity in the group is Powerica's wind power, which earns 60–63% on old turbines and 82–83% on new ones. **My view: pay for design and service, not for assembly or tender wins.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Data centres** are the strongest driver for large gensets and cooling pumps: CareEdge expects about ₹1.5 lakh crore of investment to take capacity to about 4 GW by FY30, and ICRA says services projects announced in Q4 FY26 hit a 12-quarter high ‘led by transport services and data centre projects’. **Government capex** is budgeted at ₹12.2 trillion in FY27 (+11.5%), but ICRA calls the states' 14.3% increase ‘optimistic’. **Gas**: city-gas stations are expected to grow from about 7,000 to about 15,000 by 2031. **Nuclear**: the government targets 100 GW, and NPCIL orders already sit in the books of KSB, Kirloskar Brothers, Kirloskar Oil and Powerica. **Farms**: IMD forecast the 2026 monsoon at 90% of its long-run average with El Niño likely, which raises the need for irrigation but strains the state budgets that pay for solar pumps. **Rooftop solar** is a new outlet: PM Surya Ghar has about 4.23 million installations and ₹22,000cr in the FY27 budget. **My view: data centres and gas are above-trend for three to five years; private industrial orders lag by two to four quarters and will soften into FY28.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Emission rules reset gensets.** The CPCB IV+ norms from July 2024 forced new after-treatment, raised genset prices (Powerica passed on about 33% over nine months), caused pre-buying and then a dip, and were followed by an 18% volume rebound in FY26. **Solar pumps are pure policy.** Component B of PM-KUSUM had 11.24 lakh of 13.07 lakh sanctioned pumps installed by 30 June 2026; the government said in March that a second phase with a 10 GW farm-solar component is being prepared, but by late September the minister was still saying it would come ‘soon’. A ₹50,000cr outlay quoted by trade blogs is not confirmed by any official source. From 1 June 2026, government-linked solar projects must use Indian-made cells, which are 40–50% of a solar pump-set's cost; that is why Shakti and Oswal are building cell and module plants. **Exports softened**: pumps (~US$1.6bn, +5%) and engines (~US$4.1bn, +6%) grew in FY26, but March fell 7% and 13% as the Strait of Hormuz disruption hit West Asia orders (EEPC India). **Costs rose**: copper, the main input for motors and alternators, reached a record US$6.85 a pound in September (+42% in a year), and hot-rolled steel rose 8% in the month. ICRA expects GDP growth to slow to 6.5% in FY27.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "The labels say pumps, compressors and engines, but each share rests on something different. **Kirloskar Pneumatic** depends on gas (CNG stations, biogas, oil and gas packages) and on new products such as its Zephyros ammonia air-conditioning system landing from FY28. **Elgi** depends on factories replacing old compressors with efficient ones in India and North America, and on fixing Europe. **Kirloskar Brothers** depends on water and power projects at home, SPP's recovery in the UK and US data centres. **KSB** depends on NPCIL's test bed and ordering calendar and on its German parent. **Kirloskar Oil** and **Powerica** depend on data centres and industry buying backup power; Powerica also on Cummins's choices, the wind and bank funding. **Greaves** depends on how fast its scooter company stops losing money. **Shakti** and **Oswal** depend on PM-KUSUM 2.0 and on state agencies paying. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who is in it', 'Operating margin (last five quarters)', 'Return on capital (five years)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Compressors', 'Elgi, Kirloskar Pneumatic', '13–26%', '18–30%', '**58–66%**', 'Sold on running cost; service tail'],
                        ['Engineered pumps', 'KSB, Kirloskar Brothers', '9–17%', '11–28%; mostly 20%+', '**36–67%**', 'Qualification for nuclear, power, water'],
                        ['Own engines and gensets', 'Kirloskar Oil (standalone), Greaves (consolidated)', '6–14%', '−1–19%', '**73%** (Kirloskar Oil); negative (Greaves)', 'Channel and aftermarket; Greaves carries scooter losses'],
                        ['Genset assembly plus wind power', 'Powerica', '10–16%', '10–27%', '**91%**', 'Cummins engines; wind earns the margin'],
                        ['Solar pumps for government schemes', 'Shakti, Oswal', '10–27%', '10–78%', '**−8% to 18%**', 'Scheme pricing; late payment'],
                    ],
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Diesel gensets', '~1.79 lakh sets in FY26 (+18%); ~US$1.83bn', '~7% a year in value over five years', 'Kirloskar Oil (units); Mordor Intelligence via Greaves AR FY26'],
                        ['Data-centre capacity', '~1.2 GW (2025)', '**~4 GW by FY30**; industry revenue ~24% a year FY26–FY30', 'CareEdge Ratings, Mar 2026'],
                        ['Solar-pump systems', '~₹3,900cr in FY24 (15% a year since FY19)', '**₹28,000–30,000cr by FY29**, assuming PM-KUSUM kept its pace', 'CRISIL MI&A, Dec 2024'],
                        ['PM-KUSUM Component B', '11.24 lakh of 13.07 lakh pumps installed (30 Jun 2026)', 'Phase 2 with 10 GW of farm solar planned; not yet approved', 'MNRE via Shakti; PIB, Mar 2026'],
                        ['Industrial pumps', '~US$2.35bn (2024)', '~7% a year to ~US$4bn by 2032 (indicative; looks low against company sales)', 'Verified Market Research via Shakti AR FY26'],
                        ['Air compressors', 'Global ~US$23bn (2025); Elgi ~25% of India', '~3.5% a year globally', 'Elgi AR FY26; CRISIL, May 2026'],
                        ['Government capex', '₹12.2 trillion FY27 budget (+11.5%)', 'States +14.3%, called ‘optimistic’', 'ICRA, Apr 2026'],
                        ['Private project announcements', '₹7.0 trillion in Q4 FY26 vs ₹17.3 trillion', 'Subdued near term; recovery in FY28 if energy prices ease', 'ICRA, Apr 2026'],
                        ['Exports, FY26', 'Pumps ~US$1.6bn (+5%); engines ~US$4.1bn (+6%)', 'March: pumps −7%, engines −13% (Hormuz)', 'EEPC India, Apr 2026'],
                        ['Copper and steel', 'Copper US$6.85/lb, a record (+42% in a year); HR coil ₹76,085/t (+8% in September)', 'Price rises lag about a quarter (Cummins India)', 'Trading Economics; Ministry of Steel via Indian Masterminds'],
                        ['Monsoon 2026', 'IMD forecast 90% of long-run average; El Niño likely', 'Dry year: more pump need, weaker state finances', 'IMD via Down To Earth, May 2026'],
                    ],
                    note: 'The consultancy market sizes for pumps look low against listed companies’ own sales; treat them as direction, not as totals.',
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
                    text: "A compressor's electricity over its life costs many times its price, and Elgi's MD says ‘around 80% of the market considers energy efficiency and maintenance more important than price’. **Elgi** is the most efficient maker in about 70% of its industrial models, makes 88% of its own motors (cutting lead times from months to three days), keeps warranty costs under 1% of sales and holds about 25% of the Indian market (CRISIL). The proof of pricing power is that it absorbed a 25–50% US tariff while North American sales rose 37% in Q1, and passed on a 9% cost buffer in June. **Kirloskar Pneumatic** made 57 intellectual-property filings in FY26, took material cost down 3.3–3.7 points of sales by making its own castings and forgings, holds a mid-teens share of a ₹500cr-plus market for large centrifugal compressors with its Tezcatlipoca range, and maintains more than 1,000 CNG stations at 98.5% uptime. The threat is at the bottom: about a fifth of the market buys on price and is flooded by Chinese machines, which is why Elgi launched a cheaper range in India in September. **My view: both edges last, because efficiency comes from designs and in-house parts that take years to build.**",
                },
                {
                    label: 'Lasting but contested: nuclear and large-pump qualification',
                    text: "**KSB** has supplied the primary coolant pumps for every Indian heavy-water reactor since Narora, was the first pump maker with the ISO 19443 nuclear quality standard, and claims about half of the boiler-feed and condensate pumps in new thermal plants. **Kirloskar Brothers** is the world's largest maker of concrete volute pumps and says it supplies all the metallic-volute cooling pumps in India's current nuclear plants; its UK arm SPP holds about 85% of British water-utility pump work. But KSB's MD said plainly that ‘NPCIL is looking for alternative suppliers’. Kirloskar Brothers' primary-pump prototype has passed its hydraulic and mechanical tests but hit ‘metallurgical hiccups’ with Indian castings, and an analyst named Flowserve as another candidate. **My view: the approvals are real and slow to copy, but the next large reactor tender is likely to have more than one qualified bidder, and in every case NPCIL, not the company, decides the timing.**",
                },
                {
                    label: 'Real but rented: gensets and engines',
                    text: "**Kirloskar Oil** sold more than 50,000 gensets in FY26, about 28% of the market by units, and grew 41% against the market's 18%; its share of large sets above 750 kVA went from single digits to ‘approaching double digits’ in two years. New emission rules for gensets and construction machines need 18-month customer approvals, and its construction-engine sales rose 44% after the switch. But in large data-centre gensets Cummins holds an estimated 80% or more, and Q1 showed Kirloskar Oil's costs rising faster than its prices. **Powerica** is one of only three genset makers that package Cummins engines, a 40-year relationship, but the supply deal is non-exclusive and an analyst noted Cummins' parent took two data-centre projects directly last year; management would not comment and said ‘competition continues to increase’. **Greaves** holds about 60% of diesel three-wheeler engines, but diesel is only about a fifth of that market and electric vehicles rose from 23% to about 33% of it in FY26. **My view: channel and approvals protect volume, not price.**",
                },
                {
                    label: 'The best profit, still small: service tails',
                    text: "Aftermarket work is the most profitable business in the sector and the least developed. **KSB**'s SupremeServ is about 15% of sales, growing about 15% a year, with a target of 25–30%. **Elgi**'s parts are 28–30% of Indian revenue but only 15–16% abroad, against 35–40% at global peers, because its dealers keep the service income. **Kirloskar Pneumatic**'s service income rose from ₹204cr to about ₹300cr in FY26 as its CNG maintenance grew. **Kirloskar Oil**'s distribution and aftermarket business made ₹268cr in Q1 (+20%) after 12 straight quarters of double-digit growth. **Kirloskar Brothers** says it is the only Indian supplier of remote-monitoring panels for pumps, but the installed base is only ‘in hundreds’. **My view: the company that doubles its service share will re-rate; none has yet.**",
                },
                {
                    label: 'Barely a moat: solar pumps for state schemes',
                    text: "**Shakti** has installed 2.58 lakh pumps, claims about a quarter of PM-KUSUM, and saw 25,000 of its pumps allotted to Maharashtra farmers ‘in 25 minutes’ when farmers could choose. **Oswal** makes its own pumps, motors, modules and structures. But the state sets the price and the lowest bid wins: bidders per tender rose to 40–45 as profits drew entrants, and when PM-KUSUM stalled everyone crowded into Maharashtra and cut realisations about 9%. Shakti matches the lowest price and walked away from ₹200cr of Maharashtra orders over margin and payment worries. **My view: brand and cost win share in this market, never price.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Cummins India** is the genset leader (Q1 FY27 sales ₹3,375cr, +18%, with record domestic power-generation sales of ₹1,424cr), with **Mahindra, Caterpillar and Kohler** in other sizes. **Atlas Copco and Ingersoll Rand** lead compressors worldwide. **Grundfos, Xylem, Flowserve and Sulzer** compete in engineered pumps, and **Armstrong and Taco** against Kirloskar Brothers' US data-centre packages. **GK Energy** is the largest pure solar-pump installer (CRISIL), alongside dozens of unlisted bidders. The Kirloskar family groups are in a long dispute over the brand and a 2009 settlement; in August the Supreme Court sent Kirloskar Brothers' claims against Atul Kirloskar and others, over the non-compete terms of that settlement, to arbitration.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Q1 FY27 was a test: copper hit a record, steel and freight rose with the West Asia war, and Middle East orders stalled. What matters is who could pass the cost on, and how fast.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: compressors, and pumps at a lower level',
                    text: "**Elgi** lifted its Q1 EBITDA margin to 14.6% from 14.0%: volume added ₹74cr, while materials, US tariffs and mix took ₹25cr; its June price rise lands from late Q2. It targets 18% by FY31, CRISIL expects only 14–15%. **Kirloskar Pneumatic**'s compression segment earned 24.9% in FY26 and 22.1% in Q1 (18.3% a year earlier), but it guides only 18–20% for FY27 and calls FY26 ‘a bit of an exception’; CRISIL expects 17–18%. **Kirloskar Brothers**' Indian parent improved to 13.7% from 12.8%, but the group fell to 11.8% because SPP UK made an operating loss and the motor-and-castings subsidiary fell to 7.3% after absorbing loss-making Kolhapur Steel. **KSB** earned 11.3% in the first half against a 13–14% promise; valves fell to single digits, and its price rises were single-digit while its foundries charged 12–15% more. **My view: the compressor margins are structural; the pump margins are structural at a lower level, and both pump makers should recover a point or two as projects reprice.**",
                },
                {
                    label: 'Cyclical: engines and gensets',
                    text: "**Kirloskar Oil**'s standalone margin fell to 11.2% from 13.5%: raw materials rose to 65.7% of sales, and employee costs jumped 39% to ₹111cr, which management said is partly ‘structural’ while declining to give the share-option charge. CRISIL expects the engine business to earn only 11–12%. **Powerica**'s genset margin fell to 5.6% (9.1% in FY26) and its gross margin to 33.5% from 36.8%, because its orders have no price-escalation clause; it took two price rises in Q1 and Q2 and expects recovery from Q3. Wind earned 48.6%. **Greaves**' core margin fell to 12.6% from 14.9% as materials rose to 66.6% of core revenue; about 1.5 points was deliberate spending on brand and people. Cummins India says realisation lags a price rise by a quarter. **My view: most of this comes back from the second half, but Kirloskar Oil's higher staff costs and new capacity will hold its margin near 12% for a while.**",
                },
                {
                    label: 'Not structural: solar pumps',
                    text: "**Shakti**'s margin fell from 23.1% to 9.6% in a year. Of the ₹61cr drop in quarterly operating profit, management put ₹36cr on copper, steel and aluminium and ₹25cr on lower prices; its realisation has been flat at about ₹2.48 lakh a pump, and its new 10,000-pump Maharashtra order prices each at about ₹2.36 lakh including GST. **Oswal** fell from 27.4% to 15.7%: 8–9 points from Maharashtra price cuts, 3–3.5 from raw materials and 1–1.5 from lost scale; its management said ‘the prices at which bidding has taken place currently are not sustainable’. Shakti says its own cells and modules will add about 3 points, but it has not given a margin target. **My view: FY25's 24–29% margins will not return; mid-teens is the best case once cell plants run.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Oswal** tied up ₹1,054cr in working capital, almost all of it in unpaid bills (₹1,203cr); its customers took 199 days to pay in FY26 against 38 in FY22, and 229 days by June, with a cash cycle of 244 days. It also raised its bad-debt provision from ₹3.8cr to ₹8.8cr. **Shakti** tied up ₹867cr, again mostly bills (₹1,065cr); after cutting receivables by ₹420cr in Q4 it let them rise to ₹1,799cr by June, about 27% of it over six months old and ₹477cr of it retention money held back until service periods end. **Greaves** tied up ₹717cr, mostly in its finance arm's loans and the scooter business. **This is why the solar pair's profits have not become cash.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**KSB** tied up ₹615cr in five years: customers now take 118 days to pay against 68, it holds 197 days of stock, and its cash cycle reached 204 days. Operating cash halved to ₹93cr in CY25 and free cash was about zero. The reasons it gave were slow-paying state solar agencies (especially Maharashtra), pumps built for the Middle East that could not ship, and stock left over when the flue-gas market stopped. **Kirloskar Brothers**' debtor days rose from 40 to 53 in FY26, work in progress rose from ₹180cr to ₹241cr, and Q1 added ₹82cr of half-finished foundry orders. **Kirloskar Oil**'s stock rose from 48 to 64 days in Q1. These are warnings, not crises.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Kirloskar Pneumatic** cut its stock from 132 to 88 days and its cash cycle from 128 to 90, and the capital tied up in compression fell from ₹417cr to ₹373cr in Q1. **Elgi**'s cash conversion rose every year from 23% to 78% as it ran down the stock it built in the supply-chain crunch, though stock is still 134 days and management says its sales forecasts are only 60–70% accurate against a 90% target. **Powerica**'s cash cycle fell from 44 to 29 days in FY26.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**Kirloskar Oil**'s dealers pay quickly and suppliers give about 80 days' credit, so its cash cycle was 25 days in June and only ₹281cr went into working capital in five years. **Powerica** absorbed only ₹30cr. **Kirloskar Brothers** insists on advances or letters of credit for industrial pumps and cash for retail, and does not book orders without payment security. The solar pair are paid 90% after installation data and 10% months later, so retention money builds up by design. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Kirloskar Pneumatic', 'Debt-free; cash and liquid investments about ₹460cr; bank limits raised to ₹840cr for package guarantees', 'Net cash ₹595cr including treasury investments (Screener, March)'],
                        ['Elgi Equipments', 'Net cash ₹680cr at June (₹621cr in March); Q1 capex ₹35cr', 'Parent debt-free; ₹533cr of subsidiary debt backed by ₹272cr of parent guarantees'],
                        ['Kirloskar Brothers', 'Capex equal to depreciation; ₹82cr of extra stock from the foundry changeover', 'Net cash ₹155cr (Screener); investments ₹758cr'],
                        ['KSB', 'Net financial position ₹283cr (December); capex ₹80–120cr a year', 'CY25 operating cash ₹93cr, down from ₹187cr'],
                        ['Kirloskar Oil', 'Standalone net cash ₹485cr at June (₹552cr in March); ₹2,100cr of engine capex planned', 'Arka Fincap owes ₹5,033cr, 3.7 times its equity, outside the engine business'],
                        ['Powerica', 'Net cash ₹193cr at June after repaying ₹525cr from IPO money', 'Capital commitments ₹934cr; wind loans will turn it back to net debt'],
                        ['Greaves Cotton', 'Standalone debt-free; ₹331cr into the scooter company, ₹50cr into the finance arm', 'Consolidated borrowings ₹394cr (March, from ₹81cr)'],
                        ['Shakti Pumps', 'Receivables ₹1,799cr at June (₹1,276cr in March); ₹1,800cr of bank limits; ₹800cr term loan for the cell plant', 'Borrowings ₹505cr, including ₹119cr of supplier finance and ₹31cr from a promoter-group company'],
                        ['Oswal Pumps', 'Net debt ₹266cr at June (₹135cr in March); collections ‘much better’ in Q2 promised', 'ICRA outlook cut to negative, 22 Sep 2026; ₹235.5cr of IPO money unused'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Company net-cash figures include investments that Screener’s cash-only measure leaves out.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 call in May (KSB: its March meeting), and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: data centres',
                    text: "**Kirloskar Oil** won a 192 MW order for 96 large gensets from HyperNext, with five to six years of maintenance; analysts questioned the customer's track record, and management said only that it does its ‘checks and balances’. **Powerica**'s data-centre book went from ₹400–500cr to ₹900cr at the end of July and ₹1,100cr a week later, and data centres were more than 20% of genset revenue in Q1; installation adds about 30% to each order. **Kirloskar Brothers** sells US$7.5–10m of cooling and fire-pump packages per US hyperscale site, has eight on its US shop floor and says a global framework contract is in final signing. **KSB** has liquid-cooling pump orders from a global maker in India, and **Greaves** is ‘looking into’ sets above 1,000 kVA with a global engine partner. **My view: three to five years of strong demand, but Cummins dominates the largest sets and batteries will cut running hours over time.**",
                },
                {
                    label: 'Growth driver: gas and cold chains',
                    text: "City-gas stations are expected to double to about 15,000 by 2031, and **Kirloskar Pneumatic** makes the compressors and maintains more than 1,000 stations. It also expects over ₹100cr of Tezcatlipoca centrifugal orders this year, record Khione refrigeration bookings and a new food-waste biogas plant. Its Zephyros ammonia air-conditioning system, backed by a ₹320cr production-incentive commitment (about ₹60cr spent), took its first outside order in July, but management says the ‘substantial jump’ comes only in FY28. **My view: a steady decade-long driver, but lumpy; about ₹500cr of the April order book runs beyond FY27.**",
                },
                {
                    label: 'Growth driver: nuclear',
                    text: "**KSB** has ₹1,235cr of nuclear orders but billed only ₹30–50cr of nuclear revenue in CY25. NPCIL's test of its first fully Indian coolant pump began in April–May and stopped when NPCIL's own test equipment failed; a restart was expected in September, the 500-hour test takes two to three months, and then about one pump a quarter can be billed. **Kirloskar Brothers** booked about ₹70cr of primary-circuit and ₹40cr of secondary-circuit nuclear orders in Q1. **Kirloskar Oil**'s ₹798cr NPCIL genset order bills from FY27 to 2029, and **Powerica** is executing a 63 MW NPCIL generator order worth ₹283.6cr plus US$52.4m of imported items by Q1 FY28. **My view: real and large, but slow; it helps KSB's numbers from CY27, not this year.**",
                },
                {
                    label: 'Growth driver: solar schemes and rooftops',
                    text: "PM-KUSUM 2.0 would restart the solar-pump market, but it still has no cabinet approval, and industry expectations have slipped from June to August to ‘soon’. Meanwhile **Oswal** hopes for ₹800–1,000cr of revenue from about 2 lakh PM Surya Ghar rooftop systems this year against an order book of 72 MW, and **Shakti** booked ₹8cr of rooftop sales in Q1. Both are building domestic-content capacity: Shakti ₹1,500–1,700cr for a 0.5 GW module line and a 2.2 GW cell-and-module plant by September 2027; Oswal ₹272.8cr of IPO money for modules going from 0.6 GW to 2.1 GW. **My view: even with KUSUM 2.0, prices stay near today's levels, and the new plants risk arriving into overcapacity.**",
                },
                {
                    label: 'Growth driver: capacity for the next cycle',
                    text: "**Kirloskar Oil** is the big spender: ₹700cr to add 50,000 engines a year at Kagal by April 2027, then ₹1,400cr for 20,000 large engines, roughly doubling its gross block to about ₹4,000cr. Management expects four to five rupees of sales per rupee of plant, or ‘close to ₹5,000 crores, ₹6,000 crores’ of revenue from the second phase, and CRISIL expects it to be funded largely from its own cash. That is a bet against FY26 standalone EBITDA of ₹735cr, and the second phase earns only from about FY29. Everyone else spends modestly: **Elgi** about ₹200cr in FY27, mostly moving its Coimbatore factory; **KSB** ₹80–120cr; **Kirloskar Brothers** about its depreciation; **Greaves** ₹500–700cr over four to five years. **My view: Kirloskar Oil's capex is the single biggest swing factor in the group's returns.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Elgi** said in May that Q1 would grow about as fast as last year with a similar margin; it grew 23% (16% without currency) and lifted its margin. **Powerica** promised double-digit growth and grew 27%. **Kirloskar Oil** delivered the hyperscale data-centre entry it had talked about, and **Greaves**' core grew 16% (19% like-for-like), inside its growth band (widened in August to 16–20% from May's 16–18%).",
                },
                {
                    label: 'Cautious',
                    text: "**Kirloskar Brothers** only ever promises ‘double-digit growth’, missed it in FY26 (+1%), and in Q1 grew 12.9% for the group but only about 9% in India. **Kirloskar Pneumatic** kept its 20%-plus FY27 guide after 10% in Q1, so the other three quarters must grow about 22%; CRISIL expects 17–18% for FY27 and 12–13% a year after that.",
                },
                {
                    label: 'Missed',
                    text: "**KSB** promised 15–20% pump growth, two to four nuclear pumps and more than ₹300cr of solar sales for CY26; it grew 2–3% in the first half, has not yet invoiced a nuclear pump and sold ₹50–60cr of solar. **Kirloskar Oil** promised ‘no margin deterioration’ and saw its standalone margin fall 2.3 points, while exports fell 11%. **Oswal** cut its margin guide from 22–23% to 15–17% and its profit-margin guide from 15–16% to 11–13% within twelve weeks, and its module line slipped a quarter. **Shakti** promised its module plant by the end of Q1 and KUSUM 2.0 orders from Q2; the plant moved to September and the orders have not come.",
                },
                {
                    label: 'Mixed',
                    text: "**Powerica** beat on revenue but withdrew its genset margin guidance (‘this is an impacted year’), and its emission-kit associate's sales fell from ₹22cr to ₹16–17cr a quarter. **Greaves** met its growth band but its core margin (12.6%) fell below its 13–15% target, and the scooter company's planned share sale has disappeared from its talk. **Kirloskar Brothers**' foundry is finally fixed, but SPP UK's promised recovery has not arrived and its nuclear castings slipped.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Elgi to grow earnings about 16% a year, Kirloskar Pneumatic, Kirloskar Oil and Greaves about 15%, Kirloskar Brothers about 14%, Powerica and KSB about 13%, Shakti about 8%, and Oswal roughly nothing from its current profit.** These are lower than a quarter ago for Kirloskar Pneumatic (18% before: slow sales and a margin its management calls exceptional), Powerica (18% before: a one-off tax credit in the base, withdrawn genset guidance and debt-funded wind), Elgi (17% before: its own FY31 plan implies about 15%) and Oswal (5% before: a cut guide, falling profit and a negative rating outlook). How many years of work each company has booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Kirloskar Pneumatic', 'Gas stations, centrifugals, refrigeration; Zephyros from FY28; margin easing from 21%', '11% / **15%** / 20%'],
                        ['Powerica', 'Data-centre gensets; ~300 MW more wind by FY29, mostly on loans; genset margin recovery', '8% / **13%** / 18%'],
                        ['Elgi Equipments', 'Share gains in India and North America; Europe past breakeven; FY31 plan', '10% / **16%** / 20%'],
                        ['Kirloskar Brothers', 'Recovery from a weak FY26; US data centres; nuclear; SPP UK', '10% / **14%** / 18%'],
                        ['Kirloskar Oil', 'Data centres, share gains, aftermarket; ₹2,100cr of new capacity', '10% / **15%** / 20%'],
                        ['KSB', 'Nuclear billing from CY27; aftermarket; solar recovery', '8% / **13%** / 17%'],
                        ['Greaves Cotton', 'Core engines; scooter losses shrinking from a tiny profit base', '5% / **15%** / 25%+'],
                        ['Shakti Pumps', 'PM-KUSUM 2.0; cells and modules; exports', '−5% / **8%** / 20%'],
                        ['Oswal Pumps', 'State tenders; rooftop solar; profit falling from FY26’s peak first', '−10% / **0%** / 12%'],
                    ],
                    note: 'My own judgement, not guidance. Base case assumes India’s nominal GDP grows about 10–11% a year and no recession. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Kirloskar Pneumatic', 'FY27 revenue +20% or more; EBITDA 18–20%', '~₹100cr routine; ₹320cr for Zephyros over FY27–FY28', '**Behind**: Q1 +10%; A800 launched; Zephyros and precision engineering slipped a quarter'],
                        ['Elgi Equipments', '₹6,615cr revenue and 18% margin by FY31; Europe at breakeven', '~₹200cr in FY27', '**Beat**: Q1 +23% against about 12%; margin up, not flat'],
                        ['Kirloskar Brothers', 'Double-digit growth; no margin target', 'About depreciation (~₹100cr)', '**Mixed**: group +12.9%; SPP UK still loss-making; nuclear castings slipped'],
                        ['KSB', 'CY26 cut from 15–20% pump growth to ‘double-digit’; 12–13% return on sales by 2030', '₹80–120cr a year', '**Missed**: H1 +2–3%; nuclear test halted; solar far below plan'],
                        ['Kirloskar Oil', 'US$2bn (about ₹16,000–16,600cr) revenue by FY30; no FY27 numbers', '₹700cr by April 2027, then ₹1,400cr', '**Missed**: ‘no margin deterioration’, then 11.2% against 13.5%; exports −11%'],
                        ['Powerica', 'Double-digit revenue; genset margin guidance withdrawn; 638 MW of wind by FY29', '₹1,130cr for ~153 MW of wind, 70–75% debt', '**Mixed**: revenue +27%; genset margin 5.6%, not a brief dip'],
                        ['Greaves Cotton', 'Core growth 16–20%; core margin 13–15%; scooters EBITDA-positive in 4–6 quarters', '₹500–700cr over 4–5 years; ₹381cr into investees in Q1', '**Mixed**: core growth on target; margin 12.6% below band; scooter IPO dropped'],
                        ['Shakti Pumps', '₹5,000cr revenue by 2029; no margin target', '₹1,500–1,700cr by September 2027', '**Slipped**: module plant from June to September; KUSUM 2.0 still awaited; margin 9.6%'],
                        ['Oswal Pumps', 'FY27 revenue +20–25% (kept); EBITDA margin 15–17% (cut from 22–23%)', '~₹350cr in FY27', '**Walked back**: margin guide cut 6 points; Q1 revenue −7.9%'],
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
                    label: 'Government schemes and late payment',
                    text: "**Shakti** earns about 77% of its revenue from government schemes and **Oswal** about 80%; a delay in PM-KUSUM 2.0 cuts volume and, by crowding bidders into fewer tenders, cuts price too. Shakti's order book fell from ₹1,500cr to ₹1,000cr, both figures including GST and dated at the call rather than the quarter-end, which an analyst complained about. Oswal's management admitted ‘beyond a point, we can only hope’. **KSB** now carries the same state agencies' late payments, and **Kirloskar Brothers**' water dispatches stalled when state funding for the Jal Jeevan Mission slowed. With ICRA warning of fiscal slippage and a weak monsoon, state agencies may pay even later.",
                },
                {
                    label: 'Input costs on fixed prices',
                    text: "Copper is at a record and steel is rising again. Dealer businesses (**Elgi**, **Kirloskar Oil**'s aftermarket) reprice within a quarter or two; project and tender businesses (**KSB**, **Powerica**'s older orders, the solar pair) cannot. Powerica said its orders carry no escalation clause, and its data-centre book mixes orders taken before and after its price rises. **Shakti** is not hedging because it sees the rise as ‘temporary’. **Kirloskar Oil** would not split price from volume or give its share-option cost.",
                },
                {
                    label: 'Governance findings in the annual reports',
                    text: "**Elgi** received a summons under FEMA seeking years of data on imports, exports and overseas investments, and had whistle-blower complaints still open at March; management expects no significant impact. **Kirloskar Brothers**' auditor also considered whistle-blower complaints, and in August the Supreme Court sent its dispute with Atul Kirloskar's family to arbitration, with any cost ‘not presently ascertainable’. **Shakti**'s auditor noted that its accounting software's audit trail is not kept for some transactions, and it bought goods and construction from promoter-family companies (about ₹67cr from one builder) and owes ₹31cr to a promoter-group company. **Oswal** bought ₹132cr from Walso Solar, an associate formed from two promoter-linked firms (₹64.5cr a year earlier), had to revise its bank drawing-power statements to match its books, and lost its CFO nine days after the May call. **Greaves**' audit trail misses changes by some privileged users. **Kirloskar Oil**'s auditor lists ₹106.8cr of disputed income-tax demands not paid, while its contingent-liability note shows only ₹5.8cr of income-tax demands; its UAE arm is also buying a promoter-group company in South Africa.",
                },
                {
                    label: 'Contingent claims and loss-making subsidiaries',
                    text: "**KSB** has ₹212cr of contingent liabilities, mostly GST and excise disputes, about 12% of its net worth. **Kirloskar Brothers** has ₹160cr, and carries weak subsidiaries: Kolhapur Steel with ₹155cr of accumulated losses (now merged into its motor arm), a Dutch pump subsidiary and a Thai unit that lose money and that the parent guarantees. **Greaves** faces ₹129cr of customs claims, including a ₹56.4cr demand that treats its 2018–21 scooter-part imports as complete kits. **Elgi**'s European subsidiary lost ₹22cr in FY26 and has ₹386cr of accumulated losses, and its US distributors are loss-making; the parent guarantees ₹272cr of subsidiary debt. **Kirloskar Oil**'s US arm lost ₹19.9cr and owes more than it owns. **Kirloskar Pneumatic** and **Powerica** are clean by comparison.",
                },
                {
                    label: 'Capital allocation',
                    text: "**Kirloskar Oil** is committing ₹2,100cr to engines while running Arka Fincap, a lender with ₹5,033cr of borrowings at 3.7 times its equity whose quarterly profit fell to ₹6.9cr; separating it ‘takes time’. **Shakti** is spending ₹1,500–1,700cr at 63% plant use and a 10% margin, with ₹101cr from its FY24 share sale still unused. **Oswal** has ₹235.5cr of IPO money unused while its operating cash has been negative for two years. **Greaves** sent ₹381cr to its scooter and finance arms in one quarter, roughly ten times its FY26 core capex, and wrote off ₹16cr on an electric-drive project that won no orders. **Powerica**'s wind growth is 70–75% debt-funded with an eight-year payback.",
                },
                {
                    label: 'Depending on someone else’s decision',
                    text: "**Powerica** depends on Cummins's channel choices and **declined to comment on Cummins taking data-centre projects directly**; its top-ten customers' share appears to have risen to about 28% as data-centre orders grew. **KSB** depends on its German parent: 70–80% of exports go through group companies, it pays ₹31–37cr a year in royalties, its transfer prices depend on a tax agreement only signed this year, and the group's new software will be charged to it from 2027 at a cost it could not give. **KSB** and **Kirloskar Brothers** depend on NPCIL's test bed and calendar, **Elgi** on US tariffs, and the gensetmakers on how fast batteries cut running hours; Powerica says the genset ‘will be there’ for 20–25 years.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet, heavy depreciation or losses in a side business are the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 9x, 16% at 26x, 17% at 27x, 19% at 34x, 20% at 35x, 22% at 42x, 23% at 46x, 25% at 53x and 28% at 68x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Kirloskar Pneumatic** holds about ₹595cr of cash and treasury investments, so it is cheaper than its P/E suggests. **Elgi**'s EV/EBITDA uses Screener's cash-only net cash of ₹185cr; the company counts ₹680cr including investments, so it is a little cheaper than the table shows. **Kirloskar Oil**'s P/E is on group earnings including its lender; the EV/EBITDA here uses the engine business alone, which is the cleaner view. **Greaves** looks far cheaper on EV/EBITDA than on P/E because scooter losses and depreciation sit between operating profit and earnings. **Powerica**'s net cash will turn into debt as the wind farms draw loans. **Shakti and Oswal** look cheap on both, but their operating profit has not turned into cash.",
                },
                {
                    label: 'Nothing fits today',
                    text: "No company here has a price that asks for about what I expect. The two that did last quarter moved because my estimates fell, not because the shares rose: the research showed Kirloskar Pneumatic's growth running behind its promise and Powerica's profit flattered by a one-off tax credit.",
                },
                {
                    label: 'Full: good businesses a step ahead of their prices',
                    text: "**Powerica** needs about {need:Powerica|16}% a year against my ~13%, the narrowest gap, but its trailing profit includes the ₹51cr tax credit, so the true ask is higher than the table shows. **Kirloskar Pneumatic** needs about {need:Kirloskar Pneumatic|19}% against my ~15%; a first half of ₹750–800cr of sales at about a 19% margin would lift my estimate toward what the price needs. **Kirloskar Brothers** needs about {need:Kirloskar Brothers|20}% against my ~14%, and **Elgi** about {need:Elgi Equipments|22}% against my ~16%. All four are worth owning after a fall or a clear beat.",
                },
                {
                    label: 'Full on a low multiple',
                    text: "**Oswal** needs only about {need:Oswal Pumps|5}% a year, but I expect roughly none: FY27 profit is guided lower, its cash flow is negative and its lender's rating outlook is negative. A low P/E on a falling profit is not cheap.",
                },
                {
                    label: 'Stretched',
                    text: "**Kirloskar Oil** needs about {need:Kirloskar Oil|28}% a year against my ~15%, which means its US$2bn target delivered on time with margins rising while ₹2,100cr of capacity fills. **KSB** needs about {need:KSB|25}% against my ~13%, which prices nuclear billing as if the test bed had never broken. **Greaves** needs about {need:Greaves Cotton|23}% against my ~15%, and depends on the scooter company breaking even. **Shakti** needs about {need:Shakti Pumps|17}% against my ~8%, with its profit down by half in a year.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Kirloskar Pneumatic', rank: 1, stance: 'PRICED', segment: COMP,
            what: "Makes air compressors, refrigeration compressors (for cold storage, dairies, food) and gas compression packages (CNG, oil and gas, biogas), and maintains more than 1,000 CNG stations. It makes its own forgings and castings.",
            view: "**The best-run business in the sector, priced a little ahead of its growth.** Return on capital rose every year from 18% to 30%, it has no debt and about ₹460cr of cash, and material cost fell from 47.6% to 43.9% of sales in Q1. But FY26 sales grew about 8% and Q1 10% against a 20%-plus guide, and management calls FY26's 21% margin an exception. The price needs about {need:Kirloskar Pneumatic|19}% a year against my ~15%.",
            watch: 'H1 sales of ₹750–800cr at about a 19% margin; Middle East package orders restarting; Zephyros repeat orders.',
        },
        {
            company: 'Powerica', rank: 2, stance: 'SCALEUP', segment: ENG,
            what: "Assembles generator sets around Cummins engines for data centres and industry (83% of revenue), and owns 331 MW of wind farms selling power on 25-year contracts, plus wind construction work for others. Listed in April 2026.",
            view: "**Strong orders, thin genset margin, borrowed growth.** Revenue rose 27% in Q1 and the data-centre book reached ₹1,100cr, but the genset margin fell to 5.6% and guidance was withdrawn. Wind earns 48.6% and new turbines 82–83%, yet the next 153 MW costs about ₹1,130cr, 70–75% of it borrowed, and FY26 profit included a ₹51cr tax credit. The price needs about {need:Powerica|16}% a year against my ~13%.",
            watch: 'Genset margin back to 9–10% from Q3; the 100 MW GUVNL wind project on time; Cummins’ choices on data-centre projects.',
        },
        {
            company: 'Elgi Equipments', rank: 3, stance: 'PRICED', segment: COMP,
            what: "Industrial air compressors sold worldwide under its own brand, about half outside India, plus a small automotive-equipment business. India's second-largest compressor maker (about 25% share), competing with Atlas Copco and Ingersoll Rand.",
            view: "**The strongest product moat on the page, at a full price.** Q1 revenue rose 23% (16% without currency), India grew 28% mostly on volume and North America 37% despite tariffs, and it holds ₹680cr of net cash. But Europe still carries ₹386cr of accumulated losses, and a FEMA enquiry and whistle-blower complaints are open. Its FY31 plan implies about 15% a year; the price needs about {need:Elgi Equipments|22}% against my ~16%.",
            watch: 'Margin above 16% as the June price rise lands; Europe staying at breakeven; the FEMA enquiry outcome.',
        },
        {
            company: 'Kirloskar Brothers', rank: 4, stance: 'PRICED', segment: PUMP,
            what: "India's largest pump maker: small pumps for homes and farms, large engineered pumps for power, water, oil and gas and nuclear plants, and packaged cooling and fire systems for US data centres through its SPP subsidiaries.",
            view: "**A qualification moat after a lost year.** FY26 revenue grew 1% and return on capital fell from 28% to 20%, but Q1 revenue rose 12.9%, the Indian parent's margin rose to 13.7% and orders reached ₹4,062cr. SPP UK is loss-making, several subsidiaries carry parent guarantees, and a family arbitration is under way. The price needs about {need:Kirloskar Brothers|20}% a year against my ~14%.",
            watch: 'The US data-centre framework contract signed; SPP UK back to profit; nuclear castings passing qualification.',
        },
        {
            company: 'Kirloskar Oil', rank: 5, stance: 'PRICED', segment: ENG,
            what: "Makes diesel and gas engines and generator sets, runs a wide genset dealer and service network, owns a pumps subsidiary (KOEL Fluid Dynamics) and a lending arm (Arka Fincap) it plans to separate.",
            view: "**Share gains and a big capacity bet, with margins going the wrong way.** Genset volumes rose 41% in FY26, it won a 192 MW hyperscale order and its aftermarket has grown double digits for 12 quarters. But the standalone margin fell to 11.2% as staff costs rose 39%, exports fell 11%, and it is committing ₹2,100cr to new engine capacity. The price needs about {need:Kirloskar Oil|28}% a year against my ~15%.",
            watch: 'Standalone margin back above 13% in H2; HyperNext and NPCIL orders billing; the Arka separation.',
        },
        {
            company: 'KSB', rank: 6, stance: 'PRICED', segment: PUMP,
            what: "Indian arm of Germany's KSB: engineered pumps for power, nuclear, oil and gas; standard pumps for buildings, water and farms (including solar pumps); valves; and a spares and service business. Its financial year is the calendar year.",
            view: "**A nuclear franchise priced as if it were already earning.** It holds ₹1,235cr of nuclear orders in a ₹2,745cr book and returns of 21–25%. But H1 sales grew only 2–3%, NPCIL's test bed failed, solar sold ₹50–60cr in the half against more than ₹300cr planned for the year, and CY25 operating cash halved to ₹93cr. NPCIL is also developing other coolant-pump suppliers. The price needs about {need:KSB|25}% a year against my ~13%.",
            watch: 'The 500-hour coolant-pump test passed; H2 CY26 growth in double digits; receivable days falling from 118.',
        },
        {
            company: 'Greaves Cotton', rank: 7, stance: 'TURNAROUND', segment: ENG,
            what: "Makes small diesel engines (three-wheelers, microcars), gensets, fire-pump and defence engines and cables, and owns most of Greaves Electric Mobility (Ampere scooters) and an EV-finance arm.",
            view: "**A decent core carrying a costly bet.** The core business grew 16% at a 12.6% margin and the parent is debt-free. But ₹331cr more went into the scooter company in Q1, whose loss widened to ₹273cr in FY26 and whose share sale has faded, and customs claims of ₹129cr hang over it. The price needs about {need:Greaves Cotton|23}% a year against my ~15%.",
            watch: 'Scooter losses falling toward break-even in 4–6 quarters; core margin back above 13%; no further capital call.',
        },
        {
            company: 'Shakti Pumps', rank: 8, stance: 'CYCLICAL', segment: SOLAR,
            what: "India's largest solar-pump maker for government schemes (PM-KUSUM and state programmes), with its own motors, controllers and inverters, exports, and new businesses in rooftop solar, EV motors and solar cells and modules.",
            view: "**Volume is booming; profit and cash are not.** Pumps installed rose 58% in Q1, but the margin fell to 9.6%, receivables rose to ₹1,799cr and the order book fell to ₹1,000cr. It is spending ₹1,500–1,700cr on cells and modules, buys from promoter-family firms, and its auditor flagged audit-trail gaps. The price needs about {need:Shakti Pumps|17}% a year against my ~8%.",
            watch: 'PM-KUSUM 2.0 approval and prices; a quarter of falling receivables; the module line running in September.',
        },
        {
            company: 'Oswal Pumps', rank: 9, stance: 'CYCLICAL', segment: SOLAR,
            what: "Solar pumps and motors for state schemes, plus solar modules, and now rooftop solar (PM Surya Ghar) and wires and cables. It listed in 2025.",
            view: "**Cheap on paper, weak in cash and governance.** Q1 revenue fell 8% and margin to 15.7%, customers take 229 days to pay, and net debt doubled to ₹266cr in a quarter. The margin guide was cut 6 points, the CFO left, ICRA moved its outlook to negative, and related-party purchases doubled to ₹132cr. The price needs about {need:Oswal Pumps|5}% a year, but I expect roughly none from today's profit.",
            watch: 'Receivables below 200 days in Q3; Q2 revenue +10–15% as guided; related-party purchases in FY27.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Compressors.** **Kirloskar Pneumatic: follow.** The best returns and balance sheet here, but its growth is running behind its promise; buy on a fall or a strong first half. **Elgi: follow.** The best product and global reach, at a price above even its own five-year plan.",
            "**Engineered pumps.** **Kirloskar Brothers: follow.** Nuclear qualification and US data-centre packages are real, but it must show FY26 was a one-off. **KSB: wait.** The longest nuclear record in India, but every dated promise slipped and cash conversion collapsed.",
            "**Engines and gensets.** **Powerica: follow.** Strong data-centre orders and high-margin wind, but the genset margin is thin and the wind growth is borrowed. **Kirloskar Oil: wait.** The best channel and a real data-centre win, but margins must recover and ₹2,100cr of capacity must fill. **Greaves: pass.** A sound core engine business, but the price includes a scooter company that still loses money.",
            "**Solar pumps.** **Shakti: pass.** Volume is growing, but margins fell by more than half and it is spending heavily on solar cells. **Oswal: pass.** Cheap on a falling profit, with collections, rating and governance all moving the wrong way.",
            "**What would change my view.** A first half of ₹750–800cr of sales at a 19% margin would make Kirloskar Pneumatic an own again; Powerica's genset margin back near 9–10% with the 100 MW wind project on time would do the same for it. NPCIL passing KSB's coolant pump would re-rate KSB and Kirloskar Brothers. PM-KUSUM 2.0 approved at prices above Maharashtra's, with state agencies paying, would lift both solar names quickly. A slowdown in data-centre building, or batteries cutting genset running hours faster than expected, would hurt Kirloskar Oil and Powerica.",
            "**What to watch next quarter.** Kirloskar Pneumatic's Q2 catch-up; Elgi's margin after its price rise; Kirloskar Brothers' US framework deal and SPP UK; KSB's pump test; Kirloskar Oil's standalone margin and capex; Powerica's genset margin and wind loans; Greaves's scooter losses; the KUSUM 2.0 decision and state collections for Shakti and Oswal.",
        ],
        bottomLine:
            "Sort by business, then check the cash and the annual report. Nothing is priced for what I expect today: follow Kirloskar Pneumatic, Powerica, Elgi Equipments and Kirloskar Brothers, good businesses a step ahead of their prices; wait on Kirloskar Oil and KSB until margins and nuclear deliveries catch up; and pass on Greaves Cotton, Shakti Pumps and Oswal Pumps, where losses or unpaid state bills are doing the damage.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KIRLPNU/' },
        { label: 'Investment Tracker: project announcements and capex outlook — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6904' },
        { label: 'India’s data-centre capacity outlook — CareEdge Ratings, Mar 2026', url: 'https://www.careratings.com/uploads/newsfiles/1774529784_India\'s%20Data%20Center%20Capacity.pdf' },
        { label: 'Solar-pump industry report (market size and FY29 forecast) — CRISIL MI&A, Dec 2024', url: 'https://gkenergy.in/wp-content/uploads/2024/12/CRISIL-Research_Industry-report.pdf' },
        { label: 'Engineering exports FY26 — EEPC India', url: 'https://www.eepcindia.org/backend/files/1780320347.pdf' },
        { label: 'PM-KUSUM progress and phase 2 — PIB, Mar 2026', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2237890&reg=3&lang=2' },
        { label: 'Cummins India Q1 FY27 earnings call summary — Cofacto', url: 'https://cofacto.ai/market-news/cumminsind-q1-fy27-earnings-call' },
        { label: 'Copper price — Trading Economics', url: 'https://tradingeconomics.com/commodity/copper' },
        { label: 'IMD revises monsoon forecast to 90% of LPA — Down To Earth', url: 'https://www.downtoearth.org.in/climate-change/imd-revises-monsoon-forecast-to-90-of-lpa-60-chance-of-deficient-rainfall' },
        { label: 'Kirloskar Pneumatic Q1 FY27 earnings presentation', url: 'https://www.kirloskarpneumatic.com/documents/3010307/7918279/Investor+Presentation+Q1+FY27.pdf/1f9950ac-cac1-a7c0-3f65-1f392226b675?t=1784638441869' },
        { label: 'Kirloskar Pneumatic Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/c642badd-e8ed-46dd-b465-9de4fee55579.pdf' },
        { label: 'Kirloskar Pneumatic rating rationale — CRISIL, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/KirloskarPneumaticCompanyLimited_May%2005_%202026_RR_391476.html' },
        { label: 'Elgi Equipments Q1 FY27 analyst presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7f9a307e-052e-44ab-b2ad-d832fac54572.pdf' },
        { label: 'Elgi Equipments Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d5eb5301-4fba-4f7e-a4b6-7d7c9492e87c.pdf' },
        { label: 'Elgi Equipments rating rationale — CRISIL, May 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ElgiEquipmentsLimited_May%2022_%202026_RR_396616.html' },
        { label: 'Kirloskar Brothers Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9fd479cb-c122-45c4-89e5-0d7a30ae00d1.pdf' },
        { label: 'Kirloskar Brothers Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/94732f09-2974-4e5e-9d46-8b7df35439e3.pdf' },
        { label: 'Kirloskar Brothers: Supreme Court arbitration disclosure, Aug 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2e692366-a655-4364-8626-0cdf313415c8.pdf' },
        { label: 'Kirloskar Brothers rating — CARE, Dec 2025', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202512141210_Kirloskar_Brothers_Limited.pdf' },
        { label: 'KSB investor meet transcript, 19 August 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=879b6105-c60c-46fa-bb85-c57e2fa8a435.pdf' },
        { label: 'KSB investor presentation, August 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=aba48fff-60bb-466f-96df-9962fc7ec14f.pdf' },
        { label: 'KSB Annual Report CY2025 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/1ddd85b9-996a-454d-b42d-006e113ac80e.pdf' },
        { label: 'Kirloskar Oil Engines Q1 FY27 earnings presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=cf9b65f3-589a-4498-99d2-7cfa4ecdf82d.pdf' },
        { label: 'Kirloskar Oil Engines Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/31bb8b8e-7ef4-4799-a0ce-7b510f12fc01.pdf' },
        { label: 'Kirloskar Oil Engines rating rationale — CRISIL, Jul 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/KirloskarOilEnginesLimited_July%2017_%202026_RR_396196.html' },
        { label: 'Powerica Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=49250ba5-d18b-4854-b661-0cfb7f7e0b05.pdf' },
        { label: 'Powerica Annual Report FY26', url: 'https://www.powericaltd.com/investor-relations/pdf/annual-report/Annual%20Report%20FY%202025-26.pdf' },
        { label: 'Powerica rating rationale — CRISIL, Nov 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/PowericaLimited_November%2018_%202025_RR_383112.html' },
        { label: 'Greaves Cotton Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=50abfc8f-8df0-4b0b-9434-419e016a3632.pdf' },
        { label: 'Greaves Cotton Annual Report FY26 — NSE', url: 'https://nsearchives.nseindia.com/annual_reports/AR_29689_GREAVESCOT_2025_2026_A_20058179_09072026214057.pdf' },
        { label: 'Shakti Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f9d76706-2e38-4d54-a998-c556b1a602bc.pdf' },
        { label: 'Shakti Pumps Annual Report FY26', url: 'https://shaktipumps.com/wp-content/uploads/2026/07/Shakti-Pumps_AR_2025-26.pdf' },
        { label: 'Oswal Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=59ac28fb-f1b3-418d-8753-61f736b91d76.pdf' },
        { label: 'Oswal Pumps Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachLive/17de7a01-1fda-4ed4-b5c7-6f6c940497d6.pdf' },
        { label: 'Oswal Pumps: ICRA outlook revised to negative, Sep 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3294bd39-b7ee-4a3b-8b57-0c0e04f7987f.pdf' },
        { label: 'India\'s SHANTI Bill completes legislative process — World Nuclear News', url: 'https://www.world-nuclear-news.org/articles/indias-shanti-bill-completes-legislative-process' },
        { label: 'SC makes interim stay absolute in Kirloskar trademark dispute — ANI', url: 'https://www.aninews.in/news/national/general-news/sc-makes-interim-stay-absolute-in-kirloskar-trademark-dispute-seeks-speedy-high-court-decision20260113154703/' },
    ],
};
