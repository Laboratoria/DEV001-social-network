// import { onNavigate } from "../main.js";

export const Home = () => {
  const HomeDiv = document.createElement('section');
  HomeDiv.innerHTML = `
  <article class = "plantilla">
   <div class= "imagenes">
   <img class="logo" src="img/logo.png" alt="">
   <img class="girl" src="img/una.png" alt="">
   </div>
   <div>
    <input type = "text" class= "usuario" placeholder = "Usuario o correo electrónico"><br>
    <input type = "text" class= "usuario" placeholder = "Contraseña">
  </div>
  </article>
 `;

  const buttonLogin = document.createElement('button');

  buttonLogin.textContent = 'Iniciar sesión';
  HomeDiv.appendChild(buttonLogin);

  // buttonLogin.addEventListener('click', () => onNavigate('/muro'));



  return HomeDiv;
};
