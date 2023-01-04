import {
  login,
  loginWithGoogle,
} from '../App/auth';

export const eventoLogin = (changeHashFn) => {
  const btnLogin = document.getElementById('buttonLogin');
  btnLogin.addEventListener('click', () => {
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    login(email, password, changeHashFn);
  });
};
export const logWithGoogle = (changeHashFn) => {
  const btnGoogle = document.getElementById('buttonGoogle');
  btnGoogle.addEventListener('click', () => {
    loginWithGoogle(changeHashFn);
  });
};

export const Home = (rootDiv, changeHashFn) => {
  const template = `<div class="containerForm">
  <div class="loginForm" id="loginForm">
    <img class="logo" src="images/logo2.jpeg">
    <div class="texto1">
      <p>Ingresa al sitio</p>
    </div>
    <input type="text" class="input" id="Email" placeholder=" Correo Electrónico" required>
    <input type="password" class="input" id="Password" placeholder=" Contraseña" required>
    <button class="btnLogin " id="buttonLogin" type="submit" role="link">Iniciar Sesión</button>
    <div class="texto2">
      <p> ---- o ---- </p>
      </p>
    </div>
    <button class="btnGoogle" id="buttonGoogle" type="button" id="buttonGoogle">
      <img class="buttonGoogle-img" src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"> Continuar
      con Google
    </button>
    <div class="texto3">
      <p>¿Aún no tienes una cuenta? <a id="a" href='/register' class="linkRegister">Regístrate</a></p>
    </div>
  </div>
</div>
<footer class="footer">
  <p>Copyright &copy; 2022 <a target="_blank" href="https://github.com/Januha88">Januhary González</a> and <a
      href="https://github.com/PameSegovia" target="_blank">Pamela Segovia</a> </p>
</footer>
</div`;
  rootDiv.innerHTML = template;
  eventoLogin(changeHashFn);
  logWithGoogle(changeHashFn);
};
