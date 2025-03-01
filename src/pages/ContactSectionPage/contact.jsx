// import React from 'react';
// import Header from '../../components/HeaderSection/header'; // Reuse Header component
// import './contact.css';

// const Contact = () => {
//   const handleMapClick = () => {
//     // Redirect to Google Maps with the location of Vignan's Institute of Information Technology
//     window.open('https://www.google.com/maps?q=Vignan%27s+Institute+of+Information+Technology&hl=en', '_blank');
//   };

//   return (
//     <div className="contact-container">
//       {/* Header */}
//       <Header />
      
//       {/* Contact Information Section */}
//       <section className="contact-info">
//         <h2>Contact Us</h2>
//         <div className="contact-details">
//           <div className="contact-item">
//             <h4>Address</h4>
//             <p>Vignan's Institute of Information Technology, Duvvada, Andhra Pradesh, India</p>
//           </div>
//           <div className="contact-item">
//             <h4>Phone</h4>
//             <p>+91 123 456 7890</p>
//           </div>
//           <div className="contact-item">
//             <h4>Email</h4>
//             <p>contact@wildlifeconservation.com</p>
//           </div>
//         </div>
//       </section>
      
//       {/* Map Section */}
//       <section className="map-section">
//         <h2>Our Location</h2>
//         <div className="map-container">
//           {/* Embedded Google Maps */}
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.457539921147!2d83.16334257463399!3d17.710479393418154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cb428b8087%3A0xaa3e198c43836a65!2sVignan&#39;s%20Institute%20Of%20Information%20Technology!5e1!3m2!1sen!2sin!4v1739530397505!5m2!1sen!2sin"
//             width="600"
//             height="450"
//             style={{ border: '0' }}
//             allowFullScreen=""
//             loading="lazy"
//             title="Map showing Vignan's Institute of Information Technology"
//           ></iframe>
//         </div>
//         <button className="map-button" onClick={handleMapClick}>
//           Get Directions
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useEffect } from 'react';
import Header from '../../components/HeaderSection/header';
import './contact.css';

const Contact = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=Vignan%27s+Institute+of+Information+Technology&hl=en', '_blank');
  };

  useEffect(() => {
    // Intersection Observer for triggering animations
    const contactItems = document.querySelectorAll('.contact-item');
    const mapSection = document.querySelector('.map-section');
    const observerOptions = {
      root: null, // Use viewport
      threshold: 0.3, // Trigger when 30% of the item is visible
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Add show class to trigger animation
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    contactItems.forEach(item => observer.observe(item));
    if (mapSection) observer.observe(mapSection);
  }, []);

  return (
    <div className="contact-container">
      {/* Header */}
      <Header />

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div className="contact-text">
              <h4>Address</h4>
              <p>Vignan's Institute of Information Technology, Duvvada, Andhra Pradesh, India</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+91 123 456 7890</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-text">
              <h4>Email</h4>
              <p>contact@wildlifeconservation.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.457539921147!2d83.16334257463399!3d17.710479393418154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cb428b8087%3A0xaa3e198c43836a65!2sVignan's%20Institute%20Of%20Information%20Technology!5e1!3m2!1sen!2sin!4v1739530397505!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            title="Map showing Vignan's Institute of Information Technology"
          ></iframe>
        </div>
        <button className="map-button" onClick={handleMapClick}>
          Get Directions
        </button>
      </section>
    </div>
  );
};

export default Contact;