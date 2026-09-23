import { SectorOverview } from './types';
import { electAndRefracBusinesses } from './elect-and-refrac-businesses';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The ranking, the metric grid and the moat table are grouped by these.
const ELECTRODE = 'Graphite electrodes — a global oligopoly';
const REFRAC = 'Refractories — many suppliers, sticky customers';

export const electAndRefrac: SectorOverview = {
    sector: 'Elect and Refrac',
    title: 'Electrodes and Refractories',
    format: 'ranked',
    businesses: electAndRefracBusinesses,
    moatCompact: true,
    standfirst:
        "Three companies that sell things steelmakers burn up. HEG makes graphite electrodes for electric arc furnaces, in a global industry with only a handful of producers outside China. RHI Magnesita and IFGL make refractories, the heat-resistant linings of furnaces, ladles and casters, in an industry with hundreds of suppliers. That one difference in structure explains most of the gap in their results. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    takeaways: [
        "**Separate the two industries first.** Graphite electrodes have five producers that matter outside China, controlling roughly 80% of capacity. HEG is one of them, with the world's largest single-site plant. Refractories have hundreds of producers, and RHI Magnesita leads India with a 30%+ share. Electrode makers earn 15–25% margins in normal years; Indian refractory makers earn 7–14%.",
        "**Filed profits are distorted this year at two of the three.** RHI Magnesita wrote off the ₹556cr of goodwill left from its Dalmia OCL acquisition in Q4 FY26, a non-cash charge that turned the year into a loss. HEG booked a mark-to-market loss of roughly ₹230cr on its 9.98% stake in US rival GrafTech in the same quarter, inside operating costs. Underneath, both businesses improved in Q1 FY27.",
        "**Cash conversion is weak across the sector.** Over FY22–FY26 RHI Magnesita turned 59% of operating profit into operating cash, HEG 49% and IFGL only 35%. HEG and IFGL generated no free cash over five years after capex. Electrode making ties up stock for months (HEG's cash cycle is 320–480 days), and IFGL keeps absorbing losses in Europe.",
        "**HEG is the cheapest and the best-placed, but it is a cycle.** It ran above 90% utilisation while Western capacity reportedly runs at 60–65%, and its standalone margin was 29% in Q1. At 12.8x and below book value it needs only ~8% growth a year. The risks are electrode prices, needle-coke costs, possible US duties, and a demerger that splits off its battery-materials and hydro businesses.",
        "**RHI Magnesita is the quality refractory business, at a full price.** It guides a 13% margin (Q1 was 14.5% adjusted), holds a 30%+ share, is adding captive quartzite mining, and is moving customers onto long service contracts. But it has earned 6–11% on capital since the Dalmia deal, and at 42.5x on filed earnings (about 31x on Q1's adjusted run rate) it needs 18–22% growth a year.",
        "**IFGL has good products and no pricing power.** Standalone EBITDA fell 17% in Q1 because fuel and raw-material costs rose faster than it could raise prices. Europe is still loss-making, and return on capital has fallen every year from 11% to 5%. At 33x it needs ~19% growth from a business that is still repairing itself.",
    ],

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
            heading: '1. Recommendation and key takeaways',
            body: [
                "Ranked by attractiveness at today's price: how durable the advantage is, whether profit turns into cash, and what the price assumes. What each company does is explained in Tab 2.",
            ],
            embed: 'ranking',
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "Five views of the three companies, grouped by industry. All figures are consolidated filed results (Screener). Hover over a starred name for its caveat. **Two of the five views are distorted by one-off items in Q4 FY26**: HEG's loss on its GrafTech stake sits inside operating costs, and RHI Magnesita's goodwill write-off sits below operating profit, so it does not affect the margin chart.",
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
                    text: "Raw materials (magnesite, alumina, quartzite and zircon for refractories; petroleum needle coke for electrodes) → the manufacturer (bricks, castables, nozzles, electrodes) → installation and management inside the steel plant → consumed and replaced within days to months. **Steel uses about 10–15 kg of refractories per tonne**, and refractories are about 3% of a steelmaker's costs (RHI Magnesita). Cement uses far less (about 0.5% of cost). The small cost share and the high cost of failure make buyers careful, but large steel groups still negotiate hard.",
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
                    text: "Electrode prices swing with global steel utilisation and needle-coke costs, so HEG's margins have ranged from about 12% to over 25% in five years. Refractory volumes follow steel output more steadily. Trade policy matters to both: the US is considering anti-dumping and countervailing duties on Indian electrodes (under 10% of HEG's sales), and Europe's carbon border tax (CBAM) pushes steelmakers towards arc furnaces.",
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
                    label: 'Strongest',
                    text: "**HEG**, because there are so few alternatives. A new electrode plant takes years, needle-coke contracts and decades of process knowledge; HEG says it was itself the last new entrant in the Western world, in 1976.",
                },
                {
                    label: 'Widening',
                    text: "**RHI Magnesita**, as it moves from selling bricks to running customers' refractory operations (robots, scanning, full-line service) and secures its own raw materials. Both raise switching costs.",
                },
                {
                    label: 'Weakest',
                    text: "**IFGL.** Its nozzles and slide-gate systems perform well, but it buys all its minerals and cannot pass on cost spikes quickly.",
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
                "The test for a lasting margin here is simple: when input costs rise 10%, how quickly does the selling price follow? Q1 FY27 was that test: needle coke, magnesite, LPG, freight and energy all rose with the West Asia war.",
            ],
            points: [
                {
                    label: 'HEG: high but cyclical',
                    text: "Filed operating margins over five years ran from 12% (FY25) to 25% (FY23). Q1 FY27 standalone EBITDA was 29% (company measure), helped by old, cheaper needle coke still in stock and better prices. **Management says it can hold margins as needle coke rises, because it is booked up to September and will raise prices for later orders**; two rivals have announced increases of $600–1,200 and $930 a tonne. The squeeze, if any, arrives around November–January, when costlier coke reaches production.",
                },
                {
                    label: 'RHI Magnesita: steady at 11–14%',
                    text: "The margin fell from 19% in FY22 to 11% in FY26 as the lower-margin Dalmia business was added and competition rose. Q1 FY27's 14.5% adjusted margin came from flow-control products (35% of revenue, where price rises stick) and a 'war surcharge'. **Management still guides 13%**, calling anything above it upside. Magnesite rose another 6–8% in the last two months.",
                },
                {
                    label: 'IFGL: low and falling',
                    text: "The consolidated margin fell from 11% to 7% over five years. In Q1 the standalone gross margin dropped from 47% to 43%, and EBITDA fell 17%, because LPG and raw materials rose faster than prices. **Management calls its price increases temporary and says they add no margin.** Its goal is a double-digit consolidated margin once the UK and German subsidiaries break even.",
                },
                {
                    label: 'A margin only counts if it turns into cash',
                    text: "Five-year conversion of operating profit into operating cash: **RHI Magnesita 59%, HEG 49%, IFGL 35%.** RHI Magnesita has improved steadily (77% in FY25, 92% in FY26). HEG swings with stock levels. IFGL has not produced free cash in five years.",
                },
            ],
            tables: [
                {
                    caption: 'Operating profit (EBITDA) versus operating cash, FY22–FY26 (₹cr, consolidated)',
                    columns: ['Company', 'Operating profit, 5 yrs', 'Operating cash, 5 yrs', 'Cash ÷ profit', 'Free cash after capex, 5 yrs', 'Net profit, 5 yrs', 'FY26: profit → cash'],
                    rows: [
                        ['RHI Magnesita', '2,231', '1,318', '**59%**', '881', '−477 (after write-offs)', '443 → 409'],
                        ['HEG', '2,190', '1,077', '**49%**', '−552', '1,731', '399 → 213'],
                        ['IFGL Refractories', '718', '253', '**35%**', '−217', '316', '137 → 63'],
                    ],
                    note: 'Filed annual accounts (Screener). Free cash is operating cash minus capex. HEG’s negative free cash reflects its expansion from 80,000 to 100,000 tonnes and spending on the anode plant (moving to HEG Greentech). RHI Magnesita’s five-year net loss comes from write-offs of acquisition goodwill, not from operations. HEG’s net profit includes other income from its treasury and its share of Bhilwara Energy’s profits.',
                },
                {
                    caption: 'Q1 FY27 cash and balance sheet, as stated by the companies',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['HEG', 'Treasury of about ₹858cr; no long-term debt. HEG Greentech will carry about ₹1,500cr of gross debt by March 2027 for the anode plant', 'Debt-free (electrode business)'],
                        ['RHI Magnesita', 'Operating cash ₹81cr on ₹147cr EBITDA; stock built deliberately ahead of H2 orders', 'Net cash ₹140cr; cash and equivalents ₹452cr'],
                        ['IFGL Refractories', 'Staff costs about 10% of standalone revenue; Chinese JV land already paid for', 'Net debt ₹74cr (March 2026)'],
                    ],
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "What each company says it will deliver and spend, then my own estimate of earnings growth over the next three to five years.",
            ],
            points: [
                {
                    label: 'HEG: volume capped, price decides',
                    text: "The plant runs at 90–95% (94,000–95,000 tonnes is the practical peak). Growth comes from the 15,000-tonne expansion by early 2028 and from electrode prices. The battery-anode plant (20,000 tonnes, ₹2,200cr, production from Q1 FY28) and the hydro and storage businesses move to HEG Greentech. Management targets ₹600–700cr of anode revenue in year one, rising to ₹1,500–1,600cr in year three at about 35% EBITDA.",
                },
                {
                    label: 'RHI Magnesita: steel growth plus a little',
                    text: "It guides volume growth equal to steel and cement growth plus 1–2 points (7–8% this year; 9% is 'a stretch') and a 13% margin. Capex is modest (₹80–100cr a year). Coke-oven and glass project orders arrive in H2, and the coke-oven order books the plant for 14–16 months. Indian steel capex is ₹50,000–60,000cr this year by management's estimate.",
                },
                {
                    label: 'IFGL: repair before growth',
                    text: "It targets double-digit domestic growth and a double-digit consolidated margin, plus ₹150–200cr of peak revenue from two new product lines (magnesia-carbon bricks and casting flux). The Chinese joint venture in Gujarat is on hold awaiting Indian government approval.",
                },
                {
                    label: 'My outlook',
                    text: "India's steel output should keep growing 7–9% a year, which carries refractory volumes. Electrode demand depends on arc-furnace additions outside China, which are real but slow. **The key variables are HEG's electrode price and RHI Magnesita's margin, not volume.**",
                },
            ],
            tables: [
                {
                    caption: 'Guidance, capex and track record',
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['HEG', 'Utilisation 90–95%; hold ~28–29% margins', '15,000 t expansion by early 2028; anode plant moves to Greentech', '**Beat**: Q1 margin far above the 17–18% it warned of'],
                        ['RHI Magnesita', 'Volume = market + 1–2 pts; EBITDA margin 13%', '₹80–100cr a year; Minpro JV ₹35cr', '**Delivered**: margin above guidance in Q1'],
                        ['IFGL Refractories', 'Double-digit domestic growth; double-digit consolidated margin', 'Modest; Gujarat JV on hold', '**Missed**: margins down, Europe still loss-making'],
                    ],
                },
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high', 'Price needs'],
                    rows: [
                        ['HEG (electrode business)', 'Electrode prices, 15% more capacity, needle-coke costs', '−5% / **8%** / 15%', '~8%'],
                        ['RHI Magnesita', 'Steel volumes, flow-control mix, captive mining savings', '10% / **14%** / 18%', '18–22%'],
                        ['IFGL Refractories', 'Recovery from a depressed base if Europe breaks even', '5% / **15%** / 30%', '~19%'],
                    ],
                    note: 'My own judgement, not company guidance. RHI Magnesita’s estimate is from normalised (pre-write-off) earnings. Required growth uses the rule in section 8.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "Sector-wide risks first, then each company. The table records which risks management addressed on the call and which it avoided or left open.",
            ],
            points: [
                {
                    label: 'Steel cycle and Chinese exports',
                    text: "China still exported about 55 Mt of steel in the first half of 2026, holding down global prices and utilisation. Trade barriers are protecting steelmakers for now, but lower utilisation outside China would hit electrode prices first.",
                },
                {
                    label: 'Input costs',
                    text: "Needle coke is up $200–300 a tonne; magnesite is up 6–8%; LPG and freight spiked in Q1. Whoever cannot reprice quickly loses margin.",
                },
                {
                    label: 'Trade actions',
                    text: "US anti-dumping and countervailing duty decisions on Indian electrodes are expected around September. HEG says the US is under 10% of sales and it would keep supplying there, even if it lost some share.",
                },
            ],
            tables: [
                {
                    caption: 'Company-specific risks and how management handled them',
                    columns: ['Company', 'Key risk', 'Addressed on the call', 'Avoided or unresolved'],
                    rows: [
                        ['HEG', 'Electrode prices; needle coke; demerger complexity; GrafTech stake swings', 'Cost timing explained; US exposure quantified; Greentech debt (~₹1,500cr) disclosed', '**Would not say where Middle East volumes went or give price-increase figures**'],
                        ['RHI Magnesita', 'Competition and pricing; raw materials; returns on acquired capital', 'Goodwill write-off explained (non-cash); 13% guide held', '**Would not split price vs mix or quantify mining savings**; auditor resigned mid-year to align with the group'],
                        ['IFGL Refractories', 'Cost pass-through; European losses; stalled Chinese JV', 'JV status disclosed honestly; Europe break-even plan', '**Would not give Monocon’s loss**; price rises described as temporary'],
                    ],
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 13x, 16% at 25x, 19% at 33x and 22% at 42x.** The chart shows return on capital against the P/E.",
            ],
            embed: 'scatter',
            embedFirst: true,
            points: [
                {
                    label: 'Cheap',
                    text: "**HEG** (12.8x, below book value; needs ~8%). The P/E includes treasury income and the Bhilwara Energy share, and the demerger will split the price between the two companies, so value the electrode business on its own cash flows.",
                },
                {
                    label: 'Stretched',
                    text: "**RHI Magnesita** (42.5x on filed earnings; about 31x on Q1's adjusted earnings annualised; needs 18–22% against my ~14%). **IFGL** (32.8x; needs ~19% from a business whose returns have fallen five years running).",
                },
            ],
            tables: [
                {
                    caption: 'What the price assumes',
                    columns: ['Company', 'P/E', 'Return on capital (5-yr range)', 'Growth the price needs', 'My estimate', 'Verdict'],
                    rows: [
                        ['HEG', '12.8', '4–15%', '~8%', '~8%', '**Cheap for a cyclical**'],
                        ['RHI Magnesita', '42.5 (≈31 adjusted)', '6–37%', '18–22%', '~14%', '**Stretched**'],
                        ['IFGL Refractories', '32.8', '5–11%', '~19%', '~15%', '**Stretched**'],
                    ],
                    note: 'P/E from Screener on 23 September 2026. RHI Magnesita’s adjusted figure is my calculation: Q1 FY27 adjusted EPS of ₹3.1 × 4 against a ₹385 share price.',
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'HEG', rank: 1, stance: 'CYCLICAL', segment: ELECTRODE,
            what: "Graphite electrodes for electric arc furnaces from the world's largest single-site plant (100,000 tonnes), exported to about 35 countries. Its battery-anode, hydro-power and storage businesses are being demerged into HEG Greentech.",
            view: "**The strongest position in this sector: scale in an industry with five real producers outside China.** It ran above 90% utilisation while Western capacity reportedly runs at 60–65%, earned a 29% standalone margin in Q1, and is debt-free with an ₹858cr treasury. At 12.8x and below book it needs only ~8% growth. It is a cycle, not a compounder: five-year cash conversion is 49% and free cash was negative during the expansion.",
            watch: 'Electrode price increases from October; needle-coke costs from November; US duty decisions; the demerger record date.',
        },
        {
            company: 'RHI Magnesita', rank: 2, stance: 'PRICED', segment: REFRAC,
            what: "India's largest refractory maker (30%+ share), the Indian arm of Austria's RHI Magnesita group, serving steel, cement, non-ferrous and glass plants.",
            view: "**The best refractory business, at a price that assumes the improvement has already happened.** Flow control (35% of revenue) and the 4PRO service contracts are raising switching costs, and a captive quartzite mine is opening. But return on capital has been 6–11% since the Dalmia deal, the margin guide is only 13%, and at 42.5x (about 31x adjusted) it needs 18–22% growth against my ~14%.",
            watch: 'Margins holding above 13% as magnesite rises; mining savings quantified; the H2 coke-oven and glass orders.',
        },
        {
            company: 'IFGL Refractories', rank: 3, stance: 'TURNAROUND', segment: REFRAC,
            what: "Specialist flow-control refractories (nozzles, slide-gate and purging systems) made in India, with subsidiaries in the US, UK, Germany and China.",
            view: "**Good products, no pricing power, and a European drag.** Standalone EBITDA fell 17% in Q1 as costs outran prices; management says its price increases add no margin. Return on capital has fallen from 11% to 5%, and five-year cash conversion is 35%. The US business is strong. At 32.8x it needs ~19% growth.",
            watch: 'Monocon UK and Hofmann reaching break-even in FY27; British Steel and Specialty Steel restarting; price increases holding.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**HEG is the one to own, as a cycle.** Few producers, the lowest cost and the largest plant give it pricing power when steel demand recovers. At 12.8x and below book the price already allows for a bad cycle. The demerger separates a cash-generating electrode business from a capital-hungry battery-materials venture, which makes the electrode business easier to value.",
            "**RHI Magnesita is the better long-term business, at the wrong price.** Its strategy is right (flow control, service contracts, captive raw materials), and the write-off removes the Dalmia goodwill that held down its returns. But a 13% margin guide does not support 42x filed earnings. I would buy it closer to 25–30x adjusted earnings.",
            "**IFGL Refractories needs Europe fixed before it is investable.** Its products are good and the US business is strong, but it cannot reprice fast enough and its European subsidiaries lose money.",
            "**What would change my view.** A sharp fall in electrode prices, or US duties above 20%, would hurt HEG. RHI Magnesita holding 14%+ margins with the mining savings would justify more of its price. IFGL's Europe breaking even and its consolidated margin reaching 10% would make it interesting at a lower price.",
            "**What to watch next quarter.** HEG: price increases on October bookings and the demerger timetable. RHI Magnesita: margin as magnesite rises, and the coke-oven order. IFGL: Europe's losses and the standalone margin.",
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
