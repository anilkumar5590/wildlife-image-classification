// import React, { useState } from "react";

// const AddTestimonial = ({ onTestimonialAdded }) => {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [feedback, setFeedback] = useState("");

//   // Function to limit feedback to 100 words
//   const handleFeedbackChange = (e) => {
//     const value = e.target.value;
//     const words = value.trim().split(/\s+/);  // Trim to remove extra spaces and split by any whitespace
//     if (words.length <= 100) {
//       setFeedback(value);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTestimonial = { name, location, feedback };

//     // Send POST request to JSON Server
//     fetch("http://localhost:5000/testimonials", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newTestimonial),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         onTestimonialAdded(data); // Update parent component
//         setName(""); // Clear form fields
//         setLocation("");
//         setFeedback("");
//       })
//       .catch((error) => console.error("Error adding testimonial:", error));
//   };

//   // Function to count words in feedback
//   const countWords = (str) => {
//     const words = str.trim().split(/\s+/); // Trim whitespace and split by whitespace
//     return words[0] === "" ? 0 : words.length; // Return 0 if the string is empty, else the length of the array
//   };

//   return (
//     <div className="add-testimonial">
//       <h2>Add Your Testimonial</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Your Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Your Feedback"
//           value={feedback}
//           rows="12"
//           onChange={handleFeedbackChange} // Use the word-limiting change handler
//           required
//         ></textarea>
//         <p>{countWords(feedback)} / 100 words</p> {/* Display current word count */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddTestimonial;

import React, { useState } from "react";

const AddTestimonial = ({ onTestimonialAdded }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [feedback, setFeedback] = useState("");

  // Function to limit feedback to 100 words
  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/); // Trim to remove extra spaces and split by any whitespace
    if (words.length <= 100) {
      setFeedback(value);
    }
  };

  // Handle paste event to ensure only 100 words are pasted
  const handlePaste = (e) => {
    const pastedContent = e.clipboardData.getData("text");
    const words = pastedContent.trim().split(/\s+/);
    if (words.length > 100) {
      e.preventDefault(); // Prevent the paste if the content exceeds 100 words
      alert("You can only paste up to 100 words.");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTestimonial = { name, location, feedback };

    // Send POST request to JSON Server
    fetch("https://image-classification-flask-testimonials.onrender.com/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTestimonial),
    })
      .then((response) => response.json())
      .then((data) => {
        onTestimonialAdded(data); // Update parent component
        setName(""); // Clear form fields
        setLocation("");
        setFeedback("");
      })
      .catch((error) => console.error("Error adding testimonial:", error));
  };

  // Function to count words in feedback
  const countWords = (str) => {
    const words = str.trim().split(/\s+/);
    return words[0] === "" ? 0 : words.length;
  };

  return (
    <div className="add-testimonial">
      <h2>Add Your Testimonial</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          rows="12"
          onChange={handleFeedbackChange} // Use the word-limiting change handler
          onPaste={handlePaste} // Handle the paste event
          required
        ></textarea>
        <p>{countWords(feedback)} / 100 words</p> {/* Display current word count */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTestimonial;
