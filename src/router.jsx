import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import CounterWithUndoRedo from './components/CounterWithUndoRedo';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/counter-with-undo-redo', element: <CounterWithUndoRedo /> },
]);
