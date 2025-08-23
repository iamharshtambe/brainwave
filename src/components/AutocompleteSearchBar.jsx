import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AutocompleteSearchBar() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/recipes/search?q=');

      const data = await response.json();

      setResults(data?.recipes);
    }
    fetchData();
  }, [input]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">
          Autocomplete Search Bar
        </h1>

        <div className="mx-auto flex w-full items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search a recipe..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-2xl border border-sky-500 bg-white px-3 py-2 text-black"
          />

          <button className="cursor-pointer rounded-full bg-white px-3 py-2">
            <Search size={24} className="text-black" />
          </button>
        </div>

        <div className="my-4 flex h-[500px] w-full flex-col overflow-y-scroll border border-white p-2 text-left">
          {results.map((result) => (
            <span key={result.id} className="py-2 hover:bg-neutral-800">
              {result.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
