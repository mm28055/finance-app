import { BusinessProfile, OverviewSection } from './types';
import { ironSteelCharts } from './card-data/iron-steel';

// Tab 2 of the Iron and Steel note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Venus and Scoda standalone); splits and order books are from each company's latest presentation or call. The cost chart uses India's steel price indices as a guide to the main raw material.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "All five start with steel bought from mills and turn it into something worth more.",
        ],
        points: [
            {
                label: 'Line pipe',
                text: "Large welded carbon-steel pipes, often more than a metre across, for oil, gas and water pipelines, usually coated against corrosion (Man).",
            },
            {
                label: 'Coated sheet',
                text: "Steel sheet coated with zinc and aluminium (Alu-Zinc) and then painted, used for roofs, walls and appliances (Manaksia).",
            },
            {
                label: 'Stainless-steel pipes and tubes',
                text: "Seamless tubes pierced from solid bar, and welded pipes rolled from strip, for power plants, chemical plants, oil and gas and data centres (Venus, Scoda).",
            },
            {
                label: 'Flexible hoses and cooling skids',
                text: "Corrugated stainless-steel hoses for industry, and frames of pipes, pumps and valves that circulate coolant through AI servers (Aeroflex).",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Large project orders**', 'Man, Venus (some), Scoda (tenders)', 'Bid per order; steel usually priced in', 'Advances on big orders; otherwise slow'],
                    ['**Export orders to distributors and OEMs**', 'Manaksia, Aeroflex, Venus, Scoda', 'Order by order; costs passed on', 'Slower: goods at sea'],
                    ['**Long supply contracts**', 'Aeroflex (data-centre skids)', 'Custom price per design', 'Quarterly purchase orders'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Man Industries (I)',
        inShort: ["**One of India's largest makers of large-diameter steel line pipes** (LSAW and HSAW) for oil, gas and water pipelines, and since May 2026 a pipe maker in Saudi Arabia too, after buying National Pipe Company (NPC).", "**Good:** record operating profit in Q1 FY27, a ₹3,600cr order book, a ₹24,000cr pipeline of bids and a Saudi plant already approved by Aramco. **Watch:** debt will rise to about ₹1,600cr by March 2027 to pay for the Saudi purchase, a Saudi coating plant and a new stainless-steel plant in Jammu.", "**Verdict: own.** Saudi Arabia gives visible growth, and the price roughly matches what I expect it to deliver."],
        tagline: "A maker of large-diameter welded carbon-steel pipes and pipe coatings for oil, gas and water transmission, with plants in India and Saudi Arabia.",
        revenue: '₹3,564cr (FY26, consolidated)',
        products: [
            { name: 'LSAW pipes', text: "Longitudinal submerged-arc welded pipe: a thick steel plate is bent into a tube and welded along its length. It is used for high-pressure oil and gas lines. The Saudi plant makes LSAW pipe, mostly for Aramco." },
            { name: 'HSAW (spiral) pipes', text: "Helical submerged-arc welded pipe: steel coil is wound into a spiral and welded along the spiral seam. It is cheaper for very large diameters and used mainly for water lines. The Saudi spiral mill is being upgraded to 100 inches so it can bid for water orders it could not make before." },
            { name: 'Coating and double-jointing', text: "Anti-corrosion coatings such as three-layer polyethylene (3LPE) and concrete weight coating; 80–85% of the pipes it makes in India are coated. Double-jointing welds two 12-metre pipes into one 24-metre length, as Aramco requires. A coating and double-jointing plant in Dammam, Saudi Arabia, is due by March 2027." },
            { name: 'Stainless-steel pipes (from 2027)', text: "A ₹600cr new plant in Jammu, due to start production by March 2027, takes it into higher-margin stainless-steel pipes. It expects ₹200–300cr of sales in the first year." },
        ],
        revenueText: "The company does not split revenue by pipe type and declined to on the call. Its **order book of about ₹3,600cr** (August 2026) is **₹2,200–2,300cr in India**, over 80% of it for export, and the rest at the Saudi plant, mostly to be delivered within 6–12 months. For FY27 it expects about ₹5,000cr of revenue, of which Saudi Arabia ₹1,200–1,500cr (management gave both figures). Some orders are sold delivered to the customer's site, which raises both revenue and freight costs.",
        mixes: [
            { caption: 'Order book by plant, August 2026 (company)', parts: [{ label: 'India (over 80% export)', share: 62 }, { label: 'Saudi Arabia (NPC)', share: 38 }], note: 'India share based on the mid-point of ₹2,200–2,300cr out of about ₹3,600cr.' },
        ],
        customers: ["**Oil and gas companies**, notably Saudi Aramco through the Saudi plant, plus gas grids and LNG import projects in the Gulf and South-East Asia.", "**Water and desalination projects** in India and the Gulf: 35–40% of the bid pipeline is water, which earns less than oil and gas, so it chases Aramco orders first.", "**Export buyers**: over 80% of the Indian order book is for export, and about 70% of the ₹24,000cr bid pipeline is in the Middle East and North Africa."],
        difficulty: { level: 'High', text: "Line pipe must meet strict API steel grades (from X42 up to X80) and each national oil company approves its suppliers, which takes years. Scale, coating and on-time delivery of thousands of tonnes to distant sites also matter." },
        moat: "Long supplier approvals, now including Aramco-approved status inside Saudi Arabia, where Aramco prefers local plants, and three decades of record keep it on bid lists. But every order is won in a price bid, and Saudi rivals are adding capacity.",
        salesDrivers: ["**Pipeline spending by governments and oil companies**: Aramco's gas network expansion, the East-West pipeline, water and desalination projects, and new LNG import lines in Asia as buyers diversify away from the Strait of Hormuz.", "**The Saudi ramp-up**: NPC was consolidated for only about 20 days in Q1 FY27 (₹43cr). From Q2 the company expects ₹300–500cr a quarter, and ₹2,400–3,000cr a year from FY28.", "**Spare capacity in India**: Indian mills run at 50–60%, set by which orders fit which mill, so more orders can lift output without new plants.", "**Value-added work**: coating, bends, double-jointing and delivered-to-site orders earn more. The Saudi coating plant should add 3–4 points to Saudi margins, which are about 21% today.", "**New orders**: the order book lasts 6–12 months, so wins from the ₹24,000cr bid pipeline decide FY28, for which management expects 25–35% growth."],
        inputs: "**Steel plate (for LSAW) and hot-rolled coil (for HSAW)**, bought in India and imported; the Saudi plant imports plate from POSCO, China and elsewhere and buys coil from local mill Hadeed. Coating materials and freight are the other big costs. Materials were 63% of sales in FY26, down from 79% in FY23 as more orders came with coating and delivery built in.",
        costEffect: "**Passed on, order by order.** Pipes are priced project by project, so the steel cost is built into each bid; the call gave no formula for later changes. On delivered orders it says it recovers the freight with a margin on top. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (12% to 6%). **What happened:** hot-rolled steel prices eased (index 100 to 94 from Q1 FY24 to Q1 FY27) while the margin rose from 9.6% to 13.6%. Cheaper steel was not the main reason, since steel is priced into each bid. The gain came from more coated and delivered-to-site orders and a better mix of grades and markets: an analyst on the call put gross margin at about 22% in FY25 and 38% in FY26.",
        competitors: [{ name: 'Welspun Corp', note: "India's biggest line-pipe maker, also with a Saudi plant and adding capacity there." }, { name: 'East Pipes, Arabian Pipes', note: 'Saudi rivals adding capacity; management expects demand to stay above supply for 3–4 years, with some pressure on prices but no price war.' }, { name: 'Chinese pipe mills', note: 'Cheaper, but many projects backed by US and European money avoid Chinese supply.' }],
        position: "**One of India's largest makers and exporters of LSAW and HSAW pipes**, with about 1 million tonnes of capacity, and now one of the few Aramco-approved pipe makers inside Saudi Arabia.",
        money: "Screener shows **net cash of ₹100cr** at March 2026, before the Saudi purchase. About 70% of that purchase was paid with debt held by the Saudi company. Planned spending: the Jammu stainless plant (₹600cr, ₹350cr already spent, ₹389cr from loans) and the Saudi coating plant (about US$50m, half borrowed). The company expects total debt to peak at about ₹1,600cr at March 2027 and fall to ₹1,400cr in FY28; interest should be about ₹190cr in FY27. A real-estate project (Marino Shelters) should bring in ₹35–50cr of cash in FY27. Promoters hold **43.2%**, down from 49.6% in September 2023.",
        watch: ["The Saudi plant reaching ₹300–500cr of sales a quarter.", "The Jammu stainless plant and Saudi coating plant starting by March 2027.", "Debt peaking near ₹1,600cr and then falling."],
        charts: ironSteelCharts['Man Industries (I)'],
    },
    {
        company: 'Manaksia Coated Metals',
        inShort: ["**A maker of coated steel sheet in Kutch, Gujarat**: it buys cold-rolled steel coil, coats it with an aluminium-zinc alloy (Alu-Zinc) and paints much of it (colour-coated steel) for roofs, wall cladding and appliances. About two-thirds of its tonnage is exported.", "**Good:** after a weak second half of FY26, Q1 FY27 brought a record ₹10,400 of operating profit per tonne, and a new colour-coating line will almost triple that capacity. **Bad:** margins are thin (9% in FY26), sudden jumps in fuel, freight and metal prices hit it before it can reset prices, and stock ties up cash.", "**Verdict: follow.** Earnings should step up as the new lines fill, but it still has to show it can hold margins through the next shock."],
        tagline: "A steel coater making Alu-Zinc and pre-painted (colour-coated) steel coils and sheets, mostly for export.",
        revenue: '₹884cr (FY26, consolidated)',
        products: [
            { name: 'Alu-Zinc coated steel', text: "Cold-rolled steel coil dipped in molten aluminium-zinc alloy (also sold as Galvalume), which resists rust longer than plain zinc-coated (galvanised) steel. It switched its main line from galvanising to Alu-Zinc in FY26 and now sells no galvanised steel. 26% of Q1 FY27 tonnage; the upgraded line ran at 62%." },
            { name: 'Colour-coated (pre-painted) steel', text: "Alu-Zinc or galvanised sheet painted on a factory line, for roofs, wall cladding, sandwich panels, warehouses, appliances and furniture. 74% of Q1 FY27 tonnage; the line ran at 95.4%, so it is full. A second line due in Q2 FY27 takes capacity from 86,000 to 236,000 tonnes a year." },
            { name: 'Cold rolling (planned)', text: "A cold-rolling mill in the next phase (from FY28) would let it roll its own thin coil instead of buying hundreds of sizes, which management says could roughly halve its stock." },
        ],
        revenueText: "The company reports tonnes, not revenue, by product: **pre-painted steel was 74% of Q1 FY27 sales volume** (27,938 tonnes) and Alu-Zinc 26%. **Exports were 65% of volume** (18,221 tonnes); export revenue grew 20% from a year earlier and pre-painted exports 25%. The average price was ₹88,597 a tonne, 12% higher than in Q4 FY26. It entered Latvia, Brazil, Jamaica and Somalia in the quarter.",
        mixes: [
            { caption: 'Sales volume by product, Q1 FY27 (company)', parts: [{ label: 'Pre-painted steel', share: 74 }, { label: 'Alu-Zinc', share: 26 }] },
            { caption: 'Sales volume by market, Q1 FY27 (company)', parts: [{ label: 'Exports', share: 65 }, { label: 'India', share: 35 }] },
        ],
        customers: ["**Long-term export customers**, including in Europe, who place orders every quarter and have signed memoranda on their yearly purchases; the company says it is one of their smallest suppliers.", "**Indian manufacturers and builders**: roofing and cladding for factories and warehouses, HVAC, refrigeration, appliances, lifts, buses and steel furniture."],
        difficulty: { level: 'Medium', text: "Coating lines cost a lot and need tight control of coating thickness and paint quality, and export customers must approve the supplier. But the process is well known, and large steel mills make the same products." },
        moat: "Approvals and repeat quarterly orders from export customers, and a wide range of colours and sizes, keep business coming. It buys its steel, so it has no cost edge and must take the market price when steel, zinc, freight or fuel jump.",
        salesDrivers: ["**New capacity**: the second colour-coating line starts in Q2 FY27 and should run at 50–60% in H2. Management expects about 150,000 tonnes and ₹1,300–1,350cr of revenue in FY27, and 180,000–200,000 tonnes and ₹1,700–1,750cr in FY28.", "**Alu-Zinc ramp-up**: from 62% use toward 75–80% within about three months. Alu-Zinc earns ₹1,000–3,000 a tonne more operating profit than galvanised steel.", "**Export demand**: 65% of volume, with an order book of about ₹450cr, up from ₹100–120cr a couple of years ago.", "**Building and appliance demand** in India and abroad: roofs, warehouses, metros, airports and home appliances.", "**Energy cost**: a 7 MW solar plant (Q2 FY27) will cover 50–55% of the plant's grid power, and a natural-gas pipeline from GSPC is planned to replace LPG and propane."],
        inputs: "**Cold-rolled steel coil** (the main cost), **aluminium and zinc** for the coating, **paint** (made from petrochemicals) and **LPG or propane** to fire the furnaces, plus power and export freight. Materials were 74% of sales in FY26, and power and factory costs another 11%.",
        costEffect: "**Mostly passed on, with a lag of up to a quarter.** It tries to sell first and then buy steel against confirmed orders, and export prices are reset every quarter for steel, zinc, aluminium, energy and freight. A sudden jump mid-quarter hurts: in Q4 FY26 LPG went from ₹60 to ₹200 a kilo (now about ₹80) and freight rose, and the margin fell below 7%. Q1 FY27 orders were priced with a buffer and the margin recovered to 11%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (9% to 2%). **What happened:** hot-rolled steel prices, a guide to the coil it buys, eased (index 100 to 94 from Q1 FY24 to Q1 FY27) while the margin rose from 4.1% to 10.7%. Steel prices played little part. The gain came from the switch to Alu-Zinc, more painted steel, more exports and better pricing, interrupted by a month-long shutdown for the Alu-Zinc upgrade in Q3 FY26 and the fuel shock in Q4.",
        competitors: [{ name: 'JSW Steel, Tata BlueScope, AM/NS India', note: 'Large Indian makers of coated and colour-coated steel that make their own steel.' }, { name: 'Asian exporters (China, Vietnam, Korea)', note: 'The main rivals for export orders.' }],
        position: "**A small, mostly export-led steel coater**; management calls it one of the smaller players in the industry, with room to win a bigger share from its existing customers.",
        money: "Screener shows **net debt of ₹96cr** (March 2026); the company put its gross debt at about ₹115cr in July 2026, likely peaking at ₹125–130cr as the current ₹140cr of projects (Alu-Zinc upgrade, second colour line, solar) finish. The next phase (a cold-rolling mill and a second Alu-Zinc line, about ₹350cr, from FY28) would be paid for from profits, about ₹100cr of new debt and new shares, keeping debt below 1.25 times equity. Stock ties up cash: operating cash flow was negative ₹14cr in FY26. Promoters hold **57.8%**, down from 67.4% in September 2023; the recent projects were paid for partly with new equity.",
        watch: ["The second colour-coating line filling up in H2 FY27.", "The Alu-Zinc line reaching 75–80% use.", "The margin holding near 11% and cash flow turning positive."],
        charts: ironSteelCharts['Manaksia Coated Metals'],
    },
    {
        company: 'Aeroflex Industries',
        inShort: ["**A maker of stainless-steel flexible hoses and hose assemblies**, sold mostly to industry abroad, that has quickly become a supplier of liquid-cooling skids for Indian data centres.", "**Good:** revenue rose 72% in Q1 FY27 to a record ₹146cr, the margin is about 23% and it has net cash. **Bad:** the skid business, now almost a quarter of sales, rests on one customer and has no patents behind it.", "**Verdict: wait.** A good business, but the price already assumes the data-centre boom runs for years."],
        tagline: "A maker of stainless-steel flexible hoses, hose assemblies and metal bellows that now also builds liquid-cooling pipe skids for data centres.",
        revenue: '₹442cr (FY26, consolidated)',
        products: [
            { name: 'Flexible hoses', text: "Corrugated stainless-steel hoses, usually wrapped in braided wire, that carry liquids and gases where a rigid pipe cannot bend or would crack from vibration: in factories, refineries, HVAC and fire systems. Sold as bare hose, they earn an operating margin of 16–20%." },
            { name: 'Hose assemblies', text: "Hoses fitted with end fittings and ready to install, which earn 22–26%. Assemblies and fittings were 63% of the hose business in Q1 FY27. It now also exports assemblies to data centres in Europe and the US, for rack connections, fire suppression and to replace old rubber hoses." },
            { name: 'Liquid-cooling (SFN) skids', text: "A liquid-cooling skid is a factory-built frame of pipes, valves, hoses and connectors that carries coolant from a data centre's cooling unit to the server racks (the secondary fluid network, SFN). Each one is designed for a particular floor and sells for ₹1–5 lakh. It sold 1,040 skids worth ₹32.4cr in Q1 FY27; about 40 skids go into each megawatt of liquid-cooled servers." },
            { name: 'Bellows, Hyd-Air and new products', text: "Metal bellows (flexible, concertina-shaped metal joints) brought in about ₹3cr in Q1 FY27 and the Hyd-Air subsidiary about ₹7cr; Hyd-Air's parts now go mostly into its own hose assemblies. A fire-hose assembly for data centres, for its largest US customer, is due to start selling around the end of Q2 FY27, at a 23–26% margin." },
        ],
        revenueText: "Skid assemblies brought in **₹32.4cr, about 23% of Q1 FY27 revenue** of ₹146cr. Within the hose business, **63% was assemblies and fittings** and 37% bare hose. Exports grew 43% in the quarter, but their share of sales fell because all the skids are sold in India. The call did not give the exact export share.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'Hoses, assemblies and others', share: 77 }, { label: 'Liquid-cooling skids', share: 23 }] },
            { caption: 'Hose business by type, Q1 FY27 (company)', parts: [{ label: 'Assemblies and fittings', share: 63 }, { label: 'Bare hose', share: 37 }] },
        ],
        customers: ["**Industrial buyers abroad**, mainly in Europe (Italy, Spain, France, the UK) and the US, across many industries; it now also sells hose assemblies into European data centres.", "**One main skid customer in India**, which builds cooling systems for data-centre operators and passes on their floor-by-floor designs. Winning it took 10–11 months from the first talk to the first order.", "**Its largest US customer**, for whom it is developing fire-hose assemblies for data centres; skid talks with other overseas customers are under way."],
        difficulty: { level: 'High', text: "Stainless steel has to be formed and welded so it never leaks under pressure, which matters most in a data centre. Every skid is custom-designed and the customer must approve the drawings before production starts. A new customer takes close to a year to approve a supplier. It holds no patents on the skids." },
        moat: "Designing skids alongside the customer, speed and product quality make it awkward to replace once it is built into a project. The weakness is that there are no patents, one customer takes all the skids, and global groups such as Parker and Senior have started making skids too.",
        salesDrivers: ["**Data-centre building in India**: skid capacity has gone from 2,000 to 9,000 a year and should reach 15,000 by October–November 2026, later than planned because machine suppliers are late. Management says it is on track for 60–65% use of that by Q4 FY27 and about 80% in FY28.", "**Mix shift to assemblies**: assemblies earn 22–26% against 16–20% for bare hose. Hose plants run at 65–66%; with capacity going to 20 million metres a year by Q3 FY27 and 70% sold as assemblies, the hose business could bring in ₹650–675cr a year.", "**Exports**: up 43% in Q1 FY27 across Europe and the US; it expects its first export skid orders during FY27.", "**New products**: data-centre fire-hose assemblies, bellows (expected to pick up over the next two quarters) and products shown at an exhibition in April that have already won some orders.", "**Design approvals**: the skid customer gives a firm dispatch plan only two months ahead, so sales can move from quarter to quarter."],
        inputs: "**Stainless-steel strip, wire and tube** for the hoses and braiding, whose price follows nickel, plus bought-in fittings, connectors and valves for skids and assemblies. Materials were 57% of sales in FY26, down from 65% in FY22 as it sold more assemblies.",
        costEffect: "**Mostly passed on, order by order.** Each skid is costed from its own design and parts list, so a cheaper skid means less steel, not a lower margin. The call did not describe how hose prices follow stainless-steel and nickel costs. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (23% to 17%). **What happened:** alloy and stainless-steel bar prices were flat (index 100 to 99 from Q1 FY24 to Q1 FY27) while the margin rose from 19.3% to 22.8%. The gain came from selling more assemblies and skids. In Q1 FY27 the gross margin rose, but extra staff for the skid business, the new plant at Chakan (Pune) and higher freight caused by the West Asia crisis left the margin slightly below Q4 FY26.",
        competitors: [{ name: 'Parker Hannifin, Senior plc', note: 'Global flow-control groups that also make metal hoses and have started making data-centre skids.' }, { name: 'Skid makers in the US and Europe', note: 'Local suppliers that serve data centres in their own markets; overseas customers buy from them today.' }, { name: 'New Indian entrants', note: 'A few firms have just started work on skids; management says it is among the few supplying today.' }],
        position: "**One of the few Indian suppliers of data-centre cooling skids** and a leading Indian maker of stainless-steel flexible hoses, with 2,938 product types and hose capacity of 17.5 million metres a year, rising to 20 million.",
        money: "Screener shows **net cash of ₹61cr** (March 2026). Planned spending is ₹48cr to take skid capacity from 2,000 to 15,000 a year and ₹54cr to take hose capacity from 16.5 to 20 million metres, spread over FY25–FY27, plus a new plant at Chakan. Heavy spending meant free cash flow was negative in FY25 and FY26. A capex plan for Hyd-Air is being discussed. Promoters (the Sat Industries group) hold **65.5%**, down from 67.0% in September 2023.",
        watch: ["Skid capacity reaching 15,000 a year by October–November 2026.", "A second skid customer, especially one abroad.", "The margin moving toward the 25% target."],
        charts: ironSteelCharts['Aeroflex Industries'],
    },
    {
        company: 'Venus Pipes & Tubes',
        inShort: ["**A maker of stainless-steel seamless and welded pipes and tubes** for oil and gas, chemical, power and pharma plants in India and over 25 countries, now adding pipe fittings and factory-built pipe sections (spools) for data centres.", "**Good:** revenue has tripled since FY22, and the order book jumped to over ₹600cr plus a ₹185cr data-centre letter of intent. **Bad:** the margin has sat around 16% for seven quarters, free cash flow has been negative every year, and net debt rose to ₹325cr in June 2026.", "**Verdict: wait.** Fittings and spools could lift the margin, but that is not proven yet and the price already assumes it works."],
        tagline: "A stainless-steel pipe and tube maker, making both seamless and welded products, that is moving into fittings and ready-made pipe spools.",
        revenue: '₹1,167cr (FY26, standalone)',
        products: [
            { name: 'Seamless pipes and tubes', text: "Seamless pipe has no joint: a solid steel bar is pierced into a thick, rough tube (the mother hollow), which is then drawn down to size, so it can take high pressure and heat. Used in heat exchangers, hydraulic and instrument lines, refineries and power plants. 55% of Q1 FY27 revenue; these lines ran at 85–90% before new capacity started in late May 2026." },
            { name: 'Welded pipes and tubes', text: "Rolled from flat stainless-steel strip and welded along a seam. Cheaper than seamless and used for lower-pressure lines, plus box sections. 39% of Q1 FY27 revenue; these lines run at about 60%." },
            { name: 'Fittings', text: "Elbows, tees and other parts that join pipes, made since May 2026. Customers must approve them first; the company expects them to be 5–7% of FY27 revenue and 8–10% in FY28." },
            { name: 'Pipe spools for data centres', text: "Spooling means cutting, welding and fitting pipe sections in a factory so they can simply be joined on site. A ₹70cr plant, due by the end of Q3 FY27, will supply the coolant piping that runs from cooling units to server racks, under a ₹185cr letter of intent. Management expects about 5% of FY27 revenue and 10–15% in FY28." },
        ],
        revenueText: "**Seamless was 55% of Q1 FY27 revenue**, welded 39% and others 6%. **Domestic sales were ₹227cr, up 31%**, and exports ₹94cr (down from ₹103cr), about 30%, hit by geopolitical disruption and a shortage of containers. The order book is over ₹600cr, more than 40% of it for export, plus the ₹185cr letter of intent, so about ₹800cr in all.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'Seamless', share: 55 }, { label: 'Welded', share: 39 }, { label: 'Others incl. fittings', share: 6 }] },
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'India', share: 71 }, { label: 'Exports', share: 29 }] },
        ],
        customers: ["**Process industries**: oil and gas, chemicals, power, pharmaceuticals and engineering firms. Power was the biggest source of new orders in Q1 FY27, mostly from repeat customers.", "**Export buyers** in the US (strong orders in Q1 FY27), Europe, the Middle East and South-East Asia; it says it serves over 70 Fortune 500 companies.", "**Data centres and solar makers**, the new markets for spools and fittings."],
        difficulty: { level: 'Medium', text: "Stainless pipe is a mature product, but each customer and industry needs approvals and certificates, and seamless heat-exchanger tubes need precise drawing and testing. New players are entering, though the company says rivals are not undercutting prices." },
        moat: "A wide range of sizes in both seamless and welded, approvals with large customers and a sales team abroad make it a steady supplier. The basic pipe business is easy to enter, so better margins depend on the new fittings and spools.",
        salesDrivers: ["**Factory and plant spending in India**, in oil and gas, chemicals, power and pharma: domestic sales grew 31% in Q1 FY27.", "**New seamless capacity** from late May 2026, after seamless ran at 85–90%; it aims for 80–85% use in FY27 and FY28, and about 20% revenue growth a year.", "**Data-centre spools and fittings**: the ₹185cr letter of intent and fittings approvals. Management aims to lift the margin to about 18% within two years, but says FY27 will be below 17%.", "**Exports**: about 30% of sales, with a recovery hoped for from Q3 FY27. The EU has cut its safeguard quota for seamless tubes by 25% (a safeguard is an import limit above which a heavy duty, here 50%, applies); management says it sells to many other markets.", "**Stainless-steel prices**: revenue follows them. In Q1 FY27 volume grew just over 7% while revenue grew 16%."],
        inputs: "**Stainless-steel bars and coils**, whose price follows nickel and chrome; it has integrated backwards so it makes the mother hollow for its seamless pipes itself. Power, fuel and freight are the other main costs. Materials were 66% of sales in FY26, down from 81% in FY22, while power and factory costs rose from 3% to 8% as it did more of the processing itself.",
        costEffect: "**Passed on.** Pipe prices follow stainless-steel prices: in Q1 FY27 higher steel prices lifted realisations and operating profit per kilo also rose. A sudden jump can hurt until prices are reset. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (16% to 9%). **What happened:** alloy and stainless-steel bar prices were flat (index 100 to 99 from Q1 FY24 to Q1 FY27) and the margin ended about where it started (15.6% to 16.2%). In between it peaked at about 20% in FY24–FY25, then settled near 16% for seven quarters. Steel did not cause the swing; the call did not explain the fall from 20%, and management says the next rise depends on fittings and spools.",
        competitors: [{ name: 'Ratnamani Metals & Tubes', note: 'Much larger stainless and carbon-steel pipe maker, already running a profitable spooling business.' }, { name: 'Scoda Tubes and other Indian makers', note: 'Smaller seamless makers; new players are adding capacity, including in spooling.' }, { name: 'Overseas mills', note: 'Rivals for export orders; EU quotas limit how much Indian pipe enters Europe at low duty.' }],
        position: "**A mid-sized Indian stainless-steel pipe maker** that grew revenue about 30% a year over the last three years, and one of the first in its segment to add fittings and spools.",
        money: "Screener shows **net debt of ₹258cr** (March 2026); the company put it at **₹325cr on 30 June 2026**. It plans ₹100–110cr of capex in FY27: ₹70cr for spools, plus fittings machinery, upkeep and a solar plant. Free cash flow was negative in every year from FY22 to FY26 as capex and stock rose, and working-capital loans weigh on profit. Promoters hold **48.4%**, little changed from 48.6% in September 2023.",
        watch: ["The spool plant starting by the end of Q3 FY27 and the ₹185cr letter of intent becoming firm orders.", "The margin moving from 16% toward 18%.", "Net debt, ₹325cr in June 2026."],
        charts: ironSteelCharts['Venus Pipes & Tubes'],
    },
    {
        company: 'Scoda Tubes',
        inShort: ["**A Mehsana, Gujarat maker of stainless-steel seamless pipes and tubes** for heat exchangers, boilers and oil, gas and chemical plants. It listed in FY26 and is now adding welded pipes for data centres and HVAC.", "**Good:** it makes most of its own mother hollow, is approved by BHEL and NTPC, and IPO money keeps net debt modest. **Bad:** a gas shortage shut the plant for about two weeks in March 2026, the margin slipped to 14.7% in FY26, and stock is very high (217 days of inventory).", "**Verdict: wait.** The welded plant is late and unproven, and the order book covers only 3–4 months."],
        tagline: "A stainless-steel seamless pipe and tube maker with its own mother hollow mill, expanding into welded pipes.",
        revenue: '₹519cr (FY26, standalone)',
        products: [
            { name: 'Seamless pipes and instrumentation tubes', text: "For high-pressure lines in oil and gas, chemicals, fertilisers and pharma. Seamless pipe has no joint: a solid bar is pierced into a hollow and then drawn to size, so it can take high pressure and heat. All of FY26 revenue came from seamless products." },
            { name: 'Seamless tubes and U-tubes', text: "Tubes, some bent into a U, for heat exchangers, air-fin coolers, condensers, boilers and heaters in power and process plants. Sold mainly to fabricators who build that equipment." },
            { name: 'Mother hollow', text: "The thick, rough tube pierced from a solid round bar, from which seamless pipes are drawn. Scoda pierces its own on a hot-piercing mill, which is cheaper than the rival hot-extrusion method; 70% of its hollow needs are made in-house, with 100% targeted by FY28." },
            { name: 'Welded pipes and tubes (new)', text: "Rolled from stainless-steel strip and welded along a seam: cheaper and used for lower-pressure lines. A plant of about 13,000 tonnes a year (₹45cr, from the IPO) is due in H2 FY27, growing to 21,150 tonnes by H1 FY28 with another ₹40cr, making sizes up to 16 inches for data centres, HVAC, water treatment and construction." },
        ],
        revenueText: "All FY26 revenue came from seamless products. By market, **India was ₹339cr (65%)**, Europe ₹138cr, the Americas ₹31cr and others ₹9cr. Exports were 34.6% of revenue for the year and 44.8% in Q4 FY26. Oil and gas takes almost half of what it supplies. The company aims for 60% India and 40% exports.",
        mixes: [
            { caption: 'Revenue by market, FY26 (company)', parts: [{ label: 'India', share: 65 }, { label: 'Europe', share: 27 }, { label: 'Americas', share: 6 }, { label: 'Others', share: 2 }] },
        ],
        customers: ["**Fabricators of heat exchangers and boilers** for power plants. It is approved by BHEL and NTPC and is waiting for a BHEL tender that has been delayed several times; it also has orders from BARC (Bhabha Atomic Research Centre).", "**Oil and gas, chemical and fertiliser projects**, about half its supply, plus engineering, automotive and cooling industries.", "**Export buyers** in Europe and the Americas; a marine approval (RINA) for the Italian market was close in May 2026."],
        difficulty: { level: 'Medium', text: "Making seamless stainless tube is well known, but buyers such as BHEL, NTPC and BARC approve suppliers slowly. Piercing and annealing need gas-fired furnaces, so a fuel shortage stops the plant." },
        moat: "Approvals with BHEL, NTPC and BARC and its own mother hollow keep it on tender lists and cut its costs. It is small and must accept market prices; an analyst noted that listed rivals earn margins 1–2 points higher.",
        salesDrivers: ["**Power-sector tenders**: the BHEL tender for boiler and heat-exchanger tubes, now expected around July–August 2026; a win would give orders for several quarters.", "**Entry into welded pipe**: new markets in data centres, HVAC and water. No data-centre orders yet, only enquiries; orders are expected in Q4 FY27, and the welded plant should run at about 25% in FY27.", "**Seamless capacity use**: capacity is now 20,000 tonnes a year; about 70% use in FY27 and full use in FY28.", "**Exports**: Europe is the biggest overseas market, but the EU is halving its safeguard quota (the import limit above which a heavy duty applies) and raising the duty above it from 25% to 50%, so Scoda dropped a planned company purchase in Poland.", "**Guidance**: 25% revenue growth in FY27 at a 14–15% margin, to be reviewed in H1 FY27."],
        inputs: "**Stainless-steel round bar**, made in India by melting mostly imported scrap, whose price follows nickel and chrome. Power and fuel (gas and LPG for the piercing and annealing furnaces) are 17–18% of total costs. Materials were 68% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Orders are priced at the raw-material cost when booked or dispatched, so the 25–30% rise in stainless raw material in early 2026 is being passed on, and gas and LPG costs (up about 25%) go through to customers later. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** alloy and stainless-steel bar prices rose a little (index 100 to 105 from Q4 FY24 to Q1 FY27) and the margin was about flat (13.1% to 12.9%), after peaking near 18% in late 2024. Steel was not the cause of the drop: new seamless capacity was not yet fully used, the March 2026 gas shutdown cut output, and fuel became dearer.",
        competitors: [{ name: 'Venus Pipes & Tubes', note: 'Larger listed rival making seamless and welded pipe, already moving into fittings and spools.' }, { name: 'Ratnamani Metals & Tubes', note: 'Much larger stainless and carbon-steel pipe maker.' }, { name: 'Hot-extrusion mills', note: 'Make seamless pipe by extrusion; BHEL and BARC once bought only extruded pipe but now also accept cheaper hot-pierced pipe like Scoda’s.' }],
        position: "**A small Indian maker of stainless-steel seamless pipe** (20,000 tonnes a year) with its own mother hollow mill, approved by BHEL, NTPC and BARC.",
        money: "Screener shows **net debt of ₹113cr** (March 2026). It raised ₹220cr in its IPO in FY26, with about ₹74cr still in the bank. FY27 capex is about ₹100cr (welded plant and solar), and the company expects debt to rise by about ₹50cr to a peak of about ₹250cr. It plans no more share issues. Stock is high after the shutdown: inventory days were 217 in FY26 against a target of 150–170, and operating cash flow was negative ₹14cr. Promoters hold **66.4%**, unchanged since June 2025. It holds earnings calls only every six months.",
        watch: ["The welded plant starting and the first data-centre orders (expected Q4 FY27).", "The result of the BHEL tender.", "Inventory days falling toward 160."],
        charts: ironSteelCharts['Scoda Tubes'],
    },
];

export const ironSteelBusinesses = { intro, profiles };
