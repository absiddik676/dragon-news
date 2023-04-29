// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-yJ5qKB4_eA-rHUoE_mNcwmL1-hhO-TU",
  authDomain: "the-news-dragon-8eabc.firebaseapp.com",
  projectId: "the-news-dragon-8eabc",
  storageBucket: "the-news-dragon-8eabc.appspot.com",
  messagingSenderId: "974356847339",
  appId: "1:974356847339:web:8c3f9ce594b3f76261fcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;