// import { onNavigate } from '../main.js';

export const Home = () => {
 const div = document.createElement('div');
  const textoAlto = document.createElement('h1');
  const textoBajo = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  textoAlto.textContent = 'Te damos la bienvenida a Semillero';
  textoBajo.textContent = 'aquí pondremos una descripción de la app';
  buttonLogin.textContent = 'Inicia Sesión';
  buttonRegister.textContent = 'Registrate';

  // buttonLogin.addEventListener('click', () => {
  //   onNavigate('/login'); 
  // });

  // buttonRegister.addEventListener('click', () => {
  //   onNavigate('/register');
  // });

  div.append(textoAlto, textoBajo, buttonLogin, buttonRegister);

  return div;
};
