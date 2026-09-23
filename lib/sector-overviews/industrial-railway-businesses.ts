import { BusinessProfile, OverviewSection } from './types';
import { industrialRailwayCharts } from './card-data/industrial-railway';

// Tab 2 of the Industrial - Railway note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

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
            "A train is a steel body on wheels, pulled or pushed by electric motors, kept safe by signalling electronics.",
        ],
        points: [
            {
                label: 'Wagons and coaches',
                text: "**Wagons** carry freight (coal, containers, cars, cement) and are welded steel boxes built to Indian Railways' designs. **Coaches** carry passengers; modern ones (Vande Bharat, metros) have aluminium or stainless bodies and far more electrical content.",
            },
            {
                label: 'Traction and propulsion',
                text: "The **traction transformer** steps down overhead-wire voltage; the **converter** and **traction motors** turn it into motion; control software ties them together. Only a handful of companies worldwide design complete propulsion systems.",
            },
            {
                label: 'Safety and train control',
                text: "**Kavach** is India's automatic train-protection system that stops trains from colliding. **Distributed power control** lets locomotives spread along a long freight train act together.",
            },
            {
                label: 'Wheels, axles and brakes',
                text: "Forged wheels and axles, mostly imported today, and brake systems. New Indian plants are being built to replace imports.",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Almost everything here is sold to one buyer, Indian Railways, which decides how price and cash work.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Indian Railways tenders**', 'All six', 'Lowest bid, with quantities spread across approved suppliers', 'Annual cycle; heavy in the fourth quarter'],
                    ['**Private and export wagon buyers**', 'Texmaco, Titagarh, Jupiter', 'Negotiated', 'Faster, but orders are lumpy'],
                    ['**Metro corporations and consortiums**', 'Titagarh, Hind Rectifiers', 'Tenders for complete trains or systems', 'Milestone payments'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Hind Rectifiers',
        inShort: ["**India's leading maker of traction transformers**, the heavy part that turns overhead-wire power into power a locomotive can use. It is now adding converters, motors, control systems and complete propulsion.", "**Good:** each new train type carries more of its equipment, and a new copper-wire plant makes a key part in-house. **Bad:** the French unit it bought is losing money, and borrowings have risen every year.", "**Verdict: follow.** A real franchise, but I want to see the French unit break even and orders grow first."],
        tagline: "Railway traction transformers, converters, motors and control electronics, plus power supplies for heavy industry; renamed Hirect Limited.",
        revenue: '₹949cr (FY26, standalone)',
        products: [
            { name: 'Traction transformers', text: "Transformers that step down the 25,000-volt overhead supply for electric locomotives and trainsets (up to 7,775 kVA). The company says it has built more than 2,300 locomotive and coach transformers." },
            { name: 'Railway electronics and electromechanical', text: "IGBT traction and auxiliary converters, hotel-load converters for coach power, battery chargers, traction motors up to 1,150 kW, vehicle control units, driver displays, passenger information systems and HVAC." },
            { name: 'Propulsion and trainsets', text: "Its own locomotive propulsion system is in a 50,000 km official field trial, only 9,000–10,000 km done after floods in Gujarat. It has won development orders worth about ₹120cr for 4 MEMU trainsets and one Vande Metro trainset, due over 21–24 months." },
            { name: 'Industrial products', text: "Rectifiers and power supplies for electrostatic precipitators, metal refining, chemical and electrochemical plants, and power stations." },
            { name: 'Elventive France', text: "A French electronics-assembly, robotics and power-electronics business bought in 2025–26 (Hind holds 66%). It gives a European base but is loss-making while it scales up." },
        ],
        revenueText: "Railway transformers were **66% of Q1 FY27 standalone revenue** (₹236cr); the rest came from railway electromechanical and electronics products, industrial products, and spares and services. The order book was **₹740cr at end-July 2026**, with transformers the largest slice at about 36%. Consolidated FY26 revenue including the French unit was ₹999cr.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (standalone, company)', parts: [{ label: 'Railway transformers', share: 66 }, { label: 'Other railway products, industrial and spares', share: 34 }], note: 'The company splits the remaining 34% across electromechanical, electronics, industrial, and spares and services.' },
        ],
        customers: ["**Indian Railways' production units**, which buy transformers, converters and panels for electric locomotives; the Modern Coach Factory and Rail Coach Factory are new customers for trainset propulsion.", "**Industrial plants**: power stations, steel and metal refiners and chemical plants buying rectifiers and precipitator power supplies.", "**Overseas buyers**: its first US orders came in Q1 FY27, for traction motor assemblies and for IGBT converters used in mining."],
        difficulty: { level: 'High', text: "Traction equipment is safety-critical and needs Railways design approval, type tests and long field trials before any volume order. Propulsion is harder still: a 50,000 km trial that Hind has only just started." },
        moat: "Once its transformer is approved for a locomotive type, it is re-ordered for the life of that fleet, and few Indian firms can build one. The weakness: Railways buys by tender and deliberately keeps several suppliers alive, which limits pricing.",
        salesDrivers: ["**Electric locomotive output**: India produced about 1,400 locomotives in FY25, and each one needs a traction transformer. Transformer capacity has been raised by a quarter, from 60 to 75 a month.", "**More equipment per locomotive**: the company says its content rose from ₹1.5–1.6cr to ₹3–3.5cr per locomotive, and would reach ₹5–5.5cr once it supplies full propulsion. As a development supplier of propulsion it can win up to 20% of a tender's quantity.", "**Trainsets**: about ₹15cr of equipment per MEMU trainset and ₹60cr per Vande Metro set, against ₹5.5cr per locomotive; the first development orders are in hand.", "**Exports and Europe**: first US orders, plus Elventive France for European railway, defence and aerospace customers.", "**Copper conductors for other transformer makers**: the new 350-tonne-a-month plant needs only about 220 tonnes for its own use, so the rest can be sold. Management targets 30% revenue growth this year."],
        inputs: "**Copper** (winding wire for transformers and motors), **electrical steel**, transformer oil, IGBT power chips and other electronic parts. Materials were 76% of sales in FY26.",
        costEffect: "**Mostly passed on.** Railways orders carry price-variation clauses that adjust the price for metal costs, and the new in-house copper-conductor plant saved about 2 points of gross margin in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (11% to 3%). **What happened:** India's copper price index rose 49% from Q1 FY24 to Q1 FY27, yet the margin improved from 7.1% to 10.6% as price clauses and higher volumes covered it. In Q1 FY27 gross margin still slipped from 26.2% to 25.5% on higher raw-material costs.",
        competitors: [{ name: 'BHEL', note: 'State-owned giant making transformers, motors and propulsion for Railways.' }, { name: 'Siemens, Alstom, ABB', note: 'Global propulsion makers with approved platforms and far larger engineering teams.' }, { name: 'Medha', note: 'Established Indian propulsion supplier; management says only one other Indian firm matches its full in-house propulsion ability.' }, { name: 'MV Electrosystems', note: 'Newly approved Indian propulsion maker competing for the same tenders.' }],
        position: "**The dominant supplier of locomotive traction transformers in India**, now climbing into converters, motors, control systems and complete propulsion.",
        money: "Net debt of about **₹225cr** (Screener, March 2026), up from ₹75cr in FY22 as working capital and capex grew; FY26 capex was ₹70cr. It raised ₹100cr in 2026 by selling new shares to Tata Mutual Fund at ₹920.50 each. Promoters hold **42.58%**, down from 44.08% in December 2023.",
        watch: ["This site's stored market value for Hind is about 100 times too high, so its live multiples here are wrong; check the price on the exchange.", "Elventive France reaching breakeven within the 3–5 quarters management expects.", "Order intake (flat in Q1 FY27), and progress on the propulsion trial."],
        charts: industrialRailwayCharts['Hind Rectifiers'],
    },
    {
        company: 'Concord Control',
        inShort: ["**A small railway-electronics company** making wireless control systems for long freight trains, Kavach anti-collision equipment (through an associate), axle counters and locomotive propulsion, plus flexible circuit boards.", "**Good:** fast growth, a 29% margin and an order book of about ₹697cr, 3.3 times FY26 revenue. **Bad:** operating cash flow was minus ₹55cr in FY26 as unpaid bills and stock piled up.", "**Verdict: follow.** It is in the right part of the chain, but the profits must turn into cash first."],
        tagline: "Railway control, safety and propulsion electronics for Indian Railways, with a flexible circuit-board maker; listed on the BSE SME platform.",
        revenue: '₹210cr (FY26, consolidated)',
        products: [
            { name: 'Distributed power wireless control (DPWCS)', text: "Radio links that let several locomotives spread along a 2–3.5 km, 25,000-tonne freight train brake and pull together. Railways wants it on every freight locomotive; it won a ₹139cr order in December 2025." },
            { name: 'Kavach anti-collision (through ProGOTA)', text: "Onboard Kavach 4.0 equipment made by ProGOTA, a 46.5% associate that has cleared the Railways prototype stage and is in field trials. Kavach orders received so far total ₹258cr." },
            { name: 'Propulsion and locomotive systems', text: "IGBT propulsion (a ₹47cr order), locomotive communication and display units, a diesel-to-battery locomotive conversion and equipment for a hydrogen fuel-cell locomotive." },
            { name: 'Axle counters and diagnostics', text: "Digital axle counters that tell a station master whether a stretch of track is clear (technology from a Spanish partner), wheel-impact detectors and overhead-line monitoring." },
            { name: 'Flexible circuit boards (Fusion Electronics)', text: "An 80% subsidiary it calls India's largest flexible circuit-board maker, with 200,000 sq m a year of capacity, selling to global car, industrial and electronics companies." },
        ],
        revenueText: "The company does not split revenue by product. The **₹697cr order book** (March 2026) is led by Kavach 4.0 onboard equipment (₹185cr and ₹54cr orders) and wireless train control (₹139cr); it includes orders taken by associates.",
        customers: ["**Indian Railways**, directly and through its design body RDSO and its Chittaranjan locomotive and Integral coach factories.", "**Kavach contractors**, through the ProGOTA associate.", "**Global car, industrial and electronics companies**, for Fusion's flexible circuit boards."],
        difficulty: { level: 'High', text: "Safety and train-control electronics need RDSO approval, safety certification and field trials that take years. Kavach is harder still: only three companies are fully approved, and ProGOTA is not yet one of them." },
        moat: "Approvals and in-house design across control, safety and propulsion, plus its own circuit-board plant, make it hard to copy quickly. The weakness: one customer, and Kavach prices could fall once it moves to open tenders.",
        salesDrivers: ["**Kavach roll-out**: the company puts the market at about ₹40,000cr to FY30; ProGOTA joining the approved vendors would be a big step.", "**Wireless control on freight locomotives**, as Railways runs longer, heavier trains to lift freight to 3,000 million tonnes.", "**Locomotive propulsion and battery or hydrogen conversions**, still at early order sizes.", "**Fusion's flexible boards**: the company sees ₹400cr+ of revenue potential after doubling capacity.", "**Management targets** revenue growth of 40–50% a year with a 22–25% operating margin."],
        inputs: "**Electronic parts**: chips, circuit boards, radio modules, sensors, cables and enclosures, plus copper-clad film for flexible boards. Materials were 49% of sales in FY26.",
        costEffect: "**Partly passed on.** Prices are fixed at tender, but its products are high value per rupee of parts, so input costs matter less than winning orders. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (29% to 24%). **What happened:** India's circuit-board price index slipped 3% from H1 FY24 to H2 FY26 while the margin rose from 26.7% to 30.2%. Materials fell from 63% of sales in FY22 to 49% in FY26 as higher-value control and safety products grew.",
        competitors: [{ name: 'Medha Servo Drives, HBL, Kernex', note: 'The three fully approved Kavach suppliers; ahead of ProGOTA on approvals.' }, { name: 'Quadrant Future Tek', note: 'Listed railway-safety electronics company working in the same area.' }, { name: 'Siemens and global signalling firms', note: 'Bid for larger, integrated signalling projects.' }],
        position: "**A small, fast-growing niche supplier** of train-control and safety electronics, with approvals from RDSO, CLW and ICF.",
        money: "Net debt of about **₹37cr** (Screener, March 2026), after being net cash a year earlier; short-term debt jumped at the year end. Unpaid bills rose to 210 days of sales and stock to 313 days in FY26; management calls it the normal year-end billing cycle but gave no peak-debt figure. Net worth rose far faster than profits in FY25 and FY26 because new shares were issued, and a move from the SME platform to the main board is under way. Promoters hold **65.57%**, down from 73.53% in October 2022.",
        watch: ["Operating cash flow turning positive and receivables falling.", "ProGOTA joining the approved Kavach vendors.", "Execution of the ₹697cr order book on time."],
        charts: industrialRailwayCharts['Concord Control'],
    },
    {
        company: 'MV Electrosystems',
        inShort: ["**A newly listed maker of electric-locomotive propulsion systems**, one of only a few Indian designers, plus coach switchgear and cable-protection products.", "**Good:** an approved, Indian-designed propulsion system and about ₹1,100cr of orders, against FY26 sales of ₹49cr. **Bad:** it is losing money and has not yet shown it can make propulsion sets in volume.", "**Verdict: wait.** Wait for monthly delivery numbers to prove the factory can ramp up."],
        tagline: "IGBT propulsion systems for 6,000 HP electric locomotives, plus coach switchgear, cable harnesses and cable protection.",
        revenue: '₹49cr (FY26, standalone)',
        products: [
            { name: '3-phase propulsion equipment', text: "The traction converters, auxiliary converters and control units that drive a 6,000 HP electric locomotive. It passed a 50,000 km field trial and started commercial supply in March 2026." },
            { name: 'Switchgear and coach/EMU panels', text: "Electrical control and protection panels for railway coaches and electric multiple units." },
            { name: 'Cable protection and harnesses', text: "Fire-safe flexible conduits, fittings, jackets and wiring harnesses for trains; its original business." },
            { name: 'New applications', text: "Development orders for MEMU propulsion, a composite converter and a hotel-load converter, and Auto Fault Locators under a deal with Korea's PNC Technologies." },
        ],
        revenueText: "The company does not split revenue by product. FY26 revenue of ₹49cr came before propulsion deliveries began at scale. The order book is **564 propulsion systems worth ₹989cr** including three-year maintenance, plus about ₹95cr of development orders and about ₹20cr of other orders.",
        customers: ["**Chittaranjan Locomotive Works**, which cleared its propulsion system for commercial supply.", "**Other Indian Railways units**: the Diesel Loco Modernisation Works placed its first propulsion order, and it has bid for EMU propulsion at the Modern Coach Factory.", "**Coach and EMU builders**, for panels, harnesses and cable protection."],
        difficulty: { level: 'Very high', text: "Only a handful of companies worldwide design locomotive propulsion. It took years of development, Railways approval and a 50,000 km trial; adding an EMU platform takes about 15–16 more months." },
        moat: "The approval is rare and slow to copy, and Railways spreads orders across bidders, so an approved supplier gets repeat quantity. The weakness: it has not yet shown it can manufacture at scale.",
        salesDrivers: ["**Delivering the order book**: it targets about 70 propulsion sets by Q3 FY27, then about 40 a month (roughly ₹70cr of sales a month), with the rest in FY28. Management targets ₹400cr of revenue this year.", "**Factory capacity**: 114 sets a year at Unit 1 and 171 at the new Unit 2, 285 on one shift.", "**Railways locomotive tenders**: it was lowest bidder in one and second-lowest in two, against Siemens, Alstom, ABB, Medha and BHEL. Railways spreads quantity so widely that even the seventh-lowest bidder got some.", "**MEMU and EMU propulsion**, through a consortium it leads with Korean and Indian partners."],
        inputs: "**IGBT power chips and gate drivers**, capacitors, heat sinks, **circuit boards**, cables and steel enclosures. Key long-lead parts are already on order. Materials were 68% of sales in FY26.",
        costEffect: "**Not yet tested.** Prices are fixed at tender, and the main parts are imported chips, so currency moves matter. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (−20% to −27%). **What happened:** India's circuit-board price index rose only 4% from Q1 FY26 to Q1 FY27, but the loss widened from −26% to −42% of sales. The cause was costly stock bought during development and staff hired ahead of production, not part prices.",
        competitors: [{ name: 'Siemens, Alstom, ABB', note: 'Global propulsion makers with long-approved platforms.' }, { name: 'Medha, BHEL', note: 'Established Indian propulsion suppliers to Railways.' }, { name: 'Hind Rectifiers', note: 'Indian traction-equipment maker now trialling its own propulsion.' }],
        position: "**One of the few Indian companies with a Railways-approved, home-designed locomotive propulsion system.**",
        money: "Net debt was about **₹55cr** (Screener, March 2026), before the IPO. It raised ₹290cr of new money in August 2026 (all new shares), including ₹180cr for working capital and ₹21cr for research; management says ₹1,000cr of sales needs about ₹200cr of working capital. Promoters hold **57.68%** after the listing.",
        watch: ["Monthly propulsion deliveries against the 70-sets-by-Q3 target.", "Losses narrowing as the factory fills.", "New orders; management did not know of a cancelled 127-set Patiala tender raised on the call."],
        charts: industrialRailwayCharts['MV Electrosystems'],
    },
    {
        company: 'Titagarh Railsystems',
        inShort: ["**India's only maker of both freight wagons and passenger coaches**, including metro trains and Vande Bharat sleeper coaches, with propulsion, a shipyard and a wheel joint venture.", "**Good:** a ₹13,335cr order book, mostly passenger coaches, and a rising share of higher-value work. **Bad:** it is making fewer wagons while a big Railways tender is awaited, and cash generation has been weak.", "**Verdict: wait.** I would buy when the wagon tender is awarded and the coach ramp-up shows in cash."],
        tagline: "Freight wagons, metro and passenger coaches, propulsion and castings, with a shipyard and a forged-wheel joint venture.",
        revenue: '₹3,186cr (FY26, consolidated)',
        products: [
            { name: 'Freight rail systems', text: "Freight wagons for Indian Railways and private buyers, plus steel castings from two foundries and specialised equipment and bridges. It can run at 1,000 wagons a month; it dispatched 1,284 wagons in Q1 FY27." },
            { name: 'Passenger rail systems', text: "Metro coaches, Vande Bharat sleeper coaches (with BHEL), and propulsion sets and traction motors. It had 491 metro coaches and 1,280 Vande Bharat coaches on order in June 2026." },
            { name: 'Ships', text: "Titagarh Naval Systems builds vessels at its Falta shipyard near Kolkata, which is being expanded at a cost of about ₹600cr." },
            { name: 'Forged wheels (joint venture)', text: "A 49% venture with Ramkrishna Forgings building a 228,000-wheel-a-year plant in Chennai (about ₹2,000cr), with a 20-year Railways supply contract. Trial wheels are being made now." },
            { name: 'Vande Bharat maintenance (joint venture)', text: "A 50:50 company with BHEL that will maintain 80 Vande Bharat sleeper trainsets for 35 years." },
        ],
        revenueText: "Freight was **83% of FY26 standalone revenue** and passenger rail 17%. The mix is shifting fast: passenger rail was **31% in Q1 FY27**, a record ₹230cr. The standalone order book of ₹13,335cr is about **78% passenger** (₹10,395cr), 19% freight (₹2,470cr) and the rest ships; its share of joint-venture orders adds another ₹13,300cr.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (standalone, company)', parts: [{ label: 'Freight rail', share: 83 }, { label: 'Passenger rail', share: 17 }] },
            { caption: 'Revenue by segment, Q1 FY27 (standalone, company)', parts: [{ label: 'Freight rail', share: 69 }, { label: 'Passenger rail', share: 31 }] },
        ],
        customers: ["**Indian Railways**, for wagons, Vande Bharat sleeper coaches and wheels.", "**Metro rail companies** in cities such as Pune, Bangalore and Gujarat (Surat and Ahmedabad).", "**Private wagon buyers** such as logistics and industrial companies, and the Navy, Coast Guard and other ship buyers."],
        difficulty: { level: 'High', text: "Wagons are a simple welded product anyone licensed can make, but metro and Vande Bharat coaches need aluminium car-body skills, propulsion and long approval records. Titagarh is the only Indian company to have built aluminium coach bodies." },
        moat: "Its range, from castings to complete metro trains, lets it bid for work most wagon makers cannot. The weakness: wagons, still most of revenue, are won on lowest price.",
        salesDrivers: ["**The Railways wagon tender**: an expected order of about 1 lakh wagons has not been issued. Titagarh is deliberately running at 600–650 wagons a month instead of 1,000 so its backlog lasts.", "**Metro and Vande Bharat deliveries**: about 200 coaches planned this year against 63 in FY26. It sees about ₹16,365cr of metro opportunities in the pipeline.", "**Propulsion and in-house car bodies**: making more of each train itself raises its share of the value; the aluminium body line at Pune should start in Q1 FY28, replacing parts once made by its Italian unit Firema, which it is now exiting.", "**Long-term targets**: capacity for 850+ coaches a year and 1,200 wagons a month by FY30, and a 15% margin. Metro orders carry maintenance, about 15% of recent order values.", "**Wheels, leasing and maintenance joint ventures** start adding income over the next few years."],
        inputs: "**Steel plate and sections** for wagons, **aluminium extrusions** for coach bodies, bought-in propulsion parts, bogies and wheels, and scrap and alloys for its foundries. Materials were 73% of sales in FY26.",
        costEffect: "**Partly passed on.** Railways and metro contracts generally include price-variation clauses; fixed-price private orders do not. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (10% to 3%). **What happened:** India's hot-rolled steel price index fell 6% from Q1 FY24 to Q1 FY27 and the margin was broadly flat, 11.6% to 12.3%, with a sharp dip to 1.8% in Q4 FY25. Volumes and the passenger mix moved the margin more than steel did.",
        competitors: [{ name: 'Texmaco Rail, Jupiter Wagons, Braithwaite', note: 'Wagon rivals competing on price for the same Railways tenders.' }, { name: 'Alstom, BEML', note: 'Established metro coach makers competing for city metro orders.' }, { name: "Railways' own coach factories (ICF)", note: 'The customer can make coaches itself; the Mumbai suburban order was cancelled and taken in-house.' }],
        position: "**About 25% of India's wagon market** and the only Indian company making both wagons and coaches.",
        money: "Net debt of about **₹306cr** (Screener, March 2026), against a further ₹279cr of investments. Capex was ₹369cr in FY26, with about ₹600cr planned for the shipyard; free cash flow has been negative in four of the last five years. Promoters hold **40.46%**, down from 44.97% in September 2023; warrants issued to promoters would lift this to 41.44% when converted.",
        watch: ["Award of the 1 lakh wagon tender.", "Coach deliveries against the 200 target, and the wheel plant (already late) starting output.", "A clean exit from Firema, and operating cash flow staying positive."],
        charts: industrialRailwayCharts['Titagarh Railsystems'],
    },
    {
        company: 'Texmaco Rail',
        inShort: ["**One of India's biggest wagon makers**, with its own steel foundries, a rail-infrastructure arm and an electrical-projects business.", "**Good:** 96% of its wagon orders now come from private and export buyers, and the order book is ₹9,923cr. **Bad:** thin margins, weak cash generation and an unexplained large provision from Q4.", "**Verdict: pass.** Wagon-making margins are capped, and the provision needs an answer."],
        tagline: "Freight wagons and railway castings, plus rail-infrastructure and electrical transmission projects; part of the Adventz group.",
        revenue: '₹4,377cr (FY26, consolidated)',
        products: [
            { name: 'Freight cars', text: "More than 20 wagon types for Indian Railways, private operators and export; capacity of 2,500–3,000 wagons a quarter. It sold 1,054 wagons in Q1 FY27." },
            { name: 'Steel foundry and components', text: "Castings, bogies and couplers from foundries at Belgharia (33,000 tonnes a year) and Raipur (15,000 tonnes), also sold abroad and approved by the Association of American Railroads." },
            { name: 'Infra – Rail and green energy', text: "Track, signalling, electrification and safety systems for Railways, plus renewable-energy work." },
            { name: 'Infra – Electrical (Bright Power)', text: "Power transmission and electrical projects; revenue rose 77% to ₹175cr in Q1 FY27." },
            { name: 'Joint ventures', text: "Wagon leasing with Touax (50%), European wagon designs with Nymwag (51%), brakes with Wabtec (40%) and coach interiors with Saira Asia (51%)." },
        ],
        revenueText: "Freight cars were **69% of Q1 FY27 standalone revenue** (₹753cr), electrical projects 23% and rail infrastructure 8%. The ₹9,923cr order book is **62% freight cars**, 18% rail infrastructure and green energy, 10% electrical, and 10% subsidiaries and joint ventures.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (standalone, company)', parts: [{ label: 'Freight cars', share: 69 }, { label: 'Infra – Electrical', share: 23 }, { label: 'Infra – Rail and green energy', share: 8 }] },
            { caption: 'Order book by division, June 2026 (consolidated, company)', parts: [{ label: 'Freight cars', share: 62 }, { label: 'Infra – Rail and green energy', share: 18 }, { label: 'Infra – Electrical', share: 10 }, { label: 'Subsidiaries and JVs', share: 10 }] },
        ],
        customers: ["**Private and export wagon buyers**: 96% of the wagon order book, up from 21% in FY25, including a ₹4,100cr South African order with 15 years of maintenance.", "**Indian Railways**, now only 4% of wagon orders, plus rail-infrastructure and signalling contracts.", "**Power utilities and transmission companies** for the electrical business."],
        difficulty: { level: 'Medium', text: "Wagons are built to the customer's approved drawing, and industry capacity is far above demand. The foundry and export approvals are harder to earn, but they do not stop price competition." },
        moat: "Its own foundry, scale and export record help it win private and overseas orders, and attached maintenance adds steady income. The weakness: wagons are sold mostly on price.",
        salesDrivers: ["**Private and export orders**, which have replaced Railways orders in the book. About half the South African wagon revenue falls in FY28, and a ₹200–300cr local plant is planned there.", "**The Railways wagon tender** of about 1 lakh wagons, which has not yet been issued.", "**Electrical and rail-infrastructure projects**, now about a third of revenue.", "**Leasing**: US-based TrinityRail has joined the Touax leasing venture, which aims to lift its leasing share from 15% to 50%, starting with 100 new rakes.", "**Management targets** 15–20% revenue growth in the next year or two, double the revenue by 2030 and a mid-teens margin."],
        inputs: "**Steel plate and sections** for wagons, **scrap and alloys** for the foundry, bought-in wheels and brakes, and cables and towers for electrical projects. Materials were 76% of sales in FY26.",
        costEffect: "**Partly passed on.** Railways contracts generally include price-variation clauses, but these are now only 4% of wagon orders; fixed-price private and export orders depend on how well it locked in costs when bidding. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (9% to 1%). **What happened:** India's hot-rolled steel price index fell 6% from Q1 FY24 to Q1 FY27 while the margin rose from 3.2% to 7.5%. Higher volumes and the electrical business, not steel, drove most of the gain; wagon output fell in Q1 FY27 on component shortages.",
        competitors: [{ name: 'Titagarh Railsystems', note: 'About 25% of wagons, and stronger in passenger coaches.' }, { name: 'Jupiter Wagons', note: 'Wagon rival also moving into brakes and wheels.' }, { name: 'Braithwaite and smaller wagon yards', note: 'Add to spare capacity and keep prices tight.' }],
        position: "**One of India's two largest wagon makers**; the company says it builds one in every four wagons on the Railways network.",
        money: "Net debt of about **₹663cr** (Screener, March 2026), against ₹373cr of investments. Capex was ₹533cr in FY25 and ₹167cr in FY26. Operating cash has been only 24% of operating profit over five years. Promoters hold **48.34%**, down from 58.70% in September 2023.",
        watch: ["An explanation of the roughly ₹700cr Q4 provision and the auditor's qualification, not discussed on the Q1 call.", "Wagon output recovering from 1,054 in Q1 FY27 (2,196 in Q4 FY26) as bogie shortages ease.", "Progress on the South African order and its maintenance income."],
        charts: industrialRailwayCharts['Texmaco Rail'],
    },
    {
        company: 'Jupiter Wagons',
        inShort: ["**A wagon maker moving into brakes, wheels, containers and battery storage**, mainly selling wagons to private freight operators.", "**Good:** the Stone India brake unit started production in July 2026, and an Italian partner is putting ₹290cr into the wheel business. **Bad:** the margin fell from 13% to 10%, and heavy spending pushed free cash flow to minus ₹526cr in FY26.", "**Verdict: pass.** Big spending on new businesses while the wagon business is shrinking."],
        tagline: "Freight wagons, brakes, wheels and axles, commercial-vehicle bodies and containers, and battery energy storage.",
        revenue: '₹2,916cr (FY26, consolidated)',
        products: [
            { name: 'Wagons', text: "Open, covered, flat, defence and container wagons; India's largest maker of 25-tonne-axle-load wagons. Recent orders came from JSW group companies, Central Warehousing Corporation and Orissa Alloy Steel." },
            { name: 'Brakes (Stone India and joint ventures)', text: "Stone India's freight brake system won Railways approval and started commercial production in July 2026. Joint ventures with Czech DAKO-CZ and Slovenian Kovis make brakes and brake discs for high-speed and metro trains." },
            { name: 'Wheels and axles', text: "A greenfield wheel plant in Odisha with Italy's Lucchini RS, which with Italy's SIMEST will pay about ₹290cr for 25%. Partial output is expected by end-FY27 and full production by end-FY28." },
            { name: 'Road and container products', text: "Load bodies for commercial vehicles, water tankers, fire engines, electric light commercial vehicles and shipping containers (1,460 made in FY26)." },
            { name: 'Battery energy storage (JEM)', text: "Containerised storage systems and a 100 MW/400 MWh West Bengal project it will build, own and run for 15 years (about ₹400cr); its storage order book is over ₹500cr." },
        ],
        revenueText: "The company does not split revenue by business. The order book was **₹4,550cr in June 2026**: on the call management put wagons at about ₹3,000cr (80% private customers), wheelsets about ₹700cr, vehicle bodies about ₹500cr and battery storage about ₹500cr. It expects to deliver 60–70% of the book in FY27.",
        mixes: [
            { caption: 'Order book by business, June 2026 (approximate, management on call)', parts: [{ label: 'Wagons', share: 64 }, { label: 'Wheelsets', share: 15 }, { label: 'Battery storage', share: 11 }, { label: 'Vehicle bodies', share: 10 }] },
        ],
        customers: ["**Private freight and logistics operators**, such as JSW group companies, plus Central Warehousing Corporation.", "**Indian Railways**, for wagons, brakes and, later, wheels.", "**Truck makers, fleet owners and power companies**, for vehicle bodies, containers and battery storage."],
        difficulty: { level: 'Medium', text: "Wagons and vehicle bodies are simple fabrication with lots of spare industry capacity. Brakes and forged wheels are genuinely harder, needing metallurgy, approvals and years of trials, which is why it has foreign partners." },
        moat: "Few Indian companies make wagons, brakes and wheels together, which could lower costs and win export work. The weakness: today most profit still comes from wagons sold on price.",
        salesDrivers: ["**Private wagon orders** and the delayed Railways tender of about 1 lakh wagons.", "**Brakes becoming in-house**: Stone India's freight brake will supply all its own wagons by the end of 2026; management expects Stone India to turn profitable from Q3 FY27 and reach a 15% margin by FY28.", "**Wheels from end-FY27**: the 100,000-wheelset Odisha plant will send half its output abroad, anchored by a supply deal with Slovakia's Tatravagonka. Management sees ₹2,500–3,000cr of revenue at full use.", "**Battery storage**: it targets a ₹1,000cr storage order book by the end of FY27, but expects this arm to turn profitable only in FY28."],
        inputs: "**Steel plate and sections** for wagons and bodies, bought-in wheelsets, **steel billets** for the future wheel plant, and battery cells for storage. Materials were 72% of sales in FY26.",
        costEffect: "**Partly passed on.** Railways orders generally include price-variation clauses; private orders, now most of the book, are fixed-price, so cost changes hit until repriced. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (12% to 5%). **What happened:** India's hot-rolled steel price index fell 6% from Q1 FY24 to Q1 FY27, yet the margin fell from 12.9% to 9.7%. Lower wagon volumes and switching lines to new private designs, not steel, pulled it down.",
        competitors: [{ name: 'Texmaco Rail', note: 'The largest wagon maker, also chasing private and export orders.' }, { name: 'Titagarh Railsystems', note: 'Wagon rival with a competing wheel plant (with Ramkrishna Forgings) due at the same time.' }, { name: 'Imported wheels from China and Europe', note: 'Current suppliers that the new wheel plant must displace.' }],
        position: "**One of India's main wagon makers**, and the largest maker of 25-tonne-axle-load wagons.",
        money: "Net debt of about **₹554cr** (Screener, March 2026), up from net cash a year earlier. Capex was ₹508cr in FY25 and ₹535cr in FY26. The Odisha wheel plant costs about ₹2,600cr in total, of which Jupiter now puts in ₹600cr of equity (down from ₹900cr after the Italian investment); the ₹400cr battery project is extra. Promoters hold **68.31%**, down from 72.37% in September 2023.",
        watch: ["Wagon volumes and margin recovering from 9.7%.", "The wheel plant staying on time and budget, and finding buyers alongside Titagarh's.", "How the ₹400cr battery-storage project is funded."],
        charts: industrialRailwayCharts['Jupiter Wagons'],
    },
];

export const industrialRailwayBusinesses = { intro, profiles };
