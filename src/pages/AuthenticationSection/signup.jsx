
import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css'; // Reuse the same CSS file as the Login page

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
    length: false,
  });

  const navigate = useNavigate();

  // Validate password requirements
  const validatePassword = (password) => {
    setPasswordValidations({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      symbol: /[!@#$%^&*]/.test(password),
      length: password.length >= 8,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if all password requirements are met
    if (
      !passwordValidations.uppercase ||
      !passwordValidations.lowercase ||
      !passwordValidations.number ||
      !passwordValidations.symbol ||
      !passwordValidations.length
    ) {
      setError('All password requirements must be fulfilled.');
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with display name
      await updateProfile(auth.currentUser, { displayName: name });

      // Send email verification
      await sendEmailVerification(user);
      console.log('Verification email sent to:', user.email);

      // Save user data to local storage
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify({ ...user, displayName: name }));

      alert('A verification email has been sent to your email address. Please check your inbox.');

      // Redirect to home page or another route
      navigate('/verify-email');
    } catch (error) {
      console.error('Signup error:', error);
      setError(error.message);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  return (
    <div className='login-container'>
      <h1>Signup Page</h1>
      {error && <p className='error-message'>{error}</p>}
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Your Password"
            required
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
          />
          <span
            className="password-toggle"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {passwordFocus && (
          <div className="password-requirements">
            <ul>
              <li className={passwordValidations.uppercase ? 'valid' : 'invalid'}>
                <span>{passwordValidations.uppercase ? '✅' : '❌'}</span> At least 1 uppercase letter
              </li>
              <li className={passwordValidations.lowercase ? 'valid' : 'invalid'}>
                <span>{passwordValidations.lowercase ? '✅' : '❌'}</span> At least 1 lowercase letter
              </li>
              <li className={passwordValidations.number ? 'valid' : 'invalid'}>
                <span>{passwordValidations.number ? '✅' : '❌'}</span> At least 1 number
              </li>
              <li className={passwordValidations.symbol ? 'valid' : 'invalid'}>
                <span>{passwordValidations.symbol ? '✅' : '❌'}</span> At least 1 symbol (@#$%^&)
              </li>
              <li className={passwordValidations.length ? 'valid' : 'invalid'}>
                <span>{passwordValidations.length ? '✅' : '❌'}</span> Minimum 8 characters
              </li>
            </ul>
          </div>
        )}

        <button type="submit" className='login-button'>Signup</button>
      </form>
      <p>Need to Login? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;