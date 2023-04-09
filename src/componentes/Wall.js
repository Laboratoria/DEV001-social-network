import {
  getFirestore,
} from 'firebase/firestore';
import {
  guardarPost,
} from '../App/public';
import {
  app,
} from '../App/firebase';
import { goTo } from '../App/routes';

const db = getFirestore(app);
const cambiardeP = () => {
  const btnVerPosts = document.getElementById('verPosts');
  btnVerPosts.addEventListener('click', () => {
    goTo('/post');
  });
};
const onClickPublicar = () => {
  const btn = document.getElementById('btnPublicar');
  const textarea = document.getElementById('contenido');
  const mensajeCargando = document.getElementById('mensajeCargando');
  const imgCargando = document.getElementById('imgCargando');
  const imgGirl = document.getElementById('imgGirl');
  const flores = document.getElementById('flores');
  btn.addEventListener('click', () => {
    const ownerId = 'a';
    const contenido = textarea.value;
    const datePost = new Date();
    btn.hidden = true;
    btn.disabled = true;
    textarea.disabled = true;
    // aqui estoy habilitando el mensaje "Cargando..."
    mensajeCargando.hidden = false;
    imgCargando.hidden = false;
    textarea.hidden = true;
    imgCargando.hidden = false;
    imgGirl.hidden = true;
    flores.hidden = true;
    guardarPost(ownerId, contenido, datePost)
      .then(() => {
        // aqui estoy limpiando el input cuando se envíe el post sin error
        textarea.value = '';
        alert('¡Gracias por tu publicación!');
      })
      .catch(() => {
        alert('¡Hubo un error, el post no se ha podido guardar!');
      })
    // es opcional
      .finally(() => {
        // aqui se desactiva el mensaje "cargando..."
        mensajeCargando.hidden = true;
        imgCargando.hidden = true;
        btn.disabled = false;
        textarea.hidden = false;
        textarea.disabled = false;
        btn.hidden = false;
        imgCargando.hidden = true;
        imgGirl.hidden = false;
        flores.hidden = false;
      });
  });
};
export const Wall = (rootDiv) => {
  const templateWall = `<div class="contenedorWall">
  <div class="menu">
    <img class="logoW" src="">
    <button class="btnCerrarSesión" id="btnCerrarS" type="button">Cerrar Sesión</button>
    <button class="verPosts" id="verPosts" type="button">Ver Publicaciones</button>
  </div>
  <div id="contenedorW" class="contenedorW">
    <div class="contenedorImg">
      <img id="imgGirl" class="imgGirl" src="images/girl.jpeg">
    </div>
    <div class=contenedorInput">
      <div class="cargandoM">
      <h2 id="mensajeCargando" class="cargando" hidden>Cargando...</h2>
      <img id="imgCargando" class="imgGirl" src="https://i.giphy.com/media/kd8ynEx9HxlW5gVqg8/giphy.webp" hidden>
      </div>
      <textarea name="textarea" rows="50" cols="50" class="inputPost" id="contenido"
        placeholder="Recomienda aquí tu sendero favorito" required></textarea>
        <img src="images/flores2.jpeg" alt="flores" id="flores" class="flores-adorno">
      <button class="btnPublicar " id="btnPublicar" type="button"> Publicar </button>
    </div>
  </div>
</div>
`;
  const volverAlHome = () => {
    const btnVolverAlHome = document.getElementById('btnCerrarS');
    btnVolverAlHome.addEventListener('click', () => {
      goTo('/');
    });
  };
  rootDiv.innerHTML = templateWall;
  volverAlHome();
  cambiardeP();
  onClickPublicar();
  rootDiv.innerHTML = templateWall;
  cambiardeP();
  onClickPublicar();
};
