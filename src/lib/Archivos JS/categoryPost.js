import { getAuth } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';
import {
  functionSignOut,
  functionOnGetTask,
} from './index.js';

export const categoryPost = () => {
  const auth = getAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  const category = JSON.parse(localStorage.getItem('category'));

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

  // Asignación de clases
  aboutContent.className = 'containerAboutThePage';
  containerHeader.className = 'containerHeader';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = user ? user.photoURL : './lib/img/avatar-1.png';
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = './lib/img/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = user ? user.displayName : 'prueba';
  greeting.className = 'class-greeting';
  menuDisplayed.className = 'menu-desplegable';
  menuDisplayed.id = 'menu-desplegable-id';
  imgBackground.src = './lib/img/img-flw.png';
  imgBackground.className = 'img-background';
  containerLanding.className = 'container-landing-post';
  container1.className = 'post';

  // Añadiendo hijos
  aboutContent.appendChild(containerHeader);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  containerHeader.appendChild(iconMenu);
  aboutContent.appendChild(menuDisplayed);
  aboutContent.appendChild(imgBackground);
  aboutContent.appendChild(containerLanding);
  containerLanding.appendChild(container1);

  // Menú hambuguesa
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class='menu-nav'>
        <li><a class="option" id="option4">Ir al home</a></li>
        <li><a class='option' id='option1'>Mi Perfil</a></li>
        <li><a class='option' id='option2'>Contáctanos</a></li>
        <li><a class='option' id='option3'>Cerrar Sesión</a></li>
        <img src='./lib/img/icon-close.png' alt='close' class='close-button' id='close-button'>
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

  functionOnGetTask((querySnapshot) => {
    // console.log('querySnapshot', querySnapshot);
    let html = '';
    // creando nuevo array de la data que llega de firebase para realizar el sort.
    const newArr = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const idDoc = doc.id;
      newArr.push([data, { id: idDoc }]);
    });
    const data = newArr.sort(
      (a, b) => new Date(b[0].creationDate) - new Date(a[0].creationDate),
    ).filter((post) => post[0].category === category);
    data.forEach((doc) => {
      // const task = doc.data();
      const date = new Date(doc[0].creationDate);
      html += `
        <div class = 'class-estructuraPost-salud'>
          <div class = 'img-post'>
            <img src='./lib/img/img-women.png' alt='img-category' class='img-category'>
          </div>
            <div class = 'post'>
            <h2 class='category'>${doc[0].category}</h2>
            <p>${doc[0].editdescription}</p>
            <div class="info-user">
              <h3 class='task-nameUser-social'>${doc[0].nameUser}</h3>
              <h3 class='task-date-social'>${date.toLocaleDateString()}</h3>
            </div>
            <img src='./lib/img/adorno-comentarios.png' alt='img-adorno' class='img-adorno'>
          </div>
        </div>`;
    });

    containerLanding.innerHTML = html;
  });

  return aboutContent;
};
