import { logOut } from '../lib/Auth';

export const Wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wall';

  const textoWall = document.createElement('h2');
  textoWall.textContent = 'estamos en el muro';

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'volver al inicio';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  const buttonLogout = document.createElement('button');
  buttonLogout.textContent = 'cerrar sesión';
  buttonLogout.addEventListener('click', () => {
    logOut();
    onNavigate('/');
  });

  const menu = document.createElement('div');
  menu.className = 'menuWall';

  const comentSpace = document.createElement('div');
  comentSpace.className = 'comentSpace';

  wallDiv.append(menu, textoWall, comentSpace);
  menu.append(buttonHome, buttonLogout);

  return wallDiv;
};
