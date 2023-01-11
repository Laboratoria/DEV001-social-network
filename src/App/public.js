import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

import {
  app,
  db,
} from './firebase';

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

export const obtenerDoc = (id) => getDoc(doc(db, 'posts', id));

export const editarPost = async (id, contenido) => {
  console.log(id);
  const postRef = doc(db, 'posts', id);
  console.log(postRef);
  await updateDoc(postRef, {
    content: contenido,
  });
};
