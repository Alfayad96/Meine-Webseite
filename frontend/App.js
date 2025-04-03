import React from 'react';
import ExampleComponent from './components/ExampleComponent';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">Willkommen auf unserer IT-Webseite</h1>
        <ExampleComponent />
        <AdminLogin />
        <AdminDashboard />
      </header>
    </div>
  );
}

export default App;