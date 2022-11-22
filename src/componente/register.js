import { singup } from '../lib/auth.js';
// import { auth } from '../lib/firebase.js';

export const Register = () => {
  const registerDiv = document.createElement('section');
  registerDiv.classList.add('sectionRegister');

  registerDiv.innerHTML = `
  <article class = "plantilla">
   <div class= "images">
    <img class="logo" src="img/logo.png" alt="">
    <p class= "mensaje">Únete a nuestra comunidad y construye amistades que ven desde el corazón.</p>
   </div>
   
   <div>
    <form class= "formRegister">
    <input type = "text" id = "email" class= "form-register" placeholder = "Correo Electrónico"><br>
    <input type = "text" id= "name" class= "form-register" placeholder = "Nombre completo"><br>
    <input type = "text" id= "userName" class= "form-register" placeholder = "Nombre de usuario"><br>
    <input type = "text" id= "password" class= "form-register" placeholder = "Contraseña"><br>
    <input type = "text" id= "repetPassword" class= "form-register" placeholder = "Repetir contraseña"><br>
    </form>
  </div>

  <p class= "mensaje" > Al registrarte, aceptas nuestras Condiciones,<br> la Política de privacidad y la Política de cookies. </p>
  </article>`;

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.classList.add('buttonRegister');
  registerDiv.appendChild(buttonRegister);

  const backHome = document.createElement('div');
  backHome.classList.add('enlaces1');

  const parrafo3 = document.createElement('p');
  parrafo3.classList.add('border');
  parrafo3.textContent = '¿Tienes una cuenta?';
  const linkBackHome = document.createElement('a');
  linkBackHome.setAttribute('href', '');
  linkBackHome.textContent = 'Iniciar Sesión';

  parrafo3.appendChild(linkBackHome);
  backHome.appendChild(parrafo3);
  registerDiv.appendChild(backHome);

  const singupElemnt = registerDiv.querySelector('.buttonRegister');
  singupElemnt.addEventListener('click', (e) => {
    const email = registerDiv.querySelector('#email').value;
    const password = registerDiv.querySelector('#password').value;
    const promise = singup(email, password);

    promise
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.includes('auth/email-already-in-use')) {
          alert('Tu email ya se encuentra registrado');
        }
        console.log(errorCode, errorMessage);
      });
  });

  return registerDiv;
};
