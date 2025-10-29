// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuX70TAI-vYhts0nY6q-mz19rCLaGnzqg",
  authDomain: "skillswap-project-d3aff.firebaseapp.com",
  projectId: "skillswap-project-d3aff",
  storageBucket: "skillswap-project-d3aff.firebasestorage.app",
  messagingSenderId: "962902561309",
  appId: "1:962902561309:web:8802f3ca9ff536016f2cf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);