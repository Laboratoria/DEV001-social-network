//import { onNavigate } from "../main.js";

export const Muro = () => {
  const muroDiv = document.createElement('div');
  const buttonCerrar = document.createElement('button');

  buttonCerrar.textContent = 'Cerrar sesión';

//buttonCerrar.addEventListener('click', () => onNavigate('/'));

  muroDiv.appendChild(buttonCerrar);

  return muroDiv;
};