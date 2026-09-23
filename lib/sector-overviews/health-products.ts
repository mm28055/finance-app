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
            'Poly Medicure': 18,
            'Tarsons Products': null,
            'OSEL Devices': 15,
            'Prevest Denpro': 15,
            'Laxmi Denta': 18,
            'Vasa Denticity': 15,
        },
    },
    standfirst:
        "Six small and mid-sized companies that make or sell health products other than medicines. Poly Medicure makes hospital disposables such as IV cannulas and dialysis products; Tarsons makes plastic labware; OSEL makes hearing aids alongside phones and display screens. Three are in dentistry: Laxmi Dental makes crowns and clear aligners, Prevest makes dental materials, and DentalKart (Vasa Denticity) sells dental supplies online. Three of the six are listed on the SME platform and report only twice a year. Every chart uses filed results and five years of history.",
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
            note: 'Poly Medicure grew 30% in Q1 after price increases stuck with hospitals.',
            values: {
                'Poly Medicure': [5, 6, 17, 21, 30],
                'Tarsons Products': [10, 0, 10, 4, 21],
                'OSEL Devices': [null, 69, null, 47, null],
                'Prevest Denpro': [18, 15, 23, 2, 24],
                'Laxmi Denta': [10, 26, 6, 21, 14],
                'Vasa Denticity': [12, 22, 14, -1, 37],
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
                'Poly Medicure': 'Held down by large cash and investments and by new plants still filling.',
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
                "**Prevest Denpro is the one to own, in a small size.** It makes dental cements, root-canal files, disinfectants and resins for 3D printers, sells in more than 90 countries, and has earned 34–38% margins and 25%-plus returns with net cash and steady free cash. The price asks for less growth than it has been delivering. It is SME-listed and small, so trading can be thin.",
                "**Follow Poly Medicure and Laxmi Dental.** Poly Medicure is the quality name here: it raised prices to hospitals, grew 30% in Q1 and aims to double revenue by FY30, but the price already assumes a lot of that. Laxmi Dental makes crowns and clear aligners for dentists in India and abroad; margins are back to 19% and it guides 15–20% growth, at a fair price, but its cash conversion is weak.",
                "**Wait on Tarsons; pass on DentalKart and OSEL.** Tarsons has a good labware brand but a plant programme that keeps slipping and profits eaten by depreciation. DentalKart and OSEL are growing, but neither turns profit into cash.",
                "**Two things to hold onto before reading the rest.** First, **making beats reselling**: the manufacturers here earn 20–38% margins, the online distributor 0–8%. Second, **half this list is very small**: three companies are SME-listed with a few hundred crore of market value and half-yearly reporting, so figures move a lot from one period to the next.",
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
                "Health products other than medicines: the needles, tubes, crowns and devices hospitals, labs and dentists use every day.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Plastic resin, metals and electronics → **manufacturers** of disposables, labware, dental materials and devices (Poly Medicure, Tarsons, Prevest, Laxmi Dental, OSEL) → distributors and online stores (DentalKart) → hospitals, labs, dentists and patients. **The profit sits with approved manufacturers**: a product with regulatory approval and a brand that doctors trust earns far more than reselling it.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "More hospital beds and procedures in India; hospitals and labs abroad looking for alternatives to Chinese supply; India's biopharma research spending; dental care moving to digital crowns and aligners; and an ageing population that needs hearing aids.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Demand is steady; costs and trade are not.** Polymer prices rose 25–50% this year, which Poly Medicure passed on and Tarsons could not abroad. US tariffs on Indian goods rose and then fell, hitting and then helping Laxmi Dental. India has opened an anti-dumping investigation into imported dialysers, which would help Poly Medicure.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Poly Medicure** depends on hospital demand and its new therapies; **Tarsons** on finishing its plants and exporting profitably; **OSEL** on government hearing-aid tenders and its new clinics; **Prevest** on exports and 3D-printing resins; **Laxmi Dental** on aligners and US demand; **DentalKart** on keeping its own brands in stock. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Medical devices and lab plastics', 'Poly Medicure, Tarsons, OSEL', '17–35%', '6–24%', '**−69% to 81%**'],
                        ['Dental products', 'Prevest, Laxmi Dental, DentalKart', '0–38%', '9–25%', '**−59% to 57%**'],
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
                    label: 'Lasting: approvals and trust',
                    text: "**Poly Medicure** has product approvals in many countries and leads Indian vascular access (IV cannulas and infusion sets); it passed price increases to hospitals this year. **Prevest** sells approved dental materials in more than 90 countries at steady high margins.",
                },
                {
                    label: 'Lasting but narrower: a brand in one niche',
                    text: "**Tarsons** is India's leading labware brand; **Laxmi Dental** has strong relationships with Indian dentists and a growing US business. Both are exposed to global competition abroad.",
                },
                {
                    label: 'Wearing: products bought on price',
                    text: "**Tarsons** could not raise export prices when polymers rose. **OSEL**'s government hearing-aid tenders are won on price, which is why it is moving into retail clinics.",
                },
                {
                    label: 'Barely a moat: reselling',
                    text: "**DentalKart** sells other companies' products online; its margin depends on its own-brand range being in stock, which it was not for much of last year.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**BD**, **B. Braun** and **Terumo** in hospital disposables; **Thermo Fisher**, **Corning** and **Eppendorf** in labware; **Dentsply Sirona**, **3M** and **Align Technology** in dentistry; the big five global hearing-aid makers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The manufacturers' margins are; the distributor's is not.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: approved products',
                    text: "**Prevest** (34–38%) and **Poly Medicure** (21–26%, guiding 23–25% consolidated) hold their margins through cost increases. **Tarsons** earns about 30% before depreciation, but its new plants make profit after tax small.",
                },
                {
                    label: 'Cyclical: recovering from a bad year',
                    text: "**Laxmi Dental** recovered from 11% to 19% as US tariffs fell and aligners picked up; it guides 18–20%.",
                },
                {
                    label: 'Not structural: thin reselling margins',
                    text: "**DentalKart** earned 0–8% as its own brands ran out of stock; it has cut stock-outs to about 13% and targets 27–30% gross margin.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**OSEL**'s display business waits up to 120 days to be paid; its interest cost nearly doubled in the second half of FY26. **DentalKart** has had negative operating cash in three of the last five years.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Poly Medicure**'s cycle rose to 335 days in FY26 on Screener's figures; **Prevest**'s has risen steadily to 227 days.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Tarsons**'s cycle has fallen from 672 to 423 days and it has converted all its profit into cash for three years.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Labware and dental makers carry thousands of products; device makers selling abroad wait for shipments to arrive. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: new therapies',
                    text: "**Poly Medicure** guides ₹2,300–2,400cr of consolidated revenue this year and aims to double revenue by FY30 through cardiology, oncology, orthopaedics and dialysis, spending ₹200–225cr a year.",
                },
                {
                    label: 'Growth driver: digital dentistry',
                    text: "**Laxmi Dental** guides 15–20% growth and is moving to its own plant; **Prevest**'s 3D-printing resins and printers are growing fast from a small base, with new lines only 18–20% used.",
                },
                {
                    label: 'Growth driver: lab research and biopharma',
                    text: "**Tarsons** guides 15% or more a year and is adding cell-culture products as its new plants come on stream.",
                },
                {
                    label: 'Growth driver: retail and exports',
                    text: "**OSEL** is moving hearing aids from government tenders to private clinics and preparing to export from a new special economic zone plant. **DentalKart** is piloting same-day delivery.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Poly Medicure** beat its margin guidance and raised prices; **Laxmi Dental** reinstated guidance after a weak year.",
                },
                {
                    label: 'Cautious',
                    text: "**DentalKart** still gives no revenue guidance for FY27.",
                },
                {
                    label: 'Missed',
                    text: "**Tarsons**'s new plant commissioning slipped again into Q2 or Q3.",
                },
                {
                    label: 'Mixed',
                    text: "**OSEL** grew 57% in FY26 but its operating cash was negative and its interest costs rose.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Poly Medicure and Laxmi Dental to compound earnings at about 18%, Prevest at about 15%, and DentalKart and OSEL at about 15% if they fix their cash.** Tarsons's profit should jump once its plants fill, but from so low a base that a percentage says little.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Poly Medicure', 'New therapies; exports; price increases', '12% / **18%** / 24%'],
                        ['Laxmi Dental', 'Aligners; US demand; own plant', '10% / **18%** / 24%'],
                        ['Prevest Denpro', 'Exports; 3D resins; new lines filling', '10% / **15%** / 22%'],
                        ['OSEL Devices', 'Hearing-aid retail; displays; exports', '5% / **15%** / 25%'],
                        ['Vasa Denticity', 'Own brands in stock; online dental supplies', '5% / **15%** / 25%'],
                        ['Tarsons Products', 'New plants filling; depreciation falling', 'Profit too small to estimate from'],
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
                    label: 'Cash and reporting',
                    text: "**OSEL** and **DentalKart** have had negative operating cash over five years. OSEL had to correct an earlier cash-flow statement (about ₹50cr of short-term borrowing had been counted as operating cash) and borrows against IPO money held in mutual funds. At DentalKart, a shareholder said on the call that his questions had been removed from the previous call's record, and earlier order figures were restated after an internal error. Small companies on the SME platform report half-yearly and are thinly traded; read their figures with care.",
                },
                {
                    label: 'Costs and pricing abroad',
                    text: "**Tarsons** could not pass on polymer costs to export buyers; **Poly Medicure** faces cheap Chinese dialysers, which an anti-dumping case may address.",
                },
                {
                    label: 'Plants and execution',
                    text: "**Tarsons**'s plant delays keep depreciation high without the sales to match; **Laxmi Dental** is moving production to a new owned plant.",
                },
                {
                    label: 'People',
                    text: "**Prevest**'s chairman had a medical emergency in June and the CFO is covering; small companies depend heavily on their founders.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **13% at 20x, 14% at 22x, 18% at 31x, 25% at 54x and 26% at 58x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Prevest**, **Poly Medicure** and **DentalKart** hold net cash; **Tarsons** carries debt for its plants, and its EV/EBITDA is far lower than its P/E because depreciation eats most of its operating profit.",
                },
                {
                    label: 'Reasonable',
                    text: "**Prevest**, **Laxmi Dental** and **OSEL**: prices that ask for about the growth I expect. For OSEL, the weak cash record is the reason to stay away.",
                },
                {
                    label: 'Stretched',
                    text: "**Poly Medicure** and **DentalKart**: each needs more growth than I expect.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Tarsons**: its consolidated profit is tiny, so its P/E means little; judge it on EV/EBITDA.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Prevest Denpro', rank: 1, stance: 'COMPOUNDER', segment: DENTAL,
            what: "Makes dental materials (cements, fillings, root-canal files), disinfectants, and 3D printers and resins for dental labs, sold in more than 90 countries; SME-listed.",
            view: "**Small, highly profitable and cash-generative.** Margins of 34–38%, returns of 25%-plus, net cash and steady free cash, with new lines lightly used. It is tiny and thinly traded. The price asks for less than my ~15% estimate.",
            watch: 'US private-label growth; 3D resin volumes; the chairman’s return.',
        },
        {
            company: 'Poly Medicure', rank: 2, stance: 'PRICED', segment: DEVICES,
            what: "Makes hospital disposables (IV cannulas, infusion sets), dialysis products, and cardiology, oncology and orthopaedic devices, in India and abroad.",
            view: "**The quality name, fully priced.** Revenue up 30% in Q1, price increases accepted by hospitals and a plan to double revenue by FY30. But it spends a fifth of sales on capacity and its return has fallen to 12%. The price needs more than my ~18% estimate.",
            watch: 'Revenue toward ₹2,300–2,400cr; the dialyser anti-dumping case; Middle East shipments.',
        },
        {
            company: 'Laxmi Denta', rank: 3, stance: 'SCALEUP', segment: DENTAL,
            what: "Laxmi Dental: makes crowns and bridges for dentists, clear aligners and aligner sheets, in India and for the US and Europe.",
            view: "**Recovered and fairly priced.** Margin back to 19% as aligners and US sales recovered, with 15–20% growth guided. But five-year cash conversion is 46% and it is moving to a new plant. The price asks for about my ~18% estimate.",
            watch: 'US growth; the move to its own plant; cash conversion.',
        },
        {
            company: 'Tarsons Products', rank: 4, stance: 'TURNAROUND', segment: DEVICES,
            what: "Makes plastic labware (pipette tips, tubes, petri dishes, bottles) for research, diagnostics and pharma, and owns Nerbe Plus in Germany.",
            view: "**A good brand behind a slow plant build.** Operating margins near 30% and strong cash conversion, but new plants keep slipping, depreciation takes most of the profit, and it could not pass on polymer costs abroad. Its profit is too small to value it on yet.",
            watch: 'New plants commissioning; export margins; debt.',
        },
        {
            company: 'Vasa Denticity', rank: 5, stance: 'TURNAROUND', segment: DENTAL,
            what: "Runs DentalKart, an online store selling dental consumables, instruments and equipment to dentists across India, with its own brands; SME-listed.",
            view: "**A leading online dental store with thin margins and no cash.** Stock-outs of its own brands are down to about 13%, but margins are 0–8% and operating cash has been negative. The price needs more than my ~15% estimate.",
            watch: 'Stock-outs below 5%; gross margin toward 27–30%; operating cash.',
        },
        {
            company: 'OSEL Devices', rank: 6, stance: 'SCALEUP', segment: DEVICES,
            what: "Makes hearing aids (for government schemes and now retail clinics), Philips-branded mobile phones under licence, and LED display screens with software; SME-listed.",
            view: "**Fast growth, weak cash.** Revenue grew 57% in FY26, but operating cash has been negative over five years and interest costs nearly doubled. The price asks for about my ~15% estimate; the cash record is the reason to pass.",
            watch: 'Operating cash; hearing-aid clinics; the export plant.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Dental products.** **Prevest Denpro: own**, in a small size. **Laxmi Dental: follow.** **Vasa Denticity (DentalKart): pass** until margins and cash improve.",
            "**Medical devices and lab plastics.** **Poly Medicure: follow** for a better price. **Tarsons: wait** for its plants. **OSEL Devices: pass** until cash follows growth.",
            "**What would change my view.** For the better: Tarsons's plants filling; DentalKart turning operating cash positive. For the worse: Poly Medicure's growth slowing while it keeps spending heavily.",
            "**What to watch next quarter.** Poly Medicure's revenue run-rate; Laxmi Dental's US business; Tarsons's plant start-up; Prevest's and OSEL's half-year results.",
        ],
        bottomLine:
            "Own the profitable maker (Prevest Denpro), follow the quality names (Poly Medicure, Laxmi Denta) for a better price, wait on Tarsons Products, and pass on the resellers and assemblers without cash (Vasa Denticity, OSEL Devices).",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/POLYMED/consolidated/' },
        { label: 'Wholesale price index, polypropylene and dental materials — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
