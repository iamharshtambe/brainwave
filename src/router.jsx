import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import AutocompleteSearchBar from './components/AutocompleteSearchBar';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/autocomplete-search-bar', element: <AutocompleteSearchBar /> },
]);
