import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
      <p className="not-found-message">
        Maaf, halaman yang Anda cari tidak dapat ditemukan. 
        Halaman mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
      </p>
      <Link to="/" className="not-found-button">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;