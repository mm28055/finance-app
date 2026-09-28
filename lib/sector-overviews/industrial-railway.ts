import { SectorOverview } from './types';
import { industrialRailwayBusinesses } from './industrial-railway-businesses';
import { industrialRailwayValuationInputs } from './card-data/industrial-railway';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const ELEC = 'Traction and safety electronics — approvals that take years';
const FAB = 'Wagons and coaches — fabrication for one big buyer';

export const industrialRailway: SectorOverview = {
    sector: 'Industrial - Railway',
    title: 'Industrial — Railway',
    format: 'ranked',
    businesses: industrialRailwayBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialRailwayValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Concord Control': 25,
            'Hind Rectifiers': 18,
            'MV Electrosystems': null,
            'Titagarh Railsystems': 18,
            'Texmaco Rail': 12,
            'Jupiter Wagons': 12,
        },
    },
    standfirst:
        "Six suppliers to Indian Railways, sitting at very different heights in the same value chain. Bending steel into wagons is a business anyone with a shed and a licence can enter, and the buyer sets the price. Making the propulsion, the safety electronics and the wheels requires approvals that take three to ten years to earn, and those are the only places in this chain where a durable margin can exist. This year the wagon makers are between Railways orders, and the electronics makers are winning orders faster than they collect cash. The annual reports add an auditor's qualification at Texmaco, an internal-controls finding and a restated year at Titagarh, and related-party dealings at three of the six. The question for each company is which layer it is climbing towards, and whether its profit is turning into cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Hind Rectifiers and MV Electrosystems standalone; the rest consolidated.',
            note: 'Concord (SME) reports half-yearly: H1 and H2 FY26 sit in the Q2 and Q4 columns. MV Electrosystems listed recently and is still loss-making as it starts production.',
            values: {
                'Hind Rectifiers': [11, 11, 10, 10, 11],
                'Concord Control': [null, 24, null, 30, null],
                'MV Electrosystems': [-26, null, null, -39, -42],
                'Titagarh Railsystems': [9, 9, 11, 11, 12],
                'Texmaco Rail': [8, 10, 9, 9, 8],
                'Jupiter Wagons': [13, 13, 13, 10, 10],
            },
            cellNotes: {
                'Hind Rectifiers': 'Standalone. The group margin was 3.0% in Q4 FY26 and 5.1% in Q1 FY27 because its French electronics unit, Elventive France (bought October 2025), loses money.',
                'Jupiter Wagons': 'Q4 FY26–Q1 FY27: switching lines to new private wagon designs.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'The wagon makers have shrunk for a year while Indian Railways’ large freight-wagon tender is awaited.',
            values: {
                'Hind Rectifiers': [58, 37, 44, 43, 10],
                'Concord Control': [null, 64, null, 72, null],
                'MV Electrosystems': [null, null, null, null, -5],
                'Titagarh Railsystems': [-25, -24, -8, -13, 13],
                'Texmaco Rail': [-16, -7, -21, -13, -17],
                'Jupiter Wagons': [-48, -22, -14, -25, 46],
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
            note: 'The fabricators earned their best returns in FY24 at the top of the last wagon cycle.',
            values: {
                'Hind Rectifiers': [10, 5, 16, 22, 24],
                'Concord Control': [38, 43, 48, 37, 31],
                'MV Electrosystems': [null, null, 10, 12, -15],
                'Titagarh Railsystems': [9, 18, 25, 14, 11],
                'Texmaco Rail': [6, 6, 11, 14, 11],
                'Jupiter Wagons': [12, 24, 31, 21, 9],
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
            note: 'Railway customers pay in an annual cycle with a heavy fourth quarter, so year-end figures can swing.',
            values: {
                'Hind Rectifiers': [104, 120, 110, 107, 99],
                'Concord Control': [82, 70, 70, 265, 375],
                'MV Electrosystems': [null, 85, 265, 219, 571],
                'Titagarh Railsystems': [81, 60, 75, 99, 113],
                'Texmaco Rail': [131, 152, 98, 117, 133],
                'Jupiter Wagons': [94, 106, 105, 119, 213],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. In this sector a profit is only real once it has been collected. Blank where operating profit was negative.',
            values: {
                'Hind Rectifiers': [157, 220, 76, 51, 88, 89],
                'Concord Control': [50, -25, 41, -24, -90, -46],
                'MV Electrosystems': [null, 50, -83, 71, null, null],
                'Titagarh Railsystems': [33, 16, 19, -29, 97, 27],
                'Texmaco Rail': [19, -71, 36, -10, 93, 24],
                'Jupiter Wagons': [53, 31, -4, 18, 3, 13],
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
            note: 'Only Hind Rectifiers has funded itself over five years; the rest have needed borrowing or new shares.',
            values: {
                'Hind Rectifiers': [4.3, 1.1, 3.9, 2.0, 2.2, 2.6],
                'Concord Control': [3.0, -5.1, 8.3, -7.8, -30.4, -14.5],
                'MV Electrosystems': [null, -10.6, -18.7, 3.9, -155.4, -39.2],
                'Titagarh Railsystems': [-3.2, 0.1, -2.0, -8.6, -1.5, -3.3],
                'Texmaco Rail': [0.6, -7.0, 0.4, -11.4, 4.5, -3.0],
                'Jupiter Wagons': [2.0, 0.2, -4.0, -10.2, -18.0, -7.6],
            },
            cellNotes: {
                'Jupiter Wagons': 'FY25–FY26: wheel plant and battery-storage spending.',
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
            note: 'Below zero means more cash than debt. Blank where operating profit was negative.',
            values: {
                'Hind Rectifiers': [3.2, 6.9, 3.0, 2.3, 2.2],
                'Concord Control': [0.8, -0.1, -1.2, -0.5, 0.6],
                'MV Electrosystems': [null, 3.2, 5.5, 4.6, null],
                'Titagarh Railsystems': [5.3, 1.0, -1.0, 0.5, 0.9],
                'Texmaco Rail': [3.8, 5.7, 0.8, 1.6, 1.7],
                'Jupiter Wagons': [0.6, 0.5, 0.3, -0.2, 1.6],
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
            note: 'Jupiter and Titagarh are investing in wheels, coaches and propulsion to climb out of fabrication.',
            values: {
                'Hind Rectifiers': [5.4, 8.1, 2.7, 3.5, 7.4, 5.5],
                'Concord Control': [3.2, 1.0, 2.4, 2.1, 4.2, 3.0],
                'MV Electrosystems': [null, 15.0, 8.7, 4.0, 37.1, 15.3],
                'Titagarh Railsystems': [6.9, 1.3, 4.3, 6.1, 11.6, 6.0],
                'Texmaco Rail': [0.9, 2.4, 2.3, 10.4, 3.8, 5.0],
                'Jupiter Wagons': [3.1, 3.5, 3.4, 12.8, 18.3, 9.3],
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
            note: 'Higher means more sales from each rupee of plant. Falling figures at the wagon makers reflect lower volumes and new plants.',
            values: {
                'Hind Rectifiers': [7.8, 4.5, 5.8, 6.1, 5.7],
                'Concord Control': [16.0, 24.5, 21.7, 5.4, 4.9],
                'MV Electrosystems': [null, 4.9, 2.1, 2.7, 1.3],
                'Titagarh Railsystems': [1.5, 3.8, 5.2, 3.9, 2.5],
                'Texmaco Rail': [4.7, 5.2, 7.6, 5.1, 4.3],
                'Jupiter Wagons': [2.8, 4.5, 4.4, 4.1, 2.6],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the Q1 FY27 call or presentation ÷ FY26 sales (Screener).',
            note: 'Blank where the company did not state a comparable order book on its latest call.',
            values: {
                'Hind Rectifiers': [null],
                'Concord Control': [3.3],
                'MV Electrosystems': [21.9],
                'Titagarh Railsystems': [null],
                'Texmaco Rail': [null],
                'Jupiter Wagons': [null],
            },
            cellNotes: {
                'MV Electrosystems': '₹1,075cr of propulsion orders against only ₹49cr of FY26 sales: production has barely started.',
                'Concord Control': '₹697cr at March 2026, 3.3 times revenue; it includes Kavach orders held by its 46.5% associate ProGOTA, which will not show up as Concord revenue.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'approval', label: 'Approvals', description: 'RDSO and railway approvals, prototypes and field trials that take three to ten years.' },
            { key: 'design', label: 'Designed into the fleet', description: 'Specified into a locomotive or train type and re-ordered for the life of the fleet.' },
            { key: 'content', label: 'Value per train', description: 'How much of each train’s value it supplies, and whether that is rising.' },
            { key: 'service', label: 'Maintenance and repeat income', description: 'Long maintenance contracts and repeat parts.' },
            { key: 'price', label: 'Pricing power', description: 'A = protected position; D = lowest-bid fabrication to the customer’s drawing.' },
        ],
        rows: [
            { company: 'Hind Rectifiers', trend: 'widening', trendNote: 'Capacity from 60 to 75 transformers a month; first orders for MEMU and Vande Metro content.',
                grades: { approval: { grade: 'A', note: 'Dominant approved traction-transformer supplier' }, design: { grade: 'A', note: 'Specified into locomotive types' }, content: { grade: 'A', note: '₹5.5cr a locomotive to ₹60cr a Vande Metro set' }, service: { grade: 'C', note: 'Little maintenance income yet' }, price: { grade: 'B', note: 'Own copper conductor adds about 2 points' } } },
            { company: 'Concord Control', trend: 'widening', trendNote: 'Kavach 4.0 prototype cleared via ProGOTA; field-trial order held.',
                grades: { approval: { grade: 'B', note: 'Not yet one of the three approved Kavach vendors' }, design: { grade: 'B', note: 'Distributed power and train electronics' }, content: { grade: 'B', note: 'Rising electronics per train' }, service: { grade: 'B', note: 'Annual maintenance contracts' }, price: { grade: 'B', note: '29.5% operating margin' } } },
            { company: 'MV Electrosystems', trend: 'widening', trendNote: 'RDSO-approved propulsion platform; won about a quarter of the last tender.',
                grades: { approval: { grade: 'A', note: 'One of a handful of propulsion designers worldwide' }, design: { grade: 'B', note: 'New to the fleet' }, content: { grade: 'A', note: 'Propulsion is the biggest electronic item' }, service: { grade: 'D', note: 'Nothing installed yet' }, price: { grade: 'C', note: 'Tenders spread across many bidders' } } },
            { company: 'Titagarh Railsystems', trend: 'widening', trendNote: 'Aluminium coach bodies in-house by FY28; Vande Bharat sleeper consortium; wheel venture.',
                grades: { approval: { grade: 'B', note: 'The only Indian maker of aluminium car bodies' }, design: { grade: 'C', note: 'Wagons built to Railways’ drawings' }, content: { grade: 'B', note: 'Moving from wagons to complete trains' }, service: { grade: 'C', note: 'Some metro maintenance' }, price: { grade: 'C', note: 'Wagons by lowest bid' } } },
            { company: 'Texmaco Rail', trend: 'stable', trendNote: '96% of the wagon book private and export; 15-year maintenance on its South African order.',
                grades: { approval: { grade: 'C', note: 'Standard wagon approvals' }, design: { grade: 'C', note: 'Builds to customers’ designs' }, content: { grade: 'C', note: 'Steel fabrication' }, service: { grade: 'B', note: 'Maintenance 30–35% of the South African contract' }, price: { grade: 'C', note: 'Private buyers negotiate hard' } } },
            { company: 'Jupiter Wagons', trend: 'stable', trendNote: 'Building a wheel plant and a battery-storage business at heavy cost.',
                grades: { approval: { grade: 'C', note: 'Standard wagon approvals; brakes via Stone India' }, design: { grade: 'C', note: 'Builds to customers’ designs' }, content: { grade: 'B', note: 'Adding brakes, wheels and axles' }, service: { grade: 'C', note: 'Little' }, price: { grade: 'C', note: 'Lowest-bid fabrication' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**The money in Indian railways is moving from steel to electronics, but nothing here is a buy today.** A freight wagon is about ₹41 lakh of fabricated steel on which the maker earns 5–12% at segment level; the electronics on one new electric locomotive are worth ₹5–5.5cr to a supplier that makes the full propulsion set, a MEMU trainset about ₹15cr and a Vande Metro trainset about ₹60cr, all behind approvals that take years. But the spending is shifting away from trains: the Railways' FY27 capital budget of ₹2,93,030cr is up only about 5%, rolling stock gets ₹52,109cr (+4%), and freight loading grew 1.5% in April–June against a plan of 5.7%. **So this is a year to follow the right companies, not to buy them.**",
                "**Follow Concord Control and Hind Rectifiers.** **Concord** grew FY26 revenue 69% to ₹210cr at a 29.5% operating margin, has a ₹697cr order book, and its price needs about {need:Concord Control|25–26}% a year against my ~25%: the only price here that fits. But its operating cash was −₹55cr, receivables tripled to ₹121cr, sales to related parties rose sixteenfold to ₹10.2cr and ₹13.4cr is owed by companies linked to a director. **Until the profit arrives as cash, it is a small position at most.** **Hind Rectifiers** (now called Hirect) is the dominant maker of locomotive traction transformers and earns about 11% in its Indian business. But its order book fell from ₹1,000cr to ₹740cr in a year, Q1 standalone revenue grew 10% against a 30% promise, the loss-making French unit halved the group margin, and a promoter-group company with the same Elventive name holds warrants and trades with it. I have cut my estimate to ~18%; at about {pe:Hind Rectifiers|107} times earnings its price needs about {need:Hind Rectifiers|34}% a year, which is {label:Hind Rectifiers|stretched}.",
                "**Wait on MV Electrosystems and Titagarh.** **MV** has an approved propulsion system and ₹989cr of orders for 564 sets, but it made no deliveries in July or August, lost ₹12.6cr in FY26, and its auditor warned about its long-term finances before the ₹290cr IPO rescued them. **Titagarh** is the best all-round franchise: passenger trains were 31% of Q1 revenue at a 14.7% segment margin and 78% of its ₹13,335cr order book. But it has cut wagon output to 600–650 a month while the Railways' big tender is awaited, it made 63 coaches in FY26 against 100–120 promised, and its auditor found material weaknesses in the internal controls around its failed Italian unit, Firema, after FY25 profit was restated. The price needs about {need:Titagarh Railsystems|26}% a year against my ~18%.",
                "**Pass on Texmaco and Jupiter**, and hold onto two things. **Texmaco**'s auditor qualified its FY26 accounts because it set aside a ₹700cr ‘provision for contingencies’ straight out of reserves instead of through the profit and loss account, which means future losses charged against it will never show in reported profit. Its Q1 sales fell 17% and profit held up only because of a tax credit. **Jupiter** has a shrinking order book (₹6,304cr to ₹4,550cr in five quarters), doubled debt, a 213-day cash cycle and ₹1,506cr of capex still committed; its price needs about twice my growth estimate. The two things: **Indian Railways is one buyer who publishes the designs, awards by lowest price and keeps several suppliers alive**, so the only lasting edge is an approval that takes years; and **in this sector a profit is only real once it has been collected**.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**. Companies are grouped by layer. All figures are filed (Screener): Hind Rectifiers and MV Electrosystems standalone, the rest consolidated. Concord reports half-yearly and MV listed recently. **Start with cash conversion**: railway customers pay in an annual cycle and several of these companies report profits they have not yet collected. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Every rupee Indian Railways spends on rolling stock passes through five layers. They look similar from outside and are completely different as businesses. **The money is large but no longer growing fast.** The FY27 budget gives the Railways a record ₹2,93,030cr of capital spending, about 5% more than FY26, and ₹1.20 lakh crore of it is earmarked for safety (PIB). Rolling stock gets ₹52,109cr (+4%), while new lines (+20%) and doubling (+30%) take the increases. ICRA warned in April 2025 that budget support had grown only about 2% between FY24 and FY26 after a 130% rise over five years, and expected suppliers' revenue growth to taper. Spending is on pace, at 39% of the year's grant by July (Lok Sabha reply), so the Railways pays its bills. **My view: the next three years will reward suppliers of safety, electronics and passenger trains more than wagon makers, unless the big wagon order is placed.**",
            ],
            points: [
                {
                    label: 'The five layers',
                    text: "**Steel and castings** (bogies, couplers) protect a wagon maker against its suppliers but earn nothing extra. **Wagon and coach fabrication** is cutting and welding to a Railways drawing; the industry can build about 60,000 wagons a year against output of 35,000–40,000 (The Core), so segment margins sit at 5–12%. **Wheels, axles and brakes** are the bottleneck: SAIL's Durgapur plant makes about 40,000 cast wheels a year and forged wheels for Vande Bharat, LHB coaches and metros are mostly imported, which is why FY26 wagon output fell at every listed maker. **Traction and propulsion** is a club of Siemens, Alstom, ABB, Medha and BHEL, now joined by MV Electrosystems and Hind as Indian entrants; approval needs a prototype and a 50,000 km trial. **Safety and signalling** is led by Kavach, the automatic anti-collision system, where more than 15 firms are developing equipment and three are fully approved.",
                },
                {
                    label: 'Where the demand is coming from',
                    text: "**Freight wagons** depend on a second big order. The first, for 1,17,229 wagons placed in 2022, has been delivered; the National Rail Plan envisaged 40,000–46,000 wagons a year from FY26 to FY30, and a ₹40,000cr tender for one lakh wagons was being discussed in May 2026 but had not been issued by August. **Passenger trains** are in an early up-cycle: about 260 Vande Bharat sleeper trainsets are planned (80 of them with Titagarh–BHEL), and India has about 1,143 km of metro with 936 km more under construction. **Electronics** ride about 1,600 electric locomotives a year, a fleet of about 15,000, and 300–500 EMUs tendered a year. **Exports** are small but real: Texmaco's ₹4,100cr South African order and Indian propulsion now shipped to Europe and the US. **My view: passenger trains and electronics have the clearer three-year path; freight is a timing bet on one tender.**",
                },
                {
                    label: 'One buyer, many suppliers',
                    text: "Indian Railways publishes its own designs, awards by lowest price and keeps several suppliers alive on purpose. In the last locomotive-propulsion tender all seven winning bidders got a quantity, and new ‘developmental’ vendors are entitled to about 20% of each tender while they prove themselves. That is a gift to a new entrant such as MV or Hind and a ceiling for an incumbent. The standing risk is insourcing: the Mumbai suburban (MRVC) train tender was cancelled in 2026 and moved to the Railways' own coach factory, ICF. And the customer's priorities shift: Kavach has been commissioned on only 2,633 route km against 21,794 km under way, and received just ₹2,066cr for FY27. **My view: approvals protect a place in the queue, not a price.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Concord** depends on Kavach trials and approval for its associate ProGOTA, on locomotive electronics orders and, above all, on collecting its bills. **Hind Rectifiers** depends on electric-locomotive and trainset production, on converting delayed transformer and propulsion tenders, and on its French unit breaking even. **MV Electrosystems** depends on ramping from zero to 40 propulsion sets a month by January. **Titagarh** depends on its coach ramp, the wagon tender and the wheel plant; **Texmaco** on executing its South African order at a profit and collecting ₹765cr of unbilled infrastructure work; **Jupiter** on the tender and on finishing its Odisha wheel plant on budget. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Layer', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Traction and safety electronics', 'Hind Rectifiers, Concord, MV Electrosystems', '−42% to 30%', '−15% to 31%', '**−46% to 89%**', 'High value per train and years of approvals, but long payment cycles and new plants to fill'],
                        ['Wagons and coaches', 'Titagarh, Texmaco, Jupiter', '8–13%', '9–11%', '**13–27%**', 'Built to the buyer’s drawing with spare capacity; passenger coaches earn a few points more'],
                    ],
                },
                {
                    caption: 'The railway market: size, growth and policy (named sources)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Railway capital spending', '₹2,93,030cr in FY27, about +5%; ₹1.20 lakh crore for safety', '39% spent by July 2026; budget support up only ~2% FY24–FY26', 'PIB Feb 2026; Lok Sabha Aug 2026; ICRA Apr 2025'],
                        ['Rolling stock budget', '₹52,109cr (FY26: ₹50,008cr)', '**+4%**, against +20% for new lines and +30% for doubling', 'Angel One, RailAnalysis, Feb 2026'],
                        ['Freight loading', '1,670m tonnes in FY26 (+3.25%); Apr–Jun 2026 +1.5%', 'Ministry: 1,765m tonnes in FY27 (+5.7%) and 3,000m by 2030, which needs ~15% a year', 'Indian Infrastructure, IBEF, Apr–Jul 2026'],
                        ['Wagons', 'Record 41,929 in FY25; capacity ~60,000 a year', 'National Rail Plan 40,000–46,000 a year FY26–FY30; ₹40,000cr one-lakh tender **not yet issued**', 'Construction World Jan 2026; The Core Feb 2026; Swarajya May 2026'],
                        ['Passenger trains and metros', '~260 Vande Bharat sleeper sets planned; 1,143 km of metro, 936 km building', 'ICICI Securities: ~2,000 km of metro by 2030', 'Channel IAM Sep 2026; Drishti Mar 2026; Business Today Sep 2026'],
                        ['Kavach', '2,633 route km commissioned; 21,794 km under way; ₹3,875cr spent', 'Only ₹2,066cr allocated for FY27', 'Lok Sabha reply, Aug 2026'],
                        ['Locomotive propulsion', '~1,600 electric locomotives a year; ~15,000 in the fleet', 'Open tender for 748 sets at Chittaranjan (CLW)', 'MV Electrosystems Q1 FY27 call'],
                        ['Wheels', '~40,000 cast wheels from SAIL; forged wheels mostly imported', 'Titagarh–Ramkrishna 2,28,000 a year; Jupiter Odisha 1 lakh wheelsets by March 2028', 'The Core Feb 2026; company calls'],
                        ['Steel (main input)', 'Hot-rolled coil ~₹46,000/t (Dec 2025) → ~₹53,800/t (Feb 2026) after a safeguard duty', 'ICRA: range-bound near import parity; steel demand +9–10% in FY27', 'ICRA steel outlook, Feb 2026'],
                    ],
                    note: 'Company figures come from the calls, presentations and annual reports listed under Sources.',
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
                    label: 'Lasting: approvals that cost years, not rupees',
                    text: "A propulsion platform, a Kavach installation, an aluminium car body or a forged wheel each takes three to ten years of prototypes, trials and audits. **MV Electrosystems** finished its 50,000 km trial and got Chittaranjan's clearance in September 2025, and then won about a quarter of the last locomotive-propulsion tender as a newcomer. **Hind Rectifiers** has the largest share of locomotive traction transformers, which are specified into locomotive types and re-ordered for the life of the fleet; it won the lowest bid in a transformer tender helped by its own copper-conductor plant. **Concord**'s associate ProGOTA has cleared the Kavach 4.0 prototype stage as a developmental vendor, and its distributed-power radios already run on Railways' long freight trains. **My view: these edges last because a newcomer cannot buy the years, but none of them sets the price.**",
                },
                {
                    label: 'Lasting: proof that customers come back',
                    text: "The strongest evidence of a moat in a tendered market is a repeat order. **Titagarh**'s first 34 Pune metro trains have come through their defect-liability period and won a 12-train repeat order; it says it is the only Indian maker of both stainless-steel and aluminium metro cars, and it has 150 people in passenger-train design alone. It also holds a 35-year maintenance contract for 80 Vande Bharat sleeper trainsets through a 50:50 venture with BHEL, and a 20-year Railways contract to buy 80,000 wheels a year from its wheel venture. **Texmaco** beat European and Chinese makers for the ₹4,100cr South African order, of which 30–35% is 15 years of maintenance. **My view: maintenance and repeat contracts are where fabrication turns into an annuity, and Titagarh has the most of them.**",
                },
                {
                    label: 'Lasting but capped: the one-buyer market',
                    text: "Even an approved supplier competes with every other approved supplier on price. Hind's management said on its Q1 call that it would rather stay a developmental vendor, guaranteed 20% of each tender, than join six or seven approved sources fighting for the rest; MV said bids in the last tender were ‘very close’ among six or seven suppliers and its prices carry no escalation clause. Concord's 29.5% margin is the best evidence of pricing power here, but it is one year old and its Kavach orders will go to open tenders. **Approvals protect a place, not a price.**",
                },
                {
                    label: 'Barely a moat: wagon fabrication',
                    text: "**Titagarh** holds 32% of the Railways' wagon orders (CRISIL) with capacity for 12,000 a year; **Texmaco** is the largest by capacity at 15,400 a year and claims 40–45% of private demand; **Jupiter**'s wagon book is about 80% private. All three build to the customer's drawing with industry capacity well above demand, so FY26 output fell 20–40% the moment wheels ran short. Their escapes are private and export customers, attached maintenance, and making their own castings, brakes and wheels: Jupiter made 19,939 wheelsets in-house in FY26 and will make all its own freight brakes by end-2026. Private orders are mostly fixed-price, so steel moves hit them directly (CRISIL). **My view: backward integration lowers cost, but does not create pricing power.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Siemens, Alstom, ABB, Medha and BHEL in propulsion; Medha, HBL and Kernex (the three approved Kavach vendors) and a dozen developers; Alstom and BEML in metro cars, and BEML, ICF and Kinet in Vande Bharat sleepers; Braithwaite and smaller wagon yards; SAIL and Chinese and European wheel makers; and above all the Railways' own factories, which took the Mumbai suburban trains back in-house.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The answer differs by layer, and this quarter several reported numbers need adjusting before they can be compared: Texmaco's Q1 profit rose on a tax credit, Hind's included a ₹3.5cr gain from selling a plant, and Titagarh's Q4 passenger margin was flattered by a contract where the client supplies the materials free.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural but young: electronics',
                    text: "**Concord** earned 29.5% in FY26, above its own 20–25% guide, and its margin rose from 25% in H1 to 30% in H2. Management called its guide ‘realistic’ rather than conservative, and Kavach work is guided at 25–30%. **Hind Rectifiers**' Indian business earned 10.6% in Q1, steady for two years, and its copper-conductor plant saved about 2 points of material cost; but the group margin fell to 3.0% in Q4 and 5.1% in Q1 as the French unit's staff costs doubled group employee costs to ₹40.8cr. **MV Electrosystems** lost 42% of sales at operating level in Q1 as it hired ahead of production; its gross margin fell from 47.6% in FY24 to 8.8% in Q1. **My view: electronics margins of 10–30% are real where the plant is full; MV must prove its own at 40 sets a month, and management's ‘10% plus’ profit target has no escalation clause behind it.**",
                },
                {
                    label: 'Cyclical: passenger trains and metros',
                    text: "A metro or Vande Bharat coach carries far more engineering than a wagon, and a metro car is worth about ₹10cr. **Titagarh**'s passenger segment earned 14.7% in Q1, against 18.8% in Q4 and 11.3% a year earlier; management warned in May that Q4 was flattered by the Bangalore contract's free-issue material and that about 15% is the long-run level. On Vande Bharat it takes only about 51% of each car's value because it shares the work with BHEL. **My view: passenger margins are a few points above freight and should stay there, but the swings are contract mix, not pricing power.**",
                },
                {
                    label: 'Not structural: wagon fabrication',
                    text: "**Titagarh**'s freight segment held a 12.2% margin in Q1 even at 43% use of its plant. **Texmaco**'s freight-car margin fell to 5.5% in Q1 from 6.6% a year earlier and 8.6% in Q4 as output halved to 1,054 wagons, and its reported profit rose only because tax was a credit (profit before tax ₹42cr, after tax ₹50cr). **Jupiter** earned 9.7% against 13% a year earlier while switching lines to new private wagon designs, and its subsidiaries lost money at operating level. **My view: these are what a price-taking fabricator earns when volumes fall; the only improvements available are mix, maintenance and captive parts.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Jupiter** tied up ₹1,245cr in working capital, split between customer bills (₹667cr) and stock (₹758cr); its customers now take 95 days to pay, up from 22, and stock jumped from ₹769cr to ₹1,079cr in FY26. **Texmaco** tied up ₹1,140cr, mostly bills (₹858cr), and also carries ₹765cr of unbilled work in its infrastructure divisions that CARE says will now be recovered only ‘in the medium term’. **Titagarh** tied up ₹1,034cr, and its cash cycle stretched from 75 days in FY24 to 113. That is why the wagon makers turned only 13–27% of five years' profit into cash.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Concord**'s customers now take 210 days to pay (from 34 in FY22) and it holds 313 days of stock; receivables rose from ₹37.6cr to ₹121.3cr, more than half a year's revenue, and operating cash was −₹55cr against ₹61cr of operating profit. Management said on the call that ‘there is absolutely no issue in railway payments’ and that the cycle had improved by June, but gave no figure. **MV Electrosystems** holds ₹67.5cr of stock, 1.4 times FY26 revenue (731 days), as it prepares to deliver. **Jupiter**'s cash cycle nearly doubled to 213 days.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Hind Rectifiers** turned 89% of five years' operating profit into cash, and FY26 operating cash of ₹86cr was its best yet. **Titagarh** turned 97% of FY26 operating profit into cash (₹322cr) after a negative FY25. **Texmaco**'s operating cash of ₹363cr and free cash of ₹196cr were its best in a decade, but part of that was customer advances, which rose from ₹52cr to ₹213cr, so it may not repeat.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Railway customers pay reliably but in an annual cycle with a heavy fourth quarter, so year-end days can swing sharply. Propulsion is paid after delivery, and Kavach partly on supply and the rest after installation. Compare each company with its own history, not with the others, and watch whether bills are collected in the first half.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Concord Control', '‘No issue in railway payments’; cycle ‘improved meaningfully’ by June; ₹50cr raised in new shares in January (H2 FY26 call, May)', 'Borrowings ₹54cr (nil a year earlier), about ₹6.3cr of it from its own key managers; net debt ₹37cr'],
                        ['Hind Rectifiers', '₹100cr of new shares sold to Tata Small Cap Fund at ₹920.50; FY27 capex about ₹50cr', 'Borrowings ₹245cr (₹164cr); net debt ₹225cr; CRISIL BBB+'],
                        ['MV Electrosystems', '₹290cr IPO in August; about ₹200cr of working capital needed at full output; recent bills paid in ~15 days', 'Borrowings ~₹50cr before the IPO; net debt ₹55cr (March)'],
                        ['Titagarh Railsystems', 'FY26 ‘free cash flow’ ₹380cr (operating cash before capex); freight working capital to return to ~30 days', 'Net debt ₹306cr (Screener); a ₹504cr undertaking to cover shortfalls on the wheel venture’s loans; CRISIL AA−'],
                        ['Texmaco Rail', 'Net debt ₹444cr and net debt to equity 0.18 (Q4 call); the ₹700cr provision not mentioned on the Q1 call', 'Screener net debt ₹663cr; CARE counts ₹1,515cr of total debt; CARE A'],
                        ['Jupiter Wagons', 'Stock to normalise from Q2; Italian partners’ ₹290cr cuts its own wheel-plant equity to ₹600cr; battery-project funding undecided', 'Borrowings ₹996cr (₹502cr); net debt ₹554cr; ₹1,506cr of capex committed; CRISIL AA−'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Concord reports half-yearly and last spoke in May; MV Electrosystems held its first call as a listed company in August.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May, and my own estimate of earnings growth. Capex matters here more than in most sectors: three of the six are building plants that will not earn until FY28.",
            ],
            points: [
                {
                    label: 'Growth driver: the delayed freight tender',
                    text: "The one-lakh-wagon tender (about ₹40,000cr, or 35,000–40,000 wagons a year for three to four years) was in consultation in May and had not been issued by any of the August calls. Titagarh's management says the need ‘can be deferred… by a few months or a couple of quarters, but not dropped’; Jupiter's had said in May it expected an order within two quarters and in August would say nothing. Freight loading is growing about 1.5–3% a year against a target that needs 15%, which is why the Railways is in no hurry. When it comes, **Titagarh, Texmaco and Jupiter** all have idle capacity: Titagarh ran at 43% in Q1 and Texmaco at about 27%. **My view: a timing question, not a demand question, but I would not pay today for a tender with no date.**",
                },
                {
                    label: 'Growth driver: passenger trains and metros',
                    text: "**Titagarh** is the listed way in: 491 metro cars and 1,280 Vande Bharat cars on order, a passenger order book of ₹10,395cr, and plans to lift coach capacity from 300 to 850 cars a year by FY29–FY30, which management says could mean ₹8,500–9,000cr of revenue (capacity, not a forecast). ICICI Securities expects Titagarh's profit to grow about 52% a year from FY26 to FY29 on this ramp. But the ramp keeps slipping: 12 cars in FY25, 63 in FY26 against 100–120 promised, and 30 in Q1 FY27. The first Vande Bharat sleeper train is due at the end of Q3 or start of Q4 FY27, after the Railways changed the design from 16 to 24 cars. **My view: the demand is contracted; the question is purely execution.**",
                },
                {
                    label: 'Growth driver: electronics per train',
                    text: "More electric locomotives, the shift to trainsets (EMU, MEMU, Vande Bharat, Vande Metro) and Kavach all raise the electronics in the same fleet. **MV Electrosystems** has 564 propulsion sets to deliver and an open Chittaranjan tender for 748 more. **Hind** has its first MEMU and Vande Metro development orders (about ₹120cr) and puts locomotive content at ₹5–5.5cr once it supplies propulsion. **Concord** sees ₹70–80 lakh of its electronics per locomotive today and a Kavach market of about ₹40,000cr to FY30, though Kavach received only ₹2,066cr in the FY27 budget and its field trial and safety approval have slipped about two quarters. **My view: this should run for a decade, but in lumps set by tender dates.**",
                },
                {
                    label: 'Growth driver: import substitution and exports',
                    text: "**Wheels**: Titagarh's 49% venture with Ramkrishna Forgings (about ₹2,000cr, 2,28,000 wheels a year) has a 20-year Railways contract for 80,000 a year and should invoice ‘within this year’; **Jupiter**'s Odisha plant (₹2,600cr on the call, about ₹3,000cr in the annual report) makes axles from March 2027 and wheels from March 2028, with half its output for export through Lucchini. **Exports**: **Texmaco**'s South African order is 2,200 wagons plus 15 years of maintenance, with 50–60% of the wagon value due in FY28. **My view: wheels are the best capex in the sector because the Railways is short of them, but Titagarh's and Jupiter's plants arrive together and could compete for the same buyers.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Concord** promised 40–50% growth and delivered 69% in FY26 at a margin above its guide. **Titagarh**'s passenger revenue tripled to ₹230cr in Q1 and its segment margin landed at the 14–15% it had warned of. **Jupiter**'s Stone India brake unit started production in July, as promised in May.",
                },
                {
                    label: 'Cautious',
                    text: "**Titagarh** deliberately cut wagon output to 600–650 a month against 1,000 of capacity so that its last 5,300 wagons last until a new order. **Hind** kept its 30% target but would not give an order-intake figure or a year-end order book, and now says staying a developmental propulsion vendor is ‘more advantageous’. **Texmaco** refused to give a wagon target: ‘we do not want to value in terms of the quantity’.",
                },
                {
                    label: 'Missed',
                    text: "**Texmaco** promised in May to grow sales and profit in FY27; Q1 sales fell 17% and freight-car output halved, and the promise became 15–20% growth ‘in 1 or 2 years’. **Jupiter** promised FY27 would be ‘much better’; Q1 revenue fell 14% on the quarter and its order book shrank for a fifth quarter. **Hind** grew its Indian business 10% in Q1 against a 30% target, its order book fell to ₹740cr, and its propulsion trial covered 9,000–10,000 km of 50,000 after floods. **MV Electrosystems** made no deliveries in July or August.",
                },
                {
                    label: 'Mixed',
                    text: "**Titagarh**'s coach target of 200 cars is ‘intact’, but 30 in Q1 plus the 45–50 a quarter management guides gives 180, the bottom of its ±10% band; its wheel venture and Falta shipyard each slipped between calls. **MV**'s ₹400cr FY27 target does not add up on its own delivery plan: 70 sets by December and 40 a month from January give about ₹350–360cr. **Jupiter**'s battery-storage goal moved from ₹1,000cr of revenue in three to four years to ₹1,000cr of orders by FY27: a different measure, not a raise.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Concord to grow earnings at about 25% a year, Hind Rectifiers and Titagarh at about 18%, and Texmaco and Jupiter at about 12%; MV is too early to estimate.** I have cut Hind from ~22%: its order book has fallen three quarters running, Q1 missed the pace of its promise by a wide margin, and propulsion is further away than it said in May. Titagarh's and Jupiter's profits start from a depressed FY26, so a tender could lift them faster, but I will not pay for that until it is placed.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Concord Control', 'Locomotive electronics; Kavach via ProGOTA; collecting its bills', '15% / **25%** / 35%'],
                        ['Hind Rectifiers', 'Transformer tenders; trainset content; Elventive France breaking even', '10% / **18%** / 26%'],
                        ['Titagarh Railsystems', 'Coach ramp; wagons when the tender lands; wheel venture', '10% / **18%** / 26%'],
                        ['Texmaco Rail', 'South Africa in FY28; private wagons; infrastructure collections', '5% / **12%** / 20%'],
                        ['Jupiter Wagons', 'Wagons; brakes now; Odisha wheels from FY28', '5% / **12%** / 20%'],
                        ['MV Electrosystems', 'Propulsion ramp to 40 sets a month', 'Loss-making; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Concord Control', 'Revenue +40–50% a year for 3–5 years; margin 20–25%; Kavach trial and safety approval in FY27', 'Small; stakes in associates; ₹50cr of new shares', '**Untested**: no results since May (half-yearly); FY26 beat at +69%; Kavach slipped ~2 quarters'],
                        ['Hind Rectifiers', 'Standalone revenue +30% in FY27; French unit to break even in 3–5 quarters; US$1bn revenue by FY31', '~₹98cr in FY26; ~₹50cr in FY27', '**Missed**: Q1 standalone +10%; order book ₹845cr → ₹740cr; propulsion trial slipped'],
                        ['MV Electrosystems', '₹400cr revenue in FY27; 10 sets in September, 40 a month from January; profitable in 2–3 months', 'Little; second unit built; test rigs by December', '**Untested**: first call; no deliveries in July–August'],
                        ['Titagarh Railsystems', '~200 coaches in FY27 (±10%); wagons 600–650 a month; first Vande Bharat end-Q3/Q4', '~₹367cr in FY26; shipyard ~₹600–610cr; aluminium line by Q1 FY28', '**Slipping**: wagons cut from ‘higher than last year’ to 428 a month; 30 coaches; wheels and shipyard late'],
                        ['Texmaco Rail', 'Growth ‘in 1 or 2 years’ (was FY27); revenue 2x by 2030 at a mid-teens margin', '₹1,500–2,000cr to 2030; ₹167cr in FY26', '**Missed**: Q1 sales −17%; freight-car margin 5.5%; wagon target dropped'],
                        ['Jupiter Wagons', '60–70% of the order book delivered in FY27, with output improving over the next three quarters (May: FY27 ‘much better’); ₹10,000cr revenue by 2030 at 15%+ margin (May)', 'Odisha wheels ₹2,600–3,000cr; ₹533cr in FY26', '**Missed**: Q1 revenue −14% on the quarter; tender line dropped; brakes on time'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; the most important findings came from the annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'One buyer, and its timing',
                    text: "The wagon tender's delay has shrunk **Titagarh, Texmaco and Jupiter** for a year, and none could say in August when it will come. Titagarh has only about 5,300 wagons left to build, all due this year; Jupiter's order book has fallen five quarters running. The customer can also take work in-house, as it did with the Mumbai suburban trains, or simply spend elsewhere: the FY27 budget raised rolling stock 4% and track work 20–30%. **My view: for the fabricators, the tender date matters more than anything management can do.**",
                },
                {
                    label: 'Texmaco: a qualified audit and a ₹700cr reserve',
                    text: "**Texmaco**'s auditor qualified both its standalone and group FY26 accounts. The board created a ₹700cr ‘provision for contingencies’ by moving ₹494cr from general reserve and ₹206cr from retained earnings, without passing it through the profit and loss account; it now sits as a current liability. The board says it covers risks from geopolitics, supply chains, costs and currency that are not tied to any year or contract, and management called it ‘the maximum potential risk under the worst-case scenario’ in May. **Why it matters:** ₹700cr is about 3.6 times FY26 profit; losses charged against it will never appear in reported profit, and any write-back could flatter it. It also cut net worth, lifting CARE's measure of debt to equity from 0.56 to 0.65 times. Neither management nor analysts mentioned it on the Q1 call. **I would not trust Texmaco's reported earnings until each quarter shows whether the provision was used.**",
                },
                {
                    label: 'Titagarh, MV and Concord: other audit findings',
                    text: "**Titagarh**'s auditor found ‘material weaknesses’ in its internal controls for judging impairments, loan-loss allowances and collateral provisions for its Italian associate Firema and a joint venture, although the accounts themselves are unqualified. Firema's audited FY25 loss came in at €104.7m against €16.9m in the management figures first used, so Titagarh restated FY25: standalone profit fell from ₹317cr to ₹90.6cr after ₹270cr of write-offs, and a further ₹64.8cr was booked in FY26. Firema's business went to another buyer in March with nothing for shareholders; management says nothing more is due. **MV Electrosystems**' auditor added an emphasis of matter on unpaid interest to small suppliers and said persistent losses ‘warrant attention’ for its long-term finances, clearing it only because of new equity and bigger bank lines. **Concord**'s group audit fee is ₹4.18 lakh and SME accounts carry no key audit matters, so its accounts get less scrutiny than the others'.",
                },
                {
                    label: 'Related parties',
                    text: "**Concord** sold ₹10.2cr to associates and common-control firms in FY26 (₹0.6cr a year earlier), is owed ₹13.4cr by private companies where a director sits, borrowed about ₹6.3cr from its key managers, and keeps the price it paid for Fusion Electronics confidential; its joint managing director is also its finance chief. **Hind Rectifiers**' promoter-group company Elventive Tech Pvt Ltd, which shares a name with its French subsidiary, holds warrants and trades with it: in H2 FY26 Hind bought ₹11.9cr from it and sold it ₹6.8cr, and also bought ₹16.7cr from Force Motion Technology LLP, another firm its managers influence. **MV Electrosystems** sold ₹13.7cr in FY25, about 22% of revenue, to Quadrant Future Tek, a listed related party. **Jupiter** bought ₹45.3cr of equipment in FY25 from Log9 Material Scientific, a firm it or its managers significantly influence, and its Slovak promoter Tatravagonka is also a customer and partner. **My view: none is illegal, but Concord's rising related sales alongside rising receivables is the one to watch.**",
                },
                {
                    label: 'Contingent liabilities and guarantees',
                    text: "**Titagarh** has ₹187.5cr of tax and legal claims plus an undertaking to cover shortfalls on its wheel venture's loans that rose from ₹170cr to ₹504cr. **Texmaco** has ₹178.5cr of tax litigation (a key audit matter) and ₹765cr of unbilled infrastructure work, with claims in arbitration and a plan to demerge the loss-making rail-infrastructure division. **Jupiter** has ₹54.4cr of tax claims and ₹1,506cr of capex commitments, double a year earlier, and wants to redirect ₹43.6cr of 2023 share-sale money that sat unused for a foundry. **Concord** has given ₹20.9cr of guarantees; Hind's and MV's claims are small.",
                },
                {
                    label: 'Cash, funding and diversification',
                    text: "**Concord** and **MV** have yet to show their profits as cash; MV needs about ₹200cr of working capital, now covered by its IPO. **Hind Rectifiers**' CRISIL rating would be at risk if its operating margin stayed below 8.5–9%; its group margin was 3.0% and 5.1% in the last two quarters, though the Indian business is at 10.6%. **Jupiter** is building wheels, brakes, containers, electric trucks and 15-year battery-storage projects at once, with the funding for the ₹400cr battery project still undecided. **Texmaco** is adding defence, AI services and real estate while earning a 7% return on equity, and **Hind** talks of US$1bn of revenue by FY31, ten times today, partly through acquisitions.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **15% at 23x, 25% at 55–56x, 26% at 58x and 34% at 107x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Texmaco** and **Jupiter** carry the most net debt (₹663cr and ₹554cr), so they are dearer than their P/Es suggest, and Texmaco's ₹700cr reserve-funded provision is a liability the P/E ignores entirely. **Titagarh**'s ₹306cr of net debt is modest, but its ₹504cr undertaking for the wheel venture's loans sits outside it. **Concord**'s ₹37cr of net debt is small, but it appeared only this year as unpaid bills rose. **MV Electrosystems** is loss-making, so neither measure applies yet.",
                },
                {
                    label: 'Fits: the one price that asks for about what I expect',
                    text: "**Concord** needs about {need:Concord Control|25–26}% a year against my ~25%. That is a fair price for a company that has grown 62% a year over three years at a 25–30% margin, **if** its profit turns into cash. It has not yet: operating cash has been negative two years running and its related-party sales and receivables are rising. That is why it is a follow, and a small one, despite the label.",
                },
                {
                    label: 'Full: cheap on paper, discounted for a reason',
                    text: "**Texmaco** needs about {need:Texmaco Rail|15}% a year against my ~12%, the lowest ask in the group. But that ask rests on reported profit, and reported profit is exactly what the auditor's qualification puts in doubt: a ₹700cr provision can absorb future losses without them ever reaching the profit line. Q1 profit was also lifted by a tax credit, and freight-car margin fell to 5.5%. **I would not buy it on the P/E alone.**",
                },
                {
                    label: 'Stretched',
                    text: "**Titagarh** needs about {need:Titagarh Railsystems|26}% a year against my ~18%, and **Jupiter** about {need:Jupiter Wagons|25}% against my ~12%. Both start from depressed FY26 profits, so a large Railways order would close part of the gap quickly, and ICICI Securities' 52%-a-year forecast for Titagarh shows how much the market is already pricing in. But neither can say when the order comes, Titagarh's return on equity is under 7% and Jupiter's about 6%, and both have capex still to spend. **Titagarh is the one I would buy first on a fall or a tender award.** **Hind Rectifiers**, at a market value of about {mcap:Hind Rectifiers|₹4,205cr} and about {pe:Hind Rectifiers|107} times group profit, needs about {need:Hind Rectifiers|34}% a year against my ~18%, the widest gap here. The French unit's losses shrink the group profit, but even on the Indian business alone the price asks for far more than my estimate: it is paying for the US$1bn vision, not for a business whose order book is falling.",
                },
                {
                    label: 'Not measurable on earnings: MV Electrosystems',
                    text: "**MV Electrosystems** lost money in FY26, so it has no P/E. Its market value of about {mcap:MV Electrosystems|₹2,350cr} compares with ₹49cr of FY26 revenue; at management's FY28 run-rate of about ₹70cr of sales a month with a 10% profit margin, the price already assumes the ramp works. **Wait for two quarters of deliveries before paying for it.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Concord Control', rank: 1, stance: 'SCALEUP', segment: ELEC,
            what: "Railway electronics: distributed power control for long freight trains, locomotive displays and diagnostics and, through its 46.5% associate ProGOTA, Kavach anti-collision; makes its own flexible circuit boards. Listed on the BSE SME platform, moving to the main board.",
            view: "**The highest-margin layer, with a cash question.** FY26 revenue rose 69% to ₹210cr at a 29.5% operating margin, return on capital is 31% and the order book is ₹697cr, though part of it sits in the associate. But operating cash was −₹55cr, receivables tripled to ₹121cr, related-party sales rose sixteenfold and ₹13.4cr is owed by director-linked companies. The price needs about {need:Concord Control|25–26}% a year against my ~25%, the only fit in the group.",
            watch: 'H1 FY27 operating cash turning positive; receivable days below 150; the Kavach field trial and safety approval.',
        },
        {
            company: 'Hind Rectifiers', rank: 2, stance: 'SCALEUP', segment: ELEC,
            what: "Traction transformers, converters, motors and propulsion for locomotives and trains, plus industrial rectifiers; renamed Hirect; owns Elventive France, a loss-making electronics maker.",
            view: "**A real franchise going through a soft patch.** It has the largest share of locomotive traction transformers, an Indian business earning 10.6% with a 30% return on equity, and first MEMU and Vande Metro orders. But its order book fell from ₹1,000cr to ₹740cr, Q1 standalone growth was 10% against a 30% target, the French unit cut the group margin to 5.1%, and a promoter-group firm named Elventive Tech trades with it. Its price needs about {need:Hind Rectifiers|34}% a year against my reduced ~18%: {label:Hind Rectifiers|stretched}.",
            watch: 'Order book back above ₹1,000cr; a Q2 standalone quarter above ₹300cr; Elventive France breaking even.',
        },
        {
            company: 'MV Electrosystems', rank: 3, stance: 'SCALEUP', segment: ELEC,
            what: "Indian-designed propulsion systems (traction converters and controls) for 6,000 HP electric locomotives, plus switchgear and cable protection; listed in August 2026.",
            view: "**It has cleared the hardest gate but not yet produced.** An approved propulsion platform, about a quarter of the last tender and ₹989cr of orders for 564 sets, with a ₹290cr IPO to fund the ₹200cr of working capital. But there were no deliveries in July or August, it lost ₹12.6cr in FY26, its auditor warned about its finances before the IPO, and 22% of FY25 sales went to a related party. No growth estimate until it delivers.",
            watch: '10 sets in September and about 70 by December; a first profitable quarter; the 748-set Chittaranjan tender.',
        },
        {
            company: 'Titagarh Railsystems', rank: 4, stance: 'SCALEUP', segment: FAB,
            what: "Wagons, metro and Vande Bharat coaches (including aluminium car bodies), propulsion and castings, a shipyard, and a wheel venture with Ramkrishna Forgings.",
            view: "**The best all-round franchise in the group, priced ahead of itself.** Passenger work is 78% of its ₹13,335cr standalone order book and earned 14.7% in Q1, and it has 32% of the Railways' wagon orders. But wagon output is cut to 600–650 a month, the coach ramp keeps slipping, and its auditor found control weaknesses after FY25 profit was restated over Firema. The price needs about {need:Titagarh Railsystems|26}% a year against my ~18%.",
            watch: 'The wagon tender; 45–50 coaches a quarter; the first Vande Bharat train by Q4 FY27.',
        },
        {
            company: 'Texmaco Rail', rank: 5, stance: 'CYCLICAL', segment: FAB,
            what: "India's largest wagon maker by capacity (15,400 a year), with its own foundry, rail electrification and track work, and joint ventures in brakes, leasing and tank wagons; part of the Adventz group.",
            view: "**A transformed order book, with accounts the auditor would not sign clean.** 96% of its wagon book is private and export, lifting the order book to ₹9,923cr with a ₹4,100cr South African contract. But the auditor qualified FY26 because a ₹700cr provision was taken straight from reserves, Q1 sales fell 17%, freight-car margin fell to 5.5% and profit relied on a tax credit. The price needs about {need:Texmaco Rail|15}% a year against my ~12%, but reported profit is the number in doubt.",
            watch: 'Any use or write-back of the ₹700cr provision; wagons back above 2,000 a quarter; collection of ₹765cr of unbilled work.',
        },
        {
            company: 'Jupiter Wagons', rank: 6, stance: 'CYCLICAL', segment: FAB,
            what: "Wagons (mostly for private buyers), brakes (Stone India), wheels and axles, vehicle bodies and containers, and battery storage; a wheel plant with Lucchini is under construction in Odisha.",
            view: "**The right idea at an uncomfortable cost.** Owning brakes and wheels is the way out of fabrication, and Italy's Lucchini is putting ₹290cr into the wheel business. But the order book has shrunk five quarters to ₹4,550cr, debt doubled to ₹996cr, the cash cycle is 213 days and ₹1,506cr of capex is still committed, with wheels not earning until FY28. The price needs about {need:Jupiter Wagons|25}% a year against my ~12%.",
            watch: 'Q2 wagon output above 1,300; stock falling back from ₹1,079cr; how the battery project is funded.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Traction and safety electronics.** **Concord Control: follow, small.** The best margins and the only price that fits my estimate, but its profit has to arrive as cash and its related-party sales must stop rising before I would own it. **Hind Rectifiers: follow.** A real transformer franchise, but its order book is falling, its French unit drags the group, and its price needs about {need:Hind Rectifiers|34}% a year, far more than my reduced ~18%. **MV Electrosystems: wait.** Approved and funded, but it has to deliver.",
            "**Wagons and coaches.** **Titagarh: wait.** The best franchise and the one to buy first on a fall or a tender award, once the coach ramp holds 45–50 a quarter. **Texmaco: pass.** A transformed order book, but its auditor qualified the accounts over a ₹700cr provision taken from reserves, so its reported profit cannot yet be trusted. **Jupiter: pass.** The right strategy, funded with debt and a shrinking order book at a price that needs twice my estimate.",
            "**What would change my view.** For the better: the one-lakh-wagon tender being issued (Titagarh, Texmaco and Jupiter at once); Concord reporting positive operating cash for H1 FY27; Hind's order book back above ₹1,000cr; MV hitting 40 sets a month; the wheel plants starting on time. For the worse: the Railways moving more work in-house, Kavach prices falling in open tenders, Texmaco drawing on its provision, or a cash squeeze at a company funding a large order book with short-term debt.",
            "**What to watch next quarter.** Concord's H1 cash flow and receivables; Hind's orders and Q2 standalone revenue; MV's September–December deliveries; Titagarh's coach count and the wagon tender; Texmaco's provision and wagon output; Jupiter's stock and battery-project funding.",
        ],
        bottomLine:
            "In railways the money is moving from steel to electronics, and the only durable advantage is an approval that takes years, but nothing here is a buy today. Follow Concord Control and Hind Rectifiers until their profits turn into cash and orders, wait for MV Electrosystems to deliver and for the wagon tender before buying Titagarh Railsystems, and pass on Texmaco Rail, whose auditor qualified its accounts, and Jupiter Wagons at today's prices.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/TITAGARH/consolidated/' },
        { label: 'Union Budget 2026–27: Railways capex and safety allocation — PIB', url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2221838&reg=3&lang=1' },
        { label: 'Railways gets ₹2.93 lakh crore capex, up 5.4% — Angel One', url: 'https://www.angelone.in/news/economy/union-budget-2026-indian-railways-gets-allocated-2-93-lakh-crore-capex-up-5-4' },
        { label: 'Railways utilises ₹1.14 lakh crore, 39% of the year’s grant (Lok Sabha reply) — NewKerala', url: 'https://www.newkerala.com/news/a/indian-railways-utilises-rs-114-lakh-crore-39-737.htm' },
        { label: 'Railway suppliers’ revenue growth to taper (ICRA) — ThePrint', url: 'https://theprint.in/economy/indian-railway-sector-players-revenue-to-grow-at-5pc-in-fy26-wagon-makers-lead-expansion-icra/2591106/' },
        { label: 'Wagon makers face order uncertainty after the first phase — Construction World', url: 'https://www.constructionworld.in/transport-infrastructure/metro-rail-and-railways-infrastructure/wagon-makers-face-order-uncertainty-after-first-phase/85170' },
        { label: 'Railways set to float ₹40,000 crore tender for one lakh wagons — Swarajya', url: 'https://swarajyamag.com/news-brief/indian-railways-set-to-float-rs-40000-crore-wagon-tender-for-one-lakh-units-report' },
        { label: 'Wheelset manufacturing and metro demand — The Core', url: 'https://www.thecore.in/opinion/the-plinth/indian-railways-metro-budget-wheelset-manufacturing-859100' },
        { label: 'Freight loading of 1,670 million tonnes in FY26 — Indian Infrastructure', url: 'https://indianinfrastructure.com/2026/04/06/indian-railways-achieves-freight-loading-of-1670-mt-during-fy-2025-26/' },
        { label: 'Vande Bharat sleeper trainsets by builder — Channel IAM', url: 'https://en.channeliam.com/2026/09/04/vande-bharat-sleeper-trains-trainsets-indian-railways/' },
        { label: 'Titagarh rides the Vande Bharat and metro push (ICICI Securities) — Business Today', url: 'https://www.businesstoday.in/markets/stocks/story/titagarh-rail-systems-rides-on-vande-bharat-metro-push-for-growth-what-else-icici-securities-says-555522-2026-09-15' },
        { label: 'Steel industry trends and outlook — ICRA, Feb 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6790' },
        { label: 'Titagarh Rail Systems Annual Report FY26 (auditor’s internal-controls report, Firema restatement)', url: 'https://www.titagarh.in/storage/report/actual/reg34_1_annual-report.pdf' },
        { label: 'Titagarh Rail Systems investor presentation, Q1 FY27', url: 'https://www.titagarh.in/storage/report/actual/investor-presentation-q1-and-fy27.pdf' },
        { label: 'Titagarh Rail Systems rating rationale — CRISIL, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/TitagarhRailSystemsLimited_March%2030_%202026_RR_389768.html' },
        { label: 'Texmaco Rail Annual Report FY26 (qualified opinion, ₹700cr provision)', url: 'https://www.texmaco.in/wp-content/uploads/2026/08/Annual-Report-2025-26.pdf' },
        { label: 'Texmaco Rail rating rationale — CARE, Jul 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202607150702_Texmaco_Rail_&_Engineering_Limited.pdf' },
        { label: 'Jupiter Wagons Annual Report FY26', url: 'https://jupiterwagons.com/wp-content/uploads/2026/09/Annual-Report-FY-2025-26.pdf' },
        { label: 'Jupiter Wagons investor presentation, Q1 FY27', url: 'https://jupiterwagons.com/wp-content/uploads/2026/08/Investor-Presentation-on-the-results-for-the-Q1-FY-2026-27-Dated-14.08.2026.pdf' },
        { label: 'Jupiter Wagons rating rationale — CRISIL, Apr 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/JupiterWagonsLimited_April%2016_%202026_RR_391449.html' },
        { label: 'Hirect (Hind Rectifiers) Annual Report FY26', url: 'https://hirect.com/wp-content/uploads/2026/07/Annual-Report-2025-26.pdf' },
        { label: 'Hirect Q1 FY27 earnings call transcript', url: 'https://hirect.com/wp-content/uploads/2026/08/Transcript-Q1FY27.pdf' },
        { label: 'Hirect related-party transactions, H2 FY26', url: 'https://hirect.com/wp-content/uploads/2026/05/RPT-31032026.pdf' },
        { label: 'Concord Control Systems Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0e6d76c4-2fd3-4c34-8408-c2d48a65cf4f.pdf' },
        { label: 'Concord Control Systems H2 FY26 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6005e704-4b3a-47b0-80cb-79736685a842.pdf' },
        { label: 'MV Electrosystems Annual Report FY26 (auditor’s remarks) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=13dbafbb-2c39-4458-a863-ad1ae88ad1c8.pdf' },
        { label: 'MV Electrosystems Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0fb1f5a9-24b6-4954-b7e8-9b2e4ba6483e.pdf' },
        { label: 'Kavach: approved vendors and programme scope — Wikipedia', url: 'https://en.wikipedia.org/wiki/Kavach_(train_protection_system)' },
        { label: 'Titagarh Rail holds wagon output at 600-650 monthly — Railway Supply', url: 'https://www.railway.supply/titagarh-deliberately-caps-wagon-output-at-650/' },
    ],
};
