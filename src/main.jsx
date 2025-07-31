import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Zerodha from './Zerodha.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Zerodha />
  </StrictMode>
);
