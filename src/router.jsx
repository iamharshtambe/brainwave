import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import AutocompleteSearchBar from './components/AutocompleteSearchBar';
import OTPInput from './components/OTPInput';
import ProgressBar from './components/ProgressBar';
import Pagination from './components/Pagination';
import TodoList from './components/TodoList';

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/autocomplete-search-bar', element: <AutocompleteSearchBar /> },
  { path: '/otp-input', element: <OTPInput /> },
  { path: '/progress-bar', element: <ProgressBar /> },
  { path: '/pagination', element: <Pagination /> },
  { path: '/todolist', element: <TodoList /> },
]);
