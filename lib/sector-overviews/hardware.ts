import { SectorOverview } from './types';
import { hardwareBusinesses } from './hardware-businesses';
import { hardwareValuationInputs } from './card-data/hardware';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const TRADE = 'Selling other brands’ computers — refurbished or distributed';
const MAKE = 'Making and servicing equipment';

export const hardware: SectorOverview = {
    sector: 'Hardware',
    title: 'Hardware',
    format: 'ranked',
    businesses: hardwareBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: hardwareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'GNG Electronics': 22,
            'Rashi Peripheral': 12,
            'Control Print': 8,
            'TVS Electronics': null,
        },
    },
    standfirst:
        "Four small companies that sell computer and office hardware in very different ways. GNG refurbishes used business laptops and sells them with a warranty. Rashi distributes Dell, HP, NVIDIA and other brands' products across India. Control Print makes the printers that stamp dates and batch codes on packs, and sells the ink. TVS Electronics sells point-of-sale machines and printers and services IT and solar equipment. This year a global memory-chip shortage has made new laptops much dearer, which has helped the first two. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener): TVS Electronics standalone, the others consolidated. Operating profit ÷ sales.',
            note: 'A distributor earns about 3% on sales; a refurbisher about 10–12%; a maker of printers and ink much more, when its subsidiaries are not losing money.',
            values: {
                'GNG Electronics': [10, 11, 11, 10, 12],
                'Rashi Peripheral': [3, 3, 3, 3, 3],
                'Control Print': [17, 23, 15, 19, 13],
                'TVS Electronics': [1, 4, 6, 6, -2],
            },
            cellNotes: {
                'Control Print': 'Consolidated margin is pulled down by losses at its Italian packaging-machine business, V-Shapes.',
                'TVS Electronics': 'No Q1 FY27 call on file; its latest call is for Q4 FY26.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Rashi grew 62% in Q1, but management says about half of that growth (30–35 points) was higher prices as chips ran short.',
            values: {
                'GNG Electronics': [22, 25, 40, 43, 32],
                'Rashi Peripheral': [-26, 12, 43, 51, 62],
                'Control Print': [14, 10, 15, 15, 4],
                'TVS Electronics': [-13, 22, 14, 2, 10],
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
            note: 'GNG has earned about 20% every year; Control Print is drifting down as overseas losses grow; TVS Electronics has earned little since FY23.',
            values: {
                'GNG Electronics': [20, 22, 21, 20, 20],
                'Rashi Peripheral': [25, 16, 14, 14, 17],
                'Control Print': [19, 23, 24, 18, 16],
                'TVS Electronics': [22, 12, 1, -2, 6],
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
            note: 'Control Print holds long stocks of ink and printers. GNG’s FY26 figure fell sharply, but it built stock again in Q1 FY27.',
            values: {
                'GNG Electronics': [110, 128, 122, 162, 40],
                'Rashi Peripheral': [48, 56, 57, 60, 60],
                'Control Print': [265, 255, 260, 241, 283],
                'TVS Electronics': [-9, 36, 30, 29, 59],
            },
            cellNotes: {
                'GNG Electronics': 'Q1 FY27 (company): net debt rose to ₹406cr as it bought about ₹700cr of laptops ahead of expected price rises.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'The warning in this sector: GNG and Rashi have turned their profits into stock and receivables as they grew, so over five years their operating cash is negative.',
            values: {
                'GNG Electronics': [-55, 2, 123, 21, -110, -23],
                'Rashi Peripheral': [-105, -45, -34, -98, 25, -44],
                'Control Print': [85, 72, 58, 62, 56, 65],
                'TVS Electronics': [96, -40, 140, 64, 30, 51],
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
            note: 'Only Control Print has produced steady free cash. The two traders have funded growth with borrowing.',
            values: {
                'GNG Electronics': [-3.5, 0.0, 6.4, 1.1, -12.6, -3.0],
                'Rashi Peripheral': [-3.5, -1.3, -1.0, -2.2, 0.7, -1.3],
                'Control Print': [15.2, 9.2, 2.2, 5.4, 5.0, 6.7],
                'TVS Electronics': [7.2, -6.7, -3.8, -0.4, 0.3, -0.8],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Control Print.',
            note: 'Below zero means more cash than debt. Control Print holds net cash; the others borrow to carry stock.',
            values: {
                'GNG Electronics': [2.5, 2.7, 3.3, 3.4, 1.6],
                'Rashi Peripheral': [2.8, 4.1, 1.9, 2.9, 2.0],
                'Control Print': [-0.9, -0.8, -0.7, -0.7, -0.7],
                'TVS Electronics': [-0.1, 0.1, 3.6, 3.4, 2.5],
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
            note: 'The traders need almost no plant; their capital goes into stock. Control Print spends on printers placed with customers and on its plants.',
            values: {
                'GNG Electronics': [0.2, 0.1, 2.1, 0.7, 1.2, 1.0],
                'Rashi Peripheral': [0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
                'Control Print': [4.3, 8.9, 11.7, 6.4, 5.4, 7.3],
                'TVS Electronics': [1.3, 4.4, 7.6, 2.1, 1.0, 3.2],
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
            note: 'Very high for the two traders because they own almost no plant; the ratio tells you nothing about their real capital, which is stock and receivables.',
            values: {
                'GNG Electronics': [74.1, 82.6, 27.8, 34.4, 25.6],
                'Rashi Peripheral': [133.0, 122.8, 156.3, 218.6, 197.8],
                'Control Print': [2.3, 2.5, 2.4, 2.7, 2.8],
                'TVS Electronics': [11.8, 10.4, 6.4, 6.8, 8.0],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'access', label: 'Access to supply', description: 'Relationships with brands or corporate sellers that give it stock others cannot get.' },
            { key: 'reach', label: 'Reach and service', description: 'Branches, partners and service network across India and abroad.' },
            { key: 'lock', label: 'Repeat revenue', description: 'Ink, spares and service contracts that follow a sale.' },
            { key: 'brand', label: 'Brand and trust', description: 'Warranties and a name customers rely on.' },
            { key: 'cash', label: 'Balance sheet', description: 'Whether it can carry stock and grow without strain.' },
        ],
        rows: [
            { company: 'GNG Electronics', trend: 'widening', trendNote: 'Raised FY27 revenue guidance to 30%; average prices up 12% as new laptops got dearer.',
                grades: { access: { grade: 'A', note: 'Buys retired corporate laptops in bulk worldwide' }, reach: { grade: 'B', note: 'US and Europe 47% of revenue, Middle East 12%' }, lock: { grade: 'C', note: 'One-off sales' }, brand: { grade: 'B', note: 'Up to 3-year warranty in India (Electronics Bazaar)' }, cash: { grade: 'C', note: 'Borrows to hold stock; net debt ₹406cr in Q1' } } },
            { company: 'Rashi Peripheral', trend: 'widening', trendNote: 'Bought 67% of VDA Infosolutions and formed a chip joint venture with Japan’s Restar.',
                grades: { access: { grade: 'A', note: 'Distributor for Dell, HP, NVIDIA and others' }, reach: { grade: 'A', note: 'Own network across 57 towns' }, lock: { grade: 'C', note: 'Mostly one-off sales' }, brand: { grade: 'C', note: 'Brands belong to its suppliers' }, cash: { grade: 'C', note: 'Operating cash negative in four of five years' } } },
            { company: 'Control Print', trend: 'narrowing', trendNote: 'Italian packaging machines not working well for customers; break-even pushed to H1 FY28.',
                grades: { access: { grade: 'B', note: 'Own printers and ink' }, reach: { grade: 'B', note: 'Service network across India' }, lock: { grade: 'A', note: 'Ink, spares and service follow each printer' }, brand: { grade: 'B', note: 'Competes with global coding-printer makers' }, cash: { grade: 'A', note: 'Net cash' } } },
            { company: 'TVS Electronics', trend: 'stable', trendNote: 'Dropped low-margin contracts; new electronics-assembly lines 30–40% used.',
                grades: { access: { grade: 'C', note: 'Imports kits and parts from China' }, reach: { grade: 'B', note: 'TVS name and service network' }, lock: { grade: 'B', note: 'IT and solar maintenance contracts' }, brand: { grade: 'B', note: 'Known brand in point-of-sale printers' }, cash: { grade: 'C', note: 'Debt up to fund stock' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No one to own outright; follow the two companies riding the chip shortage.** **GNG Electronics** buys retired business laptops in bulk, refurbishes them and sells them with warranties of up to three years in India and abroad (the US, Europe and the Middle East are about 60% of its revenue). It has earned about 20% on capital every year and raised its FY27 revenue guidance to 30%, because new laptops are much dearer while memory chips are scarce. **Rashi Peripheral**, a large Indian distributor for Dell, HP, NVIDIA and others, grew 62% in Q1, and its price asks for little growth.",
                "**But check the cash before anything else.** Both have turned their profits into stock and receivables as they grew: over five years their operating cash is negative. GNG's net debt rose to ₹406cr in Q1 as it bought about ₹700cr of laptops ahead of price rises. That is a reasonable bet while prices rise, and a painful one if they fall.",
                "**Wait on Control Print; pass on TVS Electronics.** Control Print has a good core business (most of its revenue is ink, spares and service for printers already installed) and net cash, but its Italian packaging-machine venture is losing money and its break-even has moved to H1 FY28. TVS Electronics is recovering but was loss-making over the last year.",
                "**Two things to hold onto before reading the rest.** First, **the traders' margins are thin by design**: Rashi keeps about 3 paise of each rupee of sales, so a small price fall on its stock can wipe out a quarter. Second, **this year's growth is partly price**: Rashi says about half of its 60% growth came from higher prices, and both companies expect chip shortages to last into 2027.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (TVS Electronics standalone). None of these companies publishes an order book. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These four sell hardware, but only two make anything.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Global brands (Dell, HP, Lenovo) → distributors (Rashi) → dealers and system integrators → businesses and shoppers. Retired business laptops → refurbishers (GNG) → students, small firms and overseas buyers. Separately, factories need printers that stamp dates and batch codes on packs, and the ink to run them (Control Print), and shops need point-of-sale machines (TVS Electronics). **The profit sits where the customer keeps buying after the first sale**: Control Print's ink. The traders earn thin margins on high volumes.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Companies replacing old PCs (the end of Windows 10 support), AI computing, students who cannot afford new laptops, and packaged-goods and pharma makers who must print codes by law. The memory-chip shortage has pushed entry-level laptop prices up sharply, which sends buyers to refurbished machines.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**The cycle is component prices.** When chips are scarce, stock gains value and margins rise; when they fall, the same stock loses value. Rashi's management flagged a 50% shortage of entry-level laptops. Policy helps Control Print at the edges: a proposal to extend QR codes to far more medicines would enlarge its track-and-trace market. Chinese hardware is the main competitor for TVS Electronics.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**GNG** depends on buying enough used laptops and on new laptops staying dear; **Rashi** on its brands, on chip prices and on collecting from dealers; **Control Print** on factories running (ink usage) and on fixing its Italian unit; **TVS Electronics** on filling its new assembly lines. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Refurbishing and distributing', 'GNG, Rashi', '3–12%', '17–20%', '**Negative (stock and receivables)**'],
                        ['Making and servicing equipment', 'Control Print, TVS Electronics', '−2% to 23%', '6–16%', '**51–65%**'],
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
                    label: 'Lasting: ink after the printer',
                    text: "**Control Print** earns most of its revenue from ink, spares and service for printers already installed. Once a printer is on a fast packing line, a customer rarely swaps it, because downtime costs more than ink.",
                },
                {
                    label: 'Lasting but cyclical: supply and reach',
                    text: "**Rashi** reaches 57 towns with its own network and distributes for the world's biggest brands, which gives it stock allocations smaller rivals cannot get in a shortage. **GNG** buys retired corporate laptops in bulk and backs them with warranties unorganised dealers cannot offer.",
                },
                {
                    label: 'Wearing: overseas ventures',
                    text: "**Control Print**'s Italian subsidiary (V-Shapes) makes packaging machines customers find too complicated; management told its sales team to slow down until they are fixed. Its planned Assam plant is on hold after state incentives were withdrawn.",
                },
                {
                    label: 'Barely a moat: commodity hardware',
                    text: "**TVS Electronics**' printers and point-of-sale machines compete with cheap Chinese imports; its hope is service contracts and electronics assembly for other companies.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Redington** and **Ingram Micro** in distribution; unorganised refurbishers and brands' own certified-refurbished programmes; **Videojet**, **Domino** and **Markem-Imaje** in coding printers; Chinese makers in point-of-sale hardware.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For the traders, the question is how much of today's margin is rising prices on stock.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: Control Print’s core',
                    text: "The Indian coding business earns well and produces free cash every year; the consolidated margin (13–23%) is dragged down by overseas losses. GNG's 10–12% has held for five years and rose to 12.8% in Q1 as average prices rose 12%.",
                },
                {
                    label: 'Cyclical: gains on stock',
                    text: "**Rashi** and **GNG** both profit when stock bought earlier is sold at today's higher prices. Rashi's margin is only about 3%, so its profit is very sensitive to that. When chip prices fall, the effect reverses.",
                },
                {
                    label: 'Not structural: start-up losses',
                    text: "**Control Print**'s Italian venture and **TVS Electronics**' half-used assembly lines depress margins today; both should improve if the problems are fixed.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Rashi**'s operating cash was negative in four of five years as it grew; it says its working capital improved to 56 days in Q1. **GNG** has built about ₹700cr of stock on borrowing.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**TVS Electronics** borrowed to carry stock as memory prices rose and customers paid late; its cycle doubled to 59 days in FY26.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Rashi** collected faster in Q1 even as sales grew 62%, and debtor days stood at 41.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Distributors and refurbishers must hold stock; coding printers are placed with customers ahead of ink sales. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: dear new laptops',
                    text: "Memory-chip prices have risen several-fold since late 2025 as chip makers serve AI data centres, so new laptops have become much dearer. **GNG** targets students in India and Africa who could not afford a PC at all, and raised FY27 guidance to 30% revenue growth with profit margins up 0.75–1 point.",
                },
                {
                    label: 'Growth driver: corporate PC replacement',
                    text: "**Rashi** expects a similar 60% growth rate in Q2 as companies replace old PCs, and a long-run 20% a year. It has moved away from very large, low-margin data-centre deals to protect returns.",
                },
                {
                    label: 'Growth driver: services and acquisitions',
                    text: "**Rashi** bought 67% of VDA Infosolutions (managed IT services) and formed a 74%-owned chip distribution joint venture with Japan's Restar, targeting $100m of revenue in three years. **TVS Electronics** is growing solar-plant maintenance and IT services.",
                },
                {
                    label: 'Growth driver: track and trace',
                    text: "**Control Print** targets 10–15% growth in its core business, and a wider QR-code mandate for medicines would enlarge its track-and-trace market.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**GNG** grew 32% with a higher margin and raised guidance. **Rashi** grew 62% and improved working capital.",
                },
                {
                    label: 'Cautious',
                    text: "**Rashi** flagged an “orange alert” on component supply and retail affordability.",
                },
                {
                    label: 'Missed',
                    text: "**Control Print**'s packaging break-even moved to H1 FY28, its Assam plant is on hold, and Q1 revenue grew only 4%.",
                },
                {
                    label: 'Mixed',
                    text: "**TVS Electronics** returned to a small profit in FY26 by dropping low-margin contracts, but its new assembly lines are only 30–40% used.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect GNG to compound earnings at about 22% and Rashi at about 12% across a chip cycle**, with this year flattered by price. Control Print should grow slowly until its overseas losses stop. TVS Electronics' profit is too small to estimate from.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['GNG Electronics', 'Refurbished laptops for students and small firms; new markets', '12% / **22%** / 30%'],
                        ['Rashi Peripheral', 'PC replacement; services acquisitions; chip prices', '5% / **12%** / 20%'],
                        ['Control Print', 'Ink and service; overseas losses stopping', '3% / **8%** / 15%'],
                        ['TVS Electronics', 'Assembly lines filling; services', 'Loss-making; no estimate'],
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
                    label: 'Chip prices turning',
                    text: "**GNG** and **Rashi** are carrying large stocks bought at rising prices. If chip shortages ease faster than they expect (both say late 2027), those stocks lose value and margins shrink.",
                },
                {
                    label: 'Cash and debt',
                    text: "Both traders fund growth with borrowing; neither has produced operating cash across five years. A slowdown in collections from dealers would strain them quickly.",
                },
                {
                    label: 'Overseas ventures',
                    text: "**Control Print** has put repeated money into its Italian subsidiary; management said the latest infusion is likely to be the last, but the machines still do not work well for customers.",
                },
                {
                    label: 'Imports and technology',
                    text: "**TVS Electronics** competes with Chinese hardware. **Control Print** faces a slow shift to laser coding, which needs no ink; management says lasers have limits on many materials.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 19x, 15% at 24x and 26% at 57x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Control Print** holds net cash, so it is cheaper than its P/E suggests. **GNG** and **Rashi** carry debt the P/E ignores.",
                },
                {
                    label: 'Reasonable',
                    text: "**Rashi**: a price that asks for about the growth I expect, for a thin-margin business in a good year.",
                },
                {
                    label: 'Full',
                    text: "**GNG**: a little more than my estimate, for the best returns here.",
                },
                {
                    label: 'Stretched',
                    text: "**Control Print**: more growth than its core business is delivering while overseas losses continue.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**TVS Electronics** was loss-making over the last year.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'GNG Electronics', rank: 1, stance: 'SCALEUP', segment: TRADE,
            what: "Buys retired business laptops and desktops in bulk, refurbishes them and sells them under its Electronics Bazaar brand with warranties, in India, the US, Europe and the Middle East.",
            view: "**The best returns here, on borrowed stock.** About 20% return on capital every year, revenue up 32% in Q1 and guidance raised to 30%. But operating cash is negative over five years and net debt rose to ₹406cr to carry laptops bought ahead of price rises. The price needs a little more than my ~22% estimate.",
            watch: 'Laptop prices and memory-chip supply; net debt and stock; margin gains as guided.',
        },
        {
            company: 'Rashi Peripheral', rank: 2, stance: 'CYCLICAL', segment: TRADE,
            what: "A large Indian distributor of computers, components and networking products for global brands such as Dell, HP and NVIDIA, now adding IT services and chip distribution.",
            view: "**A thin-margin distributor in a very good year.** Revenue up 62% in Q1, about half of it price, and a return of about 17%. But it keeps about 3% of sales and its operating cash was negative in four of five years. The price asks for about my ~12% estimate.",
            watch: 'Chip prices; working capital; the VDA and Restar ventures.',
        },
        {
            company: 'Control Print', rank: 3, stance: 'TURNAROUND', segment: MAKE,
            what: "Makes coding and marking printers (which print dates, batch codes and barcodes on packs) and the inks they use, with packaging-machine and track-and-trace businesses in Europe.",
            view: "**A good core business with an expensive detour.** Most revenue is ink, spares and service, and it holds net cash. But its Italian packaging machines are not working well for customers, break-even has moved to H1 FY28 and Q1 revenue grew 4%. The price needs more than my ~8% estimate.",
            watch: 'The Italian unit’s fixes and losses; core growth back to 10–15%; any QR-code mandate for medicines.',
        },
        {
            company: 'TVS Electronics', rank: 4, stance: 'TURNAROUND', segment: MAKE,
            what: "Sells point-of-sale machines, printers and scanners, and provides IT maintenance, solar-plant maintenance and electronics assembly for other companies.",
            view: "**A slow turnaround.** It returned to a small profit in FY26 by dropping low-margin contracts, but was loss-making over the last year, its debt rose to fund stock, and its new assembly lines are 30–40% used. No growth estimate.",
            watch: 'Assembly lines filling; working capital; margins.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Refurbishing and distributing.** **GNG Electronics: follow.** The best returns and a real advantage in a chip shortage, but on borrowed stock. **Rashi Peripheral: follow.** A fair price for a thin-margin distributor in a very good year.",
            "**Making and servicing equipment.** **Control Print: wait** until its Italian unit stops losing money. **TVS Electronics: pass** until its turnaround shows in profit.",
            "**What would change my view.** For the better: GNG or Rashi turning profit into cash as stock stops growing. For the worse: chip prices falling while both hold large stocks.",
            "**What to watch next quarter.** GNG's debt and stock; Rashi's working capital; Control Print's Italian losses; TVS Electronics' profit.",
        ],
        bottomLine:
            "A chip shortage has made the traders look better than their cash records do. Follow GNG Electronics and Rashi Peripheral, but watch their stock and debt; wait on Control Print and pass on TVS Electronics.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/EBGNG/consolidated/' },
        { label: 'Wholesale price index, printed circuit boards — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
