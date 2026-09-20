import { SectorOverview } from './types';

export const industrialManufacturing: SectorOverview = {
    sector: 'Industrial Manufacturing',
    title: 'Industrial Manufacturing',
    standfirst:
        'Nineteen companies that supply the equipment behind India\'s chemical plants, refineries, power stations, mines, water systems and factories. They are usually lumped together as "capital goods", but they are four different businesses: companies that own process technology, companies that fabricate to someone else\'s drawing, component makers who are designed into a customer\'s product, and branded product companies. Only two of those four can defend a margin. This note is about telling them apart.',
    lastUpdated: '2026-09-20',
    asOfQuarter: 'Q1 FY27',

    sections: [
        {
            heading: 'Recommendation, up front',
            body: [
                '**Pitti Engineering is the best business in this sector and the one I would own first.** It makes electrical steel laminations and complete stator and rotor assemblies — the magnetic core of an electric motor or generator. It is designed into the products of Wabtec, Siemens, Cummins, ABB and Nidec, which means it is written into their drawings and audits, and a customer who changes supplier must re-qualify a motor. It passes steel costs through, it is moving up from loose laminations (₹16 a kilo of value added) to machined assemblies (several times that), and its end markets — railway traction, data-centre generator sets, mining, renewables — are the ones growing. Volumes rose 16-18% and the higher-value assembly business grew 37%.',
                '**Jash Engineering and Gala Precision are the two smaller businesses with real, checkable moats.** Jash holds about two-thirds of the Indian market in water-control gates and screens — an unglamorous niche with a ₹150cr domestic market that no large company wants — and has used it to buy positions in the US and UK, where 69% of its order book now sits. Gala has spent 25 years earning vendor codes at Vestas, Siemens, ABB, Schaeffler and John Deere; entry takes 12-24 months of audits and sample approvals, after which share grows from 5-10% to 50-75% and, in its own words, it has not lost a customer in 25 years on quality or delivery.',
                '**Two world-class franchises are having bad years for reasons that are cyclical, not structural: GMM Pfaudler and The Anup Engineering.** GMM is the world\'s largest maker of glass-lined reactors with about half the Indian market, held back by a European chemicals downturn and its own acquisition complexity. Anup is a fully qualified pressure-equipment maker (ASME stamps, nuclear, licensor approvals) that deliberately refused low-priced orders last year and is now carrying a record ₹985cr book taken at better prices. Both are worth accumulating through the weak quarters.',
                '**I would avoid Standard Glass, John Cockerill India and ICE Make Refrigeration**, for one reason each: a story that changes every quarter and restated working capital; the valuable technology sitting with the Belgian parent rather than the listed company; and growth bought by not raising prices, with a depreciation change in the same quarter the margin collapsed.',
            ],
        },
        {
            heading: 'Four kinds of business wearing one label',
            body: [
                'Before any valuation, place each company in one of these four boxes. The box tells you most of what you need to know about its margins.',
            ],
            points: [
                {
                    label: '1. Process-technology owners — GMM Pfaudler, HLE Glascoat, Praj, Kilburn, Jash, Standard Glass',
                    text: 'They own the design, the recipe or the metallurgy: a glass formulation fired onto steel, an ethanol process, a drying technology, a gate that seals under head pressure. **Their advantage is that the customer specifies them and their equipment defines plant performance,** so they can earn 15-25% margins and an aftermarket. Their risk is that a mature product commoditises: HLE now ships 30-40% more glass-lined units than four years ago for the same revenue because Chinese and domestic competition cut the price per unit.',
                },
                {
                    label: '2. Build-to-print fabricators — Anup, JNK, DEE Development, John Cockerill, Everest Kanto',
                    text: 'The customer or a licensor owns the design; these companies own the ability to make it to a code. **The barrier is certification, not invention** — ASME U, U2 and S stamps, licensor approvals, nuclear vendor status, PESO for gas cylinders — and it is real: JNK lost a large export order outright because the licensor did not approve it in time. Margins are set by how scarce the certification is and by contract terms, and all these companies price fixed, which is why a commodity spike lands straight on them.',
                },
                {
                    label: '3. Qualified component suppliers — Pitti, Gala Precision, Tega',
                    text: 'They sell into someone else\'s machine, with a part that is small in cost and large in consequence. **This is the best box in the sector:** qualification takes years, the part is cheap relative to failure, cost increases are passed through, and volumes recur with the customer\'s own production. Gala\'s springs are a few percent of a wind turbine\'s cost; Tega\'s mill liners wear out and are re-ordered forever.',
                },
                {
                    label: '4. Branded and regulation-protected products — Aditya Infotech, HPL Electric, Shree Refrigerations, WPIL, ICE Make',
                    text: 'Here the moat is a brand and a distribution network, or a government approval. Aditya Infotech (CP PLUS) has 43% of Indian CCTV plus testing rules that pushed Chinese chipsets out; Shree is the only Indian firm registered with all three naval directorates and has indigenised the submarine air-conditioning system; HPL sells meters against BIS qualification but into utility buyers who bargain prices down every year. **The quality of this box depends entirely on whether the customer is a consumer, an OEM or a government utility.**',
                },
            ],
        },
        {
            heading: 'The qualification asset: what actually keeps competitors out',
            body: [
                'In a sector where anyone can buy a welding machine, the entry barrier is almost always a piece of paper that took years to earn. These are the ones worth knowing, with the time they take.',
            ],
            points: [
                {
                    label: 'Codes and stamps',
                    text: 'Anup holds ASME U, U2 and S stamps and has qualified for two proprietary licensed products for export; Everest Kanto depends on PESO and equivalent global cylinder certifications. **A pressure vessel that fails kills people, so buyers do not experiment.** This is why a fabricator with certifications earns more than a fabricator without them, even making the same shape of steel.',
                },
                {
                    label: 'Licensor and end-customer approvals',
                    text: 'JNK is pre-qualified with the process licensors who design refineries — and the cancellation of a large export order when a licensor did not clear it in time shows the same wall working against it. DEE is an approved piping supplier to GE, Siemens and Nooter/Eriksen, which took years and now yields repeat gas-turbine work; its Thailand plant is fully booked three years out.',
                },
                {
                    label: 'Nuclear and defence vendor status',
                    text: 'Kilburn is a qualified NPCIL and Heavy Water Board vendor, effectively competing with one other company; Anup has begun supplying nuclear steam-generator work. **Nuclear approval is the slowest and stickiest qualification in Indian engineering,** and it is the most valuable asset Kilburn owns.',
                },
                {
                    label: 'Defence and naval registrations',
                    text: 'Shree Refrigerations is the only Indian company registered with all three naval directorates and has indigenised the entire submarine air-conditioning system, with a retrofit win rate close to 100% and roughly 64% share. In a fleet expanding from 150 towards 230 ships, that registration is the business.',
                },
                {
                    label: 'Product standards that redraw a market overnight',
                    text: 'The STQC testing rules that barred Chinese chipsets from Indian CCTV roughly doubled Aditya Infotech\'s share to 43%. **Regulation can create a moat faster than engineering can — and remove it just as fast,** which is why a regulation-derived position deserves a lower multiple than an earned one.',
                },
                {
                    label: 'Customer vendor codes in global supply chains',
                    text: 'Gala takes 12-24 months to enter a customer and then grows from a 5-10% share of that customer\'s spend to 50-75%. Pitti is designed into traction motors for the two locomotive OEMs and into Cummins generator sets. **This is the quietest and most durable barrier in the sector, because it is enforced by the customer\'s own risk department.**',
                },
            ],
        },
        {
            heading: 'Who owns the technology, and who rents it',
            body: [
                'Several companies here are valued as though they own technology they are actually licensing, borrowing from a parent or buying in. The distinction decides who keeps the profit when the product succeeds.',
                '**Owns it.** GMM Pfaudler owns the Pfaudler glass formulations and holds roughly 50% of the Indian glass-lined market (the top three have about 75%), with a 14% global share; Praj owns its ethanol, bio-isobutanol and water-treatment processes and licenses them; Tega owns its rubber and composite liner compounds and the design work that goes with each mill survey; Jash designs its own gates and screw turbines; Pitti owns its tooling and process; Gala owns its designs and has just brought hot-dip galvanising in-house, which directly unlocked orders from customers who insist on in-house coating.',
                '**Rents it.** John Cockerill India is being made the Belgian parent\'s global metals hub, but the Volterion battery technology sits with the parent and is "in discussion"; the listed company is a manufacturing arm with a 46 times book value price. JNK books export heater orders through its Korean parent, which posts the bank guarantees and holds the qualification — and the cooperation agreement has not been formally renewed. Standard Glass bought 19.9% of Japan\'s GL Hakko with no technology transfer. ICE Make\'s Japanese partner will own 60% of the joint venture that holds the technology, and production starts only in February 2028. **In each case, the upside from the technology is shared with, or owned by, someone else.**',
                '**Buys it and integrates well.** HLE Glascoat bought Thaletec in Germany and is now selling Thaletec-grade products into India (20% of its Indian glass-lined sales), which is genuine premiumisation; the same playbook applied to Omeras has not worked yet.',
            ],
        },
        {
            heading: 'What makes a margin structural: aftermarket and pass-through',
            body: [
                'Two features separate companies whose margins survive a bad year from companies whose margins are a function of the last order they signed.',
                '**Aftermarket.** Spares, wear parts, reconditioning and service are re-ordered without a tender and at better prices. Tega is almost entirely an aftermarket business — consumables grew 36% at a 24% margin on a 62% gross margin, because mill liners wear out and must be replaced on a schedule the mine cannot postpone. Anup is trying to build the same thing deliberately, targeting ₹25cr of technical services this year at above 30% margins, rising to ₹200cr in three years. The counter-example is the clearest lesson in the sector: **Shree Refrigerations\' spares fell from 30% of revenue to 7%, and its margin fell from about 31% to 21% — the entire difference was mix, not costs.**',
                '**Pass-through.** The war that began in February tested every contract in this sector. Tega passes costs through with a one-quarter lag; Pitti passes steel straight to customers; Gala gets price increases with a lag and still offers customers 10-18% savings against European suppliers. On the other side, Anup\'s contracts are all fixed price, so steel inflation forced it to guide FY27 margins down to about 15% against a historic 21-22%; ICE Make raised prices 11% against 15-18% of cost inflation and posted a 1.7% margin and a loss; Diffusion-style hard-facing users saw tungsten rise several hundred percent. **The difference between a pass-through clause and a fixed price is worth more than any amount of operational excellence in a year like this one.**',
                'A third, quieter factor: **utilisation of capacity built ahead of demand.** DEE\'s Anjar plant is at about 50% utilisation and going to 70-75%; Pitti\'s sheet metal is at 73% after a ₹150cr expansion; HLE\'s Omeras needs ₹200-225cr of annual revenue merely to break even. Margins in this sector improve mostly when the plant fills, and deteriorate when it does not.',
            ],
        },
        {
            heading: 'Where pricing power has already been lost',
            body: [
                'It is worth being blunt about the companies whose products have stopped being scarce, because their multiples still assume otherwise.',
                '**Standard glass-lined reactors in India.** HLE Glascoat sells 30-40% more units than four years ago for roughly the same ₹242cr of revenue, and glass-lined margins have gone from 18% in FY21 to about 10%. Chinese and domestic competition set the price. GMM, as the leader, feels the same pressure in standard equipment and is defending itself through mixing, filtration, sealing and heavy engineering rather than through reactors alone.',
                '**Smart meters.** HPL Electric\'s order book has been flat around ₹3,000-3,200cr for four or five quarters, meter prices fall with each repeat order from the large installers, and its gross margin dropped from 38% to 30%. Volume is guaranteed by the government scheme; price is not.',
                '**Standard gas cylinders.** Everest Kanto\'s margin went from 16.2% to 11.1% in a single quarter once the high-margin defence and semiconductor orders that drove the previous quarter did not repeat. A seamless steel cylinder is a commodity when the mix reverts.',
                '**Commodity cold-chain equipment.** ICE Make could not pass on 15-18% of cost inflation because it feared losing newly recruited dealers. **A company that cannot raise prices in an industry-wide cost spike does not have pricing power, whatever its growth rate says.**',
                'By contrast, the companies that raised prices without losing customers this year — Pitti, Tega, Gala, Aditya Infotech (10-20% and heading for 25%) — are the ones whose margins can be treated as structural.',
            ],
        },
        {
            heading: 'Where the next five years of growth actually come from',
            body: [
                '**Electrification and the motor.** Every generator set, traction motor, pump motor and wind generator needs a laminated core. Pitti\'s markets — railway traction (28% of revenue), power generation (15%), industrial, mining and oil and gas (10%), data-centre generator sets (5%) — grow with electricity demand rather than with any one capex cycle, and the European shift of production to India (energy and labour costs) adds share on top.',
                '**Pharma and CDMO capacity, not chemicals.** GMM\'s and HLE\'s order books are recovering on pharma and peptide capacity in Hyderabad and on US onshoring; agrochemicals and commodity chemicals remain weak and Europe is described as "very challenging". Standard Glass sells half its book to CDMOs. **This is a real multi-year cycle, but it is narrower than the "chemical capex" story usually told.**',
                '**Water and waste.** Jash\'s market grows with municipal sewage and water projects worldwide, and it is building plants in Houston and Saudi Arabia so that most US orders are made locally. WPIL\'s international arm (77% of revenue) is winning African water EPC work even as its Indian arm waits for scheme payments.',
                '**Energy transition, honestly sized.** Praj owns the technology for ethanol, bio-isobutanol and sustainable aviation fuel, but domestic ethanol plant orders have stopped until the government moves past 20% blending; the ₹23,000cr compressed biogas scheme and a Brazilian corn plant are the nearer opportunities. Gala\'s offshore-wind fasteners and first electrolyser order are small but real.',
                '**Global supply-chain shift.** Tega\'s enlarged Molycop platform serves copper and gold mines worldwide at a moment when copper is above $14,000 a tonne; Gala and Pitti take share from European suppliers on cost; Jash exports two-thirds of its order book. **The companies growing fastest here are not the ones serving Indian capex — they are the ones qualified inside global supply chains.**',
            ],
        },
        {
            heading: 'Accounting and governance: what would stop me owning something',
            body: [
                '**Standard Glass** said its working capital was 160 days one quarter and 320 the next, has moved its story from pre-cast pharma buildings to data-centre power skids in two quarters, and the promoter has pledged shares. **ICE Make** changed depreciation from the reducing-balance to the straight-line method in the quarter its margin collapsed. **John Cockerill India** is loss-making at 46 times book with its best technology held by the parent, which has been selling shares. **Everest Kanto** reported quarterly profit above its EBITDA without explaining it and withdrew guidance. **HLE Glascoat** promised 16% margins and delivered 11%, then re-described the target as "16% excluding Omeras".',
                'None of these is proof of wrongdoing. But in a sector where profit is recognised on long contracts and cash arrives much later, **the companies that change a measurement rule in a bad quarter are telling you something about how they will behave in the next one.**',
            ],
        },
    ],

    verdicts: [
        {
            company: 'Pitti Engineering',
            stance: 'COMPOUNDER',
            what: 'Electrical steel laminations, stator and rotor assemblies, castings and machining — the magnetic core of motors and generators for Wabtec, Siemens, Cummins, ABB, Nidec and others.',
            view: 'The strongest recurring position in the sector: designed into customers\' products, so a change of supplier means re-qualifying a motor; steel costs passed through; and a deliberate climb from loose laminations to machined sub-assemblies, which grew 37% against 16% for loose parts. End markets (traction, generator sets for data centres, mining, renewables) are electricity-linked rather than tied to one capex cycle, and European production shifting to India adds share. Guides about ₹2,500cr of revenue in FY28 at 17% margins from existing capacity, with margins heading to 18-19%.',
            watch: 'Direct exports have been flat at about ₹137cr — growth depends on global OEMs building in India. Returns are diluted by land and buildings bought ahead of need, and net debt is ₹491cr.',
        },
        {
            company: 'Jash Engineering',
            stance: 'SCALEUP',
            what: 'Water-control gates, knife-gate valves, screens and screw turbines for municipal water and sewage systems, with subsidiaries in the US (Rodney Hunt), UK and Austria.',
            view: 'A textbook small-niche monopoly: about two-thirds of an Indian market too small (₹150cr) to attract a large competitor, used as a platform to buy incumbent brands abroad — 69% of the ₹932cr order book is now export, with Rodney Hunt alone at ₹369cr. Building plants in Houston and Saudi Arabia so roughly 70% of US orders are made locally is the right answer to tariffs. Management is unusually candid about problems, which is worth a premium in this sector.',
            watch: 'US trade policy (it is deliberately not chasing large US orders while a bill threatening 100% tariffs is live), the Jash Process unit that lost ₹150-200cr of orders on a bad cost model, and ₹15cr of goods stranded by the Gulf conflict.',
        },
        {
            company: 'Gala Precision Engi.',
            stance: 'SCALEUP',
            what: 'Disc springs, coil springs and high-tensile fasteners for wind turbines and industrial equipment — Vestas, Siemens, ABB, Schaeffler, John Deere.',
            view: 'The moat is the vendor code: 12-24 months to enter a customer, then share grows from 5-10% to 50-75%, with no customer lost in 25 years. Its parts are a few percent of a turbine\'s cost and critical to safety, which is the ideal combination. It offers European customers 10-18% savings, just broke a German monopoly on seat-belt retractor springs, and new hot-dip galvanising in-house has unlocked customers who require it. Orders up 40%.',
            watch: 'Working capital around 180 days (KPMG engaged to fix it), Chennai Phase 2 and the Wada land both slipping, and wind-turbine demand concentration — the top five customers are 30-35% of sales.',
        },
        {
            company: 'The Anup Enginee',
            stance: 'CYCLICAL',
            what: 'Anup Engineering: heat exchangers, pressure vessels and columns for refineries, petrochemicals, fertiliser, thermal and nuclear power. Half of revenue is exported, mainly to the Middle East.',
            view: 'A fully certified fabricator (ASME U, U2, S; nuclear; two newly qualified proprietary licensed products) that chose a bad year on purpose: it refused low-priced orders in a weak market, so Q1 revenue was ₹125cr at a 7.4% margin, and now carries a record ₹985cr order book taken at better prices with the Kheda plant already built. The new technical services arm targets ₹200cr in three years at above 30% margins, which would give it the aftermarket it lacks.',
            watch: 'All contracts are fixed price, so FY27 margin guidance is only about 15% against a historic 21-22%. Our database shows a market value of ₹34cr and a price of ₹1.8 for this company, which is clearly wrong — check the real price first.',
        },
        {
            company: 'GMM Pfaudler',
            stance: 'CYCLICAL',
            what: 'The world\'s largest maker of glass-lined reactors (about 50% of the Indian market, 14% globally), plus mixing, filtration, sealing and heavy engineering.',
            view: 'A genuine global leader whose technology — the glass formulation and its application — is a real barrier, at the bottom of a chemicals cycle. The order book is a record ₹2,213cr, pharma and peptide demand is recovering, and the newer divisions are growing faster than reactors (mixing and filtration orders up 64%, heavy engineering intake up sevenfold on nuclear and Middle East work). The problem is self-inflicted complexity: a multi-country structure, ₹835cr of foreign-currency debt and underperforming units keep the 15% margin target undated.',
            watch: 'Two or three quarters of consistent margin improvement, which management itself asked investors to wait for, and progress on the debt and the tax structure.',
        },
        {
            company: 'Tega Industries',
            stance: 'CYCLICAL',
            what: 'Composite and rubber mill liners and wear parts for copper and gold mines (about 10% of the global mill-liner market), now combined with Molycop, a much larger grinding-media maker.',
            view: 'The original business is the best economic model in this sector: consumables that wear out on a schedule, sold with engineering surveys, 62% gross margins and cost pass-through with a one-quarter lag. The Molycop acquisition changes what you own — a $1.4bn revenue, roughly 13% margin steel-ball business with about 85% of contracts indexed to steel, bought with Apollo Funds, leaving group debt near ₹11,200cr and ₹5,000cr of goodwill. Copper above $14,000 a tonne and gold near $4,400 help.',
            watch: 'Deleveraging to 3 times in three to four years, the $20m of promised synergies, and the Chile plant commissioning in early 2027.',
        },
        {
            company: 'Aditya Infotech',
            stance: 'PRICED',
            what: 'CP PLUS, India\'s largest CCTV and video-surveillance brand, with 43% share and a factory at Kadapa.',
            view: 'A rare consumer-style moat in an industrial list: brand, 900 dealers and 85,000 retailers, plus testing rules that removed Chinese chipsets from the market and doubled its share. Revenue grew 90% and it is guiding ₹6,000-6,500cr for FY27. But the position is partly regulatory rather than earned, memory-chip inflation is pushing prices up 20-25% (a test of the brand yet to be passed), and the previous quarter\'s 18% margin was flattered by cheap inventory.',
            watch: 'Whether customers accept the price increases, and localisation of components towards 40% to reduce Taiwanese and Chinese dependence.',
        },
        {
            company: 'Shree Refrigrations',
            stance: 'SCALEUP',
            what: 'Naval air-conditioning, refrigeration and air-filtration systems — the only Indian company registered with all three naval directorates, with about 64% share.',
            view: 'The registration is the moat, and it is close to unassailable in the medium term: it has indigenised the entire submarine air-conditioning system and wins nearly every retrofit. The fleet is going from 150 towards 230 ships, and merchant shipbuilding adds more. The important lesson in its numbers is about mix, not demand: when spares fell from 30% of revenue to 7%, the margin fell from about 31% to 21%.',
            watch: 'Working capital of about 370 days and extreme half-yearly lumpiness (₹50cr in H1, ₹100cr in H2). Our database\'s market value for this company looks about 100 times too high.',
        },
        {
            company: 'DEE Development',
            stance: 'SCALEUP',
            what: 'High-pressure piping spools and induction bends for thermal power, refineries and gas-turbine makers (GE, Siemens, Nooter/Eriksen), plus heavy fabrication.',
            view: 'The asset is approval-based: being an approved piping supplier to gas-turbine OEMs takes years, and the Thailand plant is fully booked for three years on that strength. The heavy capital spending is done — Anjar is at about 50% utilisation heading to 70-75%, and a new seamless pipe plant makes the thick-walled P91/P92 pipe that 660-800 MW boilers need, half of it captive. A ₹300cr share issue cut net debt. Guides more than ₹1,500cr of revenue at above 19% margins.',
            watch: 'A delayed GE heat-recovery order, working capital of 263 days, and dependence on Indian thermal power construction, which is policy-driven.',
        },
        {
            company: 'Kilburn Engg.',
            stance: 'CYCLICAL',
            what: 'Industrial drying systems for fertiliser and chemicals, nuclear components, waste-heat recovery (ME Energy) and radio-frequency drying and sheet metal (Monga Strayfield).',
            view: 'The nuclear vendor qualification (NPCIL and Heavy Water Board) is the most valuable thing it owns, and it competes with essentially one other approved player there; 23% returns and a 20% margin held in a weak quarter show the pricing discipline is real. It is debt-free after a ₹98cr raise in which promoters participated.',
            watch: 'Guidance was cut from ₹750-800cr to ₹700cr in one quarter because customers delayed drawing approvals and site readiness; debtor days are 184. An investor asked management to stop quoting its ₹4,000cr "inquiry pipeline", which is fair.',
        },
        {
            company: 'JNK',
            stance: 'CYCLICAL',
            what: 'JNK India: process fired heaters, reformers and cracking furnaces for refineries and petrochemical plants — about 27% of Indian bookings — with a Korean parent.',
            view: 'The barrier here is licensor pre-qualification, and it cuts both ways: refineries will not experiment with the equipment that holds the fire, but a licensor can also cancel your order, which is exactly what happened to a large export win this year. The BPCL Bina project anchors FY27-28 execution and the order book is about twice sales. The diversification into offshore, metals and material handling is honest about its economics — management expects a 10% bid win rate against 20-25% in heaters.',
            watch: 'The parent relationship: export orders are booked by JNK Global, which posts the bank guarantees, the cooperation agreement has not been formally renewed, and the parent is in a court dispute with an activist investor.',
        },
        {
            company: 'HLE Glascoat',
            stance: 'TURNAROUND',
            what: 'Glass-lined reactors (India plus Thaletec in Germany), filtration and drying equipment, heat exchangers, and Omeras, a German glass-fused steel tank business.',
            view: 'Filtration and drying is a genuinely good business growing 51%, and buying Thaletec worked — premium German products are now 20% of Indian glass-lined sales. The problem is the core: Indian glass-lined revenue has been flat for four years despite shipping 30-40% more units, because price per unit has collapsed, and margins in that segment fell from 18% to 10%. Omeras lost ₹15.3cr and needs ₹200-225cr of annual revenue just to break even.',
            watch: 'Omeras reaching breakeven at ₹45-50cr of quarterly revenue, and whether the promised 16% margin arrives this time after being missed once.',
        },
        {
            company: 'WPIL',
            stance: 'CYCLICAL',
            what: 'Engineered pumps (nuclear, naval, irrigation) and water projects, now about 77% international through Italian, Thai and South African subsidiaries.',
            view: 'The engineered-pump business is a qualification business and the international arm is performing (revenue nearly doubled, ₹2,891cr of international orders, African water EPC contracts running three to four years). The Indian project arm is the problem and it is not operational: ₹300-350cr of receivables sit in state treasuries under the rural water scheme, nothing was collected in the quarter, and a Madhya Pradesh debarment blocks new bidding there.',
            watch: 'Collection of the water-scheme money, and the plan to buy out minority shareholders in the subsidiaries — much of the reported profit currently belongs to them.',
        },
        {
            company: 'Praj Industries',
            stance: 'CYCLICAL',
            what: 'Owner of ethanol, biofuel and water-treatment process technology, and the engineering company that builds the plants.',
            view: 'It genuinely owns process intellectual property, which is rarer here than it sounds, and has a ₹4,590cr order book and ₹616cr of cash. But its main domestic market has stopped: India reached 20% blending with roughly 2,000 crore litres of capacity against about 1,100 crore litres of demand, so new ethanol plant orders wait on an E27 or E30 decision. The quarter\'s 2.9% margin is what an engineering company earns when its core product pauses.',
            watch: 'A firm blending decision beyond E20. The newer avenues — a $50m data-centre modular framework, bio-isobutanol, sustainable aviation fuel, compressed biogas — are real but small or policy-dependent.',
        },
        {
            company: 'HPL Electric',
            stance: 'CYCLICAL',
            what: 'Electricity smart meters (96% of a ₹3,200cr order book) plus switchgear, wires, cables and lighting sold through 900 dealers and 85,000 retailers.',
            view: 'Two businesses pulling in opposite directions. The consumer and industrial side is genuinely scaling (up 55%, cables up 79%) and is where any future brand value lies. The meter side has guaranteed volume from the national scheme but declining prices, because the large installers buy repeatedly and in bulk; the order book has not grown in four or five quarters and gross margin fell from 38% to 30%.',
            watch: 'Margin recovery promised for Q3, and consolidation among meter makers and installers — Adani buying IntelliSmart helps HPL, Adani buying a meter maker would not.',
        },
        {
            company: 'Everest Kanto Cylind',
            stance: 'CYCLICAL',
            what: 'Everest Kanto Cylinder: high-pressure seamless gas cylinders for CNG vehicles, city gas and industry, with plants in India, the US, Dubai and Egypt.',
            view: 'The certification barrier is real but the product is close to a commodity once the specialised orders stop: margin went from 16.2% to 11.1% in one quarter after management had called 15-17% structural, and the higher-value defence and semiconductor work did not repeat. CNG is 22% of new passenger cars, so demand is there; pricing power is not.',
            watch: 'The new CEO\'s first full quarter, the delayed Egypt and Mundra ramp-ups (₹162cr sits in capital work in progress), and the unexplained quarter where profit exceeded EBITDA.',
        },
        {
            company: 'Standard Glass',
            stance: 'AVOID',
            what: 'Glass-lined reactors and pharma process equipment, now also acquiring a data-centre power-skid integrator.',
            view: 'Growth is real (revenue up 41%, order book ₹1,400cr, half from CDMOs), but it is the third player in a market where the leader has half the share and prices are falling, and the story changes every quarter — pre-cast pharma buildings last time, data-centre skids now, with ₹250cr of revenue guided from a business with no named firm orders. Working capital was restated from 160 days to 320 and the promoter has pledged shares.',
            watch: 'Named data-centre orders and working capital below 200 days would begin to change the assessment.',
        },
        {
            company: 'John Cockerill',
            stance: 'AVOID',
            what: 'John Cockerill India: steel processing lines (galvanising, cold rolling, electrical steel), being turned into the Belgian parent\'s global metals hub.',
            view: 'It is loss-making at the operating level, priced at 46 times book value, and the technologies that justify the story — Volterion batteries, and to a degree the jet vapour deposition coating line — belong to the parent, not to shareholders in the listed company. The parent has also been reducing its stake. The order book has grown to ₹4,500cr, but the customer list is three steel groups.',
            watch: 'Whether Volterion or JVD technology is formally transferred into the listed company, which would change this verdict.',
        },
        {
            company: 'ICE Make Refrig.',
            stance: 'AVOID',
            what: 'Cold rooms, commercial freezers, insulated panels and transport refrigeration.',
            view: 'India\'s cold chain is a real opportunity and revenue grew 60%, but the economics of this quarter say the company is buying share rather than earning it: it absorbed 6-6.5 points of cost inflation to protect new dealers, posted a 1.7% margin and a loss, and cut its full-year margin guidance from 8-8.5% to 6-6.5% within ninety days. It also moved depreciation to the straight-line method in the same quarter.',
            watch: 'Whether the promised second-half price increases restore margins, and the Galileo joint venture, in which the Japanese partner holds 60% and production begins only in February 2028.',
        },
    ],

    closing: {
        heading: 'What I actually think',
        body: [
            '**Own the qualified component makers.** Pitti Engineering is the core holding: designed into global OEMs\' motors, passing costs through, moving from stampings to assemblies, and levered to electricity demand rather than to one capex cycle. Gala Precision Engi. is the same model at a smaller scale, with vendor codes that took 25 years to earn. Jash Engineering is a niche leader using a protected home market to buy positions abroad, with a management that tells you what is going wrong.',
            '**Buy the two world-class franchises through their bad years.** GMM Pfaudler owns the technology in glass-lined equipment and half the Indian market; its problems are a chemicals downturn, debt and acquisition complexity, all of which are fixable. The Anup Enginee (Anup Engineering) refused bad prices last year and is carrying a record book taken at better ones, with the plant already built — though our price data for it must be corrected first.',
            '**Treat the approval-based fabricators as good cyclicals, not compounders.** DEE Development (gas-turbine piping approvals, capacity built, debt cut) and Kilburn Engg. (nuclear qualification, 23% returns) are the best of them; JNK has the licensor qualification but depends on a Korean parent whose agreement has lapsed and who is in court; Everest Kanto Cylind (Everest Kanto Cylinder) has certifications but a commodity product. Tega Industries has the sector\'s finest aftermarket model attached to ₹11,200cr of new debt, so it is now a leveraged bet on the mining cycle.',
            '**The policy-dependent names need a policy event, not a better quarter.** Praj Industries needs a blending decision beyond E20; WPIL needs the rural water scheme to pay; HPL Electric needs meter prices to stop falling. Each is cheap for a reason that management cannot fix alone.',
            '**Where the moat is a brand or a rule, discount it.** Aditya Infotech has a genuine brand and distribution, but 43% share came partly from a testing rule; Shree Refrigrations has an almost unassailable naval registration but 370 days of working capital and extreme lumpiness; HLE Glascoat has premium German technology sitting on top of an Indian business that has lost its pricing power.',
            '**Avoid Standard Glass, John Cockerill and ICE Make Refrig.** — a story that keeps changing with restated working capital, technology that belongs to the parent, and growth bought by not raising prices alongside a convenient change in depreciation.',
            'The single test I would apply across all nineteen: when costs rose 15-20% this year, who put their prices up and kept their customers? That list — Pitti, Tega, Gala, Aditya Infotech — is the list of businesses whose margins are structural. Everything else in this sector is a cycle with a good story attached.',
        ],
        bottomLine:
            'In this sector the moat is almost always a certification, a vendor code or a wear part, and almost never a factory. Own the companies the customer has designed in and cannot easily re-qualify (Pitti Engineering, Gala Precision Engi., Jash Engineering), accumulate the two genuine franchises in their bad year (GMM Pfaudler, Anup Engineering), and avoid anyone whose technology, pricing power or accounting belongs to someone else.',
    },

    sources: [
        {
            label: 'GMM Pfaudler: dominant share of the Indian glass-lined market — JM Financial initiating coverage',
            url: 'http://www.jmflresearch.com/JMnew/JMCRM/analystreports/pdf/GMM_IC_June20.pdf',
        },
        {
            label: 'Mill liner market size and shares (Metso, Tega and others) — SkyQuest',
            url: 'https://www.skyquestt.com/report/mill-liner-market',
        },
        {
            label: 'Pitti Engineering: integration and value addition in motor laminations — Scientific Investing',
            url: 'https://scientificinvesting.substack.com/p/scaling-through-integration-and-value',
        },
        {
            label: 'Jal Jeevan Mission extension and funding — Business Standard',
            url: 'https://www.business-standard.com/india-news/jal-jeevan-mission-extension-2028-rural-tap-water-funding-cabinet-approval-126031100333_1.html',
        },
        {
            label: 'India\'s smart meter population at 7.24 crore — T&D India',
            url: 'https://www.tndindia.com/indias-smart-meter-population-at-7-24-crore-parliament/',
        },
        {
            label: 'E20 achieved: what next in India\'s ethanol blending roadmap — BW Businessworld',
            url: 'https://www.businessworld.in/article/e20-achieved-india-shifts-from-sugarcane-to-corn-ethanol-are-oems-ready-for-e27-or-e30-594684-594686',
        },
    ],
};
