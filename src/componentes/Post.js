import {
  collection,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import {
  app,
} from '../App/firebase';
import {
  deletePost,
  editarPost,
} from '../App/public';
import { goTo } from '../App/routes';

const db = getFirestore(app);
export const Post = (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    rootDiv.innerHTML = `<header class="header">
    <div class="menu">
    <button class="btnCerrarS" id="btnCerrarS" type="button">Cerrar Sesión</button>
    <button class="volver" id="volver" type="button">Ir a Publicar</button>
    </div>
    </header>
    <div class="contenedorTodo" id="contenedorTodo" >
      <div class="postContainer" id="postContainer"></div> 
      <div class="imgPost" id="imgPost">
        <img class="imagenPost" id="imagenPost" src="https://i.pinimg.com/originals/9a/e2/27/9ae2279421fa92a9574449d529706c8a.gif">
      </div>
    </div>
      `;
    const volverAlWall = () => {
      const btnVolver = document.getElementById('volver');
      btnVolver.addEventListener('click', () => {
        goTo('/wall');
      });
    };
    const volverAlHome = () => {
      const btnVolverAlHome = document.getElementById('btnCerrarS');
      btnVolverAlHome.addEventListener('click', () => {
        goTo('/');
      });
    };
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;
      const mostrandoPosts = document.getElementById('postContainer');
      mostrandoPosts.insertAdjacentHTML('afterbegin', `
  <div id="mostrandoPosts" class="mostrandoPosts">
      <textarea disabled class="textareaPost" data-doc-id="${doc.id}" id="${doc.id}" >${content}</textarea>
      <section class= "botones>
      <i class="fa-regular fa-pen"></i>
      <button class="btnEditar"  data-doc-id="${doc.id}" id="btnEditar"  type="button" >Editar  <i class="fa-solid fa-pencil"  ></i> </button>
      <button class="btnCancelar" hidden  data-doc-id="${doc.id}" id="${doc.id}-cancelar"  type="button" >Cancelar<i class="fa-solid fa-xmark"></i></button>
      <button class="btnActualizar" hidden data-doc-id="${doc.id}" id="${doc.id}-actualizar"  type="button" >Guardar<i class="fa-solid fa-floppy-disk"> </i></button>
      <button class="btnEliminar"data-doc-id="${doc.id}" id="${doc.id}-eliminar"  type="button" >Eliminar<i class="fa-regular fa-trash-can"> </i></button>
      </section>
  </div>`);

      // FUNCIÓN EDITAR POST
      const btnsAct = rootDiv.querySelectorAll('.btnActualizar');
      const textarea = document.getElementById(doc.id);
      const btnCancelarEdit = document.getElementById(`${doc.id}-cancelar`);
      const btnsDelete = document.getElementById(`${doc.id}-eliminar`);
      const btnsEdit = rootDiv.querySelectorAll('.btnEditar');
      btnsAct.forEach((btnActualizar) => {
        btnActualizar.addEventListener('click', ({ target: { dataset } }) => {
          btnActualizar.disabled = true;
          textarea.disabled = true;
          const newContent = textarea.value;
          editarPost(dataset.docId, newContent)
            .then(() => {
              textarea.disabled = true;
              btnCancelarEdit.hidden = true;
              btnActualizar.hidden = true;
              btnsDelete.hidden = false;
              btnsEdit.hidden = false;
              alert('¡Se actualizó correctamente!');
            })
            .catch((error) => {
              btnActualizar.disabled = false;
              textarea.disabled = false;
              alert('¡Hubo un error, el post no se ha podido actualizar!');
              console.log(error);
            });
        });
      });
      const btnActualizar = document.getElementById(`${doc.id}-actualizar`);
      btnsEdit.forEach((btnEdit) => {
        btnEdit.addEventListener('click', () => {
          btnsEdit.hidden = true;
          textarea.disabled = false;
          btnCancelarEdit.hidden = false;
          btnActualizar.hidden = false;
          btnsDelete.hidden = true;
        });
      });
      const originContent = textarea.value;
      btnCancelarEdit.addEventListener('click', () => {
        btnsEdit.hidden = false;
        textarea.disabled = true;
        textarea.value = originContent;
        btnCancelarEdit.hidden = true;
        btnActualizar.hidden = true;
        btnsDelete.hidden = false;
      });
    });

    /* FUNCIÓN ELIMINAR POST--- AQUI COMIENZA */
    const btnsDelete = rootDiv.querySelectorAll('.btnEliminar');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        deletePost(dataset.docId)
          .then(() => {

          })
          .catch((error) => {
            console.log(error);
          });
      });
    });
    volverAlWall();
    volverAlHome();
  });
};
