// eslint-disable-next-line import/no-cycle
// import { Home } from './component/Home.js';
// eslint-disable-next-line import/no-cycle
// import { Register } from './component/Register.js';
// eslint-disable-next-line import/no-cycle
// import { Login } from './component/Login.js';

// const rootDiv = document.getElementById('root');

// const routes = {
// '/': Home,
// '/register': Register,
// '/login': Login,
// };
// export const onNavigate = (pathname) => {
    let routes = {};
    const  onNavigate = (pathname) => {
        window.history.pushState(
            {},
            pathname, 
            rootDiv.removeChild(rootDiv.firstChild);
rootDiv.appendChild(routes[pathname]);

};

routes = {
'/': Home(onNavigate), 
'/register': Register(onNavigate) ,
'/login': Login(onNavigate),

};

 // window.history.pushState(
  //  {},
  //  pathname,
//window.location.origin + pathname,
  //);
  //while (rootDiv.firstChild) {
   // rootDiv.removeChild(rootDiv.firstChild);
 // }

 // rootDiv.appendChild(routes[pathname]());
//};
const component = routes[window.location.pathname];

window.onpopstate = () => {

  while (rootDiv.firstChild) {
  rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

rootDiv.appendChild(component());
