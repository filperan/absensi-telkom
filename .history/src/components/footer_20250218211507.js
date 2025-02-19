import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src="/telkom.png" alt="Logo" />
          <p className="copyright">Copyright {new Date().getFullYear()} Telkom Indonesia</p>
          <p className="copyright">&copy; SMK Telkom. All rights reserved.</p>
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
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