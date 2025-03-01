// ResetPassword.js
import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase'; // Firebase configuration
import { Link} from 'react-router-dom';
import './login.css'; // Add styling as needed

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
//   const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    setResetMessage(''); // Clear any previous message
    try {
      await sendPasswordResetEmail(auth, email); // Send password reset email
      setResetMessage('Password reset email sent! Please check your inbox.');
    } catch (error) {
      console.error(error);
      setError('Error sending password reset email. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1>Reset Your Password</h1>
      {error && <p className="error-message">{error}</p>}
      {resetMessage && <p className="success-message">{resetMessage}</p>} {/* Success message */}

      <form onSubmit={handleResetPassword} className="reset-password-form">
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="reset-button">Send Reset Link</button>
      </form>

      {/* <p>
        Remember your password? <button onClick={() => navigate('/login')}>Login</button>
      </p> */}
      <p>Remember your password?  <Link to="/login">Login</Link></p>
      <p>Go back to home? <Link to="/home">Home</Link></p>
    </div>
  );
};

export default ResetPassword;
