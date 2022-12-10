// Este es el punto de entrada de tu aplicacion (aqui va la lógica de lo que se imprime en pantalla)
import { welcome } from './components/welcome.js';
// eslint-disable-next-line import/named
import { signIn } from './components/signIn.js';
import { signUp } from './components/signUp.js';
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
  '/signIn': signIn(onNavigate),
  '/signUp': signUp(onNavigate),
  '/feed': feed(onNavigate),
};

const components = () => routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(components());
};

root.appendChild(components());
