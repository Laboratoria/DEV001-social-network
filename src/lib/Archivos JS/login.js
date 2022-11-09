// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const login = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Iniciar Sesión';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar al Home';


  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
