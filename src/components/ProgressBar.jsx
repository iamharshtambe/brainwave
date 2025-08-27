import { useEffect, useState } from 'react';

const PROGRESS_VALUES = [20, 40, 60, 80, 100];

export default function ProgressBar() {
  const [animatedProgress, setAnimatedProgress] = useState(
    PROGRESS_VALUES.map(() => 0),
  );

  useEffect(() => {
    const r = requestAnimationFrame(() => {
      setAnimatedProgress(PROGRESS_VALUES);
    });

    return () => cancelAnimationFrame(r);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">Progress Bar</h1>

        {animatedProgress.map((progressValue, i) => (
          <div
            key={i}
            className="my-3 w-[600px] overflow-hidden rounded-2xl border-2 border-white bg-white text-black"
          >
            <div
              style={{
                width: `${progressValue}%`,
              }}
              role="progressbar"
              aria-valuenow={progressValue}
              aria-valuemin="0"
              aria-valuemax="100"
              className="bg-blue-500 px-2 py-1 text-right transition-all duration-800 ease-in"
            >
              {progressValue}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
