// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

export const home = () => {
  const homeDiv = document.createElement('div');
  const containerLanding = document.createElement('div');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const containerElements = document.createElement('section');
  const imgLogo = document.createElement('img');
  const description = document.createElement('p');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const imgTop = document.createElement('img');
  const imgBottom = document.createElement('img');

  homeDiv.className = 'container';
  containerLanding.className = 'container-landing';
  buttonRegister.textContent = 'Regístrate';
  buttonRegister.className = 'buttonRegister';
  buttonLogin.textContent = 'Iniciar sesión';
  buttonLogin.className = 'buttonLogin';
  containerElements.className = 'container-home';
  containerImg.className = 'container-img';
  imgLogo.src = './lib/img/logo-24-7.png';
  imgLogo.className = 'logo-24-7';
  imgwelcome.src = './lib/img/img-welcome.png';
  imgwelcome.className = 'img-welcome';
  imgTop.src = './lib/img/collage-1.png';
  imgTop.className = 'img-top';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  description.textContent = '"24/7 es una red social para todas las mujeres en Latinoamérica. Una herramienta en donde pueden '
  + 'encontrar recursos sobre seguridad, apoyo emocional y salud sexual. Una red de apoyo que está para nosotras 24/7"';
  description.className = 'text-description';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  homeDiv.appendChild(containerLanding);
  containerLanding.appendChild(containerElements);
  containerLanding.appendChild(containerImg);
  containerImg.appendChild(imgwelcome);
  containerElements.appendChild(imgLogo);
  containerElements.appendChild(description);
  containerElements.appendChild(buttonRegister);
  containerElements.appendChild(buttonLogin);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  homeDiv.appendChild(imgBottom);
  return homeDiv;
};
