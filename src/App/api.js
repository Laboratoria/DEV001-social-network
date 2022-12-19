import { collection, getDocs } from 'firebase/firestore/lite';
import { app, db } from './firebase';

// console.log(db, app);
export class HiGirlAPI {
  static getPosts() {
    return getDocs(collection(db, 'posts'));
  }
}
