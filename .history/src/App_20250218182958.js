import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login';
import NotFound from './components/NotFound';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    // Cek status autentikasi dari localStorage
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setAuthenticated(true);
    }
    
    return () => clearTimeout(timer);
  }, []);

  // Handler login berhasil
  const handleLoginSuccess = () => {
    setAuthenticated(true);
    localStorage.setItem('authenticated', 'true');
  };

  // Handler logout
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('authenticated');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route 
              path="/login" 
              element={
                authenticated ? 
                <Navigate to="/dashboard" /> : 
                <Login onLoginSuccess={handleLoginSuccess} />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                authenticated ? 
                <div className="dashboard-container">
                  <h1>Selamat datang di Dashboard</h1>
                  <p>Silakan pilih menu di atas untuk melanjutkan</p>
                </div> : 
                <Navigate to="/login" />
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;