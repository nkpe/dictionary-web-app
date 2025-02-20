export type DictionaryResult = {
    word: string,
    phoneticsText: string, 
    meanings: {
        partOfSpeech: string,
        definitions: string[],
        synonyms: string[]
    },
    sourceUrl: string, 
}