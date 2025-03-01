
// import React, { useState } from 'react';
// import { auth, provider } from './firebase'; // Ensure you have a Google Auth provider set up in your firebase.js
// import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import './login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error message
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Reload user data to check for updated verification status
//       await user.reload();

//       // Check if email is verified
//       if (!user.emailVerified) {
//         setError('Please verify your email before logging in.');
//         return;
//       }

//       // If email is verified, save user data and navigate
//       localStorage.setItem('token', user.accessToken);
//       localStorage.setItem('user', JSON.stringify(user));
//       navigate('/'); // Redirect to home page (or another page)
//     } catch (error) {
//       console.error(error);
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Reload user data to check for updated verification status
//       await user.reload();

//       // Check if email is verified
//       if (!user.emailVerified) {
//         setError('Please verify your email before logging in.');
//         return;
//       }

//       // If email is verified, save user data and navigate
//       localStorage.setItem('token', user.accessToken);
//       localStorage.setItem('user', JSON.stringify(user));
//       navigate('/'); // Redirect to home page (or another page)
//     } catch (error) {
//       console.error(error);
//       setError('Google sign-in failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login Page</h1>
//       {error && <p className='error-message'>{error}</p>}

//       <form onSubmit={handleSubmit} className='login-form'>
//         <input
//           type="email"
//           placeholder="Your Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
        
//         <div className="password-container">
//           <input
//             type={passwordVisible ? 'text' : 'password'}
//             placeholder="Your Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <span
//             className="password-toggle"
//             onClick={() => setPasswordVisible(!passwordVisible)}
//             style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
//           >
//             {passwordVisible ? <FaEyeSlash /> : <FaEye />}
//           </span>
//         </div>
//         <button type="submit" className='login-button'>Login</button>
//       </form>
      
//       <p>Need to Signup? <Link to="/signup">Create Account</Link></p>

//       {/* Google Sign-In Button */}
//       <button onClick={handleGoogleSignIn} className='google-signin-button'>
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" style={{ marginRight: "8px" }}>
//           <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
//           <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
//           <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
//           <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
//           <path fill="none" d="M0 0h48v48H0z"/>
//         </svg>
//         Sign in with Google
//       </button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { auth, provider } from './firebase'; // Ensure you have a Google Auth provider set up in your firebase.js
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Reload user data to check for updated verification status
      await user.reload();

      // Check if email is verified
      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        return;
      }

      // If email is verified, save user data and navigate
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home'); // Redirect to home page (or another page)
    } catch (error) {
      console.error(error);
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Reload user data to check for updated verification status
      await user.reload();

      // Check if email is verified
      if (!user.emailVerified) {
        setError('Please verify your email before logging in.');
        return;
      }

      // If email is verified, save user data and navigate
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home'); // Redirect to home page (or another page)
    } catch (error) {
      console.error(error);
      setError('Google sign-in failed. Please try again.');
    }
  };

  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      {error && <p className='error-message'>{error}</p>}

      <form onSubmit={handleSubmit} className='login-form'>
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="password-toggle"
            onClick={() => setPasswordVisible(!passwordVisible)}
            style={{ cursor: 'pointer' }} // Change cursor to pointer for better UX
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit" className='login-button'>Login</button>
      </form>
      
      <p>Need to Signup? <Link to="/signup">Create Account</Link></p>

      {/* Forgot Password Link */}
      <p>
        <a href="#!" onClick={() => navigate('/reset-password')} className="forgot-password-link">
          Forgot Password?
        </a>
      </p>

      {/* Google Sign-In Button */}
      <button onClick={handleGoogleSignIn} className='google-signin-button'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" style={{ marginRight: "8px" }}>
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          <path fill="none" d="M0 0h48v48H0z"/>
        </svg>
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;

