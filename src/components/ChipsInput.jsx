import { useState } from 'react';
import { X } from 'lucide-react';

export default function ChipsInput() {
  const [inputText, setInputText] = useState('');
  const [chips, setChips] = useState([]);

  function handleAddChip() {
    const trimmedInputText = inputText.trim();

    if (trimmedInputText && !chips.includes(trimmedInputText)) {
      setChips([...chips, trimmedInputText]);
    }

    setInputText('');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddChip();
    }
  }

  function handleDeleteChip(chipToRemove) {
    setChips(chips.filter((chip) => chip !== chipToRemove));
  }

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <h1 className="font-bitcount text-4xl text-white">Chips Input</h1>

        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          className="relative mt-6 w-[300px] rounded-2xl border border-neutral-200 bg-white px-2 py-2 hover:bg-gray-200"
        />

        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-start gap-6">
          {chips.length === 0 ? (
            <p className="text-white">Start adding chips 😃</p>
          ) : (
            chips.map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 rounded-full bg-white px-2 py-1 text-black"
              >
                {chip}
                <X
                  className="cursor-pointer"
                  onClick={() => handleDeleteChip(chip)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
