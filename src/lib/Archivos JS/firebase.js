// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZqGV_EakpgC-cW-WwOLgJU_Obb6S3MBQ',
  authDomain: 'social-network-24-7.firebaseapp.com',
  projectId: 'social-network-24-7',
  storageBucket: 'social-network-24-7.appspot.com',
  messagingSenderId: '122035714361',
  appId: '1:122035714361:web:991b3fc97b26d5712090e8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(app);