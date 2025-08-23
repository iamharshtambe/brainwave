import { Search } from 'lucide-react';

export default function AutocompleteSearchBar() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">
          Autocomplete Search Bar
        </h1>

        <div className="mx-auto flex items-center justify-between">
          <input
            type="text"
            className="w-10/12 rounded-2xl border border-sky-500 bg-white px-2 py-1"
          />

          <Search size={30} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
