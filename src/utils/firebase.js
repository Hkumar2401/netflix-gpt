// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfd6Rp_1u0SfiRV7zXtzABOLsTwX_Mvu8",
  authDomain: "netflix-gpt-ecfcc.firebaseapp.com",
  projectId: "netflix-gpt-ecfcc",
  storageBucket: "netflix-gpt-ecfcc.appspot.com",
  messagingSenderId: "60213013317",
  appId: "1:60213013317:web:19241763d43de085fe6c2c",
  measurementId: "G-BJMKLV1DB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();