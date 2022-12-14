// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';
import { functionLogin, functionRegisterGoogle } from './index.js';
// eslint-disable-next-line import/no-cycle

export const login = () => {
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
  titleImg.src = 'https://i.postimg.cc/yxGgt3xw/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Iniciar Sesión';
  title.className = 'title-register';
  imgwelcome.src = 'https://i.postimg.cc/JzZDYnL2/img-women2.png';
  imgwelcome.className = 'img-welcome2';
  imgTop.src = 'https://i.postimg.cc/YSx4ksjN/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = 'https://i.postimg.cc/qRn7mDyH/collage-5.png';
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
  inputPassword.className = 'input-register input-password';
  inputPassword.required = 'true';
  inputPassword.placeholder = 'Ingresa tu contraseña:';
  regresar.innerHTML = '¿No tienes cuenta? <a href=""> Regístrate </a>';
  regresar.className = 'link-login';
  buttonGoogle.innerHTML = '<img class="img-google" src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-logo-png-150x150.png" /> Iniciar Sesión con Google';
  buttonGoogle.className = 'button-google';
  buttonInicio.textContent = 'Iniciar Sesión';
  buttonInicio.className = 'buttonRegister';
  imgFlower.src = 'https://i.postimg.cc/dQgG5gCD/flowers2.png';
  imgFlower.className = 'icon-img-flower';
  imgFlower2.src = 'https://i.postimg.cc/dQgG5gCD/flowers2.png';
  imgFlower2.className = 'icon-img-flower';
  imgFlower3.src = 'https://i.postimg.cc/dQgG5gCD/flowers2.png';
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

    if (result !== 'error') {
      onNavigate('/profile');
    }
  });

  buttonGoogle.addEventListener('click', async () => {
    const resultGoogle = await functionRegisterGoogle();

    if (resultGoogle !== 'error') {
      onNavigate('/profile');
    }
  });

  return homeDiv;
};
