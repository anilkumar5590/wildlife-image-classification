import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AddTestimonial from "../AddTestimonialSection/AddTestimonial";

import './Testimonial.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch testimonials from API
  const fetchTestimonials = () => {
    setIsLoading(true);
    fetch("https://image-classification-flask-testimonials.onrender.com/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
          setTestimonials(data)
        })
      .catch((error) => { 
        console.error("Error fetching testimonials:", error)
        setIsLoading(false);
      });

      
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Callback function to update testimonials when a new one is added
  // const handleTestimonialAdded = (newTestimonial) => {
  //   setTestimonials([...testimonials, newTestimonial]);
  // };
  useEffect(() => {
    console.log("Testimonials :", testimonials);
  }, [testimonials]);

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Only one slide visible at a time
    slidesToScroll: 1,  // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: false,  // Disable center mode
    centerPadding: "0", // Remove padding around slides
    adaptiveHeight: true,  // Adjust height dynamically based on content
    cssEase: "ease-in-out", // Smooth transition
    responsive: [
      {
        breakpoint: 768,  // For mobile view
        settings: {
          slidesToShow: 1,  // Only one slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return <p className="text-center">Loading testimonials...</p>;
  }

  return (
    <div className="testimonial-section">
      <h2 className="text-center text-2xl font-bold mb-4">What Our Users Say</h2>

      {/* Testimonial Slider */}
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
            <h3 className="font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        ))}
      </Slider>

      <div>
        {/* Testimonial Form */}
    <AddTestimonial onTestimonialAdded={fetchTestimonials} />
      </div>
      
    </div>

    
  );
};

export default Testimonials;
