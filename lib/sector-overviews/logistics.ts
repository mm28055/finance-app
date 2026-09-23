import { SectorOverview } from './types';
import { logisticsBusinesses } from './logistics-businesses';
import { logisticsValuationInputs } from './card-data/logistics';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const TERMINAL = 'Port terminals and gas distribution — tanks and jetties decide';
const PARCEL = 'Parcel and last-mile delivery — network density decides';
const CONTRACT = 'Contract logistics and freight forwarding — service and scale';

export const logistics: SectorOverview = {
    sector: 'Logistics',
    title: 'Logistics',
    format: 'ranked',
    businesses: logisticsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: logisticsValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Aegis Logistics': 18,
            'Delhivery': null,
            'Shadowfax Tech.': 30,
            'TVS Supply Chain Sol': 25,
        },
    },
    standfirst:
        "Four companies under one label that do three very different jobs. Aegis owns port terminals that store LPG, chemicals and now ammonia, and sells LPG inland. Delhivery and Shadowfax deliver parcels for online shops and quick-commerce apps. TVS Supply Chain runs warehouses and factory supply lines for large companies and forwards freight by sea and air. Only the terminal business earns high margins; the delivery businesses earn 5–7% and win on density. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener, consolidated), operating profit ÷ sales.',
            note: 'Aegis is a different kind of business: terminal fees plus LPG sales. The three delivery and supply-chain companies earn 3–8%.',
            values: {
                'Aegis Logistics': [14, 13, 17, 24, 30],
                'Delhivery': [6, 3, 7, 8, 5],
                'Shadowfax Tech.': [3, 4, 6, 7, 7],
                'TVS Supply Chain Sol': [7, 7, 8, 7, 7],
            },
            cellNotes: {
                'Aegis Logistics': 'Q1 FY27: LPG distribution volumes nearly doubled and the margin per tonne stayed near ₹7,000 (company), partly helped by this year’s disrupted energy markets.',
                'Delhivery': 'Q1 FY27: about ₹35cr of one-off costs from labour shortages, elections and weather (company).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Delhivery’s growth includes Ecom Express, which it bought. Shadowfax has grown 65–74% for three quarters.',
            values: {
                'Aegis Logistics': [7, 31, 1, 52, 37],
                'Delhivery': [6, 17, 18, 30, 28],
                'Shadowfax Tech.': [null, null, 65, 74, 65],
                'TVS Supply Chain Sol': [2, 6, 11, 21, 29],
            },
            cellNotes: {
                'Shadowfax Tech.': 'Listed recently; year-earlier quarters are not filed for Q1–Q2 FY26.',
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
            note: 'Only Aegis has earned a double-digit return for five years. Delhivery is only just above zero.',
            values: {
                'Aegis Logistics': [17, 16, 15, 13, 13],
                'Delhivery': [-17, -11, -2, 2, 1],
                'Shadowfax Tech.': [null, null, 1, 4, 10],
                'TVS Supply Chain Sol': [6, 6, 5, 5, 10],
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
            note: 'TVS Supply Chain’s strongly negative figure reflects the very large payables of its freight-forwarding business, not unusual efficiency.',
            values: {
                'Aegis Logistics': [3, 1, 3, 20, -12],
                'Delhivery': [53, 77, 64, 58, 48],
                'Shadowfax Tech.': [null, 40, 36, 48, 45],
                'TVS Supply Chain Sol': [-314, -243, -162, -161, -170],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Blank where operating profit was negative or too small for the ratio to mean anything.',
            values: {
                'Aegis Logistics': [52, 53, 71, 51, 140, 83],
                'Delhivery': [null, null, 372, 151, 142, null],
                'Shadowfax Tech.': [null, null, null, 79, 158, null],
                'TVS Supply Chain Sol': [97, 109, 18, 100, 96, 84],
            },
            cellNotes: {
                'Delhivery': 'Operating losses in FY22–FY23 make the five-year figure meaningless. Its operating cash has exceeded operating profit since FY24.',
                'Aegis Logistics': 'FY26: ₹2,028cr of operating cash on ₹1,452cr of operating profit.',
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
            note: 'TVS Supply Chain has produced steady free cash; Delhivery turned positive in FY25. Aegis spends heavily on new terminals, so its free cash swings.',
            values: {
                'Aegis Logistics': [-2.4, -2.1, 0.6, -5.7, 14.5, 1.6],
                'Delhivery': [-11.4, -8.7, -1.1, 0.9, 4.7, -2.2],
                'Shadowfax Tech.': [null, -8.5, 4.2, -1.4, 3.9, 0.9],
                'TVS Supply Chain Sol': [5.2, 5.9, 0.0, 5.0, 4.3, 4.1],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Delhivery and Shadowfax.',
            note: 'Below zero means more cash than debt. Delhivery and Shadowfax hold cash from their share sales; TVS Supply Chain carries the most debt.',
            values: {
                'Aegis Logistics': [1.3, 1.0, 1.0, 1.3, -0.0],
                'Delhivery': [null, null, -15.8, -6.6, -2.7],
                'Shadowfax Tech.': [null, null, -6.6, -2.0, -3.6],
                'TVS Supply Chain Sol': [3.1, 3.2, 2.3, 2.2, 2.6],
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
            note: 'Aegis is the capital-heavy one. Delhivery’s spending has fallen below 5% of sales now that its network is built.',
            values: {
                'Aegis Logistics': [8.5, 6.2, 8.7, 14.0, 9.9, 9.4],
                'Delhivery': [7.9, 8.3, 6.9, 5.4, 4.0, 6.3],
                'Shadowfax Tech.': [null, 3.3, 2.8, 3.5, 4.4, 3.7],
                'TVS Supply Chain Sol': [1.3, 1.5, 1.3, 1.8, 2.5, 1.7],
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
            note: 'Shadowfax owns very little; Aegis owns tanks and jetties. The ratio tells you how asset-heavy each model is.',
            values: {
                'Aegis Logistics': [1.9, 2.4, 1.7, 1.3, 1.3],
                'Delhivery': [2.3, 2.4, 2.4, 2.3, 1.9],
                'Shadowfax Tech.': [null, 17.0, 16.0, 7.6, 7.1],
                'TVS Supply Chain Sol': [4.3, 4.4, 3.9, 4.6, 3.8],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'asset', label: 'Scarce assets', description: 'Port waterfront, jetties, pipelines or a national network a rival cannot quickly build.' },
            { key: 'density', label: 'Network density and scale', description: 'Enough volume to fill trucks, routes and warehouses cheaply.' },
            { key: 'lock', label: 'Contract lock-in', description: 'Long take-or-pay contracts or systems embedded in the customer.' },
            { key: 'breadth', label: 'Breadth of customers', description: 'How far revenue is spread; a D means a few customers can move the year.' },
            { key: 'pass', label: 'Pricing power', description: 'Whether fuel, wage and freight cost rises are passed on.' },
        ],
        rows: [
            { company: 'Aegis Logistics', trend: 'widening', trendNote: 'Commissioned its ammonia terminal at Pipavav and added LPG and liquid capacity at JNPA and Kochi.',
                grades: { asset: { grade: 'A', note: 'Terminals at seven ports; waterfront is scarce' }, density: { grade: 'B', note: 'Pipeline and rail links inland' }, lock: { grade: 'A', note: '15–20-year take-or-pay deals (HPCL, Hindustan Zinc)' }, breadth: { grade: 'B', note: 'Oil companies plus a growing private base' }, pass: { grade: 'B', note: 'Distribution margin ~₹7,000 a tonne, partly war-driven' } } },
            { company: 'Delhivery', trend: 'widening', trendNote: 'Bought Ecom Express, removing a rival; says shippers move to it when others falter.',
                grades: { asset: { grade: 'A', note: 'National network; 322 million parcels in Q1' }, density: { grade: 'A', note: 'Largest third-party parcel network' }, lock: { grade: 'C', note: 'Mostly transactional' }, breadth: { grade: 'B', note: 'Marketplaces plus thousands of brands' }, pass: { grade: 'B', note: 'Says labour-code costs can be passed on' } } },
            { company: 'Shadowfax Tech.', trend: 'widening', trendNote: 'Raised FY27 revenue guidance to 38–40%; won Amazon Now’s quick-commerce deliveries.',
                grades: { asset: { grade: 'C', note: 'Asset-light; 16,372 pin codes' }, density: { grade: 'B', note: 'Adding about 8 pin codes a day' }, lock: { grade: 'C', note: 'Transactional contracts' }, breadth: { grade: 'C', note: 'Large marketplaces are big customers' }, pass: { grade: 'B', note: 'Fuel clauses with large clients' } } },
            { company: 'TVS Supply Chain Sol', trend: 'stable', trendNote: 'Record order wins and a ₹7,500cr pipeline, but its margin target moved to FY28.',
                grades: { asset: { grade: 'C', note: 'Asset-light warehouses and systems' }, density: { grade: 'B', note: 'Global forwarding network' }, lock: { grade: 'B', note: 'Systems embedded in customers’ supply chains' }, breadth: { grade: 'A', note: 'Large multinational customers across industries' }, pass: { grade: 'C', note: 'Forwarding margins follow freight rates' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**None of the four is a clear buy at today's prices, but two are worth following closely.** **Aegis Logistics** has the best business: port terminals on scarce waterfront, long take-or-pay contracts, and a fast-growing LPG distribution business that earned a record 30% margin in Q1. It has earned 13–17% on capital for five years. The price asks for a little more than I expect, and part of this year's distribution margin comes from disrupted energy markets.",
                "**Shadowfax is the fastest grower: follow.** Revenue up 65–74% for three quarters, guidance raised to 38–40% for FY27, and margins rising from 3% to 7%. It is recently listed, earns thin margins and depends on a few large platforms.",
                "**Wait on Delhivery and TVS Supply Chain.** Delhivery has the largest parcel network and has turned cash-positive, but it still earns about 1% on capital and its profit is too small to value it on. TVS Supply Chain is cheap on EV/EBITDA and winning record orders, but it carries debt and has moved its margin target out a year.",
                "**Two things to hold onto before reading the rest.** First, **Aegis is not a delivery company**: it is closer to an energy utility, so compare it on returns and contracts, not on parcel growth. Second, **delivery businesses win on density**: the more parcels on each route, the lower the cost of each one, which is why scale matters more than anything else in this group.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed consolidated results. Shadowfax listed recently, so its history is short. Only TVS Supply Chain publishes an order pipeline (over ₹7,500cr). Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Logistics is anything that moves or stores goods. These four do it at three very different points.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**Ports**: ships unload LPG, chemicals and ammonia into shore tanks (Aegis), which are then moved inland by pipeline, rail or truck. **Line-haul and last mile**: parcels are collected from sellers, sorted at hubs, trucked between cities and delivered to doorsteps (Delhivery, Shadowfax). **Contract logistics**: warehouses and factory supply lines run for a single large customer, plus sea and air freight booked on its behalf (TVS Supply Chain). **The profit sits with scarce assets and dense networks**, not with the trucks.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India imports most of its LPG and much of its chemicals and ammonia, so port tankage grows with energy use. Online shopping, direct-to-consumer brands and ten-minute quick-commerce apps drive parcel volumes: Delhivery handled 322 million parcels in Q1 and guides 20–30% volume growth. Manufacturing and global trade drive contract logistics and forwarding.",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Parcels are steady; freight forwarding is cyclical.** Sea and air freight rates swing with wars and shipping routes, which helped TVS Supply Chain this quarter. New labour codes and state minimum-wage rises push up delivery costs; Delhivery and Shadowfax both say they are passing them on. Aegis's LPG business depends on Middle East supply, which was disrupted this year.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Aegis** depends on India's LPG and chemical imports and on its new ammonia business; **Delhivery** on online shopping and on keeping Amazon's and Flipkart's own delivery arms at bay; **Shadowfax** on quick commerce and a few large platforms; **TVS Supply Chain** on global trade and turning new contracts into profit. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Port terminals and gas distribution', 'Aegis', '13–30%', '13%', '**83%**'],
                        ['Parcel and last-mile delivery', 'Delhivery, Shadowfax', '3–8%', '1–10%', '**Not meaningful (early losses)**'],
                        ['Contract logistics and forwarding', 'TVS Supply Chain', '7–8%', '10%', '**84%**'],
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
                    label: 'Lasting: waterfront and contracts',
                    text: "**Aegis** owns terminals at seven ports, where waterfront land is scarce and heavily regulated, and ties them to pipelines and rail. Its contracts run 15–20 years (HPCL at Haldia to 2038; Hindustan Zinc for a third of the new ammonia terminal). A rival cannot copy that quickly.",
                },
                {
                    label: 'Lasting but contested: network density',
                    text: "**Delhivery** delivered 322 million parcels in Q1 alone and bought Ecom Express, so its routes are the fullest in the country. **Shadowfax** reaches 16,372 pin codes and adds about 8 a day. Density lowers cost per parcel; the threat is Amazon and Flipkart opening their own delivery networks to other sellers.",
                },
                {
                    label: 'Wearing: freight forwarding',
                    text: "**TVS Supply Chain**'s forwarding arm (about 28% of revenue) earns 2–5% and follows global freight rates. Its warehouse and supply-chain business is stickier because its systems are built into customers' operations.",
                },
                {
                    label: 'Barely a moat: pricing in parcels',
                    text: "Parcel pricing is set by a few very large customers. **Shadowfax** chose to absorb part of this year's diesel and wage increases to keep clients, and **Delhivery**'s service margin rose only 5% on 28% revenue growth.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Amazon Transportation Services**, **Ekart** (Flipkart), **Xpressbees**, **Blue Dart** and **Ecom Express** (now Delhivery) in parcels; **Allcargo**, **Mahindra Logistics** and **DHL** in contract logistics and forwarding; **Indian Oil**, **HPCL** and **Confidence Petroleum** in LPG storage and distribution.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The terminal business and the delivery businesses have very different ceilings.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: terminals and density',
                    text: "**Aegis**'s terminal fees are contractual and steady. **Delhivery** targets 16–18% service margins in express parcels and a 15.5% exit margin in part-truckload freight in FY27, up from 13.4%. **Shadowfax** guides 1–2 points of margin expansion a year. These margins rise with volume because the network is already built.",
                },
                {
                    label: 'Cyclical: gas and freight',
                    text: "**Aegis**'s LPG distribution margin rose from about ₹4,000 a tonne historically to about ₹7,000; management says volume will keep it there, but part of it reflects this year's disrupted markets. **TVS Supply Chain**'s forwarding margin rose from 2.4% to 4.1% on high ocean freight rates.",
                },
                {
                    label: 'Not structural: start-up costs',
                    text: "**TVS Supply Chain**'s warehouse margin dipped to 8.1% on the costs of starting new contracts; it targets 9.5–10% by Q4. **Delhivery**'s supply-chain unit dipped for the same reason, with normal margins expected by Q3.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Delivery companies are paid by large platforms on credit and pay riders weekly; **Shadowfax** and **Delhivery** carry 45–60 days.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Aegis**'s stock of LPG for resale grows with its distribution volumes. **TVS Supply Chain** is funding new contracts with short-term debt.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Delhivery**'s cycle has fallen from 77 to 48 days since FY23, and its operating cash has exceeded operating profit for three years. **Aegis** turned 140% of FY26 operating profit into cash.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Forwarders collect from customers after paying shipping lines, or before, depending on terms; terminals are paid monthly. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: India’s energy imports',
                    text: "**Aegis** targets about $1.2bn of cumulative capex by FY27 and up to $5bn by 2030, including new LPG and liquid tanks at JNPA and the ammonia terminal at Pipavav, where Japan's ITOCHU has bought 10% with the option to go to 25%. It targets 2 million tonnes of LPG distribution by FY28.",
                },
                {
                    label: 'Growth driver: online shopping and quick commerce',
                    text: "**Delhivery** expects the top of its 20–30% express volume range. **Shadowfax** raised its FY27 revenue guidance from 27–30% to 38–40%, opened 47 dark stores (small city warehouses for quick delivery) in Q1 and aims for 100.",
                },
                {
                    label: 'Growth driver: outsourced supply chains',
                    text: "**TVS Supply Chain** won a record ₹543cr of new business in Q1, has a pipeline above ₹7,500cr, bought Swamy & Sons in FMCG logistics and formed a joint venture with ALA for European aerospace and defence.",
                },
                {
                    label: 'Growth driver: new services',
                    text: "**Delhivery Direct** (parcels for individuals) is ahead of plan, and Delhivery Local handles same-city vans. **Shadowfax**'s heavy-goods service grew 170% to ₹75cr of annual revenue.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Aegis** commissioned the Pipavav ammonia terminal and the Jamnagar–Loni pipeline link as promised. **Shadowfax** hit its full-year heavy-goods target in one quarter. **Delhivery** posted record Q1 volumes despite about ₹35cr of one-off costs.",
                },
                {
                    label: 'Cautious',
                    text: "**Delhivery** expects its supply-chain unit's margins to normalise only by Q3.",
                },
                {
                    label: 'Missed',
                    text: "**TVS Supply Chain** moved its 4% pre-tax margin target from FY27 to FY28.",
                },
                {
                    label: 'Mixed',
                    text: "**Aegis**'s record Q1 profit (up 212%) came partly from distribution margins that may not last; management says ₹7,000 a tonne is sustainable but admits last year's level was helped by geopolitics.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Aegis to compound earnings at about 18%, slower than its record quarter suggests, and Shadowfax at about 30% from a small base.** Delhivery's profit should grow fast as its network fills, but from so low a base that the percentage says little. TVS Supply Chain should grow profit faster than revenue if new contracts reach normal margins.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Aegis Logistics', 'New terminals; LPG and ammonia distribution', '10% / **18%** / 25%'],
                        ['Shadowfax Tech.', 'Quick commerce, brands and heavy goods; margin rising', '18% / **30%** / 40%'],
                        ['TVS Supply Chain Sol', 'New contracts reaching normal margins', '10% / **25%** / 35%'],
                        ['Delhivery', 'Network filling; profit from a very low base', 'Profit too small to estimate from'],
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
                    label: 'Big customers building their own',
                    text: "Amazon and Flipkart run their own delivery networks and are opening them to outside sellers. That caps what **Delhivery** and **Shadowfax** can charge, and Shadowfax depends heavily on large platforms.",
                },
                {
                    label: 'Labour and fuel',
                    text: "Gig-worker shortages, new labour codes and state wage rises (about ₹2.5cr a month for Shadowfax) raise delivery costs. Both parcel companies say they can pass these on; Shadowfax absorbed part of it this quarter.",
                },
                {
                    label: 'Energy markets and a large capex plan',
                    text: "**Aegis**'s distribution margin may fall back as energy markets normalise, and its plan to spend up to $5bn by 2030 carries construction and utilisation risk. A faster shift from LPG to piped gas would slow its core business.",
                },
                {
                    label: 'A global slowdown',
                    text: "**TVS Supply Chain**'s management named a global recession as its biggest risk: forwarding volumes would fall and new warehouse contracts would be delayed.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or heavy depreciation is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **18% at 30x, 21% at 40x, 31% at 80x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is an expensive group**: every price assumes strong growth for years.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**TVS Supply Chain** looks expensive on P/E because depreciation and interest take most of its operating profit; on EV/EBITDA it is the cheapest here. **Delhivery** and **Shadowfax** hold net cash from their share sales.",
                },
                {
                    label: 'Full',
                    text: "**Aegis** and **Shadowfax**: each needs a little more growth than I expect. Both are delivering strongly today.",
                },
                {
                    label: 'Stretched',
                    text: "**TVS Supply Chain**: its profit after tax is small, so the P/E needs growth well above my estimate, even though EV/EBITDA looks modest.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Delhivery**'s profit is too small for its P/E to mean anything; judge it on EV/EBITDA and on whether its margin reaches the 16–18% it targets in express parcels.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Aegis Logistics', rank: 1, stance: 'PRICED', segment: TERMINAL,
            what: "A leading independent operator of port terminals for LPG, chemicals and ammonia, with an LPG distribution business that sells to industry, autogas stations and homes.",
            view: "**The best business here, priced for most of it.** 13–17% return on capital for five years, 15–20-year take-or-pay contracts and a record Q1 (profit up 212%). But part of the ₹7,000-a-tonne distribution margin comes from disrupted energy markets. The price needs a little more than my ~18% estimate.",
            watch: 'Distribution margin as energy markets settle; the ammonia terminal filling; the JNPA expansion.',
        },
        {
            company: 'Shadowfax Tech.', rank: 2, stance: 'SCALEUP', segment: PARCEL,
            what: "A delivery company for online marketplaces, quick-commerce apps and brands: next-day parcels, ten-minute local deliveries, heavy goods and shared dark stores.",
            view: "**The fastest grower, recently listed.** Revenue up 65–74% for three quarters, FY27 guidance raised to 38–40%, margins up from 3% to 7%, and net cash. But margins are thin and a few large platforms are its biggest customers. The price needs a little more than my ~30% estimate.",
            watch: 'Margin expansion of 1–2 points as guided; dependence on large platforms; dark stores filling.',
        },
        {
            company: 'Delhivery', rank: 3, stance: 'SCALEUP', segment: PARCEL,
            what: "India's largest third-party parcel and freight network, with express parcels, part-truckload freight, warehousing and cross-border services; it bought Ecom Express.",
            view: "**The biggest network, still not earning its capital back.** Revenue up 28%, free cash positive in FY25–FY26 and net cash, but return on capital is about 1% and Q1 service margin grew only 5%. Its profit is too small to value it on.",
            watch: 'Express margins toward 16–18%; the supply-chain unit recovering by Q3; competition from Amazon and Flipkart.',
        },
        {
            company: 'TVS Supply Chain Sol', rank: 4, stance: 'TURNAROUND', segment: CONTRACT,
            what: "Runs warehouses, factory supply lines and spare-parts networks for large companies (72% of revenue), plus sea and air freight forwarding (28%), in India, the UK, Europe and elsewhere.",
            view: "**Cheap on EV/EBITDA, winning orders, still thin on profit.** Revenue up 29%, record new business and a ₹7,500cr pipeline, but net debt is about 2.6 times operating profit and its 4% pre-tax margin target has moved to FY28. The price needs more than my ~25% estimate.",
            watch: 'Warehouse margin back to 9.5–10% by Q4; the ALA joint venture; debt.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Port terminals.** **Aegis Logistics: follow.** The best business in the group, with scarce assets and long contracts; buy it when the price allows for its distribution margin falling back.",
            "**Parcel delivery.** **Shadowfax: follow.** The fastest grower, with margins rising. **Delhivery: wait.** The biggest network, but its return on capital has yet to arrive.",
            "**Contract logistics.** **TVS Supply Chain: wait.** Record orders and a modest EV/EBITDA, but debt and a margin target that keeps moving.",
            "**What would change my view.** For the better: Aegis holding ₹7,000 a tonne as volumes grow; Delhivery's express margin reaching 16%. For the worse: Amazon or Flipkart pricing aggressively to fill their own networks, or a global slowdown hitting freight.",
            "**What to watch next quarter.** Aegis's distribution margin; Shadowfax's margin and guidance; Delhivery's working capital and service margin; TVS Supply Chain's warehouse margin.",
        ],
        bottomLine:
            "Separate the terminal owner from the delivery companies. Follow Aegis Logistics for its scarce assets and Shadowfax for its growth, and wait on Delhivery and TVS Supply Chain until their returns catch up with their scale.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/AEGISLOG/consolidated/' },
        { label: 'Wholesale price index, high-speed diesel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
    ],
};
