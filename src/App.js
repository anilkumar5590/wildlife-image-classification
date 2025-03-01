// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useRef } from 'react';
// import Hero from '../src/components/Hero';
// import Upload from '../src/components/Upload';

// const App = () => {
//   const uploadRef = useRef(null); // Create reference for Upload section

//   // Function to scroll to Upload Section
//   const scrollToUpload = () => {
//     if (uploadRef.current) {
//       uploadRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       {/* Pass the scroll function to Hero */}
//       <Hero onUploadClick={scrollToUpload} />
      
//       {/* Upload Section with Ref */}
//       <div ref={uploadRef}>
//         <Upload />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Home from '../src/pages/HomeSection/Home'; // Import Home component

const App = () => {
  return (
    <div>
      <Home /> {/* Render Home component */}
    </div>
  );
};

export default App;
