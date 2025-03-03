import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">SMK TELKOM MAKASSAR</h1>
        <h2 className="hero-subtitle">SISTEM INFORMASI ABSENSI DIGITAL</h2>
        <p className="hero-description">
          Solusi absensi modern berbasis teknologi untuk meningkatkan efisiensi dan akurasi pencatatan kehadiran
        </p>

        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Real-Time Tracking</h3>
            <p>Pantau kehadiran secara langsung dengan pembaruan instan</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Analisis Data</h3>
            <p>Visualisasi dan laporan kehadiran yang komprehensif</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Akses Mobile</h3>
            <p>Absen dari mana saja menggunakan perangkat mobile</p>
          </div>
        </div>

        <button className="jelajahi-sekarang" onClick={handleExploreClick}>
          Masuk Sistem
        </button>
      </div>
    </section>
  );
};

export default HeroSection;