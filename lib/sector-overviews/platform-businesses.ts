import { BusinessProfile, OverviewSection } from './types';
import { platformCharts } from './card-data/platform';

// Tab 2 of the Platform Cos note: what each company actually does.
// Revenue totals are the filed figures (Screener). Splits come from the
// companies' latest presentations, annual reports and calls; where a split is
// not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it sells, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (all consolidated except Macfos, which is SME-listed and standalone); splits are from each company's latest presentation or call. Platforms have no main raw material, so most cards skip the cost-versus-input chart; TBO Tek, BlackBuck and Macfos show the price that matters most to their customers or their stock.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Thirteen companies that make money by connecting buyers and sellers online.",
        ],
        points: [
            {
                label: 'Listings and subscriptions',
                text: "Car and bike websites, used-car classifieds and vehicle auctions (CarTrade); matchmaking websites where members pay to contact others (Matrimony.com); co-living rentals, sales software for property developers, property leads and brokerage, and soon the Housing.com portal (Aurum PropTech).",
            },
            {
                label: 'Platforms for businesses',
                text: "An app for small truck owners to pay tolls and fuel and find loads (BlackBuck); a marketplace where travel agents book hotels and flights (TBO Tek); card and UPI terminals and online checkout for shops (Pine Labs); the CCAvenue online payment gateway, bill payments and Rediff's email and business software (AvenuesAI, formerly Infibeam Avenues); an online store for electronics and drone parts (Macfos); shipping, cash-on-delivery collection and checkout for small online sellers (Shiprocket); an insurance broker selling through part-time agents in small towns (Turtlemint).",
            },
            {
                label: 'Consumer apps',
                text: "Food delivery and grocery delivery within minutes (Swiggy); cleaners, beauticians, electricians and house help booked through an app (Urban Company); a mobile wallet, UPI app, bill payments and small loans (MobiKwik).",
            },
        ],
    },
    {
        heading: 'Three ways of charging',
        body: [
            "How a platform charges decides how much of each sale it keeps and how fast the cash comes in.",
        ],
        tables: [
            {
                columns: ['Model', 'Who', 'What it keeps', 'How fast the cash comes'],
                rows: [
                    ['**Subscriptions and listing fees**', 'CarTrade, Matrimony.com, Aurum (Sell.do software, Housing.com listings)', 'Most of it: the cost of one more member is tiny', 'Paid up front'],
                    ['**A cut of each transaction**', 'Swiggy, Urban Company, TBO Tek, BlackBuck, Pine Labs, AvenuesAI, MobiKwik, Shiprocket, Turtlemint (commission from insurers), Aurum (brokerage)', 'A commission or fee on each order, booking or payment', 'Consumer apps are paid up front; business platforms such as TBO give their customers credit'],
                    ['**Buying and reselling**', 'Macfos', 'The gap between buying and selling price', 'Slow: stock must be held'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'Cartrade Tech',
        inShort: ["**India's dominant online vehicle marketplace group**: CarWale and BikeWale for new-car and bike research, OLX India for used cars and other second-hand goods, and Shriram Automall for vehicle auctions.", "**Good:** the operating margin has risen from 9% in FY23 to 31–37% over the last four quarters (filed; 36% in Q2 FY27, on record revenue of ₹213cr), profits turn into cash, and Screener shows ₹811cr of net cash (the company counts ₹1,321cr of cash). **Watch:** the cash pile (over ₹1,400cr) keeps growing and management says rules bar a dividend or buyback this year, treasury income is about 30% of pre-tax profit, CarWale grew only 4% in Q2 against a strong base, OLX now pays full tax, which slows profit growth, and the chairman's son and daughter hold senior roles.", "**Verdict: own.** Fast, cash-rich profit growth, with a medium-term goal of a 40% margin and ₹1,000cr of annual profit within 4–5 years."],
        tagline: "A group of online vehicle marketplaces (CarWale, BikeWale, OLX India) and a physical-and-online vehicle auction business (Shriram Automall, CarTrade Exchange).",
        revenue: '₹779cr (FY26, consolidated)',
        products: [
            { name: "CarWale and BikeWale (consumer group)", text: "Websites and apps where people research new cars and bikes. Carmakers pay for advertising and data, and dealers pay for buyer leads. Revenue grew 18% in Q1 FY27 to about ₹78cr at a 33% margin; AI tools now help with pricing and online showrooms." },
            { name: "OLX India", text: "Classifieds for used cars, phones, furniture and more, with about 30 million users a month; management says about 63% of Indians selling a car use it. Revenue grew 29% in Q1 FY27 and operating profit 76%, from dealer subscriptions, paid listings and new paid plans for buyers." },
            { name: "Remarketing (Shriram Automall, CarTrade Exchange)", text: "Physical and online auctions of used and repossessed vehicles for banks, finance companies, insurers and fleet owners. Revenue grew 13% in Q1 FY27 at a 28% margin, with both retail and repossessed volumes up." },
            { name: "Transactions and loans (new)", text: "A partnership with Spinny, announced on 29 July 2026, lets OLX and CarWale users buy or sell a used car end to end, with CarTrade earning a fee or margin share per car. Used-car loans are arranged with IDFC for a 2–3% fee, without lending its own money." },
        ],
        revenueText: "The company does not give a full rupee split by business. CarWale and BikeWale brought in **about ₹78cr of the ₹201cr Q1 FY27 revenue** (roughly 39%, standalone figure); OLX and remarketing make up the rest. **About 95% of traffic arrives free** (organic), from about 150 million users a year across its sites. Money comes from carmaker advertising, dealer subscriptions, auction fees and paid listings; management now wants to add a fee on each car actually sold.",
        customers: ["**Carmakers and dealers**, who pay CarWale and BikeWale for advertising, leads and data; management says the mix between them has not changed.", "**Banks, finance companies and insurers** selling vehicles through Shriram Automall; about 45% of auction volume is retail vehicles and 41% repossessions.", "**Used-car dealers and individual buyers and sellers** on OLX. About 25% of seller revenue already comes from the paid 'elite seller' plan, and heavy business buyers are being moved to paid plans."],
        difficulty: { level: 'High', text: "Brands that draw about 150 million users a year, 95% of them without paid advertising, take decades to build and cannot be bought with Google ads. The auction arm needs 500-plus physical outlets (with abSure) and long ties with lenders. The main risk is new ways to search, such as AI chatbots, though traffic is still rising." },
        moat: "Free traffic and a two-sided network (most sellers list on OLX, so buyers come too) keep costs low and dealers paying. The weakness is that most deals still close off the platform, so it earns listing fees rather than a cut of each sale, and new-car advertising depends on carmakers' budgets.",
        salesDrivers: ["**Car and bike demand in India**: carmaker and dealer ad budgets follow launches and sales; consumer-group traffic was up 7% year on year in Q1 FY27.", "**Charging OLX buyers**: buyers outnumber sellers seven to one. Paid buyer plans passed 100,000 users in a month, and heavy business buyers were due to move from free to paid in August 2026.", "**Earning on transactions, not just listings**: the Spinny deal, talks with large dealer groups and its own abSure outlets aim to earn a fee or margin share per car, while CarTrade stays free of stock and working capital.", "**Vehicle loans**: only 20–25% of used-car buyers get organised loans; it works with IDFC, is talking to other banks and NBFCs, and plans small loans for used phones and TVs.", "**Operating leverage**: pay rises happen each April, so management expects most extra revenue in Q2–Q4 to fall straight to profit."],
        inputs: "**No materials.** Its main cost is staff (40% of sales in FY26), plus direct operating costs (the line Screener labels power and factory costs, 8%) and other costs such as technology, AI tools and offices (19%). Materials were nil in FY26.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on staff costs and on how fast revenue grows: wages rise once a year in April, and total costs rose only 7% in Q1 FY27 while revenue rose 16%. **What happened:** the operating margin rose from 9% in FY23 to 16% in FY24, 24% in FY25 and 33% in FY26 (Screener). By quarter it went from 25% in Q1 FY26 to a peak of 37% in Q3 FY26 and 31% in Q1 FY27, after the annual pay rise. Management expects to beat 31% in the rest of FY27 and wants to pass 40% in the medium term.",
        competitors: [{ name: "CarDekho", note: "The main rival in new-car research and listings." }, { name: "Cars24 and Spinny", note: "Organised used-car sellers that also list on OLX; Spinny is now a partner as well as a rival." }, { name: "Facebook Marketplace and other free classifieds", note: "Free alternatives for used goods, which limit how hard OLX can push paid plans." }, { name: "AI search (ChatGPT, Google)", note: "A possible threat to free traffic; so far CarWale traffic is still growing." }],
        position: "**By management's account, India's dominant automotive platform**: it owns three of the 10–20 Indian consumer sites with more than 150 million users a year (CarWale, BikeWale, OLX), and about 63% of people selling a car use OLX.",
        money: "Screener shows **₹811cr of net cash**; the company reports ₹1,321cr of cash, which keeps growing. It needs almost no capex or working capital, so operating cash has been 1.4 times operating profit over five years. No dividend or buyback has been announced, which keeps return on capital at about 10% (management's figure). The tax rate is rising to 23–24% now that OLX pays full tax. Goodwill from the OLX and Shriram Automall purchases is ₹1,324cr, which the auditor tests each year (no impairment so far), and 44.57% of Shriram Automall's profit belongs to minority holders. CarTrade has no promoter group; foreign investors hold about 54% and domestic institutions 16% (Screener, June 2026). The chairman's son is chief strategy officer and OLX chairman, and his daughter joined the board in April 2025 (FY26 annual report).",
        watch: ["OLX growth passing 30% in Q3, as promised on the Q2 call (26% in Q2), as business buyers move to paid plans.", "Revenue from Elite Buyer, the Landmark and Spinny tie-ups and used-car loans, none yet disclosed.", "Margin staying above 31% in Q3–Q4 FY27, and a dividend or buyback once the rules allow (not this year, management says)."],
        charts: platformCharts['Cartrade Tech'],
    },
    {
        company: 'BlackBuck',
        inShort: ["**An app for India's small truck owners**: they use it to pay tolls (FASTag) and buy fuel, track their trucks by GPS, find loads and get vehicle loans. About 9 lakh truck operators transact on it each month.", "**Good:** revenue growing 40–50%+ a year, a 93% contribution margin, an operating profit since FY25 and ₹629cr of net cash. **Watch:** pre-tax profit fell 8% in Q1 as device depreciation more than doubled, and profit after tax rose only on tax credits; growth is shifting to the lower-margin loads business and to lending, the fuel business is weak, a ₹22.4cr GST demand was upheld, Accel is selling, and Delhivery says it may enter tolling and truck finance.", "**Verdict: follow.** A profitable, fast-growing platform with little organised competition, but pre-tax profit fell in Q1 and the price needs about {need:BlackBuck|27}% a year against my ~15%."],
        tagline: "Zinka Logistics Solutions, trading as BlackBuck: a digital platform for small truck fleet owners covering toll and fuel payments, GPS telematics, a loads marketplace (Superloads) and vehicle finance.",
        revenue: '₹652cr (FY26, consolidated)',
        products: [
            { name: "Payments (tolling and fuel)", text: "FASTag toll payments and fuel cards. Tolls paid through BlackBuck grew 16% by value in Q1 FY27 against low single-digit growth in national electronic toll collection; the company now reports tolling value alone (₹7,045cr in Q1 FY27) because fuel is small and volatile." },
            { name: "Telematics", text: "GPS trackers, fuel sensors and fleet software sold on 1–3 year plans. Q1 FY27 had record device sales; about 70% of customers renew the first time, rising to the 80s% at later renewals." },
            { name: "Superloads", text: "A marketplace matching loads from shippers with trucks, run from hubs in 14 cities (Bangalore, Hyderabad, Mumbai and Chennai first, 10 more from around March–April 2026). AI phone calls now place 40–50% of daily loads." },
            { name: "Vehicle finance", text: "Loans to truck owners, judged using BlackBuck's payment and GPS data. Management expects this unit to be profitable by the end of FY27." },
        ],
        revenueText: "BlackBuck splits the business into **'core' (payments and telematics)**, which grew 21% in Q1 FY27, and **'growth' (Superloads and vehicle finance)**, which grew about 2.5 times and 44% on the previous quarter. It does not give the rupee split between them. Gross revenue grew 42% but **net revenue grew 25%**, and contribution margin (net revenue after direct costs) stayed at 93%. Fuel is a small part of revenue.",
        customers: ["**Small fleet operators** (owners of a few trucks), reached through a presence in almost every trucking village. About 9 lakh transact each month (up 13%), spending about 45 minutes a day in the app; users of two or more services grew about 20%.", "**Shippers, transporters and small businesses** needing trucks for loads through Superloads.", "**Truck owners borrowing** through its vehicle finance arm."],
        difficulty: { level: 'High', text: "The app itself is easy to copy; the ground network in trucking villages, the data on lakhs of trucks' tolls and movements, and years of truckers' trust are not. Management says the model needs heavy legwork, which is why it sees little qualified competition, but a well-funded entrant such as Delhivery could spend to win share." },
        moat: "Tolling and GPS tracking are near-daily needs, so truckers open the app often, and BlackBuck uses that habit and data to sell loads and loans. The weakness is that loads are an infrequent need (a three-truck owner looks for a load every other day) and freight matching earns thinner margins than payments.",
        salesDrivers: ["**Truck movement and toll rates**: tolling grows with road building, toll-fare increases and truck numbers. Intercity movement fell sharply in early April 2026 but was back to normal by June.", "**Winning more truckers**: transacting users grew 13%, slower than the 20–30% of past years because the base is bigger.", "**Telematics renewals**: record device sales in Q1 FY27 will renew at very high contribution margins over the next year.", "**Superloads hubs maturing**: a hub reaches network effects at about 5,000 loads a month; management says Bangalore is 60–70% of the way there in building the playbook, and newer cities are growing faster than the first four.", "**Fuel**: loyalty offers were cut back when fuel supply was short; management wants crude prices to settle before expecting a full recovery."],
        inputs: "**No materials.** Its costs are direct operating costs (the line Screener labels power and factory costs, 24% of sales in FY26), staff (25%) and other costs (26%). Telematics devices are bought upfront and written off over two years, so they show up in depreciation. Materials were nil in FY26.",
        costEffect: "**Mostly insulated from diesel.** BlackBuck does not buy diesel for itself; fuel prices reach it through its customers (dearer diesel squeezes truck owners and changes how much they drive) and through its small fuel-card business. What moves its margin is scale: management says 60–85% of extra core revenue turns into operating profit, while spending on Superloads pulls the other way. **What happened:** India's diesel wholesale price index stayed between 94 and 102 from Q1 FY24 to Q4 FY26, then jumped to 119 in Q1 FY27. The margin went from minus 52.5% in Q1 FY24 to 24.5% in Q1 FY27, which had nothing to do with diesel: revenue rose from ₹176cr in FY23 to ₹652cr in FY26 while costs rose only about 19%, taking the margin to 22% in FY25 and 26% in FY26.",
        competitors: [{ name: "Delhivery", note: "The listed logistics firm said in a filing it may enter tolling, fuel and vehicle finance for truck operators; BlackBuck sees no near-term threat." }, { name: "Banks and wallets issuing FASTags", note: "Many issue toll tags; BlackBuck's edge is its app, ground network and bundled services." }, { name: "Local load brokers", note: "Entrenched middlemen who match loads by phone; Superloads is trying to replace them with AI-led matching." }, { name: "Truck-finance companies", note: "Established lenders to truck owners, far larger than BlackBuck's finance arm." }],
        position: "**A leader in digital services for small truck owners**, with about 9 lakh monthly transacting customers and tolling growing well ahead of the national market (16% against low single digits). The call gives no market-share figure.",
        money: "Screener shows **₹629cr of net cash**. Operating cash flow turned positive in FY24 and reached ₹169cr in FY26. Reported profit is lifted by deferred-tax credits (Q4 FY26 profit included one); management expects current and deferred tax to offset each other for the next two quarters. Pre-tax profit fell 8% in Q1 FY27 (₹42cr against ₹46cr) as device depreciation rose to ₹23cr from ₹9cr; profit after tax rose only because tax was almost nil. A ₹22.4cr GST demand for FY2020-21 was upheld on appeal on 3 August 2026. Promoters hold **25.0%**, down from 27.8% in December 2024, and early investor Accel sold 1.48% on 12 September 2026.",
        watch: ["Whether Delhivery or others start a price war in tolling.", "Superloads hubs reaching 5,000 loads a month, and the effect on margins.", "Vehicle finance turning profitable by end-FY27."],
        charts: platformCharts['BlackBuck'],
    },
    {
        company: 'Matrimony.com',
        inShort: ["**Runs BharatMatrimony and related matchmaking sites and apps**, where singles and their families pay for subscriptions to find a marriage partner, plus low-priced Jodii and Love.com and small wedding-services and jobs ventures.", "**Good:** Q1 FY27 profit up 127%, almost all profit turns into cash, and Screener shows ₹154cr of net cash (the company counts ₹342cr of cash). **Bad:** revenue grew only 1% in FY26 and 13% in Q1 FY27, average revenue per subscription fell 6.7% from the previous quarter, paid subscriptions have fallen three years running, the finance chief left in August 2026 after a qualified governance certificate, the managing director's shares are pledged, and a court has forced it to rename Jodii.", "**Verdict: follow.** Profits are recovering, but billing grows in single digits and the price needs about {need:Matrimony.com|16}% a year against my ~10%."],
        tagline: "A leading Indian online matchmaking company (BharatMatrimony, community matrimony sites, Jodii, Love.com), with small wedding-services and job-portal ventures.",
        revenue: '₹460cr (FY26, consolidated)',
        products: [
            { name: "Matchmaking subscriptions", text: "Paid plans of 3 months to 1 year that unlock contacts and messaging. It added 2.72 lakh paid subscriptions in Q1 FY27, up 15.9% on the previous quarter; matchmaking revenue was ₹129.5cr at a 26.9% margin." },
            { name: "Jodii and Love.com", text: "Very low-priced products: Jodii for price-sensitive users and Love.com for 'serious dating', now going regional with Malayali Love. Management plans to spend on marketing to grow them. On 11 August 2026 the Madras High Court granted the owner of Jodi365 a permanent injunction against the Jodii name; the company withdrew its Supreme Court appeal on 7 September and must rebrand. Jodii's revenue is not disclosed." },
            { name: "Wedding services", text: "Moving from subscriptions to a commission model; management sees a possible run rate above ₹100cr but gives no timeline and expects clarity in about a year." },
            { name: "Other ventures", text: "Many Jobs, a blue-collar job portal limited to Tamil Nadu (1.5 million job seekers), and a ₹4cr stake in an AI astrology start-up. Marriage services and others lost ₹3.8cr in Q1 FY27." },
        ],
        revenueText: "**Matchmaking is 99% of revenue** (₹129.5cr of ₹130.5cr in Q1 FY27). Users pay upfront (billing) and revenue is spread over the plan, so billing of ₹136cr ran ahead of revenue; management says 96–99% of billing shows up as revenue in a quarter. It will not split revenue by region or brand, for competitive reasons.",
        mixes: [
            { caption: "Revenue by business, Q1 FY27 (company call)", parts: [{ label: 'Matchmaking', share: 99 }, { label: 'Marriage services and others', share: 1 }] },
        ],
        customers: ["**Prospective brides and grooms and their parents**, who pay upfront for plans of 3 months to a year; the company reported over 25,500 success stories (marriages) in Q1 FY27.", "**Price-sensitive users** on low-cost Jodii and Love.com.", "**Couples planning weddings** (wedding services) and **employers and blue-collar job seekers** in Tamil Nadu (Many Jobs)."],
        difficulty: { level: 'Medium', text: "A matchmaking site is easy to build; a large pool of verified profiles is not, because users go where the most suitable matches are, and every profile and photo is checked before going live. Keeping that pool full needs heavy advertising (₹46.5cr in Q1 FY27, about 36% of matchmaking revenue), so a well-funded rival can compete by spending." },
        moat: "Network effects (more profiles attract more users), a checked database and a trusted brand keep it a first stop for arranged-marriage searches in its strong markets. The weakness is dependence on marketing to stay visible, and the risk that younger users drift to dating apps.",
        salesDrivers: ["**Profile sign-ups and conversion**: more new profiles and more of them buying plans; paid subscriptions were up 3.7% year on year.", "**Pricing and plan mix**: average revenue per subscription fell 6.7% from the previous quarter but rose 4.2% on the year; management uses data-driven discounts and says not to expect it to rise every quarter.", "**Longer plans**: a one-year plan introduced last year pushed some revenue into later quarters, which is now coming through, although management says only a small share of users choose it.", "**Competition and marketing**: rivals have eased off in some markets, but the company expects to keep or slightly raise marketing spend.", "**Near-term guidance**: double-digit billing and revenue growth in Q2 FY27, with profit similar to or slightly above Q1 (triple-digit growth on a year earlier)."],
        inputs: "**No materials.** The two big costs are marketing and advertising (within other costs, 53% of sales in FY26; ₹46.5cr in Q1 FY27 alone) and staff (33%). Materials were nil in FY26.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on marketing spend and on billing growth over a largely fixed staff and technology base; AI now handles much of the profile and photo checking and customer service. **What happened:** the operating margin fell from 20% in FY22 to 15% in FY23 and FY24, 13% in FY25 and 11% in FY26 (Screener) as revenue stalled and the one-year plan pushed revenue into later periods. It jumped to 20% in Q1 FY27, from 11% a year earlier, as that revenue came through while marketing stayed flat at about ₹46.5cr; matchmaking alone earned 26.9%, or 63% before marketing.",
        competitors: [{ name: "Shaadi.com", note: "The main national rival in online matchmaking." }, { name: "Jeevansathi (Info Edge)", note: "Backed by the Naukri group; competes for the same users." }, { name: "Dating apps", note: "Compete for younger users; Love.com is the company's answer." }, { name: "Offline matchmakers and community networks", note: "Still the traditional route for many families." }],
        position: "**One of India's largest online matchmaking companies**, with more than 25,500 marriages from its platforms in a quarter. Management says it is very strong in some regional markets but gives no shares.",
        money: "Screener shows **₹154cr of net cash**; the company reports ₹342cr of cash and investments and a 36.4% return on capital employed (an annualised quarterly figure; Screener's FY26 figure is 17.4%). Users pay upfront, so operating cash has matched operating profit over five years (98%). Management says it will keep looking at acquisitions, investments and ways to reward shareholders. Promoters hold **58.4%**, up from 51.6% in September 2023 because buybacks cancelled other holders' shares (the latest, ₹58.5cr at ₹655, closed in February 2026); the managing director's shares are pledged, which he calls ‘a personal matter’. The previous CFO left in February 2025 and the post stayed vacant beyond SEBI's three-month limit, so the FY26 corporate-governance certificate was qualified; the next CFO was relieved on 17 August 2026.",
        watch: ["Q2 FY27 profit similar to or slightly above Q1's ₹19.1cr, which would be triple-digit growth on a year earlier, as guided.", "Revenue per subscription after the 6.7% quarterly fall.", "A permanent CFO, and sign-ups after Jodii is renamed."],
        charts: platformCharts['Matrimony.com'],
    },
    {
        company: 'Macfos',
        inShort: ["**Runs Robu.in, an online store for electronic components, robotics and drone parts**, selling about 1.07 lakh products to students, colleges, start-ups, defence and small manufacturers, and now designing its own products.", "**Good:** like-for-like sales up about 67% in FY26 and net profit up 44%; management says no other Indian player covers all its categories. **Bad:** growth slowed to 38% in Q1 FY27 at a lower margin, stock ties up cash (operating cash flow was negative in FY25 and FY26, and growth is funded with debt), and a customs notice of undisclosed size is pending.", "**Verdict: wait.** Its profit is not arriving as cash: operating cash was −₹22cr against ₹68cr of profit over FY22–FY26, and −₹8cr against ₹26cr of profit in FY26, as stock and debt grow. Growth is slowing too, and the price needs about {need:Macfos|22–23}% a year against my ~20%. It returns to follow when operating cash turns positive and covers most of its profit."],
        tagline: "An Indian online distributor of electronic, robotics, drone and 3D-printing components (Robu.in), building its own brands (SmartNix modules, Drone Plus) under 'Robu 2.0'.",
        revenue: '₹309cr (FY26, standalone)',
        products: [
            { name: "Robu 1.0 (distribution)", text: "About 1.07 lakh products (1,06,981 at June 2026 on the company's slide; the CMD's ‘1.5 lakh’ on the Q4 call does not match it), from chips, sensors and motors to Raspberry Pi, Arduino and NVIDIA boards, 3D-printing filament and test instruments, mostly shipped from its own stock. It added 10,000–15,000 products in FY26." },
            { name: "Robu 2.0 (own products)", text: "About 300 SmartNix modules (₹100 to ₹2,000 each), 5–10 drone products under Drone Plus, and SimplyBuy and Pro Range goods, aiming for at least 10 points more gross margin than resold goods. Still a small share of sales; SmartNix is also sold on Amazon." },
            { name: "Defence drones", text: "Low-volume supplies of its own drone products directly to the armed forces. Management says revenue is not yet material and it will know within two years whether it is 'in or out' of this business." },
            { name: "Education kits", text: "Kits for schools and colleges matched to syllabuses, built with partners such as Raspberry Pi and Arduino; management does not expect a big revenue impact." },
        ],
        revenueText: "The company no longer splits revenue by customer type or between Robu 1.0 and Robu 2.0, for competitive reasons; it says Robu 2.0 is still small. FY26 sales were about ₹312cr on the company's figure; leaving out a one-off bulk sale of about ₹71cr in Q1 FY25, **like-for-like sales grew 64–67%**. It served 2,67,126 orders in H2 FY26, averaging ₹6,776 each; order values jump in the March quarter when businesses and government buyers spend year-end budgets.",
        customers: ["**Engineering and production buyers**: start-ups and small manufacturers needing 500–2,000 units a month. Large-volume makers still buy direct from brands.", "**Education and research**: schools, engineering colleges, lab builders, and prototyping teams in start-ups and large companies.", "**Hobbyists** (a small share of revenue) and **government and defence buyers**. Management expects B2B's share of revenue to keep rising."],
        difficulty: { level: 'Medium', text: "Anyone can sell components online, but holding about 1 lakh products in stock with quick delivery takes years of supplier ties, data on what sells, and working capital. Local shops carry a few hundred items each, and global distributors such as Digi-Key focus on big manufacturers." },
        moat: "Range and availability: customers can buy most of a project's parts in one order, and start-ups it served early buy more as they grow. The weakness is thin distribution margins, which management expects to come under pressure as competition grows; its own brands are meant to cushion that.",
        salesDrivers: ["**India's electronics, drone, AI and 3D-printing boom**: management puts the Indian market at about ₹10,000cr by 2030 (with many 'ifs and buts') and expects demand to stay strong for at least 2–3 years.", "**Wider range**: more products per order lift the average order value.", "**Customers growing up**: start-ups become mid-sized buyers, and B2B's share of revenue is rising.", "**Own products and defence**: Robu 2.0 lifts margins; a sizeable defence drone order would be a step change but is not yet in sight.", "**Warehouse capacity**: it aims to keep capacity 30–40% above average volume; a larger site is being assessed but not yet planned."],
        inputs: "**Goods bought for resale**: components, boards, modules and drone parts, much of them from overseas suppliers. Materials (goods bought, including changes in stock) were 77% of sales in FY26; staff were only 4%.",
        costEffect: "**Partly passed on.** It resells at market prices and can raise them when suppliers do, but must watch competitors, international prices and supplier agreements; memory-chip shortages have made boards and drone controllers dearer. It chose last year to hold its gross margin (about 24%) rather than cut prices for growth. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (12% to 4%). **What happened:** India's circuit-board wholesale price index was flat (100 in Q1 FY24, 98 in Q1 FY27) and the margin moved from 9.7% to 10.6%, swinging between 8% and 15% with order mix and the March-quarter budget rush. For whole years the operating margin was 16% in FY22 and 10–14% since (12% in FY26).",
        competitors: [{ name: "Digi-Key, Mouser, Arrow, Farnell", note: "Global distributors with millions of products (Digi-Key about 30 lakh) serving large manufacturers; not focused on India's smaller buyers." }, { name: "Local electronics markets", note: "Unorganised dealers holding a few hundred products each, often in one niche such as motors." }, { name: "Niche online stores", note: "Two or three rivals in segments such as 3D printing and drones." }, { name: "Drone makers", note: "Many companies are entering defence drones, where Robu 2.0 is a newcomer." }],
        position: "**India's broadest online store for electronics and maker components**; management says no other Indian player covers all its segments. It gives no market share because the market is largely unorganised.",
        money: "Screener shows **₹34cr of net debt**, which funds stock; management is comfortable borrowing because debt turns into stock and then sales, and it has used the same bank for five years. Operating cash flow was negative in FY25 and FY26 and, over five years, was minus 24% of operating profit; stock days rose from 112 to 122 between FY22 and FY26, and slow-moving stock in components has risen. Capex is small (people and IT). It is listed on the BSE SME platform but reports every quarter and wants to move to the main board, with no date set. Promoters hold **69.1%**, down from 73.7% in September 2023. The FY26 annual report discloses a customs notice (23 April 2026) alleging short-paid duty on imports; the company disputes it, has made no provision and does not give the amount. Growth slowed to 38% in Q1 FY27, with the operating margin at 10.6%.",
        watch: ["Operating cash flow turning positive as stock days come down.", "Robu 2.0's share of sales and its gross margin.", "Any defence drone order, and a main-board move."],
        charts: platformCharts['Macfos'],
    },
    {
        company: 'TBO Tek',
        inShort: ["**A business-to-business travel marketplace**: travel agents around the world use TBO's platform to book hotels, flights and other travel for their customers, and TBO earns a margin on each booking. It bought Classic Vacations, a US luxury travel company, in late 2025.", "**Good:** a platform with mostly fixed costs, so profit can grow faster than bookings, and ₹785cr of net cash. **Bad:** reported revenue growth (81% in Q1 FY27) comes mostly from the acquisition and a weaker rupee; organic bookings grew 22% and organic gross profit 16%, the Middle East, a big high-margin market, is flat because of the war, and a FEMA case carries a possible penalty of up to three times the ₹71.2cr of breaches the company itself found.", "**Verdict: wait.** The price needs more growth than I expect while the Middle East stays disrupted."],
        tagline: "A global business-to-business travel distribution platform linking hotels, airlines and other suppliers with travel agents, now including Classic Vacations in North America.",
        revenue: '₹2,677cr (FY26, consolidated)',
        products: [
            { name: "Hotels and packages", text: "Hotel rooms and holiday components sold to agents worldwide; the main profit engine. After the Classic Vacations deal, North America is almost a quarter of hotel bookings by value." },
            { name: "Flights", text: "Air tickets for agents, earning a gross profit of about 1% of ticket value; mainly a way to win and keep agents. Air bookings grew 17% in Q1 FY27 despite airline disruption." },
            { name: "Classic Vacations", text: "A US company selling luxury trips through travel advisers, earning about 11% gross profit on bookings. Its profit peaks in April–June (summer check-ins); management agrees with an operating profit of about 2.5% of bookings for the full year." },
            { name: "Retail and API channels", text: "About half of bookings come from small agents using TBO's website and half from larger travel companies plugged in through APIs (software links)." },
        ],
        revenueText: "The company steers investors to gross profit rather than revenue, because a flight earns about 1% of booking value and Classic Vacations about 11%. It does not give a full revenue split. In Q1 FY27 **bookings were roughly half retail agents and half API customers**; Europe hotels grew 37% (24% in constant currency), the Middle East 1% in constant currency, and North America is almost a quarter of hotel bookings. **Filed revenue rose 81%** (₹926cr against ₹511cr a year earlier), **but organic bookings grew 22% and organic gross profit 16%**; the rest came from Classic Vacations and a weaker rupee, which added 11 points to hotel bookings in rupees.",
        mixes: [
            { caption: "Bookings by channel, Q1 FY27 (company call, approximate)", parts: [{ label: 'Retail agents', share: 50 }, { label: 'API customers', share: 50 }] },
        ],
        customers: ["**Small travel agents** in India, the Middle East, Europe, Asia-Pacific and other markets, booking through TBO's website.", "**Large travel companies and online agents** connected by API.", "**Luxury travel advisers in North America** through Classic Vacations; adviser networks such as Virtuoso each route more than $25 billion of bookings a year."],
        difficulty: { level: 'High', text: "A two-sided network is hard to build: TBO needs thousands of hotel and airline contracts to attract agents, and many agents to win good rates from suppliers. Management says it took 5–6 years to break through in Europe. The risk is suppliers selling direct or rivals with deeper pockets." },
        moat: "Scale on both sides, sales teams in many countries and a spread of source markets, so no single region dominates. The weakness is thin margins on flights and exposure to shocks such as the Middle East conflict, where TBO cut its margins to hold on to volume.",
        salesDrivers: ["**Global travel demand**: the Middle East conflict disrupted East–West travel, pushed up airfares and left the Middle East flat; management treats a recovery there as upside, not a base case.", "**Sales teams**: new key account managers in Europe and Asia-Pacific take 4–6 quarters to reach full growth; management says it is taking share in markets that are barely growing.", "**Classic Vacations integration**: TBO already supplies about ₹65cr a quarter of hotels to Classic; merging the platforms by the end of 2026 should let Classic's supply be sold through TBO too.", "**Currency**: a weaker rupee lifts reported growth (11 points on hotel bookings in Q1 FY27).", "**Operating leverage**: organic overheads grew only 4% in constant currency; 27% of gross profit became adjusted operating profit (27.5% for the organic business, from 23.5% in Q4), and management expects this to rise."],
        inputs: "**No materials.** Its costs are staff (22% of sales in FY26) and other costs (63%), which the filing does not break down; they include payment-gateway fees, technology hosting (cut 14% in Q1 FY27) and sales costs. Materials were nil in FY26.",
        costEffect: "**Mostly insulated from jet fuel.** TBO buys no fuel. Dearer jet fuel reaches it only through airfares, which put some travellers off. Its margin depends on booking growth over a mostly fixed cost base, the mix of flights (about 1% gross profit) against hotels and Classic Vacations (about 11%), and price cuts in tough markets. **What happened:** India's jet-fuel wholesale price index more than doubled (100 to 212) from Q1 FY24 to Q1 FY27, nearly all of it in the latest quarter, while the margin fell from 19.4% to 14.9%. Fuel was not the main cause: TBO spent heavily on sales teams in new markets, Classic Vacations changed the mix, and the Middle East war hit a high-margin market. The margin dipped to 12.8–12.9% in Q3–Q4 FY26 and recovered to 14.9% in Q1 FY27, Classic's strongest season.",
        competitors: [{ name: "Hotelbeds and WebBeds", note: "Large global hotel wholesalers; management cites their mature margins as a long-run reference point." }, { name: "Regional B2B aggregators", note: "Smaller, often single-region players; management expects the crisis to weaken some of them." }, { name: "Hotels and airlines selling direct", note: "A standing risk to any middleman in travel." }],
        position: "**A leading Indian-born B2B travel marketplace with a global spread**, where no single country or region dominates bookings. It says it has gained share in Europe and Asia-Pacific.",
        money: "Screener shows **₹785cr of net cash**. The company reported more than ₹1,980cr of cash in bank, against a $70m loan linked to Classic Vacations and a €6m working-capital loan at its Jumbo unit. Operating cash has been 81% of operating profit over five years, but was minus ₹21cr in FY26; working capital swings with the season, as supplier incentives build up through the year and are settled in the first half. Promoters hold **44.4%**, unchanged since June 2024. The auditor's FY26 report highlights a foreign-exchange (FEMA) case: the Enforcement Directorate alleges ₹49.4cr of foreign agents' payments were accepted in rupees from third parties, the company itself identified ₹71.2cr of breaches, the RBI twice refused to approve them after the fact, and the maximum penalty is three times the amount; the ruling is pending, and CARE (A-, stable) lists an adverse outcome as a downgrade trigger.",
        watch: ["Middle East travel recovering, which management treats as upside.", "Classic Vacations platform merger by end-2026 and North America growth.", "The share of gross profit turned into operating profit rising above 27%, and the FEMA ruling."],
        charts: platformCharts['TBO Tek'],
    },
    {
        company: 'Swiggy',
        inShort: ["**One of India's two big food-delivery apps, plus Instamart**, which delivers groceries and household goods from dark stores (small local warehouses) within minutes.", "**Good:** ₹7,526cr of net cash, Instamart close to break-even on each order (contribution margin minus 0.2%) and record customer retention. **Bad:** still loss-making (₹4,154cr net loss in FY26, ₹791cr in Q1 FY27 and ₹922cr in Q2), it will let Instamart slip back to a small loss per order to grow faster against 7–8 rivals, management reversed two May promises and lost the Instamart chief within 90 days, and its auditor flagged a fraud report at a subsidiary.", "**Verdict: wait.** Management targets break-even on cash for the whole company within two quarters; I want to see it happen first."],
        tagline: "A consumer-convenience platform: restaurant food delivery, Instamart quick commerce, and new experiments such as a separate value-priced food app.",
        revenue: '₹23,053cr (FY26, consolidated)',
        products: [
            { name: "Food delivery", text: "Restaurant meals delivered by Swiggy's riders; restaurants pay commission and customers pay delivery and platform fees. Management says its margin is about 3% and heading for a 5% target." },
            { name: "Instamart (quick commerce)", text: "About 20,000 grocery and everyday products delivered in minutes from dark stores. Contribution margin (profit per order before fixed costs) was minus 0.2% in Q1 FY27, about ₹30 per order better than five quarters earlier; guidance is 0 to minus 1% while it opens more stores." },
            { name: "Brands and advertising", text: "Brand partnerships ('Switch to Better'), its own private brands, and advertising sold to consumer brands. Better brand margins, more ads and restored user fees lifted Instamart's take rate." },
            { name: "Platform innovations", text: "New apps, including a separate value-led food platform where two in three users are new to Swiggy. Losses here are mostly marketing to win users." },
        ],
        revenueText: "The shareholder letter gives segment figures but no clean revenue split for the platform businesses, so no chart is shown. Revenue grew 51% in FY26 to ₹23,053cr (Screener). **Nearly half of reported revenue is low-margin wholesale**: the supply-chain and distribution arm, which sells goods to the sellers on Instamart, booked ₹3,195cr of Q1 FY27's ₹6,812cr (and lost ₹48cr), which is why materials are 44% of sales and why revenue grows faster than the platform. **Instamart's take rate** (the share of order value it keeps) rose as brands paid higher margins, advertising grew and user fees were brought back.",
        customers: ["**Urban consumers**: one-month retention reached 61%, up from 55% a year earlier and the best so far. Growth is to come from more transacting users ordering more often, not bigger baskets.", "**Restaurants**, paying commission (lower on the new value app so they can offer everyday low prices).", "**Consumer brands** such as ITC's Aashirvaad and D2C start-ups, paying margins and advertising to reach Instamart shoppers, often with products sold only there."],
        difficulty: { level: 'Medium', text: "Money can buy dark stores and riders, and 7–8 companies, some of them unlisted and spending heavily, are fighting in quick commerce. What is harder to copy is density (enough orders in each area to keep riders and stores busy), a trusted brand and data on what each neighbourhood buys. In food delivery, scale on both sides is a real barrier, though new value-priced rivals are appearing." },
        moat: "Habit and convenience: frequent users, and restaurants and brands that need its customers. The weakness is low switching costs; if a rival offers free delivery or deep discounts, customers move, as Swiggy's own pruning of discount-seeking users showed.",
        salesDrivers: ["**Quick-commerce growth**: order value in the latest four weeks grew 10% against 1% in the four before; management is cautiously hoping for at least double-digit growth on the previous quarter.", "**New dark stores**: some stores are hitting 2,500–3,000 orders a day, so it will open more stores this quarter than in the previous four combined, all in existing cities.", "**Monetisation**: Instamart needs about ₹30 more per order to break even at the operating level (₹10 from brand margins and mix, ₹10 from advertising, ₹5 from denser stores and automation, ₹5 from operating leverage), at about ₹60,000cr of annualised order value, roughly two and a half times today's.", "**Competition**: guidance assumes no change in competitive intensity; value-priced food apps and quick-commerce rivals keep pressure on fees.", "**Different products**: exclusive items and its own brands under 'Switch to Better', led by Nandita Sinha, who replaced Amitesh Jha as Instamart CEO in August 2026."],
        inputs: "**Goods bought for resale, and delivery.** Materials, mainly goods Instamart buys and resells, were 44% of sales in FY26. Other costs, chiefly delivery riders, dark-store running costs, marketing and discounts, were 52%; staff 12%; and the line Screener labels power and factory costs 6%.",
        costEffect: "**Mostly insulated from commodity prices, exposed to delivery and store costs.** Grocery price rises are passed to shoppers on the shelf, so what moves the margin is rider pay, dark-store picking and packing wages (hit by state minimum-wage rises), discounts and marketing, and the take rate from brands and ads. **Rule of thumb:** a 10% rise in material costs not passed on would widen the operating loss by about 4 points (minus 14% to minus 18%). **What happened:** the operating margin improved from minus 64% in FY22 to minus 52% in FY23, minus 20% in FY24, minus 18% in FY25 and minus 14% in FY26 (Screener), and from minus 19% in Q1 FY26 to minus 10% in Q1 FY27, as Instamart cut discount-driven orders, restored fees and earned more from brands and ads.",
        competitors: [{ name: "Eternal (Zomato and Blinkit)", note: "The larger rival in both food delivery and quick commerce." }, { name: "Zepto", note: "Unlisted quick-commerce rival that has spent heavily on discounts." }, { name: "Flipkart Minutes, Amazon Now, BigBasket", note: "Big-group rivals expanding dark-store networks." }, { name: "Value-priced food apps", note: "New low- or zero-commission delivery models; Swiggy is answering with its own value app." }],
        position: "**One of India's two big food-delivery apps and one of 7–8 quick-commerce players.** For the past four quarters it chose profit per order over growth in quick commerce; it now plans to grow faster.",
        money: "Screener shows **₹7,526cr of net cash**; the company reported ₹14,367cr of cash at 30 June 2026 and has no debt instrument (Screener's borrowings are mostly leases). Operating cash flow was minus ₹2,898cr in FY26. A ₹327cr GST notice on delivery charges is stayed by the Karnataka High Court. Management said on 30 July 2026 that it expects to break even on cash at the overall company level over the next two quarters, with food-delivery profits and treasury income covering Instamart; this excludes spending on new experiments. It says it does not capitalise staff, cloud or new-store costs. Swiggy has no promoter group; the public holds about 54%, domestic institutions 27% and foreign investors 14% (Screener, June 2026).",
        watch: ["Company-level cash break-even within two quarters of July 2026, as targeted.", "Instamart contribution margin staying within 0 to minus 1% while order value grows double digits a quarter (13.4% in Q2).", "Whether Toing, its cheap-food app, earns its keep within one or two quarters, as management says it will decide.", "Rivals' discounting and funding."],
        charts: platformCharts['Swiggy'],
    },
    {
        company: 'Urban Company',
        inShort: ["**India's leading app for home services**: trained professionals for salon at home, cleaning, AC and appliance repair, plumbing and carpentry, plus Native water purifiers and smart locks, and InstaHelp, an on-demand house-help service.", "**Good:** core India services grew bookings 26% in Q2 FY27 at 3.5% of bookings, up from 2.4% a year earlier, international and Native are improving, and it holds ₹1,901cr of cash and treasury investments. **Bad:** the group is loss-making (filed loss of ₹182cr in Q2 FY27) because InstaHelp lost ₹174cr in the quarter, management expects that loss to stay high for a few more quarters and InstaHelp to break even only by FY31, and it plans to sell up to ₹2,500cr of new shares.", "**Verdict: wait.** Management targets group adjusted operating break-even by Q3 FY28; I want to see InstaHelp losses shrink first."],
        tagline: "A full-stack home services marketplace in India, the UAE, Singapore and Saudi Arabia (joint venture), with its own home products (Native) and instant house help (InstaHelp).",
        revenue: '₹1,556cr (FY26, consolidated)',
        products: [
            { name: "India consumer services", text: "More than 50 service categories (beauty, cleaning, repairs and more) done by trained partners, now often within 30–60 minutes (UC Instant). Bookings grew 26% to ₹963cr in Q2 FY27 at a 3.5% adjusted operating margin, up from 2.4% a year earlier (Q1, the seasonal high, was 6.9%)." },
            { name: "InstaHelp", text: "House help booked by the hour. 6.2 million orders in Q2 FY27, up 63% on Q1, with a loss of ₹279 per order (₹346 in Q1), but the average order fell to ₹114 from ₹138 on competition and the quarter's loss rose to ₹174cr. Management expects the loss to stay high for a few more quarters, only a low single-digit margin in the long run and break-even by FY31." },
            { name: "International", text: "UAE and Singapore (both profitable) and a Saudi joint venture it expects to turn profitable in coming quarters. Bookings rose 66% to ₹267cr in Q2 FY27 (52% without currency gains) at a 2.0% margin; the Saudi venture's bookings rose 153% to ₹93cr with a ₹16cr loss. No new countries are planned." },
            { name: "Native", text: "Water purifiers that need no servicing for 2–3 years, and smart door locks. Bookings rose 35% to ₹132cr in Q2 FY27 and the loss narrowed to 6.8% of bookings (this year's festive sales fall in Q3); about 75% of early buyers renew their filters through Urban Company." },
        ],
        revenueText: "Urban Company reports **bookings (net transaction value, NTV)**, what customers pay, as well as revenue, which is mainly its take on services plus Native product sales. In Q2 FY27 NTV was ₹1,432cr, up 39%, and revenue ₹537cr, up 41%; orders rose 103% to 15.1 million. **India services were about 67% of NTV**, international 19%, Native 9% and InstaHelp 5% (our calculation from the shareholders' letter).",
        mixes: [
            { caption: "Bookings (NTV) by business, Q2 FY27 (shareholders' letter)", parts: [{ label: 'India consumer services', share: 67 }, { label: 'International', share: 19 }, { label: 'Native', share: 9 }, { label: 'InstaHelp', share: 5 }], note: "₹963cr, ₹267cr, ₹132cr and ₹71cr of ₹1,432cr." },
        ],
        customers: ["**Better-off urban households**: nearly 10 million a year (September 2026), roughly the top 8 million homes in India; 1.2 million new customers joined in Q1 FY27, the first time above a million in a quarter.", "**Service professionals** (many of them women in beauty) who earn through the app; it trains them and is helping most beauty partners get two-wheelers.", "**Households in the UAE, Singapore and Saudi Arabia**, where it is growing fast and profitably."],
        difficulty: { level: 'High', text: "Any app can list plumbers; keeping quality consistent across 50-plus categories and hundreds of thousands of neighbourhoods needs training, standard procedures, tools and enough local demand to keep partners busy and well paid. In house help the barrier is much lower, and three players are subsidising orders to win share." },
        moat: "Trust and consistent quality: better-paid, better-trained partners stay longer, which improves service and speed and brings in more customers; India services grew fast while marketing spend stayed flat at about ₹25cr a quarter. The weakness is InstaHelp, a low-skill service where customers are price-sensitive and offline help costs ₹80–120 an hour.",
        salesDrivers: ["**Density and UC Instant**: more jobs per area make 30–60 minute service possible, lifting usage; India services growth has accelerated for four straight quarters to 29% (partly helped by a weak, rain-hit base).", "**Smaller cities**: tier 2 markets are growing even faster than big cities.", "**Beauty**: retraining partners, two-wheelers and new treatments (such as Japanese facials) revived growth.", "**InstaHelp pricing**: management says the service needs about ₹300 per order (₹200 an hour) to break even and sizes the market in the top 15 cities at ₹7,000–12,000cr of bookings.", "**AI**: most customer and partner support, onboarding, quality audits and 90–95% of new code are now AI-led, cutting costs."],
        inputs: "**People, subsidies and marketing, not materials.** Staff were 29% of sales in FY26, and other costs, which the filing does not break down but which include InstaHelp's order subsidies, marketing and technology, 61%. Materials (goods it sells, such as Native devices) were 21%, and the line Screener labels power and factory costs 6%.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on spending on InstaHelp, partner training and pay, marketing and technology, and on its take rate. **What happened:** the operating margin improved from minus 126% in FY22 to minus 57% in FY23, minus 18% in FY24 and minus 3.5% in FY25 (Screener), then fell back to minus 16% in FY26 as InstaHelp losses grew; by quarter it went from minus 3.6% in Q1 FY26 to minus 28% in Q4 FY26, minus 18% in Q1 FY27 and minus 36% in Q2 FY27. Leaving out InstaHelp, the rest of the group made an adjusted operating profit of ₹30cr in Q2 FY27 (₹67cr in the seasonally strong Q1).",
        competitors: [{ name: "Snabbit and Pronto", note: "Privately funded rivals in instant house help; management says all three players are subsidising orders." }, { name: "Local salons, freelancers and repairmen", note: "The main alternative in core services: cheaper but less consistent." }, { name: "Offline domestic help", note: "₹80–120 an hour for full-month help, which InstaHelp cannot beat on price." }, { name: "Water-purifier and smart-lock brands", note: "Established appliance makers competing with Native." }],
        position: "**The leader in organised home services in India**, with nearly 10 million customers a year. In instant house help it is one of three players and says it intends to be the eventual winner.",
        money: "Screener shows **₹1,658cr of net cash**; the company reports ₹1,901cr of cash and treasury investments at 30 September 2026, down ₹118cr in the quarter, and free cash flow of minus ₹146cr in Q2 FY27. Operating cash flow was minus ₹99cr in FY26. On 16 October 2026 the board approved raising up to ₹2,500cr of new shares (shareholders still to vote) to fund growth, InstaHelp and acquisitions. Its guidance, repeated then, is group adjusted operating break-even by Q3 FY28 and ₹1,000cr of adjusted operating profit by FY31. GST contingent liabilities doubled to ₹116cr in FY26, and ₹136cr of deferred-tax assets remain after ₹60cr was reversed in FY26 and ₹7cr in Q2 FY27. Promoters hold **19.0%**, down from 20.4% in September 2025. Accel cut its stake from 6.99% to 4.84% in July–September, partly in an August block deal with Vy Capital and Bessemer, while SBI Mutual Fund rose to 9.13%.",
        watch: ["InstaHelp's quarterly loss (₹174cr in Q2 FY27) starting to fall, and its average order (₹114) rising.", "India services margin moving towards the 9–10% target (3.5% in Q2 FY27, 2.4% a year earlier).", "The price and dilution of the up-to-₹2,500cr share sale.", "Progress to group break-even by Q3 FY28."],
        charts: platformCharts['Urban Company'],
    },
    {
        company: 'Shiprocket',
        inShort: ["**Shipping, cash-on-delivery collection and checkout for about 2.24 lakh small online sellers** who sell through their own websites, Instagram and WhatsApp rather than Amazon or Flipkart; it routes their orders across 42 couriers and adds warehousing, quick-commerce supply, ads and exports. Listed in August 2026.", "**Good:** revenue up 34% in Q1 FY27, the Core shipping business profitable every year since FY22 (12.8% on the company's measure), positive operating cash in FY26 and net cash after the IPO. **Bad:** still an ₹11cr operating loss after ₹28.5cr a quarter of share-based pay, the newer businesses lost ₹43.8cr in Q1 with no break-even date, courier rates are cutting Core's revenue per shipment, and about 77% of shares unlock around mid-February 2027.", "**Verdict: wait.** A real platform, but I want the newer businesses' losses shrinking in rupees and a filed operating profit before paying for it."],
        tagline: "A Delhi-based software and logistics platform for direct-to-consumer sellers: shipping over 42 couriers, cash-on-delivery, one-click checkout, warehousing, quick-commerce supply, ads and cross-border shipping.",
        revenue: '₹2,024cr (FY26, consolidated)',
        products: [
            { name: 'Core: domestic shipping', text: "Sellers book shipments through one dashboard and Shiprocket picks the courier on price and delivery time, with add-ons such as early cash-on-delivery payouts. Revenue was ₹411.7cr in Q1 FY27 (+22%) and it earned 12.8% on the company's adjusted measure; it has been profitable every year since FY22." },
            { name: 'Omnichannel: warehousing and quick-commerce supply', text: "13 leased fulfilment centres in 10 cities (7.63 lakh sq ft), cargo and stocking of sellers' goods in quick-commerce dark stores. The fastest-growing newer line: ₹303cr in FY26 (+76%) and +92% in Q1 FY27." },
            { name: 'Checkout and ads (Fastrr)', text: "One-click checkout that auto-fills 93% of addresses from its data on 15.5 crore shoppers, plus ad and marketing tools for sellers. ₹84cr in FY26 (+213%) and +193% in Q1 FY27, from a small base." },
            { name: 'Cross-border shipping', text: "Exports for Indian sellers to 146 countries (5,884 sellers in FY26). ₹139cr in FY26 (+14%), but down 2.3% in Q1 FY27 on global volatility." },
        ],
        revenueText: "**Core shipping brought in 73% of FY26 revenue (₹1,485cr)**; the newer businesses, which the company calls Emerging, the rest: omnichannel ₹303cr, cross-border ₹139cr and checkout and ads ₹84cr. In Q1 FY27 Emerging was **30% of revenue (₹180.4cr, +70%)** against 24% a year earlier, but it lost 24.3% of its revenue while Core earned 12.8%. It charges per shipment or per checkout, not a subscription: revenue averaged about ₹96–100 per transaction. Sellers existing a year earlier spent 7.8% more in FY26 (net revenue retention 107.8%).",
        mixes: [
            { caption: 'Revenue by business, FY26 (annual report)', parts: [{ label: 'Core shipping', share: 74 }, { label: 'Omnichannel', share: 15 }, { label: 'Cross-border', share: 7 }, { label: 'Checkout and ads', share: 4 }], note: 'Shares of the four businesses’ combined revenue.' },
            { caption: 'Revenue by segment, Q1 FY27 (company presentation)', parts: [{ label: 'Core', share: 70 }, { label: 'Emerging', share: 30 }] },
        ],
        customers: ["**Small and mid-sized online sellers**, mostly in Tier 2 and 3 cities: 2.24 lakh were active in the year to June 2026. About 10,170 'power' sellers ship 100-plus orders a month; their number was flat on the year, but each brought 25% more revenue (₹18.7 lakh).", "**Shoppers**, 15.5 crore of them served so far, who meet Shiprocket at checkout and tracking; 59% come back.", "**Couriers** such as Delhivery are its suppliers: the top five carry 84.5% of its shipments, with no exclusive contracts."],
        difficulty: { level: 'Medium', text: "Integrating 42 couriers, 250-plus partners, payment collection and a checkout used by millions of shoppers took a decade and over 73 crore shipments of data. But the service can be copied by couriers themselves and by other software firms, and large sellers can deal with couriers directly." },
        moat: "Data and convenience: one dashboard picks the best courier, collects cash-on-delivery money and fills in checkout addresses, and management says that layer matters more as sellers grow. The weakness is price: courier rates set what it can charge, Core revenue per shipment fell about 7% in Q1, and the number of big sellers is flat.",
        salesDrivers: ["**Direct-to-consumer selling outside the marketplaces**: Redseer puts online at 8% of Indian retail now and 14–15% by 2030, and the company expects e-commerce to more than double to $180–200bn by 2030.", "**Selling more to each seller**: only 8.8% of Core sellers use an Emerging product, up from 7.3%; the newer businesses brought 12,091 new sellers in Q1 against 5,893 a year earlier.", "**Courier rates**: falling rates cut Core revenue per shipment, but management says it prefers adding shipments to squeezing margin, and aims to hold the contribution margin 'around' 19%.", "**Seasons**: Q3 is its weakest quarter because festive selling moves to Amazon and Flipkart.", "**IPO spending**: ₹159.8cr on technology and ₹205.8cr on marketing over FY27–FY29, about two-thirds for the newer businesses, plus money for acquisitions not yet named."],
        inputs: "**No materials.** Courier freight is the dominant cost (the line Screener labels power and factory costs, 75% of FY26 sales); staff are 19% and other costs such as technology and marketing 9%. Materials were about 1% in FY26. Share-based pay of ₹112cr a year sits inside staff cost.",
        costEffect: "**Mostly insulated from commodity prices; courier rates and share-based pay drive its costs.** It passes courier charges on to sellers, keeping a spread: the contribution margin rose from 18.2% to 19.4% in a year as mix shifted to higher-margin products, but costs between that line and adjusted EBITDA held at 17.9% of revenue. **What happened:** the operating margin (Screener) went from −13% in FY22 and −26% in FY23 to −3.3% in FY26, and from −4.1% in Q1 FY26 to −1.9% in Q1 FY27. The company's adjusted EBITDA, before share-based pay and after lease rent, was +1.5% in Q1 FY27.",
        competitors: [{ name: 'Delhivery and other couriers', note: 'Its suppliers, but also courting direct-to-consumer sellers themselves.' }, { name: 'Unicommerce', note: 'Listed Indian e-commerce software firm named as a peer in Shiprocket\'s prospectus.' }, { name: 'Shopify and Global-e', note: 'Global checkout and cross-border platforms named as peers by Redseer.' }],
        position: "**A leading shipping and checkout platform for India's direct-to-consumer sellers**: ₹34,662cr of goods and 21.6 crore transactions in the year to June 2026, over 42 couriers.",
        money: "Screener shows **₹141cr of net debt** at March 2026, but that understates its cash: the ₹242cr of borrowing is overdraft backed by ₹265cr of fixed deposits, ₹443cr of longer deposits are not counted as cash, and the August IPO raised ₹885.5cr of fresh money by selling 9.13 crore new shares at ₹97 (12.5% of the enlarged count, 0.59 times its last private round; on 30 September the shares traded about 24% above the issue price). My estimate of net cash after the IPO is roughly ₹1,100–1,200cr; ₹210cr repays bank borrowing in FY27. Capex was ₹18cr in FY26. Goodwill is ₹915cr, 37% of assets. Share-based pay was ₹112cr in FY26 and another 5.2% of shares sits in its employee trust. No dividend. **There is no promoter group**: the two founders hold about 3.4% each; Bertelsmann (21.3%), Tribe, Eternal and Temasek are the largest holders.",
        watch: ["The newer businesses' rupee loss falling (₹43.8cr in Q1).", "Contribution margin holding near 19% and a filed operating profit.", "Share sales around the mid-February 2027 unlock."],
        charts: platformCharts['Shiprocket'],
    },
    {
        company: 'Pine Labs',
        inShort: ["**Payments technology for shops, banks and brands**: card and UPI machines in stores, online checkout, EMI (pay-in-instalments) offers at the till, and software that runs gift, prepaid and credit cards, in India and across Asia and the Middle East.", "**Good:** revenue up about 20%, ₹2,449cr of net cash of its own (March 2026) and a first full-year net profit (₹113cr in FY26). **Watch:** profit is still very small relative to its value, and upfront spending on 500 new salespeople, cloud and network held Q1 FY27 adjusted operating profit to ₹126cr, below the ₹140cr management wanted (Q2 revenue then grew 24% and adjusted operating profit 27%, but the H1 adjusted margin was about 18% against the 21% full-year aim, which the CEO kept on 29 Oct 2026); FY26 cash flow leaned on early-settlement inflows, a ₹214cr GST demand is stayed in court, and its auditor found debtor figures sent to banks that differed from its books.", "**Verdict: wait.** Management guides about 21–23% revenue growth for FY27, but the price needs far more profit than it earns today."],
        tagline: "An Indian payments and commerce technology company: in-store card and UPI terminals, online payments, checkout EMI and offers, bill payments (Setu), and issuing software for gift, prepaid and credit cards.",
        revenue: '₹2,711cr (FY26, consolidated)',
        products: [
            { name: "Digital infrastructure and transactions", text: "In-store payment terminals (about 70% of their transactions are now UPI, averaging over ₹1,400), an online payment gateway (IRCTC, Zepto, Croma, Reliance Digital, Lenskart) and Setu bill payments. Terminal revenue grows 12–15% a year; online and bill payments 50% or more." },
            { name: "Affordability and flow-based services", text: "EMI and offers at the point of sale, paid for by merchants, brands and consumers (revenue up about 20%), plus Signal IQ lending data (six banks and NBFCs signed), credit on UPI (live with J&K Bank) and Growth Hub store insights." },
            { name: "Issuing and acquiring platform", text: "Software that runs gift cards, forex and general prepaid cards, and credit-card processing in about 20 countries (about ₹100cr a year). It also distributes gift cards through Zepto, Blinkit, Amazon and CRED." },
            { name: "International", text: "The largest instalment-payment provider in Malaysia (8–9 banks), now in Singapore and soon Dubai; software and processing for GCash's 30,000 new terminals in the Philippines, a large US restaurant chain and British Airways' gift cards." },
        ],
        revenueText: "The call does not give the rupee split between its two segments or between India and abroad, so no mix is shown. What it did say: **India digital-infrastructure revenue grew 20–25%**, the issuing platform grew 24% in India and over 40% abroad. It earns a percentage of each card payment (MDR), per-transaction fees on bill payments, fees from brands and banks on EMI deals, and software fees. **About 25–30% of new terminals are now sold to merchants upfront**, which adds low-margin device revenue but keeps terminals off its books.",
        customers: ["**Large and mid-sized retailers and online merchants**, including oil companies' fuel pumps: 90,000–100,000 of a planned 125,000–130,000 terminals are installed.", "**Banks, NBFCs and consumer brands** that fund EMI offers and use its data and card-issuing software.", "**Brands and companies** buying gift cards and, from October 2026, meal and expense cards; payment companies abroad such as GCash."],
        difficulty: { level: 'High', text: "Payments need regulatory approvals, bank tie-ups, links into merchants' billing and ordering software, and a reliable network of terminals; an EMI business needs contracts with many banks and brands. Simple QR codes are easy to copy, but complex enterprise and EMI integrations are not." },
        moat: "Once a merchant has bought its terminal and wired payments into its workflow, it rarely switches, and the EMI network ties banks, brands and merchants together. The weakness is that UPI payments earn little, so income depends on extra services, and online payments are crowded.",
        salesDrivers: ["**Premium in-store payments**: merchants want screen-based devices; credit-card transactions are growing 10–15%, and management expects Apple Pay to launch in India before the end of 2026.", "**Online payments**: consolidation among online payment firms is sending merchants to new partners; the 500 new salespeople should be fully productive in 6–12 months.", "**Fuel-pump contract**: about 30–35% of its potential revenue is still to come in Q2–Q3 FY27.", "**Electronics spending**, which drives EMI: affordability revenue grew about 20% despite higher electronics prices.", "**International wins**: new deals in Australia, the US, Singapore and Dubai; newer units there should break even in 1–2 years."],
        inputs: "**Mostly people and technology.** Staff were 39% of sales in FY26, direct costs such as network and processing (the line Screener labels power and factory costs) 12%, and other costs, including cloud and technology, 22%. Materials, mainly payment terminals sold to merchants, were 14%.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on staff, cloud and network costs and on mix: processing earns almost 100% contribution, gift-card distribution 30–40% and terminal sales little. In Q1 FY27 cloud costs rose ₹10–12cr and network costs ₹10cr, partly one-off. **What happened:** the operating margin went from 12% in FY22 to about zero in FY23 and minus 1% in FY24, then recovered to 10% in FY25 and 13% in FY26 (Screener) as it stopped carrying new terminals on its books and grew higher-margin services. By quarter it rose from 7% in Q1 FY26 to 18% in Q3 FY26 and eased to 13% in Q1 FY27 after the upfront spending. Management says the full-year margin will not fall below last year's.",
        competitors: [{ name: "Paytm and PhonePe", note: "Big consumer-payment apps that also sell card machines and soundboxes to merchants." }, { name: "Razorpay, PayU and Cashfree", note: "Leading online payment gateways." }, { name: "Banks' own terminals and EMI programmes", note: "Banks can offer acceptance and instalments directly." }, { name: "Stripe and Adyen", note: "Global players that could push harder into Asia." }],
        position: "**One of India's largest providers of in-store payment terminals and point-of-sale EMI**, and, by its own account, the largest instalment-payment provider in Malaysia.",
        money: "Screener's figures imply about ₹7,800cr of net cash, but about ₹5,570cr of that is merchants' and card-holders' money held in escrow; the company's June investor-day deck shows **₹2,449cr of net cash** at March 2026 (₹2,732cr of cash, ₹283cr of borrowings). Operating cash flow turned positive in FY25 and reached ₹395cr in FY26, helped by about ₹202cr of early-settlement (bill-discounting) inflows in Q4; over five years it was roughly nil. A ₹214cr GST demand over gift-card input credits is stayed by the Karnataka High Court, and the auditor noted that debtor figures sent to banks differed from the books. Working capital (management's measure) was 16% in Q1 FY27 against a full-year aim of under 15%. The tax rate is 28–29% because newer overseas units still lose money. Pine Labs has no promoter group; domestic institutions hold about 25% and foreign investors 9% (Screener, June 2026).",
        watch: ["FY27 revenue growth within the 21–23% guidance.", "An adjusted operating margin of at least 21% for FY27, which needs a much stronger H2 after about 18% in H1.", "The UPI merchant fee: still not in force, and management says the timing is up to NPCI.", "Contribution margin returning to 73–74% in H2 FY27."],
        charts: platformCharts['Pine Labs'],
    },
    {
        company: 'One Mobikwik Systems',
        inShort: ["**India's largest mobile wallet by spending, plus a UPI app, bill payments and small personal loans** made by partner banks and NBFCs through its app, for 193 million registered users and 5 million merchants.", "**Good:** three profitable quarters, direct costs down 21% and payments gross profit up 31% in Q1 FY27, with ₹437cr of net cash. **Bad:** revenue has not grown for two years, Q1's ₹7.6cr profit leaned on about ₹14–16cr of write-backs on old loans, and merchants exploiting an app bug took ₹40cr in 2025.", "**Verdict: wait.** Profit is too new and too thin to value; I want four quarters of profit without write-backs."],
        tagline: "One MobiKwik Systems: a Gurugram consumer fintech running India's largest digital wallet, a UPI app, bill payments, partner-funded personal loans and a small merchant-payments arm (Zaakpay, card machines and soundboxes).",
        revenue: '₹1,119cr (FY26, consolidated)',
        products: [
            { name: 'Wallet and Pocket UPI', text: "A prepaid wallet with about 19% of India's wallet spending and 40 million fully verified users; 'Pocket UPI' lets them pay any UPI QR code from the wallet balance. Wallet transactions rose 68% in Q1 FY27 but their value only 24%, and wallet-to-UPI payments earn no fee yet." },
            { name: 'UPI and bill payments', text: "Its UPI app grew transactions 130% in a year against 24% for the industry, but UPI earns almost nothing. Recharges and bill payments (₹8,900cr of value in Q1, +37%) are a mature, fee-earning business; it is the sixth-largest bill-payment operating unit." },
            { name: 'Personal loans (Zip EMI)', text: "Small personal loans funded by nine major partner banks and NBFCs. On 68% of them MobiKwik guarantees the first losses (up to 5% of the loan); on 32% it only earns a sourcing fee. Disbursals were ₹737cr in Q1 FY27, and it has RBI in-principle approval for its own NBFC." },
            { name: 'Merchant payments', text: "Card machines, soundboxes and QR codes for shops, and the Zaakpay online gateway. Merchant payment value was ₹12,600cr in Q1 (+17% on the quarter); the arm costs ₹50–60cr a year and is meant to break even in FY28." },
        ],
        revenueText: "Payments brought in **₹208cr of Q1 FY27 revenue (74%)**, down 2% on the year, and financial services (lending) **₹73cr (26%)**, up 26%. After gateway costs and user incentives it keeps about 13 paise of every ₹100 of payments. In lending it kept 5.9% of the money disbursed: about 4 points from current loans plus 1.87 points of one-off recoveries on old ones.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'Payments', share: 74 }, { label: 'Financial services (loans)', share: 26 }] },
        ],
        customers: ["**Young, salaried Indians**: 74% of borrowers are under 40, all have credit scores of 700 or more, and 60% of Q1 loans went to repeat borrowers.", "**Merchants**: 5 million accept MobiKwik; Zaakpay targets online merchants in education, government and bill payments.", "**Partner lenders** (banks and NBFCs), who fund the loans and pay MobiKwik for sourcing and collection; the top three took 71% of Q1 disbursals, down from 91%."],
        difficulty: { level: 'Medium', text: "Payment licences (wallet, bill payments, online and offline aggregator) take years to collect, and MobiKwik holds all of them plus an in-principle NBFC approval. But the apps are easy to copy, larger rivals give UPI away, and a regulator can pause a profitable category overnight, as happened to rent and education payments." },
        moat: "Years of payment data on 193 million users let it pre-approve loans cheaply, and wallet leadership brings fee-earning payments. The weakness is pricing power: most growth is in UPI, which earns nothing, and it ranks only 13th among UPI apps.",
        salesDrivers: ["**Loan disbursals**: management expects ₹1,000cr a quarter again from Q2 FY27 after a dip to ₹737cr, helped by two new lenders, pre-approved offers to 96 million users and an AI tool that brings back applicants who drop out.", "**A fee on wallet-to-UPI payments**: the RBI allowed it, but NPCI has not switched it on after two and a half years; it would turn a large free flow into revenue.", "**Merchant payments**: devices and Zaakpay are targeted at 10 times today's revenue by FY28, about 25% growth a quarter from a small base.", "**Card-linked categories**: rent and education payments were paused in Q4 FY26 and Q1 FY27 under new guardrails; relaunching them would restore high-fee revenue.", "**Its own NBFC**: after moving lending into a subsidiary it can apply for final registration and lend from its own book, though management says that is 'some time away'."],
        inputs: "**No materials.** The big costs are payment-gateway charges and lending costs (first-loss guarantees and collections), which Screener labels power and factory costs (68% of FY26 sales), staff (15%) and other costs such as marketing and technology (21%). Materials were nil in FY26.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on what banks charge it to move money, on loan losses under its first-loss guarantees, and on fixed costs such as staff. **What happened:** the operating margin (Screener) went from −25% in FY22 to 2.5% in FY24, then −9% in FY25 and −3.6% in FY26; by quarter it improved from −15% in Q1 FY26 to 3% in Q1 FY27 as payment costs fell 15% and lending costs 40% in a year.",
        competitors: [{ name: 'PhonePe and Google Pay', note: 'Handle most UPI payments and give them away free; MobiKwik ranks 13th among UPI apps.' }, { name: 'Paytm', note: 'The listed rival with the same mix of wallet, UPI, merchant devices and loan distribution, at far larger scale.' }, { name: 'Pine Labs, Razorpay and bank acquirers', note: 'Established players in the merchant devices and gateways MobiKwik is now building.' }, { name: 'Loan apps and NBFCs', note: 'Compete for the same young, salaried borrowers.' }],
        position: "**India's largest wallet by spending (about 19% share)**, the sixth-largest bill-payment operating unit and the second-fastest-growing UPI app by transactions, but a small player in UPI overall.",
        money: "The company counts **₹437cr of net cash** (June 2026); Screener shows ₹626cr at March. All long-term debt was repaid by March 2026, and ₹320cr of short-term bank lines fund weekend and holiday settlements. ₹182cr of IPO money was unspent at March, and shareholders approved changing its use in July 2026. Operating cash was negative in FY25 (−₹68cr) and FY26 (−₹78cr). About ₹900–1,000cr of past tax losses mean no tax for some time. In September 2025 merchants exploiting an app bug took ₹40.4cr; ₹27.6cr was recovered and ₹11.8cr written off. No dividend. Promoters (the two founders) hold **25.1%**, almost unchanged from 25.2% in December 2024.",
        watch: ["Profit in Q2 and Q3 without loan write-backs.", "Disbursals back at ₹1,000cr a quarter.", "Any fee on wallet-to-UPI payments, and the NBFC licence."],
        charts: platformCharts['One Mobikwik Systems'],
    },
    {
        company: 'AvenuesAI',
        inShort: ["**AvenuesAI (formerly Infibeam Avenues) runs CCAvenue, one of India's largest online payment gateways**, plus bill-payment and hotel-booking platforms, a Gulf payments arm and 82.66% of Rediff.", "**Good:** profitable for years, ₹1,312cr of net cash on Screener's count (partly merchants' money in transit) and Q1 FY27 profit up 45%. **Bad:** the fee it keeps per payment halved in a year, the revenue it keeps fell 3%, earnings per share are guided flat for FY27, it issued about 25% more shares with ₹244cr set aside for unnamed acquisitions, and a subsidiary guarantees ₹400cr of the parent's bank debt.", "**Verdict: pass.** Cheap-looking, but the business under the headline is not growing."],
        tagline: "AvenuesAI Ltd (renamed from Infibeam Avenues in 2026): the CCAvenue payment gateway and BillAvenue bill-payment platform for 10 million-plus merchants in India and the Gulf, enterprise e-commerce software, and a majority stake in Rediff.",
        revenue: '₹8,116cr (FY26, consolidated, gross)',
        products: [
            { name: 'CCAvenue payment gateway', text: "Online and some in-store payment acceptance for airlines, hotels, schools, utilities and government bodies, in India and the Gulf. It processed ₹1.48 lakh cr in Q1 FY27 (+74%) but kept only 5.3 paise per ₹100 of fee-earning payments, down from 10.4 a year earlier." },
            { name: 'BillAvenue and industry software', text: "Bill payments through agents (a Bharat Bill Pay operating unit), RezAvenue reservations for about 3,000 hotels, and a form builder for schools and events; each builds payments into the customer's daily work." },
            { name: 'Rediff (82.66% owned)', text: "Rediffmail and RediffOne business software, the RediffPay UPI app (out of testing in August 2026) and Rediff TV. Rediff plans its own share listing of about ₹600–800cr; its revenue is not disclosed separately." },
            { name: 'Lending and AI (new)', text: "Minority stakes in two lenders (up to 2.5% of Ratnaafin Capital and 7% of Online PSB Loans) to offer merchant loans without using its own balance sheet, and on-premise AI models for companies, which management says are 9–18 months from meaningful revenue." },
        ],
        revenueText: "Reported revenue is **gross**: it includes the fees passed on to banks and card networks. Of **₹8,116cr in FY26, payments were ₹7,888cr (97%) and the e-commerce platform business (software, including Rediff) ₹227cr (3%)**, yet the platform business earned ₹124cr of segment profit against ₹203cr for payments. What the company keeps (net revenue) was ₹603cr in FY26 and ₹147.5cr in Q1 FY27. About 22% of its transactions are UPI, which earns no fee today.",
        mixes: [
            { caption: 'Gross revenue by segment, FY26 (annual report)', parts: [{ label: 'Payments', share: 97 }, { label: 'E-commerce platforms and Rediff', share: 3 }] },
            { caption: 'Segment profit, FY26 (annual report)', parts: [{ label: 'Payments', share: 62 }, { label: 'E-commerce platforms and Rediff', share: 38 }] },
        ],
        customers: ["**Online merchants**: airlines, hotels, travel sites, schools, utilities, telecoms and government bodies (IndiGo, Taj, ITC, MakeMyTrip, Jio and Airtel among them); management says it is not on Amazon or the quick-commerce apps.", "**Gulf merchants** in the UAE, Oman and Saudi Arabia, including property developers such as Emaar; it has an in-principle UAE retail payments licence and aims for 12–15% of payments net revenue from abroad by FY28.", "**Companies and consumers** using Rediff's email, business software and new UPI app."],
        difficulty: { level: 'Medium', text: "A payment gateway needs RBI and card-network approvals, bank tie-ups, fraud systems and years of reliable service; CCAvenue has held card-security certification since 2007. But the service itself is close to a commodity: many licensed gateways compete, mostly on price." },
        moat: "Licences, a merchant base of more than 10 million and software built into merchants' work (hotel bookings, school fees, bill payments) make it sticky. The weakness is price: the fee it keeps per payment halved in a year, and management says winning more of a merchant's volume 'comes at a cost'.",
        salesDrivers: ["**Payment volume**: +74% in Q1 FY27 from utilities, government, business-to-business payments and hotels; FY27 gross revenue is guided at ₹11,000–13,000cr.", "**The take rate**: 5.3 paise per ₹100 in Q1 against 10.4 a year earlier; this, not volume, decides what it keeps.", "**The UPI fee from 15 October 2026**: 0.4% on merchant UPI payments above ₹2,000, capped at ₹300; 22% of its transactions are UPI.", "**New income lines**: merchant loans through its lender stakes, the UAE licence, RediffPay and enterprise AI, none yet material.", "**The Rediff listing**, which could put a separate value on the 82.66% stake."],
        inputs: "**No materials.** Payment-processing charges paid to banks and card networks are the dominant cost (the line Screener labels power and factory costs, 93% of FY26 gross revenue); staff are about 2% and other costs 1%. Materials were nil in FY26.",
        costEffect: "**Mostly insulated from commodity prices.** The margin depends on the gap between what merchants pay and what banks and networks charge, which competition keeps squeezing. **What happened:** the operating margin on gross revenue fell from 11% in FY22 to 4.3% in FY26 as low-fee volume grew faster than fees (Screener). On the company's net-revenue measure the Q1 FY27 margin rose to 68% from 47%, because costs fell while net revenue slipped 3%.",
        competitors: [{ name: 'Razorpay, PayU and Cashfree', note: 'Large private gateways that compete for the same online merchants, often on price.' }, { name: 'Pine Labs and bank acquirers', note: 'Strong with large retailers and in-store payments.' }, { name: 'Other Bharat Bill Pay units', note: 'Rivals in bill payments and government collections.' }, { name: 'Local acquirers in the Gulf', note: 'Established payment processors in the UAE and Saudi Arabia.' }],
        position: "**Management puts its share of India's digital payments at about 8%** ('8% to 10%' of online acquiring on the Q1 call), and says it is among the top three business-to-business online gateways in India and the top two non-bank private payment firms in the UAE.",
        money: "Screener shows **₹1,312cr of net cash**, which includes money in transit to merchants; borrowings rose to ₹430cr at March 2026 from ₹172cr, and a step-down subsidiary has guaranteed ₹400cr of the parent's bank debt. A ₹700cr rights issue in FY26 raised the share count about 25%; ₹244cr of it is earmarked for acquisitions of businesses not yet identified. Goodwill and other intangibles from past deals total about ₹2,500cr. Operating cash was ₹537cr in FY26 and 127% of operating profit over five years. It has paid no dividend since FY24. Promoters hold **27.3%**, down from 29.1% in September 2023.",
        watch: ["Net revenue growing again, not just gross revenue.", "Its share of the UPI fee from 15 October 2026.", "How the rights-issue money for unnamed acquisitions is spent, and the Rediff listing."],
        charts: platformCharts['AvenuesAI'],
    },
    {
        company: 'Turtlemint Fintech',
        inShort: ["**An insurance broker that sells motor, health and life policies through about 6.9 lakh part-time agents**, mostly in towns beyond India's top 30, using its own app and links to 46 insurers; it also sells white-label insurance software to banks and fintechs. Listed in June 2026.", "**Good:** premium up 50% and revenue up 40% in Q1 FY27, overheads almost flat, renewals growing 66%, and no agent or insurer large enough to dictate terms. **Bad:** an operating loss of ₹33cr in Q1, ₹182cr of cash burned in FY26, a profit promise softened within a month, ₹51.2cr of GST penalties under appeal, pre-IPO holders free to sell from about 24 December, and a regulator's draft that would cap the commissions that are all its revenue.", "**Verdict: pass.** The price of what it sells is being set by the regulator; I would look again once the final rules are out."],
        tagline: "A Mumbai-based insurance broker (through its subsidiary Turtlemint Insurance Broking) selling policies through part-time agents (PoSPs) on its app, plus Turtlefin software for banks, NBFCs and fintechs.",
        revenue: '₹1,098cr (FY26, consolidated)',
        products: [
            { name: 'Agent-sold insurance (PoSP)', text: "Part-time agents holding a light licence for simple policies sell motor, health and life cover from 46 insurers through its app; insurers pay the commission. 90,791 agents sold a policy in the last 90 days, and platform premium was ₹1,205cr in Q1 FY27 (+49.8%)." },
            { name: 'Renewals', text: "Policies coming up for renewal, which cost almost nothing to resell: ₹225cr of revenue in FY26 (+51%, 20% of revenue) and ₹65cr in Q1 FY27 (+66%, 22%). Management says renewals earn two and a half to three times the margin of new policies." },
            { name: 'Turtlefin (software for banks and fintechs)', text: "White-label insurance-selling software used by banks, NBFCs and fintechs. It brings about 20% of premium but only a small fee; technical and support services were ₹10.7cr of FY26 revenue, about 1%." },
            { name: 'Mutual funds and loans', text: "Agents can also sell mutual funds and loans; the CFO put all non-insurance revenue at about 3%." },
        ],
        revenueText: "**General insurance (mainly motor, plus health) was 93.3% of revenue** in the nine months to December 2025 and **life 4.8%**; the prospectus calls the business 'primarily motor'. The company does not split revenue between motor, health and life and declined to on the Q4 call. It books roughly 24–29% of the premium it sells as revenue (24.4% in Q1 FY27 by my arithmetic), then pays most of that to agents: costs of recruiting, paying and managing them were about 92% of revenue in the nine months to December 2025. Its broking licence sits in a subsidiary bought from co-founder Dhirendra Mahyavanshi in May 2024, so FY24 and FY25 filed revenue are not comparable.",
        mixes: [
            { caption: 'Revenue by insurance line, nine months to Dec 2025 (prospectus)', parts: [{ label: 'General (motor, health)', share: 93 }, { label: 'Life', share: 5 }, { label: 'Other', share: 2 }] },
        ],
        customers: ["**Insurers**, who pay the commissions: 46 are integrated, the top three gave 22.6% of FY26 premium and 17 gave more than ₹100cr each.", "**Part-time agents (PoSPs)**: 6.9 lakh registered, 90,791 active; the top 100 bring only 4.6% of premium. About 28–30% leave within two years, then 2–3% a year.", "**Policy buyers in small towns**: about 76% of premium comes from beyond the top 30 towns; Maharashtra and Gujarat give 31–33%."],
        difficulty: { level: 'Medium', text: "A broking licence, live links to 46 insurers, an app that produces over 8 lakh quotes a day and a network of trained agents in 19,000-plus PIN codes take years to build. But agents can sell for several brokers, and the regulator decides what the whole chain may earn." },
        moat: "Scale and granularity: management says it has the largest share of PoSP agents, and its agents earn more the longer they stay (the FY20 group earns 3.8 times its first-year income). The weakness is price: insurers and the regulator set its commission, and it has passed past cuts on to agents, who can switch brokers.",
        salesDrivers: ["**Agent-sold insurance growth**: Redseer says PoSP premium grew 23–28% a year in FY20–25 against 10–12% for insurance, and expects 25–29% of motor and 9–10% of retail health by FY30.", "**Commission rules**: IRDAI's 23 September draft would cap distributor pay (reports say 15% of first-year health premium, nothing on third-party motor, 5% on new-vehicle own-damage cover, 25% on term life), with comments closing on 25 October and a reported start in FY2027-28.", "**Renewals and product mix**: health premium rose 45% and term life 60% in Q1, and renewals were 22% of revenue.", "**Agent productivity**: revenue per active agent rose about 9% in Q1 by my arithmetic, and frontline staff productivity more than 20% a year.", "**Guidance**: about 40% growth, each quarter bigger than the last, and FY27 adjusted breakeven that management 'will try really hard' to reach."],
        inputs: "**No materials.** Payouts to agents and the cost of managing them are the main expense (inside the line Screener labels other costs, 90% of FY26 sales); staff are 22%. Materials were nil in FY26.",
        costEffect: "**Mostly insulated from commodity prices; its margin is the gap between the commission insurers pay and what it passes to agents.** Management says it passed earlier commission cuts, such as those after the September 2025 GST change, on to agents and kept its margin; that shifts the pain to agents, who can switch. **What happened:** the operating margin (Screener) was −58% in FY22, −28% in FY25 and −12% in FY26 (FY24's −267% is distorted by revenue moving into the broking subsidiary); by quarter it went from −22% in Q1 FY26 to −1% in Q4 FY26 and −11% in Q1 FY27.",
        competitors: [{ name: 'Policybazaar (PB Fintech)', note: 'The largest listed insurance distributor, strongest online; its shares also fell on the commission draft.' }, { name: 'Other PoSP brokers', note: 'Management calls agent-led broking a market of two or three players.' }, { name: 'Insurers’ own agents and banks', note: 'Sell the same policies directly, often with larger networks.' }],
        position: "**By management's account, the largest network of part-time insurance agents (PoSPs)** in what it calls a 'two three player' market, with 3.1 crore policies issued to date.",
        money: "Screener shows **₹107cr of net cash** at March 2026 (cash ₹125cr). Since then it drew ₹50cr of 13.75% secured debentures in April (costing over 16% with a quarterly fee) and in June sold ₹661cr of new shares at ₹152, about 4.3 crore shares or roughly 15% of the enlarged count (my arithmetic); on 30 September the shares traded at about half the issue price. About two-thirds of the IPO money pays running costs (technology salaries, marketing, cloud, offices) and the broker's working capital; about ₹151cr is for acquisitions not yet named. Operating cash was −₹182cr in FY26. ₹51.2cr of GST penalties are under appeal and not provided for. ESOPs are 2.3% of the diluted count. No dividend until 'one or two years' of profit. Promoters hold **13.2%** (June 2026), after selling about 10% of their shares in the IPO; Nexus (19.8%) and Peak XV (16.5%) are the largest holders.",
        watch: ["IRDAI's final commission rules after comments close on 25 October.", "Q2 revenue per rupee of premium and the operating loss narrowing.", "Share sales when pre-IPO holders unlock around 24 December."],
        charts: platformCharts['Turtlemint Fintech'],
    },
    {
        company: 'Aurum Proptech',
        inShort: ["**Co-living rentals, developer CRM software (Sell.do), lead generation (Analytica) and PropTiger brokerage**, bought Housing.com from REA Group in a share swap completed on 29 September 2026, which roughly doubles revenue.", "**Good:** Q2 FY27 revenue rose 64%, continuing operations made ₹6.8cr before tax, all three segments made a profit, and bank debt is gone, with ₹192cr of cash. **Bad:** the H1 headline profit was a building sale, Housing.com loses about ₹200cr a year (management promises profit in 12–18 months), funded with about 37% share dilution, and management ruled out acquisitions 11 weeks before agreeing this one.", "**Verdict: pass.** There is no meaningful P/E to test; this is a diluted turnaround bet on Housing.com reaching breakeven, and next to CarTrade's profitable classifieds it is not a buy."],
        tagline: "A Mumbai-based property-technology group: co-living and family rentals, developer CRM software (Sell.do), lead generation and PropTiger brokerage, and, since September 2026, Housing.com, bought from REA Group for shares.",
        revenue: '₹381cr (FY26, consolidated)',
        products: [
            { name: 'Rental (HelloWorld, NestAway)', text: "Co-living and student housing (HelloWorld, 16,463 beds) and family rental management (NestAway, 9,278 signed units); the weakest segment, still loss-making for FY26." },
            { name: 'Distribution (Analytica, Sell.do, PropTiger)', text: "Lead generation for developers (Analytica), a developer CRM SaaS product (Sell.do, 11,814 active licences, 7% gross churn) and PropTiger brokerage, added from Q2 FY26; together the profitable core, growing fast." },
            { name: 'Housing.com (bought September 2026)', text: "India's roughly third-largest property portal by traffic (~24% share, 58 million monthly visits), bought from REA Group for ₹458cr of new shares (1.98cr shares at ₹231.42, issued 29 September 2026); it earned ₹343cr of FY25 revenue against ₹531cr of costs." },
        ],
        revenueText: "Q2 FY27 segment revenue: Distribution ₹70cr (segment profit ₹11.4cr, 16.3%), Rental ₹56.1cr (profit ₹0.9cr) and Capital (a small SM-REIT platform being built) ₹4.3cr (profit ₹0.4cr); in Q1 they were ₹55.9cr, ₹54.4cr and ₹1.6cr. For FY26, Distribution profit was ₹32.3cr, up 118% as PropTiger was added, while Rental lost ₹18.5cr for the year. Housing.com, bought on 29 September 2026, adds roughly ₹340–380cr of revenue and about ₹200cr of annual losses to the group.",
        mixes: [{ caption: 'Segment revenue, Q1 FY27 (continuing operations)', parts: [{ label: 'Distribution', share: 49 }, { label: 'Rental', share: 49 }, { label: 'Capital', share: 2 }], note: 'Housing.com is not yet consolidated.' }],
        customers: ["**Tenants and students**, renting through HelloWorld and NestAway in 21 cities; occupancy was 81% in Q1 FY27, though beds and signed units both fell year-on-year as the company trimmed unprofitable locations.", "**Property developers**, over 1,000 of them using Sell.do's CRM software, plus buyers of leads from Analytica (134,221 leads sold in Q1, +77%).", "**Home buyers**, through PropTiger's brokerage (662 transactions, ₹784cr of homes sold in Q1) and, from Q3 FY27, Housing.com's 12 million monthly app users."],
        difficulty: { level: 'Medium', text: "None of Aurum's individual businesses is hard to replicate on its own; the harder task is integrating discovery (Housing.com), lead generation, CRM and brokerage into one funnel, which very few Indian real-estate technology groups have attempted." },
        moat: "Sell.do shows genuine SaaS stickiness, with 41% licence growth and only 7% gross churn, and owning discovery, leads, CRM and transactions together is an unusual combination in Indian real estate. The weakness is that cross-sell between the pieces is still 'single digit' per cent of revenue, and Housing.com's own brand — despite an estimated ₹2,200cr invested by past owners — competes against an entrenched leader, 99acres, in a category management itself says has 'historically not been profitable' in India.",
        salesDrivers: ["**Housing.com integration**: management's internal target is breakeven in three to four quarters, stated publicly as four to six.", "**Distribution cross-sell**: only about 22% of distribution clients use more than one Aurum product today.", "**Sell.do growth**: active licences up 41% year-on-year with 7% gross churn.", "**PropTiger scale**: 662 transactions and ₹784cr of homes sold in Q1, with 11 active exclusive mandates.", "**A reversed M&A stance**: management said in April it was 'not actively evaluating to buy anything', then agreed the Housing.com deal about 11 weeks later."],
        inputs: "**Staff and building leases.** There are no materials: delivery/running costs (co-living building leases) were 13% of FY26 sales, staff 26% and other costs 39%.",
        costEffect: "**Mostly insulated from materials; driven by co-living lease costs and, from FY27, Housing.com's losses.** Under lease accounting, co-living buildings sit in depreciation and interest rather than rent, so Screener's operating margin (around 22–26%) is measured before that lease cost; the company's own 'adjusted EBITDA' after lease rent was only about 10% of revenue in Q1 FY27. **What happened:** continuing-operations profitability turned positive only from FY26 (a ₹15.0cr pre-tax loss, better than −₹43.4cr in FY25), and Q1 FY27's headline ₹45cr net profit was almost entirely a ₹52.4cr gain on selling two office buildings — continuing operations alone made just ₹2.31cr before tax.",
        competitors: [{ name: '99acres (Info Edge)', note: 'The entrenched leader in Indian online property listings that Housing.com will continue to trail.' }, { name: 'Other developer CRM and lead-generation vendors', note: 'Compete with Sell.do and Analytica for developer marketing budgets.' }],
        position: "**A small but broadening property-technology group**, about to become a larger one through the Housing.com purchase, with Sell.do holding a meaningful share of developer CRM software.",
        money: "Bank debt (a lease-rental-discounting loan of ₹56cr) was fully prepaid in May–June 2026 using proceeds from the building sale. The promoter is subscribing to ₹118cr of warrants (51 lakh), partly earmarked as a 'war chest' for Housing.com; it paid the 25% upfront, ₹29.5cr, on 13 October 2026, with ₹88.5cr due within 18 months. Cash and liquid investments were ₹192cr at September, and goodwill and intangibles ₹960cr after the deal. The REA Group share swap closed on 29 September 2026: 1.98cr new shares took the share count from 7.68cr to 9.66cr, and REA India now holds 24.9%. With the promoter warrants, the fully diluted count reaches 10.49cr, about 37% dilution, cutting the promoter's stake from 48.1% to about 39.9%. No dividend.",
        watch: ["Housing.com's losses falling each quarter from Q3 FY27, its first full quarter in the group, and profit within 12–18 months (promised 16 Oct 2026).", "Continuing-operations pre-tax margin staying above 5% with Housing.com in.", "No further share issues beyond the deal and the promoter warrants."],
        charts: platformCharts['Aurum Proptech'],
    },
    {
        "company": "Physicswallah",
        "segment": "Consumer services — education and rentals",
        "inShort": [
            "**India's largest low-price coaching brand for JEE, NEET and other exams**, sold mostly through cheap online courses and a fast-growing network of 353 offline and hybrid centres, now adding school tuition (K-12), government-exam coaching and skills courses.",
            "**Good:** revenue grew 35% to ₹3,900cr in FY26, students pay up front so cash arrives before revenue (₹833cr of operating cash against ₹370cr of operating profit), and it holds about ₹5,600cr of cash and investments with no bank debt. **Bad:** profit is thin and seasonal (FY26 net loss of ₹24cr, Q1 FY27 loss of ₹88cr), offline centres are not yet profitable for the year, and the shares trade at about **597 times** earnings.",
            "**Verdict: wait.** A real franchise with strong cash, but the price needs years of fast profit growth; I want to see the guided doubling of EBITDA and offline break-even first."
        ],
        "tagline": "An Indian test-preparation company founded by YouTube teacher Alakh Pandey and Prateek Boob, selling low-priced online courses and running offline and hybrid coaching centres (Vidyapeeth, Pathshala) across India.",
        "revenue": "₹3,900cr (FY26, consolidated)",
        "products": [
            {
                "name": "Online courses",
                "text": "App and YouTube-led live and recorded batches for JEE, NEET, UPSC, CA, GATE, government jobs and more, at about ₹3,800–4,000 per paying student a year, paid up front. Online revenue grew about 39% in FY26 and 33% in Q1 FY27; 4.87 million paid online users in FY26. Mature categories (JEE, NEET, CA) earn high margins (about 27% for online overall in FY26); NEET PG, skills (Earners), Curious Junior and regional-language courses still lose money."
            },
            {
                "name": "Offline and hybrid centres",
                "text": "353 centres at March 2026 (198 a year earlier): Vidyapeeth classroom centres (about 70% of offline), smaller Pathshala hybrid centres, and subsidiaries Xylem (Kerala) and Utkarsh (Rajasthan, government exams). Offline revenue grew about 31% to ₹1,774cr in FY26 but only 14% in Q1 FY27 as NEET results came late. Fees are about ₹32,000 a student a year; centres opened in 2023–24 already earn 13–15% margins, the target for all."
            },
            {
                "name": "K-12 and early learning",
                "text": "Online school tuition: foundation classes, Curious Junior for younger children and 14 state boards (up from 7). ₹105cr of revenue in Q1 FY27, up 88%, with enrolments up 41% to 0.78 million."
            },
            {
                "name": "Other",
                "text": "Books and the PW Books app, skills courses, programmes inside 50-plus partner schools, and the lending arm Finzy, which is being sold."
            }
        ],
        "revenueText": "**Online was about 55% and offline about 45% of FY26 revenue** (offline ₹1,774cr, by the company's FY26 figures). From Q1 FY27 the company reports online and offline as separate segments for the first time, with the year-ago quarter restated. Revenue is spread across the 10–12 month course while fees arrive up front, so the first half brings in cash and Q4 and Q1 show weak margins (operating margin 3.1% in Q4 FY26 and −5% in Q1 FY27, against 17–22% in Q2 and Q3 FY26).",
        "mixes": [
            {
                "caption": "Revenue by channel, FY26 (company figures, approximate)",
                "parts": [
                    {
                        "label": "Online",
                        "share": 55
                    },
                    {
                        "label": "Offline and others",
                        "share": 45
                    }
                ],
                "note": "Offline ₹1,774cr of ₹3,900cr."
            }
        ],
        "customers": [
            "**School students preparing for entrance exams**, mainly JEE (engineering) and NEET (medicine): 5.34 million paid users in FY26, many from smaller towns and families who cannot afford ₹1–2 lakh coaching fees.",
            "**Adults preparing for government jobs, UPSC, CA, GATE and NEET PG**, through the main app, Utkarsh and other subsidiaries.",
            "**Younger school children** in K-12 and state-board tuition, the fastest-growing group."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Anyone can put classes online, and many have. What is hard is a trusted teacher brand with millions of YouTube followers that brings students in cheaply, and, in classroom coaching, proven exam results that justify higher fees. Centres need rent, trained faculty and three to four years to mature."
        },
        "moat": "Brand and reach: the founder's following lets it sell courses at a fraction of rivals' prices and still earn high online margins, and large selection numbers attract the next batch. In classroom coaching it is a challenger to Allen and Aakash, now competing on results rather than price, and the brand leans heavily on its founders.",
        "salesDrivers": [
            "**Exam calendars**: NEET's late results in 2026 pushed enrolments from Q1 into Q2; government-job notifications swing Utkarsh (about 8 lakh fewer enrolments in Q1).",
            "**Price per student**: offline fees rose 7% in Q1 FY27 after falling in FY26; online about ₹3,800 per paying user.",
            "**New categories**: K-12, state boards, NEET PG (enrolments up about 50%), skills and regional languages.",
            "**Slower centre roll-out**: new centres will be decided over the next two quarters and only where the economics work; the focus is filling existing seats (utilisation rose from 1.77 to 1.99 students per seat).",
            "**Guidance**: FY27 revenue up 30% and EBITDA up 100%, offline near break-even."
        ],
        "inputs": "**Teachers and staff, rent and marketing, not materials.** Staff costs were about ₹1,906cr, roughly 49% of FY26 revenue (the four reported quarters added up); marketing was ₹128cr in Q1 FY27 alone. Offline centres add rent (mostly shown as lease depreciation and interest under accounting rules) and faculty.",
        "costEffect": "**No commodity exposure; the margin is teacher pay, centre rent and marketing against fees.** Fees are paid up front for the year, so higher costs can be passed on only at the next admission season. **What happened:** the operating margin went from −50% in FY24 (including a one-time ₹756cr non-cash charge on preference shares) to 2.5% in FY25 and 9% in FY26 as centres matured and staff costs grew slower than revenue; in Q1 FY27 staff cost excluding share options fell 2.6% while revenue rose 24%.",
        "competitors": [
            {
                "name": "Allen Career Institute and Aakash",
                "note": "The large classroom chains for JEE and NEET, charging far higher fees; management says their fees are flat or falling while its own rose 7%."
            },
            {
                "name": "Unacademy and Vedantu",
                "note": "Online test-prep rivals that shrank sharply after the edtech funding boom ended."
            },
            {
                "name": "Regional chains and Sri Chaitanya",
                "note": "Strong local coaching brands in Kota, Hyderabad and the south."
            },
            {
                "name": "Free YouTube teachers",
                "note": "The same low-cost channel that built PhysicsWallah."
            }
        ],
        "position": "**One of India's largest test-prep companies by students**, with 5.34 million paid users and 353 centres; it claims the most NEET and JEE selections of any coaching company.",
        "money": "Screener shows borrowings of ₹1,876cr at March 2026, almost all of it lease liabilities on centres; against that it held about **₹5,027cr of cash and investments** (about ₹5,600cr by June, including about ₹2,000cr of unspent IPO money). The November 2025 IPO at ₹109 raised ₹3,100cr of new money for centres, rent, subsidiaries, cloud and marketing, plus a ₹380cr sale by the founders. Because students pay up front, operating cash (₹833cr in FY26) runs well ahead of operating profit (₹370cr), and free cash was ₹494cr. Management plans to spend mainly on online content and acquisitions, and is selling Finzy. No dividend. Staff share options keep diluting shareholders slightly (options worth about ₹500cr were granted in Q2 FY26). Promoters hold **71.17%**, down from 72.30% only through option allotments.",
        "watch": [
            "Q2 FY27 results: offline growth catching up after the NEET delay.",
            "Progress towards the FY27 targets of 30% revenue growth and double the EBITDA.",
            "Offline centres reaching break-even, and how the ₹5,600cr of cash is spent on acquisitions."
        ],
        charts: platformCharts["Physicswallah"],
    },
    {
        "company": "Arisinfra Solutions",
        "segment": "Platforms for businesses — trucks, travel agents, payments, parts, shipping and insurance agents",
        "inShort": [
            "**Supplies construction materials to builders and contractors** (stone aggregates, ready-mix concrete, asphalt, steel, cement), increasingly from partner plants whose output it reserves, and runs projects for property developers for a fee (Developer-as-a-Service, DaaS).",
            "**Good:** revenue grew 39% in FY26, the operating margin went from about zero in FY23 to **9%** (11% in Q1 FY27), FY26 operating cash was ₹142cr, and the P/E is about 16. **Bad:** losses until FY24, customers take about **140 days** to pay, the top 10 customers are 45–50% of sales, roughly half of profit comes from fees on about ten developer projects, net debt is rising again, and a promoter pledge appeared in September.",
            "**Verdict: follow.** Cheap for its growth and the cash finally arrived in FY26, but it is one good cash year in a thin-margin, credit-heavy business; I want Q2 and Q3 to show the margin and collections holding."
        ],
        "tagline": "A Mumbai-based, technology-led supplier of construction materials, founded in 2021 by Ronak Morbia and Bhavik Khara and listed in June 2025, that sources from partner plants and runs real-estate projects for developers for a fee.",
        "revenue": "₹1,067cr (FY26, consolidated)",
        "products": [
            {
                "name": "B2B supply",
                "text": "Buys almost any construction material (cement, steel, aggregates, chemicals, finishing items) from about 2,200 vendors and resells it to builders, with the supplier delivering directly. It earns only about 2–2.5% at the operating level (Q4 FY26 call); about 44% of FY26 revenue and 37% in Q1 FY27."
            },
            {
                "name": "Contract manufacturing",
                "text": "Reserves output from about ten partner plants (about 9 million tonnes a year, mostly in Maharashtra and Tamil Nadu) by paying refundable deposits, and sells stone aggregates, ready-mix concrete and, since late 2025, asphalt. ₹499cr in FY26 (up 95%) at about a 9–9.5% margin; 53% of Q1 FY27 revenue, with the reserved capacity about 65–70% used."
            },
            {
                "name": "Developer-as-a-Service (DaaS)",
                "text": "Manages a developer's project for a monthly fee plus a share of construction and sales, without lending or owning the project. ₹98cr of FY26 revenue (up 109%) and ₹28cr in Q1 FY27, at a 55–65% margin by management's account; about ₹1,800cr of project value (GDV) under execution across 10 projects."
            }
        ],
        "revenueText": "**Contract manufacturing and DaaS were 56% of FY26 revenue** (₹499cr and ₹98cr of ₹1,067cr), up from under 40% in FY25, and 63% in Q1 FY27. On management's stated margins, DaaS's ₹98cr earned roughly ₹55cr, about half of FY26 segment profit (my arithmetic). By product, aggregates were 37%, ready-mix concrete 25% and steel 7% of revenue in the nine months to December 2024 (RHP). Sales are concentrated in three states: Maharashtra 52%, Tamil Nadu 30% and Karnataka 12% in the same period. Asphalt reached ₹53cr in Q1 FY27 from ₹30cr in Q4 FY26. The year is back-ended: about 40% of sales in the first half and 60% in the second.",
        "mixes": [
            {
                "caption": "Revenue by business, FY26 (results coverage; B2B is the remainder)",
                "parts": [
                    {
                        "label": "B2B supply",
                        "share": 44
                    },
                    {
                        "label": "Contract manufacturing",
                        "share": 47
                    },
                    {
                        "label": "DaaS",
                        "share": 9
                    }
                ]
            },
            {
                "caption": "Revenue by business, Q1 FY27 (call, approximate)",
                "parts": [
                    {
                        "label": "B2B supply",
                        "share": 37
                    },
                    {
                        "label": "Contract manufacturing",
                        "share": 53
                    },
                    {
                        "label": "DaaS",
                        "share": 10
                    }
                ]
            }
        ],
        "customers": [
            "**Infrastructure contractors**: named clients include Larsen & Toubro, Tata Projects, Afcons, J Kumar Infraprojects, Capacit'e Infraprojects and Megha Engineering.",
            "**Property developers**: Wadhwa Group (a ₹650cr-GDV DaaS mandate in Q1 FY27; the CEO is its former COO), Piramal Realty, Godrej, Shapoorji Pallonji and others, for materials and DaaS.",
            "**Concentration**: about 3,400 customers and 82% of revenue from repeat buyers, but the **top 10 are 45–50% of sales** (Q1 FY27 call) and the largest single customer was 18% in the nine months to December 2024 (RHP)."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Trading materials is easy to copy; the harder parts are reserving plant capacity on long contracts, judging builders' credit across thousands of small accounts, and winning developers' trust to run their projects. None needs much capital or technology that rivals cannot buy."
        },
        "moat": "Thin. Its edge is relationships, reserved plant capacity around Mumbai and in Tamil Nadu, and credit data on thousands of builders, which together let it move customers from simple supply into higher-margin products and services. But it owns no plants, B2B supply earns about 2%, larger rivals such as Infra.Market do the same thing, and DaaS fees depend on a handful of developer relationships.",
        "salesDrivers": [
            "**Guidance**: revenue up 35–40% in FY27 (reiterated on 6 August), with an operating margin of 10.5–11% held for the next few quarters; FY28–29 guidance promised in coming quarters.",
            "**Mix shift**: contract manufacturing to 55–60% of revenue and DaaS steady at 9–11%; every point of mix moved out of 2%-margin trading lifts the margin.",
            "**Capacity**: reserved partner capacity to rise from about 9 to 11 million tonnes a year over two quarters, mainly aggregates in Tamil Nadu, by recycling existing deposits rather than adding new ones.",
            "**DaaS pipeline**: ₹1,800cr+ of project value under execution, up from ₹1,250cr in March; projects usually run 18–24 months, though the Wadhwa mandate is an eight-month engagement to sell existing stock.",
            "**Construction cycle and seasons**: tied to Mumbai, Chennai and Bengaluru real estate and infrastructure; the monsoon quarters are slow."
        ],
        "inputs": "**Bought-in materials**: aggregates, ready-mix concrete and asphalt from partner plants, plus cement and steel for resale. Goods bought for resale were **83% of FY26 sales** (₹890cr).",
        "costEffect": "**Largely passed on, so the margin depends on mix, not prices.** Most supply is priced back-to-back, buying and selling at the same time, so it carries almost no stock (2 days). The risk lies in contract-manufacturing price deals and DaaS fees rather than commodity swings. **Rule of thumb:** with materials at 83% of sales, a 1% rise in costs not passed on would cut the margin by about 0.8 of a point (9.4% to 8.6%). **What happened:** the operating margin went from −0.1% in FY23 to 1.8% in FY24, 6% in FY25, 9% in FY26 and 11% in Q1 FY27 as the mix moved away from cement and steel trading, not because input prices changed.",
        "competitors": [
            {
                "name": "Infra.Market and OfBusiness",
                "note": "Larger, unlisted B2B construction-material platforms with their own plants and brands."
            },
            {
                "name": "Local traders and plant owners",
                "note": "Most aggregates and ready-mix concrete are still sold by small regional players."
            },
            {
                "name": "Anarock and other sales agencies",
                "note": "Sell developers' homes for about 2–5% commission (management's figures); DaaS claims a wider role across the whole project."
            }
        ],
        "position": "**A small player in a very fragmented market**: about 8.65 lakh tonnes delivered in Q1 FY27 to about 3,400 customers, with reserved plant capacity of about 9 million tonnes a year running at 65–70%. No market share is disclosed.",
        "money": "Screener shows **₹70cr of borrowings and ₹101cr of cash at March 2026** (net cash about ₹31cr; the company put it at about ₹65cr). By June net debt was **₹14.5cr**, and management plans to let it rise to ₹75–80cr by March 2027 for working capital, within a 0.5–0.6x net debt-to-equity ceiling; in September it also agreed to pay ₹60cr to take its trading subsidiary Buildmex to 92%. Before the June 2025 IPO (₹500cr of new shares at ₹222, plus ₹80cr pre-IPO) it lost money in FY22–FY24 and borrowings reached ₹343cr; operating cash was −₹269cr, −₹14cr, ₹3cr and −₹21cr in FY22–FY25 before **₹142cr in FY26**. Customers take about **140 days** to pay (Screener, FY26), partly offset by about 90 days of supplier credit through supply-chain finance; it takes undated cheques from buyers as security and says provisions for bad debts total about 0.5% of lifetime sales. Capital work in progress has grown to ₹58cr. Rated BBB (Stable) by Acuité. No dividend. Promoters hold **39.68%** (September 2026), with 5.31% of their shares pledged.",
        "watch": [
            "Q2 and Q3 margin at 10.5% or more and revenue up 35%+, the first tests of the new baseline.",
            "Net debt staying within ₹75–80cr and debtor days falling below 120 as sales grow.",
            "Why the promoter stake rose and shares were pledged in September; any further pledging would weaken the case."
        ],
        charts: platformCharts["Arisinfra Solutions"],
    },
    {
        "company": "Rentomojo",
        "segment": "Consumer services — education and rentals",
        "inShort": [
            "**India's largest furniture and appliance rental platform**: about 2.54 lakh subscribers in 29 cities rent beds, sofas, fridges, washing machines and ACs by the month, online and through 89 company-run stores; Rentomojo buys, delivers, repairs and re-rents each item over several customers. Listed in September 2026.",
            "**Good:** revenue up 51% in Q1 FY27 with a steady ~41% operating margin, about 22–26% return on capital, half of orders from repeat customers and 60% of traffic organic, and roughly 45% of the organised market. **Bad:** every rupee of operating cash goes back into buying furniture, so free cash flow has been negative or near zero every year (−₹126cr over FY22–FY26); FY26 profit was flattered by a ₹36.6cr tax credit and Q1's 'normalised profit' is before tax; management gives no guidance; a co-founder's NCLT case is pending; and the shares sell at about 52 times reported profit, nearer 100 times on fully taxed underlying profit (my arithmetic).",
            "**Verdict: wait.** A genuinely good business priced for many years of 40% growth; I want to see that growth hold through a few listed quarters and free cash flow turn positive, or a lower price."
        ],
        "tagline": "A Bengaluru-based rent-instead-of-buy platform for furniture and home appliances, which owns the goods and handles delivery, repairs, relocation and refurbishment.",
        "revenue": "₹387cr (FY26, consolidated)",
        "products": [
            {
                "name": "Furniture and appliance rentals",
                "text": "Beds, mattresses, wardrobes, sofas, fridges, washing machines, TVs, ACs, water purifiers and fitness gear, rented singly or in bundles for an average of about **18 months**; customers can extend, return, relocate or buy. Rentals and subscriptions were **97.9%** of FY26 revenue (RHP). Live items: 8.51 lakh at March 2026, rented out about 83% of the time."
            },
            {
                "name": "Own-label products",
                "text": "Fridges and washing machines made for it by Dixon Technologies, and own-brand water purifiers; it also rents branded goods (Wakefit, Duroflex, Haier, Samsung) and buys whatever its demand model says customers want."
            },
            {
                "name": "Experience stores",
                "text": "**89 company-run stores** at June 2026 (82 in March), where people can see the products; offline grew about 83% in Q1 FY27. Management would not give the offline share of revenue on the call (about 18–20% in an October 2025 press report)."
            }
        ],
        "revenueText": "Revenue is monthly rent from **about 2.54 lakh live subscribers** (March 2026), each renting about 2.8 items. It grows with subscribers (+36% in Q1 FY27), items per subscriber (up from about 2.3 historically) and rent per item (₹1,663 in Q1, +6%). Because each order earns for about 18 months, most of a quarter's revenue comes from earlier orders: unbilled contracted rent stood at **₹408cr** at June 2026 (₹293cr in March). Q1 FY27 revenue was ₹126cr, up 51%, on 3.29 lakh items ordered (+46%). The top 10 cities gave **89.5%** of FY26 revenue (RHP).",
        "mixes": [
            {
                "caption": "Revenue by type, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Rentals and subscriptions",
                        "share": 98
                    },
                    {
                        "label": "Other (sale of used items etc.)",
                        "share": 2
                    }
                ],
                "note": "Rentals and other recurring subscription revenue were 97.9%."
            },
            {
                "caption": "Revenue by city, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Top 10 metro cities",
                        "share": 90
                    },
                    {
                        "label": "Other 19 cities",
                        "share": 10
                    }
                ],
                "note": "Top 10 cities 89.5%; Indore and Lucknow are named as fast-growing newer markets."
            }
        ],
        "customers": [
            "**Young, mobile working people** in big cities who change jobs and homes every couple of years (average Indian tenancy is about 19 months, per management) and would rather pay monthly than buy, move and resell furniture.",
            "**Tenants of the roughly 3.8 crore rented homes in its income bracket**, of which management says about 1.8 crore change hands every year; the whole organised rental industry has only about 6–7 lakh subscribers.",
            "No customer concentration: the RHP says revenue from the top five customers is not applicable."
        ],
        "difficulty": {
            "level": "High",
            "text": "Renting a sofa is easy to copy; doing it profitably is not. It needs cheap capital, a demand-and-churn forecast across 200–300 products and thousands of spare parts, warehouses and repair crews in every city, and good collections (99% of billed rent collected in FY26). Earlier rivals with more capital have shrunk."
        },
        "moat": "Scale and know-how. The largest player gets the most organic traffic (about 60% of visits) and repeat orders (about 50%), keeping marketing cheap, and its forecasting keeps about 83–86% of items rented. Item cohorts from FY17 earned **5.1 times** their cost by FY26 with 56% still earning (RHP). The limits: rental is still a small habit (rental searches are about 1% of purchase searches, per management), and no-cost EMIs make buying easy.",
        "salesDrivers": [
            "**New subscribers**: the biggest lever, helped by job moves (about 2 crore EPFO additions a year, per management) and word of mouth.",
            "**More items per subscriber**: up from about 2.3 to about 2.8.",
            "**Stores and new cities**: 89 stores, growing in Indore, Lucknow and other tier-2 cities; management would not give targets.",
            "**Seasonality**: April–September is strongest for revenue (summer moves and job changes); management says to judge it year on year.",
            "**Prices**: rent per item is set off purchase cost, so price rises are spread over 18–20 months of rent."
        ],
        "inputs": "**The furniture and appliances themselves**, bought as fixed assets (₹175cr of capex in FY26, about 45% of revenue) and charged as depreciation (₹70cr in FY26), not as materials. In operating costs: staff 16% of FY26 revenue, contract workers 10%, logistics 7%, performance marketing 5% and refurbishment 5% (FY26 restated accounts as reported by Inc42).",
        "costEffect": "**Input prices hit capex and depreciation slowly, not the operating margin.** A 10–15% rise in appliance prices is recovered through higher rents on new orders, spread over 18–20 months, so management says demand and margins are little affected; repairs are about 6% of revenue. Interest rates matter more to profit after interest: borrowing costs averaged 9.58% in Q1 FY27, with new debt at 8.95%. **What happened:** Screener's operating margin rose from −1% in FY22 to 21% in FY23, 33% in FY24 and 43% in FY25, then 41% in FY26 and 40.8% in Q1 FY27, while the company reinvested in stores and marketing. Because depreciation is the real cost of the rented goods, operating margin overstates profit: the company's own EBIT margin is about 23%.",
        "competitors": [
            {
                "name": "Furlenco",
                "note": "The best-known private rival; FY24 revenue about ₹140cr, down 10% (Inc42)."
            },
            {
                "name": "Cityfurnish and smaller rental firms",
                "note": "Named in the RHP; management estimates peers and the long tail have about 3 lakh subscribers combined."
            },
            {
                "name": "Buying on no-cost EMI",
                "note": "Retailers, e-commerce and consumer lenders make buying outright cheap; the RHP names retail credit as competition."
            },
            {
                "name": "Furnished flats and co-living",
                "note": "An alternative for tenants who want a ready home."
            }
        ],
        "position": "**The largest organised furniture and appliance rental platform in India**, with an estimated **42–47% of subscription revenue** and 50–55% of live subscribers in FY25 (Redseer, in the RHP).",
        "money": "At March 2026, before the IPO, borrowings were ₹188cr plus ₹46cr of leases against ₹38cr of cash and liquid funds, so **net debt was about ₹196cr**, and net worth ₹296cr; borrowings rose to ₹258cr by June 2026 (RHP). The IPO in September 2026 raised ₹150cr of new money, of which ₹70cr repays debt and ₹42.5cr pays warehouse and store rents; the other ₹1,106cr went to selling investors. Operating cash flow was ₹173cr in FY26 but capex was ₹175cr, and free cash flow was negative or nearly zero every year from FY23 to FY26 (−₹4cr in FY26, Screener). FY26 profit of ₹104cr included a **₹36.6cr deferred-tax credit** from past losses; tax now runs at about 26%. Q1 FY27 profit was ₹7.8cr after an ₹11.4cr fire loss; the company's 'normalised PAT' of ₹21.9cr adds back the fire loss and the whole tax charge. No dividend. Promoters hold **19.75%**, DIIs 37.85% (Screener, September 2026).",
        "watch": [
            "Q2 FY27 revenue growth staying near 40–50%, and whether management starts giving guidance.",
            "Free cash flow after capex and lease payments turning positive.",
            "The co-founder's NCLT petition, and share sales by venture investors (Accel still about 12.8%) as lock-ins end."
        ],
        charts: platformCharts["Rentomojo"],
    },
];

export const platformBusinesses = { intro, profiles };
