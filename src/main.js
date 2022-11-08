// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import './lib/Archivos JS/firebase.js';
// eslint-disable-next-line import/no-cycle
import { home } from './lib/Archivos JS/home.js';
import { register } from './lib/Archivos JS/register.js';
import { login } from './lib/Archivos JS/login.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]);
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());
