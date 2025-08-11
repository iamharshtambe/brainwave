import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Accordian from './components/Accordian.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/accordian', element: <Accordian /> },
]);
