 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 import { onSnapshot, query, getFirestore, collection, addDoc, deleteDoc, doc, orderBy } from "firebase/firestore";
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
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);



 export const subscribeCollection = () => {
     //crear la promesa
     const q = query(collection(db, "Post"), orderBy('date', 'asc'));
     console.log(orderBy)
     const unsubscribe = onSnapshot(q, (querySnapshot) => {
         const posts = [];
         querySnapshot.forEach((doc) => {
             posts.push(doc.data());
         });
         console.log(posts);
     });


 }

 export const registrarUsuario = (email, contraseña) => { //usamos mail y contraseña porque no están en Firebase
     return createUserWithEmailAndPassword(auth, email, contraseña); //debe contener tal cual el nombre de los parámetros de arriba
 }


 export const loginUsuario = (email, contraseña) => {
     return signInWithEmailAndPassword(auth, email, contraseña);
 }


 export const registroGoogle = () => {
     return signInWithPopup(auth, provider);
 }

 export const publicarPost = (postValue) => {
     const user = auth.currentUser;
     console.log(user);
     const docRef = addDoc(collection(db, "Post"), {
         contenidoPost: postValue,
         nombreUsuario: user.displayName,
         email: user.email,
         date: new Date().toLocaleString(),

     });
     return docRef;
 }

 export const eliminarPublicacion = id => deleteDoc(doc(db, "Post", id));