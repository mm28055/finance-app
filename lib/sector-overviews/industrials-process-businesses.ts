import { BusinessProfile, OverviewSection } from './types';
import { industrialsProcessCharts } from './card-data/industrials-process';

// Tab 2 of the Industrials · Chemical and pharma process equipment note: what each company actually does.
// Profiles are carried over unchanged from the Industrial Manufacturing and Industrial Products notes
// (Q1 FY27). Revenue totals are the filed figures (Screener). Splits come from the companies' latest
// presentations, annual reports and calls; where a split is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, in the order of the ranking in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures; splits are from each company's latest presentation or call.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "These companies design and build process equipment and whole plants for chemical, pharma, fertiliser, fuel and gas producers. Almost nothing here is bought off a shelf: each order is engineered, built, tested and shipped, often over a year or more.",
        ],
        points: [
            {
                label: 'Glass-lined and pharma equipment',
                text: "**Glass-lined reactors** (steel vessels coated with glass so acids and drugs do not react with the metal) and storage tanks, plus the **filters, dryers and mixers** that separate, dry and blend the product in drug and chemical plants.",
            },
            {
                label: 'Equipment and plants for chemicals, fertiliser and fuels',
                text: "**Industrial dryers** for fertiliser, chemical and tea plants and **nuclear process equipment**; **heat exchangers, pressure vessels and columns** for refineries, fertiliser and power plants, built and stamped to strict safety codes, usually to a licensor's design; and **ethanol and biogas plants** on the maker's own process.",
            },
            {
                label: 'Cryogenic equipment',
                text: "**Cryogenic tanks, trailers and cylinders** that hold liquefied gases at −196°C for industry, LNG and space.",
            },
        ],
    },
    {
        heading: 'Three ways of selling',
        body: [
            "Who the customer is decides how the price is set and how fast the cash comes in. In this group most prices are fixed when the order is won, so the time between quote and delivery is where profit is made or lost.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'How the price is set', 'How fast the cash comes'],
                rows: [
                    ['**Pharma, chemical and industrial plants**', 'GMM, HLE, Standard Glass, Kilburn, Praj', 'Quoted per project', 'Milestones; slow in a downturn'],
                    ['**Refinery and project contractors**', 'Anup', 'Fixed-price contracts', 'Milestones and retention money'],
                    ['**Contracts linked to metal prices**', 'Inox', 'Formula resets with raw-material prices beyond a 3% band', 'Milestones for large projects, with customer advances'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Inox India',
        inShort: ["**India's leading maker of cryogenic tanks and equipment** for industrial gases, LNG, space launch sites, big-science projects and semiconductor fabs.", "**Good:** a record ₹1,686cr order book, two-thirds of it export, prices linked to raw materials and ₹239cr of net cash. **Watch:** freight problems cut Q1 FY27 growth to 8% against 18–20% guidance, operating cash was only ₹117cr in FY26 against ₹343cr of operating profit, and a non-compete keeps it out of the US until 2028.", "**Verdict: follow.** An excellent business, but the price already assumes years of flawless growth, and the cash has yet to follow the profit."],
        tagline: "A Vadodara maker of equipment that stores and moves gases at minus 160 to minus 270 degrees, from small cylinders to 1,500 cubic metre tanks.",
        revenue: '₹1,587cr (FY26, consolidated)',
        products: [
            { name: 'Industrial gas equipment', text: "Storage and transport tanks, vaporisers, liquid and disposable cylinders (over 2 million disposable cylinders made) for oxygen, nitrogen, argon, hydrogen and helium, plus giant tanks for a US space company and ultra-pure gas lines for chip plants." },
            { name: 'LNG equipment', text: "LNG storage tanks, semi-trailers, fuelling stations, marine fuel tanks (Cochin Shipyard) and small import terminals such as the one being installed in the Bahamas." },
            { name: 'Cryo-scientific', text: "Specialised cryogenic systems for launch facilities, fusion and particle-physics projects such as ITER and CERN, and MRI cryostats." },
            { name: 'Beverage kegs', text: "Stainless-steel beer kegs from a 300,000-unit plant at Savli, approved by Heineken, AB InBev and Molson Coors; utilisation was about 30%." },
        ],
        revenueText: "**Industrial gas was 54% of FY26 revenue** (61% in FY25), LNG 28% (17%), cryo-scientific 14% and kegs 4%. Of the ₹1,686cr order book at June 2026, **over ₹1,140cr is export**, and about ₹400cr is for the US space customer, whose cumulative orders exceed ₹1,000cr for delivery by the end of FY28. The company does not report profit by segment.",
        mixes: [
            { caption: 'Revenue by division, FY26 (company presentation)', parts: [{ label: 'Industrial gas', share: 54 }, { label: 'LNG', share: 28 }, { label: 'Cryo-scientific', share: 14 }, { label: 'Beverage kegs', share: 4 }] },
        ],
        customers: ["**Global industrial gas companies and a US private space company**, plus semiconductor projects of Micron, Foxconn and Tata.", "**LNG buyers** such as BPCL, city gas distributors, Cochin Shipyard and island terminal projects in the Bahamas.", "**Scientific bodies** such as CERN and ITER, and **breweries** for kegs."],
        difficulty: { level: 'Very high', text: "Vessels must hold gases at extreme cold for decades with minimal boil-off, pass pressure-vessel codes and, for flight parts, the AS9100D aerospace standard it has just gained. For 1,500 cubic metre tanks it knows of only one rival worldwide." },
        moat: "In mission-critical equipment, buyers pick the supplier with a delivery record, and Inox has decades of it plus an Indian cost base. The weaknesses are its absence from the US market until 2028 and tariffs or local rivals in its export markets.",
        salesDrivers: ["**Space and semiconductors**: repeat orders for large launch-site tanks and heat exchangers, and gas systems for India's new chip plants, where it is training scarce specialist welders itself.", "**LNG as a transport and marine fuel**: lower LNG prices have widened its cost gap with diesel, and PSUs have asked for quotes on 20–25 fuelling stations.", "**Industrial gas demand** from steel, healthcare and chemicals, which management expects to grow 15–18%.", "**Capacity**: a port-side plant at Kandla, due around December 2026 or January 2027, lets it build tanks too large to move by road."],
        inputs: "**Stainless-steel plate and sheet, aluminium, insulation materials and valves.** Materials were 45% of sales in FY26.",
        costEffect: "**Passed on.** Large contracts carry a formula that adjusts the price for raw-material moves beyond a 3% band. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (22% to 18%). **What happened:** India's alloy and stainless steel bar prices were flat (about 1% lower) from Q1 FY24 to now, yet Screener's operating margin eased from about 23% to 20.5%. That came from mix and fixed costs, such as staff at the new Savli plant and a keg line running at about 30%, not from metal; the company's own EBITDA measure showed 23.5% for Q1 FY27.",
        competitors: [{ name: 'Chart Industries', note: 'US leader and the only other maker it knows of for the largest tanks; has opened a plant in India.' }, { name: 'Linde, Air Products, Cryolor, Wessington', note: 'Established global names in cryogenic equipment.' }, { name: 'Smaller Indian makers', note: 'New private entrants and listed players are adding capacity, but large-project eligibility rules keep them out of the biggest jobs for now.' }],
        position: "**70–75% of Indian cryogenic tanks and 60–65% of Indian LNG equipment** (Crisil and management), and one of two suppliers worldwide for the largest space tanks.",
        money: "Net cash of **₹239cr** (Screener, March 2026); the company puts its available funds at ₹331cr in June 2026. The Kandla plant is funded from its own cash. Cash from operations was only ₹117cr in FY26 against ₹343cr of operating profit, as work in progress built up on large contracts. Sales of ₹145cr (about 9% of revenue) went to promoter-group INOX Air Products. An arbitral tribunal ordered it to pay ₹8.5cr of costs for breaching its US non-compete, and a tax reassessment on a ₹52cr deduction is before the Gujarat High Court. Promoters hold **75%**, unchanged.",
        watch: ["Shipments delayed by freight costs (₹32–35cr in Q1) catching up; FY27 growth guided at 18–20%.", "Operating cash rising above ₹200cr in FY27, after about ₹120cr for three years.", "Kandla plant starting on time.", "Plans for the US market once the non-compete ends in 2028."],
        charts: industrialsProcessCharts["Inox India"],
    },
    {
        company: 'GMM Pfaudler',
        inShort: ["**The world's largest maker of glass-lined reactors**, the corrosion-proof vessels used by drug and chemical makers, plus mixing, filtration, sealing and heavy engineering equipment.", "**Good:** about half the Indian market, a record ₹2,289cr backlog, strong free cash and a pharma recovery. **Bad:** the margin has fallen from about 14% to 10%, a 49% tax rate and interest turn ₹403cr of operating profit into ₹52cr of net profit, and the group CFO resigned in September.", "**Verdict: follow.** A global technology leader with problems that can be fixed; the price asks a little more than I expect until they are."],
        tagline: "A global process-equipment group built around Pfaudler glass-lined reactors, operating in India, Europe and the Americas.",
        revenue: '₹3,524cr (FY26, consolidated)',
        products: [
            { name: 'Corrosion Resistance Technologies (CRT)', text: "Glass-lined reactors, tanks and columns, where glass is fused onto steel so acids cannot attack it, plus a large reglassing and service business. Revenue ₹466cr in Q1 FY27, up 10%." },
            { name: 'Process Performance Technologies (PPT)', text: "Mixing, filtration and drying, membrane separation and sealing equipment. Revenue ₹255cr, up 23%, with orders up 64%." },
            { name: 'Process Systems Technologies (PST)', text: "Engineered skids and complete process systems for pharma, semiconductor and defence plants. Revenue ₹131cr, up 46%." },
            { name: 'Heavy Engineering Technologies (HET)', text: "Large pressure vessels and heat exchangers for oil and gas, petrochemicals, fertiliser, nuclear and power, run from India. Revenue ₹74cr, flat, but orders up more than sevenfold." },
        ],
        revenueText: "From Q1 FY27 the company reports four global divisions instead of regions: **glass-lined equipment (CRT) is about half of revenue**, mixing, filtration and sealing 28%, process systems 14% and heavy engineering 8%. Q1 order intake was ₹1,007cr, and most of it can be delivered within 10–12 months, unlike last year's multi-year projects.",
        mixes: [
            { caption: 'Revenue by division, Q1 FY27 (company)', parts: [{ label: 'Glass-lined (CRT)', share: 50 }, { label: 'Mixing, filtration, sealing (PPT)', share: 28 }, { label: 'Process systems (PST)', share: 14 }, { label: 'Heavy engineering (HET)', share: 8 }] },
        ],
        customers: ["**Drug makers and contract manufacturers**, especially API, CDMO and peptide plants around Hyderabad and new pharma plants in the US.", "**Chemical and agrochemical companies** worldwide, such as Bayer and UPL, where demand is still weak, especially in Europe.", "**Energy and defence buyers**: nuclear, power, fertiliser and Middle East oil and gas projects for heavy engineering; defence and semiconductor plants for process systems."],
        difficulty: { level: 'High', text: "Fusing glass onto steel so it does not crack under heat and pressure is a specialised process built on Pfaudler's own glass formulations. Drug makers must re-validate a process if they change equipment supplier. Standard reactors are easier to copy, and Chinese and Indian rivals now make them." },
        moat: "Its glass formulations, the industry's largest installed base and a big reglassing and service business keep customers coming back. The weakness is that standard reactors have become a price fight, and much of its cost base sits in high-cost Europe.",
        salesDrivers: ["**Pharma capacity**: CDMO, API and peptide investment in Hyderabad and pharma plants being built in the US are driving glass-lined orders; management says it has not seen such an improvement for some time.", "**The chemicals cycle**: chemical demand is flat in India and very weak in Europe; a recovery would lift the largest division.", "**Newer end markets**: nuclear, power, fertiliser and Middle East oil and gas for heavy engineering; semiconductors and defence for process systems; mining through Semco in Brazil.", "**Cross-selling** across the four new global divisions, which management says has improved since the reorganisation.", "**Cost cuts**: moving engineering work to a 120-person centre in India and trimming staff in the UK and Germany, towards a 15% margin target that has no date."],
        inputs: "**Carbon and stainless steel** plate and forgings for vessels, plus glass coatings, drives and seals. **Staff are a large cost (29% of sales)** because much of the business is in Europe and the US. Materials were 40% of sales in FY26.",
        costEffect: "**Partly protected.** The company does not describe price clauses; its margin problems have come from selling prices and staff costs rather than steel. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (11% to 7%). **What happened:** India's hot-rolled steel price index fell from 100 in Q1 FY24 to 94 in Q1 FY27, yet the margin fell from 14.3% to 10.2%. Cheaper steel did not help because prices for standard equipment fell, the European chemicals slump left plants under-used, and staff costs rose with the new global structure.",
        competitors: [
            { name: 'HLE Glascoat', note: 'The second Indian glass-lined maker (with Thaletec in Germany); its Indian glass-lined margins have fallen from 18% to about 10%.' },
            { name: 'Standard Glass (SETL)', note: 'The third Indian player, growing fast on CDMO demand.' },
            { name: 'De Dietrich Process Systems', note: 'The main global rival in glass-lined equipment, based in France.' },
            { name: 'Chinese glass-lined makers', note: 'Pushing down prices of standard reactors.' },
        ],
        position: "**Over half of the Indian glass-lined market** (the top three hold about 75%), and the world's largest glass-lined equipment maker, with the biggest installed base.",
        money: "Net debt was ₹353cr at March 2026 (Screener), on borrowings of ₹1,041cr, mostly in euros and dollars at 6–7% interest; Crisil counts gross debt of ₹1,437cr including ₹396cr of pension liabilities and ₹206cr of leases, against ₹691cr of cash spread across countries. It repaid about €7m by September 2026, plans a full refinancing in 12–18 months, and is simplifying its multi-country structure to bring the tax rate (49% in FY26) down to about 30% in 18–24 months. Group CFO Alexander Poempner resigned on 15 September 2026; deputy CFO Ankit Nayyar takes over after the Q2 results. Capex is modest, ₹63–78cr a year in FY24–FY26 (Screener). Promoters hold **25%**, unchanged over three years.",
        watch: ["Two or three quarters of steady margin improvement, as management itself asked investors to wait for.", "Debt repayment, the tax restructuring and the handover to a new CFO.", "Whether Indian and US pharma orders keep coming."],
        charts: industrialsProcessCharts['GMM Pfaudler'],
    },
    {
        company: 'The Anup Enginee',
        inShort: ["**Makes heat exchangers, pressure vessels, columns and reactors** for refineries and petrochemical, fertiliser, power and nuclear plants; half of sales are exports, mainly to the Middle East.", "**Good:** fully certified, a record ₹985cr order book and a new plant already built. **Bad:** fixed-price contracts leave it exposed to steel costs; the Q1 FY27 margin was 7%, FY27 guidance of about 15% is below the 18% at which CARE says it may downgrade, and operating cash was about nil in FY25 and FY26.", "**Verdict: wait.** Its profit is not arriving as cash: ₹152cr of operating cash against ₹395cr of profit over the five years Screener shows (FY21–FY26, FY24 not shown; 38%), and ₹2cr on ₹110cr in FY26. A strong fabricator in a reset year, with new orders taken close to historic margins; it returns to follow when operating cash converts most of its profit and the second half brings the margin back. The price needs about {need:The Anup Enginee|21}% a year against my ~18%, which is {Label:The Anup Enginee|Full}. A fitting price (since 9 Oct 2026) does not change the call while cash lags profit."],
        tagline: "A certified maker of custom heat exchangers and pressure equipment for oil and gas, petrochemical, fertiliser, power and nuclear plants.",
        revenue: '₹822cr (FY26, consolidated)',
        products: [
            { name: 'Heat exchangers', text: "Shell-and-tube and helical-baffle exchangers, the largest line at 60% of Q1 FY27 revenue (56% in FY26), and now air-cooled heat exchangers, started with an order from a German client." },
            { name: 'Pressure vessels, columns and reactors', text: "Large custom vessels and towers built to ASME code for refineries, petrochemical and fertiliser plants, including two licensors' proprietary equipment it newly qualified for." },
            { name: 'Other equipment', text: "Industrial centrifuges, formed components and precision machined parts, and nuclear steam-generator work begun last year." },
            { name: 'Technical services', text: "Repair, maintenance and site work, a new division targeting ₹25cr this year at over 30% margins, ₹100cr next year and ₹200cr in three years." },
        ],
        revenueText: "Revenue is split about **50:50 between exports and India**, a balance management keeps on purpose. By product, **heat exchangers were 60% of Q1 FY27 revenue**, vessels, columns and reactors 27% and other items the rest; by industry, **oil, gas and petrochemicals were 71% of FY26 revenue** but only about half in Q1 FY27, as power rose to 22%. The ₹380cr export order book is mostly for the Middle East (largely ADNOC), with about ₹50cr for the US and ₹60cr for Africa.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'Exports', share: 50 }, { label: 'India', share: 50 }] },
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'Heat exchangers', share: 60 }, { label: 'Vessels, columns and reactors', share: 27 }, { label: 'Other', share: 13 }] },
        ],
        customers: ["**Oil, gas and petrochemical owners and their engineering contractors** in India and the Middle East, with ADNOC the biggest export customer.", "**Fertiliser, power and nuclear buyers** such as NTPC and NPCIL, plus process licensors whose proprietary equipment Anup is now approved to build."],
        difficulty: { level: 'High', text: "Every item is custom-designed and built to ASME U, U2 and S codes; a pressure vessel that fails can kill, so buyers use only certified, proven fabricators. Designs take 4–6 weeks and need customer approval before steel can even be ordered." },
        moat: "Certifications, licensor approvals and a record on critical equipment keep low-cost fabricators out of complex jobs. The weakness is that on standard items, lower-tier players compete on price, and fixed-price contracts give no protection against steel.",
        salesDrivers: ["**Refinery, petrochemical and fertiliser investment**: management expects about ₹1,000cr a year of conventional work to last a decade, plus repair and energy-security spending after the Gulf war.", "**Order intake**: ₹538cr booked from April to early August, an enquiry pipeline of about ₹1,100cr, and a planned ₹200–250cr of orders a quarter.", "**Moving into niche products**: licensed proprietary equipment, air-cooled exchangers, thermal power (over ₹150cr of new orders) and, later, nuclear, hydrogen and data-centre cooling.", "**Capacity is not a limit**: Kheda's second phase is running (a third is planned), group capacity is about ₹1,200cr of revenue, and this year's plan is already booked; revenue is weighted to the second half.", "**Technical services** could add a steadier, higher-margin income stream if the ₹200cr three-year target is met."],
        inputs: "**Steel plate** (carbon, alloy and stainless), bought mostly from AM/NS India and Jindal with 10–20% imported, plus tubes and forgings. Materials were 48% of sales in FY26.",
        costEffect: "**Not protected.** Contracts are almost all fixed-price, and steel can only be ordered after the customer approves the design 4–6 weeks later, so cost rises in between come out of the margin; freight is paid by customers because sales are made free on board at the Indian port. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (22% to 17%). **What happened:** India's alloy and stainless steel bar price index was flat (100 in Q1 FY24, 99 in Q1 FY27), yet the quarterly margin fell from 22.4% to 7.6%. The fall came mainly from low first-quarter revenue against fixed plant costs and from orders taken cheaply in last year's weak market; management also points to war-time input costs locked into fixed-price orders.",
        competitors: [
            { name: 'Larsen & Toubro Heavy Engineering, Godrej, ISGEC', note: 'Larger Indian process-equipment fabricators competing for refinery and fertiliser orders.' },
            { name: 'Lower-tier Indian fabricators', note: 'Win standard exchangers and vessels on price, which is why Anup is moving into niche products.' },
        ],
        position: "**One of India's leading heat-exchanger and pressure-vessel makers**, with ASME U, U2 and S stamps, nuclear work and approvals from process licensors.",
        money: "Net debt was ₹97cr at March 2026 (Screener) after a working-capital squeeze; the company says it was back to about ₹1cr of net cash by August (₹45cr of cash against ₹44cr of long-term debt). Capex should be ₹40–50cr a year (CARE). Operating cash was −₹7cr in FY25 and ₹2cr in FY26, and ₹197cr of March receivables was not yet billed. CARE rates it AA- but says a margin below 18% for long could lead to a downgrade, against FY27 guidance of about 15%. At a market value of about {mcap:The Anup Enginee|₹3,322cr} and a P/E of about {pe:The Anup Enginee|38.7}, the price needs about {need:The Anup Enginee|21}% a year against my ~18%, which is **{Label:The Anup Enginee|Full}**. Promoters hold **41%**, down from 43% in September 2023.",
        watch: ["Whether second-half margins lift the year to the guided 15%, and whether CARE holds its AA- rating.", "Operating cash turning positive, after −₹7cr in FY25 and ₹2cr in FY26, with the ₹197cr of unbilled work being billed.", "Execution of the ₹985cr order book and the technical-services target."],
        charts: industrialsProcessCharts['The Anup Enginee'],
    },
    {
        company: 'Kilburn Engg.',
        inShort: ["**A maker of custom industrial dryers and heat-recovery systems**, and a qualified supplier of nuclear-plant drying equipment.", "**Good:** a 23% margin in FY26, a nuclear approval that is hard to copy, and ₹90cr of borrowings now covered by ₹97cr of warrant money received in April–May 2026. **Bad:** the FY27 sales and margin targets were cut within a quarter, orders are far behind plan, customers pay slowly, operating cash flow was negative in FY25 and FY26, and two subsidiaries carry audit remarks.", "**Verdict: wait.** A good niche, but orders must arrive, cash must follow and the audit remarks must be cleared before I would buy."],
        tagline: "Custom drying systems, nuclear process equipment, waste-heat recovery (ME Energy) and radio-frequency drying and sheet-metal work (Monga Strayfield).",
        revenue: '₹629cr (FY26, consolidated)',
        products: [
            { name: 'Drying systems (Kilburn)', text: "Rotary dryers, coolers, kilns, calciners and solvent-recovery units built to order for fertiliser, carbon black, soda ash, chemicals, tea and pharma plants. This is the original business and where it is the market leader." },
            { name: 'Nuclear equipment', text: "Process equipment for the Nuclear Power Corporation (NPCIL) and the Heavy Water Board. Commissioning and approvals on these jobs take longer than on private orders." },
            { name: 'Waste-heat recovery (ME Energy)', text: "Systems that capture hot exhaust gas from cement, steel and ferroalloy plants and turn it into useful heat or power, plus hot-air generators. A Bhutan ferroalloy project was its entry into that industry." },
            { name: 'RF drying and sheet metal (Monga Strayfield)', text: "Radio-frequency dryers for textiles and food, and a sheet-metal unit making storage and rack equipment for data centres, which is being expanded." },
        ],
        revenueText: "Revenue comes from one-off engineered projects, recognised as drawings, inspections and dispatches are completed, so it is lumpy. **The company does not split revenue by business**; it reports only group figures because the three companies sell each other's products. Management expects FY27 to be **heavily weighted to the second half**. Screener has only three years of consolidated figures (FY24 to FY26), because the group took its present shape through recent acquisitions.",
        customers: ["**Fertiliser, chemical and carbon-black plants**, often through licensors and EPC contractors such as Casale; fertiliser is where it sees most orders now.", "**NPCIL and the Heavy Water Board** for nuclear equipment, and **cement, steel and ferroalloy makers** for waste-heat recovery.", "**Export customers**, including a large order for Morocco; it has no Middle East orders in hand, though two large inquiries there stalled when the war began."],
        difficulty: { level: 'High', text: "Each dryer or heat-recovery system is designed for one plant's material and process, and nuclear work needs a vendor approval that takes new entrants years to earn. Once a design is locked into a project, the customer rarely switches supplier." },
        moat: "Process know-how in drying and its approved-vendor status with NPCIL, where Lloyds Engineering is named as a main rival, keep most competitors out. The weakness is that every sale is a project, so customers can push revenue back simply by delaying drawing approvals or site readiness.",
        salesDrivers: ["**Fertiliser and chemical plant building**: new fertiliser capacity is its fastest-moving source of orders, and it is tying up with EPC contractors in fertiliser and nuclear.", "**Nuclear power**: long-cycle NPCIL and Heavy Water Board jobs give steady work, but slow commissioning is one reason FY27 revenue was cut from ₹750–800cr to about ₹700cr.", "**Steel, ferroalloy and cement expansion** for ME Energy's waste-heat systems, where inquiries are rising.", "**Data-centre build-out** for Monga Strayfield's sheet-metal racks, a newer and possibly large opportunity that management has not yet sized.", "**Order conversion**: the order book was ₹485cr at June 2026, with ₹190cr won so far in FY27 against a target of ₹800cr; an investor on the call asked management to stop quoting its ₹4,000cr inquiry list."],
        inputs: "**Steel plate and sheet** (carbon and stainless) for fabricated vessels, drums and ducting, plus bought-in motors, burners, fans and instruments. Materials were 43% of sales in FY26.",
        costEffect: "**Partly protected.** Contracts are fixed-price, but it books about 80% of the raw material within 48–72 hours of an order, and asks customers to pay for price rises caused by their own delays. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (23% to 19%). **What happened:** India's hot-rolled steel price index was flat (100 in Q4 FY24, 101 in Q1 FY27), yet the margin fell from 25.4% to 17.9%. The cause was a low-revenue quarter after customers delayed projects, spread over the same fixed costs, not steel; the company's own figure for Q1 FY27 was 20.1%.",
        competitors: [{ name: 'Lloyds Engineering Works', note: 'Named by management as a major competitor in nuclear equipment.' }, { name: 'Thermax', note: 'Much larger Indian rival in waste-heat recovery and process heating.' }, { name: 'GEA, Andritz', note: 'Global process-equipment groups that also sell industrial drying systems.' }],
        position: "**A leader in industrial dryers for Indian fertiliser and chemical plants**, and a qualified supplier in its nuclear niche.",
        money: "Screener shows net debt of **₹23cr** at March 2026; after receiving about ₹97cr of balance warrant money in April–May 2026 (30.4 lakh warrants issued at ₹425, promoters among the holders), the company says it is now net debt-free and has finished raising equity. Capacity expansions at Saravali and ME Energy's Pune plant are due by October 2026, with a sheet-metal expansion at Monga Strayfield to follow. Operating cash flow was negative in FY25 and FY26 as unpaid bills grew (debtor days rose to 117 and working-capital days to 184 in FY26, Screener). Its promoter company charges a 2% annual fee to guarantee the group's loans, and approval was sought to raise that guarantee to ₹115cr; the auditors of two subsidiaries noted bank stock statements that did not match the books and late statutory dues. Promoters hold **44.54%**, down from 53.9% in September 2023.",
        watch: ["Second-half revenue reaching the ₹700cr FY27 target.", "Order wins toward ₹800cr, especially fertiliser and nuclear.", "Unpaid bills coming down and cash flow turning positive.", "The promoter's 2% loan-guarantee fee and the subsidiaries' audit remarks being cleaned up."],
        charts: industrialsProcessCharts['Kilburn Engg.'],
    },
    {
        company: 'Praj Industries',
        inShort: ["**India's leading ethanol and biofuel plant technology company**, which designs and builds distilleries, water-treatment systems and process equipment worldwide.", "**Good:** it owns its process technology, has a ₹4,460cr order book (September 2026) and ₹533cr of cash, and is winning abroad (a large Brazil plant) and in data-centre modules. **Bad:** new ethanol plant orders in India have stopped now that the 20% blending target is met, the margin has fallen to 3–6%, and the Mangalore yard has ₹183cr of losses funded by ₹291cr of parent loans.", "**Verdict: wait.** Wait for a blending decision beyond 20% or for the new businesses to lift margins."],
        tagline: "Process technology and engineering for ethanol, biogas and sustainable aviation fuel plants, plus high-purity water, wastewater and modular fabrication.",
        revenue: '₹3,168cr (FY26, consolidated)',
        products: [
            { name: 'Bioenergy', text: "Technology and equipment for grain and sugarcane ethanol plants, compressed biogas, bio-isobutanol for diesel blending and alcohol-to-jet aviation fuel, plus upgrades such as corn-oil recovery and services for more than 1,000 installed plants." },
            { name: 'Engineering (including Praj GenX)', text: "Critical process equipment and modular skids built at a large Mangalore plant, now including cooling and server-hall modules for a global data-centre builder." },
            { name: 'HiPurity and water', text: "Ultra-pure water systems for pharma and semiconductor plants, and zero-liquid-discharge systems that recycle all factory wastewater." },
        ],
        revenueText: "In Q1 FY27 **bioenergy was 66% of revenue**, engineering 22% and high-purity water 12%. **Exports were 25%**, mostly lower-margin African projects. The order book of ₹4,590cr at June 2026 is 63% domestic, but international orders were 40–43% of the quarter's new orders, so the export share of revenue should rise.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company)', parts: [{ label: 'Bioenergy', share: 66 }, { label: 'Engineering', share: 22 }, { label: 'HiPurity and water', share: 12 }] },
            { caption: 'Revenue by region, Q1 FY27 (company)', parts: [{ label: 'India', share: 75 }, { label: 'Exports', share: 25 }] },
        ],
        customers: ["**Sugar mills, distilleries and grain-ethanol producers** in India, now mainly in ethanol-short states such as Tamil Nadu and Assam, and oil companies building biofuel plants.", "**International biofuel investors**, such as the buyer of an 800-kilolitre-a-day corn ethanol plant in Brazil, and interest from South-East Asia, Africa and Latin America.", "**Pharma, chemical, semiconductor and data-centre builders** for water systems and modular equipment, including a US$50m minimum framework over 2.5 years."],
        difficulty: { level: 'High', text: "Turning grain, cane or waste into fuel at high yields needs proprietary process design, fermentation know-how and plant experience that took decades to build. The fabricated equipment itself is less special; Praj's share of a plant's cost is about 30% for technology alone and 50–60% with critical equipment." },
        moat: "It owns the process technology and has a huge installed base that buys services and upgrades, so customers stay. The weakness is that demand for new plants depends on government blending policy, and when the target is met, orders stop.",
        salesDrivers: ["**Ethanol blending policy**: India reached 20% blending with about 2,000 crore litres of capacity against about 1,100 crore litres of demand, so new greenfield orders wait for a move to 27% or 30%.", "**Overseas biofuel**: the Brazil corn plant, US 15% blending and new mandates in several emerging countries.", "**Compressed biogas**: the government's ₹23,000cr GOBARdhan scheme runs from FY27 to FY36 and aims to raise biogas output about tenfold.", "**New fuels**: a first commercial bio-isobutanol plant (a 2% diesel blend could be a ₹3,000cr opportunity) and engineering for an aviation-fuel plant.", "**Data centres and semiconductors**: the GenX framework should bring the Mangalore plant to break-even, and it won its first ultra-pure water order for a chip plant."],
        inputs: "**Stainless and carbon steel, pumps, heat exchangers and other bought-in equipment** for plants, plus site construction costs. Materials were 51% of sales in FY26.",
        costEffect: "**Partly protected.** Most projects are fixed-price, so steel increases during execution hit its margin, and management says it is taking advance steps against that. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (5% to about zero). **What happened:** India's alloy and stainless steel bar price index was flat (100 in Q1 FY24, 99 in Q1 FY27), yet the margin fell from 10.2% to 4.2%. The cause was the halt in Indian ethanol plant orders, projects stretched by customers' funding problems, unused capacity at Mangalore and low-margin African exports, not steel.",
        competitors: [{ name: 'KBK Chem-Engineering, Spray Engineering Devices', note: 'Indian builders of distillery and ethanol plants, usually on price.' }, { name: 'ICM, Vogelbusch, Katzen', note: 'Global ethanol technology firms, stronger in the US and Europe.' }, { name: 'Thermax, Ion Exchange, VA Tech Wabag', note: 'Rivals in water treatment and zero-liquid-discharge systems.' }],
        position: "**India's leading ethanol-plant technology supplier**, with more than 1,000 plants installed worldwide.",
        money: "Screener shows **₹449cr of net cash** at March 2026, counting ₹418cr of investments; the company put its cash at ₹616cr. The large Mangalore plant (Praj GenX) is already built, so the task now is filling it: the parent has lent it ₹291cr, its accumulated losses are ₹183cr, and the auditor made the investment a key audit matter. It paid a 180% dividend (₹3.60 a share), about 2.8 times FY26 profit, from its cash. No equity has been raised. Promoters hold **32.81%**, unchanged since 2023.",
        watch: ["A government decision on blending beyond 20%.", "GenX reaching break-even on the data-centre work.", "Margin recovering as more export orders are executed."],
        charts: industrialsProcessCharts['Praj Industries'],
    },
    {
        company: 'HLE Glascoat',
        inShort: ["**India's second-largest maker of glass-lined reactors**, plus filters, dryers and heat exchangers for pharma and chemical plants, with two German subsidiaries.", "**Good:** filtration and drying grew 51% in FY26, and German Thaletec products now make 20% of its Indian glass-lined sales. **Bad:** Indian glass-lined revenue has been flat for four years as prices fell, the Omeras purchase is loss-making, a 16% margin promise was missed, and the auditor flagged payments to and loans from key managers.", "**Verdict: pass.** The core product has lost pricing power, the margin target has already slipped once, and no Q1 FY27 call was held to explain it."],
        tagline: "Glass-lined reactors and storage (India and Thaletec, Germany), filtration and drying equipment, heat exchangers, and glass-fused steel tanks (Omeras).",
        revenue: '₹1,353cr (FY26, consolidated)',
        products: [
            { name: 'Glass-lined equipment', text: "Steel reactors and vessels lined with glass so corrosive chemicals do not attack them, made in India and by Thaletec in Germany; Thaletec's premium range is now sold in India too." },
            { name: 'Filtration and drying', text: "Agitated nutsche filters, filter-dryers and vacuum dryers for pharma and chemical plants; its fastest-growing and best business, up 51% in FY26." },
            { name: 'Heat transfer (Kinam)', text: "Heat exchangers, now breaking into oil, gas and petrochemical plants; the plant runs at 70–75% of capacity." },
            { name: 'Omeras', text: "A German maker of glass-fused steel tanks for biogas, wastewater and water storage, and architectural facades, bought in FY26; an Indian plant is due by the end of FY27." },
        ],
        revenueText: "Glass-lined equipment made **₹676cr in FY26, half of revenue**: about ₹345cr from Thaletec, ₹242cr from India and ₹89cr from Omeras. The other half came from filtration, drying and heat transfer, which the company did not split in its FY26 call. Exports from India are only 5–7% of the Indian business.",
        mixes: [
            { caption: 'Revenue by business, FY26 (company)', parts: [{ label: 'Filtration, drying and heat transfer', share: 50 }, { label: 'Thaletec glass-lined (Germany)', share: 25 }, { label: 'Indian glass-lined', share: 18 }, { label: 'Omeras', share: 7 }], note: 'Glass-lined figures as given on the FY26 call; the rest is the balance of group revenue.' },
        ],
        customers: ["**Pharma API and CDMO makers**, the main source of demand now, including large new capacity in Hyderabad and onshoring in the US and Europe.", "**Agrochemical and specialty chemical companies**, whose spending remains weak.", "**Oil, gas and petrochemical plants** for heat exchangers, and **biogas, wastewater and semiconductor water** projects for Omeras."],
        difficulty: { level: 'Medium', text: "Firing a durable glass lining onto steel and building sealed filter-dryers takes skill and furnace know-how, but several Indian and Chinese makers can now do standard reactors well enough to compete on price." },
        moat: "A broad range, a large installed base and premium German brands give it an edge with pharma buyers. The weakness is the standard Indian reactor: units shipped rose 30–40% in four years, but revenue stayed flat because the price per unit fell.",
        salesDrivers: ["**Pharma and CDMO capacity building**, the strongest demand today; customers have been deferring decisions since February because of the Middle East conflict.", "**Chemical and agrochemical capex**, still subdued.", "**Omeras turnaround**: it needs ₹45–50cr of revenue a quarter (about ₹200–225cr a year) to break even; it did ₹43–44cr in Q4 FY26 with a ₹78–79cr order book.", "**Heat exchangers**: guided to grow 15–20% a year for two years, with new capacity planned. On 10 November 2026 its subsidiary Kinam won a $42–48m (about ₹375–425cr) order for heat exchangers for a North American long-duration energy-storage project, about 30% of a year's group sales, to be delivered through November 2028.", "**Targets**: more than ₹2,000cr of revenue in two years and a 14–15% margin, or 16% excluding Omeras."],
        inputs: "**Steel plate and forgings, special glass (frit) and gas to fire the glass-lining furnaces**, plus motors, seals and stainless steel for filters and dryers. Materials were 47% of sales in FY26.",
        costEffect: "**Partly passed on.** Equipment is priced order by order, and management says it passed on most of the recent rise in European gas prices, but competition limits price increases on standard reactors. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (10% to 5%). **What happened:** India's hot-rolled steel price index fell (100 in Q1 FY24 to 94 in Q1 FY27, and as low as 84 in between), yet the margin fell from 11.8% to 7.0%. Cheaper steel did not help because the price per reactor fell faster and Omeras lost ₹15.3cr at the operating level in FY26.",
        competitors: [{ name: 'GMM Pfaudler', note: 'The market leader, with about half the Indian glass-lined market and its own glass technology.' }, { name: 'Standard Glass (Standard Engineering Technology)', note: 'Fast-growing third player in glass-lined and pharma process equipment.' }, { name: 'Chinese and smaller Indian makers', note: 'Push down prices of standard glass-lined reactors.' }],
        position: "**Number two in Indian glass-lined equipment** behind GMM Pfaudler, and a leader in Indian pharma filtration and drying equipment.",
        money: "Screener shows net debt of **₹290cr** at March 2026, down from ₹345cr in FY24 as operating cash flow improved; borrowings of ₹348cr less ₹34cr of cash give about ₹314cr, and the sources read do not explain the ₹24cr gap. Planned spending includes the Omeras plant in India and more heat-exchanger capacity. FY26 carried ₹4.6cr of acquisition costs. It paid a 55% dividend. The auditor made related-party transactions a key audit matter: key managers were paid ₹12.8cr in FY26 (about 23% of profit) and lent the company ₹11.1cr during the year. No Q1 FY27 results call was held. Promoters hold **65.64%**, down slightly from 66.69% in September 2023.",
        watch: ["Omeras reaching ₹45–50cr of quarterly revenue and breaking even.", "Margin moving toward the 14–15% target after 7% in Q1 FY27.", "Price per unit in Indian glass-lined equipment."],
        charts: industrialsProcessCharts['HLE Glascoat'],
    },
    {
        company: 'Standard Glass',
        inShort: ["**Hyderabad maker of glass-lined reactors, filters and dryers for pharma and chemical plants**, recently renamed Standard Engineering Technology (formerly Standard Glass Lining Technology) and buying into a data-centre equipment business.", "**Good:** revenue up 43% last quarter (filed; 41% on the company's total-income measure) and a ₹1,400cr core order book, half from contract drug makers. **Bad:** the growth story changes every quarter, management said in May that working capital had improved to 150 days and in August that it had been 320, purchases from promoter-family firms rose sharply, and free cash flow has been negative every year.", "**Verdict: avoid.** Too many moving parts, and too little consistency in what management says."],
        tagline: "Pharma and chemical process-equipment maker (glass-lined reactors, filters, dryers) branching into Japanese glass technology and AI data-centre power and cooling equipment.",
        revenue: '₹774cr (FY26, consolidated)',
        products: [
            { name: 'Glass-lined reactors', text: "Steel vessels coated inside with glass so that corrosive chemicals and drug ingredients can be made without contamination; the core product." },
            { name: 'Filters, dryers and process equipment', text: "Agitated nutsche filters, dryers and about 180 product types for pharma and chemical plants, plus turnkey plant execution." },
            { name: 'GL Hakko products', text: "A 19.19% stake in Japan's GL Hakko for ₹71.5cr, with rights to go to 51%. It brings glass-lined heat exchangers (80% made in Japan, finished in India, at roughly half today's price), conductive glass and low-leaching glass for semiconductor-grade chemicals; the key glass know-how stays in Japan." },
            { name: 'GScale data-centre equipment', text: "Buying up to 51% of GScale Energy, which will make power and cooling skids and power-distribution units for data centres and offer design-and-build. ₹250cr of FY27 revenue is guided, though no firm orders have been named." },
        ],
        revenueText: "Almost all revenue today is **glass-lined and process equipment sold in India**; exports were only 2% in Q1 FY27, and a US$3.5m export order has slipped twice. About **half the ₹1,400cr core order book comes from CDMOs** (contract drug makers). Management guides ₹1,200cr of core revenue plus ₹250cr from GScale in FY27. The company does not split revenue by product.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'India', share: 98 }, { label: 'Exports', share: 2 }] },
            { caption: 'Core order book by customer, June 2026 (management, approximate)', parts: [{ label: 'CDMOs', share: 50 }, { label: 'Other pharma and chemical companies', share: 50 }] },
        ],
        customers: ["**Contract drug makers (CDMOs)** and other pharma companies adding capacity across India; about half the order book.", "**Specialty-chemical makers**, including one large first order for semiconductor-grade glass-lined equipment.", "**Data-centre operators**: five prospects (three global, two Indian) for GScale, some at letter-of-intent stage, none with a named firm order."],
        difficulty: { level: 'Medium', text: "Lining steel vessels with glass needs furnace know-how and tight quality control, but several Indian firms do it and prices are falling. The advanced glass (conductive and low-leaching) is Japanese and stays in Japan. The data-centre skids largely integrate components from Schneider, ABB and Eaton." },
        moat: "Long relationships with pharma companies and a wide product range keep it on bidder lists. But it is the third player behind a leader with about half the market, prices are under pressure, and its new businesses rely on partners' technology.",
        salesDrivers: ["**Pharma and CDMO capex**: drug makers adding capacity are the main source of orders; core growth is guided at 40-50% for FY27.", "**New glass products**: heat exchangers to replace graphite units (a ₹2,000cr Indian market by management's estimate) and semiconductor-grade glass.", "**Data-centre build-out**: management expects India's data-centre capacity to grow from about 1.8 GW to 10.2 GW in five years; GScale's factory is due to start in November 2026.", "**Exports**: still 2% of sales; a delayed export order and higher shipping costs have held them back.", "**A changing story**: last quarter the next engine was pre-cast pharma buildings; this quarter it is data centres."],
        inputs: "**Steel plate** (carbon and stainless) for vessels, glass for lining, plus motors, gearboxes and seals; furnace fuel and power are also a large cost. Materials were 54% of sales in FY26.",
        costEffect: "**Partly passed on.** Equipment is priced order by order, so costs can be re-priced on new orders but not on the existing book; mechanisation has cut its use of consumables. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (15% to 10%). **What happened:** India's hot-rolled steel price index was flat (100 to 97 from Q3 FY24) and so was the quarterly margin (16.7% to 16.1%). The swings in between (from 20.6% down to 14.1%) came from order mix and fast hiring, not steel.",
        competitors: [
            { name: 'GMM Pfaudler', note: 'World leader in glass-lined equipment, with about half the Indian market and its own technology.' },
            { name: 'HLE Glascoat', note: 'The other large Indian maker, with German Thaletec technology; also facing falling prices.' },
            { name: 'Data-centre equipment suppliers', note: 'Established global and Indian makers of power and cooling equipment; GScale partners with Schneider, ABB and Eaton rather than making core parts itself.' },
        ],
        position: "**The third-largest Indian maker of glass-lined equipment**, behind GMM Pfaudler and HLE Glascoat, strongest with pharma and CDMO customers.",
        money: "Net cash of about ₹32cr on Screener at March 2026, after its January 2025 IPO; the company has cited gross cash of about ₹105cr after the deal payments. But cash is tied up for a long time: management first said FY26 working capital was 150 days, then said 320 (Screener shows 335), and now targets below 200 days. It paid about ₹71cr for the GL Hakko stake, and the GScale investment is about ₹500cr, on which management expects about a 20% return. Promoters hold **60.5%**, roughly unchanged since listing; an earlier report of a promoter pledge could not be confirmed in the filings. Purchases from promoter-family firms (Asahi Glass Plant, Reliability Engineering and others) rose sharply in FY26, and a ₹1.65cr tax reassessment arises from a search on the Hetero group.",
        watch: ["Firm, named data-centre orders for GScale.", "Working capital below 200 days by September 2026, as promised; the Q2 results will show.", "Purchases from promoter-family firms, which rose sharply in FY26."],
        charts: industrialsProcessCharts['Standard Glass'],
    },
    {
        "company": "Fabtech Technologies",
        "inShort": [
            "**Designs and builds whole medicine factories** (cleanrooms, air handling, purified water and process equipment) for drug and vaccine makers and governments, almost entirely abroad: the Gulf, Saudi Arabia and Africa.",
            "**Good:** a ₹900cr+ order book (over 2x FY26 revenue) with another ₹800–850cr being worked on, about ₹149cr of net cash after its October 2025 IPO, and a P/E near 19. **Bad:** it has turned almost none of its profit into cash (₹7cr of operating cash on ₹168cr of operating profit over FY22–FY26), customers take about 215 days to pay, the operating margin fell from 15% to 9% in two years, about 40% of pre-tax profit is other income, it buys heavily from promoter-group firms, and its biggest market is in a war zone. Q2 FY27 revenue fell 24% to ₹92cr (H1 ₹167cr against ₹189cr), so the 20–25% FY27 growth guide now needs H2 up about 50%; management kept an 8–9% profit margin and talks of 25–30% a year over three to five years.",
            "**Verdict: wait.** Cheap on paper, but the profit has not been turning into cash and the related-party web is large; it moves up only if FY27 delivers the guided growth and margin with positive operating cash."
        ],
        "tagline": "A Mumbai-based turnkey builder of pharma, vaccine and biotech plants for emerging markets, listed in October 2025, that owns stakes in group firms making cleanroom, air and water systems.",
        "revenue": "₹411cr (FY26, consolidated)",
        "products": [
            {
                "name": "Turnkey plants",
                "text": "Designs, engineers, supplies, installs and validates complete medicine factories, from tablets to IV solutions, injectables, oncology drugs and vaccines, as a single point of responsibility. **76% of FY25 revenue** (92% in FY23); projects run 12–36 months once the client's civil work is ready."
            },
            {
                "name": "Standalone supply and installation",
                "text": "Equipment supply and installation for clients who have their own designs: **24% of FY25 revenue**, up from 8% in FY23."
            },
            {
                "name": "New lines",
                "text": "Animal-health vaccine plants (a ₹31cr Botswana order in Q1 FY27 and a ~$7m Saudi plant), pre-engineered buildings (about ₹400cr bid), and civil and building-services work in Saudi Arabia through a 51%-owned local contractor; it has won its first civil order there."
            }
        ],
        "revenueText": "Revenue is booked on shipment and milestones, so it is **heavily weighted to the second half** (Q4 FY26 was ₹159cr, Q3 ₹63cr with a loss). By country, **the UAE (₹127cr, 31%) and Saudi Arabia (₹83cr, 20%) led FY26**, with Kenya at ₹43cr; in Q1 FY27 Saudi grew 130% while the UAE fell on the war. The company says about 78% of revenue comes from the Middle East, Gulf and nearby regions. Customers change every year: **the top five were 56% of FY25 revenue** and repeat customers only about 10% in Q1 FY27.",
        "mixes": [
            {
                "caption": "Revenue by country, FY25 (prospectus)",
                "parts": [
                    {
                        "label": "Saudi Arabia",
                        "share": 29
                    },
                    {
                        "label": "UAE",
                        "share": 19
                    },
                    {
                        "label": "India",
                        "share": 14
                    },
                    {
                        "label": "Kenya",
                        "share": 4
                    },
                    {
                        "label": "Iraq",
                        "share": 4
                    },
                    {
                        "label": "Algeria",
                        "share": 3
                    },
                    {
                        "label": "Rest of world",
                        "share": 27
                    }
                ]
            },
            {
                "caption": "Revenue by country, Q1 FY27 (company presentation)",
                "parts": [
                    {
                        "label": "Rest of world",
                        "share": 29
                    },
                    {
                        "label": "UAE",
                        "share": 28
                    },
                    {
                        "label": "Saudi Arabia",
                        "share": 18
                    },
                    {
                        "label": "India",
                        "share": 10
                    },
                    {
                        "label": "Kenya",
                        "share": 10
                    },
                    {
                        "label": "Morocco",
                        "share": 5
                    }
                ],
                "note": "Approximate, from the company's slide. The call said Morocco and Kenya made ₹27.9cr together, more than the 14% this slide shows; the figures do not reconcile."
            }
        ],
        "customers": [
            "**Drug and vaccine makers in the Gulf, Saudi Arabia, Africa and Asia**: in FY25 Himalaya (14% of revenue), Qomel Company Arabia (14%) and Massoun Darou (11%) each passed 10%; in FY24 Boston Oncology Arabia (17%) and Premier Food Industries (16%) did.",
            "**Governments and national vaccine institutes**, often funded by development banks, such as the Botswana Vaccine Institute and an IV-solution plant for the Government of Djibouti.",
            "**The promoters' older firm**, Fabtech Technologies International, bought 12% of FY24 revenue; none in FY25."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Building a plant that passes US FDA or EU inspection needs design skill and a track record of approved plants, which it has in the Gulf. But much of the hardware is bought in, partly from promoter-group firms, and there are many cleanroom and HVAC contractors in India and Europe."
        },
        "moat": "Its reference plants (it claims the first or largest of several plant types in Saudi Arabia, the UAE, Algeria and Egypt) and local companies in the UAE and Saudi Arabia help it win where local presence is now a tender condition. The weakness: every job is a one-off project, repeat business is small, and clients can delay orders whenever money or politics shift.",
        "salesDrivers": [
            "**Order conversion**: ₹900cr+ of orders, ₹9,300cr of enquiries and ₹3,800cr of 'hot leads' (July 2026); Q1 FY27 intake was only ₹96.5cr as large orders slipped on the war, though management says none was cancelled.",
            "**Medicine self-reliance in emerging markets**: post-COVID plant building in Saudi Arabia (Vision 2030 local-content rules), Africa (often donor-funded) and South-East Asia.",
            "**Guidance**: FY27 revenue up 20–25% organically (trimmed from ~25% in April) with a 9–11% net margin, and ₹1,000cr+ of revenue by 2030; Q2 'steady', the second half stronger.",
            "**Acquisitions**: a 51% Saudi contractor done; an Italian and a second Saudi acquisition targeted before March 2027.",
            "**Geopolitics**: the UAE business is hit by the Middle East war; about ₹20–22cr of goods were stuck at port at June."
        ],
        "inputs": "**Bought-in cleanroom panels, air-handling units, process and water equipment, steel and installation labour**, partly from promoter-group makers. Materials (purchases and stock change) were 59% of sales in FY26 and other expenses, mostly site execution and freight, 22%.",
        "costEffect": "**Partly protected.** Contracts carry a clause to pass on raw-material rises above 5%, and quotes are valid only two to three weeks, but management admits it does not always pass costs on. **Rule of thumb:** a 10% rise in material costs not passed on would wipe out most of the margin (about 6 points off FY26's 9%). **What happened:** in FY26 material costs rose about 33% and execution costs about 43% (war-time remobilisation and freight, per management), and the operating margin fell from 12% to 9%; Q1 FY27 recovered to a 46.7% contribution margin on a better country mix.",
        "competitors": [
            {
                "name": "European turnkey pharma engineers",
                "note": "Management says it competes with Europeans, not Asian firms, on large regulated plants abroad."
            },
            {
                "name": "Nicomac Taikisha, Integrated Cleanroom Technologies, Hvaxs, Lotus Technicals",
                "note": "Indian cleanroom and HVAC contractors named in the prospectus as peers; none is a close listed match."
            },
            {
                "name": "Fabtech Technologies Cleanrooms",
                "note": "A separately listed promoter-group company that sells cleanrooms in India and supplies Fabtech's panels."
            }
        ],
        "position": "**A small specialist** (₹411cr revenue) that says it has delivered 500+ projects in 62+ countries; no market share is disclosed.",
        "money": "**About ₹149cr of net cash** at March 2026 (cash, bank deposits and liquid investments of ₹218cr against ₹70cr of borrowings and leases), after a ₹230cr IPO at ₹191 in October 2025: ₹127cr was for working capital, ₹30cr for acquisitions and the rest general purposes. **Operating cash was ₹0.5cr in FY26 and −₹36cr in FY25**; customers owed ₹204cr at March (about 215 debtor days on Screener), against about ₹110cr of customer advances. About ₹21cr of FY26's ₹48cr pre-tax profit was other income, and FY25 profit included an ₹18cr gain from selling part of TSA Process Equipments to Thermax; the rest of that stake is being sold for ₹14cr at a revised price (September 2026). A ₹24cr injection into the UAE subsidiary and an Egypt subsidiary are approved. CRISIL rates it BBB+/Stable (October 2025). At a market value of about {mcap:Fabtech Technologies|₹561cr} and a P/E of about {pe:Fabtech Technologies|11.6}, the shares are about a third below the IPO price. Promoters hold **69.03%** (September 2026); institutions hold under 3%.",
        "watch": [
            "H2 FY27 revenue up about 50% (needed for the 20–25% guide) as the ₹900cr order book moves into execution.",
            "Operating cash turning clearly positive and debtor days falling from about 215.",
            "The European (Italy) acquisition closing within six months, as now promised, and related-party purchases as a share of costs."
        ],
        charts: industrialsProcessCharts["Fabtech Technologies"],
    },
];

export const industrialsProcessBusinesses = { intro, profiles };
