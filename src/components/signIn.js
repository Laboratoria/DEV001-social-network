/* import { onNavigate } from '../main.js'; */
import {
  signInWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const signIn = (onNavigate) => {
  const divSignIn = document.createElement('div');
  const title = document.createElement('p');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btn = document.createElement('button');
  const btnBack = document.createElement('button');
  const or = document.createElement('p')
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  divSignIn.className = 'divSignIn';
  title.textContent = 'Welcome to your account';
  title.className = 'introSignIn';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';
  inputEmail.placeholder = 'example@youremail.com';
  inputEmail.type = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'inputSignIn';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  inputPass.className = 'inputSignIn';
  btn.className = 'btnSignIn';
  btn.textContent = 'Sign In';
  btnBack.className = 'btnBack';
  btnBack.textContent = 'Back';
  or.textContent = 'or';
  or.className = 'introSignIn';
  btnGoogle.className = 'btnGoogle';
  btnGoogle.innerHTML = '<img class="img-google" src="./lib/archivo_css/Imagenes/SocialGoogle.png" /> Sign in with Google';

  btn.addEventListener('click', async () => {
    /*     onNavigate('/'); */
    const userEmail = inputEmail.value;
    const userPass = inputPass.value;

    if (userEmail === '') {
      alert('Please insert your email');
    }
    if (userPass === '') {
      alert('Please insert your password');
    } else if (userEmail !== '' && userPass !== '') {
      signInWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          console.log(user);
          onNavigate('/feed');
        // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          /*  const errorMessage = error.message; */
          if (errorCode.includes('auth/user-not-found')) {
            alert('This email is not registered');
          }
          if (errorCode.includes('auth/wrong-password')) {
            alert('Wrong password');
          }
          if (errorCode) {
            alert('There is something wrong, please check again');
          }
        });
      /*     if (result !== 'error') {
      onNavigate('/feed');
    } */
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

  divSignIn.append(logo, title, inputEmail, inputPass, btn, btnBack, or, btnGoogle);

  return divSignIn;
};
