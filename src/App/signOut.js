import {  } from "firebase/auth";
//import { cerrarSesion } from "./firebase";


// CERRAR SESIÓN
/*const btnCerrarSesion = contenedorW.querySelector('#btnCerrarS');
btnCerrarSesion.addEventListener('click', () => {
    alert('HolaA')
}     /*cerrarS(auth)
        .then(() => {
            alert('Adiós! Vuelva Pronto!')
            goTo('/');
          
          // Sign-out successful.
        })
        .catch((error) => {
          // eslint-disable-next-line no-unused-vars
          const errorCode = error.code;
          // eslint-disable-next-line no-unused-vars
          const errorMessage = error.message;
          // eslint-disable-next-line no-unused-expressions
          errorCode || errorMessage ? alert('there is a problem, try again') : false;
        });*/
        const cerrarSesion = () => {
            const btnC = document.getElementById('btnCerrarS');
            btnC.addEventListener('click', () => {
              alert('Hola')
          };