// // import React from 'react';
// // import Header from './components/header';
// // import Hero from './components/Hero';
// // import HowItWorks from './components/HowItWorks';
// // import Upload from './components/Upload';
// // import PredictionResults from './components/PredictionResults';
// // import About from './components/About';
// // import FeaturedSpecies from './components/FeaturedSpecies';
// // import Testimonials from './components/Testimonials';
// // import Footer from './components/Footer';


// // const Home = () => {
// //   return (
// //     <div>
// //       <Header />
// //       <Hero />
// //       <HowItWorks />
// //       <Upload />
// //       <PredictionResults />
// //       <About />
// //       <FeaturedSpecies />
// //       <Testimonials />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useRef } from 'react';
// import Header from './components/header';
// import Hero from './components/Hero';
// import HowItWorks from './components/HowItWorks';
// import Upload from './components/Upload';
// import PredictionResults from './components/PredictionResults';
// import About from './components/About';
// import FeaturedSpecies from './components/FeaturedSpecies';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';

// const Home = () => {
//   const uploadRef = useRef(null); // Reference for scrolling to the Upload section

//   // Smooth scroll to Upload Section
//   const scrollToUpload = () => {
//     if (uploadRef.current) {
//       uploadRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <Hero onUploadClick={scrollToUpload} /> {/* Pass scroll function to Hero */}
//       <HowItWorks />
//       <Upload ref={uploadRef} /> {/* Assign ref to the Upload section */}
//       <PredictionResults />
//       <About />
//       <FeaturedSpecies />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// import React, { useRef } from 'react';
// import Header from '../src/components/header'; // Import Header component
// import Hero from '../src/components/Hero'; // Import Hero component
// import HowItWorks from '../src/components/HowItWorks'; // Import HowItWorks section
// import Upload from '../src/components/Upload'; // Import Upload section
// import PredictionResults from '../src/components/PredictionResults'; // Import PredictionResults section
// import About from '../src/components/About'; // Import About section
// import FeaturedSpecies from '../src/components/FeaturedSpecies'; // Import FeaturedSpecies section
// import Testimonials from '../src/components/Testimonials'; // Import Testimonials section
// import Footer from '../src/components/Footer'; // Import Footer section

// const Home = () => {
//   const uploadRef = useRef(null); // Create reference for Upload section

//   // Function to scroll to Upload Section
//   const scrollToUpload = () => {
//     if (uploadRef.current) {
//       uploadRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <Hero onUploadClick={scrollToUpload} /> {/* Pass scroll function to Hero */}
//       <HowItWorks />
//       <Upload ref={uploadRef} /> {/* Pass the ref to Upload component */}
//       <PredictionResults />
//       <About />
//       <FeaturedSpecies />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// // Home.jsx
// import React, { useRef } from 'react';
// import Header from '../../components/HeaderSection/header'; // Import Header component
// import Hero from '../../components/HeroSection/Hero'; // Import Hero component
// import HowItWorks from '../../components/HowItWorksSection/HowItWorks'; // Import HowItWorks component
// import Upload from '../../components/UploadSection/Upload'; // Import Upload component
// import PredictionResults from '../../components/PredictionResultsSection/PredictionResults'; // Import PredictionResults component
// import About from '../../components/AboutSection/About'; // Import About component
// import FeaturedSpecies from '../../components/FeaturedSpeciesSection/FeaturedSpecies'; // Import FeaturedSpecies component
// import Testimonials from '../../components/TestimonialSection/Testimonials'; // Import Testimonials component
// import Footer from '../../components/FooterSection/Footer'; // Import Footer component

// const Home = () => {
//   const uploadRef = useRef(null);

//   // const scrollToUpload = () => {
//   //   if (uploadRef.current) {
//   //     uploadRef.current.scrollIntoView({ behavior: 'smooth' });
//   //   }
//   // };
//   const scrollToUpload = () => {
//     console.log("scrollToUpload called");  // Confirm function is being triggered
//     if (uploadRef.current) {
//        console.log("uploadRef.current is:", uploadRef.current); // Check if ref is valid
//       uploadRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       console.log("uploadRef.current is still null!");
//     }
//   };


//   return (
//     <div>
//       <Header />
//       <Hero onUploadClick={scrollToUpload} />
//       <HowItWorks />
//       <Upload ref={uploadRef} />
//       <PredictionResults />
//       <About />
//       <FeaturedSpecies />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useRef } from 'react';
import Header from '../../components/HeaderSection/header';
import Hero from '../../components/HeroSection/Hero';
import HowItWorks from '../../components/HowItWorksSection/HowItWorks';
import Upload from '../../components/UploadSection/Upload';
import PredictionResults from '../../components/PredictionResultsSection/PredictionResults';
import About from '../../components/AboutSection/About';
import FeaturedSpecies from '../../components/FeaturedSpeciesSection/FeaturedSpecies';
import Testimonials from '../../components/TestimonialSection/Testimonials';
import Footer from '../../components/FooterSection/Footer';

const Home = () => {
  const uploadRef = useRef(null);

  const scrollToUpload = () => {
    console.log("scrollToUpload called at:", new Date().toISOString());
    if (uploadRef.current) {
      console.log("uploadRef.current is:", uploadRef.current);
      uploadRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("uploadRef.current is still null!");
    }
  };

  return (
    <div>
      <Header />
      <Hero onUploadClick={scrollToUpload} />
      <HowItWorks />
      <Upload ref={uploadRef} />
      <PredictionResults />
      <About />
      <FeaturedSpecies />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;