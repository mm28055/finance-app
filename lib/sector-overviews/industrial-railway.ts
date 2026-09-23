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
            'Hind Rectifiers': 22,
            'Concord Control': 25,
            'MV Electrosystems': null,
            'Titagarh Railsystems': 18,
            'Texmaco Rail': 12,
            'Jupiter Wagons': 12,
        },
    },
    standfirst:
        "Six suppliers to Indian Railways, sitting at very different heights in the same value chain. Bending steel into wagons is a business anyone with a shed and a licence can enter, and the buyer sets the price. Making the propulsion, the safety electronics and the wheels requires approvals that take three to ten years to earn, and those are the only places in this chain where a durable margin can exist. The question for each company is not how fast it is growing but which layer it is climbing towards. Every chart uses filed results and five years of history.",
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
                'Hind Rectifiers': 'Standalone. The group margin is lower (about 5% in Q1) because its French electronics acquisition, Elventer, loses money.',
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
                'Concord Control': '₹697cr, 3.3 times revenue.',
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
                "**The money in Indian railways is moving from steel to electronics, and the portfolio should follow it.** A freight wagon is about ₹41 lakh of fabricated steel on which a maker earns 10–13%; the electronics on a single new locomotive are worth ₹5.5cr to its supplier at roughly twice that margin, a MEMU motor coach ₹15cr, and a Vande Metro trainset about ₹60cr, all behind a qualification wall that takes years to climb.",
                "**Hind Rectifiers is the clearest way to own that shift; follow it.** It is the dominant supplier of traction transformers, the heavy, safety-critical heart of an electric locomotive, and is climbing into converters and propulsion. Its risks are a loss-making French acquisition and flat order intake, not its position. **This site's market data for Hind is wrong** (about 100 times too large), so it is left out of the live valuation table; on the exchange price, it needs more growth than I expect. **Concord Control** owns the fastest-growing slice (train-safety electronics) and earns 30% on capital at a price that fits my estimate, but it has not yet shown that its profit turns into cash: follow it, small.",
                "**Titagarh is the best all-round franchise and the one to buy when the delayed wagon tender lands; wait for now.** It is the only Indian company making aluminium coach bodies, plus wagons, propulsion and a wheel venture, but its price already needs more growth than a wagon business on hold can deliver. **MV Electrosystems** has cleared the hardest gate (an approved propulsion platform) but has barely started production: wait for deliveries.",
                "**Two things to hold onto before reading the rest.** First, **Indian Railways is one buyer who publishes the designs, awards by lowest price and deliberately keeps several suppliers alive**, so nobody is squeezed out and nobody earns monopoly margins; the only durable advantage is an approval that takes years. Second, **in this sector a profit is only real once it has been collected**. I would **pass on Texmaco and Jupiter**: competent companies in the weakest layer, both waiting on a tender, and Texmaco still has an unexplained ₹700cr provision.",
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
                "Every rupee Indian Railways spends on rolling stock passes through five layers. They look similar from outside and are completely different as businesses.",
            ],
            points: [
                {
                    label: 'The five layers',
                    text: "**Steel and castings** (bogies, couplers): protects against suppliers but earns nothing extra. **Wagon and coach fabrication**: cutting and welding to a Railways drawing, with far more capacity than tenders, so margins cap at 10–13%. **Wheels, axles and brakes**: India imports almost all coach wheels; two new consortiums (Titagarh with Ramkrishna Forgings, Jupiter with Lucchini) are fixing that. **Traction and propulsion**: only nine or ten companies worldwide design propulsion; approval needs a prototype and a 50,000 km trial. **Safety and signalling**: Kavach anti-collision, where only three companies are fully approved against a ₹25,000–30,000cr programme.",
                },
                {
                    label: 'Where the demand is coming from',
                    text: "**Freight wagons**: Indian Railways is expected to tender about 1 lakh wagons (roughly ₹40,000cr), and the freight target is 3 billion tonnes against about 1.5 billion today. **Electrification and modern trains**: more electric locomotives, EMU, MEMU, Vande Bharat and Vande Metro trainsets, Kavach across 35,000 km and refurbishment of about 25,000 coaches. **Exports**: Texmaco's ₹4,100cr South African order is the model.",
                },
                {
                    label: 'One buyer, many suppliers',
                    text: "Indian Railways publishes its own designs, awards by lowest price and keeps several suppliers alive on purpose: in MV Electrosystems' last propulsion tender even the seventh-lowest bidder got a quantity. That is a gift to a new entrant and a ceiling for an incumbent. The standing risk is that the customer decides to make it itself, as it did when the Mumbai suburban tender was cancelled and moved to its own coach factory.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Hind Rectifiers** depends on electric-locomotive and trainset production and on getting its propulsion approved. **Concord** depends on Kavach approval for its partner ProGOTA and on collecting its bills. **MV Electrosystems** depends on ramping production on schedule. **Titagarh, Texmaco and Jupiter** depend on the big wagon tender, on passenger trains and exports, and on their new wheel and component plants. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Layer', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Traction and safety electronics', 'Hind Rectifiers, Concord, MV Electrosystems', '−42% to 30%', '−15% to 31%', '**−46% to 89%**'],
                        ['Wagons and coaches', 'Titagarh, Texmaco, Jupiter', '8–13%', '9–11%', '**13–27%**'],
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
                    label: 'Lasting: approvals that cost years, not rupees',
                    text: "A propulsion platform, a Kavach installation, an aluminium car body or a forged wheel each takes three to ten years of prototypes, trials and audits. **Hind Rectifiers**' traction transformers are specified into locomotive types and re-ordered for the life of the fleet; **MV Electrosystems** has an approved propulsion platform; **Titagarh** is the only Indian maker of aluminium car bodies. These edges last because a newcomer cannot buy the years.",
                },
                {
                    label: 'Lasting but capped: the monopsony',
                    text: "Even an approved supplier competes with every other approved supplier on price, and a developmental vendor gets about 20% of each tender almost by policy. Hind's management said it would rather stay a developmental vendor at 20% than join six or seven approved sources fighting for the rest. **Approvals protect a place, not a price.** As Kavach moves from nominated trials to open tenders, prices are likely to fall, as they did in smart meters.",
                },
                {
                    label: 'Barely a moat: wagon fabrication',
                    text: "**Texmaco** (about 30% share), **Titagarh** (25%) and **Jupiter** build wagons to the customer's drawing, with industry capacity far above normal tender flow. Their only escapes are private and export customers, attached maintenance, and making their own castings, brakes and wheels, which Texmaco and Jupiter are both pursuing.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Siemens, Alstom, ABB, Medha and BHEL in propulsion; Medha, HBL and Kernex (the three approved Kavach vendors); Braithwaite and smaller wagon yards; Chinese and European wheel makers; and the Railways' own factories.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The answer differs by layer.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural and rising: electronics',
                    text: "**Concord** earned 29.5% in FY26 and guides 22–25%; **Hind Rectifiers** earns about 11% standalone, held down by its French unit rather than its core. The driver is content per train: the same number of trains produces several times the revenue for an electronics supplier over the next decade. **I expect these margins to hold**, with the risk that open Kavach tenders cut prices.",
                },
                {
                    label: 'Better but lumpy: passenger trains and metros',
                    text: "A metro or Vande Bharat coach carries far more engineering than a wagon. **Titagarh** guides about 200 coaches this year against 63 in FY26, and its Vande Bharat sleeper consortium with BHEL gives it about half the value of each car. The economics improve with each step from steel box to complete train.",
                },
                {
                    label: 'Not structural: wagon fabrication',
                    text: "**Jupiter** earned 9.7% in Q1 against 12.4% in FY26 while switching lines; **Texmaco**'s margin held near 8–10% as volumes halved. These are what a price-taking fabricator earns when volumes fall, not the result of poor management. The only improvements available are mix, maintenance and captive parts.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Jupiter** tied up ₹1,245cr in working capital, split between customer bills (₹667cr) and stock (₹758cr); its customers now take 95 days to pay, up from 22. **Texmaco** tied up ₹1,140cr, mostly bills (₹858cr). **Titagarh** tied up ₹1,034cr. That is why the wagon makers turned only 13–27% of five years' profit into cash.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Concord**'s customers now take 210 days to pay (from 34) and it holds 313 days of stock (from 95); an investor pointed out on its call that most of its reported profit had not been collected. **MV Electrosystems** holds 731 days of stock as it prepares to deliver. **Jupiter**'s stock doubled to 188 days.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Hind Rectifiers** turned 89% of five years' operating profit into cash, and its stock fell from 121 to 69 days. **Titagarh** turned almost all of its FY26 profit into cash (97%) after a negative FY25.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Railway customers pay in an annual cycle with a heavy fourth quarter, so year-end days can swing sharply; compare each company with its own history, not with the others. Watch whether bills are collected in the first half.",
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
                    label: 'Growth driver: the delayed freight tender',
                    text: "Indian Railways is expected to tender about 1 lakh wagons, and it has not appeared. It will come, because the freight target doubles today's tonnage, and when it does **Titagarh, Jupiter and Texmaco** all have idle capacity to fill at once. This is a timing question, not a demand question, so the wagon makers are worth owning at the right price rather than at the right moment.",
                },
                {
                    label: 'Growth driver: electronics per train',
                    text: "More electric locomotives, the shift to trainsets (EMU, MEMU, Vande Bharat, Vande Metro), Kavach across 35,000 km and refurbishment of older coaches all raise the electronics in the same fleet. **Hind Rectifiers**, **Concord** and **MV Electrosystems** benefit directly, and **Titagarh** through its propulsion and coach lines. This should run for a decade.",
                },
                {
                    label: 'Growth driver: import substitution and exports',
                    text: "Wheels (**Titagarh** with a 20-year Railways contract, **Jupiter** with a ₹2,600cr plant), propulsion (**Hind**, **MV**) and wagons sold abroad (**Texmaco**'s South African and Cameroon orders). Exports are the only escape from the one-buyer market, and Texmaco is furthest down that road.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Hind Rectifiers** grew 37–58% a quarter for most of FY26 and is adding capacity. **Concord** grew 64–72% by half-year. **Titagarh** returned to growth in Q1 as coach deliveries rose.",
                },
                {
                    label: 'Cautious',
                    text: "**Titagarh** is deliberately running wagon lines at 600–650 a month against 1,000 of capacity to make its backlog last. **Hind** would not quantify its backlog after flat order intake.",
                },
                {
                    label: 'Missed',
                    text: "**Texmaco**'s wagon output halved on component shortages and its revenue has fallen for five quarters. **MV Electrosystems** made no deliveries in July or August against a ₹400cr revenue target.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Jupiter**'s battery-storage business will not make an operating profit before FY28 and its funding is undecided. **Texmaco** did not discuss its roughly ₹700cr provision and auditor qualification from Q4. How many years of work Concord and MV have booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
                {
                    label: 'My outlook',
                    text: "Railway spending is large and durable, but the timing of the wagon tender decides the fabricators' next two years. **I expect the electronics suppliers to compound at 20–25% as content per train rises, and the wagon makers to swing with tenders around low-teens growth.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Hind Rectifiers', 'Content per train; propulsion approval; Elventer breakeven', '15% / **22%** / 30%'],
                        ['Concord Control', 'Kavach via ProGOTA; distributed power; own electronics', '15% / **25%** / 35%'],
                        ['Titagarh Railsystems', 'Coaches, metros, wagons when the tender lands', '10% / **18%** / 26%'],
                        ['Texmaco Rail', 'Private and export wagons; maintenance', '5% / **12%** / 20%'],
                        ['Jupiter Wagons', 'Wagons; wheels and brakes later', '5% / **12%** / 20%'],
                        ['MV Electrosystems', 'Propulsion production ramp', 'Loss-making; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8 (Hind Rectifiers is left out; see there).',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into four groups. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'One buyer, and its timing',
                    text: "The wagon tender's delay has shrunk **Titagarh, Texmaco and Jupiter** for a year; none of them could say when it will come. The customer can also take work in-house, as it did with the Mumbai suburban trains.",
                },
                {
                    label: 'Cash before profit',
                    text: "**Concord**'s receivables and short-term debt jumped at the year end and management would not give a peak-debt figure, saying 'it is just the cycle'. **MV Electrosystems** needs about ₹200cr of working capital to run at ₹1,000cr of sales. Investors on Concord's call named Kernex and Ircon as cautionary examples of order books without cash.",
                },
                {
                    label: 'Expensive diversification',
                    text: "**Jupiter** is spending on a ₹2,600cr wheel plant and a battery-storage business that needs build-own-operate funding still undecided. **Hind Rectifiers**' French unit must reach breakeven in three to five quarters, and its '$1bn in five years' goal is not supported by railway demand alone.",
                },
                {
                    label: 'Governance and disclosure',
                    text: "**Texmaco** has a roughly ₹700cr provision with an auditor qualification from Q4 that was not discussed on its latest call. **Concord**'s disclosure is thin. And for investors on this site: **Hind Rectifiers' market data here is wrong**, so its live multiples cannot be used.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **15% at 23x, 25% at 55–56x, 26% at 58x and 30% at 74x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Hind Rectifiers is left out of the live table** because this site's market value for it is wrong; on Screener's figures its price needs about 30% growth a year, more than I expect.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Texmaco** and **Jupiter** carry net debt, so they are a little dearer than their P/E suggests; Texmaco still looks cheapest on both measures, for reasons set out in section 7. **MV Electrosystems** is loss-making, so neither measure applies yet.",
                },
                {
                    label: 'Reasonable',
                    text: "**Concord**: the price roughly matches the growth I expect, if its profit turns into cash.",
                },
                {
                    label: 'Full',
                    text: "**Texmaco**: cheap on the numbers, but not until the provision is explained.",
                },
                {
                    label: 'Stretched',
                    text: "**Titagarh** and **Jupiter**: prices that need 25%-plus growth a year from businesses waiting on a tender.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Hind Rectifiers', rank: 1, stance: 'SCALEUP', segment: ELEC,
            what: "Traction transformers, converters and power electronics for locomotives and trains, plus industrial rectifiers; owns Elventer, a French electronics maker.",
            view: "**The strongest position in this group.** A dominant share of locomotive traction transformers, capacity rising from 60 to 75 a month, a captive copper-conductor plant, and rising content per train. But order intake was flat, the French unit drags the group margin, and propulsion is only 9–10,000 km into a 50,000 km trial. This site's price data for it is wrong; on the exchange price it needs more than my ~22% estimate.",
            watch: 'Order intake; Elventer reaching breakeven; the propulsion field trial.',
        },
        {
            company: 'Concord Control', rank: 2, stance: 'SCALEUP', segment: ELEC,
            what: "Railway electronics: distributed power control for long freight trains, train diagnostics and, through its 46.5% stake in ProGOTA, Kavach anti-collision; makes its own flexible circuit boards.",
            view: "**The highest-margin layer, with a cash question.** A 29.5% operating margin, 30% return on capital and a ₹697cr order book, plus a path into Kavach if ProGOTA is approved. But receivables and short-term debt jumped at the year end and operating cash has been negative. The price roughly matches my ~25% estimate.",
            watch: 'Cash collected in H1; ProGOTA joining the approved Kavach vendors; peak debt.',
        },
        {
            company: 'MV Electrosystems', rank: 3, stance: 'SCALEUP', segment: ELEC,
            what: "Indian-designed propulsion systems (traction converters and controls) for electric trains and locomotives; newly listed.",
            view: "**It has cleared the hardest gate but not yet produced.** An approved propulsion platform, one of a handful worldwide, and about a quarter of the last tender for a ₹1,075cr order book. But there were no deliveries in July or August, it is loss-making, and it needs about ₹200cr of working capital. No growth estimate until it delivers.",
            watch: 'Monthly deliveries against the plan; working-capital funding; the EMU platform approval.',
        },
        {
            company: 'Titagarh Railsystems', rank: 4, stance: 'SCALEUP', segment: FAB,
            what: "Wagons, passenger coaches and metro trains (including aluminium car bodies), propulsion, and a wheel venture with Ramkrishna Forgings.",
            view: "**The best all-round franchise in the group.** The only Indian maker of aluminium car bodies, about 200 coaches planned this year against 63 last, metro orders and half the car value in the Vande Bharat sleeper consortium. But wagon lines are throttled while the tender is awaited, and the price needs more than my ~18% estimate.",
            watch: 'The wagon tender; coach deliveries; the wheel venture.',
        },
        {
            company: 'Texmaco Rail', rank: 5, stance: 'CYCLICAL', segment: FAB,
            what: "India's largest wagon maker (about 30% share), with its own foundry, rail electrification and track work, and joint ventures in brakes, leasing and tank wagons.",
            view: "**The smartest wagon maker, with a question to answer.** 96% of its wagon book is private and export, including a ₹4,100cr South African order with 15 years of maintenance. But output halved on component shortages, revenue has fallen for five quarters, and a roughly ₹700cr provision with an auditor qualification has not been explained. The price needs a little more than my ~12% estimate.",
            watch: 'An explanation of the ₹700cr provision; wagon output; export orders.',
        },
        {
            company: 'Jupiter Wagons', rank: 6, stance: 'CYCLICAL', segment: FAB,
            what: "Wagons, brakes (Stone India), and a wheel and axle plant with Lucchini under construction, plus a battery-storage business.",
            view: "**The right idea at an uncomfortable cost.** Owning brakes, wheels and axles is the way out of fabrication, but the wheel plant costs ₹2,600cr, battery storage will not make an operating profit before FY28, and five-year cash conversion is 13%. The price needs about twice my ~12% estimate.",
            watch: 'Wagon margins until the tender; the wheel plant’s budget; battery-storage funding.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Traction and safety electronics.** **Hind Rectifiers: follow.** The clearest way to own the shift to electronics, but check its price on the exchange (this site's data is wrong) and wait for its French unit to break even. **Concord Control: follow, small.** The best margins and a Kavach option, but profit has to turn into cash first. **MV Electrosystems: wait.** Approved, but it has to deliver.",
            "**Wagons and coaches.** **Titagarh: wait.** The best franchise; buy it when the wagon tender lands or the price falls. **Texmaco: pass.** Smart mix, but an unexplained provision. **Jupiter: pass.** The right strategy, funded at too high a cost for its price.",
            "**What would change my view.** The 1 lakh wagon tender being issued (Titagarh, Texmaco, Jupiter at once); Hind completing its propulsion trial; ProGOTA joining the approved Kavach list and Concord collecting its bills; the wheel plants starting on time. For the worse: the Railways moving work in-house, Kavach prices falling in open tenders, or a cash squeeze at a company funding a large order book with short-term debt.",
            "**What to watch next quarter.** Hind's order intake; Concord's collections; MV's deliveries; the wagon tender; Texmaco's provision; Jupiter's wheel plant.",
        ],
        bottomLine:
            "In railways the money is moving from steel to electronics, and the only durable advantage is an approval that takes years. Follow Hind Rectifiers and Concord Control, wait for MV Electrosystems to deliver and for the wagon tender before buying Titagarh Railsystems, and pass on Texmaco Rail and Jupiter Wagons at today's prices.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/TITAGARH/consolidated/' },
        { label: 'Titagarh Rail holds wagon output at 600-650 monthly — Railway Supply', url: 'https://www.railway.supply/titagarh-deliberately-caps-wagon-output-at-650/' },
        { label: 'Indian Railways plans ₹40,000 crore tender for 1 lakh freight wagons — Trak.in', url: 'https://trak.in/stories/indian-railways-plans-rs-40000-crore-mega-tender-for-1-lakh-freight-wagons/' },
        { label: 'Titagarh Rail vs Texmaco Rail: wagon market shares and capacity — Trade Brains', url: 'https://tradebrains.in/titagarh-rail-vs-texmaco-rail-who-dominates-the-wagons-market/' },
        { label: 'Kavach: approved vendors and programme scope — Wikipedia', url: 'https://en.wikipedia.org/wiki/Kavach_(train_protection_system)' },
        { label: 'Kavach 4.0 rollout delayed by slow vendor approvals — Swarajya', url: 'https://swarajyamag.com/news-brief/kavach-40-rollout-delayed-due-to-slow-vendor-approvals-indian-railways-extends-deadline-to-december-2025' },
    ],
};
