import { onNavigate } from '../../main';

// export const register = () => {
//   const homeDiv = document.createElement('div');
//   homeDiv.textContent('Bienvenida al registro');
//   const buttonHome = document.createElement('button');
//   buttonHome.textContent = 'Regresar';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   homeDiv.appendChild(buttonHome);

//   return homeDiv;
// };

export const register = () => {
  const homeDiv = document.createElement('div');
  const buttonHome = document.createElement('button');

  homeDiv.textContent = 'Bienvenida al registro';
  buttonHome.textContent = 'Regresar';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  homeDiv.appendChild(buttonHome);

  return homeDiv;
};