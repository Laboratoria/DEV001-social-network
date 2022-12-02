// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtdheZ_Orf0HZHxrU3VfNwphLezyAo5Kk',
  authDomain: 'social-network-1-ac2a2.firebaseapp.com',
  projectId: 'social-network-1-ac2a2',
  storageBucket: 'social-network-1-ac2a2.appspot.com',
  messagingSenderId: '363132346369',
  appId: '1:363132346369:web:5681f6e9dd0804c53ca000',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

