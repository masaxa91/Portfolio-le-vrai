import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe createRoot depuis react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Remplace ReactDOM.render par createRoot
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();