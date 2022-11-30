import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDx90UpJPU3woIjM7nmQhCYSDIL6foM1G0',
  authDomain: 'social-network-8a647.firebaseapp.com',
  projectId: 'social-network-8a647',
  storageBucket: 'social-network-8a647.appspot.com',
  messagingSenderId: '1028473208915',
  appId: '1:1028473208915:web:452946a1e270b3017ec6a6',
  measurementId: 'G-HDJFBPXPQP',
};

// Initialize Firebase Authentication and get a reference to the service
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
