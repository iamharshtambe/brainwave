import { Link } from 'react-router-dom';
import ComponentItem from './ComponentItem';

const components = [
  { itemName: 'Autocomplete Search Bar', link: '/autocomplete-search-bar' },
  { itemName: 'OTP Input', link: '/otp-input' },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="mx-auto h-screen max-w-5xl">
        <h1 className="cursor-pointer bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text pt-4 pb-6 text-center font-mysoul text-7xl font-semibold text-transparent">
          Component Kitchen
        </h1>

        <div className="flex flex-col items-center">
          {components.map((component) => (
            <Link to={component.link} className="block w-full">
              <ComponentItem itemName={component.itemName} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
