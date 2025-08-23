import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import AutocompleteSearchBar from './components/AutocompleteSearchBar';
import OTPInput from './components/OTPInput';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/autocomplete-search-bar', element: <AutocompleteSearchBar /> },
  { path: '/otp-input', element: <OTPInput /> },
]);
