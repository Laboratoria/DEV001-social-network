// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { formularioregistro } from '../lib/index.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al registro';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar al home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  HomeDiv.appendChild(buttonHome);
  
  const form = document.createElement('form');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const tituloForm = document.createElement('h1');
  tituloForm.textContent = 'Registro';
  divForm.appendChild(tituloForm);
  const grupo1 = document.createElement('div');
  const grupo2 = document.createElement('div');
  const email = document.createElement('input');
  email.type = 'email';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  const pass = document.createElement('input');
  pass.type = 'password';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Registrate';
  grupo1.appendChild(email);
  grupo2.appendChild(pass);
  grupo1.appendChild(labelEmail);
  grupo2.appendChild(labelPass);
  divForm.appendChild(grupo1);
  divForm.appendChild(grupo2);
  divForm.appendChild(buttonSubmit);
  buttonSubmit.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formularioregistro(email.value, pass.value);
  });
  return HomeDiv;
};
