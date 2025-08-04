import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home', content: 'Welcome to the Home tab!' },
  { id: 'profile', label: 'Profile', content: 'This is your Profile.' },
  { id: 'settings', label: 'Settings', content: 'Adjust your Settings here.' },
];

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <h1 className="mb-4 text-center font-bitcount text-2xl text-white sm:text-3xl md:text-4xl">
        Tab Switcher
      </h1>
      <div className="mx-auto h-[500px] w-full max-w-4xl border border-blue-500 bg-green-100">
        <div className="mx-auto mt-16 flex w-full items-center justify-between px-4 sm:w-10/12 sm:px-0 md:w-8/12 lg:w-6/12 xl:w-4/12">
          {tabs.map((tab) => (
            <button
              className={`w-[70px] transform cursor-pointer rounded-full px-1 py-2 text-xs text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg sm:w-[80px] sm:text-sm md:w-[90px] md:text-base ${
                activeTab === tab.id
                  ? 'bg-[#147B74] shadow-md'
                  : 'bg-[#147B74] opacity-80 hover:opacity-100'
              }`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="hover:shadow-3xl mx-auto mt-8 h-[250px] w-11/12 rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-in-out sm:w-3/4 md:w-2/3 lg:w-1/2">
          <div className="flex h-full items-center justify-center p-4">
            <p className="text-center font-semibold text-gray-800 sm:text-lg">
              {tabs.find((tab) => tab.id === activeTab).content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
