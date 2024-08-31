// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXFUA62ywtFC5grnfPV1jPGMFaoO9Mvk",
  authDomain: "bite-box-ef962.firebaseapp.com",
  projectId: "bite-box-ef962",
  storageBucket: "bite-box-ef962.appspot.com",
  messagingSenderId: "915255789894",
  appId: "1:915255789894:web:11c5730b30cf72503dfd47",
  measurementId: "G-92YW93WTN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
// const analytics = getAnalytics(app);
export{app,auth}