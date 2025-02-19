import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/telkom.png" alt="Logo" />
          <img src="/LogoUndipa.png" alt="Logo" />
          <p className="copyright">Copyright {new Date().getFullYear()} Asistensi Mengajar</p>
          <p className="copyright">&copy;All rights reserved. Powered By Universitas Dipa Makassar</p>
        </div>
        <div className="footer-section contact">
          <h4>Kontak Kami</h4>
          <address>
            <p>Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini, Kota Makassar.</p>
            <p>Email: <a href="mailto:stelkmks.ypt@gmail.com">stelkmks.ypt@gmail.com</a></p>
          </address>
        </div>
        <div className="footer-section social-media">
          <h4>Ikuti Kami</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Designed and developed by SMK Telkom Makassar</p>
      </div>
    </footer>
  );
};

export default Footer;