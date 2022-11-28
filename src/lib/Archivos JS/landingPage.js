import { getAuth } from 'firebase/auth';
import // saveTask,
// onGetTask,
// getTask2,
// updateTask,
'./firebase.js';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';
import { carousel } from './carousel.js';
import {
  functionSignOut,
  functionDeleteTask,
  functionGetTask2,
  functionUpdateTask,
  functionSaveTask,
  functionOnGetTask,
} from './index.js';

let editStatus = false;
let id = '';

export const landingPage = () => {
  const auth = getAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  // Creación de elementos
  const postAll = document.createElement('div');
  const imgBackground = document.createElement('img');
  const containerHeader = document.createElement('section');
  const avatarIcon = document.createElement('img');
  const greeting = document.createElement('p');

  const containerSlider = document.createElement('section');
  const divSlider = document.createElement('div');
  const imgSlider1 = document.createElement('div');
  const slider1 = document.createElement('img');
  const imgSlider2 = document.createElement('div');
  const slider2 = document.createElement('img');
  const imgSlider3 = document.createElement('div');
  const slider3 = document.createElement('img');
  const btnLeft = document.createElement('button');
  const btnRight = document.createElement('button');

  const containerCategories = document.createElement('section');
  const saludDiv = document.createElement('div');
  const socialDiv = document.createElement('div');
  const emocionalDiv = document.createElement('div');
  const imgSalud = document.createElement('img');
  const imgSocial = document.createElement('img');
  const imgEmocional = document.createElement('img');
  const pSalud = document.createElement('p');
  const pSocial = document.createElement('p');
  const pEmocional = document.createElement('p');

  const containerPosts = document.createElement('section');
  const estructuraPost = document.createElement('div');
  const postDiv = document.createElement('div');

  const titlePost = document.createElement('h2');
  const homeDiv3 = document.createElement('form');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');

  editDescription.rows = '3';
  editDescription.placeholder = 'Quiero compartir con ustedes...';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-content-post-description';
  saveChanges.id = 'saveChanges';
  saveChanges.textContent = 'Publicar';
  saveChanges.className = 'buttonRegister button-post';
  homeDiv3.className = 'container-divPost';
  titlePost.textContent = 'Comparte con Nosotras:';
  titlePost.className = 'subtitle-post';
  imgBackground.src = './lib/img/img-flw.png';
  imgBackground.className = 'img-background';

  homeDiv3.appendChild(editDescription);
  homeDiv3.appendChild(saveChanges);
  postDiv.appendChild(titlePost);
  postDiv.appendChild(homeDiv3);
  const btnshowPost = document.createElement('button');
  btnshowPost.textContent = 'Ver publicaciones';
  btnshowPost.className = 'buttonSeePosts button-See-Posts';
  const showPostDiv = document.createElement('div');

  const imgPostDiv = document.createElement('div');
  const imgPost = document.createElement('img');
  const postAuthor = document.createElement('p');
  const divisionLine = document.createElement('div');
  const postInferiorDiv = document.createElement('div');
  const categoryDiv = document.createElement('div');
  const likeDiv = document.createElement('div');
  const editDiv = document.createElement('div');
  const deleteDiv = document.createElement('div');
  const likeImg = document.createElement('img');
  const editImg = document.createElement('img');
  const deleteImg = document.createElement('img');
  const likeText = document.createElement('p');
  const editText = document.createElement('p');
  const iconMenu = document.createElement('img');
  const menuDisplayed = document.createElement('div');

  // Asignación de clases
  postAll.className = 'containerLandingPage';
  containerHeader.className = 'containerHeader';
  containerSlider.className = 'containerSlider';
  containerCategories.className = 'containerCategories';
  containerPosts.className = 'containerPosts';
  showPostDiv.className = 'containerPosts2';
  avatarIcon.referrerPolicy = 'no-referrer';
  avatarIcon.src = user ? user.photoURL : 'www.google.com';
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = './lib/img/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = user ? user.displayName : 'prueba';
  greeting.className = 'class-greeting';
  imgSlider1.className = 'slider';
  slider1.src = './lib/img/slider-1.png';
  slider1.className = 'slider-img';
  imgSlider2.className = 'slider';
  slider2.src = './lib/img/slider-2.png';
  slider2.className = 'slider-img';
  imgSlider3.className = 'slider';
  slider3.src = './lib/img/slider-3.png';
  slider3.className = 'slider-img';
  divSlider.className = 'imgSlider';
  divSlider.id = 'imgSlider-container';
  btnLeft.textContent = '<';
  btnLeft.className = 'btnSlider1';
  btnLeft.id = 'btnSlider-left';
  btnRight.textContent = '>';
  btnRight.className = 'btnSlider2';
  btnRight.id = 'btnSlider-right';

  saludDiv.className = 'class-categories';
  socialDiv.className = 'class-categories';
  emocionalDiv.className = 'class-categories';
  imgSalud.src = './lib/img/saludIcon.png';
  imgSalud.className = 'class-categories-icons';
  imgSocial.src = './lib/img/socialIcon.png';
  imgSocial.className = 'class-categories-icons';
  imgEmocional.src = './lib/img/emocionalIcon.png';
  imgEmocional.className = 'class-categories-icons';
  pSalud.textContent = 'Salud';
  pSalud.className = 'text-categories';
  pSocial.textContent = 'Social';
  pSocial.className = 'text-categories';
  pEmocional.textContent = 'Emocional';
  pEmocional.className = 'text-categories';

  estructuraPost.classList = 'class-estructuraPost';
  postDiv.classList = 'class-postDiv';
  imgPostDiv.classList = 'class-post-emocional';
  imgPost.src = './lib/img/meditando.png';
  imgPost.className = 'class-imgPost';
  postAuthor.textContent = user ? user.displayName : 'prueba';
  postAuthor.className = 'class-postAuthor';
  divisionLine.className = 'class-divisionLine';
  postInferiorDiv.className = 'class-postInferiorDiv';
  categoryDiv.textContent = 'Emocional';
  categoryDiv.className = 'class-category';
  likeDiv.className = 'class-like';
  editDiv.className = 'class-edit';
  deleteDiv.className = 'class-delete';
  likeImg.src = './lib/img/like-icon.png';
  likeImg.className = 'class-likeImg';
  editImg.src = './lib/img/edit-icon.png';
  editImg.className = 'class-editImg';
  deleteImg.src = './lib/img/delete-icon.png';
  deleteImg.className = 'class-deleteImg';
  likeText.textContent = 'Me gusta';
  editText.textContent = 'Editar';
  menuDisplayed.className = 'menu-desplegable';
  menuDisplayed.id = 'menu-desplegable-id';

  // Añadiendo hijos
  postAll.appendChild(containerHeader);
  postAll.appendChild(menuDisplayed);
  postAll.appendChild(imgBackground);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  containerHeader.appendChild(iconMenu);
  containerSlider.appendChild(btnLeft);
  containerSlider.appendChild(divSlider);
  divSlider.appendChild(imgSlider1);
  imgSlider1.appendChild(slider1);
  divSlider.appendChild(imgSlider2);
  imgSlider2.appendChild(slider2);
  divSlider.appendChild(imgSlider3);
  imgSlider3.appendChild(slider3);
  containerSlider.appendChild(btnRight);
  postAll.appendChild(containerSlider);
  containerCategories.appendChild(saludDiv);
  containerCategories.appendChild(socialDiv);
  containerCategories.appendChild(emocionalDiv);
  saludDiv.appendChild(imgSalud);
  saludDiv.appendChild(pSalud);
  socialDiv.appendChild(imgSocial);
  socialDiv.appendChild(pSocial);
  emocionalDiv.appendChild(imgEmocional);
  emocionalDiv.appendChild(pEmocional);
  postAll.appendChild(containerCategories);
  postAll.appendChild(containerPosts);
  containerPosts.appendChild(postDiv);
  imgPostDiv.appendChild(imgPost);
  imgPostDiv.appendChild(categoryDiv);
  likeDiv.appendChild(likeImg);
  likeDiv.appendChild(likeText);
  editDiv.appendChild(editImg);
  editDiv.appendChild(editText);
  deleteDiv.appendChild(deleteImg);
  containerPosts.appendChild(btnshowPost);
  containerPosts.appendChild(showPostDiv);

  // Menú hambuguesa
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    const options = `<nav class='menu-nav'>
      <li><a class='option' id='option1'>Mi Perfil</a></li>
      <li><a class='option' id='option2'>Contáctanos</a></li>
      <li><a class='option' id='option3'>Cerrar Sesión</a></li>
      <img src='./lib/img/icon-close.png' alt='close' class='close-button' id='close-button'>
      </nav>`;
    menuDisplayed.innerHTML = options;

    /* Al dar click a el icono cerrar */
    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });

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

  // Lamar a la función Carrusel- slider
  const arraySliders = [imgSlider1, imgSlider2, imgSlider3];
  carousel(btnRight, btnLeft, arraySliders);

  // Función de fireBase - firestore*/
  btnshowPost.classList.remove('button-See-Posts');
  btnshowPost.addEventListener('click', async () => {
    functionOnGetTask((querySnapshot) => {
      console.log('querySnapshot', querySnapshot);
      let html = '';
      btnshowPost.classList.remove('buttonSeePosts');
      btnshowPost.classList.add('button-See-Posts');

      // creando nuevo array de la data que llega de firebase para realizar el sort.
      const newArr = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const idDoc = doc.id;
        newArr.push([data, { id: idDoc }]);
      });
      const data = newArr.sort(
        (a, b) => new Date(b[0].creationDate) - new Date(a[0].creationDate),
      );

      data.forEach((doc) => {
        // const task = doc.data();
        const date = new Date(doc[0].creationDate);
        html += `
          <div class = 'class-estructuraPost2'>
            <p>${doc[0].editdescription}</p>
            <h3 class='task-nameUser'>${doc[0].nameUser}</h3>
            <h3 class='task-date'>${date.toLocaleDateString()}</h3>
            <img src='./lib/img/adorno-comentarios.png' alt='img-adorno' class='img-adorno'>
            <section class= 'class-optionsDiv'>
              <div class= 'class-like'><img class= 'class-likeImg' src = './lib/img/like-icon.png'> Me gusta </div>
              <button class= 'class-edit' data-id= '${doc[1].id}'> Editar </button>
              <button class= 'class-delete' data-id= '${doc[1].id}'> Eliminar </button>
            </section>
          </div>`;
      });

      showPostDiv.innerHTML = html;

      const btnsDelete = showPostDiv.querySelectorAll('.class-delete');

      // Boton para eliminar cometarios del usuario.
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', ({ target: { dataset } }) => {
          // console.log(dataset.id);
          functionDeleteTask(dataset.id);
        });
      });

      // Boton para editar comentarios del usuario.
      const btnsEdit = showPostDiv.querySelectorAll('.class-edit');

      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async ({ target: { dataset } }) => {
          // homeDiv3.style.position = 'fixed';
          homeDiv3.classList.remove('container-divPost');
          homeDiv3.classList.add('container-divPost2');

          const doc = await functionGetTask2(dataset.id);
          const task = doc.data();

          editDescription.value = task.editdescription;

          editStatus = true;
          id = doc.id;
          saveChanges.innerText = 'Guardar cambios';
        });
      });
    });
  });

  // Boton para enviar cambios al formulario - cometarios del usuario.
  homeDiv3.addEventListener('submit', async (e) => {
    e.preventDefault();

    postDiv.classList.remove('edit-container-divPost');

    const editdescription = editDescription.value;
    const nameUser = user.displayName;
    const idUser = user.uid;
    const creationDate = Date.now();

    if (!editStatus) {
      functionSaveTask(editdescription, nameUser, idUser, creationDate);
    } else {
      // función modificar firebase.
      functionUpdateTask(id, {
        editdescription: editDescription.value,
      });

      homeDiv3.classList.remove('container-divPost2');
      homeDiv3.classList.add('container-divPost');
      saveChanges.innerText = 'Publicar';
      editStatus = false;
    }
    homeDiv3.reset();
  });

  avatarIcon.addEventListener('click', () => onNavigate('/profile'));

  return postAll;
};
