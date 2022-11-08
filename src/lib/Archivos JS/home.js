// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

export const home = () => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');

  buttonRegister.textContent = 'Registrarme';
  buttonLogin.textContent = 'Iniciar sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonLogin);

  return homeDiv;
};
