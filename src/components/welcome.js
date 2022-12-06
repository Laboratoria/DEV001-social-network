/* import { onNavigate } from '../main.js'; */

export const welcome = (onNavigate) => {
  const divWelcome = document.createElement('div');
  const title = document.createElement('h2');
  const btnLogin = document.createElement('button');
  const btnRegister = document.createElement('button');
  const logo = document.createElement('img');

  btnLogin.className = 'btnLogin';
  btnRegister.className = 'btnRegister';
  title.className = 'title';
  divWelcome.className = 'divWelcome';
  btnLogin.textContent = 'Log in';
  btnRegister.textContent = 'Sign In';
  title.textContent = 'Welcome to the place where all the dreams come true!';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';

  btnLogin.addEventListener('click', () => {
    onNavigate('/login');
  /*    alert('hola'); */
  });

  btnRegister.addEventListener('click', () => {
    onNavigate('/signin');
  });

  divWelcome.append(logo, title, btnLogin, btnRegister);

  return divWelcome;
};
