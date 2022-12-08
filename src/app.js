import { Home } from './componentes/Home';
import { Login } from './componentes/Login';
import { Register } from './componentes/Register';
import { Wall } from './componentes/Wall';

const routes = {
  '/': Home,
  '/login': Login,
  '/register': Register,
  '/wall': Wall,
};

export const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname]();
