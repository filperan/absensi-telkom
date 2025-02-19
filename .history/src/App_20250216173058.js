import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
         
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
import React from 'react';
import Login from './components/Login';
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
