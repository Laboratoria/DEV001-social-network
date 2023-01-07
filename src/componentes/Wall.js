import {
  getFirestore,
} from 'firebase/firestore';
import {
  guardarPost,
} from '../App/public';
import {
  app, auth,
} from '../App/firebase';
import { goTo } from '../App/routes';

const db = getFirestore(app);
const cambiardeP = () => {
  const btnVerPosts = document.getElementById('verPosts');
  btnVerPosts.addEventListener('click', () => {
    alert('bieeen!');
    goTo('/post');
  });
};
const onClickPublicar = () => {
  const btn = document.getElementById('btnPublicar');
  const textarea = document.getElementById('contenido');
  const mensajeCargando = document.getElementById('mensajeCargando');
  btn.addEventListener('click', () => {
    const user = auth.currentUser;
    const ownerId = 'a';
    const contenido = textarea.value;
    const datePost = new Date();
    // aqui estoy habilitando el mensaje "Cargando..."
    mensajeCargando.hidden = false;
    btn.disabled = true;
    textarea.disabled = true;
    guardarPost(ownerId, contenido, datePost, user)
      .then(() => {
        // aqui estoy limpiando el input cuando se envíe el post sin error
        textarea.value = '';
        alert('¡El Post fue guardado exitosamente!');
      })
      .catch(() => {
        alert('¡Hubo un error, el post no se ha podido guardar!');
      })
    // es opcional
      .finally(() => {
        // aqui se desactiva el mensaje "cargando..."
        mensajeCargando.hidden = true;
        btn.disabled = false;
        textarea.disabled = false;
      });
  });
};
export const Wall = (rootDiv) => {
  const templateWall = `<div class="contenedorWall">
  <div class="menu">
    <img class="logoW" src="images/logo2.jpeg">
    <button class="btnCerrarSesión" id="btnCerrarS" type="button">Cerrar Sesión</button>
    <button class="verPosts" id="verPosts" type="button"> Ver Todos los Posts </button>
    <button class="verPosts" id="verPosts" type="button"> Ver Todos los Posts </button>
  </div>
<div class="contenedorW">
    <h2 id="mensajeCargando" hidden>Cargando...</h2>
    <textarea name="textarea" rows ="50" cols="50" class="inputPost" id="contenido" placeholder="Recomienda aquí tu sendero favorito"></textarea>
    <button class="btnPublicar " id="btnPublicar"  type="button" > Publicar </button>
<div class="contenedorW">
    <h2 id="mensajeCargando" hidden>Cargando...</h2>
    <textarea name="textarea" rows ="50" cols="50" class="inputPost" id="contenido" placeholder="Recomienda aquí tu sendero favorito"></textarea>
    <button class="btnPublicar " id="btnPublicar"  type="button" > Publicar </button>
</div>
<footer class="footer">
  <p>Copyright &copy; 2022 <a target="_blank" href="https://github.com/Januha88">Januhary González</a> and <a
      href="https://github.com/PameSegovia" target="_blank">Pamela Segovia</a> </p>
</footer>
</div>

`;
  rootDiv.innerHTML = templateWall;
  cambiardeP();
  onClickPublicar();
  rootDiv.innerHTML = templateWall;
  cambiardeP();
  onClickPublicar();
};
