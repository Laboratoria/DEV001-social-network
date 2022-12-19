import {
  signInWithEmailAndPassword,
  AuthErrorCodes,
} from 'firebase/auth';
// import { GoogleAuthProvider } from “firebase/auth”;
// eslint-disable-next-line import/no-cycle
import {
  auth,
} from './firebase';
import { goTo } from './routes';
// eslint-disable-next-line max-len
// exportando función de login
export const login = (email, password, changeHashFn) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    console.log('SESION INICIADA');
    goTo('/wall');
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
        alert('Contraseña Incorrecta');
      } else if (error.code === AuthErrorCodes.USER_DELETED) {
        alert('Usuario Inválido');
      } else {
        alert('El E-mail o contraseña son incorrectos');
      }
    });
};
