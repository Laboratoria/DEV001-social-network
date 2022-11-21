import { signOut, getAuth } from 'firebase/auth';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const contact = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  rootDiv.innerHTML = ' ';

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
  const silviaGithub = document.createElement('img');
  const silviaMail = document.createElement('img');

  const gabrielaDiv = document.createElement('div');
  const gabrielaImgDiv = document.createElement('div');
  const gabrielaImg = document.createElement('img');
  const gabrielaInfoDiv = document.createElement('div');
  const gabrielaName = document.createElement('p');
  const gabrielaDescription = document.createElement('p');
  const gabrielaContact = document.createElement('div');
  const gabrielaLinkedIn = document.createElement('img');
  const gabrielaGithub = document.createElement('img');
  const gabrielaMail = document.createElement('img');

  const valeriaDiv = document.createElement('div');
  const valeriaImgDiv = document.createElement('div');
  const valeriaImg = document.createElement('img');
  const valeriaInfoDiv = document.createElement('div');
  const valeriaName = document.createElement('p');
  const valeriaDescription = document.createElement('p');
  const valeriaContact = document.createElement('div');
  const valeriaLinkedIn = document.createElement('img');
  const valeriaGithub = document.createElement('img');
  const valeriaMail = document.createElement('img');

  // Asignación de clases
  contactDiv.className = 'container-contactDiv';
  imgBackground.src = './lib/img/img-flw.png';
  imgBackground.className = 'img-background';
  containerHeader.className = 'containerHeader';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = `${user.photoURL}`;
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = './lib/img/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = `Hola, ${user.displayName}`;
  greeting.className = 'class-greeting';

  messageDiv.className = 'container-messageDiv';
  messageText.textContent = 'Nuestro Equipo';
  messageText.className = 'class-messageText';
  cardsDiv.className = 'container-cardsDiv';

  gabrielaDiv.className = 'class-cardsDiv';
  gabrielaImgDiv.className = 'class-cardsImgDiv';
  gabrielaImg.className = 'class-cardsImg';
  gabrielaImg.src = './lib/img/avatar-icon-cards.png';
  gabrielaInfoDiv.className = 'class-cardsInfoDiv';
  gabrielaName.textContent = 'Gabriela Zambrano';
  gabrielaName.className = 'class-nameCards';
  gabrielaDescription.textContent = 'FRONT-END DEVELOPER';
  gabrielaDescription.className = 'class-cardsDescription';
  gabrielaContact.className = 'class-contactDiv';
  gabrielaLinkedIn.className = 'class-linkedIn';
  gabrielaLinkedIn.src = './lib/img/contact-linkedin.png';
  gabrielaLinkedIn.id = 'gabriela-linkedIn';
  gabrielaGithub.className = 'class-github';
  gabrielaGithub.src = './lib/img/contact-github.png';
  gabrielaGithub.id = 'gabriela-github';
  gabrielaMail.className = 'class-mail';
  gabrielaMail.src = './lib/img/contact-mail.png';
  gabrielaMail.id = 'gabriela-mail';

  silviaDiv.className = 'class-cardsDiv';
  silviaImgDiv.className = 'class-cardsImgDiv';
  silviaImg.className = 'class-cardsImg';
  silviaImg.src = './lib/img/avatar-icon-cards.png';
  silviaInfoDiv.className = 'class-cardsInfoDiv';
  silviaName.textContent = 'Silvia Falcón';
  silviaName.className = 'class-nameCards';
  silviaDescription.textContent = 'FRONT-END DEVELOPER';
  silviaDescription.className = 'class-cardsDescription';
  silviaContact.className = 'class-contactDiv';
  silviaLinkedIn.className = 'class-linkedIn';
  silviaLinkedIn.src = './lib/img/contact-linkedin.png';
  silviaLinkedIn.id = 'silvia-linkedIn';
  silviaGithub.className = 'class-github';
  silviaGithub.src = './lib/img/contact-github.png';
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
  valeriaGithub.src = './lib/img/contact-github.png';
  valeriaLinkedIn.id = 'valeria-linkedIn';
  valeriaGithub.className = 'class-github';
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
  gabrielaContact.appendChild(gabrielaMail);

  silviaDiv.appendChild(silviaImgDiv);
  silviaImgDiv.appendChild(silviaImg);
  silviaDiv.appendChild(silviaInfoDiv);
  silviaInfoDiv.appendChild(silviaName);
  silviaInfoDiv.appendChild(silviaDescription);
  silviaDiv.appendChild(silviaContact);
  silviaContact.appendChild(silviaLinkedIn);
  silviaContact.appendChild(silviaGithub);
  silviaContact.appendChild(silviaMail);

  valeriaDiv.appendChild(valeriaImgDiv);
  valeriaImgDiv.appendChild(valeriaImg);
  valeriaDiv.appendChild(valeriaInfoDiv);
  valeriaInfoDiv.appendChild(valeriaName);
  valeriaInfoDiv.appendChild(valeriaDescription);
  valeriaDiv.appendChild(valeriaContact);
  valeriaContact.appendChild(valeriaLinkedIn);
  valeriaContact.appendChild(valeriaGithub);
  valeriaContact.appendChild(valeriaMail);

  // Agregar eventos
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class="menu-nav2">
      <li><a class="option" id="option1">Mi Perfil</a></li>
      <li><a class="option" id="option4">Inicio</a></li>
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
