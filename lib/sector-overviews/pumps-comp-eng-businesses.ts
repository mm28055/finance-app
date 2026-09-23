import { BusinessProfile, OverviewSection } from './types';

// Tab 2 of the Pumps Comp & Eng note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' Q1 FY27 investor presentations and calls, or their websites;
// where a company does not disclose a split, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped the same way as Tab 1. Each covers what it sells, where its revenue comes from, who buys and how, how hard the product is to make, and why customers stay. Revenue totals are the filed figures; the splits are what each company published in its latest investor presentation or said on its call. Where a split is not disclosed, the profile says so rather than guessing.",
        ],
    },
    {
        heading: 'The machines, in plain words',
        body: [
            "Five kinds of machine appear across these nine companies. Knowing what each one does explains most of the differences in their businesses.",
        ],
        points: [
            {
                label: 'Air compressor',
                text: "Squeezes air to drive tools, machines and production lines in almost every factory. It runs all day, so **over its life the electricity it uses costs far more than the machine itself**. That is why buyers care about efficiency. Main types: **piston** (small, simple), **screw** (two interlocking rotors; the workhorse of industry), **centrifugal** (a fast-spinning impeller for very large volumes) and **oil-free** (no oil touches the air, needed in pharma, food and electronics).",
            },
            {
                label: 'Gas and refrigeration compressor',
                text: "The same idea applied to natural gas (filling CNG stations, pushing gas through pipelines, processing it at oilfields and refineries) or to refrigerant gases such as ammonia (cold storage, dairies, food processing). These are engineered to order, often to oil-industry standards, and a failure can stop a plant.",
            },
            {
                label: 'Pump',
                text: "Moves water or other liquids. At one end are **small pumps** for homes and farms (submersible pumps that go down a borewell, and monoblock pumps that sit on the surface), made in large numbers and sold through dealers. At the other are **engineered pumps** built to order for power stations, refineries, water-supply schemes and nuclear reactors. The largest are several metres tall and must run for decades.",
            },
            {
                label: 'Engine and generator set (genset)',
                text: "A diesel or gas engine turns an alternator to make electricity. Gensets are sized in kVA: a few kVA for a shop, 250–750 kVA for an office block or factory, and 1,000–3,000+ kVA per set for a data centre, which uses many of them. Stricter emission rules (CPCB IV+) since 2023 forced every maker to redesign its range. Engines are also sold on their own to power tractors, construction machines, three-wheelers, locomotives, ships and fire pumps.",
            },
            {
                label: 'Solar pump system',
                text: "Solar panels, a controller (the electronics that let the pump run on varying sunlight) and a pump, installed on a farm to replace a diesel pump. Most are bought under government schemes, mainly **PM-KUSUM**: the government pays most of the cost, a state agency picks the approved suppliers and sets the price, and the farmer chooses among them.",
            },
        ],
    },
    {
        heading: 'Four ways of selling',
        body: [
            "Who decides the purchase, and how the order is won, shapes pricing power more than the product does.",
        ],
        tables: [
            {
                columns: ['Business', 'Who decides', 'How the order is won', 'Repeat revenue'],
                rows: [
                    ['**Compressors** (Elgi, Kirloskar Pneumatic)', 'Factory engineers and plant owners; oil and gas companies for gas packages', 'Through distributors or direct sales, on running cost, reliability and service', 'Spares and servicing for 10–15+ years; about a quarter of sales at Elgi'],
                    ['**Engineered pumps** (KSB, Kirloskar Brothers)', 'Utilities, power companies, refineries and their contractors (EPC firms)', 'Tenders with technical approval first, then price; small pumps through dealers', 'Spares, repairs and upgrades, still a small share of sales'],
                    ['**Engines and gensets** (Kirloskar Oil, Powerica, Greaves)', 'Building owners and dealers; data-centre operators; vehicle and machine makers (OEMs)', 'Dealers for standard gensets; direct or via EPC firms for data centres; multi-year supply deals for engines', 'Spares and service contracts for the installed base'],
                    ['**Solar pumps** (Shakti, Oswal)', 'State agencies set the price and approved list; the farmer picks a supplier', 'Tender and empanelment; the price is fixed by the tender', 'Mandatory five-year service; little repeat buying'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    // ── Compressors ──────────────────────────────────────────────────────────
    {
        company: 'Kirloskar Pneumatic',
        tagline: "India's leading maker of gas compression and industrial refrigeration systems, with a growing air-compressor business. Part of the Kirloskar group.",
        revenue: '₹1,759cr (FY26, standalone)',
        products: [
            { name: 'Process gas systems', text: "Compressor packages for CNG stations, compressed biogas plants, and oil and gas (at oilfields, on pipelines, in refineries). It also operates and maintains 1,000+ CNG stations for its customers." },
            { name: 'Air compressors', text: "Screw and piston compressors, and large **centrifugal** machines (its KHOLOS P-Series and the new A800 range), where it competes with global majors." },
            { name: 'Refrigeration and air conditioning', text: "Ammonia refrigeration systems for cold storage, dairies and food processing, vapour-absorption chillers, and process refrigeration for oil and gas. Bought Systems & Components (700+ installations in pharma, chemicals and food) in May 2026. Its Ziffra venture will make air-conditioner compressors under a government incentive scheme from FY28." },
            { name: 'Precision engineering', text: "Industrial gearboxes, gears and locomotive transmissions, plus forging, casting and fabrication, much of it for its own compressors." },
        ],
        revenueText: "Compression (gas, air and refrigeration together) was **93% of FY26 revenue**; precision engineering and transmissions the rest. Management says gas is 35–40% of the business. The split between air and refrigeration is not disclosed. Order book ₹1,853cr (July 2026), about a year of sales.",
        mixes: [
            { caption: 'Revenue by segment, FY26', parts: [{ label: 'Compression (gas, air, refrigeration)', share: 93 }, { label: 'Precision engineering and transmission', share: 7 }] },
        ],
        customers: [
            "**City gas distribution companies** building CNG stations, and oil and gas producers, pipelines and refineries.",
            "**Steel, cement, food and beverage, dairy and pharma plants** for air and refrigeration.",
            "**Indian Railways** (locomotive transmissions) and marine users.",
            "Sold directly and through dealers in 150+ locations. The company says it holds **over 60% of India's CNG compression and oil-and-gas refrigeration markets, and about 70% of ammonia refrigeration compressors**.",
        ],
        difficulty: { level: 'High', text: "Gas compressors must meet oil-industry standards and run continuously in hazardous sites; a centrifugal compressor range takes years to design and prove. Owning its forging and casting shops gives it control over the hardest parts." },
        moat: "Installed base and approvals: once an oil company or gas distributor has standardised on its packages and it maintains the stations, switching is costly and risky. Its own foundry and forge keep costs and delivery in its hands.",
    },
    {
        company: 'Elgi Equipments',
        tagline: "Industrial air compressors sold worldwide under its own brand; the company says it is the second-largest maker in India and sixth-largest globally.",
        revenue: '₹3,951cr (FY26, consolidated)',
        products: [
            { name: 'Screw compressors', text: "Oil-lubricated and oil-free electric screw compressors, the core of the business. It launched India's first home-grown oil-free screw compressor in 2011." },
            { name: 'Piston and portable compressors', text: "Small piston machines for workshops, diesel-driven portable compressors for mining and construction (Rotair in Italy), and compressors for railways." },
            { name: 'Dryers, filters and parts', text: "Accessories that clean and dry compressed air, plus spares and service for its installed base." },
            { name: 'Automotive equipment', text: "Garage equipment such as car lifts and wheel-service machines, through ATS Elgi." },
        ],
        revenueText: "Compressors are **92% of sales** and automotive equipment 8% (Q1 FY27). Compressor sales are split almost evenly between **India (51%) and the rest of the world (49%)**. By subsidiary, North America was about a quarter of group sales in Q1 FY27, Europe 14% and Australia 4%. Spares and service are **22–23% of sales globally, 28–30% in India**, against 30–40% at US distributors, so there is room to grow.",
        mixes: [
            { caption: 'Sales by business and region, Q1 FY27', parts: [{ label: 'Compressors, India', share: 47 }, { label: 'Compressors, rest of world', share: 45 }, { label: 'Automotive equipment', share: 8 }], note: 'Compressor split 51% India / 49% rest of world applied to the 92% compressor share (company presentation).' },
        ],
        customers: [
            "**Manufacturers of every kind**: textiles, pharma, food, automotive, engineering, plus construction and mining for portable machines.",
            "Sold mainly **through distributors**. It owns distributors in the US (Patton's, Michigan Air Solutions) and Australia (Pulford), plus sales companies across Europe, the Middle East, Brazil and Indonesia.",
            "Buyers choose on running cost: the MD says about **80% of the market cares more about energy use and maintenance than about the price**.",
        ],
        difficulty: { level: 'High', text: "The screw element (two rotors machined to micron gaps) decides efficiency and is hard to design and make well. Elgi designs its own and makes most of its motors, and its warranty costs are under 1% of sales. Chinese makers compete at the low end on price." },
        moat: "Efficiency and reliability: its machines are the most efficient in about 70% of industrial categories, so a buyer saves on electricity every year. Long warranties, a growing service business, and owned distributors in the US and Australia keep customers.",
    },

    // ── Engineered pumps ─────────────────────────────────────────────────────
    {
        company: 'Kirloskar Brothers',
        tagline: "India's largest pump maker (it made India's first centrifugal pump in 1926), spanning farm and home pumps, huge engineered pumps and nuclear pumps, with factories in India, the UK, the US, the Netherlands, Thailand and South Africa.",
        revenue: '₹4,538cr (FY26, consolidated)',
        products: [
            { name: 'Small pumps', text: "Made-to-stock pumps for homes, farms and buildings (including solar pumps), sold through dealers. Management says these are **45–50% of standalone sales**." },
            { name: 'Large and engineered pumps', text: "Pumps up to 30 MW for irrigation lift schemes, city water supply, power stations, oil and gas, and ships. It is the world's largest maker of **concrete volute pumps** (huge pumps cast partly in concrete for irrigation and cooling water)." },
            { name: 'Nuclear pumps', text: "Supplies all metallic volute pumps for Indian nuclear plants, supplied sodium pumps for the fast-breeder reactor (Bhavini), and is qualifying to make primary-circuit pumps." },
            { name: 'Valves, turbines and packages', text: "Valves, small hydro turbines, and (through SPP) packaged fire-fighting and cooling-water systems, including for US data centres. Electric motors and stampings come from subsidiary Karad Projects and Motors." },
        ],
        revenueText: "FY26 revenue by company (before removing sales between group companies): the **Indian parent ₹2,828cr**, overseas subsidiaries **₹1,628cr** (SPP UK ₹785cr, SPP USA ₹540cr, Netherlands, Thailand, South Africa) and Indian subsidiaries ₹755cr. The parent's order book, which excludes small pumps, is mostly **irrigation and water (43%) and power (25%)**. It also owns 45% of Kirloskar Ebara (refinery pumps and steam turbines).",
        mixes: [
            { caption: 'Revenue by company, FY26', parts: [{ label: 'Indian parent', share: 54 }, { label: 'Overseas subsidiaries', share: 31 }, { label: 'Indian subsidiaries', share: 15 }], note: 'Before inter-company eliminations (group total after eliminations ₹4,538cr).' },
            { caption: 'Parent order book by customer sector, June 2026 (excludes small pumps)', parts: [{ label: 'Irrigation and water', share: 43 }, { label: 'Power', share: 25 }, { label: 'Buildings', share: 10 }, { label: 'Oil and gas', share: 8 }, { label: 'Industry', share: 6 }, { label: 'Service', share: 4 }, { label: 'Marine and defence', share: 2 }, { label: 'Valves', share: 2 }] },
        ],
        customers: [
            "**State irrigation and water-supply agencies and their contractors**: the company says its pumps supply drinking water to over 35% of India's population.",
            "**Power producers** (NTPC and others), **NPCIL** for nuclear plants, refineries, shipyards and defence.",
            "**Farmers and households** through dealers for small pumps.",
            "Overseas: **UK and US building and data-centre contractors** (data centres are about 23% of its US business), water utilities, and mines in Africa. It has 2,500+ active customers in 120+ countries.",
        ],
        difficulty: { level: 'High', text: "Low for small pumps, where many compete. Very high for large engineered and nuclear pumps: custom hydraulic design, its own foundry, test beds for multi-megawatt pumps, and nuclear quality approval that takes years." },
        moat: "Track record and scale in large pumps: water and power buyers specify proven suppliers, and it has the foundry, test facilities and references few can match. Its dealer network and brand protect the small-pump business, though that part is competitive.",
    },
    {
        company: 'KSB',
        tagline: "The Indian arm of Germany's KSB: pumps and valves for power, nuclear, oil and gas, water, buildings and farms. Its financial year ends in December.",
        revenue: '₹2,696cr (CY2025)',
        products: [
            { name: 'Standard pumps', text: "Catalogue pumps for buildings, water supply, industry and farms (including solar pumps), sold through 800+ dealers." },
            { name: 'Engineered pumps', text: "Boiler-feed and condensate pumps for thermal power stations, refinery and petrochemical pumps, and pumps for desalination and marine use." },
            { name: 'Nuclear pumps', text: "Main coolant pumps and safety pumps for reactors, made in a dedicated nuclear plant at Shirwal. It has supplied the main coolant pumps for every Indian heavy-water reactor since Narora." },
            { name: 'Valves and service', text: "Industrial valves (Coimbatore; control valves via MIL Controls, Kochi) and SupremeServ, its spares and repair arm, which is growing about 15% a year." },
        ],
        revenueText: "Standard pumps are about **half of domestic orders**; engineered pumps, valves and service make up the rest in roughly similar shares (14–19% each). **Nuclear is 45% of the ₹2,744cr order book**, but it is delivered slowly, over several years. Export orders have grown steadily.",
        mixes: [
            { caption: 'Orders on hand, June 2026', parts: [{ label: 'Nuclear', share: 45 }, { label: 'Everything else', share: 55 }] },
        ],
        customers: [
            "**NPCIL** for nuclear plants (Gorakhpur 1 & 2, Kaiga 5 & 6, and a 107-pump safety package for Kudankulam). Its first nuclear export order is eight safety pumps for a new European plant.",
            "**Thermal power companies and their contractors, refineries and petrochemical plants.**",
            "**Water utilities, builders, metro projects and data centres**, via contractors and equipment makers (OEMs).",
            "**Farmers**, through state solar-pump schemes and dealers.",
        ],
        difficulty: { level: 'Very high', text: "Nuclear pumps need the highest quality approvals (it was the first pump company to get the ISO 19443 nuclear-safety certification), 500 hours of testing per pump, and decades of references. Standard pumps are ordinary engineering." },
        moat: "The German parent's designs, plus 47 years of Indian nuclear supply that no new entrant can match quickly. For standard pumps the dealer network and brand help, but competition is wide.",
    },

    // ── Engines and gensets ──────────────────────────────────────────────────
    {
        company: 'Powerica',
        tagline: "Builds generator sets around Cummins engines, and owns wind farms that sell power to state utilities. Listed recently.",
        revenue: '₹3,012cr (FY26, consolidated)',
        products: [
            { name: 'Diesel gensets', text: "Cummins-engine gensets from 7.5 kVA to 3,750 kVA, which it designs, assembles, installs and services. It has sold Cummins sets for 40+ years under a non-exclusive supply agreement." },
            { name: 'Large generators', text: "3–10 MW medium-speed generators with Hyundai for refineries, fertiliser plants and nuclear plants, including a 63 MW power project for NPCIL." },
            { name: 'Wind power', text: "12 wind farms (331 MW) selling power on long contracts (mostly 25 years), plus building and maintaining wind farms for others." },
            { name: 'Smaller lines', text: "Defence shelters and military gensets, Schneider control panels, and (through an associate) emission-control devices for old gensets." },
        ],
        revenueText: "Gensets were **83% of FY26 revenue (₹2,502cr)** and wind power 17% (₹512cr). The wind business earns most of the profit (49% margin in Q1 FY27 against 5.6% on gensets). Data centres were **20% of genset revenue** in Q1 FY27 and about half the ₹1,700cr genset order book.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'Gensets', share: 83 }, { label: 'Wind power', share: 17 }] },
        ],
        customers: [
            "**Manufacturing plants** (its largest segment), then **commercial real estate**, rental companies, infrastructure, hospitals, hotels and IT.",
            "**Data-centre operators and their contractors**, now its fastest-growing customers.",
            "Wind power is sold to **Gujarat's state utility GUVNL** (10 contracts) and **SECI** (2 contracts).",
            "Sold through 19 sales offices and about 40 dealers.",
        ],
        difficulty: { level: 'Medium', text: "The engine, the hard part, is Cummins'. Powerica's skill is engineering, packaging, installing and servicing large sets, and running large projects on time. Wind farms need land, grid connection and capital more than technology." },
        moat: "Long relationships with Cummins and with customers, execution record on large data-centre and industrial jobs, and 25-year wind contracts with state buyers. The weak point is that Cummins can sell direct.",
    },
    {
        company: 'Kirloskar Oil',
        tagline: "Makes its own diesel and gas engines and gensets, with one of India's largest dealer and service networks. Also owns a pump company and a lending arm (Arka Fincap).",
        revenue: '₹7,701cr (FY26, consolidated incl. lending); engine business ₹5,647cr standalone',
        products: [
            { name: 'Power generation', text: "Gensets from 1 kW to 10 MW for buildings, factories, telecom, hospitals and now data centres. It won its first hyperscale data-centre order (about 192 MW) this year." },
            { name: 'Industrial engines', text: "Engines from 20 HP to 13,500 HP for construction machines, tractors, fire pumps, railways, ships, defence and nuclear plants." },
            { name: 'Distribution and aftermarket', text: "Spares, service and retail sales through 44 aftermarket dealers, 3,300+ service engineers and 500 service points." },
            { name: 'Pumps and finance', text: "Farm and domestic pumps through KOEL Fluid Dynamics (formerly La-Gajjar); LPG gensets in the US (Wildcat Power Gen); retail and business loans through Arka." },
        ],
        revenueText: "In Q1 FY27 the engine and genset business (B2B) was **74% of group revenue**, pumps 15% and lending 11%. Within B2B: **power generation 49%, industrial engines 25%, spares and service 18%, exports 8%**. The company says it holds about 28% of India's genset market.",
        mixes: [
            { caption: 'Group revenue by segment, Q1 FY27', parts: [{ label: 'Engines and gensets', share: 74 }, { label: 'Pumps', share: 15 }, { label: 'Lending (Arka)', share: 11 }] },
            { caption: 'Engines and gensets by line, Q1 FY27', parts: [{ label: 'Power generation', share: 49 }, { label: 'Industrial engines', share: 25 }, { label: 'Spares and service', share: 18 }, { label: 'Exports', share: 8 }] },
        ],
        customers: [
            "**Businesses buying backup power**: offices, factories, hospitals, telecom towers, and now data centres, mostly through dealers, with large jobs sold directly or via contractors.",
            "**Equipment makers (OEMs)** that fit its engines into construction machines, tractors and fire pumps.",
            "**Railways, marine and defence users, and NPCIL** (a milestone-based genset order).",
            "**Farmers and households** for pumps; **retail borrowers** for Arka.",
        ],
        difficulty: { level: 'High', text: "Designing engines that meet India's CPCB IV+ emission rules and stay reliable across a huge range (a few kW to 10 MW) takes decades of engineering. Very large engines for data centres and ships are the hardest, and where it is newest." },
        moat: "Its own engines plus one of the largest service networks: it can get an engineer to a critical site within two hours, and its spares and service business has grown double digits for 12 straight quarters. Brand trust in small and mid-size gensets is strong; in very large sets Cummins is the incumbent.",
    },
    {
        company: 'Greaves Cotton',
        tagline: "A 165-year-old engine maker (small diesel engines for three-wheelers, gensets, fire pumps) that also owns Ampere electric scooters and an electric-vehicle lender.",
        revenue: '₹3,437cr (FY26, consolidated)',
        products: [
            { name: 'Mobility engines', text: "Small diesel and CNG engines for three-wheelers and small trucks, and a 499cc engine for Ligier's European microcars. Also engineered components (Excel Controlinkage) and engineering services (Greaves Technologies)." },
            { name: 'Energy solutions', text: "Gensets, mainly 58.5–500 kVA, sold with service." },
            { name: 'Industrial engines', text: "Engines for fire pumps (including FM-UL approved export models), marine, farm and construction use, and a direct defence order." },
            { name: 'Electric scooters and finance', text: "Greaves Electric Mobility sells **Ampere** electric scooters (5.6% market share in June 2026) and electric three-wheelers; Greaves Finance lends to EV buyers." },
        ],
        revenueText: "FY26: **mobility engines and components ₹1,584cr**, gensets ₹742cr, industrial engines ₹339cr (together the ₹2,665cr core business), and the electric-scooter company ₹786cr. Three-wheeler diesel engines alone were ₹545cr, 16% of group revenue. International sales are 13% of the core.",
        mixes: [
            { caption: 'Revenue by business, FY26', parts: [{ label: 'Mobility engines and components', share: 45 }, { label: 'Electric scooters (GEML)', share: 23 }, { label: 'Gensets', share: 21 }, { label: 'Industrial engines', share: 10 }, { label: 'EV finance', share: 1 }], note: 'Before inter-company eliminations.' },
        ],
        customers: [
            "**Three-wheeler makers** such as Piaggio, Mahindra and Atul Auto for diesel engines; **Ligier** for microcar engines; CAT (UK) and TAFE for components.",
            "**Genset buyers** through dealers; **fire-pump makers**, boat builders and the armed forces for industrial engines.",
            "**Retail customers** for Ampere scooters (strongest in Bihar, with 19%+ share); 7,000+ retail outlets and 20,000+ mechanics service its products.",
        ],
        difficulty: { level: 'Medium', text: "Small diesel engines are mature technology, but meeting each new emission rule is costly. Electric scooters are easy to assemble and hard to make money on; the battery is the main cost." },
        moat: "Long supply relationships with three-wheeler makers and a vast mechanic network. But diesel three-wheelers are slowly giving way to electric and CNG ones, and the scooter business competes with much larger players.",
    },

    // ── Solar pumps ──────────────────────────────────────────────────────────
    {
        company: 'Shakti Pumps',
        tagline: "One of India's largest solar-pump suppliers under PM-KUSUM, making the pump, motor and electronics in-house, with exports to 100+ countries.",
        revenue: '₹2,698cr (FY26, consolidated)',
        products: [
            { name: 'Solar pump systems', text: "Complete systems (pump, motor, controller, structure) supplied, installed and serviced for five years. It installed 86,086 in FY26 and 2.58 lakh to date." },
            { name: 'Grid pumps and motors', text: "Stainless-steel submersible pumps and motors for farms, buildings and industry, in India and abroad." },
            { name: 'Power electronics', text: "Controllers, variable-speed drives and inverters made in-house (400,000 a year capacity), which it also sells to others." },
            { name: 'New businesses', text: "Rooftop solar, electric-vehicle motors and controllers (at trial stage with car makers), and a 2.2 GW solar cell and module plant due by FY28." },
        ],
        revenueText: "Government schemes were **77% of FY26 revenue**, exports 15% (₹411cr, mainly the Middle East 41%, Africa 33% and the US 19%) and other customers 8%. The company estimates its **share of PM-KUSUM at about 25%**.",
        mixes: [
            { caption: 'Revenue by customer, FY26', parts: [{ label: 'Government schemes', share: 77 }, { label: 'Exports', share: 15 }, { label: 'Industrial, OEM and retail', share: 8 }] },
        ],
        customers: [
            "**Farmers, through state agencies** in Maharashtra, Rajasthan, Haryana, Punjab, UP, MP and now Karnataka: the agency sets the price and approves suppliers; the farmer picks one.",
            "**Overseas governments and distributors** (for example a $35m solar water project for Uganda).",
            "**Dealers and industrial buyers** (500+ dealers and 400+ service centres in India).",
        ],
        difficulty: { level: 'Medium', text: "Pumps and motors are mature. The harder part is the electronics that let a pump run efficiently on varying sunlight, which Shakti designs itself (15 patents), and installing and servicing hundreds of thousands of pumps in remote villages." },
        moat: "Scale and execution record in the scheme, and in-house electronics that lower costs. But the buyer (the state) sets the price and dozens of approved suppliers compete, so pricing power is weak.",
    },
    {
        company: 'Oswal Pumps',
        tagline: "A fast-growing solar-pump maker from Karnal, Haryana, that makes its own pumps, motors and solar panels, and is moving into rooftop solar. Listed recently.",
        revenue: '₹2,064cr (FY26, consolidated)',
        products: [
            { name: 'Solar pump systems', text: "Turnkey systems (pump, motor, panels, structure, controller, installation) under PM-KUSUM and state schemes such as Maharashtra's Magel Tyala. It has supplied 1.19 lakh such systems directly." },
            { name: 'Grid pumps and motors', text: "Submersible and monoblock pumps for farms, homes and industry, sold through 1,400+ distributors." },
            { name: 'Solar modules', text: "Panels from its own 570 MW plant, used in its systems and sold to other scheme suppliers." },
            { name: 'Rooftop and utility solar', text: "Rooftop systems under PM Surya Ghar, and solar projects for businesses and utilities (72 MW of orders)." },
        ],
        revenueText: "In FY26 about **80% of product revenue came from government schemes**: Maharashtra's Magel Tyala and other state schemes 49%, direct PM-KUSUM supply 27%, and sales to other scheme suppliers 4%. Only 20% came from outside the schemes. It supplied 1.81 lakh pumps in FY26, just under half of them solar.",
        mixes: [
            { caption: 'Product revenue by channel, FY26', parts: [{ label: 'Other state schemes (mainly Magel Tyala)', share: 49 }, { label: 'PM-KUSUM, direct', share: 27 }, { label: 'Outside government schemes', share: 20 }, { label: 'To other scheme suppliers', share: 4 }] },
        ],
        customers: [
            "**Farmers through state agencies**: Haryana (54,000 systems to date), Maharashtra (27,000), Rajasthan (25,000) and a dozen smaller states.",
            "**Other PM-KUSUM suppliers**, which buy its pumps and panels.",
            "**Households and businesses** through distributors, and rooftop buyers under PM Surya Ghar.",
        ],
        difficulty: { level: 'Low', text: "Pumps, motors and panel assembly are established technologies with many makers. The difficulty is running a large installation and service operation and funding the long wait for state payments." },
        moat: "Low-cost integrated manufacturing and strong positions in Haryana and Maharashtra. But 40–45 bidders compete on state tenders, so the moat is thin; it is diversifying into rooftop and utility solar, where margins are lower.",
    },
];

export const pumpsCompEngBusinesses = { intro, profiles };
