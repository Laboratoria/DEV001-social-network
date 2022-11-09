// eslint-disable-next-line import/named
import { Home } from '../component/Home.js';
// eslint-disable-next-line import/named
import { Register } from '../component/Login.js';
// eslint-disable-next-line import/named
import { Login } from '../component/Register.js';

export const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
};
