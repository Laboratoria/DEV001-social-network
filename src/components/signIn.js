/* import { onNavigate } from '../main.js'; */
import {
  signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const signIn = (onNavigate) => {
  const hdiv = document.createElement('div');
  const title = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btn = document.createElement('button');
  const btnBack = document.createElement('button');
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  hdiv.className = 'hdiv';
  inputEmail.placeholder = 'example@youremail.com';
  inputEmail.type = 'email';
  inputEmail.required = 'true';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  hdiv.className = 'hdivSignIn';
  btn.className = 'btnSignIn';
  btnBack.className = 'btnBack';
  btnGoogle.className = 'btnGoogle';
  btn.textContent = 'Sign In';
  btnBack.textContent = 'Back';
  title.textContent = 'Welcome!';
  title.className = 'title';
  btnGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Sign In with Google';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';

  btn.addEventListener('click', async () => {
    /*     onNavigate('/'); */
    const userEmail = inputEmail.value;
    const userPass = inputPass.value;
    const result = signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    if (result !== 'error') {
      onNavigate('/feed');
    }
  });

  btnGoogle.addEventListener('click', () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        onNavigate('/feed');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });
  btnBack.addEventListener('click', () => {
    onNavigate('/');
  });

  hdiv.append(title, logo, inputEmail, inputPass, btn, btnBack, btnGoogle);

  return hdiv;
};
