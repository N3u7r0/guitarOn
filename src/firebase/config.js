import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBkHlNYkWOVyKpve1_ayXHNti7M8Q1EwtA",
  authDomain: "coder-guitaron.firebaseapp.com",
  projectId: "coder-guitaron",
  storageBucket: "coder-guitaron.appspot.com",
  messagingSenderId: "584610762288",
  appId: "1:584610762288:web:99fbc3c90984bde458e7f5",
};

// inicializamos los servicios de Firebase
const app = initializeApp(firebaseConfig);

// inicializamos la base de datos
export const db = getFirestore(app);

//al final no se guardan los datos eb firebase, pero esto queda para un futuro.
