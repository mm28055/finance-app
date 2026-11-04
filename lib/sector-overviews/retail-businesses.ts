import { BusinessProfile, OverviewSection } from './types';
import { retailCharts } from './card-data/retail';

// Tab 2 of the Retail note: what each company actually does.
// Revenue totals are the filed figures (Screener). Stores, customers and splits come from the
// companies' latest presentations, calls, annual reports and rating reports; where a figure is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Vedant, Aditya Vision, V-Mart, Go Fashion and Sai Silks standalone, the others consolidated); splits are from each company's latest call, presentation or annual report. These businesses have no single raw material with a price index, so there is no cost-versus-input chart: their costs are the goods they buy for resale, rent, staff and discounts, and their margins move with how busy the stores are and whether they can sell at full price. **One accounting rule matters everywhere here:** under Ind AS 116 most store rent is booked as depreciation and interest, below operating profit, so a store chain's reported margin looks several points higher than its margin after rent. Where the company gives the after-rent figure, the card uses it too.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Nineteen companies that sell to shoppers, or to the shops and to businesses, in five groups.",
        ],
        points: [
            {
                label: 'Fashion brands and department stores',
                text: "Companies that own or license clothing brands and sell them through their own stores, franchisees, department stores and websites: Vedant (Manyavar wedding wear), Aditya Birla Lifestyle Brands (Louis Philippe, Van Heusen, Allen Solly, Peter England), Aditya Birla Fashion & Retail (Pantaloons and ethnic labels), Arvind Fashions (U.S. Polo Assn., Tommy Hilfiger, Calvin Klein), Go Fashion (GoColors leggings), Sai Silks (South Indian silk sarees) and Shoppers Stop's department stores. **A brand that sells at full price keeps a gross margin of 40–67%**; what it keeps after rent, staff and stock that does not sell decides whether that becomes profit.",
            },
            {
                label: 'Value retail and kids',
                text: "Chains selling cheap clothes and everyday goods to families in smaller towns, V2 Retail and V-Mart, and FirstCry (Brainbees), which sells baby and children's products online and in stores. **They win on low prices and low costs, not on brands**: gross margins are 28–36%, so the profit comes from filling new stores quickly and keeping rent and staff costs per sq ft low.",
            },
            {
                label: 'Electronics and cars',
                text: "Shops selling big-ticket branded goods at prices the makers set: Electronics Mart (Hyderabad and the Telugu states) and Aditya Vision (Bihar and neighbours) sell ACs, fridges, TVs and phones; Landmark Cars sells and services Mercedes-Benz, Honda, BYD, MG and other cars. **They keep only 13–17 paise gross on each rupee**, so profit swings with summers, phone launches and car cycles, and stock ties up a lot of cash.",
            },
            {
                label: 'Pharmacy and pharma distribution',
                text: "MedPlus runs 5,476 pharmacies that sell medicines at a standard discount and push their own cheaper labels; Entero is a wholesaler that buys from about 3,000 drug and device makers and delivers to chemists and hospitals; Sastasundar (now Health X Platform) distributes medicines online to small chemists and consumers, mostly in West Bengal, and still loses money doing it. **Medicine prices and trade margins are largely fixed along the chain**, so these companies earn from scale in buying, own-label goods and tight costs.",
            },
            {
                label: 'Business marketplaces and distributors',
                text: "Three companies that sell to businesses rather than shoppers: IndiaMART charges small suppliers a yearly fee to be found by business buyers online; Crizac earns a commission from British universities for each overseas student its agents enrol; SG Mart buys steel from mills, cuts and shapes it, and sells it to small fabricators. **Matchmakers earn 25–40% margins with no stock; the steel distributor earns 1–5%.**",
            },
        ],
    },
    {
        heading: 'Four ways of earning',
        body: [
            "How each business earns decides what its margin means and how quickly profit turns into cash.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it earns', 'How fast the cash comes'],
                rows: [
                    ['**A brand margin on its own or licensed labels**', 'Vedant, ABLBL, ABFRL, Arvind, Go Fashion', 'The gap between making cost and a full-price tag, after the store or franchisee takes its share', 'Slow: stock is bought months ahead, and franchisees, department stores and wholesalers pay on credit (Vedant waits about 166 days)'],
                    ['**A trading margin at the till**', 'V2, V-Mart, Sai Silks, Shoppers Stop, FirstCry, MedPlus, Aditya Vision, Electronics Mart', 'The gap between what it pays suppliers and the shelf price, less rent and staff', 'Shoppers pay at once, but stock must be bought and paid for first; sale-or-return (Shoppers Stop) or supplier credit eases it'],
                    ['**A dealer or wholesale margin set by others**', 'Landmark, Entero, SG Mart, Sastasundar', 'A few paise per rupee on prices set by carmakers, drug makers or the steel market, plus incentives', 'Car stock is funded by bank loans; chemists get about 67 days of credit from Entero but pay Sastasundar in cash; steel mills are often paid in advance'],
                    ['**A fee or commission for matching**', 'IndiaMART, Crizac', 'Subscriptions from suppliers, or a commission per enrolled student', 'IndiaMART is paid in advance; universities pay Crizac in 90–180 days'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'V2 Retail',
        inShort: ["**A fast-growing value-fashion chain**, selling cheap clothes (₹308 a piece on average) to lower-middle-income families from 400+ large stores in smaller towns.", "**Good:** revenue up 63% in FY26 and 58% in Q1, and new stores make an operating profit from their first month. **Bad:** operating cash was −₹103cr in FY26, the margin after rent is 8%, and the auditor flagged a ₹12.88cr advance outstanding since 2019.", "**Verdict: own.** The fastest grower here, at a price that fits my estimate."],
        tagline: "A value-fashion chain of large stand-alone stores in tier-2 and tier-3 towns, selling family clothing at low prices.",
        revenue: '₹3,067cr (FY26, consolidated)',
        products: [
            { name: 'Everyday family clothing', text: "Menswear (42% of Q1 FY27 sales), womenswear (28%), kidswear (23%) and home and lifestyle goods (7%) at an average of ₹308 a piece; about 90% sold at full price." },
            { name: 'Big stores in small towns', text: "Stand-alone buildings of 10,000–12,000 sq ft: 381 at June 2026 and 400+ by August, in 25 states and 300+ cities. Each needs ₹2.5–2.8cr including stock and pays back in 2.5–3 years." },
            { name: 'Buying and supply', text: "A pure retailer since leaving its own manufacturing in FY26, buying from outside makers through a central warehouse in Gurgaon, a zonal one in Kolkata and about 18 hubs. Only about 20% of fabric is chosen centrally, which it sees as a 3–5% saving to come." },
        ],
        revenueText: "**Menswear was 42% of Q1 FY27 sales**, womenswear 28%, kidswear 23% and home and lifestyle 7%. The average bill was ₹941. The core states are Uttar Pradesh, Bihar, Jharkhand and Odisha, and 30–40% of new stores go to newer states such as Karnataka and West Bengal. New space is over half the network, so sales per sq ft fell to ₹886 a month from ₹960; mature stores sell ₹1,070–1,124.",
        mixes: [
            { caption: 'Sales by category, Q1 FY27 (company presentation)', parts: [{ label: 'Menswear', share: 42 }, { label: 'Womenswear', share: 28 }, { label: 'Kidswear', share: 23 }, { label: 'Home and lifestyle', share: 7 }] },
        ],
        customers: ["**Lower-middle-income families in tier-2 and tier-3 towns**, buying for festivals and weddings; repeat buyers in stores over two years old rose from 56% to 68%.", "**Shoppers moving from local shops** to organised stores; its database holds about 8 crore customers."],
        difficulty: { level: 'Low', text: "Cheap clothes are easy to source and a store is easy to open; 80% of its stores already have three or four value rivals nearby. The skill is in keeping costs low, choosing sites and turning stock fast." },
        moat: "Cost and productivity: about ₹190 of cost per sq ft, marketing at 0.3% of sales and a deliberately low 28–30% gross margin to pass value on; management claims 30% more sales per sq ft than rivals in 95% of locations. The weakness is no brand power beyond price, and Google ratings of about 3.6 against 4.1–4.2 for peers.",
        salesDrivers: ["**New stores**: 136 net in FY26 against 130 promised; 170–200 in FY27 and 250 in FY28 if momentum holds, with sites signed for the next 100.", "**Same-store growth**: 8.6% in FY26 and 7.5% in Q1 against an 8–10% guide, as Adhik Maas cut wedding sales.", "**Prices**: MRPs to rise 4–5% from Q3 to pass on higher yarn costs.", "**GST**: clothes up to ₹2,500 moved to 5% GST in September 2025, which helped value chains; that boost fades from Q3 FY27.", "**A small acquisition**, RK Retail, closed around June and shows from Q2."],
        inputs: "**Garments bought from outside makers, store rent and staff.** In FY26 goods bought for resale and materials were 70% of sales, store running, power and upkeep 5%, staff 8% and other costs 2%. Rent is the big hidden cost: under Ind AS 116 it sits mostly below operating profit, so the Q1 margin was 8.0% with rent counted against 14% reported.",
        costEffect: "**Mostly passed on, with a lag.** It prices for value and raises MRPs once cost rises settle, as with the 4–5% rise planned from Q3; prepaying suppliers earned it about a 1.5% discount. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** there is no input price index to chart. The operating margin rose from 13% in FY24 to 14% in FY25 and 15% in FY26 (Screener) as stores matured and costs were spread; festive Q3 FY26 reached 19%. In Q1 FY27 it was 14%, and 8.0% after rent against 8.3% a year earlier, as the gross margin slipped to 28.6% when fewer goods sold at full price.",
        competitors: [{ name: 'Trent (Zudio)', note: 'The value-fashion leader, with 982 stores at June and a stronger brand.' }, { name: 'V-Mart Retail', note: 'A similar small-town chain, strongest in Uttar Pradesh and Bihar.' }, { name: 'Reliance Trends and Yousta, Max', note: 'Large value chains with deep pockets.' }],
        position: "**One of India's fastest-growing value-fashion chains**, past 400 stores in August 2026.",
        money: "Screener shows **₹988cr of net debt**, mostly leases; bank borrowing is not separately disclosed. It raised about ₹400cr in November 2025, but FY26 operating cash was −₹103cr because about ₹300cr went into prepaying suppliers and ₹300cr into extra stock. It expects positive operating cash in FY27, funding 170–200 stores from profits, bank lines and ₹150–200cr released from supplier prepayments. India Ratings upgraded it to A/Positive in September. Promoters hold **51.4%**, down from 54.3% in September 2023; a small pledge (about 3.5 lakh shares) was created for working capital.",
        watch: ["Operating cash turning positive in FY27.", "Same-store growth back to 8–10% after the price rises.", "The Times group advance recovered or written off."],
        charts: retailCharts['V2 Retail'],
    },
    {
        company: 'Indiamart Intermesh',
        inShort: ["**India's largest online marketplace for business buyers and suppliers**: about 2.18 lakh mostly small suppliers pay yearly subscriptions to be found by 41m buyers, who use it free.", "**Good:** customers pay in advance, a 30% margin, no debt and ₹3,553cr of cash and treasury. **Bad:** paying suppliers have not grown for over a year (1,852 lost in Q1 and 615 in Q2, when a recovery was expected), buyer enquiries keep falling, and AI answers on Google threaten its free traffic.", "**Verdict: follow.** A cash machine whose engine has stalled; the price needs slightly more growth than I expect."],
        tagline: "India's largest business-to-business listings marketplace, earning subscription fees from small suppliers, with Busy accounting software on the side.",
        revenue: '₹1,569cr (FY26, consolidated)',
        products: [
            { name: 'Supplier subscriptions', text: "Silver (monthly or annual), Gold and Platinum packages give a supplier a storefront, better search placement and buyer enquiries. Gold and Platinum are about half of paying suppliers but over 75% of revenue; Platinum, the top tenth, brings about half." },
            { name: 'The free buyer marketplace', text: "132m product listings and 8.8m supplier storefronts; buyers post what they need and are matched with suppliers. New this year: payment protection up to ₹5 lakh, bank-account checks on sellers and an AI voice centre handling over a lakh calls a day." },
            { name: 'Busy accounting software', text: "Accounts, GST and stock software for small firms: Q1 FY27 revenue ₹36cr (+47%), billing ₹59cr (+10%) and operating profit ₹3cr." },
            { name: 'Start-up stakes and a finance arm', text: "About ₹750cr put into 13 start-ups (Vyapar, Bizom, Fleetx, EasyEcom and others) and Livekeeping, now fully owned, which lost ₹23.3cr in FY26. IndiaMART Finance, set up in August 2026, will arrange short-term credit with partner lenders rather than lend itself." },
        ],
        revenueText: "**About 91% of Q1 FY27 revenue came from the marketplace** (₹376cr, +9%) and 9% from Busy (₹36cr). Growth now comes almost entirely from price: revenue per paying supplier rose 9% to ₹69,000 a year while the number of suppliers was flat. Subscriptions are booked over their term, so revenue trails the cash collected: collections grew 8% to ₹463cr in Q1, and ₹2,014cr of prepaid revenue is still to be booked. Paying suppliers are 52% in the metros and 24% in tier-2 towns.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'IndiaMART marketplace', share: 91 }, { label: 'Busy software', share: 9 }] },
        ],
        customers: ["**Small manufacturers, traders and wholesalers** paying for visibility; industrial machinery, construction and electrical suppliers are about 30% of them. Platinum clients leave at under 1% a month, but monthly Silver clients at about 7%.", "**Business buyers** looking for suppliers, free of charge: 58–59% come back within 90 days. Google has been the main source of new buyers.", "**Small firms using Busy** for their accounts, GST filing and stock."],
        difficulty: { level: 'High', text: "8.8m supplier pages, 41m buyers and 25 years of search ranking are hard to copy, and buyers go where the suppliers are. But the technology is not hard, and a search engine or AI assistant that answers buyers directly could go around it." },
        moat: "A two-sided network: suppliers pay because buyers come, and buyers come because suppliers are listed, which let it raise Silver prices in 2025 and hold them. The weakness is its dependence on Google for traffic; its CEO calls the business ‘a typical S curve’ at the plateau.",
        salesDrivers: ["**Price per supplier**: up 8–9% a year; ‘most of the growth is coming from 8-9% ARPU growth’ because supplier numbers grow only 1–2%.", "**Net new paying suppliers**: −1,200 in Q4 and −1,852 in Q1 after the August–September 2025 Silver price rise; no guidance until several good quarters. The long-run aim is at least 5 lakh.", "**Buyer enquiries**: 26m in Q1, down 11%; 4–5 points from stricter buyer checks, the rest unexplained (AI search, the war, US tension).", "**Busy**: 27–30% growth a year expected for the next couple of years.", "**Treasury income**: other income of ₹204cr was about 30% of FY26 pre-tax profit and swings with bond yields (−₹34cr in Q4, +₹107cr in Q1)."],
        inputs: "**Staff, not materials.** About 6,200 employees sell and service subscriptions. In FY26 staff were 44% of sales, running costs 12% and other costs 14%; there are no goods to buy, and lease liabilities are only ₹23cr.",
        costEffect: "**Mostly insulated; staff pay is what matters.** There are no materials: its costs are the salaries of sales and service teams, servers and the cost of winning new suppliers. **Rule of thumb:** a 10% rise in staff costs not recovered through prices would cut the margin by about 4 points (30% to 26%). **What happened:** there is no input price index to chart. The operating margin rose from 24% in FY24 to 34% in FY25 (Screener) as it spent less on winning customers, then eased to 30% in FY26, which included a one-time ₹8.6cr labour-code charge. It was 32% in Q1 FY27 on ‘lower customer acquisition and operating leverage’, and no net hiring is planned.",
        competitors: [{ name: 'Google and AI answer engines', note: 'Not listings rivals, but they control its free traffic; AI answers push its links below the first screen on phones.' }, { name: 'Amazon Business, Moglix, OfBusiness and Udaan', note: 'They buy and sell or handle the transaction, rather than charging suppliers for leads.' }, { name: 'Tally and other accounting software', note: "Busy's rivals; Livekeeping is a mobile add-on for Tally users." }],
        position: "**India's largest online B2B marketplace**: about 50 lakh of India's 1.6 crore GST-registered businesses are registered on it.",
        money: "Screener shows **₹3,860cr of net cash**; the company put cash and treasury at ₹3,553cr in June 2026, against a market value of {mcap:Indiamart Intermesh|₹9,700cr}. There is no debt beyond ₹23cr of leases and almost no capex (free cash ₹687cr in FY26). It pays out 40–60% of cash generated: ₹60 a share for FY26, including a ₹30 special. The ₹750cr of start-up stakes needed a ₹16cr write-down in FY26. Promoters hold **49.1%**, roughly unchanged since 2023; no pledge.",
        watch: ["Net supplier additions turning positive (−615 in Q2 FY27).", "Buyer enquiries stabilising as AI search spreads.", "Collections growth staying above 8%."],
        charts: retailCharts['Indiamart Intermesh'],
    },
    {
        company: 'Aditya Birla Lifesty',
        inShort: ["**India's biggest branded menswear company**, owning Louis Philippe, Van Heusen, Allen Solly and Peter England, with Reebok, Van Heusen Innerwear and American Eagle as younger businesses; it was demerged from ABFRL in 2025.", "**Good:** revenue up 10% or more for three quarters, same-store growth of 7–8% and a slowly rising margin. **Bad:** leases, depreciation and interest leave net profit near 2% of revenue, net debt before leases fell only ₹55cr in FY26, inventory days are 252, and it may owe ABFRL ₹272cr for an old GST demand.", "**Verdict: follow.** A healthy brand business that keeps little of its profit; the price needs slightly more growth than I expect."],
        tagline: "India's largest branded menswear business, with four national brands sold through 3,362 stores, department stores, multi-brand shops and online.",
        revenue: '₹8,396cr (FY26, consolidated)',
        products: [
            { name: 'Lifestyle brands', text: "Louis Philippe, Van Heusen, Allen Solly and Peter England: shirts, trousers, suits and casual wear, with 500–700 stores each for the three biggest. Q1 FY27 revenue ₹1,725cr (+10%) at an 18.5% operating margin." },
            { name: 'Reebok', text: "The Indian licence for Reebok, whose revenue has more than doubled from ₹250cr when bought 2.5–3 years ago; about 210 stores. Clothing is now 32–33% of Reebok's sales." },
            { name: 'Van Heusen Innerwear and American Eagle', text: "The Emerging segment: ₹332cr in Q1 (+19%) at a 4.3% margin (+240 basis points). Innerwear aims for its first profitable quarter in FY27, with Q3 ‘a better shot’." },
            { name: 'Own factories', text: "About 40% of its clothes are made in its own plants in Karnataka, Tamil Nadu, Andhra Pradesh (a new one at Pulivendula) and Odisha; the rest is outsourced." },
        ],
        revenueText: "**Lifestyle brands were 84% of Q1 FY27 segment revenue** and Emerging brands 16%. By channel, **brand stores were 63%**, wholesale to multi-brand shops and department stores 19%, e-commerce 14% (+23%) and other sales 4%. About 36–37% of stores are company-owned and the rest franchised. Its 500-odd small-town stores are 15–16% of retail revenue and grow above 15%, against about 10% in big cities.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company presentation)', parts: [{ label: 'Lifestyle brands', share: 84 }, { label: 'Emerging brands', share: 16 }] },
            { caption: 'Revenue by channel, Q1 FY27 (company presentation)', parts: [{ label: 'Brand stores', share: 63 }, { label: 'Wholesale', share: 19 }, { label: 'E-commerce', share: 14 }, { label: 'Other', share: 4 }] },
        ],
        customers: ["**Office-going and middle-class men** buying formal and smart-casual clothes; casual wear gains 2–3 points of the mix a year.", "**Franchisees, multi-brand shops and department stores**, including Pantaloons (owned by ABFRL), buying wholesale.", "**Online shoppers** on its own sites and marketplaces; e-commerce is now ‘just marginally lower’ in profitability than stores."],
        difficulty: { level: 'Medium', text: "Shirts and trousers are easy to make; decades-old national brands, sites in every big mall and 800+ cities, and a supply chain that keeps 3,000-plus stores stocked are not. Rivals can match the product but not the brand recall." },
        moat: "Four brands it owns outright, 3,362 stores and close ties with mall developers give it scale and some pricing power: about half of same-store growth comes from price and richer mix. The weaknesses are the slow decline of formal wear and a stock-heavy model (252 inventory days).",
        salesDrivers: ["**Same-store growth**: 8% in Q1, the seventh strong quarter; management calls 7% the steady state.", "**New stores**: more than 300 gross and 150–200 net openings in FY27, weighted to H2; only 14 net in Q1.", "**Small towns and online**: small-town stores grow above 15% and e-commerce grew 23%.", "**Wholesale and festival timing**: wholesale rose only 5% in Q1 because festive billing moved into Q2.", "**Prices**: small rises already taken to cover 3–4% cost inflation expected in H2."],
        inputs: "**Fabric, finished garments, factory wages and store rent.** In FY26 goods bought for resale and materials were 40% of sales, store running, power and upkeep 10%, staff 11% and other costs 22%. Minimum-wage rises in garment states matter because it makes 40% of its clothes. Most rent sits below operating profit under Ind AS 116: FY26 depreciation (₹795cr) and interest (₹392cr) are mostly lease charges.",
        costEffect: "**Mostly passed on, with a lag.** It raises prices a little each season; management expects 3–4% cost inflation in H2 from raw materials, freight and minimum wages and says ‘we don't feel a material change in margin’. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (16% to 12%). **What happened:** there is no input price index to chart. The operating margin was 16% in both FY25 and FY26 (Screener) and 15% in Q1 FY27, when the gross margin fell about 150 basis points on channel mix and provisions for ageing stock. Q4 FY26 included a one-off ₹20cr production incentive. After rent, depreciation and interest, FY26 net profit was only ₹171cr.",
        competitors: [{ name: 'Arvind Fashions', note: 'U.S. Polo Assn., Arrow, Tommy Hilfiger and Calvin Klein, mostly licensed rather than owned.' }, { name: 'Trent (Westside) and Reliance Retail', note: "Their own labels sell smart menswear for less through large stores." }, { name: 'Online brands and marketplaces', note: 'Compete on price in casual wear; ABLBL now sells heavily through them too.' }],
        position: "**India's largest branded menswear business**; management says its same-store growth has been ‘marginally ahead of the industry’ for 7–8 quarters.",
        money: "Screener shows **₹2,926cr of net debt**, mostly leases; the company's own net debt before leases was ₹726cr at March 2026, only ₹55cr lower than a year earlier. FY27 capex is ₹250–300cr (₹200cr on stores); becoming debt-free is ‘not something that we are chasing’. CRISIL rates it AA+. It may have to repay ABFRL about ₹272cr of a pre-demerger GST demand, which it has not provided for; a writ is before the Karnataka High Court. Promoters hold **46.6%**, unchanged since listing; no pledge.",
        watch: ["Net debt before leases falling towards ₹500cr.", "Van Heusen Innerwear's first profitable quarter.", "The Karnataka High Court ruling on the GST demand."],
        charts: retailCharts['Aditya Birla Lifesty'],
    },
    {
        company: 'V-Mart Retail',
        inShort: ["**A value-fashion chain for small-town India**, with about 600 stores under the V-Mart name in the north and east and Unlimited in the south, plus the LimeRoad website.", "**Good:** best-ever profit (₹124cr) in FY26, same-store sales +9% in Q1 with footfall up 39%, and bank debt near nil. **Bad:** the margin after rent is 7.6%, net profit is only 3–4% of sales, and raw materials are up about 10% with only 3–5% of price room.", "**Verdict: follow.** Repaired and improving; the price needs slightly more growth than I expect."],
        tagline: "A value-fashion and general-goods chain for families in tier-2 to tier-4 towns, with a southern chain and a small online marketplace.",
        revenue: '₹3,789cr (FY26, standalone)',
        products: [
            { name: 'V-Mart stores', text: "490 stores in the north, east and west selling family clothing, some home goods and groceries: ₹899cr in Q1 FY27 at a 14.4% operating margin." },
            { name: 'Unlimited', text: "101 stores in the south, bought in FY22: ₹184cr in Q1 (+33%) at an 18.6% margin, its fastest-growing and most profitable unit." },
            { name: 'LimeRoad', text: "An online fashion marketplace bought in FY23: ₹22cr of goods sold and ₹10.4cr of commission in Q1, with the loss down to ₹2.8cr." },
        ],
        revenueText: "**V-Mart stores were 82% of Q1 FY27 revenue**, Unlimited 17% and LimeRoad 1%. **Clothes were 81% of sales**, other goods 9% and groceries 10%. Its largest states are Uttar Pradesh and Bihar, with Tamil Nadu, Jharkhand and Rajasthan now large. Quarters swing with festivals: Q3 is the peak, and Q2 FY26 made a loss.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'V-Mart stores', share: 82 }, { label: 'Unlimited', share: 17 }, { label: 'LimeRoad', share: 1 }] },
            { caption: 'Sales by category, Q1 FY27 (company presentation)', parts: [{ label: 'Clothing', share: 81 }, { label: 'Groceries', share: 10 }, { label: 'Other goods', share: 9 }] },
        ],
        customers: ["**Families earning about ₹30,000 a month** in tier-2 to tier-4 towns, buying 2–3 times a year; about 72% of sales come from repeat customers.", "**Southern shoppers** at Unlimited, where same-store sales rose 13% in Q1.", "**Online shoppers and sellers** on LimeRoad."],
        difficulty: { level: 'Low', text: "Cheap clothes are easy to source and stores are easy to copy. The skill is in running 95–98% fixed costs tightly, buying in volume and choosing towns well." },
        moat: "Cost and reach: with 95–98% of costs fixed, 3–4% same-store growth covers inflation, and larger orders (7,000–8,000 pieces a colour, up from 3,000) cut buying costs. The weakness: it learned in FY22–23 that raising prices drives customers away, and shoppers now browse more before buying (conversion down to 38–39%).",
        salesDrivers: ["**Festival and wedding dates**: Durga Puja moved 19 days into Q3, so Q2 FY27 will be weaker than last year.", "**New stores**: store area up 13–15% a year; 90+ gross openings in FY27, mostly in H2, with more Unlimited stores.", "**Same-store growth**: eleven quarters positive in a row; guided at mid-to-high single digits for FY27.", "**Monsoon and rural incomes** in Uttar Pradesh and Bihar.", "**GST**: the September 2025 cut on cheap clothes helped; the boost fades from Q3 FY27."],
        inputs: "**Garments (polyester is 70–75% of winter sourcing), store rent and staff.** In FY26 goods bought for resale and materials were 66% of sales, store running, power and upkeep 5%, staff 10% and other costs 5%. Rent has crept up to about 8% of sales against 4.5% historically; under Ind AS 116 it sits mostly below operating profit, with ₹858cr of lease liabilities.",
        costEffect: "**Partly passed on.** Price rises are capped at 3–5% because shoppers leave when prices jump, so it expects to give up 0.5–0.75 points of gross margin as raw materials rise about 10%; minimum-wage rises in Uttar Pradesh add cost. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 7 points (14% to 7%). **What happened:** there is no input price index to chart. The operating margin rose from 8% in FY24 to 12% in FY25 and 14% in FY26 (Screener) as LimeRoad losses shrank and stores got busier. It was 15% in Q1 FY27, and 7.6% after rent against 6.9%, even though gross margin fell 80 basis points on mix and bigger provisions for old stock.",
        competitors: [{ name: 'Trent (Zudio)', note: 'Fast-growing value leader; management says new rival stores no longer dent its existing stores.' }, { name: 'V2 Retail', note: 'A faster-growing small-town chain in the same states.' }, { name: 'Reliance Trends and regional chains', note: 'Compete town by town on price.' }],
        position: "**One of India's largest value-fashion chains by stores and area**, in 335 cities across 28 states and union territories.",
        money: "Screener shows **₹938cr of net debt**, of which ₹858cr is leases; bank borrowing was about ₹100cr in March and ‘near-nil’ in June, with no long-term debt. FY27 capex of ₹170–180cr comes from profits; Q1 generated ₹76cr of cash. ICRA rates it AA-. It issued 3-for-1 bonus shares in FY26 and pays a small dividend. Promoters hold **44.2%**, unchanged since 2023.",
        watch: ["Q3 festive same-store growth.", "Gross margin holding near 34–35%.", "90+ openings landing in H2."],
        charts: retailCharts['V-Mart Retail'],
    },
    {
        company: 'Aditya Vision',
        inShort: ["**The leading electronics and appliance chain in Bihar**, with 210 stores in Bihar, Jharkhand, Uttar Pradesh and Chhattisgarh selling ACs, fridges, TVs and phones of the big brands.", "**Good:** revenue has grown about 31% a year since FY22, same-store sales rose 18% in each of the last two quarters, and it has never closed a store. **Bad:** stock ties up cash (inventory days up from 108 to 136, operating cash negative in FY24 and FY25), results depend on the summer, and promoters sold down from 53% to 47%.", "**Verdict: follow.** A fine local franchise, but stock has eaten the cash: operating cash was ₹78cr against ₹399cr of profit over FY22–FY26 (20%), though FY26 converted 64%; the price also needs slightly more growth than I expect."],
        tagline: "A regional chain of consumer-electronics and appliance stores in the Hindi heartland, led by Bihar.",
        revenue: '₹2,672cr (FY26, standalone)',
        products: [
            { name: 'Large appliances', text: "ACs, refrigerators, washing machines and TVs. The unofficial Q1 transcript puts ACs at about 42% of summer-quarter sales (+35%) and fridges at about 15%." },
            { name: 'Phones and laptops', text: "From the major brands; their average prices rose 20–25% in Q1. It has no own labels and buys about 85% direct from makers." },
            { name: 'The stores', text: "210 stores averaging about 4,420 sq ft. Each costs ₹80–90 lakh to fit out plus ₹1.1cr of stock, and breaks even within 9–12 months according to management." },
        ],
        revenueText: "**Bihar was 72% of Q1 FY27 revenue**, Uttar Pradesh 16% and Jharkhand 11%, with Chhattisgarh just starting; Bihar was 93% in FY23. The company does not publish a category split. Q1 is about 40% of a year's revenue. The average bill has barely moved (₹21,156 in FY23, ₹22,088 in FY26), so growth comes from more bills and more stores.",
        mixes: [
            { caption: 'Revenue by state, Q1 FY27 (company presentation)', parts: [{ label: 'Bihar', share: 72 }, { label: 'Uttar Pradesh', share: 16 }, { label: 'Jharkhand', share: 11 }, { label: 'Chhattisgarh', share: 1 }] },
        ],
        customers: ["**Families in towns and districts** of Bihar and neighbouring states buying ACs, fridges and phones; Bihar government subsidy schemes help demand.", "**Shoppers moving from local dealers** to organised stores; it has stores in all 38 Bihar districts."],
        difficulty: { level: 'Low', text: "Any shop can sell branded appliances at the maker's price. What is hard to copy is 27 years of trust in Bihar, a store in every district and the buying terms that come with volume." },
        moat: "Local density: over half of Bihar's organised electronics market (a CRISIL report cited by the company) and no store closed in 27 years; makers help clear unsold stock. The weakness is that the goods are identical everywhere, so Flipkart and Amazon discounts cap its prices.",
        salesDrivers: ["**The summer**: ACs drive Q1. A cool 2025 summer slowed FY26; Q1 FY27 grew 27% despite a mild summer in the east, helped by heat in Uttar Pradesh.", "**New stores**: 102 opened in three years; more than 30 planned in FY27, including Chhattisgarh (10–12), Madhya Pradesh (6–10) and West Bengal (6–10). Only 3 opened in Q1.", "**Same-store growth**: 8% in FY26 and 18% in Q4 and Q1.", "**Maker price rises**: new energy-rating rules lifted AC prices 8–10%, and it stocked up beforehand.", "**GST cut**: ACs and large TVs moved from 28% to 18% GST in September 2025."],
        inputs: "**Branded appliances and phones bought from makers.** In FY26 goods bought for resale and materials were 84% of sales, store running, power and upkeep 1%, staff 3% and other costs 3%. Stores are leased, so most rent sits below operating profit under Ind AS 116.",
        costEffect: "**Passed on.** Makers set selling prices and it earns a 13–16% trading margin, so price rises go straight to shoppers; the risk is stock left after a weak summer, which makers help clear. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 8 points (9% to 1%). **What happened:** there is no input price index to chart. The operating margin slipped from 10% in FY24 to 9% in FY25 and FY26 (Screener) as new stores and a poor summer weighed. It was 10% in Q1 FY27, when the gross margin rose 75 basis points on stock bought before makers' price rises; management guides 8–10% for the year.",
        competitors: [{ name: 'Flipkart and Amazon', note: 'Same brands, heavy discounts and doorstep delivery.' }, { name: 'Reliance Digital and Croma', note: 'National chains, with fewer stores in its districts.' }, { name: 'Local dealers', note: 'Still a large share in small towns, losing ground to organised stores.' }],
        position: "**Over half of Bihar's organised electronics market** (a CRISIL report cited by the company) and the largest electronics retailer in Jharkhand.",
        money: "Screener shows **₹444cr of net debt**, including leases; working-capital loans fell to about ₹125cr by June after stock was cut from ₹840cr to ₹663cr. CARE puts gearing at 0.83x; its downgrade trigger is an operating cycle above 120 days (93 now). New stores (about ₹60cr a year of fit-outs and stock) are funded from profits and bank lines; no equity raise is planned, the last being ₹282cr in FY24. Promoters hold **47.1%**, down from 61.2% in September 2023 and 53.2% in June 2025.",
        watch: ["Operating cycle falling below 90 days.", "30+ openings without losses in the new states.", "The new auditor's first report."],
        charts: retailCharts['Aditya Vision'],
    },
    {
        company: 'Arvind Fashions',
        inShort: ["**A house of licensed and owned clothing brands**: U.S. Polo Assn., Tommy Hilfiger and Calvin Klein (the last two through a 50:50 venture with PVH), Arrow and Flying Machine, sold through 1,030 brand stores, 9,000+ multi-brand shops and online.", "**Good:** same-store growth up to 11.6%, gross margin 56.7% with less discounting, and CARE turned its outlook positive. **Bad:** inventory days rose from 163 to 211 in two years, profit to Arvind's shareholders was only ₹10cr in Q1, and its biggest brands are licensed, not owned; no extension of the Tommy Hilfiger licence beyond December 2026 has been disclosed.", "**Verdict: follow.** Improving brands, swelling stock; the price needs slightly more growth than I expect."],
        tagline: "A branded-apparel company selling mostly licensed international brands through its own and franchised stores, multi-brand shops, department stores and online.",
        revenue: '₹5,266cr (FY26, consolidated)',
        products: [
            { name: 'U.S. Polo Assn.', text: "Its biggest brand (licensed): casual wear plus footwear (19 Stride stores), innerwear and kids. The company does not give its revenue; an analyst put it at ₹2,400–2,500cr, unconfirmed." },
            { name: 'Tommy Hilfiger and Calvin Klein', text: "Premium brands run through PVH Arvind Fashion, a 50:50 venture with PVH that Arvind consolidates. The Calvin Klein licence runs to December 2028; the annual report shows Tommy Hilfiger valid to 31 December 2026 with no extension disclosed, though in.tommy.com launched in September 2026." },
            { name: 'Arrow and Flying Machine', text: "Arrow (licensed formal wear) and Flying Machine (owned denim). It bought Flipkart's 31.25% of the Flying Machine company for ₹135cr in December 2025; a website and app are due in H2 FY27." },
            { name: 'New categories', text: "Footwear, innerwear, womenswear and kids were 24% of FY26 sales and grow about 25% a year." },
        ],
        revenueText: "The company does not give brand-wise revenue. By channel in Q1 FY27, **brand stores were 45%**, its own online sales 18%, wholesale to multi-brand shops and department stores 23%, and marketplaces and other sales 14%. Direct channels rose to 62% from 58%. Most new stores are franchise-owned but stocked on consignment, so Arvind books the sale only when the shopper buys.",
        mixes: [
            { caption: 'Revenue by channel, Q1 FY27 (company presentation)', parts: [{ label: 'Brand stores', share: 45 }, { label: 'Wholesale', share: 23 }, { label: 'Own online', share: 18 }, { label: 'Marketplaces and other', share: 14 }] },
        ],
        customers: ["**Young and aspirational urban shoppers** buying international brand names, in about 475 cities.", "**Franchisees, multi-brand shops and department stores**, where management says it is gaining share (secondary sales up double digits).", "**Online shoppers** on its own sites and marketplaces; its own online sales grew 38% in Q1."],
        difficulty: { level: 'Medium', text: "The clothes are made by contract factories and are not hard to copy; the global brand names are, which is why it pays royalties for them. Running 1,030 stores and 9,000 wholesale accounts without piling up stock is the real skill." },
        moat: "Well-known global brands, wide distribution and discipline on discounts (it joined end-of-season sales only for the weeks it needed). The weakness: U.S. Polo Assn., Tommy Hilfiger and Calvin Klein are licensed, PVH owns half of the venture that earns most of the profit, and outside that venture return on capital was about 9% in FY25 (CARE).",
        salesDrivers: ["**Same-store growth**: 8.1% in FY26 and 11.6% in Q1, split about half price and half volume.", "**New space**: about 1.5 lakh sq ft net in FY27, mostly franchise stores; only about 20,000 was added in Q1.", "**Own online sales**: growing over 20%, 38% in Q1.", "**New categories**: footwear, innerwear, women's and kids growing about 25%.", "**Guidance**: ‘mid-double-digit’ revenue growth with 30–40 basis points of margin gain."],
        inputs: "**Garments from contract factories, royalties to brand owners, rent and marketing.** In FY26 goods bought for resale and materials were 46% of sales, store running, power and upkeep 12%, staff 6% and other costs 23%, which include royalties and advertising. It owes minimum royalty and advertising payments of ₹74cr and ₹8cr on Calvin Klein and ₹16cr on Tommy Hilfiger. Rent takes 4–5 points of margin that sit below operating profit under Ind AS 116.",
        costEffect: "**Mostly passed on.** Brands with a 56–57% gross margin can raise prices, and management warns that next spring's buying, due within two months, may need price rises as the rupee weakens and wages rise. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (14% to 9%). **What happened:** there is no input price index to chart. The operating margin rose from 12% in FY24 to 13% in FY25 and 14% in FY26 (Screener) as it discounted less and sold more directly. It was 12.5% in Q1 FY27, a seasonally quiet quarter, up 44 basis points on a year earlier as gross margin rose about 90 basis points while marketing rose about 50.",
        competitors: [{ name: 'Aditya Birla Lifestyle Brands', note: 'Louis Philippe, Van Heusen, Allen Solly and Peter England, owned outright and with three times as many stores.' }, { name: 'Trent (Westside) and Reliance Retail', note: 'Own-label casual wear at lower prices in large stores.' }, { name: 'Online and quick-commerce fashion', note: 'Marketplaces discount heavily; Arvind now pushes its own sites instead.' }],
        position: "**One of India's main branded-apparel houses**, with 1,030 brand stores in 475+ cities; it says it is gaining share in multi-brand and department stores (no outside data).",
        money: "Screener shows **₹1,272cr of net debt**, including ₹804.5cr of leases; bank debt was about ₹531cr in March, up from about ₹390cr, after the ₹135cr Flipkart buy-out. Term debt is being repaid first; the net-debt-zero goal was not repeated on the Q1 call. Operating cash fell from ₹530cr to ₹404cr in FY26 as stock rose. Capex of ₹120–150cr a year (CARE) comes from its own cash. CARE rates it A, outlook Positive. Shares of subsidiaries are pledged for bank loans (a company, not a promoter, pledge). Promoters hold **35.1%**, down from 36.8% in September 2023.",
        watch: ["Inventory turns rising back to 3.7–3.8x.", "Bank debt returning towards ₹390cr.", "The Tommy Hilfiger licence term beyond December 2026."],
        charts: retailCharts['Arvind Fashions'],
    },
    {
        company: 'Entero',
        inShort: ["**One of India's three largest medicine wholesalers**, buying from about 3,000 drug and device makers and delivering to chemists and hospitals from 138 warehouses in 19 states.", "**Good:** it met every FY26 promise, grew 17.8% organically in Q1 against a market of about 14%, and reached its 5% margin target. **Bad:** growth was built on 51 acquisitions, ₹749cr of goodwill brings its return on all capital to about 10%, it owes ₹343cr to buy out partners (₹309cr within a year), and subsidiary audits flag stock statements that do not match the books.", "**Verdict: follow.** Delivering, but operating cash was −₹98cr against ₹253cr of profit over FY22–FY26, and FY26 was the first positive year (₹96cr, 66% of profit). The price now fits, but an own needs at least half of five years' profit to arrive as cash."],
        tagline: "A national wholesaler of medicines and medical devices to chemists and hospitals, built largely by buying regional distributors.",
        revenue: '₹6,591cr (FY26, consolidated)',
        products: [
            { name: 'Medicine distribution to chemists', text: "Warehousing, credit and delivery: 72,000+ retailers served in Q1 FY27, 83,400 products billed, cold chain in every warehouse. Generic weight-loss drugs already bring ₹10–12cr a month." },
            { name: 'Hospital supply', text: "Medicines and consumables for 2,300+ hospitals in the quarter, including government contracts that make billing lumpy." },
            { name: 'MedTech', text: "Diagnostic reagents and machines, heart and bone implants and consumables: over ₹1,000cr a year after three FY26 acquisitions. Machines are placed in labs on 5-year reagent contracts." },
            { name: 'Selling for makers', text: "For some makers it does the selling and marketing as well as delivery (the ‘commercial role’), ‘more than 10–15%’ of sales, earning about double a normal distribution margin." },
        ],
        revenueText: "The company reports one segment and does not publish a split. **MedTech is expected to be 15–20% of FY27 revenue**, and the commercial-role work is ‘more than 10–15%’. All revenue is in India. Q1 FY27 revenue rose 38%: 17.8% organic and 20.4% from last year's acquisitions counted for a full quarter.",
        customers: ["**Independent chemists**: about 1 in 10 of India's roughly 10 lakh pharmacies over a year. They split orders across several wholesalers and choose on range, fill rate and credit.", "**Hospitals and labs**, including government diagnostic contracts.", "**About 3,000 drug and device makers** that use it to reach chemists, some on exclusive all-India terms."],
        difficulty: { level: 'Medium', text: "Anyone with a licence and a warehouse can distribute medicines, and 90% of the trade is still with small players. Buying scale, 138 cold-chain warehouses and a range of 83,000+ products are harder to copy." },
        moat: "Scale in a fragmented trade: more makers mean a wider range, which wins more chemists, and it grew 1.4–1.8 times as fast as the market every quarter of FY26. The weakness is a thin margin (10–11 paise gross per rupee) and customers who can switch wholesaler any day.",
        salesDrivers: ["**The medicines market**: about 14% growth in Q1 but about 10% in FY26, mostly price; a fall back to 7–9% would slow it.", "**Share gains from small wholesalers**: organic growth of 1.4–1.8 times the market.", "**MedTech and selling-for-makers deals** at about double the normal margin.", "**Acquisitions**: 51 so far at 5–7 times operating profit; none large planned in FY27, perhaps some in Q4.", "**Guidance**: 23% revenue growth in FY27 excluding new deals, and over 20% a year for 3–4 years without big acquisitions."],
        inputs: "**Medicines and medical devices bought from makers.** In FY26 goods bought for resale and materials were 90% of sales, staff 4% and other costs 2%. Makers set most prices (the government caps some), and trade margins are largely fixed along the chain.",
        costEffect: "**Passed on.** Makers set the prices and it earns a margin on each rupee, so price rises flow through; its margin moves with product mix, buying terms and its own costs. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 9 points (4% to −5%), which a wholesaler could not absorb. **What happened:** there is no input price index to chart. The operating margin rose from 2.9% in FY24 to 3.4% in FY25 and 4.0% in FY26 (Screener), and to 5.0% in Q1 FY27, as gross margin rose to 11.4% (+147 basis points) on buying scale, MedTech and selling-for-makers deals.",
        competitors: [{ name: 'Small local wholesalers', note: 'Still about 90% of distribution, and losing share to organised players.' }, { name: 'Pharmacy chains buying direct', note: 'Apollo and MedPlus buy much of their stock straight from makers.' }],
        position: "**Among India's top three healthcare distributors by revenue** (company claim), in a trade where about 90% is still with small players.",
        money: "Screener shows **₹515cr of net debt**; bank and finance-company borrowings were ₹567cr at March 2026, including ₹123cr of term loans for the last acquisitions; June net debt was not given. It also owes ₹343cr to buy out minority partners in acquired firms, ₹309cr of it within a year, more than FY26 operating cash (₹96cr, its first positive year). It aims to turn at least half of FY27 operating profit into cash. India Ratings rates it A-. Promoters, including OrbiMed Asia, hold **52.4%**, unchanged; no dividend.",
        watch: ["Half of FY27 operating profit turning into cash.", "Partner buy-outs paid without new debt.", "Fewer audit flags at subsidiaries in FY27."],
        charts: retailCharts['Entero'],
    },
    {
        company: 'Sai Silks (Kalamandir)',
        inShort: ["**South India's largest saree retailer**, with 85 large stores in Andhra Pradesh, Telangana, Tamil Nadu and Karnataka under five names, led by Varamahalakshmi Silks for Kanchipuram wedding silks.", "**Good:** about ₹330cr of net cash, 95–96% of sales at full price and a steady 42% gross margin. **Bad:** same-store sales fell 7.5% in Q1, guidance was cut within two months, it holds ₹816cr of stock, and the auditor flagged unconfirmed customer and supplier balances.", "**Verdict: wait.** Cheap, but shrinking like-for-like."],
        tagline: "A South Indian chain of large saree and ethnic-wear stores, from premium wedding silks to value fashion.",
        revenue: '₹1,654cr (FY26, standalone)',
        products: [
            { name: 'Varamahalakshmi Silks', text: "Premium Kanchipuram and wedding silks: about 52% of FY26 sales and the best margins; a new store pays back in 8–9 months." },
            { name: 'Kalamandir and Mandir', text: "Kalamandir is the mid-market family format and leads in Karnataka; Mandir sells premium designer wear." },
            { name: 'KLM Fashion Mall', text: "Value fashion for the whole family, including men and children: 19 large stores, mostly in Telangana, whose sales fell about 3% in FY26; one store is closing." },
            { name: 'Valli Silks', text: "Small everyday-saree stores: 11 opened in FY26, but the roll-out is paused because rents are too high for their sales." },
        ],
        revenueText: "**Andhra Pradesh and Telangana each brought 29% of Q1 FY27 revenue**, Tamil Nadu 23%, Karnataka 18% and Puducherry 1%. **Varamahalakshmi Silks was about 52% of FY26 sales**; the other formats are not split. Sarees were about 71.5% of revenue in FY25. It refuses online marketplaces, which charge 20–45% plus returns. Telangana revenue fell from about ₹600cr in FY23 to about ₹500cr in FY26.",
        mixes: [
            { caption: 'Revenue by state, Q1 FY27 (company presentation)', parts: [{ label: 'Andhra Pradesh', share: 29 }, { label: 'Telangana', share: 29 }, { label: 'Tamil Nadu', share: 23 }, { label: 'Karnataka', share: 18 }, { label: 'Puducherry', share: 1 }] },
            { caption: 'Revenue by format, FY26 (company call)', parts: [{ label: 'Varamahalakshmi Silks', share: 52 }, { label: 'Other formats', share: 48 }] },
        ],
        customers: ["**Families buying for weddings and festivals**, spending ₹4,000–5,000 a bill on average; silk sarees are a large, rare purchase.", "**Shoppers in farming towns** such as Rajahmundry and Vijayawada, whose spending follows the rains.", "**Value shoppers** at KLM, where rivals are winning."],
        difficulty: { level: 'Medium', text: "Buying silk well from weaving clusters, holding deep ranges of costly sarees and running 10,000 sq ft stores in prime spots take capital and know-how. But there are many regional rivals, and value formats are easy to copy." },
        moat: "Sourcing from weaving clusters and depth of range: 95%+ full-price sales and a gross margin near 42% even in a weak quarter. The weakness: its value format and home state are shrinking, and growth now comes only from new space, which ties up more stock.",
        salesDrivers: ["**Wedding dates**: Adhik Maas removed dates from mid-May to mid-June; November–December is the next test.", "**New space**: about 1 lakh sq ft in FY27, mostly Kalamandir and Varamahalakshmi stores; entry to Pune and Kerala pushed to late FY27 or FY28.", "**Same-store growth**: +3% in FY26 and −7.5% in Q1 FY27 against a high base.", "**Gold and silver prices**: zari contains both, so saree prices rise with them.", "**Guidance**: 12–15% revenue growth for FY27 (August), though it will ‘still aim to do around 15%’; in May it had accepted an analyst's 15–20% or 20–25% as ‘something in the ranges that you mentioned’."],
        inputs: "**Silk and other sarees bought from weavers and mills, staff and rent.** In FY26 goods bought for resale and materials were 58% of sales, store running, power and upkeep 4%, staff 14% and other costs 8%. Dyeing and fuel costs are rising. Rent sits mostly below operating profit under Ind AS 116 (₹341cr of lease liabilities).",
        costEffect: "**Mostly passed on.** Higher silk and zari costs show up in saree prices, and it sells almost everything at full price. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 6 points (16% to 10%). **What happened:** there is no input price index to chart. The operating margin was 16% in FY24, 15% in FY25 and 16% in FY26 (Screener). It fell to 14% in Q1 FY27 against 15% because same-store sales dropped 7.5% while rent and staff at new stores kept running; the gross margin held at about 42%. Management dropped its 17.5–18% FY27 margin target for ‘better than what we closed last year’.",
        competitors: [{ name: 'Other South Indian saree and silk retailers', note: 'Many regional chains in each state compete on range and wedding custom.' }, { name: 'Value chains (Zudio, V-Mart’s Unlimited)', note: 'Winning against KLM in low-price family fashion.' }],
        position: "**South India's largest saree-led ethnic retailer**, with 85 stores averaging about 9,800 sq ft.",
        money: "Screener shows **₹13cr of net debt**, because it counts ₹341cr of leases; the company has about ₹330cr of net cash and calls itself debt-free. Operating cash jumped to ₹323cr in FY26, helped by paying suppliers later (payable days up from 11 to 62). ₹20.47cr of IPO money for a warehouse is still unspent. It has no credit rating, and leases offices from a director's brother for up to ₹4.8cr a year. Promoters hold **61.0%**, roughly unchanged since 2023; no pledge.",
        watch: ["Same-store growth above +3% in the November–December wedding season.", "Stock growing slower than sales.", "No further store closures."],
        charts: retailCharts['Sai Silks (Kalamandir)'],
    },
    {
        company: 'Crizac',
        inShort: ["**A student-recruitment platform, not a shop**: British universities pay it a commission for each overseas student it enrols, and it passes most of that to 17,400+ local agents in 85+ countries.", "**Good:** a 27% margin, ₹570cr of net cash, a promise to pay out at least 40% of profit, and its share of UK study visas rose from 3.5% to 6%. **Bad:** about 99% of revenue comes from UK universities, revenue fell 4% in Q1, FY27 is now guided flat, Britain is tightening student visas, and a ₹55cr fee paid in FY26 is unexplained.", "**Verdict: wait.** Highly profitable, in a shrinking market; the price now fits, but wait for H2 to show revenue recovering."],
        tagline: "A business-to-business platform linking overseas students' local agents with British and other universities, paid by commission.",
        revenue: '₹1,042cr (FY26, consolidated)',
        products: [
            { name: 'University recruitment', text: "Works with 450+ universities (110 paid it in Q1 FY27), including 95+ of the roughly 100 commercial UK universities. It earns a commission per enrolled student, about ₹4.2 lakh in Q1." },
            { name: 'The agent network', text: "17,400+ counselling agents (4,032 active in Q1) who find the students; their commissions, paid in pounds, are 67–70% of its costs." },
            { name: 'New services and markets', text: "ForeignAdmits (student loans and visas, 1–1.5% of revenue), 51% of Global Tree Careers (student counselling in India) and small buys in Latin America, New Zealand, Mexico and the Netherlands; Australian and US contracts are still being negotiated." },
        ],
        revenueText: "**UK universities brought 98.7% of Q1 FY27 revenue**, Ireland 0.9% and the rest 0.4%. By where students come from, **India was 50%**, the rest of Asia 27% and Africa 22%. The top 10 universities paid 68.7% of Q1 revenue. Revenue per student follows the pound and which universities students choose, and Q3 and Q4 bring about two-thirds of the year's revenue.",
        mixes: [
            { caption: "Revenue by students' home region, Q1 FY27 (company presentation)", parts: [{ label: 'India', share: 50 }, { label: 'Rest of Asia', share: 27 }, { label: 'Africa', share: 22 }] },
            { caption: 'Revenue by destination, Q1 FY27 (company presentation)', parts: [{ label: 'United Kingdom', share: 99 }, { label: 'Ireland and others', share: 1 }] },
        ],
        customers: ["**British universities**, which pay commissions for enrolled overseas students, on 90–180-day terms.", "**Local agents and counsellors** in India, the rest of Asia and Africa, who bring the students and get most of the commission.", "**Students** applying abroad: 1.04 lakh applications and 4,751 enrolments in Q1."],
        difficulty: { level: 'Medium', text: "University contracts take years to win, which is why its Australian and US entry keeps slipping, and Britain's new agent-quality rules favour large, compliant agents. But the service is simple and depends entirely on visa policy." },
        moat: "A network of 95+ UK commercial universities and 17,400 agents, with compliance rules pushing universities towards fewer, bigger partners. The weakness: no pricing power, as revenue per student depends on the pound, the mix of universities and volume bonuses it can miss, and almost all of it comes from one country.",
        salesDrivers: ["**UK visa policy**: study visas fell 16% in the year to August 2026; post-study work falls to 18 months from January 2027 and a £925 levy per student starts in August 2028.", "**The pound**: it averaged ₹116 in FY26 against ₹105 in FY25, which lifted revenue per student and added 1–1.5 points of margin.", "**University mix and bonuses**: in Q1 enrolments rose 15% but revenue fell 4%, as students chose cheaper universities and bonuses were missed.", "**New destinations**: the aim is to cut the UK below 60% within three years.", "**Seasonality and travel**: Q2 was hit by Middle East flight cancellations; management hopes for ‘pent-up demand’ in Q3–Q4."],
        inputs: "**Commissions paid to local agents, not materials.** In FY26 the running-costs line was 68% of sales, which is mainly agent commissions paid in pounds; staff were 3% and other costs 2%. Because it earns and pays in pounds, a stronger pound lifts both sides.",
        costEffect: "**Mostly insulated from materials; the agents' share is what matters.** There are no goods; its margin is the gap between what universities pay and what agents take, less a small staff and technology bill. **Rule of thumb:** a 10% rise in agent commissions not recovered would cut the margin by about 7 points (27% to 20%). **What happened:** there is no input price index to chart. The operating margin was 27% in FY24, 25% in FY25 and 27% in FY26 (Screener), helped by 1–1.5 points from the pound; quarters range from 24% to 39% with the seasons. Q1 FY27 was 30%, and management guides 25–27%. Q1 profit was also helped by a change in depreciation method.",
        competitors: [{ name: 'Other UK recruitment agents and aggregators', note: 'Many smaller agents are being squeezed out by the new compliance rules.' }, { name: "Universities' own offices and direct applications", note: 'Universities can recruit directly and are cutting agent lists.' }],
        position: "**Works with 95+ of about 100 commercial UK universities**; its share of UK study visas rose from 3.5% in FY24 to 6% in FY26.",
        money: "Screener shows **₹194cr of net cash**; the company put net cash at ₹467cr in March and ₹570cr in June. It has no debt and needs little capex. FY26 operating cash was ₹144cr, only 56% of operating profit, after an unexplained ₹55cr ‘termination fee’. It paid ₹8 a share for FY26 and has promised at least 40% of profit for three years. The July 2025 IPO was entirely a promoter sale. Promoters hold **79.9%** and must cut to 75% within three years of listing.",
        watch: ["H2 FY27 revenue at least matching H2 FY26.", "Signed Australian or US contracts producing revenue.", "Promoter share sales to reach 75%."],
        charts: retailCharts['Crizac'],
    },
    {
        company: 'Electronics Mart Ind',
        inShort: ["**India's fourth-largest electronics and appliance chain** (company claim), with 227 large Bajaj Electronics stores, mainly in Hyderabad, Andhra Pradesh and Telangana, plus Delhi NCR.", "**Good:** a record Q1 (revenue +39%, profit ₹121cr, more than all of FY26), younger stores' margins up to 8.1%, and ₹560cr of stock loans repaid. **Bad:** it rode a hot summer after a cool one, FY26 profit had fallen 33%, and promoters personally guarantee its bank lines.", "**Verdict: wait.** A record summer, not a new normal; the price needs more growth than I expect."],
        tagline: "A regional chain of large consumer-electronics and appliance stores, the market leader in Hyderabad, now expanding into Delhi NCR and Kolkata.",
        revenue: '₹7,183cr (FY26, consolidated)',
        products: [
            { name: 'Large appliances', text: "ACs, refrigerators, washing machines and TVs, 48% of Q1 FY27 sales; top brands only (LG, Samsung and Sony are 95–97% of its TVs)." },
            { name: 'Mobiles', text: "39% of Q1 sales and the largest category in FY26 (₹3,067cr); it sells more costly phones than the market average." },
            { name: 'Small appliances, IT and specialty stores', text: "13% of Q1 sales, plus 7 specialty stores (Kitchen Stories, Audio & Beyond, Easy Kitchens, Charcoal Project)." },
            { name: 'The stores', text: "About 10,000 sq ft each; 192 leased and 20 owned. A store costs about ₹2.5cr plus ₹2cr of stock and pays back in 10–11 months in the South, 16–18 in the North." },
        ],
        revenueText: "In FY26, **mobiles brought ₹3,067cr and large appliances ₹2,940cr**, with small appliances and IT ₹923cr; in summer-heavy Q1 FY27 large appliances rose to 48%. It sells only branded goods, with no own labels and no franchises. Hyderabad (72 stores), Andhra Pradesh (69) and up-country Telangana (46) are the core; the 35 NCR stores made about ₹585–590cr in FY26 at a thin margin, and Kolkata opens this year.",
        mixes: [
            { caption: 'Revenue by category, FY26 (company call)', parts: [{ label: 'Mobiles', share: 44 }, { label: 'Large appliances', share: 42 }, { label: 'Small appliances, IT and other', share: 13 }] },
        ],
        customers: ["**Middle and upper-middle-income families** in Hyderabad and the towns of Andhra Pradesh and Telangana; the average bill was ₹23,474 in Q1.", "**Phone buyers** trading up to premium models.", "**Delhi NCR shoppers**, a newer and far less profitable cluster."],
        difficulty: { level: 'Low', text: "Everyone sells the same brands at similar prices. What is hard to copy is a 40-year name in Hyderabad, dense stores, direct buying from makers (only about ₹50cr of ₹7,000cr+ goes through distributors) and good terms from brands." },
        moat: "Local density and buying scale in the Telugu states: Hyderabad same-store sales still grew 32% in Q1 and mature stores earn an 11.2% margin. The weakness is that shoppers compare prices online, NCR took four years to reach low single-digit margins, and phones face a weak market.",
        salesDrivers: ["**Summer heat**: Q1 FY27 same-store sales rose 34% after a poor 2025 summer, so next summer is a hard comparison.", "**Phone prices and launches**: IDC expects 128–130m smartphones in 2026 against 152m in 2025, at higher prices.", "**New stores**: 25–30 in FY27 (NCR 8–10, Bengal 10–12, South about 5).", "**Maker price rises**: buying ahead of rises lifted Q1 gross margin, ‘a temporary upside’.", "**GST**: ACs and large TVs moved from 28% to 18% GST in September 2025."],
        inputs: "**Branded appliances and phones bought direct from makers.** In FY26 goods bought for resale and materials were 86% of sales, store running, power and upkeep 2%, staff 2% and other costs 4%. Maker rebates lower its purchase cost and are the auditor's main judgement area. It pays suppliers in about four days and funds stock with bank lines; store rent sits largely below operating profit under Ind AS 116.",
        costEffect: "**Passed on.** Makers set prices and it earns a trading margin of about 15–17%; the swing factors are rebates, stock left after the season, and rent. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 9 points (6% to −3%). **What happened:** there is no input price index to chart. The operating margin was 7% in FY24 and FY25 and 6% in FY26 (Screener) as new NCR stores and a cool summer weighed. It jumped to 10% in Q1 FY27 (8.3% counting rent) on AC volumes and stock bought before price rises; management guides 7.5–8% for FY27 and expects gross margin to settle at 15–15.5%.",
        competitors: [{ name: 'Reliance Digital, Croma and Vijay Sales', note: 'National and regional chains, also growing as local shops lose share.' }, { name: 'Amazon and Flipkart', note: 'Win low-ticket accessories and price-sensitive phone buyers.' }, { name: 'Local dealers', note: 'Losing 4–12% share in Andhra and Telangana towns this summer, by management estimate.' }],
        position: "**India's fourth-largest consumer-durables and electronics retailer** (company claim) and the leader in Hyderabad.",
        money: "Screener shows **₹1,947cr of net debt** at March, including leases; stock loans fell from ₹658cr to ₹97cr by June as summer stock sold, leaving gross debt of about ₹300cr (an analyst's figure on the call). FY27 capex of about ₹150cr, including ₹50cr of Kolkata property, comes from profits. Some bank lines are personally guaranteed by the promoters and secured on their property. India Ratings rates it A/Stable (outlook cut from Positive in December 2025). Promoters hold **65.2%**, down from 73.0% in September 2023; no dividend.",
        watch: ["Q2–Q3 gross margin settling near 15%.", "Kolkata stores opening by Diwali.", "FY27 margin landing in the 7.5–8% guide."],
        charts: retailCharts['Electronics Mart Ind'],
    },
    {
        company: 'Medplus',
        inShort: ["**India's second-largest pharmacy chain**, with 5,476 stores in 13 states selling medicines and everyday goods at a standard discount, a growing share under its own labels, plus diagnostics.", "**Good:** revenue up 22% in Q1, and mature stores earn 63% on capital. **Bad:** the margin after rent fell from 5.8% to 3.5% as own-label sales slipped and wages jumped, 60.7% of promoter shares are pledged, and a board decision was reversed within two days.", "**Verdict: wait.** A good store engine; wait for the margin to recover and the pledge to shrink."],
        tagline: "India's second-largest pharmacy chain, strongest in the South and East, selling medicines at a discount and pushing its own labels.",
        revenue: '₹6,892cr (FY26, consolidated)',
        products: [
            { name: 'Branded medicines', text: "64% of Q1 FY27 revenue, sold at a standard 20% discount (cut to 19% on some bills over ₹1,000 from July)." },
            { name: 'Own-label medicines and goods', text: "900+ own-label medicines and 650+ other items: 20% of sales in Q1 against 22% in Q4. Own-label non-medicines earn a 23–25% gross margin against 9–10% for branded ones." },
            { name: 'Franchise stores', text: "131 of Q1's 146 net new stores. MedPlus pays about ₹10 lakh of fit-out per store and sells stock outright, keeping about 9.5–10% before supply costs." },
            { name: 'Diagnostics and membership', text: "Diagnostics earned ₹37.1cr in Q1 at a 17.8% margin. About 44–45 lakh members pay a yearly fee, raised from ₹99 to ₹149." },
        ],
        revenueText: "**Branded medicines were 64% of Q1 FY27 revenue**, branded non-medicines 9%, own-label medicines 11%, own-label other goods 9%, and franchise sales, diagnostics, optical and membership 7%. **Metro stores produced 45% of pharmacy revenue**, tier-1 towns 16%, tier-2 24% and smaller towns 15%. Stores over a year old bring 94% of pharmacy revenue; online orders are about 5%.",
        mixes: [
            { caption: 'Revenue by type, Q1 FY27 (company presentation)', parts: [{ label: 'Branded medicines', share: 64 }, { label: 'Own-label medicines', share: 11 }, { label: 'Own-label other goods', share: 9 }, { label: 'Branded other goods', share: 9 }, { label: 'Franchise, diagnostics and other', share: 7 }] },
            { caption: 'Pharmacy revenue by location, Q1 FY27 (company presentation)', parts: [{ label: 'Metros', share: 45 }, { label: 'Tier-2 towns', share: 24 }, { label: 'Tier-1 towns', share: 16 }, { label: 'Smaller towns', share: 15 }] },
        ],
        customers: ["**Households buying regular medicines**, often for long-term illnesses, mainly in Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, West Bengal and Maharashtra.", "**Paying members** (44–45 lakh) who get the discount and delivery in about two hours.", "**600+ franchisees** running their own MedPlus stores."],
        difficulty: { level: 'Medium', text: "A pharmacy needs only a licence and a pharmacist; a chain of 5,476 needs dense clusters, warehouses, buying scale and years of building. Individual store licences are often suspended for a few days under the drug rules." },
        moat: "Density and scale: second only to Apollo, with no third chain above 500 stores, and clusters that let it deliver in two hours more cheaply than quick-commerce apps. The weakness is that the 20% discount is costly, and Q1 showed that pushing own labels can put customers off.",
        salesDrivers: ["**New stores**: 800 net in FY27 including franchises; 146 in Q1, so the pace must rise.", "**Same-store growth**: store-level growth of 15.3% in Q1 (17.8% in Q4); management usually assumes 9–10%.", "**Own-label share**: each 0.3 points adds about 0.1 point of gross margin; it aims to regain 0.25–0.3 points a quarter from Q3.", "**Discounts and fees**: the smaller discount on large non-UPI bills and the higher membership fee (₹10–11cr a year).", "**Medicine prices**: the market grew 10.4% in value but 1% in units, so price drives growth."],
        inputs: "**Medicines and goods bought from makers and distributors, and store staff.** In FY26 goods bought for resale and materials were 74% of sales, store running, power and upkeep 3%, staff 13% and other costs 1%. It employs 30,000+ people, so wage laws matter. Rent (about ₹75cr of lease payments a quarter) sits below operating profit under Ind AS 116, with ₹1,424cr of lease liabilities.",
        costEffect: "**Purchase prices pass through; wages and discounts do not.** Makers set medicine prices and it gives a fixed discount, so purchase-price changes mostly flow through; staff pay, own-label share and discounts are what move its margin. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 7 points (9% to 2%). **What happened:** there is no input price index to chart. The operating margin rose from 6% in FY24 to 8% in FY25 and 9% in FY26 (Screener), then fell to 7% in Q1 FY27. After rent it fell from 5.8% to 3.5%: own-label share dropped two points, a Q4 stock-provision release reversed, and minimum wages rose about 60% in Karnataka and over 25% in Telangana from June, with only one month in Q1.",
        competitors: [{ name: 'Apollo Pharmacy', note: 'The only larger chain, also pushing own labels.' }, { name: 'Online pharmacies and quick-commerce apps', note: 'Tata 1mg, PharmEasy and Netmeds discount heavily; chemists struck against online discounting in May 2026.' }, { name: 'Independent chemists', note: 'About 10 lakh of them; most of the market.' }],
        position: "**India's second-largest pharmacy chain** after Apollo, with 5,476 stores in about 850 cities.",
        money: "Screener shows **₹962cr of net debt**, all lease liabilities; it has no bank debt and ₹622cr of cash at June 2026. Q1 operating cash was ₹125cr but only ₹16cr was left after capex and rent. A ₹40cr food park and a Hyderabad wellness centre were approved and then put ‘in abeyance’ two days later. No dividend yet; a dividend or buyback is under review. Promoters hold **40.2%**, and **60.7% of that is pledged** against about ₹1,150cr of debt, with ‘no specific plan’ to reduce it.",
        watch: ["Margin after rent back above 5% by H2 FY27.", "Own labels regaining 22% of sales.", "Any plan to reduce the promoter pledge."],
        charts: retailCharts['Medplus'],
    },
    {
        company: 'Vedant Fashions (Manyavar)',
        inShort: ["**India's biggest wedding and celebration-wear brand**, selling Manyavar menswear, Mohey bridal wear and three smaller labels through about 500 stores that franchisees run.", "**Good:** a 44% operating margin, full-price selling, no bank debt and about ₹1,200cr of investments. **Bad:** revenue has been flat for three years, profit has fallen for two, since September 2025 its dearer clothes carry 18% GST, and ₹64.9cr of sales went to franchises run by promoter relatives.", "**Verdict: wait.** A superb model that has stopped growing; the price needs far more growth than I expect."],
        tagline: "India's leading branded celebration-wear company, selling wedding and festive clothes through franchisee-run Manyavar and Mohey stores.",
        revenue: '₹1,435cr (FY26, standalone)',
        products: [
            { name: 'Manyavar', text: "Men's wedding and festive wear (kurtas, sherwanis, Indo-western outfits) in the mid-premium range, and the bulk of sales. It is never discounted and has no end-of-season sale." },
            { name: 'Mohey', text: "Women's bridal wear, now widened to non-bridal stitched suits, sarees and crop-top lehengas. It is mostly sold inside Manyavar stores, with a handful of its own stores." },
            { name: 'Twamev and Mebaz', text: "Twamev is a premium men's label launched in 2019, with about 8 stores built to order (18–20 months' lead time). Mebaz is a South Indian family brand bought in 2017." },
            { name: 'Diwas and new channels', text: "Diwas is a value-to-mid festive label launched in 2024, sold through multi-brand shops, Myntra, Amazon, Blinkit and Zepto. The 136 shop-in-shops and multi-brand sales are now a separate unit with its own team." },
        ],
        revenueText: "The company does not split revenue by brand. **About 95% comes from its own brand stores** (501 in India at June 2026, 1.67m sq ft in 205 cities, plus 14 abroad); shop-in-shops, multi-brand shops and online are ‘somewhere close to 5%’. Reported revenue is what shoppers pay minus GST minus the franchisee's cut (18% or 29.5% plus GST): shoppers spent ₹2,008cr in FY26 (+6.1%) against reported revenue of ₹1,435cr (+3.5%). Stores in the UAE and North America are ‘a modest contributor’.",
        mixes: [
            { caption: 'Revenue by channel, Q1 FY27 (company call, approximate)', parts: [{ label: 'Own brand stores (franchisee-run)', share: 95 }, { label: 'Shop-in-shops, multi-brand and online', share: 5 }] },
        ],
        customers: ["**Grooms, brides and wedding guests**: families buy rarely, mostly in the November–March wedding season, so sales swing with the number of auspicious dates. Adhik Maas removed wedding dates from mid-May to mid-June 2026.", "**Franchisees**, who pay ₹2,100–2,500 per sq ft to fit out a store and buy stock that the company tops up automatically; a store breaks even at about ₹7,000–10,500 of sales per sq ft depending on the town. ₹64.9cr of FY26 sales went to franchises owned by promoter relatives.", "**Indians abroad** in the UAE and North America, where sales were hit by the war and US tariffs."],
        difficulty: { level: 'High', text: "Anyone can sell a kurta, but a national celebration brand takes years of advertising, a design team that sets wedding trends and a franchise network confident that stock will sell at full price. Its latest campaign drew over a billion views." },
        moat: "Brand and full-price discipline: a 65–67% gross margin, and no signed site has ever lacked a franchisee. The weakness is that the brand has not bought growth: CRISIL calls revenue ‘range-bound’ at ₹1,360–1,440cr for three years, and customers buy only a few times in their lives.",
        salesDrivers: ["**The wedding season**: management expects November to March to be ‘a fantastic period’ and accepted an analyst's view of high-single-digit same-store growth for the rest of FY27.", "**Same-store growth**: 2.7% in FY26, 4.6% in Q4 and 3.8% in Q1 FY27, split about half volume and half price. A 3–3.5% higher average price is meant to come from richer collections from mid-Q2.", "**Store area**: closures of weak stores were front-loaded, so about 28,600 sq ft was lost net in Q1; management promises net growth for the year. Rents above what the model can bear, not money, limit openings.", "**GST**: since September 2025 clothes above ₹2,500 carry 18% GST instead of 12%, which widened the gap between what shoppers pay and what Vedant books.", "**Rivals shutting stores**: in eight top states the number of ethnic-wear stores has started to fall, including ‘very large stores by other players’."],
        inputs: "**Finished garments and fabric from outside makers, and marketing.** In FY26 goods bought for resale and materials were 28% of sales, store running, power and upkeep 6%, staff 5% and other costs 17%. Franchisees pay most store rent and staff, which is why its own store costs are so low; the ₹458cr of lease liabilities on Screener are for stores it runs itself.",
        costEffect: "**Passed on.** It sets its prices and never discounts, and management said war-driven fabric inflation of 0.5–1.5% of cost ‘should not affect our gross margins much’. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (44% to 41%). **What happened:** there is no input price index to chart. The operating margin fell from 48% in FY24 to 46% in FY25 and 44% in FY26 (Screener), not because of purchase prices but because revenue stood still while costs rose, and because the GST change lowered the gross margin from 67.2% to 65.7%. It was 43% in Q1 FY27, with the gross margin back to 65.7% from 65.0% in Q4.",
        competitors: [{ name: "Aditya Birla Fashion & Retail (Tasva, Sabyasachi)", note: "Tasva's 90 men's wedding-wear stores compete directly but still lose money; Sabyasachi sits far above Manyavar in price." }, { name: 'Regional ethnic-wear chains and local tailors', note: 'The long tail of the market; management says their store count in eight big states is now falling.' }, { name: 'Online marketplaces', note: "Myntra, Amazon and quick-commerce apps; Vedant now uses them for Diwas rather than for Manyavar." }],
        position: "**India's largest branded celebration-wear company**, which CRISIL calls the segment leader. The company's ‘largest by revenue and profit’ claim cites a CRISIL report on FY20, so that evidence is old.",
        money: "Screener shows **₹767cr of net cash** after ₹458cr of lease liabilities; there is no bank debt and investments were ₹1,214cr at March 2026. Capex is tiny (about ₹11cr in FY26) because franchisees pay for stores; operating cash was ₹481cr. It pays out about half of profit (₹7.75 a share for FY26); the dividend or buyback policy promised for the Q1 call was not given. Promoters hold **74.9%**, unchanged since 2023; no pledge.",
        watch: ["Same-store growth above 7% in the November–December wedding season.", "Net new store area positive for FY27.", "Money owed by promoter-relative franchises, and the promised payout policy."],
        charts: retailCharts['Vedant Fashions (Manyavar)'],
    },
    {
        company: 'Brainbees Solutions',
        inShort: ["**India's largest seller of baby and children's products** (FirstCry), through its app and 1,188 stores, with its own BabyHug and other labels, a Gulf business, the GlobalBees brand group and preschools.", "**Good:** India revenue growth rose from 7.5% to 17.7% in five quarters, and FY26 free cash was positive for the first time. **Bad:** a diaper price war with quick-commerce apps cut India operating profit 22% in Q1 against a promised double-digit rise, and it still reports losses of about ₹45cr a quarter.", "**Verdict: wait.** Growth is back but profit is not; there are no earnings to value yet."],
        tagline: "India's largest mother, baby and kids retailer, selling mostly online through FirstCry with a network of company and franchise stores.",
        revenue: '₹8,548cr (FY26, consolidated)',
        products: [
            { name: 'India multi-channel', text: "The FirstCry app, website and 1,188 stores (537 company-owned): 2.1m products from 7,900+ brands. Over half of sales are clothes and over half are its own labels; diapers are about 15%. Q1 FY27 revenue ₹1,456cr (+17.7%)." },
            { name: 'International', text: "FirstCry in the UAE and Saudi Arabia: ₹232cr in Q1 (+12%), still loss-making at −7% of its revenue, down from −19% in FY23." },
            { name: 'GlobalBees', text: "A group of online consumer brands bought over recent years: ₹424cr in Q1, flat after a stock move in one brand, at a 3.9% margin; growth is expected again from Q3." },
            { name: 'Preschools and delivery', text: "Intellitots runs 500+ preschools on a royalty model (₹19.3cr, +47%). Its own delivery arm, RocketBees, carries over half of online orders, and FC Qwik delivers in 2–3 hours in 12 cities." },
        ],
        revenueText: "**India multi-channel was about 68% of Q1 FY27 segment revenue**, GlobalBees 20%, international 11% and preschools 1%. In India, **78% of sales value is online** and 22% in stores. Revenue grew faster than sales value (18% against 12%), partly because of its factory sales and GST price cuts.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company presentation)', parts: [{ label: 'India multi-channel', share: 68 }, { label: 'GlobalBees brands', share: 20 }, { label: 'International', share: 11 }, { label: 'Preschools', share: 1 }] },
            { caption: 'India sales value by channel, Q1 FY27 (company)', parts: [{ label: 'Online', share: 78 }, { label: 'Stores', share: 22 }] },
        ],
        customers: ["**Parents of young children**, mostly mothers: 11.8m people bought at least once in the last year (+10%). In the top 50 cities, 36% of sales come from customers who buy both online and in stores.", "**Franchisees**, who run about 650 of the 1,188 stores, and preschool franchisees paying royalties.", "**Families in the UAE and Saudi Arabia.**"],
        difficulty: { level: 'Medium', text: "Selling diapers and baby clothes online is easy to start, as the quick-commerce apps show. Harder to copy are 2.1m products, own labels that make up over half of sales, own delivery in 72 cities and a parenting brand parents trust." },
        moat: "Scale and trust with parents, plus own labels and own delivery. The weakness is that everyday items like diapers are price-matched by quick-commerce apps and pharmacy chains, and its headline ‘adjusted’ profit leaves out ₹224cr a year of staff share costs.",
        salesDrivers: ["**Online growth and delivery speed**: RocketBees and 2–3 hour Qwik delivery, which it wants to carry about 10% of online orders.", "**New stores**: about 100 net in FY27, weighted to the end of the year; in September 2026 shareholders moved unspent IPO money for stores to other uses.", "**Diaper pricing**: matched to quick-commerce apps; management calls it ‘absolutely unsustainable’ and says it started to soften in July–August.", "**GlobalBees**: organic growth expected to resume from Q3.", "**International**: losses shrinking every year, with break-even ‘sooner than you think’."],
        inputs: "**Baby products, clothes and diapers bought from 7,900+ brands or made for its own labels, plus delivery.** In FY26 goods bought for resale and materials were 64% of sales, store running, power and upkeep 3%, staff 9% and other costs 21% (largely delivery, warehousing and marketing). Staff costs include ₹224cr of share-based pay. Store rent sits mostly below operating profit (FY26 depreciation ₹407cr, interest ₹156cr).",
        costEffect: "**Partly passed on.** Its own factories pass rupee- and oil-linked cost rises on after about a quarter, but on diapers it matches rivals' prices. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (3% to about −3%). **What happened:** there is no input price index to chart. The operating margin rose from 1.1% in FY24 to 3.0% in FY25 and 3.1% in FY26 (Screener) as Gulf losses shrank. It was 2.8% in Q1 FY27: the India gross margin fell 260 basis points on diaper discounting and factory costs, and 40–60 basis points more went on building faster delivery.",
        competitors: [{ name: 'Quick-commerce apps (Blinkit, Zepto)', note: 'Sell diapers and baby care in minutes at low prices; baby care on these apps grew about 160%.' }, { name: 'Amazon, Flipkart and Myntra', note: 'Broad online stores that discount heavily, in India and the Gulf.' }, { name: 'Apollo and MedPlus pharmacies', note: 'Now sell their own-label diapers.' }],
        position: "**India's largest mother, baby and kids retailer**, with 11.8m buying customers a year and 193m app downloads.",
        money: "Screener shows **₹186cr of net debt**, which is lease liabilities (₹1,594cr of borrowings) set against IPO cash; there is no significant bank debt. FY26 operating cash was ₹365cr and free cash ₹176cr, the first positive year. The August 2024 IPO raised ₹1,601.7cr of new money; in September 2026 shareholders approved moving unspent store money to leases and warehouses and extending the deadline to FY29. No dividend. Screener shows no promoter group; foreign funds cut their holding from 9.6% to 3.6% in 18 months while domestic funds rose to 22.7%.",
        watch: ["India gross margin recovering most of its 260-point fall.", "India operating profit growing again.", "International losses falling below 5% of its revenue."],
        charts: retailCharts['Brainbees Solutions'],
    },
    {
        company: 'Shoppers Stop',
        inShort: ["**India's main premium department-store chain**, run by the K Raheja group: 115 department stores, beauty shops, INTUNE value-fashion stores and a fast-growing business distributing prestige beauty brands.", "**Good:** like-for-like growth of 6% is the best in a decade, 85% of sales come from loyalty members, and beauty distribution grew 81% in FY26. Q2 FY27 brought a first small filed profit (₹3cr). **Bad:** it lost money on filed accounts in FY26 and Q1 (−₹14cr), Q2's reported like-for-like growth was only 2% (7% adjusting for Diwali's later date), equity is only ₹291cr against about ₹165cr of contingent liabilities, and INTUNE has not proved it can make money.", "**Verdict: wait.** A better business, still loss-making."],
        tagline: "A premium department-store chain with beauty stores, a value-fashion format and an exclusive distributor of international beauty brands.",
        revenue: '₹5,043cr (FY26, consolidated)',
        products: [
            { name: 'Department stores', text: "115 stores with 800+ brands: premium brands are 72% of sales, beauty 21% and its own labels about 16%. Over 70% of goods are on sale-or-return, so unsold stock goes back to the brand." },
            { name: 'Beauty distribution (Global SS Beauty Brands)', text: "Exclusive Indian distributor for 20+ prestige brands such as Armani, NARS, Shiseido and Prada Beauty, sold at 572 counters including Nykaa, Sephora and Tira: ₹426cr in FY26 (+81%). INTERPARFUMS brands (Coach, Jimmy Choo, Montblanc and others) were added in September 2026." },
            { name: 'INTUNE', text: "85 value-fashion stores: ₹282cr of sales in FY26 (+46%) and a ₹10cr loss in Q1 FY27, down from ₹15cr; no new stores in H1." },
            { name: 'Beauty stores, HomeStop and airports', text: "73 beauty brand stores (M.A.C, Estée Lauder, Clinique and its own SSBeauty), 12 HomeStop stores and 4 airport stores." },
        ],
        revenueText: "On the company's own gross (non-GAAP) basis, **core department stores were 86% of Q1 FY27 sales**, beauty distribution 8% and INTUNE with the beauty website 5%. Filed revenue is lower because many brands in its stores sell on concession, so only its share is booked. Personal shoppers brought 26% of revenue.",
        mixes: [
            { caption: 'Gross sales by business, Q1 FY27 (company presentation)', parts: [{ label: 'Department stores', share: 86 }, { label: 'Beauty distribution', share: 8 }, { label: 'INTUNE and beauty website', share: 5 }] },
        ],
        customers: ["**Affluent city shoppers**: 13.8m First Citizen members bring 85% of sales with a 69% repeat rate; top-tier Black Card members bring 23%.", "**Premium brands entering India**, for which it calls itself ‘the first port of call’.", "**Beauty retailers** (Nykaa, Sephora, Tira, Lifestyle) buying from its distribution arm, and value shoppers at INTUNE."],
        difficulty: { level: 'Medium', text: "Department stores need prime mall sites, brand relationships and loyalty data built over decades. Exclusive beauty contracts last only 3–5 years, and value fashion is crowded." },
        moat: "Loyalty data, brand relationships and sale-or-return buying that limits stock risk; its beauty brands grow about 35% against 20–22% for the market. The weakness: gross margin as a share of sales keeps falling as premium brands grow, and filed equity is thin.",
        salesDrivers: ["**Like-for-like growth**: 4.7% in FY26 and 6% in Q1, guided at ‘around 6% and not lower’; Q2 was 2% reported and 7% festive-adjusted, because Diwali fell later this year.", "**New and renovated stores**: 9–10 department stores in FY27 at ₹45–50cr of sales each; renovations lifted sales per sq ft 35–40%.", "**Beauty distribution**: new exclusive brands such as INTERPARFUMS; distribution sales rose 59% to ₹168cr in Q2 FY27, and its own beauty sales 18% (fragrance +35%).", "**Premium mix**: watches +24%, fragrance +17% and handbags +18% in Q1; the average bill rose 10%.", "**INTUNE**: expansion decision deferred, possibly 5–10 stores in Q4."],
        inputs: "**Goods bought from brands (much on sale-or-return), mall rent and staff.** In FY26 goods bought for resale and materials were 60% of sales, store running, power and upkeep 8%, staff 9% and other costs 8%. Rent is the biggest hidden cost: under Ind AS 116 it sits below operating profit, with ₹3,081cr of lease liabilities, about ₹72–74cr of interest and ₹133–144cr of depreciation a quarter. Several stores are in promoter-group malls.",
        costEffect: "**Mostly insulated from purchase prices.** Brands set their own prices and over 70% of goods can be returned unsold, so its margin depends on rent, staff and the mix of brands. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 6 points (15% to 9%). **What happened:** there is no input price index to chart. The operating margin fell from 17% in FY24 to 15% in FY25 and FY26 (Screener) and was 14.5% in Q1 FY27; counting rent, the standalone margin was only about 2.9%. The fall came from new stores, INTUNE losses (which CRISIL says doubled in FY26) and a lower gross margin as premium brands, which leave it a smaller percentage, grew.",
        competitors: [{ name: 'Trent (Westside) and Lifestyle', note: 'Department-store and own-label rivals in the same malls.' }, { name: 'Nykaa, Sephora and Tira', note: 'Rivals in beauty retail, but also customers of its distribution arm.' }, { name: 'Zudio and Max', note: "Value chains that INTUNE must beat on the high street." }],
        position: "**India's main premium department-store chain**, with 115 stores in 73 cities.",
        money: "Screener shows **₹3,304cr of net debt**, of which ₹3,081cr is leases; the company's own net debt was ₹166cr at June (₹154cr in March), down ₹82cr in a year by September, and management now expects to be debt-free by Q3 FY27, earlier than the March 2027 it was ‘100% sure’ of. FY26 capex was ₹114cr; CRISIL expects ₹180–200cr a year. Filed equity is only ₹291cr and shrinking with losses, while contingent liabilities are about ₹165cr. CRISIL's downgrade trigger is a return on capital below 7%; FY26 was 7.03%. Promoters hold **66.1%**, up slightly from 65.6%; no dividend.",
        watch: ["Debt-free by December 2026, as now promised.", "INTUNE losses halved and an expansion decision.", "A full year of filed profit."],
        charts: retailCharts['Shoppers Stop'],
    },
    {
        company: 'SG Mart',
        inShort: ["**A steel processing and distribution company** in the APL Apollo group: it buys steel from mills, cuts and shapes it in service centres, makes solar-panel mounting frames and steel profiles, and sells to about 2,500 mostly small businesses.", "**Good:** the margin rose from 1% to 4.5% as low-margin trading shrank, ₹687cr of net cash, and CRISIL upgraded it to AA-. **Bad:** solar runs at about 11,000 tonnes a quarter, well under May's promise, promised per-tonne margins were cut, and capex of about ₹1,500cr more is planned over 2–3 years; H1 FY27 operating cash covered ₹250cr of capex.", "**Verdict: wait.** Real progress, but the promises run ahead of delivery and the price needs more growth than I expect."],
        tagline: "A steel service-centre and processed-steel company linked to APL Apollo, moving from thin-margin trading to cutting, shaping and coating steel.",
        revenue: '₹6,315cr (FY26, consolidated)',
        products: [
            { name: 'Service centres', text: "Plants that cut, slit and sheet steel coils to each customer's size: 7 working, including Dubai. 160,000 tonnes in Q1 FY27 at ₹1,800–2,000 of operating profit a tonne; B2B trading is now reported inside this line." },
            { name: 'Steel profiles', text: "Struts, purlins, cable trays and racking for buildings and factories: 18,000 tonnes in Q1 at ₹3,000–4,000 a tonne." },
            { name: 'Solar structures', text: "Frames that hold solar panels on solar farms, sold to the top 20–30 contractors and power producers: 11,000 tonnes in Q1 at ₹3,000–3,500 a tonne, with 2–3 months of orders in hand." },
            { name: 'Accessories and new lines', text: "Screws, earthing strips and welding rods (double-digit margins), insulated roof panels (80,000 tonnes of capacity planned) and a steel-coating line at Raipur due in about 18 months." },
        ],
        revenueText: "Service centres, including trading, were **about 84% of Q1 FY27 tonnes**, profiles 10% and solar 6%. The company's revenue table by line is not cleanly legible and trading was merged into service centres from Q1, so shares by value are not reliable; CRISIL puts service centres at 51% of revenue, up from 34%. Some products are sold under the APL Apollo brand through the group's distributors. Dubai was about 19% of Q4 service-centre volume.",
        mixes: [
            { caption: 'Volume by line, Q1 FY27 (tonnes, company call)', parts: [{ label: 'Service centres and trading', share: 84 }, { label: 'Steel profiles', share: 10 }, { label: 'Solar structures', share: 6 }] },
        ],
        customers: ["**About 2,505 registered customers**, mostly small and mid-size fabricators, builders and manufacturers, plus about 680 dealers (CRISIL).", "**Solar-farm contractors and power producers** buying mounting frames.", "**The APL Apollo group's distributors**, which sell some of its products under the APL Apollo name."],
        difficulty: { level: 'Medium', text: "A service centre costs about ₹50cr plus ₹25–30cr of working capital and uses standard machines. The hard parts are buying steel well, keeping plants full and building a national network, which only it is doing among organised players." },
        moat: "Group backing (APL Apollo's brand, dealers and buying power) and the only national service-centre network. The weakness: steel processing is competitive, CRISIL still calls margins ‘low at less than 2.5%’ amid ‘intense competition’, and JSW and others are building similar platforms.",
        salesDrivers: ["**Steel prices**: selling prices rose ₹2,500–3,000 a tonne in Q1; stock gains and losses swing profit (a ₹15–20cr loss in Q3 FY26, a ₹6cr gain in Q4).", "**New service centres**: 12 in 6–12 months and 25 by 2029 on the call; the presentation says 16 by 2028 and 20+ by 2030.", "**Solar and profile ramp-up**: about 400,000 tonnes of capacity against a 120,000-tonne run-rate; solar was guided to 8,000–9,000 tonnes a month but ran at about 3,700.", "**Coated and value-added steel**, which sells for ₹10,000–15,000 a tonne more than plain steel.", "**Steel demand**: ICRA expects 9–10% growth in FY27."],
        inputs: "**Hot-rolled and coated steel coils bought from mills.** In FY26 goods bought for resale and materials were 90% of sales, running, power and upkeep 7% and other costs 1%; staff are a small share. Working capital rose from 20 to 27 days in Q1 as it paid mills in advance.",
        costEffect: "**Passed on, with stock gains and losses in between.** It prices off the steel market and earns a spread per tonne, so a steel price rise mostly lifts revenue; steel bought before a fall produces losses. **Rule of thumb:** a 10% rise in steel costs not passed on would cut the margin by about 9 points (2% to about −7%), which is why a distributor must pass it on at once. **What happened:** there is no input price index to chart. The operating margin was 2.3% in FY24, 1.8% in FY25 and 2.2% in FY26 (Screener). Within FY26 it fell to 1.0% in Q3 on a stock loss, then rose to 3.1% in Q4 and 4.5% in Q1 FY27 as trading shrank and processing grew, with only a ‘very, very minuscule’ stock gain.",
        competitors: [{ name: "JSW and other steel makers' platforms", note: 'Mills building their own processing and distribution networks.' }, { name: 'Local service centres and traders', note: 'Most of the market; they compete on price and credit in each industrial cluster.' }],
        position: "**The only organised company building a national chain of steel service centres**, one per 400–600 km industrial cluster.",
        money: "Screener shows **₹716cr of net cash**; the company put it at ₹687cr at June 2026 (₹795cr of cash against ₹108cr of debt). Q1 free cash was −₹66cr, but H1 operating cash beat operating profit (working capital 18 days) and covered ₹250cr of capex, leaving about ₹700cr of cash at September. Capex of ₹500–550cr this year and ₹1,500cr over 2–3 years is to come from cash and profits with ‘no… dilution’, and there will be no dividend for about two years. It guarantees ₹162cr of its Dubai unit's bank lines. Treasury income was about 45% of FY26 pre-tax profit. Promoters hold **57.9%**; control passed to Sanjay Gupta, chairman of APL Apollo Tubes, through family share gifts in May–June 2026.",
        watch: ["Solar volume (about 11,000 tonnes a quarter in Q2) against the 1.3–1.5 lakh tonne aim.", "FY27 operating profit near the ₹300cr guide (₹131cr in H1).", "The Raipur coating plant starting in 9–12 months and lifting the margin 2–3 points, as promised.", "Dealings with APL Apollo in the FY27 annual report."],
        charts: retailCharts['SG Mart'],
    },
    {
        company: 'Landmark Cars',
        inShort: ["**A multi-brand car dealer**: 141 showrooms and workshops in 12 states selling and servicing Mercedes-Benz, Honda, Volkswagen, MG, BYD, Mahindra, Kia and other brands.", "**Good:** Q1 revenue up 22%, profit roughly doubled, costs falling as a share of sales, and about 95% of operating profit turned into cash. **Bad:** net profit is about 1% of revenue, return on capital is about 9%, net debt is ₹581cr, carmakers set its margins, and some insurance and advertising business goes through promoter-linked firms.", "**Verdict: wait.** Recovering from a low base, on thin margins; the price needs more growth than I expect."],
        tagline: "A multi-brand car dealership group, from Mercedes-Benz to BYD, whose workshops earn most of its profit.",
        revenue: '₹4,896cr (FY26, consolidated)',
        products: [
            { name: 'New cars', text: "Sells cars for 11 makers from 77 showrooms. Mercedes-Benz uses an ‘agency model’, so Landmark books only its commission. Q1 FY27 new-car sales of ₹1,465cr (counting full Mercedes value) earned an operating margin of just 1.6%." },
            { name: 'Workshops and parts', text: "Service, parts and accident repair (about 47% of service income) from 64 workshops: ₹267cr in Q1 (+14%) at an 18.4% margin and about 30% return on capital; 98,281 services in the quarter." },
            { name: 'Electric cars', text: "EVs were about 30% of new-car sales value in Q1 against about 5% for the industry, led by BYD, MG and Mahindra; it also shares revenue from ChargeZone chargers." },
        ],
        revenueText: "Of Q1 FY27 filed revenue, **new cars were about 80% and workshops 20%**, but workshops earned **about two-thirds of operating profit** (₹49cr of ₹72cr). Because Mercedes sells on an agency model, only the commission appears in revenue; counting the full value of those cars, ‘proforma’ revenue was ₹1,733cr. The newer brands (BYD, MG, Mahindra, Kia) are 38% of new-car sales but only 19% of workshop revenue, so service income lags.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'New cars', share: 80 }, { label: 'Workshops and parts', share: 20 }] },
            { caption: 'Operating profit by business, Q1 FY27 (company presentation)', parts: [{ label: 'Workshops and parts', share: 68 }, { label: 'New cars', share: 32 }] },
        ],
        customers: ["**Luxury car buyers**: a Mercedes sold for about ₹79 lakh on average in Q1.", "**Mass-market and EV buyers** of Honda, MG, BYD, Mahindra, Kia and others; the average across brands was ₹22.5 lakh.", "**5.5 lakh+ car owners** who come back for service and repairs, and the carmakers, whose incentives and targets shape its profit."],
        difficulty: { level: 'Low', text: "Carmakers award dealerships and set the terms; a new dealer mainly needs capital for showrooms and stock. Running good multi-brand workshops profitably is the harder skill." },
        moat: "Scale with carmakers (the top dealer partner for four of them) and dense city clusters that let it swap space between brands; the workshop business is a steady annuity. The weakness: carmakers set the margins, a price rise gives only a ‘one-time gain’ on stock, and weak products (Jeep, Volkswagen) hurt.",
        salesDrivers: ["**Car demand**: ICRA expects 4–6% growth in FY27 and CRISIL 5–7%; luxury cars are stuck near 50,000 a year until the India–EU deal lets in cheaper European cars, probably from 2027.", "**Newer brands maturing**: showrooms added for BYD, MG, Mahindra and Kia in FY24–FY25 are now filling, and their workshop income will follow.", "**Workshops**: revenue growing about 12–14% a year for a decade.", "**Carmaker incentives and price rises**, which bring one-off gains on stock.", "**GST**: small cars moved from 28% to 18% in September 2025; a Supreme Court case on cess credits is pending."],
        inputs: "**Cars and parts bought from carmakers, staff and rent.** In FY26 goods bought for resale and materials were 84% of sales, staff 6% and other costs 5%. Rent is about ₹100cr a year, mostly below operating profit under Ind AS 116, and car stock is funded with bank loans (interest about ₹20cr a quarter).",
        costEffect: "**Passed on, at margins the carmakers set.** Carmakers fix list prices and dealer margins, and a price rise gives only a ‘one-time gain’ on stock already held. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 8 points (5% to −3%). **What happened:** there is no input price index to chart. The operating margin fell from 7% in FY24 to 6% in FY25 and 5% in FY26 (Screener) as new showrooms added costs before sales. It was 5.5% in Q1 FY27: gross margin fell from 17.4% to 15.7% on brand mix, while staff and other costs each fell below 4% of proforma revenue.",
        competitors: [{ name: 'Other dealer groups', note: 'Carmakers appoint several dealers per city, so it competes with its own brands’ other dealers.' }, { name: 'Audi and other luxury brands', note: 'Audi is chasing share in a luxury market that is not growing.' }],
        position: "**The largest dealer partner for four carmakers**, with about 16% of Mercedes-Benz's and 17.5% of BYD's India wholesale volume in Q1.",
        money: "Screener shows **₹820cr of net debt** including leases; the company's own net debt, including car-stock loans, was ₹581cr in March. FY27 capex is about ₹50cr, and it turns about 95% of operating profit into cash (₹267.5cr in FY26, ₹57.5cr in Q1). The dividend rose to ₹1.50 a share. It has no credit rating. Insurance commission of ₹9.1cr came through a promoter-linked broker, and ₹6.6cr of advertising went to a promoter-linked agency. Promoters hold **49.9%**, down from 52.9% in September 2023.",
        watch: ["Profit heading back to the FY23 peak of ₹85cr.", "Workshop revenue growing at the newer brands.", "The Supreme Court GST-cess ruling."],
        charts: retailCharts['Landmark Cars'],
    },
    {
        company: 'Go Fashion (India) (GoColors)',
        inShort: ["**India's largest women's bottom-wear brand**: GoColors leggings, trousers, palazzos and jeggings in 120+ colours, sold through 751 small brand stores and 2,568 counters in department stores.", "**Good:** 94% sold at full price, a 63% gross margin and no bank debt. **Bad:** revenue flat for two years, the margin after rent down from 16.8% to 11.5%, 66 stores closed in Q1, and fabric costs up 7–10% with no price rise planned.", "**Verdict: pass.** A strong brand stuck in the wrong store size."],
        tagline: "A women's bottom-wear brand selling leggings, trousers and palazzos through small brand stores and department-store counters.",
        revenue: '₹838cr (FY26, standalone)',
        products: [
            { name: 'Women’s bottom-wear', text: "50+ styles in 120+ colours, now about 70% ‘value-added’ bottoms (trousers, palazzos, jeggings, cargos) against 58% in FY19. The average price is ₹863 and 75% of items cost under ₹1,049." },
            { name: 'Brand stores', text: "751 stores averaging about 569 sq ft, each selling ₹85–90 lakh a year on ₹37–38 lakh of investment including stock. It is closing 100+ small stores in favour of larger ones." },
            { name: 'Department-store counters', text: "2,568 counters in chains such as Reliance Trends and Pantaloons." },
            { name: 'Daily Wear pilot', text: "Women's tops and menswear in 15 larger stores of 1,500–2,000 sq ft, 12 of them at double-digit margins; 25–30 planned by March 2027." },
        ],
        revenueText: "**Brand stores were 72% of Q1 FY27 revenue**, department-store counters 22%, online 4% and multi-brand shops 2%. Revenue was flat at ₹223cr. The counter business depends on Reliance, which paused orders for about 45 days in Q3 FY26 and is converting Trends stores to its own Azorte format.",
        mixes: [
            { caption: 'Revenue by channel, Q1 FY27 (company presentation)', parts: [{ label: 'Brand stores', share: 72 }, { label: 'Department-store counters', share: 22 }, { label: 'Online', share: 4 }, { label: 'Multi-brand shops', share: 2 }] },
        ],
        customers: ["**Women buying everyday bottoms** to match kurtas and tops, mostly at under ₹1,049.", "**Department-store chains**, led by Reliance, that stock its counters.", "**Online shoppers**, a small 4% of sales."],
        difficulty: { level: 'Medium', text: "Leggings are simple, and all production is outsourced (168 suppliers and 70 job-workers). The hard parts are the colour range, consistent fit and a brand that sells at full price." },
        moat: "Category leadership (about 8% of branded women's bottom-wear) and no-discount pricing that kept the gross margin near 63% through a bad year. The weaknesses: small stores cannot show a wider range, larger stores so far grow only 2.5–3% like-for-like, and Reliance is cutting outside brands.",
        salesDrivers: ["**Same-store growth**: about −3% in FY26 and +0.6% in Q1; positive for the full year is the goal.", "**Store area**: net growth cut to 8–10% for FY27, weighted to H2, after 66 closures in Q1.", "**Bigger stores and new products**: Daily Wear and wider ranges in 700+ sq ft stores.", "**Marketing**: a brand ambassador from June and ad spend of 2–3% of sales.", "**Department-store counters**: flat, and exposed to Reliance's own-brand push."],
        inputs: "**Fabric and outsourced stitching, store rent and staff.** In FY26 goods bought for resale and materials were 31% of sales, store running, power and upkeep 11%, staff 21% and other costs 8%. Rent is heavy for a chain of small high-street stores and sits mostly below operating profit under Ind AS 116 (₹532cr of lease liabilities).",
        costEffect: "**Not protected for now.** Fabric is up 7–10% and no price rise is planned, so gross margin will be hit in coming quarters. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (29% to 26%). **What happened:** there is no input price index to chart. The operating margin was 32% in FY24 and FY25 and 29% in FY26 (Screener); after rent it fell from 16.8% to 11.5% as sales per store fell while rent and staff costs rose. In Q1 FY27 it was 27% after a ₹6.5cr write-off on closed stores, and 14.0% after rent against 15.9%, with ambassador spending. So far the problem is store productivity, not fabric.",
        competitors: [{ name: 'Reliance Retail', note: 'Its biggest counter customer, now replacing outside brands with its own labels.' }, { name: 'Trent (Zudio)', note: 'Very cheap women’s wear in large stores.' }, { name: 'Unbranded and local brands', note: 'Most of the women’s bottom-wear market.' }],
        position: "**India's largest women's bottom-wear brand**, with about 8% of the branded market.",
        money: "Screener shows **₹374cr of net debt**, but that is ₹532cr of leases against cash; it has no bank debt and held ₹202cr of cash and investments at June. It bought back ₹65cr of shares at ₹460 in February 2026, well above today's price. Store fit-outs are paid from its own cash. CRISIL rates it A+. Promoters hold **55.5%**, up from 52.8% in September 2023; no pledge.",
        watch: ["Two quarters of positive same-store growth.", "Margin after rent back above 15%.", "The promised written clarification of its same-store figures."],
        charts: retailCharts['Go Fashion (India) (GoColors)'],
    },
    {
        company: 'Aditya Birla Fashion & Retail',
        inShort: ["**Pantaloons plus a collection of ethnic, luxury and online brands**: since the 2025 demerger of Louis Philippe and its sister brands, it runs Pantaloons, OWND value stores, TCNS, Tasva, Sabyasachi, luxury stores and the TMRW online brands.", "**Good:** the Pantaloons format earns about 18% at the operating level and had its best-ever autumn-winter sell-through. **Bad:** the group lost ₹830cr in FY26 and ₹249cr in Q1, needs ₹500–550cr a year until FY29–FY30, and may have to pay ₹1,525cr for the rest of Sabyasachi.", "**Verdict: pass.** A good core funding too many young businesses."],
        tagline: "A fashion group built around the Pantaloons store chain, with ethnic, designer, luxury and online brands that mostly still lose money.",
        revenue: '₹8,176cr (FY26, consolidated)',
        products: [
            { name: 'Pantaloons and OWND', text: "About 400 Pantaloons stores for mid-market families (64% own labels, 25% ABLBL brands) earning about 18–18.5% at the operating level, and 88–90 OWND value stores, growing 55% but loss-making. Q1 FY27 segment revenue ₹1,204cr." },
            { name: 'Ethnic wear', text: "TCNS women's brands, Tasva men's wedding wear (90 stores), 51% of Sabyasachi and other designer labels, and Jaypore: ₹2,227cr in FY26 at a 10.8% margin, as profitable designers offset losses at TCNS and Tasva." },
            { name: 'Luxury', text: "The Collective, single-brand international stores and the Galeries Lafayette store in Mumbai: ₹157cr in Q1 (+30%)." },
            { name: 'TMRW', text: "Young online-first brands with 140+ stores: ₹220cr in Q1, still losing money (−₹42cr at the operating level), funded with its own ₹440cr of equity and ₹500cr of bonds." },
        ],
        revenueText: "**Pantaloons and OWND were 59% of Q1 FY27 segment revenue**, ethnic 22%, TMRW 11% and luxury 8%. A quarter of Pantaloons' sales are brands of the sister company ABLBL. It has 1,286 stores and 7.9m sq ft; online is about 5% of Pantaloons' sales.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company presentation)', parts: [{ label: 'Pantaloons and OWND', share: 59 }, { label: 'Ethnic', share: 22 }, { label: 'TMRW', share: 11 }, { label: 'Luxury', share: 8 }] },
        ],
        customers: ["**Middle-class families** shopping at Pantaloons, and value shoppers at OWND.", "**Wedding and festive shoppers** for Tasva, TCNS and the designer labels, up to Sabyasachi's high-end bridal wear.", "**Affluent shoppers** for luxury, and young online buyers for TMRW's brands."],
        difficulty: { level: 'Medium', text: "Clothes are easy to make and fashion is crowded; women's ethnic wear has low entry barriers. Pantaloons' 400 sites, its own labels and designer partnerships took decades and group money to build." },
        moat: "Pantaloons' brand, own labels and store base, plus India's broadest ethnic portfolio and Aditya Birla group backing. The weakness: in value fashion rivals have 300–1,000 stores against OWND's 90, and TCNS still loses money 2.5 years after it was bought.",
        salesDrivers: ["**Pantaloons same-store growth**: 14% in Q4 (helped by sale timing) and 4% in Q1; management wants at least high single digits for the year.", "**Ethnic growth**: over 20% expected in FY27, mostly in H2 with the wedding season.", "**New stores**: about 20 Pantaloons, 20+ OWND, 35–40 TCNS, 25–30 Tasva and 75+ TMRW in FY27.", "**TMRW**: over 20% growth, with brand-level cash profit in 12–18 months.", "**Break-even dates**: TCNS by the end of FY27, Tasva only at ₹400–500cr of revenue, TMRW in FY29–FY30."],
        inputs: "**Fabric and garments, rent, staff and marketing.** In FY26 goods bought for resale and materials were 42% of sales, store running, power and upkeep 10%, staff 16% and other costs 24%. Rent sits mostly below operating profit under Ind AS 116: FY26 depreciation (₹1,339cr) and interest (₹561cr, mostly leases) together exceeded operating profit, and lease liabilities rose to about ₹4,500cr.",
        costEffect: "**Partly passed on.** Management expects about 4% input inflation and to pass on only half, so gross margin will be hit in H2. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (9% to 5%). **What happened:** there is no input price index to chart. The operating margin (Screener) rose from about 6% in FY24 to about 10% in FY25 and was 9% in FY26; quarters swing from 3% to 13% with sale timing and festivals, and Q1 FY27 was 5%. Losses at young formats, new stores and rent move it far more than purchase prices; the company's own EBITDA figure also includes treasury income.",
        competitors: [{ name: 'Trent (Zudio and Westside) and Reliance Retail', note: 'Larger value and mid-market chains with many more stores.' }, { name: 'Vedant Fashions (Manyavar)', note: "The leader in men's wedding wear, against which Tasva competes." }, { name: 'V2 Retail and V-Mart', note: "Low-cost small-town chains competing with OWND." }],
        position: "**One of India's largest fashion retailers**, with about 400 Pantaloons stores and India's broadest ethnic-wear portfolio (over ₹2,200cr).",
        money: "Screener shows **₹4,468cr of net debt**, including leases; before leases it had ₹1,545cr of gross cash against ₹1,695cr of debt in March. Standalone cash is about ₹1,000cr now and should fall to about ₹500cr by March; it needs ₹500–550cr a year until free cash turns positive ‘by FY29 and '30’. It must buy Sabyasachi Mukherjee's 49% for up to ₹1,525cr if the label does not list. CRISIL rates it AA+. Promoters hold **46.6%**, down from 55.5% in September 2023; ₹4,239cr of equity was raised in January 2025.",
        watch: ["Losses narrowing in H2 FY27.", "TCNS breaking even by the end of FY27.", "No new equity raise."],
        charts: retailCharts['Aditya Birla Fashion & Retail'],
    },
    {
        company: 'Sastasundar Ventures',
        inShort: ["**Now called Health X Platform**: an online medicine distributor supplying about 75,000 small pharmacies (RetailerShakti) and consumers (SastaSundar), about 70% of it in West Bengal, alongside a treasury of about ₹500cr.", "**Good:** Q1 FY27 revenue rose 58% and the gross margin improved to 7.8%. **Bad:** it lost ₹14.9cr at the operating level in Q1, has never sustained an operating profit, its managing director says it will not be EBITDA-positive for two to three years, and its small profits come from treasury income on hard-to-value assets.", "**Verdict: avoid.** Growth without profit; avoid until the core business earns money on its own."],
        tagline: "An online wholesaler and retailer of medicines, selling cash-and-carry to small pharmacies through an app and to consumers through franchise shops.",
        revenue: '₹1,319cr (FY26, consolidated)',
        products: [
            { name: 'RetailerShakti (to pharmacies)', text: "An app through which about 75,000 small chemists (about 40,000 active in a month) order medicines for next-day delivery, paying cash. FY26 sales were ₹1,125cr, up from ₹950cr; management says it is close to break-even and should turn EBITDA-positive in Q3 FY27." },
            { name: 'SastaSundar (to consumers)', text: "An online pharmacy whose orders are delivered through about 350 franchised ‘HealthBuddy’ shops that hold no stock: about ₹155cr of FY26 sales. It sold this business to Flipkart in 2021 and took it back when Flipkart left." },
            { name: 'JITO own-label generics', text: "Its own generic medicines at up to 60% below big brands, with a gross margin above 50%, but only ₹0.79cr of sales in Q1 FY27." },
            { name: 'Treasury and financial services', text: "About ₹500cr invested in deposits, unlisted NSE shares (₹90.4cr), private debt, funds and structured deals, plus a small portfolio-management arm that is being demerged into Microsec Resources." },
        ],
        revenueText: "On the company's FY26 figures, **RetailerShakti was about 88% of healthcare revenue** (₹1,125cr) and SastaSundar about 12% (₹155cr). About **70% of sales are in West Bengal**, and 67% of RetailerShakti's sales come from tier-2 and tier-3 towns. The company does not give a profit split between the two businesses, despite promising one. Monthly revenue passed ₹150cr in July 2026.",
        mixes: [
            { caption: 'Healthcare revenue by business, FY26 (company figures)', parts: [{ label: 'RetailerShakti (pharmacies)', share: 88 }, { label: 'SastaSundar (consumers)', share: 12 }] },
        ],
        customers: ["**Small independent pharmacies**, mostly in West Bengal and nearby states, who get about 2% of their purchases from it and must pay cash; 42.4% of order value comes from orders above ₹5,000.", "**Consumers** ordering online, served through franchise HealthBuddy shops, mostly in smaller towns.", "It buys over 95% of its medicines directly from drug makers, with returns under 1%."],
        difficulty: { level: 'Low', text: "Medicine distribution is a thin-margin trade with 12.4 lakh licensed chemists and many wholesalers; the gross margin of 7.5–8% is the industry's because ‘we are buying from the same companies’. What it has built is technology, warehouses and direct buying, which rivals with deeper pockets also have." },
        moat: "Direct buying, next-day delivery for 90% of orders and an app that pharmacies reorder from give it some stickiness. The weakness is a tiny share (3–4% of West Bengal, by its latest estimate), no pricing power, and cash-only terms that limit its reach among pharmacies that want credit.",
        salesDrivers: ["**New states**: Odisha, Bihar, Jharkhand, Chhattisgarh, UP, Haryana, Rajasthan and the North-East (growing over 50% a year).", "**More pharmacies and bigger orders** on RetailerShakti, helped by an AI reordering tool due this quarter.", "**Higher-margin products**: own-label JITO generics and non-medicines (2% of sales now, 10% targeted).", "**Warehouses**: current space is about 90% used; ₹234cr of warehouse capex is planned, ₹134cr of it from bank loans.", "**Targets**: ₹6,000cr of revenue by FY30 at a 5% EBITDA margin, from ₹1,283cr in FY26, with losses in FY27–FY28."],
        inputs: "**Medicines bought for resale.** In FY26 goods bought were 92% of sales, staff 6% and other costs 6% (including delivery riders and warehouse staff on its own payroll). Technology and brand spending of ₹50–60cr a year drives the losses.",
        costEffect: "**Passed on, but the margin is thin.** Drug makers set prices and trade margins, so medicine price changes flow through to its selling prices; what matters is the gross margin it can negotiate (7.5–8%) and its own spending. **Rule of thumb:** a 10% rise in purchase costs not passed on would cut the margin by about 9 points (−4% to −13%). **What happened:** there is no input price index to chart. The operating margin was negative in every year except FY22, when it booked the Flipkart sale gain (Screener). The FY26 operating loss narrowed to ₹65cr from ₹79cr on the company's figures as gross margin rose from 6.5% to 7.5%, and Q1 FY27's loss was ₹14.9cr at a 7.8% gross margin.",
        competitors: [{ name: 'PharmEasy and Tata 1mg', note: 'Larger online pharmacies and distributors with deeper funding.' }, { name: 'Apollo’s pharmacy distribution arm', note: 'Grew 20% in Q1 at a 6% margin.' }, { name: 'Entero and traditional wholesalers', note: 'Give pharmacies credit, which Sastasundar does not; Entero, far larger and profitable, is covered in this note.' }],
        position: "**A small regional online medicine distributor**, with about 3–4% of West Bengal's market by its own latest estimate.",
        money: "Screener shows **₹523cr of net cash**; the company cites a treasury of about ₹500cr (about ₹100cr of it going with the demerger), invested partly in unlisted shares, private debt and funds that are hard to value, and some dealings involve funds linked to its managers. Operating cash was −₹74cr in FY26 and working capital rose from 18 to 28 days of sales in Q1 FY27. No dividend. Promoters hold **74.1%**, broadly unchanged from 73.9% in September 2023.",
        watch: ["RetailerShakti turning EBITDA-positive in Q3 FY27.", "Working capital back below 20 days.", "The demerger, and what stays in the treasury."],
        charts: retailCharts['Sastasundar Ventures'],
    },
    {
        "company": "Patel Retail",
        "inShort": [
            "**A Mumbai-suburb supermarket chain plus a food-processing and export business**: 54 Patel's R Mart stores in Thane and Raigad districts, and plants in Kutch that clean and pack pulses, spices and peanuts, sold under its own brands and exported to 35+ countries.",
            "**Good:** revenue up 28% in FY26 and 70% in Q1, profit up 55% in FY26, debt down after the IPO, and the shares at about 19 times earnings. **Bad:** operating cash was −₹83cr in FY26 as stock days rose from 31 to 109 in four years, the margin fell to 5–6% in the last two quarters, stores are only about a third of revenue, and over FY22–FY26 it turned ₹251cr of operating profit into almost no operating cash.",
            "**Verdict: wait.** Cheap for its growth, but the growth so far has gone into stock rather than cash; wait for H1 FY27 to show positive operating cash and the margin back near 7–8%."
        ],
        "tagline": "A family-run value supermarket chain in Mumbai's outer suburbs that also processes, brands and exports pulses and spices from Kutch, Gujarat.",
        "revenue": "₹1,048cr (FY26, standalone)",
        "products": [
            {
                "name": "Patel's R Mart supermarkets",
                "text": "54 value supermarkets (September 2026) in the outer suburbs of Mumbai, from Ambernath and Kalyan to Raigad, with over 10,000 items: groceries, packaged goods, household items and about 8–9% clothing and general goods. A store sells ₹80–90 lakh a month on average, bills run ₹500–1,000, and online sales were only about ₹50 lakh in Q1 FY27."
            },
            {
                "name": "Processing and own brands",
                "text": "Two units in Kutch and a site at Ambernath clean, grade and pack pulses, peanuts, cumin, coriander and spices, running at 50–55% of capacity. Own brands: Indian Chaska (spices, now in 8 states and one union territory, with 23 whole spices added in October 2026), Patel Fresh (pulses, dry fruit), Patel Essentials (household) and Blue Nation (menswear)."
            },
            {
                "name": "Exports and bulk trading",
                "text": "Processed food and farm produce sold abroad (Sri Lanka, UAE, UK, Saudi Arabia, USA and Canada among others) and in bulk at home. Exports were about 40% of Q1 FY27 revenue by the CFO's estimate. Sugar exports were ₹309cr in FY23 and nil in FY25 after India restricted them."
            }
        ],
        "revenueText": "**Retail was 45% of FY25 revenue and manufacturing, processing and trading 54%** (prospectus). Since then the export and processing side has grown faster: in Q1 FY27 store sales were about ₹101cr of ₹310cr (roughly a third) and exports about 40%, which the CFO said bring 35–40% of profit. Own brands were 17.55% of store sales, 37% of exports and 45% of domestic distribution. **The ten largest customers were 15.7% of FY25 revenue**, down from 32.2% in FY23 when bulk sugar exports were large. All stores are in Maharashtra's Thane and Raigad districts.",
        "mixes": [
            {
                "caption": "Revenue by segment, FY25 (prospectus; about 1% not split)",
                "parts": [
                    {
                        "label": "Retail: food",
                        "share": 33
                    },
                    {
                        "label": "Retail: non-food FMCG",
                        "share": 9
                    },
                    {
                        "label": "Retail: general goods and clothing",
                        "share": 3
                    },
                    {
                        "label": "Manufacturing and processing",
                        "share": 44
                    },
                    {
                        "label": "Bulk trading",
                        "share": 10
                    }
                ]
            },
            {
                "caption": "Revenue by business, Q1 FY27 (approximate, from the Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Exports",
                        "share": 40
                    },
                    {
                        "label": "Retail stores",
                        "share": 33
                    },
                    {
                        "label": "Domestic manufacturing and distribution",
                        "share": 27
                    }
                ]
            }
        ],
        "customers": [
            "**Households in Mumbai's outer suburbs and small towns** (Ambernath, Badlapur, Kalyan, Titwala, Rasayani, Uran), buying staples, which are over half of store sales.",
            "**Overseas importers and wholesalers** in 35+ countries buying processed pulses, spices and produce; the top ten customers were 15.7% of FY25 revenue.",
            "**Shops and distributors** carrying Indian Chaska and Patel Fresh in Maharashtra, Gujarat and newer states such as Madhya Pradesh (₹10–12 lakh a month so far)."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Grocery retail and pulse or spice processing are easy to enter and crowded. The edge is local: stores in outer suburbs where DMart and Reliance are thinner, a central warehouse at Ambernath, and its own processing for cheaper own-brand goods."
        },
        "moat": "Narrow. Clustering stores in under-served outer suburbs gives it cheaper sites and repeat local shoppers, and owning the processing lets own brands earn more than bought-in goods. But the stores are only about a third of revenue, all in one region; the export and processing side is a commodity business with thin margins, and its brands have little pull outside its own shelves yet.",
        "salesDrivers": [
            "**New stores**: 8–10 in FY27 and about 71 by March 2028 (Acuité); a new store costs ₹5,000–6,000 per sq ft, breaks even at the operating level from the start and pays back in about 24 months, by management's account.",
            "**Export and processing orders**: lumpy and tied to commodity prices; they drove most of the 70% Q1 jump and swing with government export rules (sugar exports went to nil in FY25).",
            "**Own brands**: 17.55% of store sales; Indian Chaska is moving into new states and categories, with quick-commerce combo packs for Blinkit and Zepto still being negotiated in August.",
            "**Plant use**: from 50–55% now to 80–82% by FY27–FY28, as guided on 24 August.",
            "**Guidance**: about 20% revenue growth in FY27 (June) and an 8–9% margin on management's basis."
        ],
        "inputs": "**Farm produce and goods for resale**: pulses, peanuts, cumin, coriander and other spices bought from farmers and markets, plus branded goods for the stores. In FY26 materials and goods were 83% of sales (after a ₹76cr stock build), staff 4% and other costs 6%, leaving 7% operating profit. Store leases are a further cost, mostly shown below operating profit.",
        "costEffect": "**Partly passed on, with a lag; commodity swings set the quarter.** The stores can reprice quickly, but export and processing orders are priced when booked, and management said Q1 prices did not fully cover a jump in raw material costs. **Rule of thumb:** a 10% rise in materials not passed on would cut the margin by about 8 points (7% to a loss). **What happened:** there is no single input index to chart. The operating margin rose from 2.9% in FY22 to 7% in FY24–FY26 (Screener) as it moved away from low-margin bulk trading after the sugar export curbs. Quarterly it went from 8.3% in Q1 FY26 to 5.2% in Q4 FY26 and 6.1% in Q1 FY27 as the export share rose.",
        "competitors": [
            {
                "name": "DMart (Avenue Supermarts)",
                "note": "The low-price supermarket leader, with a similar store count in the same region at the DRHP (33 against Patel's 31) and far deeper pockets."
            },
            {
                "name": "Reliance Retail and Vishal Mega Mart",
                "note": "Large national chains; Reliance had 39 stores in the same region at the DRHP."
            },
            {
                "name": "Kirana shops and quick commerce",
                "note": "Local grocers, and Blinkit, Zepto and Swiggy Instamart, which are building their own private labels."
            },
            {
                "name": "Agro processors and exporters such as KN Agri Resources",
                "note": "Thin-margin commodity players competing for the same export orders."
            }
        ],
        "position": "**A regional value supermarket chain** with 54 stores in Thane and Raigad districts and about 2.4 lakh sq ft of retail space, plus a processing and export arm that is larger than the stores.",
        "money": "Borrowings were **₹163cr at March 2026** against ₹23cr of cash and liquid investments, so **net debt was about ₹140cr** (Acuité; Screener's borrowings agree). The August 2025 IPO raised ₹217cr of new money, about ₹59cr for repaying loans and ₹109cr for working capital, lifting net worth to ₹364cr. But **FY26 operating cash was −₹83cr** as stock rose from ₹144cr to ₹260cr and receivables from ₹117cr to ₹162cr; over FY22–FY26 operating cash added up to about −₹2cr against ₹251cr of operating profit, and free cash to about −₹67cr. Bank lines were about 97% used in the six months to August 2026. Acuité upgraded it to BBB+/A2 on 1 October 2026. No dividend has been paid, and the shares trade below the ₹255 IPO price. Promoters hold **70.00%**, unchanged since listing, with no pledge reported.",
        "watch": [
            "H1 FY27 operating cash turning positive, with stock days falling from 109.",
            "The margin back above 7% on Screener's basis as export orders normalise.",
            "Store openings on track for 8–10 in FY27, and own brands rising above 17.5% of store sales."
        ],
        charts: retailCharts["Patel Retail"],
    },
    {
        "company": "Purple Style Labs",
        "inShort": [
            "**Runs Pernia's Pop-Up Shop**, India's large multi-designer luxury fashion platform (website plus big experience centres in Mumbai, Delhi, Hyderabad, London and, since March 2026, Madison Avenue in New York), selling bridal and occasion wear from about 1,100 Indian designers.",
            "**Good:** platform sales (GMV) rose from ₹23cr in FY19 to ₹722cr in FY26 and 45% in Q1 FY27, and the average order is now ₹86,000. **Bad:** it lost **₹285cr in FY26** on ₹558cr of sales, has never had a positive operating cash flow in four years, carried ₹784cr of borrowings and leases at March 2026 against negative net worth, and the founder's stake is only 24%.",
            "**Verdict: avoid.** Store rents, interest and depreciation swallow far more than the business earns; avoid until it shows it can make money before the IPO cash runs out."
        ],
        "tagline": "A Mumbai-based luxury fashion retailer, founded in 2015 by Abhishek Agarwal, that owns Pernia's Pop-Up Shop and sells designer clothes and jewellery online and through large stores in India, London and New York.",
        "revenue": "₹558cr (FY26, consolidated)",
        "products": [
            {
                "name": "Women's occasion and bridal wear",
                "text": "The core: **77.7% of FY26 GMV** was womenswear. Pieces above ₹1 lakh brought ₹312cr of GMV in FY26; the cheaper (below ₹35,000) range was cut back to ₹86cr."
            },
            {
                "name": "Menswear, jewellery, accessories and kids",
                "text": "Menswear brought ₹132cr of GMV in FY26, up from ₹2cr in FY21. Also owns the Wendell Rodricks and Hemant Trivedi labels."
            },
            {
                "name": "Experience centres and website",
                "text": "12 centres in India (large stores of 20,000–60,000 sq ft in Mumbai and Delhi) plus London and New York, with the website listing about 2 lakh designer pieces. Store orders average about 2.5 times online orders."
            }
        ],
        "revenueText": "**FY26 GMV (the value of goods sold on the platform) was ₹722cr**, against filed revenue of ₹558cr; the gap is mainly customer advances and how consignment sales are booked. **Mumbai (₹205cr) and Delhi (₹166cr) were just over half of GMV**, and the US ₹77cr (down from ₹138cr in FY24 after cheap online orders were cut). About 50,000 customers brought ₹702cr of the ₹722cr. In Q1 FY27 GMV was ₹193cr (up from ₹133cr) and revenue ₹119cr (up 13%).",
        "mixes": [
            {
                "caption": "GMV by category, FY26 (approximate, from the Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Women's wear above ₹1 lakh",
                        "share": 43
                    },
                    {
                        "label": "Menswear",
                        "share": 18
                    },
                    {
                        "label": "Women's wear below ₹35,000",
                        "share": 12
                    },
                    {
                        "label": "Other women's wear, jewellery, rest",
                        "share": 27
                    }
                ]
            },
            {
                "caption": "GMV by market, FY26 (approximate, from the Q1 FY27 call)",
                "parts": [
                    {
                        "label": "Mumbai",
                        "share": 28
                    },
                    {
                        "label": "Delhi",
                        "share": 23
                    },
                    {
                        "label": "USA",
                        "share": 11
                    },
                    {
                        "label": "Other cities and countries",
                        "share": 38
                    }
                ]
            }
        ],
        "customers": [
            "**Wealthy Indian families** buying for weddings and occasions, in India and abroad (the US is the largest overseas market); the top 10,000 customers spent ₹406cr in FY26.",
            "No single customer matters; the risk is that spending on luxury and weddings is discretionary."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Anyone can open a designer store; what is hard is getting about 1,100 designers to supply one platform, running large flagship stores, and holding a wide range without buying deep stock. Many designer agreements are not exclusive, so the same brands sell through rivals and their own stores."
        },
        "moat": "Scale and curation: it is the largest multi-designer platform of its kind in India, and its 'backorder' model (the customer pays upfront, the designer makes the piece in 7–90 days) keeps stock low. But designers can sell elsewhere, the brand name itself is under a licence that its original owner has asked to end, and the model has not yet made money.",
        "salesDrivers": [
            "**Weddings and luxury spending** in India and among Indians abroad; Q1 is the leanest quarter, the festive and wedding quarters (Q2–Q4) the strongest.",
            "**The four large stores opened in FY26** (Fort and Linking Road in Mumbai, South Ex in Delhi, Madison Avenue in New York), now in their first full year.",
            "**Bigger tickets, fewer customers**: the average order rose from ₹46,000 in FY24 to ₹76,000 in FY26 and ₹86,000 in Q1 FY27, as cheap items and small designers were cut.",
            "**No new stores planned for now**, management said on 29 Sep; growth must come from the existing ones."
        ],
        "inputs": "**Designer merchandise**, bought outright, on consignment or to order after the customer pays. Stock was ₹159cr at June 2026 (₹174cr a year earlier). The other big costs are store rents (booked as lease interest and depreciation), staff and marketing.",
        "costEffect": "**Prices are set by the designers; the platform earns a markdown, so the gross margin stays around 36%** whatever the price level (36% in Q1 FY27 and a year earlier). The problem is fixed cost, not input prices: FY26 operating profit was ₹21cr, but interest (₹97cr) and depreciation (₹101cr), mostly on store leases, took it deep into loss. **Rule of thumb from management:** gross profit of about ₹55cr a quarter breaks even at EBITDA; covering the ₹45cr a quarter of lease interest and depreciation needs about ₹45cr more on top.",
        "competitors": [
            {
                "name": "Aza Fashions, Ogaan, Ensemble",
                "note": "Other multi-designer luxury stores; none is listed, so there is no direct listed peer."
            },
            {
                "name": "Designers' own stores and websites",
                "note": "Sabyasachi, Manish Malhotra and others sell directly; many designer agreements are non-exclusive."
            },
            {
                "name": "Online luxury platforms",
                "note": "Marketplaces such as Tata CLiQ Luxury and Nykaa's luxury arm sell some of the same labels."
            }
        ],
        "position": "**One of India's largest multi-designer luxury fashion platforms**, with ₹722cr of GMV in FY26, about 1,100 active designer brands and 14 experience centres including London and New York.",
        "money": "**Borrowings including leases were ₹784cr at March 2026** (Screener), of which bank and other loans were ₹371cr, rising to ₹436cr by June 2026; net worth was negative (equity ₹68cr, reserves −₹121cr). **Operating cash flow was negative in every year FY23–FY26 (−₹155cr in total), and free cash flow −₹249cr.** The September 2026 IPO raised **₹680cr in new shares at ₹575** (listed at ₹535, 7% below), earmarked ₹371cr for lease payments on its stores and ₹139cr for marketing through FY30. It has raised about $78m from investors, including the Harish Shah family office and Masaba Gupta; a Premji Invest partner sits on the board. Promoters hold **24.08%**; no pledge is reported.",
        "watch": [
            "EBITDA turning positive in Q2–Q3 FY27 without new stores.",
            "Operating cash flow positive for a full year, and bank debt falling.",
            "The outcome of the licence notice from Pernia Qureshi over the brand."
        ],
        charts: retailCharts["Purple Style Labs"],
    },
    {
        "company": "Shankara Buildpro",
        "inShort": [
            "**Sells steel pipes, tubes, roofing and flat steel, plus tiles, sanitaryware and other building materials**, through about 96 stores and over 130 fulfilment centres, mostly in South India, to homeowners, contractors, dealers and builders.",
            "**Good:** revenue grew 30% to ₹6,826cr in FY26, return on capital is about 39%, and customers pay within about 50 days. **Bad:** it keeps only about **3.3 paise of every rupee** as operating profit, so a steel price fall can wipe out a quarter's gain; it turned only 40% of four years' operating profit into cash; and about ₹500cr of supplier credit (letters of credit) sits outside the reported ₹61cr of borrowings.",
            "**Verdict: follow.** A well-run, cheap-looking distributor (about 20 times earnings), but Q1 grew volumes only 10%; I want H2 to show the promised 20% before buying. Its founder and Managing Director, Sukumar Srinivas, died on 30 October 2026; no successor has been named yet."
        ],
        "tagline": "A Bengaluru-based retailer and distributor of steel and building materials, split in 2025 from Shankara Building Products, which kept the pipe and roofing factories.",
        "revenue": "₹6,826cr (FY26, consolidated)",
        "products": [
            {
                "name": "Steel marketplace",
                "text": "Pipes and tubes, flat and long steel, sheets and colour-coated roofing from makers such as JSW Steel, SAIL and APL Apollo, with some cutting and processing in-house. **₹1,725cr of Q1 FY27 revenue (91%)**, on 2.5 lakh tonnes."
            },
            {
                "name": "Non-steel building materials",
                "text": "Plumbing fittings and sanitaryware (Jaquar, Kohler, Roca, Cera), tiles (Kajaria, Somany), electricals, paints, PVC roofing and hardware: about 2 lakh items. ₹165cr in Q1 FY27 (9%)."
            },
            {
                "name": "Own brands",
                "text": "Private labels such as Ganga, Taurus, Samrat, Loha and Vaigai, which management wants to grow for better retail margins."
            }
        ],
        "revenueText": "**Steel brings about 91% of revenue** (Q1 FY27), non-steel 9%. Roughly **50–55% of volume is retail** (walk-in homeowners, contractors and small builders); the rest goes to dealers, mid-size builders, OEMs and institutions, with order sizes from ₹500 to ₹1.5cr. Same-store sales grew 23% in FY26 and 21% in Q1 FY27. Sales are concentrated in South and West India across about ten states.",
        "mixes": [
            {
                "caption": "Revenue by type, Q1 FY27 (company)",
                "parts": [
                    {
                        "label": "Steel",
                        "share": 91
                    },
                    {
                        "label": "Non-steel",
                        "share": 9
                    }
                ]
            },
            {
                "caption": "Volume by channel (approximate, management)",
                "parts": [
                    {
                        "label": "Retail",
                        "share": 52
                    },
                    {
                        "label": "Dealers, builders and institutions",
                        "share": 48
                    }
                ],
                "note": "Management said 50–55% of volume is retail."
            }
        ],
        "customers": [
            "**Homeowners, masons and contractors** buying at stores, by phone or online.",
            "**Dealers, mid-size builders, OEMs and institutions** for larger orders; large-project business is where funded online rivals compete hardest, and management steps back from the most price-driven tube orders."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Selling steel is simple; doing it profitably across thousands of items, nine or ten states and both retail and project customers is not. It took decades to build the store network, supplier terms and credit control."
        },
        "moat": "A dense physical network in South India, long supplier relationships and a wide range under one roof give it an edge over local dealers and the venture-funded online platforms. But the products are commodities made by others, and the margin is too thin to absorb price wars.",
        "salesDrivers": [
            "**Construction and steel demand**: India's steel use is about 180 million tonnes, with a national aim of 300 million by 2030; management expects 20% volume growth a year and 2 million tonnes in about four years.",
            "**Steel prices**: higher prices lift revenue and give inventory gains (about ₹15cr in Q4 FY26); falling prices cause losses (about ₹10cr in Q1 FY27).",
            "**New stores and fulfilment centres**: about eight in FY27, into new territories including North and West.",
            "**Non-steel recovery**: guided to grow 25% after two flat years; sanitaryware grew 32% in Q1.",
            "**Competition** from funded B2B platforms has eased in the last couple of quarters, management says."
        ],
        "inputs": "**Finished steel and building products bought from makers** (JSW Steel, SAIL, APL Apollo, Jaquar, Kajaria and others); purchases are almost the whole cost. The company also processes some pipes and roofing sheets.",
        "costEffect": "**A trader's margin: about 3% of sales, so price swings on stock matter more than input costs.** Steel bought earlier and sold after a price fall costs margin; a rise does the reverse. **Rule of thumb:** each ₹10cr inventory loss is about half a point of quarterly margin. **What happened:** prices rose in March–April 2026 and fell in May–June; Q1 FY27 margin was 3.26% after a ₹10cr loss, about 3.8% without it, after a ₹15cr gain had lifted Q4 FY26 to 3.5%.",
        "competitors": [
            {
                "name": "OfBusiness, Infra.Market, JSW One, Tata Nexarc",
                "note": "Funded online or maker-owned B2B platforms that compete for builder and project orders, often with credit."
            },
            {
                "name": "Local steel and hardware dealers",
                "note": "The bulk of the market; smaller ones have pulled back after inventory losses, management says."
            },
            {
                "name": "SG Mart",
                "note": "A listed steel distributor focused on large B2B orders rather than retail stores."
            }
        ],
        "position": "**One of India's largest retailers of steel tubes and pipes**, by its own description, with about 1 million tonnes of steel sold in FY26, about 96 stores and over 130 fulfilment centres.",
        "money": "Screener shows **₹61cr of borrowings** at March 2026, but the CFO said total borrowing was about **₹575cr at June 2026 including about ₹500cr of letters of credit discounted at the company's cost**, booked under other liabilities; cash was not separately available. Crisil rates it A-/Stable (December 2025) on ₹745cr of bank lines, with limits only about 21% used. **Over FY23–FY26 operating cash was ₹260cr against ₹646cr of operating profit (40%)**, though FY26 converted 59% (₹90cr of ₹227cr); working capital was 22 days. Capex is small (warehousing, cutting lines, stores); acquisitions are 'on the table'. It paid a first dividend (about 9% of FY26 profit). Promoters hold **40.17%**, with no pledge shown.",
        "watch": [
            "Volume growth reaching 20% in H2 FY27 after Q1's 10%.",
            "The margin holding at 3.5% through steel price swings.",
            "Cash conversion and the letter-of-credit balance as it grows.",
            "Who succeeds founder and Managing Director Sukumar Srinivas, who died on 30 October 2026, and whether the second line Crisil credits holds the business together."
        ],
        charts: retailCharts["Shankara Buildpro"],
    },
    {
        "company": "Safe Enterprises Retail Fixtures",
        "inShort": [
            "**Designs, makes and installs shop fittings** (wall units, display stands, cash counters, trial rooms, lit and electrified fixtures) for clothing, electronics and department-store chains, from leased plants in Mumbai and Pune; listed on NSE's SME board since June 2025.",
            "**Good:** FY26 revenue grew 57% to ₹218cr (company figure) at a **36% operating margin**, it has about ₹130cr of cash and no debt, and the stock trades at about 17 times earnings. **Bad:** in FY24 **one customer bought 86% of everything it sold** (top five 94%), it turned only 45% of three years' operating profit into cash, and customers take about 76 days to pay.",
            "**Verdict: wait.** Cheap and very profitable, but it is effectively a supplier to one retail chain; I want H1 FY27 to show 30% growth and a broader customer list first."
        ],
        "tagline": "A Mumbai maker of retail shop fixtures under the INSYNC brand, run by the Merchant family since 1991, that fits out new and refurbished stores for large Indian retail chains.",
        "revenue": "₹218cr (FY26, consolidated)",
        "products": [
            {
                "name": "Retail fixtures for new stores",
                "text": "Modular, standardised fixture systems with custom finishes, plus cash counters and trial rooms; **68.9% of FY26 revenue**. Average revenue per store rose 65% to about ₹51 lakh in FY26."
            },
            {
                "name": "Refurbishment",
                "text": "Refits of existing stores on a three-to-four-year cycle; **24.8% of FY26 revenue**, at the same margin as new stores."
            },
            {
                "name": "WAVE and EVOLV",
                "text": "WAVE, launched FY26, is an RFID self-checkout built into the fixtures (software by promoter-group firm BizPay); EVOLV applies the same parts to home furniture, not expected to matter before FY28."
            }
        ],
        "revenueText": "**New stores brought 68.9% and refurbishments 24.8% of FY26 revenue.** The number of stores served has been flat (407, 445 and 425 over three years) because plants are over 90% full; growth came from more and pricier work per store. **Customer concentration is extreme: the top customer was 85.9% of FY24 revenue and the top five 94.0%** (prospectus); the company did not disclose a newer figure. Management would not name clients; analysts on the call asked about Trent and Reliance Retail. It works in more than 25 states and exports a little to the US and UAE.",
        "mixes": [
            {
                "caption": "Revenue by type, FY26 (company)",
                "parts": [
                    {
                        "label": "New stores",
                        "share": 69
                    },
                    {
                        "label": "Refurbishment",
                        "share": 25
                    },
                    {
                        "label": "Other",
                        "share": 6
                    }
                ]
            },
            {
                "caption": "Revenue by customer, FY24 (prospectus)",
                "parts": [
                    {
                        "label": "Top customer",
                        "share": 86
                    },
                    {
                        "label": "Next four customers",
                        "share": 8
                    },
                    {
                        "label": "All others",
                        "share": 6
                    }
                ]
            }
        ],
        "customers": [
            "**Large Indian fashion and lifestyle retail chains** rolling out new stores; the largest single customer bought 85.9% of FY24 sales.",
            "Terms: 30–70% advance (100% for new clients), the rest in 30–60 days, with 10% held back for six months."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Making fixtures is not hard; delivering hundreds of stores a year on time across the country, with standard parts and quick installation, is what retailers pay for. The company says it never competes on price."
        },
        "moat": "Speed and reliability for a chain that opens many stores fast, plus a standardised modular system, give it most of its main customers' business. But that is a relationship, not a lock-in: retailers keep a second vendor for audit reasons and could shift volume.",
        "salesDrivers": [
            "**Store openings and refits by large retail chains**, especially value-fashion chains expanding into smaller towns.",
            "**Capacity**: plants are over 90% used; existing space allows about 30% more revenue, and the Ambernath plant (Q3 FY27) about ₹500cr of revenue.",
            "**More work per store**: cash counters, trial rooms, premium finishes and self-checkout technology.",
            "**One customer's rollout plans** decide most of the year's revenue."
        ],
        "inputs": "**Steel, wood boards, glass, lighting and powder coating**, plus labour for installation. Cost shares were not disclosed. A gas shortage in March 2026 briefly hit its powder-coating line.",
        "costEffect": "**Margins have been unusually high and steady (31–36% operating margin over FY24–FY26), so materials are not the swing factor.** Fixtures are quoted per project, which lets it reprice for new orders. The CFO expects the margin to rise when five leased Mumbai plants merge into the owned Ambernath plant, but guides a long-run profit margin of about 25%, below FY26's 29%.",
        "competitors": [
            {
                "name": "Unorganised local fixture makers and carpenters",
                "note": "Most of the market; retailers move to organised suppliers as chains grow."
            },
            {
                "name": "Visplay (Germany)",
                "note": "The international benchmark the company says it used in its early years."
            }
        ],
        "position": "**A leading organised supplier of retail fixtures in India by its own account**, serving about 425 stores a year; no market share is published.",
        "money": "**No borrowings** at March 2026 and about **₹130cr of cash and short-term investments**, mostly unspent IPO money. The June 2025 IPO raised **₹169.74cr at ₹138 a share** (subscribed about 10 times), mainly for the Ambernath plant (about ₹90–95cr in total, ₹58–65cr spent by May 2026). **Over FY24–FY26 operating cash was ₹67cr against ₹148cr of operating profit (45%)**; receivables rose to about 21% of sales. Promoters hold **70.07%**. It is an NSE SME company and plans to move to the main board after three years of listing.",
        "watch": [
            "A falling share for the top customer as new clients are added.",
            "The Ambernath plant on time in Q3 FY27 and filled in FY28.",
            "Operating cash catching up with profit."
        ],
        charts: retailCharts["Safe Enterprises Retail Fixtures"],
    },
];

export const retailBusinesses = { intro, profiles };
