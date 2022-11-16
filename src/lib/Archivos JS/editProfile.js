import { getAuth  } from 'firebase/auth';
import { async } from 'regenerator-runtime';
import { onNavigate } from '../../main';

// import { saveTask, getTask } from './firebase.js';

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
  const homeDiv3 = document.createElement('form');
  const editName = document.createElement('input');
  const p2 = document.createElement('p');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');

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
  avatar.referrerPolicy='no-referrer';
  avatar.src = `${user.photoURL}`;
  avatar.className = 'avatar-class';
  fondoImagen.className = 'avatar-class';
  p2.textContent = 'Editar Descripción:';
  p2.className = 'text-subtitle2';
  editName.type = 'text';
  editName.placeholder = `${user.displayName}`;
  editName.id = 'editName';
  editName.className = 'text-content-description';
  editDescription.rows = '3';
  editDescription.placeholder = 'Hola, me encanta mucho...';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-content-description';
  saveChanges.id = 'saveChanges';
  saveChanges.textContent = 'Guardar Cambios';
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
  containerRegister.appendChild(homeDiv3);

//    homeDiv3.addEventListener('submit', async (e) => {
//     e.preventDefault()

//     const editname = editName.value
//     const editdescription = editDescription.value
//     saveTask(editname, editdescription)

//     homeDiv3.reset

//     const querySnapshot = await getTask()
//     querySnapshot.forEach(doc => {
//         console.log(doc.data())
//     })
//     // onNavigate('/profile');
//   });

  return homeDiv;
};