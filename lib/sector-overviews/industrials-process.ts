import { SectorOverview } from './types';
import { industrialsProcessBusinesses } from './industrials-process-businesses';
import { industrialsProcessValuationInputs } from './card-data/industrials-process';

// Industrials · Chemical and pharma process equipment. Built on 29 Sep 2026 from the Industrial Manufacturing and
// Industrial Products notes (Q1 FY27, written Sep 2026), when the former process-plant group was split in two:
// each company's verdict, profile, charts, valuation inputs and table rows are carried over unchanged; the group
// analysis and the ranking are new.

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const GLASS = 'Glass-lined and pharma equipment';
const PLANT = 'Equipment and plants for chemicals, fertiliser, fuels and gases';

export const industrialsProcess: SectorOverview = {
    sector: 'Industrials',
    title: 'Chemical and pharma process equipment',
    format: 'ranked',
    businesses: industrialsProcessBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialsProcessValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Inox India': 22,
            'GMM Pfaudler': 22,
            'The Anup Enginee': 18,
            'Kilburn Engg.': 15,
            'Praj Industries': 10,
            'HLE Glascoat': 10,
            'Standard Glass': 15,
        },
    },
    standfirst:
        "Seven companies that design and build process equipment and whole plants for chemical, pharma, fertiliser, fuel and gas producers: glass-lined reactors, filters and dryers (GMM Pfaudler, HLE Glascoat, Standard Glass), industrial dryers and nuclear process equipment (Kilburn), heat exchangers and pressure vessels built to a licensor's code (Anup), ethanol and biogas plants (Praj) and cryogenic tanks (Inox India). **Their demand is their customers' capital spending, and in FY27 that is split: pharma is building, specialty chemicals are cutting, domestic ethanol plants have stopped, and industrial gas, LNG and space are growing.** This is one of the groups on the Industrials page. Q1 FY27 was weak for most of the seven, fixed-price contracts absorbed the steel and freight spike after the West Asia war, and Anup, Kilburn and Standard Glass all need a heavy second half. **None of the seven is a clear buy at today's prices; Inox India and GMM Pfaudler are worth following, and Anup waits until its profit arrives as cash.**",
    lastUpdated: '2026-09-29',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Consolidated.',
            note: 'Operating margin excludes other income. Project businesses (Anup, Kilburn, Praj) swing with which orders are delivered in a quarter.',
            values: {
                'Inox India': [22, 22, 22, 21, 20],
                'GMM Pfaudler': [13, 14, 12, 8, 10],
                'The Anup Enginee': [23, 22, 21, 18, 8],
                'Kilburn Engg.': [26, 26, 23, 20, 18],
                'Praj Industries': [5, 7, 5, 3, 4],
                'HLE Glascoat': [13, 11, 6, 11, 7],
                'Standard Glass': [17, 16, 15, 14, 16],
            },
            cellNotes: {
                'The Anup Enginee': 'Q1 FY27: it refused low-priced orders last year, so revenue and margin dipped before a record order book is delivered; fixed-price contracts also absorbed steel inflation.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            values: {
                'Inox India': [15, 17, 28, 25, 9],
                'GMM Pfaudler': [1, 12, 10, 17, 16],
                'The Anup Enginee': [20, 20, 20, -6, -29],
                'Kilburn Engg.': [52, 48, 45, 49, -9],
                'Praj Industries': [-8, 3, -1, -2, 12],
                'HLE Glascoat': [25, 49, 41, 17, 6],
                'Standard Glass': [22, 11, 37, 37, 43],
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed. Kilburn has only three years of consolidated figures.',
            values: {
                'Inox India': [35, 37, 43, 38, 33],
                'GMM Pfaudler': [13, 22, 19, 13, 14],
                'The Anup Enginee': [17, 17, null, null, 21],
                'Kilburn Engg.': [null, null, null, 22, 23],
                'Praj Industries': [23, 31, 29, 18, 6],
                'HLE Glascoat': [30, 24, 13, 13, 12],
                'Standard Glass': [null, 43, 24, 16, 15],
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
            note: 'Project suppliers carry long cycles by nature; the warning is a cycle rising while growth slows (Kilburn).',
            values: {
                'Inox India': [342, 350, 280, 295, 238],
                'GMM Pfaudler': [151, 117, 105, 85, 92],
                'The Anup Enginee': [280, 232, null, 195, 199],
                'Kilburn Engg.': [null, null, 58, 59, 107],
                'Praj Industries': [60, 54, 16, 12, -8],
                'HLE Glascoat': [240, 226, 257, 277, 193],
                'Standard Glass': [326, 154, 260, 309, 335],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides all filed years of operating cash by operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Blank where operating profit was negative, tiny or not comparable.',
            values: {
                'Inox India': [58, 86, 48, 43, 34, 51],
                'GMM Pfaudler': [83, 43, 60, 105, 97, 75],
                'The Anup Enginee': [104, 36, null, -4, 1, 20],
                'Kilburn Engg.': [null, null, 34, -10, -12, -1],
                'Praj Industries': [97, 53, 53, 14, 129, 59],
                'HLE Glascoat': [1, 4, 83, 99, 113, 62],
                'Standard Glass': [-18, 2, -68, 5, 38, -4],
            },
            cellNotes: {
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
            note: 'Acquisitions are not included.',
            values: {
                'Inox India': [6.8, 13.5, 2.1, -0.2, 0.7, 3.7],
                'GMM Pfaudler': [4.1, 3.7, 6.4, 9.8, 8.8, 6.7],
                'The Anup Enginee': [4.7, 11.1, -10.9, -7.1, -6.2, -4.1],
                'Kilburn Engg.': [null, null, 3.2, -10.7, -5.4, -5.0],
                'Praj Industries': [7.2, 3.6, 3.2, -1.4, 4.9, 3.3],
                'HLE Glascoat': [-10.4, -4.6, 4.1, 6.6, 7.8, 2.1],
                'Standard Glass': [-5.0, -5.4, -18.2, -3.7, -2.2, -6.7],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Praj and Inox.',
            note: 'Below zero means more cash than debt.',
            values: {
                'Inox India': [-1.6, -1.5, -1.0, -0.9, -0.7],
                'GMM Pfaudler': [1.1, 1.4, 1.2, 1.1, 0.9],
                'The Anup Enginee': [-0.3, -0.7, 0.0, 0.1, 0.5],
                'Kilburn Engg.': [null, null, 0.7, 0.6, 0.2],
                'Praj Industries': [-3.1, -2.1, -1.5, -1.3, -2.9],
                'HLE Glascoat': [1.6, 1.7, 3.0, 2.4, 2.0],
                'Standard Glass': [1.8, 0.9, 0.8, -0.5, -0.3],
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
            note: 'Anup built capacity ahead of demand; returns rise as its new plant fills.',
            values: {
                'Inox India': [5.6, 4.9, 8.6, 9.6, 6.7, 7.3],
                'GMM Pfaudler': [5.2, 2.2, 1.9, 2.0, 2.2, 2.6],
                'The Anup Enginee': [14.3, 14.6, 18.2, 6.1, 6.4, 10.1],
                'Kilburn Engg.': [null, null, 4.7, 8.3, 2.6, 4.8],
                'Praj Industries': [0.8, 1.0, 2.5, 2.7, 1.4, 1.7],
                'HLE Glascoat': [10.6, 5.2, 5.7, 6.4, 4.1, 6.0],
                'Standard Glass': [2.1, 5.8, 6.2, 4.6, 8.0, 5.9],
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
            note: 'Higher means more sales from each rupee of plant.',
            values: {
                'Inox India': [5.8, 5.9, 4.4, 3.6, 3.7],
                'GMM Pfaudler': [2.5, 2.6, 2.8, 2.7, 2.4],
                'The Anup Enginee': [1.3, 1.4, 1.9, 2.0, 2.1],
                'Kilburn Engg.': [null, null, 2.1, 1.5, 2.2],
                'Praj Industries': [8.2, 11.1, 7.3, 5.7, 5.7],
                'HLE Glascoat': [2.7, 2.9, 1.8, 1.7, 2.2],
                'Standard Glass': [4.6, 6.6, 5.7, 4.5, 4.2],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'qual', label: 'Qualification', description: 'Codes, stamps, vendor codes, licensor, nuclear or naval approvals that take years.' },
            { key: 'tech', label: 'Owns the technology', description: 'Owns the design, recipe or process rather than licensing it or building to print.' },
            { key: 'after', label: 'Aftermarket and repeat', description: 'Wear parts, spares, service or recurring volumes from customers’ own production.' },
            { key: 'pass', label: 'Cost pass-through', description: 'A = passes cost rises on quickly; D = fixed-price contracts that absorb them.' },
            { key: 'price', label: 'Pricing power', description: 'A = raised prices this year without losing customers; D = prices falling.' },
        ],
        rows: [
            { company: 'Inox India', trend: 'widening', trendNote: 'Space, semiconductor and LNG orders; a new port plant from January.',
                grades: { after: { grade: 'B', note: 'Tanks last decades; customers return' }, qual: { grade: 'A', note: 'One of two suppliers worldwide of the largest tanks' }, price: { grade: 'B', note: 'Global gas and space customers' }, pass: { grade: 'A', note: 'Raw-material formula with a ±3% band' }, tech: { grade: 'A', note: 'Own cryogenic engineering' } } },
            { company: 'GMM Pfaudler', trend: 'stable', trendNote: 'Record order book on pharma; chemicals and Europe weak.',
                grades: { qual: { grade: 'B', note: 'Global brand in glass-lined equipment' }, tech: { grade: 'A', note: 'Owns Pfaudler glass formulations' }, after: { grade: 'B', note: 'Services, mixing and filtration' }, pass: { grade: 'B', note: 'Standard reactors face price pressure' }, price: { grade: 'B', note: 'About half the Indian market' } } },
            { company: 'The Anup Enginee', trend: 'stable', trendNote: 'Record ₹985cr book taken “close to historic margins”, CARE notes aggressive pricing to win orders.',
                grades: { qual: { grade: 'A', note: 'ASME U, U2, S stamps; nuclear' }, tech: { grade: 'C', note: 'Builds to licensor designs' }, after: { grade: 'C', note: 'Services targeted at ₹200cr' }, pass: { grade: 'D', note: 'All contracts fixed price' }, price: { grade: 'B', note: 'Refused low-priced orders' } } },
            { company: 'Kilburn Engg.', trend: 'stable', trendNote: 'Nuclear-qualified and a first global fertiliser order, but order intake is well behind plan.',
                grades: { qual: { grade: 'A', note: 'NPCIL and Heavy Water Board vendor' }, tech: { grade: 'B', note: 'Drying technology' }, after: { grade: 'C', note: 'Project-based' }, pass: { grade: 'B', note: 'Fixed price; books 80% of steel within 72 hours' }, price: { grade: 'B', note: 'Lloyds Engineering a main nuclear rival' } } },
            { company: 'Praj Industries', trend: 'narrowing', trendNote: 'Ethanol plant orders stopped at 20% blending.',
                grades: { qual: { grade: 'B', note: 'Proven ethanol plants' }, tech: { grade: 'A', note: 'Owns and licenses its processes' }, after: { grade: 'C', note: 'Some services' }, pass: { grade: 'C', note: 'Fixed-price projects' }, price: { grade: 'C', note: 'Margin 3–7%' } } },
            { company: 'HLE Glascoat', trend: 'narrowing', trendNote: 'Indian glass-lined prices collapsed; Omeras loss-making.',
                grades: { qual: { grade: 'B', note: 'Pharma approvals' }, tech: { grade: 'B', note: 'Thaletec German technology' }, after: { grade: 'C', note: 'Filtration and drying growing' }, pass: { grade: 'C', note: 'Could not pass costs' }, price: { grade: 'D', note: 'Price per unit falling' } } },
            { company: 'Standard Glass', trend: 'stable', trendNote: 'Growth real, but the story changes each quarter.',
                grades: { qual: { grade: 'C', note: 'Third player in glass-lined' }, tech: { grade: 'C', note: 'Stake in GL Hakko with no technology transfer' }, after: { grade: 'C', note: 'Project-based' }, pass: { grade: 'C', note: 'Fixed price' }, price: { grade: 'C', note: 'Leader sets price' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Nothing in this group is a clear buy at today's prices; Inox India is the one I would follow most closely, with GMM Pfaudler close behind; Anup Engineering moves to wait.** **Inox** has the deepest technology in the group: 70–75% of Indian cryogenic tanks, a record ₹1,686cr order book, more than ₹1,000cr of orders from a US space company, price formulas that move with raw materials and ₹239cr of net cash. But Q1 grew only 8% against 18–20% guidance, operating cash has sat near ₹120cr for three years, and the price needs about {need:Inox India|30}% a year against my ~22%, which is {Label:Inox India|Stretched}. **GMM Pfaudler** (half the world's big glass-lined vessels, a ₹2,289cr backlog and about ₹310–370cr of free cash a year) is a real franchise whose profit leaks to interest and a 49% tax rate; its margin fell again just before its group CFO resigned, and the price needs about {need:GMM Pfaudler|24}% a year against my ~22%. **Anup Engineering** carries a record ₹985cr order book, which it says was taken close to its historic margins (CARE sees aggressive pricing in its market), but guided its FY27 margin down to about 15% from 21%, **below the 18% at which CARE says it may downgrade**, and its operating cash was about nil in FY25 and FY26; it needs about {need:The Anup Enginee|21}% a year against my ~18%, which is {Label:The Anup Enginee|Full}. Its profit is not arriving as cash: ₹152cr of operating cash against ₹395cr of profit over the five years Screener shows (FY21–FY26, FY24 not shown; 38%), and ₹2cr on ₹110cr in FY26. **Anup moves from follow to wait, and returns to follow when operating cash converts most of its profit and the second half shows the margin back.**",
                "**Wait on two more, pass on one and avoid one.** **Kilburn** cut its FY27 revenue guide within one quarter, had won only ₹190cr of orders by mid-August against ₹450–500cr promised by September, has had two years of negative operating cash, and two subsidiaries carry audit remarks, so I cut my estimate from 20% to 15%; orders, cash and clean audits must arrive first. **Praj** owns its ethanol technology, but its home market waits for a blending decision beyond 20%, its margin is about 4%, and its Mangalore yard has ₹183cr of losses funded by ₹291cr of parent loans. **Pass on HLE Glascoat**, which missed its margin promise and pushed it out two years while Indian glass-lined prices kept falling, owes ₹348cr against ₹34cr of cash (about ₹314cr net at March; Screener shows ₹290cr), and whose auditor flagged payments to and loans from key managers. **Avoid Standard Glass**, which has changed its story three times in a year, contradicted itself on working capital, has had negative free cash every year, is putting most of its net worth into two deals and is buying more from promoter-family firms.",
                "**Three things to hold onto before reading the rest.** First, **this group sells into its customers' capital budgets, and those budgets are moving in different directions**: pharma plants are being built, specialty-chemical capex is being cut, domestic ethanol plants have stopped at E20, and gas, LNG and space are growing. Second, **owning the design earns a premium only while the product is scarce**: Inox's largest tanks still are, standard glass-lined reactors no longer are, and Anup's code stamps protect its place in the queue but not its price. Third, **check the cash and judge FY27 by the second half**: three of the seven (Anup, Kilburn and Standard Glass) burned cash over the five years shown, and the same three need their best-ever second halves to meet guidance, while Inox must catch up ₹32–35cr of shipments delayed by freight in Q1.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Companies are grouped into two kinds of business: glass-lined and pharma equipment, and equipment and plants for chemicals, fertiliser, fuels and gases. All figures are filed (Screener) and consolidated. Kilburn has only three years of consolidated figures, because the group took its present shape through recent acquisitions. None of these companies' order books are shown as a tab because they are stated on different bases. **Start with cash conversion**: project suppliers report profits long before they are paid. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These seven companies build process equipment and plants for chemical, pharma, fertiliser, fuel and gas producers, so their demand is those industries' capital spending, and their revenue arrives only as orders are engineered, built and shipped. Across India that spending is still rising, but narrowly. The RBI's September 2026 bulletin puts bank-funded private project spending at ₹3.2 lakh cr in FY27, up from ₹2.6 lakh cr, but ICRA counted manufacturing project announcements at a seven-quarter low of ₹1.5 trillion in Q4 FY26. For capital goods as a whole, Crisil expects revenue to grow 12–14% in FY27 at a 12–13% margin. The customers that matter here are moving apart: pharma is spending, specialty chemicals are cutting, ethanol capacity is about twice what E20 needs, and Inox's gas, LNG and space customers are mostly abroad. **My view: this is strong but maturing for pharma equipment, soft for chemical plants, a trough for domestic ethanol plants and mid-cycle for refinery and fertiliser equipment, while space, LNG and big-science work gives Inox a pool of its own. For the group I expect about 12–15% revenue growth a year to FY29, with margins recovering 2–4 points from FY27's lows if steel and freight settle; no agency forecasts this far out.**",
            ],
            points: [
                {
                    label: 'Two kinds of business, and where the profit sits',
                    text: "**Glass-lined and pharma equipment** (GMM, HLE, Standard Glass) sells corrosion-proof reactors, filters and dryers to drug and chemical makers. The top three hold about 75% of the Indian market and GMM alone over half, but the standard reactor has commoditised: HLE ships 30–40% more glass-lined units than four years ago for the same revenue, and GMM admits “continued pricing pressure”. The growth has moved to filtration, drying and systems (HLE's filtration and drying grew 51% in FY26). **Equipment and plants for chemicals, fertiliser, fuels and gases** (Inox, Anup, Kilburn, Praj) are built to order, mostly at fixed prices. Here the profit sits with whoever has a scarce product or approval and controls material buying: Inox has held 20–22% for five quarters, Anup earned 21–23% for three years and Kilburn 23% in FY26, while Praj, whose home market has stopped, earns about 4%. **My view: profit leaks wherever a company takes fixed-price construction risk, sells a product that has become standard or depends on a single policy.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Pharma is the strongest domestic source: ICRA put the capital spending of 25 large drug makers at ₹42,000–45,000cr in FY26, GMM's Q1 orders were strongest in Indian contract drug makers, peptides and US onshoring, and contract drug makers are half of Standard Glass's book. Chemicals are going the other way: Crisil expects specialty-chemical capex to be cut to about ₹16,500cr in FY27, with revenue up only 6% and margins down 150–200 basis points, which is why glass-lined demand is split. Refinery and fertiliser plants in India, the Gulf and Africa are ordering, which feeds Anup and Kilburn, but awards are slipping by quarters because of the West Asia war; Kilburn's two large Middle East inquiries stalled when the war began. Power is a second leg for Anup, which cites more than 14 GW of new thermal projects and has won more than ₹150cr of thermal-power orders this year. Inox's demand is global and specialised: industrial gases, LNG as a truck and ship fuel, a US space company's launch tanks and projects such as CERN and ITER, with more than ₹1,140cr of its order book for export. Ethanol is the weak spot: India reached 20% blending ahead of time, and Infomerics estimates installed capacity at about twice what E20 needs. **My view: pharma and Inox's global niches are real multi-year demand; chemicals and domestic ethanol will not come back in FY27, and data centres are still mostly a slide here (Praj's cooling modules, Standard Glass's power skids, Kilburn's sheet-metal racks).**",
                },
                {
                    label: 'The cycle, costs and policy',
                    text: "Most contracts here are fixed-price with no escalation, so the steel and freight spike after the West Asia war in March–May 2026 landed on the makers: Anup held back buying material on ₹200–250cr of orders and guided its margin down, gas shortages slowed fabrication at Kilburn and Anup in Q4, and Praj deferred about ₹300cr of enquiries rather than quote fixed prices into rising steel. Only GMM (pass-through clauses above a 5% cost change) and Inox (a raw-material formula with a ±3% band) have clear protection, and even Inox lost ₹32–35cr of Q1 revenue to freight. Policy decides Praj's home market: standards for blends up to E30 were notified in May 2026, but with no date, and India approved a ₹23,731cr biogas scheme for FY27–FY36. About a quarter of Inox's FY26 revenue is exposed to US tariff changes, and a non-compete keeps it out of the US market until November 2028. **My view: in this group a contract clause or a blending decision can matter more than a year of execution, so each company's exposure should be judged on its own.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Inox** depends on a US space customer, LNG and big-science projects, and on its Kandla port plant starting on time; **GMM** on pharma orders, its margin repair and a refinancing that brings its tax rate down; **HLE and Standard Glass** on pharma capex while chemicals stay weak, and on their deals (Omeras, GScale) working; **Anup** on refinery, fertiliser and power awards arriving on time and steel settling; **Kilburn** on customers approving drawings and inquiries turning into orders; **Praj** on a blending mandate beyond E20 and its Mangalore yard breaking even. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Business', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Glass-lined and pharma equipment', 'GMM, HLE, Standard Glass', '6–17%', '12–15%', '**−4% to 75%**', 'A global brand and pharma approvals; standard reactors losing price, filtration and systems growing'],
                        ['Equipment and plants for chemicals, fertiliser, fuels and gases', 'Inox, Anup, Kilburn, Praj', '3–26%', '6–33%', '**−1% to 59%**', 'Scarce products and approvals hold margin; fixed prices and milestone billing slow the cash; a policy-stalled market earns little'],
                    ],
                    note: 'Ranges are from the charts in section 2. Kilburn’s five-year cash conversion covers only FY24–FY26.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Private project capex (bank-funded)', '₹2.6 lakh cr in FY26; about 89% greenfield; infrastructure over half', '**₹3.2 lakh cr in FY27**', 'RBI Bulletin, Sep 2026'],
                        ['Private corporate capex (survey)', '₹11.44 lakh cr in FY26 (provisional); 65% funded from own cash', 'Stated FY27 intentions ₹9.55 lakh cr (firms under-report; FY25 realisation 96%)', 'NSO / MoSPI, Mar 2026'],
                        ['New project announcements', '₹13.5 trillion in Q4 FY26, half a year earlier; manufacturing ₹1.5 trillion, a seven-quarter low', 'Government capex budgeted at ₹12.2 trillion in FY27 (+11.5%)', 'ICRA Investment Tracker, Apr 2026'],
                        ['Capital goods', 'Order books about ₹5.2 lakh cr (Dec 2025), 3.7 times sales; power 50%', '**FY27 revenue +12–14%**, margin 12–13%', 'Crisil, May 2026'],
                        ['Pharma capex', '₹42,000–45,000cr in FY26 for 25 large companies, about ₹25,000cr of it acquisitions', 'Contract manufacturing and US onshoring still adding plants', 'ICRA, Sep 2025'],
                        ['Specialty chemicals', 'Revenue +8% in each of the last two years', 'FY27 capex cut to about ₹16,500cr; revenue +6%; margin −150 to −200 bp', 'Crisil, Jul 2026'],
                        ['Ethanol blending', 'E20 reached; it needs about 1,016 crore litres a year against about 2,000 crore litres of capacity', 'Standards for E22–E30 notified May 2026; no mandate date', 'Infomerics, May 2026'],
                    ],
                    note: 'No agency publishes FY28–FY29 figures for these niches; the outlook beyond FY27 in the text is my own reading of the order books.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2. The test this year was simple: **when steel, freight and wages rose, who got paid for it?** Inox's grades come from a grid built for other kinds of product (repeat purchase, technical barrier, customer power); they sit here under the nearest heading.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting and priced: scarce engineering with a formula',
                    text: "**Inox** has 70–75% of Indian cryogenic tanks and 60–65% of Indian LNG equipment (Crisil and management), holds more than 40 certifications, won the AS9100D aerospace standard in Q1 so it can supply flight hardware, and names only Chart Industries as a rival for the largest space tanks; no Chinese shop holds the Indian safety approval (PESO) for LNG fuel tanks. Its large contracts carry a price formula for raw-material moves beyond a 3% band. **My view: the one barrier in this group that protects both the place in the queue and the price, though it is held in a few large customers' hands.**",
                },
                {
                    label: 'Lasting but fixed-price: scarce approvals',
                    text: "**Anup** holds ASME U, U2 and S stamps, approvals from EIL, Technip, Linde and Toyo and licensed designs from Lummus and Brembana, and can build single pieces of 1,000 tonnes; it walked away from a ₹200cr order on price in May. **Kilburn** leads in industrial dryers for Indian fertiliser and chemical plants and is a qualified NPCIL and Heavy Water Board vendor, with Lloyds Engineering its main nuclear rival. **My view: approvals protect the place in the queue, not the price: these contracts are fixed, and CARE notes “aggressive pricing adopted to secure orders” in Anup's market over the last six months.**",
                },
                {
                    label: 'Owned technology, but prices leaking',
                    text: "**GMM** has about half the glass-lined market in the Americas and India and a 60% gross margin, and contracts above a 5% cost change carry pass-through clauses; but management admits “continued pricing pressure” in standard vessels and three units dragging the group. **HLE** shipped 30–40% more Indian glass-lined units than four years ago for flat revenue, even with German Thaletec technology. **Praj** built all three of India's second-generation ethanol plants and has 1,000-plus references, but its compressed-biogas business is crowded and its margin is set by fixed-price projects. **My view: owning the design earns a premium only where the product is still scarce; in standard glass-lined reactors it no longer is.**",
                },
                {
                    label: 'Borrowed: third in line with a partner’s technology',
                    text: "**Standard Glass** is the third Indian glass-lined maker, behind GMM and HLE, and the leader sets the price. Its stake in Japan's GL Hakko came with no technology transfer, the partner keeps its special glass in Japan, and its data-centre skids assemble Schneider, ABB and Eaton parts. **My view: a moat someone else can take back is a lease, not an asset.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Thermax, L&T Heavy Engineering and Godrej in process equipment and fabrication; De Dietrich and Chinese makers in glass-lined equipment; Chart, Linde and Air Products in cryogenics; Lloyds Engineering in nuclear equipment; GEA and Andritz in industrial drying.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In a build-to-order business the margin depends on who carries the cost of steel between the quote and the delivery, and in standard equipment on whether the product can still command a price. This year's steel, freight and wage spike tested the first; falling glass-lined prices tested the second.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: a scarce product on a price formula',
                    text: "**Inox** runs 20–22% on Screener's basis; its own 23.5% includes treasury income, and large contracts are priced on a formula with a ±3% band. The margin eased from about 23% to 20.5% over three years because of mix and fixed costs (staff at the new Savli plant, a keg line at about 30%), not metal. **My view: this should hold through the cycle, give or take two points.**",
                },
                {
                    label: 'Cyclical: fixed prices, volume and overheads',
                    text: "**Anup** earned 21% in FY26 and guides about 15% for FY27 (CARE, citing management, says 16–18%), because ₹200–250cr of its book was priced before steel rose; Q1 was 7.6% on low revenue. **Kilburn** slid from 26% to 18% as revenue fell 9% against fixed costs; its own figure for Q1 was 20.1%. **GMM** earns about 10% on a 60% gross margin because staff are 29% of sales. **Standard Glass** has held 14–17% while growing fast, though ₹250cr of its FY27 revenue guidance comes from the GScale deal. **My view: Anup should recover with volume in FY28; GMM needs its restructuring to work.**",
                },
                {
                    label: 'Not structural: prices already lost',
                    text: "**HLE**'s margin was 7% in Q1 FY27 against 13% a year earlier, and it did not hold a Q1 call. **Praj** has earned 3–7% for five quarters while its home market waits on policy, and its Mangalore yard loses money. **Treat these as today's normal, not a dip, until two quarters prove otherwise.**",
                },
                {
                    label: 'Working capital: where the cash goes',
                    text: "**Inox**'s working capital rose from ₹731cr to ₹990cr in FY26 because more than 60% of its order book is now project work billed on milestones, even with about ₹500cr of customer advances. **Kilburn**'s cycle rose from 58 to 107 days and its working-capital days to 184, with negative operating cash in FY25 and FY26. **Anup**'s customers now take 185 days to pay, and ₹197cr of its ₹416cr of receivables was not yet billed at March. **Standard Glass** told investors in May that working capital had improved from 174 to 150 days, then in August that it had been 320 days last year; Screener shows 335.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**GMM** went from 151 to 92 days and turned about 90% of FY26 operating profit into free cash on its own figures. **HLE** turned all of FY26's profit into cash and paid down debt. **Inox**'s cycle came down from 342 to 238 days over five years, though its operating cash has not grown. **Praj**'s cycle was below zero in FY26 on Screener's count.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Engineered equipment and project suppliers carry 200–300 days of cycle because products are built to order and paid on milestones, with 50–60% of a contract's value often held until delivery (CARE on Anup). **Judge each against its own history, not against the others**, and watch for a cycle rising while growth slows.",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Inox India', 'Free funds up from ₹257cr to ₹331cr, helped by advances; Kandla plant cost not disclosed', 'Borrowings ₹81cr against ₹297cr of investments (March)'],
                        ['GMM Pfaudler', 'About €7m repaid; full refinancing in 12–18 months; tax rate to about 30% in 18–24 months', 'Gross debt ₹1,437cr incl. ₹396cr of pensions and ₹206cr of leases, against ₹691cr of cash (Crisil)'],
                        ['The Anup Enginee', 'Net cash “positive” by August; capex ₹40–50cr a year (CARE)', '₹45cr cash against ₹44cr of long-term debt; CARE AA-'],
                        ['Kilburn Engg.', '₹97cr of balance warrant money received in April–May 2026; capex about ₹40cr; no more equity needed', 'Borrowings ₹90cr (March); management says net debt-free after the warrants'],
                        ['Praj Industries', 'No major capex; Mangalore yard to break even in FY27', 'Cash ₹616cr at June; debt-free apart from leases; ₹291cr lent to the loss-making yard'],
                        ['HLE Glascoat', 'No Q1 call held; ₹35cr Omeras tank plant in India by Q4 FY27', 'Borrowings ₹348cr against ₹34cr of cash (March), about ₹314cr net; Screener’s net debt is ₹290cr (the gap is not explained in the sources read); ICRA A'],
                        ['Standard Glass', '₹190cr for 51% of GScale (of a ₹487–500cr programme) and ₹71.5cr for GL Hakko, “zero new debt”', 'Gross cash cited at ₹105cr after deal payments (Screener net cash ₹32cr at March); ₹57cr of guarantees for subsidiaries'],
                    ],
                    note: 'Most companies file cash flows only half-yearly, so Q1 figures are management’s. HLE held no Q1 FY27 results call; its figures come from filings and rating reports.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 FY26 call, and my own estimate of earnings growth. In this group the customers' capital budgets decide the orders, and delivery against the order book is the test.",
            ],
            points: [
                {
                    label: 'Growth driver: pharma capacity, not chemicals',
                    text: "**GMM**'s Q1 orders were strongest in Indian contract drug makers, peptides and US onshoring, and industries outside its traditional chemical and pharma customers (defence, nuclear, oil and gas, semiconductors) now give about 43% of its orders, against 31% two years ago. **Standard Glass** raised its FY27 core growth guide to 40–50%, half its book from contract drug makers. **HLE**'s filtration and drying grew 51% in FY26. Agrochemicals and commodity chemicals remain weak and Europe is poor. **My view: a real multi-year cycle, but narrower than the chemical-capex story usually told, and it favours the filtration, drying and systems lines over plain reactors.**",
                },
                {
                    label: 'Growth driver: space, LNG and big science',
                    text: "**Inox** has more than ₹1,000cr of orders from a US space company for delivery by FY28, CERN and ITER work (ITER promises at least ₹50–60cr of orders a year for five years), and a Kandla port plant from about January 2027 for tanks too big to move by road; it also has a liquid-nitrogen cooling prototype one to one and a half years from sale. **My view: the fastest growth here comes from being qualified inside global supply chains, not from waiting on Indian project awards.**",
                },
                {
                    label: 'Growth driver: refinery, fertiliser and power equipment',
                    text: "**Anup** has won more than ₹150cr of thermal-power orders this year and guides ₹200–250cr of orders a quarter, taken close to its historic margins. **Kilburn** won a first global fertiliser order from Casale and sees fertiliser as its fastest-moving source of orders, but it had won ₹190cr by mid-August against ₹450–500cr promised by September. **My view: the awards arrive, but late, and the fixed-price terms mean the margin is set on the day of the order.**",
                },
                {
                    label: 'Growth driver: policy — ethanol and biogas',
                    text: "**Praj** won a first bio-isobutanol plant, an 800-kilolitre-a-day Brazil ethanol plant and a data-centre cooling framework of at least US$50m over 2.5 years, and India approved a ₹23,731cr biogas scheme for FY27–FY36; but domestic ethanol plants need E25–E30. **My view: policy growth is real but arrives in lumps; I pay for it only when the money or the mandate has arrived.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Inox** booked a record ₹532cr of orders against ₹450–500cr a quarter. **Praj** received every order it promised in May. **Anup** took a record order book and is back to net cash.",
                },
                {
                    label: 'Cautious',
                    text: "**Anup** gave no guidance in May and a deliberately low one in August (revenue +5–10%, margin about 15%), and its chairman told investors the quarter was “short of the mark”. **GMM** gives no numbers and asks for “a few quarters of consistent results” before discussing its 15% margin aim. **Inox** reaffirmed 18–20% growth (“Absolutely”) after an 8% quarter.",
                },
                {
                    label: 'Missed',
                    text: "**Kilburn** cut FY27 revenue from ₹750–800cr to about ₹700cr and margin from 22–23% to 20%, with orders at ₹190cr by mid-August against ₹450–500cr promised by September. **HLE** promised 16% for H2 FY26, delivered about 13.5% on its own adjusted basis, and now says two years. **Inox** missed its own Q1 revenue target by ₹32–35cr on freight, and its ISRO and Highview orders slipped. **GMM**'s margin was 10.1% against 12.7% a year earlier, and its tax fix was pushed out.",
                },
                {
                    label: 'Mixed',
                    text: "**Standard Glass** raised its guidance and missed its export order a second time. **Praj**'s orders arrived; its margins did not.",
                },
                {
                    label: 'My outlook',
                    text: "Demand is real but narrow: pharma and Inox's global niches are strong; specialty chemicals and domestic ethanol plants are weak; and fixed-price makers carry this year's cost spike into FY27 profit. **I expect Inox and GMM to compound earnings at about 22% if their plans hold, Anup at about 18% (down from 20% after a guided margin reset), Kilburn at about 15% (down from 20% after its guidance cut), Standard Glass at about 15%, and Praj and HLE at about 10%.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['GMM Pfaudler', 'Pharma orders; margin repair; refinancing and tax', '12% / **22%** / 28%'],
                        ['Inox India', 'Space, LNG, big science; Kandla; project billing', '14% / **22%** / 28%'],
                        ['The Anup Enginee', 'Record book; margin back from 15% in FY27', '10% / **18%** / 24%'],
                        ['Kilburn Engg.', 'Order intake; capacity for ₹1,000cr; nuclear', '8% / **15%** / 22%'],
                        ['Standard Glass', 'Pharma capex; GScale data-centre bet', '5% / **15%** / 25%'],
                        ['Praj Industries', 'Blending policy; biogas; exports; Mangalore yard', '0% / **10%** / 25%'],
                        ['HLE Glascoat', 'Filtration and heat transfer; Omeras', '0% / **10%** / 18%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Inox India', 'FY27 growth 18–20%; ₹450–500cr of orders a quarter; margin 21–24% (own basis)', 'Kandla from Dec 2026–Jan 2027; cost not disclosed', '**Mixed**: orders beat; revenue +8% missed; ISRO and Highview slipped'],
                        ['GMM Pfaudler', 'No numbers; 15% margin an aim with no date', 'Below depreciation; acquisitions “largely behind us”', '**Missed**: margin 10.1% against 12.7% a year ago; tax fix pushed out'],
                        ['The Anup Enginee', 'Revenue +5–10%; margin about 15%; orders ₹200–250cr a quarter', '₹40–50cr a year (CARE)', '**Cautious**: record intake and net cash; Q1 revenue −29%'],
                        ['Kilburn Engg.', 'Revenue about ₹700cr (was ₹750–800cr); margin 20% (was 22–23%)', 'About ₹40cr; plants due end-October', '**Walked back**: guidance cut; orders ₹190cr against ₹450–500cr promised'],
                        ['Praj Industries', 'No numeric guidance; Mangalore yard to break even in FY27', 'None major', '**Mixed**: promised orders all arrived; margin still about 4%'],
                        ['HLE Glascoat', '16% margin excluding Omeras in two years; ₹2,000cr revenue', '₹35cr Omeras India plant', '**Missed**: 16% for H2 FY26 not met; Q1 FY27 margin 7%'],
                        ['Standard Glass', 'FY27 revenue ₹1,450cr incl. ₹250cr GScale; core margin 17–18%', '₹130cr greenfield over 2–3 years plus ₹260cr of deals', '**Mixed**: guidance raised; US$3.5m export order missed again'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into five groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Fixed prices in a cost spike',
                    text: "**Anup** says it has never had a price-variation clause, and it held back material purchases on ₹200–250cr of orders until steel eased; its FY27 margin guide of about 15% sits below CARE's downgrade trigger of 18%. **Kilburn** says plainly “our costs are not passed through” and relies on buying 80% of material within 72 hours. **Praj** deferred about ₹300cr of enquiries rather than quote fixed prices into rising steel, and **HLE** could not pass costs on. **The next spike will hit the same names; GMM and Inox are the only ones here with clear pass-through.**",
                },
                {
                    label: 'Audit remarks and related parties',
                    text: "**Kilburn**'s promoter company charges 2% a year to guarantee its loans, with approval sought to raise the guarantee to ₹115cr, and two subsidiaries have audit remarks on bank stock statements and late statutory dues. **HLE**'s auditor made related-party transactions a key audit matter: key managers were paid ₹12.8cr, about 23% of FY26 profit, and lent the company money. **Standard Glass**'s purchases from promoter-family firms rose sharply, and **Inox** sold ₹145cr to promoter-group INOX Air Products, about 9% of revenue.",
                },
                {
                    label: 'Earnings quality',
                    text: "**Anup** and **Kilburn** book revenue as costs are incurred, with large unbilled balances, and **Inox**'s auditor flagged the judgement in booking long contracts by percentage of completion. **GMM** loses 49% of pre-tax profit to tax because of its Luxembourg structure, so its net profit understates the business; its group CFO resigned in September, before the promised refinancing and tax restructuring.",
                },
                {
                    label: 'Debt and acquisitions',
                    text: "**Standard Glass** is putting ₹560–570cr into two deals, most of its ₹788cr net worth. **HLE**'s Omeras needs ₹200–225cr of annual revenue to break even, and HLE owes ₹348cr against ₹34cr of cash (about ₹314cr net at March; ₹290cr on Screener). **GMM**'s gross debt of ₹1,437cr includes ₹396cr of pensions. **Praj** has lent ₹291cr to its loss-making Mangalore yard, which has ₹183cr of accumulated losses.",
                },
                {
                    label: 'Disputes, contracts and policy',
                    text: "**Inox** was ordered to pay ₹8.5cr of costs after an arbitral tribunal found a storage arrangement breached its US non-compete (which runs to November 2028), and faces a tax reassessment on a ₹52cr deduction; US tariffs have changed repeatedly this year. **Praj** waits on E25–E30. **Kilburn**'s customers can push revenue back simply by delaying drawing approvals or site readiness.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **5% at 10x, 13% at 19x, 16% at 25x, 18–20% at 31–35x, 21% at 38x, 22% at 43x, 24% at 51x, 27% at 65x, 30% at 80x, 32% at 93–95x and 35% at 117x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. All seven companies are in the live table.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**HLE** carries debt the P/E ignores, so it is dearer than it looks. **Praj**, **Inox** (₹239cr) and **Standard Glass** hold net cash. **GMM**'s ₹353cr of Screener net debt understates what it owes, because Crisil adds ₹396cr of pensions. **Anup** and **Kilburn** carry little net debt.",
                },
                {
                    label: 'Full: close to the line',
                    text: "**GMM** needs about {need:GMM Pfaudler|24}% a year against my ~22%, **Anup** about {need:The Anup Enginee|21}% against ~18% and **Kilburn** about {need:Kilburn Engg.|19}% against my reduced ~15%. For GMM the gap is small and the franchise is good, so I follow it for a better price; for Anup it is a reset year before a record book is delivered, and the cash has to arrive first; for Kilburn it is orders and cash that have not yet arrived.",
                },
                {
                    label: 'Stretched',
                    text: "**Inox** needs about {need:Inox India|30}% a year against my ~22%: an excellent business priced for years of flawless delivery. **Standard Glass** needs about {need:Standard Glass|32}% against ~15%, **HLE** about {need:HLE Glascoat|30}% against ~10% and **Praj** about {need:Praj Industries|35}% against ~10%: prices far ahead of what these businesses are delivering.",
                },
                {
                    label: 'Earnings quality: which P/Es mislead',
                    text: "The live P/E uses reported profit. **GMM**'s 49% tax rate depresses its profit, so it is a little cheaper than the table shows if the promised restructuring works.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Inox India', rank: 1, stance: 'PRICED', segment: PLANT,
            what: "Cryogenic tanks, trailers, cylinders and systems for industrial gases, LNG, space launch and big-science projects, plus beverage kegs; 58% of Q1 revenue was exported.",
            view: "**The deepest technology here, at a full price.** It holds 70–75% of Indian cryogenic tanks, a record ₹1,686cr order book and over ₹1,000cr of US space orders, and a pass-through formula held margins at 20–22%. But Q1 grew 8% against 18–20% guidance, operating cash has sat near ₹120cr for three years as project work builds up, and a US non-compete runs to November 2028. The price needs about {need:Inox India|30}% a year against my ~22%.",
            watch: 'H1 FY27 revenue growth back near 15–20%; Kandla starting on time; operating cash above ₹200cr in FY27.',
        },
        {
            company: 'GMM Pfaudler', rank: 2, stance: 'CYCLICAL', segment: GLASS,
            what: "Glass-lined reactors and storage, mixing, filtration, drying and sealing equipment, process systems and heavy engineering, sold worldwide under the Pfaudler brand.",
            view: "**A world leader whose profit is lost between operating profit and shareholders.** Half the big glass-lined market, a ₹2,289cr backlog and ₹310–370cr of free cash a year; but FY26 operating profit of ₹403cr became ₹52cr of net profit after interest and a 49% tax rate, the Q1 margin fell to 10.1% and the group CFO resigned in September. The price needs about {need:GMM Pfaudler|24}% a year against my ~22%.",
            watch: 'Margin back above 12–13% in Q2–Q3; the refinancing and tax restructuring; the investor-day targets.',
        },
        {
            company: 'The Anup Enginee', rank: 3, stance: 'CYCLICAL', segment: PLANT,
            what: "Heat exchangers, pressure vessels, columns and reactors for refineries, petrochemicals, fertiliser, power and nuclear plants, built to ASME codes at Ahmedabad and Kheda.",
            view: "**A high-quality fabricator in a reset year, whose profit is not arriving as cash.** Operating cash was ₹152cr against ₹395cr of profit over the five years Screener shows (FY21–FY26, FY24 not shown; 38%), and ₹2cr on ₹110cr in FY26. Q1 profit was almost nil and FY27 is guided at about 15% margin against 21% (below CARE's 18% downgrade line), but the book is a record ₹985cr, new orders came “close to our historic margins”, it is back to net cash and CARE rates it AA-. At about {pe:The Anup Enginee|39} times earnings it needs about {need:The Anup Enginee|21}% a year against my ~18%, which is {Label:The Anup Enginee|Full}. It moves from follow to wait, and returns to follow when operating cash converts most of its profit and the margin recovers. On 9 Oct 2026 the price moved into the fits band; it stays wait, because the cash test, not the price, is what holds it back, and nothing has been filed in six weeks.",
            watch: 'Q2 revenue above ₹200cr with margin back above 15%; order intake of ₹200–250cr a quarter; operating cash turning positive.',
        },
        {
            company: 'Kilburn Engg.', rank: 4, stance: 'CYCLICAL', segment: PLANT,
            what: "Industrial dryers, nuclear process equipment, waste-heat recovery (ME Energy) and radio-frequency drying and sheet-metal work (Monga Strayfield) for fertiliser, chemical, steel and nuclear plants.",
            view: "**A high-margin niche whose orders have stalled.** FY26 revenue grew 48% at a 23% margin, and it won a first global fertiliser order from Casale. But FY27 guidance was cut to about ₹700cr at 20%, the ₹485cr book is under a year of sales, operating cash was negative in FY25 and FY26, and subsidiaries carry audit remarks. I cut my estimate from 20% to 15%; the price needs about {need:Kilburn Engg.|19}% a year.",
            watch: 'Q2 order intake above ₹200cr; debtor days back under 100; the promoter-guarantee fee and subsidiary audit remarks cleaned up.',
        },
        {
            company: 'Praj Industries', rank: 5, stance: 'CYCLICAL', segment: PLANT,
            what: "Ethanol, biogas and bio-fuel process plants on its own technology, ultra-pure water systems, and modular fabrication at Mangalore (GenX), sold in India and abroad.",
            view: "**Owns the technology; its main market has stopped.** Q1 brought ₹1,000cr of orders, including Brazil, a first bio-isobutanol plant and a data-centre framework, and it holds ₹616cr of cash. But margins are about 4%, FY26 profit was ₹24cr, the Mangalore yard has ₹183cr of accumulated losses funded by ₹291cr of parent loans, and domestic ethanol plants wait for E25–E30. The price needs about {need:Praj Industries|35}% a year against my ~10%.",
            watch: 'A dated E25–E30 mandate; the Mangalore yard breaking even in FY27; margin back above 7–8%.',
        },
        {
            company: 'HLE Glascoat', rank: 6, stance: 'TURNAROUND', segment: GLASS,
            what: "Glass-lined reactors (India and Thaletec, Germany), filtration and drying equipment, heat exchangers and glass-fused steel tanks (Omeras).",
            view: "**Good filtration business, broken core.** Filtration grew 51% and heat transfer 65% in FY26, and debt is falling. But Indian glass-lined prices keep sliding, Omeras lost money, the 16% margin promise was missed and deferred two years, Q1 FY27 earned 7% with no call held, and the auditor flagged related-party dealings. The price needs about {need:HLE Glascoat|30}% a year against my ~10%.",
            watch: 'Omeras at ₹45–50cr of quarterly revenue; two quarters of double-digit margins; debt reduction continuing.',
        },
        {
            company: 'Standard Glass', rank: 7, stance: 'AVOID', segment: GLASS,
            what: "Glass-lined and stainless-steel process equipment and turnkey projects for pharma and chemicals, renamed Standard Engineering Technology and buying into data-centre skids (GScale) and Japan's GL Hakko.",
            view: "**Growth real, story unstable.** Revenue grew 43% in Q1 (filed; 41% on the company's total-income measure) on a ₹1,400cr core book and FY27 guidance of ₹1,450cr. But ₹250cr of that is from a data-centre business whose factory opens in November, free cash has been negative every year, management's own working-capital figures contradict each other, and purchases from promoter-family firms rose sharply. The price needs about {need:Standard Glass|32}% a year against my ~15%.",
            watch: 'GScale revenue and named orders; working capital genuinely below 200 days; positive free cash flow.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Glass-lined and pharma equipment.** **GMM Pfaudler: follow.** The technology leader, but its profit leaks to interest and tax and its CFO is leaving. **HLE Glascoat: pass.** Premium technology on a core that has lost pricing power. **Standard Glass: avoid.** A changing story, contradictory working-capital figures and rising related-party buying.",
            "**Equipment and plants for chemicals, fertiliser, fuels and gases.** **Inox India: follow.** The deepest technology and the best contract terms in the group, at a price that already assumes years of flawless growth, with cash conversion to fix. **Anup Engineering (The Anup Enginee): wait**, moved down from follow. A record book in a reset year, but with a margin guide below CARE's downgrade line and ₹152cr of operating cash against ₹395cr of profit over the five years Screener shows (FY21–FY26, FY24 not shown; ₹2cr in FY26); the price needs about {need:The Anup Enginee|21}% a year against my ~18%, which is {Label:The Anup Enginee|Full}. **Kilburn: wait.** Good margins, stalled orders and no cash for two years. **Praj: wait** for a blending decision.",
            "**What would change my view.** For the better: Inox's growth returning to its guide with better cash, or a lower price; GMM's margin recovering and its tax fixed; Anup's new book delivering near 20% margins in FY28; Kilburn's orders arriving; a dated E25 mandate for Praj; HLE's Omeras breaking even. For the worse: another cost spike on fixed-price contracts; specialty-chemical capex cut further or pharma spending slowing; refinery and fertiliser awards slipping further; a US tariff escalation hitting Inox.",
            "**What to watch next quarter.** Inox's revenue growth and Kandla; GMM's margin and refinancing; Anup's Q2 revenue; Kilburn's orders; Praj's Mangalore yard; HLE's Omeras; Standard Glass's GScale orders.",
        ],
        bottomLine:
            "In chemical and pharma process equipment the customer's capital budget sets the demand and the contract sets the margin. Follow the franchises whose prices or problems are a few points too heavy (Inox India and GMM Pfaudler); wait for profit to arrive as cash at Anup, for orders and cash at Kilburn and for a blending decision at Praj; and avoid those whose core product has become standard or whose story keeps changing.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/PITTIENG/consolidated/' },
        { label: 'Private sector capex projected at ₹3.2 lakh cr in FY27 (RBI Bulletin) — Whalesbook, Sep 2026', url: 'https://www.whalesbook.com/news/English/economy/Indian-Private-Sector-Capex-Projected-to-Hit-indian-rupee32-Lakh-Crore-by-FY27/6ab6b2415aacb956d080c074' },
        { label: 'Forward-looking survey on private corporate capex — NSO / MoSPI, Mar 2026', url: 'https://www.mospi.gov.in/uploads/latestReleases/latest_release_1774330174046_78142a54-f875-4b7a-af1f-ce36c33bcc16_Press_Note_CAPEX_Eng.pdf' },
        { label: 'Investment Tracker — ICRA, Apr 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6904' },
        { label: 'Capital goods sector may post 14% growth in FY27 (Crisil) — BizzBuzz, May 2026', url: 'https://www.bizzbuzz.news/national/indias-capital-goods-sector-may-post-14-growth-in-fy27-crisil-1391772' },
        { label: 'Specialty chemical firms pare capex as margins come under pressure (Crisil) — Business Today, Jul 2026', url: 'https://www.businesstoday.in/industry/story/specialty-chemical-firms-pare-capex-as-margins-come-under-pressure-540640-2026-07-02' },
        { label: 'Pharma sector capex outlook — ICRA press release, Sep 2025', url: 'https://www.icra.in/CommonService/OpenMediaS3?Key=98c77d00-825a-4d0f-b12c-62b72d59e09f' },
        { label: 'Evolution of the ethanol blending programme — Infomerics, May 2026', url: 'https://infomericstorage.blob.core.windows.net/uploads/ethanol_industry_may26_8a5642b087.pdf' },
        { label: 'GMM Pfaudler rating rationale — Crisil, Sep 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/GMMPfaudlerLimited_September 17_ 2026_RR_405544.html' },
        { label: 'GMM Pfaudler: dominant share of the Indian glass-lined market — JM Financial initiating coverage', url: 'http://www.jmflresearch.com/JMnew/JMCRM/analystreports/pdf/GMM_IC_June20.pdf' },
        { label: 'Inox India Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=09ffaefc-91f1-49d4-ae5c-6a63685fef4c.pdf' },
        { label: 'Inox India annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/aa48dd4e-fc39-4e6b-b0a1-c8633360a67a.pdf' },
        { label: 'The Anup Engineering rating rationale — CARE, Aug 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202608120829_The_Anup_Engineering_Limited.pdf' },
        { label: 'Kilburn Engineering annual report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=c43c3944-aa5e-4508-8ff7-461fd88a1c5f.pdf' },
        { label: 'HLE Glascoat rating update — ICRA, Aug 2026', url: 'https://www.icra.in/Rationale/ShowRationaleReport/?Id=145043' },
        { label: 'Praj Industries rating rationale — Crisil, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/PrajIndustriesLimited_August 19_ 2026_RR_402227.html' },
        { label: 'Standard Engineering Technology annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/b6ed630b-6f58-4e87-9f33-ecda188523ba.pdf' },
    ],
};
