// Este es el punto de entrada de tu aplicacion

import './lib/Archivos JS/firebase.js';

// eslint-disable-next-line import/no-cycle
import { home } from './lib/Archivos JS/home.js';
// eslint-disable-next-line import/no-cycle
import { register } from './lib/Archivos JS/register.js';
// eslint-disable-next-line import/no-cycle
import { login } from './lib/Archivos JS/login.js';
// eslint-disable-next-line import/no-cycle
import { profile } from './lib/Archivos JS/profile.js';
// eslint-disable-next-line import/no-cycle
import { landingPage } from './lib/Archivos JS/landingPage.js';
// eslint-disable-next-line import/no-cycle
import { editProfile } from './lib/Archivos JS/editProfile.js';
// eslint-disable-next-line import/no-cycle
import { contact } from './lib/Archivos JS/contact.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/profile': profile,
  '/editProfile': editProfile,
  '/landingPage': landingPage,
  '/contact': contact,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  const rootDiv1 = document.getElementById('root');

  while (rootDiv1.firstChild) {
    rootDiv1.removeChild(rootDiv1.firstChild);
  }

  rootDiv1.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

if (rootDiv) {
  rootDiv.appendChild(component());
}

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
