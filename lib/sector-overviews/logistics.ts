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
            'Aegis Logistics': 14,
            'Delhivery': null,
            'Shadowfax Tech.': 30,
            'TVS Supply Chain Sol': 25,
        },
    },
    standfirst:
        "Four companies under one label that do three very different jobs. Aegis owns port terminals that store LPG, chemicals and now ammonia, and sells LPG inland; this year's record profit rests partly on a war-time jump in its LPG margin. Delhivery and Shadowfax deliver parcels for online shops and quick-commerce apps: volumes are booming, but fuel and wage rises squeezed margins in Q1 FY27, and Shadowfax gets about two-thirds of its revenue from two customers. TVS Supply Chain runs warehouses and factory supply lines for large companies and forwards freight by sea and air, winning record orders but keeping only about 1% of revenue as pre-tax profit. None is a buy today; two are worth following. Written from the last two earnings calls, the latest presentations, the FY26 annual reports and rating reports, and sector work by NCAER, Redseer, ICRA and Colliers.",
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
                'Delhivery': 'Q1 FY27: ₹30–35cr of one-off costs from a month’s lag in passing on diesel, state minimum-wage rises and extra staff for elections and weather (company).',
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
            { company: 'Aegis Logistics', trend: 'widening', trendNote: 'Commissioned its ammonia terminal at Pipavav in August and approved new LPG and liquid tanks at JNPA and Kochi; terminal volumes fell 3% in Q1.',
                grades: { asset: { grade: 'A', note: 'Terminals at seven ports; waterfront is scarce' }, density: { grade: 'B', note: 'Pipeline and rail links inland' }, lock: { grade: 'A', note: '15–20-year take-or-pay deals (HPCL, Hindustan Zinc)' }, breadth: { grade: 'B', note: 'Oil companies and industry; one gas customer was 22% of FY26 revenue' }, pass: { grade: 'B', note: 'Distribution margin ~₹7,000 a tonne, partly war-driven' } } },
            { company: 'Delhivery', trend: 'widening', trendNote: 'Bought Ecom Express, removing a rival; says shippers move to it when others falter.',
                grades: { asset: { grade: 'A', note: 'National network; 322 million parcels in Q1' }, density: { grade: 'A', note: 'Largest third-party parcel network' }, lock: { grade: 'C', note: 'Mostly transactional' }, breadth: { grade: 'B', note: 'Marketplaces plus thousands of brands' }, pass: { grade: 'B', note: 'Says labour-code costs can be passed on' } } },
            { company: 'Shadowfax Tech.', trend: 'widening', trendNote: 'Raised FY27 revenue guidance to 38–40%; won Amazon Now’s quick-commerce deliveries.',
                grades: { asset: { grade: 'C', note: 'Asset-light; 16,372 pin codes' }, density: { grade: 'B', note: 'Adding about 8 pin codes a day' }, lock: { grade: 'C', note: 'Transactional contracts' }, breadth: { grade: 'D', note: 'Two customers gave about 64% of FY26 revenue' }, pass: { grade: 'B', note: 'Fuel clauses with large clients' } } },
            { company: 'TVS Supply Chain Sol', trend: 'stable', trendNote: 'Record order wins and a ₹7,500cr pipeline, but its margin target moved to FY28.',
                grades: { asset: { grade: 'C', note: 'Asset-light warehouses and systems' }, density: { grade: 'B', note: 'Global forwarding network' }, lock: { grade: 'B', note: 'Systems embedded in customers’ supply chains' }, breadth: { grade: 'A', note: 'Large multinational customers across industries' }, pass: { grade: 'C', note: 'Forwarding margins follow freight rates' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Follow Aegis Logistics: the best business here, but this year's profit is partly a war windfall.** **Aegis** owns LPG, chemical and now ammonia terminals at seven ports, where waterfront land is scarce, tied to customers by contracts that run as far as 2038. Its Q1 FY27 profit more than tripled to ₹545cr and its operating margin went from 14% to 30% in four quarters, but much of that came from selling LPG inland at over ₹7,000 a tonne, against about ₹4,000 until FY25, while the West Asia war cut India's LPG supply. The steady toll business, gas passing through its terminals, actually fell 3% in Q1 against the 25% a year management calls its ‘worst case’. Outsiders own 55% of Aegis Vopak Terminals, where most new tanks sit, and on 28 September the board approved raising up to ₹6,000cr in shares, convertibles or debt, subject to a shareholder vote at an EGM on 21 October. On 13 October it signed to buy 89.8% of Tristar, a Dubai-based liquid-logistics group in 30+ countries (shipping, road tankers, fuel storage, distribution and aviation fuelling; 2025 revenue about US$1.4bn, EBITDA US$257mn, net profit US$82mn) for US$809mn, about 11 times Tristar's 2025 profit, with completion expected in Q4 FY27. That turns an Indian terminal owner into an international fuel-logistics group with a lower-margin business added, so the case now also rests on that deal and how it is paid for. The price needs about {need:Aegis Logistics|21}% a year against my ~14%, so it is priced above what I expect; **I would buy it when the price allows for the LPG margin falling back.**",
                "**Follow Shadowfax: the fastest grower, with the most concentrated customer list.** Revenue rose 65% in Q1 to ₹1,358cr, management raised its FY27 revenue guide from 27–30% to 38–40%, and its own after-rent margin rose from 2.9% to 4.9% in a year. It holds ₹1,537cr of cash and investments after its January listing and has no bank debt. But the FY26 annual report shows that two customers gave about 64% of revenue, both run their own delivery arms, and Flipkart, a large customer and early investor, sold down its stake in July. Its auditor also flagged that revenue is worked out manually from delivery reports. The price needs about {need:Shadowfax Tech.|33}% a year against my ~30%: fully priced, and leaning on two relationships.",
                "**Wait on Delhivery and TVS Supply Chain.** **Delhivery** is winning volume: parcels rose 55% (including Ecom Express, which it bought) and it holds ₹4,677cr of cash with working capital of just nine days. But its own adjusted operating profit halved from ₹151cr in Q4 to ₹76cr in Q1 as fuel and wage costs rose, its express margin fell below the 16–18% band it called ‘firmly’ reached a quarter earlier, its co-founder and operating chief left in September, and FY26 profit after tax (₹153cr) was less than half its treasury income (₹340cr). Its profit is too small to value it on. **TVS Supply Chain** grew revenue 29% on record wins and a pipeline above ₹7,500cr, and India Ratings moved its outlook to positive. But it keeps about 1% of revenue as pre-tax profit, FY26 profit leaned on a one-off ₹177cr gain, and it has pushed its 4% pre-tax margin goal to FY28. The price needs about {need:TVS Supply Chain Sol|30}% a year against my ~25%, only just inside a full price, and from a very small profit.",
                "**Three things to hold onto before reading the rest.** First, **Aegis is not a delivery company**: it is closer to an energy utility with a trading arm, so judge it on contracts, tank use and the LPG margin, not on parcel growth. Second, **the parcel companies win on density but do not yet set prices**: more parcels on each route lowers the cost of each, yet Q1 showed that fuel and wage rises hit margins before they can be passed on. Third, **every company here reports its own version of profit**: Aegis's ‘normalised’ EBITDA, Delhivery's ‘adjusted’ EBITDA (₹76cr in Q1 against ₹139cr of filed operating profit), Shadowfax's after-rent figure and TVS Supply Chain's adjusted EBITDA all differ from the filed accounts. This note uses filed figures from Screener unless it says otherwise. The annual reports also turned up issues the calls barely touched: Shadowfax's customer concentration, Aegis's sales of assets within its own group, Delhivery's unresolved tax disputes and an adverse audit remark on a TVS Supply Chain loan to a subsidiary.",
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
                "Logistics is anything that moves or stores goods, and these four do it at three very different points. The government's first proper study (NCAER for DPIIT, September 2025) put India's logistics cost at ₹24.01 lakh crore in 2023-24, or 7.97% of GDP, well below the 13–14% often quoted; road freight costs ₹3.78 a tonne-km against ₹1.96 by rail, and fuel is 42% of road cost. Two pockets grow much faster than the economy. **Parcels**: Redseer counts 10–11 billion express shipments in FY25 and expects 24–29 billion by FY30, with e-commerce parcels growing 23–24% a year, while quick commerce (ten-minute delivery apps) grew about 120% in FY26 to $13–14bn, about 17% of online retail. **Imported energy**: India used 33.21 million tonnes of LPG in FY26 (up 6%, PPAC), imports about 60% of it and normally routes about 90% of those imports through the Strait of Hormuz, which the West Asia war disrupted this year. The near term is harder: ICRA expects road-logistics revenue to grow 8–10% in FY27, mostly from higher freight rates, with operating margins down 150–200 basis points (1.5–2 percentage points) after a ₹7.5-a-litre diesel rise in May. **My view: volume is not the problem in this sector; passing on costs is.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**Ports**: ships unload LPG, chemicals and ammonia into shore tanks (Aegis), which are then moved inland by pipeline, rail or truck; Aegis Vopak's terminals handled about 61% of India's LPG imports and 23% of its liquid imports in June 2024, according to its listing document. **Line-haul and last mile**: parcels are collected from sellers, sorted at hubs, trucked between cities and delivered to doors (Delhivery, Shadowfax). **Contract logistics**: warehouses and factory supply lines run for one large customer, plus sea and air freight booked for it (TVS Supply Chain). **The profit sits with scarce assets.** Aegis's liquid tanks earned about a 62% operating margin in FY25 (CARE) and its LPG terminals about ₹1,000 on every tonne handled, while the parcel companies keep a few rupees of each ₹50–60 parcel and TVS Supply Chain's 7% operating margin shrinks to about 1% before tax once warehouse leases and interest are paid. **My view: own the bottleneck when the price allows; in the networks, pay only for margin that has been proven.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Online retail reached about $80bn of sales in FY26 (up 21%) with 320–340 million shoppers, and Redseer expects quick commerce to reach 25–30% of online retail by FY30. Two shifts inside that help the listed carriers: direct-to-consumer brands and small sellers, whose volume grows 40–45% a year at Delhivery and who pay 15–20% more per parcel at Shadowfax, and quick-commerce apps handing out deliveries (12–15% of their volume today, possibly 20–25%, Shadowfax estimates). Both parcel companies also say marketplaces are moving volume back to outside carriers as their own labour and fuel costs rise; that is their claim, not something shown independently. Contract logistics follows manufacturing: third-party logistics firms took 30% of India's Grade A warehouse leasing in the first half of 2026 (Colliers). For Aegis the steadier demand is industrial: LPG for factories and autogas, and ammonia, where CRISIL expects a shortfall of about 3 million tonnes by 2029. **My view: parcel demand is secure for years; the open question is who carries it, the outside carriers or the marketplaces' own fleets.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Parcels are steady; freight forwarding and LPG margins are cyclical.** Sea and air freight rates rose with the West Asia war, which lifted TVS Supply Chain's forwarding margin, and LPG prices went from ₹54,000–60,000 a tonne to ₹1,50,000 and back to ₹80,000–90,000, which lifted Aegis's selling margin. Policy moves costs more than demand. The labour codes, in force since 21 November 2025, make delivery platforms pay 1–2% of turnover into a gig-worker fund (capped at 5% of what they pay gig workers), and four states raised minimum wages in Q1, costing Shadowfax about ₹2–2.5cr a month. GST on trucks fell from 28% to 18% in September 2025, which cuts fleet costs. For LPG, a March 2026 order requires homes in piped-gas areas to switch within three months of notice, and subsidised cylinders were cut; that trims household LPG, though Aegis mainly sells to industry. **My view: this year's windfalls (Aegis's margin, TVS Supply Chain's freight rates) will fade before the cost rises do.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Aegis** depends on India's LPG and chemical imports, on the war premium in its selling margin fading slowly, and on filling about $5bn of new tanks by 2030. **Delhivery** depends on online shopping, on the marketplaces' own fleets not taking back volume (its largest customer gave 19.2% of FY26 revenue), and on turning volume into margin. **Shadowfax** depends on two very large customers that gave about 64% of FY26 revenue, and on quick-commerce apps outsourcing more. **TVS Supply Chain** depends on global manufacturing and trade, on new contracts reaching normal margins, and on freight rates. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Position', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Port terminals and gas distribution', 'Aegis', '13–30%', '13%', '**83%**', 'Scarce waterfront and long contracts; the recent jump is a war-time LPG margin'],
                        ['Parcel and last-mile delivery', 'Delhivery, Shadowfax', '3–8%', '1–10%', '**Not meaningful (early losses)**', 'Density lowers cost per parcel, but big platforms set the price'],
                        ['Contract logistics and forwarding', 'TVS Supply Chain', '7–8%', '10%', '**84%**', 'Warehouse leases and interest take most of operating profit; about 1% is left before tax'],
                    ],
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India’s logistics cost', '₹24.01 lakh crore in 2023-24, 7.97% of GDP; road ₹3.78 a tonne-km, rail ₹1.96', 'National Logistics Policy aims for global cost benchmarks and a top-25 World Bank ranking by 2030', 'NCAER for DPIIT, Sep 2025'],
                        ['Express parcels', '10–11 billion shipments in FY25, e-commerce 4.8–5.5 billion', '**24–29 billion by FY30**; e-commerce parcels +23–24% a year to 15–16 billion', 'Redseer (via IBEF), Apr 2025'],
                        ['Online retail and quick commerce', 'About $80bn in FY26 (+21%); quick commerce $13–14bn (+~120%)', 'Quick commerce **25–30% of online retail by FY30**', 'Redseer, May 2026'],
                        ['Road logistics', 'Diesel up about ₹7.5 a litre in May 2026; fuel 50–60% of fleet costs', 'FY27 revenue **+8–10%**, operating margins **down 150–200 bps**', 'ICRA, Jun 2026'],
                        ['Warehousing', 'About 22m sq ft of Grade A leasing in H1 2026 (+12%); third-party logistics firms 30%', 'New supply of about 25m sq ft running ahead of demand', 'Colliers, Jul 2026'],
                        ['LPG', '33.21 million tonnes in FY26 (+6%); about 60% imported; Jan–Jun 2026 down 8%', 'Piped-gas order (Mar 2026) moves homes in covered areas off LPG; subsidised cylinders cut', 'PPAC and Business Today, Mar–Jul 2026'],
                        ['Ammonia', 'Capacity about 12–13 million tonnes against demand of 15–17 million', 'A gap of about **3 million tonnes by 2029**', 'CRISIL, cited by Aegis'],
                        ['Labour and tax rules', 'Labour codes in force 21 Nov 2025; GST on trucks cut from 28% to 18% (Sep 2025)', 'Platforms pay 1–2% of turnover to a gig-worker fund, capped at 5% of gig payouts', 'EY and Taxmann summaries'],
                    ],
                    note: 'Company forecasts (Delhivery, Shadowfax, TVS Supply Chain, Aegis) are in section 6; they are not independent.',
                },
                {
                    caption: 'What each business moves, and what moves its margin (Q1 FY27, company presentations and calls)',
                    columns: ['Company and business', 'Q1 FY27 volume or revenue', 'Growth, year on year', 'What moves the margin'],
                    rows: [
                        ['Aegis: LPG distribution', '2.77 lakh tonnes', '+91%', 'Margin per tonne: about ₹4,000 until FY25, now above ₹7,000 (company), partly war-driven'],
                        ['Aegis: LPG terminals', '1.124 million tonnes handled', '**−3%** (1.23 million tonnes in Q4)', 'Contracted fees; about ₹1,000 a tonne'],
                        ['Aegis: liquids terminals', '₹178cr revenue, ₹136cr operating profit', '+24% revenue, +28% profit', 'Tank use; Mumbai already runs full'],
                        ['Delhivery: express parcels', '322 million parcels, ₹1,869cr', '+55% (includes Ecom Express)', 'Density and wages; service margin 15.6% against a 16–18% target'],
                        ['Delhivery: part-truckload freight', '5.42 lakh tonnes, ₹633cr', '+18% volume, +25% revenue', 'Diesel (passed on a month later) and price, near ₹12 a kg'],
                        ['Shadowfax: express parcels', '₹997cr, 19.8 crore orders', '+87% revenue', 'Rider pay, linehaul (18.8% of revenue), lost-parcel costs (5.5%)'],
                        ['Shadowfax: quick commerce and food', '₹272cr, 4.9 crore orders', '+53% revenue', 'Rider density at peak hours'],
                        ['TVS Supply Chain: supply-chain services', '₹2,417cr revenue', '+22%', 'Start-up costs of new contracts; 8.1% margin'],
                        ['TVS Supply Chain: freight forwarding', '₹918cr revenue', '+51%', 'Ocean and air freight rates; 4.1% margin'],
                    ],
                    note: 'Company figures from the Q1 FY27 presentations and calls. Delhivery’s service margin is its own measure before corporate costs of about 9% of revenue.',
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
                    label: 'Lasting: waterfront, cold tanks and long contracts',
                    text: "**Aegis** runs terminals at seven ports with about 2.49 lakh tonnes of LPG storage, about 2 million cubic metres of liquid tanks and a new 36,000-tonne ammonia terminal (CARE). Its large refrigerated tanks at Mangalore (82,000 tonnes), Pipavav and Kandla can take a whole very large gas carrier in one go, which cuts freight and waiting charges and matters more as US cargoes on big ships grow. Contracts are long: HPCL has Haldia exclusively to 2038, Hindustan Zinc has a 15-year take-or-pay deal (paid whether used or not) for a third of the ammonia terminal, and a new rail loading point at Pipavav carries a 15-year take-or-pay above 0.5 million tonnes a year. It says it is the only third-party LPG terminal with rail links. **My view: this is the one real asset moat in the group, but more of it now sits in Aegis Vopak Terminals, where Aegis owns only about 45%.**",
                },
                {
                    label: 'Lasting but contested: network density',
                    text: "**Delhivery** handled about 1 billion parcels and 2 million tonnes of part-truckload freight in FY26, and Q1 volume grew 5.2% on the previous quarter in what is usually a weak quarter; its chief executive says it took share from both rival carriers and marketplaces' own arms. In part-truckload, its gross margin went from 14% to 28% in about two and a half years as tonnage rose about 1.8 times, which is what density does. **Shadowfax** says its share of outsourced e-commerce parcels rose to 28–30% from 17–18% a year earlier (about 8% in FY22), it reaches 16,372 pin codes, and it claims more than half of the deliveries quick-commerce apps outsource. After Delhivery bought Ecom Express, only three listed express carriers remain, plus the unlisted Xpressbees. **My view: density is real and rising, but the challenge comes from the marketplaces' own fleets, not from other carriers.**",
                },
                {
                    label: 'Pricing: stable, not yet power',
                    text: "Delhivery's chief executive says ‘we don't see significant pricing pressure in the market any longer’, and its part-truckload price rose 37 paise a kg in Q1, only 6 paise of it from fuel; fuel clauses cover 97–98% of its freight customers. But revenue per express parcel fell from about ₹67.5 to ₹58, which management puts down to lighter Ecom Express parcels rather than price cuts. **Shadowfax**'s revenue per express order slipped from about ₹52.2 to ₹50.4 as parcels got lighter; its rate cards give big clients lower prices as volumes rise, and it chose to absorb five days of the diesel rise to protect relationships. **My view: the price war is over, but neither parcel company has shown it can raise prices beyond passing on costs, and wage rises carry no automatic clause.**",
                },
                {
                    label: 'Switching costs: real in warehouses, absent in freight',
                    text: "**TVS Supply Chain** runs 435 warehouses (25.1 million sq ft, about 85% used) for 100 Fortune 500 clients, up from 91 a year ago, on contracts averaging about four years in India, five-plus in North America and 7.5 in Europe. About two-thirds of new wins come from existing clients, a sign that they add work once its systems sit inside their plants, and Q1's ₹543cr of new business equalled 21% of the same quarter's revenue a year earlier. But it lost ₹126cr of revenue to churn in the same quarter, and management admits churn in forwarding is ‘constant’. Forwarding (about 28% of revenue) has no moat: its margin follows freight rates. **My view: a real but narrow moat, strong enough to keep clients, not to lift margins.**",
                },
                {
                    label: 'Customer breadth: the weak point',
                    text: "Concentration is the hidden risk in this group. **Shadowfax**'s two largest customers gave about ₹2,709cr, or 64% of FY26 revenue (about 60% in FY25); if Flipkart (about ₹494cr up to the listing, roughly 12%, per the related-party note) is one of the two, the other alone is about half of revenue. **Delhivery**'s largest customer rose to 19.2% of sales from 17.7%; its chief executive says his comfort limit is 35%. **Aegis** had one gas customer at 22% of FY26 revenue against 10% a year earlier, though that is LPG sales, not terminal fees. **TVS Supply Chain** is the most spread: automotive 32%, consumer 25%, technology 14% and industrial 12%. **My view: a Shadowfax shareholder is partly betting on one unnamed platform's delivery plans.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Amazon** (now offering its logistics to outside sellers), **Ekart** (Flipkart), **Valmo** (Meesho), **Xpressbees** and **Blue Dart** in parcels; **Mahindra Logistics**, **Allcargo**, **DHL**, **Kuehne+Nagel** and **DSV** in contract logistics and forwarding; **Indian Oil**, **BPCL** and **HPCL** (Aegis's biggest terminal customers and also its rivals in selling LPG), **Adani** at Mundra and other tank-farm owners in terminals. Delhivery's chief executive calls Amazon's move ‘an old product in a new wrapper’ and says Xpressbees has no structural advantage over the three listed carriers.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The terminal business and the networks have very different ceilings, and this year both carry temporary effects: a war windfall at Aegis and in TVS Supply Chain's forwarding arm, and a fuel and wage shock at the parcel companies.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: terminals and density',
                    text: "**Aegis**'s terminal fees are fixed or index-linked, and its liquids business grew operating profit for a fifth straight quarter (₹136cr in Q1, up 28%, on revenue up 24%). **Shadowfax**'s after-rent margin rose from 2.9% to 4.9% in a year and its lost-shipment and penalty costs fell from 7.9% of revenue to 5.5% (target 3.5–4%); management guides 1–1.2 points a year to FY28, then 2–2.5 points a year towards ‘early double-digit’. **Delhivery**'s service margins, before corporate overheads of about 9.3% of revenue, were 15.6% in express and 11.2% in part-truckload in Q1, against targets of 16–18% and a 15–15.5% freight exit rate. Its overheads have stayed at 9.3–9.4% of revenue for two years, and that is the real gap between a good network and a good company. **My view: Shadowfax's margin is rising on scale; Delhivery still has to show that overheads can fall from 9% to 7% of revenue, as management says.**",
                },
                {
                    label: 'Cyclical: a war windfall in gas and freight',
                    text: "**Aegis**'s LPG selling margin rose from about ₹4,000 a tonne to about ₹7,000 in FY26 and above that in Q1, when India's LPG shortfall reached 50% in April and 30% in May; its gas operating profit rose 296% to ₹591cr. **Treat Q4 FY26 and Q1 FY27 as windfall quarters.** Management calls ₹7,000 sustainable and ₹7,000-plus for FY27 ‘almost a certainty’, and hopes cheaper freight on very large carriers (about $15 a tonne against $50) will replace the war premium from FY28, but its CFO added ‘please don't take me on that’. **TVS Supply Chain**'s forwarding margin rose from 2.4% in Q4 to 4.1% as freight rates and Indian ocean volumes rose during the war; management expects it to hold ‘around this number’. **My view: about half of Aegis's profit jump over the last four quarters looks like windfall, and I do not build it into my growth estimate.**",
                },
                {
                    label: 'Not structural: start-up costs, one-offs and a one-off gain',
                    text: "**TVS Supply Chain**'s supply-chain margin fell from 9.3% in Q4 to 8.1% because Q4 carries customers' annual price corrections and Q1 carried start-up costs on new contracts; management now expects 9% in Q2 and 9.5–10% by Q4. Its FY26 profit of ₹117cr included a one-off ₹177cr gain on units of an infrastructure trust (InvIT) in Q1 FY26, so the business itself earned about ₹69cr, and bad-debt provisions of about ₹56cr took almost as much again. **Delhivery** puts ₹30–35cr of its Q1 costs down to one-offs (a month's lag in passing on diesel, minimum-wage rises in Haryana, Karnataka, Uttar Pradesh and Punjab, extra staff for elections and weather), and its warehousing unit slipped into loss as two large contracts started. Its Ecom Express integration costs ended at ₹165cr against ₹300cr guided, with none to come from Q2. **My view: Delhivery's one-offs are plausible, but wage rises are not one-off; Q2 and Q3 will show how much of the margin comes back.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "Parcel companies are paid by large platforms on credit and pay riders weekly: **Delhivery**'s debtor days were 48 in FY26 and **Shadowfax**'s 45. **Shadowfax** turned only ₹50cr of Q1 profit into operating cash, as working capital took ₹46cr, and it spent ₹71cr on capex ahead of the festive season. **TVS Supply Chain** holds about 95 days of inventory for its spare-parts business and booked about ₹56cr of expected credit losses in FY26, ₹17.6cr of it in Q4 alone.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Shadowfax**'s cash cycle lengthened from 36 days in FY24 to 45–48 days in FY25–FY26 as it grew with large customers on 0–60-day terms. **TVS Supply Chain**'s short-term warehouse rents pushed quarterly other expenses from ₹257cr to ₹329cr in a year, and it funds new contracts partly with short-term debt.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**Delhivery**'s net working capital fell to 9 days in Q1 from 38 days three years ago, helped by faster billing, prepaid customers and leaving quick-commerce warehousing; it produced ₹911cr of operating cash in FY26. **Aegis**'s cycle fell from 20 days in FY25 to −12 in FY26, and it turned 140% of FY26 operating profit into cash and ₹1,212cr into free cash after capex, the best in its history against −₹386cr in FY25. Part of that came from customer advances and minority partners' capital, so it will not repeat every year.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Forwarders owe shipping lines large sums at any time, which is why **TVS Supply Chain** shows payable days of about 320 and a cash cycle near −170 days. Its ₹481cr of FY26 free cash (Screener) is before right-of-use depreciation and lease interest of about ₹140cr a quarter, so the cash left for shareholders is far smaller than it looks. **Delhivery**'s ₹506cr of Screener free cash shrinks to ₹89cr on the company's own measure after leases and integration costs. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Aegis Logistics', 'Cash and investments about ₹5,940cr across group companies (about ₹2,700cr in the parent) against borrowings of ₹4,150cr at March; cumulative capex about $1.2bn by March 2027 and up to ₹5,000cr more in FY28; debt target about 0.6 times equity; board approved up to ₹6,000cr of equity or debt on 28 Sep; ₹3,500cr raised in a share sale to institutions on 16 Nov 2026 at ₹1,210 (2.89cr new shares, about 8% more)', 'Net cash ₹45cr at March (Screener basis); about ₹1,790cr counting investments, before the ₹3,500cr raise'],
                        ['Delhivery', 'Cash ₹4,677cr (₹4,555cr in March); no bank term loans; net working capital 9 days; Ecom Express integration ₹17cr in Q1, ₹165cr in all; up to ₹160–175cr for new businesses this year (₹130–160cr in May), and spending ‘well within that’; capex 3.1% of revenue', 'Net cash ₹1,742cr (Screener basis)'],
                        ['Shadowfax Tech.', 'Cash and investments ₹1,537cr (₹1,574cr in March); no bank debt; about ₹60cr of capex in Q1, 77% on sort centres and automation, of ₹180–190cr for the year', 'Net cash ₹786cr (Screener basis)'],
                        ['TVS Supply Chain Sol', 'Net debt excluding leases about ₹350–370cr at March, mostly short-term; India Ratings AA with outlook raised to positive; credit losses to be ‘slightly lower’ this year; no dividend', 'Net debt ₹2,031cr (including leases)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Balance sheet from Screener at March 2026; debt includes leases where filed, and Screener counts only part of each company’s treasury investments as cash.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what each company is spending to get it, how each did against what it promised on the Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: India’s energy imports',
                    text: "**Aegis** expects cumulative capex of about $1.2bn by March 2027, up to ₹5,000cr more in FY28 and a pipeline of about $5bn by December 2030, mostly in FY29–FY31. FY26 capex was ₹964cr (₹1,732cr in FY25), with ₹1,379cr more committed. The largest project is at JNPA: 3.18 lakh cubic metres of liquid tanks, 77,236 tonnes of LPG storage and a bottling plant for ₹1,675cr, plus a new 52,000-tonne LPG tank; the first liquid phase has slipped from H1 to Q3 FY27. The 36,000-tonne ammonia terminal (₹525cr) opened on 10 August with a third under a 15-year take-or-pay with Hindustan Zinc; Japan's ITOCHU owns 10% of it and intends to reach 25%. Distribution volume is meant to go from 0.75 million tonnes in FY26 to over 1 million this year and about 1.5 million in FY28, reaching 2 million ‘next year or the year next’. **My view: the tanks are real, but return on capital has fallen from 20–24% a decade ago to 13% as capital arrived ahead of volume, and the possible ₹20,000cr Vadhavan port role is still a non-binding agreement.**",
                },
                {
                    label: 'Growth driver: online shopping and quick commerce',
                    text: "**Delhivery** expects express volume at the better end of +20–30% and part-truckload +18–22% (Q1: +18.4%), with direct-to-consumer and small-seller volume growing 40–45% a year. It is spending less to get there: capex fell from 7.8% of revenue in FY23 to 4.7% in FY26 and 3.1% in Q1, now on automation (its first 6,000-pallet automated store), heavier-parcel capacity and more than 5,000 electric cargo vehicles with partners. **Shadowfax** raised its FY27 revenue guide to 38–40% after Q1's 65%, which implies sharp slowing as the base grows; quick-commerce and food deliveries rose 53% and Amazon Now joined its top ten customers. It will spend ₹180–190cr this year, flat on FY26, mostly on sort centres; its space rose from 45 to 53 lakh sq ft in six months, and new sites take six to eight months to fill trucks efficiently. **My view: both networks will outgrow Redseer's 23–24% market for a while by taking share, but Shadowfax's own guide already builds in a slowdown.**",
                },
                {
                    label: 'Growth driver: outsourced supply chains',
                    text: "**TVS Supply Chain**'s sales pipeline rose from ₹6,100cr to over ₹7,500cr between the two calls; it has historically converted 20–25% within 12–18 months. Q1 revenue rose ₹743cr on a year earlier: ₹543cr from new business, ₹295cr from price and volume and ₹31cr from Swamy & Sons (bought in May), less ₹126cr lost to churn. India grew 44%, with forwarding from India up 84%. Its joint venture with Italy's ALA Group in aerospace and defence parts starts earning in the second half, and management talks of ‘almost ₹2,000 crores in year 5’. Capex is small, but growth comes through leased warehouses tied to contracts, which adds lease cost below operating profit. **My view: revenue growth is visible; profit growth depends on new contracts reaching 9–10% margins, and that has slipped once already.**",
                },
                {
                    label: 'Growth driver: new services',
                    text: "**Delhivery**'s same-city truck service (Delhivery Local) reached about ₹140cr of annual revenue run-rate against a ₹200cr-plus target for FY27, and its first city, Ahmedabad, should break even in Q3; the chief executive quoted higher figures on the call (₹150cr and ₹250cr) than the written letter. New businesses together earned ₹32cr of revenue and lost ₹32cr in Q1, up to ₹160–175cr is now earmarked for them this year (₹130–160cr in May), and a lending licence for truck owners arrived in July. **Shadowfax**'s same-day service for brands (Prime) grew 2.7 times, its heavy-goods service reached about ₹75cr of annual revenue (up 170%) and 10,000 pin codes, a full-year target it hit in Q1 and raised to 12,000, and it ran 47 shared dark stores (small city warehouses for fast delivery) with 20 more in progress towards 100. **My view: none of these moves the numbers yet; watch whether they add margin or only cost.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Shadowfax** grew revenue 65% and raised its guide, lifted its after-rent margin by 2 points against 1–1.2 promised, cut lost-shipment costs as promised and met its full-year heavy-goods target in the first quarter. **Aegis** opened the ammonia terminal on time (promised for H1) and kept Mumbai's 64,000 cubic-metre expansion on schedule. **TVS Supply Chain** grew revenue 29% against an ‘early teen’ guide and raised the guide to mid-teens. **Delhivery** delivered its volume promises and spent far less on the Ecom Express integration than it said it would.",
                },
                {
                    label: 'Cautious',
                    text: "**Aegis** gave detailed ammonia margins in June (₹2,500–3,000 a tonne through the terminal) but in August would not: ‘wait for a quarter’. **Shadowfax** kept its margin path unchanged despite raising its revenue guide, saying any extra profit will be reinvested or passed to customers. **TVS Supply Chain** expects forwarding margins to stay ‘around this number’ and calls a recession its biggest risk.",
                },
                {
                    label: 'Missed',
                    text: "**Delhivery** said in May that its express margin was ‘firmly’ at the top of 16–18%; Q1 came in at 15.6%, its adjusted operating profit halved in a quarter and corporate overheads did not fall. **Aegis** called 25% a year the ‘worst case’ for terminal volumes; Q1 fell 3%, and the first JNPA phase slipped a quarter. **TVS Supply Chain** promised a 9.5–10% supply-chain margin ‘moving forward’ and delivered 8.1%; the target is now ‘by Q4’, and its 4% pre-tax margin moved from this year to FY28.",
                },
                {
                    label: 'Mixed',
                    text: "**Aegis**'s record quarter came mostly from a margin it does not control, and its 2-million-tonne distribution goal softened from ‘by FY28’ to ‘next year or the year next’. **Delhivery** and **TVS Supply Chain** both beat on volume or revenue and missed on margin, the pattern of a sector where growth comes easily and pricing does not.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Aegis to compound earnings at about 14% a year, Shadowfax at about 30% and TVS Supply Chain at about 25% from a small base; Delhivery's profit is too small to estimate from.** For Aegis, distribution volume heading to 2 million tonnes and new tanks should outgrow a fall in the LPG margin from FY28, but part of the profit goes to Aegis Vopak's other holders and the ₹3,500cr share sale of 16 Nov 2026 adds about 8% more shares. I cut Aegis from 18% on 24 Oct: management's own goal of 25% a year from FY26's ₹25.59 a share works out to only about 16% a year from today's war-boosted trailing profit to FY30, and that goal assumes the ₹7,000-a-tonne margin holds and terminal volumes grow 25% a year (they fell 3% in Q1). New tanks also bring more depreciation and interest, cash spent on them earns less interest, and more of the profit lands in Aegis Vopak. The Tristar purchase is left to the high case. Shadowfax can grow profit faster than revenue as margins rise, but two customers can change that in a quarter. For TVS Supply Chain, lifting the pre-tax margin from 1% to even 2.5–3% would multiply profit, which is why the percentage is high; its record of slipping keeps me at 25%. The research confirmed both the growth and the risks, so the other two estimates have not changed.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Aegis Logistics', 'Distribution towards 2 million tonnes; JNPA, Kochi and ammonia tanks; LPG margin easing from FY28; minority share in Aegis Vopak; trailing profit war-boosted, Tristar only in the high case', '6% / **14%** / 22%'],
                        ['Shadowfax Tech.', 'Revenue +38–40% this year, then slower; margin +1–1.2 points a year; two customers', '18% / **30%** / 40%'],
                        ['TVS Supply Chain Sol', 'Pre-tax margin rising from 1%; new contracts; ALA venture', '10% / **25%** / 35%'],
                        ['Delhivery', 'Transport margin towards 10%; overheads from 9% to 7% of revenue', 'Profit smaller than treasury income; too small to estimate from'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Aegis Logistics', 'Earnings per share +25% a year; distribution above 1 million tonnes this year and 2 million by FY28–FY29 (was ‘by FY28’); margin ₹7,000+ a tonne; terminal volume +25% a year at worst', 'About $1.2bn cumulative by March 2027; up to ₹5,000cr in FY28; $5bn by 2030', '**Mixed**: ammonia terminal on time; terminal volume −3% against +25%; JNPA a quarter late'],
                        ['Delhivery', 'Express volume +20–30% (better end); freight +18–22%; express margin 16–18% in H2; freight exit margin 15–15.5%', 'Below 4.5% of revenue (3.1% in Q1)', '**Missed**: volumes on plan; express margin 15.6% after ‘firmly at the upper end’'],
                        ['Shadowfax Tech.', 'FY27 revenue +38–40% (raised from 27–30%); after-rent margin +1–1.2 points a year to FY28', '₹180–190cr (about ₹60cr in Q1)', '**Beat** (Q2): revenue +57%, H1 +60%; after-rent margin 5%, a first; guide kept until Q3'],
                        ['TVS Supply Chain Sol', 'Revenue mid-teens (raised from early teens); supply-chain margin 9.5–10% by Q4 (was ‘moving forward’); 4% pre-tax margin by FY28 (was this year)', 'Small; growth through leased space', '**Slipping**: revenue beat; supply-chain margin 8.1%; pre-tax target a year later'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several came from the annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Big customers and their own fleets',
                    text: "**Shadowfax** earned about 64% of FY26 revenue from two customers, both of which run their own delivery arms; Delhivery's chief executive says his firm caps exposure to the ‘single account’ that drove Shadowfax's growth. Flipkart, a large customer and a related party until the listing, and two other early investors sought to sell up to 9.08% of Shadowfax in July at a ₹197 floor, leaving Flipkart with about 2%. **Delhivery**'s largest customer is 19.2% of sales and rising, and Amazon, Ekart and Meesho's Valmo are all pushing their own networks. Management at both says volume is moving towards outside carriers, but neither can show it independently. **My view: one insourcing decision could remove a third or more of Shadowfax's revenue, and the price does not allow for that.**",
                },
                {
                    label: 'Labour and fuel',
                    text: "The labour codes make platforms pay 1–2% of turnover into a gig-worker fund, four states raised minimum wages in Q1 (about ₹2–2.5cr a month for Shadowfax), and diesel rose about ₹7.5 a litre in May. Fuel clauses pass diesel on within days or a month, but wage rises must be negotiated customer by customer. **Delhivery** took ₹30–35cr of one-off costs and its contract labour rose to 12.8% of revenue from 12.2%; **Shadowfax** absorbed five days of diesel. ICRA expects road-logistics margins to fall 150–200 basis points this year. **My view: at a 5% margin, a 1% cut in Shadowfax's prices across the board would take away about a fifth of its operating profit, so cost pass-through is the whole story.**",
                },
                {
                    label: 'Windfalls that will fade, and a policy headwind',
                    text: "**Aegis**'s ₹7,000-a-tonne LPG margin grew out of a supply shock that is easing (LPG refill bookings were back to 98% by mid-2026), and the ‘freight savings’ meant to replace it are management's estimate, not a contract. India's LPG use fell 8% in January–June 2026, and the March 2026 piped-gas order plus a cut in subsidised cylinders trims household demand; the Morbi ceramic makers, big industrial buyers, switch between LPG and natural gas on price. **TVS Supply Chain**'s forwarding margin rose on war-time freight rates that can reverse. **My view: FY28 is the year to test both companies' normal earnings.**",
                },
                {
                    label: 'Aegis: group structure, related parties and a fund-raise',
                    text: "Outsiders own 55.29% of Aegis Vopak Terminals, and FY26 profit to minority holders was ₹208cr of ₹1,107cr. Aegis's own construction arm builds terminals and sells them within the group at prices set in-house and called arm's length: the ammonia terminal for ₹525cr, a ₹142.5cr advance for the JNPA tank and ₹37.2cr for Kochi; it also gave ITOCHU an ₹80.3cr guarantee for Aegis Vopak's obligations. The chairman's pay rose to ₹10cr from ₹6.6cr. Contingent liabilities include ₹98cr of GST and sales-tax demands (up from ₹77cr) and a ₹142cr air-pollution case before the Supreme Court. The auditor's opinion is clean, but CARO flags cash losses at the Pipavav terminal subsidiary. Ratings are strong (CARE AA stable; India Ratings AA positive), yet on 28 September the board approved raising up to ₹6,000cr of equity or debt (EGM vote on 21 October) despite about ₹5,900cr of cash. **My view: the $5bn plan needs outside money, and more of the growth lands where Aegis shareholders own less than half.**",
                },
                {
                    label: 'Accounting and audit findings at the parcel companies',
                    text: "**Delhivery**'s auditor (Deloitte) gave a clean opinion but made Ecom Express goodwill (₹1,042cr of ₹2,384cr) a key audit matter. Its CARO report notes title deeds of properties bought from FedEx in 2021 still not transferred, ₹0.8cr of professional tax unpaid, disputed GST of about ₹108cr and income tax of about ₹109cr, while the contingent-liability note shows only about ₹39cr; one subsidiary kept no audit trail for April–October 2025. Its co-founder and operating chief left in September, and key management pay nearly doubled to ₹18.3cr. **Shadowfax**'s auditor (B S R) made manual revenue calculation its key audit matter and could not confirm database-level audit trails for January–March 2026; its contingent liabilities are small (₹2.15cr). **My view: neither is a red flag on its own, but both call for reading the filed accounts, not the company's adjusted figures.**",
                },
                {
                    label: 'TVS Supply Chain: thin profit, leases and a global slowdown',
                    text: "Pre-tax margin is about 1%, so a small miss erases profit. Right-of-use depreciation (₹114cr in Q1) and interest (₹63cr) take most of operating profit, and expected credit losses were about ₹56cr in FY26. The auditor (S.R. Batliboi) gave a clean opinion, but CARO made an adverse remark: a ₹5.63cr loan to its Thai subsidiary was renewed to settle overdue dues. Five subsidiaries are audited by others, a PF demand of ₹17.2cr is before the tribunal, and about ₹20cr of GST is disputed. The managing director retired after the Q4 call, and the Q1 presentation arrived after 7pm for a 9am call. The new MD names a recession as the biggest risk. **My view: the rating is improving, but the equity case needs a pre-tax margin several times today's.**",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet, leases or heavy depreciation is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **18% at 30x, 21% at 40x, 30% at 80x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **This is an expensive group**: every price assumes strong growth for years, and {count:fits|none} of the four fits my estimates today.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**TVS Supply Chain** looks far cheaper on EV/EBITDA than on P/E, but that measure counts profit before warehouse leases, and most of its ₹2,031cr of Screener net debt is lease liabilities (about ₹350–370cr excluding them). **Delhivery** and **Shadowfax** hold cash from their share sales; Screener counts only part of it (Delhivery reports ₹4,677cr), so both are a little cheaper than the table shows. **Aegis** looks roughly debt-free on Screener's figures and has about ₹1,790cr of net cash counting investments, but 55% of Aegis Vopak belongs to others: in FY26 about ₹898cr of the ₹1,107cr profit belonged to Aegis shareholders. Its EV/EBITDA therefore overstates what an Aegis share owns.",
                },
                {
                    label: 'Fits',
                    text: "**{Count:fits|None} of the four at today's prices.** On the formula above, Aegis would move into Fits at a price about a third below the price at writing, now that my estimate allows for the windfall; no price would make Delhivery fit until its profit is large enough to measure.",
                },
                {
                    label: 'Full',
                    text: "**Aegis** needs about {need:Aegis Logistics|21}% a year against my ~14%, **Shadowfax** about {need:Shadowfax Tech.|33}% against my ~30%, and **TVS Supply Chain** about {need:TVS Supply Chain Sol|30}% against my ~25%. Each needs more growth than I expect, Aegis by the widest gap. TVS Supply Chain is only just inside Full, so a modest rise in its price would tip it to Stretched.",
                },
                {
                    label: 'Full, and flattered by a windfall',
                    text: "**Aegis**'s trailing earnings include two war-boosted quarters (Q4 FY26 and Q1 FY27), when its LPG margin ran well above the ₹4,000 a tonne it earned until FY25. If that margin falls back from FY28 as I expect, trailing profit overstates normal profit, and the ~{need:Aegis Logistics|21}% the price needs is measured from a high base. That is why I would buy it only on a lower price, even though the business is the best here.",
                },
                {
                    label: 'Full, on a tiny profit',
                    text: "**TVS Supply Chain**'s trailing profit is about ₹68cr on ₹11,000cr-plus of revenue (the one-off ₹177cr gain is no longer in it). If it reaches the 4% pre-tax margin it now promises for FY28, profit would rise several times over and the price would look cheap; if it stays near 1%, the price asks far too much. The label is {Label:TVS Supply Chain Sol|Full}, but the outcome is binary.",
                },
                {
                    label: 'Not measurable on earnings',
                    text: "**Delhivery**'s FY26 profit after tax (₹153cr) was smaller than its treasury income (₹340cr), so its P/E means nothing. Judge it on whether its transport business reaches the ‘at least 10%’ adjusted operating margin management promises (6.3% in FY26) and whether overheads fall from 9% to 7% of revenue. Its performance share options unlock only at share prices of ₹800, ₹1,000 and ₹1,200, which aligns management with that goal.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Aegis Logistics', rank: 1, stance: 'PRICED', segment: TERMINAL,
            what: "Owns LPG, chemical and ammonia terminals at seven Indian ports, much of it through the listed Aegis Vopak Terminals, and imports LPG to sell to factories, autogas stations and distributors.",
            view: "**The best business here, priced for most of it, with a windfall inside.** Return on capital has held at 13–17% for five years, contracts run to 2038, and Q1 profit more than tripled to ₹545cr on a 30% margin and LPG sales up 91%. But the ₹7,000-a-tonne selling margin is partly war-driven, terminal volumes fell 3%, outsiders own 55% of Aegis Vopak, it raised ₹3,500cr from institutions at ₹1,210 a share on 16 Nov 2026 (about 8% more shares, within the ₹6,000cr approved), and on 13 October it agreed to buy 89.8% of Dubai's Tristar for US$809mn, a lower-margin international fuel-logistics business with about US$1.4bn of revenue, due to complete in Q4 FY27. The price needs about {need:Aegis Logistics|21}% a year against my ~14%. **24 Oct 2026:** growth estimate cut from 18% to 14%, because trailing profit includes two war-boosted quarters and even management's 25%-a-year goal from FY26 works out to about 16% a year from here, before more depreciation, interest and Aegis Vopak's share; the price no longer fits. **28 Oct 2026:** the price fitted briefly before my 24 October cut and is now well past it; Q2 profit rose 31% on revenue down 3.5%, and CARE put its AA rating on watch over the Tristar purchase, so it stays follow.",
            watch: 'The LPG selling margin in H2 FY27 against ₹7,000 a tonne; terminal volumes after the Kandla–Gorakhpur pipeline link; how much of the US$809mn Tristar purchase the ₹3,500cr share sale covers, whether more of the ₹6,000cr is raised, and whether it closes in Q4 FY27.',
        },
        {
            company: 'Shadowfax Tech.', rank: 2, stance: 'SCALEUP', segment: PARCEL,
            what: "A delivery company for online marketplaces, quick-commerce apps and brands, using gig riders: next-day parcels, ten-minute local deliveries, heavy goods and shared dark stores; listed in January 2026.",
            view: "**The fastest grower, riding two customers.** Revenue rose 65% in Q1, the FY27 guide was raised to 38–40%, its after-rent margin rose from 2.9% to 4.9% and it holds ₹1,537cr of cash with no bank debt. But two customers gave about 64% of FY26 revenue, pre-IPO holders sold after the lock-in (by September 2026 Flipkart was down from 7.3% to 1.5%, Eight Roads from 9.5% to 1.5% and TPG's Newquest from 11.5% to 7.4%, and Qualcomm had left), and its auditor flagged manually calculated revenue. Q2 (call of 29 Oct 2026) kept the pace: revenue +57% to ₹1,538cr (H1 +60%), orders +70%, a first 5% after-rent margin and ₹67cr of profit, even with the festive season moving into Q3; management kept the 38–40% guide until it sees Q3 and gave no update on customer concentration. The price needs about {need:Shadowfax Tech.|33}% a year against my ~30%.",
            watch: 'The top two customers’ share falling below half (not disclosed on the Q2 call); Q3 festive volumes and any raise of the 38–40% guide; after-rent margin rising 1–1.2 points a year from 5%.',
        },
        {
            company: 'Delhivery', rank: 3, stance: 'SCALEUP', segment: PARCEL,
            what: "India's largest third-party logistics network: express parcels, part-truckload freight, warehousing and cross-border services, enlarged by buying Ecom Express in July 2025; it has no promoter.",
            view: "**The biggest network, still not earning its capital back.** Parcel volume rose 55% and revenue 28%, and it holds ₹4,677cr of cash with nine days of working capital. But its own adjusted operating profit halved in a quarter to ₹76cr, the express margin fell to 15.6%, FY26 profit after tax (₹153cr) was less than half its treasury income, and its operating chief left. Return on capital is about 1%, so its profit is too small to value it on.",
            watch: 'Express margin back in the 16–18% band in H2; corporate overheads falling below 9% of revenue; the largest customer’s share and any further senior departures.',
        },
        {
            company: 'TVS Supply Chain Sol', rank: 4, stance: 'TURNAROUND', segment: CONTRACT,
            what: "Runs warehouses, factory supply lines and spare-parts networks for large manufacturers (72% of Q1 revenue), plus sea and air freight forwarding (28%), in 26 countries; part of the TVS Mobility group.",
            view: "**Winning orders, keeping little of them.** Revenue rose 29% in Q1 on a record ₹543cr of new business, the pipeline is above ₹7,500cr and India Ratings raised its outlook to positive. But pre-tax profit is about 1% of revenue, FY26 profit leaned on a ₹177cr one-off gain, leases take most of operating profit, and both its supply-chain and 4% pre-tax margin targets have slipped. The price needs about {need:TVS Supply Chain Sol|30}% a year against my ~25%.",
            watch: 'Supply-chain margin at 9% in Q2 and 9.5–10% by Q4; forwarding margin holding near 4% as freight rates ease; churn staying well below new wins.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Port terminals.** **Aegis Logistics: follow.** The only real asset moat in the group, with contracts to 2038 and a large build-out, but this year's profit carries a war windfall, a growing share of the business belongs to Aegis Vopak's other holders, and the US$809mn Tristar purchase signed on 13 October makes it a bigger, lower-margin international group. Buy when the price allows for the LPG margin falling back.",
            "**Parcel delivery.** **Shadowfax: follow**, the fastest grower with rising margins, held back by two customers that give two-thirds of its revenue. **Delhivery: wait**; the biggest network and a strong balance sheet, but margins went backwards in Q1 and profit is still smaller than its treasury income.",
            "**Contract logistics.** **TVS Supply Chain: wait.** Record orders and an improving rating, but about 1% pre-tax margin, heavy leases and targets that keep moving.",
            "**What would change my view.** For the better: Aegis holding ₹7,000 a tonne into FY28 with terminal volumes growing again; Shadowfax cutting its top-two share below half; Delhivery's express margin back above 16% with overheads falling; TVS Supply Chain reaching 9.5% in supply chain by Q4. For the worse: a large, cheaply priced Aegis share issue; a top platform taking Shadowfax's volume in-house; Delhivery's margins staying at Q1 levels through the festive quarter; a global slowdown hitting TVS Supply Chain's freight and new contracts.",
            "**What to watch next quarter.** Aegis's LPG margin, terminal volumes and Tristar's closing; Shadowfax's growth against its raised guide; Delhivery's express and freight margins; TVS Supply Chain's supply-chain margin and churn.",
        ],
        bottomLine:
            "Separate the terminal owner from the delivery companies. Follow Aegis Logistics for its scarce assets and Shadowfax for its growth, each at a price that allows for its main risk, and wait on Delhivery and TVS Supply Chain until their margins catch up with their scale.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/AEGISLOG/consolidated/' },
        { label: 'Wholesale price index, high-speed diesel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Assessment of Logistics Cost in India — NCAER for DPIIT, Sep 2025', url: 'https://www.dpiit.gov.in/static/uploads/2025/09/c0d7c33f0b737ed71728ff6c2a35f1e7.pdf' },
        { label: 'From growth engine to global edge: India’s logistics cost at 7.97% of GDP — Press Information Bureau', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2195125&reg=3&lang=2' },
        { label: 'India’s express parcel market to touch 24–29 billion shipments by FY30 (Redseer) — IBEF', url: 'https://www.ibef.org/news/india-s-express-parcel-market-to-touch-24-29-billion-shipments-by-fy30-report' },
        { label: 'Speed in metro, scale in Bharat: India’s $80bn online retail story — Redseer, May 2026', url: 'https://redseer.com/articles/speed-in-metro-scale-in-bharat-indias-80-bn-online-retail-story/' },
        { label: 'Rising diesel prices to squeeze road logistics margins in FY27 (ICRA) — Logistics Insider, Jun 2026', url: 'https://www.logisticsinsider.in/rising-diesel-prices-to-squeeze-indias-road-logistics-margins-in-fy27-icra/' },
        { label: 'Industrial and warehousing leasing in India, H1 2026 (Colliers) — CargoNet', url: 'https://gocargonet.com/industrial-warehousing-leasing-india-h1-2026/' },
        { label: 'LPG consumption falls 8% in H1 2026 as West Asia conflict disrupts supplies (PPAC) — Business Today', url: 'https://www.businesstoday.in/latest/economy/story/lpg-consumption-falls-8-in-h1-2026-as-west-asia-conflict-disrupts-supplies-540664-2026-07-02' },
        { label: 'Why the Centre wants households to shift from LPG cylinders to PNG — Business Today, Mar 2026', url: 'https://www.businesstoday.in/latest/economy/story/why-the-centre-wants-households-to-shift-from-lpg-cylinders-to-png-522493-2026-03-26' },
        { label: 'Energy supplies remain secure: India imports about 60% of its LPG — Press Information Bureau', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2238525&reg=3&lang=1' },
        { label: 'Aegis Vopak Terminals files draft prospectus (LPG and liquid import shares) — Angel One', url: 'https://www.angelone.in/news/aegis-vopak-terminals-submitted-drhp-to-raise-funds-via-ipo' },
        { label: 'Aegis Logistics investor presentation, Q1 FY27', url: 'https://aegisindia.com/wp-content/uploads/2026/08/Aegis-Investor-Deck-_Q1-FY27_Final-1.pdf' },
        { label: 'Aegis Logistics Annual Report FY26 (segments, related parties, contingent liabilities, auditor’s report)', url: 'https://aegisindia.com/wp-content/uploads/2026/07/Annual-Report-2025-26.pdf' },
        { label: 'Aegis Logistics rating rationale — CARE, Mar 2026', url: 'https://aegisindia.com/wp-content/uploads/2026/05/Credit-Rating_202603_Aegis_Logistics_Limited.pdf' },
        { label: 'Aegis Logistics notice of board meeting on fund-raising, Sep 2026', url: 'https://aegisindia.com/wp-content/uploads/2026/09/ALL_SE_PriorIntimation_BM_Fund-raising_Signed.pdf' },
        { label: 'Aegis Logistics outcome of board meeting: fund-raise of up to ₹6,000cr, 28 Sep 2026 — NSE', url: 'https://nsearchives.nseindia.com/corporate/AEGISCHEM_28092026115736_ALL_SE_Outcome_Fundraising_28092026_S.pdf' },
        { label: 'Delhivery letter to shareholders, Q1 FY27', url: 'https://www.delhivery.com/uploads/2026/08/LetterToShareholders_Q1FY27.pdf' },
        { label: 'Delhivery Annual Report FY26 (auditor’s report, CARO, contingent liabilities, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f2df7720-e670-4a6a-9dcf-fea3c31421a0.pdf' },
        { label: 'Shadowfax Technologies investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2c9466ba-2d6e-46b2-b3c1-5db33b7243a7.pdf' },
        { label: 'Shadowfax Technologies Annual Report FY26 (customer concentration, related parties, auditor’s report)', url: 'https://crimg.kfintech.com/bmails/files/25344Annual-Report-2026.pdf' },
        { label: 'TVS Supply Chain Solutions investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=23e5d43e-5d28-420e-861d-fe1e742bc26b.pdf' },
        { label: 'TVS Supply Chain Solutions Annual Report FY26 (auditor’s report, CARO, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/8f4fdadc-d070-4c5a-aa4f-13eedb4cc62a.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
