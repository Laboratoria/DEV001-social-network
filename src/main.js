import './firebase.js';
import { signUp } from './componentes';

// import { myFunction } from './lib/index.js';

// Este es el punto de entrada de tu aplicacion

// myFunction();

// eslint-disable-next-line func-names
export function showLogin() {
  const templateFormulario = `
    <div class= "container">
    <img src= "estilos/logoHi.png"  class="logo" alt="logo hiGirl">
          <div class= "form">
              <div class= "form-login">
              <form action="#">
                  <div class= "input-field">
                  <input type= "text" placeholder= "correo@correo.com" required></input>
                  </div>
              <div class= "input-field">
                  <input type= "text" placeholder="contraseña" required></input>
              </div>
              <div class= "check-box-text">
               <div class= "check-box-content">
               <div class= "input-field-button">
                <input type= "button" value="Iniciar Sesión">
               </div> 
              </form>
                <div class="login-signup">
                 <span class= "text">¿No tienes una cuenta?
                  <a href="#" class="signup-text" id="signup">Regístrate</a>
                 </span>
                </div>
              </div>  
          </div>
      </div>`;
  document.getElementById('root').innerHTML = templateFormulario;
  const registro = document.getElementById('signup');
  registro.addEventListener('click', (e) => {
    e.preventDefault();
    signUp();
  });
}
showLogin();
