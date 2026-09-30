import { SectorOverview } from './types';
import { industrialMachineryBusinesses } from './industrial-machinery-businesses';
import { industrialMachineryValuationInputs } from './card-data/industrial-machinery';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const TOOLS = 'Machine tools — metal-cutting machines';
const PROCESS = 'Textile and packaging machinery — process lines and spares';

export const industrialMachinery: SectorOverview = {
    sector: 'Industrial Machinery',
    title: 'Industrial Machinery',
    format: 'ranked',
    businesses: industrialMachineryBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: industrialMachineryValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'LMW': 24,
            'Mamata Machinery': 20,
            'Jyoti CNC Auto.': 25,
            'Macpower CNC': 22,
        },
    },
    standfirst:
        "Four machine builders: two in metal-cutting machine tools (Jyoti CNC and Macpower), one in textile spinning machinery with machine tools and aerospace parts on the side (LMW), and one in plastic-packaging machines (Mamata). India used ₹36,419cr of machine tools in FY26 and imported about 59% of them, so a domestic maker grows by replacing imports, not by beating its neighbour. But the notes and annual reports show three different problems under one label: profit that does not turn into cash (Jyoti, Macpower), profit that sits at the bottom of a cycle (LMW, Mamata), and governance flags that matter more than the growth rate (Jyoti's French subsidiary). **None is cheap enough to own today; Macpower is the one to follow.** Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-23',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener), operating profit ÷ sales. Macpower standalone; the rest consolidated.',
            note: 'Operating margin excludes other income, which is large at LMW because of its cash pile.',
            values: {
                'LMW': [2, 5, 6, 8, 7],
                'Mamata Machinery': [8, 12, 13, 5, -13],
                'Jyoti CNC Auto.': [24, 25, 27, 25, 21],
                'Macpower CNC': [13, 17, 18, 16, 16],
            },
            cellNotes: {
                'Jyoti CNC Auto.': 'Consolidated. The standalone Indian business earns about 27%; Huron, its French unit, is loss-making.',
                'Mamata Machinery': 'Q1 FY27: customers delayed deliveries after polymer prices jumped, and trade-show (Interpack) and staff costs were charged in the smallest quarter of the year.',
                'LMW': 'Textile machinery is running at about 60% utilisation, so fixed costs weigh on the margin.',
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
                'LMW': [3, 7, -1, 16, 24],
                'Mamata Machinery': [40, 25, -8, -34, -6],
                'Jyoti CNC Auto.': [13, 18, 28, 4, 24],
                'Macpower CNC': [22, 21, 43, 25, 56],
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
            note: 'LMW’s returns are held down by about ₹2,000cr of cash and investments and by the textile downturn.',
            values: {
                'LMW': [14, 22, 18, 5, 6],
                'Mamata Machinery': [31, 22, 33, 35, 13],
                'Jyoti CNC Auto.': [5, 8, 21, 24, 21],
                'Macpower CNC': [23, 19, 30, 27, 29],
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
            note: 'LMW’s is short because spinning mills pay advances; Jyoti’s is long because it holds many machines and parts, including machines waiting for export licences at Huron.',
            values: {
                'LMW': [31, 22, 21, 31, 23],
                'Mamata Machinery': [208, 211, 206, 244, 227],
                'Jyoti CNC Auto.': [392, 327, 336, 304, 359],
                'Macpower CNC': [105, 134, 139, 167, 182],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit.',
            note: 'Operating cash is after tax, so 70–80% is healthy.',
            values: {
                'LMW': [196, 81, 32, 20, 104, 83],
                'Mamata Machinery': [123, 71, 85, 131, 9, 94],
                'Jyoti CNC Auto.': [53, 55, -16, -21, 10, -1],
                'Macpower CNC': [-35, 24, 49, 17, 26, 21],
            },
            cellNotes: {
                'Jyoti CNC Auto.': 'Five years of operating profit, almost none of it collected as cash, as stock and new capacity absorbed it.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses five-year totals.',
            note: 'Jyoti has funded its expansion with an IPO and borrowing rather than its own cash.',
            values: {
                'LMW': [12.9, 1.8, -0.2, -3.4, 3.2, 2.6],
                'Mamata Machinery': [18.5, 7.9, 16.3, 27.5, -2.2, 13.9],
                'Jyoti CNC Auto.': [-0.3, 0.9, -12.1, -22.8, -12.9, -12.1],
                'Macpower CNC': [-6.2, -1.0, 2.7, -3.4, 0.9, -1.1],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Investments are counted as cash for LMW.',
            note: 'Below zero means more cash than debt. LMW’s cash pile is about nine years of today’s depressed operating profit.',
            values: {
                'LMW': [-3.8, -2.8, -3.7, -14.5, -11.6],
                'Mamata Machinery': [0.7, 0.6, 0.2, -1.1, -0.7],
                'Jyoti CNC Auto.': [10.5, 10.5, -0.3, 0.8, 1.4],
                'Macpower CNC': [-0.5, -0.2, -0.3, -0.1, -0.1],
            },
            cellNotes: {
                'Jyoti CNC Auto.': 'FY24: IPO money repaid most of its debt; borrowing has risen again with the Huron business and expansion.',
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses five-year totals.',
            note: 'Jyoti is taking capacity from 6,000 to 16,000 machines a year; Macpower’s new plant is due by FY28.',
            values: {
                'LMW': [2.4, 5.9, 3.2, 4.3, 2.3, 3.8],
                'Mamata Machinery': [0.8, 0.5, 0.6, 0.7, 3.0, 1.1],
                'Jyoti CNC Auto.': [5.5, 3.7, 8.5, 17.1, 15.4, 11.9],
                'Macpower CNC': [2.6, 3.4, 4.4, 6.1, 3.3, 4.0],
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
                'LMW': [4.4, 5.2, 4.8, 3.0, 3.4],
                'Mamata Machinery': [3.1, 3.2, 3.8, 4.0, 3.6],
                'Jyoti CNC Auto.': [2.6, 3.3, 4.2, 3.9, 2.9],
                'Macpower CNC': [4.8, 4.6, 5.1, 4.8, 5.5],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Latest order book from the Q1 FY27 call or presentation ÷ FY26 sales (Screener).',
            note: 'Blank where no rupee order book was given.',
            values: {
                'LMW': [null],
                'Mamata Machinery': [null],
                'Jyoti CNC Auto.': [2.3],
                'Macpower CNC': [null],
            },
            cellNotes: {
                'Jyoti CNC Auto.': '₹4,848cr, 38% of it aerospace and defence.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'own', label: 'Owns the key technology', description: 'Makes the parts that matter (controller, spindle, casting, process design) rather than buying them.' },
            { key: 'base', label: 'Installed base and spares', description: 'Machines already running that need spares and service for years.' },
            { key: 'mix', label: 'High-end customers', description: 'Sells to aerospace, defence or global brands that pay for capability.' },
            { key: 'scale', label: 'Scale and range', description: 'Capacity, range and service network.' },
            { key: 'price', label: 'Pricing power', description: 'A = sets its price; D = competes mainly on price.' },
        ],
        rows: [
            { company: 'LMW', trend: 'stable', trendNote: 'Moat intact but demand weak at about 60% utilisation; aerospace order book near ₹1,000cr.',
                grades: { own: { grade: 'A', note: 'Designs complete spinning lines' }, base: { grade: 'A', note: 'Spares are 26% of textile sales' }, mix: { grade: 'B', note: 'Aerospace unit exports 90%' }, scale: { grade: 'A', note: 'India’s leader in spinning lines' }, price: { grade: 'B', note: 'Oligopoly with Rieter, Trützschler, Toyota, Saurer' } } },
            { company: 'Mamata Machinery', trend: 'stable', trendNote: 'EU patent on its cross-sealing device; RecTech recyclable-film technology in trials.',
                grades: { own: { grade: 'B', note: 'Patented sealing technology' }, base: { grade: 'B', note: '5,400+ machines in 80+ countries' }, mix: { grade: 'B', note: 'Dairy-standard hygiene machines' }, scale: { grade: 'D', note: '₹233cr' }, price: { grade: 'B', note: 'Premium in the US market' } } },
            { company: 'Jyoti CNC Auto.', trend: 'widening', trendNote: 'Aerospace and defence 38% of the book; own controller in development; foundry expanding.',
                grades: { own: { grade: 'B', note: 'Own foundry; controller two years away' }, base: { grade: 'B', note: 'Large Indian installed base' }, mix: { grade: 'A', note: 'MBDA and aerospace orders' }, scale: { grade: 'A', note: 'India’s largest machine-tool maker' }, price: { grade: 'B', note: '27% standalone margin' } } },
            { company: 'Macpower CNC', trend: 'stable', trendNote: 'Well run, but sells entry-level machines where competition is fiercest.',
                grades: { own: { grade: 'C', note: 'Makes some spindles; buys controllers' }, base: { grade: 'C', note: 'Small job shops' }, mix: { grade: 'C', note: 'Mostly entry level' }, scale: { grade: 'C', note: 'About 2,500 machines a year' }, price: { grade: 'C', note: 'Price rises of 4–6% only' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Macpower CNC is the one to follow, and the closest to a buy.** It is a small Rajkot maker of ₹20-lakh machines for job shops (small workshops that machine parts for bigger factories), and it is executing better than anyone here: Q1 FY27 sales rose 56%, the order book reached ₹456cr (up 32% on a year ago), a 4–6% price rise from June stuck, and it builds nothing without an advance. Management raised FY27 revenue guidance to 30%+ and says margins will rise each quarter from 16.2%. What holds me back is physical and financial: the plant will be about 90% full this year, the new 13-acre site only opens around Q2 FY28, and stock of 259 days meant only ₹3cr of free cash in FY26. Its own annual report says the 13-acre site sustains only about 20% growth, below the 30%+ on the call, and the bigger 60-acre plot has missed three deadlines. The price needs a little more than the ~22% a year I expect; **a margin above 18% that holds into FY28, with stock falling so profit turns into cash**, would close the gap.",
                "**Jyoti CNC has the best Indian business and the most unresolved risk: wait.** Its India business grew 37% in Q1 at a 27% margin, it has a ₹4,848cr order book (about two years of sales) and capacity is due to go from 6,000 to 16,000 machines a year from October (the new plant was due by end-September; no commissioning filing seen by 30 September). But the FY26 annual report carries an auditor's emphasis of matter (a formal warning without qualifying the accounts) that its French subsidiary, which holds about ₹500cr of the parent's money, may not be a going concern; that subsidiary, Huron, is under a French judicial investigation over export controls. A promoter has 6.7% of the company pledged, borrowings have risen to ₹853cr, and three years of operating cash add up to less than zero. Q1 also missed its own guide: the group grew 24% at a 21.4% margin against 25–30% at about 25%, and ₹67cr of expected Huron revenue was not booked. I want one half-year of the promised cash, **with no Huron write-down**, before paying a full price.",
                "**LMW is the franchise, but at a cycle-top price: wait.** It leads Indian spinning machinery, sells spares worth about a quarter of its textile revenue, holds about ₹1,970cr of cash with no debt (CRISIL AA/Stable), and its aerospace order book jumped to about ₹1,000cr. But textile machinery earned ₹9.8cr on ₹1,801cr of sales in FY26, treasury income was about 78% of operating profit, and management expects a gradual, not sharp, recovery. **I have cut my growth estimate from 30% to 24%**, and on that the price needs far more than I expect. The cash is also drifting: ₹162.8cr of purchases from a group company (approval sought for up to ₹450cr), $30m into a UAE holding company, loss-making Dubai and China units, and a new resolution to enter unrelated businesses such as EVs and pharma. The previous call of own does not survive the research.",
                "**Mamata Machinery owns real technology in a broken year: wait.** It is a top-five global name in bag and pouch machines, its domestic packaging-machine sales grew 55% in FY26, and its recyclable-film process was certified in Europe in August. But FY26 revenue fell 8%, the margin halved, Q1 FY27 was a loss, and it has missed two sets of guidance in a row. North American sales fell from about ₹95cr to ₹63cr, and director pay of about ₹5.4cr was roughly a third of FY26 profit. **I now treat it as a turnaround, not a cycle**: the proof is H1 FY27 delivering the ₹80cr of orders management promised.",
                "**Two things to hold onto before reading the rest.** First, **check whether profit becomes cash**: Jyoti and Macpower have grown fast while turning little of it into cash, LMW and Mamata the reverse. Second, **ask how much of the machine each company owns**: in metal cutting the controller (the machine's computer) is about 99% imported from Fanuc, Siemens or Mitsubishi, so the edge sits in castings, scale, approvals and service.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**. Companies are grouped by what they make. All figures are filed (Screener): Macpower standalone, the rest consolidated. **Start with cash conversion**: Jyoti has grown fast but collected almost none of its profit as cash, while LMW and Mamata have. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "India used ₹36,419cr of machine tools in FY26 (up 15%), made only ₹17,387cr of them (up 19%) and imported ₹21,628cr (up 16%), about 59% of what it used, according to IMTMA, the machine-tool makers' association. China supplied 30% of imports, Japan 21% and Germany 12%. India is the world's fourth-largest user of machine tools but only its ninth-largest maker. **That gap is the investment case: an Indian maker does not need to beat another Indian company, only to replace an import.** Textile and packaging machinery follow different cycles and are covered below.",
            ],
            points: [
                {
                    label: 'How big, and how fast',
                    text: "IMTMA-linked forecasts put Indian machine-tool use at about ₹54,000cr by 2030 (cited from IMTMA's May 2026 summit on Macpower's call) and Ken Research at about ₹59,444cr by 2031, both roughly **10% a year**. Domestic makers should grow faster, 15–30%, because they are adding capacity into a market where imports grew fastest whenever local plants were full; Jyoti said imports reached 62% of use last year because no Indian maker had enough capacity. July 2026 was the first month in which Jyoti booked more than 1,000 machines in India. **My view: the demand is real and broad, but the next three years are a capacity race, and the winner is whoever fills new plants without cutting prices.**",
                },
                {
                    label: 'Two markets under one name',
                    text: "Of about 32,000 turning machines made in India, 12,000–14,000 cost under ₹15 lakh; machines above ₹1cr number only 1,000–1,500 a year, according to Macpower's chairman. **Entry and mid-level machines** (₹10–30 lakh) are where Macpower, Ace Micromatic, Bharat Fritz Werner and many private firms compete on price, delivery and service; six or seven domestic players hold about 90% of the locally made supply. **High-end machines** (5-axis, large double-column, ₹1–5cr) for aerospace, defence and railways are mostly imported; India bought 300+ large double-column machines last year at ₹3–5cr each. Jyoti is climbing into the second market; Macpower is expanding in the first.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "Four pools. **Defence**: the 2026–27 budget gives ₹1.85 lakh cr to modernisation, 75% of it reserved for Indian industry (MP-IDSA). **Electronics components**: the government scheme's outlay rose to ₹40,000cr and 106 applications were approved by August, but machine orders lag; Jyoti's electronics order book has sat still for 18 months. **Public capex and railways**: ₹12.2 lakh cr of central capex in FY27, which ICRA says keeps its outlook on capital goods Positive. **Replacement**: machines bought in 2000–05 are due for renewal, which helps makers with service networks. **Textiles**: CRISIL expects cotton-yarn makers' revenue to rise 9–11% in FY27 with margins up to 11–12%, the condition for spinning mills to order new lines again.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Jyoti** depends on aerospace and defence orders, filling a plant that more than doubles its capacity, and the French investigation. **Macpower** depends on job-shop spending and opening its new site on time. **LMW** depends on the textile cycle, which it says runs about eight years (last peak FY22–FY23), and on its aerospace unit. **Mamata** depends on US orders, polymer prices and whether brands adopt recyclable film under India's 2026 plastic-waste rules. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Machine tools with scale, castings and aerospace work', 'Jyoti', '21–27% (India alone 27–29%)', '21%', '**−1%**'],
                        ['Entry-level machine tools', 'Macpower', '13–18%', '29%', '**21%**'],
                        ['Spinning lines, machine tools and aerospace parts', 'LMW', '2–8% (textile 0.5%, tools 8%, aerospace 14% in FY26)', '6%', '**83%**'],
                        ['Packaging and converting machines', 'Mamata', '−13% to 13%', '13%', '**94%**'],
                    ],
                    note: 'Operating margin excludes other income. LMW segment margins are segment results ÷ segment revenue from its FY26 annual report; Jyoti India from its presentations.',
                },
                {
                    caption: 'The sector in numbers',
                    columns: ['Measure', 'Latest figure', 'Source'],
                    rows: [
                        ['Machine-tool use in India, FY26', '₹36,419cr, +15%', 'IMTMA'],
                        ['Made in India, FY26', '₹17,387cr, +19%', 'IMTMA'],
                        ['Imported, FY26', '₹21,628cr, +16% (about 59% of use); China 30%, Japan 21%, Germany 12%', 'IMTMA'],
                        ['Forecast use', 'About ₹54,000cr by 2030; ₹59,444cr by 2031 (about 10% a year)', 'IMTMA summit; Ken Research'],
                        ['Share of Indian production (my arithmetic)', 'Jyoti India ~11%; LMW machine tools ~6%; Macpower ~2%', 'Company filings; IMTMA'],
                        ['Textile machinery demand, FY26', '₹32,397cr, of which ₹26,999cr imported; Indian makers under 25%', 'TMMA(I)'],
                        ['Cotton-yarn outlook, FY27', 'Revenue +9–11%; operating margin 11–12%', 'CRISIL Ratings'],
                        ['Defence modernisation, 2026–27', '₹1.85 lakh cr, 75% reserved for Indian industry', 'MP-IDSA'],
                        ['Electronics component scheme', 'Outlay ₹40,000cr; 106 applications approved', 'IMPRI'],
                        ['Plastic packaging rules', 'Recycled content: rigid 30% rising to 60% by FY29; multilayer 5% to 10% from FY28', 'Plastic Waste Management (Amendment) Rules 2026'],
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
                    label: 'Lasting: the installed base and the process line',
                    text: "**LMW** is one of the few companies in the world that can supply a whole spinning line, and CRISIL credits it with strong brand recall among Indian mills. Spares were 26% of textile sales in Q1 FY27, and every order in its ₹3,200cr textile book carries a 10% deposit, which shows customers commit early. But leadership did not buy pricing power in the trough: the textile division made ₹9.8cr on ₹1,801cr of sales in FY26. **The moat protects its share and its spares, not its margin when mills stop ordering.**",
                },
                {
                    label: 'Real and widening: aerospace and defence approvals',
                    text: "**Jyoti** sold more than ₹800cr to aerospace and defence in FY26, about three-quarters of it made in India, and won its first orders from European missile maker MBDA in Q1. Management puts its share of the Indian CNC market at about 10%. **LMW**'s aerospace unit holds 19 certifications including AS9100 and Nadcap (the approvals aircraft suppliers need), supplies Boeing and Airbus suppliers, ISRO and HAL, and earns about 14%. Approvals take years to win and customers rarely requalify a supplier, **so this is the deepest switching cost on the page.**",
                },
                {
                    label: 'Pricing power: tested this year',
                    text: "West Asia pushed input costs up about 3–3.5%. **Jyoti** raised prices on all new orders from 1 May after 2–3% raw-material inflation; **Macpower** raised 4–6% from 1 June and customers accepted it. **LMW** took no machine-tool price rise in Q4; in July it said price revisions do happen, but it is offsetting costs mainly through savings. **Mamata** says it is the most expensive packaging-machine maker in India and still wins, but its gross margin fell from 60.8% to 54.6% as lower-margin Indian sales replaced US ones. **The two CNC makers passed costs on; the two process-machinery makers mostly absorbed them.**",
                },
                {
                    label: 'Narrow: service, speed and repeat orders',
                    text: "**Macpower** has 10 branches, 8 technology centres and a presence in 39 cities, and more than half its orders are repeat orders. It holds a year of imported ball screws and guides, so it delivers when rivals are short of parts. That matters to a job shop that cannot afford an idle machine, but an entry-level machine can be bought from a dozen makers, it sells only one or two 5-axis machines a year, and its share is about 2% of Indian production. **It is an execution edge, not a structural one.**",
                },
                {
                    label: 'Narrow but real: patents and hygiene standards',
                    text: "**Mamata** holds five patents with three pending, including an EU patent on the cross-sealing device that lets recyclable film seal properly, and is the only Indian maker of dairy machines built to the pre-USFDA 3A hygiene standard. Its RecTech recyclable film was certified 100% recyclable in the EU in August 2026. But spares and service are only 5–7% of sales, so there is little recurring revenue when customers stop buying, and it targets just $2–3m of European sales over three to five years.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Ace Micromatic, Bharat Fritz Werner and Lokesh in Indian machine tools, with one rival adding a 10,000-machine plant at Hosur; DMG Mori, Mazak, Okuma and Chinese, Taiwanese and Korean makers in imports; Rieter, Trützschler, Toyota and Saurer in spinning; Totani, Windmöller & Hölscher, Kabra, Rajoo and Nichrome in packaging machinery.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The four companies earn very different margins, and each difference has a cause you can track. Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: Jyoti’s Indian business',
                    text: "The standalone Indian business earned 28.9% in FY26 and 27.2% in Q1 FY27, with gross margin up 2.3 points to 52.8%, from scale, its own foundry and an aerospace-heavy mix. The group margin was only 21.4% in Q1 because Huron booked costs without revenue and there was a ₹10cr currency loss, against a currency gain a year earlier. On the August call management said the business is designed to stay “close to” a 25% margin (in May it had promised at least 25% even at a ₹30-lakh average price), but the price per machine has already fallen from ₹40–45 lakh in FY25 to about ₹34–35 lakh as cheap machines grow. **I think the Indian margin holds; the group margin depends on Huron, which is guided at only 8–10%.**",
                },
                {
                    label: 'Capped but rising: Macpower',
                    text: "About 16% for four quarters, and the cap is physical: it can make spindles for only 1,700–1,800 machines and coat about 2,000, against capacity of 2,500, so it pays outside firms for the rest. That outsourcing cut the Q4 FY26 margin about 1.7 points below a year earlier. Management says the margin will rise each quarter and that 25% comes only with the 60-acre plant, not gradually. **I expect 17–18% after the price rise; 20% needs the new site.**",
                },
                {
                    label: 'Cyclical: LMW',
                    text: "The FY26 segment results were 0.5% in textiles, 8.1% in machine tools and foundry, and 13.9% in aerospace. Textiles run at about 60% of capacity, so fixed costs swamp the margin; in FY23, near the last peak, group operating profit was ₹450cr at a 10% margin against ₹170cr at 5% in FY26. Other income, mostly on its cash, was ₹132cr in FY26, about 78% of operating profit. **Recovery here is volume, not price, and it will not be fast if mills add spindles gradually.**",
                },
                {
                    label: 'Mostly temporary, partly not: Mamata',
                    text: "Gross margin fell from 60.8% to 54.6% in FY26 as US sales (about 60% gross margin) were replaced by Indian ones (42–43%). Trade shows cost ₹10.2cr (4.5% of sales), and a ₹3.05cr labour-code charge hit Q4. Q1 FY27 lost ₹4.7cr at the operating level on the Interpack show, higher staff costs and delayed deliveries. **Note the base**: Q4 FY25's 33% margin was a seasonal high in a year when Q4 was 44% of sales, so the fall looks worse quarter by quarter than it is. The part that is not temporary is the mix, if the US does not return.",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Jyoti** held ₹1,166cr of stock at March 2026 (₹900cr a year earlier), about 453 days, and ₹599cr of receivables; its cash cycle is 359 days. Operating cash was −₹48cr in FY24, −₹105cr in FY25 and ₹54cr in FY26 against ₹1,319cr of operating profit over the three years, and free cash flow was −₹269cr in FY26. Management says it built stock for the new plant and promises operating cash near 50% of operating profit in FY27. **That promise is the single most important number in this note.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Macpower**'s cash cycle lengthened from 105 days in FY22 to 182 in FY26 as stock went from 184 days (FY23) to 259, largely because it holds a year of imported parts; FY26 free cash flow was ₹3cr on ₹34cr of profit. **Mamata**'s working-capital days rose from 25 in FY24 to 93 in FY26 and operating cash collapsed to ₹2cr on ₹15cr of profit, with about ₹3.5cr of finished machines for Saudi Arabia held back by the West Asia conflict.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "**LMW**'s cycle is about 23 days because spinning mills pay deposits, and it turned 83% of five years' operating profit into cash, with ₹120cr of free cash flow in FY26. Its problem is the opposite of Jyoti's: plenty of cash and too little profitable use for it.",
                },
                {
                    label: 'Working capital: early signs of improvement',
                    text: "**Macpower** sold about 90% of the 80 finished machines it held at March during Q1, and receivables fell from ₹46cr to ₹33cr. **Jyoti** said June debt was almost unchanged from March and that its new plant will release stock in the second half. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Jyoti CNC Auto.', 'Debt in June “almost the same as March”; FY27 operating cash ~50% of operating profit; capex ₹200–250cr', 'Borrowings ₹853cr, cash ₹53cr (Mar-26); self-imposed limit of debt at 2x operating profit'],
                        ['Macpower CNC', 'Receivables down to ₹33cr from ₹46cr; builds only against advances; Q1 capex ₹2.25cr', 'Borrowings ₹1cr; net cash'],
                        ['LMW', 'No cash figure given; ₹150cr aerospace building from own cash; $30m into a UAE holding company', 'About ₹1,970cr of cash, no debt; CRISIL AA/Stable'],
                        ['Mamata Machinery', 'No Q1 call; presentation says customers asked to push back deliveries', 'Cash about ₹69cr, borrowings ₹8cr (Mar-26)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly. Mamata holds calls half-yearly and had none for Q1 FY27.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on the Q4 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: replacing imports and old machines',
                    text: "Imports grew fastest in FY26 whenever Indian plants were full, and a large base of machines bought in 2000–05 is due for replacement. **Jyoti** guides ₹2,500–3,000cr of new orders in FY27 against FY26 sales of ₹2,093cr, and launched a large double-column machine for railways to replace imports costing ₹3–5cr each. **Macpower**'s order inflow of about ₹145cr in Q1 outran execution of ₹95cr. This is the steadiest driver and should run for years, but it rewards the makers with capacity ready now.",
                },
                {
                    label: 'Growth driver: defence, aerospace and electronics',
                    text: "**Jyoti** has 38% of its order book in aerospace and defence. **LMW**'s aerospace order book rose from about ₹360cr (over 18 months) at Q4 to about ₹1,000cr over three to three and a half years, about ₹900cr of it export, and a ₹150cr building will support more than ₹300cr of yearly revenue. **Macpower** has ₹304cr of defence tenders under evaluation against a defence book of only ₹20cr. Electronics is slower than hoped: Jyoti's ~₹630cr electronics order book has not moved in 18 months.",
                },
                {
                    label: 'Growth driver: capacity landing in FY27–FY28',
                    text: "**Jyoti** adds 10,000 machines a year (to 16,000) for about ₹450cr, commissioning due by end-September (no commissioning filing seen by 30 September; a small fire at a Rajkot coating unit on 26 September did not stop production, the company said) with the foundry in October; at ₹30–35 lakh a machine that is ₹3,000–3,500cr of possible yearly sales. **Macpower** adds 1,000–1,500 machines for about ₹50cr (about ₹37.5cr after a 25% Gujarat subsidy) from Q2 FY28, and waits on a 60-acre plot for a far larger plant. **LMW**'s machine-tool unit can grow 15–20% without new spending. **Capacity is not the constraint for anyone after FY28; demand and price are.**",
                },
                {
                    label: 'Growth driver: the textile and packaging cycles',
                    text: "**LMW**'s textile unit rose from 50–55% utilisation at March to about 60% in June, and its active order book (orders whose customers are ready to take delivery) rose from ₹2,300cr to ₹2,400cr. State textile subsidies and trade deals help, and CRISIL's better outlook for spinners supports orders into FY28. **Mamata**'s domestic packaging sales grew 55% in FY26 and are guided to grow 30–40% in FY27, while tighter recycled-content rules from FY28 could pull demand for its RecTech machines.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Macpower**: Q1 sales +56% against 28–30% guidance, margin held at 16.2%, receivables down, guidance raised to 30%+. **Jyoti India**: standalone sales +37%. **LMW**: sales +24% with machine tools +37% and aerospace +30%, and a much larger aerospace book.",
                },
                {
                    label: 'Cautious',
                    text: "**LMW** gives no numbers and calls the textile recovery gradual. **Macpower**'s own annual report says the 13-acre site will sustain growth of about 20%, below the 30%+ on the call. **Mamata** targets only $2–3m of European sales over three to five years.",
                },
                {
                    label: 'Missed',
                    text: "**Mamata** missed its November 2025 guidance (margin about 14%, packaging machines about ₹64cr; delivered 8.2% and about ₹48–49cr), then followed a June promise of recovery with a Q1 loss. **Jyoti**'s group grew 24% against 25–30% at a 21.4% margin against 25%, and the ₹67cr of Huron revenue it expected to book in Q1 was not booked. **Macpower**'s 60-acre plot has missed three deadlines (March, then three to four months, then a month).",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Jyoti** cut Huron's FY27 guidance to ₹300–325cr at an 8–10% margin, does not disclose Huron's figures each quarter, and saw order intake dip from ₹700cr-plus in Q4 to ₹601cr in Q1. **LMW** gave no payback for the $30m UAE investment and no plan behind its new resolution to enter unrelated businesses.",
                },
                {
                    label: 'My outlook',
                    text: "Machine-tool demand should grow about 10% a year and Indian makers 15–30% as they replace imports. **I expect Macpower to compound earnings at about 22% (a strong FY27, then slower until its bigger plant arrives), Jyoti at about 25% if the new plant fills and Huron stabilises, LMW at about 24% as textile profits recover gradually from a trough and aerospace grows, and Mamata at about 20% from a very low base.** I cut LMW from 30% because management sees a gradual recovery and treasury income, which will not grow fast, is most of today's profit. I raised Mamata from 15% because today's profit (₹9cr over twelve months) is a trough against ₹41cr in FY25, even after two misses. I raised Macpower from 20% on the Q1 beat and higher guidance.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Macpower CNC', 'Job-shop demand; price rise; 13-acre site from Q2 FY28', '14% / **22%** / 30%'],
                        ['Jyoti CNC Auto.', 'Aerospace and defence; 16,000-machine capacity; Huron', '15% / **25%** / 32%'],
                        ['LMW', 'Gradual textile recovery; aerospace; treasury income flat', '8% / **24%** / 35%'],
                        ['Mamata Machinery', 'Deliveries resuming; domestic packaging; US; RecTech', '5% / **20%** / 35%'],
                    ],
                    note: 'My own judgement, not guidance. LMW and Mamata start from depressed profit, so their figures are partly recovery, not a long-run rate. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance (Q1 FY27 call)', 'Capex', 'Track record (Q4 promise vs Q1)'],
                    rows: [
                        ['Macpower CNC', 'Revenue 30%+ (raised from 28–30%); margin to rise each quarter from 16.2%', '~₹50cr 13-acre site (raised from ₹30–35cr), in use from Q2 FY28; 60-acre plot pending', '**Beat**: Q1 +56%, margin held; land deadline missed again'],
                        ['Jyoti CNC Auto.', 'Revenue +25–30%; margin ~25%; 8,000+ machines; orders ₹2,500–3,000cr; Huron ₹300–325cr', '₹200–250cr in FY27; 10,000-machine plant due end-September (no commissioning filing seen by 30 Sep)', '**Mixed**: India +37%, group +24% at 21%; ₹67cr Huron revenue not booked'],
                        ['LMW', 'No numbers; gradual textile recovery; machine tools +15–20% on current capacity', '₹150cr aerospace building over 18–24 months; $30m UAE; FY26 capex ₹72cr, below depreciation', '**On track**: Q1 +24%; aerospace book about ₹1,000cr'],
                        ['Mamata Machinery', 'FY27 revenue ~+15%; margin back to ~20%; domestic packaging +30–40%', 'Asset-light; spending goes on trade shows and sales staff', '**Missed**: FY26 guide missed; Q1 −6% and a loss'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups, and the annual reports add three that the calls did not dwell on: an auditor's warning at Jyoti, related-party purchases at LMW and Mamata, and a promoter pledge. For each, what management addressed and what it left unanswered.",
            ],
            points: [
                {
                    label: 'Huron: a legal and accounting risk, not just a delay',
                    text: "French authorities opened a judicial investigation in April 2026 into suspected export of dual-use machines (machines that could serve military uses) against EU law. Huron's director-general was barred from duties and €3.02m of funds plus two properties were seized. **Jyoti**'s auditor, Choksi & Co., added an emphasis of matter that the French holding company may not be a going concern, while the parent carries ₹341.6cr of investment and ₹160.1cr of loans in it, not written down. On the August call management said it does not expect a resolution “in the very near future” and ruled out an impairment in FY27 (in May it had said the case could take “two, three, or five years”), and the machines awaiting licences grew from ₹67cr to about ₹100cr. **A write-down of up to ₹500cr is the tail risk to watch.**",
                },
                {
                    label: 'Governance and related parties',
                    text: "**Jyoti**'s promoter Anilkumar Virani has 6.7% of the company (about 46% of his own stake) pledged to HDFC Bank for a personal business loan, after releasing 0.84% in September; investors on the Q1 call questioned its finance processes and auditor. **LMW** bought ₹162.8cr from group company Lakshmi Electrical Control Systems in FY26 and sought approval for up to ₹450cr over two years, more than twice that company's own FY25 turnover. **Mamata** buys from and pays several firms owned by directors' relatives, and director pay of about ₹5.4cr was roughly a third of FY26 profit. **Macpower** pays its chairman and a director as consultants rather than employees, and uses a small local auditor.",
                },
                {
                    label: 'Capital allocation and debt',
                    text: "**Jyoti**'s borrowings rose from ₹304cr (FY24) to ₹853cr (FY26), and Q1 interest of ₹24cr was its highest since listing; its limit is debt at twice operating profit. **LMW** widened its objects clause in September to allow businesses such as EVs, pharma and specialty chemicals with no stated plan, while its Dubai subsidiary lost ₹32cr in FY26 and China lost ₹7cr in Q1 alone. **A cash-rich company drifting into unrelated businesses is as much a risk as a debt-funded one.**",
                },
                {
                    label: 'Capacity everywhere, and price',
                    text: "**Jyoti** is adding 10,000 machines, a rival 10,000 at Hosur and **Macpower** 1,000–1,500, mostly at the entry level where Chinese machines also compete. Jyoti's average price per machine has already fallen to about ₹34–35 lakh, and an analyst on the Q4 call calculated profit per machine falling from about ₹13 lakh to ₹10.85 lakh. If import substitution does not absorb the new capacity, FY28–FY29 margins fall first at the entry level.",
                },
                {
                    label: 'Export controls and imported parts',
                    text: "Controllers are about 99% imported, 5-axis machines need end-user certificates, and **Macpower** sells only one or two a year because of the paperwork. About half of **LMW**'s machine-tool materials are imported, so a weak rupee raises costs. India's machine-tool exports go 34% to Russia, a sanctions exposure, and EU licences now take far longer, as Huron shows.",
                },
                {
                    label: 'Cycles and trade',
                    text: "**LMW** describes an eight-year textile cycle and its textile unit is still near breakeven. **Mamata**'s US, Canadian and Mexican sales fell from about ₹95cr to ₹63cr in FY26, and a polymer price spike after the West Asia conflict made converters delay deliveries; ICRA names West Asia as the main downside for capital goods. Contingent liabilities are small everywhere (Jyoti's disputed taxes about ₹25cr; Macpower's guarantees ₹11.6cr), and LMW's, Macpower's and Mamata's auditors gave clean opinions; Macpower's emphasis of matter concerns only expired office leases.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or depressed profits are the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **25% at 54x, 30% at 79x, 32% at 92x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Every price here asks for more than I expect**; the question is how much more.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**LMW** holds ~₹1,970cr of cash against a market value of {mcap:LMW|₹18,115cr}, and its operating profit excludes ₹132cr of other income, so EV/EBITDA and P/E tell different stories; both are inflated by a trough in textile profit. **Jyoti** carries net debt of about 1.4 times operating profit that the P/E ignores. **Macpower** and **Mamata** hold small net cash, so the two yardsticks roughly agree.",
                },
                {
                    label: 'Full',
                    text: "**Macpower** needs about {need:Macpower CNC|25}% a year against my ~22%, a gap that a margin above 18% in FY28 could close. **Jyoti** needs about {need:Jyoti CNC Auto.|30}% against my ~25%; the gap is modest, but the Huron and cash risks mean I would not pay it until the second-half cash flow arrives.",
                },
                {
                    label: 'Stretched',
                    text: "**LMW** needs about {need:LMW|33}% a year against my ~24%, and **Mamata** about {need:Mamata Machinery|32}% against my ~20%. Both are good assets priced for a recovery that has not yet shown up in the numbers.",
                },
                {
                    label: 'Trough profits: why the gap is not the whole story',
                    text: "**LMW** earned ₹384cr in FY23 against ₹175cr over the last twelve months; **Mamata** earned ₹41cr in FY25 against ₹9cr. A full return to those profits would make both prices look far more ordinary. I do not assume it within three to five years because LMW's management expects a gradual recovery, treasury income cannot grow fast, and Mamata has missed guidance twice. **That is why both stay Stretched rather than Full.**",
                },
                {
                    label: 'What would move a label',
                    text: "Macpower holding margins above 18% into FY28, which would lift my estimate to about 25%. Jyoti's operating cash reaching half of operating profit with no Huron write-down. LMW's textile utilisation above 75% with orders rising sharply. Mamata's H1 FY27 showing the ₹80cr of deliveries and a margin above 15%.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Macpower CNC', rank: 1, stance: 'SCALEUP', segment: TOOLS,
            what: "Rajkot maker of entry and mid-range CNC turning and machining centres, averaging about ₹20 lakh each, sold mainly to small job shops, with a premium NEXA range and a small defence book.",
            view: "**The best execution in the group, at a {label:Macpower CNC|full} price.** Q1 FY27 sales rose 56% and profit 110% off a weak base, the order book is ₹456cr (+32%), a 4–6% price rise stuck, and it has almost no debt. But the plant is near full until the 13-acre site opens around Q2 FY28, the margin is stuck near 16% by outsourced parts, and 259 days of stock left only ₹3cr of free cash in FY26. The price needs about {need:Macpower CNC|25}% a year against my ~22%.",
            watch: '13-acre site on schedule for Q2 FY28; margin above 17–18% by Q3 FY27; the 60-acre land actually signed.',
        },
        {
            company: 'Jyoti CNC Auto.', rank: 2, stance: 'PRICED', segment: TOOLS,
            what: "India's largest listed CNC machine-tool maker, from entry-level lathes to 5-axis machines, with its own foundry in Rajkot and Huron, a French maker of large 5-axis machines.",
            view: "**The strongest Indian business here, wrapped in the most risk.** The India business grew 37% in Q1 at a 27% margin, the order book is ₹4,848cr and capacity is due to rise from 6,000 to 16,000 machines from October (no commissioning filing seen by 30 September). But the auditor doubts the French subsidiary is a going concern while about ₹500cr of the parent's money sits in it, a promoter has 6.7% of the company pledged, and borrowings reached ₹853cr as three years of operating cash summed to less than zero. The price needs about {need:Jyoti CNC Auto.|30}% a year against my ~25%.",
            watch: 'Operating cash near half of operating profit in H2 FY27; Huron licences, the French case and any write-down; the new plant filling without price cuts.',
        },
        {
            company: 'LMW', rank: 3, stance: 'CYCLICAL', segment: PROCESS,
            what: "India's leading maker of textile spinning lines, plus CNC machine tools, a foundry and an aerospace-parts unit; part of the Coimbatore Lakshmi group.",
            view: "**A leading franchise at the bottom of its cycle, priced as if the recovery were already here.** Q1 sales rose 24%, the aerospace order book jumped to about ₹1,000cr, and it holds about ₹1,970cr of cash with no debt. But textile machinery earned ₹9.8cr on ₹1,801cr of sales in FY26, treasury income is most of the profit, return on capital is 6%, and management expects a gradual recovery. The price needs about {need:LMW|33}% a year against my ~24%.",
            watch: 'Textile utilisation above 75% with active orders rising; aerospace revenue towards ₹300cr; how the cash, the UAE investment and group-company purchases are used.',
        },
        {
            company: 'Mamata Machinery', rank: 4, stance: 'TURNAROUND', segment: PROCESS,
            what: "Ahmedabad maker of bag and pouch-making, form-fill-seal packaging and blown-film machines, sold in 80+ countries, with patented sealing technology and a recyclable-film process (RecTech).",
            view: "**Real engineering in a broken year.** FY26 revenue fell 8% and the operating margin halved to 10%; Q1 FY27 was a loss as customers delayed deliveries, after two sets of guidance were missed. It holds about ₹69cr of cash, domestic packaging grew 55% and RecTech is certified recyclable in Europe. The price needs about {need:Mamata Machinery|32}% a year against my ~20%, which already assumes a partial recovery.",
            watch: 'H1 FY27 results and the ₹80cr of promised deliveries; US orders; director pay and related-party spending against profit.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Machine tools.** **Macpower CNC: follow.** The best execution here, with raised guidance and a price rise that stuck; buy if margins pass 18%, stock comes down and the new site stays on schedule. **Jyoti CNC: wait.** The best Indian business and the biggest capacity build, but an auditor's going-concern warning on Huron, a promoter pledge and three years without cash come first.",
            "**Textile and packaging machinery.** **LMW: wait.** A leading franchise with ₹1,970cr of cash, but textile profits are near zero, recovery is gradual and the price assumes more; I no longer rate it own. **Mamata: wait.** Real technology and a clean balance sheet, but a turnaround that has to show a delivered half-year first.",
            "**What would change my view.** For the better: Jyoti's cash flow arriving and Huron cleared without a write-down; Macpower's margin above 18% and its 60-acre land signed; LMW's textile orders rising sharply; Mamata delivering its H1 book. For the worse: a Huron impairment or more pledging at Jyoti, new entry-level capacity cutting prices, LMW spending its cash outside machinery, or another half-year of deferrals at Mamata.",
            "**What to watch next quarter.** Jyoti: H1 operating cash and plant start-up. Macpower: Q2 margin and site construction. LMW: textile utilisation and aerospace revenue. Mamata: H1 results after 1 October.",
        ],
        bottomLine:
            "In machinery, own what customers re-buy and check that profit becomes cash. Follow Macpower CNC for its execution; wait on Jyoti CNC Auto. until Huron and its cash are resolved, on LMW for a better price or a sharper textile upturn, and on Mamata Machinery for a half-year of delivered orders.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/JYOTICNC/consolidated/' },
        { label: 'Indian manufacturing on an upward trajectory (IMTMA FY26 production, consumption and imports) — Modern Manufacturing India', url: 'https://www.mmindia.co.in/article/3641/indian-manufacturing-on-an-upward-trajectory' },
        { label: 'India machine tool market size and forecast — Ken Research', url: 'https://www.kenresearch.com/industry-reports/india-machine-tool-market' },
        { label: 'Capital goods outlook FY2027 — ICRA', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6876' },
        { label: 'Higher exports, better realisations to lift cotton-yarn makers’ revenue 9–11% — CRISIL Ratings', url: 'https://www.crisilratings.com/en/home/newsroom/press-releases/2026/07/higher-exports-better-realisations-to-lift-cotton-yarn-makers-revenue-9-11-percent.html' },
        { label: 'TMMA(I) calls for greater technology competitiveness as textile machinery imports surge — Textile Sphere India', url: 'https://textilesphereindia.com/2026/09/22/tmmai-calls-for-greater-technology-competitiveness-as-textile-machinery-imports-surge/' },
        { label: 'Ministry of Defence 2026–27 budget estimates: an analysis — MP-IDSA', url: 'https://idsa.in/publisher/issuebrief/ministry-of-defence-2026-27-budget-estimates-an-analysis' },
        { label: 'Electronics Component Manufacturing Scheme update — IMPRI', url: 'https://www.impriindia.com/insights/policy-update/electronics-component-manufacturing-scheme/' },
        { label: 'Jyoti CNC Automation annual report FY26 (auditor’s report, Note 42) — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=266bf740-2bed-4a6a-8780-8c753e246223.pdf' },
        { label: 'Jyoti CNC Automation Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3ef1e735-8b24-40e1-9a77-dad8e04fd467.pdf' },
        { label: 'Jyoti CNC Automation rating rationale, April 2026 — Infomerics', url: 'https://www.infomerics.com/admin/uploads/PR-Jyoti-CNC-Automation21April26.pdf' },
        { label: 'LMW annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/e099fa0a-ca8f-485e-8721-a19249883779.pdf' },
        { label: 'LMW rating rationale, August 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/LMWLimited_August%2007_%202026_RR_399676.html' },
        { label: 'Macpower CNC Q1 FY27 investor presentation — NSE', url: 'https://nsearchives.nseindia.com/corporate/MACPOWER_29072026172955_InvestorPresentationQ1FY27.pdf' },
        { label: 'Macpower CNC annual report FY26 — NSE', url: 'https://archives.nseindia.com/annual_reports/AR_30460_MACPOWER_2025_2026_A_24085207_20082026174346.pdf' },
        { label: 'Mamata Machinery Q1 FY27 results presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=6b54d88f-68a9-40e1-b795-be0ad738d0ce.pdf' },
        { label: 'Mamata Machinery annual report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/9b93cc43-da82-43a5-bf54-7f54150bcb96.pdf' },
    ],
};
