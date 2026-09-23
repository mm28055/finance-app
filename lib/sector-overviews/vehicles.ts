import { SectorOverview } from './types';
import { vehiclesBusinesses } from './vehicles-businesses';
import { vehiclesValuationInputs } from './card-data/vehicles';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const EV = 'Electric scooters and buses';
const CONSTRUCTION = 'Construction equipment — cranes and concrete mixers';
const FARM = 'Farm machinery — tillers and tractors';

export const vehicles: SectorOverview = {
    sector: 'Vehicles',
    title: 'Vehicles',
    format: 'ranked',
    businesses: vehiclesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        // ACE is left out of the live table (its dashboard market value is wrong); TIL is flagged loss-making.
        inputs: vehiclesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Action Const.Eq.': 15,
            'Olectra Greentech': 25,
            'Zelio E-Mobility': 30,
            'Ajax Engineering': 12,
            'Ather Energy': null,
            'VST Tillers Tractors': 12,
            'Indo Farm': 12,
            'TIL': null,
            'Ola Electric': null,
        },
    },
    standfirst:
        "Nine makers of vehicles and machines. Four are electric: Ather and Ola make electric scooters, Zelio makes cheap low-speed scooters for small towns, and Olectra makes electric buses. Three make construction equipment: ACE (cranes), Ajax (self-loading concrete mixers) and TIL (cranes and defence handling equipment). Two make farm machinery: VST (power tillers and small tractors) and Indo Farm (tractors and cranes). Electric scooters are the fastest-growing market, but the winners are Ather and the big two-wheeler companies, not Ola. Every chart uses filed results and five years of history. ACE is left out of the live valuation because the dashboard's market value for it is wrong, and TIL is shown as loss-making.",
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
            source: 'Filed quarterly results (Screener): consolidated except Ather, Ajax and Zelio (standalone). Zelio reports half-yearly, so its figures sit in the Q2 and Q4 columns. Operating profit ÷ sales.',
            note: 'The equipment and bus makers earn 10–17%. Ather has almost reached breakeven; Ola’s losses have deepened as its sales collapsed.',
            values: {
                'Action Const.Eq.': [14, 15, 15, 17, 15],
                'Olectra Greentech': [14, 14, 14, 16, 12],
                'Zelio E-Mobility': [null, 11, null, 11, null],
                'Ajax Engineering': [13, 10, 10, 15, 12],
                'Ather Energy': [-21, -15, -8, -6, -3],
                'VST Tillers Tractors': [13, 13, 13, 14, 13],
                'Indo Farm': [14, 12, 13, 14, 13],
                'TIL': [-11, 0, 2, 9, 7],
                'Ola Electric': [-29, -29, -58, -106, -36],
            },
            cellNotes: {
                'Ather Energy': 'Ather reported a 0.8% EBITDA margin for Q1 FY27 on its own definition; Screener’s figure differs.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Electric scooters are the fastest-growing market here, but the growth has gone to Ather (and to TVS and Bajaj, not in this group); Ola’s revenue has halved.',
            values: {
                'Action Const.Eq.': [-11, -2, -2, 7, 21],
                'Olectra Greentech': [11, 25, 29, 44, 66],
                'Zelio E-Mobility': [null, 77, null, 75, null],
                'Ajax Engineering': [0, 48, -21, 0, 2],
                'Ather Energy': [79, 54, 50, 74, 89],
                'VST Tillers Tractors': [48, 11, 43, 9, 11],
                'Indo Farm': [28, 21, 10, 3, 15],
                'TIL': [-6, 16, -7, 7, 86],
                'Ola Electric': [-50, -43, -55, -57, -45],
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
            note: 'ACE, Ajax and Zelio earn 24–52%; Indo Farm about 8%; the electric-scooter makers still lose money on their capital.',
            values: {
                'Action Const.Eq.': [21, 26, 42, 40, 32],
                'Olectra Greentech': [8, 13, 15, 21, 21],
                'Zelio E-Mobility': [null, 44, 45, 52, 38],
                'Ajax Engineering': [17, 28, 37, 34, 24],
                'Ather Energy': [-51, -95, -75, -66, -20],
                'VST Tillers Tractors': [null, null, 18, 12, 14],
                'Indo Farm': [9, 9, 9, 8, 8],
                'TIL': [-31, -35, -49, 11, 3],
                'Ola Electric': [-24, -30, -32, -28, -20],
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
            note: 'Scooter makers collect from dealers quickly and pay suppliers later, so their cycles are negative. Indo Farm (about 300 days) and TIL carry very large stocks; ACE has improved to below zero.',
            values: {
                'Action Const.Eq.': [18, 9, -4, -18, -20],
                'Olectra Greentech': [40, 79, 86, 41, 54],
                'Zelio E-Mobility': [182, 56, 57, 88, 66],
                'Ajax Engineering': [102, 29, 24, 37, 12],
                'Ather Energy': [-56, -29, -64, -60, -68],
                'VST Tillers Tractors': [null, 42, 69, 76, 60],
                'Indo Farm': [295, 290, 320, 334, 313],
                'TIL': [983, 954, 462, 243, 372],
                'Ola Electric': [-40, -4, -43, -16, -91],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years. Blank where operating profit was negative.',
            note: 'Operating cash is after tax, so 70–80% is healthy. ACE (92%) and Ajax (80%) convert best; Zelio has used cash in four of the last five years as it grew.',
            values: {
                'Action Const.Eq.': [69, 124, 107, 81, 83, 92],
                'Olectra Greentech': [142, -7, 86, 54, 32, 51],
                'Zelio E-Mobility': [-150, -25, 11, -33, -21, -24],
                'Ajax Engineering': [93, 108, 75, 14, 142, 80],
                'Ather Energy': [null, null, null, null, null, null],
                'VST Tillers Tractors': [null, 28, 40, 70, 80, 56],
                'Indo Farm': [19, 51, 66, 90, 50, 56],
                'TIL': [null, null, null, null, null, null],
                'Ola Electric': [null, null, null, null, null, null],
            },
            cellNotes: {
                'Ather Energy': 'Operating loss every year.',
                'Ola Electric': 'Operating loss every year.',
                'TIL': 'Operating profit too small or negative for the ratio to mean anything; operating cash was negative in four of five years.',
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
            note: 'ACE and Ajax produce free cash every year; Ola has burnt cash equal to about three-quarters of its revenue over five years.',
            values: {
                'Action Const.Eq.': [3.4, 9.3, 8.9, 5.7, 9.9, 7.7],
                'Olectra Greentech': [8.9, -6.9, 5.5, -2.0, -2.4, -0.7],
                'Zelio E-Mobility': [-26.8, -10.5, -3.9, -8.5, -5.7, -7.0],
                'Ajax Engineering': [9.2, 14.6, 10.6, 1.0, 16.6, 10.1],
                'Ather Energy': [-72.8, -56.3, -21.9, -47.0, -12.9, -32.6],
                'VST Tillers Tractors': [null, 1.2, 4.3, 5.7, 8.5, 5.2],
                'Indo Farm': [-4.6, 5.8, 8.9, 7.1, 0.1, 3.5],
                'TIL': [-40.9, 13.6, -124.8, -43.5, -29.0, -41.1],
                'Ola Electric': [-475.1, -89.3, -36.9, -74.6, -66.3, -73.3],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for ACE, Ajax, VST, Ather, Ola and Zelio. Blank where operating profit was negative.',
            note: 'Below zero means more cash than debt. ACE, Ajax and VST hold large net cash; Ather (₹711cr net cash) and Ola (₹1,221cr net debt) make operating losses, so the ratio is blank; TIL’s debt is 60x its tiny operating profit.',
            values: {
                'Action Const.Eq.': [-1.1, -1.8, -1.7, -1.9, -2.7],
                'Olectra Greentech': [-1.6, -0.2, -0.3, 0.3, 0.6],
                'Zelio E-Mobility': [2.0, 2.5, 1.6, 1.5, -0.2],
                'Ajax Engineering': [-3.4, -2.9, -2.5, -2.3, -4.2],
                'Ather Energy': [null, null, null, null, null],
                'VST Tillers Tractors': [null, -3.6, -4.3, -5.4, -4.1],
                'Indo Farm': [5.0, 4.7, 4.1, 1.1, 1.2],
                'TIL': [null, null, null, 19.7, 60.8],
                'Ola Electric': [null, null, null, null, null],
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
            note: 'Ola spent more than twice its FY22 sales on its scooter and cell factories; the equipment makers spend 1–7% of sales.',
            values: {
                'Action Const.Eq.': [2.9, 3.4, 6.0, 6.6, 2.8, 4.6],
                'Olectra Greentech': [11.5, 6.0, 6.8, 9.8, 6.9, 7.9],
                'Zelio E-Mobility': [3.8, 8.6, 4.9, 4.4, 3.3, 4.3],
                'Ajax Engineering': [2.0, 1.5, 1.3, 1.1, 1.3, 1.4],
                'Ather Energy': [17.4, 7.4, 6.6, 15.0, 13.8, 11.8],
                'VST Tillers Tractors': [null, 2.4, 0.7, 2.0, 2.1, 1.8],
                'Indo Farm': [7.7, 2.7, 2.5, 7.3, 7.1, 5.5],
                'TIL': [0.0, 0.0, 0.9, 1.9, 1.7, 1.5],
                'Ola Electric': [237.8, 32.0, 24.2, 21.6, 31.9, 31.4],
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
            note: 'Ajax and Zelio assemble in light plants and turn over their assets 10–20 times; Ola’s large factories earn less than ₹1 of sales per ₹1 of assets.',
            values: {
                'Action Const.Eq.': [3.6, 4.4, 5.0, 4.6, 4.2],
                'Olectra Greentech': [1.8, 3.1, 3.5, 5.1, 4.0],
                'Zelio E-Mobility': [null, 51.0, 11.8, 21.5, 21.6],
                'Ajax Engineering': [4.9, 6.9, 10.4, 11.8, 11.6],
                'Ather Energy': [1.2, 3.3, 3.8, 3.7, 5.9],
                'VST Tillers Tractors': [null, 3.9, 3.9, 4.1, 5.3],
                'Indo Farm': [1.6, 1.7, 1.8, 1.7, 2.0],
                'TIL': [0.6, 0.4, 0.6, 3.2, 3.4],
                'Ola Electric': [0.4, 2.2, 2.0, 1.4, 0.8],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'share', label: 'Market position', description: 'Leading share in its niche, so buyers and dealers come to it first.' },
            { key: 'product', label: 'Product and technology', description: 'How hard the product is to copy: engineering, software, batteries, approvals.' },
            { key: 'dealers', label: 'Dealers and service', description: 'A network that sells, finances and services the machines.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether steel, battery and emission-rule costs were passed on this year.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, debt levels, and how the promoters behave.' },
        ],
        rows: [
            { company: 'Action Const.Eq.', trend: 'widening', trendNote: 'Cranes and construction sales up 22% in Q1; defence sales expected above ₹200cr this year.',
                grades: { share: { grade: 'A', note: 'Leader in pick-and-carry cranes' }, product: { grade: 'B', note: 'Cranes, tower cranes, road machinery' }, dealers: { grade: 'A', note: 'National dealer and service network' }, pass: { grade: 'B', note: 'Raised prices about 10% against 11–12% cost inflation' }, cash: { grade: 'A', note: '₹1,352cr net cash; 92% cash conversion' } } },
            { company: 'Olectra Greentech', trend: 'widening', trendNote: '358 buses in Q1 against 161; about 8,000 buses on order.',
                grades: { share: { grade: 'B', note: 'Early leader in electric buses' }, product: { grade: 'B', note: 'Buses on BYD technology; insulators' }, dealers: { grade: 'C', note: 'Sells to a few state buyers' }, pass: { grade: 'C', note: 'Margin normalising to about 12%' }, cash: { grade: 'C', note: 'State buyers pay slowly; 51% cash conversion' } } },
            { company: 'Zelio E-Mobility', trend: 'widening', trendNote: 'Over 70,000 units in FY26; targets over 1.25 lakh in FY27 and capacity to 2.4 lakh.',
                grades: { share: { grade: 'B', note: 'Strong in low-speed scooters' }, product: { grade: 'C', note: 'Simple, cheap scooters' }, dealers: { grade: 'B', note: '400+ dealers, heading to 550+' }, pass: { grade: 'B', note: 'Margins steady at 11–12%' }, cash: { grade: 'D', note: 'Negative five-year cash conversion; SME-listed' } } },
            { company: 'Ajax Engineering', trend: 'stable', trendNote: 'Share rose to 75.1% while industry registrations fell 27%.',
                grades: { share: { grade: 'A', note: 'About three-quarters of the self-loading mixer market' }, product: { grade: 'B', note: 'Mixers, batching plants, pumps' }, dealers: { grade: 'A', note: 'Dealers plus spares income' }, pass: { grade: 'B', note: 'Margin 10–15%' }, cash: { grade: 'A', note: '₹1,119cr net cash; 80% cash conversion' } } },
            { company: 'Ather Energy', trend: 'widening', trendNote: 'About 17% of electric-scooter registrations; operating margin just above zero.',
                grades: { share: { grade: 'B', note: 'Third in electric scooters behind TVS and Bajaj' }, product: { grade: 'A', note: 'Own software, charging network, design' }, dealers: { grade: 'B', note: 'Expanding beyond southern cities' }, pass: { grade: 'B', note: 'Raised prices; average ₹1.61 lakh' }, cash: { grade: 'C', note: 'Still burning cash; raising ₹2,500cr' } } },
            { company: 'VST Tillers Tractors', trend: 'stable', trendNote: 'Tillers up 18% in Q1, but no FY27 guidance and the Zetor tractor ramp-up is slow.',
                grades: { share: { grade: 'A', note: 'Best-known power-tiller brand' }, product: { grade: 'C', note: 'Tractors bought-in or licensed' }, dealers: { grade: 'B', note: 'Adding 500 counters' }, pass: { grade: 'B', note: 'Margins steady at 13–14%' }, cash: { grade: 'B', note: '₹678cr net cash, poorly invested say shareholders' } } },
            { company: 'Indo Farm', trend: 'stable', trendNote: 'Tractors up 36% in Q1, cranes flat; tower-crane plans slipped.',
                grades: { share: { grade: 'C', note: 'Small tractor and crane maker' }, product: { grade: 'C', note: 'Standard tractors and cranes' }, dealers: { grade: 'C', note: 'Own finance arm funds about 20% of tractors' }, pass: { grade: 'B', note: 'Margins steady at 12–14%' }, cash: { grade: 'D', note: 'About 300-day cash cycle; returns 8%' } } },
            { company: 'TIL', trend: 'stable', trendNote: 'Order book ₹211cr; losses continue; merging businesses with its new owner, Gainwell.',
                grades: { share: { grade: 'B', note: 'About half of rough-terrain cranes; 38–40% of reach stackers' }, product: { grade: 'B', note: 'Defence handling equipment' }, dealers: { grade: 'C', note: 'Project sales' }, pass: { grade: 'D', note: 'Margins near zero' }, cash: { grade: 'D', note: 'Net debt ₹365cr against ₹6cr operating profit' } } },
            { company: 'Ola Electric', trend: 'narrowing', trendNote: 'Revenue down 45–57% for five quarters; missed its Q1 revenue guidance.',
                grades: { share: { grade: 'C', note: 'Single-digit share, down from market leader' }, product: { grade: 'B', note: 'Own cells and motors' }, dealers: { grade: 'C', note: 'Own stores; service complaints' }, pass: { grade: 'D', note: 'Gross margin 30.5%, operating loss' }, cash: { grade: 'D', note: 'Burnt about 73% of revenue over five years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No company here is a clear buy today; follow ACE, Olectra and Zelio.** ACE is India's leading crane maker, with returns of 32–42%, ₹1,352cr of net cash and 92% cash conversion; its crane and construction sales grew 22% in Q1. On Screener's price (the dashboard's is wrong) it needs a little more growth than I expect. Olectra delivered 358 electric buses in Q1 against 161 a year earlier and has about 8,000 on order, but state buyers pay slowly. Zelio's cheap small-town scooters grew about 75%, at high returns, but it has not turned profit into cash.",
                "**Wait on Ajax, Ather and VST.** Ajax is the best business in the group (three-quarters of its market, ₹1,119cr of net cash), but registrations of self-loading mixers across the industry fell 27% in Q1. Ather is winning in electric scooters (about 17% of registrations, revenue up 89%) and has just reached breakeven, but its price already assumes years of success. VST has good tillers and net cash but no guidance and a slow tractor ramp-up.",
                "**Pass on Indo Farm and TIL; avoid Ola.** Indo Farm earns 8% on its capital and carries about 300 days of working capital. TIL loses money, carries debt 60 times its operating profit and is being merged piece by piece with businesses of its new owner. Ola's revenue has fallen by about half for five straight quarters while TVS, Bajaj and Ather take its customers.",
                "**Two things to hold onto before reading the rest.** First, **a growing market does not mean a growing company**: electric-scooter registrations rose about 53% in the first half of 2026, but Ola's fell 44%. Second, **equipment demand follows public construction**: India's construction-equipment sales fell 2% in FY26 on project delays and costlier machines, and the industry now expects 9–12% growth in FY27 as government capex rises.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Ather, Ajax and Zelio standalone, the others consolidated). Zelio reports half-yearly, so some quarters are blank. Several ratios are blank for the loss-makers (Ather, Ola, TIL). Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Three separate markets under one label. Electric two-wheelers passed 1 million registrations in the first seven months of 2026, the fastest ever. Construction equipment dipped in FY26 and is expected to recover. Farm machinery follows the monsoon.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel, battery cells, engines and electronics → **vehicle and machine makers** (these nine) → dealers → households, farmers, contractors, state transport undertakings and the armed forces. **The profit sits with makers who lead a niche and control their dealers**: ACE in cranes, Ajax in self-loading mixers. Battery cells, mostly imported, are the biggest cost for the electric makers.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Households switching to electric scooters as running costs fall; cities replacing diesel buses with electric ones; roads, railways, metros and factories needing cranes and concrete; farmers mechanising as labour becomes scarce. Government capex of about ₹12.2 lakh crore in FY27 supports construction equipment.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Subsidies and emission rules move demand.** Electric vehicles depend on government incentives and on state transport tenders. New emission rules for construction equipment raised machine prices in 2025, which cut sales. Tractors and tillers rise and fall with the monsoon; VST gave no FY27 guidance for that reason.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**ACE** on infrastructure spending and defence; **Olectra** on delivering its bus orders and getting paid; **Zelio** on small-town scooter demand and its new capacity; **Ajax** on the mixer market recovering; **Ather** on keeping its share against TVS and Bajaj as it scales; **VST** on the monsoon and its tractor partners; **Indo Farm** on its new crane plant; **TIL** on defence orders and its owner's plans; **Ola** on stopping its decline. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Electric scooters and buses', 'Ather, Ola, Zelio, Olectra', '−106% to 16%', '−20% to 38%', '**−24% to 51%** (Ather, Ola loss-making)'],
                        ['Construction equipment', 'ACE, Ajax, TIL', '−11% to 17%', '3–32%', '**80–92%** (TIL not meaningful)'],
                        ['Farm machinery', 'VST, Indo Farm', '12–14%', '8–14%', '**56%**'],
                    ],
                },
                {
                    caption: 'Electric two-wheelers: who is winning (outside reports and company calls)',
                    columns: ['Company', 'What the figures show'],
                    rows: [
                        ['Ather Energy', 'Q1 FY27 wholesale 83,000, up 81%; about 17% of registrations; 1.5 lakh pre-orders'],
                        ['Ola Electric', 'Registrations down 44% in January–June 2026, share about 6.8% (Vahan-based reports); company says its share rose from 5.1% to 8.4% quarter on quarter'],
                        ['TVS, Bajaj (not in this group)', 'Together about half the market in August 2026'],
                        ['Zelio E-Mobility', 'Low-speed scooters that need no registration, so outside these figures; 70,000+ units in FY26'],
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
                    label: 'Lasting: owning a niche',
                    text: "**Ajax** (75.1% of self-loading mixers) and **ACE** (the leading pick-and-carry crane maker) dominate markets that big global makers have not taken seriously, with dealer networks and spares income that competitors would take years to build.",
                },
                {
                    label: 'Lasting if it keeps winning: a premium brand',
                    text: "**Ather**'s software, charging network and design let it charge an average of ₹1.61 lakh a scooter and take about 17% of registrations, but it is up against TVS and Bajaj, which have far bigger dealer networks and deep pockets.",
                },
                {
                    label: 'Early and contract-bound',
                    text: "**Olectra** was first to scale electric buses, but it sells to a few state buyers by tender, on price, and one large order (BEST) is in dispute.",
                },
                {
                    label: 'Wearing: price competition',
                    text: "**Ola** lost its lead as established two-wheeler makers entered. **Indo Farm** competes with far larger tractor makers. **Zelio**'s cheap scooters are simple to copy.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**TVS**, **Bajaj** and **Hero** in electric scooters; **Tata Motors**, **JBM** and **PMI** in electric buses; **Escorts Kubota** and **JCB** in cranes and equipment; **Mahindra** and **Sonalika** in tractors.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the niche leaders, yes; for the electric makers, they are still being established.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: niche leaders',
                    text: "**ACE** (14–17%) aims for 15–16% and raised prices about 10% this year against 11–12% cost inflation. **Ajax** (10–15%) keeps a 12–15% band even with its market down 27%. **VST** (13–14%) and **Indo Farm** (12–14%) are steady.",
                },
                {
                    label: 'Settling: electric buses',
                    text: "**Olectra** has earned 12–16% and says about 12% is the normal level as volumes rise.",
                },
                {
                    label: 'Improving from losses',
                    text: "**Ather** reached a 0.8% operating margin in Q1 on its own figures after years of losses, helped by price increases and scale. **TIL** is just above breakeven at the operating level but still loses money after interest.",
                },
                {
                    label: 'Not structural: collapsing volumes',
                    text: "**Ola**'s gross margin fell to 30.5% and it made an adjusted operating loss of ₹195cr in Q1 as deliveries fell to about 39,200. Q1 costs were also helped by a one-off ₹55cr reversal of penalties.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Indo Farm** (about 300 days) and **TIL** (240–980 days) carry large stocks; Indo Farm's own finance arm is refinancing used tractors because dealer stock is piling up. **Zelio** has ₹42.6cr tied up in supplier advances and tax refunds. **Olectra** waits about five months to be paid by state buyers.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**ACE**'s cycle went from 18 days to −20 over five years as it collected faster and paid suppliers later; **Ajax**'s fell from 102 to 12 days.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Scooter makers collect from dealers quickly and pay suppliers later, so their cycles are negative even while they lose money; that cash does not make them profitable.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Action Const.Eq.', 'Capex ₹200–250cr in FY27 (land and a new plant with about ₹500cr of sales potential); KATO joint venture ₹200cr', 'Net cash ₹1,352cr'],
                        ['Olectra Greentech', 'Capex about ₹600cr over about 18 months', 'Net debt ₹208cr at March'],
                        ['Ajax Engineering', 'Cash over ₹1,100cr', 'Net cash ₹1,119cr'],
                        ['Ather Energy', '₹2,500cr raise: ₹1,300cr placement done, ₹1,200cr preferential issue pending; second factory adds 5 lakh a year', 'Net cash ₹711cr at March'],
                        ['Ola Electric', '₹780cr share placement; cell plant to 6 GWh by September', 'Net debt ₹1,221cr at March'],
                        ['Indo Farm', 'About ₹45cr of listing money still unspent; crane plant from end-November', 'Net debt ₹74cr'],
                        ['TIL', 'Up to ₹50cr more for Tulip, aiming for 74%', 'Net debt ₹365cr'],
                        ['Zelio, VST', 'No Q1 cash figure given', '—'],
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
                    label: 'Growth driver: electric scooters',
                    text: "**Ather** sold 83,000 scooters in Q1 (up 81%), has 1.5 lakh pre-orders, a full Hosur factory and a second factory in Aurangabad adding 5 lakh a year. **Zelio** targets over 1.25 lakh units this year (from 70,000) and is lifting capacity from 72,000 to 2.4 lakh.",
                },
                {
                    label: 'Growth driver: electric buses',
                    text: "**Olectra** has about 8,000 buses on order (Maharashtra's MSRTC about 4,000, Mumbai's BEST about 2,000) and guides 2,000–2,500 deliveries this year, against 358 in Q1.",
                },
                {
                    label: 'Growth driver: infrastructure and defence',
                    text: "**ACE** expects over ₹200cr of defence sales this year and exports of 6–7%; it has deferred full-year guidance to the end of Q2. The industry expects construction-equipment sales to grow 9–12% in FY27. **TIL** has a ₹211cr order book, half of FY26 sales from defence.",
                },
                {
                    label: 'Growth driver: farms',
                    text: "**VST** targets ₹3,000cr of revenue by FY30 (about ₹1,240cr in FY26). **Indo Farm** guides revenue up 20–25% this year and is building a plant for 3,600 cranes a year.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Ather** turned an operating profit earlier than many expected; **Olectra** more than doubled deliveries; **Ajax** gained share in a falling market.",
                },
                {
                    label: 'Cautious',
                    text: "**ACE** deferred FY27 guidance; **VST** gave none because of the monsoon; **Olectra** cut its margin expectation to about 12%.",
                },
                {
                    label: 'Missed',
                    text: "**Ola** missed its Q1 revenue guidance (₹455cr against ₹500–550cr) and declined to give full-year guidance. **Indo Farm**'s tower-crane plan slipped to a first lot of 10.",
                },
                {
                    label: 'Mixed',
                    text: "**VST**'s tillers grew 18% but its tractor partnership is ramping up slowly. **TIL** is growing but still losing money.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Zelio to compound earnings at about 30% and Olectra at about 25% if they are paid on time, ACE at about 15%, and Ajax, VST and Indo Farm at about 12%.** Ather, Ola and TIL do not yet make enough profit to estimate from; Ather is closest.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Zelio E-Mobility', 'Capacity to 2.4 lakh; more dealers', '15% / **30%** / 40%'],
                        ['Olectra Greentech', 'Bus orders; insulators', '12% / **25%** / 32%'],
                        ['Action Const.Eq.', 'Infrastructure; defence; exports', '8% / **15%** / 20%'],
                        ['Ajax Engineering', 'Mixer market recovery; new products', '5% / **12%** / 18%'],
                        ['VST Tillers Tractors', 'Tillers; tractors; monsoon', '5% / **12%** / 18%'],
                        ['Indo Farm', 'New crane plant; tractors', '0% / **12%** / 20%'],
                        ['Ather Energy', 'Share and scale; second factory', 'Just at breakeven; too early to estimate'],
                        ['TIL', 'Defence; Gainwell integration', 'Loss-making; too early to estimate'],
                        ['Ola Electric', 'Stopping the decline; cells', 'Loss-making; too early to estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Action Const.Eq.', 'Margin 15–16%; defence and exports 10–12% of sales; full-year guidance deferred', '₹200–250cr in FY27', '**On track**'],
                        ['Olectra Greentech', '2,000–2,500 buses in FY27; margin about 12%', 'About ₹600cr over 18 months', '**On track** on volume; margin lowered'],
                        ['Zelio E-Mobility', 'Over 1.25 lakh units in FY27', 'Capacity to 2.4 lakh', '**Delivered**: FY26 growth about 75%'],
                        ['Ajax Engineering', 'Margin 12–15%', 'Small', '**Delivered** share gains; revenue flat'],
                        ['Ather Energy', 'Second factory trials by the festive season; margins to stabilise', '₹2,500cr raise', '**Beat**: breakeven reached'],
                        ['VST Tillers Tractors', 'None for FY27; ₹3,000cr by FY30', 'Small', '**Walked back** near-term guidance'],
                        ['Indo Farm', 'Revenue +20–25%; margin 12.5–13%', 'Crane plant; ₹45cr unspent', '**Missed** tower-crane plan'],
                        ['TIL', 'Up to ₹700–750cr of sales without big capex', 'Up to ₹50cr into Tulip', '**Behind**: still loss-making'],
                        ['Ola Electric', 'None for the full year', 'Cell plant to 6 GWh', '**Missed** Q1 revenue guidance'],
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
                    label: 'Competition in electric scooters',
                    text: "TVS and Bajaj now take about half the market. **Ather** has to keep its price premium as they add models and dealers; **Ola** has not found a way to stop losing share. Cheap low-speed scooters (**Zelio**) face easy copying.",
                },
                {
                    label: 'Government buyers and subsidies',
                    text: "**Olectra** depends on state transport tenders and payments, and the BEST order is in dispute. Changes to electric-vehicle incentives move scooter demand. **TIL** and **ACE** rely partly on defence orders.",
                },
                {
                    label: 'Construction and farm cycles',
                    text: "Equipment sales fell in FY26 on project delays and pricier machines; **Ajax**'s market fell 27% in Q1. Tractors and tillers need a good monsoon.",
                },
                {
                    label: 'Governance and promoter dealings',
                    text: "**TIL** is being combined with businesses of its owner, Gainwell (Tulip was bought from a Gainwell company, which also supplies its engines). **Ola** changed its depreciation policy and was helped by a one-off reversal of penalties; its promoters' stake fell from 36.8% to 33.0%. **Zelio** is SME-listed, reports half-yearly and its shares trade thinly.",
                },
                {
                    label: 'Data problems on the dashboard',
                    text: "The dashboard shows **ACE** at a market value of ₹369cr (Screener: ₹14,973cr) and **TIL** and **Ola** with P/Es although they lose money. ACE is left out of the live table and TIL is shown as loss-making; check any price on an exchange website before acting.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **17% at 28x, 20% at 34–35x, 26% at 59x and 29% at 75x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**ACE**, **Ajax** and **VST** hold large net cash (₹678–1,352cr), so their businesses are cheaper than their P/Es suggest. Ather's value, about 14 times its sales, is not measurable on earnings at all.",
                },
                {
                    label: 'Reasonable',
                    text: "**Olectra** and **Zelio**: prices that ask for about the growth I expect. For both, cash collection is the reason to wait for proof.",
                },
                {
                    label: 'Full',
                    text: "**Ajax** and **Indo Farm** need a little more growth than I expect. On Screener's figures (P/E about 34), **ACE** needs about 20% a year against my 15%, so it is full too.",
                },
                {
                    label: 'Stretched',
                    text: "**VST** needs about 20% a year against my 12%.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Ather** and **Ola** lose money; **TIL** loses money after interest. ACE is not in the live table because the dashboard's market value for it is wrong; TIL is shown there as loss-making.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Action Const.Eq.', rank: 1, stance: 'PRICED', segment: CONSTRUCTION,
            what: "ACE: India's leading maker of pick-and-carry cranes, plus tower cranes, backhoe loaders, road machinery, forklifts, defence equipment and tractors.",
            view: "**The best-run business here, at a full price.** Returns of 32–42%, ₹1,352cr of net cash, 92% cash conversion and sales up 22% in Q1, with defence and exports growing. On Screener's price it needs a little more than my ~15% estimate.",
            watch: 'Full-year guidance at the end of Q2; defence orders; margin 15–16%.',
        },
        {
            company: 'Olectra Greentech', rank: 2, stance: 'SCALEUP', segment: EV,
            what: "Makes electric buses for state transport undertakings and polymer insulators for power lines.",
            view: "**A big order book, slow payers.** 358 buses in Q1 against 161 and about 8,000 on order, but margins are settling at about 12%, state buyers take about five months to pay and the BEST order is disputed. The price asks for about my ~25% estimate.",
            watch: 'Deliveries against 2,000–2,500; collections; the BEST dispute.',
        },
        {
            company: 'Zelio E-Mobility', rank: 3, stance: 'SCALEUP', segment: EV,
            what: "Makes cheap low-speed electric scooters for small-town India that need no licence or registration; SME-listed.",
            view: "**Fast, profitable growth without cash.** Sales up about 75%, returns of 38–52% and capacity going to 2.4 lakh, but it has not turned profit into cash in four of five years. The price asks for about my ~30% estimate.",
            watch: 'Operating cash; FY27 volume against 1.25 lakh; tax refunds.',
        },
        {
            company: 'Ajax Engineering', rank: 4, stance: 'COMPOUNDER', segment: CONSTRUCTION,
            what: "India's dominant maker of self-loading concrete mixers, plus batching plants, concrete pumps and boom pumps.",
            view: "**A superb niche in a down year.** 75.1% share, ₹1,119cr of net cash and 80% cash conversion, but its market fell 27% in Q1 and revenue has been flat for a year. The price needs a little more than my ~12% estimate.",
            watch: 'Mixer market recovery; share; new products.',
        },
        {
            company: 'Ather Energy', rank: 5, stance: 'SCALEUP', segment: EV,
            what: "India's premium electric-scooter maker, with its own software and charging network, a full factory in Hosur and a second being finished in Aurangabad.",
            view: "**Winning, and priced for it.** Revenue up 89% in Q1, about 17% of registrations and a first operating profit, but the market value is about 14 times sales and it is raising ₹2,500cr. No earnings to value it on yet.",
            watch: 'Operating margin; share against TVS and Bajaj; the second factory.',
        },
        {
            company: 'VST Tillers Tractors', rank: 6, stance: 'HARVEST', segment: FARM,
            what: "India's best-known maker of power tillers and weeders for small farms, plus small tractors in India and Europe and Zetor tractors through a tie-up.",
            view: "**Steady tillers, uncertain tractors.** Margins of 13–14% and ₹678cr of net cash, but no FY27 guidance and a slow tractor ramp-up. The price needs well over my ~12% estimate.",
            watch: 'Monsoon; tractor volumes; use of its cash.',
        },
        {
            company: 'Indo Farm', rank: 7, stance: 'TURNAROUND', segment: FARM,
            what: "Makes tractors and pick-and-carry cranes in Baddi, Himachal Pradesh, and is adding tower cranes and a new crane plant.",
            view: "**Low returns, heavy stock.** Returns of about 8% and a 300-day cash cycle, with its tower-crane plan slipping and its finance arm refinancing used tractors. The price needs more than my ~12% estimate.",
            watch: 'Dealer stock; the new crane plant; cash cycle.',
        },
        {
            company: 'TIL', rank: 8, stance: 'TURNAROUND', segment: CONSTRUCTION,
            what: "An old maker of cranes, reach stackers, forklifts and defence handling equipment, taken over by the Gainwell group in FY24.",
            view: "**A turnaround tied to its owner.** Still loss-making after interest, net debt about 60 times operating profit, and deals with Gainwell companies. Its dashboard P/E is wrong; it has no earnings to value.",
            watch: 'Profit after interest; related-party deals; defence orders.',
        },
        {
            company: 'Ola Electric', rank: 9, stance: 'AVOID', segment: EV,
            what: "Makes electric scooters, Roadster motorcycles, its own battery cells and home battery storage, selling through its own stores.",
            view: "**A shrinking business burning cash.** Revenue down 45–57% for five quarters, an operating loss, a missed Q1 guide and a share of registrations in single digits. It has burnt cash equal to about three-quarters of its revenue over five years.",
            watch: 'Monthly registrations; cell plant; cash.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Electric scooters and buses.** **Olectra Greentech: follow** until collections improve. **Zelio E-Mobility: follow** until cash follows profit. **Ather Energy: wait**: winning, but priced for it. **Ola Electric: avoid.**",
            "**Construction equipment.** **Action Const.Eq. (ACE): follow** for a better price, and check its price outside the dashboard. **Ajax Engineering: wait** for its market to recover. **TIL: pass.**",
            "**Farm machinery.** **VST Tillers Tractors: wait** for guidance and a better price. **Indo Farm: pass.**",
            "**What would change my view.** For the better: a price fall that brings ACE or Ajax to fair value; Olectra collecting faster; Ather's margins rising steadily. For the worse: TVS and Bajaj squeezing Ather's prices; a weak monsoon; more delays in public projects.",
            "**What to watch next quarter.** ACE's full-year guidance; Olectra's deliveries; Ajax's market; Ather's margin; Ola's registrations; Zelio's half-year cash flow.",
        ],
        bottomLine:
            "Follow the best-run names until the price or the cash fits (Action Const.Eq., Olectra Greentech, Zelio E-Mobility), wait on the good businesses priced high or in a down year (Ajax Engineering, Ather Energy, VST Tillers Tractors), pass on Indo Farm and TIL, and avoid Ola Electric.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/ACE/consolidated/' },
        { label: 'Electric two-wheeler sales cross 1 million in record seven months for 2026 — Business Standard', url: 'https://www.business-standard.com/amp/industry/auto/electric-two-wheeler-sales-cross-1-million-in-record-seven-months-for-2026-126073101298_1.html' },
        { label: 'Electric two-wheeler registrations rise 65% in August 2026 — Autocar Professional', url: 'https://www.autocarpro.in/news/electric-two-wheeler-registrations-rise-65-percent-in-august-fy27-volumes-cross-9-lakh-134389' },
        { label: 'Construction equipment sales dip 2% in FY26 despite 32% export surge (ICEMA) — Outlook Business', url: 'https://www.outlookbusiness.com/industry/construction-equipment-sales-dip-2-pc-in-fy26-despite-32-pc-export-surge-icema' },
        { label: 'Construction equipment industry raises FY27 growth forecast to 9–12% — Business Standard', url: 'https://www.business-standard.com/industry/news/construction-equipment-industry-raises-fy27-growth-forecast-to-9-12-126090101142_1.html' },
        { label: 'Wholesale price index, lithium-ion batteries and hot-rolled steel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
