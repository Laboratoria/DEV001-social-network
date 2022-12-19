import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// Follow this pattern to import other Firebase services
// import { } from ’firebase/<service>’;
// TODO: Replace the following with your app’s Firebase project configuration
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


// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}
