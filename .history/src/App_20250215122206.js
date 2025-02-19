import React from 'react';
import avbar from './components/Navbar';
import heroSection from './components/HeroSection';
import footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <navbar />
      <herosection />
      <footer />
    </div>
  );
};

export default App;
