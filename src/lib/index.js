import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// ESTO SE BAJO DE FIREBASE POR MIENTRAS , NO SABEMOS PARA QUE ES.
// Import the functions you need from the SDKs you need
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
const app = initializeApp(firebaseConfig);

// GETUTH
const auth = getAuth(app);
export function formularioregistro(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // eslint-disable-next-line no-console
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // eslint-disable-next-line no-console
      console.log(errorCode);
      // eslint-disable-next-line no-console
      console.log(errorMessage);
    // ..
    });
}

export function formulariologin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
