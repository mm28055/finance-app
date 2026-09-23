import { SectorOverview } from './types';
import { cablesBusinesses } from './cables-businesses';
import { cablesValuationInputs } from './card-data/cables';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const BRAND = 'Branded house wire — sold through dealers and electricians';
const QUAL = 'Qualified cables and transformer conductor — sold on approvals';
const TENDER = 'Utility cables, conductors and projects — sold by tender';

export const cables: SectorOverview = {
    sector: 'Cables',
    title: 'Cables & Wires',
    format: 'ranked',
    businesses: cablesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: cablesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'RR Kabel Ltd.': 20,
            'Finolex Cables': 12,
            'KSH International': 18,
            'Dynamic Cables': 20,
            'Laser Power & Infra': 18,
            'Paramount Communications': 15,
            'Advait Energy': 15,
            'JD Cables': 10,
        },
    },
    standfirst:
        "Eight companies selling copper and aluminium wrapped in plastic. That sounds like a commodity and mostly is, except in two places. In house wiring, India is one of the few countries where wire is a branded consumer purchase, and the brand and dealer network are worth more than the factory. In high-voltage and specialised products, the barrier is a certification that takes years and a customer who will not risk a failure underground. Everything else is a conversion fee on metal, and should be valued as one. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. KSH, Dynamic and JD Cables standalone; the rest consolidated.',
            note: 'Metal is passed through, so when copper and aluminium rise the percentage margin falls even if rupee profit per tonne holds. JD Cables (SME) reports half-yearly: H1 and H2 FY26 sit in the Q2 and Q4 columns. Laser Power listed recently and has gaps.',
            values: {
                'RR Kabel Ltd.': [7, 8, 8, 9, 9],
                'Finolex Cables': [10, 11, 10, 9, 12],
                'KSH International': [7, 6, 6, 6, 6],
                'Dynamic Cables': [10, 11, 11, 11, 11],
                'Laser Power & Infra': [11, null, null, 13, 13],
                'Paramount Communications': [3, 1, 3, 5, 7],
                'Advait Energy': [12, 11, 11, 13, 14],
                'JD Cables': [null, 16, null, 12, null],
            },
            cellNotes: {
                'Finolex Cables': 'Q1 FY27: the optical-fibre business earned about 30% on fibre bought cheaply before prices spiked; management said not to annualise it.',
                'Paramount Communications': 'FY26: US exports carried a 50% duty and ran at a loss; the duty has since been struck down.',
                'KSH International': 'A low percentage is normal: copper is most of the price and is passed through; what KSH earns is a fee per tonne.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Mostly metal prices, not volume: RR Kabel grew revenue 54% in Q1 on 17% more volume, Paramount 17% on about 4% more metal and Dynamic 33% on 5–6%.',
            values: {
                'RR Kabel Ltd.': [14, 20, 42, 34, 54],
                'Finolex Cables': [13, 5, 35, 22, 44],
                'KSH International': [null, 51, 59, 100, 108],
                'Dynamic Cables': [25, 21, 19, 7, 33],
                'Laser Power & Infra': [null, null, null, null, 15],
                'Paramount Communications': [40, 20, 18, 13, 17],
                'Advait Energy': [97, 241, 115, 18, 52],
                'JD Cables': [null, 13, null, 70, null],
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
            note: 'Finolex’s returns are held down by about ₹4,200cr of investments it carries.',
            values: {
                'RR Kabel Ltd.': [18, 16, 22, 20, 28],
                'Finolex Cables': [21, 16, 19, 18, 16],
                'KSH International': [18, 16, 18, 21, 21],
                'Dynamic Cables': [24, 24, 24, 26, 26],
                'Laser Power & Infra': [null, 13, 16, 21, 21],
                'Paramount Communications': [4, 13, 15, 16, 12],
                'Advait Energy': [24, 28, 37, 27, 28],
                'JD Cables': [21, 16, 47, 66, 34],
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
            note: 'Wire makers selling through dealers run short cycles; utility and project suppliers run long ones because state boards pay slowly. Advait’s is negative because it collects advances and pays suppliers late.',
            values: {
                'RR Kabel Ltd.': [98, 72, 67, 54, 56],
                'Finolex Cables': [74, 66, 45, 57, 78],
                'KSH International': [88, 75, 78, 82, 80],
                'Dynamic Cables': [82, 83, 106, 90, 93],
                'Laser Power & Infra': [null, 132, 157, 111, 168],
                'Paramount Communications': [134, 123, 155, 102, 101],
                'Advait Energy': [-25, -102, -22, -77, -62],
                'JD Cables': [69, 39, 80, 96, 168],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Rising metal prices tie up cash in stock and bills even when contracts pass the metal through, so in this sector cash conversion is the real test of quality.',
            values: {
                'RR Kabel Ltd.': [32, 141, 73, 101, 38, 71],
                'Finolex Cables': [110, 70, 98, 38, 8, 62],
                'KSH International': [-86, 122, -24, -7, -34, -15],
                'Dynamic Cables': [107, 43, 1, 53, 48, 48],
                'Laser Power & Infra': [-45, 135, 110, 24, -40, 21],
                'Paramount Communications': [75, 23, -113, 85, -58, -3],
                'Advait Energy': [120, 76, -25, 88, -12, 26],
                'JD Cables': [0, 100, -186, -53, -154, -114],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses five-year totals.',
            note: 'Thin margins mean free cash is a small share of sales even for good businesses; the question is whether it is positive.',
            values: {
                'RR Kabel Ltd.': [0.7, 6.2, 2.3, 1.7, 0.0, 1.9],
                'Finolex Cables': [10.8, 7.3, 11.5, -0.5, -1.7, 4.7],
                'KSH International': [-5.1, 3.8, -4.5, -6.7, -7.3, -5.1],
                'Dynamic Cables': [10.3, 2.1, -2.6, 3.0, 0.4, 2.1],
                'Laser Power & Infra': [-6.8, 6.2, 7.8, 1.6, -7.4, 0.1],
                'Paramount Communications': [2.1, 0.3, -14.4, 2.8, -4.8, -3.2],
                'Advait Energy': [-2.5, 4.8, -9.1, 8.0, -17.2, -7.1],
                'JD Cables': [-0.0, 2.4, -14.5, -10.1, -25.2, -16.1],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Investments are counted as cash for RR Kabel and Finolex.',
            note: 'Below zero means more cash than debt.',
            values: {
                'RR Kabel Ltd.': [0.8, 1.7, -0.2, -0.4, -0.0],
                'Finolex Cables': [-4.8, -5.2, -6.2, -7.6, -7.0],
                'KSH International': [2.7, 2.4, 2.7, 2.9, 1.2],
                'Dynamic Cables': [0.8, 0.8, 1.2, 0.3, 0.1],
                'Laser Power & Infra': [1.9, 2.2, 1.5, 1.5, 2.4],
                'Paramount Communications': [8.7, 2.7, 0.9, -0.1, 1.4],
                'Advait Energy': [-0.1, -0.2, 0.4, -0.5, -0.2],
                'JD Cables': [5.0, 4.0, 2.4, 1.2, 1.2],
            },
            cellNotes: {
                'Finolex Cables': 'Its ₹4,195cr of investments include a stake in Finolex Industries as well as treasury funds.',
                'Laser Power & Infra': 'FY26 is before its July 2026 listing; it has since repaid about ₹490cr of debt from the IPO.',
                'KSH International': 'FY26 includes money from its share sale; the company says it is not yet generating operating cash.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses five-year totals.',
            note: 'Cable plants are cheap relative to sales; Advait’s spending is on new businesses unrelated to cables.',
            values: {
                'RR Kabel Ltd.': [1.6, 1.9, 2.9, 4.8, 3.0, 3.0],
                'Finolex Cables': [1.8, 0.7, -0.0, 4.4, 2.4, 2.0],
                'KSH International': [-0.0, 2.1, 3.3, 6.2, 5.2, 4.2],
                'Dynamic Cables': [1.1, 1.9, 2.7, 2.4, 4.8, 2.9],
                'Laser Power & Infra': [1.6, 4.5, 2.0, 0.7, 2.3, 2.0],
                'Paramount Communications': [0.5, 1.1, 5.0, 3.8, 2.8, 3.0],
                'Advait Energy': [17.7, 7.7, 4.8, 3.5, 15.8, 10.6],
                'JD Cables': [0.0, -0.0, 1.6, 2.9, 4.9, 3.3],
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
            note: 'High across the sector because metal is most of the sales value; compare each company with its own history.',
            values: {
                'RR Kabel Ltd.': [11.0, 10.8, 12.3, 9.9, 8.3],
                'Finolex Cables': [9.9, 10.3, 11.3, 9.1, 7.5],
                'KSH International': [9.9, 9.8, 9.9, 14.5, 9.9],
                'Dynamic Cables': [10.6, 11.9, 12.2, 12.2, 12.4],
                'Laser Power & Infra': [10.1, 9.1, 9.1, 14.6, 10.9],
                'Paramount Communications': [4.3, 6.2, 6.3, 7.1, 7.4],
                'Advait Energy': [5.3, 3.0, 5.0, 8.0, 8.4],
                'JD Cables': [27.5, 20.5, 33.7, 25.1, 17.4],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the Q1 FY27 call or presentation ÷ yearly sales (Screener).',
            note: 'Most cable makers sell from stock or on short orders and do not publish a book; blank where not disclosed.',
            values: {
                'RR Kabel Ltd.': [null],
                'Finolex Cables': [null],
                'KSH International': [null],
                'Dynamic Cables': [0.6],
                'Laser Power & Infra': [1.2],
                'Paramount Communications': [null],
                'Advait Energy': [null],
                'JD Cables': [null],
            },
            cellNotes: {
                'Dynamic Cables': '₹811cr, flat for a quarter: customers now book only two to four months ahead while metal prices are high.',
                'Laser Power & Infra': '₹2,788cr across cables and turnkey projects, ÷ FY26 sales.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'brand', label: 'Brand and dealer reach', description: 'A brand electricians and retailers ask for, and the shelf space to reach them.' },
            { key: 'qual', label: 'Approvals', description: 'Voltage-class, utility and transformer-maker approvals that take years.' },
            { key: 'sticky', label: 'Customer stickiness', description: 'Repeat business under annual or programme contracts rather than one-off tenders.' },
            { key: 'scale', label: 'Scale and cost', description: 'Capacity, range and purchasing power.' },
            { key: 'pass', label: 'Metal pass-through', description: 'A = metal passed through quickly; D = fixed-price tenders or long lags.' },
        ],
        rows: [
            { company: 'RR Kabel Ltd.', trend: 'widening', trendNote: 'Adding 20–25,000 retail touchpoints a year; first US approvals; consumer arm at breakeven.',
                grades: { brand: { grade: 'A', note: 'About 1.5 lakh retail touchpoints' }, qual: { grade: 'B', note: 'Moving from low to high voltage' }, sticky: { grade: 'B', note: 'Electrician and dealer loyalty' }, scale: { grade: 'A', note: 'About 7% of the Indian market' }, pass: { grade: 'A', note: 'Dealer prices reset quickly' } } },
            { company: 'Finolex Cables', trend: 'narrowing', trendNote: 'House wire faces UltraTech’s ₹1,800cr entry; fibre is limited by its own preform supply.',
                grades: { brand: { grade: 'A', note: 'A decades-old house-wire brand' }, qual: { grade: 'C', note: 'High-voltage only via a Sumitomo joint venture' }, sticky: { grade: 'B', note: 'Brand loyalty in house wire' }, scale: { grade: 'B', note: 'Own copper rod plant' }, pass: { grade: 'B', note: 'Dealer pricing' } } },
            { company: 'KSH International', trend: 'stable', trendNote: 'More 765 kV and HVDC conductor; but management says unit economics peaked this quarter.',
                grades: { brand: { grade: 'C', note: 'Sells only to transformer makers' }, qual: { grade: 'A', note: 'Qualified inside 120+ makers’ transformers' }, sticky: { grade: 'A', note: '95%+ repeat business on annual contracts' }, scale: { grade: 'B', note: 'Going from 43,445 to about 59,000 tonnes' }, pass: { grade: 'A', note: 'Copper booked against each order' } } },
            { company: 'Dynamic Cables', trend: 'widening', trendNote: 'High-voltage mix up to 68%; exports 13%; first electron-beam line.',
                grades: { brand: { grade: 'C', note: 'Business-to-business, not retail' }, qual: { grade: 'A', note: 'Approvals across voltage classes and utilities' }, sticky: { grade: 'B', note: 'Private customers 71% of sales' }, scale: { grade: 'C', note: '₹1,198cr' }, pass: { grade: 'A', note: '80% of contracts pass metal through' } } },
            { company: 'Laser Power & Infra', trend: 'stable', trendNote: 'High-tension cables up from 9% to 29% of revenue; debt repaid from the IPO.',
                grades: { brand: { grade: 'C', note: 'Utility and project sales' }, qual: { grade: 'B', note: 'Utility approvals; HTLS licence' }, sticky: { grade: 'C', note: 'Government tenders' }, scale: { grade: 'B', note: 'Capacity rising to 85,400 tonnes' }, pass: { grade: 'C', note: 'Projects are fixed-price' } } },
            { company: 'Paramount Communications', trend: 'stable', trendNote: 'US duty removed; plants full; new plant from FY28.',
                grades: { brand: { grade: 'C', note: 'Industrial and export sales' }, qual: { grade: 'C', note: '132 kV approvals only after the new plant' }, sticky: { grade: 'C', note: 'Distributor and tender sales' }, scale: { grade: 'C', note: 'Plants at about 100%' }, pass: { grade: 'B', note: 'Tariff risk pushed to customers' } } },
            { company: 'Advait Energy', trend: 'narrowing', trendNote: 'Good transmission-hardware niche funding six unrelated businesses.',
                grades: { brand: { grade: 'C', note: 'Utility sales' }, qual: { grade: 'B', note: 'Approved by 10+ utility boards' }, sticky: { grade: 'C', note: 'Tender-based' }, scale: { grade: 'D', note: '₹715cr across seven businesses' }, pass: { grade: 'C', note: 'Project pricing' } } },
            { company: 'JD Cables', trend: 'narrowing', trendNote: 'Moving into highway civil works with no track record.',
                grades: { brand: { grade: 'D', note: 'State-board sales' }, qual: { grade: 'C', note: 'Eastern state-board registrations' }, sticky: { grade: 'C', note: 'Tenders' }, scale: { grade: 'D', note: '₹365cr' }, pass: { grade: 'C', note: 'Tender prices' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Start with a fact the dashboard hides: the leaders of this industry (Polycab, KEI and Havells) are not in this sector list.** These eight are the second tier. Polycab holds about 18% of the Indian wire and cable market, KEI 9% and RR Kabel 7%, in a market that is about three-quarters organised with nobody above a fifth. So the question for each company here is what it owns that the top three and new entrants cannot copy.",
                "**RR Kabel is the one with a genuine answer, and it is distribution.** It reaches about 1.5 lakh retail touchpoints and sells into the one part of this industry with consumer economics: domestic house wire earns 11–12% against 6–7% for domestic cables. Volume grew 17% against an industry growing 10–12%, its margin is rising on scale rather than stock gains, and its consumer-goods arm has reached breakeven. Its price asks for slightly more than the ~20% growth I expect; I would still own it.",
                "**Dynamic Cables is the disciplined small one to own on weakness; KSH has the best business model at a full price.** Dynamic passes metal through on 80% of contracts, earns 26% on capital and is moving up to higher voltages. KSH makes the copper conductor inside large power transformers for 120+ makers with 95%+ repeat business, but its price has tripled since listing, management says unit economics have peaked, and it is not yet generating operating cash. Wait on KSH, Finolex (a house-wire brand facing UltraTech's ₹1,800cr entry) and Laser Power.",
                "**Two things to hold onto before reading the rest.** First, **read tonnes, not revenue**: metal is passed through, so this quarter's 30–50% revenue growth is mostly copper prices. Second, **cash conversion is the real test**: rising metal ties up cash in stock and bills even when contracts pass it through. I would **pass on Paramount** (a one-off tariff recovery) and **avoid Advait Energy and JD Cables**, where a decent niche is funding unrelated expansion with almost no cash coming in.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**. Companies are grouped by how they sell. All figures are filed (Screener): KSH, Dynamic and JD Cables standalone, the rest consolidated. JD Cables reports half-yearly and Laser Power listed recently. **Start with cash conversion and free cash flow, and read the growth tab with care**: most of the growth is metal prices. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Copper and aluminium are 70–80% of the cost of most products here, and roughly 80% of contracts pass metal straight through. That makes the metal price almost irrelevant to profit and highly relevant to reported revenue.",
            ],
            points: [
                {
                    label: 'Where the profit sits',
                    text: "**Branded house wire** (RR Kabel, Finolex), sold through dealers to electricians, earns 11–12% because brand and shelf space do the work. **Industrial and utility cables** (Dynamic, Laser, Paramount, JD) earn 6–10% set by tender, with approvals per voltage class as the barrier. **Transformer conductor** (KSH) earns a fee per tonne under annual contracts. **Specialised conductors and projects** (Advait, Laser's projects arm) earn more but consume cash.",
                },
                {
                    label: 'Where the demand is coming from',
                    text: "**The grid**: India is rebuilding transmission and distribution, which shows first in transformers and conductors (KSH, Laser) and then in distribution cables (Dynamic, JD). **Housing**: wire demand follows completions, and the shift from unorganised to organised suppliers adds 2–3 points a year. **Exports**: US duties on Indian cables were struck down, and export cable margins are 11–12% against 6–7% at home.",
                },
                {
                    label: 'The threat: conglomerates buying into house wire',
                    text: "UltraTech has committed ₹1,800cr to Ultravolt and expects to be the second-largest wire maker by capacity; Adani has been linked with the same market. They are coming for branded house wire, where the margins are, with cement-scale distribution. **Finolex is most exposed, RR Kabel less so** (a third of its business is exports and cables), and the utility-cable makers are largely untouched because a conglomerate will not chase a state-board tender.",
                },
                {
                    label: 'A licence everybody can buy is not a moat',
                    text: "High-temperature low-sag conductors and data-centre cabling are described as differentiators by almost every company here, but every player has a technology tie-up and tenders are written so all can bid. RR calls data centres 'still more in the announcement phase'. **Treat all of it as marketing until a purchase order appears.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**RR Kabel** and **Finolex** depend on housing completions and on holding shelf space against UltraTech. **KSH** depends on transformer makers' order books, which run three to five years. **Dynamic**, **Laser**, **JD** and **Advait** depend on utility and grid spending and on state boards paying. **Paramount** depends on US exports now that the duty is gone. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Branded house wire', 'RR Kabel, Finolex', '7–12%', '16–28%', '**62–71%**'],
                        ['Qualified cables and conductor', 'KSH, Dynamic', '6–11%', '21–26%', '**−15% to 48%**'],
                        ['Utility cables and projects', 'Laser, Paramount, Advait, JD', '1–16%', '12–34%', '**−114% to 26%**'],
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
                    label: 'Lasting: qualification inside critical equipment',
                    text: "**KSH**'s conductor is qualified into each transformer design, 95%+ of its business is repeat and 80–85% of customers sign annual contracts, so copper risk sits with the customer. **Dynamic**'s approvals across voltage classes and utilities keep conglomerates out; its own management notes Adani and Birla are its customers. The higher the voltage and the worse a failure, the longer the qualification and the fewer the bidders. These edges should last.",
                },
                {
                    label: 'Lasting but under attack: the brand and the electrician',
                    text: "**RR Kabel**'s 1.5 lakh touchpoints and **Finolex**'s decades-old brand took years to build and are the sector's real moat. But money buys shelf space faster than it buys technology, which is exactly why UltraTech is entering. Expect the moat to hold but the margin to be tested over the next two to three years, Finolex more than RR.",
                },
                {
                    label: 'Temporary: full plants in a tight market',
                    text: "**Paramount** runs at about 100% ('the problem is not selling… the problem is manufacturing'), **Dynamic** at 85% and **RR** at 90% in cables. Tight capacity flatters margins until the industry's new lines arrive, and everybody is building.",
                },
                {
                    label: 'Barely a moat: tenders and borrowed technology',
                    text: "**Laser**, **JD Cables** and **Advait** sell mostly by tender to utilities and state boards, and their technology tie-ups are available to rivals. Their approvals are real but widely held, so price decides.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Polycab, KEI Industries and Havells (the listed leaders), V-Guard, Apar (conductors and cables), UltraTech's Ultravolt, and many unorganised local makers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Metal inflation of roughly 40% made this quarter's revenue growth close to meaningless; the honest measures are volume and margin per tonne.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: scale in branded wire and contractual conversion fees',
                    text: "**RR Kabel**'s wire and cable margin rose from 7.6% to 9.9% on scale with no stock gain, and it guides about a point a year of improvement: operating leverage on a distribution network, which should hold. **KSH**'s fee per tonne is contractual and rose from ₹66,000 to ₹93,000 with more 765 kV and HVDC work, though management says new capacity and more standard wire will dilute it from here. **Dynamic**'s pass-through contracts keep its 10–11% steady.",
                },
                {
                    label: 'Not structural: windfalls and one-off recoveries',
                    text: "**Finolex**'s fibre business earned about 30% on cheap stock sold into a spike; management said not to annualise it. **Paramount**'s recovery is the removal of a 50% US duty, real but mechanical. **Laser**'s profit jump comes largely from repaying ₹490cr of debt with IPO money, worth about ₹40cr a year before tax, which happens once.",
                },
                {
                    label: 'Not structural: margins that come with no cash',
                    text: "**Advait**'s core earns about 16%, but its reported profit is not turning into cash, and part of its battery revenue is work for its own group company. **JD Cables**' 12–16% margins came with negative operating cash in three of five years.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over FY22–FY26, **JD Cables** tied up ₹175cr, about half of a year's sales, and turned no profit into cash. **Laser** tied up ₹736cr, mostly customer bills (₹901cr; customers take 216 days to pay). **KSH** tied up ₹519cr, mostly stock (₹384cr), as copper prices rose and it expanded, and has not generated operating cash over five years.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**JD Cables** now holds 101 days of stock (from 26) and pays suppliers in 29 days (from 102 in FY23). **Laser**'s customers take 216 days, up from 159. **RR Kabel**'s stock rose to 81 days as copper rose, though its suppliers now fund more of it (63 days, from 17).",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Dynamic**'s customers pay in 88 days, down from 121 in FY24. **Paramount**'s cycle fell from 155 to 101 days. **RR Kabel**'s cycle fell from 98 to 56 days over five years.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**Finolex** and **RR** sell through dealers who pay quickly (17–43 days). **Advait** collects advances and pays suppliers late, so its cycle is negative. Utility suppliers carry long cycles because state boards pay slowly. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: the grid',
                    text: "India is rebuilding transmission and distribution, which shows first in transformers and conductors and then in distribution cables. **KSH** is expanding from 43,445 to about 59,000 tonnes by March 2027 into transformer order books of three to five years; **Laser**, **Dynamic** and **JD** supply cables and conductors to utilities. This should run for five years or more, but state boards pay slowly.",
                },
                {
                    label: 'Growth driver: housing and the shift to brands',
                    text: "Wire demand follows housing completions, and the shift from unorganised to organised suppliers continues at 2–3 points a year. **RR Kabel** and **Finolex** benefit; RR is also investing ₹1,200cr ('Project Rise'), about 80% in cables, to move toward higher voltages. Steady and long, but now contested by UltraTech.",
                },
                {
                    label: 'Growth driver: exports',
                    text: "With US duties struck down, **Paramount** targets ₹700–800cr of US revenue and went from two American distributors to eight; **RR** has its first US approvals and **Dynamic** its first shipments. Export cable margins are roughly double domestic, so this is a mix improvement as well as volume.",
                },
                {
                    label: 'Growth driver: optical fibre, with a constraint',
                    text: "**Finolex** is doubling fibre drawing capacity from 4 to 8 million fibre-km, but its own preform plant supports only about 4 million and suppliers have broken contracts. India uses about 25 million fibre-km a year against China's 400 million, so the runway is real if the input can be secured.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**RR Kabel** grew volume 17% against an industry at 10–12% and reached breakeven in consumer goods. **KSH** lifted its fee per tonne sharply. **Paramount** has returned to profit on exports.",
                },
                {
                    label: 'Cautious',
                    text: "**KSH** guides ₹75,000 a tonne for the year, implying the rest of the year runs below this quarter. **Dynamic**'s order book is flat because customers are delaying orders while metal is high.",
                },
                {
                    label: 'Missed',
                    text: "**Dynamic**'s new plant slipped to September. **JD Cables**' new plant promised for March was still waiting for an electricity connection in June. **Advait**'s electrolyser milestone has moved three times.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Laser** presents standalone figures while its consolidated accounts include a one-off gain. **Finolex** would not annualise its fibre margins and its copper rod plant sat idle for want of cooking gas. How much work Dynamic and Laser have booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
                {
                    label: 'My outlook',
                    text: "Real (volume) growth for the industry is 10–12% a year; revenue will swing with metal prices. **I expect RR Kabel and Dynamic to compound at about 20% as their mix improves, KSH and Laser at 18%, and Finolex to grow slowest while it defends house wire.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['RR Kabel Ltd.', 'Retail reach, cables mix, exports', '14% / **20%** / 26%'],
                        ['Dynamic Cables', 'High-voltage mix, exports, new plant', '12% / **20%** / 26%'],
                        ['KSH International', 'Transformer conductor capacity; dilution from mix', '10% / **18%** / 25%'],
                        ['Laser Power & Infra', 'High-tension cables; lower interest', '10% / **18%** / 25%'],
                        ['Finolex Cables', 'House wire under attack; fibre', '5% / **12%** / 18%'],
                        ['Paramount Communications', 'US exports; new plant from FY28', '8% / **15%** / 22%'],
                        ['Advait Energy', 'Transmission hardware; new businesses', '0% / **15%** / 25%'],
                        ['JD Cables', 'State-board cables; highway works', '0% / **10%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. Earnings, not revenue: metal prices move revenue without moving profit. The growth each price needs is in the live valuation table in section 8.',
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
                    label: 'A funded entrant in house wire',
                    text: "UltraTech's ₹1,800cr Ultravolt entry aims at **Finolex**'s and **RR Kabel**'s most profitable product. RR pointed to its reach and exports; Finolex did not set out a response beyond its brand. A price war would show first in dealer margins.",
                },
                {
                    label: 'Metal prices and working capital',
                    text: "Copper near $14,000 a tonne traps cash in stock and bills, and makes customers delay orders (as **Dynamic** found). **KSH** is not yet generating operating cash and its interest cost is rising. **Finolex**'s fibre business depends on buying preform in a market where suppliers break contracts.",
                },
                {
                    label: 'Government customers',
                    text: "**Laser** (about 65% government, all of its projects), **JD Cables** and **Advait** depend on state boards and utilities paying on time. Laser's operating cash was slightly negative this quarter; JD's has been negative in three of five years.",
                },
                {
                    label: 'Governance and disclosure',
                    text: "**Advait**'s managing director would not say on the call who owns the 20% of its carbon subsidiary it does not, and part of its battery revenue is billed to its own group company. **JD Cables** reports half-yearly, and its managing director could not answer basic questions on the call. **Laser** presents standalone figures that flatter the comparison.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **9% at 14x, 16% at 24x, 17% at 28x, 19% at 34x, 21% at 37–38x, 23% at 46x and 25% at 54x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Finolex** holds about ₹4,200cr of investments, so it looks much cheaper on EV/EBITDA than on P/E, but part of that is a stake in Finolex Industries rather than spare cash. **Laser** and **KSH** carry debt the P/E ignores (Laser has since repaid much of it from its IPO).",
                },
                {
                    label: 'Reasonable',
                    text: "**Dynamic** (the price needs less growth than I expect) and **JD Cables** (cheap, but for reasons set out in section 7).",
                },
                {
                    label: 'Full',
                    text: "**RR Kabel** (a little ahead of my estimate for the best business here), **Finolex**, **Laser**, **Paramount** and **Advait**.",
                },
                {
                    label: 'Stretched',
                    text: "**KSH**: the best business model in the sector, but its price needs more growth than a business whose unit economics have just peaked is likely to deliver.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'RR Kabel Ltd.', rank: 1, stance: 'COMPOUNDER', segment: BRAND,
            what: "Branded house wire and power cables sold through about 1.5 lakh retail touchpoints, plus fans, switches, lighting and appliances.",
            view: "**The best-executed business here, with the sector's real moat.** Volume grew 17% against an industry at 10–12%, its margin rose on scale, the consumer arm reached breakeven and it has first US approvals. The price needs a little more than my ~20% estimate.",
            watch: 'UltraTech’s entry; volume, not revenue; Project Rise moving it into higher voltages.',
        },
        {
            company: 'Dynamic Cables', rank: 2, stance: 'COMPOUNDER', segment: QUAL,
            what: "Medium and high-voltage power cables and conductors for utilities, industry, solar developers and exports, based in Jaipur.",
            view: "**A disciplined maker with the right structure.** 80% of contracts pass metal through, high voltage is 68% of the mix, private customers 71% and exports 13%, and it earns 26% on capital. Volume was slow as customers delayed orders and its new plant slipped. The price needs less than my ~20% estimate.",
            watch: 'The new plant from September; order book growth; exports.',
        },
        {
            company: 'KSH International', rank: 3, stance: 'PRICED', segment: QUAL,
            what: "Magnet winding wire and continuously transposed conductor (the insulated copper inside large power transformers) for 120+ transformer makers.",
            view: "**The most locked-in customer base in the sector, at a full price.** 95%+ repeat business, annual contracts and copper passed through, with the fee per tonne up from ₹66,000 to ₹93,000. But management guides it lower for the rest of the year, it is not yet generating operating cash, and the price needs more than my ~18% estimate.",
            watch: 'Fee per tonne; the Hitachi Energy framework agreement; operating cash.',
        },
        {
            company: 'Finolex Cables', rank: 4, stance: 'CYCLICAL', segment: BRAND,
            what: "One of India's best-known electrical brands: building wire, auto and agricultural cables, optical fibre and communication cables, and a high-voltage joint venture with Sumitomo.",
            view: "**Cheap for a reason that is about to be tested.** A strong brand and large investments, but it is mostly a house-wire company at the moment UltraTech enters, its fibre margin was a windfall, and its preform supply is limited. The price needs a little more than my ~12% estimate.",
            watch: 'House-wire volumes against UltraTech; preform supply; fibre margins normalising.',
        },
        {
            company: 'Laser Power & Infra', rank: 5, stance: 'SCALEUP', segment: TENDER,
            what: "Kolkata-based maker of power cables and conductors (about 90% cables), with a turnkey transmission and distribution projects arm; listed in July 2026.",
            view: "**Two real improvements, both finite.** High-tension cables rose from 9% to 29% of revenue, and IPO money repaid ₹490cr of debt. But about 65% of revenue and all projects are government, customers take 216 days to pay, and its HTLS licence has produced no revenue. The price needs a little more than my ~18% estimate.",
            watch: 'Operating cash; government payments; high-tension mix.',
        },
        {
            company: 'Paramount Communications', rank: 6, stance: 'TURNAROUND', segment: TENDER,
            what: "Power and telecom cables for industrial, government and export customers, with a large US business.",
            view: "**A mechanical recovery.** Its US exports ran at a loss under a 50% duty that has now been struck down, and it targets ₹700–800cr of US revenue. But plants are full, returns are 12%, it raised equity, and the next leg needs a plant due in FY28. The price needs more than my ~15% estimate.",
            watch: 'US orders; the Narmadapuram plant; 132 kV approvals.',
        },
        {
            company: 'Advait Energy', rank: 7, stance: 'AVOID', segment: TENDER,
            what: "Transmission accessories (optical ground wire, emergency restoration systems, stringing tools) plus solar contracting, batteries, electrolysers, fuel cells and carbon credits.",
            view: "**A good core funding six new businesses without cash.** The transmission niche earns about 16% with approvals from 10+ utilities, but capex is large against revenue, profit is not turning into cash, some revenue is billed to its own group, and management would not answer an ownership question on the call.",
            watch: 'Cash conversion; a clear answer on the carbon subsidiary’s ownership.',
        },
        {
            company: 'JD Cables', rank: 8, stance: 'AVOID', segment: TENDER,
            what: "Low-tension aerial bunched cables, power cables and aluminium conductors for state electricity boards in eastern and north-eastern India, now moving into highway construction.",
            view: "**A small niche financing a move into highways.** Its cable business has real state-board approvals, but it turned no profit into cash over five years, its new plant is late, and it is entering civil works with no record. It looks cheap for those reasons.",
            watch: 'Operating cash; new product approvals; disclosure.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Branded house wire.** **RR Kabel: own.** The route to the electrician is the durable asset, and RR has built it; the price is a little ahead of my estimate but the business deserves it. **Finolex: wait.** A great brand and large investments, but its house wire faces a funded entrant; own it after UltraTech's first full year, not before.",
            "**Qualified cables and conductor.** **Dynamic: own, on weakness.** Pass-through contracts, rising high-voltage mix and 26% returns at a price below my estimate. **KSH International: wait.** The best business model here, but unit economics have peaked by management's own guidance and cash has not yet arrived.",
            "**Utility cables and projects.** **Laser Power: wait.** Real improvements, but government payments decide its cash. **Paramount: pass.** A tariff removed is not a moat. **Advait Energy: avoid.** Profit is not becoming cash and an ownership question went unanswered. **JD Cables: avoid.** A small niche funding a move into highways.",
            "**What would change my view.** UltraTech competing on capacity rather than price; KSH converting the Hitachi Energy agreement into firm quantities; Finolex securing preform supply; a fall in copper, which would release cash across the sector. For the worse: a house-wire price war, copper staying near $14,000, and state boards slowing payments.",
            "**What to watch next quarter.** RR's volume and dealer additions; Dynamic's new plant; KSH's fee per tonne and cash; Finolex's fibre margin; Laser's operating cash; Paramount's US orders.",
        ],
        bottomLine:
            "Copper passes through, so growth in rupees means nothing; what matters is who owns the route to the customer. Own the distribution (RR Kabel Ltd.) and the qualified niche (Dynamic Cables), respect but wait on KSH International, test Finolex Cables against a funded new entrant, treat Paramount Communications and Laser Power & Infra as finite recoveries, and avoid Advait Energy and JD Cables until profit becomes cash.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/RRKABEL/consolidated/' },
        { label: 'India wire and cable market: organised share and company positions — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-wire-and-cable-market' },
        { label: 'UltraTech\'s ₹1,800 crore Ultravolt entry hits cable and wire stocks — Upstox', url: 'https://upstox.com/news/market-news/stocks/ultra-tech-s-1-800-crore-ultravolt-foray-polycab-rr-kabel-kei-industries-finolex-cables-in-focus/article-199787/' },
        { label: 'KEI, Polycab, RR Kabel fall as UltraTech enters wires and cables — Angel One', url: 'https://www.angelone.in/news/stocks/kei-industries-polycab-rr-kabel-share-price-fall-as-ultratech-enters-wires-and-cables-market-with-ultravolt' },
        { label: 'India wires and cables market size and structure — Fortune Business Insights', url: 'https://www.fortunebusinessinsights.com/india-wires-and-cables-market-109992' },
    ],
};
