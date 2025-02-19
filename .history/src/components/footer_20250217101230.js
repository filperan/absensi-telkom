import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/telkom.png" alt="Logo" className="h-12 mr-4" />
          <div>
            <p className="text-sm">©2025 SMK Telkom Makassar.</p>
            <p className="text-sm">All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
          <p className="text-sm">Jl. A. P. Pettarani No.4, Gn. Sari, Kec. Rappocini, Kota Makassar.</p>
          <p className="text-sm">stelkmks.ypt@gmail.com</p>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
          <a href="https://igracias.sch.id/" className="text-sm text-gray-400 hover:text-gray-300">iGracias Telkom School</a>
          <a href="https://ypt.stelkmks.sch.id/" className="text-sm text-gray-400 hover:text-gray-300">Yayasan Pendidikan Telkom (YPT)</a>
          <a href="https://lms.stelkmks.sch.id/" className="text-sm text-gray-400 hover:text-gray-300">My LMS</a>
        </div>
        <div className="flex items-center">
          <a href="https://facebook.com" className="text-gray-400 hover:text-gray-300 mr-2">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.6... (Facebook icon path)"/></svg>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.1... (Instagram icon path)"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
