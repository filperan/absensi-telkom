import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard'; // Admin Dashboard Component
import GuruDashboard from './components/GuruDashboard'; // Guru Dashboard Component
import NotFound from './components/NotFound';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(''); // Track role after login

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Check authentication status and role from localStorage
    const authStatus = localStorage.getItem('authenticated');
    const role = localStorage.getItem('role');
    if (authStatus === 'true') {
      setAuthenticated(true);
      setUserRole(role); // Set user role based on localStorage
    }

    return () => clearTimeout(timer);
  }, []);

  // Handler for successful login
  const handleLoginSuccess = (role) => {
    setAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('authenticated', 'true');
    localStorage.setItem('role', role); // Store the user role in localStorage
  };

  // Handler for logout
  const handleLogout = () => {
    setAuthenticated(false);
    setUserRole('');
    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar authenticated={authenticated} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route
              path="/login"
              element={
                authenticated ? (
                  <Navigate to={userRole === 'admin' ? '/admin' : '/guru'} />
                ) : (
                  <Login onLoginSuccess={handleLoginSuccess} />
                )
              }
            />
            {/* Admin Dashboard */}
            <Route
              path="/admin"
              element={
                authenticated && userRole === 'admin' ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            {/* Guru Dashboard */}
            <Route
              path="/guru"
              element={
                authenticated && userRole === 'guru' ? (
                  <GuruDashboard />
                ) : (
                  <Navigate to="/login" />
                )
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