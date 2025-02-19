import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

const Login = () => {
  // State management
  const [formData, setFormData] = useState({
    role: '',
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.role) {
      newErrors.role = 'Silakan pilih role terlebih dahulu';
    }
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username tidak boleh kosong';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username minimal 3 karakter';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password tidak boleh kosong';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      // Show toast for validation errors
      const firstError = Object.values(errors)[0];
      if (firstError) {
        toast.error(firstError);
      }
      return;
    }
    
    setLoading(true);
    
    // Simulasi request ke server
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      
      if (success) {
        toast.success(`Login berhasil sebagai ${formData.role}!`);
        // Here you would normally redirect or set authentication state
      } else {
        toast.error('Username atau password salah. Silakan coba lagi.');
      }
      
      setLoading(false);
    }, 1500);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Masuk ke Sistem</h2>
          <p>Silakan login untuk melanjutkan</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className={`form-group ${errors.role ? 'has-error' : ''}`}>
            <label htmlFor="role">Pilih Role</label>
            <div className="input-container">
              <i className="icon fas fa-user-tag"></i>
              <select
                id="role"
                className="form-control"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Pilih Role</option>
                <option value="siswa">Siswa</option>
                <option value="orangtua">Orang Tua</option>
                <option value="guru">Guru</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>
          
          <div className={`form-group ${errors.username ? 'has-error' : ''}`}>
            <label htmlFor="username">Username</label>
            <div className="input-container">
              <i className="icon fas fa-user"></i>
              <input
                id="username"
                type="text"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masukkan username Anda"
              />
            </div>
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>
          
          <div className={`form-group ${errors.password ? 'has-error' : ''}`}>
            <label htmlFor="password">Password</label>
            <div className="input-container">
              <i className="icon fas fa-lock"></i>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukkan password Anda"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                tabIndex="-1"
              >
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
              </button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          <div className="text-right">
            <a href="#reset-password" className="forgot-password">Lupa password?</a>
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
          <p>Belum punya akun? <a href="#register">Daftar</a></p>
        </div>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Login;