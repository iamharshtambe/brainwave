import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AutocompleteSearchBar() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://dummyjson.com/recipes/search?q=');

      const data = await response.json();

      setResults(data);
    }
    fetchData();
  }, []);

  console.log(results.recipes);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">
          Autocomplete Search Bar
        </h1>

        <div className="mx-auto flex items-center justify-between">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-10/12 rounded-2xl border border-sky-500 bg-white px-3 py-2 text-black"
          />

          <Search size={36} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
