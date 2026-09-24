import { SectorOverview } from './types';
import { healthProductsBusinesses } from './health-products-businesses';
import { healthProductsValuationInputs } from './card-data/health-products';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const DEVICES = 'Medical devices and lab plastics — made in India, sold worldwide';
const DENTAL = 'Dental products — materials, labs and distribution';

export const healthProducts: SectorOverview = {
    sector: 'Health Products',
    title: 'Health Products',
    format: 'ranked',
    businesses: healthProductsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: healthProductsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Poly Medicure': 15,
            'Tarsons Products': null,
            'OSEL Devices': 15,
            'Prevest Denpro': 15,
            'Laxmi Denta': 15,
            'Vasa Denticity': 15,
        },
    },
    standfirst:
        "Six small and mid-sized companies that make or sell health products other than medicines. Poly Medicure makes hospital disposables such as IV cannulas and dialysis products; Tarsons makes plastic labware; OSEL makes hearing aids alongside phones and display screens. Three are in dentistry: Laxmi Dental makes crowns and clear aligners, Prevest makes dental materials, and DentalKart (Vasa Denticity) sells dental supplies online. India still imports 70–80% of the medical devices it uses, and Indian makers compete in consumables rather than machines. Three of the six are SME-listed; OSEL reports only half-yearly, while Prevest and DentalKart publish quarterly figures. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): Poly Medicure and Laxmi Dental consolidated, the others standalone. OSEL reports half-yearly, so its figures sit in the Q2 and Q4 columns. Operating profit ÷ sales.',
            note: 'Prevest earns 34–38% on dental materials; DentalKart, a distributor, earns 0–8%.',
            values: {
                'Poly Medicure': [26, 26, 22, 21, 24],
                'Tarsons Products': [31, 32, 35, 34, 28],
                'OSEL Devices': [null, 17, null, 20, null],
                'Prevest Denpro': [35, 36, 34, 38, 35],
                'Laxmi Denta': [18, 15, 11, 19, 19],
                'Vasa Denticity': [5, 8, 3, 0, 6],
            },
            cellNotes: {
                'Tarsons Products': 'Standalone; polymer costs rose 25–50% and it could not pass them on to export buyers (company).',
                'Vasa Denticity': 'Q4 FY26 margin fell to zero as its own-brand products ran out of stock.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Poly Medicure’s 30% in Q1 includes two European acquisitions; its Indian plants grew 12% after price increases stuck with hospitals.',
            values: {
                'Poly Medicure': [5, 6, 17, 21, 30],
                'Tarsons Products': [10, 0, 10, 4, 21],
                'OSEL Devices': [null, 69, null, 47, null],
                'Prevest Denpro': [18, 15, 23, 2, 24],
                'Laxmi Denta': [10, 26, 6, 21, 14],
                'Vasa Denticity': [12, 22, 14, -1, 37],
            },
            cellNotes: {
                'Poly Medicure': 'Q1 FY27 includes Citieffe (Italy) and PendraCare (Netherlands), bought in FY26; the Indian company grew 12.3% (company).',
                'Vasa Denticity': 'Q1 FY27 growth came mostly from bigger orders of low-margin digital equipment; order numbers rose 8% (company).',
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
            note: 'Tarsons’s return has fallen from 35% to 6% as it built new plants; Prevest has held 25% or more.',
            values: {
                'Poly Medicure': [17, 18, 24, 18, 12],
                'Tarsons Products': [35, 19, 10, 9, 6],
                'OSEL Devices': [26, 35, 54, 31, 24],
                'Prevest Denpro': [40, 32, 27, 25, 25],
                'Laxmi Denta': [-1, 1, 18, 19, 15],
                'Vasa Denticity': [95, 80, 45, 22, 9],
            },
            cellNotes: {
                'Poly Medicure': 'Held down by ₹484cr of unspent share-sale money (March 2026), two recent acquisitions and new plants still filling.',
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
            note: 'Tarsons holds very large stocks of thousands of lab products. Laxmi Dental’s FY25 figure is distorted by its listing year.',
            values: {
                'Poly Medicure': [185, 209, 188, 239, 335],
                'Tarsons Products': [482, 672, 580, 469, 423],
                'OSEL Devices': [33, 67, 35, 156, 172],
                'Prevest Denpro': [83, 130, 181, 211, 227],
                'Laxmi Denta': [81, 61, 47, -132, 147],
                'Vasa Denticity': [37, 45, 90, 110, 139],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Tarsons converts best; DentalKart and OSEL have had negative operating cash over five years.',
            values: {
                'Poly Medicure': [57, 72, 74, 51, 55, 61],
                'Tarsons Products': [54, 58, 102, 105, 102, 81],
                'OSEL Devices': [75, -122, 59, -209, -38, -69],
                'Prevest Denpro': [47, 50, 55, 68, 62, 57],
                'Laxmi Denta': [-29, 156, 33, 102, -11, 46],
                'Vasa Denticity': [0, 20, -58, -22, -245, -59],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'Only Prevest has produced steady free cash. Tarsons spent heavily on new plants; Poly Medicure spends about a fifth of sales on capacity every year.',
            values: {
                'Poly Medicure': [-3.6, -4.3, -0.8, -5.9, -3.3, -3.6],
                'Tarsons Products': [-16.3, -40.3, -28.5, -13.4, -4.2, -19.8],
                'OSEL Devices': [4.2, -15.5, 0.1, -37.2, -11.3, -14.8],
                'Prevest Denpro': [5.6, -7.1, 13.0, 20.7, 19.8, 11.9],
                'Laxmi Denta': [-8.8, 2.5, -3.6, 11.7, -8.3, -1.0],
                'Vasa Denticity': [-1.3, 0.0, -7.6, -9.5, -11.6, -7.8],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for all except Tarsons.',
            note: 'Below zero means more cash than debt. Most hold net cash from share sales; Tarsons borrowed to build its new plants.',
            values: {
                'Poly Medicure': [-1.1, -0.6, -0.4, -2.3, -1.1],
                'Tarsons Products': [-0.4, 0.4, 2.4, 2.1, 2.4],
                'OSEL Devices': [1.0, 1.9, 1.1, 1.2, 0.8],
                'Prevest Denpro': [-2.8, -2.0, -2.5, -3.0, -3.2],
                'Laxmi Denta': [7.0, 5.3, 2.2, -2.3, -0.5],
                'Vasa Denticity': [0.2, 0.0, -1.4, -2.1, -4.4],
            },
            cellNotes: {
                'Laxmi Denta': 'The company reports about ₹99cr of cash, deposits and investments at March 2026, much of it IPO money in deposits; this ratio counts only part of it, so net cash is understated.',
                'Tarsons Products': 'Year-end figure. Management put net debt at ₹330–340cr (gross about ₹380cr) in August 2026.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Tarsons spent about half its sales a year on new plants for five years; the dental companies spend little.',
            values: {
                'Poly Medicure': [16.9, 21.4, 20.1, 19.8, 16.4, 18.8],
                'Tarsons Products': [43.9, 67.1, 66.4, 48.4, 37.8, 52.0],
                'OSEL Devices': [0.4, 2.1, 9.7, 0.1, 4.4, 3.7],
                'Prevest Denpro': [12.9, 27.1, 6.7, 3.1, 2.5, 9.3],
                'Laxmi Denta': [7.3, 6.2, 7.7, 6.7, 6.5, 6.8],
                'Vasa Denticity': [1.3, 1.6, 1.2, 7.5, 1.8, 3.2],
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
            note: 'DentalKart and OSEL own little plant; Tarsons’s new plants have pushed its ratio down to 0.5.',
            values: {
                'Poly Medicure': [1.9, 1.8, 1.6, 1.5, 1.1],
                'Tarsons Products': [1.6, 1.3, 1.1, 0.7, 0.5],
                'OSEL Devices': [13.0, 11.7, 7.3, 10.9, 10.5],
                'Prevest Denpro': [5.4, 7.1, 2.1, 2.3, 2.7],
                'Laxmi Denta': [3.4, 4.0, 4.2, 4.7, 4.4],
                'Vasa Denticity': [77.0, 61.5, 85.0, 16.1, 12.0],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'reg', label: 'Approvals and quality', description: 'US FDA, European and Indian device approvals that take years to win.' },
            { key: 'brand', label: 'Brand and reach', description: 'A name doctors, dentists and labs know; distribution across markets.' },
            { key: 'tech', label: 'Product difficulty', description: 'How hard the product is to make well.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether cost increases were passed on this year.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and the quality of reporting.' },
        ],
        rows: [
            { company: 'Poly Medicure', trend: 'widening', trendNote: 'Price increases stuck; aims to double revenue by FY30; new regional leaders hired.',
                grades: { reg: { grade: 'A', note: 'Approvals in many countries' }, brand: { grade: 'A', note: 'Leader in Indian vascular access' }, tech: { grade: 'B', note: 'Moving into dialysis, stents, oncology' }, pass: { grade: 'A', note: 'Raised prices to hospitals' }, cash: { grade: 'B', note: 'Net cash; capex-heavy' } } },
            { company: 'Tarsons Products', trend: 'stable', trendNote: 'New plant commissioning slipped again; exports recovered but at thinner margins.',
                grades: { reg: { grade: 'B', note: 'Quality approvals for labware' }, brand: { grade: 'A', note: 'Leading Indian labware brand' }, tech: { grade: 'B', note: 'Precision plastics; cell culture coming' }, pass: { grade: 'C', note: 'Could not raise export prices' }, cash: { grade: 'B', note: 'Good conversion; debt for new plants' } } },
            { company: 'OSEL Devices', trend: 'stable', trendNote: 'Growing fast across hearing aids, phones and displays; interest costs have risen.',
                grades: { reg: { grade: 'B', note: 'US FDA registration for hearing aids' }, brand: { grade: 'C', note: 'Licenses the Philips name for phones' }, tech: { grade: 'C', note: 'Assembled hardware' }, pass: { grade: 'C', note: 'Government tenders set prices' }, cash: { grade: 'D', note: 'Negative operating cash over five years' } } },
            { company: 'Prevest Denpro', trend: 'widening', trendNote: 'US private-label and 3D-printing resins growing; new lines lightly used.',
                grades: { reg: { grade: 'B', note: 'Sells in 90-plus countries' }, brand: { grade: 'B', note: 'Known dental-materials brand in India' }, tech: { grade: 'B', note: 'Cements, files, 3D resins' }, pass: { grade: 'A', note: 'Margins held at 34–38%' }, cash: { grade: 'A', note: 'Net cash; steady free cash' } } },
            { company: 'Laxmi Denta', trend: 'widening', trendNote: 'Aligners recovering; US tariffs cut; building its own plant.',
                grades: { reg: { grade: 'B', note: 'Exports crowns and aligners to the US and Europe' }, brand: { grade: 'B', note: 'Strong with Indian dentists' }, tech: { grade: 'B', note: 'Digital crowns and aligners' }, pass: { grade: 'B', note: 'Margins back to 19%' }, cash: { grade: 'C', note: 'Five-year cash conversion 46%' } } },
            { company: 'Vasa Denticity', trend: 'stable', trendNote: 'Stock-outs of own brands cut to about 13%; still thin margins.',
                grades: { reg: { grade: 'C', note: 'Distributor' }, brand: { grade: 'B', note: 'Leading online dental store (DentalKart)' }, tech: { grade: 'D', note: 'Resells others’ products' }, pass: { grade: 'C', note: 'Competes on price' }, cash: { grade: 'D', note: 'Negative operating cash' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Prevest Denpro is the one to own, in a small size.** It makes dental cements, root-canal materials and files, and 3D-printing resins in one plant in Jammu, sells in more than 90 countries, and makes products for three or four large dental companies to sell under their own names. It has earned a 35–36% operating margin for three years, turned ₹15cr of operating cash into ₹13cr of free cash in FY26, and has no debt. Its older lines run at 67–68% of capacity, enough for about ₹125cr of sales against ₹72cr today, so growth needs no new plant. Q1 FY27 sales rose 21% and profit 28%, after a weak Q4 in which it missed its own promise of more than 20% growth for the half-year. The price asks for about 13% a year, below my 15%. **The risks are size and people**: it is SME-listed and thinly traded, and its 72-year-old founder had a medical emergency in June.",
                "**Follow Poly Medicure and Laxmi Dental.** **Poly Medicure** is the best franchise here. It makes about 600 million IV cannulas a year, roughly 11% of world supply by its own count, and a 4–5% price increase stuck with hospitals in Q1 FY27. But the group is getting worse at using money. Return on capital has halved from 24% to 12% in two years, free cash has been negative for four years, ₹484cr of its ₹1,000cr share sale was still sitting in deposits and funds in March, and its newest acquisition, PendraCare, earns a margin of about 1%. Q1 revenue rose 30%, yet profit fell 8%. The price needs about 25% a year against my 15%. **Laxmi Dental** is a recovery at a full price: its margin is back to 19% and it has reinstated a 15–20% growth aim. But operating cash was negative in FY26 and adjusted operating profit grew only 8% in Q1, so I expect about 15% a year, a little less than the 18% the price asks.",
                "**Pass on Tarsons, DentalKart and OSEL.** **Tarsons** has India's best-known labware brand and turns its operating profit into cash, but it has spent about ₹893cr, twice a year's sales, on plants that keep slipping, for products it cannot price up abroad. It reported its first loss (₹1.4cr) in Q1 FY27, one quarter after promising there would be none, and the plants are late for the third time. **DentalKart** (Vasa Denticity) cut its gross-margin target, dropped its revenue guidance, and lost its CFO, company secretary and an independent director within five months. **OSEL** grew 57% in FY26, but it had to correct a cash-flow statement that counted about ₹50cr of borrowing as operating cash, and it buys ₹44cr a year from a promoter-group firm. **Neither DentalKart nor OSEL has turned profit into cash in either of the last two years.**",
                "**Three things to hold onto before reading the rest.** First, **making beats reselling**: the makers of approved, branded consumables (Poly Medicure, Tarsons, Prevest) earn 21–38% operating margins; the online distributor earns 0–8%. Second, **policy is cutting both ways**: a lower 5% GST and an anti-dumping probe on Chinese dialysers help, while the EU trade deal, a waiver of Indian trials for EU-approved devices and a proposed 20% cap on trade margins bring more competition and price pressure. Third, **half this list is very small and lightly policed**: three companies are SME-listed with a few hundred crore of market value, and the worst governance findings in this note come from two of them.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Poly Medicure and Laxmi Dental consolidated, the others standalone). OSEL reports half-yearly, so some quarters are blank. None of these companies publishes an order book. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Health products other than medicines: the needles, tubes, crowns, labware and hearing aids that hospitals, labs and dentists use every day. India's medical-device market is roughly US$15–20 billion (estimates differ widely); Mordor Intelligence expects it to grow about 7.8% a year to 2031, and the government's ambition is US$50 billion by 2030. **India still imports 70–80% of the devices it uses** (IBEF). Imports rose from ₹41,709cr in FY20 to about ₹89,000cr in FY26, against exports of roughly ₹31,000–34,000cr (The Core, from industry and government trade data). Most of the import bill is the expensive end: electronic equipment and imaging were 59% of it in FY24. **India makes what is cheap and imports what is expensive**, and every company here sits in the consumables end, where Indian makers can compete.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Plastic resin, chemicals and electronic parts → **makers** of disposables, labware, dental materials and devices (Poly Medicure, Tarsons, Prevest, Laxmi Dental, OSEL) → distributors, dealers and online stores (DentalKart) → hospitals, labs, dentists and patients. **The profit sits with approved makers of branded consumables.** Poly Medicure's Indian plants earned a 28% operating margin in Q1 FY27 and Prevest 35%, because a product with regulatory approval and a name doctors trust is hard to replace. DentalKart, which resells, earned 0–8% over the last five quarters; OSEL, which assembles bought-in electronics, earns 17–20% but has not turned it into cash. Tarsons adds a third lesson: a good maker that builds far ahead of demand earns 6% on its capital until the plants fill.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Hospitals are the main buyers of disposables, and they are growing: CRISIL Ratings expects private-hospital revenue to rise 14–15% in FY27, a fifth straight double-digit year, with more than 10,000 beds added over FY26–27. Poly Medicure says insurance now pays 60–65% of hospital bills, up from about 50%, which pushes hospitals toward good Indian devices over costlier imports. In dentistry, IMARC sizes Indian dental consumables at US$1.24 billion in 2025, growing 8.7% a year to 2034, and Frost & Sullivan (in Laxmi Dental's presentation) expects clear aligners to grow about 23% a year and crowns about 12%; India has about 2 dentists per 10,000 people against 6-plus in the US and Germany. Lab plastics are a small market (₹1,200–1,300cr, by Tarsons' estimate) just leaving a three-year slump after COVID, and fewer than 3% of Indians who need a hearing aid have one. **My view: domestic demand is healthy and mid-cycle; exports are the swing factor.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Demand is steady; costs, trade and rules are not.** The West Asia war in March–April 2026 pushed crude-linked resin prices up 20–70% and freight two to three times, and Poly Medicure's Middle East sales fell 32% in Q1 FY27. US tariffs on Indian goods went from 50% in 2025 to 18%, then 10%; since 24 July 2026 a 10% duty applies with no expiry date. The incentive scheme for device makers has a ₹3,420cr budget but had paid out only ₹157cr by December 2025, too little to dent an ₹89,000cr import bill, while GST on most devices fell to 5% in September 2025. Two newer moves cut the other way: a Parliamentary committee (August 2026) proposed capping the gap between landed cost and retail price at 20%, after Maharashtra's regulator found IV sets bought at ₹11 billed at ₹325; and from September 2026 devices approved in the EU can skip Indian clinical trials, while the India–EU trade deal will remove duties of up to about 27.5–30% on most EU devices, probably from 2027. **My view: a margin cap would hit hospital and distributor mark-ups more than factory prices, but the EU opening means more imported competition for every maker here.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Poly Medicure** depends on hospital demand, on its new heart, bone and dialysis lines, and on an anti-dumping duty against Chinese dialysers; **Tarsons** on finishing its plants and finding buyers for what they make; **Prevest** on exports, US private label and its founder's health; **Laxmi Dental** on US dental groups, aligner pricing and turning profit into cash; **DentalKart** on keeping its own brands in stock and rebuilding its management; **OSEL** on government hearing-aid tenders, its new clinics and cleaning up its reporting. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Approved, branded consumables', 'Poly Medicure, Prevest', '21–38%', '12–25%', '**57–61%**', 'Approvals and trust; capex and stock hold back cash'],
                        ['Capital-heavy labware maker', 'Tarsons', '28–35% (standalone)', '6%', '**81%**', 'Good cash from operations, eaten by ₹893cr of plants'],
                        ['Custom dental work', 'Laxmi Dental', '11–19%', '15%', '**46%**', 'Labour-heavy; scanners and US tariffs swing the margin'],
                        ['Electronics assembly', 'OSEL', '17–20% (half-years)', '24%', '**−69%**', 'Bought-in parts, tender prices, slow-paying customers'],
                        ['Online distribution', 'DentalKart', '0–8%', '9%', '**−59%**', 'Resells others’ goods; stock ties up the cash'],
                    ],
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Medical devices, India', 'US$15–20bn (estimates differ)', '~7.8% a year to 2031; government aim US$50bn by 2030', 'IBEF; trade.gov; Mordor Intelligence'],
                        ['Imports', '~₹89,000cr in FY26 (₹41,709cr in FY20); 70–80% of use', 'Growing faster than exports', 'The Core (AiMeD, DGCI&S), Sep 2026; IBEF'],
                        ['Device exports', '~US$4bn in FY25', '**US$8bn by 2030**, over 20% a year', 'Bain & Co, Jul 2026'],
                        ['Private hospitals', '10,000+ beds added over FY26–27', '**Revenue +14–15% in FY27**', 'CRISIL Ratings'],
                        ['Dental consumables', 'US$1.24bn (2025)', 'US$2.64bn by 2034, **8.7% a year**', 'IMARC'],
                        ['Crowns and aligners', 'Crowns and bridges ~US$1.4bn (2023)', 'Crowns ~12% a year; aligners **~23% a year**', 'Frost & Sullivan, in Laxmi Dental’s presentation'],
                        ['Lab plastics', '₹1,200–1,300cr; industry −8% in FY26', 'Back to high single digits', 'Tarsons, Q4 FY26 and Q1 FY27 calls'],
                        ['Hearing aids', 'US$235mn; ~7 lakh units a year; under 3% use', 'US$376mn', 'IMARC, in OSEL’s presentation'],
                        ['Device incentive scheme (PLI)', '₹3,420cr budget; **₹157cr paid** by Dec 2025', 'Production period ends FY27', 'Department of Pharmaceuticals, via The Core'],
                        ['US tariff on India', '10% since 24 Jul 2026 (50% in 2025)', 'No expiry date', 'The Week, Jul 2026'],
                        ['Trade-margin cap', 'Proposed 20% cap on the cost-to-price gap', 'Category by category more likely', 'Parliamentary committee, Aug 2026; Medical Buyer'],
                        ['EU opening', 'Indian trials waived for EU-approved devices (Sep 2026)', 'Duties of up to ~27.5–30% removed, probably from 2027', 'Pharmadocx; MedTech Europe'],
                    ],
                    note: 'Private market-size estimates differ widely; compare each only with itself.',
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
                    label: 'Lasting: approvals, scale and trust',
                    text: "**Poly Medicure** makes about 600 million IV cannulas a year, roughly 11% of world supply by its own count, holds product registrations in more than 100 countries and European approvals with 30-plus more products in the queue, and has 15 US approvals with 11–13 pending. Its managing director says it has “hardly lost any large customer” in 15–20 years. The proof came in Q1 FY27: a 4–5% price rise stuck with hospitals, and the Indian plants' gross margin rose to 71.5% from 68.2% even as Haryana's minimum wage went up 35%. **Prevest** has US, European and multi-country (MDSAP) approvals, makes products for three or four large dental companies, and was named by DentalKart's managing director as one of its contract makers. Its US private-label customers absorbed the tariff and US sales grew 38% in FY26. **My view: these two have real pricing power, which is the moat that matters.**",
                },
                {
                    label: 'Lasting but narrower: a brand in one niche',
                    text: "**Laxmi Dental** says it is India's second-largest domestic dental lab and its largest export lab, among more than 5,000 mostly small labs, with 22,000 dentists in its network. Its switching cost is the scanner: it places up to about 1,000 a year with dentists, and those scanners send digital cases straight to its labs. **Tarsons** has an estimated 9–12% share of Indian labware (Frost & Sullivan, 2021) and grew 4.5% in FY26 while the industry shrank about 8%, with little Chinese product in India. But in cell culture, where it is expanding, customers qualify a new supplier slowly and first take it as a back-up, which protects Thermo Fisher and Corning more than Tarsons for now. **Both moats are real at home and thin abroad.**",
                },
                {
                    label: 'Wearing: where the price is set by someone else',
                    text: "**Tarsons** could not pass on a 25–70% jump in plastic costs: its export price rises were “close to zero”, and management said a 30–40% rise would hand share to multinationals sitting on imported stock. **Poly Medicure**'s weak spot is dialysis. Chinese dialysers enter duty-free through the ASEAN trade deal and pay 5% GST, while Poly Medicure pays 18% GST on its inputs; its kidney-care sales fell 3.8% in Q1 and it has asked for an anti-dumping duty. **Laxmi Dental**'s aligner brand held its price against funded rivals, so its sales were roughly flat in FY26 before recovering 28% in Q1. **Pricing power at home does not travel.**",
                },
                {
                    label: 'Barely a moat: reselling and assembly',
                    text: "**DentalKart** has about 2–3% of Indian dental supply against 97% bought from offline dealers, and earns only 10–15% gross margin on multinational brands. It could not pass on the rupee's fall: “If we increase the prices, we fear that we might lose some customers.” Dentists use several suppliers, so switching costs are low. **OSEL** assembles LED screens from Chinese parts, sells phones under a Philips licence made by a contractor, and sells entry-level hearing aids to government schemes at ₹2,500–3,000 a unit; its clinic chain SFL sells at ₹35,000–40,000, which is the reason for buying it. **Neither has a moat yet; both are trying to buy or build one.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**BD**, **B. Braun**, Medtronic, Nipro and Chinese dialyser makers in hospital disposables, with **Meril** in heart devices; **Thermo Fisher**, **Corning** and **Eppendorf** in labware, plus Indian brands Abdos and Accumax; **Dentsply Sirona**, **Ivoclar**, **3M (Solventum)** and **Align Technology** in dentistry, with makeO–Zenyum and other funded aligner brands on price; **Medikabazaar** online; and the global “Big Five” hearing-aid makers (Sonova, Demant, WS Audiology, GN, Starkey) at the premium end.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the approved makers, yes; for the reseller and the assembler, no. This year's test was the resin and freight shock after the West Asia war: the makers with pricing power held their margins and the price-takers did not.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: approved consumables',
                    text: "**Prevest** has earned 35–36% for three years (35.5% in Q1 FY27); materials are only 23% of its sales, so resin spikes barely touch it. **Poly Medicure**'s Indian plants earned 28.0% in Q1, above their 25–27% guide, helped by the price rise and stock bought before the spike; the group earned 24.1%, inside its 23–25% guide. Management itself expects the Indian gross margin to settle back at 68–69% from 71.5%, so Q1 should not be extrapolated. The drag on the group is its acquisitions: PendraCare earned about 1% on €8.2mn of sales in 2025 and Citieffe about 18%, against a target of mid-teens and later 18–20%. **My view: the core margin is structural; the group margin depends on fixing what it bought.**",
                },
                {
                    label: 'Squeezed or recovering: read the adjustments',
                    text: "**Tarsons**'s standalone margin fell from 31.2% to 28.1% in Q1 and its gross margin from 71.4% to 67.1%, still above the 65% floor it promised; the group earned 23.6%. The bigger problem sits below the operating line: depreciation rose from ₹22cr in FY22 to ₹97cr in FY26 and interest from ₹4cr to ₹23cr, so profit fell from ₹101cr to ₹14cr. **Laxmi Dental** recovered from 11% in Q3 FY26 to 19.2% in Q1 FY27, but part of that came from a 62% fall in thin-margin scanner sales and lower share-based pay; adjusted operating profit rose only 8%. If it places the 800–1,000 scanners it plans this year, its gross margin will slip back. **Laxmi's margin is recovering; its quality needs another two quarters to judge.**",
                },
                {
                    label: 'Not structural: reselling and assembly',
                    text: "**DentalKart**'s margin fell to 0.4% in Q4 FY26 and recovered to 6.1% in Q1. Its gross margin was 33.6% a year earlier and 24.8% now, hit by own-brand stock-outs and a costlier rupee, and it cut its target band from 30–33% to 27–30% “on review of achievable mix and FX”. Digital equipment, its fastest-growing line, earns only 10–12% gross. **OSEL** earns about 18% overall but will not disclose segment margins; on its calls it gave hearing aids a 30–35% gross margin, LED screens about 15% and phones 25–30%. **Both margins depend on mix, not on any power to set price.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**OSEL**'s operating cash was −₹69cr in FY25 and −₹23cr in FY26; LED projects can take 120 days to bill, and CRISIL puts its current assets at about 350 days of sales. Its first-half FY26 statement had counted about ₹50cr of borrowing as operating cash; corrected, that half's operating cash was about −₹40cr, not +₹10cr. **DentalKart**'s operating cash has been negative for three years (−₹11cr, −₹4cr, −₹25cr), as inventory days rose from 99 to 151 and stock grew another ₹12.7cr in Q1 FY27. **These two are growing on working capital, not on profit.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Poly Medicure**'s cycle went from 239 to 335 days in FY26 on Screener's figures, partly because year-end acquisition balances inflate it; debtor days rose from 76 to 103 as it gave export customers longer credit. Management's own measure is 140 days, flat from March to June, and it expects no improvement this year. **Laxmi Dental**'s operating cash swung from +₹44cr in FY25 to −₹5cr in FY26 as receivables rose 24% to ₹45.5cr, faster than sales, with another ₹5.2cr already written down. **Prevest**'s inventory days rose from 168 to 239 in two years, the one blemish on an otherwise clean record.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Tarsons**'s cycle has fallen from 672 to 423 days on the chart, and operating cash of ₹118cr in FY26 matched its operating profit, as it has for three years. That is the one strong point in its numbers. Its free cash has still been negative for five years, because the plants cost more than the cash coming in. With the building mostly done, management expects net debt to fall ₹40–50cr this year.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Labware and dental-materials makers carry hundreds or thousands of products, device exporters wait weeks for ships, and a distributor that imports its own brands must buy minimum batches. Long cycles are normal here, but they should not be rising while sales grow. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Poly Medicure', 'Working capital 140 days, no improvement expected in FY27; capex ₹200–225cr', 'Cash ₹855cr against a ~₹250cr working-capital line and ~€9mn of Citieffe loans; ₹484cr of share-sale money unspent (Mar 2026)'],
                        ['Tarsons Products', 'Net debt to fall ₹40–50cr in FY27; ~₹70cr of loans due; ₹160cr of work in progress to finish', 'Gross debt ~₹380cr, net ₹330–340cr; ₹108.6cr guarantee for a subsidiary’s loan'],
                        ['Laxmi Dental', 'Machinery and Palghar land this year, cost not given', 'Cash and investments ~₹99cr, debt-free; ₹54.7cr of IPO money unused, extension sought'],
                        ['DentalKart', 'Inventory up ₹12.7cr in the quarter; 120–150 inventory days near term', 'Net cash ₹47cr (Mar 2026); bank lines closed in July'],
                        ['OSEL Devices (H2 FY26 call)', '₹30cr borrowed against mutual funds as “interest arbitrage”', 'Borrowings ₹94cr; operating cash −₹23cr in FY26'],
                        ['Prevest Denpro (no Q1 call)', 'Capex done; no big spend needed', 'Debt-free; free cash ₹13cr in FY26'],
                    ],
                    note: 'OSEL and Prevest hold calls only half-yearly; their latest were on FY26 results. Cash-flow statements are filed half-yearly.',
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
                    label: 'Growth driver: hospitals and new therapies',
                    text: "**Poly Medicure** guides ₹2,300–2,400cr of group revenue in FY27 (up 23–28%) and has set a goal to double revenue by FY30, about 18% a year from ₹1,875cr, 80% of it organic. New plants at Palwal (bone and transfusion products, around March 2027) and Noida (heart devices, Q1 FY28) are expected to turn over 1.2–1.4 times their cost, as its plants have in the past. The FY27 guide needs about ₹592cr a quarter from here against ₹525cr in Q1, and CRISIL's base case is lower at 20–22%. **My view: the doubling is plausible on revenue, but earnings will lag, because treasury income falls as the cash is spent and depreciation is rising.**",
                },
                {
                    label: 'Growth driver: digital dentistry and exports',
                    text: "**Laxmi Dental**'s international lab sales grew 37% in Q1 (about 25% without the rupee's fall) and its aligners 28–29%; it has hired a US chief executive and signed a letter of intent for land that would give its Indian plants about three times their present space. The US is about 20% of its revenue, and management called a 10% tariff “not a dealbreaker”. **Prevest**'s US business grew 38% in FY26, its printers 162% and resins 40.5% from small bases, and it aims to pass ₹100cr of sales within three years, about 12% a year. Its new lines run at only 18–20% of capacity, so that growth needs little money. **This is the best-funded growth in the sector: capacity already built, customers already buying.**",
                },
                {
                    label: 'Growth driver: lab research and biopharma',
                    text: "The Budget's Biopharma SHAKTI programme (₹10,000cr over five years) and India's vaccine and biologics makers are the target for **Tarsons**'s new cell-culture and bioprocess range. Management guides 15%-plus growth in FY27, ₹65–70cr from new products in FY28, and a peak of ₹750–800cr of sales on today's plants, against ₹423cr in FY26. Customers take a new supplier first as a back-up, so the ramp will be slow. **My view: the capacity is there; the orders are not yet.**",
                },
                {
                    label: 'Growth driver: retail and online',
                    text: "**OSEL** bought 90.69% of SFL, a hearing-clinic chain with ₹26–27cr of sales and a database of 100,000-plus patients, and says ₹500cr of revenue in FY27 is possible against ₹293cr in FY26; it targets ₹50cr of exports (₹23cr last year) and a port-side plant from April 2027. **DentalKart** has replaced its revenue guidance with a “North Star” of doubling every three to four years; 97% of dental supply is still bought offline, and it is piloting same-day delivery. **Both are growth stories that have not yet produced cash.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Poly Medicure** delivered its promised second-half rise (+21% against 20%) and a 26.8% Indian margin in FY26 against a 25–27% guide, then beat the top of its margin band in Q1 and widened its Indian revenue guide up to ₹1,900–2,000cr. **Laxmi Dental** went from refusing to guide in May to a 15–20% growth and 18–20% margin aim in August, and delivered 19.2% in Q1.",
                },
                {
                    label: 'Cautious',
                    text: "**Prevest** gave no FY27 number after missing its last one. **DentalKart**'s managing director called one good quarter “a direction, not a destination”, and the company says earlier guidance “showed our immaturity in handling capital markets”.",
                },
                {
                    label: 'Missed',
                    text: "**Tarsons** promised in May that its plants would be fully running in the first half and that there would be no accounting losses; in August it reported a ₹1.4cr loss and moved the plants to Q2–Q3. **Prevest** promised more than 20% growth for the second half of FY26 and delivered 12%. **Poly Medicure**'s kidney-care sales fell 3.8% against about 20% growth guided, and it cut the guide to 15–18%. **DentalKart** cut its gross-margin target within a quarter of setting it.",
                },
                {
                    label: 'Mixed',
                    text: "**OSEL** grew 57% in FY26, but its second half was flat on the first after ₹25–30cr of LED sales slipped into April, its 5 lakh-phone order target is not confirmed as met, and it will start quarterly reporting “maybe from the third quarter”. No first-half FY27 results are out yet.",
                },
                {
                    label: 'My outlook',
                    text: "Domestic consumables demand should grow about 10–14% a year to FY29, and exports 12–20% if the US tariff stays near 10% and West Asia shipping normalises. **I expect all five companies with measurable profit to compound earnings at about 15%: Poly Medicure, Laxmi Dental and Prevest on their own strengths, DentalKart and OSEL only if they fix their cash.** Poly Medicure's revenue should grow faster than that, but falling treasury income and rising depreciation hold back its earnings; Laxmi's adjusted operating profit was flat in FY26 and up only 8% in Q1. Tarsons's profit should jump once its plants fill, but from so low a base that a percentage says little.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Poly Medicure', 'Hospitals; exports; new plants and acquisitions; falling treasury income', '9% / **15%** / 20%'],
                        ['Laxmi Dental', 'US labs; aligners; scanners maturing; own plant', '8% / **15%** / 20%'],
                        ['Prevest Denpro', 'Exports and US private label; 3D resins; idle lines filling', '10% / **15%** / 22%'],
                        ['OSEL Devices', 'Hearing-aid clinics; displays; exports; working capital', '5% / **15%** / 25%'],
                        ['Vasa Denticity', 'Own brands in stock; gross margin back to 27–30%', '5% / **15%** / 25%'],
                        ['Tarsons Products', 'New plants filling; depreciation and interest falling', 'Profit too small to estimate from'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Poly Medicure', 'Group ₹2,300–2,400cr (kept); India ₹1,900–2,000cr (widened up); margin 23–25%; kidney care cut to 15–18%', '₹200–225cr; Palwal Mar 2027, Noida Q1 FY28', '**Mixed**: margin above guide; kidney care −3.8%; needs ~₹592cr a quarter'],
                        ['Tarsons Products', 'Revenue +15%-plus; net debt −₹40–50cr', 'Programme ~₹893cr (budget ₹800cr); ₹99.8cr still contracted', '**Missed**: loss after “no accounting losses”; plants late again'],
                        ['Laxmi Dental', 'Revenue +15–20%; margin 18–20% (reinstated)', '₹18.4cr in FY26; Palghar cost not given', '**Delivered**: margin 19.2%; revenue +13.9%, just under'],
                        ['DentalKart', 'No revenue guide; gross margin 27–30% (cut from 30–33%); stock-outs below 5% by Dec', 'Little', '**Walked back**: margin target cut; recovery from 0.4% to 6.1% started'],
                        ['OSEL Devices', '₹500cr-plus “possible”; exports ₹50cr (half-yearly calls)', 'SFL ~₹30cr; export plant not costed', '**Mixed**: +57% in FY26; H2 flat; cash statement corrected'],
                        ['Prevest Denpro', 'None for FY27; ₹100cr sales within three years (half-yearly calls)', 'None needed', '**Missed**: H2 FY26 +12% against >20%; Q1 +21%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what the annual reports and rating agencies added.",
            ],
            points: [
                {
                    label: 'Governance at the small companies',
                    text: "**OSEL** corrected a cash-flow statement only after investors spotted it; its spokesman said, “I am not a finance specialist”, and a promoter director holds the CFO role. It bought ₹44.3cr of goods in FY26 (about 15% of revenue) from Guardian Technologies, a promoter-group firm, issued warrants to a promoter at ₹268 while public investors paid ₹340, and lists SFL, the clinic chain it bought for ~₹30cr, among its common-control parties. Its auditor noted that stock quantities could not be matched directly between its bank statements and its books. **DentalKart** lost its CFO (March), company secretary (July) and an independent director (August); an investor said on the Q1 call that part of his earlier exchange had been removed from the transcript and recording, and earlier order figures were restated after “an internal error”. **These are the findings that decide my pass on both.**",
                },
                {
                    label: 'Related parties and capital use at the larger ones',
                    text: "**Poly Medicure** paid ₹87cr for job work in FY26 (₹89cr in FY25) to Vitromed Healthcare, a promoter-group firm, which also bought ₹23cr of goods from Poly Medicure. Pay to its key managers was ₹47.4cr, about a seventh of group profit, and it paid ₹33cr for a bankrupt mineral-water company with no stated link to medical devices. Its auditor gave a clean opinion; goodwill of ₹274cr is the key audit matter. **Tarsons**'s auditor found that the edit log was not kept for changes by certain users with special access, a control weakness though not a qualification, and Tarsons guarantees ₹108.6cr of its Singapore subsidiary's loan. **Nothing here is fraud; all of it is worth watching.**",
                },
                {
                    label: 'Capital ahead of returns',
                    text: "**Poly Medicure** raised ₹1,000cr in 2024 and bought two European companies, and its return on capital fell from 24% to 12%; treasury income was about 28% of pre-tax profit in FY26 and will shrink as the cash is spent. **Tarsons** has spent about ₹893cr, 12% over budget, and FY27 depreciation of ₹105–110cr plus about ₹20cr of interest will absorb most of its operating profit. CARE (April 2026) shows its interest cover falling from 10.4 times to 5.7 times and would downgrade above 3 times debt to operating profit. **Laxmi Dental** still had ₹54.7cr of IPO money unused 14 months after listing.",
                },
                {
                    label: 'Policy',
                    text: "A 20% trade-margin cap, if applied broadly, would squeeze distributors such as **DentalKart** most and could cut hospital demand for high-margin disposables. The EU trial waiver and the India–EU trade deal open India to more European devices. Chinese dialysers undercut **Poly Medicure** until the government rules on the anti-dumping case it asked for. The device incentive scheme is too small to change the picture before FY28.",
                },
                {
                    label: 'Input costs, freight and trade',
                    text: "Resin prices rose 20–70% after the West Asia war, and Tarsons said they were moving up sharply again in August. Freight is up two to three times, and **Poly Medicure**'s Middle East orders were stuck at ports (the region is 6–8% of its revenue). The US tariff is 10% under a rule with no end date; **Laxmi Dental** has about 20% of revenue in the US and **Prevest**'s private-label customers are absorbing the duty for now. A weaker rupee helps the exporters and hurts DentalKart, which imports.",
                },
                {
                    label: 'Key people',
                    text: "**Prevest**'s founder-MD, 72, had a medical emergency in June; the Q4 call was postponed and led by the CFO, his wife, and there is no stated succession plan. **DentalKart** has no professional chief executive and none is planned. **Small companies depend on their founders more than their disclosures admit.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **13% at 20x, 15% at 24x, 18% at 31x, 25% at 55x, 26% at 60x and 31% at 87x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Poly Medicure**, **Prevest**, **Laxmi Dental** and **DentalKart** hold net cash, so they are a little cheaper than their P/Es suggest. **Tarsons** carries about ₹269cr of net debt at the year-end (₹330–340cr by management's August figure), and its EV/EBITDA is far lower than its P/E because depreciation and interest eat most of its operating profit. **OSEL** carries ₹45cr of net debt, some of it borrowed against its own mutual funds.",
                },
                {
                    label: 'The quality of the earnings behind the price',
                    text: "About 28% of **Poly Medicure**'s FY26 pre-tax profit was treasury income on its share-sale cash, which shrinks as the cash goes into plants and acquisitions; that is why Q1 profit fell 8% on 30% more revenue. **Prevest**'s other income is about 18% of pre-tax profit. **Laxmi Dental**'s adjusted operating profit was flat in FY26 and up 8% in Q1. **DentalKart**'s profit is at a low point, so its P/E is high partly for that reason, but the company has already cut the margin target the recovery depends on.",
                },
                {
                    label: 'Reasonable',
                    text: "**Prevest** needs about 13% a year against my 15%, the best fit here, and the only one I would own. **OSEL** needs about 15%, matching my estimate on paper; the governance findings in section 7 are the reason to pass, whatever the price.",
                },
                {
                    label: 'Full',
                    text: "**Laxmi Dental** needs about 18% a year against my 15%: a little more than I expect, because adjusted operating profit is barely growing and operating cash was negative in FY26. A good dental franchise at a price with no room for another weak year; follow for a better price or better cash.",
                },
                {
                    label: 'Stretched',
                    text: "**Poly Medicure** needs about 25% a year against my 15%: the price assumes the FY30 doubling arrives with earnings keeping pace, while treasury income falls and returns are at 12%. **DentalKart** needs about 26% against my 15%, from a business that has not produced operating cash in three years. Poly Medicure is a good business at a full price; DentalKart is not yet a good business.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Tarsons**'s profit is ₹11cr over the last year and was a loss in Q1, so its P/E means little. On EV/EBITDA it looks cheaper, but depreciation and interest will absorb most of its operating profit this year and its plants are late again. I would pass until net debt falls the ₹40–50cr management has promised and the new lines win orders.",
                },
                {
                    label: 'What would move the labels',
                    text: "For **Poly Medicure**, an anti-dumping duty on dialysers and acquired units reaching mid-teens margins would support faster growth. For **Laxmi Dental**, operating cash back above ₹30cr a year and adjusted operating profit growing with sales would lift my estimate toward what the price needs. For **Tarsons**, cell-culture orders in the second half and net debt below ₹300cr would make its earnings worth estimating.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Prevest Denpro', rank: 1, stance: 'COMPOUNDER', segment: DENTAL,
            what: "Makes dental materials (cements, fillings, root-canal materials and files), 3D printers and resins, disinfectants and oral care in Jammu, sold in more than 90 countries and to three or four large dental companies under their names; SME-listed.",
            view: "**Small, highly profitable, cash-generative and fairly priced.** A 35–36% operating margin for three years, 24–25% return on capital, no debt and ₹13cr of free cash in FY26, with spare capacity for about ₹125cr of sales. It missed its own H2 FY26 growth promise (12% against more than 20%) but grew 21% in Q1. The price needs about 13% a year against my ~15%.",
            watch: 'The founder-MD’s health and succession; new lines filling from 18–20% utilisation; inventory days falling from 239.',
        },
        {
            company: 'Poly Medicure', rank: 2, stance: 'PRICED', segment: DEVICES,
            what: "Makes hospital disposables (IV cannulas, infusion sets), dialysis products, and heart, critical-care and orthopaedic devices in India and Europe, selling to 125-plus countries.",
            view: "**The best franchise, spending faster than it earns.** Q1 revenue rose 30% and a 4–5% price rise stuck, but profit fell 8%, return on capital has halved to 12%, free cash has been negative for four years and ₹484cr of share-sale money is unspent. PendraCare earns about 1%, and ₹87cr of job work goes to a promoter-group firm. The price needs about 25% a year against my ~15%.",
            watch: 'Revenue run-rate toward ₹592cr a quarter; the dialyser anti-dumping decision; margins at PendraCare and Citieffe.',
        },
        {
            company: 'Laxmi Denta', rank: 3, stance: 'SCALEUP', segment: DENTAL,
            what: "Laxmi Dental: makes crowns and bridges for dentists in India and for US and European dental groups, plus clear aligners, aligner sheets and 3D-printing resins.",
            view: "**Recovered, fully priced, with weak cash.** The margin is back to 19.2% and international lab sales grew 37% in Q1, and it has reinstated a 15–20% growth aim. But adjusted operating profit rose only 8%, operating cash was −₹5cr in FY26 and ₹54.7cr of IPO money is idle. The price needs about 18% a year, a little more than my ~15%.",
            watch: 'Operating cash back above ₹30cr; margin holding at 18–20% as scanner sales return; domestic lab growth above 15%.',
        },
        {
            company: 'Tarsons Products', rank: 4, stance: 'TURNAROUND', segment: DEVICES,
            what: "Makes plastic labware (pipette tips, tubes, cryo vials, bottles) for research, pharma and diagnostic labs, and owns Nerbe Plus, a German distributor.",
            view: "**A good brand behind a plant build that keeps slipping: pass.** Operating cash matched operating profit in FY26 and Q1 standalone sales grew 21%, but the ₹893cr programme is 12% over budget and late for the third time, and Q1 brought a first loss a quarter after management promised none. It could not raise export prices against a 25–70% rise in plastic costs, so the new capacity faces the same problem. Its profit is too small to value on.",
            watch: 'Cell-culture lines running by Q2–Q3 FY27 and first orders; gross margin back toward 70%; net debt falling ₹40–50cr.',
        },
        {
            company: 'Vasa Denticity', rank: 5, stance: 'TURNAROUND', segment: DENTAL,
            what: "Runs DentalKart, an online store selling 23,000-plus dental consumables, instruments and equipment to dentists across India, about half under its own brands; SME-listed.",
            view: "**A leading online dental store with thin margins, no operating cash and a thinning management.** The margin recovered from 0.4% to 6.1% in Q1 and stock-outs fell to 12.9%, but gross margin is nine points below a year ago and the target was cut to 27–30%. Its CFO, company secretary and an independent director left within five months. The price needs about 26% a year against my ~15%.",
            watch: 'Gross margin rising toward 27%; positive half-year operating cash; a stable board and finance team.',
        },
        {
            company: 'OSEL Devices', rank: 6, stance: 'SCALEUP', segment: DEVICES,
            what: "Makes hearing aids (for government schemes and, through the SFL clinics, for retail), Philips-branded phones under licence, and LED display screens with software; SME-listed, reporting half-yearly.",
            view: "**Fast growth, weak cash and weak governance.** Revenue grew 57% in FY26, but operating cash was negative in both FY25 and FY26 and it had to correct a cash-flow statement that counted ₹50cr of borrowing as operating cash. It buys ₹44cr a year from a promoter-group firm. The price needs about 15% a year, matching my ~15%; the governance is the reason to pass.",
            watch: 'Positive operating cash in H1 FY27; related-party purchases falling; segment margins disclosed.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Dental products.** **Prevest Denpro: own**, in a small size: the most profitable maker here, debt-free, with spare capacity and a price that asks for less than it delivers. **Laxmi Dental: follow** for a better price or until operating cash recovers. **Vasa Denticity (DentalKart): pass** until margins, cash and the management team stabilise.",
            "**Medical devices and lab plastics.** **Poly Medicure: follow** for a better price and proof that its new spending earns a return. **Tarsons: pass**: the plants are late again, it broke its no-loss promise within a quarter, and it cannot price up abroad. **OSEL Devices: pass** until cash follows growth and related-party dealings shrink.",
            "**What would change my view.** For the better: an anti-dumping duty on dialysers (Poly Medicure); Tarsons's cell-culture orders arriving and net debt below ₹300cr; Laxmi Dental's operating cash above ₹30cr; DentalKart two quarters of rising gross margin with positive cash. For the worse: a broad 20% trade-margin cap; Prevest missing again or its founder unable to return; Poly Medicure's returns falling further.",
            "**What to watch next quarter.** Poly Medicure's revenue run-rate and Middle East shipments; Tarsons's plant start-up and loss or profit; Laxmi Dental's scanner placements and margin; DentalKart's gross margin; Prevest's and OSEL's half-year results, including OSEL's operating cash.",
        ],
        bottomLine:
            "Own the profitable maker (Prevest Denpro); follow Poly Medicure and Laxmi Denta for a better price and better cash; and pass on Tarsons Products, whose plants keep slipping, and on the reseller and the assembler whose cash and governance have not kept up with growth (Vasa Denticity, OSEL Devices).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/POLYMED/consolidated/' },
        { label: 'Wholesale price index, polypropylene and dental materials — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Medical devices industry in India — IBEF', url: 'https://www.ibef.org/industry/medical-devices' },
        { label: 'India: medical devices market intelligence — US International Trade Administration', url: 'https://www.trade.gov/market-intelligence/india-medical-devices' },
        { label: 'India’s medical device trade deficit and the PLI scheme — The Core', url: 'https://www.thecore.in/opinion/the-plinth/india-medical-device-trade-deficit-pli-scheme-analysis-plinth-870487' },
        { label: 'India’s medical device exports reach $4 billion; Bain & Co report — IANS', url: 'https://ianslive.in/indias-medical-device-exports-reach-4-billion-in-fy25-report--20260708152339' },
        { label: 'Health panel’s 20% device margin cap faces limits — Medical Buyer', url: 'https://medicalbuyer.co.in/health-panels-20-percent-device-margin-cap-faces-limits/' },
        { label: 'India probes dumping of dialysis filters from China and Malaysia — Medical Buyer', url: 'https://medicalbuyer.co.in/india-probes-dumping-of-dialysis-filters-from-china-malaysia-weighs-import-duties/' },
        { label: 'EU–India free trade agreement: implications for medical technology — MedTech Europe', url: 'https://www.medtecheurope.org/2026/02/05/eu-india-free-trade-agreement-key-implications-for-the-medical-technology-sector/' },
        { label: 'India eases medical device rules for EU-approved products — Pharmadocx', url: 'https://pharmadocx.com/india-eases-medical-device-rules/' },
        { label: 'US Section 301 tariffs on India — The Week, 24 July 2026', url: 'https://www.theweek.in/news/biz-tech/2026/07/24/us-tariffs-section-301-india.html' },
        { label: 'Private hospital growth in FY27 (CRISIL Ratings) — Omnicuris', url: 'https://www.omnicuris.com/medshots/daily_updates/private-hospital-growth-india-fy27' },
        { label: 'Poly Medicure Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3d2b03da-7262-404e-99d3-e81859b263b0.pdf' },
        { label: 'Poly Medicure Annual Report 2025-26', url: 'https://polymedicure.com/wp-content/uploads/2026/08/Annual-Report-2025-26_compressed.pdf' },
        { label: 'Tarsons Products Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d278a7b8-dcf3-4612-8b69-f598bde770d0.pdf' },
        { label: 'Tarsons Products rating rationale — CARE Ratings, April 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604090416_Tarsons_Products_Limited.pdf' },
        { label: 'Laxmi Dental Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=59a19a55-3e3e-4c04-8f16-900338e12f1f.pdf' },
        { label: 'OSEL Devices Annual Report FY26 — NSE', url: 'https://archives.nseindia.com/annual_reports/SME_AR_31089_OSELDEVICE_2025_2026_A_20345033_02092026151041.pdf' },
        { label: 'OSEL Devices rating rationale — Infomerics, January 2026', url: 'https://www.infomerics.com/admin/uploads/PR_OSEL_Devices29Jan26.pdf' },
        { label: 'Vasa Denticity (DentalKart) Annual Report FY26 — NSE', url: 'https://archives.nseindia.com/annual_reports/SME_AR_31254_DENTALKART_2025_2026_A_12139155_03092026171827.pdf' },
        { label: 'Vasa Denticity Q1 FY27 earnings call transcript — NSE', url: 'https://nsearchives.nseindia.com/corporate/VASADENTICITY_17082026195240_Intimation_of_Transcript_Final.pdf' },
        { label: 'Prevest Denpro Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/bcbe55ac-b495-4666-a22d-96a96c82f716.pdf' },
    ],
};
