import { Home } from './componentes/Home';
import { Register } from './componentes/Register';
import { Wall } from './componentes/Wall';
import { goTo } from './lib/routes';

const routes = {
  '/': Home,
  '/register': Register,
  '/wall': Wall,
};
export const rootDiv = document.getElementById('root');
export const changeHash = (hash) => {
  window.location.hash = hash;
};

// Esta es creado para asegurar que se muestre una ruta existente en el objeto "routes"
let path = window.location.pathname;
/*if (routes[path] === undefined) {
  path = '/404';
  goTo(path); */
// }
export const rutas = routes[path](rootDiv, changeHash);
// Se ejecuta cuando la ruta se cambia
window.addEventListener('hashchange', () => {
  let path = window.location.pathname;
  if (routes[path] === undefined) {
    path = '/';
    goTo(path);
  } else {
    routes[path](rootDiv, changeHash);
  }
}, false);
