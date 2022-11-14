// Este es el punto de entrada de tu aplicacion

import "./lib/Archivos JS/firebase.js";

// eslint-disable-next-line import/no-cycle
import { home } from './lib/Archivos JS/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './lib/Archivos JS/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './lib/Archivos JS/login.js';
// eslint-disable-next-line import/no-cycle
import { profile } from './lib/Archivos JS/profile.js';
import { landingPage } from './lib/Archivos JS/landingPage.js';

const rootDiv = document.getElementById("root");

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/profile': profile,
  '/landingPage': landingPage,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
