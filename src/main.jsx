// src/main.jsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import this
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* The router provider goes here, at the highest level */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);