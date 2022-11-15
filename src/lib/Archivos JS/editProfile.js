import { getAuth  } from 'firebase/auth';
import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const editProfile = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  rootDiv.innerHTML = ' ';

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
  const homeDiv3 = document.createElement('div');
  const editName = document.createElement('input');
  const p2 = document.createElement('p');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');
  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  const p6 = document.createElement('p');

  homeDiv.className = 'container';
  container.className = 'container-im-and-register';
  containerImg.className = 'container-img';
  titleImg.src = './lib/img/flowers1.png';
  titleImg.className = 'img-title';
  title.textContent = 'Mi Perfil';
  title.className = 'title-register';
  imgwelcome.src = './lib/img/Women-cel.png';
  imgwelcome.className = 'img-welcome-2';
  imgTop.src = './lib/img/collage-3.png';
  imgTop.className = 'img-top-2';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  containerRegister.className = 'container-register';
  p.textContent = 'Usuario';
  p.className = 'text-subtitle2';
  avatar.src = './lib/img/Ellipse9.png';
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Descripción';
  p2.className = 'text-subtitle2';
  p3.textContent = 'Email';
  p3.className = 'text-subtitle2';
  editName.type = 'text';
  editName.placeholder = `${user.displayName}`;
  editName.id = 'editName';
  editName.className = 'text-subtitle3';
  editDescription.rows = '3';
  editDescription.placeholder = 'klkfnladfnjadlfjnakedhfk';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-subtitle4';
  p6.textContent = `${user.email}`;
  p6.className = 'text-subtitle3';
  saveChanges.id = 'saveChanges'
  saveChanges.textContent = 'Guardar cambios'
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';
  homeDiv4.className = 'container-div';

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
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(editName);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(editDescription);
  homeDiv3.appendChild(saveChanges);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(p6);
  containerRegister.appendChild(homeDiv4);

   saveChanges.addEventListener('click', () => {
    onNavigate('/profile');
  });

  return homeDiv;
};
