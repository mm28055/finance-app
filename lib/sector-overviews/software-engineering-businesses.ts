import { BusinessProfile, OverviewSection } from './types';
import { softwareCharts } from './card-data/software';

// Tab 2 of the Software note, Engineering (ER&D) group: what each company actually does.
// Revenue totals are the filed consolidated figures (Screener). Segment splits, client and
// geography numbers come from each company's latest presentations, calls and annual reports;
// where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, ranked as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures from Screener; splits are from each company's latest call, presentation or annual report. These are engineering-services businesses with no single raw material with a price index, so there is no cost-versus-input chart: their real cost driver is staff (engineers' pay), how busy those engineers are, subcontracting, and the rupee, since most revenue is billed in dollars, euros or yen while costs are paid in rupees.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Five engineering research and development (ER&D) firms that design, test and write software for physical products, in three groups.",
        ],
        points: [
            {
                label: 'Automotive software specialists',
                text: "KPIT writes, integrates and tests the embedded software inside cars, trucks and off-highway machines, and sells some of its own products (in-car gaming, cybersecurity) on top. Tata Technologies goes further upstream, designing whole vehicles for carmakers in 18–24 months, and also resells product-lifecycle-management (PLM) software. Both are anchored to a small number of large carmakers, and both are exposed to a European car industry that is cutting research budgets.",
            },
            {
                label: 'Industrial, aerospace and diversified engineering',
                text: "Onward designs industrial machinery, heavy equipment and vehicle parts for 73 US and European clients, almost all billed by the hour. Cyient engineers aircraft, rail, telecom and utility networks and mines, and is also building a loss-making chip business and holds a majority stake in the separately listed electronics maker Cyient DLM. **Both are riding a healthier pocket of demand**: US industrial, power and aerospace spending, rather than European cars.",
            },
            {
                label: 'Government mapping and water systems',
                text: "Ceinsys Tech is a different business entirely: it maps and installs smart meters on water and power networks for Indian state governments, winning almost all its work through tenders at the lowest bid. **Its margin depends on winning orders cheaply and delivering them efficiently, not on any technical moat.**",
            },
        ],
    },
    {
        heading: 'Three ways of earning',
        body: [
            "How each business is paid decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A fixed price or an hourly rate for engineering work**', 'KPIT, Tata Technologies, Cyient, Onward', 'A price agreed per project, or a rate per engineer-hour', 'Fixed-price work is booked as it progresses, so revenue often arrives before an invoice is raised; hourly work is billed and paid in arrears'],
                    ['**A fee or licence per vehicle or per software seat**', 'KPIT (AirConsole, Cymotive), Tata Technologies (PLM resale)', 'A licence fee on top of services work, tied to units sold rather than hours worked', 'Usually faster and stickier than hourly billing once the product is adopted'],
                    ['**A tender price, won as the lowest bidder**', 'Ceinsys Tech', 'A price fixed for the life of a government contract, with small escalators', 'Governments pay slowly, often only when annual budgets are released, which can take a year or more'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'KPIT Technologies',
        inShort: ["**India's largest pure-play automotive software engineering company**, writing, testing and integrating the software inside cars, trucks and off-highway machines for global carmakers, mostly in Europe.", "**Good:** near-100% cash conversion and about ₹900cr of net cash even in a bad quarter. **Watch:** European clients cut work hard in FY27, the margin fell from 20.6% to 17.2% in one quarter and the FY27 margin guide was dropped; Q2 is guided flat, the top 25 clients are 87% of revenue, and goodwill is 39% of assets.", "**Verdict: own.** A specialist in a bad year, priced for the recovery it has the cash and contracts to deliver."],
        tagline: "A pure-play automotive software engineer for car, truck and off-highway makers, selling some of its own in-car products alongside engineer-hour and fixed-price work.",
        revenue: '₹6,455cr (FY26, consolidated)',
        products: [
            { name: 'Feature development & integration', text: "Building and testing the software features inside connected, electric and driver-assist vehicles; about 60% of FY26 revenue." },
            { name: 'Architecture & middleware', text: "The base software layer a vehicle's systems run on, so features from different suppliers work together; about 18% of revenue." },
            { name: 'Cloud-based connected services', text: "Telematics, infotainment and over-the-air software updates; about 22% of revenue, the fastest-growing practice." },
            { name: 'Products and solutions', text: "Its own software sold per vehicle: AirConsole (in-car gaming, more than 4 million users), Cymotive's cybersecurity (used in millions of Volkswagen Group cars) and Caresoft's cost-benchmarking tools. About 15% of FY26 revenue, and the part KPIT wants to grow fastest." },
        ],
        revenueText: "Passenger cars were **79% of FY26 revenue**, commercial vehicles 18% and off-highway and other machines about 3%. By region, **Europe was 48%**, the US 27% and Asia 25% — an unusual mix for an Indian IT exporter, since KPIT bills mostly in euros and yen, not dollars.",
        mixes: [
            { caption: 'Revenue by vehicle type, FY26', parts: [{ label: 'Passenger cars', share: 79 }, { label: 'Commercial vehicles', share: 18 }, { label: 'Other', share: 3 }] },
            { caption: 'Revenue by region, FY26', parts: [{ label: 'Europe', share: 48 }, { label: 'United States', share: 27 }, { label: 'Asia', share: 25 }] },
        ],
        customers: ["**Car, truck and off-highway makers**, mostly European premium brands; BMW alone is about 12% of revenue.", "**Its top 25 clients are about 87% of revenue**, and it lost new work from Honda in April 2026 when the maker cancelled platform programmes."],
        difficulty: { level: 'Very high', text: "Writing software that goes inside a moving vehicle needs safety certification, years of platform-specific knowledge and engineers who can work inside a carmaker's own development process. Few firms outside KPIT specialise only in this." },
        moat: "KPIT says it holds about 10–11% of its top-25 clients' outsourced software spend and is working to raise it, and once its engineers are embedded in a multi-year vehicle programme, switching is costly for the client. The weakness: when a client cancels the vehicle programme itself, as Honda did, the revenue disappears fast, and revenue per engineer is falling as fixed-price and AI-assisted work spreads.",
        salesDrivers: ["**European car spending**: about half of revenue is European, and premium makers cutting costs to protect their own margins pulled back sharply in FY27, KPIT's toughest quarter in years.", "**Diversifying beyond passenger cars**: 13 new clients last year, including seven off-highway and four truck and bus makers, plus new work in the US, Japan, Korea and India.", "**The shift to fixed-price and products**: fixed-price work rose to 67.7% of revenue from 62.5%, and products (AirConsole, Cymotive) are targeted at about half of revenue within three years.", "**AI cutting into hour-billed work**: management admits AI is cannibalising some work near-term, and revenue per engineer fell 3.6% in a year.", "**The rupee**: KPIT bills mainly in euros and yen, so currency moves swing reported growth as much as real demand does."],
        inputs: "**Engineers' salaries, subcontracted specialists and hardware or software licences** are the only real inputs; staff costs were 62% of revenue in FY26 and licences and hardware just 1%.",
        costEffect: "**Mostly insulated from materials, driven by staff and utilisation.** There is no raw-material price index for automotive software; the cost that matters is engineers' pay and how busy they are. **Rule of thumb:** a 10% rise in staff costs not recovered through higher billing rates would cut the margin by about 6 points (19% to 13%). **What happened:** KPIT delayed its usual wage round for the first time in FY27 rather than raise prices, and the margin still fell from a company-reported 20.6% to 17.2% in one quarter as European clients cut work and engineers stayed on the books between programmes.",
        competitors: [{ name: 'HCLTech, Tech Mahindra, LTTS, Capgemini, Akkodis', note: "General IT and engineering firms that also bid for automotive software work, though none is a pure-play like KPIT." }, { name: "Carmakers' own in-house software teams, such as Volkswagen's", note: "The biggest long-term competitor, as OEMs try to build software capability themselves." }],
        position: "**India's largest pure-play automotive software engineering company**, with a leading position in software-defined-vehicle work for European carmakers.",
        money: "Net cash was about ₹900cr on the company's own count and about ₹675cr on Screener's (which treats lease payments as debt). Capex is small; the real spending has been about $400m of acquisitions (Technica, Caresoft, Cymotive and others) that pushed goodwill to ₹2,798cr. Promoters hold **38.59%**, down from 39.47% three years ago.",
        watch: ["Q2 revenue holding no worse than Q1.", "The two troubled European clients stabilising in Q3, and no further programme cancellations.", "Products and solutions growing above 30% a year."],
        charts: softwareCharts['KPIT Technologies'],
    },
    {
        company: 'Onward Technologies',
        inShort: ["**A small engineering-design firm** for 73 industrial, machinery and vehicle makers in the US and Europe, mostly billed by the hour.", "**Good:** revenue grew 12% and the margin has risen from 9% to 12–13% in a year, with net cash and a dividend. **Watch:** 84% of work is billed by the hour, the type of work AI shrinks first; Q1 profit fell 12% and EBITDA grew 7% against a promise of double-digit growth; promoters have sold down from 45% to 40%.", "**Verdict: follow.** Steady progress at a modest price; buy when the new power-equipment centre lifts the margin."],
        tagline: "A small engineering-design firm for US and European makers of industrial machinery, heavy equipment and vehicle parts, billed mostly by the hour.",
        revenue: '₹544cr (FY26, consolidated)',
        products: [
            { name: 'Mechanical engineering', text: "Designing industrial equipment, heavy machinery and vehicle parts for clients' own product lines; about half of revenue." },
            { name: 'Embedded and digital/AI engineering', text: "Software and electronics design work, increasingly including AI-linked projects; the other half of revenue." },
            { name: 'Dedicated design centres', text: "Teams of engineers dedicated to one client's site or programme, such as a new centre for a North American power-management maker that could grow '5x' in the client's own words." },
        ],
        revenueText: "**Industrial equipment and heavy machinery were 65% of Q1 FY27 revenue**, transportation (mostly vehicle parts) 31% and healthcare and life sciences 4%. By geography, the **US was about 47%**, Europe 40% and India (billing global clients' own Indian centres) 13%.",
        mixes: [
            { caption: 'Revenue by industry, Q1 FY27', parts: [{ label: 'Industrial & heavy machinery', share: 65 }, { label: 'Transportation', share: 31 }, { label: 'Healthcare & life sciences', share: 4 }] },
        ],
        customers: ["**73 US and European makers of industrial equipment, heavy machinery and vehicle parts**, down from about 250 clients four years ago as the company dropped small accounts.", "**Its top 25 clients are about 87–88% of revenue**, and clients billing over $1m a year have grown from 16 to 18."],
        difficulty: { level: 'Medium', text: "Mechanical and embedded-electronics design needs trained engineers and years of a client's product knowledge, but most of the work is billed by the hour rather than requiring the certification or platform lock-in of full vehicle programmes." },
        moat: "Two or three of its top five clients have stayed roughly ten years, and typical engagements run five to eight years under multi-year agreements, so switching is inconvenient for a client mid-programme. The weakness: with 84% of work billed by the hour and no pricing evidence at all, there is little to stop a client simply buying fewer hours.",
        salesDrivers: ["**US industrial, power and data-centre equipment spending**: a new design centre for a North American power-management client (about 40 engineers to start, billing from Q2) that the client itself wants to grow '5x'.", "**Growing revenue per client**: clients billing over $1m a year have risen from 11 to 18 since the client list was cut from about 250 to 73.", "**AI shrinking hour-billed work**: management admits clients have already removed AI-addressable work from outsourcing budgets, and Onward does not yet use AI on billable projects.", "**The rupee**: like its peers, a weaker rupee flatters reported growth without changing real demand."],
        inputs: "**Engineers' salaries and subcontracted specialists** are the main costs; staff was 73% of revenue in FY26 and subcontracting jumped in Q1 as engineers could not travel during the Middle East war.",
        costEffect: "**Mostly insulated from materials, driven by staff and how busy engineers are.** There is no materials price index for design work; what moves the margin is wages, subcontracting and how much work is billed by the hour rather than fixed price. **Rule of thumb:** a 10% rise in staff costs not recovered through higher billing rates would cut the margin by about 7 points (13% to 6%). **What happened:** the margin rose from about 9% in FY25 to 12–13% in FY26 as revenue per engineer roughly doubled in four years, but it slipped 0.6 points in Q1 FY27 as subcontracting costs jumped to ₹34cr from ₹25cr.",
        competitors: [{ name: "Larger Indian and global engineering-services firms", note: "Compete for the same hour-billed design work, though none is named by management." }, { name: "Clients' own in-house design teams", note: "The main long-term threat, as AI tools make in-house design cheaper." }],
        position: "**A small, specialised design-engineering supplier**, not a scale player, competing on relationships and speed rather than size.",
        money: "Net cash was about ₹127cr at March 2026 (company figure; about ₹71cr on Screener). It pays a dividend (about 2.8% yield) and bought back ₹18cr of shares in Q1 FY27 at ₹328 a share. Promoters hold **39.97%**, down from 44.96% three years ago.",
        watch: ["EBITDA margin back above 13% as the new power-equipment centre bills.", "Offshore work share recovering from 68%.", "Any loss among the top five clients.", "EBITDA growing at double digits, as first promised."],
        charts: softwareCharts['Onward Technologies'],
    },
    {
        company: 'Tata Technologies',
        inShort: ["**An engineering firm that designs whole vehicles, aircraft parts and industrial machines** and resells design software, anchored by Tata Motors and Jaguar Land Rover.", "**Good:** revenue grew 22% in constant currency in Q2 FY27, and it won five large deals that quarter, including a $138m full-vehicle programme for a European luxury car maker, after a $100m Tenneco deal. **Watch:** the margin is stuck at 16% (16.1% in Q2), below the 18% it earned before FY26, and management now calls 18–20% a ‘North Star’ with no date. JLR is about a quarter of revenue, and ES-Tec was bought with a ₹569cr loan.", "**Verdict: wait.** A real recovery, but the margin has not followed, and the price already needs about {need:Tata Technologies|22}% a year of growth."],
        tagline: "An engineering firm that designs complete vehicles, aircraft parts and industrial machines, and resells product-lifecycle-management software, anchored by Tata Motors and Jaguar Land Rover.",
        revenue: '₹5,506cr (FY26, consolidated)',
        products: [
            { name: 'Vehicle and product engineering (Services)', text: "Designing whole vehicles in 18–24 months (against 36–48 at Western carmakers), embedded software for software-defined vehicles, and digital manufacturing; 77% of FY26 revenue." },
            { name: 'Technology Solutions', text: "Reselling product-lifecycle-management (PLM) software from partners, plus an education business; 23% of FY26 revenue, at a lower margin than design work." },
            { name: 'Aerospace and industrial machines', text: "Design work for aircraft parts (Airbus, engine makers, Air India MRO) and industrial heavy machinery, the two fastest-growing areas outside its automotive anchor." },
        ],
        revenueText: "**Services were 77% of FY26 revenue and Technology Solutions 23%.** By client site, **India was 40% of FY26 revenue, the UK 27% and North America 23%.** Jaguar Land Rover (JLR) alone billed **₹1,337cr in FY26, about 24% of group revenue**, and revenue from carmakers other than the Tata Motors/JLR anchor grew 56% year-on-year in Q1 FY27.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Services', share: 77 }, { label: 'Technology Solutions', share: 23 }] },
            { caption: 'Revenue by client location, FY26', parts: [{ label: 'India', share: 40 }, { label: 'United Kingdom', share: 27 }, { label: 'North America', share: 23 }, { label: 'Rest of Europe', share: 7 }, { label: 'Rest of world', share: 2 }] },
        ],
        customers: ["**Tata Motors and Jaguar Land Rover**, its anchor clients: JLR alone was about a quarter of FY26 revenue, and anchor clients were 48.9% of Services revenue in Q1 FY27, a share that is slowly falling.", "**Other carmakers, aircraft makers and industrial-machine makers**, the fastest-growing part of the business: a $100m, five-year Tenneco deal, a first Japanese full-vehicle programme, and Airbus and North American engine-maker work."],
        difficulty: { level: 'Very high', text: "Designing a complete vehicle or aircraft part from scratch needs deep engineering skill, safety certification and the trust to be handed a client's whole product programme, not just a slice of it. Reselling PLM software needs a different, lower skill: software licensing and support." },
        moat: "Once Tata Technologies is designing a client's whole vehicle or aircraft programme, replacing it mid-programme is costly and risky; it has done this for VinFast, NIO and now a Japanese carmaker with which it had no prior relationship. The weakness: this protects the programme, not the price — its margin is still below what it earned two years ago.",
        salesDrivers: ["**Winning outside the anchor**: revenue from carmakers other than Tata Motors and JLR rose 56% in Q1 FY27, and aerospace rose 38%.", "**New multi-year deals**: the $100m, five-year Tenneco programme (ramping through FY27) and a first Japanese full-vehicle programme.", "**Aerospace growth**: management wants to take aerospace from about $40m to $100m a year within three years.", "**A '$1bn revenue' goal** within two to three years, from about $650m in FY26, including one or two more acquisitions such as the German firm ES-Tec, bought in November 2025.", "**JLR's health after its 2025 cyber-attack**, since one client event can still move a quarter's results."],
        inputs: "**Engineers' salaries and PLM software licences bought for resale** are the main costs; staff was 50% of revenue in FY26 and hardware and licences bought for resale 18%, unusually high for this group because of the software-resale business.",
        costEffect: "**Partly protected, and the licence-resale business is a separate cost story.** Design work has no materials price index; what moves its margin is staff costs and how much of revenue is lower-margin software resale. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 5 points (15% to 10%). **What happened:** the margin has been stuck at 16% for four quarters (16.1% in Q2 FY27, after a salary round worth more than a point), well below the 18% it earned before FY26, hurt by a weaker Technology Solutions mix and German restructuring costs even as the rupee weakened in Tata Technologies' favour.",
        competitors: [{ name: 'HCLTech, Tech Mahindra, LTTS, Capgemini, Akkodis', note: "General engineering-services firms competing for the same design and PLM-resale work." }, { name: "Carmakers' own in-house design centres", note: "A long-term threat as global manufacturers build their own Indian engineering teams." }],
        position: "**A leading Indian vehicle-design house**, one of the few able to design and deliver a complete vehicle programme rather than just pieces of one.",
        money: "Net cash was about ₹330cr at September 2026 (company figure; ₹600cr at March on Screener), down from ₹880cr in June after a ₹475cr dividend. Q2 profit rose only 3% to ₹171cr because currency movements cut other income by 35%; without them, the company says profit rose 13%. It borrowed ₹569cr for the ES-Tec acquisition, repayable from May 2027. The dividend payout was 87% of FY26 profit, though the yield is only about 1.2%. Promoters (the Tata group) hold **55.17%**, little changed in three years.",
        watch: ["Quarterly margin reaching 17% or better; management expects it to rise in Q3 despite furloughs.", "The $138m European, Tenneco and Japanese programmes ramping up in H2.", "JLR's spending recovering after the cyber-attack.", "ES-Tec's Volkswagen work holding up as the ₹569cr loan falls due from May 2027."],
        charts: softwareCharts['Tata Technologies'],
    },
    {
        company: 'Cyient',
        inShort: ["**An engineering firm for aircraft, rail, telecom and utility networks**, which also owns 52% of the listed electronics maker Cyient DLM and a growing, loss-making chip business.", "**Good:** it is buying growth (Kinetic Technologies and TAO Digital, about $300m together) and its aerospace and rail work is growing. **Watch:** core engineering revenue has been flat or down for five quarters and profit has fallen from ₹703cr to ₹463cr in two years. It lost energy work to a larger rival, its growth aim was cut, and the deals are mostly debt-funded.", "**Verdict: wait.** Buying growth while the core stands still; wait for two quarters of core growth before paying for the turnaround."],
        tagline: "An engineering-services firm for aircraft, rail, telecom and utility networks and mines, expanding into fabless chips and owning a majority stake in the listed electronics maker Cyient DLM.",
        revenue: '₹7,268cr (FY26, consolidated)',
        products: [
            { name: 'Core engineering (DET)', text: "Design, simulation, testing and embedded software for aircraft, rail, telecom networks, utilities, energy plants and mines; the great majority of group revenue." },
            { name: 'Semiconductors', text: "A newer, still loss-making business: chip design services, turnkey custom chips and its own power-chip products, boosted by the 2026 purchase of Kinetic Technologies." },
            { name: 'Cyient DLM', text: "A separately listed electronics-manufacturing business, 52% owned by Cyient, that makes the group's non-core revenue larger than the core engineering figures alone suggest." },
        ],
        revenueText: "**Transportation and mobility (aerospace, rail, auto) was about 45% of core engineering revenue in Q1 FY27** and growing, **networks and infrastructure (telecom, utilities) about 33%**, and **strategic units (mining, energy, healthcare) about 22%** and shrinking sharply. By region, the **Americas were 52.6%** of core revenue, Europe/Middle East/Africa 24.8% and Asia-Pacific 22.5%.",
        mixes: [
            { caption: 'Core engineering revenue by industry, Q1 FY27', parts: [{ label: 'Transportation & mobility', share: 45 }, { label: 'Networks & infrastructure', share: 33 }, { label: 'Strategic units (mining, energy, healthcare)', share: 22 }] },
        ],
        customers: ["**Aircraft makers, rail makers, telecom and utility network operators and mining companies**, mostly in the Americas (52.6% of core revenue).", "**Its top five clients are 35.1% of core revenue**, rising from 30.6% a year earlier, and clients billing over $1m fell from 99 to 94."],
        difficulty: { level: 'High', text: "Engineering for regulated, safety-critical industries like aviation and rail needs certified processes and long client relationships; the chip business needs a completely different, capital-intensive skill Cyient is still building." },
        moat: "It has been picked as one of three strategic suppliers by a global rail maker's vendor-consolidation exercise, and holds multi-year contracts on aircraft engine and airframe programmes. The weakness: it lost energy-sector work to a larger rival, showing the moat is thin outside its strongest relationships, and the chip business is a separate, unproven bet.",
        salesDrivers: ["**Aerospace, rail and transport demand**: this cluster grew 14.8% in constant currency in Q1 FY27, the healthiest part of the business.", "**Buying revenue**: Kinetic Technologies (about $85m, power chips) and TAO Digital ($218m enterprise value, a US data and AI engineering firm with about $80m of 2025 revenue), expected to add $40–50m in FY27.", "**The energy and mining unit stabilising**: this cluster fell 26.2% year-on-year in Q1, the biggest drag on the group.", "**The chip business reaching break-even**, now pushed out to FY28.", "**The rupee**, which was about 11% weaker in Q1 than a year earlier and flatters rupee revenue growth."],
        inputs: "**Engineers' salaries and, increasingly, chip-design and manufacturing costs** are the main inputs; staff was 56% of revenue in FY26 and hardware and licences bought 11%, reflecting the growing electronics and chip businesses.",
        costEffect: "**Mostly insulated from materials in its core engineering work, but the chip business changes this.** Engineering has no materials price index; the margin follows staff costs, utilisation and, now, chip development spending. **Rule of thumb:** a 10% rise in staff costs not recovered through pricing would cut the margin by about 6 points (12% to 6%). **What happened:** the group's operating margin fell from 18% (FY24) to 12% (FY26) even as the rupee weakened in Cyient's favour, because core engineering revenue stalled while chip losses widened; core engineering's own margin was a steadier 12–13%.",
        competitors: [{ name: 'HCLTech, Tech Mahindra, LTTS, Capgemini, Akkodis', note: "General engineering firms bidding for the same aerospace, rail and network work." }, { name: "An unnamed, larger rival in energy-sector engineering", note: "Took energy work from Cyient in FY26, evidence its moat is thinner in that vertical." }],
        position: "**A mid-sized, diversified engineering-services firm**, broader than most peers because of its stakes in electronics manufacturing (Cyient DLM) and chips.",
        money: "Net cash was ₹1,644cr at June 2026 (core business; ₹1,532cr on Screener), but this is falling fast after a ₹720cr share buyback and the mostly debt-funded $130m upfront payment for TAO Digital, and the group is expected to move to modest net debt in the next quarter. CRISIL rates it AA/Stable. Promoters hold **24.7%**, up from 23.2% three years ago after not tendering shares in the buyback.",
        watch: ["Two quarters of positive core engineering growth in constant currency.", "The energy and mining unit stabilising.", "TAO Digital integrating without an earnout dispute.", "Net debt after the buyback and TAO, and the chip unit's losses."],
        charts: softwareCharts['Cyient'],
    },
    {
        company: 'Ceinsys Tech',
        inShort: ["**A Nagpur-based mapping, water-network and smart-meter company** working mostly for Indian state governments, with small car-design and US arms.", "**Good:** FY26 revenue grew 58% and the margin reached 24%. **Watch:** operating cash was only ₹3cr against ₹149cr of profit, and two customers gave 48% of FY26 revenue. Revenue has been flat for five quarters, promises on billing and orders slipped, and six senior people left in a year.", "**Verdict: pass.** Record profits on paper, almost no cash behind them; pass until the profit turns into cash and management settles."],
        tagline: "A geospatial-mapping and smart-water-metering company for Indian state governments, with smaller car-design and US geospatial arms.",
        revenue: '₹661cr (FY26, consolidated)',
        products: [
            { name: 'Geospatial and engineering services', text: "Mapping, 3D and LiDAR data, GIS platforms and digital twins of water and power networks for state governments; ₹359cr in FY26, up 76%." },
            { name: 'Technology solutions', text: "Smart-water IoT and meter-reading systems, enterprise GIS and AI-based data extraction; ₹301cr in FY26, up 41%." },
            { name: 'Mobility engineering', text: "Automotive design and simulation, run through the Allygrow joint venture with Germany's Grammer AG." },
            { name: 'US geospatial and telecom arm', text: "Technology Associates Inc., bought in 2024; still loss-making (₹22cr lost on ₹26cr of revenue in FY26)." },
        ],
        revenueText: "**Government customers are about 70% of business on average.** Two customers above 10% each gave **₹315cr, or 48% of FY26 revenue**, and water-related work is more than 90% of the order book.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Geospatial & engineering services', share: 54 }, { label: 'Technology solutions', share: 46 }] },
        ],
        customers: ["**Indian state governments**, mostly through tenders for water-network mapping and smart metering; about 70% of business.", "**Two customers gave 48% of FY26 revenue** between them, a level of concentration the company has not brought down."],
        difficulty: { level: 'Medium', text: "Mapping and network-engineering work needs GIS and surveying skill and state-government empanelment, but most delivery runs on other companies' platforms (Esri, Bentley, Autodesk), and every government order is won by being the lowest bidder." },
        moat: "It claims 'zero client churn' on more than 100 projects and has processed more than 35,000 miles of water network, real domain experience built up over years. The weakness: about 70% of its business is government work won purely on price, so the moat protects existing contracts, not the ability to charge more for the next one.",
        salesDrivers: ["**State government water and power spending**: the order book has risen to ₹990cr, with two more large orders in the pipeline.", "**The Maharashtra water-scheme (Jal Jeevan Mission) fund release**, which would turn ₹319cr of unbilled work into actual cash.", "**Moving from data capture to finished systems**, which lifted the margin from 17% to 24% over two years.", "**A new AI-cloud joint venture** (with AI Fabrik) for defence clients, a new business line outside geospatial work, not expected to add revenue before FY28."],
        inputs: "**Engineers and surveyors, subcontractors and third-party software licences** (Esri, Bentley, Autodesk) are the main costs; staff was 21% of revenue in FY26 and subcontracting and running costs 39%, reflecting how much delivery is outsourced or licensed.",
        costEffect: "**Mostly insulated from materials, but subcontracting and licences do the work materials would in a factory.** There is no materials price index for mapping and metering; margin follows how much work is done in-house against subcontracted, and government payment timing. **Rule of thumb:** a 10% rise in subcontracting and licence costs not recovered would cut the margin by about 4 points (23% to 19%). **What happened:** the reported margin rose steadily from 17% to 24% over two years as the business shifted toward finished systems, but this improvement has not shown up as cash: operating cash flow was just ₹3cr in FY26 against ₹149cr of operating profit.",
        competitors: [{ name: "Other GIS and geospatial-engineering tenderers", note: "Compete on price for the same state-government contracts; none named by management." }, { name: 'Esri, Bentley, Autodesk', note: "The software platforms Ceinsys builds much of its delivery on, rather than direct competitors." }],
        position: "**A specialist in Indian government geospatial and water-network work**, with more scale in this niche than most listed peers.",
        money: "Net cash was ₹248cr at March 2026, mostly money raised from promoters and a US fund for acquisitions that has not yet been spent. Unbilled revenue has risen to ₹319cr, 48% of FY26 income, and CARE rates the company BBB+/Stable. Promoters hold **50.88%**, down from 58.61% three years ago as new shares were issued.",
        watch: ["Operating cash flow above ₹80cr in FY27.", "Unbilled revenue falling sharply after the Maharashtra water-scheme release.", "The two pending large state orders being won.", "No further senior exits, and how the unused share money is spent."],
        charts: softwareCharts['Ceinsys Tech'],
    },
];

export const softwareEngineeringBusinesses = { intro, profiles };
