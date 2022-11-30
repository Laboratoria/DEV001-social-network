import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';

const rootDiv = document.getElementById('root');
// cambios
let routes = {};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname]());
};
// cambios
routes = {
  '/': Home(onNavigate),
  '/register': Register(onNavigate),
  '/login': Login(onNavigate),
};

const components = () => routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(components());
};

rootDiv.appendChild(components());
