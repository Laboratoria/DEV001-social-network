/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* -----FUNCIONES PURAS FIREBASE -----*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
import {
  collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc, orderBy, query,
} from 'firebase/firestore';

import { auth, db } from './firebase.js';

// Import the functions you need from the SDKs you need

/* -----CREAMOS FUNCIONES PARA EL REGISTRO -----*/

// Creación de usuario con email y contraseña
// Con la función updateProfile se rescato el nombre de usuario en el registro

export const functionSignUp = async (name, email, password) => {
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
    return errorCode;
  }
};

/* -----CREAMOS FUNCIONES PARA EL INGRESO -----*/
// Ingreso con email y contraseña
export const functionSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    return errorCode;
  }
};
/* -----REGISTRO E INGRESO CON GOOGLE-----*/

export const functionUserGoogle = async () => {
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
/* -----FUNCION DE SIGN OUT-----*/
export const functionSignOut = async () => {
  await signOut(auth);
};

/* -----FUNCIONES PARA EL MURO-----*/

// Crea colección y documentos
export const saveTask = (postSpace, currentDate, name, uid) => {
  console.log(postSpace.value);
  return addDoc(collection(db, 'posts'), {
    content: postSpace.value, date: currentDate, user: name, uid,
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
};
export const currentUserInfo = () => auth.currentUser;

// Obtiene documentos que se van a publicar (plural)
export const getTasks = () => getDocs(collection(db, 'posts'));

// Publica los documentos en el momento
/* export const onGetTasks = (querySnapShot, callback) => onSnapshot(collection(db, 'posts'), callback); */
export const onGetTasks = (querySnapshot) => {
  const queryPost = query(collection(db, 'posts'), orderBy('date', 'desc'));
  onSnapshot(queryPost, querySnapshot);
};

// Elimina los documentos
export const deleteTask = (id) => deleteDoc(doc(db, 'posts', id));

// Obtiene solo un documento (singular) para editar
export const getTask = (id) => getDoc(doc(db, 'posts', id));

// Edita el documento obtenido
export const updateTask = (id, newFields) => updateDoc(doc(db, 'posts', id), newFields);

// Constante para inicializar inicio de sesión con Google
export const provider = new GoogleAuthProvider();
