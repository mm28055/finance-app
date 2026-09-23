import { SectorOverview } from './types';
import { pumpsCompEngBusinesses } from './pumps-comp-eng-businesses';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The ranking, the metric grid and the moat table are grouped by these.
const COMP = 'Compressors — sold on lifetime running cost';
const PUMP = 'Engineered pumps — sold on reliability and qualification';
const ENG = 'Engines and generator sets — sold on channel and service';
const SOLAR = 'Solar pumps — sold into government schemes';

export const pumpsCompEng: SectorOverview = {
    sector: 'Pumps Comp & Eng',
    title: 'Pumps, Compressors & Engines',
    format: 'ranked',
    businesses: pumpsCompEngBusinesses,
    moatCompact: true,
    standfirst:
        "Nine makers of pumps, compressors, engines and generator sets, sorted into four businesses before anything is compared. " +
        "Compressor makers win on the customer's electricity bill and earn the steadiest returns. Engineered-pump makers win on qualification for nuclear, thermal and data-centre work. Engine and genset makers win on channel and service. Solar-pump makers sell into government schemes that set the price and pay late. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-21',
    asOfQuarter: 'Q1 FY27',

    takeaways: [
        "**Separate the four businesses first.** Compressors (Elgi, Kirloskar Pneumatic) have earned 18–30% on capital for five years. Engineered pumps (KSB, Kirloskar Brothers) earn 20–28% now, off a lower base at Kirloskar Brothers. Engines and gensets (Kirloskar Oil, Powerica, Greaves) earn 10–27%, depending on who owns the engine. Solar pumps (Shakti, Oswal) earned the highest returns in the sector in FY25 and have since seen margins halve.",
        "**The solar-pump boom has turned.** Shakti's operating margin fell from 23% to 10% in a year, and Oswal's from 27% to 16%. Maharashtra tender prices fell 8–9% as 40-plus bidders crowded into one state while the national PM-KUSUM 2.0 scheme stayed delayed. Both depend on state agencies that pay late: Oswal's receivables stretched to 229 days, and Shakti has about ₹1,770cr outstanding, including ₹450cr of retention money.",
        "**Operating profit versus operating cash separates the sector cleanly.** Over FY22–FY26 Kirloskar Oil (standalone) earned ₹2,586cr of operating profit and collected ₹1,888cr of operating cash (73%). Kirloskar Brothers earned ₹2,280cr and collected ₹1,533cr (67%), Elgi ₹2,338cr and ₹1,365cr (58%, rising to 78% in FY26) and Powerica ₹1,607cr and ₹1,456cr (91%). At the other end, KSB turned ₹1,468cr of operating profit into only ₹522cr (36%), and ₹95cr of free cash after capex. Shakti turned ₹1,427cr into ₹250cr (18%). Oswal earned ₹1,184cr and had **negative** operating cash of ₹96cr.",
        "**The solar pair has not yet produced any free cash.** Over five years Shakti's free cash after capex was −₹129cr and Oswal's −₹363cr, against reported net profit of ₹897cr and ₹806cr. Shakti's borrowings rose from ₹75cr to ₹505cr, and it is spending ₹1,500–1,700cr more on solar cells and modules.",
        "**My own growth estimates (section 6) are below what most prices assume.** Over the next three to five years I expect earnings to grow about 18% a year at Kirloskar Pneumatic and Powerica, 17% at Elgi, 14–15% at Kirloskar Brothers and Kirloskar Oil, and 13% at KSB. The solar pair should manage only single digits once scheme prices settle. Only Kirloskar Pneumatic and Powerica are priced at or below my estimate.",
        "**Kirloskar Pneumatic is the best combination of quality and price.** Return on capital has risen every year from 18% to 30%, and it has no debt. It guides 18–20% margins and ₹2,100cr of revenue for FY27 (+19%). At 33x it needs about 19% growth a year.",
        "**Nuclear and data centres are real, but slower than the headlines.** KSB has ₹1,235cr of nuclear orders, about 45% of its order book, but NPCIL's own test bed broke down and testing slipped to September. Kirloskar Brothers booked about ₹110cr of nuclear pump orders in Q1. Kirloskar Oil won its first hyperscale data-centre order, about 192 MW. Powerica's data-centre order book doubled to ₹1,100cr.",
        "**Margins everywhere were squeezed by the West Asia war, and the recovery is promised for H2.** Kirloskar Oil's standalone margin fell from 13.5% to 11.2%, KSB grew only 2–3% in H1, and Powerica's genset margin was 5.6%. Each management says price increases catch up in Q2–Q3.",
        "**KSB is the most expensive for what it is delivering.** At 53x it needs about 25% a year from a business that grew 2–3% in the first half and has turned only 36% of its profit into cash over five years, as receivables from state solar schemes built up.",
    ],

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results, operating profit ÷ sales. Consolidated, except Kirloskar Oil and Kirloskar Pneumatic, which are standalone (see notes). KSB’s quarters are calendar quarters (April–June 2026 shown as Q1 FY27).',
            note: 'Operating margin excludes other income, so it can sit below the EBITDA some managements quote. Kirloskar Pneumatic states 17.6% for Q1 FY27 on total income; filed 15%.',
            values: {
                'Elgi Equipments': [14, 15, 14, 16, 15],
                'Kirloskar Pneumatic': [13, 15, 20, 26, 15],
                'Kirloskar Brothers': [11, 11, 13, 13, 11],
                'KSB': [14, 13, 17, 9, 12],
                'Kirloskar Oil': [14, 13, 12, 13, 11],
                'Powerica': [14, 16, 10, 11, 14],
                'Greaves Cotton': [8, 6, 7, 7, 6],
                'Shakti Pumps': [23, 20, 11, 10, 10],
                'Oswal Pumps': [27, 24, 25, 23, 16],
            },
            cellNotes: {
                'Kirloskar Oil': 'Standalone engine business. The consolidated figure includes Arka Fincap, a lender with a ₹7,651cr loan book.',
                'Kirloskar Pneumatic': 'Standalone; consolidated figures are filed only from FY25. Q4 is always the largest quarter.',
                'Greaves Cotton': 'Consolidated, including electric-scooter losses at Greaves Electric Mobility. The core business alone earned 11–14%.',
                'Powerica': 'Blend of a genset business (5.6% margin in Q1 FY27) and wind power (48.6%).',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier.',
            note: 'Blank where the year-earlier quarter was not filed (Powerica listed recently).',
            values: {
                'Elgi Equipments': [8, 11, 18, 12, 23],
                'Kirloskar Pneumatic': [-1, -12, 19, 21, 10],
                'Kirloskar Brothers': [-5, -1, -2, 11, 13],
                'KSB': [3, 6, 8, 1, 4],
                'Kirloskar Oil': [-5, 34, 19, 9, 16],
                'Powerica': [null, null, 8, 11, 27],
                'Greaves Cotton': [17, 16, 17, 22, 31],
                'Shakti Pumps': [10, 5, -15, 29, 38],
                'Oswal Pumps': [37, 74, 32, 40, -8],
            },
            cellNotes: {
                'Elgi Equipments': 'Q1 FY27: currency added 6–7 points (company).',
                'Shakti Pumps': 'Q1 FY27: pumps installed +58% (27,678), but price per pump flat.',
                'Oswal Pumps': 'Q1 FY27: pumps supplied fell to about 43,000 from 56,000 a year earlier.',
            },
        },
        {
            key: 'roce',
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios: return on capital employed. KSB is calendar years 2021–2025.',
            note: 'Solar-pump returns in FY24–FY25 were earned at peak scheme pricing and are not a guide to the future.',
            values: {
                'Elgi Equipments': [19, 24, 22, 22, 22],
                'Kirloskar Pneumatic': [18, 20, 22, 28, 30],
                'Kirloskar Brothers': [11, 22, 27, 28, 20],
                'KSB': [21, 23, 23, 24, 25],
                'Kirloskar Oil': [10, 15, 18, 16, 19],
                'Powerica': [10, 24, 27, 22, 16],
                'Greaves Cotton': [-1, 9, 4, 5, 10],
                'Shakti Pumps': [21, 10, 31, 55, 24],
                'Oswal Pumps': [null, 38, 74, 78, 38],
            },
            cellNotes: {
                'Kirloskar Oil': 'Standalone. Consolidated is lower (14–15%) because the lender’s capital sits inside it.',
                'Greaves Cotton': 'Consolidated. The standalone engine business earned 15–20% in FY23–FY26.',
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
            note: 'Engineered pumps and project compressors run long cycles by nature; the warning is a cycle rising while growth slows.',
            values: {
                'Elgi Equipments': [112, 135, 132, 121, 114],
                'Kirloskar Pneumatic': [128, 107, 103, 103, 90],
                'Kirloskar Brothers': [73, 69, 83, 82, 68],
                'KSB': [134, 172, 165, 163, 204],
                'Kirloskar Oil': [11, 20, 20, 33, 34],
                'Powerica': [21, 33, 44, 44, 29],
                'Greaves Cotton': [-14, -19, 10, 8, -6],
                'Shakti Pumps': [91, 131, 102, 124, 134],
                'Oswal Pumps': [69, 80, 157, 221, 218],
            },
            cellNotes: {
                'KSB': 'CY2025: receivables from state solar-pump agencies and export stock waiting to ship (company).',
                'Oswal Pumps': 'June 2026 (company): 224 days, with receivables up from 155 to 229 days on delayed state payments.',
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss: cash from operating activities ÷ operating profit. The last column divides five years of operating cash by five years of operating profit. KSB is calendar years.',
            note: 'Operating cash is after tax, so 70–80% is healthy. Below 50% means profit is being tied up in receivables or stock. Blank where operating profit was too small for a meaningful ratio.',
            values: {
                'Elgi Equipments': [23, 38, 58, 74, 78, 58],
                'Kirloskar Pneumatic': [77, 24, 89, 73, 63, 66],
                'Kirloskar Brothers': [55, 82, 71, 63, 61, 67],
                'KSB': [30, 15, 48, 55, 25, 36],
                'Kirloskar Oil': [72, 61, 77, 83, 70, 73],
                'Powerica': [115, 74, 78, 74, 120, 91],
                'Greaves Cotton': [null, -106, -168, -17, 14, null],
                'Shakti Pumps': [15, 58, 22, 3, 29, 18],
                'Oswal Pumps': [167, 86, 11, -36, -15, -8],
            },
            cellNotes: {
                'Greaves Cotton': 'Consolidated, including electric-scooter losses and the lending arm. The standalone engine business turned 80% of profit into cash over five years.',
                'Kirloskar Oil': 'Standalone. Consolidated operating cash is negative because loans made by Arka count as operating outflows.',
                'Oswal Pumps': 'FY25 and FY26 negative: receivables from state agencies grew faster than profit.',
            },
        },
    ],

    moat: {
        sources: [
            { key: 'tech', label: 'Product and engineering', description: 'Own designs that are measurably better: efficiency, reliability, own engines or motors.' },
            { key: 'qual', label: 'Qualification', description: 'Approvals that take years: nuclear, defence, railways, refinery standards, data-centre track record.' },
            { key: 'service', label: 'Installed base and aftermarket', description: 'Spares and service sold without a tender to customers who cannot afford downtime.' },
            { key: 'channel', label: 'Channel reach', description: 'Dealer and service network a new entrant cannot copy quickly.' },
            { key: 'buyer', label: 'Pricing power', description: 'Who sets the price. A means the customer buys on lifetime cost; D means a government tender sets it.' },
        ],
        rows: [
            { company: 'Elgi Equipments', trend: 'widening', trendNote: 'India +28% mostly on volume; its new Demand Match technology is winning customers that never bought Elgi before.',
                grades: { tech: { grade: 'A', note: 'Best efficiency on ~70% of industrial models' }, qual: { grade: 'C', note: 'Industrial, not regulated' }, service: { grade: 'B', note: 'Parts 28–30% of India sales; 15–16% abroad vs peers ~38%' }, channel: { grade: 'B', note: 'Distributor-led; still recruiting abroad' }, buyer: { grade: 'A', note: '~80% of buyers choose on running cost' } } },
            { company: 'Kirloskar Pneumatic', trend: 'widening', trendNote: 'Record air-compressor orders; KHOLOS centrifugals at mid-teens share; material cost down 3.3 points.',
                grades: { tech: { grade: 'A', note: 'Own centrifugal and refrigeration designs; own forgings and castings' }, qual: { grade: 'B', note: 'Gas packages for oil and gas buyers' }, service: { grade: 'B', note: 'Maintains 1,000-plus CNG stations' }, channel: { grade: 'C', note: 'Direct and project sales' }, buyer: { grade: 'B', note: 'Critical but low-value parts of big projects' } } },
            { company: 'Kirloskar Brothers', trend: 'widening', trendNote: 'Nuclear pump orders arriving (~₹110cr in Q1); framework deal with a large US data-centre operator nearly signed.',
                grades: { tech: { grade: 'A', note: 'World’s largest maker of concrete volute pumps' }, qual: { grade: 'A', note: 'Nuclear primary and secondary circuits' }, service: { grade: 'C', note: 'Service small; IoT monitoring in hundreds of pumps' }, channel: { grade: 'B', note: 'Small pumps 45–50% of standalone' }, buyer: { grade: 'C', note: 'Utilities and PSUs' } } },
            { company: 'KSB', trend: 'stable', trendNote: 'Nuclear franchise intact but held up by NPCIL’s test bed; H1 sales grew only 2–3%.',
                grades: { tech: { grade: 'A', note: 'Parent KSB SE designs' }, qual: { grade: 'A', note: 'Primary coolant pumps in every PHWR since 1978' }, service: { grade: 'B', note: 'SupremeServ growing ~15% a year' }, channel: { grade: 'B', note: '800 dealers, 350 service centres' }, buyer: { grade: 'C', note: 'Fixed-price projects; price rises lag costs' } } },
            { company: 'Kirloskar Oil', trend: 'widening', trendNote: 'Gained domestic genset share; first hyperscale data-centre order; aftermarket +20% for 12 quarters.',
                grades: { tech: { grade: 'B', note: 'Own engines to high horsepower; gas gensets' }, qual: { grade: 'B', note: 'NPCIL, railways, marine, defence' }, service: { grade: 'A', note: 'Distribution and aftermarket ₹268cr a quarter' }, channel: { grade: 'A', note: 'Wide genset dealer and service network' }, buyer: { grade: 'B', note: 'Dealer products reprice fastest' } } },
            { company: 'Powerica', trend: 'stable', trendNote: 'Data-centre book doubled to ₹1,100cr, but Cummins has taken some data-centre projects directly.',
                grades: { tech: { grade: 'D', note: 'Engine is Cummins’' }, qual: { grade: 'B', note: 'Data-centre execution record' }, service: { grade: 'B', note: 'Genset service; wind O&M' }, channel: { grade: 'B', note: 'Long-standing Cummins channel' }, buyer: { grade: 'C', note: 'Dependent on Cummins’ channel choices' } } },
            { company: 'Greaves Cotton', trend: 'stable', trendNote: 'Core engines growing 16–19%; capital keeps flowing to the loss-making electric-scooter business.',
                grades: { tech: { grade: 'C', note: 'Small diesel engines; own gensets to 650 kVA' }, qual: { grade: 'C', note: 'A defence contract; fire-pump engines' }, service: { grade: 'B', note: 'Retail aftermarket, now pruned' }, channel: { grade: 'B', note: 'Three-wheeler and genset dealers' }, buyer: { grade: 'C', note: 'Three-wheeler OEMs, with index-linked prices' } } },
            { company: 'Shakti Pumps', trend: 'narrowing', trendNote: 'Margin halved on scheme pricing and raw materials; volume up 58% at the same price per pump.',
                grades: { tech: { grade: 'B', note: 'Own motors, controllers, inverters' }, qual: { grade: 'C', note: 'Scheme empanelment' }, service: { grade: 'C', note: 'Five-year service obligations' }, channel: { grade: 'C', note: 'Farmer choice within rate contracts' }, buyer: { grade: 'D', note: 'State agencies set price and pay late' } } },
            { company: 'Oswal Pumps', trend: 'narrowing', trendNote: 'Tender prices −9%; pumps supplied down about a quarter; moving into rooftop solar at lower margins.',
                grades: { tech: { grade: 'C', note: 'Pumps, motors, modules in-house' }, qual: { grade: 'C', note: 'Scheme empanelment' }, service: { grade: 'C', note: 'Scheme service obligations' }, channel: { grade: 'C', note: 'Building rooftop channel' }, buyer: { grade: 'D', note: '40–45 bidders on state tenders' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation and key takeaways',
            body: [
                "Ranked by attractiveness at today's prices. The ranking weighs how durable the moat is, how structural the margins are, whether profit turns into cash and what the price already assumes. Each line says what the company does and why it ranks where it does. Sections 3–8 support it.",
            ],
            embed: 'ranking',
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "Five views of the same nine companies, grouped by business. Use the buttons to switch between them. Every figure comes from filed results or filed ratios; where a figure is missing it is left blank, not estimated. Hover over a cell for any caveat. Order books, where companies publish them, are in section 6.",
                "**Two companies are shown standalone.** Kirloskar Oil's consolidated accounts include Arka Fincap, a lender, which distorts margins, returns and cash flow. Kirloskar Pneumatic's consolidated history is only two years long. Greaves is shown consolidated, because the electric-scooter losses are what its shareholders own, with the core business noted.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "These companies make the machines that move fluids and make power: pumps, air and gas compressors, diesel and gas engines, and the generator sets built around them. What they earn depends on who decides the purchase and how much a failure would cost that buyer.",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "Castings and forgings → motors and engines → the machine (pump, compressor, genset) → a package or plant (a data-centre cooling skid, a gas compression station, a solar-pump installation) → service and spares for 10–30 years. **The profit sits at the two ends:** owning the design that makes the machine efficient or qualified, and owning the service relationship afterwards. Assemblers in the middle, and anyone selling into a government tender, earn the least.",
                },
                {
                    label: 'Demand drivers',
                    text: "Industrial capex (steel, cement, chemicals), power (thermal build-out, nuclear to 100 GW by 2047), city gas distribution (CNG stations from about 7,000 to 15,000 by 2031), data centres, water supply, and government solar-pump schemes. India's pump market is about $2.9bn and grows at mid-single digits a year. **Much of the 13–38% growth these companies report is share and mix, not market growth.**",
                },
                {
                    label: 'Cyclicality',
                    text: "Moderate for compressors and industrial pumps, which follow manufacturing capex. High for project pumps and gas packages, which arrive in lumps. Extreme for solar pumps, which follow government scheme cycles: PM-KUSUM installations went from about 1.5 lakh in FY24 to 3.5 lakh in FY25 and 5 lakh in FY26, then stalled while the next phase waits for approval.",
                },
                {
                    label: 'Policy dependence',
                    text: "**Solar pumps are almost entirely policy:** PM-KUSUM 2.0 is said to be with the Prime Minister's Office, and every solar-pump company expects it “next month”. Nuclear depends on NPCIL's ordering and the SHANTI Act that opens the sector. Emissions rules (CPCB IV+) reset the genset market in 2024. US tariffs (25% on Elgi's compressors) and the West Asia war hit exports this quarter.",
                },
                {
                    label: 'Where the profit pools sit',
                    text: "The table uses each group's filed results. Compressors earn the most consistently. Engineered pumps earn well once a company is qualified. Engines depend on who owns the engine. Solar pumps earned the most at the peak and are now earning the least.",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures',
                    columns: ['Model', 'Who is in it', 'Operating margin (last five quarters)', 'Return on capital (five years)', 'Why'],
                    rows: [
                        ['Compressors', 'Elgi, Kirloskar Pneumatic', '13–26%', '18–30%', 'Sold on running cost; service tail'],
                        ['Engineered pumps', 'KSB, Kirloskar Brothers', '9–17%', '11–28%; mostly 20%+', 'Qualification for nuclear, power, refineries'],
                        ['Own engines and gensets', 'Kirloskar Oil, Greaves (core)', '11–14%', '10–20%', 'Channel and aftermarket'],
                        ['Genset assembly plus wind power', 'Powerica', '10–16%', '10–27%', 'Cummins engines; wind earns the margin'],
                        ['Solar pumps for government schemes', 'Shakti, Oswal', '10–27%', '10–78%', 'Scheme pricing; late payment'],
                    ],
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits in this sector. Each company is graded on each one. The grade is the reason a customer cannot easily switch. Direction says whether that protection is growing or shrinking, based on what was said on the latest call.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Strongest',
                    text: "**Elgi and Kirloskar Pneumatic.** Both sell to buyers who choose on running cost and reliability rather than price, and both make their key parts themselves. Both are widening their lead.",
                },
                {
                    label: 'Hardest to copy',
                    text: "**KSB and Kirloskar Brothers' nuclear and large-pump approvals**, which take years to earn. The catch is that the customer (NPCIL, utilities) controls the timing.",
                },
                {
                    label: 'Best service network',
                    text: "**Kirloskar Oil.** It owns its engines; **Powerica** does not (its engine is Cummins'), which is its weak point.",
                },
                {
                    label: 'Weakest',
                    text: "**Shakti and Oswal.** The state sets the price and dozens of approved suppliers compete, so when a scheme pauses, prices fall. How each company's advantage works is explained in Tab 2.",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**Atlas Copco and Ingersoll Rand** in compressors. **Cummins India, Caterpillar and Kohler** in high-horsepower gensets; Cummins India is the incumbent Kirloskar Oil is attacking in data centres. **Grundfos, Xylem, Flowserve and CRI** in pumps; Flowserve competes with KSB and Kirloskar Brothers for nuclear primary pumps. **Dozens of unlisted solar-pump makers** bid on state tenders. Kirloskar Brothers, Kirloskar Oil and Kirloskar Pneumatic share a brand whose use is in litigation between the family groups.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "The margin chart in section 2 shows four patterns. The West Asia war raised metal, freight and energy costs for everyone in Q1; what matters is who could pass them on.",
            ],
            points: [
                {
                    label: 'Steady and rising: compressors',
                    text: "**Elgi (14–16%)** held its margin even though it under-priced the raw-material rise (it expected 3%, got 5–6%) and absorbs a 25% US tariff. It targets 18% by FY31. **Kirloskar Pneumatic (13–26%, averaging about 20%)** swings with its lumpy Q4, but its annual margin rose from 14% to 21% in five years. Management commits to 18–20%. **Both margins are structural,** because the customer buys on running cost and both make their own key components (Elgi its motors, Kirloskar Pneumatic its forgings).",
                },
                {
                    label: 'Steady at a lower level: pumps and own engines',
                    text: "**Kirloskar Brothers (11–13%)**: standalone margin rose to 13.7% while overseas subsidiaries fell to 5% as chemical-industry service work in the UK dried up. It has raised prices about 10% since January. **KSB (9–17%)** targets 13–14% but raised prices by only single digits while its foundries charged it 12–15% more, and fixed-price projects cannot be repriced. **Kirloskar Oil (11–14%)** fell three quarters running as employee costs rose 40% and exports dropped. It says the pricing lag clears in three to six months.",
                },
                {
                    label: 'Thin on the core, fat on the side: Powerica and Greaves',
                    text: "**Powerica's** genset business earned 5.6% in Q1 on Cummins engines. Its wind business earned 48.6%, and new wind projects earn 82–83%. **The group margin is mostly the wind farms.** **Greaves's** core engine business earns 11–14%, but the consolidated margin is 6–8% because of electric-scooter losses. Burn is now in single digits, and management says the scooter business turns positive in four to six quarters.",
                },
                {
                    label: 'Collapsed: solar pumps',
                    text: "**Shakti** fell from 23% to 10%. Management puts about 6 points on raw materials and 4 on lower selling prices. **Oswal** fell from 27% to 16%: about 8–9 points from tender prices, 3–3.5 from raw materials, 1–1.5 from lost scale. Both call it temporary. Oswal guides 15–17% for FY27, **but its own CMD said current bid prices “are not sustainable” for the industry,** which describes the problem rather than a fix.",
                },
                {
                    label: 'Operating profit versus operating cash: how to read the table below',
                    text: "Operating cash is counted after tax, so a business that collects normally converts **70–80%** of its operating profit (EBITDA). Below 50% means profit is being tied up in unpaid bills or stock. Free cash is what is left after capex, and it is the money that can actually pay dividends or fund growth. The table sets five years of each, in rupees, against each other.",
                },
                {
                    label: 'Good converters: Powerica, Kirloskar Oil, Kirloskar Brothers, Greaves core',
                    text: "**Powerica** turned ₹1,607cr of operating profit into ₹1,456cr of operating cash (91%), and FY26 cash (₹453cr) was higher than its operating profit (₹376cr). But free cash was only ₹337cr, and negative in FY25 and FY26, because it is spending on wind farms. That is capex funded from its own cash, not a collection problem. **Kirloskar Oil (standalone)** converted 73% and holds ₹485cr net cash, with a 25-day cash cycle. **Kirloskar Brothers** converted 67% and, because it spends only about its depreciation, turned 69% of net profit into free cash. The best on free cash is **Greaves's standalone engine business**: ₹793cr of free cash on ₹812cr of net profit. All of it and more has gone into the scooter business, which is why consolidated free cash is −₹614cr.",
                },
                {
                    label: 'Improving: Elgi and Kirloskar Pneumatic',
                    text: "**Elgi** converted only 23% in FY22 and 38% in FY23 as it built stock through the supply-chain crunch. It has risen every year since, to 78% in FY26 (₹454cr of cash on ₹583cr of operating profit), and its cash cycle fell from 135 to 114 days. **Kirloskar Pneumatic** converted 66% over five years, with one weak year (24% in FY23). In Q1 FY27 capital employed in compression fell by ₹44cr, a sign cash is still coming in.",
                },
                {
                    label: 'Weak: KSB, and the solar pair',
                    text: "**KSB's 36% is the surprise in a company of its quality.** Over five years it collected ₹522cr on ₹1,468cr of operating profit and generated only ₹95cr of free cash, 9% of reported net profit. In CY25 cash was ₹93cr on ₹377cr of operating profit. Management blames receivables from state solar-pump agencies and export stock held back by the war, and says both improve in H2. **Shakti** collected ₹250cr on ₹1,427cr (18%). In FY25, its best year for profit, it collected ₹20cr on ₹603cr. It has about ₹760cr not yet due, ₹560cr of debtors and ₹450cr of retention money. **Oswal** reported ₹514cr of operating profit in FY26 and had −₹77cr of operating cash. Its receivables reached 229 days. **For both, reported profit is mostly money owed by state agencies.**",
                },
            ],
            tables: [
                {
                    caption: 'Operating profit (EBITDA) versus operating cash, FY22–FY26 (₹cr)',
                    columns: ['Company', 'Operating profit, 5 yrs', 'Operating cash, 5 yrs', 'Cash ÷ profit', 'Free cash after capex, 5 yrs', 'Free cash ÷ net profit', 'FY26: profit → cash'],
                    rows: [
                        ['Powerica', '1,607', '1,456', '**91%**', '337', '43%', '376 → 453'],
                        ['Kirloskar Oil (standalone)', '2,586', '1,888', '**73%**', '877', '51%', '735 → 511'],
                        ['Kirloskar Brothers', '2,280', '1,533', '**67%**', '1,019', '69%', '545 → 334'],
                        ['Kirloskar Pneumatic (standalone)', '1,171', '775', '**66%**', '432', '54%', '363 → 228'],
                        ['Elgi Equipments', '2,338', '1,365', '**58%**', '1,042', '64%', '583 → 454'],
                        ['Greaves Cotton (standalone core)', '1,009', '809', '**80%**', '793', '98%', '320 → 348'],
                        ['Greaves Cotton (consolidated)', '619', '−334', '**negative**', '−614', 'negative', '239 → 33'],
                        ['KSB (CY21–CY25)', '1,468', '522', '**36%**', '95', '9%', '377 → 93'],
                        ['Shakti Pumps', '1,427', '250', '**18%**', '−129', 'negative', '422 → 124'],
                        ['Oswal Pumps', '1,184', '−96', '**negative**', '−363', 'negative', '514 → −77'],
                    ],
                    note: 'Filed annual accounts (via Screener). Operating profit is before interest, tax and depreciation; operating cash is after tax and working capital; free cash is operating cash minus capex. Net profit over five years: Elgi 1,641, Kirloskar Pneumatic 796, Kirloskar Brothers 1,476, KSB 1,058, Kirloskar Oil 1,733, Powerica 782, Greaves standalone 812, Shakti 897, Oswal 806.',
                },
                {
                    caption: 'How structural is each margin?',
                    columns: ['Company', 'Range (5 quarters)', 'Verdict', 'Why'],
                    rows: [
                        ['Elgi Equipments', '14–16%', '**Structural, rising**', 'Efficiency leadership; own motors; 18% by FY31'],
                        ['Kirloskar Pneumatic', '13–26%', '**Structural at ~20%**', 'Own forgings and castings; guides 18–20%'],
                        ['Kirloskar Brothers', '11–13%', '**Structural, standalone rising**', 'Price rises ~10%; overseas service mix weak'],
                        ['KSB', '9–17%', '**Structural at ~13%, squeezed**', 'Fixed-price projects; price rises lag costs'],
                        ['Kirloskar Oil', '11–14%', '**Squeezed, recoverable**', 'Pricing lag; employee costs +40%'],
                        ['Powerica', '10–16%', '**Two businesses**', 'Gensets ~6%; wind ~49%'],
                        ['Greaves Cotton', '6–8%', '**Diluted**', 'Core 11–14%; scooter losses'],
                        ['Shakti Pumps', '10–23%', '**Cyclical, at the bottom**', 'Scheme prices and raw materials'],
                        ['Oswal Pumps', '16–27%', '**Cyclical, falling**', 'Tender prices −9%; rooftop lower margin'],
                    ],
                },
                {
                    caption: 'Q1 FY27 cash and balance sheet, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Kirloskar Pneumatic', 'Capital employed in compression fell by ₹44cr in the quarter', 'No debt; rating raised to AA'],
                        ['Kirloskar Oil', 'Cash cycle 25 days; inventory up to 64 days', 'Standalone net cash ₹485cr'],
                        ['Elgi Equipments', 'Capex mainly the new campus and land in Italy', 'Net cash “very strong”'],
                        ['Powerica', 'No capex needed for gensets on one shift', 'Net cash ₹193cr'],
                        ['Kirloskar Brothers', 'Inventory up while the foundry was modernised; capex equal to depreciation', 'Borrowings ₹250cr at FY26'],
                        ['KSB', 'Stock built for export orders awaiting clearance; solar receivables to improve in H2', 'Essentially debt-free'],
                        ['Greaves Cotton', '₹331cr into the scooter business and ₹50cr into the finance arm', 'Standalone cash ₹426cr in March'],
                        ['Shakti Pumps', '₹760cr not yet due, ₹560cr debtors, ₹450cr retention; ₹1,800cr of bank lines', 'Borrowings ₹505cr at FY26'],
                        ['Oswal Pumps', 'Cash cycle 224 days (172 in March); receivables 229 days', 'Net debt ₹266cr'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so the quarter is visible only where management spoke about it.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "What each management says it will deliver, what it is spending, what it expects to earn on that spending, and whether it delivered last time. It ends with my own estimate of each company's growth over the next three to five years, based on the calls, the filed history and the outlook for the economy and the sector. My observations come first; the tables follow.",
            ],
            points: [
                {
                    label: 'The quality companies barely need capital',
                    text: "Kirloskar Brothers spends about its depreciation. Elgi's capex is mostly a new campus. Powerica runs its genset plant on one shift at 75–80% use. Kirloskar Pneumatic spends ₹100cr a year plus a ₹320cr commitment to Ziffra, a new air-conditioning compressor business under a production-linked incentive scheme. **Growth here comes from filling existing plants and new products, which is why returns hold.**",
                },
                {
                    label: 'The solar pair is spending the most, at the worst time',
                    text: "Shakti plans ₹1,500–1,700cr by September 2027, about ₹800cr this year, on a 0.5 GW module line and a 2.2 GW cell-and-module plant. It is funded partly by an ₹800cr term loan, while its margin has halved and 18% of profit turns into cash. It targets ₹5,000cr of revenue by 2029. Oswal is adding 1 GW of module capacity by the end of Q2 and is entering rooftop solar, where its CMD admits margins “cannot match” PM-KUSUM. **Both are building capacity in solar modules, where the industry is heading into overcapacity.**",
                },
                {
                    label: 'Data centres are the growth everyone is chasing',
                    text: "Kirloskar Oil's first hyperscale order (about 192 MW) is recognised this year, with a five-to-six-year service contract. Powerica's data-centre book went from ₹400–500cr to ₹1,100cr in a year, to be executed over 12–18 months. Kirloskar Brothers sells $7.5–10m cooling and fire packages per hyperscale site in the US, where data centres are 23% of revenue. KSB supplies liquid-cooling pumps through global OEMs. **Competition is rising (Powerica said so directly), and Cummins can take projects from its own dealer.**",
                },
                {
                    label: 'Nuclear is real but slow and outside the companies’ control',
                    text: "KSB's primary coolant pumps for Gorakhpur are built, but NPCIL's test bed failed. Each pump needs 500 hours of testing, and KSB can ship at most one a quarter. It expects a tender for eight more reactors “in the next few months”. Kirloskar Brothers has proved hydraulic and mechanical performance for primary pumps and is finishing metallurgy trials. Kirloskar Oil's NPCIL genset order pays by milestone, with nothing in Q1. **Nuclear revenue arrives about four years after an order.**",
                },
                {
                    label: 'My outlook: the economy and the sector',
                    text: "These are my own estimates, not company guidance (table at the end of this section). **The starting point is the economy.** If India's nominal GDP grows about 10–11% a year, industrial equipment makers usually grow roughly in line or a little faster, because manufacturing capex, power and water spending rise with it. Beyond that, three demand streams are genuinely above trend: **data centres** (new capacity needs gensets, cooling pumps and fire systems), **gas** (city gas stations are projected to go from about 7,000 to 15,000 by 2031, according to Kirloskar Pneumatic) and **nuclear** (the SHANTI Act opens the sector, but equipment revenue lags orders by about four years). One stream is below trend and uncertain: **solar pumps**, where PM-KUSUM 2.0 is still awaiting approval and prices have already fallen. Two headwinds apply to everyone: raw-material and freight costs from the West Asia war, and US tariffs on exports.",
                },
                {
                    label: 'Compressors: the best growth outlook, 15–18% a year',
                    text: "**Kirloskar Pneumatic** has the widest set of drivers: CNG compressors as gas stations double, biogas (record bookings), KHOLOS centrifugals, refrigeration for cold chains, and from FY28 air-conditioning compressors under the PLI scheme. It has a year of orders in hand and guides +19% for FY27. I expect **about 18%** earnings growth, with margins held at 18–20%. **Elgi** grows by taking share: it grows faster than India's industrial output because its efficient compressors replace older ones, and North America (+37%) and Europe (now at breakeven) add to that. Stripping out currency, it grew 16–17% in Q1. With margins rising towards 18%, I expect **about 17%**. That is healthy, but short of the ~22% its price assumes.",
                },
                {
                    label: 'Engineered pumps: steady, 13–14%, with nuclear as the upside',
                    text: "**Kirloskar Brothers'** revenue grew only about 7% a year from FY23 to FY26, and earnings fell in FY26. Its drivers now are water supply, thermal power, US data-centre packages and, later, nuclear. I expect **about 14%** earnings growth. The upside case (18%) needs the US framework contract and primary-circuit nuclear orders to land. **KSB** has the bigger nuclear book (₹1,235cr) but can ship only about one primary pump a quarter until NPCIL's test bed is fixed, its valves margin is weak, and solar receivables absorb cash. I expect **about 13%**. Both are good businesses whose growth is limited by customers' timetables, not by demand.",
                },
                {
                    label: 'Engines and gensets: 15–18%, if the data-centre boom holds',
                    text: "**Powerica** has the most visible growth. Its genset order book is ₹1,700cr, more than half from data centres, and owned wind capacity is set to rise from 330 MW to 634 MW. New wind projects earn 82–83% EBITDA margins, so profit should grow faster than revenue as wind's share rises. I expect **about 18%**, with the risk that Cummins keeps taking large projects directly. **Kirloskar Oil** has real drivers (data centres, 12 quarters of double-digit aftermarket growth, railways, marine, defence), but its $2bn target implies about 23% a year from a business that grew 9–19% last year while margins fell. I expect **about 15%**, with margins back to about 13%. **Greaves** is the widest range: the core should grow 14–17%, and consolidated earnings could grow much faster if scooter losses stop, or not at all if they don't. My base case is **about 15%**.",
                },
                {
                    label: 'Solar pumps: single digits until the scheme and prices settle',
                    text: "PM-KUSUM installations went from about 1.5 lakh in FY24 to 5 lakh in FY26, but that peak came with 23–27% margins that bidders have since competed away. Even if KUSUM 2.0 is approved soon, I expect prices to stay near today's level because 40-plus suppliers now hold capacity. **Shakti** should grow volume, but its earnings are likely to grow only **about 8%** from FY26's base while margins stay near 10–13%. Its own target once cells are running is about 15%. **Oswal** is shifting to rooftop solar, which its own CMD says earns less. I expect **about 5%**, and less if receivables force it to slow down. **A faster scheme approval at better prices is the upside; nothing in the calls suggests margins return to FY25 levels.**",
                },
                {
                    label: 'Read guidance by who is giving it',
                    text: "**Conservative:** Kirloskar Pneumatic (kept ₹2,100cr despite a soft Q1), Elgi (margin target of 18% by FY31, not next year). **Precise:** Kirloskar Brothers (double-digit growth, a figure it usually meets). **Stretched:** Kirloskar Oil ($2bn revenue by FY30, about 2.3 times FY26), Shakti (₹5,000cr by 2029), Oswal (20–25% growth this year with ₹800–1,000cr from a rooftop business it has just started, and 30–40% a year after). **Missed:** KSB (aimed for double digits, grew 2–3% in H1), Oswal (a CMD answering why the stock has halved since listing).",
                },
            ],
            tables: [
                {
                    caption: 'Guidance, order books, capex and track record',
                    columns: ['Company', 'Guidance', 'Order book', 'Capex', 'Track record'],
                    rows: [
                        ['Elgi Equipments', 'Margin 18% by FY31', 'Not published (product business)', 'New campus; land in Italy', '**Conservative**: Q1 +23%'],
                        ['Kirloskar Pneumatic', '₹2,100cr FY27 (+19%); margin 18–20%', '₹1,854cr (~1 year)', '₹100cr + ₹320cr Ziffra over FY27–28', '**Conservative**: kept guidance after +10% Q1'],
                        ['Kirloskar Brothers', 'Double-digit growth', 'Domestic ₹2,558cr + overseas ₹1,505cr (excl. small pumps)', 'About equal to depreciation', '**Precise**: standalone margin up'],
                        ['KSB', 'Aims for double digits; margin 13–14%', '₹2,744cr (nuclear ₹1,235cr)', '₹80–120cr a year', '**Missed**: H1 +2–3%'],
                        ['Kirloskar Oil', '$2bn revenue by FY30', 'Not published; NPCIL order pending', 'Not given', '**Stretched**: margin down three quarters'],
                        ['Powerica', 'Double-digit growth; margin recovery from Q3', 'Gensets ₹1,700cr (data centres ₹1,100cr)', 'Wind: 330 → 634 MW', '**Delivering**: +27%'],
                        ['Greaves Cotton', 'Core 16–20% CAGR; FY27 margins held', 'Not published', '₹331cr to scooters; ₹50cr to finance', '**Mixed**: growth yes, margin no'],
                        ['Shakti Pumps', '₹5,000cr by 2029', '₹1,000cr (two quarters)', '₹1,500–1,700cr by Sept 2027', '**Stretched**: margin halved'],
                        ['Oswal Pumps', '+20–25% FY27; margin 15–17%; 30–40% later', '22,025 pumps + 72 MW solar EPC', '1 GW module line by end of Q2', '**Missed**: Q1 −8%'],
                    ],
                },
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    columns: ['Company', 'What drives it', 'Revenue growth', 'Margin direction', 'Earnings growth: low / base / high', 'Price needs'],
                    rows: [
                        ['Kirloskar Pneumatic', 'Industrial capex, CGD stations, biogas, Ziffra from FY28', '15–18%', 'Holds 18–20%', '13% / **18%** / 22%', '~19%'],
                        ['Powerica', 'Data-centre gensets; wind capacity nearly doubling', '12–15%', 'Rising (wind mix)', '12% / **18%** / 22%', '~16%'],
                        ['Elgi Equipments', 'Share gains in India and the US; Europe past breakeven', '13–15%', 'Rising towards 18%', '12% / **17%** / 20%', '~22%'],
                        ['Kirloskar Brothers', 'Water, power, nuclear, US data centres', '11–13%', 'Slowly rising', '10% / **14%** / 18%', '~20%'],
                        ['Kirloskar Oil (standalone)', 'Data centres, share gains, aftermarket, exports', '13–16%', 'Back to ~13%', '10% / **15%** / 20%', '~25%'],
                        ['KSB', 'Nuclear deliveries from CY27; aftermarket', '10–13%', 'Flat at 13–14%', '8% / **13%** / 17%', '~25%'],
                        ['Greaves Cotton', 'Core engines; scooter losses shrinking', '14–17% (core)', 'Rising if scooters break even', '5% / **15%** / 25%+', '~23%'],
                        ['Shakti Pumps', 'PM-KUSUM 2.0; cells and modules; exports', '10–15%', 'Stays 10–13%, not back to 23%', '−5% / **8%** / 20%', '~17%'],
                        ['Oswal Pumps', 'State tenders; rooftop solar', '10–20%', 'Falls towards 13–15%', '−10% / **5%** / 15%', '~5%'],
                    ],
                    note: 'My own judgement from the calls, filed history and the sector outlook above, not company guidance. Base case assumes India’s nominal GDP grows about 10–11% a year and no recession. “Price needs” is the growth the current P/E requires (section 8).',
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "Sector-wide risks first, then each company. The table records which risks management addressed on the call and which it avoided or left unresolved.",
            ],
            points: [
                {
                    label: 'Government schemes and payment',
                    text: "Shakti and Oswal live on PM-KUSUM and state programmes. A delay cuts volume and, by crowding bidders into fewer tenders, cuts price too. Payment runs through state nodal agencies whose timing no company controls. KSB is now exposed to the same receivables.",
                },
                {
                    label: 'Input costs and fixed-price contracts',
                    text: "Metals, castings, freight and gas all rose with the West Asia war. Companies selling through dealers reprice within a quarter; project and tender businesses (KSB, Powerica's older orders, the solar pair) cannot.",
                },
                {
                    label: 'Batteries and gensets',
                    text: "Battery storage paired with smaller generators that run fewer hours is becoming the design for backup power. It does not end the genset sale but erodes fuel, spares and service, which is the most profitable part for Kirloskar Oil and Powerica.",
                },
                {
                    label: 'Dependence on someone else’s decision',
                    text: "Powerica depends on Cummins' channel choices. KSB depends on its German parent for technology and pays royalties under an advance pricing agreement, and group software costs (SAP S/4HANA) will be charged to it next year. Nuclear revenue depends on NPCIL's test bed and ordering calendar.",
                },
            ],
            tables: [
                {
                    caption: 'Company-specific risks and how management handled them',
                    columns: ['Company', 'Key risk', 'Addressed on the call', 'Avoided or unresolved'],
                    rows: [
                        ['Elgi Equipments', 'US tariffs; Chinese low-end competition', '25% tariff absorbed; new low-cost range launched against China', 'Would not split screw and piston sales or give semiconductor revenue'],
                        ['Kirloskar Pneumatic', 'Middle East packages delayed', 'Limited to package orders; guidance kept', 'Would not quantify the revenue deferred from Q1'],
                        ['Kirloskar Brothers', 'Overseas margins; dispatch delays', 'Foundry fixed; UK service work returns in Q2–Q3', 'Nuclear share of order book not given'],
                        ['KSB', 'Nuclear delay; weak H1; cash conversion', 'Test-bed problem and solar receivables explained', 'Group SAP costs next year not quantified'],
                        ['Kirloskar Oil', 'Margin decline; employee costs +40%', 'Pricing lag of 3–6 months explained', '**Would not give share-option costs or the price-versus-volume split**'],
                        ['Powerica', 'Genset margin 5.6%; Cummins dependence', 'Price rises phased in; recovery from Q3', '**Declined to comment on Cummins taking data-centre projects directly**'],
                        ['Greaves Cotton', 'Scooter losses; margin down 2–2.5 points', 'Burn in single digits; break-even in 4–6 quarters', 'Scooter-business valuation not discussed'],
                        ['Shakti Pumps', 'Margin collapse; receivables; capex', 'Receivables split disclosed; KUSUM 2.0 “next month”', '**No margin guidance; would not split the ₹5,000cr target**'],
                        ['Oswal Pumps', 'Pricing; receivables; delivery on guidance', 'Margin loss quantified by cause', '**Some rooftop projects book revenue now and profit over five years; FY27 target leans on a new business**'],
                    ],
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "A price only makes sense against the growth it assumes. The rough rule used here: to earn about 12% a year while the multiple drifts down to a mature 18 times over ten years, earnings must compound at roughly **13% at 20x, 16% at 25x, 18% at 30x, 21% at 40x, 26% at 60x and 33% at 100x.** The chart shows return on capital against the P/E; the table sets each company's required growth against what it is delivering, what it guides and my own estimate from section 6.",
            ],
            embed: 'scatter',
            embedFirst: true,
            points: [
                {
                    label: 'Plausible',
                    text: "**Kirloskar Pneumatic** (33x; needs ~19%; my estimate ~18%; guides 19% for FY27 at 18–20% margins with rising returns). **Powerica** (26x; needs ~16%; my estimate ~18%; double-digit genset growth plus wind capacity nearly doubling, though the genset margin is thin). These are the only two where my estimate is at or near what the price needs.",
                },
                {
                    label: 'Full',
                    text: "**Elgi** (42x; needs ~22%; my estimate ~17%; growing 16–17% in constant currency with margins heading to 18%). **Kirloskar Brothers** (36x; needs ~20%; my estimate ~14%; guides double digits, with nuclear and US data centres as the upside). Both are good businesses whose prices already assume the upside case.",
                },
                {
                    label: 'Stretched',
                    text: "**KSB** (53x; needs ~25%; my estimate ~13%; grew 2–3% in H1). **Kirloskar Oil** (55x on consolidated earnings including the lender; needs ~25%; my estimate ~15%; guides about 23% a year to FY30 with margins falling now). **Greaves** (46x; needs ~23%; my estimate ~15% with a very wide range; the price includes a loss-making scooter business).",
                },
                {
                    label: 'Cheap for a reason',
                    text: "**Shakti** (27x; needs ~17%; margins halved and cash conversion of 18%). **Oswal** (9.4x; needs only ~5%, but operating cash has been negative for two years and the price has fallen 65% from its high).",
                },
            ],
            tables: [
                {
                    caption: 'What the price assumes',
                    columns: ['Company', 'P/E', 'Return on capital (5-yr range)', 'Growth the price needs', 'What it is delivering or guiding', 'My estimate (section 6)', 'Verdict'],
                    rows: [
                        ['Elgi Equipments', '41.6', '19–24%', '~22%', '+23% Q1 (16–17% constant currency)', '~17%', '**Full**'],
                        ['Kirloskar Pneumatic', '33.2', '18–30%', '~19%', '₹2,100cr guided (+19%)', '~18%', '**Plausible**'],
                        ['Kirloskar Brothers', '35.6', '11–28%', '~20%', 'Double digits guided', '~14%', '**Full**'],
                        ['KSB', '53.2', '21–25%', '~25%', '+2–3% H1', '~13%', '**Stretched**'],
                        ['Kirloskar Oil', '55.2', '10–19% (standalone)', '~25%', '$2bn by FY30', '~15%', '**Stretched**'],
                        ['Powerica', '26.0', '10–27%', '~16%', '+27% Q1', '~18%', '**Plausible**'],
                        ['Greaves Cotton', '46.1', '−1% to 10% (consolidated)', '~23%', 'Core 16–20%', '~15% (wide range)', '**Stretched**'],
                        ['Shakti Pumps', '26.9', '10–55%', '~17%', '₹5,000cr by 2029', '~8%', '**Stretched on cash**'],
                        ['Oswal Pumps', '9.4', '38–78%', '~5%', '+20–25% guided; Q1 −8%', '~5%', '**Cheap for a reason**'],
                    ],
                    note: 'P/E and live returns update with the dashboard; required growth uses the P/E shown on 21 September 2026. Kirloskar Oil’s P/E is on consolidated earnings including Arka Fincap.',
                },
            ],
        },
    ],

    verdicts: [
        {
            company: 'Kirloskar Pneumatic', rank: 1, stance: 'COMPOUNDER', segment: COMP,
            what: "Makes air compressors, refrigeration compressors (for cold storage, dairies, fisheries) and gas compression packages (CNG, oil and gas, biogas), and maintains more than 1,000 CNG stations. It makes its own forgings and castings.",
            view: "**The best combination of quality and price in the sector.** Return on capital has risen every year from 18% to 30%, it has no debt, and material cost fell from 47.6% to 43.9% of sales in a quarter when costs rose everywhere. It turned 66% of operating profit into cash over five years. It guides ₹2,100cr (+19%) at 18–20% margins; at 33x it needs ~19% a year, and I expect about 18%.",
            watch: 'Q2 catch-up after a soft Q1; Middle East package orders; Ziffra air-conditioning compressors ramping in FY28.',
        },
        {
            company: 'Elgi Equipments', rank: 2, stance: 'COMPOUNDER', segment: COMP,
            what: "Industrial air compressors sold worldwide under its own brand, about half outside India, plus a small automotive-equipment business. It makes its own motors and competes with Atlas Copco and Ingersoll Rand.",
            view: "**The strongest product moat on the page, at a full price.** Its compressors are the most efficient in about 70% of categories, warranty costs are under 1% of sales, and its Demand Match technology is winning new customers. Returns have held at 19–24% for five years, and cash conversion has risen to 78%. At 42x it needs ~22%; I expect about 17%.",
            watch: 'Price increases catching up by Q3; the new low-cost range against Chinese imports; US tariffs.',
        },
        {
            company: 'Kirloskar Brothers', rank: 4, stance: 'COMPOUNDER', segment: PUMP,
            what: "India's largest pump maker: small pumps for homes and farms, large engineered pumps for power, water, oil and gas, and nuclear plants, and packaged cooling and fire systems for data centres. Subsidiaries include SPP (UK and US).",
            view: "**A qualification moat, at a full price.** It is the world's largest maker of concrete volute pumps, holds 100% of nuclear metallic volute pumps, and is qualifying for primary circuits. Returns rose from 11% to 20–28%, and it turned 67% of operating profit into cash (₹1,533cr on ₹2,280cr over five years). At 36x it needs ~20%; I expect about 14%, so the price already assumes nuclear and US data centres deliver.",
            watch: 'Nuclear primary-pump orders; the US data-centre framework contract; UK service work returning.',
        },
        {
            company: 'Powerica', rank: 3, stance: 'SCALEUP', segment: ENG,
            what: "Assembles generator sets around Cummins engines for data centres and industry (81% of revenue), and owns 330 MW of wind farms selling power on 25-year contracts, plus wind construction work for others.",
            view: "**Cheap, cash-generative and two businesses in one.** The genset book grew 26% with ₹1,100cr of data-centre orders, but it earns only 5.6% on Cummins' engine. Wind earns 49%, rising to 82–83% on new projects, and owned capacity is set to nearly double to 634 MW. It turned 91% of operating profit into cash over five years (₹1,456cr on ₹1,607cr), though wind capex made free cash negative in FY25–FY26. At 26x it needs ~16%; I expect about 18%, the best fit of growth and price in the sector.",
            watch: 'Genset margin recovering from Q3; Cummins’ channel choices on data-centre projects; wind projects on schedule.',
        },
        {
            company: 'Kirloskar Oil', rank: 5, stance: 'PRICED', segment: ENG,
            what: "Makes diesel and gas engines and generator sets up to high horsepower, runs a wide genset distribution and service network, owns a pumps business (La-Gajjar), and holds a lending subsidiary (Arka Fincap) it plans to separate.",
            view: "**The strongest channel and service business, with margins going the wrong way.** It won its first hyperscale data-centre order and gained domestic share. Aftermarket has grown double digits for 12 quarters, and it holds ₹485cr of standalone net cash. It turned 73% of standalone operating profit into cash over five years. But the standalone margin fell from 13.5% to 11.2% as employee costs rose 40%. At 55x it needs ~25%; I expect about 15%.",
            watch: 'Margin back above 13% as price rises land; the Arka separation; NPCIL milestones.',
        },
        {
            company: 'KSB', rank: 6, stance: 'PRICED', segment: PUMP,
            what: "Indian arm of Germany's KSB: engineered pumps for power, nuclear, oil and gas; standard pumps for buildings, water and farms (including solar pumps); valves; and a spares and service business. Its financial year is the calendar year.",
            view: "**A nuclear franchise priced as if it were already earning.** It holds ₹1,235cr of nuclear orders and returns of 21–25%. But H1 sales grew only 2–3%, NPCIL's test bed delayed its pumps, and valves margins fell to single digits. Over five years it turned ₹1,468cr of operating profit into only ₹522cr of operating cash (36%) and ₹95cr of free cash. At 53x it needs ~25%; I expect about 13%.",
            watch: 'Gorakhpur pump testing from September; the eight-reactor tender; receivables from solar agencies.',
        },
        {
            company: 'Shakti Pumps', rank: 7, stance: 'CYCLICAL', segment: SOLAR,
            what: "India's largest solar-pump maker for government schemes (PM-KUSUM and state programmes), with its own motors, controllers and inverters, exports, and new businesses in rooftop solar, electric-vehicle motors and solar cells and modules.",
            view: "**Volume is booming; profit and cash are not.** Pumps installed rose 58%, but the margin halved to 10%. Five-year cash conversion is 18%, and about ₹1,770cr is owed to it. It is spending ₹1,500–1,700cr on solar cells and modules, and targets only about 15% margin once they are running. Over five years it collected ₹250cr of cash on ₹1,427cr of operating profit. At 27x it needs ~17%; I expect about 8%.",
            watch: 'PM-KUSUM 2.0 approval; collections from state agencies; the solar-module line starting in September.',
        },
        {
            company: 'Oswal Pumps', rank: 8, stance: 'CYCLICAL', segment: SOLAR,
            what: "Solar pumps and motors for government schemes, plus solar modules, and now rooftop solar (PM Surya Ghar) and wires and cables. It listed recently.",
            view: "**Priced for decline, and the cash says why.** Revenue fell 8% and margin fell 11 points in a year as tender prices dropped 9% and volumes fell. Receivables reached 229 days, and operating cash has been negative for two years. FY27 guidance of +20–25% leans on ₹800–1,000cr from a rooftop business it has just started. At 9.4x it needs only ~5%, about what I expect, but it is only cheap if the receivables are collected.",
            watch: 'Receivables coming down in Q3 as promised; the Maharashtra tender; whether rooftop revenue carries any profit.',
        },
        {
            company: 'Greaves Cotton', rank: 9, stance: 'TURNAROUND', segment: ENG,
            what: "Makes small diesel engines (three-wheelers, microcars), gensets, fire-pump and defence engines and automotive components, and owns most of Greaves Electric Mobility (Ampere scooters) and a vehicle-finance arm.",
            view: "**A decent core carrying a costly bet.** The core business grew 16–19% at 11–14% margins and converts 80% of profit to cash. But ₹331cr more went into the scooter business this year, and consolidated returns have been −1% to 10% for five years. At 46x it needs ~23%; I expect about 15%, with a very wide range depending on the scooter business.",
            watch: 'Scooter business reaching break-even in 4–6 quarters as promised; core margin recovering in H2.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Among the compressor makers, own Kirloskar Pneumatic and hold Elgi Equipments.** Both sell on the customer's electricity bill and make their own key parts. Kirloskar Pneumatic has rising returns, no debt and a price that matches its guidance. Elgi has the better product and global reach at a fuller price.",
            "**Among the pump makers, Kirloskar Brothers is the better buy and KSB the better-known name.** Kirloskar Brothers has turned nuclear qualification and data-centre packages into rising returns and converts profit to cash well, but at 36x its price already assumes the upside: I expect about 14% growth against the ~20% needed. KSB owns the longest nuclear record in India, but its growth stalled in H1, its cash conversion is poor, and 53x assumes the nuclear orders are already paying.",
            "**Among the engine makers, Powerica is the best buy and Kirloskar Oil the strongest franchise.** Powerica's wind farms carry a thin genset business, data-centre demand is strong, it converts 91% of operating profit into cash, and my ~18% growth estimate exceeds the ~16% its price needs. Kirloskar Oil has the best channel and a real data-centre win, but its margins must recover to justify 55x. Greaves Cotton's core is sound, but the price includes a scooter business that still loses money.",
            "**The solar-pump pair is at the bottom of a scheme cycle, and neither turns profit into cash.** Shakti Pumps is growing volume and spending heavily on solar cells. Oswal Pumps is cheap because its volume, price and collections all fell at once. Both depend on PM-KUSUM 2.0, which every management says is imminent.",
            "**What would change my view.** PM-KUSUM 2.0 approved with prices above Maharashtra's would lift both solar names quickly. Kirloskar Oil's margin back above 13% would make it the top engine pick. NPCIL clearing its test bed and ordering eight reactors would re-rate KSB and Kirloskar Brothers. A sign that batteries are cutting genset running hours faster than expected would hurt Kirloskar Oil and Powerica.",
            "**What to monitor next quarter.** Kirloskar Pneumatic: the Q2 catch-up. Elgi: price increases landing. Kirloskar Brothers: nuclear orders and the US framework. KSB: pump testing and H2 growth. Kirloskar Oil and Powerica: margin recovery. Greaves: scooter losses. Shakti and Oswal: the scheme decision and collections from state agencies.",
        ],
        bottomLine:
            "Sort by business, then check the cash. Own Kirloskar Pneumatic and Powerica, the two where my growth estimate matches or beats what the price needs; hold Elgi Equipments and Kirloskar Brothers, good businesses priced for their upside case; wait on Kirloskar Oil and KSB until margins and nuclear deliveries catch up with the price; and treat the solar-pump makers as a scheme cycle whose profits are still sitting in receivables.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/KIRLPNU/' },
        { label: 'Elgi Equipments Q1 FY27 analyst presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=7f9a307e-052e-44ab-b2ad-d832fac54572.pdf' },
        { label: 'Kirloskar Pneumatic Q1 FY27 earnings presentation', url: 'https://www.kirloskarpneumatic.com/documents/3010307/7918279/Investor+Presentation+Q1+FY27.pdf/1f9950ac-cac1-a7c0-3f65-1f392226b675?t=1784638441869' },
        { label: 'Kirloskar Brothers Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=9fd479cb-c122-45c4-89e5-0d7a30ae00d1.pdf' },
        { label: 'KSB institutional investors’ meet, 19 August 2026', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fcbb9518-aacd-4d7e-8656-681e1504839b.pdf' },
        { label: 'Kirloskar Oil Engines Q1 FY27 earnings presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=cf9b65f3-589a-4498-99d2-7cfa4ecdf82d.pdf' },
        { label: 'Powerica Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=49250ba5-d18b-4854-b661-0cfb7f7e0b05.pdf' },
        { label: 'Greaves Cotton Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=50abfc8f-8df0-4b0b-9434-419e016a3632.pdf' },
        { label: 'Shakti Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=f9d76706-2e38-4d54-a998-c556b1a602bc.pdf' },
        { label: 'Oswal Pumps Q1 FY27 investor presentation', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=59ac28fb-f1b3-418d-8753-61f736b91d76.pdf' },
        { label: 'India pump market: size, structure and shares — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-industrial-pump' },
        { label: 'India air compressor market: leading players and growth — Next Move Strategy Consulting', url: 'https://www.nextmsc.com/report/india-air-compressor-market' },
        { label: 'PM KUSUM 2.0: expected size and timing — Reslink Energy', url: 'https://www.reslink.org/blogs/pm-kusum-2-0-is-coming-india-s-rs-50-000-crore-agricultural-solar-push/' },
        { label: 'India\'s SHANTI Bill completes legislative process — World Nuclear News', url: 'https://www.world-nuclear-news.org/articles/indias-shanti-bill-completes-legislative-process' },
        { label: 'Solar module overcapacity to squeeze margins, drive consolidation: ICRA — Energetica India', url: 'https://www.energetica-india.net/news/solar-module-overcapacity-to-squeeze-oem-margins-drive-industry-consolidation-icra' },
        { label: 'SC makes interim stay absolute in Kirloskar trademark dispute — ANI', url: 'https://www.aninews.in/news/national/general-news/sc-makes-interim-stay-absolute-in-kirloskar-trademark-dispute-seeks-speedy-high-court-decision20260113154703/' },
        { label: 'India diesel generator market size and growth — Mordor Intelligence', url: 'https://www.mordorintelligence.com/industry-reports/india-diesel-generator-market' },
    ],
};
