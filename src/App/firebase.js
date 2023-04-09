import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs, updateDoc,
} from 'firebase/firestore';
// Follow this pattern to import other Firebase services
import { getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDx90UpJPU3woIjM7nmQhCYSDIL6foM1G0',
  authDomain: 'social-network-8a647.firebaseapp.com',
  projectId: 'social-network-8a647',
  storageBucket: 'social-network-8a647.appspot.com',
  messagingSenderId: '1028473208915',
  appId: '1:1028473208915:web:452946a1e270b3017ec6a6',
  measurementId: 'G-HDJFBPXPQP',
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const cerrarS = signOut(auth);
export const currentUser = () => auth.currentUser;

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities', id);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

