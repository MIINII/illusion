// dotenv
import dotenv from 'dotenv';
dotenv.config();

// async await 사용
import 'regenerator-runtime/runtime.js';

// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseApp = initializeApp({
  /* config */
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
});

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  /* check status */
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
