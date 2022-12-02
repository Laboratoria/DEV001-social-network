/* import { onNavigate } from '../main.js'; */
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export const login = (onNavigate) => {
  const hdiv = document.createElement('div');
  const tittle = document.createElement('h2');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const btn = document.createElement('button');
  const btnBack = document.createElement('button');

  btn.textContent = 'Log in';
  btnBack.textContent = 'Back';
  tittle.textContent = 'Welcome!';
  btn.addEventListener('click', () => {
    /*     onNavigate('/'); */
    const userEmail = inputEmail.value;
    const userPass = inputPass.value;
    createUserWithEmailAndPassword(auth, userEmail, userPass)
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
  });
  btnBack.addEventListener('click', () => {
    onNavigate('/');
  });

  hdiv.append(tittle, inputEmail, inputPass, btn, btnBack);

  return hdiv;
};