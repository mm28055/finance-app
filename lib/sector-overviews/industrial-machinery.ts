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
            'LMW': 30,
            'Mamata Machinery': 15,
            'Jyoti CNC Auto.': 25,
            'Macpower CNC': 20,
        },
    },
    standfirst:
        "Four machine builders: two in metal-cutting machine tools, one in textile spinning machinery, one in plastics packaging machines. India still imports roughly 60–65% of the machine tools it uses, so the growth is real. But a machine is only as defensible as the part of it you actually own, and in metal cutting the most valuable part, the control system, is still bought from Japan or Germany. The questions that matter are how much of the machine is theirs, who the customer is, and whether the customer can be sold something again. Every chart uses filed results and five years of history.",
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
                'Mamata Machinery': 'Q1 FY27: US sales halved on tariffs, and trade-show costs and a labour-code provision were charged.',
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
                grades: { own: { grade: 'A', note: 'Designs complete spinning lines' }, base: { grade: 'A', note: '40–44 million spindles installed' }, mix: { grade: 'B', note: 'Aerospace unit exports 90%' }, scale: { grade: 'A', note: 'About two-thirds of India’s market' }, price: { grade: 'B', note: 'Oligopoly with Rieter, Trützschler, Toyota, Saurer' } } },
            { company: 'Mamata Machinery', trend: 'stable', trendNote: 'EU patent on its cross-sealing device; RecTech recyclable-film technology in trials.',
                grades: { own: { grade: 'B', note: 'Patented sealing technology' }, base: { grade: 'B', note: 'Machines in 84 countries' }, mix: { grade: 'B', note: 'Dairy-standard hygiene machines' }, scale: { grade: 'D', note: '₹233cr' }, price: { grade: 'B', note: 'Premium in the US market' } } },
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
                "**LMW is the one I would own, for patience.** Textile spinning machinery is a global oligopoly (Rieter, Trützschler, Toyota, Saurer and LMW) because a spinning line is one integrated process that mills buy once and then feed with spares for twenty years. LMW has about two-thirds of the Indian market and 40–44 million spindles installed, which produce spares and service revenue whatever the cycle does, plus about ₹2,000cr of cash and investments and a growing aerospace-parts business. Its profits are near the bottom of the textile cycle, which is why its multiples look high; the price asks for close to the recovery I expect.",
                "**Jyoti CNC is the best growth franchise and the one with the most to prove: wait.** It is India's largest machine-tool maker, with its own foundry, capacity going from 6,000 to 16,000 machines a year and 38% of its order book in aerospace and defence, where machine tools earn real margins. Against that sit a French export-control investigation at its Huron unit, a change in how it books revenue there, about ₹100cr of finished machines waiting for licences, and five years of profit that have not become cash.",
                "**Macpower is the best-run small company here; Mamata owns technology but is in a bad year.** Macpower builds nothing without an advance and cut receivables while growing fast, but it sells ₹20 lakh machines to small job shops, the most competitive corner of the market: follow it. Mamata has an EU patent and dairy-standard machines, but its US business halved on tariffs and its margin collapsed: wait for America to come back.",
                "**Two things to hold onto before reading the rest.** First, **ask how much of the machine each company owns**: in metal cutting the controller, the most valuable part, is still bought from Fanuc, Siemens or Mitsubishi. Second, **the installed base is the moat**: LMW's spares and Macpower's service network are what customers re-buy.",
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
                "India consumed roughly $3.7bn of machine tools in 2025, growing about 11% a year, and imported ₹21,628cr of them in FY26 (up 16%; China 30%, Japan 21%, Germany 12%). Domestic production grew about 19% to ₹17,387cr. **That gap is the investment case: an Indian maker does not need to beat another Indian company, only to replace an import.**",
            ],
            points: [
                {
                    label: 'What you own when you own a machine-tool maker',
                    text: "A metal-cutting machine is five things: the cast iron structure (20–30% of cost; **Jyoti** casts its own), motion hardware such as spindles and ball screws (25–35%, mostly from Taiwan and Japan; **Macpower** makes some spindles), the **control system** (20–30%, from Fanuc, Siemens or Mitsubishi, the chokepoint almost nobody in India owns), assembly and accuracy, and service. **Jyoti** is developing its own controller under a production incentive scheme, about two years from commercial use.",
                },
                {
                    label: 'Two markets under one name',
                    text: "**Entry and mid-level machines** (₹10–30 lakh), where Macpower, Ace Micromatic, Bharat Fritz Werner and dozens of others compete on price, delivery and service. **High-end machines** (₹1cr-plus, multi-axis) for aerospace, defence and dies, dominated by imports. Jyoti is climbing into the second; Macpower is staying in the first. Everyone is adding capacity.",
                },
                {
                    label: 'Textile and packaging machinery: different moats',
                    text: "**LMW sells a process, not a machine**: mills will not mix suppliers within a line, and the installed base consumes spares every year (26% of its textile revenue). **Mamata** sells bag and pouch-making machines with patented sealing technology and hygiene standards few rivals meet, in 84 countries.",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**LMW** depends on India's textile investment cycle (state subsidy schemes, trade deals) and on its aerospace unit. **Jyoti** depends on defence and aerospace orders, replacement of old Indian machines and resolving the French investigation. **Macpower** depends on small job shops' spending and its new plant. **Mamata** depends on US tariffs and packaging-waste rules. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion'],
                    rows: [
                        ['Machine tools', 'Jyoti, Macpower', '13–27%', '21–29%', '**−1% to 21%**'],
                        ['Textile and packaging lines', 'LMW, Mamata', '−13% to 13%', '6–13%', '**83–94%**'],
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
                    text: "**LMW**'s 40–44 million spindles consume spares and service every year, and mills buy complete lines from one supplier. Only a handful of companies worldwide can supply a full spinning line. This edge lasts through downturns; what it cannot do is create demand for new lines when mills are not investing.",
                },
                {
                    label: 'Lasting if the mix holds: high-end customers',
                    text: "**Jyoti** earns about 27% in its Indian business because aerospace and defence are 37–38% of its sales, and those customers pay for capability. Its own foundry and controller programme would deepen the edge. But owning a French aerospace machine maker under an export-control investigation shows how exposed the high end is.",
                },
                {
                    label: 'Narrow but real: patents and hygiene standards',
                    text: "**Mamata** holds an EU patent on its sealing device (which lets recyclable films seal properly) and is the only Indian maker of dairy-standard hygiene machines. The moat is genuine but small, and its best customers are in the US, where tariffs have hit.",
                },
                {
                    label: 'Barely a moat: entry-level machines',
                    text: "**Macpower**'s service network (10 branches, 8 technology centres) and discipline matter to small job shops, but an entry-level machine can be bought from many makers. Its path to a better margin is making more of its own parts, not pricing power.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "Ace Micromatic, Bharat Fritz Werner and Lokesh in Indian machine tools; DMG Mori, Mazak, Haas and Chinese makers in imports; Rieter, Trützschler, Toyota and Saurer in textile machinery; and packaging-machine makers in Italy, Germany and China.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The four companies earn very different margins, and each difference has a cause you can track.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: Jyoti’s Indian business',
                    text: "About 27% standalone, from aerospace and defence mix, scale, its own foundry and a genuine brand. **This should hold if the mix holds**, but the group margin is about 21% because Huron loses money and guides only 8–10%.",
                },
                {
                    label: 'Capped: Macpower',
                    text: "About 16%, and the gap to 20% is precise: it makes spindles and coating for only part of its output and buys the rest at higher cost, logistics rise with volume, and it is absorbing costs for its next plant. Making 75–80% of its parts in-house (from 40–45%) is the stated path to 20%, and it needs the new plant.",
                },
                {
                    label: 'Cyclical: LMW',
                    text: "At about 60% utilisation with large fixed costs, textile machinery margins are squeezed by volume, not price, and machine tools are below their usual 12–14%. **Margin recovery here depends on the cycle turning and very little else**, which is why its reported multiples mislead in both directions.",
                },
                {
                    label: 'Mostly temporary, partly not: Mamata',
                    text: "Gross margin fell from 60.8% to 54.6% as high-margin US sales were replaced by domestic ones (42–43% gross margin), and one-off trade-show and labour-code costs hit the quarter. Most of that is temporary; the part that is not is the mix, if the US does not come back.",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**Jyoti** tied up ₹1,274cr in working capital over FY22–FY26, mostly stock (₹501cr) and other items, and holds about 450 days of stock; that is why its five-year cash conversion is roughly zero. **Macpower** tied up ₹96cr, mostly stock (₹84cr).",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Macpower**'s cycle has lengthened from 105 to 182 days as stock rose to 259 days (it holds a year of imported parts) and customers take longer, even though it insists on advances. **Jyoti**'s cycle rose again to 359 days in FY26.",
                },
                {
                    label: 'Working capital: improving or built in',
                    text: "**LMW** runs a cycle of about 20–30 days because spinning mills pay advances, and it turned 83% of five years' profit into cash. **Mamata** absorbed almost nothing over five years and turned 94% of profit into cash. **Judge each against its own history, not against the others.**",
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
                    label: 'Growth driver: replacing imports and old machines',
                    text: "India imports most of its machine tools, and a large base of machines bought in 2000–05 is reaching the end of its life. **Jyoti** credits replacement demand for a record month of more than 1,000 machine orders in India. This is steadier than new-factory spending and favours makers with service networks; it should run for years.",
                },
                {
                    label: 'Growth driver: defence, aerospace and electronics',
                    text: "These are where a machine-tool maker can charge for capability. **Jyoti** has MBDA orders and 38% of its book in aerospace and defence; **Macpower** has ₹304cr of defence tenders under evaluation against a ₹20cr defence book today; **LMW**'s aerospace unit exports 90% of its output. The new ₹40,000cr electronic-components scheme could add demand from electronics makers.",
                },
                {
                    label: 'Growth driver: the textile cycle',
                    text: "**LMW**'s new-machine demand depends on Indian mills investing again, helped by state subsidy schemes and trade agreements; when it turns, utilisation could rise from 60% towards 80% and profits would recover much faster than sales. Timing is uncertain.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Macpower** grew 56% in Q1 with price rises of 4–6% and lower receivables. **Jyoti** grew 24% and booked a record month. **LMW** returned to growth (+24% in Q1) from a low base.",
                },
                {
                    label: 'Cautious',
                    text: "**Mamata** said plainly that its RecTech tie-up in Europe is worth perhaps $2–3m a year within three to five years, a modest and honest number.",
                },
                {
                    label: 'Missed',
                    text: "**Mamata**'s revenue has fallen for three quarters and its margin collapsed as US sales halved.",
                },
                {
                    label: 'Mixed or silent',
                    text: "**Jyoti** changed how it books revenue at Huron and has ₹100cr of machines waiting for export licences while a French investigation continues. How much work Jyoti has booked is in the **Order book ÷ yearly sales** chart tab above.",
                },
                {
                    label: 'My outlook',
                    text: "Indian machine-tool demand should grow 10–12% a year, faster for makers replacing imports. **I expect Jyoti to compound at about 25% if Huron is resolved, Macpower at 20%, LMW's earnings to recover by 30% a year from a low base, and Mamata to grow slowly until US tariffs ease.**",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['LMW', 'Textile recovery from a trough; aerospace', '10% / **30%** / 40%'],
                        ['Jyoti CNC Auto.', 'Aerospace and defence mix; capacity; Huron', '15% / **25%** / 32%'],
                        ['Macpower CNC', 'Job-shop demand; new plant; backward integration', '12% / **20%** / 26%'],
                        ['Mamata Machinery', 'US recovery; RecTech; domestic packaging', '5% / **15%** / 25%'],
                    ],
                    note: 'My own judgement, not guidance. LMW’s high figure is recovery from depressed profit, not a long-run growth rate. The growth each price needs is in the live valuation table in section 8.',
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
                    label: 'Export controls and foreign parts',
                    text: "**Jyoti**'s Huron unit is under a French export-control investigation, with about ₹100cr of machines waiting for licences; management explained the process but not the likely outcome. **Macpower** cannot easily buy Fanuc or Mitsubishi controllers for five-axis machines and sells only one or two a year. Tighter controls would make high-end technology harder to buy at any price.",
                },
                {
                    label: 'Cycles',
                    text: "**LMW** depends on textile investment, which is weak; **Macpower** on small job shops, which pause quickly in a slowdown. Chinese machines resuming their price pressure would hurt the entry-level makers first.",
                },
                {
                    label: 'Capacity everywhere',
                    text: "A competitor has built a 10,000-machine plant at Hosur, **Jyoti** is going to 16,000 and **Macpower** to a new site by FY28. Import substitution has to be fast enough to absorb it all.",
                },
                {
                    label: 'Tariffs',
                    text: "**Mamata**'s highest-margin market, the US, halved on tariffs; a settlement would restore it, and a prolonged dispute would leave its margin structurally lower.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet or depressed profits are the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **25% at 54x, 30% at 79x, 32% at 92x and 33% at 100x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**LMW** holds about ₹2,000cr of cash and investments and earns large other income, so both its multiples are inflated by a trough in operating profit. **Jyoti** carries net debt the P/E ignores.",
                },
                {
                    label: 'Full',
                    text: "**LMW** (priced for the recovery I expect), **Jyoti** and **Macpower** (both a few points ahead of my estimates).",
                },
                {
                    label: 'Stretched',
                    text: "**Mamata**: a price that needs about twice the growth I expect until the US recovers.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'LMW', rank: 1, stance: 'CYCLICAL', segment: PROCESS,
            what: "India's leading maker of textile spinning machinery, plus machine tools, a foundry and an aerospace-parts business; part of the Lakshmi group.",
            view: "**The strongest franchise here, at the bottom of its cycle.** About two-thirds of India's spinning-machinery market, 40–44 million spindles producing spares, about ₹2,000cr of cash and investments, and an aerospace unit with an order book near ₹1,000cr. Profits are depressed at 60% utilisation. The price roughly matches the recovery I expect (~30% a year from a low base).",
            watch: 'Textile orders and utilisation; the aerospace unit’s growth; margins in machine tools.',
        },
        {
            company: 'Jyoti CNC Auto.', rank: 2, stance: 'PRICED', segment: TOOLS,
            what: "India's largest machine-tool maker: CNC turning, milling and multi-axis machines, with its own foundry and Huron, a French maker of five-axis machines.",
            view: "**The best growth franchise, with the most to prove.** Aerospace and defence are 38% of a ₹4,848cr order book, capacity is going from 6,000 to 16,000 machines and its own controller is in development. But Huron is under a French export-control investigation, ₹100cr of machines wait for licences, and five years of profit have not become cash. The price needs more than my ~25% estimate.",
            watch: 'The Huron investigation; operating cash; the controller programme.',
        },
        {
            company: 'Macpower CNC', rank: 3, stance: 'PRICED', segment: TOOLS,
            what: "Rajkot maker of entry and mid-level CNC turning centres and machining centres for small job shops, with a growing defence business.",
            view: "**Well run and structurally limited.** It builds nothing without an advance, grew 56% in Q1 and is debt-free, but it sells entry-level machines where competition is fiercest, and its margin depends on making more of its own parts in a new plant. The price needs more than my ~20% estimate.",
            watch: 'The new plant; spindle in-sourcing; defence tenders.',
        },
        {
            company: 'Mamata Machinery', rank: 4, stance: 'CYCLICAL', segment: PROCESS,
            what: "Ahmedabad maker of plastic bag, pouch and packaging machines sold in 84 countries, with patented sealing technology and a recyclable-film process (RecTech).",
            view: "**Real technology waiting for its customer.** An EU patent, dairy-standard machines and top-five global recognition in bag and pouch converting, but US sales halved on tariffs and the margin collapsed. The price needs about twice my ~15% estimate.",
            watch: 'US tariffs; RecTech trials; margins without one-offs.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Textile and packaging machinery.** **LMW: own.** The franchise and the patience trade: an installed base that feeds spares through a downturn, a cash pile and an aerospace arm, at a price that assumes only the recovery. **Mamata: wait.** Patents and standards worth something; wait for US tariffs to ease.",
            "**Machine tools.** **Jyoti CNC: wait.** The right strategy and the best growth, but the Huron investigation and five years without cash need resolving first. **Macpower: follow.** Disciplined and well run in the hardest segment; buy if the new plant lifts its margin toward 20%.",
            "**What would change my view.** Jyoti's controller working or the French investigation closing cleanly; a textile revival lifting LMW's utilisation toward 80%; Macpower's new plant opening on time; a US tariff settlement for Mamata. For the worse: Chinese price pressure returning, a pause in job-shop spending, or tighter export controls.",
            "**What to watch next quarter.** LMW's textile orders; Jyoti's Huron shipments and cash; Macpower's margin; Mamata's US sales.",
        ],
        bottomLine:
            "In machinery, own what customers re-buy: spares, service and the parts you make yourself. Own LMW for its installed base and patience, wait on Jyoti CNC Auto. until Huron and its cash are resolved, follow Macpower CNC, and wait for Mamata Machinery's US business to return.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/JYOTICNC/consolidated/' },
        { label: 'India machine tool market size, players and growth — Ken Research', url: 'https://www.kenresearch.com/industry-reports/india-machine-tool-market' },
        { label: 'Indian machine tool industry production and imports FY26 — IPF Online', url: 'https://www.ipfonline.com/news/detail/machinetoolsaccessories/indian-machine-tool-industry-expected-to-grow-10-in-fy26-jibak-dasgupta/18075' },
        { label: 'Machine tools market in India: key companies and outlook — Technavio', url: 'https://www.technavio.com/report/machine-tools-market-in-india-industry-analysis' },
    ],
};
