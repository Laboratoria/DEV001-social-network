/* import { onNavigate } from '../main.js'; */
import { createUserWithEmailAndPassword, getAuth, signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const signin = (onNavigate) => {
  const hdiv = document.createElement('div');
  const title = document.createElement('h2');
  const userName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btnSignIn = document.createElement('button');
  const btnBack2 = document.createElement('button');
  const btnGoogle = document.createElement('button');
  const logo = document.createElement('img');

  hdiv.className = 'hdiv';
  inputEmail.placeholder = 'example@youremail.com';
  inputEmail.type = 'email';
  inputEmail.required = 'true';
  inputPass.placeholder = '*******';
  inputPass.type = 'password';
  inputPass.required = 'true';
  btnSignIn.className = 'btnSingIn';
  btnBack2.className = 'btnBack2';
  btnGoogle.className = 'btnGoogle';
  btnSignIn.textContent = 'Log in';
  btnBack2.textContent = 'Back';
  title.textContent = 'Welcome!';
  title.className = 'title';
  btnGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Login with Google';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';
  userName.type = 'text';
  userName.placeholder = 'Your Name';

  btnSignIn.addEventListener('click', async () => {
    /*     onNavigate('/'); */
    const userEmail = inputEmail.value;
    const userPass = inputPass.value;
    const result = createUserWithEmailAndPassword(auth, userEmail, userPass)
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
    const authGoogle = getAuth();
    const result = signInWithRedirect(authGoogle, provider);
    if (result !== 'error') {
      onNavigate('/feed');
    }
  });

  btnBack2.addEventListener('click', () => {
    onNavigate('/');
  });

  hdiv.append(title, logo, userName, inputEmail, inputPass, btnSignIn, btnBack2, btnGoogle);

  return hdiv;
};
