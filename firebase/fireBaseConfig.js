// /firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";


const provider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: "AIzaSyCbMlV7BOtvU7MfPzeCE5q4APeN4jo16dM",
  authDomain: "news-app-4925a.firebaseapp.com",
  databaseURL: "https://news-app-4925a-default-rtdb.firebaseio.com",
  projectId: "news-app-4925a",
  storageBucket: "news-app-4925a.firebasestorage.app",
  messagingSenderId: "566937474621",
  appId: "1:566937474621:web:c8f830646fa6335eb33c54",
  measurementId: "G-6BRESJBP1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, provider };
