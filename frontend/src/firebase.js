// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-b5c97.firebaseapp.com",
  projectId: "real-estate-b5c97",
  storageBucket: "real-estate-b5c97.firebasestorage.app",
  messagingSenderId: "890095393339",
  appId: "1:890095393339:web:a8e0bc5a41eedfbfd5da1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);