/* import { onNavigate } from '../main.js'; */

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
    onNavigate('/');
  });
  btnBack.addEventListener('click', () => {
    onNavigate('/');
  });

  hdiv.append(tittle, inputEmail, inputPass, btn, btnBack);

  return hdiv;
};
