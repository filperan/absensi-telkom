import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ authenticated, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-button') && 
          !event.target.closest('.nav-links.mobile')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img src="/telkomlogo.png" alt="Telkom Logo" />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <span className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Beranda</Link></li>
          <li><Link to="/tentang" className={location.pathname === '/tentang' ? 'active' : ''}>Tentang Kami</Link></li>
          <li><Link to="/program" className={location.pathname === '/program' ? 'active' : ''}>Program Studi</Link></li>
          <li><Link to="/guru" className={location.pathname === '/guru' ? 'active' : ''}>Guru</Link></li>
          <li><Link to="/kehadiran" className={location.pathname === '/kehadiran' ? 'active' : ''}>Cek Kehadiran</Link></li>
        </ul>

        <div className="nav-buttons desktop">
          {authenticated ? (
            <div className="authenticated-menu">
              <Link to="/dashboard" className="nav-button dashboard-button">Dashboard</Link>
              <button className="nav-button logout-button" onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/login" className="nav-button login-button">Login</Link>
          )}
          <button className="nav-button hubungi-kami-button">Hubungi Kami</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links mobile">
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Beranda</Link></li>
          <li><Link to="/tentang" className={location.pathname === '/tentang' ? 'active' : ''}>Tentang Kami</Link></li>
          <li><Link to="/program" className={location.pathname === '/program' ? 'active' : ''}>Program Studi</Link></li>
          <li><Link to="/guru" className={location.pathname === '/guru' ? 'active' : ''}>Guru</Link></li>
          <li><Link to="/kehadiran" className={location.pathname === '/kehadiran' ? 'active' : ''}>Cek Kehadiran</Link></li>
        </ul>
        
        <div className="nav-buttons mobile">
          {authenticated ? (
            <>
              <Link to="/dashboard" className="nav-button dashboard-button">Dashboard</Link>
              <button className="nav-button logout-button" onClick={onLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="nav-button login-button">Login</Link>
          )}
          <button className="nav-button hubungi-kami-button">Hubungi Kami</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;