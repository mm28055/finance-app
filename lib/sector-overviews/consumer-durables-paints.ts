import { SectorOverview } from './types';
import { consumerDurablesPaintsBusinesses } from './consumer-durables-paints-businesses';
import { consumerDurablesValuationInputs } from './card-data/consumer-durables';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const DECO = 'Decorative paints — house paints sold through dealers and painters';
const INDUSTRIAL = 'Industrial and automotive coatings, with a decorative arm';
const WOOD = 'Wood coatings — furniture and interior finishes sold on architect specification';

export const consumerDurablesPaints: SectorOverview = {
    sector: 'Consumer Durables',
    title: 'Consumer Durables · Paints and coatings',
    format: 'ranked',
    businesses: consumerDurablesPaintsBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '28 Sep 2026',
        inputs: consumerDurablesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        // 'Akzo Nobel' is the dashboard's name for JSW Dulux Ltd.
        myGrowth: {
            'Indigo Paints': 15,
            'Kansai Nerolac': 10,
            'Akzo Nobel': 16,
            'Sirca Paints': 13,
        },
    },
    standfirst:
        "Four listed paint and coating makers. This is one of five groups on the Consumer Durables page; the others cover cooling and electrical appliances, kitchen and houseware, tiles, bath and wood panels, and lifestyle brands (footwear, personal care and sleep). **Kansai Nerolac** is India's leader in car and powder coatings and its third-largest house-paint maker. **JSW Dulux** is the former Akzo Nobel India (the dashboard still lists it as Akzo Nobel), bought by JSW Paints in December 2025 and renamed in March 2026. **Indigo Paints** is a fast-growing house-paint challenger with the industry's best gross margin. **Sirca Paints** sells premium wood finishes under an Italian licence. The market leader, Asian Paints, and the number two, Berger, are not in this list, and neither are the three big newcomers, Birla Opus, JSW Paints and Pidilite's Haisha; but they set the prices everyone here must live with. This edition was built from both earnings calls for every company (Sirca held no Q1 call, so its Q4 call, a January investor event and its Q1 presentation were used), the FY26 annual reports, the Q1 FY27 presentations, rating reports from CRISIL and ICRA, and sector work on paints, housing and the economy. The headline: the West Asia war pushed up crude-linked raw materials from March 2026 and every company raised prices (Kansai's house-paint increases add up to the low teens, Sirca's to about 10%), so part of Q1 FY27's 10–19% like-for-like revenue growth is price, not paint sold; underneath, the newcomers' extra capacity keeps dealer discounts and painter incentives high, and the mid-sized players are either losing volume share (Kansai) or buying it with margin (JSW Dulux, Indigo). The annual reports turned up a whistle-blower complaint under investigation at JSW Dulux, a ₹19cr GST demand on Indigo's IPO expenses, overseas-investment filings still being regularised at Sirca, and a loss-making Bangladesh subsidiary guaranteed by Kansai. {Count:fits|None} of the {count:live|four} fits my growth estimate at today's price. Every chart uses filed results.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',
    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel, and Indigo includes its 51%-owned waterproofing arm, Apple Chemie.',
            note: "Sirca, the wood-finish specialist, earns the most and most steadily, 18–21%. Indigo's margin swings with the season and its own spending: 22–23% in the busy January–March quarter, 14–17% in the monsoon half. Kansai earns 11–14%, and management guides 13–14% for FY27. JSW Dulux has fallen from about 16% two years ago to 12% as its new owner cut prices and hired staff. Q1 FY27 was helped at some companies by paint made from raw materials bought before the war-driven price rise; Q2 carries the dearer stock.",
            values: {
                'Kansai Nerolac': [14, 11, 12, 11, 14],
                'Akzo Nobel': [13, 13, 15, 14, 12],
                'Indigo Paints': [14, 15, 19, 23, 17],
                'Sirca Paints': [20, 21, 20, 19, 18],
            },
            cellNotes: {
                'Kansai Nerolac': "Company figure 13.8% in Q1 FY27 (14.0% a year earlier). Gross margin fell about 1.1 points because car-makers accept price rises one to two quarters late; house-paint price rises made up the difference.",
                'Akzo Nobel': "Company figure 11.9% in Q1 FY27. Management attributes about 2 points to buying high-priced raw material with only about 60 days of stock, and about 2.5 points to moving painter promotions out of costs and into lower net revenue, an accounting change to match the industry. Guidance for FY27 is 13–15%.",
                'Indigo Paints': "Q1 FY27's 17% (standalone 17.7%, up from 14.8%) was helped because the whole industry suspended trade discounts for about 45 days after the price rises, and because Indigo skipped IPL advertising. The managing director said it means ‘we were not aggressive enough’ and spending will rise in Q2.",
                'Sirca Paints': "Company figure 18.6% in Q1 FY27, below its own 19–21% band, blamed on crude-linked inputs and freight. Sirca held no earnings call to explain it.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Growth picked up in Q1 FY27 for three of the four, but partly because of price rises of 5% to the low teens after the West Asia war. Indigo accelerated from 4–5% to 20% with double-digit volume growth in every category. Kansai re-accelerated to 10%, but its house-paint volume grew only in low single digits. JSW Dulux's filed revenue falls in every quarter because it sold its powder-coatings business in July 2025; like-for-like it grew 18.8% in Q1. Sirca's FY26 quarters were lifted by two brands it bought; Q1 FY27's 14% is closer to its own pace.",
            values: {
                'Kansai Nerolac': [1, 0, 3, 8, 10],
                'Akzo Nobel': [-4, -15, -15, -13, -3],
                'Indigo Paints': [-1, 4, 5, 10, 20],
                'Sirca Paints': [44, 25, 27, 33, 14],
            },
            cellNotes: {
                'Kansai Nerolac': "Q1 FY27 (company): house paints grew high single digits in value but low single digits in volume, against about 9% volume and about 16% value at the market leader; industrial grew double digits; car refinish was flat. Consolidated price increase about 5%.",
                'Akzo Nobel': "Powder coatings and a research centre were sold to AkzoNobel on 1 July 2025, so filed figures from Q2 FY26 are not comparable. Company like-for-like growth: Q4 FY26 +6.2% (volume +23%, after cutting its old 7–9% price premium), Q1 FY27 +18.8% (volume +25%).",
                'Indigo Paints': "Q1 FY27 by category (company, value / volume): primers and distempers +29.7% / +18.3%; putty and cement paint +21.2% / +13.7%; enamels and wood coatings +17.6% / about +10%; emulsions +17.1% / about +12.3%. Standalone growth 18.7%.",
                'Sirca Paints': "FY26 includes the Wembley and Welcome brands (about ₹120cr of sales), bought in FY25; the disclosures do not allow a clean organic figure. Company growth guidance was 25–30% a year; Q1 FY27 delivered 13.8%.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "JSW Dulux earned over 40% for two years as a lean, royalty-paying Akzo Nobel subsidiary; the ₹1,152cr purchase of the Dulux brand in FY26 halved the figure. Sirca and Indigo earn about 19–20%. Kansai earns 12%, held down by more than ₹2,500cr of cash and liquid investments earning treasury rates; management hopes its new industrial plants will earn ‘towards 18%’.",
            values: {
                'Kansai Nerolac': [11, 14, 17, 13, 12],
                'Akzo Nobel': [28, 35, 42, 42, 23],
                'Indigo Paints': [null, null, 23, 19, 19],
                'Sirca Paints': [18, 25, 24, 19, 20],
            },
            cellNotes: {
                'Kansai Nerolac': "FY24 and FY25 include one-off other income of ₹678cr (June 2023 quarter) and ₹671cr (December 2024 quarter), which flatter those years. Company standalone return on net worth, excluding exceptional items, was 10.3% in FY26.",
                'Akzo Nobel': "FY26 capital includes the Dulux brand bought from AkzoNobel for ₹1,152cr, held as an intangible asset; the brand ends royalty payments on house-paint sales.",
                'Indigo Paints': "Screener shows no ratio for FY22–FY23 on the consolidated basis. About ₹220cr of unfinished plant at Jodhpur (March 2026) sits in capital employed and earns nothing yet.",
                'Sirca Paints': "FY26 capital includes ₹100.75cr of goodwill from the Wembley and Welcome purchase, about a fifth of equity. FY26 is also Sirca's first year under Indian accounting standards (Ind AS), so earlier years are not strictly comparable.",
            },
        },
        {
            key: 'ccc',
            more: true,
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'diverging',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Sirca ties up more than six months of sales: it holds six months of imported acrylic as safety stock and gives furniture makers and dealers long credit. Kansai has cut its cycle from 123 days to 95 by trimming stock. Indigo's has risen from 18 days to 55 as it gave dealers more credit. JSW Dulux ran on suppliers' money under Akzo Nobel; that ended in FY26.",
            values: {
                'Kansai Nerolac': [123, 115, 110, 109, 95],
                'Akzo Nobel': [22, 11, -10, -3, 29],
                'Indigo Paints': [null, 18, 31, 55, 55],
                'Sirca Paints': [204, 229, 213, 218, 193],
            },
            cellNotes: {
                'Kansai Nerolac': "FY26: inventory days down from 133 to 119; debtor days up to 67. Management: ‘special focus has been on reduction on inventory’.",
                'Akzo Nobel': "FY26: debtor days 61 against 52 a year earlier. Rebates and discounts reached about 25% of gross revenue under the new owner (company, Q1 FY27 call).",
                'Indigo Paints': "Debtor days 62 → 66 → 74 over FY24–FY26; inventory days 91 → 77 → 87. The new strategy of heavier trade schemes could push receivables higher.",
                'Sirca Paints': "FY26: debtor days up from 92 to 115; inventory 151 days. Management blamed the Wembley hand-over (the old owners collected first) and promised stock ₹15–20cr lower by June 2026; no Q1 balance sheet was published to check.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Indigo turned 77% of its operating profit into cash over five years and 87% in FY26; Kansai 66% over five years and 92% in FY26 as it cut stock. JSW Dulux fell to 18% in FY26 as working capital swung during the change of owner. Sirca turned less than half its profit into cash, both over five years and in FY26.",
            values: {
                'Kansai Nerolac': [4, 50, 88, 71, 92, 66],
                'Akzo Nobel': [28, 92, 77, 49, 18, 55],
                'Indigo Paints': [null, 64, 63, 88, 87, 77],
                'Sirca Paints': [92, -31, 61, 81, 44, 47],
            },
            cellNotes: {
                'Kansai Nerolac': "Operating cash ₹894cr in FY26 against operating profit of ₹975cr. FY22's 4% was a year of raw-material inflation and stock build.",
                'Akzo Nobel': "Operating cash ₹93cr in FY26 against ₹312cr in FY25. In Q1 FY27 it also received a ₹108cr income-tax refund, which will help FY27.",
                'Sirca Paints': "Operating cash ₹44cr in FY26 against operating profit of ₹99cr, as debtors and imported stock rose.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Kansai is the steadiest cash generator, about 8.5% of revenue in FY24 and FY26. Indigo's free cash has risen every year even while it built the Jodhpur plant, and should step up now that management says no major spending is due until FY29. JSW Dulux's FY26 is distorted by the ₹1,152cr brand purchase; Sirca's FY25 by its acquisition.",
            values: {
                'Kansai Nerolac': [-3.0, 3.8, 8.5, 4.4, 8.5, 4.7],
                'Akzo Nobel': [1.8, 10.0, 9.3, 5.1, -30.7, -0.5],
                'Indigo Paints': [null, -7.7, 3.6, 5.2, 6.3, 2.4],
                'Sirca Paints': [6.6, -11.0, 9.6, -14.2, 3.3, -1.4],
            },
            cellNotes: {
                'Akzo Nobel': "FY26 includes the ₹1,152cr Dulux brand bought from AkzoNobel, recorded as capital spending; free cash was about −₹1,034cr on Screener. Ordinary capex was only ₹47cr.",
                'Indigo Paints': "Free cash ₹47cr (FY24), ₹70cr (FY25) and ₹88cr (FY26) while the Jodhpur plant was built.",
                'Sirca Paints': "FY25 includes the purchase of the Wembley and Welcome brands (free cash about −₹53cr). FY26 free cash about ₹17cr.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Below zero means more cash than debt. All four hold net cash; the borrowings they show are mostly leases. Kansai's pile has grown to more than two years of operating profit. JSW Dulux's shrank after special dividends and the brand purchase. Sirca's dipped after its acquisition and recovered after a ₹75cr share issue in September 2025.",
            values: {
                'Kansai Nerolac': [-0.2, -0.6, -1.3, -2.0, -2.3],
                'Akzo Nobel': [-0.9, -0.9, -0.7, -0.4, -0.5],
                'Indigo Paints': [null, -0.9, -0.8, -1.0, -1.2],
                'Sirca Paints': [-2.2, -0.8, -1.7, -0.1, -0.8],
            },
            cellNotes: {
                'Kansai Nerolac': "Borrowings ₹303cr (mostly leases) against cash and liquid investments of more than ₹2,500cr; CRISIL AAA/Stable, reaffirmed August 2026.",
                'Akzo Nobel': "No bank debt; ₹79cr of lease liabilities; unencumbered cash ₹324cr at March 2026 after the brand purchase and ₹206 a share of dividends in FY26 (including a ₹156 special). ICRA AA-/Stable from September 2026.",
                'Indigo Paints': "Borrowings ₹21cr against investments of ₹300cr at March 2026. It guarantees ₹18cr of Apple Chemie's bank lines.",
                'Sirca Paints': "Borrowings ₹32cr against cash of about ₹43cr and investments of ₹57cr at March 2026.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated for all four; JSW Dulux is listed under its old name, Akzo Nobel.',
            note: "Paint is a light-capital business: Kansai has spent about 3% of revenue a year. Indigo spent 8–19% a year, the heaviest in the group, most recently on its Jodhpur plant. JSW Dulux's FY26 and Sirca's FY25 are acquisitions of brands, not factories. Kansai is about to double its rate for two years with a ₹601cr industrial programme.",
            values: {
                'Kansai Nerolac': [3.4, 1.6, 3.0, 4.2, 2.6, 3.0],
                'Akzo Nobel': [2.0, 2.7, 3.0, 2.6, 33.3, 8.6],
                'Indigo Paints': [null, 18.5, 8.0, 10.1, 9.6, 11.2],
                'Sirca Paints': [11.2, 3.8, 3.9, 28.8, 5.7, 10.9],
            },
            cellNotes: {
                'Kansai Nerolac': "New ₹601cr programme at Sayakha (Gujarat), Bawal (Haryana) and Hosur (Tamil Nadu), phased to FY28–29 and paid from own cash, on top of ₹150–200cr a year of normal spending: about ₹400–450cr a year for two to two-and-a-half years.",
                'Akzo Nobel': "FY26 is almost all the ₹1,152cr Dulux brand purchase. The new owner promises ‘serious’ capacity spending but has given no amount or date.",
                'Indigo Paints': "Unfinished plant ₹220cr at March 2026, almost all the 90,000 KL Jodhpur water-based plant; trial production started in late August 2026.",
                'Sirca Paints': "FY25 is mainly the Wembley and Welcome purchase (it created ₹100.75cr of goodwill). FY26 plant spending was about ₹13.5cr; FY27 is guided at ₹5–6cr.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'brand', label: 'Brand and reach', description: 'How well known the brand is, how many dealers stock it and hold its tinting machines, and how much of the market it holds.' },
            { key: 'pricing', label: 'Pricing power', description: 'Whether the company can raise prices ahead of costs, or keep a premium over rivals, through a normal quarter.' },
            { key: 'switching', label: 'Approvals and specification', description: 'Car-maker and industrial approvals, and architect specification, that make a customer slow to switch supplier.' },
            { key: 'cost', label: 'Cost position and margin', description: 'In-house inputs, plant location and scale, and the operating margin that results through a normal year.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what auditors, rating agencies, related parties, guarantees and disclosure show.' },
        ],
        rows: [
            { company: 'Indigo Paints', trend: 'stable', trendNote: 'Gross margin above listed peers for 13 straight quarters and volume up double digits in every category in Q1; but management is now spending that margin on trade schemes to buy share from a 2.5% base.',
                grades: { brand: { grade: 'C', note: 'About 2.5% share; 19,382 dealers' }, pricing: { grade: 'B', note: 'Gross margin 45–49% vs peers 41–43%' }, switching: { grade: 'C', note: 'Own niche products, 30% of sales' }, cost: { grade: 'A', note: 'Own putty near raw materials' }, cash: { grade: 'B', note: 'Debt-free; ₹19cr GST demand on IPO costs' } } },
            { company: 'Kansai Nerolac', trend: 'stable', trendNote: 'Industrial lead is widening with ₹601cr of new plants and share gains with car-makers; house-paint volume grew in low single digits against the leader’s 9% in Q1.',
                grades: { brand: { grade: 'B', note: 'No. 3 in house paints; 35,000+ dealers' }, pricing: { grade: 'C', note: 'Car-makers pay rises 1–2 quarters late' }, switching: { grade: 'A', note: 'Leader in car and powder coatings' }, cost: { grade: 'B', note: 'Margin 11–14%' }, cash: { grade: 'A', note: 'Over ₹2,500cr cash; AAA' } } },
            { company: 'Akzo Nobel', trend: 'widening', trendNote: 'Now JSW Dulux: volume up 25% in Q1 as JSW widens distribution and shares plants with JSW Paints; but the gain is bought by cutting Dulux’s old price premium and a lower margin.',
                grades: { brand: { grade: 'B', note: 'Dulux premium brand; only ~5% share' }, pricing: { grade: 'C', note: 'Old 7–9% premium cut to about 2%' }, switching: { grade: 'B', note: '~7% industrial share; car-maker wins' }, cost: { grade: 'C', note: 'Margin down from ~16% to 11.9%' }, cash: { grade: 'C', note: 'Whistle-blower probe; JSW Paints dealings' } } },
            { company: 'Sirca Paints', trend: 'narrowing', trendNote: 'Localisation savings were handed to customers as rivals copied them, the acquired Wembley brand was flat in its first year, and growth guidance fell from 25–30% to ‘double-digit’ without a call.',
                grades: { brand: { grade: 'B', note: 'Italian licence to 2041; ~15% of premium' }, pricing: { grade: 'C', note: 'Passed 12–15% of 20% saving on' }, switching: { grade: 'B', note: 'Sold on architect specification' }, cost: { grade: 'B', note: 'Margin 18–21%; little plant needed' }, cash: { grade: 'D', note: '193-day cycle; cash 44% of op. profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Follow Indigo Paints.** **Indigo Paints** makes house paints (emulsions, enamels, primers, putty and cement paint), and about 30% of sales come from products it created, such as floor-coat and tile-coat paints. After two flat years (revenue +2.7% in FY25 and +4.8% in FY26) it grew 19.7% in Q1 FY27 with double-digit volume growth in every category, and its gross margin of 45–49% has been above the listed peers' for 13 straight quarters. Its Jodhpur plant began trial production in late August and no major spending is due until FY29, so free cash should rise. The catch is the plan itself: to grow from a share of about 2.5%, it will give up to 2–2.5 points of gross margin on trade schemes and advertising, in a market where Birla Opus and JSW are doing the same with deeper pockets. The record is also patchier than the Q1 headline: the ~24% growth it endorsed in May has since been softened, Jodhpur ran about three months late, debtor days have risen from 62 to 74 in two years, and a ₹19.26cr GST demand sits on its IPO costs. I expect about 15% a year of earnings growth; the price needs about {need:Indigo Paints|19}%. **Follow it, and buy if Q2 and Q3 show about 20% growth with gross margin above 45% and debtor days no higher.**",
                "**Follow Kansai Nerolac.** **Kansai Nerolac**, 75% owned by Kansai Paint of Japan, is India's leader in car and powder coatings and its third-largest house-paint maker; it does not publish a split, but management put industrial at ‘maybe 45’ per cent of Q1 sales. Q1 FY27 was its best quarter in two years: revenue +9.8% to ₹2,374cr, a 13.8% margin and ₹228cr of profit. It holds more than ₹2,500cr of cash and liquid investments and is paying for a ₹601cr industrial expansion from its own cash. The weakness is house paints, where its volume grew in low single digits while the market leader grew about 9%, which management calls a deliberate retreat from low-margin products. It also missed its own FY26 promise of a margin ‘above 13%’ (12.1% filed), and its Bangladesh subsidiary lost ₹27.6cr on a bank loan the parent guarantees. CRISIL expects only 6–8% revenue growth a year. I expect about 10% a year; the price needs about {need:Kansai Nerolac|15}%. **Follow it for the industrial franchise and the cash; I would upgrade it if house-paint volume caught up with the leader or the cash were put to work.**",
                "**Wait on JSW Dulux.** **JSW Dulux** (listed as Akzo Nobel) is the former Akzo Nobel India: Dulux house paints, Sadolin wood care, and industrial coatings for car refinish, ships, steel and coil. In July 2025 it sold its powder-coatings business to AkzoNobel for ₹2,073cr and bought the Dulux brand for India from it for ₹1,152cr; in December 2025 JSW Paints took 61.2%. Under JSW it cut Dulux's old 7–9% price premium and widened its reach, and Q1 volume rose 25%. But the margin fell to 11.9% from about 16% two years ago, operating cash was only ₹93cr in FY26, a whistle-blower complaint was under investigation at the year-end audit, and a merger with the unlisted JSW Paints is widely expected but not announced. I expect about 16% a year; the price needs about {need:Akzo Nobel|21}%. **Wait for the margin to return to the 13–15% band management promised (Q1's 11.9% was already below it), for any merger terms, and for the whistle-blower outcome.**",
                "**Pass on Sirca Paints.** **Sirca Paints** sells premium polyurethane (PU) and acrylic wood finishes for furniture, doors and kitchens under a licence from Sirca S.p.A. of Italy that runs to 2041, plus the cheaper Wembley and Welcome brands it bought in FY25. Architects specify its finishes, it holds about 15% of the premium wood-finish segment, earns 18–21% margins and needs little plant. But FY26's 32% growth was largely bought, working capital ties up about 193 days, and in Q1 FY27 it grew 13.8% against a promised 25–30% with its margin below its own band. It held no earnings call to explain this and simply wrote ‘double-digit’ growth into its presentation, and ₹100.75cr of goodwill, about a fifth of equity, rides on the Wembley brand that was flat in its first year. I expect about 13% a year; the price needs about {need:Sirca Paints|20}%. **Pass until growth is back above 20%, debtors are falling and it holds a call to explain its numbers.**",
                "**Three things to hold onto before reading the rest.** First, **a price war is running in house paints**: Birla Opus (Aditya Birla group), JSW Paints and Pidilite's Haisha are adding capacity, and the incumbents answer with dealer schemes, painter incentives and freebies. The market leader, Asian Paints, still grew volume 9% in Q1; the mid-sized players are either losing volume share (Kansai) or buying it with margin (JSW Dulux, Indigo). Second, **Q1 FY27 is not a normal quarter**: prices rose after the West Asia war, the industry paused trade discounts for about 45 days, and Kansai sold paint made from cheaper, older stock. Third, **check whether a figure is filed or the company's own**: JSW Dulux quotes like-for-like growth because its filed revenue falls after the powder-coatings sale, and its Q1 standalone profit of ₹135.5cr includes a ₹55.9cr dividend from its own subsidiary (consolidated profit was ₹79.7cr).",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener; JSW Dulux appears under its old name, Akzo Nobel. Hover over a starred name for its caveat. Two cautions: JSW Dulux's filed revenue is not comparable after it sold its powder-coatings business in July 2025, and its FY26 capex and free cash include the ₹1,152cr brand purchase; Sirca's FY25 and FY26 include two acquired brands.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Kansai's Q2, Q3 and Q4 FY26 revenue and profit were stored as zero (filed revenue ₹1,954cr, ₹1,982cr and ₹1,954cr). JSW Dulux is still stored as Akzo Nobel, its Q1 FY27 profit was stored as the standalone ₹135.5cr rather than the consolidated ₹79.7cr, and the stored Q4 FY26 transcript said the final dividend was ‘50 paise’ when the official text says ₹50 a share; a vivid quote the stored profile attributes to the Q4 call does not appear in the official transcript. Sirca's stored ‘Q3 FY26’ row (₹245cr) was its first-half total, and its stored ‘Q3 transcript’ was an investor event that misquoted FY26 guidance as 35–40% (official: 25–40%). Indigo's stored profile called its record clean while omitting a ₹19.26cr GST demand. Every quote here was checked against the official filing.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian consumer durables started FY27 with a price shock, not a demand boom, and paints are the clearest case of new capacity fighting over a slow-growing market.** The West Asia war, from March 2026, pushed up gas, crude-linked chemicals, copper and freight at once, and almost every home-products maker raised prices 5–20% between March and May. Q1 FY27 revenue growth of 15–45% at many durables companies is mostly price, with volume in single digits outside cooling. The RBI projects FY27 GDP growth of 6.9% but warns the war will hurt growth through energy prices. Housing, which drives paint demand two to three years after launch, is mixed: Anarock counted top-seven-city sales down 6% in Q2 2026 but launches up 7%. **My view: paint demand is steady, but profit in house paints is being redistributed by the newcomers' spending, and the safer pools are industrial coatings and specified wood finishes.**",
            ],
            points: [
                {
                    label: 'Value chain and where profit sits',
                    text: "Paint is mostly chemistry bought from outside: titanium dioxide (the white pigment), monomers, resins and solvents, much of it crude-linked, cost Kansai 55–60% of sales on CRISIL's figures. House paint reaches the buyer through dealers who hold a company's tinting machine, and the painter often picks the brand, so companies spend heavily on dealers and painters; industrial coatings are sold on approved formulations and contract prices. CRISIL estimates house paints at 70–75% of the Indian paint industry, where Asian Paints holds 55–60% and Berger about 17–18%. In this group, **Sirca** earns 18–21%, **Indigo** 14–23% depending on the season, **Kansai** 11–14% and **JSW Dulux** 12–15%. **Profit sits with those who own the dealer's shelf at scale, or with specialists whose product is specified rather than chosen at the counter.**",
                },
                {
                    label: 'The new-entrant price war',
                    text: "Birla Opus, JSW Paints and Pidilite's Haisha are building capacity, and sector coverage describes competition as ‘intense’. Kansai says there is no let-up in dealer schemes or painter incentives and ‘freebies’ continue in some markets; JSW Dulux's managing director expects it to stay ‘very competitive for the next 1-2 years’, with mass and economy paints ‘underwhelming’. In Q1 FY27 Asian Paints grew volume 9% and Berger 8.5%, JSW Dulux 25% after cutting prices, and Kansai only low single digits. JSW is on both sides: a newcomer through JSW Paints and, since December 2025, the owner of Dulux. **My view: the war moves share from mid-sized incumbents to the deep-pocketed, and it will last at least until the newcomers' plants are full.**",
                },
                {
                    label: 'Raw materials and price rises in FY27',
                    text: "The war lifted crude-linked inputs from March 2026. **Kansai** raised house-paint prices four times (about 2% on 25 March, then 5–6% each on 10 April, 21 April and 11 May), low teens in all, and about 5% in industrial; it expects about 3% more in house paints in Q2. **JSW Dulux** said in May that raw-material inflation was 24–25% and the industry still needed about 3–4% more pricing; in August it said only that its increases had been in line with the industry, while the newcomers kept discounting. **Sirca** raised prices 5% in April and 5% in May. Industrial prices follow one to two quarters late because car-makers renegotiate on a schedule. **My view: price rises have covered costs so far, but Q2 carries dearer stock, and any fall in crude will be competed away quickly in a price war.**",
                },
                {
                    label: 'Industrial and wood coatings: the less crowded pools',
                    text: "The newcomers are fighting over house paints. Industrial coatings need approvals that take years: **Kansai** leads in car and powder coatings, with its industrial plants at 70–75% use and ₹601cr of new capacity coming; **JSW Dulux** holds about 7% of industrial paints and aims to lead it by 2031. Wood finishes are a separate niche of about ₹9,500cr (Sirca's estimate), where **Sirca** holds about 15% of the premium PU and acrylic segment and 4–4.5% of the whole. Factory-made furniture and furniture quality rules are shifting demand from cheap melamine to PU and acrylic, which **Indigo** is entering with a two-pack PU range in September–October 2026 (it estimates that segment at ₹9,000cr). **My view: these pools are protected by approvals and specification, not by advertising, which is why margins there held up better.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Premium wood finishes, sold on specification', 'Sirca', '18–21%', '20%', '**47%**', 'Italian licensed brand and architect specification; heavy stock and long credit'],
                        ['House paints, challenger with its own niches', 'Indigo', '14–23%', '19%', '**77%**', 'Best gross margin in the group from in-house putty and self-created products; seasonal spending'],
                        ['House paints (premium brand) plus industrial', 'JSW Dulux', '12–15%', '23%', '**55%**', 'Premium brand now priced near the market; FY26 return cut by the ₹1,152cr brand purchase'],
                        ['Industrial and car coatings plus house paints', 'Kansai', '11–14%', '12%', '**66%**', 'Car-maker approvals; price rises paid late; a large cash pile dilutes returns'],
                        ['For comparison: the market leaders', 'Asian Paints (55–60% of house paints), Berger (about 17–18%)', '—', '—', '—', 'Scale sets the prices everyone else must match; not in this list'],
                    ],
                    note: 'Indigo’s range is seasonal: 22–23% in January–March, 14–17% in the monsoon half. JSW Dulux’s five-year cash conversion includes the weak FY26 (18%) during the change of owner.',
                },
                {
                    caption: 'The market: size, share, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['House paints as share of the industry', '70–75%', '—', 'CRISIL Ratings, Aug 2026'],
                        ['House-paint market shares', 'Asian Paints 55–60%; Berger about 17–18%; JSW Dulux about 5%; Indigo about 2.5%', 'Birla Opus, JSW Paints and Haisha keep competition ‘intense’', 'Paint-sector round-up, Sep 2026; company estimates'],
                        ['Q1 FY27 volume growth', 'Asian Paints 9%; Berger 8.5%; JSW Dulux 25%; Kansai low single digits', '**FY27 volume 8–10%** (Asian Paints guide)', 'Asian Paints management, Aug 2026; company calls'],
                        ['Kansai Nerolac revenue and margin', 'FY26 revenue +2.9%; margin about 12%', '**6–8% a year; margin 11–13%**', 'CRISIL Ratings, Aug 2026'],
                        ['JSW Dulux margin', 'Q1 FY27 11.9%', '**14–16% operating margin in FY27**', 'ICRA, Sep 2026'],
                        ['Wood-coatings market', 'About ₹9,500cr; Sirca 4–4.5%', 'Sirca targets 10% by 2030', 'Sirca, Jan 2026 (company estimate)'],
                        ['Housing, top seven cities (demand driver)', 'Q2 2026 sales −6% y/y; launches +7%', 'Paint demand follows completions two to three years later', 'Anarock, Jul 2026'],
                        ['Consumer durables overall', '—', 'About 11% a year to about ₹3 lakh cr by FY29', 'Industry estimate in Orient Electric AR FY26'],
                        ['Economy', 'Policy rate 5.25%', '**FY27 GDP 6.9%, inflation 4.6%**', 'RBI, Apr 2026'],
                    ],
                    note: 'None of the sources read gives an independent size for the whole Indian paint market; the wood-coatings and share figures for JSW Dulux and Indigo are company estimates and are labelled as such.',
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
                    label: 'Lasting: car-maker and industrial approvals',
                    text: "A car-maker approves a paint system for a model and rarely changes it mid-life, which is the strongest switching cost in this group. **Kansai** is the leader in car and powder coatings, gained share with car-makers in FY26, won supplier awards from Toyota Kirloskar, Maruti Suzuki, Suzuki Motorcycle and TAFE, and says it is the only Indian maker of the full range of car-paint resins. **JSW Dulux** has won Porsche, MG (a JSW-group company) and Mahindra, and supplied coil coatings for the Navi Mumbai airport, though its international industrial brands still belong to AkzoNobel and are used under licence. The flip side is price: CRISIL notes ‘pricing pressure from auto OEMs’, and Kansai's industrial contribution fell about 1.3 points in Q1 while price talks caught up. **My view: approvals protect Kansai's volume, not its margin.**",
                },
                {
                    label: 'Lasting: specification in wood finishes',
                    text: "**Sirca** sells through architects and interior designers who, in management's words, ‘specify like a doctor’: all of its retail sales are pulled by specification, and about 30% of revenue goes directly to 900-plus furniture, kitchen and door makers such as Godrej and Spacewood. It has an Italian brand and technology licence to 2041 (royalty 0.75% of revenue), 20-year architect relationships, and 25,000-plus contractors on its app. Management says the big paint makers pose a ‘lesser challenge’ in premium finishes; competition bites in the mass segment where its Wembley and Welcome brands sit. **My view: specification is a real moat in the premium tier, but it did not stop rivals matching Sirca's price cuts.**",
                },
                {
                    label: 'Evidence of pricing power',
                    text: "**Indigo** is the only one with clear numbers: its gross margin has been 45–49% against a listed-peer average of about 41–43% for 13 straight quarters, and it announced its March 2026 price rise around 24–25 March, before the market leader's on 8 April. **JSW Dulux** has gone the other way, cutting Dulux's old 7–9% premium to about 2% on some premium lines and to par with Berger in mid-market, and says it benchmarks prices to the leader, not the newcomers. **Kansai**'s margin has swung between 10% and 17% over a decade, per CRISIL. **Sirca** saved about 20% of cost by making PU finishes in India and passed 12–15 points of it on as price cuts because ‘the competition has also followed’. **My view: only Indigo shows pricing power, and it has chosen to spend it on growth.**",
                },
                {
                    label: 'Reach: necessary, but money can copy it',
                    text: "**Kansai** has 35,000-plus dealers, 20,000-plus tinting machines and added 1,700 dealers in Q1,. **Indigo** has about 19,400 dealers and 12,395 tinting machines, up about 1,100 in a year, and pays health cover for 30,000-plus painter families. **JSW Dulux** reaches about 22,000 retailers and has a meaningful presence in 3,400–3,500 towns, aiming for 4,500 this year, with direct selling in the top 20 towns. **My view: reach is the price of entry, not a moat, because the newcomers are buying it with dealer money right now.**",
                },
                {
                    label: 'Evidence of share',
                    text: "**JSW Dulux** holds about 5% of house paints and 7% of industrial paints, with strongholds in Bengal, Gujarat, Punjab and Delhi and 8–10% in some states, and its 25% volume growth in Q1 was the fastest among listed players. **Indigo** has about 2.5% of Indian paints on its managing director's estimate and grew faster than the listed peers in Q1. **Kansai** is third in house paints but lost share in Q1. **Sirca** holds about 15% of premium PU and acrylic wood finishes. **The share gains in this group are being paid for; none has yet shown it can gain share and hold margin at the same time.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Asian Paints** and **Berger** set the price in house paints and are not in this list. **Birla Opus**, **JSW Paints** and Pidilite's **Haisha** are the newcomers; JSW Paints is JSW Dulux's unlisted sister, now sharing plants and a projects team with it, which makes it both a rival to the others and a related party of one. The calls do not name industrial or wood-finish rivals, beyond saying that competitors copied Sirca's move to local production.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? In paint the margin depends on raw-material prices (more than half of sales), on how much a company spends on dealers and painters to defend its shelf, and on whether its customers are car-makers who pay price rises late or architects who specify a brand. Three patterns show up: margins protected by specification and in-house inputs, margins moved by raw materials and price rises, and margins distorted by one-offs and accounting changes.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specification, niches and in-house inputs',
                    text: "**Sirca**'s 18–21% rests on architect specification and a plant that needs little capital, though its acquired Wembley brand earns a gross margin 10–15 points lower. **Indigo**'s gross margin lead comes from making more than 90% of its putty in-house close to raw materials, keeping few plants near their inputs, selling about 30% self-created products, and discipline on discounts. **Kansai**'s industrial business earns steady margins on approved formulations. **My view: through a normal year Sirca earns about 19–20%, Indigo about 17–18%, Kansai 12–14% and JSW Dulux 13–15% if its brand can hold its price near the leader's.**",
                },
                {
                    label: 'Cyclical: raw materials and the timing of price rises',
                    text: "**Kansai** sold paint made from cheaper, older stock in Q1 and will carry dearer stock in Q2, offset by further increases. **JSW Dulux** lost about 2 points of margin in Q1 because it holds only about 60 days of house-paint stock and so bought at the peak. Car-makers' price rises lag one to two quarters, which cost Kansai about 1.3 points of industrial contribution. **Sirca**'s raw materials are about 95% solvents and resins, all crude-linked,. **My view: the Q1 margins of Kansai and Indigo are at the high end of normal, and JSW Dulux's is at the low end.**",
                },
                {
                    label: 'Not structural: one-offs and accounting',
                    text: "**Indigo**'s Q1 margin rose instead of falling because the industry paused trade discounts for about 45 days and it skipped IPL advertising; management says spending will rise in Q2, and treasury gains and losses move its profit by several per cent a quarter. **JSW Dulux** moved painter promotions from costs to lower revenue, cutting the reported margin about 2.5 points with no effect on cash; its Q1 standalone profit included a ₹55.9cr dividend from its own subsidiary and ₹21.5cr of interest on a tax refund, and Q4 FY26 had ₹64.8cr of property income. **Kansai**'s FY24 and FY25 profits include one-off other income of about ₹678cr and ₹671cr; FY26 carried exceptional losses of ₹44.7cr (gratuity under the new wage code), ₹10.2cr (a warehouse fire) and ₹5.8cr of impairments (standalone).",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Sirca** ties up about 193 days: debtor days rose from 92 to 115 in FY26 and inventory stood at 151 days, including six months of imported acrylic kept as safety stock. Operating cash was ₹44cr against ₹99cr of operating profit. Management blamed the Wembley hand-over and promised lower stock and debtors from June; with no Q1 balance sheet or call, that cannot be checked.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Indigo**'s cash cycle has risen from 18 days in FY23 to 55, with debtor days up from 62 to 74 over FY24–FY26; its new strategy of heavier trade schemes could push them higher. **JSW Dulux** went from a cycle of −3 days, when suppliers funded it, to 29 days, and operating cash fell to ₹93cr in FY26 from ₹312cr; rebates and discounts now reach about 25% of gross revenue, including a 4.5–4.7% distributor margin.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Kansai** cut its cycle from 123 days in FY22 to 95 in FY26, mainly by bringing inventory days down from 133 to 119, and turned ₹894cr of operating cash in FY26, 92% of operating profit, leaving about ₹680cr of free cash. It paid ₹2.50 a share in dividends, about half of reported profit. **Indigo**, despite the rising cycle, turned 87% of operating profit into cash in FY26.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Paint dealers expect credit and schemes, and a price war makes them expect more; car-makers pay on their own terms; imported raw materials need safety stock when shipping is disrupted. **Judge each company against its own history, and expect receivables to rise across the group while the price war lasts.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Indigo Paints', 'Jodhpur trial production from the second half of August; no significant capex for about three years; spending on trade and advertising to rise in Q2; stake in Apple Chemie to rise from 51% to 62%', 'Borrowings ₹21cr against investments ₹300cr at March; guarantees ₹18cr of Apple Chemie’s bank lines; no current credit rating'],
                        ['Kansai Nerolac', '₹601cr of new industrial and resin capacity over ‘2 years, 2-plus years’ from own cash, plus ₹150–200cr a year of normal spending; margin 13–14% for FY27', 'Borrowings ₹303cr, mostly leases, against more than ₹2,500cr of cash and liquid investments; CRISIL AAA/Stable, Aug 2026'],
                        ['Akzo Nobel', 'JSW Dulux: about 60 days of house-paint stock; ₹108cr income-tax refund received; ‘serious’ capacity spending promised but not sized; SAP systems switch around Diwali', 'No bank debt (₹79cr of leases); unencumbered cash ₹324cr at March after the brand purchase; ICRA AA-/Stable, Sep 2026'],
                        ['Sirca Paints', 'No Q1 call. On the Q4 call: stock to fall ₹15–20cr by June; FY27 capex only ₹5–6cr; current plants support about ₹750–800cr of revenue', 'Borrowings ₹32cr against cash about ₹43cr and investments ₹57cr at March; ₹75cr share issue Sep 2025; no credit rating'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Sirca’s row relies on its Q4 call and Q1 presentation, which carried no balance sheet.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what is being built and how it is paid for, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth. Paint needs little capital, so three of the four can grow for two or three years on plants they already have; the question is how much margin they spend to fill them.",
            ],
            points: [
                {
                    label: 'Growth driver: buying share in house paints',
                    text: "**JSW Dulux** is widening from 3,400–3,500 meaningful towns to 4,500, selling directly in the top 20 towns, running a painter programme, and making JSW Paints products at its Gwalior and Mohali plants (and vice versa) to use spare capacity: its house-paint plants run at only 55–60%, so growth needs little new money. **Indigo** now aims to grow about 10 points faster than the industry, has a new chief business officer from ITC re-targeting dealers, and is lifting its waterproofing arm, Apple Chemie (₹75cr of FY26 sales, +40% in Q1), to 62% ownership. **My view: both will grow faster than the market; the question is how much margin it costs.**",
                },
                {
                    label: 'Growth driver: industrial capacity at Kansai',
                    text: "**Kansai**'s ₹601cr programme adds 65,880 KL a year of paint and powder capacity and 9,780 KL of resin at Sayakha (Gujarat), Bawal (Haryana) and Hosur (Tamil Nadu), phased to FY28–29 and paid from its own cash; its industrial plants already run at 70–75%. Management expects asset turns of about one time and a return ‘towards 18%’, against 12% on Screener today; at one time the plants would add roughly ₹600cr of sales, about 7% of today's revenue, from about FY29. It also aims to lead non-car industrial coatings within about two years. **JSW Dulux** plans more capacity at its Bengaluru industrial plant but has not said how much. **My view: Kansai's capex is sensible and fully funded, but it is sized to keep share, not to change the growth rate.**",
                },
                {
                    label: 'Growth driver: premium finishes and new products',
                    text: "**Sirca** is riding the shift from melamine to PU and acrylic finishes as furniture becomes factory-made, began making acrylic, polyester and UV finishes in India from Q1 FY27, opened five of its 20 depots in the South and West last year (about 80% of revenue is from the North), and targets exports of 3–4% of revenue. **Indigo** launches a two-pack PU wood-coating range in September–October. **Kansai**'s newer businesses (waterproofing, construction chemicals and wood finishes) are slightly above 10% of its house-paint sales, and its loss-making construction-chemicals subsidiary, Nerofix, is being merged in.",
                },
                {
                    label: 'Growth driver: plants already built',
                    text: "**Indigo**'s 90,000 KL Jodhpur plant raises water-based capacity by about 52% to 2,62,000 KL a year and replaces a 20-year-old manual plant on the same site; the gain is shorter freight to North, East and Central India more than volume. **Sirca**'s core plant is about 68% used and its consolidated Wembley plant can support ₹250–300cr of sales; together management says they can carry ₹750–800cr of revenue against ₹508cr today, with FY27 capex of only ₹5–6cr. **My view: Indigo's and Sirca's free cash should rise because the spending is done.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**JSW Dulux** said in May the gap between volume and value growth would close by August–September; like-for-like growth jumped from 6.2% to 18.8%. **Indigo** grew faster than the listed peers with margin up. **Kansai** held 13.8%, inside its band. **Sirca** started local acrylic production as promised.",
                },
                {
                    label: 'Cautious',
                    text: "**Kansai** kept, rather than raised, its 13–14% margin guide and aims only to ‘maintain our position, if not improve’ in house paints; CRISIL is more cautious still, at 6–8% growth and 11–13% margins. **JSW Dulux** expects Q2 margins ‘in a similar band’ to Q1 and a competitive market for one to two years. **Indigo** softened its growth goal: in May the managing director said ‘Yes and yes’ to about 24% growth; in August the target became about 10 points above the industry if the industry grows 15%, and double the industry only if it grows about 5%.",
                },
                {
                    label: 'Missed',
                    text: "**Sirca** promised in May growth of at least 25–30% a year, a 19–21% margin and ₹1,000cr of revenue by FY29 (about 27% a year); Q1 delivered 13.8% growth at an 18.6% margin, no call was held, and the presentation now says ‘double-digit’. **Indigo**'s Jodhpur plant, due before June and then ‘next month, that is in June 2026’, reached trial production only in late August; the managing director told an analyst ‘you are actually being kind to us’. **JSW Dulux**'s 11.9% Q1 margin was below the 13–15% band it gave on the same call. **Kansai** had promised an FY26 margin ‘above 13%’ in November 2025 and delivered 12.1% on Screener (12.7% standalone on its own figures).",
                },
                {
                    label: 'Mixed',
                    text: "**JSW Dulux** beat on growth and missed on margin, the trade its owner chose. **Kansai** re-accelerated but lost house-paint share. **Indigo**'s Apple Chemie grew 40% but its margin was squeezed by dear stock. **Sirca**'s Wembley brand sold ₹74cr in FY26 against about ₹72cr at purchase, a flat first year.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect JSW Dulux to grow earnings at about 16% a year, Indigo at about 15%, Sirca at about 13% and Kansai at about 10%.** JSW Dulux's figure assumes low-to-mid-teens revenue growth and the margin recovering from 11.9% towards 14%, from an underlying base of about ₹80–125cr of profit a quarter, less the risk of a merger that dilutes minorities. Indigo's assumes 15–17% revenue growth with the margin roughly flat as the extra spending offsets Jodhpur's savings, and rising depreciation. Sirca's assumes low-to-mid-teens organic growth at a 19–20% margin, with Wembley growing slowly. Kansai's follows 7–8% revenue growth, a margin moving from 12% to 13–14%, and flat treasury income, with the new plants adding only from FY29.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Indigo Paints', 'Growth about 10 points above the industry; margin held near 17–18%; Jodhpur done, little capex to FY29', '9% / **15%** / 20%'],
                        ['Kansai Nerolac', 'Revenue 7–8% (CRISIL 6–8%); margin 12% → 13–14%; industrial plants from FY29; treasury income flat', '6% / **10%** / 14%'],
                        ['Akzo Nobel', 'JSW Dulux: double-digit volume; margin back towards 14%; spare plants; merger terms unknown', '8% / **16%** / 24%'],
                        ['Sirca Paints', 'Premium wood finishes low-to-mid teens; Wembley slow; margin 19–20%; working capital a drag', '7% / **13%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Indigo Paints', 'Grow about 10 points faster than the industry; operating margin ±1 point; Apple Chemie 30%+ growth; two-pack PU launch Sep–Oct', 'Jodhpur 90,000 KL water-based plant (₹220cr of unfinished plant at March); no major capex until FY29', '**Mixed**: 18.7% growth, short of the ~24% pace endorsed in May but ahead of peers; margin up, not down; Jodhpur about three months late'],
                        ['Kansai Nerolac', 'FY27 margin 13–14%; 14%-plus in two to three years; lead non-car industrial coatings in about two years', '₹601cr at three sites to FY28–29, own cash, plus ₹150–200cr a year normal', '**Kept**: margin 13.8% in band; revenue +9.8%; house-paint volume behind the leader; FY26 missed ‘above 13%’'],
                        ['Akzo Nobel', 'JSW Dulux: FY27 margin 13–15%; double-digit volume and value growth; second in Indian paints with JSW Paints by 2030–31', 'FY26 ₹47cr plus the ₹1,152cr brand; ‘serious’ capex promised, not sized', '**Mixed**: volume +25% and like-for-like revenue +18.8%, ahead of May’s promise; margin 11.9%, below the band'],
                        ['Sirca Paints', 'Q1 deck: ‘double-digit’ growth; Q4 call: 25–30% a year, 19–21% margin, ₹1,000cr by FY29', 'FY27 ₹5–6cr; plants support ₹750–800cr of revenue', '**Missed**: Q1 growth 13.8% against 25–30%; margin 18.6% below band; no call held'],
                    ],
                    note: 'All figures consolidated except where a company figure is marked standalone. JSW Dulux’s growth is like-for-like, excluding the powder-coatings business sold in July 2025.',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. Several of the most important came from annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'The price war outlasts the cost spike',
                    text: "Birla Opus, JSW Paints and Haisha are still adding capacity, and incumbents are matching them with dealer schemes and painter incentives. If raw materials fall, the savings are likely to be competed away rather than kept. The mid-sized players are the most exposed: **Kansai** is already losing house-paint volume share, and **Indigo** and **JSW Dulux** are paying for their gains with margin. **This is the single biggest risk to every price in the group.**",
                },
                {
                    label: 'Governance under a new owner at JSW Dulux',
                    text: "**JSW Dulux** now shares plants, a projects team and a human-resources head with the unlisted JSW Paints; the finance chief says Big Four firms have been hired so there are ‘no concerns’ on related-party dealings. A merger of JSW Paints into the listed company is widely expected but has not been announced, and its terms would decide what minority shareholders own. The FY26 auditor noted one whistle-blower complaint under investigation at the report date (CARO clause 3(xi)(c)), and found that the audit trail was not kept for some privileged-user changes and that database logs lacked pre-change values. Contingent liabilities are ₹47cr of tax disputes plus ₹6.7cr of claims. **Watch the whistle-blower outcome and any merger ratio.**",
                },
                {
                    label: 'Accounting and disclosure at Indigo and Sirca',
                    text: "**Indigo** faces a ₹19.26cr GST demand, with interest and penalty, on expenses of its 2021 IPO, under appeal; GST disputes total ₹27.4cr of its ₹29.2cr contingent liabilities, up from ₹23.3cr. Its auditor, Price Waterhouse, flagged revenue net of discounts as a key audit matter and noted the same audit-trail gap; ₹2.14cr of CSR spending went to a trust controlled by the promoter family; and the Q1 transcript was filed on 3 September, three weeks after the call. **Sirca** held no Q1 call despite missing guidance by half, FY26 is its first year under Indian accounting standards, its secretarial auditor found overseas-investment filings (form FC-TRS for FY2008-09 and FY2009-10) still being regularised, relatives of the managing director were paid ₹0.6cr, and ₹100.75cr of goodwill, about a fifth of equity, rides on the flat Wembley brand.",
                },
                {
                    label: 'Subsidiaries, guarantees and management change at Kansai',
                    text: "**Kansai**'s Bangladesh subsidiary lost ₹27.6cr in FY26 as revenue fell from ₹143cr to ₹91cr, and the parent guarantees its bank loan; Nerofix lost ₹7.6cr and is being merged in; the Sri Lanka stake was sold in December 2025 for about ₹5 lakh. Tax disputes total about ₹45cr. The auditor's opinion was clean, with rebates and discounts as the key audit matter. The managing director (from April 2025) and finance chief (from August 2025) are both new, and a Japanese whole-time director left in March 2026. Royalty to the Japanese parent was a modest ₹32.7cr (0.4% of sales). **None of this is large against the cash pile, but it shows where capital has been wasted.**",
                },
                {
                    label: 'Raw materials, the rupee and supply',
                    text: "Raw materials are 55–60% of sales and mostly crude-linked; management at **Kansai** said in May that crude near US$100 a barrel should be okay at the prices already taken, and in August that raw-material costs had eased slightly from their June peak. **Sirca** depends on imported acrylic, and a nitrocellulose cotton shortage cost it ₹4–5cr of March sales. **JSW Dulux** still licenses AkzoNobel's international industrial brands and pays royalty to AkzoNobel companies (the amount was not verified). A weaker rupee lifts all of these costs.",
                },
                {
                    label: 'Execution: plants, systems and concentration',
                    text: "**Indigo**'s Jodhpur plant slipped repeatedly because of a slow civil contractor, and its automation benefits are not yet visible. **Kansai**'s ₹601cr programme runs to FY29, and industrial projects have long lead times. **JSW Dulux** is integrating two companies, exiting AkzoNobel's transitional service agreements and changing systems in its busiest season. **Sirca** gets about 80% of revenue from North India and is extending credit to enter the South and West, which is when debtor days usually rise.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree most for **Kansai**, whose ₹2,288cr of net cash is about 16% of its market value and whose profit includes the interest on it, so EV/EBITDA makes it look much cheaper than P/E does. For **JSW Dulux**, the reported trailing profit includes a ₹1,892cr one-off gain from the powder-coatings sale; the P/E at writing works out to about ₹380cr of profit, close to the underlying run-rate, so it excludes that gain.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **14.6% at 22.7x, 18.9% at 32.6x, 19.6% at 34.8x and 20.7% at 38.0x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **{Count:fits|None} of the {count:live|four} fits my estimate today; {count:full|three} are Full and Sirca is {Label:Sirca Paints|Stretched}.**",
            ],
            points: [
                {
                    label: 'Full: Indigo, the best economics, priced for delivery',
                    text: "**Indigo** needs about {need:Indigo Paints|19}% a year against my ~15%. The price assumes it keeps growing well above the industry for years while holding most of its gross-margin lead, which is exactly what its new strategy puts at risk. With ₹311cr of net cash and falling capex, free cash should rise, which supports the price but does not close the gap. **Follow it; a Q2 with 20% growth and gross margin above 45% would narrow the gap more than any price move.**",
                },
                {
                    label: 'Full: Kansai, the cheapest, because it grows slowest',
                    text: "**Kansai** needs about {need:Kansai Nerolac|15}% a year against my ~10%, the lowest hurdle in the group. On EV/EBITDA it is by far the cheapest because of its cash, but that cash earns treasury rates and management has no stated plan for it beyond the ₹601cr capex and a 51% dividend payout. The price would fit if house-paint volume stopped lagging and the margin reached the 14%-plus management hopes for in two to three years. **Follow it; a special dividend, buyback or acquisition that used the cash would change the maths.**",
                },
                {
                    label: 'Full: JSW Dulux, paying for the new owner’s plan',
                    text: "**JSW Dulux** (listed as Akzo Nobel) needs about {need:Akzo Nobel|21}% a year against my ~16%, the highest hurdle here. The market is paying for JSW's ambition of second place by 2030–31 and for the margin to return to 13–15% while volume keeps growing in double digits. The balance sheet is sound but no longer cash-rich after ₹1,152cr for the brand and about ₹940cr of dividends in FY26. A merger with JSW Paints could change the per-share maths in either direction. **Wait for two quarters of margin inside the band and the merger terms.**",
                },
                {
                    label: 'Stretched: Sirca, a niche priced for guidance it has dropped',
                    text: "**Sirca** needs about {need:Sirca Paints|20}% a year against my ~13%. The price still reflects the 25–30% growth it promised in May, not the ‘double-digit’ growth its own presentation now targets. Its net cash is small against its market value, and with working capital near 193 days, profit converts poorly into cash. **Pass until growth is back above 20% with debtors falling; at that point the price could fit.**",
                },
                {
                    label: 'A check against the rest of Consumer Durables',
                    text: "The hurdles here, 15–21% a year, are lower than for the room-air-conditioner makers and similar to tiles and kitchen brands, but paint earnings are less cyclical than cooling and need little capital. The price war caps how fast margins can rise; the best entry points are likely to come in a weak quarter for the mid-sized players.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Indigo Paints', rank: 1, stance: 'PRICED', segment: DECO,
            what: "Indigo Paints: house paints (emulsions, enamels, wood coatings, primers, putty and cement paint), about 30% self-created products, sold through about 19,400 dealers from six plants; 51% (rising to 62%) of Apple Chemie, a waterproofing maker.",
            view: "**The best economics in the group, spending its margin to buy share.** Q1 FY27 revenue rose 19.7% with double-digit volume growth in every category, gross margin has led the listed peers for 13 quarters, and the Jodhpur plant is done with no major capex due until FY29. The ~24% growth ambition has already been softened, the plant was three months late, and a ₹19.26cr GST demand sits on its IPO costs. The price needs about {need:Indigo Paints|19}% a year against my ~15%.",
            watch: 'Q2 and Q3 growth near 20% with gross margin above 45%; debtor days after the heavier trade schemes; Jodhpur reaching commercial output.',
        },
        {
            company: 'Kansai Nerolac', rank: 2, stance: 'PRICED', segment: INDUSTRIAL,
            what: "Kansai Nerolac Paints, 75% owned by Kansai Paint of Japan: India's leader in car and powder coatings and third in house paints, with industrial about 45% of Q1 sales; 35,000-plus dealers; subsidiaries in Nepal and Bangladesh.",
            view: "**A cash-rich industrial franchise with a house-paint business losing share.** Q1 FY27 revenue rose 9.8% at a 13.8% margin, it holds more than ₹2,500cr of cash, is rated AAA, and is funding a ₹601cr industrial expansion itself. House-paint volume grew in low single digits against the leader's 9%, car-makers pay price rises late, and CRISIL sees only 6–8% growth. The price needs about {need:Kansai Nerolac|15}% a year against my ~10%.",
            watch: 'House-paint volume growth against the leader’s; margin holding 13–14% as dearer stock flows through in Q2; any plan for the cash pile.',
        },
        {
            company: 'Akzo Nobel', rank: 3, stance: 'SCALEUP', segment: DECO,
            what: "JSW Dulux Ltd (the former Akzo Nobel India, listed as Akzo Nobel), 61.2% owned by JSW Paints: Dulux and Sadolin house paints and wood care (about 60% of sales), car refinish, marine, protective and coil coatings; five plants.",
            view: "**Fast growth bought with margin, under a new owner still integrating.** Volume grew 25% and like-for-like revenue 18.8% in Q1 after JSW cut Dulux's old price premium and widened distribution, with spare plants to grow into. But the margin is 11.9% against about 16% two years ago, FY26 operating cash was ₹93cr, a whistle-blower complaint was under investigation, and the JSW Paints merger terms are unknown. The price needs about {need:Akzo Nobel|21}% a year against my ~16%.",
            watch: 'Margin back inside 13–15% by Q3; the SAP switch around Diwali passing without disruption; any merger ratio and the whistle-blower outcome.',
        },
        {
            company: 'Sirca Paints', rank: 4, stance: 'SCALEUP', segment: WOOD,
            what: "Sirca Paints India: premium PU, acrylic, polyester and UV wood finishes under a licence from Sirca S.p.A. of Italy to 2041, plus the mass-market Wembley and Welcome brands; about 70% retail on architect specification, 30% furniture makers; about 80% of sales in the North.",
            view: "**A good niche with a broken growth promise.** It holds about 15% of premium wood finishes, earns 18–21% margins and needs little plant. But FY26 growth was largely acquired, working capital runs near 193 days, and Q1 FY27 grew 13.8% against a promised 25–30%, with no call held and the target quietly cut to ‘double-digit’. The price needs about {need:Sirca Paints|20}% a year against my ~13%.",
            watch: 'Growth back above 20% in Q2–Q3; debtor and inventory days falling as promised; Wembley growing in its second year.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Decorative paints.** **Indigo Paints: follow**, the best economics here, now spending margin on share; buy if Q2 and Q3 hold about 20% growth with gross margin above 45%. **JSW Dulux (listed as Akzo Nobel): wait** for the margin to return to 13–15% and for the terms of any merger with JSW Paints.",
            "**Industrial and wood coatings.** **Kansai Nerolac: follow**, a cash-rich industrial franchise at the lowest hurdle in the group, held back by a house-paint arm losing share. **Sirca Paints: pass** until growth is back above 20% and working capital falls.",
            "**What would change my view.** For the better: the newcomers slowing their spending; Indigo growing about 20% without giving up gross margin; Kansai putting its cash to work or matching the leader's house-paint volume; JSW Dulux reaching a 13–15% margin with fair merger terms; Sirca publishing a call and a balance sheet that show debtors falling. For the worse: raw-material savings competed away; Indigo's receivables rising; an adverse whistle-blower finding or a dilutive merger at JSW Dulux; Sirca growing in the low teens again.",
            "**What to watch next quarter.** Q2 margins as dearer stock flows through; Indigo's spending and Jodhpur output; Kansai's house-paint volume and industrial price recovery; JSW Dulux's margin and SAP switch; Sirca's growth and whether it holds a call.",
        ],
        bottomLine:
            "Follow Indigo, the best paint economics, and Kansai, the cash-rich industrial leader, for better prices; wait on JSW Dulux until its margin recovers and the JSW Paints merger is clear; and pass on Sirca until its growth returns.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KANSAINER/consolidated/' },
        { label: 'Paint stocks in FY27: strong demand, but can companies protect margins? — Teji Mandi, Sep 2026', url: 'https://tejimandi.com/blog/feature-articles/paint-stocks-in-fy27-strong-demand-but-can-companies-protect-margins' },
        { label: 'Housing sales dip 6% across top 7 cities (Anarock) — Outlook Money, Jul 2026', url: 'https://www.outlookmoney.com/invest/housing-sales-dip-6-per-cent-across-top-7-cities-says-report' },
        { label: 'RBI monetary policy, 8 Apr 2026 — All India Radio', url: 'https://newsonair.gov.in/rbi-to-announce-its-first-bi-monthly-monetary-policy-statement-for-financial-year-2026-27-today/' },
        { label: 'Kansai Nerolac Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3dfca26a-178c-40c5-820e-4b8d687f5b75.pdf' },
        { label: 'Kansai Nerolac Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=825e2fc0-ef8f-4bf5-b5bd-9d044214235d.pdf' },
        { label: 'Kansai Nerolac Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=737581b5-d522-47cd-9b83-211e7cf96e8f.pdf' },
        { label: 'Kansai Nerolac Annual Report FY26 (subsidiaries, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/ec08d265-6e25-4e18-9085-7feb79064dab.pdf' },
        { label: 'Kansai Nerolac rating rationale (AAA/Stable) — CRISIL, Aug 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/KansaiNerolacPaintsLimited_August%2021_%202026_RR_403109.html' },
        { label: 'JSW Dulux filed results — Screener.in', url: 'https://www.screener.in/company/JSWDULUX/consolidated/' },
        { label: 'JSW Dulux Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=b9d70972-101b-4c0e-842a-1c68915e8df0.pdf' },
        { label: 'JSW Dulux Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f9fcf521-da90-44aa-8320-b4bcac70ca8e.pdf' },
        { label: 'JSW Dulux Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=bc26e210-8fad-49d6-9d97-dba966bf3f87.pdf' },
        { label: 'JSW Dulux Annual Report FY26 (auditor’s report, CARO, contingent liabilities) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/05f5c198-325c-47c7-b842-d55c93f1f0ed.pdf' },
        { label: 'JSW Dulux rating rationale (AA-/Stable) — ICRA, Sep 2026', url: 'https://www.icra.in/Rating/ShowRationalReportFilePdfViewer/145448' },
        { label: 'Indigo Paints filed results — Screener.in', url: 'https://www.screener.in/company/INDIGOPNTS/consolidated/' },
        { label: 'Indigo Paints Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=89d1ac66-69ea-446a-b391-0835a41724cb.pdf' },
        { label: 'Indigo Paints Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=94dd56c3-5626-472b-ba92-d1b51913e35d.pdf' },
        { label: 'Indigo Paints Annual Report FY26 (GST demand, auditor’s report) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/b450200c-be3c-4d08-bfb7-f6011a2a89a0.pdf' },
        { label: 'Sirca Paints filed results — Screener.in', url: 'https://www.screener.in/company/SIRCA/consolidated/' },
        { label: 'Sirca Paints Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=50ac5d6a-fd02-4ae1-a196-d45422d6beab.pdf' },
        { label: 'Sirca Paints investor event transcript, 22 Jan 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=77324e35-6914-4afa-a4c9-c81d97a1af12.pdf' },
        { label: 'Sirca Paints Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=d5ddd83b-729e-453d-8e20-4f26fb053259.pdf' },
        { label: 'Sirca Paints Annual Report FY26 (secretarial audit, goodwill, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d7d520e2-9e3d-44b2-954b-7872f9a17924.pdf' },
    ],
};
