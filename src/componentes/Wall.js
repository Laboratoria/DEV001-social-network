import { goTo } from '../App/routes';

// crear listener para navegar entre los componentes
const onNewPost = () => {
  const btnToWall = document.getElementById('navToWall');
  btnToWall.addEventListener('click', () => {
    // Aqui uso el goTo para cambiar la URL "navegar entre componentes"
    goTo(btnToWall.getAttribute("href"));
  });
};
export const Wall = (rootDiv) => {
  const template = `<div class="containerW">
    <h2> ¡Aqui mostraremos los Posts creados en "Post"! </h2>
    <button type="button" id="navToWall" href='/post'> Crear nuevo Post </button>
  </div>`;
  rootDiv.innerHTML = template;
  onNewPost();
};
