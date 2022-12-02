// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCRxO17isU7q-0OtCXV0sYgIpfcrkEGxos',
  authDomain: 'semillero-sn.firebaseapp.com',
  projectId: 'semillero-sn',
  storageBucket: 'semillero-sn.appspot.com',
  messagingSenderId: '815219913371',
  appId: '1:815219913371:web:e438141b1830b1a6794c3e',
  measurementId: 'G-D1LVWHJEFM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
