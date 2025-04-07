import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import EmployeeProfiles from './components/EmployeeProfiles';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Services />
        <EmployeeProfiles />
        <Contact />
      </div>
    </div>
  );
}

export default App;