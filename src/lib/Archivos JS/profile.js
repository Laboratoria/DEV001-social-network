import { getAuth } from 'firebase/auth';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main';

export const profile = () => {
  const auth = getAuth();
  if (auth.currentUser !== null) {
    localStorage.setItem('user', JSON.stringify(auth.currentUser));
  }
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user.photoURL);
  let photo;
  if (user) {
    photo = user.photoURL || './lib/img/avatar-1.png';
  }

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
  const p2 = document.createElement('p');
  const homeDiv4 = document.createElement('div');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  const p5 = document.createElement('p');
  const p6 = document.createElement('p');
  const homeDiv5 = document.createElement('div');
  const btnHome = document.createElement('button');
  const btnEdit = document.createElement('button');

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
  avatar.referrerPolicy = 'no-referrer';
  avatar.src = `${photo}`;
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Descripción';
  p2.className = 'text-subtitle2';
  p3.textContent = 'Email';
  p3.className = 'text-subtitle2';
  p4.textContent = user ? user.displayName : 'prueba';
  p4.className = 'text-subtitle3';
  p5.textContent = `Hola, soy estudiante de Desarrollo Web, 
  tengo 24 años, disfruto muchos salir y enfrentarme a nuevos retos`;
  p5.className = 'text-subtitle4';
  p6.textContent = user ? user.email : 'prueba@gmail.com';
  p6.className = 'text-subtitle3';
  btnHome.textContent = 'Ir al Home';
  btnHome.className = 'buttonRegister';
  btnEdit.textContent = 'Editar Perfil';
  btnEdit.className = 'buttonEditProfile';
  homeDiv2.className = 'container-div';
  homeDiv3.className = 'container-div';
  homeDiv4.className = 'container-div';
  homeDiv5.className = 'container-div';

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
  homeDiv2.appendChild(p4);
  containerRegister.appendChild(homeDiv2);
  homeDiv3.appendChild(p2);
  homeDiv3.appendChild(p5);
  containerRegister.appendChild(homeDiv3);
  homeDiv4.appendChild(p3);
  homeDiv4.appendChild(p6);
  containerRegister.appendChild(homeDiv4);
  homeDiv5.appendChild(btnHome);
  homeDiv5.appendChild(btnEdit);
  containerRegister.appendChild(homeDiv5);

  btnEdit.addEventListener('click', () => onNavigate('/editProfile'));

  btnHome.addEventListener('click', () => onNavigate('/landingPage'));

  return homeDiv;
};
