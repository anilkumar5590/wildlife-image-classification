// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";




// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();

// export default app;


// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

  
const firebaseConfig = {
    apiKey: "AIzaSyANZ6CqhD3_OTmOrci_tuF8hyS-gdap3BM",
    authDomain: "wildlifeconservation-64586.firebaseapp.com",
    projectId: "wildlifeconservation-64586",
    storageBucket: "wildlifeconservation-64586.firebasestorage.app",
    messagingSenderId: "714589372637",
    appId: "1:714589372637:web:228170e10679811b751b34",
    measurementId: "G-M0WXQC622L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Add this line

export { auth, provider };
