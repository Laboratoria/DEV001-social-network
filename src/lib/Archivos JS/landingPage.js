import { getAuth, signOut } from 'firebase/auth';
import { saveTask, onGetTask } from './firebase.js';
// eslint-disable-next-line import/no-cycle, import/no-cycle
import { onNavigate } from '../../main';
import { carousel } from './carousel.js';

const rootDiv = document.getElementById('root');

export const landingPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  rootDiv.innerHTML = ' ';

  // Creación de elementos
  const postAll = document.createElement('div');
  const imgBackground = document.createElement('img')
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
  avatarIcon.src = `${user.photoURL}`;
  avatarIcon.className = 'avatarIcon-class';
  iconMenu.src = './lib/img/menu-icon-8.png';
  iconMenu.className = 'icon-menu';
  greeting.textContent = `Hola, ${user.displayName}`;
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
  postAuthor.textContent = `${user.displayName}`;
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


  //?Menú hambuguesa 
  iconMenu.addEventListener('click', () => {
    menuDisplayed.style.display = 'flex';
    let options = `<nav class='menu-nav'>
      <li><a class='option' id='option1'>Mi Perfil</a></li>
      <li><a class='option' id='option2'>Contáctanos</a></li>
      <li><a class='option' id='option3'>Cerrar Sesión</a></li>
      <img src='./lib/img/icon-close.png' alt='close' class='close-button' id='close-button'>
      </nav>`;
    menuDisplayed.innerHTML = options;

    /*Al dar click a el icono cerrar */
    let closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', () => {
      menuDisplayed.style.display = 'none';
    });


    /*Evento para cerrar sesión*/
    let returnProfile = document.getElementById('option1');
    returnProfile.addEventListener('click', () => {
      onNavigate('/profile');
    });

    /*Evento para cerrar sesión*/
    let closeSesion = document.getElementById('option3');
    closeSesion.addEventListener('click', async () => {
      await signOut(auth);
      //console.log('user signed out');
      onNavigate('/');
    });
  });


  //?Lamar a la función Carrusel- slider
  const arraySliders = [imgSlider1, imgSlider2, imgSlider3];
  carousel(btnRight, btnLeft, arraySliders);



  //?Función de fireBase - firestore*/
  btnshowPost.classList.remove('button-See-Posts');
  btnshowPost.addEventListener('click', async () => {
    onGetTask((querySnapshot) => {
      let html = '';
      btnshowPost.classList.remove('buttonSeePosts');
      btnshowPost.classList.add('button-See-Posts');

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
          <div class = 'class-estructuraPost2'>
            <p>${task.editdescription}</p>
            <img src='./lib/img/adorno-comentarios.png' alt='img-adorno' class='img-adorno'>
            <section class= 'class-optionsDiv'>
              <div class= 'class-like'><img class= 'class-likeImg' src = './lib/img/like-icon.png'> Me gusta </div>
              <div class= 'class-edit'><img class= 'class-editImg' src = './lib/img/edit-icon.png'> Editar </div>
              <div class= 'class-delete'><img class= 'class-deleteImg' src = './lib/img/delete-icon.png'></div>
            </section>
          </div>
          `;
      });

      showPostDiv.innerHTML = html;

      const btnsDelete = showPostDiv.querySelectorAll('.class-delete');

      //? Boton para eliminar cometarios del usuario.
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
          console.log('deleting');
        });
      });
    });
  });

  homeDiv3.addEventListener('submit', async (e) => {
    e.preventDefault();

    const editdescription = editDescription.value;
    saveTask(editdescription);

    homeDiv3.reset();
  });

  avatarIcon.addEventListener('click', () => onNavigate('/profile'));

  return postAll;
};
