import { app, db } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

//console.log(db, app);
export class HiGirlAPI {
    static getPosts() {
        return getDocs(collection(db, "posts"));
    }
}
