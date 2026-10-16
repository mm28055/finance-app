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
        // HEG: null because the listed share is now HEG Advanced Materials (demerged 1 Sep 2026);
        // the dashboard's market value and P/E are pre-split and describe neither new company.
        myGrowth: {
            'HEG': null,
            'RHI Magnesita': 14,
            'IFGL Refractories': 15,
        },
    },
    standfirst:
        "Three companies that sell things steelmakers burn up. RHI Magnesita and IFGL make refractories, the heat-proof linings of furnaces, ladles and casters, mostly for Indian steel and cement plants, in an industry with too much capacity. HEG made graphite electrodes for electric arc furnaces, one of a handful of producers outside China, but on 1 September 2026 it split in two: the listed share is now HEG Advanced Materials (battery materials and green power), and the electrode business moves to HEG Graphite, which lists in late October. Every chart uses filed results; HEG's history is the company before the split.",
    lastUpdated: '2026-09-27',
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
                "**Follow RHI Magnesita, the best business here, but not at today's price.** It is India's largest refractory maker (about 30% of the market, 512,000 tonnes of capacity), 56% owned by the Austrian RHI Magnesita group, and it turned ₹409cr of operating cash in FY26 into about ₹140cr of net cash by June. Its Q1 FY27 adjusted margin rose to 14.5% against a 13% guide, and it is moving customers onto multi-year service contracts with its robots working inside their plants. But Q1 volume fell 6% (the growth was a ‘war surcharge’ on price), the capex guide was cut from ₹150cr to ₹80–100cr, a large coke-oven order described as secured in May was still being negotiated in August, and a ₹556cr write-down on the Dalmia business it bought in 2023 leaves return on capital at 6%. The price needs about {need:RHI Magnesita|22}% a year against my ~14%.",
                "**Wait on HEG: the share the dashboard tracks is no longer an electrode company.** Since 1 September 2026 the listed ‘HEG’ is **HEG Advanced Materials**, which owns a battery-anode plant under construction (production from Q1 FY28), a battery-pack business and 292 MW of hydro and wind power. The electrode plant, its captive power plants and the GrafTech stake moved to **HEG Graphite**, renamed **HEG Limited** on 12 October 2026, whose shares (one for each HEG share held on 7 September) list in the second half of October. **The dashboard's market value and P/E for HEG are pre-split figures**: they divide today's share price, on the old share count, by profits that came mostly from electrodes. They describe neither new company, so I have set no growth estimate and the valuation table shows no price check. What the listed share does own is still a promise: **its anode buyers have signed only non-binding MOUs** (the Q1 call's promise of 70% of capacity contracted within one to one-and-a-half months had not been met by 28 September), it expects about ₹1,500cr of debt by March 2027, and the Bhilwara Energy merger lifted promoters to 60.7% on terms outsiders cannot check. The electrode business is in good shape (a 22% core margin, plants above 90% full), but a US duty case now covers 17% of its sales.",
                "**Pass on IFGL.** Its Indian flow-control business is good: domestic sales grew about 20% in FY26 and it keeps taking share from smaller rivals. But Q1 FY27 domestic growth slowed to 7% against a double-digit target and the Indian company's operating profit fell 17%; its group margin has slid from 9% in FY24 to 7%, return on capital from 11% to 5% over five years, its European subsidiaries lost more in Q1, and both new plants it announced in June (about ₹600–650cr of projects) are on hold after the government closed its application for a Chinese joint venture over the site. Its FY26 corporate-governance certificate is qualified. The price needs about {need:IFGL Refractories|19}% a year against my ~15%, and part of FY27's profit rise will be the end of an old goodwill charge, not a better business.",
                "**Three things to hold onto before reading the rest.** First, **India's steel boom is a blast-furnace and induction-furnace story, not an arc-furnace one**: arc furnaces made only 17% of India's steel in April–August 2026, which favours refractory makers at home and leaves electrode makers dependent on exports. Second, **filed profits are distorted**: HEG's Q4 FY26 loss was a mark-to-market loss on its GrafTech shares and its Q1 ‘28–29% margin’ includes other income; RHI Magnesita's FY26 loss is a goodwill write-down; IFGL's FY27 profit is lifted by the end of goodwill amortisation. Third, **the annual reports matter**: they show a mid-year auditor change and a new CEO at RHI Magnesita, a merger at HEG that raised the promoters' stake, and a governance qualification and stalled capex at IFGL that the calls barely mentioned.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with more behind **More measures**. All figures are consolidated filed results (Screener). Hover over a starred name for its caveat. **HEG's figures are the pre-split company**: electrodes, the GrafTech stake and a share of Bhilwara Energy's profit; neither new company has filed results of its own yet. **Q4 FY26 is distorted**: HEG's loss on its GrafTech stake sits inside operating costs, and RHI Magnesita's goodwill write-off sits below operating profit, so it does not affect the margin chart. **Start with cash conversion and free cash flow**: none of the three turns profit into cash well, for different reasons. None publishes an order book, so there is no order-cover tab.",
                "**Why these figures differ from the rest of the dashboard.** The stored quarterly records mix bases. HEG's Q2–Q4 FY26 rows are zero or blank (filed revenue was ₹699cr, ₹656cr and ₹603cr), and its Q1 FY27 operating profit of ₹194cr includes other income (filed: ₹151cr). RHI Magnesita's Q4 FY26 profit of ₹39cr is the company's adjusted figure; the filed result was a ₹518cr loss. IFGL's Q3 FY26 revenue of ₹270cr is close to the Indian company alone; the group sold ₹469cr. The charts use Screener's filed figures.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Two different businesses share this note. **Refractories** are heat-proof linings sold mostly inside India, so they follow Indian steel and cement output and new plant builds. **Graphite electrodes** are consumables for electric arc furnaces, and about two-thirds of Indian output is exported, so they follow arc-furnace steel around the world. India made 168.4 Mt of crude steel in FY26, up 10.7% (Joint Plant Committee), but output grew only 2.8% in April–August 2026 while consumption rose 7.4% and finished-steel imports jumped 29.5%. The world outside China made 2.1% more steel in the first half of 2026 (worldsteel). **My view: refractory demand in India is solid for years; electrode demand is turning up, but the price cycle, not volume, will decide electrode profits.**",
            ],
            points: [
                {
                    label: 'Value chain and where profit sits',
                    text: "Raw materials (magnesite, alumina, quartzite and zircon for refractories; needle coke, a special petroleum coke, for electrodes) → the manufacturer (bricks, castables, flow-control parts, electrodes) → installation and management inside the steel plant → consumed and replaced within days to months. **Profit sits with low-cost scale.** In Q1 FY27 Graphite India earned about 29% and pre-split HEG 22% (core) on electrodes, while the US leader GrafTech roughly broke even at 74% utilisation. In refractories, the leader RHI Magnesita earned 14.5% (adjusted) and IFGL 7.7%, and the profit is concentrated in flow-control and specialised products rather than standard bricks. **My view: the Indian electrode makers win on cost, captive power and full plants; the refractory makers win only where they sell know-how, not tonnes.**",
                },
                {
                    label: 'Where the demand comes from',
                    text: "India is adding steel capacity fast: 233 Mt in FY26, heading for about 298 Mt by FY30 (BigMint), and Choice Broking expects output of 255 Mt by FY31, about 8.7% a year. RHI Magnesita estimates steel-sector capex of ₹50,000–60,000cr in FY27, and every new blast furnace, coke oven, DRI or pellet plant needs a first fill of refractories. But **arc furnaces make only 17.2% of Indian steel**, and arc-furnace capacity grows only from 46 Mt to about 55 Mt by FY30 while blast-furnace capacity rises to 142 Mt. Electrode demand comes from abroad: the OECD counts 138.8 Mt of steel capacity under way or planned for 2026–28, 51% of it arc furnaces (about 71 Mt), and Europe's carbon border tax (CBAM, live from 2026) pushes European mills the same way. At 1.5–2 kg of electrode per tonne of steel, that is roughly 85,000–115,000 tonnes a year of extra electrode demand by 2028–29 (my estimate from OECD and India Ratings figures), about 15% on a market of 600,000–650,000 tonnes outside China, spread over three years. Cement adds a smaller pull: about 485 Mt in FY26 and ₹1.2–1.25 lakh crore of capex planned over FY25–FY27.",
                },
                {
                    label: 'Industry structure and where the cycle stands',
                    text: "**Electrodes are a handful of producers outside China** (GrafTech, Resonac, Tokai Carbon, HEG Graphite and Graphite India) plus Chinese exporters, who ship about 400,000 tonnes, some 100,000 of it the ultra-high-power grade. HEG's 100,000-tonne plant is the largest single site, and only HEG has announced new Western-market capacity. Prices bottomed in 2025: GrafTech's Q2 2026 price (about $3,900 a tonne) was still 7% below a year earlier, but it has announced rises of $600–1,200 a tonne, a Japanese rival $930, and Graphite India's write-down for falling prices shrank from ₹77cr to ₹24cr. **Refractories are consolidating at the top but stay over-supplied**: RHI Magnesita's annual report puts industry utilisation at ‘often 60–70%’, and new low-end capacity keeps arriving (Monolith is expanding ramming-mass capacity from 210,000 to 575,000 tonnes). **My view: electrodes are in an early upturn on volume, not yet on price; refractories are mid-cycle at low margins.**",
                },
                {
                    label: 'Policy and trade',
                    text: "India's safeguard duty on flat steel (12% in year one, running to April 2028) was meant to curb imports, yet finished-steel imports rose 29.5% in April–August 2026, and ICRA expects industry margins to be flat in FY27. For electrode exporters the trade walls are rising. The US set preliminary countervailing duties of **6.99% on HEG** and 3.68% on Graphite India on 30 July 2026; an anti-dumping decision was due by 22 September (the petition alleged dumping margins of 42.59–73.40% for India), and final rulings are due by about 7 December. Brazil opened an anti-dumping case in March alleging a 57.3% margin for India, and the Eurasian Economic Union's duty on Indian electrodes (HEG 16.04%) runs to March 2029. One duty helped: Japan's 2025 duty on Chinese electrodes lifted HEG's sales there to ₹67cr from ₹30cr. Refractories get no sector support scheme, and Press Note 3, which screens Chinese investment, blocked IFGL's joint venture at its chosen site.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**RHI Magnesita** depends on Indian steel and cement output, first-fill project orders, whether its surcharges stick, and its own mines lowering costs. **HEG Advanced Materials** (the listed HEG) depends on finishing a ₹2,200–2,300cr anode plant, signing buyers for it, and hydro and solar power; **HEG Graphite** depends on global electrode prices, needle coke and the US duty case. **IFGL** depends on Indian share gains, US mills and fixing Europe. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (FY22–FY26)', 'Return on capital (FY22–FY26)', 'Why'],
                    rows: [
                        ['Graphite electrodes (pre-split)', 'HEG', '12–25%', '4–15%', 'Oligopoly pricing, but a long cash cycle, a large treasury and investments dilute returns; now split in two'],
                        ['Refractories, market leader', 'RHI Magnesita', '11–19%', '6–37%', 'Scale and technology; returns diluted by acquisition goodwill and written down in FY26'],
                        ['Refractories, specialist', 'IFGL Refractories', '7–11%', '5–11%', 'Good Indian products, weak pricing, loss-making European subsidiaries'],
                    ],
                },
                {
                    caption: 'Where the profit sits, latest quarter (Q1 FY27; GrafTech Q2 2026)',
                    columns: ['Company', 'Product', 'Revenue', 'Margin', 'Note'],
                    rows: [
                        ['Graphite India', 'Electrodes', '₹842cr', '~29%', 'Net cash ₹3,939cr; 97% of capacity used'],
                        ['HEG (pre-split)', 'Electrodes', '₹681cr', '22% core (27% with other income)', 'Above 90% used'],
                        ['GrafTech (US)', 'Electrodes', '30,800 t at ~$3,900 a tonne', 'About break-even', '74% used'],
                        ['RHI Magnesita', 'Refractories', '₹1,014cr', '14.5% (adjusted)', 'Net cash ~₹140cr (company, June)'],
                        ['IFGL Refractories', 'Refractories', '₹512cr', '7% (India alone 10.5%)', 'Europe loss-making'],
                    ],
                    note: 'Company presentations and Screener. Graphite India and GrafTech are not on the dashboard; they are shown for comparison.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian crude steel output', '168.4 Mt in FY26 (+10.7%); Apr–Aug 2026 71.0 Mt (+2.8%)', '**255 Mt by FY31**, about 8.7% a year', 'Joint Plant Committee; Choice Broking, Jun 2026'],
                        ['Indian steel demand', 'Finished-steel use +7.4% in Apr–Aug 2026; imports +29.5%', '**+9–10% in FY27** (ICRA); +7.4% in 2026 and +9.2% in 2027 (worldsteel)', 'ICRA, May 2026; worldsteel, Apr 2026'],
                        ['Indian capacity and route', '233 Mt (FY26); arc furnaces 17.2% of output', '~298 Mt by FY30; arc-furnace capacity 46 → 55 Mt, blast furnace to 142 Mt', 'BigMint; Joint Plant Committee'],
                        ['World steel', 'H1 2026 930.6 Mt (−0.7%); outside China +2.1%', 'Demand +0.3% in 2026, +2.2% in 2027; excess capacity 745 Mt by 2028', 'worldsteel; OECD Steel Outlook 2026'],
                        ['New arc-furnace capacity', '138.8 Mt planned for 2026–28, 51% arc furnace (~71 Mt)', '~85,000–115,000 t a year of extra electrode demand by 2028–29 (my estimate)', 'OECD; India Ratings'],
                        ['Indian refractory market', '~US$2.6bn (2025)', '~US$3.5bn by 2034, about 3% a year in dollars', 'IMARC, cited in RHI Magnesita annual report'],
                        ['Cement', '~485 Mt in FY26 (+8–9%)', '₹1.2–1.25 lakh crore capex for 130–170 MTPA over FY25–FY27; top four own ~54%', 'RHI Magnesita annual report FY26'],
                        ['Trade actions on Indian electrodes', 'US preliminary duty: HEG 6.99%, Graphite India 3.68%', 'US final rulings by ~7 Dec 2026; Brazil case (57.3% alleged); Eurasian duty to Mar 2029', 'US Federal Register; Baker McKenzie; Eurasian Economic Commission'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. HEG's row describes the electrode business, which now sits in HEG Graphite. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: scarce electrode capacity (now HEG Graphite)',
                    text: "The electrode plant that moved to **HEG Graphite** is the world's largest single site (100,000 tonnes; the next two are about 70,000) and ran above 90% full in FY26 and Q1 FY27, against 74% at GrafTech in Q2 2026. HEG says it was the last new entrant in the Western world, in 1976, and its 15,000-tonne expansion is the only new Western-market capacity announced; ‘It takes two to three years to even make a small brownfield expansion,’ its chairman said. It sells to about 35 countries, including the top 20 global steelmakers, with no customer above 10% of sales. The weak point is raw material: GrafTech makes 75–80% of its own needle coke, while HEG buys from three or four suppliers worldwide, which is why it bought 9.98% of GrafTech as a hedge. **My view: the scarcity is real and lasting, but it protects share, not price, when steel is weak.**",
                },
                {
                    label: 'Widening: running the customer’s refractory operation',
                    text: "**RHI Magnesita**'s 4PRO model puts its people, robots and scanners inside customers' plants. It runs India's first robotic caster solution at JSW under a five-year all-inclusive contract, is in technical evaluations with four or five more steelmakers, and runs lining scans at 24 sites. Its flow-control share with one big steel group nearly doubled in six months, and it plans to make four or five more of its parent's products in India within a year (magnesia-chrome and spinel bricks, thin-slab parts, high-chrome bricks). Each year a mill runs on its system, switching gets harder. **My view: this is the one moat in refractories that is clearly widening.**",
                },
                {
                    label: 'Pricing power: partial at best',
                    text: "In Q1 **RHI Magnesita** pushed through surcharges and some double-digit increases after the West Asia cost spike, but management said most were ‘nothing but a war surcharge’, and its own annual report says many long-term contracts ‘lack adequate price escalation provisions’. **IFGL** called its price rises temporary with ‘no additional margin’; ICRA rates its pricing power ‘limited’ against global rivals, though imports are rare in its Indian products, which helps. In electrodes, the Indian makers are booked to September or October at old prices and say they will follow rivals' increases only from the second half. **Nobody in this note sets prices: the electrode makers follow an oligopoly, and the refractory makers negotiate plant by plant.**",
                },
                {
                    label: 'Raw-material security',
                    text: "**RHI Magnesita** has all licences for two quartzite mines in Odisha that came with the Dalmia business, opening around the end of Q2 FY27, and says bought-in material costs ‘almost double’ its own mining cost, though it will not yet quantify the saving. Its MINPRO joint venture (51%, about ₹35cr shared over two years) will process minerals and recycle used refractories from late FY27, and it draws on its parent's magnesite. **IFGL** buys all its key minerals, largely from China. **HEG Graphite** has no needle coke of its own. This matters more now that magnesite rose 6–8% in two months and needle coke $200–300 a tonne. **My view: only RHI Magnesita is building a cost edge here.**",
                },
                {
                    label: 'A specialist gaining share at home, losing ground abroad',
                    text: "**IFGL**'s domestic sales grew about 20% in FY26 and about 22% a year over seven years, well above steel output, taking share from ‘smaller and more specialised players’. It has proof points: its first all-Vizag EOF lining passed 1,000 heats, and it set a porous-plug life record in a 300-tonne ladle at Tata Steel Kalinganagar. Its US plants, which make ‘in US for the US’, now earn high-teen margins. But the UK (Monocon, Sheffield) and German (Hofmann) businesses lose money or barely break even, and to win brick and casting-flux accounts it accepts that ‘margins… may initially be lean’. **My view: the Indian moat is narrow but real; the overseas portfolio dilutes it.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Graphite India** (97% of capacity used in Q1 FY27, about a 29% margin and ₹3,939cr of net cash), **GrafTech**, **Resonac**, **Tokai Carbon** and Chinese exporters in electrodes. **Calderys**, **Vesuvius India**, **Krosaki**, **Monolith** and many small makers in refractories; RHI Magnesita says Calderys, IFGL and smaller players ‘fill up their plant at any cost’ in cement.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The test is simple: when input costs rise, how quickly does the selling price follow? Q1 FY27 was that test, as needle coke, magnesite, LPG, freight and energy all rose with the West Asia war.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Cyclical: HEG’s electrodes (now HEG Graphite)',
                    text: "Filed margins over five years ran from 12% (FY25) to 25% (FY23). Q1 FY27's core margin was 22% on Screener; the company's ‘28%, 29%’ includes ₹43.6cr of other income, mostly gains on investments, as management confirmed on the call. Prices were about 7–8% higher than a year earlier on slightly lower volume. The squeeze is scheduled: needle coke is up $200–300 a tonne and total electrode cost 10–15%, reaching the accounts from November to January, while price rises show only in October–December bookings. Management now promises only to ‘maintain the margins’. **This margin is real but on a knife-edge for H2 FY27; treat Q1 as a good quarter, not a new level.**",
                },
                {
                    label: 'Structural at a modest level: RHI Magnesita',
                    text: "Operating margin fell from 15% in FY24 to 11% in FY26 as the lower-margin Dalmia business (10.8% in FY26) was added and cement buyers fought on price. Guidance has been cut step by step, from 15–16% to 14% to 13%, and management admits it ‘might have gone to 11%/10%’ without its cost work. Q1's 14.5% adjusted margin came as the average price rose 12% to ₹83,175 a tonne while shipments fell 6% to 122,000 tonnes. **Treat Q1's 14.5% as a peak helped by surcharges, not a floor.** I expect 12–14% to hold, supported by flow control, services and its own quartzite from H2, but fading surcharges and rising magnesite cap the upside.",
                },
                {
                    label: 'Not structural: IFGL',
                    text: "The group margin fell from 9% in FY24 to 7% in FY26 and was 7% again in Q1 FY27. The Indian company's margin fell to 10.5% from 13.5% a year earlier as its gross margin dropped from 47% to 43% on LPG and raw-material costs, and staff now cost about 10% of its revenue. Overseas is uneven: US subsidiaries earn high-teen margins, while Europe's quarterly loss widened from about ₹3cr to ₹7cr when British Steel's blast furnace stopped. Management softened its long-term goal from a 12% group margin to ‘double-digit’, depending on geopolitics. **The margin is not structural until Europe breaks even and Indian prices stick.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**HEG** held about 389 days of stock in FY26 because electrodes take four to five months to make and needle coke is bought ahead; its cash cycle was 323 days and it tied up ₹1,087cr in working capital over FY22–FY26. Operating cash fell from ₹612cr in FY24 to ₹213cr in FY26, free cash flow turned slightly negative, and India Ratings expects it to stay negative in FY27. **RHI Magnesita** tied up ₹602cr over five years, mostly in stock (₹308cr), and carries 163 days of it across thousands of shapes and grades.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**IFGL**'s operating cash fell from ₹152cr in FY24 to ₹28cr in FY25 and ₹63cr in FY26, and free cash flow was negative in four of the last five years; its cash cycle is 148 days, with 152 days of stock. It moved from net cash to a small net debt while building its Vizag and Rourkela plants. **RHI Magnesita** built stock in Q1 ahead of second-half projects, so operating cash was ₹81cr against ₹147cr of adjusted EBITDA.",
                },
                {
                    label: 'Working capital: improving',
                    text: "**RHI Magnesita**'s cash cycle fell from 148 days in FY25 to 126 in FY26 and customers pay in 64 days, down from 89 in FY22. Operating cash rose from ₹271cr in FY24 to ₹409cr in FY26, 92% of operating profit and the best in this group, and free cash flow was about ₹274cr. **HEG**'s customers pay in 71 days, down from 98 in FY22.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "An electrode maker will always hold a year or so of stock, so **HEG**'s cash cycle of 320–480 days is structural; judge it by whether it rises in a downturn. Refractory makers hold 150–180 days of stock because they carry thousands of shapes and grades, and they wait two to three months for steel mills to pay. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['RHI Magnesita', 'Net cash ~₹140cr in June (₹69cr in March), cash ₹452cr; capex now ₹80–100cr a year (was ₹150cr), ₹8cr spent in Q1', 'Borrowings ₹448cr (March, Screener)'],
                        ['HEG (pre-split)', '‘Debt-free’ means no long-term loans; treasury ₹858cr against ₹783cr of short-term export loans in June; electrode capex ₹650cr from own cash; anode plant 90–95% spent in FY27', 'Borrowings ₹796cr (March); HEG Advanced Materials expects ~₹1,500cr of gross debt by March 2027'],
                        ['IFGL Refractories', 'Debt ‘very negligible’; FY27 capex ₹50–60cr (ICRA); dividend ₹2.15 after a 1:1 bonus', 'Debt ₹195.6cr, cash ₹122cr (March): net debt ~₹74cr; ICRA AA− (Stable)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised in May and June, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: the shift to arc furnaces abroad',
                    text: "About 71 Mt of new arc-furnace capacity is planned worldwide for 2026–28 (OECD); HEG counts about 20 Mt starting within 12–18 months and about 60 Mt more by 2028, and estimates 200,000 tonnes of extra electrode demand by 2030 outside China (its own figure; mine is lower, about 85,000–115,000 tonnes by 2028–29). **HEG Graphite** is adding 15,000 tonnes (to 115,000) for ₹650cr from its own cash, operational in early 2028. At about ₹2.8 lakh a tonne that adds roughly ₹400cr of revenue at full use, a good return on a brownfield. **My view: a slow, real driver that the price cycle can swamp in any single year.**",
                },
                {
                    label: 'Growth driver: India’s blast-furnace build-out',
                    text: "India's new capacity is mostly blast furnaces, coke ovens, DRI and pellet plants, which need refractory first fills. **RHI Magnesita** is negotiating a coke-oven order of more than 30,000 tonnes that would load its kilns for 14–16 months, expects to win at least two of four or five more coke-oven batteries over two to three years, and sees first-fill orders for SAIL Bhilai's new melt shop six to eight months away. Choice Broking expects induction-furnace output to rise from 45.8 Mt to 69.4 Mt by FY31, good for ramming-mass makers. **My view: this driver lasts into the 2030s, but it arrives in lumps and on the customers' timetable.**",
                },
                {
                    label: 'Growth driver: services, new products and own raw materials',
                    text: "**RHI Magnesita**'s 4PRO contracts, four or five parent products made locally within a year, its quartzite mines and the MINPRO venture (target margin 8–10%, payback under three years) lift margins more than sales. **IFGL** is making Sheffield's products at Vizag, designing US products at its Indian R&D centre, and adding magnesia-carbon bricks and casting flux, which it says could add ₹150–200cr of revenue at peak; British Steel's and Speciality Steel's UK restarts, expected in November–December 2026, would help Europe. **My view: these are the cheapest growth in the sector, because they need little capex.**",
                },
                {
                    label: 'Growth driver: battery materials and green power (HEG Advanced Materials)',
                    text: "The listed HEG now owns a 20,000-tonne battery-anode plant (TACC) costing ₹2,200–2,300cr, 85% procured, with production from Q1 FY28. Management targets anode revenue of ₹600–700cr in FY28, over ₹1,200cr in year two and ₹1,500–1,600cr in year three at about a 35% EBITDA margin, with payback in four to five years; hydro plants should add ₹320–350cr of free cash a year, and a 76 MW hydro and 300 MWp solar project about ₹200cr of EBITDA. The target is ₹1,000cr+ of combined EBITDA by 2030. But the named buyers (a European carmaker for more than 40,000 tonnes, a North American one for more than 70,000) are non-binding MOUs, and the company itself says there is ‘no assurance’ they convert. **My view: a large, well-funded bet whose value depends on contracts not yet signed.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**HEG**'s Q1 core margin of 22% beat the 17–20% it guided in May, utilisation stayed above 90%, and the split took effect on time on 1 September. **RHI Magnesita**'s 14.5% adjusted margin beat its 13% guide.",
                },
                {
                    label: 'Cautious',
                    text: "**RHI Magnesita** kept its 13% margin guide despite the beat and now says 9% volume growth is ‘a bit of stretch’; ‘I still believe we can deliver 7%-8% volume growth but not 9%,’ said Parmod Sagar, now its chairman. **HEG** will only promise to ‘maintain the margins’ until price rises show from October. **IFGL** calls its price rises temporary.",
                },
                {
                    label: 'Missed',
                    text: "**RHI Magnesita**'s Q1 volume fell 6% against a 9% growth goal, its capex guide fell from ₹150cr to ₹80–100cr, and the coke-oven order it called secured in May was still in ‘final negotiation’ in August; silica and glass project orders slipped to Q3–Q4. **IFGL**'s domestic sales grew 7% against a double-digit target, the Indian company's EBITDA fell 17%, Europe's loss widened, and both greenfield plants were put on hold, which ICRA disclosed in August more plainly than the call did.",
                },
                {
                    label: 'Mixed',
                    text: "**HEG** said on the Q1 call that about 70% of anode capacity would be contracted within one to one-and-a-half months; no anode contract had been announced by 28 September. The only order filed since the split is for battery banks: ₹217.56cr (including GST) from Indus Towers to its Replus arm on 18 September, to be supplied by 31 March 2027. **IFGL**'s group revenue grew 13% and its US business is strong, but the profit growth came partly from lower goodwill amortisation.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect RHI Magnesita to grow earnings at about 14% a year from normalised profit and IFGL at about 15% from a depressed base** (FY27 flattered by the end of goodwill amortisation, worth about ₹27cr a year before tax). I have no estimate for the listed HEG: it has no post-split earnings, and its anode plant has no revenue until FY28. For the electrode business I would still expect about 8% a year through the cycle, but that is HEG Graphite, which is not yet trading. RHI Magnesita's low case is lower than a quarter ago because volume fell and the capex guide was cut.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['RHI Magnesita', 'Steel volume, flow control and 4PRO; own quartzite and MINPRO lowering costs; margin 12–14%', '8% / **14%** / 18%'],
                        ['IFGL Refractories', 'End of goodwill amortisation; Indian share gains; Europe break-even; growth capex on hold', '5% / **15%** / 25%'],
                        ['HEG (now HEG Advanced Materials)', 'Anode plant from FY28; hydro and solar power; ~₹1,500cr of debt', 'Not estimated: no post-split earnings yet'],
                    ],
                    note: 'My own judgement, not company guidance. RHI Magnesita’s estimate is from normalised (pre-write-off) earnings. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['RHI Magnesita', 'FY27 margin 13% (kept, not raised); volume 7–8% (from ~9%)', '₹80–100cr a year (from ₹150cr); ₹8cr in Q1; MINPRO ~₹35cr shared', '**Mixed**: margin 14.5% beat; volume −6%; coke-oven order not signed'],
                        ['HEG', 'Electrodes: ‘maintain the margins’; anode revenue ₹600–700cr in FY28; ₹1,000cr+ EBITDA by 2030', 'Electrodes ₹650cr (to 115,000 t by early 2028); anode ₹2,200–2,300cr, 90–95% spent in FY27', '**Beat**: core margin 22% vs 17–20%; split on time; anode contracts not yet announced'],
                        ['IFGL Refractories', 'Domestic double-digit growth; group margin ‘double-digit’ (was 12%); Monocon break-even by Q4 FY27', '₹50–60cr in FY27; Khordha (₹300–350cr) and Gujarat JV (₹300cr) on hold', '**Missed**: domestic +7%; Indian EBITDA −17%; Europe loss widened'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from annual reports, rating reports and stock-exchange filings, not from the calls.",
            ],
            points: [
                {
                    label: 'HEG’s split and related parties',
                    text: "The merger that created **HEG Advanced Materials** issued about 13cr new shares for Bhilwara Energy (8 new shares for every 7), lifting promoter holding from 56.27% to 60.72%; one promoter firm, LNJ Spark Advisory, received 4.05cr shares (12.29%). Promoters owned about 42% of Bhilwara Energy, so the swap ratio favours them unless Bhilwara Energy was worth its price, which the filings do not let an outsider check. India Ratings kept HEG on ‘Rating Watch with Developing Implications’ until it is clear how cash and liabilities are split. HEG also guaranteed ₹1,230cr of the anode company's bank loans; that guarantee goes with the listed company. **My view: minority holders of the listed share now own a promoter-shaped company whose main asset is not yet earning.**",
                },
                {
                    label: 'Trade actions on Indian electrodes',
                    text: "The US preliminary duty on **HEG** is 6.99%, the anti-dumping decision was due by 22 September against alleged margins of 42.59–73.40%, and final rulings come by about 7 December. The annual report shows the US was **17% of FY26 sales (₹440cr)**, not the ‘under 10%’ management gave on the Q1 call. Brazil's case alleges 57.3% for India. **A final US anti-dumping duty in double digits would cost HEG Graphite its highest-priced market or a large slice of its margin there.**",
                },
                {
                    label: 'Input costs and contracts without escalation',
                    text: "Needle coke is up $200–300 a tonne and total electrode cost 10–15%, landing from November; magnesite rose 6–8% in two months; LPG shortages hit IFGL in Q1. **RHI Magnesita**'s annual report admits many long-term contracts lack price escalation clauses, and it would not quantify its mining savings. **IFGL** imports much of its raw material from China. A weaker rupee helps the electrode exporters but raises costs for the refractory makers.",
                },
                {
                    label: 'Write-downs and accounting',
                    text: "**RHI Magnesita** wrote down the Dalmia business by ₹556cr in Q4 FY26, blaming falling exports, rupee weakness, competitors' new capacity and imports, which are lasting causes, not one-offs; ₹324cr of goodwill remains and is a key audit matter, and Screener shows large exceptional charges in FY23 and Q4 FY24 too. **IFGL**'s auditor added two emphasis-of-matter notes: its 2016 merger created ₹267cr of goodwill by a method current accounting rules would not allow (now fully written off), and a ₹8.3cr tax appeal is pending; tax claims over goodwill depreciation could cost about ₹40cr more. **HEG**'s reported profit swings with the GrafTech stake's value (a loss in Q4, gains in Q1), and its contingent liabilities are about ₹110cr, mostly income tax; provisions and contingent liabilities are the auditor's only key audit matter, with an unmodified opinion.",
                },
                {
                    label: 'Governance and management change',
                    text: "At **RHI Magnesita**, PwC resigned as auditor of the company and its Dalmia subsidiary in August 2026 to align with a group-wide auditor change (BSR & Co. replaced it; the board says no other concerns were raised); the MD since 2013, Parmod Sagar, stepped down as MD on 1 July and is now non-executive chairman, with Pankaj Malhan as MD and CEO. It pays the parent a royalty (₹35cr in FY26) and buys ₹390–400cr a year of materials from group companies; approved and ordinary, but a lasting drain on margin. Dalmia Bharat Refractories sold its entire 13.08% stake between May and 23 September (the last block at ₹360); SBI Mutual Fund bought 8.07%, so that overhang has cleared. At **IFGL**, the corporate-governance certificate is qualified because shareholder approval for a director's appointment came four days late, and a CEO and the R&D head have left; there is no promoter pledge and no material related-party dealing.",
                },
                {
                    label: 'Over-capacity and stalled expansion',
                    text: "Refractory plants run ‘often 60–70%’ full, and rivals keep adding capacity, so price discipline is weak. **IFGL**'s ₹300–350cr Khordha plant is on hold because of the Middle East conflict, and the government closed its Gujarat joint-venture application over the site; management said only that the government had ‘advised us to change location and apply for the same again’. Its Europe business depends on UK steel restarts, and old Liberty Steel dues are unsecured with administrators. **The two companies that need growth capex the least (RHI Magnesita) and the most (IFGL) have both slowed it.**",
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
                    label: 'HEG: the live numbers are pre-split',
                    text: "The dashboard values **HEG** (NSE symbol HEGAM since 22 September) at about ₹4,613cr: today's share price (about ₹239, down from ₹728 before the ex-date) times the old 19.3cr shares. After the merger there are about 32.97cr shares, so the listed company is worth about ₹7,900cr. Its P/E divides that price by the old company's profit, which came mostly from electrodes the listed company no longer owns, and its EV/EBITDA uses pre-split operating profit and cash. **Neither number means anything for HEG Advanced Materials or HEG Graphite, so I have set no growth estimate and there is no price check.** I will value both once HEG Graphite lists in late October and each files results of its own.",
                },
                {
                    label: 'What EV/EBITDA changes',
                    text: "**RHI Magnesita** holds about ₹140cr of net cash by its own June figure (Screener shows about ₹57cr of net debt at March, counting treasury investments), so its enterprise value is close to its market value; its P/E in the table is on profit before the Q4 write-down (adjusted FY26 profit ₹180cr), because on reported profit it made a loss. **IFGL** carries about ₹74–87cr of net debt, small against its size; it looks cheaper on EV/EBITDA than on P/E because depreciation and European losses sit between operating profit and earnings, and depreciation is now falling.",
                },
                {
                    label: 'Fits',
                    text: "None this quarter. No price here asks for growth at or below what I expect.",
                },
                {
                    label: 'Full',
                    text: "**IFGL** needs about {need:IFGL Refractories|19}% a year against my ~15%. FY27 profit will jump because goodwill amortisation has ended, which will make the P/E look lower without the business improving. With the margin at 7%, Europe loss-making, growth capex on hold and a qualified governance certificate, I would not pay a full price; it is a pass.",
                },
                {
                    label: 'Stretched',
                    text: "**RHI Magnesita** needs about {need:RHI Magnesita|22}% a year against my ~14%, even measured on profit before the write-down. A fall of about 15% from the price when this note was written would make it Full; a fall of about 40% would bring it within reach of my estimate. Alternatively, two quarters of 13%+ margins with 7–8% volume and the mines working would justify a higher estimate. Dalmia's exit at ₹360 cleared the main share overhang, which removes a reason to wait but not the valuation gap.",
                },
                {
                    label: 'Not measurable: HEG',
                    text: "**HEG** (now HEG Advanced Materials) is still not measured live: Screener's P/E of about 13 is the old company's profit on the old share count, and the listed company has not yet filed results of its own. Its value rests on an anode plant with no revenue until FY28, hydro cash of ₹320–350cr a year and about ₹1,500cr of debt by March 2027. HEG Graphite, the electrode company, lists later; at the next update I will judge it on its own profit and cash.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'RHI Magnesita', rank: 1, stance: 'PRICED', segment: REFRAC,
            what: "India's largest refractory maker (about 30% share, 512,000 tonnes of capacity, 8 plants and 2 mines), 56% owned by Austria's RHI Magnesita group. Steel is about 87% of sales; cement, glass, non-ferrous and petrochemicals the rest.",
            view: "**The best refractory business, priced for more than it has delivered.** Q1's adjusted margin rose to 14.5%, it holds about ₹140cr of net cash (company, June) and turned 92% of FY26 operating profit into cash, and its 4PRO service contracts are widening its moat. But volume fell 6%, the margin gain was mostly a surcharge, the capex guide was cut, and a ₹556cr write-down on the Dalmia business leaves return on capital at 6%; a new CEO and a new auditor start this year. The price needs about {need:RHI Magnesita|22}% a year against my ~14%.",
            watch: 'Q2–Q3 volume back to +7–8% with margins at 13% or more; the coke-oven order signed and in production, and quartzite savings in H2; the first BSR-audited results and the new CEO’s plan.',
        },
        {
            company: 'HEG', rank: 2, stance: 'SCALEUP', segment: ELECTRODE,
            what: "Since 1 September 2026 the listed ‘HEG’ is HEG Advanced Materials: a 20,000-tonne battery-anode plant being built (production from Q1 FY28), a battery-pack business (Replus, 74%) and 292 MW of hydro and wind power. The graphite-electrode plant moved to HEG Graphite, which lists in late October.",
            view: "**A different company under the same name, so the dashboard's numbers no longer describe it.** Its market value and P/E are pre-split, so I have set no growth estimate and there is no price check. The listed company's value rests on a ₹2,200–2,300cr anode plant whose buyers have signed only non-binding MOUs, hydro cash of ₹320–350cr a year, about ₹1,500cr of debt by March 2027, and a merger that lifted promoters to 60.7%. The electrode business it left behind is in its best shape in years (22% core margin, plants above 90% full), but faces a US duty case on 17% of its sales.",
            watch: 'HEG Graphite’s listing price in late October and each company’s first results of its own; signed anode offtake contracts (promised for about 70% of capacity); US final duties by about 7 December and electrode price rises in October–December bookings.',
        },
        {
            company: 'IFGL Refractories', rank: 3, stance: 'TURNAROUND', segment: REFRAC,
            what: "A Kolkata maker of flow-control and specialised refractories for steel, with about 58% of sales from India and the rest from plants in the US, UK, Germany, the Czech Republic and China. The Bajoria family owns 72.4%.",
            view: "**A good Indian franchise tied to weak overseas businesses and stalled expansion.** Domestic sales grew about 20% in FY26 and the US earns high-teen margins, but the group margin is 7%, return on capital 5%, Europe's loss widened in Q1, and both new plants are on hold after the government closed its joint-venture application. FY27 profit gets a lift from the end of goodwill amortisation, which is accounting, not business, and its governance certificate is qualified. The price needs about {need:IFGL Refractories|19}% a year against my ~15%.",
            watch: 'The Indian company’s margin back above 12%; Europe (Monocon, Sheffield, Hofmann) at break-even by Q4 FY27; a new site and funding plan for Khordha or the joint venture.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Refractories.** **RHI Magnesita: follow.** The strongest refractory business in India, with net cash, the best cash conversion here and a service model that is widening its moat; but volume fell in Q1, the margin gain was a surcharge, and the price needs about {need:RHI Magnesita|22}% a year against my ~14%. I would buy on proof of 13%+ margins with 7–8% volume and the mines working, or after a fall of about 40%. **IFGL Refractories: pass.** A good Indian franchise, but a 7% group margin, loss-making Europe, both new plants on hold and a qualified governance certificate; the price needs more than I expect.",
            "**Graphite electrodes.** **HEG: wait.** The listed share is now HEG Advanced Materials, a battery-anode and green-power build-out whose dashboard P/E and market value are pre-split and meaningless, so there is no price check. Revisit when HEG Graphite lists in late October and both companies report on their own: the electrode business is the better near-term earner, the anode plant the bigger bet.",
            "**What would change my view.** For the better: RHI Magnesita's coke-oven order in production and mining savings visible in H2; HEG Graphite listing at a price that asks for ordinary cyclical growth; signed anode contracts at HEG Advanced Materials; IFGL's Europe at break-even and a funded restart of its Odisha plant. For the worse: US final duties well above the preliminary 6.99%; electrode price rises failing while needle coke climbs; RHI Magnesita's margin slipping below 12% as surcharges fade, or another write-down.",
            "**What to watch next quarter.** RHI Magnesita's Q2 volume and margin and the first results audited by BSR; the HEG Graphite listing, the US anti-dumping and final duties, and October–December electrode bookings; IFGL's Indian margin, European losses and any new site for its joint venture.",
        ],
        bottomLine:
            "Follow the best refractory business (RHI Magnesita), but wait for a better price or proof of volume; wait on HEG until its split settles and each half can be valued on its own numbers; pass on IFGL Refractories until Europe and its margins are fixed.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/RHIM/consolidated/' },
        { label: 'India steel output and demand, April–August 2026 (Joint Plant Committee data) — Chartforest', url: 'https://chartforest.com/india-steel-demand-april-august-2026/' },
        { label: 'India’s crude steel capacity rises 10% in FY26, on track for ~300 Mt by FY30 — BigMint', url: 'https://www.bigmint.co/insights/detail/indias-crude-steel-capacity-rises-10-y-o-y-in-fy26-on-track-to-reach-nearly-300-mnt-by-fy30-748702' },
        { label: 'Steel industry trends and outlook — ICRA, May 2026', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6940' },
        { label: 'India’s steel growth to drive demand for refractories (Choice Broking) — ANI, Jun 2026', url: 'https://aninews.in/news/business/indias-steel-growth-to-drive-strong-demand-for-refractory-materials-report20260608152942/' },
        { label: 'US preliminary countervailing duty on Indian graphite electrodes — Federal Register, 30 Jul 2026', url: 'https://www.govinfo.gov/content/pkg/FR-2026-07-30/html/2026-15396.htm' },
        { label: 'Brazil anti-dumping investigation on graphite electrodes — Baker McKenzie, Mar 2026', url: 'https://www.bakermckenzie.com/en/insight/publications/2026/03/brazil-new-brazilian-antidumping-investigation-on-graphite-electrodes' },
        { label: 'GrafTech Q2 2026 results — SEC filing', url: 'https://www.sec.gov/Archives/edgar/data/931148/000093114826000071/a2026-2qearningspressrelea.htm' },
        { label: 'Graphite India Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/1f01b616-4c65-4cfe-aa9f-35b224cba470.pdf' },
        { label: 'HEG Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=393ba8bf-2ea2-45bb-9257-de3b5890e9e4.pdf' },
        { label: 'HEG Greentech (HEG Advanced Materials) investor presentation, July 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=88bdd2bc-5c8c-4533-afa7-016ceccb8057.pdf' },
        { label: 'HEG Annual Report FY26 (segments, related parties, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/1ee1b27d-6c24-4127-8901-e99deff90773.pdf' },
        { label: 'HEG rating rationale — India Ratings, May 2026', url: 'https://www.indiaratings.co.in/pressrelease/83197' },
        { label: 'HEG demerger record date, 7 September 2026 — Kotak Neo', url: 'https://www.kotakneo.com/news/stocks/heg-demerger-record-date-7-september-2026/' },
        { label: 'RHI Magnesita India Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=233e5cd6-88dc-4089-b94d-7e4ffd692b01.pdf' },
        { label: 'RHI Magnesita India Annual Report FY26 (MD&A, auditor, related parties) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e703d0c9-3ad7-41ac-bcb5-3e02bd8dfd9b.pdf' },
        { label: 'RHI Magnesita India Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6c4acecc-6f8d-4372-8c79-5f6fc3560508.pdf' },
        { label: 'Dalmia Bharat Refractories sells its RHI Magnesita stake — Upstox, 23 Sep 2026', url: 'https://upstox.com/news/market-news/stocks/rhi-magnesita-block-deal-dalmia-bharat-refractories-sells-11-stake-check-buyers-deal-size/article-200702/' },
        { label: 'IFGL Refractories Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=97a9566b-87e6-40ed-86d2-32aaeb01f31c.pdf' },
        { label: 'IFGL Refractories Annual Report FY26 (auditor, governance certificate) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e40d6334-4c7e-4aa8-8ae4-5cc1ec2bdfc6.pdf' },
        { label: 'IFGL Refractories rating rationale — ICRA, Aug 2026', url: 'https://www.icra.in/Rationale/ShowRationaleReport/?Id=145186' },
    ],
};
