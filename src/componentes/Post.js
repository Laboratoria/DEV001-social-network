import {
  collection,
  onSnapshot,
  getFirestore,
} from 'firebase/firestore';
import {
  app,
} from '../App/firebase';

/* Editar Post funcionalidad del botón
const editarPost = () => {
  const btn = document.getElementById('btnEditar');
};
*/
const db = getFirestore(app);
export const Post = async (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;
      console.log(content);
      rootDiv.insertAdjacentHTML('afterbegin', `
  <div class="mostrandoPosts">
      <p id="contenedores" >${content}</p>
      <section class= "botones>
      <button class="btnEditar " id="btnEditar"  type="button" > Editar Post </button>
      <button class="btnEliminar " id="btnEliminarr"  type="button" > Eliminar Post </button>
      </section>
  </div>`);
    });
  });
};

/* const btnsDelete = divPost.querySelectorAll(‘.btnDelete’);
btnsDelete.forEach((btn) => {
  btn.addEventListener('click’, ({
    alert(Ok); */
