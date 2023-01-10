/* eslint-disable no-alert */
/* eslint-disable no-console */
import { functionSignUp, functionUserGoogle } from '../lib/index';

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
  logo.src = 'https://raw.githubusercontent.com/Marlizethm/festifan-DEV001-social-network14/main/src/lib/archivo_css/Imagenes/Logo.png';
  logo.className = 'logo';
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
  btnSignUp.className = 'btnSignUp';
  btnBack2.textContent = 'Back';
  btnBack2.className = 'btnBack';
  o.textContent = 'or';
  o.className = 'introSignUp';
  btnGoogle.className = 'btnGoogle';
  btnGoogle.innerHTML = '<img class="img-google" src="https://raw.githubusercontent.com/Marlizethm/festifan-DEV001-social-network14/main/src/lib/archivo_css/Imagenes/SocialGoogle.png" /> Sign Up with Google';

  /* Evento para crear cuenta */
  btnSignUp.addEventListener('click', async () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    const name = userName.value;
    const result = await functionSignUp(name, email, password);
    if (result === 'auth/email-already-in-use') {
      alert('This email is already in use');
    } else if (result === 'auth/invalid-email') {
      alert('Invalid email');
    } else if (result === 'auth/weak-password') {
      alert('the password must have at least six characters');
    } else if (typeof result === 'object') {
      const user = result.user;
      console.log(user);
      onNavigate('/feed');
    } else {
      alert('Please complete information');
    }

  /*   if (name === '') {
      alert('Please insert your name');
    }
    if (email === '') {
      alert('Please insert your email');
    }
    if (password === '') {
      alert('Please insert your password');
    } else if (name !== '' && email !== '' && password !== '') {

    } */
  });

  btnGoogle.addEventListener('click', async () => {
    const resultGoogle = await functionUserGoogle();
    if (resultGoogle !== 'error') {
      onNavigate('/feed');
    }
  });

  btnBack2.addEventListener('click', () => {
    onNavigate('/');
  });

  divSignUp.append(logo, title, userName, inputEmail, inputPass, btnSignUp, btnBack2, o, btnGoogle);

  return divSignUp;
};
