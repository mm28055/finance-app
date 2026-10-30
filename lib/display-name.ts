// How a company's name is shown on the dashboard when the stored name reads badly.
// Display only: the stored name stays the key everywhere (notes, filings, checkpoints, database),
// and search still matches the stored name.
const SHOWN_AS: Record<string, string> = {
    'ideaForge Technology': 'Ideaforge Technology',
    'AXISCADES Technologies': 'Axiscades Technologies',
    'Mishra Dhatu Nigam (MIDHANI)': 'Mishra Dhatu Nigam',
    'Dishman Carbogen (Carbogen Amcis)': 'Dishman Carbogen',
    'TAC Security (Tac Infosec)': 'TAC Security',
    'GPT Healthcare (Agilus)': 'GPT Healthcare',
};

export function displayCase(name: string): string {
    // "(India)" and "(I)" are legal padding and go. Brackets that tell companies apart or carry the
    // name people know stay: SKF India (Industrial), Rane (Madras), Honasa Consumer (Mamaearth).
    // A trailing "Ltd" / "Limited" is legal padding too.
    return SHOWN_AS[name] ?? name.replace(/\s*\((India|I)\)/g, '').replace(/\s+(Ltd\.?|Limited)$/i, '').trim();
}

// Names people use for companies whose short form is not simply the first word.
const SHORT_AS: Record<string, string> = {
    'State Bank of India': 'SBI',
    'Mishra Dhatu Nigam (MIDHANI)': 'Midhani',
    'Hindustan Aeronautics': 'HAL',
    'Bharat Electronics': 'BEL',
    'Bharat Dynamics': 'BDL',
    'Larsen & Toubro': 'L&T',
    'Action Const.Eq.': 'ACE',
};
// Words that only say what kind of company it is; dropped from short names.
const GENERIC = new Set(['technologies', 'technology', 'tech', 'techsys', 'industries', 'industrial', 'engineering', 'engineers', 'aerospace',
    'products', 'systems', 'solutions', 'limited', 'ltd', 'india', 'enterprises', 'corporation', 'corp', 'company', 'holdings', 'ventures',
    'services', 'international', 'precision', 'manufacturing', 'mechatronics', 'pharmaceuticals', 'laboratories', 'labs', 'chemicals',
    'microwave', 'global', '&', 'and', 'of', 'the']);
// First words too common to stand alone ("Data" Patterns, "Northern" Arc): keep the second word too.
const WEAK_FIRST = new Set(['data', 'state', 'northern', 'southern', 'bharat', 'hindustan', 'indian', 'india', 'power', 'national', 'new',
    'shree', 'shri', 'sri', 'sun', 'tata', 'bajaj', 'jindal', 'mahindra', 'aditya', 'birla', 'reliance', 'adani', 'kotak', 'godrej',
    'apollo', 'action', 'premier', 'united', 'general', 'great', 'eastern', 'western', 'central', 'asian', 'gujarat', 'kirloskar', 'jk', 'ge']);

/** A company name short enough for a narrow column heading: "Unimech Aerospace" → "Unimech", "Data Patterns" stays. */
export function shortName(name: string): string {
    if (SHORT_AS[name]) return SHORT_AS[name];
    const words = displayCase(name).replace(/\s*\([^)]*\)/g, '').split(/\s+/).filter(Boolean);
    const kept = [words[0], ...words.slice(1).filter(w => !GENERIC.has(w.toLowerCase().replace(/[.,]/g, '')))];
    if (kept.length === 1) return kept[0];
    if (WEAK_FIRST.has(kept[0].toLowerCase())) return kept.slice(0, 2).join(' ');
    return kept.join(' ').length <= 10 ? kept.join(' ') : kept[0];
}
