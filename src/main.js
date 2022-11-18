import { Router } from './componente/Router.js';

const divRoot = document.getElementById('root');

window.onpopstate = () => {
  divRoot.innerHTML = '';
  divRoot.innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', Router);

window.addEventListener('hashchange', Router);
