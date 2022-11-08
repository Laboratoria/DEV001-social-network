// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const divLogo = document.createElement('div');
  divLogo.className = 'logo';
  HomeDiv.appendChild(divLogo);
  const letraLogo = document.createElement('h1');
  letraLogo.className = 'letraLogo';
  letraLogo.textContent = 'Lymusic';
  divLogo.appendChild(letraLogo);
  buttonRegister.textContent = 'Registrate';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  HomeDiv.appendChild(buttonRegister);
  HomeDiv.appendChild(buttonLogin);
  return HomeDiv;
};
