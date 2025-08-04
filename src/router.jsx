import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ChipsInput from './components/ChipsInput.jsx';
import Accordian from './components/Accordian.jsx';
import TabSwitcher from './components/TabSwitcher.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/chips-input', element: <ChipsInput /> },
  { path: '/accordian', element: <Accordian /> },
  { path: '/tab-switcher', element: <TabSwitcher /> },
]);
