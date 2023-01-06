import {
  collection,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';

import {
  app,
} from '../App/firebase';
import { deletePost } from '../App/public';

const db = getFirestore(app);

export const Post = (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    rootDiv.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;
      rootDiv.insertAdjacentHTML('afterbegin', `
  <div class="mostrandoPosts">
      <p id="contUser" ></p>
      <p id="contenedores" >${content}</p>
      <section class= "botones>
      <button class="btnEditar " id="btnEditar"  type="button" > Editar Post </button>
      <button class="btnEliminar " data-id="${doc.id}"  type="button" > Eliminar Post </button>
      </section>
  </div>`);
    });
    const btnsDelete = rootDiv.querySelectorAll('.btnEliminar');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', ({ target: { dataset } }) => {
        console.log(dataset.id);
        deletePost(dataset.id);
        /* .then(() => {

          })
          .catch((error) => {
            console.log(error);
          }); */
      });
    });
  });
};
