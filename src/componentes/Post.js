import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../App/firebase';

// Add a new document in collection "cities"
// const guardarPost es una promesa ya que estoy retornando el addDoc que retorna una promesa
const guardarPost = (ownerId, contenido) => addDoc(collection(db, 'posts'), {
  content: contenido,
  likes: 0,
  ownerId,
});
const onClickPublicar = () => {
  const btn = document.getElementById('btnPublicar');
  const textarea = document.getElementById('contenido');
  const mensajeCargando = document.getElementById('mensajeCargando');
  btn.addEventListener('click', () => {
    const ownerId = 'a';
    const contenido = textarea.value;
    // aqui estoy habilitando el mensaje "Cargando..."
    mensajeCargando.hidden = false;
    btn.disabled = true;
    textarea.disabled = true;
    guardarPost(ownerId, contenido)
      .then(() => {
        // aqui estoy limpiando el input cuando se envíe el post sin error
        textarea.value = '';
        alert('¡El Post fuen guardado exitosamente!');
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

export const Post = (rootDiv) => {
  const templateW = `<div class="container-Post">
            <img class="logoR" src="images/logo2.jpeg">
            <div id="post">
            <h2 id="mensajeCargando" hidden>Cargando...</h2>
              <textarea name="textarea" rows ="50" cols="50" class="inputR" id="contenido" placeholder="Recomienda aquí tu sendero favorito"></textarea>
             <button class="btnPublicar " id="btnPublicar"  type="button" > Publicar </button>
             <a  id="a" href = '/wall' class="volver" >Volver al Inicio</a></p>
            </div>
          </div>`;
  rootDiv.innerHTML = templateW;
  onClickPublicar();
};
