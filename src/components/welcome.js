/* import { onNavigate } from '../main.js'; */

export const welcome = (onNavigate) => {
  const divWelcome = document.createElement('div');
  const divTitle = document.createElement('div');
  const title = document.createElement('h2');
  const btnSignIn = document.createElement('button');
  const btnSignUp = document.createElement('button');
  const logo = document.createElement('img');

  btnSignIn.className = 'btnSignIn';
  btnSignUp.className = 'btnSignUp';
  title.className = 'titleWelcome';
  divWelcome.className = 'divWelcome';
  divTitle.className ='divTitleW';
  logo.className = 'logo';
  btnSignIn.textContent = 'Sign In';
  btnSignUp.textContent = 'Sign Up';
  title.textContent = 'Welcome to the place where all the dreams come true!';
  logo.src = './lib/archivo_css/Imagenes/Logo.png';

  btnSignIn.addEventListener('click', () => {
    onNavigate('/signIn');
  /*    alert('hola'); */
  });

  btnSignUp.addEventListener('click', () => {
    onNavigate('/signUp');
  });

  divTitle.append(title);
  divWelcome.append(logo, title, btnSignIn, btnSignUp, divTitle);

  return divWelcome;
};
