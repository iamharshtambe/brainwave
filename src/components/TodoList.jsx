export default function TodoList() {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">Todo List</h1>

        <div className="w-full rounded-full bg-neutral-200 text-black">
          <input
            type="text"
            placeholder="Add your task"
            className="h-14 border-0 bg-transparent pr-2 pl-6 outline-none"
          />
          <button className="h-14 w-32 rounded-full bg-pink-300 font-semibold">
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}
