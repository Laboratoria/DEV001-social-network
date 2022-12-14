import { getAuth } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';
import { functionSignOut } from './index.js';

export const aboutTheApp = () => {
  const auth = getAuth();
  const user = JSON.parse(localStorage.getItem('user'));

  // Creación de elementos
  const aboutContent = document.createElement('div');
  const containerHeader = document.createElement('section');
  const avatarIcon = document.createElement('img');
  const iconMenu = document.createElement('img');
  const greeting = document.createElement('p');
  const menuDisplayed = document.createElement('div');
  const imgBackground = document.createElement('img');
  const containerLanding = document.createElement('div');
  const container1 = document.createElement('div');
  const containerElements = document.createElement('section');
  const imgLogo = document.createElement('img');
  const description = document.createElement('p');
  const description2 = document.createElement('p');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const container2 = document.createElement('div');
  const containerElements2 = document.createElement('section');
  const description3 = document.createElement('p');
  const description4 = document.createElement('p');
  const containerImg2 = document.createElement('section');
  const imgwelcome2 = document.createElement('img');
  const container3 = document.createElement('div');
  const containerElements3 = document.createElement('section');
  const description5 = document.createElement('p');
  const description6 = document.createElement('p');
  const containerImg3 = document.createElement('section');
  const imgwelcome3 = document.createElement('img');

  // Asignación de clases
  aboutContent.className = 'containerAboutThePage';
  containerHeader.className = 'containerHeader';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = user ? user.photoURL : 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978496/imagenes-24-7-repositorio/avatar-3_oxp8fh.png';
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978495/imagenes-24-7-repositorio/menu-icon-8_ng6ov9.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = user ? user.displayName : 'prueba';
  greeting.className = 'class-greeting';
  menuDisplayed.className = 'menu-desplegable';
  menuDisplayed.id = 'menu-desplegable-id';
  imgBackground.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978493/imagenes-24-7-repositorio/img-flw_d1m2v6.png';
  imgBackground.className = 'img-background';
  containerLanding.className = 'container-landing2';
  container1.className = 'container-landing3';
  containerElements.className = 'container-home';
  imgLogo.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978495/imagenes-24-7-repositorio/logo-24-7_bbyb9i.png';
  imgLogo.className = 'logo-24-7-2';
  description.textContent = '"24/7 es una red social para todas las mujeres en Latinoamérica. Una herramiento en la que pueden '
  + ' encontrar recursos sobre seguridad, salud, apoyo emocional, y mucho más. Una red de apoyo que estará ahí para nosotras, '
  + '24/7."';
  description.className = 'text-description';
  description2.textContent = '"Creado por mujeres, para mujeres. 🤍"';
  description2.className = 'text-description';
  containerImg.className = 'container-imgWomen';
  imgwelcome.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978493/imagenes-24-7-repositorio/img-aboutTheApp2_kxu5dy.png';
  imgwelcome.className = 'img-welcome3';
  container2.className = 'container-landing3';
  containerElements2.className = 'container-home';
  description3.textContent = '¿Qué puedes hacer en 24/7?';
  description3.className = 'title-register';
  description4.innerHTML = `
  <p> 1. Pedir consejos a las demás. </p> 
  <br>
  <p> 2. Compartir tips relacionados a la seguridad de las mujeres, a la salud y el apoyo emocional. </p>
  <br>
  <p> 3. Encontrar recursos valiosos (blogs, videos, artículos...) </p>
  <br>
  `;
  description4.className = 'text-description';
  containerImg2.className = 'container-imgWomen';
  imgwelcome2.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978493/imagenes-24-7-repositorio/img-aboutTheApp_nmpkmz.png';
  imgwelcome2.className = 'img-welcome4';

  container3.className = 'container-landing3';
  containerElements3.className = 'container-home';
  description5.textContent = 'Reglas de 24/7';
  description5.className = 'title-register';
  description6.innerHTML = `
  <p> Es nuestra prioridad asegurar una buena experiencia para todos nuestros usuarios, por eso te pedimos recordar: </p>
  <br>
  <p> 1. Ser amable con todos. </p> 
  <br>
  <p> 2. No vender artículos ni servicios, ni pedir que se te los vendan a ti. </p>
  <br>
  <p> 3. No compartir anuncios ni publicidad ajena a la temática de la app. </p>
  <br>
  <p> 4. No difundir noticias falsas, investigar las fuentes. </p>
  <br>
  <p> 5. Los videos y/o links sin contexto no están permitidos. </p>
  `;
  description6.className = 'text-description';
  containerImg3.className = 'container-imgWomen';
  imgwelcome3.src = 'https://res.cloudinary.com/dfio49epx/image/upload/v1670978493/imagenes-24-7-repositorio/img-aboutTheApp3_jfq8yd.png';
  imgwelcome3.className = 'img-welcome5';

  // Añadiendo hijos
  aboutContent.appendChild(containerHeader);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  containerHeader.appendChild(iconMenu);
  aboutContent.appendChild(menuDisplayed);
  aboutContent.appendChild(imgBackground);
  aboutContent.appendChild(containerLanding);
  containerLanding.appendChild(container1);
  containerLanding.appendChild(container2);
  containerLanding.appendChild(container3);
  container1.appendChild(containerElements);
  containerElements.appendChild(imgLogo);
  containerElements.appendChild(description);
  containerElements.appendChild(description2);
  container1.appendChild(containerImg);
  containerImg.appendChild(imgwelcome);
  containerLanding.appendChild(container2);
  container2.appendChild(containerElements2);
  containerElements2.appendChild(description3);
  containerElements2.appendChild(description4);
  container2.appendChild(containerImg2);
  containerImg2.appendChild(imgwelcome2);
  containerLanding.appendChild(container3);
  container3.appendChild(containerElements3);
  containerElements3.appendChild(description5);
  containerElements3.appendChild(description6);
  container3.appendChild(containerImg3);
  containerImg3.appendChild(imgwelcome3);

  // Menú hambuguesa
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class='menu-nav'>
        <li><a class="option" id="option4">Ir al Home</a></li>
        <li><a class='option' id='option1'>Mi Perfil</a></li>
        <li><a class='option' id='option2'>Contáctanos</a></li>
        <li><a class='option' id='option3'>Cerrar Sesión</a></li>
        <img src='https://res.cloudinary.com/dfio49epx/image/upload/v1670978492/imagenes-24-7-repositorio/icon-close_roe9hf.png'alt="close" class="close-button" id="close-button">
        </nav>`;
    menuDisplayed.innerHTML = options;

    // Redirecciones opciones del menú hamburguesa
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });

    const inicio = document.getElementById('option4');
    inicio.addEventListener('click', () => onNavigate('/landingPage'));

    const miPerfil = document.getElementById('option1');
    miPerfil.addEventListener('click', () => onNavigate('/profile'));

    const contactanos = document.getElementById('option2');
    contactanos.addEventListener('click', () => onNavigate('/contact'));

    const cerrarSesion = document.getElementById('option3');
    cerrarSesion.addEventListener('click', async () => {
      await functionSignOut(auth);
      localStorage.clear();
      // console.log('user signed out');
      onNavigate('/');
    });
  });

  return aboutContent;
};
