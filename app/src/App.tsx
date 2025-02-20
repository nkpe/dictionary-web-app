import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { DictionaryResult } from './types/DictionaryResult';

function App() {
  const [dictionaryResult, setDictionaryResult] = useState<DictionaryResult | null>();

  return (
    <main className="bg-cyan-100 w-full min-h-screen flex flex-col p-[50px] gap-2">
      <h1 className="text-lg font-bold">Dictionary</h1>
      <SearchBar updateDictionaryResult={(result: DictionaryResult | null) => setDictionaryResult(result)}/>
    </main>
  )
}

export default App
