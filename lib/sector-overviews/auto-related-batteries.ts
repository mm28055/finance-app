import { SectorOverview } from './types';
import { autoRelatedBatteriesBusinesses } from './auto-related-batteries-businesses';
import { autoRelatedValuationInputs } from './card-data/auto-related';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const BAT = 'Lead-acid and lithium batteries — the Exide–Amaron duopoly in vehicle, inverter and industrial batteries, each building lithium-ion cells';
const HEL = 'Helmets and riding accessories — India’s largest helmet maker, sold through dealers, vehicle makers and exports';

export const autoRelatedBatteries: SectorOverview = {
    sector: 'Auto Related',
    title: 'Auto Related · Batteries and brand-led replacement',
    format: 'ranked',
    businesses: autoRelatedBatteriesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '28 Sep 2026',
        inputs: autoRelatedValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Studds Accessories': 15,
            'Amara Raja Energy': 12,
            'Exide Industries': 13,
        },
    },
    standfirst:
        "The Auto Related sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs: EV, electronics and electrical content; forgings, castings and precision metal parts; truck, tractor, off-highway and rail systems; vehicle systems for two-wheeler and car makers; and this one. This is the group of three companies that sell **branded products to vehicle owners** as well as to vehicle makers, so the replacement market (the shop that sells you a new battery or helmet) matters as much as new-vehicle volumes. **Exide** and **Amara Raja** (Amaron) together dominate Indian lead-acid batteries for cars, bikes, inverters and industry, and each is spending thousands of crores on lithium-ion cell plants that do not yet earn money. **Studds** is India's largest helmet maker, with a premium brand (SMK), a growing export business and a new plant opening in October. This edition was built from the last two earnings calls for each (checked against the official transcripts; two of Amara Raja's stored copies had wrong figures), the FY26 annual reports, the Q1 FY27 presentations, the ICRA, CRISIL and CARE rating reports, and sector work from ACMA, CRISIL, ICRA, CareEdge, Elara Capital and FADA. The headline: the old businesses are doing well, with double-digit volume growth and price increases that stuck, but the returns of both battery makers are held down by lithium plants that will lose money for years, and Studds has just shown how quickly a plastics price spike can wipe out a quarter's margin. **Studds and Amara Raja fit my growth estimates at today's price; Exide does not.** Every chart uses filed results.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated for all three.',
            note: "The two battery makers earn 9–11% on the group line, and both group figures are pulled down by lithium start-up costs: Exide's lead-acid company on its own earned 12.4% in Q1 FY27. Amara Raja's 10% in Q1 FY27 was its lowest in years, against 13–14% two to three years ago. Studds earned 18–20% for four quarters, then 12% in Q1 FY27 when styrene-based plastics, its main raw material, jumped about 65% after the Gulf supply shock. Treat Studds' Q1 as a shock, not a new level, but also not a one-off that has fully passed.",
            values: {
                'Exide Industries': [11, 9, 11, 10, 11],
                'Amara Raja Energy': [11, 11, 11, 11, 10],
                'Studds Accessories': [20, 19, 19, 18, 12],
            },
            cellNotes: {
                'Exide Industries': "Q2 FY26 was hit by the GST changeover, when distributors stopped buying for about 1.5–2 months. In Q1 FY27 the standalone lead-acid company earned 12.4% (₹655cr, company figure); the consolidated 11.2% includes the lithium subsidiary's start-up losses (it lost ₹248cr in FY26).",
                'Amara Raja Energy': "Q1 FY27: 9.6% consolidated, 10.1% standalone (company figures). About 0.9 point came from brand spending (IPL), the Amaron Assist service pilot and factory upgrades (about ₹35cr), and about 0.5 point from new-energy start-up costs, on top of plastics, acid and alloy inflation.",
                'Studds Accessories': "Company figure 11.5% in Q1 FY27; gross margin fell to 53.5% from 59.4%. Management guides 14–15% for Q2 and 18–20% by Q4 FY27, ‘subject to raw material prices remaining broadly stable’. A 35% Haryana minimum-wage rise from April costs about 2 points permanently.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated for all three.',
            note: "All three accelerated sharply in Q1 FY27 on the GST cut for small cars and bikes, strong vehicle-maker orders and price increases of 4–9%. Exide and Amara Raja had grown only 4–9% a quarter before that. The comparison base gets much harder from Q3 FY27, when last year's GST-driven boom starts to show in the year-earlier figures.",
            values: {
                'Exide Industries': [6, -2, 5, 9, 18],
                'Amara Raja Energy': [4, 7, 4, 16, 24],
                'Studds Accessories': [null, 6, 9, 12, 14],
            },
            cellNotes: {
                'Exide Industries': "Q2 FY26: the GST changeover washout. Q1 FY27 volumes (company): car replacement +10%, car makers +21%, two-wheeler makers +20%, solar +12–14%, plus prices 4–6% higher than a year earlier; exports +20%. Standalone growth 17.6%.",
                'Amara Raja Energy': "Q1 FY27: lead-acid +22% and new energy ₹209cr (+70%-plus). Aftermarket volumes +15%, car makers +24%, two-wheeler makers +35%, home inverter batteries +60%; vehicle-battery exports −20% on the Middle East.",
                'Studds Accessories': "Screener's quarterly history starts at September 2024 (the company listed in November 2025), so there is no year-earlier figure for Q1 FY26. Q1 FY27: volume +8.5%, average helmet price ₹845 against ₹802.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated for all three.',
            note: "Studds earns the best return here, about 23% for two years. Exide's has drifted to 9% because about ₹4,900cr of shareholders' money sits in a lithium-cell subsidiary that has not earned a rupee, and a HDFC Life stake worth about ₹5,100cr sits in capital too. Amara Raja's has fallen from 20% to 12% as its margin slid and lithium spending rose.",
            values: {
                'Exide Industries': [11, 10, 10, 9, 9],
                'Amara Raja Energy': [16, 20, 19, 16, 12],
                'Studds Accessories': [13, 14, 21, 23, 23],
            },
            cellNotes: {
                'Exide Industries': "Consolidated unfinished plant (capital work in progress) was ₹4,198cr at March 2026, almost all the lithium-cell plant commissioned on 23 September 2026. Group return on equity is about 6%.",
                'Amara Raja Energy': "Capital work in progress ₹1,658cr at March 2026, up from ₹641cr two years earlier. The new-energy segment lost ₹135cr in FY26 on ₹1,844cr of assets (company segment figures).",
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated for all three.',
            note: "Exide cut its cycle from 74 days to 42 in FY26, mostly by holding less stock and paying suppliers later. Amara Raja has sat at 82–93 days for five years. Studds' cycle has risen from 11 days to 62, because it holds far more finished helmets than it used to.",
            values: {
                'Exide Industries': [74, 85, 67, 74, 42],
                'Amara Raja Energy': [93, 82, 86, 83, 85],
                'Studds Accessories': [11, 23, 34, 62, 62],
            },
            cellNotes: {
                'Exide Industries': "FY26: inventory 120 days (144 in FY25), payables 110 days.",
                'Amara Raja Energy': "FY26: inventory 98 days, debtors 33, payables 46. Management says the new battery-storage business may need 90–100 days of working capital.",
                'Studds Accessories': "Inventory days rose from 62 in FY24 to 80 in FY25 and 107 in FY26 on Screener's basis; the company's own figure is 91 against 68, blamed on a new warehouse and more US stock, and it calls 85–90 days ‘comfortable’.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated for all three.',
            note: "Both battery makers turn a little over 70% of operating profit into cash over five years, about what a healthy manufacturer should. Exide's FY26 figure of 129% came from releasing working capital, which will not repeat every year. Studds turned 60% over five years and 70% in FY26; rising stock is the drag.",
            values: {
                'Exide Industries': [4, 48, 84, 71, 129, 71],
                'Amara Raja Energy': [61, 65, 76, 83, 74, 73],
                'Studds Accessories': [22, 47, 79, 60, 70, 60],
            },
            cellNotes: {
                'Exide Industries': "Operating cash ₹61cr in FY22 against ₹2,413cr in FY26.",
                'Studds Accessories': "Operating cash ₹86cr in FY26 against ₹123cr of operating profit.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated for all three.',
            note: "Exide spent more than it earned in four of five years as it built its lithium-cell plant; FY26 was positive only because working capital fell sharply. Amara Raja went negative in FY26 for the first time since FY22 and will stay near zero or below while it spends ₹1,700cr in FY27. Studds funds its new plant from its own cash and still generates some.",
            values: {
                'Exide Industries': [-4.7, -1.5, -2.0, -3.9, 7.0, -0.7],
                'Amara Raja Energy': [-1.5, 4.2, 3.4, 1.2, -1.6, 1.1],
                'Studds Accessories': [-9.6, 1.8, 7.6, 3.6, 6.1, 2.4],
            },
            cellNotes: {
                'Exide Industries': "About ₹1,260cr of free cash in FY26. FY27 plan: ₹1,000–1,500cr of group capex, including ₹1,400cr of equity into the lithium subsidiary.",
                'Amara Raja Energy': "Free cash about −₹220cr in FY26; FY27 capex ₹1,700cr, of which ₹1,300cr for new energy and ₹450cr already spent in Q1.",
                'Studds Accessories': "Free cash ₹40cr in FY26 after ₹48cr of capex.",
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated for all three.',
            note: "Below zero means more cash than debt. All three are net cash on this measure, but Exide's figure counts its HDFC Life shares (about ₹5,100cr) as cash; without them the group has small net debt. Amara Raja's borrowings are rising with its lithium spending. Studds has almost no debt.",
            values: {
                'Exide Industries': [-3.7, -2.9, -2.8, -2.6, -2.6],
                'Amara Raja Energy': [-0.0, -0.2, -0.4, -0.4, -0.2],
                'Studds Accessories': [0.1, 0.0, -0.5, -0.6, -0.6],
            },
            cellNotes: {
                'Exide Industries': "ICRA (Jun 2026): gross debt ₹1,575cr including ₹482cr of leases, against ₹1,082cr of cash and liquid investments, so about ₹490cr of net debt before the HDFC Life stake. Exide has also guaranteed ₹3,000cr of the lithium subsidiary's loans; about ₹2,000cr of term loans is still undrawn.",
                'Amara Raja Energy': "Borrowings ₹406cr at March 2026, up from ₹157cr two years earlier; CRISIL calls debt ‘negligible’ (AA+/Stable).",
                'Studds Accessories': "Borrowings ₹8cr. CARE withdrew its rating in April 2026 at the company's request after bank lines were closed.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated for all three.',
            note: "All three spend about 7–8% of revenue a year on plant over five years. For the battery makers most of the recent spending is lithium, not lead-acid: Exide's core needs only about ₹500cr a year. Studds' spending is a new helmet plant that adds about a third to its capacity.",
            values: {
                'Exide Industries': [5.2, 6.6, 11.2, 11.3, 6.4, 8.3],
                'Amara Raja Energy': [8.8, 4.9, 7.4, 9.3, 9.7, 8.2],
                'Studds Accessories': [12.2, 3.8, 6.0, 7.2, 7.4, 7.3],
            },
            cellNotes: {
                'Exide Industries': "The lithium subsidiary's phase-1 plant cost rose to about ₹5,600cr from ₹5,200cr (ICRA); the full 12 GWh may cost more than the original ₹7,000cr because of the rupee.",
                'Amara Raja Energy': "The new-energy plan is about ₹9,000–9,500cr to reach 16 GWh by FY30, a target management now says ‘can change’.",
                'Studds Accessories': "The new Faridabad plant (Facility V) costs about ₹160cr in two phases; ₹76cr was spent by June 2026.",
            },
        },
    ],

    moat: {
        sources: [
            { key: 'brand', label: 'Brand and replacement reach', description: 'How strong the brand is with vehicle owners and how many shops, dealers and service points sell it — the replacement market is where the margin sits.' },
            { key: 'oem', label: 'Vehicle-maker approvals and share', description: 'Approvals and share of business with car, bike and truck makers, which feed tomorrow’s replacement demand and are slow to win.' },
            { key: 'pricing', label: 'Pricing power through cost spikes', description: 'Whether price increases stick when lead, sulphur, plastics or wages jump, and how fast the margin recovers.' },
            { key: 'next', label: 'The next leg: new plants and products', description: 'Lithium-ion cells for the battery makers, the new helmet plant and exports for Studds: technology, contracts, timing and cost.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what auditors, rating agencies, related parties, guarantees and contingent liabilities show.' },
        ],
        rows: [
            { company: 'Studds Accessories', trend: 'stable', trendNote: 'A 9% price rise held volumes and exports grew 32% in FY26, but the Q1 plastics shock and a permanent wage rise showed the margin is less protected than it looked; the new plant starts in October.',
                grades: { brand: { grade: 'A', note: 'About 25% of Indian helmets; SMK premium' }, oem: { grade: 'B', note: 'Hero, Honda, Suzuki, RE, Yamaha; 13.7% of sales' }, pricing: { grade: 'B', note: '9% rise stuck; gross margin still −6 pts' }, next: { grade: 'B', note: 'New plant from own cash; exports 20% of sales' }, cash: { grade: 'B', note: 'Debt-free; stock days up to 107' } } },
            { company: 'Amara Raja Energy', trend: 'narrowing', trendNote: 'Volumes are strong, but the margin has slid from 14% to under 10%, its Chinese cell-technology partner is blocked, and the 16 GWh cell target has been softened.',
                grades: { brand: { grade: 'A', note: 'Amaron; 100,000+ outlets' }, oem: { grade: 'B', note: 'Car makers +24%, bikes +35% in Q1' }, pricing: { grade: 'C', note: 'Margin 14% → 9.6%; B2B lags' }, next: { grade: 'C', note: 'No tech partner; cells from H1 FY28' }, cash: { grade: 'C', note: 'Free cash negative; ₹890cr related-party buys' } } },
            { company: 'Exide Industries', trend: 'stable', trendNote: 'Lead-acid margin up to 12.4% through a sulphur and plastics spike, and the first lithium-cell plant was commissioned on 23 September; but no cell customer contracts are disclosed.',
                grades: { brand: { grade: 'A', note: 'Market leader; 120,000+ touchpoints' }, oem: { grade: 'A', note: 'Leader in OEM and replacement' }, pricing: { grade: 'A', note: 'Margin rose while costs spiked' }, next: { grade: 'B', note: '6 GWh plant running; licensed from SVOLT' }, cash: { grade: 'B', note: 'AAA; ₹3,000cr guarantee for cell unit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Follow Studds.** **Studds** (listed as Studds Accessories) is India's largest helmet maker, with about a quarter of the market, a mass brand (Studds), a premium brand (SMK) and exports at 20% of sales. It is debt-free, earns about 23% on its capital and is paying for a ₹160cr plant, a third more capacity from October, from its own cash. Then Q1 FY27 broke the story: styrene-based plastics jumped about 65% after the Gulf supply shock, the margin fell from 20% to 11.5%, and management cut its guidance eleven weeks after promising ‘broadly similar’ margins for the year. I expect about 15% a year of earnings growth from today's depressed base; the price needs about 14%. **Follow it, and buy if Q2 prints the promised 14–15% margin and Q3 moves back towards 18%.**",
                "**Follow Amara Raja.** **Amara Raja** (listed as Amara Raja Energy, the Amaron brand) is the number-two lead-acid battery maker, growing fast again: Q1 FY27 revenue rose 24%. But its operating margin has slid from 14% in FY24 to 9.6%, operating profit has fallen two years running, free cash turned negative in FY26, and it is spending ₹1,700cr this year on a lithium business that lost ₹135cr in FY26 and whose Chinese technology partner has been blocked by Beijing's export rules. Promoter-group companies also sold it about ₹890cr of goods and services in FY26. I expect about 12% a year; the price needs only about 13%, because the market already doubts the margin. **Follow it for a margin back above 11%.**",
                "**Wait on Exide.** **Exide** (listed as Exide Industries) is India's largest battery maker and the best-run lead-acid business here: its standalone margin rose to 12.4% in Q1 FY27 on 17.6% growth, even as sulphur and plastics costs spiked, and it is rated AAA. On 23 September its lithium-cell subsidiary commissioned a 6 GWh plant in Bengaluru, built without government incentives. But about ₹4,900cr of equity is already in that plant, the cost has risen to about ₹5,600cr, first-year use will be only 25–30%, and there is no margin target. Group return on equity is about 6%. I expect about 13% a year; the price needs about 21%. **Wait for disclosed cell orders and a quarter of cell revenue with narrowing losses, or a lower price.**",
                "**Three things to hold onto before reading the rest.** First, **the replacement market is the moat**: batteries and helmets wear out, and the shop network that sells replacements (120,000 touchpoints for Exide, 100,000 for Amara Raja, 55% of Studds' sales through distributors) earns more and holds up better than sales to vehicle makers, which slow from Q3 FY27 on a high GST-cut base. Second, **both battery makers are really two businesses**: a mature, cash-generating lead-acid duopoly and a loss-making lithium start-up that absorbs most new capital. Third, **check whether a figure is filed or the company's own**: Exide's 12.4% is standalone and excludes lithium losses, and its net cash on the live table counts about ₹5,100cr of HDFC Life shares.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener. Hover over a starred name for its caveat. Two cautions: Q1 FY27 growth was lifted by the GST cut and price increases and will face a much higher base from Q3; and the battery makers' group figures blend a lead-acid business earning 10–12% with lithium units that lose money.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Exide's stored Q4 FY26 row was all zeros (filed sales ₹4,735cr, profit ₹217cr), its Q3 FY26 revenue was ₹4,000cr (filed ₹4,201cr), and its Q1 FY27 row mixed a standalone operating profit with consolidated revenue, giving a margin that was neither. Amara Raja's Q3 and Q4 FY26 operating profit were stored as zero (filed ₹374cr and ₹386cr), and its Q1 FY27 profit as ₹203cr (filed ₹191cr). Both of Amara Raja's stored transcripts had wrong figures (new-energy revenue ₹290cr against the official ₹209cr); every figure here was checked against the official filings. Studds' stored ‘60% dividend payout’ is 60% of face value; of profit it is about 14%.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian auto components had a record FY26 and a record first quarter of FY27, but the volume tailwind is about to fade and the margin squeeze has already arrived.** ACMA, the component makers' association, puts FY26 industry turnover at ₹7.60 lakh cr, up 12.7%, with the aftermarket (replacement parts) at ₹1.08 lakh cr, up 9%, and expects 8–10% growth in FY27. CRISIL cuts its FY27 margin forecast for component makers to 10.5–11% from about 12% on higher metal, plastics and wage costs. ICRA expects vehicle volumes to grow only 3–6% in FY27, with a weak second half. **My view: in a slowing volume year, businesses that sell replacements to vehicle owners through their own brands should hold up better than pure suppliers to vehicle makers.**",
            ],
            points: [
                {
                    label: 'Where this group sits',
                    text: "Most auto component makers sell only to vehicle makers, who set prices and pass on raw-material costs with a one- to two-quarter lag, ‘not always in full’ as CRISIL puts it. This group is different. **Exide** and **Amara Raja** sell about half their output as vehicle batteries and the rest as inverter, solar, telecom and industrial batteries; within vehicles, replacement is larger and more profitable than supplies to car makers. **Studds** sells 55% of its helmets through distributors and its own brand outlets, 20% as exports and only 14% to bike makers. Elara Capital's review of 59 listed component makers found **battery makers' operating profit fell 1% in FY26** while the sector's rose 13%. **My view: this is a group of consumer brands with auto exposure, and it should be judged on brand, distribution and pricing, not on vehicle counts.**",
                },
                {
                    label: 'Demand: GST cut, formalisation and a higher base',
                    text: "The GST cut of 22 September 2025 took small cars and bikes under 350cc from 28% to 18%, cut vehicle prices by 10–15%, and pushed Q1 FY27 volumes up 26% for cars and 20% for two-wheelers (SIAM). New vehicles sold today need replacement batteries in about 2.5–3 years, which is why **Exide** is adding car-battery capacity now. For helmets, the company's industry report sizes India at 26 million units in 2024 growing about 6.1% a year to 35 million by 2029, and **Studds** management expects the unorganised share (cheap, often uncertified helmets) to fall from 20–30% to 10–15% in two to three years; a proposal to sell two certified helmets with every new two-wheeler would widen the market further. **My view: replacement demand lags new-vehicle sales, so this group's volumes should slow later and less than the vehicle makers' suppliers.**",
                },
                {
                    label: 'Costs: lead is calm, everything else is not',
                    text: "Lead and lead alloys are about 70% of a battery's material cost, and London lead prices have been range-bound near US$1,900–2,000 a tonne, which the sector research calls neutral. The shocks came elsewhere. **Exide** said sulphur rose from about ₹15/kg to about ₹75/kg in a year; both battery makers cited plastics too. **Studds** was hit hardest: India imports about 98% of its styrene through the Gulf, and its plastics basket rose from about ₹135/kg to a peak of about ₹225/kg in April (about ₹185/kg in August), and Haryana's minimum wage rose about 35% from 1 April. **My view: the battery makers have shown they can pass these costs on within a quarter; Studds has shown it can pass them on only with a lag.**",
                },
                {
                    label: 'Lithium: the substitution threat and the cell race',
                    text: "Electric vehicles were 12.3% of Indian sales in August 2026 (FADA), including 10.7% of two-wheelers and 65.3% of three-wheelers; telecom towers and e-rickshaws have already moved to lithium, a business about 3% of **Exide's** revenue that is shrinking. India's cell-making incentive scheme has delivered very little: the sector research, citing IEEFA, finds only about 2.8% of the targeted 50 GWh commissioned on time. Exide and Amara Raja both lost the incentive bids and are building cells without them, on Chinese technology and materials, while imported cells pay only a 5% duty. **My view: lithium is both the long-term threat to lead-acid and the only way for these two to stay relevant, but on the evidence so far it will lower their returns for years before it raises them.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Helmets and riding accessories', 'Studds', '12–20%', '23%', '**60%**', 'Brand ladder and in-house moulds, liners and paint; styrene and wages set the margin; stock is rising'],
                        ['Lead-acid batteries plus lithium start-up', 'Exide', '9–11% (standalone 12.4% in Q1 FY27)', '9%', '**71%**', 'Market leader with own lead recycling; about ₹4,900cr of lithium equity and a HDFC Life stake earn nothing yet'],
                        ['Lead-acid batteries plus lithium start-up', 'Amara Raja', '10–11%', '12%', '**73%**', 'Strong brand and volumes; margin hit by input costs, brand spending and new-energy losses'],
                        ['For comparison: other Auto Related groups', 'Sector research', 'Component sector 13.6% in FY26; commodity metal conversion 9–11%', '—', '—', 'Profit sits with electronics and EV content, and with replacement brands that have pricing power'],
                    ],
                    note: 'Exide’s standalone company is almost entirely lead-acid; its lithium subsidiary lost ₹248cr in FY26. Amara Raja’s lead-acid segment earned ₹1,270cr and its new-energy segment lost ₹135cr in FY26 (company segment figures).',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Auto component industry turnover', '₹7.60 lakh cr in FY26, +12.7%; aftermarket ₹1.08 lakh cr, +9%', '**+8–10% in FY27**', 'ACMA, Jul 2026'],
                        ['Auto ancillary market (incl. tyres and batteries)', '₹9.84 lakh cr in FY26', '**₹10.68 lakh cr in FY27, +8–9%**', 'CareEdge, Aug 2026'],
                        ['Component makers’ operating margin', 'About 12%', '**10.5–11% in FY27**', 'CRISIL, Jun 2026'],
                        ['Vehicle volumes FY27', 'FY26 cars +7.9%, two-wheelers +10.7%', '**Cars 4–6%, two-wheelers 3–5%** (Elara: 7% and 8%)', 'ICRA, May 2026; Elara Capital, Jun 2026'],
                        ['Listed battery makers’ operating profit', '−1% in FY26 (sector +13%)', '—', 'Elara Capital, Jun 2026'],
                        ['Electric-vehicle share of sales', '12.3% in Aug 2026: two-wheelers 10.7%, three-wheelers 65.3%', 'Rising with fuel prices', 'FADA, Sep 2026'],
                        ['Indian helmet market', '26 million units in 2024', '**35 million by 2029, +6.1% a year**', 'Industry report quoted in Studds’ FY26 annual report'],
                        ['Lithium-cell incentive scheme (50 GWh)', 'About 2.8% commissioned on time', 'Exide and Amara Raja build outside it', 'IEEFA, via sector research'],
                        ['GST on small cars and bikes under 350cc', 'Cut from 28% to 18% on 22 Sep 2025', 'High base from Q3 FY27', 'Government notification, via sector research'],
                    ],
                    note: 'No independent forecaster in the sources read covers Indian lead-acid battery or lithium-cell demand beyond FY27; the company figures in sections 4–6 are labelled as such.',
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
                    label: 'Lasting: the replacement network',
                    text: "A vehicle owner buying a new battery or helmet goes to a shop, and the shop stocks the brands that sell and that it can get quickly. **Exide** has more than 120,000 touchpoints reaching 18,000 villages and a doorstep ‘Batmobile’ replacement service; **Amara Raja** has more than 100,000 points of sale and over 1,000 Amaron Power Zone stores, and CRISIL describes the two as a duopoly. **Studds** sells through distributors and exclusive brand outlets (55% of FY26 sales) and, with Steelbird and Vega, dominates the organised helmet market with about a 25% share (CARE). **My view: this reach took decades to build and is the main reason these three earn more on replacement than on sales to vehicle makers.**",
                },
                {
                    label: 'Lasting: approvals with vehicle makers',
                    text: "Vehicle-maker approvals are slow and costly to win, and they seed the replacement market three years later. ICRA calls **Exide** the market leader in both vehicle-maker and replacement batteries, and the company claims 100% share of business on key new models at large makers. **Amara Raja's** Q1 FY27 volumes to car makers rose 24% and to bike makers 35%, faster than the market, and its combined lead and lithium share of telecom batteries is above 60%. **Studds** supplies Hero, Honda, Suzuki, Royal Enfield and Yamaha, and CARE calls approval ‘time-consuming and costly’, a real barrier to entry. **These approvals are why a new entrant cannot simply undercut on price.**",
                },
                {
                    label: 'Evidence of pricing power',
                    text: "The last six months tested it. **Exide** raised prices 5–6% between January and March and about 3% more on 1 April, and its standalone margin still rose to 12.4% from 12.2% a year earlier; vehicle makers accepted non-lead cost increases with about a quarter's lag. **Amara Raja** raised prices 5–6% in Q4, about 3% in June and 2–3% in August, but its margin still fell to 9.6%, as business customers pay late and it spent more on its brand. **Studds** raised list prices about 9% from 1 April with no volume loss (volume +8.5% in Q1), yet its gross margin still fell about 6 points. **My view: Exide has the strongest pricing power here; Studds' is real but slower than its costs; Amara Raja's is the weakest this year.**",
                },
                {
                    label: 'Cost position: recycling and in-house making',
                    text: "**Exide's** recycling subsidiary, Chloride Metals, supplies about 80% of its lead and lead alloy, and warranty costs are falling as a share of sales. **Amara Raja** built a battery-breaking (recycling) plant to do the same, but it is still in trial production and, with scrap lead now costing about the same as mined lead, adds little today; captive recycling added only about 0.5 point of margin in Q4. **Studds** makes its own moulds, foam liners and decals, paints in-house, runs its own certified test lab, and holds European (ECE 22.06) and Indian (IS 4151) certifications plus local approvals in Brazil and Indonesia. **My view: in-house production is a real cost advantage for Exide and Studds; Amara Raja's recycling edge is still a plan.**",
                },
                {
                    label: 'The next leg: an early start, not yet a moat',
                    text: "**Exide** has a running 6 GWh cell plant built before Chinese technology export curbs started, which its CEO calls being ‘one of those lucky ones’; ICRA calls it an ‘early mover advantage’, but there are no take-or-pay contracts and the technology is licensed from SVOLT of China. **Amara Raja's** licence from Gotion has been blocked by Chinese export rules, so it is developing its own cells (‘Plan B’) and admits Indian cells cost ‘China plus 15% to 20%’. **Studds'** next leg is simpler: a new plant, SMK volumes growing about 52% a year over two years, and exports. **My view: neither battery maker has a lithium moat yet; Exide has a lead in time, Amara Raja is behind.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "In helmets, **Steelbird** and **Vega** are the main organised rivals (named by CARE), and the unorganised market is the one Studds is taking share from. In cells, the rivals are Chinese makers who set world prices; **Exide's** CEO says India needs two or three more local cell makers before the government will protect them, so **Exide** and **Amara Raja** compete against imports, not each other, for now.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For batteries, the margin depends on how quickly price rises follow lead, sulphur and plastics costs, how much of the sale goes to the replacement market, and how much lithium start-up cost sits inside the group. For helmets, it depends on styrene, wages and the mix of premium helmets and exports. Three patterns show up: margins protected by brand and recycling, margins moved by input prices, and margins held down by start-up spending.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: brand, replacement and recycling',
                    text: "**Exide's** standalone lead-acid margin was 11.7% in Q4 FY26 and 12.4% in Q1 FY27, rising through a sulphur spike and a weak rupee, helped by its own recycled lead and falling warranty costs. **Studds** raised its margin from 12% in FY23 to 19% in FY26 as SMK and exports grew; management says the Studds brand earns about 17% and SMK about 27%, with SMK exports at 30–35%. **My view: the structural margin is about 12% for Exide's lead-acid business and about 17–19% for Studds after the permanent wage rise, not the 20% it reached in Q1 FY26.**",
                },
                {
                    label: 'Cyclical: inputs and price lags',
                    text: "**Studds'** Q1 FY27 margin of 11.5% was the plastics shock: styrene-based materials are about 36% of its direct material cost plus about 15% of indirect cost (paint), and CARE puts crude-linked inputs at about half of raw materials. Management guides 14–15% in Q2 and 18–20% by Q4 FY27, but only if raw material prices stay stable,; bike makers may ask for small cuts if plastics fall. **My view: Studds' margin should recover most of the way within three quarters if styrene stays near ₹185/kg; a second Gulf shock would repeat Q1.**",
                },
                {
                    label: 'Not structural: brand spending and lithium start-up costs',
                    text: "**Amara Raja** says about 0.9 point of its Q1 margin went on brand spending (IPL cricket), a pilot service called Amaron Assist and ‘Factory of the Future’ work, about ₹35cr in all, and about 0.5 point on new-energy start-up costs; at the Q4 call it was still ‘hopeful’ of 13–14%, a figure not repeated in August. **Exide's** lithium subsidiary lost ₹248cr on ₹158cr of revenue in FY26, the main reason its consolidated profit (₹351cr in Q1) is below the standalone ₹407cr, and losses will rise as depreciation starts on the new plant. **My view: Amara Raja's core margin should recover to about 11%, not 14%; both companies' group margins will stay below their lead-acid margins until at least FY29.**",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Exide** cut its cash cycle from 74 days to 42 in FY26, with inventory down from 144 days to 120 and payables up to 110 days, and turned ₹2,413cr of operating cash, 129% of operating profit. That will not repeat every year; its five-year conversion is 71%.",
                },
                {
                    label: 'Working capital: steady',
                    text: "**Amara Raja** has held an 82–93 day cycle for five years (98 days of stock, 33 of debtors, 46 of payables in FY26) and turned 73% of operating profit into cash over five years. Management expects its new battery-storage business to need 90–100 days, so the cycle is unlikely to fall.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Studds'** inventory days rose from 62 in FY24 to 107 in FY26 on Screener's basis (91 on the company's), which management blamed on a new Faridabad warehouse and more stock held in the US, and its auditor made inventory valuation a key audit matter. The cash cycle went from 34 days to 62 in two years, and five-year cash conversion is only 60%. **This is the number to watch as the new plant fills.**",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Battery makers stock lead and finished batteries across national networks, and helmet makers need many sizes, colours and certifications for each market. **Judge each against its own history, and expect working capital to rise as new plants and export markets start.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Studds Accessories', 'Capex ₹7.5cr in Q1; ₹76cr spent on the new plant by June plus ₹10cr of vendor advances; FY28 plan ₹31cr; inventory 85–90 days ‘comfortable’', 'Borrowings ₹8cr; CARE put cash at ₹81.5cr (Sep 2025); rating withdrawn in April at the company’s request; no IPO money received (offer for sale only)'],
                        ['Amara Raja Energy', 'Capex ₹1,700cr in FY27 (new energy ₹1,300cr), ₹450cr spent in Q1; ‘at least ₹700–800cr’ a year of cash after dividends to fund new energy before outside money is needed', 'Borrowings ₹406cr at March; CRISIL AA+/Stable, bank lines raised to ₹665cr; ₹495.5cr committed to SIPCOT for leased land'],
                        ['Exide Industries', '₹1,400cr of equity into the lithium subsidiary in FY27 (₹100cr done in July); core capex about ₹500cr a year; full 12 GWh may cost more than ₹7,000cr', 'Standalone debt-free; group gross debt ₹1,575cr against ₹1,082cr of cash (ICRA); ₹3,000cr guarantee for the subsidiary; ICRA AAA/Stable; HDFC Life stake about ₹5,100cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. All three are consolidated on Screener.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, what is being built and how it is paid for, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: lead-acid volumes and price',
                    text: "**Exide** declined in August to give a full-year FY27 figure after 17.6% growth in Q1, because the second half faces a high base; in May it had guided ‘high-single to double-digit’ growth for FY27 and about 11% a year over five years, the same as the last five; it is adding car-battery capacity across five plants for the replacement demand that the post-GST car boom will create in 2.5–3 years, for about ₹500cr a year. **Amara Raja's** CFO sees 9–10% a year of lead-acid revenue growth, adding ‘I am not calling this a guidance’; its inverter-battery plant is already at 100% and it bought in 15% of lead-acid revenue as finished goods in Q1. Both expect exports to recover after a weak Middle East. **My view: 9–11% revenue growth in lead-acid is reasonable, with FY27's second half slower than its first.**",
                },
                {
                    label: 'Growth driver: lithium cells and storage',
                    text: "**Exide's** 6 GWh phase 1 (half two-wheeler cells, half LFP cells for three-wheelers, telecom and storage) cost about ₹5,600cr, with land and utilities for 12 GWh; ₹4,902cr of equity was in by July and about ₹2,000cr of term loans is undrawn. First-year use: 25–30%; no margin target. **Amara Raja** plans about ₹9,000–9,500cr to reach 16 GWh by FY30, a target that ‘can change’: a 2 GWh cell plant (Giga-1) sells from H1 FY28 and a storage plant targets 5 GWh by end-2026; storage earns only 5–8%, and the target at 8–10 GWh is a 10–11% margin and ‘low double-digit’ return. **My view: at those targets, lithium will earn less than lead-acid does today; neither company has disclosed a customer order book, so I build in losses to FY28 and only modest profit after.**",
                },
                {
                    label: 'Growth driver: a new helmet plant, exports and premium',
                    text: "**Studds'** Facility V in Faridabad costs about ₹160cr in two phases of 1.5 million units each, taking capacity from about 9.5 million to 12.5 million a year; phase 1 starts in October 2026, phase 2 over 15–18 months, all from its own cash. At about ₹530 of cost per unit of capacity against about ₹780 of revenue per helmet, the plant should turn its cost into sales about 1.5 times at full use (today's plants: 1.9 times). Plants ran at 81–89%, so the space is needed. Exports grew 32% to ₹128.6cr in FY26; the target is about 30% of sales in two to three years, helped by Decathlon and Italy from October. **My view: the capacity, the export pipeline and the SMK trend support mid-teens revenue growth, but the Studds brand itself grows only about 3% a year in volume.**",
                },
                {
                    label: 'Growth driver: new products and home energy',
                    text: "**Exide's** home UPS batteries are about ₹2,300cr of revenue and solar has passed ₹1,000cr; **Amara Raja's** home energy volumes grew 60% in Q1. **Studds** adds riding jackets and Bluetooth intercoms, worth ₹15–20cr in FY27, while its Italian unit loses about ₹2–2.5cr. **My view: home and solar energy are real second engines for the battery makers; Studds' accessories are small for now.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Exide** beat on every core promise: it guided ‘high-single to double-digit’ growth and delivered 17.6% standalone, its margin rose to 12.4%, exports turned from decline to +20%, and both cell sample lines shipped on the dates promised in May, followed by commissioning on 23 September. **Amara Raja** beat on revenue, growing 24% against ‘mid-to-high single digit’ volume guidance.",
                },
                {
                    label: 'Cautious',
                    text: "**Exide** declined to give FY27 guidance because the second half faces a high base, and conceded delays on a planned co-investment line with Hyundai-Kia. **Studds** kept its ‘high teens’ revenue guidance for FY27 (about 10% volume and 7–8% price) but grew 13.7% in Q1, and its FY28 view is ‘mid to high teens’. **Amara Raja** says it must ‘invest carefully in capacity because any redundant capacity we create will be highly taxing on the financials’.",
                },
                {
                    label: 'Missed',
                    text: "**Studds** promised on 25 May, after the April styrene peak was already known, FY27 margins ‘at broadly similar levels’ to FY26's 19.3%; it delivered 11.5% and cut the guide to 14–15% for Q2. Its new plant slipped from ‘by Q2’ to October, and Decathlon and Italy from July and mid-Q2 to October. **Amara Raja's** recycling plant was due to stabilise ‘next quarter’ and is still in trial production; the 13–14% margin hope was not repeated; and only the CFO and finance head took the Q1 call.",
                },
                {
                    label: 'Mixed',
                    text: "**Exide's** lithium plant is running, but the timetable has already slipped once (from H2 FY26 to about September 2026, per ICRA) and phase-1 cost rose about 8% to ₹5,600cr. **Amara Raja** raised FY27 capex to the top of its ₹1,500–1,700cr range while softening the 16 GWh target. On the good side, Andhra Pradesh's pollution board revoked its 2021 closure orders on 18 July, removing a five-year overhang.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Studds to grow earnings at about 15% a year, Exide at about 13% and Amara Raja at about 12%.** Studds' figure starts from a trailing profit cut by Q1's shock (about ₹75cr against ₹83cr in FY26) and assumes a recovery to an 18% margin by FY28, mid-teens revenue growth from the new plant and exports, and the permanent wage cost. Exide's assumes about 11% lead-acid growth at a 12% standalone margin, with lithium losses widening in FY27–FY28 as depreciation starts and narrowing after. Amara Raja's assumes 9–10% lead-acid growth, a margin back to about 11%, and new-energy losses of ₹150–250cr a year until Giga-1 fills, from a trailing profit lifted by a one-off insurance claim.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Studds Accessories', 'Margin back to about 18%; new plant +32% capacity; exports towards 30% of sales; SMK; wage cost permanent', '8% / **15%** / 20%'],
                        ['Amara Raja Energy', 'Lead-acid 9–10%; margin back to about 11%; new-energy losses until Giga-1 fills from FY28', '5% / **12%** / 17%'],
                        ['Exide Industries', 'Lead-acid about 11% at a 12% margin; cell plant losses to FY28, then modest profit', '7% / **13%** / 20%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Studds Accessories', 'FY27 revenue ‘high teens’; margin 14–15% in Q2 and 18–20% by Q4 FY27 if raw materials stay stable; exports 23–24% of sales in FY27; FY28 ‘mid to high teens’', 'New plant about ₹160cr in two phases, ₹76cr spent; phase 1 October 2026; all from own cash', '**Missed**: margin 11.5% against ‘broadly similar’ to 19.3%; plant, Decathlon and Italy about a quarter late'],
                        ['Amara Raja Energy', 'Lead-acid revenue 9–10% a year (‘not a guidance’); 13–14% margin not repeated; Giga-1 cells in H1 FY28; 16 GWh ‘can change’', '₹1,700cr in FY27 (new energy ₹1,300cr); about ₹9,000–9,500cr of new energy to FY30', '**Mixed**: revenue +24% beat; margin 9.6%; recycling still in trial; capex raised'],
                        ['Exide Industries', 'No FY27 figure in August (high second-half base); May: lead-acid ‘high-single to double-digit’ in FY27, about 11% a year for five years; cell plant 25–30% use in year one; no lithium margin target', 'Group ₹1,000–1,500cr in FY27; ₹1,400cr into the cell subsidiary; phase 1 about ₹5,600cr; 12 GWh may exceed ₹7,000cr', '**Beat**: +17.6% and 12.4% margin; cell samples on time; plant commissioned 23 Sep; earlier cost overrun and delay'],
                    ],
                    note: 'All three consolidated on Screener; Exide’s growth and margin on the calls are standalone. Amara Raja’s capex and growth figures are from the official Q1 transcript.',
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
                    label: 'Lithium: money in before returns',
                    text: "**Exide** will have about ₹6,300cr of equity in its cell subsidiary by the end of FY27, and it guarantees up to ₹3,000cr of the subsidiary's loans, for a subsidiary that had ₹158cr of revenue and a ₹248cr loss in FY26. Its technology is licensed from SVOLT, China may block further licences, and all electrolyte comes from China. **Amara Raja** has already lost its Gotion licence to Chinese export rules and depends on Chinese equipment engineers and cathode supply. Neither discloses customer volume commitments. **A Chinese squeeze on battery materials after November 2026, or a further cost overrun, would hit both.**",
                },
                {
                    label: 'Governance: related parties at Amara Raja',
                    text: "**Amara Raja's** FY26 annual report shows about ₹890cr of dealings with promoter-group companies: ₹381cr of plastic parts and ₹55cr of assets from Mangal Industries, ₹213cr of plant construction and ₹132cr of services from Amara Raja Infra, and ₹110cr of goods from Amara Raja Electronics. The auditors' CARO report notes that title deeds to some land are not in the company's name, including 18.94 acres (₹77.8cr) and 15.66 acres of leasehold still registered to Mangal, and that a subsidiary made cash losses of ₹19.6cr. Contingent liabilities rose to about ₹370cr from about ₹250cr. The audit opinion is clean. The promoter holds only 32.86%.",
                },
                {
                    label: 'Governance: guarantees and judgement areas at Exide',
                    text: "**Exide** has given a ₹3,000cr corporate guarantee for its cell subsidiary's borrowings, so the standalone ‘debt-free’ description understates what the group owes. Its tax demands under dispute jumped to ₹57cr from ₹5cr within ₹66cr of claims, plus an unquantified landlord claim in the Bombay High Court, all small against net worth of about ₹13,900cr. The auditor, B S R & Co., gave a clean opinion but flagged warranty provisions and dealer loyalty-scheme incentives as key audit matters because both rest on management estimates.",
                },
                {
                    label: 'Governance and guidance at Studds',
                    text: "**Studds'** margin promise of 25 May was made after the April styrene peak was known, which dents trust in its guidance. The auditor is a small firm, Rajan Chhabra & Co., with a clean opinion. Promoter-family pay is material for a company this size: ₹2.80cr and ₹2.73cr for the two Khurana executives and ₹1.49cr for a whole-time director (up from ₹0.83cr). Contingent liabilities are only ₹3.7cr.",
                },
                {
                    label: 'Inputs and supply shocks',
                    text: "**Studds** depends on styrene imported through the Gulf, and a second disruption would repeat Q1; its Haryana wage rise is permanent. The battery makers are exposed to sulphur (up about five times in a year at Exide), plastics, and the rupee, and to lead prices that are calm today but set about 70% of their material cost. **Amara Raja's** vehicle-battery exports fell 20% in Q1 on the Middle East, which is 3–4% of its revenue.",
                },
                {
                    label: 'Substitution and the volume cycle',
                    text: "Lithium is already taking telecom and e-rickshaw batteries from lead-acid, and a faster shift in cars and two-wheelers would shrink the replacement market that both battery makers depend on. Vehicle volumes face a high GST-cut base from Q3 FY27, and ICRA forecasts only 3–5% two-wheeler growth for FY27, which matters for Studds' bike-maker sales and for the two battery makers' supplies to vehicle makers.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two disagree for particular reasons: Exide's net cash in the table counts about ₹5,100cr of HDFC Life shares, which makes EV/EBITDA look kinder; Amara Raja's trailing profit includes a one-off insurance claim; and Studds' trailing profit is cut by Q1's plastics shock.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **13.1% at 19.8x, 14.1% at 21.6x and 20.8% at 38.4x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Studds and Amara Raja fit my estimates; Exide does not.**",
            ],
            points: [
                {
                    label: 'Fits: Studds, priced for a margin recovery',
                    text: "**Studds** needs about 14% a year against my ~15%. The price is near its 52-week low and 32% below its high, and it assumes the margin returns to the high teens, which is what management promises by Q4 FY27. The new plant is mostly paid for from cash, so there is no dilution or debt risk. **Buy if Q2's margin reaches the promised 14–15%; a figure below 13% would mean the recovery is slower than guided.**",
                },
                {
                    label: 'Fits: Amara Raja, priced for doubt',
                    text: "**Amara Raja** needs about 13% a year against my ~12%, the lowest bar in this group. The market doubts both the margin and the lithium plan, which is fair, but pays little for the 24% Q1 growth or the Amaron brand. The trailing profit includes a one-off insurance gain, so the true bar is a little higher than the table shows. **Buy when the margin is back above 11% and the storage plant starts on time with orders.**",
                },
                {
                    label: 'Stretched: Exide, paying for lithium in advance',
                    text: "**Exide** needs about 21% a year against my ~13%. Roughly a seventh of its market value is the HDFC Life stake, and the rest pays for a lead-acid business growing about 11% plus a lithium business that has not yet sold a meaningful volume of its own cells. The lead-acid business alone would look much cheaper, but shareholders also own the lithium losses and the ₹3,000cr guarantee. **Wait for cell orders and a quarter of cell revenue with narrowing losses, or a lower price.**",
                },
                {
                    label: 'Why the two battery makers are priced so differently',
                    text: "**Exide** and **Amara Raja** sell similar products to the same customers, yet the price asks for about 21% a year from one and 13% from the other. The gap reflects Exide's AAA balance sheet, rising margin, HDFC Life stake and running cell plant, against Amara Raja's falling margin, related-party dealings and lost technology partner. Part of the gap is deserved, but not all of it if Amara Raja's margin recovers.",
                },
                {
                    label: 'A check against the rest of Auto Related',
                    text: "Two of these three need less growth than most of the Auto Related sector, where electronics and EV names are priced for 20% a year or more, which is fair for mature lead-acid and a helmet market growing about 6% a year. The best entries in a group like this tend to come when a cost shock hits margins while the brand and volumes hold, which is the situation at Studds now and at Amara Raja over the past year.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Studds Accessories', rank: 1, stance: 'SCALEUP', segment: HEL,
            what: "Studds Accessories: India's largest two-wheeler helmet maker (Studds and premium SMK brands, private labels for European brands, riding accessories), selling 55% through distributors and brand outlets, 20% as exports and 14% to bike makers from three plants.",
            view: "**A good, debt-free brand business knocked off course by one quarter.** FY26 revenue rose 9% to ₹634cr at a 19% margin and a 23% return on capital, but Q1 FY27's margin fell to 11.5% on a plastics spike, weeks after management promised similar margins. A new plant adds a third to capacity from October, paid for from its own cash, and exports are heading from 20% towards 30% of sales. The price needs about 14% a year against my ~15%.",
            watch: 'Q2 FY27 margin of 14–15% and Q4 back to 18–20%; the new plant and Decathlon and Italy starting in October; inventory days coming back below 100.',
        },
        {
            company: 'Amara Raja Energy', rank: 2, stance: 'TURNAROUND', segment: BAT,
            what: "Amara Raja Energy & Mobility: India's second-largest lead-acid battery maker (Amaron), selling vehicle, inverter, telecom and industrial batteries (₹13,005cr in FY26), plus a new-energy arm building lithium packs, storage systems and a cell plant (₹809cr, loss-making).",
            view: "**Strong volumes, a slipping margin and an unproven lithium plan, priced for doubt.** Q1 FY27 revenue rose 24%, but the margin fell to 9.6% from 14% in FY24, free cash was negative in FY26, and ₹1,700cr goes into new energy this year without a technology partner. Promoter-group firms sold it about ₹890cr in FY26 and some land is still in their name. The price needs about 13% a year against my ~12%.",
            watch: 'Margin back above 11% by Q3 FY27 as price rises catch up; the 5 GWh storage plant starting by end-2026 with orders; new-energy losses staying below about ₹200cr a year.',
        },
        {
            company: 'Exide Industries', rank: 3, stance: 'PRICED', segment: BAT,
            what: "Exide Industries: India's largest lead-acid battery maker, for vehicles (about half of revenue), inverters, solar, railways, telecom and industry, with its own lead recycling (Chloride Metals) and a new 6 GWh lithium-cell plant in Bengaluru (Exide Energy Solutions).",
            view: "**The best lead-acid business, with a costly lithium option priced in.** Standalone Q1 FY27 growth was 17.6% at a 12.4% margin through a cost spike, and the cell plant was commissioned on 23 September. But about ₹4,900cr of equity is in a subsidiary that lost ₹248cr in FY26, group return on equity is about 6%, and Exide guarantees ₹3,000cr of its loans. The price needs about 21% a year against my ~13%.",
            watch: 'First cell revenue in Q3 FY27 and disclosed customer orders; lithium losses narrowing by FY28; the standalone margin holding above 11% as the GST base effect bites.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Helmets and riding accessories.** **Studds: follow**, a debt-free brand business whose margin was hit by one plastics shock; buy if Q2 shows the promised recovery and the new plant starts in October.",
            "**Lead-acid and lithium batteries.** **Amara Raja: follow**, cheap for a reason, with strong volumes but a slipping margin, heavy lithium spending and related-party dealings; buy on a margin back above 11%. **Exide: wait**, the best lead-acid business and the furthest ahead in cells, but the price already pays for lithium that has not yet sold.",
            "**What would change my view.** For the better: Studds' margin back near 18% by Q4 FY27 with the new plant filling; Amara Raja's margin recovering and its storage plant winning orders; Exide disclosing cell orders and narrowing losses. For the worse: a second Gulf plastics shock; Chinese controls on battery materials from November; further cost overruns or delays at either cell plant; more related-party spending at Amara Raja.",
            "**What to watch next quarter.** Studds' Q2 margin and the October start of its new plant; Amara Raja's margin after the June and August price rises; Exide's first cell revenue and the use of its new plant; and whether replacement demand holds as the GST-cut base arrives in Q3.",
        ],
        bottomLine:
            "Follow Studds for a margin recovery at a fair price; follow Amara Raja for a margin back above 11%; and wait on Exide, the best lead-acid business, until its lithium plant shows orders or the price falls.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/EXIDEIND/consolidated/' },
        { label: 'ACMA: auto component industry grows 12.7% to ₹7.6 lakh cr in FY26 — Autocar Professional, Jul 2026', url: 'https://www.autocarpro.in/news/acma-indian-auto-component-industry-grows-127-percent-to-inr-76-lakh-crore-in-fy26-133454' },
        { label: 'ACMA: auto components likely to grow 8–10% in FY27 — BizzBuzz, Jul 2026', url: 'https://www.bizzbuzz.news/corporate/auto-components-industry-likely-to-grow-by-8-10-in-fy27-acma-1396804' },
        { label: 'CareEdge: auto ancillary industry to grow 8–9% in FY27 — Aug 2026', url: 'https://www.socialnews.xyz/2026/08/13/indian-auto-ancillary-industry-to-grow-by-8-9-pc-in-fy27-touch-rs-10-6-lakh-crore' },
        { label: 'CRISIL: auto component margins to fall to 10.5–11% — Autocar Professional, Jun 2026', url: 'https://www.autocarpro.in/news/auto-component-margins-to-fall-to-105%E2%80%9311-percent-on-west-asia-conflict-crisil-132904' },
        { label: 'Elara Capital FY26 review of listed auto ancillaries — NewKerala', url: 'https://www.newkerala.com/news/a/auto-ancillary-sector-revenue-grew-125-fy26-volume-433.htm' },
        { label: 'ICRA: 3–6% auto volume growth in FY27 — Autocar Professional', url: 'https://www.autocarpro.in/news/indian-auto-sector-expected-to-see-3-6-volume-growth-in-2026-27-icra-131239' },
        { label: 'FADA: EV retail share 12.3% in August 2026 — Punjab Kesari', url: 'https://english.punjabkesari.com/business/ev-retail-sales-hit-record-august-high-of-298-lakh-units-penetration-rises-to-123-pc-fada' },
        { label: 'Exide Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ffb4cad7-4aa9-42fc-b99e-1af3b9ff8732.pdf' },
        { label: 'Exide Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=00ba5f91-df41-44a8-8016-9554f802711e.pdf' },
        { label: 'Exide Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=845cc706-14c6-4b48-993f-0f369a831928.pdf' },
        { label: 'Exide Annual Report FY26 (auditor’s report, contingent liabilities, subsidiaries) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d0eaede7-8980-46b2-ab00-65004acffc3d.pdf' },
        { label: 'Exide rating rationale (AAA/Stable) — ICRA, Jun 2026', url: 'https://www.icra.in/Rating/GetRationalReportFilePdf?id=143548' },
        { label: 'Amara Raja Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8be318e5-09e3-453f-a6ba-c07ea10ca97d.pdf' },
        { label: 'Amara Raja Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=210c7ac8-954e-4c12-ab6a-709498c9815f.pdf' },
        { label: 'Amara Raja Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=0f2b0b99-9038-4bfd-a1f1-5d9b9834c96b.pdf' },
        { label: 'Amara Raja Integrated Annual Report FY26 (segments, related parties, CARO) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e3e85cf0-eeae-4fc2-85b1-4dcd45d4d8e1.pdf' },
        { label: 'Amara Raja rating rationale (AA+/Stable) — CRISIL, Mar 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/AmaraRajaEnergyAndMobilityLimited_March%2030_%202026_RR_392344.html' },
        { label: 'Studds Q4 FY26 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=e26296b7-b2c8-4bc0-9d9f-80a78fd2189b.pdf' },
        { label: 'Studds Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=510cba47-92c0-4c70-9801-36f65d3f5da6.pdf' },
        { label: 'Studds Annual Report FY26 (MD&A, auditor’s report, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/8b4fb3e1-5b45-44f1-b880-247f709ea0b3.pdf' },
        { label: 'Studds rating rationale (withdrawn) — CARE, Apr 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604140445_Studds_Accessories_Limited.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
