// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al Login';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al home';
  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);
  return HomeDiv;
};
