import {
  addDoc, collection, deleteDoc, doc, getDocs,
} from 'firebase/firestore';

import { app, db } from './firebase';

export class HiGirlAPI {
  static getPosts() {
    return getDocs(collection(db, 'posts'));
  }
}

export const guardarPost = (ownerId, contenido, datePost) => addDoc(collection(db, 'posts'), {
  content: contenido,
  ownerId,
  fecha: datePost,
});

export const obtenerPost = () => getDocs(collection(db, 'posts'));

export const deletePost = (id) => deleteDoc(doc(db, 'posts', id));

/* export const deletePost = async (id, contenido) => {
  const colRef = collection(db, 'posts', id);
  await deleteDoc(colRef, {
    content: contenido,
  });
}; */

/* export const deletePost = (id, collectionName) => {
  const colRef = collection(db, collectionName);
  return deleteDoc(doc(colRef, id));
}; */
