import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-logo">
          <img src="/telkomlogo.png" alt="Telkom Logo" />
        </div>
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
        <p className="loading-text">Memuat Aplikasi...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;