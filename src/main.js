// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import './lib/Archivos JS/firebase.js';
import { home } from './lib/Archivos JS/home.js';

const routes = {
  '/': home,
  '/register': Register,
  '/login': Login,
};
