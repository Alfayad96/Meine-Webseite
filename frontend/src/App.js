import React, { useEffect } from 'react';
import ExampleComponent from './components/ExampleComponent';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  useEffect(() => {
    // JavaScript für die Animation der Boxen
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
      });
      box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      });
    });
  }, []);

  return (
    <div className="App">
      {/* Animierter Hintergrund */}
      <div className="background"></div>

      {/* Inhalt */}
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">Willkommen auf unserer IT-Webseite</h1>
        <ExampleComponent />
        <AdminLogin />
        <AdminDashboard />

        {/* Animierte Boxen */}
        <div className="box-container">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </header>
    </div>
  );
}

export default App;