import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase.js';

// GETUTH
const auth = getAuth(app);
export function formularioregistro(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      console.log('usuariocreado');
      return 'acetado';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function formulariologin(name, email, password) {
  signInWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('sesion iniciada');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert('sesion no iniciada');
    });
}
