import { auth } from './lib/firebase.js';
import { Router } from './componente/Router.js';

console.log(auth);

const divRoot = document.getElementById('root');

window.onpopstate = () => {
  divRoot.innerHTML = '';
  divRoot.innerHTML = Router();
};

window.addEventListener('DOMContentLoaded', Router);

window.addEventListener('hashchange', Router);

// const email = document.getElementById("email").value;
// const name = document.getElementById("name").value;
// const userName = document.getElementById("userName").value;
// const password = document.getElementById("password").value;
// const repetPassword = document.getElementById("repetPaswword").value;
