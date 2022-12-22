// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtdheZ_Orf0HZHxrU3VfNwphLezyAo5Kk',
  authDomain: 'social-network-1-ac2a2.firebaseapp.com',
  projectId: 'social-network-1-ac2a2',
  storageBucket: 'social-network-1-ac2a2.appspot.com',
  messagingSenderId: '363132346369',
  appId: '1:363132346369:web:5681f6e9dd0804c53ca000',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Crea colección y documentos
export const saveTask = (postSpace, currentDate) => {
  console.log(postSpace.value);
  return addDoc(collection(db, 'posts'), { content: postSpace.value, date: currentDate }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
};

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
