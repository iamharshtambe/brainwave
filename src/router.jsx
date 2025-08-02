import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ChipsInput from './components/ChipsInput';
import Accordian from './components/Accordian';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/chips-input', element: <ChipsInput /> },
  { path: '/accordian', element: <Accordian /> },
]);
