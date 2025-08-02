import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ChipsInput from './components/ChipsInput';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/chips-input', element: <ChipsInput /> },
]);
