// services/firebase.js
import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDFrYmh2GZq5HRFOl-ilKLFg6eAfX0QYdE",
  authDomain: "jeran-f7b5f.firebaseapp.com",
  projectId: "jeran-f7b5f",
  storageBucket: "jeran-f7b5f.appspot.com",
  messagingSenderId: "250329669980",
  appId: "1:250329669980:web:681a4bd7effc45835c6199",
  measurementId: "G-33NJ19WBGV"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);

export { app, auth };

