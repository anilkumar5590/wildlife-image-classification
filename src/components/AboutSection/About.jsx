// import React from 'react';

// const About = () => {
//   return (
//     <section className="about">
//       <h2>About the Project</h2>
//       <p>This project aims to help conserve wildlife by identifying animals in uploaded images and raising awareness about their conservation status.</p>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { FaPaw, FaCamera, FaGlobe, FaLeaf } from 'react-icons/fa'; // Import icons
import './About.css'; // Import styles

const About = () => {
  return (
    <section className="about">
      <h2>🌍 About Our Wildlife Conservation Project</h2>
      <p className="about-intro">
        Our project is dedicated to protecting and conserving wildlife by leveraging technology. 
        Upload an image, and our AI-powered system will **identify the species**, provide detailed 
        information, and raise awareness about its conservation status.
      </p>

      {/* Key Features Section */}
      <div className="about-features">
        <div className="feature-card">
          <FaCamera className="feature-icon" />
          <h3>Image-Based Identification</h3>
          <p>Upload an animal image, and our AI will recognize its species with high accuracy.</p>
        </div>

        <div className="feature-card">
          <FaPaw className="feature-icon" />
          <h3>Wildlife Conservation</h3>
          <p>Learn about endangered species and how you can contribute to wildlife protection.</p>
        </div>

        <div className="feature-card">
          <FaGlobe className="feature-icon" />
          <h3>Global Awareness</h3>
          <p>Educate yourself about biodiversity and the importance of preserving natural habitats.</p>
        </div>

        <div className="feature-card">
          <FaLeaf className="feature-icon" />
          <h3>Eco-Friendly Initiative</h3>
          <p>Encouraging people to take action for environmental sustainability and conservation.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h3>Join Us in Saving Wildlife! 🦁</h3>
        <p>Every small effort counts! Upload images, spread awareness, and contribute to global conservation efforts.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default About;
