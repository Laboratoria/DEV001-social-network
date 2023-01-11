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
  const template = `  <div class="contieneTodo">
  <div class="containerForm">
  <div class="loginForm" id="loginForm">
    <img class="logo" src="images/logo2.jpeg">
    <div class="texto1">
      <p class="parrafo">Ingresa al sitio</p>
    </div>
    <input type="text" class="input" id="Email" placeholder=" Correo ElectrÃ³nico" required>
    <input type="password" class="input" id="Password" placeholder=" ContraseÃ±a" required>
    <button class="btnLogin " id="buttonLogin" type="submit" role="link">Iniciar SesiÃ³n</button>
    <div class="texto2">
      <p> ---- o ---- </p>
      </p>
    </div>
    <button class="btnGoogle" id="buttonGoogle" type="button" id="buttonGoogle">
      <img class="buttonGoogle-img" src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png"> Continuar
      con Google
    </button>
    <div class="texto3">
      <p>Â¿AÃºn no tienes una cuenta? <a id="a" href='/register' class="linkRegister">RegÃ­strate</a></p>
    </div>
  </div> 
  </div>
  <div>
<img class="imgHome" src="https://images.squarespace-cdn.com/content/v1/5456aa00e4b0750e1090a911/1602014146668-ZW29CNY2X8DN0PCE4FMJ/Hiker.gif?format=1500w"> 
</div>

  </div>`;
  rootDiv.innerHTML = template;
  eventoLogin(changeHashFn);
  logWithGoogle(changeHashFn);
};