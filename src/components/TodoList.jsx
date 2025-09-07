import { Trash } from 'lucide-react';

const tasks = [
  { id: 1, task: 'Do Exercise' },
  { id: 2, task: 'Do Dance' },
];

export default function TodoList() {
  return (
    <div className="mx-auto flex min-h-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col">
        <h1 className="p-4 text-center font-bitcount text-4xl">Todo List</h1>

        <div className="w-full rounded-full bg-neutral-800">
          <input
            type="text"
            placeholder="Add your task"
            className="h-14 border-0 bg-transparent pr-2 pl-6 outline-none placeholder:text-white"
          />
          <button className="h-14 w-32 cursor-pointer rounded-full bg-red-400 font-semibold hover:bg-red-600">
            Add +
          </button>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex w-[400px] items-center justify-between rounded-full bg-neutral-800 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5" />
                <p>{task.task}</p>
              </div>
              <button className="text-red-400 hover:text-red-600">
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
