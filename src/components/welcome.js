/* import { onNavigate } from '../main.js'; */

export const welcome = (onNavigate) => {
    const div = document.createElement('div');
    const tittle = document.createElement('h2');
    const btnLogin = document.createElement('button');
    const btnRegister = document.createElement('button');
  
    btnLogin.textContent = 'Log in';
    btnRegister.textContent = 'Register';
    tittle.textContent = 'Welcome to the place where all the dreams come true!';
  
    btnLogin.addEventListener('click', () => {
      onNavigate('/login');
    });
    div.append(tittle, btnLogin, btnRegister);
  
    return div;
  };