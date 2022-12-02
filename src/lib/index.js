// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBhg4DSAWYv5vj5PvFXKIXRuZSP-O3HtNo',
  authDomain: 'sn-semillero.firebaseapp.com',
  projectId: 'sn-semillero',
  storageBucket: 'sn-semillero.appspot.com',
  messagingSenderId: '231094255194',
  appId: '1:231094255194:web:9f8e081918de3fd7436263',
  measurementId: 'G-0KGE235LCY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
