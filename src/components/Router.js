import { Home } from './Home.js';
import { Register } from './Register.js';
import { Login } from './Login.js';

export const Router = () => {
  const rootDiv = document.getElementById('root');
  console.log(rootDiv);

  const hash = location.hash;
  rootDiv.innerHTML = null;
  if (!hash || hash === '#') {
    rootDiv.appendChild(Home());
  } else if (hash === '#Register') {
    rootDiv.appendChild(Register());
  } else if (hash === '#Login') {
    rootDiv.appendChild(Login());
  }
};
