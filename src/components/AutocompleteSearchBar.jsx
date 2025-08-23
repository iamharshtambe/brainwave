import { ChartArea, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function AutocompleteSearchBar() {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (!input) {
        setResults([]);
        return;
      }

      if (cache[input]) {
        setResults(cache[input]);
        return;
      }

      const response = await fetch(
        `https://dummyjson.com/recipes/search?q=${input}`,
      );

      const data = await response.json();

      setResults(data?.recipes);

      setCache((prev) => ({ ...prev, [input]: data?.recipes }));
    }

    const timer = setTimeout(fetchData, 300);

    return () => clearTimeout(timer);
  }, [input, cache]);

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
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            className="w-full rounded-2xl border border-sky-500 bg-white px-3 py-2 text-black"
          />

          <button className="cursor-pointer rounded-full bg-white px-3 py-2">
            <Search size={24} className="text-black" />
          </button>
        </div>

        {showResults && results.length > 0 && (
          <div className="my-4 flex max-h-[500px] w-full flex-col overflow-y-scroll border border-white p-2 text-left">
            {results.map((result) => (
              <span
                key={result.id}
                className="cursor-pointer py-2 hover:bg-neutral-800"
              >
                {result.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
