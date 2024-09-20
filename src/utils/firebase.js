// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS5si3pTbfIAe029-6oFznW_ZeaM9BB5Y",
  authDomain: "netflixgpt-fa238.firebaseapp.com",
  projectId: "netflixgpt-fa238",
  storageBucket: "netflixgpt-fa238.appspot.com",
  messagingSenderId: "964626808405",
  appId: "1:964626808405:web:b145cb641b5df349879edc",
  measurementId: "G-Z6HNXMWY35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const auth = getAuth();