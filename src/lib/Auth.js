import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from './Imports.js';
import { app } from './Firebase.js';

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Inicia el autentificador con google
export const provider = new GoogleAuthProvider();

// CREAR USUARIO CON EMAIL
export const createUser = (userMail, userPass) => {
  createUserWithEmailAndPassword(auth, userMail, userPass)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log('welcome ', user);
      // ...
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        document.getElementById('errorSpace').innerHTML = 'Éste correo ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        document.getElementById('errorSpace').innerHTML = 'El correo que ingresaste es inválido';
      } else if (error.code === 'auth/weak-password') {
        document.getElementById('errorSpace').innerHTML = 'Tu clave tiene que tener un mínimo de seis dígitos';
      } else if (error.code) {
        document.getElementById('errorSpace').innerHTML = 'Revisa los datos ingresados, algo no está bien';
      }
    });
};

// INGRESAR CON USUARIO EXISTENTE
export const signUp = (userMail, userPass, onNavigate) => {
  signInWithEmailAndPassword(auth, userMail, userPass)
    .then((userCredential) => {
    // Signed in
      // const user = userCredential.user;
      onAuthStateChanged(auth, (usuario) => {
        if (usuario) {
          onNavigate('/wall');
          // const uid = usuario.uid;
        } else {
          onNavigate('/login');
        }
      });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        document.getElementById('errorLogin').innerHTML = 'Este correo ya está registrado';
      } else if (error.code === 'auth/invalid-email') {
        document.getElementById('errorLogin').innerHTML = 'El correo que ingresaste es inválido';
      } else if (error.code === 'auth/weak-password') {
        document.getElementById('errorLogin').innerHTML = 'Tu clave tiene que tener un mínimo de seis dígitos';
      } else if (error.code) {
        document.getElementById('errorLogin').innerHTML = 'Revisa los datos ingresados, algo no está bien';
      }
    });
};

// INGRESAR CON GOOGLE

// FUNCIÓN DE SIGNOUT
