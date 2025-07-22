import { createBrowserRouter } from 'react-router-dom';
import Zerodha from './ui/zerodha/Zerodha.jsx';
import Stripe from './ui/stripe/Stripe.jsx';
import App from './App.jsx';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/zerodha',
    element: <Zerodha />,
  },
  {
    path: '/stripe',
    element: <Stripe />,
  },
]);
