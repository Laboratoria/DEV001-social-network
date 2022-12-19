import { Home } from './componentes/Home';
import { Register } from './componentes/Register';
import { Wall } from './componentes/Wall';
import { NotFound } from './componentes/404';
import { goTo } from './App/routes';
import { Post } from './componentes/Post';

const routes = {
  '/home': Home,
  '/register': Register,
  '/wall': Wall,
  '/post': Post,
  '/404': NotFound,
};
export const rootDiv = document.getElementById('root');
export const changeHash = (hash) => {
  window.location.hash = hash;
};
// Esta es creado para asegurar que se muestre una ruta existente en el objeto "routes"
let path = window.location.pathname;
if (routes[path] === undefined) {
  path = '/404';
  goTo(path);
}

export const rutas = routes[path](rootDiv, changeHash);
// Se ejecuta cuando la ruta se cambia
window.addEventListener('hashchange', () => {
  let path = window.location.pathname;
  if (routes[path] === undefined) {
    path = '/404';
    goTo(path);
  } else {
    routes[path](rootDiv, changeHash);
  }
}, false);
/*
function changePart() {
  location.hash = 'routes';
  const x = location.hash;
}
window.onhashchange = myFunction;
function myFunction() {
  alert('The anchor part has changed!');
}
*/
