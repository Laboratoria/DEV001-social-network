import { doc } from 'firebase/firestore';
import {
  addDoc, collection, getDocs, deleteDoc,
} from 'firebase/firestore/lite';
import { app, db } from './firebase';

export class HiGirlAPI {
  static getPosts() {
    return getDocs(collection(db, 'posts'));
  }
}

export const guardarPost = (ownerId, contenido) => addDoc(collection(db, 'posts'), {
  content: contenido,
  likes: 0,
  ownerId,
});

export const obtenerPost = () => getDocs(collection(db, 'posts'));

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
