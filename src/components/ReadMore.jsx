const text =
  'React is a popular JavaScript library used for building user interfaces, especially single-page applications. Developed by Facebook, it allows developers to create reusable components, making the UI more modular and easier to maintain. React uses a virtual DOM to optimize performance by updating only the parts of the UI that change. It follows a declarative approach, where developers describe how the interface should look based on the current state, and React takes care of updating the view. With modern features like hooks, React enables powerful state and side-effect management in functional components.';

import { useState } from 'react';

export default function ReadMore() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="font-bitcount text-4xl text-white">Read More</h1>
      <div className="w-[500px] rounded-lg bg-emerald-100 p-4">
        <p className="text-md">
          {isExpanded ? text : `${text.substring(0, 120)}...`}
        </p>
        <button
          className="mx-auto mt-2 flex cursor-pointer rounded-2xl bg-sky-500 px-2 py-1 hover:text-white"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
}
