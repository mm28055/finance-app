import { SectorOverview } from './types';
import { packagingBusinesses } from './packaging-businesses';
import { packagingValuationInputs } from './card-data/packaging';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const CONV = 'Converters to brand owners — qualified packs, fee per kilo';
const IND = 'Industrial and bulk packaging — freight decides';
const GLASS = 'Glass and cans — capacity decides';
const FILM = 'Film makers — a spread, not a fee';

export const packaging: SectorOverview = {
    sector: 'Packaging',
    title: 'Packaging',
    format: 'ranked',
    businesses: packagingBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: packagingValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'EPL': 15,
            'TCPL Packaging': 15,
            'Mold-Tek Pack.': 16,
            'Huhtamaki India': 8,
            'Pyramid Technoplast': 15,
            'Knack Packaging': 18,
            'Kanpur Plastipack': 10,
            'AGI Greenpac': 10,
            'Cosmo First': 12,
            'Ester Industries': null,
        },
    },
    standfirst:
        "Ten companies that turn resin, board, foil and sand into the thing your product arrives in. Packaging is bought and sold by the kilo, so the resin price is almost never the story. What matters is whether the brand owner can change supplier without re-qualifying a filling line, how far a full container can profitably travel, and who holds the food, pharma and recycled-content approvals. Those decide which of these companies earns a conversion margin for decades and which is renting one until the next cycle. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. AGI, Knack, Mold-Tek, Huhtamaki and Pyramid standalone; the rest consolidated.',
            note: 'In a pass-through business the percentage margin falls when resin rises even if profit per kilo holds, so read margins with care in a spike. Knack listed recently and has gaps.',
            values: {
                'EPL': [20, 21, 20, 20, 19],
                'TCPL Packaging': [17, 15, 17, 15, 17],
                'Mold-Tek Pack.': [20, 19, 19, 20, 19],
                'Huhtamaki India': [7, 9, 9, 7, 10],
                'Pyramid Technoplast': [8, 7, 7, 10, 9],
                'Knack Packaging': [20, null, null, 15, 21],
                'Kanpur Plastipack': [7, 9, 8, 11, 8],
                'AGI Greenpac': [21, 25, 24, 21, 22],
                'Cosmo First': [12, 11, 8, 12, 12],
                'Ester Industries': [6, 4, 5, 12, 11],
            },
            cellNotes: {
                'Huhtamaki India': 'Q1 FY27 was helped by customers stockpiling ahead of price rises, management said.',
                'Mold-Tek Pack.': 'Record ₹46.7 of operating profit per kilo in Q1 FY27.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Mostly resin prices, not volume: Pyramid grew revenue 35% on 4% lower volume and Cosmo 46% on 9% more volume. Knack, EPL and TCPL shipped materially more product.',
            values: {
                'EPL': [10, 11, 13, 18, 25],
                'TCPL Packaging': [5, -1, -2, 8, 16],
                'Mold-Tek Pack.': [22, 10, 4, 17, 24],
                'Huhtamaki India': [-4, -4, 1, 0, 23],
                'Pyramid Technoplast': [22, 21, 5, 14, 35],
                'Knack Packaging': [null, null, null, null, 40],
                'Kanpur Plastipack': [36, 9, 19, 7, 13],
                'AGI Greenpac': [22, 1, -4, 5, 14],
                'Cosmo First': [16, 21, 28, 37, 46],
                'Ester Industries': [18, 7, -2, 8, 28],
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed. Huhtamaki’s years are calendar years (CY21–CY25).',
            values: {
                'EPL': [13, 12, 15, 17, 18],
                'TCPL Packaging': [14, 21, 19, 20, 18],
                'Mold-Tek Pack.': [22, 19, 14, 12, 13],
                'Huhtamaki India': [2, 7, 12, 7, 12],
                'Pyramid Technoplast': [33, 31, 21, 14, 12],
                'Knack Packaging': [20, 19, 27, 30, null],
                'Kanpur Plastipack': [15, 5, 5, 11, 17],
                'AGI Greenpac': [9, 15, 18, 20, 20],
                'Cosmo First': [31, 17, 7, 10, 11],
                'Ester Industries': [14, 4, -5, 6, 3],
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
            note: 'Glass makers hold weeks of finished bottles; converters to big brands run shorter cycles.',
            values: {
                'EPL': [102, 87, 85, 87, 97],
                'TCPL Packaging': [86, 106, 92, 95, 98],
                'Mold-Tek Pack.': [155, 112, 147, 148, 144],
                'Huhtamaki India': [43, 51, 37, 35, 26],
                'Pyramid Technoplast': [76, 55, 81, 86, 124],
                'Knack Packaging': [84, 87, 109, 108, null],
                'Kanpur Plastipack': [134, 122, 149, 155, 116],
                'AGI Greenpac': [156, 87, 47, 172, 189],
                'Cosmo First': [63, 25, 0, 17, 10],
                'Ester Industries': [139, 121, 90, 101, 108],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. This is a sector that mostly collects its profit.',
            values: {
                'EPL': [55, 105, 82, 95, 75, 82],
                'TCPL Packaging': [63, 46, 93, 45, 93, 69],
                'Mold-Tek Pack.': [2, 112, 59, 77, 72, 67],
                'Huhtamaki India': [-25, 84, 141, 120, 124, 98],
                'Pyramid Technoplast': [-14, 78, -9, 81, -73, 10],
                'Knack Packaging': [40, 46, 35, 71, null, 51],
                'Kanpur Plastipack': [59, null, -25, 86, 78, 90],
                'AGI Greenpac': [68, 113, 105, 70, 96, 92],
                'Cosmo First': [84, 121, 134, 58, 103, 97],
                'Ester Industries': [36, 62, null, 76, 96, 76],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all filed years.',
            note: 'Converters are capital-hungry: most of the operating cash goes back into machines.',
            values: {
                'EPL': [1.0, 5.8, 5.4, 10.3, 5.1, 5.7],
                'TCPL Packaging': [-8.5, 0.6, 5.7, -1.5, 6.5, 1.2],
                'Mold-Tek Pack.': [-7.4, 1.0, -8.9, -1.8, -1.6, -3.5],
                'Huhtamaki India': [-4.1, 1.2, 7.0, 3.0, 7.4, 2.8],
                'Pyramid Technoplast': [-2.8, 3.5, -9.0, -5.8, -17.2, -7.2],
                'Knack Packaging': [1.5, -2.1, -5.8, 4.7, null, -0.3],
                'Kanpur Plastipack': [-1.8, 5.7, -9.5, 5.3, 3.3, 0.8],
                'AGI Greenpac': [-20.0, 10.6, 13.1, 6.9, 6.6, 5.5],
                'Cosmo First': [6.5, 2.8, -2.0, -11.6, -0.4, -0.8],
                'Ester Industries': [-31.7, -17.9, -2.7, 6.3, 2.0, -7.9],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Huhtamaki.',
            note: 'Below zero means more cash than debt. Cosmo First and Ester carry the heaviest debt relative to profit.',
            values: {
                'EPL': [1.0, 1.1, 1.0, 0.7, 0.8],
                'TCPL Packaging': [2.9, 2.1, 1.9, 2.1, 2.1],
                'Mold-Tek Pack.': [0.2, 0.3, 0.9, 1.2, 1.2],
                'Huhtamaki India': [3.4, 2.3, -0.7, -1.5, -1.8],
                'Pyramid Technoplast': [1.5, 1.0, 0.3, 1.1, 3.2],
                'Knack Packaging': [1.9, 2.1, 2.0, 1.4, null],
                'Kanpur Plastipack': [3.7, 7.0, 11.1, 3.2, 1.6],
                'AGI Greenpac': [4.2, 1.0, 0.5, 0.3, 0.3],
                'Cosmo First': [1.3, 2.3, 5.5, 4.9, 4.2],
                'Ester Industries': [3.4, 8.2, null, 4.0, 6.7],
            },
            cellNotes: {
                'Knack Packaging': 'Screener has no FY26 balance sheet for it yet.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all filed years.',
            note: 'Nine of the ten are adding capacity at once; returns depend on whether the new capacity has named customers.',
            values: {
                'EPL': [8.0, 10.5, 9.6, 8.6, 10.1, 9.4],
                'TCPL Packaging': [17.4, 6.8, 9.5, 9.0, 8.5, 9.7],
                'Mold-Tek Pack.': [7.9, 19.9, 20.2, 15.9, 15.7, 16.1],
                'Huhtamaki India': [3.0, 3.2, 3.7, 2.6, 2.2, 3.0],
                'Pyramid Technoplast': [1.2, 4.6, 8.3, 11.7, 11.2, 8.0],
                'Knack Packaging': [2.9, 7.2, 10.9, 8.0, null, 7.6],
                'Kanpur Plastipack': [6.4, 8.8, 8.5, 1.2, 3.8, 5.5],
                'AGI Greenpac': [32.7, 12.3, 11.2, 10.0, 14.9, 14.8],
                'Cosmo First': [9.3, 12.4, 11.5, 17.3, 11.3, 12.3],
                'Ester Industries': [37.3, 23.1, 6.9, 2.4, 4.4, 14.1],
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
            note: 'Glass furnaces and film lines are capital-heavy; sacks and drums are lighter.',
            values: {
                'EPL': [2.3, 2.2, 2.0, 2.1, 2.0],
                'TCPL Packaging': [2.0, 2.5, 2.2, 2.3, 2.0],
                'Mold-Tek Pack.': [2.4, 1.9, 1.5, 1.4, 1.4],
                'Huhtamaki India': [4.9, 6.2, 5.3, 4.2, 4.1],
                'Pyramid Technoplast': [8.0, 7.4, 5.5, 5.1, 2.9],
                'Knack Packaging': [6.0, 5.3, 4.0, 4.5, null],
                'Kanpur Plastipack': [2.9, 2.3, 1.8, 2.7, 3.5],
                'AGI Greenpac': [0.9, 1.2, 1.2, 1.2, 1.3],
                'Cosmo First': [3.0, 2.1, 1.6, 1.6, 1.5],
                'Ester Industries': [2.8, 1.1, 1.1, 1.3, 1.4],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Qualified on the line', description: 'Validated on the customer’s filling line, artwork or regulatory filings, so switching is costly.' },
            { key: 'approval', label: 'Material approvals', description: 'Food, pharma and recycled-content approvals that take years.' },
            { key: 'freight', label: 'Proximity and freight', description: 'A plant close to customers where shipping empty space is uneconomic.' },
            { key: 'pass', label: 'Cost pass-through', description: 'A = resin or board passed through automatically; D = a spread it does not control.' },
            { key: 'scale', label: 'Scale and position', description: 'Market share and ability to serve large customers.' },
        ],
        rows: [
            { company: 'EPL', trend: 'widening', trendNote: 'Sustainable tubes a record 44% of sales; won share in the supply crisis.',
                grades: { qual: { grade: 'A', note: 'Tubes qualified globally by oral-care and beauty groups' }, approval: { grade: 'A', note: 'Recyclable mono-material tubes' }, freight: { grade: 'B', note: 'Plants on four continents' }, pass: { grade: 'A', note: '100% pass-through on over half of revenue' }, scale: { grade: 'A', note: 'About 15–25% of the world market' } } },
            { company: 'TCPL Packaging', trend: 'widening', trendNote: 'Margins up four quarters running; share taken from unorganised printers.',
                grades: { qual: { grade: 'B', note: 'Cartons must arrive in perfect register' }, approval: { grade: 'B', note: 'Food and pharma audits' }, freight: { grade: 'A', note: 'Plants near FMCG belts' }, pass: { grade: 'B', note: 'Board passed on with a quarter’s lag' }, scale: { grade: 'B', note: 'A leading carton maker' } } },
            { company: 'Mold-Tek Pack.', trend: 'widening', trendNote: 'Record profit per kilo; pharma volumes up 38%.',
                grades: { qual: { grade: 'A', note: 'Pails designed with customers’ filling lines' }, approval: { grade: 'A', note: '40% recycled formulation for Asian Paints' }, freight: { grade: 'B', note: 'Plants near paint and FMCG customers' }, pass: { grade: 'A', note: 'Resin passed through automatically' }, scale: { grade: 'B', note: 'Leader in in-mould-labelled pails' } } },
            { company: 'Huhtamaki India', trend: 'stable', trendNote: 'Record margin partly from customer stockpiling.',
                grades: { qual: { grade: 'B', note: 'Flexible packs for big FMCG brands' }, approval: { grade: 'B', note: 'Recyclable Bluloop structures' }, freight: { grade: 'C', note: 'National plants' }, pass: { grade: 'B', note: 'A quarter’s lag' }, scale: { grade: 'B', note: 'Large but in a fragmented market' } } },
            { company: 'Pyramid Technoplast', trend: 'widening', trendNote: 'Record profit per tonne; new plant at Kutch beside chemical clusters.',
                grades: { qual: { grade: 'B', note: 'Drums and bulk containers approved by chemical makers' }, approval: { grade: 'B', note: 'UN-certified containers' }, freight: { grade: 'A', note: 'Builds beside customers; own fleet' }, pass: { grade: 'B', note: 'Resin passed on' }, scale: { grade: 'C', note: 'Small' } } },
            { company: 'Knack Packaging', trend: 'widening', trendNote: 'Volume up 21%; capacity rising from 43,300 to 70,000 tonnes.',
                grades: { qual: { grade: 'B', note: 'Printed sacks for rice and food brands' }, approval: { grade: 'B', note: 'Food-contact sacks' }, freight: { grade: 'B', note: 'Regional' }, pass: { grade: 'B', note: 'Resin passed on' }, scale: { grade: 'C', note: 'Mid-sized' } } },
            { company: 'Kanpur Plastipack', trend: 'stable', trendNote: 'European exports exposed to container freight.',
                grades: { qual: { grade: 'C', note: 'Bulk bags' }, approval: { grade: 'B', note: 'Food-grade bags for Europe' }, freight: { grade: 'D', note: 'Freight to Europe decides margins' }, pass: { grade: 'C', note: 'Partial' }, scale: { grade: 'C', note: 'Small' } } },
            { company: 'AGI Greenpac', trend: 'narrowing', trendNote: 'Its largest rival, HNG, has a new owner and a modernisation plan.',
                grades: { qual: { grade: 'B', note: 'Bottles qualified for beverage and pharma brands' }, approval: { grade: 'B', note: 'Specialty glass for perfume and pharma' }, freight: { grade: 'A', note: 'Glass is heavy; regional monopolies' }, pass: { grade: 'C', note: 'Industry capacity sets price' }, scale: { grade: 'B', note: 'About 2,000 tonnes a day' } } },
            { company: 'Cosmo First', trend: 'stable', trendNote: 'Specialty films 61% of volume; commodity spread went below zero.',
                grades: { qual: { grade: 'B', note: 'Specialty grades qualified by converters' }, approval: { grade: 'B', note: 'Recycled and specialty films' }, freight: { grade: 'C', note: 'Exports face freight' }, pass: { grade: 'D', note: 'A spread it does not control' }, scale: { grade: 'B', note: 'A leading BOPP film maker' } } },
            { company: 'Ester Industries', trend: 'stable', trendNote: 'Chemical-recycling venture with Nike as anchor; heavy debt.',
                grades: { qual: { grade: 'C', note: 'Mostly commodity film' }, approval: { grade: 'A', note: 'Food-grade rPET; licensed recycling technology' }, freight: { grade: 'C', note: 'Exports' }, pass: { grade: 'D', note: 'Film spread' }, scale: { grade: 'C', note: 'Small' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**EPL is the best business in this sector, and it is not close.** It holds roughly 15–25% of the world market in laminated tubes (toothpaste and most beauty creams), against Albéa as the only comparable rival. A tube is qualified on the brand owner's filling line, artwork and regulatory filings, so switching means re-validating across countries. That is why EPL passes 100% of cost rises on for more than half its revenue and held a 19–20% margin through the worst resin spike in years. Its price asks for less growth than I expect.",
                "**TCPL Packaging is the second holding.** Cartons are bulky and must arrive perfectly printed on the day the line runs, so they are bought from nearby, reliable suppliers; TCPL has raised margins while taking share from printers who cannot finance today's board prices, and has a cheap option in battery separator film. **Pyramid Technoplast** earns its returns from physics: drums are mostly air, so a plant beside a chemical cluster wins. Own both. **Knack** and **Mold-Tek** are good businesses to follow.",
                "**Be more careful with AGI Greenpac than its multiple suggests: wait.** Its margins were earned while its largest competitor, Hindusthan National Glass (about 37% of organised capacity), was insolvent. HNG has a new owner and a modernisation plan, and a glass furnace runs for a decade whether the market needs it or not. **Cosmo First and Huhtamaki** are cycles with self-help: wait for the spread and volumes to settle.",
                "**Two things to hold onto before reading the rest.** First, **read profit per kilo, not percentage margins**: resin is passed through, so revenue and margins swing while the conversion fee holds. Second, **nine of these ten companies are adding capacity at once**; returns depend on whether the new machines have named customers. I would **pass on Kanpur Plastipack** (freight decides it) and **Ester Industries** (an equity stub on ₹700cr-plus of debt).",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped by where they sit in the chain. All figures are filed (Screener): AGI, Knack, Mold-Tek, Huhtamaki and Pyramid standalone; Huhtamaki reports calendar years. None of these companies publishes an order book. **Read the growth tab with care** (most of it is resin prices) and start with cash conversion: this is a sector that mostly collects its profit. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Everything in this sector is a version of the same equation: buy material at a price you do not control, add a conversion fee per kilo, and get paid. The differences are where in the chain a company sits and whether the fee is contractual.",
            ],
            points: [
                {
                    label: 'Four positions in the chain',
                    text: "**Film makers** (Cosmo, Ester) make the plastic film everyone else prints on and earn a spread between film and resin prices, set by global capacity and trade duties. **Converters to brand owners** (EPL, TCPL, Huhtamaki, Mold-Tek) sell a qualified pack for a fee per kilo or per thousand pieces, the best position in the chain. **Industrial and bulk packers** (Knack, Kanpur, Pyramid) sell sacks, bags and drums where freight matters more than looks. **Glass** (AGI) is a different industry: furnaces run for a decade and pricing is set by how much capacity is lit.",
                },
                {
                    label: 'What stops a customer switching',
                    text: "**Qualification on the filling line** (EPL's tubes, Mold-Tek's pails, pharma packs named in regulatory filings); **material approvals** for food, pharma and recycled content; **proximity and freight** (drums, cartons, glass are bulky); and **artwork and colour** (Knack's colour formulations, EPL's global colour consistency). Supply failure, not price, is what usually loses an account.",
                },
                {
                    label: 'Where the demand is coming from',
                    text: "**Recycled-content rules**: rigid plastic packaging must reach 30% recycled material, rising to 60% by 2028–29, with producer responsibility from April 2026; food and drug packs are largely exempt, so the rule lands hardest on non-food rigid packs such as Mold-Tek's paint pails. **Premiumisation**: jars to tubes (EPL), pharma pails (Mold-Tek), specialty glass (AGI). **Cans** taking share from glass in beverages. **Exports**, now that US film duties are gone, when freight allows.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**EPL** depends on global oral-care and beauty brands; **TCPL** and **Huhtamaki** on Indian FMCG volumes; **Mold-Tek** on paint, food and pharma customers and the recycling rules; **Pyramid** on chemical clusters; **Knack** on rice and food brands; **Kanpur** on European demand and freight; **AGI** on beverage and liquor volumes and HNG's revival; **Cosmo** and **Ester** on film spreads and trade duties. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Converters to brand owners', 'EPL, TCPL, Mold-Tek, Huhtamaki', '7–21%', '12–18%', '**67–98%**'],
                        ['Industrial and bulk', 'Pyramid, Knack, Kanpur', '7–21%', '12–30%', '**10–90%**'],
                        ['Glass and cans', 'AGI', '21–25%', '20%', '**92%**'],
                        ['Film makers', 'Cosmo, Ester', '4–12%', '3–11%', '**76–97%**'],
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
                    label: 'Lasting: qualified on the customer’s line',
                    text: "**EPL**'s tubes are qualified globally by oral-care and beauty groups and specified from one head office; **Mold-Tek**'s pails are designed with customers' filling equipment and made with its own moulds and robots. Re-qualification costs the customer time and risk, so these relationships run for decades. Recycled-content approvals will deepen them.",
                },
                {
                    label: 'Lasting but capped: freight radius',
                    text: "**Pyramid** (drums near chemical clusters, its own truck fleet), **TCPL** (carton plants near FMCG belts) and **AGI** (heavy glass) have genuine, permanent regional advantages. The same physics caps how far any one plant can grow, which is why every one of them keeps building new sites.",
                },
                {
                    label: 'Wearing away: glass pricing',
                    text: "**AGI**'s 21–25% margins were earned while HNG, 37% of organised capacity, was crippled. A revived HNG will compete for the same beverage and liquor customers; glass prices are set by how much capacity is lit, so I expect AGI's margin to drift lower over the next three years even if it executes well.",
                },
                {
                    label: 'Barely a moat: spreads and freight',
                    text: "**Cosmo** and **Ester** own a spread, not a fee: BOPP film over resin went from about $89 a tonne to below zero this year. Both are escaping into specialty and recycled grades (61% of Cosmo's volume). **Kanpur**'s bulk bags compete with Turkish and Vietnamese suppliers into Europe, and container rates decide its margin.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Albéa, Amcor and Hoffmann Neopac in tubes; ITC Paperboards and Parksons in cartons; Uflex and Constantia in flexibles; Time Technoplast in drums and pails; HNG (now INSCO), PGP Glass and Haldyn Heinz in glass; Jindal Poly and SRF in film.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In a pass-through business the percentage margin falls when resin rises even if nothing has deteriorated. The right measure is profit per unit shipped, and on that basis this sector did well in a very difficult quarter.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: fees per kilo that held',
                    text: "**Mold-Tek** earned a record ₹46.7 of operating profit per kilo and raised guidance; **EPL** recovered 100% of cost inflation for a 19–20% margin; **TCPL** raised margins four quarters running; **Pyramid** earned a record ₹16,380 per tonne. That is what a real conversion-fee business looks like under stress, and these should hold.",
                },
                {
                    label: 'Cyclical: set by capacity or stockpiling',
                    text: "**AGI**'s glass margin depends on industry utilisation, which is about to change as HNG returns. **Huhtamaki**'s record 10% margin included volume management attributes partly to customers stockpiling ahead of price rises. **Kanpur**'s moves with container rates, which went from about $2,000 to $5,000.",
                },
                {
                    label: 'Not structural: spreads',
                    text: "**Cosmo**'s commodity films (39% of volume) and **Ester**'s non-specialty film earn whatever the spread allows; the BOPP spread fell below zero after a second Hormuz closure. Their specialty grades are more stable.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Over five years **EPL** tied up about ₹550cr in stock as it grew, partly funded by suppliers, and added about ₹180cr more in Q1 alone as resin rose. **AGI**'s stock rose to 216 days. **Pyramid**'s cash cycle rose from 55 to 124 days and it consumed cash in FY26.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Pyramid** (above) and **Mold-Tek** (stock up to 148 days, finance costs up about 20% in a quarter) are the ones to watch, along with **Cosmo**, which added ₹85cr in Q1.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Huhtamaki**'s cycle fell from 43 to 26 days and it turned almost all five years' profit into cash. **Cosmo** runs a cycle of about 10 days because its suppliers fund its stock. **Kanpur**'s cycle fell from 155 to 116 days.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Glass makers hold weeks of finished bottles and film makers hold resin; big-brand converters are paid on time. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: recycled-content rules',
                    text: "Rigid plastic packaging must contain at least 30% recycled material, rising to 60% by 2028–29; flexibles and multilayer packs have lower targets. The mandate lands hardest on non-food rigid packs (**Mold-Tek**'s paint pails) and creates demand for recycled material (**Ester**'s rPET, **Pyramid**'s drum recycling). This is a regulation with a date, so it should drive demand for years.",
                },
                {
                    label: 'Growth driver: premiumisation',
                    text: "**EPL**'s beauty and personal-care business (54% of sales, growing above 20%) rides a shift from jars to tubes; **Mold-Tek**'s pharma volumes grew 38% at about double its average profit per kilo; **AGI**'s specialty glass for perfume and pharma grows at high double digits. Moving up the value per kilo is the most reliable growth in packaging, because the kilos themselves grow only with the economy.",
                },
                {
                    label: 'Growth driver: exports and new materials',
                    text: "US duties that suppressed Indian film are gone, and **Cosmo** expects 25–30% growth in the Americas; **Huhtamaki** exports about 30% of volume; **Kanpur** sells mostly into Europe. **AGI**'s 1.6 billion-can plant (about 40% of India's current can capacity) hedges against glass losing share. Freight and port congestion are the binding constraint.",
                },
                {
                    label: 'Growth driver: a technology option',
                    text: "**TCPL**'s battery separator film costs about ₹125cr, starts in Q4 FY28, and could reach ₹1,100cr-plus of revenue if customers qualify it. It competes with Chinese incumbents, but the option costs little.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Mold-Tek** raised its profit-per-kilo guidance; **Knack** grew volume 21%; **EPL** grew about 20% underlying; **TCPL** posted double-digit domestic volume and rising margins.",
                },
                {
                    label: 'Cautious',
                    text: "**Huhtamaki** attributes part of its volume to stockpiling. **Cosmo** has about 15% of film capacity still unused after a ₹1,200cr investment cycle.",
                },
                {
                    label: 'Missed',
                    text: "**Pyramid** is building a new Kutch plant after telling investors its capex cycle was over, and its exports stopped on freight. **Kanpur**'s margin fell back with freight rates.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**AGI** says little about how it expects glass prices to behave once HNG is modernised. **Ester**'s outcome depends on film spreads and on funding its recycling venture.",
                },
                {
                    label: 'My outlook',
                    text: "Packaging volumes grow roughly with consumption, 6–10% a year, with premiumisation and recycling rules on top. **I expect the qualified converters to compound at 15–18%, the glass and film makers to follow their cycles, and the capacity everyone is adding to test pricing in 2027–28.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['EPL', 'Beauty tubes; sustainable tubes; share', '10% / **15%** / 20%'],
                        ['TCPL Packaging', 'Cartons; flexibles; separator option', '10% / **15%** / 22%'],
                        ['Mold-Tek Pack.', 'Pharma pails; recycling rules', '10% / **16%** / 22%'],
                        ['Pyramid Technoplast', 'Chemical drums; Kutch plant', '8% / **15%** / 22%'],
                        ['Knack Packaging', 'Printed sacks; capacity to 70,000 tonnes', '10% / **18%** / 25%'],
                        ['AGI Greenpac', 'Specialty glass; cans; HNG revival', '0% / **10%** / 16%'],
                        ['Cosmo First', 'Specialty films; US exports', '0% / **12%** / 20%'],
                        ['Kanpur Plastipack', 'European bulk bags; freight', '0% / **10%** / 18%'],
                        ['Huhtamaki India', 'Flexibles after stockpiling', '0% / **8%** / 14%'],
                        ['Ester Industries', 'Film spread; recycling venture', 'Loss-making; no estimate'],
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
                    label: 'Everyone is adding capacity',
                    text: "**Knack** is going from about 43,300 to 70,000 tonnes by October 2027; **AGI** a 500-tonne furnace and a can plant; **Mold-Tek** doubling thin-wall capacity; **Pyramid** a Kutch plant; **Kanpur** a third unit; **Cosmo** still has about 15% of film capacity idle. EPL, TCPL and Mold-Tek are adding against named demand; the others did not say who will buy.",
                },
                {
                    label: 'A competitor returns',
                    text: "**AGI** faces a modernised HNG under new ownership. Management did not say how it expects pricing to change.",
                },
                {
                    label: 'Spreads, freight and duties',
                    text: "**Cosmo** and **Ester** depend on film spreads and on Indian anti-dumping duties on Chinese film; **Kanpur** and **Pyramid** on container rates (Pyramid's exports stopped entirely this quarter). None of these can be controlled by management.",
                },
                {
                    label: 'Debt and ownership',
                    text: "**Ester** carries about ₹720cr of gross debt against a market value not much larger, with its recycling venture still to be funded. **Cosmo**'s net debt is about four years of operating profit. **EPL**'s promoter (Blackstone) holds about 26% after selling down, and a merger proposal is pending.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or heavy depreciation is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **9% at 13–15x, 12% at 18–19x, 14% at 22x and 18% at 29–30x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is the cheapest sector in this set**: most prices ask for ordinary growth, so the question is quality, not price.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Cosmo**, **Ester** and **TCPL** carry debt the P/E ignores, so they are dearer than they look; **Huhtamaki** holds net cash. Converters have heavy depreciation, so EV/EBITDA is low across the board.",
                },
                {
                    label: 'Reasonable',
                    text: "**EPL**, **Pyramid**, **Knack**, **Mold-Tek**, **AGI**, **Cosmo**, **Kanpur** and **Huhtamaki**: prices that ask for about the growth I expect or less. For AGI, Cosmo, Kanpur and Huhtamaki the question is whether today's margins last, not the price.",
                },
                {
                    label: 'Full',
                    text: "**TCPL**: a little ahead of my estimate, for a business I would still own.",
                },
                {
                    label: 'Not meaningful',
                    text: "**Ester** is loss-making; its value belongs mostly to lenders unless film spreads hold.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'EPL', rank: 1, stance: 'COMPOUNDER', segment: CONV,
            what: "The world's largest or second-largest maker of laminated tubes for toothpaste, beauty and pharma, with plants on four continents.",
            view: "**A category leader customers cannot casually replace.** 15–25% of the world market, packs qualified on customers' lines and in their filings, 100% pass-through on over half of revenue, and sustainable tubes at a record 44% of sales. It turned 82% of five years' profit into cash. The price asks for less than my ~15% estimate.",
            watch: 'Beauty growth; sustainable-tube wins; the merger and promoter stake.',
        },
        {
            company: 'TCPL Packaging', rank: 2, stance: 'COMPOUNDER', segment: CONV,
            what: "Folding cartons, printed labels and flexible packaging for FMCG, food and pharma brands, with a battery-separator project.",
            view: "**Proximity plus reliability, done well.** Margins up four quarters running and share taken from printers who could not fund the spike, plus a cheap option in battery separators. Net debt is about two years of operating profit. The price needs a little more than my ~15% estimate.",
            watch: 'Margins as board prices move; the fourth flexible line; separator qualification.',
        },
        {
            company: 'Mold-Tek Pack.', rank: 3, stance: 'PRICED', segment: CONV,
            what: "In-mould-labelled plastic pails and containers for paint, lubricants, food, FMCG and pharma.",
            view: "**A good business priced for its pharma shift.** Record profit per kilo, pharma volumes up 38% and recycled formulations for Asian Paints. But capex is heavy and free cash has been negative. The price roughly matches my ~16% estimate; buy after a weak quarter.",
            watch: 'Pharma growth; Panipat utilisation; finance costs.',
        },
        {
            company: 'Huhtamaki India', rank: 4, stance: 'TURNAROUND', segment: CONV,
            what: "Flexible packaging (laminates, pouches, labels) for FMCG brands in India and for export; part of Finland's Huhtamaki group. Reports calendar years.",
            view: "**Cheap, cash-rich and waiting to prove its volumes.** Its cash cycle is short and it holds net cash, but its record margin included stockpiling by customers. The price asks for about my ~8% estimate.",
            watch: 'Volumes after stockpiling; margins; governance.',
        },
        {
            company: 'Pyramid Technoplast', rank: 5, stance: 'SCALEUP', segment: IND,
            what: "Plastic and steel drums and 1,000-litre bulk containers for chemical, pharma and agrochemical makers, with its own truck fleet.",
            view: "**Returns from physics.** Drums are mostly air, so plants beside chemical clusters win; it earned a record ₹16,380 per tonne. But it is building again after saying its capex cycle was over and consumed cash in FY26. The price asks for less than my ~15% estimate.",
            watch: 'The Kutch plant; cash conversion; exports resuming.',
        },
        {
            company: 'Knack Packaging', rank: 6, stance: 'SCALEUP', segment: IND,
            what: "Printed woven sacks and bags for rice, flour, sugar and food brands; recently listed.",
            view: "**A logistics product turned into a shelf billboard.** Volume grew 21% and its colour formulations keep customers, but capacity is rising 62% and it has little listed history. The price asks for less than my ~18% estimate.",
            watch: 'Capacity filling; a full year of listed disclosure; margins.',
        },
        {
            company: 'Kanpur Plastipack', rank: 7, stance: 'CYCLICAL', segment: IND,
            what: "Bulk bags (FIBCs), woven fabric and yarn, mostly exported to Europe.",
            view: "**A cycle driven by freight.** It has improved its mix, but container rates to Europe decide its margin, which fell back as rates rose. The price asks for about my ~10% estimate.",
            watch: 'Freight rates; European demand; Unit 3.',
        },
        {
            company: 'AGI Greenpac', rank: 8, stance: 'CYCLICAL', segment: GLASS,
            what: "Container glass bottles for beverages, liquor, food and pharma, plus specialty glass and a new aluminium-can plant.",
            view: "**Well run, but its margin was a gift from an insolvent rival.** It earns 21–25% and turns most profit into cash, but HNG, 37% of organised capacity, has a new owner and a modernisation plan, and cans are a new industry for it. The price asks for about my ~10% estimate.",
            watch: 'Glass prices as HNG returns; the Gwalior furnace; the can plant.',
        },
        {
            company: 'Cosmo First', rank: 9, stance: 'CYCLICAL', segment: FILM,
            what: "BOPP films (commodity and specialty) for packaging, labels and industry, plus pet-care and consumer businesses.",
            view: "**A spread business escaping upward.** Specialty films are 61% of volume and held ₹63 a kilo, and US duties are gone, but the commodity spread fell below zero and net debt is about four years of operating profit. The price asks for about my ~12% estimate.",
            watch: 'Film spreads; specialty share; debt.',
        },
        {
            company: 'Ester Industries', rank: 10, stance: 'TURNAROUND', segment: FILM,
            what: "Polyester (PET) film and specialty polymers, with a chemical-recycling venture (Elite) with Loop Industries and Nike as an anchor customer.",
            view: "**An equity stub on a spread.** A genuine recycling technology with named customers, but about ₹720cr of gross debt against a similar market value, loss-making at the net level, and a venture that still needs funding. No growth estimate.",
            watch: 'Debt reduction; film spreads; Elite funding.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Converters to brand owners.** **EPL: own**, as the largest position: a category leader customers cannot casually replace. **TCPL: own.** Proximity and reliability, plus a cheap technology option. **Mold-Tek: follow.** Good, but buy after a weak quarter. **Huhtamaki: wait.** Volumes must hold after the stockpiling.",
            "**Industrial and bulk.** **Pyramid: own, small.** Freight economics and self-made closures. **Knack: follow.** Needs another year of listed disclosure. **Kanpur Plastipack: pass.** Freight decides it.",
            "**Glass and film.** **AGI Greenpac: wait.** See what glass prices do once HNG is back. **Cosmo First: wait.** A spread moving the wrong way. **Ester Industries: pass.** Debt must fall first.",
            "**What would change my view.** Glass prices holding after HNG's restart (AGI); film spreads recovering (Cosmo, Ester); freight rates falling (Kanpur, Pyramid); TCPL's separator qualifying. For the worse: new capacity across the sector arriving without customers, or a resin spike that brands resist passing on.",
            "**What to watch next quarter.** EPL's beauty growth; TCPL's margins; Mold-Tek's pharma volumes; Pyramid's cash; Knack's capacity; AGI's pricing; Cosmo's spread; Ester's debt.",
        ],
        bottomLine:
            "Ignore revenue growth and percentage margins during a resin spike; read profit per kilo, volume and utilisation. Own the qualified converters (EPL, TCPL Packaging) and the freight-radius specialist (Pyramid Technoplast), follow Knack Packaging and Mold-Tek Pack., and treat glass and film (AGI Greenpac, Cosmo First, Ester Industries) as cycles whose margins belong to the industry, not the company.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/EPL/consolidated/' },
        { label: 'Laminated tubes: global market shares of EPL, Albéa and peers — GM Insights', url: 'https://www.gminsights.com/industry-analysis/laminated-tubes-market' },
        { label: 'India container glass: HNG capacity and INSCO acquisition, AGI capacity — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-container-glass-market/companies' },
        { label: 'AGI Greenpac: what happens when the biggest competitor returns — 91Capital', url: 'https://91capital.substack.com/p/agi-greenpac-when-your-biggest-competitor' },
        { label: 'India\'s packaging firms EPL, Indovida to merge in $2bn deal — ICIS', url: 'https://www.icis.com/explore/resources/news/2026/03/30/11193160/india-s-packaging-firms-epl-indovida-to-merge-in-2bn-deal/' },
        { label: 'Plastic Waste Management (Amendment) Rules 2026: recycled content and EPR — Corporate Professionals', url: 'https://www.corporateprofessionals.com/regulatoryupdate/plastic-waste-management-amendment-rules-2026-strengthening-epr-recycled-content-and-reuse-obligations/' },
        { label: 'India plans provisional anti-dumping duties on PET films from Bangladesh, China, Thailand — ICIS', url: 'https://www.icis.com/explore/resources/news/2026/03/23/11190930/india-plans-provisional-adds-on-pet-films-from-bangladesh-china-thailand/' },
        { label: 'Packaging polymer prices may see another upswing in August 2026 — ChemAnalyst', url: 'https://www.chemanalyst.com/NewsAndDeals/NewsDetails/why-are-packaging-polymer-prices-rising-again-in-august-2026-43346' },
        { label: 'Construction begins at AGI Greenpac\'s aluminium beverage can facility — AlCircle', url: 'https://www.alcircle.com/news/construction-begins-at-agi-greenpacs-aluminium-beverage-can-facility-in-up-118336' },
    ],
};
