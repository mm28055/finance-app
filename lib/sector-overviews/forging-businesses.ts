import { BusinessProfile, OverviewSection } from './types';
import { forgingCharts } from './card-data/forging';

// Tab 2 of the Forging note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (AIA Engineering, Happy Forgings and MM Forgings consolidated, the others standalone); splits are from each company's latest presentation or call. Neetu Yoshi is SME-listed and reports half-yearly. The cost chart uses India's price index for each company's main metal input.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Two ways of shaping metal into parts that must not break.",
        ],
        points: [
            {
                label: 'Forging',
                text: "A hot steel bar is pressed or hammered into shape, which makes the part very strong: crankshafts, axle beams and gear blanks for trucks, tractors and industrial machines (Happy Forgings, MM Forgings). Most forgers also machine the part to its final size, which adds value.",
            },
            {
                label: 'Casting',
                text: "Molten metal is poured into a mould. Steel castings for mining and earthmoving machines (Steelcast) and railway bogies and couplers (Neetu Yoshi); iron castings for truck and tractor bodies (Nelcast) and for wind turbines (Synergy Green).",
            },
            {
                label: 'Wear parts',
                text: "High-chrome grinding balls and mill liners that wear away inside the giant mills that crush ore and cement clinker, and must be replaced continually (AIA Engineering).",
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
                    ['**Parts for vehicle and machine makers**', 'Happy Forgings, MM Forgings, Nelcast, Steelcast', 'Contract prices, with steel and scrap passed on every quarter or so', 'Normal credit terms; exports slower'],
                    ['**Wear parts for mines and cement plants**', 'AIA Engineering', 'Negotiated per order; alloy costs passed on', 'Slow: stock held near mines abroad'],
                    ['**Wind and railway suppliers**', 'Synergy Green, Neetu Yoshi', 'Per order, from a small number of large buyers', 'Depends on a few customers'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Steelcast',
        inShort: ["**A Gujarat steel foundry making tough, complex castings for the makers of mining, earthmoving and construction machines**, sold directly to equipment makers in India, the US, Germany and 14 other countries.", "**Good:** 26–29% margins, returns on capital of 32–42% over the last four years, no debt and ₹96cr of net cash; FY27 revenue growth of about 30% is guided. **Watch:** H1 tonnes grew only about 20% against the 25–30% volume guide, Q2 profit was flat, the FY27 margin aim was cut to 26–27%, three customer groups take 75–88% of sales, the chairman's 1.48% pledge was disclosed inconsistently, and gas is 50–55% dearer than in February.", "**Verdict: own.** The price roughly matches the growth I expect."],
        tagline: "A Gujarat maker of steel and alloy-steel castings (metal parts poured into moulds) for mining, earthmoving and construction equipment makers, with roughly half its sales exported.",
        revenue: '₹423cr (FY26, standalone)',
        products: [
            { name: 'Castings for earthmoving machines', text: "Heavy-duty steel parts for excavators, loaders and similar machines. Earthmoving is now its biggest sector: about 43% of sales this year by an analyst's figures, which management confirmed." },
            { name: 'Castings for mining equipment', text: "Wear-resistant parts for mining machines. Mining was 84% of sales ten years ago; the company has deliberately spread into other sectors and it is about 27% this year on the analyst's figures." },
            { name: 'Construction and six other sectors', text: "Parts for construction equipment (about 15%) and six smaller industrial sectors listed in its presentation. Defence is capped at 1–2% because management sees single-customer defence work as risky, and the US railroad push has been dropped. On 6 October 2026 it gained IRIS rail-industry certification, which it says opens the European rail market to it; no orders or targets have been given." },
            { name: 'Ground engaging tools (GET)', text: "Replaceable wear parts on the digging edges of buckets and blades. About 1% of sales in FY26, expected to reach 3.5% this year and about 5–6% by FY29 as new parts are approved." },
        ],
        revenueText: "Steelcast serves nine sectors, but **mining, earthmoving and construction are about 70% of sales**, per management. An analyst put this year's mix at **earthmoving 43%, mining 27% and construction 15%**, which management confirmed, though other figures given on the same call did not add up, so treat the split as rough. **Exports are usually 45–50% of sales**: they were 60% of Q1 FY27 production (4,700 tonnes) and should even out to about half for the year. The US and Germany take about 70% of exports.",
        mixes: [
            { caption: 'Revenue by sector, FY27 so far (analyst figures confirmed on call)', parts: [{ label: 'Earthmoving', share: 43 }, { label: 'Mining', share: 27 }, { label: 'Construction', share: 15 }, { label: 'Other six sectors', share: 15 }], note: 'Management also said the three main sectors are about 70% combined; the figures given on the call were not fully consistent.' },
            { caption: 'Production by market, Q1 FY27 (company call)', parts: [{ label: 'Exports', share: 60 }, { label: 'India', share: 40 }], note: 'Management expects about 50:50 for the full year.' },
        ],
        customers: ["**Makers of mining, earthmoving and construction equipment**: Steelcast supplies them directly (as a tier-one supplier) for about 99% of its sales. It does not name its customers, but CARE says its three largest customer groups have taken 75–88% of sales.", "**Export customers in the US and Germany**, about 70% of exports, with the rest spread over 14 other countries. Ten years ago it sold almost only to those two.", "**Indian equipment makers**, some of which export the finished machines, so its indirect exports are higher than the reported figure."],
        difficulty: { level: 'High', text: "It makes high-strength low-alloy and carbon-steel castings for parts that take heavy wear and loads, which needs very clean scrap, careful metallurgy and customer approval of every new part. It has developed more than 100 new parts in the last 18–24 months that are now moving into regular supply." },
        moat: "Each part is developed and approved with the customer, prices adjust by an agreed formula, and it now sells across nine sectors and 16 countries, so customers have little reason to switch. The weakness is its tie to Western heavy-equipment cycles: the US and Germany are about 70% of exports.",
        salesDrivers: ["**Mining and construction activity worldwide**: management says all nine sectors are asking for more. It raised FY27 volume guidance from 20%-plus to 25–30% in July, and expects about 20% a year after that; on 13 Nov 2026 it kept about 30% revenue growth for FY27 after H1 revenue +23% and tonnes about +20% (Q2 4,370 tonnes, +28%).", "**New parts**: 111 parts over a three-year rollout should make up about 20% of revenue in two to three years; by September 32 were developed, 15 of them commercialised in FY27, and 55 more were in sampling or qualification.", "**Spare capacity, then a new plant**: utilisation of its 29,000-tonne capacity was 48% in FY26, 66% in Q1 FY27 and 57% in Q2 (Q1 stock was sold in Q2); it expects about 60% for FY27 and aims for 90% by FY29. The new foundry was enlarged on 13 Nov 2026 to 11,750 tonnes (8,500 plus 3,250 for castings up to 3.5 tonnes) for about ₹151cr, commissioning about 1 April 2028, taking capacity to 40,750 tonnes.", "**Order book**: ₹145cr in November 2026, about three months of sales, topped up every month.", "**Currency**: gains and losses from rupee moves are shared with customers, so a weaker rupee helps less than for a pure exporter."],
        inputs: "**Clean steel scrap and alloys**, bought from rolling mills and other businesses around the ship-breaking area near its plant (not directly from ship-breaking), melted in furnaces run on natural gas and electricity. Materials were 21% of sales in FY26; power and factory costs (36%) matter more.",
        costEffect: "**Passed on, with a one-quarter lag.** Every customer has a price-variation formula covering all major raw materials; the rise in scrap and gas costs since March is being recovered through a price increase from 1 July 2026. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 2 points (27% to 25%). **What happened:** India's steel-scrap price index fell about 13% from Q1 FY24 to Q1 FY27, yet the margin slipped from 27% to 26%. Scrap was not the driver: sales fell in FY25 and utilisation was only 48% in FY26, so fixed costs were spread over fewer tonnes. In Q2 FY27 it absorbed a cost rise from early September, to be recovered in Q4, while Q3 also passes on the July–August fall, so management expects Q3 margins under pressure. Energy is the bigger risk: gas is 50–55% dearer than in February, so it is building 3.8 MW of solar and wind power (due by December 2026) and plans to move from gas to electricity over two to three years.",
        competitors: [{ name: 'Other Indian steel foundries', note: 'Compete for the same Indian and export OEM work; none were named on the call.' }, { name: 'Overseas foundries', note: 'Steelcast competes with foundries abroad for US and European orders; management gave no price comparison on this call.' }],
        position: "**A specialist tier-one steel foundry** with 29,000 tonnes of capacity, selling to heavy-equipment makers in 16 countries. Small next to global foundry groups, but with margins in the high 20s.",
        money: "Screener shows **₹96cr of net cash** and no borrowings. Management says the company is debt-free, had about ₹120cr of reserves at March 2026, and will pay for the new foundry (now ₹151cr) over FY27–FY28 from its own cash flow, ruling out a rights issue; it pays out about 20% of profit. A shareholder's bonus-issue suggestion will go to the board. Promoters hold **45%**, unchanged over three years. The FY26 annual report shows 1.48% of the company's shares (part of the chairman's holding) as pledged at March 2026, while his April 2026 filing reported no encumbrance; the company has not explained the difference.",
        watch: ["FY27 revenue growth of about 30% and the margin back above 26% from Q4 (aim now 26–27%, was 28.5–29%).", "Gas prices, and the switch to solar and wind power by December 2026.", "Progress on the 11,750-tonne foundry due about April 2028.", "An explanation of the chairman's 1.48% pledge."],
        charts: forgingCharts['Steelcast'],
    },
    {
        company: 'AIA Engineering',
        inShort: ["**A leading global maker of high-chrome grinding media** (the hard alloy balls that crush ore inside the mills of copper, gold and iron-ore mines and cement plants) and of mill liners.", "**Good:** 26–29% margins, ₹4,516cr of net cash and a first large mine order in Chile. **Bad:** volumes are stuck at 60,000–65,000 tonnes a quarter while mine trials drag on, and FY27 capex has jumped to ₹350–400cr, including more than ₹170cr for a corporate house, and about 30% of pre-tax profit is other income.", "**Verdict: wait.** The price needs more growth than I expect."],
        tagline: "A specialist in high-chrome alloy wear parts (grinding media and mill liners) for mining and cement mills, selling worldwide and pitching a full 'grinding solution' to convert mines from cheaper forged steel balls.",
        revenue: '₹4,420cr (FY26, consolidated)',
        products: [
            { name: 'High-chrome grinding media', text: "Alloy balls that tumble inside mills to grind ore or cement. They compete with the forged steel balls most mines use; a mine has to run trials and adjust its process to switch. Sold by the kilogram." },
            { name: 'Mill liners', text: "Heavy castings that line the inside of grinding mills. Large mills mostly use metal liners, smaller ones rubber or composite. Large castings earn more, so a quarter with more of them lifts the margin." },
            { name: 'New Generation Discharge System (NGDS)', text: "A redesigned discharge system that changes how the media move inside the mill, aimed at more throughput and finer grinding. It is never sold alone, only as a package with liners and grinding media, and is on trial at medium and large mines." },
            { name: 'Cement mill packages', text: "The same media-plus-liner approach for cement grinding mills, where AIA first proved it. Management's example: a 20% gain on a 30-tonne-an-hour cement mill is 6 extra tonnes an hour." },
        ],
        revenueText: "The company does not split revenue by product, end market or country on the call. As an example, management described its volume as roughly **75% grinding media and 25% castings** (liners). Q1 FY27 sales were **₹1,153cr on 64,644 tonnes**, up from about 60,000 tonnes a year earlier; an analyst worked out the price at more than ₹180 a kilogram, against management's long-standing ₹160–165 planning figure. The order book was **₹977cr** at 1 July 2026 (presentation).",
        customers: ["**Large copper, gold and iron-ore mines** around the world. Latin America, which uses more than 500,000 tonnes of grinding media a year, is the main target; a Chilean mine is taking 3,000–4,000 tonnes a quarter under an order an analyst put at about ₹300cr.", "**Cement plants**, where it first built its solution approach.", "**Mines in Australia and elsewhere**, where it has a reasonable presence; Brazil and Canada have import duties and an established local supplier."],
        difficulty: { level: 'High', text: "It combines metallurgy, mill design and process simulation; every mine needs a custom solution, and a trial can take anything from 3 months to 2 years because every site is different. Conservative miners, long supply chains and pricing all have to be overcome before a sale." },
        moat: "Once a mill's liners, discharge system and media are designed together by AIA, the mine has good reason to keep buying from it, and management says there is no Chinese high-chrome rival yet. The weakness is that forged balls are a cheap, standard product sold by some 20 Chinese forgers, so mines have little push to switch without long trials.",
        salesDrivers: ["**Mine conversions**: moving mines from forged to high-chrome media is the whole growth story. Management sees 1–1.5 million tonnes of opportunity across gold, copper and iron ore, and 300,000–400,000 tonnes for itself in South America in time, but gave no volume guidance and asked investors to wait one more quarter.", "**Trial progress**: trials on smaller mills have succeeded; medium and large mills are still being worked on, and a second major mine trial is taking longer than expected because of technical issues.", "**Falling ore grades**: as copper and gold yields fall, mines must grind more rock for the same metal, which is the problem AIA's package targets.", "**Spare capacity**: about 440,000–450,000 tonnes of capacity against 60,000–65,000 tonnes sold a quarter. It could make 3–3.5 lakh tonnes a year without new plants and keeps a surplus so it can take a conversion order at once.", "**Freight, currency and alloy prices**: these move the price per kilogram. A rupee move from 85 to 95 to the dollar lifts realisation, and freight at $8,000–9,000 a container has raised both prices and costs."],
        inputs: "**Ferrochrome and steel scrap**, melted and cast into alloy balls and liners, plus heavy freight costs to ship to mines abroad. Materials were 38% of sales in FY26; power and factory costs 16%.",
        costEffect: "**Passed on.** Management says it passes higher raw-material and freight costs through to customers, so the price per kilogram rises with ferrochrome, scrap, freight and a weaker rupee; its gross (contribution) margin stays around 60–61%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (29% to 25%). **What happened:** India's ferrochrome price index rose about 7% from Q1 FY24 to Q1 FY27 while the margin slipped from 28% to 26%. Alloy prices were not the main cause: the margin swings with product mix (more large castings lift it), and freight and the cost of running mine trials are booked as expenses. Management's own guidance is an operating margin of 20–22%, which it has stayed above.",
        competitors: [{ name: 'Chinese forged-media makers', note: 'About 20 forging companies selling cheap, standard forged balls worldwide; the two biggest Chilean mines use Chinese forged media.' }, { name: 'Conventional liner makers', note: 'Metal, rubber and composite liner suppliers that compete on material and price but, per AIA, do not redesign the grinding process.' }, { name: 'Protected local suppliers', note: 'In Brazil and Canada, duties on imports favour established local makers.' }],
        position: "**One of very few high-chrome grinding-media specialists worldwide**: management says the market is served by a limited number of companies with engineering teams at the front end, and that no Chinese maker is in high-chrome yet. It is still small next to the forged-media market it is trying to convert.",
        money: "Screener shows **₹4,516cr of net cash**; management put total cash at about ₹4,500–5,000cr (the audio was unclear) and will hold it for at least a few more quarters in case a big opportunity comes, with no buyback planned for now. FY27 capex guidance rose to **about ₹350–400cr**: more than ₹170cr for a corporate house on land already contracted (₹170–200cr over this year and next), ₹50–100cr for land for future expansion, and about ₹30cr already spent on a hybrid solar-wind plant. Plans for plants in Ghana (site identified) and China (a small lab-type unit so far) are moving slowly. Promoters hold **58.5%**, unchanged.",
        watch: ["Volume guidance, promised in one more quarter, and the outcome of the delayed second mine trial.", "Whether quarterly volume breaks out of the 60,000–65,000-tonne range.", "The final capex figure due in Q2 and what happens to the cash pile."],
        charts: forgingCharts['AIA Engineering'],
    },
    {
        company: 'Happy Forgings',
        inShort: ["**A Ludhiana maker of heavy forged and machined parts such as crankshafts** for trucks, tractors, construction machines, cars and industrial equipment, in India and abroad.", "**Good:** 30–31% margins, a record quarter with 27% revenue growth, high-teen volume growth guided for FY27 and almost no net debt. **Watch:** ₹350–400cr of capex a year, a new heavy-parts line that only contributes meaningfully from FY29, exports slowed by freight costs and transit delays, and its CFO breached the insider-trading code in March.", "**Verdict: wait.** A very good business, but the price needs much more growth than I expect."],
        tagline: "A Punjab forging company (shaping hot steel under huge presses) that machines about 90% of what it forges, supplying crankshafts and other heavy parts for trucks, tractors, cars and industrial machines, and now adding a line for parts of up to 3 tonnes.",
        revenue: '₹1,546cr (FY26, consolidated)',
        products: [
            { name: 'Truck parts', text: "Forged and machined parts for commercial vehicles, its largest segment at 33% of Q1 FY27 revenue. Domestic sales grew about 18% in Q1, but exports fell about 12% as deliveries to Europe and Turkey were held up in transit." },
            { name: 'Tractor parts', text: "Parts for farm equipment, 32% of revenue, growing in the mid-20s% in Q1 on strong Indian demand; tractor demand in the US and Europe is weak." },
            { name: 'Industrial parts', text: "Heavy forgings for power generation, wind, railways, oil and gas and data centres: 16% of revenue and growing about 50%. Management expects this business to double in three to four years." },
            { name: 'Construction-machine and car parts', text: "Parts for off-highway machines (11%, up over 40%) and cars (8%, up over 70%, with machined export parts). Car parts come from two or three customers today; the target is 12–15% of revenue." },
            { name: 'Heavy components line', text: "A new line for parts of up to 3 tonnes (today it makes parts up to about 200 kg); some parts quoted are worth ₹28–30 lakh each. Aimed at energy and data-centre customers; trials start in Q3 FY27 with first sales from Q4." },
        ],
        revenueText: "In Q1 FY27 **trucks were 33% of revenue, tractors 32%, industrials 16%, construction machines 11% and cars 8%**. About **90% of revenue is machined parts** (up from 88%), which earn more than raw forgings. Europe is about 60% of exports; the call does not give a clean total export share. A pipeline of new business worth **₹950cr of peak yearly revenue** over two to three years is about 40% industrial, 25–30% cars and 25–30% trucks, and 60% export.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company call)', parts: [{ label: 'Trucks', share: 33 }, { label: 'Tractors', share: 32 }, { label: 'Industrial', share: 16 }, { label: 'Construction machines', share: 11 }, { label: 'Cars', share: 8 }] },
            { caption: 'New-business pipeline by market (₹950cr of peak yearly revenue)', parts: [{ label: 'Exports', share: 60 }, { label: 'India', share: 40 }] },
        ],
        customers: ["**Truck and tractor makers in India and abroad**, including European and Turkish customers whose contracts are delivered duty-paid to their plants.", "**Industrial equipment makers** in power generation, wind, railways, oil and gas and data centres, with strong enquiries from Europe.", "**Car makers**: two or three customers today, with export car-part sales more than doubling in Q1."],
        difficulty: { level: 'High', text: "Big presses (a 14,000-tonne and a 10,000-tonne line, with a heavy hammer and a vertical upsetter among about 35,000 tonnes of additions planned by FY28) take 1.5–3 years to install; the heavy line needed foundations 80 feet deep. Parts are machined in-house to tight tolerances and approved by each customer." },
        moat: "Large presses, in-house machining and a long record with truck and tractor makers let it earn some of the best margins in the industry, and global capacity for very heavy forgings is scarce. The weaknesses are dependence on cyclical truck and tractor demand (65% of revenue) and on export shipping.",
        salesDrivers: ["**Truck and tractor cycles**: Indian truck production grew about 10% in Q1 while Happy's domestic truck sales grew 18%; export tractor demand depends on weak US and European farm incomes.", "**Industrial demand**: energy and data-centre projects, where heavy forging capacity is short worldwide.", "**New business pipeline**: ₹950cr of peak yearly revenue already in development or ramp-up.", "**Capacity**: after Q1 additions, forging capacity is 152,000 tonnes (59% used) and machining 75,200 tonnes (78% used); the 14,000-tonne press is 65–70% used.", "**Price increases**: the first price rises in about three years were agreed with Indian customers (about 4.5–5%), with the full effect from Q2 FY27."],
        inputs: "**Alloy and special steel bars**, plus power for heating and forging, and container freight on exports. Materials were 41% of sales in FY26; power and factory costs 16%.",
        costEffect: "**Mostly passed on.** The call did not detail a steel formula; the recent pressure was other manufacturing costs, which needed negotiated price increases (only about 30% showed up in Q1). It recovers about 75% of higher container freight (up from $2,000 to about $6,000), and currency gains on export contracts covered cost rises abroad. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (30% to 26%). **What happened:** India's alloy-steel billet price index fell about 8% from Q1 FY24 to Q1 FY27 while the margin rose from 30% to 31%. The gain came mainly from a richer mix (more machining, industrial and car parts, with gross margin at 60.7% in Q1) and spreading fixed costs over 23% more volume, rather than cheaper steel. Management expects a captive solar project to add 1–1.5 points from FY28.",
        competitors: [{ name: 'Large Indian forging companies', note: 'Bigger rivals in truck and industrial forgings; none were named on the call.' }, { name: 'Existing European suppliers', note: 'European customers are sending many enquiries to India but move slowly because they have local supply bases.' }, { name: 'Global heavy-forging shops', note: 'Few have spare capacity for 1–3-tonne parts, since such lines take years to build.' }],
        position: "**Among the most profitable Indian forgers**: an analyst on the call noted it has the highest gross and operating margins among Indian auto-component makers. Management says its new heavy press line is the second largest of its kind in the world.",
        money: "Screener shows **₹40cr of net debt**, close to zero. It spends **₹350–400cr a year on capex** and expects to fund growth from its own cash flow, perhaps with a bridge loan for about a year to open letters of credit for machines. It is open to buying or partnering with a company for aerospace metals such as titanium or energy know-how, but finds simpler businesses too expensive. Promoters hold **78.5%**, essentially unchanged. In March 2026 the CFO made ₹1.05cr of opposite-direction (contra) trades in the company's shares in breach of its insider-trading code; the audit committee issued a warning.",
        watch: ["Trials and first sales from the heavy-parts line in Q3–Q4 FY27.", "Export deliveries to Europe and freight costs.", "Margins staying above 30% as the price increases fully come through."],
        charts: forgingCharts['Happy Forgings'],
    },
    {
        company: 'Neetu Yoshi',
        inShort: ["**An SME-listed maker of railway safety castings**: bogie parts, couplers, yoke supports and track parts for wagon, coach and track makers and Indian Railways.", "**Good:** about a 31% operating margin, a 25% profit margin, no debt, and a new bogie plant that management says will double revenue to ₹210–220cr in FY27 (I expect nearer ₹150–175cr). **Bad:** FY26 sales missed its ₹110cr promise, the auditor flagged late statutory dues, operating cash flow was only ₹4cr in FY26 against ₹31cr of operating profit, the plant started only on 13 September 2026, five months after the date first given, it has issued ₹27.48cr of warrants, and it depends on Railways spending.", "**Verdict: follow.** Fast-growing and very profitable, and the price asks for a little less than the ~22% a year I expect. But operating cash was ₹23cr against ₹54cr of profit over FY22–FY26 (43%), and only ₹4cr against ₹25cr in FY26, so I want to see the late new plant's sales turn into cash first."],
        tagline: "An SME-listed foundry and fabrication company making approved 'Class A' safety parts for Indian Railways' wagons, coaches, locomotives and track. It reports results only half-yearly.",
        revenue: '₹98cr (FY26, standalone)',
        products: [
            { name: 'Wagon parts and bogies', text: "Cast parts for bogies (the wheel frames under a wagon) and other wagon parts, its original business. Prices fell in the wagon slowdown (a bogie from about ₹3.25 lakh to ₹2.70–2.80 lakh) and should recover as a 1-lakh-wagon order rolls out. The new plant will make complete bogies once approved." },
            { name: 'Couplers and yoke supports', text: "The parts that join wagons together and hold the coupler in place; samples have already been made at the new plant." },
            { name: 'Coach and locomotive parts', text: "Parts for passenger coaches and locomotives, for which it is getting approvals from the coach factories (ICF, MCF and RCF); about 40% of the current order book." },
            { name: 'Track parts', text: "Crossings and sub-assemblies for track turnouts (where one track splits into two): about ₹20cr of revenue now, targeted at ₹60–70cr within two years once it assembles complete turnouts from rails bought from Jindal." },
        ],
        revenueText: "FY26 total income was **₹101cr, up 44%**, with profit after tax of ₹25cr. In FY26 **24% of sales went directly to Indian Railways** (44% in the second half) and 76% to private wagon, coach and track makers. It does not export yet; exports to the US or UK are targeted from FY28. The ₹140–150cr order book is roughly **40% coach, 20–30% track and the rest wagons**. The old plant makes parts under 100 kg and the new one parts up to 1,000 kg.",
        mixes: [
            { caption: 'Order book by segment, June 2026 (MD on call)', parts: [{ label: 'Coach', share: 40 }, { label: 'Wagon', share: 35 }, { label: 'Track', share: 25 }], note: 'Track given as 20–30%; wagon is the remainder.' },
            { caption: 'Sales by customer type, FY26 (company presentation)', parts: [{ label: 'Private makers', share: 76 }, { label: 'Indian Railways direct', share: 24 }], note: 'The MD put it at about 60:40 on the call; the presentation shows 76:24 for the year and 56:44 in the second half.' },
        ],
        customers: ["**Private wagon, coach and track makers** such as Jupiter and Titagarh, which must buy from approved sources: 76% of FY26 sales.", "**Indian Railways and its coach factories** (ICF, MCF, RCF), through the Railways' e-tender system: 24% of FY26 sales, rising to 44% in the second half. They pay slowly in February–March when budgets run out.", "**Mining and thermal-power equipment users**, new markets it is targeting with its existing plants."],
        difficulty: { level: 'High', text: "These are 'Class A' safety parts that need approval from RDSO (the Railways' standards body) or the coach factories: document checks, a capacity assessment, prototypes, a developmental stage and field trials. Each approval takes 3–7 months, and each product has only 4–7 approved suppliers. An analyst put its approved products at 25, with 15–20 more in the pipeline." },
        moat: "Approvals and the safety nature of the parts keep newcomers out, and management says it earns more than rivals thanks to a lifetime 17.5% tax rate, its location and having no debt. The weakness is dependence on one ultimate buyer, Indian Railways, and margins on older products fall as more suppliers get approved.",
        salesDrivers: ["**Railway spending**: a 1-lakh-wagon order should bring bogie and sub-assembly orders from wagon makers, alongside coach upgrades such as Vande Bharat.", "**New bogie plant**: built with about ₹50cr of IPO money and promised for April 2026, then June; commercial production started on 13 September 2026. Management expected about ₹100cr from it in FY27 and about ₹200cr at peak.", "**New approvals**: 15–20 products awaiting approval across wagon, coach and track, each taking 3–7 months.", "**Track turnouts**: assembling complete turnouts should lift track revenue from about ₹20cr to ₹60–70cr in two years.", "**Guidance**: ₹210–220cr of revenue in FY27, weighted to the second half, and about ₹350cr in FY28 when both plants and the track line run fully."],
        inputs: "**Steel scrap** at about ₹37–39 a kg for castings, plus rails bought from Jindal at ₹65–70 a kg for track turnouts, which have to be held for about two months. Materials were 50% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Railway tenders carry a price-variation clause that revises the bill with market prices, and private buyers follow similar terms; the lag varies by product. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (32% to 27%). **What happened:** India's steel-scrap price index fell about 8% from H1 FY25 to H2 FY26 and the margin held at about 31%. Scrap was not the story: bogie prices fell during the wagon slowdown, and the company made up for it by moving into coach and track products with better margins.",
        competitors: [{ name: 'Frontera, Roys Steel and Atul Engineering', note: 'Unlisted wagon-component makers named by management as its main rivals (names as transcribed); it says they also earn good margins.' }, { name: 'Other approved suppliers', note: 'Each product has only 4–7 approved makers, and margins fall as more are approved.' }],
        position: "**A small, fast-growing approved supplier** in a closed market, with only a handful of approved makers per product. At about ₹100cr of sales it is tiny next to the wagon makers it supplies, and it plans to make complete wagons itself (about 200 a year) within three years.",
        money: "Screener shows **₹9cr of net cash** and the company says it is debt-free. It raised ₹77cr in its IPO, of which ₹50cr built the bogie plant, and allotted **26.42 lakh warrants at ₹104 (₹27.48cr)** on 31 August 2026 (promoters took part) for track working capital; ₹11.32cr of the plant money was still unspent at March. Cash conversion is weak: Screener shows operating cash flow of ₹4cr in FY26 against ₹31cr of operating profit, as receivables rose to ₹32cr at March (about ₹20cr by June, per management). The next capex, spring and rubber lines, is to be paid from its own profits. It pays tax at 17.5% for life under a government scheme. Promoters hold **70%**, unchanged since September 2025. The auditor's FY26 report notes that TDS, advance tax, PF and ESI were paid late, and the company has no internal auditor yet.",
        watch: ["RDSO approval and first bogie sales from the new plant.", "H1 FY27 results against the ₹210–220cr full-year target.", "Receivables, operating cash flow and use of the warrant money."],
        charts: forgingCharts['Neetu Yoshi'],
    },
    {
        company: 'MM Forgings',
        inShort: ["**A Tamil Nadu maker of forged and machined steel parts, mostly for trucks**, with about 36% of sales exported to the US, Europe and South America.", "**Good:** strong US truck demand in Q1 (though the pre-buy ended in August), volumes set to rise from 78,000 tonnes to over 90,000 in FY27, and two-thirds of sales now machined parts. **Bad:** margins stuck at 17–19%, return on capital down to 9%, net debt about 3.5 times operating profit, working capital at about 30% of sales, two loss-making subsidiaries, and a Q1 profit that included a ₹56cr one-off land gain.", "**Verdict: follow.** Demand is strong, but the price needs more than the ~12% a year I expect, and I want returns and debt to improve before buying."],
        tagline: "A Tamil Nadu forging company that shapes and machines steel parts, mostly for commercial vehicles in India and abroad, with an EV-parts subsidiary (Abhinava Rizel) just starting production.",
        revenue: '₹1,590cr (FY26, consolidated)',
        products: [
            { name: 'Machined components', text: "Forgings that it also machines to finished size: 67% of Q1 FY27 sales, expected to stay at 65–68%, after about ₹1,000cr spent on machining over ten years (₹625cr of it in the last five)." },
            { name: 'Forged components', text: "Parts supplied as forged, 33% of sales and shrinking; most new orders are for machined parts." },
            { name: 'Heavy forgings', text: "Large forgings, 42% of Q1 FY27 production. A 4,000-tonne press has just started and a 16,500-tonne press is due in Q4 FY27." },
            { name: 'EV and new-industry parts', text: "Parts for electric vehicles across several platforms (some exported), EV parts from the subsidiary Abhinava Rizel, now at the start of production, and new demand from companies supplying power backup to data centres." },
        ],
        revenueText: "In Q1 FY27 **India was 63.5% of sales, the US 18%, Europe 14% and South America 4%**. By end market, **trucks were 71%**, cars 14% and tractors and off-highway 14%. Sales per tonne rose to ₹2.02 lakh from ₹1.93 lakh a year earlier as more parts were machined. Q1 profit also included a one-off **₹56cr after-tax gain** from selling land at Oragadam, Chennai (presentation), which the figures above leave out.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company call)', parts: [{ label: 'India', share: 63.5 }, { label: 'US', share: 18 }, { label: 'Europe', share: 14 }, { label: 'South America', share: 4 }, { label: 'Others', share: 1 }] },
            { caption: 'Revenue by end market, Q1 FY27 (company call)', parts: [{ label: 'Trucks', share: 71 }, { label: 'Cars', share: 14 }, { label: 'Tractors and off-highway', share: 14 }, { label: 'Other', share: 1 }] },
        ],
        customers: ["**Truck makers and their main suppliers** in India, the US (where heavy-truck demand is booming), Europe and South America.", "**Indian car and tractor makers**; management says many global customers are setting up in India, turning export business into domestic business.", "**New customers** in data-centre power backup and electric vehicles."],
        difficulty: { level: 'Medium', text: "Forging and machining heavy truck parts needs big presses, skilled labour and customer approvals, but many Indian forgers do similar work. Staffing is getting harder: labour shortages cut output in April–May 2026." },
        moat: "Long relationships and approved parts with truck makers, and a cost base that Western forges cannot match as their capacity shrinks. But the business is cyclical, 71% tied to trucks, and has not earned high returns on its heavy investment.",
        salesDrivers: ["**Truck cycles in the US and India**: US heavy-truck demand is strong and Indian truck, tractor and car markets are running well; management says it has not seen demand this strong across all customers in past cycles.", "**Western capacity shrinking**: high labour costs are pushing forging out of Europe and the US, and customers want to buy from lower-cost countries. US tariffs have not stopped buying, and MM's contracts do not make it pay the duty.", "**Volume ramp-up**: 78,000 tonnes sold in FY26 and 20,200 in Q1 FY27; it expects 23,000–25,000 a quarter from Q2, over 90,000 tonnes for FY27 and 100,000–110,000 next year.", "**Guidance**: FY27 revenue of about ₹1,800–1,900cr (management called it about 18% growth), almost all from volume.", "**New presses and machining**: the 16,500-tonne press (Q4 FY27) and continuing machining capex should lift turnover in one to two years."],
        inputs: "**Steel bars**, plus fuel and electricity for heating and forging, and freight on exports. Materials were 45% of sales in FY26; power and factory costs 19%.",
        costEffect: "**Partly protected.** The call did not describe how steel costs are passed on; realisation per tonne rose mainly from more machined parts. Q1 FY27 brought a sharp jump in fuel costs (since stabilised), April pay rises, about ₹4cr of extra export freight as ships were rerouted, and a Tamil Nadu power tariff increase is still to come. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (18% to 13%). **What happened:** India's alloy-steel billet price index fell about 8% from Q1 FY24 to Q1 FY27 and the margin stayed at about 18%. Cheaper steel and a richer machined mix were offset by higher wages, fuel and freight. Management targets over 20% and says it has clear sight of 1–2 points of improvement.",
        competitors: [{ name: 'Other Indian forgers', note: 'Many make similar truck and car parts and compete for the export work shifting to India.' }, { name: 'Western forges', note: 'Labour and cost pressures are shrinking forging capacity in Europe and the US, which is sending orders to India.' }, { name: 'Brazilian forgers', note: 'A growing number of local forgers in Brazil compete for South American business.' }],
        position: "**A mid-sized Indian forger**, selling about 78,000 tonnes in FY26 and aiming for 100,000 tonnes a year, heavily focused on trucks and increasingly on machined parts.",
        money: "Screener shows **₹1,010cr of net debt** (about 3.5 times operating profit) on borrowings of ₹1,235cr. Management speaks of gross debt of ₹750–800cr and plans to hold it there, repaying about ₹170cr this year and borrowing the same again; that figure counts term loans only, and in February management put net debt at ₹1,065cr. Two subsidiaries lose money: DVS Industries (about ₹10cr loss in FY26, negative net worth, merger awaiting a court order) and the electric-motor arm Abhinava Rizel (88% owned, about ₹70cr invested). FY27 capex is about ₹150cr (up to ₹50cr of it replacement and ₹50cr debottlenecking). Land-sale money will go to working capital, capex or debt. The board has an enabling resolution for a QIP (a share sale to institutions), which management will consider 'at an appropriate time'. Promoters hold **56%**, unchanged.",
        watch: ["Quarterly volumes reaching 23,000–25,000 tonnes from Q2 FY27.", "Working capital and inventory coming down, and net debt with them.", "Start-up of the 16,500-tonne press in Q4 FY27."],
        charts: forgingCharts['MM Forgings'],
    },
    {
        company: 'Nelcast',
        inShort: ["**An Indian iron foundry with three plants making castings for trucks and tractors**, with about a third of sales exported.", "**Good:** spare capacity, three new large-casting programmes worth over ₹200cr a year at full volume by Q4 FY27, and term debt falling. **Bad:** margins have swung between 5% and 10% by quarter, the new Pedapariya plant ran at only 21% in Q1 FY27, profit after tax fell 59%, and trucks and tractors face a weak second half.", "**Verdict: wait.** I want to see the new programmes ramp up and profit per kilogram recover toward ₹15 first."],
        tagline: "A large Indian foundry making iron castings (parts poured from molten metal) such as axle housings for trucks and front-axle parts for four-wheel-drive tractors, with about a third of sales exported.",
        revenue: '₹1,328cr (FY26, standalone)',
        products: [
            { name: 'Tractor castings', text: "Castings for tractors, including front-axle parts for four-wheel-drive models. That segment is growing fast because a 45 hp four-wheel-drive tractor can do the work of a costlier 50-plus hp tractor, which faces stricter emission rules." },
            { name: 'Truck castings', text: "Castings for Indian truck makers, including cast axle housings for heavy trucks and tippers that are replacing welded (fabricated) ones. Its developed parts have grown from about 2 to 12, all single-source." },
            { name: 'Large castings', text: "Bigger, more complex castings from the Pedapariya plant, including parts for the largest US tractors. Three new programmes began shipping in July 2026 and should reach ₹200–250cr of yearly revenue by Q4 FY27." },
            { name: 'Export castings', text: "Parts for truck and tractor makers abroad (₹113cr in Q1 FY27), plus traditional parts won from European customers whose local foundry was going bankrupt." },
        ],
        revenueText: "Q1 FY27 sales were ₹341cr (₹345cr with other income), of which **exports were ₹113cr, about a third**. It sold 22,442 tonnes at about **₹152 a kilogram**. The call does not split revenue between trucks, tractors and other segments. Management expects about **1 lakh tonnes** and a little over 10% revenue growth in FY27 (July 2026 call).",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (derived from call)', parts: [{ label: 'India', share: 67 }, { label: 'Exports', share: 33 }] },
        ],
        customers: ["**Indian truck makers**: it now supplies all of them, with single-source cast axle housings for high-end tippers.", "**Indian tractor makers**, especially for four-wheel-drive models.", "**Truck and tractor makers in the US and Europe**, directly and through indirect exports; US customers are buying ahead of emission rule changes in January."],
        difficulty: { level: 'Medium', text: "Standard castings are made by many Indian foundries, but the large, complex castings from Pedapariya face little domestic competition. New products need months of validation, and ramp-ups often run late on both sides." },
        moat: "Long relationships and single-source parts with Indian truck and tractor makers, and growing scale in large castings. But it competes largely on cost in a crowded, cyclical market, which is why margins are thin.",
        salesDrivers: ["**Indian truck and tractor volumes**: both grew strongly in Q1 FY27 and management expects growth for the year.", "**Switch to cast axles**: heavy trucks and tippers are moving from welded to cast axle housings, and tractors to four-wheel drive.", "**New large-casting programmes**: over ₹200cr of yearly revenue at full volume by Q4 FY27.", "**Exports**: US demand is recovering after tariff uncertainty, with buying ahead of January emission rules; Europe is slower but opening up as local foundries fail.", "**Capacity use**: in Q1 Gudipadu ran at 53%, Ponneri at 100% and Pedapariya at 21%; it aims for about 130,000 tonnes in two to three years."],
        inputs: "**Metal for melting**, mainly pig iron and scrap, plus heavy power use in the furnaces (65–70% of its power is renewable). Materials were 44% of sales in FY26; power and factory costs 33%.",
        costEffect: "**Passed on, with about a quarter's lag.** Raw-material increases go to customers through price revisions; about ₹4 a kilogram of Q1 cost increases should come through in Q2 FY27 prices, and some of the freight too. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (8% to 4%). **What happened:** India's pig-iron price index fell about 6% from Q1 FY24 to Q1 FY27, yet the margin fell from 7% to 5%. In Q1 FY27 profit dropped to ₹9.48 a kilogram because raw-material prices rose before price revisions caught up, labour was short in April–May, Pedapariya was stopped for upgrades and freight rose. An analyst noted that over three years costs have risen as fast as revenue; management targets ₹15 a kilogram for FY27.",
        competitors: [{ name: 'Other Indian foundries', note: 'Many compete for standard castings; management says there is little domestic competition in its large, complex parts.' }, { name: 'Welded axle-housing makers', note: 'The older technology in truck axles, now losing ground to castings on heavy trucks.' }, { name: 'European foundries', note: 'Local suppliers to European customers; some are going bankrupt, which opens doors for Nelcast.' }],
        position: "**A large Indian foundry for trucks and tractors**, selling over 90,000 tonnes a year; single-source supplier of cast axle housings to all Indian truck makers, and a newcomer in large castings for export.",
        money: "Screener shows **₹172cr of net debt** (about 1.8 times operating profit). Management said on the July call that term loans were about ₹90cr at June 2026, which does not fit the March accounts (₹36.9cr of long-term borrowings plus current maturities); ICRA expects ₹31.7cr of term-loan repayments in FY27. Capex is modest, about ₹35cr for maintenance and upgrades. It owns land in Tamil Nadu near a new ISRO facility that it may sell when the right opportunity comes. Promoters hold **74.9%**, unchanged.",
        watch: ["Ramp-up of the three large-casting programmes to over ₹200cr a year by Q4 FY27.", "Profit per kilogram recovering from ₹9.48 toward ₹15.", "Pedapariya utilisation and export payment terms."],
        charts: forgingCharts['Nelcast'],
    },
    {
        company: 'Synergy Green',
        inShort: ["**A Kolhapur foundry making very large iron and steel castings (3–30 tonnes) for wind turbines**, wind gearboxes and heavy industry, supplying 6 of the world's 15 leading turbine makers.", "**Good:** strong demand from wind makers moving away from Chinese suppliers, capacity raised by half to 45,000 tonnes and in-house machining started. **Bad:** the quarterly margin fell from 13% to 7% over the past year, net debt is about 7 times operating profit, it made a net loss over the last four quarters, and Q1 FY27 sales were held up by shipping and approvals.", "**Verdict: pass.** Too much debt and too little profit; earnings are too thin to value the shares on."],
        tagline: "A Kolhapur (Maharashtra) foundry of the Shirgaokar Group making heavy SG-iron, grey-iron and steel castings for wind turbines, wind gearboxes and general engineering, and now machining some of them in-house.",
        revenue: '₹366cr (FY26, standalone)',
        products: [
            { name: 'Wind-turbine castings', text: "Large single-piece castings of 3–30 tonnes for turbine makers, such as a 6–7-tonne bearing housing for a 5 MW turbine; about 70% of revenue. New Nordex parts (5 MW, now in serial production for US exports) and Vestas parts (4 MW, full production from Q1 FY28) are ramping up." },
            { name: 'Wind-gearbox castings', text: "Castings for the gearbox makers that supply turbine manufacturers; part of the roughly 30% of revenue outside turbine castings." },
            { name: 'Non-wind castings', text: "Castings for coal-power equipment (new orders from L&T and BHEL; BHEL's is an import substitute that may take 8–9 months to develop), mining and general engineering customers such as Terex." },
            { name: 'In-house machining', text: "A 20,000-tonne machining shop, now at 50% utilisation, so it can deliver finished parts instead of paying outside machinists; about half the products have been developed and approved." },
        ],
        revenueText: "Per management, **wind-turbine castings are about 70% of revenue and gearbox plus non-wind castings close to 30%**. Exports should be **25–30%** of FY27 revenue, mostly in the second half. Vestas, historically 45–50% of business, should fall to about 30% as Nordex and Adani grow. The company gives no fuller split by product or country.",
        mixes: [
            { caption: 'Revenue by segment (management, approximate)', parts: [{ label: 'Wind turbines', share: 70 }, { label: 'Wind gearboxes and non-wind', share: 30 }] },
        ],
        customers: ["**Global wind-turbine makers**: it works with 6 of the top 15 (Vestas, Nordex, Siemens Gamesa, Envision, Adani and Senvion); four are in production and two still in development.", "**Vestas**, its largest customer for over a decade, once 45–50% of business and expected to fall to about 30%.", "**Non-wind customers** such as Terex, Ferromatic, L&T, Mahindra and BHEL."],
        difficulty: { level: 'High', text: "Pouring and machining single castings of up to 30 tonnes needs heavy equipment and long experience. A new product for an existing customer takes 6–8 months to approve and a new customer about 2 years of audits. Management says no one in India has yet made castings above 30 tonnes." },
        moat: "Long approvals, heavy equipment and US project rules that favour non-Chinese suppliers keep turbine makers loyal, and management says it is 5–10% cheaper than China on landed cost for wind parts after the yuan rose about 20% against the rupee. But it depends heavily on wind and a few big customers, and passes on costs only with a lag.",
        salesDrivers: ["**Wind installations**: India added a record 6.34 GW in FY26 and is expected to reach 107 GW by 2030 from 51 GW; turbines are moving from 2–3 MW to 3–5 MW models, which need bigger castings.", "**Moving away from China**: US projects favour non-Chinese suppliers, and a stronger yuan has made India competitive.", "**New capacity**: foundry capacity rose from 30,000 to 45,000 tonnes; utilisation was 66% in Q1 FY27 and about 85% in July, with 80% targeted for FY27.", "**Guidance**: 33% revenue growth to about ₹500cr in FY27 and a margin about 3 points higher, which relies on a strong second half.", "**Next expansion**: land next to the plant for up to 100,000 tonnes of capacity, to be acquired by March 2027; the project could start in FY28 and take 15–18 months to build."],
        inputs: "**Pig iron, scrap and CRC steel**, plus furan resin (a binder for the sand moulds and its third-largest cost, up 60% with crude oil), gas and electricity. Materials were 38% of sales in FY26; power and factory costs 37%.",
        costEffect: "**Partly passed on, with a one-quarter lag.** Metal prices are indexed to the previous quarter's three-month average, so it loses when prices rise and gains when they fall; consumables such as resin are recovered quarterly from some customers and yearly from others. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (11% to 7%). **What happened:** India's pig-iron price index fell about 6% from Q1 FY24 to Q1 FY27, but the margin fell from 11% to 7%. In Q1 FY27 alone, rising metal prices cost about 2 points, resin and other consumables about 3 points and a Maharashtra power-rule change (ending solar banking, applied retrospectively) about 1 point, while finished castings waited for ships and customer approvals. The new capacity was also not yet earning its keep.",
        competitors: [{ name: 'Chinese foundries', note: "Supply China's huge wind market locally and compete strongly in Europe; Indian turbine makers import castings above 30 tonnes from China." }, { name: 'Other non-Chinese foundries', note: 'Taiwan and a few others are the alternatives for US projects that must avoid Chinese suppliers.' }, { name: 'Indian foundries', note: 'Peers have also added capacity, an analyst noted on the call.' }],
        position: "**A specialist heavy-casting supplier to the wind industry**, working with 6 of the top 15 turbine makers from 45,000 tonnes of capacity; management says Indian foundries so far top out at castings of about 30 tonnes.",
        money: "Screener shows **₹238cr of net debt** at March 2026 (about ₹234cr at June on the company's figures), about 7 times the last year's operating profit, with borrowings up from ₹80cr in FY24 to ₹250cr in FY26 to pay for the expansion. After the Q1 loss, net worth fell to ₹101cr at June against total debt of ₹243cr; CRISIL rates it BBB/Stable and puts adjusted debt at 2.31 times equity. Management's ₹175–180cr debt ceiling refers to long-term loans only. The next plant needs land (targeted by March 2027) and funding, which management would arrange next year after two or three good quarters. It expects to save about ₹10cr a year on energy from 10 MW of captive solar and a new 5 MW wind power deal. Promoters hold **69.5%**, down from 74% in September 2023.",
        watch: ["Q2 and Q3 sales catching up with the ₹500cr FY27 target.", "The margin recovering from 7% as price indexation catches up.", "Debt, and funding for the planned 100,000-tonne expansion."],
        charts: forgingCharts['Synergy Green'],
    },
    {
        "company": "Behari Lal Engineering",
        "segment": "Specialists — wear parts and steel castings for mines, machines and railways",
        "inShort": [
            "**A Punjab steel foundry and rolling mill** that melts scrap into rolls for steel mills, large castings for crushers and power plants, and alloy-steel bars, and supplies about 11.5% of India's metal-roll demand.",
            "**Good:** the operating margin rose from 10% to 17% in three years as it shifted to higher-value products, returns are about 27%, and it has net cash. **Bad:** stock and receivables are rising (Screener's cash cycle went from 106 to 175 days and FY26 operating cash was only ₹28cr against ₹89cr of operating profit), the plant is already 90% full, and the top 10 customers are 38% of sales.",
            "**Verdict: follow.** A well-run, debt-free business at a fair 28 times earnings; I want Unit 3 on time and profit turning into cash before buying."
        ],
        "tagline": "A family-run steel company from Mandi Gobindgarh, Punjab, making mill rolls, heavy castings and special alloy bars from recycled scrap.",
        "revenue": "₹533cr (FY26, standalone)",
        "products": [
            {
                "name": "Alloy steel products",
                "text": "Bars of carbon, alloy and stainless steel from 6 mm to 230 mm, including newer valve, tool and die steels; ₹245cr in FY26 (46%). The lower-value bars go to auto forging firms; the company is shifting this steel into higher grades."
            },
            {
                "name": "Metal rolls",
                "text": "Rolls that steel mills use to roll bars and sections; ₹141cr in FY26 (26%), sold to mills such as SAIL, JSW, Tata Steel and many secondary mills. It plans imported-type ICDP and high-speed-steel rolls from Unit 3."
            },
            {
                "name": "Engineering castings",
                "text": "Single pieces from 500 kg to about 25 tonnes for crushers, power plants, mining and heavy equipment; ₹104cr in FY26 (20%). Buyers include Metso, Propel and Kleemann."
            },
            {
                "name": "Forging ingots, shafts and job work",
                "text": "Ingots and forged shafts for forging companies (4%), plus job-work rolling for nearby mills (2%), both being reduced."
            }
        ],
        "revenueText": "**Alloy steel was 46% of FY26 revenue, rolls 26% and castings 20%** (RHP). High-value products (rolls, castings and special grades) were 58% of FY26 revenue and 60.4% in Q1 FY27. By end use in Q1 FY27, automotive was 33%, infrastructure 26%, industrial equipment 15%, crushers 14% and thermal power 11%. **Exports were 9% of FY26 revenue** to 21 countries. The order book was ₹162cr at June 2026.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Alloy steel products",
                        "share": 46
                    },
                    {
                        "label": "Metal rolls",
                        "share": 26
                    },
                    {
                        "label": "Engineering castings",
                        "share": 20
                    },
                    {
                        "label": "Forging ingots & shafts",
                        "share": 4
                    },
                    {
                        "label": "Job work and other",
                        "share": 4
                    }
                ]
            },
            {
                "caption": "Revenue by end user, Q1 FY27 (company call)",
                "parts": [
                    {
                        "label": "Automotive",
                        "share": 33
                    },
                    {
                        "label": "Infrastructure",
                        "share": 26
                    },
                    {
                        "label": "Industrial equipment",
                        "share": 15
                    },
                    {
                        "label": "Aggregate crushers",
                        "share": 14
                    },
                    {
                        "label": "Thermal power",
                        "share": 11
                    },
                    {
                        "label": "Other",
                        "share": 1
                    }
                ]
            }
        ],
        "customers": [
            "**Steel mills** for rolls: SAIL, JSW, Tata Steel and Vizag Steel, plus many secondary mills such as Shyam Metalics, Jai Balaji and Madhav KRG.",
            "**Equipment makers** for castings: Metso, Propel and Kleemann (crushers), thermal-power equipment makers, and PSUs such as BHEL, BEML and BDL.",
            "**Forging and auto-parts firms** for alloy bars. 1,871 customers at June 2026; the top 10 were 38% of FY26 revenue."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Large rolls and 20-tonne castings need metallurgy skill, vacuum degassing and heavy machining, and customers take time to approve a supplier. But Mandi Gobindgarh has many foundries, and alloy bars are close to a commodity."
        },
        "moat": "One melt shop that can switch between rolls, castings and bars keeps the plant full, and long relationships with 1,800 customers help. It is still a small player, much of its revenue is commodity-like bars, and its edge in new rolls depends on Unit 3 working.",
        "salesDrivers": [
            "**Mix**: high-value share from 58% to about 70% over time; EBITDA per tonne rose from about ₹9,100 to ₹11,500 in FY26 and ₹13,500 in Q1 FY27.",
            "**Capacity**: melt shop at 94% and rolling mill at 87.5%; Unit 3 due in Q1 FY28; melting capacity has doubled every three to four years.",
            "**Steel and power capex**: India's steel capacity push needs rolls; thermal power customers show orders to 2035.",
            "**Defence**: prototype orders from BDL and NPCIL; meaningful revenue expected from FY28.",
            "**Scrap prices**: range-bound in Q1 FY27."
        ],
        "inputs": "**Steel scrap (100% recycled)** plus ferro-alloys and power. Materials were 51% of revenue in Q1 FY27 (52.6% a year earlier); power and fuel 5.9%.",
        "costEffect": "**Mostly passed on, as products are priced on order.** Management says the margin gain came from mix, not cheap scrap. **Rule of thumb:** with materials at about 51% of revenue, a 10% rise in scrap not passed on would cut the margin by about 5 points (18% to 13%). **What happened:** the operating margin rose from 10% in FY23 to 13%, 14% and 17% in FY24–FY26 and 18% in Q1 FY27 while scrap prices moved around.",
        "competitors": [
            {
                "name": "Imported ICDP and HSS rolls",
                "note": "Most of these advanced rolls are imported today; Unit 3 is aimed at them."
            },
            {
                "name": "Other Indian roll makers and Mandi Gobindgarh foundries",
                "note": "Many small rivals; not named in what I read."
            },
            {
                "name": "AIA Engineering",
                "note": "Much larger maker of wear castings for crushers and mills, an overlap in castings."
            }
        ],
        "position": "**One of India's largest metal-roll makers**, with about 10–11.5% of national demand in FY26 (CRISIL, cited in the RHP); capacity use 90.5% in Q1 FY27.",
        "money": "**Net cash of about ₹41cr at June 2026** (₹52cr of cash against ₹11cr of borrowings), before ₹93cr of IPO money arrived in August. **Over FY23–FY26 it turned ₹264cr of operating profit into ₹140cr of operating cash, and free cash was ₹51cr**; FY26 operating cash fell to ₹28cr as inventory rose to 136 days on Screener. FY27 capex is about ₹80cr from IPO money and profits. Returns: ROE about 24%, ROCE about 27–31%. Promoters hold **70.84%**.",
        "watch": [
            "Operating cash recovering and the cash cycle held near 90–100 days.",
            "Unit 3 commissioning in Q1 FY28 and its capex figure.",
            "High-value share and profit per tonne each quarter."
        ],
        charts: forgingCharts["Behari Lal Engineering"],
    },
];

export const forgingBusinesses = { intro, profiles };
