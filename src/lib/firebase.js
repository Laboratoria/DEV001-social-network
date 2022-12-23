/* -----Configuración de Firebase -----*/
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtdheZ_Orf0HZHxrU3VfNwphLezyAo5Kk',
  authDomain: 'social-network-1-ac2a2.firebaseapp.com',
  projectId: 'social-network-1-ac2a2',
  storageBucket: 'social-network-1-ac2a2.appspot.com',
  messagingSenderId: '363132346369',
  appId: '1:363132346369:web:5681f6e9dd0804c53ca000',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
