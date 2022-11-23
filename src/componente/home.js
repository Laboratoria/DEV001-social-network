// import { onNavigate } from "../main.js";

export const Home = () => {
  const HomeDiv = document.createElement('section');
  HomeDiv.classList.add('sectionHome');
  HomeDiv.innerHTML = `
  <article class = "plantilla">
   <div class= "images">
    <img class="logo" src="img/logo.png" alt="">
    <img class="girl" src="img/una.png" alt="">
   </div>
   <div>
    <input type = "text" class= "user" placeholder = "Usuario o Correo Electrónico">
    <input type = "password" class= "user" placeholder = "Contraseña">
  </div>
  </article>
 `;
  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'btn-login';
  buttonLogin.textContent = 'Iniciar sesión';
  HomeDiv.appendChild(buttonLogin);

  const google = document.createElement('div');
  google.classList.add('enlaces');
  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'img/google.png';

  const linkGoogle = document.createElement('a');
  linkGoogle.setAttribute('href', '');
  linkGoogle.textContent = 'Continuar con tu cuenta en Google';

  google.appendChild(imgGoogle);
  google.appendChild(linkGoogle);
  HomeDiv.appendChild(google);

  const linkPassword = document.createElement('a');
  linkPassword.classList.add('enlaces');
  linkPassword.setAttribute('href', '');
  linkPassword.textContent = '¿Olvidaste tu contraseña?';
  HomeDiv.appendChild(linkPassword);

  const register = document.createElement('div');
  register.classList.add('enlaces');

  const parrafo2 = document.createElement('p');
  parrafo2.classList.add('border');
  parrafo2.textContent = '¿No tienes una cuenta?';

  const linkRegister = document.createElement('a');
  linkRegister.setAttribute('href', '#Register');
  linkRegister.textContent = 'Registrate';

  parrafo2.appendChild(linkRegister);
  register.appendChild(parrafo2);
  HomeDiv.appendChild(register);

  buttonLogin.addEventListener('click', () => {
    window.location.hash = '#Register';
  });
  return HomeDiv;
  
};