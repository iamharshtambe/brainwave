import { CircleMinus, CirclePlus } from 'lucide-react';
import { useState } from 'react';

export default function CounterWithUndoRedo() {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-black text-white">
      <h1 className="ml-2 font-bitcount text-5xl">Counter</h1>

      <div className="flex items-center gap-5">
        <CircleMinus onClick={handleSubtract} />
        <span className="rounded-2xl bg-white p-2 text-2xl text-black">
          Count: {count}
        </span>
        <CirclePlus onClick={() => setCount(count + 1)} />
      </div>
    </div>
  );
}
