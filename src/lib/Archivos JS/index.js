import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import {
  deleteDoc, doc, getDoc, updateDoc, addDoc, collection, getDocs, onSnapshot,
} from 'firebase/firestore';

import { auth, db } from './firebase.js';

export const functionRegister = async (email, password, name, image) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    if (name && image) {
      await updateProfile(userCredentials.user, {
        displayName: name,
        photoURL: image,
      });
    }
    return userCredentials.user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return 'El correo ya está registrado';
    }
    if (error.code === 'auth/invalid-email') {
      return 'Debes ingresar un correo válido';
    }
    if (error.code === 'auth/weak-password') {
      return 'La contraseña debe tener al menos 6 carácteres';
    }
    return 'Algo está mal en tu registro';
  }
};

// Función de signInWithEmailAndPassword
export const functionLogin = async (email, password) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    return credentials.user;
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      alert('Contraseña incorrecta');
      return 'error';
    }
    if (error.code === 'auth/user-not-found') {
      alert('Dirección Email no encontrada, por favor regístrese');
      return 'error';
    }
    if (error.code) {
      alert('Error en inicio de sesión, intente nuevamente');
      return 'error';
    }
    return 'error';
  }
};

// Función de signInWithPopup
export const functionRegisterGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    return credentials.user;
  } catch (error) {
    return 'error';
  }
};

// Recordatorio -> testear qué regresa signInWithPopup

// Función de addDoc
export const functionSaveTask = (editdescription, nameUser, idUser, creationDate, likes) => {
  addDoc(collection(db, 'task'), {
    editdescription, nameUser, idUser, creationDate, likes,
  });
};

// Función de getDocs
export const functionGetTask = () => getDocs(collection(db, 'task'));

// Función de onSnapshot
export const functionOnGetTask = (callback) => onSnapshot(collection(db, 'task'), callback);

// Función de signOut
export const functionSignOut = async (authentication) => signOut(authentication);

// Función de deleteDoc
export const functionDeleteTask = (id) => deleteDoc(doc(db, 'task', id));

// Función de getDoc
export const functionGetTask2 = (id) => getDoc(doc(db, 'task', id));

// Función de updateDoc
export const functionUpdateTask = (id, newTask) => updateDoc(doc(db, 'task', id), newTask);
