// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnTpDraTk4KLSyiXiu-uNegKk0zfkfFiI",
  authDomain: "commissionqueuelunariazaner.firebaseapp.com",
  projectId: "commissionqueuelunariazaner",
  storageBucket: "commissionqueuelunariazaner.firebasestorage.app",
  messagingSenderId: "112523441717",
  appId: "1:112523441717:web:b759430c9a44bad821637c",
  measurementId: "G-D4LZ08ZDZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);