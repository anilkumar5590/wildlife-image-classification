
// import React, { useState } from 'react';
// import Modal from '../ModalSection/Modal'; // Import Modal Component
// import PrivacyPolicy from '../PrivacyAndTermsOfServiceSection/PrivacyPolicy';
// import TermsOfService from '../PrivacyAndTermsOfServiceSection/TermsOfService';

// const Footer = () => {
//   const [isPrivacyOpen, setPrivacyOpen] = useState(false);
//   const [isTermsOpen, setTermsOpen] = useState(false);

//   return (
//     <footer>
//       <p><span>Connect with us on social media </span> 
//         <span className='contact-mail'>Contact: info@wildlifeconservation.com </span>
//         <span className="link" onClick={() => setPrivacyOpen(true)}>Privacy Policy</span> | 
//         <span className="link" onClick={() => setTermsOpen(true)}> Terms of Service</span>
//       </p>

//       {/* Privacy Policy Modal */}
//       <Modal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
//         <PrivacyPolicy />
//       </Modal>

//       {/* Terms of Service Modal */}
//       <Modal isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
//         <TermsOfService />
//       </Modal>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from 'react';
import Modal from '../ModalSection/Modal';
import PrivacyPolicy from '../PrivacyAndTermsOfServiceSection/PrivacyPolicy';
import TermsOfService from '../PrivacyAndTermsOfServiceSection/TermsOfService';
// import ''; // Assuming this is where footer CSS lives

const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  return (
      <footer>
      <p>
        <span>Connect with us on social media </span>
        <span className="contact-mail">Contact: info@wildlifeconservation.com </span>
        <span className="link privacy-link" onClick={() => setPrivacyOpen(true)}>
          Privacy Policy
        </span> | 
        <span className="link terms-link" onClick={() => setTermsOpen(true)}>
          Terms of Service
        </span>
      </p>

      {/* Privacy Policy Modal */}
      <Modal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <PrivacyPolicy />
      </Modal>

      {/* Terms of Service Modal */}
      <Modal isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <TermsOfService />
      </Modal>
    </footer>
  );
};

export default Footer;