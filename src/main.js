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
// eslint-disable-next-line import/no-cycle
import { aboutTheApp } from './lib/Archivos JS/aboutTheApp.js';
// eslint-disable-next-line import/no-cycle
import { categoryPost } from './lib/Archivos JS/categoryPost.js';

// const rootDiv = document.getElementById('root');

/* export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
}; */

const routes = {
  '/': home,
  '/login': login,
  '/register': register,
  '/profile': profile,
  '/editProfile': editProfile,
  '/landingPage': landingPage,
  '/contact': contact,
  '/aboutTheApp': aboutTheApp,
  '/categoryPost': categoryPost,
};

// función para anexar un registro al historial del navegador (.pushState)
export const onNavigate = (pathname, routesList = routes) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  if (rootDiv !== null) {
    rootDiv.replaceChildren(routesList[pathname]());
  }
};

export const getPath = (path) => {
  const publicUrlPath = /DEV001-social-network-24-7(.*)/;
  const match = (publicUrlPath).exec(path);
  // in preview mode, we are in prod build, but previewing locally so url is localhost
  return (import.meta.env.PROD && match && match.length === 2) ? match[1] : path; //eslint-disable-line
}

// onpopstate, se dispara realizando una acción en el navegador como volver
window.onpopstate = () => {
  onNavigate(getPath(window.location.pathname));
};
window.addEventListener('load', () => onNavigate(getPath(window.location.pathname)));
