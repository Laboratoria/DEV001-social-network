// import { onNavigate } from "../main.js";

export const Home = () => {
  const HomeDiv = document.createElement('section');
  HomeDiv.innerHTML = `
  <article class = "plantilla">
   <div class= "images">
    <img class="logo" src="img/logo.png" alt="">
    <img class="girl" src="img/una.png" alt="">
   </div>
   <div>
    <input type = "text" class= "user" placeholder = "Usuario o Correo Electrónico"><br>
    <input type = "text" class= "user" placeholder = "Contraseña">
  </div>
  </article>
 `;
  const buttonLogin = document.createElement('button');
  buttonLogin.id = 'btn-login';
  buttonLogin.textContent = 'Iniciar sesión';
  HomeDiv.appendChild(buttonLogin);
  
  const imgGoogle = document.createElement('img');
  imgGoogle.src = 'img/google.png';

  const linkGoogle = document.createElement('a');
  linkGoogle.classList.add('linkGoogle');

  linkGoogle.textContent = 'Continuar con tu cuenta en Google';
  const google = document.createElement('div');
  google.classList.add()
  google.appendChild(imgGoogle);
  google.appendChild(linkGoogle);
  HomeDiv.appendChild(google);

  const linkPassword = document.createElement('a');
  linkPassword.setAttribute('href', '');
  linkPassword.textContent = '¿Olvidaste tu contraseña?';
  HomeDiv.appendChild(linkPassword);

  const register = document.createElement('div');
  register.classList.add('register');
  const parrafo2 = document.createElement('p');
  parrafo2.textContent = '¿No tienes una cuenta?';
  const linkRegister = document.createElement('a');
  linkRegister.setAttribute('href', '#Register');
  linkRegister.textContent = 'Registrate';
  parrafo2.appendChild(linkRegister);
  register.appendChild(parrafo2);
  //register.appendChild(linkRegister);
  HomeDiv.appendChild(register);

  buttonLogin.addEventListener('click', () => {
    window.location.hash = '#Register';
  });
  return HomeDiv;
};