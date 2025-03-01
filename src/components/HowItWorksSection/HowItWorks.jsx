import React from 'react';
import './HowItWorks.css';
const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Our system makes identifying animals easy and fun! Here's a step-by-step guide to get you started:</p>
      <div className="steps">
        <div className="step">
          <h3>1. Upload Your Image</h3>
          <p>Simply upload a clear image of the animal you want to identify. Ensure the image is high quality for accurate analysis.</p>
        </div>
        <div className="step">
          <h3>2. Image Analysis</h3>
          <p>Our advanced AI-powered system will process the image and analyze the features to identify the animal.</p>
        </div>
        <div className="step">
          <h3>3. Receive Results</h3>
          <p>Get instant feedback with the predicted animal name along with relevant details like habitat, diet, and conservation status.</p>
        </div>
      </div>
      <p>Ready to discover the wildlife around you? Try it now!</p>
    </section>
  );
};

export default HowItWorks;
