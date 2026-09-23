import { SectorOverview } from './types';
import { hospitalsBusinesses } from './hospitals-businesses';
import { hospitalsValuationInputs } from './card-data/hospitals';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const LARGE = 'Large chains across several states';
const REGIONAL = 'Regional chains — a few big hospitals in one region';
const SPECIAL = 'Single-speciality chains — children, mothers and eyes';

export const hospitals: SectorOverview = {
    sector: 'Hospitals',
    title: 'Hospitals',
    format: 'ranked',
    businesses: hospitalsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        // Narayana Hrudayalaya is left out of the live table: the dashboard's market value for it is wrong.
        inputs: hospitalsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Yatharth Hospital': 25,
            "Rainbow Children's Medicare": 20,
            'Jupiter Life Line Hospitals': 18,
            'Artemis Medicare': 18,
            'Narayana Hrudayalaya': 15,
            'Global Health (Medanta)': 20,
            "Dr Agarwal's Health Care": 22,
            'Krishna Inst.Medi': 25,
            'Shalby': 12,
        },
    },
    standfirst:
        "Nine listed hospital chains. Narayana Health, Medanta and KIMS run large hospitals across several states; Yatharth (Delhi NCR and Uttar Pradesh), Jupiter (Thane, Pune, Indore), Artemis (Gurugram) and Shalby (Gujarat, joint replacements) are regional; Rainbow (children and mothers) and Dr Agarwal's (eyes) are single-speciality chains. Almost all are building new hospitals, which depresses margins and returns for a year or two before they fill. Every chart uses filed results and five years of history. Narayana's market value on the dashboard is wrong, so it is left out of the live valuation table.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), all consolidated. Operating profit ÷ revenue.',
            note: 'The single-speciality chains (Rainbow, Dr Agarwal’s) earn 26–33%; most multi-speciality chains 17–25%. New hospitals lose money for their first year or two, which pulls margins down while a chain expands.',
            values: {
                'Yatharth Hospital': [25, 23, 23, 23, 23],
                "Rainbow Children's Medicare": [29, 33, 33, 32, 29],
                'Jupiter Life Line Hospitals': [22, 23, 23, 23, 19],
                'Artemis Medicare': [16, 19, 17, 19, 20],
                'Narayana Hrudayalaya': [22, 24, 17, 20, 17],
                'Global Health (Medanta)': [24, 21, 19, 21, 22],
                "Dr Agarwal's Health Care": [26, 27, 27, 29, 28],
                'Krishna Inst.Medi': [22, 21, 20, 19, 19],
                'Shalby': [14, 15, 11, 10, 13],
            },
            cellNotes: {
                'Jupiter Life Line Hospitals': 'Q1 FY27 includes start-up losses at its new Dombivli hospital.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Yatharth and KIMS are growing fastest from new hospitals; Narayana’s jump since Q3 FY26 comes from an acquisition.',
            values: {
                'Yatharth Hospital': [22, 28, 46, 47, 52],
                "Rainbow Children's Medicare": [7, 7, 12, 24, 33],
                'Jupiter Life Line Hospitals': [22, 18, 10, 15, 16],
                'Artemis Medicare': [14, 14, 17, 16, 13],
                'Narayana Hrudayalaya': [15, 20, 61, 76, 78],
                'Global Health (Medanta)': [20, 15, 19, 24, 26],
                "Dr Agarwal's Health Care": [21, 20, 23, 23, 26],
                'Krishna Inst.Medi': [27, 24, 29, 35, 35],
                'Shalby': [6, 6, -1, 8, 12],
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'Returns are falling almost everywhere because chains are building new hospitals that take years to fill; KIMS has fallen from 34% to 10%.',
            values: {
                'Yatharth Hospital': [26, 27, 24, 14, 12],
                "Rainbow Children's Medicare": [23, 24, 19, 19, 17],
                'Jupiter Life Line Hospitals': [17, 21, 22, 18, 15],
                'Artemis Medicare': [10, 11, 14, 15, 15],
                'Narayana Hrudayalaya': [25, 32, 26, 21, 16],
                'Global Health (Medanta)': [15, 17, 20, 20, 17],
                "Dr Agarwal's Health Care": [17, 13, 11, 10, 11],
                'Krishna Inst.Medi': [34, 24, 17, 15, 10],
                'Shalby': [10, 10, 11, 6, 6],
            },
        },
        {
            key: 'ccc',
            more: true,
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Blank where stock or supplier days were not filed.',
            note: 'Below zero means patients and insurers pay before the hospital pays its suppliers and doctors, which is normal for hospitals.',
            values: {
                'Yatharth Hospital': [null, null, null, null, -26],
                "Rainbow Children's Medicare": [-78, -123, -107, -100, -73],
                'Jupiter Life Line Hospitals': [-104, -101, -59, -49, -54],
                'Artemis Medicare': [null, null, null, null, null],
                'Narayana Hrudayalaya': [-108, -158, -138, -108, -176],
                'Global Health (Medanta)': [-24, -52, -34, -24, -26],
                "Dr Agarwal's Health Care": [-215, -183, -190, -79, -76],
                'Krishna Inst.Medi': [-67, null, null, null, null],
                'Shalby': [495, 654, 673, 715, 692],
            },
            cellNotes: {
                'Shalby': 'Its implant business and other stock push inventory days far above a normal hospital’s.',
                'Krishna Inst.Medi': 'Stock and supplier days not filed after FY22; debtor days rose from 28 to 52.',
                'Artemis Medicare': 'Stock and supplier days not filed; debtor days about 40.',
                'Yatharth Hospital': 'Stock and supplier days filed only for FY26; debtor days were 82–131 before that.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Most chains convert well; Shalby has converted only 14% over five years and Yatharth about half, as money owed by government schemes builds up.',
            values: {
                'Yatharth Hospital': [54, 47, -2, 67, 70, 50],
                "Rainbow Children's Medicare": [73, 82, 74, 80, 77, 77],
                'Jupiter Life Line Hospitals': [90, 88, 48, 88, 78, 78],
                'Artemis Medicare': [88, 135, 82, 103, 70, 92],
                'Narayana Hrudayalaya': [73, 110, 91, 76, 99, 91],
                'Global Health (Medanta)': [68, 101, 76, 70, 77, 78],
                "Dr Agarwal's Health Care": [88, 85, 94, 77, 90, 87],
                'Krishna Inst.Medi': [62, 71, 80, 73, 63, 70],
                'Shalby': [16, 49, 11, -3, 0, 14],
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
            note: 'Rainbow has produced free cash of about 12% of revenue while expanding; KIMS spent about a third of its revenue on new hospitals in FY25–FY26.',
            values: {
                'Yatharth Hospital': [5.6, 9.2, -15.1, -18.7, -9.3, -8.6],
                "Rainbow Children's Medicare": [16.6, 16.0, -2.5, 16.5, 12.0, 11.6],
                'Jupiter Life Line Hospitals': [6.1, 11.1, 2.8, -4.7, -15.6, -2.2],
                'Artemis Medicare': [-8.8, -2.6, 4.1, 6.7, 2.5, 1.4],
                'Narayana Hrudayalaya': [6.3, 12.4, 2.0, -1.8, 9.4, 5.8],
                'Global Health (Medanta)': [1.7, 15.1, 10.2, 2.9, -2.8, 4.7],
                "Dr Agarwal's Health Care": [13.4, 7.4, 8.6, 2.1, 2.8, 5.5],
                'Krishna Inst.Medi': [9.3, -6.5, -5.0, -14.1, -23.5, -11.0],
                'Shalby': [-8.0, 6.2, -2.9, -6.9, -13.1, -5.5],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash and treasury investments, ÷ operating profit.',
            note: 'Below zero means more cash than debt. KIMS (5.0x) and Shalby (3.5x) have borrowed most for expansion; Narayana’s rose to 1.9x after its acquisition.',
            values: {
                'Yatharth Hospital': [2.2, 1.7, -0.8, -2.2, -0.0],
                "Rainbow Children's Medicare": [1.2, 1.2, 1.0, 0.4, 0.8],
                'Jupiter Life Line Hospitals': [2.5, 1.7, -1.3, -0.7, 0.1],
                'Artemis Medicare': [2.5, 2.5, 1.9, -0.7, 0.3],
                'Narayana Hrudayalaya': [0.6, 0.3, 0.3, 0.5, 1.9],
                'Global Health (Medanta)': [1.3, -0.2, -0.5, -0.5, 0.1],
                "Dr Agarwal's Health Care": [2.8, 2.5, 1.0, 1.0, 1.4],
                'Krishna Inst.Medi': [-0.5, 0.9, 1.8, 3.0, 5.0],
                'Shalby': [0.2, 0.2, 1.5, 2.6, 3.5],
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
            note: 'Building hospitals is expensive: most chains spend 12–20% of revenue a year, KIMS nearly 30%.',
            values: {
                'Yatharth Hospital': [10.4, 4.2, 14.6, 36.2, 26.3, 21.9],
                "Rainbow Children's Medicare": [6.4, 12.0, 27.3, 9.6, 12.7, 13.8],
                'Jupiter Life Line Hospitals': [12.6, 8.6, 7.9, 25.2, 33.5, 19.7],
                'Artemis Medicare': [19.6, 19.8, 8.3, 9.9, 9.7, 12.6],
                'Narayana Hrudayalaya': [6.8, 11.5, 19.9, 19.7, 11.1, 14.0],
                'Global Health (Medanta)': [12.6, 8.7, 8.5, 14.0, 19.0, 13.2],
                "Dr Agarwal's Health Care": [10.2, 15.5, 17.4, 18.8, 22.2, 18.2],
                'Krishna Inst.Medi': [10.3, 26.2, 25.9, 33.2, 36.6, 28.8],
                'Shalby': [10.7, 2.2, 5.0, 6.5, 13.1, 7.7],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Revenue per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): revenue ÷ net fixed assets at year end.',
            note: 'A mature hospital earns about ₹1–2 of revenue a year for each ₹1 of building and equipment; new hospitals drag the ratio down until they fill.',
            values: {
                'Yatharth Hospital': [1.2, 1.6, 1.4, 1.4, 1.0],
                "Rainbow Children's Medicare": [1.1, 1.3, 1.0, 1.1, 1.0],
                'Jupiter Life Line Hospitals': [1.1, 1.2, 1.5, 1.3, 1.1],
                'Artemis Medicare': [1.1, 1.2, 1.2, 1.3, 1.3],
                'Narayana Hrudayalaya': [1.9, 1.9, 1.8, 1.3, 1.0],
                'Global Health (Medanta)': [1.2, 1.3, 1.5, 1.5, 1.2],
                "Dr Agarwal's Health Care": [1.0, 0.8, 0.8, 0.7, 0.7],
                'Krishna Inst.Medi': [1.6, 1.2, 1.0, 0.9, 0.7],
                'Shalby': [1.0, 1.2, 1.0, 1.1, 1.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'clin', label: 'Clinical reputation', description: 'Senior doctors and complex care (transplants, cancer, heart) that patients travel for.' },
            { key: 'loc', label: 'Location', description: 'A large, growing catchment with few comparable hospitals nearby.' },
            { key: 'price', label: 'Pricing', description: 'How much a filled bed earns (ARPOB) and whether it is still rising.' },
            { key: 'build', label: 'Expansion record', description: 'Whether new hospitals open on time and fill quickly.' },
            { key: 'cash', label: 'Cash and balance sheet', description: 'Whether profit turns into cash, and how much debt is carried.' },
        ],
        rows: [
            { company: 'Yatharth Hospital', trend: 'widening', trendNote: 'Revenue up 52% in Q1 against a guide of more than 37%; Gurugram opens in early 2027.',
                grades: { clin: { grade: 'B', note: 'Super-speciality care outside central Delhi' }, loc: { grade: 'A', note: 'Growing NCR and UP suburbs' }, price: { grade: 'C', note: 'ARPOB ₹34,758, lowest here; guided up 9–10%' }, build: { grade: 'A', note: 'Buys half-built hospitals and fills them fast' }, cash: { grade: 'C', note: 'Five-year cash conversion 50%' } } },
            { company: "Rainbow Children's Medicare", trend: 'widening', trendNote: 'Revenue up 33% in Q1; 2,500 new beds planned to double revenue in four years.',
                grades: { clin: { grade: 'A', note: 'Leading children’s specialists and neonatal care' }, loc: { grade: 'B', note: 'Strong in the south; new in Mumbai and NCR' }, price: { grade: 'B', note: 'ARPOB up 6%' }, build: { grade: 'B', note: 'Occupancy about 41% as new beds open' }, cash: { grade: 'A', note: '₹613cr cash; free cash while expanding' } } },
            { company: 'Jupiter Life Line Hospitals', trend: 'stable', trendNote: 'ARPOB up 11.7%; the new Dombivli hospital loses ₹2–3cr a month this year.',
                grades: { clin: { grade: 'A', note: 'Complex care in suburban markets' }, loc: { grade: 'A', note: 'Thane, Pune (Baner), Indore suburbs' }, price: { grade: 'A', note: 'ARPOB ₹67,700, up 11.7%' }, build: { grade: 'B', note: 'Indore still 45–50% full' }, cash: { grade: 'B', note: 'Cash about equal to debt' } } },
            { company: 'Artemis Medicare', trend: 'stable', trendNote: 'Occupancy 65.7%; opening Raipur and planning a 650-bed South Delhi hospital.',
                grades: { clin: { grade: 'A', note: 'Transplants and complex surgery' }, loc: { grade: 'B', note: 'Gurugram, next to Medanta' }, price: { grade: 'A', note: 'ARPOB ₹85,690; 27% foreign patients' }, build: { grade: 'C', note: 'Raipur just started; big projects ahead' }, cash: { grade: 'B', note: 'Share sale of up to ₹700cr approved' } } },
            { company: 'Narayana Hrudayalaya', trend: 'stable', trendNote: 'UK hospitals bought; Cayman insurance loss narrowing; ₹3,000cr of capex over two years.',
                grades: { clin: { grade: 'A', note: 'Heart care at scale, low cost' }, loc: { grade: 'B', note: 'Many Indian cities, Cayman, UK' }, price: { grade: 'B', note: 'Low-cost model by design' }, build: { grade: 'B', note: 'Clinics still losing about ₹15cr a quarter' }, cash: { grade: 'B', note: 'Net debt 1.9x after the UK deal' } } },
            { company: 'Global Health (Medanta)', trend: 'widening', trendNote: 'Noida’s quarterly loss fell from ₹23.6cr to ₹4.9cr; 3,350 beds in the pipeline.',
                grades: { clin: { grade: 'A', note: 'Quaternary care, Dr Trehan’s institution' }, loc: { grade: 'A', note: 'NCR, Lucknow, Patna, Indore' }, price: { grade: 'B', note: 'ARPOB ₹70,244' }, build: { grade: 'A', note: 'Noida turning faster than expected' }, cash: { grade: 'A', note: 'Almost no net debt' } } },
            { company: "Dr Agarwal's Health Care", trend: 'stable', trendNote: 'Mature centres grew 14%; 60 new centres planned this year.',
                grades: { clin: { grade: 'A', note: 'Specialist eye surgeons, 1,000+ doctors' }, loc: { grade: 'B', note: '269 facilities in 155 cities' }, price: { grade: 'A', note: '62% of revenue paid by patients directly' }, build: { grade: 'B', note: 'New centres lost ₹30cr in FY26' }, cash: { grade: 'B', note: 'Converts 87% of profit into cash' } } },
            { company: 'Krishna Inst.Medi', trend: 'stable', trendNote: 'New hospitals improving (Mahadevapura at breakeven) but still pulling margins down.',
                grades: { clin: { grade: 'B', note: 'Strong in Telangana and Andhra' }, loc: { grade: 'B', note: 'Moving into Bengaluru, Kerala, Maharashtra' }, price: { grade: 'C', note: 'ARPOB growth guided at only 4–5%' }, build: { grade: 'C', note: 'Many new units at once' }, cash: { grade: 'C', note: 'Net debt 5x at March; about 2x after its share sale' } } },
            { company: 'Shalby', trend: 'narrowing', trendNote: 'Rating cut to A; a new Mumbai hospital under discussion after a “minimal capex” promise.',
                grades: { clin: { grade: 'B', note: 'Known for joint replacements' }, loc: { grade: 'C', note: 'Mostly Gujarat' }, price: { grade: 'C', note: 'ARPOB ₹44,711; government payers 32%' }, build: { grade: 'D', note: 'Gurugram unit still loss-making' }, cash: { grade: 'D', note: 'Five-year cash conversion 14%' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Yatharth is the one to own.** It buys half-built or struggling hospitals in Delhi NCR and Uttar Pradesh and fills them: revenue grew 52% in Q1 against a guide of more than 37% for the year, its margin has held at 23–25% while absorbing new-hospital losses, and it has 2,555 beds built with 1,820 in use. The price asks for about the growth I expect. Its weak point is cash: it has turned only half of five years' operating profit into cash.",
                "**Follow Rainbow, Jupiter and Artemis: good hospitals at full prices.** Rainbow is India's leading children's and maternity chain, grew 33% in Q1 and plans 2,500 more beds to double revenue in four years, with ₹613cr of cash. Jupiter runs large suburban hospitals in Thane, Pune and Indore and raised ARPOB 11.7%, but its new Dombivli hospital loses ₹2–3cr a month this year. Artemis earns the highest revenue per bed here (₹85,690 a day, 27% from foreign patients) and is opening in Raipur and planning South Delhi. Each price asks for a little more growth than I expect.",
                "**Wait on Narayana, Medanta, Dr Agarwal's and KIMS; pass on Shalby.** Medanta and Dr Agarwal's are excellent operators whose prices ask for far more growth than they can deliver. KIMS is building many hospitals at once and its profit is depressed. Narayana has changed shape with a UK acquisition and is fully priced on Screener's figures. Shalby's returns are 6%, it converts little profit into cash, its rating was cut, and it is discussing a new Mumbai hospital months after promising minimal capex.",
                "**Two things to hold onto before reading the rest.** First, **new hospitals hide good ones**: a chain that is expanding fast reports lower margins and returns for two to four years, so look at the mature hospitals and at how fast the new ones fill. Second, **price per bed and payer mix decide the margin**: complex care, cash-paying and foreign patients earn far more per bed than government-scheme patients, which is why Artemis earns ₹85,690 a bed-day and Yatharth ₹34,758.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. For hospitals the cash cycle is usually negative (patients and insurers pay before suppliers and doctors are paid), so it sits behind More measures; return on capital, which shows the drag of new hospitals, is on the front. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "India has too few hospital beds for its population, and listed chains are adding them faster than at any time before. ICRA, the rating agency, expects eleven listed chains and two large unlisted ones to add about 14,500 beds over FY26 and FY27 at a cost of ₹30,000–32,000cr, with occupancy holding at 62–64% and revenue per bed rising 6–8% a year.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Doctors, nurses, medicines, implants and equipment → **the hospital** → patients, paid for by the patients themselves, private insurers, government schemes and foreign patients. **The profit sits with hospitals that have the best doctors in a large catchment**, because patients choose the doctor and the hospital follows; equipment and medicines are bought from many suppliers at market prices.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "More heart disease, cancer, diabetes and kidney failure as the population ages and incomes rise; more people with health insurance (health premiums rose to about ₹1.37 lakh crore in FY26 from ₹1.19 lakh crore a year earlier, according to IBEF); patients moving from small nursing homes to organised chains; and foreign patients coming to India for surgery.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Demand is steady; the risk is building too much at once.** Hospital demand barely moves with the economy, but a new hospital in a city with several others can take years to fill. Government schemes such as Ayushman Bharat bring in patients at fixed, lower rates. The government caps the prices of stents and knee implants, which affects Shalby's implant business.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Yatharth** on filling acquired hospitals in NCR and UP; **Rainbow** on its new children's hospitals filling outside the south; **Jupiter** on Dombivli and its big Mumbai project; **Artemis** on Raipur and South Delhi; **Narayana** on its UK and Cayman businesses as well as India; **Medanta** on Noida and its new cities; **Dr Agarwal's** on opening 60 eye centres a year profitably; **KIMS** on its many new hospitals breaking even; **Shalby** on its implant business and its balance sheet. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Kind', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Large chains across several states', 'Narayana, Medanta, KIMS', '17–24%', '10–17%', '**70–91%**'],
                        ['Regional chains', 'Yatharth, Jupiter, Artemis, Shalby', '10–25%', '6–15%', '**14–92%**'],
                        ['Single-speciality chains', 'Rainbow, Dr Agarwal’s', '26–33%', '11–17%', '**77–87%**'],
                    ],
                },
                {
                    caption: 'Beds, occupancy and revenue per bed, Q1 FY27 (company calls)',
                    columns: ['Company', 'Beds', 'Occupancy', 'ARPOB (per bed per day)'],
                    rows: [
                        ['Yatharth Hospital', '2,555 built; 1,820 in use', '68%', '₹34,758 (+7%)'],
                        ['Rainbow Children’s Medicare', '2,435 total; 1,862 in use', 'About 41%', 'Up 6%'],
                        ['Jupiter Life Line Hospitals', 'Not stated in total', 'Thane ~75%, Pune ~65%, Indore 45–50%', '₹67,700 (+11.7%)'],
                        ['Artemis Medicare', 'About 700 in Gurugram', '65.7%', '₹85,690'],
                        ['Global Health (Medanta)', 'Not clearly stated', '63% (66% without Noida)', '₹70,244'],
                        ['Shalby', 'Not stated', '51%', '₹44,711'],
                        ['Narayana, KIMS, Dr Agarwal’s', 'Not given in this form on the call', '—', 'KIMS guides growth of 4–5%'],
                    ],
                    note: 'ARPOB depends heavily on the mix of patients and specialities, so compare each chain with its own history rather than with the others.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect a hospital's profits. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: complex care and senior doctors',
                    text: "**Medanta**, **Artemis** and **Narayana** are known for transplants, heart and cancer care that patients travel for. A reputation built around senior doctors takes decades, and complex care earns the highest revenue per bed.",
                },
                {
                    label: 'Lasting but narrower: owning a speciality',
                    text: "**Rainbow** is the name parents know for children's and neonatal care in the south; **Dr Agarwal's** is the largest eye-care chain, with 62% of revenue paid by patients themselves. A speciality brand lets them open smaller centres quickly.",
                },
                {
                    label: 'Local: being the big hospital in a growing suburb',
                    text: "**Jupiter** (Thane, Baner, Indore) and **Yatharth** (Noida, Greater Noida, UP towns) are the largest modern hospitals in fast-growing suburbs. That holds until a national chain opens next door.",
                },
                {
                    label: 'Wearing: crowded markets and low prices',
                    text: "**KIMS** is entering cities where others are strong and guides only 4–5% ARPOB growth; **Shalby**'s ARPOB is low and a third of its patients are on government schemes.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Apollo Hospitals**, **Max Healthcare**, **Fortis**, **Manipal** and **Aster** among large chains; **Cloudnine** and **Motherhood** in maternity; many local eye hospitals against Dr Agarwal's.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For established hospitals, yes; the swings come from new hospitals and payer mix.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: speciality and complex care',
                    text: "**Rainbow** (29–33%) and **Dr Agarwal's** (26–29%) earn the highest margins. Rainbow's fell to 28.6% in Q1 from 31.5% in Q4 as new beds opened; management says it has always guided to 24–25% before lease accounting. **Medanta** (19–24%) is recovering as Noida's loss shrinks.",
                },
                {
                    label: 'Held despite expansion',
                    text: "**Yatharth** has held 23–25% while opening and acquiring hospitals, and guides about 24% for FY27.",
                },
                {
                    label: 'Dragged by new hospitals',
                    text: "**KIMS** (19–22%) is carrying start-up losses in Bengaluru, Kerala and Maharashtra; its new Kondapur hospital earned ₹45cr in July and Thane ₹21cr at a 10% margin. **Jupiter** fell to 19% in Q1 as Dombivli opened. **Artemis**'s Raipur hospital will lose about ₹20cr in total before breaking even in 15–18 months. **Narayana**'s Indian clinics lost about ₹15cr in the quarter and its Cayman insurer $3.7m.",
                },
                {
                    label: 'Not structural: thin and mixed',
                    text: "**Shalby** (10–15%): its hospitals earn 18.4% (target about 20%), but the implant business and a loss-making Gurugram hospital pull the group down, and government payers have risen to 32%.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Shalby** has turned only 14% of five years' operating profit into cash; its stock days are above 900 because of the implant business. **Yatharth** has converted about half, as money owed to it took 113–131 days to collect.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Yatharth** converted 67–70% in FY25 and FY26 after a negative FY24.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Most hospitals collect before they pay suppliers and doctors, so negative cash cycles are normal and 75–90% cash conversion is typical (**Narayana 91%**, **Artemis 92%**, **Dr Agarwal's 87%**).",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and debt, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Rainbow Children’s Medicare', 'Cash rose to ₹613cr; ₹2,200cr capex plan', 'Screener net debt ₹453cr, mostly leases'],
                        ['Jupiter Life Line Hospitals', 'Debt about ₹500cr against about ₹545cr cash', 'Roughly debt-free'],
                        ['Krishna Inst.Medi', 'Debt down from ₹3,250cr to about ₹2,400cr after a ₹1,500cr share sale and a ₹600cr promoter issue', 'Net debt about ₹1,900cr on the company’s figures'],
                        ['Yatharth Hospital', 'Debt up from about ₹210cr to about ₹300cr to part-fund Gurugram', 'Roughly debt-free at March'],
                        ['Artemis Medicare', 'Share sale of up to ₹700cr approved; capex about ₹800cr over three years', 'Net debt ₹56cr at March'],
                        ['Shalby', 'Net debt about ₹463cr, only about ₹55cr of it in the hospitals', 'ICRA cut its rating from A+ to A'],
                        ['Narayana, Medanta, Dr Agarwal’s', 'No Q1 cash figure given', '—'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
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
                    label: 'Growth driver: new beds',
                    text: "The biggest driver by far. **Medanta** has about 3,350 beds in its pipeline (₹4,850cr, including a 650-bed Guwahati hospital); **Rainbow** 2,500 beds for about ₹2,200cr; **Jupiter** about 1,700 beds at about ₹1.5cr each, including a 400-bed hospital in Mumbai's BKC; **Artemis** a 650-bed South Delhi hospital and a 200-bed Gurugram tower; **Narayana** ₹3,000cr over two years; **Yatharth** a 250-bed Gurugram hospital in early 2027 and a target of 5,000 beds.",
                },
                {
                    label: 'Growth driver: price per bed',
                    text: "ICRA expects revenue per bed to rise 6–8% a year for the sector. **Jupiter** (+11.7%) and **Yatharth** (guided +9–10%) are above that; **KIMS** (4–5%) is below.",
                },
                {
                    label: 'Growth driver: buying hospitals',
                    text: "**Yatharth** buys half-built or struggling hospitals cheaply and fills them. **Narayana** bought a UK hospital business in FY26, 95% funded by the NHS, which lifted revenue 61–78% in the last three quarters.",
                },
                {
                    label: 'Growth driver: new centres in one speciality',
                    text: "**Dr Agarwal's** plans 60 new eye centres this year for ₹380–400cr; its mature centres grew 14%. **Rainbow** is taking its children's hospitals to Mumbai, Delhi NCR, Pune and Indore.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Yatharth** (Q1 +52% against more than 37%), **Rainbow** (Q1 +33% against its 20% target), **Medanta** (Noida's loss down from ₹23.6cr to ₹4.9cr, earlier than expected) and **Jupiter** (ARPOB +11.7%).",
                },
                {
                    label: 'Cautious',
                    text: "**Narayana** gives no revenue or margin guidance. **KIMS** guides only cluster targets: Bengaluru to break even by the end of FY27, Kerala to mid-teens margins.",
                },
                {
                    label: 'Missed or walked back',
                    text: "**Shalby** promised minimal capex for FY27 in Q4 and is now in talks for a new Mumbai hospital; ICRA cut its rating.",
                },
                {
                    label: 'Mixed',
                    text: "**Rainbow** grew fast but its margin fell; **Artemis** and **Jupiter** are growing but absorbing new-hospital losses.",
                },
                {
                    label: 'My outlook',
                    text: "Hospitals should grow revenue 15–20% a year for years as beds are added. **I expect Yatharth and KIMS to compound earnings at about 25% (KIMS from a depressed base), Dr Agarwal's at about 22%, Rainbow and Medanta at about 20%, Jupiter and Artemis at about 18%, Narayana at about 15% and Shalby at about 12%.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Yatharth Hospital', 'Filling acquired hospitals; Gurugram', '15% / **25%** / 32%'],
                        ['Krishna Inst.Medi', 'New hospitals breaking even; lower interest', '12% / **25%** / 35%'],
                        ["Dr Agarwal's Health Care", '60 centres a year; mature-centre growth', '15% / **22%** / 28%'],
                        ["Rainbow Children's Medicare", '2,500 new beds; new cities', '14% / **20%** / 26%'],
                        ['Global Health (Medanta)', 'Noida; new cities; 3,350 beds', '14% / **20%** / 25%'],
                        ['Jupiter Life Line Hospitals', 'Dombivli; BKC; ARPOB', '12% / **18%** / 24%'],
                        ['Artemis Medicare', 'Raipur; South Delhi; Gurugram tower', '10% / **18%** / 24%'],
                        ['Narayana Hrudayalaya', 'UK business; India capex; Cayman', '8% / **15%** / 20%'],
                        ['Shalby', 'Hospital margin; implant business', '0% / **12%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Yatharth Hospital', 'FY27 growth above 37%; margin about 24%; ARPOB +9–10%', 'Gurugram 250 beds at about ₹1cr a bed', '**Delivered**: Q1 +52%'],
                        ["Rainbow Children's Medicare", 'Double revenue in four years; margin 24–25% before leases', '₹2,200cr for 2,500 beds', '**Delivered**: Q1 +33%; margin down'],
                        ['Jupiter Life Line Hospitals', 'Dombivli loss ₹2–3cr a month; breakeven end-2027 or 2028', 'About 1,700 beds at about ₹1.5cr each', '**On track**'],
                        ['Artemis Medicare', 'Raipur breakeven in 15–18 months', 'About ₹800cr over three years', '**On track**'],
                        ['Narayana Hrudayalaya', 'None', '₹3,000cr over two years', '**Met**: Cayman loss narrowing'],
                        ['Global Health (Medanta)', 'Noida breakeven earlier than expected', '₹4,850cr for about 3,350 beds', '**Delivered**: Noida loss down 80%'],
                        ["Dr Agarwal's Health Care", '60 new centres in FY27', '₹380–400cr', '**On track**'],
                        ['Krishna Inst.Medi', 'New-unit losses to halve in FY27; Bengaluru breakeven by FY27 exit', 'Many new hospitals; debt cut by share sale', '**On track** so far'],
                        ['Shalby', 'Hospital margin about 20%; “minimal capex”', 'Mumbai hospital under discussion', '**Walked back** capex promise'],
                    ],
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
                    label: 'Too many beds at once',
                    text: "About 14,500 new beds are coming from listed and large chains in two years, often in the same cities: **Medanta** and **Artemis** both in Gurugram, **Yatharth** entering Gurugram too, **Rainbow** and **Jupiter** entering Mumbai. New hospitals that fill slowly keep margins and returns down for longer. **KIMS** is carrying the most new hospitals relative to its size.",
                },
                {
                    label: 'Payers and prices',
                    text: "Government schemes pay fixed, lower rates and pay slowly; **Shalby**'s government share has risen to 32%. The government caps stent and knee-implant prices.",
                },
                {
                    label: 'Debt and new shares',
                    text: "**KIMS** raised ₹1,500cr from new shares and ₹600cr from its promoters to cut debt; **Artemis** has approval to sell up to ₹700cr of new shares; **Yatharth** is borrowing more for Gurugram. More shares mean each existing share owns less of the profit.",
                },
                {
                    label: 'Overseas and new businesses',
                    text: "**Narayana**'s UK hospitals depend on NHS funding, and its Cayman insurer and Indian clinics still lose money. **Shalby**'s implant business sells in the US.",
                },
                {
                    label: 'People and reporting',
                    text: "Hospitals depend on senior doctors, who can leave for rivals. **Shalby**'s rating was cut. Narayana's market value on the dashboard is wrong, so check it on an exchange website before acting.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **21% at 40x, 23% at 47x, 24% at 50x, 27% at 62x, 28% at 70x, 34% at 106x and 39% at 160x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is an expensive sector**: investors pay for years of bed additions in advance, so most prices ask for more growth than even a good chain can deliver.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**KIMS**'s P/E (about 160) is far above its EV/EBITDA (about 45) because interest and depreciation on its new hospitals eat most of its operating profit; as they fill, the P/E should fall faster than the EV/EBITDA. **Medanta**, **Yatharth**, **Jupiter** and **Artemis** have almost no net debt.",
                },
                {
                    label: 'Reasonable',
                    text: "**Yatharth**: the price asks for about the growth it is delivering.",
                },
                {
                    label: 'Full',
                    text: "**Rainbow**, **Jupiter** and **Artemis**: each needs a few points more growth than my estimate. These are the names to buy on a weak quarter.",
                },
                {
                    label: 'Stretched',
                    text: "**Medanta**, **Dr Agarwal's**, **KIMS** and **Shalby**: each needs growth well above my estimate. Medanta and Dr Agarwal's are excellent businesses at prices that already assume excellence. On Screener's figures (P/E about 45), **Narayana** needs about 23% a year against my 15%, so it is stretched too.",
                },
                {
                    label: 'Not in the live table',
                    text: "**Narayana**: the dashboard shows a price of ₹76 and a market value of ₹76,362cr, about twice Screener's ₹39,230cr, so its live figures would mislead. It will return to the table when the data is fixed.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Yatharth Hospital', rank: 1, stance: 'SCALEUP', segment: REGIONAL,
            what: "Runs eight hospitals in Delhi NCR and Uttar Pradesh, mostly bought half-built or struggling and turned round, with a ninth in Gurugram due in early 2027.",
            view: "**Fast growth, margin held.** Revenue up 52% in Q1, 23–25% margins and 1,820 of 2,555 beds in use, so there is room to grow without new buildings. Cash conversion is only about half. The price asks for about my ~25% estimate.",
            watch: 'Occupancy of new beds; Gurugram opening; cash collection.',
        },
        {
            company: "Rainbow Children's Medicare", rank: 2, stance: 'PRICED', segment: SPECIAL,
            what: "India's leading children's and maternity hospital chain, strongest in Hyderabad, Bengaluru, Chennai and Andhra Pradesh, now expanding into Mumbai, Delhi NCR, Pune and Indore.",
            view: "**Best-in-class speciality, expanding hard.** Margins of 29–33%, ₹613cr of cash, free cash while expanding, and a plan to double revenue in four years; occupancy is only about 41% as new beds open. The price asks for a little more than my ~20% estimate.",
            watch: 'Margin as 2,500 beds open; new cities filling; occupancy.',
        },
        {
            company: 'Jupiter Life Line Hospitals', rank: 3, stance: 'PRICED', segment: REGIONAL,
            what: "Runs large multi-speciality hospitals in Thane, Pune (Baner) and Indore, and opened a new hospital in Dombivli in February 2026.",
            view: "**Strong suburban franchise, new hospital to absorb.** ARPOB up 11.7% to ₹67,700 and Thane about 75% full, but Dombivli loses ₹2–3cr a month and about 1,700 more beds are planned. The price asks for a little more than my ~18% estimate.",
            watch: 'Dombivli losses; the BKC project; Indore occupancy.',
        },
        {
            company: 'Artemis Medicare', rank: 4, stance: 'PRICED', segment: REGIONAL,
            what: "Runs a large hospital in Gurugram known for transplants and complex surgery, with about a quarter of revenue from foreign patients, and is opening in Raipur and South Delhi.",
            view: "**Highest price per bed, big plans.** ARPOB ₹85,690, occupancy 65.7% and 27% foreign patients, but Raipur is just starting and South Delhi will need a share sale. The price asks for a little more than my ~18% estimate.",
            watch: 'Raipur breakeven; the ₹700cr share sale; international patients.',
        },
        {
            company: 'Narayana Hrudayalaya', rank: 5, stance: 'PRICED', segment: LARGE,
            what: "Narayana Health: a multi-speciality chain in India that began in low-cost heart surgery, with a hospital and an insurer in the Cayman Islands and a UK hospital business bought in FY26.",
            view: "**A changed company, fully priced.** The UK deal lifted revenue 61–78% and net debt to 1.9x operating profit; the Cayman insurer and Indian clinics still lose money. On Screener's P/E of about 45 the price needs well over my ~15% estimate.",
            watch: 'UK margins; Cayman insurance losses; the dashboard data being fixed.',
        },
        {
            company: 'Global Health (Medanta)', rank: 6, stance: 'PRICED', segment: LARGE,
            what: "Runs large Medanta hospitals in Gurugram, Lucknow, Patna, Ranchi, Indore and Noida, founded by heart surgeon Dr Naresh Trehan, known for complex surgery and transplants.",
            view: "**Excellent operator, price ahead of it.** Noida's loss has almost gone, inpatient volumes rose 28% and it has almost no net debt, with 3,350 beds in the pipeline. The price needs much more than my ~20% estimate.",
            watch: 'Noida breakeven; new-city launches; ARPOB.',
        },
        {
            company: "Dr Agarwal's Health Care", rank: 7, stance: 'PRICED', segment: SPECIAL,
            what: "India's largest eye-care chain: 269 facilities in 155 cities, 19 in Africa, doing cataract, laser and retina surgery and selling spectacles and medicines.",
            view: "**A strong speciality chain, priced for perfection.** Margins of 26–29%, 62% of revenue paid by patients directly and 87% cash conversion, but new centres lost ₹30cr last year. The price needs far more than my ~22% estimate.",
            watch: 'New-centre losses; mature-centre growth; 60 openings this year.',
        },
        {
            company: 'Krishna Inst.Medi', rank: 8, stance: 'TURNAROUND', segment: LARGE,
            what: "KIMS: multi-speciality hospitals in Telangana and Andhra Pradesh, recently opened or bought in Bengaluru, Kerala and Maharashtra.",
            view: "**Good hospitals, too many new ones at once.** Return on capital fell from 34% to 10% and net debt reached 5x at March (about 2x after its share sale), with ARPOB growth guided at only 4–5%. The price needs much more than my ~25% estimate.",
            watch: 'New-unit losses halving; Bengaluru breakeven; debt.',
        },
        {
            company: 'Shalby', rank: 9, stance: 'TURNAROUND', segment: REGIONAL,
            what: "Runs hospitals, mainly in Gujarat, known for joint replacements, and an implant business selling knee and other joint implants in India and the US.",
            view: "**Weak returns and a broken promise.** Return on capital 6%, five-year cash conversion 14%, net debt about 3.5x, a rating cut, and talks on a new Mumbai hospital after promising minimal capex. The price needs far more than my ~12% estimate.",
            watch: 'Capex decisions; implant business cash; rating.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Regional chains.** **Yatharth Hospital: own.** **Jupiter Life Line Hospitals: follow** through Dombivli's start-up losses. **Artemis Medicare: follow** as Raipur and South Delhi take shape. **Shalby: pass** until capex discipline and cash return.",
            "**Single-speciality chains.** **Rainbow Children's Medicare: follow** for a better price. **Dr Agarwal's Health Care: wait**: a good business priced for perfection.",
            "**Large chains across several states.** **Global Health (Medanta): wait** for a price that fits. **Narayana Hrudayalaya: wait**, and check its price outside the dashboard. **Krishna Inst.Medi (KIMS): wait** for new hospitals to break even.",
            "**What would change my view.** For the better: a market fall that brings Rainbow, Jupiter or Medanta to prices that fit their growth; KIMS's new hospitals breaking even early. For the worse: new beds filling more slowly than planned in crowded cities; cuts to what insurers and schemes pay.",
            "**What to watch next quarter.** Yatharth's occupancy; Rainbow's margin; Jupiter's Dombivli loss; Medanta's Noida; KIMS's new units; Shalby's capex decision.",
        ],
        bottomLine:
            "Own the fast, disciplined grower (Yatharth Hospital), follow the good hospitals priced a little high (Rainbow Children's Medicare, Jupiter Life Line Hospitals, Artemis Medicare), wait on the excellent but expensive and the over-extended (Narayana Hrudayalaya, Global Health (Medanta), Dr Agarwal's Health Care, Krishna Inst.Medi), and pass on Shalby.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/YATHARTH/consolidated/' },
        { label: 'Private hospital chains to invest ₹30,000cr in bed expansion by FY27 (ICRA) — Digital Health News', url: 'https://www.digitalhealthnews.com/private-hospital-chains-to-invest-inr-30-000-cr-in-bed-expansion-by-fy27-icra' },
        { label: 'FY2026 to be another robust year for the Indian hospital industry — ICRA', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=4fce5207-55d9-4778-9a0d-ecea5f3cefb5' },
        { label: 'Healthcare industry in India: insurance premiums and market size — IBEF', url: 'https://www.ibef.org/industry/healthcare-india' },
        { label: 'Company earnings calls and presentations, Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
