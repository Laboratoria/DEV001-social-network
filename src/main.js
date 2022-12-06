// Este es el punto de entrada de tu aplicacion (aqui va la lógica de lo que se imprime en pantalla)
import { welcome } from './components/welcome.js';
import { login } from './components/login.js';
import { signin } from './components/signin.js';
import { feed } from './components/feed.js';

const root = document.getElementById('root');

let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]);
};
routes = {
  '/': welcome(onNavigate),
  '/login': login(onNavigate),
  '/signin': signin(onNavigate),
  '/feed': feed(onNavigate),
};

const components = () => routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components());
};

root.appendChild(components());
