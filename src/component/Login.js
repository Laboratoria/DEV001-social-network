import { formulariologin } from '../lib/index.js';
import { validar } from '../lib/validar.js';

export const Login = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadre2';
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso2';
  HomeDiv.appendChild(divBoton);
  const buttonHome2 = document.createElement('button');
  buttonHome2.textContent = '«';
  buttonHome2.classList = 'btn_home_registro2';
  divBoton.appendChild(buttonHome2);
  buttonHome2.addEventListener('click', () => onNavigate('/'));
  const divBienvenida2 = document.createElement('div');
  HomeDiv.appendChild(divBienvenida2);
  const mensajeBienvenida2 = document.createElement('h2');
  mensajeBienvenida2.textContent = 'Welcome to lymusic';
  divBienvenida2.appendChild(mensajeBienvenida2);
  divBienvenida2.className = 'mensajeBienvenida2';
  const form = document.createElement('form');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const tituloForm = document.createElement('h1');
  tituloForm.textContent = 'Sign In';
  divForm.appendChild(tituloForm);
  divForm.className = 'formulariologin';
  const grupo1 = document.createElement('div');
  const grupo2 = document.createElement('div');
  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.placeholder = 'Password';
  pass.classList = 'pass_registro';
  email.classList = 'email_registro';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'Login';
  buttonSubmit.classList = 'btn_fotm_login';
  grupo1.appendChild(labelEmail);
  grupo2.appendChild(labelPass);
  grupo1.appendChild(email);
  grupo2.appendChild(pass);
  divForm.appendChild(grupo1);
  divForm.appendChild(grupo2);
  divForm.appendChild(buttonSubmit);
  grupo2.className = 'grupos2';
  grupo1.className = 'grupos2';
  const spanPass = document.createElement('span');
  spanPass.textContent = '👀';
  spanPass.className = 'ojito2';
  spanPass.addEventListener('click', () => {
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  });
  grupo2.appendChild(spanPass);
  buttonSubmit.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valido = validar(email.value, pass.value);
    
    if (valido) {
      formulariologin(email.value, pass.value).then((respuesta) => {
        onNavigate(respuesta);
      });
    }
  });

  return HomeDiv;
};
