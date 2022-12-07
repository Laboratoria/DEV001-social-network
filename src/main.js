// Este es el punto de entrada de tu aplicacion
import { Home } from './lib/Home.js';
import { Register } from './lib/Register.js';
import { Login } from './lib/Login.js';

const rootDiv = document.getElementById('root');
let routes = {};



const onNavigate = (pathname) => {
    window.history.pushState(

        {}, //estado vacío
        pathname, //asignamos título
        window.location.origin + pathname, //asignamos la ruta
    );


    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    }; //Mientras que exista un nodo hijo en nuestro root, se borra el primer hijo

    rootDiv.appendChild(routes[pathname]); //Inserta el html a nuestro nodo que corresponde al path
};

//Aquí se le asigna el nombre después del /
routes = {
    '/': Home(onNavigate),
    '/register': Register(onNavigate),
    '/login': Login(onNavigate),
};



const component = () => routes[window.location.pathname];

window.onpopstate = () => {
    rootDiv.appendChild(component());
};

rootDiv.appendChild(component());