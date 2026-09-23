import { SectorOverview } from './types';
import { ironSteelBusinesses } from './iron-steel-businesses';
import { ironSteelValuationInputs } from './card-data/iron-steel';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CARBON = 'Carbon-steel line pipe and coated sheet — big orders, thin spreads';
const STAINLESS = 'Stainless-steel pipes, tubes and hoses — value added on alloy';

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
            'Scoda Tubes': 15,
        },
    },
    standfirst:
        "Five companies that turn steel into something more useful, not steel mills. Man Industries makes large pipes for oil, gas and water pipelines and has just bought a plant in Saudi Arabia. Manaksia coats and paints steel sheet, mostly for export. Venus and Scoda make stainless-steel pipes and tubes, and Aeroflex makes stainless-steel flexible hoses and, suddenly, cooling equipment for AI data centres. Their profit depends on how much they add on top of the steel and how quickly they turn orders into cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): Venus and Scoda standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'Aeroflex earns the most because assemblies and data-centre skids earn more than plain hose. Manaksia’s margin recovered in Q1 after it passed on the Q4 spike in LPG and freight costs.',
            values: {
                'Man Industries (I)': [7, 15, 15, 12, 14],
                'Manaksia Coated Metals': [10, 12, 9, 6, 11],
                'Aeroflex Industries': [18, 23, 23, 24, 23],
                'Venus Pipes & Tubes': [16, 16, 16, 16, 16],
                'Scoda Tubes': [15, 15, 15, 14, 13],
            },
            cellNotes: {
                'Scoda Tubes': 'Latest call is for Q4 FY26; a gas shortage stopped its piercing plant for a time in early FY26.',
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
            note: 'Aeroflex and Venus have fallen from the mid-30s to about 20% as new plants came in ahead of their sales.',
            values: {
                'Man Industries (I)': [16, 10, 14, 16, 16],
                'Manaksia Coated Metals': [13, 10, 15, 15, 18],
                'Aeroflex Industries': [36, 34, 26, 22, 19],
                'Venus Pipes & Tubes': [37, 23, 28, 25, 21],
                'Scoda Tubes': [null, 16, 20, 20, 17],
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
            note: 'Stainless-steel pipe makers hold a lot of stock across many sizes and grades; Scoda’s rose above 200 days when its piercing plant stopped.',
            values: {
                'Man Industries (I)': [-8, 95, 63, 104, 114],
                'Manaksia Coated Metals': [75, 66, 68, 53, 96],
                'Aeroflex Industries': [84, 132, 116, 129, 112],
                'Venus Pipes & Tubes': [133, 123, 114, 132, 124],
                'Scoda Tubes': [189, 151, 162, 164, 211],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Only Man reaches it over five years; Venus, Manaksia and Scoda have turned most of their profit into stock and receivables.',
            values: {
                'Man Industries (I)': [249, -88, 143, 23, 117, 97],
                'Manaksia Coated Metals': [-37, 24, 43, 56, -18, 13],
                'Aeroflex Industries': [68, 13, 71, 34, 66, 51],
                'Venus Pipes & Tubes': [-122, 13, 36, 41, 59, 29],
                'Scoda Tubes': [null, 57, 3, 36, -18, -4],
            },
            cellNotes: {
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
            note: 'Four of the five have spent more than they earned while building new lines; Venus and Scoda most heavily.',
            values: {
                'Man Industries (I)': [18.9, -14.7, 7.3, -2.5, 4.9, 2.7],
                'Manaksia Coated Metals': [-2.0, -0.4, 1.9, 1.1, -6.5, -1.4],
                'Aeroflex Industries': [7.9, -0.7, 1.9, -20.7, -1.1, -3.6],
                'Venus Pipes & Tubes': [-20.9, -27.7, -6.9, -4.1, -6.6, -10.5],
                'Scoda Tubes': [-42.3, -2.6, -8.5, -4.5, -25.0, -14.5],
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
            note: 'Below zero means more cash than debt. Man and Aeroflex held net cash at March 2026, but Man expects debt to peak at about ₹1,600cr this year to fund new plants.',
            values: {
                'Man Industries (I)': [-1.6, 1.0, -0.7, 0.2, -0.2],
                'Manaksia Coated Metals': [4.4, 5.2, 3.1, 2.2, 1.2],
                'Aeroflex Industries': [0.7, 0.7, -1.7, -0.3, -0.6],
                'Venus Pipes & Tubes': [1.2, 0.9, 1.0, 1.1, 1.4],
                'Scoda Tubes': [10.9, 3.7, 3.1, 2.1, 1.5],
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
            note: 'Venus, Scoda and Aeroflex have spent 14–15% of sales a year on new capacity.',
            values: {
                'Man Industries (I)': [2.2, 9.3, 3.7, 4.4, 9.5, 5.9],
                'Manaksia Coated Metals': [0.0, 1.6, 1.0, 2.8, 4.9, 2.3],
                'Aeroflex Industries': [5.4, 3.3, 11.9, 27.9, 16.1, 14.3],
                'Venus Pipes & Tubes': [5.4, 29.3, 13.3, 11.3, 16.2, 15.2],
                'Scoda Tubes': [18.0, 9.2, 9.0, 10.3, 22.4, 13.9],
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
            note: 'Falling at Venus, Scoda and Aeroflex as new plants are built ahead of sales.',
            values: {
                'Man Industries (I)': [6.7, 4.0, 5.2, 5.5, 4.1],
                'Manaksia Coated Metals': [5.0, 5.3, 6.2, 7.0, 5.3],
                'Aeroflex Industries': [5.2, 4.8, 3.8, 2.2, 2.1],
                'Venus Pipes & Tubes': [18.4, 9.2, 2.8, 3.1, 2.9],
                'Scoda Tubes': [17.6, 4.9, 4.9, 6.0, 2.8],
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
            note: 'Man works on large pipeline orders months ahead; the others sell on shorter cycles. Aeroflex does not publish an order book.',
            values: {
                'Man Industries (I)': [0.9],
                'Manaksia Coated Metals': [0.5],
                'Aeroflex Industries': [null],
                'Venus Pipes & Tubes': [0.5],
                'Scoda Tubes': [0.3],
            },
            cellNotes: {
                'Man Industries (I)': 'About ₹3,600cr across India and Saudi Arabia.',
                'Venus Pipes & Tubes': 'More than ₹600cr, plus a ₹185cr letter of intent for data-centre piping not yet booked.',
                'Manaksia Coated Metals': 'About ₹450cr.',
                'Scoda Tubes': 'About ₹175cr at Q4 FY26.',
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
                "**Man Industries is the one to own.** It makes large-diameter pipes for oil, gas and water pipelines, and has just bought National Pipe Company in Saudi Arabia, which gives it a local plant with Aramco approval, where buyers prefer local supply. It guides about ₹5,000cr of revenue this year (up from about ₹3,900cr over the last four quarters) at 14–16% margins, has a ₹3,600cr order book, and is the only company here that has turned its profit into cash over five years. Debt will rise to about ₹1,600cr this year to fund a coating plant in Dammam and a stainless-steel plant in Jammu.",
                "**Follow Manaksia Coated Metals.** It coats and paints steel sheet for export, earned a record ₹10,400 a tonne in Q1 and is nearly tripling colour-coating capacity; management guides revenue up about 45% this year. But it has turned almost none of its profit into cash over five years.",
                "**Wait on Aeroflex, Venus and Scoda.** Aeroflex's data-centre cooling skids have transformed its growth, but they depend on one customer and the price assumes years of it. Venus and Scoda make good stainless-steel pipes but keep spending more than they earn, and Venus's profit has been flat for several quarters despite its growth.",
                "**Two things to hold onto before reading the rest.** First, **these are converters, not mills**: they buy steel and sell a product, so the margin depends on how much value they add and how fast they pass on cost changes. Second, **cash is the weak point**: four of the five have spent more than they earned over five years building new lines.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed results (Venus and Scoda standalone). Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Steel leaves the mill as coil, plate or bar. These companies turn it into pipes, hoses and coated sheet.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Steel mill → **coil and plate** → large welded line pipe (Man) or coated and colour-coated sheet (Manaksia). Stainless-steel bar → **mother hollow** (a rough tube pierced from bar) → finished **seamless** pipe and tube (Venus, Scoda). Stainless strip → **welded** pipe and flexible hose (Venus, Scoda, Aeroflex) → assemblies. **The profit sits in the added value**: coating, assemblies, spooling and approvals, not in the steel itself.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Oil, gas and water pipelines in India and the Gulf (Man); roofing and cladding abroad (Manaksia); power plants, chemicals, pharma and oil and gas (Venus, Scoda); and AI data centres, which need liquid cooling and high-grade piping (Aeroflex, Venus).",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Steel and nickel prices move revenue, not usually margin**, because most orders pass on raw-material costs. Energy matters more this year: LPG and gas prices spiked, hitting Manaksia in Q4 and stopping Scoda's piercing plant for a time. Trade rules matter: Europe is cutting its import quota for seamless steel tubes and charging a steep duty above it, which threatens Venus's and Scoda's exports.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Man** depends on pipeline projects in India and the Gulf and on running its Saudi plant well; **Manaksia** on export demand and its new colour-coating line; **Aeroflex** on one data-centre customer; **Venus** on value-added products and domestic demand; **Scoda** on its welded plant and tenders from BHEL and NTPC. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Carbon-steel line pipe and coated sheet', 'Man, Manaksia', '6–15%', '16–18%', '**13–97%**'],
                        ['Stainless-steel pipes, tubes and hoses', 'Aeroflex, Venus, Scoda', '13–24%', '17–21%', '**−4% to 51%**'],
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
                    text: "Oil companies approve pipe suppliers slowly and rarely switch. **Man** already had approvals across the Gulf; buying National Pipe Company added a local Saudi plant with long-standing Aramco approval, where the buyer favours local supply.",
                },
                {
                    label: 'Lasting but narrow: products built with the customer',
                    text: "**Aeroflex** co-develops each data-centre cooling skid with its customer, so switching would mean redesigning the cooling system. But management says it holds no patents on the skids, and one customer accounts for this business.",
                },
                {
                    label: 'Wearing: plain pipe and plain sheet',
                    text: "Basic stainless pipe and galvanised sheet have many makers. **Venus**, **Scoda** and **Manaksia** are all moving to value-added products (fittings, spooling, welded large-diameter pipe, colour-coated sheet) because the basic product earns too little.",
                },
                {
                    label: 'Barely a moat: export access',
                    text: "Europe is an important market for Indian stainless tubes, and it is cutting its import quota; exporters above the quota face a steep duty. Access that depends on trade rules can shrink quickly.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Welspun Corp**, **Jindal SAW** and **Ratnamani Metals** in line pipe and stainless pipe; **East Pipes** and **Arabian Pipes** in Saudi Arabia; **JSW Steel** and **Tata Steel** in coated sheet; **Parker Hannifin** in flexible hoses and flow control.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For converters, the question is how much value each adds on top of the steel.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: value-added products',
                    text: "**Aeroflex** has lifted its margin to about 23% as assemblies and skids replace plain hose and targets 25%. **Venus** has held 16% and aims for 18% in FY28 from fittings and spooling. **Scoda** guides 14–15%.",
                },
                {
                    label: 'Cyclical: order mix and energy costs',
                    text: "**Man**'s margin swings with the mix of pipeline orders (7% to 15% over five quarters); it guides 14–16% this year and expects its Saudi plant to earn 15–18%. **Manaksia**'s fell to 6% in Q4 on LPG and freight costs and recovered to 11% in Q1 once passed on.",
                },
                {
                    label: 'Not structural: start-up and shutdown costs',
                    text: "**Scoda**'s gas-related shutdown and **Venus**'s new lines (with profit flat while capacity ramps) weigh on today's figures; they should fade as the lines fill.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Scoda**'s cycle rose above 200 days when its plant stopped, and it has had negative operating cash over five years. **Manaksia** holds stock across many colours and grades; its working capital stretched in Q1.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Venus** and **Aeroflex** are funding growth with stock; Venus explained that working-capital debt is holding back profit after tax.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Man**'s large orders come with customer advances, which is why its cash conversion swings but averages well over five years.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Stainless-pipe makers must stock many sizes and grades; line-pipe makers work to order. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: pipelines in India and the Gulf',
                    text: "**Man** expects National Pipe Company to add ₹1,200–1,500cr of revenue this year (management gave both figures), is building a coating plant in Dammam and a ₹600cr stainless-steel plant in Jammu (both due around March 2027), and sees a large bid pipeline as Gulf buyers diversify supply.",
                },
                {
                    label: 'Growth driver: AI data centres',
                    text: "**Aeroflex** is expanding skid capacity from 9,000 to 15,000 units a year (delayed to Q3 by machinery suppliers) and has begun exporting data-centre hoses. **Venus** has a ₹185cr letter of intent for data-centre piping.",
                },
                {
                    label: 'Growth driver: new lines',
                    text: "**Manaksia** is raising colour-coating capacity from 86,000 to 236,000 tonnes a year in Q2 and guides ₹1,300–1,350cr of revenue this year and ₹1,700–1,750cr next. **Scoda** is adding a welded-pipe plant (8,000 tonnes in H2 FY27, 21,150 tonnes by H1 FY28) and guides 25% revenue growth.",
                },
                {
                    label: 'Growth driver: moving up the value chain',
                    text: "**Venus** commissioned fittings in May and a spooling plant is due in Q3 (pre-built piping sections delivered ready to install).",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Man** closed its Saudi purchase and kept its plants on schedule. **Aeroflex** grew 73% and lifted its margin. **Manaksia** passed on its cost spike and hit record profit per tonne.",
                },
                {
                    label: 'Cautious',
                    text: "**Venus** now says its margin will stay below 17% this year, pushing its 18% target to FY28.",
                },
                {
                    label: 'Missed',
                    text: "**Scoda**'s welded plant slipped from Q1 to H2 FY27 because of equipment delays from China. **Aeroflex**'s 15,000-unit capacity slipped to Q3.",
                },
                {
                    label: 'Mixed',
                    text: "**Venus**'s revenue has grown fast but its quarterly profit has stayed flat, and its exports face shipping problems and a smaller EU quota.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Man and Manaksia to compound earnings at 18–20% as new capacity arrives, Aeroflex at about 25% if its data-centre customer keeps ordering, and Venus and Scoda at about 15%.** The risk throughout is cash: growth that needs more stock and more plant than it returns.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Man Industries (I)', 'Saudi plant; pipelines; coating and stainless plants', '10% / **18%** / 25%'],
                        ['Manaksia Coated Metals', 'Colour-coating capacity; exports', '10% / **20%** / 28%'],
                        ['Aeroflex Industries', 'Data-centre skids; assemblies', '12% / **25%** / 35%'],
                        ['Venus Pipes & Tubes', 'Fittings and spooling; domestic demand', '8% / **15%** / 22%'],
                        ['Scoda Tubes', 'Welded plant; power tenders; exports', '8% / **15%** / 22%'],
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
                    label: 'One customer or one project',
                    text: "**Aeroflex**'s skid business depends on a single data-centre customer. **Man**'s year depends on winning and executing a few large pipeline orders; it said its Saudi rivals are adding capacity.",
                },
                {
                    label: 'Cash and debt',
                    text: "**Man**'s debt will rise to about ₹1,600cr this year before falling. **Venus** and **Scoda** keep borrowing to fund stock and plants. **Manaksia** plans about ₹350cr more capex for cold rolling and Alu-Zinc.",
                },
                {
                    label: 'Trade rules',
                    text: "A smaller EU import quota for seamless tubes, with a steep duty above it, threatens **Venus**'s and **Scoda**'s exports to Europe.",
                },
                {
                    label: 'Energy and shipping',
                    text: "Gas and LPG prices and Middle East shipping hit **Scoda** and **Manaksia** this year; Aeroflex's export logistics costs rose.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **14% at 21x, 18% at 31x, 20% at 35x, 23% at 44x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Man** and **Aeroflex** held net cash at March; **Venus**, **Manaksia** and **Scoda** carry debt the P/E ignores.",
                },
                {
                    label: 'Reasonable',
                    text: "**Man**, **Manaksia** and **Scoda**: prices that ask for about the growth I expect. For Scoda, the weak cash record is the reason to wait.",
                },
                {
                    label: 'Full',
                    text: "**Venus**: more growth than its flat recent profit suggests.",
                },
                {
                    label: 'Stretched',
                    text: "**Aeroflex**: the price assumes years of data-centre growth from one customer.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Man Industries (I)', rank: 1, stance: 'SCALEUP', segment: CARBON,
            what: "Makes large-diameter steel pipes (and coats them) for oil, gas and water pipelines in India and the Gulf, and has just bought National Pipe Company in Saudi Arabia.",
            view: "**A pipe maker that became a Gulf insider.** The Saudi plant brings Aramco approval and local supply; revenue guidance is about ₹5,000cr at 14–16% margins, the order book is ₹3,600cr, and it converts profit to cash better than any peer here. Debt peaks at about ₹1,600cr this year. The price asks for about my ~18% estimate.",
            watch: 'Saudi plant revenue from Q2; Dammam coating and Jammu plants by March 2027; debt.',
        },
        {
            company: 'Manaksia Coated Metals', rank: 2, stance: 'SCALEUP', segment: CARBON,
            what: "Coats and paints steel sheet (colour-coated and Alu-Zinc) for roofing, cladding and appliances, about two-thirds exported.",
            view: "**Capacity nearly tripling into a strong order book.** Record ₹10,400 a tonne profit in Q1, margins of 10–12% targeted, and revenue guidance of ₹1,300–1,350cr this year. But five-year cash conversion is 13% and it plans more capex. The price asks for about my ~20% estimate.",
            watch: 'The new colour-coating line filling; working capital; the ₹350cr capex plan.',
        },
        {
            company: 'Scoda Tubes', rank: 3, stance: 'SCALEUP', segment: STAINLESS,
            what: "Makes stainless-steel seamless pipes and tubes from its own mother hollows, adding welded pipe; recently listed.",
            view: "**A sensible plan, a weak cash record.** It guides 25% revenue growth at 14–15% margins and is adding welded capacity, but operating cash has been negative over five years and the welded plant is late. The price asks for about my ~15% estimate.",
            watch: 'The welded plant starting; working capital back toward 160 days; BHEL and NTPC tenders.',
        },
        {
            company: 'Venus Pipes & Tubes', rank: 4, stance: 'PRICED', segment: STAINLESS,
            what: "Makes stainless-steel seamless and welded pipes, now adding fittings and pre-built piping sections (spooling), for power, chemicals, oil and gas and data centres.",
            view: "**Fast growth, flat profit, little cash.** Order book above ₹600cr and a ₹185cr data-centre letter of intent, but quarterly profit has been flat, margin guidance slipped to FY28 and five-year cash conversion is 29%. The price needs more than my ~15% estimate.",
            watch: 'Spooling from Q3; margin toward 17–18%; exports under the EU quota.',
        },
        {
            company: 'Aeroflex Industries', rank: 5, stance: 'PRICED', segment: STAINLESS,
            what: "Makes stainless-steel flexible hoses and assemblies for industry and, since FY26, liquid-cooling skid assemblies for AI data centres.",
            view: "**A hose maker transformed by data centres, priced for it.** Revenue up 73% and margins about 23%, with skids now about 23% of revenue. But skids depend on one customer, it holds no patents on them, and returns have fallen from 36% to 19%. The price needs far more than my ~25% estimate.",
            watch: 'Skid capacity at 15,000 units by Q3; new data-centre customers; exports.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Carbon-steel line pipe and coated sheet.** **Man Industries: own.** Gulf approvals, a new Saudi plant and the best cash record. **Manaksia Coated Metals: follow.** Big capacity coming, but cash must follow.",
            "**Stainless-steel pipes, tubes and hoses.** **Aeroflex: wait.** A real data-centre business, priced for years of it. **Venus Pipes: wait** for profit to grow with revenue. **Scoda Tubes: wait** for cash to follow growth.",
            "**What would change my view.** For the better: Venus's or Scoda's operating cash turning positive; Aeroflex winning a second data-centre customer. For the worse: pipeline orders slowing in the Gulf, or Europe tightening its import quota further.",
            "**What to watch next quarter.** Man's Saudi revenue; Manaksia's new line; Aeroflex's skid volumes; Venus's margin; Scoda's welded plant.",
        ],
        bottomLine:
            "Own the pipe maker with approvals and cash (Man Industries), follow the coated-sheet maker adding capacity (Manaksia Coated Metals), and wait on the stainless-steel names (Aeroflex Industries, Venus Pipes, Scoda Tubes) until their cash catches up with their growth or their price.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/MANINDS/consolidated/' },
        { label: 'Wholesale price index, steel products — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
