import { Home } from './componentes/Home';
import { Register } from './componentes/Register';
import { goTo } from './App/routes';
import { NotFound } from './componentes/404';
import { Wall } from './componentes/Wall';
import { Post } from './componentes/Post';

const routes = {
  '/': Home,
  '/register': Register,
  '/404': NotFound,
  '/post': Post,
  '/wall': Wall,
};

export const rootDiv = document.getElementById('root');

export const changeHash = (hash) => {
  window.location.hash = hash;
};
// Esta es creado para asegurar que se muestre una ruta existente en el objeto "routes"
const path = window.location.pathname;
/* if (routes[path] === undefined) {
  path = '/404';
  goTo(path); */
// }
goTo(path);
// Se ejecuta cuando la ruta se cambia
window.addEventListener('hashchange', () => {
  // aqui se chequea si la ruta existe o no
  let path = window.location.pathname;
  if (routes[path] === undefined) {
    path = '/404';
    goTo(path);
  } else {
    routes[path](rootDiv, changeHash);
  }
}, false);