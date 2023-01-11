import {
  signInWithEmailAndPassword,
  AuthErrorCodes,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// import { GoogleAuthProvider } from “firebase/auth”;
// eslint-disable-next-line import/no-cycle
import {
  auth,
} from './firebase';
import {
  goTo,
} from './routes';
// exportando función de login
// const auth = getAuth();
export const login = (email, password, changeHashFn) => {
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    goTo('/wall');
    console.log(user);
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

// Login Con Google
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      goTo('/wall');
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      alert('El email ingresado ya se encuentra registrado');
      const email = error.customData.email;
      // The AuthCredential type that was used.
      alert('El email ingresado ya se encuentra registrado');
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
