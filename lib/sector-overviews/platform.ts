import { SectorOverview } from './types';
import { platformBusinesses } from './platform-businesses';
import { platformValuationInputs } from './card-data/platform';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const LISTINGS = 'Listings and subscriptions — paid for being found';
const B2B = 'Platforms for businesses — trucks, travel agents, payments and parts';
const CONSUMER = 'Delivery and home services — still loss-making';

export const platformCos: SectorOverview = {
    sector: 'Platform Cos',
    title: 'Platform Cos',
    format: 'ranked',
    businesses: platformBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: platformValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Cartrade Tech': 25,
            'BlackBuck': 30,
            'Matrimony.com': 12,
            'Macfos': 25,
            'TBO Tek': 20,
            'Swiggy': null,
            'Urban Company': null,
            'Pine Labs': null,
        },
    },
    standfirst:
        "Eight internet platforms that connect buyers and sellers. CarTrade runs car websites, used-car classifieds and vehicle auctions; Matrimony.com runs matchmaking sites. BlackBuck serves truck owners, TBO Tek serves travel agents, Pine Labs runs payment terminals and checkout for shops, and Macfos (SME-listed) sells electronics and drone parts online. Swiggy delivers food and groceries and Urban Company books home services; both still lose money. Six are profitable, and all but Macfos hold net cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed quarterly results (Screener): all consolidated except Macfos (standalone). Operating profit ÷ revenue.',
            note: 'CarTrade and BlackBuck earn 24–37%; Swiggy and Urban Company still lose money at the operating level, though Swiggy’s loss has narrowed every quarter.',
            values: {
                'Cartrade Tech': [25, 33, 37, 35, 31],
                'BlackBuck': [28, 25, 26, 24, 25],
                'Matrimony.com': [10, 10, 11, 12, 20],
                'Macfos': [13, 11, 10, 14, 11],
                'TBO Tek': [14, 15, 13, 13, 15],
                'Swiggy': [-19, -14, -13, -11, -10],
                'Urban Company': [-4, -21, -11, -28, -18],
                'Pine Labs': [7, 12, 18, 15, 13],
            },
            cellNotes: {
                'Urban Company': 'Includes heavy spending on InstaHelp, its new on-demand house-help service.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Most of these companies are growing 15–55% a year. Matrimony.com is the slow grower.',
            values: {
                'Cartrade Tech': [22, 25, 19, 19, 16],
                'BlackBuck': [57, 53, 51, 52, 42],
                'Matrimony.com': [-5, -1, 2, 8, 14],
                'Macfos': [4, -24, 72, 63, 37],
                'TBO Tek': [22, 26, 86, 83, 81],
                'Swiggy': [54, 54, 54, 45, 37],
                'Urban Company': [null, 37, 33, 43, 44],
                'Pine Labs': [null, 18, 24, 17, 20],
            },
            cellNotes: {
                'TBO Tek': 'Reported growth since Q3 FY26 includes an acquired business; the company reports organic growth separately.',
                'Urban Company': 'Q1 FY26 comparison not filed.',
                'Pine Labs': 'Q1 FY26 comparison not filed.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'Macfos and Matrimony.com have made good returns for years; CarTrade, BlackBuck and Pine Labs are climbing from losses; the large cash piles from their listings hold returns down.',
            values: {
                'Cartrade Tech': [-6, 3, 4, 8, 12],
                'BlackBuck': [-29, -36, -32, 11, 13],
                'Matrimony.com': [22, 16, 21, 19, 17],
                'Macfos': [81, 58, 55, 42, 34],
                'TBO Tek': [18, 53, 43, 27, 18],
                'Swiggy': [-48, -37, -24, -29, -24],
                'Urban Company': [-51, -20, -6, 2, -8],
                'Pine Labs': [-3, -7, -8, 0, 4],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days.',
            note: 'Below zero means customers pay before the company pays its suppliers, which is how Swiggy and Urban Company work. Macfos carries stock of thousands of parts, so its cycle is the longest.',
            values: {
                'Cartrade Tech': [48, 52, 55, 49, 44],
                'BlackBuck': [null, null, 26, 23, 15],
                'Matrimony.com': [7, 7, 0, 0, 1],
                'Macfos': [100, 78, 75, 88, 113],
                'TBO Tek': [null, null, null, null, null],
                'Swiggy': [-79, -46, -35, -48, -16],
                'Urban Company': [-269, -234, -153, -94, -93],
                'Pine Labs': [null, null, null, null, null],
            },
            cellNotes: {
                'TBO Tek': 'Not meaningful: it books only its commission as revenue, while money owed by travel agents is the full booking value.',
                'Pine Labs': 'Not meaningful: money passing through to merchants swamps its own revenue.',
                'BlackBuck': 'FY22–FY23 not meaningful: money owed to it was large against a small revenue base.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years. Blank where operating profit was negative.',
            note: 'Operating cash is after tax, so 70–80% is healthy. CarTrade and Matrimony.com turn all their profit into cash; Macfos has not, because its stock keeps growing.',
            values: {
                'Cartrade Tech': [null, 141, 20, 112, 100, 142],
                'BlackBuck': [null, null, null, 62, 101, null],
                'Matrimony.com': [91, 85, 85, 98, 147, 98],
                'Macfos': [-11, 55, 25, -104, -21, -24],
                'TBO Tek': [619, 125, 87, 101, -6, 81],
                'Swiggy': [null, null, null, null, null, null],
                'Urban Company': [null, null, null, null, null, null],
                'Pine Labs': [-71, null, null, 23, 110, -2],
            },
            cellNotes: {
                'Swiggy': 'Operating loss every year.',
                'Urban Company': 'Operating loss every year.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. The last column uses all five years.',
            note: 'CarTrade has produced 20–30% of revenue as free cash for two years; Swiggy burnt about 17% of revenue in FY26.',
            values: {
                'Cartrade Tech': [18.2, 11.3, 2.7, 25.9, 29.5, 19.6],
                'BlackBuck': [-84.0, -82.4, 7.1, 3.3, 8.7, -9.2],
                'Matrimony.com': [16.1, 11.2, 8.5, 9.6, 13.9, 11.8],
                'Macfos': [-2.7, 1.1, 1.7, -11.7, -3.4, -4.7],
                'TBO Tek': [38.1, 21.6, 13.5, 13.6, -3.3, 10.2],
                'Swiggy': [-73.5, -51.2, -14.8, -19.2, -16.6, -26.5],
                'Urban Company': [-74.4, -39.7, -11.5, 3.8, -9.0, -16.7],
                'Pine Labs': [-44.0, -32.5, -28.0, -4.4, 5.8, -14.7],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash and treasury investments, ÷ operating profit. Blank where operating profit was negative.',
            note: 'Below zero means more cash than debt. All but Macfos hold net cash from their listings; Swiggy (₹7,526cr) and Urban Company (₹1,658cr) hold large net cash but make operating losses, so the ratio is blank.',
            values: {
                'Cartrade Tech': [null, -27.3, -6.2, -3.7, -3.1],
                'BlackBuck': [null, null, null, -7.8, -3.8],
                'Matrimony.com': [-3.1, -3.9, -4.2, -2.3, -3.0],
                'Macfos': [0.6, 0.5, 0.4, 0.8, 0.9],
                'TBO Tek': [-13.8, -3.1, -2.5, -4.4, -2.1],
                'Swiggy': [null, null, null, null, null],
                'Urban Company': [null, null, null, null, null],
                'Pine Labs': [-32.0, null, null, -23.0, -21.8],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. The last column uses all five years.',
            note: 'Platforms need little plant. Pine Labs buys payment terminals and BlackBuck telematics devices, so they spend more.',
            values: {
                'Cartrade Tech': [1.9, 1.9, 0.6, 0.8, 3.5, 1.9],
                'BlackBuck': [18.5, 14.8, 8.1, 10.3, 17.2, 13.6],
                'Matrimony.com': [1.8, 1.3, 4.2, 2.9, 2.4, 2.5],
                'Macfos': [0.9, 6.4, 1.5, 1.9, 0.8, 1.8],
                'TBO Tek': [2.9, 0.7, 2.7, 3.1, 2.5, 2.4],
                'Swiggy': [5.1, 2.0, 3.1, 4.9, 4.0, 3.9],
                'Urban Company': [2.5, 2.4, 1.1, 1.0, 2.6, 1.9],
                'Pine Labs': [35.5, 23.0, 15.0, 6.6, 8.8, 14.6],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'network', label: 'Network effect', description: 'More buyers bring more sellers and the other way round, so the leader gets stronger.' },
            { key: 'brand', label: 'Brand and free traffic', description: 'Users who come on their own, without paid advertising.' },
            { key: 'switch', label: 'Switching cost', description: 'How hard it is for a customer to move: software built into their business, data, habits.' },
            { key: 'econ', label: 'Proven economics', description: 'Whether each order or member already makes money, and margins are rising.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and the quality of reporting.' },
        ],
        rows: [
            { company: 'Cartrade Tech', trend: 'widening', trendNote: 'Adjusted operating profit up 45% or more for 16 quarters; OLX revenue up 29%; aims for margins above 40%.',
                grades: { network: { grade: 'A', note: 'Leading car sites, classifieds and auctions' }, brand: { grade: 'A', note: '95% of its 150m yearly users come free' }, switch: { grade: 'B', note: 'Dealers and banks use its auctions' }, econ: { grade: 'A', note: 'Margin up from 25% to 31% in a year' }, cash: { grade: 'A', note: '₹1,321cr cash; profit turns into cash' } } },
            { company: 'BlackBuck', trend: 'widening', trendNote: 'Toll payments growing 16% against low single digits nationally; new loads and finance businesses scaling.',
                grades: { network: { grade: 'B', note: '9 lakh truck operators transact monthly' }, brand: { grade: 'B', note: 'Known to small truck owners' }, switch: { grade: 'B', note: 'Tolls, fuel, GPS and loans in one app' }, econ: { grade: 'B', note: 'Profitable since FY25; margin about 25%' }, cash: { grade: 'B', note: 'Net cash; converts profit to cash' } } },
            { company: 'Matrimony.com', trend: 'stable', trendNote: 'Profit more than doubled in Q1 on better margins; revenue growth only 13%; CFO leaving.',
                grades: { network: { grade: 'A', note: 'Largest matchmaking member base' }, brand: { grade: 'A', note: 'BharatMatrimony and community sites' }, switch: { grade: 'C', note: 'Members leave once married' }, econ: { grade: 'B', note: 'Matchmaking margin about 27%' }, cash: { grade: 'A', note: 'Converts all profit to cash; pays dividends' } } },
            { company: 'Macfos', trend: 'widening', trendNote: 'Like-for-like growth of 64–67%; starting to sell its own-designed products at higher margins.',
                grades: { network: { grade: 'C', note: 'A store, not a marketplace' }, brand: { grade: 'B', note: 'Robu.in known to students and start-ups' }, switch: { grade: 'C', note: 'Buyers can shop elsewhere' }, econ: { grade: 'B', note: 'Margins 10–14%, steady' }, cash: { grade: 'C', note: 'Stock growth eats the cash' } } },
            { company: 'TBO Tek', trend: 'stable', trendNote: 'Organic growth about 15% in constant currency; integrating Classic Vacations.',
                grades: { network: { grade: 'A', note: 'Travel agents and hotels worldwide' }, brand: { grade: 'B', note: 'Known in the B2B travel trade' }, switch: { grade: 'B', note: 'Agents run bookings through it' }, econ: { grade: 'B', note: '26% of gross profit reaches operating profit' }, cash: { grade: 'B', note: 'Net cash; FY26 operating cash negative' } } },
            { company: 'Swiggy', trend: 'widening', trendNote: 'Instamart at breakeven per order; the company targets breakeven at the overall cash level within two quarters.',
                grades: { network: { grade: 'A', note: 'One of two food-delivery leaders' }, brand: { grade: 'A', note: 'Household name in cities' }, switch: { grade: 'C', note: 'Users switch apps for discounts' }, econ: { grade: 'C', note: 'Food profitable; group still losing' }, cash: { grade: 'C', note: '₹7,526cr net cash, still burning' } } },
            { company: 'Urban Company', trend: 'stable', trendNote: 'Core India services margin up to 6.9%; InstaHelp lost ₹132cr in the quarter.',
                grades: { network: { grade: 'A', note: 'Leading home-services app' }, brand: { grade: 'A', note: 'Trusted for trained professionals' }, switch: { grade: 'B', note: 'Customers rebook the same service' }, econ: { grade: 'C', note: 'Core profitable; group losing' }, cash: { grade: 'C', note: '₹2,019cr cash; burning on InstaHelp' } } },
            { company: 'Pine Labs', trend: 'stable', trendNote: 'Growth about 20%, at the low end of guidance; operating profit short of its own aim.',
                grades: { network: { grade: 'B', note: 'Links shops, banks and brands for EMI offers' }, brand: { grade: 'B', note: 'Well known with large retailers' }, switch: { grade: 'B', note: 'Software built into merchants and banks' }, econ: { grade: 'C', note: 'Profit still small' }, cash: { grade: 'C', note: 'Five-year cash conversion negative' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own CarTrade and BlackBuck.** CarTrade runs India's leading car websites, OLX India and Shriram Automall auctions; its adjusted operating profit has grown 45% or more for 16 quarters running, its margin rose from 25% to 31% in a year, almost all its users come without paid advertising, and it turns all its profit into cash. BlackBuck is the app 9 lakh truck operators use each month to pay tolls and fuel, track trucks and find loads; revenue grew 42% and it has been profitable since FY25. Both prices ask for about the growth I expect.",
                "**Follow Matrimony.com and Macfos.** Matrimony.com's profit more than doubled in Q1 as margins recovered, and it converts all its profit into cash, but revenue grows only about 13%. Macfos (Robu.in) is growing 64–67% like for like, but its growing stock eats the cash.",
                "**Wait on TBO Tek, Swiggy, Urban Company and Pine Labs.** TBO is a good business whose reported growth is flattered by an acquisition; organic growth is about 15%. Swiggy and Urban Company still lose money at group level, and Pine Labs' profit is still small against its value.",
                "**Two things to hold onto before reading the rest.** First, **a platform is only as good as its profit per order**: CarTrade and Matrimony.com make money on every extra user, while Swiggy and Urban Company are still proving it on their newer services. Second, **cash is not the issue, returns are**: seven of the eight hold net cash, so the question is whether they can earn a good return on it.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results (all consolidated except Macfos). Several ratios break down for platforms, such as working capital at TBO and Pine Labs, where money passing through swamps revenue; those cells are blank with a note. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Platforms earn a fee or margin for connecting buyers and sellers. Once built, each extra user costs little, so margins rise fast with scale, but only for the leader in each market.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Buyers (households, travel agents, truck owners, shops) ↔ **the platform** ↔ sellers (restaurants, hotels, car dealers, service professionals, banks). **The profit sits with the platform that most buyers and sellers already use**; a second-placed rival has to spend on discounts and advertising to keep up.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "More Indians shopping and paying on phones; used-car buying moving online; small truck owners and travel agents going digital; shops accepting UPI and card payments with instalment offers; city households paying for convenience.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Competition matters more than the economy.** Quick commerce is a spending war between Swiggy's Instamart and its rivals; Delhivery has signalled entry into BlackBuck's truck-loads market. Rules on payments, gig workers and digital lending can change costs quickly.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**CarTrade** on used-car transactions moving online; **BlackBuck** on selling more to the same truck owners; **Matrimony.com** on members paying more; **Macfos** on India's electronics and drone makers; **TBO** on overseas hotel bookings; **Swiggy** on Instamart turning profitable; **Urban Company** on InstaHelp; **Pine Labs** on merchants and banks paying for software as payments move to UPI. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year free cash ÷ revenue'],
                    rows: [
                        ['Listings and subscriptions', 'CarTrade, Matrimony.com', '10–37%', '12–17%', '**12–20%**'],
                        ['Platforms for businesses', 'BlackBuck, Macfos, TBO Tek, Pine Labs', '7–28%', '4–34%', '**−15% to 10%**'],
                        ['Delivery and home services', 'Swiggy, Urban Company', '−28% to −4%', '−24% to −8%', '**−27% to −17%**'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect a platform's profits. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: leader in a niche with free traffic',
                    text: "**CarTrade** (95% of its 150 million yearly users come without paid advertising) and **Matrimony.com** lead their markets and spend little to win users.",
                },
                {
                    label: 'Lasting if they keep adding services: business platforms',
                    text: "**BlackBuck** bundles tolls, fuel, GPS, loads and loans for truck owners; **TBO** is how many travel agents book hotels; **Pine Labs**' software is built into large retailers and banks.",
                },
                {
                    label: 'Strong brands, weak lock-in: consumer apps',
                    text: "**Swiggy** and **Urban Company** are household names, but customers switch apps for a better deal, which keeps discounts and marketing high.",
                },
                {
                    label: 'Barely a moat: reselling',
                    text: "**Macfos** is a well-run store; its edge is range and speed, which it is widening by designing its own products.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Eternal (Zomato and Blinkit)** and **Zepto** against Swiggy; **CarDekho** and **Spinny** in cars; **Shaadi.com** in matchmaking; **Paytm** and **Razorpay** in payments; global B2B travel wholesalers against TBO.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the listing businesses, yes; for the delivery apps, not yet.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: the cost of one more user is tiny',
                    text: "**CarTrade** (31–37%) expects to pass its Q1 margin of 31% in later quarters and aims above 40%. **Matrimony.com**'s margin rose to 20% in Q1 (27% in matchmaking).",
                },
                {
                    label: 'Rising: business platforms',
                    text: "**BlackBuck** earns about 25% and its new businesses are scaling; **TBO** turns about 26% of its gross profit into operating profit; **Pine Labs** earned 13–18% but fell short of its own operating-profit aim in Q1.",
                },
                {
                    label: 'Not yet structural: delivery and home services',
                    text: "**Swiggy**'s food delivery makes about 3% (target 5%) and Instamart is at breakeven per order (−0.2%). **Urban Company**'s India services make 6.9% (target 9–10%), but InstaHelp lost ₹132cr in the quarter.",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Macfos** carries stock of 1.5 lakh products; its cycle rose to 113 days and it has used cash in the last two years.",
                },
                {
                    label: 'Working capital: paid first',
                    text: "**Swiggy** and **Urban Company** collect from customers before paying restaurants and professionals; **Matrimony.com** is paid up front.",
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
                    label: 'Growth driver: used cars and auctions',
                    text: "**CarTrade** targets ₹1,000cr of profit within four to five years; OLX revenue grew 29% and it now arranges used-car loans.",
                },
                {
                    label: 'Growth driver: selling more to the same customers',
                    text: "**BlackBuck** is adding loads and vehicle finance (profitable by end-FY27, it says) to its toll and fuel users. **Matrimony.com** guides triple-digit profit growth for Q2.",
                },
                {
                    label: 'Growth driver: new services',
                    text: "**Swiggy** opened more new Instamart stores this quarter than in the previous four. **Urban Company** is building InstaHelp, which it expects to break even by FY31, and targets group adjusted operating breakeven by Q3 FY28 and ₹1,000cr of adjusted operating profit by FY31. **Pine Labs** guides about 21–23% revenue growth this year.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**CarTrade** has grown adjusted operating profit 45% or more for 16 quarters; **Swiggy** brought Instamart to breakeven per order as promised; **Matrimony.com** delivered the profit doubling it guided.",
                },
                {
                    label: 'Behind',
                    text: "**Pine Labs** grew about 20%, at the low end, and missed its operating-profit aim. **TBO**'s organic growth is about 15%.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect BlackBuck to compound earnings at about 30%, CarTrade and Macfos at about 25%, TBO at about 20% and Matrimony.com at about 12%.** Swiggy, Urban Company and Pine Labs make too little profit to estimate from.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['BlackBuck', 'More products per truck owner; loads; finance', '18% / **30%** / 40%'],
                        ['Cartrade Tech', 'Used-car transactions; margin toward 40%', '16% / **25%** / 32%'],
                        ['Macfos', 'Parts demand; own products', '12% / **25%** / 35%'],
                        ['TBO Tek', 'Hotel bookings abroad; Classic Vacations', '12% / **20%** / 26%'],
                        ['Matrimony.com', 'Higher prices; margin recovery', '5% / **12%** / 18%'],
                        ['Swiggy', 'Instamart breakeven; food margin to 5%', 'Loss-making; too early to estimate'],
                        ['Urban Company', 'InstaHelp; core margin to 9–10%', 'Loss-making; too early to estimate'],
                        ['Pine Labs', 'Software and online payments', 'Profit too small to estimate from'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
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
                    label: 'Spending wars',
                    text: "**Swiggy**'s Instamart competes with well-funded rivals and guides its per-order margin to between 0 and −1% next quarter as it opens stores. **BlackBuck** faces Delhivery's entry into truck loads.",
                },
                {
                    label: 'Growth that is bought',
                    text: "**TBO**'s reported growth of 81% includes Classic Vacations; organic growth is about 15%. **Urban Company**'s InstaHelp loses ₹346 an order today.",
                },
                {
                    label: 'Payments moving to UPI',
                    text: "About 70% of transactions on **Pine Labs**' terminals are now UPI, which earns merchants' payment firms little; it must earn more from software and offers.",
                },
                {
                    label: 'Cash and people',
                    text: "**Macfos** is SME-listed and its stock growth has used cash two years running. **Matrimony.com**'s CFO is leaving. **TBO** used cash in its operations in FY26.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **16% at 25x, 22% at 43x, 27% at 62x, 28% at 69x and 40% at 170x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Most of these companies hold large net cash, so their businesses are cheaper than their P/Es suggest; **Pine Labs**' ₹7,813cr of net cash is a third of its market value.",
                },
                {
                    label: 'Reasonable',
                    text: "**CarTrade**, **BlackBuck** and **Macfos**: prices that ask for about the growth I expect.",
                },
                {
                    label: 'Stretched',
                    text: "**TBO Tek** needs more growth than its organic rate. **Matrimony.com** is a little short.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Swiggy** and **Urban Company** lose money; **Pine Labs**' profit is too small for its P/E to mean much.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Cartrade Tech', rank: 1, stance: 'COMPOUNDER', segment: LISTINGS,
            what: "Runs CarWale and BikeWale for new-vehicle research, OLX India classifieds for used cars and other goods, and Shriram Automall vehicle auctions.",
            view: "**Operating leverage, proven.** Adjusted operating profit up 45% or more for 16 quarters, margin up from 25% to 31% in a year, free traffic and ₹1,321cr of cash. The price asks for about my ~25% estimate.",
            watch: 'Margin toward 40%; OLX growth; used-car loans.',
        },
        {
            company: 'BlackBuck', rank: 2, stance: 'SCALEUP', segment: B2B,
            what: "An app for small truck owners: toll (FASTag) and fuel payments, GPS tracking, finding loads and vehicle loans.",
            view: "**Fast growth, now profitable.** Revenue up 42%, 9 lakh monthly transacting users and new businesses scaling, with net cash. The price asks for about my ~30% estimate.",
            watch: 'Monthly users; loads business against Delhivery; vehicle finance turning profitable.',
        },
        {
            company: 'Matrimony.com', rank: 3, stance: 'HARVEST', segment: LISTINGS,
            what: "Runs BharatMatrimony and community matchmaking sites and apps, plus low-priced Jodii and small wedding services.",
            view: "**Cash machine, slow grower.** Profit more than doubled in Q1 and it converts all its profit into cash, but revenue grows about 13% and its CFO is leaving. The price needs a little more than my ~12% estimate.",
            watch: 'Revenue per subscription; the Q2 profit guidance; the new CFO.',
        },
        {
            company: 'Macfos', rank: 4, stance: 'SCALEUP', segment: B2B,
            what: "Runs Robu.in, an online store for electronic components, robotics and drone parts, and is starting to design its own products; SME-listed.",
            view: "**Fast growth, stock-heavy.** Like-for-like growth of 64–67% and steady 10–14% margins, but growing stock has eaten its cash for two years. The price asks for about my ~25% estimate; I want to see cash follow.",
            watch: 'Operating cash; own-product sales; defence drone orders.',
        },
        {
            company: 'TBO Tek', rank: 5, stance: 'PRICED', segment: B2B,
            what: "A marketplace where travel agents worldwide book hotels, flights and other travel; bought Classic Vacations, a US luxury-travel business.",
            view: "**Good platform, growth flattered.** Reported growth of 81% includes Classic Vacations; organic growth is about 15%. The price needs more than my ~20% estimate.",
            watch: 'Organic growth; integrating Classic Vacations; operating cash.',
        },
        {
            company: 'Swiggy', rank: 6, stance: 'TURNAROUND', segment: CONSUMER,
            what: "One of India's two big food-delivery apps, plus Instamart, which delivers groceries and household goods from small local warehouses within minutes.",
            view: "**Losses narrowing, not yet gone.** Instamart reached breakeven per order and the company expects to break even at the overall cash level within two quarters; it holds ₹7,526cr of net cash. It still loses money, so I have no estimate.",
            watch: 'Cash breakeven; Instamart margin as stores open; food margin toward 5%.',
        },
        {
            company: 'Urban Company', rank: 7, stance: 'TURNAROUND', segment: CONSUMER,
            what: "India's leading app for home services (cleaning, salon, repairs) plus Native water purifiers and InstaHelp, an on-demand house-help service.",
            view: "**Profitable core, costly new bet.** India services earn 6.9% and the rest of the group made ₹67cr, but InstaHelp lost ₹132cr in the quarter. It targets group adjusted breakeven by Q3 FY28.",
            watch: 'InstaHelp loss per order; core margin toward 9–10%; breakeven timing.',
        },
        {
            company: 'Pine Labs', rank: 8, stance: 'SCALEUP', segment: B2B,
            what: "Payments technology for shops, banks and brands: card and UPI terminals, online checkout, instalment offers at the till, and card-issuing software, in India and abroad.",
            view: "**Big network, thin profit.** About 20% growth and ₹7,813cr of net cash, but operating profit missed its own aim and most terminal payments are now low-fee UPI. Its profit is too small to value it on.",
            watch: 'Growth within its 21–23% guide; operating profit; software revenue.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Listings and subscriptions.** **Cartrade Tech: own.** **Matrimony.com: follow** for its cash and dividends.",
            "**Platforms for businesses.** **BlackBuck: own.** **Macfos: follow** until cash follows growth. **TBO Tek: wait** for a price that fits its organic growth. **Pine Labs: wait** for profit.",
            "**Delivery and home services.** **Swiggy: wait** for cash breakeven. **Urban Company: wait** for InstaHelp's losses to shrink.",
            "**What would change my view.** For the better: Swiggy reaching cash breakeven on time; Pine Labs' software growing faster than payments. For the worse: a new spending war in quick commerce; Delhivery winning BlackBuck's load customers.",
            "**What to watch next quarter.** CarTrade's margin; BlackBuck's monthly users; Swiggy's cash flow; Urban Company's InstaHelp loss; TBO's organic growth.",
        ],
        bottomLine:
            "Own the profitable leaders with free traffic and rising margins (Cartrade Tech, BlackBuck), follow the cash-rich or fast-growing smaller names (Matrimony.com, Macfos), and wait on the rest until profits prove themselves (TBO Tek, Swiggy, Urban Company, Pine Labs).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/CARTRADE/consolidated/' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
