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
            'Harsha Engineers Int': 15,
            'NRB Bearing': 13,
            'SKF India': 14,
            'SKF India (Industrial)': 14,
            'Timken India': 15,
        },
    },
    standfirst:
        "Five listed companies in a genuinely good industry. A bearing is a few hundred rupees of steel that, if it fails, stops a locomotive, a gearbox or a rolling mill, so it is designed in years ahead and re-ordered for the life of the programme. The catch is ownership: three of the five are Indian arms of foreign parents that own the designs, set the royalties and decide what sits inside the listed company, and SKF has just split its Indian arm in two. This note weighs each company's last two calls, annual report, capex plans and rating reports, and asks whose moat you are actually buying. Every chart uses filed results.",
    lastUpdated: '2026-09-27',
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
                'SKF India': 'Q4 FY26 fell on gross-margin pressure after one-off gains in Q3; Q1 FY27 gross margin was helped by mix and revaluing stock (company).',
                'SKF India (Industrial)': 'Management puts the underlying margin at about 12% after currency losses and IT separation costs; 14–16% is a target for after the new plant (2028).',
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
            { company: 'NRB Bearing', trend: 'widening', trendNote: 'Lifetime nominations above ₹800cr (a ₹1,100cr figure was retracted); a General Motors part open only to US-made bearings; a BMW steering programme from 2027.',
                grades: { design: { grade: 'A', note: 'In every BMW 1–7 series and Mercedes transmission' }, own: { grade: 'A', note: 'Own needle and roller bearing designs' }, after: { grade: 'C', note: 'Mostly original-equipment sales' }, scale: { grade: 'B', note: 'Leader in needle bearings in India' }, control: { grade: 'A', note: 'Indian-owned' } } },
            { company: 'Harsha Engineers Int', trend: 'stable', trendNote: 'Core cage business growing; Romania and a new plant still dilute returns.',
                grades: { design: { grade: 'B', note: 'Cages qualified into every major’s bearings' }, own: { grade: 'B', note: 'Own cage-making know-how' }, after: { grade: 'D', note: 'Sells only to bearing makers' }, scale: { grade: 'A', note: '80–90% of India’s outsourced cages' }, control: { grade: 'B', note: 'Indian-owned, but customers could make cages themselves' } } },
            { company: 'SKF India (Industrial)', trend: 'stable', trendNote: 'Distribution back to 34% of sales and new wind and rail wins, but the near-term margin target slipped and the MD changed within a year of listing.',
                grades: { design: { grade: 'A', note: 'Designed into industrial machines and wind gearboxes' }, own: { grade: 'C', note: 'Parent’s designs and catalogue' }, after: { grade: 'A', note: 'Distribution 34% of sales; services 6–7%' }, scale: { grade: 'A', note: 'Full industrial range' }, control: { grade: 'C', note: 'Parent keeps a factory and lubrication business outside' } } },
            { company: 'Timken India', trend: 'stable', trendNote: 'Rail franchise intact but rail spending diverted; Bharuch near breakeven.',
                grades: { design: { grade: 'A', note: 'Approved railway bearings; long qualification' }, own: { grade: 'C', note: 'Parent’s designs' }, after: { grade: 'B', note: 'Distribution about a sixth of sales' }, scale: { grade: 'B', note: 'Strongest in tapered and spherical rollers' }, control: { grade: 'D', note: 'Parent decides export allocation' } } },
            { company: 'SKF India', trend: 'stable', trendNote: 'About half of electric two-wheeler bearings and a first car wheel-end win, offset by an aftermarket losing to discounts and fakes.',
                grades: { design: { grade: 'B', note: 'Two-wheeler and car programmes' }, own: { grade: 'C', note: 'Parent’s designs' }, after: { grade: 'B', note: 'Brand counts against fake bearings' }, scale: { grade: 'B', note: 'Capacity about 93% loaded' }, control: { grade: 'C', note: 'Buys from its industrial sibling' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own Harsha Engineers, the one company here whose price asks for about what I expect, though with less conviction than a quarter ago.** **Harsha** makes the cages that hold the rollers apart inside a bearing and has 80–90% of its big customers' cage purchases in India. Its Indian engineering business grew 21% in Q1 FY27, with bushings up 35% and stampings up 31%, and FY26 profit rose from ₹89cr to ₹155cr. But in August management dropped May's promise of one to two points of extra margin and now only hopes to get back to 18%. Its foreign units lost ₹3.3cr in one quarter against a ₹2–4cr loss guided for the whole year, and FY26 operating cash covered only 28% of operating profit, while borrowings nearly doubled to ₹372cr to build a new plant. Three customers (Timken, Schaeffler and SKF) buy 60–75% of its Indian company's sales. I have cut my estimate from ~16% to ~15% a year, and the price needs about {need:Harsha Engineers Int|17}%, just inside a fair price. **This is a bet on the whole industry's volume through its supplier, not a margin story.**",
                "**Follow NRB Bearings: the best business here, but I no longer call it a buy.** **NRB** designs its own needle and cylindrical roller bearings and holds 65–70% of that Indian market (CRISIL). Its bearings are in every BMW 1–7 Series and Mercedes transmission, and it grew revenue 19% in Q1 at a 17% operating margin. Two things changed my call. First, the rating report and share filings show what the calls barely mentioned: 77.7% of the promoters' shares were pledged in March to fund a family settlement, the promoters then sold 6.47% of the company in the June quarter, and the managing director sold more in September. Second, after a 91% rise in a year, the price needs about {need:NRB Bearing|20}% a year against my ~13%. **The ₹1,100cr of lifetime nominations quoted in some summaries was retracted by the MD on the same call**; the last firm figure is ₹800cr, which she said has ‘moved ahead’.",
                "**Wait on SKF India, SKF India (Industrial) and Timken India.** SKF split its Indian company in two on 1 October 2025. **SKF India** is now the automotive business only, being renamed SKF Vertevo. Its Q1 revenue rose 27% against a carved-out base and Q2 product sales 16%, and in August management lifted its growth guide from 6–8% a year to ‘close to 20%’ for FY27. But the pre-tax margin fell from 14.3% in Q1 to 11.7% in Q2 (₹70cr on ₹596cr), because steel and supplier price rises landed before customers agreed to pay more. On the 5 November call management said it expects to bill most of that, with arrears, in the December quarter and to be back above 15% EBITDA (counting other income) within FY27; it did not restate the FY27 growth guide and spoke of 15% or a little more for FY28. **It is now in the live table**, because its last four quarters are all the automotive company on its own. They still include the ₹61.5cr one-off tax charge of January–March 2026, so the trailing profit is too low: the price needs about {need:SKF India|23}% a year against my ~14%, and about 4 points less with that charge added back. Its replacement sales are still shrinking (7% down on the year) and its top ten customers buy about 70%. It stays wait (moved up from pass in September). **SKF India (Industrial)** is the new listed industrial company. Revenue grew 18%, but its underlying margin is about 12% and slipping, its new plant's budget rose from ₹650cr to ₹900–950cr in four months, and shareholders are asked to approve up to about ₹222cr of royalty and trademark fees to the Swedish parent for FY27, against about ₹25cr in its first half-year. **Timken India** has India's strongest railway-bearing position and held its gross margin through a ₹5,000-a-tonne steel rise. But FY26 profit fell 11%, return on capital slid from 29% to 18% as its ₹720cr Bharuch plant ramps up, the plant's utilisation target slipped, and government rail buying has slowed. Its price needs about {need:Timken India|26}% a year against my ~15%.",
                "**Three things to hold onto before reading the rest.** First, **mix is destiny**: SKF says distribution earns high double-digit margins and sales to machine makers high single digits, so watch the channel mix, not the headline margin. Second, **ask whose moat it is**: the three multinational arms rent their designs and brand from a parent that charges royalties (₹84cr at Timken, ₹89cr at SKF India in FY26), routes supply through related-party trade and decides what sits inside the listed company. Third, **read the annual reports**: this year they showed NRB's share pledge and an inventory audit flag, a gap in Harsha's accounting audit trail, Timken's ₹182cr of contingent claims including a ₹104cr provident-fund order, and SKF Industrial's ₹164cr of stamp duty and transfer costs paid to move land between two SKF companies.",
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
                "India's bearing market was about US$2.9bn in FY26 and is growing more than 9% a year, on Timken's own estimate in its annual report. About 65% of demand comes from vehicles and mobile machines and 35% from factories, against roughly half and half in mature markets, so industrial uses should gain share as India adds steel, cement and power capacity. The five companies here sold about ₹11,300cr in FY26; Schaeffler India, the other large listed maker, is not in this sector list. India still imports far more than it exports: bearing imports rose to ₹12,380cr in FY25 while exports stayed flat at about ₹6,400cr (commerce ministry data), and imports from China grew about 15% to US$746m in 2025. **My view: the industry grows about 9–11% a year over FY27–FY29, with industrial uses at mid-teens and vehicles at mid-single digits after a record FY26. Margins over the next two years depend on how fast about ₹2,500–3,000cr of new local plants fill.**",
            ],
            points: [
                {
                    label: 'A bearing is designed in, not bought in',
                    text: "A vehicle or machine maker picks a bearing while designing a gearbox, axle or motor, tests it for months and then buys it for the life of the programme: typically five to seven years, and far longer for a wagon or locomotive. Changing supplier means re-testing and carrying the risk of a failure that costs far more than the part. That is why **Timken** is putting more than 100 new parts through customer approval at Bharuch before they sell in volume, and why **NRB** says it holds 60–70% of the business on its core products and 100% on some. **Profit then depends on the channel**: SKF Industrial says distribution earns high double-digit margins and sales to machine makers high single digits, while SKF India's replacement sales are losing ground to discounts and fakes. **My view: nominations won today are revenue in 2029, so share moves slowly, and a company's mix tells you more than its headline margin.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Vehicles had a record FY26 after the September 2025 GST cuts: two-wheelers rose 9%, cars 8.6% to 4.7 million, commercial vehicles passed a million units and tractor wholesales rose about 23%. ICRA expects much slower growth in FY27: 3–5% for two-wheelers, 4–6% for commercial vehicles with a fall in the second half on the high base, and 7–9% for auto-component revenue. Industrial demand is stronger. India added 6.34 GW of wind in 2025 (+85%), Crisil expects 160–170 million tonnes of new cement capacity over FY26–FY28 against 95 million in the three years before, and steel capacity is to rise from about 220 to 300 million tonnes by 2030. That is why the fastest-growing lines this quarter were industrial: Timken's process industries +28–30%, NRB's industrial sales +34% and Harsha's bushings +35%. Railways have the money (FY27 capex ₹2.93 lakh cr, up 10.5%), but Timken says buying has slowed as funds went to defence. **My view: FY27 is the year industrial demand carries the sector while vehicles digest a record year.**",
                },
                {
                    label: 'Trade, policy and costs',
                    text: "Three outside forces matter. **Imports**: China supplies most low-cost standard ball bearings, and imports keep rising 12–15% a year. A draft BIS quality order published in 2025 would make India's quality mark compulsory for about 10–12 bearing standards, local or imported; whether it has been finally notified could not be confirmed, but Timken says it now holds BIS certification for its rollers. **Trade abroad**: the US keeps anti-dumping duties on Chinese tapered bearings, which helps Timken India's exports to its parent, and the US extra tariff on Indian cages fell to zero this year (Harsha). **Costs**: steel rose about ₹5,000 a tonne in 2026, the Hormuz disruption pushed up gas, carbide and oil costs, and the weak rupee cost SKF Industrial ₹14.7cr in Q1. Vehicle makers accept cost rises with a one-to-two-quarter lag, Harsha's customers after about four months, and railway and public-sector rate contracts only at renewal. **My view: the policy tide favours local makers; the cost tide squeezes FY27 margins until price rises catch up.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Harsha** depends on the bearing majors' volumes, on them continuing to outsource cages, and on fixing Romania. **NRB** depends on Indian two-wheeler and truck makers (together about 60% of sales), European car programmes, and its new US, Italian joint-venture and aerospace businesses. **SKF India** depends on two-wheeler and car output (two-wheelers are 54% of its sales to vehicle makers) and on its top ten customers, who buy about 70%. **SKF India (Industrial)** depends on factory, wind and rail spending, on its distributors, and on how much its Swedish parent charges. **Timken** depends on the Railways' budget, wind and steel projects, and its parent's export allocation. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Designer-owner in a niche', 'NRB', '16–18%', '18%', '**56%**', 'Own designs and 65–70% share; stock-heavy'],
                        ['Component supplier to the industry', 'Harsha', '14–15%', '13%', '**62%**', 'Indian core earns 20%-plus; Romania, a new plant and solar dilute it'],
                        ['Industrial catalogue, part-made, part-traded', 'Timken', '13–22%', '18%', '**54%**', 'Pricing held; a new plant still filling'],
                        ['Industrial catalogue, import-heavy', 'SKF India (Industrial)', '9–13%', '30% (part-year, not comparable)', '**26%** (two years)', 'Machine-maker mix, imports and separation costs'],
                        ['Automotive catalogue', 'SKF India', '6–15%', '24% (half-year of industrial)', '**60%**', 'Localised above 90%; aftermarket weak'],
                    ],
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian bearing market', 'About US$2.9bn (FY26); 65% vehicles, 35% industrial', 'More than 9.4% a year', 'Timken India annual report FY26 (company estimate)'],
                        ['Indian industrial bearings', 'About ₹66,000cr (2024)', '4.3% a year to 2033; hard to square with the figure above', 'IMARC, via SKF Industrial annual report'],
                        ['Bearing trade', 'Imports ₹12,380cr in FY25 (₹10,422cr in FY23); exports flat at ₹6,387cr', 'Imports from China US$746m in 2025 (+15%)', 'Commerce ministry TradeStat; Trading Economics'],
                        ['Two-wheelers', 'Record FY26 (+9%)', '**FY27 +3–5%**', 'ICRA, Mar 2026'],
                        ['Cars', 'FY26 +8.6% to 4.7m', 'FY27 ‘moderate’ (4–6% quoted)', 'ICRA, Apr 2026'],
                        ['Commercial vehicles', 'FY26 above 1m; Apr–Aug FY27 +23.4%', '**FY27 +4–6%, with a second-half fall**', 'ICRA, Sep 2026'],
                        ['Auto components', 'Record FY26', 'FY27 revenue +7–9%', 'ICRA, Mar 2026'],
                        ['Railways', 'FY27 capex ₹2.93 lakh cr (+10.5%); ~35,000 wagons in FY26', '~36,000 wagons in FY27; buying slow in H1', 'Union Budget via PRS; Timken annual report'],
                        ['Wind and cement', 'India wind 6.34 GW in 2025 (+85%)', 'Global wind 178 GW in 2026; cement adds 160–170 MT over FY26–FY28', 'GWEC and Crisil, via Timken annual report'],
                        ['Quality rules', 'Draft BIS order for bearings (2025)', 'Final notification not confirmed', 'certification-india.com; ERCS'],
                    ],
                    note: 'The two Indian market sizes come from different consultancies and cannot both be right; I rely on the growth rates more than the totals.',
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
                    label: 'Lasting: designed in, with evidence of share',
                    text: "**NRB** holds 65–70% of India's needle and cylindrical roller bearing market (CRISIL), supplies every BMW from the 1 to the 7 Series and every Mercedes from the A-Class to the Maybach, holds a patented kingpin bearing used in Mercedes, Volvo and Scania trucks, and won a General Motors Corvette part open only to US-made bearings. **Timken** leads in freight-wagon tapered bearings, and one customer group, most likely the Railways and its wagon builders, bought ₹625cr (18% of revenue) in FY26. **SKF India** has about half of India's electric two-wheeler bearing business and won its first wheel-end order from a large carmaker after what management called ‘so many audits’. **My view: these positions last as long as the programmes do; the question is who keeps the profit.**",
                },
                {
                    label: 'Pricing power: real, but with a lag',
                    text: "The best evidence is **Timken**: steel rose about ₹5,000 a tonne, yet its gross margin rose a point on the year to 39.9%, because truck and tractor makers accepted price rises; only railway and public-sector contracts wait for renewal. **Harsha** passes metal costs on after about four months, which protects profit over a year but not within a quarter, and CARE still notes its ‘limited bargaining power’ against three giant customers. **SKF India** has index clauses with vehicle makers but gave two months of discounts in the aftermarket. **SKF Industrial** raised distributor prices quickly but lags with machine makers, and could not offset ₹14.7cr of currency losses. **My view: nobody here sets prices freely; the strong ones recover costs within two quarters.**",
                },
                {
                    label: 'Lasting but not owned: the parent’s catalogue',
                    text: "**Timken, SKF Industrial and SKF India** sell designs and a brand they do not own, and they pay for them. Timken paid its parent ₹84cr of royalty in FY26 (about 2.5% of sales), and its FY27 related-party approvals nearly double trade with Timken Corporation (purchases ₹708cr against ₹359cr). SKF India paid ₹89cr of royalty and trademark fees. SKF Industrial's shareholders are asked to approve up to ₹121.5cr of royalty and ₹100.6cr of trademark fees for FY27, about 6% of sales if fully used. The parents also supply the goods: about 35% of Timken's sales are imported for resale, and SKF Industrial imported ₹974cr of finished goods. SKF Industrial admits that making locally lets it return to wind and freight rail, which it had quit on cost, but at lower margins. **The moat lasts; the question is how much of it minority shareholders get.**",
                },
                {
                    label: 'Wearing away: the automotive aftermarket',
                    text: "**SKF India**'s replacement business (20% of sales) has plateaued, and it gave two months of discounts that management says will not continue. Its finance head called the aftermarket ‘a completely different game’ from selling to vehicle makers, with fakes and many rivals. **NRB** says it avoids the model of selling to vehicle makers at a loss and making the money back in replacement. **Brand still matters in the aftermarket, but this is where margins are under most pressure.**",
                },
                {
                    label: 'A different kind of moat: Harsha',
                    text: "**Harsha** is the only outsourced supplier making brass, steel and plastic cages at scale, with 80–90% of its customers' cage purchases at their Indian plants; one customer plant told an analyst 95–97%. Abroad it has only 10–20% of the big three's cage purchases and 2–3% at Japanese bearing makers, which is its growth runway. Cages are about 5% of a bearing's cost but need long approvals and tooling, so customers rarely switch. The risk is concentration: Timken, Schaeffler and SKF buy 60–75% of its standalone sales and could move work in-house or between plants. **A strong but hostage position.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Schaeffler India (the largest listed bearing maker, not in this sector list), NBC (National Engineering Industries), NTN, NSK and JTEKT, plus Chinese imports at the low end and fakes in replacement.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Three things decide a bearing maker's margin: the mix between vehicle-maker and replacement sales, how quickly steel moves through the contract, and how full the plants are. This year a fourth matters: one-off items around the SKF demerger.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: localised niches',
                    text: "**NRB** has held a 16–18% operating margin for five quarters (17.3% in Q1). Management's own 19.5% for FY26 includes other income and, CRISIL notes, some currency gains; it now targets 18–20% ‘over an annual period’, a touch below May's 18–21%. **Harsha**'s standalone engineering business earned about 24% in FY26 and management calls 20–22% sustainable, but the group shows 14–15% after Romania, the new plant and solar work at 7–8%. **Timken** has earned 18–22% in most quarters, with pricing that held through a steel rise. **My view: these margins are structural, but each company has a drag to remove before its margin can rise.**",
                },
                {
                    label: 'Cyclical: plants filling and costs lagging',
                    text: "**Timken**'s margin fell from 23% in FY22 to 18% in FY26 as Bharuch depreciation (₹85cr to ₹106cr, heading for about ₹124cr), labour-code costs and materials landed; Q3 FY26's 13% included about 1.7 points of Bharuch start-up costs. Bharuch sold ₹50cr in Q1 against ₹60cr in Q4 and is ‘very close to breakeven’. **Harsha**'s engineering margin fell 3.6 points in a quarter to 16.6% on its own measure, from a 6–8% material rise not yet passed on, a ₹4cr hedge loss and ₹3cr of extra consumables; its new Advantek plant lost ₹4.3cr on ₹30cr of sales. **My view: both should recover as plants fill and prices catch up, Harsha within two quarters, Timken more slowly because of rail contracts.**",
                },
                {
                    label: 'Not structural: windfalls and demerger one-offs',
                    text: "Several recent quarters need adjusting. **SKF India**'s Q1 gross margin jumped from 42.5% to 51%, which management put down to mix and revaluing stock, and about 10% of its sales go to its industrial sister at a mark-up that will fade; its Q4 loss came from a ₹61.5cr tax settlement covering FY13–FY21. In Q2 FY27, ₹29cr of other income (rent and services charged to its sister, staff cross-charged to the group, a currency gain and asset sales) was about 41% of its pre-tax profit. **SKF Industrial** reported a 9% pre-tax margin in Q1; adding back ₹14.7cr of currency loss and ₹15cr of IT separation costs gives about 12%, down from about 13% two quarters earlier. Its FY26 profit carried ₹196cr of exceptional costs, mostly stamp duty, and Q4's ₹119cr profit was flattered by a tax credit. **Flag the windfall quarters: SKF India's Q1 and SKF Industrial's Q4 look better than the run-rate.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **Timken** tied up ₹690cr in working capital, mostly customer bills (₹423cr) and stock (₹410cr), partly offset by paying suppliers more slowly. **SKF India** tied up ₹503cr, mostly customer bills (₹775cr), before the demerger split the balance sheet. **NRB** tied up ₹277cr, almost all in stock (₹241cr), and **Harsha** ₹234cr across bills and stock.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Harsha**'s operating cash fell from ₹206cr in FY25 to ₹68cr in FY26, only 28% of operating profit, and free cash was −₹47cr as borrowings rose from ₹200cr to ₹372cr to build Advantek. Its cycle improved from 130 days in March to 116 in June, and CARE's downgrade triggers include a cycle above 150 days. **SKF Industrial**'s Q1 operating cash was ₹54.7cr, 63% of profit, after one-off land-transfer and name-change charges, and it guides working capital up to 19–20% of sales from 17.5%.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**NRB** turned more than all of FY26's operating profit into cash (104%, ₹241cr), cut stock from 364 days in FY24 to 302 and reduced borrowings from ₹187cr to ₹154cr. **Timken**'s conversion rose to 71% in FY26 and its cash cycle fell from 160 days to 116 over five years. **SKF India**'s cycle fell to 33 days after the demerger, and management put FY26 cash conversion at about 85%.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**NRB** will always carry a lot of stock, because it makes thousands of part numbers for customers in India, Europe, Thailand and the US; its auditor made inventory the key audit matter, with an ₹81cr allowance for slow-moving stock against ₹272cr held. **Harsha** carries about 170 days across many cage sizes for 80-plus plants. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Harsha Engineers Int', 'Capex ₹180–200cr over FY27–FY28 (₹50–80cr in FY27); ₹37cr spent in Q1; cycle 116 days', 'Net cash ₹146cr (Screener, March); borrowings ₹372cr'],
                        ['NRB Bearing', 'Capex programme ₹270cr: ₹60cr spent, ₹100cr ordered; ₹110cr for the Unitec joint venture', 'Net debt ₹121cr (March); CRISIL expects about ₹150cr of new debt'],
                        ['SKF India', 'FY27 capex close to ₹200cr within ₹500cr-plus over FY26–FY28; net working capital 18.8% of sales (Q2 call); FY26 cash conversion about 85%', 'Net cash ₹120cr (September; ₹306cr in March) after the FY26 dividend of ₹40 a share (about ₹198cr)'],
                        ['SKF India (Industrial)', 'Operating cash ₹54.7cr; working capital 17.5% of sales, guided 19–20%; plant ₹900–950cr', 'Net cash ₹564cr (March); no debt'],
                        ['Timken India', 'Debt-free; capex 8–10% of sales (about ₹300–370cr); a larger dividend ‘every few years’ (May call)', 'Cash and funds ₹268cr (annual report); Screener’s ₹389cr net cash also counts the ₹129cr GGB purchase'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: new local plants',
                    text: "Every company here is building, about ₹2,500–3,000cr in all through FY28–FY29. **Timken** has spent about ₹720cr on Bharuch (spherical and cylindrical bearings), is adding a ₹120cr Jamshedpur rail line due to produce by December 2026 and a ₹38cr plain-bearing line, and keeps capex at 8–10% of sales. **SKF Industrial** is building a ₹900–950cr Pune plant for mid-2028 with a five-to-seven-year payback. **SKF India** is spending ₹500cr over FY26–FY28, mainly at Haridwar, partly to replace goods it now buys from its sister. **NRB** has ₹270cr of new lines plus ₹110cr for the Unitec joint venture from April 2027, and **Harsha** ₹180–200cr, including a China steel-cage expansion for Q3 FY28. Management's rules of thumb are about ₹2 of sales per ₹1 of machinery at Timken and ₹130cr of sales per ₹100cr at NRB. **My view: this is the supply response to import substitution; it lifts revenue from FY28 but holds down return on capital until then.**",
                },
                {
                    label: 'Growth driver: industrial projects and wind',
                    text: "**Timken**'s process-industry sales grew 28–30% in Q1 on wind and metals projects, and it buys 5 MW wind-turbine bearings from sister plants because the Indian range keeps widening. **SKF Industrial** won a ₹140cr order from a global wind-gearbox maker and ₹35cr and ₹32.5cr orders from tractor makers. **NRB**'s industrial sales rose 34% to 14% of revenue, with JCB UK a new customer. **Harsha**'s bushings grew 35%, and it targets 30–50% growth in large cages for wind and industrial bearings. This follows cement, steel and renewable spending that Crisil and GWEC expect to continue into FY28.",
                },
                {
                    label: 'Growth driver: railways, when the money flows',
                    text: "**Timken**'s rail revenue was ₹200cr in Q1, up only about 3%, because government buying slowed and tenders slipped a couple of months. The budget still rises 10.5% in FY27 and wagon output is expected to edge up from about 35,000 to 36,000. The new Jamshedpur line should add about ₹240cr of sales at maturity, aimed at India, Africa and North America. **SKF Industrial** is testing a suburban-rail bearing for 180 km/h. **My view: this is deferral, not loss, but fixed-price rail contracts mean rail helps volume more than margin.**",
                },
                {
                    label: 'Growth driver: vehicles, electric drives and exports',
                    text: "Vehicle volumes grow more slowly in FY27 after a record year. **SKF India** is limited by about 93% plant loading until its new lines arrive: one in the December 2026 quarter, a second line and an upgrade at Haridwar in March 2027, and a third in July 2027 (Q2 call). Its electric-vehicle platforms ramp from mid-2027, a new hybrid-transmission bearing order from an Indian vehicle maker from 2028, and its car wheel-end order from late 2028. **NRB** says about 70% of its sales go into parts used in petrol, hybrid and electric vehicles alike, and it is designed into a BMW electric steering system launching in 2027. Exports are uneven: Timken's overseas sales rose 17% in FY26 but its US sales fell 15%, and NRB's standalone exports grew only 2.7% against a 10–14% target for FY27. **Nobody here gets an electric-vehicle earnings boost before 2028.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**SKF India** guided 6–8% a year and an 11–12% pre-tax margin in May; Q1 delivered 27% growth and 14.3%, and guidance rose to ‘close to 20%’ for FY27 (Q2 is under Missed). **Harsha**'s Indian engineering grew 21% against a ‘mid-teens’ promise, bushings 35% against 25–30%, and stampings 31% against ‘at least 20%’. **NRB** grew 19% and **SKF Industrial** 18%, the latter against about 8% guided in May until its new plant arrives.",
                },
                {
                    label: 'Cautious',
                    text: "**Timken** gives no numbers, would not accept 10% growth as a base case, and moved from calling rail ‘slow and steady’ in May to ‘certainly slow’ in August. **NRB** gave no FY27 figure and narrowed its margin aim from 18–21% to 18–20%.",
                },
                {
                    label: 'Missed',
                    text: "**Timken**'s Bharuch was to reach about 70% use ‘by July’; in August the target moved to August–September for the spherical lines only, and Bharuch revenue fell from ₹60cr to ₹50cr. **SKF Industrial**'s May target of about 13% by the end of 2026 slipped: in August the finance head said ‘12% is a fair number’ for current performance, with IT separation costs running two more quarters, while plant capex rose from ₹800cr-plus to ₹900–950cr. **Harsha** dropped its promise of extra margin, its foreign units lost ₹3.3cr in Q1 against a ₹2–4cr full-year guide, and large cages were flat against 15–20% growth promised. **SKF India**'s pre-tax margin fell to 11.7% in Q2, below the 13% I wanted, because steel and supplier price rises came before customers' (management expects to recover most of it in the December quarter), and its aftermarket shrank 7% on the year for a second quarter.",
                },
                {
                    label: 'Mixed',
                    text: "**NRB**'s FY31 aspiration rose from ₹2,500cr to ‘₹2,730–3,000cr’ by extrapolating the last year's growth, not by plan. The MD said a US win took lifetime nominations to ₹1,100cr, then corrected herself at the end of the call, and the aerospace order book was restated as about ₹30cr for Mahant plus ₹20cr of NRB's own defence work. Its capex programme grew from ₹240cr to ₹270cr, and CRISIL expects about ₹400cr over three years with ₹150cr of new debt.",
                },
                {
                    label: 'My outlook',
                    text: "Bearing demand grows about 9–11% a year in value. **I expect Harsha and Timken to compound earnings at about 15%, both SKF companies at about 14%, and NRB at about 13%.** NRB is cut from 17% on 24 Oct: management's own plan is ₹2,500cr of revenue by FY31 (the ‘₹2,730–3,000cr’ is only last year's growth extrapolated), about 13–15% a year, with the margin guided flat at 18–20%, while ₹380cr of new lines and the joint venture add depreciation and interest; that works out to about 13% a year of earnings growth. Harsha is cut from 16% because management dropped its margin-expansion promise and CARE expects only about 10% revenue growth. SKF India's FY27 will look strong against a tax-hit base, and management now talks of 15%-plus revenue growth in FY28 as new lines replace bought-in goods; but sales to its sister are fading (5% of Q2 sales, from 10%) and two-wheelers slow, so I keep ~14%. SKF Industrial's margin recovery depends on how much royalty its parent actually takes, and Timken's on Bharuch filling.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Harsha Engineers Int', 'Industry cage volumes; margin back to 18%; Romania and Advantek losses shrinking', '9% / **15%** / 20%'],
                        ['NRB Bearing', 'Indian vehicles, European programmes, industrial, US and aerospace; ₹2,500cr by FY31 at a flat margin', '8% / **13%** / 20%'],
                        ['SKF India', 'Two-wheelers and cars; new lines from December 2026; EV and hybrid content from 2027–28', '8% / **14%** / 18%'],
                        ['SKF India (Industrial)', 'Wind, rail and machinery; Pune plant from 2028; royalty level', '8% / **14%** / 19%'],
                        ['Timken India', 'Bharuch filling; rail line; process industries; exports', '8% / **15%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Harsha Engineers Int', 'India engineering mid-to-high teens; group 12–15%; margin back to 18%; Advantek ₹140cr-plus', '₹180–200cr over FY27–FY28; China ₹90–100cr (Q3 FY28)', '**Mixed**: India +21%; margin-expansion promise dropped; foreign losses ahead of guide'],
                        ['NRB Bearing', '₹2,500cr by FY31, now ‘₹2,730–3,000cr’ by extrapolation; margin 18–20%', '₹270cr (from ₹240cr) plus ₹110cr joint venture', '**Mixed**: revenue +19%; ₹1,100cr nominations retracted; margin band narrowed'],
                        ['SKF India', 'Revenue ‘close to 20%’ in FY27 (August; not restated in Q2); 15%-plus in FY28; EBITDA with other income back above 15% within FY27', '₹500cr-plus over FY26–FY28; FY27 close to ₹200cr (Q2 call), including ₹140cr of new lines', '**Slipping** (Q2): product sales +16%; pre-tax margin 11.7% against 14.3% in Q1 as cost rises went unbilled; aftermarket −7%'],
                        ['SKF India (Industrial)', 'Aspiration to double in five years (was ~8% a year); margin ~12% now, 14–16% after 2028', '₹900–950cr Pune plant (was ₹650cr+, then ₹800cr+)', '**Slipping**: revenue +18%; 13% by end-2026 target slipped; capex up 40%'],
                        ['Timken India', 'No numbers; ‘outgrow the market’; spherical lines 70% by Aug–Sep', '8–10% of sales (was 8–9%); rail line ₹120cr by Dec 2026', '**Better** (Q2): spherical lines at the promised 70%, Bharuch ₹75cr, exports +60%; rail tenders still delayed; margin 19.2%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports, rating reports and share filings, not from the calls.",
            ],
            points: [
                {
                    label: 'The parent decides, and charges',
                    text: "**SKF Industrial**'s FY27 approvals allow up to about ₹222cr of royalty and trademark fees to AB SKF with no end date, against about ₹25cr in its first half-year, plus ₹133cr of group IT services; this is the single biggest risk to its margin plan. **Timken** bought the GGB plain-bearing business from its own group for ₹128.8cr in December 2025, and its FY27 approvals nearly double trade with Timken Corporation, so more of its revenue will be priced by transfer pricing. **SKF India** and SKF Industrial still trade with each other at a mark-up and share the Pune plant. AB SKF plans to list its global automotive arm, SKF Vertevo, in Stockholm in Q4 2026; how its 52.6% stake in SKF India moves, and whether that triggers an open offer, has not been disclosed.",
                },
                {
                    label: 'Governance and accounting findings',
                    text: "**NRB**'s promoters pledged 77.7% of their shares to fund a family settlement, cut that to 14.99% by June by selling 6.47% of the company, and the MD sold more in September; promoter holding fell from 51.2% in March to 44.7% in June and about 41.2% by 25 September, and BSE queried a volume spike on 21 September. Its auditor made inventory the key audit matter: an ₹81cr obsolescence allowance, with work in progress valued in spreadsheets. **Harsha**'s auditor found the edit log not enabled at database level in its accounting software, and its head of the brass business resigned in August. **SKF India** shareholders complained that disclosure had ‘dropped substantially’ since the demerger. All five audit opinions are unqualified.",
                },
                {
                    label: 'Contingent claims and legal cases',
                    text: "**Timken** has about ₹182cr of contingent claims, about 6% of net worth, led by a ₹103.6cr provident-fund damages order under appeal and ₹63.3cr of transfer-pricing claims, plus a ₹107.9cr damages suit from a terminated distributor. **SKF India**'s claims fell to ₹214cr after a ₹61.5cr tax settlement, but a new ₹69.4cr transfer-pricing addition for FY22 is under appeal. **SKF Industrial** carries ₹103.8cr of civil cases and a share of pre-demerger tax disputes. **Harsha** has ₹377cr of guarantees and letters of credit, mainly for its subsidiaries' loans, and **NRB** ₹203cr of guarantees for its foreign units.",
                },
                {
                    label: 'Capital spent ahead of returns',
                    text: "About ₹2,500–3,000cr of plants are being built across the group. **Timken**'s return on capital has fallen from 29% to 18% and stays below 20% until Bharuch passes about 70% use. **SKF Industrial**'s plant budget rose about 40% in four months. **NRB**'s programme grows each quarter and CRISIL expects its gearing to double to about 0.3 times. **Harsha**'s free cash was negative in FY26 and Romania, which cost a ₹28cr write-down in FY25, still depends on one casting customer returning. Managements gave timelines more readily than expected returns.",
                },
                {
                    label: 'Cycles and concentration',
                    text: "ICRA expects two-wheeler growth of 3–5% in FY27 and a second-half fall in commercial vehicles, and the monsoon was weak, which hits tractors. That matters most for **SKF India** (two-wheelers are 54% of its sales to vehicle makers, top ten customers about 70%) and **NRB** (about 60% from two-wheelers and trucks). **Harsha**'s top three customers are 60–75% of standalone sales. **Timken** sells 18% of revenue to one customer group and depends on railway budgets.",
                },
                {
                    label: 'Costs, currency and contracts',
                    text: "Steel, gas, carbide and oils are all rising. **SKF Industrial** imports ₹974cr of finished goods and lost ₹14.7cr on currency in Q1; **Harsha** lost ₹4cr on hedges. **Timken**'s rail and public-sector rate contracts cannot be repriced until renewal. If the BIS quality order is diluted or delayed, Chinese imports, already growing 12–15% a year, press on the low end of the market.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or a one-off is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **17% at 27x, 19% at 32x, 20% at 35–37x and 26% at 60x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Everyone except NRB holds net cash, so the two measures mostly agree. Two adjustments matter. **SKF India** looks cheaper on EV/EBITDA than on P/E mainly because its trailing profit carries the ₹61.5cr tax settlement of January–March 2026; its last four quarters are now all after the split. **Timken**'s net cash on Screener counts the ₹129cr it paid for GGB; its spare cash and funds were ₹268cr in March.",
                },
                {
                    label: 'Fits',
                    text: "**Harsha**: the price needs about {need:Harsha Engineers Int|17}% a year against my ~15%, just inside a fair price. It is the only company here where the price and my estimate roughly meet. The upside is Romania and Advantek turning from losses to profit; the risk is that the margin stays below 18% and cash conversion stays weak.",
                },
                {
                    label: 'Full',
                    text: "**NRB**: at a market value of about {mcap:NRB Bearing|₹5,323cr} and about {pe:NRB Bearing|35.6} times the last four quarters' profit, the price needs about {need:NRB Bearing|20}% a year against my ~13%. The stock has risen 91% in a year while promoters were selling, so I would rather follow it than buy it.",
                },
                {
                    label: 'Stretched',
                    text: "**SKF India** is now measured live (7 Nov 2026): its last four quarters, October 2025 to September 2026, are all the automotive company on its own. At a market value of about {mcap:SKF India|₹7,048cr} and about {pe:SKF India|44.2} times that profit, the price needs about {need:SKF India|23}% a year against my ~14%. But the trailing profit of ₹156cr still carries the ₹61.5cr one-off tax charge of January–March 2026; with it added back, profit is about ₹218cr and the growth needed about 4 points lower, which would read full rather than stretched. Q2's margin dip from cost rises not yet billed to customers also weighs, and management expects most of it back in the December quarter. My estimate allows for sales to its sister fading and two-wheelers slowing after FY27. **SKF India (Industrial)**: the price needs about {need:SKF India (Industrial)|20}% a year against my ~14%, while the margin is slipping and the royalty approval could take several points of it. **Timken India**: the price needs about {need:Timken India|26}% a year against my ~15%. Its FY26 profit fell, and the price assumes Bharuch fills and margins return above 20% far faster than the ramp so far.",
                },
                {
                    label: 'What would move the labels',
                    text: "SKF India would need a price about 40% lower on today's trailing profit to reach Fits; once the tax-hit January–March 2026 quarter leaves the last four (with the March 2027 results), about 20% lower, or quarters back above 13% pre-tax that justify a higher estimate. Harsha sits at the edge: a price only about 3% higher, without a margin recovery, would tip it to Full. Timken and SKF Industrial need both lower prices and proof: Bharuch above ₹80cr a quarter, and SKF Industrial's royalty staying near 3% of sales.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Harsha Engineers Int', rank: 1, stance: 'SCALEUP', segment: OWN,
            what: "India's largest maker of precision bearing cages (brass, steel and plastic), supplying Timken, Schaeffler, SKF, NBC, NSK and NTN at 80-plus plants, plus bushings, stampings and a small solar-contracting arm, with plants in India, China and Romania.",
            view: "**The industry's volume through its supplier, at a fair price.** Indian engineering grew 21% in Q1 and FY26 profit rose to ₹155cr, but management dropped its margin-expansion promise, Romania lost about ₹14cr on ₹247cr of sales, and FY26 operating cash covered only 28% of operating profit. Its auditor flagged a gap in the accounting audit trail. The price needs about {need:Harsha Engineers Int|17}% a year against my ~15%.",
            watch: 'Engineering margin back to 18% by Q3 FY27; Advantek at ₹140cr of sales and profitable by March 2027; Romania’s main casting customer returning.',
        },
        {
            company: 'NRB Bearing', rank: 2, stance: 'SCALEUP', segment: OWN,
            what: "India's largest home-grown bearing maker: needle and cylindrical roller bearings for gearboxes, steering and chassis, with plants in India, Thailand and the US, an aerospace unit and an Italian joint venture for industrial bearings.",
            view: "**The best business here, under a governance cloud.** It owns its designs, holds 65–70% of its Indian niche, grew 19% in Q1 at a 17% margin and cut debt. But 77.7% of promoter shares were pledged in March, promoters sold 6.47% of the company in the June quarter and the MD and a family trust sold about 0.8% more in September, and the auditor flagged its inventory. The price needs about {need:NRB Bearing|20}% a year against my ~13%. **21 Oct 2026:** the price now fits and cash is sound (81% of five years' profit), but it stays follow until promoter selling stops and the pledge is released. **24 Oct 2026:** growth estimate cut from 17% to 13%, because management's own plan (₹2,500cr of revenue by FY31 at a flat 18–20% margin, with new lines adding depreciation and interest) works out to about 13% a year; the price no longer fits.",
            watch: 'Promoter selling actually stopping (the MD and a family trust sold about 0.8% more in September) and the rest of the pledge released; Q2 margin above 16% despite power and freight costs; new lines and the Unitec joint venture running by April 2027.',
        },
        {
            company: 'SKF India', rank: 3, stance: 'PRICED', segment: MNC,
            what: "The automotive half of SKF's Indian business since the October 2025 demerger, to be branded SKF Vertevo: bearings and wheel-end units for two-wheelers, cars and trucks, plus replacement sales. Bajaj, Mahindra and Tata are its largest customers.",
            view: "**A better business than the demerger quarter suggested, now waiting to pass on its costs.** Q1 revenue rose 27% and Q2 product sales 16% against carved-out bases, and guidance rose in August to about 20% growth for FY27. But the pre-tax margin fell from 14.3% in Q1 to 11.7% in Q2, because steel and supplier price rises came before customers' price rises; management expects to recover most of it, with arrears, in the December quarter and to be back above 15% EBITDA (counting other income) within FY27. ₹29cr of other income, mostly rent and services charged to its industrial sister, made up about 41% of Q2 pre-tax profit. Plants are 93% loaded until the first new line starts this quarter, the aftermarket is still shrinking and the top ten customers buy 70%. Cash is sound: about 84% of five years' profit arrived as operating cash. The price needs about {need:SKF India|23}% a year against my ~14%, about 4 points less with the one-off tax charge still in the trailing profit added back. **7 Nov 2026:** stays wait after missing the 13% pre-tax checkpoint in Q2.",
            watch: 'Pre-tax margin back above 13% in Q3 as customer price rises and arrears are billed; the first new line producing in the December quarter and the Haridwar lines in March and July 2027; how AB SKF’s 52.6% stake moves to SKF Vertevo after its 1 December Stockholm listing.',
        },
        {
            company: 'SKF India (Industrial)', rank: 4, stance: 'PRICED', segment: MNC,
            what: "The industrial half of SKF India, demerged and separately listed from 1 October 2025: industrial bearings sold to machine makers and distributors, plus remanufacturing and condition monitoring, from one Pune plant and heavy imports from the group.",
            view: "**A good franchise whose parent may take more of it.** Revenue grew 18% in Q1 on wind, rail and machinery orders, and it holds ₹564cr of net cash. But the underlying margin slipped to about 12%, the plant budget rose to ₹900–950cr, the MD changed on 1 September, and shareholders are asked to approve up to about ₹222cr of royalty and trademark fees for FY27. The price needs about {need:SKF India (Industrial)|20}% a year against my ~14%.",
            watch: 'A clean margin of 13%-plus once IT separation costs end (about Q4 FY27); royalty and trademark fees actually paid against the ₹222cr ceiling; plant spending staying under ₹1,000cr.',
        },
        {
            company: 'Timken India', rank: 5, stance: 'PRICED', segment: MNC,
            what: "Tapered, spherical and cylindrical roller bearings for railways, trucks and tractors, steel, cement and wind, plus exports to the group; 51% owned by The Timken Company of the US.",
            view: "**India's best railway-bearing franchise, priced far ahead of its earnings.** Q1 sales rose 15% and the gross margin held through a steel rise, but FY26 profit fell 11%, return on capital fell from 29% to 18% as the ₹720cr Bharuch plant ramps up, and rail buying has slowed. Contingent claims total about ₹182cr and FY27 related-party trade roughly doubles. Q2 (call of 30 Oct 2026) was better: sales +25% to ₹969cr with exports up about 60%, Bharuch sold about ₹75cr with its spherical lines at the promised 70%, and the Jamshedpur rail line starts trials in November–December; but rail sales were low as tenders slipped, and the margin was 19.2%, still under 20%. The price needs about {need:Timken India|26}% a year against my ~15%.",
            watch: 'Bharuch above ₹80cr a quarter, with its cylindrical lines passing 60%; operating margin back over 20% as rail tenders return; the Jamshedpur rail line qualified with customers after its November–December trials; the ₹104cr provident-fund appeal.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Indian-owned.** **Harsha: own.** The only price here that fits the growth I expect: a strong Indian cage franchise diluted by Romania, a new plant and solar, with weak cash conversion still to fix. **NRB: follow.** The best business in the sector, but promoter pledging and selling, and a price that now needs more growth than I expect, argue for watching rather than buying.",
            "**Multinational subsidiaries.** **SKF India: wait** (up from pass in September). Guidance and delivery improved sharply after the demerger, but Q2's pre-tax margin fell to 11.7% on cost rises not yet billed; I want two quarters of 13%-plus, starting with December's. **SKF India (Industrial): wait.** Strong demand, but a slipping margin, a rising plant budget and a large royalty approval. **Timken India: wait.** The best rail niche, but the price assumes Bharuch fills far faster than it is doing.",
            "**What would change my view.** For the better: Harsha's margin back at 18% with Advantek profitable; NRB's promoters stopping sales with the pledge cleared; SKF India back above 13% pre-tax once its price rises are billed; SKF Industrial's royalty staying near today's level; Timken's Bharuch filling and rail tenders resuming. For the worse: a parent charging more or moving export volume away from India, cost rises stuck on fixed contracts, or a second-half slowdown in two-wheelers, trucks and tractors.",
            "**What to watch next quarter.** Harsha's engineering margin and foreign losses; NRB's promoter filings and Q2 margin; SKF India's December-quarter margin once customer price rises and arrears are billed; SKF Industrial's clean margin and royalty paid; Timken's Bharuch revenue and rail sales.",
        ],
        bottomLine:
            "Bearings has real moats (design-in for the life of a programme, long approvals and a brand-protected aftermarket), but three of the five listed companies rent them from a parent that is charging more. Own Harsha Engineers Int for the industry's volume at a fair price, follow NRB Bearing until its promoters stop selling, and wait for better prices on SKF India, SKF India (Industrial) and Timken India.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/NRBBEARING/consolidated/' },
        { label: 'Timken India annual report FY26 (market size, rail, wind, cement data; related parties; contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/36200b5d-34b3-4f62-82de-27573814400e.pdf' },
        { label: 'Timken India Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ee0309b8-1455-41f8-9093-700adf4344b3.pdf' },
        { label: 'SKF India (Industrial) annual report FY26, with AGM notice (royalty approvals) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/14a18ae7-50d9-407c-b1f9-3fe2268b987e.pdf' },
        { label: 'SKF India (Industrial) Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8956b8b9-d063-4638-be74-d543e3a7ddb6.pdf' },
        { label: 'SKF India annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/eea31abf-a99b-40f8-94e3-19ff8f2e06d2.pdf' },
        { label: 'SKF India AGM presentation, August 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6fc8549d-ea2f-4cdf-a02f-c74f2f40e661.pdf' },
        { label: 'NRB Bearings annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d11be1af-5e6e-4b73-92b5-f5b8cfb8dc4c.pdf' },
        { label: 'NRB Bearings rating rationale, July 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/NRBBearingsLimited_July%2029_%202026_RR_400601.html' },
        { label: 'Harsha Engineers Q1 FY27 earnings presentation — company', url: 'https://harshaengineers.com/InvestorRelations/pdffiles/Earning%20Presentation%20Q1FY2027.pdf' },
        { label: 'Harsha Engineers rating rationale, April 2026 — CARE Ratings', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130447_Harsha_Engineers_International_Limited.pdf' },
        { label: 'Two-wheeler outlook FY27 — ICRA', url: 'https://www.icra.in/Research/ViewResearchReport/6836' },
        { label: 'Passenger-vehicle outlook FY27 — ICRA', url: 'https://www.icra.in/Research/ViewResearchReport/6895' },
        { label: 'Commercial-vehicle volumes to grow 4–6% in FY27 (ICRA) — HDFC Sky', url: 'https://hdfcsky.com/news/domestic-cv-wholesale-volumes-to-grow-4-6-pc-in-fy27-icra' },
        { label: 'Auto components growth slowdown in FY27 (ICRA) — Autocar Professional', url: 'https://www.autocarpro.in/news/indias-auto-sector-faces-growth-slowdown-in-fy27-after-policy-driven-fy26-surge-icra-131832' },
        { label: 'Railways demand-for-grants analysis 2026-27 — PRS Legislative Research', url: 'https://prsindia.org/files/budget/budget_parliament/2026/DfG_Analysis_2026-27-Railways.pdf' },
        { label: 'Bearing imports and exports, HS 8482 (commerce ministry TradeStat) — Busy', url: 'https://busy.in/hsn/sub-chapter-8482/' },
        { label: 'India imports of bearings from China — Trading Economics', url: 'https://tradingeconomics.com/india/imports/china/ball-roller-bearings-parts' },
        { label: 'BIS mark for bearings: draft quality control order — Certification India', url: 'https://www.certification-india.com/en/bis-mark-made-compulsory-for-bearings-in-phased-rollout-across-india/' },
        { label: 'SKF Vertevo to list on Nasdaq Stockholm in Q4 2026 — MAinsights', url: 'https://www.mainsights.io/ma-news/skf039s-publ-planned-automotive-spin-off-skf-vertevo-will-list-on-nasdaq-stockholm-in-q4-2026' },
    ],
};
