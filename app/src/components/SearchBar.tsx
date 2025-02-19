import { Search } from 'lucide-react';

export const SearchBar = () => {
    return (
        <div className="border-2 border-solid border-cyan-500 rounded-lg w-full flex p-[5px]">
            <input type="text" placeholder="Start typing any word" id="search-input" className="w-full" />
            <Search color="grey" />
        </div>
    )
}