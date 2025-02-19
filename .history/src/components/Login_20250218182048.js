import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!role) {
      toast.error('Silakan pilih role terlebih dahulu!');
      return;
    }
    
    setLoading(true);
    
    // Simulasi request ke server
    setTimeout(() => {
      toast.success(`Login berhasil sebagai ${role}!`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Masuk ke Sistem</h2>
          <p>Silakan login untuk melanjutkan</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="role">Pilih Role</label>
            <div className="input-container">
              <i className="icon fas fa-user-tag"></i>
              <select
                id="role"
                className="form-control"
                value={role}
                onChange={handleRoleChange}
                required
              >
                <option value="">Pilih Role</option>
                <option value="siswa">Siswa</option>
                <option value="orangtua">Orang Tua</option>
                <option value="guru">Guru</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-container">
              <i className="icon fas fa-user"></i>
              <input
                id="username"
                type="text"
                className="form-control"
                value={username}
                onChange={handleUsernameChange}
                placeholder="Masukkan username Anda"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <i className="icon fas fa-lock"></i>
              <input
                id="password"
                type="password"
                className="form-control"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Masukkan password Anda"
                required
              />
            </div>
          </div>
          
          <div className="text-right">
            <a href="#" className="forgot-password">Lupa password?</a>
          </div>
          
          <button
            type="submit"
            className={`login-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              'Masuk'
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <p>Belum punya akun? <a href="#">Daftar</a></p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Login;