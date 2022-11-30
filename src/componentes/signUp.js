import { register } from '../basededatos/auth';

function signUp() {
  const templateFormulario1 = `
      <div class= "contenedor1">
      <img src= "estilos/logoHi.png"  class="logo" alt="logo hiGirl">
            <div class= "form1">
                <div class= "form-register">
                <form action="#">
                    <div class= "input-field">
                    <input type= "text" placeholder= "Nombre" required></input>
                    <input type= "text" placeholder= "correo@correo.com" required></input>
                    </div>
                <div class= "input-field">
                    <input type= "text" placeholder="contraseña" required></input>
                </div>
                <div class= "check-box-text">
                 <div class= "check-box-content">
                 <div class= "input-field-button">
                  <input type= "submit" value="Crear Cuenta">
                 </div> 
                </form>
                  <div class="login-signup">
                   <span class= "text">¿Ya no tienes cuenta?
                    <a href="#" class="signup-text" id="signup">Ingresa</a>
                   </span>
                  </div>
                </div>  
            </div>
        </div>`;

  document.getElementById('root').innerHTML = templateFormulario1;
}
signUp();
