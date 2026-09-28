import { SectorOverview } from './types';
import { mediaBusinesses } from './media-businesses';
import { mediaValuationInputs } from './card-data/media';

// Quarter and year columns used by every metric below.
const Q = ['Q1 FY26', 'Q2 FY26', 'Q3 FY26', 'Q4 FY26', 'Q1 FY27'];
const FY = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26'];

// Segment labels. The metric grid, the moat table and the company cards are grouped by these.
const LABELS = 'Music labels — owning songs and licensing them';
const VFX = 'Visual effects — studio services for films and series';

export const media: SectorOverview = {
    sector: 'Media and Entertainment',
    title: 'Media and Entertainment',
    format: 'ranked',
    businesses: mediaBusinesses,
    moatCompact: true,
    leadCharts: true,
    valuation: {
        writtenOn: '28 Sep 2026',
        inputs: mediaValuationInputs,
        // My base-case earnings growth, % a year over three to five years (section 6).
        myGrowth: {
            'Tips Music': 17,
            'Saregama India': 15,
            'Basilic Fly Studio': 10,
        },
    },
    standfirst:
        "Three companies that earn from films, series and songs in very different ways. Saregama and Tips are music labels: they own songs for ever and are paid every time one is streamed, played on YouTube, used in an advert or performed in public. Basilic Fly Studio sells visual effects (VFX) work to Netflix, Amazon and film studios, mostly from India, and owns no content. This first note draws on each company's last two earnings calls, their latest presentations, FY26 annual reports and CARE's and CRISIL's rating reports, plus FICCI-EY's 2026 industry report. The labels have wonderful economics but are paying more for new music; the VFX studio is cheap but has not turned its profits into cash. Every chart uses filed results and five years of history.",
    lastUpdated: '2026-09-28',
    asOfQuarter: 'Q1 FY27',

    metrics: [
        {
            key: 'opm',
            label: 'Operating margin by quarter',
            unit: '%',
            periods: Q,
            scale: 'sequential',
            source: 'Filed quarterly results (Screener; Saregama and Basilic consolidated, Tips standalone), operating profit ÷ sales.',
            note: 'Tips earns 50–79% because its songs are paid for; Saregama earns less because it still makes videos, runs events and manages artists. Quarterly swings at both labels follow album releases, whose cost lands before the revenue.',
            values: {
                'Tips Music': [64, 76, 79, 74, 50],
                'Saregama India': [27, 30, 35, 42, 35],
                'Basilic Fly Studio': [20, 24, 17, 21, 14],
            },
            cellNotes: {
                'Tips Music': 'Q1 FY27: the whole cost of two film albums (content cost ₹44.6cr, up 90%) was expensed on release; their revenue started only in mid-May.',
                'Basilic Fly Studio': 'Q1 FY27: a currency loss, management travel for an acquisition and overlapping migration and IT costs, per the company.',
            },
        },
        {
            key: 'growth',
            label: 'Revenue growth, year on year',
            unit: '%',
            periods: Q,
            scale: 'diverging',
            source: 'Filed quarterly revenue, each quarter against the same quarter a year earlier (Tips: company figures, which carry one decimal).',
            note: 'Saregama’s FY26 quarters are distorted by a one-off Diljit Dosanjh tour in the year-earlier base; its music business grew 39% in Q1 FY27. Tips has grown about 20% a quarter for two years.',
            values: {
                'Tips Music': [19, 11, 21, 32, 21],
                'Saregama India': [1, -5, -46, 19, 28],
                'Basilic Fly Studio': [null, 69, 12, -15, 10],
            },
            cellNotes: {
                'Saregama India': 'Q3 FY26 is against a ₹483cr quarter that included the Diljit Dosanjh India tour.',
                'Basilic Fly Studio': 'One of Us (UK) was consolidated from August 2024, so Q1 FY26 has no comparable quarter and Q2 FY26 growth is inflated by the acquisition.',
            },
        },
        {
            key: 'roce',
            more: true,
            label: 'Return on capital by year',
            unit: '%',
            periods: FY,
            scale: 'sequential',
            source: 'Filed annual ratios (Screener): return on capital employed.',
            note: 'Tips’ returns are extraordinary because it expenses its content and hands back its cash. Saregama’s fell from 23% as it raised ₹750cr and spent it on music and acquisitions. Basilic’s fell as the UK studio joined.',
            values: {
                'Tips Music': [86, 87, 104, 109, 118],
                'Saregama India': [23, 19, 18, 17, 17],
                'Basilic Fly Studio': [null, 172, 63, 30, 22],
            },
        },
        {
            key: 'ccc',
            label: 'Cash conversion cycle by year',
            unit: 'days',
            periods: FY,
            scale: 'sequential',
            lowerIsBetter: true,
            source: 'Filed annual ratios (Screener): debtor days + inventory days − payable days.',
            note: 'Platforms pay Tips within about a month. Saregama carries film and TV inventory. Basilic waits about four months for its money, longer after the 2023 Hollywood strikes.',
            values: {
                'Tips Music': [48, 40, 40, 32, 33],
                'Saregama India': [173, 226, 302, 120, 164],
                'Basilic Fly Studio': [38, 72, 189, 93, 124],
            },
        },
        {
            key: 'cash',
            label: 'Cash conversion (operating cash ÷ operating profit)',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed annual cash-flow statements and profit and loss (Screener): cash from operating activities ÷ operating profit. The last column uses all five years.',
            note: 'Tips turns about four-fifths of its operating profit into cash. Basilic turned about a tenth over five years. Saregama’s film and TV inventory and advances make its yearly figure jumpy.',
            values: {
                'Tips Music': [34, 79, 147, 58, 71, 80],
                'Saregama India': [47, 42, 37, 119, 30, 55],
                'Basilic Fly Studio': [null, 29, -57, 28, 27, 11],
            },
            cellNotes: {
                'Basilic Fly Studio': 'FY22 operating profit was ₹2cr, too small for the ratio to mean anything.',
            },
        },
        {
            key: 'fcf',
            label: 'Free cash flow ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'diverging',
            legend: ['Burning cash', 'Generating cash'],
            source: 'Filed cash-flow statements (Screener): operating cash minus spending on fixed assets, as a share of sales. The last column uses all five years.',
            note: 'For Saregama, "fixed assets" are mostly music rights it buys, so its free cash is thin in the years it buys most. Basilic has burned cash for three years on its UK studio, AI tools and slow collections.',
            values: {
                'Tips Music': [21.3, 42.8, 95.0, 37.9, 50.8, 51.8],
                'Saregama India': [3.6, -1.4, 0.1, 14.4, -11.6, 1.6],
                'Basilic Fly Studio': [0.0, 11.4, -28.2, -26.3, -12.3, -16.3],
            },
        },
        {
            key: 'leverage',
            label: 'Net debt ÷ operating profit',
            unit: 'x',
            periods: FY,
            scale: 'diverging',
            invert: true,
            legend: ['More debt', 'Net cash'],
            source: 'Filed balance sheets and profit and loss (Screener): borrowings (including leases) minus cash (and, for Tips, treasury investments), ÷ operating profit.',
            note: 'Below zero means more cash than debt. Saregama’s figure leaves out its investments, because they include the ₹325cr Bhansali stake, which is not spare cash. Basilic moved to small net debt after buying the UK studio.',
            values: {
                'Tips Music': [-0.8, -1.0, -1.4, -0.6, -0.6],
                'Saregama India': [-1.6, -2.3, -2.2, -2.0, -0.2],
                'Basilic Fly Studio': [-0.5, -0.2, -0.8, 0.5, 0.4],
            },
        },
        {
            key: 'capex',
            more: true,
            label: 'Capex ÷ sales',
            unit: '%',
            periods: [...FY, '5 yrs'],
            scale: 'sequential',
            source: 'Filed cash-flow statements (Screener): spending on fixed assets as a share of sales. The last column uses all five years.',
            note: 'Saregama capitalises the music it buys (then writes it off over about ten years); Tips expenses it at once, so its capex is near zero. Basilic’s FY25–FY26 spending went on AI tools, storage and capitalised staff time.',
            values: {
                'Tips Music': [0.0, 0.5, 1.2, 0.6, 1.6, 1.0],
                'Saregama India': [12.7, 14.0, 11.5, 13.8, 21.7, 15.1],
                'Basilic Fly Studio': [4.0, 2.5, 1.0, 32.9, 17.9, 19.3],
            },
        },
        {
            key: 'turnover',
            more: true,
            label: 'Sales per ₹1 of fixed assets',
            unit: 'x',
            periods: FY,
            scale: 'sequential',
            source: 'Filed accounts (Screener): sales ÷ net fixed assets at year end.',
            note: 'Basilic’s ratio collapsed in FY25 because the UK acquisition brought goodwill and equipment onto its books.',
            values: {
                'Tips Music': [19.4, 37.4, 30.2, 44.4, 26.9],
                'Saregama India': [2.1, 2.2, 1.1, 1.4, 1.0],
                'Basilic Fly Studio': [25.0, 39.5, 51.5, 2.5, 3.0],
            },
        },
    ],

    moat: {
        sources: [
            { key: 'ip', label: 'Owned content', description: 'Rights it owns and earns from for decades.' },
            { key: 'pipeline', label: 'Access to new work', description: 'New hit albums, or new studio orders.' },
            { key: 'buyers', label: 'Power over buyers', description: 'Whether platforms or studios can squeeze its price.' },
            { key: 'cost', label: 'Cost position', description: 'What it pays for content or people against what it earns.' },
            { key: 'cash', label: 'Profit into cash', description: 'Whether the profit arrives as cash.' },
        ],
        rows: [
            { company: 'Tips Music', trend: 'stable', trendNote: '85% of revenue from songs over three years old and a 73% margin in FY26; but content spend is rising, the CEO left in April and the YouTube Shorts deal is unsigned.',
                grades: { ip: { grade: 'A', note: '38,000+ songs, strongest in 1990s Hindi film music' }, pipeline: { grade: 'C', note: 'A few films a year; a third from the promoters’ Tips Films' }, buyers: { grade: 'B', note: 'Warner and Sony partnerships; platform split not disclosed' }, cost: { grade: 'A', note: 'Content 16% of FY26 revenue; 96 staff' }, cash: { grade: 'A', note: '80% of operating profit over five years; pays out nearly all of it' } } },
            { company: 'Saregama India', trend: 'widening', trendNote: 'No. 1 in new music in several languages, 60% of music revenue from post-2000 songs and exclusive Bhansali albums; bought at a high price.',
                grades: { ip: { grade: 'A', note: '1.8 lakh songs; the largest old-film catalogue' }, pipeline: { grade: 'A', note: '25–30% of new film music; Bhansali films at a set formula' }, buyers: { grade: 'B', note: 'No. 2 by revenue; short-form deals are flat annual fees' }, cost: { grade: 'C', note: '₹1,000cr of new content over FY25–FY27' }, cash: { grade: 'C', note: '55% over five years; free cash negative in FY26' } } },
            { company: 'Basilic Fly Studio', trend: 'narrowing', trendNote: 'Margin fell from 24% (FY25) to 14% (Q1 FY27) as prices were cut after the strikes; bid sizes and the order book are growing.',
                grades: { ip: { grade: 'D', note: 'Owns no content; paid per project' }, pipeline: { grade: 'B', note: '₹250–260cr order book; ₹700cr of bids' }, buyers: { grade: 'D', note: 'Netflix and Amazon over half of revenue' }, cost: { grade: 'B', note: 'India 30–40% cheaper; overseas staff still costly' }, cash: { grade: 'D', note: '11% of operating profit over five years' } } },
        ],
    },

    sections: [
        {
            heading: '1. Recommendation, up front',
            body: [
                "**Wait on Tips Music, the best business here, for a better price.** **Tips** owns 38,000-plus songs, most of them 1990s Hindi film hits, and earns 85% of its revenue from songs more than three years old. In FY26 it made ₹217cr of profit on ₹376cr of revenue, a 118% return on capital, and it will hand all of that profit back through dividends and a buyback. But the next three years look harder than the last three: its content budget rises to ₹90–100cr this year from ₹59cr, Q1 profit fell 4% as two film albums were expensed at once, the CEO who ran its platform deals left in April, and a promoter-owned film company is becoming a bigger supplier. The price needs about {need:Tips Music|21}% a year against my ~17%, which is **{label:Tips Music|full}**.",
                "**Wait on Saregama India.** **Saregama** is India's second-largest label by revenue, owns 1.8 lakh songs and now wins 25–30% of new film music; its music business grew 39% in Q1 and the heavy buying phase (₹1,000cr of new music over FY25–FY27) ends this year. It also bought 28% of Sanjay Leela Bhansali's production house for ₹325cr to secure his films' music. The catch is capital: profit was flat at ₹198–206cr from FY24 to FY26, return on equity is 13%, and free cash flow was negative ₹114cr in FY26. The price needs about {need:Saregama India|22}% a year against my ~15%. **Both labels are good businesses priced for more than I expect.**",
                "**Pass on Basilic Fly Studio, even though the price asks for little.** **Basilic** sells VFX work to Netflix, Amazon and Hollywood studios, mostly done in Chennai and Pune at 30–40% below Western cost, and owns 70% of UK studio One of Us. Its order book (₹250–260cr) and bids (₹700cr) are the largest it has had. But its margin fell to 13.9% in Q1 and profit by 44%; over five years it has turned only about a tenth of its operating profit into cash; ₹59cr of staff time has been capitalised; and its auditor says the accounts of its Canadian subsidiary, about a fifth of group profit, were unaudited. The price needs only about {need:Basilic Fly Studio|4}% a year against my ~10%, so it is **{label:Basilic Fly Studio|fits}**, but cheapness is not enough until the profit turns into cash.",
                "**Three things to hold onto before reading the rest.** First, **a song is paid for once and earns for decades**, so a label's profit depends on what it pays for new music; the two labels account for that cost in opposite ways (Tips expenses it at once, Saregama spreads it over about ten years). Second, **Indian music is at the very start of paying subscriptions**: about 3% of internet users pay, against 57% in the US, which is the whole bull case. Third, **a VFX studio is a people business with two or three big buyers**, so judge it on cash collected, not on pipelines.",
            ],
        },
        {
            heading: '2. Charts: margins, growth, returns, cash cycle and cash conversion',
            body: [
                "The six views that matter most, with three more behind **More measures**. Every figure comes from filed results (Tips' standalone accounts, because it has no subsidiaries; the others consolidated). None of the labels publishes an order book; Basilic's is in the text. Hover over a starred name for its caveat.",
            ],
            embed: 'metrics',
        },
        {
            heading: '3. The sector',
            body: [
                "India's media and entertainment industry grew 9% to ₹2.78 trillion in 2025, and FICCI-EY, the industry's standard annual report, expects about 7% a year to ₹3.3 trillion by 2028, with only 2.8% growth in 2026. **The money is moving to digital**: digital media crossed ₹1 trillion (up 31%), digital subscriptions rose 60% to ₹163bn and live events 44%, while linear TV advertising fell 10%. Music grew 10% to ₹59bn and FICCI-EY sees 9% a year to ₹75bn by 2028. Animation, VFX and post-production grew only about 2% to ₹105bn after a sharp fall in 2024; FICCI-EY expects 10% a year to ₹138bn by 2028. **My view: the labels sit in a slow-growing pool with one fast-growing stream (subscriptions); the VFX studio sits in a recovering but repriced global market.**",
            ],
            points: [
                {
                    label: 'Value chain',
                    text: "A film producer sells the music of a film to a label, usually before release, for a one-time fee (outright) or an advance against royalties. The label then licenses the songs to **streaming apps** (Spotify, JioSaavn, Apple, Amazon), **YouTube** (a share of advertising and YouTube Premium), **social media** (Instagram and YouTube Shorts pay flat annual fees), **TV and radio**, **brands** (sync fees for adverts) and **public performance** (hotels, restaurants, weddings, collected through copyright societies). **Saregama** and **Tips** own the rights in perpetuity, so a hit keeps paying for 60–80 years. **Basilic** sits on the production side: a studio or streamer hires it, per shot or per series, to create or clean up images. **The profit sits with whoever owns the song**: Tips' FY26 profit of ₹217cr was 58% of its revenue, and Saregama's music licensing earned a segment result of ₹364cr on ₹684cr, while Basilic earned ₹51cr on ₹408cr.",
                },
                {
                    label: 'Where the demand comes from',
                    text: "**Subscriptions are the only fast-growing pool for the labels.** Audio subscription revenue rose 48% to about ₹10bn in 2025 and paid music subscriptions 37% to 14.4 million; FICCI-EY expects 28–30 million by 2028. Saregama says revenue from the free tiers of audio apps is flat and all its growth comes from paid users. Global labels earn 50–90 paise a stream against 4–10 paise in India, according to Tips. The free platforms that shut down in FY25 (Airtel Wynk, Resso, Hungama) hurt both labels' growth for two years; Saregama says that effect is now over. For **VFX**, demand comes from Hollywood and streaming budgets: production is recovering from the 2023 strikes, and tax credits of 30–50% in France, the UK, Ireland and the Gulf pull work to studios that can do part of it in India. **My view: label revenue can grow faster than the 9% industry forecast only while subscriptions compound.**",
                },
                {
                    label: 'Policy, copyright and AI',
                    text: "The labels' moat is legal: they own sound recordings and, for most film music, the underlying compositions too. **AI is the new policy question.** A government (DPIIT) working paper from December 2025 proposes that AI developers get a mandatory blanket licence to train on any lawfully accessed work, with royalties set by a government committee and paid through a single collecting body, and no right to opt out. That would give labels a royalty stream but take away their power to refuse or negotiate. Both labels say platforms are paying nothing for purely AI-made music today, and Tips cites Universal's and Warner's licensed AI deals as a model. For VFX, AI cuts rotoscoping and cleanup time by 40–65% (FICCI-EY), which is exactly the low-end work India does most. **My view: AI is a bigger threat to Basilic's service work than to the labels' catalogues.**",
                },
                {
                    label: 'What these companies actually depend on',
                    text: "**Tips** depends on its 1990s catalogue staying popular, on YouTube and the Warner-distributed apps, and on buying a few film albums a year at sensible prices. **Saregama** depends on the same platforms, on winning new film music (increasingly through Bhansali) and on its newer businesses (artist management, live events, short video) earning their keep. **Basilic** depends on Netflix and Amazon (over half its revenue), on Western tax credits that allow Indian delivery, and on moving work from London and Paris to India faster than prices fall. **Buy each for what it depends on, not for the sector label.**",
                },
            ],
            tables: [
                {
                    caption: 'Profit pools, from filed figures (FY26, ₹cr)',
                    columns: ['Position', 'Who', 'Revenue', 'Net profit', 'Operating margin (last five quarters)', 'Where the profit sits'],
                    rows: [
                        ['Music catalogue, licensed', 'Tips', '376', '**217**', '50–79%', '85% of revenue from songs over three years old'],
                        ['Music catalogue plus new music, artists, video and events', 'Saregama', '985', '**206**', '27–42%', 'Music segment result ₹364cr; artists ₹13cr; video ₹2cr; events −₹7cr'],
                        ['VFX services', 'Basilic', '408', '51', '14–24%', 'India service work ~43% margin; overseas studios thin'],
                    ],
                    note: 'Revenue and profit: Screener (Tips standalone; others consolidated). Segment results: Saregama FY26 annual report; Basilic India margin: company call.',
                },
                {
                    caption: 'The market: size, growth and policy (named forecasters)',
                    columns: ['Measure', 'Latest', 'Outlook', 'Source'],
                    rows: [
                        ['Indian media and entertainment', '₹2.78 trillion in 2025 (+9%)', '**₹3.3 trillion by 2028** (7%+ a year); +2.8% in 2026', 'FICCI-EY, Mar 2026'],
                        ['Music', '₹59bn in 2025 (+10%); digital licensing 58%', '**₹75bn by 2028** (9% a year)', 'FICCI-EY, Mar 2026'],
                        ['Paid music subscriptions', '14.4m (+37%); audio subscription revenue ~₹10bn (+48%)', '**28–30m subscribers by 2028**', 'FICCI-EY, Mar 2026'],
                        ['Paid streaming penetration', '~3% of internet users (US 57%, Sweden 67%)', '—', 'Goldman Sachs estimate cited by Saregama'],
                        ['Digital subscriptions (video, music, news)', '₹163bn (+60%); 216m paid video subscriptions', '—', 'FICCI-EY, Mar 2026'],
                        ['Films', '₹205bn, a record; theatrical +16%', '—', 'FICCI-EY, Mar 2026'],
                        ['Animation, VFX and post-production', '₹105bn in 2025 (~+2%)', '**₹138bn by 2028** (10% a year)', 'FICCI-EY, Mar 2026'],
                        ['Global recorded music', 'US$31.7bn in 2025 (+6.4%); India ~1% of it', '—', 'IFPI 2026, cited by Tips and Saregama'],
                        ['AI and copyright', 'DPIIT working paper, Dec 2025', 'Mandatory licence for AI training with statutory royalties, no opt-out (a proposal)', 'DPIIT'],
                    ],
                    note: 'FICCI-EY figures are calendar years and gross of taxes; company figures are financial years.',
                },
                {
                    caption: 'What each business earned, Q1 FY27 (company presentations and calls)',
                    columns: ['Business', 'Revenue', 'Growth', 'Margin'],
                    rows: [
                        ['Saregama: music (licensing, artists, retail)', '₹230.6cr', '+39%', 'EBITDA 61%; after content charge 43%'],
                        ['Saregama: artist management (inside music)', '~₹40cr a quarter', 'Slowing after the build-up', '~10%'],
                        ['Saregama: live events', '₹16.0cr', '+214%', 'Loss-making festival (UN40) until FY28'],
                        ['Saregama: video', '₹17.0cr', '**−52%**', 'Own film production being wound down'],
                        ['Tips: all music', '₹106.5cr', '+21%', 'EBITDA 50.3% (64.2%); content cost ₹44.6cr'],
                        ['Basilic: India studios (standalone)', '₹26.0cr', '+28%', 'EBITDA 42.3%'],
                        ['Basilic: group', '₹103.5cr', '+10%', 'EBITDA 13.9% (19.7%)'],
                    ],
                    note: 'Figures in brackets are a year earlier. Basilic’s India revenue includes work done for its own UK studio.',
                },
            ],
        },
        {
            heading: '4. Moat (comparative)',
            body: [
                "Five things protect profits here. The grid grades each company on each one; hover over a grade for the reason. How each company's advantage works is explained in Tab 2.",
            ],
            embed: 'moat',
            embedFirst: true,
            points: [
                {
                    label: 'Lasting: songs owned for ever',
                    text: "A catalogue cannot be copied: no rival can re-create the nostalgia of a 1970s Kishore Kumar song or a 1990s Tips hit. **Saregama** owns about 1.8 lakh songs and says it is second only to T-Series by music revenue and first in non-digital income; CARE calls it the largest music archive in India. **Tips** owns 38,000-plus, and 85% of its revenue comes from songs over three years old; old songs keep trending (one Tips catalogue song drew 3 billion Instagram views). The proof is in the returns: Tips earned 118% on capital in FY26. **My view: the catalogue moat is the strongest thing in this note.**",
                },
                {
                    label: 'Real but expensive: winning new music',
                    text: "Catalogues fade unless topped up, and new film albums are fought over. **Saregama** has spent heavily to become No. 1 in new music across several languages and says it holds 25–30% of new film music; 45% of its FY26 music revenue came from songs released after 2020. It showed discipline by refusing to pay the producer's price for Dhurandhar 2's music, and its Bhansali stake gives it the director's future albums at a pre-set formula, avoiding bidding wars. **Tips** avoids bidding wars by making a third of its new music itself and taking a third from Tips Films. **My view: Saregama has bought a pipeline; Tips has kept costs low but its new-music share is small.**",
                },
                {
                    label: 'Limited: power over platforms',
                    text: "A streaming service cannot operate in India without these catalogues, but the platforms set the terms. Short-form licences (Instagram, YouTube Shorts) are still flat annual fees renewed on usage, which Saregama calls 'one of the areas which bothers us'; Tips' Shorts renewal, due in June, is still being negotiated. Both labels dislike telecom bundles because payouts are lower. **Tips**' partnerships with Warner (distribution) and Sony (publishing) help, but it does not disclose how much comes from each platform.",
                },
                {
                    label: 'Thin: a VFX studio competing on cost',
                    text: "**Basilic** has a genuine cost edge: an artist in India costs a seventh to an eighth of one in London or Paris, and its India studios earn a 42% margin. It holds the security certifications (TPN, Apple, Disney) needed to see unreleased films, and One of Us brings award-winning supervisors; its bid sizes have grown from GBP 1–2m to GBP 4–5m. But the buyers are few and powerful (Netflix and Amazon are over half of revenue), prices were cut in 2024–25 after the strikes, and FICCI-EY says studios now want 'leaner pipelines'. **My view: a cost advantage, not a moat.**",
                },
                {
                    label: 'Competitors outside the list',
                    text: "**T-Series** (unlisted, the largest label), **Sony Music**, **Zee Music**, **Universal Music** and **Warner Music** in music, plus YRF and other producers that keep their own music; artist-management agencies and live-event promoters against Saregama's newer arms. In VFX: **DNEG**, **Framestore**, **MPC**, **Rodeo FX**, **ILM** and **Scanline**, most with large Indian studios, and Indian players such as **Prime Focus** and **Phantom FX**.",
                },
            ],
        },
        {
            heading: '5. Margins (comparative)',
            body: [
                "Are the margins structural? The catalogue margins are; the new-music and VFX margins depend on what is paid for content and people. Several quarters carry timing effects, flagged below.",
                "Whether the profit turns into cash is in section 2 (the **Cash conversion** and **Free cash flow** tabs) and on each company card in Tab 2.",
            ],
            points: [
                {
                    label: 'Structural: the catalogue',
                    text: "**Tips** earned a 73% operating margin in FY26 and management guides 65–70% for FY27; its costs are content (16% of FY26 revenue), 96 staff and little else. **Saregama**'s music business earned a 60–65% EBITDA margin before content charges, and management expects its music margin after content to rise 300–500 basis points over three to five years as spending growth slows after FY27. **My view: the labels' margins are structural as long as new-music spending grows no faster than revenue.**",
                },
                {
                    label: 'Timing: albums expensed before they earn',
                    text: "**Tips** expenses the whole cost of an album on release: Q1 content cost jumped 90% to ₹44.6cr and the margin fell to 50%, while the albums' revenue began only in mid-May and will come over four to five years. **Saregama** spreads new music over about ten years, but charges marketing at once, so its Q3 FY26 carried Dhurandhar's marketing and Q4 its revenue (margin 42%). Both managements ask to be judged on twelve months. **My view: fair, but Tips' full-year margin will fall from 73% towards 65–70% as its budget rises from ₹59cr to ₹90–100cr.**",
                },
                {
                    label: 'Not structural: new businesses and one-offs',
                    text: "**Saregama**'s artist management earns about 10%, video barely broke even in FY26 and live events lost ₹7cr as its UN40 festival was launched (break-even targeted for FY28), so group margin lags the music margin. Its other income fell from ₹61cr in FY24 to ₹24cr over the last four quarters as it spent its QIP cash, which is why profit lagged operating profit. **Basilic**'s Q1 margin of 13.9% included a currency loss, M&A travel and migration costs; below that, ₹2.9cr of severance was booked as exceptional (₹3.2cr in all of FY26). Its CFO says profit would have been 14–15% of revenue without them. **My view: Basilic's 'one-offs' recur every quarter in some form.**",
                },
                {
                    label: 'Working capital: the biggest drain',
                    text: "**Basilic** waits 124 days for its money (FY26) and carried about ₹44cr of receivables older than six months, left over from the Hollywood strikes; collections from March to June were about double normal, but the aged amount has not been fully cleared. Operating cash was ₹23cr in FY26 against ₹85cr of operating profit. **My view: until debtor days fall below about 90, its reported profit is not reliable as cash.**",
                },
                {
                    label: 'Working capital: tied up in content',
                    text: "**Saregama** carries inventory (films, TV serials, Carvaan radios) and advances to producers, so its cash cycle was 164 days in FY26 and operating cash only ₹100cr against ₹337cr of operating profit. On the Q1 call management could not reconcile its own content-spend line (₹186cr in the Q4 deck, ₹265cr in the Q1 deck) and took the question offline.",
                },
                {
                    label: 'Working capital: well run',
                    text: "**Tips** is paid by platforms in about a month (33 debtor days) and turned 80% of its operating profit into cash over five years, with almost no capex. Its FY26 free cash flow was ₹191cr, 51% of revenue.",
                },
                {
                    label: 'Working capital: built into the business',
                    text: "Labels are paid monthly or quarterly by platforms, and copyright societies settle once or twice a year, so fourth quarters look strong. VFX studios are paid on milestones approved by the client, so revenue is lumpy and the cash comes later. **Judge each against its own history, not against the others.**",
                },
            ],
            tables: [
                {
                    caption: 'Q1 FY27 cash and capital, as stated on the calls',
                    columns: ['Company', 'What management said', 'Balance sheet'],
                    rows: [
                        ['Tips Music', 'Cash and investments about ₹345cr at June; all of FY26 profit (₹217cr) to be returned as dividends and a buyback (up to ₹44.5cr at up to ₹750 a share, promoters excluded)', 'Net cash ₹153cr at March on Screener’s cash and investment lines (bank deposits excluded); no debt'],
                        ['Saregama India', 'New-music spend ₹300–350cr in FY27, "most of that is already committed"; spending to grow only high single to low double digits from FY28; other income lower because cash went into Bhansali', 'Net cash ₹76cr at March (Screener cash less ₹73cr of working-capital borrowings); CARE counts about ₹203cr of cash and liquid investments, including ₹101cr of unspent QIP money'],
                        ['Basilic Fly Studio', 'Unused QIP ₹37cr and IPO ₹21cr, mostly in deposits; a ₹200–300cr North American acquisition to be paid from cash; March–June collections about twice normal', 'Net debt ₹32cr at March (Screener: borrowings ₹106cr including leases, cash ₹74cr)'],
                    ],
                    note: 'Indian companies file cash flows only half-yearly, so Q1 figures are management’s. Company and Screener cash figures differ because of how deposits and investments are counted.',
                },
            ],
        },
        {
            heading: '6. Growth and capex (comparative)',
            body: [
                "Where the next five years of growth come from, how each company has done against what it promised on its previous call, and my own estimate of earnings growth. For the labels, 'capex' means buying music; for Basilic, it means people, computers and acquisitions.",
            ],
            points: [
                {
                    label: 'Growth driver: paying subscribers',
                    text: "Both labels are paid a share of what each subscriber listens to, so every extra paying user raises revenue with no extra cost. Paid subscription is only 10–15% of Tips' digital revenue, against over 50% for global labels, and Tips says it is growing 40–50% a year. Saregama's MD thinks India could reach 100 million paying users at about ₹100 a month within 12–18 months if platforms cut the free tier; that is his personal view, and FICCI-EY's forecast is 28–30 million by 2028. Spotify and YouTube raised prices in late 2025, and Amazon Music introduced tiers. **My view: I use FICCI-EY's pace, not the MD's hope; a sudden end to free listening is upside I do not count on.**",
                },
                {
                    label: 'Growth driver: new music and the Bhansali pipeline',
                    text: "**Saregama** guides its music business to grow 20–23% a year over three to five years at a 60–65% EBITDA margin. It spent about ₹316cr on new content in FY25 and ₹339cr in FY26 (CARE's count), plans ₹300–350cr in FY27, then only inflation-like increases. Its ₹325cr for 28% of Bhansali Productions (with a right to reach 51% by 2030) secures his films' music at a set formula; the next releases, including Love & War, are due in Q4 FY27. It claims a 26% return on new music, paid back in about five years. **Tips** plans ₹90–100cr for FY27 and 20–25% of revenue after that, with about five films this year. **My view: Saregama's spending should start to pay back from FY28; Tips is now spending more to keep growing.**",
                },
                {
                    label: 'Growth driver: short video, public performance and brands',
                    text: "Short-form apps pay flat fees today; both labels hope for a share of advertising, which Saregama calls a significant opportunity. Tips puts public-performance income at about ₹500cr for the industry and hopes for ₹3,000cr in three years as licences move online. **Saregama** has built a brand-partnership team selling songs, artists, events and FilterCopy videos together (19% of FY26 revenue came from brands), manages 309 artists and runs 90-plus shows a quarter. **My view: real options, but none is yet large enough to move my numbers.**",
                },
                {
                    label: 'Growth driver: offshoring VFX to India',
                    text: "**Basilic** is moving roles from London and Paris to India (30–40 senior roles moved; a 150-seat Bengaluru studio from October), has spent ₹73cr on AI tools, a shared pipeline and owned storage in FY26, and is bidding for larger jobs (one GBP 4–4.5m win). It has ₹250–260cr of work to deliver in FY27, ₹700cr of bids (40% at an advanced stage) and plans a ₹200–300cr North American acquisition. The payback on the ₹73cr and on the ₹59cr of capitalised staff time has not been shown. **My view: the order book supports revenue growth; the margin is the question.**",
                },
                {
                    label: 'Delivering or beating',
                    text: "**Saregama** did what it said in May: music revenue rose 39% in Q1 (on a low base) against its 20–23% guide, music EBITDA margin was 61% (60–65% guided), Pocket Aces broke even in FY26 as promised and the video wind-down went to plan (−52%). **Tips** delivered its revenue target: +21% in Q1 against 20%, after +32% in Q4 and +21% in FY26, when profit rose 30% against a 25% target.",
                },
                {
                    label: 'Cautious',
                    text: "**Tips** refused to raise its 20% target in April ('we don't want to over-promise') and in July raised its content budget to ₹90–100cr from ₹80–90cr. **Saregama** gives no quarterly guidance and no group margin target, and will not disclose subscription revenue. **Basilic** gave no margin figure in August, having promised in June a 1.5–2.5 point rise and profit of ₹65–70cr.",
                },
                {
                    label: 'Missed (so far)',
                    text: "**Basilic**: in June management called 30% growth 'conservative' and expected margins to rise; in Q1 revenue grew 10%, the margin fell to 13.9% from 19.7% and profit fell 44% to ₹6.7cr. Aged receivables were to be cleared 'latest maybe by H1'; in September they were still being paid in tranches. The North American acquisition has been 'at an advanced stage' for several quarters. **Tips**' YouTube Shorts renewal, due in June, is still unsigned.",
                },
                {
                    label: 'Mixed',
                    text: "**Tips** met its revenue target but Q1 profit fell 4% as album costs were expensed. **Saregama**'s music business grew, but group profit growth has lagged for three years as amortisation rose from ₹36cr (FY24) to ₹88cr (last four quarters) and interest income fell.",
                },
                {
                    label: 'My outlook',
                    text: "**I expect Tips to compound earnings at about 17% a year, Saregama at about 15% and Basilic at about 10% with a wide range.** Tips grew profit 38% a year over five years, but its content costs are rising and the industry grows about 9%. Saregama's profit should grow faster than its flat FY24–FY26 record once content spending slows after FY27, but other income is shrinking and new businesses earn thin margins. Basilic could grow faster if its order book converts at better margins, or not at all if pricing and the acquisition go wrong.",
                },
            ],
            tables: [
                {
                    caption: 'My estimate of earnings growth over the next three to five years',
                    numericColumns: [2],
                    columns: ['Company', 'What drives it', 'Earnings growth: low / base / high'],
                    rows: [
                        ['Tips Music', 'Subscriptions; catalogue; content cost rising to 20–25% of revenue', '10% / **17%** / 24%'],
                        ['Saregama India', 'Music +20–23% guided; content spend slowing after FY27; Bhansali; thin new businesses', '10% / **15%** / 22%'],
                        ['Basilic Fly Studio', 'Order book; offshoring; pricing; acquisition risk', '0% / **10%** / 25%'],
                    ],
                    note: 'My own judgement, not guidance. The growth each price needs is in the live valuation table in section 8.',
                },
                {
                    caption: 'Guidance, capex and track record (Q4 FY26 call promise against Q1 FY27 delivery)',
                    badgeColumn: 3,
                    columns: ['Company', 'Guidance now', 'Capex', 'Track record'],
                    rows: [
                        ['Tips Music', 'Revenue and profit +20% in FY27; EBITDA margin 65–70% for the year; content ₹90–100cr (₹80–90cr in April)', 'Almost none; content expensed on release (₹44.6cr in Q1)', '**Mixed**: revenue +21%, profit −4%'],
                        ['Saregama India', 'Music revenue +20–23% a year; music EBITDA margin 60–65%; new music ₹300–350cr in FY27, slower after', '₹214cr of rights bought in FY26 (Screener); ₹325cr Bhansali stake', '**Delivered**: music revenue +39%, margin 61%'],
                        ['Basilic Fly Studio', 'Organic growth ~30% or more; no margin figure (in June: +1.5–2.5 points and profit ₹65–70cr)', '₹73cr in FY26 on AI, pipeline and storage; ₹59cr capitalised; Bengaluru; ₹200–300cr acquisition', '**Missed**: margin 13.9%, profit −44%'],
                    ],
                },
            ],
        },
        {
            heading: '7. Risk factors',
            body: [
                "The risks fall into six groups. For each, what management addressed and what it left unanswered; several of the most important came from the annual reports and rating reports, not from the calls.",
            ],
            points: [
                {
                    label: 'Paying too much for new content',
                    text: "**Saregama** committed ₹1,000cr to new music over FY25–FY27 plus ₹325cr to Bhansali, and its profit has not grown for three years; CARE lists 'high cost of quality content acquisition' as a key weakness. Its auditors made the Bhansali deal a key audit matter: the stake's value depends on the producer's next three years, and Saregama must buy more if its stake falls below 28%. **Tips**' Q1 cost per song was about four times last year's, which management says reflects film music. **Neither label proves its payback claims with disclosed figures.**",
                },
                {
                    label: 'Platforms, short video and AI',
                    text: "Both labels depend on a handful of platforms, and neither discloses the split; Saregama has one customer worth ₹129cr (13% of revenue). Short-form deals are flat fees, Tips' YouTube Shorts renewal is overdue, and a government proposal would force labels to license their songs for AI training at government-set rates. For **Basilic**, AI shrinks the hours in the rotoscoping and cleanup work that makes up most of its India volume (management says 85% of the team does this kind of work).",
                },
                {
                    label: 'Audit and accounting findings',
                    text: "**Basilic**'s auditor (L U Krishnan & Co.) says the FY26 accounts of its Canadian subsidiary (revenue ₹67cr, profit ₹10.1cr, about a fifth of group profit) were unaudited and furnished by management; the UK studios (revenue ₹287cr) were audited by other auditors. It has also capitalised ₹59cr of mostly internal staff time as intangible assets, more than a year's profit, which will be written off over future years or written down if it fails. **Saregama**'s 'unallocable expenditure' rose from ₹7cr (FY23) to ₹74cr (FY26) with an explanation (lower interest income netted in) that an analyst said did not add up. **Tips**' opinion was clean, with contingent liabilities of only ₹1.9cr.",
                },
                {
                    label: 'Related parties and promoters',
                    text: "**Tips** buys film music from **Tips Films**, in which Kumar and Ramesh Taurani each own about 20%: ₹17.3cr of rights plus ₹15.5cr of advances in FY26, and shareholders are asked to approve up to ₹60cr for FY27 (16% of turnover). Tips Films lost ₹15.8cr in FY26, and the arm's-length check is done only after each project. The promoters sold 6% of Tips in December 2023 and another 5% in January 2024, and now hold 64.15%, down from 75%. **Saregama** pays its promoter group ₹15cr a year in brand royalty. **Basilic**'s promoters' share fell from 59.9% to 55.3%, mostly through the QIP.",
                },
                {
                    label: 'People and management changes',
                    text: "**Tips**' CEO Hari Nair, who negotiated its Warner and Shorts deals, left on 30 April 2026 and has not been replaced. **Saregama**'s CFO left on 31 March; a new CFO joined in time for the Q1 call. **Basilic** is laying off staff in London and Paris to move work to India, and says the next acquisition may start the same process again.",
                },
                {
                    label: 'Contingent liabilities and concentration',
                    text: "**Saregama** carries ₹128cr of disputed tax demands (income tax ₹28.8cr, indirect taxes ₹99.2cr), about 7.5% of its net worth. **Basilic** reports none, but Netflix and Amazon provide over half its revenue, Europe 79% of Q1 revenue, and 99% of its income is in foreign currency (CRISIL). CRISIL rates Basilic A- and notes bank limits about 85% used; CARE rates Saregama AA-.",
                },
            ],
        },
        {
            heading: '8. Valuation (comparative)',
            body: [
                "Two yardsticks. **P/E** compares the share price with profit after tax. **EV/EBITDA** compares the value of the whole business (market value plus debt, minus cash) with operating profit, so it gives credit for cash and charges for debt. Where the two disagree, the balance sheet is the reason.",
                "To earn about 12% a year while the P/E drifts to 18x over ten years, earnings must compound at roughly **8% at 13x, 14% at 22x, 18% at 30x, 21% at 40x and 24% at 50x.** The quality-vs-price chart at the top of this tab shows return on capital against the P/E.",
            ],
            points: [
                {
                    label: 'What EV/EBITDA changes',
                    text: "Little for the labels: **Tips** holds cash worth only a small slice of its market value (₹345cr by its own count) and **Saregama**'s free cash is small once the Bhansali stake is left out. But the two labels account for content differently: Tips expenses it, so its operating profit is after content, while part of Saregama's content cost sits in amortisation, below operating profit. **Saregama** therefore looks cheaper on EV/EBITDA than on P/E. **Basilic** carries ₹32cr of net debt, so its EV/EBITDA is a little higher than its low P/E suggests.",
                },
                {
                    label: 'Fits',
                    text: "**Basilic**: the price needs about {need:Basilic Fly Studio|4}% a year against my ~10%, so the label is {label:Basilic Fly Studio|fits}. That is why a pass needs explaining: the market is pricing in the cash problem, the unaudited subsidiary, the capitalised costs and a history of disappointments. If the second half delivers the promised margin and debtors fall, the price is low; if not, the profit it is measured against will shrink.",
                },
                {
                    label: 'Full',
                    text: "**Tips**: the price needs about {need:Tips Music|21}% a year against my ~17%. It would fit if Tips kept up its five-year pace (profit +38% a year) or if a Shorts deal with an advertising share and faster subscription growth arrived. It would get worse if content costs stay near 40% of revenue, as in Q1, or if more music comes from the promoters' film company. The buyback at up to ₹750 a share is a small support, 0.46% of the shares.",
                },
                {
                    label: 'Stretched',
                    text: "**Saregama**: the price needs about {need:Saregama India|22}% a year against my ~15%. That asks for its music guidance (20–23%) to turn into profit growth of the same speed from a base that has not grown in three years, while other income falls and amortisation rises. The case would improve once FY28 shows content spending slowing and free cash flow turning positive.",
                },
                {
                    label: 'Distorted by timing and one-offs',
                    text: "**Tips**' trailing profit includes a Q1 hit from expensing two albums whose revenue comes later, so its P/E looks a little high; on the other hand FY26 content spending was unusually low (16% of revenue). **Saregama**'s trailing profit (₹221cr) includes a strong Q4 helped by about ₹10cr of royalty provisions written back. **Basilic**'s trailing profit (₹45cr) includes Q1's currency loss and severance, which management calls one-offs.",
                },
            ],
            embed: 'valuation',
        },
    ],

    verdicts: [
        {
            company: 'Tips Music', rank: 1, stance: 'PRICED', segment: LABELS,
            what: "A music label owning 38,000-plus songs, strongest in 1990s Hindi film music, licensed to YouTube, streaming apps, broadcasters and brands; controlled by the Taurani family.",
            view: "**The best economics here, priced for more growth than I expect.** A 73% margin and 118% return on capital in FY26, ₹345cr of cash and all profit paid out. But content spending rises to ₹90–100cr from ₹59cr, Q1 profit fell 4%, the CEO has gone and Tips Films supplies more music. The price needs about {need:Tips Music|21}% a year against my ~17%.",
            watch: 'Full-year margin holding at 65–70% with the higher content budget; the YouTube Shorts renewal; how much music comes from Tips Films.',
        },
        {
            company: 'Saregama India', rank: 2, stance: 'PRICED', segment: LABELS,
            what: "India's oldest and second-largest music label (RPSG group), with 1.8 lakh songs, artist management, live events, short video (Pocket Aces) and a 28% stake in Bhansali Productions.",
            view: "**A strong label in an expensive buying phase.** Music revenue +39% in Q1, No. 1 in new music, and the ₹1,000cr content plan ends this year. But profit was flat for three years, return on equity is 13% and FY26 free cash flow was −₹114cr. The price needs about {need:Saregama India|22}% a year against my ~15%.",
            watch: 'Music net margin rising as content spending slows after FY27; Bhansali releases (Love & War) in Q4 FY27; free cash flow turning positive.',
        },
        {
            company: 'Basilic Fly Studio', rank: 3, stance: 'TURNAROUND', segment: VFX,
            what: "A VFX studio working for Netflix, Amazon and Hollywood from Chennai, Pune and Bengaluru, with 70% of UK studio One of Us and offices in Paris and Vancouver; listed on NSE's SME board.",
            view: "**Cheap, but the profit is not arriving as cash.** Record order book (₹250–260cr) and bids (₹700cr), but Q1 margin 13.9% and profit −44%, about a tenth of five years' operating profit turned into cash, ₹59cr of staff time capitalised and an unaudited Canadian subsidiary. The price needs only about {need:Basilic Fly Studio|4}% a year against my ~10%.",
            watch: 'H2 FY27 margin back above 20%; debtor days below 90 and positive free cash flow; audited accounts for every subsidiary and the price of the acquisition.',
        },
    ],

    closing: {
        heading: '9. Summary review',
        body: [
            "**Music labels.** **Tips Music: wait** for a price nearer my ~17% growth; the catalogue is superb but content costs and related-party buying are rising. **Saregama India: wait** until the content-buying phase ends and free cash flow turns positive; the price needs about {need:Saregama India|22}% a year.",
            "**Visual effects.** **Basilic Fly Studio: pass.** The price asks for little, but the profit has not become cash and a fifth of it sits in unaudited accounts.",
            "**What would change my view.** For the better: paid music subscriptions accelerating or short-video deals moving to an advertising share (both labels); Tips' content costs settling near 20% of revenue; Basilic delivering its second-half margin with cash. For the worse: labels overpaying for film music, a government-set AI licence, or Basilic overpaying for its acquisition.",
            "**What to watch next quarter.** Tips' Q2 margin and Shorts deal; Saregama's music growth against a higher base and its Arjun Dhillon and Diljit events; Basilic's H1 debtors, cash flow and order conversion.",
        ],
        bottomLine:
            "Wait on the two music labels (Tips Music, Saregama India): superb catalogues, but both prices ask for more growth than rising content costs allow; pass on Basilic Fly Studio until its profits turn into cash.",
    },

    sources: [
        { label: 'Filed quarterly results, annual ratios and cash flows — Screener.in', url: 'https://www.screener.in/company/SAREGAMA/consolidated/' },
        { label: 'India’s M&E sector grew 9% to ₹2.78 trillion in 2025 (FICCI-EY report) — EY India, Mar 2026', url: 'https://www.ey.com/en_in/newsroom/2026/03/india-s-media-and-entertainment-sector-grew-9-percent-to-inr-2-point-78-trillion-in-2025-driven-by-digital-and-live-experiences-ficci-ey-report' },
        { label: 'FICCI-EY 2026: Indian VFX segment recalibrates — AnimationXpress', url: 'https://www.animationxpress.com/latest-news/ficci-ey-report-2026-indian-vfx-segment-recalibrates-to-reach-rs-48-billion-revenue/' },
        { label: 'DPIIT working paper on generative AI and copyright (summary) — ALG India', url: 'https://www.algindia.com/summary-working-paper-on-generative-ai-and-copyright-part-i-one-nation-one-license-one-paymentdepartment-for-promotion-of-industry-and-internal-trade/' },
        { label: 'Saregama investor presentation and press release, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=522606f0-c816-4cc6-8a54-c5efeb4d65c6.pdf' },
        { label: 'Saregama earnings call transcript, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=230ecb5d-c611-4baa-be27-98cf079bcf8e.pdf' },
        { label: 'Saregama Integrated Annual Report FY26 (segments, Bhansali, contingent liabilities, related parties) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/005c99f8-916b-44d9-b085-f1eb5964358e.pdf' },
        { label: 'Saregama India rating rationale — CARE Ratings, Jul 2026', url: 'https://www.careratings.com/upload/CompanyFiles/PR/202607120717_Saregama_India_Limited.pdf' },
        { label: 'Saregama invests $36m in Bhansali Productions — Music Business Worldwide', url: 'https://www.musicbusinessworldwide.com/saregama-invests-36m-in-bollywood-studio-bhansali-productions-secures-exclusive-music-rights-for-future-films/' },
        { label: 'Tips Music investor presentation, Q1 FY27 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8e22469c-72a5-4f12-8743-16da35fdd2b5.pdf' },
        { label: 'Tips Music earnings call transcripts, Q1 FY27 and Q4 FY26 — BSE', url: 'https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=74b7a9f9-860c-4b02-9021-2b56a47499f0.pdf' },
        { label: 'Tips Music Annual Report FY26 (Tips Films transactions, buyback, FICCI-EY music figures) — BSE', url: 'https://www.bseindia.com/xml-data/corpfiling/AttachHis/b105893e-c998-4bcf-b2c4-143aafe656f9.pdf' },
        { label: 'Taurani family sells 6.07% of Tips Industries — Outlook Business, Dec 2023', url: 'https://www.outlookbusiness.com/corporate/taurani-brothers-2-others-sell-607-pc-stake-in-tips-industries' },
        { label: 'Basilic Fly Studio earnings call transcript, Q1 FY27 — NSE', url: 'https://nsearchives.nseindia.com/corporate/BASILIC_24082026152130_Transcript.pdf' },
        { label: 'Basilic Fly Studio earnings call transcript, Q4 FY26 — NSE', url: 'https://nsearchives.nseindia.com/corporate/BASILIC_09062026150711_Q4_Earnings_Call_Transcript.pdf' },
        { label: 'Basilic Fly Studio investor presentation, Q1 FY27 — NSE', url: 'https://nsearchives.nseindia.com/corporate/BASILIC_14082026214140_Investor_Presentation_Q1.pdf' },
        { label: 'Basilic Fly Studio Annual Report FY26 (unaudited subsidiary, borrowings, related parties) — NSE', url: 'https://archives.nseindia.com/annual_reports/SME_AR_31365_BASILIC_2025_2026_A_39699171_04092026150437.pdf' },
        { label: 'Basilic Fly Studio rating rationale — CRISIL, Jan 2026', url: 'https://www.crisil.com/mnt/winshare/Ratings/RatingList/RatingDocs/BasilicFlyStudioLimited_January%2019_%202026_RR_386847.html' },
    ],
};
