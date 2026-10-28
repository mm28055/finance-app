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
        // TIL is flagged loss-making.
        inputs: vehiclesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Action Const.Eq.': 13,
            'Olectra Greentech': 20,
            'Zelio E-Mobility': 30,
            'Ajax Engineering': 12,
            'Ather Energy': null,
            'VST Tillers Tractors': 10,
            'Indo Farm': 12,
            'TIL': null,
            'Ola Electric': null,
        },
    },
    standfirst:
        "Nine makers of vehicles and machines, in four markets that run on different clocks. Four are electric: Ather and Ola make electric scooters, Zelio makes cheap low-speed scooters for small towns, and Olectra makes electric buses. Three make construction equipment: ACE (cranes), Ajax (self-loading concrete mixers) and TIL (cranes and defence handling equipment). Two make farm machinery: VST (power tillers and small tractors) and Indo Farm (tractors and cranes). This note draws on each company's last two earnings calls, its latest presentation, annual report and credit rating, and on sector work by Crisil, ICRA and ICEMA. The short version: **the best businesses here are niche leaders in machinery, not the electric names**, and the annual reports turned up more warning signs than the calls did. In the live valuation, TIL is shown as loss-making.",
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
                'Ather Energy': 'Ather reported a 0.8% EBITDA margin for Q1 FY27 on its own definition (₹9cr); Screener’s standalone figure still shows a small operating loss.',
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
            { company: 'Ather Energy', trend: 'widening', trendNote: 'About 16% of electric-scooter registrations in August; operating margin just above zero by the company’s count.',
                grades: { share: { grade: 'B', note: 'Third in electric scooters behind TVS and Bajaj' }, product: { grade: 'A', note: 'Own software, charging network, design' }, dealers: { grade: 'B', note: 'Expanding beyond southern cities' }, pass: { grade: 'B', note: 'Raised prices; average ₹1.61 lakh' }, cash: { grade: 'C', note: 'Still burning cash; raising ₹2,500cr' } } },
            { company: 'VST Tillers Tractors', trend: 'stable', trendNote: 'Tillers up 18% in Q1, but no FY27 guidance and the Zetor tractor ramp-up is slow.',
                grades: { share: { grade: 'A', note: 'Best-known power-tiller brand' }, product: { grade: 'C', note: 'Tractors bought-in or licensed' }, dealers: { grade: 'B', note: 'Adding 500 counters' }, pass: { grade: 'B', note: 'Margins steady at 13–14%' }, cash: { grade: 'B', note: '₹678cr net cash, poorly invested say shareholders' } } },
            { company: 'Indo Farm', trend: 'stable', trendNote: 'Tractors up 36% in Q1, cranes flat; tower-crane plans slipped.',
                grades: { share: { grade: 'C', note: 'Small tractor and crane maker' }, product: { grade: 'C', note: 'Standard tractors and cranes' }, dealers: { grade: 'C', note: 'Own finance arm funds about 20% of tractors' }, pass: { grade: 'B', note: 'Margins steady at 12–14%' }, cash: { grade: 'D', note: 'About 300-day cash cycle; returns 8%' } } },
            { company: 'TIL', trend: 'stable', trendNote: 'Order book ₹211cr; losses continue; merging businesses with its new owner, Gainwell.',
                grades: { share: { grade: 'B', note: 'About half of rough-terrain cranes; 38–40% of reach stackers' }, product: { grade: 'B', note: 'Defence handling equipment' }, dealers: { grade: 'C', note: 'Project sales' }, pass: { grade: 'D', note: 'Margins near zero' }, cash: { grade: 'D', note: 'Net debt ₹365cr against ₹6cr operating profit' } } },
            { company: 'Ola Electric', trend: 'narrowing', trendNote: 'Revenue down 43–57% for five quarters; missed its Q1 revenue guidance.',
                grades: { share: { grade: 'C', note: 'Single-digit share, down from market leader' }, product: { grade: 'B', note: 'Own cells and motors' }, dealers: { grade: 'C', note: 'Own stores; service complaints' }, pass: { grade: 'D', note: 'Gross margin 30.5%, operating loss' }, cash: { grade: 'D', note: 'Burnt about 73% of revenue over five years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No company here is a clear buy today; follow ACE and wait on Zelio.** ACE (Action Construction Equipment) is India's leading crane maker: it claims more than 63% of mobile cranes, has earned 32–42% on its capital over the last three years, holds ₹1,352cr of net cash and turned 92% of five years' operating profit into cash. In Q1 FY27 it pushed through about 10% of price rises and still sold 17% more cranes and machines, the clearest sign of pricing power in this group. At a P/E of about {pe:Action Const.Eq.|33} it needs about {need:Action Const.Eq.|19}% a year against my 13%, so its price is {label:Action Const.Eq.|full}, and management has twice put off giving FY27 guidance while steel is up about 20%.",
                "**Wait on Zelio, Ajax, Olectra, Ather and VST.** **Zelio** has not turned its profit into cash: operating cash was −₹17cr against ₹54cr of profit over FY22–FY26, and −₹7cr against ₹28cr in FY26. Its cheap small-town scooters grew 82% in FY26 and beat its own guidance, but it is raising ₹168cr eleven months after its IPO, is asking to deal with five related parties (up to ₹50cr each, one a promoter-group firm that was once a large customer), and its whole market rests on a rule that lets slow scooters run without a licence. **Wait on Zelio; it returns to follow when its half-year results show positive operating cash and profit starts arriving as cash.** **Olectra**'s revenue rose 66% to ₹575.5cr in Q1 (the company's figure; the dashboard stores ₹525.5cr), but profit before tax rose 3%, deliveries have sat near 350 buses a quarter for a year, its margin fell to 12.7%, and its claim to be number one in registrations is not what Vahan data shows: it was fourth. Nearly all its buses go to its promoter MEIL's Evey companies, one of which has told BEST it will not supply 1,414 buses, and the order book fell from about 10,000 buses to 8,000 in one quarter. I expect about 20% a year from it; the price needs about {need:Olectra Greentech|26}%, so wait for 500 deliveries a quarter and answers on BEST and the related-party approvals. **Ajax** sells three in every four self-loading mixers (75.1% in Q1) and holds ₹1,119cr of cash, but its revenue has been flat at about ₹2,100cr for two years, it withdrew FY27 guidance and trimmed its long-term margin band to 12–15%; a quarter of Q1 pre-tax profit was interest on its cash, and two CFOs and three directors left in nine months. The price needs about {need:Ajax Engineering|17}% a year against my ~12%. **Ather** is the one new-age scooter maker that now earns money at the operating level (₹9cr of EBITDA in Q1, about 0.8% of revenue by the company’s count), with 1.5 lakh paid pre-orders; but its only factory is full, its share slipped to about 16% in August as TVS and Bajaj filled the gap, and the ₹5,000-a-scooter subsidy ended on 31 July. Its gross margin fell from 25.4% to 22.4% as commodity costs rose, it is raising ₹2,500cr of new equity (₹1,000cr of it warrants for Hero MotoCorp and the founders), and at about 14 times sales the price assumes the second factory works. **VST**'s tillers had a record FY26, but tiller sales fell about 13% in July–August, and most of the stretch promises it made in May were dropped or delayed by August. Part of its profit is treasury income on ₹678cr of cash it has no plan for, and the price needs about {need:VST Tillers Tractors|20}% a year against my ~10%.",
                "**Pass on Indo Farm and TIL; avoid Ola.** **Indo Farm** earns about 8% on its capital, runs a 240-day operating cycle, guarantees its own finance company's bank loans (and says more guarantees are contemplated), and its new crane plant has slipped four times. **TIL** lost ₹5.45cr in Q1, its auditor qualified the FY26 accounts over ₹107cr of tax assets (about 96% of its net worth), it bought Tulip from its own promoter group for ₹119cr, and it carries ₹365cr of net debt against ₹6cr of FY26 operating profit while its order book shrank from about ₹340cr to ₹211cr. **Ola**'s FY26 accounts carry a going-concern flag from its auditor and covenant breaches; its revenue has been 43–57% below the year before for five straight quarters, and it ran at about 13,000 scooters a month against a stated break-even of 20,000–25,000. After a ₹780cr share placement in Q1, its board approved a rights issue of up to ₹1,000cr on 28 September.",
                "**Three things to hold onto before reading the rest.** First, **a growing market does not mean a growing company**: electric two-wheeler registrations rose 73% in April–July, yet Ola's fell 26% in April–August and Olectra's share of electric-bus registrations fell to 9.5%. Second, **equipment demand follows public construction**: domestic construction-equipment sales fell 6.7% in FY26 on project delays and costlier machines, and ICEMA now expects 9–12% growth in FY27. Third, **read the annual reports, not just the calls**: the going-concern flag at Ola, the qualified audit at TIL, the guarantees at Indo Farm and the related-party approvals at Olectra and Zelio were not discussed on the calls.",
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
                "Four separate markets sit under one label, and each runs on its own clock. **Electric two-wheelers** are growing fast on a fuel shock and have just lost their subsidy. **Electric buses** arrive in lumps as state tenders are awarded. **Tractors** are at the top of their cycle after a record year. **Construction equipment** is climbing out of a dip caused by new emission rules. Reading them as one “vehicles” cycle is the first mistake to avoid.",
                "The forecasters' views for FY27 differ by market. Crisil expected electric two-wheeler volume to grow 16–18% (written in February, before the fuel shock, and already overtaken by a 73% rise in April–July). For tractors, ICRA expects 1–4% and Crisil 0–2%, after a record FY26. For construction equipment, ICEMA, the industry body, forecast about 7% domestic growth in May and raised it to 9–12% in September, citing faster project work in several states. Vahan, used below, is the government's vehicle-registration database.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel, battery cells, motors, engines, hydraulics and electronics → **vehicle and machine makers** (these nine) → dealers or state-appointed bus operators → households, farmers, contractors, crane-hire firms, state transport undertakings and the armed forces. In an electric scooter the battery is 35–40% of the cost (Crisil), and the cells and the rare-earth magnets in the motors are almost all imported; in cranes and mixers the main input is steel. **The profit sits with makers who lead a niche and control their dealers.** ACE's crane segment earned 18.2% on its sales in Q1 while, by ACE's account, its rivals run at 8–9%, and Ajax charges 5–6% more than other mixer makers and still gains share. Where the buyer is a state body choosing the lowest bid (electric buses, heavy cranes), the profit is thin and depends on getting paid. Crisil estimates that the new electric-scooter makers still lose ₹25,000–35,000 of operating profit on each scooter, funded by investors, while for TVS and Bajaj electric scooters are only 5–6% of volume.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Electric two-wheelers**: 14.0 lakh were registered in FY26, up 21.8%, about 9% of all two-wheelers; April–July FY27 then jumped 73% as petrol prices were raised several times in May during the West Asia conflict and buyers rushed ahead of the subsidy's end. The long-term driver is running cost, about ₹0.3 a kilometre against ₹2.0–2.5 for petrol (Crisil). **Electric buses**: 5,412 were sold in FY26 (ICRA), about 7% of medium and heavy buses; ICRA expects about 30% by FY30, and government schemes together aim at more than 80,000 electric buses. **Tractors**: a record 11.6 lakh in FY26, up 23.5%, lifted by a GST cut from 12% to 5%, a monsoon at 108% of normal and buying ahead of emission rules. **Construction equipment**: 1.37 lakh machines in FY26, down 2% (domestic sales down 6.7%), after new emission rules raised prices 12–15% and highway building fell to a seven-year low. The government has budgeted ₹12.2 lakh crore of capital spending for FY27, which is what the equipment makers are waiting on.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Policy gives, and policy takes away.** The central e-scooter subsidy (₹2,500 per kWh, capped at ₹5,000 a scooter) ended on 31 July 2026, and registrations fell to 1.47 lakh in the first 26 days of August, a slower daily pace than July's record 2.04 lakh. The GST cut on petrol two-wheelers from 28% to 18% in September 2025 narrowed their tax gap with electric models, which stay at 5%. **Rare-earth magnets are the supply risk nobody can hedge**: China has required export licences since April 2025, India imports all the sintered magnets used in electric motors, and Crisil blamed the shortage for cutting FY26 electric two-wheeler growth; a ₹7,280cr scheme to make magnets in India will take years. For machines, emission rules move demand: CEV Stage V raised construction-equipment prices 12–15% in 2025, and tractors of 25–50 HP move to an interim standard in April 2028, which I expect to pull some buying into FY28. The government's trade investigators recommended 24–52% anti-dumping duties on Chinese crawler and truck cranes in September 2025, but the Finance Ministry had not notified them by August 2026.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**ACE** on factory and infrastructure building, defence orders and whether its ~10% price rises stick while steel is up about 20%. **Olectra** on converting an old order book into deliveries, on state operators and its promoter's bus companies paying, and on its own bus platform launching in Q4 FY27. **Zelio** on the rule that lets scooters below 25 km/h run without a licence or registration, and on turning profit into cash. **Ajax** on state governments paying their road contractors. **Ather** on its second factory arriving before TVS and Bajaj take the demand it cannot supply. **VST** on the monsoon and a tractor business that has never taken share. **Indo Farm** on a crane plant that has slipped four times. **TIL** on defence orders and on profits large enough to justify its tax assets. **Ola** on dealers reviving its sales before its cash runs down. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools: who earns what (sector research and Q1 FY27 filings)',
                    columns: ['Pool', 'Who earns in it', 'Margin evidence', 'Companies here'],
                    rows: [
                        ['Electric two-wheelers (registered)', 'TVS and Bajaj, for whom electric is only 5–6% of volume; Ather just turning positive', 'New makers lose ₹25,000–35,000 of operating profit a scooter (Crisil); Ather **+0.8%** (company’s count), Ola **−42.9%** in Q1', 'Ather, Ola'],
                        ['Low-speed e-scooters', 'Small, profitable assemblers', 'Zelio **12.2%** in FY26', 'Zelio'],
                        ['Electric buses', 'Tender winners that can carry working capital', 'Olectra **12.7%** in Q1; about 12% guided', 'Olectra'],
                        ['Tractors and tillers', 'The top five tractor makers (over 90% of volume)', 'About 13–13.5% (Crisil); VST **12.9%**, Indo Farm **12.5%**', 'VST, Indo Farm'],
                        ['Pick-and-carry cranes', 'The category leader', 'ACE crane segment **18.2%** in Q1; rivals 8–9% (ACE)', 'ACE, Indo Farm'],
                        ['Self-loading mixers', 'The category leader', 'Ajax **12.5%** in Q1 (15.0% in Q4)', 'Ajax'],
                        ['Heavy cranes and material handling', 'Chinese importers (about 95% of crawler and truck cranes)', 'TIL **6.2%** in Q1 (consolidated)', 'TIL'],
                    ],
                },
                {
                    caption: 'The four markets in numbers (sector research; forecaster named)',
                    columns: ['Market', 'FY26 size', 'FY26 growth', 'FY27 outlook (forecaster)', 'Leaders, and the share of companies here', 'Policy that matters'],
                    rows: [
                        ['Electric two-wheelers (registered)', '14.0 lakh; about 9% of two-wheelers', '+21.8%', '+16–18% (Crisil, Feb 2026); April–July actual +73%', 'TVS 27.5%, Bajaj 22.8%, **Ather 16.0%**, Hero 9.8%, **Ola 7.1%** (Aug 2026)', 'Subsidy ended 31 July 2026; GST 5% electric v 18% petrol; Delhi stops new petrol two-wheeler registrations from April 2028'],
                        ['Low-speed e-scooters', '8–10 lakh (Zelio’s estimate; no independent data)', '20–25% (Zelio’s estimate)', 'No forecaster', 'Fragmented; Zelio sold 70,000+', 'No licence or registration below 25 km/h and 250 W'],
                        ['Electric buses', '5,412 (ICRA); about 7% of buses', 'Not firmly established', 'About 30% of buses by FY30 (ICRA, Aug 2026)', 'Switch 28.2%, JBM 21.6%, PMI 19.5%, **Olectra 9.5%** (Jan–Jun 2026)', 'PM E-DRIVE funds 14,028 buses; support to March 2028; a payment-security fund for state operators'],
                        ['Tractors', '11.6 lakh (record)', '+23.5%', '+1–4% (ICRA); +0–2% (Crisil)', 'Mahindra group 43.6%; **VST and Indo Farm under 1% each**', 'GST cut 12% to 5%; interim emission rule April 2028, full TREM V 2032'],
                        ['Power tillers', 'Not published', '—', 'No forecaster', '**VST about 70%** (ICRA)', 'Draft emission rules cover tillers, no date yet'],
                        ['Construction equipment', '1.37 lakh (1.13 lakh domestic)', '−2% (domestic −6.7%)', 'Domestic +9–12% (ICEMA, Sep 2026); exports +20%', '**Ajax 75.1%** of mixers; **ACE 63%+** of mobile cranes (company)', 'CEV Stage V raised prices 12–15%; crane anti-dumping duty not notified'],
                    ],
                    note: 'Penetration figures vary by source and basis (Crisil uses wholesale data, Vahan counts registrations). Low-speed scooters are not registered, so no independent volume exists.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
                "The test I use is simple: **can the company raise prices, or hold share, when its market is weak?** ACE and Ajax pass it; Ather passes it for now; the others mostly do not.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: owning a niche',
                    text: "**Ajax** sells about three in every four self-loading mixers in India: 75.1% of registrations in Q1 FY27, up from about 69% a year earlier, while the market fell 27%. It charges 5–6% more than rivals and was the only maker to raise prices in Q4 FY26. Its machines hold the best resale value, owners trade in every 7–8 years within the Ajax fleet, and some 35,000 machines in the field feed a spares business that has grown 20% a year to ₹152cr. **ACE** claims more than 63% of mobile cranes and about 60% of tower cranes (ICRA puts it at 60–65%), and Chinese makers do not build its core pick-and-carry design. The proof is pricing: ACE raised prices about 10% in six months and still sold 17% more machines in Q1. **Neither moat protects against a weak market**, as Ajax's flat revenue shows, but both protect the margin when the market turns.",
                },
                {
                    label: 'Lasting if it keeps winning: brand and software',
                    text: "**Ather** is the only new electric-scooter maker whose moat shows in the numbers. 94% of Q1 buyers paid for its AtherStack Pro software pack, its fast-charging connector has become an Indian standard, and its share of registrations rose from 11.7% in FY25 to 17.1% in FY26. It lifted its average price from ₹1.5 lakh to ₹1.61 lakh in a quarter while paid pre-orders rose 158% and dealer stock fell from 14 days to 3. **Some of that pricing power is scarcity**: its only factory is full, management estimates 13,000–15,000 lost sales a month, and its share slipped to about 16% in August as TVS and Bajaj, with far bigger dealer networks, took the demand it could not meet. The moat is real, but it will be tested when supply catches up.",
                },
                {
                    label: 'Narrow but real: approvals and reach',
                    text: "**TIL** has 30 years as a qualified supplier of missile-handling equipment; its chairman says not even a nut and bolt can change without the armed forces' approval, which keeps rivals out but also slows TIL's own cost cuts. **VST** has about 70% of Indian power tillers (ICRA), more than 1,000 dealers and 6,200 retailers reaching small farmers, and weeder sales growing 50–60% a year. **Olectra**'s insulator arm says it leads Indian polymer insulators with over 30% share, at gross margins of about 40–45%. Each of these is a genuine advantage, but each covers only part of the company, and none has lifted the whole company's returns.",
                },
                {
                    label: 'Contract-bound: electric buses',
                    text: "**Olectra** was first to scale electric buses and has delivered 4,000 of them, but its moat is thinner than its claims. On the Q1 call management said it is “still number one” in registrations; Vahan data put it fourth in FY26 (853 of 5,412, about 16%) and fourth in January–June 2026 with 9.5%, behind Switch, JBM and PMI. It wins tenders as the lowest bidder, its contracts fix the price for about two years, its technology comes from BYD of China, and nearly all its buses are sold to Evey Trans companies owned by its promoter, MEIL, which operate them for state bodies. **That is a captive customer, not pricing power.**",
                },
                {
                    label: 'Wearing away or absent',
                    text: "**Ola** had about 35% of electric-scooter registrations in 2024 and about 7% in August 2026. On 20 May it said it did not plan to use dealers; on 6 August it announced a dealer network, an admission that selling only through its own stores failed on service. **Indo Farm** absorbed the cost of new crane engines for about three quarters before raising prices, while ACE raised its own by about 10%; on management's own market estimate it sells about 7–8% of pick-and-carry cranes. **Zelio**'s scooters are simple to assemble from bought-in parts (Chinese suppliers were 73.7% of purchases in H1 FY25), and its whole segment rests on a rule exempting slow scooters from licences and registration.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**TVS**, **Bajaj** and **Hero** (Vida) in electric scooters, together holding well over half the market; **Switch** (Ashok Leyland), **JBM**, **PMI** (with Foton of China) and **Tata Motors** in electric buses; **Escorts Kubota**, **JCB** and Chinese heavy-crane makers in construction equipment; **Schwing Stetter** in mixers; **Mahindra**, **TAFE** and **Sonalika** in tractors.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the two niche leaders, yes. For the tractor, tiller and bus makers, they follow costs and contracts. For the electric-scooter makers and TIL, they are not yet established, and several recent figures were helped by one-offs.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: niche leaders',
                    text: "**ACE**'s management puts its underlying operating margin at “a little over 15%” for FY26 (the slides show 18.1% including other income), and its crane segment earned 18.2% in Q1; rivals, it says, run at 8–9%. It targets 15–16% and says plainly it is “not looking at margin expansion”: the ~10% of price rises covers most of 11–12% cost inflation, but gross margin still fell about 1.4 points in Q1. **Ajax**'s margin was above 20% until FY2019 and 15–16% in FY24–25, then 12.6% in FY26 after costlier emission-norm engines. Q1 was 12.5%, Q2 is guided below 12%, and the long-term band was trimmed from 13–15% to 12–15%. Both margins are structural in the sense that rivals earn less, **but Ajax's needs volume to come back**.",
                },
                {
                    label: 'Cyclical: tractors, tillers and buses',
                    text: "**VST** (12.85% in Q1, from 13.3%) and **Indo Farm** (12.5% standalone) sit close to the 13–13.5% Crisil expects for the big tractor makers this year; being small has not made them more profitable, only more exposed to steel and freight. VST's profit after tax (₹48.7cr) was larger than its operating profit (₹40.3cr), because treasury income and gains on investments are a big part of its earnings. **Olectra**'s margin fell from 15.2% in Q4 to 12.7% in Q1 on the company's revenue of ₹575.5cr (the dashboard stores ₹525.5cr, which would overstate the margin). Its bus segment earned only 8.2% before interest, and the insulator margin fell from about 38% to about 22% as some materials rose 40–70%. Bus prices are fixed at tender, so cost spikes land on Olectra, and management now says about 12% is where margins will settle.",
                },
                {
                    label: 'Not structural: scarcity, one-offs and write-backs',
                    text: "**Ather**'s first positive EBITDA (₹9cr, about 0.8% of revenue by the company’s count) came in a quarter of supply shortage and price rises; its gross margin fell from 25.4% to 22.4% as its commodity basket rose 46% over five quarters, and the ₹5,000-a-scooter subsidy has since ended. **Ola**'s gross margin fell from 38.5% to 30.5%, and its ₹195cr adjusted operating loss was helped by a one-off ₹55cr reversal of penalties and a looser depreciation policy. Management put break-even at 20,000–25,000 scooters a month; Q1 ran at about 13,000, so the claim has not yet been tested. **TIL**'s May 2025 promise that an 11.73% margin “should sustain” leaned on about ₹23cr of one-off write-backs; FY26 came in at 2–6% depending on the definition, and Q1's standalone margin was 4.3%. **None of these three margins is a base to value from.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Indo Farm** runs a 240-day operating cycle (Infomerics, its rating agency), with 173 days of inventory. Part of its working capital now sits in its finance arm, Barota, which lends to tractor buyers (including for used tractors that dealers take in trade) and whose bank loans Indo Farm guarantees: ₹125cr in March, being cut to ₹75cr. **TIL** ended FY26 with about 239 days of receivables and 325 days of inventory after a large Air Force delivery in the last ten days of March. Its operating cash was −₹131cr in FY25 and −₹88cr in FY26, and Infomerics says its FY26 debt service was met mostly from ₹60cr of promoter equity. **Both need new money, not profit, to grow.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Zelio**'s working-capital days rose from 43 to 78 in FY26, and ₹42.6cr is tied up in supplier advances (₹22.5cr, paid to win lower prices) and GST and customs refunds (₹19cr). That is how a ₹28cr profit became about −₹7cr of operating cash. **Olectra**'s buyers pay about 60% on delivery and the rest in 120–180 days, and letter-of-credit charges helped nearly double its Q1 finance cost to ₹23.6cr; management expects those charges to fall by Q1 FY28. Profit before tax rose only 3% on 66% more revenue.",
                },
                {
                    label: 'Working capital: improving, with caveats',
                    text: "**Ajax**'s net working capital fell to 21 days in FY26 from 93 in FY22, but its FY26 operating cash (₹377cr, 142% of operating profit) was flattered by selling off stock built to the old emission norm; management calls about 30 days normal. **ACE** reports zero working-capital days for FY25 and FY26, because it owes suppliers about 102 days of sales, more than it holds in stock (about 67 days) and receivables (about 32). **VST** cut receivables from about 75 to 51 days, but balances overdue for more than three years rose to ₹51.7cr gross.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**Ather** runs at −53 working-capital days: dealers pay up front and suppliers wait. That is why its FY26 operating cash was +₹32cr despite a ₹517cr net loss (payables rose ₹268cr and customer advances climbed to ₹126cr). Ola's cycle is negative for the same reason. **That cash is borrowed from suppliers, not earned**, and it reverses if volumes fall.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Action Const.Eq.', 'Capex ₹200–250cr in FY27 (land ₹130–140cr, Plant 9 ₹40–50cr, automation ₹50–60cr); ₹400cr+ tower-crane plant deferred; acquisitions sought', 'Net cash ₹1,352cr; FY26 dividend only about ₹24cr'],
                        ['Olectra Greentech', 'Capex about ₹600cr over ~18 months (₹450cr for its own bus and truck platforms); Q1 finance cost ₹23.6cr, up 97%', 'Net debt ₹208cr at March; India Ratings upgraded it to A in May'],
                        ['Ajax Engineering', 'Cash ₹1,119cr at June; no dividend; an acquisition “aggressively” sought', 'Net cash ₹1,119cr, no borrowings'],
                        ['Ather Energy', '₹1,300cr share placement done at ₹1,202; ₹1,200cr preferential issue, ₹1,000cr of it warrants for Hero MotoCorp and the founders (25% paid up front)', 'Net cash ₹711cr at March, before the raise'],
                        ['Ola Electric', '₹780cr share placement in Q1; cell plant to 6 GWh on debt; FY27 cash burn of ₹300–500cr guided in May, not updated', 'Net debt ₹1,221cr at March (company: about ₹950cr); ₹409cr of loans reclassified as current after covenant breaches'],
                        ['VST Tillers Tractors', 'No Q1 cash figure; cash to be deployed in 18–24 months', 'Net cash ₹678cr; investments ₹634cr, mostly mutual funds'],
                        ['Indo Farm', 'About ₹45cr of IPO money unspent; crane plant from end-November', 'Net debt ₹74cr; guarantee for its finance arm ₹75cr'],
                        ['TIL', 'Up to ₹50cr more for Tulip (stake from 60% to 74%); ₹199.5cr rights issue, partly paid', 'Net debt ₹365cr; debt about 3.3 times net worth'],
                        ['Zelio E-Mobility', 'Reports half-yearly; ₹168cr preferential issue approved on 23 September', 'Net cash ₹7cr at March'],
                    ],
                    note: 'Net cash and net debt are Screener’s March 2026 figures. Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 call in May, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: electric scooters',
                    text: "**Ather**'s Aurangabad plant adds 5 lakh scooters a year (42,000 a month) to Hosur's 4.2 lakh, with trial output from the festive season and full speed that may spill into early FY28. Its new EL platform launched on 29 August as the Konarc, from ₹99,999, aimed at the ₹1–1.25 lakh segment that management puts at 45–50% of the market, where Ather had no product. **Zelio** targets more than 1.25 lakh units in FY27 (from 70,000+) and talks of 75–80% revenue growth a year, with capacity of 2.4 lakh. **Ola** is betting on franchised dealers from September. The market's growth is not in doubt; **who captures it is**.",
                },
                {
                    label: 'Growth driver: electric buses',
                    text: "ICRA expects electric buses to go from about 7% of bus sales to about 30% by FY30, and the PM E-DRIVE scheme funds 14,028 buses in seven cities. **Olectra** says its order book is about 8,000 buses (about 4,000 for Maharashtra's MSRTC and orders for Mumbai's BEST), plus 1,085 won in a Telangana tender. But the order book fell from about 10,000 in May with no explanation beyond deliveries, and management says it will not deliver old orders whose terms have drifted. It guides “2,000-plus to 2,500” buses this year against 358 in Q1.",
                },
                {
                    label: 'Growth driver: infrastructure and defence',
                    text: "**ACE** now expects defence sales 10–15% above ₹200cr this year, a KATO joint venture for heavy cranes earning from Q3 FY27 (meaningful only from FY28), and a Plant 9 for defence and special machines with about ₹500cr of sales capacity. Its FY29–30 target of ₹6,000–6,200cr of revenue implies about 20% a year from FY26's ₹3,390cr and probably needs an acquisition. **Ajax** has raised its export ambition to 30% a year for three years. **TIL** guides FY27 turnover up 27–28% on a standalone order book of ₹211cr that has shrunk from about ₹340cr in January.",
                },
                {
                    label: 'Growth driver: farms',
                    text: "The tractor market is at the top of its cycle, so growth here has to come from share and new products. **VST** targets ₹3,000cr of revenue by FY30, about 25% a year from ₹1,240cr, and is launching a machine between a tiller and a tractor from August. **Indo Farm** guides revenue up 20–25% this year, with tractors up 36% in Q1, and is building a plant for 3,600 pick-and-carry cranes and about 240–250 tower cranes a year. On management's own estimate, that plant alone would equal 25–30% of India's annual crane sales.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**ACE** said in May that Q1 might grow 15–20%; total income rose 19.5% and PAT 22%. **Ather** launched its EL scooter early and turned EBITDA positive a quarter before most expected. **Zelio** guided FY26 revenue of ₹260–280cr in November and delivered ₹310.7cr, with 70,000+ scooters against 60,000. **Indo Farm**'s tractors grew 36% against a 25–30% guide.",
                },
                {
                    label: 'Cautious',
                    text: "**ACE** has deferred full-year guidance twice (to mid-to-end September; not seen by 23 September) and pushed the decision on its ₹400cr tower-crane plant from April to September, possibly six months more. **Ajax** withdrew FY27 guidance (“too early… to make a call”) and cut its margin band. **VST** said it was “a little too early to comment” on FY27.",
                },
                {
                    label: 'Missed',
                    text: "**Ola** guided Q1 revenue of ₹500–550cr and reported ₹455cr; it promised 17,000–18,000 scooters a month by June–July and ran at about 13,000; own cells in every model by September and 6 GWh by June both slipped. **TIL** promised an 11.73% margin for FY26 and delivered 2–6%, with revenue up 2.5%; its CarryKing crane is about 1.5 years late. **Indo Farm** grew 15% against 20–25%, moved its crane plant to end-November (its fourth delay) and cut its tower-crane plan from 60–80 units to a first lot of 10. **Olectra** gave a 2,500-bus plan a “100%” probability in May and delivered 358 in Q1, flat on Q4.",
                },
                {
                    label: 'Mixed',
                    text: "**VST**'s tillers grew 18% in Q1, then fell about 13% in July–August; its US plans have “taken a back seat”, its Netherlands base slipped a quarter and its 1,000-unit Zetor target was not repeated. **Ajax**'s small Udaan mixer is on track and exports are growing, but core mixer volume, excluding Udaan, fell about 11%.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Zelio to compound earnings at about 30%, Olectra at about 20%, ACE at about 13% (cut from 15% on 24 Oct: management holds the margin at 15–16% and says acquisitions and exports are its biggest growth drivers, so without a purchase its own plan supports about 12–14%), Ajax and Indo Farm at about 12%, and VST at about 10%.** Zelio's estimate carries the most risk, because it depends on cash following profit. Olectra's 20% already allows for a margin near 12% and slow deliveries; it rises only if deliveries reach 600–700 a quarter. VST's 10% reflects a tractor cycle at its peak and a tiller slowdown since July. ACE's is the safest; it would prove low if the ₹6,000–6,200cr revenue target is met by FY29, which probably needs an acquisition, so that sits in the high case. Ather, Ola and TIL do not yet make enough profit to estimate from; Ather is closest, and its test is whether EBITDA stays positive once its second factory's costs arrive from Q4 FY27.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Zelio E-Mobility', 'Capacity to 2.4 lakh; dealers; cash must follow', '15% / **30%** / 40%'],
                        ['Olectra Greentech', 'Deliveries to 600–700 a quarter; own platform; insulators', '10% / **20%** / 28%'],
                        ['Action Const.Eq.', 'Infrastructure; defence; KATO; exports; margin held at 15–16%; new plants add depreciation; acquisitions only in the high case', '7% / **13%** / 20%'],
                        ['Ajax Engineering', 'Mixer market recovery; exports; other equipment', '5% / **12%** / 18%'],
                        ['VST Tillers Tractors', 'Tillers and weeders; tractors; monsoon', '4% / **10%** / 15%'],
                        ['Indo Farm', 'New crane plant; tractors; finance arm', '0% / **12%** / 20%'],
                        ['Ather Energy', 'Second factory; EL platform; software', 'Just at breakeven; too early to estimate'],
                        ['TIL', 'Defence; Tulip; aftermarket', 'Loss-making; too early to estimate'],
                        ['Ola Electric', 'Dealers; own cells; energy storage', 'Loss-making; too early to estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (promises on the Q4 call in May against Q1 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'What was promised', 'Capex', 'Track record'],
                    rows: [
                        ['Action Const.Eq.', 'Q1 growth 15–20%; margin 15–16%; defence ₹200–220cr; exports 6–7%; full-year guide by mid-Q2', '₹200–250cr in FY27; tower-crane plant deferred', '**Met**: Q1 +19.5%, defence raised; exports only 3%; full-year guide still pending'],
                        ['Olectra Greentech', '2,500 buses (“probability is 100%”); margin 12–15%; new bus in Q3', 'About ₹600cr over 18 months (raised from ₹400cr)', '**Slipping**: 358 buses; margin 12.7%, now “around 12%”; new bus moved to Q4'],
                        ['Zelio E-Mobility', 'Half-yearly: in November, FY26 revenue ₹260–280cr, 60,000+ units, 1,000 three-wheelers', 'Capacity to 2.4 lakh; ₹168cr raise', '**Beat**: ₹310.7cr and 70,000+ units; three-wheelers about 800'],
                        ['Ajax Engineering', '“Early double-digit” volume growth; margin 13–15%; exports +20–25%', 'Under ₹30cr a year; new plant in H1 FY27', '**Missed**: volume −1%; guidance withdrawn; band cut to 12–15%; exports raised'],
                        ['Ather Energy', 'EL by the festive season; second factory at full speed by March 2027', '₹2,500cr raise; second factory', '**Beat**: EL launched 29 August; EBITDA positive; full speed may slip into FY28'],
                        ['VST Tillers Tractors', '“We want to grow 25%”; margin 12–14%; 1,000 Zetor tractors; US launch', 'About ₹100cr technology centre, phased', '**Walked back**: Q1 +11%, then tillers −13%; US shelved; Zetor target dropped'],
                        ['Indo Farm', 'Revenue +20–25%; crane plant in Q2; 60–80 tower cranes in six months', '₹71cr crane plant; ₹45cr unspent', '**Missed**: +15%; plant to end-November; tower cranes cut to 10'],
                        ['TIL', 'May 2025 call (no Q4 FY26 call found): FY26 margin 11.73% “should sustain”; ₹150cr QIP', '₹5–10cr; up to ₹50cr into Tulip', '**Missed**: margin 2–6%; revenue +2.5%; rights issue instead of QIP'],
                        ['Ola Electric', 'Q1 revenue ₹500–550cr; 17,000–18,000 a month by June–July; own cells in all models by September; no dealers', '6 GWh cell plant, debt-funded', '**Missed**: ₹455cr; about 13,000 a month; cells late; dealers announced'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered. The governance findings come from the annual reports and rating rationales, not the calls, and they are the part investors most often miss.",
            ],
            points: [
                {
                    label: 'The subsidy cliff and the scooter price war',
                    text: "The ₹5,000-a-scooter subsidy ended on 31 July, and August's daily pace fell well below July's, which had been swollen by buyers beating the deadline. **Ather** said 15–20% of its Q1 scooters were already sold without subsidy, but it must now either raise prices again or absorb the loss, just as TVS and Bajaj (together about half the market) are adding models and dealers. **Ola** is switching to dealers, which means sharing margin, in a market where its volumes fell 26% in April–August while the market grew 70%. **Zelio** is unaffected by the subsidy but exposed to any rule change for slow scooters; management did not discuss that risk on either call.",
                },
                {
                    label: 'Supply: magnets, cells and imported parts',
                    text: "India imports all the sintered rare-earth magnets used in electric motors, China licenses their export, and industry body SIAM has asked to push a motor-localisation deadline from September 2026 to April 2027. **Ather**, **Ola**, **Olectra** and **Zelio** all depend on imported cells or magnets; Olectra also depends on BYD of China for its bus technology. **Ola**'s own cell plant ran at yields of about 80% against the 90%+ it needs. On the machinery side, **TIL** relies on European engines and hydraulics, and **ACE** reported engine and casting shortages in June–July.",
                },
                {
                    label: 'Government buyers and the promoter’s own companies',
                    text: "**Olectra** sells nearly all its buses to Evey Trans companies owned by its promoter, MEIL, which run them for state operators, so its cash depends on Evey's bank loans, state payments and subsidy releases. In June, Evey told BEST it would not supply the remaining 1,414 of a 2,100-bus order because the subsidy had come for only 10 buses; management called the order “neither cancelled nor accepted”. The AGM on 26 September seeks approval for Evey contracts, undertakings of up to ₹1,600cr for project companies and up to ₹150cr of guarantees or loans from MEIL. **TIL** and **ACE** also depend partly on defence orders, which come in lumps.",
                },
                {
                    label: 'Cycles: tractors at the top, equipment uneven',
                    text: "Tractors had a record FY26 and ICRA and Crisil expect only 0–4% growth in FY27, with the weather office forecasting a below-normal monsoon; **VST**'s July–August slowdown may be the first sign. Construction equipment is recovering unevenly: pick-and-carry cranes are growing strongly while mixer registrations fell 27% in Q1, and **Ajax**'s management does not expect Maharashtra or Madhya Pradesh, where contractors are paid late, to pick up yet. Steel rose about 20% this year, and ACE, Ajax, VST and Indo Farm all said they could not pass on every rupee of it at once.",
                },
                {
                    label: 'Governance and accounting: what the annual reports show',
                    text: "**Ola**'s FY26 accounts carry a going-concern key audit matter (the auditor's flag that survival rests on forecasts and new money), a qualified opinion on internal controls over stock counting at a subsidiary, and covenant breaches on bank loans and bonds; ICRA has cut its operating company twice, to BBB. **TIL**'s auditor qualified the FY26 accounts over ₹107cr of deferred tax assets, about 96% of its ₹111cr net worth, and TIL bought 60% of Tulip for ₹119cr from its own promoter group just after a ₹199.5cr rights issue. **Zelio** is raising ₹168cr eleven months after its IPO, has negative operating cash, and is asking shareholders to approve related-party dealings of up to ₹50cr each with five entities, including a promoter-group firm that was once a large customer. **Indo Farm** guarantees its own finance company's loans, and has said more guarantees are contemplated. Smaller points: **Ajax** lost two CFOs, a whole-time director and two independent directors in nine months and had an audit-trail gap in its dealer software; **Ather** capitalises a large share of its development spending, which its auditor flags as a key audit matter.",
                },
                {
                    label: 'Data problems on the dashboard',
                    text: "The dashboard shows **TIL** with a P/E although TIL lost ₹5.45cr in Q1 and about ₹31cr in FY26, so TIL is flagged as loss-making. It stores **Olectra**'s Q1 revenue as ₹525.5cr, but the company's two segments add to ₹575.5cr, and this note uses the company figure. **Check any price on an exchange website before acting.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **17% at 28x, 19% at 33x, 20% at 35x, 26% at 59x and 29% at 75x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Ajax** (₹1,119cr) and **VST** (₹678cr) hold net cash worth about 17–18% of their market values, so their businesses are cheaper than their P/Es suggest; EV/EBITDA, which credits that cash, shows it. But in both, interest on that cash is a large part of profit (a quarter of Ajax's Q1 pre-tax profit), and neither has a plan for it yet. **Olectra** carries ₹208cr of net debt that its P/E ignores; **Zelio**'s ₹7cr of cash changes nothing ({ev:Zelio E-Mobility|61.2}x). **Indo Farm** looks cheapest at {ev:Indo Farm|13} times, but its guarantees to its finance arm are debt in all but name.",
                },
                {
                    label: 'Reasonable',
                    text: "**Zelio** (needing about {need:Zelio E-Mobility|29}% a year against my ~30%) is the only price here that asks for about the growth I expect, but it is a wait, not a buy. The growth is the easy part to believe and the cash is the hard part: operating cash was −₹17cr against ₹54cr of profit over FY22–FY26, and it is raising equity again. **Reasonable here means the price fits my estimate, not that the estimate is safe.**",
                },
                {
                    label: 'Full',
                    text: "**Ajax** and **Indo Farm** (needing about {need:Ajax Engineering|17}% and {need:Indo Farm|17}% a year) each need more than my ~12%. For Ajax that is a return to double-digit volume growth that management has just declined to promise; for Indo Farm it is a crane plant that has not yet started. **ACE** (market value about {mcap:Action Const.Eq.|₹14,525cr}, P/E about {pe:Action Const.Eq.|33}, EV/EBITDA about {ev:Action Const.Eq.|25}) needs about {need:Action Const.Eq.|19}% a year against my 13%, so it is {label:Action Const.Eq.|full} too; its own ₹6,000–6,200cr target would close most of that gap if it is met.",
                },
                {
                    label: 'Stretched',
                    text: "**Olectra** needs about {need:Olectra Greentech|26}% a year against my 20%: its profit before tax rose 3% in Q1 on 66% more revenue, and deliveries have not moved for a year. **VST** needs about {need:VST Tillers Tractors|20}% a year against my 10%. The FY30 plan of ₹3,000cr (about 25% a year) would justify it, but July–August sales fell, several May promises were dropped, and part of today's profit is treasury income.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Ather** and **Ola** lose money after tax, and **TIL** lost money in Q1 and in FY26, so P/E means nothing for them. TIL is shown in the live table as loss-making.",
                },
                {
                    label: 'What the loss-makers’ prices assume',
                    text: "**Ather**, at about {mcap:Ather Energy|₹59,500cr}, is valued at about 14 times its last four quarters' revenue: the price assumes it becomes a large, profitable scooter maker within a few years, which needs the second factory at full speed by early FY28 and the EL platform selling at healthy margins. **Ola**, at about {mcap:Ola Electric|₹19,400cr}, is valued at about 10 times revenue while its sales shrink and its auditor flags going concern. **TIL**, at about {mcap:TIL|₹2,150cr}, is valued at roughly 19 times its March 2026 book equity (before a partly paid rights issue), and without the tax assets its auditor questions that equity would have been about ₹4.5cr.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Action Const.Eq.', rank: 1, stance: 'PRICED', segment: CONSTRUCTION,
            what: "ACE: India's leading maker of pick-and-carry cranes (it claims 63%+ of mobile cranes), plus tower cranes, backhoe loaders, road machinery, forklifts, defence equipment and tractors.",
            view: "**The best-run business here, at a full price.** It raised prices about 10% and still sold 17% more machines in Q1, earns 32–42% on capital, holds ₹1,352cr of net cash and converted 92% of five years' operating profit into cash. Management has still not given FY27 guidance and says steel is up about 20%. At a P/E of about {pe:Action Const.Eq.|33} it needs about {need:Action Const.Eq.|19}% a year against my ~13%. **24 Oct 2026:** growth estimate cut from 15% to 13%, because management is holding the margin at 15–16% rather than raising it, new plants add depreciation, and its ₹6,000cr+ revenue target leans on acquisitions it has not yet made; the price still does not fit. **28 Oct 2026:** the price fitted briefly before my 24 October cut and needs about {need:Action Const.Eq.|17}% now, against my ~13%; no new filing, so it stays follow.",
            watch: 'The full-year guidance promised for September; whether the June price rise holds against steel; how the ₹1,352cr of cash is spent on acquisitions.',
        },
        {
            company: 'Zelio E-Mobility', rank: 2, stance: 'SCALEUP', segment: EV,
            what: "Makes cheap low-speed electric scooters for small-town India that need no licence or registration; SME-listed and reports half-yearly.",
            view: "**Fast, profitable growth that has not become cash.** Operating cash was −₹17cr against ₹54cr of profit over FY22–FY26, and −₹7cr against ₹28cr in FY26. FY26 revenue rose 82% to ₹310.7cr, beating its own guidance, at a 12.2% margin, but it is raising ₹168cr eleven months after its IPO. It has no credit rating or investor presentation, and seeks approval for related-party dealings. The price asks for about my ~30% estimate, but it stays a wait until operating cash turns positive.",
            watch: 'H1 FY27 results in November, especially operating cash (positive cash brings it back to follow); volume against the 1.25 lakh target; the size of related-party sales.',
        },
        {
            company: 'Ajax Engineering', rank: 3, stance: 'PRICED', segment: CONSTRUCTION,
            what: "India's dominant maker of self-loading concrete mixers, plus batching plants, concrete pumps and boom pumps.",
            view: "**A superb niche in a stalled market.** 75.1% share at a 5–6% price premium and ₹1,119cr of net cash, but revenue has been flat at about ₹2,100cr for two years, FY27 guidance was withdrawn and a quarter of Q1 pre-tax profit was interest on cash. Two CFOs and three directors left in nine months. The price needs more than my ~12% estimate.",
            watch: 'Second-half demand in Maharashtra and Madhya Pradesh; the Q2 margin and the next price rise; what the cash is spent on.',
        },
        {
            company: 'Olectra Greentech', rank: 4, stance: 'SCALEUP', segment: EV,
            what: "Makes electric buses, sold mostly to its promoter MEIL's Evey Trans companies that run them for state transport undertakings, plus polymer insulators for power lines.",
            view: "**Revenue is growing; profit and deliveries are not keeping up.** Q1 revenue rose 66% to ₹575.5cr (the company figure), but profit before tax rose 3%, the margin fell to 12.7% and deliveries have sat near 350 buses a quarter for a year against a 2,000–2,500 guide. Vahan puts it fourth in registrations, not first, and Evey has told BEST it will not supply 1,414 buses. The price needs about {need:Olectra Greentech|26}% a year against my ~20%, so wait for deliveries to prove it.",
            watch: 'Q2 deliveries against the ~500 guided; the BEST order and the related-party approvals at the 26 September AGM; the margin holding near 12%.',
        },
        {
            company: 'Ather Energy', rank: 5, stance: 'SCALEUP', segment: EV,
            what: "India's premium electric-scooter maker, with its own software and charging network, a full factory in Hosur, a second opening in Aurangabad and a cheaper EL range just launched.",
            view: "**Winning, and priced for it.** Revenue rose 89% in Q1 to ₹1,217cr and EBITDA turned positive for the first time (₹9cr), with 1.5 lakh paid pre-orders. But the factory is full, share slipped to about 16% in August, the subsidy has ended and gross margin fell three points. At about 14 times sales it has no earnings to value yet.",
            watch: 'The Aurangabad plant reaching 42,000 a month and the ₹122cr expansion to 11.4 lakh units a year by Q2 FY28 (approved 26 October); EBITDA staying positive without the subsidy (Q2 FY27: income +62% to ₹1,527cr, a 4.9% margin and its first quarterly profit); share against TVS and Bajaj.',
        },
        {
            company: 'VST Tillers Tractors', rank: 6, stance: 'HARVEST', segment: FARM,
            what: "India's best-known maker of power tillers and weeders for small farms (about 70% of tillers), plus small tractors in India and Europe and larger ones through a Zetor joint venture.",
            view: "**Good tillers, a slowing year and a weak tractor arm.** Tillers rose 18% in Q1 and it holds ₹678cr of net cash, but tiller sales fell about 13% in July–August, the US plan is shelved and the Zetor target was dropped. Part of its profit is treasury income. The price needs about twice my ~10% estimate.",
            watch: 'The FY27 view promised for September; tractor and tiller sales through the Rabi season; a plan for the cash.',
        },
        {
            company: 'Indo Farm', rank: 7, stance: 'TURNAROUND', segment: FARM,
            what: "Makes tractors and pick-and-carry cranes in Baddi, Himachal Pradesh, owns a tractor-finance company and is building a new crane plant.",
            view: "**Low returns, heavy stock and a plant that keeps slipping.** Tractors grew 36% in Q1 but cranes were flat, returns are about 8% and the operating cycle is 240 days. The crane plant has slipped four times, the tower-crane plan was cut from 60–80 to 10, and it guarantees its finance arm's loans. The price needs more than my ~12% estimate.",
            watch: 'The crane plant producing by end-November; crane dealers rising from about 25; no new guarantees to its finance arm.',
        },
        {
            company: 'TIL', rank: 8, stance: 'TURNAROUND', segment: CONSTRUCTION,
            what: "An old maker of cranes, reach stackers, forklifts and defence handling equipment, controlled by the Gainwell group since 2024 and now owning 60% of Tulip Compression.",
            view: "**A turnaround that has not turned, with a qualified audit.** It lost ₹5.45cr in Q1 and ₹31cr in FY26, its auditor questioned ₹107cr of tax assets (about 96% of net worth), and it bought Tulip from its own promoter group for ₹119cr. Net debt is ₹365cr against a shrinking order book. Its dashboard P/E is wrong; it has no earnings to value.",
            watch: 'Two profitable standalone quarters; the FY27 audit opinion; further deals with Gainwell companies or calls for equity.',
        },
        {
            company: 'Ola Electric', rank: 9, stance: 'AVOID', segment: EV,
            what: "Makes electric scooters, Roadster motorcycles, its own battery cells and battery storage, and is moving from company stores to franchised dealers.",
            view: "**A shrinking business with warning signs in its accounts.** Revenue has been 43–57% below the year before for five quarters, Q1 missed its own guide (₹455cr against ₹500–550cr) and it ran at about 13,000 scooters a month against a 20,000–25,000 break-even. Its FY26 accounts carry a going-concern flag and covenant breaches, and ICRA has cut it twice.",
            watch: 'Monthly registrations after the dealer switch; cash burn against ₹300–500cr; any further covenant breach; the price and ratio of the ₹1,000cr rights issue of partly paid shares (against a market value of {mcap:Ola Electric|₹17,320cr}), which will set how far existing holders are diluted.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Electric scooters and buses.** **Zelio E-Mobility: wait**; −₹17cr of operating cash against ₹54cr of profit over FY22–FY26, so back to follow only when operating cash turns positive. **Olectra Greentech: wait** until deliveries reach 500 a quarter and the BEST and related-party questions are answered; the price needs more growth than I expect. **Ather Energy: wait**: the best new-age scooter business, priced as if the second factory has already worked. **Ola Electric: avoid.**",
            "**Construction equipment.** **Action Const.Eq. (ACE): follow** for a better price. **Ajax Engineering: wait** for its market to recover and a plan for its cash. **TIL: pass** until the audit is clean and the company makes money.",
            "**Farm machinery.** **VST Tillers Tractors: wait** for guidance and a better price. **Indo Farm: pass**; the new plant has to work first.",
            "**What would change my view.** For the better: a price fall that brings ACE or Ajax to fair value; Olectra delivering 600–700 buses a quarter at a 12% margin; Zelio reporting positive operating cash; Ather keeping EBITDA positive after the subsidy. For the worse: a rule change for slow scooters; a rare-earth magnet squeeze; a weak monsoon on top of the tractor peak; more delays in public projects.",
            "**What to watch next quarter.** ACE's full-year guidance; Olectra's Q2 deliveries and its AGM votes; Ajax's second-half demand; Ather's margin without the subsidy; Ola's registrations and cash; Zelio's half-year cash flow; VST's Rabi sales; Indo Farm's crane plant; TIL's standalone profit.",
        ],
        bottomLine:
            "Follow the best-run name until the price fits (Action Const.Eq.), wait on the businesses whose profit has not become cash, priced high, slow to deliver or in a down year (Zelio E-Mobility, Ajax Engineering, Olectra Greentech, Ather Energy, VST Tillers Tractors), pass on Indo Farm and TIL, and avoid Ola Electric.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/ACE/consolidated/' },
        { label: 'Easing rare-earth supply to drive high-teen e2W growth next fiscal — Crisil Ratings', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/02/easing-rare-earth-supply-to-drive-high-teen-e2w-growth-next-fiscal.html' },
        { label: 'Electric two-wheeler sales FY26: TVS, Bajaj, Ather, Ola, Hero, Ampere — Rushlane', url: 'https://www.rushlane.com/electric-2w-sales-fy26-tvs-bajaj-ather-ola-hero-ampere-12543571.html' },
        { label: 'Electric two-wheeler market share, August 2026 — Autopunditz', url: 'https://www.autopunditz.com/post/tvs-bajaj-ev-two-wheeler-market-share-august-2026' },
        { label: 'Electric two-wheeler registrations rise 65% in August 2026 — Autocar Professional', url: 'https://www.autocarpro.in/news/electric-two-wheeler-registrations-rise-65-percent-in-august-fy27-volumes-cross-9-lakh-134389' },
        { label: 'PM E-DRIVE subsidy ends: what it means for EV buyers from August 2026 — EVFY', url: 'https://www.evfy.in/news/pm-e-drive-subsidy-ends-what-it-means-for-ev-buyers-from-august-2026' },
        { label: 'India’s NdFeB magnet supply gap — Rare Earth Exchanges', url: 'https://rareearthexchanges.com/news/india-ev-ndfeb-magnet-supply-gap/' },
        { label: 'India e-bus penetration to rise to around 30% by 2029–30 (ICRA) — Autocar Professional', url: 'https://www.autocarpro.in/news/india-e-bus-penetration-to-rise-to-around-30-percent-by-2029-30-icra-134053' },
        { label: 'India electric bus market, first half 2026 — Sustainable Bus', url: 'https://www.sustainable-bus.com/news/india-electric-bus-market-first-half-2026/' },
        { label: 'Switch Mobility becomes top-selling e-bus maker in FY26 — Business Today', url: 'https://www.businesstoday.in/latest/corporate/story/hinduja-groups-switch-mobility-becomes-top-selling-e-bus-maker-in-fy26-523563-2026-04-01' },
        { label: 'Tractor industry faces demand moderation in FY27 (ICRA) — Rural Voice', url: 'https://eng.ruralvoice.in/agribusiness/india-tractor-industry-faces-demand-moderation-in-fy27-after-strong-fy26-growth.html' },
        { label: 'Tractor sales growth to slow sharply in FY2027 (Crisil) — Autocar Professional', url: 'https://www.autocarpro.in/news/tractor-sales-growth-to-slow-sharply-in-fy2027-crisil-warns-131701' },
        { label: 'Government drafts TREM V emission rules for tractors — TractorJunction', url: 'https://www.tractorjunction.com/tractor-news/govt-drafts-trem-v-emission-rules-for-tractors-from-october-2026/' },
        { label: 'Construction equipment sales decline 2% in FY26 (ICEMA) — NBM&CW', url: 'https://www.nbmcw.com/news/equipment-machinery/india-construction-equipment-sales-decline-2-in-fy26-exports-jump-31-5-icema.html' },
        { label: 'ICEMA projects construction equipment volume to grow 7% in FY27 — Autocar Professional', url: 'https://www.autocarpro.in/news/icema-projects-indias-construction-equipment-volume-to-grow-7-on-fy27-132486' },
        { label: 'Anti-dumping duty on Chinese cranes still awaiting government nod — Outlook Business', url: 'https://www.outlookbusiness.com/news/anti-dumping-duty-on-chinese-cranes-still-awaiting-govt-nod-despite-dgtr-recommendation' },
        { label: 'ACE Q1 FY27 earnings presentation', url: 'https://www.ace-cranes.com/public/front/pdf/Earning%20Presentation%2020.07.2026.pdf' },
        { label: 'ACE rating rationale, January 2026 — ICRA', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=140238' },
        { label: 'Olectra Greentech rating rationale, October 2025 — ICRA', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=138206' },
        { label: 'BEST e-bus rollout hit as Evey Trans exits supply deal — PropNewsTime', url: 'https://propnewstime.com/latestnewsstories/MzIyODc=/best-e-bus-rollout-hit-as-evey-trans-exits-supply-deal' },
        { label: 'Ajax Engineering annual report 2025–26', url: 'https://cdn.prod.website-files.com/65006e6ed741800ddeb94c08/6a9e788edb1d7f8685aea1ce_Annual%20Report%20of%20the%20Company%20for%20FY%202025-26%20(04-09-2026)%20-%20compressed.pdf' },
        { label: 'Ather Energy annual report FY26', url: 'https://media.atherenergy.com/Annual-Report-FY-25-26.pdf' },
        { label: 'Ola Electric consolidated financial statements FY26', url: 'https://cdn.olaelectric.com/sites/evdp/pages/investor/qip/consolidated_financial_statements_for_the_financial_year_2026.pdf' },
        { label: 'VST Tillers Tractors annual report 2025–26', url: 'https://www.vsttractors.com/in/wp-content/uploads/2026/09/VS-Tillers_2026_AR_01-09-2026.pdf' },
        { label: 'TIL annual report 2025–26 (NSE)', url: 'https://nsearchives.nseindia.com/annual_reports/AR_29554_TIL_2025_2026_A_5947184_03072026144528.pdf' },
        { label: 'TIL rating rationale, March 2026 — Infomerics', url: 'https://infomericstorage.blob.core.windows.net/uploads/Pr_TIL_Ltd_16_Mar26_f2466230ee.pdf' },
        { label: 'Indo Farm Equipment annual report 2025–26', url: 'https://www.indofarm.in/wp-content/uploads/2026/09/Annual-Report-2026-27.pdf' },
        { label: 'Zelio E-Mobility to raise ₹168 crore via preferential issue — Whalesbook', url: 'https://www.whalesbook.com/corporate-news/English/auto/Zelio-E-Mobility-to-Raise-Rs-168-Crore-via-Preferential-Issue/6ab3cf56f2017017ae71926d' },
        { label: 'Wholesale price index, lithium-ion batteries and hot-rolled steel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
