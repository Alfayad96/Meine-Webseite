import React from 'react';
import ReactDOM from 'react-dom/client'; // Verwende 'react-dom/client' für React 18+
import App from './App';

// Erstelle den Root-Container
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendere die App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);