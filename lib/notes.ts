// The key of the original, pre-existing general note. Kept so it keeps its
// familiar name even though it was saved before notes had titles.
export const GENERAL_NOTE_KEY = "__general__";

export function defaultNoteTitle(key: string) {
    return key === GENERAL_NOTE_KEY ? "General Notes" : "Untitled Note";
}
