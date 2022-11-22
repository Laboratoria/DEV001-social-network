// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu0kZBY-06qCeMkFzgLKJfZJTlQbAhFf8",
  authDomain: "down-family.firebaseapp.com",
  projectId: "down-family",
  storageBucket: "down-family.appspot.com",
  messagingSenderId: "561302547408",
  appId: "1:561302547408:web:1dad4ee30f4f05126ba7d5",
  measurementId: "G-M0BX5P0S9M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

console.log(analytics);

// aqui exportaras las funciones que necesites
