 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyDHhWzXY4iG1hZ-A7ll2DAHR-qMTprOwxg",
     authDomain: "red-social-49f38.firebaseapp.com",
     projectId: "red-social-49f38",
     storageBucket: "red-social-49f38.appspot.com",
     messagingSenderId: "784877427563",
     appId: "1:784877427563:web:cf8fb0a4b452b4f62a0a2e",
     measurementId: "G-T2EWJK77KP"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth(app);



 export const registrarUsuario = (email, contraseña) => {
     return createUserWithEmailAndPassword(auth, email, contraseña);
 }



 // onAuthStateChanged LO UTILIZARÉ EN EL LOGIN Y LOGOUT