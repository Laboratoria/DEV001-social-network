import {
  collection,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import {
  app,
} from '../App/firebase';
import {
  editarPost,
} from '../App/public';

const db = getFirestore(app);
export const Post = (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    rootDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;

      rootDiv.insertAdjacentHTML('afterbegin', `
  <div class="mostrandoPosts">
      <textarea disabled data-doc-id="${doc.id}" id="${doc.id}" >${content}</textarea>
      <section class= "botones>
      <i class="fa-regular fa-pen"></i>
      <button class="btnEditar"  data-doc-id="${doc.id}" id="btnEditar"  type="button" > Editar Post </button>
      <button class="btnCancelar" hidden  data-doc-id="${doc.id}" id="${doc.id}-cancelar"  type="button" > Cancelar Edición </button>
      <button class="btnActualizar" hidden data-doc-id="${doc.id}" id="${doc.id}-actualizar"  type="button" > Actualizar </button>
      <button class="btnEliminar "data-doc-id="${doc.id}" id="btnEliminarr"  type="button" > Eliminar Post </button>
      </section>
  </div>`);

      const btnsAct = rootDiv.querySelectorAll('.btnActualizar');
      const textarea = document.getElementById(doc.id);
      const btnCancelarEdit = document.getElementById(`${doc.id}-cancelar`);
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

      const btnsEdit = rootDiv.querySelectorAll('.btnEditar');
      const btnActualizar = document.getElementById(`${doc.id}-actualizar`);
      btnsEdit.forEach((btnEdit) => {
        btnEdit.addEventListener('click', () => {
          textarea.disabled = false;
          btnCancelarEdit.hidden = false;
          btnActualizar.hidden = false;
        });
      });

      const originContent = textarea.value;
      btnCancelarEdit.addEventListener('click', () => {
        textarea.disabled = true;
        textarea.value = originContent;
        btnCancelarEdit.hidden = true;
        btnActualizar.hidden = true;
      });
    });
  });
};

