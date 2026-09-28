import { SectorOverview } from './types';
import { utilitiesBusinesses } from './utilities-businesses';
import { utilitiesValuationInputs } from './card-data/utilities';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const WATERTECH = 'Water technology — design, equipment and chemicals';
const CIVIC = 'Civic contractors and operators — state and city clients';

export const utilities: SectorOverview = {
    sector: 'Utilities',
    title: 'Utilities',
    format: 'ranked',
    businesses: utilitiesBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '23 Sep 2026',
        inputs: utilitiesValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Va Tech Wabag': 15,
            'ION Exchage': 15,
            'Enviro Infra Engine.': 15,
            'EMS Limited': 5,
            'Antony Waste Hand': 10,
        },
    },
    standfirst:
        "Five companies that clean water and collect waste, mostly for governments. **Wabag** and **Ion Exchange** design water-treatment plants and sell the technology, equipment and chemicals behind them; **Enviro Infra** and **EMS** build sewage and water plants for state governments; **Antony Waste** collects and processes city rubbish under long municipal contracts. Government money is back: in March the rural drinking-water mission's total outlay was more than doubled to ₹8.69 lakh crore. But in FY26 that mission spent only about ₹17,000cr of a ₹67,000cr budget, state payments are still slow, and margins fell at all five companies in Q1 FY27. What separates them is who pays them and whether their profit turns into cash. The charts use filed results; the text draws on the latest calls, presentations, annual reports and credit-rating reports.",
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
            note: 'Ion Exchange’s margin collapsed to 2–5% on loss-making old contracts; Antony’s fell to 14% on labour-code costs and one-off charges; a landslide in July has since shut its Pune waste-to-energy plant until October.',
            values: {
                'Va Tech Wabag': [13, 11, 13, 11, 9],
                'ION Exchage': [11, 9, 8, 2, 5],
                'Enviro Infra Engine.': [27, 29, 27, 19, 21],
                'EMS Limited': [23, 21, 16, 15, 17],
                'Antony Waste Hand': [22, 20, 16, 20, 14],
            },
            cellNotes: {
                'Va Tech Wabag': 'The company reports 13.1% for Q1 FY27, but that includes a ₹37cr foreign-exchange gain (a ₹14cr loss a year earlier). Without it the margin was about 9%, which is the filed figure shown.',
                'ION Exchage': 'Q1 FY27 profit after tax was only ₹3cr: the specialty-chemicals profit fell 52% and the projects arm lost ₹17cr.',
                'Enviro Infra Engine.': 'Management now guides 19–20% blended (21–22% for water alone), down from 21–22% blended in May, as lower-margin renewables and battery-storage work grows.',
                'EMS Limited': 'The company quoted a 25.5% margin for Q1 FY27, but that is the standalone business only; the consolidated filed figure is 17%.',
                'Antony Waste Hand': 'The company reports 16.8% for Q1 FY27 on its own revenue definition; the filed figure is 14%. About ₹10cr of one-off job-closure costs and higher labour costs under the new labour codes caused the drop.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'EMS’s revenue fell for four quarters as work stalled in West Bengal and Uttarakhand and state payments slowed.',
            values: {
                'Va Tech Wabag': [17, 19, 18, 22, 21],
                'ION Exchage': [3, 14, 6, 3, 20],
                'Enviro Infra Engine.': [18, 7, 1, 9, 49],
                'EMS Limited': [16, -26, -18, -56, -34],
                'Antony Waste Hand': [9, 16, 8, 18, 6],
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
            note: 'Wabag is the only one whose return has risen; the others have fallen as working capital grew or old contracts lost money.',
            values: {
                'Va Tech Wabag': [13, 20, 20, 20, 21],
                'ION Exchage': [36, 34, 27, 22, 14],
                'Enviro Infra Engine.': [64, 59, 47, 32, 20],
                'EMS Limited': [33, 33, 29, 27, 13],
                'Antony Waste Hand': [20, 15, 14, 12, 11],
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
            note: 'Read with care for contractors: this formula leaves out unbilled work, which is large at Enviro Infra (about 195 days by the company’s account at Q4). Wabag reports 108 days of net working capital.',
            values: {
                'Va Tech Wabag': [162, 186, 254, 223, 234],
                'ION Exchage': [-14, 31, 31, 46, 44],
                'Enviro Infra Engine.': [-46, -117, -62, -13, -88],
                'EMS Limited': [160, 84, 112, 160, 333],
                'Antony Waste Hand': [100, 92, 106, 104, 112],
            },
            cellNotes: {
                'EMS Limited': 'On the Q1 FY27 call management described a cycle of about 120 days; the filed accounts give 333 days for FY26 (debtor days 193, inventory and work-in-progress days 163).',
                'Enviro Infra Engine.': 'The negative figures leave out unbilled work. By the company’s own count its FY26 net cycle was 166 days, driven by 195 days of work done but not yet billed, against a target of about 90.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'The core problem in this sector. Only Antony (77%) converts profit to cash as a healthy business should; Enviro Infra and EMS have had negative operating cash over five years.',
            values: {
                'Va Tech Wabag': [5, 27, 37, 84, 43, 44],
                'ION Exchage': [42, 24, 47, 11, -13, 23],
                'Enviro Infra Engine.': [84, 123, -61, -22, -23, -10],
                'EMS Limited': [20, 3, -57, 14, -10, -8],
                'Antony Waste Hand': [71, 61, 81, 96, 69, 77],
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'Wabag is the only company here with positive free cash every year; it spends almost nothing on plant.',
            values: {
                'Va Tech Wabag': [0.2, 2.7, 4.3, 10.6, 5.1, 4.7],
                'ION Exchage': [2.6, 0.2, 0.4, -10.5, -9.7, -4.5],
                'Enviro Infra Engine.': [17.0, 26.6, -18.5, -9.9, -21.4, -10.2],
                'EMS Limited': [2.5, -0.9, -18.8, 3.1, -12.0, -6.0],
                'Antony Waste Hand': [-0.6, -20.8, -1.5, -1.3, 7.9, -2.8],
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
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash, ÷ operating profit. Treasury investments are counted as cash for Wabag and Enviro Infra.',
            note: 'Below zero means more cash than debt. Wabag has held net cash for 14 quarters (its own count); Antony carries debt for its trucks and plants.',
            values: {
                'Va Tech Wabag': [-0.1, -0.3, -0.8, -1.5, -1.9],
                'ION Exchage': [-2.2, -1.9, -1.6, -0.5, 0.8],
                'Enviro Infra Engine.': [-0.2, -0.3, 0.5, -1.2, 0.1],
                'EMS Limited': [-0.8, -0.5, -0.2, -0.3, 0.7],
                'Antony Waste Hand': [0.6, 1.9, 2.1, 1.9, 1.6],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Antony is the capital-heavy one (trucks and processing plants). Ion Exchange is building resin capacity; Wabag owns almost nothing.',
            values: {
                'Va Tech Wabag': [0.2, 0.2, 0.4, 0.1, 0.1, 0.2],
                'ION Exchage': [3.2, 3.0, 5.1, 11.7, 8.7, 7.0],
                'Enviro Infra Engine.': [1.8, 3.3, 4.5, 4.4, 15.9, 7.9],
                'EMS Limited': [3.9, 1.7, 4.2, 0.6, 10.0, 4.0],
                'Antony Waste Hand': [16.8, 31.4, 17.7, 21.4, 5.7, 18.1],
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
            note: 'Wabag’s very high figure reflects its asset-light model: it designs and manages, and subcontracts construction.',
            values: {
                'Va Tech Wabag': [37.2, 39.5, 39.7, 49.2, 59.8],
                'ION Exchage': [8.2, 9.3, 6.4, 7.0, 3.9],
                'Enviro Infra Engine.': [22.4, 18.8, 15.5, 15.2, 4.5],
                'EMS Limited': [7.1, 10.0, 8.4, 10.1, 5.9],
                'Antony Waste Hand': [2.7, 2.8, 1.3, 1.3, 1.4],
            },
        },
        {
            key: 'orderCover',
            more: true,
            label: 'Order book ÷ yearly sales',
            unit: 'x',
            periods: ['Latest'],
            scale: 'sequential',
            source: 'Order book at the end of Q1 FY27 (company) ÷ sales over the last four quarters (Screener).',
            note: 'Large for all the contractors. Antony works under long concessions rather than a conventional order book.',
            values: {
                'Va Tech Wabag': [4.7],
                'ION Exchage': [0.8],
                'Enviro Infra Engine.': [5.3],
                'EMS Limited': [3.6],
                'Antony Waste Hand': [null],
            },
            cellNotes: {
                'Va Tech Wabag': '₹19,400cr, a record, after removing ₹600cr of inactive framework orders; about a third is long-term operation and maintenance.',
                'ION Exchage': '₹2,473cr across its engineering businesses.',
                'Enviro Infra Engine.': '₹6,721cr, including renewables and operation and maintenance.',
                'EMS Limited': '₹2,329cr.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'tech', label: 'Technology and references', description: 'Proven designs and completed plants that clients require before awarding work.' },
            { key: 'annuity', label: 'Recurring income', description: 'Operation and maintenance, chemicals, or long concessions.' },
            { key: 'client', label: 'Client quality', description: 'Whether clients are funded and pay on time.' },
            { key: 'book', label: 'Order book', description: 'Years of work already won.' },
            { key: 'cash', label: 'Balance sheet and cash', description: 'Debt and whether profit becomes cash.' },
        ],
        rows: [
            { company: 'Va Tech Wabag', trend: 'widening', trendNote: 'Entered Kuwait and the UAE; record ₹19,400cr order book; net cash.',
                grades: { tech: { grade: 'A', note: 'Large desalination and wastewater references worldwide' }, annuity: { grade: 'B', note: 'Operation and maintenance about a third of the book' }, client: { grade: 'A', note: 'Many projects backed by multilateral lenders' }, book: { grade: 'A', note: 'About 4.7 years of sales' }, cash: { grade: 'B', note: 'Net cash, but only 44% of profit arrives as cash' } } },
            { company: 'ION Exchage', trend: 'narrowing', trendNote: 'Old contracts losing money; resin plant costs ahead of sales; no guidance.',
                grades: { tech: { grade: 'A', note: 'Resins, membranes and five decades of know-how' }, annuity: { grade: 'A', note: 'Chemicals, service and consumer products' }, client: { grade: 'B', note: 'Industry plus some state projects' }, book: { grade: 'C', note: 'About 0.8 years of sales' }, cash: { grade: 'C', note: 'Free cash negative for two years' } } },
            { company: 'Enviro Infra Engine.', trend: 'stable', trendNote: 'Kept its ₹2,000cr revenue target but cut its margin guide; working capital still bloated.',
                grades: { tech: { grade: 'B', note: 'Sewage-treatment references across states' }, annuity: { grade: 'B', note: 'Operation and maintenance and hybrid annuity projects' }, client: { grade: 'C', note: 'State and municipal bodies' }, book: { grade: 'A', note: 'About 5.3 years of sales' }, cash: { grade: 'D', note: 'Negative operating cash for three years' } } },
            { company: 'EMS Limited', trend: 'narrowing', trendNote: 'Revenue guidance cut to ₹900–950cr; work stalled in two states.',
                grades: { tech: { grade: 'C', note: 'Standard sewer and water works' }, annuity: { grade: 'C', note: 'Some operation and maintenance' }, client: { grade: 'D', note: 'State bodies in UP, Uttarakhand, West Bengal' }, book: { grade: 'B', note: 'About 3.6 years of sales' }, cash: { grade: 'D', note: 'Negative operating cash over five years' } } },
            { company: 'Antony Waste Hand', trend: 'stable', trendNote: 'Pune waste-to-energy plant shut by a landslide until October; construction-waste plant at full capacity.',
                grades: { tech: { grade: 'B', note: 'Qualifies for large city tenders' }, annuity: { grade: 'A', note: 'Long municipal concessions' }, client: { grade: 'B', note: 'Large cities such as Mumbai, Pune, Noida' }, book: { grade: 'B', note: 'Multi-year concessions' }, cash: { grade: 'B', note: '77% cash conversion; debt for trucks and plants' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**No utility is a buy at today's price; Va Tech Wabag comes closest, so follow it.** It designs, builds and runs desalination and wastewater plants in India, the Middle East and Africa, subcontracts the civil work, and refuses jobs paid for by state governments or cities. That shows in ₹965cr of net cash by its own count (14 quarters running), a record ₹19,394cr order book (about 4.7 years of sales) and an AA- rating. Q1 FY27 revenue grew 21%, the top of its 15–20% guide, and it won its first plants in Kuwait and the UAE. The caveat: its reported 13% margin includes a ₹37cr currency gain, without which it was about 9%, and receivables, bad-debt provisions and disputed tax claims (₹228cr, from ₹101cr) are rising faster than sales. The price asks for a little more growth than I now expect, so I would buy only on weakness or once the margin recovers.",
                "**Follow Antony Waste, though it has just had the worst quarter here.** It collects and processes city rubbish under 7–25 year contracts with yearly escalation, and in FY26 turned 69% of operating profit into cash, with ₹83cr of free cash, the best record in the group. Q1 FY27 profit after tax fell to ₹0.7cr from ₹23cr on new labour-code costs and a ₹10cr job closure. In July a mound of old waste collapsed at its Pune waste-to-energy site and nine people died; the plant is shut until October and a ₹22–24cr write-down is due. The price asks for a little more growth than I expect.",
                "**Wait on Enviro Infra and Ion Exchange.** **Enviro Infra** has a ₹6,721cr order book and the price with the most room against my estimate, but three years of negative operating cash, 195 days of unbilled work, an ₹11cr cyber fraud, and an FY27 profit guide trimmed to ₹260–270cr within one quarter. **Ion Exchange** has some of the best resin know-how anywhere, but Q1 profit was ₹3cr as its chemicals profit halved with the new Roha plant and its projects arm lost ₹17cr; its price needs far more growth than it delivers.",
                "**Avoid EMS.** Revenue fell 25% in FY26 and another 34% in Q1 FY27, and guidance has been cut to ₹900–950cr. On the filed accounts its cash cycle stretched to about 333 days, against the 120 days management described on the call. Governance signals are poor: the promoters still had 14.5% of the company's shares pledged in August despite promising to clear them, and advances to a paper-making subsidiary bought out of insolvency nearly tripled to ₹88.6cr.",
                "**Two things to hold onto before reading the rest.** First, **the money is back but the cash is not**: the rural-water mission's outlay was more than doubled in March, yet it spent only about ₹17,000cr in FY26, and no company here reported faster state payments in August. Second, **who pays decides everything**: Wabag's funded clients pay; state water departments often do not, which is why the state contractors show 17–21% margins and negative operating cash.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with four more behind **More measures**, including order book ÷ yearly sales. Every figure comes from filed consolidated results; order books are from the companies. Hover over a starred name for its caveat.",
                "**Why these figures differ from the rest of the dashboard.** The dashboard's own quarterly records are wrong for several companies here: Wabag and EMS show half-year totals as Q2 FY26, and some Q3 and Q4 FY26 quarters show zero. The charts use the filings. Starred cells explain where a company's own margin differs from the filed one.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "Water and waste are public services, so the customer is usually a government, and that decides how contracts are won and when cash arrives. Sources: PRS Legislative Research on the 2026-27 budgets, ICRA and CRISIL Ratings outlooks, MEED on the Gulf, and company filings.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "**Technology and design** (Wabag, Ion Exchange) → **construction** of plants and pipe networks (Enviro Infra, EMS, Wabag's subcontractors) → **operation and maintenance** for 5–20 years → **chemicals and parts** (Ion Exchange's resins and membranes). Waste runs from **collection** to **processing** into power, fuel or building material (Antony). **The profit that becomes cash sits in technology sold to well-funded clients and in long operating contracts.** State construction shows 20–28% margins on paper against about 12% for Wabag, but much of it sits in unbilled work and receivables. Wabag alone earned 42% of the group's ₹884cr FY26 profit.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "The largest pot is rural drinking water under the **Jal Jeevan Mission (JJM)**, which has taken tap connections from 3.24 crore households in 2019 to 15.82 crore. In March JJM 2.0 raised the outlay from ₹3.60 lakh crore to ₹8.69 lakh crore, to December 2028; ICRA sizes the follow-on operating work at about ₹3 lakh crore over a decade, at lower margins. Urban sewage comes through AMRUT 2.0 (₹8,000cr in FY27), Namami Gange (₹3,100cr; only 3,806 of a 7,000 MLD target built by December 2025) and JICA, ADB and World Bank loans. Desalination is being built in Chennai, Tuticorin, Gujarat and the Gulf, though MEED reports no major Saudi desalination award this year. The urban Swachh Bharat mission has ₹6,700cr approved to clear 214 large dumpsites.",
                },
                {
                    label: 'The cycle is state payments',
                    text: "**Demand is not the constraint; payment is.** States must release their share of JJM money before contractors are paid, and a new just-in-time treasury system (SNA-SPARSH) added months of delay in FY26. JJM spent about ₹17,000cr against a ₹67,000cr budget, ICRA found receivables beyond six months in many states, and The Core puts unpaid contractor dues at ₹30,000–35,000cr. ICRA expected cycles below 60 days by September, yet on their August calls Enviro Infra, EMS and Ion Exchange all described stretched receivables. For FY27 **ICRA** expects construction revenue to grow 6–8%, and **CRISIL Ratings** expects large contractors to grow 9–10% on slightly thinner margins. **The money has been voted; whether it reaches contractors is the whole question, and Q2 cash flows are the first test.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Wabag** depends on funded awards and on its margin recovering as Perur finishes; **Ion Exchange** on filling Roha and finishing old projects; **Enviro Infra** on states releasing AMRUT money and a heavy second half; **EMS** on West Bengal and Uttarakhand restarting and Uttar Pradesh paying; **Antony** on its Pune plant, labour-cost escalation and the Kanjurmarg ruling. **Buy each for what it actually depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, FY26 (filed figures)',
                    columns: ['Position', 'Who', 'Sales', 'Operating margin', 'Profit after tax (share of group)', 'Five-year cash conversion'],
                    rows: [
                        ['Water technology, well-funded clients', 'Wabag', '₹3,944cr', '12%', '₹370cr (42%)', '**44%**'],
                        ['Water technology and chemicals', 'Ion Exchange', '₹2,915cr', '7%', '₹143cr (16%)', '**23%**'],
                        ['State water contractors', 'Enviro Infra, EMS', '₹1,877cr', '20–24%', '₹279cr (31%)', '**−10% and −8%**'],
                        ['City waste operator', 'Antony', '₹1,053cr', '20%', '₹92cr (10%)', '**77%**'],
                    ],
                    note: 'Group total: ₹9,789cr of sales, ₹1,318cr of operating profit (13%) and ₹884cr of profit after tax. Cash conversion is operating cash ÷ operating profit over FY22–FY26.',
                },
                {
                    caption: 'The sector in numbers',
                    columns: ['Item', 'Figure', 'What it means', 'Source'],
                    rows: [
                        ['Jal Jeevan Mission 2.0', 'Outlay ₹8.69 lakh cr to Dec 2028 (was ₹3.60 lakh cr)', 'Rural water money more than doubled', 'ICRA (Mar 2026); PRS'],
                        ['JJM budget against spending', '₹67,670cr budgeted for FY27; about ₹17,000cr spent in FY26', '**Money voted is not money paid**', 'PRS'],
                        ['Urban water and sewage, FY27 budget', 'AMRUT ₹8,000cr; Namami Gange ₹3,100cr; Urban Challenge Fund ₹10,000cr', 'Steady urban tendering', 'PRS; Down To Earth'],
                        ['Urban Swachh Bharat', '₹2,500cr for FY27; ₹6,700cr approved for 214 dumpsites', 'Waste clean-up funded; the mission ends Oct 2026', 'PRS; PIB'],
                        ['Contractors\' unpaid dues', '₹30,000–35,000cr; receivables beyond six months in many states', '**The central problem**', 'The Core (Aug 2026); ICRA'],
                        ['Construction outlook, FY27', 'Revenue +6–8%; order inflows about +10%', 'Slow, with risks to the downside', 'ICRA (Jun 2026)'],
                        ['Large contractors, FY27', 'Revenue +9–10%; margin 8.2–8.4%, down 0.5–0.7 points', 'Growth, but thinner margins', 'CRISIL Ratings (Sep 2026)'],
                        ['Saudi water awards', '$3.94bn in 2026 so far, against $10.7bn in 2025 and $15.3bn in 2023', 'Gulf orders past a peak', 'MEED (Sep 2026)'],
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
                    label: 'Lasting: technology and references',
                    text: "Large desalination and industrial plants go only to firms that have built similar ones. **Wabag** has 400 MLD at Perur and 300 MLD at Yanbu, cites a 2024 industry survey ranking it among the world's top three private desalination suppliers, and says it was the only bidder able to build Aramco's Ras Tanura plant. Engineering in India, Turkey and Egypt lets it undercut European rivals. **Ion Exchange** is one of very few firms making resins, membranes and water chemicals under one roof, and its US certification for Roha resins and FDA-approved pharma-resin plant took years to earn. **This is the one advantage here a lower bidder cannot copy quickly.**",
                },
                {
                    label: 'Lasting: choosing who pays',
                    text: "**Wabag** bids only for jobs funded by multilateral lenders, national governments or the centre; its CMD says state and city money is a big risk. The payoff is net cash and an AA- rating, while the state contractors with higher reported margins have negative operating cash. Enviro Infra's MD said that on three or four projects 70% complete, the money received was hardly 10–15%. **Client quality is a moat in this sector, which is why the grid grades it separately.**",
                },
                {
                    label: 'Lasting: long contracts and switching costs',
                    text: "**Antony**'s 19 collection contracts have 7.7 years left on average and its processing contracts run about 23 years, with escalation covering about 80% of costs. It is the largest listed city-waste company, and management says there is no practical alternative to its Kanjurmarg landfill, built for about 7,500 tonnes a day. **Wabag**'s order book is 34% operation and maintenance; **Ion Exchange** has 200,000-plus installations that keep reordering its resins. **Switching is costly for the client, which is why these revenues recur.**",
                },
                {
                    label: 'Pricing power: partial and delayed',
                    text: "No one here sets prices. Price-variation clauses cover about 70% of costs on Wabag's Indian jobs and usually nothing on international ones, so it has sent force-majeure letters to share war-related rises. Antony's escalation is yearly, so the Q1 labour jump will take about three quarters to recover. **Ion Exchange** raised chemical prices after the West Asia shock, yet its chemicals profit still fell 52%. **Cost shocks land in the margin first, everywhere.**",
                },
                {
                    label: 'Wearing: state construction work',
                    text: "**Enviro Infra** and **EMS** win most work in lowest-price tenders; Enviro Infra wins about one bid in five, and EMS says competition is rising and margins will stay below FY24 levels. Pre-qualification, such as Enviro Infra's 100 MLD Jodhpur plant, keeps out small bidders but not large ones. Margins of 24–30% a few years ago are now 17–21%, and renewables add work at 15–18%. **Order books prove access, not a moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Veolia**, **SUEZ**, **Acciona** and Chinese state contractors in desalination and large water technology; **DuPont**, **Lanxess** and **Toray** in resins and membranes; **Thermax** in industrial water; **L&T**, **NCC** and **Afcons**, which dominate Jal Jeevan volumes; and **Re Sustainability** in waste. CRISIL notes the Middle East is 70–75% of large Indian contractors' overseas order books, so Wabag also faces more Indian competition in the Gulf.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? Look past one-off losses to what each business earns in a normal year, and check the company's own margin against the filed one.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural, but a notch lower: Wabag and Antony',
                    text: "**Wabag** earned 12–13% filed in FY24–FY26 and guides 13–15%. Its Q1 FY27 filed margin was 9% against 13% a year earlier; the company's 13.1% includes a ₹37cr currency gain, which the CFO calls operational. He now expects 13–14% for FY27, and blames more full-build work, fewer supply-only jobs and bigger bad-debt provisions. **Antony** earned about 20% filed for three years, then 14% in Q1 (16.8% by its own measure) as labour rose to 34% of revenue from 30% and a job closure cost about ₹10cr. **Both franchises are intact, but I would plan on about 11–12% for Wabag and 18–20% for Antony in a normal year.**",
                },
                {
                    label: 'Cyclical: mix and stalled sites',
                    text: "**Enviro Infra** fell from 27–29% to 19–21% as renewables reached 29% of revenue at 15–18% margins and staff costs rose to 7% of sales (headcount 900 to 2,300); it guides 19–20% blended, 21–22% for water. **EMS** fell from 23% to 15–17% because site staff and hired machinery stayed on while work in Uttarakhand and West Bengal stopped; its CRISIL rating treats a margin below 20% as a downgrade trigger. **Both should recover some margin as sites restart, but not their IPO-era 24–30%.**",
                },
                {
                    label: 'Not structural: Ion Exchange\'s old contracts and new plant',
                    text: "**Ion Exchange**'s margin fell every year, from 14% in FY22 to 7% in FY26 and 4.5% in Q1 FY27. Its projects arm lost ₹17cr in Q1 on old fixed-price jobs, including a Jal Jeevan project in Uttar Pradesh. Chemicals profit fell 52%: about 6 points of margin from Roha start-up costs, 3–4 points from last year's currency gain not recurring, the rest from lagging prices. Standard plants and membranes improved to 11.9%. **Management says double-digit margins will take time; I would not expect them before Roha is well used.**",
                },
                {
                    label: 'Working capital: the biggest drains',
                    text: "**EMS**'s filed cash cycle reached 333 days in FY26 (160 a year earlier), with debtor days 193 and inventory and work-in-progress days 163; management described about 120 days on the call. **Enviro Infra** counts 195 days of unbilled work and a 166-day net cycle against a 90-day target, because AMRUT money was held back in five states. Its operating cash was negative for three years (−₹102cr, −₹59cr, −₹63cr) and FY26 free cash was −₹245cr. **Its promise of normal cash flow by September is the most testable claim in this note.**",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Ion Exchange** burned ₹28cr of operating cash in FY26, borrowings rose from ₹152cr to ₹482cr in two years and inventory days went from 63 to 87. **Wabag** reports 108 days of net working capital, inside its target, but its standalone receivables plus retention money grew 25% to ₹2,292cr, faster than revenue; its bad-debt allowance rose from ₹51cr to ₹95cr, and FY26 operating cash was only 56% of profit. **Cash is the one thing that could spoil Wabag's balance sheet.**",
                },
                {
                    label: 'Working capital: steady',
                    text: "**Antony**'s receivables have stayed at 90–115 days for 18 quarters (114 in Q1), though one corporation still owes ₹29.5cr of old dues. It produced ₹143cr of operating cash and ₹83cr of free cash in FY26. The strain ahead is capital: ₹650–700cr, mostly borrowed, for Andhra Pradesh plants that earn nothing before FY29.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Contractors are paid on milestones and only after state releases, and clients hold back retention money until handover, so 150–250 days is normal for a state contractor. Operators such as Antony are paid monthly and should run near 90–120 days. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Va Tech Wabag', 'Net working capital 108 days (about 100 at March); no capex needed to grow', 'Net cash ₹965cr excluding annuity projects, 14th quarter in a row'],
                        ['ION Exchage', 'Uttar Pradesh work paced to cash received; FY27 capex ₹30–40cr plus about $40mn over two years for Oman in a joint venture', 'Borrowings ₹482cr at March; net debt ₹163cr (Screener)'],
                        ['Enviro Infra Engine.', 'Working capital “still bloated”; normal cash flow expected by September', 'Debt ₹422cr at March; ₹185cr of IPO money still in deposits'],
                        ['EMS Limited', 'Cycle of about 120 days; no capex plan', 'Borrowings ₹154cr at March (₹86cr a year earlier); net debt ₹95cr'],
                        ['Antony Waste Hand', 'Receivables 114 days; borrowing up ₹22cr in Q1 for new plants and trucks', 'Net debt ₹324cr (debt ₹435cr, cash ₹111cr)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so no Q1 operating-cash figure exists. Figures are the companies\' own unless marked Screener.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its Q4 FY26 call, and my own estimate of earnings growth.",
            ],
            points: [
                {
                    label: 'Growth driver: desalination and the Gulf',
                    text: "**Wabag** booked ₹3,431cr of orders in Q1, 77% overseas, led by a 60 MIGD (million imperial gallons a day, about 272 MLD) seawater plant in Kuwait worth about $372mn with five years of operation, won with partner HEISCO, and the third phase of a sewage plant in Ajman, UAE. The 400 MLD Perur plant is about 75% complete; Hadda in Saudi Arabia is still unsigned. **The book covers FY27–FY28; FY29 depends on a Saudi award cycle that MEED says has slowed sharply.**",
                },
                {
                    label: 'Growth driver: Indian sewage and water schemes',
                    text: "**Enviro Infra** targets ₹2,000cr of revenue and ₹2,500cr of orders this year; it won two Varanasi sewage plants worth ₹257cr under the hybrid annuity model (paid partly while building, the rest over 15 years) and has ₹3,000cr of bids under evaluation. **EMS** lifted its order book to ₹2,329cr by July from ₹1,837cr in March, and its ₹780cr Kolkata project should reach full pace from Q3. **The pipeline is not the issue; payment speed is.**",
                },
                {
                    label: 'Growth driver: resins, industrial water and renewables',
                    text: "**Ion Exchange**'s Roha plant should, with later phases, take resin capacity to about five times the pre-Roha level; it aims for 10% of world resin volumes, and won an Iraq supply order from Hyundai (about $52mn) and a 20-year Oman concession. **Enviro Infra**'s ₹3,027cr renewables book includes 930 MWh of NTPC battery storage and wind work through Suyog Urja, 51% bought for ₹311cr. Water for chip plants and data centres is real, but Wabag now calls it a decade-long view.",
                },
                {
                    label: 'Growth driver: waste processing and new cities',
                    text: "**Antony** won seven Mumbai wards (₹1,330cr over seven years, about ₹190cr a year from Q3 FY27), ₹243cr of electric sweeping in Greater Noida, and two 20-year waste-to-energy plants in Andhra Pradesh with Japan's JFE Engineering. Its construction-debris plant runs at 600–650 tonnes a day since Mumbai made processing compulsory. Management frames growth as 6–9% from existing contracts plus 10–15% from new ones.",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Wabag** grew revenue 21% against its 15–20% guide and won Kuwait and the UAE, exactly as promised on the Q4 call; it also removed ₹600cr of inactive framework orders from its book and still reached a record. **Antony**'s construction-debris ramp arrived as promised.",
                },
                {
                    label: 'Cautious',
                    text: "**Ion Exchange** gives no numeric guidance until the second half; it kept its 25% Roha utilisation target but called progress softer than expected, and its MD said the company is not out of the woods. **Wabag**'s CFO trimmed this year's margin to 13–14%, operating contracts (18% of revenue, growing 7%) lag the 20% goal, and May's $4–6bn future-energy pitch became a decade-long view.",
                },
                {
                    label: 'Missed',
                    text: "**EMS** guided about 20% growth for FY26 and delivered −25%; in May it promised about ₹1,000cr for FY27, West Bengal billing within 10–15 days and zero pledged shares, and by August guidance was ₹900–950cr and West Bengal had slipped to Q3. **Antony** said in June that margins would hold at 20–22% and the labour-code cost was just ₹5.2cr; by August the margin was 16.8%, labour was a surprise, the Pune plant was shut and a ₹15cr arbitration award was still unpaid.",
                },
                {
                    label: 'Mixed',
                    text: "**Enviro Infra** guided about 35% growth and ₹230cr of profit for FY26 and delivered 7.5% and ₹188cr. For FY27 it kept the ₹2,000cr revenue target and grew 49% in Q1, but quietly lowered its profit range from ₹270–280cr to ₹260–270cr, its blended margin from 21–22% to 19–20%, and its growth ambition after FY27 from 35–40% to 25–30%. It expects about 40% of the year's revenue in Q4.",
                },
                {
                    label: 'My outlook',
                    text: "Order books can carry sector revenue well into the teens for two or three years, but FY27 earnings will lag because margins have reset lower and interest has risen. **I expect Wabag, Enviro Infra and Ion Exchange to compound earnings at about 15%, Antony at about 10%, and EMS barely to grow.** I have cut Wabag and Enviro Infra from 18% after this research: Wabag's underlying margin is about 9% and its CFO now guides 13–14%, and Enviro Infra has cut its growth ambition to 25–30% while its cash stays negative. Ion Exchange's 15% comes from a depressed base.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Va Tech Wabag', 'Record book; Gulf and Chennai desalination; margin back above 12%', '9% / **15%** / 20%'],
                        ['Enviro Infra Engine.', 'Five-year order book; renewables; states paying', '8% / **15%** / 22%'],
                        ['ION Exchage', 'Roha filling; old contracts ending; chemicals margin recovering', '5% / **15%** / 25%'],
                        ['Antony Waste Hand', 'Mumbai and Noida contracts; escalations; Pune plant back', '5% / **10%** / 15%'],
                        ['EMS Limited', 'Stalled sites restarting; cash tied up', '−5% / **5%** / 15%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance', 'Capex', 'Track record'],
                    rows: [
                        ['Va Tech Wabag', 'Revenue +15–20%; margin 13–14% this year (13–15% medium term)', 'Almost none; growth needs only working capital', '**Delivered** revenue (+21%), Kuwait and UAE; margin about 9% without the currency gain'],
                        ['ION Exchage', 'None numeric; Roha 25% used in FY27; in August, a significant part of one large old project to be done by March, depending on the client (in May it was to close this year)', '₹30–40cr maintenance; about $40mn over two years for Oman', '**Slipping**: Roha softer than expected; chemicals profit −52%'],
                        ['Enviro Infra Engine.', 'Revenue ₹2,000cr; profit ₹260–270cr; margin 19–20%', '₹20–30cr for water; Suyog ₹311cr in three parts; own solar and battery plants', '**Cut**: FY26 missed badly; FY27 profit and margin trimmed in one quarter'],
                        ['EMS Limited', 'Revenue ₹900–950cr (was about ₹1,000cr)', 'None planned', '**Missed**: FY26 −25% against +20%; West Bengal a quarter late; pledge promise broken'],
                        ['Antony Waste Hand', 'Revenue +6–9% plus 10–15% from new contracts; margin back to 20–22% by FY28', 'About ₹750cr, mostly Andhra Pradesh waste-to-energy', '**Walked back**: margin, labour-cost and Pune promises reversed within one quarter'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered, including findings from the annual reports and rating reports.",
            ],
            points: [
                {
                    label: 'State payments',
                    text: "The largest risk for **Enviro Infra**, **EMS** and **Ion Exchange**'s Uttar Pradesh project. ICRA expected payment cycles below 60 days by September; on their August calls none of the three saw it. Enviro Infra would not guarantee when cash flow normalises, and Ion Exchange has limited its Uttar Pradesh work (about ₹270cr, 11% of its book) to what it is paid for. **If Q2 cash flows show no improvement, my Enviro Infra estimate is too high.**",
                },
                {
                    label: 'Governance: EMS and Enviro Infra',
                    text: "**EMS**'s promoters had pledged about 25.5% of the company's shares in March and still 14.5% in August, after promising zero. The board passed a ₹300cr fund-raising resolution about ten days after management said no money was needed; advances to its 60%-owned paper subsidiary rose to ₹88.6cr from ₹32.8cr, and foreign investors cut their holding from 7.2% to 0.14%. **Enviro Infra** lost ₹11.15cr to unauthorised transfers in mid-2025 and recovered ₹2.6cr; its auditor reported the fraud to the government, and it stands behind ₹916cr of guarantees against a net worth of ₹1,237cr.",
                },
                {
                    label: 'Contingent liabilities and auditor remarks',
                    text: "**Wabag**'s disputed indirect-tax claims more than doubled to ₹228cr and income-tax demands rose to ₹19cr, neither provided for, and about ₹140cr (an analyst's estimate) from Telangana's power company is unpaid despite an arbitration win. **Antony**'s auditor draws attention to a 2021 income-tax search and ₹57cr of disputed demands. **Ion Exchange**'s auditor flags an old SEBI order against a subsidiary (₹22cr claimed), and about 16% of its shares sit in staff-welfare trusts that tend to vote with management.",
                },
                {
                    label: 'Accidents and the Kanjurmarg case',
                    text: "On 8 July a mound of old waste beside **Antony**'s Pune waste-to-energy plant collapsed after about 650mm of rain, killing nine people. The company says the mound was outside its contract area, but the plant is shut until October, a ₹22–24cr write-down is due, and legal reviews will follow. Separately, the Supreme Court has stayed a 2025 High Court order declaring about 120 hectares of the Kanjurmarg landfill protected forest; if that status is upheld, the site must close, with compensation rights.",
                },
                {
                    label: 'The Middle East',
                    text: "About 35–40% of **Wabag**'s order book is in the region; it imports specialised equipment from Europe and Japan and has sent force-majeure letters to clients for price and time relief. Its international contracts usually carry no price-variation clause. Management says water plants are essential infrastructure and have not been affected, but Saudi awards have slowed sharply and **Ion Exchange**'s Iraq order depends on shipping through the Strait of Hormuz.",
                },
                {
                    label: 'Capital ahead of revenue and credit triggers',
                    text: "**Antony** will borrow most of ₹650–700cr for Andhra Pradesh plants that earn nothing before FY29; its CARE rating is at risk if the margin stays below 16% or debt tops three times operating profit. **Enviro Infra** has ₹252cr of unfinished projects and ₹114cr of goodwill on its books and owes about ₹200cr more for Suyog. **EMS**'s CRISIL trigger is a margin below 20%: FY26 was 20%, but each of the last three quarters was 15–17%.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **12% at 18x, 13% at 19x, 18% at 30x, 19% at 32x and 26% at 57x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "**Wabag** holds net cash, so it is cheaper than its P/E suggests. **Antony** carries ₹336cr of net debt, yet its EV/EBITDA is the lowest here, because interest and depreciation eat most of its operating profit. **Enviro Infra** and **EMS** look nearly debt-free, but that hides working capital not yet turned into cash. **Ion Exchange** has moved from net cash to net debt.",
                },
                {
                    label: 'Fits: Enviro Infra',
                    text: "The price needs about 13% a year against my ~15%, the only price here that asks for less than I expect. The discount is there for a reason: three years of negative operating cash, a cyber fraud, and guidance trimmed within a quarter. **Cheap on earnings, but it only becomes a buy when the cash arrives.**",
                },
                {
                    label: 'Full: Wabag',
                    text: "The price needs about 19% a year against my ~15% estimate, a little more than I expect. Revenue growth of 15–20% is well supported by the order book; the gap is the margin, which was about 9% in Q1 without the currency gain. **The best business here and the closest to a buy, but not one at today's price: follow, and buy on weakness or once the margin is back above 11%.**",
                },
                {
                    label: 'Full: Antony',
                    text: "The price needs about 12% a year against my ~10%, a little more than I expect. Q1 profit was close to zero, so the price is looking through the quarter to a margin recovery by FY28. **If the Pune plant restarts safely and the margin returns to about 20%, it fits; a Kanjurmarg loss would make it expensive.**",
                },
                {
                    label: 'Stretched: Ion Exchange and EMS',
                    text: "**Ion Exchange** needs about 26% a year against my ~15%; the price assumes the chemicals margin returns toward 18–20% and the projects arm breaks even within about 18 months, neither of which has started. **EMS** needs about 18% a year against my ~5%, with revenue still falling on the year and governance questions open. **Both need far more growth than they are delivering.**",
                },
                {
                    label: 'Quality of earnings',
                    text: "Wabag earned ₹152cr of other income over the last year against ₹394cr of profit after tax, and the state contractors' profits sit partly in unbilled work. **Antony is the only one whose operating cash runs well ahead of its reported profit.**",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Va Tech Wabag', rank: 1, stance: 'PRICED', segment: WATERTECH,
            what: "Designs, builds and runs water, wastewater and desalination plants for cities and industry in India, the Middle East, Africa and Europe, subcontracting most of the civil work and avoiding state-funded jobs.",
            view: "**The best position in water and the closest to a buy, but the price is full: follow.** A record ₹19,394cr order book, ₹965cr of net cash, 21% revenue growth in Q1 and an AA- rating. But the Q1 margin was about 9% without a ₹37cr currency gain, receivables and retention money grew 25% in FY26, and only 44% of five years' profit arrived as cash. The price needs a little more than my ~15% estimate.",
            watch: 'Underlying margin back above 11% by Q3; Kuwait start and Perur commissioning; receivable days and disputed tax claims.',
        },
        {
            company: 'Antony Waste Hand', rank: 2, stance: 'TURNAROUND', segment: CIVIC,
            what: "Collects, transports and processes city waste under long municipal contracts in Mumbai, Pune, Noida and elsewhere, including the Kanjurmarg landfill and a waste-to-energy plant near Pune.",
            view: "**The best cash record here, in its worst quarter.** It turned 77% of five years' operating profit into cash and holds contracts of 7–25 years, but Q1 profit was ₹0.7cr, nine people died in the July landslide at its Pune plant, and a ₹22–24cr write-down is due. Management's June promises on margin and labour costs were reversed within one quarter. The price asks for a little more than my ~10% estimate.",
            watch: 'The Pune plant restarting safely in October; the margin back toward 20% as escalations are billed; the Supreme Court ruling on Kanjurmarg.',
        },
        {
            company: 'Enviro Infra Engine.', rank: 3, stance: 'SCALEUP', segment: CIVIC,
            what: "Builds and runs sewage and water-treatment plants for state governments in 17 states, and now builds wind, solar and battery-storage projects.",
            view: "**Big order book, no cash yet.** A ₹6,721cr order book and a kept ₹2,000cr revenue target, but the FY27 profit guide slipped to ₹260–270cr, the margin guide to 19–20%, and operating cash has been negative for three years with unbilled work at 195 days. A ₹11cr cyber fraud and a badly missed FY26 dent trust. The price asks for less than my ~15% estimate.",
            watch: 'Operating cash positive in the half-year to September; unbilled days falling toward 90; Q2 and Q3 revenue on the path to ₹2,000cr.',
        },
        {
            company: 'ION Exchage', rank: 4, stance: 'TURNAROUND', segment: WATERTECH,
            what: "Ion Exchange: resins, membranes and water chemicals, standard treatment plants, large treatment projects, plant servicing and Zero-B home purifiers.",
            view: "**Good businesses dragged by old contracts and a new plant.** Chemicals earn most of the profit, but that profit fell 52% in Q1 as Roha started, the projects arm lost ₹17cr, and profit after tax was ₹3cr. Borrowings have tripled in two years and operating cash turned negative in FY26. The price needs far more than my ~15% estimate.",
            watch: 'Roha utilisation disclosed after Q2; the chemicals margin back above 15%; the Uttar Pradesh backlog shrinking.',
        },
        {
            company: 'EMS Limited', rank: 5, stance: 'AVOID', segment: CIVIC,
            what: "Builds sewer, water-supply and sewage-treatment projects for state governments, mainly in Uttar Pradesh, Uttarakhand and West Bengal.",
            view: "**Avoid: stalled work, slow cash and weak governance.** Revenue fell 25% in FY26 and 34% in Q1, guidance was cut to ₹900–950cr, and the filed cash cycle is 333 days against the 120 management describes. 14.5% of the company's shares were pledged in August and advances to a paper subsidiary reached ₹88.6cr. The price needs far more than my ~5% estimate.",
            watch: 'West Bengal work at full pace in Q3; pledged shares falling in filings; debtor and inventory days coming down.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Water technology.** **Va Tech Wabag: follow.** The best franchise, net cash and orders for years, and the closest to a buy, but at a full price; buy on weakness and watch the margin without currency gains. **Ion Exchange (ION Exchage): wait** until Roha fills and the old contracts finish.",
            "**Civic contractors and operators.** **Antony Waste: follow.** Long contracts and real cash, in a terrible quarter. **Enviro Infra: wait** until cash follows its growth. **EMS Limited: avoid**, on cash and governance.",
            "**What would change my view.** For the better: state payments speeding up, which would release cash at Enviro Infra and EMS; Wabag's margin back above 11% without currency gains. For the worse: Wabag's receivables continuing to outgrow revenue; a Supreme Court loss at Kanjurmarg for Antony; EMS's pledges rising again.",
            "**What to watch next quarter.** Wabag's underlying margin and Kuwait start; Antony's Pune restart and write-down; Enviro Infra's half-year operating cash; Ion Exchange's Roha utilisation; EMS's West Bengal work and pledges.",
        ],
        bottomLine:
            "Government money is back, but cash is not, and no utility is a buy at today's price. Follow Va Tech Wabag, which comes closest, and Antony Waste; wait on Enviro Infra and ION Exchage, and avoid EMS Limited.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/WABAG/consolidated/' },
        { label: 'Wholesale price index, steel pipes and diesel — Office of the Economic Adviser, Government of India', url: 'https://eaindustry.nic.in/' },
        { label: 'Demand for Grants 2026-27: Jal Shakti — PRS Legislative Research', url: 'https://prsindia.org/budgets/parliament/demand-for-grants-2026-27-analysis-jal-shakti' },
        { label: 'Demand for Grants 2026-27: Housing and Urban Affairs — PRS Legislative Research', url: 'https://prsindia.org/budgets/parliament/demand-for-grants-2026-27-analysis-housing-and-urban-affairs' },
        { label: 'Jal Jeevan Mission 2.0: growth opportunities for EPC players — ICRA', url: 'https://www.icra.in/Rating/DownloadResearchSpecialCommentReport?id=6830' },
        { label: 'Construction sector outlook, June 2026 — ICRA', url: 'https://www.icra.in/Research/ViewResearchReport/7006' },
        { label: 'Large EPC companies to grow revenue 9–10% — CRISIL Ratings, via Energetica India', url: 'https://www.energetica-india.net/news/power-sector-to-drive-9-10-percent-revenue-growth-for-large-epc-companies-crisil' },
        { label: 'Jal Jeevan Mission 2.0 and contractor payment delays — The Core', url: 'https://www.thecore.in/opinion/the-plinth/businessinfrastructurejal-jeevan-mission-2-payment-delays-contractors-state-funding-869745' },
        { label: 'Saudi water sector hits sharp slowdown — MEED', url: 'https://guest.meed.com/saudi-water-sector-hits-sharp-slowdown/' },
        { label: 'Lakshya Zero Dumpsite — Press Information Bureau', url: 'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jan/doc2026131775201.pdf' },
        { label: 'Key developments in the water and wastewater sector — Indian Infrastructure', url: 'https://indianinfrastructure.com/2026/09/10/mapping-progress-key-developments-in-the-water-and-wastewater-sector/' },
        { label: 'Va Tech Wabag: Q1 FY27 investor presentation', url: 'https://www.wabag.com/wp-content/uploads/2026/08/Q1-FY27-VA-Tech-Wabag_Investor-Presentation.pdf' },
        { label: 'Va Tech Wabag: Q1 FY27 earnings call transcript', url: 'https://www.wabag.com/wp-content/uploads/2026/08/Q1-FY27_VA-TECH-WABAG_Transcript-clean.pdf' },
        { label: 'Va Tech Wabag: Annual Report 2025-26', url: 'https://www.wabag.com/wp-content/uploads/2026/07/Annual-Report-2026.pdf' },
        { label: 'Ion Exchange: investor presentation, August 2026', url: 'https://ionexchangeglobal.com/app/uploads/2026/08/Investor-Presentation-as-on-August-10-2026_3.pdf' },
        { label: 'Ion Exchange: 62nd Annual Report 2025-26', url: 'https://ionexchangeglobal.com/app/uploads/2026/08/62nd-Annual-Report-2025-26.pdf' },
        { label: 'Ion Exchange: rating rationale, March 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/IONExchangeIndiaLimited_March%2017_%202026_RR_391769.html' },
        { label: 'Enviro Infra Engineers: Q1 FY27 investor presentation (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachLive/f0f91637-b4fa-4264-95fd-0334092b1343.pdf' },
        { label: 'Enviro Infra Engineers: Annual Report 2025-26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/f7dfed79-11b8-435c-aaf6-14e13d0aad02.pdf' },
        { label: 'EMS Limited: Annual Report 2025-26 (BSE)', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8572ba13-0a4e-4173-adfd-7e51fc411cb1.pdf' },
        { label: 'EMS Limited: rating rationale, April 2026 — CRISIL', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/EMSLimited_April%2028_%202026_RR_388321.html' },
        { label: 'Antony Waste Handling Cell: Annual Report 2025-26 (BSE)', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/c7cfad8a-9e3b-409d-8493-a771a5284492.pdf' },
        { label: 'Antony Waste Handling Cell: rating rationale, April 2026 — CARE Ratings', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202604130447_Antony_Waste_Handling_Cell_Limited.pdf' },
    ],
};
