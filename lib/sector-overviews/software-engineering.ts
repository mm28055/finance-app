import { SectorOverview } from './types';
import { softwareEngineeringBusinesses } from './software-engineering-businesses';
import { softwareValuationInputs } from './card-data/software';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const ENG_AUTO = 'Vehicle engineering and software — paid by car, truck and off-highway makers';
const ENG_IND = 'Industrial, aerospace, network and geospatial engineering';

export const softwareEngineering: SectorOverview = {
    sector: 'Software',
    title: 'Software · Engineering R&D services',
    format: 'ranked',
    businesses: softwareEngineeringBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '27 Sep 2026',
        inputs: softwareValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'KPIT Technologies': 13,
            'Onward Technologies': 12,
            'Tata Technologies': 16,
            'Cyient': 12,
            'Ceinsys Tech': 6,
        },
    },
    standfirst:
        "The Software sector is too large for one note, so it is split into five groups, each a complete note with its own two tabs. This is the group of five **engineering R&D services** firms: companies paid by manufacturers to design, simulate, test and write the software for their products and plants, rather than by banks and retailers to run their IT. **KPIT** writes the software inside cars; **Tata Technologies** designs whole vehicles and aircraft parts and resells design software; **Cyient** engineers aircraft, rail, telecom and utility networks and is building a chip business; **Onward** designs heavy machinery and industrial equipment; and **Ceinsys** maps water and power networks for Indian state governments. This edition was built from the last two earnings calls for each (checked against the official transcripts where the stored copy was machine-made), the FY26 annual reports, the Q1 FY27 presentations, the CRISIL and CARE rating reports, and sector work from NASSCOM, Gartner, ISG and Kotak. The headline: engineering outsourcing has split in two. Work for European car makers has stalled, which hit KPIT hard enough to withdraw its FY27 margin guide eight weeks after giving it, while work for US industrial, power and aerospace clients is growing. A weak rupee flatters every rupee growth figure here. Three of the five fit my growth estimate at today's price, but only KPIT is one I would own now, and Ceinsys's cheap price comes with profit that has not turned into cash. Every chart uses filed results.",
    lastUpdated: '2026-09-27',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener). Operating profit ÷ revenue. Consolidated unless noted as standalone.',
            note: "Engineering services earn less than the best software exporters because the work is billed by the engineer-hour and clients are big manufacturers with strong buying power. Ceinsys has the highest margin, 24%, after moving from collecting map data to selling finished systems to state governments, but see its cash figures. KPIT fell from 19% to 15% in Q1 FY27 when two large European car makers cut work. Tata Technologies has held about 16%, below its pre-FY26 level of 18%. Cyient's 12–13% is the whole group, including a loss-making chip unit; its core engineering business earns more. Onward earns 11–15% on hourly work.",
            values: {
                'Tata Technologies': [16, 16, 14, 16, 16],
                'KPIT Technologies': [19, 19, 19, 19, 15],
                'Cyient': [13, 12, 13, 12, 13],
                'Ceinsys Tech': [19, 22, 24, 23, 24],
                'Onward Technologies': [13, 14, 15, 11, 12],
            },
            cellNotes: {
                'KPIT Technologies': "The company's own EBITDA margin was 17.2% in Q1 FY27 and 20.6% in Q4 FY26; Screener's figure runs about 2 points lower because it counts some costs the company leaves out. Q1 was far below the 20.5–21.2% the company guided for FY27 in May.",
                'Cyient': "Whole group, including the listed electronics maker Cyient DLM and the chip unit, whose operating loss was 21% of its revenue in Q1 FY27. The core engineering business (DET) earned a company-adjusted 13.2% at the operating-profit-after-depreciation (EBIT) level.",
                'Ceinsys Tech': "Q1 FY27 company figure 24.4%. Other income and the profit share from its Allygram joint venture were a further 25% of pre-tax profit.",
                'Onward Technologies': "Q1 FY27 company figure 12.3%, down 0.6 points on a year earlier as subcontracting rose to ₹34cr from ₹25cr while staff could not travel during the Middle East war.",
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier. Consolidated unless noted as standalone.',
            note: "Read every figure here with the rupee in mind: it averaged ₹94.71 to the dollar in Q1 FY27 against ₹85.57 a year earlier, about 11% weaker, which lifts rupee revenue without any extra work. On that basis KPIT's dollar revenue actually fell 0.6% in Q1, Cyient's core engineering revenue fell 0.9% in constant currency, and Tata Technologies' jump includes an acquisition. Ceinsys grew 58% in FY26 and then stopped: Q1 revenue was up 1%.",
            values: {
                'Tata Technologies': [-2, 2, 4, 22, 34],
                'KPIT Technologies': [13, 8, 9, 12, 9],
                'Cyient': [2, -4, -4, 1, 21],
                'Ceinsys Tech': [112, 81, 52, 20, 1],
                'Onward Technologies': [13, 13, 10, 8, 12],
            },
            cellNotes: {
                'Tata Technologies': "Q4 FY26 and Q1 FY27 include ES-Tec, a German engineering firm bought in November 2025 that adds about $9m of revenue a quarter. Q1 growth was 25.2% in constant currency including ES-Tec; the company gave no organic year-on-year figure.",
                'Cyient': "Q1 FY27 includes Kinetic Technologies, a US chip company bought in April 2026 ($10.4m in the quarter), and the weak rupee. The core engineering business fell 0.9% in constant currency.",
                'KPIT Technologies': "Q1 FY27 dollar revenue was $176.8m, down 0.6% on a year earlier and 3.6% on the previous quarter in constant currency.",
                'Onward Technologies': "The company does not disclose constant-currency growth; its managing director declined to give the FY26 figure on the Q4 call.",
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'diverging',
            legend: ['Losing money', 'Making money'],
            source: 'Filed annual ratios (Screener): return on capital employed. Consolidated unless noted as standalone.',
            note: "People businesses need little machinery, so returns should be high. KPIT and Tata Technologies earned 25–40% for years, but both fell in FY26 as profit dipped and acquisitions added goodwill. Cyient has almost halved, from 22% to 12%, as its core stalled and it put money into chips. Ceinsys has risen to 28% as margins climbed, though much of its capital is cash from new shares.",
            values: {
                'Tata Technologies': [25, 28, 28, 26, 21],
                'KPIT Technologies': [24, 30, 38, 40, 26],
                'Cyient': [20, 20, 22, 17, 12],
                'Ceinsys Tech': [12, 16, 22, 27, 28],
                'Onward Technologies': [23, 10, 22, 16, 23],
            },
            cellNotes: {
                'KPIT Technologies': "FY26 fell as profit dropped 24% and goodwill rose from ₹1,173cr to ₹2,798cr after the Caresoft purchase and N-Dream becoming a subsidiary.",
                'Ceinsys Tech': "The company's own FY26 figure is 19.8%, measured on year-end capital swollen by ₹130cr of new share money received in March 2026.",
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
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days. Consolidated unless noted as standalone.',
            note: "For services firms this is mostly the time clients take to pay. KPIT collects fastest, in about two months; Tata Technologies and Onward in about 80 days. Ceinsys's deeply negative figure is not a sign of strength: see the note on its cell. Cyient's figure mixes in the stock and supplier bills of its electronics-manufacturing subsidiary.",
            values: {
                'Tata Technologies': [79, 91, 82, 71, 79],
                'KPIT Technologies': [56, 64, 56, 56, 61],
                'Cyient': [-99, -78, 52, 128, 119],
                'Ceinsys Tech': [-584, -196, -362, -540, -812],
                'Onward Technologies': [79, 91, 78, 81, 81],
            },
            cellNotes: {
                'Ceinsys Tech': "Distorted. Payable days of 1,076 swamp the calculation because Ceinsys pays its subcontractors only when the government pays it. Debtor days were 259 in FY26; CARE puts the collection period at 200 days, and unbilled revenue alone was ₹319cr, 48% of a year's income.",
                'Cyient': "Includes the inventory and payables of Cyient DLM, its listed electronics manufacturer; FY22–FY23 are distorted by the payable-days calculation. Debtor days were 66 in FY26.",
                'Tata Technologies': "Company figure: 97 days of sales outstanding in Q1 FY27, of which 32 days were work done but not yet billed.",
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Cash lagging profit', 'Cash following profit'],
            source: 'Filed cash-flow statements and P&L (Screener). The last column uses all five years. Consolidated unless noted as standalone.',
            note: "KPIT turns all of its operating profit into cash over five years, Onward and Cyient about 70%, and Tata Technologies about half, dragged down by FY22. Ceinsys is the warning: operating cash was ₹6cr in FY25 and ₹3cr in FY26 against operating profit of ₹80cr and ₹149cr, because the money for work done for state water schemes has not arrived.",
            values: {
                'Tata Technologies': [-6, 49, 31, 75, 91, 51],
                'KPIT Technologies': [108, 73, 101, 113, 98, 100],
                'Cyient': [78, 55, 56, 69, 88, 68],
                'Ceinsys Tech': [108, 142, 111, 8, 2, 40],
                'Onward Technologies': [-18, 22, 119, 71, 90, 74],
            },
            cellNotes: {
                'Ceinsys Tech': "Unbilled revenue rose from ₹134cr (March 2025) to ₹319cr (March 2026). Management expects about ₹100cr of water-scheme dues and unbilled work to be released after a Maharashtra government order, ‘by end of third quarter’.",
                'Tata Technologies': "Company figure: FY26 free cash of ₹742cr was 87% of operating profit.",
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of revenue. Consolidated unless noted as standalone.',
            note: "KPIT turns 17% of revenue into free cash over five years, the best here and enough to fund its acquisitions. Cyient turns a steady 8–13%. Tata Technologies has improved to 13% in the last two years. Ceinsys burned cash in FY25 and FY26 while reporting record profits.",
            values: {
                'Tata Technologies': [-2.9, 7.6, 3.9, 12.9, 13.5, 7.8],
                'KPIT Technologies': [16.7, 9.9, 17.4, 21.6, 16.3, 17.0],
                'Cyient': [12.5, 8.1, 9.0, 9.3, 9.5, 9.5],
                'Ceinsys Tech': [11.8, 20.0, 17.4, -7.4, -1.7, 4.0],
                'Onward Technologies': [-8.6, -0.3, 12.7, 5.8, 8.4, 4.7],
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
            source: 'Filed balance sheets and P&L (Screener): borrowings minus cash and treasury investments, ÷ operating profit. Consolidated unless noted as standalone.',
            note: "Below zero means more cash than debt, and all five were net cash in March 2026. That is changing through acquisitions: Tata Technologies borrowed about ₹569cr to buy ES-Tec, KPIT carries ₹412cr of acquisition debt, and Cyient will move to net debt in Q2 FY27 after paying for TAO Digital, mostly with borrowed money, and a ₹720cr share buyback. Ceinsys's cash is mostly money raised from new shares in 2024 and 2026.",
            values: {
                'Tata Technologies': [-1.8, -0.9, -0.9, -1.4, -0.7],
                'KPIT Technologies': [-1.8, -0.5, -0.5, -1.1, -0.6],
                'Cyient': [-1.4, -0.0, -0.5, -1.1, -1.7],
                'Ceinsys Tech': [0.7, -0.4, -1.5, -1.7, -1.7],
                'Onward Technologies': [-1.9, -1.1, -0.1, 0.2, -1.0],
            },
            cellNotes: {
                'Cyient': "At 30 June 2026 the core business held ₹1,644cr of net cash (company figure). The buyback and the $130m upfront payment for TAO Digital both came after that date; an analyst put total debt near $250m afterwards and management did not dispute it.",
                'Onward Technologies': "Screener's borrowings are mostly lease liabilities; the company reported ₹127cr of net cash at March 2026.",
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ revenue',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of revenue. Consolidated unless noted as standalone.',
            note: "These are people businesses: most spend 1–3% of revenue on offices, computers and test labs. The real capital goes into acquisitions, which do not show here: KPIT's investing outflow was ₹1,188cr in FY26, mainly Caresoft, and Cyient has spent about $300m on Kinetic and TAO Digital in six months.",
            values: {
                'Tata Technologies': [1.8, 1.5, 1.8, 0.6, 0.6, 1.2],
                'KPIT Technologies': [2.8, 3.9, 3.2, 2.2, 2.2, 2.7],
                'Cyient': [1.4, 1.1, 1.2, 1.4, 1.3, 1.3],
                'Ceinsys Tech': [1.0, 1.4, 2.0, 8.9, 2.1, 3.5],
                'Onward Technologies': [7.3, 1.6, 0.4, 0.7, 3.5, 2.4],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'depth', label: 'Tied into client programmes', description: 'How deeply the work is built into multi-year vehicle, aircraft or plant programmes, so a client would find it costly to switch.' },
            { key: 'niche', label: 'Specialist know-how', description: 'Skills, tools and product IP that a general IT company or a client’s own centre could not easily copy.' },
            { key: 'price', label: 'Pricing and contract mix', description: 'Whether the company can hold or raise prices, and how much work is fixed-price or product-based rather than billed by the hour.' },
            { key: 'spread', label: 'Spread of clients and markets', description: 'How exposed revenue is to one client, one industry or one region.' },
            { key: 'cash', label: 'Cash and governance', description: 'Whether profit turns into cash, and what the auditors, rating agencies and disclosures show.' },
        ],
        rows: [
            { company: 'KPIT Technologies', trend: 'stable', trendNote: 'Lost programmes at Honda and two large European clients, but won $257m of new work in the same quarter and added truck, off-highway and US clients.',
                grades: { depth: { grade: 'A', note: 'Multi-year vehicle software programmes' }, niche: { grade: 'A', note: 'Pure-play car software; product IP' }, price: { grade: 'B', note: 'Fixed price 67.7%; revenue per engineer falling' }, spread: { grade: 'D', note: 'Europe about 50%; top 25 clients 87%' }, cash: { grade: 'B', note: 'Cash conversion 100%; goodwill 39% of assets' } } },
            { company: 'Onward Technologies', trend: 'widening', trendNote: 'Clients billing over $1m rose from 16 to 18 in Q1; a ₹33cr power-equipment design-centre win; contracts for FY27 already exceed FY26 revenue.',
                grades: { depth: { grade: 'B', note: 'Some top clients about ten years; 5–8 year agreements' }, niche: { grade: 'C', note: 'Mechanical design; late to vehicle software' }, price: { grade: 'C', note: '84% billed by the hour' }, spread: { grade: 'C', note: 'Top 25 clients 87%; heavy machinery 65%' }, cash: { grade: 'B', note: '74% cash conversion; buyback and dividend' } } },
            { company: 'Tata Technologies', trend: 'widening', trendNote: 'Revenue from car makers other than Tata Motors and JLR grew 56% in Q1; a $100m Tenneco deal and a first Japanese full-vehicle programme.',
                grades: { depth: { grade: 'A', note: 'Full-vehicle programmes; five-year Tenneco deal' }, niche: { grade: 'B', note: 'Designs whole vehicles in 18–24 months' }, price: { grade: 'C', note: 'Margin 16% against 18% before FY26' }, spread: { grade: 'C', note: 'JLR about 24% of revenue; top 20 at 88%' }, cash: { grade: 'B', note: 'FY26 free cash 87% of operating profit' } } },
            { company: 'Cyient', trend: 'narrowing', trendNote: 'Core engineering flat or down in constant currency for five quarters; lost energy work to a larger rival; top-5 client share up from 30.6% to 35.1%.',
                grades: { depth: { grade: 'B', note: 'Picked as one of three suppliers by a rail maker' }, niche: { grade: 'B', note: 'Aircraft, rail, telecom and utility networks' }, price: { grade: 'B', note: 'Some clients accepted price rises' }, spread: { grade: 'B', note: 'Spread across industries and regions' }, cash: { grade: 'B', note: '68% cash conversion; CRISIL AA; debt rising' } } },
            { company: 'Ceinsys Tech', trend: 'stable', trendNote: 'Order book up to ₹990cr and one of three promised large orders won, but revenue flat for five quarters and six senior exits in a year.',
                grades: { depth: { grade: 'C', note: 'State empanelments; won at the lowest bid' }, niche: { grade: 'B', note: 'Water and power network mapping' }, price: { grade: 'C', note: 'All government work tendered' }, spread: { grade: 'D', note: 'Two clients 48% of revenue; water over 90% of book' }, cash: { grade: 'D', note: 'Operating cash ₹3cr on ₹149cr profit' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Own KPIT, in modest size, and add if the next quarter is no worse than the last.** **KPIT Technologies** writes and tests the software inside cars, trucks and tractors, and nothing else, which is both its strength and why its shares have fallen about 60% from their high. In June it warned that two of its largest clients, European car makers cutting costs, were pulling back, and Honda had cancelled new programmes in April; Q1 FY27 dollar revenue fell 0.6% and the company's own margin dropped to 17.2%, far below the 20.5–21.2% it had guided in May. But in the same bad quarter it won $257m of new contracts, it still turns all of its operating profit into cash, and it holds about ₹900cr of net cash. I expect about 13% a year of earnings growth from today's depressed base as the lost work is replaced from FY28; the price needs about 15%, close enough to fit.",
                "**Follow Onward.** **Onward Technologies** is a small (₹640cr market value) designer of industrial machinery, heavy equipment and vehicle parts for 73 clients in the US and Europe. Revenue grew 12% in Q1, the margin has risen from 9% in FY25 to 12–13%, and a new design centre for a North American power-equipment maker should bill from Q2, riding data-centre and grid spending. It holds about ₹127cr of net cash, pays a dividend and bought back shares in Q1. But Q1 profit fell 12% as subcontracting costs jumped, 84% of its work is billed by the hour, which is exactly the work AI tools shrink, and it does not disclose constant-currency growth, so part of its growth is the rupee. I expect about 12% a year; the price needs about 9%. **Follow it, and buy when the margin rises in Q2–Q3 as the new centre bills.**",
                "**Wait on Tata Technologies.** **Tata Technologies** designs vehicles, aircraft parts and industrial machines and resells design software, with Tata Motors and Jaguar Land Rover (JLR) as anchor clients. The recovery is real: revenue grew 25% in constant currency in Q1 (including ES-Tec, a German firm bought in November), revenue from other car makers rose 56%, and it signed a $100m, five-year deal with Tenneco. But the margin is stuck at 16%, the CFO declined to restate the target of exiting FY27 above 18%, JLR alone was about a quarter of FY26 revenue, and TTM profit of about ₹557cr is still below FY24's ₹679cr. I expect about 16% a year; the price needs about 22%. **Wait for a lower price or proof of 17–18% margins.**",
                "**Wait on Cyient.** **Cyient** engineers aircraft, rail, telecom and utility networks, owns 52% of the listed electronics maker Cyient DLM, and is building a chip business. Its core engineering revenue has been flat or down in constant currency for five quarters, the target of a 15% core margin has slipped to around FY28, and group profit has fallen from ₹703cr (FY24) to ₹463cr (FY26). Management is buying growth: Kinetic Technologies (about $85m) in April and TAO Digital ($130m upfront plus earnouts) in September, mostly with borrowed money, while the chip unit lost 21% of its revenue at the operating level in Q1. I expect about 12% a year from a low base; the price needs about 18%. **Wait for two quarters of core growth before paying for the turnaround.**",
                "**Pass on Ceinsys.** **Ceinsys Tech** maps water and power networks and installs smart water meters, mostly for Indian state governments. On paper it is the cheapest and most profitable here: FY26 revenue grew 58% to ₹661cr, the margin reached 24% and profit doubled to ₹133cr. But operating cash was only ₹3cr in FY26, unbilled work has swollen to ₹319cr (48% of a year's income), two customers gave 48% of revenue, revenue has been flat for five quarters, and six senior people including the CFO and an independent director left within a year. I expect about 6% a year; the price needs about 6%. **A price that fits does not help if the profit never arrives as cash.**",
                "**Three things to hold onto before reading the rest.** First, **the rupee is doing much of the growing**: it was about 11% weaker in Q1 than a year earlier, so Q1 rupee growth of 9–34% at the three largest shrinks to between about −1% and 25% in constant currency, and it would reverse if the rupee recovered. Second, **engineering outsourcing has split in two**: European car makers are cutting (KPIT, Tata Technologies' German arm), while US industrial, power, data-centre and aerospace clients are spending (Onward, Cyient's transport unit, Tata Technologies' aerospace). Third, **acquisitions are changing these balance sheets**: KPIT's goodwill is now 39% of its assets, Tata Technologies borrowed about ₹569cr for ES-Tec, and Cyient is moving from net cash to net debt. Judge each on its core business in dollars, not on the headline.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns and cash conversion',
            body: [
                "The six views that matter most, with two more behind **More measures**. Every figure comes from filed consolidated results on Screener. Hover over a starred name for its caveat. Two cautions: revenue growth is in rupees, and the rupee fell about 11% against the dollar over the year, so every company looks faster than it is; and Ceinsys's cash-cycle figure is distorted by very long supplier credit, so use its debtor days and cash conversion instead.",
                "**About the dashboard's stored data.** Several stored records were wrong and nothing here relies on them. Cyient's stored quarters were for its core engineering unit only (₹1,540cr in Q1 against ₹2,076cr for the group), with margins stored as zero. Tata Technologies' Q2 FY26 was a copy of Q3, and its Q3 and Q4 profits were the company's adjusted figures rather than the filed ₹7cr and ₹204cr. Onward's revenue included other income. The stored KPIT and Ceinsys transcripts for Q1 were machine-generated and garbled names; every quote here was checked against the official filing. All numbers are from Screener, the companies' filings and calls (marked as company figures where they differ from filed ones), and the rating reports.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "**Indian software and services had a slow year, and the slowdown is changing shape.** NASSCOM puts India's technology industry at $315bn of revenue in FY26, up 6.1%, and expects spending growth of only 5–7% in FY27. Gartner forecasts world IT spending up 14.2% in 2026, but almost all of that is AI hardware; IT services grow only 5.3%. The large exporters barely grew in Q1 FY27 (TCS +0.4% and Infosys +1.0% on the previous quarter in constant currency). Kotak Institutional Equities estimates that AI productivity will shrink Indian IT services revenue by 3–3.5% a year through FY28, with new AI work not making up the gap until about FY29. **Engineering R&D services (ER&D)** are a $63bn slice of the industry: work paid for by manufacturers' research and product budgets rather than by their IT departments, so it follows car, aircraft, machinery and chip cycles. This note covers one of five Software groups; the others are IT services and analytics, process outsourcing, software products and platforms, and messaging, adtech and AI infrastructure. **My view: engineering work is less exposed to AI price cuts than routine IT maintenance, but its biggest customer, the European car industry, is in a downturn of its own.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Manufacturers (car makers, aircraft and engine makers, rail and telecom equipment firms, heavy-machinery makers) spend on research and product design. Part is done in-house or in their own Indian centres, part is outsourced. **Engineering services firms** sell engineer-hours and fixed-price projects to design, simulate, test and write embedded software. **KPIT** earns the highest margins here (a company-reported 17–21% EBITDA) because it specialises in car software and owns some products, such as the in-car gaming platform AirConsole. **Tata Technologies** adds a lower-margin business reselling design software (PLM, product lifecycle management) that was 23% of FY26 revenue. **Cyient** adds electronics manufacturing and chips. **Ceinsys** is a different animal: mapping and water-network work for Indian states, won by tender. **Profit sits with specialists who own tools or run whole programmes**; hour-billed design work earns 11–15%.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Not from European cars at the moment.** ISG's index shows engineering contract values down 6% in Q2 2026, and the sector research found that global car makers' EBITDA margins fell from about 11% to under 8% in a year, so they are narrowing software-defined-vehicle programmes to driver assistance and connected services. That is what hit **KPIT**, whose revenue is about half European. The growth is in US industrial, power and data-centre equipment, and aerospace: **Onward** won a ₹33cr design centre for a North American power-management client, **Cyient**'s transport unit (aircraft, rail, auto) grew 14.8% in Q1, and **Tata Technologies**' aerospace revenue rose 38%. Global companies' own Indian centres (GCCs), now 2,117 of them with $98.4bn of revenue according to Zinnov and NASSCOM, are both competitors and clients. **My view: the winners for the next two years are the firms selling to industrial and aerospace clients, not to European car makers.**",
                },
                {
                    label: 'Cycles and policy',
                    text: "**Three outside forces matter.** The first is **the rupee**, at ₹95.80 to the dollar on 25 September and about 11% weaker in Q1 than a year earlier; it lifts rupee revenue and margins, and it is the main reason every company here reports double-digit growth. The second is **AI**: Onward's managing director said clients ‘have already removed’ work that AI can do from their outsourcing budgets, and KPIT admitted ‘near-term cannibalization in some areas’. The third is **US policy**: a $100,000 fee on new H-1B work visas was struck down in court, but the US government proposed a $103,265 fee by regulation in August, and a bill to tax outsourcing payments at 25% (the HIRE Act) is stalled in the Senate. Firms that deliver mostly from India and hire locally in the US, as all five do, are less exposed than on-site staffing firms. **My view: the rupee is a one-year gift; AI is the lasting pressure, and it hurts hour-billed work most.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**KPIT** on its two troubled European clients stabilising in Q3 as promised, and on new truck, off-highway and US clients filling the gap. **Tata Technologies** on the Tenneco and Japanese full-vehicle programmes ramping up, JLR staying healthy after its 2025 cyber-attack, and margins returning to 17–18%. **Cyient** on its energy and mining unit (down 26% in Q1) stabilising, TAO Digital integrating cleanly and the chip unit reaching break-even in FY28. **Onward** on US heavy-machinery and power-equipment makers continuing to spend. **Ceinsys** on Maharashtra releasing water-scheme money so that its unbilled work turns into cash, and on winning two more large state orders. **Buy each for its own driver; ‘engineering services’ describes the skill, not the demand.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Group', 'Who', 'Operating margin (last five quarters)', 'Return on capital (FY26)', 'Five-year cash conversion', 'Why'],
                    rows: [
                        ['Car and truck software, with products', 'KPIT', '15–19%', '26%', '**100%**', 'Specialist in vehicle software; 67.7% fixed price; margin fell in Q1 as European clients cut'],
                        ['Vehicle and aircraft design plus software resale', 'Tata Technologies', '14–16%', '21%', '**51%**', 'Design services earn more than PLM resale (23% of revenue); JLR about a quarter of revenue'],
                        ['Aircraft, rail, network engineering plus chips and electronics', 'Cyient', '12–13%', '12%', '**68%**', 'Core engineering earns more; chip losses and electronics manufacturing pull the group down'],
                        ['Industrial and machinery design', 'Onward', '11–15%', '23%', '**74%**', 'Hour-billed; margin up from about 9% as revenue per engineer doubled in four years'],
                        ['Government mapping and water systems', 'Ceinsys', '19–24%', '28%', '**40%**', 'High reported margin, but FY25–FY26 cash conversion 8% and 2%'],
                        ['For comparison: other Software groups', 'Sector research', 'Healthcare operations 24–35%; mid-tier IT services 10–20%', '—', '—', 'Engineering sits in the middle of the software profit pools'],
                    ],
                    note: 'KPIT’s own EBITDA margin was 17.2–21.0% in the same five quarters; Screener’s figure runs about 2 points lower. Cyient’s core engineering business earned a company-adjusted 13.2% EBIT margin in Q1 FY27.',
                },
                {
                    caption: 'The markets: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['India technology industry revenue', '$315bn in FY26, +6.1%; engineering R&D $63bn', '**+5–7% in FY27**', 'NASSCOM, Feb 2026'],
                        ['World IT services spending', '+3.8% in 2025', '**+5.3% in 2026** ($1.57 trillion); data-centre systems +62.5%', 'Gartner, Jul 2026'],
                        ['Engineering R&D contract values', '$0.93bn in Q2 2026, −6%', 'Managed services +2.1% in 2026', 'ISG Index, Jul 2026'],
                        ['AI-led price deflation, Indian IT services', '—', '**−3 to −3.5% a year to FY28**; new AI work catches up about FY29', 'Kotak Institutional Equities, Aug 2026'],
                        ['Large-cap IT growth', 'Near zero in Q1 FY27', '3–4% a year; ‘L-shaped’ recovery', 'JPMorgan, 2026'],
                        ['Industry growth, upside case', '—', '8–9% in FY28 if AI modernisation scales', 'Motilal Oswal, 2026'],
                        ['Global companies’ Indian centres (GCCs)', '2,117 centres; $98.4bn revenue; 2.36m staff', 'Count up 32% since FY21', 'Zinnov–NASSCOM, 2026'],
                        ['Rupee', '₹95.80 per dollar (25 Sep 2026)', 'Q1 FY27 average about 11% weaker than a year earlier', 'Outlook Business, Sep 2026'],
                    ],
                    note: 'No forecaster in the sources read gives a separate FY27–FY29 outlook for Indian engineering services; the demand picture for this group rests on ISG’s contract data and on the companies’ own statements.',
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
                    label: 'Lasting: being built into a vehicle or aircraft programme',
                    text: "Once an engineering firm is writing the software for a car platform or designing a whole vehicle, replacing it mid-programme is costly and risky. **KPIT** says it holds about 10–11% of its top 25 clients' outsourced software spend; in July management called the Q1 fall ‘about the timing’, not lost share, though it no longer repeated May's aim of raising that share by a fifth in FY27. **Tata Technologies** designs complete vehicles in 18–24 months against 36–48 at Western makers, has done so for VinFast and NIO, won its first full-vehicle programme from a Japanese maker it had never worked with, and signed a five-year, $100m programme with Tenneco. Two or three of **Onward**'s top five clients have stayed about ten years, engagements typically run five to eight years, and it says it has not lost a customer in years. **My view: this is real protection, but it protects the programme, not the budget; when Honda cancelled its programmes, KPIT's revenue from Japan, Korea and China fell 25% in a quarter.**",
                },
                {
                    label: 'Evidence of pricing power: thin, and shrinking with AI',
                    text: "**Cyient** is the only one to report price rises: ‘Some of our existing customers have also backed us on price increases this year.’ **KPIT** says it holds ‘some premium against the competition’ and has raised fixed-price work to 67.7% of revenue from 62.5%, which lets it keep the savings from AI tools, but its revenue per engineer fell 3.6% in a year. **Tata Technologies**' margin is 16%, below the 18% it earned before FY26. **Onward** bills 84% of its work by the hour and has no pricing evidence at all. **Ceinsys** wins every government order as the lowest bidder; its margin rose from 17% to 24% by moving to finished systems, not by charging more. **My view: nobody in this group sets prices; the defence is to move from hours to fixed prices and products before AI shrinks the hours.**",
                },
                {
                    label: 'Product IP: the attempt to escape hourly billing',
                    text: "**KPIT** is furthest along. Products and solutions were about 15% of FY26 revenue (roughly $110m), including AirConsole (in-car games, licensed per vehicle, with more than 4 million users), Cymotive's security software, which runs in millions of Volkswagen Group cars, and Caresoft's cost-teardown benchmarking; management wants products at about half of revenue in three years. **Cyient** bought Kinetic Technologies, with about 250 power-chip products and 100 patents, and raised ₹300cr for its chip unit at a $500m valuation. **Tata Technologies** has its chromosome.ai platform and resells design software. **My view: KPIT's product push is credible but its 50% target is ambitious; Cyient's chips are a separate, loss-making bet that investors in an engineering firm did not sign up for.**",
                },
                {
                    label: 'Share gains: where the evidence is',
                    text: "**Tata Technologies** is winning outside its anchor: revenue from car makers other than Tata Motors and JLR rose 56% in Q1, aerospace 38%, and the anchor's share of services revenue fell to 48.9%. **Onward** has grown its clients billing over $1m from 11 (FY22) to 18 after cutting its client list from about 250 to 73, while revenue per client rose about 3.6 times. **KPIT** won 13 new clients last year, including seven off-highway and four truck and bus makers. Against that, **Cyient** lost energy work to a larger rival (not named on the call), and its clients billing over $1m fell from 99 to 94. **My view: Tata Technologies and Onward are gaining; Cyient is losing ground in its weakest unit.**",
                },
                {
                    label: 'Thin: government work won by tender',
                    text: "**Ceinsys** has real know-how, more than seven million engineering hours and more than 35,000 miles of water network processed, and claims ‘zero client churn’ on 100-plus projects. But roughly 70% of its business is government work won at the lowest bid, water schemes are over 90% of its order book, and much of its delivery runs on other companies' platforms (Esri, Bentley, Autodesk). Its US arm, bought in 2024, lost ₹22cr on ₹26cr of revenue in FY26. **Judge Ceinsys's margin as a product of its current order mix, not as a moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "The large Indian IT firms all run engineering units (HCLTech, Tech Mahindra, Wipro, and LTTS, the L&T group's engineering arm), and global firms such as Capgemini's engineering business and Akkodis compete for the same European car work; none is named on the calls, so this list comes from the business model, not the transcripts. The biggest competitor is the client itself: global manufacturers keep building their own centres in India. For KPIT, car makers' in-house software units, such as Volkswagen's, compete for the same programmes. Within this Software page, the IT services group competes for the software parts of this work.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? For engineering firms the margin depends on how much work is fixed-price or product-based, on how many engineers are busy, and on the rupee. Three patterns show up: margins protected by specialism, margins moved by the car cycle and the rupee, and margins that look better than the cash behind them.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: specialism and fixed prices',
                    text: "**KPIT** earned a company-reported 20.6–21.0% EBITDA margin for most of FY26 and targets 22–24% by about FY29, a target management kept on the Q1 call. That margin rests on car-software specialism, fixed-price contracts (67.7% of revenue) and products. **Tata Technologies**' design services earn more than its software resale, and services' gross margin rose 1.2 points in Q1 while resale fell 2.5 points. **Cyient**'s core engineering earned a company-adjusted 13.2% EBIT margin in Q1, up 0.8 points on the previous quarter. **My view: KPIT's 20%-plus margin is structural and should return with revenue; the others' margins depend more on mix.**",
                },
                {
                    label: 'Cyclical: the car cycle and the rupee',
                    text: "**KPIT**'s margin fell from 20.6% to 17.2% (company figures) in one quarter when revenue fell, because engineers kept on for new programmes still cost money; management expects only incremental improvement ‘until our revenues go back to growing ways’, and has delayed wage rises for the first time. The weak rupee has worked the other way for everyone: **Onward**, **Cyient** and **Tata Technologies** all billed in dollars, euros and pounds while paying engineers in rupees. **Onward**'s margin also fell 0.6 points in Q1 as subcontracting rose to ₹34cr from ₹25cr, because staff could not travel during the Middle East war. **My view: strip out the rupee and Q1 margins across this group were flat to down.**",
                },
                {
                    label: 'Not structural: one-offs, tax and other income',
                    text: "**Ceinsys**'s FY26 profit doubled partly because tax was only 15%, after an ₹8–9cr reversal of an excess FY25 provision; management guides about 25% from FY27. Its other income and joint-venture profit share were a quarter of Q1 pre-tax profit. **Tata Technologies**' reported quarterly profits swung from ₹7cr to ₹204cr because of a ₹140cr labour-code charge and a ₹56cr partial reversal. **Cyient**'s Q4 FY26 carried a ₹71cr charge for the abandoned Project Astro acquisition and hedging losses, and KPIT capitalised ₹12.2cr of product development in Q1, which flatters its EBITDA slightly. **My view: compare these companies on their underlying margins, which the text gives, not on single-quarter profit.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Ceinsys** is in a class of its own. Operating cash was ₹6cr in FY25 and ₹3cr in FY26 against operating profit of ₹80cr and ₹149cr. Unbilled revenue, work done but not yet invoiced, rose from ₹134cr to ₹319cr, and its auditor made the calculation of unbilled revenue a key audit matter. CARE puts the collection period at 200 days and will downgrade if it passes 250 days including unbilled work. Management promised in June that the unbilled work would be billed in Q1–Q2; in August the promise moved to ‘before 31 March’.",
                },
                {
                    label: 'Working capital: getting worse',
                    text: "**Cyient**'s working-capital days rose from 43 in FY24 to 68 in FY26 on Screener's figures, though its core unit still turned 80.5% of Q1 adjusted profit into free cash. **Tata Technologies**' days sales outstanding were 97 in Q1 (65 billed, 32 unbilled), better than 111 in Q3 but high for a services firm, and fixed-price vehicle programmes will add more unbilled work. **KPIT**'s rose from 47 to 51 days, and working capital absorbed ₹215cr in the quarter.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**KPIT** turned 98% of FY26 operating profit into operating cash and 17% of revenue into free cash over five years, enough to fund about $400m of acquisitions and investments and still hold about ₹900cr of net cash. **Onward** collects in about 75 days, turned 90% of FY26 operating profit into cash and paid both a dividend and an ₹18cr buyback. **Tata Technologies** turned 87% of FY26 operating profit into free cash (company figure) and paid out 87% of profit as dividends.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Fixed-price engineering is booked as work progresses, so revenue arrives before invoices, and the auditors of **KPIT**, **Tata Technologies** and **Cyient** all name percentage-of-completion revenue as a key audit matter. Government work, as at **Ceinsys**, pays when budgets are released, often in March. **Judge each against its own history, and treat rising unbilled revenue as the first warning sign.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['KPIT Technologies', 'Net cash ₹901.7cr; acquisition debt cut to ₹412cr; working capital absorbed ₹215.5cr; wage rises delayed', 'Net cash on Screener about ₹675cr (leases counted as debt); goodwill ₹2,798cr'],
                        ['Onward Technologies', '₹18cr buyback at ₹328 a share completed; about ₹25cr of lab capex over two years', 'Net cash ₹127cr at March 2026 (company); ₹71cr on Screener'],
                        ['Tata Technologies', 'Net cash ₹880cr at June, down from ₹1,188cr after the dividend; hiring for new programmes', 'ES-Tec loan ₹569cr, repayable from May 2027; net cash ₹600cr on Screener'],
                        ['Cyient', 'Core net cash ₹1,644cr at June; ₹720cr buyback and TAO’s $130m upfront paid after; payout up to 50%; leverage up to 1x', 'Moves to modest net debt in Q2; CRISIL AA/Stable, gearing 0.07x at FY26'],
                        ['Ceinsys Tech', 'Unbilled work to be billed ‘before 31 March’; up to ₹25cr for an AI-cloud joint venture; buyback request rejected', 'Net cash ₹248cr at March 2026, mostly new-share money; CARE BBB+/Stable'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Screener’s net cash counts lease liabilities as debt, so it is lower than the companies’ own figures.',
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
                    label: 'Growth driver: industrial, power and data-centre equipment',
                    text: "US makers of industrial, farm, power and data-centre equipment are at record profits and outsourcing more design work. **Onward**'s new design centre for a North American power-management client (₹33cr, about 40 engineers to start, billing from Q2) could grow ‘5x’ in the client's words, and a further ₹44.46cr three-year renewal was announced in September; heavy machinery is already 65% of its revenue. **Cyient**'s transport unit grew 14.8% in constant currency in Q1, and **Tata Technologies** signed a North American industrial-equipment deal. **My view: this is the healthiest demand in the group, and Onward is the purest way to own it.**",
                },
                {
                    label: 'Growth driver: new clients beyond the anchor',
                    text: "**Tata Technologies** aims at ‘strong double-digit’ growth in FY27, with the second half ‘much greater’ than the first, driven by Tenneco ($100m over five years, ramping from Q2), the Japanese full-vehicle programme, a range-extender programme and aerospace, which it wants to take from about $40m to $100m a year in three years. Its ‘North Star’ is $1bn of revenue in two to three years, against about $650m in FY26, including one or two acquisitions. **KPIT** is diversifying into trucks, off-highway machines, the US and India. **My view: Tata Technologies' growth is the best evidenced here; the margin is what the price still needs.**",
                },
                {
                    label: 'Growth driver: products and chips',
                    text: "**KPIT** targets products and solutions at about half of revenue in three years ($550–600m of a $950m–1bn total) and 22–24% EBITDA by about FY29; products were 21% of its sales pipeline at Q4. **Cyient**'s chip unit grew organically for a fifth quarter (+5% on the previous quarter) and Kinetic adds about $10m a quarter, but break-even has slipped from ‘late FY27’ to FY28 and high-voltage chip development will ‘consume cash for the next four, five quarters’. **My view: products are where these firms' margins could rise, but both targets rest on spending today for revenue in FY28 and beyond.**",
                },
                {
                    label: 'Growth driver: buying revenue',
                    text: "**Cyient** has spent about $300m in six months: Kinetic (about $85m) and TAO Digital ($218m enterprise value, $130m upfront plus two earnouts), a US data and AI engineering firm with about $80m of CY2025 revenue at more than 20% EBITDA; TAO should add $40–50m in FY27. **KPIT** bought Caresoft in August 2025, and **Tata Technologies** ES-Tec in November. **Ceinsys** raised ₹100cr in September 2024 and ₹130cr in March 2026, mostly for acquisitions, dropped two targets, changed the stated use of the money in May 2026, and now plans up to ₹25cr for a 50:50 AI-cloud venture for defence clients. **My view: acquisitions will make the revenue lines grow; the test is whether core businesses do.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Tata Technologies** delivered the more-than-10% sequential growth and 16% margin it had guided for Q4, grew another 4.3% in constant currency in Q1, and raised its FY27 language from ‘double-digit’ to ‘strong double-digit’ growth after Q1. **Onward** delivered double-digit revenue growth (12.2%), the ₹18cr buyback and the Chennai AI lab it promised in May. **Cyient** delivered on capital returns: the ₹720cr buyback and the chip unit's ₹300cr fund-raise.",
                },
                {
                    label: 'Cautious',
                    text: "**KPIT** now expects Q2 revenue flat, a return to growth only ‘by Q4’ and margins that improve ‘incrementally, not significantly’. **Cyient** calls a 15% core margin ‘a structural run-rate ambition, not a guided figure’ and plans for it around FY28. **Tata Technologies**' CFO said the company would focus on growth ‘rather than focusing on any specific margin milestone’.",
                },
                {
                    label: 'Missed',
                    text: "**KPIT** guided an FY27 EBITDA margin of 20.5–21.2% on 7 May and warned eight weeks later; Q1 came in at 17.2% and the band has effectively been dropped. **Ceinsys** promised continued growth, the billing of unbilled work in Q1–Q2 and order inflow in Q2 above all of FY26's (about ₹350cr); Q1 revenue grew 1%, unbilled billing slipped to ‘before 31 March’ and Q1 inflow was ₹143cr. **Onward**'s Q1 profit fell 12.3% and EBITDA grew only 7.2% against a promise of double-digit EBITDA growth.",
                },
                {
                    label: 'Mixed',
                    text: "**Cyient** aspired in April to mid-to-high single-digit organic growth; in July it said even mid-single digits ‘will be challenged given the mathematics’, and it pushed chip break-even to FY28, while its promised energy recovery (‘next 2–3 quarters’ at both calls) has not come. **Tata Technologies** strengthened its growth language but softened its margin target. **Onward**'s wording drifted from double-digit EBITDA growth in May to a double-digit EBITDA margin in July, a much easier bar.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Tata Technologies to grow earnings at about 16% a year, KPIT at about 13%, Onward and Cyient at about 12%, and Ceinsys at about 6%.** Tata Technologies' figure starts from a TTM profit depressed by the labour-code charge and the JLR cyber-attack, and assumes margins recover to about 17–18% by FY28. KPIT's assumes FY27 profit roughly flat, then a return to growth and margins near 20% from FY28, but not the 22–24% aspiration. Onward's follows revenue growth of about 10% with a slowly rising margin. Cyient's starts from a low base but carries new interest costs and chip losses. Ceinsys's allows for a normal 25% tax rate, dilution from new shares and flat revenue until orders convert.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['KPIT Technologies', 'European clients stabilising; trucks, off-highway, US; products', '7% / **13%** / 18%'],
                        ['Onward Technologies', 'US industrial and power equipment; revenue per engineer', '7% / **12%** / 16%'],
                        ['Tata Technologies', 'Tenneco and Japanese programmes; aerospace; margin back to 17–18%', '10% / **16%** / 22%'],
                        ['Cyient', 'Core recovery; TAO Digital; chip losses and new debt', '5% / **12%** / 17%'],
                        ['Ceinsys Tech', 'Large state orders; unbilled work turning to cash; normal tax', '0% / **6%** / 14%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['KPIT Technologies', 'Q2 flat; growth back by Q4; margins up only incrementally; 22–24% EBITDA by about FY29 kept', 'About ₹29cr a quarter; acquisitions are the real spend', '**Walked back**: FY27 margin band of 20.5–21.2% dropped eight weeks after it was given'],
                        ['Onward Technologies', 'Double-digit revenue growth and a double-digit EBITDA margin', 'About ₹25cr over two years for client labs', '**Mixed**: revenue +12% and buyback delivered; EBITDA +7%, profit −12%'],
                        ['Tata Technologies', '‘Strong double-digit’ FY27 growth, H2 above H1; quarterly margin gains; $1bn revenue in 2–3 years', 'Light; ES-Tec bought for about ₹671cr', '**Mixed**: growth promise met and raised; 18% exit margin no longer restated'],
                        ['Cyient', 'No formal guidance; mid-single-digit growth ‘challenged’; 15% core margin around FY28; chips break even FY28', '1.0–1.5% of revenue; about $300m on Kinetic and TAO', '**Walked back**: growth aspiration cut; margin and chip targets delayed'],
                        ['Ceinsys Tech', 'No revenue guidance; margin about 24% sustainable; tax about 25%', 'Asset-light; up to ₹25cr for an AI-cloud venture', '**Missed**: revenue +1%; unbilled billing and order inflow slipped'],
                    ],
                    note: 'Ceinsys gives no numerical guidance; its promises are the qualitative ones from the June call. Cyient says its April growth figure was an aspiration, not guidance.',
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
                    label: 'European car makers and a few large clients',
                    text: "**KPIT** earns about half its revenue in Europe, BMW is about 12%, and its top 25 clients are 87%; co-founder Kishor Patil's warning, ‘The European cost to take out takes much longer time than the other parts’, applies to the whole group. **Tata Technologies**' top 20 clients are about 88% of its business and JLR alone billed ₹1,337cr in FY26; the 2025 cyber-attack at JLR showed how one client event can hit a quarter, and ES-Tec's ₹407cr of goodwill depends on Volkswagen. **Ceinsys**'s two largest customers were 48% of FY26 revenue. **Cyient**'s top five rose to 35.1% of core revenue from 30.6%.",
                },
                {
                    label: 'AI shrinking hour-billed work',
                    text: "Onward's managing director said in May that clients ‘have already removed’ AI-addressable work from outsourcing budgets, and that Onward was not yet using AI tools on billable projects. **Onward** bills 84% of its work by the hour. **KPIT** admitted AI was cannibalising some work in the near term, and its revenue per engineer is falling. **Cyient** abandoned its Project Astro acquisition after spending ₹71cr on it, citing ‘how rapidly AI has evolved’. Kotak's estimate of 3–3.5% a year of AI-led revenue deflation for Indian IT services is the right frame for the hour-billed parts of this group.",
                },
                {
                    label: 'Acquisitions, goodwill and new debt',
                    text: "**KPIT**'s goodwill rose to ₹2,798cr against equity of ₹3,541cr, and its auditor named acquisition accounting a key audit matter; its joint venture with ZF and Qualcomm, Qorix, lost it ₹14cr in Q1 and will lose money ‘for at least next quarter or two’. **Cyient** had ₹1,972cr of goodwill before Kinetic and TAO, TAO's earnouts are still to be paid, and CRISIL will downgrade if margins stay below 12% or acquisitions are heavily debt-funded. **Tata Technologies**' ES-Tec purchase-price accounting was a key audit matter. All three audit opinions were clean, with no emphasis of matter.",
                },
                {
                    label: 'Cash and governance at Ceinsys',
                    text: "**Ceinsys** has reported record profits for two years with almost no operating cash, and its auditor made unbilled revenue a key audit matter. Its CFO, a whole-time director and vice-chairman, the CEO-designate, the chief marketing officer, the head of mobility and an independent director (Phaneesh Murthy, ‘personal reasons’) all left between September 2025 and June 2026, and CARE flags ‘frequent changes’ in key staff. The money raised for acquisitions sat idle for up to two years before its stated use was changed to allow joint ventures, and the first one is an AI cloud business outside its field. Related-party approvals cover up to ₹50cr with its joint venture partner and Meghe-family entities. None of this is an auditor's qualification, but together it is the weakest governance record in the group.",
                },
                {
                    label: 'Related parties, founders and management changes',
                    text: "**Tata Technologies** sought shareholder approval for up to ₹1,750cr of FY27 dealings with JLR, a Tata group company, plus further approvals of ₹1,541cr and ₹652.5cr; pricing is certified as arm's length. **KPIT**'s co-founder and chairman Ravi Pandit died in May 2026, and promoter holding fell 0.82 points in the June quarter for reasons the data does not show. **Cyient** changed its CFO in April 2026 and its CEO has been in place about 18 months. **Onward**'s promoter holding has fallen from 44.96% to 39.97% since September 2023, and it pays ₹0.5cr a year of rent to a firm controlled by its management.",
                },
                {
                    label: 'The rupee and US policy',
                    text: "A recovery in the rupee would reverse much of this year's reported growth and margin gain, and clients are already asking for price give-backs. **KPIT** is unusual in being exposed mostly to the euro (37.9% of revenue) and yen (14.4%) rather than the dollar. A US fee of about $100,000 on new H-1B visas, now being pursued by regulation after a court struck down the first version, and the stalled 25% outsourcing tax in the HIRE Act, are tail risks; all five deliver mostly from India, which limits the damage.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Here the two tell a similar story, because all five hold net cash that is small next to their market value, except Ceinsys and Onward, where cash is a larger share.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **6.4% at 10.8x, 9.4% at 14.2x, 14.7% at 22.8x, 17.8% at 29.9x and 22.4% at 43.9x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E. **Three of the five fit my estimates today (KPIT, Onward and Ceinsys); Cyient is a few points short and Tata Technologies well short.**",
            ],
            points: [
                {
                    label: 'Fits, and worth owning: KPIT',
                    text: "**KPIT** needs about 15% a year against my ~13%, close enough to fit. The price has fallen about 60% from its 52-week high of ₹1,285, and it now prices a recovery to growth in FY28 with margins near 20%, not the 22–24% aspiration. What makes this acceptable is the quality underneath: near-100% cash conversion, about ₹900cr of net cash, and $257m of new contracts in its worst quarter. **The risk is another cancelled programme; buy in two or three steps rather than all at once.**",
                },
                {
                    label: 'Fits, with room: Onward',
                    text: "**Onward** needs about 9% a year against my ~12%. About a fifth of its ₹640cr market value is net cash, and it pays a dividend of about 2.8%. The catch is size and quality: it is a small company billing by the hour, and Q1 profit fell. **Follow it until the power-equipment centre shows up in the margin.**",
                },
                {
                    label: 'Fits on paper, but pass: Ceinsys',
                    text: "**Ceinsys** needs about 6% a year against my ~6%, and it looks cheapest of the five on both yardsticks. But EV/EBITDA gives credit for cash that is mostly new-share money not yet used, and both yardsticks take reported profit at face value when almost none of it has turned into cash for two years. **A cheap price on profit you cannot bank is not cheap.** The view would change with FY27 operating cash above about ₹80cr and a large fall in unbilled revenue.",
                },
                {
                    label: 'Full: a turnaround priced before it happens',
                    text: "**Cyient** needs about 18% a year against my ~12%. On EV/EBITDA it looks much cheaper than on P/E because Screener subtracts ₹1,532cr of net cash, but that cash is falling after the ₹720cr buyback and TAO's upfront payment, so the gap will close. Part of the value is Cyient's 52% stake in the separately listed Cyient DLM. **Wait for proof that the core business is growing again.**",
                },
                {
                    label: 'Stretched: good recovery, priced for more',
                    text: "**Tata Technologies** needs about 22% a year against my ~16%. The growth story is the best evidenced in the group, but the price already assumes the margin returns to 18% and that the $1bn revenue goal is reached. Its dividend payout of 87% is generous, yet the yield is only about 1.2%. **Wait for a lower price or two quarters of margins at 17% or better.**",
                },
                {
                    label: 'A check against the rest of Software',
                    text: "This group earns returns on capital of 12–28% with net cash, and its margins of 12–24% sit between healthcare operations (24–35%) and mid-tier IT services (10–20%) in the sector's profit pools. The market has already separated the winners from the losers: KPIT and Ceinsys have both fallen more than half from their highs, while Tata Technologies still carries a premium for its recovery. The best entry points in this group have come after guidance cuts, as KPIT's did in June.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'KPIT Technologies', rank: 1, stance: 'COMPOUNDER', segment: ENG_AUTO,
            what: "A pure-play car, truck and off-highway software firm (FY26 revenue ₹6,455cr, $724.8m) that writes, integrates and tests vehicle software and sells some of its own products; about half of revenue is European.",
            view: "**A specialist in a bad year, priced for recovery.** Q1 dollar revenue fell 0.6%, the company's margin dropped to 17.2% and the FY27 margin band was withdrawn after European clients cut work and Honda cancelled programmes. But it won $257m of new work in the quarter, converts about 100% of operating profit into cash and holds about ₹900cr of net cash. The price needs about 15% a year against my ~13%.",
            watch: 'Q2 revenue no lower than Q1; the two troubled European clients stabilising in Q3; products and solutions growing 30%-plus.',
        },
        {
            company: 'Onward Technologies', rank: 2, stance: 'SCALEUP', segment: ENG_IND,
            what: "A small engineering-design firm for 73 US and European makers of heavy machinery, industrial equipment and vehicles; 65% of revenue comes from industrial and heavy-machinery clients.",
            view: "**Steady progress at a modest price.** Revenue grew 12% in Q1, the margin has risen from 9% in FY25 to 12–13%, and a new power-equipment design centre bills from Q2, with net cash of about ₹127cr, a dividend and a buyback. But Q1 profit fell 12%, 84% of the work is billed by the hour and AI is already shrinking that work. The price needs about 9% a year against my ~12%.",
            watch: 'EBITDA margin back above 13% as the new centre bills; offshore share recovering from 68%; any loss among the top five clients.',
        },
        {
            company: 'Tata Technologies', rank: 3, stance: 'PRICED', segment: ENG_AUTO,
            what: "An engineering firm that designs vehicles, aircraft parts and industrial machines and resells design software, with Tata Motors and JLR as anchor clients (about 49% of services revenue); FY26 revenue ₹5,506cr.",
            view: "**A real recovery, but the margin has not followed.** Q1 revenue grew 25% in constant currency including ES-Tec, other car makers' revenue rose 56% and a $100m Tenneco deal was signed. But the margin is stuck at 16%, the 18% exit target was not restated, JLR is about a quarter of revenue, and TTM profit is below FY24. The price needs about 22% a year against my ~16%.",
            watch: 'Quarterly margin reaching 17%-plus; Tenneco and the Japanese programme ramping in H2; JLR spending after the cyber-attack.',
        },
        {
            company: 'Cyient', rank: 4, stance: 'TURNAROUND', segment: ENG_IND,
            what: "An engineering firm for aircraft, rail, telecom and utility networks and mines, which also owns 52% of the listed electronics maker Cyient DLM and a growing, loss-making chip business.",
            view: "**Buying growth while the core stands still.** Core revenue has been flat or down in constant currency for five quarters, profit fell from ₹703cr (FY24) to ₹463cr (FY26) and the 15% core margin target slipped to around FY28. Kinetic and TAO Digital, about $300m together and mostly debt-funded, move it to net debt. The price needs about 18% a year against my ~12%.",
            watch: 'Two quarters of positive core growth in constant currency; the energy and mining unit stabilising; TAO integrating without an earnout dispute.',
        },
        {
            company: 'Ceinsys Tech', rank: 5, stance: 'TURNAROUND', segment: ENG_IND,
            what: "A Nagpur-based mapping, water-network and smart-meter company working mostly for Indian state governments, with a small car-design unit and a loss-making US arm; order book ₹990cr.",
            view: "**Record profits, almost no cash.** FY26 revenue grew 58% and profit doubled to ₹133cr, but operating cash was ₹3cr, unbilled work reached ₹319cr, revenue has been flat for five quarters, two customers are 48% of revenue and six senior people left in a year. The price needs about 6% a year against my ~6%, but the profit has to arrive as cash first.",
            watch: 'Operating cash above ₹80cr in FY27; unbilled revenue falling sharply after the Maharashtra water-scheme release; the two pending large state orders.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Vehicle engineering and software.** **KPIT: own**, in modest size and in steps; the best business in the group is priced for a recovery it has the cash and contracts to deliver. **Tata Technologies: wait** for a lower price or margins back at 17–18%; the growth is real but already in the price.",
            "**Industrial, aerospace, network and geospatial engineering.** **Onward: follow**, and buy when the power-equipment centre lifts the margin. **Cyient: wait** until the core business grows again in constant currency and the new acquisitions settle. **Ceinsys: pass** until profit turns into cash and the unbilled work is collected.",
            "**What would change my view.** For the better: KPIT's European clients stabilising in Q3 and growth returning by Q4; Tata Technologies' margin reaching 17–18%; Cyient's energy unit bottoming; Ceinsys collecting its water-scheme dues. For the worse: another cancelled programme at KPIT; a rupee recovery that exposes flat constant-currency growth; Cyient's chip losses or TAO earnouts growing; more senior exits at Ceinsys.",
            "**What to watch next quarter.** KPIT's Q2 revenue against Q1; Tata Technologies' margin and the Tenneco ramp-up; Onward's margin as the new centre bills; Cyient's core growth and net debt after TAO; Ceinsys's operating cash and unbilled revenue at the half-year.",
        ],
        bottomLine:
            "Own KPIT, the best business here, while its price reflects a bad year rather than a broken franchise; follow Onward for the industrial upswing; wait on Tata Technologies and Cyient for better prices or proof; and pass on Ceinsys until its profits arrive as cash.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KPITTECH/consolidated/' },
        { label: 'Indian tech industry revenue FY26 (NASSCOM Strategic Review 2026) — Kotak Neo, Feb 2026', url: 'https://www.kotakneo.com/news/market-news/indian-tech-industry-revenue-fy26-nasscom-forecast/' },
        { label: 'Gartner forecasts worldwide IT spending to grow 14.2% in 2026 — TelecomTV, Jul 2026', url: 'https://www.telecomtv.com/content/digital-platforms-services/gartner-forecasts-worldwide-it-spending-to-grow-14-2-in-2026-totalling-6-37tn-55964/' },
        { label: 'ISG Index Q2 2026: global tech services market — StockTitan, Jul 2026', url: 'https://www.stocktitan.net/news/III/global-tech-services-market-grows-at-fastest-pace-ever-in-q2-wrh1eeo2ke6q.html' },
        { label: 'How midcap IT companies outperformed large peers in Q1 FY27 — Upstox, 2026', url: 'https://upstox.com/news/market-news/stocks/from-deal-wins-to-margin-expansion-here-is-how-midcap-it-companies-outperformed-large-peers-in-q1-fy-27/article-197692/' },
        { label: 'AI could drive 3–3.5% annual revenue deflation in Indian IT services (Kotak) — ANI, Aug 2026', url: 'https://www.aninews.in/news/business/ai-could-drive-3-35-annual-revenue-deflation-in-indian-it-services-through-fy28-kotak20260825140021/' },
        { label: 'Zinnov–NASSCOM India GCC Landscape 2026', url: 'https://zinnov.com/centers-of-excellence/zinnov-nasscom-india-gcc-landscape-2026-report/' },
        { label: 'IT stocks after US court strikes down the $100,000 H-1B fee — Investing.com, 2026', url: 'https://in.investing.com/news/stock-market-news/it-stocks-in-focus-after-us-court-strikes-down-trumps-100000-h1b-visa-fee-5445867' },
        { label: 'HIRE Act (S.2976) — congress.gov', url: 'https://www.congress.gov/bill/119th-congress/senate-bill/2976/all-info' },
        { label: 'KPIT Annual Report FY26', url: 'https://www.kpit.com/wp-content/uploads/2026/08/Annual-Report-for-FY-2025-2026.pdf' },
        { label: 'KPIT Q1 FY27 investor update', url: 'https://www.kpit.com/wp-content/uploads/2026/07/Investor-Update.pdf' },
        { label: 'KPIT Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/d07f9c52-5c5a-443b-b239-6acd5e94b97a.pdf' },
        { label: 'KPIT sell-off explained — Business Today, Jul 2026', url: 'https://www.businesstoday.in/markets/stocks/story/kpit-technologies-selloff-explained-what-went-wrong-as-analysts-cut-targets-whats-next-for-you-540214-2026-07-01' },
        { label: 'Tata Technologies Annual Report FY26', url: 'https://ttlwebassets.tatatechnologies.com/app/uploads/2026/06/Annual-Report-FY-2025-26.pdf' },
        { label: 'Cyient Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=3bc91597-22ed-44e5-891c-a326419f3b68.pdf' },
        { label: 'Cyient Investor Day presentations, Aug 2026 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=38e6f110-5627-428f-b3dd-f3144c103907.pdf' },
        { label: 'Cyient Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/4aba8880-795f-4d0e-996a-db2b186e5b71.pdf' },
        { label: 'Cyient rating rationale (AA/Stable) — CRISIL, Jun 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/CyientLimited_June%2009_%202026_RR_395525.html' },
        { label: 'Ceinsys Tech rating rationale (BBB+/Stable) — CARE, Sep 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202609120954_Ceinsys_Tech_Limited.pdf' },
        { label: 'Ceinsys Tech Annual Report FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2b917c82-bbaf-4b2e-bb2f-39cf31870b61.pdf' },
        { label: 'Ceinsys Tech Q1 FY27 earnings call transcript — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=acb38768-db83-4f05-af9f-ba3c40a6ceb8.pdf' },
        { label: 'Onward Technologies Q1 FY27 investor presentation — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=5f78a0d2-da12-4594-8e8f-0c17ff5937b9.pdf' },
        { label: 'Onward Technologies Annual Report FY26 — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/eac0b700-6e43-416d-b35e-a2c644be3eb4.pdf' },
        { label: 'Company earnings calls and presentations, Q4 FY26 and Q1 FY27', url: 'https://www.bseindia.com/' },
    ],
};
