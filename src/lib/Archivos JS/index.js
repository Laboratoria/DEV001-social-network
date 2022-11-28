// aquí exportaras las funciones que necesites
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

// Función de createUserWithEmailAndPassword
export const functionRegister = async (email, password, name) => {
  // console.log(email);
  // console.log(password);
  // console.log(name);

  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredentials.user, {
      displayName: name,
    });
    // console.log(userCredentials.user);
    // console.log(userCredentials.user.displayName = name);
    return userCredentials.user;
  } catch (error) {
    // console.log(error);

    if (error.code === 'auth/email-already-in-use') {
      alert('El correo ya está registrado');
      return 'error';
    }
    if (error.code === 'auth/invalid-email') {
      alert('Debes ingresar un correo válido');
      return 'error';
    }
    if (error.code === 'auth/weak-password') {
      alert('La contraseña debe tener al menos 6 carácteres');
      return 'error';
    }
    if (error.code) {
      alert('Algo está mal en tu registro');
      return 'error';
    }
    return 'error';
  }
};

// Función de signInWithEmailAndPassword
export const functionLogin = async (email, password) => {
  // console.log(email);
  // console.log(password);
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    // console.log(credentials.user);
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
    console.log(credentials.user);
    return credentials.user;
  } catch (error) {
    // console.log(error);
    return 'error';
  }
};

// Recordatorio -> testear qué regresa signInWithPopup

// Función de addDoc
export const functionSaveTask = (editdescription, nameUser, idUser, creationDate) => {
  addDoc(collection(db, 'task'), {
    editdescription, nameUser, idUser, creationDate,
  });
  console.log(collection.data());
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
