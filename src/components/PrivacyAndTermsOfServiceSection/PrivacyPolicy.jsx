// import React from 'react';

// const PrivacyPolicy = () => {
//   return (
//     <div className="privacy-policy">
//       <h1>Privacy Policy</h1>
//       <p><strong>Effective Date:</strong> [Insert Date]</p>
//       <p>
//         At [Wildlife Conservation Project Name], we value your privacy and are committed to protecting your personal information.
//         This Privacy Policy explains how we collect, use, and disclose information when you use our services.
//       </p>
      
//       <h2>1. Information We Collect</h2>
//       <p>
//         We may collect the following types of information:
//         <ul>
//           <li><strong>Personal Information:</strong> Information that you provide to us, such as your name, email address, or other identifiable details.</li>
//           <li><strong>Usage Data:</strong> Information about how you interact with our website or services, including IP addresses, browser type, and access times.</li>
//           <li><strong>Images:</strong> The wildlife images you upload, which we use to analyze and predict the species of animals.</li>
//         </ul>
//       </p>

//       <h2>2. How We Use Your Information</h2>
//       <p>
//         We use the information we collect in the following ways:
//         <ul>
//           <li>To process and analyze the images you upload for wildlife identification.</li>
//           <li>To improve and personalize our services.</li>
//           <li>To send you updates or notifications related to our services.</li>
//         </ul>
//       </p>

//       <h2>3. How We Protect Your Information</h2>
//       <p>
//         We implement security measures to protect your personal and image data from unauthorized access or disclosure. However, no method of electronic transmission is 100% secure, and we cannot guarantee its absolute security.
//       </p>

//       <h2>4. Sharing Your Information</h2>
//       <p>
//         We do not sell or share your personal data with third parties. We may share your information only in the following circumstances:
//         <ul>
//           <li>To comply with legal obligations.</li>
//           <li>In case of a merger, acquisition, or sale of assets, your data may be transferred to the new owner.</li>
//         </ul>
//       </p>

//       <h2>5. Your Rights</h2>
//       <p>
//         You have the right to:
//         <ul>
//           <li>Access the personal data we have collected.</li>
//           <li>Correct any inaccuracies in your personal information.</li>
//           <li>Request the deletion of your personal data.</li>
//           <li>Opt-out of receiving promotional emails.</li>
//         </ul>
//         If you wish to exercise any of these rights, please contact us at [Contact Email].
//       </p>

//       <h2>6. Changes to This Privacy Policy</h2>
//       <p>
//         We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page, with the effective date indicated at the top.
//       </p>

//       <h2>7. Contact Us</h2>
//       <p>If you have any questions about this Privacy Policy or our practices, please contact us at [Contact Email].</p>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      {/* <h2>Privacy Policy</h2> */}
      <p><strong>Effective Date:</strong> [Insert Date]</p>
      <p>
        At [Wildlife Conservation Project Name], we value your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and disclose information when you use our services.
      </p>
      
      <h3>1. Information We Collect</h3>
      <ul>
        <li><strong>Personal Information:</strong> Your name, email, or other identifiable details.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website or services.</li>
        <li><strong>Images:</strong> Wildlife images you upload, used for animal species identification.</li>
      </ul>

      <h3>2. How We Use Your Information</h3>
      <ul>
        <li>To process and analyze uploaded images.</li>
        <li>To improve and personalize our services.</li>
        <li>To send you updates or notifications.</li>
      </ul>

      <h3>3. How We Protect Your Information</h3>
      <p>We implement security measures to protect your personal data from unauthorized access.</p>

      <h3>4. Sharing Your Information</h3>
      <ul>
        <li>We do not sell or share your data with third parties.</li>
        <li>We may share data to comply with legal obligations.</li>
      </ul>

      <h3>5. Your Rights</h3>
      <ul>
        <li>Access the personal data we have collected.</li>
        <li>Request correction or deletion of your personal data.</li>
        <li>Opt-out of receiving promotional emails.</li>
      </ul>
      <p>Contact us at [Contact Email] to exercise your rights.</p>

      <h3>6. Changes to This Privacy Policy</h3>
      <p>We may update this Privacy Policy and will notify you by posting changes on this page.</p>

      <h3>7. Contact Us</h3>
      <p>If you have any questions, please contact us at [Contact Email].</p>
    </>
  );
};

export default PrivacyPolicy;
