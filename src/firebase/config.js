import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  authDomain: "guitaron-95a31.firebaseapp.com",
  projectId: "guitaron-95a31",
  storageBucket: "guitaron-95a31.firebasestorage.app",
  messagingSenderId: "873754060620",
  apiKey: import.meta.env.VITE_APP_APPIKEY,  
  appId: import.meta.env.VITE_APP_ID
};

// inicializamos los servicios de Firebase
const app = initializeApp(firebaseConfig);

// inicializamos la base de datos
export const db = getFirestore(app);

// inicializamos el servicio de autenticación
export const auth = getAuth(app);
