/*import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, } from 'firebase/auth';*/
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';
import { functionLogin, functionRegisterGoogle } from "./index.js";
/*import { auth } from './firebase.js';*/

const rootDiv = document.getElementById('root');

export const login = () => {
  rootDiv.innerHTML = ' ';

  const homeDiv = document.createElement('div');
  const container = document.createElement('section');
  const containerRegister = document.createElement('div');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const imgTop = document.createElement('img');
  const imgBottom = document.createElement('img');
  const title = document.createElement('h2');
  const titleImg = document.createElement('img');
  const homeDiv2 = document.createElement('div');
  const p = document.createElement('p');
  const homeDiv3 = document.createElement('div');
  const p2 = document.createElement('p');
  const inputEmail = document.createElement('input');
  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  const inputPassword = document.createElement('input');
  const homeDiv5 = document.createElement('div');
  const buttonGoogle = document.createElement('button');
  const buttonInicio = document.createElement('button');
  const imgFlower = document.createElement('img');
  const imgFlower2 = document.createElement('img');
  const imgFlower3 = document.createElement('img');
  const regresar = document.createElement('p');
  homeDiv.className = 'container';
  container.className = 'container-im-and-register';
  containerImg.className = 'container-img';
  titleImg.src = './lib/img/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Iniciar Sesión';
  title.className = 'title-register';
  imgwelcome.src = './lib/img/img-women2.png';
  imgwelcome.className = 'img-welcome2';
  imgTop.src = './lib/img/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  containerRegister.className = 'container-register';
  p2.textContent = 'Correo electrónico';
  p2.className = 'text-subtitle';
  inputEmail.type = 'email';
  inputEmail.id = 'inputEmail';
  inputEmail.className = 'input-register';
  inputEmail.required = 'true';
  inputEmail.placeholder = 'Ingresa tu email:';
  p3.textContent = 'Contraseña';
  p3.className = 'text-subtitle';
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';
  inputPassword.className = 'input-register';
  inputPassword.required = 'true';
  inputPassword.placeholder = 'Ingresa tu contraseña:';
  regresar.innerHTML = '¿No tienes cuenta? <a href> Regístrate </a>';
  regresar.className = 'link-login';
  buttonGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Iniciar Sesión con Google';
  buttonGoogle.className = 'button-google';
  buttonInicio.textContent = 'Iniciar Sesión';
  buttonInicio.className = 'buttonRegister';
  imgFlower.src = './lib/img/flowers2.png';
  imgFlower.className = 'icon-img-flower';
  imgFlower2.src = './lib/img/flowers2.png';
  imgFlower2.className = 'icon-img-flower';
  imgFlower3.src = './lib/img/flowers2.png';
  imgFlower3.className = 'icon-img-flower';
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';
  homeDiv4.className = 'container-div';
  homeDiv5.className = 'container-div';

  homeDiv.appendChild(container);
  container.appendChild(containerImg);
  container.appendChild(containerRegister);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  containerImg.appendChild(imgwelcome);
  containerRegister.appendChild(titleImg);
  containerRegister.appendChild(title);
  homeDiv3.appendChild(imgFlower);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(inputEmail);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(imgFlower3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(inputPassword);
  containerRegister.appendChild(homeDiv4);
  homeDiv5.appendChild(buttonInicio);
  homeDiv5.appendChild(buttonGoogle);
  homeDiv5.appendChild(regresar);
  containerRegister.appendChild(homeDiv5);


  regresar.addEventListener('click', () => onNavigate('/register'));


  buttonInicio.addEventListener('click', async () => {
    const email = inputEmail.value;
    const password = inputPassword.value;

    const result = await functionLogin(email, password);

    //console.log(email);
    //console.log(password);

    if(result){
      console.log("si vamos alogin")
      onNavigate('/profile');
    };

  });

  buttonGoogle.addEventListener('click', async () => {
    const resultGoogle = await functionRegisterGoogle();

    if(resultGoogle){
      console.log("sita funcionando");
      onNavigate('/profile');
    }
  });

  /*buttonInicio.addEventListener('click', async () => {
    const email = inputEmail.value;
    const password = inputPassword.value;

    console.log(email, password);

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);

      onNavigate('/profile');
    } catch (error) {
      console.log(error);
      if (error.code === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      } else if (error.code === 'auth/user-not-found') {
        alert('Dirección Email no encontrada, por favor regístrese');
      } else if (error.code) {
        alert('Error en inicio de sesión, intente nuevamente');
      }
      // const errorCode = error.code;
      // const errorMessage = error.message;
    }
  });*/

  /*
  buttonGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
      console.log(credentials.user);
      onNavigate('/profile');
      //return provider.user
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });*/

  return homeDiv;
};
