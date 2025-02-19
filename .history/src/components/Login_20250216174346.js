import React, { useState } from 'react';
import './login.css'; // Pastikan untuk menambahkan file CSS terpisah untuk styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika untuk mengirim data login
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-image">
        {/* Anda bisa menambahkan gambar atau ilustrasi di sini */}
        <img src="path_to_your_image.svg" alt="Login illustration" />
      </div>
      <div className="login-form">
        <h2>Welcome to Sneat! 👋</h2>
        <p>Please sign-in to your account and start the adventure</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <div className="remember-me">
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            />
            <label>Remember Me</label>
            <span><a href="#forgot-password">Forgot Password?</a></span>
          </div>
          <button type="submit">SIGN IN</button>
        </form>
        <p>New on our platform? <a href="#create-account">Create an account</a></p>
        <div className="social-login">
          <p>or</p>
          <button className="social-button">Facebook</button>
          <button className="social-button">GitHub</button>
          <button className="social-button">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;