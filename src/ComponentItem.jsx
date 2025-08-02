import { ArrowRight } from 'lucide-react';

export default function ComponentItem({ itemName }) {
  return (
    <div className="relative flex w-full transform cursor-pointer items-center justify-between rounded-full bg-white p-6 text-xl font-semibold transition duration-300 hover:scale-102">
      <div className="absolute inset-x-0 -bottom-px h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

      <h2 className="hover:text-red-500">{itemName}</h2>

      <ArrowRight className="hover:text-red-500" />
    </div>
  );
}
