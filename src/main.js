// Este es el punto de entrada de tu aplicacion
import { Home } from "./componente/home.js";
import { registrate } from "./componente/registro.js";
// import { muro } from "./componente/muro.js";

const divRoot = document.getElementById("root");

const routes = {
  '/': Home,
  '/registro': registrate,
  // '/muro': muro,
};

// export const onNavigate = (pathname) => {
//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname,
//   );
//   divRoot.appendChild(routes[pathname]());
// };

const component = routes[window.location.pathname];

divRoot.appendChild(component());
