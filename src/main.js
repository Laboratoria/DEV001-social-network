import { home } from './componentes/home.js';
import { register } from './componentes/register.js';
import { login } from './componentes/login.js';

const rootDiv = document.getElementById('root');

let routes = {};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

routes = {
  '/': home(onNavigate),
  '/register': register(onNavigate),
  '/login': login(onNavigate),
};

const component = () => routes[window.location.pathname];
rootDiv.appendChild(component());
