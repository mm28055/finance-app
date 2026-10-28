import { SectorOverview } from './types';
import { plasticsBusinesses } from './plastics-businesses';
import { plasticsValuationInputs } from './card-data/plastics';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const ENGINEERED = 'Engineered plastics and films — products with a specification';
const PIPES = 'Plastic pipes — a PVC price cycle';

export const plastics: SectorOverview = {
    sector: 'Plastics',
    title: 'Plastics',
    format: 'ranked',
    businesses: plasticsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: plasticsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Time Technoplast': 18,
            'Garware Hi-Tech': 17,
            'Shaily Engg. Plastic': 25,
            'Finolex Inds': 6,
            'Prince Pipes': 15,
            'Apollo Pipes': null,
        },
    },
    standfirst:
        "Six companies that turn plastic resin into something worth more, in two very different businesses. Three make products to a customer's specification: industrial containers and composite gas cylinders (Time Technoplast), car and building films (Garware) and injector pens for generic weight-loss drugs (Shaily). Three make plastic pipes for farms and homes (Finolex, Prince, Apollo), a business ruled by the price of PVC resin and, this year, by trade policy that swung from zero import duty in April to a minimum import price in July. The specified-product makers earn more and grow faster. Every chart uses filed results and five years of history; the text draws on each company's last two calls, its annual report and rating report, and industry work from CRISIL, ICRA and Motilal Oswal.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): Prince and Apollo standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'The pipe makers’ margins swing with PVC prices: Finolex’s 25% in Q4 FY26 came from the March resin price spike, and Apollo’s fell to 3% when prices crashed in April.',
            values: {
                'Time Technoplast': [14, 15, 15, 14, 13],
                'Garware Hi-Tech': [22, 21, 15, 23, 27],
                'Shaily Engg. Plastic': [28, 31, 26, 28, 30],
                'Finolex Inds': [9, 15, 14, 25, 12],
                'Prince Pipes': [7, 9, 5, 13, 13],
                'Apollo Pipes': [8, 9, 7, 7, 3],
            },
            cellNotes: {
                'Apollo Pipes': 'Standalone figures; the consolidated business, which includes Kisan Mouldings, earned about 1% in Q1 FY27.',
                'Garware Hi-Tech': 'Q1 FY27: 27% on filed figures. The company’s own 30.3% includes ₹20cr of other income; management says the margin came from mix, with no one-offs.',
                'Finolex Inds': 'Q4 FY26 included ₹35–40cr of stock gains; management put the margin at about 22% without them.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Finolex’s volumes fell 27% in Q1 as dealers destocked after the PVC price crash; its revenue fell less because its prices were about 15% higher than a year earlier.',
            values: {
                'Time Technoplast': [10, 10, 13, 14, 25],
                'Garware Hi-Tech': [4, -8, -2, 9, 28],
                'Shaily Engg. Plastic': [38, 34, 26, 9, 14],
                'Finolex Inds': [-9, 4, -10, 12, -15],
                'Prince Pipes': [-4, -4, -1, 18, 5],
                'Apollo Pipes': [-8, -3, -20, 16, 11],
            },
            cellNotes: {
                'Shaily Engg. Plastic': 'Q1 FY27: healthcare revenue rose from ₹77cr to ₹142cr while its consumer business shrank.',
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
            note: 'Shaily’s return has risen from 11% to 29% as healthcare grew. The pipe makers earned well in FY22 and poorly since.',
            values: {
                'Time Technoplast': [12, 13, 16, 17, 17],
                'Garware Hi-Tech': [13, 12, 14, 21, 18],
                'Shaily Engg. Plastic': [null, 11, 14, 20, 29],
                'Finolex Inds': [27, 7, 11, 9, 12],
                'Prince Pipes': [28, 12, 15, 4, 6],
                'Apollo Pipes': [17, 9, 12, 7, 2],
            },
            cellNotes: {
                'Finolex Inds': 'Held down by about ₹5,000cr of investments on its books.',
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
            note: 'Time Technoplast carries long cycles because it sells to industry and government on credit; it targets about 90 days.',
            values: {
                'Time Technoplast': [161, 150, 141, 143, 161],
                'Garware Hi-Tech': [79, 60, 67, 68, 89],
                'Shaily Engg. Plastic': [92, 74, 81, 114, 135],
                'Finolex Inds': [98, 71, 98, 80, 134],
                'Prince Pipes': [102, 74, 121, 129, 71],
                'Apollo Pipes': [82, 57, 42, 36, 54],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Most here are close to that; Time Technoplast is lowest at 50% because its working capital keeps rising.',
            values: {
                'Time Technoplast': [58, 64, 59, 55, 26, 50],
                'Garware Hi-Tech': [72, 96, 61, 75, 63, 72],
                'Shaily Engg. Plastic': [67, 97, 78, 62, 81, 76],
                'Finolex Inds': [61, 105, 60, 80, 28, 61],
                'Prince Pipes': [-5, 144, 11, 73, 227, 74],
                'Apollo Pipes': [38, 100, 128, 80, 55, 81],
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
            note: 'Garware and Finolex produce the most free cash; Shaily and Apollo have spent heavily on new capacity.',
            values: {
                'Time Technoplast': [2.8, 3.4, 4.5, 4.3, -2.2, 2.3],
                'Garware Hi-Tech': [3.5, 10.3, 9.2, 12.8, 5.4, 8.5],
                'Shaily Engg. Plastic': [-11.6, -3.6, -0.5, 4.8, 4.0, -0.4],
                'Finolex Inds': [11.6, 3.2, 6.2, 6.4, 3.1, 6.2],
                'Prince Pipes': [-7.1, 9.8, -6.3, -5.5, 12.0, 0.7],
                'Apollo Pipes': [-0.8, -0.4, 2.8, -3.1, -5.6, -1.4],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Investments are counted as cash for Garware, Finolex and Prince.',
            note: 'Below zero means more cash than debt. Finolex’s large figure includes investments such as stakes in other companies, not just cash.',
            values: {
                'Time Technoplast': [1.6, 1.4, 1.0, 0.7, 0.2],
                'Garware Hi-Tech': [-0.8, -1.4, -1.7, -1.7, -2.0],
                'Shaily Engg. Plastic': [1.6, 1.8, 1.6, 0.9, 0.5],
                'Finolex Inds': [-2.5, -11.8, -7.2, -10.1, -6.7],
                'Prince Pipes': [0.2, -0.6, 0.0, 1.0, -0.6],
                'Apollo Pipes': [-0.0, 0.1, 0.4, -0.8, 0.1],
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
            note: 'Shaily spends the most, on pen-injector lines. Finolex spends the least.',
            values: {
                'Time Technoplast': [5.2, 5.2, 3.6, 3.6, 6.1, 4.7],
                'Garware Hi-Tech': [9.7, 4.9, 1.0, 2.8, 7.6, 5.0],
                'Shaily Engg. Plastic': [21.3, 18.5, 14.8, 9.1, 18.8, 16.3],
                'Finolex Inds': [1.8, 3.8, 2.0, 2.8, 1.6, 2.4],
                'Prince Pipes': [6.4, 3.5, 7.6, 10.2, 8.3, 7.1],
                'Apollo Pipes': [5.4, 8.0, 9.8, 10.7, 9.9, 8.9],
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
            note: 'Film and medical-device plants are capital-heavy; pipe plants turn over faster.',
            values: {
                'Time Technoplast': [2.8, 3.1, 3.6, 4.0, 4.3],
                'Garware Hi-Tech': [1.0, 1.0, 1.2, 1.5, 1.3],
                'Shaily Engg. Plastic': [1.7, 1.7, 1.4, 1.6, 1.6],
                'Finolex Inds': [4.7, 4.2, 4.1, 4.1, 4.0],
                'Prince Pipes': [4.1, 4.0, 3.2, 2.6, 2.4],
                'Apollo Pipes': [3.3, 3.3, 2.8, 2.3, 2.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'spec', label: 'Customer qualification', description: 'Products approved into a customer’s process or regulatory filing.' },
            { key: 'brand', label: 'Brand and distribution', description: 'Dealers, installers and a name buyers ask for.' },
            { key: 'tech', label: 'Technology', description: 'Products few can make, such as films, medical devices or composites.' },
            { key: 'cost', label: 'Resin and cost position', description: 'Own resin, scale, or pass-through contracts.' },
            { key: 'cash', label: 'Balance sheet', description: 'Debt, cash and investments.' },
        ],
        rows: [
            { company: 'Time Technoplast', trend: 'widening', trendNote: 'Composite cylinders up 29% in Q1; guides EBITDA growth of 19–20% this year.',
                grades: { spec: { grade: 'B', note: 'Approved by chemical and gas companies' }, brand: { grade: 'B', note: 'Leader in industrial packaging in many countries' }, tech: { grade: 'A', note: 'Type-4 composite cylinders' }, cost: { grade: 'A', note: 'Resin passed on monthly' }, cash: { grade: 'B', note: 'Net debt cut to near zero' } } },
            { company: 'Garware Hi-Tech', trend: 'widening', trendNote: 'Record margin; paint-protection and architectural films growing; TPU line due Q3.',
                grades: { spec: { grade: 'B', note: 'Installer network' }, brand: { grade: 'A', note: 'Garware studios in India and abroad' }, tech: { grade: 'A', note: 'Dyed and specialty polyester films' }, cost: { grade: 'B', note: 'Makes its own base film' }, cash: { grade: 'A', note: 'No borrowings' } } },
            { company: 'Shaily Engg. Plastic', trend: 'widening', trendNote: 'Healthcare now half of revenue; pen lines being added.',
                grades: { spec: { grade: 'A', note: 'Pens in generic GLP-1 filings' }, brand: { grade: 'C', note: 'Supplies other brands' }, tech: { grade: 'A', note: 'Precision medical devices' }, cost: { grade: 'B', note: 'Contract pricing' }, cash: { grade: 'B', note: 'Modest debt' } } },
            { company: 'Finolex Inds', trend: 'narrowing', trendNote: 'Volumes −27% in Q1; market share slipped from about 27% to 22% over recent years.',
                grades: { spec: { grade: 'C', note: 'Standard pipes' }, brand: { grade: 'A', note: 'Leading agricultural-pipe brand' }, tech: { grade: 'C', note: 'Standard products' }, cost: { grade: 'A', note: 'Makes its own PVC resin' }, cash: { grade: 'A', note: 'Large cash and investments' } } },
            { company: 'Prince Pipes', trend: 'stable', trendNote: 'Margin back to 13%; bathware still losing money.',
                grades: { spec: { grade: 'C', note: 'Standard pipes' }, brand: { grade: 'B', note: 'Pan-India dealers' }, tech: { grade: 'C', note: 'New low-noise drainage pipes' }, cost: { grade: 'C', note: 'Buys resin' }, cash: { grade: 'B', note: 'Small net cash' } } },
            { company: 'Apollo Pipes', trend: 'narrowing', trendNote: 'Missed its Q1 revenue promise; losses on stock as PVC prices fell.',
                grades: { spec: { grade: 'C', note: 'Standard pipes' }, brand: { grade: 'C', note: 'Strong mainly in North India' }, tech: { grade: 'C', note: 'Standard products' }, cost: { grade: 'D', note: 'Buys resin; stock losses' }, cash: { grade: 'B', note: 'Low debt' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Time Technoplast is the one to own.** It makes industrial plastic packaging (drums, jerry cans, 1,000-litre bulk containers) in India and ten other countries, and composite gas cylinders that are lighter than steel and do not rust. About 70–75% of its customers re-price every month on published polymer prices, so resin swings pass through; profit has grown from ₹316cr in FY24 to ₹477cr in FY26, and an ₹800cr share sale in November 2025 cut its debt sharply. In August management raised its guide to 19–20% growth in operating profit and 23–24% in net profit this year, if volume grows 15%. Q1 volume grew only 11% and CRISIL expects revenue growth of just 8–10% a year, so I use 18%; **the price asks for about {need:Time Technoplast|12}% a year, well below that.** Its weak spots are cash and audit cover: it turned only 26% of FY26 operating profit into operating cash, free cash flow was negative that year, and other firms audit about half the group.",
                "**Follow Shaily and Garware, but their prices have run ahead of them.** **Shaily** makes the pen injectors used by generic makers of semaglutide, the diabetes and weight-loss drug whose patent lapsed in India, Canada, Brazil and five other markets in 2026. Healthcare went from 17% of its revenue in FY24 to 51% in Q1 FY27 and pulled its operating margin from 18% to about 30%. But its new pen lines have run slowly, a promoter-group member sold her whole 2.27% stake (about ₹105cr) in June, and Dr Reddy's, the customer analysts link to its ₹423cr pen order, paused semaglutide supply in July. **Garware** makes specialty polyester films and earned a record 27% filed margin in Q1 FY27 (30% by its own measure), with about ₹850cr of cash and no debt; the 50% US tariff that froze its FY26 sales is now 10%. But the US is still about 45% of its revenue, its largest US paint-protection customer has talked of making its own film, and promoter pay takes about 12% of profit. The price needs about {need:Garware Hi-Tech|21}% a year from Garware against my 17%, and about {need:Shaily Engg. Plastic|31}% from Shaily against my 25%: full, not reckless.",
                "**Wait on Prince and Finolex; avoid Apollo Pipes.** All three pipe makers were hit in April, when the government removed import duty on PVC for three months and resin prices fell about 30% in three weeks: dealers stopped buying, and stock lost value. **Prince** came out best, with a 13% margin and no stock gain in it, but volume fell 7% and CRISIL keeps a Negative outlook on its rating. **Finolex** makes its own resin and holds ₹2,636cr of net cash plus a ₹1,723cr stake in Finolex Cables, but its volume fell 27%, its share of the big listed makers' volume has slipped from about 27% to 22% in three years, and it turned only 28% of FY26 operating profit into cash as it stockpiled raw material. **Apollo Pipes** promised more than ₹400cr of revenue for Q1 in May, delivered ₹295cr at a 1% margin, and at the end of August approved a ₹300cr move into tiles and up to ₹189cr of new warrants.",
                "**Two things to hold onto before reading the rest.** First, **pipe growth this year will be price, not volume**: CRISIL expects PVC-pipe volumes to fall 3–5% in FY27 while revenue rises 10–15%, and the minimum import price that steadied resin in July lapses around January 2027. Second, **the specified-product makers earn more because their customers cannot switch easily**: a generic drug maker would need two to three years and most of its original filing cost to change Shaily's pen, and a container is only 6–7% of the cost of what Time's chemical customers sell.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Prince and Apollo standalone). None of these companies publishes an order book in the usual sense. Hover over a starred name for its caveat.",
                "**Why some figures differ from the rest of the dashboard.** Several of the dashboard's own quarterly records are wrong for this group: Time Technoplast's Q2 FY26 and Prince's Q4 FY26 are stored as zero, Apollo's Q2 and Q3 FY26 likewise, and Finolex's Q4 FY26 revenue is stored as ₹1,214cr against ₹1,314cr filed. Garware's and Shaily's own EBITDA figures include other income. The charts below use filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "All six buy plastic resin and turn it into something else. The question is how much the something else is worth, and who sets its price.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Oil and gas → petrochemical plants → **resin** (PVC, polyethylene, polypropylene, polyester, TPU) → **converters** → dealers, installers or other manufacturers. India uses about 4.7 million tonnes of PVC a year and imports about 64% of it (GTRI); of domestic capacity, Reliance has about half, Chemplast about a fifth and Finolex about 17% (ICRA). Pipes are the biggest use: irrigation takes about 45% of pipe demand, water supply and plumbing about 39% and sewerage 12%, and about a third is replacement. **The profit sits where the product is specified**: raw material is only 10–12% of the cost of Garware's consumer films, while a standard pipe is sold on price and brand.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Pipes follow farms, housing and government water schemes, and all three are soft. The Jal Jeevan Mission has already piped water to about 82% of rural homes, and its extension to December 2028 shifts money from laying pipe to running the service; Finolex called the new outlay “lower than JJM 1.0” and Apollo said its government pipe sales are “almost zero”. Housing sales in the top seven cities fell 6% in April–June 2026 (Anarock), and CRISIL expects irrigation demand to grow only 2–4%. The engineered makers depend on different things: generic semaglutide launches for Shaily (India's patent lapsed on 20 March 2026 and more than 40 brands launched), car and building film demand abroad for Garware, and chemical output, CNG and home-delivered LPG for Time. **These are separate demand stories, not one plastics cycle.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Pipes are a PVC cycle, and in 2026 policy set the cycle.** In November 2025 the government let a recommended anti-dumping duty on PVC lapse and withdrew quality-control orders on polymers. From 2 April to 15 July 2026 it removed customs duty on 40 petrochemicals including PVC because of the West Asia war; resin fell by about ₹32 a kilo in April and dealers stopped buying. On 24 July it required a licence for PVC imports priced at or below US$766 a tonne, for six months, and the pipe makers say restocking began. China also scrapped its 13% export tax rebate on PVC from April, adding about US$75 a tonne to Chinese resin. **For the film maker the news was good**: the US Supreme Court struck down the emergency tariffs in February, Garware now pays 10% on top of normal duty rather than 50%, and India's trade regulator has recommended an anti-dumping duty on Chinese TPU paint-protection film on Garware's petition, though the Finance Ministry has not yet notified it.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Time Technoplast** depends on chemical and FMCG output, oil-company cylinder orders and getting its working capital down; **Garware** on US and Middle East film demand, its TPU line in Q3 FY27 and a new sun-control line in 2027–28; **Shaily** on its pharma partners' semaglutide launches, getting new pen lines to full speed and a first contract with an original drug maker; **Finolex** on farm demand, its resin spread and what its board does with the cash; **Prince** on housing, holding its 11–13% margin and bathware breaking even; **Apollo Pipes** on stable PVC prices and on delivering what it promises. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, FY26 (filed figures)',
                    columns: ['Position', 'Who', 'Sales', 'Operating margin (last five quarters)', 'Profit after tax (share of group)', 'Five-year cash conversion'],
                    rows: [
                        ['Engineered plastics and films', 'Time Technoplast, Garware, Shaily', '₹9,216cr', '13–31%', '₹985cr (59%)', '**50–76%**'],
                        ['Plastic pipes', 'Finolex, Prince, Apollo Pipes', '₹7,816cr', '3–25%', '₹679cr (41%)', '**61–81%**'],
                    ],
                    note: 'Consolidated figures except Prince (standalone). Group total: ₹17,032cr of sales and ₹1,664cr of profit after tax. Finolex made ₹599cr of the pipe makers’ ₹679cr, part of it income on its cash pile; Prince and Apollo together made ₹80cr. Cash conversion is operating cash ÷ operating profit over FY22–FY26.',
                },
                {
                    caption: 'The sector in numbers',
                    columns: ['Item', 'Figure', 'What it means', 'Source'],
                    rows: [
                        ['Plastic-pipe industry revenue', 'Over ₹50,000cr in FY25; +9% a year FY20–FY24', 'A large market, about 70% organised and consolidating', 'ICRA (Mar 2025); Apollo presentation'],
                        ['PVC-pipe volumes, FY27', '−3% to −5%, the first fall after years of growth', '**Growth this year is price, not volume**', 'CRISIL Ratings (Jun 2026)'],
                        ['PVC-pipe revenue and profit, FY27', 'Revenue +10–15%; operating profit about ₹23,000 a tonne (+8–10%)', 'Higher prices; stock up about 10 days', 'CRISIL Ratings (Jun 2026)'],
                        ['Pipe revenue, medium term', '+10–12% a year FY26–FY27 (ICRA); about 14% a year FY25–FY28 for listed makers (Motilal Oswal)', 'Both made before 2026’s policy swings', 'ICRA (Mar 2025); Motilal Oswal (Nov 2025)'],
                        ['PVC resin', 'About 4.7mn t used a year; about 64% imported', 'Import rules set the domestic price', 'GTRI (Jul 2026)'],
                        ['New Indian PVC capacity', '2.49mn t a year by 2028 (Reliance 1.2mn t, Adani 1.0mn t)', 'Steadier resin later: good for converters, bad for Finolex’s resin margin', 'GlobalData'],
                        ['PVC trade policy', 'No anti-dumping duty (Nov 2025); zero duty 2 Apr–15 Jul 2026; minimum import price US$766 a tonne from 24 Jul for six months', '**The floor lapses around January 2027**', 'DGFT notification, via GTRI; News on AIR'],
                        ['Rural water (Jal Jeevan Mission)', 'About 82% of rural homes connected by March 2026; FY27 allocation about ₹67,600cr', 'The big pipe-laying phase is mostly done', 'Cabinet decision (Mar 2026); CRISIL'],
                        ['Housing sales, top seven cities', '−6% in April–June 2026; launches +7%', 'Plumbing demand soft this year', 'Anarock'],
                        ['US tariff on Indian goods', 'From 50% in 2025 to 10% on top of normal duty; emergency tariffs struck down in February 2026', '**Garware’s biggest risk has shrunk**; refunds are being paid', 'Norton Rose Fulbright; The Week'],
                        ['Paint-protection film, world', 'US$1.09bn in 2025 to US$1.55bn by 2030 (+7.2% a year)', 'A growing niche led by 3M, XPEL and Eastman', 'MarketsandMarkets'],
                        ['Generic semaglutide', 'Patents lapsed in eight markets in 2026 (India on 20 March); US, Japan and UK protected until at least 2031', 'Shaily’s pen market opens in waves', 'Shaily annual report FY26; eMarketer'],
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
                    label: 'Lasting: written into a drug filing',
                    text: "**Shaily**'s pens are part of its customers' drug approvals. Its management said adding a second device to a filing in Canada means a new 24–36-month programme costing about 70–80% of the ₹100–150cr a generic company spent on the first, and about 70% of Canada's first six semaglutide filers use a Shaily pen; the first tentative US FDA approval of a generic semaglutide also used one. That lock-in lets it charge “somewhere above the $2 mark” a pen while Chinese copies sell at US$1.50–1.70. **The limit is that the lock-in follows its customers' success**: when a partner's launch stalls, as Dr Reddy's did in July, the pen stalls with it.",
                },
                {
                    label: 'Lasting: approvals and scale',
                    text: "**Time Technoplast** claims about 55% of India's industrial plastic packaging (CRISIL repeats the figure) and makes in ten other countries, so more than 50 global customers buy from both its Indian and overseas plants, and its US plants sit inside the tariff wall. Composite LPG and CNG cylinders need approvals from the explosives regulator (PESO) and the oil companies; HPCL ordered 1.4 lakh 10-kg cylinders (about ₹38cr) in July. Its pricing power shows the plain way: when resin jumped about 50% in March, it recovered the cost by April–May. **Scale and approvals are the moat in packaging; composites add technology on top.**",
                },
                {
                    label: 'Lasting: integration and a brand',
                    text: "**Garware** makes everything from polyester chips to finished film and is India's only maker of professional-grade paint-protection film. Raw material is only about 10–12% of the cost of its consumer films, so it passed on this year's inflation without losing margin, and value-added products are about 87% of revenue against 48% in FY17. It kept its customers through a year of 50% US tariffs by stocking goods in America (“we will not lose a single customer”), and sells through more than 250 application studios in India, 14 abroad and five car makers. **The weak point is concentration**: the US is about 45% of revenue, and its biggest US paint-protection customer has talked about making its own film.",
                },
                {
                    label: 'Pricing power in pipes: thin',
                    text: "**Finolex** says its pipes sell at a 10–12% premium to the market, and its own resin is a cost cushion: its margin rose three points in Q1 despite a 27% volume fall. But its share of the big listed makers' volume fell from about 27% in FY23 to 22% in FY26, and in Q1 its volume fell 27% while analysts put the industry at −8% to −10%. **Prince** regained share in Q4 FY26 by handing its stock gains to dealers (volume +23%), then stopped; it says its prices are “at par with the market leaders”, which is share bought with price, not pricing power. **A brand premium that keeps losing share is not a moat at work.**",
                },
                {
                    label: 'Barely a moat: a sub-scale price-taker',
                    text: "**Apollo Pipes** has about 2–2.5% of a ₹55,000cr market by its own estimate, is strongest in North India and buys all its resin. On its May call management described a price war in which the top players cut prices, and said Apollo priced aggressively to win volume in Q4. Its link to the APL Apollo group helps its dealer network and its credit rating, not its margin. **Its only lever is scale it has not yet reached.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Supreme Industries** (about 35 plants) and **Astral** (about 17) lead in pipes and grew fastest in FY26; Motilal Oswal put Astral's pipe profit before interest and tax at ₹25.7 a kilo in Q2 FY26 against Prince's ₹5.3. **Reliance** and **Chemplast** make most of India's PVC resin, and Reliance and Adani plan about 2.2mn t more by 2027–28. In films: **3M**, **XPEL**, **Eastman** and **Avery Dennison**, plus cheaper Chinese paint-protection film. In pens: **West**, **Phillips-Medisize** and **Aptar**, and Chinese generic pens. In packaging: **Mauser**, **Greif** and **Schütz**. **Astral is the benchmark for the pipe makers: the same product at several times the profit per kilo.**",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the pipe makers, strip out the gains and losses on stock; for the others, check the company's margin against the filed one.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specified products',
                    text: "**Shaily (26–31%)** and **Garware (15–27%, rising)** earn from what they make, not from resin. Shaily's operating margin rose from 18% in FY24 to 28% in FY26 as healthcare grew from 17% to 40% of revenue; its Q1 gross margin was 56.6% against 51.2% a year earlier, though it slipped from the previous quarter on polymer costs and air freight, which management expects to normalise by Q3. Garware's shift to value-added film lifted its filed margin from 17% in FY24 to 27% in Q1 FY27 and its gross margin to about 60%, against a historical 53–55%; the company's own 30.3% includes ₹20cr of other income. It guides 25% ±2 this year, calls 27–28% “very logical” later, and expects the TPU line to add 1.5–2 points in FY28. **Time Technoplast (13–15%)** is structural in a plainer way: it passes resin on monthly and manages profit per tonne, so Q1's dip from 14.5% to 13% was arithmetic on higher prices, and composites earn 17–18% against 12–13% for packaging.",
                },
                {
                    label: 'Cyclical: PVC stock gains and losses',
                    text: "**Finolex**'s 25% in Q4 FY26 came from the March price spike; management put the stock gain at ₹35–40cr and the margin at about 22% without it. By my arithmetic from company figures it earned about ₹33 of operating profit a kilo in Q4 and ₹16 in Q1, against about ₹10 a year earlier, while its resin spread narrowed (PVC over EDC at US$501 a tonne against US$522). It guides below 15%. **Prince**'s 13% in Q1 had no stock gain in it: gross margin rose from 26% to 34% on more plumbing and more CPVC, PPR and polypropylene pipe, about ₹19 a kilo. **Apollo Pipes** fell to 1% on consolidated figures (3% standalone), about ₹1,200 a tonne, as stock was written down; management says its underlying margin was 7%, but it earned only 5–8% in FY26. CRISIL puts the top five pipe makers at about ₹21,200 a tonne. **Only Prince's gain looks like mix rather than resin, and it is two quarters old.**",
                },
                {
                    label: 'Not structural: start-up costs and losses',
                    text: "**Prince**'s bathware business lost ₹5cr on ₹13cr of Q1 revenue; it needs about ₹25cr a quarter to break even, now expected in the December quarter rather than the September one. **Apollo Pipes** carries about half a point of start-up cost from its Varanasi plant and window profiles, and its subsidiary Kisan Mouldings has lost money at the operating level for about four quarters. **Shaily** paid for premium air freight to catch up on late orders, and its first new pen line ran at about 45% efficiency in Q4 (34–35 parts a minute on an 80-a-minute line). **These should fade; the question at Apollo is whether they fade before the next resin swing.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Time Technoplast**'s working capital rose from 93 days in FY24 to 127 in FY26 on Screener's measure; the company counts 115 days in March, about 110 now, and targets about 100 by March 2027 and 90 in one to two years. It stocks imported carbon fibre for six months, and CRISIL puts its gross current assets at 229 days. FY26 operating cash was ₹233cr against ₹477cr of profit, and its five-year conversion of 50% is the lowest here, though Q1 brought ₹155cr. **Finolex**'s inventory days went from 99 to 159 in two years as it pre-bought raw material: standalone stock was ₹1,026cr in March, the auditor made its valuation a key audit matter, and operating cash fell to ₹192cr, 28% of operating profit.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Shaily**'s cash cycle lengthened from 81 days in FY24 to 135 in FY26 as healthcare stock built up (inventory from 82 to 129 days), though it still turned 81% of FY26 operating profit into cash. **Garware** parked goods in the US to ride out the tariffs: inventory days rose from 116 to 149, with about US$16mn in transit or in US warehouses at March, and its cash cycle went from 68 to 89 days. **Apollo Pipes** moved from ₹40cr of net cash in March to ₹59cr of net debt in June (company figures; Screener shows ₹10cr of standalone net debt at March), with net working capital at 44 days against 35 in FY25 and a 35-day target for March 2027.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Prince** cut its working capital from 98 to 45 days in FY26 (company figures) and turned ₹526cr of operating cash, more than twice its operating profit, which cut borrowings from ₹277cr to ₹145cr. Q1 slipped back: stock rose to 100 days against a 65–75-day target, though debtors fell to 40 days. Management says it “will not have any growth at the cost of using credit as a lever”. **The FY26 gain was real, but it has to survive a year of normal stock.**",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Pipe makers stock resin and finished pipe before the farm season, and CRISIL expects the big pipe makers' inventory to rise about 10 days to about 85 this year. Film and pen makers hold specialty inputs and finished goods for export; industrial makers wait for large customers to pay. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Time Technoplast', 'Net debt cut another ₹90cr; Q1 operating cash ₹155cr; FY27 capex ₹350cr (₹75cr in Q1); buyback “can consider”', 'Borrowings ₹733cr at March (Screener); about ₹356cr of unused share-sale money in deposits'],
                        ['Garware Hi-Tech', 'Cash and liquid investments ₹850cr (₹774cr in March); ₹50cr-plus net tariff refund due in Q2; more capex or an acquisition possible', 'Debt ₹28cr, leases and acceptances only; net cash ₹853cr (Screener)'],
                        ['Shaily Engg. Plastic', 'Debt about 0.2 times equity; pen capacity to about 75mn by September; a standing ₹500cr fundraising approval, “not a signal of an imminent issue” (May call)', 'Borrowings ₹177cr, net debt about ₹150cr at March'],
                        ['Finolex Inds', 'Net free cash ₹2,636cr (₹2,563cr in March); capex ₹125–200cr; the board decides on the cash', 'Plus Finolex Cables shares worth ₹1,723cr; ₹446cr short-term borrowing to pre-buy raw material'],
                        ['Prince Pipes', 'Net cash about zero, gross debt about ₹120cr; stock 100 days, back to 65–75 by end-September; debtors 40 days', 'Borrowings ₹145cr at March (₹277cr a year earlier)'],
                        ['Apollo Pipes', 'Net debt ₹59cr (net cash ₹40cr in March); capex about ₹200cr over FY27–FY28', 'Borrowings ₹124cr at March; up to ₹189cr of warrants approved on 31 August'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly; Time Technoplast is the only one here to give a Q1 operating-cash figure.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call in May, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: generic weight-loss drugs',
                    text: "Semaglutide's patents lapsed in 2026 in eight markets holding roughly a third of the world's obese adults, including India, Canada and Brazil; Shaily expects Europe to open in 2028, and the US is protected until at least 2031. **Shaily** delivered about 23.5 million pens in FY26 (it had guided 25–26 million) and about 9 million in Q1 FY27, and now says it “should be able to go beyond” 36 million this year and reach about 50 million in FY28. Pen capacity should be about 75 million by the end of September, and an Abu Dhabi plant aimed at Europe should produce by the end of FY28, with 50–55% of its capacity already committed or indicated. **The market is real; Shaily's share of it depends on a few Indian partners' launches going well.**",
                },
                {
                    label: 'Growth driver: composite cylinders and gas',
                    text: "**Time Technoplast**'s composite products grew 29% in Q1 and earn more than its packaging; management expects 25–30% a year and composites to go from about ₹600cr to over ₹750cr this year. India has about 50 crore LPG cylinders in circulation; HPCL's July order for 1.4 lakh composite cylinders and its home-delivery pilot with Swiggy Instamart in Bengaluru are first steps, while the oil companies have paused the 14.2-kg composite launch during an LPG shortage. CNG cascades (₹482cr in FY26) and hydrogen cylinders add more. **A large market, but on the state oil companies' timetable.**",
                },
                {
                    label: 'Growth driver: films for cars and buildings',
                    text: "**Garware** guides at least ₹2,500cr of revenue this year (+18%), 15–20% a year after that and ₹3,500cr in three to four years. The TPU line (₹118cr, due in Q3 FY27) makes India's first domestic TPU film, three-quarters for its own paint-protection film; a ₹191–192cr sun-control line adds about 30% capacity from June 2027 by the company's date, though CARE's rating rationale says June 2028. Its home-film studios went from 6 to 9 against 50 targeted by March 2027. Management also flagged more capex and a possible acquisition. **The capacity is paid for from cash; the question is whether it sells at today's margins.**",
                },
                {
                    label: 'Growth driver: pipes, price before volume',
                    text: "CRISIL expects pipe volumes to fall 3–5% this year, yet the pipe makers guide growth: **Prince** 12–15% volume, **Apollo Pipes** double-digit volume and ₹5,000cr of revenue by FY31 (35% a year), and **Finolex** its old high-single to low-double-digit volume, which it called “too early” to confirm. All three said July was good once the price floor removed the reason to wait. Beyond FY27 the drivers are consolidation, as small makers struggle with resin swings, plumbing's rising share and cheaper domestic resin once Reliance's and Adani's plants start. **I expect volume to recover in FY28–FY29, with less help from government water schemes than in FY20–FY25.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Garware** promised at least ₹2,500cr of revenue and a 25% ±2 margin for FY27; Q1 brought ₹633cr at 27% filed (30.3% by its own measure), with no one-offs by management's account, and it kept the guide. **Time Technoplast** raised its profit guide after Q1, to 19–20% growth in operating profit and 23–24% in net profit from about 17% and at least 21%, delivered 22% profit growth and cut net debt by another ₹90cr. Its volume, though, grew 11% against 15%, because government pipe contractors would not accept higher prices.",
                },
                {
                    label: 'Cautious',
                    text: "**Finolex** kept its margin guide (below 15%) and said of volume that it would “continue with whatever projection we gave” but it was “too early”; it hopes only for a slight volume rise in the first half. Its board has deferred a decision on the cash for several calls.",
                },
                {
                    label: 'Missed',
                    text: "**Apollo Pipes** told investors in May it was targeting “₹400 crores plus” in Q1; it reported ₹295cr, about 26% short, with volume down 3% and a 1% margin, and did not address the gap on the call. It restated rather than cut its longer targets. **Finolex**'s 27% volume fall is also a clear miss against its May guide.",
                },
                {
                    label: 'Mixed',
                    text: "**Shaily** kept and tilted up its 36-million-pen guide, but its second new line slipped from July–August (held at the supplier until it runs at 80%-plus efficiency) and consumer revenue fell 24%. **Prince** hit the top of its margin band (13%) and beat on debtor days, but volume fell 7%, stock rose to 100 days and bathware break-even moved back a quarter; it now needs about 17–21% volume growth over nine months to meet its guide.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect the engineered makers to compound earnings at 15–25% and the pipe makers to recover from a weak FY27 more slowly.** Time Technoplast at about 18%, below its own 23–24% because CRISIL sees revenue growth of 8–10% and Q1 volume fell short; Garware at about 17%, raised from 15% after this research because it guides 15–20% revenue growth with margins heading toward 27–28% and the TPU line adding 1.5–2 points; Shaily at about 25%, held back by slow lines, a partner's pause and a shrinking consumer business. Among the pipe makers: Prince at about 15% from a low FY26 base, a borderline case against its price, Finolex at about 6% because it is losing share and its resin spread is narrowing, and no estimate for Apollo Pipes, which I would avoid until it earns again. **The biggest swing factor is what replaces the PVC floor in January 2027.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Time Technoplast', 'Composite cylinders; packaging volume; working capital; lower interest', '12% / **18%** / 24%'],
                        ['Garware Hi-Tech', 'Architectural and paint-protection film; TPU line; new sun-control line', '10% / **17%** / 22%'],
                        ['Shaily Engg. Plastic', 'Semaglutide pens; Abu Dhabi from FY28; new devices', '15% / **25%** / 35%'],
                        ['Prince Pipes', 'Plumbing mix; margin holding at 11–13%; bathware break-even', '8% / **15%** / 22%'],
                        ['Finolex Inds', 'Farm demand; regaining share; resin spread', '0% / **6%** / 12%'],
                        ['Apollo Pipes', 'Return to profit first', 'Loss-making; no estimate'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record (May promise vs Q1)'],
                    rows: [
                        ['Time Technoplast', 'Volume +15%; operating profit +19–20% and net profit +23–24% (raised in August); working capital about 100 days by March 2027', '₹350cr in FY27 (normal ₹250–300cr); ₹75cr in Q1', '**On track**: profit +22% and guide raised; volume +11% against 15%'],
                        ['Garware Hi-Tech', 'Revenue at least ₹2,500cr; margin 25% ±2, raised to 27% ±2 in Q2; ₹3,500cr in 3–4 years', 'TPU ₹118cr (Q3 FY27); sun-control line ₹191–192cr (H1 FY28; CARE says June 2028)', '**Beat**: Q2 ₹696cr at 24% filed (27.2% own); 14 home studios, 50 now by December 2027'],
                        ['Shaily Engg. Plastic', 'Beyond 36mn pens in FY27; about 50mn in FY28', 'Pen capacity to about 75mn by September; Abu Dhabi by end-FY28; ₹80–100cr electronics plant', '**Mixed**: pens on track; second line late; consumer −24%'],
                        ['Prince Pipes', 'Volume +12–15%; margin 11–13%; stock 65–75 days', '₹200–210cr, mostly maintenance and the Bhuj bathware plant', '**Mixed**: margin 13%; volume −7%, stock 100 days, bathware a quarter late'],
                        ['Finolex Inds', 'Volume high single to low double digit (“too early”); margin below 15%', '₹125–200cr, debottlenecking', '**Missed**: volume −27%; margin 12%, within its guide'],
                        ['Apollo Pipes', 'Q2 double-digit growth; 7–8% margin in 12–15 months; ₹5,000cr by FY31', 'About ₹200cr over FY27–FY28; ₹300cr for tiles approved 31 August', '**Missed**: ₹295cr against “₹400cr plus”; margin 1%'],
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
                    label: 'PVC policy and prices',
                    text: "In twelve months PVC went from no protection to zero import duty to a price floor, and each change moved dealer buying. The floor (US$766 a tonne) lasts six months from 24 July, so it lapses around January 2027; GTRI expects it to lift domestic prices without cutting imports. Another fall would repeat April's stock losses at **Prince** and **Apollo Pipes**. **Finolex** is exposed twice, through its pipes and through its resin spread, which will face about 2.2mn t of new Reliance and Adani capacity by 2028. **What replaces the floor is the biggest single unknown for the pipe makers.**",
                },
                {
                    label: 'Pipe volume',
                    text: "CRISIL expects pipe volumes to fall 3–5% this year; the rural water scheme has passed its pipe-laying peak; top-city housing sales fell 6% in April–June; and irrigation, 45% of demand, is expected to grow only 2–4%. Against that, Prince guides 12–15% volume growth and Apollo double digits. **Finolex** is most exposed: 69% of its Q1 volume was farm pipe, and the monsoon forecast was below normal. **If CRISIL is right, most FY27 pipe guidance will be missed.**",
                },
                {
                    label: 'Few customers, one market',
                    text: "**Shaily**'s consumer business serves mainly one global retailer (CARE flags the concentration), and its pen business rests on a few Indian generic makers. Dr Reddy's, the customer analysts link to its ₹423cr four-year pen order, paused semaglutide supply on 9–10 July after an impurity was found, with a restart expected between September and November; management said it remains confident of its guidance. **Garware** earns about 45% of revenue in the US, and its largest US paint-protection customer has talked of making film in-house. **Time Technoplast** sells composites mostly to state oil companies, which paused the 14.2-kg cylinder launch, and its PE pipes depend on government contractors.",
                },
                {
                    label: 'Governance and pay',
                    text: "**Garware** paid its three promoter executives about ₹40cr in FY26, about 12% of profit, with the chairman at 243 times the median employee; it also pays rent to promoter companies and gives to promoter-run trusts. **Shaily**'s executive chairman's pay rose 78.6% in FY26 to 228 times the median, and in June a promoter-group member sold her entire 2.27% stake (about ₹105cr), taking promoter holding from 43.4% to 41.1%. **Finolex** is 32.4% owned by Finolex Cables and 18.8% by Orbit Electricals, the company at the centre of a long Chhabria family dispute, and analysts have repeatedly asked the promoter to join its calls. **Prince**'s three family executives are paid 74–98 times the median.",
                },
                {
                    label: 'Accounting and disclosure',
                    text: "**Time Technoplast**'s group auditor did not audit nine subsidiaries with ₹3,092cr of revenue and ₹259cr of profit, about half the group, and relied on other auditors; its presentation put the Systoverse pipe acquisition at about ₹25cr, while the managing director spoke of about ₹125–150cr. **Finolex** stopped reporting resin and pipes separately from FY26, so investors can no longer see which earns the profit. **Garware** has ₹18.6cr of income-tax demands it does not count as contingent, and CARE dates its new line a year later than the company does. **Apollo Pipes** no longer gives segment data. All six auditors gave clean opinions.",
                },
                {
                    label: 'Capital allocation and dilution',
                    text: "**Finolex** holds ₹2,636cr of net cash and a ₹1,723cr Finolex Cables stake earning treasury returns; CRISIL lists a large payout as a downgrade trigger, and the board keeps deferring. **Apollo Pipes** has issued warrants twice in about 16 months (₹110cr in April 2025, up to ₹189cr approved in August 2026) and approved ₹300cr for tiles while its pipe margin is 1%. **Shaily** holds a standing ₹500cr approval to raise equity, which it calls routine. **Time Technoplast** keeps about ₹356cr of unused share-sale money in deposits while its Ebullient Packaging purchase is on hold. **Prince**'s CRISIL rating outlook is Negative, with a downgrade if margins fall below 8%.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **10% at 15x, 12% at 18x, 17% at 28x, 21% at 39x and 30% at 82x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Only Time Technoplast's price fits my estimate; Garware, Shaily, Prince and Finolex are full, Prince only just.**",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Finolex** looks cheapest on EV/EBITDA because about ₹4,600cr of cash and investments, including the Finolex Cables stake, is roughly half its market value; the pipe business itself is cheaper than the P/E suggests, but only if the board ever uses that money. **Garware** holds about ₹850cr of net cash, so it too is a little cheaper than its P/E. **Shaily** and **Time Technoplast** carried about ₹150cr of net debt each at March, which the P/E ignores; Time's has fallen since.",
                },
                {
                    label: 'Fits: Time Technoplast',
                    text: "The price needs about {need:Time Technoplast|12}% a year against my ~18% estimate and management's 23–24% profit guide, so it leaves room for a volume shortfall like Q1's. The discount reflects real faults: five-year cash conversion of 50%, working capital well above target, and half the group audited by other firms. **The only price here that asks for less than I expect: own, and watch the cash.**",
                },
                {
                    label: 'Full: Garware, Shaily, Prince and Finolex',
                    text: "**Shaily** needs about {need:Shaily Engg. Plastic|31}% a year against my ~25%; pen volumes are growing faster than that today, so a better entry is more likely to come from a slip than from a change in the story. **Prince** needs about {need:Prince Pipes|17}% against my ~15%, from a low FY26 base with margins recovering. **It is borderline**: at the price when this was written it missed “fits” by a fraction of a point, and by 28 September a fall of about 3% had brought the price check to {label:Prince Pipes|fits}; the Negative rating outlook and a 7% volume fall still argue for waiting for one more good quarter. **Finolex** needs about {need:Finolex Inds|10}% against my ~6%; the cash protects the downside, but the pipe business is losing share. **Garware** needs about {need:Garware Hi-Tech|21}% against my ~17%; see below. **Each needs a little more than I expect.**",
                },
                {
                    label: 'Garware: the best business, at a full price',
                    text: "**Garware** needs about {need:Garware Hi-Tech|21}% a year against my ~17%. Its guidance (15–20% revenue growth, with margins heading toward 27–28%) could come close to that, and the tariff risk has fallen, and it raised its margin guide in Q2, but the tariff refund is only about ₹27cr to its own books across Q2–Q3, not the ₹50cr-plus it first indicated, and its new sun-control line may be a year later than it says. **A very good business at a price that leaves little room for a slip: follow, and buy on weakness.**",
                },
                {
                    label: 'Not measurable on earnings: Apollo Pipes',
                    text: "**Apollo Pipes** lost ₹15cr over the last four quarters, so it has no P/E, and on EV/EBITDA it is priced far above the other two pipe makers. The price assumes the 7–8% margin and 35% a year revenue growth management promises; its record (a 26% miss, a tiles venture and repeated warrants) says **avoid** until it delivers two clean quarters.",
                },
                {
                    label: 'Quality of earnings',
                    text: "**Garware**'s and **Shaily**'s own EBITDA figures include other income, so use the filed margins, and Garware's Q2 and Q3 carry about ₹11cr and ₹16cr of one-off tariff refunds. **Finolex**'s profit includes ₹53–76cr a quarter of treasury income that moves with bond yields, its FY25 profit had ₹703cr of other income, and its Q4 FY26 margin had ₹35–40cr of stock gains. **Prince**'s Q4 FY26 volume was bought by passing stock gains to dealers. **Strip these out before comparing.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Time Technoplast', rank: 1, stance: 'COMPOUNDER', segment: ENGINEERED,
            what: "Makes industrial plastic packaging (drums, jerry cans, 1,000-litre bulk containers) in India and ten other countries, plus composite LPG and CNG cylinders, PE pipes and batteries.",
            view: "**Steady compounding at a price that fits.** Profit rose from ₹316cr to ₹477cr in two years, resin is passed on monthly, composites grew 29% in Q1, and management raised its profit guide to 23–24% growth. But Q1 volume grew 11% against a 15% target, five-year cash conversion is 50%, and half the group is audited by other firms. The price asks for about {need:Time Technoplast|12}% a year against my ~18% estimate.",
            watch: 'Working capital toward 100 days by March 2027; composite orders from the oil companies; what happens to the ₹356cr of unused share-sale money.',
        },
        {
            company: 'Garware Hi-Tech', rank: 2, stance: 'PRICED', segment: ENGINEERED,
            what: "Makes specialty polyester films from its own chips: heat-blocking window film for cars and buildings, paint-protection film for cars and industrial films, about three-quarters exported.",
            view: "**The best business in the group, priced for a little more than I expect.** Its filed margin rose from 17% in FY24 to a record 27% in Q1 FY27, it holds about ₹850cr of cash, and the US tariff has fallen from 50% to 10%. But the US is about 45% of revenue, promoter pay takes about 12% of profit, and CARE dates its new line a year later than the company. Q2 FY27 (call of 22 October) was another record: revenue ₹696cr (+22%), operating profit +42% at 24% filed (27.2% by its own measure, which includes other income), cash ₹933cr, and the FY27 margin guide raised by 2 points to 27% ±2 with revenue still above ₹2,500cr. The tariff refund is smaller than it said (₹11cr booked so far, about ₹16cr more in Q3), and the 50-studio home business target moved to December 2027. The price needs about {need:Garware Hi-Tech|22}% a year against my ~17% estimate.",
            watch: 'The TPU line in Q3 FY27, as reaffirmed; the margin within the raised 27% ±2 guide; the sun-control line in H1 FY28; new capex the board may approve.',
        },
        {
            company: 'Shaily Engg. Plastic', rank: 3, stance: 'PRICED', segment: ENGINEERED,
            what: "Makes precision plastic parts and, now mainly, pen injectors for generic semaglutide and insulin, plus home-furnishing parts for a large global retailer.",
            view: "**A real medical-device pivot with warning lights.** Healthcare went from 17% to 51% of revenue in two years and lifted the margin to about 30%, and Shaily pens are in most early semaglutide filings in Canada. But a promoter-group member sold 2.27% in June, Dr Reddy's paused semaglutide supply in July, and new lines keep running late. The price needs about {need:Shaily Engg. Plastic|31}% a year against my ~25% estimate.",
            watch: 'Pen volumes above 36 million and the second line at 80% efficiency; Dr Reddy’s restart; a contract with an original drug maker.',
        },
        {
            company: 'Prince Pipes', rank: 4, stance: 'TURNAROUND', segment: PIPES,
            what: "Makes PVC, CPVC, PPR and polypropylene pipes and fittings for plumbing, drainage and farms across India, plus a small bathware business (Aquel).",
            view: "**A recovery that is real but young.** The margin has held at 13% for two quarters, this time without stock gains, and working capital fell from 98 to 45 days in FY26, releasing ₹526cr of operating cash. But Q1 volume fell 7%, stock rose to 100 days, bathware still loses ₹5cr a quarter and CRISIL keeps a Negative outlook. The price needs about {need:Prince Pipes|17}% a year against my ~15% estimate, a borderline gap. By 28 September the price had fallen about 3% and the price check reads {label:Prince Pipes|fits}; the call stays wait until volume grows again and stock comes back to 65–75 days.",
            watch: 'Volume against the 12–15% guide; stock back to 65–75 days; bathware at break-even in the December quarter.',
        },
        {
            company: 'Finolex Inds', rank: 5, stance: 'CYCLICAL', segment: PIPES,
            what: "Makes its own PVC resin at Ratnagiri and turns it into pipes and fittings, mainly for farms, and holds large cash and a stake in Finolex Cables.",
            view: "**A strong brand losing share, on a pile of cash it will not use.** Volume fell 4% in FY26 and 27% in Q1, and its share of the big makers' volume has fallen from about 27% to 22%. It holds ₹2,636cr of net cash plus a ₹1,723cr Finolex Cables stake, with no decision on using it, and no longer reports its resin profit separately. The price needs about {need:Finolex Inds|10}% a year against my ~6% estimate.",
            watch: 'Volume growth now the price floor is in place; a decision on the cash; PVC prices when the floor lapses around January.',
        },
        {
            company: 'Apollo Pipes', rank: 6, stance: 'AVOID', segment: PIPES,
            what: "Makes PVC, CPVC and HDPE pipes, fittings, water tanks and window profiles, mainly in North India, owns 61.94% of Kisan Mouldings, and now plans to enter tiles.",
            view: "**Promises ahead of delivery.** It promised more than ₹400cr of Q1 revenue in May and reported ₹295cr at a 1% margin, then approved ₹300cr for tiles and up to ₹189cr of new warrants. Group backing lifted its CRISIL rating to AA- and a promoter-group company has bought shares, but net cash has turned to ₹59cr of net debt at June (company). Avoid: no growth estimate until it earns again.",
            watch: 'Double-digit revenue growth in Q2, as promised; margin back toward 7–8%; Kisan and the tiles plan.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Engineered plastics and films.** **Time Technoplast: own.** Steady profit growth, costs passed on and a price that asks for less than I expect; the cash cycle is the thing to watch. **Garware Hi-Tech: follow.** The best business here, at a full price. **Shaily: follow.** A real pen business, with a partner's pause, a promoter sale and slow lines to clear first.",
            "**Plastic pipes.** **Prince Pipes: wait** for volume to follow the margin; its price is on the edge of fitting. **Finolex: wait** for its share to stop falling and a plan for the cash. **Apollo Pipes: avoid** until it delivers what it promises.",
            "**What would change my view.** For the better: a stable PVC regime after January and pipe volumes recovering in H2; Time's working capital falling to 100 days; Shaily winning a contract with an original drug maker. For the worse: another resin crash; CRISIL's volume fall proving right; Dr Reddy's restart slipping; Garware losing its largest US customer.",
            "**What to watch next quarter.** Time Technoplast's working capital and composite orders; Garware's TPU start-up and Q3 margin; Shaily's pen volumes and second line; the pipe makers' Q2 volumes, Prince's stock days and Apollo's promised double-digit growth.",
        ],
        bottomLine:
            "Buy the specified products, not the commodity pipes, and check the cash. Own Time Technoplast; follow Garware Hi-Tech and Shaily Engg. Plastic for a better price; wait on Prince Pipes and Finolex Inds; avoid Apollo Pipes.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/TIMETECHNO/consolidated/' },
        { label: 'Wholesale price index, plastics and PVC pipes — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'PVC pipe makers to see revenues grow 10–15% on higher realisations — CRISIL Ratings, June 2026', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/06/pvc-pipe-makers-to-see-revenues-grow-10-15-percent-on-higher-realisations.html' },
        { label: 'Plastic pipes: industry report — ICRA, March 2025', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6212' },
        { label: 'Plastic pipes sector update — Motilal Oswal, November 2025', url: 'https://ftp.motilaloswal.com/emailer/Research/PIPES-20251125-MOSL-SU-PG016.pdf' },
        { label: 'Import restriction on low-priced PVC resin may push domestic prices — GTRI, via Outlook Business', url: 'https://www.outlookbusiness.com/news/import-restriction-on-low-priced-pvc-resin-may-push-domestic-prices-gtri' },
        { label: 'Full customs duty exemption on critical petrochemicals till 30 June 2026 — News on AIR', url: 'https://www.newsonair.gov.in/government-of-india-grants-full-customs-duty-exemption-on-critical-petrochemical-products-till-june-30-2026' },
        { label: 'Polymer quality-control orders withdrawn and PVC anti-dumping duty dropped — CommoPlast', url: 'https://commoplast.com/news/details/17925/' },
        { label: 'India to spearhead global PVC capacity additions through 2028 — GlobalData, via VARINDIA', url: 'https://varindia.com/news/india-to-spreadhead-global-pvc-capacity-additions-through-2028' },
        { label: 'Jal Jeevan Mission 2.0: extension and restructuring — Drishti IAS', url: 'https://www.drishtiias.com/state-pcs-current-affairs/jal-jeevan-mission-2-extension-and-restructuring' },
        { label: 'Housing sales fall 6% in top seven cities in Q2 2026 — Anarock, via Sahyadri Startups', url: 'https://sahyadristartups.com/news/housing-sales-fall-6-per-cent-in-top-7-cities-during-q2-2026-says-anarock/' },
        { label: 'US Supreme Court overturns IEEPA tariffs: potential refunds — Norton Rose Fulbright', url: 'https://www.nortonrosefulbright.com/en/knowledge/publications/20f2de87/potential-refunds-us-supreme-court-overturns-ieepa-tariffs' },
        { label: 'US Section 301 tariffs on India — The Week, July 2026', url: 'https://www.theweek.in/news/biz-tech/2026/07/24/us-tariffs-section-301-india.html' },
        { label: 'Paint protection films market — MarketsandMarkets', url: 'https://www.marketsandmarkets.com/Market-Reports/paint-protection-films-market-4118847.html' },
        { label: 'Generic semaglutide climbs to a third of India’s market — eMarketer', url: 'https://www.emarketer.com/content/generic-semaglutide-climbs-33-share-india-eroding-branded-players-pricing-power' },
        { label: 'Dr Reddy’s halts semaglutide supply over API impurity — Whalesbook', url: 'https://www.whalesbook.com/news/English/healthcarebiotech/Dr-Reddys-Halts-Semaglutide-Supply-Over-API-Impurity/6a50ff09bfbc3f4042238b1b' },
        { label: 'Time Technoplast: Q1 FY27 earnings call transcript', url: 'https://www.timetechnoplast.com/wp-content/uploads/2026/08/q1-transcript-2026.pdf' },
        { label: 'Time Technoplast: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/5ddf202f-08ce-47ab-ae6f-f71021f04eaa.pdf' },
        { label: 'Time Technoplast: rating rationale, July 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/TimeTechnoplastLimited_July%2028_%202026_RR_400645.html' },
        { label: 'Garware Hi-Tech Films: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f70cb6d0-f760-4e1d-9fed-1c323a633092.pdf' },
        { label: 'Garware Hi-Tech Films: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/a7d7cfd8-ea30-4854-bbf1-d7b82c56ef19.pdf' },
        { label: 'Garware Hi-Tech Films: rating rationale, July 2026 — CARE Ratings', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202607150743_Garware_Hi-Tech_Films_Limited.pdf' },
        { label: 'Shaily Engineering Plastics: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/92a94c7e-046a-4e10-8f7e-3e1da20a2a85.pdf' },
        { label: 'Shaily Engineering Plastics: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/3457109d-f13b-4d72-8e6c-5bffdb9c92f1.pdf' },
        { label: 'Shaily Engineering: promoter sells ₹105 crore stake through bulk deals — Angel One', url: 'https://www.angelone.in/news/stocks/shaily-engineering-promoter-sells-rs-105-crore-stake-through-bulk-deals-stock-up-58-percent-in-1-year' },
        { label: 'Finolex Industries: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d6462fb5-ec6e-4824-8e03-01bc06171788.pdf' },
        { label: 'Finolex Industries: Annual Report FY26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4b56730a-87bc-4c26-9f90-94accc660353.pdf' },
        { label: 'Finolex Industries: rating rationale, May 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/FinolexIndustriesLimited_May%2008_%202026_RR_393650.html' },
        { label: 'Prince Pipes and Fittings: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/2eb1b1cc-2d83-4b11-b323-5d83c1516b7b.pdf' },
        { label: 'Prince Pipes and Fittings: rating rationale, August 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/PrincePipesandFittingsLimited_August%2007_%202026_RR_401031.html' },
        { label: 'Apollo Pipes: Q1 FY27 earnings call transcript (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/5a64de3f-d28b-40b8-b3e7-1dec094ef17d.pdf' },
        { label: 'Apollo Pipes: rating rationale, September 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/ApolloPipesLimited_September%2016_%202026_RR_403099.html' },
        { label: 'Apollo Pipes eyes tiles market; board clears ₹300 crore expansion — Free Press Journal', url: 'https://www.freepressjournal.in/business/apollo-pipes-eyes-tiles-market-board-clears-300-crore-expansion' },
    ],
};
