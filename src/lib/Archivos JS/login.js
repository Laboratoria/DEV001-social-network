import { onNavigate } from '../../main';

// export const login = () => {
//   const homeDiv = document.createElement('div');
//   const buttonHome = document.createElement('button');
//   buttonHome.textContent = 'Regresar al Inicio';
//   homeDiv.textContent = 'Bienvenida al inicio de sesión';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   homeDiv.appendChild(buttonHome);

//   return homeDiv;
// };

export const login = () => {
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDiv.textContent = 'Bienvenida al inicio de sesión';
  buttonHome.textContent = 'Regresar';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};