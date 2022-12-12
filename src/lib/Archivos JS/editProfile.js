// import { async } from 'regenerator-runtime';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

export const editProfile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const homeDiv = document.createElement('div');
  const container = document.createElement('section');
  const containerRegister = document.createElement('div');
  const containerImg = document.createElement('section');
  const imgwelcome = document.createElement('img');
  const imgTop = document.createElement('img');
  const imgBottom = document.createElement('img');
  const fondoImagen = document.createElement('div');
  const title = document.createElement('h2');
  const titleImg = document.createElement('img');
  const avatar = document.createElement('img');
  const homeDiv2 = document.createElement('div');
  const p = document.createElement('p');
  const homeDiv3 = document.createElement('form');
  const editName = document.createElement('input');
  const p2 = document.createElement('p');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');
  const noSaveChanges = document.createElement('button');

  homeDiv.className = 'container';
  container.className = 'container-im-and-register';
  containerImg.className = 'container-img';
  titleImg.src = './lib/img/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Mi Perfil';
  title.className = 'title-register';
  imgwelcome.src = './lib/img/Women-profile.png';
  imgwelcome.className = 'img-welcome-2';
  imgTop.src = './lib/img/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  containerRegister.className = 'container-register';
  p.textContent = 'Editar Nombre de Usuario:';
  p.className = 'text-subtitle2';
  avatar.src = user ? user.photoURL : './lib/img/avatar-1.png';
  avatar.referrerPolicy = 'no-referrer';
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Editar Descripción:';
  p2.className = 'text-subtitle2';
  editName.type = 'text';
  editName.placeholder = user ? user.displayName : 'prueba';
  editName.id = 'editName';
  editName.className = 'text-content-description';
  editDescription.rows = '3';
  editDescription.placeholder = 'Hola, me encanta mucho...';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-content-description text-content-description-2';
  saveChanges.id = 'saveChanges';
  saveChanges.textContent = 'Guardar Cambios';
  noSaveChanges.className = 'buttonRegister';
  noSaveChanges.id = 'saveChanges';
  noSaveChanges.textContent = 'Continuar sin Cambios';
  saveChanges.className = 'buttonRegister';
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';

  homeDiv.appendChild(container);
  container.appendChild(containerRegister);
  container.appendChild(containerImg);
  homeDiv.appendChild(imgTop);
  homeDiv.appendChild(imgBottom);
  containerImg.appendChild(imgwelcome);
  containerRegister.appendChild(titleImg);
  containerRegister.appendChild(title);
  fondoImagen.appendChild(avatar);
  containerRegister.appendChild(fondoImagen);
  homeDiv2.appendChild(p);
  homeDiv2.appendChild(editName);
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(editDescription);
  homeDiv3.appendChild(saveChanges);
  homeDiv3.appendChild(noSaveChanges);
  containerRegister.appendChild(homeDiv3);

  saveChanges.addEventListener('click', (e) => {
    e.preventDefault();
    if (editName.value === '' || editDescription.value === '') {
      alert('Falta completar tu información');
      onNavigate('/editProfile');
    } else {
      onNavigate('/profile');
    }
  });

  noSaveChanges.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/profile');
  });

  return homeDiv;
};
