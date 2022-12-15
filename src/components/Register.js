import { createUser } from '../lib/Auth.js';

export const Register = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'contenedor';

  const textoRegister = document.createElement('h2');
  textoRegister.textContent = 'Puedes registrarte en Semillero usando tu correo electrónico. Tu clave debe tener un mínimo de seis dígitos:';

  const registerMail = document.createElement('input');
  registerMail.placeholder = 'ingresa tu correo';
  registerMail.type = 'email';

  const registerPass = document.createElement('input');
  registerPass.placeholder = 'crea una contraseña';
  registerPass.type = 'password';

  const errorSpace = document.createElement('p');
  errorSpace.id = 'errorSpace';

  const buttonSend = document.createElement('button');
  buttonSend.textContent = 'CREAR USUARIO';
  buttonSend.classList.add('register');

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'VOLVER AL INICIO';
  buttonHome.addEventListener('click', () => {
    onNavigate('/');
  });

  buttonSend.addEventListener('click', () => {
    const userMail = registerMail.value;
    const userPass = registerPass.value;
    createUser(userMail, userPass, onNavigate);
  });

  homeDiv.append(textoRegister, registerMail, registerPass, errorSpace, buttonSend, buttonHome);
  return homeDiv;
};
