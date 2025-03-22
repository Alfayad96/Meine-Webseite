// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importiere die TailwindCSS Datei
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();