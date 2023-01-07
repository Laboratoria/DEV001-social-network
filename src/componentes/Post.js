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
    const templateW = `<div class="container-Post">
            <img class="logoR" src="images/logo2.jpeg">
            <div id="post">
              <input type="text" class="inputR" id="name" placeholder="Recomienda aquí tu sendero favorito" required>
             <button class="btnPublicar " id="butbPublicar" type="button" > Publicar </button>
             <a  id="a" href = '/wall' class="volver" >Volver al Inicio</a></p>
            </div>
          </div>`;
    rootDiv.innerHTML = templateW;
  };
  