import { BusinessProfile, OverviewSection } from './types';
import { industrialsComponentsCharts } from './card-data/industrials-components';

// Tab 2 of Industrials · Components and engineered parts: what each company actually does.
// Profiles are carried unchanged from the Industrial Manufacturing and Industrial Products notes.
// Revenue totals are the filed figures (Screener). Splits come from the companies' latest
// presentations, annual reports and calls; where a split is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation or call.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Every company here makes something that goes inside another company's product or plant, usually to that customer's drawing.",
        ],
        points: [
            {
                label: 'Parts inside motors, turbines and machines',
                text: "**Laminations and stator cores** (the stacked steel sheets at the heart of a motor or generator) from Pitti, **springs and fasteners** for wind turbines and machinery from Gala, and **precision-machined parts** for oilfield, automation and industrial equipment from Omnitech.",
            },
            {
                label: 'Parts inside cooling, power and gas equipment',
                text: "**Heat-exchanger coils** for commercial air-conditioning and data-centre cooling (KRN), **car and truck air-conditioners and compressors** (Subros), **transformer cores** cut from special electrical steel (Vilas) and **high-pressure gas cylinders** for CNG vehicles, city-gas stations and industry (Everest Kanto).",
            },
            {
                label: 'Instruments, production lines and coach fit-outs',
                text: "**Temperature sensors, specialised cables and electric heaters** for process plants (Tempsens), **robotic welding and assembly lines** for car, battery and ammunition makers (Patil), and **railway coach interiors and seating** (Airfloa).",
            },
        ],
    },
    {
        heading: 'Four ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Global equipment makers**', 'Pitti, Gala, KRN, Omnitech', 'Negotiated; metal costs reset quarterly or passed on with a lag', 'Normal credit terms, but stock builds as plants fill'],
                    ['**Many plant owners and equipment makers**', 'Tempsens', 'Quoted per order, with metal bought against each order', 'Slow: a 210-day cash cycle'],
                    ['**One large customer or a metal price**', 'Subros (Maruti), Vilas (transformer makers), Everest Kanto (vehicle and gas companies)', 'Negotiated by the customer, or set by steel and import prices', 'Fast at Subros; slower where stock and specialist orders build up'],
                    ['**Projects and railways**', 'Patil, Airfloa', 'Quoted per project, or tendered', 'Milestones; slow for railway work'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Pitti Engineering',
        inShort: ["**Makes the magnetic core of electric motors and generators**: electrical-steel laminations, finished stator and rotor assemblies, castings and machined parts for Wabtec, Siemens, Cummins, ABB and Nidec.", "**Good:** designed into customers' motors, steel costs passed on, and lamination and assembly volumes up 26% in Q2 FY27. **Bad:** about ₹539cr of net debt at September, a margin that slipped to 15.8% in Q2, and heavy spending on land and buildings have pulled returns on capital down from 19% to about 15%, and net leverage sits above the level Ind-Ra says could trigger a downgrade while a mostly debt-funded ₹290cr plant is built.", "**Verdict: own.** A qualified supplier to growing motor and generator markets, with a clear path to about ₹2,500cr of sales in FY28."],
        tagline: "India's leading maker of motor and generator laminations, moving up to complete stator and rotor assemblies with its own castings and machining.",
        revenue: '₹1,913cr (FY26, consolidated)',
        products: [
            { name: 'Loose laminations', text: "Thin stamped sheets of electrical steel that are stacked to form the core of a motor or generator. This is the volume business, with 108,000 tonnes of sheet-metal capacity after the latest expansion." },
            { name: 'Stator and rotor assemblies', text: "Stacked and fitted cores, often with shafts and machined castings, delivered ready for the customer to wind. Volumes of these higher-value assemblies grew 37% in Q1 FY27, against 16% for loose laminations." },
            { name: 'Castings and machined parts', text: "Iron castings (24,000 tonnes of capacity) and machined components for mining, railway and off-highway equipment. Machining runs at 86% of capacity and is the main bottleneck, not orders." },
            { name: 'Niche parts', text: "Components for marine electric propulsion and generators, and machined stainless-steel plates for a European hydrogen-electrolyser maker (a small business of about €2 million a year)." },
        ],
        revenueText: "By end market in Q2 FY27: **railway traction 27%**, power generation 16%, industrial and commercial 12%, **mining, oil and gas 10%**, special-purpose motors 8% and **data centres 7%** (5% in Q1), with Cummins, Marathon and Nidec ordering more. Q2 volumes were 21,600 tonnes of laminations and assemblies (up 26%) and 3,086 tonnes of castings and machined parts (up 6%). Two subsidiaries were merged into the parent in September 2026, so results are now reported standalone. In Q1 FY27 direct exports were roughly flat at about ₹137–139cr, but a growing share of what it sells to global makers' Indian plants is later exported. Q1 volumes were 19,200 tonnes of laminations and assemblies (up 18%) and 3,191 tonnes of castings and machined parts (up about 4% by the presentation's own table; the call said 14%).",
        mixes: [
            { caption: 'Revenue by end market, Q1 FY27 (company)', parts: [{ label: 'Railway traction', share: 28 }, { label: 'Power generation', share: 15 }, { label: 'Industrial and commercial', share: 12 }, { label: 'Mining, oil and gas', share: 10 }, { label: 'Special-application motors', share: 9 }, { label: 'Data centres', share: 5 }, { label: 'Renewables', share: 3 }, { label: 'Others', share: 17 }] },
        ],
        customers: ["**Global motor and generator makers**: Wabtec and Siemens (railway traction), Cummins, Marathon, Nidec and Kohler (generator sets, including for data centres), and ABB and CG (industrial motors).", "**Mining and off-highway equipment makers**, especially in North America, buying castings and machined parts; mining, oil and gas doubled to 10% of revenue in a year."],
        difficulty: { level: 'High', text: "Laminations need precise tooling, tight tolerances and consistent electrical steel; assemblies add shaft fitting, casting and machining. Each part is validated for a specific motor, and a failed traction motor or generator is expensive, so customers take time to approve a new supplier." },
        moat: "Once a lamination or assembly is approved for a motor, the customer must re-test the motor to switch supplier, and Pitti offers laminations, castings, machining and assembly under one roof. The weakness is that loose laminations are a competitive volume product, and China has the largest capacity.",
        salesDrivers: ["**Electrification**: every motor and generator needs a laminated core, from railway traction to wind turbines and pumps, so demand grows with electricity use rather than with one industry.", "**Data centres and backup power**: generator-set makers such as Cummins, Marathon and Nidec are ordering more assemblies. Management says it is being careful because the pace of AI data-centre spending may not last.", "**China-plus-one and Europe's high costs**: dearer energy and labour in Europe are pushing global makers to source from India, directly or through their Indian plants.", "**Capacity**: the ₹150cr expansion started in Q1 FY27, and a ₹290cr Hyderabad casting plant is due in Q1 FY30. The FY27 target is 82,000 tonnes of laminations against 108,000 tonnes of capacity, so more lamination capacity will be needed in FY28; the ₹450cr Bengaluru plant approved in October 2026 takes it to 160,000 tonnes and machining to 13.14 lakh hours by FY31.", "**Management targets** about ₹370cr of operating profit in FY27 and about ₹2,500cr of sales in FY28 at a 17% margin, with margins above 18% later."],
        inputs: "**Electrical steel sheet is the main input** for laminations, plus iron and steel for castings and shafts, and LPG and power for the foundry. Materials were 61% of sales in FY26.",
        costEffect: "**Passed on.** Steel costs are passed to customers, and when foundry LPG costs jumped during the war, customers compensated the extra cost. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (17% to 11%). **What happened:** electrical steel has no Indian price index, so I use India's hot-rolled steel price index, which fell from 100 in Q1 FY24 to 94 in Q1 FY27. The margin rose from 14.5% to 16.3% over the same period because of the shift to assemblies and machined parts, not cheaper steel; staff hired for the new capacity held it flat this year.",
        competitors: [
            { name: 'Chinese lamination and casting makers', note: 'Hold the largest capacity worldwide; customers adding India as a second source are moving supply away from them.' },
            { name: 'European lamination and foundry suppliers', note: 'Losing ground on energy and labour costs as customers shift sourcing to India.' },
            { name: 'Stamping-only or casting-only suppliers', note: 'Can compete on single parts, but cannot offer laminations, castings and machining as one assembly.' },
        ],
        position: "**A category leader in Indian traction and industrial motor laminations**, and one of the few suppliers offering laminations, castings, machining and assembly under one roof.",
        money: "Net debt was about ₹539cr at September 2026 (borrowings ₹641cr less ₹102cr of cash, Q2 presentation), up from the ₹491cr the company gave for June, after about ₹140cr of capex cash in H1 (including land); H1 operating cash was a strong ₹323cr. It deferred its Maharashtra incentive claim to FY28 to recover more of the ₹400cr it is eligible for (about ₹40cr a year), so FY27 profit has no incentive income. It is spending ₹290cr on the Hyderabad casting plant (₹60cr spent so far) and on 22 October 2026 the board approved ₹450cr for a greenfield Bengaluru plant that gathers its scattered Karnataka units in one place and lifts lamination capacity from 108,000 to 160,000 tonnes by FY31, funded from its own cash and debt. About ₹70cr of state incentives is still to be received. Promoters hold **54%**, down from 59% in September 2023.",
        watch: ["Margin back above 17% by Q4 FY27 from 15.8% in Q2 (company's adjusted figure), as fuel costs pass through from January; management sees 17%-plus as sustainable and 18% possible.", "Net debt and returns on capital while the Hyderabad and Bengaluru plants are built.", "Whether direct exports pick up in the second half, as promised."],
        charts: industrialsComponentsCharts['Pitti Engineering'],
    },
    {
        company: 'Gala Precision Engi.',
        inShort: ["**Makes disc springs, coil springs and high-strength fasteners** for wind turbines and industrial machinery, sold directly to Vestas, Siemens, ABB, Schaeffler and John Deere.", "**Good:** hard-won vendor approvals, a firm order book up 30–40% and ₹12cr of net cash. **Watch:** working capital of about 180 days by its own count (294 on Screener's), negative free cash in FY25 and FY26, an income-tax search in August, a Nord-Lock patent suit, and the Chennai plant's second phase and the Wada expansion, both running late.", "**Verdict: own.** A small, well-placed supplier taking share from European makers and guiding to 20–25% growth a year."],
        tagline: "An Indian maker of safety-critical springs and fasteners, taking share from European suppliers in wind energy and industrial machinery.",
        revenue: '₹314cr (FY26, consolidated)',
        products: [
            { name: 'Disc and strip springs (DSS)', text: "Cone-shaped washers that act as heavy-duty springs in machinery, wind turbines and valves, plus Gallock wedge-lock washers that stop bolts working loose. The largest segment, up 31% in Q1 FY27." },
            { name: 'Special fastening solutions (SFS)', text: "High-tensile studs and anchor bolts, and now bolts and nuts from the new Chennai plant, mostly for wind turbines. Often supplied as kits with bought-in nuts and washers, which are 15–20% of sales." },
            { name: 'Coil and spiral springs (CSS)', text: "Custom coil springs for industrial and mobility uses, all sold directly to equipment makers or their first-tier suppliers. A seat-belt retractor spring was just approved after full audits." },
            { name: 'New areas', text: "A first bulk order from an Indian electrolyser maker, and offshore-wind fasteners for a European turbine maker, expected to reach 10% of fastener sales by the end of FY27." },
        ],
        revenueText: "Disc springs were **54% of Q1 FY27 revenue**, fasteners 29% and coil springs 17%. Wind-turbine fasteners were about **25–26% of total sales** in the quarter. About 85% of what it sells is made to customers' own drawings and 10–15% goes to fastener distributors. In Q1 FY27 India was 66% of revenue, Europe 25%, the Americas 6% and others 3%; exports were 35% of FY26 revenue.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company)', parts: [{ label: 'Disc and strip springs', share: 54 }, { label: 'Fasteners (SFS)', share: 29 }, { label: 'Coil and spiral springs', share: 17 }] },
        ],
        customers: ["**Global equipment makers, billed directly**: Vestas, Siemens, ABB, Schaeffler and John Deere, among about 175 active customers in 25 countries.", "**The largest customer was 16% of FY26 revenue** (24% in FY25), with wind-turbine makers the most important group; distributors of standard disc springs and washers take the rest."],
        difficulty: { level: 'High', text: "Springs and fasteners must survive years of vibration and load inside a turbine or machine. Entering a new customer takes 12–24 months of plant audits, sample approval and trial orders, and some buyers insist that coating such as hot-dip galvanising is done in-house." },
        moat: "The parts are a few percent of a wind turbine's cost but critical to safety, so buyers stick with approved suppliers; Gala says it has not lost a customer on quality or delivery in 25 years, and its share at a customer grows from 5–10% to 50–75%. The weakness is its dependence on wind and the slow pace at which European buyers switch.",
        salesDrivers: ["**Winning share from European suppliers**: Gala offers customers 10–18% savings and grows its share once approved; orders were up about 40% in Q1, with a firm order book of ₹110cr on 1 July.", "**Wind-energy build-out**: fasteners are 3–4% of a wind turbine's cost, and each commodity buyer at a turbine maker is under pressure to cut costs.", "**The Chennai fastener plant**: Phase 1 (4,600 tonnes) runs at 70–80% of capacity; Phase 2 is due in Q3–Q4 FY27, and bolts open a market as large again as studs.", "**New niches**: seat-belt retractor springs (displacing a German supplier), electrolyser parts, and bolts for construction equipment.", "**Management guides 20–25% revenue growth and 17–19% margins** for FY27 and FY28."],
        inputs: "**Alloy and spring steel** (bar, wire and strip), bought-in nuts and washers for kits, and power for heat treatment and galvanising; power and factory costs are a large 24% of sales. Materials were 40% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Customers accept price increases for raw materials and some other costs after a delay, and Gala still offers them savings against European suppliers. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (17% to 13%). **What happened:** India's alloy and stainless steel bar price index was flat (100 in Q1 FY24, 99 in Q1 FY27), while the margin slipped from 18.3% to 16.3%. Steel was not the reason: the new Chennai plant is not yet fully used, and the first quarter carries only 20–22% of a year's sales against a full quarter of fixed costs.",
        competitors: [
            { name: 'Schnorr, Mubea and other European disc-spring makers', note: 'Long-established incumbents; Gala undercuts them by 10–18% and gains share slowly as customers re-qualify.' },
            { name: 'Nord-Lock', note: 'The best-known maker of wedge-lock washers, the product Gala sells as Gallock.' },
            { name: 'Chinese fastener makers', note: 'Strong in standard fasteners; Gala focuses on custom, high-tensile parts made to drawings.' },
        ],
        position: "**A small but growing supplier on global makers' approved-vendor lists**, taking share from long-established European producers; it recently displaced a German supplier of seat-belt retractor springs.",
        money: "Net cash of ₹12cr at March 2026 (Screener). The next expansion, on 10.15 acres next to the Wada plant, will cost about ₹40–45cr, mostly in FY28; the land deal is only at the MoU stage. Working capital is about 180 days by the company's count and 294 on Screener's, and KPMG has been hired to reduce it; operating cash was only ₹10cr in FY26. The income-tax department searched its office and the promoter's home on 18 August 2026; the company said on 24 August that the proceedings had ended with no material impact on operations, and any demand is not yet known. Nord-Lock has sued it over its Gallock washers (₹2cr claimed so far). Promoters hold **54%**, down slightly from 55% in September 2024.",
        watch: ["The KPMG working-capital plan, whether cash flow improves, and any demand from the income-tax search.", "Chennai Phase 2 and the Wada land deal, both behind schedule.", "Margin getting into the guided 17–19% range.", "The Nord-Lock patent suit over its Gallock washers."],
        charts: industrialsComponentsCharts['Gala Precision Engi.'],
    },
    {
        company: 'KRN Heat Exchan',
        inShort: ["**KRN Heat Exchanger and Refrigeration makes fin-and-tube coils** for commercial air-conditioning, data centres and refrigeration, and has added bus air-conditioning and railway products.", "**Good:** revenue doubled in Q1 FY27, data-centre sales tripled and copper and aluminium costs pass straight to customers. **Watch:** free cash of −₹312cr in FY26, ₹700cr of equity raised in about 18 months to fund growth and stock, an auditor's flag on how it books revenue, no published order book, and Screener has only three years of figures.", "**Verdict: wait.** Its profit is not arriving as cash: operating cash was −₹76cr against ₹168cr of profit over FY24–FY26 (the three years on record), and −₹114cr in FY26 alone. The data-centre growth is real, but it returns to follow only when operating cash turns positive and converts most of its profit, with Vertiv ordering in volume."],
        tagline: "A Rajasthan maker of heat exchangers for commercial and industrial cooling, selling only to equipment makers in India and abroad.",
        revenue: '₹600cr (FY26, consolidated)',
        products: [
            { name: 'Fin-and-tube heat exchangers', text: "Copper-and-aluminium coils made to each customer's design, up to about 3 metres by 1.5 metres, for commercial air-conditioning, chillers and data-centre cooling. This is still most of the business." },
            { name: 'Bar-and-plate heat exchangers', text: "Tougher exchangers for railways and other OEMs, targeted at ₹40–50cr this year; it is lowest bidder in a railway tender but has no order yet." },
            { name: 'Refrigeration units', text: "Complete units including ammonia evaporators and dry coolers, expected at about ₹150cr this year, at slightly lower margins." },
            { name: 'Bus air-conditioning', text: "From the Sphere Refrigeration acquisition, aimed at an Indian market of about ₹1,000cr growing with electric buses. Micro-channel coils for data-centre chillers are about a year away." },
        ],
        revenueText: "The company does not split revenue by product. **Data-centre sales were about ₹65cr in Q1 FY27 against ₹20cr a year earlier**, out of ₹252cr, and about 20% of that was export. Exports were about ₹100cr in FY26 and are targeted at ₹200cr in FY27. Daikin is the largest customer at the old plant.",
        customers: ["**Air-conditioning makers**, led by Daikin, where KRN earns an almost fixed rupee margin.", "**Data-centre cooling makers in North America**, where local coil makers cannot keep up; Vertiv has passed KRN's audit and ordered samples.", "**Bus makers and Indian Railways**, with development orders for locomotive cab air-conditioning from BLW."],
        difficulty: { level: 'Medium', text: "The work is custom design and precise brazing rather than rare technology; its edge is speed, flexibility and spare capacity. The harder products, micro-channel and plate exchangers, are still being developed." },
        moat: "Customers stay because the coils are designed into their units and switching means re-qualifying. The weakness is a thin technical barrier, which matters if the North American shortage ends.",
        salesDrivers: ["**North American data-centre build-out**: rivals such as Modine cannot meet demand, so KRN wins on lead time despite a 25% US import duty.", "**Commercial air-conditioning and refrigeration in India**, where it avoids the cyclical room-AC market.", "**New capacity**: the new plant, six times the old one, is targeted at 50% utilisation in FY27 and 80% in FY28, with a Bangalore plant a year away; revenue is guided above ₹1,000cr in FY27.", "**Bus and railway air-conditioning**, where it targets about 15% of a ₹1,000cr bus market (official Q1 call; a later webinar gave conflicting figures) and has railway cab-AC development orders."],
        inputs: "**Copper tube and aluminium fin, plus steel sheet for casings.** Materials were 69% of sales in FY26.",
        costEffect: "**Passed on.** Contracts reset each quarter against average LME copper and aluminium prices and the rupee-dollar rate, and it holds about 2.5 months of stock, so cost changes reach customers before they hit margins. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (19% to 12%). **What happened:** India's copper price index rose about 52% from Q2 FY24 to now, while the operating margin went from about 18% to 19%, helped by exports, bus and bar-and-plate products that pay better than the Daikin work.",
        competitors: [{ name: 'Modine, Direct Coil, Can Coil', note: 'North American coil makers; bigger, but short of capacity for data-centre demand.' }, { name: "Equipment makers' own coil lines", note: 'Large AC makers can make coils in-house; KRN sells to those that outsource.' }],
        position: "**India's largest independent maker of commercial heat exchangers**, by management's own account.",
        money: "Net debt of **₹141cr** (Screener, March 2026), before a ₹350cr share placement (QIP) on 1 June 2026 at ₹1,060, about 5% below the market-based floor price, a 5% dilution; that followed a ₹350cr IPO in 2024. Cash from operations was minus ₹114cr in FY26 as stock piled up. A Bangalore plant and new Rajasthan land for bus and rail work are planned. The standalone auditor flagged revenue recognition (fast growth, a new trading activity and sales to its own subsidiary), it carries ₹29.4cr of export obligations under duty-free import schemes, and the incentives assumed in its margin target are not yet booked. Promoters hold **65.7%**, down from 71% in September 2024: the new shares took them to 67.2%, and on 9 June 2026 they sold another 1.5% through an offer for sale.",
        watch: ["Vertiv samples turning into volume orders.", "Stock and receivables falling back so cash flow turns positive.", "Micro-channel launch within a year.", "The auditor's revenue-recognition flag (trading sales and sales to its own subsidiary), and any further promoter selling."],
        charts: industrialsComponentsCharts["KRN Heat Exchan"],
    },
    {
        company: 'Omnitech Engineering',
        inShort: ["**A Rajkot precision machining company** that makes components and sub-assemblies to five-micron tolerances, mainly for US oilfield-services firms.", "**Good:** a margin around 30%, rare for machining, and an order book above ₹3,000cr. **Watch:** the margin slid from 38% to 30% in three quarters and Q1 profit leaned on a depreciation change, energy is half of revenue, customers own the designs, cash flow has been negative, and Screener has only four years of figures.", "**Verdict: wait.** Its profit is not arriving as cash: operating cash was −₹11cr against ₹174cr of profit over FY23–FY26 (the four years on record), and −₹2cr in FY26. A strong order book, but it depends on oilfield customers; it returns to follow when operating cash turns positive and converts most of its profit at a 30% margin."],
        tagline: "An export-focused contract manufacturer of high-precision machined parts and assemblies for energy, automation and industrial equipment makers.",
        revenue: '₹511cr (FY26, consolidated)',
        products: [
            { name: 'Energy components', text: "Machined parts in stainless steel, Inconel and alloy steel for oilfield-services companies and power generation, built to customers' drawings." },
            { name: 'Motion control and automation', text: "Precision parts and assemblies for automation equipment makers, on short 3–4 month order cycles." },
            { name: 'Industrial equipment', text: "Components and sub-assemblies for industrial machinery makers, increasingly including assembly and testing." },
            { name: 'Aerospace and defence', text: "First-article samples are in approval and Nadcap accreditation for special processes is in progress; included in the 7% other revenue." },
        ],
        revenueText: "In Q1 FY27 **energy was 49% of revenue** (pure oil and gas below 40%), motion control 24%, industrial equipment 19% and others 7%. **78% was export, with North America 52%.** Of the ₹3,055cr order book (July 2026), 77% is energy; about ₹1,900cr is two master agreements with oilfield companies, including a Weatherford agreement worth more than $100m, executed against customer schedules, and management expects only ₹50cr or more from them this year.",
        mixes: [
            { caption: 'Revenue by industry, Q1 FY27 (company)', parts: [{ label: 'Energy', share: 49 }, { label: 'Motion control', share: 24 }, { label: 'Industrial equipment', share: 19 }, { label: 'Other', share: 7 }] },
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'North America', share: 52 }, { label: 'Asia', share: 27 }, { label: 'India', share: 17 }, { label: 'Europe and UK', share: 3 }] },
        ],
        customers: ["**Oilfield-services majors** such as Weatherford, SLB and Halliburton.", "**Industrial and automation makers** such as Oshkosh, ABB and Siemens; 256 customers in 24 countries in all."],
        difficulty: { level: 'High', text: "Five-micron tolerances in hard materials, with testing, welding and surface treatment in-house, and long customer qualification cycles; aerospace adds Nadcap and first-article approvals." },
        moat: "Qualification takes a long time and customers prefer one supplier handling the whole process, so switching is costly. The weakness is that the customer owns the design and energy is half of sales.",
        salesDrivers: ["**US oilfield and energy spending**, which drives the two large multi-year orders.", "**Customers moving supply away from China** towards qualified Indian machinists.", "**Capacity**: about 32 lakh machine-hours today (roughly ₹800–900cr of revenue), rising to 42–43 lakh hours after a ₹250cr expansion due in FY28, 1–1.5 months late.", "**New industries**: aerospace and defence approvals over one to three years; management guides 35–40% annual growth."],
        inputs: "**Stainless steel, Inconel (under 15%), carbon and low-alloy steel, aluminium and titanium bars and forgings.** Materials were 24% of sales in FY26, though the quarterly share rose from 20% to 28% over the last three quarters.",
        costEffect: "**Mostly insulated.** Materials are a small part of cost; staff, machine time and other costs matter more. Metal price changes are passed on at quarterly reviews with a 2–3 month lag, but there is no energy clause. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 2 points (33% to 31%). **What happened:** India's steel forging price index rose about 5% from Q3 FY25 to now, and the operating margin eased from about 32% to 30.5%, mainly from product mix and spending on new programmes rather than metal prices.",
        competitors: [{ name: 'Chinese and other low-cost machine shops', note: 'The suppliers customers are moving away from; still cheaper on simpler parts.' }, { name: 'Azad Engineering and other Indian precision makers', note: 'Compete for energy and aerospace machining work from global customers.' }, { name: "Customers' own machining", note: 'Large OEMs can bring work back in-house.' }],
        position: "**A niche, export-led precision machinist** whose margins are high for its industry because it takes on difficult, low-volume, high-mix work.",
        money: "Net debt of about **₹270cr** (Screener, March 2026); the company reports ₹390cr of debt and ₹134cr of cash in June 2026. It listed in 2026 and used ₹50cr of IPO money to repay debt. Cash from operations was negative in FY25 and roughly zero in FY26 as working capital grew, though days fell from 294 to 233 in Q1 FY27. It switched to straight-line depreciation this year, which cut the Q1 charge from ₹13.5cr to ₹6.3cr. Its borrowings carry personal guarantees of directors and a relative, and the auditor could not confirm the edit log of its stock-records software. Promoters hold **74%**.",
        watch: ["New Chhapara plants starting in FY28.", "Working capital falling further and cash flow turning positive.", "Aerospace approvals and less reliance on energy.", "Margin holding at 30% without help from the depreciation change."],
        charts: industrialsComponentsCharts["Omnitech Engineering"],
    },
    {
        company: 'Tempsens Instruments',
        inShort: ["**Makes temperature sensors, specialised cables and electric industrial heaters** from Udaipur, with 15 units including five abroad; listed in August 2026.", "**Good:** sales more than doubled in four years, 60% of revenue comes from customers buying more than one product, and no end-market is above 22%. **Watch:** the margin slipped to 20% in Q1 FY27 as staff costs rose 45%, the cash cycle is 210 days, and the cost of four new plants is not disclosed.", "**Verdict: wait.** The right kind of business; it must now show its margin and cash as a listed company."],
        tagline: "A temperature-sensing, electric-heating and specialised-cable maker, recently listed, with 15 units, five of them abroad.",
        revenue: '₹445cr (FY26, consolidated)',
        products: [
            { name: 'Temperature sensors', text: "Thermocouples, resistance thermometers, infrared pyrometers and thermal cameras for industrial processes; 44.6% of FY26 revenue. Frost & Sullivan puts it at 10.5% of Indian contact and 21.3% of non-contact sensors, and it is the only Indian maker of the latter." },
            { name: 'Electric heating', text: "Process and component heaters and furnaces, now including medium-voltage heaters for green hydrogen and battery storage; 20.7% of FY26 revenue, up from 3.9% in FY24 after the Marathon Heater merger." },
            { name: 'Specialised cables', text: "High-temperature instrumentation cables and mineral-insulated metal-sheathed cables, partly from its own alloys; 34.7% of FY26 revenue." },
        ],
        revenueText: "By product, FY26 revenue was **sensing 44.6%, cables 34.7% and heating 20.7%**. India was 71.5% and exports 28.5%, rising to 34% in Q1 FY27 as German and Polish units were consolidated; about two-thirds is project and OEM work and a third replacement. Sales grew from **₹194cr in FY22 to ₹445cr in FY26**, part of FY25's jump being the Marathon merger (₹70–75cr). In **Q1 FY27 sales were ₹119cr, up 34%** from ₹89cr a year earlier.",
        mixes: [
            { caption: 'Revenue by product line, FY26 (company)', parts: [{ label: 'Temperature sensing', share: 45 }, { label: 'Specialised cables', share: 35 }, { label: 'Electrical heating', share: 20 }] },
        ],
        customers: ["**Process plants**: petrochemicals were 21.5% of FY26 revenue, metals 19.7%, power 12.3%, defence and nuclear 7.0% and glass 6.7%; more than 3,800 customers, the top ten only 18.6%.", "**Traders and equipment makers** (about 19% together); OEM supply is meant to pass a quarter of revenue from FY28.", "**Overseas buyers** served from units and joint ventures in Germany, Poland, Indonesia and Korea; exports were 28.5% of FY26 revenue."],
        difficulty: { level: 'Medium', text: "A first approval in a critical plant takes three to five years; it holds UL, ATEX, IECEx, PESO and ASME approvals and makes its own mineral-insulated cable and alloys. Ordinary uses face many rivals, and ICRA calls entry barriers low." },
        moat: "Sensors cost under 1% of the plant they protect but are safety-critical, so buyers stay with a proven supplier: a public-sector customer that began with sensors in 2004 now buys cables, pyrometers, furnace cameras and heaters. The weakness is that simpler uses are crowded and recent export growth came mainly from acquisitions.",
        salesDrivers: ["**Industrial spending**: sensors and heaters go into factories and process plants, so sales follow plant building and output.", "**Replacement demand**: sensors wear out, and replacement was about a third of FY26 revenue.", "**Overseas plants**: five countries outside India, which should help it win orders abroad.", "**Guidance and new plants**: management expects about 25% growth in FY27, and four new units (OEM sensors, medium-voltage heaters, cables, vehicle heating cables) with about ₹500cr of peak revenue between Q4 FY27 and Q3 FY28, which it stresses is not a forecast."],
        inputs: "**Not disclosed in detail.** Cables and heating elements are metal-heavy, and the chart tracks copper as a guide. Materials were 54% of sales in FY26, down from 59-62% in FY22-FY24, while staff costs rose from 8% to 14%.",
        costEffect: "**Mostly passed on.** Metal is bought when an order is booked, so price moves go into the quote. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (23% to 18%). **What happened:** India's copper price index rose 30% between Q1 FY26 and Q1 FY27, and the margin fell from 23.6% to 20.2%. Management blamed hiring ahead of new plants (staff costs +45%) and newly consolidated European units, and promises recovery in the second half.",
        competitors: [{ name: 'Fragmented Indian makers and importers', note: 'ICRA calls entry barriers low in ordinary uses; imports dominate non-contact sensors, where Tempsens is the only Indian maker.' }],
        position: "**India's largest maker of temperature sensors**, with about 10.5% of contact and 21.3% of non-contact sensors (Frost & Sullivan, for its prospectus).",
        money: "Net debt of **₹44cr** (Screener, March 2026): ₹78cr of borrowings against ₹34cr of cash, with another ₹40cr in investments; ₹55cr of the ₹95cr of new IPO money has since repaid debt. Fixed assets jumped in FY25 (₹99cr to ₹286cr) mainly because the Marathon Heater merger added about ₹106cr of goodwill and intangibles. Inventory rose from 125 to 170 days in two years and the cash cycle is 210 days. At the August 2026 listing, ₹555cr of the ₹650cr issue was sold by five individual shareholders, not the managing family. A subsidiary faces an ₹11cr civil claim. Promoters hold **65.7%**.",
        watch: ["The margin recovering in H2 FY27, as promised.", "Inventory days falling from 170 and operating cash rising.", "The four new plants starting on time, and what they cost."],
        charts: industrialsComponentsCharts['Tempsens Instruments'],
    },
    {
        company: 'Patil Automation',
        inShort: ["**Builds complete robotic production lines** in Pune for car body welding, electric-vehicle and engine assembly, ammunition making and battery packs.", "**Good:** fast growth, a net margin of about 10% and a new plant that roughly doubles capacity. **Bad:** each order is a one-off project, the order book covers less than half of this year's target, cash is tied up in unfinished work, rent to its MD and a director is about 29% of standalone profit, and it is changing how its IPO money is used.", "**Verdict: wait.** Guidance needs orders it has not yet won."],
        tagline: "A Pune maker of turnkey robotic and automated production lines, mostly for car and electric-vehicle makers, with growing defence and battery work.",
        revenue: '₹150cr (FY26, standalone)',
        products: [
            { name: 'Car body welding lines', text: "Robotic lines that weld a car's body shell. This is its original business with car makers and their suppliers." },
            { name: 'Electric-vehicle and assembly lines', text: "Assembly lines for electric and petrol vehicles; electric-vehicle work is about a third of total business." },
            { name: 'Engine and gearbox lines', text: "Fully conveyorised lines to assemble engines, axles and gearboxes, through Pentaco Automation, in which it holds 60%." },
            { name: 'Defence lines', text: "Automated lines to make shells, bullets and small arms, including through MII Robotics (60%), which has a ₹12cr order for this year." },
            { name: 'Battery-pack and storage-container lines', text: "Lines that turn battery cells into modules, packs and grid storage containers, at ₹15-30cr a line and 4.5-6 months to deliver." },
        ],
        revenueText: "Group revenue in FY26 was about **₹172cr**: the company itself **₹157cr** (Screener shows ₹150cr), Pentaco ₹18cr and MII Robotics ₹2.3cr. About **33% of business is electric-vehicle work**. The **₹118cr order book is about 60% automotive and 40% non-automotive** (defence, battery lines and heavy welding).",
        mixes: [
            { caption: 'Order book by end market, May 2026 (company)', parts: [{ label: 'Automotive', share: 61 }, { label: 'Defence, battery lines, heavy welding', share: 39 }], note: 'The company said 60-62% automotive and 40-42% non-automotive.' },
            { caption: 'Revenue by company, FY26 (company, before group adjustments)', parts: [{ label: 'Patil Automation', share: 89 }, { label: 'Pentaco Automation', share: 10 }, { label: 'MII Robotics', share: 1 }] },
        ],
        customers: ["**Car, two-wheeler and electric-vehicle makers and their suppliers**, including Hero, for whom it builds lines that go to plants abroad. About 60% of automotive customers come back for new models.", "**Defence factories and government bodies**, helped by MII Robotics' record with government buyers.", "**Battery and energy-storage makers** building packs and containers for solar parks."],
        difficulty: { level: 'Medium', text: "A turnkey line needs design, fabrication, robot programming and a full trial run; Patil builds and tests the whole line in its own plant before shipping, with a 160-person design office. The parts are bought in and the skills exist at many small integrators." },
        moat: "Customers come back because Patil knows their lines and delivers in 4-4.5 months where others take about 6. But the market is fragmented, entry is easy and every order is a fresh bid.",
        salesDrivers: ["**Customers' factory spending**: new models, electric-vehicle launches and plant expansions decide orders; a line lasts 6-7 years, then needs changes.", "**Order wins**: guidance is ₹260-270cr for FY27 and ₹380-385cr for FY28, against a ₹118cr order book and ₹800cr of bids submitted. Management says it could win more than 30% of bids but picks by margin and payment terms.", "**Capacity**: the new 59,000 sq ft Pune plant (opened late 2025) and Faridabad (April 2026) take capacity to about ₹250-300cr; FY28 needs another plant, not yet decided.", "**New markets**: defence and battery-storage lines, where it says it is 20-25% cheaper than Chinese suppliers. It targets ₹700cr+ of group revenue by 2030."],
        inputs: "**Steel structures, robots, motors, conveyors and control gear**, mostly bought in India. Materials were 53% of sales in FY26.",
        costEffect: "**Mostly passed on.** If input prices rise more than 1-2% the customer amends the order, and prices are settled at the end of each 4-5 month project. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (13% to 8%). **What happened:** India's hot-rolled steel price index fell 6% between H1 FY25 and H2 FY26, and the margin went from 13.8% to 11.4%. Steel had little to do with it: the margin swings between about 11% and 14% from half to half with the mix of projects delivered.",
        competitors: [{ name: 'Wipro PARI', note: 'The largest Indian rival in assembly lines, much bigger than Patil.' }, { name: 'Comau, Jendamark, Faith Automation', note: 'Specialists in parts of the market: Jendamark in assembly lines, Faith in spot welding; Comau is Italian.' }, { name: 'Chinese line builders', note: 'Patil says it is 20-25% cheaper using Indian parts.' }],
        position: "**One of 10-15 line builders in its niche**, most of them smaller; it claims to be unusual in covering cars, electric vehicles, defence, batteries and heavy welding under one roof.",
        money: "Net debt of **₹6cr** (Screener): ₹19cr of borrowings against ₹13cr of cash; management says it has no long-term debt. About ₹18.5cr of IPO money was still unspent in May 2026, and ₹57cr of work in progress (a third of a year's sales) sits on the balance sheet. Operating cash flow was -₹4cr in FY26. In September it proposed changing the use of the unspent IPO money. Related-party costs are large: ₹4.64cr of factory rent to the MD and a director (about 29% of standalone profit), ₹3.5cr of their salaries and about ₹4.5cr of services from relatives' firms. Promoters hold **69.3%**, unchanged since listing.",
        watch: ["New orders large enough to reach the ₹260-270cr target.", "Work in progress and operating cash flow.", "The decision on a new plant for FY28, and the details of the change in use of IPO money."],
        charts: industrialsComponentsCharts['Patil Automation'],
    },
    {
        company: 'Subros',
        inShort: ["**India's biggest maker of car and truck air-conditioners**, including its own compressors, built on Denso technology and sold mostly to Maruti Suzuki.", "**Good:** 41% of the car and truck AC market, and a new government rule that makes truck makers fit air-conditioning. **Bad:** 82% of sales go to related parties, chiefly Maruti, margins are about 8-9%, cost increases reach prices only with a delay, and in Q1 FY27 operating profit fell while revenue rose, so it withdrew its revenue guidance.", "**Verdict: pass.** A solid supplier, but its biggest customer sets its margin."],
        tagline: "Car, truck, bus and railway air-conditioning systems and compressors, part-owned by Denso and Suzuki, with Maruti Suzuki as the main customer.",
        revenue: '₹3,756cr (FY26, consolidated)',
        products: [
            { name: 'Car air-conditioning systems', text: "Complete systems: compressors, the in-car cooling unit, condensers, heater cores and pipes. Hybrid, electric and CNG cars now make up about 25% of sales." },
            { name: 'Engine-cooling products', text: "Engine-cooling (ECM) products for cars, about ₹135cr in Q1 FY27, or 13% of sales. The company gives no further detail on this line." },
            { name: 'Truck and bus air-conditioning', text: "Cabin air-conditioning for trucks, which became compulsory from June 2025, plus bus AC. Truck AC made about ₹260cr in FY26 and grew 77% in Q1 FY27." },
            { name: 'Railway air-conditioning', text: "AC for coaches and driver cabins plus maintenance contracts: a ₹31cr firm order and a ₹50cr four-year maintenance contract in hand." },
            { name: 'Electric compressors (coming)', text: "Compressors for electric and hybrid cars, to be built with Denso and Toyota Industries at a new plant in Gujarat. Production for three Maruti models starts from November 2027." },
        ],
        revenueText: "Of **₹1,032cr in Q1 FY27**, **₹695cr (67%) was AC products for Maruti Suzuki**, about ₹135cr engine-cooling products and a little over ₹200cr other customers such as Mahindra and Renault. By vehicle type, **cars were ₹930cr (90%)**, trucks ₹75cr, buses ₹12cr and the rest railways and other. Sales are almost entirely in India.",
        mixes: [
            { caption: 'Revenue by product and customer, Q1 FY27 (company)', parts: [{ label: 'AC products for Maruti', share: 67 }, { label: 'Engine-cooling products', share: 13 }, { label: 'Other customers', share: 20 }] },
            { caption: 'Revenue by vehicle type, Q1 FY27 (company)', parts: [{ label: 'Cars', share: 90 }, { label: 'Trucks', share: 7 }, { label: 'Buses', share: 1 }, { label: 'Railways and other', share: 2 }] },
        ],
        customers: ["**Maruti Suzuki**: AC products for Maruti were 67% of Q1 FY27 revenue, and related parties, chiefly Maruti, took 82% of FY26 sales. Suzuki owns 12% of Subros and Denso 20%, so Subros is built into Maruti's supply chain.", "**Other car and truck makers**: Tata Motors, Mahindra, Renault and Daimler, and truck makers fitting compulsory cabin AC.", "**Indian Railways**, a small but growing customer for coach and cabin AC and maintenance."],
        difficulty: { level: 'High', text: "Compressors are precision machines made in millions, and a car AC system must be designed into each new model years ahead. But the core technology is licensed from Denso, and the new electric compressor starts with 80-85% imported parts." },
        moat: "Maruti rarely changes a supplier that is part-owned by its parent and by Denso and is built into its models, which gives Subros 41% of the market. The same tie is the weakness: the customer is far stronger than the supplier and holds the margin down.",
        salesDrivers: ["**Maruti's production**: Subros follows Maruti's factory output, not its sales. It lagged the market last year partly because of Maruti's model mix and an 8-day Maruti shutdown in June.", "**The truck AC rule**: truck AC made about ₹260cr in FY26; management expects about ₹300cr in FY27 (cut from ₹325-350cr) and ₹400-450cr in two to three years, in a market it puts at ₹600-800cr.", "**More value per car**: electric and hybrid cars need an electric compressor, which the company says carries up to 3.5 times the content. Hybrids, electric and CNG cars are already 25% of sales.", "**New plants alongside Maruti's**: Kharkhoda (Haryana) starts in Q3 FY27 with 4.75 lakh units, going to 9.5 lakh, to serve Maruti's new Sonipat plant; a western plant for Maruti's planned 1-million-car Gujarat plant is being studied.", "**No company guidance**: management expects to grow with the industry, in the moderate single digits, and gave no revenue forecast."],
        inputs: "**Aluminium** (for condensers, cooling units and compressor bodies) and **imported parts**, plus industrial gases and freight. Materials were 73% of sales in FY26.",
        costEffect: "**Partly passed on, with a quarter's lag.** Contracts reset prices each quarter for metal prices and the rupee, which evens out when costs go up and down, but costs have risen for three quarters in a row, so Subros keeps catching up. State wage rises of 26-32% in Haryana and Uttar Pradesh are not covered at all and are being negotiated. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (9% to 2%). **What happened:** India's aluminium price index rose 59% between Q1 FY24 and Q1 FY27, while the margin went from 6.8% to 7.8%. The margin first improved to a peak of 10.2% in Q4 FY25, then slipped back as aluminium rose another 36% and wages jumped; the 12% margin target has now been pushed out by at least a year.",
        competitors: [{ name: 'Mahle, Sanden, Hanon, Valeo', note: 'Global thermal suppliers in Indian cars; none makes compressors in India the way Subros does.' }, { name: 'Denso', note: 'Its own technology partner and shareholder, also a supplier in its own right.' }, { name: 'Mahle, Sanden, Air International (trucks)', note: 'The main rivals in truck cabin AC, where Subros has 41%.' }],
        position: "**India's largest car air-conditioning maker**, with 41% of cars, 41% of trucks and 16% of buses, and the only integrated Indian maker with its own compressors.",
        money: "Net cash of **₹106cr** (Screener): ₹75cr of borrowings against ₹38cr of cash and ₹143cr of investments. The Kharkhoda and Gujarat plants will be funded with long-term loans already approved, and free cash flow was negative (−₹42cr) in FY26. Contingent liabilities rose from ₹47.8cr to ₹79.5cr, mostly customs and GST disputes. No equity has been raised. Promoters (the Suri family) hold **36.8%**, unchanged since 2023; Denso holds 20% and Suzuki 12%.",
        watch: ["Whether customers pay for the state wage increases.", "Kharkhoda starting production in Q3 FY27.", "Electric-compressor start in November 2027 and how fast parts are made in India."],
        charts: industrialsComponentsCharts['Subros'],
    },
    {
        company: 'Vilas Transcore',
        inShort: ["**Makes the magnetic core that sits inside an electricity transformer**, from imported special steel, and is adding radiators and copper windings to sell more to the same transformer makers.", "**Good:** tripled capacity into a transformer shortage, and has net cash. **Bad:** it is a price-taker on imported steel, earns thin margins, cut its FY27 revenue guide within four months, buys ₹35cr a year from its MD's own company and has turned little of its profit into cash for two years.", "**Verdict: pass.** A capable supplier, but its customers and trade rules decide its margin."],
        tagline: "A Vadodara maker of transformer cores from grain-oriented electrical steel, adding radiators, nanocrystalline cores, copper conductors and bushings.",
        revenue: '₹461cr (FY26, standalone)',
        products: [
            { name: 'Transformer laminations and cores', text: "Cold-rolled grain-oriented (CRGO) steel, a special electrical steel, cut, annealed and stacked into the core of a transformer. Capacity went from 12,000 to 36,000 tonnes a year in July 2025. The company says it earns 12-13% operating margin here." },
            { name: 'Radiators', text: "The finned tanks that cool a transformer. Sales began in early 2026; capacity is 7,200 tonnes and this year's target is about 3,000 tonnes, at about 18% margin." },
            { name: 'Nanocrystalline cores', text: "Small, high-frequency cores for circuit boards, earth-leakage breakers, battery chargers and smart meters, replacing imports. FY26 sales were ₹4-5cr; the target is ₹25cr in FY27, at 25-30% margin." },
            { name: 'Copper conductors', text: "Copper winding wire for transformers, launched in September 2026 with 1,500-1,800 tonnes of capacity, at about 5-7% margin." },
            { name: 'Bushings (later)', text: "High-voltage bushings through a joint venture in which it holds 25%; still in development, with no sales expected for 1-1.5 years." },
        ],
        revenueText: "The company does not formally split revenue by product. Cores are **well over 85% of FY26 revenue** on the research estimate, with radiators and nanocrystalline cores just starting. Exports are under 2% (ICRA). Management guided **₹750–800cr of FY27 revenue in May, then about ₹680cr in September**, and revenue grows more slowly than volume because steel prices are **20-25% below March 2025**.",
        customers: ["**Transformer makers**: Voltamp, CG Power, GE (toroidal cores), Atlanta Electricals, Kirloskar and Electrotherm; talks with ABB. Today it mostly supplies solar-plant transformers, which use lower-grade steel. Its largest customer has been 40-50% of revenue for four years (ICRA).", "**Makers of electronic parts** (for nanocrystalline cores), which it will not name.", "**Overseas buyers** in the Gulf, Europe and Canada, a small share it wants to grow."],
        difficulty: { level: 'Low', text: "Cutting, annealing and stacking electrical steel is established work. The real barriers are customer approvals, especially from the national grid company PGCIL, and the ability to buy imported steel in bulk: it orders 5,000-6,000 tonnes at a time from Chinese mills to get a better price." },
        moat: "Approvals and a one-stop range make it a convenient supplier to transformer makers, and buying steel in bulk gives it a cost edge over small rivals. But it cannot set the steel price, so its margin moves with trade rules and imported steel prices.",
        salesDrivers: ["**Transformer demand**: grid and solar spending has created a transformer shortage, and sales depend on how busy its customers are. April was weak, while May and June were good.", "**Capacity now in place**: 36,000 tonnes of core capacity; the FY27 target is now 25,000-30,000 tonnes sold, down from 30,000 in May.", "**PGCIL approval**: it is registered with the national grid company at 220 kV; an upgrade to 400/765 kV, which would open larger power transformers and higher-grade steel, is pending.", "**Price mix**: two customers on quarterly fixed-price contracts take 50-60% of sales; the rest is spot and reprices at once. Falling steel prices cut revenue per tonne.", "**New products**: radiators, nanocrystalline cores and copper conductors add revenue from the same customers."],
        inputs: "**CRGO electrical steel** is the main input, about half or more of it bought from China, paid in advance, and the rest from Indian and other mills; it keeps about two months of stock. Copper matters once conductors start. Materials were 82% of sales in FY26.",
        costEffect: "**Mostly passed on, but it is a price-taker.** Spot orders reflect steel prices at once and quarterly contracts at the next reset; when steel prices fall it must cut prices quickly, while some Indian mills are slower to cut theirs. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (11% to 3%). **What happened:** India's copper price index rose 33% between H1 FY24 and H2 FY26, and the margin went from 9.4% to 8.6%. Copper is not yet an important input; the swing came from electrical steel. The margin peaked at 14.1% in H2 FY25, then fell as steel prices dropped: a Chinese order committed at a higher price cost about half a point, and the new plant's staff and overheads did the rest.",
        competitors: [{ name: 'Other lamination makers', note: 'Not named in the sources; mostly smaller regional players that buy steel in smaller lots.' }, { name: 'Yash Highvoltage', note: 'Established high-voltage bushing maker that Vilas plans to compete with later.' }, { name: 'Imported nanocrystalline cores', note: 'From Germany and China; in India, Hitachi makes products using them.' }],
        position: "**A mid-sized, debt-free supplier of transformer cores** with 36,000 tonnes of capacity. Management puts its share at 5-7%; it supplies cores for transformers up to 200 MVA without PGCIL approval.",
        money: "Net cash of **₹55cr** (Screener): ₹39cr of borrowings against ₹94cr of cash. Operating cash flow was -₹42cr in FY25 and -₹2cr in FY26 as stock and receivables grew; management says it can fund working capital from its own profits up to ₹750cr of sales, and pays no dividend. The copper plant's first phase costs ₹25-30cr. It bought ₹34.8cr of goods in FY26 from Atlas Transformers, 98.7% owned by its managing director, and sought approval for up to ₹100cr a year; the promoter holds 75% of the new bushing venture, and the CFO changed twice in FY26. Promoters hold **73.1%**, unchanged.",
        watch: ["The PGCIL upgrade and purchases from Atlas Transformers.", "Anti-dumping duty on Chinese electrical steel and the lapse of Chinese mills' Indian quality approvals.", "Operating cash flow turning positive."],
        charts: industrialsComponentsCharts['Vilas Transcore'],
    },
    {
        company: 'Everest Kanto Cylind',
        inShort: ["**India's leading maker of high-pressure seamless gas cylinders**, for CNG vehicles, city-gas stations and industrial gases, with plants in India, the US, Dubai and now Egypt.", "**Good:** CNG demand is strong and the Indian business earned a 16% margin in FY26. **Bad:** margin fell from 16.2% to 11.1% in one quarter after being called sustainable, guidance was dropped, Q1 FY27 revenue fell 10%, FY26 profit was lifted by about ₹30cr of deferred-tax credit and a ₹12.6cr US refund, and borrowings rose to ₹267cr from ₹41cr two years ago.", "**Verdict: pass.** A steel cylinder is close to a commodity, and a ₹351cr GST demand hangs over a company worth about ₹1,240cr."],
        tagline: "Seamless steel and composite high-pressure cylinders and cascades for compressed natural gas, industrial gases and specialist uses.",
        revenue: '₹1,471cr (FY26, consolidated)',
        products: [
            { name: 'CNG cylinders for vehicles', text: "Seamless steel cylinders fitted in CNG commercial vehicles and cars, the core product in India; the commercial-vehicle side is larger than cars." },
            { name: 'Cascades for city gas', text: "Banks of large cylinders that store and move compressed gas for city-gas stations." },
            { name: 'Industrial and specialist cylinders', text: "Cylinders for industrial gases, and higher-value orders for defence and semiconductor plants, which lifted margins in Q3 FY26 but did not repeat." },
            { name: 'US business (CP Industries)', text: "Large-diameter cylinders and tubes made in the US, with a US$75m order book to be executed over 18–24 months and a US$5.5m project to add composite (Type 4) cylinders." },
        ],
        revenueText: "The Indian company made **₹967cr of the ₹1,471cr** group revenue in FY26; the rest came from the US, Dubai and other subsidiaries. **The company does not split revenue by product or customer type.** The Dubai plant runs at about 50% of capacity because of Middle East shipping problems.",
        mixes: [
            { caption: 'Revenue by entity, FY26 (company)', parts: [{ label: 'India (parent company)', share: 66 }, { label: 'Overseas subsidiaries', share: 34 }], note: 'Parent-company revenue as a share of group revenue; ignores sales between group companies.' },
        ],
        customers: ["**Vehicle makers and CNG fitment** for trucks, buses and cars; CNG was about 22% of Indian passenger-car sales in FY26.", "**City-gas distribution companies** that buy cascades for filling stations.", "**Industrial-gas companies and specialist buyers** in defence and semiconductors, plus US industrial and clean-energy customers."],
        difficulty: { level: 'Medium', text: "A cylinder that bursts can kill, so each design needs PESO (India's explosives regulator) and overseas safety approvals. But once approved, a standard seamless cylinder is a well-known product that Chinese and Indian rivals can also make." },
        moat: "Approvals, scale and long relationships with vehicle makers and gas companies keep it the leading Indian supplier. The weakness is pricing: when specialist orders stop, it sells a near-commodity product and the margin drops.",
        salesDrivers: ["**CNG vehicle sales**, which depend on the gap between CNG and petrol prices; higher LNG prices have lifted CNG pump prices a little.", "**City-gas network growth** and demand for industrial gases, compressed biogas and hydrogen storage.", "**Specialist orders** for defence and semiconductors, which carry better margins but are one-off.", "**New plants**: Mundra has started and needs about six months to stabilise; Egypt has been commissioned, starting at about 40% of target output and rising to 80% later.", "**US demand**, with a flat US$75m order book at CP Industries."],
        inputs: "**Seamless alloy steel tubes and billets** made into cylinders, plus valves and carbon fibre for composite cylinders, and gas to fire the furnaces. Materials were 51% of sales in FY26.",
        costEffect: "**Partly protected.** Much of its sales are standard products priced order by order, so steel increases can be passed on over time, but in a competitive market with a lag. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (14% to 9%). **What happened:** India's alloy and stainless steel bar price index was flat (100 in Q1 FY24, 99 in Q1 FY27), and so was the margin (13.8% to 13.6%). In between it swung between 9% and 16% as specialist orders came and went and the Dubai plant struggled, not because of steel.",
        competitors: [{ name: 'Chinese cylinder makers', note: 'Low-priced imports that cap prices for standard cylinders.' }, { name: 'Maruti Koatsu, Rama Cylinders and other Indian makers', note: 'Domestic rivals in steel gas cylinders.' }, { name: 'Hexagon, Luxfer', note: 'Global leaders in composite (Type 3 and Type 4) cylinders, the lighter product EKC is starting to make in the US.' }],
        position: "**India's leading maker of high-pressure seamless gas cylinders**, with plants on four continents.",
        money: "Screener shows net debt of **₹178cr** at March 2026, up from net cash two years earlier, as borrowings rose to ₹267cr to build Mundra and Egypt; ₹162cr of unfinished projects still sat on the balance sheet. Free cash flow was negative in FY25 and FY26. A GST, interest and penalty demand of ₹351cr (FY18–FY23) over how its product is classified is before the tax tribunal and shown as contingent, not provided; management expects clarity in 6–12 months. The auditor flagged ₹19cr of plant and projects idle because demand for some products fell. A new CEO has been appointed but no background was given. Promoters hold **67.38%**, unchanged since 2023.",
        watch: ["The tribunal's ruling on the ₹351cr GST demand.", "Egypt and Mundra reaching their target output.", "The new CEO's plan and whether guidance returns."],
        charts: industrialsComponentsCharts['Everest Kanto Cylind'],
    },
    {
        company: 'Airfloa Rail Techno.',
        inShort: ["**Airfloa Rail Technology fits out train coaches in Chennai**: interiors, seating and structural assemblies for Vande Bharat, Amrit Bharat and metro trains.", "**Good:** revenue grew 66% to ₹320cr and the railway market is large. **Bad:** receivables are two-thirds of a year's sales, cash flow is negative, it will put research spending on the balance sheet, and the promises run ahead of the order book.", "**Verdict: avoid.** The profit has not yet turned into cash."],
        tagline: "A Chennai maker of coach interiors, seating and structural assemblies for Indian Railways and metros, trying to add defence and aerospace work.",
        revenue: '₹320cr (FY26, standalone)',
        products: [
            { name: 'Coach interiors and furnishing', text: "Complete interiors for new trains such as the Vande Bharat sleeper and Amrit Bharat, from design to installation." },
            { name: 'Seating and structural assemblies', text: "Passenger seats, and machined and fabricated parts and assemblies for coach bodies." },
            { name: 'Metro and refurbishment', text: "Turnkey metro work (about ₹70cr of metro orders in hand, including Kolkata Metro) and refurbishment of old coaches, where it hopes for ₹100cr of orders this year." },
            { name: 'Defence and aerospace', text: "Simulator work for HAL, plus a planned joint venture with Big Bang Boom Solutions for anti-drone and microwave weapons, where the joint venture holds the technology and Airfloa the manufacturing rights. About ₹29cr is in the order book." },
        ],
        revenueText: "The **government is the main customer**: of the ₹487cr order book, about ₹415-420cr is government and ₹50-55cr private. Defence is about ₹29cr of the book. Sales are **heavily back-loaded**: ₹229cr of FY26's ₹320cr came in the second half, much of it in March. The company does not split revenue by product.",
        mixes: [
            { caption: 'Order book by customer, May 2026 (company)', parts: [{ label: 'Government', share: 89 }, { label: 'Private', share: 11 }], note: 'The company said ₹415-420cr government and ₹50-55cr private.' },
            { caption: 'Revenue by half-year, FY26 (company)', parts: [{ label: 'First half', share: 28 }, { label: 'Second half', share: 72 }] },
        ],
        customers: ["**Indian Railways coach factories** (ICF Chennai, MCF and others) and zonal railways; for zonal work, local channel partners bid on its behalf and it supplies from Chennai.", "**Rolling-stock makers and metros**: Siemens, Alstom, BEML and metro projects such as Kolkata.", "**HAL** and other defence buyers, still a small share."],
        difficulty: { level: 'Low', text: "Coach interiors and seating are fabrication and assembly work that several Indian firms already do; the advantage is being able to deliver complete fitted interiors on time, not scarce technology." },
        moat: "It has moved from single parts to complete fitted interiors, which makes it more useful to the railways. But it sells to one dominant buyer that sets prices through tenders, against several capable rivals.",
        salesDrivers: ["**Railway coach programmes**: Vande Bharat sleeper, Amrit Bharat and metro orders; refurbishment of 25,000 coaches worth ₹26,000cr over three to four years is the next big opportunity.", "**Order wins**: ₹487cr in hand against an earlier promise of ₹1,000cr by FY26; bids of ₹1,200cr (₹900cr railways), with a historical win rate of 20-25%.", "**Guidance vs talk**: FY27 guidance is ₹500cr of revenue at a 12-13% net margin, while the managing director says ₹1,000cr of revenue and ₹150cr profit are possible even this year.", "**Capacity**: the existing plants run at about 90% on two shifts; a new 14-acre plant costing ₹30-35cr is planned, and channel partners are used to grow without new plants.", "**Seasonality**: railway spending is back-loaded, so most revenue lands in the second half."],
        inputs: "**Aluminium** (ingots, extrusions, sheets) and **stainless steel**, plus glass, rubber, composites and fasteners, which are 30-35% of an assembly. Materials were 66% of sales in FY26.",
        costEffect: "**Partly passed on.** Price-variation clauses cover only about half of a metal price rise, and not the bought-in accessories at all; it has tried to lock prices by paying suppliers in advance. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (20% to 13%). **What happened:** India's hot-rolled steel price index fell 6% between H1 FY25 and H2 FY26, yet the margin fell from 25.9% to 18.3%. Its real inputs moved the other way: aluminium rose more than 80% and stainless steel 60-65% in a year.",
        competitors: [{ name: 'Kineco, Hindustan Fiberglass Works, DTL Ancillaries, Vibgyor', note: 'The main rivals in coach interiors; Universal Engineers competes in the south.' }, { name: 'Tata with Fainsa', note: 'Tata and Spanish seat maker Fainsa compete in train seating, along with a Korean company in Bengaluru and a Mumbai firm.' }],
        position: "**One of several coach-interior suppliers to Indian Railways**, strongest around ICF in Chennai; its market share is not disclosed.",
        money: "Net debt of **₹55cr** (Screener): ₹68cr of borrowings against ₹13cr of cash; the company puts net debt at 0.2 times equity. It is taking about ₹120cr of new bank loans at 8.25%, and receivables were ₹214cr at March 2026, two-thirds of a year's sales. Operating cash flow was -₹57cr in FY26. It plans to spend 8-9% of sales on research and put it on the balance sheet rather than charge it to profit, has committed ₹25cr to the defence joint venture, and says it may need to raise equity in FY28. In September it agreed to buy the business of KIN Railway Equipment for ₹48cr (with a ₹180cr order book), funded by debt and accruals. Its auditor is a small Chennai firm, the accounts use Indian GAAP, it faces about ₹0.9cr of company-law penalties for past CSR lapses, and it was fined for late related-party disclosure. Promoters hold **54.2%**.",
        watch: ["Collection of the ₹214cr of receivables and positive operating cash flow.", "How much research spending goes onto the balance sheet.", "New orders against the ₹500cr revenue guidance."],
        charts: industrialsComponentsCharts['Airfloa Rail Techno.'],
    },
    {
        "company": "Hy-Tech Engineers",
        "inShort": [
            "**Makes hydraulic fittings**, the small high-pressure steel connectors used in excavators, loaders, tractors and plastic-moulding machines, for about 170 OEMs in India and exports to the US and Europe.",
            "**Good:** a leader in India with a rival less than half its size, no customer above 15%, and a steady 22% operating margin. **Watch:** growth was only 13% in Q1 against a 20% guide, money is tied up for about 171 days in stock and receivables, only about 55% of operating profit turned into cash over the four years filed, and a quarter of sales go to the US.",
            "**Verdict: wait.** A well-run niche supplier, but at about 33 times earnings the price assumes the guided 20% growth and 24–25% margin; I want to see Q2 deliver the margin rebound first."
        ],
        "tagline": "A Maharashtra-based maker of hydraulic hose fittings and adaptors for construction, farm and industrial machinery makers, founded in 1978 and listed in September 2026.",
        "revenue": "₹189cr (FY26, consolidated)",
        "products": [
            {
                "name": "Standard hydraulic fittings",
                "text": "About 80% of sales: fittings to German (DIN), American (SAE, JIC) and O-ring face-seal standards, from about 11,000 types, made from forging to plating in-house; about 35 lakh pieces a month."
            },
            {
                "name": "OEM-specific fittings",
                "text": "About 20% of sales: fittings designed for a particular machine maker, developed in about two weeks."
            },
            {
                "name": "New lines",
                "text": "Stainless steel fittings for data-centre cooling and oil and gas (sales expected around FY28–FY29), and approvals for railways (IRIS certification), defence (DRDO) and shipyards (Cochin Shipyard, Mazagon Dock)."
            }
        ],
        "revenueText": "**About 70–80% of revenue goes directly to equipment makers** and about 10% through four Indian distributors. **Exports are about 30%: roughly 25% to the US and 7–8% to Europe**; the CMD plans to reach 50% exports in five years but keep the US at about 25%. No customer is more than 15% of sales. Revenue grew from ₹133cr in FY22 to ₹189cr in FY26 and was ₹43cr in Q1 FY27, up 13%.",
        "mixes": [
            {
                "caption": "Revenue by market, FY27 (management, approximate)",
                "parts": [
                    {
                        "label": "India",
                        "share": 70
                    },
                    {
                        "label": "US",
                        "share": 25
                    },
                    {
                        "label": "Europe and others",
                        "share": 5
                    }
                ],
                "note": "Management gave India about 70%, US about 25% and Europe 7–8%; shares rounded to add up."
            },
            {
                "caption": "Revenue by product, approximate (management)",
                "parts": [
                    {
                        "label": "Standard fittings",
                        "share": 80
                    },
                    {
                        "label": "OEM-specific fittings",
                        "share": 20
                    }
                ]
            }
        ],
        "customers": [
            "**Indian makers of excavators, loaders, backhoes, tractors and injection-moulding machines**, about 170 direct customers; new in 2026: Tata Hitachi and Sany (replacing Chinese imports).",
            "**Overseas plants of global OEMs**: approved at all 47 US plants of John Deere, with 6–7 already buying; it is setting up a US subsidiary and warehouse because the customer wants local supply.",
            "Relationships with some customers go back up to 48 years; the CMD declines to name most customers."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "A fitting is only 1–2% of a machine's cost but must hold very high pressure without leaking, so OEMs qualify suppliers carefully; Hy-Tech forges in-house because bought forgings are not good enough. The products are mostly to public standards, though, so a capable rival can copy them."
        },
        "moat": "Approvals with almost every Indian OEM, a wide range, in-house forging and quick development; global leader Parker charges about twice its price, and its nearest Indian rival is less than half its size. The weak point is that standard parts invite price pressure, and OEMs expect about 1% price cuts a year.",
        "salesDrivers": [
            "**Construction and farm machinery output** in India, which management says grows about 7–8% a year; it aims for 20% by winning more share and new OEMs.",
            "**Exports**: US plants of existing customers and Europe, where it says it is about 25% cheaper delivered than local makers; US tariffs are a risk.",
            "**Capacity**: ₹30cr of IPO money takes output from 35 lakh to 50 lakh pieces a month (about ₹100cr more revenue); a 6.5-acre automated plant is planned within two years. Plants run at 60–70%.",
            "**New sectors**: railways, defence, shipyards and data centres, which management says are on top of the 20% and will take time."
        ],
        "inputs": "**Steel**, bought directly from Indian mills (no imports), is the only material it buys; forging, machining and plating are all done in-house. Its share of cost is not disclosed in what I read.",
        "costEffect": "**Passed through to OEMs with a lag of about a quarter.** When steel and other costs jumped in February–April 2026 it asked OEMs for price rises, granted from 1 April but billed from Q2. **What happened:** the margin dipped to 19.6% in Q1 FY27 from 21.5% a year earlier; management expects 24–25% from Q2. Over FY22–FY26 the margin ranged from 17% (FY24) to 25% (FY22).",
        "competitors": [
            {
                "name": "Parker Hannifin",
                "note": "Global leader; its fittings cost about twice as much and mostly enter India with foreign-run projects."
            },
            {
                "name": "Indian fitting makers",
                "note": "The next-largest is less than half Hy-Tech's size, by the CMD's account; no Chinese fitting makers compete in India, he says."
            }
        ],
        "position": "**India's largest hydraulic fittings maker by its own account**, with about 10% of a ₹2,000cr Indian market (the world market is about ₹40,000cr, half of it in the US).",
        "money": "Screener shows **₹30cr of borrowings at March 2026** against ₹2cr of investments and some cash; the September 2026 IPO added ₹60cr of new money, part of it to repay debt. Over the four years filed (FY22, FY24–FY26) it turned ₹135cr of operating profit into **₹74cr of operating cash (55%)**, and free cash was only ₹11cr, because stock (157 days) and receivables (96 days) are high; the cash cycle widened from 153 to 171 days. The CMD says it has reinvested about half of profits in capex for 25 years. It paid out 15% of FY26 profit. Promoters hold **71.36%**.",
        "watch": [
            "Q2 FY27 results: margin back to 24–25% and growth near 20%.",
            "The US subsidiary and John Deere ramp-up, with the US kept at about a quarter of sales.",
            "Receivables and stock coming down so more profit turns into cash."
        ],
        charts: industrialsComponentsCharts["Hy-Tech Engineers"],
    },
];

export const industrialsComponentsBusinesses = { intro, profiles };
