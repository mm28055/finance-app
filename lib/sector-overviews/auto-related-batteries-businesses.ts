import { BusinessProfile, OverviewSection } from './types';
import { autoRelatedCharts } from './card-data/auto-related';

// Tab 2 of the Auto Related · Batteries and brand-led replacement note: what each company actually does.
// Revenue totals are the filed figures (Screener, consolidated for all three). Splits, capacities and
// customers come from the companies' latest calls, presentations, annual reports and rating reports;
// where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed consolidated figures; splits are from each company's latest call, presentation or annual report. The cost chart sets each company's margin against an Indian wholesale price index for its main input: **lead** for Exide and Amara Raja, and **polypropylene** for Studds, as a stand-in for the styrene-based plastics it actually buys. One caution on the numbers: **Exide's net cash on Screener counts about ₹5,100cr of HDFC Life shares** it owns; without them the group has a small net debt.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Three companies that sell branded products to vehicle owners as well as to vehicle makers, in two groups.",
        ],
        points: [
            {
                label: 'Helmets and riding accessories',
                text: "Studds makes about a quarter of India's two-wheeler helmets: a mass brand (Studds), a premium brand (SMK), helmets for foreign brands, and boxes, jackets and gloves. It sells mostly through distributors and its own brand outlets, with a fifth exported and a seventh sold to bike makers. **Plastics and wages set the margin**, and safety rules that push riders from cheap uncertified helmets to brands set the growth.",
            },
            {
                label: 'Lead-acid and lithium batteries',
                text: "Exide and Amara Raja (Amaron) between them dominate Indian lead-acid batteries for cars, bikes, home inverters, solar, telecom towers, railways and industry. **The replacement market, where a vehicle owner buys a new battery from a shop, earns more than supplying vehicle makers**, and lead is about 70% of material cost. Each is also spending thousands of crores on lithium-ion cell and storage plants that do not yet earn money, so both are really a mature, cash-generating business plus a loss-making start-up.",
            },
        ],
    },
    {
        heading: 'Five ways of earning',
        body: [
            "How each business earns decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**Replacement sales through shops**', 'Exide, Amara Raja, Studds', 'Brand list prices through dealers and brand outlets; the highest margin, and price rises stick within about a quarter', 'Dealers pay fairly quickly, but stock is held across the network: 98–120 days at the battery makers, 107 at Studds'],
                    ['**Supplies to vehicle makers**', 'Exide, Amara Raja, Studds', 'Contract prices; cost increases passed on with about a quarter’s lag, and small cuts asked for when costs fall. Today’s fitments become tomorrow’s replacement demand', 'Paid on the makers’ agreed terms; volumes follow vehicle sales, which face a high base from Q3 FY27'],
                    ['**Home, telecom and industrial batteries**', 'Exide, Amara Raja', 'Inverter and solar batteries sold through shops, and batteries for telecom towers, railways, data centres and power, often to large business buyers', 'Business customers accept price rises and pay more slowly than households'],
                    ['**Exports and private labels**', 'Studds (20% of sales), Amara Raja (about 12%), Exide (about 5%)', 'Dealer and brand orders in 70+ countries; SMK exports earn 30–35%', 'Longer: goods in transit and stock held abroad, such as Studds’ US warehouse'],
                    ['**Lithium packs, cells and storage**', 'Exide, Amara Raja', 'Small revenue at a loss today; storage systems earn 5–8%, and Amara Raja’s target at scale is a 10–11% margin', 'Heavy spending years ahead of sales; storage needs 90–100 days of working capital'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Studds Accessories',
        inShort: ["**India's largest two-wheeler helmet maker**, with about a quarter of the market, a mass brand (Studds), a premium brand (SMK) and exports to more than 70 countries.", "**Good:** debt-free, a 23% return on capital, and a new plant adding a third to capacity from October, paid for from its own cash. **Bad:** a plastics price spike cut the Q1 FY27 margin from 20% to 11.5% (company figure), weeks after management promised similar margins, and stock days have risen to 107, with the auditor flagging inventory valuation.", "**Verdict: follow.** The price fits my growth estimate if the margin recovers as promised; I want to see Q2 first, and stock days starting to fall."],
        tagline: "India's biggest helmet maker, selling Studds and SMK helmets through dealers, to bike makers and abroad.",
        revenue: '₹634cr (FY26, consolidated)',
        products: [
            { name: 'Studds helmets', text: "The mass and mid-price brand (₹925–4,195 on the label) and 74% of FY26 revenue. Its volumes grow only about 3% a year, and management puts its operating margin at about 17%." },
            { name: 'SMK helmets', text: "The premium brand (₹3,000–15,350), 16% of FY26 revenue. Volumes grew about 52% a year over FY24–FY26, and management puts its margin at about 27%, or 30–35% on exports." },
            { name: 'Private-label helmets', text: "Helmets made for foreign brands such as Daytona and O'Neal: 3% of FY26 revenue and 7% in Q1 FY27. Supplies to Decathlon start in October." },
            { name: 'Accessories', text: "Luggage boxes, riding jackets, gloves and bicycle helmets, 7% of FY26 revenue. Riding jackets and Bluetooth intercoms are expected to add ₹15–20cr in FY27." },
        ],
        revenueText: "Studds-brand helmets were **74% of FY26 revenue** and SMK 16%. By channel, **distributors and the company's own brand outlets sold 55%**, exports 20% (₹128.6cr, up 32%), bike makers 14%, and e-commerce and government canteens 11%. It sold 8.12 million helmets and boxes in FY26, about ₹780 of revenue each. The company reports a single business segment, so there are no official margins by brand.",
        mixes: [
            { caption: 'Revenue by brand, FY26 (annual report)', parts: [{ label: 'Studds helmets', share: 74 }, { label: 'SMK helmets', share: 16 }, { label: 'Private labels', share: 3 }, { label: 'Accessories', share: 7 }] },
            { caption: 'Revenue by channel, FY26 (annual report)', parts: [{ label: 'Distributors and brand outlets', share: 55 }, { label: 'Exports', share: 20 }, { label: 'Bike makers', share: 14 }, { label: 'E-commerce, canteens and other', share: 11 }] },
        ],
        customers: ["**Riders buying in shops**: distributors and exclusive brand outlets sold 55% of FY26 revenue. A 9% list-price rise in April cost no volume (up 8.5% in Q1), and management says it has never cut its list prices.", "**Bike makers** Hero, Honda, Suzuki, Royal Enfield and Yamaha, which buy helmets to sell with new bikes (14% of sales). All but one accepted the April price rise by August, but they may ask for small cuts if plastics prices fall.", "**Overseas dealers and brands** in more than 70 countries (20% of sales), including private labels for Daytona and O'Neal, with Decathlon and a new Italian subsidiary starting in October."],
        difficulty: { level: 'Medium', text: "A helmet is a moulded plastic shell with a foam liner, but every market needs its own safety certification (European ECE 22.06, Indian IS 4151, plus local approvals in Brazil and Indonesia), and CARE calls bike-maker approval ‘time-consuming and costly’. Studds makes its own moulds, foam liners, decals and paint and runs its own certified test lab. Cheap, often uncertified helmets still hold 20–30% of the market by management's estimate." },
        moat: "Scale, a two-brand ladder from mass to premium, certifications for many countries and a national dealer network make it the default helmet in many Indian shops, and tighter safety rules push riders from cheap helmets towards brands like it. The weakness: plastics and wages set the margin, and its price rises follow costs only with a lag.",
        salesDrivers: ["**Two-wheeler sales**: new bikes bring bike-maker orders and new riders. The GST cut lifted volumes, but ICRA expects only 3–5% two-wheeler growth in FY27 on a high base from Q3.", "**Safety rules and formalisation**: management expects cheap unorganised helmets to fall from 20–30% of the market to 10–15% in two to three years, and a proposal to sell two certified helmets with every new bike would widen the market. The industry report in its annual report sees 26 million helmets in 2024 growing about 6% a year to 35 million by 2029.", "**Exports and premium helmets**: exports are guided to 23–24% of sales in FY27 and about 30% in two to three years, and SMK exports earn 30–35%. Decathlon and Italy start in October; the Italian unit will lose about ₹2–2.5cr in FY27.", "**A new plant**: plants ran at 81–89%, so the space is needed. Facility V in Faridabad costs about ₹160cr in two phases of 1.5 million units each, taking capacity from about 9.5 million to 12.5 million a year; phase 1 starts in October 2026 and phase 2 over the following 15–18 months. ₹76cr had been spent by June.", "**Guidance**: FY27 revenue growth in the ‘high teens’ (about 10% volume and 7–8% price) and ‘mid to high teens’ in FY28. Q1 FY27 grew 13.7%."],
        inputs: "**Styrene-based plastics** (ABS for shells, EPS foam for liners) are about 36% of direct material cost, plus about 15% of indirect cost through paint; CARE puts oil-linked inputs at about half of raw materials, and India imports about 98% of its styrene through the Gulf. Visors, straps, fabrics and packaging make up the rest. Staff are another 10% of sales, and Haryana's minimum wage rose about 35% from April. Materials were 40% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** List prices went up about 9% from 1 April with no loss of volume, but prices could not rise as fast as plastics did, so the gross margin fell about 6 points in Q1 FY27; the wage rise is permanent and costs about 2 points. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (19% to 15%). **What happened:** India's polypropylene price index, used here as a stand-in for its plastics, was flat for almost two years and then jumped to 117 in Q1 FY27 (100 in Q2 FY25); the operating margin on Screener's figures went from 18.6% to 11.8% over the same span (the company's own Q1 FY27 figure is 11.5%), almost all of it in that one quarter. The company's own styrene basket rose from about ₹135/kg to a peak of about ₹225/kg in April and was still about ₹185/kg in August. Management expects 14–15% in Q2 and 18–20% by Q4 FY27 if raw material prices stay stable.",
        competitors: [
            { name: 'Steelbird', note: 'The nearest organised rival in mass and mid-price helmets, named by CARE.' },
            { name: 'Vega', note: 'The other large organised helmet brand; with Studds and Steelbird it dominates the organised market.' },
            { name: 'Unorganised makers', note: 'Cheap, often uncertified helmets, still 20–30% of the market by management’s estimate; this is the share Studds is taking.' },
        ],
        position: "**India's largest helmet maker, with about 25% of the market** (CARE), selling about 8 million helmets and boxes a year; with Steelbird and Vega it dominates the organised market.",
        money: "Net cash of about **₹77cr** (Screener); borrowings are only ₹8cr, and CARE withdrew its rating in April at the company's request after bank lines were closed. The ₹160cr plant is paid for from its own cash (₹48cr of capex in FY26, ₹7.5cr in Q1 FY27, ₹31cr planned for FY28). The November 2025 listing was entirely a sale by existing shareholders, so the company raised no money. Operating cash was ₹86cr in FY26 and free cash ₹40cr, but stock days rose from 62 to 107 in two years. No pledges disclosed. Promoters hold **61.75%**, unchanged since listing.",
        watch: ["Q2 FY27 margin of 14–15%, and 18–20% by Q4.", "Facility V, Decathlon and Italy all starting in October.", "Stock days coming back below 100."],
        charts: autoRelatedCharts['Studds Accessories'],
    },
    {
        company: 'Amara Raja Energy',
        inShort: ["**India's second-largest lead-acid battery maker (Amaron)**, selling batteries for cars, bikes, inverters, telecom towers and industry, and building a lithium pack, storage and cell business.", "**Good:** Q1 FY27 revenue rose 24% on strong demand from vehicle makers, replacement buyers and homes. **Bad:** the margin has slid from 14% for FY24 to 9.6% in Q1 FY27, free cash turned negative in FY26, the lithium arm loses money without a technology partner, borrowings rose to ₹406cr from ₹157cr, and promoter-group firms sold it about ₹890cr of goods and services in FY26, with some land still in one's name.", "**Verdict: follow.** The price asks for about what I expect, with no cushion; I want to see the margin back above 11% and the storage plant winning orders first."],
        tagline: "Amaron batteries for vehicles, homes and industry, plus a young lithium pack, storage and cell business.",
        revenue: '₹13,814cr (FY26, consolidated)',
        products: [
            { name: 'Vehicle batteries', text: "Amaron batteries for cars, bikes and trucks, sold to vehicle makers and as replacements through more than 100,000 shops. Capacity is about 70 million units a year." },
            { name: 'Home and inverter batteries', text: "Tubular batteries for home inverters and solar. Volumes rose 60% in Q1 FY27 and the plant is full, so about 15% of lead-acid revenue was finished goods bought in from others." },
            { name: 'Industrial batteries', text: "Batteries for telecom towers, UPS, railways and power. Counting lead and lithium together it has more than 60% of telecom batteries, as towers switch to lithium." },
            { name: 'New energy', text: "Lithium packs for two- and three-wheelers and telecom, battery-storage systems, and a 2 GWh cell plant (Giga-1) that starts selling in H1 FY28. ₹809cr of revenue and a ₹135cr loss in FY26." },
        ],
        revenueText: "**Lead-acid batteries were ₹13,005cr (94%) of FY26 revenue**, up 5%, and new energy ₹809cr (6%), up 61%; in Q1 FY27 new energy was ₹209cr of ₹4,215cr. Exports were about 12% of FY26 revenue, the Middle East 3–4%. The company does not split lead-acid revenue between vehicle, home and industrial batteries, or between vehicle makers and replacement.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (annual report)', parts: [{ label: 'Lead-acid batteries', share: 94 }, { label: 'New energy (lithium)', share: 6 }], note: 'Lead-acid earned a segment profit of ₹1,270cr; new energy lost ₹135cr.' },
        ],
        customers: ["**Vehicle owners replacing batteries**, through more than 100,000 points of sale and over 1,000 Amaron Power Zone stores; replacement volumes for cars and bikes rose 15% in Q1 FY27.", "**Car and bike makers**, whose volumes from it rose 24% and 35% in Q1 FY27 after the GST cut.", "**Households, telecom operators, data centres, railways and power companies** for inverter and industrial batteries (industrial grew only 2% in Q1), plus buyers in more than 70 countries."],
        difficulty: { level: 'High', text: "Lead-acid batteries are a mature technology, but scale, recycling, vehicle-maker approvals and a national warranty and service network took decades to build. Lithium cells are much harder: its licence from Gotion of China was blocked by Chinese export rules, so it is developing its own cells, and it admits Indian cells cost ‘China plus 15% to 20%’." },
        moat: "Amaron is one half of a lead-acid duopoly with Exide (CRISIL), with a strong brand, deep distribution and vehicle-maker approvals. The weaknesses: its price rises reach business customers slowly, its recycling plant is still in trial, and in lithium it has no advantage yet.",
        salesDrivers: ["**Vehicle sales now, replacements later**: vehicles bought in the post-GST boom will need new batteries in about 2.5–3 years. The CFO sees 9–10% a year of lead-acid revenue growth, adding ‘I am not calling this a guidance’.", "**Home energy and solar**: inverter-battery volumes rose 60% in Q1 FY27 and the plant is full; lead-acid capex was planned at about ₹400cr for FY27.", "**Price increases**: 5–6% in Q4 FY26, about 3% in June and 2–3% in August, which reach the replacement market quickly and business customers with a lag.", "**New energy**: FY27 capex is ₹1,700cr, of which ₹1,300cr is new energy, and about ₹9,000–9,500cr is planned to reach 16 GWh by FY30, a target that ‘can change’. A storage-system plant targets 5 GWh by end-2026 and Giga-1 cells sell from H1 FY28; the target at 8–10 GWh is a 10–11% margin and a ‘low double-digit’ return.", "**Exports**: about 12% of revenue; vehicle-battery exports fell 20% in Q1 on the Middle East, and a US subsidiary is being set up."],
        inputs: "**Lead and lead alloys** are about 70% of material cost and plastics about 10%, with sulphuric acid, separators and other alloys making up the rest. Plastic parts come largely from promoter-group Mangal Industries (₹381cr in FY26). A battery-breaking (recycling) plant is meant to supply its own lead but is still in trial production. Materials were 68% of sales in FY26.",
        costEffect: "**Partly passed on, with a lag.** Replacement prices follow costs within about a quarter, but business customers pay increases more slowly, and extra brand spending (IPL cricket, the Amaron Assist pilot) and lithium start-up costs took about 1.4 points off the Q1 FY27 margin. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (11% to 4%). **What happened:** India's lead price index rose only from 100 to 109 between Q1 FY24 and Q1 FY27, yet the quarterly margin fell from 13.1% in Q1 FY24 to 9.6% (the FY24 full-year margin was about 14%). So lead was not the problem: sulphuric acid, plastics and alloy costs, warranty provisions, brand spending and new-energy losses were. Management was ‘hopeful’ of 13–14% in May but did not repeat it in August.",
        competitors: [
            { name: 'Exide Industries', note: 'The market leader in vehicle and replacement batteries, with a higher, rising lead-acid margin and a 6 GWh cell plant already commissioned.' },
            { name: 'Chinese cell and pack makers', note: 'Set world prices for lithium cells and storage systems; imported cells pay only a 5% duty.' },
        ],
        position: "**India's second-largest lead-acid battery maker**, one half of a duopoly with Exide (CRISIL), and above 60% of telecom batteries counting lead and lithium together.",
        money: "Net cash of about **₹317cr** (Screener), with borrowings of ₹406cr at March, up from ₹157cr two years earlier; CRISIL rates it AA+/Stable. Free cash flow was **−₹220cr** in FY26, the first negative year since FY22, as spending rose. FY27 capex is ₹1,700cr (₹450cr spent in Q1), and management expects ‘at least ₹700–800cr’ a year of cash after dividends to fund new energy before it needs outside money. It has also committed ₹495.5cr to SIPCOT for leased land. No equity raised. Promoters hold **32.86%**, up from 28.06% in September 2023.",
        watch: ["Margin back above 11% by Q3 FY27 as price rises catch up.", "The 5 GWh storage plant starting by end-2026 with orders.", "New-energy losses below about ₹200cr a year; related-party buying and the land titles."],
        charts: autoRelatedCharts['Amara Raja Energy'],
    },
    {
        company: 'Exide Industries',
        inShort: ["**India's largest lead-acid battery maker**, for vehicles, inverters, solar, railways, telecom and industry, with its own lead recycling and a new 6 GWh lithium-cell plant in Bengaluru.", "**Good:** the best-run lead-acid business here, growing 17.6% in Q1 FY27 with a rising 12.4% standalone margin, and rated AAA. **Watch:** about ₹4,900cr is in a cell subsidiary that lost ₹248cr in FY26, has no disclosed customer orders and carries a ₹3,000cr Exide guarantee on its loans, so group return on equity is only about 6%.", "**Verdict: wait.** The price already pays for lithium cells that have not yet sold."],
        tagline: "India's leading battery maker for vehicles, homes and industry, now starting lithium-ion cell production.",
        revenue: '₹17,995cr (FY26, consolidated)',
        products: [
            { name: 'Vehicle batteries', text: "Batteries for bikes, three-wheelers, cars and trucks, sold to more than 75 vehicle makers and as replacements. About half of revenue." },
            { name: 'Home UPS and solar', text: "Inverter batteries (about ₹2,300cr of revenue) and solar batteries (past ₹1,000cr). The inverter share of revenue swings between 15% and 25% with the season." },
            { name: 'Industrial batteries', text: "Batteries for railways, forklifts, power plants, telecom, data centres, industrial UPS and submarines. Telecom and e-rickshaw batteries, about 3% of revenue, are shrinking as buyers move to lithium." },
            { name: 'Lithium (Exide Energy Solutions)', text: "Packs assembled from imported cells at Prantij (₹158cr of revenue in FY26, loss-making) and a 6 GWh cell plant in Bengaluru commissioned on 23 September 2026: half cylindrical cells for two-wheelers, half LFP cells for three-wheelers, telecom and storage." },
        ],
        revenueText: "**Vehicle batteries are about half of revenue** (‘53:47’ vehicle versus everything else, per management). Home UPS is about ₹2,300cr, solar over ₹1,000cr, exports about 5% (down from 8% two years ago) and telecom plus e-rickshaw about 3%. The company reports a single segment, so it does not split vehicle-maker from replacement sales. The lithium subsidiary had ₹158cr of revenue in FY26.",
        mixes: [
            { caption: 'Revenue by use, FY26 (management, approximate)', parts: [{ label: 'Vehicle batteries', share: 53 }, { label: 'Home, solar, industrial and other', share: 47 }], note: 'Home UPS (about ₹2,300cr) and solar (over ₹1,000cr) sit in the second slice.' },
        ],
        customers: ["**Vehicle owners replacing batteries**, through more than 120,000 touchpoints reaching 18,000 villages and a doorstep ‘Batmobile’ service; car-battery replacement volumes rose 10% in Q1 FY27.", "**Vehicle makers**: more than 75 of them. The company claims 100% share of business on key new models at large makers, and volumes to car and bike makers rose 20–21% in Q1.", "**Households, railways, telecom, power companies and industry** for inverter, solar and industrial batteries, plus buyers in more than 70 countries."],
        difficulty: { level: 'High', text: "Lead-acid technology is mature, but national scale, recycling plants, vehicle-maker approvals and a warranty and service network across the country are hard to copy. Lithium cells are far harder: Exide licenses its technology from SVOLT of China, all electrolyte comes from China, two-wheeler cells need two to three months of vehicle-maker approval, and yields take years to build." },
        moat: "ICRA calls it the market leader in both vehicle-maker and replacement batteries, and its own recycled lead and huge reach give it the strongest pricing power in this group. The weakness: its lithium start-up drags on group returns, and the technology depends on a Chinese licence.",
        salesDrivers: ["**Replacements from the post-GST car boom**: cars bought now need new batteries in 2.5–3 years, so it is adding car-battery capacity across five plants, within core capex of about ₹500cr a year.", "**Lead-acid growth**: in August, after 17.6% growth in Q1, management declined to give a full-year FY27 figure because the second half faces a high base; in May it had guided ‘high-single to double-digit’ growth for FY27 and about 11% a year over five years, the same as the last five.", "**Home energy and solar**: inverter batteries are about ₹2,300cr of revenue and solar has passed ₹1,000cr, with solar volumes up 12–14% in Q1 FY27.", "**Price increases**: 5–6% between January and March and about 3% on 1 April, giving prices 4–6% higher year on year in Q1.", "**Lithium cells**: phase 1 of 6 GWh cost about ₹5,600cr (up from ₹5,200cr), with land and utilities for 12 GWh, which may cost more than ₹7,000cr in all. ₹1,400cr more equity goes in during FY27; first-year use will be only 25–30%, and there is no margin target until the plant runs at 85% use and 90% yield."],
        inputs: "**Lead and lead alloys** are about 70% of a battery's material cost, and its subsidiary Chloride Metals supplies about 80% of Exide's needs from recycled scrap. Sulphuric acid (sulphur went from about ₹15/kg to about ₹75/kg in a year), plastics for cases and separators make up much of the rest. Materials were 68% of sales in FY26.",
        costEffect: "**Passed on, within about a quarter.** It raised prices 5–6% between January and March and about 3% in April, and vehicle makers accepted non-lead cost increases with about a quarter's lag. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (10% to 3%). **What happened:** India's lead price index rose from 100 to 109 between Q1 FY24 and Q1 FY27, and the consolidated margin rose from 10.3% to 11.2%; the standalone lead-acid margin reached 12.4% in Q1 FY27 even though sulphur costs rose about five times and the rupee weakened. Lithium losses keep the group margin about a point below the standalone one.",
        competitors: [
            { name: 'Amara Raja Energy (Amaron)', note: 'The other half of the lead-acid duopoly; growing fast, but its margin has slipped to 9.6% and its lithium plan lost its Chinese technology partner.' },
            { name: 'Imported Chinese cells', note: 'The real rival in lithium; imported cells pay only a 5% duty, and the CEO says India needs two or three more local cell makers before the government will protect them.' },
        ],
        position: "**India's largest battery maker and the market leader** in both vehicle-maker and replacement batteries (ICRA), and the first of the two lead-acid leaders with a lithium-cell plant running.",
        money: "Screener shows **net cash of about ₹4,814cr**, but that counts about **₹5,100cr of HDFC Life shares** that Exide owns. Without them the group has a small net debt of about ₹490cr (gross debt ₹1,575cr including leases, against ₹1,082cr of cash, per ICRA). The standalone company is debt-free, but it guarantees up to ₹3,000cr of its lithium subsidiary's loans, into which it had put ₹4,902cr of equity by July, rising to about ₹6,300cr by the end of FY27. Group capex is ₹1,000–1,500cr in FY27. Operating cash was a strong ₹2,413cr in FY26 as stock days fell. Rated AAA by ICRA. No equity raised. Promoters hold **45.99%**, unchanged over three years.",
        watch: ["First cell revenue in Q3 FY27 and disclosed customer orders.", "Lithium losses narrowing by FY28, with no further cost overrun.", "Standalone margin holding above 11% as the GST base effect bites."],
        charts: autoRelatedCharts['Exide Industries'],
    },
];

export const autoRelatedBatteriesBusinesses = { intro, profiles };
