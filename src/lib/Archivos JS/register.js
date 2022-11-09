// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Regístrate';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al home';
  
  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
