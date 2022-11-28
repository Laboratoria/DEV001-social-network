import { Router } from './components/Router.js';

const rootDiv = document.getElementById('root');

window.onpopstate = () => {
  rootDiv.innerHTML = '';
  rootDiv.innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', Router);
window.addEventListener('hashchange', Router);
