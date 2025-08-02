import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ChipsInput from './components/ChipsInput';
import ArrayToZigzag from './components/ArrayToZigzag';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/chips-input', element: <ChipsInput /> },
  { path: '/array-to-zigzag-converter', element: <ArrayToZigzag /> },
]);
