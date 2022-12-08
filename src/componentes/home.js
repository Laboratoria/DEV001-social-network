// eslint-disable-next-line import/no-unresolved
// import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js';
// import { auth } from '../app/firebase.js';
export const Home = () => `
<div class="containerForm">
<div id="loginForm">
  <p class="texto1">Ingresa al sitio</p>
  <input type="text" class="input" id="loginEmail" placeholder=" Correo Electrónico" required>
  <input type="password" class="input" id="loginPassword" placeholder=" Contraseña" required>
  <button class="btnLogin " id="buttonLogin" type="submit" role="link">Iniciar Sesión</button>
  <p class="texto2"> ---- o ---- </p>
  <button class="btnGoogle" id="buttonGoogle" type="button" id="buttonGoogle">
  <img class="buttonGoogle-img" src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"> Continuar
  con Google
  </button>
  <p class="texto3">¿Aún no tienes una cuenta? <a  id="a" href = '/register' class="linkRegister" >Regístrate</a></p>
</div>
</div>
</div>`;
