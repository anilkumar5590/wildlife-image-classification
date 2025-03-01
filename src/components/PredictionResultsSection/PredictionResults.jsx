// import React, { useState, useEffect } from 'react';

// const PredictionResults = () => {
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [prediction, setPrediction] = useState(null); // Store prediction data

//   // Simulate fetching prediction data
//   useEffect(() => {
//     // Simulating an API call delay
//     setLoading(true);  // Start loading when component mounts

//     setTimeout(() => {
//       setPrediction({
//         animalName: "Tiger",
//         confidenceLevel: "95%",
//         explanation: "The tiger is a large wild cat known for its power, strength, and agility. It is found primarily in the forests of Asia, including India and Southeast Asia. Tigers are apex predators, with a strong build and distinctive stripes on their fur.",
//       });
//       setLoading(false); // Once data is fetched, set loading to false
//     }, 2000); // Simulate a 2-second delay
//   }, []);

//   return (
//     <section className="prediction-results">
//       {loading ? (
//         <div className="loading-dots">
//           <span>.</span>
//           <span>.</span>
//           <span>.</span>
//         </div>
//       ) : (
//         <>
//           <h2>Predicted Animal Name: {prediction.animalName}</h2>
//           <p>Confidence Level: {prediction.confidenceLevel}</p>
//           <p>{prediction.explanation}</p>
//         </>
//       )}
//     </section>
//   );
// };

// export default PredictionResults;
// PredictionResults.jsx

import React from 'react';
import './PredictionResults.css'; // Import the CSS file with the spinner styles

const PredictionResults = ({ prediction, isLoading }) => {
  // Show the loading spinner when prediction is in progress
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading prediction...</p>
      </div>
    );
  }

  // Ensure prediction exists before trying to access its properties
  if (!prediction) {
    return <div></div>; // Handle case where prediction data is unavailable
  }

  // Once prediction is available, show the result
  return (
    <section className="prediction-results">
      <h2>Predicted Animal Name: {prediction.predicted_class}</h2>
      <p>Conservation Status: {prediction.conservation_status}</p>
      <p>Confidence Level: {prediction.confidence_level}%</p>
      <p>{prediction.explanation}</p>
    </section>
  );
};

export default PredictionResults;



