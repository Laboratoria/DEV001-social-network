// import { onNavigate } from '../main.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  const textoAlto = document.createElement('h1');
  const textoBajo = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Iniciar sesión';
  buttonRegister.textContent = 'Regístrate';
  textoAlto.textContent = 'Te damos la bienvenida a Semillero';
  textoBajo.textContent = 'Aquí va la descripción de la app';

  // buttonLogin.addEventListener('click', () => {
  //   onNavigate('/login');
  // });

  // buttonRegister.addEventListener('click', () => {
  //   onNavigate('/register');
  // });

  homeDiv.append(textoAlto, textoBajo, buttonLogin, buttonRegister);
  return homeDiv;
};
