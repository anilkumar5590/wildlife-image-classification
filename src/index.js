
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // import App from './App';
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Home from './Home';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//     </Route>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from './Home';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App'; // Import the App component
// import WelcomePage from '../src/pages/WelcomePageSection/WelcomePage'; // Import the WelcomePage component
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// // Setting up routes in the router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <WelcomePage />, // Use WelcomePage.js here
//   },
//   {
//     path: "/home",
//     element: <App />, // Use App.js here
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router} />
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WelcomePage from '../src/pages/WelcomePageSection/WelcomePage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Protected from '../src/pages/AuthenticationSection/Protected';
import Signup from '../src/pages/AuthenticationSection/signup';
import Login from '../src/pages/AuthenticationSection/login';
import VerifyEmail from '../src/pages/AuthenticationSection/verify-email';
import ResetPassword from '../src/pages/AuthenticationSection/reset-password';

import About from '../src/pages/AboutSection/About';
import Contact from '../src/pages/ContactSectionPage/contact';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<App />}>
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
