import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxO294UxeqNXv8yLW1xdKhXZEEeWDGvWo',
  authDomain: 'lymusic-1dfa8.firebaseapp.com',
  projectId: 'lymusic-1dfa8',
  storageBucket: 'lymusic-1dfa8.appspot.com',
  messagingSenderId: '419599374276',
  appId: '1:419599374276:web:e8f2ef5528068f61437691',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
