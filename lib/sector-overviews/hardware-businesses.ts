import { BusinessProfile, OverviewSection } from './types';
import { hardwareCharts } from './card-data/hardware';

// Tab 2 of the Hardware note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and three charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (TVS Electronics standalone); splits are from each company's latest presentation or call. The cost chart uses India's circuit-board price index as a rough guide to electronics prices.",
        ],
    },
    {
        heading: 'The products, in plain words',
        body: [
            "Two of these companies trade in other brands' computers; two make and service equipment.",
        ],
        points: [
            {
                label: 'Refurbished laptops',
                text: "Business laptops retired after a few years, bought in bulk, repaired, cleaned, tested and resold with a warranty at a fraction of the new price (GNG).",
            },
            {
                label: 'IT distribution',
                text: "Laptops, PCs, components, graphics cards and networking gear bought from global brands and sold on to dealers, system integrators and businesses across India (Rashi).",
            },
            {
                label: 'Coding and marking',
                text: "Printers on factory packing lines that print dates, batch numbers and barcodes on packs, and the special inks they use (Control Print).",
            },
            {
                label: 'Point-of-sale and services',
                text: "Shop billing machines, receipt printers and scanners, plus maintenance of IT and solar equipment and electronics assembly for other companies (TVS Electronics).",
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
                    ['**Resale through dealers and distributors**', 'GNG, Rashi', 'Follows global laptop and chip prices', 'Slow: stock plus dealer credit'],
                    ['**Printer first, then ink for years**', 'Control Print', 'Printers priced to win; ink and service priced for profit', 'Normal credit terms'],
                    ['**Hardware plus service contracts**', 'TVS Electronics', 'Tenders and contracts with businesses', 'Normal to slow'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'GNG Electronics',
        inShort: ["**India's largest refurbisher of laptops and desktops**, trading as Electronics Bazaar. It buys used business laptops in bulk, repairs and tests them, and resells them with a warranty in 49 countries, India included.", "**Good:** sales grew 34% in FY26 and the margin is rising as dearer new laptops push buyers to refurbished ones. **Bad:** almost all the profit has gone into stock and receivables, so operating cash flow was negative ₹215cr in FY26 and net debt rose to ₹406cr by June 2026; the overseas units that earn most of its profit are audited by a small Sharjah firm, not the group auditor.", "**Verdict: wait.** Its profit has not arrived as cash: −₹248cr of operating cash against ₹306cr of profit over FY22–FY26, and −₹215cr against ₹132cr in FY26 as stock piled up. A real growth story, but it leans on a memory-chip shortage that will not last for ever; it returns to **follow** once operating cash turns positive and covers most of its profit, with net debt back toward the ~₹300cr promised. The price is {label:GNG Electronics|full}: it needs about {need:GNG Electronics|26}% a year against my ~22%."],
        tagline: "India's biggest refurbisher of used business laptops and desktops, selling under the Electronics Bazaar brand in India, the US, Europe and the Middle East.",
        revenue: '₹1,891cr (FY26, consolidated)',
        products: [
            { name: 'Refurbished laptops', text: "A refurbished laptop is a used business machine from a big PC brand that is cleaned, repaired, upgraded, tested and resold looking and working like new. Laptops were 108,000 of the 150,000 units sold in Q1 FY27 and 81% of revenue, at an average of about ₹30,800 each." },
            { name: 'Desktops and other devices', text: "Refurbished desktops, plus tablets, servers and peripherals: 42,000 units and 19% of Q1 FY27 revenue, at about ₹19,300 each." },
            { name: 'Warranty and service', text: "Every device carries a warranty: 3 years in India and 1 year abroad. This is what separates it from small local refurbishers and lets it charge more." },
            { name: 'Buying used devices', text: "It buys retired laptops in bulk from banks, leasing companies and large firms (773 suppliers) and refurbishes them in its own plants in India and the UAE." },
        ],
        revenueText: "Laptops were **81% of Q1 FY27 revenue** and desktops and others 19%. By market, **India was 36%**, the US 24%, Europe 23%, the Middle East 12% and the rest 5%. Sales abroad earn more: gross margin is close to 30% overseas against about 21% in India.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company)', parts: [{ label: 'Laptops', share: 81 }, { label: 'Desktops and others', share: 19 }] },
            { caption: 'Revenue by market, Q1 FY27 (company)', parts: [{ label: 'India', share: 36 }, { label: 'US', share: 24 }, { label: 'Europe', share: 23 }, { label: 'Middle East', share: 12 }, { label: 'Others', share: 5 }] },
        ],
        customers: ["**Businesses and schools**, reached mostly through dealers and channel partners: 5,130 customer touchpoints across 49 countries.", "**Big Indian IT distributors** Redington, Ingram Micro and Supertron now stock its machines alongside local dealers.", "**Students and small firms** priced out of new laptops, the market management most wants to grow."],
        difficulty: { level: 'Medium', text: "Refurbishing is skilled but not high-tech. The hard parts are buying enough good used machines in bulk, repairing them to a consistent standard, and having the balance sheet to back a 3-year warranty and a large stock." },
        moat: "Steady supply from 773 sellers of used laptops, its own repair plants, a 3-year warranty and dealers in 49 countries are hard for small refurbishers to copy. The weakness is supply: if companies keep laptops longer, fewer used machines come to market.",
        salesDrivers: ["**New laptop prices**: memory chips have become about five times dearer since October 2025, pushing an entry-level new laptop from about ₹25,500 in December 2025 to about ₹48,000 by July 2026. Every rise in new prices makes a warrantied refurbished machine look better value.", "**Selling prices**: the average laptop price rose 12% in a year (₹27,500 to ₹30,763) as buyers came to trust the brand; units grew about 18% against 32% revenue growth in Q1 FY27.", "**Supply of used laptops**: it has to buy in big lots when banks and companies retire machines, sometimes tens of thousands at a time, so sales depend on having the stock ready.", "**Overseas markets**: the US and Europe were 47% of Q1 FY27 revenue and carry higher margins; management raised its FY27 revenue growth goal from 25% to 30%.", "**Dealers and distributors**: new tie-ups with Redington, Ingram Micro and Supertron and dealer meets across India widen its reach."],
        inputs: "**Used business laptops and desktops** bought in bulk, plus replacement parts such as memory, storage drives, batteries and screens. Prices follow what new machines from global brands cost, in dollars. Screener's cost split does not separate the laptops it buys, so the cost chart shows 'Laptops bought and other costs' together: these were 84% of sales in FY26.",
        costEffect: "**Passed on, for now.** Used-laptop prices trail new-laptop prices, so GNG buys ahead and sells later at higher prices; it passes rises on through its selling price. The risk runs the other way: if new laptops get cheaper, its stock loses value. **Rule of thumb:** a 10% rise in the cost of laptops and other bought-in costs not passed on would cut the margin by about 8 points (10% to 2%). **What happened:** India's circuit-board price index, a rough guide to electronics component prices, was roughly flat (100 to 102 from Q1 FY25) while the margin rose from 10.2% to 11.9%. That index says little here: GNG's real input is used laptops priced off new ones from global brands. The memory-chip shortage made new laptops much dearer, which let GNG raise its own prices, earn extra on stock bought before the rises, and sell more in the US and Europe where margins are higher. Gross margin reached 24.6% in Q1 FY27, up 3.3 points in a year.",
        competitors: [{ name: 'Local unorganised refurbishers', note: 'Many small traders, usually with little or no warranty; management says it faces negligible competition among the customers it serves.' }, { name: 'New entry-level laptops (Dell, HP, Lenovo)', note: 'The real alternative for buyers; cheaper memory chips would make new machines more tempting again.' }],
        position: "**India's largest refurbisher of laptops and desktops**, and one of the bigger ones worldwide. Refurbished PCs are still small in India: Rashi Peripheral puts the market at 0.5–1 million units a year against 15–16 million new PCs.",
        money: "Screener puts net debt at **₹315cr** (March 2026); the company puts it at about ₹300cr in March and says it rose to **₹406cr by June 2026** as it bought extra stock ahead of price rises, with inventory of about ₹700cr. As it grew, most of its profit went into stock and money owed by customers: over FY22–FY26 working capital absorbed ₹609cr (₹649cr of it stock), and operating cash flow over the five years was negative ₹109cr against ₹468cr of operating profit. Fixed assets are small (capex ₹23cr in FY26). It listed in July 2025. Its UAE subsidiary and the US units below it, which earn most of the profit, are audited by a small Sharjah firm rather than the group auditor, and its guarantees for subsidiary borrowings rose from ₹95cr to ₹202cr in FY26. Promoters hold **about 71.8%**, down from 78.7% in September 2025; promoter Vidhi Khandelwal sold 3.0% (₹231cr, at about ₹675) on 30 September 2026.",
        watch: ["Operating cash flow turning positive as stock is sold down.", "New laptop and memory-chip prices: a fall would cut its selling prices and the value of its stock.", "Net debt, ₹406cr in June 2026."],
        charts: hardwareCharts['GNG Electronics'],
    },
    {
        company: 'Rashi Peripheral',
        inShort: ["**One of India's big IT distributors**: a wholesaler that buys laptops, PCs, components and accessories from 80+ global brands such as Dell, Intel, AMD and NVIDIA and sells them to over 10,000 shops, resellers and system integrators across India.", "**Good:** revenue grew 62% in Q1 FY27 as PC prices and company demand rose, and profit grew faster. **Bad:** it keeps only about 3 paise of operating profit per rupee of sales, its growth has eaten cash (operating cash flow over five years was negative ₹717cr), its profit margin is above what its CFO calls normal, and it carries ₹344cr of disputed GST demands.", "**Verdict: follow.** Growth is strong now, but about half of it came from higher prices that will not keep rising, and the thin margin leaves little room for error. Operating cash was −₹717cr against ₹942cr of profit over FY22–FY26, though FY26 turned positive at ₹114cr (40% of profit). The price fits my ~12% estimate."],
        tagline: "A large Indian distributor of PCs, laptops, components, accessories and data-centre hardware for global technology brands, with its own after-sales service network.",
        revenue: '₹15,827cr (FY26, consolidated)',
        products: [
            { name: 'PCs, laptops and enterprise kit', text: "Laptops, desktops and workstations from brands such as Dell, sold to companies through resellers. A new Dell commercial deal was about 5% of Q1 FY27 revenue. This part has lower margins." },
            { name: 'Components and accessories', text: "Processors, memory, storage, graphics cards, monitors, printers, networking and gaming gear for shops and PC builders. Margins are higher than on complete PCs." },
            { name: 'Data-centre and AI hardware', text: "Servers and graphics processors from NVIDIA, Supermicro and others for smaller cloud and AI operators. It supplied a large AI data centre (Yotta) but is now avoiding very large, cash-heavy deals." },
            { name: 'Semiconductors and embedded chips', text: "Chips and design help for Indian makers of cars and industrial goods. This business is moving into a joint venture with Japan's Restar (Rashi 74%), which aims for over US$100m of sales within three years." },
            { name: 'Services and system integration', text: "After-sales service for brands, and a 67% stake in VDA Infosolutions (₹850cr revenue last year), bought for ₹368.5cr in cash in July 2026, a system integrator that designs, installs and runs IT set-ups for companies. Management expects such services to be about 5% of revenue." },
        ],
        revenueText: "The company does not publish a product split. Management's rough estimate is that **60–65% of sales end up with businesses** (small firms and large companies) and **30–35% with consumers**. Of the 62% growth in Q1 FY27, about **30–35 points came from higher prices**, 5–10 from new products and brands, and 20–25 from selling more units.",
        mixes: [
            { caption: 'Sales by end buyer, Q1 FY27 (management estimate)', parts: [{ label: 'Businesses', share: 65 }, { label: 'Consumers', share: 35 }], note: 'Management gave ranges: 60–65% business, 30–35% consumer.' },
        ],
        customers: ["**Over 10,000 channel partners**: system integrators (firms that design and set up IT for companies), regional distributors, local shops, large-format retailers and online sellers.", "**Companies buying PCs through resellers**, now replacing old Windows 10 machines; it does not sell directly to end users.", "**Indian electronics makers** buying chips and embedded systems, and smaller cloud and AI data-centre operators."],
        difficulty: { level: 'Low', text: "Nothing is made; the barriers are money and relationships. A distributor needs brand contracts, supply allocations when products are short, a branch network in 57 towns, and a large balance sheet to carry stock and give credit to thousands of small resellers." },
        moat: "Thirty years of brand relationships and deep reach into small towns win it supply when goods are scarce and keep resellers loyal. The weakness is a very thin margin, and brands can always sell direct or switch distributors.",
        salesDrivers: ["**PC prices**: the memory and processor shortage has roughly doubled laptop prices in a year, lifting the rupee value of every sale. Management expects prices to keep rising but at about half the recent pace.", "**Company PC replacement**: firms are replacing Windows 10 machines and buying early to beat price rises; unit growth was about 20% in Q1 FY27.", "**New brands and products**: the Dell commercial deal, AI servers, and chips through the Restar joint venture.", "**Supply**: entry-level laptops are about 50% short; its brand ties have so far got it enough stock, but management calls this an 'orange alert'.", "**Consumer demand**: dearer laptops are hurting shoppers, and resellers are holding extra stock hoping for higher prices."],
        inputs: "**Finished laptops, PCs, components and accessories** bought from global brands and priced in dollars. Materials (the goods it resells) were 94% of sales in FY26.",
        costEffect: "**Passed on.** A distributor resells at the brand's price plus a small margin, so rises flow straight through; when prices rise its rupee profit per unit grows and older stock earns a gain. Falling prices do the reverse. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 9 points (3% to a loss of about 6%). **What happened:** India's circuit-board price index, a rough guide to electronics component prices, was roughly flat (100 to 98 from Q1 FY24) while the margin slipped from 3.8% to 3.0%. That index is not Rashi's real input: it buys finished goods from global brands in dollars, and those prices have jumped with the memory-chip shortage. What moved the margin was mix: the lower-margin PC and enterprise business grew faster than accessories and components. The margin also swung between quarters, falling to 0.7% in the December 2024 quarter.",
        competitors: [{ name: 'Redington', note: "India's largest IT distributor, much bigger and also in mobiles, software and logistics." }, { name: 'Ingram Micro', note: 'Global distributor, number two in India.' }, { name: 'Supertron and regional distributors', note: 'Smaller national and local players; Rashi says it is taking share from some of them.' }],
        position: "**One of India's large IT hardware distributors**, smaller than Redington and Ingram Micro, focused on PCs, components and data-centre kit rather than mobiles or software. It says about 10 points of its Q1 FY27 growth came from winning market share.",
        money: "Screener puts net debt at **₹910cr** (March 2026); the company said **₹1,285cr at the end of June 2026** after building stock, with debt about half its equity. As it grew, most of its profit went into stock and money owed by resellers: over FY22–FY26 working capital absorbed ₹2,106cr, and operating cash flow over the five years was negative ₹717cr against ₹1,623cr of operating profit; FY26 was the first positive year (₹114cr). Capex is tiny (₹8cr a year). The VDA stake (₹368.5cr, paid in July) and the Restar joint venture are its main new spending. It has not provided for ₹344cr of disputed GST demands; management says past notices closed at under 1% of the amount claimed. Promoters hold **64.0%**, up slightly from 63.4% in March 2024.",
        watch: ["Growth once price rises slow down, and stock losses if prices fall.", "Net debt, ₹1,285cr in June 2026, and operating cash flow.", "Progress of VDA Infosolutions and the Restar chip venture, in which Restar is buying 26% (5 Nov 2026); use of the up-to-₹900cr fund-raise the board enabled the same day."],
        charts: hardwareCharts['Rashi Peripheral'],
    },
    {
        company: 'Control Print',
        inShort: ["**India's home-grown maker of coding and marking printers**: machines on factory lines that print the date, batch number and codes on packs, plus the inks, spares and servicing that go with them.", "**Good:** a sticky, cash-generating core business with ₹58cr of net cash and more than 23,000 printers in use. **Bad:** the margin has fallen from about 25% to 13% as staff costs rose and new packaging and track-and-trace ventures lose money; the loss-making foreign units are not audited, and Q1 standalone revenue grew only 4.2%.", "**Verdict: wait.** The core is sound, but I want to see the Italian packaging business stop losing money first. The price is {label:Control Print|full}: it needs about {need:Control Print|15}% a year against my ~11%."],
        tagline: "Indian maker of industrial coding and marking printers and their inks, with newer packaging, track-and-trace and safety-products businesses.",
        revenue: '₹482cr (FY26, consolidated)',
        products: [
            { name: 'Coding and marking printers', text: "Inkjet, thermal and other printers fitted to production lines to print expiry dates, batch codes and barcodes on packs, pipes, cables and cement bags. It sold 574 printers in Q1 FY27." },
            { name: 'Inks, spares and servicing', text: "Each installed printer needs its own inks, spare parts and maintenance for years, which brings repeat revenue. Management says the standalone coding business earns about 60% gross margin." },
            { name: 'Track and trace', text: "QR-code printing and software so medicines can be traced and checked for fakes. About ₹20cr of sales last year, at least breaking even, with pilots running at three drug makers." },
            { name: 'Packaging (V-Shapes, Italy)', text: "Machines that make single-dose sachets that open with one press, plus co-packing (packing products for clients). The machines have proved hard for customers to run, and the business is losing money." },
            { name: 'PPE and safety products', text: "Masks, helmets, gloves and similar safety gear from its Nalagarh plant: a small side business." },
        ],
        revenueText: "Coding and marking is **about 95% of standalone operating revenue**; much of it is repeat sales of ink, spares and servicing for its installed printers (the company did not give the split in the call). Exports were only **4–5% of Q1 FY27 sales**. Standalone total revenue was ₹460cr in FY26.",
        mixes: [
            { caption: 'Standalone operating revenue, Q1 FY27 (company)', parts: [{ label: 'Coding and marking', share: 95 }, { label: 'Other (packaging, track and trace, PPE)', share: 5 }] },
        ],
        customers: ["**Makers of pipes and other plastic extrusions**, its biggest customer group, plus cables, steel, metal and wood.", "**Food, dairy and FMCG companies**, and cement, plywood and sugar, where it is the market leader.", "**Drug makers** for track and trace, and food, cosmetics and supplement brands for packaging."],
        difficulty: { level: 'High', text: "Few companies worldwide design and make industrial inkjet printers and their inks; the inks have to work reliably at line speed on many surfaces, and customers qualify them before use. It is the only coding and marking company that manufactures in India." },
        moat: "Once a printer is on a production line, customers rarely switch, and they keep buying its ink and service. Weaknesses: large foreign rivals, and laser coders, which need no ink.",
        salesDrivers: ["**Factory output in its user industries**: more pipes, cables, food and cement packs mean more ink used. A slump in pipes and extrusion hit Q1 FY27.", "**New printers installed**: each sale adds years of ink and service revenue; the installed base is over 23,000 printers.", "**Price rises**: after the Iran conflict raised input costs it put through one price increase and a surcharge, which management expects to add a couple of points of margin.", "**QR-code rules for medicines**: today the top 300 brands (about 2,000 products) must carry QR codes; a draft rule to extend this to about 25,000 products could lift the market from about ₹600cr to ₹1,500cr, management estimates.", "**Management target**: 10–15% growth for the standalone coding business in FY27."],
        inputs: "**Printer parts, electronics and ink chemicals** (solvents, dyes, pigments), much of it imported, plus plastic film for packaging. Materials were 40% of sales in FY26.",
        costEffect: "**Partly passed on.** It can raise ink and service prices because customers are locked in, but it admits it has been slow to do so while suppliers pushed through price rises that stuck. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (18% to 14%). **What happened:** India's circuit-board price index, a rough guide to electronics component prices, was roughly flat (100 to 98 from Q1 FY24), yet the margin fell from 24.8% to 13.2%. The index is only a loose guide: the real inputs are imported printer parts and ink chemicals, which a weaker rupee makes dearer, and materials have stayed at about 40% of sales for five years. What really pulled the margin down was staff costs (up from about 18% to 23% of sales), losses at the new overseas packaging businesses, and weak ink sales in Q1 FY27 when the Iran conflict and swinging plastic prices slowed its pipe-making customers.",
        competitors: [{ name: 'Videojet, Domino, Markem-Imaje', note: 'Global leaders in coding and marking, with larger ranges; they import into India.' }, { name: 'Laser coders', note: 'Machines that mark without ink; limited to some surfaces but a long-term threat to ink sales.' }],
        position: "**The only coding and marking company that makes its printers in India**, competing with global groups. It leads in cement, plywood, sugar and dairy, and says it is holding and slightly growing its market share.",
        money: "Screener shows **net cash of ₹58cr**. It generates about ₹50cr of operating cash a year and spends about ₹26cr on capex. An analyst put its total investment in the Italian packaging business at about ₹65cr, including ₹31.2cr agreed in May 2026 to buy the unit's patents, which management called the last infusion; the packaging arm should break even in the first half of FY28. Its foreign subsidiaries lost ₹31.2cr in FY26 and their accounts were not audited (certified by their own directors). It has not provided for a ₹6.33cr arbitration award won by Videojet, stayed by the Bombay High Court. A planned film plant in Assam is on hold after the state suspended incentives. Promoters hold **53.0%**, unchanged over three years.",
        watch: ["The packaging business breaking even by the first half of FY28.", "Ink sales and the margin recovering after the price rise.", "Final QR-code rules for medicines."],
        charts: hardwareCharts['Control Print'],
    },
    {
        company: 'TVS Electronics',
        inShort: ["**A maker of point-of-sale terminals, receipt printers and barcode scanners** (the machines shops and banks use to bill customers and track stock), which also repairs IT equipment, maintains solar plants and makes electronics for other companies.", "**Good:** a new electronics-making plant is only 30–40% used, so there is room to grow. **Bad:** it made a loss over the last year, margins are thin, and debt has risen as memory-chip prices tied up cash in stock.", "**Verdict: avoid.** The turnaround slipped back into a loss in the June 2026 quarter, operating profit has shrunk since FY22, and unprovided tax claims and a promoter brand fee weigh on any recovery."],
        tagline: "Chennai-based maker of point-of-sale and data-capture hardware, with IT repair, solar maintenance and contract electronics manufacturing.",
        revenue: '₹455cr (FY26, standalone)',
        products: [
            { name: 'Point-of-sale products', text: "Touch-screen point-of-sale terminals (the counter machines that bill customers and take card payments), thermal receipt printers and keyboards, sold to banks, retailers and businesses." },
            { name: 'Barcode scanners and handhelds', text: "2D scanners and handheld devices used in factories and warehouses to track goods; demand is growing with logistics." },
            { name: 'IT and solar services', text: "Repairing and maintaining IT equipment for brands and companies, running a 3 GW portfolio of solar plants for their owners, and e-auctions of scrap equipment." },
            { name: 'Electronics manufacturing (EMS)', text: "Making circuit boards and electronic assemblies for other companies at its Tumakuru plant, aimed at car, power, industrial and defence electronics. The new lines are only 30–40% used." },
        ],
        revenueText: "In FY26 the **products business (point-of-sale and scanners) was ₹316cr, about 74%**, and **customer support services (IT repair, solar and EMS) ₹113cr, about 26%**. Services grew 13% and products 3%. The company does not split out EMS revenue.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (company)', parts: [{ label: 'Products and solutions', share: 74 }, { label: 'Customer support services', share: 26 }] },
        ],
        customers: ["**Banks and financial firms**, and **warehouse and logistics companies**, the strongest buyers of its point-of-sale and scanning products.", "**IT brands and companies** for repair and managed services, and **solar plant owners** for maintenance.", "**Car and industrial electronics makers** for contract manufacturing."],
        difficulty: { level: 'Medium', text: "Its devices are largely assembled from imported kits and parts, which many rivals can match. Contract electronics needs tighter quality and takes three to four quarters to win and qualify each new customer." },
        moat: "The TVS name and a nationwide service network win it repeat business from banks and companies. The hardware itself is a commodity, and cheaper imports cap prices.",
        salesDrivers: ["**Bank and retail spending on counter equipment**, and warehouse and factory growth for scanners and handhelds.", "**Memory-chip prices**: memory prices doubled or tripled, so customers put off orders; management expects them to return within a quarter or two.", "**Contract manufacturing**: filling the new Tumakuru lines with car, industrial and defence customers.", "**Services**: new solar sites (up from 1 GW to 3 GW) and IT service contracts.", "**Target**: management wants double-digit growth after dropping low-margin orders in FY26."],
        inputs: "**Imported part-built kits, circuit boards, memory chips and electronic parts**, mostly imported and paid for in dollars. Materials were 51% of sales in FY26.",
        costEffect: "**Partly passed on.** It raises prices when parts get dearer, but customers delay orders and some refuse, so it has walked away from low-margin work. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (4% to a loss of about 1%). **What happened:** India's circuit-board price index, a rough guide to electronics component prices, was roughly flat (100 to 98 from Q1 FY24) while the margin went from 2.8% to minus 2.3%. The index misses what happened: memory chips became much dearer, which stalled customer orders. Cost cuts and dropping low-margin orders lifted the margin to about 6% by the March 2026 quarter, but it fell to an operating loss in the June 2026 quarter; the latest call I have (May 2026) predates that result.",
        competitors: [{ name: 'Imported point-of-sale and printer brands', note: 'Global and Chinese makers selling cheaper hardware to the same banks and retailers.' }, { name: 'Zebra, Honeywell', note: 'Global leaders in barcode scanners and handheld devices.' }, { name: 'Kaynes Technology, Syrma SGS', note: 'Much larger Indian contract electronics makers.' }],
        position: "**A known name in Indian point-of-sale terminals and receipt printers** with a nationwide service network, but a small player in contract electronics.",
        money: "Screener puts net debt at **₹49cr**. Debt rose in FY26 (debt-to-equity 0.34 to 0.43) as it carried extra stock ahead of memory-price rises and customers paid more slowly. It has spent about ₹40cr on factory and EMS expansion and plans only routine capex for FY27. It has not provided for ₹54.8cr of disputed customs and GST claims, about 57% of its net worth, and it pays a promoter-family firm up to 1% of net sales for use of the TVS name. Promoters hold **59.8%**, unchanged over three years.",
        watch: ["A return to profit after the June 2026 loss.", "Use of the Tumakuru EMS lines rising above 30–40%.", "Debt and money owed by customers."],
        charts: hardwareCharts['TVS Electronics'],
    },
];

export const hardwareBusinesses = { intro, profiles };
