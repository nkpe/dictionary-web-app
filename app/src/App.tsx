import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { DictionaryResult } from './types/DictionaryResult';
import { ResultsPane } from './components/ResultsPane';

function App() {
  const [dictionaryResult, setDictionaryResult] = useState<DictionaryResult | null>();

  return (
    <main className="bg-cyan-50 w-full min-h-screen flex flex-col p-[50px] gap-2">
      <h1 className="text-lg font-bold">Dictionary</h1>
      <SearchBar updateDictionaryResult={(result: DictionaryResult | null) => setDictionaryResult(result)} />
      {dictionaryResult ?
        <ResultsPane dictionaryResult={dictionaryResult} />
        :
        null
      }
    </main>
  )
}

export default App
