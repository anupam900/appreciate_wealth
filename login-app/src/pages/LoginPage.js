import React, { useState } from 'react';
import './LoginForm.css';
import facebookIcon from '../images/facebook 1.png';
import instagramIcon from '../images/instagram 1.png';
import pinterestIcon from '../images/pinterest 1.png';
import linkedinIcon from '../images/linkedin 1.png';
import homeIcon from '../images/Frame 450.png'; // Import the home image

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // dummy login credentials
    if (email === 'admin@gmail.com' && password === 'password') {
      window.location.href = '/home';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <p>By signing in you are agreeing our <a href="#">Term</a> and <a href="#">privacy policy</a></p>
      <div className="links">
        <a href="#">Login</a> | <a href="#">Register</a>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i className="fas fa-eye" onClick={() => setPassword('')}></i>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember password</label>
          <a href="#">Forget password</a>
        </div>
        <button type="submit">Login</button>
        <p>or connect with</p>
        <div className="social-icons">
          <a href="#"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
          <a href="#"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
          <a href="#"><img src={pinterestIcon} alt="Pinterest" className="social-icon" /></a>
          <a href="#"><img src={linkedinIcon} alt="LinkedIn" className="social-icon" /></a>
        </div>

        <div className="fingerprint-icon">
          <i className="fas fa-fingerprint"></i>
        </div>
        <img src={homeIcon} alt="Home" className="home-icon" /> {/* Replace text with image */}
      </form>
    </div>
  );
}

export default LoginPage;
