const progressBars = [20, 40, 60, 80, 100];

export default function ProgressBar() {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">Progress Bar</h1>

        <div>
          {progressBars.map((progressValue) => (
            <div className="my-3 w-[600px] overflow-hidden rounded-2xl border-2 border-white bg-white text-black">
              <div
                style={{ width: `${progressValue}%` }}
                role="progressbar"
                aria-valuenow={progressValue}
                aria-valuemax="100"
                aria-valuemin="0"
                className="bg-blue-500 px-2 py-1"
              >
                {progressValue}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
