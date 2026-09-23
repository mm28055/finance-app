import { BusinessProfile, OverviewSection } from './types';

// Tab 2 of the Electrical Equipment note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' Q1 FY27 presentations and calls; where a split is not
// disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each covers what it sells, where the revenue comes from, who buys and how, how hard the product is to make, and why customers stay. Revenue totals are filed figures; splits are from each company's latest presentation or call, and some are my calculations from those figures (marked).",
        ],
    },
    {
        heading: 'The equipment, in plain words',
        body: [
            "Follow electricity from where it is made to where it is used.",
        ],
        points: [
            {
                label: 'Steam turbine, gas engine, generator',
                text: "A **turbine** or **engine** spins; a **generator** (an alternator) attached to it turns that motion into electricity. Industrial steam turbines (Triveni) run on steam from burning biomass, waste or fuel, or on waste heat from factories. Generators (TD Power) are built to match whoever makes the turbine or engine, and are sold to those makers.",
            },
            {
                label: 'Gearbox',
                text: "Changes speed and force between a motor and a machine: a conveyor, a crusher, a steel mill roll, a ship's propeller. Industrial gearboxes (Elecon) are either catalogue products or engineered to order.",
            },
            {
                label: 'Conductors and cables',
                text: "**Conductors** are the bare aluminium or composite wires strung on transmission towers; premium types (HTLS) carry more power on the same towers. **Cables** are insulated and run underground, inside buildings, trains, ships and data centres (Apar, Salzer).",
            },
            {
                label: 'Smart meter and switchgear',
                text: "A **smart meter** records electricity use and reports it remotely, so utilities can bill accurately and cut theft (Genus). **Switchgear** switches circuits on and off and protects them from faults: switches, contactors, relays (Salzer). **Enclosures** are the metal or plastic boxes that house meters and switchgear (RMC).",
            },
            {
                label: 'Wind turbine, towers and structures',
                text: "A **wind turbine** (Inox Wind) is a tower, a nacelle holding the generator and gearbox, and blades. Steel **towers and structures** (KP Green) hold up transmission lines, telecom antennas and solar panels; they are galvanised (coated in zinc) to last decades outdoors.",
            },
            {
                label: 'Power electronics and chargers',
                text: "Devices that convert and control electricity: **EV chargers** (AC wallbox chargers at home; DC fast chargers in public), **inverters** for solar and batteries, **power systems** for telecom towers (Exicom, Servotech), and the **power semiconductors** inside them, such as thyristors and silicon-carbide chips (RIR).",
            },
        ],
    },
    {
        heading: 'Five ways of selling',
        body: [
            "How a company sells explains most of the gap in cash conversion in Tab 1.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**To global equipment makers (OEMs)**', 'TD Power, Triveni (partly), Elecon exports', 'Negotiated, often with price-variation clauses', 'Normal credit terms; some advances'],
                    ['**Private and export projects**', 'Apar exports, Triveni, KP Green (solar structures)', 'Negotiated or bid', 'Milestones; fairly reliable'],
                    ['**Indian government utilities and PSUs**', 'Genus, RMC, Apar (domestic), Elecon (PSUs), KP Green (BSNL)', 'Tenders, often fixed-price', 'Slow; retention money held back'],
                    ['**Group companies**', 'Inox Wind (Inox Clean/Green), KP Green (KP group)', 'Stated to be arm’s length', 'Depends on the group’s own funding'],
                    ['**Dealers, retail and white-label**', 'Salzer, Exicom (wallbox chargers), Servotech', 'Price lists or cost-plus', 'Quick, but thin margins'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Engineered machines ──────────────────────────────────────────────────
    {
        company: 'Elecon Engg.Co',
        tagline: "India's leading industrial gearbox maker, with a material-handling equipment business and assembly and sales companies abroad.",
        revenue: '₹2,366cr (FY26, consolidated)',
        products: [
            { name: 'Industrial gears', text: "Catalogue gearboxes (54% of gear sales, priced from a monthly list) and engineered gearboxes (46%) for steel, cement, power, sugar, mining and ports, plus marine and naval gearboxes." },
            { name: 'Material-handling equipment', text: "Custom conveyor systems, stacker-reclaimers, wagon tipplers and crushers, mostly for power plants, cement and ports." },
            { name: 'Overseas businesses', text: "Benzler (Europe), Radicon (UK and US) and a Singapore unit, which assemble and sell gearboxes close to customers." },
        ],
        revenueText: "Gears were **80% of Q1 FY27 revenue** and material handling 20%. Overseas revenue was 29% of the quarter; in FY26 it was ₹463cr, led by Europe (₹171cr), the UK (₹102cr) and the US (₹102cr).",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Gears', share: 80 }, { label: 'Material handling', share: 20 }] },
            { caption: 'Overseas revenue by region, FY26 (₹463cr)', parts: [{ label: 'Europe (Benzler)', share: 37 }, { label: 'UK', share: 22 }, { label: 'US', share: 22 }, { label: 'Middle East', share: 14 }, { label: 'Singapore', share: 5 }] },
        ],
        customers: [
            "**Steel, cement, power and sugar plants**, many of them public-sector, often through their EPC contractors.",
            "**Navy and shipbuilders** (naval gearboxes) and **ports and mines**.",
            "**Overseas OEMs** in the Middle East, US and Europe; it serves 95+ countries.",
        ],
        difficulty: { level: 'High', text: "Large engineered and naval gearboxes need precise design, heat treatment and testing done in-house. Catalogue gears face competition from multinationals building Indian plants." },
        moat: "Breadth of range, a 75-year record and fast delivery make it a preferred supplier to Indian heavy industry. Pricing is limited by PSU buyers and foreign rivals.",
    },
    {
        company: 'TD Power Systems',
        tagline: "Bangalore-based maker of generators and motors, sold mostly to global engine and turbine makers; one of the few independent suppliers in its size range.",
        revenue: '₹1,856cr (FY26, consolidated)',
        products: [
            { name: 'Generators up to ~100 MW', text: "For gas engines, gas turbines, steam turbines and hydro plants; demand is being driven by US data centres and grid stabilisation." },
            { name: 'Motors', text: "Large electric motors for industry, a growing line." },
            { name: 'Railways and aftermarket', text: "Traction equipment for Indian Railways (no new orders being taken), plus spares and service (5–6% of sales). A small plant in Turkey serves as backup capacity." },
        ],
        revenueText: "Most orders now come from exports: **93% of Q1 FY27 order inflow** and about 57% of the ₹2,208cr order book (excluding railways). By business, generators and motors are 87% of the order book.",
        mixes: [
            { caption: 'Order book by business, June 2026 (₹2,208cr)', parts: [{ label: 'Generators and motors', share: 87 }, { label: 'Railways', share: 10 }, { label: 'Turkey', share: 2 }, { label: 'Aftermarket', share: 1 }] },
        ],
        customers: [
            "**Global makers of gas engines and gas and steam turbines**, including a major US gas-turbine maker and European and US OEMs building for the US market. It says it works with all the major engine and turbine makers.",
            "**Indian turbine and hydro equipment makers** (captive power, waste heat, hydro refurbishment).",
            "Its products reach 98+ countries through these customers.",
        ],
        difficulty: { level: 'High', text: "Generators must be engineered to each OEM's machine and qualified before orders arrive. The hard part is winning and keeping OEM qualification and delivering on time as volumes jump." },
        moat: "Qualification with the world's engine and turbine makers, at a time when generators are in short supply. Customers depend on it for delivery, which gives it room to hold margins.",
    },
    {
        company: 'Triveni Turbine',
        tagline: "One of the world's leading makers of industrial steam turbines up to 100 MW, with 6,000+ installed in 80+ countries.",
        revenue: '₹2,181cr (FY26, consolidated)',
        products: [
            { name: 'Steam turbines', text: "For captive power and process steam in sugar, steel, cement, paper, chemicals, biomass and waste-to-energy plants, and for utilities." },
            { name: 'Aftermarket', text: "Spares, service, upgrades and refurbishment of its own and other makers' turbines, including gas turbines and geothermal units." },
            { name: 'New technologies', text: "Organic Rankine cycle units (power from low-temperature heat), heat pumps, and a CO₂-based energy-storage pilot with NTPC." },
        ],
        revenueText: "In Q1 FY27 **domestic sales were 54% and exports 46%**. Aftermarket is **29% of the ₹2,180cr order book**, and exports 57% of it.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27', parts: [{ label: 'India', share: 54 }, { label: 'Exports', share: 46 }] },
            { caption: 'Order book by type, June 2026', parts: [{ label: 'New turbines', share: 71 }, { label: 'Aftermarket', share: 29 }] },
        ],
        customers: [
            "**Process industries** (sugar, steel, cement, paper, chemicals) building captive power, in India, Southeast Asia, Africa and Europe.",
            "**Utilities and developers**: NTPC (energy storage pilot), and US data-centre and combined-cycle projects it is bidding for.",
            "Sold directly and through consultants and EPC contractors.",
        ],
        difficulty: { level: 'High', text: "Steam turbines need precise aerodynamic design, high-temperature materials and machining, and long reliability records. Few companies make them in this size range." },
        moat: "Its own designs, a large installed base that feeds a growing aftermarket, and qualification with consultants and EPC firms worldwide.",
    },
    {
        company: 'GE Power',
        tagline: "GE Power India: the Indian arm of GE Vernova's steam power business, now mainly servicing steam turbines and boilers at power plants.",
        revenue: '₹1,269cr (FY26, consolidated)',
        products: [
            { name: 'Power-plant services', text: "Maintenance, overhauls, upgrades and spares for steam turbines, generators and boilers, for its own (GE and legacy Alstom) fleet and increasingly for other makers' equipment." },
            { name: 'Exited businesses', text: "It sold its hydro and gas businesses, settled with BHEL, and is demerging its Durgapur boiler-component factory into JSW Energy (10 JSW Energy shares for every 139 GE Power India shares)." },
        ],
        revenueText: "Services orders were ₹734cr in FY26, up 34%. Orders for other makers' fleets grew from ₹162cr to about ₹320cr, **roughly 44% of the total** (my calculation). Revenue has fallen from ₹2,620cr in FY22 as project work was dropped.",
        mixes: [
            { caption: 'Services order booking by fleet, FY26 (my calculation)', parts: [{ label: 'GE and Alstom fleet', share: 56 }, { label: 'Other makers’ fleets', share: 44 }] },
        ],
        customers: [
            "**Thermal power producers** in India (central, state and private).",
            "**International customers** in Saudi Arabia, Turkey, Austria, the UAE, Malaysia, Indonesia and Morocco.",
        ],
        difficulty: { level: 'High', text: "Servicing large steam turbines and boilers needs original designs, specialist engineers and access to parts. The parent's technology is the core of the offer." },
        moat: "The installed base of GE and Alstom equipment in Indian power plants, which needs periodic overhauls, plus the parent's technology. Growth depends on how much thermal capacity keeps running.",
    },

    // ── Grid products ────────────────────────────────────────────────────────
    {
        company: 'Apar Inds.',
        tagline: "One of the world's largest makers of power-line conductors, also a major maker of transformer oils and specialty cables.",
        revenue: '₹22,902cr (FY26, consolidated)',
        products: [
            { name: 'Conductors', text: "Conventional aluminium conductors, premium high-capacity conductors (HTLS) that upgrade existing lines, fibre-optic ground wire (OPGW), and copper conductors for railways." },
            { name: 'Specialty oils', text: "Transformer oils (a global leader), automotive and industrial lubricants, from plants in India and the UAE." },
            { name: 'Cables', text: "Medium-voltage power cables, rubber (elastomeric) cables for railways, defence and solar, data-centre cables for the US, and a new retail wires business." },
        ],
        revenueText: "In Q1 FY27 **conductors were 48% of divisional revenue, cables 27% and oils 25%**. Exports were 27.5% of the total. Premium products were 50% of conductor sales. The conductor order book is ₹10,190cr, 57% of it export.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (before eliminations)', parts: [{ label: 'Conductors', share: 48 }, { label: 'Cables', share: 27 }, { label: 'Specialty oils', share: 25 }] },
        ],
        customers: [
            "**Transmission developers and utilities** in India (Power Grid and private developers), and **large US and European utilities** (two multi-year contracts worth over ₹2,800cr in Q1).",
            "**US data-centre electrical contractors**: it is now approved for cables at Google, Microsoft and Meta sites.",
            "**Transformer makers** (oils), **Indian Railways and defence** (cables), and **retail** (lubricants and wires).",
        ],
        difficulty: { level: 'Medium', text: "Conventional conductors are made by many. Premium conductors, US utility and data-centre approvals, and specialty oils need testing, qualification and scale that few can match." },
        moat: "Global scale, low cost, and approvals from demanding buyers (US utilities, hyperscale data centres). Metal prices are passed through, so the margin is on conversion, not on the metal.",
    },
    {
        company: 'Genus Power',
        tagline: "One of India's largest smart-meter makers, and a meter service provider that installs, owns and runs meters for utilities under long concessions.",
        revenue: '₹4,751cr (FY26, consolidated)',
        products: [
            { name: 'Smart meters', text: "Single- and three-phase electricity meters with its own communication (RF mesh), made at 18 million+ a year." },
            { name: 'Metering service (AMISP)', text: "Under the government's RDSS scheme it installs meters and runs the data systems for utilities, paid monthly over 8–9 years. The projects sit in a platform owned 74% by GIC (Singapore) and 26% by Genus." },
            { name: 'Software and new meters', text: "Head-end and meter-data software; smart gas and water meters; exports (target ₹500cr in two to three years)." },
        ],
        revenueText: "Most revenue today is supplying and installing meters for its own concessions. The ₹25,173cr order book is roughly **64% meter supply and installation, 28% operation and maintenance, and 8% other meters and exports** (from management's split). O&M revenue was about ₹150cr in FY26 and is expected to reach ₹800–900cr a year.",
        mixes: [
            { caption: 'Order book by type, March 2026 (management)', parts: [{ label: 'Meters and installation', share: 64 }, { label: 'Operation and maintenance', share: 28 }, { label: 'Other meters and exports', share: 8 }] },
        ],
        customers: [
            "**State electricity distribution companies**, through 24 metering projects covering 3.61 crore meters.",
            "**Other metering service providers** that buy its meters, and export customers.",
            "It holds about 22–23% of metering-service awards and over 30% of meter manufacturing.",
        ],
        difficulty: { level: 'Medium', text: "Meters are electronics plus firmware and communication; the harder part is running millions of meters and the software for years. Many competitors make meters." },
        moat: "Scale, in-house communication and software, and 8–9 year service contracts. But prices are fixed at tender with no pass-through, and it must fund the meters until utilities pay.",
    },
    {
        company: 'Salzer Electronics',
        tagline: "Coimbatore-based maker of industrial switchgear, wires and cables, and building electrical products, with a large white-label business.",
        revenue: '₹1,758cr (FY26, consolidated)',
        products: [
            { name: 'Industrial switchgear', text: "Rotary and cam switches, contactors, relays, small transformers, wire harnesses and terminal connectors." },
            { name: 'Wires and cables', text: "About 70% made white-label for large brands and OEMs on a cost-plus basis." },
            { name: 'Building products and new lines', text: "Modular switches for homes (south and east India), DC fast chargers (160–170 installed), and a smart-meter plant that is largely idle." },
        ],
        revenueText: "In Q1 FY27 **switchgear was 54% of revenue** (8% EBITDA margin), **wires and cables 40%** (5% margin) and building products 6%. Exports were 19%. About 15% of sales go through Lauritz Knudsen, Schneider's Indian switchgear brand.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27', parts: [{ label: 'Industrial switchgear', share: 54 }, { label: 'Wires and cables', share: 40 }, { label: 'Building products', share: 6 }] },
        ],
        customers: [
            "**Equipment makers** (HVAC, machinery, panels) in India and the US, UK and Europe.",
            "**Lauritz Knudsen (Schneider)** as a distributor, **cable brands** (white-label), **railways**, and **electrical wholesalers and retailers**.",
        ],
        difficulty: { level: 'Low', text: "Standard switchgear and cables are made by many firms. Salzer is vertically integrated, which helps cost but not pricing." },
        moat: "Long OEM relationships and the LK channel. Weak pricing power: metal costs take about two months to pass on, and margins shrink when copper and silver spike.",
    },
    {
        company: 'RMC Switchgears',
        tagline: "Jaipur-based maker of meter enclosures and feeder pillars, which also builds distribution and solar projects for state utilities.",
        revenue: '₹402cr (FY26, consolidated)',
        products: [
            { name: 'Electrical products', text: "Smart-meter enclosures, feeder pillars and distribution boxes." },
            { name: 'Electrical EPC', text: "Distribution and transmission infrastructure and substations for utilities." },
            { name: 'Solar EPC', text: "Ground-mounted solar plants and solar pumps, its largest line. It is also piloting PulseBox, an IoT device that monitors distribution transformers for theft and faults." },
        ],
        revenueText: "In FY26 **solar EPC was 52% of revenue (₹209cr), electrical products 24% (₹96cr) and electrical EPC 24% (₹96cr)**. About 95% of revenue is from government bodies. Q1 FY27 revenue fell 56%.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Solar EPC', share: 52 }, { label: 'Electrical products', share: 24 }, { label: 'Electrical EPC', share: 24 }] },
        ],
        customers: [
            "**State electricity utilities** (e.g. Maharashtra) and their contractors, on tenders with 10% retention money held until completion.",
            "A small private and EPC-contractor business for enclosures.",
        ],
        difficulty: { level: 'Low', text: "Enclosures and utility EPC are open to many bidders. PulseBox could differentiate it, but it is not yet ordered." },
        moat: "Little: utility relationships and approvals, in a crowded, price-driven market.",
    },

    // ── Wind and structures ──────────────────────────────────────────────────
    {
        company: 'Inox Wind',
        tagline: "Wind-turbine maker from the Inox GFL group, with a 4.4 GW order book; group companies service the turbines and are major buyers.",
        revenue: '₹4,397cr (FY26, consolidated)',
        products: [
            { name: 'Wind turbines', text: "3 MW-class turbines, with a 4 MW model being prototyped; 80–90% of components made in India." },
            { name: 'Turnkey projects', text: "Building complete wind farms (now shifting towards equipment-only supply to cut receivables)." },
            { name: 'Related group businesses', text: "Inox Renewable Solutions (EPC, transformers, cranes) and Inox Green (turbine operation and maintenance, 13.3 GW portfolio) are separate companies." },
        ],
        revenueText: "Of third-party orders, **59% are equipment supply and 41% turnkey**. The group's own renewable developer, Inox Clean, has signed an MOU for 1.5 GW, with a firm 500 MW order worth up to ₹3,500cr.",
        mixes: [
            { caption: 'Third-party order book by type, July 2026', parts: [{ label: 'Equipment supply', share: 59 }, { label: 'Turnkey', share: 41 }] },
        ],
        customers: [
            "**Public-sector and utility buyers**: NTPC, NLC India (repeat 200 MW order), CESC.",
            "**Independent producers and companies**: Aditya Birla, Amplus/Gentari, Hero Future Energies.",
            "**Inox Clean**, a group company and its largest single customer.",
        ],
        difficulty: { level: 'High', text: "Wind turbines combine large blades, gearboxes, generators and control systems that must run for 25+ years. Competitors include Suzlon, Siemens Gamesa and Envision." },
        moat: "Localised supply chain and a service arm in the group. Weakened by heavy dependence on group orders and a history of slow collections.",
    },
    {
        company: 'KP Green Engg.',
        tagline: "Surat-based maker of galvanised steel structures (towers, solar mounting structures, poles, crash barriers), part of the KP group; listed on the BSE SME platform.",
        revenue: '₹1,246cr (FY26, standalone)',
        products: [
            { name: 'Transmission and telecom towers', text: "Approved in 16+ states; a ₹819cr BSNL telecom-tower order with O&M." },
            { name: 'Solar structures', text: "Mounting structures for solar farms; approved by tracker makers Nextracker and GameChange Solar." },
            { name: 'Other structures', text: "Poles and lighting, road crash barriers (first in India to pass all three crash tests), pre-engineered buildings, and heavy engineering (RDSO-approved)." },
            { name: 'Galvanising', text: "Asia's largest hot-dip galvanising kettle (90,000 tonnes a year)." },
        ],
        revenueText: "The company does not split revenue by product. Of its ₹1,831cr order book, **BSNL is about 45%**, group companies 22–23% and other outside customers the rest. Plants ran at 30–34% of their 4 lakh-tonne capacity in FY26.",
        mixes: [
            { caption: 'Order book by customer, March 2026 (my calculation)', parts: [{ label: 'BSNL', share: 45 }, { label: 'Other outside customers', share: 32 }, { label: 'KP group companies', share: 23 }] },
        ],
        customers: [
            "**BSNL** (telecom towers), **state transmission utilities**, **renewable developers**, **railways** and metro projects (e.g. Chennai Metro).",
            "**KP group companies** (KPI Green Energy, KP Energy).",
        ],
        difficulty: { level: 'Low', text: "Steel fabrication and galvanising are widely available; approvals and capacity are the barriers." },
        moat: "Scale (large galvanising and fabrication capacity) and approvals across utilities. Governance points: a 2% brand royalty to the promoter and group orders.",
    },

    // ── Power electronics and EV charging ────────────────────────────────────
    {
        company: 'Exicom Tele-Sys.',
        tagline: "Maker of power systems and batteries for telecom sites and of EV chargers, which bought Tritium, a DC fast-charger maker, out of administration.",
        revenue: '₹1,152cr (FY26, consolidated)',
        products: [
            { name: 'Critical power', text: "DC power systems, lithium batteries and smart enclosures for telecom towers; solar-hybrid power for the BharatNet rural broadband programme; small commercial battery storage." },
            { name: 'EV chargers in India', text: "Home wallbox chargers (it estimates over 50% share), DC fast chargers for public networks, buses and trucks." },
            { name: 'Tritium', text: "DC fast chargers made in the US and sold to networks and fleets in the US and Europe; bookings doubled to about $21m in Q1." },
        ],
        revenueText: "In Q1 FY27, **critical power was about 53% of revenue, Indian EV chargers 18% and Tritium 28%** (my calculation from the ₹177cr, ₹61cr and ₹331cr figures). The Indian business earned an 8.8% EBITDA margin; Tritium made losses.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (my calculation)', parts: [{ label: 'Critical power (telecom)', share: 53 }, { label: 'Tritium', share: 28 }, { label: 'EV chargers, India', share: 18 }] },
        ],
        customers: [
            "**Telecom operators and tower companies**, and **system integrators** on BharatNet (about 60% share) and BSNL border sites.",
            "**Car makers** (wallbox chargers supplied with cars) and **charge-point operators**.",
            "**US and European networks and fleets** (Tritium), including trials with Fortune 100 companies.",
        ],
        difficulty: { level: 'Medium', text: "Power electronics and battery management need real engineering; DC fast chargers must be reliable in the field. Many competitors exist in both markets." },
        moat: "Long relationships with telcos and car makers, and Tritium's technology. Not yet enough to earn a consistent profit.",
    },
    {
        company: 'Servotech Renew',
        tagline: "Delhi-based maker of EV chargers, solar inverters and battery packs, which also runs an EV charging network and a sports subsidiary.",
        revenue: '₹672cr (FY26, consolidated)',
        products: [
            { name: 'EV chargers', text: "AC and DC chargers up to 240 kW (BEE 5-star rated at 60 and 120 kW), and its own charging network." },
            { name: 'Solar and storage', text: "Rooftop solar systems (including railway rooftops and PM Surya Ghar homes), inverters and battery packs for storage and e-rickshaws." },
            { name: 'Sports subsidiary', text: "Owns a cricket franchise and a league, currently loss-making." },
        ],
        revenueText: "The company does not publish a split by product or customer. Management says battery-pack capacity is fully used and will double within six months.",
        customers: [
            "**Railways** (e.g. South Central Railway rooftop solar), **state bodies** (battery storage in UP), **households** through channel partners, and **charge-point operators**.",
        ],
        difficulty: { level: 'Low', text: "Chargers, inverters and battery packs are assembled from widely available components; competition is intense." },
        moat: "Little: a growing dealer network, in commodity-like products.",
    },
    {
        company: 'RIR Power Electr',
        tagline: "A small maker of high-power silicon semiconductors (thyristors, diodes) in Gujarat, building a silicon-carbide chip plant in Odisha.",
        revenue: '₹91cr (FY26, consolidated)',
        products: [
            { name: 'High-power thyristors and diodes', text: "Press-pack devices up to 8 kV for industrial drives, railways, pulse power (defence) and HVDC transmission." },
            { name: 'Power-electronics equipment', text: "Systems built from its own devices." },
            { name: 'Silicon carbide (in progress)', text: "Epitaxial wafers and chips from a ₹618cr plant in Odisha (phase 1 ₹225cr, with state subsidy); wafer sales expected to start in Q3 FY27 at ₹12–15cr for the year." },
        ],
        revenueText: "The company does not split revenue by product. Almost all current revenue is silicon devices and equipment from its Halol plant.",
        customers: [
            "**Industrial drive and equipment makers**, **railways**, **defence** (pulse-power switches), and HVDC projects; its first export order was for 120 thyristors.",
            "For silicon-carbide wafers: prospective customers in the US and Taiwan, and Indian government laboratories.",
        ],
        difficulty: { level: 'Very high', text: "Silicon-carbide wafers and chips are among the hardest things to make in power electronics, dominated by a few global firms. Yields, qualification and customers are all unproven for RIR." },
        moat: "Specialist know-how in niche high-power silicon devices. The silicon-carbide business has no moat yet: it is a start-up.",
    },
];

export const electricalEquipmentBusinesses = { intro, profiles };
