import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/path-to-footer-image.png" alt="Logo" />
          <p>&copy; {new Date().getFullYear()} SMK Telkom. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h4>Kontak Kami</h4>
          <p>Email: info@smktelkom.sch.id</p>
          <p>Telepon: (123) 456-7890</p>
        </div>
        <div className="footer-section social-media">
          <h4>Ikuti Kami</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
// In the Footer component, replace the path-to-footer-image.png with the correct path to the footer image.

