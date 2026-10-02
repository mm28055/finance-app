// How a company's name is shown on the dashboard when the stored name's capitalisation reads badly.
// Display only: the stored name stays the key everywhere (notes, filings, checkpoints, database).
const CASING: Record<string, string> = {
    'ideaForge Technology': 'Ideaforge Technology',
    'AXISCADES Technologies': 'Axiscades Technologies',
};

export function displayCase(name: string): string {
    return CASING[name] ?? name;
}
