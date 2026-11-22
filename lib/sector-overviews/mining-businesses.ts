import { BusinessProfile, OverviewSection } from './types';
import { miningCharts } from './card-data/mining';

// Tab 2 of the Mining & Metals Recycle note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (all consolidated except Ardee, standalone); splits are from each company's latest presentation or call. The cost chart uses India's price index for each company's main metal or mineral. Caliber, Ardee and CMR Green listed recently, so their filed history is short.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Two ways of making money from metals and minerals.",
        ],
        points: [
            {
                label: 'Recycling',
                text: "Buying scrap (old car batteries, aluminium scrap, cables) and melting and refining it into lead, aluminium and copper that battery, car-part and cable makers buy (Gravita, Pondy Oxides, Ardee, CMR Green). The recycler earns a spread per tonne; the metal price itself is mostly passed on.",
            },
            {
                label: 'Mining',
                text: "Digging iron ore and turning it into pellets and steel (Godavari Power); mining bauxite in Guinea and bentonite in India (Ashapura); grinding minerals such as calcium carbonate and kaolin into fillers for paint and plastics (20 Microns).",
            },
            {
                label: 'Mining services',
                text: "Removing the earth above coal seams, digging the coal and transporting it, under long contracts for mine owners such as Coal India (Caliber).",
            },
            {
                label: 'Aluminium processing',
                text: "Turning bought aluminium ingot into powder for building blocks and explosives, foil for medicine packs and wire for power lines (MMP Industries). The metal price is passed on with a lag; the profit is a processing margin per tonne.",
            },
        ],
    },
    {
        heading: 'Four ways of earning',
        body: [
            "Whether a company owns the resource, processes it or works for its owner decides how much commodity prices move its profit.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What sets the profit', 'How fast the cash comes'],
                rows: [
                    ['**Recycling spread**', 'Gravita, Pondy Oxides, Ardee, CMR Green', 'Profit per tonne between scrap and metal; volume', 'Slow: scrap and metal stock, paid for quickly'],
                    ['**Owning the ore**', 'Godavari Power, Ashapura, 20 Microns', 'The selling price of ore, pellets and minerals against mining cost', 'Normal credit terms; Ashapura ships in bulk'],
                    ['**Contract mining**', 'Caliber', 'Rate per cubic metre or tonne, with diesel passed on', 'Paid by state-owned mine owners; heavy spending on machines'],
                    ['**Aluminium processing**', 'MMP Industries', 'Profit per tonne over the ingot price; grade mix and plant use', 'Slow: about 90 days of metal stock'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Gravita India',
        inShort: ["**A recycler of lead, aluminium, plastic and now copper**, with plants in India and overseas, that buys scrap around the world and sells metal at prices linked to the London Metal Exchange.", "**Good:** management guides for 25–30% profit growth a year for the next four to five years, revenue rose 38% in Q2 FY27 with the new copper business, and copper earned ₹84,671 a tonne. **Bad:** return on capital has fallen from 31% to 16% as it expands, only about 48% of operating profit turned into cash over five years, Q2 profit rose only 6% and lead volume fell about 11% as scrap from the Gulf still did not arrive, and promoters have sold down from about 66% to 56%.", "**Verdict: own.** A proven recycler with a clear growth plan, at a price that asks for about what I expect (about {need:Gravita India|18}% a year against my ~17%); cash conversion is the thing to watch."],
        tagline: "A multi-metal recycler (lead, aluminium, plastic and copper) with plants in India and abroad, a global scrap-buying network and an LME-listed lead brand.",
        revenue: '₹4,265cr (FY26, consolidated)',
        products: [
            { name: 'Lead', text: "Refined lead and lead alloys made from used batteries and lead scrap at Mundra, Phagi (Jaipur) and Chittoor. Its Mundra lead is now listed on the London Metal Exchange as GRAVITA M, which makes it easier to win approval from overseas battery makers. Profit was ₹24,181 a tonne in Q1 FY27." },
            { name: 'Copper', text: "Copper and copper alloys (such as brass) from Rashtriya Metal Industries, a recent acquisition. It brought in ₹376cr of revenue in Q1 FY27 while running at only 50% of capacity, at ₹55,151 a tonne. A new 29,400-tonne copper recycling plant in Gujarat (₹160cr) is due within 12 months." },
            { name: 'Aluminium', text: "Aluminium alloys for die-casting, currently made mostly at its overseas plants. Profit was ₹25,175 a tonne in Q1 FY27, helped by high prices; management calls ₹15–17 a kg sustainable." },
            { name: 'Plastic', text: "Recycled plastic from scrap. Profit was ₹10,197 a tonne in Q1 FY27; management expects ₹10–12 a kg over time." },
            { name: 'New lines', text: "Lithium-ion battery recycling is at the research stage, aiming to refine black mass rather than just collect it. Planned rubber recycling has been put on hold so the money can go to copper." },
        ],
        revenueText: "The company does not give a full split by metal. Copper brought in **₹376cr of the ₹1,475cr Q1 FY27 revenue, about a quarter**; lead, aluminium and plastic made up the rest, with lead the largest. **Value-added products were 63% of revenue** (50% without copper). Total volume was 55,455 tonnes in the quarter, up 4%, while lead volumes fell because Gulf scrap could not get through.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'Copper', share: 25 }, { label: 'Lead, aluminium, plastic and other', share: 75 }], note: 'The company does not split the 75% further.' },
        ],
        customers: ["**Battery makers** buy most of the lead, in India and abroad; the company does not name customers on the call. The LME listing is meant to help it win new overseas battery makers.", "**Copper and copper-alloy buyers**, who order on monthly or fortnightly average copper prices, so the company can match its purchases and hedges to each order.", "**Aluminium die-casters** and plastic users, mostly served from its overseas plants for now."],
        difficulty: { level: 'Medium', text: "The recycling itself is well known, but pollution permits (a delayed consent to operate held up its Phagi expansion), a global scrap-buying network and tight hedging take years to build. Copper alloys need precise mixing of copper, zinc and nickel." },
        moat: "Its own scrap yards in many countries, strict hedging and a clean licensed operation give it cheaper, steadier scrap than informal recyclers. The weakness is that scrap supply can be cut off: 15–20% of its scrap came from the Gulf, and almost none arrived in Q1 FY27.",
        salesDrivers: ["**Scrap supply**: group plants ran at only about 52% of capacity in Q1 FY27 because Gulf scrap was stuck; management says about 70% is normal once supply returns. It is setting up its own scrap yards in the US by the end of the year, which copper now makes worthwhile.", "**New capacity**: installed capacity is 4.97 lakh tonnes, heading to over 8 lakh tonnes by FY29, with ₹1,680cr of capex earmarked through FY29. The Phagi lead plant added 40,500 tonnes in Q1 FY27 for about ₹30cr.", "**Copper ramp-up**: utilisation should rise from 50% to 60% or more by the end of FY27 as bottlenecks are removed; profit per tonne should go from about ₹55,000 to ₹60,000 by then and ₹70,000–75,000 in two to three years. Copper capacity is to double to about 60,000 tonnes in three years.", "**Pricing in a scrap shortage**: with scrap short in India, it raised selling prices and pushed value-added products, so profit held up even as lead volumes fell.", "**Aluminium hedging**: listing of an aluminium alloy contract (ADC12) on India's MCX exchange, still pending, would let it hedge and grow aluminium in India."],
        inputs: "**Scrap**: used lead-acid batteries and lead scrap, aluminium and plastic scrap, and copper scrap and cathode, plus alloying metals such as zinc and nickel and furnace fuel. About 35% of scrap for its Indian plants is bought in India; the rest is imported. Materials were 80% of sales in FY26.",
        costEffect: "**Passed on: it earns a spread per tonne.** Scrap is bought and metal sold at prices linked to the London Metal Exchange, and management says every purchase is hedged, so a rise in lead or copper prices mostly flows through to customers. That is why the margin percentage moves the opposite way to metal prices: copper at about $13,500 a tonne against $9,000 a year earlier makes the same profit per tonne look like a smaller percentage. Profit per tonne is what matters: ₹24,181 for lead, ₹25,175 for aluminium, ₹10,197 for plastic and ₹55,151 for copper in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (10% to 2%), but with hedging and price-linked sales that rarely happens; the real risk is a narrower spread between scrap and metal. **What happened:** India's lead price index rose about 9% from Q1 FY24 to Q1 FY27 while the operating margin slipped from 8.3% to 7.5%, mainly because copper, which carries a high metal price per tonne, is now a quarter of sales. The company's own adjusted margin was 9.8%, because it counts ₹35cr of hedging-linked 'operational' other income.",
        competitors: [{ name: 'Pondy Oxides & Chemicals', note: 'Smaller listed lead recycler that is also moving into copper, and building a copper cathode plant.' }, { name: 'Ardee Industries', note: 'Newly listed single-plant lead recycler in Andhra Pradesh, also with an LME-listed brand.' }, { name: 'Informal recyclers', note: 'Unlicensed local recyclers that compete for used batteries in India, often on price.' }],
        position: "**One of India's largest organised lead recyclers**, with 4.97 lakh tonnes of capacity across lead, aluminium, plastic and copper and one of the few Indian lead brands approved by the London Metal Exchange.",
        money: "Screener shows **₹534cr of net debt** at March 2026; the company put net debt at about ₹150cr at the end of June 2026. Working capital has stretched to about 95 days, with ₹1,040cr of inventory, because copper needs more stock and scrap is stuck in transit. Capex of ₹1,680cr is planned through FY29 (₹850cr for existing businesses); the Gujarat copper plant is paid from its own cash. ICRA raised its rating from AA- to AA. The annual report shows ₹158cr of disputed claims, the largest a ₹70.1cr customs demand from 2017–19 under appeal. Promoters hold **56%**, down from 66% in September 2023; management said the stake was sold to institutions, partly because the promoter wanted cash for personal purposes. The founder, Dr. Mahavir Prasad Agarwal, who had left management in 2024, died in 2026.",
        watch: ["Lead volume recovering from Q3 as new scrap sources (including the US yards) and domestic battery scrap arrive.", "Copper utilisation (50% in H1; 65–70% hoped for in 2–3 quarters) and profit per tonne holding about ₹65,000–70,000.", "Inventory and working capital coming back down from 95 days, and operating cash catching up with profit.", "Further promoter selling."],
        charts: miningCharts['Gravita India'],
    },
    {
        company: '20 Microns',
        inShort: ["**A maker of finely ground industrial minerals** (calcium carbonate, kaolin, talc and even finer 'nano' grades) and specialty additives used as fillers and performance aids in paints, plastics and rubber.", "**Good:** margins have stayed at 12–14% for years, debt is low, and profit nearly doubled from ₹35cr in FY22 to ₹67cr in FY26. **Watch:** paints are 46% of sales and paint sales were flat in FY26, 70% of raw material is bought in, growth slowed to about 4% in FY26 against a 13% target, Q1 FY27 revenue fell 1% and Q2 rose only 3% with the margin down to 11.6%, and the Malaysian plant slipped to FY28. Captive mines (December) and 9 MW of solar (Q4) should help costs from FY28.", "**Verdict: own.** A steady business at a cheap price: it needs about {need:20 Microns|7}% a year against my ~8%."],
        tagline: "India's leading maker of micronised and nano-sized industrial minerals and functional additives, with its own mines, a new limestone operation in Malaysia and a small construction-chemicals business.",
        revenue: '₹954cr (FY26, consolidated)',
        products: [
            { name: 'Micronised minerals', text: "Calcium carbonate, kaolin (china clay), talc and similar minerals ground to a few microns and sold as fillers and extenders. They cut the cost of paint, plastic and rubber and improve properties such as gloss, opacity and strength." },
            { name: 'Specialty and nano products', text: "Finer grades and functional additives, partly through 20 Microns Nano Minerals. Recent launches include de-laminated kaolin for tyres, talc anti-blocking agents for plastic film, calcium carbonate for oral care, and kaolins and waxes for inks and cosmetics. Its R&D centre launches 35–40 products a year." },
            { name: 'Construction chemicals', text: "Sold both to other manufacturers (as mineral inputs) and to builders (waterproofing from basements to roofs), through its subsidiary 20 MCC and a joint venture with Sievert, whose second phase is due to start soon." },
            { name: 'Malaysia', text: "Limestone mines bought in Malaysia are operating; a processing plant, taking at least 12 months to build, is due to start early in FY28." },
        ],
        revenueText: "**Paints are about 46% of revenue** and were flat in FY26; the rest comes from plastics, rubber, inks, construction materials, agriculture and other industries, which the company does not split on the call. **Exports are about 14%.** Products launched in the last two to three years bring in about 4–5% of revenue.",
        mixes: [
            { caption: 'Revenue by end market, FY26 (company call)', parts: [{ label: 'Paints and coatings', share: 46 }, { label: 'Plastics, rubber and other', share: 54 }], note: 'Exports are about 14% of total revenue.' },
        ],
        customers: ["**Paint makers**, including leading Indian and multinational companies; the company does not name them.", "**Plastic, masterbatch and rubber makers**, including tyre makers now taking its de-laminated kaolin.", "**Ink, cosmetics, oral-care, construction-material and agriculture customers**, plus export buyers. There are no fixed contracts: offtake is agreed informally and moves with demand."],
        difficulty: { level: 'Medium', text: "Grinding minerals to micron and sub-micron sizes with consistent purity and particle size takes know-how and equipment, and customers must test a grade in their own formulations before switching. Plain fillers are easier to copy than the nano and specialty grades." },
        moat: "Owning mines for about 30% of its raw material, a wide product range and an R&D centre that tailors grades to each customer make it a sticky supplier once its minerals are built into a formulation. The weakness is that its market share is only 10–30% per product, and it depends heavily on the paint industry.",
        salesDrivers: ["**Paint demand**: paints are 46% of sales; demand was weak in FY26 after a long monsoon, recovered in Q4 FY26 (revenue up 14.8% year on year), and management calls near-term demand volatile.", "**Plastics, rubber, inks and construction chemicals**: the segments outside paints where most new products are aimed.", "**New products**: 35–40 launches a year; management expects more customers to adopt recent launches over the next three to four years.", "**Capex plan**: ₹100cr over about two years, which management says could support about 18% revenue growth a year over three years and a 2-point margin gain if the global situation stays stable. It hopes to cross ₹1,000cr of sales in FY27 if conditions improve in the second half.", "**Exports and Malaysia**: exports are 14%; the Malaysian plant should cut sourcing costs for Asian sales from FY28."],
        inputs: "**Mineral ores** (limestone, kaolin, talc and others): about 30% from its own mines and 70% bought from others in India and abroad, plus fuel and gas for processing, power and freight. Materials were 53% of sales in FY26.",
        costEffect: "**Partly passed on, with a short lag.** Price increases for fuel, gas, freight and currency are passed to customers over days to weeks, not immediately. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (13% to 8%). **What happened:** India's limestone price index rose about 18% from Q1 FY24 to Q1 FY27, yet the margin barely moved (13.6% to 13.1%), helped by price increases, a better product mix and turning away low-margin business. In FY26 the margin was 12.9%.",
        competitors: [{ name: 'Omya and Imerys', note: 'Global industrial-minerals majors selling calcium carbonate, kaolin and talc to the same paint and plastic makers.' }, { name: 'Ashapura Minechem', note: 'Also sells kaolin (white performance minerals) to paint and paper makers, and is pushing into premium grades.' }, { name: 'Small unlisted Indian grinders', note: 'Many regional players compete on plain fillers; management says few rivals are listed.' }],
        position: "**One of India's leading makers of micronised minerals**, and by its own description the largest maker of micronised to nano-sized minerals in India, with 10–30% market share depending on the product.",
        money: "Screener shows **₹74cr of net debt**; the company puts net debt at 0.1 times equity, down from 0.4 in FY22. Free cash flow was about ₹42cr in FY26. The ₹100cr capex plan goes 40% to Malaysia, 20% to mining and infrastructure and the rest to specialty products, R&D and sustainability; Indian projects are paid from its own cash and Malaysia is funded about 70% equity and 30% debt. Promoters hold **45%**, unchanged over three years.",
        watch: ["Paint demand, which drives almost half of sales.", "The Malaysian plant starting early in FY28.", "Whether the margin actually moves up toward the promised 2-point gain."],
        charts: miningCharts['20 Microns'],
    },
    {
        company: 'Godavari Power',
        inShort: ["**An integrated Chhattisgarh steel-intermediates maker**: it mines its own iron ore, turns it into pellets, sponge iron, billets and steel wire, and runs its own solar and waste-heat power.", "**Good:** about ₹1,093cr of net cash on Screener (₹837cr on the company's own count, which leaves out treasury investments), 79% of operating profit turned into cash over five years, and current projects can be paid for without big borrowing. **Bad:** it had to buy iron ore in the market, the margin fell from 27% in Q4 FY26 to 19% in Q1 FY27, one 2-million-tonne pellet plant is shut, its cold-rolling mill project has moved to Maharashtra with the cost up to ₹1,100cr, CRISIL cut its outlook, and ₹272cr (66%) of the ₹413cr it lent in FY26 went to related parties.", "**Verdict: follow.** Cash-rich and low-cost; the price needs about {need:Godavari Power|13}% a year against my ~10%, which fits since 9 Oct 2026, but I want to see the mine ramp-up, the margin recovery and the two new projects deliver first."],
        tagline: "A backward-integrated maker of iron ore pellets, sponge iron, billets, ferro alloys and steel wire with its own iron ore mines and captive power, now building a battery-storage factory and a cold-rolling mill.",
        revenue: '₹5,376cr (FY26, consolidated)',
        products: [
            { name: 'Iron ore mining', text: "The Ari Dongri mine can produce at 6 million tonnes a year, but output was held back until it got approval to use more land for dumping waste rock; the forest department allowed tree felling on 60.84 hectares on 18 November 2026, and the company expects to clear the ground in 3–4 weeks and then ramp back to full capacity. A second mine, Boria Tibbu, runs at 0.2–0.3 million tonnes against a 0.7 million tonne permit. FY27 guidance is 3.4 million tonnes of usable ore." },
            { name: 'Iron ore pellets', text: "Its main product: 4.7 million tonnes of capacity, 77% used in Q1 FY27. Pellets beyond its own needs are sold in the open market at about ₹9,000–10,000 a tonne; it exported two shiploads in June and July." },
            { name: 'Sponge iron, billets, ferro alloys and wire', text: "Downstream products made largely from its own pellets, plus galvanised products whose deliveries dip in the monsoon." },
            { name: 'Captive power', text: "Solar power rising from 165 MW to 290 MW, 49 MW from waste-heat recovery, and a 45 MW battery system to store solar power." },
            { name: 'New projects', text: "A battery energy storage (BESS) factory in Maharashtra due in Q1 FY28, and a 0.7 million tonne cold-rolling mill near Sambhaji Nagar due in December 2027. A 1 million tonne integrated steel plant is on hold." },
        ],
        revenueText: "The company does **not split revenue by product** on the call. Pellet sales jumped in Q1 FY27 because all three pellet plants ran; sponge iron, billets and wire grew year on year. Sales are **almost all in India**; exports are occasional. FY26 revenue of ₹5,376cr was about the same as FY22.",
        customers: ["**Steel makers buying pellets and sponge iron in the open market**, mainly in India; high-grade pellets also sell abroad.", "**Its own downstream plants**, which take a fixed share of its pellets.", "**Project and infrastructure buyers** of galvanised products. The battery factory will sell containers to power developers bidding in tenders, and the cold-rolling mill is aimed at car makers in Maharashtra."],
        difficulty: { level: 'Medium', text: "The products are standard steel intermediates. The hard part is getting mining leases, land and state approvals, which take years and are currently delaying its mine ramp-up and stalled its steel plant." },
        moat: "Owning its iron ore and much of its power makes it one of the lower-cost producers when the mines run fully. The products themselves are commodities, and the cost edge disappears when approvals delay the mines, as in Q1 FY27.",
        salesDrivers: ["**Pellet prices**, driven by steel demand rather than ore costs: management says ₹100 a tonne on pellet prices is worth about ₹40cr a year. Prices touched about ₹8,700 in early July and recovered to about ₹10,000.", "**Own-ore volumes**: once the dumping land is approved (expected by the end of September; no approval announced by 30 September), mining should ramp up from Q4 FY27; market ore purchases should drop from 25–30% in Q3 to under 10% in Q4 and to zero in FY28. Each ₹100 a tonne cut in mining cost adds about ₹45–50cr of operating profit.", "**Pellet plant restart**: one 2-million-tonne plant was shut in July because gas prices rose 40–45% and bought-in ore made it unviable; Q2 pellet output may be only about 500,000 tonnes.", "**New projects**: the battery factory from Q1 FY28 and the cold-rolling mill from December 2027 are the main growth drivers; FY28 volume growth elsewhere will be limited. Management still targets four times today's revenue and three times today's profit by 2030, now without the steel plant."],
        inputs: "**Iron ore** (bought in the market when its own mines fall short), **imported coal** (up from about ₹10,500 to ₹13,000 a tonne after the West Asia crisis), natural gas for the pellet plants and diesel for the mines. Materials were 51% of sales in FY26.",
        costEffect: "**Not protected.** It sells at market prices set by steel demand, so higher costs come straight out of its margin. Being its own ore supplier is the protection, and it failed in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (23% to 18%). **What happened:** India's iron ore price index rose about 23% from Q1 FY24 to Q1 FY27, and the margin fell from 23% to 19% over those three years (27% to 19% in the last quarter alone). The damage came from having to buy ore in the market (about 75% of the Q1 FY27 cost increase) and dearer imported coal (25%); mining cost per tonne was the highest in 10 years because output was low.",
        competitors: [{ name: 'Pellet makers in Odisha and Maharashtra', note: "Most of India's pellet output and new supply comes from these states; many run below capacity for lack of ore." }, { name: 'NMDC and merchant miners', note: 'Sell the iron ore Godavari has to buy when its own mines fall short, and set that price.' }, { name: 'Sarda Energy & Minerals', note: 'A Raipur-based peer that is also integrated from mines and power into steel intermediates.' }],
        position: "**A mid-sized, highly integrated producer** in Chhattisgarh with 4.7 million tonnes of pellet capacity and its own iron ore; a price-taker in every product.",
        money: "Screener shows **₹1,093cr of net cash**. Remaining capex is about ₹2,000cr over the rest of FY27 and FY28: about ₹1,000cr left on the cold-rolling mill (₹1,100cr total, with ₹550cr of debt) and ₹700–800cr on the battery factory, on top of about ₹500cr already spent there. With the steel plant on hold, management says free cash flow covers the rest. The company's own net cash figure is ₹837cr and CRISIL's about ₹700cr (Screener's counts treasury investments); borrowings were ₹443cr, so it is net cash, not debt-free. CRISIL rates it AA- but cut its outlook from positive to stable in May 2026. Of ₹413cr of loans it made in FY26, ₹272cr went to related parties, mostly group companies such as its battery subsidiary and Ardent Steel. It sold about ₹25cr of shares in its associate Jammu Pigments to that company's promoters. Promoters hold **63%**, unchanged over three years.",
        watch: ["The mining ramp-up back to 6 million tonnes a year from Q4 FY27, now that the dumping land is approved.", "The shut pellet plant restarting as gas and pellet prices move.", "The battery factory starting in Q1 FY28 and winning its first orders.", "Further loans to related parties and the group education trust."],
        charts: miningCharts['Godavari Power'],
    },
    {
        company: 'Pondy Oxides & Chem.',
        inShort: ["**A lead recycler that is fast adding copper**: it turns imported scrap into pure lead, custom lead alloys and recycled copper, and is building a copper cathode plant.", "**Good:** revenue rose 55–78% year on year in the last two quarters, lead profit per tonne hit a record ₹21,595 and copper volumes more than tripled. **Bad:** lead volume fell about 29% in Q1 on shipping delays, so the FY27 lead target looks out of reach; operating cash was negative in FY25 and FY26; promoters' stake fell from 49% to 36% after new shares were issued, and almost all its scrap is imported.", "**Verdict: wait.** Its profit is not arriving as cash: operating cash was ₹18cr against ₹297cr of profit over FY23–FY26 (6%), and −₹44cr against ₹132cr of profit in FY26. It returns to follow when operating cash turns positive and covers most of its profit, with the cathode plant running."],
        tagline: "A non-ferrous recycler making pure lead and specialty lead alloys (mainly for lead-acid batteries) and recycled copper, building a 36,000-tonne copper cathode plant in Tamil Nadu.",
        revenue: '₹2,958cr (FY26, consolidated)',
        products: [
            { name: 'Lead and lead alloys', text: "Pure lead and customised lead alloys, mainly for lead-acid batteries. Value-added alloys were 85% of lead sales in Q1 FY27 (usually 65–70%). Profit was a record ₹21,595 a tonne; management calls ₹18,000–20,000 sustainable." },
            { name: 'Copper recycling', text: "12,000 tonnes of capacity in Andhra Pradesh (6,000 tonnes added in Q4 FY26), about 75% used. Volumes more than tripled in Q1 FY27 and profit was ₹48,488 a tonne; management now guides above ₹40,000." },
            { name: 'Copper cathodes', text: "A 36,000-tonne plant at Thervoy Kandigai, Tamil Nadu, costing about ₹200cr, will refine scrap into top-grade (LME grade A) copper cathode. The first 18,000 tonnes are due around December 2026 and the rest by Q3 FY28; guided profit is ₹60,000–65,000 a tonne." },
            { name: 'Plastics, aluminium and zinc', text: "Small lines: about 800 tonnes of plastics in Q1 FY27 (now profitable) and about 200 tonnes of aluminium, plus zinc metal and zinc oxide." },
        ],
        revenueText: "Q1 FY27 revenue was **₹931cr standalone (₹935cr consolidated), up about 55%**. **Domestic sales were 55% and exports 45%**; exports were 55% of lead sales and 25% of copper sales, mostly to South-East Asia. The company does not give the quarter's split between lead and copper, but expects **copper to be about 45% of FY27 revenue**.",
        mixes: [
            { caption: 'Expected revenue by metal, FY27 (company guidance)', parts: [{ label: 'Lead and other', share: 55 }, { label: 'Copper', share: 45 }] },
            { caption: 'Revenue by market, Q1 FY27', parts: [{ label: 'India', share: 55 }, { label: 'Exports', share: 45 }] },
        ],
        customers: ["**Battery makers** buying lead and lead alloys in India and South-East Asia; alloy buyers depend on specific suppliers for their exact recipe. The company does not name customers.", "**Wire-rod and household-wire makers** buy its recycled copper, and higher grades go to busbar makers.", "**Cable, electrical, foil and circuit-board makers** are the target buyers for its cathodes."],
        difficulty: { level: 'Medium', text: "Smelting lead is standard, but custom alloys must pass customers' tests. The cathode plant uses fire refining and electro-refining, which is new for the company." },
        moat: "Niche alloys make it a named supplier that customers cannot easily swap, which let it keep alloy volumes even when scrap was short. The weakness is supply: nearly all its scrap is imported, so shipping delays cut its volumes regardless of demand.",
        salesDrivers: ["**Scrap arrivals**: shipping delays around Hormuz cut Q1 FY27 lead output, and the newer 72,000-tonne lead plant ran below 50%; less than 5% of scrap comes from the Middle East, but many routes pass through it. It is adding South-East Asian and South American suppliers.", "**Lead volume target**: 1.25–1.3 lakh tonnes for FY27, which management still hopes to reach if shipping improves; Q1 lead sales fell about 29% to roughly 15,900 tonnes, so the rest of the year would need about 37,000 tonnes a quarter against a record of about 23,000.", "**Copper expansion**: the cathode plant should run at 80–90% in FY28 (over 30,000 tonnes), and it plans to buy 25–30% of copper scrap in India.", "**Value-added mix**: targeting 65–70% of lead sales from alloys (65% last year).", "**Target 2030**: over 15% volume growth, 20%+ revenue and profit growth a year, an operating margin above 8% and return on capital above 20%."],
        inputs: "**Imported scrap**: lead-battery and lead scrap (almost all imported in Q1 FY27, because Indian scrap was far dearer) and copper scrap (mostly imported), plus fuel and chemical additives, whose prices jumped in Q1 FY27. Materials were 88% of sales in FY26.",
        costEffect: "**Passed on: it earns a spread per tonne.** Scrap and metal both trade at prices linked to world metal prices, so higher lead or copper prices largely flow through to customers; the margin percentage falls when metal prices rise even if profit per tonne holds. Management puts it plainly: copper cathode at about ₹65,000 a tonne against lead at ₹20,000–21,000 a tonne means more profit in rupees but a lower percentage margin. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 9 points (7% to about minus 2%), which is why the spread matters more than the metal price. **What happened:** India's lead price index rose about 9% from Q1 FY24 to Q1 FY27 while the margin improved from 4% to 6%, as alloys and copper lifted profit per tonne.",
        competitors: [{ name: 'Gravita India', note: 'Larger listed lead recycler with plants in India and abroad, also expanding into copper.' }, { name: 'Ardee Industries', note: 'Newly listed lead recycler in Andhra Pradesh selling to battery makers in India and abroad.' }, { name: 'Primary copper makers and imports', note: 'The cathode plant will compete with imported cathode and large Indian producers such as Hindalco.' }],
        position: "**A mid-sized non-ferrous recycler** that describes itself as India's largest maker of secondary lead alloys, now becoming a lead-and-copper company.",
        money: "Screener shows **₹141cr of net debt**. Operating cash was negative in FY25 (₹81cr out) and FY26 (₹44cr out); management blamed FY26 on a delayed vessel pushing a large payment to 5 April, and says working capital is now 46 days, down from 53. FY27 capex is about ₹175cr (₹20–25cr maintenance, ₹140–150cr for copper); the ₹200cr cathode plant is paid from its own cash, with ₹25cr spent so far. CRISIL rates it A, now with a positive outlook. Promoters hold **36%**, down from 49% in September 2023 as share capital rose from ₹10cr to ₹15cr through new share issues.",
        watch: ["Cathode trial production around December 2026.", "Lead volumes against the 1.25–1.3 lakh tonne target.", "Operating cash turning positive in FY27."],
        charts: miningCharts['Pondy Oxides & Chem.'],
    },
    {
        company: 'Ardee Industries',
        inShort: ["**A lead-battery recycler** in Andhra Pradesh that turns used batteries and lead scrap into refined lead and lead alloys for battery makers in India and eight other countries; newly listed in 2026.", "**Good:** return on capital hit 49%, revenue grew from ₹463cr to ₹1,168cr in two years, and IPO money has cleared its debt. **Bad:** it turns little profit into cash so far (₹30cr of operating cash on ₹147cr of operating profit in FY26), one customer is about 40% of sales, management guides the margin down to about 10%, and its prospectus lists two criminal cases against the promoters.", "**Verdict: follow.** High returns and a fair price (about {need:Ardee Industries|13}% a year needed against my ~12%), but operating cash was −₹1cr against ₹136cr of profit over FY23–FY26, though FY26 converted 35% (₹30cr of ₹85cr); I want to see profit turn into cash."],
        tagline: "A single-plant secondary lead maker producing refined lead (the LME-listed ARDEE LEAD 9997 brand) and customised lead alloys for battery companies.",
        revenue: '₹1,168cr (FY26, standalone)',
        products: [
            { name: 'Refined lead', text: "High-purity lead sold under the ARDEE LEAD 9997 brand, which is listed on the London Metal Exchange and on India's MCX. Most of its output." },
            { name: 'Lead alloys', text: "Customised alloys for battery makers, about 30–35% of output. The same furnaces make either product, and alloys grow slowly because each needs the customer's approval." },
            { name: 'Exports', text: "Sales to eight countries, up from ₹81.6cr in FY24 to ₹465cr in FY26. The plant is about 100 km from Chennai port, and management says exports earn somewhat better margins thanks to government incentives." },
        ],
        revenueText: "**Domestic sales were 61% and exports 39%** of Q1 FY27 revenue of ₹338.8cr. Volume was 17,645 tonnes (up from 15,529), at about ₹2.09 lakh a tonne. Domestic sales focus on South India. **One customer is about 40% of revenue** (down from 70%), and the top four or five take most of it.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company call)', parts: [{ label: 'India', share: 61 }, { label: 'Exports', share: 39 }] },
        ],
        customers: ["**Battery companies only**: they turn its lead into batteries for cars, backup power, telecom, data centres and solar storage.", "**Four or five large clients** it has served for years; the biggest is about 40% of sales.", "**Overseas battery makers** in eight countries, with more enquiries since the LME listing."],
        difficulty: { level: 'Medium', text: "Lead smelting is well known, but pollution permits, hedging discipline and battery makers' approvals for alloys take time. Buying scrap in India is hard because of the informal sector and tax issues." },
        moat: "Long relationships with a few battery makers, an LME-listed brand and a plant close to Chennai port give it steady orders and cheap exports. It has no pricing power and depends on imported scrap and a handful of customers.",
        salesDrivers: ["**Scrap imports**: war-related shipping blockages cut Q1 FY27 volumes compared with Q4, and it is trying to buy more in India and from new countries.", "**Capacity**: raised 51% to 156,950 tonnes from 29 May 2026 by debottlenecking for about ₹15cr. It runs at about 65%; the best level, 70–75%, is expected only in FY28.", "**Volume growth**: guidance is 10–20% for FY27, roughly 85,000 tonnes against 70,000 in FY26; management calls this conservative.", "**Exports and the LME listing**, which are bringing more overseas enquiries."],
        inputs: "**Used lead-acid batteries and lead scrap**, much of it imported through Chennai port (paid on arrival), plus petroleum-based consumables and freight. Indian scrap costs more than imports. Materials were 77% of sales in FY26.",
        costEffect: "**Passed on: it earns a spread per tonne.** Every purchase and sale is hedged back to back on the London Metal Exchange price each day, so lead price moves pass through; the margin percentage moves the opposite way to lead prices while profit per tonne is what matters. On the reported figures, operating profit was about ₹21,000 a tonne in FY26 (₹147cr on about 70,000 tonnes) and about ₹19,000 in Q1 FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (13% to 5%). **What happened:** India's lead price index rose only about 4% from Q1 FY26 to Q1 FY27, yet the margin fell from 13.5% to 10%, because Indian scrap cost more, freight and delivery times rose, and petroleum-based consumables got dearer.",
        competitors: [{ name: 'Gravita India', note: 'Much larger multi-metal recycler with plants in India and abroad and its own LME-listed lead brand.' }, { name: 'Pondy Oxides & Chemicals', note: 'Chennai-based lead and copper recycler competing for the same battery makers and imported scrap.' }, { name: 'Informal recyclers', note: 'Unorganised players that dominate Indian scrap collection and push up domestic scrap prices.' }],
        position: "**A mid-sized single-plant lead recycler in Andhra Pradesh**, one of the few Indian recyclers with an LME-listed brand.",
        money: "Screener shows **₹161cr of net debt** at March 2026, before the IPO. Since then it has repaid its ₹20cr of long-term debt, its working-capital loans are almost unused, and it holds about ₹150cr in deposits. ₹220cr of IPO money is set aside for working capital (buying scrap and giving longer credit to new export buyers). Working capital is about 95 days; management expects 90–100. Operating cash was negative in FY23 and FY24 and only ₹8cr and ₹30cr in FY25 and FY26. Return on capital will fall with the new equity; management expects it to stay above 20%. Promoters hold **68%** after selling shares in the IPO. The prospectus lists two criminal proceedings against the promoters and small tax cases against the company.",
        watch: ["Operating cash catching up with profit.", "The share of the largest customer.", "The margin getting back from 10% toward FY26's 13%."],
        charts: miningCharts['Ardee Industries'],
    },
    {
        company: 'Ashapura Minechem',
        inShort: ["**A minerals miner with two halves**: a large bauxite export business in Guinea (84% of revenue) that ships ore to alumina refineries, and an Indian business in bentonite, kaolin, bleaching clay and ceramic materials.", "**Good:** return on capital rose from 12% in FY22 to 21% in FY26 and revenue nearly doubled in FY26 as bauxite volumes rose. **Bad:** net debt is about ₹1,115cr (about 2 times operating profit), profit per tonne of bauxite has fallen to about $6 from about $10 on high freight, this year's volume target was in effect cut to 9–11 million tonnes, contingent claims are ₹465cr with loss-making Guinea subsidiaries, and the business depends on Guinea's government.", "**Verdict: follow.** Cheap (about {need:Ashapura Minechem|8}% a year needed against my ~7%), but I want freight and Guinea's export rules to settle first."],
        tagline: "A mining and minerals group exporting Guinean bauxite through its own ports, with Indian businesses in bentonite, kaolin, bleaching clay and advanced ceramic materials.",
        revenue: '₹5,237cr (FY26, consolidated)',
        products: [
            { name: 'Guinea bauxite', text: "Raw bauxite (the ore used to make alumina and aluminium) mined in Guinea and shipped through its own ports: Boffa, expanded from 5 to 8 million tonnes a year, and GSM, where a new jetty due by Q4 FY27 lifts capacity from 6 to 10 million tonnes. It sold 2.34 million tonnes in Q1 FY27." },
            { name: 'Guinea iron ore', text: "In trial production with small revenue; management wants a couple more quarters before giving a plan." },
            { name: 'Bentonite and allied minerals', text: "Clay used in foundries, oil and gas drilling, iron ore pelletising, cat litter and more. It has over 1 million tonnes of grinding capacity, which management calls the world's largest." },
            { name: 'White performance minerals', text: "Kaolin for paint (where it partly replaces far costlier titanium dioxide) and paper, where it is trying to replace imports." },
            { name: 'Bleaching clay and ceramics', text: "Bleaching clay for edible-oil refiners through its 50% joint venture Ashapura Perfoclay, and advanced ceramic materials through its 32% stake in Orient Ceratech." },
        ],
        revenueText: "**Guinea brought in ₹1,360cr, 84% of Q1 FY27 revenue of ₹1,616cr**, and ₹163cr of operating profit; the Indian businesses made up the rest. Bauxite earned **$6.3 a tonne** of operating profit in Q1 FY27, up from $5.9 in Q4 FY26 but well below the roughly $10 it used to make.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company call)', parts: [{ label: 'Guinea (bauxite and iron ore)', share: 84 }, { label: 'India minerals', share: 16 }] },
        ],
        customers: ["**Alumina refineries, mainly in China**, buying Guinean bauxite; four new Chinese refineries should add 20–30 million tonnes a year of bauxite demand.", "**Indian and overseas industrial users**: foundries, oil and gas, edible-oil refiners, petrochemicals, paint, paper, construction and car makers.", "Buyers in the Middle East and Europe have been hit by high freight, so it is focusing more on India, Asia and Africa."],
        difficulty: { level: 'Medium', text: "Digging bauxite is simple; the hard parts are mining rights and ports in Guinea, finding ships at a sensible price and keeping quality consistent. Premium bentonite and kaolin grades need long customer trials." },
        moat: "Its own ports and a washing plant that upgrades low-grade bauxite let it ship volume other mid-sized miners cannot. But bauxite is a commodity, freight is outside its control, and everything depends on Guinea's government.",
        salesDrivers: ["**Bauxite volumes**: management now puts FY27 at 9–11 million tonnes (its 10–12 million target with a ‘10% variance’); the FY28 target is 15 million tonnes, which management says would mean about $1 billion (about ₹10,000cr) of bauxite sales.", "**Ocean freight and ships**: the Chinese bauxite price rose from about $61 to $72, almost all because of freight, so its own price barely improved; it expects $5.5–6 a tonne of profit in the next quarter or two.", "**Guinea's planned export quota**, expected before the end of 2026, which management thinks would raise bauxite prices and lower freight.", "**Seasonality**: Q2 is usually the weakest quarter; most sales come late in Q3 and in Q4.", "**Indian value-added products**: about ₹200cr of capex and new grades for foundries, oil and gas, cat litter, paint and paper."],
        inputs: "For Guinea, the main costs are **ocean freight, fuel and marine logistics**, counted mostly in other costs (60% of sales). In India, mined clays plus **sulphuric acid** for bleaching clay, up fivefold in a year to over ₹30 a kg. Materials were 27% of sales in FY26.",
        costEffect: "**Partly protected.** Bauxite is priced at the buyer's port, so when freight rises the price it earns at the mine falls; in India it passes costs on slowly. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (11% to 8%). **What happened:** India's bauxite price index rose about 19% from Q1 FY24 to Q1 FY27 and the margin was roughly flat (10.8% to 11.2%). Freight moved profits more than material costs: bauxite profit fell from about $10 to around $6 a tonne, and the Q1 FY27 margin was 11.7% against 13.8% a year earlier.",
        competitors: [{ name: 'Large Guinea bauxite exporters', note: 'Guinea exports close to 200 million tonnes a year, dwarfing Ashapura; their output decides prices and freight.' }, { name: "Guinea's state miner (Nimba)", note: 'Plans to sell bauxite by monthly tender; management expects little effect on the market.' }, { name: 'Other bentonite grinders and imported grades', note: 'Compete in Indian clays; Ashapura is targeting grades India now imports.' }],
        position: "**A mid-sized bauxite exporter from Guinea** (about 2.3 million tonnes a quarter against Guinea's roughly 200 million a year) and, by its own account, the world's largest bentonite grinder.",
        money: "Screener shows **₹1,115cr of net debt**, about 2 times operating profit. Free cash has been negative in most years as it built ports and mines. India capex is about ₹200cr; the bauxite washing plant (similar plants cost about $15m) is run by a contractor on an operate-and-transfer basis, so it is not on the balance sheet. Borrowings rose to ₹1,444cr in FY26, though operating cash (₹463cr) and free cash (₹184cr) improved. The annual report shows ₹465cr of contingent liabilities, about 28% of net worth, which the auditor made a key audit matter; ₹170cr of old shipping claims are secured by a pledge of its shares in two subsidiaries and a joint venture; and Ashapura Boffa Bauxite and FAKO Resources lost ₹90cr between them in FY26. No current credit rating was found. Promoters hold **48%**, up from 45% in September 2023.",
        watch: ["Guinea's export quota and ocean freight rates.", "Quarterly bauxite volumes against the 9–11 million tonne range.", "Profit per tonne moving back toward $10."],
        charts: miningCharts['Ashapura Minechem'],
    },
    {
        company: 'Caliber Mining & Log',
        inShort: ["**A coal-mining contractor** for coal companies in central India: it removes the rock and soil above coal seams (overburden), digs out the coal and moves it by road and rail.", "**Good:** a ₹9,124cr order book including GST (over 5 times FY26 revenue, with an average of 46 months left on its contracts), revenue up 67% in Q1 FY27, and guidance for 45–50% revenue growth in FY27. **Bad:** capex runs at about a third of revenue, free cash has been negative every year, net debt is about ₹1,022cr, a diesel spike cut the margin to 17% and Q1 profit fell 22%, over 80% of revenue comes from Coal India, and it did ₹190cr of FY26 business with a joint venture partly owned by promoter relatives.", "**Verdict: wait.** Growth is visible, but it keeps borrowing to buy machines and deals heavily with related firms; I want to see free cash turn positive and the related-party business shrink."],
        tagline: "An end-to-end coal services contractor in central India doing overburden removal, coal extraction, road transport, rake loading and rail coordination, mainly for Coal India subsidiaries.",
        revenue: '₹1,678cr (FY26, consolidated)',
        products: [
            { name: 'Overburden removal', text: "Digging away the rock and soil above coal seams, paid per cubic metre. A record 43.37 million cubic metres in Q1 FY27, up from 28.56 million." },
            { name: 'Coal extraction', text: "Digging out the coal itself, paid per tonne, on contracts that include it. A record 1.54 million tonnes in Q1 FY27, up from 1.21 million." },
            { name: 'Coal logistics', text: "Moving coal by truck (2.42 million tonnes in Q1 FY27), loading rail wagons (4.77 million tonnes) and coordinating rail despatch." },
            { name: 'Coal trading', text: "A small and shrinking sideline." },
        ],
        revenueText: "**Mining services were ₹597cr, 91% of Q1 FY27 revenue of ₹657cr**; logistics and trading made up the rest. About **₹105cr of the quarter's revenue was diesel cost passed on** to customers. **More than 80% of revenue comes from Coal India.** The order book of ₹9,124cr (including tax) covers 9 contract sites (7 operating) in Maharashtra and Singrauli, Madhya Pradesh, with an average of 46 months left.",
        mixes: [
            { caption: 'Revenue by activity, Q1 FY27 (company call)', parts: [{ label: 'Mining services', share: 91 }, { label: 'Logistics and trading', share: 9 }] },
        ],
        customers: ["**Coal India subsidiaries**, over 80% of revenue, on multi-year volume contracts won by tender (for example the Jayant project in Singrauli).", "**Other mine owners**: it worked for Adani Power at Parsa until a land dispute halted the site in 2023.", "Payment is for work done (cubic metres and tonnes), not for coal sold, so it does not carry coal-price risk."],
        difficulty: { level: 'Medium', text: "The work is heavy-equipment contracting won by lowest bid. The skill is in running a 2,033-machine fleet efficiently, maintaining it in-house and ramping up new sites within three to four months." },
        moat: "Multi-year contracts are hard for a mine owner to switch mid-way, and in-house maintenance of older machines keeps costs low. But every new contract is a price-based tender, and the company is a price-taker on diesel.",
        salesDrivers: ["**Coal India outsourcing and power demand**: management sees no slowdown in coal demand, and its contracts pay for volume moved.", "**New contracts**: it is bidding for 8–10 coal and overburden tenders and wants to enter mine developer-operator (MDO) contracts in coal and iron ore; it also holds a critical-mineral block in Maharashtra.", "**Seasonality**: Q2 is weak because of the monsoon (about 34 million cubic metres of overburden expected), and Q3 and Q4 are the strongest.", "**FY27 guidance**: revenue up 45–50%, operating profit and net profit up 35% or more, if diesel prices normalise."],
        inputs: "**Diesel** for its trucks, excavators and dumpers, plus lubricants, tyres, spares and staff. Materials were only 1% of sales in FY26; power and fuel were about 60%.",
        costEffect: "**Mostly insulated from materials; diesel is the real cost, and it is mostly passed on with a lag.** All mining contracts have diesel escalation clauses, but management says recovery is never exactly 100% and arrives late. **Rule of thumb:** materials barely matter; a 10% rise in power and fuel costs not passed on would cut the margin by about 6 points (26% to 20%). **What happened:** India's diesel price index rose about 27% from Q1 FY26 to Q1 FY27 (bulk diesel went from about ₹90 a litre to a peak of ₹154 in May, and is now ₹110–120), and the margin fell from 24.2% to 16.7%. Stripping out the ₹105cr of diesel pass-through revenue, the margin was about 20%, against a normal 23%; mines closing and opening also cost efficiency. **Change from October 2026:** Coal India's subsidiaries now compensate diesel at actual bulk prices instead of retail rates, backdated to 20 March 2026, which the company says fully covers this year's fuel spike (filing of 22 October), so part of the lost margin should come back.",
        competitors: [{ name: 'Unlisted mining contractors', note: 'Bid for the same Coal India tenders; management says Caliber earns better margins and returns than these unlisted rivals.' }, { name: 'Large mine developer-operators such as Adani Enterprises', note: 'Dominate the bigger MDO contracts Caliber wants to enter.' }],
        position: "**One of the larger end-to-end coal service providers in central India**, with a 2,033-machine fleet and 7 active sites.",
        money: "Screener shows **₹1,022cr of net debt**, about 2.3 times operating profit. The company started FY27 with ₹1,024cr of gross debt and expects about ₹750cr by March 2027 after repaying ₹208cr from its ₹500cr IPO and paying loan instalments, if it wins no new work. The IPO also gave ₹167cr for machines and ₹125cr for general needs. FY27 capex is about ₹450cr (₹167cr from IPO cash, ₹283cr from loans). Capex has averaged about a third of revenue and free cash has been negative every year. CRISIL upgraded it from BBB+ to A-. Related parties are large: it billed ₹190cr in FY26 to a joint venture (51% Caliber, 49% a firm where promoter relatives are partners) and ₹77cr to a promoter-influenced transporter, sought approval for up to ₹1,200cr of such dealings in FY27, and guaranteed ₹17.7cr of a related firm's loan. Promoters, four brothers, hold **74%**.",
        watch: ["The margin getting back toward the normal 23%.", "New tender wins and any MDO contract.", "Debt falling toward ₹750cr by March 2027.", "Related-party business against the approved limits (up to ₹1,200cr in FY27)."],
        charts: miningCharts['Caliber Mining & Log'],
    },
    {
        company: 'CMR Green Tech',
        inShort: ["**India's largest aluminium recycler**, turning imported and local scrap into aluminium alloy that it often delivers still molten to auto-part makers' factories.", "**Good:** customers are tied in, it has about 45% of recycled aluminium supplied to the auto industry, and FY26 volume rose 24% with profit per tonne rising. **Bad:** margins are only 4–6%, net debt is about 3 times operating profit, operating cash over five years added up to roughly nothing (−₹410cr in FY26), it has guaranteed ₹594cr of its subsidiaries' loans, and promoters hold 84%, so few shares trade and share sales must follow.", "**Verdict: wait.** A strong franchise, but I want to see it turn profit into cash."],
        tagline: "A secondary aluminium maker supplying liquid and ingot aluminium alloys to auto makers and parts suppliers, plus billets, sheet ingots and other non-ferrous scrap, from 13 plants across India.",
        revenue: '₹8,640cr (FY26, consolidated)',
        products: [
            { name: 'Liquid aluminium', text: "Molten alloy delivered by road, 24 hours a day, straight into customers' casting plants, which saves them remelting ingots. It holds patents on moving liquid metal safely, and liquid-metal customers rarely switch." },
            { name: 'Alloy ingots', text: "Solid aluminium and zinc die-casting alloys for auto-part makers that do not take liquid metal." },
            { name: 'Billets and sheet ingots', text: "Recycled 'green' billets and sheet ingots for construction and solar-panel frames, a market until now served by primary producers. A second plant is likely." },
            { name: 'Can recycling', text: "A plant in Odisha next to Hindalco that turns used drinks cans into liquid metal for Hindalco." },
            { name: 'Other non-ferrous metals', text: "Sorted, furnace-ready scrap of stainless steel, zinc, lead, copper, brass and magnesium: about 19–20% of sales." },
        ],
        revenueText: "**Aluminium products were 81% of FY26 revenue** and other non-ferrous metals 19%. Most aluminium goes to the auto industry, where it has about 45% share. FY26 volume grew 24% to 4.09 lakh tonnes, and Q1 FY27 volume was 1,12,336 tonnes, up 25%. Adjusted operating profit was about **₹11,300 a tonne in FY26 and ₹12,400 in Q1 FY27**. (The ‘80,381 tonnes’ quoted on the Q4 call was the increase in volume, not the total.)",
        mixes: [
            { caption: 'Revenue by product, FY26 (company call)', parts: [{ label: 'Aluminium', share: 81 }, { label: 'Other non-ferrous', share: 19 }] },
        ],
        customers: ["**Nearly every Indian two-wheeler and car maker, and most Tier-1 auto-part makers**, often as the single liquid-metal supplier (for example Craftsman Automation, including Sunbeam).", "**Non-auto customers**: Hindalco, Jindal Stainless and Aurubis in Germany.", "Management says almost every second vehicle on Indian roads uses its aluminium."],
        difficulty: { level: 'High', text: "Moving molten aluminium safely by road, sorting mixed scrap by hand and meeting exact alloy specifications at 13 plants takes years to learn. Plants must sit close to customers, and technology comes through joint ventures with Toyota Tsusho, Nikkei MC Aluminium and Nippon Light Metal (royalty-free)." },
        moat: "Liquid-metal customers are physically tied to the plant next door and have little reason to switch, and it is four times bigger than its nearest rival. The weakness is a thin processing margin and heavy dependence on the auto industry and imported scrap.",
        salesDrivers: ["**Auto production**: management said vehicle output grew 12% in the first two months of FY27 and electric cars grew about 18%; electric vehicles use about three times as much aluminium as petrol cars.", "**New capacity**: from about 6.1 lakh tonnes to beyond 7 lakh tonnes by the end of FY27, with new plants at Shoolagiri (Tamil Nadu) and Bawal (Haryana) and the ramp-up of Tirupati and Jharsuguda; it expects about 25% volume growth again in FY27.", "**Non-auto products**: billets, sheet ingots and can recycling for primary producers.", "**Recycled-content rules (EPR)**, which will require products to include rising shares of recycled metal, from 5–10% up to 60–70% in some cases.", "**Carbon credits**: 2.73 lakh tonnes held but not booked as revenue, adding 70,000–80,000 a year, which could earn money once India has a market."],
        inputs: "**Aluminium scrap** bought on all six continents (the US is the biggest source) and in India, plus alloying metals, furnace fuel and power (a third from solar). Materials were 88% of sales in FY26.",
        costEffect: "**Passed on: it earns a processing spread per tonne.** Auto customers pay a monthly price that moves with aluminium prices and the exchange rate; the company hedges its exposure between buying scrap and the customer's pricing date. So the margin percentage falls when aluminium prices rise even if profit per tonne holds, and management asks investors to look at profit per tonne (about ₹11,000 in FY26). **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 9 points (5% to about minus 4%), which is why pass-through and hedging are essential. **What happened:** India's aluminium price index rose about 36% from Q4 FY25 to Q1 FY27, yet the margin improved from 3.0% to 4.3%, because prices were passed on and hedged and higher volumes and non-auto products lifted profit per tonne. A new risk is scrap export curbs: the EU is considering a 15% export duty on aluminium scrap from September 2026, which management expects suppliers and customers to share.",
        competitors: [{ name: 'Smaller secondary aluminium makers', note: 'Fragmented and mostly unlisted; CMR is four times the size of the nearest one.' }, { name: 'Imported alloy ingots', note: 'Mainly in South India, where CMR is adding capacity to replace them.' }, { name: 'Primary producers such as Hindalco', note: 'Traditional suppliers of billets and sheet ingots; Hindalco is also a customer.' }],
        position: "**India's largest aluminium recycler**, four times the capacity of its nearest rival and ranked 12th in the world (ICRA), with about 45% share of recycled aluminium supplied to Indian vehicle makers.",
        money: "Screener shows **₹1,417cr of net debt**, about 3 times operating profit; borrowings rose from ₹535cr in FY24 to ₹1,426cr in FY26. Operating cash was negative in FY25 (₹92cr out) and FY26 (₹410cr out) as working capital grew, so five-year cash conversion is about zero. FY27 capex is about ₹200cr. The June 2026 IPO of ₹630cr was entirely existing shareholders selling, so no new money came in. The ₹839cr net loss in FY24 came from a ₹1,240cr goodwill write-off; the documents read do not say where the goodwill came from. The company has guaranteed ₹594cr of its subsidiaries' loans and pledged 75 lakh shares of CMR Toyotsu to SBI, and has had three CFOs in about two years; the third, Yugal Kishor Garg, resigned on 3 October 2026 after about 14 months (leaving 23 October), and a fourth, Satish Kumar Kaushik, is due to be named in November. Promoters hold **84%**, so share sales are needed to meet the 25% public-holding rule.",
        watch: ["Operating cash turning positive as working capital settles.", "EU and US curbs on scrap exports.", "Profit per tonne holding at the ₹12,000 now guided as the new plants fill."],
        charts: miningCharts['CMR Green Tech'],
    },
    {
        company: 'MMP Industries',
        segment: 'Aluminium powders, foils and power products',
        inShort: ["**India's leading maker of aluminium powder** for AAC building blocks, mining explosives and fumigants, from four plants around Nagpur, which also makes pharma foil and power conductors and is starting polymer insulators, LT cables and a wire-rod plant.", "**Good:** about 60–65% of AAC powder and about 60% of explosives powder, record H1 FY27 revenue (+31%) and exports up threefold in Q2. **Bad:** seven workers died in an explosion at its Umred powder plant in April 2025; profit has grown only about 5–7% a year since FY19 at a 13% return on capital; Q2 powder volume grew just 2% (the rest was aluminium prices); foil earns about 2%; every new-business date has slipped; net debt rose to about ₹231cr; and about a quarter of FY26 profit came from associates.", "**Verdict: wait.** I expect about 12% a year of earnings growth against the {need:MMP Industries|15}% the price needs ({label:MMP Industries|full}); I want the PGCIL insulator approval and the wire-rod plant running first."],
        tagline: "A Nagpur aluminium processor making powders (its core), pharma and food foils and power conductors, now adding polymer insulators, LT power cables and an aluminium wire-rod plant through two subsidiaries.",
        revenue: '₹824cr (FY26, consolidated)',
        products: [
            { name: 'Aluminium powders', text: "Atomised, pyro, flake and leafing powders made from pure aluminium ingot: 29,100 t a year, about 80% used. FY26 uses: AAC blocks 36%, mining explosives 31%, grain fumigants 13%, atomised grades 12%, fireworks and leafing 8%. Management guides ₹37,000–42,000 of operating profit a tonne." },
            { name: 'Aluminium foils', text: "Pharma strip and blister foil, food and flexible-packaging foil and printed foil: rolling mill 8,400 t (70–80% used) and conversion 3,600 t (about 60%). A dairy lidding-foil line is ready and being tested by Amul, Mother Dairy and Dinshaw's for the January season; at 75% use it would add only ₹9–11cr a year." },
            { name: 'Conductors and cables', text: "AAC, AAAC and ACSR conductors and aerial-bunched cables, 7,200 t, plus a 1,200 t LT power-cable pilot at Bhandara (BIS approval received; sales from Q4 FY27 once MSEDCL and others approve). A 6,000 t LT cable plant at Umred (₹85–90cr) is due for trials in Q4 FY28, and an 18,000 t wire-rod plant (₹13–15cr) in Q4 FY27." },
            { name: 'Polymer insulators', text: "Silicone insulators from 11 kV to 765 kV for power lines, through MMP Electricals: 10 lakh pieces a year, ₹35–40cr invested. Approved by several state distribution utilities; approvals from Power Grid (PGCIL) and state transmission companies are still awaited, and 765 kV needs two more years of field record." },
            { name: 'Associates', text: "26.06% of Star Circlips & Engineering (car-part circlips and fasteners, the rest held by the promoters; Q2 FY27 profit ₹10cr) and 26% of Toyal MMP India (aluminium paste, a JV with Japan's Toyo Aluminium). Their share of profit was ₹8.2cr in FY26." },
        ],
        revenueText: "**Powders were 65% of H1 FY27 revenue**, foils 28%, conductors 7% and insulators about 1%. Powders earn almost all the profit: in FY26 their segment profit was **₹59.9cr (11.9% of sales)** against ₹4.3cr for foils (2.0%), ₹4.9cr for conductors (4.9%) and a ₹3.3cr loss in insulators. H1 FY27 revenue rose 31%, but Q2 volume grew only 2% in powders and 14% in foils (conductors −33%), so most of the rise was higher aluminium prices. Powder exports were ₹13cr in Q2 FY27, up from ₹4.5cr a year earlier.",
        mixes: [
            { caption: 'Revenue by segment, H1 FY27 (company)', parts: [{ label: 'Aluminium powders', share: 65 }, { label: 'Aluminium foils', share: 28 }, { label: 'Conductors and cables', share: 7 }], note: 'Polymer insulators were about ₹1.1cr, under 1%.' },
            { caption: 'Powder sales by use, FY26 (company)', parts: [{ label: 'AAC blocks', share: 36 }, { label: 'Mining explosives', share: 31 }, { label: 'Fumigants', share: 13 }, { label: 'Atomised grades', share: 12 }, { label: 'Fireworks and leafing', share: 8 }] },
        ],
        customers: ["**AAC-block makers and cement companies** (Crisil names UltraTech and Shree Cement) and **explosives makers for coal and other mines**, plus fumigant makers, fireworks makers and Sumitomo Chemical for atomised powder.", "**Pharma companies** (Crisil names Torrent and Cadila) for blister and strip foil, and dairy companies being sampled for lidding foil.", "**Power utilities and contractors** for conductors and insulators, and export buyers in Europe (including its 40-year partner AVL Metal Powders, Belgium), Africa, Latin America and the Middle East."],
        difficulty: { level: 'Medium', text: "Making powder is hazardous and grade-specific (the April 2025 explosion killed seven), and customers qualify each grade, which protects the AAC and explosives niches. Foil and conductors are crowded commodity products. Transmission insulators are hard to enter: utilities take 1.5–2 years to approve and want a field record first." },
        moat: "A leading share in AAC and explosives powder, built on many customised grades and decades of customer ties, keeps its core business steady. Outside powders it has little pricing power: foil earns about 2%, conductors depend on government tenders, and the new businesses have yet to win approval.",
        salesDrivers: ["**Guidance (3 Nov 2026 call)**: conductor revenue in H2 FY27 40–50% above H1 (₹33cr); exports to grow further; operating profit a tonne in line with May's ranges. The May presentation targeted 20–25% consolidated revenue growth including new businesses; May's ₹18–20cr of FY27 insulator revenue now 'looks a little difficult'.", "**AAC building and mining**: housing and coal output drive powder demand; powder plants are about 80% full and there is no powder capex for two years, so growth there comes from exports and richer grades, not volume.", "**Insulator approvals**: PGCIL approval was expected in Q2 FY27 and is still awaited; management now expects meaningful revenue from Q1 FY28, ₹45–50cr in FY28 (May guide), full use from H2 FY28 and 18–20% margins.", "**Wire rod and LT cables**: the 18,000 t wire-rod plant (Q4 FY27) should lift conductor profit to ₹15,000–18,000 a tonne and sell outside at ₹10,000–12,000; LT cables (14–15% margin) start at Bhandara and scale at Umred from FY29.", "**My estimate:** about 12% a year of earnings growth over three years, from about ₹50cr of underlying profit (last four quarters without the Q4 FY26 insurance credit) to about ₹70cr by FY29. That is below the company's plan because its profit has grown 5–7% a year since FY19, H1 FY27 rode on aluminium prices and a fire-hit base, and every new-business date has slipped."],
        inputs: "**Aluminium ingot** for powders and conductors and **aluminium foil stock** for conversion, about 75–80% of sales (Crisil), plus power, gas and packaging. A 5.5 MW rooftop solar plant meets about 20% of its power; a ₹30cr, 7 MW solar park is ready but awaits approvals. Materials were 78% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Prices follow aluminium with a 3–4 month lag (Crisil), so each swing leaves inventory gains or losses of ₹2–2.5cr a quarter (a gain in Q4 FY26, a loss in Q2 FY27). Commodity grades meet price resistance. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (8% to about 0%). **What happened:** India's aluminium price index rose 63% from Q2 FY24 to Q1 FY27, while the margin moved between 5.6% and 10.9% with no steady link to it; plant use, the 50-day shutdown after the April 2025 explosion, start-up losses in the subsidiaries and inventory gains and losses moved the margin more than the metal price.",
        competitors: [{ name: 'Smaller Indian powder makers and imports', note: 'The company does not name its powder rivals; it says its explosives share fell from about 70% to about 60% in a year or two.' }, { name: 'Chinese foil imports', note: 'Now under anti-dumping duty, which management expects to help Indian foil makers.' }, { name: 'Deccan Enterprises, Olectra and porcelain makers', note: 'Established insulator makers with 6–8 month order books and the PGCIL approvals MMP still lacks.' }],
        position: "**India's leading aluminium powder maker** by its own account, with about 60–65% of AAC powder and about 60% of explosives powder; a small player in foil, conductors and insulators.",
        money: "Screener shows **net debt of ₹183cr** at March 2026 (borrowings ₹185cr); borrowings rose to ₹236cr by September 2026, about **₹231cr net** against equity of ₹375cr, as capital work in progress rose to ₹56cr. Operating cash was 81% of operating profit over FY22–FY26, but capex took almost all of it: free cash was about ₹25cr in five years. Planned spending: LT cables ₹85–90cr over 2–3 years, wire rod ₹13–15cr, solar ₹30cr, insulator balancing ₹8–10cr; the CFO's ceiling is net debt of 1 times equity. It guarantees ₹66.9cr of its subsidiaries' loans. Crisil rates it BBB+/Stable; the rating was tagged 'issuer not cooperating' from July to December 2025 because surveillance fees were unpaid. Dividend ₹2 a share. Promoters hold **74.5%**, unchanged over three years, including 4.56% held by the associate Star Circlips.",
        watch: ["PGCIL approval for 400 kV insulators and the first transmission orders.", "The wire-rod plant running in Q4 FY27 and H2 conductor revenue 40–50% above H1.", "Margin holding above 8% without inventory gains, and net debt staying near today's level."],
        charts: miningCharts['MMP Industries'],
    },
    {
        "company": "Midwest",
        "segment": "Miners and mining services — iron ore, bauxite, coal and industrial minerals",
        "inShort": [
            "**India's largest producer and exporter of Black Galaxy granite**, quarrying and processing granite blocks at 16-plus mines in Telangana and Andhra Pradesh and selling mostly to Chinese buyers, now adding quartz processing and planning rare-earth and mineral-sand projects abroad.",
            "**Good:** a steady 27–28% operating margin, FY27 revenue guided up about 30% to ₹840cr, and net cash after the IPO. **Bad:** customers take **129 days** to pay, more than half of export sales go to China and the top ten customers were 51% of FY25 revenue, the promoter carries adverse findings from a government investigation, and the shares trade at about 37 times earnings while the new ventures are still years from cash.",
            "**Verdict: pass.** A good quarry business, but at this price the governance history, the China dependence and the slow collections are not paid for."
        ],
        "tagline": "A granite quarrying and export company (Black Galaxy and Absolute Black) from Telangana and Andhra Pradesh, listed in October 2025, branching into quartz, heavy mineral sands and rare earths.",
        "revenue": "₹646cr (FY26, consolidated)",
        "products": [
            {
                "name": "Black Galaxy and Absolute Black granite",
                "text": "Raw and processed granite blocks from 16-plus mines, sold for countertops, flooring and monuments. Its share of India's Black Galaxy export volume was about 23% in FY24. Q1 FY27 granite volume rose about 10% and revenue more than 30%. One Black Galaxy mine pays a revenue share to a state-owned lessor."
            },
            {
                "name": "Quartz",
                "text": "A first-phase plant that crushes and purifies quartz for engineered stone (about 65%) and solar-grade uses (35%). 5,000 tonnes and about ₹5cr in Q1 FY27 at about ₹10,000 a tonne; guided ₹100–120cr in FY27 and ₹180–200cr in FY28. A second phase (about ₹125cr) is due in 10–12 months."
            },
            {
                "name": "New ventures",
                "text": "Sri Lankan heavy mineral sands (about ₹120cr, revenue expected FY29), a rare-earth pilot with Kerala's state-owned KMML (stalled after a change of government), an Indonesian rare-earth joint venture with state-owned PERMINAS (revenue expected FY29), and a Sierra Leone subsidiary still looking for concessions."
            }
        ],
        "revenueText": "Nearly all revenue is granite. **FY27 guidance is about ₹840cr: ₹720cr granite and ₹100–120cr quartz**, against ₹646cr in FY26. Sales are seasonal: Q4 brings 30–40% of the year because Chinese buyers restock after their New Year. The offer document says more than half of export revenue came from customers in China, and the top ten customers were 51% of FY25 revenue (63% in the June 2025 quarter). Shipments are mostly FOB, so the buyer pays the freight.",
        "mixes": [
            {
                "caption": "FY27 revenue guided by business (approximate, Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Granite",
                        "share": 86
                    },
                    {
                        "label": "Quartz",
                        "share": 14
                    }
                ],
                "note": "₹720cr granite and ₹100–120cr quartz out of about ₹840cr."
            }
        ],
        "customers": [
            "**Chinese granite processors and distributors**, more than half of export revenue per the offer document; China acts as a global hub for cutting and resale.",
            "**Buyers in 17 countries**, with the top ten customers at about half of revenue.",
            "**Engineered-stone and solar-glass makers** for the new quartz line."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Granite quarrying needs mining leases, environmental approvals and years of building quarries; Black Galaxy comes from a limited area, which helps. Processing itself is simple, and the new ventures depend on foreign governments' approvals."
        },
        "moat": "Leases on scarce Black Galaxy deposits and a long export record give it real scale. But granite is a commodity sold to a concentrated set of Chinese buyers, and none of the new ventures has earned money yet.",
        "salesDrivers": [
            "**Chinese demand** for Indian granite, which sets volume and the Q4 peak.",
            "**Price**: it raised granite prices by about 3–5% in Q1 FY27.",
            "**Granite volume**: about 10% growth in Q1; management assumes 10–12% a year.",
            "**Quartz ramp-up**: 10,000 tonnes a month by end-Q2, more than 15,000 by Q4; breakeven at about 10,000 tonnes.",
            "**New projects**: Sri Lanka and Indonesia both pointed at FY29."
        ],
        "inputs": "**Diesel, explosives, equipment and labour** for quarrying; management says diesel is about 13% of costs. It is moving its truck fleet to electric and adding solar power to cut fuel use.",
        "costEffect": "**Partly passed on, with a lag.** Diesel rose from about ₹85 to ₹125–130 a litre in early 2026, and the Q1 FY27 margin fell 1.9 points year on year; price increases of about 3–5% and electric trucks are meant to restore it. **Rule of thumb:** with diesel at about 13% of costs (roughly 9–10% of revenue), a 10% rise not passed on would cut the margin by about 1 point. **What happened:** the operating margin moved between 20% and 32% a quarter in FY25–FY27, mostly with the seasonal mix (Q4 highest), and was 25% in Q1 FY27.",
        "competitors": [
            {
                "name": "Other Indian granite quarry owners in Telangana, Andhra Pradesh, Karnataka and Tamil Nadu",
                "note": "Many smaller, often unlisted miners selling similar black granite."
            },
            {
                "name": "Pokarna",
                "note": "Listed Telangana granite and engineered-quartz maker."
            },
            {
                "name": "Brazilian and other foreign granite exporters",
                "note": "Compete for Chinese and global buyers."
            }
        ],
        "position": "**India's largest producer and exporter of Black Galaxy granite**, about 23% of India's Black Galaxy export volume in FY24, with 16-plus mines and 25 more sites planned.",
        "money": "Screener shows ₹192cr of borrowings at March 2026 against about ₹226cr of cash and short-term investments, so **net cash of about ₹34cr**; management calls gearing 0.2 times. **Receivables were about ₹246cr, 129 days of sales** (140 in FY25, 29 in FY22). Operating cash was ₹175cr in FY26; over FY22–FY26 it turned ₹711cr of operating profit into ₹481cr of operating cash (68%), but capex took most of it. Planned spending: about ₹125cr for quartz phase two (₹60–70cr in Q2–Q3), about ₹120cr for Sri Lanka from its own cash, and an Indonesian project expected to cost more than Kerala. The IPO raised ₹250cr fresh in October 2025. No dividend. Promoters hold **77.12%**.",
        "watch": [
            "Quartz volumes against the 10,000-tonne-a-month mark and breakeven in Q3.",
            "Receivable days coming down from 129.",
            "Any dealings between the listed company and the promoter's magnet company in Indonesia."
        ],
        charts: miningCharts["Midwest"],
    },
    {
        "company": "Jain Resource Recycling",
        "segment": "Metal recyclers — lead, aluminium and copper from scrap",
        "inShort": [
            "**A Chennai recycler of copper, lead and aluminium scrap**, mostly imported, that melts it into ingots and alloys sold in India and to more than 20 countries, and is now adding copper anode, cathode, wire rod and busbar plants.",
            "**Good:** FY26 revenue rose 48% to ₹9,543cr and profit 56% to ₹347cr, with a 26% return on capital, a 100% price-hedging policy and an LME-registered lead brand. **Bad:** **operating cash was −₹591cr in FY26** as inventory piled up, net debt is about ₹911cr, the margin is only about 4–6%, copper profit per tonne fell from about ₹36,000 to ₹31,000, and 75–80% of scrap is imported.",
            "**Verdict: wait.** A fast-growing recycler, but at about 27 times earnings I want to see the new copper plants lift profit per tonne and cash finally follow profit."
        ],
        "tagline": "One of India's largest non-ferrous metal recyclers, from Gummidipoondi near Chennai, listed in October 2025 and moving from ingots into copper cathode, rod and busbar.",
        "revenue": "₹9,543cr (FY26, consolidated)",
        "products": [
            {
                "name": "Copper and copper products",
                "text": "Copper ingots from scrap, and from Q1 FY27 copper anodes (1,600 t a month installed; about 600 t sold so far). Cathode (1,500 t a month) is due in Q2 FY27 and wire rod and busbar in Q3. A joint venture at Ahmedabad with C&Y Group began trial runs and should process about 72,000 t of scrap a year. 67% of Q1 FY27 revenue."
            },
            {
                "name": "Lead and lead alloys",
                "text": "Refined lead and alloys from used batteries and scrap, registered as a brand on the London Metal Exchange; about 1.85 lakh tonnes in FY26, with 15–20% more capacity awaiting approval. 29% of Q1 FY27 revenue."
            },
            {
                "name": "Aluminium, tin, antimony and plastic",
                "text": "Aluminium alloys (3% of revenue), and planned recovery of antimony (about 100 t a month from Q3 FY27), tin and plastic from its own process waste."
            }
        ],
        "revenueText": "**Copper was 67% of Q1 FY27 revenue** (55% in FY26), lead 29% and aluminium 3%. Exports went to more than 20 countries and were **60% of FY25 revenue**, per its IPO papers. Profit is earned per tonne: about **₹31,000 a tonne on copper in Q1 FY27** against an FY26 average of about ₹36,000 (around ₹13,000–15,000 in Q4 FY26); lead earns about 7–7.5% of sales. More than half of revenue came from the top ten customers, per the IPO papers.",
        "mixes": [
            {
                "caption": "Revenue by metal, Q1 FY27 (company call)",
                "parts": [
                    {
                        "label": "Copper",
                        "share": 67
                    },
                    {
                        "label": "Lead",
                        "share": 29
                    },
                    {
                        "label": "Aluminium",
                        "share": 3
                    },
                    {
                        "label": "Other",
                        "share": 1
                    }
                ]
            },
            {
                "caption": "Revenue by market, FY25 (IPO papers)",
                "parts": [
                    {
                        "label": "Exports",
                        "share": 60
                    },
                    {
                        "label": "India",
                        "share": 40
                    }
                ]
            }
        ],
        "customers": [
            "**Battery makers and lead users** in India and abroad for its LME-registered lead.",
            "**Copper users and traders**, including buyers in China, and new customers for cathode, rod and busbar who management says are mostly different from its existing ones.",
            "The top ten customers are more than half of revenue (IPO papers); customers are not named."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Recycling is well understood, but pollution permits (each new plant took about 15 months), a global scrap-buying network, LME registration and strict hedging take years. Copper cathode and busbar need tighter quality control than ingots."
        },
        "moat": "Scale, a worldwide scrap-buying network and full hedging give it cheaper and steadier supply than informal recyclers, and new rules require producers to use recycled copper, aluminium and zinc from FY28. The weakness is that it earns a thin spread on traded metal, depends on imported scrap, and competes with Gravita and many smaller recyclers.",
        "salesDrivers": [
            "**Scrap supply**: 75–80% is imported; the West Asia conflict cut flows and left about ₹20–30cr of material stuck at sea, so it bought more in India at higher prices.",
            "**Metal prices**: revenue rises with copper and lead prices, but hedging keeps profit tied to tonnes, not prices.",
            "**New copper plants**: management expects value-added products to add about 2 points of margin on that volume.",
            "**Recycling rules**: producers of cables, conductors and similar goods must use at least 5% recycled content from FY28, rising to 10%.",
            "**Capacity**: FY27 capex of about ₹87cr; 15–20% more lead capacity once approved."
        ],
        "inputs": "**Copper, lead and aluminium scrap**, 75–80% imported, plus fuel and power for its furnaces. With operating costs at about 94% of revenue in FY26, almost all of that is metal.",
        "costEffect": "**Passed on: it earns a spread per tonne.** Scrap is bought and metal sold at prices linked to the London Metal Exchange and every position is hedged, so metal-price rises flow to customers; the percentage margin shrinks when prices rise even if profit per tonne holds. The risk is the spread between scrap and metal, which narrowed when Gulf scrap stopped and local scrap cost more. **Rule of thumb:** a 10% rise in scrap cost not passed on would wipe out the whole 4–6% margin, which is why it hedges. **What happened:** the quarterly operating margin went from 6% in FY25 to 8% in Q2 FY26 and down to 3.5% in Q4 FY26 and 4.0% in Q1 FY27; management says to judge two quarters together because hedging gains land at quarter ends.",
        "competitors": [
            {
                "name": "Gravita India",
                "note": "Larger listed lead, aluminium and copper recycler with plants in India and abroad and its own LME lead brand."
            },
            {
                "name": "Pondy Oxides & Chemicals",
                "note": "Listed lead recycler moving into copper."
            },
            {
                "name": "Informal recyclers",
                "note": "Unlicensed local players that compete for domestic scrap, often on price."
            }
        ],
        "position": "**One of India's largest non-ferrous recyclers**, with about 3.1 lakh tonnes of capacity across three plants at Gummidipoondi (IPO papers) and about 1.85 lakh tonnes of lead output in FY26.",
        "money": "Screener shows **₹1,276cr of borrowings** at March 2026 against about ₹365cr of cash and short-term investments, so **net debt of about ₹911cr**, even after the IPO repaid about ₹375cr. **Operating cash was −₹591cr in FY26** and free cash −₹693cr: inventory rose to 62 days of sales from 42. Over FY23–FY26 it made ₹1,292cr of operating profit but operating cash was −₹543cr. The company put the working-capital cycle at about 60 days in June 2026. LME brokers give it more than $30m of margin limits for its hedges. FY27 capex is about ₹87cr. No dividend. Promoters hold **73.59%**; FIIs fell from 6.4% to 0.8% in a year.",
        "watch": [
            "Copper EBITDA per tonne climbing back above ₹36,000 as cathode and busbar start.",
            "Operating cash turning positive and inventory days falling.",
            "Imported scrap flows returning after the West Asia disruption."
        ],
        charts: miningCharts["Jain Resource Recycling"],
    },
];

export const miningBusinesses = { intro, profiles };
