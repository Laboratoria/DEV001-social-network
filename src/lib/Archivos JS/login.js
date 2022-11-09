import { onNavigate } from '../../main';

// export const login = () => {
//   const homeDiv = document.createElement('div');
//   const buttonHome = document.createElement('button');
//   buttonHome.textContent = 'Regresar al Inicio';
//   homeDiv.textContent = 'Bienvenida al inicio de sesión';

//   buttonHome.addEventListener('click', () => onNavigate('/'));

//   homeDiv.appendChild(buttonHome);

//   return homeDiv;
// };

const rootDiv = document.getElementById('root');

export const login = () => {
  rootDiv.innerHTML = " ";

  const homeDiv = document.createElement('div');
  homeDiv.textContent = 'Bienvenida';

  const homeDiv2 = document.createElement('div');
  const p2 = document.createElement('p');
  p2.textContent = 'Correo electrónico';
  const inputEmail = document.createElement('input');
  inputEmail.type = "email"
  inputEmail.id = "inputEmail"
  inputEmail.placeholder= 'INGRESA TU EMAIL'

  homeDiv2.appendChild(p2);
  homeDiv2.appendChild(inputEmail);
  homeDiv.appendChild(homeDiv2);

  const homeDiv3 = document.createElement('div');
  const p3 = document.createElement('p');
  p3.textContent = 'Contraseña';
  const inputPassword = document.createElement('input');
  inputPassword.type = "password"
  inputPassword.id = "inputPassword"
  inputPassword.placeholder= 'INGRESA TU CONTRASEÑA'

  homeDiv3.appendChild(p3);
  homeDiv3.appendChild(inputPassword);
  homeDiv.appendChild(homeDiv3);

  const homeDiv4 = document.createElement('div');
  const buttonInicio = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const regresar = document.createElement('p');
  regresar.innerHTML = '¿No tienes cuenta? <a href> Regístrate </a>'
  
  buttonInicio.textContent = 'Iniciar Sesión';
  buttonGoogle.textContent = 'Iniciar con Google';

  buttonInicio.addEventListener('click', () => {

    const email = inputEmail.value
    const password = inputPassword.value

    console.log(email, password);
  });

  // buttonGoogle.addEventListener('click', () => {

  //   const email = inputEmail.value
  //   const password = inputPassword.value

  //   console.log(email, password);
  // });

  regresar.addEventListener('click', () => onNavigate('/register'));

  homeDiv4.appendChild(buttonInicio);
  homeDiv4.appendChild(buttonGoogle);
  homeDiv4.appendChild(regresar);
  homeDiv.appendChild(homeDiv4);

  return homeDiv;
};