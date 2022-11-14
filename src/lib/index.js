import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase.js';

// GETUTH
const auth = getAuth(app);
export function formularioregistro(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;

      return errorMessage;
    });
}

export function formulariologin(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      const errorMessage = error.message;

      return errorMessage;
    });
}
