<<<<<<< HEAD
import { CerrarSesión } from '../lib/auth';

export const logWithGoogle = (changeHashFn) => {
  const btnCerrarSesion = document.getElementById('btnCerrarSesión');
  btnCerrarSesion.addEventListener('click', () => {
    CerrarSesión(changeHashFn);
  });
};

export const Wall = (rootDiv) => {
  const templateW = `<div class="contenedorWall">
  <div class="menu">
    <img class="logoW" src="images/logo2.jpeg">
    <button class="btnCerrarSesión" id="btnCerrarS" type="button">Cerrar Sesión</button>
  </div>
<div class="containerPost">
  <input type="text" class="inputPost" id="name" placeholder="Recomienda aquí tu sendero favorito" required>
  <button class="btnPublicar" id="btnPublicar" type="button"> Publicar </button>
</div>
<footer class="footer">
  <p>Copyright &copy; 2022 <a target="_blank" href="https://github.com/Januha88">Januhary González</a> and <a
      href="https://github.com/PameSegovia" target="_blank">Pamela Segovia</a> </p>
</footer>
</div>
`;
  rootDiv.innerHTML = templateW;
=======
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
>>>>>>> aae835a29f893135f198ea175b7a69d600ec941c
};
