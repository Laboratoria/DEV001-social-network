import { getAuth } from 'firebase/auth';
import { saveTask, onGetTask } from './firebase.js';
// // eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const landingPage = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  rootDiv.innerHTML = ' ';

  // Creación de elementos
  const postAll = document.createElement('div');
  const containerHeader = document.createElement('section');
  const avatarIcon = document.createElement('img');
  const greeting = document.createElement('p');
  const imgBottom = document.createElement('img');

  const containerSlider = document.createElement('section');
  const imgSlider = document.createElement('img');
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

  const homeDiv3 = document.createElement('form');
  const editDescription = document.createElement('textarea');
  const saveChanges = document.createElement('button');

  editDescription.rows = '3';
  editDescription.placeholder = 'Quiero compartir con ustedes...';
  editDescription.id = 'editDescription';
  editDescription.className = 'text-content-post-description';
  saveChanges.id = 'saveChanges';
  saveChanges.textContent = 'Publicar';
  saveChanges.className = 'buttonRegister';
  homeDiv3.className = 'container-divPost';

  homeDiv3.appendChild(editDescription);
  homeDiv3.appendChild(saveChanges);
  postDiv.appendChild(homeDiv3);

  const btnshowPost = document.createElement('button');
  btnshowPost.textContent = 'Ver publicaciones';
  btnshowPost.className = 'buttonSeePosts';

  const showPostDiv = document.createElement('div');

  const imgPostDiv = document.createElement('div');
  const imgPost = document.createElement('img');
  const postAuthor = document.createElement('p');
  const divisionLine = document.createElement('div');
  const postInferiorDiv = document.createElement('div');
  const categoryDiv = document.createElement('div');
  const optionsDiv = document.createElement('div');
  const likeDiv = document.createElement('div');
  const editDiv = document.createElement('div');
  const deleteDiv = document.createElement('div');
  const likeImg = document.createElement('img');
  const editImg = document.createElement('img');
  const deleteImg = document.createElement('img');
  const likeText = document.createElement('p');
  const editText = document.createElement('p');

  // Asignación de clases
  postAll.className = 'containerLandingPage';
  containerHeader.className = 'containerHeader';
  containerSlider.className = 'containerSlider';
  containerCategories.className = 'containerCategories';
  containerPosts.className = 'containerPosts';
  showPostDiv.className = 'containerPosts2';
  avatarIcon.src = './lib/img/Ellipse9.png';
  avatarIcon.className = 'avatarIcon-class';
  greeting.textContent = `Bienvenida, ${user.displayName}`;
  greeting.className = 'class-greeting';
  imgBottom.src = './lib/img/collage-5.png';
  imgBottom.className = 'img-bottom-2';
  imgSlider.src = './lib/img/slider.png';
  imgSlider.className = 'imgSlider';
  btnLeft.textContent = '<';
  btnLeft.className = 'btnSlider1';
  btnRight.textContent = '>';
  btnRight.className = 'btnSlider2';

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
  optionsDiv.className = 'class-optionsDiv';
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
  // nav.className = 'class-nav';
  // checkbox.type = 'checkbox';
  // checkbox.id = 'check';
  // label.for = 'check';
  // label.className = 'bar-btn';
  // menuHam.className = 'menuHamburguesa';
  // linea1.className = 'linea1';
  // linea2.className = 'linea2';
  // linea3.className = 'linea3';
  // ul.className = 'nav-menu';
  // btnCerrar.id = 'btnCerrar';
  // btnCerrar.textContent = 'Cerrar Sesión';

  // Añadiendo hijos
  postAll.appendChild(containerHeader);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  postAll.appendChild(imgBottom);
  containerSlider.appendChild(btnLeft);
  containerSlider.appendChild(imgSlider);
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
  postInferiorDiv.appendChild(optionsDiv);
  likeDiv.appendChild(likeImg);
  likeDiv.appendChild(likeText);
  editDiv.appendChild(editImg);
  editDiv.appendChild(editText);
  deleteDiv.appendChild(deleteImg);
  postAll.appendChild(btnshowPost);
  postAll.appendChild(showPostDiv);
  // containerHeader.appendChild(nav);
  // nav.appendChild(checkbox);
  // checkbox.appendChild(label);
  // label.appendChild(menuHam);
  // menuHam.appendChild(linea1);
  // menuHam.appendChild(linea2);
  // menuHam.appendChild(linea3);
  // nav.appendChild(ul);
  // ul.appendChild(li);
  // li.appendChild(btnCerrar);

  btnshowPost.addEventListener('click', async () => {
    onGetTask((querySnapshot) => {
      let html = '';

      querySnapshot.forEach((doc) => {
        const task = doc.data();
        html += `
          <div class = 'class-estructuraPost2'>
          <p>${task.editdescription}</p>
          <button class = btnDelete><img class= 'class-deleteImg' src="/lib/img/delete-icon.png"></button>
          </div>
          `;
      });

      showPostDiv.innerHTML = html;

      const btnsDelete = showPostDiv.querySelectorAll('.btnDelete');

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

  return postAll;
};
