import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/public/telkom logo.png" alt="Logo" />
        <span>Telkom Schools</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Tentang Kami</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Alumni</a></li>
        <li><a href="#">PPDB</a></li>
      </ul>
      <button className="hubungi-kami">Hubungi Kami</button>
    </nav>
  );
};

export default Navbar;
