import { Link } from 'react-router-dom';
import ComponentItem from './ComponentItem';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black">
      <div className="mx-auto h-screen max-w-5xl">
        <h1 className="cursor-pointer bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text pt-4 pb-6 text-center font-mysoul text-7xl font-semibold text-transparent">
          Component Kitchen
        </h1>

        <div className="flex flex-col items-center gap-6">
          <Link to="/counter-with-undo-redo" className="block w-full">
            <ComponentItem itemName="Counter With Undo Redo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
