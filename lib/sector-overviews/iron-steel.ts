import { SectorOverview } from './types';
import { ironSteelBusinesses } from './iron-steel-businesses';
import { ironSteelValuationInputs } from './card-data/iron-steel';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CARBON = 'Carbon-steel line pipe and coated sheet — big orders, thin spreads';
const STAINLESS = 'Stainless-steel pipes, tubes and hoses — value added on alloy';
const INTEGRATED = 'Integrated steel makers — from iron ore to finished steel';

export const ironSteel: SectorOverview = {
    sector: 'Iron and Steel',
    title: 'Iron and Steel',
    format: 'ranked',
    businesses: ironSteelBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: ironSteelValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Man Industries (I)': 18,
            'Manaksia Coated Metals': 20,
            'Aeroflex Industries': 25,
            'Venus Pipes & Tubes': 15,
            'Scoda Tubes': 12,
            'Shyam Metalics': 15,
            'Sambhv Steel Tubes': 15,
        },
    },
    standfirst:
        "Seven companies that make steel or turn it into something more useful. Two make their own steel from iron ore: Shyam Metalics, an east-India maker of steel, ferro alloys, stainless steel and aluminium foil, and Sambhv Steel Tubes, which makes pipes and stainless-steel coil in Chhattisgarh. The other five buy their steel. Man Industries makes large pipes for oil, gas and water pipelines and in May bought a pipe plant in Saudi Arabia. Manaksia coats and paints steel sheet, mostly for export. Venus and Scoda make stainless-steel pipes and tubes, and Aeroflex makes stainless-steel flexible hoses and, since late 2025, cooling equipment for AI data centres. The steel makers' profit follows the steel price; the converters' depends on how much they add on top of the steel, how fast they pass on cost changes and how quickly orders turn into cash. This note draws on each company's last two earnings calls, FY26 annual report, latest presentation and rating report, and on ICRA, CRISIL and India Ratings for the sector. Every chart uses filed results and up to five years of history.",
    lastUpdated: '2026-09-24',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): Venus and Scoda standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'Aeroflex earns the most because assemblies and data-centre skids earn more than plain hose. Manaksia’s margin recovered in Q1 after it passed on the Q4 spike in LPG and freight costs. The two steel makers follow the steel price: Sambhv fell to 9% in Q3 FY26 when coil prices dipped.',
            values: {
                'Man Industries (I)': [7, 15, 15, 12, 14],
                'Manaksia Coated Metals': [10, 12, 9, 6, 11],
                'Aeroflex Industries': [18, 23, 23, 24, 23],
                'Venus Pipes & Tubes': [16, 16, 16, 16, 16],
                'Scoda Tubes': [15, 15, 15, 14, 13],
                'Shyam Metalics': [13, 12, 11, 14, 14],
                'Sambhv Steel Tubes': [13, 10, 9, 13, 13],
            },
            cellNotes: {
                'Shyam Metalics': 'The company’s own Q1 FY27 margin of 14.9% includes other income; the filed operating margin is 14.0%.',
                'Sambhv Steel Tubes': 'The company’s total Q1 FY27 EBITDA (₹100cr) includes other income; filed operating profit was ₹95cr (13.0%). Q4 FY26 was helped by cheap stock bought in Q3 and a 20% jump in coil prices.',
                'Man Industries (I)': 'The company’s own Q1 FY27 margin of 14.6% includes ₹12cr of other income; the filed operating margin is 13.6%.',
                'Manaksia Coated Metals': 'The company’s own margins (6.8% in Q4 FY26, 11.06% in Q1 FY27) are on total income and include other income.',
                'Scoda Tubes': 'Scoda holds calls only every six months, so there was no Q1 FY27 call. Gas-supply cuts stopped the plant for 15–17 days in March 2026 and about two weeks in April 2026.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Aeroflex grew 73% in Q1 on data-centre cooling skids, which went from 5% of FY26 revenue to about 23% of the quarter. Man’s 42% includes its newly bought Saudi plant for 20 days.',
            values: {
                'Man Industries (I)': [-1, 3, 13, -5, 42],
                'Manaksia Coated Metals': [29, 26, -9, 9, 5],
                'Aeroflex Industries': [-7, 17, 21, 37, 73],
                'Venus Pipes & Tubes': [15, 28, 29, 17, 16],
                'Scoda Tubes': [6, 4, 17, 0, 28],
                'Shyam Metalics': [22, 23, 18, 27, 23],
                'Sambhv Steel Tubes': [null, 84, 60, 38, 31],
            },
            cellNotes: {
                'Sambhv Steel Tubes': 'Listed July 2025. Q1 FY26 is blank: no filed figure for the same quarter a year earlier. Growth came as galvanised and stainless capacity doubled; FY26 volume rose 37%.',
                'Shyam Metalics': 'Q1 FY27 volume grew 14%; the rest came from higher prices for stainless steel, foil and alloys.',
                'Man Industries (I)': 'Q4 FY26’s −5% is against a Q4 FY25 that included ₹369cr of one-off real-estate revenue (the Merino Shelters project).',
                'Scoda Tubes': 'Q1 FY27’s +28% is against a weak Q1 FY26; profit after tax fell 26% in the quarter.',
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
            note: 'Aeroflex and Venus have fallen from the mid-30s to about 20% as new plants came in ahead of their sales. Shyam has earned 11–15% since FY23, after 44% in the FY22 steel boom.',
            values: {
                'Man Industries (I)': [16, 10, 14, 16, 16],
                'Manaksia Coated Metals': [13, 10, 15, 15, 18],
                'Aeroflex Industries': [36, 34, 26, 22, 19],
                'Venus Pipes & Tubes': [37, 23, 28, 25, 21],
                'Scoda Tubes': [null, 16, 20, 20, 17],
                'Shyam Metalics': [44, 15, 11, 12, 13],
                'Sambhv Steel Tubes': [null, null, null, null, 19],
            },
            cellNotes: {
                'Shyam Metalics': 'The company quotes 16% for FY26 because it leaves out cash, investments and unfinished plants.',
                'Sambhv Steel Tubes': 'Screener carries only FY26; the company listed in July 2025.',
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
            note: 'Stainless-steel pipe makers hold a lot of stock across many sizes and grades; Scoda’s reached 211 days in FY26 as stock built up with its new capacity and the March gas shutdown.',
            values: {
                'Man Industries (I)': [-8, 95, 63, 104, 114],
                'Manaksia Coated Metals': [75, 66, 68, 53, 96],
                'Aeroflex Industries': [84, 132, 116, 129, 112],
                'Venus Pipes & Tubes': [133, 123, 114, 132, 124],
                'Scoda Tubes': [189, 151, 162, 164, 211],
                'Shyam Metalics': [63, 45, 12, 22, 8],
                'Sambhv Steel Tubes': [null, null, null, 11, 10],
            },
            cellNotes: {
                'Shyam Metalics': 'Short because suppliers fund the stock: 123 days of inventory against 133 days of payables in FY26.',
                'Sambhv Steel Tubes': 'The company’s own measure was 17 days in FY26 and 21 in Q1 FY27; it expects 25–30 days once the Kesda stainless plant runs.',
                'Scoda Tubes': 'CARE Ratings lists a working-capital cycle above 150 days as a downgrade trigger.',
                'Venus Pipes & Tubes': 'Screener puts FY26 inventory at 183 days; the company calculates 121.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Man and Shyam reach it over five years, and Sambhv over its two years on record; Venus, Manaksia and Scoda have turned most of their profit into stock and receivables.',
            values: {
                'Man Industries (I)': [249, -88, 143, 23, 117, 97],
                'Manaksia Coated Metals': [-37, 24, 43, 56, -18, 13],
                'Aeroflex Industries': [68, 13, 71, 34, 66, 51],
                'Venus Pipes & Tubes': [-122, 13, 36, 41, 59, 29],
                'Scoda Tubes': [null, 57, 3, 36, -18, -4],
                'Shyam Metalics': [60, 101, 114, 92, 87, 87],
                'Sambhv Steel Tubes': [null, null, null, 82, 77, 79],
            },
            cellNotes: {
                'Sambhv Steel Tubes': 'Cash flows on Screener start in FY25, so the last column covers two years.',
                'Man Industries (I)': 'Swings with customer advances on large pipeline orders.',
                'Scoda Tubes': 'FY22 left blank: operating profit was very small.',
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
            note: 'Six of the seven have spent more than they earned while building new lines; Venus and Scoda most heavily.',
            values: {
                'Man Industries (I)': [18.9, -14.7, 7.3, -2.5, 4.9, 2.7],
                'Manaksia Coated Metals': [-2.0, -0.4, 1.9, 1.1, -6.5, -1.4],
                'Aeroflex Industries': [7.9, -0.7, 1.9, -20.7, -1.1, -3.6],
                'Venus Pipes & Tubes': [-20.9, -27.7, -6.9, -4.1, -6.6, -10.5],
                'Scoda Tubes': [-42.3, -2.6, -8.5, -4.5, -25.0, -14.5],
                'Shyam Metalics': [6.0, -3.1, -0.7, -2.9, -3.3, -1.3],
                'Sambhv Steel Tubes': [null, null, null, -6.7, -3.1, -4.5],
            },
            cellNotes: {
                'Shyam Metalics': 'Negative every year since FY23 as capex ran at about 14% of sales; ₹10,041cr of projects are still to be built.',
                'Sambhv Steel Tubes': 'FY25–FY26 only; the last column covers those two years.',
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Man.',
            note: 'Below zero means more cash than debt. Man and Aeroflex held net cash at March 2026, but Man expects debt to peak at about ₹1,600cr this year to fund new plants, and Sambhv’s debt roughly trebles by March 2027.',
            values: {
                'Man Industries (I)': [-1.6, 1.0, -0.7, 0.2, -0.2],
                'Manaksia Coated Metals': [4.4, 5.2, 3.1, 2.2, 1.2],
                'Aeroflex Industries': [0.7, 0.7, -1.7, -0.3, -0.6],
                'Venus Pipes & Tubes': [1.2, 0.9, 1.0, 1.1, 1.4],
                'Scoda Tubes': [10.9, 3.7, 3.1, 2.1, 1.5],
                'Shyam Metalics': [0.1, 0.7, 0.3, 0.4, 0.4],
                'Sambhv Steel Tubes': [null, null, null, 3.2, 1.0],
            },
            cellNotes: {
                'Shyam Metalics': 'Counts cash only. The company also counts its treasury investments and reports net cash of ₹378cr at March 2026.',
                'Sambhv Steel Tubes': 'FY25–FY26 only. Term debt is set to reach ₹800–850cr, plus ₹200–300cr of working-capital loans, by March 2027 to fund the Kesda stainless plant.',
                'Man Industries (I)': 'CRISIL says only about ₹300cr of the ₹657cr cash at March 2026 was free of liens.',
                'Manaksia Coated Metals': 'Excludes ₹115cr of bills discounted with banks at March 2026, shown only as a contingent liability.',
                'Venus Pipes & Tubes': 'Net debt rose to about ₹325cr by June 2026; a ₹372cr share issue, put to a vote on 8 October, would roughly clear it.',
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
            note: 'Venus, Scoda, Aeroflex, Shyam and Sambhv have all spent 13–15% of sales a year on new capacity.',
            values: {
                'Man Industries (I)': [2.2, 9.3, 3.7, 4.4, 9.5, 5.9],
                'Manaksia Coated Metals': [0.0, 1.6, 1.0, 2.8, 4.9, 2.3],
                'Aeroflex Industries': [5.4, 3.3, 11.9, 27.9, 16.1, 14.3],
                'Venus Pipes & Tubes': [5.4, 29.3, 13.3, 11.3, 16.2, 15.2],
                'Scoda Tubes': [18.0, 9.2, 9.0, 10.3, 22.4, 13.9],
                'Shyam Metalics': [9.0, 15.0, 14.3, 14.2, 14.2, 13.6],
                'Sambhv Steel Tubes': [null, null, null, 15.0, 11.9, 13.1],
            },
            cellNotes: {
                'Sambhv Steel Tubes': 'FY25–FY26 only; the last column covers those two years.',
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
            note: 'Falling at Venus, Scoda, Aeroflex and Shyam as new plants are built ahead of sales.',
            values: {
                'Man Industries (I)': [6.7, 4.0, 5.2, 5.5, 4.1],
                'Manaksia Coated Metals': [5.0, 5.3, 6.2, 7.0, 5.3],
                'Aeroflex Industries': [5.2, 4.8, 3.8, 2.2, 2.1],
                'Venus Pipes & Tubes': [18.4, 9.2, 2.8, 3.1, 2.9],
                'Scoda Tubes': [17.6, 4.9, 4.9, 6.0, 2.8],
                'Shyam Metalics': [4.2, 3.8, 3.3, 2.4, 2.3],
                'Sambhv Steel Tubes': [null, null, null, 2.0, 3.3],
            },
            cellNotes: {
                'Sambhv Steel Tubes': 'FY25–FY26 only; FY26 rose as the doubled galvanised and stainless lines filled.',
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the company’s call ÷ sales over the last four quarters (Screener).',
            note: 'Man works on large pipeline orders months ahead; the others sell on shorter cycles. Aeroflex does not publish an order book, and the two steel makers sell from stock.',
            values: {
                'Man Industries (I)': [0.9],
                'Manaksia Coated Metals': [0.5],
                'Aeroflex Industries': [null],
                'Venus Pipes & Tubes': [0.5],
                'Scoda Tubes': [0.3],
                'Shyam Metalics': [null],
                'Sambhv Steel Tubes': [null],
            },
            cellNotes: {
                'Shyam Metalics': 'No order book: it sells steel, alloys and foil at market prices.',
                'Sambhv Steel Tubes': 'No order book: pipes and coil are sold from stock through distributors and dealers.',
                'Man Industries (I)': 'About ₹3,600cr across India and Saudi Arabia, of which India ₹2,200–2,300cr.',
                'Venus Pipes & Tubes': 'More than ₹600cr, plus a ₹185cr letter of intent for data-centre piping not yet booked.',
                'Manaksia Coated Metals': 'About ₹450cr on the call; ₹420cr in the Q1 FY27 presentation, 87% for export.',
                'Aeroflex Industries': 'Not disclosed: skids run on a yearly plan with quarterly purchase orders.',
                'Scoda Tubes': 'About ₹175cr at its FY26 call in May 2026 (calls are half-yearly).',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'approval', label: 'Customer approvals', description: 'Vendor approvals from oil companies, utilities or global buyers that take years to win.' },
            { key: 'value', label: 'Value added', description: 'How far beyond plain steel the product goes (assemblies, coating, spooling).' },
            { key: 'integ', label: 'Own raw material', description: 'Making its own mother hollows or substrate rather than buying them.' },
            { key: 'pass', label: 'Cost pass-through', description: 'How fully steel, nickel, zinc and energy costs are passed on.' },
            { key: 'cash', label: 'Balance sheet and cash', description: 'Debt, and whether profit turns into cash.' },
        ],
        rows: [
            { company: 'Shyam Metalics', trend: 'widening', trendNote: 'Profit a tonne rose in stainless, alloys and foil in Q1; ₹10,041cr of new plants still to build, mostly due FY28–FY29.',
                grades: { approval: { grade: 'C', note: 'Sells at market prices; no customer above 5%' }, value: { grade: 'B', note: 'Stainless, alloys and foil; carbon steel still largest' }, integ: { grade: 'A', note: 'Ore to metal; 79% own power' }, pass: { grade: 'C', note: 'Price-taker; carbon-steel price +2% in Q1' }, cash: { grade: 'B', note: 'CRISIL AA+; free cash negative four years' } } },
            { company: 'Sambhv Steel Tubes', trend: 'widening', trendNote: 'Galvanised and stainless capacity doubled in FY26; Kesda stainless plant due Q4 FY27 (CRISIL: Q3 FY28).',
                grades: { approval: { grade: 'C', note: 'Dealer sales; Engineers India and Chennai Metro approvals' }, value: { grade: 'B', note: 'Galvanised pipe and narrow stainless coil' }, integ: { grade: 'A', note: 'Makes its own steel from iron ore' }, pass: { grade: 'C', note: 'Priced at or ₹1 a kilo below the leader' }, cash: { grade: 'B', note: 'CRISIL A+; debt set to roughly treble' } } },
            { company: 'Man Industries (I)', trend: 'widening', trendNote: 'Bought National Pipe Company in Saudi Arabia, gaining an Aramco-approved local plant.',
                grades: { approval: { grade: 'A', note: 'Oil company and utility approvals; Aramco vendor via its Saudi plant' }, value: { grade: 'B', note: 'Coating; double-jointing coming' }, integ: { grade: 'C', note: 'Buys plate and coil' }, pass: { grade: 'B', note: 'Order-by-order pricing' }, cash: { grade: 'B', note: 'Net cash at March; debt to peak ~₹1,600cr' } } },
            { company: 'Manaksia Coated Metals', trend: 'widening', trendNote: 'Record ₹10,400 a tonne profit in Q1; second colour-coating line due in Q2.',
                grades: { approval: { grade: 'B', note: 'Export buyers in many countries' }, value: { grade: 'B', note: 'Colour-coated and Alu-Zinc sheet' }, integ: { grade: 'C', note: 'Buys steel coil' }, pass: { grade: 'B', note: 'Passed on Q4’s cost spike in Q1' }, cash: { grade: 'D', note: 'Five-year cash conversion 13%' } } },
            { company: 'Aeroflex Industries', trend: 'widening', trendNote: 'Data-centre skids jumped to about 23% of revenue; capacity going to 15,000 units.',
                grades: { approval: { grade: 'B', note: 'Co-develops skids with a US-based data-centre customer' }, value: { grade: 'A', note: 'Assemblies and skids, not just hose' }, integ: { grade: 'B', note: 'Makes its own hose and bellows' }, pass: { grade: 'B', note: 'Custom pricing on skids' }, cash: { grade: 'C', note: 'Net cash, but free cash negative' } } },
            { company: 'Venus Pipes & Tubes', trend: 'stable', trendNote: 'Revenue tripled over recent years but quarterly profit has been flat; margin target moved to FY28.',
                grades: { approval: { grade: 'B', note: 'Approvals in power, chemicals, oil and gas' }, value: { grade: 'B', note: 'Moving into fittings and spooling' }, integ: { grade: 'A', note: 'Makes its own mother hollows' }, pass: { grade: 'B', note: 'Prices follow nickel and steel' }, cash: { grade: 'D', note: 'Five-year cash conversion 29%' } } },
            { company: 'Scoda Tubes', trend: 'stable', trendNote: 'Welded-pipe plant delayed by equipment from China; recently listed.',
                grades: { approval: { grade: 'B', note: 'BHEL, NTPC, private groups, Europe' }, value: { grade: 'C', note: 'Seamless tubes; welded coming' }, integ: { grade: 'A', note: 'Own mother-hollow mill' }, pass: { grade: 'B', note: 'Raw material passed on at dispatch' }, cash: { grade: 'D', note: 'Operating cash negative over five years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No company here is a clear buy at today's price; Shyam Metalics comes closest, so follow it.** It is by far the largest company here and one of two that make their own steel, turning iron ore into pellets, sponge iron, billets, bars, sheet, ferro alloys and stainless steel in east India, plus aluminium foil, with 79% of its power from its own plants. Q1 FY27 operating profit rose 32% to ₹765cr at a 14% margin, it holds a CRISIL AA+ rating, and the price asks for about the 15% a year I expect. But on its July call it pared FY27 growth to “more than 20–25%” (in May it said “close to 30%”), free cash flow has been negative for four years with ₹10,041cr of projects still to build, and in April the Enforcement Directorate attached ₹152cr of a subsidiary's investments in a coal-mining probe, which the auditor highlights. **Its earnings follow the steel cycle, so I would buy on a cyclical dip, not at a peak.**",
                "**Follow Man Industries too.** It makes large-diameter welded pipes for oil, gas and water pipelines and on 21 May bought National Pipe Company (NPC) in Saudi Arabia for US$102mn (about ₹1,000cr), an Aramco-approved plant that came with no debt. Man's filed operating margin has risen from 8% in FY24 to 14% in Q1 FY27, and in FY26 it turned 119% of operating profit into operating cash, the best record here. But in August management trimmed this year's revenue target to the bottom of its range, debt will rise to about ₹1,600cr by March 2027, and the auditor flags a SEBI order against the chairman and MD (stayed on appeal) and an income-tax search. The price asks for a little more growth than I expect, so I would buy only on weakness or once the Saudi plant proves its run-rate.",
                "**Follow Manaksia Coated Metals.** It coats and paints steel sheet for roofs, walls and appliances, two-thirds of it exported, and earned a record ₹10,401 of operating profit a tonne in Q1 FY27, twice FY23's level, after passing on the Q4 fuel and freight spike. A second colour-coating line nearly triples its painting capacity from Q2, and management guides revenue of ₹1,300–1,350cr this year against ₹884cr in FY26. The price asks for about the growth I expect. The catch is cash: operating cash was negative in FY26, ₹115cr of bills were discounted with banks without showing as debt, and the auditor noted that customer and supplier balances were unconfirmed.",
                "**Follow Sambhv Steel Tubes.** It makes steel pipes, galvanised coil and narrow stainless-steel coil at Raipur from its own ore-based steel, and has beaten its guidance since listing in July 2025: Q1 FY27 earned ₹10,002 of operating profit a tonne (excluding sponge-iron sales) against ₹7,500–8,000 guided in May, and in August it raised its FY27 range to ₹7,500–8,500. The price asks for a little more than the ~15% a year I expect. The test is a ₹935cr stainless plant at Kesda: management says trial output by Q4 FY27, CRISIL's August rating report says Q3 FY28 with about 30% of the work done, and debt roughly trebles meanwhile. Warrants for promoters and management priced about 28% below the market are another reason to follow rather than own.",
                "**Wait on Scoda, Venus and Aeroflex.** **Scoda Tubes** asks for a little more growth than I now expect: since listing in June 2025 it has missed its revenue, margin and plant-start targets, and its 211-day cash cycle is well above the 150 days CARE Ratings treats as a downgrade trigger. **Venus Pipes** has grown sales about 45% since early 2024 while quarterly profit has sat at ₹24–28cr; it cut its margin guide within one quarter and on 16 September approved a ₹372cr share issue at about 26% below the market price. **Aeroflex** is the best operator on the page, with Q1 revenue up 72% at a 23% margin, but its data-centre skids go to one customer with no patents behind them, it is appealing a ₹41.8cr tax demand, and its price needs growth well above what I expect.",
                "**Two things to hold onto before reading the rest.** First, **five of the seven are converters, not mills**: they buy steel and sell a product, so the margin depends on how much value they add and how fast they pass on cost changes, and this year's steel-price upswing helps the two that make their own steel, Shyam and Sambhv, more than them. Second, **cash is the weak point**: six of the seven have spent more than they earned building new lines over the years on record, and most are now adding debt or issuing shares to keep building.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed results (Venus and Scoda standalone). Sambhv listed in July 2025, so Screener carries only two years of its cash flows and one year of its return on capital. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's own quarterly records mix measures for this group: Man's Q4 FY26 and Sambhv's Q4 FY26 profit are standalone figures, Aeroflex's and Manaksia's revenue is total income, and the margins Manaksia, Shyam and Sambhv quote count other income. The charts use filed operating figures. Scoda holds calls only every six months, so its Q1 FY27 figures come from filed results and its August presentation.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Steel leaves the mill as coil, plate or bar. Five of these companies turn it into pipes, hoses and coated sheet, and sell to oil companies, utilities, builders, plant makers and data centres; Shyam and Sambhv make the steel themselves, from iron ore. Sources: ICRA, CRISIL Ratings and India Ratings outlooks, the petroleum regulator PNGRB, European Commission and US trade notices, Welspun Corp's Q1 FY27 call, and company filings and rating reports.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel mill → **hot-rolled coil and plate** → large welded line pipe (Man), or cold-rolled coil coated with aluminium-zinc and paint (Manaksia). Stainless-steel bar → **mother hollow** (a rough tube pierced from solid bar) → finished **seamless** pipe and tube (Venus, Scoda). Stainless strip → **welded** pipe and flexible hose (Venus, Aeroflex, soon Scoda) → assemblies, fittings, spools and cooling skids. **The profit sits in the added value, not in the steel**: Aeroflex's assemblies earn 22–26% against 16–20% for bare hose, Scoda says seamless earns 16–18% against 12–13% for welded, and Manaksia earns ₹1,000–3,000 a tonne more on Alu-Zinc than on plain galvanised sheet. ICRA puts the integrated mills' own operating margin at about 14.8% in FY26, so a converter only beats its supplier by doing something the mill does not. **Two companies start further back.** **Shyam** turns iron ore into pellets, sponge iron (ore reduced with coal) and billets, then into bars, sheet, ferro alloys and stainless steel; in Q1 FY27 it earned ₹2,906 of operating profit a tonne on those intermediates, ₹7,688 on carbon steel, ₹10,194 on stainless, ₹21,809 on alloys and ₹53,661 on aluminium foil. **Sambhv** makes narrow hot-rolled coil from its own sponge iron and slabs and rolls it into pipes and stainless coil. Their FY26 margins, 13% and 11%, sit close to ICRA's figure for the big mills: they earn a mill's margin, not a converter's premium.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Line pipe** follows pipeline budgets. In India that looks tired: PNGRB data show 8,251km of gas pipeline under construction in June 2026, 2,208km less than a year earlier, and Welspun Corp, India's largest pipe maker, says water-pipe demand under the Jal Jeevan Mission is “under severe pressure” from fund shortages and overcapacity. The Gulf is the opposite: Aramco guides US$50–55bn of capex for 2026, which is why Man bought a Saudi plant. **Stainless pipe** follows power, chemical and oil-and-gas plant building; India made 4.45 million tonnes of stainless steel in FY26 (+14%), and the industry body ISSDA expects demand to grow 7–8% a year to FY28. **Data centres** are the one new pool: Aeroflex counts about 40 cooling skids per megawatt against a pipeline of more than 9 gigawatts of Indian projects. I found no independent forecast for **coated sheet**, which follows roofing, warehouses and appliances. **Long steel and structural pipe** follow construction: Shyam's carbon-steel long volumes grew only 2.8% in August after secondary rebar prices fell in July, and Sambhv holds about 3% of the welded (ERW) pipe market. **Narrow stainless coil**, Sambhv's niche, is a segment of about 70,000–80,000 tonnes a month served mostly by imports and small mills, by the company's count.",
                },
                {
                    label: 'Cycles, prices and policy',
                    text: "**Carbon steel is in an up-leg.** India's safeguard duty on flat steel (11.5% until April 2027, then 11%; stainless is excluded) protects the mills, hot-rolled coil reached a four-year high in September after rising ₹4,000 a tonne since August (Reuters, citing BigMint), and CRISIL expects domestic steel prices to rise 6–8% this year. That raises costs for Man and Manaksia, which buy the steel and pass it on with a lag of one to three months; the lag is why Manaksia's margin fell to 6% in Q4 FY26. The same up-leg helps **Shyam** and **Sambhv**, which make their own steel: Sambhv says 50–60% of a price rise reaches its operating profit, which went from ₹5,245 a tonne in Q3 FY26 to ₹9,355 in Q1 FY27. **Stainless costs jumped too**: Scoda says Indian stainless bar and scrap rose 25–30% after the West Asia war, and because orders are priced three to four months ahead, Venus and Scoda saw revenue rise while margins stalled. Nickel has since eased from about US$19,350 a tonne in June to about US$16,600–16,900 in early September. **Trade rules are tightening abroad**: the EU cut its tariff-free steel quota by 47% from 1 July with a 50% duty above it, and the US charges 50% on steel pipe. At home the rule runs the other way for stainless coil: a relaxed quality-control order lets some Chinese coil in without Indian (BIS) certification, which Sambhv expects to soften its stainless margins once shipping normalises.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Shyam** depends on carbon-steel prices holding and on ₹10,041cr of new plants, mostly due in FY28–FY29, earning more than its steel does today; **Sambhv** on hot-rolled coil prices and on its Kesda stainless plant arriving on time; **Man** on Aramco and Gulf pipeline orders and on NPC running at ₹300–500cr a quarter from Q2; **Manaksia** on filling its new paint line with export orders and on steel, zinc and fuel costs not jumping mid-quarter; **Aeroflex** on one data-centre customer's dispatch plan and on winning a second; **Venus** on fittings and spools lifting its margin from 16%; **Scoda** on its welded plant, the BHEL boiler-tube tender and a steady gas supply. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, FY26 (filed figures)',
                    columns: ['Position', 'Who', 'Sales', 'Operating margin (last five quarters)', 'Profit after tax (share of group)', 'Five-year cash conversion'],
                    rows: [
                        ['Integrated steel, alloys and foil', 'Shyam', '₹18,552cr', '11–14%', '₹1,060cr (66%)', '**87%**'],
                        ['Integrated pipes and stainless coil', 'Sambhv', '₹2,413cr', '9–13%', '₹142cr (9%)', '**79%** (two years)'],
                        ['Large-diameter line pipe', 'Man', '₹3,564cr', '7–15%', '₹170cr (11%)', '**97%**'],
                        ['Coated sheet', 'Manaksia', '₹884cr', '6–12%', '₹41cr (3%)', '**13%**'],
                        ['Hoses, assemblies and cooling skids', 'Aeroflex', '₹442cr', '18–24%', '₹56cr (3%)', '**51%**'],
                        ['Stainless pipe and tube', 'Venus, Scoda', '₹1,686cr', '13–16%', '₹141cr (9%)', '**29% and −4%**'],
                    ],
                    note: 'Group total: ₹27,541cr of sales and ₹1,610cr of profit after tax in FY26; shares are rounded. Cash conversion is operating cash ÷ operating profit over FY22–FY26 (Sambhv FY25–FY26). Shyam alone earned two-thirds of the group’s profit.',
                },
                {
                    caption: 'The sector in numbers',
                    columns: ['Item', 'Figure', 'What it means', 'Source'],
                    rows: [
                        ['India steel demand, FY27', '+9–10% (FY26: +7.6%)', 'Budget spending on roads, railways and infrastructure up about 25%', 'ICRA (May 2026)'],
                        ['India steel demand, FY27', '+5–7%', 'Slower, on a high FY26 base', 'CRISIL Ratings (Aug 2026)'],
                        ['India steel demand, FY27', 'High single digit; outlook neutral', 'New mill capacity broadly matches demand', 'India Ratings (Aug 2026)'],
                        ['Domestic steel prices, FY27', '+6–8%; hot-rolled coil at a four-year high in September', '**Dearer input for Man and Manaksia**', 'CRISIL Ratings; Reuters citing BigMint'],
                        ['India safeguard duty on flat steel', '11.5% to April 2027, then 11%; stainless excluded', 'Protects the mills; converters pay more', 'Government notification, via SEAISI'],
                        ['India stainless quality-control order', 'Relaxed: some imports without BIS certification allowed until a cut-off date', 'Cheaper Chinese stainless coil may return', 'Sambhv Steel Tubes Q1 FY27 call'],
                        ['EU steel safeguard, from 1 July 2026', 'Tariff-free quota down 47% to 18.3mn t; 50% duty above it', '**Exporters to Europe squeezed**', 'European Commission'],
                        ['US tariff on steel', '50% on steel pipe; about 10–15% on Aeroflex’s hoses', 'The US is largely shut to plain pipe', 'GHY International; Aeroflex Q4 call'],
                        ['Indian gas pipelines', '28,157km running; 8,251km being built, down 21% in a year', 'Domestic line-pipe backlog shrinking', 'PNGRB (Jun 2026)'],
                        ['Saudi welded-pipe capacity', 'About 2.5mn t, with 1.05mn t more due within two years', '**About 40% more supply**', 'Man Industries annual report FY26'],
                        ['Stainless steel demand', 'Mid-single digit in FY27; 7–8% a year to FY28', 'Steady, not booming', 'India Ratings; ISSDA'],
                        ['Nickel price, 2026', 'US$15,250–19,000 a tonne', 'Moves stainless revenue more than margin', 'ING, Goldman Sachs, Fastmarkets, Wood Mackenzie (via JSL)'],
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
                    label: 'Lasting: approvals from big buyers',
                    text: "Oil companies approve pipe suppliers slowly and rarely switch; Aramco's vendor approval alone takes one to two years of audits. **Man** already had three decades of API and oil-company approvals and is one of India's top four welded-pipe makers (CRISIL). NPC adds a plant inside Saudi Arabia, the only one there with both straight-seam and spiral mills, just as Aramco's local-content rule (IKTVA) favours in-Kingdom suppliers: local content reached 70% in February and the target is 75% by 2030. Man paid about 1.5 times NPC's 2025 operating profit, where listed Saudi rivals trade at about 9.5 times by management's reckoning. **The limit is that every order is still won in a price bid, and Saudi rivals are adding about 40% more capacity.**",
                },
                {
                    label: 'Lasting but narrow: products designed with the customer',
                    text: "**Aeroflex** designs each liquid-cooling skid floor by floor with its customer and must pass strict end-customer audits; winning that customer took 10–11 months from first talk to first order, and Aeroflex's own team now does design work the customer once did. But management says openly it holds no patents on skids, every skid goes to one exclusive partner (the Indian arm of a US-headquartered cooling company), and Parker and Senior plc also make skids. The average skid price fell from ₹4.99 lakh in Q3 FY26 to ₹3.11 lakh in Q1 FY27, which management puts down to design, not competition. **A real switching cost, but only one customer deep.**",
                },
                {
                    label: 'Cost edge: making its own mother hollow',
                    text: "**Scoda** pierces its own mother hollow from Indian round bar instead of importing it, and CARE credits that with lifting its margin from 11% in FY23 to 15–16% in FY24–FY25; 70% of its hollow is now made in-house, with 100% targeted by FY28. **Venus** is fully integrated in seamless and is adding fittings and spools; a data-centre owner chose it for a ₹185cr spooling letter of intent after a plant visit and audit, because it makes both pipe and fittings. BHEL and BARC now accept hot-pierced pipe, where they once bought only extruded pipe, which widened the market for both. **Integration cuts cost; it has not yet shown up as pricing power.**",
                },
                {
                    label: 'Cost edge: making its own steel',
                    text: "**Shyam** makes 79% of its power in its own plants at ₹2.65 a unit against ₹5–7 from the grid, sources raw materials within about 250km, runs two railway sidings with 19 rakes of its own, and can either sell its pellets and sponge iron or use them itself. Management says its stainless plan will use about 80% in-house inputs (alloys, pig iron and power), an edge over scrap-based rivals paying ₹6–7 a unit for power. **Sambhv** buys iron ore from NMDC and coal from SECL under a long-term linkage, both within about 250km, and switched its furnaces from LPG to piped gas in January 2026, before the war pushed fuel prices up. CRISIL rates them AA+ and A+. **But neither sets its own price: Shyam's carbon-steel realisation rose 2% in Q1, and Sambhv sells pipes at par with or about ₹1 a kilo below the market leader, with about 3% of the market.**",
                },
                {
                    label: 'Pricing power: thin everywhere but Aeroflex',
                    text: "**Venus**'s margin has sat at 16% for eight quarters, and its CFO says competition is there “but not as such undercutting”. **Scoda** sells through requests for quotation, and an analyst on its FY26 call said listed rivals earn 1–2 points more. **Manaksia** resets export prices each quarter, so costs pass through with a one-to-two-month lag; a shock quarter like Q4 FY26 costs about four points of margin. **Man**'s contracts are fixed-price once a tender is won, so, as CRISIL notes, later cost swings cannot be passed on. **Shyam** gets more in its niches than in bulk steel: in Q1 its foil realisation rose 32% and stainless 27%, against 2% for carbon steel, and it calls its foil “oversold”. **Only Aeroflex's assemblies and skids are priced on design rather than on the steel.**",
                },
                {
                    label: 'Barely a moat: export access',
                    text: "Exports are a large share of every company here: 65% of Manaksia's Q1 volume, 58% of Aeroflex's Q1 sales, 47% of Scoda's, 29% of Venus's (and over 40% of its order book), and over 80% of Man's Indian order book. From 1 July the EU cut its tariff-free steel quota by 47% with a 50% duty above it; Venus says the seamless-tube quota fell by 25%, and Scoda dropped a planned purchase of a Polish pipe trader because of the change. The US charges 50% on steel pipe. **Access that depends on trade rules can shrink with a single notification, which is why Man's local Saudi plant is worth more than an export order book.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Welspun Corp** (order book ₹25,750cr, net cash ₹2,336cr, with plants in Saudi Arabia and the US) and **Jindal SAW** in line pipe; **East Pipes** and **Arabian Pipes** in Saudi Arabia; **Ratnamani Metals** in stainless pipe and nuclear spooling; **JSW Steel**, **Tata BlueScope** and **AM/NS India** in coated sheet, which also supply Manaksia's steel; **Parker Hannifin** and **Senior plc** in hoses and skids; **APL Apollo** and other large makers in structural pipe, where Sambhv prices against the leader; **Jindal Stainless** in stainless coil, though in wide coil where Sambhv's narrow coil does not compete head-on; and the big integrated mills, including **Tata Steel**, against Shyam in bars and sheet. **Welspun is the benchmark for Man: the same Saudi strategy, a far larger order book and a net-cash balance sheet.**",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For converters, the question is how much value each adds on top of the steel, and whether the company's own margin matches the filed one. For the two steel makers, it is where the steel price sits in its cycle and how much of their output is something better than plain steel.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: value-added products',
                    text: "**Aeroflex** lifted its margin from 18% in Q1 FY26 to 23% as assemblies (22–26%), bellows (28–30%) and skids replaced bare hose (16–20%); it targets 25% within a few years, and held 23% in Q1 despite hiring for two new sites and paying higher freight. **Venus** has held 16% for eight quarters, down from 18–20% in FY24, and now says fittings and spools will take it to 18% only in about two years. **Scoda** says seamless earns 16–18% and welded 12–13%, so its welded expansion will dilute its blended margin. **Shyam** is trying the same shift at a larger scale: aluminium foil earned ₹53,661 a tonne in Q1 FY27 (₹36,562 in Q4), well above its ₹35,000–40,000 guide, and stainless ₹10,194 (₹8,512), but carbon steel and intermediates are still most of its tonnage, so its filed margin has stayed between 11% and 14% over the last five quarters. It talks of 14–15% as a lasting margin and “15% to 17% or 16%” by 2031. **Only Aeroflex has yet shown a margin that rises steadily with mix.**",
                },
                {
                    label: 'Cyclical: order mix and energy costs',
                    text: "**Man**'s filed margin swung between 7% and 15% over five quarters with its order mix. Gross margin went from about 22% in FY25 to 38% in FY26 on delivered-to-site contracts and coating, but fell from 54% in Q4 to 36% in Q1. The company's Q1 margin (14.6%) includes ₹12cr of other income; filed, it was 13.6%. Management now talks of 14–15% this year and 14–16% over three to five years, but says it “cannot commit to it”. **Manaksia** fell to 6% in Q4 FY26 when LPG went from ₹60 to ₹200 a kilo and freight doubled, then recovered to 11% in Q1 on orders priced to cover the new costs. **Sambhv**'s profit a tonne follows hot-rolled coil: ₹5,245 in Q3 FY26, then ₹9,355 in Q1 FY27 (₹10,002 excluding sponge-iron sales), after coil rose from about ₹45,000 to ₹56,000 a tonne from December; management said in May that cheap stock bought in Q3 also helped Q4. In August it raised its FY27 guide from ₹7,000–8,000 a tonne to ₹7,500–8,500, but expects pipe prices to ease another 3–5%. **Shyam**'s whole history is cyclical: its margin was 25% in FY22 and 12% a year later, when profit halved. **All four margins are real, but they will keep swinging.**",
                },
                {
                    label: 'Not structural: start-up and shutdown costs',
                    text: "**Scoda** lost 15–17 days of output in March when Qatari gas supply stopped, and about two weeks more in April. Its Q1 FY27 margin fell to 12.9% even though gross margin rose to 32.0%, so the squeeze was in power, gas, freight and labour, not steel. **Venus**'s new seamless, fittings and welded lines and **Aeroflex**'s Taloja and Chakan sites carry staff and depreciation ahead of sales: Aeroflex's depreciation rose from ₹6cr in FY24 to ₹26cr in FY26, so profit after tax grew 6% last year while operating profit grew 25%. **Shyam** shows the same effect below the operating line: interest rose to ₹78cr in Q1 FY27 from ₹40cr a year earlier and depreciation to ₹265cr from ₹205cr as new plants were switched on, so net profit rose 21% while operating profit rose 32%. **These costs should fade as the lines fill; Scoda's dependence on gas will not.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Scoda**'s cash cycle reached 211 days in FY26 (164 a year earlier), with 217 days of stock, after it said in November that inventory would fall. Operating cash was −₹14cr and free cash −₹130cr, and CARE Ratings lists a cycle above 150 days as a downgrade trigger. **Manaksia**'s working capital went from 20 days in FY24 to 87 in FY26 as it stocked hundreds of export sizes; operating cash turned negative (−₹14cr) and bills discounted with banks more than doubled to ₹115cr. **Both are funding growth with stock and with their lenders.**",
                },
                {
                    label: 'Working capital: heavy but steady',
                    text: "**Venus** holds 183 days of stock on Screener's measure (the company calculates 121) and runs a 124-day cycle; CRISIL puts its gross current assets at 215 days. Its operating cash rose to ₹112cr in FY26, but free cash has been negative every year since FY22. **Aeroflex**'s working capital has sat at 107–126 days for three years, heavy for a hose maker, and it raised ₹55cr of new shares in February mainly to fund it. **Neither is getting worse, but neither funds its own growth.**",
                },
                {
                    label: 'Working capital: improving, for now',
                    text: "**Man** turned ₹515cr of operating cash in FY26, 119% of operating profit, after only ₹68cr in FY25, helped by customer advances on large orders; five-year conversion is 97%. But its balance sheet is heavier than that suggests: stock was 251 days on Screener's measure, CRISIL says its bank working-capital lines were about 77% used, only about ₹300cr of its ₹657cr of cash was free of liens, and NPC will need US$100–125mn of working capital. **Shyam** and **Sambhv** run short cycles (8 and 10 days on Screener's FY26 measure) because suppliers fund their stock: Shyam held 123 days of inventory against 133 days of payables. In May Shyam's CFO agreed the stock would come down in Q1 or Q2; in July he called two to three months of stock normal. Sambhv expects its own measure to rise from 17 days in FY26 (21 in Q1) to 25–30 days once Kesda runs, needing ₹200cr more working capital in FY28 and ₹300cr in FY29. **Man's cash record is the best here, but FY27 will test it; the two steel makers' short cycles depend on supplier credit that can shrink.**",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Stainless-pipe makers stock many sizes and grades, so 120–200 days is normal; line-pipe makers work to order, often with advances; coaters hold coil in hundreds of sizes, which Manaksia says a cold-rolling mill of its own would roughly halve. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Shyam Metalics', 'Capex about ₹2,900cr in FY27 (₹575cr spent in Q1) and ₹9,580cr over three to four years, “primarily” from its own cash; debt never above 0.5 times equity (May); stock to stay at two to three months (in May it was to come down); ₹4,500cr fund-raising resolution “just enabling”', 'Borrowings ₹1,005cr, net debt ₹899cr at March (Screener); the company counts its investments and reports ₹378cr net cash; ₹654cr of those sit in alternative investment funds'],
                        ['Sambhv Steel Tubes', 'Peak debt ₹800–850cr of term loans plus ₹200–300cr of working-capital loans by March 2027, at 7.5–8% (in May: “₹800cr at max”); long-term debt capped at 1.5 times net worth; Q1 operating cash ₹92cr', 'Borrowings ₹373cr, net debt ₹289cr at March (Screener); ₹675cr Kesda loan tied up; CRISIL A+, with net debt above 3 times operating profit a downgrade trigger'],
                        ['Man Industries (I)', 'Debt to peak about ₹1,600cr by March 2027, then ₹1,400cr in FY28; FY27 interest about ₹190cr (₹152cr in FY26); FY27 capex about ₹580cr', 'Cash ₹657cr and borrowings ₹628cr at March (Screener); CRISIL: about ₹300cr of the cash unencumbered'],
                        ['Manaksia Coated Metals', 'Gross debt about ₹115cr in July, peaking at ₹125–130cr; debt to stay below 1.25 times equity', 'Net debt ₹96cr at March (Screener), plus ₹115cr of discounted bills off the balance sheet'],
                        ['Aeroflex Industries', 'No cash figure given; ₹55cr raised in February at ₹182.70 a share, mainly for working capital', 'Borrowings ₹9cr; net cash ₹61cr at March'],
                        ['Venus Pipes & Tubes', 'Net debt about ₹325cr at 30 June; FY27 capex ₹100–110cr (was ₹90–100cr)', 'Borrowings ₹287cr at March; ₹372cr share issue approved 16 Sep, vote on 8 Oct'],
                        ['Scoda Tubes', 'No Q1 call. In May: debt to peak about ₹250cr, capex about ₹100cr, no new shares', 'Borrowings ₹187cr at March; net debt ₹113cr (Screener)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so no filed Q1 operating-cash figure exists; Sambhv’s ₹92cr is from its own presentation. Scoda holds calls every six months; its line uses the May 2026 call.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call in May (Scoda's November and May calls), what its latest call says now, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: the Gulf and Man’s Saudi plant',
                    text: "NPC made SAR 793mn (about ₹1,899cr) of revenue in 2025 at a 24.8% operating margin, a rich year of Aramco orders; management expects 15–18% from here. **Man** guides about ₹1,200cr of Saudi revenue this year after only ₹43cr in Q1 (about 20 working days), plus a US$40–50mn coating and double-jointing plant in Dammam by March 2027 that should add 3–4 points to NPC's margin once Aramco places full-package orders. Its bid pipeline is ₹24,000cr, 70% in the Middle East and North Africa, and it won ₹600cr of new orders on 10 September. **The demand is there; the question is price, with about 1.05 million tonnes of new Saudi capacity due within two years.**",
                },
                {
                    label: 'Growth driver: AI data centres',
                    text: "**Aeroflex** sold 1,040 skids worth ₹32.4cr in Q1 FY27, up from 46 in Q3 FY26, and is taking capacity from 9,000 to 15,000 a year by October–November, a quarter later than planned because machine suppliers are late. At about 75% use, management puts skid revenue at ₹325–330cr a year on ₹48cr of capex. **Venus** has a ₹185cr spooling letter of intent from one data-centre owner, backed by ₹70cr of capex, with output due from the end of Q3; **Scoda** hopes to sell welded pipe to data centres from Q4 FY27 but has only enquiries so far. **The pool is new and real, but each company has one anchor customer or none.**",
                },
                {
                    label: 'Growth driver: new capacity',
                    text: "**Manaksia**'s second colour-coating line (₹65cr, 150,000 tonnes) takes painting capacity from 86,000 to 236,000 tonnes a year from Q2, and management guides ₹1,300–1,350cr of revenue this year and ₹1,700–1,750cr next; a ₹350cr second phase (a cold-rolling mill and a second Alu-Zinc line) from FY28 underpins its aim of tripling revenue by FY29. **Scoda** is adding welded pipe (13,150 tonnes in H2 FY27, 21,150 tonnes by H1 FY28) next to seamless capacity doubled to 20,068 tonnes. **Venus** now has about 48,000 tonnes, seven times its FY19 capacity. The two steel makers are building the most. **Shyam** has ₹10,041cr of projects pending, led by a ₹5,400cr hot strip mill for hot-rolled coil with only ₹169cr spent, a ₹2,940cr stainless flat-steel chain and a ₹900cr bar mill, mostly due in FY28–FY29; its Vision 2031 aims for revenue of about ₹42,500cr (about 18% a year) and operating profit of about ₹6,200cr. **Sambhv** is building a ₹935cr, 3.6 lakh-tonne stainless plant at Kesda, plus a ₹50cr pipe mill and a ₹150cr power plant, toward a 2030 aim of 2 million tonnes of finished capacity, three times today's 0.68 million. **Capacity is not the constraint for anyone here; filling it at a good price is.**",
                },
                {
                    label: 'Growth driver: moving up the value chain',
                    text: "**Venus** started fittings in May (5–7% of FY27 revenue, 8–10% in FY28) and expects spools to be 10–15% of FY28 revenue. **Man** is building a ₹600cr, 22,000-tonne stainless seamless-pipe plant in Jammu (₹350cr spent) for ₹200–300cr of first-year sales. **Aeroflex** is pushing assemblies, bellows and a data-centre fire-hose assembly for its largest US customer. **Shyam**'s Vision 2031 takes stainless revenue from ₹1,322cr to about ₹11,969cr, while speciality-alloy profit falls from ₹367cr to about ₹143cr as more alloy goes into its own stainless steel. **Sambhv** is adding thinner stainless coil (a production-linked incentive of 13–15% of eligible sales applies until about 2030–31, capped at about ₹200cr) and co-branding deals with 28 stainless pipe makers. **Each is trying to earn what the steel alone no longer pays.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Aeroflex** promised about 35% growth and a 23% margin on its May call and delivered 72% and 23.04% in Q1; skids already reached 23% of revenue against a 20–22% target for the year. **Manaksia** promised to pass on the Q4 cost spike and did, with a record ₹10,401 a tonne. **Man** closed the Saudi purchase and reaffirmed its plant dates. **Sambhv** guided ₹7,500–8,000 of operating profit a tonne for Q1 in May and made ₹10,002 excluding sponge-iron sales; in August it raised its FY27 range to ₹7,500–8,500 and its net-margin guide from 5% to 6% (±1 point), yet kept growth at 10–15%, which its own per-tonne guide would beat.",
                },
                {
                    label: 'Cautious',
                    text: "**Man** kept its plan but moved to the bottom of it: FY27 revenue went from ₹5,000–5,500cr in May to “around ₹5,000cr” in August, with India trimmed from ₹4,000cr to ₹3,800cr and Saudi from ₹1,500–2,000cr to about ₹1,200cr. That needs about ₹1,300cr a quarter for the rest of the year against ₹1,053cr in Q1. Its longer-term targets also differ by document: 30–35% growth a year on the May call, 22–25% in the chairman's letter and 20–25% revenue growth over five years in the September presentation.",
                },
                {
                    label: 'Missed',
                    text: "**Scoda** guided 20% growth and 15–16% margins for FY26 in November, with welded output from Q1 FY27; it delivered 7% and 14.7%, and moved welded to H2 FY27 because Chinese machines were late. Its FY27 guide is 25% growth at 14–15%, but Q1 ran at a ₹500cr annual pace against about ₹650cr needed, at 12.9%, with profit down 26%. It now needs about ₹175cr a quarter, more than its best quarter so far (₹152cr).",
                },
                {
                    label: 'Mixed',
                    text: "**Venus** kept its 20% growth target but grew 16% in Q1, and its margin guide went from “towards 17%” in May to “less than 17%” in August, with the MD and CFO giving different figures on the same call. The order book rose by a third to ₹600cr, but a BHEL order it expected “in 30–45 days” in May was not mentioned in August. **Manaksia** met its margin promise, but its paint line slipped from July to Q2 and its Alu-Zinc line is filling more slowly than it said. **Shyam** grew operating profit 32% in Q1, ahead of the “close to 30%” it spoke of in May, and foil beat its per-tonne guide; but volume grew 14% against a 25% plan for the year, flat steel made about ₹8,500 a tonne against ₹10,000–11,000 guided, only ₹575cr of the ₹2,900cr FY27 capex was spent, and in July it guided “more than 20–25%” growth, calling 20% a deliberately low public number. The stock reduction promised in May was dropped.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Manaksia to compound earnings at about 20% and Man at about 18% as new capacity fills, Aeroflex at about 25% if its skid customer keeps ordering, Shyam, Sambhv and Venus at about 15%, and Scoda at about 12%.** For **Shyam**, management's 22% a year of operating-profit growth to 2031 rests on plants not yet built, while interest and depreciation rise first, and carbon-steel prices can take away a year's growth, as FY23 showed. For **Sambhv**, FY27 looks better than the 10–15% it guides, but FY28 needs Kesda on time, at about 35% use, while debt roughly trebles. I have cut Scoda from 15% after this research: it missed every FY26 target, its Q1 FY27 profit fell 26%, and it needs a record ₹175cr a quarter to meet this year's guide. Man's FY27 jump is largely bought with the Saudi plant, but interest rises to about ₹190cr and Saudi prices are under pressure, so I would not pay for the 25–30% growth management talks of for FY28. At Venus, the share issue adds about 11% more shares even as it cuts interest. **The risk throughout is cash: growth that needs more stock and more plant than it returns.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Shyam Metalics', 'Stainless flat steel, hot strip mill, foil; steel prices; rising interest and depreciation', '7% / **15%** / 22%'],
                        ['Sambhv Steel Tubes', 'Kesda stainless plant; new pipe mill; coil prices; debt roughly trebles', '8% / **15%** / 24%'],
                        ['Man Industries (I)', 'Saudi plant; Gulf pipelines; Dammam coating and Jammu stainless', '10% / **18%** / 25%'],
                        ['Manaksia Coated Metals', 'Second paint line; exports; phase 2 from FY28', '10% / **20%** / 28%'],
                        ['Aeroflex Industries', 'Data-centre skids; assemblies; exports', '12% / **25%** / 35%'],
                        ['Venus Pipes & Tubes', 'Fittings and spools; domestic plants; new shares dilute', '8% / **15%** / 22%'],
                        ['Scoda Tubes', 'Welded plant; seamless use; power tenders; exports', '6% / **12%** / 17%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Shyam Metalics', 'FY27 revenue, volume and operating profit up “more than 20–25%” (was “close to 30%” in May); margin 14–15%; 2031: revenue about ₹42,500cr, operating profit about ₹6,200cr', 'About ₹2,900cr in FY27 (₹575cr in Q1); ₹10,041cr of projects pending, incl. a ₹5,400cr hot strip mill', '**Mixed**: Q1 operating profit +32%, but volume +14% against a 25% plan, headline trimmed, stock promise dropped'],
                        ['Sambhv Steel Tubes', 'FY27 revenue, volume and operating profit +10–15%; ₹7,500–8,500 a tonne (was ₹7,000–8,000); net margin 6% ±1 (was 5%); FY28 revenue about ₹4,500cr', 'Kesda ₹935cr, trial output by Q4 FY27 (CRISIL: from Q3 FY28); pipe mill ₹50cr (Q4 FY27 in May, “Q2 2028” in August); power ₹150cr', '**Beat**: Q1 ₹10,002 a tonne against ₹7,500–8,000 guided; Kesda dates disputed'],
                        ['Man Industries (I)', 'Revenue about ₹5,000cr (was ₹5,000–5,500cr); margin 14–15%; FY28 +25–30%', 'About ₹580cr in FY27: Jammu ₹600cr (₹350cr spent), Dammam US$40–50mn', '**Trimmed**: plan kept but at the low end; Jammu may be six months late (CRISIL)'],
                        ['Manaksia Coated Metals', 'Revenue ₹1,300–1,350cr this year, ₹1,700–1,750cr next; margin about 11% with 1–2 points more possible, timing unclear (10–12% in May)', '₹140cr phase 1 nearly done; ₹350cr phase 2 from FY28', '**Delivered** the margin recovery; paint line July → Q2; Alu-Zinc slower'],
                        ['Aeroflex Industries', 'Revenue about +35%; margin about 23%, 25% later', '₹48cr skids; ₹54cr hoses', '**Beat**: +72% at 23%; 15,000 skids a quarter late'],
                        ['Venus Pipes & Tubes', 'Revenue +20%; margin below 17% (was towards 17%); 18% in about two years', '₹100–110cr (was ₹90–100cr)', '**Cut**: margin guide lowered in one quarter; Q1 +16%; BHEL order unmentioned'],
                        ['Scoda Tubes', 'Revenue +25% (about ₹650cr); margin 14–15% (was 15–16%)', 'About ₹100cr: welded lines and solar', '**Missed**: FY26 growth, margin and welded date; Q1 margin 12.9%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered, including findings from the annual reports and rating reports.",
            ],
            points: [
                {
                    label: 'Governance: Shyam and Man',
                    text: "On 15 April 2026 the Enforcement Directorate provisionally attached ₹152.48cr of corporate bonds and fund units held by **Shyam**'s subsidiary Shyam SEL and Power, under the money-laundering law, in a probe into coal from illegal mining and pilferage in Eastern Coalfields areas (₹159.51cr in all, per the company's filing). The auditor added an emphasis of matter to the FY26 consolidated accounts. On the May call the chairman called it “some letter” that many steel firms had received, and the July call did not mention it. The sum is small against ₹1,060cr of annual profit, but the charge concerns where its coal came from. **Until the attachment is lifted or tested in court, it is a governance question, not only a legal one.** At **Man**, SEBI's final order of 29 September 2025, from a forensic audit, fined **Man**, its chairman, managing director and former CFO ₹25 lakh each and barred them from the securities market for two years; the appeals tribunal stayed it on 10 October 2025 and the case is pending. The income-tax department searched its premises in FY26, and the auditor put both matters under an emphasis of matter. About 20% of the promoters' shares are pledged to lenders, two promoter groups have disputed share ownership since FY15, and CRISIL lists adverse SEBI findings as a downgrade trigger. **None of this has touched the numbers yet, but a tribunal loss would revive the two-year bar on the chairman and MD.**",
                },
                {
                    label: 'Accounting flags and tax demands',
                    text: "**Manaksia**'s auditor added an emphasis of matter because receivables, advances and payables are “subject to confirmation”, and ₹115cr of bills discounted with banks (₹54.6cr a year earlier) sit outside debt as a contingent liability; it has also lent ₹4.45cr to a loss-making snacks subsidiary now being merged in. **Aeroflex** faces a ₹41.76cr income-tax demand for 2018-19, about three-quarters of FY26 profit, which treats bank interest waived before its current owners bought it as income; it has appealed and says the income was disclosed. **Man** has ₹106cr of receivables in arbitration, its income-tax disputes doubled to ₹76.5cr, and about 40% of its FY26 revenue was booked in a Taiwan branch audited by another firm. **Shyam**'s auditor found the audit trail (the log of changes to accounting records) not enabled at database level in one accounting system and could not check it in a second, run by an outside firm. Shyam also holds ₹654cr in alternative investment funds valued without market prices (₹215cr a year earlier), with ₹507.5cr more committed across the group, and its contingent liabilities rose to ₹723cr, including ₹323cr of discounted bills. **Sambhv**'s audit is clean and its contingent liabilities are under ₹3cr.",
                },
                {
                    label: 'One customer, one letter, one tender',
                    text: "**Aeroflex**'s skids, 23% of Q1 sales and most of its growth, go to one exclusive partner that fixes dispatches only two months ahead, and its largest export customer is about a quarter of sales. **Venus**'s spooling plan rests on one letter of intent that is not yet a firm order. **Man**'s year rests on a handful of large bids while Saudi Arabia adds about 40% more welded-pipe capacity; management admits “some pressure on prices” but denies a price war. **Scoda** has waited since late 2025 for a BHEL tender that keeps slipping.",
                },
                {
                    label: 'Trade rules',
                    text: "The EU's new safeguard (from 1 July, with a review in June 2027) and the US 50% tariff hit the exporters: **Scoda** (47% of Q1 revenue), **Manaksia** (65% of volume, mostly Europe, Africa and Latin America, none to the US), **Venus** (29%, with exports down 9% in Q1) and **Aeroflex** (58%, with 59% of FY26 exports going to the Americas). India's own safeguard duty helps the mills, and indirectly Shyam and Sambhv, whose prices follow domestic steel, not converters such as Man and Manaksia that buy from mills; but India's relaxed stainless quality-control order lets some uncertified Chinese coil in, and **Sambhv**'s managing director expects stainless margins to be “softer” once shipping normalises. **Europe is the market most likely to shrink further; the EU's carbon border tax also moved to its full phase in January.**",
                },
                {
                    label: 'Cash, debt and dilution',
                    text: "**Man**'s borrowings rise about two and a half times to roughly ₹1,600cr by March 2027 and interest to about ₹190cr; CRISIL expects gearing of 0.6–0.7 times equity, up from 0.25. **Venus** approved a ₹372cr preferential issue at ₹1,670 a share, about 26% below the market, to 18 outside investors; the vote is on 8 October, and it adds about 11% more shares. **Manaksia** has issued warrants at ₹18 and ₹65 (the share is now about ₹132) and plans more equity for phase 2. **Scoda** expects debt to rise ₹50cr to about ₹250cr while its cash cycle sits above CARE's trigger. **Sambhv** plans 86.95 lakh warrants at ₹115 (₹100cr, about 3% more shares) for promoters and management, about 28% below the current price; the price follows SEBI's formula on past average prices, NSE queried the notice (the company replied on 17 September), and part of the money goes to a subsidiary project not yet named. Its debt roughly trebles by March 2027. **Shyam** passed a ₹4,500cr fund-raising resolution that management calls “just enabling”, and its Vision 2031 slide shows gross debt rising from ₹957cr to about ₹4,226cr, although other slides speak of no outside debt. **Growth here is being paid for by lenders and new shareholders, not by cash from operations.**",
                },
                {
                    label: 'Execution and dates',
                    text: "**Man**'s annual report says the Jammu plant was deferred by land-acquisition delays, and CRISIL expects completion in September 2027, six months after management's date; the Dammam plant's capacity was given as 4 million square metres in May and 4 lakh in August. **Aeroflex**'s last 6,000 skids and its extra hose capacity each slipped a quarter. **Scoda** holds calls only twice a year and discloses no volumes or prices, and investors complained on its FY26 call that results came late. **Sambhv** says its Kesda stainless plant is on time for trial output by Q4 FY27, but its own July schedule showed melt-shop civil work 30–40% done, equipment erection not started and rolling-mill erection about 20% done, and CRISIL's August report expects production from Q3 FY28, at least two quarters later. **Shyam**'s ₹10,041cr of pending projects include products it has never made (stainless flat steel, special bar, railway wagons, battery foil). **Treat dates in this group as targets, not commitments.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **14% at 21x, 17% at 27–28x, 18% at 31x, 20% at 35x, 23% at 44x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Shyam's and Manaksia's prices fit my estimates; Man, Sambhv and Scoda are full, and Venus and Aeroflex are stretched.**",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Man** and **Aeroflex** held net cash at March, so they look a little cheaper on EV/EBITDA than on P/E; but Man's net cash will turn into about ₹1,600cr of debt within a year, which the March figure does not show. **Venus**, **Manaksia** and **Scoda** carry debt the P/E ignores, and Manaksia's ₹115cr of discounted bills are not in the figure either. Venus's share issue, if approved, would roughly clear its ₹325cr of net debt. **Shyam** looks much cheaper on EV/EBITDA than on P/E because ₹882cr of depreciation a year from its new plants sits between operating profit and net profit. Screener counts ₹899cr of net debt; the company counts its investments and reports ₹378cr of net cash, but part of that is in fund units valued without market prices and ₹152cr is under attachment. **Sambhv**'s ₹289cr of net debt will roughly treble within a year, which today's EV/EBITDA does not show.",
                },
                {
                    label: 'Fits: Shyam and Manaksia',
                    text: "**Shyam** needs about {need:Shyam Metalics|17}% a year against my ~15%, close enough to count as a fit. Management's July guide of “more than 20–25%” for FY27 would clear it, but carbon-steel prices, not guidance, set its earnings, and its return on equity is under 10% on Screener's measure while ₹10,041cr of plants are built. **Follow, and buy on a cyclical dip rather than at a peak.** **Manaksia** needs about {need:Manaksia Coated Metals|19–20}% a year against my ~20% estimate; management's own FY27 guide implies much faster growth this year, so the price is not demanding if the paint line fills. **For both, the reason to follow rather than own is cash and risk, not valuation.**",
                },
                {
                    label: 'Full: Man, Sambhv and Scoda',
                    text: "**Man**'s price needs about {need:Man Industries (I)|20}% a year against my ~18%, a little more than I expect. FY27 earnings should jump as NPC is consolidated, so the question is FY28 and beyond, when the Dammam and Jammu plants must earn their keep and interest has risen. **A strong position, but at a full price and with governance questions open: follow, and buy on weakness or once NPC runs at ₹300cr-plus a quarter.** **Sambhv** needs about {need:Sambhv Steel Tubes|17}% a year against my ~15%. Its FY27 guide of 10–15% growth looks low against its own per-tonne guide, which implies 20–40% more operating profit, but FY28 depends on Kesda arriving on time while debt and interest rise. **Follow until Kesda's equipment is visibly going in.** **Scoda** needs about {need:Scoda Tubes|14}% a year against my ~12%; the price is modest in absolute terms, but its record since listing is a string of misses and its working capital sits above the rating trigger, so **wait**.",
                },
                {
                    label: 'Stretched: Venus and Aeroflex',
                    text: "**Venus** needs about {need:Venus Pipes & Tubes|23}% a year against my ~15%, from a company whose profit has been flat for over two years and which is issuing shares at a 26% discount to its market price. **Aeroflex** needs about {need:Aeroflex Industries|33}% a year against my ~25%; it is growing faster than that today, but the price assumes skids keep scaling with one customer and no patents. **Both are good businesses at prices that leave no room for a slip.**",
                },
                {
                    label: 'Quality of earnings',
                    text: "**Man**'s FY26 profit absorbed about ₹25cr of currency losses on Jammu equipment, and its FY25 included ₹369cr of one-off real-estate revenue. **Scoda**'s FY26 profit was helped by depreciation halving to ₹9cr and by ₹11cr of other income on IPO cash. **Manaksia**'s and Man's own EBITDA figures include other income, and so do Shyam's (₹812cr in Q1 against ₹765cr filed; ₹204cr of other income in FY26) and Sambhv's (₹100cr against ₹95cr). **Shyam** presents a 13% return on equity for FY26; Screener's figure is 9.7%, because a large pile of cash, fund units and unfinished plants earns little. **Sambhv**'s Q4 FY26 was helped by cheap stock bought in Q3. **Use the filed operating margin, not the company's headline.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Shyam Metalics', rank: 1, stance: 'CYCLICAL', segment: INTEGRATED,
            what: "Makes steel from iron ore in east India (pellets, sponge iron, billets, bars, wire rods, sheet, ferro alloys and stainless long products) plus aluminium foil, with 467 MW of its own power; carbon steel is about 39% of revenue.",
            view: "**A strong balance sheet and a price that fits, on a cyclical business: follow.** Q1 FY27 operating profit rose 32% to ₹765cr at a 14% margin, it holds a CRISIL AA+ rating, and Vision 2031 aims for about ₹6,200cr of operating profit. But in July it pared FY27 growth to “more than 20–25%” from “close to 30%” in May, free cash has been negative for four years with ₹10,041cr of projects to build, and the ED has attached ₹152cr of a subsidiary's investments, flagged by the auditor. The price asks for about {need:Shyam Metalics|17}% a year against my ~15%, close enough to fit.",
            watch: 'The ED attachment and the auditor’s emphasis of matter; free cash flow as capex peaks; the hot strip mill and stainless flat plant against their FY28–FY29 dates.',
        },
        {
            company: 'Man Industries (I)', rank: 2, stance: 'SCALEUP', segment: CARBON,
            what: "Makes large-diameter welded steel pipes, and coats them, for oil, gas and water pipelines in India and the Gulf; since May 2026 it also owns National Pipe Company, an Aramco-approved plant in Saudi Arabia.",
            view: "**A strong position at a full price: follow.** Filed margin up from 8% to 14%, a ₹3,600cr order book, 119% cash conversion in FY26 and a Saudi plant bought for about 1.5 times its 2025 operating profit. But FY27 revenue guidance slipped to the low end (about ₹5,000cr), debt peaks near ₹1,600cr, the Jammu plant may be six months late, and a stayed SEBI order and an income-tax search sit in the auditor's report. The price asks for a little more than my ~18% estimate.",
            watch: 'NPC revenue of ₹300–500cr a quarter from Q2; the Dammam and Jammu start dates against CRISIL’s September 2027; the SEBI appeal and the promoter pledge.',
        },
        {
            company: 'Manaksia Coated Metals', rank: 3, stance: 'SCALEUP', segment: CARBON,
            what: "Coats cold-rolled steel with aluminium-zinc (Alu-Zinc) and paints it for roofing, cladding and appliances, about two-thirds exported, from a port-side plant in Kutch, Gujarat.",
            view: "**Capacity nearly tripling into export demand, at a price that fits.** A record ₹10,401 a tonne in Q1, margin back to 11%, and guidance of ₹1,300–1,350cr this year against ₹884cr in FY26. But operating cash was negative in FY26, ₹115cr of bills are discounted off the balance sheet, the auditor flagged unconfirmed balances, and more equity is planned. The price asks for about my ~20% estimate.",
            watch: 'The second paint line at 50–60% in H2; operating cash turning positive and discounted bills falling; how phase 2 is funded.',
        },
        {
            company: 'Sambhv Steel Tubes', rank: 4, stance: 'SCALEUP', segment: INTEGRATED,
            what: "Makes steel pipes, galvanised coil and pipe, and narrow stainless-steel coil at Raipur, Chhattisgarh, from its own iron-ore-based steel; listed in July 2025 and building a ₹935cr stainless plant at Kesda.",
            view: "**Delivering so far, with one big project ahead: follow.** FY26 volume rose 37%, Q1 FY27 earned ₹10,002 a tonne (excluding sponge iron) against ₹7,500–8,000 guided in May, and in August it raised its FY27 guide to ₹7,500–8,500. But profit follows hot-rolled coil prices, debt roughly trebles for Kesda, which CRISIL expects from Q3 FY28 rather than management's Q4 FY27, and promoter warrants are priced about 28% below the market. The price asks for about {need:Sambhv Steel Tubes|17}% a year against my ~15%.",
            watch: 'Equipment erection and trial output at Kesda by March 2027; profit a tonne within the ₹7,500–8,500 guide as pipe prices ease; the warrant money and the unnamed subsidiary project.',
        },
        {
            company: 'Scoda Tubes', rank: 5, stance: 'SCALEUP', segment: STAINLESS,
            what: "Makes stainless-steel seamless pipes and tubes from its own mother hollow at Mehsana, Gujarat, for power, oil and gas and heat-exchanger makers; listed in June 2025 and adding welded pipe.",
            view: "**A modest price for a company that keeps missing.** It guides 25% growth at 14–15% margins, but missed its FY26 revenue, margin and plant targets; Q1 FY27 margin was 12.9% with profit down 26%, and its 211-day cash cycle is above CARE's 150-day trigger. The price asks for a little more than my ~12% estimate.",
            watch: 'Welded output in H2 FY27; revenue near ₹175cr a quarter; inventory back toward 160 days.',
        },
        {
            company: 'Venus Pipes & Tubes', rank: 6, stance: 'PRICED', segment: STAINLESS,
            what: "Makes stainless-steel seamless and welded pipes in Kutch, Gujarat, now adding fittings and pre-built piping sections (spools), for power, chemicals, oil and gas and data centres.",
            view: "**Fast growth, flat profit, new shares.** Sales grew 28% a year for three years and the order book reached ₹600cr plus a ₹185cr data-centre letter of intent, but quarterly profit has sat at ₹24–28cr since early 2024, the FY27 margin guide was cut below 17%, and a ₹372cr share issue at about 26% below market goes to a vote on 8 October. The price needs far more than my ~15% estimate.",
            watch: 'The share-issue vote on 8 October; spool revenue from Q3 and the letter of intent turning firm; margin above 17%.',
        },
        {
            company: 'Aeroflex Industries', rank: 7, stance: 'PRICED', segment: STAINLESS,
            what: "Makes stainless-steel flexible hoses, assemblies and bellows, mostly for export, and since late FY26 liquid-cooling skid assemblies for Indian data centres.",
            view: "**The best operator here, priced for years of it.** Q1 revenue up 72% at a 23% margin, skids already 23% of sales, and net cash. But every skid goes to one customer, it has no patents on them, free cash was negative in FY25 and FY26, and a ₹41.8cr tax demand is under appeal. The price needs far more than my ~25% estimate.",
            watch: '15,000-unit skid capacity by November; a second skid customer or first export skid order; the tax appeal.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Integrated steel makers.** **Shyam Metalics: follow.** The largest company here, with a strong balance sheet and a price that fits my estimate, but a cyclical business with ₹10,041cr of plants to build, four years of negative free cash and an ED attachment the auditor highlights. **Sambhv Steel Tubes: follow.** A low-cost maker beating its own guidance, but its Kesda stainless plant must arrive on time while debt roughly trebles, and the promoters' warrants are cheap.",
            "**Carbon-steel line pipe and coated sheet.** **Man Industries: follow.** The best cash record here, a cheap Saudi purchase and Aramco approval, but guidance at the low end, debt rising to about ₹1,600cr and a governance record that deserves a discount. **Manaksia Coated Metals: follow.** The price fits and the new line should lift earnings; cash and funding must follow.",
            "**Stainless-steel pipes, tubes and hoses.** **Scoda Tubes: wait.** A modest price, but a little more than I now expect, until its cash cycle falls back below CARE's trigger and it hits a target. **Venus Pipes: wait** until profit grows with revenue and the share issue settles. **Aeroflex: wait.** A real data-centre business, priced for years of it.",
            "**What would change my view.** For the better: the ED attachment on Shyam's subsidiary lifted and its free cash turning positive; Kesda's equipment going in on schedule; NPC running at ₹300–500cr a quarter with Man's margin at 14% or more; Manaksia's operating cash turning positive; Aeroflex winning a second skid customer; Venus's margin above 17%. For the worse: carbon-steel prices falling as new mill capacity arrives; Kesda slipping into FY28 as cheaper Chinese stainless coil returns; a tribunal loss for Man's chairman and MD; Saudi pipe prices falling as new capacity arrives; the EU tightening its quota further; a rating cut for Scoda.",
            "**What to watch next quarter.** Shyam's volumes, capex spend and the ED case; Sambhv's Kesda progress and profit a tonne; Man's Saudi revenue and debt; Manaksia's paint line and cash; Aeroflex's skid capacity; Venus's share-issue vote and spool start; Scoda's welded plant and half-year cash flow.",
        ],
        bottomLine:
            "No company here is a clear buy today. Follow Shyam Metalics, where the price fits a cyclical steel maker, Man Industries, a strong position at a full price, Manaksia Coated Metals, where the price fits but cash must follow, and Sambhv Steel Tubes, until its Kesda plant is visibly on time; wait on Scoda Tubes, Venus Pipes and Aeroflex Industries until their cash, or their price, catches up with their growth.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/MANINDS/consolidated/' },
        { label: 'Wholesale price index, steel products — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Steel industry trends and outlook, May 2026 — ICRA', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6940' },
        { label: 'India to remain among the fastest-growing steel markets in FY27 — India Ratings, via Autocar Professional', url: 'https://www.autocarpro.in/news/india-to-remain-among-fastest-growing-steel-markets-in-fy27-despite-global-oversupply-ind-ra-133883' },
        { label: 'Primary steelmakers to earn ₹10,500–11,000 a tonne in FY27 — CRISIL Ratings, via Investment Guru India', url: 'https://investmentguruindia.com/newsdetail/primary-steelmakers-may-sustain-operating-profitability-at-rs-10-500-11-000-per-tonne-in-fy27-crisil257114' },
        { label: 'Indian steel prices set to rise further — Reuters, via Kitco', url: 'https://www.kitco.com/news/off-the-wire/2026-09-08/indian-steel-prices-set-rise-further-coking-coal-costs-demand-revival' },
        { label: 'India safeguard duty on flat steel — SEAISI', url: 'https://www.seaisi.org/details/27708?type=news-rooms' },
        { label: 'New EU safeguard on steel imports — European Commission, Access2Markets', url: 'https://trade.ec.europa.eu/access-to-markets/en/news/new-eu-safeguards-steel-imports-third-countries' },
        { label: 'US Section 232 tariffs now on full customs value — GHY International', url: 'https://www.ghy.com/trade-compliance/us-adjusts-section-232-tariffs-on-aluminum-steel-and-copper-full-customs-value-now-applies/' },
        { label: 'Natural gas pipeline network, June 2026 — PNGRB', url: 'https://pngrb.gov.in/data-bank/20260630_NGPL.pdf' },
        { label: 'Stainless steel outlook 2026, citing ISSDA and nickel forecasts — JSL Global Commodities', url: 'https://jslgc.com/stainless-steel-trading-market-outlook-2026-global-supply-shifts-and-indias-demand-engine/' },
        { label: 'Welspun Corp: Q1 FY27 earnings call transcript', url: 'https://www.welspuncorp.com/uploads/investor_data/investorreport_Financial%20year%202026%20-%202027_1713.pdf' },
        { label: 'Shyam Metalics: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2946942a-653e-4209-b905-1755f5414122.pdf' },
        { label: 'Shyam Metalics: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9bb4a6f0-691c-48ed-8f4c-ac1ec4db019d.pdf' },
        { label: 'Shyam Metalics: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/08f7bbef-7200-4d63-b9e2-0448e2848832.pdf' },
        { label: 'Shyam Metalics: rating rationale, November 2025 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ShyamMetalicsandEnergyLimited_November%2005_%202025_RR_381110.html' },
        { label: 'Sambhv Steel Tubes: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8ac69c55-8776-42b6-8d32-a14e928b0a6a.pdf' },
        { label: 'Sambhv Steel Tubes: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f0f4c742-6e27-4bdc-9954-ce814a2d40d5.pdf' },
        { label: 'Sambhv Steel Tubes: rating rationale, August 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/SambhvSteelTubesLimited_August%2017_%202026_RR_400992.html' },
        { label: 'Sambhv Steel Tubes: reply to NSE on the warrant issue, 17 Sep 2026 (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6676328b-2174-4533-9e1f-88a5f74afd2a.pdf' },
        { label: 'Man Industries: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9627e5dc-a6a3-40e6-b412-2313a0e99f33.pdf' },
        { label: 'Man Industries: corporate presentation, September 2026 (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=77e49d9f-1b07-4dd0-9b72-b5945c81e6ea.pdf' },
        { label: 'Man Industries: Q1 FY27 earnings call transcript', url: 'https://mangroup.com/wp-content/uploads/2026/08/Concall-Transcript_12.08.2026.pdf' },
        { label: 'Man Industries: rating rationale, June 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ManIndustriesIndiaLimited_June%2001_%202026_RR_397079.html' },
        { label: 'Manaksia Coated Metals: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=318fe867-a8e8-495e-bac4-26169558a2ff.pdf' },
        { label: 'Manaksia Coated Metals: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3e1855ce-f42b-402f-9c1c-c6060517efc4.pdf' },
        { label: 'Aeroflex Industries: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=667a7c2b-69e4-4a7c-862a-b051b31878d7.pdf' },
        { label: 'Aeroflex Industries: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/495241e9-b8bc-421c-a545-e105b1907145.pdf' },
        { label: 'Venus Pipes & Tubes: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7a16fc29-a391-420a-9ecb-36eca90f1c10.pdf' },
        { label: 'Venus Pipes & Tubes: board outcome on the preferential issue, 16 Sep 2026 (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ba5d64d6-69fd-464e-8fbe-0a30be31acc4.pdf' },
        { label: 'Venus Pipes & Tubes: rating rationale, June 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/VenusPipesandTubesLimited_June%2023_%202026_RR_398750.html' },
        { label: 'Scoda Tubes: FY26 earnings call transcript (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0dfc17fa-14d6-40d5-8a2c-e1dcdd5c9842.pdf' },
        { label: 'Scoda Tubes: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6d20b9c6-00d5-4ba9-a996-f35673ed2f54.pdf' },
        { label: 'Scoda Tubes: rating rationale, December 2025 — CARE Ratings', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202512141235_Scoda_Tubes_Limited.pdf' },
    ],
};
