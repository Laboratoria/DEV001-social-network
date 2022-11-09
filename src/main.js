import { Home } from './component/Home.js';
import { Register } from './component/Register.js';
import { Login } from './component/Login.js';

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
  rootDiv.appendChild(routes[pathname]);
};
routes = {
  '/': Home(onNavigate),
  '/register': Register(onNavigate),
  '/login': Login(onNavigate),

};

const component = () => routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};
rootDiv.appendChild(component());
