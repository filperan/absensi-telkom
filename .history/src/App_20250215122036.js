import React from 'react';
import avbar from './components/navbar';
import heroSection from './components/herosection';
import footer from './components/footer';
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
