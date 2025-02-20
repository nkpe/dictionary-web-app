import { Search } from 'lucide-react';
import { useState } from 'react';
import { DictionaryResult } from '../types/DictionaryResult';

export const SearchBar = ({updateDictionaryResult}: {updateDictionaryResult: (value: DictionaryResult | null) => void}) => {
    const [word, setWord] = useState<string>("");

    const parseResult = (data: any): DictionaryResult | null => {   
        const firstData = data[0]
        console.log(firstData)
        try {
            const result: DictionaryResult = {
                word: firstData["word"],
                phoneticsText:  firstData["phonetics"].find((el: any) => el["text"] !== undefined)["text"],
                meanings: {
                    partOfSpeech: firstData["meanings"][0]["partOfSpeech"],
                    definitions: firstData["meanings"][0]["definitions"].map((obj: any) => obj.definition),
                    synonyms: firstData["meanings"][0]["synonyms"]
                },
                sourceUrl: firstData["sourceUrls"][0]
           }
           return result;
        } catch (error){
            if (error instanceof Error){
                console.error(error)
            }
            return null;
        }   
    }

    const sendRequest = () => {
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const result: DictionaryResult | null = parseResult(data);
                updateDictionaryResult(result)
            })
            .catch(error => console.error(error.message))
    }

    return (
        <div className="border-2 border-solid border-cyan-500 rounded-lg w-full flex p-[5px]">
            <input type="text" placeholder="Start typing any word" id="search-input" className="w-full" value={word} onChange={e => setWord(e.target.value)} onKeyDown={(e) => {
                if (e.key === "Enter") {
                    sendRequest();
                }
            }} />
            <button type="button" onClick={sendRequest}>
                <Search color="grey" />
            </button>
        </div>
    )
}