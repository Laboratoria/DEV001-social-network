import { doc } from 'firebase/firestore';
import {
  addDoc, collection, getDocs, deleteDoc, updateDoc,
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

export const editarPost = async (id, contenido) => {
  const postRef = doc(db, 'posts', id);
  await updateDoc(postRef, {
    content: contenido,
  });
};

export const obtenerPost = () => getDocs(collection(db, 'posts'));

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));
