// Este es el punto de entrada de tu aplicacion
import { Home } from "./componente/home.js";
import { registrate } from "./componente/registro.js";

const divRoot = document.getElementById("root");

const routes = {
  '/': Home,
  '/registro': registrate,
};
const component = routes[window.location.pathname];

divRoot.appendChild(component());
