import './App.css';
import { SearchBar } from './components/SearchBar';
function App() {

  return (
    <main className="bg-cyan-100 w-full min-h-screen flex flex-col p-[50px] gap-2">
      <h1 className="text-lg font-bold">Dictionary</h1>
      <SearchBar />
    </main>
  )
}

export default App
