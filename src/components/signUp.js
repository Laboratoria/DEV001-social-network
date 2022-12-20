/* import { onNavigate } from '../main.js'; */
import {
  createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const signUp = (onNavigate) => {
  const divSignUp = document.createElement('div');
  const title = document.createElement('p');
  const userName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btnSignUp = document.createElement('button');
  const btnBack2 = document.createElement('button');
  const o = document.createElement('p');
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  divSignUp.className = 'divSignUp';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';
  title.textContent = 'Create your account';
  title.className = 'introSignUp';
  inputEmail.placeholder = 'example@youremail.com';
  userName.type = 'text';
  userName.placeholder = 'Your Name';
  userName.className = 'inputSignUp';
  inputEmail.type = 'email';
  inputEmail.required = 'true';
  inputEmail.className = 'inputSignUp';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  inputPass.className = 'inputSignUp';
  btnSignUp.textContent = 'Sign Up';
  btnSignUp.className = 'btnSignIn';
  btnBack2.textContent = 'Back';
  btnBack2.className = 'btnBack';
  o.textContent = 'or';
  o.className = 'introSignUp';
  btnGoogle.className = 'btnGoogle';
  btnGoogle.innerHTML = '<img class="img-google" src="./lib/archivo_css/Imagenes/SocialGoogle.png" /> Sign Up with Google';

  /* Evento para crear cuenta */
  btnSignUp.addEventListener('click', async () => {
    /*     onNavigate('/'); */
    const userEmail = inputEmail.value;
    const userPass = inputPass.value;
    const name = userName.value;

    if (name === '') {
      alert('Please insert your name');
    }
    if (userEmail === '') {
      alert('Please insert your email');
    }
    if (userPass === '') {
      alert('Please insert your password');
    } else if (name !== '' && userEmail !== '' && userPass !== '') {
      createUserWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          console.log(user);
          onNavigate('/feed');
        // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          if (errorCode.includes('auth/email-already-in-use')) {
            alert('This email is already in use');
          }
          if (errorCode.includes('auth/invalid-email')) {
            alert('Invalid email');
          }
          if (errorCode.includes('auth/weak-password')) {
            alert('the password must have at least six characters');
          }
          // // else if (errorCode) {
          // //   alert('There is something wrong, please check again');
          // }
        });
    // if (result !== 'error') {
    //   onNavigate('/feed');
    // }
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

  btnBack2.addEventListener('click', () => {
    onNavigate('/');
  });

  divSignUp.append(logo, title, userName, inputEmail, inputPass, btnSignUp, btnBack2, o, btnGoogle);

  return divSignUp;
};
