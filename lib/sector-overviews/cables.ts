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
            'KSH International': 22,
            'Dynamic Cables': 18,
            'Laser Power & Infra': 18,
            'Paramount Communications': 15,
            'Advait Energy': 15,
            'JD Cables': 10,
        },
    },
    standfirst:
        "Eight companies selling copper and aluminium wrapped in plastic. That sounds like a commodity and mostly is, except in two places. In house wiring, India is one of the few countries where wire is a branded consumer purchase, and the brand and dealer network are worth more than the factory. In high-voltage and transformer products, the barrier is an approval that takes years and a customer who will not risk a failure. Everything else is a conversion fee on metal, and should be valued as one. This year is unusual: Crisil expects industry revenue to rise 28–30% on only about 10% more volume, capacity to grow twice as fast as demand, and UltraTech started its wire plant on 1 September. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-27',
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
            { company: 'RR Kabel Ltd.', trend: 'widening', trendNote: 'Volume +17% against an industry at 10–12%; 20–25,000 retailers added last year; consumer arm at breakeven.',
                grades: { brand: { grade: 'A', note: '2.15 lakh-plus retail touchpoints' }, qual: { grade: 'B', note: 'Moving from 66 kV to 220 kV' }, sticky: { grade: 'B', note: '6.65 lakh electricians on loyalty programmes' }, scale: { grade: 'A', note: 'About 6–7% of the organised market' }, pass: { grade: 'A', note: 'Prices reset when metal moves 2–3%' } } },
            { company: 'Finolex Cables', trend: 'narrowing', trendNote: 'House wire faces UltraTech’s ₹1,800cr entry; fibre is limited by its own preform supply.',
                grades: { brand: { grade: 'A', note: 'A decades-old house-wire brand' }, qual: { grade: 'C', note: 'High-voltage only via a Sumitomo joint venture' }, sticky: { grade: 'B', note: 'Brand loyalty in house wire' }, scale: { grade: 'B', note: 'Own copper rod plant' }, pass: { grade: 'B', note: 'Dealer pricing' } } },
            { company: 'KSH International', trend: 'stable', trendNote: 'More 765 kV and HVDC conductor; a five-year Hitachi Energy framework; new rivals take 5–7 years to qualify.',
                grades: { brand: { grade: 'C', note: 'Sells only to transformer makers' }, qual: { grade: 'A', note: 'Qualified inside 120+ makers’ transformers' }, sticky: { grade: 'A', note: '97% repeat revenue; annual fee contracts' }, scale: { grade: 'B', note: 'Going from 43,445 to about 59,000 tonnes' }, pass: { grade: 'A', note: 'Copper booked against each order' } } },
            { company: 'Dynamic Cables', trend: 'widening', trendNote: 'High-voltage mix up to 68%; exports 13% with first US shipments; electron-beam line due with the late new plant.',
                grades: { brand: { grade: 'C', note: 'Business-to-business, not retail' }, qual: { grade: 'A', note: 'Approvals across voltage classes and utilities' }, sticky: { grade: 'B', note: 'Private customers 71% of sales' }, scale: { grade: 'C', note: '₹1,198cr' }, pass: { grade: 'A', note: '80% of contracts pass metal through' } } },
            { company: 'Laser Power & Infra', trend: 'stable', trendNote: 'High-tension cables up from 9% to 29% of revenue; debt repaid from the IPO.',
                grades: { brand: { grade: 'C', note: 'Utility and project sales' }, qual: { grade: 'B', note: 'Utility approvals; HTLS licence' }, sticky: { grade: 'C', note: 'Government tenders' }, scale: { grade: 'B', note: '85,448 tonnes, only 62% used in FY26' }, pass: { grade: 'C', note: 'Projects are fixed-price' } } },
            { company: 'Paramount Communications', trend: 'stable', trendNote: 'US duty removed; plants full; new plant from FY28.',
                grades: { brand: { grade: 'C', note: 'Industrial and export sales' }, qual: { grade: 'C', note: '132 kV approvals only after the new plant' }, sticky: { grade: 'C', note: 'Distributor and tender sales' }, scale: { grade: 'C', note: 'Plants at about 100%' }, pass: { grade: 'B', note: 'Tariff risk pushed to customers' } } },
            { company: 'Advait Energy', trend: 'narrowing', trendNote: 'Good transmission-hardware niche funding batteries, electrolysers, fuel cells and owned storage projects.',
                grades: { brand: { grade: 'C', note: 'Utility sales' }, qual: { grade: 'B', note: 'Approved by 10+ utility boards' }, sticky: { grade: 'C', note: 'Tender-based' }, scale: { grade: 'D', note: '₹715cr across seven businesses' }, pass: { grade: 'C', note: 'Project pricing' } } },
            { company: 'JD Cables', trend: 'narrowing', trendNote: 'Capacity doubled cheaply, but a ₹407cr highway job sits outside its skills and guidance was cut within a quarter.',
                grades: { brand: { grade: 'D', note: 'State-board sales' }, qual: { grade: 'C', note: 'Eastern state-board registrations' }, sticky: { grade: 'C', note: 'Tenders' }, scale: { grade: 'D', note: '₹365cr' }, pass: { grade: 'C', note: 'Tender prices' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Start with who is missing: the leaders of this industry are not on this list.** Polycab, KEI and Havells are filed elsewhere on the dashboard, and Polycab alone lifted its share of the organised domestic market to 30–31% in FY26 from 26–27%, then grew its wire-and-cable sales 39% in Q1 FY27. The eight companies here are the second tier and the specialists. So the question for each is what it owns that the leaders, and two new conglomerate entrants, cannot copy: UltraTech started its ₹1,800cr wire plant in Gujarat on 1 September 2026, three months early, and Adani has laid a foundation stone near Ahmedabad.",
                "**Dynamic Cables is the one to own.** It has held a 10.5–11% operating margin for six straight quarters through the sharpest metal spike in years, earns about 26% on capital, carries almost no net debt and has a clean audit. High-voltage cables rose from 35% of its sales in FY19 to 63% in FY26, and exports reached 13% of Q1 sales with its first US shipments. The weak spots are real: volume grew only 5–6% in Q1, the order book has sat at ₹808–811cr for two quarters, and its ₹40–45cr new plant is 15 months late. I have trimmed my estimate from 20% to about 18% a year for that reason; the price needs about {need:Dynamic Cables|15–16}%, so it still fits.",
                "**Follow RR Kabel; wait on KSH, Finolex and Laser Power.** **RR Kabel** is the best-executed business here: wire-and-cable volume grew 17% in Q1 against an industry at 10–12%, its segment margin rose from 7.4% in FY25 to 9.9%, its fans-and-lights arm reached break-even after missing that target in FY26, and India Ratings upgraded it to AA in September. But its Q1 profit was lifted by forex gains and a one-off credit, FY26 free cash flow was close to zero, and ₹1,107cr of interest-bearing supplier credit sits inside its payables. The price needs about {need:RR Kabel Ltd.|23}% a year against my ~20%, so I move it from own to follow and would buy it on weakness. **KSH** raised every target in Q1 and I raise my estimate to about 22%, but the price needs about {need:KSH International|25}% and it has not produced operating cash in four of the last five years. **Finolex** is earning a fibre windfall under a family control dispute, and **Laser Power**'s interest savings are real but its revenue fell about 10% in FY26.",
                "**Pass on Paramount; avoid Advait Energy and JD Cables.** Paramount's recovery is the removal of a US tariff plus one-off insurance money; Advait is spending more than its net worth on batteries and hydrogen with negative operating cash; JD Cables cut its guidance within 16 weeks and ended FY26 with ₹0.54cr of cash. **Two things to hold onto before reading the rest.** First, **read tonnes, not revenue**: Crisil expects industry revenue to rise 28–30% this year on volume of only about 10%, because copper and aluminium are passed through. Second, **cash conversion is the real test**: five of these eight companies had negative operating cash flow in FY26, because dearer metal ties up money in stock and unpaid bills even when contracts pass the price on.",
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
                "Wire and cable is about a ₹1 lakh crore organised industry (Crisil Ratings, June 2026), roughly half of it house wire and power cable. Volume has grown more than 15% a year for five years and more than 20% in FY26, beating Crisil's own forecast of 15–16% revenue growth. For FY27 Crisil expects revenue up 28–30% but volume only about 10%: prices do the rest, because copper and aluminium rose 22–27% in FY26 and metals are 75–80% of raw-material cost. Crisil also expects operating profit to rise only 12–13%, so margins shrink, and capacity to grow 20–22% by March 2027, nearly half of it from new players. **My view: demand is still strong, but this is the middle-to-late part of an upcycle. FY27's revenue growth is mostly price, capacity is growing twice as fast as volume, and the new entrants are aiming at house wire just as housing sales cool.**",
            ],
            points: [
                {
                    label: 'Where the profit sits',
                    text: "Metal → drawn and insulated wire → sold either on **brand and dealer reach** or on **approvals and tenders** → electrician, contractor, utility or equipment maker. Because metal is mostly passed through, what a maker really earns is a conversion fee plus whatever the brand or the approval adds. The leaders show the ceiling: Polycab's wire-and-cable margin was about 13% in Q1 and KEI targets 11–12%. Inside this list the spread is wide: **RR Kabel** earns 11–12% on domestic wire but only 6–7% on domestic cables; **Finolex**'s electrical segment earned 10.3% in FY26 while its communication arm earned 2.8%; **Advait**'s transmission products earned 17.2% while its solar and battery contracting earned 5.2%; **Laser**'s projects earn about 20% against about 10% in its factories. **My view: the profit sits where approvals take years or where the electrician asks for the brand; the thinnest pools are low-tension cable and conductor sold by tender, and contracting.**",
                },
                {
                    label: 'Where the demand is coming from',
                    text: "**The grid is the largest driver.** The Central Electricity Authority's transmission plan calls for about ₹9.15 lakh crore of investment and about 1.9 lakh circuit-km of new lines by 2032, and Polycab expects line additions to run above 20,000 km a year against about 15,000 historically. Renewables add solar cable, high-tension cable and conductor: India added 44.6 GW of renewable capacity in FY26, and Dynamic's solar cables more than doubled to 18–19% of its sales. **Housing is softer**: sales in the top seven cities fell 6% in April–June 2026 (ANAROCK), and building-wire volume grew only in low single digits in Q1 as dealers cut stock when aluminium fell 18–20% in June. **Data centres** are the story every company tells; Polycab sizes it at ₹20,000–25,000cr over six to eight years, but RR says its own data-centre sales are ‘very less’ and Dynamic and JD call the market nascent. **My view: grid spending is the demand that lasts to 2032; house wire is where the cycle will show first.**",
                },
                {
                    label: 'The cycle: capacity and metal prices',
                    text: "Industry plants ran at about 75% in FY26, and capacity rises 20–22% by March 2027 against about 10% more volume (Crisil). **UltraTech**'s Ultravolt plant at Bharuch (10.98 lakh km a year) started commercial production on 1 September, aimed at house wire and light-duty cable; Adani has not given a start date. Incumbents are spending too: Polycab ₹1,200–1,600cr a year, Havells ₹1,400cr this year mostly on cables, RR Kabel ₹1,200cr over FY26–FY28, and Crisil counted ₹8,000–8,500cr of sector capex in FY25–FY26 alone. The new capacity lands where there is already slack: RR runs its wire lines at 65–70% against 90%-plus for cables. **Metal prices are the other swing**: J.P. Morgan (August 2026) expects aluminium about 14% cheaper in 2027 and copper roughly flat, so FY28 revenue growth should fall back toward volume growth, and anyone holding dear stock when prices turn books a loss. **My view: expect margin pressure first in house wire and commodity low-tension cable, least in high-voltage and export-approved products.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**RR Kabel** depends on housing, on holding shelf space against UltraTech and on its ₹1,200cr cable expansion landing on time. **Finolex** depends on building wire and on a fibre shortage that is already easing (standard fibre fell from $17–18 a km to $12–13). **KSH** depends on transformer makers' three-to-five-year order books and on funding its working capital. **Dynamic** depends on private project and solar spending and on its late new plant. **Laser** and **JD** depend on state distribution companies' tenders and payments. **Paramount** depends on US trade policy and a plant due in FY28, and **Advait** on Gujarat utilities and on its battery and hydrogen plants working. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Branded house wire', 'RR Kabel, Finolex', '7–12%', '16–28%', '**62–71%**', 'Dealers pay fast; the brand holds price'],
                        ['Qualified cables and conductor', 'KSH, Dynamic', '6–11%', '21–26%', '**−15% to 48%**', 'Approvals protect the fee; growth eats cash'],
                        ['Utility cables and projects', 'Laser, Paramount, Advait, JD', '1–16%', '12–34%', '**−114% to 26%**', 'Tenders set price; state boards pay slowly'],
                    ],
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Organised industry revenue', 'About ₹1 lakh crore in FY26; volume +20% or more', '**FY27 revenue +28–30%**, volume ~10%, prices +18–20%', 'Crisil Ratings, Jun 2026'],
                        ['Operating profit and capacity', 'Plants ~75% used in FY26', 'Operating profit +12–13%; capacity **+20–22%** by March 2027, half from new players', 'Crisil Ratings, Jun 2026'],
                        ['Market size (US dollars)', '$21.2bn in 2025; ~74% organised; house wire 32%', '~9% a year to 2031; communication cable fastest (12.4%)', 'Mordor Intelligence, in Paramount AR FY26'],
                        ['Domestic market to 2030', 'About ₹1 lakh crore', '₹1.7 lakh crore by 2030 (about 13–14% a year)', 'Polycab, Sep 2026'],
                        ['Transmission build-out', 'About 15,000 circuit-km a year historically', '₹9.15 lakh crore and ~1.9 lakh circuit-km to 2032', 'CEA National Electricity Plan'],
                        ['Copper and aluminium', 'Up 22–27% in FY26; PVC ~12%', '2027: copper ~$13,800/t (flat); aluminium $3,075/t (**−14%**)', 'Crisil; J.P. Morgan, Aug 2026'],
                        ['Housing', 'Top-7-city sales −6% in Apr–Jun 2026; launches +7%', 'Building-wire volume low single digits in Q1', 'ANAROCK; Finolex and Polycab calls'],
                        ['Quality rules', 'BIS mark compulsory for PVC (IS 694) and heavy-duty (IS 1554) cables', 'No new cable quality order pending', 'BIS, Sep 2026'],
                        ['US trade', 'IEEPA tariffs struck down 20 Feb 2026', 'A temporary 10% tariff ran to 24 July 2026; refunds under way', 'Miller & Chevalier; ICRA on Paramount'],
                    ],
                    note: 'Crisil covers about 70% of organised revenue through 17 rated makers. The rupee conversion of the dollar forecast depends on the exchange rate.',
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
                    text: "**KSH** was the first Indian maker of continuously transposed conductor about 20 years ago, and management says a new entrant takes five to seven years to qualify up to 765 kV, with each utility approving separately. Its repeat revenue is 97%, and 80–85% of customers sign year-long fee schedules, so copper risk sits with the customer. Hitachi Energy signed a five-year framework in Q1, though with no quantity or price yet. **Dynamic** holds UL approval for the US, Power Grid approval for two conductor types and NABL-accredited test labs, and held its margin at 10–11% through the metal spike because about 80% of its orders carry full metal price-variation clauses. **My view: the higher the voltage and the costlier a failure, the fewer the bidders; these edges should last.**",
                },
                {
                    label: 'Lasting but under attack: the brand and the electrician',
                    text: "**RR Kabel** reaches 2.15 lakh-plus retail touchpoints and has 6.65 lakh electricians on loyalty programmes. It grew volume 16–17% against an industry at 10–12% by management's estimate, resets prices whenever metal moves 2–3%, and held its gross margin at about 18.5% through the copper spike, which is evidence of real pricing power. **Finolex** claims 23.9% of organised wire and about 2.15 lakh retailers, but it made 14 price changes in FY26 (net +24–25%), dealers resisted holding stock, and building-wire volume barely grew. Money buys shelf space faster than it buys approvals, which is exactly why UltraTech is entering. **My view: RR's moat is the stronger of the two and is still widening; Finolex's is being tested first.**",
                },
                {
                    label: 'Real but narrow: technology and niche share',
                    text: "**Finolex** is one of only two Indian makers of fibre preform, the glass rod fibre is drawn from, which saves a 5% import duty and should cost 5–10% below market once stable. But more than half its fibre revenue is on year-long fixed-price contracts, which caps the upside when prices rise. **Advait** claims about half of India's stringing-tool market and the first Indian-made emergency restoration towers, won Power Grid approval for optical ground wire in Q1, and its transmission products have earned 16–17% for three years. But optical ground wire carries no metal price-variation clause, so a metal spike comes out of its margin.",
                },
                {
                    label: 'Temporary: full plants in a tight market',
                    text: "**Paramount** runs both plants at about 100% (‘the problem is not selling, the problem is manufacturing’), **Dynamic** at about 85%, and **RR** at 90%-plus in cables. Tight capacity flatters margins until the industry's 20–22% of new lines arrive. The opposite cases show it: **Laser** ran at 62% in FY26 after lifting capacity 38%, and **JD Cables** has just doubled its capacity to 56,000 km, so neither has scarcity to sell.",
                },
                {
                    label: 'Barely a moat: tenders and borrowed technology',
                    text: "**Laser**, **JD Cables** and **Paramount** sell mostly by tender, and their raters say so: ICRA finds Paramount has ‘limited pricing power in an intensely competitive market’, and Infomerics describes JD's field as fragmented with a ‘significant price war’; JD's MD says he cannot raise prices without losing contractors. Advanced high-temperature conductors (HTLS) are the differentiator everyone cites, but Laser and Dynamic both hold tie-ups with the same US licensor, Apar and Sterlite use a rival technology, and tenders are open to all. Laser has bid for about ₹1,250cr of ₹3,500cr of tenders and won one order of undisclosed value. **Treat it as marketing until the purchase orders show in revenue.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Polycab (30–31% of the organised domestic market), KEI Industries (strong in extra-high-voltage cable, with a ₹793cr order book there), Havells (cables margin fell from about 12.6% to 10.4% in Q1), Apar (conductors and cables), V-Guard, UltraTech's Ultravolt, Adani's planned plant, and many unorganised local makers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Metal inflation made this year's revenue growth close to meaningless; the honest measures are volume, margin per tonne and cash. Crisil expects the industry's operating profit to grow less than half as fast as revenue in FY27, and Havells' cables margin already fell two points in Q1 as input costs rose faster than prices.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: scale, contracts and pass-through',
                    text: "**RR Kabel**'s wire-and-cable margin rose from 7.4% in FY25 to 8.9% in FY26 and 9.9% in Q1, against a 9.5% guide for FY27 and 10.5% by FY28; management says Q1 carried no stock gain, and domestic cables at 6–7% leave room to improve. **KSH**'s profit per tonne rose from ₹52,500 in FY25 to ₹67,625 in FY26 and ₹93,325 in Q1, on more transformer conductor, exports up 76% and new customers at market-linked fees; management is ‘comfortable’ at about ₹75,000 for FY27, below Q1 but above FY26. **Dynamic** runs an ‘80-10-10’ model (80% materials, 10% conversion cost, 10% margin) and delivered 10.8% in FY26 and 10.9% in Q1. **My view: these three margins are earned, not borrowed, though KSH's Q1 was a peak quarter for mix.**",
                },
                {
                    label: 'Not structural: windfall quarters and one-offs',
                    text: "**Finolex**'s communication arm earned about 30% in Q1 against 2.8% in FY26, on fibre bought cheaply in November–December 2025; management said ‘I do not think 30% is sustainable’ and expects low double digits by year-end, and standard fibre prices have already fallen from $17–18 a km to $12–13. **RR Kabel**'s Q1 profit rose 129%, but other income jumped to ₹32.9cr from ₹12.4cr (mostly forex, ‘not a normal run rate’) and a ₹13.8cr credit reversed part of a labour-code charge. **Paramount**'s FY26 profit included ₹27.8cr of key-man insurance maturities and about ₹11cr of forex gains, and FY27 will include US tariff refunds (₹8cr received, ₹20–22cr expected). **Laser**'s FY26 consolidated profit included a one-time ₹32cr gain. **Treat all of these as windfalls, not run-rate.**",
                },
                {
                    label: 'Recovering, or changing with the mix',
                    text: "**Paramount**'s operating margin fell to 1.4% in the September 2025 quarter, when US exports ran at about a 4% loss under a 50% duty, and recovered to 6.6% in Q1; management wants FY25's 7.7–8% back by Q4 FY27. **Advait**'s margin fell from 17% in FY24 to 12% in FY26 as 5%-margin solar contracting grew, then rose to 13.8% in Q1 largely because solar revenue collapsed to ₹3.1cr: a mix effect, not an improvement. **Laser**'s rose from about 10% to 13% on more high-tension cable and project work. **JD Cables**' fell from 16% in H1 FY26 to 12% in H2, as other expenses jumped from about ₹4cr to ₹24cr on its first highway job.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**JD Cables** had negative operating cash for three straight years (−₹13cr, −₹18cr, −₹74cr), a 168-day cash cycle and ₹0.54cr of cash at March 2026, and over five years tied up ₹175cr, about half a year's sales. **Laser** tied up ₹736cr over five years, mostly customer bills (₹901cr): customers take 216 days to pay, its own working-capital days rose from 77 to 129 in two years, and ₹800cr of new projects are at the cash-hungry stage. **KSH** tied up ₹519cr, mostly stock (₹384cr); its FY26 free cash of −₹228cr was paid for by the IPO.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Finolex**'s operating cash fell from ₹577cr in FY24 to ₹207cr and then ₹49cr in FY26 after it built about ₹300cr of stock as a war hedge. **RR Kabel** turned only ₹295cr of ₹786cr operating profit into cash in FY26, and its inventory days rose from 59 to 81; ₹1,107cr of letters-of-credit acceptances (₹374cr a year earlier) sit in its payables, and India Ratings counts them as debt, putting adjusted leverage at 1.78 times operating profit in FY26, easing to 1.02 in Q1. **Paramount** swung from ₹104cr of operating cash to −₹38cr, and **Advait** from ₹46cr to −₹10cr.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**KSH**'s working-capital days fell from 71 to 60 in a year, and management says 30–35 days is ‘a multi-quarter, not a multi-year process’. **Paramount**'s receivable days fell from 79 to 64 in Q1 as the March export bills came in. **Dynamic**'s customers pay in 88 days against 121 in FY24, its operating cash was ₹56cr and ₹62cr in the last two years, and it used only about 24% of its bank limits.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Dealers pay quickly (RR 37 days, Finolex 21), so wire makers run short cycles; utility suppliers wait for state boards. **Advait**'s cycle is negative only because its suppliers wait 192 days, and CRISIL counted 307 days of gross current assets at March 2025. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['RR Kabel Ltd.', 'Net working capital 50 days (49 in March); ₹600–650cr of capex in FY27; rated AA from September', 'Borrowings ₹232cr plus ₹105cr leases against ₹141cr cash (March); ₹1,107cr of supplier credit in payables'],
                        ['Finolex Cables', '~₹300cr capex in FY27, all from its own cash', 'No long-term debt; cash and liquid investments ~₹2,700cr (Crisil, Sep 2025)'],
                        ['KSH International', 'Working capital 60 days (65 in Q4); debt ₹481cr, debt-to-equity 0.57', 'Net debt ~₹232cr at March after the IPO'],
                        ['Dynamic Cables', 'Debt rose because the same stock costs 20–30% more; no June balance sheet', 'Borrowings ₹43cr, about cash-neutral at March'],
                        ['Laser Power & Infra', '₹490cr of IPO money repaid loans; gross debt ~₹360cr; interest took 55% of Q1 operating profit', '~₹240cr of deposits, mostly pledged as bank margin money'],
                        ['Paramount Communications', '‘We have not taken any debt as yet’ for the new plant; debt-to-equity to stay under 0.3', 'Borrowings ₹123cr; free cash ~₹5cr (ICRA); ₹99.95cr of new equity received'],
                        ['Advait Energy', 'No Q1 call; FY27 capex ₹300–350cr, ‘predominantly … debt’', 'Borrowings ₹95cr; borrowing limit raised to ₹1,500cr at the AGM'],
                        ['JD Cables', 'Reports half-yearly; ~₹20cr capex now and ₹15–20cr more in FY27', 'Borrowings ₹57cr, including ₹10.8cr from the MD; cash ₹0.54cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Balance-sheet figures are March 2026 (annual reports, Screener, rating reports).',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: the grid and transformers',
                    text: "Transmission spending shows first in transformers and conductors, then in distribution cable. **KSH** is going from 43,445 to 59,045 tonnes by March 2027 (Supa Phase 2, ₹150–160cr, mostly from IPO money), started its own copper upcasting plant in early August, and management sizes India's demand for its main product at 70–75,000 tonnes by FY27–28 against about 40,000 in FY25. **Dynamic**'s ₹40–45cr Reengus plant should add ₹240–300cr of sales at full use, about a fifth more, by end-FY28. **Paramount**'s ₹300cr Narmadapuram plant targets ₹500cr of sales in FY28 and ₹1,200cr in FY29 at a 9–10% margin, and 132 kV cables. **JD Cables**' new unit doubles its capacity to 56,000 km. **My view: this is the most durable growth in the sector, but everyone is adding capacity at once.**",
                },
                {
                    label: 'Growth driver: house wire, brands and cables',
                    text: "**RR Kabel**'s ₹1,200cr Project RRise (FY26–FY28) puts about 80% into cables, up to 220 kV, adding lines every six months; the three-year aim is 18% volume growth a year and 2.5 times the operating profit over the three years to FY28. It is also buying U M Cables' optical-fibre cable business for ₹77cr. **Finolex** aims for ₹500cr of consumer-goods sales by FY28 and is doubling its solar-cable lines. The shift from unbranded to branded wire adds 2–3 points a year. **My view: RR's cable push is the right move, because its wire plants already have spare room and UltraTech is aiming at wire.**",
                },
                {
                    label: 'Growth driver: exports',
                    text: "**RR Kabel** exported 29% of Q1 revenue to 66 countries, earning 11–12% on export cables against 6–7% at home; the Middle East is about 12% of group sales. **Paramount** sold ₹155cr abroad in Q1 (up 77% on the quarter) and targets ₹700–800cr in FY27. **Dynamic**'s exports reached 13% of Q1 sales, the US 15% of them. **KSH** exported 26.5% of FY26 revenue and wants to return to about 40%. **Finolex** exported ₹50cr in Q1, as much as all of FY26. **My view: exports lift the mix, but FY26 showed a tariff can erase an export margin in one quarter.**",
                },
                {
                    label: 'Growth driver: fibre and new energy',
                    text: "**Finolex** is taking fibre drawing from 4 to 8 million fibre-km a year by September for about ₹100cr (with the first preform phase); at $11 a km that is about $88 million a year of fibre, so the payback is fast if prices hold, but its own preform covers only about 4 million and fibre is a boom-and-bust market. **Advait** is building a 2.5 GWh battery plant (machinery due in Q3 FY27), electrolysers (a 100 MW phase by Q4 FY27) and owned battery-storage projects, and its deck shows FY27 revenue of ₹1,251cr, up 75%. By its own figures, owned assets return 12–15% against 25–30% for manufacturing. **My view: Finolex's bet is cheap and quick; Advait's is large, slow and moves it into its lowest-return work.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**KSH** beat on every count: volume +30% against ‘at least’ 21%, ₹93,000 a tonne against ₹65–74,000, working capital down to 60 days, and its upcasting plant ahead of the ‘H2’ promise. **RR Kabel** delivered volume +17% inside its 16–18% range, a 9.9% segment margin against 9.5% guided, and break-even in consumer goods. **Dynamic** held its 10.5–11% margin band and reached 13% exports ahead of plan.",
                },
                {
                    label: 'Cautious',
                    text: "**RR** kept its guidance rather than raising it and warned that consumer goods may slip back into loss in Q2. **Finolex** gives no guidance and says its fibre margin will fall. **Dynamic** says customers book only two to four months ahead while metal is high (‘price is king’), so volume stays slow.",
                },
                {
                    label: 'Missed',
                    text: "**Dynamic**'s new plant, promised for Q2 FY26, slipped about 15 months; the call says September 2026, its own deck printed September 2027, and no start had been announced by 27 September. **JD Cables** cut its growth guide from 50–60% to 40–50% in 16 weeks, dropped its plan to bid for more highway work, and started its new unit about six weeks late. **Advait**'s battery factory moved from October to machinery arriving in Q3 FY27, full solar contracts promised for this year have not appeared, and a ₹90–100cr outside raise for its renewable arm was never announced. **Paramount** grew volume 4% against a ‘minimum 10%’.",
                },
                {
                    label: 'Mixed',
                    text: "**Laser** held its first call as a listed company and guided 15–16% growth a year, as in the last five years, although FY26 revenue fell about 10% and its order book at March differs between its presentation (₹3,243cr) and its rating report (₹2,443cr). **Paramount** grew revenue 17.4%, inside its 15–20% range, and brought its receivables back as promised. **Advait** delivered +51% revenue and the extra point of margin, but restated its ₹1,600–1,650cr order-book target as an order-inflow target.",
                },
                {
                    label: 'My outlook',
                    text: "Industry volume should grow about 10% in FY27 and 10–12% a year after that, with revenue swinging with metal. **I now expect KSH to compound earnings at about 22% (up from 18%, as volume and profit-per-tonne guidance both rose), RR Kabel at about 20%, Dynamic at about 18% (down from 20%, on flat orders and a late plant), Laser at about 18%, Paramount and Advait at about 15%, Finolex at about 12% and JD Cables at about 10%.** The risk to all of these is the same: 20–22% more capacity and cheaper aluminium in 2027 could take half a point to a point and a half off margins by FY28.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['KSH International', 'Capacity to 59,045 tonnes; profit per tonne ~₹75,000; working capital', '14% / **22%** / 28%'],
                        ['RR Kabel Ltd.', 'Cables to 220 kV; margin to 10.5%; exports; UltraTech in wire', '14% / **20%** / 26%'],
                        ['Dynamic Cables', 'Reengus plant; high-voltage and solar mix; US exports', '12% / **18%** / 24%'],
                        ['Laser Power & Infra', 'Interest saving; high-tension mix; state payments', '10% / **18%** / 25%'],
                        ['Paramount Communications', 'Margin recovery; Narmadapuram from FY28; US policy', '8% / **15%** / 25%'],
                        ['Advait Energy', 'Transmission products; batteries and electrolysers', '0% / **15%** / 25%'],
                        ['Finolex Cables', 'House wire under attack; fibre after the windfall', '5% / **12%** / 18%'],
                        ['JD Cables', 'Doubled capacity; cash and guidance record', '0% / **10%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. Earnings, not revenue: metal prices move revenue without moving profit. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['RR Kabel Ltd.', 'Wire-and-cable volume ~18%; margin 9.5% (aiming for 10%), 10.5% by FY28; consumer goods +20% at break-even', '₹1,200cr over FY26–FY28, ₹600–650cr in FY27; ₹77cr fibre-cable purchase', '**Delivered**: volume +17%, margin 9.9%, break-even in consumer goods'],
                        ['KSH International', 'Volume ~26%; ~₹75,000 a tonne (‘not guidance’); working capital 30–35 days', 'Phase 2 ₹150–160cr, done by March 2027', '**Beat**: volume +30% against 21%; ₹93,000 a tonne; upcasting early'],
                        ['Dynamic Cables', '18–20% a year over the long run; margin 10.5–11%', '₹40–45cr Reengus plant', '**Slipping**: margin met; plant 15 months late and not yet announced'],
                        ['Finolex Cables', 'None formal; fibre margin to low double digits; consumer goods ₹500cr by FY28', '~₹300cr in FY27, from own cash', '**Mixed**: fibre expansion pulled forward; preform still stabilising'],
                        ['Laser Power & Infra', 'Revenue +15–16% a year; stable margin; ~₹40cr interest saving', 'Phased; land offered at Kharagpur', '**Unproven**: first call; FY26 revenue fell ~10%'],
                        ['Paramount Communications', 'Revenue +15–20%; FY25 margin by Q4 FY27; exports ₹700–800cr', '₹300cr Narmadapuram plus ₹50–55cr a year', '**On track**: revenue +17.4%, margin 6.6%; volume +4%'],
                        ['Advait Energy', 'Revenue 40%-plus (deck: ₹1,251cr, +75%); margin +1 point', '₹300–350cr in FY27, mostly debt', '**Slipping**: margin met; battery plant and solar contracts late'],
                        ['JD Cables', 'Revenue +40–50% (cut from 50–60%); no new highway work', '~₹20cr now and ₹15–20cr more', '**Walked back**: guide cut within 16 weeks'],
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
                    label: 'Too much capacity at once',
                    text: "Capacity rises 20–22% by March 2027 against about 10% more volume, nearly half of it from new players (Crisil). **UltraTech** is already producing, aimed at house wire, where **RR Kabel** and **Finolex** earn most; RR says it saw ‘nothing special’ in pricing in Q1, and Finolex did not set out a response beyond its brand. India Ratings flagged the entry in RR's upgrade. **A price war would show first in dealer margins and in building-wire volume, the line that is already weakest.**",
                },
                {
                    label: 'Metal prices and working capital',
                    text: "Rising metal swells stock and bills; falling metal causes dealers to cut stock, as they did in June when aluminium fell 18–20%. Project customers delay orders while prices are high (**Dynamic**'s book is flat), and when prices fall anyone holding dear stock books a loss (**Finolex**'s fibre windfall runs the other way). J.P. Morgan's forecast of aluminium 14% cheaper in 2027 would reverse this year's revenue inflation. **KSH**'s interest cost more than doubled in Q1 to ₹17cr, and every tonne of new capacity needs about two months of copper to fund.",
                },
                {
                    label: 'Governance: control, related parties and group dealings',
                    text: "**Finolex** has a promoter control dispute: it is appealing in the Bombay High Court against a Pune court order on votes cast by Orbit Electricals (30.70%) and Finolex Industries (14.51%), which it in turn owns 32.39% of; seven non-executive directors served terms of weeks to months in 2024. **Advait**'s Q4 battery revenue (about ₹43cr) was contracting for its own project, and its consolidated revenue equals standalone plus subsidiary with no visible elimination; subsidiaries with 38% of revenue are audited by other auditors, and one foreign subsidiary is unaudited. **Paramount**'s shareholders rejected promoter warrants at ₹60 in August 2025, then approved new ones at ₹42 in 2026, with only 25% paid upfront. **JD Cables**' MD sold about ₹11.6cr of shares in the IPO while lending ₹10.8cr back to the company at interest.",
                },
                {
                    label: 'Tax disputes, guarantees and audit remarks',
                    text: "**RR Kabel**'s contingent income-tax demands jumped from ₹11.5cr to ₹105.3cr (2008-09 to 2023-24, under appeal); its auditor found one accounting system without full edit logs until November 2025, and it has a comfort letter for up to BDT 75cr of loans to its Bangladesh joint venture. **Finolex** carries its extra-high-voltage joint venture at ₹110.9cr after ₹208.6cr of past write-downs (its auditor's key audit matter) and guarantees ₹185.7cr of its bank lines. Contingent liabilities are ₹363cr at **Advait** (from ₹212cr), ₹208cr at **Dynamic** (mostly bank guarantees), ₹179cr at **Finolex** and about ₹151cr at **Paramount**, whose auditor noted late advance-tax payments. **KSH** must export ₹201.8cr of goods to keep ₹33.6cr of duty savings. **Laser**'s FY25 auditor found its stock statement to banks ₹93.4cr below its books.",
                },
                {
                    label: 'Management changes',
                    text: "**KSH**'s CEO resigned on 31 March 2026, three months after listing, and neither call mentioned it. **Laser**'s company secretary resigned on 23 September, two months after listing, and its presentation and rating agency give order books ₹800cr apart. **Finolex** named a new CEO and CFO in mid-2026 amid its board fight. **RR**'s founder stepped down as executive chairman in May 2025 and its CFO changed in November 2025. **Advait**'s CFO, the MD's wife, stepped down in November 2025; **Dynamic** had India Ratings withdraw its rating at its own request in June (CRISIL's A rating remains), and the MD's daughter resigned as head of HR in September.",
                },
                {
                    label: 'Government customers and export policy',
                    text: "**Laser** gets about 65% of revenue from government, and its customers take 216 days to pay; **JD Cables** says state boards pay in 60–90 days; **Advait**'s orders are dominated by Gujarat utilities. **Paramount** earns about 30% of sales in one export market, and FY26 showed a US tariff can turn that margin negative within a quarter; the temporary 10% tariff that replaced it was set to run only to 24 July, so US policy remains the swing. **RR**'s Middle East sales, about 12% of revenue, were disrupted by the war in Q4. **Buy these for the balance sheet you can see, not the payments you are promised.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **9% at 14x, 15% at 24x, 17% at 28x, 19% at 34x, 20–21% at 37–38x, 23% at 46x and 25% at 54x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Finolex** shows ₹4,344cr of net cash, so it looks much cheaper on EV/EBITDA than on P/E, but part of that is its stake in Finolex Industries, which owns part of Finolex in return; count the treasury cash, not the cross-holding. **RR Kabel**'s small net cash leaves out ₹1,107cr of interest-bearing supplier credit, which India Ratings treats as debt. **Laser**'s ₹711cr of net debt is from before the IPO repaid about ₹490cr, and **KSH**'s debt rose again to ₹481cr in Q1 as copper and volume grew.",
                },
                {
                    label: 'Fits: prices that ask for about what I expect',
                    text: "**Dynamic** needs about {need:Dynamic Cables|15–16}% a year against my ~18%, even after I cut my estimate, which is why it is the one to own. **JD Cables** needs only about {need:JD Cables|9}% against my ~10%, but a price that fits is not a reason to buy a company with three years of negative operating cash, ₹0.54cr in the bank and a guide cut within one quarter; it stays an avoid.",
                },
                {
                    label: 'Full, and close to the line',
                    text: "**RR Kabel** needs about {need:RR Kabel Ltd.|23}% a year against my ~20%, **Laser** about {need:Laser Power & Infra|20}% against ~18% (on today's price it has just crossed into {label:Laser Power & Infra|fits}), and **KSH** about {need:KSH International|25}% against my raised ~22%. All three sit within a few points of Fits: at the price when this was written, RR would fit after a fall of about 7–8%, Laser after about 3% and KSH after about 8%. That is why RR is a follow, to be bought on a weak quarter, and KSH and Laser are waits until their cash improves.",
                },
                {
                    label: 'Full, and well short',
                    text: "**Paramount** needs about {need:Paramount Communications|19}% against my ~15%, **Finolex** about {need:Finolex Cables|17}% against ~12%, and **Advait** about {need:Advait Energy|21}% against ~15%, the widest gap and close to Stretched. For Paramount and Advait, the price assumes new plants (Narmadapuram, the battery and electrolyser lines) arrive on time and earn well; for Finolex it assumes the fibre windfall is the new normal, which management itself denies.",
                },
                {
                    label: 'Earnings quality: which P/Es flatter',
                    text: "The live P/E uses reported profit, and four of these include one-offs. **Paramount**'s includes key-man insurance and, this year, tariff refunds; **RR Kabel**'s Q1 includes forex gains and a one-off credit; **Laser**'s FY26 includes a ₹32cr gain; **Finolex**'s includes the fibre stock gain and other income of ₹370cr in FY26, 60% of its operating profit, much of it treasury and associate income. **On core profit, each of these is a little more expensive than the table shows.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Dynamic Cables', rank: 1, stance: 'COMPOUNDER', segment: QUAL,
            what: "Jaipur-based maker of medium and high-voltage power cables, low-voltage and solar cables and niche conductors, sold mostly to private project contractors and solar developers, and since Q1 FY27 to US distributors.",
            view: "**The most disciplined business here, at a price that fits.** Its 10.5–11% margin has held for six quarters, return on capital is about 26%, net debt is about ₹15cr, and high-voltage cables are 68% of Q1 sales. But Q1 volume grew only 5–6%, the order book has been flat at about ₹811cr, and the ₹40–45cr Reengus plant is 15 months late. The price needs about {need:Dynamic Cables|15–16}% a year against my ~18%.",
            watch: 'The Reengus plant starting and adding revenue from Q4 FY27; the order book moving above ₹811cr; repeat US orders with the margin above 10%.',
        },
        {
            company: 'RR Kabel Ltd.', rank: 2, stance: 'PRICED', segment: BRAND,
            what: "Branded house wire and power cables sold through 2.15 lakh-plus retail touchpoints and to 66 countries, plus fans, lights, switches and appliances (9% of sales).",
            view: "**The best-executed business here, now priced for it.** Wire-and-cable volume grew 17% in Q1 and the segment margin reached 9.9% against a 9.5% guide. But Q1 profit was lifted by ₹32.9cr of other income (mostly forex) and a ₹13.8cr one-off credit, FY26 free cash was close to zero, payables hold ₹1,107cr of supplier credit, and income-tax demands rose to ₹105cr. The price needs about {need:RR Kabel Ltd.|23}% a year against my ~20%.",
            watch: 'The margin holding at 9.5%-plus as UltraTech’s wire reaches shops; FY27 operating cash recovering; new cable lines at Waghodia arriving on time.',
        },
        {
            company: 'KSH International', rank: 3, stance: 'PRICED', segment: QUAL,
            what: "Magnet winding wire, mainly continuously transposed conductor (the insulated copper bundles inside large power transformers), for 120-plus transformer and motor makers; listed December 2025.",
            view: "**The best niche in the sector, still priced ahead of it.** Q1 volume grew 30%, profit per tonne reached ₹93,000, and management raised its FY27 aims to about 26% volume and about ₹75,000 a tonne; I raise my estimate to about 22%. But operating cash was negative in four of five years, the top ten customers are 51% of sales, and the CEO resigned in March without mention on either call. The price needs about {need:KSH International|25}% a year.",
            watch: 'Profit per tonne near ₹75,000 as Phase 2 adds standard wire; working-capital days falling from 60 toward 30–35; positive operating cash in FY27.',
        },
        {
            company: 'Finolex Cables', rank: 4, stance: 'CYCLICAL', segment: BRAND,
            what: "One of India's best-known wire brands (23.9% of organised wire by its own count), plus auto, farm and solar cables, optical fibre with its own preform, and a high-voltage joint venture with Sumitomo.",
            view: "**A strong brand earning a windfall under a governance cloud.** Q1's 30% fibre margin came from fibre bought cheaply in late 2025, and building wire grew only in low single digits. Operating cash fell to ₹49cr in FY26, the joint venture needs a ₹185.7cr guarantee, and a promoter control dispute is before the Bombay High Court. The price needs about {need:Finolex Cables|17}% a year against my ~12%.",
            watch: 'The fibre margin once the cheap stock runs out; building-wire volume against UltraTech; the court outcome on control.',
        },
        {
            company: 'Laser Power & Infra', rank: 5, stance: 'SCALEUP', segment: TENDER,
            what: "Kolkata-based maker of power cables and aluminium conductors (73% of FY26 revenue), with a projects arm building distribution networks for state utilities; listed July 2026.",
            view: "**Two real improvements, both finite, and early warning signs.** High-tension cables rose to about 29% of revenue and ₹490cr of IPO money repaid debt, saving about ₹40cr a year of interest. But FY26 revenue fell about 10%, plants ran at 62%, customers take 216 days to pay, operating cash was −₹119cr, and its company secretary resigned two months after listing. The price needs about {need:Laser Power & Infra|20}% a year against my ~18%. By 28 September the price had fallen about 7% and the price check reads {label:Laser Power & Infra|fits}; the call stays wait until operating cash turns positive and customers pay faster.",
            watch: 'Operating cash turning positive as projects bill; revenue growth back in the mid-teens; the value of its first HTLS orders.',
        },
        {
            company: 'Paramount Communications', rank: 6, stance: 'TURNAROUND', segment: TENDER,
            what: "Delhi-based maker of power, telecom and railway cables for Indian industry and government, and a large exporter of low-voltage cable to US distributors.",
            view: "**A mechanical recovery with thin cash.** The operating margin rose from 1.4% to 6.6% as the US tariff went, and exports recovered to ₹155cr in Q1. But FY26 profit included ₹27.8cr of key-man insurance, volume grew only 4%, operating cash was −₹38cr and its credit rating is BBB. The price needs about {need:Paramount Communications|19}% a year against my ~15%.",
            watch: 'Exports running toward ₹700–800cr; term debt tied up for Narmadapuram; the margin back to FY25 levels by Q4 FY27.',
        },
        {
            company: 'Advait Energy', rank: 7, stance: 'AVOID', segment: TENDER,
            what: "Transmission-line products and services (optical ground wire, emergency restoration towers, stringing tools, live-line work), plus solar and battery contracting, electrolysers, fuel cells and owned battery-storage projects.",
            view: "**A good core funding a capital-hungry pivot.** Transmission products earned 17.2% on ₹459cr of FY26 revenue, but the group plans ₹300–350cr of capex this year, more than its ₹291cr net worth and mostly with debt, while operating cash was −₹10cr. Part of its battery revenue was contracting for its own project, and contingent liabilities rose to ₹363cr. The price needs about {need:Advait Energy|21}% a year against my ~15%.",
            watch: 'Operating cash; the battery plant installed in Q3 FY27; clean separation of work done for its own projects.',
        },
        {
            company: 'JD Cables', rank: 8, stance: 'AVOID', segment: TENDER,
            what: "Small Kolkata maker of low-tension aerial bunched cables, power cables and aluminium conductors for state boards and contractors in the East and North-East, with one ₹407cr highway contract.",
            view: "**Cheap for reasons that show in the cash.** Revenue grew 46% in FY26 but volume only 4%, operating cash was −₹74cr, and it ended the year with ₹0.54cr of cash while the MD lent it ₹10.8cr. Guidance was cut from 50–60% to 40–50% within 16 weeks and its highway strategy reversed. The price needs only about {need:JD Cables|9}% a year against my ~10%, but I would not buy on that.",
            watch: 'H1 FY27 results (due November) showing positive operating cash; the new unit above 50% use; progress on the highway job.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Qualified cables and conductor.** **Dynamic Cables: own.** Pass-through contracts, a rising high-voltage mix and 26% returns at a price that asks for less than I expect; the late plant and flat orders are the reasons I trimmed my estimate, not the reasons to sell. **KSH International: wait.** The best niche here and a management that beat every promise, but the price needs more than my raised estimate and the business has yet to produce cash.",
            "**Branded house wire.** **RR Kabel: follow**, and buy on a weak quarter. The route to the electrician is the durable asset and RR is executing well, but the price now asks for a little more than I expect, and its cash and supplier credit need to improve. **Finolex: wait.** A great brand and a cheap fibre bet, but the windfall is fading, house wire faces a funded entrant, and control is in court.",
            "**Utility cables and projects.** **Laser Power: wait.** Lower interest is real, but revenue fell, payments are slow and governance signals are early. **Paramount: pass.** A tariff removed and an insurance payout are not a moat. **Advait Energy: avoid.** Profit is not becoming cash, and the group is spending more than its net worth on its lowest-return work. **JD Cables: avoid.** Cheap on paper, empty in the bank.",
            "**What would change my view.** For the better: KSH turning operating cash positive; RR's price falling below the growth it needs; Dynamic's plant running and its order book growing; UltraTech competing on capacity rather than price. For the worse: a house-wire price war, aluminium falling fast enough to leave stock losses, or state boards slowing payments.",
            "**What to watch next quarter.** RR's margin and cash; Dynamic's plant and orders; KSH's profit per tonne and working capital; Finolex's fibre margin and the court case; Laser's operating cash; Paramount's exports and term loan; Advait's battery plant; JD's H1 results.",
        ],
        bottomLine:
            "Copper passes through, so rupee growth means little this year; what matters is who owns the route to the customer and who turns profit into cash. Own the disciplined qualified maker (Dynamic Cables), follow the best distributor for a better price (RR Kabel Ltd.), wait on KSH International, Finolex Cables and Laser Power & Infra, pass on Paramount Communications, and avoid Advait Energy and JD Cables until profit becomes cash.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/RRKABEL/consolidated/' },
        { label: 'Price hikes to haul cable and wire revenue up 28–30% this fiscal — Crisil Ratings, Jun 2026', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/06/price-hikes-to-haul-cable-and-wire-revenue-up-28-30-percent-this-fiscal.html' },
        { label: 'Revenue of cable and wire makers to rise 15–16% in fiscal 2026 — Crisil Ratings, Mar 2025', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2025/03/revenue-of-cables-and-wires-makers-to-rise-15-16percent-in-fiscal-2026.html' },
        { label: 'Copper and aluminium price outlook — J.P. Morgan, Aug 2026', url: 'https://www.jpmorgan.com/insights/global-research/commodities/aluminum-steel-copper-prices' },
        { label: 'Centre targets ₹9.15 lakh crore of transmission investment by 2032 — Business Today', url: 'https://www.businesstoday.in/latest/economy/story/centre-targets-rs-915-lakh-crore-investment-opportunity-in-transmission-sector-by-2032-450046-2024-10-15' },
        { label: 'Housing sales dip 6% across the top seven cities (ANAROCK) — Outlook Money', url: 'https://www.outlookmoney.com/invest/housing-sales-dip-6-per-cent-across-top-7-cities-says-report' },
        { label: 'Adani and UltraTech enter wires and cables — The Core, Jul 2026', url: 'https://www.thecore.in/business/adani-ultratech-india-wires-and-cables-2026-866586' },
        { label: 'UltraTech starts commercial production at its Bharuch wires and cables plant — ICICI Direct', url: 'https://www.icicidirect.com/research/equity/trending-news/ultratech-cement-starts-commercial-production-of-wires-cables-plant-in-bharuch-gujarat' },
        { label: 'Polycab Q1 FY27 earnings call — Investing.com', url: 'https://www.investing.com/news/transcripts/earnings-call-transcript-polycab-india-posts-strong-q1-2026-growth-shares-slip-93CH-4795590' },
        { label: 'KEI Industries Q1 FY27 analyst call — InvestyWise', url: 'https://www.investywise.com/kei-industries-analyst-call-transcript-for-q1-fy27-results/' },
        { label: 'RR Kabel annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d03c1b22-d5c8-467d-958d-810cbe0aff3d.pdf' },
        { label: 'RR Kabel rating rationale — India Ratings, Sep 2026', url: 'https://www.indiaratings.co.in/pressrelease/85799' },
        { label: 'Finolex Cables annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/db3dd190-5353-4bdc-a4d7-abd2cbc72058.pdf' },
        { label: 'KSH International annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4b4069cd-bbbb-4411-8788-e3ed3470cf51.pdf' },
        { label: 'KSH International rating rationale — CARE, Feb 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202602120237_KSH_International_Limited.pdf' },
        { label: 'Dynamic Cables annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/2c274df6-9e68-4184-8091-a5822370b725.pdf' },
        { label: 'Laser Power & Infra rating rationale — Acuité, May 2026', url: 'https://connect.acuite.in/fcompany-details/LASER_POWER_AND_INFRA_LIMITED_(ERSTWHILE_LASER_POWER_AND_INFRA_PRIVATE_LIMITED)/5th_May_26' },
        { label: 'Advait Energy Transitions annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/b8988b55-22b0-4a78-ac33-8078e02fa552.pdf' },
        { label: 'Paramount Communications rating rationale — ICRA, Jul 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdfViewer/144200' },
        { label: 'JD Cables rating rationale — Infomerics, Jul 2026', url: 'https://www.infomerics.com/admin/uploads/Pr-JD-Cables03Jul26.pdf' },
    ],
};
