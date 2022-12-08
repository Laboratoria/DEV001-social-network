import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Wall } from './components/Wall.js';

const rootDiv = document.getElementById('root');
let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.appendChild(routes[pathname]);
};

routes = {
  '/': Home(onNavigate),
  '/register': Register(onNavigate),
  '/login': Login(onNavigate),
  '/wall': Wall(onNavigate),
};

const components = () => routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.removeChild(rootDiv.firstChild);
  rootDiv.append(components());
};

rootDiv.appendChild(components());
