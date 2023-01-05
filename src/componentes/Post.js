import {
  collection,
  onSnapshot,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';
import {
  app,
} from '../App/firebase';
import {
  guardarPost,
} from '../App/public';

const db = getFirestore(app);
export const Post = (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;

      rootDiv.insertAdjacentHTML('afterbegin', `
  <div class="mostrandoPosts">
      <textarea readonly  data-doc-id="${doc.id}" id="${doc.id}" >${content}</textarea>
      <section class= "botones>
      <i class="fa-regular fa-pen"></i>
      <button class="btnEditar"  data-doc-id="${doc.id}" id="btnEditar"  type="button" > Editar Post </button>
      <button class="btnEditar"  data-doc-id="${doc.id}" id="btnEditar"  type="button" > Cancelar Edición </button>
      <button class="btnEditar"  data-doc-id="${doc.id}" id="btnEditar"  type="button" > Actualizar </button>
      <button class="btnEliminar "data-doc-id="${doc.id}" id="btnEliminarr"  type="button" > Eliminar Post </button>
      </section>
  </div>`);
    });
  });
};

/* Editar Post funcionalidad del botón
const editar = () => {
  const btn = document.getElementById('btnEditar');

};

  ('click',event) => {
  const btnRef = event.target;
  const id = btnRef.dataset.docId;
  const textarea = document.getElementById(id);
};
*/
