import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './Firebase.js';
import { Begin } from '../component/Begin.js';

// GETUTH
const auth = getAuth(app);
export function formularioregistro(name, email, password) {
  return createUserWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Begin(user);

      return '/Begin';
    })
    .catch((error) => {
      const errorMessage = error.message;

      Begin(errorMessage);
    });
}

export function formulariologin(name, email, password) {
  return signInWithEmailAndPassword(auth, name, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Begin(user);
      return '/Begin';
    })
    .catch((error) => {
      const errorMessage = error.message;

      Begin(errorMessage);
    });
}
