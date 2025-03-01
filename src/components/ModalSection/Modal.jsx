// import React from 'react';
// import './Modal.css'; // Import CSS for styling

// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>{title}</h2>
//         <button className="close-button" onClick={onClose}>❌</button>
//         <div className="modal-body">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          ❌
        </button>
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;