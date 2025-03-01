
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { auth } from '../../pages/AuthenticationSection/firebase'; // Import the auth object
// import { signOut } from 'firebase/auth';
// import './Header.css'; // Ensure you have this CSS file for styling
// const Header = () => {
//   const [user, setUser] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       setUser(null);
//       navigate('/home'); // Redirect to home page with login button
//     } catch (error) {
//       console.error('Sign out failed', error);
//     }
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <h1>Wildlife Conservation</h1>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/home">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//       <div className="user-profile">
//         {user ? (
//           <div className="user-menu">
//             <img 
//               src={user?.photoURL || "/placeholder-image.jpg"} 
//               alt="User" 
//               className="user-avatar" 
//               onClick={() => setMenuOpen(!menuOpen)}
//             />
//             {menuOpen && (
//               <div className="dropdown-menu">
//                 <p>{user.displayName || "User"}</p>
//                 <button onClick={handleSignOut}>Sign Out</button>
//                 <button onClick={() => navigate('/reset-password')}>Forgot Password</button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link to="/login" className='nav-link'>Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../pages/AuthenticationSection/firebase';
import { signOut } from 'firebase/auth';
import './Header.css';

const Header = () => {
  const [user, setUser] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      setUser(null);
      navigate('/home');
    } catch (error) {
      console.error('Sign out failed', error);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Wildlife Conservation</h1>
      </div>

      {/* Hamburger Menu Icon */}
      <div
        className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setMobileMenuOpen(!mobileMenuOpen)}
        role="button"
        aria-label="Toggle menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Regular Navigation Menu */}
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* User Profile (Visible on Desktop) */}
      <div className="user-profile">
        {user ? (
          <div className="user-menu">
            <img
              src={user?.photoURL || '/placeholder-image.jpg'}
              alt="User"
              className="user-avatar"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="dropdown-menu">
                <p>{user.displayName || 'User'}</p>
                <button onClick={handleSignOut}>Sign Out</button>
                <button onClick={() => navigate('/reset-password')}>
                  Forgot Password
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="nav-link">
            Login
          </Link>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav">
          <ul>
            <li>
              <Link to="/home" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          {/* User Profile in Mobile Menu */}
          {user ? (
            <div className="user-profile">
              <p>{user.displayName || 'User'}</p>
              <button
                onClick={() => {
                  handleSignOut();
                  setMobileMenuOpen(false);
                }}
              >
                Sign Out
              </button>
              <button
                onClick={() => {
                  navigate('/reset-password');
                  setMobileMenuOpen(false);
                }}
              >
                Forgot Password
              </button>
            </div>
          ) : (
            <div className="user-profile">
              <Link
                to="/login"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;