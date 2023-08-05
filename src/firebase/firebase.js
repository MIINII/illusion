// Firebase
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

// Auth
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_APIKEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// DataBase
export const db = getFirestore(app);


// auth
// export const auth = getAuth(app);

export default db;
