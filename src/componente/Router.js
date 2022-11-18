import { Home } from './home.js';
import { Register } from './register.js';
//import { Muro } from './muro.js';

export const Router = () => {
  const divRoot = document.getElementById('root');
  console.log(divRoot);
  const hash = location.hash;
  divRoot.innerHTML = null;
  if (!hash || hash === '#') {
    divRoot.appendChild(Home());
  } else if (hash === '#Register') {
    divRoot.appendChild(Register());
  }
};
