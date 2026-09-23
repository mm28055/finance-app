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
            'Garware Hi-Tech': 15,
            'Shaily Engg. Plastic': 25,
            'Finolex Inds': 6,
            'Prince Pipes': 15,
            'Apollo Pipes': null,
        },
    },
    standfirst:
        "Six companies that turn plastic resin into useful things, in two very different businesses. Three make engineered products to a customer's specification: car and window films (Garware), medical pens for weight-loss drugs (Shaily), and industrial containers and composite gas cylinders (Time Technoplast). Three make plastic pipes for farms and homes (Finolex, Prince, Apollo), a business ruled by the price of PVC resin, which crashed this spring. The engineered group earns more and grows faster. Every chart uses filed results and five years of history.",
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
            note: 'The pipe makers’ margins swing with PVC prices: Finolex’s 25% in Q4 FY26 came from stock gains when resin prices spiked, and Apollo’s fell to 3% when they crashed.',
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
                'Garware Hi-Tech': 'Q1 FY27 margin was above the top of its long-term guidance range, from mix and no one-offs (company).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Finolex’s volumes fell 27% in Q1 as dealers destocked after the PVC price crash; its revenue fell less because it also sells resin.',
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
                "**Time Technoplast is the one to own.** It makes industrial containers (drums, large bulk containers) in many countries and composite gas cylinders that are lighter and safer than steel. Its contracts pass on resin costs every month, it has cut net debt to near zero, and it guides EBITDA growth of 19–20% and profit growth of 23–24% this year on 15% volume growth. The price asks for less growth than that.",
                "**Follow Garware and Shaily.** Garware makes specialty films for cars and buildings and earned a record 30% margin in Q1 by its own measure (27% on filed figures), with no borrowings. Shaily makes pen injectors for generic weight-loss drugs; healthcare is now half its revenue and its return on capital has risen to 29%. Both are good businesses priced for a lot of it.",
                "**Wait on Finolex and Prince; pass on Apollo Pipes.** The pipe makers were hit by a crash in PVC prices this spring: dealers stopped buying and stock lost value. Finolex's volumes fell 27% and it has been losing market share; Prince's margin has recovered but its returns are low; Apollo Pipes missed its promises and lost money.",
                "**Two things to hold onto before reading the rest.** First, **pipes are a PVC cycle**: when resin falls, dealers wait and makers take stock losses; the new minimum import price for PVC should put a floor under prices. Second, **the engineered makers earn more because their products are specified by customers**, not bought on price.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Prince and Apollo standalone). None of these companies publishes an order book in the usual sense. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "All six buy plastic resin and turn it into something else. The question is how much the something else is worth.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Petrochemical plants → **resin** (PVC, polyethylene, polypropylene, polyester) → **converters**: pipes for farms and homes (Finolex, Prince, Apollo), films for cars and buildings (Garware), precision parts and medical pens (Shaily), industrial containers and cylinders (Time Technoplast) → dealers, installers or other manufacturers. **The profit sits in specified products**; standard pipes compete on price and brand.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Farm irrigation and house-building for pipes; car sales and the demand for heat-cutting window film for Garware; generic weight-loss drugs (semaglutide) coming off patent for Shaily; chemical, gas and city-gas companies for Time Technoplast.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Pipes are a PVC price cycle.** PVC resin fell sharply in April, so dealers delayed buying, pipe makers took losses on stock, and Finolex's volumes fell 27%. The government has now set a minimum import price of $766 a tonne for PVC, which should stop sharp falls. US tariffs hit Garware's exports last year; India has recommended anti-dumping duties on Chinese paint-protection film, which would help Garware.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Time Technoplast** depends on industrial demand and composite cylinders; **Garware** on car and building film demand and exports; **Shaily** on generic GLP-1 pens and new medical devices; **Finolex** on farm demand and regaining share; **Prince** on housing demand and its bathware business; **Apollo Pipes** on PVC prices and executing its plans. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Engineered plastics and films', 'Time Technoplast, Garware, Shaily', '13–31%', '17–29%', '**50–76%**'],
                        ['Plastic pipes', 'Finolex, Prince, Apollo Pipes', '3–25%', '2–12%', '**61–81%**'],
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
                    label: 'Lasting: products written into a customer’s plans',
                    text: "**Shaily**'s pens are part of generic drug makers' approvals, so switching supplier would mean new filings. **Time Technoplast**'s containers and cylinders are approved by chemical and gas companies and it passes on resin costs monthly.",
                },
                {
                    label: 'Lasting: specialty film and a brand',
                    text: "**Garware** makes its own base film and dyes it for solar-control and paint-protection products, sold through its own studios in India and abroad; its margin has risen as the mix shifted to these products.",
                },
                {
                    label: 'Wearing: pipe brands in a price war',
                    text: "**Finolex** has the strongest farm-pipe brand and makes its own resin, but its market share has slipped from about 27% to 22% and it could not explain how it would win it back. **Prince** gave up stock gains to dealers last year to win share, then stopped.",
                },
                {
                    label: 'Barely a moat: standard pipes from a regional base',
                    text: "**Apollo Pipes** is strongest in North India, buys its resin and took stock losses when PVC fell.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Supreme Industries** and **Astral** lead in pipes; **3M** and **Eastman** in car films; **Nemera**, **Ypsomed** and **Haselmeier** in pen injectors; **Mauser** and **Greif** in industrial containers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the pipe makers, strip out the gains and losses on stock.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specified products',
                    text: "**Shaily** (26–31%) and **Garware** (15–27%, rising) earn from mix and technology. **Time Technoplast** holds 13–15% because resin is passed on monthly; it manages absolute profit per tonne, not the percentage.",
                },
                {
                    label: 'Cyclical: PVC stock gains and losses',
                    text: "**Finolex**'s 25% in Q4 FY26 came largely from stock bought before resin prices rose; it guides below 15%. **Prince** guides 11–13% and reached 13% in Q1. **Apollo Pipes** fell to 3% as resin prices crashed.",
                },
                {
                    label: 'Not structural: start-up costs and losses',
                    text: "**Prince**'s bathware business lost ₹5cr on ₹13cr of revenue in Q1; it targets break-even in Q3. **Shaily** paid for air freight and faced higher costs while new pen lines were tuned.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Time Technoplast** runs about 105 days of working capital (company) against a 90-day target, which is why it converts only half its profit to cash.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Shaily**'s cycle has lengthened from 74 to 135 days as healthcare grew. **Prince**'s stock rose to about 100 days in Q1.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Prince** turned more than twice its FY26 operating profit into cash as it ran down stock. **Garware** holds no borrowings and converts steadily.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Pipe makers stock resin and finished pipes for dealers; industrial makers wait for large customers to pay. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: generic weight-loss drugs',
                    text: "**Shaily** targets 30–36 million pens this year and is adding capacity, while hiring staff in the US and Europe to win work from original drug makers.",
                },
                {
                    label: 'Growth driver: composite cylinders and gas',
                    text: "**Time Technoplast**'s composite products grew 29% in Q1; it is spending about ₹350cr this year and working with HPCL and Swiggy Instamart on quick delivery of LPG cylinders.",
                },
                {
                    label: 'Growth driver: films for cars and buildings',
                    text: "**Garware** is adding a TPU line (for paint-protection film) due in Q3, expanding its studios and growing architectural films for buildings.",
                },
                {
                    label: 'Growth driver: housing and farms',
                    text: "**Prince** guides 12–15% volume growth; **Apollo Pipes** targets ₹5,000cr of revenue in five years; **Finolex** gave no volume guidance after Q1.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Garware** printed a record margin; **Time Technoplast** grew 25% and cut debt; **Shaily**'s healthcare revenue nearly doubled.",
                },
                {
                    label: 'Cautious',
                    text: "**Finolex** withdrew its volume guidance until it sees Q2.",
                },
                {
                    label: 'Missed',
                    text: "**Apollo Pipes** had promised more than ₹400cr of revenue in Q1 and delivered flat volumes. **Prince**'s bathware break-even moved to Q3.",
                },
                {
                    label: 'Mixed',
                    text: "**Shaily**'s second new pen line was delayed by design until the supplier proved it could run efficiently.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect the engineered makers to compound earnings at 15–25% and the pipe makers to recover from a bad Q1 but grow more slowly**, with the minimum import price reducing the size of future stock losses.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Time Technoplast', 'Composite cylinders; containers; lower interest', '12% / **18%** / 24%'],
                        ['Garware Hi-Tech', 'Paint-protection and architectural films; studios', '8% / **15%** / 22%'],
                        ['Shaily Engg. Plastic', 'GLP-1 pens; new medical devices', '15% / **25%** / 35%'],
                        ['Prince Pipes', 'Plumbing volumes; margin recovery', '8% / **15%** / 22%'],
                        ['Finolex Inds', 'Farm demand; regaining share', '0% / **6%** / 12%'],
                        ['Apollo Pipes', 'Recovery from losses', 'Loss-making; no estimate'],
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
                    label: 'PVC prices',
                    text: "Another sharp fall in resin would repeat this spring's stock losses at **Finolex**, **Prince** and **Apollo Pipes**. The minimum import price reduces that risk but does not remove it.",
                },
                {
                    label: 'Few products or customers',
                    text: "**Shaily**'s growth depends on generic GLP-1 pens and a small number of drug makers; Chinese rivals are entering. **Garware** depends on exports to the US, where tariffs have been high.",
                },
                {
                    label: 'Market share',
                    text: "**Finolex** has lost share for several years and did not set out how it would win it back.",
                },
                {
                    label: 'Capital allocation',
                    text: "**Finolex** holds a very large pile of cash and investments that shareholders want returned or used. **Time Technoplast** has paused a planned packaging acquisition.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **10% at 15x, 12% at 18x, 17% at 28x, 21% at 38x and 30% at 82x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Finolex**'s investments make its EV/EBITDA very low; much of its market value is those investments. **Garware** holds net cash.",
                },
                {
                    label: 'Reasonable',
                    text: "**Time Technoplast**: a price that asks for less than it guides.",
                },
                {
                    label: 'Full',
                    text: "**Garware**, **Shaily**, **Prince** and **Finolex**: each needs a little more growth than I expect.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Apollo Pipes** was loss-making over the last year.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Time Technoplast', rank: 1, stance: 'COMPOUNDER', segment: ENGINEERED,
            what: "Makes industrial plastic containers (drums, jerry cans, large bulk containers) in many countries, plus composite gas cylinders, plastic pipes and other products.",
            view: "**Steady growth at a modest price.** Resin costs are passed on monthly, composite cylinders grew 29%, net debt is near zero, and it guides EBITDA growth of 19–20% this year. It converts only half its profit to cash. The price asks for less than my ~18% estimate.",
            watch: 'Working capital toward 90 days; composite cylinder growth; the paused acquisition.',
        },
        {
            company: 'Garware Hi-Tech', rank: 2, stance: 'PRICED', segment: ENGINEERED,
            what: "Makes specialty polyester films: solar-control window film, paint-protection film for cars and architectural film for buildings, sold in India and abroad.",
            view: "**A specialty-film maker with a record margin.** Q1 margin of 30% by its own measure, no borrowings and steady cash, with a new TPU line coming. But exports face tariffs and shipping delays. The price needs a little more than my ~15% estimate.",
            watch: 'The TPU line in Q3; US exports; margin holding above its guidance range.',
        },
        {
            company: 'Shaily Engg. Plastic', rank: 3, stance: 'PRICED', segment: ENGINEERED,
            what: "Makes precision plastic parts and, increasingly, pen injectors for generic GLP-1 weight-loss and diabetes drugs, plus home-furnishing products for global retailers.",
            view: "**A medical-device story in a plastics company.** Healthcare is now half of revenue and returns have risen to 29%, but its consumer business is shrinking and new pen lines are running late by design. The price needs a little more than my ~25% estimate.",
            watch: 'Pen volumes toward 30–36 million; the second new line; an innovator contract.',
        },
        {
            company: 'Prince Pipes', rank: 4, stance: 'TURNAROUND', segment: PIPES,
            what: "Makes plastic pipes and fittings for plumbing and farms across India, plus a small bathware business.",
            view: "**Margins recovering, returns still low.** Q1 margin reached 13%, the top of its 11–13% guide, but return on capital was 6% in FY26 and bathware still loses money. The price needs a little more than my ~15% estimate.",
            watch: 'Volume growth of 12–15%; bathware break-even in Q3; stock levels.',
        },
        {
            company: 'Finolex Inds', rank: 5, stance: 'CYCLICAL', segment: PIPES,
            what: "Makes PVC resin and turns most of it into pipes and fittings, mainly for farms, with a large portfolio of investments.",
            view: "**A strong brand losing share, sitting on investments.** Volumes fell 27% in Q1 and its market share has slipped from about 27% to 22%, but it makes its own resin and holds about ₹5,000cr of investments. The price needs a little more than my ~6% estimate.",
            watch: 'Volume guidance returning; market share; use of the investments.',
        },
        {
            company: 'Apollo Pipes', rank: 6, stance: 'TURNAROUND', segment: PIPES,
            what: "Makes plastic pipes, fittings, water tanks and window profiles, mainly in North India, and owns Kisan Mouldings.",
            view: "**Missed promises and losses.** It promised more than ₹400cr of revenue in Q1 and delivered flat volumes; stock losses wiped out its margin. No growth estimate until it earns again.",
            watch: 'Return to profit; Kisan margins; working capital.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Engineered plastics and films.** **Time Technoplast: own.** Steady growth at a modest price. **Garware Hi-Tech: follow.** A record margin, fully priced. **Shaily: follow.** A medical-device growth story, fully priced.",
            "**Plastic pipes.** **Prince Pipes: wait** for returns to recover. **Finolex: wait** for volumes and a plan for its investments. **Apollo Pipes: pass.**",
            "**What would change my view.** For the better: PVC prices stabilising under the new floor, lifting pipe volumes. For the worse: another resin crash, or Chinese competition in GLP-1 pens.",
            "**What to watch next quarter.** Time Technoplast's working capital; Garware's TPU line; Shaily's pen volumes; the pipe makers' volumes in Q2.",
        ],
        bottomLine:
            "Buy the specified products, not the commodity pipes. Own Time Technoplast, follow Garware Hi-Tech and Shaily Engg. Plastic for a better price, wait on Prince Pipes and Finolex Inds, and pass on Apollo Pipes.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/TIMETECHNO/consolidated/' },
        { label: 'Wholesale price index, plastics and PVC pipes — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
