import { validar } from '../lib/validar.js';
import { formularioregistro, formularioGoogle } from '../lib/index.js';

export const Register = (onNavigate) => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'divPadre';
  const divBoton = document.createElement('div');
  divBoton.className = 'botonRegreso';
  HomeDiv.appendChild(divBoton);
  const buttonHome = document.createElement('button');
  buttonHome.textContent = '«';
  buttonHome.classList = 'btn_home_registro';
  divBoton.appendChild(buttonHome);
  buttonHome.addEventListener('click', () => onNavigate('/'));
  const divBienvenida = document.createElement('div');
  HomeDiv.appendChild(divBienvenida);
  const mensajeBienvenida = document.createElement('h2');
  mensajeBienvenida.textContent = 'Welcome to lymusic';
  divBienvenida.appendChild(mensajeBienvenida);
  divBienvenida.className = 'mensajeBienvenida';
  const form = document.createElement('form');
  const divForm = document.createElement('div');
  HomeDiv.appendChild(form);
  form.appendChild(divForm);
  const tituloForm = document.createElement('h1');
  tituloForm.textContent = 'Registration';
  divForm.appendChild(tituloForm);
  divForm.className = 'formularioRegistro';
  const grupo1 = document.createElement('div');
  const grupo2 = document.createElement('div');
  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Email';
  const labelEmail = document.createElement('label');
  labelEmail.textContent = 'Email';
  labelEmail.classList = 'label_email';
  const pass = document.createElement('input');
  pass.type = 'password';
  pass.placeholder = 'Password';
  pass.classList = 'pass_registro';
  email.classList = 'email_registro';
  const labelPass = document.createElement('label');
  labelPass.textContent = 'Password';
  labelPass.classList = 'label_pass';
  const buttonSubmit = document.createElement('button');
  buttonSubmit.textContent = 'sign up';
  buttonSubmit.classList = 'btn_formulario_registro';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.classList = 'btn_google';
  buttonGoogle.type = 'button';
  const imagenGoogle = document.createElement('img');
  imagenGoogle.classList = 'google_img';
  imagenGoogle.src = '../assets/img/cromo.png';
  imagenGoogle.alt = 'imagen de google';
  buttonGoogle.appendChild(imagenGoogle);
  const spanPass = document.createElement('label');
  spanPass.textContent = '👀';
  spanPass.className = 'ojito_registro';
  const cajaOjito = document.createElement('div');
  cajaOjito.className = 'caja_ojito';
  cajaOjito.appendChild(pass);
  cajaOjito.appendChild(spanPass);
  grupo1.appendChild(labelEmail);
  grupo2.appendChild(labelPass);
  grupo1.appendChild(email);
  divForm.appendChild(grupo1);
  divForm.appendChild(grupo2);
  grupo2.appendChild(cajaOjito);
  divForm.appendChild(buttonSubmit);
  divForm.appendChild(buttonGoogle);
  grupo2.className = 'grupos';
  grupo1.className = 'grupos';
  spanPass.addEventListener('click', () => {
    if (pass.type === 'password') {
      pass.type = 'text';
    } else {
      pass.type = 'password';
    }
  });
  buttonSubmit.type = 'submit';
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valido = validar(email.value, pass.value);

    if (valido) {
      formularioregistro(email.value, pass.value).then((res) => {
        const nombre = res;
        localStorage.setItem('nombre', nombre);
        onNavigate('/Begin');
      }).catch((err) => {
        const error = err;
        localStorage.setItem('error', error);
        onNavigate('/error');
      });
    }
  });

  buttonGoogle.addEventListener('click', () => {
    formularioGoogle();
  });
  return HomeDiv;
};
