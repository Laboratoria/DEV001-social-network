import { onNavigate } from '../main.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Inicia Sesión';
  buttonRegister.textContent = 'Registrate';
  title.textContent = 'Somos la mejor RED social del mundo mundial jaja muahaha';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  homeDiv.append(title, buttonLogin, buttonRegister);

  return homeDiv;
};