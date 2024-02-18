// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFY21Kil5wXVtSfrT8hGjosL8RAvXP3FU",
  authDomain: "plan-it-solution-2024-f4b7c.firebaseapp.com",
  projectId: "plan-it-solution-2024-f4b7c",
  storageBucket: "plan-it-solution-2024-f4b7c.appspot.com",
  messagingSenderId: "948758008139",
  appId: "1:948758008139:web:cb6a0928aceb2032fdd8ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);