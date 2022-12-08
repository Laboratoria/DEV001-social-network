/* import { onNavigate } from '../main.js'; */
import { signInWithEmailAndPassword, getAuth, signInWithRedirect } from 'firebase/auth';
import { auth, provider } from '../lib/firebase';

export const login = (onNavigate) => {
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
  hdiv.className = 'hdivLogin';
  btn.className = 'btnLogin';
  btnBack.className = 'btnBack';
  btnGoogle.className = 'btnGoogle';
  btn.textContent = 'Log in';
  btnBack.textContent = 'Back';
  title.textContent = 'Welcome!';
  title.className = 'title';
  btnGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Login with Google';
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
    const authGoogle = getAuth();
    const result = signInWithRedirect(authGoogle, provider);
    if (result !== 'error') {
      onNavigate('/feed');
    }
  });

  btnBack.addEventListener('click', () => {
    onNavigate('/');
  });

  hdiv.append(title, logo, inputEmail, inputPass, btn, btnBack, btnGoogle);

  return hdiv;
};
