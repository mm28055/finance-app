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
            'BlackBuck': 24,
            'Matrimony.com': 10,
            'Macfos': 20,
            'TBO Tek': 20,
            'Swiggy': null,
            'Urban Company': null,
            'Pine Labs': null,
        },
    },
    standfirst:
        "Eight internet platforms that earn a fee for connecting buyers and sellers. CarTrade runs car websites, OLX India classifieds and Shriram Automall auctions; Matrimony.com runs matchmaking sites. BlackBuck serves truck owners, TBO Tek serves travel agents, Pine Labs runs payment terminals and checkout for shops, and Macfos (SME-listed) sells electronics and drone parts online. Swiggy delivers food and groceries and Urban Company books home services; both still lose money. This edition was rebuilt from both earnings calls, the FY26 annual reports, rating reports from ICRA, CARE and CRISIL, and industry data from Redseer, Bernstein, NPCI, ICRA and the road ministry. The headline: the listing and business platforms are profitable and hold net cash, but the annual reports turned up a foreign-exchange rule case at TBO, a ₹214cr GST demand at Pine Labs, a lost brand name and a qualified governance certificate at Matrimony.com, and a customs notice of undisclosed size at Macfos, none of which came up on the calls. Several dashboard figures are the companies' own adjusted numbers rather than filed ones; this note says which it quotes. Every chart uses filed results and five years of history.",
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
                'Pine Labs': 'FY26 includes about ₹202cr of early-settlement (bill-discounting) inflows received in Q4, so the 110% flatters the underlying figure.',
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
            cellNotes: {
                'Pine Labs': 'Overstated: the cash counted includes about ₹5,570cr of merchants’ and card-holders’ money held in escrow. The company’s own net cash was ₹2,449cr at March 2026, about 7 times FY26 operating profit.',
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
            { company: 'Cartrade Tech', trend: 'widening', trendNote: 'Filed margin up from 16% (FY24) to 33% (FY26); Q1 FY27 profit up in all three businesses, OLX operating profit +76%; aims for margins above 40%.',
                grades: { network: { grade: 'A', note: 'Leading car sites, classifieds and auctions' }, brand: { grade: 'A', note: '95% of ~80m monthly visitors come free' }, switch: { grade: 'B', note: 'Dealers and banks use its auctions' }, econ: { grade: 'A', note: 'Margin up from 25% to 31% in a year' }, cash: { grade: 'A', note: '₹1,321cr cash; profit turns into cash' } } },
            { company: 'BlackBuck', trend: 'widening', trendNote: 'Toll payments growing 16% against low single digits nationally; loads and finance up 153%; but pre-tax profit fell 8% in Q1.',
                grades: { network: { grade: 'B', note: '9 lakh truck operators transact monthly' }, brand: { grade: 'B', note: 'Known to small truck owners' }, switch: { grade: 'B', note: 'Tolls, fuel, GPS and loans in one app' }, econ: { grade: 'B', note: 'Profitable since FY25; margin about 25%' }, cash: { grade: 'B', note: 'Net cash; converts profit to cash' } } },
            { company: 'Matrimony.com', trend: 'stable', trendNote: 'Profit more than doubled in Q1 as deferred revenue arrived; billing up only 7.8%; Jodii brand lost in court; CFO left.',
                grades: { network: { grade: 'A', note: 'Largest matchmaking member base' }, brand: { grade: 'A', note: 'BharatMatrimony and community sites' }, switch: { grade: 'C', note: 'Members leave once married' }, econ: { grade: 'B', note: 'Matchmaking margin about 27%' }, cash: { grade: 'A', note: 'Converts all profit to cash; pays dividends' } } },
            { company: 'Macfos', trend: 'stable', trendNote: 'About 67% like-for-like growth in FY26, slowing to 38% in Q1 FY27; own-designed products earn ~35% gross margin but are under 5% of sales.',
                grades: { network: { grade: 'C', note: 'A store, not a marketplace' }, brand: { grade: 'B', note: 'Robu.in known to students and start-ups' }, switch: { grade: 'C', note: 'Buyers can shop elsewhere' }, econ: { grade: 'B', note: 'Margins 10–14%, steady' }, cash: { grade: 'C', note: 'Stock growth eats the cash' } } },
            { company: 'TBO Tek', trend: 'stable', trendNote: 'Organic bookings +22% and organic adjusted operating profit +25%; integrating Classic Vacations; FEMA case pending.',
                grades: { network: { grade: 'A', note: 'Travel agents and hotels worldwide' }, brand: { grade: 'B', note: 'Known in the B2B travel trade' }, switch: { grade: 'B', note: 'Agents run bookings through it' }, econ: { grade: 'B', note: '27% of gross profit reaches adjusted operating profit' }, cash: { grade: 'B', note: 'Net cash; FY26 operating cash negative' } } },
            { company: 'Swiggy', trend: 'stable', trendNote: 'Instamart just short of breakeven per order (−0.2%) but losing 9.8% of order value after fixed costs; cash breakeven targeted within two quarters.',
                grades: { network: { grade: 'A', note: 'One of two food-delivery leaders' }, brand: { grade: 'A', note: 'Household name in cities' }, switch: { grade: 'C', note: 'Users switch apps for discounts' }, econ: { grade: 'C', note: 'Food profitable; group still losing' }, cash: { grade: 'C', note: '₹14,367cr cash, still burning' } } },
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
                "**Own CarTrade.** **CarTrade** (CarWale, BikeWale, OLX India and Shriram Automall) lifted its filed operating margin from 16% in FY24 to 33% in FY26, and in Q1 FY27 OLX revenue rose 29% and its operating profit 76%. About 95% of its visitors arrive without paid advertising, it holds ₹1,321cr of cash and no bank debt, and FY26 operating cash matched operating profit. Against that, Q1 revenue slipped 1% on the quarter, treasury income is about 30% of pre-tax profit, the cash has no payout policy, and the chairman's son and daughter hold senior roles. The price needs about 27% a year against my ~25%, which is a fair price for the best business here.",
                "**Follow BlackBuck, Matrimony.com and Macfos.** **BlackBuck**, the app 8.83 lakh truck operators use each month for tolls, fuel, tracking, loads and loans, grew revenue 42% and toll payments 16% (the national network grew in low single digits) at a 93% contribution margin. But pre-tax profit fell 8% as device depreciation more than doubled, profit after tax rose only on tax credits, a ₹22.4cr GST demand was upheld and Accel sold 1.48% in September. I have cut my estimate to ~24%, against about 27% the price needs, so I move it from own to follow. **Matrimony.com**'s Q1 profit rose 127.5%, as promised; it is paid up front, holds ₹342cr of cash and bought back shares in February. But the jump is mostly last year's one-year plans reaching revenue while marketing stayed flat: billing grew 7.8%, paid subscriptions have fallen three years running, a court forced it to drop the Jodii brand, and its second finance chief in 18 months left in August. The price needs about 16% a year against my ~10%. **Macfos** (Robu.in) grew about 67% like for like in FY26 at a 34% return on capital, but Q1 growth slowed to 38% with a lower margin, operating cash has been negative two years running, and a customs notice of undisclosed size is pending. The price needs about 22–23% a year against my ~20%.",
                "**Wait on TBO Tek, Swiggy, Urban Company and Pine Labs.** **TBO** finally showed operating leverage: organic adjusted operating profit rose 25% on 16% organic gross-profit growth, and cash rose ₹392cr. But reported growth of 81% leans on an acquisition and a weaker rupee, the Middle East is flat, and its auditor flags a foreign-exchange rule (FEMA) case in which the company itself found ₹71.2cr of breaches, with a penalty of up to three times that. The price needs about 28% a year against my ~20%. **Swiggy**'s food delivery earns 3.1% of order value, but Instamart lost 9.8%, Blinkit is three times its size and growing twice as fast, and within 90 days management reversed two May promises and lost the Instamart chief who made them. **Urban Company**'s core earns 6.9% of bookings and is speeding up, but InstaHelp lost ₹132cr in the quarter. **Pine Labs** grew revenue 20%, but adjusted operating profit only 4%; its price needs about 40% a year.",
                "**Three things to hold onto before reading the rest.** First, **a platform is only as good as its profit per order**: CarTrade, Matrimony.com and BlackBuck's payments earn money on each extra user, while Swiggy's Instamart and Urban Company's InstaHelp still pay to win users. Second, **check which profit is quoted**: every company here publishes an ‘adjusted’ figure that adds back share-based pay or other costs, sometimes far above the filed one. Pine Labs' FY26 adjusted EBITDA was ₹559cr against ₹358cr of filed operating profit, and CarTrade's Q1 ‘adjusted EBITDA’ includes ₹26cr of treasury income. This note uses filed figures unless it says otherwise. Third, **read the annual reports**: TBO's FEMA case, Pine Labs' GST demand, Swiggy's audit remarks, Matrimony.com's qualified governance certificate and Macfos's customs notice barely featured on the calls.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed results (all consolidated except Macfos). Several ratios break down for platforms, such as working capital at TBO and Pine Labs, where money passing through swamps revenue; those cells are blank with a note. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** Its stored quarterly records mix bases. Urban Company's rows use adjusted EBITDA (Q1 FY27 −₹65cr against a filed operating loss of ₹97cr) and show zero profit for three loss-making quarters. Pine Labs' Q1 row is its adjusted ₹126cr, its Q4 row the filed figure. CarTrade's Q1 row shows a 43.5% margin on ₹230cr because it uses total income and an EBITDA that includes treasury income; filed revenue was ₹201cr at 31%. BlackBuck's Q1 row is adjusted (₹55cr; filed ₹50cr). Five companies have zero rows for Q3 or Q4 FY26, and Macfos's ‘Q2 FY26’ row is really the first half. The charts use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Platforms earn a fee or a margin for connecting buyers and sellers; once built, each extra user costs little, so margins rise fast with scale, mainly for the leader. The eight here sit in six markets in very different places. **Online retail** reached about $80bn in FY26, up 21%, and quick commerce (groceries in minutes) grew about 120% to $13–14bn (Redseer). **Food delivery** is 11% of a roughly $90bn food-services market and Redseer expects it to grow 20–22% a year. **UPI** handled 24.51bn payments worth ₹29.82 lakh crore in August 2026, and from 15 October large merchant payments carry a fee for the first time since 2020. **Used cars** passed 6 million sales in FY26, up 8–10% (Crisil), and **highway tolls** rose 14.4% to ₹70,278cr (road ministry). **Travel** is in a shock from the West Asia war; Thomas Cook India's Q1 revenue fell 12%. **My view: the quick-commerce land grab is peaking and its leader is pulling away; the steady profit is in food delivery, classifieds, matchmaking and trucker payments; and two new rules, the UPI fee and the gig-worker levy, will shift revenue and costs within a year.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Buyers (households, travel agents, truck owners, shops) ↔ **the platform** ↔ sellers (restaurants, brands, hotels, car dealers, service professionals, banks). **Profit sits with platforms that neither hold stock nor employ riders.** In the latest quarter CarTrade earned 31% of revenue (filed), BlackBuck 33% of net revenue and Matrimony.com's matchmaking 26.9% (both company measures), while Zomato's food delivery earned 5.6% of order value and Swiggy's 3.1%. Quick commerce, which holds stock in dark stores and pays riders, is only just profitable for the leader: Blinkit earned 0.6% of order value in Q1 FY27, Instamart lost 9.8%, and Zepto lost ₹5,095cr in FY26 on ₹22,624cr of revenue. **My view: the further a platform moves into stock and delivery, the more it looks like a retailer, with a retailer's margins.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Formalisation and convenience.** Redseer counts 320–340 million Indians buying online each year, and expects quick and value commerce to pass 40% of online retail by FY30, from about 30% now. E-way bills (permits that track goods moved by truck) reached 139 million in August 2026, up 7.7%, which feeds BlackBuck. The GST cut of September 2025 lifted commercial-vehicle wholesales 23.4% in April–August 2026 (ICRA), good for CarTrade's advertisers and auctions. Only 20–25% of used-car buyers get an organised loan (CarTrade), so vehicle loans are open ground. Online matrimony, a ₹1,200–1,400cr market, should grow 10–12% a year to 2030 (Redseer), against 4–5% for offline matchmakers. **My view: demand is real in every one of these markets; the question is how much each company can charge for.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Three rule changes matter.** First, from 15 October 2026 merchants pay 0.4% on UPI payments above ₹2,000 (capped at ₹300); merchants taking up to ₹1 lakh a month, about 96% of merchant transactions, are exempt. Industry estimates put the pool at ₹5,000–30,000cr a year, split among banks, apps and acquirers in shares NPCI has not fixed. **Pine Labs**, whose UPI payments average over ₹1,400, is the obvious gainer. Second, the social-security code makes delivery platforms pay 1–2% of turnover, capped at 5% of gig-worker pay; the rules came on 8 May 2026 but the rate and start date did not. JM Financial's worst case is ₹2–3 an order (about ₹26cr for Swiggy on FY26 volumes), probably passed on in fees; Karnataka's own 1% fee is already being paid into court. Third, FSSAI took penal action against Instamart, BigBasket and Zepto over misbranded food on 23 September. Two **cycles** are turning: ICRA expects commercial-vehicle sales to fall year on year in H2 FY27, and West Asia keeps TBO's best market flat. **My view: the UPI fee is the biggest positive policy change for this group in years, but nobody can size Pine Labs' share until NPCI fixes the split.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**CarTrade** on OLX buyers accepting paid plans and on earning a fee per car sold (the Spinny deal); **BlackBuck** on toll growth outrunning a slowing truck cycle and on Superloads and lending paying off; **Matrimony.com** on billing growth returning to double digits through the Jodii rebrand; **Macfos** on India's electronics and drone makers and on turning stock into cash; **TBO** on Middle East travel recovering and Classic Vacations being integrated by end-2026; **Swiggy** on Instamart closing a ₹30-an-order gap to break-even against a much larger Blinkit; **Urban Company** on InstaHelp's losses shrinking while its core keeps growing; **Pine Labs** on its share of the new UPI fee and on margins recovering after Q1's upfront spending. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year free cash ÷ revenue', 'Why'],
                    rows: [
                        ['Listings and subscriptions', 'CarTrade, Matrimony.com', '10–37%', '12–17%', '**12–20%**', 'Free or paid-once traffic; no stock; customers pay up front'],
                        ['Platforms for businesses', 'BlackBuck, Macfos, TBO Tek, Pine Labs', '7–28%', '4–34%', '**−15% to 10%**', 'Devices (BlackBuck, Pine Labs), stock (Macfos) and agent credit (TBO) tie up cash'],
                        ['Delivery and home services', 'Swiggy, Urban Company', '−28% to −4%', '−24% to −8%', '**−27% to −17%**', 'Core services profitable; new bets (Instamart, InstaHelp) burn cash'],
                    ],
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Market', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Online retail', '~$80bn of sales in FY26, +21%; 320–340m buyers', 'Quick plus value commerce above 40% of online retail by FY30', 'Redseer, May 2026'],
                        ['Quick commerce', '$13–14bn in FY26, ~120% growth; ~70% of online grocery', '**~80% growth in 2026** (Bernstein); 25–30% of online retail by FY30 (Redseer)', 'Bernstein, Jan 2026; Redseer'],
                        ['Food services and delivery', '~$90bn; online delivery 11% of it', 'Online **20–22% a year**, to an 18% share by FY30–31', 'Redseer, Jul 2026'],
                        ['UPI payments', '24.51bn payments, ₹29.82 lakh crore in Aug 2026; +22% by volume', '0.4% fee above ₹2,000 from 15 Oct 2026; pool ₹5,000–30,000cr a year', 'NPCI via Medianama; Business Standard, Tech Times, Sep 2026'],
                        ['Used cars', 'Over 6m sold in FY26, +8–10%', '**About 10% a year**, to 9.5m by 2030', 'Crisil; Indian Blue Book (Mahindra First Choice)'],
                        ['Highway tolls and freight', 'FASTag tolls ₹70,278cr in FY26 (+14.4%); e-way bills +7.7% (Aug 2026)', 'CV wholesales **+4–6% in FY27**, falling year on year in H2', 'Road ministry; ICRA, Sep 2026'],
                        ['Outbound travel', '9.77m departures in Jan–Mar 2026, above arrivals', 'No reliable forecast; the West Asia war is diverting trips', 'DGCA via TravTalk; HVS'],
                        ['Online matrimony', '₹1,200–1,400cr (2025); offline ₹4,500–5,000cr', '**10–12% a year**, to ₹2,300–2,500cr by 2030', 'Redseer'],
                        ['Gig-worker levy', '1–2% of turnover, capped at 5% of gig pay; rules notified 8 May 2026', 'Rate and start date not set; worst case ₹2–3 an order', 'Ministry of Labour; JM Financial'],
                    ],
                    note: 'Dollar figures are the forecasters’ own. Each forecaster measures differently, so compare each only with itself.',
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
                    text: "**CarTrade** gets 95% of its roughly 80 million monthly visitors without paid advertising and says 63% of India's used-car sellers list on OLX, where buyers outnumber sellers six or seven to one. That is how its margin climbed from 9% in FY23 to 33% in FY26 without raising prices: management admits dealer lead prices are ‘pretty static’. **Matrimony.com** claims the largest share of organised matchmaking and reported 25,500 marriages in Q1. Its price per subscription rose 11.9% in FY26, some pricing power, but fell 6.7% on the quarter in Q1 as it leaned on discounts. Before marketing its matchmaking margin is 63%; after about ₹180cr a year of advertising (39% of revenue) it is 26.9%. **My view: CarTrade's moat is free traffic; Matrimony.com's has to be bought again every year.**",
                },
                {
                    label: 'Lasting if they keep adding services: trucking',
                    text: "**BlackBuck**'s toll payments grew 27% in FY26 against about 16% for commercial vehicles on the national network, and 16% in Q1 against low single digits, so it is taking share. Truck owners using two or more of its services rose 19% to 4.59 lakh, and over 70% renew their tracking device the first time, rising to the 80s later. ICRA puts it with about 20% of India's truck operators, with no scaled digital rival. The limit is that the regulator sets the price: NHAI cut FASTag programme fees from 1.5% to 1.0% in 2022. Delhivery says it may enter tolling, fuel and truck finance; management calls the threat low. **My view: a real habit moat in payments, unproven in loads and loans, whose profits it will not yet disclose.**",
                },
                {
                    label: 'Switching costs: payments and travel',
                    text: "**Pine Labs**' CEO says replacing it at a bank or large retailer is ‘a 9-month effort’. It claims more than 60% of enterprise merchants, won all three oil companies' fuel pumps (about 1.3 lakh terminals by end-FY27) and wins 85–90% of new Indian gift-card programmes. But the fee it keeps per rupee keeps falling with mix, and one client taking bill payments in-house cut its digital-infrastructure payment value growth to 4% in Q1. **TBO** serves about 50,000 agents, and each year's new agents roughly double their business the next year. Its Europe hotel bookings rose 37% and Asia-Pacific 56% in Q1 while those markets barely grew, which is share gain; but it cut Middle East margins to hold volume, and organic hotel gross profit slipped from 5.5% to 5.2% of bookings. **My view: both have real switching costs; neither has much power over price.**",
                },
                {
                    label: 'Strong brands, weak lock-in: consumer apps',
                    text: "**Swiggy**'s one-month retention rose to 61% from 55%, and Instamart earns ₹108 per order against ₹83 five quarters ago from brand margins, ads and restored fees. But scale is moving the other way: Blinkit's order value grew 86% to ₹17,132cr in Q1 against Instamart's 38.9% to ₹5,817cr (3% on the quarter), Bernstein says Zepto overtook Instamart on users, orders and stores, and Instamart's 1,089 orders per store a day sit below Redseer's 1,200–1,400 break-even band. **Urban Company** is stronger: 83% of FY26 bookings came from returning customers, and core growth sped up from 10% to 29% within a year while marketing stayed flat at about ₹25cr a quarter. But in InstaHelp, where rivals also subsidise, its average order fell from ₹150 to ₹138. **My view: Urban Company's core has a moat; Instamart is a distant number two in a scale game.**",
                },
                {
                    label: 'Barely a moat: reselling',
                    text: "**Macfos** stocks about 1.07 lakh products (1,06,981 on its June slide) and says no Indian rival covers all its segments. But CRISIL records its operating margin falling from 16.4% in FY22 to 9.6% in FY25 as competitors discounted, and the boards it sells are standard products. Its own designs earn about 35% gross margin against 24–25% for resale, but were under 5% of revenue at the last disclosure. **My view: range and speed are an edge, not yet a moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Eternal (Zomato and Blinkit)**, **Zepto**, **Flipkart Minutes** and **Amazon Now** (each with 1,000-plus or planned 1,000-plus dark stores) and **JioMart** against Swiggy; **CarDekho**, **Cars24** and **Spinny** (now also a partner) in cars; **Shaadi.com** and **Jeevansathi** in matchmaking; **PhonePe** and **Google Pay** (about 80% of UPI volume), **Paytm** and **Razorpay** in payments; **Hotelbeds** and **WebBeds** against TBO; **Delhivery** against BlackBuck; **Snabbit** and **Pronto** in house help; **Digi-Key** and local electronics markets against Macfos.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the listing businesses, largely yes; for the business platforms, rising but flattered in places; for the delivery apps, not yet.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: the cost of one more user is tiny',
                    text: "**CarTrade**'s filed margin was 33% in FY26 and 31% in Q1 FY27, down from 35% in Q4 because pay rises land each April; management says 31% ‘will get surpassed’ in Q2–Q4 and aims for a ‘40-40’ company (40% profit growth, margins above 40%). Two cautions: treasury income is about 30% of pre-tax profit, and 44.57% of Shriram Automall's profit belongs to minority holders (₹21cr of FY26's ₹244cr). **Matrimony.com**'s margin jumped from 11% to 20% in Q1, but mostly because about ₹28cr of FY26 billing on one-year plans is now reaching revenue while marketing held at ₹46.5cr; its FY26 matchmaking margin fell to 19% from 20.5%. **BlackBuck**'s 93% contribution margin, with 60–85% of extra core revenue reaching operating profit, is the clearest structural economics here. **My view: CarTrade's and BlackBuck's payment margins are structural; Matrimony.com's Q1 is a catch-up, not a new level.**",
                },
                {
                    label: 'Rising, with caveats: business platforms',
                    text: "**BlackBuck** earns 24–28% on filed figures, but its adjusted margin on net revenue fell to 33% from 36% and depreciation rose from ₹9cr to ₹23cr, so pre-tax profit fell 8%. **TBO** turned 27.5% of organic gross profit into adjusted operating profit, up from 23.5% in Q4, but Classic Vacations earns only about 2.5% of bookings over a year, and depreciation doubled to ₹33cr and interest reached ₹15cr. **Pine Labs** earned 13% filed and 17.1% adjusted in Q1; contribution was 72.3%, below its own 73–75% band, after front-loaded cloud, network and sales spending, and its tax rate was 46% because new overseas units lose money. Management says the FY27 adjusted margin will not fall below FY26's 21%. **My view: operating leverage is real at TBO and BlackBuck, but depreciation, interest and tax are eating the gains below the operating line.**",
                },
                {
                    label: 'Not yet structural: delivery and home services',
                    text: "**Swiggy**'s food delivery earns 3.1% of order value against a 5% target. Instamart's contribution (profit per order before fixed costs) was −0.2% and its adjusted EBITDA −9.8% of order value; management says it breaks even at about ₹60,000cr of annualised order value (about two and a half times today's) and needs about ₹30 more per order: ₹10 from brand margins and mix, ₹10 from ads, ₹5 from denser stores and ₹5 from operating leverage. Nomura expects Instamart to lose ₹3,100cr in FY27 and ₹2,300cr in FY28. Nearly half of Swiggy's reported revenue (₹3,195cr of ₹6,812cr in Q1) is low-margin wholesale supply to Instamart sellers. **Urban Company**'s core margin of 6.9% is its seasonal high (3.3% in Q4) against a 9–10% target, and InstaHelp, losing ₹346 an order, needs an average order of about ₹300 against ₹138 today. **My view: food delivery and Urban Company's core are real businesses; Instamart and InstaHelp are still investments.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Macfos** holds 122 days of stock (95–98 before FY25) and its cash cycle reached 113 days; operating cash was −₹25cr in FY25 and −₹8cr in FY26, and borrowings rose from ₹8cr to ₹20cr to ₹36cr in two years. The managing director says debt ‘converts into inventory’, and slow-moving stock is 5.5% of the total. **Swiggy**'s debtor days rose from 31 to 64 in two years and payable days fell from 111 to 83; its Q4 letter blamed longer collection cycles.",
                },
                {
                    label: 'Working capital: flattered or lumpy',
                    text: "**Pine Labs**' FY26 operating cash of ₹395cr (71% of adjusted EBITDA) included about ₹202cr of early-settlement inflows in Q4, a form of bill discounting; debtor days rose to 140, working capital was 16% of revenue in Q1 against an aim of 15% or less, and its auditor found that debtor figures sent to banks (₹1,900cr for September 2025) differed from its books (₹1,770cr). **TBO**'s FY26 operating cash was −₹21cr, because it stopped discounting Brazilian receivables, supplier incentives built up and war-hit Eid collections slipped; cash then rose ₹392cr in Q1 and management promises cash conversion above 100% by FY27-end.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Matrimony.com** is paid up front (working-capital days −47) and turned 147% of FY26 operating profit into operating cash. **CarTrade** converted 100% in FY26 with almost no capex. **BlackBuck** runs negative working capital (−22 days), collecting about half its tracking-device revenue a year in advance, and converted 101% in FY26. **Urban Company** is paid before it pays partners, so its cash cycle is −93 days.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "TBO's bookings (₹11,154cr in Q1) are twelve times its revenue, and Pine Labs holds about ₹5,570cr of merchants' and card-holders' money in escrow, so ordinary working-capital ratios mean little for either; delivery apps and Urban Company collect before paying restaurants and partners, so their cycles are naturally negative. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Cartrade Tech', 'Cash and investments ₹1,321cr, no debt; capital return possible in ‘two to three years’', 'Borrowings ₹140cr, all leases (Screener, March)'],
                        ['BlackBuck', 'No numbers given; ICRA counted ₹1,025cr of cash and liquid investments (Sep 2025)', 'Borrowings ₹59cr (March); FY26 operating cash ₹169cr'],
                        ['Matrimony.com', 'Cash and investments ₹342cr; ₹58.5cr buyback at ₹655 done in Feb; 30% payout', 'No bank debt; leases ₹49cr'],
                        ['Macfos', 'No Q1 call; in Oct 2025, ‘not going to be debt-free for the next 2 or 3 years’', 'Borrowings ₹36cr (March); FY26 operating cash −₹8cr'],
                        ['TBO Tek', 'Cash ₹1,984cr, up ₹392cr; $70m loan repayments start in Q3 FY27', 'Borrowings ₹756cr (March); FY26 operating cash −₹21cr'],
                        ['Swiggy', 'Cash ₹14,367cr (₹15,053cr in March); cash break-even targeted within two quarters', 'No debt instrument; ₹2,551cr Screener borrowings are mostly leases'],
                        ['Urban Company', 'Cash and treasury investments ₹2,019cr, flat on March; free cash −₹44cr', 'Leases ₹136cr only'],
                        ['Pine Labs', 'Working capital 16% of revenue against ≤15% aim; net cash ₹2,449cr at March (June investor day)', 'Plus ~₹5,570cr of client money in escrow, not the company’s'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May, and my own estimate of earnings growth. None of these businesses needs much capex; the spending that matters is on devices (BlackBuck, Pine Labs), dark stores (Swiggy), stock (Macfos) and acquisitions (TBO).",
            ],
            points: [
                {
                    label: 'Growth driver: used cars and classifieds',
                    text: "**CarTrade** wants to earn on transactions, not just listings. OLX's paid ‘Elite Buyer’ plan passed 1 lakh buyers in a month and heavy business buyers are being moved to paid plans; the Spinny deal (29 July 2026), large dealer groups and 550 abSure outlets aim to earn a fee per car sold without holding stock, and IDFC First Bank lends to its used-car buyers for a 2–3% fee. The used-car market grows only about 10% a year to 2030 (Indian Blue Book), so the rest must come from charging for more of it. The goal of about ₹1,000cr of profit in four to five years is four times FY26, or 33–42% a year (my calculation). **My view: credible, but Elite Buyer and Spinny revenue are undisclosed, so I cannot yet check it.**",
                },
                {
                    label: 'Growth driver: payments rails for trucks and shops',
                    text: "**BlackBuck**'s ‘growth’ businesses (Superloads load-matching and vehicle finance) brought in ₹59cr in Q1, up 153%, against ₹145cr from payments and tracking, up 21%. Superloads runs in 14 cities; a hub matures at about 5,000 loads a month and the first is ‘more than halfway’. Vehicle finance manages about ₹600cr of loans, mostly on partners' books, and should be profitable by end-FY27. **Pine Labs** keeps its FY27 revenue guide of 21–23.5%, helped by 500 new salespeople and the fuel-pump contract; the UPI fee from October is upside outside the guide. **My view: both have visible growth; BlackBuck's depends on businesses it will not break out for three or four quarters.**",
                },
                {
                    label: 'Growth driver: new consumer services',
                    text: "**Swiggy** plans about 75 new dark stores in Q2 FY27, more than in the previous four quarters combined, and in August shareholders approved the change in foreign-ownership status that lets Instamart hold its own stock over two to four quarters, worth ₹4–5 an order. **Urban Company** is growing faster in smaller cities (36% against 29% in the top ten), abroad (76% excluding Saudi Arabia) and in Native (51%), and sizes InstaHelp's market in the top 15 cities at ₹7,000–12,000cr of bookings. **My view: both are buying growth with cash they have; the test is whether losses shrink with scale, and at Instamart they are not yet.**",
                },
                {
                    label: 'Growth driver: travel and electronics',
                    text: "**TBO** aspired in May to growth in the ‘early to mid-20s’; before the war its gross profit grew in the mid-to-high 20s. Classic Vacations should be on TBO's platform by end-2026, after which each can sell the other's hotels, and a Middle East recovery is ‘optionality’. **Macfos** puts India's electronics-parts market at about ₹10,000cr by 2030 (its own estimate), promised about 50% growth for two to three years in October 2025, and says it will know within two years whether it is ‘in or out’ of defence drones. **My view: TBO's growth is steadier than its reported figures suggest; Macfos's is slowing from a high rate.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**TBO** promised Q1 would beat Q4 and the year-earlier quarter: adjusted EBITDA was ₹150cr against ₹111cr and ₹85cr, and cash recovered. **Matrimony.com** promised profit ‘more than doubling’ with double-digit revenue growth and flat marketing, and delivered +127.5%, +13.2% and ₹46.5cr. **CarTrade** promised OLX would speed up from Q4's 16% and margins would rise in every business; OLX grew 29% and all three improved. **Urban Company** kept its targets, lifted core margin 170 basis points on the year and narrowed Native's loss.",
                },
                {
                    label: 'Cautious',
                    text: "**BlackBuck** gives no numbers. It warned in May that the West Asia conflict and suspended fuel loyalty schemes would hurt, and they did: payments and tracking revenue rose only 1% on the quarter and toll value fell 1%. Its growth businesses beat the May tone (+44% on the quarter), but fuel has only partly recovered. **Macfos** held no Q1 call, so there is no updated guidance at all.",
                },
                {
                    label: 'Missed',
                    text: "**Pine Labs** pre-warned that Q1 would be at the low end of its 21–23.5% range and grew 20%; adjusted EBITDA was ₹126cr against the ₹135–140cr the CEO wanted, contribution margin 72.3% against 73–75%, and working capital 16% against 15% or less. **Macfos** promised about 50% growth and an ~8% profit margin; Q1 delivered 38% and 7.1%, and its operating margin fell 1.6 points.",
                },
                {
                    label: 'Mixed',
                    text: "**Swiggy** promised Instamart contribution break-even ‘latest by Q1 FY27’ for the full quarter; it got there in May but printed −0.2% for the quarter, a narrow miss. It also reversed two May promises within 90 days: ‘no contribution margin dilution’ became a 0 to −1% range, and ‘no necessity to add stores’ became about 75 new stores. Capex, meant to ‘meaningfully come down’, was ₹195cr against ₹188cr in Q4, and food grew 17.4% against an 18–20% guide.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect CarTrade to compound earnings at about 25%, BlackBuck at about 24%, TBO and Macfos at about 20% and Matrimony.com at about 10%.** These are lower than a quarter ago for BlackBuck (from 30%: pre-tax profit fell 8% and its tax credits will run out), Macfos (from 25%: growth slowed to 38% while cash stays negative) and Matrimony.com (from 12%: paid subscriptions falling, billing up only 7.8% and a forced rebrand). TBO's 25% organic operating-profit growth supports my 20%. Swiggy, Urban Company and Pine Labs make too little filed profit to estimate from.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Cartrade Tech', 'OLX paid plans; fee per car sold; margin toward 40%', '16% / **25%** / 32%'],
                        ['BlackBuck', 'Toll share gains; Superloads and finance; tax credits ending', '15% / **24%** / 30%'],
                        ['TBO Tek', 'Organic hotel growth; Classic Vacations; Middle East recovery', '12% / **20%** / 26%'],
                        ['Macfos', 'Parts demand; own products; stock turning to cash', '12% / **20%** / 26%'],
                        ['Matrimony.com', 'Billing growth; marketing held flat; Jodii rebrand', '4% / **10%** / 14%'],
                        ['Swiggy', 'Instamart scale; food margin to 5%', 'Loss-making; too early to estimate'],
                        ['Urban Company', 'InstaHelp losses; core margin to 9–10%', 'Loss-making; too early to estimate'],
                        ['Pine Labs', 'UPI fee; software; margin recovery', 'Profit too small to estimate from'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Cartrade Tech', 'Margin above 31% in Q2–Q4; ‘40-40’ goal; ~₹1,000cr profit in 4–5 years', 'Little (₹27cr in FY26)', '**Delivered**: OLX +29% against a promised step-up; all segments’ margins up; payout still years away'],
                        ['BlackBuck', 'No numbers; vehicle finance profitable by end-FY27; Superloads figures in 3–4 quarters', 'Tracking devices, ₹60–80cr a year (ICRA)', '**Mixed**: warned slowdown bit (core +1% on quarter); growth arms +44%; pre-tax profit −8%'],
                        ['Matrimony.com', 'Q2: double-digit billing and revenue growth; profit similar to or above Q1', 'Little', '**Delivered**: profit +127.5% as promised; billing +7.8%, low end'],
                        ['Macfos', 'No Q1 call; ~50% growth for 2–3 years (Oct 2025); ~8% profit margin', 'Small; bigger warehouse under study', '**Missed**: Q1 +38%; profit margin 7.1%'],
                        ['TBO Tek', '‘Early to mid-20s’ growth; cash conversion above 100% by FY27-end; integration by end-2026', 'Capitalised technology; Classic Vacations ($110m)', '**Beat**: adjusted EBITDA ₹150cr against ₹111cr in Q4; cash +₹392cr'],
                        ['Swiggy', 'Cash break-even within two quarters; Instamart margin 0 to −1%; ~75 new stores', '₹195cr in Q1 (was to fall)', '**Reversed**: ‘no dilution, no new stores’ dropped; Instamart −0.2% against break-even'],
                        ['Urban Company', 'Adjusted break-even by Q3 FY28; ₹1,000cr adjusted EBITDA by FY31; core 9–10%', 'Small (₹14cr in Q1)', '**On track**: core margin 6.9%; InstaHelp loss up to ₹132cr, as warned'],
                        ['Pine Labs', 'Revenue +21–23.5% (kept); FY27 adjusted margin no lower than 21%', '₹180–190cr a year, mostly terminals', '**Missed**: +20%; adjusted EBITDA ₹126cr against ~₹140cr hoped'],
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
                    label: 'A spending war in quick commerce',
                    text: "Blinkit, Zepto, Flipkart Minutes, Amazon Now and BigBasket are all adding dark stores, and Blinkit's cost per store has risen from ₹1cr to ₹2.5cr. Bernstein called 2026 ‘another year of discovery, not profits’; Eternal called Q1 FY27 ‘the peak of competitive intensity’. **Swiggy** has chosen to spend, guiding Instamart's contribution to 0 to −1%, and Macquarie calls its path to profit ‘unclear’. One hopeful sign: Zepto paused its listing in July after investors valued it at $2.5–3bn against $7bn in October 2025, which should make rival funding harder. **If funding dries up, the leaders gain; if it returns, Instamart's losses last longer.**",
                },
                {
                    label: 'Legal and tax cases found in the annual reports',
                    text: "**TBO**'s auditor highlights a FEMA case: the Enforcement Directorate alleges ₹49.4cr of foreign agents' payments were accepted in rupees from third parties, the company itself found ₹71.2cr of breaches, the RBI twice refused to approve them after the fact (April and September 2025), and the maximum penalty is three times the amount. The ruling is pending, and CARE lists an adverse outcome as a downgrade trigger. **Pine Labs** faces a ₹214cr GST demand over gift-card input credits, stayed by the Karnataka High Court, and estimates ₹138cr of possible interest across its tax cases. **Swiggy** has a ₹327cr GST notice (stayed) and a competition-commission investigation. **Urban Company**'s GST contingent liabilities doubled to ₹116cr, **BlackBuck** lost a ₹22.4cr GST appeal in August, and **Macfos** has a customs notice it does not quantify.",
                },
                {
                    label: 'Governance and people',
                    text: "**Matrimony.com** lost its CFO in August; the previous one left in February 2025 and the post stayed empty beyond SEBI's three-month limit, earning a qualified corporate-governance certificate. The managing director's shares are pledged, and a court forced it to drop the Jodii brand. **Swiggy**'s Instamart CEO resigned after the Q4 call; its auditor found no database-level audit trail for some revenue records and flagged a fraud report at subsidiary Swiggy Networks without details. **BlackBuck** lost its people, product and company-secretary heads within six months, and in FY25 booked a ₹390cr charge when share-conversion terms changed in favour of promoter directors. **CarTrade** has no promoter group, but its chairman is paid 175 times the median employee, his son is chief strategy officer and OLX chairman, and his daughter joined the board in 2025. **Pine Labs**' auditor found debtor figures given to banks that differed from its books.",
                },
                {
                    label: 'Profits lifted by tax, treasury income and add-backs',
                    text: "**BlackBuck**'s profit after tax rose 25% in Q1 while pre-tax profit fell 8%, because a deferred-tax asset of about ₹255cr from past losses shelters its tax; that ends once the losses are used. **CarTrade** earns about 30% of pre-tax profit from treasury income. **Matrimony.com**'s Q1 doubling is largely deferred revenue catching up. **Urban Company** still carries ₹151.5cr of deferred-tax assets after reversing ₹60cr in FY26, and more reversals follow if InstaHelp keeps it loss-making. **Pine Labs**' adjusted EBITDA runs about 55% above filed operating profit. **Use filed profit after tax as the common yardstick.**",
                },
                {
                    label: 'Early investors selling',
                    text: "Accel sold 1.48% of **BlackBuck** on 12 September, where promoters hold only 25%, and 1.3% of **Urban Company** in an August block deal alongside Vy Capital and Bessemer (SBI Mutual Fund bought 2.04%). A pre-IPO holder cut its **TBO** stake from 5.54% to 3.50% in July. Venture funds selling after a lock-up is normal, but it caps prices while it lasts, and Urban Company's promoters own only 19%.",
                },
                {
                    label: 'Cycles and policy',
                    text: "ICRA expects commercial-vehicle sales to fall year on year in H2 FY27, which would slow **BlackBuck**'s customers and **CarTrade**'s auctions. The West Asia war left **TBO**'s Middle East hotels flat and its India hotels down 2%. The gig-worker levy's rate is still unset, and Karnataka's 1% fee is already being paid into court (**Swiggy**, **Urban Company**). NHAI has cut FASTag issuer fees before and could again (**BlackBuck**). The UPI fee's split among banks, apps and acquirers is undecided (**Pine Labs**).",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **16% at 25x, 22–23% at 44x, 27% at 61–65x, 28% at 69x and 40% at 168x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Most of these companies hold large cash, so their businesses are cheaper than their P/Es suggest: CarTrade's ₹1,321cr is about 9% of its market value, Urban Company's ₹2,019cr about 8% and Swiggy's ₹14,367cr about 19%. **Pine Labs is the exception to trust least**: the net cash in the live table includes about ₹5,570cr of merchants' and card-holders' money held in escrow. The company's own net cash was ₹2,449cr at March 2026, so its real EV/EBITDA is higher than the table shows.",
                },
                {
                    label: 'Fits: a price that asks for about what I expect',
                    text: "**CarTrade** needs about 27% a year against my ~25%, the only name here that fits. That is a fair price for a business with free traffic and rising margins, but it leaves no room for a stumble at OLX. **I would buy CarTrade at this price.**",
                },
                {
                    label: 'Full',
                    text: "**BlackBuck** needs about 27% a year against my ~24%, and **Macfos** about 22–23% against my ~20%: good businesses priced a little ahead of what the Q1 evidence supports. I would add to BlackBuck after a quarter of rising pre-tax profit, and to Macfos when operating cash turns positive. **Matrimony.com** needs about 16% against my ~10%, at the edge of Stretched: the price already counts the FY27 profit rebound, and the 30% dividend and buybacks support it but do not close the gap.",
                },
                {
                    label: 'Stretched',
                    text: "**TBO Tek** needs about 28% a year against my ~20%. Organic adjusted operating profit grew 25% in Q1, so the gap is smaller than it looked, but the price also ignores the FEMA case and a Middle East that may stay weak. I would want organic gross profit back above 20% growth before paying this.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Swiggy** and **Urban Company** lose money, so they have no P/E. Swiggy's value of about ₹76,800cr against ₹14,367cr of cash asks Instamart to grow its order value about two and a half times, toward the ₹60,000cr run-rate at which it breaks even; Urban Company's asks the core to compound at 25% or more while InstaHelp's losses shrink on schedule. **Pine Labs**' profit is so small that its price needs about 40% a year; the UPI fee is the one thing that could close that gap quickly.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Cartrade Tech', rank: 1, stance: 'COMPOUNDER', segment: LISTINGS,
            what: "Runs CarWale and BikeWale for new-vehicle research, OLX India classifieds for used cars and other goods, and Shriram Automall vehicle auctions.",
            view: "**Operating leverage, proven.** The filed margin rose from 16% to 33% in two years, OLX grew 29% in Q1 with operating profit up 76%, 95% of traffic is free and it holds ₹1,321cr of cash with no debt. But revenue slipped 1% on the quarter, 30% of pre-tax profit is treasury income, there is no payout policy and the chairman's children hold senior roles. The price needs about 27% a year against my ~25%.",
            watch: 'Margin above 31% in Q2–Q4; disclosed Elite Buyer and Spinny revenue; a dividend or buyback policy.',
        },
        {
            company: 'BlackBuck', rank: 2, stance: 'SCALEUP', segment: B2B,
            what: "An app for small truck owners: toll (FASTag) and fuel payments, GPS tracking, finding loads (Superloads) and vehicle loans.",
            view: "**Fast growth, flattered profit.** Revenue rose 42%, toll payments are taking share at a 93% contribution margin, and 8.83 lakh operators transact monthly. But pre-tax profit fell 8% on device depreciation, profit after tax rose only on tax credits, a ₹22.4cr GST demand was upheld and Accel is selling. The price needs about 27% a year against my ~24%, so I follow rather than own.",
            watch: 'Pre-tax profit growth returning; fuel and toll volumes as the truck cycle slows; Superloads figures and Delhivery pricing.',
        },
        {
            company: 'Matrimony.com', rank: 3, stance: 'HARVEST', segment: LISTINGS,
            what: "Runs BharatMatrimony and 15-plus community matchmaking sites, low-priced Jodii (being renamed after a court order) and Love.com, plus small wedding-services ventures.",
            view: "**Cash machine, slow grower.** Q1 profit rose 127.5% as promised and it is paid up front, with ₹342cr of cash, a buyback and a 30% payout. But billing grew only 7.8%, paid subscriptions have fallen three years, the Jodii brand was lost in court and a second CFO left, after a qualified governance certificate. The price needs about 16% a year against my ~10%.",
            watch: 'Double-digit billing growth in Q2 as guided; sign-ups after the Jodii rebrand; a permanent CFO.',
        },
        {
            company: 'Macfos', rank: 4, stance: 'SCALEUP', segment: B2B,
            what: "Runs Robu.in, an online store for about 1.07 lakh electronic components, robotics and drone parts, and is starting to design its own products; SME-listed.",
            view: "**Fast growth, stock-heavy.** FY26 grew about 67% like for like at a 34% return on capital, but Q1 slowed to 38% with a lower margin, operating cash was negative for two years and debt rose to ₹36cr. A customs notice of undisclosed size is pending. The price needs about 22–23% a year against my ~20%; I want to see cash follow.",
            watch: 'Operating cash turning positive; growth back above 45%; the size of the customs claim.',
        },
        {
            company: 'TBO Tek', rank: 5, stance: 'PRICED', segment: B2B,
            what: "A marketplace where about 50,000 travel agents worldwide book hotels, flights and other travel; bought Classic Vacations, a US luxury-travel wholesaler, in October 2025.",
            view: "**Good platform, legal overhang.** Reported revenue rose 81%, but organic bookings rose 22% and organic adjusted operating profit 25%, and cash rose ₹392cr. A FEMA case with a penalty of up to three times ₹71.2cr is pending, and the Middle East is flat. The price needs about 28% a year against my ~20%.",
            watch: 'The FEMA adjudication; organic gross-profit growth back above 20%; Classic Vacations on TBO\'s platform by end-2026.',
        },
        {
            company: 'Swiggy', rank: 6, stance: 'TURNAROUND', segment: CONSUMER,
            what: "One of India's two big food-delivery apps, plus Instamart, which delivers groceries and household goods from about 1,170 small local warehouses within minutes.",
            view: "**Food profitable, Instamart losing ground.** Food delivery earns 3.1% of order value and the company holds ₹14,367cr of cash. But Instamart lost 9.8% of order value, grew 3% on the quarter against Blinkit's much faster growth, and management reversed its May promises and lost the Instamart chief within 90 days. It still loses money, so I have no estimate.",
            watch: 'Cash break-even within two quarters, as targeted; Instamart order value growing 10%+ a quarter inside a −1% margin; the gig-levy rate.',
        },
        {
            company: 'Urban Company', rank: 7, stance: 'TURNAROUND', segment: CONSUMER,
            what: "India's leading app for home services (cleaning, salon, repairs), plus Native water purifiers and InstaHelp, an on-demand house-help service.",
            view: "**Profitable core, costly new bet.** Core India bookings grew 29% at a 6.9% margin with flat marketing, and the group excluding InstaHelp made ₹67cr of adjusted profit. But InstaHelp lost ₹132cr in the quarter and management expects no profit from it for five years. It targets group adjusted break-even by Q3 FY28, with ₹2,019cr of cash to fund it.",
            watch: 'InstaHelp\'s absolute loss, not just per order; core margin in the weaker Q2; further deferred-tax reversals.',
        },
        {
            company: 'Pine Labs', rank: 8, stance: 'SCALEUP', segment: B2B,
            what: "Payments technology for shops, banks and brands: card and UPI terminals, online checkout, instalment offers at the till, and card-issuing software, in India and abroad.",
            view: "**Big network, thin profit.** Revenue rose 20% and it leads in enterprise and fuel-pump payments, with the new UPI fee as upside. But adjusted EBITDA rose only 4%, missing the CEO's hope, FY26 cash flow leaned on bill discounting, a ₹214cr GST demand is stayed in court, and its own net cash is ₹2,449cr, not the larger figure that includes client money. Its profit is too small to value it on.",
            watch: 'Contribution margin back to 73–74% in H2; revenue inside the 21–23.5% guide; its share of the UPI fee.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Listings and subscriptions.** **Cartrade Tech: own**, the best combination of free traffic, rising margins and cash, though the cash needs a use. **Matrimony.com: follow** for its cash and buybacks, until billing growth returns to double digits and the Jodii rebrand and CFO vacancy settle.",
            "**Platforms for businesses.** **BlackBuck: follow**, a strong payments habit, but pre-tax profit must grow again before the price fits. **Macfos: follow** until cash follows growth. **TBO Tek: wait** for the FEMA ruling and a price that fits its organic growth. **Pine Labs: wait** for profit, with the UPI fee as the upside surprise.",
            "**Delivery and home services.** **Swiggy: wait** for cash break-even and proof that Instamart can hold share. **Urban Company: wait** for InstaHelp's losses to shrink.",
            "**What would change my view.** For the better: NPCI giving acquirers a solid share of the UPI fee (Pine Labs); Swiggy reaching cash break-even on time; BlackBuck disclosing profitable Superloads hubs; CarTrade announcing a payout. For the worse: a new funding wave for quick-commerce rivals; a large FEMA penalty at TBO; Delhivery pricing aggressively against BlackBuck; the truck slowdown arriving harder than ICRA expects.",
            "**What to watch next quarter.** CarTrade's margin and OLX paid plans; BlackBuck's pre-tax profit; Matrimony.com's billing; Macfos's operating cash; TBO's FEMA case; Swiggy's cash flow and Instamart growth; Urban Company's InstaHelp loss; Pine Labs' contribution margin.",
        ],
        bottomLine:
            "Own the profitable leader with free traffic and rising margins (Cartrade Tech), follow the good businesses priced a little ahead of the evidence (BlackBuck, Matrimony.com, Macfos), and wait on the rest until profits, cash and legal cases resolve (TBO Tek, Swiggy, Urban Company, Pine Labs).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/CARTRADE/consolidated/' },
        { label: 'India’s $80bn online retail story — Redseer, May 2026', url: 'https://redseer.com/articles/speed-in-metro-scale-in-bharat-indias-80-bn-online-retail-story/' },
        { label: 'State of India’s food services market — Redseer, Jul 2026', url: 'https://redseer.com/reports/state-of-indias-food-services-market/' },
        { label: 'Who’s winning in India’s dating and matrimony market — Redseer', url: 'https://redseer.com/articles/whos-winning-in-indias-dating-matrimony-market-and-where-are-the-opportunities-for-platforms-and-investors/' },
        { label: 'Bernstein sees a volatile 2026 for India’s e-commerce market — Business Standard, Jan 2026', url: 'https://www.business-standard.com/industry/news/us-based-bernstein-sees-volatile-2026-for-india-s-e-commerce-market-126011301200_1.html' },
        { label: 'Takeaways from Eternal’s Q1 FY27 earnings call — Medianama, Jul 2026', url: 'https://www.medianama.com/2026/07/223-takeaways-eternal-q1-fy27-earnings-call/' },
        { label: 'Zepto defers IPO amid valuation concerns — Inc42, Jul 2026', url: 'https://inc42.com/buzz/zepto-defers-ipo-amid-valuation-concerns-to-raise-%E2%82%B91000-cr-pre-ipo-round/' },
        { label: 'UPI fee: why the government is putting a price on big merchant payments — Business Standard, Sep 2026', url: 'https://www.business-standard.com/amp/finance/news/upi-fee-why-government-is-putting-a-price-on-big-merchant-payments-126091600484_1.html' },
        { label: 'UPI merchant fee talks begin — Tech Times, Sep 2026', url: 'https://www.techtimes.com/articles/327573/20260915/upi-merchant-fee-talks-begin-as-india-ends-six-year-zero-charge-era-business.htm' },
        { label: 'Social security coverage for platform workers under the labour codes (JM Financial estimates) — Business Standard, Nov 2025', url: 'https://www.business-standard.com/markets/news/eternal-swiggy-share-price-nse-bse-social-security-coverage-for-platform-workers-new-labour-codes-125112400201_1.html' },
        { label: 'Social Security (Central) Rules 2026 for gig workers — Medianama, May 2026', url: 'https://www.medianama.com/2026/05/223-social-security-central-rules-2026-gig-workers-90-days-work/' },
        { label: 'Commercial-vehicle wholesales to grow 4–6% in FY27 (ICRA) — Business Standard, Sep 2026', url: 'https://www.business-standard.com/amp/industry/news/domestic-commercial-vehicle-wholesale-volumes-to-grow-4-6-in-fy27-icra-126091800657_1.html' },
        { label: 'FASTag toll collection grows 14.4% to ₹70,278cr in FY26 — Upstox', url: 'https://upstox.com/news/business-news/latest-updates/fas-tag-toll-collection-on-national-highways-grows-14-4-to-70-278-crore-in-fy-26/article-197765/' },
        { label: 'Used-car market growth outpaces new cars (Crisil) — Business Standard', url: 'https://www.business-standard.com/industry/auto/used-car-market-india-growth-outpaces-new-car-sales-crisil-fy26-125071100671_1.html' },
        { label: 'Swiggy Q1 FY27 shareholder letter', url: 'https://www.swiggy.com/corporate/wp-content/uploads/2026/07/Q1-FY2027-Shareholder-letter.pdf' },
        { label: 'Swiggy Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/fbc15e07-228a-492d-b97c-bd4fb9b368e1.pdf' },
        { label: 'Urban Company Q1 FY27 shareholders’ letter', url: 'https://uc-investor-reports.s3.ap-southeast-1.amazonaws.com/Urban_Company_Shareholders%27_Letter_and_Results_Q1_FY27.pdf' },
        { label: 'Pine Labs Investor & Analyst Day deck, Jun 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e86a1757-790f-4ccc-b2d9-d81d1f327e97.pdf' },
        { label: 'Pine Labs Annual Report FY26 (GST demand, auditor remarks) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/24faa495-7fc8-4a82-a88f-beb9514fd016.pdf' },
        { label: 'TBO Tek Q1 FY27 shareholders’ letter', url: 'https://tbo-static-files.s3.eu-west-1.amazonaws.com/tbo-investor-relations/Stock-Exchange/2027/File_1_30072026.pdf' },
        { label: 'TBO Tek Annual Report FY26 (FEMA emphasis of matter) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/96ad07f4-aa99-487d-930e-0c39b9a07604.pdf' },
        { label: 'TBO Tek rating rationale — CARE, Dec 2025', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202512131202_TBO_Tek_Limited.pdf' },
        { label: 'CarTrade Tech Q1 FY27 presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=98d8c82b-f26d-491f-bff0-e4c2fa186958.pdf' },
        { label: 'CarTrade Tech Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f273031a-2875-4363-ad35-b8665816e187.pdf' },
        { label: 'BlackBuck (Zinka) Q1 FY27 presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=640ebab5-f96a-47b2-a83c-605ef28455b3.pdf' },
        { label: 'BlackBuck (Zinka) rating rationale — ICRA, Jan 2026', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?Id=140442' },
        { label: 'Macfos Q1 FY27 presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f09fa9c7-77a9-4b31-ae10-97c51b933b80.pdf' },
        { label: 'Macfos Annual Report FY26 (customs notice) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/033e62f8-cbb0-49fd-a84f-77e103bffe2e.pdf' },
        { label: 'Macfos rating rationale — CRISIL, Jul 2025', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/MacfosLimited_July%2003_%202025_RR_368474.html' },
        { label: 'Matrimony.com Q1 FY27 presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=a161d2e9-00c4-4388-9770-040cb9d4dd78.pdf' },
        { label: 'Matrimony.com Jodii trademark case: SLP withdrawn, Sep 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fa60e031-6b4a-4c5f-9241-eae55d0e6dbc.pdf' },
        { label: 'Matrimony.com Annual Report FY26 (governance certificate) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3bd7a67c-6f53-480e-96d8-17214d0bec9b.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
