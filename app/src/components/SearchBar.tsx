import { Search } from 'lucide-react';
import { useState } from 'react';

export const SearchBar = () => {
    const [word, setWord] = useState("");

    const sendRequest = () => {
        // http request
        console.log("button")
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
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