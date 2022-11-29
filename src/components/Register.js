import { onNavigate } from '../main.js';

export const Register = () => {
  const homeDiv = document.createElement('div');

  const textoRegister = document.createElement('h2');
  textoRegister.textContent = 'estamos en register';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';

  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  homeDiv.append(textoRegister, buttonHome);
  return homeDiv;
};
