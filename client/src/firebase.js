// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1feb5.firebaseapp.com",
  projectId: "mern-auth-1feb5",
  storageBucket: "mern-auth-1feb5.appspot.com",
  messagingSenderId: "751740613737",
  appId: "1:751740613737:web:2b162f7084b52139951ef8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
