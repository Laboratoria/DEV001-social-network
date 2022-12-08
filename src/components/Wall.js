import { signOut } from 'firebase/auth';
import { auth } from '../lib/index.js';

export const Wall = (onNavigate) => {
  const wallDiv = document.createElement('div');

  const textoWall = document.createElement('h2');
  textoWall.textContent = 'estamos en el muro';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  const buttonLogout = document.createElement('button');
  buttonLogout.textContent = 'cerrar sesión';
  buttonLogout.addEventListener('click', async () => {
    await signOut(auth);
    // console.log('funciona!');
    onNavigate('/');
  });

  wallDiv.append(textoWall, buttonHome, buttonLogout);
  return wallDiv;
};
