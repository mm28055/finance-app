import { SectorOverview } from './types';
import { electAndRefracBusinesses } from './elect-and-refrac-businesses';
import { electAndRefracValuationInputs } from './card-data/elect-and-refrac';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const ELECTRODE = 'Graphite electrodes — a global oligopoly';
const REFRAC = 'Refractories — many suppliers, sticky customers';

export const electAndRefrac: SectorOverview = {
    sector: 'Elect and Refrac',
    title: 'Electrodes and Refractories',
    format: 'ranked',
    businesses: electAndRefracBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: electAndRefracValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'HEG': 8,
            'RHI Magnesita': 14,
            'IFGL Refractories': 15,
        },
    },
    standfirst:
        "Three companies that sell things steelmakers burn up. HEG makes graphite electrodes for electric arc furnaces, in a global industry with only a handful of producers outside China. RHI Magnesita and IFGL make refractories, the heat-resistant linings of furnaces, ladles and casters, in an industry with hundreds of suppliers. That one difference in structure explains most of the gap in their results. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (consolidated), operating profit ÷ sales.',
            note: 'Operating margin excludes other income. HEG’s Q4 FY26 figure includes a mark-to-market loss of roughly ₹230cr on its GrafTech shares, booked in other expenses; without it the quarter would have been about 14%.',
            values: {
                'HEG': [17, 17, 22, -25, 22],
                'RHI Magnesita': [11, 11, 13, 9, 14],
                'IFGL Refractories': [8, 8, 5, 8, 7],
            },
            cellNotes: {
                'HEG': 'Q4 FY26: loss on the GrafTech stake inside other expenses (₹367cr vs ~₹130cr normally). Standalone margin in Q1 FY27 was 29% by the company’s EBITDA measure, which includes other income.',
                'RHI Magnesita': 'Q1 FY27 adjusted EBITDA margin 14.5% (company). The Q4 FY26 goodwill write-off sits below operating profit.',
                'IFGL Refractories': 'Standalone margin 10.5% in Q1 FY27 vs 13.5% a year earlier (company).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue (consolidated), each quarter against the same quarter a year earlier.',
            values: {
                'HEG': [7, 23, 37, 12, 11],
                'RHI Magnesita': [9, 19, 8, 2, 6],
                'IFGL Refractories': [9, 19, 24, 8, 13],
            },
            cellNotes: {
                'HEG': 'Q1 FY27: volumes slightly lower; growth came from better prices and mix (company).',
                'RHI Magnesita': 'Q1 FY27: shipments 122 kt, down 6% year on year; growth from price and mix.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (consolidated): return on capital employed.',
            note: 'RHI Magnesita’s fall from 37% reflects the capital (mostly goodwill) added by the Dalmia OCL and Hi-Tech acquisitions in FY23, as well as lower margins.',
            values: {
                'HEG': [14, 15, 9, 4, 8],
                'RHI Magnesita': [37, 11, 9, 7, 6],
                'IFGL Refractories': [11, 10, 9, 6, 5],
            },
            cellNotes: {
                'HEG': 'Capital includes a large treasury, the GrafTech stake and an investment in Bhilwara Energy; the electrode business alone earns more.',
                'RHI Magnesita': 'FY26 capital still included Dalmia goodwill until the Q4 write-off.',
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios: debtor days + inventory days − payable days.',
            note: 'Electrode production takes about six weeks per batch and producers hold months of needle coke, so HEG’s cycle is structurally long.',
            values: {
                'HEG': [331, 483, 321, 421, 323],
                'RHI Magnesita': [114, 125, 132, 148, 126],
                'IFGL Refractories': [122, 151, 126, 154, 148],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (consolidated): cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Blank where operating profit or operating cash was negative.',
            values: {
                'HEG': [null, 18, 160, 108, 53, 49],
                'RHI Magnesita': [7, 66, 49, 77, 92, 59],
                'IFGL Refractories': [3, 4, 98, 22, 46, 35],
            },
            cellNotes: {
                'HEG': 'FY22: operating cash was −₹141cr as stock was built during the electrode price upcycle.',
                'IFGL Refractories': 'FY22–FY23: almost no operating cash (₹4cr and ₹6cr) as receivables and stock rose.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener, consolidated): operating cash minus spending on fixed assets, as a share of sales. The last column uses five-year totals.',
            note: 'Shows who funds growth from its own cash. HEG’s negative years are its electrode expansion and the start of the battery-anode plant, which moves to HEG Greentech.',
            values: {
                'HEG': [-22.8, -14.9, 10.0, 4.6, -1.6, -4.8],
                'RHI Magnesita': [-1.8, 7.1, 5.0, 6.9, 6.8, 5.4],
                'IFGL Refractories': [-4.9, -9.5, 1.0, -2.7, -0.1, -2.8],
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
            source: 'Filed balance sheets and profit and loss (Screener, consolidated): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for RHI Magnesita and IFGL.',
            note: 'How many years of operating profit it would take to repay net debt. Below zero means more cash than debt.',
            values: {
                'HEG': [0.1, 0.1, 0.6, 1.7, 1.4],
                'RHI Magnesita': [0.0, 3.5, 0.8, 0.6, 0.1],
                'IFGL Refractories': [-1.1, -0.2, -0.2, 0.3, 0.6],
            },
            cellNotes: {
                'HEG': 'Cash only. Counting the ₹858cr treasury the company reports, HEG had net cash of about ₹312cr at FY26; its GrafTech and Bhilwara Energy stakes are excluded either way.',
                'RHI Magnesita': 'FY23: borrowing for the Dalmia OCL acquisition (₹1,589cr), mostly repaid the next year.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener, consolidated): spending on fixed assets as a share of sales. The last column uses five-year totals.',
            note: 'HEG is the capital-hungry one: an electrode expansion and the anode plant. RHI Magnesita spends little, about ₹80–100cr a year.',
            values: {
                'HEG': [16.4, 19.5, 15.5, 8.5, 9.9, 14.0],
                'RHI Magnesita': [3.1, 1.7, 2.2, 3.2, 3.4, 2.7],
                'IFGL Refractories': [5.2, 9.9, 8.2, 4.4, 3.4, 6.1],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Sales per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener, consolidated): sales ÷ net fixed assets at year end.',
            note: 'Higher means more sales from each rupee of plant. RHI Magnesita’s drop in FY23 is the Dalmia acquisition; HEG’s is the anode plant under construction.',
            values: {
                'HEG': [2.9, 1.8, 1.3, 1.1, 1.4],
                'RHI Magnesita': [7.1, 0.8, 1.3, 1.3, 1.9],
                'IFGL Refractories': [3.0, 2.8, 3.2, 2.8, 3.1],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'scale', label: 'Scale and cost position', description: 'Plant size and cost per tonne against competitors.' },
            { key: 'tech', label: 'Technology and know-how', description: 'Process knowledge, product performance, R&D and approvals that take years to copy.' },
            { key: 'service', label: 'Embedded service', description: 'Engineers and equipment inside the customer’s plant under long contracts.' },
            { key: 'raw', label: 'Raw-material security', description: 'Own mines or long-term supply of the key input (needle coke, magnesite, quartzite).' },
            { key: 'price', label: 'Pricing power', description: 'Ability to pass on cost increases quickly. A = price follows the market; D = absorbs costs.' },
        ],
        rows: [
            { company: 'HEG', trend: 'widening', trendNote: 'Utilisation above 90% while Western capacity reportedly runs at 60–65%; expanding to 115,000 tonnes by early 2028, the only new capacity announced outside China.',
                grades: { scale: { grade: 'A', note: 'World’s largest single-site electrode plant (100,000 t)' }, tech: { grade: 'B', note: 'Last new Western entrant was HEG itself, in 1976' }, service: { grade: 'C', note: 'Product sale, little embedded service' }, raw: { grade: 'C', note: 'Buys needle coke from a few global suppliers' }, price: { grade: 'B', note: 'Oligopoly; follows GrafTech and Tokai price moves' } } },
            { company: 'RHI Magnesita', trend: 'widening', trendNote: 'Gained flow-control share; running India’s first robotic caster operation at JSW on a five-year contract; captive quartzite mine opening.',
                grades: { scale: { grade: 'A', note: '30%+ Indian share; 8 plants' }, tech: { grade: 'A', note: 'Austrian parent’s R&D and product range' }, service: { grade: 'B', note: '4PRO: robots, digital scans, full-line service' }, raw: { grade: 'B', note: 'Captive quartzite mine; Minpro recycling JV' }, price: { grade: 'C', note: 'Q1 price rise was a “war surcharge”' } } },
            { company: 'IFGL Refractories', trend: 'narrowing', trendNote: 'Standalone EBITDA −17% as costs outran prices; management calls its price increases temporary and margin-neutral.',
                grades: { scale: { grade: 'C', note: 'Niche flow-control specialist' }, tech: { grade: 'B', note: 'Nozzles and slide-gate systems; US thin-slab product' }, service: { grade: 'B', note: 'Engineers stationed at customer plants' }, raw: { grade: 'D', note: 'Buys all key minerals' }, price: { grade: 'D', note: 'Absorbed fuel and raw-material spikes in Q1' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**HEG is the one I would own, as a cycle rather than a compounder.** It makes graphite electrodes for electric arc furnaces from the world's largest single-site plant, in an industry with only five producers that matter outside China. It ran above 90% utilisation while Western rivals reportedly run at 60–65%, earned a 29% standalone margin in Q1, and holds more treasury cash than debt. Its price asks for very little growth, so it already allows for a weak cycle. The risks are electrode prices, needle-coke costs, possible US duties and a demerger that moves its battery-materials business out.",
                "**RHI Magnesita is the better long-term business, at the wrong price: follow it.** It is India's largest refractory maker (30%+ share) and is moving customers onto long service contracts, running robots and scans inside their plants, while opening its own quartzite mine. But it has earned only 6–11% on capital since the Dalmia deal, it guides only a 13% margin, and its price needs clearly more growth than the ~14% I expect.",
                "**IFGL has good products and no pricing power: pass.** Its nozzles and slide gates perform well and its US business is strong, but it buys all its minerals, could not raise prices as fast as costs in Q1, and its European subsidiaries still lose money. Return on capital has fallen every year from 11% to 5%.",
                "**Two things to hold onto before reading the rest.** First, **industry structure decides the margin**: five electrode makers outside China can hold prices; hundreds of refractory makers cannot. Second, **filed profits are distorted this year**: HEG booked a loss of about ₹230cr on its GrafTech shares inside operating costs, and RHI Magnesita wrote off ₹556cr of goodwill. The live valuation table uses HEG's operating profit without that loss, and its net cash including the treasury.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with more behind **More measures**. All figures are consolidated filed results (Screener). Hover over a starred name for its caveat. **Q4 FY26 is distorted**: HEG's loss on its GrafTech stake sits inside operating costs, and RHI Magnesita's goodwill write-off sits below operating profit, so it does not affect the margin chart. **Start with cash conversion and free cash flow**: none of the three turns profit into cash well, for different reasons. None publishes an order book, so there is no order-cover tab.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Steel is made either by melting iron ore in a blast furnace or by melting scrap and direct-reduced iron in an electric arc furnace. Both routes destroy two kinds of consumable: the linings that hold molten metal (refractories) and, in arc furnaces, the electrodes that carry the current.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Raw materials (magnesite, alumina, quartzite and zircon for refractories; petroleum needle coke for electrodes) → the manufacturer (bricks, castables, nozzles, electrodes) → installation and management inside the steel plant → consumed and replaced within days to months. **Steel uses about 10–15 kg of refractories per tonne**, and refractories are about 3% of a steelmaker's costs (RHI Magnesita). The small cost share and the high cost of failure make buyers careful, but large steel groups still negotiate hard.",
                },
                {
                    label: 'Demand drivers',
                    text: "Steel output (India's rose 7.1% in the first half of 2026 to about 87 Mt; the world outside China rose 2.1%), new steel plants (first-fill refractory orders), and the shift from blast furnaces to arc furnaces, which adds electrode demand. The OECD expects about 71 Mt of new arc-furnace capacity worldwide between 2026 and 2028. **No new blast furnaces are being built in Europe or the US** (HEG).",
                },
                {
                    label: 'Industry structure',
                    text: "**Electrodes are a global oligopoly.** Outside China, capacity is roughly 786,000 tonnes, and five producers (GrafTech, Resonac, HEG, Tokai Carbon, Graphite India) hold about 82% of it. That capacity has shrunk nearly 18% as rivals closed plants (industry estimates). **Refractories are fragmented**: hundreds of producers, Chinese imports, and domestic and multinational rivals adding capacity in India (RHI Magnesita).",
                },
                {
                    label: 'Cyclicality and policy',
                    text: "Electrode prices swing with global steel utilisation and needle-coke costs, so HEG's margins have ranged from about 12% to over 25% in five years. Refractory volumes follow steel output more steadily. The US is considering duties on Indian electrodes (under 10% of HEG's sales), and Europe's carbon border tax (CBAM) pushes steelmakers towards arc furnaces.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**HEG** depends on the global electrode price, which follows arc-furnace steel utilisation outside China and the price of needle coke; Indian steel matters much less, since about 70% of its output is exported. **RHI Magnesita** depends on Indian steel and cement output and new plant construction, plus how much of its customers' refractory work it can run as a service. **IFGL** depends on Indian and US steel mills and on fixing its European subsidiaries. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (FY22–FY26)', 'Return on capital (FY22–FY26)', 'Why'],
                    rows: [
                        ['Graphite electrodes', 'HEG', '12–25%', '4–15%', 'Oligopoly pricing, but a long cash cycle and a large idle treasury dilute returns'],
                        ['Refractories, market leader', 'RHI Magnesita', '11–19%', '6–37%', 'Scale and technology; returns diluted by acquisition goodwill'],
                        ['Refractories, specialist', 'IFGL Refractories', '7–11%', '5–11%', 'Good products, weak pricing, loss-making European subsidiaries'],
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
                    label: 'Lasting: scarce electrode capacity',
                    text: "**HEG** has the world's largest single-site electrode plant, its own power plants and one of the lowest costs outside China. A new electrode plant needs years, needle-coke contracts, huge power supplies and decades of process knowledge; HEG says it was itself the last new entrant in the Western world, in 1976, and capacity outside China has shrunk since. This edge should last. What it does not do is stop the cycle: when steel utilisation falls, electrode prices fall for everyone.",
                },
                {
                    label: 'Lasting and widening: running the customer’s refractory operation',
                    text: "**RHI Magnesita** is moving from selling bricks to managing customers' refractory work under multi-year contracts, with robots, lining scans and engineers on site; it runs India's first robotic caster operation at JSW. That raises switching costs every year it is in place. Its captive quartzite mine and recycling venture should lower costs. But steel groups still negotiate hard, so pricing power stays limited.",
                },
                {
                    label: 'Wearing away: a specialist without scale',
                    text: "**IFGL**'s products perform well and its engineers sit in customers' plants, which makes it hard to remove once qualified. But large steel mills can switch between qualified suppliers, IFGL buys all its key minerals, and it could not pass on Q1's cost rises. Without scale or raw-material control, I expect its edge to keep narrowing.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Graphite India** (India's other electrode maker, which also owns 6.82% of GrafTech), **GrafTech**, **Tokai Carbon** and **Resonac** in electrodes. **Vesuvius (Foseco), Calderys, Krosaki, Shinagawa and Chinese suppliers** in refractories.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The test here is simple: when input costs rise 10%, how quickly does the selling price follow? Q1 FY27 was that test: needle coke, magnesite, LPG, freight and energy all rose with the West Asia war.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Cyclical: HEG',
                    text: "Filed margins over five years ran from 12% (FY25) to 25% (FY23). Q1 FY27 standalone EBITDA was 29% (company measure), helped by cheaper needle coke still in stock and better prices. Management says it can hold margins because it is booked to September and will raise prices on later orders; two rivals have announced increases of $600–1,200 and $930 a tonne. **This margin is real but moves with the cycle**: the squeeze, if any, arrives around November–January, when costlier coke reaches production.",
                },
                {
                    label: 'Structural at a modest level: RHI Magnesita',
                    text: "The margin fell from 19% in FY22 to 11% in FY26 as the lower-margin Dalmia business was added and competition rose. Q1's 14.5% adjusted margin came from flow-control products (35% of revenue, where price rises stick) and a 'war surcharge'. **Management still guides 13%**, calling anything above it upside. I expect 12–14% to hold, because service contracts and flow control are steady, but not to rise much while magnesite keeps climbing.",
                },
                {
                    label: 'Not structural: IFGL',
                    text: "The group margin fell from 11% to 7% over five years. In Q1 the standalone gross margin dropped from 47% to 43% and EBITDA fell 17%, because LPG and raw materials rose faster than prices. **Management calls its price increases temporary and says they add no margin.** A double-digit group margin depends on the UK and German subsidiaries breaking even, which has not happened yet.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**HEG** tied up ₹1,087cr in working capital over FY22–FY26: ₹569cr in stock and ₹518cr in other items. Its stock swings between about 380 and 575 days, because each batch of electrodes takes months to make and it holds months of needle coke. **RHI Magnesita** tied up ₹602cr, mostly stock (₹308cr) and other items, and now pays suppliers in 101 days instead of 161.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**RHI Magnesita** deliberately built stock in Q1 ahead of second-half project orders, so operating cash was ₹81cr on ₹147cr of operating profit. **IFGL**'s stock rose to 179 days in FY25 before easing to 152, and it tied up ₹387cr over five years, split between customer bills (₹249cr) and stock (₹231cr).",
                },
                {
                    label: 'Working capital: improving',
                    text: "**RHI Magnesita**'s customers now pay in 64 days, down from 89–101 before FY24, and its cash conversion rose to 77% in FY25 and 92% in FY26. **HEG**'s stock fell from 507 to 389 days in FY26 and its customers pay in 71 days, down from 98.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "An electrode maker will always hold a year or more of stock, so **HEG**'s cash cycle of 320–480 days is structural; judge it by whether it rises in a downturn. Refractory makers hold 150–180 days of stock because they carry thousands of shapes and grades. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: the shift to electric arc furnaces',
                    text: "Europe and the US are building arc furnaces, not blast furnaces, and Europe's carbon border tax speeds that up; the OECD expects about 71 Mt of new arc-furnace capacity in 2026–2028. Each tonne of arc-furnace steel uses electrodes, so this is the main long-term driver for **HEG**. It is slow and steady, but the price cycle can swamp it in any given year. HEG is adding 15,000 tonnes (to 115,000) by early 2028, the only new capacity announced outside China.",
                },
                {
                    label: 'Growth driver: India’s steel build-out',
                    text: "India's steel output is growing 7–9% a year and steelmakers are spending ₹50,000–60,000cr this year on new capacity (RHI Magnesita's estimate). New plants need a first fill of refractories, and every tonne of steel consumes them. **RHI Magnesita** guides volume growth of steel plus 1–2 points (7–8% this year), and **IFGL** targets double-digit domestic growth. This driver should last as long as India keeps adding steel capacity, well into the 2030s.",
                },
                {
                    label: 'Growth driver: selling services, not bricks',
                    text: "**RHI Magnesita**'s 4PRO contracts (running robots, scans and linings inside customers' plants) and flow-control products are growing faster than its bricks and earn steadier margins. **IFGL** is adding magnesia-carbon bricks and casting flux, which it says could add ₹150–200cr of revenue at peak. These lift margins more than sales.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**HEG**'s Q1 margin was far above the 17–18% it had warned of, and it kept utilisation at 90–95%. **RHI Magnesita**'s Q1 adjusted margin (14.5%) beat its 13% guide.",
                },
                {
                    label: 'Cautious',
                    text: "**RHI Magnesita** says 9% volume growth this year would be 'a stretch' and keeps its 13% margin guide despite beating it. **HEG** gives no price guidance beyond saying it will raise prices on later orders.",
                },
                {
                    label: 'Missed',
                    text: "**IFGL**'s margins fell again, its European subsidiaries still lose money, and its Chinese joint venture in Gujarat is on hold awaiting government approval.",
                },
                {
                    label: 'My outlook',
                    text: "India's steel output should keep growing 7–9% a year, which carries refractory volumes. Electrode demand depends on arc-furnace additions outside China, which are real but slow. **The key variables are HEG's electrode price and RHI Magnesita's margin, not volume.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['HEG (electrode business)', 'Electrode prices, 15% more capacity, needle-coke costs', '−5% / **8%** / 15%'],
                        ['RHI Magnesita', 'Steel volumes, flow-control mix, captive mining savings', '10% / **14%** / 18%'],
                        ['IFGL Refractories', 'Recovery from a depressed base if Europe breaks even', '5% / **15%** / 30%'],
                    ],
                    note: 'My own judgement, not company guidance. RHI Magnesita’s estimate is from normalised (pre-write-off) earnings. The growth each price needs is in the live valuation table in section 8.',
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
                    label: 'The steel cycle and Chinese exports',
                    text: "China still exported about 55 Mt of steel in the first half of 2026, holding down global prices and utilisation. Lower utilisation outside China would hit **HEG**'s electrode prices first. **HEG would not say where its Middle East volumes went** after the war or give price-increase figures.",
                },
                {
                    label: 'Input costs',
                    text: "Needle coke is up $200–300 a tonne, magnesite 6–8%, and LPG and freight spiked in Q1. **HEG** explained that costlier coke reaches production around November–January. **RHI Magnesita would not split its growth into price and mix** or quantify its mining savings. **IFGL** described its price increases as temporary and margin-neutral.",
                },
                {
                    label: 'Trade actions',
                    text: "US duty decisions on Indian electrodes are expected around September. **HEG** says the US is under 10% of sales and it would keep supplying there even if it lost some share.",
                },
                {
                    label: 'Corporate actions and disclosure',
                    text: "**HEG**'s demerger moves the battery-anode plant, which will carry about ₹1,500cr of debt by March 2027, into HEG Greentech; the GrafTech stake stays with HEG and swings its reported profit every quarter. **RHI Magnesita**'s auditor resigned mid-year to align with the group's auditor. **IFGL would not give its UK subsidiary Monocon's loss.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or one-off items are the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 13x, 16% at 25x, 19% at 33x and 22% at 42x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**HEG is even cheaper on EV/EBITDA than on P/E** once its treasury is counted and the one-off GrafTech loss is removed from operating profit (both adjustments are in the live table). Its P/E also includes treasury income and its share of Bhilwara Energy's profit. **RHI Magnesita's P/E is inflated by the goodwill write-off**; on EV/EBITDA it looks much less expensive, though still not cheap for a business earning 6–11% on capital. **IFGL** also looks cheaper on EV/EBITDA, because depreciation and European losses sit between operating profit and earnings.",
                },
                {
                    label: 'Cheap',
                    text: "**HEG**: the price asks for about the growth I expect from a cyclical business, and it trades below book value. The demerger will split the price between two companies, so value the electrode business on its own cash flows.",
                },
                {
                    label: 'Full',
                    text: "**IFGL**: the price needs somewhat more growth than I expect, from a business whose returns have fallen five years running.",
                },
                {
                    label: 'Stretched',
                    text: "**RHI Magnesita**: the best refractory business, but its price needs clearly more than my ~14% estimate even allowing for the write-off. I would buy it after a fall of a fifth or more, or on proof of margins above 14%.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'HEG', rank: 1, stance: 'CYCLICAL', segment: ELECTRODE,
            what: "Graphite electrodes for electric arc furnaces from the world's largest single-site plant (100,000 tonnes), exported to about 35 countries. Its battery-anode, hydro-power and storage businesses are being demerged into HEG Greentech.",
            view: "**The strongest position in this sector: scale in an industry with five real producers outside China.** It ran above 90% utilisation while Western capacity reportedly runs at 60–65%, earned a 29% standalone margin in Q1, and holds more treasury cash than debt. The price needs only about the ~8% growth I expect and sits below book value. It is a cycle, not a compounder: five-year cash conversion is 49% and free cash was negative during the expansion.",
            watch: 'Electrode price increases from October; needle-coke costs from November; US duty decisions; the demerger record date.',
        },
        {
            company: 'RHI Magnesita', rank: 2, stance: 'PRICED', segment: REFRAC,
            what: "India's largest refractory maker (30%+ share), the Indian arm of Austria's RHI Magnesita group, serving steel, cement, non-ferrous and glass plants.",
            view: "**The best refractory business, at a price that assumes the improvement has already happened.** Flow control (35% of revenue) and the 4PRO service contracts are raising switching costs, and a captive quartzite mine is opening. But return on capital has been 6–11% since the Dalmia deal, the margin guide is only 13%, and the price needs clearly more than my ~14% estimate.",
            watch: 'Margins holding above 13% as magnesite rises; mining savings quantified; the H2 coke-oven and glass orders.',
        },
        {
            company: 'IFGL Refractories', rank: 3, stance: 'TURNAROUND', segment: REFRAC,
            what: "Specialist flow-control refractories (nozzles, slide-gate and purging systems) made in India, with subsidiaries in the US, UK, Germany and China.",
            view: "**Good products, no pricing power, and a European drag.** Standalone EBITDA fell 17% in Q1 as costs outran prices; management says its price increases add no margin. Return on capital has fallen from 11% to 5%, and five-year cash conversion is 35%. The US business is strong. The price needs more than my ~15% estimate.",
            watch: 'Monocon UK and Hofmann reaching break-even in FY27; British Steel and Specialty Steel restarting; price increases holding.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Graphite electrodes.** **HEG: own, as a cycle.** Few producers, the lowest cost and the largest plant give it pricing power when steel demand recovers, and the price already allows for a bad cycle. The demerger separates a cash-generating electrode business from a capital-hungry battery-materials venture.",
            "**Refractories.** **RHI Magnesita: follow.** Its strategy is right (flow control, service contracts, captive raw materials) and the write-off removes the goodwill that held down its returns, but a 13% margin guide does not support today's price; buy it on a meaningful fall or proof of margins above 14%. **IFGL: pass.** Good products and a strong US business, but it cannot reprice fast enough and its European subsidiaries lose money.",
            "**What would change my view.** A sharp fall in electrode prices, or US duties above 20%, would hurt HEG. RHI Magnesita holding 14%+ margins with the mining savings would justify more of its price. IFGL's Europe breaking even and its group margin reaching 10% would make it interesting at a lower price.",
            "**What to watch next quarter.** HEG's price increases on October bookings and the demerger timetable; RHI Magnesita's margin as magnesite rises, and the coke-oven order; IFGL's European losses and standalone margin.",
        ],
        bottomLine:
            "Own the scarcity. HEG is one of five electrode makers that matter outside China, and it trades below book. RHI Magnesita is the better-run refractory business but priced for improvements it has not yet delivered. IFGL has good products and too little pricing power.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/RHIM/consolidated/' },
        { label: 'HEG Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=393ba8bf-2ea2-45bb-9257-de3b5890e9e4.pdf' },
        { label: 'HEG Greentech investor presentation (demerger), July 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=88bdd2bc-5c8c-4533-afa7-016ceccb8057.pdf' },
        { label: 'RHI Magnesita India Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=233e5cd6-88dc-4089-b94d-7e4ffd692b01.pdf' },
        { label: 'IFGL Refractories Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=97a9566b-87e6-40ed-86d2-32aaeb01f31c.pdf' },
        { label: 'RHI Magnesita completes acquisition of Dalmia OCL', url: 'https://www.rhimagnesitaindia.com/media/news-events/rhi-magnesita-completes-acquisition-of-dalmia-ocl/1/82' },
        { label: 'Graphite electrode capacity outside China and the leading producers — Zennivesh', url: 'https://zennivesh.substack.com/p/graftech-the-phoenix-of-the-graphite' },
        { label: 'India refractories market size — IMARC Group', url: 'https://www.imarcgroup.com/india-refractories-market' },
        { label: 'Global steel industry battles surplus supply and protectionism — S&P Global', url: 'https://www.spglobal.com/energy/en/news-research/latest-news/metals/011226-global-steel-industry-battles-surplus-supply-protectionism' },
    ],
};
