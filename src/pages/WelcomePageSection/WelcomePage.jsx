// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
// import './WelcomePage.css';

// const WelcomePage = () => {
//   const [typedText, setTypedText] = useState("");
//   const [isTypingDone, setIsTypingDone] = useState(false);
//   const navigate = useNavigate(); // Use navigate instead of useHistory

//   const typingMessage = "Hii User, Welcome to our website! We're glad you're here. Let's get started!";
//   const typingSpeed = 60; // Speed of typing in milliseconds

//   useEffect(() => {
//     let index = 0;
//     const typeMessage = () => {
//       if (index < typingMessage.length) {
//         setTypedText((prevText) => prevText + typingMessage.charAt(index));
//         index++;
//         setTimeout(typeMessage, typingSpeed);
//       } else {
//         setIsTypingDone(true); // Show start button after typing finishes
//       }
//     };

//     typeMessage(); // Start typing when the component mounts
//   }, []);

//   const handleStartClick = () => {
//     navigate("/home"); // Redirect to home page
//   };

//   return (
//     <div className="welcome-container">
//       <div className="content-container">
//         <div className="typing-message">{typedText}</div>
//         {isTypingDone && (
//                     <button className="start-btn learn-more" onClick={handleStartClick}> 
//             <span class="circle" aria-hidden="true">
//             <span class="icon arrow"></span>
//             </span>
//             <span class="button-text">START</span>

//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './WelcomePage.css';

const WelcomePage = () => {
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const navigate = useNavigate();

  const typingMessage = "Hii User, Welcome to our website! We're glad you're here. Let's get started!";
  const typingSpeed = 60; // Speed of typing in milliseconds

  useEffect(() => {
    let index = 0;
    const typeMessage = () => {
      if (index < typingMessage.length) {
        setTypedText((prevText) => prevText + typingMessage.charAt(index));
        index++;
        setTimeout(typeMessage, typingSpeed);
      } else {
        setIsTypingDone(true); // Show start button after typing finishes
      }
    };

    typeMessage(); // Start typing when the component mounts
  }, []);

  const handleStartClick = () => {
    // Check if the user is logged in by looking for a token or user in localStorage
    const user = localStorage.getItem('user'); // Adjust based on your auth implementation
    if (user) {
      navigate("/home"); // Redirect to home page if logged in
    } else {
      navigate("/home"); // Redirect to login page if not logged in
    }
  };

  return (
    <div className="welcome-container">
      <div className="hero-overlay"></div>
      <div className="content-container">
        <div className="typing-message">{typedText}</div>
        {isTypingDone && (
          <button className="start-btn learn-more" onClick={handleStartClick} aria-label="Start exploring">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">START</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;