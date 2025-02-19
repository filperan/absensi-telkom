import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';
import Footer from './components/footer';
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
