// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import './Upload.css';
// import PredictionResults from '../PredictionResultsSection/PredictionResults';
// import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { useNavigate } from 'react-router-dom';

// const UploadComponent = React.forwardRef((props, ref) => {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false); // Track uploading status
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const [globalDragging, setGlobalDragging] = useState(false); // Track global drag state
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track submit state
//   const [prediction, setPrediction] = useState(null); // Store prediction results
//   const [predictionId, setPredictionId] = useState(null); // Store prediction ID
//   const dragCounter = useRef(0); // Track global drag events
//   const [isLoading, setIsLoading] = useState(false); // Track loading spinner state
//   const navigate = useNavigate();

//   // Effect hook to handle login check and global drag-and-drop listeners
//   useEffect(() => {
//     // Check if the user is logged in when the component mounts
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       console.log("User is not logged in, redirecting to login page...");
//       navigate('/login'); // Redirect to login page if not logged in
//     }

//     // Attach global drag and drop listeners on component mount
//     window.addEventListener('dragover', handleGlobalDragOver);
//     window.addEventListener('dragenter', handleGlobalDragEnter);
//     window.addEventListener('drop', handleGlobalDrop);
//     window.addEventListener('dragleave', handleGlobalDragLeave);
//     window.addEventListener('dragend', handleGlobalDragEnd); // Add dragend listener

//     // Clean up listeners on component unmount
//     return () => {
//       window.removeEventListener('dragover', handleGlobalDragOver);
//       window.removeEventListener('dragenter', handleGlobalDragEnter);
//       window.removeEventListener('drop', handleGlobalDrop);
//       window.removeEventListener('dragleave', handleGlobalDragLeave);
//       window.removeEventListener('dragend', handleGlobalDragEnd); // Remove dragend listener
//     };
//   }, [navigate]);

//   // Handle image upload and simulate progress
//   const handleImageUpload = useCallback((file) => {
//     setImage(file);
//     setUploadProgress(0); // Reset progress
//     setUploading(true); // Set uploading state to true
//     let progress = 0;
//     const interval = setInterval(() => {
//       if (progress < 100) {
//         progress += 5;
//         setUploadProgress(progress);
//       } else {
//         clearInterval(interval);
//       }
//     }, 100);
//   }, []);

//   // Global drag handlers
//   const handleGlobalDragOver = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }, []);

//   const handleGlobalDragEnter = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dragCounter.current++;
//     if (dragCounter.current === 1) {
//       setGlobalDragging(true);
//     }
//   }, []);

//   const handleGlobalDrop = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setGlobalDragging(false);
//     dragCounter.current = 0;
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       handleImageUpload(file);
//     } else {
//       alert("Please upload an image file.");
//     }
//   }, [handleImageUpload]);

//   const handleGlobalDragLeave = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dragCounter.current--;
//     if (dragCounter.current === 0) {
//       setGlobalDragging(false);
//     }
//   }, []);

//   // Reset drag state when drag ends (mouse released outside window)
//   const handleGlobalDragEnd = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setGlobalDragging(false);
//     dragCounter.current = 0;
//   }, []);

//   // Handle file browsing
//   const handleFileChange = useCallback((e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       handleImageUpload(file);
//     } else {
//       alert("Please upload an image file.");
//     }
//   }, [handleImageUpload]);

//   // Handle submit action for the uploaded image
//   const handleSubmit = async () => {
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       console.error("User not logged in");
//       navigate('/login'); // Redirect to login page if not logged in
//       return;
//     }

//     if (!image) {
//       console.error("No image to submit");
//       return;
//     }

//     setIsLoading(true); // Set loading state to true
    
//     const formData = new FormData();
//     formData.append('file', image);

//     try {
//       // Send the image to Flask backend for prediction
//       const response = await axios.post('https://anilkumar5590-image-classification-backend.hf.space/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data.prediction_id) {
//         setPredictionId(response.data.prediction_id);  // Save the prediction ID
//         console.log("Prediction ID:", response.data.prediction_id);

//         // Start polling for the result every 2 seconds
//         const interval = setInterval(async () => {
//           try {
//             const resultResponse = await axios.get(`https://anilkumar5590-image-classification-backend.hf.space/get_prediction/${response.data.prediction_id}`);
//             if (resultResponse && resultResponse.data) {
//               console.log("Prediction result received:", resultResponse.data);
//               setPrediction(resultResponse.data); 
//               setIsLoading(false);  // Set loading state to false
//               clearInterval(interval);  // Stop polling once we have the result
//             }
//           } catch (error) {
//             console.error('Error fetching prediction:', error);
//           }
//         }, 2000); // Poll every 2 seconds
//       }
//     } catch (error) {
//       console.error('Error during prediction:', error);
//       setIsLoading(false); // Set loading state to false
//     }
//   };

//   // Handle refresh functionality
//   const handleRefresh = () => {
//     setImage(null);
//     setUploadProgress(0);
//     setPrediction(null);
//     setIsLoading(false);
//     setIsSubmitted(false);
//     setUploading(false);
//   };

//   return (
//     <>
//       {/* Global Drag Overlay */}
//       <div className={`global-drag-overlay ${globalDragging ? 'dragging' : ''}`}>
//         <div className="drag-message">
//           Drop to Upload Image
//         </div>
//       </div>

//       <section
//         ref={ref}
//         className={`upload ${dragging ? 'dragging' : ''}`}
//         onDragOver={(e) => e.preventDefault()}
//         onDragEnter={(e) => setDragging(true)}
//         onDragLeave={(e) => setDragging(false)}
//         onDrop={handleGlobalDrop}
//       >
//         <h2>Upload Your Image</h2>
//         <button onClick={handleRefresh} className="refresh-button" title="refresh">
//           <i className="fas fa-sync-alt"></i> {/* Font Awesome Refresh Icon */}
//         </button>

//         <div className="upload-area">
//           {!image && (
//             <div className="instructions">
//               <p>Drag and drop an image here, or</p>
//               <label htmlFor="file-upload" className="browse-button">
//                 Browse Files
//               </label>
//               <input
//                 id="file-upload"
//                 type="file"
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 style={{ display: 'none' }}
//               />
//               <p>to upload from your computer</p>
//             </div>
//           )}
//           {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />}
//         </div>

//         {/* Show progress bar only when uploading */}
//         {uploading && (
//           <div className="progress-container">
//             <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
//             <span className="progress-text">{uploadProgress}%</span>
//           </div>
//         )}

//         {uploadProgress === 100 && (
//           <button onClick={handleSubmit}>Submit</button>
//         )}
//       </section>

//       {/* Show Loading Spinner while waiting for prediction */}
//       {isLoading && (
//         <div className="loading-spinner"></div>
//       )}

//       {/* Show PredictionResults after clicking Submit */}
//       {prediction && <PredictionResults prediction={prediction} />}
//     </>
//   );
// });

// export default UploadComponent;


// import React, { useState, useCallback, useRef, useEffect } from 'react';
// import './Upload.css';
// import PredictionResults from '../PredictionResultsSection/PredictionResults';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaSyncAlt } from 'react-icons/fa'; // Import the refresh icon from react-icons

// const UploadComponent = React.forwardRef((props, ref) => {
//   const [image, setImage] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const [globalDragging, setGlobalDragging] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [prediction, setPrediction] = useState(null);
//   const [predictionId, setPredictionId] = useState(null);
//   const dragCounter = useRef(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       console.log("User is not logged in, redirecting to login page...");
//       navigate('/login');
//     }

//     window.addEventListener('dragover', handleGlobalDragOver);
//     window.addEventListener('dragenter', handleGlobalDragEnter);
//     window.addEventListener('drop', handleGlobalDrop);
//     window.addEventListener('dragleave', handleGlobalDragLeave);
//     window.addEventListener('dragend', handleGlobalDragEnd);

//     return () => {
//       window.removeEventListener('dragover', handleGlobalDragOver);
//       window.removeEventListener('dragenter', handleGlobalDragEnter);
//       window.removeEventListener('drop', handleGlobalDrop);
//       window.removeEventListener('dragleave', handleGlobalDragLeave);
//       window.removeEventListener('dragend', handleGlobalDragEnd);
//     };
//   }, [navigate]);

//   const handleImageUpload = useCallback((file) => {
//     setImage(file);
//     setUploadProgress(0);
//     setUploading(true);
//     let progress = 0;
//     const interval = setInterval(() => {
//       if (progress < 100) {
//         progress += 5;
//         setUploadProgress(progress);
//       } else {
//         clearInterval(interval);
//         setUploading(false);
//       }
//     }, 100);
//   }, []);

//   const handleGlobalDragOver = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }, []);

//   const handleGlobalDragEnter = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dragCounter.current++;
//     if (dragCounter.current === 1) {
//       setGlobalDragging(true);
//     }
//   }, []);

//   const handleGlobalDrop = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setGlobalDragging(false);
//     dragCounter.current = 0;
//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       handleImageUpload(file);
//     } else {
//       alert("Please upload an image file.");
//     }
//   }, [handleImageUpload]);

//   const handleGlobalDragLeave = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     dragCounter.current--;
//     if (dragCounter.current === 0) {
//       setGlobalDragging(false);
//     }
//   }, []);

//   const handleGlobalDragEnd = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setGlobalDragging(false);
//     dragCounter.current = 0;
//   }, []);

//   const handleFileChange = useCallback((e) => {
//     const file = e.target.files[0];
//     if (file && file.type.startsWith("image/")) {
//       handleImageUpload(file);
//     } else {
//       alert("Please upload an image file.");
//     }
//   }, [handleImageUpload]);

//   const handleSubmit = async () => {
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       console.error("User not logged in");
//       navigate('/login');
//       return;
//     }

//     if (!image) {
//       console.error("No image to submit");
//       return;
//     }

//     setIsLoading(true);
//     setIsSubmitted(true);

//     const formData = new FormData();
//     formData.append('file', image);

//     try {
//       const response = await axios.post('https://anilkumar5590-image-classification-backend.hf.space/predict', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response && response.data.prediction_id) {
//         setPredictionId(response.data.prediction_id);
//         console.log("Prediction ID:", response.data.prediction_id);

//         const interval = setInterval(async () => {
//           try {
//             const resultResponse = await axios.get(`https://anilkumar5590-image-classification-backend.hf.space/get_prediction/${response.data.prediction_id}`);
//             if (resultResponse && resultResponse.data) {
//               console.log("Prediction result received:", resultResponse.data);
//               setPrediction(resultResponse.data);
//               setIsLoading(false);
//               clearInterval(interval);
//             }
//           } catch (error) {
//             console.error('Error fetching prediction:', error);
//           }
//         }, 2000);
//       }
//     } catch (error) {
//       console.error('Error during prediction:', error);
//       setIsLoading(false);
//     }
//   };

//   const handleRefresh = () => {
//     setImage(null);
//     setUploadProgress(0);
//     setPrediction(null);
//     setIsLoading(false);
//     setIsSubmitted(false);
//     setUploading(false);
//   };

//   return (
//     <>
//       <div className={`global-drag-overlay ${globalDragging ? 'dragging' : ''}`}>
//         <div className="drag-message">
//           Drop to Upload Image
//         </div>
//       </div>

//       <section
//         ref={ref}
//         className={`upload ${dragging ? 'dragging' : ''}`}
//         onDragOver={(e) => e.preventDefault()}
//         onDragEnter={(e) => setDragging(true)}
//         onDragLeave={(e) => setDragging(false)}
//         onDrop={handleGlobalDrop}
//       >
//         <h2>Upload Your Image</h2>
//         <div onClick={handleRefresh} className="refresh-button" title="refresh">
//           <FaSyncAlt /> {/* Replaced Font Awesome with React Icon */}
//         </div>

//         <div className="upload-area">
//           {!image && (
//             <div className="instructions">
//               <p>Drag and drop an image here, or</p>
//               <label htmlFor="file-upload" className="browse-button">
//                 Browse Files
//               </label>
//               <input
//                 id="file-upload"
//                 type="file"
//                 onChange={handleFileChange}
//                 accept="image/*"
//                 style={{ display: 'none' }}
//               />
//               <p>to upload from your computer</p>
//             </div>
//           )}
//           {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />}
//         </div>

//         {uploading && !isSubmitted && (
//           <div className="progress-container">
//             <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
//             <span className="progress-text">{uploadProgress}%</span>
//           </div>
//         )}

//         {uploadProgress === 100 && !isSubmitted && (
//           <button onClick={handleSubmit}>Submit</button>
//         )}
//       </section>

//       {isLoading && (
//         <div className="loading-spinner"></div>
//       )}

//       {prediction && <PredictionResults prediction={prediction} />}
//     </>
//   );
// });

// export default UploadComponent;


import React, { useState, useCallback, useRef, useEffect } from 'react';
import './Upload.css';
import PredictionResults from '../PredictionResultsSection/PredictionResults';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSyncAlt } from 'react-icons/fa';

const UploadComponent = React.forwardRef((props, ref) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [globalDragging, setGlobalDragging] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [predictionId, setPredictionId] = useState(null);
  const dragCounter = useRef(0);
  const [isLoading, setIsLoading] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false); // New state to control submission
  const navigate = useNavigate();

  // Set up global drag-and-drop event listeners
  useEffect(() => {
    console.log("Setting up global drag-and-drop event listeners...");

    window.addEventListener('dragover', handleGlobalDragOver);
    window.addEventListener('dragenter', handleGlobalDragEnter);
    window.addEventListener('drop', handleGlobalDrop);
    window.addEventListener('dragleave', handleGlobalDragLeave);
    window.addEventListener('dragend', handleGlobalDragEnd);

    return () => {
      console.log("Cleaning up global drag-and-drop event listeners...");
      window.removeEventListener('dragover', handleGlobalDragOver);
      window.removeEventListener('dragenter', handleGlobalDragEnter);
      window.removeEventListener('drop', handleGlobalDrop);
      window.removeEventListener('dragleave', handleGlobalDragLeave);
      window.removeEventListener('dragend', handleGlobalDragEnd);
    };
  }, []);

  const handleImageUpload = useCallback((file) => {
    console.log("Handling image upload...");
    setImage(file);
    setUploadProgress(0);
    setUploading(true);
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 5;
        setUploadProgress(progress);
      } else {
        clearInterval(interval);
        setUploading(false);
        setCanSubmit(true); // Enable submission only after upload completes
      }
    }, 100);
  }, []);

  const handleGlobalDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleGlobalDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (dragCounter.current === 1) {
      setGlobalDragging(true);
    }
  }, []);

  const handleGlobalDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setGlobalDragging(false);
    dragCounter.current = 0;
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    } else {
      alert("Please upload an image file.");
    }
  }, [handleImageUpload]);

  const handleGlobalDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setGlobalDragging(false);
    }
  }, []);

  const handleGlobalDragEnd = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setGlobalDragging(false);
    dragCounter.current = 0;
  }, []);

  const handleFileChange = useCallback((e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      handleImageUpload(file);
    } else {
      alert("Please upload an image file.");
    }
  }, [handleImageUpload]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent any default behavior
    console.log("handleSubmit called explicitly at:", new Date().toISOString());

    // Check login status here
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      console.error("User not logged in");
      navigate('/login');
      return;
    }

    if (!image) {
      console.error("No image to submit");
      return;
    }

    setIsLoading(true);
    setIsSubmitted(true);

    const formData = new FormData();
    formData.append('file', image);

    axios
      .post('https://anilkumar5590-image-classification-backend.hf.space/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        if (response && response.data.prediction_id) {
          setPredictionId(response.data.prediction_id);
          console.log("Prediction ID:", response.data.prediction_id);

          const interval = setInterval(() => {
            axios
              .get(`https://anilkumar5590-image-classification-backend.hf.space/get_prediction/${response.data.prediction_id}`)
              .then((resultResponse) => {
                if (resultResponse && resultResponse.data) {
                  console.log("Prediction result received:", resultResponse.data);
                  setPrediction(resultResponse.data);
                  setIsLoading(false);
                  clearInterval(interval);
                }
              })
              .catch((error) => {
                console.error('Error fetching prediction:', error);
              });
          }, 2000);
        }
      })
      .catch((error) => {
        console.error('Error during prediction:', error);
        setIsLoading(false);
      });
  };

  const handleRefresh = () => {
    console.log("handleRefresh called");
    setImage(null);
    setUploadProgress(0);
    setPrediction(null);
    setIsLoading(false);
    setIsSubmitted(false);
    setUploading(false);
    setCanSubmit(false); // Reset canSubmit state
  };

  return (
    <>
      <div className={`global-drag-overlay ${globalDragging ? 'dragging' : ''}`}>
        <div className="drag-message">
          Drop to Upload Image
        </div>
      </div>

      <section
        ref={ref}
        className={`upload ${dragging ? 'dragging' : ''}`}
        onDragOver={(e) => e.preventDefault()}
        onDragEnter={(e) => setDragging(true)}
        onDragLeave={(e) => setDragging(false)}
        onDrop={handleGlobalDrop}
      >
        <h2>Upload Your Image</h2>
        <div onClick={handleRefresh} className="refresh-button" title="refresh" aria-label="Refresh upload">
          <FaSyncAlt />
        </div>

        <div className="upload-area">
          {!image && (
            <div className="instructions">
              <p>Drag and drop an image here, or</p>
              <label htmlFor="file-upload" className="browse-button">
                Browse Files
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    console.log("Enter key pressed on file input");
                  }
                }}
              />
              <p>to upload from your computer</p>
            </div>
          )}
          {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploaded-image" />}
        </div>

        {uploading && !isSubmitted && (
          <div className="progress-container">
            <div className="progress-bar" style={{ width: `${uploadProgress}%` }}></div>
            <span className="progress-text">{uploadProgress}%</span>
          </div>
        )}

        {uploadProgress === 100 && !isSubmitted && (
          <>
            {console.log("Submit button rendered, uploadProgress:", uploadProgress, "isSubmitted:", isSubmitted, "canSubmit:", canSubmit)}
            <button
              type="button"
              onClick={(e) => {
                console.log("Submit button clicked");
                handleSubmit(e);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  console.log("Enter key pressed on Submit button");
                  handleSubmit(e);
                }
              }}
              disabled={!canSubmit} // Disable until canSubmit is true
              aria-label="Submit image for prediction"
            >
              Submit
            </button>
          </>
        )}
      </section>

      {isLoading && (
        <div className="loading-spinner"></div>
      )}

      {prediction && <PredictionResults prediction={prediction} />}
    </>
  );
});

export default UploadComponent;