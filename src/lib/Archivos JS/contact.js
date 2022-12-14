import { signOut, getAuth } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';

export const contact = () => {
  const auth = getAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  // Creación de elementos
  const contactDiv = document.createElement('div');
  const imgBackground = document.createElement('img');
  const containerHeader = document.createElement('section');
  const avatarIcon = document.createElement('img');
  const greeting = document.createElement('p');
  const iconMenu = document.createElement('img');
  const menuDisplayed = document.createElement('div');

  const messageDiv = document.createElement('div');
  const messageText = document.createElement('p');
  const cardsDiv = document.createElement('div');
  const silviaDiv = document.createElement('div');
  const silviaImgDiv = document.createElement('div');
  const silviaImg = document.createElement('img');
  const silviaInfoDiv = document.createElement('div');
  const silviaName = document.createElement('p');
  const silviaDescription = document.createElement('p');
  const silviaContact = document.createElement('div');
  const silviaLinkedIn = document.createElement('img');
  const silviaGithub = document.createElement('a');
  const imgSilviaGithub = document.createElement('img');
  const silviaMail = document.createElement('img');

  const gabrielaDiv = document.createElement('div');
  const gabrielaImgDiv = document.createElement('div');
  const gabrielaImg = document.createElement('img');
  const gabrielaInfoDiv = document.createElement('div');
  const gabrielaName = document.createElement('p');
  const gabrielaDescription = document.createElement('p');
  const gabrielaContact = document.createElement('div');
  const gabrielaLinkedIn = document.createElement('img');
  const gabrielaGithub = document.createElement('a');
  const imgGabrielaGithub = document.createElement('img');
  const gabrielaMail = document.createElement('img');

  const valeriaDiv = document.createElement('div');
  const valeriaImgDiv = document.createElement('div');
  const valeriaImg = document.createElement('img');
  const valeriaInfoDiv = document.createElement('div');
  const valeriaName = document.createElement('p');
  const valeriaDescription = document.createElement('p');
  const valeriaContact = document.createElement('div');
  const valeriaLinkedIn = document.createElement('img');
  const valeriaGithub = document.createElement('a');
  const imgValeriaGithub = document.createElement('img');
  const valeriaMail = document.createElement('img');

  // Asignación de clases
  contactDiv.className = 'container-contactDiv';
  imgBackground.src = './lib/img/img-flw.png';
  imgBackground.className = 'img-background';
  containerHeader.className = 'containerHeader';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = user ? user.photoURL : './lib/img/avatar-1.png';
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = './lib/img/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = user ? user.displayName : 'prueba';
  greeting.className = 'class-greeting';

  messageDiv.className = 'container-messageDiv';
  messageText.textContent = 'Nuestro Equipo';
  messageText.className = 'class-messageText';
  cardsDiv.className = 'container-cardsDiv';

  gabrielaDiv.className = 'class-cardsDiv';
  gabrielaImgDiv.className = 'class-cardsImgDiv';
  gabrielaImg.className = 'class-cardsImg';
  gabrielaImg.src = './lib/img/contacto-Gaby.jpg';
  gabrielaInfoDiv.className = 'class-cardsInfoDiv';
  gabrielaName.textContent = 'Gabriela Zambrano';
  gabrielaName.className = 'class-nameCards';
  gabrielaDescription.textContent = 'FRONT-END DEVELOPER';
  gabrielaDescription.className = 'class-cardsDescription';
  gabrielaContact.className = 'class-contactDiv';
  gabrielaLinkedIn.className = 'class-linkedIn';
  gabrielaLinkedIn.src = './lib/img/contact-linkedin.png';
  gabrielaLinkedIn.id = 'gabriela-linkedIn';
  imgGabrielaGithub.className = 'class-github';
  gabrielaGithub.id = 'gabriela-github';
  imgGabrielaGithub.src = './lib/img/contact-github.png';
  gabrielaGithub.href = 'https://github.com/Ruth-Gabriela';
  gabrielaMail.className = 'class-mail';
  gabrielaMail.src = './lib/img/contact-mail.png';
  gabrielaMail.id = 'gabriela-mail';

  silviaDiv.className = 'class-cardsDiv';
  silviaImgDiv.className = 'class-cardsImgDiv';
  silviaImg.className = 'class-cardsImg';
  silviaImg.src = './lib/img/foto-silvia.jpg';
  silviaInfoDiv.className = 'class-cardsInfoDiv';
  silviaName.textContent = 'Silvia Falcón';
  silviaName.className = 'class-nameCards';
  silviaDescription.textContent = 'FRONT-END DEVELOPER';
  silviaDescription.className = 'class-cardsDescription';
  silviaContact.className = 'class-contactDiv';
  silviaLinkedIn.className = 'class-linkedIn';
  silviaLinkedIn.src = './lib/img/contact-linkedin.png';
  silviaLinkedIn.id = 'silvia-linkedIn';
  imgSilviaGithub.className = 'class-github';
  imgSilviaGithub.src = './lib/img/contact-github.png';
  silviaGithub.href = 'https://github.com/SilviBibi';
  silviaGithub.id = 'silvia-github';
  silviaMail.className = 'class-mail';
  silviaMail.src = './lib/img/contact-mail.png';
  silviaMail.id = 'silvia-mail';

  valeriaDiv.className = 'class-cardsDiv';
  valeriaImgDiv.className = 'class-cardsImgDiv';
  valeriaImg.className = 'class-cardsImg';
  valeriaImg.src = './lib/img/contacto-valeria.png';
  valeriaInfoDiv.className = 'class-cardsInfoDiv';
  valeriaName.textContent = 'Valeria Murguía';
  valeriaName.className = 'class-nameCards';
  valeriaDescription.textContent = 'FRONT-END DEVELOPER';
  valeriaDescription.className = 'class-cardsDescription';
  valeriaContact.className = 'class-contactDiv';
  valeriaLinkedIn.className = 'class-linkedIn';
  valeriaLinkedIn.src = './lib/img/contact-linkedin.png';
  imgValeriaGithub.src = './lib/img/contact-github.png';
  valeriaGithub.href = 'https://github.com/valeriamurguiag';
  valeriaLinkedIn.id = 'valeria-linkedIn';
  imgValeriaGithub.className = 'class-github';
  valeriaGithub.id = 'valeria-github';
  valeriaMail.className = 'class-mail';
  valeriaMail.src = './lib/img/contact-mail.png';
  valeriaMail.id = 'valeria-mail';

  // Añadiendo hijos
  contactDiv.appendChild(messageDiv);
  contactDiv.appendChild(imgBackground);
  contactDiv.appendChild(containerHeader);
  contactDiv.appendChild(menuDisplayed);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  containerHeader.appendChild(iconMenu);

  messageDiv.appendChild(messageText);
  contactDiv.appendChild(cardsDiv);

  cardsDiv.appendChild(gabrielaDiv);
  cardsDiv.appendChild(silviaDiv);
  cardsDiv.appendChild(valeriaDiv);

  gabrielaDiv.appendChild(gabrielaImgDiv);
  gabrielaImgDiv.appendChild(gabrielaImg);
  gabrielaDiv.appendChild(gabrielaInfoDiv);
  gabrielaInfoDiv.appendChild(gabrielaName);
  gabrielaInfoDiv.appendChild(gabrielaDescription);
  gabrielaDiv.appendChild(gabrielaContact);
  gabrielaContact.appendChild(gabrielaLinkedIn);
  gabrielaContact.appendChild(gabrielaGithub);
  gabrielaGithub.appendChild(imgGabrielaGithub);
  gabrielaContact.appendChild(gabrielaMail);

  silviaDiv.appendChild(silviaImgDiv);
  silviaImgDiv.appendChild(silviaImg);
  silviaDiv.appendChild(silviaInfoDiv);
  silviaInfoDiv.appendChild(silviaName);
  silviaInfoDiv.appendChild(silviaDescription);
  silviaDiv.appendChild(silviaContact);
  silviaContact.appendChild(silviaLinkedIn);
  silviaContact.appendChild(silviaGithub);
  silviaGithub.appendChild(imgSilviaGithub);
  silviaContact.appendChild(silviaMail);

  valeriaDiv.appendChild(valeriaImgDiv);
  valeriaImgDiv.appendChild(valeriaImg);
  valeriaDiv.appendChild(valeriaInfoDiv);
  valeriaInfoDiv.appendChild(valeriaName);
  valeriaInfoDiv.appendChild(valeriaDescription);
  valeriaDiv.appendChild(valeriaContact);
  valeriaContact.appendChild(valeriaLinkedIn);
  valeriaContact.appendChild(valeriaGithub);
  valeriaGithub.appendChild(imgValeriaGithub);
  valeriaContact.appendChild(valeriaMail);

  // Agregar eventos
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class="menu-nav2">
      <li><a class="option" id="option4">Ir al Home</a></li>
      <li><a class="option" id="option1">Mi Perfil</a></li>
      <li><a class="option" id="option3">Cerrar Sesión</a></li>
      <img src="./lib/img/icon-close.png" alt="close" class="close-button" id="close-button">
      </nav>`;
    menuDisplayed.innerHTML = options;

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });

    const miPerfil = document.getElementById('option1');
    miPerfil.addEventListener('click', () => onNavigate('/profile'));

    const inicio = document.getElementById('option4');
    inicio.addEventListener('click', () => onNavigate('/landingPage'));

    const cerrarSesion = document.getElementById('option3');
    cerrarSesion.addEventListener('click', async () => {
      await signOut(auth);
      // console.log('user signed out');
      onNavigate('/');
    });
  });

  // Retornar container principal
  return contactDiv;
};
