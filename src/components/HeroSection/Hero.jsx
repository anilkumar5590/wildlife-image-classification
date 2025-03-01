// // // import React from 'react';

// // // const Hero = () => {
// // //   return (
// // //     <section className="hero">
// // //       <h2>Discover the Wildlife Around You</h2>
// // //       <button onClick={() => alert("Upload Image Button Clicked!")}>Upload Image</button>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // import React from 'react';
// // import { FaCamera } from 'react-icons/fa'; // Import camera icon
// // import './Hero.css'; // Import styles

// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <div className="hero-overlay">
// //         <div className="hero-content">
// //           <h1>Explore & Protect Wildlife 🌿</h1>
// //           <p>
// //             Discover the fascinating world of wildlife by uploading an image.
// //             Our AI-powered system will **identify species**, provide insights,
// //             and help spread conservation awareness.
// //           </p>
// //           <button className="hero-button" onClick={() => alert("Upload Image Button Clicked!")}>
// //             <FaCamera className="button-icon" /> Upload Image
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// import React from 'react';
// import { FaCamera } from 'react-icons/fa';
// import './Hero.css';

// const Hero = ({ onUploadClick }) => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1>Explore & Protect Wildlife 🌿</h1>
//           <p>Discover the wildlife around you by uploading an image. Our AI will help identify species and provide conservation details.</p>
//           <button className="hero-button" onClick={onUploadClick}>
//             <FaCamera className="button-icon" /> Upload Image
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from 'react';
// import { FaCamera } from 'react-icons/fa';
// import './Hero.css';

// const Hero = ({ onUploadClick }) => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <div className="hero-content">
//           <h1>Explore & Protect Wildlife 🌿</h1>
//           <p>Discover the wildlife around you by uploading an image. Our AI will help identify species and provide conservation details.</p>
//           <button className="hero-button" onClick={onUploadClick}>
//             <FaCamera className="button-icon" /> Upload Image
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import { FaCamera } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ onUploadClick }) => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Explore & Protect Wildlife 🌿</h1>
          <p>Discover the wildlife around you by uploading an image. Our AI will help identify species and provide conservation details.</p>
          <button className="hero-button" onClick={onUploadClick}>
            <FaCamera className="button-icon" /> Upload Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
