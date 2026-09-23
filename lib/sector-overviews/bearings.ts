import { SectorOverview } from './types';
import { bearingsBusinesses } from './bearings-businesses';
import { bearingsValuationInputs } from './card-data/bearings';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const OWN = 'Indian-owned: own designs and positions';
const MNC = 'Multinational subsidiaries: parent’s designs and catalogue';

export const bearings: SectorOverview = {
    sector: 'Bearings',
    title: 'Bearings',
    format: 'ranked',
    businesses: bearingsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: bearingsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'NRB Bearing': 17,
            'Harsha Engineers Int': 16,
            'SKF India (Industrial)': 14,
            'Timken India': 15,
            'SKF India': 14,
        },
    },
    standfirst:
        "Five companies in a genuinely good industry. A bearing is a few hundred rupees of steel that, if it fails, stops a locomotive, a gearbox or a production line, so it is designed in years ahead, validated for the life of the programme and re-ordered without a tender. The catch is that three of these five are the Indian arms of foreign parents who own the designs, allocate export volumes and decide which businesses sit inside the listed company. Knowing whose moat you are actually buying is the whole exercise. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Timken and SKF India (Industrial) standalone; the rest consolidated.',
            note: 'Operating margin excludes other income. A bearing maker’s margin is mostly a statement about its mix: sales through distributors earn far more than sales to vehicle and machine makers.',
            values: {
                'NRB Bearing': [16, 17, 18, 18, 17],
                'Harsha Engineers Int': [15, 14, 14, 15, 15],
                'SKF India (Industrial)': [11, 13, 12, 9, 9],
                'Timken India': [18, 18, 13, 22, 19],
                'SKF India': [13, 13, 14, 6, 15],
            },
            cellNotes: {
                'SKF India': 'Q4 FY26 includes demerger costs; Q1 FY27 gross margin was partly helped by revaluing stock (company).',
                'SKF India (Industrial)': 'Management has guided a committed margin band of 14–16% on its own measure.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'SKF India’s falls from Q3 FY26 are the demerger of its industrial business, not lost sales; SKF India (Industrial) has filed separately only since then.',
            values: {
                'NRB Bearing': [7, 8, 18, 13, 19],
                'Harsha Engineers Int': [6, 7, 21, 27, 25],
                'SKF India (Industrial)': [null, null, null, 31, 18],
                'Timken India': [3, 3, 14, 14, 15],
                'SKF India': [6, 5, -54, -51, -54],
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
            note: 'SKF India’s history includes the industrial business until FY26.',
            values: {
                'NRB Bearing': [15, 16, 15, 16, 18],
                'Harsha Engineers Int': [18, 17, 12, 12, 13],
                'SKF India (Industrial)': [null, null, null, null, 30],
                'Timken India': [29, 28, 23, 21, 18],
                'SKF India': [31, 34, 29, 29, 24],
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
            note: 'NRB holds a lot of stock because it makes thousands of part numbers for export customers; SKF runs short because its distributors pay quickly.',
            values: {
                'NRB Bearing': [275, 292, 338, 332, 281],
                'Harsha Engineers Int': [173, 204, 187, 166, 171],
                'SKF India (Industrial)': [null, null, null, 329, 56],
                'Timken India': [160, 124, 142, 129, 116],
                'SKF India': [96, 69, 56, 88, 33],
            },
            cellNotes: {
                'SKF India (Industrial)': 'FY25 is a carve-out year and not comparable.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Everyone here dipped in FY22 as steel prices and stock rose.',
            values: {
                'NRB Bearing': [11, 35, 65, 42, 104, 56],
                'Harsha Engineers Int': [21, 72, 80, 118, 28, 62],
                'SKF India (Industrial)': [null, null, null, -11, 42, 26],
                'Timken India': [6, 61, 59, 65, 71, 54],
                'SKF India': [10, 92, 87, 27, 81, 60],
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
            note: 'Everyone here funds itself; nobody burns cash over five years. Timken’s and SKF Industrial’s new plants will weigh on this over the next two years.',
            values: {
                'NRB Bearing': [-1.5, 1.9, 6.0, 0.2, 10.2, 3.7],
                'Harsha Engineers Int': [-1.1, 4.6, 4.4, -0.2, -3.2, 0.8],
                'SKF India (Industrial)': [null, null, null, -3.9, 2.0, 1.0],
                'Timken India': [-2.1, 9.9, 2.7, 0.3, 4.1, 3.2],
                'SKF India': [-1.0, 13.5, 10.8, 1.5, 3.6, 5.9],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Timken, both SKFs and Harsha.',
            note: 'Below zero means more cash than debt. This is a cash-rich sector; only NRB carries modest net debt.',
            values: {
                'NRB Bearing': [1.6, 1.4, 0.4, 0.7, 0.5],
                'Harsha Engineers Int': [2.0, -0.8, -1.0, -1.0, -0.6],
                'SKF India (Industrial)': [null, null, null, -2.8, -1.4],
                'Timken India': [-0.2, -0.7, -0.8, -0.8, -0.6],
                'SKF India': [-0.7, -1.3, -1.7, -1.0, -0.7],
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
            note: 'Timken is building a rail plant at Jamshedpur and filling Bharuch; SKF Industrial’s ₹900–950cr Pune plant has barely started to show.',
            values: {
                'NRB Bearing': [3.2, 3.9, 4.5, 6.8, 7.9, 5.5],
                'Harsha Engineers Int': [3.8, 5.4, 5.4, 14.8, 7.4, 7.4],
                'SKF India (Industrial)': [null, null, null, 1.4, 2.7, 2.5],
                'Timken India': [3.6, 2.2, 9.0, 12.0, 8.7, 7.4],
                'SKF India': [2.5, 2.5, 2.8, 2.7, 6.1, 3.2],
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
            note: 'Higher means more sales from each rupee of plant. SKF’s figures are high partly because a quarter or more of its sales are traded goods bought from the group.',
            values: {
                'NRB Bearing': [2.6, 3.0, 3.2, 3.2, 3.2],
                'Harsha Engineers Int': [3.7, 3.5, 3.3, 3.4, 2.5],
                'SKF India (Industrial)': [null, null, null, 4.0, 16.3],
                'Timken India': [2.6, 3.3, 3.4, 3.9, 2.4],
                'SKF India': [9.1, 10.2, 9.7, 8.9, 8.6],
            },
            cellNotes: {
                'SKF India (Industrial)': 'FY26 is distorted by how assets were split at the demerger.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'design', label: 'Designed in', description: 'Chosen during the design of a gearbox, axle or motor and bought for the life of that programme.' },
            { key: 'own', label: 'Owns its technology', description: 'Owns the designs and process knowledge, rather than licensing a parent’s catalogue.' },
            { key: 'after', label: 'Aftermarket and services', description: 'Branded replacement sales and services, where margins are highest.' },
            { key: 'scale', label: 'Scale and range', description: 'Capacity, range and share of the customer’s spend.' },
            { key: 'control', label: 'Control of its strategy', description: 'A = decides its own capacity, exports and product range; D = a parent decides.' },
        ],
        rows: [
            { company: 'NRB Bearing', trend: 'widening', trendNote: 'Lifetime nominations past ₹1,100cr; a General Motors programme open only to US-made bearings; a BMW steering programme from 2027.',
                grades: { design: { grade: 'A', note: 'In every BMW 1–7 series and Mercedes transmission' }, own: { grade: 'A', note: 'Own needle and roller bearing designs' }, after: { grade: 'C', note: 'Mostly original-equipment sales' }, scale: { grade: 'B', note: 'Leader in needle bearings in India' }, control: { grade: 'A', note: 'Indian-owned' } } },
            { company: 'Harsha Engineers Int', trend: 'stable', trendNote: 'Core cage business growing; Romania and a new plant still dilute returns.',
                grades: { design: { grade: 'B', note: 'Cages qualified into every major’s bearings' }, own: { grade: 'B', note: 'Own cage-making know-how' }, after: { grade: 'D', note: 'Sells only to bearing makers' }, scale: { grade: 'A', note: '80–90% of India’s outsourced cages' }, control: { grade: 'B', note: 'Indian-owned, but customers could make cages themselves' } } },
            { company: 'SKF India (Industrial)', trend: 'stable', trendNote: 'Distribution share rising to 34%, but margin band guided down and the MD left weeks after listing.',
                grades: { design: { grade: 'A', note: 'Designed into industrial machines and wind gearboxes' }, own: { grade: 'C', note: 'Parent’s designs and catalogue' }, after: { grade: 'A', note: 'Distribution 34% of sales; services 6–7%' }, scale: { grade: 'A', note: 'Full industrial range' }, control: { grade: 'C', note: 'Parent keeps a factory and lubrication business outside' } } },
            { company: 'Timken India', trend: 'stable', trendNote: 'Rail franchise intact but rail spending diverted; Bharuch near breakeven.',
                grades: { design: { grade: 'A', note: 'Approved railway bearings; long qualification' }, own: { grade: 'C', note: 'Parent’s designs' }, after: { grade: 'B', note: 'Distribution about a sixth of sales' }, scale: { grade: 'B', note: 'Strongest in tapered and spherical rollers' }, control: { grade: 'D', note: 'Parent decides export allocation' } } },
            { company: 'SKF India', trend: 'narrowing', trendNote: 'Automotive aftermarket plateaued with discounting; EV content only from 2028.',
                grades: { design: { grade: 'B', note: 'Two-wheeler and car programmes' }, own: { grade: 'C', note: 'Parent’s designs' }, after: { grade: 'B', note: 'Brand counts against fake bearings' }, scale: { grade: 'B', note: 'Capacity about 93% loaded' }, control: { grade: 'C', note: 'Buys from its industrial sibling' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**NRB Bearings is the one I would own, because it is the only company here that owns what makes it valuable.** It designs its own needle and cylindrical roller bearings, holds more than ₹1,100cr of lifetime programme nominations, and sits inside every BMW 1–7 series and Mercedes transmission, with a BMW steering programme launching in 2027 and a General Motors win open only to US-made bearings. About 70% of its applications work in petrol, hybrid and electric drivetrains. **One practical caveat: this site's price data for NRB is wrong** (it belongs to a different, tiny company), so NRB is left out of the live valuation table; check its price on the exchange before acting.",
                "**Harsha Engineers is the cheapest way to own the industry's volume.** It makes the cages that hold the rollers apart and supplies Timken, Schaeffler, SKF, NBC, NSK and NTN across more than 80 of their plants, with 80–90% of the Indian outsourced market. Its price roughly matches the growth I expect. It looks mediocre because a loss-making Romanian unit, a slow new plant and a low-margin solar arm dilute a good core.",
                "**SKF India (Industrial) is the best franchise at the wrong moment; Timken India is a good business whose strategy is set in Ohio.** SKF Industrial earns about 30% on capital from industrial distribution and services, but it is spending ₹900–950cr on a plant that will earn much less, has guided its margin band down and lost its managing director weeks after listing. Timken owns India's strongest railway-bearing position, but its parent decides export allocation and railway spending has been diverted. I would wait on both.",
                "**Two things to hold onto before reading the rest.** First, **mix is destiny**: sales through distributors earn high double-digit margins and sales to vehicle makers high single digits, so watch the distribution share, not the headline margin. Second, **ask whose moat it is**: three of the five rent their technology from a foreign parent that also decides what sits inside the listed company. I would **pass on SKF India**, the automotive half, whose electric-vehicle content arrives only in late 2028.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped by who owns the technology. All figures are filed (Screener): Timken and SKF India (Industrial) standalone, the rest consolidated. **The SKF demerger distorts the history**: SKF India's figures before FY26 include the industrial business, and SKF India (Industrial) has only one or two years on its own. None of these companies publishes an order book, so there is no order-cover tab. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "India's bearing market is roughly $5.2bn and unusually concentrated: the top five suppliers hold about 60%, with SKF and Schaeffler alone around 37%, followed by Timken, NBC (the CK Birla company) and NRB. Vehicle and machine makers buy more than half; the rest is replacement.",
            ],
            points: [
                {
                    label: 'A bearing is designed in, not bought in',
                    text: "A vehicle or machine maker selects a bearing while designing a gearbox, axle or motor, tests it for months and then buys it for the life of the programme, typically five to seven years and far longer for a locomotive. Changing supplier means re-testing and carrying the risk of a failure. **This is why nominations won today are revenue in 2029**, and why share moves only at the next platform.",
                },
                {
                    label: 'The aftermarket is where the money is',
                    text: "Bearings wear out, and replacements are sold through distributors under the maker's brand, against a background of fake products that makes the brand the buyer's only assurance. SKF says original-equipment margins are high single digits and distribution margins high double digits. **Any bearing maker's margin is therefore mostly a statement about its mix.**",
                },
                {
                    label: 'The technology sits with the global parents',
                    text: "Performance comes from steel cleanliness, heat treatment, grinding to fractions of a micron, cage design, seals and grease, and increasingly from electrical insulation for electric motors. None of that development happens in the listed Indian arms of the multinationals. **NRB and Harsha own their design and process knowledge**, which makes them more interesting as businesses and more ordinary in their returns.",
                },
                {
                    label: 'Steel and contracts',
                    text: "Steel rose about ₹5,000 a tonne this year. Vehicle and truck makers accept price rises with a lag of one to two quarters; railways, public-sector and cement customers hold fixed annual rate contracts until renewal. Distributors reprice fastest.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**NRB** depends on European car and truck programmes and its own new nominations (a quarter of sales is exported). **Harsha** depends on the whole industry's volume and on the majors continuing to outsource cages. **SKF Industrial** depends on Indian factory spending, wind and distribution. **Timken** depends on the Railways' budget and on its parent's export allocation. **SKF India** depends on two-wheeler and car production. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Designer-owner in a niche', 'NRB', '16–18%', '18%', '**56%**'],
                        ['Component supplier to the industry', 'Harsha', '14–15%', '13%', '**62%**'],
                        ['Industrial catalogue and services', 'SKF India (Industrial), Timken', '9–22%', '18–30%', '**26–54%**'],
                        ['Automotive catalogue', 'SKF India', '6–15%', '24%', '**60%**'],
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
                    label: 'Lasting: designed in for the life of a programme',
                    text: "Every company here benefits from being designed into a gearbox, axle, locomotive or wind turbine and re-ordered for years. **NRB** holds the nominations itself; **Timken**'s approved railway bearings take years to qualify and have a captive buyer; **SKF Industrial**'s services (remanufacturing, condition monitoring, running steel-mill maintenance shops) attach it to customers' uptime. These edges should last as long as the programmes do.",
                },
                {
                    label: 'Lasting but not owned: the parent’s catalogue',
                    text: "**Timken, SKF Industrial and SKF India** sell a global catalogue and brand they do not own. The parent decides export volumes (Timken's parent said production lines 'can be moved around' to wherever it makes more money), keeps some Indian businesses outside the listed company (SKF's Ahmedabad factory, lubrication and wind-bearing businesses) and takes royalties. The moat lasts; the question is how much of it minority shareholders get.",
                },
                {
                    label: 'Wearing away: the automotive aftermarket',
                    text: "**SKF India**'s replacement business has plateaued and it has been discounting, as cheap imported and fake bearings compete at the bottom of the market. Brand still matters, but this is where margins are under the most pressure.",
                },
                {
                    label: 'A different kind of moat: Harsha',
                    text: "**Harsha** has 80–90% of India's outsourced cage market and supplies every major, so its volume is the industry's volume. Its risk is not a rival cage maker but its customers deciding to make cages themselves or move volume between their own plants. That makes it a strong but hostage position.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Schaeffler India (the largest, not in this sector list), NBC (National Engineering Industries), NTN, NSK and JTEKT, plus imported and fake replacement bearings.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three things decide a bearing maker's margin: the mix between vehicle-maker and replacement sales, how quickly steel moves through the contract, and how full the plants are.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: NRB and the industrial catalogue',
                    text: "**NRB** has held 16–18% for five quarters with index-linked steel pass-through and a one-to-two-quarter lag. **Timken** (18–22% in most quarters) and **SKF Industrial** earn well from distribution and heavy industrial work; SKF Industrial's distribution share rose from 32% to 34%, its single most valuable trend. **I expect these to hold**, though SKF Industrial guides its committed band to 14–16% and heavy original-equipment growth will dilute it.",
                },
                {
                    label: 'Cyclical: capacity filling and steel lags',
                    text: "**Timken** could not pass steel to railway, public-sector and cement customers on fixed annual contracts, and its Bharuch plant is only near breakeven at 40–45% utilisation. **Harsha** lost margin on an 8% input rise with a four-month lag, and its new plant lost about ₹4cr in a quarter. Both should recover as plants fill and contracts reset.",
                },
                {
                    label: 'Not structural: one-offs and related-party margins',
                    text: "**SKF India**'s Q1 gross margin jumped from 42.5% to 51%, partly from revaluing stock rather than pricing, and about 10% of its revenue is sales to its industrial sibling on related-party terms. **Harsha**'s solar contracting arm earns only 7–8%. Strip these out before judging either.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Timken** tied up ₹690cr in working capital, mostly customer bills (₹423cr) and stock (₹410cr), partly offset by suppliers. **SKF India** tied up ₹503cr, mostly customer bills (₹775cr before the demerger), offset by paying suppliers more slowly. **NRB** tied up ₹277cr, almost all in stock (₹241cr).",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Harsha**'s five-year cash conversion is a respectable 62%, but it fell to 28% in FY26 as the new plant and solar contracting absorbed cash. **Timken**'s suppliers are now paid in 105 days (from 76–82), which has so far helped, but its customers take 85 days to pay, up from 75.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**NRB** turned more than all of its FY26 operating profit into cash (104%) and cut stock from 349 to 302 days. **Timken**'s stock fell from 171 to 136 days over five years. **SKF India**'s cash cycle fell to 33 days after the demerger.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**NRB** will always carry about 300 days of stock across thousands of part numbers for export customers, and **Harsha** about 170 days across many cage sizes for 80+ plants. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: railways, when the money returns',
                    text: "**Timken**'s rail revenue of ₹200cr a quarter grew only about 3% because government money was diverted to defence and infrastructure. The fleet and freight plans have not changed, so this is deferral rather than loss, and Timken's new Jamshedpur rail plant is being built for it. It should last a decade once spending resumes.",
                },
                {
                    label: 'Growth driver: industrial spending and wind',
                    text: "**Timken**'s process-industry sales grew 28–30% on steel mills and gearboxes for 5 MW-plus wind turbines; **SKF Industrial** won a ₹140cr wind gearbox order. Wind is the best new industrial use for bearings because the units are large, tolerances tight and replacement real. This follows India's factory and renewable investment for years.",
                },
                {
                    label: 'Growth driver: exports and localisation',
                    text: "**NRB**'s General Motors win requires US-made bearings, which is why its South Carolina plant matters; its Italian joint venture for industrial bearings starts in April 2027. **Harsha** is adding steel-cage capacity in China and trying to fix Romania. **Timken**'s exports grew 21%, but volumes are allocated by its parent.",
                },
                {
                    label: 'Growth driver: electric vehicles, later than hoped',
                    text: "**SKF India** says its electric-vehicle platforms produce from mid-2027 with meaningful revenue only in late calendar 2028. **NRB** is comfortable either way, since about 70% of its applications work in any drivetrain. Nobody here gets an electric-vehicle earnings boost before 2028.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**NRB** grew 19% in Q1 and raised its FY31 aspiration to about ₹2,730–3,000cr. **Harsha**'s Indian engineering business grew 21%, with bushings up 35% and stampings 31%. **SKF India** raised guidance to about 20% revenue growth.",
                },
                {
                    label: 'Cautious',
                    text: "**Timken** gives no numbers and blamed rail tenders for slow growth. **SKF India (Industrial)** guided its committed margin band down to 14–16%.",
                },
                {
                    label: 'Missed',
                    text: "**Harsha** trimmed its margin guidance on the same call it reaffirmed it; its new plant needs about three times its current run rate to hit its ₹140cr target, and Romania's breakeven depends on one customer returning.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**NRB** guides by extrapolation rather than plan, and its aerospace order book has been quoted at both ₹50cr and ₹70cr. **SKF Industrial** would not say whether the parent's Indian businesses outside the listed company will be folded in.",
                },
                {
                    label: 'My outlook',
                    text: "Bearing demand grows with Indian vehicle and factory output plus exports, roughly 10–14% a year in value. **I expect the companies that own their positions (NRB, Harsha) to compound at 16–17%, and the multinational subsidiaries at 14–15% as new plants weigh on returns for two years.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['NRB Bearing', 'European programmes, US localisation, industrial and aerospace', '10% / **17%** / 22%'],
                        ['Harsha Engineers Int', 'Industry cage volumes; Romania and new plant recovering', '10% / **16%** / 22%'],
                        ['SKF India (Industrial)', 'Distribution, services, wind; Pune plant from 2028', '10% / **14%** / 18%'],
                        ['Timken India', 'Railways, process industries, exports', '10% / **15%** / 20%'],
                        ['SKF India', 'Two-wheelers and cars; EV content from 2028', '8% / **14%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8 (NRB is left out; see there).',
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
                    label: 'The parent decides',
                    text: "**Timken**'s parent is divesting its global automotive business and says production lines can be moved to wherever it earns more; asked what that means for India, management deflected. **SKF**'s parent keeps an Ahmedabad factory, lubrication and wind-bearing businesses outside the listed company and said a merger is 'not actively' being considered. About a quarter of Timken's revenue is traded product from the group.",
                },
                {
                    label: 'Capital spending ahead of returns',
                    text: "**SKF Industrial**'s ₹900–950cr Pune plant produces from 2028 with a five-to-seven-year payback, roughly 14–20% pre-tax against a business earning about 30%. **Timken**'s Bharuch plant is at 40–45% utilisation and its rail plant has slipped to the end of the year. **Harsha**'s new plant lost money. Managements gave timelines but not returns.",
                },
                {
                    label: 'Customer concentration and cycles',
                    text: "**Harsha**'s top ten customers are about 80% of revenue, and a major taking cages back in-house would hurt. A two-wheeler or tractor downturn would hit **SKF India** and Harsha's volumes together. **Timken** depends on railway budgets.",
                },
                {
                    label: 'Leadership and disclosure',
                    text: "**SKF Industrial**'s managing director left weeks after its first investor call. **NRB** guides by extrapolation. **SKF India**'s margin includes a stock gain and related-party sales it is spending to reduce. And for investors on this site: **NRB's market data here is wrong**, so its live multiples cannot be used.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **17% at 27x, 19% at 32x, 20% at 35–37x and 26% at 60x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **NRB is left out of the live table** because this site's price record for it belongs to a different company; on Screener's figures its price needs a little more growth than I expect.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Everyone except NRB holds net cash, so the two measures mostly agree. **SKF India** looks cheaper on EV/EBITDA because its cash is large relative to its smaller post-demerger business. **Timken**'s price is high on both.",
                },
                {
                    label: 'Reasonable',
                    text: "**Harsha**: the price roughly matches the growth I expect, with the Romanian and new-plant problems as upside if fixed.",
                },
                {
                    label: 'Full',
                    text: "**NRB** (on Screener's price): a little ahead of what I expect.",
                },
                {
                    label: 'Stretched',
                    text: "**Timken** and **SKF India (Industrial)**: good franchises whose prices need several points more growth than I expect while their new plants dilute returns. **SKF India**: a volume business priced above the growth I expect.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'NRB Bearing', rank: 1, stance: 'SCALEUP', segment: OWN,
            what: "India's largest home-grown bearing company: needle and cylindrical roller bearings for transmissions, chassis and steering, with a US plant, a German presence and an Italian joint venture.",
            view: "**The only company here that owns its designs, nominations and customers.** Content in every BMW and Mercedes transmission, more than ₹1,100cr of lifetime nominations including a US-only General Motors programme, 16–18% margins with index-linked pass-through, and a real aerospace qualification. This site's price data for it is wrong, so check the price on the exchange; on Screener's figures it needs a little more than my ~17% estimate.",
            watch: 'Nominations converting; the US and Italian plants; the aerospace order book.',
        },
        {
            company: 'Harsha Engineers Int', rank: 2, stance: 'SCALEUP', segment: OWN,
            what: "The world's largest independent maker of precision bearing cages (brass, steel, polyamide), supplying Timken, Schaeffler, SKF, NBC, NSK and NTN across 80+ plants, plus bushings and stampings.",
            view: "**The industry's volume through its supplier.** 80–90% of the Indian outsourced cage market, with the core business growing 21%. Group returns of about 13% are dragged down by a loss-making Romanian unit, a slow new plant and low-margin solar contracting. The price roughly matches my ~16% estimate.",
            watch: 'Romania breakeven; the new plant’s ramp; any customer taking cages in-house.',
        },
        {
            company: 'SKF India (Industrial)', rank: 3, stance: 'PRICED', segment: MNC,
            what: "The industrial half of SKF India after the demerger: the full industrial bearing range sold to machine makers and through distributors, plus remanufacturing and condition-monitoring services.",
            view: "**The best economics in the sector at the wrong moment.** About 30% return on capital from distribution (34% of sales) and services. But the committed margin band was guided down to 14–16%, a ₹900–950cr plant will dilute returns until 2028 and beyond, and the managing director left weeks after listing. The price needs more than my ~14% estimate.",
            watch: 'Distribution share; the Pune plant; whether the parent folds its outside businesses in.',
        },
        {
            company: 'Timken India', rank: 4, stance: 'PRICED', segment: MNC,
            what: "Tapered and spherical roller bearings for railways (22% of revenue), off-highway and heavy trucks, process industries and exports; majority-owned by Timken of the US.",
            view: "**India's best railway-bearing franchise, with strategy set abroad.** Process industries grew 28–30% and exports 21%, but rail grew only 3%, steel cannot be passed to fixed-contract customers, Bharuch is near breakeven, and about a quarter of revenue is traded group product. The price needs far more than my ~15% estimate.",
            watch: 'Railway ordering; Bharuch utilisation; the parent’s export allocation.',
        },
        {
            company: 'SKF India', rank: 5, stance: 'PRICED', segment: MNC,
            what: "The automotive half of SKF India after the demerger: bearings and units for two-wheelers, cars and commercial vehicles, plus automotive replacement sales.",
            view: "**A competent volume business with questions about its margin.** Guidance was raised to about 20% revenue growth and plants are about 93% loaded, but Q1's margin was helped by revaluing stock, about 10% of revenue is related-party sales, the aftermarket has plateaued, and EV content arrives only in late 2028. The price needs more than my ~14% estimate.",
            watch: 'Margins without one-offs; EV programme timing; related-party sales falling.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Indian-owned.** **NRB: own.** The only company whose position belongs to its own shareholders: designs, nominations, a US localisation win and an aerospace qualification. Check its price on the exchange; this site's data for it is wrong. **Harsha: own.** The cheapest way to own the whole industry's volume, with the diluting pieces separable from a good core.",
            "**Multinational subsidiaries.** **SKF India (Industrial): wait.** The best franchise, but two years of plant spending, a lower margin band and a leadership change argue for a better entry. **Timken India: wait.** The best railway niche inside a company whose export strategy is set abroad. **SKF India: pass.** A two-wheeler and car volume business whose EV story arrives only in late 2028.",
            "**What would change my view.** Railway ordering resuming (Timken); SKF Industrial's distribution share climbing or the parent folding in its outside businesses; Harsha fixing Romania and its new plant; NRB converting nominations on schedule. For the worse: a parent moving export volume away from India, steel staying high on fixed contracts, or a two-wheeler and tractor downturn.",
            "**What to watch next quarter.** NRB's nominations and US plant; Harsha's new plant and Romania; SKF Industrial's distribution share and Pune spend; Timken's rail revenue; SKF India's margin without one-offs.",
        ],
        bottomLine:
            "Bearings has real moats (design-in for the life of a programme, a brand-protected aftermarket and services tied to uptime), but three of the five listed companies rent them from a parent. Own the two that own their positions (NRB Bearing and Harsha Engineers Int) and wait for a better entry into SKF India (Industrial) and Timken India rather than paying a premium for someone else's franchise.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/NRBBEARING/consolidated/' },
        { label: 'India bearings market: size, concentration and leading players — Astute Analytica', url: 'https://www.astuteanalytica.com/industry-report/india-bearings-market' },
        { label: 'India bearings market share and company landscape — Ken Research', url: 'https://www.kenresearch.com/industry-reports/india-bearings-market' },
        { label: 'Top bearing manufacturers in India and their positioning — Kompass', url: 'https://in.solutions.kompass.com/blog/top-10-bearing-manufacturers-in-india/' },
    ],
};
