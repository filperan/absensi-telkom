import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <h1>Selamat Datang di Sistem Absensi SMK Telkom</h1>
      <p>Silakan klik tombol di bawah untuk masuk.</p>
      <button onClick={handleLoginClick}>Masuk</button>
    </div>
  );
};

export default Home;
