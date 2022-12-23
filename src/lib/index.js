/* eslint-disable max-len */
/* -----FUNCIONES PURAS FIREBASE -----*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
} from 'firebase/firestore';

import { app } from './firebase';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Import the functions you need from the SDKs you need

/* -----CREAMOS FUNCIONES PARA EL REGISTRO -----*/

// Creación de usuario con email y contraseña
// Con la función updateProfile se rescato el nombre de usuario en el registro

export const funtionSignUp = async (name, email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    if (name !== '') {
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
    return newUser;
  } catch (error) {
    const errorCode = error.code;
    // const errorMessage = error.message;
    if (errorCode.includes('auth/email-already-in-use')) {
      alert('This email is already in use');
    }
    if (errorCode.includes('auth/invalid-email')) {
      alert('Invalid email');
    }
    if (errorCode.includes('auth/weak-password')) {
      alert('the password must have at least six characters');
    }
    return 'error';
  }
};

/* -----CREAMOS FUNCIONES PARA EL INGRESO -----*/
// Ingreso con email y contraseña
export const funtionSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    /*  const errorMessage = error.message; */
    if (errorCode.includes('auth/user-not-found')) {
      alert('This email is not registered');
    }
    if (errorCode.includes('auth/wrong-password')) {
      alert('Wrong password');
    }
    if (errorCode) {
      alert('There is something wrong, please check again');
    }
    return 'error';
  }
};
/* -----REGISTRO E INGRESO CON GOOGLE-----*/

export const funtionUserGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const userGoogle = await signInWithPopup(auth, provider);
    console.log(userGoogle.user);
    return userGoogle.user;
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    return errorCode;
  }
};

/* -----FUNCIONES PARA EL MURO-----*/

// Crea colección y documentos
export const saveTask = (postSpace, currentDate, name) => {
  console.log(postSpace.value);
  return addDoc(collection(db, 'posts'), { content: postSpace.value, date: currentDate, user: name }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
};
export const currentUserInfo = () => auth.currentUser;


// Obtiene documentos que se van a publicar
export const getTasks = () => getDocs(collection(db, 'posts'));

// Publica los documentos en el momento
export const onGetTasks = (callback) => onSnapshot(collection(db, 'posts'), callback);

// Elimina los documentos
export const deleteTask = (id) => deleteDoc(doc(db, 'posts', id));

// Obtiene solo un documento (singular) para editar
export const getTask = (id) => getDoc(doc(db, 'posts', id));

// Edita el documento obtenido
export const updateTask = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// Constante para inicializar inicio de sesión con Google
export const provider = new GoogleAuthProvider();
