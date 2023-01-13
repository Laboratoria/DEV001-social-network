/* import { onNavigate } from '../main.js'; */

export const welcome = (onNavigate) => {
  const divWelcome = document.createElement('div');
  const divTitle = document.createElement('div');
  const title = document.createElement('p');
  const btnSignIn = document.createElement('button');
  const btnSignUp = document.createElement('button');
  const logo = document.createElement('img');

  divWelcome.className = 'divWelcome';
  logo.src = 'https://raw.githubusercontent.com/Marlizethm/festifan-DEV001-social-network14/main/src/lib/archivo_css/Imagenes/Logo.png';
  logo.className = 'logo';
  divTitle.className = 'divTitleW';
  title.textContent = 'Welcome to the place where all the dreams come true!';
  title.className = 'introText';
  btnSignIn.textContent = 'Sign In';
  btnSignIn.className = 'btnSignIn';
  btnSignUp.textContent = 'Sign Up';
  btnSignUp.className = 'btnSignUp';

  /* Botón que lleva al ingreso de usuarios */
  btnSignIn.addEventListener('click', () => {
    onNavigate('/signIn');
  });

  /* Botón que lleva al registro de usuarios */
  btnSignUp.addEventListener('click', () => {
    onNavigate('/signUp');
  });

  /* Función "append" para añadir nodos a html */
  divTitle.append(title);
  divWelcome.append(logo, title, btnSignIn, btnSignUp, divTitle);

  return divWelcome;
};
