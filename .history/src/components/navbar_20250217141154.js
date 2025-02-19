import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./telkomlogo.png" alt="Logo" /> {/* Periksa path gambar */}
      </div>
      <ul className="nav-links">
        <li><a href="#beranda">Beranda</a></li>
        <li><a href="#tentang">Tentang Kami</a></li>
        <li><a href="#program">Program Studi</a></li>
        <li><a href="#alumni">Guru</a></li>
        <li><a href="#pdb">Cek Kehadiran</a></li>
      </ul>
      <button className="hubungi-kami">Hubungi Kami</button>
    </nav>
  );
};

export default Navbar;