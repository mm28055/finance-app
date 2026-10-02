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
    return SHOWN_AS[name] ?? name.replace(/\s*\((India|I)\)/g, '').trim();
}
