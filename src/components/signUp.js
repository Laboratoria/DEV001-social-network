/* import { onNavigate } from '../main.js'; */
import {
  createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider,
} from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const signUp = (onNavigate) => {
  const hdiv = document.createElement('div');
  const title = document.createElement('h2');
  const userName = document.createElement('input');

  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btnSignUp = document.createElement('button');
  const btnBack2 = document.createElement('button');
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  hdiv.className = 'hdivSignUp';
  inputEmail.placeholder = 'example@youremail.com';
  inputEmail.type = 'email';
  inputEmail.required = 'true';

  inputEmail.className = 'inputSignUp';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  btnSignUp.className = 'btnSignIn';
  btnBack2.className = 'btnBack2';
  btnGoogle.className = 'btnGoogle';
  btnSignUp.textContent = 'Sign Up';
  btnBack2.textContent = 'Back';
  title.textContent = 'Welcome!';
  title.className = 'title';
  btnGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Sign Up with Google';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';
  logo.className = 'logo';
  userName.type = 'text';
  userName.placeholder = 'Your Name';

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
      // onNavigate('/signUp');
    }
    if (userPass === '') {
      alert('Please insert your password');
    } else {
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

  hdiv.append(title, logo, userName, inputEmail, inputPass, btnSignUp, btnBack2, btnGoogle);

  return hdiv;
};
