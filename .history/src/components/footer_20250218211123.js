import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/telkom.png" alt="Logo" />
          <p>Copyright {new Date().getFullYear()} Telkom Indonesia</p>
          <p>&copy; SMK Telkom. All rights reserved.</p>
        </div>
        <div className="footer-section contact">
          <h4>Kontak Kami</h4>
          <p>Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini, Kota Makassar.</p>
          <p>Email: <a href="mailto:stelkmks.ypt@gmail.com">stelkmks.ypt@gmail.com</a></p>
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
    </footer>
  );
};

export default Footer;