import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Home Service Webbing</h1>
          <p>Professionelle Dienstleistungen für Ihre Bedürfnisse.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="service-card">
          <img src="/icons/home.svg" alt="Home Service" />
          <h3>Home</h3>
          <p>Beschreibung des Home-Services.</p>
          <button className="btn-primary">Book Now</button>
        </div>
        <div className="service-card">
          <img src="/icons/services.svg" alt="Services" />
          <h3>Services</h3>
          <p>Beschreibung der Dienstleistungen.</p>
          <button className="btn-primary">Book Now</button>
        </div>
        <div className="service-card">
          <img src="/icons/pricing.svg" alt="Pricing" />
          <h3>Pricing</h3>
          <p>Beschreibung der Preise.</p>
          <button className="btn-primary">Book Now</button>
        </div>
      </section>
    </div>
  );
}

export default App;