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
} from '../App/public';

const db = getFirestore(app);
export const Post = async (rootDiv) => {
  onSnapshot(collection(db, 'posts'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const content = post.content;
      console.log(content);
      rootDiv.insertAdjacentHTML('afterbegin', `<div id= "mostrandoPosts" class="mostrandoPosts">
      <p id="contenedores" >${content}</p>

      <button class="btnEditar" id="btnEditar"  type="button" > Editar Post </button>
      <button class="btnEliminar" id="btnELiminar"  type="button" > Eliminar Post </button>
   
  </div>`);
    });
  });
  const btnDelete = rootDiv.querySelectorAll('#btnELiminar');
  console.log(btnDelete);
  console.log(deletePost);
  btnDelete.forEach((button) => {
    button.addEventListener('click', () => {
      alert('Ok');
      if (confirm('Deseas eliminar este contenido?')) {
        alert('Ok');
        deletePost(button.value);
      }
    });
  });
};
