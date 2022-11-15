// // eslint-disable-next-line import/no-cycle
// import { onNavigate } from '../../main';

const rootDiv = document.getElementById('root');

export const landingPage = () => {
  rootDiv.innerHTML = ' ';

  // Creación de elementos
  const homeDiv = document.createElement('div');
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
  const postDiv = document.createElement('div');
  const imgPostDiv = document.createElement('div');
  const imgPost = document.createElement('img');
  const postTitle = document.createElement('p');
  const postDesciption = document.createElement('p');
  const postAuthor = document.createElement('p');

  // Asignación de clases
  homeDiv.className = 'container';
  containerHeader.className = 'containerHeader';
  containerSlider.className = 'containerSlider';
  containerCategories.className = 'containerCategories';
  containerPosts.className = 'containerPosts';
  avatarIcon.src = './lib/img/Ellipse9.png';
  avatarIcon.className = 'avatarIcon-class';
  greeting.textContent = 'Hola Silvia';
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

  postDiv.classList = 'class-post';
  imgPostDiv.classList = 'class-post-emocional';
  imgPost.src = './lib/img/meditando.png';
  imgPost.className = 'class-imgPost';
  postTitle.textContent = 'Simply Dummy Text';
  postTitle.className = 'text-subtitle3';
  postDesciption.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
  + 'sed do eiusmod tempor incididunt ut labore et dolore, '
  + 'eiusmod tempor incididunt ut labore et dolore do eiusmod tempor incididun.';
  postDesciption.className = 'class-postDescription';
  postAuthor.textContent = 'Silvia Falcón';
  postAuthor.className = 'class-postDescription';

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
  homeDiv.appendChild(containerHeader);
  containerHeader.appendChild(avatarIcon);
  containerHeader.appendChild(greeting);
  homeDiv.appendChild(imgBottom);
  containerSlider.appendChild(btnLeft);
  containerSlider.appendChild(imgSlider);
  containerSlider.appendChild(btnRight);
  homeDiv.appendChild(containerSlider);
  containerCategories.appendChild(saludDiv);
  containerCategories.appendChild(socialDiv);
  containerCategories.appendChild(emocionalDiv);
  saludDiv.appendChild(imgSalud);
  saludDiv.appendChild(pSalud);
  socialDiv.appendChild(imgSocial);
  socialDiv.appendChild(pSocial);
  emocionalDiv.appendChild(imgEmocional);
  emocionalDiv.appendChild(pEmocional);
  homeDiv.appendChild(containerCategories);
  homeDiv.appendChild(containerPosts);
  containerPosts.appendChild(postDiv);
  postDiv.appendChild(imgPostDiv);
  imgPostDiv.appendChild(imgPost);
  postDiv.appendChild(postTitle);
  postDiv.appendChild(postDesciption);
  postDiv.appendChild(postAuthor);
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

  return homeDiv;
};
