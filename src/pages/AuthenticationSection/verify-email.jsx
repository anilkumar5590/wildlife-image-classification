import { useNavigate } from 'react-router-dom';
import './login.css';

const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div className='login-container'>
      <h1>Email Verification Sent</h1>
      <p>
        A verification email has been sent to your email address. Please check your inbox and click the link to verify your email.
      </p>
      <p>Once verified, you can log in from the login page.</p>
      <form action="" className='login-form'><button onClick={() => navigate('/login')}>Go to Login</button></form>
      
    </div>
  );
};

export default VerifyEmail;
