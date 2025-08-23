import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import InfiniteScroll from './components/InfiniteScroll';

export const router = createBrowserRouter([{ path: '/', element: <App /> }]);
