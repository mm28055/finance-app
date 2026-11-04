import { BusinessProfile, OverviewSection } from './types';
import { foodProductsCharts } from './card-data/food-products';

// Tab 2 of the Food Products note: what each company actually does.
// Revenue totals are the filed figures (Screener). Volumes, customers, markets and splits
// come from the companies' latest presentations, calls, annual reports and rating reports;
// where a figure is not disclosed, the text says so.

const intro: OverviewSection[] = [
    {
        heading: 'How to read this tab',
        body: [
            "One profile per company, grouped as in Tab 1. Each card opens with a three-line summary and the key numbers (P/E and EV/EBITDA are live), then what it does, where the money comes from and its charts; customers, costs, competitors and ownership are under **More detail**. Revenue totals are filed figures (Gopal, Venky's, Apex, Freshara and Ganesh standalone, the others consolidated); splits are from each company's latest call, presentation or annual report. Where a crop has an Indian wholesale price index, the card compares it with the company's margin: **basmati rice** for LT Foods and KRBL, **coffee** for CCL and Vintage, **maize** for Godrej Agrovet and Venky's, and **wheat flour** for Mrs Bectors and Ganesh. The others buy a mix of oils, pulses, packaging, forest seeds, fish meal or farmed shrimp with no single index, so their cards explain what really moves their costs instead.",
        ],
    },
    {
        heading: 'The businesses, in plain words',
        body: [
            "Eighteen companies that grow, process or sell food, in five groups that earn money in quite different ways.",
        ],
        points: [
            {
                label: 'Branded snacks, staples and nutrition',
                text: "Companies that sell their own brands in packs through local shops, supermarkets and apps: Zydus Wellness (Sugar Free, Glucon-D, Complan and a UK online vitamins business), Bikaji and Gopal (bhujia, namkeen and gathiya), Mrs Bectors (Cremica biscuits, English Oven bread and burger buns) and Ganesh (atta, besan and sattu in West Bengal). **They make money by charging a little more per pack than cheap oil, flour, pulses and packaging cost**, and by selling more packs through more shops. Most are strong in one or two home states; outside them they meet Haldiram's, Parle, Britannia and ITC. Materials are 40–75% of their sales, so a jump in oil or packaging squeezes margins until prices or pack weights catch up.",
            },
            {
                label: 'Basmati rice',
                text: "KRBL (India Gate) and LT Foods (Daawat in India, Royal in the US) buy basmati paddy once a year from farmers, **age it for 12–24 months**, mill it and sell it under their brands at home and abroad. Between them they hold the top two places in Indian packaged basmati. Holding a year of stock ties up a lot of money, but it also means a dear or cheap crop reaches their margins two to four quarters later, and it lets a strong balance sheet buy cheaply in a good season.",
            },
            {
                label: 'Coffee, specialty fats and export foods',
                text: "Companies that process farm produce for foreign buyers: CCL and Vintage make instant coffee for supermarket and coffee brands on **cost-plus contracts that fix their profit per kilo**; Manorama turns sal, mango and shea kernels into cocoa-butter substitutes for chocolate makers who take years to approve a supplier; Freshara brines gherkins from contract farmers, mostly for Russia and Spain; and ADF sells Indian curries and frozen breads to Indian families abroad and to US supermarkets. **Their fortunes follow export demand, freight, the rupee and trade rules**, and several are growing faster than their cash.",
            },
            {
                label: 'Animal feed, poultry and seafood',
                text: "Companies that feed or farm animals and shrimp: Godrej Agrovet (cattle feed, oil palm, crop chemicals, dairy), Avanti (half of India's shrimp feed, plus shrimp exports), Venky's (chicks, broilers, soybean crushing and animal medicines) and Apex (shrimp processing for export). **They sell at prices set by markets or the government** (broiler prices, palm oil, world shrimp prices, Andhra Pradesh's say on feed) and buy maize, soymeal, fish meal or farmed shrimp at market prices, so scale lowers their costs but does not protect their margins.",
            },
            {
                label: 'Seeds and contract manufacturing',
                text: "Two businesses at either end of the food chain. Kaveri Seed breeds hybrid rice, maize and cotton seed and sells it to farmers once a year, earning all its profit in April–June; **the next good hybrid is its only lasting advantage**, and cotton-seed prices are capped by the government. Hindustan Foods builds and runs factories for large brand owners on long take-or-pay contracts, **earning a negotiated return on the capital it invests** rather than a margin on the products it makes.",
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
                    ['**A margin on branded packs**', 'Zydus, Bikaji, Gopal, Mrs Bectors, Ganesh, ADF', 'The shelf price of each pack less the cost of oil, flour, pulses, packaging and advertising', "Distributors pay cash or within days (Bikaji's cash cycle is 24 days); ADF waits longer because it stocks US warehouses"],
                    ["**Buying a season's crop and selling it over a year**", 'KRBL, LT Foods, Manorama, Kaveri', "The gap between the season's buying price and the brand or contract price a year later", 'Slowly: a year of paddy, seed or kernels is held in stock, and cash builds only as it is sold down'],
                    ['**A fixed profit per kilo or per rupee of capital**', 'CCL, Vintage, Hindustan Foods', 'About ₹135–160 a kilo of coffee, or a 16–22% pre-tax return on dedicated plants, with materials passed through', 'Foreign clients pay in 70–90 days; new plants absorb cash for years before they fill'],
                    ['**A spread on a commodity**', "Godrej Agrovet, Avanti, Venky's, Apex, Freshara", 'Market price of feed, palm oil, chickens, shrimp or gherkins less the market cost of grain, fish meal or farm produce', 'Feed dealers pay cash or in advance (Avanti in about 9 days); exporters wait 70–90 days and Freshara far longer'],
                ],
            },
        ],
    },
];

const profiles: BusinessProfile[] = [
    {
        company: 'LT Foods',
        inShort: ["**A global basmati-rice company**: Daawat is India's second-largest basmati brand, Royal takes more than 60% of US basmati imports and Golden Star leads US jasmine rice; North America is half of revenue.", "**Good:** basmati volume rose 11% in Q1 FY27 at a steady 13% segment margin despite 20–25% dearer paddy, FY26 free cash was ₹554cr and CRISIL upgraded it to AA. **Bad:** organic foods earn 4%, ready-to-heat meals lose money, and a ₹134cr insurance claim is still in court.", "**Verdict: own.** The best-placed rice company, at a price that fits my estimate."],
        tagline: "A branded basmati and specialty-rice company that buys, ages, mills and packs rice in India and sells it in 85+ countries, with organic foods and ready meals on the side.",
        revenue: '₹10,946cr (FY26, consolidated)',
        products: [
            { name: 'Basmati and specialty rice', text: "Daawat, Royal, Golden Star, 817 Elephant, Heritage and Mazza, plus regional non-basmati rice in India (about ₹170cr). **90% of Q1 FY27 revenue**, growing 34% with an EBITDA margin of about 13%." },
            { name: 'Organic foods and ingredients', text: "Organic grains, pulses and soybean meal from 110,000 hectares of certified farmland, about 12% of India's organic food exports, now being turned into consumer brands in Europe. 8% of revenue, with a 4% margin that management aims to lift to 7–8% by March 2027." },
            { name: 'Ready-to-heat and ready-to-cook', text: "Packaged rice meals and biryani kits (it holds 60–65% of biryani-kit sales on e-commerce). 2% of revenue and loss-making; a new US plant starts in Q2 FY27, aiming at about $30 million of US sales in two years." },
        ],
        revenueText: "**Basmati and specialty rice is 90% of revenue**, organic 8% and ready meals 2% (Q1 FY27). By market, **North America is 50%**, India 29%, Europe 12% and the Middle East and the rest of the world 9%. Filed revenue is inflated by US tariffs collected from customers and by Golden Star, now fully consolidated; the company's normalised Q1 growth was 19% against 28% filed.",
        mixes: [
            { caption: 'Revenue by business, Q1 FY27 (company presentation)', parts: [{ label: 'Basmati and specialty rice', share: 90 }, { label: 'Organic foods', share: 8 }, { label: 'Ready-to-heat and ready-to-cook', share: 2 }] },
            { caption: 'Revenue by market, Q1 FY27 (company presentation)', parts: [{ label: 'North America', share: 50 }, { label: 'India', share: 29 }, { label: 'Europe', share: 12 }, { label: 'Middle East and rest of world', share: 9 }] },
        ],
        customers: ["**Indian households** (6.44 million buy Daawat, per Kantar) through about 172,000 directly served shops, supermarkets and e-commerce, where it holds more than 40% of basmati sales.", "**South Asian and mainstream shoppers in North America** through ethnic grocers and large US supermarket chains, where Royal and Golden Star lead.", "**Food companies and retailers in Europe and the Middle East**, including organic-ingredient buyers; it has cut low-margin bulk business in Europe."],
        difficulty: { level: 'Medium', text: "Milling rice is simple, but basmati must be aged for 12–24 months, so a big brand needs a year of stock (346,000 t of rice and 164,000 t of paddy at June 2026), contract farmers, 8 lakh tonnes of milling and the balance sheet to fund it all." },
        moat: "Brand leadership in the US and a top-two position in India, backed by scale in buying and ageing paddy; it passed on a 20–25% rise in paddy prices while volume still grew. The weakness is that Indian share slipped to 23.1% as Fortune's Kohinoor gains, and Pakistani rice undercuts Indian exports abroad.",
        salesDrivers: ["**Basmati volume**: up 19% in FY26 and 11% in Q1 FY27; management guides 10–12% organic growth a year and adds 50,000–60,000 t of volume annually.", "**Price pass-through**: paddy prices feed into shelf prices with a two-to-four-quarter lag because it holds a year of stock.", "**North America**: Royal and Golden Star; tariffs moved from 50% to about 10% in eight months, and a court-ordered refund is only partly received.", "**India ambition**: revenue to more than double by FY30, through regional rice, e-commerce and quick commerce.", "**Fixing the drags**: organic margin to 7–8% by March 2027 and double digits by FY28; the US ready-meals plant from Q2 FY27."],
        inputs: "**Paddy is 65–70% of cost of sales**, bought mostly in season (60–70% of needs) from farmers and traders in Punjab, Haryana and nearby states; plus packaging and freight (logistics about 4.7% of revenue). Materials were 65% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** Its brands let it raise prices, but because it holds a year of stock, a dearer crop reaches its margin two to four quarters later. Middle East freight, which jumped from about $200 to as much as $4,000 a container, could not be passed on. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (11% to 4%). **What happened:** India's wholesale price index for basmati rice was flat over three years (100 in Q1 FY24 to 99), even though paddy from the 2025 crop cost 20–25% more; its margin slipped from 12.0% to 11.2%, held back by organic-foods losses, ready-meals start-up costs and freight rather than by rice.",
        competitors: [{ name: 'KRBL (India Gate)', note: 'The leader in Indian branded basmati with 37–41%; weaker in the US.' }, { name: 'Fortune’s Kohinoor', note: 'A third Indian brand gaining share in basmati.' }, { name: 'Pakistani exporters', note: 'Sold basmati at about $990 a tonne against about $1,150 for Indian Pusa in January 2026.' }, { name: 'Tilda and US private labels', note: 'Compete for mainstream shoppers in the UK and US.' }],
        position: "**Second in Indian basmati (23.1% Nielsen share, first in Maharashtra, Gujarat and Madhya Pradesh), first in US basmati imports (Royal, 60%+) and first in US jasmine rice (Golden Star).**",
        money: "Net debt was **₹1,273cr** on Screener at March 2026, about half a year's operating profit on the company's own measure; about 100 days of supplier financing keeps it there but raises interest. FY27 capex is about ₹330cr, funded from cash flow. The parent has guaranteed ₹617cr of related parties' working-capital loans. CRISIL rates it AA (stable). Promoters hold **51.0%**, unchanged over three years, with no pledge.",
        watch: ["Organic-foods margin reaching 7–8% by March 2027.", "The US ready-to-heat plant starting in Q2 FY27.", "The 2026 paddy price and the insurance appeal."],
        charts: foodProductsCharts['LT Foods'],
    },
    {
        company: 'CCL Products',
        inShort: ["**One of the world's largest makers of private-label instant coffee**, with about 77,000 t of capacity in India and Vietnam, selling to supermarkets and coffee brands in 110+ countries, plus its own Continental brand in India.", "**Good:** a cost-plus model that earns about ₹135–140 of operating profit a kilo whatever beans cost; volume rose about 20% in Q1 FY27 and 10–15% in Q2, and net debt fell to ₹742cr in September. **Watch:** FY26's ₹788cr of free cash will not repeat, and its freeze-dried plants could be nearly full within about 18 months.", "**Verdict: own.** Cost-plus coffee with its heavy spending behind it, at a price that fits."],
        tagline: "A contract maker of spray-dried, agglomerated and freeze-dried instant coffee for global brands and retailers, with a growing branded coffee business in India.",
        revenue: '₹4,457cr (FY26, consolidated)',
        products: [
            { name: 'Spray-dried and agglomerated coffee', text: "The bulk of its volume: instant coffee made to each customer's blend and packed under the customer's brand, from plants at Duggirala and Kuppam in Andhra Pradesh and in Vietnam." },
            { name: 'Freeze-dried coffee', text: "A premium instant coffee that earns 30–40% more profit a kilo than spray-dried; its plants here run above the average 65–70% use, and more customers are signing long contracts for it." },
            { name: 'Small packs and roast and ground', text: "Retail-ready jars, sachets and roasted blends packed for customers, about 20% of volume (up from about 15%), which lifts profit per kilo." },
            { name: 'Own brands', text: "Continental coffee in India (third nationally, with more than 6% of urban South India), Percol in the UK, and Malgudi South Indian snacks in pilot; about 10% of sales, kept at a 4–6% margin while it invests." },
        ],
        revenueText: "**Exports are about 87% of revenue** and its **top five customers only about 15%** (FY26, ICRA). Own brands were about 10% of FY26 sales; domestic turnover was about ₹650cr, of which branded about ₹440cr. Revenue moves with coffee prices, which are passed through: in FY26 it grew 43%, of which 18–20% was volume and the rest higher bean prices.",
        mixes: [
            { caption: 'Revenue by market, FY26 (ICRA)', parts: [{ label: 'Exports', share: 87 }, { label: 'India', share: 13 }] },
            { caption: 'Revenue by business, FY26 (company calls and ICRA)', parts: [{ label: 'Private label for other brands', share: 90 }, { label: 'Own brands', share: 10 }] },
        ],
        customers: ["**Supermarket chains and coffee brands** in Europe, Russia and the CIS, Asia, Africa and the Americas that sell instant coffee under their own names; no single customer dominates.", "**Food-service and trading customers** buying bulk instant coffee.", "**Indian households** buying Continental through about 1.7 lakh shops, DMart, Reliance and online (20–25% of branded sales)."],
        difficulty: { level: 'High', text: "Instant-coffee plants are expensive, run round the clock and take years to fill; freeze-drying especially needs heavy capital and know-how. Customers approve each blend and plant, and CCL's plants in two countries let it buy Robusta and Arabica where they are cheapest." },
        moat: "Scale, low cost and a cost-plus contract model make it a reliable supplier to brands that do not want to own plants; profit per kilo held through the 2024–25 coffee-price spike. The weakness is that customers never let it earn much above the agreed margin, and an analyst noted a listed peer earns more a kilo.",
        salesDrivers: ["**Volume**: guided at about 15% a year for three to four years; Q1 FY27 delivered about 20% and Q2 10–15%, while ICRA expects only 10–12%. Q3–Q4 orders are ‘robust’, management said in October.", "**Filling its plants**: utilisation was about 70% in Q2 FY27; spray-dried has room for two to three years, but freeze-dried could be close to full in 12–18 months, and it expands at 80–85%. A freeze-dried line of about 6,000 t (about ₹500cr last time, 9–12 months to build) is being weighed for India or Vietnam.", "**Mix**: more freeze-dried coffee and small packs lifted profit from about ₹125–130 a kilo to about ₹140; with that mix now in the base, management expects profit a kilo to stay at ₹135–140 and operating profit to grow with volume.", "**Coffee prices**: pass straight into revenue, so cheaper beans cut sales growth but not profit per kilo.", "**The Indian brand**: guided to grow 25–30% in volume, to ₹550–600cr of domestic branded revenue in FY27."],
        inputs: "**Green coffee (mostly Robusta, some Arabica)** bought against each customer contract, from Vietnam, India and Brazil, plus packaging (glass jars, laminates) and energy. It holds about 2.5–3 months of green coffee. Materials were 65% of sales in FY26.",
        costEffect: "**Passed on by contract.** It buys green coffee back-to-back against each order, so bean prices go straight into its selling price and profit is fixed per kilo; only packaging, freight on some contracts and energy are partly absorbed. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (16% to 9%), but its contracts are designed to prevent exactly that. **What happened:** India's wholesale price index for coffee rose 56% over three years (100 in Q1 FY24 to 156), and its operating margin was 16.2% at both ends; dearer beans raised revenue and working capital, not the margin.",
        competitors: [{ name: 'Vintage Coffee', note: 'A much smaller Hyderabad rival (11,000 t) on the same cost-plus model, earning about ₹157 a kilo.' }, { name: 'Tata Consumer and other Indian exporters', note: 'Also supply instant coffee in bulk and private label.' }, { name: 'Global contract makers in Vietnam, Brazil and Europe', note: 'Compete for the same supermarket and brand contracts.' }, { name: 'Nestlé and Hindustan Unilever', note: 'Lead Indian branded coffee, ahead of Continental.' }],
        position: "**About 10–11% of the world's contract instant-coffee market** at 77,000 t, with room to grow to 1–1.2 lakh t; third in Indian branded coffee.",
        money: "Net debt was **₹1,103cr** on Screener at March 2026 (₹1,073cr on the company's measure), **₹963cr at June** and **₹742cr at September** (company); gross debt, which peaked near ₹1,950cr in December 2024, was ₹1,192cr in September, and the CFO guides ₹1,000–1,200cr gross and about ₹800cr net for FY27 as it buys the Vietnam crop. FY27 capex is only ₹25–50cr. ICRA rated it AA (stable) in July 2026. 61% of operating profit turned into operating cash over five years, because the FY22–FY25 plant building and dear coffee absorbed cash. Promoters hold **46.1%**, steady, with no pledge.",
        watch: ["FY27 volume and operating profit reaching about 15% after a slower Q2.", "Net debt staying near ₹800cr through the Vietnam buying season.", "The size, place and cost of the next freeze-dried line."],
        charts: foodProductsCharts['CCL Products'],
    },
    {
        company: 'Godrej Agrovet',
        inShort: ["**A Godrej group agri-business**: India's largest organised animal-feed maker and largest domestic crude-palm-oil producer, plus crop protection (with 67% of Astec LifeSciences), Godrej Jersey dairy and Yummiez frozen foods.", "**Good:** working capital cut from 84 days to 10 (partly through supplier financing), return on capital near 19%, and it pays out about half its profit. **Bad:** Q1 FY27 profit before tax fell 8% as the driest June in about a century hit crop protection and milk costs squeezed dairy, and ‘mid-teens’ profit growth became ‘double-digit’ within three months.", "**Verdict: follow.** A better-run portfolio having a bad-weather year; the price needs more growth than I expect."],
        tagline: "A diversified farm business selling cattle and fish feed, crude palm oil, crop chemicals, milk and frozen foods, mostly to Indian farmers and households.",
        revenue: '₹10,233cr (FY26, consolidated)',
        products: [
            { name: 'Animal feed', text: "Compound feed for cattle (about 55–56% of volume), fish, poultry and shrimp, sold through dealers to farmers; 402,257 t and ₹1,302cr in Q1 FY27, up 12.6%. It is cutting back broiler feed and reviewing shrimp feed." },
            { name: 'Oil palm', text: "Buys fresh fruit from about 80,000 hectares of contract farms in government-allotted areas and crushes it into crude palm oil and palm-kernel oil; ₹591cr in Q1 FY27, up 28.9%, with a 16.7% margin. About half the trees are still young, so yields rise as they mature." },
            { name: 'Crop protection and Astec', text: "Herbicides and insecticides for farmers (its cotton herbicide Hitweed is the biggest), earning a 26–27% segment margin in a normal year; Astec (67% owned, listed) makes agrochemical ingredients and does contract manufacturing." },
            { name: 'Dairy and foods', text: "Creamline Dairy (Godrej Jersey milk, curd and other products; ₹465cr in Q1 FY27) and Godrej Foods (Yummiez frozen snacks and Real Good Chicken; ₹188cr), both earning thin margins today." },
        ],
        revenueText: "**Animal feed was 46% of FY26 revenue**, down from 80% in FY12. In Q1 FY27, before removing sales between units, feed was about 45% of segment revenue, oil palm 20%, dairy 16%, crop protection 9%, foods 7% and Astec 3%. The Bangladesh feed joint venture (ACI Godrej) is not consolidated.",
        mixes: [
            { caption: 'Segment revenue, Q1 FY27 (company presentation, before eliminations)', parts: [{ label: 'Animal feed', share: 45 }, { label: 'Oil palm', share: 20 }, { label: 'Dairy (Godrej Jersey)', share: 16 }, { label: 'Crop protection', share: 9 }, { label: 'Foods (Yummiez)', share: 7 }, { label: 'Astec', share: 3 }] },
        ],
        customers: ["**Dairy, fish and poultry farmers** buying feed through dealers; high milk prices push dairy farmers toward branded feed such as Dhanalaxmi G and Bypro Plus.", "**Edible-oil refiners** buying its crude palm oil, priced off the international palm-oil price; and oil-palm farmers, who sell it their fruit at a government formula price.", "**Farmers buying crop chemicals** through dealers, **global agrochemical firms** using Astec, and **households** buying Godrej Jersey milk and Yummiez."],
        difficulty: { level: 'Medium', text: "Feed mills are not hard to build, but a national dealer network, formulation know-how and buying scale are. Oil palm needs government-allotted areas, thousands of contract farmers and years of tree growth; its oil-extraction rate of 18.8% is among the best in India." },
        moat: "Scale in feed and exclusive palm-growing areas give it lower costs and secure supply; crop protection earns high margins on in-house products. The weakness is that most of what it sells is priced by commodity markets, the government or the weather, so scale lowers cost but does not set price.",
        salesDrivers: ["**The monsoon**: rain decides crop-chemical demand, fodder and milk supply; the 40% June 2026 rainfall deficit cut crop-protection sales by 17%.", "**Milk prices**: high milk prices help cattle-feed volume (up 15–24%) but squeeze its own dairy, where milk costs will stay high for two to three more quarters.", "**Palm-oil prices and tree maturity**: crude palm oil sold at ₹134,783 a tonne in Q1 FY27 (+18%); new areas in Telangana and the Northeast aim at about 150,000 hectares.", "**Downstream palm products**: a specialty-fats refinery from September 2026, which should add about 2 points to group margin when scaled.", "**Portfolio pruning**: exiting live-bird trading and reviewing shrimp feed, seeds and cattle genetics."],
        inputs: "**Maize, soybean meal and de-oiled rice bran for feed; palm fruit bought from farmers at a government formula price; raw milk for dairy; Chinese chemical intermediates for crop protection and Astec.** Materials were 74% of sales in FY26.",
        costEffect: "**Partly passed on.** In feed it passed on about 60–70% of the 2026 maize rise and was helped by well-timed buying; in dairy about 70% of milk inflation is being passed on; in oil palm both its fruit cost and its selling price follow palm-oil prices, but the monthly formula for farmers squeezed Q1. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (8% to 1%). **What happened:** India's wholesale price index for maize was only 3% higher than three years earlier (100 in Q1 FY24 to 103), despite a jump in 2026, and its margin moved from 7.7% to 8.4%; the bigger swings came from crop protection (hit by the drought), palm-oil prices and milk costs rather than from feed grains.",
        competitors: [{ name: 'Cargill and regional feed makers', note: 'Compete in compound feed; dairy co-operatives also make their own cattle feed.' }, { name: 'Patanjali Foods and 3F', note: 'The other large domestic oil-palm developers, each with its own allotted areas.' }, { name: 'UPL, Dhanuka and Rallis', note: 'Larger crop-protection companies with wider product ranges.' }, { name: 'Amul, Mother Dairy and Heritage', note: 'Set milk prices in the markets where Godrej Jersey sells.' }],
        position: "**India's largest organised compound-feed maker and largest domestic producer of crude palm oil**; a mid-sized crop-protection player with industry-leading margins on its own products.",
        money: "Net debt was **₹1,272cr** on Screener at March 2026, much of it cheap commercial paper (CRISIL A1+ on ₹1,500cr). Capex runs at ₹300–350cr a year (about ₹400cr in FY27), half to oil palm, funded from cash flow with ₹100–125cr to spare. It paid ₹708.6cr to buy out Creamline's minority holders in FY26. Operating cash was 103% of operating profit over five years, helped by supplier financing. Promoters hold **67.8%**, down from 74.1% in September 2023, with no pledge.",
        watch: ["The crop-protection update after the monsoon and the FY27 range due after Q2.", "Dairy margins as milk costs ease.", "The planned exits from shrimp feed, seeds and live birds."],
        charts: foodProductsCharts['Godrej Agrovet'],
    },
    {
        company: 'ADF Foods',
        inShort: ["**An exporter of Indian ready meals, frozen breads, pickles and pastes** under Ashoka (for the South Asian diaspora in 60+ countries) and Truly Indian (for mainstream US shoppers, in about 3,000 stores including Costco), with its own US warehouses.", "**Good:** revenue grew 26% in Q1 FY27, Ashoka more than 30%, and the new Surat plant can add nearly ₹300cr of sales at full use. **Bad:** the underlying Q1 margin was under 14% as freight took about 3 points, the ₹16cr-a-year PLI subsidy ends after FY27, and inventory days doubled to 205.", "**Verdict: follow.** A steady branded exporter; buy on a weak quarter once freight is passed on."],
        tagline: "A maker and exporter of branded Indian packaged foods, chiefly for Indian families abroad and US supermarkets, with plants in Gujarat and Maharashtra.",
        revenue: '₹683cr (FY26, consolidated)',
        products: [
            { name: 'Ashoka (diaspora brand)', text: "Ready-to-eat curries, frozen parathas and snacks, pickles and chutneys for Indian and South Asian families abroad; about ₹308cr in FY26, growing 20%+ a year for five years and more than 30% in Q1 FY27." },
            { name: 'Truly Indian (mainstream US brand)', text: "Indian meals for American shoppers in about 3,000 stores (Costco, Whole Foods, Safeway-Albertsons, Raley's) and in Germany; about $4–4.5 million a year, where it competes with US makers of Indian-style food." },
            { name: 'Private label and B2B', text: "Products made for retailers and other brands, about 20–25% of sales; own brands are about 70–75%." },
            { name: 'US agency distribution', text: "Distributes other companies' products through its US arm and warehouses: ₹23cr of Q1 FY27 revenue at an 11.5% margin." },
        ],
        revenueText: "**Processed foods were 86% of Q1 FY27 revenue** (₹144cr, a 21.6% segment margin) and US agency distribution 14%. **North America is the core market**; the Gulf was a little under 15% of revenue until shipping stopped in March–April 2026. The company does not publish a full country split.",
        mixes: [
            { caption: 'Revenue by segment, Q1 FY27 (company call)', parts: [{ label: 'Processed foods', share: 86 }, { label: 'US agency distribution', share: 14 }] },
        ],
        customers: ["**Indian grocery stores abroad** serving the diaspora in North America, the UK, the Gulf, Australia and 60+ countries.", "**US supermarket and club chains** such as Costco and Whole Foods for Truly Indian; 60% of its growth comes from existing stores selling more.", "**Retailers and brand owners** buying private-label products."],
        difficulty: { level: 'Medium', text: "Indian curries and breads are easy to cook but hard to freeze and ship at consistent quality; a 90-year-old brand, US food approvals, its own freezer warehouses and supermarket listings are harder to build." },
        moat: "Ashoka is a trusted diaspora brand, and owning both the plants and US distribution gives it control to the shelf; margins held at 17–20% for five years. The weakness is that promoters own only 36%, the subsidy is ending, and freight and shipping availability can erase a quarter's margin.",
        salesDrivers: ["**Ashoka's growth** among the diaspora, guided at 30–35% for FY27.", "**US supermarket listings** for Truly Indian, guided to ₹75–80cr in FY27.", "**The Surat plant**: ₹40–50cr of sales this year and nearly ₹300cr at full use by year three.", "**Shipping**: in June 2026 about 30% of goods ready to ship could not find a vessel; the Gulf business fell 80–85% in March–April.", "**The rupee and US tariffs**: a weaker rupee helps; a 10% US tariff still applies, and it received a $2.08m refund of earlier tariffs."],
        inputs: "**Vegetables, pulses, flour, oils, spices and packaging**, bought ahead when prices are low; freight (about 3–4% of revenue) is the swing cost. Materials were only 31% of sales in FY26; power, fuel and factory costs were 18% and other costs, including freight and marketing, 24%.",
        costEffect: "**Mostly insulated from materials; exposed to freight.** Ingredients are under a third of sales, and it began passing on freight from Q2 FY27 (about 75% in the US). **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 3 points (19% to 16%). **What happened:** there is no single input index for its range. Its operating margin held at 16–20% from FY22 to FY26 (Screener), helped by about 2 points of PLI subsidy; in Q1 FY27 freight took about 3 points and the company put the margin ‘a little under 14%’ without a tariff refund.",
        competitors: [{ name: 'Deep, Haldiram’s and MTR', note: 'Other Indian food brands sold in diaspora grocery stores.' }, { name: 'US makers of Indian-style food', note: 'Truly Indian’s main rivals in mainstream supermarkets.' }, { name: 'Supermarket private labels', note: 'Retailers’ own Indian meals, often made by co-packers.' }],
        position: "**A leading Indian exporter of branded ethnic packaged foods to the diaspora**, with a small but growing mainstream US brand.",
        money: "Net cash of **₹32cr** on Screener at March 2026 (the company put it at ₹78.2cr). About ₹124cr was spent on Surat and brownfield work over FY25–FY26; FY27 capex is only ₹20–25cr. 52% of operating profit turned into operating cash over five years as stock in US warehouses grew. It won a ~$2.8m US court award against a former co-packer, now under appeal. The managing director can earn commission of up to 5% of profit before tax. Promoters hold **36.1%**, steady; 17 lakh family shares were pledged at March 2025.",
        watch: ["Margin back above 17% without one-offs in H2.", "Surat sales of ₹40–50cr this year.", "The plan to replace the PLI subsidy."],
        charts: foodProductsCharts['ADF Foods'],
    },
    {
        company: 'KRBL',
        inShort: ["**India's largest branded basmati company** (India Gate, 37–41% of packaged basmati in every channel), integrated from contract farming to milling, with exports to 90+ countries, mostly the Middle East.", "**Good:** a record ₹261cr profit in Q1 FY27 on cheap paddy and a 9% price rise, and ₹1,841cr of net cash and investments at June. **Bad:** its auditor qualified the FY26 accounts over the Enforcement Directorate's money-laundering case, management will not discuss it, and Q1 exports halved.", "**Verdict: wait.** The cheapest good brand here, but not while the audit is qualified."],
        tagline: "The India Gate basmati company: buys, ages, mills and packs basmati for Indian households and exports it, mainly to the Gulf.",
        revenue: '₹6,098cr (FY26, consolidated)',
        products: [
            { name: 'Branded basmati in India', text: "India Gate and other brands sold through about 3.3 lakh shops, supermarkets and e-commerce, reaching 1.2 crore urban households; it leads every channel (general trade 37%, modern trade 38%, e-commerce 41%)." },
            { name: 'Basmati exports', text: "Branded and bulk basmati to 90+ countries, mostly the Gulf; about 160,000 t in FY26 at about ₹1,38,500 a tonne, against about ₹79,000–80,000 at home." },
            { name: 'Regional rice and new foods', text: "Non-basmati regional rice (₹271cr in FY26, +38%), masalas, Uplife edible oil and poha." },
            { name: 'Power and by-products', text: "Biomass and wind power (₹31cr in Q1 FY27), and rice-bran oil and furfural from milling waste." },
        ],
        revenueText: "**Domestic sales were 82% of Q1 FY27 revenue**, exports 16% and power 2%. In FY26 domestic revenue was ₹4,444cr and exports ₹1,555cr. The press has put West Asia at about 30% of revenue; exports halved in Q1 FY27 when Gulf shipping stopped.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company presentation)', parts: [{ label: 'India', share: 82 }, { label: 'Exports', share: 16 }, { label: 'Power', share: 2 }] },
        ],
        customers: ["**Indian households**, especially in cities, buying India Gate in shops, supermarkets and online; bulk-pack buyers delayed purchases in Q1 FY27 after the price rise.", "**Importers and wholesalers in the Gulf**; Saudi Arabia is served through wholesalers while KRBL looks for a new distributor.", "**Buyers in Europe, the US and other markets**, where exports outside the Middle East grew 37% in Q1 FY27."],
        difficulty: { level: 'Medium', text: "Milling is simple, but basmati must be aged 15–24 months, so the business needs the largest contract-farming network in India, a year's stock (₹3,714cr at March 2026) and the balance sheet to carry it." },
        moat: "India Gate is the category's leading brand in every channel, about 10 points ahead online, and it raised prices about 9% in Q1 FY27. The weakness is that it lost about 2 points of share in traditional shops in Q1, and in exports Pakistani rice undercuts it.",
        salesDrivers: ["**Domestic volume**: guided at about 10% a year for two to three years; Q1 FY27 was flat after the price rise.", "**Pricing**: branded prices rose about 9% in Q1; no further rise until the new crop, as prices are at ‘the higher extent of the bandwidth’.", "**Gulf exports**: halved in Q1 on shipping disruption; management expects recovery from Q2, and Gulf buyers now accept higher freight.", "**Regional rice and new products**: regional rice guided to grow 25% in FY27, with a new plant at Gangavathi (Karnataka) by Q3.", "**The paddy crop**: cheap paddy lifts margins for a year; a dear crop squeezes them."],
        inputs: "**Pusa 1121 and 1509 basmati paddy**, bought once a season (October–February) from contract farmers and markets; plus packaging and freight (Gulf container rates went from about $500 to as much as $5,000). Materials were 68% of sales in FY26.",
        costEffect: "**Passed on, with a lag.** It raises prices when a crop is dear, but holds a year of stock, so a change in paddy prices reaches its margin two to four quarters later. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (15% to 8%). **What happened:** India's wholesale price index for basmati rice was flat over three years (100 in Q1 FY24 to 99), but its margin rose from 17.8% to 20.6% because it sold rice from paddy bought cheaply in the 2025 season after a 9% price rise; the CFO called Q1's margin ‘clearly not sustainable’ and guides 17–18% for FY27 on the company's measure.",
        competitors: [{ name: 'LT Foods (Daawat)', note: 'Second in India with 23.1%, and far stronger in the US.' }, { name: 'Fortune’s Kohinoor', note: 'A third brand gaining share in Indian basmati.' }, { name: 'Pakistani exporters', note: 'Sold basmati at about $990 a tonne against about $1,150 for Indian Pusa in January 2026.' }],
        position: "**The largest branded basmati company in India: first in general trade (37%), modern trade (38%) and e-commerce (41%)**, and among the largest exporters.",
        money: "Net cash of **₹812cr** on Screener at March 2026; the company put net cash and investments at **₹1,841cr at June** as stock ran down, and will spend some on paddy in October–November. Capex is low, but it bought about 130 acres of land at Panipat as ‘treasury optimisation’ rather than return cash; payout is about 16% and there is no buyback. Promoters hold **60.2%**, unchanged, with no pledge.",
        watch: ["Any progress in the ED case.", "Export recovery in Q2.", "Use of the cash: buyback or special dividend versus more land."],
        charts: foodProductsCharts['KRBL'],
    },
    {
        company: 'Manorama Industries',
        inShort: ["**Makes cocoa-butter substitutes and specialty fats** from sal, mango and shea kernels collected in Indian forests and West Africa, for chocolate and cosmetics makers such as Ferrero, Mondelez, Hershey and L'Oréal; 60% of Q1 FY27 revenue was exports.", "**Good:** revenue grew 39.5% in Q1 FY27 at a 26% margin, and a ₹500cr share sale funds a plan to roughly double processing by FY29. **Bad:** it bought ₹191.8cr of raw material in FY26 from a Ghana company owned by its vice-chairperson, disclosed a ₹20.64cr customs payment late, and has turned only 35% of its profit into cash over two years.", "**Verdict: wait.** Excellent economics, but governance must improve and the price already assumes fast growth."],
        tagline: "A Raipur maker of cocoa-butter equivalents and exotic butters from tree seeds, sold to global chocolate, confectionery and cosmetics companies.",
        revenue: '₹1,367cr (FY26, consolidated)',
        products: [
            { name: 'Cocoa-butter equivalents (MILCOA)', text: "Fats that behave like cocoa butter and can legally replace up to 5% of it in chocolate in the EU and India. Its highest-value product: **about 30% of revenue, up from about 10% two years ago**, with about 7,500 t sold in FY26." },
            { name: 'Stearin and olein fractions', text: "Sal, mango and shea fats split into harder and softer fractions for chocolate, fillings and bakery; about 8,000 t of stearin in FY26. Together with cocoa-butter equivalents, 71.4% of FY26 revenue." },
            { name: 'Exotic butters and oils', text: "Sal, mango, shea and kokum butters for cosmetics and personal care (L'Oréal, The Body Shop) and other food uses." },
        ],
        revenueText: "**Cocoa-butter equivalents and stearin were 71.4% of FY26 revenue**, with cocoa-butter equivalents alone about 30%. **Exports were 60% of Q1 FY27 revenue** (73% in FY25) to 39+ countries, none above 25%. The top five customers were 28% of income in FY25. It does not disclose prices per tonne or market share.",
        mixes: [
            { caption: 'Revenue by product, FY26 (company presentation and calls)', parts: [{ label: 'Stearin and other fractions', share: 41 }, { label: 'Cocoa-butter equivalents', share: 30 }, { label: 'Exotic butters and other', share: 29 }], note: 'The stearin share is derived: 71.4% for the two together, less about 30% for cocoa-butter equivalents.' },
            { caption: 'Revenue by market, Q1 FY27 (company presentation)', parts: [{ label: 'Exports', share: 60 }, { label: 'India', share: 40 }] },
        ],
        customers: ["**Global chocolate and confectionery makers**: Ferrero, Mondelez, Mars, Hershey, Nestlé and Barry Callebaut, who approve each supplier over three to four years.", "**Specialty-fat companies** such as AAK, Fuji Oil and Olam, which buy its fats as ingredients even though they also make their own.", "**Cosmetics companies** such as L'Oréal and The Body Shop, buying exotic butters."],
        difficulty: { level: 'High', text: "The chemistry is known, but the supply chain is not: seeds are collected by forest communities in Chhattisgarh, Madhya Pradesh and Maharashtra and bought through 8–9 subsidiaries in West Africa, once a season. Each fat is formulated to a customer's recipe and takes three to four years to be approved." },
        moat: "Hard-to-copy sourcing from thousands of forest villages (CARE calls it ‘a competitive edge’) and long customer approvals make it sticky; it says prices have been ‘largely stable’ through commodity swings. The weakness is that part of its sourcing runs through a promoter-owned company, and several customers can make these fats themselves.",
        salesDrivers: ["**Capacity**: fractionation rises to about 52,000 t in Q3 FY27, and a ₹460cr Raipur and Burkina Faso programme should roughly double processing by FY29.", "**Customer approvals**: new chocolate makers and new products approved each year; volume, not price, drove about 85% of Q1 growth.", "**Cocoa-butter equivalents' share of the mix**, which lifted the margin from 16% in FY24 to 26–27%.", "**Chocolate makers' demand for alternatives**: high cocoa prices pushed adoption, though the company says its prices bear ‘no relation’ to cocoa's.", "**Brazil tolling** with Dekel, ramping up over two to four quarters for a processing fee."],
        inputs: "**Sal seed, mango kernel, shea nuts and butter, and imported palm mid-fraction**, bought once a season (sal and mango in May–July, shea in October–November); imported seeds and butters are 50–60% of the raw material. Materials were 53% of sales in FY26.",
        costEffect: "**Mostly passed on, with a lag.** It buys a year's seeds in season, so cost is locked for the year, and customer contracts of 9–12 months reset to new costs on renewal. Freight and containers were the main pressure in Q1 FY27, cutting the gross margin to 43.6%. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (26% to 21%). **What happened:** there is no Indian price index for forest seeds. Its margin rose from 16% in FY24 to 24% in FY25 and 26% in FY26 (Screener) because the mix moved to cocoa-butter equivalents, not because inputs got cheaper; it has held 25–28% for five quarters.",
        competitors: [{ name: 'AAK and Fuji Oil', note: 'Global specialty-fat makers with far larger ranges; also Manorama customers.' }, { name: 'Bunge Loders Croklaan and Olam', note: 'Large fat and shea processors with their own West African sourcing.' }, { name: 'Cocoa butter itself', note: 'The product it replaces; high cocoa prices help, lower ones reduce the pull to switch.' }],
        position: "**A leading Indian supplier of sal- and shea-based cocoa-butter equivalents to the global chocolate majors**; it does not disclose market share.",
        money: "Net debt was **₹262cr** on Screener at March 2026; after the ₹500cr share sale at ₹1,470 in July 2026 it holds net cash, and says no more equity is needed. FY27 capex is ₹225–250cr. Seasonal seed buying ties up a year of stock (a 340-day cash cycle). CARE upgraded it to A+ in March 2026. Promoters hold **54.3%**, down from 57.3% in September 2023 and diluted further by the share sale; no pledge was found.",
        watch: ["Recovery of the ₹20.64cr customs payment from the supplier.", "Related-party purchases falling.", "The Raipur and Burkina Faso plants commissioning in Q3 FY28."],
        charts: foodProductsCharts['Manorama Industries'],
    },
    {
        company: 'Avanti Feeds',
        inShort: ["**India's largest shrimp-feed maker** (about 51–53% share, five plants in Andhra Pradesh and Gujarat) and a shrimp processor-exporter; Thailand's Thai Union owns 24.21% and provides technical support.", "**Good:** feed volume grew 17% in Q1 FY27 and it holds ₹1,687cr of net cash. **Bad:** the feed margin fell from 18.8% to 7.5% in a year as fish meal doubled, Andhra Pradesh now has a say in feed prices, and its chairman was paid ₹52.1cr in FY26.", "**Verdict: wait.** A dominant, cash-rich franchise at the bottom of its cost cycle; wait for fish meal to ease."],
        tagline: "India's biggest shrimp-feed maker, selling to Andhra Pradesh and Gujarat farmers, with a shrimp processing and export arm selling to the US, Europe and Asia.",
        revenue: '₹6,066cr (FY26, consolidated)',
        products: [
            { name: 'Shrimp feed', text: "Pellet feed for farmed shrimp from five plants (775,000 t of capacity, about 73% used); 562,060 t sold in FY26 and **82% of Q1 FY27 sales**. It also runs a hatchery selling baby shrimp." },
            { name: 'Shrimp processing and export', text: "Avanti Frozen Foods buys farmed shrimp, then freezes, cooks and breads it for export; 16,976 t in FY26 (₹1,689cr of revenue) at a 13–16% margin. A new 7,000 t plant is being built at Kakinada." },
            { name: 'New lines', text: "Pet food under the Avant Furst brand (₹1.8cr of Q1 sales, imported from Thailand until a ₹175cr plant is built near Hyderabad), fish feed, and an investment in Ecuador." },
        ],
        revenueText: "**Shrimp feed is about 82% of sales** and processing about 18% (Q1 FY27). Of processed-shrimp sales, **North America took 62.6%** in Q1 FY27 (83.4% in FY24), Asia 20.6% and Europe 16.3%. Treasury income is large too: ₹199cr of other income in FY26 from about ₹1,262cr of investments and cash.",
        mixes: [
            { caption: 'Sales by business, Q1 FY27 (company presentation)', parts: [{ label: 'Shrimp feed', share: 82 }, { label: 'Shrimp processing', share: 18 }] },
            { caption: 'Processed-shrimp sales by destination, Q1 FY27 (company presentation)', parts: [{ label: 'North America', share: 63 }, { label: 'Asia', share: 21 }, { label: 'Europe', share: 16 }] },
        ],
        customers: ["**Shrimp farmers in Andhra Pradesh and Gujarat**, buying through dealers largely for cash or in advance, so it collects in about 9 days.", "**Importers, retailers and food companies** in the US, Europe and Asia buying its frozen and value-added shrimp.", "**Pet owners** (new), through its Avant Furst brand."],
        difficulty: { level: 'Medium', text: "Feed mills are not costly, but consistent shrimp-feed formulas, Thai Union's technical know-how, a dense dealer network and decades of farmer trust are hard to copy. Export processing needs US and EU plant approvals and passes constant residue tests." },
        moat: "Half the Indian market, a Thai Union tie-up and farmer loyalty give it scale and low cost. The weakness is pricing: the state government has a say in feed prices, and management must balance farmers' ability to pay, so costs pass through slowly.",
        salesDrivers: ["**Shrimp farming volume**: Indian shrimp production and exports are at records; feed volume grew 17% in Q1 FY27 and the FY27 target was raised to 585,000 t.", "**Feed prices**: raised in February 2026 and by about 10% in June, but the Andhra Pradesh committee designing a cost-linked formula now shapes future rises.", "**US demand and duties**: the final anti-dumping rate for its exports was set at 5.53% in September 2026; a US tariff refund of $15–20m waits 12–18 months on duty reviews.", "**Value-added processing**: cooked, breaded and ready-to-eat products, which earn above-market margins; the FY27 export target is about 19,000 t.", "**Treasury income** of about ₹200cr a year, which cushions profit."],
        inputs: "**Fish meal, soybean meal and wheat flour for feed; farmed shrimp for processing.** Fish meal cost it ₹93 a kilo in Q1 FY26, ₹153 in Q1 FY27 and ₹225 on the spot market by August 2026; soybean meal went from ₹40 to ₹58 (₹71 by August). Materials were 71% of sales in FY26.",
        costEffect: "**Not protected in the short run.** It raises feed prices periodically, but with a lag and under political pressure in Andhra Pradesh, and management expects Q2 FY27 to be another ‘pain point’. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (12% to 5%). **What happened:** there is no Indian wholesale index for fish meal to chart; on the company's figures fish meal cost about 65% more and soybean meal about 45% more than a year earlier, feed profit fell from about ₹13,100 a tonne in FY26 to about ₹6,100 in Q1 FY27, and the group operating margin fell from 13% to 6% (Screener, June 2025 to June 2026).",
        competitors: [{ name: 'CP Aquaculture, Growel and The Waterbase', note: 'The other large Indian shrimp-feed makers, well behind Avanti in share.' }, { name: 'Devi Sea Foods, Sandhya Aqua and Apex', note: 'Andhra Pradesh shrimp exporters; the two examined firms got US anti-dumping rates of 4.04% and 7.01%.' }, { name: 'Ecuador, Vietnam and Indonesia', note: 'Rival shrimp-exporting countries; Ecuador overtook India as the top US supplier in October 2025.' }],
        position: "**India's largest shrimp-feed maker with about 51–53% of the market**, and a mid-sized shrimp exporter.",
        money: "Net cash of **₹1,687cr** on Screener at March 2026, with borrowings of only ₹13cr and treasury investments of ₹1,262cr. Capex is small (about ₹80cr in FY26) and funded internally, plus about ₹175cr for pet food. 62% of operating profit turned into operating cash over five years. Its chairman was paid ₹52.1cr in FY26, and ₹420.2cr of sales went to unnamed ‘entities over which KMP has significant influence’. Promoters hold **43.2%**, steady, with no pledge; Thai Union holds another 24.21%.",
        watch: ["Fish-meal prices after the monsoon and the Andhra Pradesh pricing formula.", "The feed margin back above 12%.", "An explanation of the ₹420cr related-party sales."],
        charts: foodProductsCharts['Avanti Feeds'],
    },
    {
        company: 'Ganesh Consumer Prod',
        inShort: ["**A Kolkata packaged-staples brand** (atta, sooji, maida, besan, sattu and spices) with about 93% of branded sales in West Bengal; listed in September 2025. It sold its Hyderabad contract-milling unit on 1 October 2026.", "**Good:** a record 11.2% margin in Q1 FY27, a 1-point gain in value share, net cash and a payout of about half its profit. **Bad:** revenue fell 7% in Q1 after only 2.5% growth in FY26, and only ₹2.46cr of ₹45cr of IPO money for a Darjeeling plant has been spent.", "**Verdict: wait.** A well-run regional brand that stopped growing after its IPO; wait for volume to return."],
        tagline: "West Bengal's leading packaged wheat-products brand, milling atta, sooji, maida and besan and selling them through local shops on cash terms.",
        revenue: '₹871cr (FY26, standalone)',
        products: [
            { name: 'Atta (whole-wheat flour)', text: "Its ‘carrier’ product, 32% of Q1 FY27 branded sales (34% in FY23), and the most price-competitive; Emami's entry in FY26 started a price war." },
            { name: 'Value-added flours', text: "Sooji, maida, besan, sattu and dalia, **59% of branded sales** and higher-margin; it says it is top two in besan and sattu in West Bengal." },
            { name: 'Emerging foods', text: "Spices, instant mixes, ethnic flours and soya chunks (9%), with snacks and sweets launching from its new Amta plant in Q3 FY27; spices are targeted at 11–12% of revenue in three years." },
            { name: 'B2B and job work', text: "Bran and bulk flour sold to other businesses (cut back on purpose, −17.9% in Q1). The Hyderabad mill, which milled under contract for one unnamed large FMCG company (₹12.5cr of FY26 revenue, about 1.4%), was sold to Megacity Flour Mills on 1 October 2026 for ₹32.5cr, about 2.7 times its book value; the money goes to capex in the East." },
        ],
        revenueText: "Of branded sales in Q1 FY27, **value-added flours were 59%**, atta 32% and emerging foods 9%. **West Bengal is about 93% of branded sales**, Jharkhand 3%, Odisha 2% and the rest of the East 2%; the target is 18–20% outside West Bengal in two to three years. Revenue fell 7.1% in Q1 FY27 (branded −4.1%, B2B −17.9%).",
        mixes: [
            { caption: 'Branded sales by category, Q1 FY27 (company presentation)', parts: [{ label: 'Value-added flours', share: 59 }, { label: 'Atta', share: 32 }, { label: 'Emerging foods', share: 9 }] },
            { caption: 'Branded sales by state, Q1 FY27 (company presentation)', parts: [{ label: 'West Bengal', share: 93 }, { label: 'Jharkhand', share: 3 }, { label: 'Odisha', share: 2 }, { label: 'Rest of East', share: 2 }] },
        ],
        customers: ["**West Bengal households** buying through 3.5 lakh+ local shops served by 1,000+ distributors on a cash-and-carry basis, so receivables are about 6 days.", "**Households in Jharkhand, Odisha and the rest of the East**, where it is trying to grow.", "**Bulk buyers of bran and flour.** Contract milling for one large FMCG company at Hyderabad ended with the sale of that mill on 1 October 2026."],
        difficulty: { level: 'Low', text: "Milling atta and besan is simple, and investors on its own call said the products have ‘no entry barrier’. Its edge is owning mills close to its market, a 70-broker wheat and gram buying network, and a brand West Bengal shoppers have known since 1936." },
        moat: "The largest wheat-products brand in West Bengal (a Technopak finding cited by the company), which held share and margin through Emami's price war. The weakness is that almost all sales are in one state and cheap wheat lets unbranded mills undercut it.",
        salesDrivers: ["**Volume in West Bengal**: the packaged-atta market shrank 10.6% quarter on quarter in Q1 FY27 after a heatwave, LPG shortages and elections; management targets 7–8% volume growth.", "**Mix**: value-added flours, spices, soya chunks and new snacks and sweets carry higher margins.", "**New states**: from 7% to 18–20% of branded sales in two to three years.", "**Distribution**: 300–400 new distributors and 5 lakh outlets targeted.", "**Wheat prices**: cheap wheat helps margins but lets unbranded rivals cut prices; the GST cut did nothing for staples, already at 5%."],
        inputs: "**Wheat, chana (gram) and spices**, bought through brokers in Uttar Pradesh, Madhya Pradesh, Rajasthan, Punjab and Maharashtra, plus packaging and LPG for roasting sattu. It stocked wheat cheaply in Q1 FY27. Materials were 75% of sales in FY26, the highest share in the sector with Venky's.",
        costEffect: "**Partly passed on.** Staples prices follow wheat, so it adjusts prices, and timely buying helps; but it absorbed the 2026 LPG price spike rather than pass it on. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (10% to 2%). **What happened:** India's wholesale price index for wheat flour rose only 4% over two years (100 in Q1 FY25 to 104), and its margin moved from 12.7% to 11.1%; wheat and gram were 8–10% cheaper than a year earlier in late 2025, which helped margins but let unbranded mills undercut its prices.",
        competitors: [{ name: 'Emami', note: 'Entered atta, maida and sooji in West Bengal in FY26 and started a price war.' }, { name: 'ITC Aashirvaad, Fortune and Patanjali', note: 'National atta brands with far larger advertising budgets.' }, { name: 'Unbranded local mills', note: 'Undercut on price when wheat is cheap.' }],
        position: "**The largest wheat-products brand in West Bengal and top two in besan and sattu there** (company citing Technopak); Nielsen showed a 1-point value-share gain in Q1 FY27.",
        money: "Net cash of **₹104cr** on Screener at March 2026; by June the company put it at ₹17.2cr after stocking wheat. Of the ₹119.7cr net IPO proceeds, ₹60cr repaid debt and ₹49.5cr sits idle in deposits because the Darjeeling plant has slipped to late FY28. Payout was 47% in FY26. It lent ₹26.3cr to promoter companies before the IPO, since repaid. ICRA's A+ rating was withdrawn at the company's request in June 2026. Promoters hold **65.7%**, up from 64.1% in September 2025, with no pledge.",
        watch: ["Volume back to +7–8% in H1 FY27.", "States outside West Bengal and spices gaining.", "The Darjeeling plant actually starting."],
        charts: foodProductsCharts['Ganesh Consumer Prod'],
    },
    {
        company: 'Venkys India',
        inShort: ["**The listed arm of the VH Group, India's largest integrated poultry group**: chicks, broilers, processed chicken and specific-pathogen-free eggs, plus soybean crushing and animal medicines, in north and west India.", "**Good:** animal medicines (₹99cr of segment profit) and oilseed (₹54cr) now out-earn poultry, and FY26 profit rose to ₹139cr. **Bad:** a third of sales go to related parties, receivables include dues from group firms, there was no Q1 call, and Q1 profit halved from Q4 as broiler prices fell.", "**Verdict: wait.** A better earnings mix, but poor disclosure; wait for lower group receivables and regular calls."],
        tagline: "A poultry, soybean-crushing and animal-health company from Pune, part of the Venky's group that breeds most of India's broiler and layer chicks.",
        revenue: '₹3,727cr (FY26, standalone)',
        products: [
            { name: 'Poultry', text: "Day-old broiler chicks (11.46 crore in FY26) and layer chicks (4.57 crore), grown broilers (8.69 crore kg), processed chicken sold through about 14 Venky's Xpress outlets, and specific-pathogen-free eggs for vaccine makers. ₹1,897cr of FY26 revenue, but only ₹65.5cr of segment profit." },
            { name: 'Oilseed', text: "Crushes soybean into oil and de-oiled cake (a feed ingredient) at three units, running at 65–70% of capacity; ₹1,554cr of FY26 revenue and ₹54.4cr of profit, up from ₹19.1cr." },
            { name: 'Animal health products', text: "Vaccines, medicines, feed supplements and natural growth promoters for poultry and livestock; about 24–25% share in its product lines. ₹392cr of FY26 revenue and ₹99.0cr of profit, now its biggest earner at about a 25% margin." },
        ],
        revenueText: "**Poultry brought about half of FY26 segment revenue**, oilseed about 40% and animal health about 10%; but **animal health earned 45% of segment profit**, poultry 30% and oilseed 25%. **About a third of revenue (₹1,243cr) was sold to related parties**, ₹753cr of it to the unlisted parent.",
        mixes: [
            { caption: 'Segment revenue, FY26 (annual report)', parts: [{ label: 'Poultry', share: 49 }, { label: 'Oilseed', share: 40 }, { label: 'Animal health', share: 10 }] },
            { caption: 'Segment profit, FY26 (annual report)', parts: [{ label: 'Animal health', share: 45 }, { label: 'Poultry', share: 30 }, { label: 'Oilseed', share: 25 }] },
        ],
        customers: ["**Poultry farmers and traders** buying chicks and live birds, and **group companies**, especially the unlisted parent, which bought ₹753cr in FY26.", "**Feed makers and edible-oil buyers** taking its soybean meal and oil.", "**Poultry and livestock farms and vets** buying animal medicines through a national distribution network; vaccine makers buying its special eggs."],
        difficulty: { level: 'Medium', text: "Poultry breeding needs decades of genetics work, which the group owns; growing broilers does not. Animal medicines need approvals and a vet network. Soybean crushing is a simple commodity process where capacity use decides profit." },
        moat: "The group's breeds are India's best-selling, and chicks reach its own broiler farms at cost; animal health holds 24–25% of its product lines. The weakness is that broilers earn whatever the market pays, with prices moving ±30% within a quarter, and much of the value sits in unlisted group companies.",
        salesDrivers: ["**Broiler and chick prices**: broilers fetched ₹102.67 a kilo in Q4 FY26 against a cost of about ₹85–89, then fell from mid-May 2026; summer heat and religious calendars cut demand.", "**Animal health growth**: guided at double digits with a 22–23% segment margin.", "**Oilseed capacity use**: from 65–70% towards about 80% in FY27.", "**Layer chicks**: from 4.57 crore towards 5 crore+.", "**Group demand**: a third of sales go to related companies."],
        inputs: "**Maize (about 60% of feed) and soybean meal for poultry feed; soybeans for crushing.** The FY26 average feed cost was ₹31,658 a tonne. Maize prices follow ethanol demand and soybean prices follow crude and edible oil. Materials were 75% of sales in FY26.",
        costEffect: "**Not protected in poultry.** Broiler profit is simply the market price minus a production cost of about ₹85–89 a kilo; oilseed earns a crushing margin plus stock gains. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 8 points (5% to a loss of about 3%). **What happened:** India's wholesale price index for maize was only 3% higher than three years earlier (100 in Q1 FY24 to 103), while its margin rose from 3.2% to 6.2%; broiler prices and the growth of animal health and oilseed, not feed costs, moved the margin, which swung from −4% to 12% within FY26.",
        competitors: [{ name: 'Suguna Foods', note: 'India’s largest integrated broiler company, strongest in the South.' }, { name: 'Regional integrators and small farmers', note: 'Set local broiler prices; Godrej Agrovet is exiting live-bird trading.' }, { name: 'Hester Biosciences and multinational animal-health firms', note: 'Compete in poultry vaccines and medicines.' }, { name: 'Soybean crushers in Madhya Pradesh and Maharashtra', note: 'Many commodity plants competing on capacity use.' }],
        position: "**Part of India's largest integrated poultry group, whose breeds are the country's best-selling**; about 24–25% share in its animal-health product lines and one of Asia's largest producers of specific-pathogen-free eggs.",
        money: "Net debt of **₹76cr** on Screener at March 2026 (borrowings ₹167cr against reserves of ₹1,582cr); CARE rates it A+. Capex is low, with no major poultry or oilseed spending planned. Receivables of ₹544–556cr include dues from group companies, which CARE names as a downgrade trigger. 51% of operating profit turned into operating cash over five years. The managing director is paid by the parent. Investors have asked for a buyback and an animal-health demerger. Promoters hold **56.1%**, unchanged, with no pledge.",
        watch: ["Receivables from group companies falling.", "A return to regular calls and presentations.", "Any move on a buyback or animal-health demerger."],
        charts: foodProductsCharts['Venkys India'],
    },
    {
        company: 'Bikaji Foods',
        inShort: ["**India's third-largest ethnic-snacks maker and the largest maker of Bikaneri bhujia**, also selling namkeen, packaged sweets, papad and western snacks; 72% of sales come from Rajasthan, Bihar and Assam.", "**Good:** a 24-day cash cycle, 20% return on capital, net cash, and focus states growing 18.9%. **Bad:** Q1 FY27 growth was 12.5% against a mid-to-high-teens promise, costs forced two price rises, and the ₹50cr PLI subsidy (about 1.5 points of margin) ends after FY27.", "**Verdict: wait.** A clean brand, but the price needs far more growth than it is showing."],
        tagline: "A Bikaner snack maker selling bhujia, namkeen, sweets and papad, strongest in Rajasthan, Bihar and Assam and expanding into North and South India.",
        revenue: '₹2,994cr (FY26, consolidated)',
        products: [
            { name: 'Ethnic snacks', text: "Bikaneri bhujia and other namkeen, sold in family packs and ₹5–10 impulse packs. **76% of Q1 FY27 sales**, growing 11.4%." },
            { name: 'Western snacks', text: "Chips, puffs and similar snacks, about 9% of sales and growing 21.3% in Q1 FY27, but only about 1.1% of the national market." },
            { name: 'Packaged sweets and papad', text: "Packaged sweets and gift packs (about 6% of sales) and handmade papad (about 4.5%), where it is India's second-largest maker; papad fell 6.5% in a wet Q1." },
            { name: 'Retail and new ventures', text: "The Hazelnut Factory premium sweet shops (28 stores, ₹38cr of Q1 revenue, +72%), a US arm, frozen foods for export, a bakery venture and a Nepal joint venture; most of these subsidiaries still lose money." },
        ],
        revenueText: "**Ethnic snacks are about three-quarters of sales.** By region, **core states (Rajasthan, Bihar, Assam) were 72.4% of Q1 FY27 sales**, focus states (Uttar Pradesh, Delhi, Punjab, Haryana, Karnataka, Chhattisgarh) 14.3%, other states 9% and exports 4.3%. Family packs are 58.6% of sales and ₹5–10 impulse packs 41.4%. E-commerce and quick commerce are about 3%.",
        mixes: [
            { caption: 'Sales by category, Q1 FY27 (company presentation)', parts: [{ label: 'Ethnic snacks', share: 76 }, { label: 'Western snacks', share: 9 }, { label: 'Packaged sweets', share: 6 }, { label: 'Papad', share: 5 }, { label: 'Other', share: 4 }] },
            { caption: 'Sales by region, Q1 FY27 (company presentation)', parts: [{ label: 'Core states', share: 72 }, { label: 'Focus states', share: 14 }, { label: 'Other states', share: 10 }, { label: 'Exports', share: 4 }] },
        ],
        customers: ["**Households buying through local shops**: about 3.7 lakh directly served outlets and 14.5 lakh in total reach; it aims for about 5 lakh direct outlets in three years.", "**Festive and gift buyers** for sweets and gift packs, concentrated in the September and December quarters.", "**Supermarkets, e-commerce and quick commerce** (about 3% of sales, with quick commerce doubling), and Indian grocers abroad."],
        difficulty: { level: 'Low', text: "Namkeen is easy to make and Uttar Pradesh alone has about 200 listed snack brands. The edge is local: moth dal and milk sourced around Bikaner, a bhujia recipe tied to the town, and a dense distributor network in its home states." },
        moat: "The brand is synonymous with bhujia in its home states, and fast-moving stock keeps working capital tiny. The weakness is that outside those states it is one of many brands, and ICRA notes competition stops it passing on costs ‘immediately and fully’.",
        salesDrivers: ["**Focus states**: up 18.9% in Q1 FY27, with Uttar Pradesh up 37%; management targets 20%+ growth there and 13–15% in core states.", "**Distribution**: about 17,000 new directly served shops in Q1, towards about 5 lakh in three years.", "**The GST cut** on namkeen from 12% to 5% in September 2025, which revived the category and favours organised brands.", "**Price and grammage**: about 3% in April and a second rise since; revenue per kilo rose from about ₹197 to about ₹205.", "**Festive demand** for sweets and gift packs, targeted to grow 12–13% and 17–18% this festive season."],
        inputs: "**Edible oil (palm and others), pulses (moth dal, chana, moong), flour, milk for sweets, and packaging laminates and cartons.** The company's own edible-oil index stood at 1.63 times its base period in Q1 FY27, laminate costs went from ₹190–200 to ₹260–270 at the peak, and cartons rose about 19%. Materials were 56% of sales in FY26; power, fuel and factory costs another 13%.",
        costEffect: "**Partly passed on, about a quarter late.** It raises prices and trims pack weights, but price rises must be timed around the festive gifting season, so none is planned until after Diwali 2026. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (14% to 8%). **What happened:** there is no single price index for its basket of oil, pulses and packaging. Its operating margin went from 9% in FY22 to 17% in FY24 and back to 13–14% in FY25–FY26 (Screener), as edible-oil and packaging costs fell and then rose again and advertising increased; Q1 FY27 was 13%, including about ₹12.5cr of PLI subsidy.",
        competitors: [{ name: 'Haldiram’s', note: 'The national leader in namkeen, much larger and present everywhere.' }, { name: 'PepsiCo (Kurkure, Lay’s) and ITC (Bingo)', note: 'Dominate western snacks, where Bikaji has about 1.1%.' }, { name: 'Regional and local brands', note: 'About 200 listed brands in Uttar Pradesh alone; Balaji and Gopal in the West.' }],
        position: "**The largest maker of Bikaneri bhujia, India's third-largest ethnic-snacks company and second-largest handmade-papad maker**; it says it leads the family-pack segment.",
        money: "Net cash of **₹17cr** on Screener at March 2026; borrowings are ₹299cr against cash and deposits. FY27 capex is under ₹100cr (a new sweets plant and an automated warehouse in Bikaner), plus about ₹15cr into a Nepal joint venture; plants run at about 48% of capacity, so no big expansion is needed. 65% of operating profit turned into operating cash over five years. Promoters hold **73.9%**, down from 75.2% in September 2023.",
        watch: ["Festive-quarter growth of 15%+ with margin at 13.5% or more.", "The plan to replace the PLI subsidy after FY27.", "Losses at the subsidiaries shrinking."],
        charts: foodProductsCharts['Bikaji Foods'],
    },
    {
        company: 'Vintage Coffee',
        inShort: ["**A Hyderabad maker of spray-dried instant coffee** for about 20 brand owners, mainly in West Africa, Russia and South-East Asia, on cost-plus terms; building a ₹550cr freeze-dried coffee plant.", "**Good:** revenue grew 58% in Q1 FY27 at a 19.6% margin, capacity doubled to 11,000 t and is full, and it keeps about 98% of customers. **Bad:** free cash has been negative in four of five years, the new plant needs a ₹300cr foreign-currency loan, promoters own only 34.65% (they released their pledge in October 2026), and its top five or six customers are about half of revenue.", "**Verdict: wait.** Fast growth, funded by others; wait for a year of positive cash and the plant on time."],
        tagline: "A contract maker of instant coffee and chicory for brand owners abroad, earning a fixed profit per kilo and expanding into freeze-dried coffee.",
        revenue: '₹553cr (FY26, consolidated)',
        products: [
            { name: 'Spray-dried and agglomerated instant coffee', text: "Coffee made to each customer's blend, from a plant expanded from 6,500 t to 11,000 t in March 2026 and now full; 1,856 t sold in Q1 FY27." },
            { name: 'Consumer packs', text: "Jars, tins and sachets packed for customers, 55% of Q1 FY27 sales against about 35% a year before, which lifts profit per kilo; packing capacity is 5,000 t." },
            { name: 'Chicory', text: "Made by Delecto Foods (now merged in), 2,000 t a year and ₹40–46cr of revenue." },
            { name: 'Freeze-dried coffee (from FY28)', text: "A 5,500 t plant in Telangana costing ₹550cr (₹150cr spent), with trials by June 2027; letters of intent cover 70–80% of it, and it should earn 20–32% more a kilo." },
        ],
        revenueText: "Revenue comes from about 19–20 customers, **90% of them brand owners**; the **top five or six are 45–50% of revenue**. By market in Q1 FY27 (approximate shares from the call): **West Africa about 30%**, Russia and the CIS 22%, South-East Asia 20%, Central America 15%, Europe 10% and India 5%. Revenue per kilo moves with coffee prices, which are passed through.",
        mixes: [
            { caption: 'Revenue by market, Q1 FY27 (company call, approximate)', parts: [{ label: 'West Africa', share: 30 }, { label: 'Russia and CIS', share: 22 }, { label: 'South-East Asia', share: 20 }, { label: 'Central America', share: 15 }, { label: 'Europe', share: 10 }, { label: 'India', share: 5 }], note: 'Shares as stated on the call; they add to slightly over 100.' },
            { caption: 'Sales by format, Q1 FY27 (company call)', parts: [{ label: 'Consumer packs', share: 55 }, { label: 'Bulk', share: 45 }] },
        ],
        customers: ["**Coffee brand owners** in West Africa, Russia and the CIS, South-East Asia and Central America selling under their own names; customers cannot easily move a blend to a rival.", "**Traders** (about 10% of customers) buying bulk instant coffee.", "**Five existing and two new customers** that have signed letters of intent for freeze-dried coffee."],
        difficulty: { level: 'High', text: "Instant-coffee and especially freeze-dried plants are capital-heavy and run round the clock; each blend is developed for the customer and approved before switching suppliers." },
        moat: "Custom blends and about 98% customer retention, on a cost-plus model with profit fixed at about ₹157 a kilo. The weakness is scale (11,000 t in a world market of about a million tonnes), customer concentration and markets with political and payment risk.",
        salesDrivers: ["**Filling the new capacity**: about 95% of 11,000 t in FY27, for revenue of about ₹850–900cr.", "**Pack mix**: more consumer packs lift profit per kilo.", "**Freeze-dried coffee** from Q2 FY28, about 2,400–2,600 t in its first year, with a second line (₹370–400cr) planned for FY29–30.", "**Coffee prices**, reset with customers each quarter: they move revenue, not profit per kilo.", "**Its markets**: Russia and West Africa bring growth but carry sanctions and payment risk."],
        inputs: "**Green Robusta coffee** (about 80% bought in India, 20% imported, priced off London), bought back-to-back against orders with 40–45 days of stock; plus tins, aluminium and glass packaging. Materials were 73% of sales in FY26.",
        costEffect: "**Passed on by contract.** Prices are reset with customers each quarter, so bean costs pass through within about a quarter, and packaging rises in 2026 were passed on. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (18% to 11%). **What happened:** India's wholesale price index for coffee rose 56% over three years (100 in Q1 FY24 to 156) and its margin went from 23.8% to 19.9%; profit per kilo held near ₹157, so the percentage fell because dearer beans inflated revenue, not because it absorbed costs.",
        competitors: [{ name: 'CCL Products', note: 'About seven times its capacity; an analyst put CCL’s profit at about ₹137 a kilo against Vintage’s ₹157.' }, { name: 'Global contract coffee makers', note: 'In Vietnam, Brazil and Europe, competing for the same private-label contracts.' }, { name: 'Tata Consumer', note: 'Another Indian supplier of bulk and private-label instant coffee.' }],
        position: "**A small but fast-growing Indian contract maker of instant coffee**, with 11,000 t of capacity in a world market of about a million tonnes.",
        money: "Net debt of **₹38cr** on Screener at March 2026, set to peak at ₹400–450cr in FY28 with a ₹300cr foreign-currency loan for the freeze-dried plant. It has raised equity repeatedly, and seeks approval for promoter warrants at ₹164 (about ₹69cr). Free cash has been negative in every year but FY23; operating cash is promised positive in FY27. It published no investor presentation for the last two quarters. Promoters hold **34.65%**, down from 46.6% in September 2023 after share issues to others, and had pledged about 26% of their holding; they released all of it (1.31cr shares, about 8.9% of the company) on 6–8 October 2026.",
        watch: ["Positive operating cash for FY27, as promised.", "Freeze-dried trials by June 2027.", "Whether the promoters' warrants (42 lakh at ₹164) are paid up in full."],
        charts: foodProductsCharts['Vintage Coffee'],
    },
    {
        company: 'Hindustan Foods',
        inShort: ["**India's largest FMCG contract manufacturer**: 42 plants in 12 states making detergents, foods, drinks, ice cream, medicines and footwear for large brand owners, mostly in dedicated plants on long take-or-pay contracts.", "**Good:** Q1 FY27 profit rose 33% to a record, newly signed projects more than doubled to ₹340cr, and it guides ₹200–220cr of profit in FY27. **Bad:** free cash has been negative every year for five years, debt has tripled since FY22, footwear lost about ₹6cr in Q1, and it leans on ‘adjusted’ returns that analysts could not reconcile.", "**Verdict: wait.** Profit is growing, but the balance sheet is paying for it; wait for cash to match profit."],
        tagline: "A contract manufacturer that builds and runs factories for India's big consumer-goods brands, earning a negotiated return on the capital it invests.",
        revenue: '₹4,251cr (FY26, consolidated)',
        products: [
            { name: 'Home and personal care', text: "Detergent powders, bars and liquids, soaps and similar products from 11 plants (about 3 lakh tonnes a year); new detergent lines at Lucknow and Silvassa in FY27." },
            { name: 'Food, drinks and ice cream', text: "12 food and beverage plants and 5 ice-cream plants. It aims to be India's largest independent bottler by March 2027 (water and juice at Aurangabad and in the South), and is adding Greek yogurt in Goa and a second phase at the Panipat ice-cream plant." },
            { name: 'Healthcare', text: "Over-the-counter medicines and Ayurvedic products at two plants, including the former Reckitt site at Baddi, which holds US FDA approval." },
            { name: 'Footwear', text: "12 plants with 72 lakh pairs a year of capacity, about ₹500cr of FY26 sales, guided to ₹700–800cr in FY27; prices are fixed a season ahead, so it lost money in Q1 when polymer and freight costs jumped." },
        ],
        revenueText: "**Dedicated plants (one customer takes at least 75% of capacity) brought 79% of Q1 FY27 revenue and 87% of operating profit**; shared multi-customer plants the rest. The company does not name customers or give revenue by business, saying segment data would be a ‘proxy’ for its customers. Reported revenue includes materials passed through; a planned switch to reporting only the conversion fee will cut sales but not profit.",
        mixes: [
            { caption: 'Revenue by operating model, Q1 FY27 (company presentation)', parts: [{ label: 'Dedicated plants', share: 79 }, { label: 'Shared plants', share: 21 }] },
        ],
        customers: ["**Large FMCG brand owners**: the company does not name them, but its plants and acquisitions have been linked to Hindustan Unilever, Reckitt and PepsiCo.", "**Footwear brands** buying shoes made to their designs, on prices fixed six to twelve months ahead.", "**Export customers** such as Dr. Scholl's products for the UK, EU, Australia, New Zealand and Japan; a US personal-care order is on hold because of tariffs."],
        difficulty: { level: 'Medium', text: "Making detergent or ice cream is well understood; the hard part is the trust to run a brand's plant for eight years or more, the approvals (the Baddi site's US FDA status) and the capital to build dedicated plants at a customer's request." },
        moat: "Dedicated plants on take-or-pay contracts averaging 8+ years mean ‘ROCE is protected irrespective of the capacity utilization’; the MD says it has become like an airline the FMCG industry cannot do without. The weakness is that returns are negotiated (16–22% before tax), and a few unnamed customers dominate.",
        salesDrivers: ["**Brand owners outsourcing more**: ₹340cr of new projects signed in Q1 FY27, more than ₹500cr to start this year, and a disclosed pipeline of about ₹1,000cr.", "**New plants coming on**: Greek yogurt (Q3), Panipat ice cream phase 2 and bottled water (Q4), detergents at Lucknow and Silvassa.", "**Customers' own sales volumes**, which set the output of dedicated plants; management was ‘more bullish’ on home and personal care in Q1.", "**Footwear recovery**: capacity 80–90% booked for H2 FY27 and new-season prices being renegotiated.", "**Its own capital**: debt kept near 1 times equity, and each project must earn at least 18% on capital."],
        inputs: "**Customers' raw materials and packaging (detergent chemicals, oils, milk, sugar, bottles and cartons), plus power, fuel and labour to run 42 plants.** In footwear about half the materials are imported polymers, which rose 50–60% in Q1 FY27 while freight rose four times. Materials were 63% of sales in FY26; power, fuel and factory costs another 20%.",
        costEffect: "**Passed on by contract, except footwear.** Material, packaging and wage rises go straight to customers in most contracts, so gross margin does not matter much; footwear prices are fixed a season ahead, and a 30% rise in Haryana's minimum wage cost about ₹3cr in Q1. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (9% to 3%), but its contracts are built to avoid that. **What happened:** there is no single input index for its range of products. Its operating margin rose steadily from 6% in FY22 to 9% in FY26 (Screener) as dedicated plants filled, and held at 8–9% through the 2026 cost shock.",
        competitors: [{ name: 'Brand owners’ own factories', note: 'The main alternative: every contract competes with the customer building its own plant.' }, { name: 'Regional contract makers', note: 'Smaller manufacturers in single categories, without its range or balance sheet.' }, { name: 'Franchise bottlers such as Varun Beverages', note: 'Relevant as it moves into bottled water and juices.' }],
        position: "**India's largest diversified FMCG contract manufacturer**, with 42 plants across home care, food, drinks, ice cream, healthcare and footwear.",
        money: "Net debt was **₹1,036cr** on Screener at March 2026 (0.88 times equity at June), up from about ₹350cr of borrowings in FY22. More than ₹500cr of projects start in FY27, about half funded by debt. Only 38% of operating profit turned into operating cash over five years, and free cash was negative every year. It pays no dividend. In FY26 it absorbed its promoter's holding company and a unit of a sister firm. Promoters hold **61.8%**, down from 64.9% in September 2023.",
        watch: ["FY27 operating cash above 70% of operating profit.", "Footwear back in profit in H2.", "The switch to reporting only conversion fees."],
        charts: foodProductsCharts['Hindustan Foods'],
    },
    {
        company: 'Freshara Agro',
        inShort: ["**A Tamil Nadu gherkin processor and exporter** working with 4,000+ contract farmers, selling mostly to Russia and Spain; in 2026 it bought Spain's Sarasa pickle brand out of bankruptcy. SME-listed, it reports half-yearly.", "**Good:** revenue has quadrupled since FY24 at a steady 15% margin, and FY26 volume of 43,600 t beat its target. **Bad:** operating cash was −₹57cr in FY26 against ₹38cr of profit, the cash cycle is 328 days, borrowings of ₹180cr equal its net worth, and a third of sales go to Russia.", "**Verdict: wait.** Profits without cash so far; wait until profit turns into cash."],
        tagline: "A contract-farming gherkin processor that brines, bottles and exports pickled cucumbers in bulk and in jars, now with a Spanish plant and brand.",
        revenue: '₹314cr (FY26, standalone)',
        products: [
            { name: 'Gherkins', text: "Pickled cucumbers grown by 4,000+ contract farmers and brined in two plants; 43,600 t worth ₹268cr in FY26, **about 85% of sales**. Most is sold in drums and bulk (71%) to food companies that bottle it; 16% goes in retail jars." },
            { name: 'Vinegar, spices and other pickles', text: "Vinegar, spice preparations and other pickled vegetables, the remaining 15% or so of sales." },
            { name: 'Sarasa (Spain)', text: "Conservas Selectas and the Sarasa brand (founded 1968), bought out of bankruptcy for about ₹41.5cr plus a mortgage; ₹28.75cr of revenue in its first two months at a 4–5% profit margin, with a plant under half used inside the EU tariff wall." },
        ],
        revenueText: "**Gherkins are about 85% of sales.** **Russia is about 33–35% of sales**, up from 18% of exports a year earlier; Spain is second (60+ customers) and the US about 10%. It sells to 100+ customers in 40+ countries. Consolidated FY26 revenue, with two months of Spain, was ₹342cr; the company guides about ₹575cr for FY27, including ₹200cr+ from Spain.",
        mixes: [
            { caption: 'Sales by product, FY26 (company call)', parts: [{ label: 'Gherkins', share: 85 }, { label: 'Vinegar, spices and other pickles', share: 15 }] },
        ],
        customers: ["**Pickle and food companies in Russia, Europe and the US**, buying gherkins in bulk drums to bottle under their own brands; Freshara claims 35–40% of Russia's gherkin imports (unverified).", "**Spanish retailers** buying Sarasa jars.", "**Contract farmers** in South India who grow gherkins at pre-agreed prices."],
        difficulty: { level: 'Low', text: "Brining gherkins is simple; the edge is a large contract-farming base, low Indian costs and export relationships. CRISIL calls its position ‘established’, but there is no evident pricing power." },
        moat: "Scale in India's gherkin exports and a Spanish plant that saves 7–14% EU duty until an India–EU trade deal. The product is a commodity, and its 15–18% margins rest on two good years rather than on evidence of pricing power.",
        salesDrivers: ["**Export volume**: 43,600 t in FY26 against a 35,000 t target; India revenue guided up about 25% in FY27.", "**Spain**: guided to ₹200cr+ of revenue and 8–10% profit margin in FY27.", "**Russia**: about a third of sales, exposed to sanctions, payment and rouble risk.", "**Weather and farm supply**: gherkin yields depend on the monsoon and irrigation; CRISIL flags climate as a key weakness.", "**Working capital**: growth needs stock and credit, not plant; it seeks a ₹400cr borrowing limit."],
        inputs: "**Fresh gherkins from contract farmers at pre-agreed prices, plus acetic acid, vinegar, salt, spices, drums and glass jars.** Packing materials and freight were hit by the Gulf disruption; buying ahead saved it 15–20% on packing. Materials were 54% of sales in FY26; power, fuel and factory costs were 23%.",
        costEffect: "**Partly passed on.** Farm prices are fixed before each crop, and it bought packing materials ahead of the 2026 price spike, but as a bulk commodity exporter it has little room to raise prices. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (15% to 10%). **What happened:** there is no price index for gherkins. Its standalone margin held at 15–17% from FY24 to FY26 (Screener) while revenue quadrupled; the cost that rose was working capital, as stock bought ahead turned operating cash negative.",
        competitors: [{ name: 'Global Green', note: 'The main Indian rival in gherkin exports; Freshara says it is now ‘head to head’ with it.' }, { name: 'Reitzel', note: 'A European pickle maker with Indian gherkin operations that mostly supplies itself.' }, { name: 'Other Indian gherkin exporters', note: 'Many smaller processors in Karnataka and Tamil Nadu.' }],
        position: "**One of India's largest gherkin exporters**, India being the world's largest gherkin exporter; it claims 35–40% of Russia's gherkin imports.",
        money: "Net debt of **₹122cr** on Screener at March 2026 (standalone); consolidated borrowings were ₹180cr against net worth of ₹176cr, and the AGM votes on a ₹400cr borrowing limit. It gave a ₹30cr guarantee for the Spanish company's loans. No capex is planned. Operating cash was negative in FY25 and FY26; management promises positive cash in FY27. Promoter warrants were issued at ₹168 (₹38.9cr). CRISIL rates it BBB (stable). Promoters hold **62.6%**, unchanged, with no pledge disclosed.",
        watch: ["Positive operating cash in H1 FY27.", "The Spanish business reaching an 8% profit margin.", "Inventory days falling well below 282."],
        charts: foodProductsCharts['Freshara Agro'],
    },
    {
        company: 'Mrs Bectors Food',
        inShort: ["**Makes Cremica biscuits and English Oven bread**, supplies buns to India's largest burger chains, and exports biscuits to 70+ countries; most domestic sales are in North India.", "**Good:** revenue grew 16% in Q1 FY27, its fastest in six quarters, with bakery up 17.5% and exports recovering. **Bad:** profit has been flat at ₹140–143cr for three years, the margin has sat at 12–13% for six quarters, and the 14% target has slipped to a Q4 exit rate.", "**Verdict: wait.** Sales are back but the margin is not; wait for the 14% to arrive."],
        tagline: "A Punjab biscuit and bakery company: Cremica biscuits, English Oven bread, burger buns for fast-food chains, and biscuit exports.",
        revenue: '₹2,044cr (FY26, consolidated)',
        products: [
            { name: 'Biscuits', text: "Cremica cookies, creams, crackers and digestives (Coconut, Bourbon and Digestive are its strongest variants), mostly in ₹5 and ₹10 packs (about 65% of biscuit sales), plus exports and army canteen sales. ₹1,235cr in FY26, **about 60% of revenue**." },
            { name: 'Retail bakery', text: "English Oven bread (about 55–56% premium variants) and the clean-label Naturbaked range, a leading premium bread brand in North India, growing in the high teens for four years and now entering Kolkata, Mumbai and Bengaluru." },
            { name: 'Buns for fast-food chains', text: "A long-standing preferred supplier of burger buns to India's largest quick-service restaurant chains; demand turned up in Q1 FY27 after two weak years. Bakery overall was ₹769cr in FY26." },
        ],
        revenueText: "**Biscuits were 62% of FY26 revenue and bakery 38%**; in Q1 FY27 biscuits grew 15.7% and bakery 17.5%. **Exports are about 35% of revenue**, spread across 70+ countries, with the US, South America and Africa each about 20–25% of exports. About 85% of domestic biscuit sales through shops and 80% of English Oven sales come from North India.",
        mixes: [
            { caption: 'Revenue by segment, FY26 (company presentation)', parts: [{ label: 'Biscuits (India, exports, canteens)', share: 62 }, { label: 'Bakery (bread and buns)', share: 38 }] },
        ],
        customers: ["**Households in North India**, buying Cremica in local shops within about 400 km of its Rajpura plant and English Oven in shops, supermarkets and quick commerce (up 58% in Q1).", "**Fast-food chains** buying buns on long-standing supply terms, with wheat locked in for the year.", "**Importers and retailers abroad**, including Walmart in the US, buying Cremica and private-label biscuits."],
        difficulty: { level: 'Low', text: "Biscuits and bread are simple to make and Parle, Britannia and ITC set the prices. What is harder is a fresh-bread supply chain with daily delivery, fast-food chain approvals, and export registrations in 70+ countries." },
        moat: "English Oven is a strong premium bread brand in the North, and the fast-food bun business is sticky. Biscuits are weak: Cremica reaches only about 35% of North Indian shops by weighted availability, and when Parle and ITC stayed at ₹4.50 packs after the GST cut while Bectors moved to ₹5, it lost share.",
        salesDrivers: ["**English Oven's expansion** to Kolkata, Mumbai (Khopoli) and Bengaluru, and quick commerce.", "**Biscuit distribution**: weighted availability in North India to rise from about 35% to 40–45% by 2030.", "**Fast-food demand**: bun volumes recovered in Q1 FY27 after two years of weakness.", "**Exports**: back to growth, though a duty-free import benefit (DFIA) has been withdrawn and not restored.", "**New capacity**: plants support about ₹3,400–3,500cr of revenue; the company targets ₹4,000cr by FY30."],
        inputs: "**Wheat flour, palm oil, sugar, milk powder and packaging**, plus fuel and freight; it hedges some wheat, sugar, milk powder and oil. Inflation of about 1.5% of costs hit Q1 FY27 and more in Q2, from packaging, palm oil, fuel and minimum-wage rises. Materials were 55% of sales in FY26; staff another 14%.",
        costEffect: "**Partly passed on, about a quarter late.** It raised consumer prices 2–2.5% in Q1 and runs a cost programme worth 0.4–0.5 points of margin; Q2 will be only partly covered and Q3 fully. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (13% to 7%). **What happened:** India's wholesale price index for wheat flour rose 10% over three years (100 in Q1 FY24 to 110) and its margin fell from 15.5% to 13.1%; dearer flour, packaging and oil, plus the costs of new plants and marketing, absorbed the gains from growth.",
        competitors: [{ name: 'Parle, Britannia and ITC (Sunfeast)', note: 'Set mass biscuit price points; far larger national distribution.' }, { name: 'Britannia and Harvest Gold', note: 'The main rivals in packaged bread in North India.' }, { name: 'Regional and private-label bakers', note: 'Compete for fast-food and export contracts.' }],
        position: "**A leading premium bread brand in North India (English Oven) and a preferred bun supplier to the largest burger chains**; a small player in national biscuits.",
        money: "Net cash of **₹40cr** on Screener at March 2026, with borrowings of ₹191cr; it raised equity in September 2024. FY27 capex is about ₹200cr plus spill-over, 60% from its own cash and 40% debt, with a Bengaluru bakery next. 74% of operating profit turned into operating cash over five years, but free cash has been near zero or negative in three of five years. Family executives were paid about 11% of FY26 profit. Promoters hold **49.0%**, down from 51.2% in September 2023 after the equity raise, with no pledge.",
        watch: ["Q2 margin holding near 13% despite inflation.", "The 14% exit rate in Q4 FY27.", "Domestic biscuit growth reaching double digits."],
        charts: foodProductsCharts['Mrs Bectors Food'],
    },
    {
        company: 'Kaveri Seed Company',
        inShort: ["**A Secunderabad hybrid-seed company** selling rice, maize, cotton, bajra and vegetable seed to Indian farmers, with almost all its profit earned in April–June, when farmers buy for the monsoon crop.", "**Good:** net cash, about 19% return on capital, and newer hybrids gaining share (37% of cotton sales, from 22%). **Bad:** profit has sat near ₹300cr for a decade, Q1 FY27 revenue fell 14% as maize seed sales collapsed, unsold stock turned FY26 operating cash negative and was still about ₹1,200cr in September (₹150cr more than a year earlier), and its 1–5% tax rate is disputed.", "**Verdict: wait.** High returns but no growth; wait for the tax ruling and for stock to turn into cash."],
        tagline: "A hybrid-seed breeder and seller for Indian farmers, strongest in rice, maize and cotton, earning its year's profit in one season.",
        revenue: '₹1,395cr (FY26, consolidated)',
        products: [
            { name: 'Rice seed', text: "Hybrid rice (₹247cr in Q1 FY27) and ‘selection’ open-pollinated rice (₹159cr); among the largest hybrid-rice sellers in India, with two new hybrids making most of new-product sales." },
            { name: 'Maize seed', text: "Hybrid maize, mainly for Karnataka, Andhra Pradesh and Telangana; ₹138cr in Q1 FY27, down 43%, because it had no product for Madhya Pradesh, where planting grew, and a dry June hit Karnataka." },
            { name: 'Cotton seed', text: "Bt cotton hybrids, 90% of sales in FY15 and about 20–25% now; ₹213cr in Q1 FY27. Prices are capped by the government, and its margin here has fallen from about 35% to about 15%." },
            { name: 'Bajra, vegetables and others', text: "Pearl millet (new hybrids are 65% of volume), sunflower, jowar and vegetable seeds, plus exports to South-East Asia (₹5.79cr in Q1, target ₹100cr in three years)." },
        ],
        revenueText: "On the company's (standalone) measure, **Q1 FY27 revenue was ₹815cr: hybrid rice 30%, cotton 26%, selection rice 20%, maize 17%**, and vegetables and others 7%. Filed consolidated Q1 revenue was ₹742cr; the company does not explain why the group figure is lower. **Q1 brings 55–65% of annual revenue and all of the profit**; the other quarters are usually loss-making.",
        mixes: [
            { caption: 'Revenue by crop, Q1 FY27 (company presentation, company measure)', parts: [{ label: 'Hybrid rice', share: 30 }, { label: 'Cotton', share: 26 }, { label: 'Selection rice', share: 20 }, { label: 'Maize', share: 17 }, { label: 'Other crops', share: 5 }, { label: 'Vegetables', share: 2 }] },
        ],
        customers: ["**Farmers** in Andhra Pradesh, Telangana, Karnataka, Maharashtra, Bihar and Uttar Pradesh, buying through dealers and distributors before each sowing season.", "**Dealers**, who pay advances before the season and can return unsold seed; sales returns are the auditor's key audit matter.", "**Seed buyers abroad**, in the Philippines, Vietnam, Indonesia and Bangladesh."],
        difficulty: { level: 'High', text: "Breeding a hybrid that beats rivals in the field takes years of research and trials, and it must be launched again every few years as older hybrids lose ground. Production is contracted with thousands of seed growers." },
        moat: "A good research pipeline (management calls its current one ‘one of the best in the last 10 years’) and a long dealer network. The weakness is that farmers switch hybrids every season, cotton prices are capped, and multinationals such as Bayer won in maize when Kaveri had no product.",
        salesDrivers: ["**The monsoon**: rain and sowing decide seed demand; a 40% June rainfall deficit cost it ₹40–60cr of maize sales in Karnataka.", "**New hybrids**: 37% of cotton sales, 20%+ of maize and 65% of bajra now come from recent launches.", "**Crop choices**: farmers moving between cotton, maize and rice with prices; maize planting grew in Madhya Pradesh, where it had no product.", "**Illegal seed**: herbicide-tolerant cotton seed takes share when the season is late.", "**Exports**: ₹100cr targeted within three years."],
        inputs: "**Payments to contract seed growers** (per kilo of seed produced), plus processing, treatment and packing. There is no power line of note. Materials (mostly grower payments) were 52% of sales in FY26; staff another 11%.",
        costEffect: "**Not protected on cotton, partly on the rest.** Cotton-seed prices are fixed by the government, so higher grower costs cannot be passed on; other seeds are priced freely, but high industry stock limits rises in FY27. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5 points (24% to 19%). **What happened:** there is no price index for seed production. FY26 grower yields were 5–7% higher, so production cost fell 4–5% while prices fell 2–3%; its annual margin rose from 21% in FY22 to 24–25% in FY24–FY26 (Screener) as the mix moved away from price-capped cotton.",
        competitors: [{ name: 'Bayer and Advanta', note: 'Multinationals that grew maize sales 20%+ while Kaveri’s fell about 40%.' }, { name: 'Rasi Seeds, Nuziveedu and other Indian seed firms', note: 'Compete in cotton and rice hybrids.' }, { name: 'Illegal herbicide-tolerant cotton seed', note: 'Takes share in Gujarat and Maharashtra, especially in late seasons.' }],
        position: "**One of India's largest listed hybrid-seed companies and one of the largest in hybrid rice**; it has lost cotton share for seven to eight years.",
        money: "Net cash of **₹443cr** on Screener at March 2026 (treasury ₹401cr), with no debt; cash was ₹265–270cr at June. But about ₹1,200cr of seed stock (an analyst's estimate; 608 inventory days) turned FY26 operating cash to −₹6cr, and production will be cut to work it off. Capex is ₹50–150cr a year. It has returned cash through buybacks before; a new one is left to the board. Its 1–5% tax rate rests on a farm-income exemption that goes before the tax tribunal on 15 October 2026. Promoters hold **60.5%**, up from 59.9% in September 2023, with no pledge.",
        watch: ["The tax tribunal hearing on 15 October 2026.", "Stock falling as production is cut.", "A buyback once stock turns to cash."],
        charts: foodProductsCharts['Kaveri Seed Company'],
    },
    {
        company: 'Zydus Wellness',
        inShort: ["**The Zydus group's consumer brands**: Sugar Free, Glucon-D, Complan, Nutralite, Everyuth, Nycil and RiteBite in India, plus Comfort Click, a UK online vitamins seller bought in 2025 that now brings in about a third of revenue.", "**Good:** near-monopoly shares in small niches (Sugar Free 96%, Glucon-D 59%) and a gross margin of 65.5%, the highest in the sector. **Bad:** the summer brands have failed two years running, filed profit fell 43% in FY26, and ₹3,203cr of euro debt sits against goodwill about equal to net worth.", "**Verdict: pass.** The price assumes the summer brands, Comfort Click and the debt all work out."],
        tagline: "A branded health-food and personal-care company with dominant shares in sweeteners, glucose powder and facial scrubs, and a fast-growing UK online supplements business.",
        revenue: '₹3,961cr (FY26, consolidated)',
        products: [
            { name: 'Summer brands (Glucon-D, Nycil)', text: "Glucose powder (59% of its category) and prickly-heat powder (33%). They earn most of the year's profit in the March and June quarters, so a cool or wet summer hits the whole year; they fell 18.8% in FY26 and another 12% in Q1 FY27." },
            { name: 'Food and nutrition', text: "Sugar Free sweeteners (96% share, with the stevia-based Sugar Free Green growing in double digits for 21 quarters), Complan nutrition drink (about 4% share), Nutralite spreads and ghee, and RiteBite protein bars (about ₹244cr of sales in FY26). This group grew 16% in Q1 FY27." },
            { name: 'Skin and hair care', text: "Everyuth face washes and scrubs (first in scrubs with 49% and in peel-off masks with 76%) and a new hair colour, Cuticolor. It grew 34.5% in Q1 FY27." },
            { name: 'Comfort Click (UK)', text: "Bought in August 2025 for £242 million. It sells vitamins and supplements (WeightWorld, Maxmedix, Animigo) mainly on Amazon and its own websites in the UK, Germany, France, Italy and Spain; revenue was £134 million in the year to June 2025 and it grew about 25% like-for-like in Q1 FY27." },
        ],
        revenueText: "The company reports only two segments, **food and nutrition** and **personal care**, and gives no brand-level or country-level sales. International sales rose from under 5% to **more than a third of revenue** after Comfort Click, and online is about a third of the group. At home, **organised channels (supermarkets and e-commerce) were 38% of domestic sales** in Q1 FY27, against 23% a year earlier.",
        mixes: [
            { caption: 'Domestic sales by channel, Q1 FY27 (company presentation)', parts: [{ label: 'General trade (local shops)', share: 62 }, { label: 'E-commerce', share: 21 }, { label: 'Modern trade', share: 17 }] },
        ],
        customers: ["**Indian households** buying through local shops, chemists, supermarkets and quick-commerce apps; diabetics and dieters for Sugar Free, families in hot northern and eastern states for Glucon-D and Nycil.", "**Online shoppers in Europe** buying Comfort Click's supplements on Amazon and its own sites, with new launches on a US website, Walmart and noon in the UAE.", "**Young consumers** for Everyuth and RiteBite, reached increasingly through e-commerce, which was 21% of domestic sales in Q1 FY27."],
        difficulty: { level: 'Medium', text: "The products are simple to make, in its own plants in Sikkim, Ahmedabad and Aligarh and at contract makers. What is hard to copy is decades of brand spending that made Sugar Free and Glucon-D the generic names in their niches; it spends about 18% of sales on advertising to keep it that way." },
        moat: "Shoppers ask for the brand by name, which gives near-monopoly shares and a 65.5% gross margin. The weakness is that several of these niches are small or shrinking (glucose powder −9.2%, nutrition drinks −7.7%), Complan is a distant fourth, and the summer brands depend on the weather.",
        salesDrivers: ["**The summer**: a hot, dry April–June lifts Glucon-D and Nycil, which carry the year's profit; rain in the East and North and high stock with retailers made Q1 FY27 the third poor summer quarter in a row.", "**Comfort Click's growth**: about 25% like-for-like in Q1 FY27, plus new markets in the US and the UAE; a weaker rupee added about 3 points to reported growth in Q4 FY26.", "**Shift to supermarkets, e-commerce and quick commerce**, which favour known brands; organised channels rose from 23% to 38% of domestic sales in a year.", "**Non-summer brands**: management promises ‘double-digit’ growth over three to four years for Sugar Free, Everyuth, RiteBite and the food range.", "**Advertising**: 18.2% of sales in Q1 FY27; the company aims for a 17–18% operating margin within two years, excluding Comfort Click."],
        inputs: "**Milk, edible oils, dextrose, sucralose and stevia, plus packaging.** Milk goes into Complan, Nutralite and ghee, oils into Nutralite, dextrose into Glucon-D, and sucralose and stevia into Sugar Free. In Q1 FY27 milk cost 7.6% more than a year earlier, oils 6.8% more, sucralose 7.3% more, while dextrose (−9.1%) and stevia (−8.2%) got cheaper. Materials were 40% of sales in FY26; advertising and other costs were another 36%.",
        costEffect: "**Partly passed on.** Strong brands let it raise prices, and it uses long-term buying contracts, hedges and buffer stock; oil and milk inflation still hurts Nutralite. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 4 points (13% to 9%). **What happened:** there is no single price index for its mix of inputs. Cheaper dextrose, sucralose and stevia, plus a richer mix, lifted the gross margin by about 9.4 points over FY25–FY26, yet the operating margin fell from 17% in FY22 to 13% in FY26 (Screener) because advertising rose, the summer brands shrank and Comfort Click earns a lower margin (about 14%).",
        competitors: [{ name: 'Horlicks, Bournvita and Boost', note: 'The larger nutrition-drink brands, well ahead of Complan’s ~4% share in a shrinking category.' }, { name: 'Amul and other dairy brands', note: 'Compete with Nutralite in butter, ghee and spreads, with their own milk supply.' }, { name: 'Online supplement sellers in Europe', note: 'Comfort Click competes on Amazon marketplaces, where entry is easy and reviews and advertising decide sales.' }],
        position: "**First in sugar substitutes (96%), glucose powder (59%), prickly-heat powder (33%) and facial scrubs (49%)**, fourth in facial cleansing (8.2%) and in nutrition drinks (~4%), all on Nielsen and IQVIA data to June 2026.",
        money: "Net debt was **₹3,087cr** on Screener at March 2026, up from almost nothing a year earlier, because borrowings of ₹3,203cr paid for Comfort Click; the loan was refinanced into cheaper euros and Q1 interest fell to ₹26cr. The parent has given ₹3,290cr of guarantees for its subsidiaries. Goodwill (₹4,942cr) and brands (₹539cr) roughly equal net worth. Routine capex is about ₹100cr a year. Only 63% of operating profit turned into operating cash over five years. Promoters hold **69.6%**, up slightly from 68.5% in September 2023, with no pledge.",
        watch: ["A normal summer lifting Glucon-D and Nycil.", "Operating margin reaching 17–18%.", "Euro debt paid down without a goodwill write-down."],
        charts: foodProductsCharts['Zydus Wellness'],
    },
    {
        company: 'Apex Frozen Foods',
        inShort: ["**A Kakinada shrimp processor and exporter** with its own hatchery and two plants of about 34,000 t, selling frozen and ready-to-eat shrimp to retailers and food companies in the US, EU and UK.", "**Good:** its Q1 FY27 margin reached 12.7%, its best in years, and debt is gone. **Bad:** the gain came from a weaker rupee and firm shrimp prices, volume fell 13%, plants run at about a third of capacity, and it disowned its own 14,000 t plan within a quarter.", "**Verdict: pass.** Q1 looks like a cyclical high, not a new base."],
        tagline: "An Andhra Pradesh processor that buys farmed shrimp, freezes or cooks it, and exports it to the US, Europe and the UK, mostly under customers' labels.",
        revenue: '₹931cr (FY26, standalone)',
        products: [
            { name: 'Ready-to-cook shrimp', text: "Frozen raw shrimp, peeled, deveined and graded to customers' specifications; about 84% of Q1 FY27 volume, from 15,000 t of ready-to-cook capacity." },
            { name: 'Ready-to-eat shrimp', text: "Cooked shrimp that earns at least $0.50 a kilo more; 16% of Q1 FY27 volume, targeted at 18–20% in FY27, from 10,000 t of capacity." },
            { name: 'Shrimp seed', text: "Its own hatchery produces disease-free baby shrimp for Andhra Pradesh farmers, which helps secure the shrimp it later buys." },
        ],
        revenueText: "**The US took 70% of Q1 FY27 shrimp sales** (54% a year earlier) and the EU and UK 25%; in FY26 non-US markets were about 52%, the first time they were the majority. New markets are Japan (started), Russia (approval pending) and Australia. Customers are not named and concentration is not disclosed. Q1 volume was 2,624 t at about ₹930 a kilo.",
        mixes: [
            { caption: 'Shrimp sales by market, Q1 FY27 (company call)', parts: [{ label: 'United States', share: 70 }, { label: 'EU and UK', share: 25 }, { label: 'Other', share: 5 }] },
        ],
        customers: ["**Food companies, retail chains and club stores in the US**, buying private-label frozen and cooked shrimp; US imports carry an anti-dumping duty (5.53% for Apex from September 2026), a 5.77% countervailing duty and a 10% tariff.", "**Importers and retailers in the EU and UK**; both plants are EU-approved, but half of Indian consignments are tested at the port.", "**Shrimp farmers** in Andhra Pradesh who buy its seed and sell it their harvest."],
        difficulty: { level: 'Medium', text: "Processing plants are not hard to build (it has three times the capacity it uses); the hard parts are EU and US approvals, residue-free sourcing, and enough labour and ships in the season." },
        moat: "EU-approved plants, its own hatchery and a debt-free balance sheet. But it is a spread business: profit is what customers pay less what farmers charge, set by world shrimp prices and the rupee, so it has little pricing power.",
        salesDrivers: ["**The rupee**: all sales are exports and only about 30% of receivables are hedged, so a weaker rupee lifts profit directly.", "**World shrimp prices and US duties**: realisations rose 15% in Q1; the countervailing-duty review is due in December 2026.", "**Volume**: stuck near 10,000–10,500 t for three years; FY27 is now guided at about 12,000 t, limited by shrimp supply, labour and shipping rather than capacity.", "**Ready-to-eat mix**: targeted at 18–20% of volume.", "**New markets and trade deals**: the India–UK agreement took effect in July 2026 and an India–EU deal is expected."],
        inputs: "**Farmed vannamei shrimp bought at the farm gate** (about ₹327 a kilo in FY26, ₹340–348 in Q4–Q1 and rising), plus packaging and ocean freight, which more than doubled after the Gulf disruption. Materials were 62% of sales in FY26; other costs, mainly freight, 22%.",
        costEffect: "**Not protected.** It cannot pass farm-gate costs to buyers who pay world prices; its margin is the spread between the two, moved by the rupee. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 6 points (6% to about 0%). **What happened:** there is no Indian price index for farmed shrimp. Farm-gate cost rose only a little (₹327 to about ₹340 a kilo) while its realisation rose 15% to about ₹930 on the weaker rupee and firm prices, so its margin went from 3% in FY25 to 12% in Q1 FY27 (Screener); freight and farm-gate prices are now rising again.",
        competitors: [{ name: 'Avanti Feeds, Devi Sea Foods and Sandhya Aqua', note: 'Larger Andhra Pradesh shrimp exporters selling to the same buyers.' }, { name: 'Ecuador, Vietnam and Indonesia', note: 'Rival exporting countries; Ecuador overtook India as the top US supplier in October 2025.' }],
        position: "**A mid-sized Indian shrimp exporter** with about 34,000 t of processing capacity running at about 30–38%.",
        money: "Net cash of **₹13cr** on Screener at March 2026; it cut borrowings from ₹107cr in FY24 to ₹6cr. It needs no expansion capex, only ₹2–8cr a year of upkeep. Operating cash has exceeded operating profit over five years (110%) as stock was released. The managing director is also the CFO. Promoters hold **72.6%**, unchanged, with no pledge.",
        watch: ["Volume reaching 12,000 t with ready-to-eat at 18–20%.", "The December countervailing-duty review.", "The rupee."],
        charts: foodProductsCharts['Apex Frozen Foods'],
    },
    {
        company: 'Gopal Snacks',
        inShort: ["**A Rajkot maker of Gujarati snacks** (gathiya, namkeen, fryums and wafers), selling mostly ₹5 packs, with about 70% of revenue in Gujarat; its main plant burned down in December 2024 and restarted in 2026.", "**Good:** revenue grew 31% in Q1 FY27 to a record, and plants can make three to four times today's volume with little new spending. **Bad:** the margin is 7.4% against 12–14% before the fire, FY26 profit leaned on insurance money, CRISIL turned its outlook negative, the MD has pledged 8.42% of the company, and about ₹69cr of GST dues are disputed.", "**Verdict: pass.** Sales have recovered; profits and governance have not."],
        tagline: "A Gujarat snack brand selling gathiya, namkeen, fryums and wafers in small packs through its own distributors across western and central India.",
        revenue: '₹1,508cr (FY26, standalone)',
        products: [
            { name: 'Gathiya', text: "Gram-flour fried snack in which it claims to be number one; about 29% of Q1 FY27 revenue (about ₹410cr in FY26). About 65% of Gujarat's gathiya market is still unbranded." },
            { name: 'Namkeen', text: "Mixtures, sev and other savoury snacks; about 23% of Q1 FY27 revenue (about ₹350cr in FY26)." },
            { name: 'Fryums and wafers', text: "Snack pellets that shops or households fry (about 16%) and potato wafers (about 11%)." },
            { name: 'Other foods', text: "Papad, besan, spices, extruded snacks, noodles, rusk and wafer biscuits; new products grew from ₹25cr to ₹63cr in FY26." },
        ],
        revenueText: "**Gathiya was about 29% of Q1 FY27 revenue**, namkeen 23%, fryums 16%, wafers 11% and other foods 21%. **Gujarat brings about 70% of revenue** (CRISIL); Maharashtra, Rajasthan, Madhya Pradesh, Uttar Pradesh and Chhattisgarh about ₹400cr a year. The ₹5 pack is about 60% of sales, down from about 80% in FY22. 97% of sales go through its own distributors; e-commerce and supermarkets are tiny.",
        mixes: [
            { caption: 'Revenue by product, Q1 FY27 (company presentation)', parts: [{ label: 'Gathiya', share: 29 }, { label: 'Namkeen', share: 23 }, { label: 'Other foods', share: 21 }, { label: 'Fryums', share: 16 }, { label: 'Wafers', share: 11 }] },
        ],
        customers: ["**Small shops in Gujarat**, served through 1,007 distributors and 135 micro-distributors; 38% of core shops now get two deliveries a week.", "**Shops in neighbouring states**: about 5.25–5.5 lakh outlets in all, targeted at 6 lakh by March 2027; Uttar Pradesh sells about ₹6.5cr a month.", "**Price-conscious households** buying ₹5 packs, whose weight it cuts when costs rise."],
        difficulty: { level: 'Low', text: "Snacks are simple to make and Gujarat has many strong local brands. Its edge is scale in gathiya, low-cost plants in Rajkot, Modasa and Nagpur, and a dense distributor network." },
        moat: "A leading gathiya brand with deep distribution in Gujarat and value-for-money small packs. The weakness is strong regional rivals (Balaji, Gokul, Shri Hari), little presence outside Gujarat, and pricing that relies on shrinking pack weights.",
        salesDrivers: ["**Recovery of the Rajkot plant**: rebuilt and running since Q1 FY27; revenue is now above ₹150cr a month.", "**Distribution**: twice-weekly deliveries lift those distributors' sales 14–25%; 6 lakh outlets targeted by March 2027.", "**New states**: focus states targeted to add ₹125–130cr in FY27.", "**Price and pack weight**: it passed on 4.2 points of a 5% cost rise in Q1 by pricing and cutting ₹5-pack weights twice.", "**Filling spare capacity**: plants run at about 25–30%, guided to 43–45% in FY27."],
        inputs: "**Palm oil (26–27% of purchases), chana (21–22%), packaging laminates (18–19%) and potato (about 6%).** Chana is stocked to December 2026 and potato held in cold storage, while palm oil and laminates are bought at spot prices. Materials were 73% of sales in FY26.",
        costEffect: "**Partly passed on, by shrinking packs.** It cannot easily raise the ₹5 price, so it trims pack weight; in Q1 FY27 costs rose 5% and it passed on 4.2%, absorbing 0.8%, and cut advertising to about 1% of sales. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 7 points (7% to about 0%). **What happened:** there is no single index for its basket. Its operating margin was 7% in FY22, 12–14% in FY23–FY24 when oil and chana were cheaper and the Rajkot plant ran, and back to 7% in FY25–FY26 after the fire and dearer palm oil and packaging (Screener).",
        competitors: [{ name: 'Balaji Wafers', note: 'The large Gujarat snack brand, strong in wafers and namkeen.' }, { name: 'Gokul and Shri Hari', note: 'Strong regional gathiya and namkeen brands.' }, { name: 'Haldiram’s and Bikaji', note: 'National and larger ethnic-snack makers expanding in western India.' }],
        position: "**The leading gathiya brand in Gujarat** (a company claim supported by CRISIL), and a regional namkeen player.",
        money: "Net debt was **₹153cr** on Screener at March 2026, after borrowings doubled to ₹154cr to stock chana and rebuild Rajkot; CRISIL rates it A with a negative outlook. FY27 capex is only ₹40–45cr, and ₹35–40cr of insurance is still due. About ₹69cr of GST dues for FY17–FY22 are disputed, plus a new ₹4.11cr notice in September 2026. Promoters hold **81.5%**, unchanged, but the managing director has pledged shares equal to **8.42% of the company** to Tata Capital.",
        watch: ["Margin reaching 8–9% in H2 FY27.", "The remaining ₹35–40cr of insurance arriving.", "The pledge and the GST disputes."],
        charts: foodProductsCharts['Gopal Snacks'],
    },
    {
        "company": "Piccadily Agro",
        "inShort": [
            "**A Haryana distiller and sugar maker that owns Indri**, one of the best-known Indian single malt whiskies, plus Whistler, Camikara rum and Cashmir vodka, alongside bulk alcohol, ethanol and a sugar unit it is spinning off.",
            "**Good:** branded spirits grew 47% in Q1 FY27 to ₹82cr, it holds 87,000 barrels of ageing malt, and management guides about 60% growth in FY27. **Bad:** only about a third of five years' operating profit came through as cash because the whisky must age for years, borrowings rose to ₹531cr, Q1 grew just 18%, the auditor resigned in April 2026, and a group sugar company owed it ₹43cr.",
            "**Verdict: pass.** A real whisky brand, but the auditor resigned in April 2026 and a group sugar company owed it ₹43cr; at 39 times earnings, governance questions like these rule it out until they are settled."
        ],
        "tagline": "An Indian distiller from Indri, Haryana, that is turning from sugar and bulk alcohol into a premium spirits brand owner built around the Indri single malt.",
        "revenue": "₹1,000cr (FY26, consolidated, as filed on Screener; the company reports total income of ₹1,143cr including other income)",
        "products": [
            {
                "name": "Branded spirits (premium and luxury)",
                "text": "Indri single malt (the company calls it the world's 13th-largest single malt, growing 18–20% a year), Whistler blended malt (grew almost 100% in FY26), Camikara cane-juice rum and Cashmir vodka. ₹82cr in Q1 FY27, 43.5% of distillery revenue, sold in 31 countries; exports are about 25% of branded sales, led by North America."
            },
            {
                "name": "Bulk alcohol",
                "text": "Grain spirit (ENA), ethanol for oil companies, country liquor and malt spirit from Indri and the new 210 KLPD Chhattisgarh plant. Management calls this a stop-gap to fill capacity; ethanol earns about 10% and country liquor 15–18%."
            },
            {
                "name": "Sugar",
                "text": "A cane-crushing sugar unit at Indri; ₹233cr of turnover (about 20% of the total). A scheme to move it into a subsidiary, Piccadily Food & Essential, was filed in April 2026 and is awaiting approvals."
            }
        ],
        "revenueText": "**Distillery was 76% of Q1 FY27 revenue** (71% a year earlier) and sugar 24%. Within distillery, **branded spirits were 43.5%** (₹82cr) and bulk alcohol the rest. In FY26 total income was ₹1,143cr and sugar turnover ₹233cr. Sales are heavily seasonal: 60–65% of branded revenue comes in October–March. Exports are about a quarter of branded sales; the long-term aim is 70% exports.",
        "mixes": [
            {
                "caption": "Revenue by business, Q1 FY27 (company call; branded share computed from 43.5% of distillery)",
                "parts": [
                    {
                        "label": "Bulk alcohol (ENA, ethanol, country liquor)",
                        "share": 43
                    },
                    {
                        "label": "Branded spirits",
                        "share": 33
                    },
                    {
                        "label": "Sugar",
                        "share": 24
                    }
                ],
                "note": "Approximate, from management figures."
            }
        ],
        "customers": [
            "**State liquor corporations, wholesalers and bars** in India for branded spirits, plus the armed forces canteens (CSD), which began buying Camikara.",
            "**Importers and duty-free shops** in 31 countries, led by North America.",
            "**Oil marketing companies** (IOCL, HPCL, BPCL) for ethanol, and other bottlers for bulk spirit."
        ],
        "difficulty": {
            "level": "High",
            "text": "A single malt needs at least three years of ageing, so a rival cannot copy Indri quickly; Piccadily says its 87,000 filled barrels are the most in India. Building a spirits brand also takes years of spending. Bulk alcohol and sugar, by contrast, are commodities."
        },
        "moat": "Aged malt stock and a brand that has won international awards give it a lead in Indian single malt that takes years to copy. The weakness is that it competes with large multinationals with deep pockets, half of its distillery revenue is still low-margin bulk alcohol, and newer brands are unproven.",
        "salesDrivers": [
            "**Brand growth**: Indri 18–20% a year, Whistler and the newer brands much faster; several new launches planned in Q2 and Q3 FY27.",
            "**Capacity**: malt plant at 30 KLPD running at 80%, Indri distillery expansion at about 60%, Chhattisgarh guided to 50% use by March 2027 and ₹300–400cr of FY27 revenue.",
            "**Season**: 60–65% of branded sales come in H2 (festivals and winter in north India).",
            "**Policy**: ethanol orders depend on government allocation; a court order paused ethanol sales in Q1.",
            "**Exports and duty-free**: new airports and countries each year; the India–UK trade deal halves duty on Scotch imports, which helps its Scottish Portavadie plan more than its Indian sales."
        ],
        "inputs": "**Grain (for malt and spirit), sugarcane and molasses, fuel, glass and oak barrels.** Barrel purchases are a running cost that management expects to take filled barrels to 1.15–1.2 lakh by March 2027.",
        "costEffect": "**Branded spirits absorb input swings; bulk alcohol does not.** Management said grain and fuel prices rose in Q1 and squeezed the distillery margin, while branded spirits felt no pressure. Ethanol prices are fixed by the government and country liquor prices by states. The filed cost split was not available to me, so I give no rule of thumb. **What happened:** the operating margin was 10–12% in FY22–FY23 when it was mostly sugar and bulk alcohol, and 20–23% in FY24–FY26 as branded spirits grew.",
        "competitors": [
            {
                "name": "Radico Khaitan (Rampur), Amrut and John Distilleries (Paul John)",
                "note": "The other Indian single malt makers."
            },
            {
                "name": "Diageo India and Pernod Ricard India",
                "note": "Far larger multinationals, with Indian and imported malts and much bigger marketing budgets."
            },
            {
                "name": "Ethanol and grain-spirit distillers",
                "note": "Many players; bulk alcohol is a price-taker business."
            }
        ],
        "position": "**One of India's leading single malt makers** by its own account, with 87,000 barrels of malt ageing and Indri ranked 13th among single malts worldwide (company claim).",
        "money": "Screener shows **₹531cr of borrowings** at March 2026, up from ₹172cr in March 2024, after spending on the Chhattisgarh plant, malt capacity and barrels; the cash balance is not on the saved page. **Over FY22–FY26 it turned ₹697cr of operating profit into only ₹224cr of operating cash, and free cash was −₹303cr**, because ageing whisky sits in stock (inventory 369 days) and customers take about 89 days to pay. Management says no big capex is planned in FY27 and debt will not rise. Crisil rated its ₹400cr of bank loans A+/Stable in October 2026; Infomerics upgraded it to A in May 2026. Promoters hold **68.56%**; the sugar unit is being moved into a subsidiary, with one new share for every nine held.",
        "watch": [
            "H2 FY27 sales and margin: the 60% growth and 23–24% margin guidance.",
            "Operating cash and debt as barrel stock keeps building.",
            "The new auditor's first full-year report and the related-party balances with Piccadily Sugar."
        ],
        charts: foodProductsCharts["Piccadily Agro"],
    },
    {
        "company": "Regaal Resources",
        "inShort": [
            "**A maize-starch maker in Kishanganj, Bihar**, that grinds maize into starch for paper mills and food companies and sells the by-products as animal feed; it has just doubled its plant and added liquid glucose and maltodextrin.",
            "**Good:** Q1 FY27 margin rose to 15% as it dropped low-margin maize trading, Bihar maize is cheap and good, and capacity doubled in May 2026. **Bad:** net debt is **₹735cr**, about five and a half times a year's operating profit; five years of operating profit produced only 23% as cash; and the margin swings with maize prices it cannot control.",
            "**Verdict: wait.** Cheap at 14 times earnings, but I want to see the doubled plant run full and debt fall in H2 before trusting a commodity business this leveraged."
        ],
        "tagline": "A Bihar maize wet-milling company that makes native starch, liquid glucose, maltodextrin and feed by-products, now the largest such plant in eastern India.",
        "revenue": "₹1,134cr (FY26, standalone)",
        "products": [
            {
                "name": "Native and modified starch",
                "text": "Maize starch sold under the 'Lion' brand, mainly to paper and board mills and food makers; modified starches (cationic, pre-gel, carboxymethyl and others) were due to start by September 2026."
            },
            {
                "name": "Liquid glucose and maltodextrin (value-added)",
                "text": "A 180 t/day liquid glucose line and a 50 t/day maltodextrin powder line started with the May 2026 expansion; liquid glucose reached about 70% use. Dextrose is planned for Q4 FY27. Value-added products were 3% of FY26 turnover and are guided to 20–22% in FY27."
            },
            {
                "name": "Co-products",
                "text": "Gluten, germ, fibre and enriched fibre sold mainly to animal-feed and oil makers; about 22% of FY25 revenue."
            },
            {
                "name": "Maize trading",
                "text": "Resale of maize, about 17% of FY25 revenue and 19.5% of Q1 FY26, cut to 3.3% in Q1 FY27 on purpose."
            }
        ],
        "revenueText": "**Native starch was about 59% of FY25 revenue**, co-products 22% and traded maize 17% (RHP figures as summarised by brokers). In Q1 FY27 trading fell to 3.3% and **exports rose to 10.4%** (Bangladesh, Nepal and Malaysia among buyers). Revenue fell 18% to ₹202cr in Q1 FY27 because trading was dropped and the plant was shut for nine days to connect the new lines. Its top 10 customers were 45% of FY25 revenue.",
        "mixes": [
            {
                "caption": "Revenue by product, FY25 (RHP, via broker notes)",
                "parts": [
                    {
                        "label": "Native maize starch",
                        "share": 59
                    },
                    {
                        "label": "Co-products (feed)",
                        "share": 22
                    },
                    {
                        "label": "Traded maize",
                        "share": 17
                    },
                    {
                        "label": "Other",
                        "share": 2
                    }
                ]
            }
        ],
        "customers": [
            "**Paper and board mills** such as Emami Paper Mills, Century Pulp & Paper, Genus Paper Board and Krishna Tissues (named in IPO material).",
            "**Food and pharma companies**, including large MNCs it now bills directly for liquid glucose (unnamed on the call), plus white-label packs.",
            "**Feed makers** for co-products, such as Kush Proteins and Mayank Cattle Food; top 10 customers were 45% of FY25 revenue."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Wet milling needs a large, continuous plant and steady maize supply, but the process is well known and several bigger rivals run it. Regaal's edge is location: it buys most maize straight from Bihar farmers at its gate, with no freight."
        },
        "moat": "Cheap, high-yield Bihar maize at the factory gate and the only large wet-milling plant in eastern India give it a cost edge nearby. Starch itself is a commodity, buyers are large, and bigger rivals in Gujarat and Punjab are also adding capacity.",
        "salesDrivers": [
            "**Volume**: crushing to rise from 2.65 lakh tonnes in FY26 to over 4 lakh tonnes in FY27 after capacity doubled to 1,650 t/day on 26 May 2026.",
            "**Mix**: value-added products from 3% to 20–22% of turnover, about 35% in the longer run.",
            "**Maize and starch prices**: profit per tonne moves with the gap between maize and starch prices, which management will not forecast.",
            "**Season**: about 80% of a year's maize is bought in April–July, so stock and debt peak in H1; liquid glucose sells mostly in September–March.",
            "**Exports**: doubled to 10% of Q1 revenue; a target was not given."
        ],
        "inputs": "**Maize**, about 70% of operating income (Crisil), bought mostly from Bihar farmers during the rabi harvest; plus power from its own 15.8 MW cogeneration plant and chemicals for modified starches.",
        "costEffect": "**Price-linked, with a lag.** Starch prices follow maize, so the rupee profit per tonne tends to hold, but the percentage margin moves and a quick maize spike can hurt before prices catch up. It holds a year's stock bought at harvest, which protects FY27 if maize rises. **Rule of thumb:** with maize at about 70% of sales, a 10% rise in maize not passed on would cut the margin by about 7 points (11% to about 4%). **What happened:** the operating margin was 13% in FY21, 8–9% in FY23–FY24 when maize was dear, 12% in FY25, 11% in FY26 and 15% in Q1 FY27 after trading was cut.",
        "competitors": [
            {
                "name": "Gujarat Ambuja Exports",
                "note": "India’s largest maize processor, far bigger, and still adding capacity."
            },
            {
                "name": "Sanstar",
                "note": "Gujarat-based maize-starch and derivatives maker, also adding specialty capacity."
            },
            {
                "name": "Gulshan Polyols and Sukhjit Starch",
                "note": "Listed peers named in the RHP."
            }
        ],
        "position": "**The largest maize wet-milling plant in eastern India** (company claim) at 1,650 tonnes a day; small against the national leaders.",
        "money": "**Net debt was ₹735cr at June 2026**, against ₹127cr of FY26 operating profit, after a ₹664cr expansion (₹552cr spent by June) funded mostly with term loans. Interest on those loans is partly paid by Bihar's industrial policy, so net interest is guided at about ₹40cr in FY27. **Over FY22–FY26 it turned ₹383cr of operating profit into ₹88cr of operating cash, and free cash was −₹573cr.** It raised about ₹210cr in the August 2025 IPO. Crisil rates its ₹626cr of bank loans A-/Stable. Promoters hold **71.13%** and had ₹88cr of loans to the company outstanding at March 2025.",
        "watch": [
            "Net debt falling in H2 FY27 from the ₹735cr June peak.",
            "Crushing reaching 4 lakh tonnes and value-added products 20% of sales.",
            "Maize prices from September, when they usually rise in Bihar."
        ],
        charts: foodProductsCharts["Regaal Resources"],
    },
    {
        "company": "Milky Mist Dairy",
        "inShort": [
            "**A Tamil Nadu dairy company that sells only value-added products**: paneer (the largest private branded paneer maker in India), cheese, curd, ghee, yogurt and ice cream, made at one large plant in Erode and sold mostly in South India.",
            "**Good:** revenue grew 34% in FY26 and 44% in Q1 FY27, the margin is rising (15% in Q1), and the ban on fake 'analogue' paneer and zero GST on paneer help. **Bad:** the shares trade at **116 times earnings** after doubling from the ₹140 IPO price; free cash has been negative for four years; one plant and Tamil Nadu milk carry the whole business; contingent liabilities are ₹229cr.",
            "**Verdict: pass.** A fine dairy brand, but the price assumes many years of near-perfect growth."
        ],
        "tagline": "A value-added dairy company from Erode, Tamil Nadu, best known for packaged paneer, cheese and curd, with its own milk collection, trucks and shop coolers.",
        "revenue": "₹3,138cr (FY26, consolidated)",
        "products": [
            {
                "name": "Paneer",
                "text": "₹923cr in FY26 (29% of revenue), including high-protein paneer; 19% share of organised packaged paneer (RHP). Q1 FY27 paneer grew 34% in volume."
            },
            {
                "name": "Cheese, curd, ghee and butter",
                "text": "Cheese ₹514cr (16%), curd ₹416cr (13%), ghee ₹308cr (10%) and butter ₹191cr (6%) in FY26. A 120 t/day natural cheddar plant started in Q1 FY27."
            },
            {
                "name": "Ice cream and yogurt",
                "text": "Ice cream ₹211cr (7%) and yogurt, including Greek yogurt and skyr, ₹195cr (6%) in FY26; yogurt sales were ₹84.5cr in Q1 FY27 alone."
            },
            {
                "name": "Whey powder, UHT milk and others",
                "text": "Whey powder (5%), mostly sold to biscuit makers, UHT products, khova, chocolate and ready-to-cook foods from the Asal and Briyas acquisitions. A whey protein plant is due in 15–18 months."
            }
        ],
        "revenueText": "**Paneer, cheese and curd were 59% of FY26 revenue.** **South India was 69%** (Tamil Nadu and Karnataka about 24% each), the rest of India 27% and exports 4%. By channel, general trade was 38%, modern trade 23%, HoReCa 17% and e-commerce 14%, the fastest-growing. 97% of sales are under the Milky Mist brand.",
        "mixes": [
            {
                "caption": "Revenue by product, FY26 (RHP)",
                "parts": [
                    {
                        "label": "Paneer",
                        "share": 29
                    },
                    {
                        "label": "Cheese",
                        "share": 16
                    },
                    {
                        "label": "Curd",
                        "share": 13
                    },
                    {
                        "label": "Ghee",
                        "share": 10
                    },
                    {
                        "label": "Ice cream",
                        "share": 7
                    },
                    {
                        "label": "Yogurt",
                        "share": 6
                    },
                    {
                        "label": "Butter",
                        "share": 6
                    },
                    {
                        "label": "Powder",
                        "share": 5
                    },
                    {
                        "label": "Other",
                        "share": 8
                    }
                ]
            },
            {
                "caption": "Revenue by region, FY26 (RHP)",
                "parts": [
                    {
                        "label": "South India",
                        "share": 69
                    },
                    {
                        "label": "Rest of India",
                        "share": 27
                    },
                    {
                        "label": "Exports",
                        "share": 4
                    }
                ]
            }
        ],
        "customers": [
            "**Households through about 4 lakh shops**, served by more than 4,200 distributors and 41,000 coolers and freezers it places in shops.",
            "**Supermarkets and quick-commerce apps**, its fastest-growing channel.",
            "**Hotels and restaurants**, plus bulk whey powder to biscuit makers; it does not supply fast-food chains."
        ],
        "difficulty": {
            "level": "Medium",
            "text": "Paneer and curd are simple to make, but doing it at scale with steady quality needs a cold chain from farm to shop. It collects milk directly from more than 74,000 farmers and runs its own 375 trucks, which few regional rivals can match."
        },
        "moat": "A strong brand in paneer and cheese in the South, direct farmer procurement and an owned cold chain. The weaknesses are one plant, dependence on Tamil Nadu milk, and much larger rivals (Amul, Hatsun) in the same products.",
        "salesDrivers": [
            "**Category growth**: value-added dairy is expected to grow from about ₹5.5 lakh crore (FY25) to about ₹10 lakh crore by FY30; organised paneer at 20%+ a year.",
            "**Regulation**: bans on analogue paneer in several states and zero GST on paneer since September 2025.",
            "**Pricing**: a 10.5% price increase lifted Q1 FY27; it raises prices 2–3 months after milk costs rise.",
            "**Capacity**: room to reach 3–3.5 times FY26 revenue at the current plant, plus a planned plant in Maharashtra in about three years.",
            "**Distribution**: more than 50,000 new coolers and freezers over three years from IPO money."
        ],
        "inputs": "**Raw milk, 50–55% of input cost**, bought from farmers at ₹41–42 a litre (₹45 landed); daily procurement averaged 13.2 lakh litres in Q1 FY27. Packaging and fuel for its own fleet are the other big costs.",
        "costEffect": "**Passed on with a lag of 2–3 months.** It sells no pouch milk, so it can raise product prices; it did by 10.5% in the year to Q1 FY27 and the gross margin rose 2.7 points to 34.2%. Tamil Nadu's state dairy, Aavin, has raised its milk procurement price by ₹3 a litre twice recently, so another round of price increases is due. **Rule of thumb:** with materials at about 66% of sales (gross margin 34%), a 10% rise in material costs not passed on would cut the margin by about 6.6 points (15% to about 8%). **What happened:** the operating margin was 15% in FY21–FY22, 12% in FY24 when milk was dear, and back to 14% in FY26 and 15% in Q1 FY27.",
        "competitors": [
            {
                "name": "Hatsun Agro Product",
                "note": "The large Tamil Nadu private dairy (Arun ice cream, Hatsun curd and paneer), much bigger and with a large pouch-milk business."
            },
            {
                "name": "Amul (GCMMF)",
                "note": "The national leader in butter, cheese and paneer."
            },
            {
                "name": "Parag Milk Foods, Britannia and Heritage Foods",
                "note": "Rivals in cheese and value-added dairy."
            },
            {
                "name": "Unbranded paneer makers",
                "note": "About 90% of paneer is still sold loose; analogue paneer bans push buyers to brands."
            }
        ],
        "position": "**The largest private branded paneer maker in India** with 19% of organised packaged paneer, about 12% of cheese in the South and about 13% of yogurt among private players (RHP, CRISIL).",
        "money": "Screener shows **₹1,677cr of borrowings at March 2026**; the IPO added ₹1,428cr of new money in August, of which ₹497cr goes to repay loans and ₹625cr to plant expansion and coolers, so net debt after the IPO is roughly ₹250cr on my estimate (March borrowings less the new money). **Free cash was negative in each of FY23–FY26 (−₹765cr in total)** because it spent heavily on the plant, though operating cash was 81% of operating profit. Promoters hold **79.51%**.",
        "watch": [
            "Margin holding near 15% as Tamil Nadu milk prices rise.",
            "Growth outside the South, now about 31% of sales.",
            "The whey protein plant and debt repayment from IPO money."
        ],
        charts: foodProductsCharts["Milky Mist Dairy"],
    },
    {
        "company": "Orkla India",
        "inShort": [
            "**Sells packaged spices and ready-to-cook foods** under MTR (Karnataka), Eastern (Kerala) and Rasoi Magic. Spices are 65% of revenue and convenience foods 35%; 70% of sales come from South India and 21% from exports to the Indian diaspora.",
            "**Good:** leading brands in their home states, a steady 16–17% operating margin, profit that turns into cash (77% over five years) and about ₹500cr of net cash. **Bad:** sales grew only 5% a year over FY23–FY26, volume rose just 1.7% in Q1 FY27, Eastern is losing share in Kerala while being restructured, and spice prices are rising fast.",
            "**Verdict: follow.** A good, cash-rich branded business at a fair price, but it needs to show that double-digit growth can last before it earns a place."
        ],
        "tagline": "The Indian arm of Norway's Orkla: a Bengaluru food company owning MTR (founded 1924) and Kerala's Eastern Condiments, listed in November 2025.",
        "revenue": "₹2,509cr (FY26, consolidated)",
        "products": [
            {
                "name": "Spices",
                "text": "Pure spices (chilli, coriander, turmeric; about 26% of revenue), priced at roughly 10% above the wholesale market price. Blended masalas (sambar, garam, chicken masala; about 39–40% of revenue) carry higher margins and are priced 15–25% above rivals. **About 65% of FY26 revenue.** No.1 in packaged spices in Karnataka (MTR) and Kerala (Eastern)."
            },
            {
                "name": "Convenience foods",
                "text": "Ready-to-cook breakfast mixes (rava idli, dosa batter), ready-to-eat meals, sweets, vermicelli and beverages under MTR. **About 35% of FY26 revenue.** Q1 FY27 growth was 11.9%, led by meals; wet batter has entered Hyderabad."
            },
            {
                "name": "International",
                "text": "Sells to the Indian diaspora in about 45 countries, led by the Gulf (Eastern is No.1 by household reach in the UAE). **About 21% of revenue.** Grew 10.1% in Q1 FY27, with the Gulf up 18.1%."
            }
        ],
        "revenueText": "**Spices were 65% of FY26 revenue and convenience foods 35%.** By region, South India was 70%, international 21% and the rest of India 9%. Q1 FY27 revenue was ₹659cr, up 10.4% (product sales +11.5%), but **volume rose only 1.7%**: most of the growth was price, after spice costs jumped 32.8% (chilli up 78%). Excluding Kerala, domestic volume rose 6.3%. Online sales grew 38% to 8.9% of domestic revenue, and modern trade 18.6%. No single customer is disclosed as significant.",
        "mixes": [
            {
                "caption": "Revenue by category, FY26 (investor presentation)",
                "parts": [
                    {
                        "label": "Spices",
                        "share": 65
                    },
                    {
                        "label": "Convenience foods",
                        "share": 35
                    }
                ]
            },
            {
                "caption": "Revenue by geography, FY26 (investor presentation)",
                "parts": [
                    {
                        "label": "South India",
                        "share": 70
                    },
                    {
                        "label": "International",
                        "share": 21
                    },
                    {
                        "label": "Rest of India",
                        "share": 9
                    }
                ]
            }
        ],
        "customers": [
            "**Households in South India**, reached through about 6.8 lakh retail outlets via distributors (general trade), plus modern trade and quick-commerce/e-commerce apps.",
            "**Indian diaspora abroad**, through importers and retailers in the Gulf, US, UK, Canada, Australia and about 40 other countries."
        ],
        "difficulty": {
            "level": "Low",
            "text": "Grinding and blending spices or making ready mixes is simple, and unbranded packers flood in when spice prices fall. The barriers are brand trust built over decades, recipes tuned to each region, and distribution to hundreds of thousands of shops."
        },
        "moat": "Strong regional brands: MTR in Karnataka and Eastern in Kerala are household names, and blended masalas sell at a 15–25% premium. The CEO says unbranded rivals fade when spice prices rise, which helps branded players now. But the brands are regional, national giants compete outside the south, and Eastern has been losing share in Kerala.",
        "salesDrivers": [
            "**Pricing and spice inflation**: price-led growth rose from 6.5% in Q4 FY26 to 11.4% in Q1 FY27. Management says most needed increases are already taken.",
            "**Volume**: the stated priority. Ex-Kerala domestic volume grew 6.3% in Q1, overall only 1.7%.",
            "**Kerala restructuring**: foods distribution done in June 2026 (+14% sales productivity), open-format outlets due by December 2026 and spices by March 2027.",
            "**Digital commerce (Project Bolt)** and breakfast foods in the top 28 metros; 23 launches in Q1.",
            "**Exports**: Gulf demand and freight costs; UK/EU entry through non-dairy recipes.",
            "**No formal guidance**: the company does not give forward guidance; the CEO calls double-digit growth the ambition."
        ],
        "inputs": "**Chilli, coriander, turmeric and other spices, wheat (rava) and milk powder, plus packaging.** Materials and bought-in goods were 55% of FY26 sales. Spice costs fell for eight quarters, then rose 32.8% year on year in Q1 FY27.",
        "costEffect": "**Mostly passed on, with a lag.** Pure spices are re-priced with the wholesale market; blended masalas get calibrated increases to protect margin while keeping a set premium over rivals. **What happened:** the company's spice cost index fell from 100 (Q1 FY25) to 86 (Q2 FY26), then rose to 116 by Q1 FY27, while the operating margin stayed between 14% and 19% a quarter (17.1% in Q1 FY27). Gross margin was helped in Q1 FY26 by falling prices and a PLI incentive. **Rule of thumb:** a 10% rise in material costs not passed on would cut the margin by about 5.5 points.",
        "competitors": [
            {
                "name": "Local masala brands in each state",
                "note": "The benchmark rivals for blended spices. Orkla prices 15–25% above them and lost about 0.3 points of share to them in Kerala; its filings do not name them."
            },
            {
                "name": "Unbranded local packers",
                "note": "Gain share when spice prices fall and fade when they rise, the CEO says."
            },
            {
                "name": "National spice and packaged-food companies",
                "note": "Larger outside the south, where Orkla earns only 9% of revenue; not named in the company's filings."
            }
        ],
        "position": "**No.1 in packaged spices in Karnataka and Kerala**. It gained 0.3–0.5 points of share in Karnataka and Andhra Pradesh in Q1 FY27 but lost about 0.3 points in Kerala. It has 8 own factories and 22 outsourced ones.",
        "money": "**Net cash of about ₹500cr**: ₹545cr of current investments and about ₹23cr of cash against about ₹63cr of lease liabilities, with no bank debt (March 2026). **Profit turns into cash**: over FY22–FY26, ₹1,705cr of operating profit produced ₹1,319cr of operating cash and ₹1,136cr of free cash. The balance sheet carries ₹1,012cr of goodwill, mainly from buying Eastern. The IPO was a pure sale, so the company raised no money; before it, a payout of 235% of FY25 profit went to shareholders, mostly Orkla. Orkla ASA holds 75%.",
        "watch": [
            "Volume growth back above 4–5% as price rises slow.",
            "Eastern's Kerala share stabilising once the restructuring is done (by March 2027).",
            "Whether the net cash is spent on acquisitions, as the CEO hinted, or returned."
        ],
        charts: foodProductsCharts["Orkla India"],
    },
];

export const foodProductsBusinesses = { intro, profiles };
